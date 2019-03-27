var fishPathConfig = require("FishPathConfig");
var jsonReadWriteUtil = require("JsonReadWrite");
cc.Class({
    extends: cc.Component,

    properties: {
        drawLineLayer: cc.Node,
        pathIdInput: cc.EditBox,
        pointPrefab: cc.Prefab,
        lineScrollContent:cc.Node,
        lineItemPrefab:cc.Prefab,
    },

    // use this for initialization
    onLoad: function () {
        fishPathConfig.loadPath("ResConfig/fish_path_config");
        this.drawLine = null;       //临时创建线节点
        this.selectDrawLine = null;
        this.selectLineItem = null;
        this.drawLineArray = [];
        this.pointNodeArray = [];   //当前四个圆节点
        this.pointArray = [];       //当前绘制线的点
        this.pathId = 0;            //当前线ID。
        this.lineItemArray = [];

        this.createPoint();          //一开始就创建坐标点
    },
    
    clickToggleFun:function (event,customData) {
        let type  = parseInt(customData);
        let isClick = event.isChecked;
        if(isClick){
            this.createAllLineByType(type);
            this.createAllItemByType(type);
        }else{
            this.clearLineByType(type);
            this.clearAllLineItem(type);
        }
    },

    //更新路线
    updateDrawLine: function (drawLine,pos) {
        // lineTo (x, y)	添加一个新点，然后在画布中创建从该点到最后指定点的线条
        // bezierCurveTo (c1x, c1y, c2x, c2y, x, y)	创建三次方贝塞尔曲线
        // quadraticCurveTo (cx, cy, x, y)	创建二次贝塞尔曲线
        if (drawLine == null) {
            return;
        }
        let graphics = drawLine.getComponent(cc.Graphics);
        graphics.clear();
        if (pos.length < 2) {
            return;
        } else if (pos.length == 2) {
            graphics.moveTo(pos[0].x, pos[0].y);
            graphics.lineTo(pos[1].x, pos[1].y);
            graphics.stroke();
        } else if (pos.length == 3) {
            graphics.moveTo(pos[0].x, pos[0].y);
            graphics.quadraticCurveTo(pos[1].x, pos[1].y, pos[2].x, pos[2].y);
            graphics.stroke();
        } else if (pos.length == 4) {
            graphics.moveTo(pos[0].x, pos[0].y);
            graphics.bezierCurveTo(pos[1].x, pos[1].y, pos[2].x, pos[2].y, pos[3].x, pos[3].y);
            graphics.stroke();
        }
    },

    //输入框 点击enter键  输入点坐标
    pointInputCall: function (event, customData) {
        this.clickCreatePath(event);
    },

    //只是创建路径  可以通过输入坐标点 ，也可以只是输入路径ID
    clickCreatePath: function (event) {
        if (this.pathIdInput.string == "") {
            alert("没有填写路径ID");
            return;
        }
        let pathId = this.pathIdInput.string;
        let tempPosArray = [];
        let inputParent = this.node.getChildByName("inputlPanel");
        for (var index = 0; index < 4; index++) {
            let pointInput = inputParent.getChildByName("pointInput" + (index + 1));
            let str = pointInput.getComponent(cc.EditBox).string;
            if (str !== "") {
                let pos = str.split(',');
                let resultPos = cc.v2(parseFloat(pos[0]), parseFloat(pos[1]));
                if(resultPos.x == 0 && resultPos.y == 0 ){
                    //cc.log("用户没有输入值");
                }else{
                    tempPosArray.push(resultPos);
                }
                resultPos = null;
                pos = null;
            }
            str = null;
        }
        this.pathId = pathId;
        this.pointArray = tempPosArray;
        this.savePosToPosConfig();
        this.createLineByPathId(pathId);
        //设置这条线的 几个点的坐标点,设置输入框的坐标值
        this.setPointAndPathIdInput(pathId,this.pointArray);
        //添加左侧可以点击的 item
        let type  = this.getTypeByPathId(pathId);
        this.createLineItem(type,pathId);
        this.selectItemChangeState(pathId);
    },

    //创建显示的路线
    createLine: function (pos,type,pathId) {
        var tempLineNode = new cc.Node();
        this.drawLineLayer.addChild(tempLineNode);
        tempLineNode.setPosition(cc.v2(0, 0));
        let graphics = tempLineNode.addComponent(cc.Graphics);
        graphics.lineWidth = 2;
        let color = '#FFFFFF';
        switch (type){
            case 1:
                color = '#29FF00';
                break;
            case 2:
                color = '#FFE000';
                break;
            case 3:
                color = '#00FFF5';
                break;
            case 4:
                color = '#0066FF';
                break;
            case 5:
                color = '#A300FF';
                break;
            case 6:
                color = '#EDF58D';
                break;
            case 7:
                color = '#FF00C2';
                break;
            case 8:
                color = '#FFB05B';
                break;
            case 9:
                color = '#F3B3F1';
                break;
            case 10:
                break;
        }
        graphics.strokeColor = cc.hexToColor(color);
        this.updateDrawLine(tempLineNode,pos);
        let lineComp = tempLineNode.addComponent("LineNode");
        lineComp.initLine(type,pathId,color);

        return tempLineNode;
    },

    //创建操作点
    createPoint: function () {
        let inputParent = this.node.getChildByName("inputlPanel");
        for(var index = 0 ; index < 4 ; index++){
            var point = cc.instantiate(this.pointPrefab);
            let pointInput = inputParent.getChildByName("pointInput" + (index + 1));
            point.getComponent("PointNode").bindPointInput(pointInput, this);
            point.getComponent("PointNode").initPoint(index, cc.v2(0,0));
            this.drawLineLayer.addChild(point);
            this.pointNodeArray.push(point);
            point.active = false;
            point = null;
        }
        inputParent = null;
    },

    //根据 编号ID 进行创建线
    createLineByPathId:function (pathId) {
        var isExist = false;
        var type = this.getTypeByPathId(pathId);
        if(this.drawLineArray[type]){
            for(var i = 0 ; i < this.drawLineArray[type].length ; i++ ){
                let lineNode = this.drawLineArray[type][i];
                this.selectDrawLine = lineNode;
                if(pathId == lineNode.getComponent("LineNode").getLinePathId() ){
                    //已经存在该线条  改变一下坐标点
                    this.updateDrawLine(this.selectDrawLine,this.pointArray);
                    isExist = true;
                    break;
                }
                lineNode = null;
            }
        }else{
            this.drawLineArray[type] = [];
        }
        //如果当前线不存在 需要画线
        if(!isExist){
            let tempPosArray = this.getPosArrByPathId(pathId);
            let lineNode = this.createLine(tempPosArray,type,pathId);
            this.drawLineArray[type].push(lineNode);
            //查找选中的线 并且赋值 selectDrawLine ，变成选中状态
            this.selectLineChangeState(lineNode);
            tempPosArray = null;
        }
    },
    
    getPosArrByPathId:function (pathId) {
        let pathArray = fishPathConfig.getFishPathArray();
        let postArray = fishPathConfig.changeIntoPoint(pathArray[pathId].points);
        pathArray = null;
        return postArray;
    },

    //创建一种类型的全部线（比如是从左向右， 或者鱼阵路线）
    createAllLineByType:function (type) {
        let minId = 0;
        let maxId = 0;
        switch (type){
            case 1:  //左下角
                minId = 1000;
                maxId = 2000;
                break;
            case 2:  //左
                minId = 2000;
                maxId = 3000;
                break;
            case 3:  //左上角
                minId = 3000;
                maxId = 4000;
                break;
            case 4:  //右上角
                minId = 4000;
                maxId = 5000;
                break;
            case 5:  //右
                minId = 5000;
                maxId = 6000;
                break;
            case 6:  //右下角
                minId = 6000;
                maxId = 7000;
                break;
            case 7:  //四点
                minId = 7000;
                maxId = 8000;
                break;
            case 8:  //鱼阵
                minId = 8000;
                maxId = 9000;
                break;
            case 9:  //召唤
                minId = 9000;
                maxId = 10000;
                break;
            case 10:  //全部
                minId = 1000;
                maxId = 10000;
                break;
        }
        let pathArray = fishPathConfig.getFishPathArray();
        if(!this.drawLineArray[type]){
            this.drawLineArray[type] = [];
        }else{
            this.clearLineByType(type);
        }
        var tempPosArray = null;
        for(var key in pathArray){
            let id = parseInt(key);
            if(id > minId && id < maxId ){
                tempPosArray = fishPathConfig.changeIntoPoint(pathArray[key].points);
                let lineNode = this.createLine(tempPosArray,type,id);
                this.drawLineArray[type].push(lineNode);
                lineNode = null;
            }
        }
    },
    
    //清除某一类的线
    clearLineByType:function (type) {
        if(!this.drawLineArray[type]){
            return ;
        }
        for (var i = 0; i < this.drawLineArray[type].length; i++) {
            this.drawLineArray[type][i].removeFromParent();
            this.drawLineArray[type][i] = null;
        }
        this.drawLineArray[type].length = 0;
    },

    //清除所有线
    clearAllLine:function () {
        for (var type = 1; type <= this.drawLineArray.length ; type++) {
            this.clearLineByType(type);
        }

        for (var i = 0; i < this.pointNodeArray.length; i++) {
            this.pointNodeArray[i].active = false;
        }
        this.pointArray = [];
    },


    //移动点 或者 输入框改变
    changePosDrawLine: function (index, pos) {
        if (this.pointArray[index]) {
            this.pointArray[index] = pos;
            this.updateDrawLine(this.selectDrawLine,this.pointArray);
        }
    },

    getLineInputPathId:function () {
        if(this.pathIdInput.string != ""){
            return this.pathIdInput.string;
        }else{
            return null;
        }
    },

    getTypeByPathId:function (pathId) {
        var type =  parseInt(pathId / 1000);
        return type;
    },
    
    savePosToPosConfig:function () {
        if(this.pointArray.length == 0){
            return;
        }
        let pathArray = fishPathConfig.getFishPathArray();
        let points = [];
        for (var i = 0; i < this.pointArray.length; i++) {
            //将坐标转化成字符串
            points.push("" + this.pointArray[i].x + "," + this.pointArray[i].y);
        }
        pathArray[this.pathId] = {};
        pathArray[this.pathId].points = points;
        pathArray[this.pathId].distance = parseInt(fishPathConfig.countPerPathLength(this.pointArray));
        fishPathConfig.setFishPathArray(pathArray);
        points = null;
        pathArray = null;
    },

    createAllItemByType:function (type) {
        for(var i = 0 ; i < this.drawLineArray[type].length ; i++ ){
            this.createLineItem(type,this.drawLineArray[type][i].getComponent("LineNode").getLinePathId());
        }
    },
    
    clickLineItem:function (event) {
        let target = event.getCurrentTarget();
        let lineItem = target.getComponent("lineItem");
        let pathId = lineItem.getPathId();
        let lineType = lineItem.getLineType();
        this.pathId = pathId;
        //item 选中状态
        this.selectItemChangeState(pathId,lineItem);
        if(!this.drawLineArray[lineType]){
            return;
        }
        //查找选中的线 并且赋值 selectDrawLine ，变成选中状态
        for(var i = 0 ; i < this.drawLineArray[lineType].length ; i++ ){
            let lineNode = this.drawLineArray[lineType][i];
            if(pathId == lineNode.getComponent("LineNode").getLinePathId() ){
                this.selectLineChangeState(lineNode);
            }
            lineNode = null;
        }

        //设置这条线的 几个点的坐标点,设置输入框的坐标值
        this.setPointAndPathIdInput(pathId,this.getPosArrByPathId(pathId));
    },

    //选中线的状态
    selectLineChangeState:function (lineNode) {
        if(!lineNode){
            console.log("selectLineChangeState lineNode undefind");
        }
        //如果有选中的线 需要还原
        if(this.selectDrawLine){
            this.selectDrawLine.getComponent("LineNode").normalSate();
        }
        lineNode.getComponent("LineNode").selectState();
        this.selectDrawLine = lineNode;
    },

    //选中item的状态
    selectItemChangeState:function (pathId,itemObj) {
        if(this.selectLineItem){
            this.selectLineItem.normalState();
        }
        if(itemObj){
            itemObj.getComponent("lineItem").selectSate();
            this.selectLineItem = itemObj.getComponent("lineItem");
        }else{
            if(pathId){
                let itemNode = null;
                for(var i = 0 ; i < this.lineItemArray.length ; i++ ){
                    itemNode = this.lineItemArray[i];
                    let itemPathId = itemNode.getComponent("lineItem").getPathId();
                    if(itemPathId == pathId){
                        itemNode.getComponent("lineItem").selectSate();
                        this.selectLineItem = itemNode.getComponent("lineItem");
                        break;
                    }
                }
                itemNode = null;
            }else{
                console.log("selectItemChangeState pathid undefind");
            }
        }
    },

    createLineItem:function (type,pathId) {
        let itemNode = cc.instantiate( this.lineItemPrefab);
        this.lineScrollContent.addChild(itemNode);
        itemNode.on(cc.Node.EventType.TOUCH_END,this.clickLineItem.bind(this),itemNode);
        itemNode.getComponent("lineItem").initItem(type,pathId);
        this.lineItemArray.push(itemNode);
        itemNode = null;
    },
    
    clearAllLineItem:function (type) {
        if(this.selectDrawLine){
            this.selectDrawLine = null;
        }
        if(this.selectLineItem){
            this.selectLineItem = null;
        }
        for(var i = 0 ; i < this.lineItemArray.length ; i++ ){
          this.lineItemArray[i].off(cc.Node.EventType.TOUCH_END,this.clickLineItem.bind(this));
          this.lineItemArray[i].removeFromParent();
        }
        this.lineItemArray.length = 0;
        for (var i = 0; i < this.pointNodeArray.length; i++) {
            this.pointNodeArray[i].active = false;
        }
    },

    //选中线 或者 生成线的时候 进行设置点 和 输入框的值
    setPointAndPathIdInput:function (pathId,posArr) {
        this.pathIdInput.string = pathId;
        this.pointArray = posArr;
        for(var i = 0 ; i < this.pointNodeArray.length ; i++ ){
            if (this.pointNodeArray[i]) {
                if(posArr[i]){
                    this.pointNodeArray[i].active = true;
                    this.pointNodeArray[i].getComponent("PointNode").changePos(posArr[i]);
                }else{
                    this.pointNodeArray[i].active = false;
                }
            }
        }
    },
    
    deleteLine:function (event) {
        if (this.pathIdInput.string == "") {
            alert("没有填写路径ID");
            return;
        }
        let pathId = this.pathIdInput.string;
        //删除显示的某一个item
        let itemNode = null;
        for(var i = 0 ; i < this.lineItemArray.length ; i++ ){
            itemNode = this.lineItemArray[i];
            let itemPathId = itemNode.getComponent("lineItem").getPathId();
            if(itemPathId == pathId){
                itemNode.off(cc.Node.EventType.TOUCH_END,this.clickLineItem.bind(this));
                itemNode.removeFromParent();
                this.lineItemArray.splice(i,1);
                break;
            }
        }
        itemNode = null;
        //删除显示的某一条线
        var type = this.getTypeByPathId(pathId);
        if(this.drawLineArray[type]){
            for(var j = 0 ; j < this.drawLineArray[type].length ; j++ ){
                let lineNode = this.drawLineArray[type][j];
                if(pathId == lineNode.getComponent("LineNode").getLinePathId() ){
                    if(this.selectDrawLine == lineNode){
                        this.selectDrawLine = null;
                    }
                    lineNode.removeFromParent();
                    this.drawLineArray[type].splice(j,1);
                    break;
                }
                lineNode = null;
            }
        }
        //删除配置数组
        fishPathConfig.deleteLineById(pathId);
        //圆点需要消失
        for (let i = 0; i < this.pointNodeArray.length; i++) {
            this.pointNodeArray[i].active = false;
        }

        this.pathIdInput.string = "";
    },

    //路径写入json到本地  只是适合原生平台
    writePathInFile: function (event) {
        let pathArray = fishPathConfig.getFishPathArray();
        jsonReadWriteUtil.writeJsonFile(pathArray, "fish_path_config");
        pathArray = null;
    }

});
