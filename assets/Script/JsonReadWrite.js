
var JsonReadWriteUtil = function () {

    this.writeJsonFile = function (jsonText,fileName) {
        var str = JSON.stringify(jsonText);
        if (cc.sys.isNative) {
            let realUrl = cc.url.raw("resources/ResConfig/") + fileName + ".json";
            jsb.fileUtils.writeStringToFile(str, realUrl);
            console.log("写入成功");
        }else{
            //console.log("现在是非原生平台,只在原生平台读写");
            var tx=document.createElement("textarea");
            tx.name="txtName"  //创建一个name属性为"txtName"的textarea，
            tx.innerHTML = str;
            tx.id = "pathTxt";
            tx.style.position = "absolute";
            tx.style.left = "10%";
            tx.style.top = "100px";
            tx.rows = "100";
            tx.cols = "230";
            cc.game.container.appendChild(tx);
        }
    };

    this.readJsonFile = function (fileName) {
        let realUrl = cc.url.raw("resources/ResConfig/") + fileName + ".json";
        let jsonText;
        if (cc.sys.isNative) {
            let fileStr = jsonText = jsb.fileUtils.getStringFromFile(realUrl);
            console.log("读取文件");
            console.log(fileStr);
        }else{
            console.log("现在是非原生平台,只在原生平台读写");
        }
        return jsonText;
    }
};

module.exports = new JsonReadWriteUtil();
