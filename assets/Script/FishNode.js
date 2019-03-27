/*****************************************
 鱼游动
 *****************************************/
const fishPath = require("FishPathConfig");
var fishConfig = require("FishConfig");

cc.Class({
    extends: cc.Component,

    properties: {
        //起始位置
        oriPosition: null,
        //鱼的速度
        _speed: 0,
        //贝塞尔曲线相关
        _t: 0,
        _pointArray: [],     //点数组
        _timeDt: 0,        //取值间隔
        _fishType: 0,       //鱼类型
        _existTime: 0       //存活时间
    },

    // use this for initialization
    onLoad: function () {
        this.schedule(this.updateMove,0);
    },

    //创建鱼游动动画
    createFishSwimAni: function (fishInfo) {
        let self = this;
        this._fishType = fishInfo.type;
        let fishArray = fishConfig.getFishArray();
        if (fishArray[this._fishType] == undefined) {
            console.log("don't find fish type" + this._fishType);
            return;
        }
        var speed = fishArray[this._fishType].Fish.Speed;

        let pathArray = fishPath.getFishPathArray();
        let distance = pathArray[fishInfo.pathId].distance;
        /* FishPathConfig  计算出总长度 S
         * V*T*60       λ
         * ———————  =  ———  ( 贝塞尔曲线, 以速度 V 的形式划分了 1000 份(帧) )
         *   S          1
         *
         *   _timeDt 相当总长度中 该速度 长度的所占比例
         * */
        self._timeDt = speed / distance;
        self._t = self.getFishSwimDt();
        //鱼
        let swimAnimation = this.node.getComponent(cc.Animation);
        swimAnimation.play("fish" + this._fishType);
        //设置初始位置
        let posArray = pathArray[fishInfo.pathId].points;
        this._pointArray = fishPath.changeIntoPoint(posArray);
        this.node.setPosition(this._pointArray[0]);
    },

    //设置鱼角度
    setFishDegree: function (pos) {
        if(pos == null){
            return;
        }
        let self = this;
        let k = 0;

        self.oriPosition = self.node.getPosition();
        let direction = pos.x - self.oriPosition.x > 0 ? 0 : 1;

        if (pos.x - self.oriPosition.x != 0) {
            k = (pos.y - self.oriPosition.y) / (pos.x - self.oriPosition.x);
            let degree = Math.atan(k);

            if (k > 0) {
                self.node.rotation = -degree * 180 / Math.PI + 180 * direction;
            } else {
                self.node.rotation = -degree * 180 / Math.PI - 180 * direction;
            }
        } else {
            if (pos.y - self.oriPosition.y > 0) {
                self.node.rotation = 90;
            } else {
                self.node.rotation = -90;
            }
        }
    },

    //设置贝塞尔曲线位置
    getFishPosition: function (isNext) {
        let self = this;
        let position = null;

        if(isNext){
            self._t = self.getFishSwimDt() + this._timeDt*10;
        }else{
            self._t = self.getFishSwimDt();
        }

        if (self._t < 1) {
            if (self._pointArray.length == 2) {
                position = fishPath.getLinePos(self._pointArray, self._t);
            }
            else if (self._pointArray.length == 3) {
                position = fishPath.getTwoLevelBezier(self._pointArray, self._t);
            } else if (self._pointArray.length == 4) {
                position = fishPath.getThreeLevelBezier(self._pointArray, self._t);
            }
        }else{
            console.log("游动结束");
            this.unschedule(this.updateMove);
        }
        return position;
    },

    //获贝塞尔曲线中的参数的值(0~1)
    getFishSwimDt: function () {
        /* FishPathConfig  计算出总长度 S
         * V*T*60       λ
         * ———————  =  ———  ( 贝塞尔曲线, 以速度 V 的形式划分了 1000 份(帧) )
         *   S          1
         *
         *   _timeDt 相当总长度中 该速度 长度的所占比例
         * */
        return this._existTime * 60 * this._timeDt;
    },
    
    clearFish:function () {
        this.unschedule(this.updateMove);
        let swimAnimation = this.node.getComponent(cc.Animation);
        swimAnimation.stop("fish" + this._fishType);
    },
    
    updateMove: function (dt) {
        this._existTime += dt;
        let pos = this.getFishPosition();
        if(pos !== null){
            this.node.setPosition(pos);
            this.setFishDegree(this.getFishPosition(true));
        }
    }
});
