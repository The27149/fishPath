cc.Class({
    extends: cc.Component,

    properties: {
        _itemId:0,
        _typeId:0,
        pathIdLabel:cc.Label
    },

    // use this for initialization
    onLoad: function () {

    },

    initItem:function (type,pathId) {
        this._itemId = pathId;
        this._typeId = type;
        this.pathIdLabel.string = pathId;
    },
    
    selectSate:function () {
        this.pathIdLabel.node.color = cc.Color.RED;;
    },
    
    normalState:function () {
        this.pathIdLabel.node.color = cc.Color.WHITE;;
    },
    
    getPathId:function () {
        return this._itemId;
    },

    getLineType:function () {
        return this._typeId;
    }
});
