(function(e) {
if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) {
JSZip = e();
define([], e);
} else {
var t;
"undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof $ && $.global ? t = $.global : "undefined" != typeof self && (t = self), 
t.JSZip = e();
}
})(function() {
return function e(t, r, n) {
function a(i, o) {
if (!r[i]) {
if (!t[i]) {
var f = "function" == typeof require && require;
if (!o && f) return f(i, !0);
if (s) return s(i, !0);
throw new Error("Cannot find module '" + i + "'");
}
var l = r[i] = {
exports: {}
};
t[i][0].call(l.exports, function(e) {
var r = t[i][1][e];
return a(r || e);
}, l, l.exports, e, t, r, n);
}
return r[i].exports;
}
for (var s = "function" == typeof require && require, i = 0; i < n.length; i++) a(n[i]);
return a;
}({
1: [ function(e, t, r) {
"use strict";
var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
r.encode = function(e, t) {
for (var r, a, s, i, o, f, l, c = "", h = 0; h < e.length; ) {
r = e.charCodeAt(h++);
a = e.charCodeAt(h++);
s = e.charCodeAt(h++);
i = r >> 2;
o = (3 & r) << 4 | a >> 4;
f = (15 & a) << 2 | s >> 6;
l = 63 & s;
isNaN(a) ? f = l = 64 : isNaN(s) && (l = 64);
c = c + n.charAt(i) + n.charAt(o) + n.charAt(f) + n.charAt(l);
}
return c;
};
r.decode = function(e, t) {
var r, a, s, i, o, f, l, c = "", h = 0;
e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
for (;h < e.length; ) {
i = n.indexOf(e.charAt(h++));
o = n.indexOf(e.charAt(h++));
f = n.indexOf(e.charAt(h++));
l = n.indexOf(e.charAt(h++));
r = i << 2 | o >> 4;
a = (15 & o) << 4 | f >> 2;
s = (3 & f) << 6 | l;
c += String.fromCharCode(r);
64 != f && (c += String.fromCharCode(a));
64 != l && (c += String.fromCharCode(s));
}
return c;
};
}, {} ],
2: [ function(e, t, r) {
"use strict";
function n() {
this.compressedSize = 0;
this.uncompressedSize = 0;
this.crc32 = 0;
this.compressionMethod = null;
this.compressedContent = null;
}
n.prototype = {
getContent: function() {
return null;
},
getCompressedContent: function() {
return null;
}
};
t.exports = n;
}, {} ],
3: [ function(e, t, r) {
"use strict";
r.STORE = {
magic: "\0\0",
compress: function(e) {
return e;
},
uncompress: function(e) {
return e;
},
compressInputType: null,
uncompressInputType: null
};
r.DEFLATE = e("./flate");
}, {
"./flate": 8
} ],
4: [ function(e, t, r) {
"use strict";
var n = e("./utils"), a = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ];
t.exports = function(e, t) {
if ("undefined" == typeof e || !e.length) return 0;
var r = "string" !== n.getTypeOf(e);
"undefined" == typeof t && (t = 0);
var s = 0;
t ^= -1;
for (var i = 0, o = e.length; i < o; i++) {
s = r ? e[i] : e.charCodeAt(i);
t = t >>> 8 ^ a[255 & (t ^ s)];
}
return -1 ^ t;
};
}, {
"./utils": 21
} ],
5: [ function(e, t, r) {
"use strict";
var n = e("./utils");
function a(e) {
this.data = null;
this.length = 0;
this.index = 0;
}
a.prototype = {
checkOffset: function(e) {
this.checkIndex(this.index + e);
},
checkIndex: function(e) {
if (this.length < e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
},
setIndex: function(e) {
this.checkIndex(e);
this.index = e;
},
skip: function(e) {
this.setIndex(this.index + e);
},
byteAt: function(e) {},
readInt: function(e) {
var t, r = 0;
this.checkOffset(e);
for (t = this.index + e - 1; t >= this.index; t--) r = (r << 8) + this.byteAt(t);
this.index += e;
return r;
},
readString: function(e) {
return n.transformTo("string", this.readData(e));
},
readData: function(e) {},
lastIndexOfSignature: function(e) {},
readDate: function() {
var e = this.readInt(4);
return new Date(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1);
}
};
t.exports = a;
}, {
"./utils": 21
} ],
6: [ function(e, t, r) {
"use strict";
r.base64 = !1;
r.binary = !1;
r.dir = !1;
r.createFolders = !1;
r.date = null;
r.compression = null;
r.comment = null;
}, {} ],
7: [ function(e, t, r) {
"use strict";
var n = e("./utils");
r.string2binary = function(e) {
return n.string2binary(e);
};
r.string2Uint8Array = function(e) {
return n.transformTo("uint8array", e);
};
r.uint8Array2String = function(e) {
return n.transformTo("string", e);
};
r.string2Blob = function(e) {
var t = n.transformTo("arraybuffer", e);
return n.arrayBuffer2Blob(t);
};
r.arrayBuffer2Blob = function(e) {
return n.arrayBuffer2Blob(e);
};
r.transformTo = function(e, t) {
return n.transformTo(e, t);
};
r.getTypeOf = function(e) {
return n.getTypeOf(e);
};
r.checkSupport = function(e) {
return n.checkSupport(e);
};
r.MAX_VALUE_16BITS = n.MAX_VALUE_16BITS;
r.MAX_VALUE_32BITS = n.MAX_VALUE_32BITS;
r.pretty = function(e) {
return n.pretty(e);
};
r.findCompression = function(e) {
return n.findCompression(e);
};
r.isRegExp = function(e) {
return n.isRegExp(e);
};
}, {
"./utils": 21
} ],
8: [ function(e, t, r) {
"use strict";
var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, a = e("pako");
r.uncompressInputType = n ? "uint8array" : "array";
r.compressInputType = n ? "uint8array" : "array";
r.magic = "\b\0";
r.compress = function(e) {
return a.deflateRaw(e);
};
r.uncompress = function(e) {
return a.inflateRaw(e);
};
}, {
pako: 24
} ],
9: [ function(e, t, r) {
"use strict";
var n = e("./base64");
function a(e, t) {
if (!(this instanceof a)) return new a(e, t);
this.files = {};
this.comment = null;
this.root = "";
e && this.load(e, t);
this.clone = function() {
var e = new a();
for (var t in this) "function" != typeof this[t] && (e[t] = this[t]);
return e;
};
}
a.prototype = e("./object");
a.prototype.load = e("./load");
a.support = e("./support");
a.defaults = e("./defaults");
a.utils = e("./deprecatedPublicUtils");
a.base64 = {
encode: function(e) {
return n.encode(e);
},
decode: function(e) {
return n.decode(e);
}
};
a.compressions = e("./compressions");
t.exports = a;
}, {
"./base64": 1,
"./compressions": 3,
"./defaults": 6,
"./deprecatedPublicUtils": 7,
"./load": 10,
"./object": 13,
"./support": 17
} ],
10: [ function(e, t, r) {
"use strict";
var n = e("./base64"), a = e("./zipEntries");
t.exports = function(e, t) {
var r, s, i, o;
(t = t || {}).base64 && (e = n.decode(e));
r = (s = new a(e, t)).files;
for (i = 0; i < r.length; i++) {
o = r[i];
this.file(o.fileName, o.decompressed, {
binary: !0,
optimizedBinaryString: !0,
date: o.date,
dir: o.dir,
comment: o.fileComment.length ? o.fileComment : null,
createFolders: t.createFolders
});
}
s.zipComment.length && (this.comment = s.zipComment);
return this;
};
}, {
"./base64": 1,
"./zipEntries": 22
} ],
11: [ function(e, t, r) {
(function(e) {
"use strict";
t.exports = function(t, r) {
return new e(t, r);
};
t.exports.test = function(t) {
return e.isBuffer(t);
};
}).call(this, "undefined" != typeof Buffer ? Buffer : void 0);
}, {} ],
12: [ function(e, t, r) {
"use strict";
var n = e("./uint8ArrayReader");
function a(e) {
this.data = e;
this.length = this.data.length;
this.index = 0;
}
a.prototype = new n();
a.prototype.readData = function(e) {
this.checkOffset(e);
var t = this.data.slice(this.index, this.index + e);
this.index += e;
return t;
};
t.exports = a;
}, {
"./uint8ArrayReader": 18
} ],
13: [ function(e, t, r) {
"use strict";
var n = e("./support"), a = e("./utils"), s = e("./crc32"), i = e("./signature"), o = e("./defaults"), f = e("./base64"), l = e("./compressions"), c = e("./compressedObject"), h = e("./nodeBuffer"), u = e("./utf8"), d = e("./stringWriter"), p = e("./uint8ArrayWriter"), m = function(e) {
if (e._data instanceof c) {
e._data = e._data.getContent();
e.options.binary = !0;
e.options.base64 = !1;
if ("uint8array" === a.getTypeOf(e._data)) {
var t = e._data;
e._data = new Uint8Array(t.length);
0 !== t.length && e._data.set(t, 0);
}
}
return e._data;
}, g = function(e) {
var t = m(e);
return "string" === a.getTypeOf(t) ? !e.options.binary && n.nodebuffer ? h(t, "utf-8") : e.asBinary() : t;
}, b = function(e) {
var t = m(this);
if (null === t || "undefined" == typeof t) return "";
this.options.base64 && (t = f.decode(t));
t = e && this.options.binary ? k.utf8decode(t) : a.transformTo("string", t);
e || this.options.binary || (t = a.transformTo("string", k.utf8encode(t)));
return t;
}, v = function(e, t, r) {
this.name = e;
this.dir = r.dir;
this.date = r.date;
this.comment = r.comment;
this._data = t;
this.options = r;
this._initialMetadata = {
dir: r.dir,
date: r.date
};
};
v.prototype = {
asText: function() {
return b.call(this, !0);
},
asBinary: function() {
return b.call(this, !1);
},
asNodeBuffer: function() {
var e = g(this);
return a.transformTo("nodebuffer", e);
},
asUint8Array: function() {
var e = g(this);
return a.transformTo("uint8array", e);
},
asArrayBuffer: function() {
return this.asUint8Array().buffer;
}
};
var E = function(e, t) {
var r, n = "";
for (r = 0; r < t; r++) {
n += String.fromCharCode(255 & e);
e >>>= 8;
}
return n;
}, S = function() {
var e, t, r = {};
for (e = 0; e < arguments.length; e++) for (t in arguments[e]) arguments[e].hasOwnProperty(t) && "undefined" == typeof r[t] && (r[t] = arguments[e][t]);
return r;
}, B = function(e, t, r) {
var n, s = a.getTypeOf(t);
(r = function(e) {
!0 !== (e = e || {}).base64 || null !== e.binary && void 0 !== e.binary || (e.binary = !0);
(e = S(e, o)).date = e.date || new Date();
null !== e.compression && (e.compression = e.compression.toUpperCase());
return e;
}(r)).createFolders && (n = w(e)) && C.call(this, n, !0);
if (r.dir || null === t || "undefined" == typeof t) {
r.base64 = !1;
r.binary = !1;
t = null;
} else if ("string" === s) r.binary && !r.base64 && !0 !== r.optimizedBinaryString && (t = a.string2binary(t)); else {
r.base64 = !1;
r.binary = !0;
if (!(s || t instanceof c)) throw new Error("The data of '" + e + "' is in an unsupported format !");
"arraybuffer" === s && (t = a.transformTo("uint8array", t));
}
var i = new v(e, t, r);
this.files[e] = i;
return i;
}, w = function(e) {
"/" == e.slice(-1) && (e = e.substring(0, e.length - 1));
var t = e.lastIndexOf("/");
return t > 0 ? e.substring(0, t) : "";
}, C = function(e, t) {
"/" != e.slice(-1) && (e += "/");
t = "undefined" != typeof t && t;
this.files[e] || B.call(this, e, null, {
dir: !0,
createFolders: t
});
return this.files[e];
}, _ = function(e, t) {
var r, n = new c();
if (e._data instanceof c) {
n.uncompressedSize = e._data.uncompressedSize;
n.crc32 = e._data.crc32;
if (0 === n.uncompressedSize || e.dir) {
t = l.STORE;
n.compressedContent = "";
n.crc32 = 0;
} else if (e._data.compressionMethod === t.magic) n.compressedContent = e._data.getCompressedContent(); else {
r = e._data.getContent();
n.compressedContent = t.compress(a.transformTo(t.compressInputType, r));
}
} else {
if (!(r = g(e)) || 0 === r.length || e.dir) {
t = l.STORE;
r = "";
}
n.uncompressedSize = r.length;
n.crc32 = s(r);
n.compressedContent = t.compress(a.transformTo(t.compressInputType, r));
}
n.compressedSize = n.compressedContent.length;
n.compressionMethod = t.magic;
return n;
}, T = function(e, t, r, n) {
r.compressedContent;
var o, f, l, c, h = a.transformTo("string", u.utf8encode(t.name)), d = t.comment || "", p = a.transformTo("string", u.utf8encode(d)), m = h.length !== t.name.length, g = p.length !== d.length, b = t.options, v = "", S = "", B = "";
l = t._initialMetadata.dir !== t.dir ? t.dir : b.dir;
o = (c = t._initialMetadata.date !== t.date ? t.date : b.date).getHours();
o <<= 6;
o |= c.getMinutes();
o <<= 5;
o |= c.getSeconds() / 2;
f = c.getFullYear() - 1980;
f <<= 4;
f |= c.getMonth() + 1;
f <<= 5;
f |= c.getDate();
if (m) {
S = E(1, 1) + E(s(h), 4) + h;
v += "up" + E(S.length, 2) + S;
}
if (g) {
B = E(1, 1) + E(this.crc32(p), 4) + p;
v += "uc" + E(B.length, 2) + B;
}
var w = "";
w += "\n\0";
w += m || g ? "\0\b" : "\0\0";
w += r.compressionMethod;
w += E(o, 2);
w += E(f, 2);
w += E(r.crc32, 4);
w += E(r.compressedSize, 4);
w += E(r.uncompressedSize, 4);
w += E(h.length, 2);
w += E(v.length, 2);
return {
fileRecord: i.LOCAL_FILE_HEADER + w + h + v,
dirRecord: i.CENTRAL_FILE_HEADER + "\0" + w + E(p.length, 2) + "\0\0\0\0" + (!0 === l ? "\0\0\0" : "\0\0\0\0") + E(n, 4) + h + v + p,
compressedObject: r
};
}, k = {
load: function(e, t) {
throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
},
filter: function(e) {
var t, r, n, a, s = [];
for (t in this.files) if (this.files.hasOwnProperty(t)) {
n = this.files[t];
a = new v(n.name, n._data, S(n.options));
r = t.slice(this.root.length, t.length);
t.slice(0, this.root.length) === this.root && e(r, a) && s.push(a);
}
return s;
},
file: function(e, t, r) {
if (1 === arguments.length) {
if (a.isRegExp(e)) {
var n = e;
return this.filter(function(e, t) {
return !t.dir && n.test(e);
});
}
return this.filter(function(t, r) {
return !r.dir && t === e;
})[0] || null;
}
e = this.root + e;
B.call(this, e, t, r);
return this;
},
folder: function(e) {
if (!e) return this;
if (a.isRegExp(e)) return this.filter(function(t, r) {
return r.dir && e.test(t);
});
var t = this.root + e, r = C.call(this, t), n = this.clone();
n.root = r.name;
return n;
},
remove: function(e) {
e = this.root + e;
var t = this.files[e];
if (!t) {
"/" != e.slice(-1) && (e += "/");
t = this.files[e];
}
if (t && !t.dir) delete this.files[e]; else for (var r = this.filter(function(t, r) {
return r.name.slice(0, e.length) === e;
}), n = 0; n < r.length; n++) delete this.files[r[n].name];
return this;
},
generate: function(e) {
e = S(e || {}, {
base64: !0,
compression: "STORE",
type: "base64",
comment: null
});
a.checkSupport(e.type);
var t, r, n = [], s = 0, o = 0, c = a.transformTo("string", this.utf8encode(e.comment || this.comment || ""));
for (var h in this.files) if (this.files.hasOwnProperty(h)) {
var u = this.files[h], m = u.options.compression || e.compression.toUpperCase(), g = l[m];
if (!g) throw new Error(m + " is not a valid compression method !");
var b = _.call(this, u, g), v = T.call(this, h, u, b, s);
s += v.fileRecord.length + b.compressedSize;
o += v.dirRecord.length;
n.push(v);
}
var B;
B = i.CENTRAL_DIRECTORY_END + "\0\0\0\0" + E(n.length, 2) + E(n.length, 2) + E(o, 4) + E(s, 4) + E(c.length, 2) + c;
var w = e.type.toLowerCase();
t = "uint8array" === w || "arraybuffer" === w || "blob" === w || "nodebuffer" === w ? new p(s + o + B.length) : new d(s + o + B.length);
for (r = 0; r < n.length; r++) {
t.append(n[r].fileRecord);
t.append(n[r].compressedObject.compressedContent);
}
for (r = 0; r < n.length; r++) t.append(n[r].dirRecord);
t.append(B);
var C = t.finalize();
switch (e.type.toLowerCase()) {
case "uint8array":
case "arraybuffer":
case "nodebuffer":
return a.transformTo(e.type.toLowerCase(), C);

case "blob":
return a.arrayBuffer2Blob(a.transformTo("arraybuffer", C));

case "base64":
return e.base64 ? f.encode(C) : C;

default:
return C;
}
},
crc32: function(e, t) {
return s(e, t);
},
utf8encode: function(e) {
return a.transformTo("string", u.utf8encode(e));
},
utf8decode: function(e) {
return u.utf8decode(e);
}
};
t.exports = k;
}, {
"./base64": 1,
"./compressedObject": 2,
"./compressions": 3,
"./crc32": 4,
"./defaults": 6,
"./nodeBuffer": 11,
"./signature": 14,
"./stringWriter": 16,
"./support": 17,
"./uint8ArrayWriter": 19,
"./utf8": 20,
"./utils": 21
} ],
14: [ function(e, t, r) {
"use strict";
r.LOCAL_FILE_HEADER = "PK";
r.CENTRAL_FILE_HEADER = "PK";
r.CENTRAL_DIRECTORY_END = "PK";
r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK";
r.ZIP64_CENTRAL_DIRECTORY_END = "PK";
r.DATA_DESCRIPTOR = "PK\b";
}, {} ],
15: [ function(e, t, r) {
"use strict";
var n = e("./dataReader"), a = e("./utils");
function s(e, t) {
this.data = e;
t || (this.data = a.string2binary(this.data));
this.length = this.data.length;
this.index = 0;
}
s.prototype = new n();
s.prototype.byteAt = function(e) {
return this.data.charCodeAt(e);
};
s.prototype.lastIndexOfSignature = function(e) {
return this.data.lastIndexOf(e);
};
s.prototype.readData = function(e) {
this.checkOffset(e);
var t = this.data.slice(this.index, this.index + e);
this.index += e;
return t;
};
t.exports = s;
}, {
"./dataReader": 5,
"./utils": 21
} ],
16: [ function(e, t, r) {
"use strict";
var n = e("./utils"), a = function() {
this.data = [];
};
a.prototype = {
append: function(e) {
e = n.transformTo("string", e);
this.data.push(e);
},
finalize: function() {
return this.data.join("");
}
};
t.exports = a;
}, {
"./utils": 21
} ],
17: [ function(e, t, r) {
(function(e) {
"use strict";
r.base64 = !0;
r.array = !0;
r.string = !0;
r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
r.nodebuffer = "undefined" != typeof e;
r.uint8array = "undefined" != typeof Uint8Array;
if ("undefined" == typeof ArrayBuffer) r.blob = !1; else {
var t = new ArrayBuffer(0);
try {
r.blob = 0 === new Blob([ t ], {
type: "application/zip"
}).size;
} catch (e) {
try {
var n = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
n.append(t);
r.blob = 0 === n.getBlob("application/zip").size;
} catch (e) {
r.blob = !1;
}
}
}
}).call(this, "undefined" != typeof Buffer ? Buffer : void 0);
}, {} ],
18: [ function(e, t, r) {
"use strict";
var n = e("./dataReader");
function a(e) {
if (e) {
this.data = e;
this.length = this.data.length;
this.index = 0;
}
}
a.prototype = new n();
a.prototype.byteAt = function(e) {
return this.data[e];
};
a.prototype.lastIndexOfSignature = function(e) {
for (var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), a = e.charCodeAt(3), s = this.length - 4; s >= 0; --s) if (this.data[s] === t && this.data[s + 1] === r && this.data[s + 2] === n && this.data[s + 3] === a) return s;
return -1;
};
a.prototype.readData = function(e) {
this.checkOffset(e);
if (0 === e) return new Uint8Array(0);
var t = this.data.subarray(this.index, this.index + e);
this.index += e;
return t;
};
t.exports = a;
}, {
"./dataReader": 5
} ],
19: [ function(e, t, r) {
"use strict";
var n = e("./utils"), a = function(e) {
this.data = new Uint8Array(e);
this.index = 0;
};
a.prototype = {
append: function(e) {
if (0 !== e.length) {
e = n.transformTo("uint8array", e);
this.data.set(e, this.index);
this.index += e.length;
}
},
finalize: function() {
return this.data;
}
};
t.exports = a;
}, {
"./utils": 21
} ],
20: [ function(e, t, r) {
"use strict";
for (var n = e("./utils"), a = e("./support"), s = e("./nodeBuffer"), i = new Array(256), o = 0; o < 256; o++) i[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
i[254] = i[254] = 1;
var f = function(e, t) {
var r;
(t = t || e.length) > e.length && (t = e.length);
r = t - 1;
for (;r >= 0 && 128 == (192 & e[r]); ) r--;
return r < 0 ? t : 0 === r ? t : r + i[e[r]] > t ? r : t;
}, l = function(e) {
var t, r, a, s, o = e.length, f = new Array(2 * o);
for (r = 0, t = 0; t < o; ) if ((a = e[t++]) < 128) f[r++] = a; else if ((s = i[a]) > 4) {
f[r++] = 65533;
t += s - 1;
} else {
a &= 2 === s ? 31 : 3 === s ? 15 : 7;
for (;s > 1 && t < o; ) {
a = a << 6 | 63 & e[t++];
s--;
}
if (s > 1) f[r++] = 65533; else if (a < 65536) f[r++] = a; else {
a -= 65536;
f[r++] = 55296 | a >> 10 & 1023;
f[r++] = 56320 | 1023 & a;
}
}
f.length !== r && (f.subarray ? f = f.subarray(0, r) : f.length = r);
return n.applyFromCharCode(f);
};
r.utf8encode = function(e) {
return a.nodebuffer ? s(e, "utf-8") : function(e) {
var t, r, n, s, i, o = e.length, f = 0;
for (s = 0; s < o; s++) {
if (55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (n = e.charCodeAt(s + 1)))) {
r = 65536 + (r - 55296 << 10) + (n - 56320);
s++;
}
f += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
}
t = a.uint8array ? new Uint8Array(f) : new Array(f);
for (i = 0, s = 0; i < f; s++) {
if (55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (n = e.charCodeAt(s + 1)))) {
r = 65536 + (r - 55296 << 10) + (n - 56320);
s++;
}
if (r < 128) t[i++] = r; else if (r < 2048) {
t[i++] = 192 | r >>> 6;
t[i++] = 128 | 63 & r;
} else if (r < 65536) {
t[i++] = 224 | r >>> 12;
t[i++] = 128 | r >>> 6 & 63;
t[i++] = 128 | 63 & r;
} else {
t[i++] = 240 | r >>> 18;
t[i++] = 128 | r >>> 12 & 63;
t[i++] = 128 | r >>> 6 & 63;
t[i++] = 128 | 63 & r;
}
}
return t;
}(e);
};
r.utf8decode = function(e) {
if (a.nodebuffer) return n.transformTo("nodebuffer", e).toString("utf-8");
for (var t = [], r = 0, s = (e = n.transformTo(a.uint8array ? "uint8array" : "array", e)).length; r < s; ) {
var i = f(e, Math.min(r + 65536, s));
a.uint8array ? t.push(l(e.subarray(r, i))) : t.push(l(e.slice(r, i)));
r = i;
}
return t.join("");
};
}, {
"./nodeBuffer": 11,
"./support": 17,
"./utils": 21
} ],
21: [ function(e, t, r) {
"use strict";
var n = e("./support"), a = e("./compressions"), s = e("./nodeBuffer");
r.string2binary = function(e) {
for (var t = "", r = 0; r < e.length; r++) t += String.fromCharCode(255 & e.charCodeAt(r));
return t;
};
r.arrayBuffer2Blob = function(e) {
r.checkSupport("blob");
try {
return new Blob([ e ], {
type: "application/zip"
});
} catch (r) {
try {
var t = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
t.append(e);
return t.getBlob("application/zip");
} catch (e) {
throw new Error("Bug : can't construct the Blob.");
}
}
};
function i(e) {
return e;
}
function o(e, t) {
for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
return t;
}
function f(e) {
var t = 65536, n = [], a = e.length, i = r.getTypeOf(e), o = 0, f = !0;
try {
switch (i) {
case "uint8array":
String.fromCharCode.apply(null, new Uint8Array(0));
break;

case "nodebuffer":
String.fromCharCode.apply(null, s(0));
}
} catch (e) {
f = !1;
}
if (!f) {
for (var l = "", c = 0; c < e.length; c++) l += String.fromCharCode(e[c]);
return l;
}
for (;o < a && t > 1; ) try {
"array" === i || "nodebuffer" === i ? n.push(String.fromCharCode.apply(null, e.slice(o, Math.min(o + t, a)))) : n.push(String.fromCharCode.apply(null, e.subarray(o, Math.min(o + t, a))));
o += t;
} catch (e) {
t = Math.floor(t / 2);
}
return n.join("");
}
r.applyFromCharCode = f;
function l(e, t) {
for (var r = 0; r < e.length; r++) t[r] = e[r];
return t;
}
var c = {};
c.string = {
string: i,
array: function(e) {
return o(e, new Array(e.length));
},
arraybuffer: function(e) {
return c.string.uint8array(e).buffer;
},
uint8array: function(e) {
return o(e, new Uint8Array(e.length));
},
nodebuffer: function(e) {
return o(e, s(e.length));
}
};
c.array = {
string: f,
array: i,
arraybuffer: function(e) {
return new Uint8Array(e).buffer;
},
uint8array: function(e) {
return new Uint8Array(e);
},
nodebuffer: function(e) {
return s(e);
}
};
c.arraybuffer = {
string: function(e) {
return f(new Uint8Array(e));
},
array: function(e) {
return l(new Uint8Array(e), new Array(e.byteLength));
},
arraybuffer: i,
uint8array: function(e) {
return new Uint8Array(e);
},
nodebuffer: function(e) {
return s(new Uint8Array(e));
}
};
c.uint8array = {
string: f,
array: function(e) {
return l(e, new Array(e.length));
},
arraybuffer: function(e) {
return e.buffer;
},
uint8array: i,
nodebuffer: function(e) {
return s(e);
}
};
c.nodebuffer = {
string: f,
array: function(e) {
return l(e, new Array(e.length));
},
arraybuffer: function(e) {
return c.nodebuffer.uint8array(e).buffer;
},
uint8array: function(e) {
return l(e, new Uint8Array(e.length));
},
nodebuffer: i
};
r.transformTo = function(e, t) {
t || (t = "");
if (!e) return t;
r.checkSupport(e);
var n = r.getTypeOf(t);
return c[n][e](t);
};
r.getTypeOf = function(e) {
return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : n.nodebuffer && s.test(e) ? "nodebuffer" : n.uint8array && e instanceof Uint8Array ? "uint8array" : n.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
};
r.checkSupport = function(e) {
if (!n[e.toLowerCase()]) throw new Error(e + " is not supported by this browser");
};
r.MAX_VALUE_16BITS = 65535;
r.MAX_VALUE_32BITS = -1;
r.pretty = function(e) {
var t, r, n = "";
for (r = 0; r < (e || "").length; r++) n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
return n;
};
r.findCompression = function(e) {
for (var t in a) if (a.hasOwnProperty(t) && a[t].magic === e) return a[t];
return null;
};
r.isRegExp = function(e) {
return "[object RegExp]" === Object.prototype.toString.call(e);
};
}, {
"./compressions": 3,
"./nodeBuffer": 11,
"./support": 17
} ],
22: [ function(e, t, r) {
"use strict";
var n = e("./stringReader"), a = e("./nodeBufferReader"), s = e("./uint8ArrayReader"), i = e("./utils"), o = e("./signature"), f = e("./zipEntry"), l = e("./support"), c = e("./object");
function h(e, t) {
this.files = [];
this.loadOptions = t;
e && this.load(e);
}
h.prototype = {
checkSignature: function(e) {
var t = this.reader.readString(4);
if (t !== e) throw new Error("Corrupted zip or bug : unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
},
readBlockEndOfCentral: function() {
this.diskNumber = this.reader.readInt(2);
this.diskWithCentralDirStart = this.reader.readInt(2);
this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
this.centralDirRecords = this.reader.readInt(2);
this.centralDirSize = this.reader.readInt(4);
this.centralDirOffset = this.reader.readInt(4);
this.zipCommentLength = this.reader.readInt(2);
this.zipComment = this.reader.readString(this.zipCommentLength);
this.zipComment = c.utf8decode(this.zipComment);
},
readBlockZip64EndOfCentral: function() {
this.zip64EndOfCentralSize = this.reader.readInt(8);
this.versionMadeBy = this.reader.readString(2);
this.versionNeeded = this.reader.readInt(2);
this.diskNumber = this.reader.readInt(4);
this.diskWithCentralDirStart = this.reader.readInt(4);
this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
this.centralDirRecords = this.reader.readInt(8);
this.centralDirSize = this.reader.readInt(8);
this.centralDirOffset = this.reader.readInt(8);
this.zip64ExtensibleData = {};
for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n; ) {
e = this.reader.readInt(2);
t = this.reader.readInt(4);
r = this.reader.readString(t);
this.zip64ExtensibleData[e] = {
id: e,
length: t,
value: r
};
}
},
readBlockZip64EndOfCentralLocator: function() {
this.diskWithZip64CentralDirStart = this.reader.readInt(4);
this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
this.disksCount = this.reader.readInt(4);
if (this.disksCount > 1) throw new Error("Multi-volumes zip are not supported");
},
readLocalFiles: function() {
var e, t;
for (e = 0; e < this.files.length; e++) {
t = this.files[e];
this.reader.setIndex(t.localHeaderOffset);
this.checkSignature(o.LOCAL_FILE_HEADER);
t.readLocalPart(this.reader);
t.handleUTF8();
}
},
readCentralDir: function() {
var e;
this.reader.setIndex(this.centralDirOffset);
for (;this.reader.readString(4) === o.CENTRAL_FILE_HEADER; ) {
(e = new f({
zip64: this.zip64
}, this.loadOptions)).readCentralPart(this.reader);
this.files.push(e);
}
},
readEndOfCentral: function() {
var e = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
if (-1 === e) throw new Error("Corrupted zip : can't find end of central directory");
this.reader.setIndex(e);
this.checkSignature(o.CENTRAL_DIRECTORY_END);
this.readBlockEndOfCentral();
if (this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
this.zip64 = !0;
if (-1 === (e = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))) throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
this.reader.setIndex(e);
this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
this.readBlockZip64EndOfCentralLocator();
this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END);
this.readBlockZip64EndOfCentral();
}
},
prepareReader: function(e) {
var t = i.getTypeOf(e);
"string" !== t || l.uint8array ? this.reader = "nodebuffer" === t ? new a(e) : new s(i.transformTo("uint8array", e)) : this.reader = new n(e, this.loadOptions.optimizedBinaryString);
},
load: function(e) {
this.prepareReader(e);
this.readEndOfCentral();
this.readCentralDir();
this.readLocalFiles();
}
};
t.exports = h;
}, {
"./nodeBufferReader": 12,
"./object": 13,
"./signature": 14,
"./stringReader": 15,
"./support": 17,
"./uint8ArrayReader": 18,
"./utils": 21,
"./zipEntry": 23
} ],
23: [ function(e, t, r) {
"use strict";
var n = e("./stringReader"), a = e("./utils"), s = e("./compressedObject"), i = e("./object");
function o(e, t) {
this.options = e;
this.loadOptions = t;
}
o.prototype = {
isEncrypted: function() {
return 1 == (1 & this.bitFlag);
},
useUTF8: function() {
return 2048 == (2048 & this.bitFlag);
},
prepareCompressedContent: function(e, t, r) {
return function() {
var n = e.index;
e.setIndex(t);
var a = e.readData(r);
e.setIndex(n);
return a;
};
},
prepareContent: function(e, t, r, n, s) {
return function() {
var e = a.transformTo(n.uncompressInputType, this.getCompressedContent()), t = n.uncompress(e);
if (t.length !== s) throw new Error("Bug : uncompressed data size mismatch");
return t;
};
},
readLocalPart: function(e) {
var t, r;
e.skip(22);
this.fileNameLength = e.readInt(2);
r = e.readInt(2);
this.fileName = e.readString(this.fileNameLength);
e.skip(r);
if (-1 == this.compressedSize || -1 == this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
if (null === (t = a.findCompression(this.compressionMethod))) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
this.decompressed = new s();
this.decompressed.compressedSize = this.compressedSize;
this.decompressed.uncompressedSize = this.uncompressedSize;
this.decompressed.crc32 = this.crc32;
this.decompressed.compressionMethod = this.compressionMethod;
this.decompressed.getCompressedContent = this.prepareCompressedContent(e, e.index, this.compressedSize, t);
this.decompressed.getContent = this.prepareContent(e, e.index, this.compressedSize, t, this.uncompressedSize);
if (this.loadOptions.checkCRC32) {
this.decompressed = a.transformTo("string", this.decompressed.getContent());
if (i.crc32(this.decompressed) !== this.crc32) throw new Error("Corrupted zip : CRC32 mismatch");
}
},
readCentralPart: function(e) {
this.versionMadeBy = e.readString(2);
this.versionNeeded = e.readInt(2);
this.bitFlag = e.readInt(2);
this.compressionMethod = e.readString(2);
this.date = e.readDate();
this.crc32 = e.readInt(4);
this.compressedSize = e.readInt(4);
this.uncompressedSize = e.readInt(4);
this.fileNameLength = e.readInt(2);
this.extraFieldsLength = e.readInt(2);
this.fileCommentLength = e.readInt(2);
this.diskNumberStart = e.readInt(2);
this.internalFileAttributes = e.readInt(2);
this.externalFileAttributes = e.readInt(4);
this.localHeaderOffset = e.readInt(4);
if (this.isEncrypted()) throw new Error("Encrypted zip are not supported");
this.fileName = e.readString(this.fileNameLength);
this.readExtraFields(e);
this.parseZIP64ExtraField(e);
this.fileComment = e.readString(this.fileCommentLength);
this.dir = !!(16 & this.externalFileAttributes);
},
parseZIP64ExtraField: function(e) {
if (this.extraFields[1]) {
var t = new n(this.extraFields[1].value);
this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8));
this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8));
this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8));
this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4));
}
},
readExtraFields: function(e) {
var t, r, n, a = e.index;
this.extraFields = this.extraFields || {};
for (;e.index < a + this.extraFieldsLength; ) {
t = e.readInt(2);
r = e.readInt(2);
n = e.readString(r);
this.extraFields[t] = {
id: t,
length: r,
value: n
};
}
},
handleUTF8: function() {
if (this.useUTF8()) {
this.fileName = i.utf8decode(this.fileName);
this.fileComment = i.utf8decode(this.fileComment);
} else {
var e = this.findExtraFieldUnicodePath();
null !== e && (this.fileName = e);
var t = this.findExtraFieldUnicodeComment();
null !== t && (this.fileComment = t);
}
},
findExtraFieldUnicodePath: function() {
var e = this.extraFields[28789];
if (e) {
var t = new n(e.value);
return 1 !== t.readInt(1) ? null : i.crc32(this.fileName) !== t.readInt(4) ? null : i.utf8decode(t.readString(e.length - 5));
}
return null;
},
findExtraFieldUnicodeComment: function() {
var e = this.extraFields[25461];
if (e) {
var t = new n(e.value);
return 1 !== t.readInt(1) ? null : i.crc32(this.fileComment) !== t.readInt(4) ? null : i.utf8decode(t.readString(e.length - 5));
}
return null;
}
};
t.exports = o;
}, {
"./compressedObject": 2,
"./object": 13,
"./stringReader": 15,
"./utils": 21
} ],
24: [ function(e, t, r) {
"use strict";
var n = {};
(0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants"));
t.exports = n;
}, {
"./lib/deflate": 25,
"./lib/inflate": 26,
"./lib/utils/common": 27,
"./lib/zlib/constants": 30
} ],
25: [ function(e, t, r) {
"use strict";
var n = e("./zlib/deflate.js"), a = e("./utils/common"), s = e("./utils/strings"), i = e("./zlib/messages"), o = e("./zlib/zstream"), f = function(e) {
this.options = a.assign({
level: -1,
method: 8,
chunkSize: 16384,
windowBits: 15,
memLevel: 8,
strategy: 0,
to: ""
}, e || {});
var t = this.options;
t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16);
this.err = 0;
this.msg = "";
this.ended = !1;
this.chunks = [];
this.strm = new o();
this.strm.avail_out = 0;
var r = n.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
if (0 !== r) throw new Error(i[r]);
t.header && n.deflateSetHeader(this.strm, t.header);
};
f.prototype.push = function(e, t) {
var r, i, o = this.strm, f = this.options.chunkSize;
if (this.ended) return !1;
i = t === ~~t ? t : !0 === t ? 4 : 0;
o.input = "string" == typeof e ? s.string2buf(e) : e;
o.next_in = 0;
o.avail_in = o.input.length;
do {
if (0 === o.avail_out) {
o.output = new a.Buf8(f);
o.next_out = 0;
o.avail_out = f;
}
if (1 !== (r = n.deflate(o, i)) && 0 !== r) {
this.onEnd(r);
this.ended = !0;
return !1;
}
(0 === o.avail_out || 0 === o.avail_in && 4 === i) && ("string" === this.options.to ? this.onData(s.buf2binstring(a.shrinkBuf(o.output, o.next_out))) : this.onData(a.shrinkBuf(o.output, o.next_out)));
} while ((o.avail_in > 0 || 0 === o.avail_out) && 1 !== r);
if (4 === i) {
r = n.deflateEnd(this.strm);
this.onEnd(r);
this.ended = !0;
return 0 === r;
}
return !0;
};
f.prototype.onData = function(e) {
this.chunks.push(e);
};
f.prototype.onEnd = function(e) {
0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks));
this.chunks = [];
this.err = e;
this.msg = this.strm.msg;
};
function l(e, t) {
var r = new f(t);
r.push(e, !0);
if (r.err) throw r.msg;
return r.result;
}
r.Deflate = f;
r.deflate = l;
r.deflateRaw = function(e, t) {
(t = t || {}).raw = !0;
return l(e, t);
};
r.gzip = function(e, t) {
(t = t || {}).gzip = !0;
return l(e, t);
};
}, {
"./utils/common": 27,
"./utils/strings": 28,
"./zlib/deflate.js": 32,
"./zlib/messages": 37,
"./zlib/zstream": 39
} ],
26: [ function(e, t, r) {
"use strict";
var n = e("./zlib/inflate.js"), a = e("./utils/common"), s = e("./utils/strings"), i = e("./zlib/constants"), o = e("./zlib/messages"), f = e("./zlib/zstream"), l = e("./zlib/gzheader"), c = function(e) {
this.options = a.assign({
chunkSize: 16384,
windowBits: 0,
to: ""
}, e || {});
var t = this.options;
if (t.raw && t.windowBits >= 0 && t.windowBits < 16) {
t.windowBits = -t.windowBits;
0 === t.windowBits && (t.windowBits = -15);
}
!(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32);
t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15);
this.err = 0;
this.msg = "";
this.ended = !1;
this.chunks = [];
this.strm = new f();
this.strm.avail_out = 0;
var r = n.inflateInit2(this.strm, t.windowBits);
if (r !== i.Z_OK) throw new Error(o[r]);
this.header = new l();
n.inflateGetHeader(this.strm, this.header);
};
c.prototype.push = function(e, t) {
var r, o, f, l, c, h = this.strm, u = this.options.chunkSize;
if (this.ended) return !1;
o = t === ~~t ? t : !0 === t ? i.Z_FINISH : i.Z_NO_FLUSH;
h.input = "string" == typeof e ? s.binstring2buf(e) : e;
h.next_in = 0;
h.avail_in = h.input.length;
do {
if (0 === h.avail_out) {
h.output = new a.Buf8(u);
h.next_out = 0;
h.avail_out = u;
}
if ((r = n.inflate(h, i.Z_NO_FLUSH)) !== i.Z_STREAM_END && r !== i.Z_OK) {
this.onEnd(r);
this.ended = !0;
return !1;
}
if (h.next_out && (0 === h.avail_out || r === i.Z_STREAM_END || 0 === h.avail_in && o === i.Z_FINISH)) if ("string" === this.options.to) {
f = s.utf8border(h.output, h.next_out);
l = h.next_out - f;
c = s.buf2string(h.output, f);
h.next_out = l;
h.avail_out = u - l;
l && a.arraySet(h.output, h.output, f, l, 0);
this.onData(c);
} else this.onData(a.shrinkBuf(h.output, h.next_out));
} while (h.avail_in > 0 && r !== i.Z_STREAM_END);
r === i.Z_STREAM_END && (o = i.Z_FINISH);
if (o === i.Z_FINISH) {
r = n.inflateEnd(this.strm);
this.onEnd(r);
this.ended = !0;
return r === i.Z_OK;
}
return !0;
};
c.prototype.onData = function(e) {
this.chunks.push(e);
};
c.prototype.onEnd = function(e) {
e === i.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks));
this.chunks = [];
this.err = e;
this.msg = this.strm.msg;
};
function h(e, t) {
var r = new c(t);
r.push(e, !0);
if (r.err) throw r.msg;
return r.result;
}
r.Inflate = c;
r.inflate = h;
r.inflateRaw = function(e, t) {
(t = t || {}).raw = !0;
return h(e, t);
};
r.ungzip = h;
}, {
"./utils/common": 27,
"./utils/strings": 28,
"./zlib/constants": 30,
"./zlib/gzheader": 33,
"./zlib/inflate.js": 35,
"./zlib/messages": 37,
"./zlib/zstream": 39
} ],
27: [ function(e, t, r) {
"use strict";
var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
r.assign = function(e) {
for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
var r = t.shift();
if (r) {
if ("object" != typeof r) throw new TypeError(r + "must be non-object");
for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n]);
}
}
return e;
};
r.shrinkBuf = function(e, t) {
if (e.length === t) return e;
if (e.subarray) return e.subarray(0, t);
e.length = t;
return e;
};
var a = {
arraySet: function(e, t, r, n, a) {
if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), a); else for (var s = 0; s < n; s++) e[a + s] = t[r + s];
},
flattenChunks: function(e) {
var t, r, n, a, s, i;
n = 0;
for (t = 0, r = e.length; t < r; t++) n += e[t].length;
i = new Uint8Array(n);
a = 0;
for (t = 0, r = e.length; t < r; t++) {
s = e[t];
i.set(s, a);
a += s.length;
}
return i;
}
}, s = {
arraySet: function(e, t, r, n, a) {
for (var s = 0; s < n; s++) e[a + s] = t[r + s];
},
flattenChunks: function(e) {
return [].concat.apply([], e);
}
};
r.setTyped = function(e) {
if (e) {
r.Buf8 = Uint8Array;
r.Buf16 = Uint16Array;
r.Buf32 = Int32Array;
r.assign(r, a);
} else {
r.Buf8 = Array;
r.Buf16 = Array;
r.Buf32 = Array;
r.assign(r, s);
}
};
r.setTyped(n);
}, {} ],
28: [ function(e, t, r) {
"use strict";
var n = e("./common"), a = !0, s = !0;
try {
String.fromCharCode.apply(null, [ 0 ]);
} catch (e) {
a = !1;
}
try {
String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
s = !1;
}
for (var i = new n.Buf8(256), o = 0; o < 256; o++) i[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
i[254] = i[254] = 1;
r.string2buf = function(e) {
var t, r, a, s, i, o = e.length, f = 0;
for (s = 0; s < o; s++) {
if (55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (a = e.charCodeAt(s + 1)))) {
r = 65536 + (r - 55296 << 10) + (a - 56320);
s++;
}
f += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
}
t = new n.Buf8(f);
for (i = 0, s = 0; i < f; s++) {
if (55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (a = e.charCodeAt(s + 1)))) {
r = 65536 + (r - 55296 << 10) + (a - 56320);
s++;
}
if (r < 128) t[i++] = r; else if (r < 2048) {
t[i++] = 192 | r >>> 6;
t[i++] = 128 | 63 & r;
} else if (r < 65536) {
t[i++] = 224 | r >>> 12;
t[i++] = 128 | r >>> 6 & 63;
t[i++] = 128 | 63 & r;
} else {
t[i++] = 240 | r >>> 18;
t[i++] = 128 | r >>> 12 & 63;
t[i++] = 128 | r >>> 6 & 63;
t[i++] = 128 | 63 & r;
}
}
return t;
};
function f(e, t) {
if (t < 65537 && (e.subarray && s || !e.subarray && a)) return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
for (var r = "", i = 0; i < t; i++) r += String.fromCharCode(e[i]);
return r;
}
r.buf2binstring = function(e) {
return f(e, e.length);
};
r.binstring2buf = function(e) {
for (var t = new n.Buf8(e.length), r = 0, a = t.length; r < a; r++) t[r] = e.charCodeAt(r);
return t;
};
r.buf2string = function(e, t) {
var r, n, a, s, o = t || e.length, l = new Array(2 * o);
for (n = 0, r = 0; r < o; ) if ((a = e[r++]) < 128) l[n++] = a; else if ((s = i[a]) > 4) {
l[n++] = 65533;
r += s - 1;
} else {
a &= 2 === s ? 31 : 3 === s ? 15 : 7;
for (;s > 1 && r < o; ) {
a = a << 6 | 63 & e[r++];
s--;
}
if (s > 1) l[n++] = 65533; else if (a < 65536) l[n++] = a; else {
a -= 65536;
l[n++] = 55296 | a >> 10 & 1023;
l[n++] = 56320 | 1023 & a;
}
}
return f(l, n);
};
r.utf8border = function(e, t) {
var r;
(t = t || e.length) > e.length && (t = e.length);
r = t - 1;
for (;r >= 0 && 128 == (192 & e[r]); ) r--;
return r < 0 ? t : 0 === r ? t : r + i[e[r]] > t ? r : t;
};
}, {
"./common": 27
} ],
29: [ function(e, t, r) {
"use strict";
t.exports = function(e, t, r, n) {
for (var a = 65535 & e | 0, s = e >>> 16 & 65535 | 0, i = 0; 0 !== r; ) {
r -= i = r > 2e3 ? 2e3 : r;
do {
s = s + (a = a + t[n++] | 0) | 0;
} while (--i);
a %= 65521;
s %= 65521;
}
return a | s << 16 | 0;
};
}, {} ],
30: [ function(e, t, r) {
t.exports = {
Z_NO_FLUSH: 0,
Z_PARTIAL_FLUSH: 1,
Z_SYNC_FLUSH: 2,
Z_FULL_FLUSH: 3,
Z_FINISH: 4,
Z_BLOCK: 5,
Z_TREES: 6,
Z_OK: 0,
Z_STREAM_END: 1,
Z_NEED_DICT: 2,
Z_ERRNO: -1,
Z_STREAM_ERROR: -2,
Z_DATA_ERROR: -3,
Z_BUF_ERROR: -5,
Z_NO_COMPRESSION: 0,
Z_BEST_SPEED: 1,
Z_BEST_COMPRESSION: 9,
Z_DEFAULT_COMPRESSION: -1,
Z_FILTERED: 1,
Z_HUFFMAN_ONLY: 2,
Z_RLE: 3,
Z_FIXED: 4,
Z_DEFAULT_STRATEGY: 0,
Z_BINARY: 0,
Z_TEXT: 1,
Z_UNKNOWN: 2,
Z_DEFLATED: 8
};
}, {} ],
31: [ function(e, t, r) {
"use strict";
var n = function() {
for (var e, t = [], r = 0; r < 256; r++) {
e = r;
for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
t[r] = e;
}
return t;
}();
t.exports = function(e, t, r, a) {
var s = n, i = a + r;
e ^= -1;
for (var o = a; o < i; o++) e = e >>> 8 ^ s[255 & (e ^ t[o])];
return -1 ^ e;
};
}, {} ],
32: [ function(e, t, r) {
"use strict";
var n = e("../utils/common"), a = e("./trees"), s = e("./adler32"), i = e("./crc32"), o = e("./messages"), f = 0, l = 1, c = 3, h = 4, u = 5, d = 0, p = 1, m = -2, g = -3, b = -5, v = -1, E = 1, S = 2, B = 3, w = 4, C = 0, _ = 2, T = 8, k = 9, x = 15, A = 8, I = 286, y = 30, R = 19, D = 2 * I + 1, O = 15, F = 3, P = 258, N = P + F + 1, M = 32, L = 42, U = 69, H = 73, W = 91, V = 103, z = 113, X = 666, G = 1, j = 2, K = 3, Y = 4, $ = 3;
function Z(e, t) {
e.msg = o[t];
return t;
}
function Q(e) {
return (e << 1) - (e > 4 ? 9 : 0);
}
function q(e) {
for (var t = e.length; --t >= 0; ) e[t] = 0;
}
function J(e) {
var t = e.state, r = t.pending;
r > e.avail_out && (r = e.avail_out);
if (0 !== r) {
n.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out);
e.next_out += r;
t.pending_out += r;
e.total_out += r;
e.avail_out -= r;
t.pending -= r;
0 === t.pending && (t.pending_out = 0);
}
}
function ee(e, t) {
a._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
e.block_start = e.strstart;
J(e.strm);
}
function te(e, t) {
e.pending_buf[e.pending++] = t;
}
function re(e, t) {
e.pending_buf[e.pending++] = t >>> 8 & 255;
e.pending_buf[e.pending++] = 255 & t;
}
function ne(e, t, r, a) {
var o = e.avail_in;
o > a && (o = a);
if (0 === o) return 0;
e.avail_in -= o;
n.arraySet(t, e.input, e.next_in, o, r);
1 === e.state.wrap ? e.adler = s(e.adler, t, o, r) : 2 === e.state.wrap && (e.adler = i(e.adler, t, o, r));
e.next_in += o;
e.total_in += o;
return o;
}
function ae(e, t) {
var r, n, a = e.max_chain_length, s = e.strstart, i = e.prev_length, o = e.nice_match, f = e.strstart > e.w_size - N ? e.strstart - (e.w_size - N) : 0, l = e.window, c = e.w_mask, h = e.prev, u = e.strstart + P, d = l[s + i - 1], p = l[s + i];
e.prev_length >= e.good_match && (a >>= 2);
o > e.lookahead && (o = e.lookahead);
do {
if (l[(r = t) + i] === p && l[r + i - 1] === d && l[r] === l[s] && l[++r] === l[s + 1]) {
s += 2;
r++;
do {} while (l[++s] === l[++r] && l[++s] === l[++r] && l[++s] === l[++r] && l[++s] === l[++r] && l[++s] === l[++r] && l[++s] === l[++r] && l[++s] === l[++r] && l[++s] === l[++r] && s < u);
n = P - (u - s);
s = u - P;
if (n > i) {
e.match_start = t;
i = n;
if (n >= o) break;
d = l[s + i - 1];
p = l[s + i];
}
}
} while ((t = h[t & c]) > f && 0 != --a);
return i <= e.lookahead ? i : e.lookahead;
}
function se(e) {
var t, r, a, s, i, o = e.w_size;
do {
s = e.window_size - e.lookahead - e.strstart;
if (e.strstart >= o + (o - N)) {
n.arraySet(e.window, e.window, o, o, 0);
e.match_start -= o;
e.strstart -= o;
e.block_start -= o;
t = r = e.hash_size;
do {
a = e.head[--t];
e.head[t] = a >= o ? a - o : 0;
} while (--r);
t = r = o;
do {
a = e.prev[--t];
e.prev[t] = a >= o ? a - o : 0;
} while (--r);
s += o;
}
if (0 === e.strm.avail_in) break;
r = ne(e.strm, e.window, e.strstart + e.lookahead, s);
e.lookahead += r;
if (e.lookahead + e.insert >= F) {
i = e.strstart - e.insert;
e.ins_h = e.window[i];
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[i + 1]) & e.hash_mask;
for (;e.insert; ) {
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[i + F - 1]) & e.hash_mask;
e.prev[i & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = i;
i++;
e.insert--;
if (e.lookahead + e.insert < F) break;
}
}
} while (e.lookahead < N && 0 !== e.strm.avail_in);
}
function ie(e, t) {
for (var r, n; ;) {
if (e.lookahead < N) {
se(e);
if (e.lookahead < N && t === f) return G;
if (0 === e.lookahead) break;
}
r = 0;
if (e.lookahead >= F) {
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + F - 1]) & e.hash_mask;
r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = e.strstart;
}
0 !== r && e.strstart - r <= e.w_size - N && (e.match_length = ae(e, r));
if (e.match_length >= F) {
n = a._tr_tally(e, e.strstart - e.match_start, e.match_length - F);
e.lookahead -= e.match_length;
if (e.match_length <= e.max_lazy_match && e.lookahead >= F) {
e.match_length--;
do {
e.strstart++;
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + F - 1]) & e.hash_mask;
r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = e.strstart;
} while (0 != --e.match_length);
e.strstart++;
} else {
e.strstart += e.match_length;
e.match_length = 0;
e.ins_h = e.window[e.strstart];
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
}
} else {
n = a._tr_tally(e, 0, e.window[e.strstart]);
e.lookahead--;
e.strstart++;
}
if (n) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
}
e.insert = e.strstart < F - 1 ? e.strstart : F - 1;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? K : Y;
}
if (e.last_lit) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
return j;
}
function oe(e, t) {
for (var r, n, s; ;) {
if (e.lookahead < N) {
se(e);
if (e.lookahead < N && t === f) return G;
if (0 === e.lookahead) break;
}
r = 0;
if (e.lookahead >= F) {
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + F - 1]) & e.hash_mask;
r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = e.strstart;
}
e.prev_length = e.match_length;
e.prev_match = e.match_start;
e.match_length = F - 1;
if (0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - N) {
e.match_length = ae(e, r);
e.match_length <= 5 && (e.strategy === E || e.match_length === F && e.strstart - e.match_start > 4096) && (e.match_length = F - 1);
}
if (e.prev_length >= F && e.match_length <= e.prev_length) {
s = e.strstart + e.lookahead - F;
n = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - F);
e.lookahead -= e.prev_length - 1;
e.prev_length -= 2;
do {
if (++e.strstart <= s) {
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + F - 1]) & e.hash_mask;
r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = e.strstart;
}
} while (0 != --e.prev_length);
e.match_available = 0;
e.match_length = F - 1;
e.strstart++;
if (n) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
} else if (e.match_available) {
(n = a._tr_tally(e, 0, e.window[e.strstart - 1])) && ee(e, !1);
e.strstart++;
e.lookahead--;
if (0 === e.strm.avail_out) return G;
} else {
e.match_available = 1;
e.strstart++;
e.lookahead--;
}
}
if (e.match_available) {
n = a._tr_tally(e, 0, e.window[e.strstart - 1]);
e.match_available = 0;
}
e.insert = e.strstart < F - 1 ? e.strstart : F - 1;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? K : Y;
}
if (e.last_lit) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
return j;
}
var fe, le = function(e, t, r, n, a) {
this.good_length = e;
this.max_lazy = t;
this.nice_length = r;
this.max_chain = n;
this.func = a;
};
fe = [ new le(0, 0, 0, 0, function(e, t) {
var r = 65535;
r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);
for (;;) {
if (e.lookahead <= 1) {
se(e);
if (0 === e.lookahead && t === f) return G;
if (0 === e.lookahead) break;
}
e.strstart += e.lookahead;
e.lookahead = 0;
var n = e.block_start + r;
if (0 === e.strstart || e.strstart >= n) {
e.lookahead = e.strstart - n;
e.strstart = n;
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
if (e.strstart - e.block_start >= e.w_size - N) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
}
e.insert = 0;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? K : Y;
}
if (e.strstart > e.block_start) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
return G;
}), new le(4, 4, 8, 4, ie), new le(4, 5, 16, 8, ie), new le(4, 6, 32, 32, ie), new le(4, 4, 16, 16, oe), new le(8, 16, 32, 32, oe), new le(8, 16, 128, 128, oe), new le(8, 32, 128, 256, oe), new le(32, 128, 258, 1024, oe), new le(32, 258, 258, 4096, oe) ];
function ce(e) {
var t;
if (!e || !e.state) return Z(e, m);
e.total_in = e.total_out = 0;
e.data_type = _;
(t = e.state).pending = 0;
t.pending_out = 0;
t.wrap < 0 && (t.wrap = -t.wrap);
t.status = t.wrap ? L : z;
e.adler = 2 === t.wrap ? 0 : 1;
t.last_flush = f;
a._tr_init(t);
return d;
}
function he(e) {
var t = ce(e);
t === d && function(e) {
e.window_size = 2 * e.w_size;
q(e.head);
e.max_lazy_match = fe[e.level].max_lazy;
e.good_match = fe[e.level].good_length;
e.nice_match = fe[e.level].nice_length;
e.max_chain_length = fe[e.level].max_chain;
e.strstart = 0;
e.block_start = 0;
e.lookahead = 0;
e.insert = 0;
e.match_length = e.prev_length = F - 1;
e.match_available = 0;
e.ins_h = 0;
}(e.state);
return t;
}
function ue(e, t, r, a, s, i) {
if (!e) return m;
var o = 1;
t === v && (t = 6);
if (a < 0) {
o = 0;
a = -a;
} else if (a > 15) {
o = 2;
a -= 16;
}
if (s < 1 || s > k || r !== T || a < 8 || a > 15 || t < 0 || t > 9 || i < 0 || i > w) return Z(e, m);
8 === a && (a = 9);
var f = new function() {
this.strm = null;
this.status = 0;
this.pending_buf = null;
this.pending_buf_size = 0;
this.pending_out = 0;
this.pending = 0;
this.wrap = 0;
this.gzhead = null;
this.gzindex = 0;
this.method = T;
this.last_flush = -1;
this.w_size = 0;
this.w_bits = 0;
this.w_mask = 0;
this.window = null;
this.window_size = 0;
this.prev = null;
this.head = null;
this.ins_h = 0;
this.hash_size = 0;
this.hash_bits = 0;
this.hash_mask = 0;
this.hash_shift = 0;
this.block_start = 0;
this.match_length = 0;
this.prev_match = 0;
this.match_available = 0;
this.strstart = 0;
this.match_start = 0;
this.lookahead = 0;
this.prev_length = 0;
this.max_chain_length = 0;
this.max_lazy_match = 0;
this.level = 0;
this.strategy = 0;
this.good_match = 0;
this.nice_match = 0;
this.dyn_ltree = new n.Buf16(2 * D);
this.dyn_dtree = new n.Buf16(2 * (2 * y + 1));
this.bl_tree = new n.Buf16(2 * (2 * R + 1));
q(this.dyn_ltree);
q(this.dyn_dtree);
q(this.bl_tree);
this.l_desc = null;
this.d_desc = null;
this.bl_desc = null;
this.bl_count = new n.Buf16(O + 1);
this.heap = new n.Buf16(2 * I + 1);
q(this.heap);
this.heap_len = 0;
this.heap_max = 0;
this.depth = new n.Buf16(2 * I + 1);
q(this.depth);
this.l_buf = 0;
this.lit_bufsize = 0;
this.last_lit = 0;
this.d_buf = 0;
this.opt_len = 0;
this.static_len = 0;
this.matches = 0;
this.insert = 0;
this.bi_buf = 0;
this.bi_valid = 0;
}();
e.state = f;
f.strm = e;
f.wrap = o;
f.gzhead = null;
f.w_bits = a;
f.w_size = 1 << f.w_bits;
f.w_mask = f.w_size - 1;
f.hash_bits = s + 7;
f.hash_size = 1 << f.hash_bits;
f.hash_mask = f.hash_size - 1;
f.hash_shift = ~~((f.hash_bits + F - 1) / F);
f.window = new n.Buf8(2 * f.w_size);
f.head = new n.Buf16(f.hash_size);
f.prev = new n.Buf16(f.w_size);
f.lit_bufsize = 1 << s + 6;
f.pending_buf_size = 4 * f.lit_bufsize;
f.pending_buf = new n.Buf8(f.pending_buf_size);
f.d_buf = f.lit_bufsize >> 1;
f.l_buf = 3 * f.lit_bufsize;
f.level = t;
f.strategy = i;
f.method = r;
return he(e);
}
r.deflateInit = function(e, t) {
return ue(e, t, T, x, A, C);
};
r.deflateInit2 = ue;
r.deflateReset = he;
r.deflateResetKeep = ce;
r.deflateSetHeader = function(e, t) {
if (!e || !e.state) return m;
if (2 !== e.state.wrap) return m;
e.state.gzhead = t;
return d;
};
r.deflate = function(e, t) {
var r, n, s, o;
if (!e || !e.state || t > u || t < 0) return e ? Z(e, m) : m;
n = e.state;
if (!e.output || !e.input && 0 !== e.avail_in || n.status === X && t !== h) return Z(e, 0 === e.avail_out ? b : m);
n.strm = e;
r = n.last_flush;
n.last_flush = t;
if (n.status === L) if (2 === n.wrap) {
e.adler = 0;
te(n, 31);
te(n, 139);
te(n, 8);
if (n.gzhead) {
te(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0));
te(n, 255 & n.gzhead.time);
te(n, n.gzhead.time >> 8 & 255);
te(n, n.gzhead.time >> 16 & 255);
te(n, n.gzhead.time >> 24 & 255);
te(n, 9 === n.level ? 2 : n.strategy >= S || n.level < 2 ? 4 : 0);
te(n, 255 & n.gzhead.os);
if (n.gzhead.extra && n.gzhead.extra.length) {
te(n, 255 & n.gzhead.extra.length);
te(n, n.gzhead.extra.length >> 8 & 255);
}
n.gzhead.hcrc && (e.adler = i(e.adler, n.pending_buf, n.pending, 0));
n.gzindex = 0;
n.status = U;
} else {
te(n, 0);
te(n, 0);
te(n, 0);
te(n, 0);
te(n, 0);
te(n, 9 === n.level ? 2 : n.strategy >= S || n.level < 2 ? 4 : 0);
te(n, $);
n.status = z;
}
} else {
var g = T + (n.w_bits - 8 << 4) << 8;
g |= (n.strategy >= S || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6;
0 !== n.strstart && (g |= M);
g += 31 - g % 31;
n.status = z;
re(n, g);
if (0 !== n.strstart) {
re(n, e.adler >>> 16);
re(n, 65535 & e.adler);
}
e.adler = 1;
}
if (n.status === U) if (n.gzhead.extra) {
s = n.pending;
for (;n.gzindex < (65535 & n.gzhead.extra.length); ) {
if (n.pending === n.pending_buf_size) {
n.gzhead.hcrc && n.pending > s && (e.adler = i(e.adler, n.pending_buf, n.pending - s, s));
J(e);
s = n.pending;
if (n.pending === n.pending_buf_size) break;
}
te(n, 255 & n.gzhead.extra[n.gzindex]);
n.gzindex++;
}
n.gzhead.hcrc && n.pending > s && (e.adler = i(e.adler, n.pending_buf, n.pending - s, s));
if (n.gzindex === n.gzhead.extra.length) {
n.gzindex = 0;
n.status = H;
}
} else n.status = H;
if (n.status === H) if (n.gzhead.name) {
s = n.pending;
do {
if (n.pending === n.pending_buf_size) {
n.gzhead.hcrc && n.pending > s && (e.adler = i(e.adler, n.pending_buf, n.pending - s, s));
J(e);
s = n.pending;
if (n.pending === n.pending_buf_size) {
o = 1;
break;
}
}
o = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0;
te(n, o);
} while (0 !== o);
n.gzhead.hcrc && n.pending > s && (e.adler = i(e.adler, n.pending_buf, n.pending - s, s));
if (0 === o) {
n.gzindex = 0;
n.status = W;
}
} else n.status = W;
if (n.status === W) if (n.gzhead.comment) {
s = n.pending;
do {
if (n.pending === n.pending_buf_size) {
n.gzhead.hcrc && n.pending > s && (e.adler = i(e.adler, n.pending_buf, n.pending - s, s));
J(e);
s = n.pending;
if (n.pending === n.pending_buf_size) {
o = 1;
break;
}
}
o = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0;
te(n, o);
} while (0 !== o);
n.gzhead.hcrc && n.pending > s && (e.adler = i(e.adler, n.pending_buf, n.pending - s, s));
0 === o && (n.status = V);
} else n.status = V;
if (n.status === V) if (n.gzhead.hcrc) {
n.pending + 2 > n.pending_buf_size && J(e);
if (n.pending + 2 <= n.pending_buf_size) {
te(n, 255 & e.adler);
te(n, e.adler >> 8 & 255);
e.adler = 0;
n.status = z;
}
} else n.status = z;
if (0 !== n.pending) {
J(e);
if (0 === e.avail_out) {
n.last_flush = -1;
return d;
}
} else if (0 === e.avail_in && Q(t) <= Q(r) && t !== h) return Z(e, b);
if (n.status === X && 0 !== e.avail_in) return Z(e, b);
if (0 !== e.avail_in || 0 !== n.lookahead || t !== f && n.status !== X) {
var v = n.strategy === S ? function(e, t) {
for (var r; ;) {
if (0 === e.lookahead) {
se(e);
if (0 === e.lookahead) {
if (t === f) return G;
break;
}
}
e.match_length = 0;
r = a._tr_tally(e, 0, e.window[e.strstart]);
e.lookahead--;
e.strstart++;
if (r) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
}
e.insert = 0;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? K : Y;
}
if (e.last_lit) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
return j;
}(n, t) : n.strategy === B ? function(e, t) {
for (var r, n, s, i, o = e.window; ;) {
if (e.lookahead <= P) {
se(e);
if (e.lookahead <= P && t === f) return G;
if (0 === e.lookahead) break;
}
e.match_length = 0;
if (e.lookahead >= F && e.strstart > 0 && (n = o[s = e.strstart - 1]) === o[++s] && n === o[++s] && n === o[++s]) {
i = e.strstart + P;
do {} while (n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && s < i);
e.match_length = P - (i - s);
e.match_length > e.lookahead && (e.match_length = e.lookahead);
}
if (e.match_length >= F) {
r = a._tr_tally(e, 1, e.match_length - F);
e.lookahead -= e.match_length;
e.strstart += e.match_length;
e.match_length = 0;
} else {
r = a._tr_tally(e, 0, e.window[e.strstart]);
e.lookahead--;
e.strstart++;
}
if (r) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
}
e.insert = 0;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? K : Y;
}
if (e.last_lit) {
ee(e, !1);
if (0 === e.strm.avail_out) return G;
}
return j;
}(n, t) : fe[n.level].func(n, t);
v !== K && v !== Y || (n.status = X);
if (v === G || v === K) {
0 === e.avail_out && (n.last_flush = -1);
return d;
}
if (v === j) {
if (t === l) a._tr_align(n); else if (t !== u) {
a._tr_stored_block(n, 0, 0, !1);
if (t === c) {
q(n.head);
if (0 === n.lookahead) {
n.strstart = 0;
n.block_start = 0;
n.insert = 0;
}
}
}
J(e);
if (0 === e.avail_out) {
n.last_flush = -1;
return d;
}
}
}
if (t !== h) return d;
if (n.wrap <= 0) return p;
if (2 === n.wrap) {
te(n, 255 & e.adler);
te(n, e.adler >> 8 & 255);
te(n, e.adler >> 16 & 255);
te(n, e.adler >> 24 & 255);
te(n, 255 & e.total_in);
te(n, e.total_in >> 8 & 255);
te(n, e.total_in >> 16 & 255);
te(n, e.total_in >> 24 & 255);
} else {
re(n, e.adler >>> 16);
re(n, 65535 & e.adler);
}
J(e);
n.wrap > 0 && (n.wrap = -n.wrap);
return 0 !== n.pending ? d : p;
};
r.deflateEnd = function(e) {
var t;
if (!e || !e.state) return m;
if ((t = e.state.status) !== L && t !== U && t !== H && t !== W && t !== V && t !== z && t !== X) return Z(e, m);
e.state = null;
return t === z ? Z(e, g) : d;
};
r.deflateInfo = "pako deflate (from Nodeca project)";
}, {
"../utils/common": 27,
"./adler32": 29,
"./crc32": 31,
"./messages": 37,
"./trees": 38
} ],
33: [ function(e, t, r) {
"use strict";
t.exports = function() {
this.text = 0;
this.time = 0;
this.xflags = 0;
this.os = 0;
this.extra = null;
this.extra_len = 0;
this.name = "";
this.comment = "";
this.hcrc = 0;
this.done = !1;
};
}, {} ],
34: [ function(e, t, r) {
"use strict";
t.exports = function(e, t) {
var r, n, a, s, i, o, f, l, c, h, u, d, p, m, g, b, v, E, S, B, w, C, _, T, k;
r = e.state;
n = e.next_in;
T = e.input;
a = n + (e.avail_in - 5);
s = e.next_out;
k = e.output;
i = s - (t - e.avail_out);
o = s + (e.avail_out - 257);
f = r.dmax;
l = r.wsize;
c = r.whave;
h = r.wnext;
u = r.window;
d = r.hold;
p = r.bits;
m = r.lencode;
g = r.distcode;
b = (1 << r.lenbits) - 1;
v = (1 << r.distbits) - 1;
e: do {
if (p < 15) {
d += T[n++] << p;
p += 8;
d += T[n++] << p;
p += 8;
}
E = m[d & b];
t: for (;;) {
d >>>= S = E >>> 24;
p -= S;
if (0 === (S = E >>> 16 & 255)) k[s++] = 65535 & E; else {
if (!(16 & S)) {
if (0 == (64 & S)) {
E = m[(65535 & E) + (d & (1 << S) - 1)];
continue t;
}
if (32 & S) {
r.mode = 12;
break e;
}
e.msg = "invalid literal/length code";
r.mode = 30;
break e;
}
B = 65535 & E;
if (S &= 15) {
if (p < S) {
d += T[n++] << p;
p += 8;
}
B += d & (1 << S) - 1;
d >>>= S;
p -= S;
}
if (p < 15) {
d += T[n++] << p;
p += 8;
d += T[n++] << p;
p += 8;
}
E = g[d & v];
r: for (;;) {
d >>>= S = E >>> 24;
p -= S;
if (!(16 & (S = E >>> 16 & 255))) {
if (0 == (64 & S)) {
E = g[(65535 & E) + (d & (1 << S) - 1)];
continue r;
}
e.msg = "invalid distance code";
r.mode = 30;
break e;
}
w = 65535 & E;
if (p < (S &= 15)) {
d += T[n++] << p;
if ((p += 8) < S) {
d += T[n++] << p;
p += 8;
}
}
if ((w += d & (1 << S) - 1) > f) {
e.msg = "invalid distance too far back";
r.mode = 30;
break e;
}
d >>>= S;
p -= S;
if (w > (S = s - i)) {
if ((S = w - S) > c && r.sane) {
e.msg = "invalid distance too far back";
r.mode = 30;
break e;
}
C = 0;
_ = u;
if (0 === h) {
C += l - S;
if (S < B) {
B -= S;
do {
k[s++] = u[C++];
} while (--S);
C = s - w;
_ = k;
}
} else if (h < S) {
C += l + h - S;
if ((S -= h) < B) {
B -= S;
do {
k[s++] = u[C++];
} while (--S);
C = 0;
if (h < B) {
B -= S = h;
do {
k[s++] = u[C++];
} while (--S);
C = s - w;
_ = k;
}
}
} else {
C += h - S;
if (S < B) {
B -= S;
do {
k[s++] = u[C++];
} while (--S);
C = s - w;
_ = k;
}
}
for (;B > 2; ) {
k[s++] = _[C++];
k[s++] = _[C++];
k[s++] = _[C++];
B -= 3;
}
if (B) {
k[s++] = _[C++];
B > 1 && (k[s++] = _[C++]);
}
} else {
C = s - w;
do {
k[s++] = k[C++];
k[s++] = k[C++];
k[s++] = k[C++];
B -= 3;
} while (B > 2);
if (B) {
k[s++] = k[C++];
B > 1 && (k[s++] = k[C++]);
}
}
break;
}
}
break;
}
} while (n < a && s < o);
n -= B = p >> 3;
d &= (1 << (p -= B << 3)) - 1;
e.next_in = n;
e.next_out = s;
e.avail_in = n < a ? a - n + 5 : 5 - (n - a);
e.avail_out = s < o ? o - s + 257 : 257 - (s - o);
r.hold = d;
r.bits = p;
};
}, {} ],
35: [ function(e, t, r) {
"use strict";
var n = e("../utils/common"), a = e("./adler32"), s = e("./crc32"), i = e("./inffast"), o = e("./inftrees"), f = 0, l = 1, c = 2, h = 4, u = 5, d = 6, p = 0, m = 1, g = 2, b = -2, v = -3, E = -4, S = -5, B = 8, w = 1, C = 2, _ = 3, T = 4, k = 5, x = 6, A = 7, I = 8, y = 9, R = 10, D = 11, O = 12, F = 13, P = 14, N = 15, M = 16, L = 17, U = 18, H = 19, W = 20, V = 21, z = 22, X = 23, G = 24, j = 25, K = 26, Y = 27, $ = 28, Z = 29, Q = 30, q = 31, J = 32, ee = 852, te = 592, re = 15;
function ne(e) {
return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
}
function ae(e) {
var t;
if (!e || !e.state) return b;
t = e.state;
e.total_in = e.total_out = t.total = 0;
e.msg = "";
t.wrap && (e.adler = 1 & t.wrap);
t.mode = w;
t.last = 0;
t.havedict = 0;
t.dmax = 32768;
t.head = null;
t.hold = 0;
t.bits = 0;
t.lencode = t.lendyn = new n.Buf32(ee);
t.distcode = t.distdyn = new n.Buf32(te);
t.sane = 1;
t.back = -1;
return p;
}
function se(e) {
var t;
if (!e || !e.state) return b;
(t = e.state).wsize = 0;
t.whave = 0;
t.wnext = 0;
return ae(e);
}
function ie(e, t) {
var r, n;
if (!e || !e.state) return b;
n = e.state;
if (t < 0) {
r = 0;
t = -t;
} else {
r = 1 + (t >> 4);
t < 48 && (t &= 15);
}
if (t && (t < 8 || t > 15)) return b;
null !== n.window && n.wbits !== t && (n.window = null);
n.wrap = r;
n.wbits = t;
return se(e);
}
function oe(e, t) {
var r, a;
if (!e) return b;
a = new function() {
this.mode = 0;
this.last = !1;
this.wrap = 0;
this.havedict = !1;
this.flags = 0;
this.dmax = 0;
this.check = 0;
this.total = 0;
this.head = null;
this.wbits = 0;
this.wsize = 0;
this.whave = 0;
this.wnext = 0;
this.window = null;
this.hold = 0;
this.bits = 0;
this.length = 0;
this.offset = 0;
this.extra = 0;
this.lencode = null;
this.distcode = null;
this.lenbits = 0;
this.distbits = 0;
this.ncode = 0;
this.nlen = 0;
this.ndist = 0;
this.have = 0;
this.next = null;
this.lens = new n.Buf16(320);
this.work = new n.Buf16(288);
this.lendyn = null;
this.distdyn = null;
this.sane = 0;
this.back = 0;
this.was = 0;
}();
e.state = a;
a.window = null;
(r = ie(e, t)) !== p && (e.state = null);
return r;
}
var fe, le, ce = !0;
function he(e) {
if (ce) {
var t;
fe = new n.Buf32(512);
le = new n.Buf32(32);
t = 0;
for (;t < 144; ) e.lens[t++] = 8;
for (;t < 256; ) e.lens[t++] = 9;
for (;t < 280; ) e.lens[t++] = 7;
for (;t < 288; ) e.lens[t++] = 8;
o(l, e.lens, 0, 288, fe, 0, e.work, {
bits: 9
});
t = 0;
for (;t < 32; ) e.lens[t++] = 5;
o(c, e.lens, 0, 32, le, 0, e.work, {
bits: 5
});
ce = !1;
}
e.lencode = fe;
e.lenbits = 9;
e.distcode = le;
e.distbits = 5;
}
r.inflateReset = se;
r.inflateReset2 = ie;
r.inflateResetKeep = ae;
r.inflateInit = function(e) {
return oe(e, re);
};
r.inflateInit2 = oe;
r.inflate = function(e, t) {
var r, ee, te, re, ae, se, ie, oe, fe, le, ce, ue, de, pe, me, ge, be, ve, Ee, Se, Be, we, Ce, _e, Te = 0, ke = new n.Buf8(4), xe = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return b;
(r = e.state).mode === O && (r.mode = F);
ae = e.next_out;
te = e.output;
ie = e.avail_out;
re = e.next_in;
ee = e.input;
se = e.avail_in;
oe = r.hold;
fe = r.bits;
le = se;
ce = ie;
we = p;
e: for (;;) switch (r.mode) {
case w:
if (0 === r.wrap) {
r.mode = F;
break;
}
for (;fe < 16; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
if (2 & r.wrap && 35615 === oe) {
r.check = 0;
ke[0] = 255 & oe;
ke[1] = oe >>> 8 & 255;
r.check = s(r.check, ke, 2, 0);
oe = 0;
fe = 0;
r.mode = C;
break;
}
r.flags = 0;
r.head && (r.head.done = !1);
if (!(1 & r.wrap) || (((255 & oe) << 8) + (oe >> 8)) % 31) {
e.msg = "incorrect header check";
r.mode = Q;
break;
}
if ((15 & oe) !== B) {
e.msg = "unknown compression method";
r.mode = Q;
break;
}
fe -= 4;
Be = 8 + (15 & (oe >>>= 4));
if (0 === r.wbits) r.wbits = Be; else if (Be > r.wbits) {
e.msg = "invalid window size";
r.mode = Q;
break;
}
r.dmax = 1 << Be;
e.adler = r.check = 1;
r.mode = 512 & oe ? R : O;
oe = 0;
fe = 0;
break;

case C:
for (;fe < 16; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
r.flags = oe;
if ((255 & r.flags) !== B) {
e.msg = "unknown compression method";
r.mode = Q;
break;
}
if (57344 & r.flags) {
e.msg = "unknown header flags set";
r.mode = Q;
break;
}
r.head && (r.head.text = oe >> 8 & 1);
if (512 & r.flags) {
ke[0] = 255 & oe;
ke[1] = oe >>> 8 & 255;
r.check = s(r.check, ke, 2, 0);
}
oe = 0;
fe = 0;
r.mode = _;

case _:
for (;fe < 32; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
r.head && (r.head.time = oe);
if (512 & r.flags) {
ke[0] = 255 & oe;
ke[1] = oe >>> 8 & 255;
ke[2] = oe >>> 16 & 255;
ke[3] = oe >>> 24 & 255;
r.check = s(r.check, ke, 4, 0);
}
oe = 0;
fe = 0;
r.mode = T;

case T:
for (;fe < 16; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
if (r.head) {
r.head.xflags = 255 & oe;
r.head.os = oe >> 8;
}
if (512 & r.flags) {
ke[0] = 255 & oe;
ke[1] = oe >>> 8 & 255;
r.check = s(r.check, ke, 2, 0);
}
oe = 0;
fe = 0;
r.mode = k;

case k:
if (1024 & r.flags) {
for (;fe < 16; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
r.length = oe;
r.head && (r.head.extra_len = oe);
if (512 & r.flags) {
ke[0] = 255 & oe;
ke[1] = oe >>> 8 & 255;
r.check = s(r.check, ke, 2, 0);
}
oe = 0;
fe = 0;
} else r.head && (r.head.extra = null);
r.mode = x;

case x:
if (1024 & r.flags) {
(ue = r.length) > se && (ue = se);
if (ue) {
if (r.head) {
Be = r.head.extra_len - r.length;
r.head.extra || (r.head.extra = new Array(r.head.extra_len));
n.arraySet(r.head.extra, ee, re, ue, Be);
}
512 & r.flags && (r.check = s(r.check, ee, ue, re));
se -= ue;
re += ue;
r.length -= ue;
}
if (r.length) break e;
}
r.length = 0;
r.mode = A;

case A:
if (2048 & r.flags) {
if (0 === se) break e;
ue = 0;
do {
Be = ee[re + ue++];
r.head && Be && r.length < 65536 && (r.head.name += String.fromCharCode(Be));
} while (Be && ue < se);
512 & r.flags && (r.check = s(r.check, ee, ue, re));
se -= ue;
re += ue;
if (Be) break e;
} else r.head && (r.head.name = null);
r.length = 0;
r.mode = I;

case I:
if (4096 & r.flags) {
if (0 === se) break e;
ue = 0;
do {
Be = ee[re + ue++];
r.head && Be && r.length < 65536 && (r.head.comment += String.fromCharCode(Be));
} while (Be && ue < se);
512 & r.flags && (r.check = s(r.check, ee, ue, re));
se -= ue;
re += ue;
if (Be) break e;
} else r.head && (r.head.comment = null);
r.mode = y;

case y:
if (512 & r.flags) {
for (;fe < 16; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
if (oe !== (65535 & r.check)) {
e.msg = "header crc mismatch";
r.mode = Q;
break;
}
oe = 0;
fe = 0;
}
if (r.head) {
r.head.hcrc = r.flags >> 9 & 1;
r.head.done = !0;
}
e.adler = r.check = 0;
r.mode = O;
break;

case R:
for (;fe < 32; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
e.adler = r.check = ne(oe);
oe = 0;
fe = 0;
r.mode = D;

case D:
if (0 === r.havedict) {
e.next_out = ae;
e.avail_out = ie;
e.next_in = re;
e.avail_in = se;
r.hold = oe;
r.bits = fe;
return g;
}
e.adler = r.check = 1;
r.mode = O;

case O:
if (t === u || t === d) break e;

case F:
if (r.last) {
oe >>>= 7 & fe;
fe -= 7 & fe;
r.mode = Y;
break;
}
for (;fe < 3; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
r.last = 1 & oe;
fe -= 1;
switch (3 & (oe >>>= 1)) {
case 0:
r.mode = P;
break;

case 1:
he(r);
r.mode = W;
if (t === d) {
oe >>>= 2;
fe -= 2;
break e;
}
break;

case 2:
r.mode = L;
break;

case 3:
e.msg = "invalid block type";
r.mode = Q;
}
oe >>>= 2;
fe -= 2;
break;

case P:
oe >>>= 7 & fe;
fe -= 7 & fe;
for (;fe < 32; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
if ((65535 & oe) != (oe >>> 16 ^ 65535)) {
e.msg = "invalid stored block lengths";
r.mode = Q;
break;
}
r.length = 65535 & oe;
oe = 0;
fe = 0;
r.mode = N;
if (t === d) break e;

case N:
r.mode = M;

case M:
if (ue = r.length) {
ue > se && (ue = se);
ue > ie && (ue = ie);
if (0 === ue) break e;
n.arraySet(te, ee, re, ue, ae);
se -= ue;
re += ue;
ie -= ue;
ae += ue;
r.length -= ue;
break;
}
r.mode = O;
break;

case L:
for (;fe < 14; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
r.nlen = 257 + (31 & oe);
oe >>>= 5;
fe -= 5;
r.ndist = 1 + (31 & oe);
oe >>>= 5;
fe -= 5;
r.ncode = 4 + (15 & oe);
oe >>>= 4;
fe -= 4;
if (r.nlen > 286 || r.ndist > 30) {
e.msg = "too many length or distance symbols";
r.mode = Q;
break;
}
r.have = 0;
r.mode = U;

case U:
for (;r.have < r.ncode; ) {
for (;fe < 3; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
r.lens[xe[r.have++]] = 7 & oe;
oe >>>= 3;
fe -= 3;
}
for (;r.have < 19; ) r.lens[xe[r.have++]] = 0;
r.lencode = r.lendyn;
r.lenbits = 7;
Ce = {
bits: r.lenbits
};
we = o(f, r.lens, 0, 19, r.lencode, 0, r.work, Ce);
r.lenbits = Ce.bits;
if (we) {
e.msg = "invalid code lengths set";
r.mode = Q;
break;
}
r.have = 0;
r.mode = H;

case H:
for (;r.have < r.nlen + r.ndist; ) {
for (;;) {
ge = (Te = r.lencode[oe & (1 << r.lenbits) - 1]) >>> 16 & 255;
be = 65535 & Te;
if ((me = Te >>> 24) <= fe) break;
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
if (be < 16) {
oe >>>= me;
fe -= me;
r.lens[r.have++] = be;
} else {
if (16 === be) {
_e = me + 2;
for (;fe < _e; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
oe >>>= me;
fe -= me;
if (0 === r.have) {
e.msg = "invalid bit length repeat";
r.mode = Q;
break;
}
Be = r.lens[r.have - 1];
ue = 3 + (3 & oe);
oe >>>= 2;
fe -= 2;
} else if (17 === be) {
_e = me + 3;
for (;fe < _e; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
fe -= me;
Be = 0;
ue = 3 + (7 & (oe >>>= me));
oe >>>= 3;
fe -= 3;
} else {
_e = me + 7;
for (;fe < _e; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
fe -= me;
Be = 0;
ue = 11 + (127 & (oe >>>= me));
oe >>>= 7;
fe -= 7;
}
if (r.have + ue > r.nlen + r.ndist) {
e.msg = "invalid bit length repeat";
r.mode = Q;
break;
}
for (;ue--; ) r.lens[r.have++] = Be;
}
}
if (r.mode === Q) break;
if (0 === r.lens[256]) {
e.msg = "invalid code -- missing end-of-block";
r.mode = Q;
break;
}
r.lenbits = 9;
Ce = {
bits: r.lenbits
};
we = o(l, r.lens, 0, r.nlen, r.lencode, 0, r.work, Ce);
r.lenbits = Ce.bits;
if (we) {
e.msg = "invalid literal/lengths set";
r.mode = Q;
break;
}
r.distbits = 6;
r.distcode = r.distdyn;
Ce = {
bits: r.distbits
};
we = o(c, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, Ce);
r.distbits = Ce.bits;
if (we) {
e.msg = "invalid distances set";
r.mode = Q;
break;
}
r.mode = W;
if (t === d) break e;

case W:
r.mode = V;

case V:
if (se >= 6 && ie >= 258) {
e.next_out = ae;
e.avail_out = ie;
e.next_in = re;
e.avail_in = se;
r.hold = oe;
r.bits = fe;
i(e, ce);
ae = e.next_out;
te = e.output;
ie = e.avail_out;
re = e.next_in;
ee = e.input;
se = e.avail_in;
oe = r.hold;
fe = r.bits;
r.mode === O && (r.back = -1);
break;
}
r.back = 0;
for (;;) {
ge = (Te = r.lencode[oe & (1 << r.lenbits) - 1]) >>> 16 & 255;
be = 65535 & Te;
if ((me = Te >>> 24) <= fe) break;
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
if (ge && 0 == (240 & ge)) {
ve = me;
Ee = ge;
Se = be;
for (;;) {
ge = (Te = r.lencode[Se + ((oe & (1 << ve + Ee) - 1) >> ve)]) >>> 16 & 255;
be = 65535 & Te;
if (ve + (me = Te >>> 24) <= fe) break;
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
oe >>>= ve;
fe -= ve;
r.back += ve;
}
oe >>>= me;
fe -= me;
r.back += me;
r.length = be;
if (0 === ge) {
r.mode = K;
break;
}
if (32 & ge) {
r.back = -1;
r.mode = O;
break;
}
if (64 & ge) {
e.msg = "invalid literal/length code";
r.mode = Q;
break;
}
r.extra = 15 & ge;
r.mode = z;

case z:
if (r.extra) {
_e = r.extra;
for (;fe < _e; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
r.length += oe & (1 << r.extra) - 1;
oe >>>= r.extra;
fe -= r.extra;
r.back += r.extra;
}
r.was = r.length;
r.mode = X;

case X:
for (;;) {
ge = (Te = r.distcode[oe & (1 << r.distbits) - 1]) >>> 16 & 255;
be = 65535 & Te;
if ((me = Te >>> 24) <= fe) break;
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
if (0 == (240 & ge)) {
ve = me;
Ee = ge;
Se = be;
for (;;) {
ge = (Te = r.distcode[Se + ((oe & (1 << ve + Ee) - 1) >> ve)]) >>> 16 & 255;
be = 65535 & Te;
if (ve + (me = Te >>> 24) <= fe) break;
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
oe >>>= ve;
fe -= ve;
r.back += ve;
}
oe >>>= me;
fe -= me;
r.back += me;
if (64 & ge) {
e.msg = "invalid distance code";
r.mode = Q;
break;
}
r.offset = be;
r.extra = 15 & ge;
r.mode = G;

case G:
if (r.extra) {
_e = r.extra;
for (;fe < _e; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
r.offset += oe & (1 << r.extra) - 1;
oe >>>= r.extra;
fe -= r.extra;
r.back += r.extra;
}
if (r.offset > r.dmax) {
e.msg = "invalid distance too far back";
r.mode = Q;
break;
}
r.mode = j;

case j:
if (0 === ie) break e;
ue = ce - ie;
if (r.offset > ue) {
if ((ue = r.offset - ue) > r.whave && r.sane) {
e.msg = "invalid distance too far back";
r.mode = Q;
break;
}
if (ue > r.wnext) {
ue -= r.wnext;
de = r.wsize - ue;
} else de = r.wnext - ue;
ue > r.length && (ue = r.length);
pe = r.window;
} else {
pe = te;
de = ae - r.offset;
ue = r.length;
}
ue > ie && (ue = ie);
ie -= ue;
r.length -= ue;
do {
te[ae++] = pe[de++];
} while (--ue);
0 === r.length && (r.mode = V);
break;

case K:
if (0 === ie) break e;
te[ae++] = r.length;
ie--;
r.mode = V;
break;

case Y:
if (r.wrap) {
for (;fe < 32; ) {
if (0 === se) break e;
se--;
oe |= ee[re++] << fe;
fe += 8;
}
ce -= ie;
e.total_out += ce;
r.total += ce;
ce && (e.adler = r.check = r.flags ? s(r.check, te, ce, ae - ce) : a(r.check, te, ce, ae - ce));
ce = ie;
if ((r.flags ? oe : ne(oe)) !== r.check) {
e.msg = "incorrect data check";
r.mode = Q;
break;
}
oe = 0;
fe = 0;
}
r.mode = $;

case $:
if (r.wrap && r.flags) {
for (;fe < 32; ) {
if (0 === se) break e;
se--;
oe += ee[re++] << fe;
fe += 8;
}
if (oe !== (4294967295 & r.total)) {
e.msg = "incorrect length check";
r.mode = Q;
break;
}
oe = 0;
fe = 0;
}
r.mode = Z;

case Z:
we = m;
break e;

case Q:
we = v;
break e;

case q:
return E;

case J:
default:
return b;
}
e.next_out = ae;
e.avail_out = ie;
e.next_in = re;
e.avail_in = se;
r.hold = oe;
r.bits = fe;
if ((r.wsize || ce !== e.avail_out && r.mode < Q && (r.mode < Y || t !== h)) && function(e, t, r, a) {
var s, i = e.state;
if (null === i.window) {
i.wsize = 1 << i.wbits;
i.wnext = 0;
i.whave = 0;
i.window = new n.Buf8(i.wsize);
}
if (a >= i.wsize) {
n.arraySet(i.window, t, r - i.wsize, i.wsize, 0);
i.wnext = 0;
i.whave = i.wsize;
} else {
(s = i.wsize - i.wnext) > a && (s = a);
n.arraySet(i.window, t, r - a, s, i.wnext);
if (a -= s) {
n.arraySet(i.window, t, r - a, a, 0);
i.wnext = a;
i.whave = i.wsize;
} else {
i.wnext += s;
i.wnext === i.wsize && (i.wnext = 0);
i.whave < i.wsize && (i.whave += s);
}
}
return 0;
}(e, e.output, e.next_out, ce - e.avail_out)) {
r.mode = q;
return E;
}
le -= e.avail_in;
ce -= e.avail_out;
e.total_in += le;
e.total_out += ce;
r.total += ce;
r.wrap && ce && (e.adler = r.check = r.flags ? s(r.check, te, ce, e.next_out - ce) : a(r.check, te, ce, e.next_out - ce));
e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === O ? 128 : 0) + (r.mode === W || r.mode === N ? 256 : 0);
(0 === le && 0 === ce || t === h) && we === p && (we = S);
return we;
};
r.inflateEnd = function(e) {
if (!e || !e.state) return b;
var t = e.state;
t.window && (t.window = null);
e.state = null;
return p;
};
r.inflateGetHeader = function(e, t) {
var r;
if (!e || !e.state) return b;
if (0 == (2 & (r = e.state).wrap)) return b;
r.head = t;
t.done = !1;
return p;
};
r.inflateInfo = "pako inflate (from Nodeca project)";
}, {
"../utils/common": 27,
"./adler32": 29,
"./crc32": 31,
"./inffast": 34,
"./inftrees": 36
} ],
36: [ function(e, t, r) {
"use strict";
var n = e("../utils/common"), a = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ], s = [ 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78 ], i = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0 ], o = [ 16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64 ];
t.exports = function(e, t, r, f, l, c, h, u) {
var d, p, m, g, b, v, E, S, B, w = u.bits, C = 0, _ = 0, T = 0, k = 0, x = 0, A = 0, I = 0, y = 0, R = 0, D = 0, O = null, F = 0, P = new n.Buf16(16), N = new n.Buf16(16), M = null, L = 0;
for (C = 0; C <= 15; C++) P[C] = 0;
for (_ = 0; _ < f; _++) P[t[r + _]]++;
x = w;
for (k = 15; k >= 1 && 0 === P[k]; k--) ;
x > k && (x = k);
if (0 === k) {
l[c++] = 20971520;
l[c++] = 20971520;
u.bits = 1;
return 0;
}
for (T = 1; T < k && 0 === P[T]; T++) ;
x < T && (x = T);
y = 1;
for (C = 1; C <= 15; C++) {
y <<= 1;
if ((y -= P[C]) < 0) return -1;
}
if (y > 0 && (0 === e || 1 !== k)) return -1;
N[1] = 0;
for (C = 1; C < 15; C++) N[C + 1] = N[C] + P[C];
for (_ = 0; _ < f; _++) 0 !== t[r + _] && (h[N[t[r + _]]++] = _);
if (0 === e) {
O = M = h;
v = 19;
} else if (1 === e) {
O = a;
F -= 257;
M = s;
L -= 257;
v = 256;
} else {
O = i;
M = o;
v = -1;
}
D = 0;
_ = 0;
C = T;
b = c;
A = x;
I = 0;
m = -1;
g = (R = 1 << x) - 1;
if (1 === e && R > 852 || 2 === e && R > 592) return 1;
for (;;) {
0;
E = C - I;
if (h[_] < v) {
S = 0;
B = h[_];
} else if (h[_] > v) {
S = M[L + h[_]];
B = O[F + h[_]];
} else {
S = 96;
B = 0;
}
d = 1 << C - I;
T = p = 1 << A;
do {
l[b + (D >> I) + (p -= d)] = E << 24 | S << 16 | B | 0;
} while (0 !== p);
d = 1 << C - 1;
for (;D & d; ) d >>= 1;
if (0 !== d) {
D &= d - 1;
D += d;
} else D = 0;
_++;
if (0 == --P[C]) {
if (C === k) break;
C = t[r + h[_]];
}
if (C > x && (D & g) !== m) {
0 === I && (I = x);
b += T;
y = 1 << (A = C - I);
for (;A + I < k && !((y -= P[A + I]) <= 0); ) {
A++;
y <<= 1;
}
R += 1 << A;
if (1 === e && R > 852 || 2 === e && R > 592) return 1;
l[m = D & g] = x << 24 | A << 16 | b - c | 0;
}
}
0 !== D && (l[b + D] = C - I << 24 | 64 << 16 | 0);
u.bits = x;
return 0;
};
}, {
"../utils/common": 27
} ],
37: [ function(e, t, r) {
"use strict";
t.exports = {
2: "need dictionary",
1: "stream end",
0: "",
"-1": "file error",
"-2": "stream error",
"-3": "data error",
"-4": "insufficient memory",
"-5": "buffer error",
"-6": "incompatible version"
};
}, {} ],
38: [ function(e, t, r) {
"use strict";
var n = e("../utils/common"), a = 4, s = 0, i = 1, o = 2;
function f(e) {
for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var l = 0, c = 1, h = 2, u = 29, d = 256, p = d + 1 + u, m = 30, g = 19, b = 2 * p + 1, v = 15, E = 16, S = 7, B = 256, w = 16, C = 17, _ = 18, T = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ], k = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], x = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ], A = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], I = new Array(2 * (p + 2));
f(I);
var y = new Array(2 * m);
f(y);
var R = new Array(512);
f(R);
var D = new Array(256);
f(D);
var O = new Array(u);
f(O);
var F = new Array(m);
f(F);
var P, N, M, L = function(e, t, r, n, a) {
this.static_tree = e;
this.extra_bits = t;
this.extra_base = r;
this.elems = n;
this.max_length = a;
this.has_stree = e && e.length;
}, U = function(e, t) {
this.dyn_tree = e;
this.max_code = 0;
this.stat_desc = t;
};
function H(e) {
return e < 256 ? R[e] : R[256 + (e >>> 7)];
}
function W(e, t) {
e.pending_buf[e.pending++] = 255 & t;
e.pending_buf[e.pending++] = t >>> 8 & 255;
}
function V(e, t, r) {
if (e.bi_valid > E - r) {
e.bi_buf |= t << e.bi_valid & 65535;
W(e, e.bi_buf);
e.bi_buf = t >> E - e.bi_valid;
e.bi_valid += r - E;
} else {
e.bi_buf |= t << e.bi_valid & 65535;
e.bi_valid += r;
}
}
function z(e, t, r) {
V(e, r[2 * t], r[2 * t + 1]);
}
function X(e, t) {
var r = 0;
do {
r |= 1 & e;
e >>>= 1;
r <<= 1;
} while (--t > 0);
return r >>> 1;
}
function G(e, t, r) {
var n, a, s = new Array(v + 1), i = 0;
for (n = 1; n <= v; n++) s[n] = i = i + r[n - 1] << 1;
for (a = 0; a <= t; a++) {
var o = e[2 * a + 1];
0 !== o && (e[2 * a] = X(s[o]++, o));
}
}
function j(e) {
var t;
for (t = 0; t < p; t++) e.dyn_ltree[2 * t] = 0;
for (t = 0; t < m; t++) e.dyn_dtree[2 * t] = 0;
for (t = 0; t < g; t++) e.bl_tree[2 * t] = 0;
e.dyn_ltree[2 * B] = 1;
e.opt_len = e.static_len = 0;
e.last_lit = e.matches = 0;
}
function K(e) {
e.bi_valid > 8 ? W(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf);
e.bi_buf = 0;
e.bi_valid = 0;
}
function Y(e, t, r, n) {
var a = 2 * t, s = 2 * r;
return e[a] < e[s] || e[a] === e[s] && n[t] <= n[r];
}
function $(e, t, r) {
for (var n = e.heap[r], a = r << 1; a <= e.heap_len; ) {
a < e.heap_len && Y(t, e.heap[a + 1], e.heap[a], e.depth) && a++;
if (Y(t, n, e.heap[a], e.depth)) break;
e.heap[r] = e.heap[a];
r = a;
a <<= 1;
}
e.heap[r] = n;
}
function Z(e, t, r) {
var n, a, s, i, o = 0;
if (0 !== e.last_lit) do {
n = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1];
a = e.pending_buf[e.l_buf + o];
o++;
if (0 === n) z(e, a, t); else {
z(e, (s = D[a]) + d + 1, t);
0 !== (i = T[s]) && V(e, a -= O[s], i);
z(e, s = H(--n), r);
0 !== (i = k[s]) && V(e, n -= F[s], i);
}
} while (o < e.last_lit);
z(e, B, t);
}
function Q(e, t) {
var r, n, a, s = t.dyn_tree, i = t.stat_desc.static_tree, o = t.stat_desc.has_stree, f = t.stat_desc.elems, l = -1;
e.heap_len = 0;
e.heap_max = b;
for (r = 0; r < f; r++) if (0 !== s[2 * r]) {
e.heap[++e.heap_len] = l = r;
e.depth[r] = 0;
} else s[2 * r + 1] = 0;
for (;e.heap_len < 2; ) {
s[2 * (a = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1;
e.depth[a] = 0;
e.opt_len--;
o && (e.static_len -= i[2 * a + 1]);
}
t.max_code = l;
for (r = e.heap_len >> 1; r >= 1; r--) $(e, s, r);
a = f;
do {
r = e.heap[1];
e.heap[1] = e.heap[e.heap_len--];
$(e, s, 1);
n = e.heap[1];
e.heap[--e.heap_max] = r;
e.heap[--e.heap_max] = n;
s[2 * a] = s[2 * r] + s[2 * n];
e.depth[a] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1;
s[2 * r + 1] = s[2 * n + 1] = a;
e.heap[1] = a++;
$(e, s, 1);
} while (e.heap_len >= 2);
e.heap[--e.heap_max] = e.heap[1];
(function(e, t) {
var r, n, a, s, i, o, f = t.dyn_tree, l = t.max_code, c = t.stat_desc.static_tree, h = t.stat_desc.has_stree, u = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, p = t.stat_desc.max_length, m = 0;
for (s = 0; s <= v; s++) e.bl_count[s] = 0;
f[2 * e.heap[e.heap_max] + 1] = 0;
for (r = e.heap_max + 1; r < b; r++) {
if ((s = f[2 * f[2 * (n = e.heap[r]) + 1] + 1] + 1) > p) {
s = p;
m++;
}
f[2 * n + 1] = s;
if (!(n > l)) {
e.bl_count[s]++;
i = 0;
n >= d && (i = u[n - d]);
o = f[2 * n];
e.opt_len += o * (s + i);
h && (e.static_len += o * (c[2 * n + 1] + i));
}
}
if (0 !== m) {
do {
s = p - 1;
for (;0 === e.bl_count[s]; ) s--;
e.bl_count[s]--;
e.bl_count[s + 1] += 2;
e.bl_count[p]--;
m -= 2;
} while (m > 0);
for (s = p; 0 !== s; s--) {
n = e.bl_count[s];
for (;0 !== n; ) if (!((a = e.heap[--r]) > l)) {
if (f[2 * a + 1] !== s) {
e.opt_len += (s - f[2 * a + 1]) * f[2 * a];
f[2 * a + 1] = s;
}
n--;
}
}
}
})(e, t);
G(s, l, e.bl_count);
}
function q(e, t, r) {
var n, a, s = -1, i = t[1], o = 0, f = 7, l = 4;
if (0 === i) {
f = 138;
l = 3;
}
t[2 * (r + 1) + 1] = 65535;
for (n = 0; n <= r; n++) {
a = i;
i = t[2 * (n + 1) + 1];
if (!(++o < f && a === i)) {
if (o < l) e.bl_tree[2 * a] += o; else if (0 !== a) {
a !== s && e.bl_tree[2 * a]++;
e.bl_tree[2 * w]++;
} else o <= 10 ? e.bl_tree[2 * C]++ : e.bl_tree[2 * _]++;
o = 0;
s = a;
if (0 === i) {
f = 138;
l = 3;
} else if (a === i) {
f = 6;
l = 3;
} else {
f = 7;
l = 4;
}
}
}
}
function J(e, t, r) {
var n, a, s = -1, i = t[1], o = 0, f = 7, l = 4;
if (0 === i) {
f = 138;
l = 3;
}
for (n = 0; n <= r; n++) {
a = i;
i = t[2 * (n + 1) + 1];
if (!(++o < f && a === i)) {
if (o < l) do {
z(e, a, e.bl_tree);
} while (0 != --o); else if (0 !== a) {
if (a !== s) {
z(e, a, e.bl_tree);
o--;
}
z(e, w, e.bl_tree);
V(e, o - 3, 2);
} else if (o <= 10) {
z(e, C, e.bl_tree);
V(e, o - 3, 3);
} else {
z(e, _, e.bl_tree);
V(e, o - 11, 7);
}
o = 0;
s = a;
if (0 === i) {
f = 138;
l = 3;
} else if (a === i) {
f = 6;
l = 3;
} else {
f = 7;
l = 4;
}
}
}
}
var ee = !1;
function te(e, t, r, a) {
V(e, (l << 1) + (a ? 1 : 0), 3);
(function(e, t, r, a) {
K(e);
if (a) {
W(e, r);
W(e, ~r);
}
n.arraySet(e.pending_buf, e.window, t, r, e.pending);
e.pending += r;
})(e, t, r, !0);
}
r._tr_init = function(e) {
if (!ee) {
(function() {
var e, t, r, n, a, s = new Array(v + 1);
r = 0;
for (n = 0; n < u - 1; n++) {
O[n] = r;
for (e = 0; e < 1 << T[n]; e++) D[r++] = n;
}
D[r - 1] = n;
a = 0;
for (n = 0; n < 16; n++) {
F[n] = a;
for (e = 0; e < 1 << k[n]; e++) R[a++] = n;
}
a >>= 7;
for (;n < m; n++) {
F[n] = a << 7;
for (e = 0; e < 1 << k[n] - 7; e++) R[256 + a++] = n;
}
for (t = 0; t <= v; t++) s[t] = 0;
e = 0;
for (;e <= 143; ) {
I[2 * e + 1] = 8;
e++;
s[8]++;
}
for (;e <= 255; ) {
I[2 * e + 1] = 9;
e++;
s[9]++;
}
for (;e <= 279; ) {
I[2 * e + 1] = 7;
e++;
s[7]++;
}
for (;e <= 287; ) {
I[2 * e + 1] = 8;
e++;
s[8]++;
}
G(I, p + 1, s);
for (e = 0; e < m; e++) {
y[2 * e + 1] = 5;
y[2 * e] = X(e, 5);
}
P = new L(I, T, d + 1, p, v);
N = new L(y, k, 0, m, v);
M = new L(new Array(0), x, 0, g, S);
})();
ee = !0;
}
e.l_desc = new U(e.dyn_ltree, P);
e.d_desc = new U(e.dyn_dtree, N);
e.bl_desc = new U(e.bl_tree, M);
e.bi_buf = 0;
e.bi_valid = 0;
j(e);
};
r._tr_stored_block = te;
r._tr_flush_block = function(e, t, r, n) {
var f, l, u = 0;
if (e.level > 0) {
e.strm.data_type === o && (e.strm.data_type = function(e) {
var t, r = 4093624447;
for (t = 0; t <= 31; t++, r >>>= 1) if (1 & r && 0 !== e.dyn_ltree[2 * t]) return s;
if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return i;
for (t = 32; t < d; t++) if (0 !== e.dyn_ltree[2 * t]) return i;
return s;
}(e));
Q(e, e.l_desc);
Q(e, e.d_desc);
u = function(e) {
var t;
q(e, e.dyn_ltree, e.l_desc.max_code);
q(e, e.dyn_dtree, e.d_desc.max_code);
Q(e, e.bl_desc);
for (t = g - 1; t >= 3 && 0 === e.bl_tree[2 * A[t] + 1]; t--) ;
e.opt_len += 3 * (t + 1) + 5 + 5 + 4;
return t;
}(e);
f = e.opt_len + 3 + 7 >>> 3;
(l = e.static_len + 3 + 7 >>> 3) <= f && (f = l);
} else f = l = r + 5;
if (r + 4 <= f && -1 !== t) te(e, t, r, n); else if (e.strategy === a || l === f) {
V(e, (c << 1) + (n ? 1 : 0), 3);
Z(e, I, y);
} else {
V(e, (h << 1) + (n ? 1 : 0), 3);
(function(e, t, r, n) {
var a;
V(e, t - 257, 5);
V(e, r - 1, 5);
V(e, n - 4, 4);
for (a = 0; a < n; a++) V(e, e.bl_tree[2 * A[a] + 1], 3);
J(e, e.dyn_ltree, t - 1);
J(e, e.dyn_dtree, r - 1);
})(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, u + 1);
Z(e, e.dyn_ltree, e.dyn_dtree);
}
j(e);
n && K(e);
};
r._tr_tally = function(e, t, r) {
e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255;
e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t;
e.pending_buf[e.l_buf + e.last_lit] = 255 & r;
e.last_lit++;
if (0 === t) e.dyn_ltree[2 * r]++; else {
e.matches++;
t--;
e.dyn_ltree[2 * (D[r] + d + 1)]++;
e.dyn_dtree[2 * H(t)]++;
}
return e.last_lit === e.lit_bufsize - 1;
};
r._tr_align = function(e) {
V(e, c << 1, 3);
z(e, B, I);
(function(e) {
if (16 === e.bi_valid) {
W(e, e.bi_buf);
e.bi_buf = 0;
e.bi_valid = 0;
} else if (e.bi_valid >= 8) {
e.pending_buf[e.pending++] = 255 & e.bi_buf;
e.bi_buf >>= 8;
e.bi_valid -= 8;
}
})(e);
};
}, {
"../utils/common": 27
} ],
39: [ function(e, t, r) {
"use strict";
t.exports = function() {
this.input = null;
this.next_in = 0;
this.avail_in = 0;
this.total_in = 0;
this.output = null;
this.next_out = 0;
this.avail_out = 0;
this.total_out = 0;
this.msg = "";
this.state = null;
this.data_type = 2;
this.adler = 0;
};
}, {} ]
}, {}, [ 9 ])(9);
});

var XLSX = {};

(function(e) {
e.version = "0.10.5";
var t = 1200;
"undefined" != typeof module && "undefined" != typeof require && "undefined" == typeof cptable && (global.cptable = require("./dist/cpexcel.js"));
function r() {
n(1200);
}
var n = function(e) {
t = e;
};
function a(e) {
for (var t = [], r = 0, n = e.length; r < n; ++r) t[r] = e.charCodeAt(r);
return t;
}
var s = function(e) {
var t = e.charCodeAt(0), r = e.charCodeAt(1);
return 255 == t && 254 == r ? e.substr(2) : 254 == t && 255 == r ? e.substr(2) : 65279 == t ? e.substr(1) : e;
}, i = function(e) {
return String.fromCharCode(e);
};
if ("undefined" != typeof cptable) {
n = function(e) {
t = e;
};
s = function(e) {
return 255 === e.charCodeAt(0) && 254 === e.charCodeAt(1) ? cptable.utils.decode(1200, a(e.substr(2))) : e;
};
i = function(e) {
return 1200 === t ? String.fromCharCode(e) : cptable.utils.decode(t, [ 255 & e, e >> 8 ])[0];
};
}
var o = null, f = function() {
var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
return {
encode: function(t) {
for (var r, n, a, s, i, o, f, l = "", c = 0; c < t.length; ) {
r = t.charCodeAt(c++);
n = t.charCodeAt(c++);
a = t.charCodeAt(c++);
s = r >> 2;
i = (3 & r) << 4 | n >> 4;
o = (15 & n) << 2 | a >> 6;
f = 63 & a;
isNaN(n) ? o = f = 64 : isNaN(a) && (f = 64);
l += e.charAt(s) + e.charAt(i) + e.charAt(o) + e.charAt(f);
}
return l;
},
decode: function(t) {
var r, n, a, s, i, o, f, l = "";
t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
for (var c = 0; c < t.length; ) {
s = e.indexOf(t.charAt(c++));
i = e.indexOf(t.charAt(c++));
o = e.indexOf(t.charAt(c++));
f = e.indexOf(t.charAt(c++));
r = s << 2 | i >> 4;
n = (15 & i) << 4 | o >> 2;
a = (3 & o) << 6 | f;
l += String.fromCharCode(r);
64 != o && (l += String.fromCharCode(n));
64 != f && (l += String.fromCharCode(a));
}
return l;
}
};
}(), l = "undefined" != typeof Buffer && "undefined" != typeof process && "undefined" != typeof process.versions && process.versions.node;
function c(e) {
return new (l ? Buffer : Array)(e);
}
function h(e) {
return l ? new Buffer(e, "binary") : e.split("").map(function(e) {
return 255 & e.charCodeAt(0);
});
}
var u = function(e) {
return [].concat.apply([], e);
}, d = /\u0000/g, p = /[\u0001-\u0006]/, m = {}, g = function(e) {
e.version = "0.9.4";
function t(e) {
for (var t = "", r = e.length - 1; r >= 0; ) t += e.charAt(r--);
return t;
}
function r(e, t) {
for (var r = ""; r.length < t; ) r += e;
return r;
}
function n(e, t) {
var n = "" + e;
return n.length >= t ? n : r("0", t - n.length) + n;
}
function a(e, t) {
var n = "" + e;
return n.length >= t ? n : r(" ", t - n.length) + n;
}
function s(e, t) {
var n = "" + e;
return n.length >= t ? n : n + r(" ", t - n.length);
}
var i = Math.pow(2, 32);
function o(e, t) {
return e > i || e < -i ? function(e, t) {
var n = "" + Math.round(e);
return n.length >= t ? n : r("0", t - n.length) + n;
}(e, t) : function(e, t) {
var n = "" + e;
return n.length >= t ? n : r("0", t - n.length) + n;
}(Math.round(e), t);
}
function f(e, t) {
t = t || 0;
return e.length >= 7 + t && 103 == (32 | e.charCodeAt(t)) && 101 == (32 | e.charCodeAt(t + 1)) && 110 == (32 | e.charCodeAt(t + 2)) && 101 == (32 | e.charCodeAt(t + 3)) && 114 == (32 | e.charCodeAt(t + 4)) && 97 == (32 | e.charCodeAt(t + 5)) && 108 == (32 | e.charCodeAt(t + 6));
}
var l = [ [ "date1904", 0 ], [ "output", "" ], [ "WTF", !1 ] ];
e.opts = l;
var c = [ [ "Sun", "Sunday" ], [ "Mon", "Monday" ], [ "Tue", "Tuesday" ], [ "Wed", "Wednesday" ], [ "Thu", "Thursday" ], [ "Fri", "Friday" ], [ "Sat", "Saturday" ] ], h = [ [ "J", "Jan", "January" ], [ "F", "Feb", "February" ], [ "M", "Mar", "March" ], [ "A", "Apr", "April" ], [ "M", "May", "May" ], [ "J", "Jun", "June" ], [ "J", "Jul", "July" ], [ "A", "Aug", "August" ], [ "S", "Sep", "September" ], [ "O", "Oct", "October" ], [ "N", "Nov", "November" ], [ "D", "Dec", "December" ] ];
function u(e) {
e[0] = "General";
e[1] = "0";
e[2] = "0.00";
e[3] = "#,##0";
e[4] = "#,##0.00";
e[9] = "0%";
e[10] = "0.00%";
e[11] = "0.00E+00";
e[12] = "# ?/?";
e[13] = "# ??/??";
e[14] = "m/d/yy";
e[15] = "d-mmm-yy";
e[16] = "d-mmm";
e[17] = "mmm-yy";
e[18] = "h:mm AM/PM";
e[19] = "h:mm:ss AM/PM";
e[20] = "h:mm";
e[21] = "h:mm:ss";
e[22] = "m/d/yy h:mm";
e[37] = "#,##0 ;(#,##0)";
e[38] = "#,##0 ;[Red](#,##0)";
e[39] = "#,##0.00;(#,##0.00)";
e[40] = "#,##0.00;[Red](#,##0.00)";
e[45] = "mm:ss";
e[46] = "[h]:mm:ss";
e[47] = "mmss.0";
e[48] = "##0.0E+0";
e[49] = "@";
e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "';
e[65535] = "General";
}
var d = {};
u(d);
function p(e, t, r) {
for (var n = e < 0 ? -1 : 1, a = e * n, s = 0, i = 1, o = 0, f = 1, l = 0, c = 0, h = Math.floor(a); l < t; ) {
o = (h = Math.floor(a)) * i + s;
c = h * l + f;
if (a - h < 5e-8) break;
a = 1 / (a - h);
s = i;
i = o;
f = l;
l = c;
}
if (c > t) if (l > t) {
c = f;
o = s;
} else {
c = l;
o = i;
}
if (!r) return [ 0, n * o, c ];
var u = Math.floor(n * o / c);
return [ u, n * o - u * c, c ];
}
function m(e) {
return "" + e;
}
e._general_int = m;
var g = function() {
var e = /\.(\d*[1-9])0+$/, t = /\.0*$/, r = /\.(\d*[1-9])0+/, n = /\.0*[Ee]/, a = /(E[+-])(\d)$/;
function s(r) {
return r.indexOf(".") > -1 ? r.replace(t, "").replace(e, ".$1") : r;
}
return function(t) {
var i = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E);
return s(function(e) {
for (var t = 0; t != e.length; ++t) if (101 == (32 | e.charCodeAt(t))) return e.replace(r, ".$1").replace(n, "E").replace("e", "E").replace(a, "$10$2");
return e;
}(i >= -4 && i <= -1 ? t.toPrecision(10 + i) : Math.abs(i) <= 9 ? function(e) {
var t = e < 0 ? 12 : 11, r = s(e.toFixed(12));
return r.length <= t ? r : (r = e.toPrecision(10)).length <= t ? r : e.toExponential(5);
}(t) : 10 === i ? t.toFixed(10).substr(0, 12) : function(t) {
var r = t.toFixed(11).replace(e, ".$1");
r.length > (t < 0 ? 12 : 11) && (r = t.toPrecision(6));
return r;
}(t)));
};
}();
e._general_num = g;
function b(e) {
switch (typeof e) {
case "string":
return e;

case "boolean":
return e ? "TRUE" : "FALSE";

case "number":
return (0 | e) === e ? m(e) : g(e);

case "undefined":
return "";

case "object":
if (null == e) return "";
}
throw new Error("unsupported value in General format: " + e);
}
e._general = b;
function v(e, t, r) {
if (e > 2958465 || e < 0) return null;
var n = 0 | e, a = Math.floor(86400 * (e - n)), s = 0, i = [], o = {
D: n,
T: a,
u: 86400 * (e - n) - a,
y: 0,
m: 0,
d: 0,
H: 0,
M: 0,
S: 0,
q: 0
};
Math.abs(o.u) < 1e-6 && (o.u = 0);
(function(e) {
for (var t = 0; t != l.length; ++t) void 0 === e[l[t][0]] && (e[l[t][0]] = l[t][1]);
})(null != t ? t : t = []);
t.date1904 && (n += 1462);
if (o.u > .9999) {
o.u = 0;
if (86400 == ++a) {
o.T = a = 0;
++n;
++o.D;
}
}
if (60 === n) {
i = r ? [ 1317, 10, 29 ] : [ 1900, 2, 29 ];
s = 3;
} else if (0 === n) {
i = r ? [ 1317, 8, 29 ] : [ 1900, 1, 0 ];
s = 6;
} else {
n > 60 && --n;
var f = new Date(1900, 0, 1);
f.setDate(f.getDate() + n - 1);
i = [ f.getFullYear(), f.getMonth() + 1, f.getDate() ];
s = f.getDay();
n < 60 && (s = (s + 6) % 7);
r && (s = 0);
}
o.y = i[0];
o.m = i[1];
o.d = i[2];
o.S = a % 60;
a = Math.floor(a / 60);
o.M = a % 60;
a = Math.floor(a / 60);
o.H = a;
o.q = s;
return o;
}
e.parse_date_code = v;
function E(e, t, r, a) {
var s, i = "", o = 0, f = 0, l = r.y, u = 0;
switch (e) {
case 98:
l = r.y + 543;

case 121:
switch (t.length) {
case 1:
case 2:
s = l % 100;
u = 2;
break;

default:
s = l % 1e4;
u = 4;
}
break;

case 109:
switch (t.length) {
case 1:
case 2:
s = r.m;
u = t.length;
break;

case 3:
return h[r.m - 1][1];

case 5:
return h[r.m - 1][0];

default:
return h[r.m - 1][2];
}
break;

case 100:
switch (t.length) {
case 1:
case 2:
s = r.d;
u = t.length;
break;

case 3:
return c[r.q][0];

default:
return c[r.q][1];
}
break;

case 104:
switch (t.length) {
case 1:
case 2:
s = 1 + (r.H + 11) % 12;
u = t.length;
break;

default:
throw "bad hour format: " + t;
}
break;

case 72:
switch (t.length) {
case 1:
case 2:
s = r.H;
u = t.length;
break;

default:
throw "bad hour format: " + t;
}
break;

case 77:
switch (t.length) {
case 1:
case 2:
s = r.M;
u = t.length;
break;

default:
throw "bad minute format: " + t;
}
break;

case 115:
if (0 === r.u) switch (t) {
case "s":
case "ss":
return n(r.S, t.length);
}
switch (t) {
case "s":
case "ss":
case ".0":
case ".00":
case ".000":
f = a >= 2 ? 3 === a ? 1e3 : 100 : 1 === a ? 10 : 1;
(o = Math.round(f * (r.S + r.u))) >= 60 * f && (o = 0);
if ("s" === t) return 0 === o ? "0" : "" + o / f;
i = n(o, 2 + a);
return "ss" === t ? i.substr(0, 2) : "." + i.substr(2, t.length - 1);

default:
throw "bad second format: " + t;
}

case 90:
switch (t) {
case "[h]":
case "[hh]":
s = 24 * r.D + r.H;
break;

case "[m]":
case "[mm]":
s = 60 * (24 * r.D + r.H) + r.M;
break;

case "[s]":
case "[ss]":
s = 60 * (60 * (24 * r.D + r.H) + r.M) + Math.round(r.S + r.u);
break;

default:
throw "bad abstime format: " + t;
}
u = 3 === t.length ? 1 : 2;
break;

case 101:
s = l;
u = 1;
}
return u > 0 ? n(s, u) : "";
}
function S(e) {
if (e.length <= 3) return e;
for (var t = e.length % 3, r = e.substr(0, t); t != e.length; t += 3) r += (r.length > 0 ? "," : "") + e.substr(t, 3);
return r;
}
var B = function() {
var e = /%/g;
var i = /# (\?+)( ?)\/( ?)(\d+)/;
var f = /^#*0*\.([0#]+)/, l = /\).*[0#]/, c = /\(###\) ###\\?-####/;
function h(e) {
for (var t, r = "", n = 0; n != e.length; ++n) switch (t = e.charCodeAt(n)) {
case 35:
break;

case 63:
r += " ";
break;

case 48:
r += "0";
break;

default:
r += String.fromCharCode(t);
}
return r;
}
function u(e, t) {
var r = Math.pow(10, t);
return "" + Math.round(e * r) / r;
}
function d(e, t) {
return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 0 : Math.round((e - Math.floor(e)) * Math.pow(10, t));
}
function m(g, b, v) {
if (40 === g.charCodeAt(0) && !b.match(l)) {
var E = b.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
return v >= 0 ? m("n", E, v) : "(" + m("n", E, -v) + ")";
}
if (44 === b.charCodeAt(b.length - 1)) return function(e, t, r) {
for (var n = t.length - 1; 44 === t.charCodeAt(n - 1); ) --n;
return B(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}(g, b, v);
if (-1 !== b.indexOf("%")) return function(t, n, a) {
var s = n.replace(e, ""), i = n.length - s.length;
return B(t, s, a * Math.pow(10, 2 * i)) + r("%", i);
}(g, b, v);
if (-1 !== b.indexOf("E")) return function e(t, r) {
var n, a = t.indexOf("E") - t.indexOf(".") - 1;
if (t.match(/^#+0.0E\+0$/)) {
if (0 == r) return "0.0E+0";
if (r < 0) return "-" + e(t, -r);
var s = t.indexOf(".");
-1 === s && (s = t.indexOf("E"));
var i = Math.floor(Math.log(r) * Math.LOG10E) % s;
i < 0 && (i += s);
if (-1 === (n = (r / Math.pow(10, i)).toPrecision(a + 1 + (s + i) % s)).indexOf("e")) {
var o = Math.floor(Math.log(r) * Math.LOG10E);
-1 === n.indexOf(".") ? n = n.charAt(0) + "." + n.substr(1) + "E+" + (o - n.length + i) : n += "E+" + (o - i);
for (;"0." === n.substr(0, 2); ) n = (n = n.charAt(0) + n.substr(2, s) + "." + n.substr(2 + s)).replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
n = n.replace(/\+-/, "-");
}
n = n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(e, t, r, n) {
return t + r + n.substr(0, (s + i) % s) + "." + n.substr(i) + "E";
});
} else n = r.toExponential(a);
t.match(/E\+00$/) && n.match(/e[+-]\d$/) && (n = n.substr(0, n.length - 1) + "0" + n.charAt(n.length - 1));
t.match(/E\-/) && n.match(/e\+/) && (n = n.replace(/e\+/, "e"));
return n.replace("e", "E");
}(b, v);
if (36 === b.charCodeAt(0)) return "$" + m(g, b.substr(" " == b.charAt(1) ? 2 : 1), v);
var w, C, _, T, k = Math.abs(v), x = v < 0 ? "-" : "";
if (b.match(/^00+$/)) return x + o(k, b.length);
if (b.match(/^[#?]+$/)) {
"0" === (w = o(v, 0)) && (w = "");
return w.length > b.length ? w : h(b.substr(0, b.length - w.length)) + w;
}
if (C = b.match(i)) return function(e, t, s) {
var i = parseInt(e[4], 10), o = Math.round(t * i), f = Math.floor(o / i), l = o - f * i, c = i;
return s + (0 === f ? "" : "" + f) + " " + (0 === l ? r(" ", e[1].length + 1 + e[4].length) : a(l, e[1].length) + e[2] + "/" + e[3] + n(c, e[4].length));
}(C, k, x);
if (b.match(/^#+0+$/)) return x + o(k, b.length - b.indexOf("0"));
if (C = b.match(f)) {
w = u(v, C[1].length).replace(/^([^\.]+)$/, "$1." + h(C[1])).replace(/\.$/, "." + h(C[1])).replace(/\.(\d*)$/, function(e, t) {
return "." + t + r("0", h(C[1]).length - t.length);
});
return -1 !== b.indexOf("0.") ? w : w.replace(/^0\./, ".");
}
b = b.replace(/^#+([0.])/, "$1");
if (C = b.match(/^(0*)\.(#*)$/)) return x + u(k, C[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, C[1].length ? "0." : ".");
if (C = b.match(/^#{1,3},##0(\.?)$/)) return x + S(o(k, 0));
if (C = b.match(/^#,##0\.([#0]*0)$/)) return v < 0 ? "-" + m(g, b, -v) : S("" + (Math.floor(v) + function(e, t) {
return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}(v, C[1].length))) + "." + n(d(v, C[1].length), C[1].length);
if (C = b.match(/^#,#*,#0/)) return m(g, b.replace(/^#,#*,/, ""), v);
if (C = b.match(/^([0#]+)(\\?-([0#]+))+$/)) {
w = t(m(g, b.replace(/[\\-]/g, ""), v));
_ = 0;
return t(t(b.replace(/\\/g, "")).replace(/[0#]/g, function(e) {
return _ < w.length ? w.charAt(_++) : "0" === e ? "0" : "";
}));
}
if (b.match(c)) return "(" + (w = m(g, "##########", v)).substr(0, 3) + ") " + w.substr(3, 3) + "-" + w.substr(6);
var A = "";
if (C = b.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
_ = Math.min(C[4].length, 7);
T = p(k, Math.pow(10, _) - 1, !1);
w = "" + x;
" " == (A = B("n", C[1], T[1])).charAt(A.length - 1) && (A = A.substr(0, A.length - 1) + "0");
w += A + C[2] + "/" + C[3];
(A = s(T[2], _)).length < C[4].length && (A = h(C[4].substr(C[4].length - A.length)) + A);
return w += A;
}
if (C = b.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
_ = Math.min(Math.max(C[1].length, C[4].length), 7);
return x + ((T = p(k, Math.pow(10, _) - 1, !0))[0] || (T[1] ? "" : "0")) + " " + (T[1] ? a(T[1], _) + C[2] + "/" + C[3] + s(T[2], _) : r(" ", 2 * _ + 1 + C[2].length + C[3].length));
}
if (C = b.match(/^[#0?]+$/)) {
w = o(v, 0);
return b.length <= w.length ? w : h(b.substr(0, b.length - w.length)) + w;
}
if (C = b.match(/^([#0?]+)\.([#0]+)$/)) {
w = "" + v.toFixed(Math.min(C[2].length, 10)).replace(/([^0])0+$/, "$1");
_ = w.indexOf(".");
var I = b.indexOf(".") - _, y = b.length - w.length - I;
return h(b.substr(0, I) + w + b.substr(b.length - y));
}
if (C = b.match(/^00,000\.([#0]*0)$/)) {
_ = d(v, C[1].length);
return v < 0 ? "-" + m(g, b, -v) : S(function(e) {
return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? 0 | e : e - 1 | 0) : "" + Math.floor(e);
}(v)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(e) {
return "00," + (e.length < 3 ? n(0, 3 - e.length) : "") + e;
}) + "." + n(_, C[1].length);
}
switch (b) {
case "###,##0.00":
return m(g, "#,##0.00", v);

case "###,###":
case "##,###":
case "#,###":
var R = S(o(k, 0));
return "0" !== R ? x + R : "";

case "###,###.00":
return m(g, "###,##0.00", v).replace(/^0\./, ".");

case "#,###.00":
return m(g, "#,##0.00", v).replace(/^0\./, ".");
}
throw new Error("unsupported format |" + b + "|");
}
function g(o, u, d) {
if (40 === o.charCodeAt(0) && !u.match(l)) {
var m = u.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
return d >= 0 ? g("n", m, d) : "(" + g("n", m, -d) + ")";
}
if (44 === u.charCodeAt(u.length - 1)) return function(e, t, r) {
for (var n = t.length - 1; 44 === t.charCodeAt(n - 1); ) --n;
return B(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}(o, u, d);
if (-1 !== u.indexOf("%")) return function(t, n, a) {
var s = n.replace(e, ""), i = n.length - s.length;
return B(t, s, a * Math.pow(10, 2 * i)) + r("%", i);
}(o, u, d);
if (-1 !== u.indexOf("E")) return function e(t, r) {
var n, a = t.indexOf("E") - t.indexOf(".") - 1;
if (t.match(/^#+0.0E\+0$/)) {
if (0 == r) return "0.0E+0";
if (r < 0) return "-" + e(t, -r);
var s = t.indexOf(".");
-1 === s && (s = t.indexOf("E"));
var i = Math.floor(Math.log(r) * Math.LOG10E) % s;
i < 0 && (i += s);
if (!(n = (r / Math.pow(10, i)).toPrecision(a + 1 + (s + i) % s)).match(/[Ee]/)) {
var o = Math.floor(Math.log(r) * Math.LOG10E);
-1 === n.indexOf(".") ? n = n.charAt(0) + "." + n.substr(1) + "E+" + (o - n.length + i) : n += "E+" + (o - i);
n = n.replace(/\+-/, "-");
}
n = n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(e, t, r, n) {
return t + r + n.substr(0, (s + i) % s) + "." + n.substr(i) + "E";
});
} else n = r.toExponential(a);
t.match(/E\+00$/) && n.match(/e[+-]\d$/) && (n = n.substr(0, n.length - 1) + "0" + n.charAt(n.length - 1));
t.match(/E\-/) && n.match(/e\+/) && (n = n.replace(/e\+/, "e"));
return n.replace("e", "E");
}(u, d);
if (36 === u.charCodeAt(0)) return "$" + g(o, u.substr(" " == u.charAt(1) ? 2 : 1), d);
var b, v, E, w, C = Math.abs(d), _ = d < 0 ? "-" : "";
if (u.match(/^00+$/)) return _ + n(C, u.length);
if (u.match(/^[#?]+$/)) {
b = "" + d;
0 === d && (b = "");
return b.length > u.length ? b : h(u.substr(0, u.length - b.length)) + b;
}
if (v = u.match(i)) return function(e, t, n) {
return n + (0 === t ? "" : "" + t) + r(" ", e[1].length + 2 + e[4].length);
}(v, C, _);
if (u.match(/^#+0+$/)) return _ + n(C, u.length - u.indexOf("0"));
if (v = u.match(f)) {
b = (b = ("" + d).replace(/^([^\.]+)$/, "$1." + h(v[1])).replace(/\.$/, "." + h(v[1]))).replace(/\.(\d*)$/, function(e, t) {
return "." + t + r("0", h(v[1]).length - t.length);
});
return -1 !== u.indexOf("0.") ? b : b.replace(/^0\./, ".");
}
u = u.replace(/^#+([0.])/, "$1");
if (v = u.match(/^(0*)\.(#*)$/)) return _ + ("" + C).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, v[1].length ? "0." : ".");
if (v = u.match(/^#{1,3},##0(\.?)$/)) return _ + S("" + C);
if (v = u.match(/^#,##0\.([#0]*0)$/)) return d < 0 ? "-" + g(o, u, -d) : S("" + d) + "." + r("0", v[1].length);
if (v = u.match(/^#,#*,#0/)) return g(o, u.replace(/^#,#*,/, ""), d);
if (v = u.match(/^([0#]+)(\\?-([0#]+))+$/)) {
b = t(g(o, u.replace(/[\\-]/g, ""), d));
E = 0;
return t(t(u.replace(/\\/g, "")).replace(/[0#]/g, function(e) {
return E < b.length ? b.charAt(E++) : "0" === e ? "0" : "";
}));
}
if (u.match(c)) return "(" + (b = g(o, "##########", d)).substr(0, 3) + ") " + b.substr(3, 3) + "-" + b.substr(6);
var T = "";
if (v = u.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
E = Math.min(v[4].length, 7);
w = p(C, Math.pow(10, E) - 1, !1);
b = "" + _;
" " == (T = B("n", v[1], w[1])).charAt(T.length - 1) && (T = T.substr(0, T.length - 1) + "0");
b += T + v[2] + "/" + v[3];
(T = s(w[2], E)).length < v[4].length && (T = h(v[4].substr(v[4].length - T.length)) + T);
return b += T;
}
if (v = u.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
E = Math.min(Math.max(v[1].length, v[4].length), 7);
return _ + ((w = p(C, Math.pow(10, E) - 1, !0))[0] || (w[1] ? "" : "0")) + " " + (w[1] ? a(w[1], E) + v[2] + "/" + v[3] + s(w[2], E) : r(" ", 2 * E + 1 + v[2].length + v[3].length));
}
if (v = u.match(/^[#0?]+$/)) {
b = "" + d;
return u.length <= b.length ? b : h(u.substr(0, u.length - b.length)) + b;
}
if (v = u.match(/^([#0]+)\.([#0]+)$/)) {
b = "" + d.toFixed(Math.min(v[2].length, 10)).replace(/([^0])0+$/, "$1");
E = b.indexOf(".");
var k = u.indexOf(".") - E, x = u.length - b.length - k;
return h(u.substr(0, k) + b + u.substr(u.length - x));
}
if (v = u.match(/^00,000\.([#0]*0)$/)) return d < 0 ? "-" + g(o, u, -d) : S("" + d).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(e) {
return "00," + (e.length < 3 ? n(0, 3 - e.length) : "") + e;
}) + "." + n(0, v[1].length);
switch (u) {
case "###,###":
case "##,###":
case "#,###":
var A = S("" + C);
return "0" !== A ? _ + A : "";

default:
if (u.match(/\.[0#?]*$/)) return g(o, u.slice(0, u.lastIndexOf(".")), d) + h(u.slice(u.lastIndexOf(".")));
}
throw new Error("unsupported format |" + u + "|");
}
return function(e, t, r) {
return (0 | r) === r ? g(e, t, r) : m(e, t, r);
};
}();
function w(e) {
for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n) switch (e.charCodeAt(n)) {
case 34:
r = !r;
break;

case 95:
case 42:
case 92:
++n;
break;

case 59:
t[t.length] = e.substr(a, n - a);
a = n + 1;
}
t[t.length] = e.substr(a);
if (!0 === r) throw new Error("Format |" + e + "| unterminated string ");
return t;
}
e._split = w;
var C = /\[[HhMmSs]*\]/;
function _(e) {
for (var t = 0, r = "", n = ""; t < e.length; ) switch (r = e.charAt(t)) {
case "G":
f(e, t) && (t += 6);
t++;
break;

case '"':
for (;34 !== e.charCodeAt(++t) && t < e.length; ) ++t;
++t;
break;

case "\\":
case "_":
t += 2;
break;

case "@":
++t;
break;

case "B":
case "b":
if ("1" === e.charAt(t + 1) || "2" === e.charAt(t + 1)) return !0;

case "M":
case "D":
case "Y":
case "H":
case "S":
case "E":
case "m":
case "d":
case "y":
case "h":
case "s":
case "e":
case "g":
return !0;

case "A":
case "a":
if ("A/P" === e.substr(t, 3).toUpperCase()) return !0;
if ("AM/PM" === e.substr(t, 5).toUpperCase()) return !0;
++t;
break;

case "[":
n = r;
for (;"]" !== e.charAt(t++) && t < e.length; ) n += e.charAt(t);
if (n.match(C)) return !0;
break;

case ".":
case "0":
case "#":
for (;t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || "\\" == r && "-" == e.charAt(t + 1) && "0#".indexOf(e.charAt(t + 2)) > -1); ) ;
break;

case "?":
for (;e.charAt(++t) === r; ) ;
break;

case "*":
++t;
" " != e.charAt(t) && "*" != e.charAt(t) || ++t;
break;

case "(":
case ")":
++t;
break;

case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
for (;t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; ) ;
break;

case " ":
default:
++t;
}
return !1;
}
e.is_date = _;
function T(e, t, r, n) {
for (var a, s, i, o, l = [], c = "", h = 0, u = "", d = "t", p = "H"; h < e.length; ) switch (u = e.charAt(h)) {
case "G":
if (!f(e, h)) throw new Error("unrecognized character " + u + " in " + e);
l[l.length] = {
t: "G",
v: "General"
};
h += 7;
break;

case '"':
for (c = ""; 34 !== (o = e.charCodeAt(++h)) && h < e.length; ) c += String.fromCharCode(o);
l[l.length] = {
t: "t",
v: c
};
++h;
break;

case "\\":
var m = e.charAt(++h), g = "(" === m || ")" === m ? m : "t";
l[l.length] = {
t: g,
v: m
};
++h;
break;

case "_":
l[l.length] = {
t: "t",
v: " "
};
h += 2;
break;

case "@":
l[l.length] = {
t: "T",
v: t
};
++h;
break;

case "B":
case "b":
if ("1" === e.charAt(h + 1) || "2" === e.charAt(h + 1)) {
if (null == s && null == (s = v(t, r, "2" === e.charAt(h + 1)))) return "";
l[l.length] = {
t: "X",
v: e.substr(h, 2)
};
d = u;
h += 2;
break;
}

case "M":
case "D":
case "Y":
case "H":
case "S":
case "E":
u = u.toLowerCase();

case "m":
case "d":
case "y":
case "h":
case "s":
case "e":
case "g":
if (t < 0) return "";
if (null == s && null == (s = v(t, r))) return "";
c = u;
for (;++h < e.length && e.charAt(h).toLowerCase() === u; ) c += u;
"m" === u && "h" === d.toLowerCase() && (u = "M");
"h" === u && (u = p);
l[l.length] = {
t: u,
v: c
};
d = u;
break;

case "A":
case "a":
a = {
t: u,
v: u
};
null == s && (s = v(t, r));
if ("A/P" === e.substr(h, 3).toUpperCase()) {
null != s && (a.v = s.H >= 12 ? "P" : "A");
a.t = "T";
p = "h";
h += 3;
} else if ("AM/PM" === e.substr(h, 5).toUpperCase()) {
null != s && (a.v = s.H >= 12 ? "PM" : "AM");
a.t = "T";
h += 5;
p = "h";
} else {
a.t = "t";
++h;
}
if (null == s && "T" === a.t) return "";
l[l.length] = a;
d = u;
break;

case "[":
c = u;
for (;"]" !== e.charAt(h++) && h < e.length; ) c += e.charAt(h);
if ("]" !== c.slice(-1)) throw 'unterminated "[" block: |' + c + "|";
if (c.match(C)) {
if (null == s && null == (s = v(t, r))) return "";
l[l.length] = {
t: "Z",
v: c.toLowerCase()
};
d = c.charAt(1);
} else if (c.indexOf("$") > -1) {
c = (c.match(/\$([^-\[\]]*)/) || [])[1] || "$";
_(e) || (l[l.length] = {
t: "t",
v: c
});
}
break;

case ".":
if (null != s) {
c = u;
for (;"0" === (u = e.charAt(++h)); ) c += u;
l[l.length] = {
t: "s",
v: c
};
break;
}

case "0":
case "#":
c = u;
for (;++h < e.length && "0#?.,E+-%".indexOf(u = e.charAt(h)) > -1 || "\\" == u && "-" == e.charAt(h + 1) && h < e.length - 2 && "0#".indexOf(e.charAt(h + 2)) > -1; ) c += u;
l[l.length] = {
t: "n",
v: c
};
break;

case "?":
c = u;
for (;e.charAt(++h) === u; ) c += u;
a = {
t: u,
v: c
};
l[l.length] = a;
d = u;
break;

case "*":
++h;
" " != e.charAt(h) && "*" != e.charAt(h) || ++h;
break;

case "(":
case ")":
l[l.length] = {
t: 1 === n ? "t" : u,
v: u
};
++h;
break;

case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
c = u;
for (;h < e.length && "0123456789".indexOf(e.charAt(++h)) > -1; ) c += e.charAt(h);
l[l.length] = {
t: "D",
v: c
};
break;

case " ":
l[l.length] = {
t: u,
v: u
};
++h;
break;

default:
if (-1 === ",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(u)) throw new Error("unrecognized character " + u + " in " + e);
l[l.length] = {
t: "t",
v: u
};
++h;
}
var S, w = 0, T = 0;
for (h = l.length - 1, d = "t"; h >= 0; --h) switch (l[h].t) {
case "h":
case "H":
l[h].t = p;
d = "h";
w < 1 && (w = 1);
break;

case "s":
(S = l[h].v.match(/\.0+$/)) && (T = Math.max(T, S[0].length - 1));
w < 3 && (w = 3);

case "d":
case "y":
case "M":
case "e":
d = l[h].t;
break;

case "m":
if ("s" === d) {
l[h].t = "M";
w < 2 && (w = 2);
}
break;

case "X":
break;

case "Z":
w < 1 && l[h].v.match(/[Hh]/) && (w = 1);
w < 2 && l[h].v.match(/[Mm]/) && (w = 2);
w < 3 && l[h].v.match(/[Ss]/) && (w = 3);
}
switch (w) {
case 0:
break;

case 1:
if (s.u >= .5) {
s.u = 0;
++s.S;
}
if (s.S >= 60) {
s.S = 0;
++s.M;
}
if (s.M >= 60) {
s.M = 0;
++s.H;
}
break;

case 2:
if (s.u >= .5) {
s.u = 0;
++s.S;
}
if (s.S >= 60) {
s.S = 0;
++s.M;
}
}
var k, x = "";
for (h = 0; h < l.length; ++h) switch (l[h].t) {
case "t":
case "T":
case " ":
case "D":
break;

case "X":
l[h].v = "";
l[h].t = ";";
break;

case "d":
case "m":
case "y":
case "h":
case "H":
case "M":
case "s":
case "e":
case "b":
case "Z":
l[h].v = E(l[h].t.charCodeAt(0), l[h].v, s, T);
l[h].t = "t";
break;

case "n":
case "(":
case "?":
k = h + 1;
for (;null != l[k] && ("?" === (u = l[k].t) || "D" === u || (" " === u || "t" === u) && null != l[k + 1] && ("?" === l[k + 1].t || "t" === l[k + 1].t && "/" === l[k + 1].v) || "(" === l[h].t && (" " === u || "n" === u || ")" === u) || "t" === u && ("/" === l[k].v || " " === l[k].v && null != l[k + 1] && "?" == l[k + 1].t)); ) {
l[h].v += l[k].v;
l[k] = {
v: "",
t: ";"
};
++k;
}
x += l[h].v;
h = k - 1;
break;

case "G":
l[h].t = "t";
l[h].v = b(t);
}
var A, I, y = "";
if (x.length > 0) {
if (40 == x.charCodeAt(0)) {
A = t < 0 && 45 === x.charCodeAt(0) ? -t : t;
I = B("(", x, A);
} else {
I = B("n", x, A = t < 0 && n > 1 ? -t : t);
if (A < 0 && l[0] && "t" == l[0].t) {
I = I.substr(1);
l[0].v = "-" + l[0].v;
}
}
k = I.length - 1;
var R = l.length;
for (h = 0; h < l.length; ++h) if (null != l[h] && "t" != l[h].t && l[h].v.indexOf(".") > -1) {
R = h;
break;
}
var D = l.length;
if (R === l.length && -1 === I.indexOf("E")) {
for (h = l.length - 1; h >= 0; --h) if (null != l[h] && -1 !== "n?(".indexOf(l[h].t)) {
if (k >= l[h].v.length - 1) {
k -= l[h].v.length;
l[h].v = I.substr(k + 1, l[h].v.length);
} else if (k < 0) l[h].v = ""; else {
l[h].v = I.substr(0, k + 1);
k = -1;
}
l[h].t = "t";
D = h;
}
k >= 0 && D < l.length && (l[D].v = I.substr(0, k + 1) + l[D].v);
} else if (R !== l.length && -1 === I.indexOf("E")) {
k = I.indexOf(".") - 1;
for (h = R; h >= 0; --h) if (null != l[h] && -1 !== "n?(".indexOf(l[h].t)) {
i = l[h].v.indexOf(".") > -1 && h === R ? l[h].v.indexOf(".") - 1 : l[h].v.length - 1;
y = l[h].v.substr(i + 1);
for (;i >= 0; --i) k >= 0 && ("0" === l[h].v.charAt(i) || "#" === l[h].v.charAt(i)) && (y = I.charAt(k--) + y);
l[h].v = y;
l[h].t = "t";
D = h;
}
k >= 0 && D < l.length && (l[D].v = I.substr(0, k + 1) + l[D].v);
k = I.indexOf(".") + 1;
for (h = R; h < l.length; ++h) if (null != l[h] && (-1 !== "n?(".indexOf(l[h].t) || h === R)) {
i = l[h].v.indexOf(".") > -1 && h === R ? l[h].v.indexOf(".") + 1 : 0;
y = l[h].v.substr(0, i);
for (;i < l[h].v.length; ++i) k < I.length && (y += I.charAt(k++));
l[h].v = y;
l[h].t = "t";
D = h;
}
}
}
for (h = 0; h < l.length; ++h) if (null != l[h] && "n(?".indexOf(l[h].t) > -1) {
A = n > 1 && t < 0 && h > 0 && "-" === l[h - 1].v ? -t : t;
l[h].v = B(l[h].t, l[h].v, A);
l[h].t = "t";
}
var O = "";
for (h = 0; h !== l.length; ++h) null != l[h] && (O += l[h].v);
return O;
}
e._eval = T;
var k = /\[[=<>]/, x = /\[([=<>]*)(-?\d+\.?\d*)\]/;
function A(e, t) {
if (null == t) return !1;
var r = parseFloat(t[2]);
switch (t[1]) {
case "=":
if (e == r) return !0;
break;

case ">":
if (e > r) return !0;
break;

case "<":
if (e < r) return !0;
break;

case "<>":
if (e != r) return !0;
break;

case ">=":
if (e >= r) return !0;
break;

case "<=":
if (e <= r) return !0;
}
return !1;
}
e._table = d;
e.load = function(e, t) {
d[t] = e;
};
e.format = function(e, t, r) {
null == r && (r = {});
var n = "";
switch (typeof e) {
case "string":
n = "m/d/yy" == e && r.dateNF ? r.dateNF : e;
break;

case "number":
n = 14 == e && r.dateNF ? r.dateNF : (null != r.table ? r.table : d)[e];
}
if (f(n, 0)) return b(t);
var a = function(e, t) {
var r = w(e), n = r.length, a = r[n - 1].indexOf("@");
n < 4 && a > -1 && --n;
if (r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|");
if ("number" != typeof t) return [ 4, 4 === r.length || a > -1 ? r[r.length - 1] : "@" ];
switch (r.length) {
case 1:
r = a > -1 ? [ "General", "General", "General", r[0] ] : [ r[0], r[0], r[0], "@" ];
break;

case 2:
r = a > -1 ? [ r[0], r[0], r[0], r[1] ] : [ r[0], r[1], r[0], "@" ];
break;

case 3:
r = a > -1 ? [ r[0], r[1], r[0], r[2] ] : [ r[0], r[1], r[2], "@" ];
}
var s = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
if (-1 === r[0].indexOf("[") && -1 === r[1].indexOf("[")) return [ n, s ];
if (null != r[0].match(k) || null != r[1].match(k)) {
var i = r[0].match(x), o = r[1].match(x);
return A(t, i) ? [ n, r[0] ] : A(t, o) ? [ n, r[1] ] : [ n, r[null != i && null != o ? 2 : 1] ];
}
return [ n, s ];
}(n, t);
if (f(a[1])) return b(t);
if (!0 === t) t = "TRUE"; else if (!1 === t) t = "FALSE"; else if ("" === t || null == t) return "";
return T(a[1], t, r, a[0]);
};
e.get_table = function() {
return d;
};
e.load_table = function(t) {
for (var r = 0; 392 != r; ++r) void 0 !== t[r] && e.load(t[r], r);
};
e.init_table = u;
};
g(m);
var b = {
"General Number": "General",
"General Date": m._table[22],
"Long Date": "dddd, mmmm dd, yyyy",
"Medium Date": m._table[15],
"Short Date": m._table[14],
"Long Time": m._table[19],
"Medium Time": m._table[18],
"Short Time": m._table[20],
Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
Fixed: m._table[2],
Standard: m._table[4],
Percent: m._table[10],
Scientific: m._table[11],
"Yes/No": '"Yes";"Yes";"No";@',
"True/False": '"True";"True";"False";@',
"On/Off": '"Yes";"Yes";"No";@'
}, v = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
var E = function() {
var e, t = {
version: "0.11.1"
};
function r(e) {
var t, r, f, c, h, u, m = 512, g = [], b = e.slice(0, 512);
tt(b, 0);
switch (t = function(e) {
e.chk(o, "Header Signature: ");
e.chk(l, "CLSID: ");
var t = e.read_shift(2, "u");
return [ e.read_shift(2, "u"), t ];
}(b)[0]) {
case 3:
m = 512;
break;

case 4:
m = 4096;
break;

default:
throw new Error("Major Version: Expected 3 or 4 saw " + t);
}
512 !== m && tt(b = e.slice(0, m), 28);
var v = e.slice(0, m);
(function(e, t) {
var r = 9;
e.l += 2;
switch (r = e.read_shift(2)) {
case 9:
if (3 != t) throw new Error("Sector Shift: Expected 9 saw " + r);
break;

case 12:
if (4 != t) throw new Error("Sector Shift: Expected 12 saw " + r);
break;

default:
throw new Error("Sector Shift: Expected 9 or 12 saw " + r);
}
e.chk("0600", "Mini Sector Shift: ");
e.chk("000000000000", "Reserved: ");
})(b, t);
var E = b.read_shift(4, "i");
if (3 === t && 0 !== E) throw new Error("# Directory Sectors: Expected 0 saw " + E);
b.l += 4;
c = b.read_shift(4, "i");
b.l += 4;
b.chk("00100000", "Mini Stream Cutoff Size: ");
h = b.read_shift(4, "i");
r = b.read_shift(4, "i");
u = b.read_shift(4, "i");
f = b.read_shift(4, "i");
for (var S, B = 0; B < 109 && !((S = b.read_shift(4, "i")) < 0); ++B) g[B] = S;
var w = function(e, t) {
for (var r = Math.ceil(e.length / t) - 1, n = new Array(r), a = 1; a < r; ++a) n[a - 1] = e.slice(a * t, (a + 1) * t);
n[r - 1] = e.slice(r * t);
return n;
}(e, m);
(function e(t, r, n, a, s) {
var o;
if (t === i) {
if (0 !== r) throw new Error("DIFAT chain shorter than expected");
} else if (-1 !== t) {
var f = n[t], l = (a >>> 2) - 1;
if (!f) return;
for (var c = 0; c < l && (o = Ke(f, 4 * c)) !== i; ++c) s.push(o);
e(Ke(f, a - 4), r - 1, n, a, s);
}
})(u, f, w, m, g);
var C = function(e, t, r, n) {
var a, s, i, o, f, l, c = e.length, h = new Array(c), u = new Array(c), d = n - 1;
for (i = 0; i < c; ++i) {
a = [];
(f = i + t) >= c && (f -= c);
if (!0 !== u[f]) {
s = [];
for (o = f; o >= 0; ) {
u[o] = !0;
a[a.length] = o;
s.push(e[o]);
var p = r[Math.floor(4 * o / n)];
if (n < 4 + (l = 4 * o & d)) throw new Error("FAT boundary crossed: " + o + " 4 " + n);
if (!e[p]) break;
o = Ke(e[p], l);
}
h[f] = {
nodes: a,
data: we([ s ])
};
}
}
return h;
}(w, c, g, m);
C[c].name = "!Directory";
r > 0 && h !== i && (C[h].name = "!MiniFAT");
C[g[0]].name = "!FAT";
C.fat_addrs = g;
C.ssz = m;
var _ = {}, T = [], k = [], x = [], A = {};
(function(e, t, r, o, f, l, c) {
for (var h, u, d, p, m, g = 0, b = o.length ? 2 : 0, v = t[e].data, E = 0, S = 0; E < v.length; E += 128) {
tt(h = v.slice(E, E + 128), 64);
if (0 !== (S = h.read_shift(2))) {
u = _e(h, 0, S - b);
o.push(u);
d = {
name: u,
type: h.read_shift(1),
color: h.read_shift(1),
L: h.read_shift(4, "i"),
R: h.read_shift(4, "i"),
C: h.read_shift(4, "i"),
clsid: h.read_shift(16),
state: h.read_shift(4, "i")
};
if (0 !== (p = h.read_shift(2) + h.read_shift(2) + h.read_shift(2) + h.read_shift(2))) {
d.ctime = p;
d.ct = a(h, h.l - 8);
}
if (0 !== (m = h.read_shift(2) + h.read_shift(2) + h.read_shift(2) + h.read_shift(2))) {
d.mtime = m;
d.mt = a(h, h.l - 8);
}
d.start = h.read_shift(4, "i");
d.size = h.read_shift(4, "i");
if (5 === d.type) {
g = d.start;
f > 0 && g !== i && (t[g].name = "!StreamData");
} else if (d.size >= 4096) {
d.storage = "fat";
void 0 === t[d.start] && (t[d.start] = n(r, d.start, t.fat_addrs, t.ssz));
t[d.start].name = d.name;
d.content = t[d.start].data.slice(0, d.size);
tt(d.content, 0);
} else {
d.storage = "minifat";
if (g !== i && d.start !== i) {
d.content = t[g].data.slice(d.start * s, d.start * s + d.size);
tt(d.content, 0);
}
}
l[u] = d;
c.push(d);
}
}
})(c, C, w, T, r, _, k);
(function(e, t, r, n) {
for (var a = 0, s = 0, i = 0, o = 0, f = 0, l = n.length, c = new Array(l), h = new Array(l); a < l; ++a) {
c[a] = h[a] = a;
r[a] = n[a];
}
for (;f < h.length; ++f) {
a = h[f];
s = e[a].L;
i = e[a].R;
o = e[a].C;
if (c[a] === a) {
-1 !== s && c[s] !== s && (c[a] = c[s]);
-1 !== i && c[i] !== i && (c[a] = c[i]);
}
-1 !== o && (c[o] = a);
if (-1 !== s) {
c[s] = c[a];
h.push(s);
}
if (-1 !== i) {
c[i] = c[a];
h.push(i);
}
}
for (a = 1; a !== l; ++a) c[a] === a && (-1 !== i && c[i] !== i ? c[a] = c[i] : -1 !== s && c[s] !== s && (c[a] = c[s]));
for (a = 1; a < l; ++a) if (0 !== e[a].type) {
if (0 === (f = c[a])) r[a] = r[0] + "/" + r[a]; else for (;0 !== f; ) {
r[a] = r[f] + "/" + r[a];
f = c[f];
}
c[a] = 0;
}
r[0] += "/";
for (a = 1; a < l; ++a) {
2 !== e[a].type && (r[a] += "/");
t[r[a]] = e[a];
}
})(k, A, x, T);
var I = T.shift();
T.root = I;
return {
raw: {
header: v,
sectors: w
},
FileIndex: k,
FullPaths: x,
FullPathDir: A,
find: function(e, t, r, n, a) {
var s, i = new Array(e.length), o = new Array(t.length);
for (s = 0; s < e.length; ++s) i[s] = e[s].toUpperCase().replace(d, "").replace(p, "!");
for (s = 0; s < t.length; ++s) o[s] = t[s].toUpperCase().replace(d, "").replace(p, "!");
return function(e) {
var s;
if (47 === e.charCodeAt(0)) {
s = !0;
e = a + e;
} else s = -1 !== e.indexOf("/");
var f = e.toUpperCase().replace(d, "").replace(p, "!"), l = !0 === s ? i.indexOf(f) : o.indexOf(f);
return -1 === l ? null : !0 === s ? r[l] : n[t[l]];
};
}(x, T, k, _, I)
};
}
function n(e, t, r, n, a) {
var s, i, o = e.length;
a || (a = new Array(o));
var f, l, c = n - 1;
s = [];
i = [];
for (f = t; f >= 0; ) {
a[f] = !0;
s[s.length] = f;
i.push(e[f]);
var h = r[Math.floor(4 * f / n)];
if (n < 4 + (l = 4 * f & c)) throw new Error("FAT boundary crossed: " + f + " 4 " + n);
if (!e[h]) break;
f = Ke(e[h], l);
}
return {
nodes: s,
data: we([ i ])
};
}
function a(e, t) {
return new Date(1e3 * (je(e, t + 4) / 1e7 * Math.pow(2, 32) + je(e, t) / 1e7 - 11644473600));
}
var s = 64, i = -2, o = "d0cf11e0a1b11ae1", l = "00000000000000000000000000000000", c = {
MAXREGSECT: -6,
DIFSECT: -4,
FATSECT: -3,
ENDOFCHAIN: i,
FREESECT: -1,
HEADER_SIGNATURE: o,
HEADER_MINOR_VERSION: "3e00",
MAXREGSID: -6,
NOSTREAM: -1,
HEADER_CLSID: l,
EntryTypes: [ "unknown", "storage", "stream", "lockbytes", "property", "root" ]
};
t.read = function(t, n) {
switch (void 0 !== n && void 0 !== n.type ? n.type : "base64") {
case "file":
return function(t, n) {
void 0 === e && (e = require("fs"));
return r(e.readFileSync(t));
}(t);

case "base64":
return r(h(f.decode(t)));

case "binary":
return r(h(t));
}
return r(t);
};
t.parse = r;
t.utils = {
ReadShift: $e,
CheckField: et,
prep_blob: tt,
bconcat: u,
consts: c
};
return t;
}();
0;
function S(e) {
return void 0 !== e && null !== e;
}
function B(e) {
return Object.keys(e);
}
function w(e) {
for (var t = [], r = B(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n];
return t;
}
function C(e) {
for (var t = [], r = B(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = parseInt(r[n], 10);
return t;
}
var _ = new Date(1899, 11, 30, 0, 0, 0), T = _.getTime() + 6e4 * (new Date().getTimezoneOffset() - _.getTimezoneOffset());
function k(e, t) {
var r = e.getTime();
t && (r += 1263168e5);
return (r - T) / 864e5;
}
function x(e) {
var t = new Date();
t.setTime(24 * e * 60 * 60 * 1e3 + T);
return t;
}
function A(e) {
var t = 0, r = 0, n = !1, a = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
if (!a) throw new Error("|" + e + "| is not an ISO8601 Duration");
for (var s = 1; s != a.length; ++s) if (a[s]) {
r = 1;
s > 3 && (n = !0);
switch (a[s].substr(a[s].length - 1)) {
case "Y":
throw new Error("Unsupported ISO Duration Field: " + a[s].substr(a[s].length - 1));

case "D":
r *= 24;

case "H":
r *= 60;

case "M":
if (!n) throw new Error("Unsupported ISO Duration Field: M");
r *= 60;
}
t += r * parseInt(a[s], 10);
}
return t;
}
var I = new Date("2017-02-19T19:06:09.000Z");
isNaN(I.getFullYear()) && (I = new Date("2/19/17"));
var y, R, D = 2017 == I.getFullYear();
function O(e, t) {
var r = new Date(e);
if (D) {
t > 0 ? r.setTime(r.getTime() + 60 * r.getTimezoneOffset() * 1e3) : t < 0 && r.setTime(r.getTime() - 60 * r.getTimezoneOffset() * 1e3);
return r;
}
if (e instanceof Date) return e;
if (1917 == I.getFullYear() && !isNaN(r.getFullYear())) {
var n = r.getFullYear();
if (e.indexOf("" + n) > -1) return r;
r.setFullYear(r.getFullYear() + 100);
return r;
}
var a = e.match(/\d+/g) || [ "2017", "2", "19", "0", "0", "0" ];
return new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
}
function F(e) {
for (var t = "", r = 0; r != e.length; ++r) t += String.fromCharCode(e[r]);
return t;
}
function P(e) {
if ("undefined" != typeof JSON && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
if ("object" != typeof e || null == e) return e;
var t = {};
for (var r in e) e.hasOwnProperty(r) && (t[r] = P(e[r]));
return t;
}
function N(e, t) {
for (var r = ""; r.length < t; ) r += e;
return r;
}
function M(e) {
var t = new Date(e), r = new Date(NaN), n = t.getYear(), a = t.getMonth(), s = t.getDate();
return isNaN(s) ? r : n < 0 || n > 8099 ? r : (a > 0 || s > 1) && 101 != n ? t : e.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/) ? t : e.match(/[a-zA-Z]/) ? r : t;
}
function L(e) {
return e ? e.data ? s(e.data) : e.asNodeBuffer && l ? s(e.asNodeBuffer().toString("binary")) : e.asBinary ? s(e.asBinary()) : e._data && e._data.getContent ? s(F(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function U(e) {
return e && ".bin" === e.name.slice(-4) ? function(e) {
if (!e) return null;
if (e.data) return a(e.data);
if (e.asNodeBuffer && l) return e.asNodeBuffer();
if (e._data && e._data.getContent) {
var t = e._data.getContent();
return "string" == typeof t ? function(e) {
for (var t = [], r = 0; r != e.length; ++r) t.push(e.charCodeAt(r));
return t;
}(t) : Array.prototype.slice.call(t);
}
return null;
}(e) : L(e);
}
function H(e, t) {
for (var r = B(e.files), n = t.toLowerCase(), a = n.replace(/\//g, "\\"), s = 0; s < r.length; ++s) {
var i = r[s].toLowerCase();
if (n == i || a == i) return e.files[r[s]];
}
return null;
}
function W(e, t) {
var r = H(e, t);
if (null == r) throw new Error("Cannot find file " + t + " in zip");
return r;
}
function V(e, t, r) {
if (!r) return U(W(e, t));
if (!t) return null;
try {
return V(e, t);
} catch (e) {
return null;
}
}
function z(e, t, r) {
if (!r) return L(W(e, t));
if (!t) return null;
try {
return z(e, t);
} catch (e) {
return null;
}
}
"undefined" != typeof JSZip && (R = JSZip);
if ("undefined" != typeof exports && "undefined" != typeof module && module.exports) {
"undefined" == typeof R && (R = require("./jszip.js"));
y = require("fs");
}
function X(e, t) {
var r = t.split("/");
"/" != t.slice(-1) && r.pop();
for (var n = e.split("/"); 0 !== n.length; ) {
var a = n.shift();
".." === a ? r.pop() : "." !== a && r.push(a);
}
return r.join("/");
}
var G = /([^"\s?>\/]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, j = /<[^>]*>/g, K = /<\w*:/, Y = /<(\/?)\w+:/;
function $(e, t) {
for (var r = {}, n = 0, a = 0; n !== e.length && (32 !== (a = e.charCodeAt(n)) && 10 !== a && 13 !== a); ++n) ;
t || (r[0] = e.substr(0, n));
if (n === e.length) return r;
var s = e.match(G), i = 0, o = "", f = 0, l = "", c = "", h = 1;
if (s) for (f = 0; f != s.length; ++f) {
c = s[f];
for (a = 0; a != c.length && 61 !== c.charCodeAt(a); ++a) ;
l = c.substr(0, a);
h = 34 == (n = c.charCodeAt(a + 1)) || 39 == n ? 1 : 0;
o = c.substring(a + 1 + h, c.length - h);
for (i = 0; i != l.length && 58 !== l.charCodeAt(i); ++i) ;
if (i === l.length) {
l.indexOf("_") > 0 && (l = l.substr(0, l.indexOf("_")));
r[l] = o;
} else {
var u = (5 === i && "xmlns" === l.substr(0, 5) ? "xmlns" : "") + l.substr(i + 1);
if (r[u] && "ext" == l.substr(i - 3, 3)) continue;
r[u] = o;
}
}
return r;
}
var Z = {
"&quot;": '"',
"&apos;": "'",
"&gt;": ">",
"&lt;": "<",
"&amp;": "&"
}, Q = w(Z), q = function() {
var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/g, t = /_x([\da-fA-F]{4})_/g;
return function(r) {
return (r + "").replace(e, function(e, t) {
return Z[e] || String.fromCharCode(parseInt(t, e.indexOf("x") > -1 ? 16 : 10)) || e;
}).replace(t, function(e, t) {
return String.fromCharCode(parseInt(t, 16));
});
};
}(), J = /[&<>'"]/g, ee = /[\u0000-\u0008\u000b-\u001f]/g;
function te(e, t) {
return (e + "").replace(J, function(e) {
return Q[e];
}).replace(ee, function(e) {
return "_x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + "_";
});
}
function re(e) {
return te(e).replace(/ /g, "_x0020_");
}
var ne = /[\u0000-\u001f]/g;
function ae(e) {
return (e + "").replace(J, function(e) {
return Q[e];
}).replace(ne, function(e) {
return "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";";
});
}
var se = function() {
var e = /&#(\d+);/g;
function t(e, t) {
return String.fromCharCode(parseInt(t, 10));
}
return function(r) {
return r.replace(e, t);
};
}(), ie = function(e) {
return e.replace(/(\r\n|[\r\n])/g, "&#10;");
};
function oe(e, t) {
switch (e) {
case 1:
case !0:
case "1":
case "true":
case "TRUE":
return !0;

default:
return !1;
}
}
var fe = function(e) {
for (var t = "", r = 0, n = 0, a = 0, s = 0, i = 0; r < e.length; ) if ((n = e.charCodeAt(r++)) < 128) t += String.fromCharCode(n); else {
a = e.charCodeAt(r++);
if (n > 191 && n < 224) t += String.fromCharCode((31 & n) << 6 | 63 & a); else {
s = e.charCodeAt(r++);
if (n < 240) t += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & s); else {
i = ((7 & n) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & e.charCodeAt(r++)) - 65536;
t += String.fromCharCode(55296 + (i >>> 10 & 1023));
t += String.fromCharCode(56320 + (1023 & i));
}
}
}
return t;
};
if (l) {
var le = function(e) {
var t, r, n, a = new Buffer(2 * e.length), s = 1, i = 0, o = 0;
for (r = 0; r < e.length; r += s) {
s = 1;
if ((n = e.charCodeAt(r)) < 128) t = n; else if (n < 224) {
t = 64 * (31 & n) + (63 & e.charCodeAt(r + 1));
s = 2;
} else if (n < 240) {
t = 4096 * (15 & n) + 64 * (63 & e.charCodeAt(r + 1)) + (63 & e.charCodeAt(r + 2));
s = 3;
} else {
s = 4;
t = 262144 * (7 & n) + 4096 * (63 & e.charCodeAt(r + 1)) + 64 * (63 & e.charCodeAt(r + 2)) + (63 & e.charCodeAt(r + 3));
o = 55296 + ((t -= 65536) >>> 10 & 1023);
t = 56320 + (1023 & t);
}
if (0 !== o) {
a[i++] = 255 & o;
a[i++] = o >>> 8;
o = 0;
}
a[i++] = t % 256;
a[i++] = t >>> 8;
}
return a.slice(0, i).toString("ucs2");
}, ce = "foo bar bazâð£";
fe(ce) == le(ce) && (fe = le);
var he = function(e) {
return Buffer(e, "binary").toString("utf8");
};
fe(ce) == he(ce) && (fe = he);
}
var ue = function() {
var e = {};
return function(t, r) {
var n = t + "|" + (r || "");
return e[n] ? e[n] : e[n] = new RegExp("<(?:\\w+:)?" + t + '(?: xml:space="preserve")?(?:[^>]*)>([^☃]*)</(?:\\w+:)?' + t + ">", r || "");
};
}(), de = function() {
var e = {};
return function(t) {
return void 0 !== e[t] ? e[t] : e[t] = new RegExp("<(?:vt:)?" + t + ">(.*?)</(?:vt:)?" + t + ">", "g");
};
}(), pe = /<\/?(?:vt:)?variant>/g, me = /<(?:vt:)([^>]*)>(.*)</;
function ge(e) {
var t = $(e), r = e.match(de(t.baseType)) || [];
if (r.length != t.size) throw new Error("unexpected vector length " + r.length + " != " + t.size);
var n = [];
r.forEach(function(e) {
var t = e.replace(pe, "").match(me);
n.push({
v: fe(t[2]),
t: t[1]
});
});
return n;
}
var be = /(^\s|\s$|\n)/;
function ve(e, t) {
return "<" + e + (t.match(be) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function Ee(e) {
return B(e).map(function(t) {
return " " + t + '="' + e[t] + '"';
}).join("");
}
function Se(e, t, r) {
return "<" + e + (S(r) ? Ee(r) : "") + (S(t) ? (t.match(be) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function Be(e, t) {
try {
return e.toISOString().replace(/\.\d*/, "");
} catch (e) {
if (t) throw e;
}
return "";
}
var we, Ce, _e, Te, ke, xe, Ae, Ie, ye, Re, De, Oe, Fe, Pe, Ne, Me, Le, Ue = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n', He = {
dc: "http://purl.org/dc/elements/1.1/",
dcterms: "http://purl.org/dc/terms/",
dcmitype: "http://purl.org/dc/dcmitype/",
mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
xsi: "http://www.w3.org/2001/XMLSchema-instance",
xsd: "http://www.w3.org/2001/XMLSchema",
main: [ "http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2" ]
}, We = {
o: "urn:schemas-microsoft-com:office:office",
x: "urn:schemas-microsoft-com:office:excel",
ss: "urn:schemas-microsoft-com:office:spreadsheet",
dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
mv: "http://macVmlSchemaUri",
v: "urn:schemas-microsoft-com:vml",
html: "http://www.w3.org/TR/REC-html40"
};
we = Ce = function(e) {
for (var t = [], r = 0; r < e[0].length; ++r) t.push.apply(t, e[0][r]);
return t;
};
_e = Te = function(e, t, r) {
for (var n = [], a = t; a < r; a += 2) n.push(String.fromCharCode(Xe(e, a)));
return n.join("");
};
ke = xe = function(e, t, r) {
return e.slice(t, t + r).map(function(e) {
return (e < 16 ? "0" : "") + e.toString(16);
}).join("");
};
Ae = function(e, t, r) {
for (var n = [], a = t; a < r; a++) n.push(String.fromCharCode(ze(e, a)));
return n.join("");
};
Ie = ye = function(e, t) {
var r = je(e, t);
return r > 0 ? Ae(e, t + 4, t + 4 + r - 1) : "";
};
Re = De = function(e, t) {
var r = 2 * je(e, t);
return r > 0 ? Ae(e, t + 4, t + 4 + r - 1) : "";
};
Oe = Fe = function(e, t) {
var r = je(e, t);
return r > 0 ? _e(e, t + 4, t + 4 + r) : "";
};
Pe = Ne = function(e, t) {
var r = je(e, t);
return r > 0 ? Ae(e, t + 4, t + 4 + r) : "";
};
Me = Le = function(e, t) {
return function(e, t) {
for (var r = 1 - 2 * (e[t + 7] >>> 7), n = ((127 & e[t + 7]) << 4) + (e[t + 6] >>> 4 & 15), a = 15 & e[t + 6], s = 5; s >= 0; --s) a = 256 * a + e[t + s];
if (2047 == n) return 0 == a ? Infinity * r : NaN;
if (0 == n) n = -1022; else {
n -= 1023;
a += Math.pow(2, 52);
}
return r * Math.pow(2, n - 52) * a;
}(e, t);
};
var Ve = function(e) {
return Array.isArray(e);
};
if (l) {
_e = function(e, t, r) {
return Buffer.isBuffer(e) ? e.toString("utf16le", t, r) : Te(e, t, r);
};
ke = function(e, t, r) {
return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : xe(e, t, r);
};
Ie = function(e, t) {
if (!Buffer.isBuffer(e)) return ye(e, t);
var r = e.readUInt32LE(t);
return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : "";
};
Re = function(e, t) {
if (!Buffer.isBuffer(e)) return De(e, t);
var r = 2 * e.readUInt32LE(t);
return e.toString("utf16le", t + 4, t + 4 + r - 1);
};
Oe = function(e, t) {
if (!Buffer.isBuffer(e)) return Fe(e, t);
var r = e.readUInt32LE(t);
return e.toString("utf16le", t + 4, t + 4 + r);
};
Pe = function(e, t) {
if (!Buffer.isBuffer(e)) return Ne(e, t);
var r = e.readUInt32LE(t);
return e.toString("utf8", t + 4, t + 4 + r);
};
Ae = function(e, t, r) {
return e.toString("utf8", t, r);
};
we = function(e) {
return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0]) : Ce(e);
};
u = function(e) {
return Buffer.isBuffer(e[0]) ? Buffer.concat(e) : [].concat.apply([], e);
};
Me = function(e, t) {
return Buffer.isBuffer(e) ? e.readDoubleLE(t) : Le(e, t);
};
Ve = function(e) {
return Buffer.isBuffer(e) || Array.isArray(e);
};
}
if ("undefined" != typeof cptable) {
_e = function(e, t, r) {
return cptable.utils.decode(1200, e.slice(t, r));
};
Ae = function(e, t, r) {
return cptable.utils.decode(65001, e.slice(t, r));
};
Ie = function(e, r) {
var n = je(e, r);
return n > 0 ? cptable.utils.decode(t, e.slice(r + 4, r + 4 + n - 1)) : "";
};
Re = function(e, t) {
var r = 2 * je(e, t);
return r > 0 ? cptable.utils.decode(1200, e.slice(t + 4, t + 4 + r - 1)) : "";
};
Oe = function(e, t) {
var r = je(e, t);
return r > 0 ? cptable.utils.decode(1200, e.slice(t + 4, t + 4 + r)) : "";
};
Pe = function(e, t) {
var r = je(e, t);
return r > 0 ? cptable.utils.decode(65001, e.slice(t + 4, t + 4 + r)) : "";
};
}
var ze = function(e, t) {
return e[t];
}, Xe = function(e, t) {
return 256 * e[t + 1] + e[t];
}, Ge = function(e, t) {
var r = 256 * e[t + 1] + e[t];
return r < 32768 ? r : -1 * (65535 - r + 1);
}, je = function(e, t) {
return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, Ke = function(e, t) {
return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, Ye = function(e) {
return e.match(/../g).map(function(e) {
return parseInt(e, 16);
});
};
function $e(e, r) {
var n, a, s, o, f, c, h = "", u = [];
switch (r) {
case "dbcs":
c = this.l;
if (l && Buffer.isBuffer(this)) h = this.slice(this.l, this.l + 2 * e).toString("utf16le"); else for (f = 0; f != e; ++f) {
h += String.fromCharCode(Xe(this, c));
c += 2;
}
e *= 2;
break;

case "utf8":
h = Ae(this, this.l, this.l + e);
break;

case "utf16le":
e *= 2;
h = _e(this, this.l, this.l + e);
break;

case "wstr":
if ("undefined" == typeof cptable) return $e.call(this, e, "dbcs");
h = cptable.utils.decode(t, this.slice(this.l, this.l + 2 * e));
e *= 2;
break;

case "lpstr":
e = 5 + (h = Ie(this, this.l)).length;
break;

case "lpwstr":
e = 5 + (h = Re(this, this.l)).length;
"\0" == h[h.length - 1] && (e += 2);
break;

case "lpp4":
e = 4 + je(this, this.l);
h = Oe(this, this.l);
2 & e && (e += 2);
break;

case "8lpp4":
e = 4 + je(this, this.l);
h = Pe(this, this.l);
3 & e && (e += 4 - (3 & e));
break;

case "cstr":
e = 0;
h = "";
for (;0 !== (s = ze(this, this.l + e++)); ) u.push(i(s));
h = u.join("");
break;

case "_wstr":
e = 0;
h = "";
for (;0 !== (s = Xe(this, this.l + e)); ) {
u.push(i(s));
e += 2;
}
e += 2;
h = u.join("");
break;

case "dbcs-cont":
h = "";
c = this.l;
for (f = 0; f != e; ++f) {
if (this.lens && -1 !== this.lens.indexOf(c)) {
s = ze(this, c);
this.l = c + 1;
o = $e.call(this, e - f, s ? "dbcs-cont" : "sbcs-cont");
return u.join("") + o;
}
u.push(i(Xe(this, c)));
c += 2;
}
h = u.join("");
e *= 2;
break;

case "sbcs-cont":
h = "";
c = this.l;
for (f = 0; f != e; ++f) {
if (this.lens && -1 !== this.lens.indexOf(c)) {
s = ze(this, c);
this.l = c + 1;
o = $e.call(this, e - f, s ? "dbcs-cont" : "sbcs-cont");
return u.join("") + o;
}
u.push(i(ze(this, c)));
c += 1;
}
h = u.join("");
break;

default:
switch (e) {
case 1:
n = ze(this, this.l);
this.l++;
return n;

case 2:
n = ("i" === r ? Ge : Xe)(this, this.l);
this.l += 2;
return n;

case 4:
if ("i" === r || 0 == (128 & this[this.l + 3])) {
n = Ke(this, this.l);
this.l += 4;
return n;
}
a = je(this, this.l);
this.l += 4;
return a;

case 8:
if ("f" === r) {
a = Me(this, this.l);
this.l += 8;
return a;
}

case 16:
h = ke(this, this.l, e);
}
}
this.l += e;
return h;
}
var Ze = function(e, t, r) {
e[r] = 255 & t;
e[r + 1] = t >>> 8 & 255;
}, Qe = function(e, t, r) {
e[r] = 255 & t;
e[r + 1] = t >>> 8 & 255;
e[r + 2] = t >>> 16 & 255;
e[r + 3] = t >>> 24 & 255;
}, qe = function(e, t, r) {
e[r] = 255 & t;
e[r + 1] = t >> 8 & 255;
e[r + 2] = t >> 16 & 255;
e[r + 3] = t >> 24 & 255;
};
function Je(e, t, r) {
var n = 0, a = 0;
if ("dbcs" === r) {
for (a = 0; a != t.length; ++a) Ze(this, t.charCodeAt(a), this.l + 2 * a);
n = 2 * t.length;
} else if ("sbcs" === r) {
for (a = 0; a != t.length; ++a) this[this.l + a] = 255 & t.charCodeAt(a);
n = t.length;
} else switch (e) {
case 1:
n = 1;
this[this.l] = 255 & t;
break;

case 2:
n = 2;
this[this.l] = 255 & t;
t >>>= 8;
this[this.l + 1] = 255 & t;
break;

case 3:
n = 3;
this[this.l] = 255 & t;
t >>>= 8;
this[this.l + 1] = 255 & t;
t >>>= 8;
this[this.l + 2] = 255 & t;
break;

case 4:
n = 4;
Qe(this, t, this.l);
break;

case 8:
n = 8;
if ("f" === r) {
(function(e, t, r) {
var n = (t < 0 || 1 / t == -Infinity ? 1 : 0) << 7, a = 0, s = 0, i = n ? -t : t;
if (isFinite(i)) {
a = Math.floor(Math.log(i) * Math.LOG2E);
s = t * Math.pow(2, 52 - a);
if (a <= -1023 && (!isFinite(s) || s < Math.pow(2, 52))) a = -1022; else {
s -= Math.pow(2, 52);
a += 1023;
}
} else {
a = 2047;
s = isNaN(t) ? 26985 : 0;
}
for (var o = 0; o <= 5; ++o, s /= 256) e[r + o] = 255 & s;
e[r + 6] = (15 & a) << 4 | 15 & s;
e[r + 7] = a >> 4 | n;
})(this, t, this.l);
break;
}

case 16:
break;

case -4:
n = 4;
qe(this, t, this.l);
}
this.l += n;
return this;
}
function et(e, t) {
var r = ke(this, this.l, e.length >> 1);
if (r !== e) throw t + "Expected " + e + " saw " + r;
this.l += e.length >> 1;
}
function tt(e, t) {
e.l = t;
e.read_shift = $e;
e.chk = et;
e.write_shift = Je;
}
function rt(e, t) {
e.l += t;
}
function nt(e) {
var t = c(e);
tt(t, 0);
return t;
}
function at(e, t, r) {
if (e) {
var n, a, s;
tt(e, e.l || 0);
for (var i = e.length, o = 0, f = 0; e.l < i; ) {
128 & (o = e.read_shift(1)) && (o = (127 & o) + ((127 & e.read_shift(1)) << 7));
var l = Yu[o] || Yu[65535];
s = 127 & (n = e.read_shift(1));
for (a = 1; a < 4 && 128 & n; ++a) s += (127 & (n = e.read_shift(1))) << 7 * a;
f = e.l + s;
var c = l.f(e, s, r);
e.l = f;
if (t(c, l.n, o)) return;
}
}
}
function st() {
var e = [], t = function(e) {
var t = nt(e);
tt(t, 0);
return t;
}, r = t(2048), n = function() {
if (r) {
r.length > r.l && (r = r.slice(0, r.l));
r.length > 0 && e.push(r);
r = null;
}
}, a = function(e) {
if (r && e < r.length - r.l) return r;
n();
return r = t(Math.max(e + 1, 2048));
};
return {
next: a,
push: function(e) {
n();
r = e;
a(2048);
},
end: function() {
n();
return we([ e ]);
},
_bufs: e
};
}
function it(e, t, r, n) {
var a, s = Number($u[t]);
if (!isNaN(s)) {
n || (n = Yu[s].p || (r || []).length || 0);
a = 1 + (s >= 128 ? 1 : 0) + 1 + n;
n >= 128 && ++a;
n >= 16384 && ++a;
n >= 2097152 && ++a;
var i = e.next(a);
if (s <= 127) i.write_shift(1, s); else {
i.write_shift(1, 128 + (127 & s));
i.write_shift(1, s >> 7);
}
for (var o = 0; 4 != o; ++o) {
if (!(n >= 128)) {
i.write_shift(1, n);
break;
}
i.write_shift(1, 128 + (127 & n));
n >>= 7;
}
n > 0 && Ve(r) && e.push(r);
}
}
function ot(e, t, r) {
var n = P(e);
if (t.s) {
n.cRel && (n.c += t.s.c);
n.rRel && (n.r += t.s.r);
} else {
n.c += t.c;
n.r += t.r;
}
if (!r || r.biff < 12) {
for (;n.c >= 256; ) n.c -= 256;
for (;n.r >= 65536; ) n.r -= 65536;
}
return n;
}
function ft(e, t, r) {
var n = P(e);
n.s = ot(n.s, t.s, r);
n.e = ot(n.e, t.s, r);
return n;
}
function lt(e) {
var t = Bt(e);
0 === e.cRel && (t = bt(t));
0 === e.rRel && (t = dt(t));
return t;
}
function ct(e, t) {
return 0 != e.s.r || e.s.rRel || e.e.r != t.biff >= 12 && e.e.rRel ? 0 != e.s.c || e.s.cRel || e.e.c != t.biff >= 12 && e.e.cRel ? lt(e.s) + ":" + lt(e.e) : (e.s.rRel ? "" : "$") + ut(e.s.r) + ":" + (e.e.rRel ? "" : "$") + ut(e.e.r) : (e.s.cRel ? "" : "$") + gt(e.s.c) + ":" + (e.e.cRel ? "" : "$") + gt(e.e.c);
}
(function(e, t) {
var r;
if ("undefined" != typeof t) r = t; else if ("undefined" != typeof require) try {
r = require("crypto");
} catch (e) {
r = null;
}
e.rc4 = function(e, t) {
var r = new Array(256), n = 0, a = 0, s = 0, i = 0;
for (a = 0; 256 != a; ++a) r[a] = a;
for (a = 0; 256 != a; ++a) {
s = s + r[a] + e[a % e.length].charCodeAt(0) & 255;
i = r[a];
r[a] = r[s];
r[s] = i;
}
a = s = 0;
var o = Buffer(t.length);
for (n = 0; n != t.length; ++n) {
s = (s + r[a = a + 1 & 255]) % 256;
i = r[a];
r[a] = r[s];
r[s] = i;
o[n] = t[n] ^ r[r[a] + r[s] & 255];
}
return o;
};
e.md5 = function(e) {
if (!r) throw new Error("Unsupported crypto");
return r.createHash("md5").update(e).digest("hex");
};
})({}, "undefined" != typeof crypto ? crypto : void 0);
function ht(e) {
return parseInt(pt(e), 10) - 1;
}
function ut(e) {
return "" + (e + 1);
}
function dt(e) {
return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function pt(e) {
return e.replace(/\$(\d+)$/, "$1");
}
function mt(e) {
for (var t = vt(e), r = 0, n = 0; n !== t.length; ++n) r = 26 * r + t.charCodeAt(n) - 64;
return r - 1;
}
function gt(e) {
var t = "";
for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode((e - 1) % 26 + 65) + t;
return t;
}
function bt(e) {
return e.replace(/^([A-Z])/, "$$$1");
}
function vt(e) {
return e.replace(/^\$([A-Z])/, "$1");
}
function Et(e) {
return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function St(e) {
var t = Et(e);
return {
c: mt(t[0]),
r: ht(t[1])
};
}
function Bt(e) {
return gt(e.c) + ut(e.r);
}
function wt(e) {
var t = e.split(":").map(St);
return {
s: t[0],
e: t[t.length - 1]
};
}
function Ct(e, t) {
if ("undefined" == typeof t || "number" == typeof t) return Ct(e.s, e.e);
"string" != typeof e && (e = Bt(e));
"string" != typeof t && (t = Bt(t));
return e == t ? e : e + ":" + t;
}
function _t(e) {
var t = {
s: {
c: 0,
r: 0
},
e: {
c: 0,
r: 0
}
}, r = 0, n = 0, a = 0, s = e.length;
for (r = 0; n < s && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a;
t.s.c = --r;
for (r = 0; n < s && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) r = 10 * r + a;
t.s.r = --r;
if (n === s || 58 === e.charCodeAt(++n)) {
t.e.c = t.s.c;
t.e.r = t.s.r;
return t;
}
for (r = 0; n != s && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) r = 26 * r + a;
t.e.c = --r;
for (r = 0; n != s && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) r = 10 * r + a;
t.e.r = --r;
return t;
}
function Tt(e, t) {
var r = "d" == e.t && t instanceof Date;
if (null != e.z) try {
return e.w = m.format(e.z, r ? k(t) : t);
} catch (e) {}
try {
return e.w = m.format((e.XF || {}).ifmt || (r ? 14 : 0), r ? k(t) : t);
} catch (e) {
return "" + t;
}
}
function kt(e, t, r) {
if (null == e || null == e.t || "z" == e.t) return "";
if (void 0 !== e.w) return e.w;
"d" == e.t && !e.z && r && r.dateNF && (e.z = r.dateNF);
return Tt(e, void 0 == t ? e.v : t);
}
function xt(e, t) {
var r = t && t.sheet ? t.sheet : "Sheet1", n = {};
n[r] = e;
return {
SheetNames: [ r ],
Sheets: n
};
}
function At(e, t) {
var r = t || {};
null != o && null == r.dense && (r.dense = o);
for (var n = r.dense ? [] : {}, a = {
s: {
c: 1e7,
r: 1e7
},
e: {
c: 0,
r: 0
}
}, s = 0; s != e.length; ++s) for (var i = 0; i != e[s].length; ++i) if ("undefined" != typeof e[s][i]) {
var f = {
v: e[s][i]
};
if (Array.isArray(f.v)) {
f.f = e[s][i][1];
f.v = f.v[0];
}
a.s.r > s && (a.s.r = s);
a.s.c > i && (a.s.c = i);
a.e.r < s && (a.e.r = s);
a.e.c < i && (a.e.c = i);
if (null === f.v) if (f.f) f.t = "n"; else {
if (!r.cellStubs) continue;
f.t = "z";
} else if ("number" == typeof f.v) f.t = "n"; else if ("boolean" == typeof f.v) f.t = "b"; else if (f.v instanceof Date) {
f.z = r.dateNF || m._table[14];
if (r.cellDates) {
f.t = "d";
f.w = m.format(f.z, k(f.v));
} else {
f.t = "n";
f.v = k(f.v);
f.w = m.format(f.z, f.v);
}
} else f.t = "s";
if (r.dense) {
n[s] || (n[s] = []);
n[s][i] = f;
} else {
n[Bt({
c: i,
r: s
})] = f;
}
}
a.s.c < 1e7 && (n["!ref"] = Ct(a));
return n;
}
function It(e, t) {
t || (t = nt(4));
t.write_shift(4, e);
return t;
}
function yt(e) {
var t = e.read_shift(4);
return 0 === t ? "" : e.read_shift(t, "dbcs");
}
function Rt(e, t) {
var r = !1;
if (null == t) {
r = !0;
t = nt(4 + 2 * e.length);
}
t.write_shift(4, e.length);
e.length > 0 && t.write_shift(0, e, "dbcs");
return r ? t.slice(0, t.l) : t;
}
function Dt(e, t) {
return {
ich: e.read_shift(2),
ifnt: e.read_shift(2)
};
}
function Ot(e, t) {
var r = e.l, n = e.read_shift(1), a = yt(e), s = [], i = {
t: a,
h: a
};
if (0 != (1 & n)) {
for (var o = e.read_shift(4), f = 0; f != o; ++f) s.push(Dt(e));
i.r = s;
} else i.r = [ {
ich: 0,
ifnt: 0
} ];
e.l = r + t;
return i;
}
var Ft = Ot;
function Pt(e, t) {
var r = !1;
if (null == t) {
r = !0;
t = nt(23 + 4 * e.t.length);
}
t.write_shift(1, 1);
Rt(e.t, t);
t.write_shift(4, 1);
(function(e, t) {
t || (t = nt(4));
t.write_shift(2, e.ich || 0);
t.write_shift(2, e.ifnt || 0);
})({
ich: 0,
ifnt: 0
}, t);
return r ? t.slice(0, t.l) : t;
}
function Nt(e) {
var t = e.read_shift(4), r = e.read_shift(2);
r += e.read_shift(1) << 16;
e.read_shift(1);
return {
c: t,
iStyleRef: r
};
}
function Mt(e, t) {
null == t && (t = nt(8));
t.write_shift(-4, e.c);
t.write_shift(3, e.iStyleRef || e.s);
t.write_shift(1, 0);
return t;
}
var Lt = yt, Ut = Rt;
function Ht(e) {
var t = e.read_shift(4);
return 0 === t || 4294967295 === t ? "" : e.read_shift(t, "dbcs");
}
function Wt(e, t) {
var r = !1;
if (null == t) {
r = !0;
t = nt(127);
}
t.write_shift(4, e.length > 0 ? e.length : 4294967295);
e.length > 0 && t.write_shift(0, e, "dbcs");
return r ? t.slice(0, t.l) : t;
}
var Vt = yt, zt = Ht, Xt = Wt;
function Gt(e) {
var t = e.slice(e.l, e.l + 4), r = 1 & t[0], n = 2 & t[0];
e.l += 4;
t[0] &= 252;
var a = 0 === n ? Me([ 0, 0, 0, 0, t[0], t[1], t[2], t[3] ], 0) : Ke(t, 0) >> 2;
return r ? a / 100 : a;
}
function jt(e) {
var t = {
s: {},
e: {}
};
t.s.r = e.read_shift(4);
t.e.r = e.read_shift(4);
t.s.c = e.read_shift(4);
t.e.c = e.read_shift(4);
return t;
}
var Kt = jt, Yt = function(e, t) {
t || (t = nt(16));
t.write_shift(4, e.s.r);
t.write_shift(4, e.e.r);
t.write_shift(4, e.s.c);
t.write_shift(4, e.e.c);
return t;
};
function $t(e, t) {
return e.read_shift(8, "f");
}
function Zt(e, t) {
return (t || nt(8)).write_shift(8, e, "f");
}
var Qt = {
0: "#NULL!",
7: "#DIV/0!",
15: "#VALUE!",
23: "#REF!",
29: "#NAME?",
36: "#NUM!",
42: "#N/A",
43: "#GETTING_DATA",
255: "#WTF?"
}, qt = C(Qt);
function Jt(e, t) {
t || (t = nt(8));
if (!e || e.auto) {
t.write_shift(4, 0);
t.write_shift(4, 0);
return t;
}
if (e.index) {
t.write_shift(1, 2);
t.write_shift(1, e.index);
} else if (e.theme) {
t.write_shift(1, 6);
t.write_shift(1, e.theme);
} else {
t.write_shift(1, 5);
t.write_shift(1, 0);
}
var r = e.tint || 0;
r > 0 ? r *= 32767 : r < 0 && (r *= 32768);
t.write_shift(2, r);
if (e.rgb) {
var n = e.rgb || "FFFFFF";
t.write_shift(1, parseInt(n.substr(0, 2), 16));
t.write_shift(1, parseInt(n.substr(2, 2), 16));
t.write_shift(1, parseInt(n.substr(4, 2), 16));
t.write_shift(1, 255);
} else {
t.write_shift(2, 0);
t.write_shift(1, 0);
t.write_shift(1, 0);
}
return t;
}
var er = 2, tr = 3, rr = 12, nr = 81, ar = [ 80, nr ], sr = {
1: {
n: "CodePage",
t: er
},
2: {
n: "Category",
t: 80
},
3: {
n: "PresentationFormat",
t: 80
},
4: {
n: "ByteCount",
t: tr
},
5: {
n: "LineCount",
t: tr
},
6: {
n: "ParagraphCount",
t: tr
},
7: {
n: "SlideCount",
t: tr
},
8: {
n: "NoteCount",
t: tr
},
9: {
n: "HiddenCount",
t: tr
},
10: {
n: "MultimediaClipCount",
t: tr
},
11: {
n: "Scale",
t: 11
},
12: {
n: "HeadingPair",
t: 4096 | rr
},
13: {
n: "DocParts",
t: 4126
},
14: {
n: "Manager",
t: 80
},
15: {
n: "Company",
t: 80
},
16: {
n: "LinksDirty",
t: 11
},
17: {
n: "CharacterCount",
t: tr
},
19: {
n: "SharedDoc",
t: 11
},
22: {
n: "HLinksChanged",
t: 11
},
23: {
n: "AppVersion",
t: tr,
p: "version"
},
26: {
n: "ContentType",
t: 80
},
27: {
n: "ContentStatus",
t: 80
},
28: {
n: "Language",
t: 80
},
29: {
n: "Version",
t: 80
},
255: {}
}, ir = {
1: {
n: "CodePage",
t: er
},
2: {
n: "Title",
t: 80
},
3: {
n: "Subject",
t: 80
},
4: {
n: "Author",
t: 80
},
5: {
n: "Keywords",
t: 80
},
6: {
n: "Comments",
t: 80
},
7: {
n: "Template",
t: 80
},
8: {
n: "LastAuthor",
t: 80
},
9: {
n: "RevNumber",
t: 80
},
10: {
n: "EditTime",
t: 64
},
11: {
n: "LastPrinted",
t: 64
},
12: {
n: "CreatedDate",
t: 64
},
13: {
n: "ModifiedDate",
t: 64
},
14: {
n: "PageCount",
t: tr
},
15: {
n: "WordCount",
t: tr
},
16: {
n: "CharCount",
t: tr
},
17: {
n: "Thumbnail",
t: 71
},
18: {
n: "ApplicationName",
t: 30
},
19: {
n: "DocumentSecurity",
t: tr
},
255: {}
}, or = {
2147483648: {
n: "Locale",
t: 19
},
2147483651: {
n: "Behavior",
t: 19
},
1919054434: {}
};
(function() {
for (var e in or) or.hasOwnProperty(e) && (sr[e] = ir[e] = or[e]);
})();
var fr = {
1: "US",
2: "CA",
3: "",
7: "RU",
20: "EG",
30: "GR",
31: "NL",
32: "BE",
33: "FR",
34: "ES",
36: "HU",
39: "IT",
41: "CH",
43: "AT",
44: "GB",
45: "DK",
46: "SE",
47: "NO",
48: "PL",
49: "DE",
52: "MX",
55: "BR",
61: "AU",
64: "NZ",
66: "TH",
81: "JP",
82: "KR",
84: "VN",
86: "CN",
90: "TR",
105: "JS",
213: "DZ",
216: "MA",
218: "LY",
351: "PT",
354: "IS",
358: "FI",
420: "CZ",
886: "TW",
961: "LB",
962: "JO",
963: "SY",
964: "IQ",
965: "KW",
966: "SA",
971: "AE",
972: "IL",
974: "QA",
981: "IR",
65535: "US"
}, lr = [ null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625" ];
var cr = function(e) {
return e.map(function(e) {
return [ e >> 16 & 255, e >> 8 & 255, 255 & e ];
});
}([ 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]), hr = {
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
"application/vnd.ms-excel.binIndexWs": "TODO",
"application/vnd.ms-excel.intlmacrosheet": "TODO",
"application/vnd.ms-excel.binIndexMs": "TODO",
"application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
"application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
"application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
"application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
"application/vnd.ms-excel.pivotTable": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
"application/vnd.ms-office.chartcolorstyle+xml": "TODO",
"application/vnd.ms-office.chartstyle+xml": "TODO",
"application/vnd.ms-excel.calcChain": "calcchains",
"application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
"application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
"application/vnd.ms-office.activeX": "TODO",
"application/vnd.ms-office.activeX+xml": "TODO",
"application/vnd.ms-excel.attachedToolbars": "TODO",
"application/vnd.ms-excel.connections": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
"application/vnd.ms-excel.externalLink": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "TODO",
"application/vnd.ms-excel.sheetMetadata": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "TODO",
"application/vnd.ms-excel.pivotCacheDefinition": "TODO",
"application/vnd.ms-excel.pivotCacheRecords": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
"application/vnd.ms-excel.queryTable": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
"application/vnd.ms-excel.userNames": "TODO",
"application/vnd.ms-excel.revisionHeaders": "TODO",
"application/vnd.ms-excel.revisionLog": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
"application/vnd.ms-excel.tableSingleCells": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
"application/vnd.ms-excel.slicer": "TODO",
"application/vnd.ms-excel.slicerCache": "TODO",
"application/vnd.ms-excel.slicer+xml": "TODO",
"application/vnd.ms-excel.slicerCache+xml": "TODO",
"application/vnd.ms-excel.wsSortMap": "TODO",
"application/vnd.ms-excel.table": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
"application/vnd.openxmlformats-officedocument.theme+xml": "themes",
"application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
"application/vnd.ms-excel.Timeline+xml": "TODO",
"application/vnd.ms-excel.TimelineCache+xml": "TODO",
"application/vnd.ms-office.vbaProject": "vba",
"application/vnd.ms-office.vbaProjectSignature": "vba",
"application/vnd.ms-office.volatileDependencies": "TODO",
"application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
"application/vnd.ms-excel.controlproperties+xml": "TODO",
"application/vnd.openxmlformats-officedocument.model+data": "TODO",
"application/vnd.ms-excel.Survey+xml": "TODO",
"application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
"application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
"application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
"application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
"application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
"application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
"application/vnd.openxmlformats-package.relationships+xml": "rels",
"application/vnd.openxmlformats-officedocument.oleObject": "TODO",
"image/png": "TODO",
sheet: "js"
}, ur = function() {
var e = {
workbooks: {
xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
},
strs: {
xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
xlsb: "application/vnd.ms-excel.sharedStrings"
},
comments: {
xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
xlsb: "application/vnd.ms-excel.comments"
},
sheets: {
xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
xlsb: "application/vnd.ms-excel.worksheet"
},
charts: {
xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
xlsb: "application/vnd.ms-excel.chartsheet"
},
dialogs: {
xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
xlsb: "application/vnd.ms-excel.dialogsheet"
},
macros: {
xlsx: "application/vnd.ms-excel.macrosheet+xml",
xlsb: "application/vnd.ms-excel.macrosheet"
},
styles: {
xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
xlsb: "application/vnd.ms-excel.styles"
}
};
B(e).forEach(function(t) {
e[t].xlsm || (e[t].xlsm = e[t].xlsx);
});
B(e).forEach(function(t) {
B(e[t]).forEach(function(r) {
hr[e[t][r]] = t;
});
});
return e;
}(), dr = function(e) {
for (var t = [], r = B(e), n = 0; n !== r.length; ++n) {
null == t[e[r[n]]] && (t[e[r[n]]] = []);
t[e[r[n]]].push(r[n]);
}
return t;
}(hr);
He.CT = "http://schemas.openxmlformats.org/package/2006/content-types";
var pr = Se("Types", null, {
xmlns: He.CT,
"xmlns:xsd": He.xsd,
"xmlns:xsi": He.xsi
}), mr = [ [ "xml", "application/xml" ], [ "bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main" ], [ "vml", "application/vnd.openxmlformats-officedocument.vmlDrawing" ], [ "bmp", "image/bmp" ], [ "png", "image/png" ], [ "gif", "image/gif" ], [ "emf", "image/x-emf" ], [ "wmf", "image/x-wmf" ], [ "jpg", "image/jpeg" ], [ "jpeg", "image/jpeg" ], [ "tif", "image/tiff" ], [ "tiff", "image/tiff" ], [ "pdf", "application/pdf" ], [ "rels", dr.rels[0] ] ].map(function(e) {
return Se("Default", null, {
Extension: e[0],
ContentType: e[1]
});
});
var gr = {
WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function br(e) {
var t = e.lastIndexOf("/");
return e.substr(0, t + 1) + "_rels/" + e.substr(t + 1) + ".rels";
}
function vr(e, t) {
if (!e) return e;
"/" !== t.charAt(0) && (t = "/" + t);
var r = {}, n = {};
(e.match(j) || []).forEach(function(e) {
var a = $(e);
if ("<Relationship" === a[0]) {
var s = {};
s.Type = a.Type;
s.Target = a.Target;
s.Id = a.Id;
s.TargetMode = a.TargetMode;
var i = "External" === a.TargetMode ? a.Target : X(a.Target, t);
r[i] = s;
n[a.Id] = s;
}
});
r["!id"] = n;
return r;
}
He.RELS = "http://schemas.openxmlformats.org/package/2006/relationships";
var Er = Se("Relationships", null, {
xmlns: He.RELS
});
function Sr(e) {
var t = [ Ue, Er ];
B(e["!id"]).forEach(function(r) {
t[t.length] = Se("Relationship", null, e["!id"][r]);
});
if (t.length > 2) {
t[t.length] = "</Relationships>";
t[1] = t[1].replace("/>", ">");
}
return t.join("");
}
function Br(e, t, r, n, a) {
a || (a = {});
e["!id"] || (e["!id"] = {});
if (t < 0) for (t = 1; e["!id"]["rId" + t]; ++t) ;
a.Id = "rId" + t;
a.Type = n;
a.Target = r;
a.Type == gr.HLINK && (a.TargetMode = "External");
if (e["!id"][a.Id]) throw new Error("Cannot rewrite rId " + t);
e["!id"][a.Id] = a;
e[("/" + a.Target).replace("//", "/")] = a;
return t;
}
var wr = "application/vnd.oasis.opendocument.spreadsheet";
function Cr(e, t, r) {
return [ '  <rdf:Description rdf:about="' + e + '">\n', '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + '"/>\n', "  </rdf:Description>\n" ].join("");
}
function _r(e, t) {
return [ '  <rdf:Description rdf:about="' + e + '">\n', '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + '"/>\n', "  </rdf:Description>\n" ].join("");
}
var Tr = function() {
var t = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + e.version + "</meta:generator></office:meta></office:document-meta>";
return function(e, r) {
return t;
};
}(), kr = [ [ "cp:category", "Category" ], [ "cp:contentStatus", "ContentStatus" ], [ "cp:keywords", "Keywords" ], [ "cp:lastModifiedBy", "LastAuthor" ], [ "cp:lastPrinted", "LastPrinted" ], [ "cp:revision", "RevNumber" ], [ "cp:version", "Version" ], [ "dc:creator", "Author" ], [ "dc:description", "Comments" ], [ "dc:identifier", "Identifier" ], [ "dc:language", "Language" ], [ "dc:subject", "Subject" ], [ "dc:title", "Title" ], [ "dcterms:created", "CreatedDate", "date" ], [ "dcterms:modified", "ModifiedDate", "date" ] ];
He.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties";
gr.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
var xr = function() {
for (var e = new Array(kr.length), t = 0; t < kr.length; ++t) {
var r = kr[t], n = "(?:" + r[0].substr(0, r[0].indexOf(":")) + ":)" + r[0].substr(r[0].indexOf(":") + 1);
e[t] = new RegExp("<" + n + "[^>]*>(.*)</" + n + ">");
}
return e;
}();
var Ar = Se("cp:coreProperties", null, {
"xmlns:cp": He.CORE_PROPS,
"xmlns:dc": He.dc,
"xmlns:dcterms": He.dcterms,
"xmlns:dcmitype": He.dcmitype,
"xmlns:xsi": He.xsi
});
function Ir(e, t, r, n, a) {
if (null == a[e] && null != t && "" !== t) {
a[e] = t;
n[n.length] = r ? Se(e, t, r) : ve(e, t);
}
}
var yr = [ [ "Application", "Application", "string" ], [ "AppVersion", "AppVersion", "string" ], [ "Company", "Company", "string" ], [ "DocSecurity", "DocSecurity", "string" ], [ "Manager", "Manager", "string" ], [ "HyperlinksChanged", "HyperlinksChanged", "bool" ], [ "SharedDoc", "SharedDoc", "bool" ], [ "LinksUpToDate", "LinksUpToDate", "bool" ], [ "ScaleCrop", "ScaleCrop", "bool" ], [ "HeadingPairs", "HeadingPairs", "raw" ], [ "TitlesOfParts", "TitlesOfParts", "raw" ] ];
He.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
gr.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
var Rr = Se("Properties", null, {
xmlns: He.EXT_PROPS,
"xmlns:vt": He.vt
});
He.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
gr.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";
var Dr = /<[^>]+>[^<]*/g;
var Or = Se("Properties", null, {
xmlns: He.CUST_PROPS,
"xmlns:vt": He.vt
});
function Fr(e, t) {
var r = [ Ue, Or ];
if (!e) return r.join("");
var n = 1;
B(e).forEach(function(t) {
++n;
r[r.length] = Se("property", function(e) {
switch (typeof e) {
case "string":
return Se("vt:lpwstr", e);

case "number":
return Se((0 | e) == e ? "vt:i4" : "vt:r8", String(e));

case "boolean":
return Se("vt:bool", e ? "true" : "false");
}
if (e instanceof Date) return Se("vt:filetime", Be(e));
throw new Error("Unable to serialize " + e);
}(e[t]), {
fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
pid: n,
name: t
});
});
if (r.length > 2) {
r[r.length] = "</Properties>";
r[1] = r[1].replace("/>", ">");
}
return r.join("");
}
var Pr = {
Title: "Title",
Subject: "Subject",
Author: "Author",
Keywords: "Keywords",
Comments: "Description",
LastAuthor: "LastAuthor",
RevNumber: "Revision",
Application: "AppName",
LastPrinted: "LastPrinted",
CreatedDate: "Created",
ModifiedDate: "LastSaved",
Category: "Category",
Manager: "Manager",
Company: "Company",
AppVersion: "Version",
ContentStatus: "ContentStatus",
Identifier: "Identifier",
Language: "Language"
}, Nr = w(Pr);
function Mr(e, t, r) {
e[t = Nr[t] || t] = r;
}
function Lr(e) {
var t = e.read_shift(4), r = e.read_shift(4);
return new Date(1e3 * (r / 1e7 * Math.pow(2, 32) + t / 1e7 - 11644473600)).toISOString().replace(/\.000/, "");
}
function Ur(e, t, r) {
var n = e.read_shift(0, "lpstr");
r && (e.l += 4 - (n.length + 1 & 3) & 3);
return n;
}
function Hr(e, t, r) {
var n = e.read_shift(0, "lpwstr");
r && (e.l += 4 - (n.length + 1 & 3) & 3);
return n;
}
function Wr(e, t, r) {
return 31 === t ? Hr(e) : Ur(e, 0, r);
}
function Vr(e, t, r) {
return Wr(e, t, !1 === r ? 0 : 4);
}
function zr(e) {
return [ Kr(e, nr), Kr(e, tr) ];
}
function Xr(e) {
return function(e) {
for (var t = e.read_shift(4), r = [], n = 0; n != t / 2; ++n) r.push(zr(e));
return r;
}(e);
}
function Gr(e, t) {
for (var r = e.read_shift(4), n = {}, a = 0; a != r; ++a) {
var s = e.read_shift(4), i = e.read_shift(4);
n[s] = e.read_shift(i, 1200 === t ? "utf16le" : "utf8").replace(d, "").replace(p, "!");
}
3 & e.l && (e.l = e.l >> 3 << 2);
return n;
}
function jr(e) {
var t = e.read_shift(4), r = e.slice(e.l, e.l + t);
(3 & t) > 0 && (e.l += 4 - (3 & t) & 3);
return r;
}
function Kr(e, t, r) {
var n, a = e.read_shift(2), s = r || {};
e.l += 2;
if (t !== rr && a !== t && -1 === ar.indexOf(t)) throw new Error("Expected type " + t + " saw " + a);
switch (t === rr ? a : t) {
case 2:
n = e.read_shift(2, "i");
s.raw || (e.l += 2);
return n;

case 3:
return n = e.read_shift(4, "i");

case 11:
return 0 !== e.read_shift(4);

case 19:
return n = e.read_shift(4);

case 30:
return Ur(e, 0, 4).replace(d, "");

case 31:
return Hr(e);

case 64:
return Lr(e);

case 65:
return jr(e);

case 71:
return function(e) {
var t = {};
t.Size = e.read_shift(4);
e.l += t.Size;
return t;
}(e);

case 80:
return Vr(e, a, !s.raw && 4).replace(d, "");

case 81:
return function(e, t) {
if (!t) throw new Error("dafuq?");
return Wr(e, t, 0);
}(e, a).replace(d, "");

case 4108:
return Xr(e);

case 4126:
return function(e) {
return function(e) {
for (var t = e.read_shift(4), r = [], n = 0; n != t; ++n) r[n] = e.read_shift(0, "lpstr");
return r;
}(e);
}(e);

default:
throw new Error("TypedPropertyValue unrecognized type " + t + " " + a);
}
}
function Yr(e, t) {
var r = e.l, a = e.read_shift(4), s = e.read_shift(4), i = [], o = 0, f = 0, l = -1, c = {};
for (o = 0; o != s; ++o) {
var h = e.read_shift(4), u = e.read_shift(4);
i[o] = [ h, u + r ];
}
var d = {};
for (o = 0; o != s; ++o) {
if (e.l !== i[o][1]) {
var p = !0;
if (o > 0 && t) switch (t[i[o - 1][0]].t) {
case 2:
if (e.l + 2 === i[o][1]) {
e.l += 2;
p = !1;
}
break;

case 80:
case 4108:
if (e.l <= i[o][1]) {
e.l = i[o][1];
p = !1;
}
}
if (!t && e.l <= i[o][1]) {
p = !1;
e.l = i[o][1];
}
if (p) throw new Error("Read Error: Expected address " + i[o][1] + " at " + e.l + " :" + o);
}
if (t) {
var m = t[i[o][0]];
d[m.n] = Kr(e, m.t, {
raw: !0
});
"version" === m.p && (d[m.n] = String(d[m.n] >> 16) + "." + String(65535 & d[m.n]));
if ("CodePage" == m.n) switch (d[m.n]) {
case 0:
d[m.n] = 1252;

case 874:
case 932:
case 936:
case 949:
case 950:
case 1250:
case 1251:
case 1253:
case 1254:
case 1255:
case 1256:
case 1257:
case 1258:
case 1e4:
case 1200:
case 1201:
case 1252:
case 65e3:
case -536:
case 65001:
case -535:
n(f = d[m.n]);
break;

default:
throw new Error("Unsupported CodePage: " + d[m.n]);
}
} else if (1 === i[o][0]) {
f = d.CodePage = Kr(e, er);
n(f);
if (-1 !== l) {
var g = e.l;
e.l = i[l][1];
c = Gr(e, f);
e.l = g;
}
} else if (0 === i[o][0]) {
if (0 === f) {
l = o;
e.l = i[o + 1][1];
continue;
}
c = Gr(e, f);
} else {
var b, v = c[i[o][0]];
switch (e[e.l]) {
case 65:
e.l += 4;
b = jr(e);
break;

case 30:
case 31:
e.l += 4;
b = Vr(e, e[e.l - 4]);
break;

case 3:
e.l += 4;
b = e.read_shift(4, "i");
break;

case 19:
e.l += 4;
b = e.read_shift(4);
break;

case 5:
e.l += 4;
b = e.read_shift(8, "f");
break;

case 11:
e.l += 4;
b = Qr(e, 4);
break;

case 64:
e.l += 4;
b = O(Lr(e));
break;

default:
throw new Error("unparsed value: " + e[e.l]);
}
d[v] = b;
}
}
e.l = r + a;
return d;
}
function $r(e, t) {
var r = e.content;
tt(r, 0);
var n, a, s, i, o = 0;
r.chk("feff", "Byte Order: ");
r.read_shift(2);
var f = r.read_shift(4);
r.chk(E.utils.consts.HEADER_CLSID, "CLSID: ");
if (1 !== (n = r.read_shift(4)) && 2 !== n) throw new Error("Unrecognized #Sets: " + n);
a = r.read_shift(16);
i = r.read_shift(4);
if (1 === n && i !== r.l) throw new Error("Length mismatch: " + i + " !== " + r.l);
if (2 === n) {
s = r.read_shift(16);
o = r.read_shift(4);
}
var l, c = Yr(r, t), h = {
SystemIdentifier: f
};
for (var u in c) h[u] = c[u];
h.FMTID = a;
if (1 === n) return h;
if (r.l !== o) throw new Error("Length mismatch 2: " + r.l + " !== " + o);
try {
l = Yr(r, null);
} catch (e) {}
for (u in l) h[u] = l[u];
h.FMTID = [ a, s ];
return h;
}
function Zr(e, t) {
e.read_shift(t);
return null;
}
function Qr(e, t) {
return 1 === e.read_shift(t);
}
function qr(e) {
return e.read_shift(2, "u");
}
function Jr(e, t) {
return function(e, t, r) {
for (var n = [], a = e.l + t; e.l < a; ) n.push(r(e, a - e.l));
if (a !== e.l) throw new Error("Slurp error");
return n;
}(e, t, qr);
}
function en(e, r, n) {
var a = e.read_shift(n && n.biff >= 12 ? 2 : 1), s = "sbcs-cont", i = t;
n && n.biff >= 8 && (t = 1200);
if (n && 8 != n.biff) {
if (12 == n.biff) {
2;
s = "wstr";
}
} else {
if (e.read_shift(1)) {
2;
s = "dbcs-cont";
}
}
var o = a ? e.read_shift(a, s) : "";
t = i;
return o;
}
function tn(e) {
var r = t;
t = 1200;
var n, a = e.read_shift(2), s = e.read_shift(1), i = 4 & s, o = 8 & s, f = 0, l = {};
o && (f = e.read_shift(2));
i && (n = e.read_shift(4));
var c = 1 & s ? "dbcs-cont" : "sbcs-cont", h = 0 === a ? "" : e.read_shift(a, c);
o && (e.l += 4 * f);
i && (e.l += n);
l.t = h;
if (!o) {
l.raw = "<t>" + l.t + "</t>";
l.r = l.t;
}
t = r;
return l;
}
function rn(e, t, r) {
if (r) {
if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, "sbcs-cont");
if (r.biff >= 12) return e.read_shift(t, "dbcs-cont");
}
return 0 === e.read_shift(1) ? e.read_shift(t, "sbcs-cont") : e.read_shift(t, "dbcs-cont");
}
function nn(e, t, r) {
var n = e.read_shift(r && 2 == r.biff ? 1 : 2);
if (0 === n) {
e.l++;
return "";
}
return rn(e, n, r);
}
function an(e, t, r) {
if (r.biff > 5) return nn(e, 0, r);
var n = e.read_shift(1);
if (0 === n) {
e.l++;
return "";
}
return e.read_shift(n, "sbcs-cont");
}
var sn = rt, on = function(e, t) {
var r = e.read_shift(16);
16;
switch (r) {
case "e0c9ea79f9bace118c8200aa004ba90b":
return function(e) {
var t = e.read_shift(4), r = e.l, n = !1;
if (t > 24) {
e.l += t - 24;
"795881f43b1d7f48af2c825dc4852763" === e.read_shift(16) && (n = !0);
e.l = r;
}
var a = e.read_shift((n ? t - 24 : t) >> 1, "utf16le").replace(d, "");
n && (e.l += 24);
return a;
}(e);

case "0303000000000000c000000000000046":
return function(e, t) {
e.read_shift(2);
var r = e.read_shift(4), n = e.read_shift(r, "cstr");
e.read_shift(2), e.read_shift(2);
if (0 === e.read_shift(4)) return n.replace(/\\/g, "/");
var a = e.read_shift(4);
e.read_shift(2);
return e.read_shift(a >> 1, "utf16le").replace(d, "");
}(e);

default:
throw new Error("Unsupported Moniker " + r);
}
}, fn = function(e, t) {
var r = e.read_shift(4);
return e.read_shift(r, "utf16le").replace(d, "");
};
function ln(e, t) {
return [ e.read_shift(1), e.read_shift(1), e.read_shift(1), e.read_shift(1) ];
}
function cn(e, t) {
var r = ln(e);
r[3] = 0;
return r;
}
function hn(e, t) {
return {
r: e.read_shift(2),
c: e.read_shift(2),
ixfe: e.read_shift(2)
};
}
var un = qr;
function dn(e, t) {
return [ e.read_shift(2), e.read_shift(2, "i"), e.read_shift(2, "i") ];
}
function pn(e, t) {
return [ e.read_shift(2), Gt(e) ];
}
function mn(e, t) {
var r = e.read_shift(2), n = e.read_shift(2);
return {
s: {
c: e.read_shift(2),
r: r
},
e: {
c: e.read_shift(2),
r: n
}
};
}
function gn(e, t) {
var r = e.read_shift(2), n = e.read_shift(2);
return {
s: {
c: e.read_shift(1),
r: r
},
e: {
c: e.read_shift(1),
r: n
}
};
}
var bn = gn;
function vn(e, t) {
e.l += 4;
var r = e.read_shift(2), n = e.read_shift(2), a = e.read_shift(2);
e.l += 12;
return [ n, r, a ];
}
function En(e, t) {
e.l += 2;
e.l += e.read_shift(2);
}
var Sn = {
0: En,
4: En,
5: En,
6: En,
7: function(e, t) {
e.l += 4;
e.cf = e.read_shift(2);
return {};
},
8: En,
9: En,
10: En,
11: En,
12: En,
13: function(e, t) {
var r = {};
e.l += 4;
e.l += 16;
r.fSharedNote = e.read_shift(2);
e.l += 4;
return r;
},
14: En,
15: En,
16: En,
17: En,
18: En,
19: En,
20: En,
21: vn
};
var Bn = qr;
function wn(e, t) {
var r = {
BIFFVer: 0,
dt: 0
};
r.BIFFVer = e.read_shift(2);
if ((t -= 2) >= 2) {
r.dt = e.read_shift(2);
e.l -= 2;
}
switch (r.BIFFVer) {
case 1536:
case 1280:
case 2:
case 7:
break;

default:
if (t > 6) throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
}
e.read_shift(t);
return r;
}
var Cn = Zr;
function _n(e, t, r) {
var n = 0;
r && 2 == r.biff || (n = e.read_shift(2));
var a = e.read_shift(2);
if (r && 2 == r.biff) {
n = 1 - (a >> 15);
a &= 32767;
}
return [ {
Unsynced: 1 & n,
DyZero: (2 & n) >> 1,
ExAsc: (4 & n) >> 2,
ExDsc: (8 & n) >> 3
}, a ];
}
var Tn = an;
function kn(e, t, r) {
var n = e.l + t, a = 8 != r.biff && r.biff ? 2 : 4, s = e.read_shift(a), i = e.read_shift(a), o = e.read_shift(2), f = e.read_shift(2);
e.l = n;
return {
s: {
r: s,
c: o
},
e: {
r: i,
c: f
}
};
}
function xn(e, t, r, n) {
var a = {}, s = e.read_shift(4), i = e.read_shift(4), o = e.read_shift(4), f = e.read_shift(2);
a.patternType = lr[o >> 26];
if (!n.cellStyles) return a;
a.alc = 7 & s;
a.fWrap = s >> 3 & 1;
a.alcV = s >> 4 & 7;
a.fJustLast = s >> 7 & 1;
a.trot = s >> 8 & 255;
a.cIndent = s >> 16 & 15;
a.fShrinkToFit = s >> 20 & 1;
a.iReadOrder = s >> 22 & 2;
a.fAtrNum = s >> 26 & 1;
a.fAtrFnt = s >> 27 & 1;
a.fAtrAlc = s >> 28 & 1;
a.fAtrBdr = s >> 29 & 1;
a.fAtrPat = s >> 30 & 1;
a.fAtrProt = s >> 31 & 1;
a.dgLeft = 15 & i;
a.dgRight = i >> 4 & 15;
a.dgTop = i >> 8 & 15;
a.dgBottom = i >> 12 & 15;
a.icvLeft = i >> 16 & 127;
a.icvRight = i >> 23 & 127;
a.grbitDiag = i >> 30 & 3;
a.icvTop = 127 & o;
a.icvBottom = o >> 7 & 127;
a.icvDiag = o >> 14 & 127;
a.dgDiag = o >> 21 & 15;
a.icvFore = 127 & f;
a.icvBack = f >> 7 & 127;
a.fsxButton = f >> 14 & 1;
return a;
}
function An(e, t, r) {
var n = hn(e);
2 == r.biff && ++e.l;
var a = function(e) {
var t = e.read_shift(1);
return 1 === e.read_shift(1) ? t : 1 === t;
}(e);
n.val = a;
n.t = !0 === a || !1 === a ? "b" : "e";
return n;
}
var In = function(e, t, r) {
return 0 === t ? "" : an(e, 0, r);
};
function yn(e, t, r) {
var n, a = e.read_shift(2), s = {
fBuiltIn: 1 & a,
fWantAdvise: a >>> 1 & 1,
fWantPict: a >>> 2 & 1,
fOle: a >>> 3 & 1,
fOleLink: a >>> 4 & 1,
cf: a >>> 5 & 1023,
fIcon: a >>> 15 & 1
};
14849 === r.sbcch && (n = function(e, t, r) {
e.l += 4;
t -= 4;
var n = e.l + t, a = en(e, 0, r), s = e.read_shift(2);
if (s !== (n -= e.l)) throw new Error("Malformed AddinUdf: padding = " + n + " != " + s);
e.l += s;
return a;
}(e, t - 2, r));
s.body = n || e.read_shift(t - 2);
"string" == typeof n && (s.Name = n);
return s;
}
var Rn = [ "_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase" ];
function Dn(e, t, r) {
var n = e.l + t, a = e.read_shift(2), s = e.read_shift(1), i = e.read_shift(1), o = e.read_shift(r && 2 == r.biff ? 1 : 2), f = 0;
if (!r || r.biff >= 5) {
e.l += 2;
f = e.read_shift(2);
e.l += 4;
}
var l = rn(e, i, r);
32 & a && (l = Rn[l.charCodeAt(0)]);
var c = n - e.l;
r && 2 == r.biff && --c;
return {
chKey: s,
Name: l,
itab: f,
rgce: n == e.l || 0 == o ? [] : function(e, t, r, n) {
var a, s = e.l + t, i = rh(e, n, r);
s !== e.l && (a = th(e, s - e.l, i, r));
return [ i, a ];
}(e, c, r, o)
};
}
function On(e, t, r) {
var n = bn(e, 6);
switch (r.biff) {
case 2:
e.l++;
t -= 7;
break;

case 3:
case 4:
e.l += 2;
t -= 8;
break;

default:
e.l += 6;
t -= 12;
}
return [ n, function(e, t, r, n) {
e.l;
var a, s = 2 == r.biff ? 1 : 2, i = e.read_shift(s);
if (65535 == i) return [ [], rt(e, t - 2) ];
var o = rh(e, i, r);
t !== i + s && (a = th(e, t - i - s, o, r));
return [ o, a ];
}(e, t, r) ];
}
var Fn = [];
Fn[8] = function(e, t, r) {
var n = e.l + t;
e.l += 10;
var a = e.read_shift(2);
e.l += 4;
e.read_shift(2);
e.l += 2;
e.read_shift(2);
e.l += 4;
var s = e.read_shift(1);
e.l += s;
e.l = n;
return {
fmt: a
};
};
function Pn(e, t, r) {
if (!r.cellStyles) return rt(e, t);
var n = r && r.biff >= 12 ? 4 : 2, a = e.read_shift(n), s = e.read_shift(n), i = e.read_shift(n), o = e.read_shift(n), f = e.read_shift(2);
2 == n && (e.l += 2);
return {
s: a,
e: s,
w: i,
ixfe: o,
flags: f
};
}
var Nn = rt, Mn = rt, Ln = rt, Un = Qr, Hn = hn, Wn = $t, Vn = qr, zn = qr, Xn = $t, Gn = Qr, jn = qr, Kn = Qr, Yn = Zr, $n = Qr, Zn = qr, Qn = Qr, qn = Qr, Jn = qr, ea = Zr, ta = Zr, ra = Zr, na = Zr, aa = Zr, sa = qr, ia = In, oa = qr, fa = Qr, la = In, ca = un, ha = Zr, ua = $t, da = Zr, pa = Qr, ma = qr, ga = Qr, ba = Qr, va = qr, Ea = Qr, Sa = qr, Ba = Qr, wa = Qr, Ca = $t, _a = Jr, Ta = Qr, ka = Jr, xa = nn, Aa = Qr, Ia = $t, ya = Qr, Ra = Qr, Da = Qr, Oa = rt, Fa = rt, Pa = rt, Na = rt, Ma = rt, La = rt, Ua = rt, Ha = rt, Wa = rt, Va = rt, za = rt, Xa = rt, Ga = rt, ja = rt, Ka = rt, Ya = rt, $a = rt, Za = rt, Qa = rt, qa = rt, Ja = rt, es = rt, ts = rt, rs = rt, ns = rt, as = rt, ss = rt, is = rt, os = rt, fs = rt, ls = rt, cs = rt, hs = rt, us = rt, ds = rt, ps = rt, ms = rt, gs = rt, bs = rt, vs = rt, Es = rt, Ss = rt, Bs = rt, ws = rt, Cs = rt, _s = rt, Ts = rt, ks = rt, xs = rt, As = rt, Is = rt, ys = rt, Rs = rt, Ds = rt, Os = rt, Fs = rt, Ps = rt, Ns = rt, Ms = rt, Ls = rt, Us = rt, Hs = rt, Ws = rt, Vs = rt, zs = rt, Xs = rt, Gs = rt, js = rt, Ks = rt, Ys = rt, $s = rt, Zs = rt, Qs = rt, qs = rt, Js = rt, ei = rt, ti = rt, ri = rt, ni = rt, ai = rt, si = rt, ii = rt, oi = rt, fi = rt, li = rt, ci = rt, hi = rt, ui = rt, di = rt, pi = rt, mi = rt, gi = rt, bi = rt, vi = rt, Ei = rt, Si = rt, Bi = rt, wi = rt, Ci = rt, _i = rt, Ti = rt, ki = rt, xi = rt, Ai = rt, Ii = rt, yi = rt, Ri = rt, Di = rt, Oi = rt, Fi = rt, Pi = nn, Ni = rt, Mi = rt, Li = rt, Ui = rt, Hi = rt, Wi = rt, Vi = rt, zi = rt, Xi = rt, Gi = rt, ji = rt, Ki = rt, Yi = rt, $i = rt, Zi = rt, Qi = rt, qi = rt, Ji = rt, eo = rt, to = rt, ro = rt, no = rt, ao = rt, so = rt, io = rt, oo = rt, fo = rt, lo = rt, co = rt, ho = rt, uo = rt, po = rt, mo = rt, go = rt, bo = rt, vo = rt, Eo = rt, So = rt, Bo = rt, wo = rt, Co = rt, _o = rt, To = rt, ko = rt, xo = rt, Ao = rt, Io = rt, yo = rt, Ro = rt, Do = rt, Oo = rt, Fo = rt, Po = rt, No = rt, Mo = rt, Lo = rt, Uo = rt, Ho = rt, Wo = rt, Vo = rt, zo = rt, Xo = rt, Go = rt, jo = rt, Ko = rt, Yo = rt, $o = rt, Zo = rt, Qo = rt, qo = rt, Jo = rt, ef = rt, tf = rt, rf = rt, nf = rt, af = rt, sf = rt, of = rt, ff = rt, lf = rt, cf = rt, hf = rt, uf = rt, df = rt, pf = rt, mf = rt, gf = rt, bf = rt, vf = rt, Ef = rt, Sf = rt, Bf = rt, wf = rt, Cf = rt, _f = rt, Tf = rt, kf = rt, xf = rt, Af = rt, If = rt, yf = rt, Rf = rt, Df = rt, Of = rt, Ff = rt, Pf = rt, Nf = rt, Mf = rt, Lf = rt, Uf = rt, Hf = rt, Wf = rt, Vf = rt, zf = rt, Xf = rt, Gf = rt, jf = rt, Kf = rt, Yf = rt, $f = rt, Zf = rt, Qf = rt, qf = rt, Jf = rt, el = rt, tl = rt, rl = rt, nl = rt, al = rt, sl = rt, il = rt, ol = rt, fl = rt, ll = rt, cl = rt, hl = rt, ul = rt, dl = rt, pl = rt, ml = rt, gl = rt, bl = rt;
var vl = function() {
var e = {
1: 437,
2: 850,
3: 1252,
4: 1e4,
100: 852,
101: 866,
102: 865,
103: 861,
104: 895,
105: 620,
106: 737,
107: 857,
120: 950,
121: 949,
122: 936,
123: 932,
124: 874,
125: 1255,
126: 1256,
150: 10007,
151: 10029,
152: 10006,
200: 1250,
201: 1251,
202: 1254,
203: 1253,
0: 20127,
8: 865,
9: 437,
10: 850,
11: 437,
13: 437,
14: 850,
15: 437,
16: 850,
17: 437,
18: 850,
19: 932,
20: 850,
21: 437,
22: 850,
23: 865,
24: 437,
25: 437,
26: 850,
27: 437,
28: 863,
29: 850,
31: 852,
34: 852,
35: 852,
36: 860,
37: 850,
38: 866,
55: 850,
64: 852,
77: 936,
78: 949,
79: 950,
80: 874,
87: 1252,
88: 1252,
89: 1252,
255: 16969
};
function t(t, r) {
var n = r || {};
n.dateNF || (n.dateNF = "yyyymmdd");
return At(function(t, r) {
var n = [], a = c(1);
switch (r.type) {
case "base64":
a = h(f.decode(t));
break;

case "binary":
a = h(t);
break;

case "buffer":
case "array":
a = t;
}
tt(a, 0);
var s = a.read_shift(1), i = !1, o = !1;
switch (s) {
case 2:
case 3:
break;

case 48:
o = !0;
i = !0;
break;

case 49:
o = !0;
break;

case 131:
case 139:
case 245:
i = !0;
break;

default:
throw new Error("DBF Unsupported Version: " + s.toString(16));
}
new Date();
var l = 0, u = 0;
2 == s && (l = a.read_shift(2));
new Date(a.read_shift(1) + 1900, a.read_shift(1) - 1, a.read_shift(1));
2 != s && (l = a.read_shift(4));
2 != s && (u = a.read_shift(2));
var d = a.read_shift(2), p = 1252;
if (2 != s) {
a.l += 16;
a.read_shift(1);
0 !== a[a.l] && (p = e[a[a.l]]);
a.l += 1;
a.l += 2;
}
for (var m = [], g = {}, b = u - 10 - (o ? 264 : 0); 2 == s ? a.l < a.length && 13 != a[a.l] : a.l < b; ) {
(g = {}).name = cptable.utils.decode(p, a.slice(a.l, a.l + 10)).replace(/[\u0000\r\n].*$/g, "");
a.l += 11;
g.type = String.fromCharCode(a.read_shift(1));
2 != s && (g.offset = a.read_shift(4));
g.len = a.read_shift(1);
2 == s && (g.offset = a.read_shift(2));
g.dec = a.read_shift(1);
g.name.length && m.push(g);
2 != s && (a.l += 14);
switch (g.type) {
case "C":
case "D":
case "F":
case "I":
case "L":
case "M":
case "N":
case "T":
case "Y":
case "0":
case "+":
case "@":
break;

default:
throw new Error("Unknown Field Type: " + g.type);
}
}
13 !== a[a.l] ? a.l = u - 1 : 2 == s && (a.l = 521);
if (2 != s) {
if (13 !== a.read_shift(1)) throw new Error("DBF Terminator not found " + a.l + " " + a[a.l]);
a.l = u;
}
var v = 0, E = 0;
n[0] = [];
for (E = 0; E != m.length; ++E) n[0][E] = m[E].name;
for (;l-- > 0; ) if (42 !== a[a.l]) {
++a.l;
n[++v] = [];
E = 0;
for (E = 0; E != m.length; ++E) {
var S = a.slice(a.l, a.l + m[E].len);
a.l += m[E].len;
tt(S, 0);
var B = cptable.utils.decode(p, S);
switch (m[E].type) {
case "C":
n[v][E] = cptable.utils.decode(p, S);
n[v][E] = n[v][E].trim();
break;

case "D":
8 === B.length ? n[v][E] = new Date(+B.substr(0, 4), +B.substr(4, 2) - 1, +B.substr(6, 2)) : n[v][E] = B;
break;

case "F":
n[v][E] = parseFloat(B.trim());
break;

case "I":
n[v][E] = S.read_shift(4, "i");
break;

case "L":
switch (B.toUpperCase()) {
case "Y":
case "T":
n[v][E] = !0;
break;

case "N":
case "F":
n[v][E] = !1;
break;

case " ":
case "?":
n[v][E] = !1;
break;

default:
throw new Error("DBF Unrecognized L:|" + B + "|");
}
break;

case "M":
if (!i) throw new Error("DBF Unexpected MEMO for type " + s.toString(16));
n[v][E] = "##MEMO##" + S.read_shift(4);
break;

case "N":
n[v][E] = +B.replace(/\u0000/g, "").trim();
break;

case "T":
var w = S.read_shift(4), C = S.read_shift(4);
throw new Error(w + " | " + C);

case "Y":
n[v][E] = S.read(4, "i") / 1e4;
break;

case "0":
if ("_NullFlags" === m[E].name) break;

default:
throw new Error("DBF Unsupported data type " + m[E].type);
}
}
} else a.l += d;
if (2 != s && a.l < a.length && 26 != a[a.l++]) throw new Error("DBF EOF Marker missing " + (a.l - 1) + " of " + a.length + " " + a[a.l - 1].toString(16));
return n;
}(t, n), n);
}
return {
to_workbook: function(e, r) {
try {
return xt(t(e, r), r);
} catch (e) {
if (r && r.WTF) throw e;
}
return {
SheetNames: [],
Sheets: {}
};
},
to_sheet: t
};
}(), El = function() {
function e(e, t) {
for (var r, n = e.split(/[\n\r]+/), a = -1, s = -1, i = 0, o = 0, f = [], l = [], c = null, h = {}, u = [], d = [], p = [], g = 0; i !== n.length; ++i) {
g = 0;
var b, v = n[i].trim(), E = v.replace(/;;/g, "").split(";").map(function(e) {
return e.replace(/\u0001/g, ";");
}), S = E[0];
if (v.length > 0) switch (S) {
case "ID":
case "E":
case "B":
case "O":
break;

case "P":
"P" == E[1].charAt(0) && l.push(v.substr(3).replace(/;;/g, ";"));
break;

case "C":
for (o = 1; o < E.length; ++o) switch (E[o].charAt(0)) {
case "X":
s = parseInt(E[o].substr(1)) - 1;
break;

case "Y":
a = parseInt(E[o].substr(1)) - 1;
s = 0;
for (r = f.length; r <= a; ++r) f[r] = [];
break;

case "K":
if ('"' === (b = E[o].substr(1)).charAt(0)) b = b.substr(1, b.length - 2); else if ("TRUE" === b) b = !0; else if ("FALSE" === b) b = !1; else if (+b == +b) {
b = +b;
null !== c && m.is_date(c) && (b = x(b));
} else isNaN(M(b).getDate()) || (b = O(b));
f[a][s] = b;
c = null;
break;

case "E":
var B = Lc(E[o].substr(1), {
r: a,
c: s
});
f[a][s] = [ f[a][s], B ];
break;

default:
if (t && t.WTF) throw new Error("SYLK bad record " + v);
}
break;

case "F":
var w = 0;
for (o = 1; o < E.length; ++o) switch (E[o].charAt(0)) {
case "X":
s = parseInt(E[o].substr(1)) - 1;
++w;
break;

case "Y":
a = parseInt(E[o].substr(1)) - 1;
for (r = f.length; r <= a; ++r) f[r] = [];
break;

case "M":
g = parseInt(E[o].substr(1)) / 20;
break;

case "F":
break;

case "P":
c = l[parseInt(E[o].substr(1))];
break;

case "S":
case "D":
case "N":
break;

case "W":
p = E[o].substr(1).split(" ");
for (r = parseInt(p[0], 10); r <= parseInt(p[1], 10); ++r) {
g = parseInt(p[2], 10);
d[r - 1] = 0 == g ? {
hidden: !0
} : {
wch: g
};
nc(d[r - 1]);
}
break;

case "C":
d[s = parseInt(E[o].substr(1)) - 1] || (d[s] = {});
break;

case "R":
u[a = parseInt(E[o].substr(1)) - 1] || (u[a] = {});
if (g > 0) {
u[a].hpt = g;
u[a].hpx = ic(g);
} else 0 == g && (u[a].hidden = !0);
break;

default:
if (t && t.WTF) throw new Error("SYLK bad record " + v);
}
w < 1 && (c = null);
break;

default:
if (t && t.WTF) throw new Error("SYLK bad record " + v);
}
}
u.length > 0 && (h["!rows"] = u);
d.length > 0 && (h["!cols"] = d);
return [ f, h ];
}
function t(t, r) {
var n = function(t, r) {
switch (r.type) {
case "base64":
return e(f.decode(t), r);

case "binary":
return e(t, r);

case "buffer":
return e(t.toString("binary"), r);

case "array":
return e(F(t), r);
}
throw new Error("Unrecognized type " + r.type);
}(t, r), a = n[0], s = n[1], i = At(a, r);
B(s).forEach(function(e) {
i[e] = s[e];
});
return i;
}
function r(e, t, r, n, a) {
var s = "C;Y" + (r + 1) + ";X" + (n + 1) + ";K";
switch (e.t) {
case "n":
s += e.v || 0;
e.f && !e.F && (s += ";E" + Hc(e.f, {
r: r,
c: n
}));
break;

case "b":
s += e.v ? "TRUE" : "FALSE";
break;

case "e":
s += e.w || e.v;
break;

case "d":
s += '"' + (e.w || e.v) + '"';
break;

case "s":
s += '"' + e.v.replace(/"/g, "") + '"';
}
return s;
}
return {
to_workbook: function(e, r) {
return xt(t(e, r), r);
},
to_sheet: t,
from_sheet: function(e, t) {
var n, a = [ "ID;PWXL;N;E" ], s = [], i = wt(e["!ref"]), o = Array.isArray(e), f = "\r\n";
a.push("P;PGeneral");
a.push("F;P0;DG0G8;M255");
e["!cols"] && function(e, t) {
t.forEach(function(t, r) {
var n = "F;W" + (r + 1) + " " + (r + 1) + " ";
if (t.hidden) n += "0"; else {
"number" == typeof t.width && (t.wpx = ql(t.width));
"number" == typeof t.wpx && (t.wch = Jl(t.wpx));
"number" == typeof t.wch && (n += Math.round(t.wch));
}
" " != n.charAt(n.length - 1) && e.push(n);
});
}(a, e["!cols"]);
e["!rows"] && function(e, t) {
t.forEach(function(t, r) {
var n = "F;";
t.hidden ? n += "M0;" : t.hpt ? n += "M" + 20 * t.hpt + ";" : t.hpx && (n += "M" + 20 * sc(t.hpx) + ";");
n.length > 2 && e.push(n + "R" + (r + 1));
});
}(a, e["!rows"]);
a.push("B;Y" + (i.e.r - i.s.r + 1) + ";X" + (i.e.c - i.s.c + 1) + ";D" + [ i.s.c, i.s.r, i.e.c, i.e.r ].join(" "));
for (var l = i.s.r; l <= i.e.r; ++l) for (var c = i.s.c; c <= i.e.c; ++c) {
var h = Bt({
r: l,
c: c
});
(n = o ? (e[l] || [])[c] : e[h]) && (null != n.v || n.f && !n.F) && s.push(r(n, 0, l, c));
}
return a.join(f) + f + s.join(f) + f + "E" + f;
}
};
}(), Sl = function() {
function e(e, t) {
for (var r = e.split("\n"), n = -1, a = -1, s = 0, i = []; s !== r.length; ++s) if ("BOT" !== r[s].trim()) {
if (!(n < 0)) {
var o = r[s].trim().split(","), f = o[0], l = o[1], c = r[++s].trim();
switch (+f) {
case -1:
if ("BOT" === c) {
i[++n] = [];
a = 0;
continue;
}
if ("EOD" !== c) throw new Error("Unrecognized DIF special command " + c);
break;

case 0:
"TRUE" === c ? i[n][a] = !0 : "FALSE" === c ? i[n][a] = !1 : +l == +l ? i[n][a] = +l : isNaN(M(l).getDate()) ? i[n][a] = l : i[n][a] = O(l);
++a;
break;

case 1:
c = c.substr(1, c.length - 2);
i[n][a++] = "" !== c ? c : null;
}
if ("EOD" === c) break;
}
} else {
i[++n] = [];
a = 0;
}
return i;
}
function t(t, r) {
return At(function(t, r) {
switch (r.type) {
case "base64":
return e(f.decode(t));

case "binary":
return e(t);

case "buffer":
return e(t.toString("binary"));

case "array":
return e(F(t));
}
throw new Error("Unrecognized type " + r.type);
}(t, r), r);
}
return {
to_workbook: function(e, r) {
return xt(t(e, r), r);
},
to_sheet: t,
from_sheet: function() {
var e = function(e, t, r, n, a) {
e.push(t);
e.push(r + "," + n);
e.push('"' + a.replace(/"/g, '""') + '"');
}, t = function(e, t, r, n) {
e.push(t + "," + r);
e.push(1 == t ? '"' + n.replace(/"/g, '""') + '"' : n);
};
return function(r, n) {
var a, s = [], i = wt(r["!ref"]), o = Array.isArray(r);
e(s, "TABLE", 0, 1, "sheetjs");
e(s, "VECTORS", 0, i.e.r - i.s.r + 1, "");
e(s, "TUPLES", 0, i.e.c - i.s.c + 1, "");
e(s, "DATA", 0, 0, "");
for (var f = i.s.r; f <= i.e.r; ++f) {
t(s, -1, 0, "BOT");
for (var l = i.s.c; l <= i.e.c; ++l) {
var c = Bt({
r: f,
c: l
});
if (a = o ? (r[f] || [])[l] : r[c]) switch (a.t) {
case "n":
var h = a.w;
h || null == a.v || (h = a.v);
null == h ? a.f && !a.F ? t(s, 1, 0, "=" + a.f) : t(s, 1, 0, "") : t(s, 0, h, "V");
break;

case "b":
t(s, 0, a.v ? 1 : 0, a.v ? "TRUE" : "FALSE");
break;

case "s":
t(s, 1, 0, isNaN(a.v) ? a.v : '="' + a.v + '"');
break;

case "d":
a.w || (a.w = m.format(a.z || m._table[14], k(O(a.v))));
t(s, 0, a.w, "V");
break;

default:
t(s, 1, 0, "");
} else t(s, 1, 0, "");
}
}
t(s, -1, 0, "EOD");
return s.join("\r\n");
};
}()
};
}(), Bl = function() {
function e(e, t, r, n) {
"TRUE" === e ? t[r][n] = !0 : "FALSE" === e ? t[r][n] = !1 : "" === e || (+e == +e ? t[r][n] = +e : isNaN(M(e).getDate()) ? t[r][n] = e : t[r][n] = O(e));
}
function t(e, t) {
var r = t || {}, n = "";
null != o && null == r.dense && (r.dense = o);
var a = r.dense ? [] : {}, s = {
s: {
c: 0,
r: 0
},
e: {
c: 0,
r: 0
}
};
if ("sep=" == e.substr(0, 4) && 10 == e.charCodeAt(5)) {
n = e.charAt(4);
e = e.substr(6);
} else n = -1 == e.substr(0, 1024).indexOf("\t") ? "," : "\t";
var i = 0, f = 0, l = 0, c = 0, h = 0, u = n.charCodeAt(0), d = !1, p = 0;
e = e.replace(/\r\n/gm, "\n");
var g = null != r.dateNF ? function(e) {
var t = "number" == typeof e ? m._table[e] : e;
t = t.replace(v, "(\\d+)");
return new RegExp("^" + t + "$");
}(r.dateNF) : null;
function b() {
var t = e.slice(c, h), n = {};
if (61 == t.charCodeAt(0)) {
n.t = "n";
n.f = t.substr(1);
} else if ("TRUE" == t) {
n.t = "b";
n.v = !0;
} else if ("FALSE" == t) {
n.t = "b";
n.v = !1;
} else if (isNaN(l = +t)) if (!isNaN(M(t).getDate()) || g && t.match(g)) {
n.z = r.dateNF || m._table[14];
var o = 0;
if (g && t.match(g)) {
t = function(e, t, r) {
var n = -1, a = -1, s = -1, i = -1, o = -1, f = -1;
(t.match(v) || []).forEach(function(e, t) {
var l = parseInt(r[t + 1], 10);
switch (e.toLowerCase().charAt(0)) {
case "y":
n = l;
break;

case "d":
s = l;
break;

case "h":
i = l;
break;

case "s":
f = l;
break;

case "m":
i >= 0 ? o = l : a = l;
}
});
if (f >= 0 && -1 == o && a >= 0) {
o = a;
a = -1;
}
var l = ("" + (n >= 0 ? n : new Date().getFullYear())).slice(-4) + "-" + ("00" + (a >= 1 ? a : 1)).slice(-2) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2);
7 == l.length && (l = "0" + l);
8 == l.length && (l = "20" + l);
var c = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2);
return -1 == i && -1 == o && -1 == f ? l : -1 == n && -1 == a && -1 == s ? c : l + "T" + c;
}(0, r.dateNF, t.match(g) || []);
o = 1;
}
if (r.cellDates) {
n.t = "d";
n.v = O(t, o);
} else {
n.t = "n";
n.v = k(O(t, o));
}
n.w = m.format(n.z, n.v instanceof Date ? k(n.v) : n.v);
} else {
n.t = "s";
'"' == t.charAt(0) && '"' == t.charAt(t.length - 1) && (t = t.slice(1, -1).replace(/""/g, '"'));
n.v = t;
} else {
n.t = "n";
n.w = t;
n.v = l;
}
if (r.dense) {
a[i] || (a[i] = []);
a[i][f] = n;
} else a[Bt({
c: f,
r: i
})] = n;
c = h + 1;
s.e.c < f && (s.e.c = f);
s.e.r < i && (s.e.r = i);
if (p == u) ++f; else {
f = 0;
++i;
}
}
for (;h < e.length; ++h) switch (p = e.charCodeAt(h)) {
case 34:
d = !d;
break;

case u:
case 10:
case 13:
d || b();
}
h - c > 0 && b();
a["!ref"] = Ct(s);
return a;
}
function r(r, n) {
return "sep=" == r.substr(0, 4) ? t(r, n) : r.indexOf("\t") >= 0 || r.indexOf(",") >= 0 ? t(r, n) : At(function(t, r) {
var n = [];
if (!t || 0 === t.length) return n;
for (var a = t.split(/[\r\n]/), s = a.length - 1; s >= 0 && 0 === a[s].length; ) --s;
for (var i = 10, o = 0, f = 0; f <= s; ++f) {
-1 == (o = a[f].indexOf(" ")) ? o = a[f].length : o++;
i = Math.max(i, o);
}
for (f = 0; f <= s; ++f) {
n[f] = [];
var l = 0;
e(a[f].slice(0, i).trim(), n, f, l);
for (l = 1; l <= (a[f].length - i) / 10 + 1; ++l) e(a[f].slice(i + 10 * (l - 1), i + 10 * l).trim(), n, f, l);
}
return n;
}(r), n);
}
function n(e, t) {
var n = "", a = Td(e, t);
switch (t.type) {
case "base64":
n = f.decode(e);
break;

case "binary":
n = e;
break;

case "buffer":
n = e.toString("binary");
break;

case "array":
n = F(e);
break;

default:
throw new Error("Unrecognized type " + t.type);
}
239 == a[0] && 187 == a[1] && 191 == a[2] && (n = fe(n));
return r(n, t);
}
return {
to_workbook: function(e, t) {
return xt(n(e, t), t);
},
to_sheet: n,
from_sheet: function(e, t) {
for (var r, n = [], a = wt(e["!ref"]), s = Array.isArray(e), i = a.s.r; i <= a.e.r; ++i) {
for (var o = [], f = a.s.c; f <= a.e.c; ++f) {
var l = Bt({
r: i,
c: f
});
if ((r = s ? (e[i] || [])[f] : e[l]) && null != r.v) {
for (var c = (r.w || (kt(r), r.w) || "").substr(0, 10); c.length < 10; ) c += " ";
o.push(c + (0 == f ? " " : ""));
} else o.push("          ");
}
n.push(o.join(""));
}
return n.join("\n");
}
};
}();
var wl = function() {
function e(e, t) {
if (!e) return e;
var r = t || {};
null != o && null == r.dense && (r.dense = o);
var n = r.dense ? [] : {}, a = "Sheet1", s = 0, f = {}, c = [ a ], h = {
s: {
r: 0,
c: 0
},
e: {
r: 0,
c: 0
}
};
if (2 == e[2]) r.Enum = i; else if (26 == e[2]) r.Enum = l; else {
if (14 != e[2]) throw new Error("Unrecognized LOTUS BOF " + e[2]);
r.Enum = l;
r.qpro = !0;
e.l = 0;
}
(function(e, t, r) {
if (e) {
tt(e, e.l || 0);
for (var n = r.Enum || i; e.l < e.length; ) {
var a = e.read_shift(2), s = n[a] || n[255], o = e.read_shift(2), f = e.l + o, l = s.f(e, o, r);
e.l = f;
if (t(l, s.n, a)) return;
}
}
})(e, function(t, i, o) {
if (2 == e[2]) switch (o) {
case 0:
r.vers = t;
t >= 4096 && (r.qpro = !0);
break;

case 6:
h = t;
break;

case 15:
r.qpro || (t[1].v = t[1].v.substr(1));

case 13:
case 14:
case 16:
case 51:
if (14 == o && 112 == (112 & t[2]) && (15 & t[2]) > 1 && (15 & t[2]) < 15) {
t[1].z = r.dateNF || m._table[14];
if (r.cellDates) {
t[1].t = "d";
t[1].v = x(t[1].v);
}
}
if (r.dense) {
n[t[0].r] || (n[t[0].r] = []);
n[t[0].r][t[0].c] = t[1];
} else n[Bt(t[0])] = t[1];
} else switch (o) {
case 22:
t[1].v = t[1].v.substr(1);

case 23:
case 24:
case 25:
case 37:
case 39:
case 40:
if (t[3] > s) {
n["!ref"] = Ct(h);
f[a] = n;
n = r.dense ? [] : {};
h = {
s: {
r: 0,
c: 0
},
e: {
r: 0,
c: 0
}
};
s = t[3];
a = "Sheet" + (s + 1);
c.push(a);
}
n[Bt(t[0])] = t[1];
h.e.c < t[0].c && (h.e.c = t[0].c);
h.e.r < t[0].r && (h.e.r = t[0].r);
}
}, r);
n["!ref"] = Ct(h);
f[a] = n;
return {
SheetNames: c,
Sheets: f
};
}
function t(e, t, r) {
var n = [ {
c: 0,
r: 0
}, {
t: "n",
v: 0
}, 0 ];
if (r.qpro && 20768 != r.vers) {
n[0].c = e.read_shift(1);
e.l++;
n[0].r = e.read_shift(2);
e.l += 2;
} else {
n[2] = e.read_shift(1);
n[0].c = e.read_shift(2);
n[0].r = e.read_shift(2);
}
return n;
}
function r(e, r, n) {
var a = e.l + r, s = t(e, 0, n);
s[1].t = "s";
if (20768 == n.vers) {
e.l++;
var i = e.read_shift(1);
s[1].v = e.read_shift(i, "utf8");
return s;
}
n.qpro && e.l++;
s[1].v = e.read_shift(a - e.l, "cstr");
return s;
}
function n(e, t) {
var r = [ {
c: 0,
r: 0
}, {
t: "n",
v: 0
}, 0 ];
r[0].r = e.read_shift(2);
r[3] = e[e.l++];
r[0].c = e[e.l++];
return r;
}
function a(e, t) {
var r = n(e), a = e.read_shift(4), s = e.read_shift(4), i = e.read_shift(2);
if (65535 == i) {
r[1].v = 0;
return r;
}
i = (32767 & i) - 16446;
r[1].v = (i > 0 ? s << i : s >>> -i) + (i > -32 ? a << i + 32 : a >>> -(i + 32));
return r;
}
function s(e, t) {
var r = n(e), a = e.read_shift(8, "f");
r[1].v = a;
return r;
}
var i = {
0: {
n: "BOF",
f: qr
},
1: {
n: "EOF",
f: rt
},
2: {
n: "CALCMODE",
f: rt
},
3: {
n: "CALCORDER",
f: rt
},
4: {
n: "SPLIT",
f: rt
},
5: {
n: "SYNC",
f: rt
},
6: {
n: "RANGE",
f: function(e, t) {
var r = {
s: {
c: 0,
r: 0
},
e: {
c: 0,
r: 0
}
};
r.s.c = e.read_shift(2);
r.s.r = e.read_shift(2);
r.e.c = e.read_shift(2);
r.e.r = e.read_shift(2);
65535 == r.s.c && (r.s.c = r.e.c = r.s.r = r.e.r = 0);
return r;
}
},
7: {
n: "WINDOW1",
f: rt
},
8: {
n: "COLW1",
f: rt
},
9: {
n: "WINTWO",
f: rt
},
10: {
n: "COLW2",
f: rt
},
11: {
n: "NAME",
f: rt
},
12: {
n: "BLANK",
f: rt
},
13: {
n: "INTEGER",
f: function(e, r, n) {
var a = t(e, 0, n);
a[1].v = e.read_shift(2, "i");
return a;
}
},
14: {
n: "NUMBER",
f: function(e, r, n) {
var a = t(e, 0, n);
a[1].v = e.read_shift(8, "f");
return a;
}
},
15: {
n: "LABEL",
f: r
},
16: {
n: "FORMULA",
f: function(e, r, n) {
var a = e.l + r, s = t(e, 0, n);
s[1].v = e.read_shift(8, "f");
if (n.qpro) e.l = a; else {
var i = e.read_shift(2);
e.l += i;
}
return s;
}
},
24: {
n: "TABLE",
f: rt
},
25: {
n: "ORANGE",
f: rt
},
26: {
n: "PRANGE",
f: rt
},
27: {
n: "SRANGE",
f: rt
},
28: {
n: "FRANGE",
f: rt
},
29: {
n: "KRANGE1",
f: rt
},
32: {
n: "HRANGE",
f: rt
},
35: {
n: "KRANGE2",
f: rt
},
36: {
n: "PROTEC",
f: rt
},
37: {
n: "FOOTER",
f: rt
},
38: {
n: "HEADER",
f: rt
},
39: {
n: "SETUP",
f: rt
},
40: {
n: "MARGINS",
f: rt
},
41: {
n: "LABELFMT",
f: rt
},
42: {
n: "TITLES",
f: rt
},
43: {
n: "SHEETJS",
f: rt
},
45: {
n: "GRAPH",
f: rt
},
46: {
n: "NGRAPH",
f: rt
},
47: {
n: "CALCCOUNT",
f: rt
},
48: {
n: "UNFORMATTED",
f: rt
},
49: {
n: "CURSORW12",
f: rt
},
50: {
n: "WINDOW",
f: rt
},
51: {
n: "STRING",
f: r
},
55: {
n: "PASSWORD",
f: rt
},
56: {
n: "LOCKED",
f: rt
},
60: {
n: "QUERY",
f: rt
},
61: {
n: "QUERYNAME",
f: rt
},
62: {
n: "PRINT",
f: rt
},
63: {
n: "PRINTNAME",
f: rt
},
64: {
n: "GRAPH2",
f: rt
},
65: {
n: "GRAPHNAME",
f: rt
},
66: {
n: "ZOOM",
f: rt
},
67: {
n: "SYMSPLIT",
f: rt
},
68: {
n: "NSROWS",
f: rt
},
69: {
n: "NSCOLS",
f: rt
},
70: {
n: "RULER",
f: rt
},
71: {
n: "NNAME",
f: rt
},
72: {
n: "ACOMM",
f: rt
},
73: {
n: "AMACRO",
f: rt
},
74: {
n: "PARSE",
f: rt
},
255: {
n: "",
f: rt
}
}, l = {
0: {
n: "BOF",
f: rt
},
1: {
n: "EOF",
f: rt
},
3: {
n: "??",
f: rt
},
4: {
n: "??",
f: rt
},
5: {
n: "??",
f: rt
},
6: {
n: "??",
f: rt
},
7: {
n: "??",
f: rt
},
9: {
n: "??",
f: rt
},
10: {
n: "??",
f: rt
},
11: {
n: "??",
f: rt
},
12: {
n: "??",
f: rt
},
14: {
n: "??",
f: rt
},
15: {
n: "??",
f: rt
},
16: {
n: "??",
f: rt
},
17: {
n: "??",
f: rt
},
18: {
n: "??",
f: rt
},
19: {
n: "??",
f: rt
},
21: {
n: "??",
f: rt
},
22: {
n: "LABEL16",
f: function(e, t) {
var r = n(e);
r[1].t = "s";
r[1].v = e.read_shift(t - 4, "cstr");
return r;
}
},
23: {
n: "NUMBER17",
f: a
},
24: {
n: "NUMBER18",
f: function(e, t) {
var r = n(e);
r[1].v = e.read_shift(2);
var a = r[1].v >> 1;
if (1 & r[1].v) switch (7 & a) {
case 1:
a = 500 * (a >> 3);
break;

case 2:
a = (a >> 3) / 20;
break;

case 4:
a = (a >> 3) / 2e3;
break;

case 6:
a = (a >> 3) / 16;
break;

case 7:
a = (a >> 3) / 64;
break;

default:
throw "unknown NUMBER_18 encoding " + (7 & a);
}
r[1].v = a;
return r;
}
},
25: {
n: "FORMULA19",
f: function(e, t) {
var r = a(e);
e.l += t - 14;
return r;
}
},
26: {
n: "??",
f: rt
},
27: {
n: "??",
f: rt
},
28: {
n: "??",
f: rt
},
29: {
n: "??",
f: rt
},
30: {
n: "??",
f: rt
},
31: {
n: "??",
f: rt
},
33: {
n: "??",
f: rt
},
37: {
n: "NUMBER25",
f: function(e, t) {
var r = n(e), a = e.read_shift(4);
r[1].v = a >> 6;
return r;
}
},
39: {
n: "NUMBER27",
f: s
},
40: {
n: "FORMULA28",
f: function(e, t) {
var r = s(e);
e.l += t - 10;
return r;
}
},
255: {
n: "",
f: rt
}
};
return {
to_workbook: function(t, r) {
switch (r.type) {
case "base64":
return e(h(f.decode(t)), r);

case "binary":
return e(h(t), r);

case "buffer":
case "array":
return e(t, r);
}
throw "Unsupported type " + r.type;
}
};
}(), Cl = {
0: 1252,
1: 65001,
2: 65001,
77: 1e4,
128: 932,
129: 949,
130: 1361,
134: 936,
136: 950,
161: 1253,
162: 1254,
163: 1258,
177: 1255,
178: 1256,
186: 1257,
204: 1251,
222: 874,
238: 1250,
255: 1252,
69: 6969
}, _l = function() {
var e = ue("t"), t = ue("rPr"), r = /<(?:\w+:)?r>/g, n = /<\/(?:\w+:)?r>/, a = /\r\n/g, s = function(e, t, r) {
var n = {}, a = 65001, s = "", i = e.match(j), o = 0;
if (i) for (;o != i.length; ++o) {
var f = $(i[o]);
switch (f[0].replace(/\w*:/g, "")) {
case "<condense":
case "<extend":
break;

case "<shadow":
if (!f.val) break;

case "<shadow>":
case "<shadow/>":
n.shadow = 1;
break;

case "</shadow>":
break;

case "<charset":
if ("1" == f.val) break;
a = Cl[parseInt(f.val, 10)];
break;

case "<outline":
if (!f.val) break;

case "<outline>":
case "<outline/>":
n.outline = 1;
break;

case "</outline>":
break;

case "<rFont":
n.name = f.val;
break;

case "<sz":
n.sz = f.val;
break;

case "<strike":
if (!f.val) break;

case "<strike>":
case "<strike/>":
n.strike = 1;
break;

case "</strike>":
break;

case "<u":
if (!f.val) break;
switch (f.val) {
case "double":
n.uval = "double";
break;

case "singleAccounting":
n.uval = "single-accounting";
break;

case "doubleAccounting":
n.uval = "double-accounting";
}

case "<u>":
case "<u/>":
n.u = 1;
break;

case "</u>":
break;

case "<b":
if ("0" == f.val) break;

case "<b>":
case "<b/>":
n.b = 1;
break;

case "</b>":
break;

case "<i":
if ("0" == f.val) break;

case "<i>":
case "<i/>":
n.i = 1;
break;

case "</i>":
break;

case "<color":
f.rgb && (n.color = f.rgb.substr(2, 6));
break;

case "<family":
n.family = f.val;
break;

case "<vertAlign":
s = f.val;
break;

case "<scheme":
break;

default:
if (47 !== f[0].charCodeAt(1)) throw "Unrecognized rich format " + f[0];
}
}
var l = [];
n.u && l.push("text-decoration: underline;");
n.uval && l.push("text-underline-style:" + n.uval + ";");
n.sz && l.push("font-size:" + n.sz + ";");
n.outline && l.push("text-effect: outline;");
n.shadow && l.push("text-shadow: auto;");
t.push('<span style="' + l.join("") + '">');
if (n.b) {
t.push("<b>");
r.push("</b>");
}
if (n.i) {
t.push("<i>");
r.push("</i>");
}
if (n.strike) {
t.push("<s>");
r.push("</s>");
}
"superscript" == s ? s = "sup" : "subscript" == s && (s = "sub");
if ("" != s) {
t.push("<" + s + ">");
r.push("</" + s + ">");
}
r.push("</span>");
return a;
};
function i(r) {
var n = [ [], "", [] ], i = r.match(e);
if (!S(i)) return "";
n[1] = i[1];
var o = r.match(t);
S(o) && s(o[1], n[0], n[2]);
return n[0].join("") + n[1].replace(a, "<br/>") + n[2].join("");
}
return function(e) {
return e.replace(r, "").split(n).map(i).join("");
};
}(), Tl = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, kl = /<(?:\w+:)?r>/, xl = /<(?:\w+:)?rPh.*?>(.*?)<\/(?:\w+:)?rPh>/g;
function Al(e, t) {
var r = !t || t.cellHTML, n = {};
if (!e) return null;
if (e.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
n.t = fe(q(e.substr(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0]));
n.r = fe(e);
r && (n.h = ae(n.t));
} else if (e.match(kl)) {
n.r = fe(e);
n.t = fe(q((e.replace(xl, "").match(Tl) || []).join("").replace(j, "")));
r && (n.h = _l(n.r));
}
return n;
}
var Il = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, yl = /<(?:\w+:)?(?:si|sstItem)>/g, Rl = /<\/(?:\w+:)?(?:si|sstItem)>/;
gr.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
var Dl = /^\s|\s$|[\t\n\r]/;
var Ol = function(e, t) {
var r = !1;
if (null == t) {
r = !0;
t = nt(15 + 4 * e.t.length);
}
t.write_shift(1, 0);
Rt(e.t, t);
return r ? t.slice(0, t.l) : t;
};
function Fl(e, t) {
var r = st();
it(r, "BrtBeginSst", function(e, t) {
t || (t = nt(8));
t.write_shift(4, e.Count);
t.write_shift(4, e.Unique);
return t;
}(e));
for (var n = 0; n < e.length; ++n) it(r, "BrtSSTItem", Ol(e[n]));
it(r, "BrtEndSst");
return r.end();
}
function Pl(e) {
if ("undefined" != typeof cptable) return cptable.utils.encode(1252, e);
for (var t = [], r = e.split(""), n = 0; n < r.length; ++n) t[n] = r[n].charCodeAt(0);
return t;
}
function Nl(e, t) {
var r = {};
r.Major = e.read_shift(2);
r.Minor = e.read_shift(2);
t >= 4 && (e.l += t - 4);
return r;
}
function Ml(e) {
for (var t = e.read_shift(4), r = (e.l, {}), n = e.read_shift(4), a = []; n-- > 0; ) {
var s = {};
s.t = e.read_shift(4);
s.v = e.read_shift(0, "lpp4");
a.push(s);
}
r.name = e.read_shift(0, "lpp4");
r.comps = a;
return r;
}
function Ll(e, t) {
var r = function(e, t) {
var r = {};
e.read_shift(4);
e.l;
e.l += 4;
r.id = e.read_shift(0, "lpp4");
r.name = e.read_shift(0, "lpp4");
r.R = Nl(e, 4);
r.U = Nl(e, 4);
r.W = Nl(e, 4);
return r;
}(e);
r.ename = e.read_shift(0, "8lpp4");
r.blksz = e.read_shift(4);
r.cmode = e.read_shift(4);
if (4 != e.read_shift(4)) throw new Error("Bad !Primary record");
return r;
}
function Ul(e, t) {
var r = e.l + t, n = {};
n.Flags = 63 & e.read_shift(4);
e.l += 4;
n.AlgID = e.read_shift(4);
var a = !1;
switch (n.AlgID) {
case 26126:
case 26127:
case 26128:
a = 36 == n.Flags;
break;

case 26625:
a = 4 == n.Flags;
break;

case 0:
a = 16 == n.Flags || 4 == n.Flags || 36 == n.Flags;
break;

default:
throw "Unrecognized encryption algorithm: " + n.AlgID;
}
if (!a) throw new Error("Encryption Flags/AlgID mismatch");
n.AlgIDHash = e.read_shift(4);
n.KeySize = e.read_shift(4);
n.ProviderType = e.read_shift(4);
e.l += 8;
n.CSPName = e.read_shift(r - e.l >> 1, "utf16le").slice(0, -1);
e.l = r;
return n;
}
function Hl(e, t) {
var r = {};
e.l += 4;
r.Salt = e.slice(e.l, e.l + 16);
e.l += 16;
r.Verifier = e.slice(e.l, e.l + 16);
e.l += 16;
var n = e.read_shift(4);
r.VerifierHash = e.slice(e.l, e.l + n);
e.l += n;
return r;
}
function Wl(e, t) {
var r = Nl(e);
switch (r.Minor) {
case 2:
return function(e, t) {
if (36 != (63 & e.read_shift(4))) throw new Error("EncryptionInfo mismatch");
var r = e.read_shift(4), n = (e.l, Ul(e, r)), a = Hl(e, (e.length, e.l));
return {
t: "Std",
h: n,
v: a
};
}(e);

case 3:
return function(e, t) {
throw new Error("File is password-protected: ECMA-376 Extensible");
}();

case 4:
return function(e, t) {
throw new Error("File is password-protected: ECMA-376 Agile");
}();
}
throw new Error("ECMA-376 Encryped file unrecognized Version: " + r.Minor);
}
function Vl(e) {
var t, r, n, a = 0, s = Pl(e), i = s.length + 1;
(t = c(i))[0] = s.length;
for (r = 1; r != i; ++r) t[r] = s[r - 1];
for (r = i - 1; r >= 0; --r) {
n = t[r];
a = ((0 == (16384 & a) ? 0 : 1) | a << 1 & 32767) ^ n;
}
return 52811 ^ a;
}
var zl = function() {
var e = [ 187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0 ], t = [ 57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163 ], r = [ 44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628 ], n = function(e, t) {
return function(e) {
return 255 & (e / 2 | 128 * e);
}(e ^ t);
};
return function(a) {
for (var s, i, o, f = Pl(a), l = function(e) {
for (var n = t[e.length - 1], a = 104, s = e.length - 1; s >= 0; --s) for (var i = e[s], o = 0; 7 != o; ++o) {
64 & i && (n ^= r[a]);
i *= 2;
--a;
}
return n;
}(f), h = f.length, u = c(16), d = 0; 16 != d; ++d) u[d] = 0;
if (1 == (1 & h)) {
s = l >> 8;
u[h] = n(e[0], s);
--h;
s = 255 & l;
i = f[f.length - 1];
u[h] = n(i, s);
}
for (;h > 0; ) {
s = l >> 8;
u[--h] = n(f[h], s);
s = 255 & l;
u[--h] = n(f[h], s);
}
h = 15;
o = 15 - f.length;
for (;o > 0; ) {
s = l >> 8;
u[h] = n(e[o], s);
--o;
s = 255 & l;
u[--h] = n(f[h], s);
--h;
--o;
}
return u;
};
}(), Xl = function(e) {
var t = 0, r = zl(e);
return function(e) {
var n = function(e, t, r, n, a) {
a || (a = t);
n || (n = zl(e));
var s, i;
for (s = 0; s != t.length; ++s) {
i = t[s];
i = 255 & ((i ^= n[r]) >> 5 | i << 3);
a[s] = i;
++r;
}
return [ a, r, n ];
}("", e, t, r);
t = n[1];
return n[0];
};
};
function Gl(e, t, r) {
var n = r || {};
n.Info = e.read_shift(2);
e.l -= 2;
1 === n.Info ? n.Data = function(e, t) {
var r = {}, n = r.EncryptionVersionInfo = Nl(e, 4);
if (1 != n.Major || 1 != n.Minor) throw "unrecognized version code " + n.Major + " : " + n.Minor;
r.Salt = e.read_shift(16);
r.EncryptedVerifier = e.read_shift(16);
r.EncryptedVerifierHash = e.read_shift(16);
return r;
}(e) : n.Data = function(e, t) {
var r = {}, n = r.EncryptionVersionInfo = Nl(e, 4);
if (2 != n.Minor) throw "unrecognized minor version code: " + n.Minor;
if (n.Major > 4 || n.Major < 2) throw "unrecognized major version code: " + n.Major;
r.Flags = e.read_shift(4);
var a = e.read_shift(4);
r.EncryptionHeader = Ul(e, a);
r.EncryptionVerifier = Hl(e);
return r;
}(e);
return n;
}
function jl(e) {
for (var t = 0, r = 1; 3 != t; ++t) r = 256 * r + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
return r.toString(16).toUpperCase().substr(1);
}
function Kl(e, t) {
if (0 === t) return e;
var r = function(e) {
var t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, a = Math.max(t, r, n), s = Math.min(t, r, n), i = a - s;
if (0 === i) return [ 0, 0, t ];
var o, f = 0, l = a + s;
o = i / (l > 1 ? 2 - l : l);
switch (a) {
case t:
f = ((r - n) / i + 6) % 6;
break;

case r:
f = (n - t) / i + 2;
break;

case n:
f = (t - r) / i + 4;
}
return [ f / 6, o, l / 2 ];
}(function(e) {
var t = e.substr("#" === e[0] ? 1 : 0, 6);
return [ parseInt(t.substr(0, 2), 16), parseInt(t.substr(2, 2), 16), parseInt(t.substr(4, 2), 16) ];
}(e));
r[2] = t < 0 ? r[2] * (1 + t) : 1 - (1 - r[2]) * (1 - t);
return jl(function(e) {
var t, r = e[0], n = e[1], a = e[2], s = 2 * n * (a < .5 ? a : 1 - a), i = a - s / 2, o = [ i, i, i ], f = 6 * r;
if (0 !== n) switch (0 | f) {
case 0:
case 6:
t = s * f;
o[0] += s;
o[1] += t;
break;

case 1:
t = s * (2 - f);
o[0] += t;
o[1] += s;
break;

case 2:
t = s * (f - 2);
o[1] += s;
o[2] += t;
break;

case 3:
t = s * (4 - f);
o[1] += t;
o[2] += s;
break;

case 4:
t = s * (f - 4);
o[2] += s;
o[0] += t;
break;

case 5:
t = s * (6 - f);
o[2] += t;
o[0] += s;
}
for (var l = 0; 3 != l; ++l) o[l] = Math.round(255 * o[l]);
return o;
}(r));
}
var Yl = 6, $l = 15, Zl = 1, Ql = Yl;
function ql(e) {
return Math.floor((e + Math.round(128 / Ql) / 256) * Ql);
}
function Jl(e) {
return Math.floor((e - 5) / Ql * 100 + .5) / 100;
}
function ec(e) {
return Math.round((e * Ql + 5) / Ql * 256) / 256;
}
function tc(e) {
return ec(Jl(ql(e)));
}
function rc(e) {
var t = Math.abs(e - tc(e)), r = Ql;
if (t > .005) for (Ql = Zl; Ql < $l; ++Ql) if (Math.abs(e - tc(e)) <= t) {
t = Math.abs(e - tc(e));
r = Ql;
}
Ql = r;
}
function nc(e) {
if (e.width) {
e.wpx = ql(e.width);
e.wch = Jl(e.wpx);
e.MDW = Ql;
} else if (e.wpx) {
e.wch = Jl(e.wpx);
e.width = ec(e.wch);
e.MDW = Ql;
} else if ("number" == typeof e.wch) {
e.width = ec(e.wch);
e.wpx = ql(e.width);
e.MDW = Ql;
}
e.customWidth && delete e.customWidth;
}
var ac = 96;
function sc(e) {
return 96 * e / ac;
}
function ic(e) {
return e * ac / 96;
}
var oc = {
None: "none",
Solid: "solid",
Gray50: "mediumGray",
Gray75: "darkGray",
Gray25: "lightGray",
HorzStripe: "darkHorizontal",
VertStripe: "darkVertical",
ReverseDiagStripe: "darkDown",
DiagStripe: "darkUp",
DiagCross: "darkGrid",
ThickDiagCross: "darkTrellis",
ThinHorzStripe: "lightHorizontal",
ThinVertStripe: "lightVertical",
ThinReverseDiagStripe: "lightDown",
ThinHorzCross: "lightGrid"
};
var fc = [ "numFmtId", "fillId", "fontId", "borderId", "xfId" ], lc = [ "applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix" ];
var cc = function() {
var e = /<numFmts([^>]*)>.*<\/numFmts>/, t = /<cellXfs([^>]*)>.*<\/cellXfs>/, r = /<fills([^>]*)>.*<\/fills>/, n = /<fonts([^>]*)>.*<\/fonts>/, a = /<borders([^>]*)>.*<\/borders>/;
return function(s, i, o) {
var f, l = {};
if (!s) return l;
(f = s.match(e)) && function(e, t, r) {
t.NumberFmt = [];
for (var n = B(m._table), a = 0; a < n.length; ++a) t.NumberFmt[n[a]] = m._table[n[a]];
var s = e[0].match(j);
if (s) for (a = 0; a < s.length; ++a) {
var i = $(s[a]);
switch (i[0]) {
case "<numFmts":
case "</numFmts>":
case "<numFmts/>":
case "<numFmts>":
break;

case "<numFmt":
var o = q(fe(i.formatCode)), f = parseInt(i.numFmtId, 10);
t.NumberFmt[f] = o;
f > 0 && m.load(o, f);
break;

case "</numFmt>":
break;

default:
if (r.WTF) throw new Error("unrecognized " + i[0] + " in numFmts");
}
}
}(f, l, o);
(f = s.match(n)) && function(e, t, r, n) {
t.Fonts = [];
var a = {};
e[0].match(j).forEach(function(e) {
var s = $(e);
switch (s[0]) {
case "<fonts":
case "<fonts>":
case "</fonts>":
break;

case "<font":
case "<font>":
break;

case "</font>":
case "<font/>":
t.Fonts.push(a);
a = {};
break;

case "<name":
s.val && (a.name = s.val);
break;

case "<name/>":
case "</name>":
break;

case "<b":
a.bold = s.val ? oe(s.val) : 1;
break;

case "<b/>":
a.bold = 1;
break;

case "<i":
a.italic = s.val ? oe(s.val) : 1;
break;

case "<i/>":
a.italic = 1;
break;

case "<u":
switch (s.val) {
case "none":
a.underline = 0;
break;

case "single":
a.underline = 1;
break;

case "double":
a.underline = 2;
break;

case "singleAccounting":
a.underline = 33;
break;

case "doubleAccounting":
a.underline = 34;
}
break;

case "<u/>":
a.underline = 1;
break;

case "<strike":
a.strike = s.val ? oe(s.val) : 1;
break;

case "<strike/>":
a.strike = 1;
break;

case "<outline":
a.outline = s.val ? oe(s.val) : 1;
break;

case "<outline/>":
a.outline = 1;
break;

case "<shadow":
a.shadow = s.val ? oe(s.val) : 1;
break;

case "<shadow/>":
a.shadow = 1;
break;

case "<condense":
a.condense = s.val ? oe(s.val) : 1;
break;

case "<condense/>":
a.condense = 1;
break;

case "<extend":
a.extend = s.val ? oe(s.val) : 1;
break;

case "<extend/>":
a.extend = 1;
break;

case "<sz":
s.val && (a.sz = +s.val);
break;

case "<sz/>":
case "</sz>":
break;

case "<vertAlign":
s.val && (a.vertAlign = s.val);
break;

case "<vertAlign/>":
case "</vertAlign>":
break;

case "<family":
s.val && (a.family = parseInt(s.val, 10));
break;

case "<family/>":
case "</family>":
break;

case "<scheme":
s.val && (a.scheme = s.val);
break;

case "<scheme/>":
case "</scheme>":
break;

case "<charset":
if ("1" == s.val) break;
s.codepage = Cl[parseInt(s.val, 10)];
break;

case "<color":
a.color || (a.color = {});
s.auto && (a.color.auto = oe(s.auto));
if (s.rgb) a.color.rgb = s.rgb; else if (s.indexed) {
a.color.index = parseInt(s.indexed, 10);
var i = cr[a.color.index];
81 == a.color.index && (i = cr[1]);
if (!i) throw new Error(e);
a.color.rgb = i[0].toString(16) + i[1].toString(16) + i[2].toString(16);
} else if (s.theme) {
a.color.theme = parseInt(s.theme, 10);
s.tint && (a.color.tint = parseFloat(s.tint));
s.theme && r.themeElements && r.themeElements.clrScheme && (a.color.rgb = Kl(r.themeElements.clrScheme[a.color.theme].rgb, a.color.tint || 0));
}
break;

case "<color/>":
case "</color>":
break;

default:
if (n && n.WTF) throw new Error("unrecognized " + s[0] + " in fonts");
}
});
}(f, l, i, o);
(f = s.match(r)) && function(e, t, r, n) {
t.Fills = [];
var a = {};
e[0].match(j).forEach(function(e) {
var r = $(e);
switch (r[0]) {
case "<fills":
case "<fills>":
case "</fills>":
case "<fill>":
break;

case "</fill>":
t.Fills.push(a);
a = {};
break;

case "<gradientFill>":
break;

case "</gradientFill>":
t.Fills.push(a);
a = {};
break;

case "<patternFill":
case "<patternFill>":
r.patternType && (a.patternType = r.patternType);
break;

case "<patternFill/>":
case "</patternFill>":
break;

case "<bgColor":
a.bgColor || (a.bgColor = {});
r.indexed && (a.bgColor.indexed = parseInt(r.indexed, 10));
r.theme && (a.bgColor.theme = parseInt(r.theme, 10));
r.tint && (a.bgColor.tint = parseFloat(r.tint));
r.rgb && (a.bgColor.rgb = r.rgb.slice(-6));
break;

case "<bgColor/>":
case "</bgColor>":
break;

case "<fgColor":
a.fgColor || (a.fgColor = {});
r.theme && (a.fgColor.theme = parseInt(r.theme, 10));
r.tint && (a.fgColor.tint = parseFloat(r.tint));
r.rgb && (a.fgColor.rgb = r.rgb.slice(-6));
break;

case "<fgColor/>":
case "</fgColor>":
break;

case "<stop":
case "<stop/>":
case "</stop>":
break;

case "<color":
case "<color/>":
case "</color>":
break;

default:
if (n && n.WTF) throw new Error("unrecognized " + r[0] + " in fills");
}
});
}(f, l, 0, o);
(f = s.match(a)) && function(e, t, r, n) {
t.Borders = [];
var a = {};
e[0].match(j).forEach(function(e) {
var r = $(e);
switch (r[0]) {
case "<borders":
case "<borders>":
case "</borders>":
break;

case "<border":
case "<border>":
a = {};
r.diagonalUp && (a.diagonalUp = r.diagonalUp);
r.diagonalDown && (a.diagonalDown = r.diagonalDown);
t.Borders.push(a);
break;

case "</border>":
break;

case "<left":
case "<left/>":
case "</left>":
break;

case "<right":
case "<right/>":
case "</right>":
break;

case "<top":
case "<top/>":
case "</top>":
break;

case "<bottom":
case "<bottom/>":
case "</bottom>":
break;

case "<diagonal":
case "<diagonal/>":
case "</diagonal>":
break;

case "<horizontal":
case "<horizontal/>":
case "</horizontal>":
break;

case "<vertical":
case "<vertical/>":
case "</vertical>":
break;

case "<start":
case "<start/>":
case "</start>":
break;

case "<end":
case "<end/>":
case "</end>":
break;

case "<color":
case "<color/>":
case "</color>":
break;

default:
if (n && n.WTF) throw new Error("unrecognized " + r[0] + " in borders");
}
});
}(f, l, 0, o);
(f = s.match(t)) && function(e, t, r) {
t.CellXf = [];
var n;
e[0].match(j).forEach(function(e) {
var a = $(e), s = 0;
switch (a[0]) {
case "<cellXfs":
case "<cellXfs>":
case "<cellXfs/>":
case "</cellXfs>":
break;

case "<xf":
delete (n = a)[0];
for (s = 0; s < fc.length; ++s) n[fc[s]] && (n[fc[s]] = parseInt(n[fc[s]], 10));
for (s = 0; s < lc.length; ++s) n[lc[s]] && (n[lc[s]] = oe(n[lc[s]]));
t.CellXf.push(n);
break;

case "</xf>":
break;

case "<alignment":
case "<alignment/>":
var i = {};
a.vertical && (i.vertical = a.vertical);
a.horizontal && (i.horizontal = a.horizontal);
null != a.textRotation && (i.textRotation = a.textRotation);
a.indent && (i.indent = a.indent);
a.wrapText && (i.wrapText = a.wrapText);
n.alignment = i;
break;

case "</alignment>":
break;

case "<protection":
case "</protection>":
case "<protection/>":
break;

case "<extLst":
case "</extLst>":
case "<ext":
break;

default:
if (r.WTF) throw new Error("unrecognized " + a[0] + " in cellXfs");
}
});
}(f, l, o);
return l;
};
}(), hc = Se("styleSheet", null, {
xmlns: He.main[0],
"xmlns:vt": He.vt
});
gr.STY = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
function uc(e, t) {
var r, n = [ Ue, hc ];
e.SSF && null != (r = function(e, t) {
var r = [ "<numFmts>" ];
[ [ 5, 8 ], [ 23, 26 ], [ 41, 44 ], [ 50, 392 ] ].forEach(function(t) {
for (var n = t[0]; n <= t[1]; ++n) null != e[n] && (r[r.length] = Se("numFmt", null, {
numFmtId: n,
formatCode: te(e[n])
}));
});
if (1 === r.length) return "";
r[r.length] = "</numFmts>";
r[0] = Se("numFmts", null, {
count: r.length - 2
}).replace("/>", ">");
return r.join("");
}(e.SSF)) && (n[n.length] = r);
n[n.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';
n[n.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';
n[n.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';
n[n.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
(r = function(e) {
var t = [];
t[t.length] = Se("cellXfs", null);
e.forEach(function(e) {
t[t.length] = Se("xf", null, e);
});
t[t.length] = "</cellXfs>";
if (2 === t.length) return "";
t[0] = Se("cellXfs", null, {
count: t.length - 2
}).replace("/>", ">");
return t.join("");
}(t.cellXfs)) && (n[n.length] = r);
n[n.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
n[n.length] = '<dxfs count="0"/>';
n[n.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';
if (n.length > 2) {
n[n.length] = "</styleSheet>";
n[1] = n[1].replace("/>", ">");
}
return n.join("");
}
function dc(e, t, r) {
r || (r = nt(6 + 4 * t.length));
r.write_shift(2, e);
Rt(t, r);
return r.length > r.l ? r.slice(0, r.l) : r;
}
function pc(e, t) {
t || (t = nt(153));
t.write_shift(2, 20 * e.sz);
(function(e, t) {
t || (t = nt(2));
var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
t.write_shift(1, r);
t.write_shift(1, 0);
})(e, t);
t.write_shift(2, e.bold ? 700 : 400);
var r = 0;
"superscript" == e.vertAlign ? r = 1 : "subscript" == e.vertAlign && (r = 2);
t.write_shift(2, r);
t.write_shift(1, e.underline || 0);
t.write_shift(1, e.family || 0);
t.write_shift(1, e.charset || 0);
t.write_shift(1, 0);
Jt(e.color, t);
var n = 0;
"major" == e.scheme && (n = 1);
"minor" == e.scheme && (n = 2);
t.write_shift(1, n);
Rt(e.name, t);
return t.length > t.l ? t.slice(0, t.l) : t;
}
var mc = w([ "none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625" ]);
function gc(e, t) {
t || (t = nt(84));
var r = mc[e.patternType];
null == r && (r = 40);
t.write_shift(4, r);
var n = 0;
if (40 != r) {
Jt({
auto: 1
}, t);
Jt({
auto: 1
}, t);
for (;n < 12; ++n) t.write_shift(4, 0);
} else {
for (;n < 4; ++n) t.write_shift(4, 0);
for (;n < 12; ++n) t.write_shift(4, 0);
}
return t.length > t.l ? t.slice(0, t.l) : t;
}
function bc(e, t, r) {
r || (r = nt(16));
r.write_shift(2, t || 0);
r.write_shift(2, e.numFmtId || 0);
r.write_shift(2, 0);
r.write_shift(2, 0);
r.write_shift(2, 0);
r.write_shift(1, 0);
r.write_shift(1, 0);
r.write_shift(1, 0);
r.write_shift(1, 0);
r.write_shift(1, 0);
r.write_shift(1, 0);
return r;
}
function vc(e, t) {
t || (t = nt(10));
t.write_shift(1, 0);
t.write_shift(1, 0);
t.write_shift(4, 0);
t.write_shift(4, 0);
return t;
}
function Ec(e, t) {
0;
it(e, "BrtBeginBorders", It(1));
it(e, "BrtBorder", function(e, t) {
t || (t = nt(51));
t.write_shift(1, 0);
vc(0, t);
vc(0, t);
vc(0, t);
vc(0, t);
vc(0, t);
return t.length > t.l ? t.slice(0, t.l) : t;
}());
it(e, "BrtEndBorders");
}
function Sc(e, t) {
it(e, "BrtBeginStyles", It(1));
it(e, "BrtStyle", function(e, t) {
t || (t = nt(52));
t.write_shift(4, e.xfId);
t.write_shift(2, 1);
t.write_shift(1, +e.builtinId);
t.write_shift(1, 0);
Wt(e.name || "", t);
return t.length > t.l ? t.slice(0, t.l) : t;
}({
xfId: 0,
builtinId: 0,
name: "Normal"
}));
it(e, "BrtEndStyles");
}
function Bc(e, t) {
it(e, "BrtBeginTableStyles", function(e, t, r) {
var n = nt(2052);
n.write_shift(4, e);
Wt(t, n);
Wt(r, n);
return n.length > n.l ? n.slice(0, n.l) : n;
}(0, "TableStyleMedium9", "PivotStyleMedium4"));
it(e, "BrtEndTableStyles");
}
function wc(e, t) {
var r = st();
it(r, "BrtBeginStyleSheet");
(function(e, t) {
if (t) {
var r = 0;
[ [ 5, 8 ], [ 23, 26 ], [ 41, 44 ], [ 57, 392 ] ].forEach(function(e) {
for (var n = e[0]; n <= e[1]; ++n) null != t[n] && ++r;
});
if (0 != r) {
it(e, "BrtBeginFmts", It(r));
[ [ 5, 8 ], [ 23, 26 ], [ 41, 44 ], [ 57, 392 ] ].forEach(function(r) {
for (var n = r[0]; n <= r[1]; ++n) null != t[n] && it(e, "BrtFmt", dc(n, t[n]));
});
it(e, "BrtEndFmts");
}
}
})(r, e.SSF);
(function(e, t) {
it(e, "BrtBeginFonts", It(1));
it(e, "BrtFont", pc({
sz: 12,
color: {
theme: 1
},
name: "Calibri",
family: 2,
scheme: "minor"
}));
it(e, "BrtEndFonts");
})(r);
(function(e, t) {
it(e, "BrtBeginFills", It(2));
it(e, "BrtFill", gc({
patternType: "none"
}));
it(e, "BrtFill", gc({
patternType: "gray125"
}));
it(e, "BrtEndFills");
})(r);
Ec(r);
(function(e, t) {
it(e, "BrtBeginCellStyleXFs", It(1));
it(e, "BrtXF", bc({
numFmtId: 0,
fontId: 0,
fillId: 0,
borderId: 0
}, 65535));
it(e, "BrtEndCellStyleXFs");
})(r);
(function(e, t) {
it(e, "BrtBeginCellXFs", It(t.length));
t.forEach(function(t) {
it(e, "BrtXF", bc(t, 0));
});
it(e, "BrtEndCellXFs");
})(r, t.cellXfs);
Sc(r);
(function(e, t) {
it(e, "BrtBeginDXFs", It(0));
it(e, "BrtEndDXFs");
})(r);
Bc(r);
it(r, "BrtEndStyleSheet");
return r.end();
}
gr.THEME = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
var Cc = /<a:clrScheme([^>]*)>[^\u2603]*<\/a:clrScheme>/, _c = /<a:fontScheme([^>]*)>[^\u2603]*<\/a:fontScheme>/, Tc = /<a:fmtScheme([^>]*)>[^\u2603]*<\/a:fmtScheme>/;
function kc(e, t, r) {
t.themeElements = {};
var n;
[ [ "clrScheme", Cc, function(e, t, r) {
t.themeElements.clrScheme = [];
var n = {};
(e[0].match(j) || []).forEach(function(e) {
var a = $(e);
switch (a[0]) {
case "<a:clrScheme":
case "</a:clrScheme>":
break;

case "<a:srgbClr":
n.rgb = a.val;
break;

case "<a:sysClr":
n.rgb = a.lastClr;
break;

case "<a:dk1>":
case "</a:dk1>":
case "<a:lt1>":
case "</a:lt1>":
case "<a:dk2>":
case "</a:dk2>":
case "<a:lt2>":
case "</a:lt2>":
case "<a:accent1>":
case "</a:accent1>":
case "<a:accent2>":
case "</a:accent2>":
case "<a:accent3>":
case "</a:accent3>":
case "<a:accent4>":
case "</a:accent4>":
case "<a:accent5>":
case "</a:accent5>":
case "<a:accent6>":
case "</a:accent6>":
case "<a:hlink>":
case "</a:hlink>":
case "<a:folHlink>":
case "</a:folHlink>":
if ("/" === a[0][1]) {
t.themeElements.clrScheme.push(n);
n = {};
} else n.name = a[0].substring(3, a[0].length - 1);
break;

default:
if (r && r.WTF) throw new Error("Unrecognized " + a[0] + " in clrScheme");
}
});
} ], [ "fontScheme", _c, function(e, t, r) {} ], [ "fmtScheme", Tc, function(e, t, r) {} ] ].forEach(function(a) {
if (!(n = e.match(a[1]))) throw new Error(a[0] + " not found in themeElements");
a[2](n, t, r);
});
}
var xc = /<a:themeElements([^>]*)>[^\u2603]*<\/a:themeElements>/;
function Ac(e, t) {
if (t && t.themeXLSX) return t.themeXLSX;
var r = [ Ue ];
r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
r[r.length] = "<a:themeElements>";
r[r.length] = '<a:clrScheme name="Office">';
r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
r[r.length] = "</a:clrScheme>";
r[r.length] = '<a:fontScheme name="Office">';
r[r.length] = "<a:majorFont>";
r[r.length] = '<a:latin typeface="Cambria"/>';
r[r.length] = '<a:ea typeface=""/>';
r[r.length] = '<a:cs typeface=""/>';
r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
r[r.length] = '<a:font script="Hans" typeface="宋体"/>';
r[r.length] = '<a:font script="Hant" typeface="新細明體"/>';
r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>';
r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>';
r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>';
r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>';
r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>';
r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>';
r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>';
r[r.length] = '<a:font script="Knda" typeface="Tunga"/>';
r[r.length] = '<a:font script="Guru" typeface="Raavi"/>';
r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>';
r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
r[r.length] = '<a:font script="Deva" typeface="Mangal"/>';
r[r.length] = '<a:font script="Telu" typeface="Gautami"/>';
r[r.length] = '<a:font script="Taml" typeface="Latha"/>';
r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>';
r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>';
r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>';
r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
r[r.length] = "</a:majorFont>";
r[r.length] = "<a:minorFont>";
r[r.length] = '<a:latin typeface="Calibri"/>';
r[r.length] = '<a:ea typeface=""/>';
r[r.length] = '<a:cs typeface=""/>';
r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
r[r.length] = '<a:font script="Hans" typeface="宋体"/>';
r[r.length] = '<a:font script="Hant" typeface="新細明體"/>';
r[r.length] = '<a:font script="Arab" typeface="Arial"/>';
r[r.length] = '<a:font script="Hebr" typeface="Arial"/>';
r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>';
r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>';
r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>';
r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>';
r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>';
r[r.length] = '<a:font script="Knda" typeface="Tunga"/>';
r[r.length] = '<a:font script="Guru" typeface="Raavi"/>';
r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>';
r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
r[r.length] = '<a:font script="Deva" typeface="Mangal"/>';
r[r.length] = '<a:font script="Telu" typeface="Gautami"/>';
r[r.length] = '<a:font script="Taml" typeface="Latha"/>';
r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>';
r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>';
r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
r[r.length] = '<a:font script="Viet" typeface="Arial"/>';
r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
r[r.length] = "</a:minorFont>";
r[r.length] = "</a:fontScheme>";
r[r.length] = '<a:fmtScheme name="Office">';
r[r.length] = "<a:fillStyleLst>";
r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
r[r.length] = '<a:gradFill rotWithShape="1">';
r[r.length] = "<a:gsLst>";
r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
r[r.length] = "</a:gsLst>";
r[r.length] = '<a:lin ang="16200000" scaled="1"/>';
r[r.length] = "</a:gradFill>";
r[r.length] = '<a:gradFill rotWithShape="1">';
r[r.length] = "<a:gsLst>";
r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
r[r.length] = "</a:gsLst>";
r[r.length] = '<a:lin ang="16200000" scaled="0"/>';
r[r.length] = "</a:gradFill>";
r[r.length] = "</a:fillStyleLst>";
r[r.length] = "<a:lnStyleLst>";
r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
r[r.length] = "</a:lnStyleLst>";
r[r.length] = "<a:effectStyleLst>";
r[r.length] = "<a:effectStyle>";
r[r.length] = "<a:effectLst>";
r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
r[r.length] = "</a:effectLst>";
r[r.length] = "</a:effectStyle>";
r[r.length] = "<a:effectStyle>";
r[r.length] = "<a:effectLst>";
r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
r[r.length] = "</a:effectLst>";
r[r.length] = "</a:effectStyle>";
r[r.length] = "<a:effectStyle>";
r[r.length] = "<a:effectLst>";
r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
r[r.length] = "</a:effectLst>";
r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
r[r.length] = "</a:effectStyle>";
r[r.length] = "</a:effectStyleLst>";
r[r.length] = "<a:bgFillStyleLst>";
r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
r[r.length] = '<a:gradFill rotWithShape="1">';
r[r.length] = "<a:gsLst>";
r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
r[r.length] = "</a:gsLst>";
r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
r[r.length] = "</a:gradFill>";
r[r.length] = '<a:gradFill rotWithShape="1">';
r[r.length] = "<a:gsLst>";
r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
r[r.length] = "</a:gsLst>";
r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
r[r.length] = "</a:gradFill>";
r[r.length] = "</a:bgFillStyleLst>";
r[r.length] = "</a:fmtScheme>";
r[r.length] = "</a:themeElements>";
r[r.length] = "<a:objectDefaults>";
r[r.length] = "<a:spDef>";
r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
r[r.length] = "</a:spDef>";
r[r.length] = "<a:lnDef>";
r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
r[r.length] = "</a:lnDef>";
r[r.length] = "</a:objectDefaults>";
r[r.length] = "<a:extraClrSchemeLst/>";
r[r.length] = "</a:theme>";
return r.join("");
}
function Ic(e, t) {
var r = {};
r.xclrType = e.read_shift(2);
r.nTintShade = e.read_shift(2);
switch (r.xclrType) {
case 0:
e.l += 4;
break;

case 1:
r.xclrValue = function(e, t) {
return rt(e, t);
}(e, 4);
break;

case 2:
r.xclrValue = ln(e);
break;

case 3:
r.xclrValue = function(e, t) {
return e.read_shift(4);
}(e);
break;

case 4:
e.l += 4;
}
e.l += 8;
return r;
}
function yc(e, t) {
var r = e.read_shift(2), n = e.read_shift(2), a = [ r ];
switch (r) {
case 4:
case 5:
case 7:
case 8:
case 9:
case 10:
case 11:
case 13:
a[1] = Ic(e);
break;

case 6:
a[1] = function(e, t) {
return rt(e, t);
}(e, n);
break;

case 14:
case 15:
a[1] = e.read_shift(5 === n ? 1 : 2);
break;

default:
throw new Error("Unrecognized ExtProp type: " + r + " " + n);
}
return a;
}
function Rc(e, t) {
t.forEach(function(e) {
e[0];
});
}
gr.IMG = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
gr.DRAW = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
var Dc = 1024;
function Oc(e, t) {
for (var r = [ 21600, 21600 ], n = [ "m0,0l0", r[1], r[0], r[1], r[0], "0xe" ].join(","), a = [ Se("xml", null, {
"xmlns:v": We.v,
"xmlns:o": We.o,
"xmlns:x": We.x,
"xmlns:mv": We.mv
}).replace(/\/>/, ">"), Se("o:shapelayout", Se("o:idmap", null, {
"v:ext": "edit",
data: e
}), {
"v:ext": "edit"
}), Se("v:shapetype", [ Se("v:stroke", null, {
joinstyle: "miter"
}), Se("v:path", null, {
gradientshapeok: "t",
"o:connecttype": "rect"
}) ].join(""), {
id: "_x0000_t202",
"o:spt": 202,
coordsize: r.join(","),
path: n
}) ]; Dc < 1e3 * e; ) Dc += 1e3;
t.map(function(e) {
return St(e[0]);
}).forEach(function(e, t) {
a = a.concat([ "<v:shape" + Ee({
id: "_x0000_s" + ++Dc,
type: "#_x0000_t202",
style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10;visibility:hidden",
fillcolor: "#ECFAD4",
strokecolor: "#edeaa1"
}) + ">", Se("v:fill", Se("o:fill", null, {
type: "gradientUnscaled",
"v:ext": "view"
}), {
color2: "#BEFF82",
angle: "-180",
type: "gradient"
}), Se("v:shadow", null, {
on: "t",
obscured: "t"
}), Se("v:path", null, {
"o:connecttype": "none"
}), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", ve("x:Anchor", [ e.c, 0, e.r, 0, e.c + 3, 100, e.r + 5, 100 ].join(",")), ve("x:AutoFill", "False"), ve("x:Row", String(e.r)), ve("x:Column", String(e.c)), "<x:Visible/>", "</x:ClientData>", "</v:shape>" ]);
});
a.push("</xml>");
return a.join("");
}
gr.CMNT = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
function Fc(e, t, r) {
var n, a, s = Array.isArray(t);
r.forEach(function(e) {
if (s) {
a = St(e.ref);
t[a.r] || (t[a.r] = []);
n = t[a.r][a.c];
} else n = t[e.ref];
if (!n) {
n = {};
s ? t[a.r][a.c] = n : t[e.ref] = n;
var r = _t(t["!ref"] || "BDWGO1000001:A1"), i = St(e.ref);
r.s.r > i.r && (r.s.r = i.r);
r.e.r < i.r && (r.e.r = i.r);
r.s.c > i.c && (r.s.c = i.c);
r.e.c < i.c && (r.e.c = i.c);
var o = Ct(r);
o !== t["!ref"] && (t["!ref"] = o);
}
n.c || (n.c = []);
var f = {
a: e.author,
t: e.t,
r: e.r
};
e.h && (f.h = e.h);
n.c.push(f);
});
}
var Pc = Se("comments", null, {
xmlns: He.main[0]
});
var Nc = yt;
function Mc(e, t) {
var r = st(), n = [];
it(r, "BrtBeginComments");
it(r, "BrtBeginCommentAuthors");
e.forEach(function(e) {
e[1].forEach(function(e) {
if (!(n.indexOf(e.a) > -1)) {
n.push(e.a.substr(0, 54));
it(r, "BrtCommentAuthor", Rt(e.a.substr(0, 54)));
}
});
});
it(r, "BrtEndCommentAuthors");
it(r, "BrtBeginCommentList");
e.forEach(function(e) {
e[1].forEach(function(t) {
t.iauthor = n.indexOf(t.a);
var a = {
s: St(e[0]),
e: St(e[0])
};
it(r, "BrtBeginComment", function(e, t) {
null == t && (t = nt(36));
t.write_shift(4, e[1].iauthor);
Yt(e[0], t);
t.write_shift(4, 0);
t.write_shift(4, 0);
t.write_shift(4, 0);
t.write_shift(4, 0);
return t;
}([ a, t ]));
t.t && t.t.length > 0 && it(r, "BrtCommentText", Pt(t));
it(r, "BrtEndComment");
delete t.iauthor;
});
});
it(r, "BrtEndCommentList");
it(r, "BrtEndComments");
return r.end();
}
gr.DS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet";
gr.MS = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";
var Lc = function() {
var e = /(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g, t = {
r: 0,
c: 0
};
function r(e, r, n, a, s, i) {
var o = a.length > 0 ? 0 | parseInt(a, 10) : 0, f = i.length > 0 ? 0 | parseInt(i, 10) : 0;
f < 0 && 0 === s.length && (f = 0);
var l = !1, c = !1;
(s.length > 0 || 0 == i.length) && (l = !0);
l ? f += t.c : --f;
(n.length > 0 || 0 == a.length) && (c = !0);
c ? o += t.r : --o;
return r + (l ? "" : "$") + gt(f) + (c ? "" : "$") + ut(o);
}
return function(n, a) {
t = a;
return n.replace(e, r);
};
}(), Uc = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)([1-9]\d{0,5}|10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6])(?![_.\(A-Za-z0-9])/g, Hc = function(e, t) {
return e.replace(Uc, function(e, r, n, a, s, i, o, f) {
var l = mt(a) - t.c, c = ht(i) - t.r;
return r + "R" + (0 == c ? "" : "[" + c + "]") + "C" + (0 == l ? "" : "[" + l + "]");
});
};
function Wc(e, t, r) {
var n = wt(t).s, a = St(r);
return function(e, t) {
return e.replace(Uc, function(e, r, n, a, s, i, o, f) {
return r + ("$" == n ? n + a : gt(mt(a) + t.c)) + ("$" == s ? s + i : ut(ht(i) + t.r));
});
}(e, {
r: a.r - n.r,
c: a.c - n.c
});
}
function Vc(e) {
e.l += 1;
}
function zc(e, t) {
var r = e.read_shift(1 == t ? 1 : 2);
return [ 16383 & r, r >> 14 & 1, r >> 15 & 1 ];
}
function Xc(e, t, r) {
var n = 2;
if (r) {
if (r.biff >= 2 && r.biff <= 5) return function(e) {
var t = zc(e, 2), r = zc(e, 2), n = e.read_shift(1), a = e.read_shift(1);
return {
s: {
r: t[0],
c: n,
cRel: t[1],
rRel: t[2]
},
e: {
r: r[0],
c: a,
cRel: r[1],
rRel: r[2]
}
};
}(e);
12 == r.biff && (n = 4);
}
var a = e.read_shift(n), s = e.read_shift(n), i = zc(e, 2), o = zc(e, 2);
return {
s: {
r: a,
c: i[0],
cRel: i[1],
rRel: i[2]
},
e: {
r: s,
c: o[0],
cRel: o[1],
rRel: o[2]
}
};
}
function Gc(e, t, r) {
if (r && r.biff >= 2 && r.biff <= 5) return function(e, t, r) {
var n = zc(e, 2), a = e.read_shift(1);
return {
r: n[0],
c: a,
cRel: n[1],
rRel: n[2]
};
}(e);
var n = e.read_shift(r && 12 == r.biff ? 4 : 2), a = zc(e, 2);
return {
r: n,
c: a[0],
cRel: a[1],
rRel: a[2]
};
}
function jc(e, t) {
return [ e.read_shift(1), e.read_shift(1) ];
}
function Kc(e, t) {
var r = [ e.read_shift(1) ];
if (12 == t) switch (r[0]) {
case 2:
r[0] = 4;
break;

case 4:
r[0] = 16;
break;

case 0:
r[0] = 1;
break;

case 1:
r[0] = 2;
}
switch (r[0]) {
case 4:
r[1] = Qr(e, 1) ? "TRUE" : "FALSE";
e.l += 7;
break;

case 16:
r[1] = Qt[e[e.l]];
e.l += 8;
break;

case 0:
e.l += 8;
break;

case 1:
r[1] = $t(e);
break;

case 2:
r[1] = an(e, 0, {
biff: t > 0 && t < 8 ? 2 : t
});
}
return r;
}
function Yc(e, t) {
for (var r = e.read_shift(2), n = [], a = 0; a != r; ++a) n.push(mn(e));
return n;
}
function $c(e, t, r) {
var n = 0, a = 0;
if (12 == r.biff) {
n = e.read_shift(4);
a = e.read_shift(4);
} else {
a = 1 + e.read_shift(1);
n = 1 + e.read_shift(2);
}
if (r.biff >= 2 && r.biff < 8) {
--n;
0 == --a && (a = 256);
}
for (var s = 0, i = []; s != n && (i[s] = []); ++s) for (var o = 0; o != a; ++o) i[s][o] = Kc(e, r.biff);
return i;
}
var Zc = {
1: {
n: "PtgExp",
f: function(e, t, r) {
e.l++;
return r && 12 == r.biff ? [ e.read_shift(4, "i"), 0 ] : [ e.read_shift(2), e.read_shift(r && 2 == r.biff ? 1 : 2) ];
}
},
2: {
n: "PtgTbl",
f: rt
},
3: {
n: "PtgAdd",
f: Vc
},
4: {
n: "PtgSub",
f: Vc
},
5: {
n: "PtgMul",
f: Vc
},
6: {
n: "PtgDiv",
f: Vc
},
7: {
n: "PtgPower",
f: Vc
},
8: {
n: "PtgConcat",
f: Vc
},
9: {
n: "PtgLt",
f: Vc
},
10: {
n: "PtgLe",
f: Vc
},
11: {
n: "PtgEq",
f: Vc
},
12: {
n: "PtgGe",
f: Vc
},
13: {
n: "PtgGt",
f: Vc
},
14: {
n: "PtgNe",
f: Vc
},
15: {
n: "PtgIsect",
f: Vc
},
16: {
n: "PtgUnion",
f: Vc
},
17: {
n: "PtgRange",
f: Vc
},
18: {
n: "PtgUplus",
f: Vc
},
19: {
n: "PtgUminus",
f: Vc
},
20: {
n: "PtgPercent",
f: Vc
},
21: {
n: "PtgParen",
f: Vc
},
22: {
n: "PtgMissArg",
f: Vc
},
23: {
n: "PtgStr",
f: function(e, t, r) {
e.l++;
return en(e, 0, r);
}
},
28: {
n: "PtgErr",
f: function(e, t) {
e.l++;
return Qt[e.read_shift(1)];
}
},
29: {
n: "PtgBool",
f: function(e, t) {
e.l++;
return 0 !== e.read_shift(1);
}
},
30: {
n: "PtgInt",
f: function(e, t) {
e.l++;
return e.read_shift(2);
}
},
31: {
n: "PtgNum",
f: function(e, t) {
e.l++;
return $t(e);
}
},
32: {
n: "PtgArray",
f: function(e, t, r) {
var n = (96 & e[e.l++]) >> 5;
e.l += 2 == r.biff ? 6 : 12 == r.biff ? 14 : 7;
return [ n ];
}
},
33: {
n: "PtgFunc",
f: function(e, t, r) {
e[e.l];
var n = (96 & e[e.l]) >> 5;
e.l += 1;
var a = e.read_shift(r && r.biff <= 3 ? 1 : 2);
return [ dh[a], uh[a], n ];
}
},
34: {
n: "PtgFuncVar",
f: function(e, t, r) {
e.l++;
var n = e.read_shift(1), a = r && r.biff <= 3 ? [ 0, e.read_shift(1) ] : function(e, t) {
return [ e[e.l + 1] >> 7, 32767 & e.read_shift(2) ];
}(e);
return [ n, (0 === a[0] ? uh : hh)[a[1]] ];
}
},
35: {
n: "PtgName",
f: function(e, t, r) {
var n = e.read_shift(1) >>> 5 & 3, a = !r || r.biff >= 8 ? 4 : 2, s = e.read_shift(a);
switch (r.biff) {
case 2:
e.l += 5;
break;

case 3:
case 4:
e.l += 8;
break;

case 5:
e.l += 12;
}
return [ n, 0, s ];
}
},
36: {
n: "PtgRef",
f: function(e, t, r) {
e[e.l];
var n = (96 & e[e.l]) >> 5;
e.l += 1;
return [ n, Gc(e, 0, r) ];
}
},
37: {
n: "PtgArea",
f: function(e, t, r) {
return [ (96 & e[e.l++]) >> 5, Xc(e, r.biff >= 2 && r.biff, r) ];
}
},
38: {
n: "PtgMemArea",
f: function(e, t, r) {
var n = e.read_shift(1) >>> 5 & 3;
e.l += r && 2 == r.biff ? 3 : 4;
return [ n, e.read_shift(r && 2 == r.biff ? 1 : 2) ];
}
},
39: {
n: "PtgMemErr",
f: rt
},
40: {
n: "PtgMemNoMem",
f: rt
},
41: {
n: "PtgMemFunc",
f: function(e, t, r) {
return [ e.read_shift(1) >>> 5 & 3, e.read_shift(r && 2 == r.biff ? 1 : 2) ];
}
},
42: {
n: "PtgRefErr",
f: function(e, t, r) {
var n = e.read_shift(1) >>> 5 & 3;
e.l += 4;
12 == r.biff && (e.l += 2);
return [ n ];
}
},
43: {
n: "PtgAreaErr",
f: function(e, t, r) {
var n = (96 & e[e.l++]) >> 5;
e.l += r && r.biff > 8 ? 12 : 8;
return [ n ];
}
},
44: {
n: "PtgRefN",
f: function(e, t, r) {
var n = (96 & e[e.l]) >> 5;
e.l += 1;
return [ n, function(e, t, r) {
var n = r && r.biff ? r.biff : 8;
if (n >= 2 && n <= 5) return function(e, t) {
var r = e.read_shift(2), n = e.read_shift(1), a = (32768 & r) >> 15, s = (16384 & r) >> 14;
r &= 16383;
1 == a && r >= 8192 && (r -= 16384);
1 == s && n >= 128 && (n -= 256);
return {
r: r,
c: n,
cRel: s,
rRel: a
};
}(e);
var a = e.read_shift(n >= 12 ? 4 : 2), s = e.read_shift(2), i = (32768 & s) >> 15, o = (16384 & s) >> 14;
s &= 16383;
if (1 == o) for (;a > 524287; ) a -= 1048576;
if (1 == i) for (;s > 8191; ) s -= 16384;
return {
r: a,
c: s,
cRel: i,
rRel: o
};
}(e, 0, r) ];
}
},
45: {
n: "PtgAreaN",
f: function(e, t, r) {
return [ (96 & e[e.l++]) >> 5, function(e, t) {
var r = e.read_shift(12 == t ? 4 : 2), n = e.read_shift(12 == t ? 4 : 2), a = zc(e, 2), s = zc(e, 2);
return {
s: {
r: r,
c: a[0],
cRel: a[1],
rRel: a[2]
},
e: {
r: n,
c: s[0],
cRel: s[1],
rRel: s[2]
}
};
}(e, r && r.biff > 8 ? 12 : 8) ];
}
},
57: {
n: "PtgNameX",
f: function(e, t, r) {
return 5 == r.biff ? function(e, t, r) {
var n = e.read_shift(1) >>> 5 & 3, a = e.read_shift(2, "i");
e.l += 8;
var s = e.read_shift(2);
e.l += 12;
return [ n, a, s ];
}(e) : [ e.read_shift(1) >>> 5 & 3, e.read_shift(2), e.read_shift(4) ];
}
},
58: {
n: "PtgRef3d",
f: function(e, t, r) {
var n = (96 & e[e.l]) >> 5;
e.l += 1;
return [ n, e.read_shift(2), Gc(e, 0, r) ];
}
},
59: {
n: "PtgArea3d",
f: function(e, t, r) {
var n = (96 & e[e.l++]) >> 5, a = e.read_shift(2, "i");
if (r) switch (r.biff) {
case 5:
e.l += 12;
}
return [ n, a, Xc(e, 0, r) ];
}
},
60: {
n: "PtgRefErr3d",
f: function(e, t, r) {
var n = (96 & e[e.l++]) >> 5, a = e.read_shift(2), s = 4;
if (r) switch (r.biff) {
case 5:
throw new Error("PtgRefErr3d -- 5");

case 12:
s = 6;
}
e.l += s;
return [ n, a ];
}
},
61: {
n: "PtgAreaErr3d",
f: function(e, t, r) {
var n = (96 & e[e.l++]) >> 5, a = e.read_shift(2), s = 8;
if (r) switch (r.biff) {
case 5:
e.l += 12;
s = 6;
break;

case 12:
s = 12;
}
e.l += s;
return [ n, a ];
}
},
255: {}
}, Qc = {
64: 32,
96: 32,
65: 33,
97: 33,
66: 34,
98: 34,
67: 35,
99: 35,
68: 36,
100: 36,
69: 37,
101: 37,
70: 38,
102: 38,
71: 39,
103: 39,
72: 40,
104: 40,
73: 41,
105: 41,
74: 42,
106: 42,
75: 43,
107: 43,
76: 44,
108: 44,
77: 45,
109: 45,
89: 57,
121: 57,
90: 58,
122: 58,
91: 59,
123: 59,
92: 60,
124: 60,
93: 61,
125: 61
};
(function() {
for (var e in Qc) Zc[e] = Zc[Qc[e]];
})();
var qc = {}, Jc = {
1: {
n: "PtgAttrSemi",
f: function(e, t, r) {
var n = 255 & e[e.l + 1] ? 1 : 0;
e.l += r && 2 == r.biff ? 3 : 4;
return [ n ];
}
},
2: {
n: "PtgAttrIf",
f: function(e, t, r) {
var n = 255 & e[e.l + 1] ? 1 : 0;
e.l += 2;
return [ n, e.read_shift(r && 2 == r.biff ? 1 : 2) ];
}
},
4: {
n: "PtgAttrChoose",
f: function(e, t, r) {
e.l += 2;
for (var n = e.read_shift(r && 2 == r.biff ? 1 : 2), a = [], s = 0; s <= n; ++s) a.push(e.read_shift(r && 2 == r.biff ? 1 : 2));
return a;
}
},
8: {
n: "PtgAttrGoto",
f: function(e, t, r) {
var n = 255 & e[e.l + 1] ? 1 : 0;
e.l += 2;
return [ n, e.read_shift(r && 2 == r.biff ? 1 : 2) ];
}
},
16: {
n: "PtgAttrSum",
f: function(e, t, r) {
e.l += r && 2 == r.biff ? 3 : 4;
}
},
32: {
n: "PtgAttrBaxcel",
f: function(e, t) {
var r = 1 & e[e.l + 1];
e.l += 4;
return [ r, 1 ];
}
},
64: {
n: "PtgAttrSpace",
f: function(e, t) {
e.read_shift(2);
return jc(e);
}
},
65: {
n: "PtgAttrSpaceSemi",
f: function(e, t) {
e.read_shift(2);
return jc(e);
}
},
128: {
n: "PtgAttrIfError",
f: function(e, t) {
var r = 255 & e[e.l + 1] ? 1 : 0;
e.l += 2;
return [ r, e.read_shift(2) ];
}
},
255: {}
};
function eh(e, t, r) {
var n = e.l + t, a = hn(e);
2 == r.biff && ++e.l;
var s = function(e) {
var t;
if (65535 !== Xe(e, e.l + 6)) return [ $t(e), "n" ];
switch (e[e.l]) {
case 0:
e.l += 8;
return [ "String", "s" ];

case 1:
t = 1 === e[e.l + 2];
e.l += 8;
return [ t, "b" ];

case 2:
t = e[e.l + 2];
e.l += 8;
return [ t, "e" ];

case 3:
e.l += 8;
return [ "", "s" ];
}
return [];
}(e), i = e.read_shift(1);
if (2 != r.biff) {
e.read_shift(1);
if (r.biff >= 5) e.read_shift(4);
}
var o = function(e, t, r) {
e.l;
var n, a = 2 == r.biff ? 1 : 2, s = e.read_shift(a);
if (65535 == s) return [ [], rt(e, t - 2) ];
var i = rh(e, s, r);
t !== s + a && (n = th(e, t - s - a, i, r));
return [ i, n ];
}(e, n - e.l, r);
return {
cell: a,
val: s[0],
formula: o,
shared: i >> 3 & 1,
tt: s[1]
};
}
function th(e, t, r, n) {
if (n.biff < 8) return rt(e, t);
for (var a = e.l + t, s = [], i = 0; i !== r.length; ++i) switch (r[i][0]) {
case "PtgArray":
r[i][1] = $c(e, 0, n);
s.push(r[i][1]);
break;

case "PtgMemArea":
r[i][2] = Yc(e, r[i][1]);
s.push(r[i][2]);
break;

case "PtgExp":
if (n && 12 == n.biff) {
r[i][1][1] = e.read_shift(4);
s.push(r[i][1]);
}
}
0 !== (t = a - e.l) && s.push(rt(e, t));
return s;
}
function rh(e, t, r) {
for (var n, a, s = e.l + t, i = []; s != e.l; ) {
t = s - e.l;
a = e[e.l];
n = Zc[a];
24 !== a && 25 !== a || (n = (24 === (a = e[e.l + 1]) ? qc : Jc)[a]);
n && n.f ? i.push([ n.n, n.f(e, t, r) ]) : rt(e, t);
}
return i;
}
function nh(e) {
for (var t = [], r = 0; r < e.length; ++r) {
for (var n = e[r], a = [], s = 0; s < n.length; ++s) {
var i = n[s];
if (i) switch (i[0]) {
case 2:
a.push('"' + i[1].replace(/"/g, '""') + '"');
break;

default:
a.push(i[1]);
} else a.push("");
}
t.push(a.join(","));
}
return t.join(";");
}
var ah = {
PtgAdd: "+",
PtgConcat: "&",
PtgDiv: "/",
PtgEq: "=",
PtgGe: ">=",
PtgGt: ">",
PtgLe: "<=",
PtgLt: "<",
PtgMul: "*",
PtgNe: "<>",
PtgPower: "^",
PtgSub: "-"
};
function sh(e, t, r, n, a) {
var s, i, o, f, l = {
s: {
c: 0,
r: 0
},
e: {
c: 0,
r: 0
}
}, c = [], h = 0, u = 0, d = "";
if (!e[0] || !e[0][0]) return "";
for (var p = -1, m = "", g = 0, b = e[0].length; g < b; ++g) {
var v = e[0][g];
switch (v[0]) {
case "PtgUminus":
c.push("-" + c.pop());
break;

case "PtgUplus":
c.push("+" + c.pop());
break;

case "PtgPercent":
c.push(c.pop() + "%");
break;

case "PtgAdd":
case "PtgConcat":
case "PtgDiv":
case "PtgEq":
case "PtgGe":
case "PtgGt":
case "PtgLe":
case "PtgLt":
case "PtgMul":
case "PtgNe":
case "PtgPower":
case "PtgSub":
s = c.pop();
i = c.pop();
if (p >= 0) {
switch (e[0][p][1][0]) {
case 0:
m = N(" ", e[0][p][1][1]);
break;

case 1:
m = N("\r", e[0][p][1][1]);
break;

default:
m = "";
if (a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][p][1][0]);
}
i += m;
p = -1;
}
c.push(i + ah[v[0]] + s);
break;

case "PtgIsect":
s = c.pop();
i = c.pop();
c.push(i + " " + s);
break;

case "PtgUnion":
s = c.pop();
i = c.pop();
c.push(i + "," + s);
break;

case "PtgRange":
s = c.pop();
i = c.pop();
c.push(i + ":" + s);
break;

case "PtgAttrChoose":
case "PtgAttrGoto":
case "PtgAttrIf":
case "PtgAttrIfError":
break;

case "PtgRef":
v[1][0];
o = ot(v[1][1], l, a);
c.push(lt(o));
break;

case "PtgRefN":
v[1][0];
o = r ? ot(v[1][1], r, a) : v[1][1];
c.push(lt(o));
break;

case "PtgRef3d":
v[1][0];
h = v[1][1];
o = ot(v[1][2], l, a);
d = n.SheetNames[h];
c.push(d + "!" + lt(o));
break;

case "PtgFunc":
case "PtgFuncVar":
var E = v[1][0], S = v[1][1];
E || (E = 0);
var B = 0 == E ? [] : c.slice(-E);
c.length -= E;
"User" === S && (S = B.shift());
c.push(S + "(" + B.join(",") + ")");
break;

case "PtgBool":
c.push(v[1] ? "TRUE" : "FALSE");
break;

case "PtgInt":
c.push(v[1]);
break;

case "PtgNum":
c.push(String(v[1]));
break;

case "PtgStr":
c.push('"' + v[1] + '"');
break;

case "PtgErr":
c.push(v[1]);
break;

case "PtgAreaN":
case "PtgArea":
v[1][0];
f = ft(v[1][1], l, a);
c.push(ct(f, a));
break;

case "PtgArea3d":
v[1][0];
h = v[1][1];
f = v[1][2];
d = n && n[1] ? n[1][h + 1] : "**MISSING**";
c.push(d + "!" + Ct(f));
break;

case "PtgAttrSum":
c.push("SUM(" + c.pop() + ")");
break;

case "PtgAttrSemi":
break;

case "PtgName":
u = v[1][2];
var w = (n.names || [])[u - 1] || (n[0] || [])[u], C = w ? w.Name : "**MISSING**" + String(u);
C in ph && (C = ph[C]);
c.push(C);
break;

case "PtgNameX":
var _, T = v[1][1];
u = v[1][2];
if (!(a.biff <= 5)) {
n.SheetNames[T];
var k = "";
14849 == ((n[T] || [])[0] || [])[0] || (1025 == ((n[T] || [])[0] || [])[0] ? n[T][u] && n[T][u].itab > 0 && (k = n.SheetNames[n[T][u].itab - 1] + "!") : k = n.SheetNames[u - 1] + "!");
n[T] && n[T][u] ? k += n[T][u].Name : n[0] && n[0][u] ? k += n[0][u].Name : k += "??NAMEX??";
c.push(k);
break;
}
T < 0 && (T = -T);
n[T] && (_ = n[T][u]);
_ || (_ = {
Name: "??NAMEX??"
});
c.push(_.Name);
break;

case "PtgParen":
var x = "(", A = ")";
if (p >= 0) {
m = "";
switch (e[0][p][1][0]) {
case 2:
x = N(" ", e[0][p][1][1]) + x;
break;

case 3:
x = N("\r", e[0][p][1][1]) + x;
break;

case 4:
A = N(" ", e[0][p][1][1]) + A;
break;

case 5:
A = N("\r", e[0][p][1][1]) + A;
break;

default:
if (a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][p][1][0]);
}
p = -1;
}
c.push(x + c.pop() + A);
break;

case "PtgRefErr":
case "PtgRefErr3d":
c.push("#REF!");
break;

case "PtgExp":
o = {
c: v[1][1],
r: v[1][0]
};
var I = {
c: r.c,
r: r.r
};
if (n.sharedf[Bt(o)]) {
var y = n.sharedf[Bt(o)];
c.push(sh(y, l, I, n, a));
} else {
var R = !1;
for (s = 0; s != n.arrayf.length; ++s) {
i = n.arrayf[s];
if (!(o.c < i[0].s.c || o.c > i[0].e.c) && !(o.r < i[0].s.r || o.r > i[0].e.r)) {
c.push(sh(i[1], l, I, n, a));
R = !0;
break;
}
}
R || c.push(v[1]);
}
break;

case "PtgArray":
c.push("{" + nh(v[1]) + "}");
break;

case "PtgMemArea":
break;

case "PtgAttrSpace":
case "PtgAttrSpaceSemi":
p = g;
break;

case "PtgTbl":
case "PtgMemErr":
break;

case "PtgMissArg":
c.push("");
break;

case "PtgAreaErr":
case "PtgAreaErr3d":
c.push("#REF!");
break;

case "PtgMemFunc":
break;

default:
throw new Error("Unrecognized Formula Token: " + String(v));
}
if (p >= 0 && -1 == [ "PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto" ].indexOf(e[0][g][0])) {
var D = !0;
switch ((v = e[0][p])[1][0]) {
case 4:
D = !1;

case 0:
m = N(" ", v[1][1]);
break;

case 5:
D = !1;

case 1:
m = N("\r", v[1][1]);
break;

default:
m = "";
if (a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + v[1][0]);
}
c.push((D ? m : "") + c.pop() + (D ? "" : m));
p = -1;
}
}
if (c.length > 1 && a.WTF) throw new Error("bad formula stack");
return c[0];
}
function ih(e, t, r) {
e.l;
var n = rh(e, e.read_shift(4), r), a = e.read_shift(4);
return [ n, a > 0 ? th(e, a, n, r) : null ];
}
var oh = ih, fh = ih, lh = ih, ch = ih, hh = {
0: "BEEP",
1: "OPEN",
2: "OPEN.LINKS",
3: "CLOSE.ALL",
4: "SAVE",
5: "SAVE.AS",
6: "FILE.DELETE",
7: "PAGE.SETUP",
8: "PRINT",
9: "PRINTER.SETUP",
10: "QUIT",
11: "NEW.WINDOW",
12: "ARRANGE.ALL",
13: "WINDOW.SIZE",
14: "WINDOW.MOVE",
15: "FULL",
16: "CLOSE",
17: "RUN",
22: "SET.PRINT.AREA",
23: "SET.PRINT.TITLES",
24: "SET.PAGE.BREAK",
25: "REMOVE.PAGE.BREAK",
26: "FONT",
27: "DISPLAY",
28: "PROTECT.DOCUMENT",
29: "PRECISION",
30: "A1.R1C1",
31: "CALCULATE.NOW",
32: "CALCULATION",
34: "DATA.FIND",
35: "EXTRACT",
36: "DATA.DELETE",
37: "SET.DATABASE",
38: "SET.CRITERIA",
39: "SORT",
40: "DATA.SERIES",
41: "TABLE",
42: "FORMAT.NUMBER",
43: "ALIGNMENT",
44: "STYLE",
45: "BORDER",
46: "CELL.PROTECTION",
47: "COLUMN.WIDTH",
48: "UNDO",
49: "CUT",
50: "COPY",
51: "PASTE",
52: "CLEAR",
53: "PASTE.SPECIAL",
54: "EDIT.DELETE",
55: "INSERT",
56: "FILL.RIGHT",
57: "FILL.DOWN",
61: "DEFINE.NAME",
62: "CREATE.NAMES",
63: "FORMULA.GOTO",
64: "FORMULA.FIND",
65: "SELECT.LAST.CELL",
66: "SHOW.ACTIVE.CELL",
67: "GALLERY.AREA",
68: "GALLERY.BAR",
69: "GALLERY.COLUMN",
70: "GALLERY.LINE",
71: "GALLERY.PIE",
72: "GALLERY.SCATTER",
73: "COMBINATION",
74: "PREFERRED",
75: "ADD.OVERLAY",
76: "GRIDLINES",
77: "SET.PREFERRED",
78: "AXES",
79: "LEGEND",
80: "ATTACH.TEXT",
81: "ADD.ARROW",
82: "SELECT.CHART",
83: "SELECT.PLOT.AREA",
84: "PATTERNS",
85: "MAIN.CHART",
86: "OVERLAY",
87: "SCALE",
88: "FORMAT.LEGEND",
89: "FORMAT.TEXT",
90: "EDIT.REPEAT",
91: "PARSE",
92: "JUSTIFY",
93: "HIDE",
94: "UNHIDE",
95: "WORKSPACE",
96: "FORMULA",
97: "FORMULA.FILL",
98: "FORMULA.ARRAY",
99: "DATA.FIND.NEXT",
100: "DATA.FIND.PREV",
101: "FORMULA.FIND.NEXT",
102: "FORMULA.FIND.PREV",
103: "ACTIVATE",
104: "ACTIVATE.NEXT",
105: "ACTIVATE.PREV",
106: "UNLOCKED.NEXT",
107: "UNLOCKED.PREV",
108: "COPY.PICTURE",
109: "SELECT",
110: "DELETE.NAME",
111: "DELETE.FORMAT",
112: "VLINE",
113: "HLINE",
114: "VPAGE",
115: "HPAGE",
116: "VSCROLL",
117: "HSCROLL",
118: "ALERT",
119: "NEW",
120: "CANCEL.COPY",
121: "SHOW.CLIPBOARD",
122: "MESSAGE",
124: "PASTE.LINK",
125: "APP.ACTIVATE",
126: "DELETE.ARROW",
127: "ROW.HEIGHT",
128: "FORMAT.MOVE",
129: "FORMAT.SIZE",
130: "FORMULA.REPLACE",
131: "SEND.KEYS",
132: "SELECT.SPECIAL",
133: "APPLY.NAMES",
134: "REPLACE.FONT",
135: "FREEZE.PANES",
136: "SHOW.INFO",
137: "SPLIT",
138: "ON.WINDOW",
139: "ON.DATA",
140: "DISABLE.INPUT",
142: "OUTLINE",
143: "LIST.NAMES",
144: "FILE.CLOSE",
145: "SAVE.WORKBOOK",
146: "DATA.FORM",
147: "COPY.CHART",
148: "ON.TIME",
149: "WAIT",
150: "FORMAT.FONT",
151: "FILL.UP",
152: "FILL.LEFT",
153: "DELETE.OVERLAY",
155: "SHORT.MENUS",
159: "SET.UPDATE.STATUS",
161: "COLOR.PALETTE",
162: "DELETE.STYLE",
163: "WINDOW.RESTORE",
164: "WINDOW.MAXIMIZE",
166: "CHANGE.LINK",
167: "CALCULATE.DOCUMENT",
168: "ON.KEY",
169: "APP.RESTORE",
170: "APP.MOVE",
171: "APP.SIZE",
172: "APP.MINIMIZE",
173: "APP.MAXIMIZE",
174: "BRING.TO.FRONT",
175: "SEND.TO.BACK",
185: "MAIN.CHART.TYPE",
186: "OVERLAY.CHART.TYPE",
187: "SELECT.END",
188: "OPEN.MAIL",
189: "SEND.MAIL",
190: "STANDARD.FONT",
191: "CONSOLIDATE",
192: "SORT.SPECIAL",
193: "GALLERY.3D.AREA",
194: "GALLERY.3D.COLUMN",
195: "GALLERY.3D.LINE",
196: "GALLERY.3D.PIE",
197: "VIEW.3D",
198: "GOAL.SEEK",
199: "WORKGROUP",
200: "FILL.GROUP",
201: "UPDATE.LINK",
202: "PROMOTE",
203: "DEMOTE",
204: "SHOW.DETAIL",
206: "UNGROUP",
207: "OBJECT.PROPERTIES",
208: "SAVE.NEW.OBJECT",
209: "SHARE",
210: "SHARE.NAME",
211: "DUPLICATE",
212: "APPLY.STYLE",
213: "ASSIGN.TO.OBJECT",
214: "OBJECT.PROTECTION",
215: "HIDE.OBJECT",
216: "SET.EXTRACT",
217: "CREATE.PUBLISHER",
218: "SUBSCRIBE.TO",
219: "ATTRIBUTES",
220: "SHOW.TOOLBAR",
222: "PRINT.PREVIEW",
223: "EDIT.COLOR",
224: "SHOW.LEVELS",
225: "FORMAT.MAIN",
226: "FORMAT.OVERLAY",
227: "ON.RECALC",
228: "EDIT.SERIES",
229: "DEFINE.STYLE",
240: "LINE.PRINT",
243: "ENTER.DATA",
249: "GALLERY.RADAR",
250: "MERGE.STYLES",
251: "EDITION.OPTIONS",
252: "PASTE.PICTURE",
253: "PASTE.PICTURE.LINK",
254: "SPELLING",
256: "ZOOM",
259: "INSERT.OBJECT",
260: "WINDOW.MINIMIZE",
265: "SOUND.NOTE",
266: "SOUND.PLAY",
267: "FORMAT.SHAPE",
268: "EXTEND.POLYGON",
269: "FORMAT.AUTO",
272: "GALLERY.3D.BAR",
273: "GALLERY.3D.SURFACE",
274: "FILL.AUTO",
276: "CUSTOMIZE.TOOLBAR",
277: "ADD.TOOL",
278: "EDIT.OBJECT",
279: "ON.DOUBLECLICK",
280: "ON.ENTRY",
281: "WORKBOOK.ADD",
282: "WORKBOOK.MOVE",
283: "WORKBOOK.COPY",
284: "WORKBOOK.OPTIONS",
285: "SAVE.WORKSPACE",
288: "CHART.WIZARD",
289: "DELETE.TOOL",
290: "MOVE.TOOL",
291: "WORKBOOK.SELECT",
292: "WORKBOOK.ACTIVATE",
293: "ASSIGN.TO.TOOL",
295: "COPY.TOOL",
296: "RESET.TOOL",
297: "CONSTRAIN.NUMERIC",
298: "PASTE.TOOL",
302: "WORKBOOK.NEW",
305: "SCENARIO.CELLS",
306: "SCENARIO.DELETE",
307: "SCENARIO.ADD",
308: "SCENARIO.EDIT",
309: "SCENARIO.SHOW",
310: "SCENARIO.SHOW.NEXT",
311: "SCENARIO.SUMMARY",
312: "PIVOT.TABLE.WIZARD",
313: "PIVOT.FIELD.PROPERTIES",
314: "PIVOT.FIELD",
315: "PIVOT.ITEM",
316: "PIVOT.ADD.FIELDS",
318: "OPTIONS.CALCULATION",
319: "OPTIONS.EDIT",
320: "OPTIONS.VIEW",
321: "ADDIN.MANAGER",
322: "MENU.EDITOR",
323: "ATTACH.TOOLBARS",
324: "VBAActivate",
325: "OPTIONS.CHART",
328: "VBA.INSERT.FILE",
330: "VBA.PROCEDURE.DEFINITION",
336: "ROUTING.SLIP",
338: "ROUTE.DOCUMENT",
339: "MAIL.LOGON",
342: "INSERT.PICTURE",
343: "EDIT.TOOL",
344: "GALLERY.DOUGHNUT",
350: "CHART.TREND",
352: "PIVOT.ITEM.PROPERTIES",
354: "WORKBOOK.INSERT",
355: "OPTIONS.TRANSITION",
356: "OPTIONS.GENERAL",
370: "FILTER.ADVANCED",
373: "MAIL.ADD.MAILER",
374: "MAIL.DELETE.MAILER",
375: "MAIL.REPLY",
376: "MAIL.REPLY.ALL",
377: "MAIL.FORWARD",
378: "MAIL.NEXT.LETTER",
379: "DATA.LABEL",
380: "INSERT.TITLE",
381: "FONT.PROPERTIES",
382: "MACRO.OPTIONS",
383: "WORKBOOK.HIDE",
384: "WORKBOOK.UNHIDE",
385: "WORKBOOK.DELETE",
386: "WORKBOOK.NAME",
388: "GALLERY.CUSTOM",
390: "ADD.CHART.AUTOFORMAT",
391: "DELETE.CHART.AUTOFORMAT",
392: "CHART.ADD.DATA",
393: "AUTO.OUTLINE",
394: "TAB.ORDER",
395: "SHOW.DIALOG",
396: "SELECT.ALL",
397: "UNGROUP.SHEETS",
398: "SUBTOTAL.CREATE",
399: "SUBTOTAL.REMOVE",
400: "RENAME.OBJECT",
412: "WORKBOOK.SCROLL",
413: "WORKBOOK.NEXT",
414: "WORKBOOK.PREV",
415: "WORKBOOK.TAB.SPLIT",
416: "FULL.SCREEN",
417: "WORKBOOK.PROTECT",
420: "SCROLLBAR.PROPERTIES",
421: "PIVOT.SHOW.PAGES",
422: "TEXT.TO.COLUMNS",
423: "FORMAT.CHARTTYPE",
424: "LINK.FORMAT",
425: "TRACER.DISPLAY",
430: "TRACER.NAVIGATE",
431: "TRACER.CLEAR",
432: "TRACER.ERROR",
433: "PIVOT.FIELD.GROUP",
434: "PIVOT.FIELD.UNGROUP",
435: "CHECKBOX.PROPERTIES",
436: "LABEL.PROPERTIES",
437: "LISTBOX.PROPERTIES",
438: "EDITBOX.PROPERTIES",
439: "PIVOT.REFRESH",
440: "LINK.COMBO",
441: "OPEN.TEXT",
442: "HIDE.DIALOG",
443: "SET.DIALOG.FOCUS",
444: "ENABLE.OBJECT",
445: "PUSHBUTTON.PROPERTIES",
446: "SET.DIALOG.DEFAULT",
447: "FILTER",
448: "FILTER.SHOW.ALL",
449: "CLEAR.OUTLINE",
450: "FUNCTION.WIZARD",
451: "ADD.LIST.ITEM",
452: "SET.LIST.ITEM",
453: "REMOVE.LIST.ITEM",
454: "SELECT.LIST.ITEM",
455: "SET.CONTROL.VALUE",
456: "SAVE.COPY.AS",
458: "OPTIONS.LISTS.ADD",
459: "OPTIONS.LISTS.DELETE",
460: "SERIES.AXES",
461: "SERIES.X",
462: "SERIES.Y",
463: "ERRORBAR.X",
464: "ERRORBAR.Y",
465: "FORMAT.CHART",
466: "SERIES.ORDER",
467: "MAIL.LOGOFF",
468: "CLEAR.ROUTING.SLIP",
469: "APP.ACTIVATE.MICROSOFT",
470: "MAIL.EDIT.MAILER",
471: "ON.SHEET",
472: "STANDARD.WIDTH",
473: "SCENARIO.MERGE",
474: "SUMMARY.INFO",
475: "FIND.FILE",
476: "ACTIVE.CELL.FONT",
477: "ENABLE.TIPWIZARD",
478: "VBA.MAKE.ADDIN",
480: "INSERTDATATABLE",
481: "WORKGROUP.OPTIONS",
482: "MAIL.SEND.MAILER",
485: "AUTOCORRECT",
489: "POST.DOCUMENT",
491: "PICKLIST",
493: "VIEW.SHOW",
494: "VIEW.DEFINE",
495: "VIEW.DELETE",
509: "SHEET.BACKGROUND",
510: "INSERT.MAP.OBJECT",
511: "OPTIONS.MENONO",
517: "MSOCHECKS",
518: "NORMAL",
519: "LAYOUT",
520: "RM.PRINT.AREA",
521: "CLEAR.PRINT.AREA",
522: "ADD.PRINT.AREA",
523: "MOVE.BRK",
545: "HIDECURR.NOTE",
546: "HIDEALL.NOTES",
547: "DELETE.NOTE",
548: "TRAVERSE.NOTES",
549: "ACTIVATE.NOTES",
620: "PROTECT.REVISIONS",
621: "UNPROTECT.REVISIONS",
647: "OPTIONS.ME",
653: "WEB.PUBLISH",
667: "NEWWEBQUERY",
673: "PIVOT.TABLE.CHART",
753: "OPTIONS.SAVE",
755: "OPTIONS.SPELL",
808: "HIDEALL.INKANNOTS"
}, uh = {
0: "COUNT",
1: "IF",
2: "ISNA",
3: "ISERROR",
4: "SUM",
5: "AVERAGE",
6: "MIN",
7: "MAX",
8: "ROW",
9: "COLUMN",
10: "NA",
11: "NPV",
12: "STDEV",
13: "DOLLAR",
14: "FIXED",
15: "SIN",
16: "COS",
17: "TAN",
18: "ATAN",
19: "PI",
20: "SQRT",
21: "EXP",
22: "LN",
23: "LOG10",
24: "ABS",
25: "INT",
26: "SIGN",
27: "ROUND",
28: "LOOKUP",
29: "INDEX",
30: "REPT",
31: "MID",
32: "LEN",
33: "VALUE",
34: "TRUE",
35: "FALSE",
36: "AND",
37: "OR",
38: "NOT",
39: "MOD",
40: "DCOUNT",
41: "DSUM",
42: "DAVERAGE",
43: "DMIN",
44: "DMAX",
45: "DSTDEV",
46: "VAR",
47: "DVAR",
48: "TEXT",
49: "LINEST",
50: "TREND",
51: "LOGEST",
52: "GROWTH",
53: "GOTO",
54: "HALT",
55: "RETURN",
56: "PV",
57: "FV",
58: "NPER",
59: "PMT",
60: "RATE",
61: "MIRR",
62: "IRR",
63: "RAND",
64: "MATCH",
65: "DATE",
66: "TIME",
67: "DAY",
68: "MONTH",
69: "YEAR",
70: "WEEKDAY",
71: "HOUR",
72: "MINUTE",
73: "SECOND",
74: "NOW",
75: "AREAS",
76: "ROWS",
77: "COLUMNS",
78: "OFFSET",
79: "ABSREF",
80: "RELREF",
81: "ARGUMENT",
82: "SEARCH",
83: "TRANSPOSE",
84: "ERROR",
85: "STEP",
86: "TYPE",
87: "ECHO",
88: "SET.NAME",
89: "CALLER",
90: "DEREF",
91: "WINDOWS",
92: "SERIES",
93: "DOCUMENTS",
94: "ACTIVE.CELL",
95: "SELECTION",
96: "RESULT",
97: "ATAN2",
98: "ASIN",
99: "ACOS",
100: "CHOOSE",
101: "HLOOKUP",
102: "VLOOKUP",
103: "LINKS",
104: "INPUT",
105: "ISREF",
106: "GET.FORMULA",
107: "GET.NAME",
108: "SET.VALUE",
109: "LOG",
110: "EXEC",
111: "CHAR",
112: "LOWER",
113: "UPPER",
114: "PROPER",
115: "LEFT",
116: "RIGHT",
117: "EXACT",
118: "TRIM",
119: "REPLACE",
120: "SUBSTITUTE",
121: "CODE",
122: "NAMES",
123: "DIRECTORY",
124: "FIND",
125: "CELL",
126: "ISERR",
127: "ISTEXT",
128: "ISNUMBER",
129: "ISBLANK",
130: "T",
131: "N",
132: "FOPEN",
133: "FCLOSE",
134: "FSIZE",
135: "FREADLN",
136: "FREAD",
137: "FWRITELN",
138: "FWRITE",
139: "FPOS",
140: "DATEVALUE",
141: "TIMEVALUE",
142: "SLN",
143: "SYD",
144: "DDB",
145: "GET.DEF",
146: "REFTEXT",
147: "TEXTREF",
148: "INDIRECT",
149: "REGISTER",
150: "CALL",
151: "ADD.BAR",
152: "ADD.MENU",
153: "ADD.COMMAND",
154: "ENABLE.COMMAND",
155: "CHECK.COMMAND",
156: "RENAME.COMMAND",
157: "SHOW.BAR",
158: "DELETE.MENU",
159: "DELETE.COMMAND",
160: "GET.CHART.ITEM",
161: "DIALOG.BOX",
162: "CLEAN",
163: "MDETERM",
164: "MINVERSE",
165: "MMULT",
166: "FILES",
167: "IPMT",
168: "PPMT",
169: "COUNTA",
170: "CANCEL.KEY",
171: "FOR",
172: "WHILE",
173: "BREAK",
174: "NEXT",
175: "INITIATE",
176: "REQUEST",
177: "POKE",
178: "EXECUTE",
179: "TERMINATE",
180: "RESTART",
181: "HELP",
182: "GET.BAR",
183: "PRODUCT",
184: "FACT",
185: "GET.CELL",
186: "GET.WORKSPACE",
187: "GET.WINDOW",
188: "GET.DOCUMENT",
189: "DPRODUCT",
190: "ISNONTEXT",
191: "GET.NOTE",
192: "NOTE",
193: "STDEVP",
194: "VARP",
195: "DSTDEVP",
196: "DVARP",
197: "TRUNC",
198: "ISLOGICAL",
199: "DCOUNTA",
200: "DELETE.BAR",
201: "UNREGISTER",
204: "USDOLLAR",
205: "FINDB",
206: "SEARCHB",
207: "REPLACEB",
208: "LEFTB",
209: "RIGHTB",
210: "MIDB",
211: "LENB",
212: "ROUNDUP",
213: "ROUNDDOWN",
214: "ASC",
215: "DBCS",
216: "RANK",
219: "ADDRESS",
220: "DAYS360",
221: "TODAY",
222: "VDB",
223: "ELSE",
224: "ELSE.IF",
225: "END.IF",
226: "FOR.CELL",
227: "MEDIAN",
228: "SUMPRODUCT",
229: "SINH",
230: "COSH",
231: "TANH",
232: "ASINH",
233: "ACOSH",
234: "ATANH",
235: "DGET",
236: "CREATE.OBJECT",
237: "VOLATILE",
238: "LAST.ERROR",
239: "CUSTOM.UNDO",
240: "CUSTOM.REPEAT",
241: "FORMULA.CONVERT",
242: "GET.LINK.INFO",
243: "TEXT.BOX",
244: "INFO",
245: "GROUP",
246: "GET.OBJECT",
247: "DB",
248: "PAUSE",
251: "RESUME",
252: "FREQUENCY",
253: "ADD.TOOLBAR",
254: "DELETE.TOOLBAR",
255: "User",
256: "RESET.TOOLBAR",
257: "EVALUATE",
258: "GET.TOOLBAR",
259: "GET.TOOL",
260: "SPELLING.CHECK",
261: "ERROR.TYPE",
262: "APP.TITLE",
263: "WINDOW.TITLE",
264: "SAVE.TOOLBAR",
265: "ENABLE.TOOL",
266: "PRESS.TOOL",
267: "REGISTER.ID",
268: "GET.WORKBOOK",
269: "AVEDEV",
270: "BETADIST",
271: "GAMMALN",
272: "BETAINV",
273: "BINOMDIST",
274: "CHIDIST",
275: "CHIINV",
276: "COMBIN",
277: "CONFIDENCE",
278: "CRITBINOM",
279: "EVEN",
280: "EXPONDIST",
281: "FDIST",
282: "FINV",
283: "FISHER",
284: "FISHERINV",
285: "FLOOR",
286: "GAMMADIST",
287: "GAMMAINV",
288: "CEILING",
289: "HYPGEOMDIST",
290: "LOGNORMDIST",
291: "LOGINV",
292: "NEGBINOMDIST",
293: "NORMDIST",
294: "NORMSDIST",
295: "NORMINV",
296: "NORMSINV",
297: "STANDARDIZE",
298: "ODD",
299: "PERMUT",
300: "POISSON",
301: "TDIST",
302: "WEIBULL",
303: "SUMXMY2",
304: "SUMX2MY2",
305: "SUMX2PY2",
306: "CHITEST",
307: "CORREL",
308: "COVAR",
309: "FORECAST",
310: "FTEST",
311: "INTERCEPT",
312: "PEARSON",
313: "RSQ",
314: "STEYX",
315: "SLOPE",
316: "TTEST",
317: "PROB",
318: "DEVSQ",
319: "GEOMEAN",
320: "HARMEAN",
321: "SUMSQ",
322: "KURT",
323: "SKEW",
324: "ZTEST",
325: "LARGE",
326: "SMALL",
327: "QUARTILE",
328: "PERCENTILE",
329: "PERCENTRANK",
330: "MODE",
331: "TRIMMEAN",
332: "TINV",
334: "MOVIE.COMMAND",
335: "GET.MOVIE",
336: "CONCATENATE",
337: "POWER",
338: "PIVOT.ADD.DATA",
339: "GET.PIVOT.TABLE",
340: "GET.PIVOT.FIELD",
341: "GET.PIVOT.ITEM",
342: "RADIANS",
343: "DEGREES",
344: "SUBTOTAL",
345: "SUMIF",
346: "COUNTIF",
347: "COUNTBLANK",
348: "SCENARIO.GET",
349: "OPTIONS.LISTS.GET",
350: "ISPMT",
351: "DATEDIF",
352: "DATESTRING",
353: "NUMBERSTRING",
354: "ROMAN",
355: "OPEN.DIALOG",
356: "SAVE.DIALOG",
357: "VIEW.GET",
358: "GETPIVOTDATA",
359: "HYPERLINK",
360: "PHONETIC",
361: "AVERAGEA",
362: "MAXA",
363: "MINA",
364: "STDEVPA",
365: "VARPA",
366: "STDEVA",
367: "VARA",
368: "BAHTTEXT",
369: "THAIDAYOFWEEK",
370: "THAIDIGIT",
371: "THAIMONTHOFYEAR",
372: "THAINUMSOUND",
373: "THAINUMSTRING",
374: "THAISTRINGLENGTH",
375: "ISTHAIDIGIT",
376: "ROUNDBAHTDOWN",
377: "ROUNDBAHTUP",
378: "THAIYEAR",
379: "RTD",
380: "CUBEVALUE",
381: "CUBEMEMBER",
382: "CUBEMEMBERPROPERTY",
383: "CUBERANKEDMEMBER",
384: "HEX2BIN",
385: "HEX2DEC",
386: "HEX2OCT",
387: "DEC2BIN",
388: "DEC2HEX",
389: "DEC2OCT",
390: "OCT2BIN",
391: "OCT2HEX",
392: "OCT2DEC",
393: "BIN2DEC",
394: "BIN2OCT",
395: "BIN2HEX",
396: "IMSUB",
397: "IMDIV",
398: "IMPOWER",
399: "IMABS",
400: "IMSQRT",
401: "IMLN",
402: "IMLOG2",
403: "IMLOG10",
404: "IMSIN",
405: "IMCOS",
406: "IMEXP",
407: "IMARGUMENT",
408: "IMCONJUGATE",
409: "IMAGINARY",
410: "IMREAL",
411: "COMPLEX",
412: "IMSUM",
413: "IMPRODUCT",
414: "SERIESSUM",
415: "FACTDOUBLE",
416: "SQRTPI",
417: "QUOTIENT",
418: "DELTA",
419: "GESTEP",
420: "ISEVEN",
421: "ISODD",
422: "MROUND",
423: "ERF",
424: "ERFC",
425: "BESSELJ",
426: "BESSELK",
427: "BESSELY",
428: "BESSELI",
429: "XIRR",
430: "XNPV",
431: "PRICEMAT",
432: "YIELDMAT",
433: "INTRATE",
434: "RECEIVED",
435: "DISC",
436: "PRICEDISC",
437: "YIELDDISC",
438: "TBILLEQ",
439: "TBILLPRICE",
440: "TBILLYIELD",
441: "PRICE",
442: "YIELD",
443: "DOLLARDE",
444: "DOLLARFR",
445: "NOMINAL",
446: "EFFECT",
447: "CUMPRINC",
448: "CUMIPMT",
449: "EDATE",
450: "EOMONTH",
451: "YEARFRAC",
452: "COUPDAYBS",
453: "COUPDAYS",
454: "COUPDAYSNC",
455: "COUPNCD",
456: "COUPNUM",
457: "COUPPCD",
458: "DURATION",
459: "MDURATION",
460: "ODDLPRICE",
461: "ODDLYIELD",
462: "ODDFPRICE",
463: "ODDFYIELD",
464: "RANDBETWEEN",
465: "WEEKNUM",
466: "AMORDEGRC",
467: "AMORLINC",
468: "CONVERT",
724: "SHEETJS",
469: "ACCRINT",
470: "ACCRINTM",
471: "WORKDAY",
472: "NETWORKDAYS",
473: "GCD",
474: "MULTINOMIAL",
475: "LCM",
476: "FVSCHEDULE",
477: "CUBEKPIMEMBER",
478: "CUBESET",
479: "CUBESETCOUNT",
480: "IFERROR",
481: "COUNTIFS",
482: "SUMIFS",
483: "AVERAGEIF",
484: "AVERAGEIFS"
}, dh = {
2: 1,
3: 1,
15: 1,
16: 1,
17: 1,
18: 1,
19: 0,
20: 1,
21: 1,
22: 1,
23: 1,
24: 1,
25: 1,
26: 1,
27: 2,
30: 2,
31: 3,
32: 1,
33: 1,
38: 1,
39: 2,
40: 3,
41: 3,
42: 3,
43: 3,
44: 3,
45: 3,
47: 3,
48: 2,
53: 1,
61: 3,
65: 3,
66: 3,
67: 1,
68: 1,
69: 1,
70: 1,
71: 1,
72: 1,
73: 1,
75: 1,
76: 1,
77: 1,
79: 2,
80: 2,
83: 1,
85: 0,
86: 1,
90: 1,
97: 2,
98: 1,
99: 1,
101: 3,
102: 3,
105: 1,
111: 1,
112: 1,
113: 1,
114: 1,
117: 2,
118: 1,
119: 4,
121: 1,
126: 1,
127: 1,
128: 1,
129: 1,
130: 1,
131: 1,
133: 1,
134: 1,
135: 1,
136: 2,
137: 2,
138: 2,
140: 1,
141: 1,
142: 3,
143: 4,
144: 4,
162: 1,
163: 1,
164: 1,
165: 2,
172: 1,
175: 2,
176: 2,
177: 3,
178: 2,
179: 1,
184: 1,
189: 3,
190: 1,
195: 3,
196: 3,
197: 1,
198: 1,
199: 3,
201: 1,
207: 4,
210: 3,
211: 1,
212: 2,
213: 2,
214: 1,
215: 1,
229: 1,
230: 1,
231: 1,
232: 1,
233: 1,
234: 1,
235: 3,
244: 1,
247: 4,
252: 2,
257: 1,
261: 1,
271: 1,
273: 4,
274: 2,
275: 2,
276: 2,
277: 3,
278: 3,
279: 1,
280: 3,
281: 3,
282: 3,
283: 1,
284: 1,
285: 2,
286: 4,
287: 3,
288: 2,
289: 4,
290: 3,
291: 3,
292: 3,
293: 4,
294: 1,
295: 3,
296: 1,
297: 3,
298: 1,
299: 2,
300: 3,
301: 3,
302: 4,
303: 2,
304: 2,
305: 2,
306: 2,
307: 2,
308: 2,
309: 3,
310: 2,
311: 2,
312: 2,
313: 2,
314: 2,
315: 2,
316: 4,
325: 2,
326: 2,
327: 2,
328: 2,
331: 2,
332: 2,
337: 2,
342: 1,
343: 1,
346: 2,
347: 1,
350: 4,
351: 3,
352: 1,
353: 2,
360: 1,
368: 1,
369: 1,
370: 1,
371: 1,
372: 1,
373: 1,
374: 1,
375: 1,
376: 1,
377: 1,
378: 1,
382: 3,
385: 1,
392: 1,
393: 1,
396: 2,
397: 2,
398: 2,
399: 1,
400: 1,
401: 1,
402: 1,
403: 1,
404: 1,
405: 1,
406: 1,
407: 1,
408: 1,
409: 1,
410: 1,
414: 4,
415: 1,
416: 1,
417: 2,
420: 1,
421: 1,
422: 2,
424: 1,
425: 2,
426: 2,
427: 2,
428: 2,
430: 3,
438: 3,
439: 3,
440: 3,
443: 2,
444: 2,
445: 2,
446: 2,
447: 6,
448: 6,
449: 2,
450: 2,
464: 2,
468: 3,
476: 2,
479: 1,
480: 2,
65535: 0
}, ph = {
"_xlfn.ACOT": "ACOT",
"_xlfn.ACOTH": "ACOTH",
"_xlfn.AGGREGATE": "AGGREGATE",
"_xlfn.ARABIC": "ARABIC",
"_xlfn.AVERAGEIF": "AVERAGEIF",
"_xlfn.AVERAGEIFS": "AVERAGEIFS",
"_xlfn.BASE": "BASE",
"_xlfn.BETA.DIST": "BETA.DIST",
"_xlfn.BETA.INV": "BETA.INV",
"_xlfn.BINOM.DIST": "BINOM.DIST",
"_xlfn.BINOM.DIST.RANGE": "BINOM.DIST.RANGE",
"_xlfn.BINOM.INV": "BINOM.INV",
"_xlfn.BITAND": "BITAND",
"_xlfn.BITLSHIFT": "BITLSHIFT",
"_xlfn.BITOR": "BITOR",
"_xlfn.BITRSHIFT": "BITRSHIFT",
"_xlfn.BITXOR": "BITXOR",
"_xlfn.CEILING.MATH": "CEILING.MATH",
"_xlfn.CEILING.PRECISE": "CEILING.PRECISE",
"_xlfn.CHISQ.DIST": "CHISQ.DIST",
"_xlfn.CHISQ.DIST.RT": "CHISQ.DIST.RT",
"_xlfn.CHISQ.INV": "CHISQ.INV",
"_xlfn.CHISQ.INV.RT": "CHISQ.INV.RT",
"_xlfn.CHISQ.TEST": "CHISQ.TEST",
"_xlfn.COMBINA": "COMBINA",
"_xlfn.CONFIDENCE.NORM": "CONFIDENCE.NORM",
"_xlfn.CONFIDENCE.T": "CONFIDENCE.T",
"_xlfn.COT": "COT",
"_xlfn.COTH": "COTH",
"_xlfn.COUNTIFS": "COUNTIFS",
"_xlfn.COVARIANCE.P": "COVARIANCE.P",
"_xlfn.COVARIANCE.S": "COVARIANCE.S",
"_xlfn.CSC": "CSC",
"_xlfn.CSCH": "CSCH",
"_xlfn.DAYS": "DAYS",
"_xlfn.DECIMAL": "DECIMAL",
"_xlfn.ECMA.CEILING": "ECMA.CEILING",
"_xlfn.ERF.PRECISE": "ERF.PRECISE",
"_xlfn.ERFC.PRECISE": "ERFC.PRECISE",
"_xlfn.EXPON.DIST": "EXPON.DIST",
"_xlfn.F.DIST": "F.DIST",
"_xlfn.F.DIST.RT": "F.DIST.RT",
"_xlfn.F.INV": "F.INV",
"_xlfn.F.INV.RT": "F.INV.RT",
"_xlfn.F.TEST": "F.TEST",
"_xlfn.FILTERXML": "FILTERXML",
"_xlfn.FLOOR.MATH": "FLOOR.MATH",
"_xlfn.FLOOR.PRECISE": "FLOOR.PRECISE",
"_xlfn.FORMULATEXT": "FORMULATEXT",
"_xlfn.GAMMA": "GAMMA",
"_xlfn.GAMMA.DIST": "GAMMA.DIST",
"_xlfn.GAMMA.INV": "GAMMA.INV",
"_xlfn.GAMMALN.PRECISE": "GAMMALN.PRECISE",
"_xlfn.GAUSS": "GAUSS",
"_xlfn.HYPGEOM.DIST": "HYPGEOM.DIST",
"_xlfn.IFNA": "IFNA",
"_xlfn.IFERROR": "IFERROR",
"_xlfn.IMCOSH": "IMCOSH",
"_xlfn.IMCOT": "IMCOT",
"_xlfn.IMCSC": "IMCSC",
"_xlfn.IMCSCH": "IMCSCH",
"_xlfn.IMSEC": "IMSEC",
"_xlfn.IMSECH": "IMSECH",
"_xlfn.IMSINH": "IMSINH",
"_xlfn.IMTAN": "IMTAN",
"_xlfn.ISFORMULA": "ISFORMULA",
"_xlfn.ISO.CEILING": "ISO.CEILING",
"_xlfn.ISOWEEKNUM": "ISOWEEKNUM",
"_xlfn.LOGNORM.DIST": "LOGNORM.DIST",
"_xlfn.LOGNORM.INV": "LOGNORM.INV",
"_xlfn.MODE.MULT": "MODE.MULT",
"_xlfn.MODE.SNGL": "MODE.SNGL",
"_xlfn.MUNIT": "MUNIT",
"_xlfn.NEGBINOM.DIST": "NEGBINOM.DIST",
"_xlfn.NETWORKDAYS.INTL": "NETWORKDAYS.INTL",
"_xlfn.NIGBINOM": "NIGBINOM",
"_xlfn.NORM.DIST": "NORM.DIST",
"_xlfn.NORM.INV": "NORM.INV",
"_xlfn.NORM.S.DIST": "NORM.S.DIST",
"_xlfn.NORM.S.INV": "NORM.S.INV",
"_xlfn.NUMBERVALUE": "NUMBERVALUE",
"_xlfn.PDURATION": "PDURATION",
"_xlfn.PERCENTILE.EXC": "PERCENTILE.EXC",
"_xlfn.PERCENTILE.INC": "PERCENTILE.INC",
"_xlfn.PERCENTRANK.EXC": "PERCENTRANK.EXC",
"_xlfn.PERCENTRANK.INC": "PERCENTRANK.INC",
"_xlfn.PERMUTATIONA": "PERMUTATIONA",
"_xlfn.PHI": "PHI",
"_xlfn.POISSON.DIST": "POISSON.DIST",
"_xlfn.QUARTILE.EXC": "QUARTILE.EXC",
"_xlfn.QUARTILE.INC": "QUARTILE.INC",
"_xlfn.QUERYSTRING": "QUERYSTRING",
"_xlfn.RANK.AVG": "RANK.AVG",
"_xlfn.RANK.EQ": "RANK.EQ",
"_xlfn.RRI": "RRI",
"_xlfn.SEC": "SEC",
"_xlfn.SECH": "SECH",
"_xlfn.SHEET": "SHEET",
"_xlfn.SHEETS": "SHEETS",
"_xlfn.SKEW.P": "SKEW.P",
"_xlfn.STDEV.P": "STDEV.P",
"_xlfn.STDEV.S": "STDEV.S",
"_xlfn.SUMIFS": "SUMIFS",
"_xlfn.T.DIST": "T.DIST",
"_xlfn.T.DIST.2T": "T.DIST.2T",
"_xlfn.T.DIST.RT": "T.DIST.RT",
"_xlfn.T.INV": "T.INV",
"_xlfn.T.INV.2T": "T.INV.2T",
"_xlfn.T.TEST": "T.TEST",
"_xlfn.UNICHAR": "UNICHAR",
"_xlfn.UNICODE": "UNICODE",
"_xlfn.VAR.P": "VAR.P",
"_xlfn.VAR.S": "VAR.S",
"_xlfn.WEBSERVICE": "WEBSERVICE",
"_xlfn.WEIBULL.DIST": "WEIBULL.DIST",
"_xlfn.WORKDAY.INTL": "WORKDAY.INTL",
"_xlfn.XOR": "XOR",
"_xlfn.Z.TEST": "Z.TEST"
};
function mh(e) {
"of:" == e.substr(0, 3) && (e = e.substr(3));
61 == e.charCodeAt(0) && 61 == (e = e.substr(1)).charCodeAt(0) && (e = e.substr(1));
return (e = (e = (e = e.replace(/COM\.MICROSOFT\./g, "")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(e, t) {
return t.replace(/\./g, "");
})).replace(/\[.(#[A-Z]*[?!])\]/g, "$1")).replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function gh(e) {
return ("of:=" + e.replace(Uc, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")).replace(/;/g, "|").replace(/,/g, ";");
}
function bh(e) {
var t = e.split(":");
return [ t[0].split(".")[0], t[0].split(".")[1] + ":" + t[1].split(".")[1] ];
}
var vh = {}, Eh = {};
gr.WS = [ "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet" ];
function Sh(e, t) {
for (var r = 0, n = e.length; r < n; ++r) if (e[r].t === t) {
e.Count++;
return r;
}
e[n] = {
t: t
};
e.Count++;
e.Unique++;
return n;
}
function Bh(e, t) {
var r = {
min: e + 1,
max: e + 1
}, n = -1;
t.MDW && (Ql = t.MDW);
null != t.width ? r.customWidth = 1 : null != t.wpx ? n = Jl(t.wpx) : null != t.wch && (n = t.wch);
if (n > -1) {
r.width = ec(n);
r.customWidth = 1;
} else null != t.width && (r.width = t.width);
t.hidden && (r.hidden = !0);
return r;
}
function wh(e, t) {
if (e) {
var r = [ .7, .7, .75, .75, .3, .3 ];
"xlml" == t && (r = [ 1, 1, 1, 1, .5, .5 ]);
null == e.left && (e.left = r[0]);
null == e.right && (e.right = r[1]);
null == e.top && (e.top = r[2]);
null == e.bottom && (e.bottom = r[3]);
null == e.header && (e.header = r[4]);
null == e.footer && (e.footer = r[5]);
}
}
function Ch(e, t, r) {
var n = r.revssf[null != t.z ? t.z : "General"], a = 60, s = e.length;
if (null == n && r.ssf) for (;a < 392; ++a) if (null == r.ssf[a]) {
m.load(t.z, a);
r.ssf[a] = t.z;
r.revssf[t.z] = n = a;
break;
}
for (a = 0; a != s; ++a) if (e[a].numFmtId === n) return a;
e[s] = {
numFmtId: n,
fontId: 0,
fillId: 0,
borderId: 0,
xfId: 0,
applyNumberFormat: 1
};
return s;
}
function _h(e, t, r, n, a, s) {
if ("z" !== e.t) {
"d" === e.t && "string" == typeof e.v && (e.v = O(e.v));
try {
n.cellNF && (e.z = m._table[t]);
} catch (e) {
if (n.WTF) throw e;
}
if (!n || !1 !== n.cellText) try {
if ("e" === e.t) e.w = e.w || Qt[e.v]; else if (0 === t) if ("n" === e.t) (0 | e.v) === e.v ? e.w = m._general_int(e.v, Eh) : e.w = m._general_num(e.v, Eh); else if ("d" === e.t) {
var i = k(e.v);
e.w = (0 | i) === i ? m._general_int(i, Eh) : m._general_num(i, Eh);
} else {
if (void 0 === e.v) return "";
e.w = m._general(e.v, Eh);
} else "d" === e.t ? e.w = m.format(t, k(e.v), Eh) : e.w = m.format(t, e.v, Eh);
} catch (e) {
if (n.WTF) throw e;
}
if (r) try {
e.s = s.Fills[r];
if (e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb) {
e.s.fgColor.rgb = Kl(a.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0);
n.WTF && (e.s.fgColor.raw_rgb = a.themeElements.clrScheme[e.s.fgColor.theme].rgb);
}
if (e.s.bgColor && e.s.bgColor.theme) {
e.s.bgColor.rgb = Kl(a.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0);
n.WTF && (e.s.bgColor.raw_rgb = a.themeElements.clrScheme[e.s.bgColor.theme].rgb);
}
} catch (e) {
if (n.WTF) throw e;
}
}
}
var Th = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g, kh = /<(?:\w+:)?sheetData>([^\u2603]*)<\/(?:\w+:)?sheetData>/, xh = /<(?:\w:)?hyperlink [^>]*>/gm, Ah = /"(\w*:\w*)"/, Ih = /<(?:\w:)?col[^>]*[\/]?>/g, yh = /<(?:\w:)?autoFilter[^>]*([\/]|>([^\u2603]*)<\/(?:\w:)?autoFilter)>/g, Rh = /<(?:\w:)?pageMargins[^>]*\/>/g;
function Dh(e, t, r, n, a, s) {
if (!e) return e;
null != o && null == t.dense && (t.dense = o);
var i = t.dense ? [] : {}, f = {
s: {
r: 2e6,
c: 2e6
},
e: {
r: 0,
c: 0
}
}, l = "", c = "", h = e.match(kh);
if (h) {
l = e.substr(0, h.index);
c = e.substr(h.index + h[0].length);
} else l = c = e;
var u = (l.match(/<(?:\w*:)?dimension/) || {
index: -1
}).index;
if (u > 0) {
var d = l.substr(u, 50).match(Ah);
d && function(e, t) {
var r = _t(t);
r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = Ct(r));
}(i, d[1]);
}
var p = [];
if (t.cellStyles) {
var m = l.match(Ih);
m && function(e, t) {
for (var r = !1, n = 0; n != t.length; ++n) {
var a = $(t[n], !0);
a.hidden && (a.hidden = oe(a.hidden));
var s = parseInt(a.min, 10) - 1, i = parseInt(a.max, 10) - 1;
delete a.min;
delete a.max;
a.width = +a.width;
if (!r && a.width) {
r = !0;
rc(a.width);
}
nc(a);
for (;s <= i; ) e[s++] = P(a);
}
}(p, m);
}
h && Fh(h[1], i, t, f, a, s);
var g = c.match(yh);
g && (i["!autofilter"] = function(e) {
return {
ref: (e.match(/ref="([^"]*)"/) || [])[1]
};
}(g[0]));
var b = [], v = c.match(Th);
if (v) for (u = 0; u != v.length; ++u) b[u] = _t(v[u].substr(v[u].indexOf('"') + 1));
var E = c.match(xh);
E && function(e, t, r) {
for (var n = Array.isArray(e), a = 0; a != t.length; ++a) {
var s = $(t[a], !0);
if (!s.ref) return;
var i = r ? r["!id"][s.id] : null;
if (i) {
s.Target = i.Target;
s.location && (s.Target += "#" + s.location);
s.Rel = i;
} else {
s.Target = s.location;
i = {
Target: s.location,
TargetMode: "Internal"
};
s.Rel = i;
}
if (s.tooltip) {
s.Tooltip = s.tooltip;
delete s.tooltip;
}
for (var o = _t(s.ref), f = o.s.r; f <= o.e.r; ++f) for (var l = o.s.c; l <= o.e.c; ++l) {
var c = Bt({
c: l,
r: f
});
if (n) {
e[f] || (e[f] = []);
e[f][l] || (e[f][l] = {
t: "z",
v: void 0
});
e[f][l].l = s;
} else {
e[c] || (e[c] = {
t: "z",
v: void 0
});
e[c].l = s;
}
}
}
}(i, E, r);
var S = c.match(Rh);
S && (i["!margins"] = function(e) {
var t = {};
[ "left", "right", "top", "bottom", "header", "footer" ].forEach(function(r) {
e[r] && (t[r] = parseFloat(e[r]));
});
return t;
}($(S[0])));
!i["!ref"] && f.e.c >= f.s.c && f.e.r >= f.s.r && (i["!ref"] = Ct(f));
if (t.sheetRows > 0 && i["!ref"]) {
var B = _t(i["!ref"]);
if (t.sheetRows < +B.e.r) {
B.e.r = t.sheetRows - 1;
B.e.r > f.e.r && (B.e.r = f.e.r);
B.e.r < B.s.r && (B.s.r = B.e.r);
B.e.c > f.e.c && (B.e.c = f.e.c);
B.e.c < B.s.c && (B.s.c = B.e.c);
i["!fullref"] = i["!ref"];
i["!ref"] = Ct(B);
}
}
b.length > 0 && (i["!merges"] = b);
p.length > 0 && (i["!cols"] = p);
return i;
}
function Oh(e, t, r, n, a, s) {
if (void 0 === e.v && void 0 === e.f || "z" === e.t) return "";
var i = "", o = e.t, f = e.v;
switch (e.t) {
case "b":
i = e.v ? "1" : "0";
break;

case "n":
i = "" + e.v;
break;

case "e":
i = Qt[e.v];
break;

case "d":
if (n.cellDates) i = O(e.v, -1).toISOString(); else {
e.t = "n";
i = "" + (e.v = k(O(e.v)));
}
"undefined" == typeof e.z && (e.z = m._table[14]);
break;

default:
i = e.v;
}
var l = ve("v", te(i)), c = {
r: t
}, h = Ch(n.cellXfs, e, n);
0 !== h && (c.s = h);
switch (e.t) {
case "n":
break;

case "d":
c.t = "d";
break;

case "b":
c.t = "b";
break;

case "e":
c.t = "e";
break;

default:
if (null == e.v) {
delete e.t;
break;
}
if (n.bookSST) {
l = ve("v", "" + Sh(n.Strings, e.v));
c.t = "s";
break;
}
c.t = "str";
}
if (e.t != o) {
e.t = o;
e.v = f;
}
if (e.f) {
var u = e.F && e.F.substr(0, t.length) == t ? {
t: "array",
ref: e.F
} : null;
l = Se("f", te(e.f), u) + (null != e.v ? l : "");
}
e.l && r["!links"].push([ t, e.l ]);
e.c && r["!comments"].push([ t, e.c ]);
return Se("c", l, c);
}
var Fh = function() {
var e = /<(?:\w+:)?c[ >]/, t = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, n = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, a = /ref=["']([^"']*)["']/, s = ue("v"), i = ue("f");
return function(o, f, l, c, h, u) {
for (var d, p, g, b, v, E = 0, S = "", B = [], w = [], C = 0, _ = 0, T = 0, A = "", I = 0, y = 0, R = 0, D = 0, F = Array.isArray(u.CellXf), P = [], N = [], M = Array.isArray(f), L = [], U = {}, H = !1, W = o.split(t), V = 0, z = W.length; V != z; ++V) {
var X = (S = W[V].trim()).length;
if (0 !== X) {
for (E = 0; E < X && 62 !== S.charCodeAt(E); ++E) ;
++E;
I = null != (p = $(S.substr(0, E), !0)).r ? parseInt(p.r, 10) : I + 1;
y = -1;
if (!(l.sheetRows && l.sheetRows < I)) {
c.s.r > I - 1 && (c.s.r = I - 1);
c.e.r < I - 1 && (c.e.r = I - 1);
if (l && l.cellStyles) {
U = {};
H = !1;
if (p.ht) {
H = !0;
U.hpt = parseFloat(p.ht);
U.hpx = ic(U.hpt);
}
if ("1" == p.hidden) {
H = !0;
U.hidden = !0;
}
H && (L[I - 1] = U);
}
B = S.substr(E).split(e);
for (E = 0; E != B.length; ++E) if (0 !== (S = B[E].trim()).length) {
w = S.match(r);
C = E;
_ = 0;
T = 0;
S = "<c " + ("<" == S.substr(0, 1) ? ">" : "") + S;
if (null != w && 2 === w.length) {
C = 0;
A = w[1];
for (_ = 0; _ != A.length && !((T = A.charCodeAt(_) - 64) < 1 || T > 26); ++_) C = 26 * C + T;
y = --C;
} else ++y;
for (_ = 0; _ != S.length && 62 !== S.charCodeAt(_); ++_) ;
++_;
(p = $(S.substr(0, _), !0)).r || (p.r = Bt({
r: I - 1,
c: y
}));
A = S.substr(_);
d = {
t: ""
};
null != (w = A.match(s)) && "" !== w[1] && (d.v = q(w[1]));
if (l.cellFormula) {
if (null != (w = A.match(i)) && "" !== w[1]) {
d.f = q(fe(w[1])).replace(/_xlfn\./, "");
if (w[0].indexOf('t="array"') > -1) {
d.F = (A.match(a) || [])[1];
d.F.indexOf(":") > -1 && P.push([ _t(d.F), d.F ]);
} else if (w[0].indexOf('t="shared"') > -1) {
b = $(w[0]);
N[parseInt(b.si, 10)] = [ b, q(fe(w[1])) ];
}
} else (w = A.match(/<f[^>]*\/>/)) && N[(b = $(w[0])).si] && (d.f = Wc(N[b.si][1], N[b.si][0].ref, p.r));
var G = St(p.r);
for (_ = 0; _ < P.length; ++_) G.r >= P[_][0].s.r && G.r <= P[_][0].e.r && G.c >= P[_][0].s.c && G.c <= P[_][0].e.c && (d.F = P[_][1]);
}
if (null == p.t && void 0 === d.v) if (d.f || d.F) {
d.v = 0;
d.t = "n";
} else {
if (!l.sheetStubs) continue;
d.t = "z";
} else d.t = p.t || "n";
c.s.c > C && (c.s.c = C);
c.e.c < C && (c.e.c = C);
switch (d.t) {
case "n":
d.v = parseFloat(d.v);
break;

case "s":
g = vh[parseInt(d.v, 10)];
if ("undefined" == typeof d.v) {
if (!l.sheetStubs) continue;
d.t = "z";
}
d.v = g.t;
d.r = g.r;
l.cellHTML && (d.h = g.h);
break;

case "str":
d.t = "s";
d.v = null != d.v ? fe(d.v) : "";
l.cellHTML && (d.h = ae(d.v));
break;

case "inlineStr":
w = A.match(n);
d.t = "s";
null != w && (g = Al(w[1])) ? d.v = g.t : d.v = "";
break;

case "b":
d.v = oe(d.v);
break;

case "d":
if (l.cellDates) d.v = O(d.v, 1); else {
d.v = k(O(d.v, 1));
d.t = "n";
}
break;

case "e":
l && !1 === l.cellText || (d.w = d.v);
d.v = qt[d.v];
}
R = D = 0;
if (F && void 0 !== p.s && null != (v = u.CellXf[p.s])) {
null != v.numFmtId && (R = v.numFmtId);
l.cellStyles && null != v.fillId && (D = v.fillId);
}
_h(d, R, D, l, h, u);
if (l.cellDates && F && "n" == d.t && m.is_date(m._table[R])) {
d.t = "d";
d.v = x(d.v);
}
if (M) {
var j = St(p.r);
f[j.r] || (f[j.r] = []);
f[j.r][j.c] = d;
} else f[p.r] = d;
}
}
}
}
L.length > 0 && (f["!rows"] = L);
};
}();
var Ph = Se("worksheet", null, {
xmlns: He.main[0],
"xmlns:r": He.r
});
function Nh(e, t, r, n) {
var a, s = [ Ue, Ph ], i = r.SheetNames[e], o = "", f = r.Sheets[i];
null == f && (f = {});
var l = f["!ref"];
null == l && (l = "A1");
n || (n = {});
f["!comments"] = [];
f["!drawing"] = [];
s[s.length] = Se("sheetPr", null, {
codeName: te(r.SheetNames[e])
});
s[s.length] = Se("dimension", null, {
ref: l
});
s[s.length] = Se("sheetViews", Se("sheetView", null, {
workbookViewId: "0"
}), {});
t.sheetFormat && (s[s.length] = Se("sheetFormatPr", null, {
defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
baseColWidth: t.sheetFormat.baseColWidth || "10"
}));
null != f["!cols"] && f["!cols"].length > 0 && (s[s.length] = function(e, t) {
for (var r, n = [ "<cols>" ], a = 0; a != t.length; ++a) (r = t[a]) && (n[n.length] = Se("col", null, Bh(a, r)));
n[n.length] = "</cols>";
return n.join("");
}(0, f["!cols"]));
s[a = s.length] = "<sheetData/>";
f["!links"] = [];
null != f["!ref"] && (o = function(e, t, r, n, a) {
var s, i, o = [], f = [], l = _t(e["!ref"]), c = "", h = [], u = 0, d = 0, p = e["!rows"], m = Array.isArray(e);
for (d = l.s.c; d <= l.e.c; ++d) h[d] = gt(d);
for (u = l.s.r; u <= l.e.r; ++u) {
f = [];
c = ut(u);
for (d = l.s.c; d <= l.e.c; ++d) {
i = h[d] + c;
var g = m ? (e[u] || [])[d] : e[i];
void 0 !== g && null != (s = Oh(g, i, e, t)) && f.push(s);
}
if (f.length > 0) {
var b = {
r: c
};
if (p && p[u]) {
var v = p[u];
v.hidden && (b.hidden = 1);
var E = -1;
v.hpx ? E = sc(v.hpx) : v.hpt && (E = v.hpt);
if (E > -1) {
b.ht = E;
b.customHeight = 1;
}
}
o[o.length] = Se("row", f.join(""), b);
}
}
return o.join("");
}(f, t)).length > 0 && (s[s.length] = o);
if (s.length > a + 1) {
s[s.length] = "</sheetData>";
s[a] = s[a].replace("/>", ">");
}
null != f["!protect"] && (s[s.length] = function(e) {
var t = {
sheet: 1
};
[ "objects", "scenarios", "selectLockedCells", "selectUnlockedCells" ].forEach(function(r) {
null != e[r] && e[r] && (t[r] = "1");
});
[ "formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables" ].forEach(function(r) {
null == e[r] || e[r] || (t[r] = "0");
});
e.password && (t.password = Vl(e.password).toString(16).toUpperCase());
return Se("sheetProtection", null, t);
}(f["!protect"]));
null != f["!autofilter"] && (s[s.length] = function(e) {
return Se("autoFilter", null, {
ref: e.ref
});
}(f["!autofilter"]));
null != f["!merges"] && f["!merges"].length > 0 && (s[s.length] = function(e) {
if (0 == e.length) return "";
for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r) t += '<mergeCell ref="' + Ct(e[r]) + '"/>';
return t + "</mergeCells>";
}(f["!merges"]));
var c, h = -1, u = -1;
if (f["!links"].length > 0) {
s[s.length] = "<hyperlinks>";
f["!links"].forEach(function(e) {
if (e[1].Target) {
u = Br(n, -1, te(e[1].Target).replace(/#.*$/, ""), gr.HLINK);
c = {
ref: e[0],
"r:id": "rId" + u
};
(h = e[1].Target.indexOf("#")) > -1 && (c.location = te(e[1].Target.substr(h + 1)));
e[1].Tooltip && (c.tooltip = te(e[1].Tooltip));
s[s.length] = Se("hyperlink", null, c);
}
});
s[s.length] = "</hyperlinks>";
}
delete f["!links"];
null != f["!margins"] && (s[s.length] = function(e) {
wh(e);
return Se("pageMargins", null, e);
}(f["!margins"]));
s.length;
s[s.length] = "";
if (f["!drawing"].length > 0) {
u = Br(n, -1, "../drawings/drawing" + (e + 1) + ".xml", gr.DRAW);
s[s.length] = Se("drawing", null, {
"r:id": "rId" + u
});
} else delete f["!drawing"];
if (f["!comments"].length > 0) {
u = Br(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", gr.VML);
s[s.length] = Se("legacyDrawing", null, {
"r:id": "rId" + u
});
f["!legacy"] = u;
}
if (s.length > 2) {
s[s.length] = "</worksheet>";
s[1] = s[1].replace("/>", ">");
}
return s.join("");
}
function Mh(e, t, r, n) {
var a = function(e, t, r) {
var n = nt(145), a = (r["!rows"] || [])[e] || {};
n.write_shift(4, e);
n.write_shift(4, 0);
var s = 320;
a.hpx ? s = 20 * sc(a.hpx) : a.hpt && (s = 20 * a.hpt);
n.write_shift(2, s);
n.write_shift(1, 0);
var i = 0;
a.hidden && (i |= 16);
(a.hpx || a.hpt) && (i |= 32);
n.write_shift(1, i);
n.write_shift(1, 0);
var o = 0, f = n.l;
n.l += 4;
for (var l = {
r: e,
c: 0
}, c = 0; c < 16; ++c) if (!(t.s.c > c + 1 << 10 || t.e.c < c << 10)) {
for (var h = -1, u = -1, d = c << 10; d < c + 1 << 10; ++d) {
l.c = d;
if (Array.isArray(r) ? (r[l.r] || [])[l.c] : r[Bt(l)]) {
h < 0 && (h = d);
u = d;
}
}
if (!(h < 0)) {
++o;
n.write_shift(4, h);
n.write_shift(4, u);
}
}
var p = n.l;
n.l = f;
n.write_shift(4, o);
n.l = p;
return n.length > n.l ? n.slice(0, n.l) : n;
}(n, r, t);
a.length > 17 && it(e, "BrtRowHdr", a);
}
var Lh = Kt, Uh = Yt;
function Hh(e, t, r) {
null == r && (r = nt(12));
Mt(t, r);
(function(e, t) {
null == t && (t = nt(4));
var r = 0, n = 0, a = 100 * e;
if (e == (0 | e) && e >= -(1 << 29) && e < 1 << 29) n = 1; else if (a == (0 | a) && a >= -(1 << 29) && a < 1 << 29) {
n = 1;
r = 1;
}
if (!n) throw new Error("unsupported RkNumber " + e);
t.write_shift(-4, ((r ? a : e) << 2) + (r + 2));
})(e.v, r);
return r;
}
var Wh = Kt, Vh = Yt;
function zh(e, t, r, n, a, s) {
if (void 0 === t.v) return "";
var i = "", o = null;
switch (t.t) {
case "b":
i = t.v ? "1" : "0";
break;

case "d":
t.z = t.z || m._table[14];
o = t.v;
t.v = k(t.v);
t.t = "n";
break;

case "n":
case "e":
i = "" + t.v;
break;

default:
i = t.v;
}
var f = {
r: r,
c: n
};
f.s = Ch(a.cellXfs, t, a);
t.l && s["!links"].push([ Bt(f), t.l ]);
t.c && s["!comments"].push([ Bt(f), t.c ]);
switch (t.t) {
case "s":
case "str":
if (a.bookSST) {
i = Sh(a.Strings, t.v);
f.t = "s";
f.v = i;
it(e, "BrtCellIsst", function(e, t, r) {
null == r && (r = nt(12));
Mt(t, r);
r.write_shift(4, t.v);
return r;
}(0, f));
} else {
f.t = "str";
it(e, "BrtCellSt", function(e, t, r) {
null == r && (r = nt(12 + 4 * e.v.length));
Mt(t, r);
Rt(e.v, r);
return r.length > r.l ? r.slice(0, r.l) : r;
}(t, f));
}
return;

case "n":
t.v == (0 | t.v) && t.v > -1e3 && t.v < 1e3 ? it(e, "BrtCellRk", Hh(t, f)) : it(e, "BrtCellReal", function(e, t, r) {
null == r && (r = nt(16));
Mt(t, r);
Zt(e.v, r);
return r;
}(t, f));
if (o) {
t.t = "d";
t.v = o;
}
return;

case "b":
f.t = "b";
it(e, "BrtCellBool", function(e, t, r) {
null == r && (r = nt(9));
Mt(t, r);
r.write_shift(1, e.v ? 1 : 0);
return r;
}(t, f));
return;

case "e":
f.t = "e";
}
it(e, "BrtCellBlank", function(e, t, r) {
null == r && (r = nt(8));
return Mt(t, r);
}(0, f));
}
function Xh(e, t) {
if (t && t["!merges"]) {
it(e, "BrtBeginMergeCells", function(e, t) {
null == t && (t = nt(4));
t.write_shift(4, e);
return t;
}(t["!merges"].length));
t["!merges"].forEach(function(t) {
it(e, "BrtMergeCell", Vh(t));
});
it(e, "BrtEndMergeCells");
}
}
function Gh(e, t, r, n, a) {
if (t && t["!cols"]) {
it(e, "BrtBeginColInfos");
t["!cols"].forEach(function(t, r) {
t && it(e, "BrtColInfo", function(e, t, r) {
null == r && (r = nt(18));
var n = Bh(e, t);
r.write_shift(-4, e);
r.write_shift(-4, e);
r.write_shift(4, 256 * (n.width || 10));
r.write_shift(4, 0);
var a = 0;
t.hidden && (a |= 1);
"number" == typeof n.width && (a |= 2);
r.write_shift(1, a);
r.write_shift(1, 0);
return r;
}(r, t));
});
it(e, "BrtEndColInfos");
}
}
function jh(e, t, r) {
t["!links"].forEach(function(t) {
if (t[1].Target) {
var n = Br(r, -1, t[1].Target.replace(/#.*$/, ""), gr.HLINK);
it(e, "BrtHLink", function(e, t, r) {
null == r && (r = nt(50 + 4 * e[1].Target.length));
Yt({
s: St(e[0]),
e: St(e[0])
}, r);
Xt("rId" + t, r);
var n = e[1].Target.indexOf("#");
Rt((-1 == n ? "" : e[1].Target.substr(n + 1)) || "", r);
Rt(e[1].Tooltip || "", r);
Rt("", r);
return r.slice(0, r.l);
}(t, n));
}
});
delete t["!links"];
}
function Kh(e, t) {
it(e, "BrtBeginWsViews");
it(e, "BrtBeginWsView", function(e, t) {
null == t && (t = nt(30));
t.write_shift(2, 924);
t.write_shift(4, 0);
t.write_shift(4, 0);
t.write_shift(4, 0);
t.write_shift(1, 0);
t.write_shift(1, 0);
t.write_shift(2, 0);
t.write_shift(2, 100);
t.write_shift(2, 0);
t.write_shift(2, 0);
t.write_shift(2, 0);
t.write_shift(4, 0);
return t;
}());
it(e, "BrtEndWsView");
it(e, "BrtEndWsViews");
}
function Yh(e, t) {
t["!protect"] && it(e, "BrtSheetProtection", function(e, t) {
null == t && (t = nt(66));
t.write_shift(2, e.password ? Vl(e.password) : 0);
t.write_shift(4, 1);
[ [ "objects", !1 ], [ "scenarios", !1 ], [ "formatCells", !0 ], [ "formatColumns", !0 ], [ "formatRows", !0 ], [ "insertColumns", !0 ], [ "insertRows", !0 ], [ "insertHyperlinks", !0 ], [ "deleteColumns", !0 ], [ "deleteRows", !0 ], [ "selectLockedCells", !1 ], [ "sort", !0 ], [ "autoFilter", !0 ], [ "pivotTables", !0 ], [ "selectUnlockedCells", !1 ] ].forEach(function(r) {
r[1] ? t.write_shift(4, null == e[r[0]] || e[r[0]] ? 0 : 1) : t.write_shift(4, null != e[r[0]] && e[r[0]] ? 0 : 1);
});
return t;
}(t["!protect"]));
}
function $h(e, t, r, n) {
var a = st(), s = r.SheetNames[e], i = r.Sheets[s] || {}, o = _t(i["!ref"] || "A1");
i["!links"] = [];
i["!comments"] = [];
it(a, "BrtBeginSheet");
it(a, "BrtWsProp", function(e, t) {
null == t && (t = nt(84 + 4 * e.length));
for (var r = 0; r < 3; ++r) t.write_shift(1, 0);
Jt({
auto: 1
}, t);
t.write_shift(-4, -1);
t.write_shift(-4, -1);
Ut(e, t);
return t.slice(0, t.l);
}(s));
it(a, "BrtWsDim", Uh(o));
Kh(a);
Gh(a, i);
(function(e, t, r, n, a) {
var s, i = _t(t["!ref"] || "A1"), o = "", f = [];
it(e, "BrtBeginSheetData");
for (var l = Array.isArray(t), c = i.s.r; c <= i.e.r; ++c) {
o = ut(c);
Mh(e, t, i, c);
for (var h = i.s.c; h <= i.e.c; ++h) {
c === i.s.r && (f[h] = gt(h));
s = f[h] + o;
var u = l ? (t[c] || [])[h] : t[s];
u && zh(e, u, c, h, n, t);
}
}
it(e, "BrtEndSheetData");
})(a, i, 0, t);
Yh(a, i);
(function(e, t) {
if (t["!autofilter"]) {
it(e, "BrtBeginAFilter", Yt(wt(t["!autofilter"].ref)));
it(e, "BrtEndAFilter");
}
})(a, i);
Xh(a, i);
jh(a, i, n);
i["!margins"] && it(a, "BrtMargins", function(e, t) {
null == t && (t = nt(48));
wh(e);
Zt(e.left, t);
Zt(e.right, t);
Zt(e.top, t);
Zt(e.bottom, t);
Zt(e.header, t);
Zt(e.footer, t);
return t;
}(i["!margins"]));
(function(e, t, r, n) {
if (t["!comments"].length > 0) {
var a = Br(n, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", gr.VML);
it(e, "BrtLegacyDrawing", Xt("rId" + a));
t["!legacy"] = a;
}
})(a, i, e, n);
it(a, "BrtEndSheet");
return a.end();
}
function Zh(e, t, r, n, a, s) {
var i = s || {
"!type": "chart"
};
if (!e) return s;
var o = 0, f = 0, l = "A", c = {
s: {
r: 2e6,
c: 2e6
},
e: {
r: 0,
c: 0
}
};
(e.match(/<c:numCache>.*?<\/c:numCache>/gm) || []).forEach(function(e) {
var t = function(e) {
var t = [];
(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function(e) {
var r = e.match(/<c:pt idx="(.*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
r && (t[+r[1]] = +r[2]);
});
var r = q((e.match(/<c:formatCode>(.*?)<\/c:formatCode>/) || [ "", "General" ])[1]);
return [ t, r ];
}(e);
c.s.r = c.s.c = 0;
c.e.c = o;
l = gt(o);
t[0].forEach(function(e, r) {
i[l + ut(r)] = {
t: "n",
v: e,
z: t[1]
};
f = r;
});
c.e.r < f && (c.e.r = f);
++o;
});
o > 0 && (i["!ref"] = Ct(c));
return i;
}
gr.CS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
Se("chartsheet", null, {
xmlns: He.main[0],
"xmlns:r": He.r
});
var Qh = [ [ "allowRefreshQuery", !1, "bool" ], [ "autoCompressPictures", !0, "bool" ], [ "backupFile", !1, "bool" ], [ "checkCompatibility", !1, "bool" ], [ "codeName", "" ], [ "date1904", !1, "bool" ], [ "defaultThemeVersion", 0, "int" ], [ "filterPrivacy", !1, "bool" ], [ "hidePivotFieldList", !1, "bool" ], [ "promptedSolutions", !1, "bool" ], [ "publishItems", !1, "bool" ], [ "refreshAllConnections", !1, "bool" ], [ "saveExternalLinkValues", !0, "bool" ], [ "showBorderUnselectedTables", !0, "bool" ], [ "showInkAnnotation", !0, "bool" ], [ "showObjects", "all" ], [ "showPivotChartFilter", !1, "bool" ], [ "updateLinks", "userSet" ] ], qh = [ [ "activeTab", 0, "int" ], [ "autoFilterDateGrouping", !0, "bool" ], [ "firstSheet", 0, "int" ], [ "minimized", !1, "bool" ], [ "showHorizontalScroll", !0, "bool" ], [ "showSheetTabs", !0, "bool" ], [ "showVerticalScroll", !0, "bool" ], [ "tabRatio", 600, "int" ], [ "visibility", "visible" ] ], Jh = [], eu = [ [ "calcCompleted", "true" ], [ "calcMode", "auto" ], [ "calcOnSave", "true" ], [ "concurrentCalc", "true" ], [ "fullCalcOnLoad", "false" ], [ "fullPrecision", "true" ], [ "iterate", "false" ], [ "iterateCount", "100" ], [ "iterateDelta", "0.001" ], [ "refMode", "A1" ] ];
function tu(e, t) {
for (var r = 0; r != e.length; ++r) for (var n = e[r], a = 0; a != t.length; ++a) {
var s = t[a];
if (null == n[s[0]]) n[s[0]] = s[1]; else switch (s[2]) {
case "bool":
"string" == typeof n[s[0]] && (n[s[0]] = oe(n[s[0]], s[0]));
break;

case "int":
"string" == typeof n[s[0]] && (n[s[0]] = parseInt(n[s[0]], 10));
}
}
}
function ru(e, t) {
for (var r = 0; r != t.length; ++r) {
var n = t[r];
if (null == e[n[0]]) e[n[0]] = n[1]; else switch (n[2]) {
case "bool":
"string" == typeof e[n[0]] && (e[n[0]] = oe(e[n[0]], n[0]));
break;

case "int":
"string" == typeof e[n[0]] && (e[n[0]] = parseInt(e[n[0]], 10));
}
}
}
function nu(e) {
ru(e.WBProps, Qh);
ru(e.CalcPr, eu);
tu(e.WBView, qh);
tu(e.Sheets, Jh);
Eh.date1904 = oe(e.WBProps.date1904);
}
var au = "][*?/\\".split("");
function su(e, t) {
if (e.length > 31) {
if (t) return !1;
throw new Error("Sheet names cannot exceed 31 chars");
}
var r = !0;
au.forEach(function(n) {
if (-1 != e.indexOf(n)) {
if (!t) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
r = !1;
}
});
return r;
}
function iu(e) {
if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
(function(e) {
e.forEach(function(t, r) {
su(t);
for (var n = 0; n < r; ++n) if (t == e[n]) throw new Error("Duplicate Sheet Name: " + t);
});
})(e.SheetNames);
}
var ou = /<\w+:workbook/;
function fu(e, t) {
if (!e) throw new Error("Could not find file");
var r = {
AppVersion: {},
WBProps: {},
WBView: [],
Sheets: [],
CalcPr: {},
Names: [],
xmlns: ""
}, n = !1, a = "xmlns", s = {}, i = 0;
e.replace(j, function(o, f) {
var l = $(o);
switch (function(e) {
return e.replace(Y, "<$1");
}(l[0])) {
case "<?xml":
break;

case "<workbook":
o.match(ou) && (a = "xmlns" + o.match(/<(\w+):/)[1]);
r.xmlns = l[a];
break;

case "</workbook>":
break;

case "<fileVersion":
delete l[0];
r.AppVersion = l;
break;

case "<fileVersion/>":
case "</fileVersion>":
break;

case "<fileSharing":
case "<fileSharing/>":
break;

case "<workbookPr":
case "<workbookPr/>":
Qh.forEach(function(e) {
if (null != l[e[0]]) switch (e[2]) {
case "bool":
r.WBProps[e[0]] = oe(l[e[0]], e[0]);
break;

case "int":
r.WBProps[e[0]] = parseInt(l[e[0]], 10);
break;

default:
r.WBProps[e[0]] = l[e[0]];
}
});
break;

case "</workbookPr>":
case "<workbookProtection":
case "<workbookProtection/>":
break;

case "<bookViews>":
case "</bookViews>":
break;

case "<workbookView":
delete l[0];
r.WBView.push(l);
break;

case "</workbookView>":
break;

case "<sheets>":
case "</sheets>":
break;

case "<sheet":
switch (l.state) {
case "hidden":
l.Hidden = 1;
break;

case "veryHidden":
l.Hidden = 2;
break;

default:
l.Hidden = 0;
}
delete l.state;
l.name = q(fe(l.name));
delete l[0];
r.Sheets.push(l);
break;

case "</sheet>":
break;

case "<functionGroups":
case "<functionGroups/>":
case "<functionGroup":
break;

case "<externalReferences":
case "</externalReferences>":
case "<externalReferences>":
case "<externalReference":
case "<definedNames/>":
break;

case "<definedNames>":
case "<definedNames":
n = !0;
break;

case "</definedNames>":
n = !1;
break;

case "<definedName":
(s = {}).Name = l.name;
l.comment && (s.Comment = l.comment);
l.localSheetId && (s.Sheet = +l.localSheetId);
i = f + o.length;
break;

case "</definedName>":
s.Ref = e.slice(i, f);
r.Names.push(s);
break;

case "<definedName/>":
break;

case "<calcPr":
case "<calcPr/>":
delete l[0];
r.CalcPr = l;
break;

case "</calcPr>":
case "<oleSize":
break;

case "<customWorkbookViews>":
case "</customWorkbookViews>":
case "<customWorkbookViews":
break;

case "<customWorkbookView":
case "</customWorkbookView>":
break;

case "<pivotCaches>":
case "</pivotCaches>":
case "<pivotCaches":
case "<pivotCache":
break;

case "<smartTagPr":
case "<smartTagPr/>":
break;

case "<smartTagTypes":
case "<smartTagTypes>":
case "</smartTagTypes>":
case "<smartTagType":
break;

case "<webPublishing":
case "<webPublishing/>":
break;

case "<fileRecoveryPr":
case "<fileRecoveryPr/>":
break;

case "<webPublishObjects>":
case "<webPublishObjects":
case "</webPublishObjects>":
case "<webPublishObject":
break;

case "<extLst>":
case "</extLst>":
case "<extLst/>":
break;

case "<ext":
n = !0;
break;

case "</ext>":
n = !1;
break;

case "<ArchID":
break;

case "<AlternateContent":
n = !0;
break;

case "</AlternateContent>":
n = !1;
break;

default:
if (!n && t.WTF) throw new Error("unrecognized " + l[0] + " in workbook");
}
return o;
});
if (-1 === He.main.indexOf(r.xmlns)) throw new Error("Unknown Namespace: " + r.xmlns);
nu(r);
return r;
}
var lu = Se("workbook", null, {
xmlns: He.main[0],
"xmlns:r": He.r
});
function cu(e, t) {
t || (t = nt(127));
t.write_shift(4, e.Hidden);
t.write_shift(4, e.iTabID);
Xt(e.strRelID, t);
Rt(e.name.substr(0, 31), t);
return t.length > t.l ? t.slice(0, t.l) : t;
}
function hu(e, t, r) {
if (t.Workbook && t.Workbook.Sheets) {
for (var n = t.Workbook.Sheets, a = 0, s = -1, i = -1; a < n.length; ++a) !n[a] || !n[a].Hidden && -1 == s ? s = a : 1 == n[a].Hidden && -1 == i && (i = a);
if (!(i > s)) {
it(e, "BrtBeginBookViews");
it(e, "BrtBookView", function(e, t) {
t || (t = nt(29));
t.write_shift(-4, 0);
t.write_shift(-4, 460);
t.write_shift(4, 28800);
t.write_shift(4, 17600);
t.write_shift(4, 500);
t.write_shift(4, e);
t.write_shift(4, e);
t.write_shift(1, 120);
return t.length > t.l ? t.slice(0, t.l) : t;
}(s));
it(e, "BrtEndBookViews");
}
}
}
function uu(t, r) {
var n = st();
it(n, "BrtBeginBook");
it(n, "BrtFileVersion", function(t, r) {
r || (r = nt(127));
for (var n = 0; 4 != n; ++n) r.write_shift(4, 0);
Rt("SheetJS", r);
Rt(e.version, r);
Rt(e.version, r);
Rt("7262", r);
r.length = r.l;
return r.length > r.l ? r.slice(0, r.l) : r;
}());
it(n, "BrtWbProp", function(e, t) {
t || (t = nt(72));
var r = 0;
e && e.filterPrivacy && (r |= 8);
t.write_shift(4, r);
t.write_shift(4, 0);
Ut("ThisWorkbook", t);
return t.slice(0, t.l);
}(t.Workbook && t.Workbook.WBProps || null));
hu(n, t);
(function(e, t, r) {
it(e, "BrtBeginBundleShs");
for (var n = 0; n != t.SheetNames.length; ++n) it(e, "BrtBundleSh", cu({
Hidden: t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[n] && t.Workbook.Sheets[n].Hidden || 0,
iTabID: n + 1,
strRelID: "rId" + (n + 1),
name: t.SheetNames[n]
}));
it(e, "BrtEndBundleShs");
})(n, t);
it(n, "BrtEndBook");
return n.end();
}
function du(e, t, r) {
return ".bin" === t.slice(-4) ? function(e, t) {
var r = {
AppVersion: {},
WBProps: {},
WBView: [],
Sheets: [],
CalcPr: {},
xmlns: ""
}, n = !1;
t || (t = {});
t.biff = 12;
var a = [], s = [];
s.SheetNames = [];
at(e, function(e, i, o) {
switch (o) {
case 156:
s.SheetNames.push(e.name);
r.Sheets.push(e);
break;

case 39:
e.Ref = sh(e.Ptg, 0, null, s, t);
delete e.Ptg;
a.push(e);
break;

case 1036:
break;

case 153:
r.WBProps = e;
break;

case 2071:
case 534:
case 677:
case 158:
case 157:
case 610:
case 2050:
case 362:
case 155:
case 548:
case 676:
case 128:
case 665:
case 2128:
case 2125:
case 549:
case 2053:
case 361:
case 596:
case 667:
case 355:
case 358:
case 357:
case 2076:
case 2075:
case 2082:
case 397:
case 154:
case 1117:
case 553:
case 2091:
break;

case 35:
n = !0;
break;

case 36:
n = !1;
break;

case 37:
case 38:
case 16:
break;

default:
if ((i || "").indexOf("Begin") > 0) ; else if ((i || "").indexOf("End") > 0) ; else if (!n || t.WTF) throw new Error("Unexpected record " + o + " " + i);
}
}, t);
nu(r);
r.Names = a;
return r;
}(e, r) : fu(e, r);
}
function pu(e, t, r, n, a, s, i) {
return ".bin" === t.slice(-4) ? function(e, t, r, n, a, s) {
if (!e) return e;
var i = t || {};
r || (r = {
"!id": {}
});
null != o && null == i.dense && (i.dense = o);
var f, l, c, h, u, d, p, g, b, v, E = i.dense ? [] : {}, S = {
s: {
r: 2e6,
c: 2e6
},
e: {
r: 0,
c: 0
}
}, B = !1, w = !1, C = [];
i.biff = 12;
i["!row"] = 0;
var _ = 0, T = !1, k = [], x = {}, A = [ [] ];
A.sharedf = x;
A.arrayf = k;
A.SheetNames = n.SheetNames || n.Sheets.map(function(e) {
return e.name;
});
i.supbooks = A;
for (var I = 0; I < n.Names.length; ++I) A[0][I + 1] = n.Names[I];
var y = [], R = [], D = !1;
at(e, function(e, t, n) {
if (!w) switch (n) {
case 148:
f = e;
break;

case 0:
l = e;
i.sheetRows && i.sheetRows <= l.r && (w = !0);
b = ut(u = l.r);
i["!row"] = l.r;
if (e.hidden || e.hpt) {
e.hpt && (e.hpx = ic(e.hpt));
R[e.r] = e;
}
break;

case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
c = {
t: e[2]
};
switch (e[2]) {
case "n":
c.v = e[1];
break;

case "s":
g = vh[e[1]];
c.v = g.t;
c.r = g.r;
break;

case "b":
c.v = !!e[1];
break;

case "e":
c.v = e[1];
!1 !== i.cellText && (c.w = Qt[c.v]);
break;

case "str":
c.t = "s";
c.v = fe(e[1]);
}
(h = s.CellXf[e[0].iStyleRef]) && _h(c, h.ifmt, null, i, a, s);
d = e[0].c;
if (i.dense) {
E[u] || (E[u] = []);
E[u][d] = c;
} else E[gt(d) + b] = c;
if (i.cellFormula) {
T = !1;
for (_ = 0; _ < k.length; ++_) {
var o = k[_];
if (l.r >= o[0].s.r && l.r <= o[0].e.r && d >= o[0].s.c && d <= o[0].e.c) {
c.F = Ct(o[0]);
T = !0;
}
}
!T && e.length > 3 && (c.f = e[3]);
}
S.s.r > l.r && (S.s.r = l.r);
S.s.c > d && (S.s.c = d);
S.e.r < l.r && (S.e.r = l.r);
S.e.c < d && (S.e.c = d);
if (i.cellDates && h && "n" == c.t && m.is_date(m._table[h.ifmt])) {
var I = m.parse_date_code(c.v);
if (I) {
c.t = "d";
c.v = new Date(I.y, I.m - 1, I.d, I.H, I.M, I.S, I.u);
}
}
break;

case 1:
if (!i.sheetStubs) break;
c = {
t: "z",
v: void 0
};
d = e[0].c;
if (i.dense) {
E[u] || (E[u] = []);
E[u][d] = c;
} else E[gt(d) + b] = c;
S.s.r > l.r && (S.s.r = l.r);
S.s.c > d && (S.s.c = d);
S.e.r < l.r && (S.e.r = l.r);
S.e.c < d && (S.e.c = d);
break;

case 176:
C.push(e);
break;

case 494:
var O = r["!id"][e.relId];
if (O) {
e.Target = O.Target;
e.loc && (e.Target += "#" + e.loc);
e.Rel = O;
}
for (u = e.rfx.s.r; u <= e.rfx.e.r; ++u) for (d = e.rfx.s.c; d <= e.rfx.e.c; ++d) if (i.dense) {
E[u] || (E[u] = []);
E[u][d] || (E[u][d] = {
t: "z",
v: void 0
});
E[u][d].l = e;
} else {
p = Bt({
c: d,
r: u
});
E[p] || (E[p] = {
t: "z",
v: void 0
});
E[p].l = e;
}
break;

case 426:
if (!i.cellFormula) break;
k.push(e);
(v = i.dense ? E[u][d] : E[gt(d) + b]).f = sh(e[1], 0, {
r: l.r,
c: d
}, A, i);
v.F = Ct(e[0]);
break;

case 427:
if (!i.cellFormula) break;
x[Bt(e[0].s)] = e[1];
(v = i.dense ? E[u][d] : E[gt(d) + b]).f = sh(e[1], 0, {
r: l.r,
c: d
}, A, i);
break;

case 60:
if (!i.cellStyles) break;
for (;e.e >= e.s; ) {
y[e.e--] = {
width: e.w / 256,
hidden: !!(1 & e.flags)
};
if (!D) {
D = !0;
rc(e.w / 256);
}
nc(y[e.e + 1]);
}
break;

case 161:
E["!autofilter"] = {
ref: Ct(e)
};
break;

case 476:
E["!margins"] = e;
break;

case 175:
case 644:
case 625:
case 562:
case 396:
case 1112:
case 1146:
case 471:
case 1050:
case 649:
case 1105:
case 49:
case 589:
case 607:
case 564:
case 1055:
case 168:
case 174:
case 1180:
case 499:
case 64:
case 1053:
case 550:
case 171:
case 167:
case 1177:
case 169:
case 1181:
case 551:
case 552:
case 661:
case 639:
case 478:
case 151:
case 537:
case 477:
case 536:
case 1103:
case 680:
case 1104:
case 1024:
case 152:
case 663:
case 535:
case 678:
case 504:
case 1043:
case 428:
case 170:
case 50:
case 2070:
case 485:
case 1045:
case 147:
break;

case 35:
B = !0;
break;

case 36:
B = !1;
break;

case 37:
case 38:
break;

default:
if ((t || "").indexOf("Begin") > 0) ; else if ((t || "").indexOf("End") > 0) ; else if (!B || i.WTF) throw new Error("Unexpected record " + n + " " + t);
}
}, i);
delete i.supbooks;
delete i["!row"];
!E["!ref"] && (S.s.r < 2e6 || f && (f.e.r > 0 || f.e.c > 0 || f.s.r > 0 || f.s.c > 0)) && (E["!ref"] = Ct(f || S));
if (i.sheetRows && E["!ref"]) {
var O = _t(E["!ref"]);
if (i.sheetRows < +O.e.r) {
O.e.r = i.sheetRows - 1;
O.e.r > S.e.r && (O.e.r = S.e.r);
O.e.r < O.s.r && (O.s.r = O.e.r);
O.e.c > S.e.c && (O.e.c = S.e.c);
O.e.c < O.s.c && (O.s.c = O.e.c);
E["!fullref"] = E["!ref"];
E["!ref"] = Ct(O);
}
}
C.length > 0 && (E["!merges"] = C);
y.length > 0 && (E["!cols"] = y);
R.length > 0 && (E["!rows"] = R);
return E;
}(e, r, n, a, s, i) : Dh(e, r, n, 0, s, i);
}
function mu(e, t, r, n, a, s, i) {
return ".bin" === t.slice(-4) ? function(e, t, r, n, a, s) {
if (!e) return e;
r || (r = {
"!id": {}
});
var i = {
"!type": "chart",
"!chart": null,
"!rel": ""
}, o = [], f = !1;
at(e, function(e, r, n) {
switch (n) {
case 550:
i["!rel"] = e;
break;

case 562:
case 652:
case 651:
case 669:
case 679:
case 551:
case 552:
case 476:
break;

case 35:
f = !0;
break;

case 36:
f = !1;
break;

case 37:
o.push(r);
break;

case 38:
o.pop();
break;

default:
if ((r || "").indexOf("Begin") > 0) o.push(r); else if ((r || "").indexOf("End") > 0) o.pop(); else if (!f || t.WTF) throw new Error("Unexpected record " + n + " " + r);
}
}, t);
r["!id"][i["!rel"]] && (i["!chart"] = r["!id"][i["!rel"]]);
return i;
}(e, r, n) : function(e, t, r, n, a, s) {
if (!e) return e;
r || (r = {
"!id": {}
});
var i, o = {
"!type": "chart",
"!chart": null,
"!rel": ""
};
(i = e.match(/drawing r:id="(.*?)"/)) && (o["!rel"] = i[1]);
r["!id"][o["!rel"]] && (o["!chart"] = r["!id"][o["!rel"]]);
return o;
}(e, 0, n);
}
function gu(e, t, r, n) {
return ".bin" === t.slice(-4) ? function(e, t, r) {
var n = {
NumberFmt: []
};
for (var a in m._table) n.NumberFmt[a] = m._table[a];
n.CellXf = [];
n.Fonts = [];
var s = [], i = !1;
at(e, function(e, a, o) {
switch (o) {
case 44:
n.NumberFmt[e[0]] = e[1];
m.load(e[1], e[0]);
break;

case 43:
n.Fonts.push(e);
null != e.color.theme && t && t.themeElements && t.themeElements.clrScheme && (e.color.rgb = Kl(t.themeElements.clrScheme[e.color.theme].rgb, e.color.tint || 0));
break;

case 1025:
case 45:
case 46:
break;

case 47:
"BrtBeginCellXFs" == s[s.length - 1] && n.CellXf.push(e);
break;

case 48:
case 507:
case 572:
case 475:
break;

case 1171:
case 2102:
case 1130:
case 512:
case 2095:
break;

case 35:
i = !0;
break;

case 36:
i = !1;
break;

case 37:
s.push(a);
break;

case 38:
s.pop();
break;

default:
if ((a || "").indexOf("Begin") > 0) s.push(a); else if ((a || "").indexOf("End") > 0) s.pop(); else if (!i || r.WTF) throw new Error("Unexpected record " + o + " " + a);
}
});
return n;
}(e, r, n) : cc(e, r, n);
}
function bu(e, t, r) {
return function e(t, r) {
if (!t || 0 === t.length) return e(Ac());
var n, a = {};
if (!(n = t.match(xc))) throw new Error("themeElements not found in theme");
kc(n[0], a, r);
return a;
}(e, r);
}
function vu(e, t, r) {
return ".bin" === t.slice(-4) ? function(e, t) {
var r = [], n = !1;
at(e, function(e, a, s) {
switch (s) {
case 159:
r.Count = e[0];
r.Unique = e[1];
break;

case 19:
r.push(e);
break;

case 160:
return !0;

case 35:
n = !0;
break;

case 36:
n = !1;
break;

default:
a.indexOf("Begin") > 0 || a.indexOf("End");
if (!n || t.WTF) throw new Error("Unexpected record " + s + " " + a);
}
});
return r;
}(e, r) : function(e, t) {
var r = [], n = "";
if (!e) return r;
var a = e.match(Il);
if (S(a)) {
n = a[2].replace(yl, "").split(Rl);
for (var s = 0; s != n.length; ++s) {
var i = Al(n[s].trim(), t);
null != i && (r[r.length] = i);
}
a = $(a[1]);
r.Count = a.count;
r.Unique = a.uniqueCount;
}
return r;
}(e, r);
}
function Eu(e, t, r) {
return ".bin" === t.slice(-4) ? function(e, t) {
var r = [], n = [], a = {}, s = !1;
at(e, function(e, i, o) {
switch (o) {
case 632:
n.push(e);
break;

case 635:
a = e;
break;

case 637:
a.t = e.t;
a.h = e.h;
a.r = e.r;
break;

case 636:
a.author = n[a.iauthor];
delete a.iauthor;
if (t.sheetRows && t.sheetRows <= a.rfx.r) break;
a.t || (a.t = "");
delete a.rfx;
r.push(a);
break;

case 35:
s = !0;
break;

case 36:
s = !1;
break;

case 37:
case 38:
break;

default:
if ((i || "").indexOf("Begin") > 0) ; else if ((i || "").indexOf("End") > 0) ; else if (!s || t.WTF) throw new Error("Unexpected record " + o + " " + i);
}
});
return r;
}(e, r) : function(e, t) {
if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
var r = [], n = [], a = e.match(/<(?:\w+:)?authors>([^\u2603]*)<\/(?:\w+:)?authors>/);
a && a[1] && a[1].split(/<\/\w*:?author>/).forEach(function(e) {
if ("" !== e && "" !== e.trim()) {
var t = e.match(/<(?:\w+:)?author[^>]*>(.*)/);
t && r.push(t[1]);
}
});
var s = e.match(/<(?:\w+:)?commentList>([^\u2603]*)<\/(?:\w+:)?commentList>/);
s && s[1] && s[1].split(/<\/\w*:?comment>/).forEach(function(e, a) {
if ("" !== e && "" !== e.trim()) {
var s = e.match(/<(?:\w+:)?comment[^>]*>/);
if (s) {
var i = $(s[0]), o = {
author: i.authorId && r[i.authorId] ? r[i.authorId] : "sheetjsghost",
ref: i.ref,
guid: i.guid
}, f = St(i.ref);
if (!(t.sheetRows && t.sheetRows <= f.r)) {
var l = e.match(/<(?:\w+:)?text>([^\u2603]*)<\/(?:\w+:)?text>/), c = !!l && !!l[1] && Al(l[1]) || {
r: "",
t: "",
h: ""
};
o.r = c.r;
"<t></t>" == c.r && (c.t = c.h = "");
o.t = c.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
t.cellHTML && (o.h = c.h);
n.push(o);
}
}
}
});
return n;
}(e, r);
}
function Su(e, t, r) {
return ".bin" === t.slice(-4) ? function(e, t) {
var r = [];
at(e, function(e, t, n) {
switch (n) {
case 63:
r.push(e);
break;

default:
if ((t || "").indexOf("Begin") > 0) ; else if (!((t || "").indexOf("End") > 0)) throw new Error("Unexpected record " + n + " " + t);
}
});
return r;
}(e) : function(e, t) {
var r = [];
if (!e) return r;
var n = 1;
(e.match(j) || []).forEach(function(e) {
var t = $(e);
switch (t[0]) {
case "<?xml":
break;

case "<calcChain":
case "<calcChain>":
case "</calcChain>":
break;

case "<c":
delete t[0];
t.i ? n = t.i : t.i = n;
r.push(t);
}
});
return r;
}(e);
}
function Bu(e, t, r) {
return (".bin" === t.slice(-4) ? uu : function(e, t) {
var r = [ Ue ];
r[r.length] = lu;
var n = e.Workbook && (e.Workbook.Names || []).length > 0, a = {
codeName: "ThisWorkbook"
};
if (e.Workbook && e.Workbook.WBProps) {
e.Workbook.WBProps.codeName && (a.codeName = e.Workbook.WBProps.codeName);
Qh.forEach(function(t) {
null != e.Workbook.WBProps[t[0]] && e.Workbook.WBProps[t[0]] != t[1] && (a[t[0]] = e.Workbook.WBProps[t[0]]);
});
}
r[r.length] = Se("workbookPr", null, a);
r[r.length] = "<sheets>";
for (var s = e.Workbook && e.Workbook.Sheets || [], i = 0; i != e.SheetNames.length; ++i) {
var o = {
name: te(e.SheetNames[i].substr(0, 31))
};
o.sheetId = "" + (i + 1);
o["r:id"] = "rId" + (i + 1);
if (s[i]) switch (s[i].Hidden) {
case 1:
o.state = "hidden";
break;

case 2:
o.state = "veryHidden";
}
r[r.length] = Se("sheet", null, o);
}
r[r.length] = "</sheets>";
if (n) {
r[r.length] = "<definedNames>";
e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(e) {
var t = {
name: e.Name
};
e.Comment && (t.comment = e.Comment);
null != e.Sheet && (t.localSheetId = "" + e.Sheet);
e.Ref && (r[r.length] = Se("definedName", String(e.Ref), t));
});
r[r.length] = "</definedNames>";
}
if (r.length > 2) {
r[r.length] = "</workbook>";
r[1] = r[1].replace("/>", ">");
}
return r.join("");
})(e, r);
}
function wu(e, t, r, n, a) {
return (".bin" === t.slice(-4) ? $h : Nh)(e, r, n, a);
}
function Cu(e, t, r) {
return (".bin" === t.slice(-4) ? Fl : function(e, t) {
if (!t.bookSST) return "";
var r = [ Ue ];
r[r.length] = Se("sst", null, {
xmlns: He.main[0],
count: e.Count,
uniqueCount: e.Unique
});
for (var n = 0; n != e.length; ++n) if (null != e[n]) {
var a = e[n], s = "<si>";
if (a.r) s += a.r; else {
s += "<t";
a.t || (a.t = "");
a.t.match(Dl) && (s += ' xml:space="preserve"');
s += ">" + te(a.t) + "</t>";
}
s += "</si>";
r[r.length] = s;
}
if (r.length > 2) {
r[r.length] = "</sst>";
r[1] = r[1].replace("/>", ">");
}
return r.join("");
})(e, r);
}
function _u(e, t, r) {
return (".bin" === t.slice(-4) ? Mc : function(e, t) {
var r = [ Ue, Pc ], n = [];
r.push("<authors>");
e.map(function(e) {
return e[1];
}).forEach(function(e) {
e.map(function(e) {
return te(e.a);
}).forEach(function(e) {
if (!(n.indexOf(e) > -1)) {
n.push(e);
r.push("<author>" + e + "</author>");
}
});
});
r.push("</authors>");
r.push("<commentList>");
e.forEach(function(e) {
e[1].forEach(function(t) {
r.push('<comment ref="' + e[0] + '" authorId="' + n.indexOf(te(t.a)) + '"><text>');
r.push(ve("t", null == t.t ? "" : t.t));
r.push("</text></comment>");
});
});
r.push("</commentList>");
if (r.length > 2) {
r[r.length] = "</comments>";
r[1] = r[1].replace("/>", ">");
}
return r.join("");
})(e, r);
}
var Tu = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, ku = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/, xu = function(e) {
return String.fromCharCode(e);
};
function Au(e, t) {
var r = e.split(/\s+/), n = [];
t || (n[0] = r[0]);
if (1 === r.length) return n;
var a, s, i, o = e.match(Tu);
if (o) for (i = 0; i != o.length; ++i) -1 === (s = (a = o[i].match(ku))[1].indexOf(":")) ? n[a[1]] = a[2].substr(1, a[2].length - 2) : n["xmlns:" === a[1].substr(0, 6) ? "xmlns" + a[1].substr(6) : a[1].substr(s + 1)] = a[2].substr(1, a[2].length - 2);
return n;
}
function Iu(e) {
var t = {};
if (1 === e.split(/\s+/).length) return t;
var r, n, a, s = e.match(Tu);
if (s) for (a = 0; a != s.length; ++a) -1 === (n = (r = s[a].match(ku))[1].indexOf(":")) ? t[r[1]] = r[2].substr(1, r[2].length - 2) : t["xmlns:" === r[1].substr(0, 6) ? "xmlns" + r[1].substr(6) : r[1].substr(n + 1)] = r[2].substr(1, r[2].length - 2);
return t;
}
function yu(e, t, r, n) {
var a = n;
switch ((r[0].match(/dt:dt="([\w.]+)"/) || [ "", "" ])[1]) {
case "boolean":
a = oe(n);
break;

case "i2":
case "int":
a = parseInt(n, 10);
break;

case "r4":
case "float":
a = parseFloat(n);
break;

case "date":
case "dateTime.tz":
a = O(n);
break;

case "i8":
case "string":
case "fixed":
case "uuid":
case "bin.base64":
break;

default:
throw new Error("bad custprop:" + r[0]);
}
e[q(t[3])] = a;
}
function Ru(e, t, r) {
if ("z" !== e.t) {
if (!r || !1 !== r.cellText) try {
"e" === e.t ? e.w = e.w || Qt[e.v] : "General" === t ? "n" === e.t ? (0 | e.v) === e.v ? e.w = m._general_int(e.v) : e.w = m._general_num(e.v) : e.w = m._general(e.v) : e.w = function(e, t) {
var r = b[e] || q(e);
return "General" === r ? m._general(t) : m.format(r, t);
}(t || "General", e.v);
} catch (e) {
if (r.WTF) throw e;
}
try {
var n = b[t] || t || "General";
r.cellNF && (e.z = n);
if (r.cellDates && "n" == e.t && m.is_date(n)) {
var a = m.parse_date_code(e.v);
if (a) {
e.t = "d";
e.v = new Date(a.y, a.m - 1, a.d, a.H, a.M, a.S, a.u);
}
}
} catch (e) {
if (r.WTF) throw e;
}
}
}
function Du(e, t, r) {
if (r.cellStyles && t.Interior) {
var n = t.Interior;
n.Pattern && (n.patternType = oc[n.Pattern] || n.Pattern);
}
e[t.ID] = t;
}
function Ou(e, t, r, n, a, s, i, o, f, l) {
var c = "General", h = n.StyleID, u = {};
l = l || {};
var d = [], p = 0;
void 0 === h && o && (h = o.StyleID);
void 0 === h && i && (h = i.StyleID);
for (;void 0 !== s[h]; ) {
s[h].nf && (c = s[h].nf);
s[h].Interior && d.push(s[h].Interior);
if (!s[h].Parent) break;
h = s[h].Parent;
}
switch (r.Type) {
case "Boolean":
n.t = "b";
n.v = oe(e);
break;

case "String":
n.t = "s";
n.r = se(q(e));
n.v = e.indexOf("<") > -1 ? q(t) : n.r;
break;

case "DateTime":
"Z" != e.slice(-1) && (e += "Z");
n.v = (O(e) - new Date(Date.UTC(1899, 11, 30))) / 864e5;
n.v != n.v ? n.v = q(e) : n.v < 60 && (n.v = n.v - 1);
c && "General" != c || (c = "yyyy-mm-dd");

case "Number":
void 0 === n.v && (n.v = +e);
n.t || (n.t = "n");
break;

case "Error":
n.t = "e";
n.v = qt[e];
!1 !== l.cellText && (n.w = e);
break;

default:
n.t = "s";
n.v = se(t || e);
}
Ru(n, c, l);
if (!1 !== l.cellFormula) if (n.Formula) {
var m = q(n.Formula);
61 == m.charCodeAt(0) && (m = m.substr(1));
n.f = Lc(m, a);
delete n.Formula;
if ("RC" == n.ArrayRange) n.F = Lc("RC:RC", a); else if (n.ArrayRange) {
n.F = Lc(n.ArrayRange, a);
f.push([ _t(n.F), n.F ]);
}
} else for (p = 0; p < f.length; ++p) a.r >= f[p][0].s.r && a.r <= f[p][0].e.r && a.c >= f[p][0].s.c && a.c <= f[p][0].e.c && (n.F = f[p][1]);
if (l.cellStyles) {
d.forEach(function(e) {
!u.patternType && e.patternType && (u.patternType = e.patternType);
});
n.s = u;
}
n.ixfe = void 0 !== n.StyleID ? n.StyleID : "Default";
}
function Fu(e) {
e.t = e.v || "";
e.t = e.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
e.v = e.w = e.ixfe = void 0;
}
function Pu(e) {
if (l && Buffer.isBuffer(e)) return e.toString("utf8");
if ("string" == typeof e) return e;
throw new Error("Bad input format: expected Buffer or string");
}
var Nu = /<(\/?)([^\s?>!\/:]*:|)([^\s?>]*[^\s?>\/])[^>]*>/gm;
function Mu(e, t) {
g(m);
var r, n = s(Pu(e));
t && "binary" == t.type && "undefined" != typeof cptable && (n = cptable.utils.decode(65001, a(n)));
if (n.substr(0, 1e3).indexOf("<html") >= 0) return td.to_workbook(n, t);
var i, f = [];
null != o && null == t.dense && (t.dense = o);
var l, c = {}, h = [], u = t.dense ? [] : {}, d = "", p = {}, v = {}, E = Au('<Data ss:Type="String">'), S = 0, B = 0, w = 0, C = {
s: {
r: 2e6,
c: 2e6
},
e: {
r: 0,
c: 0
}
}, _ = {}, T = {}, k = "", x = 0, A = [], I = {}, y = {}, R = 0, D = {}, O = [], F = {}, N = [], M = !1, L = [], U = [], H = {}, W = {
Sheets: [],
WBProps: {
date1904: !1
}
}, V = {};
Nu.lastIndex = 0;
n = n.replace(/<!--([^\u2603]*?)-->/gm, "");
for (;r = Nu.exec(n); ) switch (r[3]) {
case "Data":
if (f[f.length - 1][1]) break;
if ("/" === r[1]) Ou(n.slice(S, r.index), k, E, "Comment" == f[f.length - 1][0] ? F : p, {
c: B,
r: w
}, _, N[B], v, L, t); else {
k = "";
E = Au(r[0]);
S = r.index + r[0].length;
}
break;

case "Cell":
if ("/" === r[1]) {
O.length > 0 && (p.c = O);
if ((!t.sheetRows || t.sheetRows > w) && void 0 !== p.v) if (t.dense) {
u[w] || (u[w] = []);
u[w][B] = p;
} else u[gt(B) + ut(w)] = p;
if (p.HRef) {
p.l = {
Target: p.HRef,
Tooltip: p.HRefScreenTip
};
delete p.HRef;
delete p.HRefScreenTip;
}
if (p.MergeAcross || p.MergeDown) {
var z = B + (0 | parseInt(p.MergeAcross, 10)), X = w + (0 | parseInt(p.MergeDown, 10));
A.push({
s: {
c: B,
r: w
},
e: {
c: z,
r: X
}
});
}
if (t.sheetStubs) if (p.MergeAcross || p.MergeDown) {
for (var G = B; G <= z; ++G) for (var j = w; j <= X; ++j) if (G > B || j > w) if (t.dense) {
u[j] || (u[j] = []);
u[j][G] = {
t: "z"
};
} else u[gt(G) + ut(j)] = {
t: "z"
};
B = z + 1;
} else ++B; else p.MergeAcross ? B = z + 1 : ++B;
} else {
(p = Iu(r[0])).Index && (B = +p.Index - 1);
B < C.s.c && (C.s.c = B);
B > C.e.c && (C.e.c = B);
"/>" === r[0].slice(-2) && ++B;
O = [];
}
break;

case "Row":
if ("/" === r[1] || "/>" === r[0].slice(-2)) {
w < C.s.r && (C.s.r = w);
w > C.e.r && (C.e.r = w);
"/>" === r[0].slice(-2) && (v = Au(r[0])).Index && (w = +v.Index - 1);
B = 0;
++w;
} else {
(v = Au(r[0])).Index && (w = +v.Index - 1);
H = {};
if ("0" == v.AutoFitHeight || v.Height) {
H.hpx = parseInt(v.Height, 10);
H.hpt = sc(H.hpx);
U[w] = H;
}
if ("1" == v.Hidden) {
H.hidden = !0;
U[w] = H;
}
}
break;

case "Worksheet":
if ("/" === r[1]) {
if ((i = f.pop())[0] !== r[3]) throw new Error("Bad state: " + i.join("|"));
h.push(d);
C.s.r <= C.e.r && C.s.c <= C.e.c && (u["!ref"] = Ct(C));
A.length && (u["!merges"] = A);
N.length > 0 && (u["!cols"] = N);
U.length > 0 && (u["!rows"] = U);
c[d] = u;
} else {
C = {
s: {
r: 2e6,
c: 2e6
},
e: {
r: 0,
c: 0
}
};
w = B = 0;
f.push([ r[3], !1 ]);
i = Au(r[0]);
d = q(i.Name);
u = t.dense ? [] : {};
A = [];
L = [];
U = [];
V = {
name: d,
Hidden: 0
};
W.Sheets.push(V);
}
break;

case "Table":
if ("/" === r[1]) {
if ((i = f.pop())[0] !== r[3]) throw new Error("Bad state: " + i.join("|"));
} else {
if ("/>" == r[0].slice(-2)) break;
Au(r[0]);
f.push([ r[3], !1 ]);
N = [];
M = !1;
}
break;

case "Style":
"/" === r[1] ? Du(_, T, t) : T = Au(r[0]);
break;

case "NumberFormat":
T.nf = q(Au(r[0]).Format || "General");
b[T.nf] && (T.nf = b[T.nf]);
for (var K = 0; 392 != K && m._table[K] != T.nf; ++K) ;
if (392 == K) for (K = 57; 392 != K; ++K) if (null == m._table[K]) {
m.load(T.nf, K);
break;
}
break;

case "Column":
if ("Table" !== f[f.length - 1][0]) break;
if ((l = Au(r[0])).Hidden) {
l.hidden = !0;
delete l.Hidden;
}
l.Width && (l.wpx = parseInt(l.Width, 10));
if (!M && l.wpx > 10) {
M = !0;
Ql = Yl;
for (var Y = 0; Y < N.length; ++Y) N[Y] && nc(N[Y]);
}
M && nc(l);
N[l.Index - 1 || N.length] = l;
for (var Z = 0; Z < +l.Span; ++Z) N[N.length] = P(l);
break;

case "NamedRange":
W.Names || (W.Names = []);
var Q = $(r[0]), J = {
Name: Q.Name,
Ref: Lc(Q.RefersTo.substr(1))
};
W.Sheets.length > 0 && (J.Sheet = W.Sheets.length - 1);
W.Names.push(J);
break;

case "NamedCell":
case "B":
case "I":
case "U":
case "S":
case "Sub":
case "Sup":
case "Span":
case "Border":
case "Alignment":
case "Borders":
break;

case "Font":
if ("/>" === r[0].slice(-2)) break;
"/" === r[1] ? k += n.slice(x, r.index) : x = r.index + r[0].length;
break;

case "Interior":
if (!t.cellStyles) break;
T.Interior = Au(r[0]);
break;

case "Protection":
break;

case "Author":
case "Title":
case "Description":
case "Created":
case "Keywords":
case "Subject":
case "Category":
case "Company":
case "LastAuthor":
case "LastSaved":
case "LastPrinted":
case "Version":
case "Revision":
case "TotalTime":
case "HyperlinkBase":
case "Manager":
case "ContentStatus":
case "Identifier":
case "Language":
if ("/>" === r[0].slice(-2)) break;
"/" === r[1] ? Mr(I, r[3], n.slice(R, r.index)) : R = r.index + r[0].length;
break;

case "Paragraphs":
break;

case "Styles":
case "Workbook":
if ("/" === r[1]) {
if ((i = f.pop())[0] !== r[3]) throw new Error("Bad state: " + i.join("|"));
} else f.push([ r[3], !1 ]);
break;

case "Comment":
if ("/" === r[1]) {
if ((i = f.pop())[0] !== r[3]) throw new Error("Bad state: " + i.join("|"));
Fu(F);
O.push(F);
} else {
f.push([ r[3], !1 ]);
F = {
a: (i = Au(r[0])).Author
};
}
break;

case "AutoFilter":
if ("/" === r[1]) {
if ((i = f.pop())[0] !== r[3]) throw new Error("Bad state: " + i.join("|"));
} else if ("/" !== r[0].charAt(r[0].length - 2)) {
var ee = Au(r[0]);
u["!autofilter"] = {
ref: Lc(ee.Range).replace(/\$/g, "")
};
f.push([ r[3], !0 ]);
}
break;

case "Name":
break;

case "ComponentOptions":
case "DocumentProperties":
case "CustomDocumentProperties":
case "OfficeDocumentSettings":
case "PivotTable":
case "PivotCache":
case "Names":
case "MapInfo":
case "PageBreaks":
case "QueryTable":
case "DataValidation":
case "Sorting":
case "Schema":
case "data":
case "ConditionalFormatting":
case "SmartTagType":
case "SmartTags":
case "ExcelWorkbook":
case "WorkbookOptions":
case "WorksheetOptions":
if ("/" === r[1]) {
if ((i = f.pop())[0] !== r[3]) throw new Error("Bad state: " + i.join("|"));
} else "/" !== r[0].charAt(r[0].length - 2) && f.push([ r[3], !0 ]);
break;

default:
if (0 == f.length && "document" == r[3]) return sd(n, t);
if (0 == f.length && "UOF" == r[3]) return sd(n, t);
var te = !0;
switch (f[f.length - 1][0]) {
case "OfficeDocumentSettings":
switch (r[3]) {
case "AllowPNG":
case "RemovePersonalInformation":
case "DownloadComponents":
case "LocationOfComponents":
case "Colors":
case "Color":
case "Index":
case "RGB":
case "PixelsPerInch":
case "TargetScreenSize":
case "ReadOnlyRecommended":
break;

default:
te = !1;
}
break;

case "ComponentOptions":
switch (r[3]) {
case "Toolbar":
case "HideOfficeLogo":
case "SpreadsheetAutoFit":
case "Label":
case "Caption":
case "MaxHeight":
case "MaxWidth":
case "NextSheetNumber":
break;

default:
te = !1;
}
break;

case "ExcelWorkbook":
switch (r[3]) {
case "Date1904":
W.WBProps.date1904 = !0;
break;

case "WindowHeight":
case "WindowWidth":
case "WindowTopX":
case "WindowTopY":
case "TabRatio":
case "ProtectStructure":
case "ProtectWindows":
case "ActiveSheet":
case "DisplayInkNotes":
case "FirstVisibleSheet":
case "SupBook":
case "SheetName":
case "SheetIndex":
case "SheetIndexFirst":
case "SheetIndexLast":
case "Dll":
case "AcceptLabelsInFormulas":
case "DoNotSaveLinkValues":
case "Iteration":
case "MaxIterations":
case "MaxChange":
case "Path":
case "Xct":
case "Count":
case "SelectedSheets":
case "Calculation":
case "Uncalced":
case "StartupPrompt":
case "Crn":
case "ExternName":
case "Formula":
case "ColFirst":
case "ColLast":
case "WantAdvise":
case "Boolean":
case "Error":
case "Text":
case "OLE":
case "NoAutoRecover":
case "PublishObjects":
case "DoNotCalculateBeforeSave":
case "Number":
case "RefModeR1C1":
case "EmbedSaveSmartTags":
break;

default:
te = !1;
}
break;

case "WorkbookOptions":
switch (r[3]) {
case "OWCVersion":
case "Height":
case "Width":
break;

default:
te = !1;
}
break;

case "WorksheetOptions":
switch (r[3]) {
case "Visible":
if ("/>" === r[0].slice(-2)) ; else if ("/" === r[1]) switch (n.slice(R, r.index)) {
case "SheetHidden":
V.Hidden = 1;
break;

case "SheetVeryHidden":
V.Hidden = 2;
} else R = r.index + r[0].length;
break;

case "Header":
u["!margins"] || wh(u["!margins"] = {}, "xlml");
u["!margins"].header = $(r[0]).Margin;
break;

case "Footer":
u["!margins"] || wh(u["!margins"] = {}, "xlml");
u["!margins"].footer = $(r[0]).Margin;
break;

case "PageMargins":
var re = $(r[0]);
u["!margins"] || wh(u["!margins"] = {}, "xlml");
re.Top && (u["!margins"].top = re.Top);
re.Left && (u["!margins"].left = re.Left);
re.Right && (u["!margins"].right = re.Right);
re.Bottom && (u["!margins"].bottom = re.Bottom);
break;

case "Unsynced":
case "Print":
case "Panes":
case "Scale":
case "Pane":
case "Number":
case "Layout":
case "PageSetup":
case "Selected":
case "ProtectObjects":
case "EnableSelection":
case "ProtectScenarios":
case "ValidPrinterInfo":
case "HorizontalResolution":
case "VerticalResolution":
case "NumberofCopies":
case "ActiveRow":
case "ActiveCol":
case "ActivePane":
case "TopRowVisible":
case "TopRowBottomPane":
case "LeftColumnVisible":
case "LeftColumnRightPane":
case "FitToPage":
case "RangeSelection":
case "PaperSizeIndex":
case "PageLayoutZoom":
case "PageBreakZoom":
case "FilterOn":
case "DoNotDisplayGridlines":
case "SplitHorizontal":
case "SplitVertical":
case "FreezePanes":
case "FrozenNoSplit":
case "FitWidth":
case "FitHeight":
case "CommentsLayout":
case "Zoom":
case "LeftToRight":
case "Gridlines":
case "AllowSort":
case "AllowFilter":
case "AllowInsertRows":
case "AllowDeleteRows":
case "AllowInsertCols":
case "AllowDeleteCols":
case "AllowInsertHyperlinks":
case "AllowFormatCells":
case "AllowSizeCols":
case "AllowSizeRows":
case "NoSummaryRowsBelowDetail":
case "TabColorIndex":
case "DoNotDisplayHeadings":
case "ShowPageLayoutZoom":
case "NoSummaryColumnsRightDetail":
case "BlackAndWhite":
case "DoNotDisplayZeros":
case "DisplayPageBreak":
case "RowColHeadings":
case "DoNotDisplayOutline":
case "NoOrientation":
case "AllowUsePivotTables":
case "ZeroHeight":
case "ViewableRange":
case "Selection":
case "ProtectContents":
break;

default:
te = !1;
}
break;

case "PivotTable":
case "PivotCache":
switch (r[3]) {
case "ImmediateItemsOnDrop":
case "ShowPageMultipleItemLabel":
case "CompactRowIndent":
case "Location":
case "PivotField":
case "Orientation":
case "LayoutForm":
case "LayoutSubtotalLocation":
case "LayoutCompactRow":
case "Position":
case "PivotItem":
case "DataType":
case "DataField":
case "SourceName":
case "ParentField":
case "PTLineItems":
case "PTLineItem":
case "CountOfSameItems":
case "Item":
case "ItemType":
case "PTSource":
case "CacheIndex":
case "ConsolidationReference":
case "FileName":
case "Reference":
case "NoColumnGrand":
case "NoRowGrand":
case "BlankLineAfterItems":
case "Hidden":
case "Subtotal":
case "BaseField":
case "MapChildItems":
case "Function":
case "RefreshOnFileOpen":
case "PrintSetTitles":
case "MergeLabels":
case "DefaultVersion":
case "RefreshName":
case "RefreshDate":
case "RefreshDateCopy":
case "VersionLastRefresh":
case "VersionLastUpdate":
case "VersionUpdateableMin":
case "VersionRefreshableMin":
case "Calculation":
break;

default:
te = !1;
}
break;

case "PageBreaks":
switch (r[3]) {
case "ColBreaks":
case "ColBreak":
case "RowBreaks":
case "RowBreak":
case "ColStart":
case "ColEnd":
case "RowEnd":
break;

default:
te = !1;
}
break;

case "AutoFilter":
switch (r[3]) {
case "AutoFilterColumn":
case "AutoFilterCondition":
case "AutoFilterAnd":
case "AutoFilterOr":
break;

default:
te = !1;
}
break;

case "QueryTable":
switch (r[3]) {
case "Id":
case "AutoFormatFont":
case "AutoFormatPattern":
case "QuerySource":
case "QueryType":
case "EnableRedirections":
case "RefreshedInXl9":
case "URLString":
case "HTMLTables":
case "Connection":
case "CommandText":
case "RefreshInfo":
case "NoTitles":
case "NextId":
case "ColumnInfo":
case "OverwriteCells":
case "DoNotPromptForFile":
case "TextWizardSettings":
case "Source":
case "Number":
case "Decimal":
case "ThousandSeparator":
case "TrailingMinusNumbers":
case "FormatSettings":
case "FieldType":
case "Delimiters":
case "Tab":
case "Comma":
case "AutoFormatName":
case "VersionLastEdit":
case "VersionLastRefresh":
break;

default:
te = !1;
}
break;

case "Sorting":
case "ConditionalFormatting":
case "DataValidation":
switch (r[3]) {
case "Range":
case "Type":
case "Min":
case "Max":
case "Sort":
case "Descending":
case "Order":
case "CaseSensitive":
case "Value":
case "ErrorStyle":
case "ErrorMessage":
case "ErrorTitle":
case "CellRangeList":
case "InputMessage":
case "InputTitle":
case "ComboHide":
case "InputHide":
case "Condition":
case "Qualifier":
case "UseBlank":
case "Value1":
case "Value2":
case "Format":
break;

default:
te = !1;
}
break;

case "MapInfo":
case "Schema":
case "data":
switch (r[3]) {
case "Map":
case "Entry":
case "Range":
case "XPath":
case "Field":
case "XSDType":
case "FilterOn":
case "Aggregate":
case "ElementType":
case "AttributeType":
break;

case "schema":
case "element":
case "complexType":
case "datatype":
case "all":
case "attribute":
case "extends":
case "row":
break;

default:
te = !1;
}
break;

case "SmartTags":
break;

default:
te = !1;
}
if (te) break;
if (!f[f.length - 1][1]) throw "Unrecognized tag: " + r[3] + "|" + f.join("|");
if ("CustomDocumentProperties" === f[f.length - 1][0]) {
if ("/>" === r[0].slice(-2)) break;
if ("/" === r[1]) yu(y, r, D, n.slice(R, r.index)); else {
D = r;
R = r.index + r[0].length;
}
break;
}
if (t.WTF) throw "Unrecognized tag: " + r[3] + "|" + f.join("|");
}
var ne = {};
t.bookSheets || t.bookProps || (ne.Sheets = c);
ne.SheetNames = h;
ne.Workbook = W;
ne.SSF = m.get_table();
ne.Props = I;
ne.Custprops = y;
return ne;
}
function Lu(e, t) {
bd(t = t || {});
switch (t.type || "base64") {
case "base64":
return Mu(f.decode(e), t);

case "binary":
case "buffer":
case "file":
return Mu(e, t);

case "array":
return Mu(e.map(xu).join(""), t);
}
}
function Uu(e, t) {
var r = [];
e.Props && r.push(function(e, t) {
var r = [];
B(Pr).map(function(e) {
for (var t = 0; t < kr.length; ++t) if (kr[t][1] == e) return kr[t];
for (t = 0; t < yr.length; ++t) if (yr[t][1] == e) return yr[t];
throw e;
}).forEach(function(n) {
if (null != e[n[1]]) {
var a = t && t.Props && null != t.Props[n[1]] ? t.Props[n[1]] : e[n[1]];
switch (n[2]) {
case "date":
a = new Date(a).toISOString().replace(/\.\d*Z/, "Z");
}
"number" == typeof a ? a = String(a) : !0 === a || !1 === a ? a = a ? "1" : "0" : a instanceof Date && (a = new Date(a).toISOString().replace(/\.\d*Z/, ""));
r.push(ve(Pr[n[1]] || n[1], a));
}
});
return Se("DocumentProperties", r.join(""), {
xmlns: We.o
});
}(e.Props, t));
e.Custprops && r.push(function(e, t, r) {
var n = [ "Worksheets", "SheetNames" ], a = "CustomDocumentProperties", s = [];
e && B(e).forEach(function(t) {
if (e.hasOwnProperty(t)) {
for (var r = 0; r < kr.length; ++r) if (t == kr[r][1]) return;
for (r = 0; r < yr.length; ++r) if (t == yr[r][1]) return;
for (r = 0; r < n.length; ++r) if (t == n[r]) return;
var a = e[t], i = "string";
if ("number" == typeof a) {
i = "float";
a = String(a);
} else if (!0 === a || !1 === a) {
i = "boolean";
a = a ? "1" : "0";
} else a = String(a);
s.push(Se(re(t), a, {
"dt:dt": i
}));
}
});
t && B(t).forEach(function(e) {
if (t.hasOwnProperty(e)) {
var r = t[e], n = "string";
if ("number" == typeof r) {
n = "float";
r = String(r);
} else if (!0 === r || !1 === r) {
n = "boolean";
r = r ? "1" : "0";
} else if (r instanceof Date) {
n = "dateTime.tz";
r = r.toISOString();
} else r = String(r);
s.push(Se(re(e), r, {
"dt:dt": n
}));
}
});
return "<" + a + ' xmlns="' + We.o + '">' + s.join("") + "</" + a + ">";
}(e.Props, e.Custprops));
return r.join("");
}
function Hu(e, t, r, n, a, s, i) {
if (!e || void 0 == e.v && void 0 == e.f) return "<Cell></Cell>";
var o = {};
e.f && (o["ss:Formula"] = "=" + te(Hc(e.f, i)));
if (e.F && e.F.substr(0, t.length) == t) {
var f = St(e.F.substr(t.length + 1));
o["ss:ArrayRange"] = "RC:R" + (f.r == i.r ? "" : "[" + (f.r - i.r) + "]") + "C" + (f.c == i.c ? "" : "[" + (f.c - i.c) + "]");
}
if (e.l && e.l.Target) {
o["ss:HRef"] = te(e.l.Target);
e.l.Tooltip && (o["x:HRefScreenTip"] = te(e.l.Tooltip));
}
if (r["!merges"]) for (var l = r["!merges"], c = 0; c != l.length; ++c) if (l[c].s.c == i.c && l[c].s.r == i.r) {
l[c].e.c > l[c].s.c && (o["ss:MergeAcross"] = l[c].e.c - l[c].s.c);
l[c].e.r > l[c].s.r && (o["ss:MergeDown"] = l[c].e.r - l[c].s.r);
}
var h = "", u = "";
switch (e.t) {
case "z":
return "";

case "n":
h = "Number";
u = String(e.v);
break;

case "b":
h = "Boolean";
u = e.v ? "1" : "0";
break;

case "e":
h = "Error";
u = Qt[e.v];
break;

case "d":
h = "DateTime";
u = new Date(e.v).toISOString();
break;

case "s":
h = "String";
u = te(e.v || "");
}
var d = null != e.v ? u : "";
if (n && "binary" == n.type && "undefined" != typeof cptable && "s" == e.t) {
d = cptable.utils.encode(65001, d);
for (var p = "", m = 0; m < d.length; ++m) p += String.fromCharCode(d[m]);
d = p;
}
var g = '<Data ss:Type="' + h + '">' + d + "</Data>";
(e.c || []).length > 0 && (g += function(e) {
return e.map(function(e) {
return Se("Comment", Se("ss:Data", ie(e.t || ""), {
xmlns: "http://www.w3.org/TR/REC-html40"
}), {
"ss:Author": e.a
});
}).join("");
}(e.c));
return Se("Cell", g, o);
}
function Wu(e, t) {
var r = '<Row ss:Index="' + (e + 1) + '"';
if (t) {
t.hpt && !t.hpx && (t.hpx = ic(t.hpt));
t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"');
t.hidden && (r += ' ss:Hidden="1"');
}
return r + ">";
}
function Vu(e, t, r) {
var n = [], a = r.SheetNames[e], s = r.Sheets[a], i = s ? function(e, t, r, n) {
if (!e["!ref"]) return "";
var a = _t(e["!ref"]), s = e["!merges"] || [], i = 0, o = [];
e["!cols"] && e["!cols"].forEach(function(e, t) {
nc(e);
var r = !!e.width, n = Bh(t, e), a = {
"ss:Index": t + 1
};
r && (a["ss:Width"] = ql(n.width));
e.hidden && (a["ss:Hidden"] = "1");
o.push(Se("Column", null, a));
});
for (var f = Array.isArray(e), l = a.s.r; l <= a.e.r; ++l) {
for (var c = [ Wu(l, (e["!rows"] || [])[l]) ], h = a.s.c; h <= a.e.c; ++h) {
var u = !1;
for (i = 0; i != s.length; ++i) if (!(s[i].s.c > h || s[i].s.r > l || s[i].e.c < h || s[i].e.r < l)) {
s[i].s.c == h && s[i].s.r == l || (u = !0);
break;
}
if (!u) {
var d = {
r: l,
c: h
}, p = Bt(d), m = f ? (e[l] || [])[h] : e[p];
c.push(Hu(m, p, e, t, 0, 0, d));
}
}
c.push("</Row>");
c.length > 2 && o.push(c.join(""));
}
return o.join("");
}(s, t) : "";
i.length > 0 && n.push("<Table>" + i + "</Table>");
n.push(function(e, t, r, n) {
if (!e) return "";
var a = [];
if (e["!margins"]) {
a.push("<PageSetup>");
e["!margins"].header && a.push(Se("Header", null, {
"x:Margin": e["!margins"].header
}));
e["!margins"].footer && a.push(Se("Footer", null, {
"x:Margin": e["!margins"].footer
}));
a.push(Se("PageMargins", null, {
"x:Bottom": e["!margins"].bottom || "0.75",
"x:Left": e["!margins"].left || "0.7",
"x:Right": e["!margins"].right || "0.7",
"x:Top": e["!margins"].top || "0.75"
}));
a.push("</PageSetup>");
}
if (n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r]) if (n.Workbook.Sheets[r].Hidden) a.push(Se("Visible", 1 == n.Workbook.Sheets[r].Hidden ? "SheetHidden" : "SheetVeryHidden", {})); else {
for (var s = 0; s < r && (!n.Workbook.Sheets[s] || n.Workbook.Sheets[s].Hidden); ++s) ;
s == r && a.push("<Selected/>");
}
if (e["!protect"]) {
a.push(ve("ProtectContents", "True"));
e["!protect"].objects && a.push(ve("ProtectObjects", "True"));
e["!protect"].scenarios && a.push(ve("ProtectScenarios", "True"));
null == e["!protect"].selectLockedCells || e["!protect"].selectLockedCells ? null == e["!protect"].selectUnlockedCells || e["!protect"].selectUnlockedCells || a.push(ve("EnableSelection", "UnlockedCells")) : a.push(ve("EnableSelection", "NoSelection"));
[ [ "formatColumns", "AllowFormatCells" ], [ "formatRows", "AllowSizeCols" ], [ "formatCells", "AllowSizeRows" ], [ "insertColumns", "AllowInsertCols" ], [ "insertRows", "AllowInsertRows" ], [ "insertHyperlinks", "AllowInsertHyperlinks" ], [ "deleteColumns", "AllowDeleteCols" ], [ "deleteRows", "AllowDeleteRows" ], [ "sort", "AllowSort" ], [ "autoFilter", "AllowFilter" ], [ "pivotTables", "AllowUsePivotTables" ] ].forEach(function(t) {
e["!protect"][t[0]] && a.push("<" + t[1] + "/>");
});
}
return 0 == a.length ? "" : Se("WorksheetOptions", a.join(""), {
xmlns: We.x
});
}(s, 0, e, r));
return n.join("");
}
function zu(e, t, r, n) {
var a = r, s = [], i = t.slice(t.l, t.l + a);
if (n && n.enc && n.enc.insitu_decrypt) switch (e.n) {
case "BOF":
case "FilePass":
case "FileLock":
case "InterfaceHdr":
case "RRDInfo":
case "RRDHead":
case "UsrExcl":
break;

default:
if (0 === i.length) break;
n.enc.insitu_decrypt(i);
}
s.push(i);
t.l += a;
for (var o = Zu[Xe(t, t.l)]; null != o && "Continue" === o.n; ) {
a = Xe(t, t.l + 2);
s.push(t.slice(t.l + 4, t.l + 4 + a));
t.l += 4 + a;
o = Zu[Xe(t, t.l)];
}
var f = u(s);
tt(f, 0);
var l = 0;
f.lens = [];
for (var c = 0; c < s.length; ++c) {
f.lens.push(l);
l += s[c].length;
}
return e.f(f, f.length, n);
}
function Xu(e, t, r) {
if ("z" !== e.t && e.XF) {
var n = 0;
try {
n = e.z || e.XF.ifmt || 0;
t.cellNF && (e.z = m._table[n]);
} catch (e) {
if (t.WTF) throw e;
}
if (!t || !1 !== t.cellText) try {
"e" === e.t ? e.w = e.w || Qt[e.v] : 0 === n ? "n" === e.t ? (0 | e.v) === e.v ? e.w = m._general_int(e.v) : e.w = m._general_num(e.v) : e.w = m._general(e.v) : e.w = m.format(n, e.v, {
date1904: !!r
});
if (t.cellDates && n && "n" == e.t && m.is_date(m._table[n])) {
var a = m.parse_date_code(e.v);
if (a) {
e.t = "d";
e.v = new Date(a.y, a.m - 1, a.d, a.H, a.M, a.S, a.u);
}
}
} catch (e) {
if (t.WTF) throw e;
}
}
}
function Gu(e, t, r) {
return {
v: e,
ixfe: t,
t: r
};
}
function ju(e, t) {
var r = {
opts: {}
}, a = {};
null != o && null == t.dense && (t.dense = o);
var s, i, f, l, c, h, u, d = t.dense ? [] : {}, p = {}, g = {}, b = null, v = [], E = "", S = {}, B = "", w = {}, C = [], _ = !0, T = [], k = [], x = {
Sheets: [],
WBProps: {
date1904: !1
}
}, A = {}, I = function(e) {
return e < 8 ? cr[e] : e < 64 && k[e - 8] || cr[e];
}, y = function(e, t, r) {
if (!(H > 1) && _) {
r.cellStyles && t.XF && t.XF.data && function(e, t, r) {
var n = t.XF.data;
if (n && n.patternType && r && r.cellStyles) {
t.s = {};
t.s.patternType = n.patternType;
var a;
(a = jl(I(n.icvFore))) && (t.s.fgColor = {
rgb: a
});
(a = jl(I(n.icvBack))) && (t.s.bgColor = {
rgb: a
});
}
}(0, t, r);
s = e;
B = Bt(e);
if (g.s) {
e.r < g.s.r && (g.s.r = e.r);
e.c < g.s.c && (g.s.c = e.c);
}
if (g.e) {
e.r + 1 > g.e.r && (g.e.r = e.r + 1);
e.c + 1 > g.e.c && (g.e.c = e.c + 1);
}
if (r.cellFormula && t.f) for (var n = 0; n < C.length; ++n) if (!(C[n][0].s.c > e.c || C[n][0].s.r > e.r || C[n][0].e.c < e.c || C[n][0].e.r < e.r)) {
t.F = Ct(C[n][0]);
C[n][0].s.c != e.c && delete t.f;
C[n][0].s.r != e.r && delete t.f;
t.f && (t.f = "" + sh(C[n][1], 0, e, M, R));
break;
}
if (r.sheetRows && s.r >= r.sheetRows) _ = !1; else if (r.dense) {
d[e.r] || (d[e.r] = []);
d[e.r][e.c] = t;
} else d[B] = t;
}
}, R = {
enc: !1,
sbcch: 0,
snames: [],
sharedf: w,
arrayf: C,
rrtabid: [],
lastuser: "",
biff: 8,
codepage: 0,
winlocked: 0,
cellStyles: !!t && !!t.cellStyles,
WTF: !!t && !!t.wtf
};
t.password && (R.password = t.password);
var D = [], O = [], F = [], P = [], N = !1, M = [];
M.SheetNames = R.snames;
M.sharedf = R.sharedf;
M.arrayf = R.arrayf;
M.names = [];
M.XTI = [];
var L, U = "", H = 0, W = 0, V = [], z = [];
R.codepage = 1200;
n(1200);
for (;e.l < e.length - 1; ) {
var X = e.l, G = e.read_shift(2);
if (0 === G && "EOF" === U) break;
var j = e.l === e.length ? 0 : e.read_shift(2), K = Zu[G];
if (K && K.f) {
if (t.bookSheets && "BoundSheet8" === U && "BoundSheet8" !== K.n) break;
U = K.n;
if (2 === K.r || 12 == K.r) {
var Y = e.read_shift(2);
j -= 2;
if (!R.enc && Y !== G) throw "rt mismatch";
if (12 == K.r) {
e.l += 10;
j -= 10;
}
}
var $;
$ = "EOF" === K.n ? K.f(e, j, R) : zu(K, e, j, R);
var Z = K.n;
switch (Z) {
case "Date1904":
r.opts.Date1904 = x.WBProps.date1904 = $;
break;

case "WriteProtect":
r.opts.WriteProtect = !0;
break;

case "FilePass":
R.enc || (e.l = 0);
R.enc = $;
R.WTF && console.error($);
if (!t.password) throw new Error("File is password-protected");
if (null == $.valid) throw new Error("Encryption scheme unsupported");
if (!$.valid) throw new Error("Password is incorrect");
break;

case "WriteAccess":
R.lastuser = $;
break;

case "FileSharing":
break;

case "CodePage":
21010 === $ ? $ = 1200 : 32769 === $ && ($ = 1252);
R.codepage = $;
n($);
break;

case "RRTabId":
R.rrtabid = $;
break;

case "WinProtect":
R.winlocked = $;
break;

case "Template":
break;

case "RefreshAll":
r.opts.RefreshAll = $;
break;

case "BookBool":
case "UsesELFs":
case "MTRSettings":
break;

case "CalcCount":
r.opts.CalcCount = $;
break;

case "CalcDelta":
r.opts.CalcDelta = $;
break;

case "CalcIter":
r.opts.CalcIter = $;
break;

case "CalcMode":
r.opts.CalcMode = $;
break;

case "CalcPrecision":
r.opts.CalcPrecision = $;
break;

case "CalcSaveRecalc":
r.opts.CalcSaveRecalc = $;
break;

case "CalcRefMode":
R.CalcRefMode = $;
break;

case "Uncalced":
break;

case "ForceFullCalculation":
r.opts.FullCalc = $;
break;

case "WsBool":
break;

case "XF":
T.push($);
break;

case "ExtSST":
case "BookExt":
case "RichTextStream":
case "BkHim":
break;

case "SupBook":
M.push([ $ ]);
M[M.length - 1].XTI = [];
break;

case "ExternName":
M[M.length - 1].push($);
break;

case "Index":
break;

case "Lbl":
L = {
Name: $.Name,
Ref: sh($.rgce, 0, null, M, R)
};
$.itab > 0 && (L.Sheet = $.itab - 1);
M.names.push(L);
M[0] || (M[0] = []);
M[M.length - 1].push($);
"_xlnm._FilterDatabase" == $.Name && $.itab > 0 && $.rgce && $.rgce[0] && $.rgce[0][0] && "PtgArea3d" == $.rgce[0][0][0] && (z[$.itab - 1] = {
ref: Ct($.rgce[0][0][1][2])
});
break;

case "ExternSheet":
if (0 == M.length) {
M[0] = [];
M[0].XTI = [];
}
M[M.length - 1].XTI = M[M.length - 1].XTI.concat($);
M.XTI = M.XTI.concat($);
break;

case "NameCmt":
if (R.biff < 8) break;
null != L && (L.Comment = $[1]);
break;

case "Protect":
d["!protect"] = $;
break;

case "Password":
0 !== $ && R.WTF && console.error("Password verifier: " + $);
break;

case "Prot4Rev":
case "Prot4RevPass":
break;

case "BoundSheet8":
p[$.pos] = $;
R.snames.push($.name);
break;

case "EOF":
if (--H) break;
if (g.e) {
if (g.e.r > 0 && g.e.c > 0) {
g.e.r--;
g.e.c--;
d["!ref"] = Ct(g);
g.e.r++;
g.e.c++;
}
D.length > 0 && (d["!merges"] = D);
O.length > 0 && (d["!objects"] = O);
F.length > 0 && (d["!cols"] = F);
P.length > 0 && (d["!rows"] = P);
x.Sheets.push(A);
}
"" === E ? S = d : a[E] = d;
d = t.dense ? [] : {};
break;

case "BOF":
8 !== R.biff || (9 === G ? R.biff = 2 : 521 === G ? R.biff = 3 : 1033 === G ? R.biff = 4 : 1280 === $.BIFFVer ? R.biff = 5 : 1536 === $.BIFFVer ? R.biff = 8 : 2 === $.BIFFVer ? R.biff = 2 : 7 === $.BIFFVer && (R.biff = 2));
if (H++) break;
_ = !0;
d = t.dense ? [] : {};
if (R.biff < 5) {
"" === E && (E = "Sheet1");
g = {
s: {
r: 0,
c: 0
},
e: {
r: 0,
c: 0
}
};
var Q = {
pos: e.l - j,
name: E
};
p[Q.pos] = Q;
R.snames.push(E);
} else E = (p[X] || {
name: ""
}).name;
32 == $.dt && (d["!type"] = "chart");
D = [];
O = [];
C = [];
R.arrayf = C;
F = [];
P = [];
0;
N = !1;
A = {
Hidden: (p[X] || {
hs: 0
}).hs,
name: E
};
break;

case "Number":
case "BIFF2NUM":
case "BIFF2INT":
"chart" == d["!type"] && (t.dense ? (d[$.r] || [])[$.c] : d[Bt({
c: $.c,
r: $.r
})]) && ++$.c;
h = {
ixfe: $.ixfe,
XF: T[$.ixfe] || {},
v: $.val,
t: "n"
};
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y({
c: $.c,
r: $.r
}, h, t);
break;

case "BoolErr":
h = {
ixfe: $.ixfe,
XF: T[$.ixfe],
v: $.val,
t: $.t
};
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y({
c: $.c,
r: $.r
}, h, t);
break;

case "RK":
h = {
ixfe: $.ixfe,
XF: T[$.ixfe],
v: $.rknum,
t: "n"
};
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y({
c: $.c,
r: $.r
}, h, t);
break;

case "MulRk":
for (var q = $.c; q <= $.C; ++q) {
var J = $.rkrec[q - $.c][0];
h = {
ixfe: J,
XF: T[J],
v: $.rkrec[q - $.c][1],
t: "n"
};
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y({
c: q,
r: $.r
}, h, t);
}
break;

case "Formula":
if ("String" == $.val) {
b = $;
break;
}
(h = Gu($.val, $.cell.ixfe, $.tt)).XF = T[h.ixfe];
if (t.cellFormula) {
var ee = $.formula;
if (ee && ee[0] && ee[0][0] && "PtgExp" == ee[0][0][0]) {
var te = ee[0][0][1][0], re = ee[0][0][1][1], ne = Bt({
r: te,
c: re
});
w[ne] ? h.f = "" + sh($.formula, 0, $.cell, M, R) : h.F = ((t.dense ? (d[te] || [])[re] : d[ne]) || {}).F;
} else h.f = "" + sh($.formula, 0, $.cell, M, R);
}
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y($.cell, h, t);
b = $;
break;

case "String":
if (!b) throw new Error("String record expects Formula");
b.val = $;
(h = Gu($, b.cell.ixfe, "s")).XF = T[h.ixfe];
t.cellFormula && (h.f = "" + sh(b.formula, 0, b.cell, M, R));
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y(b.cell, h, t);
b = null;
break;

case "Array":
C.push($);
var ae = Bt($[0].s);
i = t.dense ? (d[$[0].s.r] || [])[$[0].s.c] : d[ae];
if (t.cellFormula && i) {
if (!b) break;
if (!ae || !i) break;
i.f = "" + sh($[1], 0, $[0], M, R);
i.F = Ct($[0]);
}
break;

case "ShrFmla":
if (!_) break;
if (!t.cellFormula) break;
if (B) {
if (!b) break;
w[Bt(b.cell)] = $[0];
((i = t.dense ? (d[b.cell.r] || [])[b.cell.c] : d[Bt(b.cell)]) || {}).f = "" + sh($[0], 0, s, M, R);
}
break;

case "LabelSst":
(h = Gu(v[$.isst].t, $.ixfe, "s")).XF = T[h.ixfe];
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y({
c: $.c,
r: $.r
}, h, t);
break;

case "Blank":
if (t.sheetStubs) {
h = {
ixfe: $.ixfe,
XF: T[$.ixfe],
t: "z"
};
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y({
c: $.c,
r: $.r
}, h, t);
}
break;

case "MulBlank":
if (t.sheetStubs) for (var se = $.c; se <= $.C; ++se) {
var ie = $.ixfe[se - $.c];
h = {
ixfe: ie,
XF: T[ie],
t: "z"
};
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y({
c: se,
r: $.r
}, h, t);
}
break;

case "RString":
case "Label":
case "BIFF2STR":
(h = Gu($.val, $.ixfe, "s")).XF = T[h.ixfe];
W > 0 && (h.z = V[h.ixfe >> 8 & 31]);
Xu(h, t, r.opts.Date1904);
y({
c: $.c,
r: $.r
}, h, t);
break;

case "Dimensions":
1 === H && (g = $);
break;

case "SST":
v = $;
break;

case "Format":
m.load($[1], $[0]);
break;

case "BIFF2FORMAT":
V[W++] = $;
for (var oe = 0; oe < W + 163 && m._table[oe] != $; ++oe) ;
oe >= 163 && m.load($, W + 163);
break;

case "MergeCells":
D = D.concat($);
break;

case "Obj":
O[$.cmo[0]] = R.lastobj = $;
break;

case "TxO":
R.lastobj.TxO = $;
break;

case "ImData":
R.lastobj.ImData = $;
break;

case "HLink":
for (c = $[0].s.r; c <= $[0].e.r; ++c) for (l = $[0].s.c; l <= $[0].e.c; ++l) (i = t.dense ? (d[c] || [])[l] : d[Bt({
c: l,
r: c
})]) && (i.l = $[1]);
break;

case "HLinkTooltip":
for (c = $[0].s.r; c <= $[0].e.r; ++c) for (l = $[0].s.c; l <= $[0].e.c; ++l) (i = t.dense ? (d[c] || [])[l] : d[Bt({
c: l,
r: c
})]) && (i.l.Tooltip = $[1]);
break;

case "Note":
if (R.biff <= 5 && R.biff >= 2) break;
i = t.dense ? (d[$[0].r] || [])[$[0].c] : d[Bt($[0])];
var fe = O[$[2]];
if (!i) break;
i.c || (i.c = []);
f = {
a: $[1],
t: fe.TxO.t
};
i.c.push(f);
break;

default:
switch (K.n) {
case "ClrtClient":
break;

case "XFExt":
Rc(T[$.ixfe], $.ext);
break;

case "DefColWidth":
$;
break;

case "DefaultRowHeight":
$[1];
break;

case "ColInfo":
if (!R.cellStyles) break;
for (;$.e >= $.s; ) {
F[$.e--] = {
width: $.w / 256
};
if (!N) {
N = !0;
rc($.w / 256);
}
nc(F[$.e + 1]);
}
break;

case "Row":
var le = {};
if ($.hidden) {
P[$.r] = le;
le.hidden = !0;
}
if ($.hpt) {
P[$.r] = le;
le.hpt = $.hpt;
le.hpx = ic($.hpt);
}
break;

case "LeftMargin":
case "RightMargin":
case "TopMargin":
case "BottomMargin":
d["!margins"] || wh(d["!margins"] = {});
d["!margins"][Z.slice(0, -6).toLowerCase()] = $;
break;

case "Setup":
d["!margins"] || wh(d["!margins"] = {});
d["!margins"].header = $.header;
d["!margins"].footer = $.footer;
break;

case "Header":
case "Footer":
case "HCenter":
case "VCenter":
case "Pls":
case "GCW":
case "LHRecord":
case "DBCell":
case "EntExU2":
case "SxView":
case "Sxvd":
case "SXVI":
case "SXVDEx":
case "SxIvd":
case "SXDI":
case "SXLI":
case "SXEx":
case "QsiSXTag":
case "Selection":
case "Feat":
break;

case "FeatHdr":
case "FeatHdr11":
break;

case "Feature11":
case "Feature12":
case "List12":
break;

case "Country":
u = $;
break;

case "RecalcId":
case "DxGCol":
break;

case "Fbi":
case "Fbi2":
case "GelFrame":
case "Font":
case "XFCRC":
case "Style":
case "StyleExt":
break;

case "Palette":
k = $;
break;

case "Theme":
case "ScenarioProtect":
case "ObjProtect":
case "CondFmt12":
case "Table":
case "TableStyles":
case "TableStyle":
case "TableStyleElement":
case "SXStreamID":
case "SXVS":
case "DConRef":
case "SXAddl":
case "DConBin":
case "DConName":
case "SXPI":
case "SxFormat":
case "SxSelect":
case "SxRule":
case "SxFilt":
case "SxItm":
case "SxDXF":
case "ScenMan":
case "DCon":
case "CellWatch":
case "PrintRowCol":
case "PrintGrid":
case "PrintSize":
case "XCT":
case "CRN":
case "Scl":
case "SheetExt":
case "SheetExtOptional":
case "ObNoMacros":
case "ObProj":
case "CodeName":
case "GUIDTypeLib":
case "WOpt":
case "PhoneticInfo":
case "OleObjectSize":
break;

case "DXF":
case "DXFN":
case "DXFN12":
case "DXFN12List":
case "DXFN12NoCB":
break;

case "Dv":
case "DVal":
break;

case "BRAI":
case "Series":
case "SeriesText":
case "DConn":
case "DbOrParamQry":
case "DBQueryExt":
case "IFmtRecord":
break;

case "CondFmt":
case "CF":
case "CF12":
case "CFEx":
case "Excel9File":
case "Units":
break;

case "InterfaceHdr":
case "Mms":
case "InterfaceEnd":
case "DSF":
case "BuiltInFnGroupCount":
break;

case "Window1":
case "Window2":
case "HideObj":
case "GridSet":
case "Guts":
case "UserBView":
case "UserSViewBegin":
case "UserSViewEnd":
case "Pane":
break;

default:
switch (K.n) {
case "Dat":
case "Begin":
case "End":
case "StartBlock":
case "EndBlock":
case "Frame":
case "Area":
case "Axis":
case "AxisLine":
case "Tick":
break;

case "AxesUsed":
case "CrtLayout12":
case "CrtLayout12A":
case "CrtLink":
case "CrtLine":
case "CrtMlFrt":
case "CrtMlFrtContinue":
break;

case "LineFormat":
case "AreaFormat":
case "Chart":
case "Chart3d":
case "Chart3DBarShape":
case "ChartFormat":
case "ChartFrtInfo":
break;

case "PlotArea":
case "PlotGrowth":
break;

case "SeriesList":
case "SerParent":
case "SerAuxTrend":
break;

case "DataFormat":
case "SerToCrt":
case "FontX":
break;

case "CatSerRange":
case "AxcExt":
case "SerFmt":
case "ShtProps":
break;

case "DefaultText":
case "Text":
case "CatLab":
case "DataLabExtContents":
break;

case "Legend":
case "LegendException":
break;

case "Pie":
case "Scatter":
break;

case "PieFormat":
case "MarkerFormat":
break;

case "StartObject":
case "EndObject":
break;

case "AlRuns":
case "ObjectLink":
case "SIIndex":
break;

case "AttachedLabel":
case "YMult":
break;

case "Line":
case "Bar":
case "Surf":
case "AxisParent":
case "Pos":
case "ValueRange":
case "SXViewEx9":
case "SXViewLink":
case "PivotChartBits":
case "SBaseRef":
case "TextPropsStream":
case "LnExt":
case "MkrExt":
case "CrtCoopt":
break;

case "Qsi":
case "Qsif":
case "Qsir":
case "QsiSXTag":
case "TxtQry":
case "FilterMode":
break;

case "AutoFilter":
case "AutoFilterInfo":
case "AutoFilter12":
case "DropDownObjIds":
case "Sort":
case "SortData":
case "ShapePropsStream":
break;

case "MsoDrawing":
case "MsoDrawingGroup":
case "MsoDrawingSelection":
break;

case "WebPub":
case "AutoWebPub":
break;

case "HeaderFooter":
case "HFPicture":
case "PLV":
case "HorizontalPageBreaks":
case "VerticalPageBreaks":
break;

case "Backup":
case "CompressPictures":
case "Compat12":
break;

case "Continue":
case "ContinueFrt12":
break;

case "FrtFontList":
case "FrtWrapper":
break;

default:
switch (K.n) {
case "ExternCount":
break;

case "TabIdConf":
case "Radar":
case "RadarArea":
case "DropBar":
case "Intl":
case "CoordList":
case "SerAuxErrBar":
break;

case "BIFF2FONTCLR":
case "BIFF2FMTCNT":
case "BIFF2FONTXTRA":
break;

case "BIFF2XF":
case "BIFF3XF":
case "BIFF4XF":
break;

case "BIFF4FMTCNT":
case "BIFF2ROW":
case "BIFF2WINDOW2":
break;

case "SCENARIO":
case "DConBin":
case "PicF":
case "DataLabExt":
case "Lel":
case "BopPop":
case "BopPopCustom":
case "RealTimeData":
case "Name":
break;

default:
if (t.WTF) throw "Unrecognized Record " + K.n;
}
}
}
}
} else e.l += j;
}
var ce = Object.keys(p).sort(function(e, t) {
return Number(e) - Number(t);
}).map(function(e) {
return p[e].name;
});
ce.slice();
r.Directory = ce;
r.SheetNames = ce;
t.bookSheets || (r.Sheets = a);
r.Sheets && z.forEach(function(e, t) {
r.Sheets[r.SheetNames[t]]["!autofilter"] = e;
});
r.Preamble = S;
r.Strings = v;
r.SSF = m.get_table();
R.enc && (r.Encryption = R.enc);
r.Metadata = {};
void 0 !== u && (r.Metadata.Country = u);
M.names.length > 0 && (x.Names = M.names);
r.Workbook = x;
return r;
}
function Ku(e, t) {
t || (t = {});
bd(t);
r();
var n, a, s;
if (e.FullPaths) {
n = e.find("!CompObj");
e.find("!SummaryInformation");
a = e.find("/Workbook");
} else {
tt(e, 0);
a = {
content: e
};
}
a || (a = e.find("/Book"));
n && function(e) {
var t, r = {}, n = e.content, a = 28;
t = Ie(n, a);
a += 4 + je(n, a);
r.UserType = t;
t = je(n, a);
a += 4;
switch (t) {
case 0:
break;

case 4294967295:
case 4294967294:
a += 4;
break;

default:
if (t > 400) throw new Error("Unsupported Clipboard: " + t.toString(16));
a += t;
}
a += 0 === (t = Ie(n, a)).length ? 0 : 5 + t.length;
r.Reserved1 = t;
if (1907550708 !== (t = je(n, a))) return r;
throw new Error("Unsupported Unicode Extension");
}(n);
if (t.bookProps && !t.bookSheets) s = {}; else if (a) s = ju(a.content, t, a.find); else if (e.find("PerfectOffice_MAIN")) s = wl.to_workbook(e.find("PerfectOffice_MAIN").content, t); else {
if (!e.find("NativeContent_MAIN")) throw new Error("Cannot find Workbook stream");
s = wl.to_workbook(e.find("NativeContent_MAIN").content, t);
}
e.FullPaths && function(e) {
var t = e.find("!DocumentSummaryInformation");
if (t) try {
e.DocSummary = $r(t, sr);
} catch (e) {}
var r = e.find("!SummaryInformation");
if (r) try {
e.Summary = $r(r, ir);
} catch (e) {}
}(e);
var i = {};
for (var o in e.Summary) i[o] = e.Summary[o];
for (o in e.DocSummary) i[o] = e.DocSummary[o];
s.Props = s.Custprops = i;
t.bookFiles && (s.cfb = e);
return s;
}
var Yu = {
0: {
n: "BrtRowHdr",
f: function(e, t) {
var r = {}, n = e.l + t;
r.r = e.read_shift(4);
e.l += 4;
var a = e.read_shift(2);
e.l += 1;
var s = e.read_shift(1);
e.l = n;
16 & s && (r.hidden = !0);
32 & s && (r.hpt = a / 20);
return r;
}
},
1: {
n: "BrtCellBlank",
f: function(e, t) {
return [ Nt(e) ];
}
},
2: {
n: "BrtCellRk",
f: function(e, t) {
return [ Nt(e), Gt(e), "n" ];
}
},
3: {
n: "BrtCellError",
f: function(e, t) {
return [ Nt(e), e.read_shift(1), "e" ];
}
},
4: {
n: "BrtCellBool",
f: function(e, t) {
return [ Nt(e), e.read_shift(1), "b" ];
}
},
5: {
n: "BrtCellReal",
f: function(e, t) {
return [ Nt(e), $t(e), "n" ];
}
},
6: {
n: "BrtCellSt",
f: function(e, t) {
return [ Nt(e), yt(e), "str" ];
}
},
7: {
n: "BrtCellIsst",
f: function(e, t) {
return [ Nt(e), e.read_shift(4), "s" ];
}
},
8: {
n: "BrtFmlaString",
f: function(e, t, r) {
var n = e.l + t, a = Nt(e);
a.r = r["!row"];
var s = [ a, yt(e), "str" ];
if (r.cellFormula) {
e.l += 2;
var i = fh(e, n - e.l, r);
s[3] = sh(i, 0, a, r.supbooks, r);
} else e.l = n;
return s;
}
},
9: {
n: "BrtFmlaNum",
f: function(e, t, r) {
var n = e.l + t, a = Nt(e);
a.r = r["!row"];
var s = [ a, $t(e), "n" ];
if (r.cellFormula) {
e.l += 2;
var i = fh(e, n - e.l, r);
s[3] = sh(i, 0, a, r.supbooks, r);
} else e.l = n;
return s;
}
},
10: {
n: "BrtFmlaBool",
f: function(e, t, r) {
var n = e.l + t, a = Nt(e);
a.r = r["!row"];
var s = [ a, e.read_shift(1), "b" ];
if (r.cellFormula) {
e.l += 2;
var i = fh(e, n - e.l, r);
s[3] = sh(i, 0, a, r.supbooks, r);
} else e.l = n;
return s;
}
},
11: {
n: "BrtFmlaError",
f: function(e, t, r) {
var n = e.l + t, a = Nt(e);
a.r = r["!row"];
var s = [ a, e.read_shift(1), "e" ];
if (r.cellFormula) {
e.l += 2;
var i = fh(e, n - e.l, r);
s[3] = sh(i, 0, a, r.supbooks, r);
} else e.l = n;
return s;
}
},
16: {
n: "BrtFRTArchID$",
f: function(e, t) {
var r = {};
e.read_shift(4);
r.ArchID = e.read_shift(4);
e.l += t - 8;
return r;
}
},
19: {
n: "BrtSSTItem",
f: Ot
},
20: {
n: "BrtPCDIMissing",
f: rt
},
21: {
n: "BrtPCDINumber",
f: rt
},
22: {
n: "BrtPCDIBoolean",
f: rt
},
23: {
n: "BrtPCDIError",
f: rt
},
24: {
n: "BrtPCDIString",
f: rt
},
25: {
n: "BrtPCDIDatetime",
f: rt
},
26: {
n: "BrtPCDIIndex",
f: rt
},
27: {
n: "BrtPCDIAMissing",
f: rt
},
28: {
n: "BrtPCDIANumber",
f: rt
},
29: {
n: "BrtPCDIABoolean",
f: rt
},
30: {
n: "BrtPCDIAError",
f: rt
},
31: {
n: "BrtPCDIAString",
f: rt
},
32: {
n: "BrtPCDIADatetime",
f: rt
},
33: {
n: "BrtPCRRecord",
f: rt
},
34: {
n: "BrtPCRRecordDt",
f: rt
},
35: {
n: "BrtFRTBegin",
f: rt
},
36: {
n: "BrtFRTEnd",
f: rt
},
37: {
n: "BrtACBegin",
f: rt
},
38: {
n: "BrtACEnd",
f: rt
},
39: {
n: "BrtName",
f: function(e, t, r) {
var n = e.l + t, a = (e.read_shift(4), e.read_shift(1), e.read_shift(4)), s = Vt(e), i = lh(e, 0, r), o = Ht(e);
e.l = n;
var f = {
Name: s,
Ptg: i,
Comment: o
};
a < 268435455 && (f.Sheet = a);
return f;
}
},
40: {
n: "BrtIndexRowBlock",
f: rt
},
42: {
n: "BrtIndexBlock",
f: rt
},
43: {
n: "BrtFont",
f: function(e, t, r) {
var n = {};
n.sz = e.read_shift(2) / 20;
var a = function(e, t, r) {
var n = e.read_shift(1);
e.l++;
return {
fItalic: 2 & n,
fStrikeout: 8 & n,
fOutline: 16 & n,
fShadow: 32 & n,
fCondense: 64 & n,
fExtend: 128 & n
};
}(e);
a.fCondense && (n.condense = 1);
a.fExtend && (n.extend = 1);
a.fShadow && (n.shadow = 1);
a.fOutline && (n.outline = 1);
a.fStrikeout && (n.strike = 1);
a.fItalic && (n.italic = 1);
700 === e.read_shift(2) && (n.bold = 1);
switch (e.read_shift(2)) {
case 1:
n.vertAlign = "superscript";
break;

case 2:
n.vertAlign = "subscript";
}
var s = e.read_shift(1);
0 != s && (n.underline = s);
var i = e.read_shift(1);
i > 0 && (n.family = i);
var o = e.read_shift(1);
o > 0 && (n.charset = o);
e.l++;
n.color = function(e, t) {
var r = {}, n = e.read_shift(1), a = n >>> 1, s = e.read_shift(1), i = e.read_shift(2, "i"), o = e.read_shift(1), f = e.read_shift(1), l = e.read_shift(1);
e.read_shift(1);
switch (a) {
case 0:
r.auto = 1;
break;

case 1:
r.index = s;
var c = cr[s];
c && (r.rgb = c[0].toString(16) + c[1].toString(16) + c[2].toString(16));
break;

case 2:
r.rgb = o.toString(16) + f.toString(16) + l.toString(16);
break;

case 3:
r.theme = s;
}
0 != i && (r.tint = i > 0 ? i / 32767 : i / 32768);
return r;
}(e);
switch (e.read_shift(1)) {
case 1:
n.scheme = "major";
break;

case 2:
n.scheme = "minor";
}
n.name = yt(e);
return n;
}
},
44: {
n: "BrtFmt",
f: function(e, t) {
return [ e.read_shift(2), yt(e) ];
}
},
45: {
n: "BrtFill",
f: rt
},
46: {
n: "BrtBorder",
f: rt
},
47: {
n: "BrtXF",
f: function(e, t) {
var r = e.read_shift(2), n = e.read_shift(2);
rt(e, t - 4);
return {
ixfe: r,
ifmt: n
};
}
},
48: {
n: "BrtStyle",
f: rt
},
49: {
n: "BrtCellMeta",
f: rt
},
50: {
n: "BrtValueMeta",
f: rt
},
51: {
n: "BrtMdb",
f: rt
},
52: {
n: "BrtBeginFmd",
f: rt
},
53: {
n: "BrtEndFmd",
f: rt
},
54: {
n: "BrtBeginMdx",
f: rt
},
55: {
n: "BrtEndMdx",
f: rt
},
56: {
n: "BrtBeginMdxTuple",
f: rt
},
57: {
n: "BrtEndMdxTuple",
f: rt
},
58: {
n: "BrtMdxMbrIstr",
f: rt
},
59: {
n: "BrtStr",
f: rt
},
60: {
n: "BrtColInfo",
f: Pn
},
62: {
n: "BrtCellRString",
f: rt
},
63: {
n: "BrtCalcChainItem$",
f: function(e, t) {
var r = {};
r.i = e.read_shift(4);
var n = {};
n.r = e.read_shift(4);
n.c = e.read_shift(4);
r.r = Bt(n);
var a = e.read_shift(1);
2 & a && (r.l = "1");
8 & a && (r.a = "1");
return r;
}
},
64: {
n: "BrtDVal",
f: rt
},
65: {
n: "BrtSxvcellNum",
f: rt
},
66: {
n: "BrtSxvcellStr",
f: rt
},
67: {
n: "BrtSxvcellBool",
f: rt
},
68: {
n: "BrtSxvcellErr",
f: rt
},
69: {
n: "BrtSxvcellDate",
f: rt
},
70: {
n: "BrtSxvcellNil",
f: rt
},
128: {
n: "BrtFileVersion",
f: rt
},
129: {
n: "BrtBeginSheet",
f: rt
},
130: {
n: "BrtEndSheet",
f: rt
},
131: {
n: "BrtBeginBook",
f: rt,
p: 0
},
132: {
n: "BrtEndBook",
f: rt
},
133: {
n: "BrtBeginWsViews",
f: rt
},
134: {
n: "BrtEndWsViews",
f: rt
},
135: {
n: "BrtBeginBookViews",
f: rt
},
136: {
n: "BrtEndBookViews",
f: rt
},
137: {
n: "BrtBeginWsView",
f: rt
},
138: {
n: "BrtEndWsView",
f: rt
},
139: {
n: "BrtBeginCsViews",
f: rt
},
140: {
n: "BrtEndCsViews",
f: rt
},
141: {
n: "BrtBeginCsView",
f: rt
},
142: {
n: "BrtEndCsView",
f: rt
},
143: {
n: "BrtBeginBundleShs",
f: rt
},
144: {
n: "BrtEndBundleShs",
f: rt
},
145: {
n: "BrtBeginSheetData",
f: rt
},
146: {
n: "BrtEndSheetData",
f: rt
},
147: {
n: "BrtWsProp",
f: function(e, t) {
var r = {};
e.l += 19;
r.name = Lt(e, t - 19);
return r;
}
},
148: {
n: "BrtWsDim",
f: Lh,
p: 16
},
151: {
n: "BrtPane",
f: rt
},
152: {
n: "BrtSel",
f: rt
},
153: {
n: "BrtWbProp",
f: function(e, t) {
var r = {}, n = e.read_shift(4);
r.defaultThemeVersion = e.read_shift(4);
var a = t > 8 ? yt(e) : "";
a.length > 0 && (r.codeName = a);
r.autoCompressPictures = !!(65536 & n);
r.backupFile = !!(64 & n);
r.checkCompatibility = !!(4096 & n);
r.date1904 = !!(1 & n);
r.filterPrivacy = !!(8 & n);
r.hidePivotFieldList = !!(1024 & n);
r.promptedSolutions = !!(16 & n);
r.publishItems = !!(2048 & n);
r.refreshAllConnections = !!(262144 & n);
r.saveExternalLinkValues = !!(128 & n);
r.showBorderUnselectedTables = !!(4 & n);
r.showInkAnnotation = !!(32 & n);
r.showObjects = [ "all", "placeholders", "none" ][n >> 13 & 3];
r.showPivotChartFilter = !!(32768 & n);
r.updateLinks = [ "userSet", "never", "always" ][n >> 8 & 3];
return r;
}
},
154: {
n: "BrtWbFactoid",
f: rt
},
155: {
n: "BrtFileRecover",
f: rt
},
156: {
n: "BrtBundleSh",
f: function(e, t) {
var r = {};
r.Hidden = e.read_shift(4);
r.iTabID = e.read_shift(4);
r.strRelID = zt(e, t - 8);
r.name = yt(e);
return r;
}
},
157: {
n: "BrtCalcProp",
f: rt
},
158: {
n: "BrtBookView",
f: rt
},
159: {
n: "BrtBeginSst",
f: function(e, t) {
return [ e.read_shift(4), e.read_shift(4) ];
}
},
160: {
n: "BrtEndSst",
f: rt
},
161: {
n: "BrtBeginAFilter",
f: Kt
},
162: {
n: "BrtEndAFilter",
f: rt
},
163: {
n: "BrtBeginFilterColumn",
f: rt
},
164: {
n: "BrtEndFilterColumn",
f: rt
},
165: {
n: "BrtBeginFilters",
f: rt
},
166: {
n: "BrtEndFilters",
f: rt
},
167: {
n: "BrtFilter",
f: rt
},
168: {
n: "BrtColorFilter",
f: rt
},
169: {
n: "BrtIconFilter",
f: rt
},
170: {
n: "BrtTop10Filter",
f: rt
},
171: {
n: "BrtDynamicFilter",
f: rt
},
172: {
n: "BrtBeginCustomFilters",
f: rt
},
173: {
n: "BrtEndCustomFilters",
f: rt
},
174: {
n: "BrtCustomFilter",
f: rt
},
175: {
n: "BrtAFilterDateGroupItem",
f: rt
},
176: {
n: "BrtMergeCell",
f: Wh
},
177: {
n: "BrtBeginMergeCells",
f: rt
},
178: {
n: "BrtEndMergeCells",
f: rt
},
179: {
n: "BrtBeginPivotCacheDef",
f: rt
},
180: {
n: "BrtEndPivotCacheDef",
f: rt
},
181: {
n: "BrtBeginPCDFields",
f: rt
},
182: {
n: "BrtEndPCDFields",
f: rt
},
183: {
n: "BrtBeginPCDField",
f: rt
},
184: {
n: "BrtEndPCDField",
f: rt
},
185: {
n: "BrtBeginPCDSource",
f: rt
},
186: {
n: "BrtEndPCDSource",
f: rt
},
187: {
n: "BrtBeginPCDSRange",
f: rt
},
188: {
n: "BrtEndPCDSRange",
f: rt
},
189: {
n: "BrtBeginPCDFAtbl",
f: rt
},
190: {
n: "BrtEndPCDFAtbl",
f: rt
},
191: {
n: "BrtBeginPCDIRun",
f: rt
},
192: {
n: "BrtEndPCDIRun",
f: rt
},
193: {
n: "BrtBeginPivotCacheRecords",
f: rt
},
194: {
n: "BrtEndPivotCacheRecords",
f: rt
},
195: {
n: "BrtBeginPCDHierarchies",
f: rt
},
196: {
n: "BrtEndPCDHierarchies",
f: rt
},
197: {
n: "BrtBeginPCDHierarchy",
f: rt
},
198: {
n: "BrtEndPCDHierarchy",
f: rt
},
199: {
n: "BrtBeginPCDHFieldsUsage",
f: rt
},
200: {
n: "BrtEndPCDHFieldsUsage",
f: rt
},
201: {
n: "BrtBeginExtConnection",
f: rt
},
202: {
n: "BrtEndExtConnection",
f: rt
},
203: {
n: "BrtBeginECDbProps",
f: rt
},
204: {
n: "BrtEndECDbProps",
f: rt
},
205: {
n: "BrtBeginECOlapProps",
f: rt
},
206: {
n: "BrtEndECOlapProps",
f: rt
},
207: {
n: "BrtBeginPCDSConsol",
f: rt
},
208: {
n: "BrtEndPCDSConsol",
f: rt
},
209: {
n: "BrtBeginPCDSCPages",
f: rt
},
210: {
n: "BrtEndPCDSCPages",
f: rt
},
211: {
n: "BrtBeginPCDSCPage",
f: rt
},
212: {
n: "BrtEndPCDSCPage",
f: rt
},
213: {
n: "BrtBeginPCDSCPItem",
f: rt
},
214: {
n: "BrtEndPCDSCPItem",
f: rt
},
215: {
n: "BrtBeginPCDSCSets",
f: rt
},
216: {
n: "BrtEndPCDSCSets",
f: rt
},
217: {
n: "BrtBeginPCDSCSet",
f: rt
},
218: {
n: "BrtEndPCDSCSet",
f: rt
},
219: {
n: "BrtBeginPCDFGroup",
f: rt
},
220: {
n: "BrtEndPCDFGroup",
f: rt
},
221: {
n: "BrtBeginPCDFGItems",
f: rt
},
222: {
n: "BrtEndPCDFGItems",
f: rt
},
223: {
n: "BrtBeginPCDFGRange",
f: rt
},
224: {
n: "BrtEndPCDFGRange",
f: rt
},
225: {
n: "BrtBeginPCDFGDiscrete",
f: rt
},
226: {
n: "BrtEndPCDFGDiscrete",
f: rt
},
227: {
n: "BrtBeginPCDSDTupleCache",
f: rt
},
228: {
n: "BrtEndPCDSDTupleCache",
f: rt
},
229: {
n: "BrtBeginPCDSDTCEntries",
f: rt
},
230: {
n: "BrtEndPCDSDTCEntries",
f: rt
},
231: {
n: "BrtBeginPCDSDTCEMembers",
f: rt
},
232: {
n: "BrtEndPCDSDTCEMembers",
f: rt
},
233: {
n: "BrtBeginPCDSDTCEMember",
f: rt
},
234: {
n: "BrtEndPCDSDTCEMember",
f: rt
},
235: {
n: "BrtBeginPCDSDTCQueries",
f: rt
},
236: {
n: "BrtEndPCDSDTCQueries",
f: rt
},
237: {
n: "BrtBeginPCDSDTCQuery",
f: rt
},
238: {
n: "BrtEndPCDSDTCQuery",
f: rt
},
239: {
n: "BrtBeginPCDSDTCSets",
f: rt
},
240: {
n: "BrtEndPCDSDTCSets",
f: rt
},
241: {
n: "BrtBeginPCDSDTCSet",
f: rt
},
242: {
n: "BrtEndPCDSDTCSet",
f: rt
},
243: {
n: "BrtBeginPCDCalcItems",
f: rt
},
244: {
n: "BrtEndPCDCalcItems",
f: rt
},
245: {
n: "BrtBeginPCDCalcItem",
f: rt
},
246: {
n: "BrtEndPCDCalcItem",
f: rt
},
247: {
n: "BrtBeginPRule",
f: rt
},
248: {
n: "BrtEndPRule",
f: rt
},
249: {
n: "BrtBeginPRFilters",
f: rt
},
250: {
n: "BrtEndPRFilters",
f: rt
},
251: {
n: "BrtBeginPRFilter",
f: rt
},
252: {
n: "BrtEndPRFilter",
f: rt
},
253: {
n: "BrtBeginPNames",
f: rt
},
254: {
n: "BrtEndPNames",
f: rt
},
255: {
n: "BrtBeginPName",
f: rt
},
256: {
n: "BrtEndPName",
f: rt
},
257: {
n: "BrtBeginPNPairs",
f: rt
},
258: {
n: "BrtEndPNPairs",
f: rt
},
259: {
n: "BrtBeginPNPair",
f: rt
},
260: {
n: "BrtEndPNPair",
f: rt
},
261: {
n: "BrtBeginECWebProps",
f: rt
},
262: {
n: "BrtEndECWebProps",
f: rt
},
263: {
n: "BrtBeginEcWpTables",
f: rt
},
264: {
n: "BrtEndECWPTables",
f: rt
},
265: {
n: "BrtBeginECParams",
f: rt
},
266: {
n: "BrtEndECParams",
f: rt
},
267: {
n: "BrtBeginECParam",
f: rt
},
268: {
n: "BrtEndECParam",
f: rt
},
269: {
n: "BrtBeginPCDKPIs",
f: rt
},
270: {
n: "BrtEndPCDKPIs",
f: rt
},
271: {
n: "BrtBeginPCDKPI",
f: rt
},
272: {
n: "BrtEndPCDKPI",
f: rt
},
273: {
n: "BrtBeginDims",
f: rt
},
274: {
n: "BrtEndDims",
f: rt
},
275: {
n: "BrtBeginDim",
f: rt
},
276: {
n: "BrtEndDim",
f: rt
},
277: {
n: "BrtIndexPartEnd",
f: rt
},
278: {
n: "BrtBeginStyleSheet",
f: rt
},
279: {
n: "BrtEndStyleSheet",
f: rt
},
280: {
n: "BrtBeginSXView",
f: rt
},
281: {
n: "BrtEndSXVI",
f: rt
},
282: {
n: "BrtBeginSXVI",
f: rt
},
283: {
n: "BrtBeginSXVIs",
f: rt
},
284: {
n: "BrtEndSXVIs",
f: rt
},
285: {
n: "BrtBeginSXVD",
f: rt
},
286: {
n: "BrtEndSXVD",
f: rt
},
287: {
n: "BrtBeginSXVDs",
f: rt
},
288: {
n: "BrtEndSXVDs",
f: rt
},
289: {
n: "BrtBeginSXPI",
f: rt
},
290: {
n: "BrtEndSXPI",
f: rt
},
291: {
n: "BrtBeginSXPIs",
f: rt
},
292: {
n: "BrtEndSXPIs",
f: rt
},
293: {
n: "BrtBeginSXDI",
f: rt
},
294: {
n: "BrtEndSXDI",
f: rt
},
295: {
n: "BrtBeginSXDIs",
f: rt
},
296: {
n: "BrtEndSXDIs",
f: rt
},
297: {
n: "BrtBeginSXLI",
f: rt
},
298: {
n: "BrtEndSXLI",
f: rt
},
299: {
n: "BrtBeginSXLIRws",
f: rt
},
300: {
n: "BrtEndSXLIRws",
f: rt
},
301: {
n: "BrtBeginSXLICols",
f: rt
},
302: {
n: "BrtEndSXLICols",
f: rt
},
303: {
n: "BrtBeginSXFormat",
f: rt
},
304: {
n: "BrtEndSXFormat",
f: rt
},
305: {
n: "BrtBeginSXFormats",
f: rt
},
306: {
n: "BrtEndSxFormats",
f: rt
},
307: {
n: "BrtBeginSxSelect",
f: rt
},
308: {
n: "BrtEndSxSelect",
f: rt
},
309: {
n: "BrtBeginISXVDRws",
f: rt
},
310: {
n: "BrtEndISXVDRws",
f: rt
},
311: {
n: "BrtBeginISXVDCols",
f: rt
},
312: {
n: "BrtEndISXVDCols",
f: rt
},
313: {
n: "BrtEndSXLocation",
f: rt
},
314: {
n: "BrtBeginSXLocation",
f: rt
},
315: {
n: "BrtEndSXView",
f: rt
},
316: {
n: "BrtBeginSXTHs",
f: rt
},
317: {
n: "BrtEndSXTHs",
f: rt
},
318: {
n: "BrtBeginSXTH",
f: rt
},
319: {
n: "BrtEndSXTH",
f: rt
},
320: {
n: "BrtBeginISXTHRws",
f: rt
},
321: {
n: "BrtEndISXTHRws",
f: rt
},
322: {
n: "BrtBeginISXTHCols",
f: rt
},
323: {
n: "BrtEndISXTHCols",
f: rt
},
324: {
n: "BrtBeginSXTDMPS",
f: rt
},
325: {
n: "BrtEndSXTDMPs",
f: rt
},
326: {
n: "BrtBeginSXTDMP",
f: rt
},
327: {
n: "BrtEndSXTDMP",
f: rt
},
328: {
n: "BrtBeginSXTHItems",
f: rt
},
329: {
n: "BrtEndSXTHItems",
f: rt
},
330: {
n: "BrtBeginSXTHItem",
f: rt
},
331: {
n: "BrtEndSXTHItem",
f: rt
},
332: {
n: "BrtBeginMetadata",
f: rt
},
333: {
n: "BrtEndMetadata",
f: rt
},
334: {
n: "BrtBeginEsmdtinfo",
f: rt
},
335: {
n: "BrtMdtinfo",
f: rt
},
336: {
n: "BrtEndEsmdtinfo",
f: rt
},
337: {
n: "BrtBeginEsmdb",
f: rt
},
338: {
n: "BrtEndEsmdb",
f: rt
},
339: {
n: "BrtBeginEsfmd",
f: rt
},
340: {
n: "BrtEndEsfmd",
f: rt
},
341: {
n: "BrtBeginSingleCells",
f: rt
},
342: {
n: "BrtEndSingleCells",
f: rt
},
343: {
n: "BrtBeginList",
f: rt
},
344: {
n: "BrtEndList",
f: rt
},
345: {
n: "BrtBeginListCols",
f: rt
},
346: {
n: "BrtEndListCols",
f: rt
},
347: {
n: "BrtBeginListCol",
f: rt
},
348: {
n: "BrtEndListCol",
f: rt
},
349: {
n: "BrtBeginListXmlCPr",
f: rt
},
350: {
n: "BrtEndListXmlCPr",
f: rt
},
351: {
n: "BrtListCCFmla",
f: rt
},
352: {
n: "BrtListTrFmla",
f: rt
},
353: {
n: "BrtBeginExternals",
f: rt
},
354: {
n: "BrtEndExternals",
f: rt
},
355: {
n: "BrtSupBookSrc",
f: rt
},
357: {
n: "BrtSupSelf",
f: rt
},
358: {
n: "BrtSupSame",
f: rt
},
359: {
n: "BrtSupTabs",
f: rt
},
360: {
n: "BrtBeginSupBook",
f: rt
},
361: {
n: "BrtPlaceholderName",
f: rt
},
362: {
n: "BrtExternSheet",
f: rt
},
363: {
n: "BrtExternTableStart",
f: rt
},
364: {
n: "BrtExternTableEnd",
f: rt
},
366: {
n: "BrtExternRowHdr",
f: rt
},
367: {
n: "BrtExternCellBlank",
f: rt
},
368: {
n: "BrtExternCellReal",
f: rt
},
369: {
n: "BrtExternCellBool",
f: rt
},
370: {
n: "BrtExternCellError",
f: rt
},
371: {
n: "BrtExternCellString",
f: rt
},
372: {
n: "BrtBeginEsmdx",
f: rt
},
373: {
n: "BrtEndEsmdx",
f: rt
},
374: {
n: "BrtBeginMdxSet",
f: rt
},
375: {
n: "BrtEndMdxSet",
f: rt
},
376: {
n: "BrtBeginMdxMbrProp",
f: rt
},
377: {
n: "BrtEndMdxMbrProp",
f: rt
},
378: {
n: "BrtBeginMdxKPI",
f: rt
},
379: {
n: "BrtEndMdxKPI",
f: rt
},
380: {
n: "BrtBeginEsstr",
f: rt
},
381: {
n: "BrtEndEsstr",
f: rt
},
382: {
n: "BrtBeginPRFItem",
f: rt
},
383: {
n: "BrtEndPRFItem",
f: rt
},
384: {
n: "BrtBeginPivotCacheIDs",
f: rt
},
385: {
n: "BrtEndPivotCacheIDs",
f: rt
},
386: {
n: "BrtBeginPivotCacheID",
f: rt
},
387: {
n: "BrtEndPivotCacheID",
f: rt
},
388: {
n: "BrtBeginISXVIs",
f: rt
},
389: {
n: "BrtEndISXVIs",
f: rt
},
390: {
n: "BrtBeginColInfos",
f: rt
},
391: {
n: "BrtEndColInfos",
f: rt
},
392: {
n: "BrtBeginRwBrk",
f: rt
},
393: {
n: "BrtEndRwBrk",
f: rt
},
394: {
n: "BrtBeginColBrk",
f: rt
},
395: {
n: "BrtEndColBrk",
f: rt
},
396: {
n: "BrtBrk",
f: rt
},
397: {
n: "BrtUserBookView",
f: rt
},
398: {
n: "BrtInfo",
f: rt
},
399: {
n: "BrtCUsr",
f: rt
},
400: {
n: "BrtUsr",
f: rt
},
401: {
n: "BrtBeginUsers",
f: rt
},
403: {
n: "BrtEOF",
f: rt
},
404: {
n: "BrtUCR",
f: rt
},
405: {
n: "BrtRRInsDel",
f: rt
},
406: {
n: "BrtRREndInsDel",
f: rt
},
407: {
n: "BrtRRMove",
f: rt
},
408: {
n: "BrtRREndMove",
f: rt
},
409: {
n: "BrtRRChgCell",
f: rt
},
410: {
n: "BrtRREndChgCell",
f: rt
},
411: {
n: "BrtRRHeader",
f: rt
},
412: {
n: "BrtRRUserView",
f: rt
},
413: {
n: "BrtRRRenSheet",
f: rt
},
414: {
n: "BrtRRInsertSh",
f: rt
},
415: {
n: "BrtRRDefName",
f: rt
},
416: {
n: "BrtRRNote",
f: rt
},
417: {
n: "BrtRRConflict",
f: rt
},
418: {
n: "BrtRRTQSIF",
f: rt
},
419: {
n: "BrtRRFormat",
f: rt
},
420: {
n: "BrtRREndFormat",
f: rt
},
421: {
n: "BrtRRAutoFmt",
f: rt
},
422: {
n: "BrtBeginUserShViews",
f: rt
},
423: {
n: "BrtBeginUserShView",
f: rt
},
424: {
n: "BrtEndUserShView",
f: rt
},
425: {
n: "BrtEndUserShViews",
f: rt
},
426: {
n: "BrtArrFmla",
f: function(e, t, r) {
var n = e.l + t, a = jt(e), s = e.read_shift(1), i = [ a ];
i[2] = s;
if (r.cellFormula) {
var o = oh(e, n - e.l, r);
i[1] = o;
} else e.l = n;
return i;
}
},
427: {
n: "BrtShrFmla",
f: function(e, t, r) {
var n = e.l + t, a = [ Kt(e, 16) ];
if (r.cellFormula) {
var s = ch(e, n - e.l, r);
a[1] = s;
e.l = n;
} else e.l = n;
return a;
}
},
428: {
n: "BrtTable",
f: rt
},
429: {
n: "BrtBeginExtConnections",
f: rt
},
430: {
n: "BrtEndExtConnections",
f: rt
},
431: {
n: "BrtBeginPCDCalcMems",
f: rt
},
432: {
n: "BrtEndPCDCalcMems",
f: rt
},
433: {
n: "BrtBeginPCDCalcMem",
f: rt
},
434: {
n: "BrtEndPCDCalcMem",
f: rt
},
435: {
n: "BrtBeginPCDHGLevels",
f: rt
},
436: {
n: "BrtEndPCDHGLevels",
f: rt
},
437: {
n: "BrtBeginPCDHGLevel",
f: rt
},
438: {
n: "BrtEndPCDHGLevel",
f: rt
},
439: {
n: "BrtBeginPCDHGLGroups",
f: rt
},
440: {
n: "BrtEndPCDHGLGroups",
f: rt
},
441: {
n: "BrtBeginPCDHGLGroup",
f: rt
},
442: {
n: "BrtEndPCDHGLGroup",
f: rt
},
443: {
n: "BrtBeginPCDHGLGMembers",
f: rt
},
444: {
n: "BrtEndPCDHGLGMembers",
f: rt
},
445: {
n: "BrtBeginPCDHGLGMember",
f: rt
},
446: {
n: "BrtEndPCDHGLGMember",
f: rt
},
447: {
n: "BrtBeginQSI",
f: rt
},
448: {
n: "BrtEndQSI",
f: rt
},
449: {
n: "BrtBeginQSIR",
f: rt
},
450: {
n: "BrtEndQSIR",
f: rt
},
451: {
n: "BrtBeginDeletedNames",
f: rt
},
452: {
n: "BrtEndDeletedNames",
f: rt
},
453: {
n: "BrtBeginDeletedName",
f: rt
},
454: {
n: "BrtEndDeletedName",
f: rt
},
455: {
n: "BrtBeginQSIFs",
f: rt
},
456: {
n: "BrtEndQSIFs",
f: rt
},
457: {
n: "BrtBeginQSIF",
f: rt
},
458: {
n: "BrtEndQSIF",
f: rt
},
459: {
n: "BrtBeginAutoSortScope",
f: rt
},
460: {
n: "BrtEndAutoSortScope",
f: rt
},
461: {
n: "BrtBeginConditionalFormatting",
f: rt
},
462: {
n: "BrtEndConditionalFormatting",
f: rt
},
463: {
n: "BrtBeginCFRule",
f: rt
},
464: {
n: "BrtEndCFRule",
f: rt
},
465: {
n: "BrtBeginIconSet",
f: rt
},
466: {
n: "BrtEndIconSet",
f: rt
},
467: {
n: "BrtBeginDatabar",
f: rt
},
468: {
n: "BrtEndDatabar",
f: rt
},
469: {
n: "BrtBeginColorScale",
f: rt
},
470: {
n: "BrtEndColorScale",
f: rt
},
471: {
n: "BrtCFVO",
f: rt
},
472: {
n: "BrtExternValueMeta",
f: rt
},
473: {
n: "BrtBeginColorPalette",
f: rt
},
474: {
n: "BrtEndColorPalette",
f: rt
},
475: {
n: "BrtIndexedColor",
f: rt
},
476: {
n: "BrtMargins",
f: function(e, t, r) {
return {
left: $t(e),
right: $t(e),
top: $t(e),
bottom: $t(e),
header: $t(e),
footer: $t(e)
};
}
},
477: {
n: "BrtPrintOptions",
f: rt
},
478: {
n: "BrtPageSetup",
f: rt
},
479: {
n: "BrtBeginHeaderFooter",
f: rt
},
480: {
n: "BrtEndHeaderFooter",
f: rt
},
481: {
n: "BrtBeginSXCrtFormat",
f: rt
},
482: {
n: "BrtEndSXCrtFormat",
f: rt
},
483: {
n: "BrtBeginSXCrtFormats",
f: rt
},
484: {
n: "BrtEndSXCrtFormats",
f: rt
},
485: {
n: "BrtWsFmtInfo",
f: rt
},
486: {
n: "BrtBeginMgs",
f: rt
},
487: {
n: "BrtEndMGs",
f: rt
},
488: {
n: "BrtBeginMGMaps",
f: rt
},
489: {
n: "BrtEndMGMaps",
f: rt
},
490: {
n: "BrtBeginMG",
f: rt
},
491: {
n: "BrtEndMG",
f: rt
},
492: {
n: "BrtBeginMap",
f: rt
},
493: {
n: "BrtEndMap",
f: rt
},
494: {
n: "BrtHLink",
f: function(e, t, r) {
var n = e.l + t, a = Kt(e, 16), s = Ht(e), i = yt(e), o = yt(e), f = yt(e);
e.l = n;
return {
rfx: a,
relId: s,
loc: i,
Tooltip: o,
display: f
};
}
},
495: {
n: "BrtBeginDCon",
f: rt
},
496: {
n: "BrtEndDCon",
f: rt
},
497: {
n: "BrtBeginDRefs",
f: rt
},
498: {
n: "BrtEndDRefs",
f: rt
},
499: {
n: "BrtDRef",
f: rt
},
500: {
n: "BrtBeginScenMan",
f: rt
},
501: {
n: "BrtEndScenMan",
f: rt
},
502: {
n: "BrtBeginSct",
f: rt
},
503: {
n: "BrtEndSct",
f: rt
},
504: {
n: "BrtSlc",
f: rt
},
505: {
n: "BrtBeginDXFs",
f: rt
},
506: {
n: "BrtEndDXFs",
f: rt
},
507: {
n: "BrtDXF",
f: rt
},
508: {
n: "BrtBeginTableStyles",
f: rt
},
509: {
n: "BrtEndTableStyles",
f: rt
},
510: {
n: "BrtBeginTableStyle",
f: rt
},
511: {
n: "BrtEndTableStyle",
f: rt
},
512: {
n: "BrtTableStyleElement",
f: rt
},
513: {
n: "BrtTableStyleClient",
f: rt
},
514: {
n: "BrtBeginVolDeps",
f: rt
},
515: {
n: "BrtEndVolDeps",
f: rt
},
516: {
n: "BrtBeginVolType",
f: rt
},
517: {
n: "BrtEndVolType",
f: rt
},
518: {
n: "BrtBeginVolMain",
f: rt
},
519: {
n: "BrtEndVolMain",
f: rt
},
520: {
n: "BrtBeginVolTopic",
f: rt
},
521: {
n: "BrtEndVolTopic",
f: rt
},
522: {
n: "BrtVolSubtopic",
f: rt
},
523: {
n: "BrtVolRef",
f: rt
},
524: {
n: "BrtVolNum",
f: rt
},
525: {
n: "BrtVolErr",
f: rt
},
526: {
n: "BrtVolStr",
f: rt
},
527: {
n: "BrtVolBool",
f: rt
},
528: {
n: "BrtBeginCalcChain$",
f: rt
},
529: {
n: "BrtEndCalcChain$",
f: rt
},
530: {
n: "BrtBeginSortState",
f: rt
},
531: {
n: "BrtEndSortState",
f: rt
},
532: {
n: "BrtBeginSortCond",
f: rt
},
533: {
n: "BrtEndSortCond",
f: rt
},
534: {
n: "BrtBookProtection",
f: rt
},
535: {
n: "BrtSheetProtection",
f: rt
},
536: {
n: "BrtRangeProtection",
f: rt
},
537: {
n: "BrtPhoneticInfo",
f: rt
},
538: {
n: "BrtBeginECTxtWiz",
f: rt
},
539: {
n: "BrtEndECTxtWiz",
f: rt
},
540: {
n: "BrtBeginECTWFldInfoLst",
f: rt
},
541: {
n: "BrtEndECTWFldInfoLst",
f: rt
},
542: {
n: "BrtBeginECTwFldInfo",
f: rt
},
548: {
n: "BrtFileSharing",
f: rt
},
549: {
n: "BrtOleSize",
f: rt
},
550: {
n: "BrtDrawing",
f: zt
},
551: {
n: "BrtLegacyDrawing",
f: rt
},
552: {
n: "BrtLegacyDrawingHF",
f: rt
},
553: {
n: "BrtWebOpt",
f: rt
},
554: {
n: "BrtBeginWebPubItems",
f: rt
},
555: {
n: "BrtEndWebPubItems",
f: rt
},
556: {
n: "BrtBeginWebPubItem",
f: rt
},
557: {
n: "BrtEndWebPubItem",
f: rt
},
558: {
n: "BrtBeginSXCondFmt",
f: rt
},
559: {
n: "BrtEndSXCondFmt",
f: rt
},
560: {
n: "BrtBeginSXCondFmts",
f: rt
},
561: {
n: "BrtEndSXCondFmts",
f: rt
},
562: {
n: "BrtBkHim",
f: rt
},
564: {
n: "BrtColor",
f: rt
},
565: {
n: "BrtBeginIndexedColors",
f: rt
},
566: {
n: "BrtEndIndexedColors",
f: rt
},
569: {
n: "BrtBeginMRUColors",
f: rt
},
570: {
n: "BrtEndMRUColors",
f: rt
},
572: {
n: "BrtMRUColor",
f: rt
},
573: {
n: "BrtBeginDVals",
f: rt
},
574: {
n: "BrtEndDVals",
f: rt
},
577: {
n: "BrtSupNameStart",
f: rt
},
578: {
n: "BrtSupNameValueStart",
f: rt
},
579: {
n: "BrtSupNameValueEnd",
f: rt
},
580: {
n: "BrtSupNameNum",
f: rt
},
581: {
n: "BrtSupNameErr",
f: rt
},
582: {
n: "BrtSupNameSt",
f: rt
},
583: {
n: "BrtSupNameNil",
f: rt
},
584: {
n: "BrtSupNameBool",
f: rt
},
585: {
n: "BrtSupNameFmla",
f: rt
},
586: {
n: "BrtSupNameBits",
f: rt
},
587: {
n: "BrtSupNameEnd",
f: rt
},
588: {
n: "BrtEndSupBook",
f: rt
},
589: {
n: "BrtCellSmartTagProperty",
f: rt
},
590: {
n: "BrtBeginCellSmartTag",
f: rt
},
591: {
n: "BrtEndCellSmartTag",
f: rt
},
592: {
n: "BrtBeginCellSmartTags",
f: rt
},
593: {
n: "BrtEndCellSmartTags",
f: rt
},
594: {
n: "BrtBeginSmartTags",
f: rt
},
595: {
n: "BrtEndSmartTags",
f: rt
},
596: {
n: "BrtSmartTagType",
f: rt
},
597: {
n: "BrtBeginSmartTagTypes",
f: rt
},
598: {
n: "BrtEndSmartTagTypes",
f: rt
},
599: {
n: "BrtBeginSXFilters",
f: rt
},
600: {
n: "BrtEndSXFilters",
f: rt
},
601: {
n: "BrtBeginSXFILTER",
f: rt
},
602: {
n: "BrtEndSXFilter",
f: rt
},
603: {
n: "BrtBeginFills",
f: rt
},
604: {
n: "BrtEndFills",
f: rt
},
605: {
n: "BrtBeginCellWatches",
f: rt
},
606: {
n: "BrtEndCellWatches",
f: rt
},
607: {
n: "BrtCellWatch",
f: rt
},
608: {
n: "BrtBeginCRErrs",
f: rt
},
609: {
n: "BrtEndCRErrs",
f: rt
},
610: {
n: "BrtCrashRecErr",
f: rt
},
611: {
n: "BrtBeginFonts",
f: rt
},
612: {
n: "BrtEndFonts",
f: rt
},
613: {
n: "BrtBeginBorders",
f: rt
},
614: {
n: "BrtEndBorders",
f: rt
},
615: {
n: "BrtBeginFmts",
f: rt
},
616: {
n: "BrtEndFmts",
f: rt
},
617: {
n: "BrtBeginCellXFs",
f: rt
},
618: {
n: "BrtEndCellXFs",
f: rt
},
619: {
n: "BrtBeginStyles",
f: rt
},
620: {
n: "BrtEndStyles",
f: rt
},
625: {
n: "BrtBigName",
f: rt
},
626: {
n: "BrtBeginCellStyleXFs",
f: rt
},
627: {
n: "BrtEndCellStyleXFs",
f: rt
},
628: {
n: "BrtBeginComments",
f: rt
},
629: {
n: "BrtEndComments",
f: rt
},
630: {
n: "BrtBeginCommentAuthors",
f: rt
},
631: {
n: "BrtEndCommentAuthors",
f: rt
},
632: {
n: "BrtCommentAuthor",
f: Nc
},
633: {
n: "BrtBeginCommentList",
f: rt
},
634: {
n: "BrtEndCommentList",
f: rt
},
635: {
n: "BrtBeginComment",
f: function(e, t) {
var r = {};
r.iauthor = e.read_shift(4);
var n = Kt(e, 16);
r.rfx = n.s;
r.ref = Bt(n.s);
e.l += 16;
return r;
}
},
636: {
n: "BrtEndComment",
f: rt
},
637: {
n: "BrtCommentText",
f: Ft
},
638: {
n: "BrtBeginOleObjects",
f: rt
},
639: {
n: "BrtOleObject",
f: rt
},
640: {
n: "BrtEndOleObjects",
f: rt
},
641: {
n: "BrtBeginSxrules",
f: rt
},
642: {
n: "BrtEndSxRules",
f: rt
},
643: {
n: "BrtBeginActiveXControls",
f: rt
},
644: {
n: "BrtActiveX",
f: rt
},
645: {
n: "BrtEndActiveXControls",
f: rt
},
646: {
n: "BrtBeginPCDSDTCEMembersSortBy",
f: rt
},
648: {
n: "BrtBeginCellIgnoreECs",
f: rt
},
649: {
n: "BrtCellIgnoreEC",
f: rt
},
650: {
n: "BrtEndCellIgnoreECs",
f: rt
},
651: {
n: "BrtCsProp",
f: rt
},
652: {
n: "BrtCsPageSetup",
f: rt
},
653: {
n: "BrtBeginUserCsViews",
f: rt
},
654: {
n: "BrtEndUserCsViews",
f: rt
},
655: {
n: "BrtBeginUserCsView",
f: rt
},
656: {
n: "BrtEndUserCsView",
f: rt
},
657: {
n: "BrtBeginPcdSFCIEntries",
f: rt
},
658: {
n: "BrtEndPCDSFCIEntries",
f: rt
},
659: {
n: "BrtPCDSFCIEntry",
f: rt
},
660: {
n: "BrtBeginListParts",
f: rt
},
661: {
n: "BrtListPart",
f: rt
},
662: {
n: "BrtEndListParts",
f: rt
},
663: {
n: "BrtSheetCalcProp",
f: rt
},
664: {
n: "BrtBeginFnGroup",
f: rt
},
665: {
n: "BrtFnGroup",
f: rt
},
666: {
n: "BrtEndFnGroup",
f: rt
},
667: {
n: "BrtSupAddin",
f: rt
},
668: {
n: "BrtSXTDMPOrder",
f: rt
},
669: {
n: "BrtCsProtection",
f: rt
},
671: {
n: "BrtBeginWsSortMap",
f: rt
},
672: {
n: "BrtEndWsSortMap",
f: rt
},
673: {
n: "BrtBeginRRSort",
f: rt
},
674: {
n: "BrtEndRRSort",
f: rt
},
675: {
n: "BrtRRSortItem",
f: rt
},
676: {
n: "BrtFileSharingIso",
f: rt
},
677: {
n: "BrtBookProtectionIso",
f: rt
},
678: {
n: "BrtSheetProtectionIso",
f: rt
},
679: {
n: "BrtCsProtectionIso",
f: rt
},
680: {
n: "BrtRangeProtectionIso",
f: rt
},
1024: {
n: "BrtRwDescent",
f: rt
},
1025: {
n: "BrtKnownFonts",
f: rt
},
1026: {
n: "BrtBeginSXTupleSet",
f: rt
},
1027: {
n: "BrtEndSXTupleSet",
f: rt
},
1028: {
n: "BrtBeginSXTupleSetHeader",
f: rt
},
1029: {
n: "BrtEndSXTupleSetHeader",
f: rt
},
1030: {
n: "BrtSXTupleSetHeaderItem",
f: rt
},
1031: {
n: "BrtBeginSXTupleSetData",
f: rt
},
1032: {
n: "BrtEndSXTupleSetData",
f: rt
},
1033: {
n: "BrtBeginSXTupleSetRow",
f: rt
},
1034: {
n: "BrtEndSXTupleSetRow",
f: rt
},
1035: {
n: "BrtSXTupleSetRowItem",
f: rt
},
1036: {
n: "BrtNameExt",
f: rt
},
1037: {
n: "BrtPCDH14",
f: rt
},
1038: {
n: "BrtBeginPCDCalcMem14",
f: rt
},
1039: {
n: "BrtEndPCDCalcMem14",
f: rt
},
1040: {
n: "BrtSXTH14",
f: rt
},
1041: {
n: "BrtBeginSparklineGroup",
f: rt
},
1042: {
n: "BrtEndSparklineGroup",
f: rt
},
1043: {
n: "BrtSparkline",
f: rt
},
1044: {
n: "BrtSXDI14",
f: rt
},
1045: {
n: "BrtWsFmtInfoEx14",
f: rt
},
1046: {
n: "BrtBeginConditionalFormatting14",
f: rt
},
1047: {
n: "BrtEndConditionalFormatting14",
f: rt
},
1048: {
n: "BrtBeginCFRule14",
f: rt
},
1049: {
n: "BrtEndCFRule14",
f: rt
},
1050: {
n: "BrtCFVO14",
f: rt
},
1051: {
n: "BrtBeginDatabar14",
f: rt
},
1052: {
n: "BrtBeginIconSet14",
f: rt
},
1053: {
n: "BrtDVal14",
f: rt
},
1054: {
n: "BrtBeginDVals14",
f: rt
},
1055: {
n: "BrtColor14",
f: rt
},
1056: {
n: "BrtBeginSparklines",
f: rt
},
1057: {
n: "BrtEndSparklines",
f: rt
},
1058: {
n: "BrtBeginSparklineGroups",
f: rt
},
1059: {
n: "BrtEndSparklineGroups",
f: rt
},
1061: {
n: "BrtSXVD14",
f: rt
},
1062: {
n: "BrtBeginSxview14",
f: rt
},
1063: {
n: "BrtEndSxview14",
f: rt
},
1066: {
n: "BrtBeginPCD14",
f: rt
},
1067: {
n: "BrtEndPCD14",
f: rt
},
1068: {
n: "BrtBeginExtConn14",
f: rt
},
1069: {
n: "BrtEndExtConn14",
f: rt
},
1070: {
n: "BrtBeginSlicerCacheIDs",
f: rt
},
1071: {
n: "BrtEndSlicerCacheIDs",
f: rt
},
1072: {
n: "BrtBeginSlicerCacheID",
f: rt
},
1073: {
n: "BrtEndSlicerCacheID",
f: rt
},
1075: {
n: "BrtBeginSlicerCache",
f: rt
},
1076: {
n: "BrtEndSlicerCache",
f: rt
},
1077: {
n: "BrtBeginSlicerCacheDef",
f: rt
},
1078: {
n: "BrtEndSlicerCacheDef",
f: rt
},
1079: {
n: "BrtBeginSlicersEx",
f: rt
},
1080: {
n: "BrtEndSlicersEx",
f: rt
},
1081: {
n: "BrtBeginSlicerEx",
f: rt
},
1082: {
n: "BrtEndSlicerEx",
f: rt
},
1083: {
n: "BrtBeginSlicer",
f: rt
},
1084: {
n: "BrtEndSlicer",
f: rt
},
1085: {
n: "BrtSlicerCachePivotTables",
f: rt
},
1086: {
n: "BrtBeginSlicerCacheOlapImpl",
f: rt
},
1087: {
n: "BrtEndSlicerCacheOlapImpl",
f: rt
},
1088: {
n: "BrtBeginSlicerCacheLevelsData",
f: rt
},
1089: {
n: "BrtEndSlicerCacheLevelsData",
f: rt
},
1090: {
n: "BrtBeginSlicerCacheLevelData",
f: rt
},
1091: {
n: "BrtEndSlicerCacheLevelData",
f: rt
},
1092: {
n: "BrtBeginSlicerCacheSiRanges",
f: rt
},
1093: {
n: "BrtEndSlicerCacheSiRanges",
f: rt
},
1094: {
n: "BrtBeginSlicerCacheSiRange",
f: rt
},
1095: {
n: "BrtEndSlicerCacheSiRange",
f: rt
},
1096: {
n: "BrtSlicerCacheOlapItem",
f: rt
},
1097: {
n: "BrtBeginSlicerCacheSelections",
f: rt
},
1098: {
n: "BrtSlicerCacheSelection",
f: rt
},
1099: {
n: "BrtEndSlicerCacheSelections",
f: rt
},
1100: {
n: "BrtBeginSlicerCacheNative",
f: rt
},
1101: {
n: "BrtEndSlicerCacheNative",
f: rt
},
1102: {
n: "BrtSlicerCacheNativeItem",
f: rt
},
1103: {
n: "BrtRangeProtection14",
f: rt
},
1104: {
n: "BrtRangeProtectionIso14",
f: rt
},
1105: {
n: "BrtCellIgnoreEC14",
f: rt
},
1111: {
n: "BrtList14",
f: rt
},
1112: {
n: "BrtCFIcon",
f: rt
},
1113: {
n: "BrtBeginSlicerCachesPivotCacheIDs",
f: rt
},
1114: {
n: "BrtEndSlicerCachesPivotCacheIDs",
f: rt
},
1115: {
n: "BrtBeginSlicers",
f: rt
},
1116: {
n: "BrtEndSlicers",
f: rt
},
1117: {
n: "BrtWbProp14",
f: rt
},
1118: {
n: "BrtBeginSXEdit",
f: rt
},
1119: {
n: "BrtEndSXEdit",
f: rt
},
1120: {
n: "BrtBeginSXEdits",
f: rt
},
1121: {
n: "BrtEndSXEdits",
f: rt
},
1122: {
n: "BrtBeginSXChange",
f: rt
},
1123: {
n: "BrtEndSXChange",
f: rt
},
1124: {
n: "BrtBeginSXChanges",
f: rt
},
1125: {
n: "BrtEndSXChanges",
f: rt
},
1126: {
n: "BrtSXTupleItems",
f: rt
},
1128: {
n: "BrtBeginSlicerStyle",
f: rt
},
1129: {
n: "BrtEndSlicerStyle",
f: rt
},
1130: {
n: "BrtSlicerStyleElement",
f: rt
},
1131: {
n: "BrtBeginStyleSheetExt14",
f: rt
},
1132: {
n: "BrtEndStyleSheetExt14",
f: rt
},
1133: {
n: "BrtBeginSlicerCachesPivotCacheID",
f: rt
},
1134: {
n: "BrtEndSlicerCachesPivotCacheID",
f: rt
},
1135: {
n: "BrtBeginConditionalFormattings",
f: rt
},
1136: {
n: "BrtEndConditionalFormattings",
f: rt
},
1137: {
n: "BrtBeginPCDCalcMemExt",
f: rt
},
1138: {
n: "BrtEndPCDCalcMemExt",
f: rt
},
1139: {
n: "BrtBeginPCDCalcMemsExt",
f: rt
},
1140: {
n: "BrtEndPCDCalcMemsExt",
f: rt
},
1141: {
n: "BrtPCDField14",
f: rt
},
1142: {
n: "BrtBeginSlicerStyles",
f: rt
},
1143: {
n: "BrtEndSlicerStyles",
f: rt
},
1144: {
n: "BrtBeginSlicerStyleElements",
f: rt
},
1145: {
n: "BrtEndSlicerStyleElements",
f: rt
},
1146: {
n: "BrtCFRuleExt",
f: rt
},
1147: {
n: "BrtBeginSXCondFmt14",
f: rt
},
1148: {
n: "BrtEndSXCondFmt14",
f: rt
},
1149: {
n: "BrtBeginSXCondFmts14",
f: rt
},
1150: {
n: "BrtEndSXCondFmts14",
f: rt
},
1152: {
n: "BrtBeginSortCond14",
f: rt
},
1153: {
n: "BrtEndSortCond14",
f: rt
},
1154: {
n: "BrtEndDVals14",
f: rt
},
1155: {
n: "BrtEndIconSet14",
f: rt
},
1156: {
n: "BrtEndDatabar14",
f: rt
},
1157: {
n: "BrtBeginColorScale14",
f: rt
},
1158: {
n: "BrtEndColorScale14",
f: rt
},
1159: {
n: "BrtBeginSxrules14",
f: rt
},
1160: {
n: "BrtEndSxrules14",
f: rt
},
1161: {
n: "BrtBeginPRule14",
f: rt
},
1162: {
n: "BrtEndPRule14",
f: rt
},
1163: {
n: "BrtBeginPRFilters14",
f: rt
},
1164: {
n: "BrtEndPRFilters14",
f: rt
},
1165: {
n: "BrtBeginPRFilter14",
f: rt
},
1166: {
n: "BrtEndPRFilter14",
f: rt
},
1167: {
n: "BrtBeginPRFItem14",
f: rt
},
1168: {
n: "BrtEndPRFItem14",
f: rt
},
1169: {
n: "BrtBeginCellIgnoreECs14",
f: rt
},
1170: {
n: "BrtEndCellIgnoreECs14",
f: rt
},
1171: {
n: "BrtDxf14",
f: rt
},
1172: {
n: "BrtBeginDxF14s",
f: rt
},
1173: {
n: "BrtEndDxf14s",
f: rt
},
1177: {
n: "BrtFilter14",
f: rt
},
1178: {
n: "BrtBeginCustomFilters14",
f: rt
},
1180: {
n: "BrtCustomFilter14",
f: rt
},
1181: {
n: "BrtIconFilter14",
f: rt
},
1182: {
n: "BrtPivotCacheConnectionName",
f: rt
},
2048: {
n: "BrtBeginDecoupledPivotCacheIDs",
f: rt
},
2049: {
n: "BrtEndDecoupledPivotCacheIDs",
f: rt
},
2050: {
n: "BrtDecoupledPivotCacheID",
f: rt
},
2051: {
n: "BrtBeginPivotTableRefs",
f: rt
},
2052: {
n: "BrtEndPivotTableRefs",
f: rt
},
2053: {
n: "BrtPivotTableRef",
f: rt
},
2054: {
n: "BrtSlicerCacheBookPivotTables",
f: rt
},
2055: {
n: "BrtBeginSxvcells",
f: rt
},
2056: {
n: "BrtEndSxvcells",
f: rt
},
2057: {
n: "BrtBeginSxRow",
f: rt
},
2058: {
n: "BrtEndSxRow",
f: rt
},
2060: {
n: "BrtPcdCalcMem15",
f: rt
},
2067: {
n: "BrtQsi15",
f: rt
},
2068: {
n: "BrtBeginWebExtensions",
f: rt
},
2069: {
n: "BrtEndWebExtensions",
f: rt
},
2070: {
n: "BrtWebExtension",
f: rt
},
2071: {
n: "BrtAbsPath15",
f: rt
},
2072: {
n: "BrtBeginPivotTableUISettings",
f: rt
},
2073: {
n: "BrtEndPivotTableUISettings",
f: rt
},
2075: {
n: "BrtTableSlicerCacheIDs",
f: rt
},
2076: {
n: "BrtTableSlicerCacheID",
f: rt
},
2077: {
n: "BrtBeginTableSlicerCache",
f: rt
},
2078: {
n: "BrtEndTableSlicerCache",
f: rt
},
2079: {
n: "BrtSxFilter15",
f: rt
},
2080: {
n: "BrtBeginTimelineCachePivotCacheIDs",
f: rt
},
2081: {
n: "BrtEndTimelineCachePivotCacheIDs",
f: rt
},
2082: {
n: "BrtTimelineCachePivotCacheID",
f: rt
},
2083: {
n: "BrtBeginTimelineCacheIDs",
f: rt
},
2084: {
n: "BrtEndTimelineCacheIDs",
f: rt
},
2085: {
n: "BrtBeginTimelineCacheID",
f: rt
},
2086: {
n: "BrtEndTimelineCacheID",
f: rt
},
2087: {
n: "BrtBeginTimelinesEx",
f: rt
},
2088: {
n: "BrtEndTimelinesEx",
f: rt
},
2089: {
n: "BrtBeginTimelineEx",
f: rt
},
2090: {
n: "BrtEndTimelineEx",
f: rt
},
2091: {
n: "BrtWorkBookPr15",
f: rt
},
2092: {
n: "BrtPCDH15",
f: rt
},
2093: {
n: "BrtBeginTimelineStyle",
f: rt
},
2094: {
n: "BrtEndTimelineStyle",
f: rt
},
2095: {
n: "BrtTimelineStyleElement",
f: rt
},
2096: {
n: "BrtBeginTimelineStylesheetExt15",
f: rt
},
2097: {
n: "BrtEndTimelineStylesheetExt15",
f: rt
},
2098: {
n: "BrtBeginTimelineStyles",
f: rt
},
2099: {
n: "BrtEndTimelineStyles",
f: rt
},
2100: {
n: "BrtBeginTimelineStyleElements",
f: rt
},
2101: {
n: "BrtEndTimelineStyleElements",
f: rt
},
2102: {
n: "BrtDxf15",
f: rt
},
2103: {
n: "BrtBeginDxfs15",
f: rt
},
2104: {
n: "brtEndDxfs15",
f: rt
},
2105: {
n: "BrtSlicerCacheHideItemsWithNoData",
f: rt
},
2106: {
n: "BrtBeginItemUniqueNames",
f: rt
},
2107: {
n: "BrtEndItemUniqueNames",
f: rt
},
2108: {
n: "BrtItemUniqueName",
f: rt
},
2109: {
n: "BrtBeginExtConn15",
f: rt
},
2110: {
n: "BrtEndExtConn15",
f: rt
},
2111: {
n: "BrtBeginOledbPr15",
f: rt
},
2112: {
n: "BrtEndOledbPr15",
f: rt
},
2113: {
n: "BrtBeginDataFeedPr15",
f: rt
},
2114: {
n: "BrtEndDataFeedPr15",
f: rt
},
2115: {
n: "BrtTextPr15",
f: rt
},
2116: {
n: "BrtRangePr15",
f: rt
},
2117: {
n: "BrtDbCommand15",
f: rt
},
2118: {
n: "BrtBeginDbTables15",
f: rt
},
2119: {
n: "BrtEndDbTables15",
f: rt
},
2120: {
n: "BrtDbTable15",
f: rt
},
2121: {
n: "BrtBeginDataModel",
f: rt
},
2122: {
n: "BrtEndDataModel",
f: rt
},
2123: {
n: "BrtBeginModelTables",
f: rt
},
2124: {
n: "BrtEndModelTables",
f: rt
},
2125: {
n: "BrtModelTable",
f: rt
},
2126: {
n: "BrtBeginModelRelationships",
f: rt
},
2127: {
n: "BrtEndModelRelationships",
f: rt
},
2128: {
n: "BrtModelRelationship",
f: rt
},
2129: {
n: "BrtBeginECTxtWiz15",
f: rt
},
2130: {
n: "BrtEndECTxtWiz15",
f: rt
},
2131: {
n: "BrtBeginECTWFldInfoLst15",
f: rt
},
2132: {
n: "BrtEndECTWFldInfoLst15",
f: rt
},
2133: {
n: "BrtBeginECTWFldInfo15",
f: rt
},
2134: {
n: "BrtFieldListActiveItem",
f: rt
},
2135: {
n: "BrtPivotCacheIdVersion",
f: rt
},
2136: {
n: "BrtSXDI15",
f: rt
},
65535: {
n: "",
f: rt
}
}, $u = function(e, t) {
for (var r = [], n = B(e), a = 0; a !== n.length; ++a) r[e[n[a]][t]] = n[a];
return r;
}(Yu, "n"), Zu = {
3: {
n: "BIFF2NUM",
f: function(e, t, r) {
var n = hn(e);
++e.l;
var a = $t(e);
n.t = "n";
n.val = a;
return n;
}
},
4: {
n: "BIFF2STR",
f: function(e, t, r) {
var n = hn(e);
++e.l;
var a = an(e, 0, r);
n.t = "str";
n.val = a;
return n;
}
},
6: {
n: "Formula",
f: eh
},
9: {
n: "BOF",
f: wn
},
10: {
n: "EOF",
f: ra
},
12: {
n: "CalcCount",
f: zn
},
13: {
n: "CalcMode",
f: jn
},
14: {
n: "CalcPrecision",
f: Kn
},
15: {
n: "CalcRefMode",
f: Yn
},
16: {
n: "CalcDelta",
f: Xn
},
17: {
n: "CalcIter",
f: Gn
},
18: {
n: "Protect",
f: Ba
},
19: {
n: "Password",
f: ma
},
20: {
n: "Header",
f: la
},
21: {
n: "Footer",
f: ia
},
23: {
n: "ExternSheet",
f: function(e, t, r) {
if (r.biff < 8) return en(e, 0, r);
for (var n = [], a = (e.l, e.read_shift(2)); 0 != a--; ) n.push(dn(e));
return n;
}
},
24: {
n: "Lbl",
f: Dn
},
25: {
n: "WinProtect",
f: Da
},
26: {
n: "VerticalPageBreaks",
f: Fa
},
27: {
n: "HorizontalPageBreaks",
f: Pa
},
28: {
n: "Note",
f: function(e, t, r) {
return function(e, t, r) {
if (!(r.biff < 8)) {
var n = e.read_shift(2), a = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2), o = an(e, 0, r);
r.biff < 8 && e.read_shift(1);
return [ {
r: n,
c: a
}, o, i, s ];
}
}(e, 0, r);
}
},
29: {
n: "Selection",
f: Na
},
34: {
n: "Date1904",
f: qn
},
35: {
n: "ExternName",
f: yn
},
38: {
n: "LeftMargin",
f: ua
},
39: {
n: "RightMargin",
f: Ca
},
40: {
n: "TopMargin",
f: Ia
},
41: {
n: "BottomMargin",
f: Wn
},
42: {
n: "PrintRowCol",
f: ba
},
43: {
n: "PrintGrid",
f: ga
},
47: {
n: "FilePass",
f: function(e, t, r) {
var n = {
Type: e.read_shift(2)
};
n.Type ? Gl(e, 0, n) : function(e, t, r, n) {
var a = {
key: qr(e),
verificationBytes: qr(e)
};
r.password && (a.verifier = Vl(r.password));
n.valid = a.verificationBytes === a.verifier;
n.valid && (n.insitu_decrypt = Xl(r.password));
}(e, 0, r, n);
return n;
}
},
49: {
n: "Font",
f: function(e, t, r) {
var n = {
dyHeight: e.read_shift(2),
fl: e.read_shift(2)
};
switch (r && r.biff || 8) {
case 2:
break;

case 3:
case 4:
e.l += 2;
break;

default:
e.l += 10;
}
n.name = en(e, 0, r);
return n;
}
},
51: {
n: "PrintSize",
f: va
},
60: {
n: "Continue",
f: Ma
},
61: {
n: "Window1",
f: function(e, t) {
return {
Pos: [ e.read_shift(2), e.read_shift(2) ],
Dim: [ e.read_shift(2), e.read_shift(2) ],
Flags: e.read_shift(2),
CurTab: e.read_shift(2),
FirstTab: e.read_shift(2),
Selected: e.read_shift(2),
TabRatio: e.read_shift(2)
};
}
},
64: {
n: "Backup",
f: Un
},
65: {
n: "Pane",
f: La
},
66: {
n: "CodePage",
f: Zn
},
77: {
n: "Pls",
f: Ua
},
80: {
n: "DCon",
f: Ha
},
81: {
n: "DConRef",
f: Wa
},
82: {
n: "DConName",
f: Va
},
85: {
n: "DefColWidth",
f: Jn
},
89: {
n: "XCT",
f: za
},
90: {
n: "CRN",
f: Xa
},
91: {
n: "FileSharing",
f: Ga
},
92: {
n: "WriteAccess",
f: function(e, t, r) {
if (r.enc) {
e.l += t;
return "";
}
var n = e.l, a = nn(e, 0, r);
e.read_shift(t + n - e.l);
return a;
}
},
93: {
n: "Obj",
f: function(e, t, r) {
if (r && r.biff < 8) return function(e, t, r) {
e.read_shift(4);
var n = e.read_shift(2), a = e.read_shift(2), s = e.read_shift(2);
e.read_shift(2), e.read_shift(2), e.read_shift(2), e.read_shift(2), e.read_shift(2), 
e.read_shift(2), e.read_shift(2), e.read_shift(2), e.read_shift(2);
e.l += 6;
t -= 36;
var i = [];
i.push((Fn[n] || rt)(e, t, r));
return {
cmo: [ a, n, s ],
ft: i
};
}(e, t, r);
var n = vn(e);
return {
cmo: n,
ft: function(e, t, r) {
for (var n = e.l + t, a = []; e.l < n; ) {
var s = e.read_shift(2);
e.l -= 2;
try {
a.push(Sn[s](e, n - e.l));
} catch (t) {
e.l = n;
return a;
}
}
e.l != n && (e.l = n);
return a;
}(e, t - 22, n[1])
};
}
},
94: {
n: "Uncalced",
f: ja
},
95: {
n: "CalcSaveRecalc",
f: $n
},
96: {
n: "Template",
f: Ka
},
97: {
n: "Intl",
f: Ya
},
99: {
n: "ObjProtect",
f: pa
},
125: {
n: "ColInfo",
f: Pn
},
128: {
n: "Guts",
f: function(e, t) {
e.l += 4;
var r = [ e.read_shift(2), e.read_shift(2) ];
0 !== r[0] && r[0]--;
0 !== r[1] && r[1]--;
if (r[0] > 7 || r[1] > 7) throw new Error("Bad Gutters: " + r.join("|"));
return r;
}
},
129: {
n: "WsBool",
f: $a
},
130: {
n: "GridSet",
f: oa
},
131: {
n: "HCenter",
f: fa
},
132: {
n: "VCenter",
f: Ra
},
133: {
n: "BoundSheet8",
f: function(e, t, r) {
var n = e.read_shift(4), a = 3 & e.read_shift(1), s = e.read_shift(1);
switch (s) {
case 0:
s = "Worksheet";
break;

case 1:
s = "Macrosheet";
break;

case 2:
s = "Chartsheet";
break;

case 6:
s = "VBAModule";
}
var i = en(e, 0, r);
0 === i.length && (i = "Sheet1");
return {
pos: n,
hs: a,
dt: s,
name: i
};
}
},
134: {
n: "WriteProtect",
f: Oa
},
140: {
n: "Country",
f: function(e, t) {
var r, n = [];
r = e.read_shift(2);
n[0] = fr[r] || r;
r = e.read_shift(2);
n[1] = fr[r] || r;
return n;
}
},
141: {
n: "HideObj",
f: ca
},
144: {
n: "Sort",
f: Za
},
146: {
n: "Palette",
f: function(e, t) {
for (var r = e.read_shift(2), n = []; r-- > 0; ) n.push(cn(e));
return n;
}
},
151: {
n: "Sync",
f: Qa
},
152: {
n: "LPr",
f: qa
},
153: {
n: "DxGCol",
f: Ja
},
154: {
n: "FnGroupName",
f: es
},
155: {
n: "FilterMode",
f: ts
},
156: {
n: "BuiltInFnGroupCount",
f: Vn
},
157: {
n: "AutoFilterInfo",
f: rs
},
158: {
n: "AutoFilter",
f: ns
},
160: {
n: "Scl",
f: ka
},
161: {
n: "Setup",
f: function(e, t, r) {
var n = {};
e.l += 16;
n.header = $t(e);
n.footer = $t(e);
e.l += 2;
return n;
}
},
174: {
n: "ScenMan",
f: as
},
175: {
n: "SCENARIO",
f: ss
},
176: {
n: "SxView",
f: is
},
177: {
n: "Sxvd",
f: os
},
178: {
n: "SXVI",
f: fs
},
180: {
n: "SxIvd",
f: ls
},
181: {
n: "SXLI",
f: cs
},
182: {
n: "SXPI",
f: hs
},
184: {
n: "DocRoute",
f: us
},
185: {
n: "RecipName",
f: ds
},
189: {
n: "MulRk",
f: function(e, t) {
for (var r = e.l + t - 2, n = e.read_shift(2), a = e.read_shift(2), s = []; e.l < r; ) s.push(pn(e));
if (e.l !== r) throw new Error("MulRK read error");
var i = e.read_shift(2);
if (s.length != i - a + 1) throw new Error("MulRK length mismatch");
return {
r: n,
c: a,
C: i,
rkrec: s
};
}
},
190: {
n: "MulBlank",
f: function(e, t) {
for (var r = e.l + t - 2, n = e.read_shift(2), a = e.read_shift(2), s = []; e.l < r; ) s.push(e.read_shift(2));
if (e.l !== r) throw new Error("MulBlank read error");
var i = e.read_shift(2);
if (s.length != i - a + 1) throw new Error("MulBlank length mismatch");
return {
r: n,
c: a,
C: i,
ixfe: s
};
}
},
193: {
n: "Mms",
f: da
},
197: {
n: "SXDI",
f: ps
},
198: {
n: "SXDB",
f: ms
},
199: {
n: "SXFDB",
f: gs
},
200: {
n: "SXDBB",
f: bs
},
201: {
n: "SXNum",
f: vs
},
202: {
n: "SxBool",
f: Aa
},
203: {
n: "SxErr",
f: Es
},
204: {
n: "SXInt",
f: Ss
},
205: {
n: "SXString",
f: Bs
},
206: {
n: "SXDtr",
f: ws
},
207: {
n: "SxNil",
f: Cs
},
208: {
n: "SXTbl",
f: _s
},
209: {
n: "SXTBRGIITM",
f: Ts
},
210: {
n: "SxTbpg",
f: ks
},
211: {
n: "ObProj",
f: xs
},
213: {
n: "SXStreamID",
f: As
},
215: {
n: "DBCell",
f: Is
},
216: {
n: "SXRng",
f: ys
},
217: {
n: "SxIsxoper",
f: Rs
},
218: {
n: "BookBool",
f: Ds
},
220: {
n: "DbOrParamQry",
f: Os
},
221: {
n: "ScenarioProtect",
f: Ta
},
222: {
n: "OleObjectSize",
f: Fs
},
224: {
n: "XF",
f: function(e, t, r) {
var n = {};
n.ifnt = e.read_shift(2);
n.ifmt = e.read_shift(2);
n.flags = e.read_shift(2);
n.fStyle = n.flags >> 2 & 1;
n.data = xn(e, 0, n.fStyle, r);
return n;
}
},
225: {
n: "InterfaceHdr",
f: function(e, t) {
if (0 === t) return 1200;
e.read_shift(2);
return 1200;
}
},
226: {
n: "InterfaceEnd",
f: ha
},
227: {
n: "SXVS",
f: Ps
},
229: {
n: "MergeCells",
f: function(e, t) {
for (var r = [], n = e.read_shift(2); n--; ) r.push(mn(e));
return r;
}
},
233: {
n: "BkHim",
f: Ns
},
235: {
n: "MsoDrawingGroup",
f: Ms
},
236: {
n: "MsoDrawing",
f: Ls
},
237: {
n: "MsoDrawingSelection",
f: Us
},
239: {
n: "PhoneticInfo",
f: Hs
},
240: {
n: "SxRule",
f: Ws
},
241: {
n: "SXEx",
f: Vs
},
242: {
n: "SxFilt",
f: zs
},
244: {
n: "SxDXF",
f: Xs
},
245: {
n: "SxItm",
f: Gs
},
246: {
n: "SxName",
f: js
},
247: {
n: "SxSelect",
f: Ks
},
248: {
n: "SXPair",
f: Ys
},
249: {
n: "SxFmla",
f: $s
},
251: {
n: "SxFormat",
f: Zs
},
252: {
n: "SST",
f: function(e, t) {
for (var r = e.read_shift(4), n = e.read_shift(4), a = [], s = 0; s != n; ++s) a.push(tn(e));
a.Count = r;
a.Unique = n;
return a;
}
},
253: {
n: "LabelSst",
f: function(e, t) {
var r = hn(e);
r.isst = e.read_shift(4);
return r;
}
},
255: {
n: "ExtSST",
f: function(e, t) {
var r = {};
r.dsst = e.read_shift(2);
e.l += t - 2;
return r;
}
},
256: {
n: "SXVDEx",
f: Qs
},
259: {
n: "SXFormula",
f: qs
},
290: {
n: "SXDBEx",
f: Js
},
311: {
n: "RRDInsDel",
f: ei
},
312: {
n: "RRDHead",
f: ti
},
315: {
n: "RRDChgCell",
f: ri
},
317: {
n: "RRTabId",
f: _a
},
318: {
n: "RRDRenSheet",
f: ni
},
319: {
n: "RRSort",
f: ai
},
320: {
n: "RRDMove",
f: si
},
330: {
n: "RRFormat",
f: ii
},
331: {
n: "RRAutoFmt",
f: oi
},
333: {
n: "RRInsertSh",
f: fi
},
334: {
n: "RRDMoveBegin",
f: li
},
335: {
n: "RRDMoveEnd",
f: ci
},
336: {
n: "RRDInsDelBegin",
f: hi
},
337: {
n: "RRDInsDelEnd",
f: ui
},
338: {
n: "RRDConflict",
f: di
},
339: {
n: "RRDDefName",
f: pi
},
340: {
n: "RRDRstEtxp",
f: mi
},
351: {
n: "LRng",
f: gi
},
352: {
n: "UsesELFs",
f: ya
},
353: {
n: "DSF",
f: ea
},
401: {
n: "CUsr",
f: bi
},
402: {
n: "CbUsr",
f: vi
},
403: {
n: "UsrInfo",
f: Ei
},
404: {
n: "UsrExcl",
f: Si
},
405: {
n: "FileLock",
f: Bi
},
406: {
n: "RRDInfo",
f: wi
},
407: {
n: "BCUsrs",
f: Ci
},
408: {
n: "UsrChk",
f: _i
},
425: {
n: "UserBView",
f: Ti
},
426: {
n: "UserSViewBegin",
f: ki
},
427: {
n: "UserSViewEnd",
f: xi
},
428: {
n: "RRDUserView",
f: Ai
},
429: {
n: "Qsi",
f: Ii
},
430: {
n: "SupBook",
f: function(e, t, r) {
var n = e.l + t, a = e.read_shift(2), s = e.read_shift(2);
r.sbcch = s;
if (1025 == s || 14849 == s) return [ s, a ];
if (s < 1 || s > 255) throw new Error("Unexpected SupBook type: " + s);
return [ s, a, rn(e, s), e.read_shift(n - e.l) ];
}
},
431: {
n: "Prot4Rev",
f: Ea
},
432: {
n: "CondFmt",
f: yi
},
433: {
n: "CF",
f: Ri
},
434: {
n: "DVal",
f: Di
},
437: {
n: "DConBin",
f: Oi
},
438: {
n: "TxO",
f: function(e, t, r) {
var n = e.l, a = "";
try {
e.l += 4;
var s = (r.lastobj || {
cmo: [ 0, 0 ]
}).cmo[1];
-1 == [ 0, 5, 7, 11, 12, 14 ].indexOf(s) ? e.l += 6 : sn(e, 6, r);
var i = e.read_shift(2), o = (e.read_shift(2), Bn(e, 2), e.read_shift(2));
e.l += o;
for (var f = 1; f < e.lens.length - 1; ++f) {
if (e.l - n != e.lens[f]) throw new Error("TxO: bad continue record");
var l = e[e.l];
if ((a += rn(e, e.lens[f + 1] - e.lens[f] - 1)).length >= (l ? i : 2 * i)) break;
}
if (a.length !== i && a.length !== 2 * i) throw new Error("cchText: " + i + " != " + a.length);
e.l = n + t;
return {
t: a
};
} catch (r) {
e.l = n + t;
return {
t: a
};
}
}
},
439: {
n: "RefreshAll",
f: wa
},
440: {
n: "HLink",
f: function(e, t) {
var r = mn(e);
e.l += 16;
return [ r, function(e, t) {
var r = e.l + t, n = e.read_shift(4);
if (2 !== n) throw new Error("Unrecognized streamVersion: " + n);
var a, s, i, o, f = e.read_shift(2);
e.l += 2;
16 & f && fn(e, e.l);
128 & f && (a = fn(e, e.l));
257 == (257 & f) && (s = fn(e, e.l));
1 == (257 & f) && (i = on(e, e.l));
8 & f && (o = fn(e, e.l));
32 & f && e.read_shift(16);
64 & f && Lr(e);
e.l = r;
var l = a || s || i;
o && (l += "#" + o);
return {
Target: l
};
}(e, t - 24) ];
}
},
441: {
n: "Lel",
f: Fi
},
442: {
n: "CodeName",
f: Pi
},
443: {
n: "SXFDBType",
f: Ni
},
444: {
n: "Prot4RevPass",
f: Sa
},
445: {
n: "ObNoMacros",
f: Mi
},
446: {
n: "Dv",
f: Li
},
448: {
n: "Excel9File",
f: na
},
449: {
n: "RecalcId",
f: function(e, t) {
e.read_shift(2);
return e.read_shift(4);
},
r: 2
},
450: {
n: "EntExU2",
f: ta
},
512: {
n: "Dimensions",
f: kn
},
513: {
n: "Blank",
f: Hn
},
515: {
n: "Number",
f: function(e, t) {
var r = hn(e), n = $t(e);
r.val = n;
return r;
}
},
516: {
n: "Label",
f: function(e, t, r) {
e.l;
var n = hn(e);
2 == r.biff && e.l++;
var a = nn(e, e.l, r);
n.val = a;
return n;
}
},
517: {
n: "BoolErr",
f: An
},
518: {
n: "Formula",
f: eh
},
519: {
n: "String",
f: xa
},
520: {
n: "Row",
f: function(e, t) {
var r = {};
r.r = e.read_shift(2);
r.c = e.read_shift(2);
r.cnt = e.read_shift(2) - r.c;
var n = e.read_shift(2);
e.l += 4;
var a = e.read_shift(1);
e.l += 3;
32 & a && (r.hidden = !0);
64 & a && (r.hpt = n / 20);
return r;
}
},
523: {
n: "Index",
f: Ui
},
545: {
n: "Array",
f: On
},
549: {
n: "DefaultRowHeight",
f: _n
},
566: {
n: "Table",
f: Hi
},
574: {
n: "Window2",
f: Ln
},
638: {
n: "RK",
f: function(e, t) {
var r = e.read_shift(2), n = e.read_shift(2), a = pn(e);
return {
r: r,
c: n,
ixfe: a[0],
rknum: a[1]
};
}
},
659: {
n: "Style",
f: Nn
},
1030: {
n: "Formula",
f: eh
},
1048: {
n: "BigName",
f: Wi
},
1054: {
n: "Format",
f: function(e, t, r) {
return [ e.read_shift(2), an(e, 0, r) ];
}
},
1084: {
n: "ContinueBigName",
f: Vi
},
1212: {
n: "ShrFmla",
f: function(e, t, r) {
gn(e);
e.l++;
var n = e.read_shift(1);
return [ function(e, t, r) {
var n, a = e.l + t, s = e.read_shift(2), i = rh(e, s, r);
if (65535 == s) return [ [], rt(e, t - 2) ];
t !== s + 2 && (n = th(e, a - s - 2, i, r));
return [ i, n ];
}(e, t -= 8, r), n ];
}
},
2048: {
n: "HLinkTooltip",
f: function(e, t) {
e.l;
e.read_shift(2);
var r = mn(e), n = e.read_shift((t - 10) / 2, "dbcs-cont");
return [ r, n = n.replace(d, "") ];
}
},
2049: {
n: "WebPub",
f: zi
},
2050: {
n: "QsiSXTag",
f: Xi
},
2051: {
n: "DBQueryExt",
f: Gi
},
2052: {
n: "ExtString",
f: ji
},
2053: {
n: "TxtQry",
f: Ki
},
2054: {
n: "Qsir",
f: Yi
},
2055: {
n: "Qsif",
f: $i
},
2056: {
n: "RRDTQSIF",
f: Zi
},
2057: {
n: "BOF",
f: wn
},
2058: {
n: "OleDbConn",
f: Qi
},
2059: {
n: "WOpt",
f: qi
},
2060: {
n: "SXViewEx",
f: Ji
},
2061: {
n: "SXTH",
f: eo
},
2062: {
n: "SXPIEx",
f: to
},
2063: {
n: "SXVDTEx",
f: ro
},
2064: {
n: "SXViewEx9",
f: no
},
2066: {
n: "ContinueFrt",
f: ao
},
2067: {
n: "RealTimeData",
f: so
},
2128: {
n: "ChartFrtInfo",
f: io
},
2129: {
n: "FrtWrapper",
f: oo
},
2130: {
n: "StartBlock",
f: fo
},
2131: {
n: "EndBlock",
f: lo
},
2132: {
n: "StartObject",
f: co
},
2133: {
n: "EndObject",
f: ho
},
2134: {
n: "CatLab",
f: uo
},
2135: {
n: "YMult",
f: po
},
2136: {
n: "SXViewLink",
f: mo
},
2137: {
n: "PivotChartBits",
f: go
},
2138: {
n: "FrtFontList",
f: bo
},
2146: {
n: "SheetExt",
f: vo
},
2147: {
n: "BookExt",
f: Eo,
r: 12
},
2148: {
n: "SXAddl",
f: So
},
2149: {
n: "CrErr",
f: Bo
},
2150: {
n: "HFPicture",
f: wo
},
2151: {
n: "FeatHdr",
f: aa
},
2152: {
n: "Feat",
f: Co
},
2154: {
n: "DataLabExt",
f: _o
},
2155: {
n: "DataLabExtContents",
f: To
},
2156: {
n: "CellWatch",
f: ko
},
2161: {
n: "FeatHdr11",
f: xo
},
2162: {
n: "Feature11",
f: Ao
},
2164: {
n: "DropDownObjIds",
f: Io
},
2165: {
n: "ContinueFrt11",
f: yo
},
2166: {
n: "DConn",
f: Ro
},
2167: {
n: "List12",
f: Do
},
2168: {
n: "Feature12",
f: Oo
},
2169: {
n: "CondFmt12",
f: Fo
},
2170: {
n: "CF12",
f: Po
},
2171: {
n: "CFEx",
f: No
},
2172: {
n: "XFCRC",
f: function(e, t) {
e.l += 2;
var r = {
cxfs: 0,
crc: 0
};
r.cxfs = e.read_shift(2);
r.crc = e.read_shift(4);
return r;
},
r: 12
},
2173: {
n: "XFExt",
f: function(e, t) {
e.l;
e.l += 2;
var r = e.read_shift(2);
e.l += 2;
for (var n = e.read_shift(2), a = []; n-- > 0; ) a.push(yc(e, e.l));
return {
ixfe: r,
ext: a
};
},
r: 12
},
2174: {
n: "AutoFilter12",
f: Mo
},
2175: {
n: "ContinueFrt12",
f: Lo
},
2180: {
n: "MDTInfo",
f: Uo
},
2181: {
n: "MDXStr",
f: Ho
},
2182: {
n: "MDXTuple",
f: Wo
},
2183: {
n: "MDXSet",
f: Vo
},
2184: {
n: "MDXProp",
f: zo
},
2185: {
n: "MDXKPI",
f: Xo
},
2186: {
n: "MDB",
f: Go
},
2187: {
n: "PLV",
f: jo
},
2188: {
n: "Compat12",
f: Qn,
r: 12
},
2189: {
n: "DXF",
f: Ko
},
2190: {
n: "TableStyles",
f: Yo,
r: 12
},
2191: {
n: "TableStyle",
f: $o
},
2192: {
n: "TableStyleElement",
f: Zo
},
2194: {
n: "StyleExt",
f: Mn
},
2195: {
n: "NamePublish",
f: Qo
},
2196: {
n: "NameCmt",
f: function(e, t, r) {
if (!(r.biff < 8)) {
var n = e.read_shift(2), a = e.read_shift(2);
return [ rn(e, n, r), rn(e, a, r) ];
}
e.l += t;
},
r: 12
},
2197: {
n: "SortData",
f: qo
},
2198: {
n: "Theme",
f: function(e, t, r) {
124226 !== e.read_shift(4) && (e.l += t - 4);
},
r: 12
},
2199: {
n: "GUIDTypeLib",
f: Jo
},
2200: {
n: "FnGrp12",
f: ef
},
2201: {
n: "NameFnGrp12",
f: tf
},
2202: {
n: "MTRSettings",
f: function(e, t) {
return [ 0 !== e.read_shift(4), 0 !== e.read_shift(4), e.read_shift(4) ];
},
r: 12
},
2203: {
n: "CompressPictures",
f: Cn
},
2204: {
n: "HeaderFooter",
f: rf
},
2205: {
n: "CrtLayout12",
f: nf
},
2206: {
n: "CrtMlFrt",
f: af
},
2207: {
n: "CrtMlFrtContinue",
f: sf
},
2211: {
n: "ForceFullCalculation",
f: function(e, t) {
var r = function(e) {
var t = e.read_shift(2), r = e.read_shift(2);
e.l += 8;
return {
type: t,
flags: r
};
}(e);
if (2211 != r.type) throw new Error("Invalid Future Record " + r.type);
return 0 !== e.read_shift(4);
}
},
2212: {
n: "ShapePropsStream",
f: of
},
2213: {
n: "TextPropsStream",
f: ff
},
2214: {
n: "RichTextStream",
f: lf
},
2215: {
n: "CrtLayout12A",
f: cf
},
4097: {
n: "Units",
f: hf
},
4098: {
n: "Chart",
f: uf
},
4099: {
n: "Series",
f: df
},
4102: {
n: "DataFormat",
f: pf
},
4103: {
n: "LineFormat",
f: mf
},
4105: {
n: "MarkerFormat",
f: gf
},
4106: {
n: "AreaFormat",
f: bf
},
4107: {
n: "PieFormat",
f: vf
},
4108: {
n: "AttachedLabel",
f: Ef
},
4109: {
n: "SeriesText",
f: Sf
},
4116: {
n: "ChartFormat",
f: Bf
},
4117: {
n: "Legend",
f: wf
},
4118: {
n: "SeriesList",
f: Cf
},
4119: {
n: "Bar",
f: _f
},
4120: {
n: "Line",
f: Tf
},
4121: {
n: "Pie",
f: kf
},
4122: {
n: "Area",
f: xf
},
4123: {
n: "Scatter",
f: Af
},
4124: {
n: "CrtLine",
f: If
},
4125: {
n: "Axis",
f: yf
},
4126: {
n: "Tick",
f: Rf
},
4127: {
n: "ValueRange",
f: Df
},
4128: {
n: "CatSerRange",
f: Of
},
4129: {
n: "AxisLine",
f: Ff
},
4130: {
n: "CrtLink",
f: Pf
},
4132: {
n: "DefaultText",
f: Nf
},
4133: {
n: "Text",
f: Mf
},
4134: {
n: "FontX",
f: sa
},
4135: {
n: "ObjectLink",
f: Lf
},
4146: {
n: "Frame",
f: Uf
},
4147: {
n: "Begin",
f: Hf
},
4148: {
n: "End",
f: Wf
},
4149: {
n: "PlotArea",
f: Vf
},
4154: {
n: "Chart3d",
f: zf
},
4156: {
n: "PicF",
f: Xf
},
4157: {
n: "DropBar",
f: Gf
},
4158: {
n: "Radar",
f: jf
},
4159: {
n: "Surf",
f: Kf
},
4160: {
n: "RadarArea",
f: Yf
},
4161: {
n: "AxisParent",
f: $f
},
4163: {
n: "LegendException",
f: Zf
},
4164: {
n: "ShtProps",
f: function(e, t, r) {
var n = {
area: !1
};
if (5 != r.biff) {
e.l += t;
return n;
}
var a = e.read_shift(1);
e.l += 3;
16 & a && (n.area = !0);
return n;
}
},
4165: {
n: "SerToCrt",
f: Qf
},
4166: {
n: "AxesUsed",
f: qf
},
4168: {
n: "SBaseRef",
f: Jf
},
4170: {
n: "SerParent",
f: el
},
4171: {
n: "SerAuxTrend",
f: tl
},
4174: {
n: "IFmtRecord",
f: rl
},
4175: {
n: "Pos",
f: nl
},
4176: {
n: "AlRuns",
f: al
},
4177: {
n: "BRAI",
f: sl
},
4187: {
n: "SerAuxErrBar",
f: il
},
4188: {
n: "ClrtClient",
f: function(e, t) {
for (var r = e.read_shift(2), n = []; r-- > 0; ) n.push(cn(e));
return n;
}
},
4189: {
n: "SerFmt",
f: ol
},
4191: {
n: "Chart3DBarShape",
f: fl
},
4192: {
n: "Fbi",
f: ll
},
4193: {
n: "BopPop",
f: cl
},
4194: {
n: "AxcExt",
f: hl
},
4195: {
n: "Dat",
f: ul
},
4196: {
n: "PlotGrowth",
f: dl
},
4197: {
n: "SIIndex",
f: pl
},
4198: {
n: "GelFrame",
f: ml
},
4199: {
n: "BopPopCustom",
f: gl
},
4200: {
n: "Fbi2",
f: bl
},
0: {
n: "Dimensions",
f: kn
},
2: {
n: "BIFF2INT",
f: function(e, t) {
var r = hn(e);
++e.l;
var n = e.read_shift(2);
r.t = "n";
r.val = n;
return r;
}
},
5: {
n: "BoolErr",
f: An
},
7: {
n: "String",
f: function(e, t) {
var r = e.read_shift(1);
if (0 === r) {
e.l++;
return "";
}
return e.read_shift(r, "sbcs-cont");
}
},
8: {
n: "BIFF2ROW",
f: rt
},
11: {
n: "Index",
f: Ui
},
22: {
n: "ExternCount",
f: rt
},
30: {
n: "BIFF2FORMAT",
f: Tn
},
31: {
n: "BIFF2FMTCNT",
f: rt
},
32: {
n: "BIFF2COLINFO",
f: rt
},
33: {
n: "Array",
f: On
},
37: {
n: "DefaultRowHeight",
f: _n
},
50: {
n: "BIFF2FONTXTRA",
f: function(e, t) {
e.l += 6;
e.l += 2;
e.l += 1;
e.l += 3;
e.l += 1;
e.l += t - 13;
}
},
62: {
n: "BIFF2WINDOW2",
f: rt
},
69: {
n: "BIFF2FONTCLR",
f: rt
},
86: {
n: "BIFF4FMTCNT",
f: rt
},
126: {
n: "RK",
f: rt
},
127: {
n: "ImData",
f: function(e, t, r) {
e.l;
var n = e.read_shift(2), a = e.read_shift(2), s = e.read_shift(4), i = {
fmt: n,
env: a,
len: s,
data: e.slice(e.l, e.l + s)
};
e.l += s;
return i;
}
},
135: {
n: "Addin",
f: rt
},
136: {
n: "Edg",
f: rt
},
137: {
n: "Pub",
f: rt
},
145: {
n: "Sub",
f: rt
},
148: {
n: "LHRecord",
f: rt
},
149: {
n: "LHNGraph",
f: rt
},
150: {
n: "Sound",
f: rt
},
169: {
n: "CoordList",
f: rt
},
171: {
n: "GCW",
f: rt
},
188: {
n: "ShrFmla",
f: rt
},
194: {
n: "AddMenu",
f: rt
},
195: {
n: "DelMenu",
f: rt
},
214: {
n: "RString",
f: function(e, t, r) {
var n = e.l + t, a = hn(e), s = rn(e, e.read_shift(2), r);
e.l = n;
a.t = "str";
a.val = s;
return a;
}
},
223: {
n: "UDDesc",
f: rt
},
234: {
n: "TabIdConf",
f: rt
},
354: {
n: "XL5Modify",
f: rt
},
421: {
n: "FileSharing2",
f: rt
},
521: {
n: "BOF",
f: wn
},
536: {
n: "Lbl",
f: Dn
},
547: {
n: "ExternName",
f: yn
},
561: {
n: "Font",
f: rt
},
1033: {
n: "BOF",
f: wn
},
2157: {
n: "FeatInfo",
f: rt
},
2163: {
n: "FeatInfo11",
f: rt
},
2177: {
n: "SXAddl12",
f: rt
},
2240: {
n: "AutoWebPub",
f: rt
},
2241: {
n: "ListObj",
f: rt
},
2242: {
n: "ListField",
f: rt
},
2243: {
n: "ListDV",
f: rt
},
2244: {
n: "ListCondFmt",
f: rt
},
2245: {
n: "ListCF",
f: rt
},
2246: {
n: "FMQry",
f: rt
},
2247: {
n: "FMSQry",
f: rt
},
2248: {
n: "PLV",
f: rt
},
2249: {
n: "LnExt",
f: rt
},
2250: {
n: "MkrExt",
f: rt
},
2251: {
n: "CrtCoopt",
f: rt
},
67: {
n: "BIFF2XF",
f: rt
},
579: {
n: "BIFF3XF",
f: rt
},
1091: {
n: "BIFF4XF",
f: rt
},
29282: {}
};
function Qu(e, t, r, n) {
var a = n || (r || []).length, s = e.next(4 + a);
s.write_shift(2, t);
s.write_shift(2, a);
a > 0 && Ve(r) && e.push(r);
}
function qu(e, t, r) {
e || (e = nt(7));
e.write_shift(2, t);
e.write_shift(2, r);
e.write_shift(1, 0);
e.write_shift(1, 0);
e.write_shift(1, 0);
return e;
}
function Ju(e, t, r, n, a) {
if (null != t.v) switch (t.t) {
case "d":
case "n":
var s = "d" == t.t ? k(t.v) : t.v;
s == (0 | s) && s >= 0 && s < 65536 ? Qu(e, 2, function(e, t, r) {
var n = nt(9);
qu(n, e, t);
n.write_shift(2, r);
return n;
}(r, n, s)) : Qu(e, 3, function(e, t, r) {
var n = nt(15);
qu(n, e, t);
n.write_shift(8, r, "f");
return n;
}(r, n, s));
return;

case "b":
case "e":
Qu(e, 5, function(e, t, r, n) {
var a = nt(9);
qu(a, e, t);
if ("e" == n) {
a.write_shift(1, r);
a.write_shift(1, 1);
} else {
a.write_shift(1, r ? 1 : 0);
a.write_shift(1, 0);
}
return a;
}(r, n, t.v, t.t));
return;

case "s":
case "str":
Qu(e, 4, function(e, t, r) {
var n = nt(8 + 2 * r.length);
qu(n, e, t);
n.write_shift(1, r.length);
n.write_shift(r.length, r, "sbcs");
return n.l < n.length ? n.slice(0, n.l) : n;
}(r, n, t.v));
return;
}
Qu(e, 1, qu(null, r, n));
}
function ed(e, t) {
var r = t || {};
null != o && null == r.dense && (r.dense = o);
for (var n = st(), a = 0, s = 0; s < e.SheetNames.length; ++s) e.SheetNames[s] == r.sheet && (a = s);
if (0 == a && r.sheet && e.SheetNames[0] != r.sheet) throw new Error("Sheet not found: " + r.sheet);
Qu(n, 9, function(e, t) {
if ("biff2" != t.bookType) throw "unsupported BIFF version";
var r = nt(4);
r.write_shift(2, 2);
r.write_shift(2, 16);
return r;
}(0, r));
(function(e, t, r, n, a) {
for (var s, i = Array.isArray(t), o = _t(t["!ref"] || "A1"), f = "", l = [], c = o.s.r; c <= o.e.r; ++c) {
f = ut(c);
for (var h = o.s.c; h <= o.e.c; ++h) {
c === o.s.r && (l[h] = gt(h));
s = l[h] + f;
var u = i ? (t[c] || [])[h] : t[s];
u && Ju(e, u, c, h);
}
}
})(n, e.Sheets[e.SheetNames[a]]);
Qu(n, 10);
return n.end();
}
var td = function() {
function e(e, t) {
var r = t || {};
null != o && null == r.dense && (r.dense = o);
var n = r.dense ? [] : {}, a = e.indexOf("<table"), s = e.indexOf("</table");
if (-1 == a || -1 == s) throw new Error("Invalid HTML: missing <table> / </table> pair");
var i = e.slice(a, s).split(/(:?<tr[^>]*>)/), f = -1, l = 0, c = 0, h = 0, u = {
s: {
r: 1e7,
c: 1e7
},
e: {
r: 0,
c: 0
}
}, d = [];
for (a = 0; a < i.length; ++a) {
var p = i[a].trim();
if ("<tr" != p.substr(0, 3)) {
if ("<td" == p.substr(0, 3)) {
var m = p.split("</td>");
for (s = 0; s < m.length; ++s) {
var g = m[s].trim();
if ("<td" == g.substr(0, 3)) {
for (var b = g, v = 0; "<" == b.charAt(0) && (v = b.indexOf(">")) > -1; ) b = b.slice(v + 1);
for (;b.indexOf(">") > -1; ) b = b.slice(0, b.lastIndexOf("<"));
var E = $(g.slice(0, g.indexOf(">")));
h = E.colspan ? +E.colspan : 1;
((c = +E.rowspan) > 0 || h > 1) && d.push({
s: {
r: f,
c: l
},
e: {
r: f + (c || 1) - 1,
c: l + h - 1
}
});
if (b.length) {
b = q(b).replace(/[\r\n]/g, "");
u.s.r > f && (u.s.r = f);
u.e.r < f && (u.e.r = f);
u.s.c > l && (u.s.c = l);
u.e.c < l && (u.e.c = l);
if (r.dense) {
n[f] || (n[f] = []);
Number(b) == Number(b) ? n[f][l] = {
t: "n",
v: +b
} : n[f][l] = {
t: "s",
v: b
};
} else {
var S = Bt({
r: f,
c: l
});
Number(b) == Number(b) ? n[S] = {
t: "n",
v: +b
} : n[S] = {
t: "s",
v: b
};
}
l += h;
} else l += h;
}
}
}
} else {
++f;
l = 0;
}
}
n["!ref"] = Ct(u);
return n;
}
function t(e, t, r, n) {
for (var a = e["!merges"] || [], s = [], i = "<td" + (n.editable ? ' contenteditable="true"' : "") + "></td>", o = t.s.c; o <= t.e.c; ++o) {
for (var f = 0, l = 0, c = 0; c < a.length; ++c) if (!(a[c].s.r > r || a[c].s.c > o || a[c].e.r < r || a[c].e.c < o)) {
if (a[c].s.r < r || a[c].s.c < o) {
f = -1;
break;
}
f = a[c].e.r - a[c].s.r + 1;
l = a[c].e.c - a[c].s.c + 1;
break;
}
if (!(f < 0)) {
var h = Bt({
r: r,
c: o
}), u = n.dense ? (e[r] || [])[o] : e[h];
if (u && null != u.v) {
var d = u.h || te(u.w || (kt(u), u.w) || ""), p = {};
f > 1 && (p.rowspan = f);
l > 1 && (p.colspan = l);
n.editable && (p.contenteditable = "true");
p.id = "sjs-" + h;
s.push(Se("td", d, p));
} else s.push(i);
}
}
return "<tr>" + s.join("") + "</tr>";
}
function r(e, t, r) {
return [].join("") + "<table>";
}
var n = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', a = "</body></html>";
return {
to_workbook: function(t, r) {
return xt(e(t, r), r);
},
to_sheet: e,
_row: t,
BEGIN: n,
END: a,
_preamble: r,
from_sheet: function(e, s, i) {
var o = s || {}, f = null != o.header ? o.header : n, l = null != o.footer ? o.footer : a, c = [ f ], h = wt(e["!ref"]);
o.dense = Array.isArray(e);
c.push(r());
for (var u = h.s.r; u <= h.e.r; ++u) c.push(t(e, h, u, o));
c.push("</table>" + l);
return c.join("");
}
};
}();
function rd(e, t) {
var r = t || {};
null != o && (r.dense = o);
for (var n = r.dense ? [] : {}, a = e.getElementsByTagName("tr"), s = {
s: {
r: 0,
c: 0
},
e: {
r: a.length - 1,
c: 0
}
}, i = [], f = 0, l = 0, c = 0, h = 0, u = 0, d = 0; l < a.length; ++l) {
var p = a[l].children;
for (c = h = 0; c < p.length; ++c) {
var g = p[c], b = p[c].innerText || p[c].textContent;
for (f = 0; f < i.length; ++f) {
var v = i[f];
if (v.s.c == h && v.s.r <= l && l <= v.e.r) {
h = v.e.c + 1;
f = -1;
}
}
d = +g.getAttribute("colspan") || 1;
((u = +g.getAttribute("rowspan")) > 0 || d > 1) && i.push({
s: {
r: l,
c: h
},
e: {
r: l + (u || 1) - 1,
c: h + d - 1
}
});
var E = {
t: "s",
v: b
};
if (null != b && b.length) if (isNaN(Number(b))) {
if (!isNaN(M(b).getDate())) {
E = {
t: "d",
v: O(b)
};
r.cellDates || (E = {
t: "n",
v: k(E.v)
});
E.z = r.dateNF || m._table[14];
}
} else E = {
t: "n",
v: Number(b)
};
if (r.dense) {
n[l] || (n[l] = []);
n[l][h] = E;
} else n[Bt({
c: h,
r: l
})] = E;
s.e.c < h && (s.e.c = h);
h += d;
}
}
n["!merges"] = i;
n["!ref"] = Ct(s);
return n;
}
var nd = function() {
var e = function(e, t) {
return q(e.replace(/<text:s\/>/g, " ").replace(/<[^>]*>/g, ""));
}, t = {
day: [ "d", "dd" ],
month: [ "m", "mm" ],
year: [ "y", "yy" ],
hours: [ "h", "hh" ],
minutes: [ "m", "mm" ],
seconds: [ "s", "ss" ],
"am-pm": [ "A/P", "AM/PM" ],
"day-of-week": [ "ddd", "dddd" ]
};
return function(r, n) {
var a = n || {};
null != o && null == a.dense && (a.dense = o);
var s, i, f, l, c, h, u = Pu(r), d = [], p = {
name: ""
}, m = "", g = 0, b = {}, v = [], E = a.dense ? [] : {}, S = {
value: ""
}, B = "", w = 0, C = -1, _ = -1, T = {
s: {
r: 1e6,
c: 1e7
},
e: {
r: 0,
c: 0
}
}, x = {}, I = [], y = {}, R = [], D = [], F = {}, N = "", M = 0, L = 1, U = !1, H = 0;
Nu.lastIndex = 0;
u = u.replace(/<!--([^\u2603]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
for (;c = Nu.exec(u); ) switch (c[3] = c[3].replace(/_.*$/, "")) {
case "table":
case "工作表":
if ("/" === c[1]) {
T.e.c >= T.s.c && T.e.r >= T.s.r && (E["!ref"] = Ct(T));
I.length && (E["!merges"] = I);
f.name = fe(f["名称"] || f.name);
v.push(f.name);
b[f.name] = E;
} else if ("/" !== c[0].charAt(c[0].length - 2)) {
f = $(c[0], !1);
C = _ = -1;
T.s.r = T.s.c = 1e7;
T.e.r = T.e.c = 0;
E = a.dense ? [] : {};
I = [];
}
break;

case "table-row":
case "行":
if ("/" === c[1]) break;
(l = $(c[0], !1))["行号"] ? C = l["行号"] - 1 : ++C;
_ = -1;
break;

case "covered-table-cell":
++_;
if (a.sheetStubs) if (a.dense) {
E[C] || (E[C] = []);
E[C][_] = {
t: "z"
};
} else E[Bt({
r: C,
c: _
})] = {
t: "z"
};
break;

case "table-cell":
case "数据":
if ("/" === c[0].charAt(c[0].length - 2)) (S = $(c[0], !1))["number-columns-repeated"] ? _ += parseInt(S["number-columns-repeated"], 10) : ++_; else if ("/" !== c[1]) {
L = 1;
++_ > T.e.c && (T.e.c = _);
C > T.e.r && (T.e.r = C);
_ < T.s.c && (T.s.c = _);
C < T.s.r && (T.s.r = C);
S = $(c[0], !1);
D = [];
F = {};
h = {
t: S["数据类型"] || S["value-type"],
v: null
};
if (a.cellFormula) {
S.formula && (S.formula = q(S.formula));
if (S["number-matrix-columns-spanned"] && S["number-matrix-rows-spanned"]) {
y = {
s: {
r: C,
c: _
},
e: {
r: C + (parseInt(S["number-matrix-rows-spanned"], 10) || 0) - 1,
c: _ + (parseInt(S["number-matrix-columns-spanned"], 10) || 0) - 1
}
};
h.F = Ct(y);
R.push([ y, h.F ]);
}
if (S.formula) h.f = mh(S.formula); else for (H = 0; H < R.length; ++H) C >= R[H][0].s.r && C <= R[H][0].e.r && _ >= R[H][0].s.c && _ <= R[H][0].e.c && (h.F = R[H][1]);
}
if (S["number-columns-spanned"] || S["number-rows-spanned"]) {
y = {
s: {
r: C,
c: _
},
e: {
r: C + (parseInt(S["number-rows-spanned"], 10) || 0) - 1,
c: _ + (parseInt(S["number-columns-spanned"], 10) || 0) - 1
}
};
I.push(y);
}
S["number-columns-repeated"] && (L = parseInt(S["number-columns-repeated"], 10));
switch (h.t) {
case "boolean":
h.t = "b";
h.v = oe(S["boolean-value"]);
break;

case "float":
case "percentage":
case "currency":
h.t = "n";
h.v = parseFloat(S.value);
break;

case "date":
h.t = "d";
h.v = O(S["date-value"]);
if (!a.cellDates) {
h.t = "n";
h.v = k(h.v);
}
h.z = "m/d/yy";
break;

case "time":
h.t = "n";
h.v = A(S["time-value"]) / 86400;
break;

case "number":
h.t = "n";
h.v = parseFloat(S["数据数值"]);
break;

default:
if ("string" !== h.t && "text" !== h.t && h.t) throw new Error("Unsupported value type " + h.t);
h.t = "s";
null != S["string-value"] && (B = q(S["string-value"]));
}
} else {
U = !1;
if ("s" === h.t) {
h.v = B || "";
U = 0 == w;
}
if (D.length > 0) {
h.c = D;
D = [];
}
B && !1 !== a.cellText && (h.w = B);
if (!U || a.sheetStubs) {
if (!(a.sheetRows && a.sheetRows < C)) {
if (a.dense) {
E[C] || (E[C] = []);
E[C][_] = h;
for (;--L > 0; ) E[C][++_] = P(h);
} else {
E[Bt({
r: C,
c: _
})] = h;
for (;--L > 0; ) E[Bt({
r: C,
c: ++_
})] = P(h);
}
T.e.c <= _ && (T.e.c = _);
}
} else {
_ += L;
L = 0;
}
h = {};
B = "";
}
break;

case "document":
case "document-content":
case "电子表格文档":
case "spreadsheet":
case "主体":
case "scripts":
case "styles":
case "font-face-decls":
if ("/" === c[1]) {
if ((s = d.pop())[0] !== c[3]) throw "Bad state: " + s;
} else "/" !== c[0].charAt(c[0].length - 2) && d.push([ c[3], !0 ]);
break;

case "annotation":
if ("/" === c[1]) {
if ((s = d.pop())[0] !== c[3]) throw "Bad state: " + s;
F.t = B;
F.a = N;
D.push(F);
} else "/" !== c[0].charAt(c[0].length - 2) && d.push([ c[3], !1 ]);
N = "";
M = 0;
B = "";
w = 0;
break;

case "creator":
"/" === c[1] ? N = u.slice(M, c.index) : M = c.index + c[0].length;
break;

case "meta":
case "元数据":
case "settings":
case "config-item-set":
case "config-item-map-indexed":
case "config-item-map-entry":
case "config-item-map-named":
case "shapes":
case "frame":
case "text-box":
case "image":
case "data-pilot-tables":
case "list-style":
case "form":
case "dde-links":
case "event-listeners":
if ("/" === c[1]) {
if ((s = d.pop())[0] !== c[3]) throw "Bad state: " + s;
} else "/" !== c[0].charAt(c[0].length - 2) && d.push([ c[3], !1 ]);
B = "";
w = 0;
break;

case "scientific-number":
case "currency-symbol":
case "currency-style":
break;

case "number-style":
case "percentage-style":
case "date-style":
case "time-style":
if ("/" === c[1]) {
x[p.name] = m;
if ((s = d.pop())[0] !== c[3]) throw "Bad state: " + s;
} else if ("/" !== c[0].charAt(c[0].length - 2)) {
m = "";
p = $(c[0], !1);
d.push([ c[3], !0 ]);
}
break;

case "script":
case "libraries":
case "automatic-styles":
case "master-styles":
break;

case "default-style":
case "page-layout":
case "style":
case "map":
case "font-face":
case "paragraph-properties":
case "table-properties":
case "table-column-properties":
case "table-row-properties":
case "table-cell-properties":
break;

case "number":
switch (d[d.length - 1][0]) {
case "time-style":
case "date-style":
i = $(c[0], !1);
m += t[c[3]]["long" === i.style ? 1 : 0];
}
break;

case "fraction":
break;

case "day":
case "month":
case "year":
case "era":
case "day-of-week":
case "week-of-year":
case "quarter":
case "hours":
case "minutes":
case "seconds":
case "am-pm":
switch (d[d.length - 1][0]) {
case "time-style":
case "date-style":
i = $(c[0], !1);
m += t[c[3]]["long" === i.style ? 1 : 0];
}
break;

case "boolean-style":
case "boolean":
case "text-style":
break;

case "text":
if ("/>" === c[0].slice(-2)) break;
if ("/" === c[1]) switch (d[d.length - 1][0]) {
case "number-style":
case "date-style":
case "time-style":
m += u.slice(g, c.index);
} else g = c.index + c[0].length;
break;

case "text-content":
case "text-properties":
break;

case "body":
case "电子表格":
case "forms":
case "table-column":
case "null-date":
case "graphic-properties":
case "calculation-settings":
case "named-expressions":
case "named-range":
case "named-expression":
case "sort":
case "sort-by":
case "sort-groups":
case "span":
case "line-break":
break;

case "p":
case "文本串":
if ("/" === c[1]) B = (B.length > 0 ? B + "\n" : "") + e(u.slice(w, c.index)); else {
$(c[0], !1);
w = c.index + c[0].length;
}
break;

case "database-range":
if ("/" === c[1]) break;
try {
var W = bh($(c[0])["target-range-address"]);
b[W[0]]["!autofilter"] = {
ref: W[1]
};
} catch (e) {}
break;

case "s":
case "date":
case "object":
break;

case "title":
case "标题":
case "desc":
case "table-source":
case "iteration":
case "content-validations":
case "content-validation":
case "error-message":
case "database-ranges":
case "filter":
case "filter-and":
case "filter-or":
case "filter-condition":
case "list-level-style-bullet":
case "list-level-style-number":
case "list-level-properties":
break;

case "sender-firstname":
case "sender-lastname":
case "sender-initials":
case "sender-title":
case "sender-position":
case "sender-email":
case "sender-phone-private":
case "sender-fax":
case "sender-company":
case "sender-phone-work":
case "sender-street":
case "sender-city":
case "sender-postal-code":
case "sender-country":
case "sender-state-or-province":
case "author-name":
case "author-initials":
case "chapter":
case "file-name":
case "template-name":
case "sheet-name":
case "event-listener":
break;

case "initial-creator":
case "creation-date":
case "generator":
case "document-statistic":
case "user-defined":
case "config-item":
case "page-number":
case "page-count":
case "time":
break;

case "data-pilot-table":
case "source-cell-range":
case "source-service":
case "data-pilot-field":
case "data-pilot-level":
case "data-pilot-subtotals":
case "data-pilot-subtotal":
case "data-pilot-members":
case "data-pilot-member":
case "data-pilot-display-info":
case "data-pilot-sort-info":
case "data-pilot-layout-info":
case "data-pilot-field-reference":
case "data-pilot-groups":
case "data-pilot-group":
case "data-pilot-group-member":
case "rect":
break;

case "dde-connection-decls":
case "dde-connection-decl":
case "dde-link":
case "dde-source":
case "properties":
case "property":
case "a":
case "table-protection":
case "data-pilot-grand-total":
break;

default:
if ("dc:" === c[2]) break;
if ("draw:" === c[2]) break;
if ("style:" === c[2]) break;
if ("calcext:" === c[2]) break;
if ("loext:" === c[2]) break;
if ("uof:" === c[2]) break;
if ("表:" === c[2]) break;
if ("字:" === c[2]) break;
if (a.WTF) throw new Error(c);
}
return {
Sheets: b,
SheetNames: v
};
};
}();
function ad(e, t) {
t = t || {};
var r = !!H(e, "objectdata");
if (r) (function(e, t) {
for (var r, n, a = Pu(e); r = Nu.exec(a); ) switch (r[3]) {
case "manifest":
break;

case "file-entry":
if ("/" == (n = $(r[0], !1)).path && n.type !== wr) throw new Error("This OpenDocument is not a spreadsheet");
break;

case "encryption-data":
case "algorithm":
case "start-key-generation":
case "key-derivation":
throw new Error("Unsupported ODS Encryption");

default:
if (t && t.WTF) throw r;
}
})(V(e, "META-INF/manifest.xml"), t);
var n = z(e, "content.xml");
if (!n) throw new Error("Missing content.xml in " + (r ? "ODS" : "UOF") + " file");
return nd(r ? n : fe(n), t);
}
function sd(e, t) {
return nd(e, t);
}
var id = function(e, t) {
return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-styles xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" office:version="1.2"></office:document-styles>';
}, od = function() {
var e = "          <table:table-cell />\n", t = function(t, r, n, a) {
var s = [];
s.push('      <table:table table:name="' + te(r.SheetNames[n]) + '">\n');
var i = 0, o = 0, f = wt(t["!ref"]), l = t["!merges"] || [], c = 0, h = Array.isArray(t);
for (i = 0; i < f.s.r; ++i) s.push("        <table:table-row></table:table-row>\n");
for (;i <= f.e.r; ++i) {
s.push("        <table:table-row>\n");
for (o = 0; o < f.s.c; ++o) s.push(e);
for (;o <= f.e.c; ++o) {
var u = !1, d = {}, p = "";
for (c = 0; c != l.length; ++c) if (!(l[c].s.c > o || l[c].s.r > i || l[c].e.c < o || l[c].e.r < i)) {
l[c].s.c == o && l[c].s.r == i || (u = !0);
d["table:number-columns-spanned"] = l[c].e.c - l[c].s.c + 1;
d["table:number-rows-spanned"] = l[c].e.r - l[c].s.r + 1;
break;
}
if (u) s.push("          <table:covered-table-cell/>\n"); else {
var m = Bt({
r: i,
c: o
}), g = h ? (t[i] || [])[o] : t[m];
if (g && g.f) {
d["table:formula"] = te(gh(g.f));
if (g.F && g.F.substr(0, m.length) == m) {
var b = wt(g.F);
d["table:number-matrix-columns-spanned"] = b.e.c - b.s.c + 1;
d["table:number-matrix-rows-spanned"] = b.e.r - b.s.r + 1;
}
}
if (g) {
switch (g.t) {
case "b":
p = g.v ? "TRUE" : "FALSE";
d["office:value-type"] = "boolean";
d["office:boolean-value"] = g.v ? "true" : "false";
break;

case "n":
p = g.w || String(g.v || 0);
d["office:value-type"] = "float";
d["office:value"] = g.v || 0;
break;

case "s":
case "str":
p = te(g.v);
d["office:value-type"] = "string";
break;

case "d":
p = g.w || O(g.v).toISOString();
d["office:value-type"] = "date";
d["office:date-value"] = O(g.v).toISOString();
d["table:style-name"] = "ce1";
break;

default:
s.push(e);
continue;
}
s.push("          " + Se("table:table-cell", Se("text:p", p, {}), d) + "\n");
} else s.push(e);
}
}
s.push("        </table:table-row>\n");
}
s.push("      </table:table>\n");
return s.join("");
};
return function(e, r) {
var n = [ Ue ], a = Ee({
"xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
"xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
"xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
"xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
"xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
"xmlns:xlink": "http://www.w3.org/1999/xlink",
"xmlns:dc": "http://purl.org/dc/elements/1.1/",
"xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
"xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
"xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
"xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
"xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
"xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
"xmlns:math": "http://www.w3.org/1998/Math/MathML",
"xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
"xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
"xmlns:ooo": "http://openoffice.org/2004/office",
"xmlns:ooow": "http://openoffice.org/2004/writer",
"xmlns:oooc": "http://openoffice.org/2004/calc",
"xmlns:dom": "http://www.w3.org/2001/xml-events",
"xmlns:xforms": "http://www.w3.org/2002/xforms",
"xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
"xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
"xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
"xmlns:rpt": "http://openoffice.org/2005/report",
"xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
"xmlns:xhtml": "http://www.w3.org/1999/xhtml",
"xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
"xmlns:tableooo": "http://openoffice.org/2009/table",
"xmlns:drawooo": "http://openoffice.org/2010/draw",
"xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
"xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
"xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
"xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
"xmlns:css3t": "http://www.w3.org/TR/css3-text/",
"office:version": "1.2"
}), s = Ee({
"xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
"office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
});
"fods" == r.bookType ? n.push("<office:document" + a + s + ">\n") : n.push("<office:document-content" + a + ">\n");
(function(e) {
e.push(" <office:automatic-styles>\n");
e.push('  <number:date-style style:name="N37" number:automatic-order="true">\n');
e.push('   <number:month number:style="long"/>\n');
e.push("   <number:text>/</number:text>\n");
e.push('   <number:day number:style="long"/>\n');
e.push("   <number:text>/</number:text>\n");
e.push("   <number:year/>\n");
e.push("  </number:date-style>\n");
e.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n');
e.push(" </office:automatic-styles>\n");
})(n);
n.push("  <office:body>\n");
n.push("    <office:spreadsheet>\n");
for (var i = 0; i != e.SheetNames.length; ++i) n.push(t(e.Sheets[e.SheetNames[i]], e, i));
n.push("    </office:spreadsheet>\n");
n.push("  </office:body>\n");
"fods" == r.bookType ? n.push("</office:document>") : n.push("</office:document-content>");
return n.join("");
};
}();
function fd(e, t) {
if ("fods" == t.bookType) return od(e, t);
var r = new R(), n = "", a = [], s = [];
n = "mimetype";
r.file(n, "application/vnd.oasis.opendocument.spreadsheet");
n = "content.xml";
r.file(n, od(e, t));
a.push([ n, "text/xml" ]);
s.push([ n, "ContentFile" ]);
n = "styles.xml";
r.file(n, id(e, t));
a.push([ n, "text/xml" ]);
s.push([ n, "StylesFile" ]);
n = "manifest.rdf";
r.file(n, function(e, t) {
var r = [ Ue ];
r.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n');
for (var n = 0; n != e.length; ++n) {
r.push(Cr(e[n][0], e[n][1]));
r.push(_r("", e[n][0]));
}
r.push(Cr("", "Document", "pkg"));
r.push("</rdf:RDF>");
return r.join("");
}(s));
a.push([ n, "application/rdf+xml" ]);
n = "meta.xml";
r.file(n, Tr(e, t));
a.push([ n, "text/xml" ]);
s.push([ n, "MetadataFile" ]);
n = "META-INF/manifest.xml";
r.file(n, function(e, t) {
var r = [ Ue ];
r.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n');
r.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n');
for (var n = 0; n < e.length; ++n) r.push('  <manifest:file-entry manifest:full-path="' + e[n][0] + '" manifest:media-type="' + e[n][1] + '"/>\n');
r.push("</manifest:manifest>");
return r.join("");
}(a));
return r;
}
function ld(e) {
return function(t, r) {
for (var n = 0, a = 0; a < t.SheetNames.length; ++a) t.SheetNames[a] == r.sheet && (n = a);
if (0 == n && r.sheet && t.SheetNames[0] != r.sheet) throw new Error("Sheet not found: " + r.sheet);
return e.from_sheet(t.Sheets[t.SheetNames[n]], r, t);
};
}
var cd = ld(td), hd = ld({
from_sheet: Pd
}), ud = ld(El), dd = ld(Sl), pd = ld(Bl), md = ld({
from_sheet: function(e, t) {
t || (t = {});
t.FS = "\t";
t.RS = "\n";
var r = Pd(e, t);
return "undefined" == typeof cptable ? r : "ÿþ" + cptable.utils.encode(1200, r);
}
});
function gd(e) {
return function(t) {
for (var r = 0; r != e.length; ++r) {
var n = e[r];
void 0 === t[n[0]] && (t[n[0]] = n[1]);
"n" === n[2] && (t[n[0]] = Number(t[n[0]]));
}
};
}
var bd = gd([ [ "cellNF", !1 ], [ "cellHTML", !0 ], [ "cellFormula", !0 ], [ "cellStyles", !1 ], [ "cellText", !0 ], [ "cellDates", !1 ], [ "sheetStubs", !1 ], [ "sheetRows", 0, "n" ], [ "bookDeps", !1 ], [ "bookSheets", !1 ], [ "bookProps", !1 ], [ "bookFiles", !1 ], [ "bookVBA", !1 ], [ "password", "" ], [ "WTF", !1 ] ]), vd = gd([ [ "cellDates", !1 ], [ "bookSST", !1 ], [ "bookType", "xlsx" ], [ "compression", !1 ], [ "WTF", !1 ] ]);
function Ed(e, t) {
if (!e) return 0;
try {
e = t.map(function(t) {
t.id || (t.id = t.strRelID);
return [ t.name, e["!id"][t.id].Target, function(e) {
return gr.WS.indexOf(e) > -1 ? "sheet" : gr.CS && e == gr.CS ? "chart" : gr.DS && e == gr.DS ? "dialog" : gr.MS && e == gr.MS ? "macro" : e && e.length ? e : "sheet";
}(e["!id"][t.id].Type) ];
});
} catch (e) {
return null;
}
return e && 0 !== e.length ? e : null;
}
function Sd(e, t, r, n, a, s, i, o, f, l, c) {
try {
a[n] = vr(z(e, r, !0), t);
var h = V(e, t);
switch (i) {
case "sheet":
s[n] = pu(h, t, o, a[n], f, l, c);
break;

case "chart":
var u = mu(h, t, o, a[n]);
s[n] = u;
if (!u || !u["!chart"]) break;
var d = X(u["!chart"].Target, t), p = br(d), m = X(function(e, t) {
if (!e) return "??";
var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || [ "", "" ])[1];
return t["!id"][r].Target;
}(z(e, d, !0), vr(z(e, p, !0), d)), d), g = br(m);
u = Zh(z(e, m, !0), 0, 0, vr(z(e, g, !0), m), 0, u);
break;

case "macro":
s[n] = function(e, t, r, n, a, s, i) {
return t.slice(-4), {
"!type": "macro"
};
}(0, t, 0, a[n]);
break;

case "dialog":
s[n] = function(e, t, r, n, a, s, i) {
return t.slice(-4), {
"!type": "dialog"
};
}(0, t, 0, a[n]);
}
} catch (e) {
if (o.WTF) throw e;
}
}
var Bd = function(e) {
return "/" != e.slice(-1);
};
function wd(e, t) {
g(m);
bd(t = t || {});
r();
if (H(e, "META-INF/manifest.xml")) return ad(e, t);
if (H(e, "objectdata.xml")) return ad(e, t);
var a, s, i = B(e.files).filter(Bd).sort(), o = function(e, t) {
var r = {
workbooks: [],
sheets: [],
charts: [],
dialogs: [],
macros: [],
rels: [],
strs: [],
comments: [],
coreprops: [],
extprops: [],
custprops: [],
themes: [],
styles: [],
calcchains: [],
vba: [],
drawings: [],
TODO: [],
xmlns: ""
};
if (!e || !e.match) return r;
var n = {};
(e.match(j) || []).forEach(function(e) {
var t = $(e);
switch (t[0].replace(K, "<")) {
case "<?xml":
break;

case "<Types":
r.xmlns = t["xmlns" + (t[0].match(/<(\w+):/) || [ "", "" ])[1]];
break;

case "<Default":
n[t.Extension] = t.ContentType;
break;

case "<Override":
void 0 !== r[hr[t.ContentType]] && r[hr[t.ContentType]].push(t.PartName);
}
});
if (r.xmlns !== He.CT) throw new Error("Unknown Namespace: " + r.xmlns);
r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "";
r.sst = r.strs.length > 0 ? r.strs[0] : "";
r.style = r.styles.length > 0 ? r.styles[0] : "";
r.defaults = n;
delete r.calcchains;
return r;
}(z(e, "[Content_Types].xml")), f = !1;
0 === o.workbooks.length && V(e, s = "xl/workbook.xml", !0) && o.workbooks.push(s);
if (0 === o.workbooks.length) {
if (!W(e, s = "xl/workbook.bin")) throw new Error("Could not find workbook");
o.workbooks.push(s);
f = !0;
}
"bin" == o.workbooks[0].slice(-3) && (f = !0);
f && n(1200);
var l = {}, c = {};
if (!t.bookSheets && !t.bookProps) {
vh = [];
o.sst && (vh = vu(V(e, o.sst.replace(/^\//, "")), o.sst, t));
t.cellStyles && o.themes.length && (l = bu(z(e, o.themes[0].replace(/^\//, ""), !0) || "", o.themes[0], t));
o.style && (c = gu(V(e, o.style.replace(/^\//, "")), o.style, l, t));
}
var h = du(V(e, o.workbooks[0].replace(/^\//, "")), o.workbooks[0], t), u = {}, d = "";
if (0 !== o.coreprops.length) {
(d = z(e, o.coreprops[0].replace(/^\//, ""), !0)) && (u = function(e) {
for (var t = {}, r = 0; r < kr.length; ++r) {
var n = kr[r], a = e.match(xr[r]);
null != a && a.length > 0 && (t[n[1]] = a[1]);
"date" === n[2] && t[n[1]] && (t[n[1]] = O(t[n[1]]));
}
return t;
}(d));
0 !== o.extprops.length && (d = z(e, o.extprops[0].replace(/^\//, ""), !0)) && function(e, t) {
var r = {};
t || (t = {});
yr.forEach(function(n) {
switch (n[2]) {
case "string":
t[n[1]] = (e.match(ue(n[0])) || [])[1];
break;

case "bool":
t[n[1]] = "true" === (e.match(ue(n[0])) || [])[1];
break;

case "raw":
var a = e.match(new RegExp("<" + n[0] + "[^>]*>(.*)</" + n[0] + ">"));
a && a.length > 0 && (r[n[1]] = a[1]);
}
});
if (r.HeadingPairs && r.TitlesOfParts) for (var n = ge(r.HeadingPairs), a = ge(r.TitlesOfParts).map(function(e) {
return e.v;
}), s = 0, i = 0, o = 0; o !== n.length; o += 2) {
i = +n[o + 1].v;
switch (n[o].v) {
case "Worksheets":
case "工作表":
case "Листы":
case "ワークシート":
case "גליונות עבודה":
case "Arbeitsblätter":
case "Çalışma Sayfaları":
case "Feuilles de calcul":
case "Fogli di lavoro":
case "Folhas de cálculo":
case "Planilhas":
case "Werkbladen":
t.Worksheets = i;
t.SheetNames = a.slice(s, s + i);
break;

case "Named Ranges":
case "Benannte Bereiche":
t.NamedRanges = i;
t.DefinedNames = a.slice(s, s + i);
break;

case "Charts":
case "Diagramme":
t.Chartsheets = i;
t.ChartNames = a.slice(s, s + i);
}
s += i;
}
}(d, u);
}
var p = {};
t.bookSheets && !t.bookProps || 0 !== o.custprops.length && (d = z(e, o.custprops[0].replace(/^\//, ""), !0)) && (p = function(e, t) {
var r = {}, n = "", a = e.match(Dr);
if (a) for (var s = 0; s != a.length; ++s) {
var i = a[s], o = $(i);
switch (o[0]) {
case "<?xml":
case "<Properties":
break;

case "<property":
n = o.name;
break;

case "</property>":
n = null;
break;

default:
if (0 === i.indexOf("<vt:")) {
var f = i.split(">"), l = f[0].substring(4), c = f[1];
switch (l) {
case "lpstr":
case "bstr":
case "lpwstr":
r[n] = q(c);
break;

case "bool":
r[n] = oe(c);
break;

case "i1":
case "i2":
case "i4":
case "i8":
case "int":
case "uint":
r[n] = parseInt(c, 10);
break;

case "r4":
case "r8":
case "decimal":
r[n] = parseFloat(c);
break;

case "filetime":
case "date":
r[n] = O(c);
break;

case "cy":
case "error":
r[n] = q(c);
break;

default:
t.WTF && "undefined" != typeof console && console.warn("Unexpected", i, l, f);
}
} else if ("</" === i.substr(0, 2)) ; else if (t.WTF) throw new Error(i);
}
}
return r;
}(d, t));
var b = {};
if (t.bookSheets || t.bookProps) {
h.Sheets ? a = h.Sheets.map(function(e) {
return e.name;
}) : u.Worksheets && u.SheetNames.length > 0 && (a = u.SheetNames);
if (t.bookProps) {
b.Props = u;
b.Custprops = p;
}
t.bookSheets && "undefined" != typeof a && (b.SheetNames = a);
if (t.bookSheets ? b.SheetNames : t.bookProps) return b;
}
a = {};
var v = {};
t.bookDeps && o.calcchain && (v = Su(V(e, o.calcchain.replace(/^\//, "")), o.calcchain));
var E, S = 0, w = {}, C = h.Sheets;
u.Worksheets = C.length;
u.SheetNames = [];
for (var _ = 0; _ != C.length; ++_) u.SheetNames[_] = C[_].name;
var T = f ? "bin" : "xml", k = "xl/_rels/workbook." + T + ".rels", x = vr(z(e, k, !0), k);
x && (x = Ed(x, h.Sheets));
var A = V(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
for (S = 0; S != u.Worksheets; ++S) {
var I = "sheet";
if (x && x[S]) {
E = "xl/" + x[S][1].replace(/[\/]?xl\//, "");
I = x[S][2];
} else E = (E = "xl/worksheets/sheet" + (S + 1 - A) + "." + T).replace(/sheet0\./, "sheet.");
Sd(e, E, E.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), u.SheetNames[S], w, a, I, t, h, l, c);
}
o.comments && function(e, t, r, n, a) {
for (var s = 0; s != t.length; ++s) {
var i = t[s], o = Eu(V(e, i.replace(/^\//, ""), !0), i, a);
if (o && o.length) for (var f = B(r), l = 0; l != f.length; ++l) {
var c = f[l], h = n[c];
h && h[i] && Fc(0, r[c], o);
}
}
}(e, o.comments, a, w, t);
b = {
Directory: o,
Workbook: h,
Props: u,
Custprops: p,
Deps: v,
Sheets: a,
SheetNames: u.SheetNames,
Strings: vh,
Styles: c,
Themes: l,
SSF: m.get_table()
};
if (t.bookFiles) {
b.keys = i;
b.files = e.files;
}
t.bookVBA && (o.vba.length > 0 ? b.vbaraw = V(e, o.vba[0].replace(/^\//, ""), !0) : o.defaults && "application/vnd.ms-office.vbaProject" === o.defaults.bin && (b.vbaraw = V(e, "xl/vbaProject.bin", !0)));
return b;
}
function Cd(e, t) {
var r = "Version", n = e.find(r);
if (!n) throw new Error("ECMA-376 Encrypted file missing " + r);
(function(e, t) {
var r = {};
r.id = e.read_shift(0, "lpp4");
r.R = Nl(e, 4);
r.U = Nl(e, 4);
r.W = Nl(e, 4);
})(n.content);
r = "DataSpaceMap";
if (!(n = e.find(r))) throw new Error("ECMA-376 Encrypted file missing " + r);
var a = function(e, t) {
var r = [];
e.l += 4;
for (var n = e.read_shift(4); n-- > 0; ) r.push(Ml(e));
return r;
}(n.content);
if (1 != a.length || 1 != a[0].comps.length || 0 != a[0].comps[0].t || "StrongEncryptionDataSpace" != a[0].name || "EncryptedPackage" != a[0].comps[0].v) throw new Error("ECMA-376 Encrypted file bad " + r);
r = "StrongEncryptionDataSpace";
if (!(n = e.find(r))) throw new Error("ECMA-376 Encrypted file missing " + r);
var s = function(e, t) {
var r = [];
e.l += 4;
for (var n = e.read_shift(4); n-- > 0; ) r.push(e.read_shift(0, "lpp4"));
return r;
}(n.content);
if (1 != s.length || "StrongEncryptionTransform" != s[0]) throw new Error("ECMA-376 Encrypted file bad " + r);
r = "!Primary";
if (!(n = e.find(r))) throw new Error("ECMA-376 Encrypted file missing " + r);
Ll(n.content);
r = "EncryptionInfo";
if (!(n = e.find(r))) throw new Error("ECMA-376 Encrypted file missing " + r);
Wl(n.content);
throw new Error("File is password-protected");
}
function _d(e, t) {
Dc = 1024;
if ("ods" == t.bookType) return fd(e, t);
e && !e.SSF && (e.SSF = m.get_table());
if (e && e.SSF) {
g(m);
m.load_table(e.SSF);
t.revssf = C(e.SSF);
t.revssf[e.SSF[65535]] = 0;
t.ssf = e.SSF;
}
t.rels = {};
t.wbrels = {};
t.Strings = [];
t.Strings.Count = 0;
t.Strings.Unique = 0;
var r = "xlsb" == t.bookType ? "bin" : "xml", n = "xlsb" == t.bookType || "xlsm" == t.bookType, a = {
workbooks: [],
sheets: [],
charts: [],
dialogs: [],
macros: [],
rels: [],
strs: [],
comments: [],
coreprops: [],
extprops: [],
custprops: [],
themes: [],
styles: [],
calcchains: [],
vba: [],
drawings: [],
TODO: [],
xmlns: ""
};
vd(t = t || {});
var s = new R(), i = "", o = 0;
t.cellXfs = [];
Ch(t.cellXfs, {}, {
revssf: {
General: 0
}
});
e.Props || (e.Props = {});
i = "docProps/core.xml";
s.file(i, function(e, t) {
var r = t || {}, n = [ Ue, Ar ], a = {};
if (!e && !r.Props) return n.join("");
if (e) {
null != e.CreatedDate && Ir("dcterms:created", "string" == typeof e.CreatedDate ? e.CreatedDate : Be(e.CreatedDate, r.WTF), {
"xsi:type": "dcterms:W3CDTF"
}, n, a);
null != e.ModifiedDate && Ir("dcterms:modified", "string" == typeof e.ModifiedDate ? e.ModifiedDate : Be(e.ModifiedDate, r.WTF), {
"xsi:type": "dcterms:W3CDTF"
}, n, a);
}
for (var s = 0; s != kr.length; ++s) {
var i = kr[s], o = r.Props && null != r.Props[i[1]] ? r.Props[i[1]] : e ? e[i[1]] : null;
!0 === o ? o = "1" : !1 === o ? o = "0" : "number" == typeof o && (o = String(o));
null != o && Ir(i[0], o, null, n, a);
}
if (n.length > 2) {
n[n.length] = "</cp:coreProperties>";
n[1] = n[1].replace("/>", ">");
}
return n.join("");
}(e.Props, t));
a.coreprops.push(i);
Br(t.rels, 2, i, gr.CORE_PROPS);
i = "docProps/app.xml";
e.Props && e.Props.SheetNames || (e.Workbook && e.Workbook.Sheets ? e.Props.SheetNames = e.SheetNames.map(function(t, r) {
return [ 2 != (e.Workbook.Sheets[r] || {}).Hidden, t ];
}).filter(function(e) {
return e[0];
}).map(function(e) {
return e[1];
}) : e.Props.SheetNames = e.SheetNames);
e.Props.Worksheets = e.Props.SheetNames.length;
s.file(i, function(e, t) {
var r = [], n = Se;
e || (e = {});
e.Application = "SheetJS";
r[r.length] = Ue;
r[r.length] = Rr;
yr.forEach(function(t) {
if (void 0 !== e[t[1]]) {
var a;
switch (t[2]) {
case "string":
a = String(e[t[1]]);
break;

case "bool":
a = e[t[1]] ? "true" : "false";
}
void 0 !== a && (r[r.length] = n(t[0], a));
}
});
r[r.length] = n("HeadingPairs", n("vt:vector", n("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + n("vt:variant", n("vt:i4", String(e.Worksheets))), {
size: 2,
baseType: "variant"
}));
r[r.length] = n("TitlesOfParts", n("vt:vector", e.SheetNames.map(function(e) {
return "<vt:lpstr>" + te(e) + "</vt:lpstr>";
}).join(""), {
size: e.Worksheets,
baseType: "lpstr"
}));
if (r.length > 2) {
r[r.length] = "</Properties>";
r[1] = r[1].replace("/>", ">");
}
return r.join("");
}(e.Props));
a.extprops.push(i);
Br(t.rels, 3, i, gr.EXT_PROPS);
if (e.Custprops !== e.Props && B(e.Custprops || {}).length > 0) {
i = "docProps/custom.xml";
s.file(i, Fr(e.Custprops));
a.custprops.push(i);
Br(t.rels, 4, i, gr.CUST_PROPS);
}
i = "xl/workbook." + r;
s.file(i, Bu(e, i, t));
a.workbooks.push(i);
Br(t.rels, 1, i, gr.WB);
for (o = 1; o <= e.SheetNames.length; ++o) {
var f = {
"!id": {}
}, l = e.Sheets[e.SheetNames[o - 1]];
switch ((l || {})["!type"] || "sheet") {
case "chart":
default:
i = "xl/worksheets/sheet" + o + "." + r;
s.file(i, wu(o - 1, i, t, e, f));
a.sheets.push(i);
Br(t.wbrels, -1, "worksheets/sheet" + o + "." + r, gr.WS[0]);
}
if (l) {
var c = l["!comments"];
if (c && c.length > 0) {
var h = "xl/comments" + o + "." + r;
s.file(h, _u(c, h, t));
a.comments.push(h);
Br(f, -1, "../comments" + o + "." + r, gr.CMNT);
}
l["!legacy"] && s.file("xl/drawings/vmlDrawing" + o + ".vml", Oc(o, l["!comments"]));
delete l["!comments"];
delete l["!legacy"];
}
f["!id"].rId1 && s.file(br(i), Sr(f));
}
if (null != t.Strings && t.Strings.length > 0) {
i = "xl/sharedStrings." + r;
s.file(i, Cu(t.Strings, i, t));
a.strs.push(i);
Br(t.wbrels, -1, "sharedStrings." + r, gr.SST);
}
i = "xl/theme/theme1.xml";
s.file(i, Ac(e.Themes, t));
a.themes.push(i);
Br(t.wbrels, -1, "theme/theme1.xml", gr.THEME);
i = "xl/styles." + r;
s.file(i, function(e, t, r) {
return (".bin" === t.slice(-4) ? wc : uc)(e, r);
}(e, i, t));
a.styles.push(i);
Br(t.wbrels, -1, "styles." + r, gr.STY);
if (e.vbaraw && n) {
i = "xl/vbaProject.bin";
s.file(i, e.vbaraw);
a.vba.push(i);
Br(t.wbrels, -1, "vbaProject.bin", gr.VBA);
}
s.file("[Content_Types].xml", function(e, t) {
var r, n = [];
n[n.length] = Ue;
n[n.length] = pr;
n = n.concat(mr);
var a = function(a) {
if (e[a] && e[a].length > 0) {
r = e[a][0];
n[n.length] = Se("Override", null, {
PartName: ("/" == r[0] ? "" : "/") + r,
ContentType: ur[a][t.bookType || "xlsx"]
});
}
}, s = function(r) {
(e[r] || []).forEach(function(e) {
n[n.length] = Se("Override", null, {
PartName: ("/" == e[0] ? "" : "/") + e,
ContentType: ur[r][t.bookType || "xlsx"]
});
});
}, i = function(t) {
(e[t] || []).forEach(function(e) {
n[n.length] = Se("Override", null, {
PartName: ("/" == e[0] ? "" : "/") + e,
ContentType: dr[t][0]
});
});
};
a("workbooks");
s("sheets");
s("charts");
i("themes");
[ "strs", "styles" ].forEach(a);
[ "coreprops", "extprops", "custprops" ].forEach(i);
i("vba");
i("comments");
i("drawings");
if (n.length > 2) {
n[n.length] = "</Types>";
n[1] = n[1].replace("/>", ">");
}
return n.join("");
}(a, t));
s.file("_rels/.rels", Sr(t.rels));
s.file("xl/_rels/workbook." + r + ".rels", Sr(t.wbrels));
delete t.revssf;
delete t.ssf;
return s;
}
function Td(e, t) {
var r = "";
switch ((t || {}).type || "base64") {
case "buffer":
return [ e[0], e[1], e[2], e[3] ];

case "base64":
r = f.decode(e.substr(0, 24));
break;

case "binary":
r = e;
break;

case "array":
return [ e[0], e[1], e[2], e[3] ];

default:
throw new Error("Unrecognized type " + (t ? t.type : "undefined"));
}
return [ r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3) ];
}
function kd(e, t) {
var r = e, n = [ 0 ], a = t || {};
Eh = {};
a.dateNF && (Eh.dateNF = a.dateNF);
a.type || (a.type = l && Buffer.isBuffer(e) ? "buffer" : "base64");
if ("file" == a.type) {
a.type = "buffer";
r = y.readFileSync(e);
}
switch ((n = Td(r, a))[0]) {
case 208:
return function(e, t) {
return e.find("EncryptedPackage") ? Cd(e) : Ku(e, t);
}(E.read(r, a), a);

case 9:
return Ku(h("base64" === a.type ? f.decode(r) : r), a);

case 60:
return Lu(r, a);

case 73:
if (68 == n[1]) return function(e, t) {
var r = t || {}, n = !!r.WTF;
r.WTF = !0;
try {
var a = El.to_workbook(e, r);
r.WTF = n;
return a;
} catch (a) {
r.WTF = n;
if (!a.message.match(/SYLK bad record ID/) && n) throw a;
return Bl.to_workbook(e, t);
}
}(r, a);
break;

case 84:
if (65 == n[1] && 66 == n[2] && 76 == n[3]) return Sl.to_workbook(r, a);
break;

case 80:
if (75 == n[1] && n[2] < 32 && n[3] < 32) return function(e, t) {
var r, n = e, a = t || {};
a.type || (a.type = l && Buffer.isBuffer(e) ? "buffer" : "base64");
switch (a.type) {
case "base64":
r = new R(n, {
base64: !0
});
break;

case "binary":
case "array":
r = new R(n, {
base64: !1
});
break;

case "buffer":
r = new R(n);
break;

default:
throw new Error("Unrecognized type " + a.type);
}
return wd(r, a);
}(r, a);
break;

case 239:
return 60 == n[3] ? Lu(r, a) : Bl.to_workbook(r, a);

case 255:
if (254 == n[1]) return function(e, t) {
var r = e;
"base64" == t.type && (r = f.decode(r));
r = cptable.utils.decode(1200, r.slice(2));
t.type = "binary";
return 60 == r.charCodeAt(0) ? Lu(r, t) : Bl.to_workbook(r, t);
}(r, a);
break;

case 0:
if (0 == n[1] && n[2] >= 2 && 0 == n[3]) return wl.to_workbook(r, a);
break;

case 3:
case 131:
case 139:
return vl.to_workbook(r, a);
}
if (n[2] <= 12 && n[3] <= 31) return vl.to_workbook(r, a);
if (32 > n[0] || n[0] > 127) throw new Error("Unsupported file " + n.join("|"));
return Bl.to_workbook(r, a);
}
function xd(e, t) {
var r = t || {};
r.type = "file";
return kd(e, r);
}
function Ad(e, t) {
switch (t.type) {
case "base64":
return f.encode(e);

case "binary":
return e;

case "file":
return y.writeFileSync(t.file, e, "utf8");

case "buffer":
return l ? new Buffer(e, "utf8") : e.split("").map(function(e) {
return e.charCodeAt(0);
});
}
throw new Error("Unrecognized type " + t.type);
}
function Id(e, t) {
iu(e);
var r = t || {};
switch (r.bookType || "xlsb") {
case "xml":
case "xlml":
return Ad(function(e, t) {
var r = [];
r.push(Uu(e, t));
r.push("");
r.push("");
for (var n = 0; n < e.SheetNames.length; ++n) r.push(Se("Worksheet", Vu(n, t, e), {
"ss:Name": te(e.SheetNames[n])
}));
return Ue + Se("Workbook", r.join(""), {
xmlns: We.ss,
"xmlns:o": We.o,
"xmlns:x": We.x,
"xmlns:ss": We.ss,
"xmlns:dt": We.dt,
"xmlns:html": We.html
});
}(e, r), r);

case "slk":
case "sylk":
return Ad(ud(e, r), r);

case "html":
return Ad(cd(e, r), r);

case "txt":
return function(e, t) {
switch (t.type) {
case "base64":
return f.encode(e);

case "binary":
return e;

case "file":
return y.writeFileSync(t.file, e, "binary");

case "buffer":
return l ? new Buffer(e, "utf8") : e.split("").map(function(e) {
return e.charCodeAt(0);
});
}
throw new Error("Unrecognized type " + t.type);
}(md(e, r), r);

case "csv":
return Ad(hd(e, r), r);

case "dif":
return Ad(dd(e, r), r);

case "prn":
return Ad(pd(e, r), r);

case "fods":
return Ad(fd(e, r), r);

case "biff2":
return function(e, t) {
switch (t.type) {
case "base64":
case "binary":
for (var r = "", n = 0; n < e.length; ++n) r += String.fromCharCode(e[n]);
return "base64" == t.type ? f.encode(r) : r;

case "file":
return y.writeFileSync(t.file, e);

case "buffer":
return e;

default:
throw new Error("Unrecognized type " + t.type);
}
}(ed(e, r), r);

case "xlsx":
case "xlsm":
case "xlsb":
case "ods":
return function(e, t) {
var r = t || {}, n = _d(e, r), a = {};
r.compression && (a.compression = "DEFLATE");
switch (r.type) {
case "base64":
a.type = "base64";
break;

case "binary":
a.type = "string";
break;

case "buffer":
case "file":
a.type = "nodebuffer";
break;

default:
throw new Error("Unrecognized type " + r.type);
}
return "file" === r.type ? y.writeFileSync(r.file, n.generate(a)) : n.generate(a);
}(e, r);

default:
throw new Error("Unrecognized bookType |" + r.bookType + "|");
}
}
function yd(e) {
if (!e.bookType) switch (e.file.slice(e.file.lastIndexOf(".")).toLowerCase()) {
case ".xlsx":
e.bookType = "xlsx";
break;

case ".xlsm":
e.bookType = "xlsm";
break;

case ".xlsb":
e.bookType = "xlsb";
break;

case ".fods":
e.bookType = "fods";
break;

case ".xlml":
e.bookType = "xlml";
break;

case ".sylk":
e.bookType = "sylk";
break;

case ".html":
e.bookType = "html";
break;

case ".xls":
e.bookType = "biff2";
break;

case ".xml":
e.bookType = "xml";
break;

case ".ods":
e.bookType = "ods";
break;

case ".csv":
e.bookType = "csv";
break;

case ".txt":
e.bookType = "txt";
break;

case ".dif":
e.bookType = "dif";
break;

case ".prn":
e.bookType = "prn";
break;

case ".slk":
e.bookType = "sylk";
break;

case ".htm":
e.bookType = "html";
}
}
function Rd(e, t, r) {
var n = r || {};
n.type = "file";
n.file = t;
yd(n);
return Id(e, n);
}
function Dd(e, t) {
if (null == e || null == e["!ref"]) return [];
var r = {
t: "n",
v: 0
}, n = 0, a = 1, s = [], i = !0, o = 0, f = "", l = {
s: {
r: 0,
c: 0
},
e: {
r: 0,
c: 0
}
}, c = null != t ? t : {}, h = c.raw, u = c.defval, d = null != c.range ? c.range : e["!ref"];
1 === c.header ? n = 1 : "A" === c.header ? n = 2 : Array.isArray(c.header) && (n = 3);
switch (typeof d) {
case "string":
l = _t(d);
break;

case "number":
(l = _t(e["!ref"])).s.r = d;
break;

default:
l = d;
}
n > 0 && (a = 0);
var p = ut(l.s.r), m = new Array(l.e.c - l.s.c + 1), g = new Array(l.e.r - l.s.r - a + 1), b = 0, v = 0, E = Array.isArray(e), S = l.s.r, B = 0, w = 0;
E && !e[S] && (e[S] = []);
for (B = l.s.c; B <= l.e.c; ++B) {
m[B] = gt(B);
r = E ? e[S][B] : e[m[B] + p];
switch (n) {
case 1:
s[B] = B - l.s.c;
break;

case 2:
s[B] = m[B];
break;

case 3:
s[B] = c.header[B - l.s.c];
break;

default:
if (null == r) continue;
f = o = kt(r, null, c);
v = 0;
for (w = 0; w < s.length; ++w) s[w] == f && (f = o + "_" + ++v);
s[B] = f;
}
}
var C = 1 === n ? [] : {};
for (S = l.s.r + a; S <= l.e.r; ++S) {
p = ut(S);
i = !0;
if (1 === n) C = []; else {
C = {};
if (Object.defineProperty) try {
Object.defineProperty(C, "__rowNum__", {
value: S,
enumerable: !1
});
} catch (e) {
C.__rowNum__ = S;
} else C.__rowNum__ = S;
}
if (!E || e[S]) for (B = l.s.c; B <= l.e.c; ++B) if (void 0 !== (r = E ? e[S][B] : e[m[B] + p]) && void 0 !== r.t) {
o = r.v;
switch (r.t) {
case "z":
if (null == o) break;
continue;

case "e":
continue;

case "s":
case "d":
case "b":
case "n":
break;

default:
throw new Error("unrecognized type " + r.t);
}
if (null != s[B]) {
if (null == o) if (void 0 !== u) C[s[B]] = u; else {
if (!h || null !== o) continue;
C[s[B]] = null;
} else C[s[B]] = h ? o : kt(r, o, c);
i = !1;
}
} else {
if (void 0 === u) continue;
if (null != s[B]) {
C[s[B]] = u;
i = !1;
}
}
(!1 === i || (1 === n ? !1 !== c.blankrows : c.blankrows)) && (g[b++] = C);
}
g.length = b;
return g;
}
var Od = /"/g;
function Fd(e, t, r, n, a, s, i, o) {
for (var f = !0, l = "", c = "", h = ut(r), u = t.s.c; u <= t.e.c; ++u) {
var d = o.dense ? (e[r] || [])[u] : e[n[u] + h];
if (null == d) c = ""; else if (null != d.v) {
f = !1;
c = "" + kt(d, null, o);
for (var p = 0, m = 0; p !== c.length; ++p) if ((m = c.charCodeAt(p)) === a || m === s || 34 === m) {
c = '"' + c.replace(Od, '""') + '"';
break;
}
"ID" == c && (c = '"ID"');
} else if (null == d.f || d.F) c = ""; else {
f = !1;
(c = "=" + d.f).indexOf(",") >= 0 && (c = '"' + c.replace(Od, '""') + '"');
}
l += (u === t.s.c ? "" : i) + c;
}
return !1 === o.blankrows && f ? null : l;
}
function Pd(e, t) {
var r = [], n = null == t ? {} : t;
if (null == e || null == e["!ref"]) return "";
var a = _t(e["!ref"]), s = void 0 !== n.FS ? n.FS : ",", i = s.charCodeAt(0), o = void 0 !== n.RS ? n.RS : "\n", f = o.charCodeAt(0), l = new RegExp(("|" == s ? "\\|" : s) + "+$"), c = "", h = [];
n.dense = Array.isArray(e);
for (var u = a.s.c; u <= a.e.c; ++u) h[u] = gt(u);
for (var d = a.s.r; d <= a.e.r; ++d) if (null != (c = Fd(e, a, d, h, i, f, s, n))) {
n.strip && (c = c.replace(l, ""));
r.push(c + o);
}
delete n.dense;
return r.join("");
}
function Nd(e) {
var t, r = "", n = "";
if (null == e || null == e["!ref"]) return [];
var a, s = _t(e["!ref"]), i = "", o = [], f = new Array((s.e.r - s.s.r + 1) * (s.e.c - s.s.c + 1)), l = 0, c = Array.isArray(e);
for (a = s.s.c; a <= s.e.c; ++a) o[a] = gt(a);
for (var h = s.s.r; h <= s.e.r; ++h) {
i = ut(h);
for (a = s.s.c; a <= s.e.c; ++a) {
r = o[a] + i;
t = c ? (e[h] || [])[a] : e[r];
n = "";
if (void 0 !== t) {
if (null != t.F) {
r = t.F;
if (!t.f) continue;
n = t.f;
-1 == r.indexOf(":") && (r = r + ":" + r);
}
if (null != t.f) n = t.f; else {
if ("z" == t.t) continue;
if ("n" == t.t && null != t.v) n = "" + t.v; else if ("b" == t.t) n = t.v ? "TRUE" : "FALSE"; else if (void 0 !== t.w) n = "'" + t.w; else {
if (void 0 === t.v) continue;
n = "s" == t.t ? "'" + t.v : "" + t.v;
}
}
f[l++] = r + "=" + n;
}
}
}
f.length = l;
return f;
}
var Md = {
encode_col: gt,
encode_row: ut,
encode_cell: Bt,
encode_range: Ct,
decode_col: mt,
decode_row: ht,
split_cell: Et,
decode_cell: St,
decode_range: wt,
format_cell: kt,
get_formulae: Nd,
make_csv: Pd,
make_json: Dd,
make_formulae: Nd,
aoa_to_sheet: At,
json_to_sheet: function(e, t) {
for (var r, n = t || {}, a = {}, s = {
s: {
c: 0,
r: 0
},
e: {
c: 0,
r: e.length
}
}, i = n.header || [], o = 0, f = 0; f != e.length; ++f) Object.keys(e[f]).filter(function(t) {
return e[f].hasOwnProperty(t);
}).forEach(function(t) {
-1 == (o = i.indexOf(t)) && (i[o = i.length] = t);
var s = e[f][t], l = "z", c = "";
if ("number" == typeof s) l = "n"; else if ("boolean" == typeof s) l = "b"; else if ("string" == typeof s) l = "s"; else if (s instanceof Date) {
l = "d";
if (!n.cellDates) {
l = "n";
s = k(s);
}
c = n.dateNF || m._table[14];
}
a[Bt({
c: o,
r: f + 1
})] = r = {
t: l,
v: s
};
c && (r.z = c);
});
s.e.c = i.length - 1;
for (o = 0; o < i.length; ++o) a[gt(o) + "1"] = {
t: "s",
v: i[o]
};
a["!ref"] = Ct(s);
return a;
},
table_to_sheet: rd,
table_to_book: function(e, t) {
return xt(rd(e, t), t);
},
sheet_to_csv: Pd,
sheet_to_json: Dd,
sheet_to_html: td.from_sheet,
sheet_to_formulae: Nd,
sheet_to_row_object_array: Dd
};
(function(e) {
e.consts = e.consts || {};
function t(e, t, r) {
return null != e[t] ? e[t] : e[t] = r;
}
function r(e, t, n) {
return "string" == typeof t ? e[t] || (e[t] = {
t: "z"
}) : r(e, Bt("number" != typeof t ? t : {
r: t,
c: n || 0
}));
}
e.book_new = function() {
return {
SheetNames: [],
Sheets: {}
};
};
e.book_append_sheet = function(e, t, r) {
if (!r) for (var n = 1; n <= 65535 && -1 != e.SheetNames.indexOf(r = "Sheet" + n); ++n) ;
if (!r) throw new Error("Too many worksheets");
su(r);
if (e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!");
e.SheetNames.push(r);
e.Sheets[r] = t;
};
e.book_set_sheet_visibility = function(e, r, n) {
t(e, "Workbook", {});
t(e.Workbook, "Sheets", []);
var a = function(e, t) {
if ("number" == typeof t) {
if (t >= 0 && e.SheetNames.length > t) return t;
throw new Error("Cannot find sheet # " + t);
}
if ("string" == typeof t) {
var r = e.SheetNames.indexOf(t);
if (r > -1) return r;
throw new Error("Cannot find sheet name |" + t + "|");
}
throw new Error("Cannot find sheet |" + t + "|");
}(e, r);
t(e.Workbook.Sheets, a, {});
switch (n) {
case 0:
case 1:
case 2:
break;

default:
throw new Error("Bad sheet visibility setting " + n);
}
e.Workbook.Sheets[a].Hidden = n;
};
(function(t) {
t.forEach(function(t) {
e.consts[t[0]] = t[1];
});
})([ [ "SHEET_VISIBLE", 0 ], [ "SHEET_HIDDEN", 1 ], [ "SHEET_VERY_HIDDEN", 2 ] ]);
e.cell_set_number_format = function(e, t) {
e.z = t;
return e;
};
e.cell_set_hyperlink = function(e, t, r) {
if (t) {
e.l = {
Target: t
};
r && (e.l.Tooltip = r);
} else delete e.l;
return e;
};
e.cell_add_comment = function(e, t, r) {
e.c || (e.c = []);
e.c.push({
t: t,
a: r || "SheetJS"
});
};
e.sheet_set_array_formula = function(e, t, n) {
for (var a = "string" != typeof t ? t : _t(t), s = "string" == typeof t ? t : Ct(t), i = a.s.r; i <= a.e.r; ++i) for (var o = a.s.c; o <= a.e.c; ++o) {
var f = r(e, i, o);
f.t = "n";
f.F = s;
delete f.v;
i == a.s.r && o == a.s.c && (f.f = n);
}
return e;
};
})(Md);
l && "undefined" != typeof require && function() {
var t = require("stream").Readable;
e.stream = {
to_html: function(e, r) {
var n = t(), a = r || {}, s = null != a.header ? a.header : td.BEGIN, i = null != a.footer ? a.footer : td.END;
n.push(s);
var o = wt(e["!ref"]);
a.dense = Array.isArray(e);
n.push(td._preamble(e, o, a));
var f = o.s.r, l = !1;
n._read = function() {
if (f > o.e.r) {
if (!l) {
l = !0;
n.push("</table>" + i);
}
return n.push(null);
}
for (;f <= o.e.r; ) {
n.push(td._row(e, o, f, a));
++f;
break;
}
};
return n;
},
to_csv: function(e, r) {
var n = t(), a = null == r ? {} : r;
if (null == e || null == e["!ref"]) {
n.push(null);
return n;
}
var s = _t(e["!ref"]), i = void 0 !== a.FS ? a.FS : ",", o = i.charCodeAt(0), f = void 0 !== a.RS ? a.RS : "\n", l = f.charCodeAt(0), c = new RegExp(("|" == i ? "\\|" : i) + "+$"), h = "", u = [];
a.dense = Array.isArray(e);
for (var d = s.s.c; d <= s.e.c; ++d) u[d] = gt(d);
var p = s.s.r;
n._read = function() {
if (p > s.e.r) return n.push(null);
for (;p <= s.e.r; ) {
h = Fd(e, s, p, u, o, l, i, a);
++p;
if (null != h) {
a.strip && (h = h.replace(c, ""));
n.push(h + f);
break;
}
}
};
return n;
}
};
}();
e.parse_xlscfb = Ku;
e.parse_ods = ad;
e.parse_fods = sd;
e.write_ods = fd;
e.parse_zip = wd;
e.read = kd;
e.readFile = xd;
e.readFileSync = xd;
e.write = Id;
e.writeFile = Rd;
e.writeFileSync = Rd;
e.writeFileAsync = function(e, t, r, n) {
var a = r || {};
a.type = "file";
a.file = e;
yd(a);
a.type = "buffer";
var s = n;
s instanceof Function || (s = r);
return y.writeFile(e, Id(t, a), s);
};
e.utils = Md;
e.SSF = m;
})("undefined" != typeof exports ? exports : XLSX);

var XLS = XLSX, ODS = XLSX;