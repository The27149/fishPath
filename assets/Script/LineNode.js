cc.Class({
    extends: cc.Component,

    properties: {
        _lineType : 0,
        _linePathId : 0,
        _preColor : "",
        _selectState : false
    },

    // use this for initialization
    onLoad: function () {

    },
    
    initLine:function (type,pathId,preColor) {
        this._lineType = type;
        this._linePathId = pathId;
        this._preColor = preColor;
    },

    selectState:function () {
        let graphics =  this.node.getComponent(cc.Graphics);
        graphics.strokeColor = cc.hexToColor("#FF0000");
        graphics.stroke();

       // graphics = null;
    },
    
    normalSate:function () {
        let graphics =  this.node.getComponent(cc.Graphics);
        graphics.strokeColor = cc.hexToColor(this._preColor);
        graphics.stroke();
        //graphics = null;

    },
    
    getLineType:function () {
        return this._lineType;
    },
    
    getLinePathId:function () {
        return this._linePathId;
    }

});
