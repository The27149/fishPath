
/*****************************************
 * @file     FishConfig.js
 * @brief    鱼的配置信息
 * @author   
 * @date     2016-07-27
 *****************************************/
var FishConfig = function () {
//鱼的信息
    this.fishArray = [];
};

var p = FishConfig.prototype;


//获得鱼的信息数组
p.getFishArray = function () {
    return this.fishArray;
};

//加载路径配置表
p.loadFish = function (path) {
    let self = this;
    
    cc.loader.loadRes(path,function (err, array) {
        if (err) {
            console.log("鱼配置加载失败");
            console.log(err.message || err);
            return;
        }
        self.dealData(array);
        self.fishArray =  array;
        console.log("鱼配置加载完成");
    });

};

//整理加载的数据
p.dealData = function (array) {
    let length  = array.length;
    for(let i = 1; i < length; i++){
        array[i].Fish.SwimEffect = array[i].Fish.SwimEffect.split(",");
        array[i].Fish.Radius = array[i].Fish.Radius.split(",");
        array[i].Fish.DeathVoice = array[i].Fish.DeathVoice.split(",");
        if(array[i].Fish.Offset){
            array[i].Fish.Offset = array[i].Fish.Offset.split(",");
        }
        
    }
    //cc.log(array);
};

p.getFisInfoByType = function(type){
    let array = this.fishArray;
    for(var i = 0 ;i < array.length ; i++){
        if(type == array[i].Type){
            return array[i].Fish;
        }
    }
    console.log("not find fishInfo: "+type);
    return null;
};

p.resetFishConfig = function (configArray) {
    // var pathId = 0,pos1 = 0, pos2 = null,pos3 = null,pos4 = null;
    // this.fishMatrixArray = [];
    // for(var i=1;i<configArray.length;i++){
    //     let info = configArray[i];
    //     if(info["阵型ID"]){
    //         matrixId = info["阵型ID"];
    //         index = 0;
    //     }
    //     if(info["鱼ID"]){
    //         fishId = info["鱼ID"];
    //     }
    //     if(info["坐标编号"]){
    //         posId = info["坐标编号"];
    //     }
    //     if(info["相对X轴"]){
    //         posX = info["相对X轴"];
    //     }
    //     if(info["相对Y轴"]){
    //         posY = info["相对Y轴"];
    //     }
    //     if(!this.fishMatrixArray[matrixId]){
    //         this.fishMatrixArray[matrixId] = [];
    //     }
    //
    //     //如果有原来有的话 进行覆盖
    //     if(this.fishMatrixArray[matrixId][index]){
    //         this.fishMatrixArray[matrixId][index].posId = parseInt(posId);
    //         this.fishMatrixArray[matrixId][index].pos.x_axis = posX;
    //         this.fishMatrixArray[matrixId][index].pos.y_axis = posY;
    //         this.fishMatrixArray[matrixId][index].type = parseInt(fishId);
    //     }else{
    //         //原先可能没有的 就进行一个赋值
    //         let obj = {
    //             posId:parseInt(posId),
    //             pos:{
    //                 x_axis:posX,
    //                 y_axis:posY
    //             },
    //             type:parseInt(fishId)
    //         };
    //         this.fishMatrixArray[matrixId][index] = obj;
    //         obj = null;
    //     }
    //     index++;
    // }

    //cc.log(this.fishMatrixArray);
};


var fishConfig = new FishConfig();
module.exports = fishConfig;