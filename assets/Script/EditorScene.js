var fishConfig = require("FishConfig");
var fishWaveConfig = require("FishMatrixConfig");
var jsonReadWriteUtil = require("JsonReadWrite");
var httpRequest = require("HttpRequestII");
var jsXlsx = require("JsXlsxUtils");

const scaleOffset = 0.1;

cc.Class({
    extends: cc.Component,

    properties: {
        fishLayer: cc.Node,
        fishPrefab: cc.Prefab,
        matrixPrefab: cc.Prefab,
        fishIdInput: cc.EditBox,
        matrixIdInput: cc.EditBox,
        screentLayer:cc.Node
    },

    // use this for initialization
    onLoad: function () {
        fishConfig.loadFish("ResConfig/fish_config");
        fishWaveConfig.loadFishMatrix("ResConfig/fishWave");
        this.screenScale = 1;
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.mouseScaleCall, this);
        
        this.fish = null;
        this.maxtixNode = null;
        this.matrixId = 0;          //鱼阵的ID
        this.matrix = 0;            //鱼阵的ID

        this.lineManger = this.node.getComponent("LineManager");
    },

    onDestroy: function () {
        this.node.off(cc.Node.EventType.MOUSE_WHEEL, this.mouseScaleCall, this);
    },

    //滚轮进行场景的缩放
    mouseScaleCall: function (event) {
        switch (event.type) {
            case cc.Node.EventType.MOUSE_WHEEL:
                if(event._scrollY > 0){
                    //向上
                    this.screenScale += scaleOffset;
                }else{
                    //向下
                    this.screenScale -= scaleOffset;
                }
                this.screentLayer.setScale(this.screenScale);
                break;
            default:
                break;
        }
    },

    //创建单条鱼
    createFish: function (event) {
        this.clearCall();
        if (this.fishIdInput.string == "") {
            console.log("鱼类型没有填写");
            return;
        }
        var fishInfo = {
            type: this.fishIdInput.string,
            pathId: this.lineManger.getLineInputPathId()
        };
        this.createFishAndLine(fishInfo, false);

    },

    //创建鱼阵
    createFishMatrix: function (event) {
        this.clearCall();
        if (this.matrixIdInput.string == "") {
            console.log("鱼阵型没有填写");
            return;
        }
        var fishInfo = {
            type: this.matrixIdInput.string,
            pathId: this.lineManger.getLineInputPathId()
        };

        this.matrixId = fishInfo.type;           //鱼阵的ID
        let matrixArray = fishWaveConfig.getFishMatrixArray();
        this.matrix = matrixArray[this.matrixId];
        this.createFishAndLine(fishInfo, true);
    },

    //创建鱼，鱼阵 和 线并且会游走
    createFishAndLine: function (fishInfo, isMatrix) {
        if (isMatrix) {
            //创建鱼阵型
            this.maxtixNode = cc.instantiate(this.matrixPrefab);
            this.fishLayer.addChild(this.maxtixNode);
            this.maxtixNode.getComponent("MatrixNode").createMatrixSwimAni(fishInfo);
            if (!fishInfo.pathId) {
                this.maxtixNode.setPosition(640,360);
            }
        } else {
            //创建鱼
            this.fish = cc.instantiate(this.fishPrefab);
            this.fishLayer.addChild(this.fish);
            this.fish.getComponent("FishNode").createFishSwimAni(fishInfo);
        }

        if (fishInfo.pathId !== null) {
            this.pathId = fishInfo.pathId;
            this.lineManger.createLineByPathId(this.pathId);
        }
    },

    //清除所有元素
    clearCall: function (event) {
        if (this.fish) {
            this.fish.getComponent("FishNode").clearFish();
            this.fish.removeFromParent();
            this.fish = null;
        }
        if (this.maxtixNode) {
            this.maxtixNode.getComponent("MatrixNode").clearMatrix();
            this.maxtixNode.removeFromParent();
            this.maxtixNode = null;
        }
        this.lineManger.clearAllLine();
    },


    //鱼阵写入json到本地  只是适合原生平台,web 端的打印在荧幕
    writeMatrixInFile: function (event) {
        if (this.matrixIdInput.string == "") {
            console.log("鱼阵编号为空");
            return;
        } else {
            this.matrixId = this.matrixIdInput.string;
        }
        let matrixArray = fishWaveConfig.getFishMatrixArray();
        //将坐标转化成字符串
        matrixArray[this.matrixId] = this.matrix;
        jsonReadWriteUtil.writeJsonFile(matrixArray, "fishWave1");
    },

    //读取本地的excel表格
    readExcelContent: function () {
        if (!cc.sys.isNative) {
            httpRequest.send("GET", cc.url.raw("resources/鱼阵.xlsx"), null, jsXlsx.read, null);
            setTimeout(()=> {
                cc.log(jsXlsx.getExcelObj());
                fishWaveConfig.resetMatrixConfig(jsXlsx.getExcelObj()[1]);
            }, 500);
        } else {
            console.log("暂时只是适合WEB端");
        }
    },

    closeTextArea:function (event) {
        var txtarea = document.getElementById("pathTxt");
        if (txtarea != null){
            txtarea.parentNode.removeChild(txtarea);
        }
        txtarea = null;
    }
});
