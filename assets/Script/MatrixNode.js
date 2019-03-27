/*****************************************
 鱼阵游动
 *****************************************/
const fishPath = require("FishPathConfig");
var matrixConfig = require("FishMatrixConfig");

cc.Class({
    extends: cc.Component,

    properties: {
        fishAniPrefab:cc.Prefab,  //小鱼动画
        //起始位置
        oriPosition: null,
        //鱼的速度
        _speed: 0,
        //贝塞尔曲线相关
        _t: 0,
        _pointArray: [],     //点数组
        _timeDt: 0,        //取值间隔
        _matrixType: 0,      //鱼阵类型
        _existTime: 0,       //存活时间
        _pathId:-1
    },

    // use this for initialization
    onLoad: function () {

    },

    //创建鱼游动动画
    createMatrixSwimAni: function (fishInfo) {
        let self = this;
        this._matrixType = fishInfo.type;
        this._pathId = fishInfo.pathId;

        let matrixArray = matrixConfig.getFishMatrixArray();
        let matrix = matrixArray[this._matrixType];
        if (matrix == undefined) {
            console.log("don't find matrix type" + this._matrixType);
            return;
        }
        for(var i = 0; i < matrix.length ; i++){
            let tempMatrix = matrix[i];
            let fish =  cc.instantiate(this.fishAniPrefab);
            fish.setPosition(tempMatrix.pos.x_axis,tempMatrix.pos.y_axis);
            this.node.addChild(fish);
            //鱼
            let swimAnimation = fish.getComponent(cc.Animation);
            swimAnimation.play("fish"+tempMatrix.type);
        }

        if(this._pathId ) {
            var speed = 1.0;
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
            self._t = self.getMatrixSwimDt();

            let posArray = pathArray[fishInfo.pathId].points;
            this._pointArray = fishPath.changeIntoPoint(posArray);
            if (this._pointArray[0].x > 720) {
                this.node.setScale(1, -1);
            }
            //设置初始位置
            this.node.setPosition(this._pointArray[0]);
            this.setMatrixDegree(this.getMatrixPosition(true));
            this.schedule(this.updateMove,0);
        }
    },

    //设置鱼角度
    setMatrixDegree: function (pos) {
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
    getMatrixPosition: function (isNext) {
        let self = this;
        let position = null;

        if(isNext){
            self._t = self.getMatrixSwimDt() + this._timeDt*10;
        }else{
            self._t = self.getMatrixSwimDt();
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
    getMatrixSwimDt: function () {
        /* FishPathConfig  计算出总长度 S
         * V*T*60       λ
         * ———————  =  ———  ( 贝塞尔曲线, 以速度 V 的形式划分了 1000 份(帧) )
         *   S          1
         *
         *   _timeDt 相当总长度中 该速度 长度的所占比例
         * */
        return this._existTime * 60 * this._timeDt;
    },
    
    clearMatrix:function () {
        this.unschedule(this.updateMove);
    },
    
    updateMove: function (dt) {
        this._existTime += dt;
        let pos = this.getMatrixPosition();
        if(pos !== null){
            this.node.setPosition(pos);
            this.setMatrixDegree(this.getMatrixPosition(true));
        }
    }
});
