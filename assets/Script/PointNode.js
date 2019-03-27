cc.Class({
    extends: cc.Component,

    properties: {
        posLabel:cc.Label,
        indexLabel:cc.Label,
        _index:0,
        _pos:0,
        _select:false
    },

    // use this for initialization
    onLoad: function () {
        this.node.on("touchstart",this.touchStartFun,this);
        this.node.on("touchmove",this.touchMoveFun,this);
        this.node.on("touchend",this.touchEndFun,this);
        this.node.on("touchcancel",this.touchEndFun,this);
    },

    bindPointInput:function (input,lineManager) {
        this.inputNode = input;
        this.lineManager = lineManager;
    },

    initPoint:function (index,pos) {
        this._index = index;
        this.indexLabel.string = index;
        this.changePos(pos);
    },
    
    changePos:function (pos) {
        this._pos = pos;
        this.node.setPosition(pos) ;
        this.posLabel.string = ""+pos.x+","+pos.y;
        this.inputNode.getComponent(cc.EditBox).string = ""+pos.x+","+pos.y;
    },
    
    touchStartFun:function (event) {
        this._select = true;
    },

    touchMoveFun:function (event) {
        let pos = event.getLocation();
        let pos1 = event.getPreviousLocation();
        let tempPos = cc.pSub(pos,pos1);    //移动距离
        let changePos = cc.pAdd(this.node.getPosition(),tempPos);
        let resultPos = cc.v2(parseInt(changePos.x),parseInt(changePos.y));
        this.changePos(resultPos);
        this.lineManager.changePosDrawLine(this._index,resultPos);
    },

    touchEndFun:function (event) {
        this._select = false;
        this.lineManager.savePosToPosConfig();
    },
    
    getIndex:function () {
        return this._index;
    }
});
