
/*****************************************
 * @file     FishMatrixConfig.js
 *****************************************/
var FishMatrixConfig = function () {
//鱼阵的信息
    this.fishMatrixArray = [];
};

var p = FishMatrixConfig.prototype;


//获得鱼阵信息数组
p.getFishMatrixArray = function () {
    return this.fishMatrixArray;
};

//是否加载成功
p.isLoaded = false;

//获取鱼的配置是否加载成功
p.getIsLoaded = function () {
    return p.isLoaded;
};

//加载鱼的配置表
p.loadFishMatrix = function (path) {
    let self = this;
    cc.loader.loadRes(path,function (err, array) {
        if (err) {
            console.log("鱼阵配置加载失败");
            console.log(err.message || err);
            return;
        }
        console.log("鱼阵配置加载成功");
        self.fishMatrixArray =  array;
        self.isLoaded = true;

        //console.log(self.fishMatrixArray);
    });
};

p.resetMatrixConfig = function (configArray) {
    var matrixId = 0,fishId = 0,posX = 0, posY = 0,posId = 0,index = 0;
    this.fishMatrixArray = [];
    for(var i=1;i<configArray.length;i++){
        let info = configArray[i];
        if(info["阵型ID"]){
            matrixId = info["阵型ID"];
            index = 0;
        }
        if(info["鱼ID"]){
            fishId = info["鱼ID"];
        }
        if(info["坐标编号"]){
            posId = info["坐标编号"];
        }
        if(info["相对X轴"]){
            posX = info["相对X轴"];
        }
        if(info["相对Y轴"]){
            posY = info["相对Y轴"];
        }
        if(!this.fishMatrixArray[matrixId]){
            this.fishMatrixArray[matrixId] = [];
        }

        //如果有原来有的话 进行覆盖
        if(this.fishMatrixArray[matrixId][index]){
            this.fishMatrixArray[matrixId][index].posId = parseInt(posId);
            this.fishMatrixArray[matrixId][index].pos.x_axis = posX;
            this.fishMatrixArray[matrixId][index].pos.y_axis = posY;
            this.fishMatrixArray[matrixId][index].type = parseInt(fishId);
        }else{
            //原先可能没有的 就进行一个赋值
            let obj = {
                posId:parseInt(posId),
                pos:{
                    x_axis:posX,
                    y_axis:posY
                },
                type:parseInt(fishId)
            };
            this.fishMatrixArray[matrixId][index] = obj;
            obj = null;
        }
        index++;
    }

    //cc.log(this.fishMatrixArray);
};

var fishMatrixConfig = new FishMatrixConfig();
module.exports = fishMatrixConfig;
