/**
 * Created by dell on 2017/6/14.
 */
//另外一种方式
// var o = document.createElement('input');
// o.type = 'file';
// o.name = "xlsxFile";
// o.onchange = function(file){
//     require("JsXlsxUtils").read(file );
// };
// o.style.position = "absolute";
// o.style.left = "150px";
// o.style.top = "150px";
// cc.game.container.appendChild(o);

//第二种方式
// let url = cc.url.raw("resources/testXlsx.xlsx");
// var xhr = new XMLHttpRequest();
// xhr.open("get", url, true);
// xhr.responseType = "blob";
// xhr.onload = function() {
//     if (this.status == 200) {
//         var blob = this.response;
//         require("JsXlsxUtils").read(blob );
//     } };
// xhr.send();

var jsXlsxUtil = function () {
    var excelObj = null;

    //本地读取
    this.read = function (file) {
        const reader = new FileReader();
        //var f = file.currentTarget.files[0];
        var f = file;
        reader.onload = function (ev) {
            try {
                var data = ev.target.result,
                    workbook = XLSX.read(data, {
                        type: 'binary'
                    }), // 以二进制流方式读取得到整份excel表格对象
                    content = []; // 存储获取到的数据
            } catch (ev) {
                console.log('文件类型不正确');
                return;
            }

            // 表格的表格范围，可用于判断表头是否数量是否正确
            var fromTo = '';
            for(var i = 0 ; i < workbook.Sheets.length ; i++){
                content[i] = [];
            }
            // 遍历每张表读取
            let index = 0;
            for (var sheet in workbook.Sheets) {
                if (workbook.Sheets.hasOwnProperty(sheet)) {
                    fromTo = workbook.Sheets[sheet]['!ref'];
                    console.log(fromTo);
                    content[index] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
                    index++;
                    // break; // 如果只取第一张表，就取消注释这行
                }
            }

            //console.log(persons);
            excelObj = content;
            console.log("读取完成");
        };
        reader.readAsBinaryString(f);
        //reader.readAsDataURL(file);
    };


    //input 上传
    this.readInput = function (file) {
        const reader = new FileReader();
        var f = file.currentTarget.files[0];
        reader.onload = function (ev) {
            try {
                var data = ev.target.result,
                    workbook = XLSX.read(data, {
                        type: 'binary'
                    }), // 以二进制流方式读取得到整份excel表格对象
                    content = []; // 存储获取到的数据
            } catch (ev) {
                console.log('文件类型不正确');
                return;
            }

            // 表格的表格范围，可用于判断表头是否数量是否正确
            var fromTo = '';
            for(var i = 0 ; i < workbook.Sheets.length ; i++){
                content[i] = [];
            }
            // 遍历每张表读取
            let index = 0;
            for (var sheet in workbook.Sheets) {
                if (workbook.Sheets.hasOwnProperty(sheet)) {
                    fromTo = workbook.Sheets[sheet]['!ref'];
                    console.log(fromTo);
                    content[index] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
                    index++;
                    // break; // 如果只取第一张表，就取消注释这行
                }
            }

            //console.log(persons);
            excelObj = content;
            console.log("读取完成");
            console.log(excelObj);
        };
        reader.readAsBinaryString(f);
        //reader.readAsDataURL(file);
    };

    this.write = function () {
        // var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };
        // var wbout = XLSX.write(wb, wopts);
        // saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "meteor.xlsx");
    };

    this.getExcelObj = function () {
        return excelObj;
    };


};

module.exports = new jsXlsxUtil();