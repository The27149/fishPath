var fishConfig = require("FishConfig");
var fishWaveConfig = require("FishMatrixConfig");
var fishPathConfig = require("FishPathConfig");
var jsXlsx = require("JsXlsxUtils");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        var self = this;

        var p = document.createElement('p');//创建p节点
        p.innerHTML = 'json配置文件读取';//p节点显示的文字
        p.style.position = "absolute";
        p.style.left = "150px";
        p.style.top = "100px";
        cc.game.container.appendChild(p);

        var desp = document.createElement('p');//创建p节点
        desp.innerHTML = '上传json文件';//p节点显示的文字
        desp.id = "desLabel";
        desp.style.position = "absolute";
        desp.style.left = "150px";
        desp.style.top = "130px";
        desp.style.border = "solid";
        desp.style.width = "130px";
        cc.game.container.appendChild(desp);

        var o = document.createElement('input');
        o.type = 'file';
        o.name = "jsonFile";
        o.onchange = function(file){
            var f = file.currentTarget.files[0];
            document.getElementById("desLabel").innerHTML = f.name;
            self.readFile(file);
        };
        o.style.position = "absolute";
        o.style.left = "150px";
        o.style.top = "150px";
        o.style.opacity  = "0";
        cc.game.container.appendChild(o);

        var p1 = document.createElement('p');//创建p节点
        p1.innerHTML = 'Excel表格文件读取';//p节点显示的文字
        p1.style.position = "absolute";
        p1.style.left = "150px";
        p1.style.top = "165px";
        cc.game.container.appendChild(p1);


        var desp1 = document.createElement('p');//创建p节点
        desp1.innerHTML = '上传Excel文件';//p节点显示的文字
        desp1.id = "desLabel1";
        desp1.style.position = "absolute";
        desp1.style.left = "150px";
        desp1.style.top = "190px";
        desp1.style.border = "solid";
        desp1.style.width = "130px";
        cc.game.container.appendChild(desp1);

        var o1 = document.createElement('input');
        o1.type = 'file';
        o1.name = "excleFile";
        o1.onchange = function(file){
            var f = file.currentTarget.files[0];
            document.getElementById("desLabel1").innerHTML = f.name;
            require("JsXlsxUtils").readInput(file );
            setTimeout(()=> {
                if( f.name == "鱼阵.xlsx"){
                    fishWaveConfig.resetMatrixConfig(jsXlsx.getExcelObj()[1]);
                }else if( f.name == "鱼.xlsx"){
                    fishConfig.resetFishConfig(jsXlsx.getExcelObj()[1]);
                }else if( f.name == "鱼路径.xlsx"){
                    fishPathConfig.resetPathConfig(jsXlsx.getExcelObj());
                }
                o1.value = null;
            }, 500);
        };
        o1.style.position = "absolute";
        o1.style.left = "150px";
        o1.style.top = "210px";
        o1.style.opacity  = "0";
        cc.game.container.appendChild(o1);
    },

    readFile:function (file) {
        const reader = new FileReader();
        var f = file.currentTarget.files[0];
        var fileName = f.name;
        reader.onload = function (ev) {
            console.log("读取完成");
            var data = ev.target.result;
            //console.log(JSON.parse(data));
            if(fileName == "fish_config.json"){
                fishConfig.fishArray = JSON.parse(data);
                fishConfig.dealData(fishConfig.fishArray);

            }else if(fileName == "fish_path_config.json"){
                fishPathConfig.fishPathArray = JSON.parse(data);

            }else if(fileName == "fishWave.json"){
                fishWaveConfig.fishMatrixArray = JSON.parse(data);
            }
        };
        //reader.readAsBinaryString(f);
        reader.readAsText(f);
    }

});
