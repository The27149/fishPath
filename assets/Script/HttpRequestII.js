/**
 * Created by dell on 2017/5/24.
 */

//类的构建定义，主要职责就是新建XMLHttpRequest对象
var MyXMLHttpRequest = function () {
    var xmlhttprequest;
    if (window.XMLHttpRequest) {
        xmlhttprequest = new XMLHttpRequest();
        if (xmlhttprequest.overrideMimeType) {
            xmlhttprequest.overrideMimeType("text/xml");
        }
    } else if (window.ActiveXObject) {
        var activeName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        for (var i = 0; i < activeName.length; i++) {
            try {
                xmlhttprequest = new ActiveXObject(activeName[i]);
                break;
            } catch (e) {

            }
        }
    }

    if (xmlhttprequest == undefined || xmlhttprequest == null) {
        console.log("XMLHttpRequest对象创建失败！！");
    } else {
        this.xmlhttp = xmlhttprequest;
    }

    //用户发送请求的方法
    MyXMLHttpRequest.prototype.send = function (method, url, data, callback, failback) {
        if (this.xmlhttp != undefined && this.xmlhttp != null) {
            method = method.toUpperCase();
            if (method != "GET" && method != "POST") {
                console.log("HTTP的请求方法必须为GET或POST!!!");
                return;
            }
            if (url == null || url == undefined) {
                console.log("HTTP的请求地址必须设置！");
                return;
            }

            this.xmlhttp.open(method, url, true);
            this.xmlhttp.responseType = "blob";
            var tempxmlhttp = this.xmlhttp;
            this.xmlhttp.onreadystatechange = function () {
                if (tempxmlhttp.readyState == 4) {
                    if (tempxmlhttp.status == 200) {
                        // var responseText = tempxmlhttp.responseText;
                        // var responseXML = tempxmlhttp.reponseXML;
                        var blob = this.response;

                        if (callback == undefined || callback == null) {
                            console.log("没有设置处理数据正确返回的方法");
                            //console.log("返回的数据：" + responseText);
                        } else {
                            callback(blob);
                        }
                    }else {
                        if (failback == undefined || failback == null) {
                            console.log("没有设置处理数据返回失败的处理方法！");
                            console.log("HTTP的响应码：" + tempxmlhttp.status + ",响应码的文本信息：" + tempxmlhttp.statusText);
                        } else {
                            failback(tempxmlhttp.status, tempxmlhttp.statusText);
                        }
                    }
                }
            };

            //解决缓存的转换
            // if (url.indexOf("?") >= 0) {
            //     url = url + "&t=" + (new Date()).valueOf();
            // } else {
            //     url = url + "?+=" + (new Date()).valueOf();
            // }

            //解决跨域的问题
            // if (url.indexOf("http://") >= 0) {
            //     url.replace("?", "&");
            //     url = "Proxy?url=" + url;
            // }

            //如果是POST方式，需要设置请求头
            // if (method == "POST") {
            //     this.xmlhttp.processReqChange("Content-type", "application/x-www-four-urlencoded");
            // }
            this.xmlhttp.send(data);
            //this.xmlhttp.send();
        } else {
            console.log("XMLHttpRequest对象创建失败，无法发送数据！");
        }
        MyXMLHttpRequest.prototype.abort = function () {
            this.xmlhttp.abort();
        };
    };
};

module.exports = new MyXMLHttpRequest();

