__require = function t(e, i, n) {
function s(o, a) {
if (!i[o]) {
if (!e[o]) {
var h = o.split("/");
h = h[h.length - 1];
if (!e[h]) {
var c = "function" == typeof __require && __require;
if (!a && c) return c(h, !0);
if (r) return r(h, !0);
throw new Error("Cannot find module '" + o + "'");
}
}
var l = i[o] = {
exports: {}
};
e[o][0].call(l.exports, function(t) {
return s(e[o][1][t] || t);
}, l, l.exports, t, e, i, n);
}
return i[o].exports;
}
for (var r = "function" == typeof __require && __require, o = 0; o < n.length; o++) s(n[o]);
return s;
}({
Base64Decode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8b5f26vg9dKKpH+KxQqPezK", "Base64Decode");
var n = {
_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
base64decode: function(t) {
var e, i, n, s, r, o, a, h = "", c = 0;
t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
for (;c < t.length; ) {
s = this._keyStr.indexOf(t.charAt(c++));
r = this._keyStr.indexOf(t.charAt(c++));
o = this._keyStr.indexOf(t.charAt(c++));
a = this._keyStr.indexOf(t.charAt(c++));
e = s << 2 | r >> 4;
i = (15 & r) << 4 | o >> 2;
n = (3 & o) << 6 | a;
h += String.fromCharCode(e);
64 != o && (h += String.fromCharCode(i));
64 != a && (h += String.fromCharCode(n));
}
return h;
},
utf8to16: function(t) {
var e, i, n, s, r, o;
e = "";
n = t.length;
i = 0;
for (;i < n; ) switch ((s = t.charCodeAt(i++)) >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
e += t.charAt(i - 1);
break;

case 12:
case 13:
r = t.charCodeAt(i++);
e += String.fromCharCode((15 & s) << 6 | 63 & r);
break;

case 14:
r = t.charCodeAt(i++);
o = t.charCodeAt(i++);
e += String.fromCharCode((15 & s) << 12 | (63 & r) << 6 | (63 & o) << 0);
}
return e;
}
};
e.exports = n;
cc._RF.pop();
}, {} ],
EditorScene: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "280c3rsZJJKnZ9RqbALVwtK", "EditorScene");
var n = t("FishConfig"), s = t("FishMatrixConfig"), r = t("JsonReadWrite"), o = t("HttpRequestII"), a = t("JsXlsxUtils");
cc.Class({
extends: cc.Component,
properties: {
fishLayer: cc.Node,
fishPrefab: cc.Prefab,
matrixPrefab: cc.Prefab,
fishIdInput: cc.EditBox,
matrixIdInput: cc.EditBox,
screentLayer: cc.Node
},
onLoad: function() {
n.loadFish("ResConfig/fish_config");
s.loadFishMatrix("ResConfig/fishWave");
this.screenScale = 1;
this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.mouseScaleCall, this);
this.fish = null;
this.maxtixNode = null;
this.matrixId = 0;
this.matrix = 0;
this.lineManger = this.node.getComponent("LineManager");
},
onDestroy: function() {
this.node.off(cc.Node.EventType.MOUSE_WHEEL, this.mouseScaleCall, this);
},
mouseScaleCall: function(t) {
switch (t.type) {
case cc.Node.EventType.MOUSE_WHEEL:
t._scrollY > 0 ? this.screenScale += .1 : this.screenScale -= .1;
this.screentLayer.setScale(this.screenScale);
}
},
createFish: function(t) {
this.clearCall();
if ("" != this.fishIdInput.string) {
var e = {
type: this.fishIdInput.string,
pathId: this.lineManger.getLineInputPathId()
};
this.createFishAndLine(e, !1);
} else console.log("鱼类型没有填写");
},
createFishMatrix: function(t) {
this.clearCall();
if ("" != this.matrixIdInput.string) {
var e = {
type: this.matrixIdInput.string,
pathId: this.lineManger.getLineInputPathId()
};
this.matrixId = e.type;
var i = s.getFishMatrixArray();
this.matrix = i[this.matrixId];
this.createFishAndLine(e, !0);
} else console.log("鱼阵型没有填写");
},
createFishAndLine: function(t, e) {
if (e) {
this.maxtixNode = cc.instantiate(this.matrixPrefab);
this.fishLayer.addChild(this.maxtixNode);
this.maxtixNode.getComponent("MatrixNode").createMatrixSwimAni(t);
t.pathId || this.maxtixNode.setPosition(640, 360);
} else {
this.fish = cc.instantiate(this.fishPrefab);
this.fishLayer.addChild(this.fish);
this.fish.getComponent("FishNode").createFishSwimAni(t);
}
if (null !== t.pathId) {
this.pathId = t.pathId;
this.lineManger.createLineByPathId(this.pathId);
}
},
clearCall: function(t) {
if (this.fish) {
this.fish.getComponent("FishNode").clearFish();
this.fish.removeFromParent();
this.fish = null;
}
if (this.maxtixNode) {
this.maxtixNode.getComponent("MatrixNode").clearMatrix();
this.maxtixNode.removeFromParent();
this.maxtixNode = null;
}
this.lineManger.clearAllLine();
},
writeMatrixInFile: function(t) {
if ("" != this.matrixIdInput.string) {
this.matrixId = this.matrixIdInput.string;
var e = s.getFishMatrixArray();
e[this.matrixId] = this.matrix;
r.writeJsonFile(e, "fishWave1");
} else console.log("鱼阵编号为空");
},
readExcelContent: function() {
if (cc.sys.isNative) console.log("暂时只是适合WEB端"); else {
o.send("GET", cc.url.raw("resources/鱼阵.xlsx"), null, a.read, null);
setTimeout(function() {
cc.log(a.getExcelObj());
s.resetMatrixConfig(a.getExcelObj()[1]);
}, 500);
}
},
closeTextArea: function(t) {
var e = document.getElementById("pathTxt");
null != e && e.parentNode.removeChild(e);
e = null;
}
});
cc._RF.pop();
}, {
FishConfig: "FishConfig",
FishMatrixConfig: "FishMatrixConfig",
HttpRequestII: "HttpRequestII",
JsXlsxUtils: "JsXlsxUtils",
JsonReadWrite: "JsonReadWrite"
} ],
FishConfig: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "02fd5Nr2eRFT5rSKa/5zhuB", "FishConfig");
var n = function() {
this.fishArray = [];
}, s = n.prototype;
s.getFishArray = function() {
return this.fishArray;
};
s.loadFish = function(t) {
var e = this;
cc.loader.loadRes(t, function(t, i) {
if (t) {
console.log("鱼配置加载失败");
console.log(t.message || t);
} else {
e.dealData(i);
e.fishArray = i;
console.log("鱼配置加载完成");
}
});
};
s.dealData = function(t) {
for (var e = t.length, i = 1; i < e; i++) {
t[i].Fish.SwimEffect = t[i].Fish.SwimEffect.split(",");
t[i].Fish.Radius = t[i].Fish.Radius.split(",");
t[i].Fish.DeathVoice = t[i].Fish.DeathVoice.split(",");
t[i].Fish.Offset && (t[i].Fish.Offset = t[i].Fish.Offset.split(","));
}
};
s.getFisInfoByType = function(t) {
for (var e = this.fishArray, i = 0; i < e.length; i++) if (t == e[i].Type) return e[i].Fish;
console.log("not find fishInfo: " + t);
return null;
};
s.resetFishConfig = function(t) {};
var r = new n();
e.exports = r;
cc._RF.pop();
}, {} ],
FishMatrixConfig: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a91ebgbR8VK1Zg/PUa/z29s", "FishMatrixConfig");
var n = function() {
this.fishMatrixArray = [];
}, s = n.prototype;
s.getFishMatrixArray = function() {
return this.fishMatrixArray;
};
s.isLoaded = !1;
s.getIsLoaded = function() {
return s.isLoaded;
};
s.loadFishMatrix = function(t) {
var e = this;
cc.loader.loadRes(t, function(t, i) {
if (t) {
console.log("鱼阵配置加载失败");
console.log(t.message || t);
} else {
console.log("鱼阵配置加载成功");
e.fishMatrixArray = i;
e.isLoaded = !0;
}
});
};
s.resetMatrixConfig = function(t) {
var e = 0, i = 0, n = 0, s = 0, r = 0, o = 0;
this.fishMatrixArray = [];
for (var a = 1; a < t.length; a++) {
var h = t[a];
if (h["阵型ID"]) {
e = h["阵型ID"];
o = 0;
}
h["鱼ID"] && (i = h["鱼ID"]);
h["坐标编号"] && (r = h["坐标编号"]);
h["相对X轴"] && (n = h["相对X轴"]);
h["相对Y轴"] && (s = h["相对Y轴"]);
this.fishMatrixArray[e] || (this.fishMatrixArray[e] = []);
if (this.fishMatrixArray[e][o]) {
this.fishMatrixArray[e][o].posId = parseInt(r);
this.fishMatrixArray[e][o].pos.x_axis = n;
this.fishMatrixArray[e][o].pos.y_axis = s;
this.fishMatrixArray[e][o].type = parseInt(i);
} else {
var c = {
posId: parseInt(r),
pos: {
x_axis: n,
y_axis: s
},
type: parseInt(i)
};
this.fishMatrixArray[e][o] = c;
c = null;
}
o++;
}
};
var r = new n();
e.exports = r;
cc._RF.pop();
}, {} ],
FishNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "de89aiucVpIy5Bv2Hvt4JxT", "FishNode");
var n = t("FishPathConfig"), s = t("FishConfig");
cc.Class({
extends: cc.Component,
properties: {
oriPosition: null,
_speed: 0,
_t: 0,
_pointArray: [],
_timeDt: 0,
_fishType: 0,
_existTime: 0
},
onLoad: function() {
this.schedule(this.updateMove, 0);
},
createFishSwimAni: function(t) {
this._fishType = t.type;
var e = s.getFishArray();
if (void 0 != e[this._fishType]) {
var i = e[this._fishType].Fish.Speed, r = n.getFishPathArray(), o = r[t.pathId].distance;
this._timeDt = i / o;
this._t = this.getFishSwimDt();
this.node.getComponent(cc.Animation).play("fish" + this._fishType);
var a = r[t.pathId].points;
this._pointArray = n.changeIntoPoint(a);
this.node.setPosition(this._pointArray[0]);
} else console.log("don't find fish type" + this._fishType);
},
setFishDegree: function(t) {
if (null != t) {
var e = 0;
this.oriPosition = this.node.getPosition();
var i = t.x - this.oriPosition.x > 0 ? 0 : 1;
if (t.x - this.oriPosition.x != 0) {
e = (t.y - this.oriPosition.y) / (t.x - this.oriPosition.x);
var n = Math.atan(e);
this.node.rotation = e > 0 ? 180 * -n / Math.PI + 180 * i : 180 * -n / Math.PI - 180 * i;
} else t.y - this.oriPosition.y > 0 ? this.node.rotation = 90 : this.node.rotation = -90;
}
},
getFishPosition: function(t) {
var e = null;
this._t = t ? this.getFishSwimDt() + 10 * this._timeDt : this.getFishSwimDt();
if (this._t < 1) 2 == this._pointArray.length ? e = n.getLinePos(this._pointArray, this._t) : 3 == this._pointArray.length ? e = n.getTwoLevelBezier(this._pointArray, this._t) : 4 == this._pointArray.length && (e = n.getThreeLevelBezier(this._pointArray, this._t)); else {
console.log("游动结束");
this.unschedule(this.updateMove);
}
return e;
},
getFishSwimDt: function() {
return 60 * this._existTime * this._timeDt;
},
clearFish: function() {
this.unschedule(this.updateMove);
this.node.getComponent(cc.Animation).stop("fish" + this._fishType);
},
updateMove: function(t) {
this._existTime += t;
var e = this.getFishPosition();
if (null !== e) {
this.node.setPosition(e);
this.setFishDegree(this.getFishPosition(!0));
}
}
});
cc._RF.pop();
}, {
FishConfig: "FishConfig",
FishPathConfig: "FishPathConfig"
} ],
FishPathConfig: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "612ecnYgLlGC6j6NTahuNsu", "FishPathConfig");
var n = function() {
this.fishPathArray = [];
}, s = n.prototype;
s.getFishPathArray = function() {
return this.fishPathArray;
};
s.setFishPathArray = function(t) {
this.fishPathArray = t;
};
s.loadPath = function(t) {
var e = this;
cc.loader.loadRes(t, function(t, i) {
if (t) {
console.log("路径加载失败");
console.log(t.message || t);
} else {
e.fishPathArray = i;
console.log("路径加载完成");
console.log(e.fishPathArray);
}
});
};
s.changeIntoPoint = function(t) {
var e = [];
t.map(function(t) {
var i = t.split(",");
e.push(cc.v2(parseFloat(i[0]), parseFloat(i[1])));
});
return e;
};
s.countPerPathLength = function(t) {
var e = s, i = 0;
if (2 == t.length) i = e.getDistance(t[0], t[1]); else if (3 == t.length) for (var n = 0; n < 1; ) {
var r = e.getTwoLevelBezier(t, n), o = e.getTwoLevelBezier(t, n + .001);
i += e.getDistance(r, o);
n += .001;
} else if (4 == t.length) for (var a = 0; a < 1; ) {
var h = e.getThreeLevelBezier(t, a), c = e.getThreeLevelBezier(t, a + .001);
i += e.getDistance(h, c);
a += .001;
}
return i;
};
s.getTwoLevelBezier = function(t, e) {
var i, n;
i = (1 - e) * (1 - e) * t[0].x + 2 * e * (1 - e) * t[1].x + e * e * t[2].x;
n = (1 - e) * (1 - e) * t[0].y + 2 * e * (1 - e) * t[1].y + e * e * t[2].y;
return cc.v2(i, n);
};
s.getThreeLevelBezier = function(t, e) {
var i, n;
i = (1 - e) * (1 - e) * (1 - e) * t[0].x + 3 * e * (1 - e) * (1 - e) * t[1].x + 3 * e * e * (1 - e) * t[2].x + e * e * e * t[3].x;
n = (1 - e) * (1 - e) * (1 - e) * t[0].y + 3 * e * (1 - e) * (1 - e) * t[1].y + 3 * e * e * (1 - e) * t[2].y + e * e * e * t[3].y;
return cc.v2(i, n);
};
s.getDistance = function(t, e) {
var i = t.x - e.x, n = t.y - e.y;
return Math.sqrt(i * i + n * n);
};
s.getLinePos = function(t, e) {
var i = (t[1].y - t[0].y) / (t[1].x - t[0].x), n = t[0].y - i * t[0].x, s = t[0].x + e * (t[1].x - t[0].x), r = s * i + n;
return cc.v2(s, r);
};
s.getAngel = function(t, e) {
var i = (e.y - t.y) / (e.x - t.x), n = 180 * Math.atan(i) / Math.PI;
return i > 0 ? 90 - n : -90 - n;
};
s.deleteLineById = function(t) {
this.fishPathArray[t] && delete this.fishPathArray[t];
};
s.resetPathConfig = function(t) {
var e = 0, i = 0, n = null, s = null, r = null;
this.fishPathArray = {};
for (var o = [], a = null, h = 0; h < t.length; h++) {
a = t[h];
for (var c = 1; c < a.length; c++) {
o = [];
var l = a[c];
l["编号"] && (e = l["编号"]);
if (l["坐标1"]) {
i = l["坐标1"];
o.push(i);
}
if (l["坐标2"]) {
n = l["坐标2"];
o.push(n);
}
if (l["坐标3"]) {
s = l["坐标3"];
o.push(s);
}
if (l["坐标4"]) {
r = l["坐标4"];
o.push(r);
}
var p = this.countPerPathLength(this.changeIntoPoint(o)), d = {
distance: Number(parseFloat(p).toFixed(2)),
points: o
};
this.fishPathArray[e] = d;
d = null;
l = null;
}
}
cc.log("重置之后路径");
cc.log(this.fishPathArray);
};
var r = new n();
e.exports = r;
cc._RF.pop();
}, {} ],
HttpRequestII: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a4b92gChIxA85yQVzYFNBTy", "HttpRequestII");
e.exports = new function t() {
var e;
if (window.XMLHttpRequest) (e = new XMLHttpRequest()).overrideMimeType && e.overrideMimeType("text/xml"); else if (window.ActiveXObject) for (var i = [ "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ], n = 0; n < i.length; n++) try {
e = new ActiveXObject(i[n]);
break;
} catch (t) {}
void 0 == e || null == e ? console.log("XMLHttpRequest对象创建失败！！") : this.xmlhttp = e;
t.prototype.send = function(e, i, n, s, r) {
if (void 0 != this.xmlhttp && null != this.xmlhttp) {
if ("GET" != (e = e.toUpperCase()) && "POST" != e) {
console.log("HTTP的请求方法必须为GET或POST!!!");
return;
}
if (null == i || void 0 == i) {
console.log("HTTP的请求地址必须设置！");
return;
}
this.xmlhttp.open(e, i, !0);
this.xmlhttp.responseType = "blob";
var o = this.xmlhttp;
this.xmlhttp.onreadystatechange = function() {
if (4 == o.readyState) if (200 == o.status) {
var t = this.response;
void 0 == s || null == s ? console.log("没有设置处理数据正确返回的方法") : s(t);
} else if (void 0 == r || null == r) {
console.log("没有设置处理数据返回失败的处理方法！");
console.log("HTTP的响应码：" + o.status + ",响应码的文本信息：" + o.statusText);
} else r(o.status, o.statusText);
};
this.xmlhttp.send(n);
} else console.log("XMLHttpRequest对象创建失败，无法发送数据！");
t.prototype.abort = function() {
this.xmlhttp.abort();
};
};
}();
cc._RF.pop();
}, {} ],
InputFile: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f7686ELDC1GcZFBIBZF1oud", "InputFile");
var n = t("FishConfig"), s = t("FishMatrixConfig"), r = t("FishPathConfig"), o = t("JsXlsxUtils");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = this, i = document.createElement("p");
i.innerHTML = "json配置文件读取";
i.style.position = "absolute";
i.style.left = "150px";
i.style.top = "100px";
cc.game.container.appendChild(i);
var a = document.createElement("p");
a.innerHTML = "上传json文件";
a.id = "desLabel";
a.style.position = "absolute";
a.style.left = "150px";
a.style.top = "130px";
a.style.border = "solid";
a.style.width = "130px";
cc.game.container.appendChild(a);
var h = document.createElement("input");
h.type = "file";
h.name = "jsonFile";
h.onchange = function(t) {
var i = t.currentTarget.files[0];
document.getElementById("desLabel").innerHTML = i.name;
e.readFile(t);
};
h.style.position = "absolute";
h.style.left = "150px";
h.style.top = "150px";
h.style.opacity = "0";
cc.game.container.appendChild(h);
var c = document.createElement("p");
c.innerHTML = "Excel表格文件读取";
c.style.position = "absolute";
c.style.left = "150px";
c.style.top = "165px";
cc.game.container.appendChild(c);
var l = document.createElement("p");
l.innerHTML = "上传Excel文件";
l.id = "desLabel1";
l.style.position = "absolute";
l.style.left = "150px";
l.style.top = "190px";
l.style.border = "solid";
l.style.width = "130px";
cc.game.container.appendChild(l);
var p = document.createElement("input");
p.type = "file";
p.name = "excleFile";
p.onchange = function(e) {
var i = e.currentTarget.files[0];
document.getElementById("desLabel1").innerHTML = i.name;
t("JsXlsxUtils").readInput(e);
setTimeout(function() {
"鱼阵.xlsx" == i.name ? s.resetMatrixConfig(o.getExcelObj()[1]) : "鱼.xlsx" == i.name ? n.resetFishConfig(o.getExcelObj()[1]) : "鱼路径.xlsx" == i.name && r.resetPathConfig(o.getExcelObj());
p.value = null;
}, 500);
};
p.style.position = "absolute";
p.style.left = "150px";
p.style.top = "210px";
p.style.opacity = "0";
cc.game.container.appendChild(p);
},
readFile: function(t) {
var e = new FileReader(), i = t.currentTarget.files[0], o = i.name;
e.onload = function(t) {
console.log("读取完成");
var e = t.target.result;
if ("fish_config.json" == o) {
n.fishArray = JSON.parse(e);
n.dealData(n.fishArray);
} else "fish_path_config.json" == o ? r.fishPathArray = JSON.parse(e) : "fishWave.json" == o && (s.fishMatrixArray = JSON.parse(e));
};
e.readAsText(i);
}
});
cc._RF.pop();
}, {
FishConfig: "FishConfig",
FishMatrixConfig: "FishMatrixConfig",
FishPathConfig: "FishPathConfig",
JsXlsxUtils: "JsXlsxUtils"
} ],
JsXlsxUtils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7d89ebNMQtH5bWSdK+4cD5+", "JsXlsxUtils");
e.exports = new function() {
var t = null;
this.read = function(e) {
var i = new FileReader(), n = e;
i.onload = function(e) {
try {
var i = e.target.result, n = XLSX.read(i, {
type: "binary"
}), s = [];
} catch (e) {
console.log("文件类型不正确");
return;
}
for (var r = "", o = 0; o < n.Sheets.length; o++) s[o] = [];
var a = 0;
for (var h in n.Sheets) if (n.Sheets.hasOwnProperty(h)) {
r = n.Sheets[h]["!ref"];
console.log(r);
s[a] = XLSX.utils.sheet_to_json(n.Sheets[h]);
a++;
}
t = s;
console.log("读取完成");
};
i.readAsBinaryString(n);
};
this.readInput = function(e) {
var i = new FileReader(), n = e.currentTarget.files[0];
i.onload = function(e) {
try {
var i = e.target.result, n = XLSX.read(i, {
type: "binary"
}), s = [];
} catch (e) {
console.log("文件类型不正确");
return;
}
for (var r = "", o = 0; o < n.Sheets.length; o++) s[o] = [];
var a = 0;
for (var h in n.Sheets) if (n.Sheets.hasOwnProperty(h)) {
r = n.Sheets[h]["!ref"];
console.log(r);
s[a] = XLSX.utils.sheet_to_json(n.Sheets[h]);
a++;
}
t = s;
console.log("读取完成");
console.log(t);
};
i.readAsBinaryString(n);
};
this.write = function() {};
this.getExcelObj = function() {
return t;
};
}();
cc._RF.pop();
}, {} ],
JsonReadWrite: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4dda7yh6TZAI63X5gnpASeT", "JsonReadWrite");
e.exports = new function() {
this.writeJsonFile = function(t, e) {
var i = JSON.stringify(t);
if (cc.sys.isNative) {
var n = cc.url.raw("resources/ResConfig/") + e + ".json";
jsb.fileUtils.writeStringToFile(i, n);
console.log("写入成功");
} else {
var s = document.createElement("textarea");
s.name = "txtName";
s.innerHTML = i;
s.id = "pathTxt";
s.style.position = "absolute";
s.style.left = "10%";
s.style.top = "100px";
s.rows = "100";
s.cols = "230";
cc.game.container.appendChild(s);
}
};
this.readJsonFile = function(t) {
var e = cc.url.raw("resources/ResConfig/") + t + ".json", i = void 0;
if (cc.sys.isNative) {
var n = i = jsb.fileUtils.getStringFromFile(e);
console.log("读取文件");
console.log(n);
} else console.log("现在是非原生平台,只在原生平台读写");
return i;
};
}();
cc._RF.pop();
}, {} ],
LineManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "eaf39D2vnhBQqFuaoz9nUPr", "LineManager");
var n = t("FishPathConfig"), s = t("JsonReadWrite");
cc.Class({
extends: cc.Component,
properties: {
drawLineLayer: cc.Node,
pathIdInput: cc.EditBox,
pointPrefab: cc.Prefab,
lineScrollContent: cc.Node,
lineItemPrefab: cc.Prefab
},
onLoad: function() {
n.loadPath("ResConfig/fish_path_config");
this.drawLine = null;
this.selectDrawLine = null;
this.selectLineItem = null;
this.drawLineArray = [];
this.pointNodeArray = [];
this.pointArray = [];
this.pathId = 0;
this.lineItemArray = [];
this.createPoint();
},
clickToggleFun: function(t, e) {
var i = parseInt(e);
if (t.isChecked) {
this.createAllLineByType(i);
this.createAllItemByType(i);
} else {
this.clearLineByType(i);
this.clearAllLineItem(i);
}
},
updateDrawLine: function(t, e) {
if (null != t) {
var i = t.getComponent(cc.Graphics);
i.clear();
if (!(e.length < 2)) if (2 == e.length) {
i.moveTo(e[0].x, e[0].y);
i.lineTo(e[1].x, e[1].y);
i.stroke();
} else if (3 == e.length) {
i.moveTo(e[0].x, e[0].y);
i.quadraticCurveTo(e[1].x, e[1].y, e[2].x, e[2].y);
i.stroke();
} else if (4 == e.length) {
i.moveTo(e[0].x, e[0].y);
i.bezierCurveTo(e[1].x, e[1].y, e[2].x, e[2].y, e[3].x, e[3].y);
i.stroke();
}
}
},
pointInputCall: function(t, e) {
this.clickCreatePath(t);
},
clickCreatePath: function(t) {
if ("" != this.pathIdInput.string) {
for (var e = this.pathIdInput.string, i = [], n = this.node.getChildByName("inputlPanel"), s = 0; s < 4; s++) {
var r = n.getChildByName("pointInput" + (s + 1)).getComponent(cc.EditBox).string;
if ("" !== r) {
var o = r.split(","), a = cc.v2(parseFloat(o[0]), parseFloat(o[1]));
0 == a.x && 0 == a.y || i.push(a);
a = null;
o = null;
}
r = null;
}
this.pathId = e;
this.pointArray = i;
this.savePosToPosConfig();
this.createLineByPathId(e);
this.setPointAndPathIdInput(e, this.pointArray);
var h = this.getTypeByPathId(e);
this.createLineItem(h, e);
this.selectItemChangeState(e);
} else alert("没有填写路径ID");
},
createLine: function(t, e, i) {
var n = new cc.Node();
this.drawLineLayer.addChild(n);
n.setPosition(cc.v2(0, 0));
var s = n.addComponent(cc.Graphics);
s.lineWidth = 2;
var r = "#FFFFFF";
switch (e) {
case 1:
r = "#29FF00";
break;

case 2:
r = "#FFE000";
break;

case 3:
r = "#00FFF5";
break;

case 4:
r = "#0066FF";
break;

case 5:
r = "#A300FF";
break;

case 6:
r = "#EDF58D";
break;

case 7:
r = "#FF00C2";
break;

case 8:
r = "#FFB05B";
break;

case 9:
r = "#F3B3F1";
}
s.strokeColor = cc.hexToColor(r);
this.updateDrawLine(n, t);
n.addComponent("LineNode").initLine(e, i, r);
return n;
},
createPoint: function() {
for (var t = this.node.getChildByName("inputlPanel"), e = 0; e < 4; e++) {
var i = cc.instantiate(this.pointPrefab), n = t.getChildByName("pointInput" + (e + 1));
i.getComponent("PointNode").bindPointInput(n, this);
i.getComponent("PointNode").initPoint(e, cc.v2(0, 0));
this.drawLineLayer.addChild(i);
this.pointNodeArray.push(i);
i.active = !1;
i = null;
}
t = null;
},
createLineByPathId: function(t) {
var e = !1, i = this.getTypeByPathId(t);
if (this.drawLineArray[i]) for (var n = 0; n < this.drawLineArray[i].length; n++) {
var s = this.drawLineArray[i][n];
this.selectDrawLine = s;
if (t == s.getComponent("LineNode").getLinePathId()) {
this.updateDrawLine(this.selectDrawLine, this.pointArray);
e = !0;
break;
}
s = null;
} else this.drawLineArray[i] = [];
if (!e) {
var r = this.getPosArrByPathId(t), o = this.createLine(r, i, t);
this.drawLineArray[i].push(o);
this.selectLineChangeState(o);
r = null;
}
},
getPosArrByPathId: function(t) {
var e = n.getFishPathArray(), i = n.changeIntoPoint(e[t].points);
e = null;
return i;
},
createAllLineByType: function(t) {
var e = 0, i = 0;
switch (t) {
case 1:
e = 1e3;
i = 2e3;
break;

case 2:
e = 2e3;
i = 3e3;
break;

case 3:
e = 3e3;
i = 4e3;
break;

case 4:
e = 4e3;
i = 5e3;
break;

case 5:
e = 5e3;
i = 6e3;
break;

case 6:
e = 6e3;
i = 7e3;
break;

case 7:
e = 7e3;
i = 8e3;
break;

case 8:
e = 8e3;
i = 9e3;
break;

case 9:
e = 9e3;
i = 1e4;
break;

case 10:
e = 1e3;
i = 1e4;
}
var s = n.getFishPathArray();
this.drawLineArray[t] ? this.clearLineByType(t) : this.drawLineArray[t] = [];
var r = null;
for (var o in s) {
var a = parseInt(o);
if (a > e && a < i) {
r = n.changeIntoPoint(s[o].points);
var h = this.createLine(r, t, a);
this.drawLineArray[t].push(h);
h = null;
}
}
},
clearLineByType: function(t) {
if (this.drawLineArray[t]) {
for (var e = 0; e < this.drawLineArray[t].length; e++) {
this.drawLineArray[t][e].removeFromParent();
this.drawLineArray[t][e] = null;
}
this.drawLineArray[t].length = 0;
}
},
clearAllLine: function() {
for (var t = 1; t <= this.drawLineArray.length; t++) this.clearLineByType(t);
for (var e = 0; e < this.pointNodeArray.length; e++) this.pointNodeArray[e].active = !1;
this.pointArray = [];
},
changePosDrawLine: function(t, e) {
if (this.pointArray[t]) {
this.pointArray[t] = e;
this.updateDrawLine(this.selectDrawLine, this.pointArray);
}
},
getLineInputPathId: function() {
return "" != this.pathIdInput.string ? this.pathIdInput.string : null;
},
getTypeByPathId: function(t) {
return parseInt(t / 1e3);
},
savePosToPosConfig: function() {
if (0 != this.pointArray.length) {
for (var t = n.getFishPathArray(), e = [], i = 0; i < this.pointArray.length; i++) e.push(this.pointArray[i].x + "," + this.pointArray[i].y);
t[this.pathId] = {};
t[this.pathId].points = e;
t[this.pathId].distance = parseInt(n.countPerPathLength(this.pointArray));
n.setFishPathArray(t);
e = null;
t = null;
}
},
createAllItemByType: function(t) {
for (var e = 0; e < this.drawLineArray[t].length; e++) this.createLineItem(t, this.drawLineArray[t][e].getComponent("LineNode").getLinePathId());
},
clickLineItem: function(t) {
var e = t.getCurrentTarget().getComponent("lineItem"), i = e.getPathId(), n = e.getLineType();
this.pathId = i;
this.selectItemChangeState(i, e);
if (this.drawLineArray[n]) {
for (var s = 0; s < this.drawLineArray[n].length; s++) {
var r = this.drawLineArray[n][s];
i == r.getComponent("LineNode").getLinePathId() && this.selectLineChangeState(r);
r = null;
}
this.setPointAndPathIdInput(i, this.getPosArrByPathId(i));
}
},
selectLineChangeState: function(t) {
t || console.log("selectLineChangeState lineNode undefind");
this.selectDrawLine && this.selectDrawLine.getComponent("LineNode").normalSate();
t.getComponent("LineNode").selectState();
this.selectDrawLine = t;
},
selectItemChangeState: function(t, e) {
this.selectLineItem && this.selectLineItem.normalState();
if (e) {
e.getComponent("lineItem").selectSate();
this.selectLineItem = e.getComponent("lineItem");
} else if (t) {
for (var i = null, n = 0; n < this.lineItemArray.length; n++) {
if ((i = this.lineItemArray[n]).getComponent("lineItem").getPathId() == t) {
i.getComponent("lineItem").selectSate();
this.selectLineItem = i.getComponent("lineItem");
break;
}
}
i = null;
} else console.log("selectItemChangeState pathid undefind");
},
createLineItem: function(t, e) {
var i = cc.instantiate(this.lineItemPrefab);
this.lineScrollContent.addChild(i);
i.on(cc.Node.EventType.TOUCH_END, this.clickLineItem.bind(this), i);
i.getComponent("lineItem").initItem(t, e);
this.lineItemArray.push(i);
i = null;
},
clearAllLineItem: function(t) {
this.selectDrawLine && (this.selectDrawLine = null);
this.selectLineItem && (this.selectLineItem = null);
for (var e = 0; e < this.lineItemArray.length; e++) {
this.lineItemArray[e].off(cc.Node.EventType.TOUCH_END, this.clickLineItem.bind(this));
this.lineItemArray[e].removeFromParent();
}
this.lineItemArray.length = 0;
for (e = 0; e < this.pointNodeArray.length; e++) this.pointNodeArray[e].active = !1;
},
setPointAndPathIdInput: function(t, e) {
this.pathIdInput.string = t;
this.pointArray = e;
for (var i = 0; i < this.pointNodeArray.length; i++) if (this.pointNodeArray[i]) if (e[i]) {
this.pointNodeArray[i].active = !0;
this.pointNodeArray[i].getComponent("PointNode").changePos(e[i]);
} else this.pointNodeArray[i].active = !1;
},
deleteLine: function(t) {
if ("" != this.pathIdInput.string) {
for (var e = this.pathIdInput.string, i = null, s = 0; s < this.lineItemArray.length; s++) {
if ((i = this.lineItemArray[s]).getComponent("lineItem").getPathId() == e) {
i.off(cc.Node.EventType.TOUCH_END, this.clickLineItem.bind(this));
i.removeFromParent();
this.lineItemArray.splice(s, 1);
break;
}
}
i = null;
var r = this.getTypeByPathId(e);
if (this.drawLineArray[r]) for (var o = 0; o < this.drawLineArray[r].length; o++) {
var a = this.drawLineArray[r][o];
if (e == a.getComponent("LineNode").getLinePathId()) {
this.selectDrawLine == a && (this.selectDrawLine = null);
a.removeFromParent();
this.drawLineArray[r].splice(o, 1);
break;
}
a = null;
}
n.deleteLineById(e);
for (var h = 0; h < this.pointNodeArray.length; h++) this.pointNodeArray[h].active = !1;
this.pathIdInput.string = "";
} else alert("没有填写路径ID");
},
writePathInFile: function(t) {
var e = n.getFishPathArray();
s.writeJsonFile(e, "fish_path_config");
e = null;
}
});
cc._RF.pop();
}, {
FishPathConfig: "FishPathConfig",
JsonReadWrite: "JsonReadWrite"
} ],
LineNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c282ako5uRMdICwF2ZiCMaL", "LineNode");
cc.Class({
extends: cc.Component,
properties: {
_lineType: 0,
_linePathId: 0,
_preColor: "",
_selectState: !1
},
onLoad: function() {},
initLine: function(t, e, i) {
this._lineType = t;
this._linePathId = e;
this._preColor = i;
},
selectState: function() {
var t = this.node.getComponent(cc.Graphics);
t.strokeColor = cc.hexToColor("#FF0000");
t.stroke();
},
normalSate: function() {
var t = this.node.getComponent(cc.Graphics);
t.strokeColor = cc.hexToColor(this._preColor);
t.stroke();
},
getLineType: function() {
return this._lineType;
},
getLinePathId: function() {
return this._linePathId;
}
});
cc._RF.pop();
}, {} ],
MatrixNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "26695ezOyxG/Kh9mgpl0maj", "MatrixNode");
var n = t("FishPathConfig"), s = t("FishMatrixConfig");
cc.Class({
extends: cc.Component,
properties: {
fishAniPrefab: cc.Prefab,
oriPosition: null,
_speed: 0,
_t: 0,
_pointArray: [],
_timeDt: 0,
_matrixType: 0,
_existTime: 0,
_pathId: -1
},
onLoad: function() {},
createMatrixSwimAni: function(t) {
this._matrixType = t.type;
this._pathId = t.pathId;
var e = s.getFishMatrixArray()[this._matrixType];
if (void 0 != e) {
for (var i = 0; i < e.length; i++) {
var r = e[i], o = cc.instantiate(this.fishAniPrefab);
o.setPosition(r.pos.x_axis, r.pos.y_axis);
this.node.addChild(o);
o.getComponent(cc.Animation).play("fish" + r.type);
}
if (this._pathId) {
var a = n.getFishPathArray(), h = a[t.pathId].distance;
this._timeDt = 1 / h;
this._t = this.getMatrixSwimDt();
var c = a[t.pathId].points;
this._pointArray = n.changeIntoPoint(c);
this._pointArray[0].x > 720 && this.node.setScale(1, -1);
this.node.setPosition(this._pointArray[0]);
this.setMatrixDegree(this.getMatrixPosition(!0));
this.schedule(this.updateMove, 0);
}
} else console.log("don't find matrix type" + this._matrixType);
},
setMatrixDegree: function(t) {
if (null != t) {
var e = 0;
this.oriPosition = this.node.getPosition();
var i = t.x - this.oriPosition.x > 0 ? 0 : 1;
if (t.x - this.oriPosition.x != 0) {
e = (t.y - this.oriPosition.y) / (t.x - this.oriPosition.x);
var n = Math.atan(e);
this.node.rotation = e > 0 ? 180 * -n / Math.PI + 180 * i : 180 * -n / Math.PI - 180 * i;
} else t.y - this.oriPosition.y > 0 ? this.node.rotation = 90 : this.node.rotation = -90;
}
},
getMatrixPosition: function(t) {
var e = null;
this._t = t ? this.getMatrixSwimDt() + 10 * this._timeDt : this.getMatrixSwimDt();
if (this._t < 1) 2 == this._pointArray.length ? e = n.getLinePos(this._pointArray, this._t) : 3 == this._pointArray.length ? e = n.getTwoLevelBezier(this._pointArray, this._t) : 4 == this._pointArray.length && (e = n.getThreeLevelBezier(this._pointArray, this._t)); else {
console.log("游动结束");
this.unschedule(this.updateMove);
}
return e;
},
getMatrixSwimDt: function() {
return 60 * this._existTime * this._timeDt;
},
clearMatrix: function() {
this.unschedule(this.updateMove);
},
updateMove: function(t) {
this._existTime += t;
var e = this.getMatrixPosition();
if (null !== e) {
this.node.setPosition(e);
this.setMatrixDegree(this.getMatrixPosition(!0));
}
}
});
cc._RF.pop();
}, {
FishMatrixConfig: "FishMatrixConfig",
FishPathConfig: "FishPathConfig"
} ],
PointNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1ceb6g9WzRA+JnTwBaTeDwf", "PointNode");
cc.Class({
extends: cc.Component,
properties: {
posLabel: cc.Label,
indexLabel: cc.Label,
_index: 0,
_pos: 0,
_select: !1
},
onLoad: function() {
this.node.on("touchstart", this.touchStartFun, this);
this.node.on("touchmove", this.touchMoveFun, this);
this.node.on("touchend", this.touchEndFun, this);
this.node.on("touchcancel", this.touchEndFun, this);
},
bindPointInput: function(t, e) {
this.inputNode = t;
this.lineManager = e;
},
initPoint: function(t, e) {
this._index = t;
this.indexLabel.string = t;
this.changePos(e);
},
changePos: function(t) {
this._pos = t;
this.node.setPosition(t);
this.posLabel.string = t.x + "," + t.y;
this.inputNode.getComponent(cc.EditBox).string = t.x + "," + t.y;
},
touchStartFun: function(t) {
this._select = !0;
},
touchMoveFun: function(t) {
var e = t.getLocation(), i = t.getPreviousLocation(), n = cc.pSub(e, i), s = cc.pAdd(this.node.getPosition(), n), r = cc.v2(parseInt(s.x), parseInt(s.y));
this.changePos(r);
this.lineManager.changePosDrawLine(this._index, r);
},
touchEndFun: function(t) {
this._select = !1;
this.lineManager.savePosToPosConfig();
},
getIndex: function() {
return this._index;
}
});
cc._RF.pop();
}, {} ],
lineItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f6e8fOuo99NULz0EdyU+B3L", "lineItem");
cc.Class({
extends: cc.Component,
properties: {
_itemId: 0,
_typeId: 0,
pathIdLabel: cc.Label
},
onLoad: function() {},
initItem: function(t, e) {
this._itemId = e;
this._typeId = t;
this.pathIdLabel.string = e;
},
selectSate: function() {
this.pathIdLabel.node.color = cc.Color.RED;
},
normalState: function() {
this.pathIdLabel.node.color = cc.Color.WHITE;
},
getPathId: function() {
return this._itemId;
},
getLineType: function() {
return this._typeId;
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Base64Decode", "EditorScene", "FishConfig", "FishMatrixConfig", "FishNode", "FishPathConfig", "HttpRequestII", "InputFile", "JsonReadWrite", "LineManager", "LineNode", "MatrixNode", "PointNode", "JsXlsxUtils", "lineItem" ]);