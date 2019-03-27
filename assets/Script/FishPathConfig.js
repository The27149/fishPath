/*****************************************
 * @file     FishPathConfig.js
 * @brief    鱼的路径配置表
 *****************************************/
var FishPathConfig = function () {
//鱼的路径
    this.fishPathArray = [];
};

var p = FishPathConfig.prototype;


//获得鱼的路径
p.getFishPathArray = function () {
    return this.fishPathArray;
};

//设置鱼阵的路径
p.setFishPathArray = function (pathArray) {
    this.fishPathArray = pathArray;
};

//加载路径配置表
p.loadPath = function (path) {
    let self = this;

    cc.loader.loadRes(path,function (err, pathArray) {
        if (err) {
            console.log("路径加载失败");
            console.log(err.message || err);
            return;
        }
        self.fishPathArray =  pathArray;
        console.log("路径加载完成");
        console.log(self.fishPathArray);
    });
};

//转化成坐标形式
p.changeIntoPoint = function (pathMap) {
    var posArray = [];
    pathMap.map(function (item) {
        let arrayRes = item.split(",");
        posArray.push(cc.v2(parseFloat(arrayRes[0]),parseFloat(arrayRes[1])));
    });
    return posArray;
};

// //计算所有路径长度
// p.countPathLength = function () {
//     let self = this;
//     let length = self.fishPathArray.length;
//     let pathArray = self.fishPathArray;
//
//     for (let i = 0; i < length; i++){
//         self.fishPathArray[i].distance = self.countPerPathLength(pathArray[i]);
//     }
//     console.log(self.fishPathArray);
// };

//计算每一条路径长度
p.countPerPathLength = function (pointArray) {
    let self = p;
    let distance = 0;

    if (pointArray.length == 2){
        distance = self.getDistance(pointArray[0],pointArray[1]);
    }else if(pointArray.length == 3){
        let t = 0;
        //取样1000个点 求近似距离 间隔0.001
        while (t < 1){
            let point0 = self.getTwoLevelBezier(pointArray,t);
            let point1 = self.getTwoLevelBezier(pointArray,t+0.001);
            distance += self.getDistance(point0,point1);
            t = t+0.001;
        }
    }else if(pointArray.length == 4) {
        let t = 0;
        //取样1000个点 求近似距离 间隔0.001
        while (t < 1){
            let point0 = self.getThreeLevelBezier(pointArray,t);
            let point1 = self.getThreeLevelBezier(pointArray,t+0.001);
            distance += self.getDistance(point0,point1);
            t = t+0.001;
        }
    }
    return distance;
};

//根据参数t(0-1) 返回二阶贝塞尔曲线坐标
p.getTwoLevelBezier = function (posArray,t) {
    let self = p;
    let x = 0;
    let y = 0;

    x = (1-t)*(1-t)*posArray[0].x + 2*t*(1-t)*posArray[1].x + t*t*posArray[2].x;
    y = (1-t)*(1-t)*posArray[0].y + 2*t*(1-t)*posArray[1].y + t*t*posArray[2].y;

    return cc.v2(x,y);
};

//根据参数t(0-1) 返回三阶贝塞尔曲线坐标
p.getThreeLevelBezier = function (posArray,t) {
    let self = p;
    let x = 0;
    let y = 0;

    x = (1-t)*(1-t)*(1-t)*posArray[0].x + 3*t*(1-t)*(1-t)*posArray[1].x + 3*t*t*(1-t)*posArray[2].x+t*t*t*posArray[3].x;
    y = (1-t)*(1-t)*(1-t)*posArray[0].y + 3*t*(1-t)*(1-t)*posArray[1].y + 3*t*t*(1-t)*posArray[2].y+t*t*t*posArray[3].y;

    return cc.v2(x,y);
};

//给定两点间的距离
p.getDistance = function (point1,point2) {
    let x = point1.x - point2.x;
    let y = point1.y - point2.y;
    return Math.sqrt(x*x + y*y);
};

//返回直线的坐标
p.getLinePos = function (posArray,t) {
    let self = p;
    let k = (posArray[1].y - posArray[0].y)/(posArray[1].x - posArray[0].x);
    let b = posArray[0].y - k*posArray[0].x;

    let x = posArray[0].x + t*(posArray[1].x - posArray[0].x);
    let y = x*k+b;
    return cc.v2(x,y);
};

//返回角度
p.getAngel = function (point1,point2) {
    let k = (point2.y - point1.y)/(point2.x - point1.x);
    let angel = Math.atan(k)*180/Math.PI;

    return k > 0 ? (90 - angel) : (-90- angel);
};

//删除某一条线
p.deleteLineById = function (pathId) {
    if(this.fishPathArray[pathId]){
        delete this.fishPathArray[pathId];
    }
};

//读取表格并进行赋值
p.resetPathConfig = function (configArray) {
    var pathId = 0,pos1 = 0, pos2 = null,pos3 = null,pos4 = null;
    this.fishPathArray = {};
    var posArray = [];
    var tempArray = null;
    for(var i = 0;i < configArray.length;i++){
        tempArray = configArray[i];
        for(var j=1 ; j < tempArray.length ; j++) {
            posArray = [];
            let info = tempArray[j];
            if (info["编号"]) {
                pathId = info["编号"];
            }
            if (info["坐标1"]) {
                pos1 = info["坐标1"];
                posArray.push(pos1);
            }
            if (info["坐标2"]) {
                pos2 = info["坐标2"];
                posArray.push(pos2);
            }
            if (info["坐标3"]) {
                pos3 = info["坐标3"];
                posArray.push(pos3);
            }
            if (info["坐标4"]) {
                pos4 = info["坐标4"];
                posArray.push(pos4);
            }
            let len = this.countPerPathLength(this.changeIntoPoint(posArray));
            let obj = {
                distance: Number(parseFloat(len).toFixed(2)),
                points: posArray
            };
            this.fishPathArray[pathId] = obj;
            obj = null;
            info = null;
        }
    }
    cc.log("重置之后路径");
    cc.log(this.fishPathArray);
};

var fishPathConfig = new FishPathConfig();
module.exports = fishPathConfig;