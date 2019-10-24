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
return function e(t, r, i) {
function n(s, o) {
if (!r[s]) {
if (!t[s]) {
var f = "function" == typeof require && require;
if (!o && f) return f(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + s + "'");
}
var d = r[s] = {
exports: {}
};
t[s][0].call(d.exports, function(e) {
var r = t[s][1][e];
return n(r || e);
}, d, d.exports, e, t, r, i);
}
return r[s].exports;
}
for (var a = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
1: [ function(e, t, r) {
"use strict";
var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
r.encode = function(e, t) {
for (var r, n, a, s, o, f, d, l = "", h = 0; h < e.length; ) {
r = e.charCodeAt(h++);
n = e.charCodeAt(h++);
a = e.charCodeAt(h++);
s = r >> 2;
o = (3 & r) << 4 | n >> 4;
f = (15 & n) << 2 | a >> 6;
d = 63 & a;
isNaN(n) ? f = d = 64 : isNaN(a) && (d = 64);
l = l + i.charAt(s) + i.charAt(o) + i.charAt(f) + i.charAt(d);
}
return l;
};
r.decode = function(e, t) {
var r, n, a, s, o, f, d, l = "", h = 0;
e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
for (;h < e.length; ) {
s = i.indexOf(e.charAt(h++));
o = i.indexOf(e.charAt(h++));
f = i.indexOf(e.charAt(h++));
d = i.indexOf(e.charAt(h++));
r = s << 2 | o >> 4;
n = (15 & o) << 4 | f >> 2;
a = (3 & f) << 6 | d;
l += String.fromCharCode(r);
64 != f && (l += String.fromCharCode(n));
64 != d && (l += String.fromCharCode(a));
}
return l;
};
}, {} ],
2: [ function(e, t, r) {
"use strict";
function i() {
this.compressedSize = 0;
this.uncompressedSize = 0;
this.crc32 = 0;
this.compressionMethod = null;
this.compressedContent = null;
}
i.prototype = {
getContent: function() {
return null;
},
getCompressedContent: function() {
return null;
}
};
t.exports = i;
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
var i = e("./utils"), n = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ];
t.exports = function(e, t) {
if ("undefined" == typeof e || !e.length) return 0;
var r = "string" !== i.getTypeOf(e);
"undefined" == typeof t && (t = 0);
var a = 0;
t ^= -1;
for (var s = 0, o = e.length; s < o; s++) {
a = r ? e[s] : e.charCodeAt(s);
t = t >>> 8 ^ n[255 & (t ^ a)];
}
return -1 ^ t;
};
}, {
"./utils": 21
} ],
5: [ function(e, t, r) {
"use strict";
var i = e("./utils");
function n(e) {
this.data = null;
this.length = 0;
this.index = 0;
}
n.prototype = {
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
return i.transformTo("string", this.readData(e));
},
readData: function(e) {},
lastIndexOfSignature: function(e) {},
readDate: function() {
var e = this.readInt(4);
return new Date(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1);
}
};
t.exports = n;
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
var i = e("./utils");
r.string2binary = function(e) {
return i.string2binary(e);
};
r.string2Uint8Array = function(e) {
return i.transformTo("uint8array", e);
};
r.uint8Array2String = function(e) {
return i.transformTo("string", e);
};
r.string2Blob = function(e) {
var t = i.transformTo("arraybuffer", e);
return i.arrayBuffer2Blob(t);
};
r.arrayBuffer2Blob = function(e) {
return i.arrayBuffer2Blob(e);
};
r.transformTo = function(e, t) {
return i.transformTo(e, t);
};
r.getTypeOf = function(e) {
return i.getTypeOf(e);
};
r.checkSupport = function(e) {
return i.checkSupport(e);
};
r.MAX_VALUE_16BITS = i.MAX_VALUE_16BITS;
r.MAX_VALUE_32BITS = i.MAX_VALUE_32BITS;
r.pretty = function(e) {
return i.pretty(e);
};
r.findCompression = function(e) {
return i.findCompression(e);
};
r.isRegExp = function(e) {
return i.isRegExp(e);
};
}, {
"./utils": 21
} ],
8: [ function(e, t, r) {
"use strict";
var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, n = e("pako");
r.uncompressInputType = i ? "uint8array" : "array";
r.compressInputType = i ? "uint8array" : "array";
r.magic = "\b\0";
r.compress = function(e) {
return n.deflateRaw(e);
};
r.uncompress = function(e) {
return n.inflateRaw(e);
};
}, {
pako: 24
} ],
9: [ function(e, t, r) {
"use strict";
var i = e("./base64");
function n(e, t) {
if (!(this instanceof n)) return new n(e, t);
this.files = {};
this.comment = null;
this.root = "";
e && this.load(e, t);
this.clone = function() {
var e = new n();
for (var t in this) "function" != typeof this[t] && (e[t] = this[t]);
return e;
};
}
n.prototype = e("./object");
n.prototype.load = e("./load");
n.support = e("./support");
n.defaults = e("./defaults");
n.utils = e("./deprecatedPublicUtils");
n.base64 = {
encode: function(e) {
return i.encode(e);
},
decode: function(e) {
return i.decode(e);
}
};
n.compressions = e("./compressions");
t.exports = n;
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
var i = e("./base64"), n = e("./zipEntries");
t.exports = function(e, t) {
var r, a, s, o;
(t = t || {}).base64 && (e = i.decode(e));
r = (a = new n(e, t)).files;
for (s = 0; s < r.length; s++) {
o = r[s];
this.file(o.fileName, o.decompressed, {
binary: !0,
optimizedBinaryString: !0,
date: o.date,
dir: o.dir,
comment: o.fileComment.length ? o.fileComment : null,
createFolders: t.createFolders
});
}
a.zipComment.length && (this.comment = a.zipComment);
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
var i = e("./uint8ArrayReader");
function n(e) {
this.data = e;
this.length = this.data.length;
this.index = 0;
}
n.prototype = new i();
n.prototype.readData = function(e) {
this.checkOffset(e);
var t = this.data.slice(this.index, this.index + e);
this.index += e;
return t;
};
t.exports = n;
}, {
"./uint8ArrayReader": 18
} ],
13: [ function(e, t, r) {
"use strict";
var i = e("./support"), n = e("./utils"), a = e("./crc32"), s = e("./signature"), o = e("./defaults"), f = e("./base64"), d = e("./compressions"), l = e("./compressedObject"), h = e("./nodeBuffer"), u = e("./utf8"), c = e("./stringWriter"), _ = e("./uint8ArrayWriter"), p = function(e) {
if (e._data instanceof l) {
e._data = e._data.getContent();
e.options.binary = !0;
e.options.base64 = !1;
if ("uint8array" === n.getTypeOf(e._data)) {
var t = e._data;
e._data = new Uint8Array(t.length);
0 !== t.length && e._data.set(t, 0);
}
}
return e._data;
}, m = function(e) {
var t = p(e);
return "string" === n.getTypeOf(t) ? !e.options.binary && i.nodebuffer ? h(t, "utf-8") : e.asBinary() : t;
}, g = function(e) {
var t = p(this);
if (null === t || "undefined" == typeof t) return "";
this.options.base64 && (t = f.decode(t));
t = e && this.options.binary ? A.utf8decode(t) : n.transformTo("string", t);
e || this.options.binary || (t = n.transformTo("string", A.utf8encode(t)));
return t;
}, b = function(e, t, r) {
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
b.prototype = {
asText: function() {
return g.call(this, !0);
},
asBinary: function() {
return g.call(this, !1);
},
asNodeBuffer: function() {
var e = m(this);
return n.transformTo("nodebuffer", e);
},
asUint8Array: function() {
var e = m(this);
return n.transformTo("uint8array", e);
},
asArrayBuffer: function() {
return this.asUint8Array().buffer;
}
};
var w = function(e, t) {
var r, i = "";
for (r = 0; r < t; r++) {
i += String.fromCharCode(255 & e);
e >>>= 8;
}
return i;
}, v = function() {
var e, t, r = {};
for (e = 0; e < arguments.length; e++) for (t in arguments[e]) arguments[e].hasOwnProperty(t) && "undefined" == typeof r[t] && (r[t] = arguments[e][t]);
return r;
}, y = function(e, t, r) {
var i, a = n.getTypeOf(t);
(r = function(e) {
!0 !== (e = e || {}).base64 || null !== e.binary && void 0 !== e.binary || (e.binary = !0);
(e = v(e, o)).date = e.date || new Date();
null !== e.compression && (e.compression = e.compression.toUpperCase());
return e;
}(r)).createFolders && (i = k(e)) && x.call(this, i, !0);
if (r.dir || null === t || "undefined" == typeof t) {
r.base64 = !1;
r.binary = !1;
t = null;
} else if ("string" === a) r.binary && !r.base64 && !0 !== r.optimizedBinaryString && (t = n.string2binary(t)); else {
r.base64 = !1;
r.binary = !0;
if (!(a || t instanceof l)) throw new Error("The data of '" + e + "' is in an unsupported format !");
"arraybuffer" === a && (t = n.transformTo("uint8array", t));
}
var s = new b(e, t, r);
this.files[e] = s;
return s;
}, k = function(e) {
"/" == e.slice(-1) && (e = e.substring(0, e.length - 1));
var t = e.lastIndexOf("/");
return t > 0 ? e.substring(0, t) : "";
}, x = function(e, t) {
"/" != e.slice(-1) && (e += "/");
t = "undefined" != typeof t && t;
this.files[e] || y.call(this, e, null, {
dir: !0,
createFolders: t
});
return this.files[e];
}, z = function(e, t) {
var r, i = new l();
if (e._data instanceof l) {
i.uncompressedSize = e._data.uncompressedSize;
i.crc32 = e._data.crc32;
if (0 === i.uncompressedSize || e.dir) {
t = d.STORE;
i.compressedContent = "";
i.crc32 = 0;
} else if (e._data.compressionMethod === t.magic) i.compressedContent = e._data.getCompressedContent(); else {
r = e._data.getContent();
i.compressedContent = t.compress(n.transformTo(t.compressInputType, r));
}
} else {
if (!(r = m(e)) || 0 === r.length || e.dir) {
t = d.STORE;
r = "";
}
i.uncompressedSize = r.length;
i.crc32 = a(r);
i.compressedContent = t.compress(n.transformTo(t.compressInputType, r));
}
i.compressedSize = i.compressedContent.length;
i.compressionMethod = t.magic;
return i;
}, C = function(e, t, r, i) {
r.compressedContent;
var o, f, d, l, h = n.transformTo("string", u.utf8encode(t.name)), c = t.comment || "", _ = n.transformTo("string", u.utf8encode(c)), p = h.length !== t.name.length, m = _.length !== c.length, g = t.options, b = "", v = "", y = "";
d = t._initialMetadata.dir !== t.dir ? t.dir : g.dir;
o = (l = t._initialMetadata.date !== t.date ? t.date : g.date).getHours();
o <<= 6;
o |= l.getMinutes();
o <<= 5;
o |= l.getSeconds() / 2;
f = l.getFullYear() - 1980;
f <<= 4;
f |= l.getMonth() + 1;
f <<= 5;
f |= l.getDate();
if (p) {
v = w(1, 1) + w(a(h), 4) + h;
b += "up" + w(v.length, 2) + v;
}
if (m) {
y = w(1, 1) + w(this.crc32(_), 4) + _;
b += "uc" + w(y.length, 2) + y;
}
var k = "";
k += "\n\0";
k += p || m ? "\0\b" : "\0\0";
k += r.compressionMethod;
k += w(o, 2);
k += w(f, 2);
k += w(r.crc32, 4);
k += w(r.compressedSize, 4);
k += w(r.uncompressedSize, 4);
k += w(h.length, 2);
k += w(b.length, 2);
return {
fileRecord: s.LOCAL_FILE_HEADER + k + h + b,
dirRecord: s.CENTRAL_FILE_HEADER + "\0" + k + w(_.length, 2) + "\0\0\0\0" + (!0 === d ? "\0\0\0" : "\0\0\0\0") + w(i, 4) + h + b + _,
compressedObject: r
};
}, A = {
load: function(e, t) {
throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
},
filter: function(e) {
var t, r, i, n, a = [];
for (t in this.files) if (this.files.hasOwnProperty(t)) {
i = this.files[t];
n = new b(i.name, i._data, v(i.options));
r = t.slice(this.root.length, t.length);
t.slice(0, this.root.length) === this.root && e(r, n) && a.push(n);
}
return a;
},
file: function(e, t, r) {
if (1 === arguments.length) {
if (n.isRegExp(e)) {
var i = e;
return this.filter(function(e, t) {
return !t.dir && i.test(e);
});
}
return this.filter(function(t, r) {
return !r.dir && t === e;
})[0] || null;
}
e = this.root + e;
y.call(this, e, t, r);
return this;
},
folder: function(e) {
if (!e) return this;
if (n.isRegExp(e)) return this.filter(function(t, r) {
return r.dir && e.test(t);
});
var t = this.root + e, r = x.call(this, t), i = this.clone();
i.root = r.name;
return i;
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
}), i = 0; i < r.length; i++) delete this.files[r[i].name];
return this;
},
generate: function(e) {
e = v(e || {}, {
base64: !0,
compression: "STORE",
type: "base64",
comment: null
});
n.checkSupport(e.type);
var t, r, i = [], a = 0, o = 0, l = n.transformTo("string", this.utf8encode(e.comment || this.comment || ""));
for (var h in this.files) if (this.files.hasOwnProperty(h)) {
var u = this.files[h], p = u.options.compression || e.compression.toUpperCase(), m = d[p];
if (!m) throw new Error(p + " is not a valid compression method !");
var g = z.call(this, u, m), b = C.call(this, h, u, g, a);
a += b.fileRecord.length + g.compressedSize;
o += b.dirRecord.length;
i.push(b);
}
var y;
y = s.CENTRAL_DIRECTORY_END + "\0\0\0\0" + w(i.length, 2) + w(i.length, 2) + w(o, 4) + w(a, 4) + w(l.length, 2) + l;
var k = e.type.toLowerCase();
t = "uint8array" === k || "arraybuffer" === k || "blob" === k || "nodebuffer" === k ? new _(a + o + y.length) : new c(a + o + y.length);
for (r = 0; r < i.length; r++) {
t.append(i[r].fileRecord);
t.append(i[r].compressedObject.compressedContent);
}
for (r = 0; r < i.length; r++) t.append(i[r].dirRecord);
t.append(y);
var x = t.finalize();
switch (e.type.toLowerCase()) {
case "uint8array":
case "arraybuffer":
case "nodebuffer":
return n.transformTo(e.type.toLowerCase(), x);

case "blob":
return n.arrayBuffer2Blob(n.transformTo("arraybuffer", x));

case "base64":
return e.base64 ? f.encode(x) : x;

default:
return x;
}
},
crc32: function(e, t) {
return a(e, t);
},
utf8encode: function(e) {
return n.transformTo("string", u.utf8encode(e));
},
utf8decode: function(e) {
return u.utf8decode(e);
}
};
t.exports = A;
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
var i = e("./dataReader"), n = e("./utils");
function a(e, t) {
this.data = e;
t || (this.data = n.string2binary(this.data));
this.length = this.data.length;
this.index = 0;
}
a.prototype = new i();
a.prototype.byteAt = function(e) {
return this.data.charCodeAt(e);
};
a.prototype.lastIndexOfSignature = function(e) {
return this.data.lastIndexOf(e);
};
a.prototype.readData = function(e) {
this.checkOffset(e);
var t = this.data.slice(this.index, this.index + e);
this.index += e;
return t;
};
t.exports = a;
}, {
"./dataReader": 5,
"./utils": 21
} ],
16: [ function(e, t, r) {
"use strict";
var i = e("./utils"), n = function() {
this.data = [];
};
n.prototype = {
append: function(e) {
e = i.transformTo("string", e);
this.data.push(e);
},
finalize: function() {
return this.data.join("");
}
};
t.exports = n;
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
var i = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
i.append(t);
r.blob = 0 === i.getBlob("application/zip").size;
} catch (e) {
r.blob = !1;
}
}
}
}).call(this, "undefined" != typeof Buffer ? Buffer : void 0);
}, {} ],
18: [ function(e, t, r) {
"use strict";
var i = e("./dataReader");
function n(e) {
if (e) {
this.data = e;
this.length = this.data.length;
this.index = 0;
}
}
n.prototype = new i();
n.prototype.byteAt = function(e) {
return this.data[e];
};
n.prototype.lastIndexOfSignature = function(e) {
for (var t = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2), n = e.charCodeAt(3), a = this.length - 4; a >= 0; --a) if (this.data[a] === t && this.data[a + 1] === r && this.data[a + 2] === i && this.data[a + 3] === n) return a;
return -1;
};
n.prototype.readData = function(e) {
this.checkOffset(e);
if (0 === e) return new Uint8Array(0);
var t = this.data.subarray(this.index, this.index + e);
this.index += e;
return t;
};
t.exports = n;
}, {
"./dataReader": 5
} ],
19: [ function(e, t, r) {
"use strict";
var i = e("./utils"), n = function(e) {
this.data = new Uint8Array(e);
this.index = 0;
};
n.prototype = {
append: function(e) {
if (0 !== e.length) {
e = i.transformTo("uint8array", e);
this.data.set(e, this.index);
this.index += e.length;
}
},
finalize: function() {
return this.data;
}
};
t.exports = n;
}, {
"./utils": 21
} ],
20: [ function(e, t, r) {
"use strict";
for (var i = e("./utils"), n = e("./support"), a = e("./nodeBuffer"), s = new Array(256), o = 0; o < 256; o++) s[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
s[254] = s[254] = 1;
var f = function(e, t) {
var r;
(t = t || e.length) > e.length && (t = e.length);
r = t - 1;
for (;r >= 0 && 128 == (192 & e[r]); ) r--;
return r < 0 ? t : 0 === r ? t : r + s[e[r]] > t ? r : t;
}, d = function(e) {
var t, r, n, a, o = e.length, f = new Array(2 * o);
for (r = 0, t = 0; t < o; ) if ((n = e[t++]) < 128) f[r++] = n; else if ((a = s[n]) > 4) {
f[r++] = 65533;
t += a - 1;
} else {
n &= 2 === a ? 31 : 3 === a ? 15 : 7;
for (;a > 1 && t < o; ) {
n = n << 6 | 63 & e[t++];
a--;
}
if (a > 1) f[r++] = 65533; else if (n < 65536) f[r++] = n; else {
n -= 65536;
f[r++] = 55296 | n >> 10 & 1023;
f[r++] = 56320 | 1023 & n;
}
}
f.length !== r && (f.subarray ? f = f.subarray(0, r) : f.length = r);
return i.applyFromCharCode(f);
};
r.utf8encode = function(e) {
return n.nodebuffer ? a(e, "utf-8") : function(e) {
var t, r, i, a, s, o = e.length, f = 0;
for (a = 0; a < o; a++) {
if (55296 == (64512 & (r = e.charCodeAt(a))) && a + 1 < o && 56320 == (64512 & (i = e.charCodeAt(a + 1)))) {
r = 65536 + (r - 55296 << 10) + (i - 56320);
a++;
}
f += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
}
t = n.uint8array ? new Uint8Array(f) : new Array(f);
for (s = 0, a = 0; s < f; a++) {
if (55296 == (64512 & (r = e.charCodeAt(a))) && a + 1 < o && 56320 == (64512 & (i = e.charCodeAt(a + 1)))) {
r = 65536 + (r - 55296 << 10) + (i - 56320);
a++;
}
if (r < 128) t[s++] = r; else if (r < 2048) {
t[s++] = 192 | r >>> 6;
t[s++] = 128 | 63 & r;
} else if (r < 65536) {
t[s++] = 224 | r >>> 12;
t[s++] = 128 | r >>> 6 & 63;
t[s++] = 128 | 63 & r;
} else {
t[s++] = 240 | r >>> 18;
t[s++] = 128 | r >>> 12 & 63;
t[s++] = 128 | r >>> 6 & 63;
t[s++] = 128 | 63 & r;
}
}
return t;
}(e);
};
r.utf8decode = function(e) {
if (n.nodebuffer) return i.transformTo("nodebuffer", e).toString("utf-8");
for (var t = [], r = 0, a = (e = i.transformTo(n.uint8array ? "uint8array" : "array", e)).length; r < a; ) {
var s = f(e, Math.min(r + 65536, a));
n.uint8array ? t.push(d(e.subarray(r, s))) : t.push(d(e.slice(r, s)));
r = s;
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
var i = e("./support"), n = e("./compressions"), a = e("./nodeBuffer");
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
function s(e) {
return e;
}
function o(e, t) {
for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
return t;
}
function f(e) {
var t = 65536, i = [], n = e.length, s = r.getTypeOf(e), o = 0, f = !0;
try {
switch (s) {
case "uint8array":
String.fromCharCode.apply(null, new Uint8Array(0));
break;

case "nodebuffer":
String.fromCharCode.apply(null, a(0));
}
} catch (e) {
f = !1;
}
if (!f) {
for (var d = "", l = 0; l < e.length; l++) d += String.fromCharCode(e[l]);
return d;
}
for (;o < n && t > 1; ) try {
"array" === s || "nodebuffer" === s ? i.push(String.fromCharCode.apply(null, e.slice(o, Math.min(o + t, n)))) : i.push(String.fromCharCode.apply(null, e.subarray(o, Math.min(o + t, n))));
o += t;
} catch (e) {
t = Math.floor(t / 2);
}
return i.join("");
}
r.applyFromCharCode = f;
function d(e, t) {
for (var r = 0; r < e.length; r++) t[r] = e[r];
return t;
}
var l = {};
l.string = {
string: s,
array: function(e) {
return o(e, new Array(e.length));
},
arraybuffer: function(e) {
return l.string.uint8array(e).buffer;
},
uint8array: function(e) {
return o(e, new Uint8Array(e.length));
},
nodebuffer: function(e) {
return o(e, a(e.length));
}
};
l.array = {
string: f,
array: s,
arraybuffer: function(e) {
return new Uint8Array(e).buffer;
},
uint8array: function(e) {
return new Uint8Array(e);
},
nodebuffer: function(e) {
return a(e);
}
};
l.arraybuffer = {
string: function(e) {
return f(new Uint8Array(e));
},
array: function(e) {
return d(new Uint8Array(e), new Array(e.byteLength));
},
arraybuffer: s,
uint8array: function(e) {
return new Uint8Array(e);
},
nodebuffer: function(e) {
return a(new Uint8Array(e));
}
};
l.uint8array = {
string: f,
array: function(e) {
return d(e, new Array(e.length));
},
arraybuffer: function(e) {
return e.buffer;
},
uint8array: s,
nodebuffer: function(e) {
return a(e);
}
};
l.nodebuffer = {
string: f,
array: function(e) {
return d(e, new Array(e.length));
},
arraybuffer: function(e) {
return l.nodebuffer.uint8array(e).buffer;
},
uint8array: function(e) {
return d(e, new Uint8Array(e.length));
},
nodebuffer: s
};
r.transformTo = function(e, t) {
t || (t = "");
if (!e) return t;
r.checkSupport(e);
var i = r.getTypeOf(t);
return l[i][e](t);
};
r.getTypeOf = function(e) {
return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : i.nodebuffer && a.test(e) ? "nodebuffer" : i.uint8array && e instanceof Uint8Array ? "uint8array" : i.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
};
r.checkSupport = function(e) {
if (!i[e.toLowerCase()]) throw new Error(e + " is not supported by this browser");
};
r.MAX_VALUE_16BITS = 65535;
r.MAX_VALUE_32BITS = -1;
r.pretty = function(e) {
var t, r, i = "";
for (r = 0; r < (e || "").length; r++) i += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
return i;
};
r.findCompression = function(e) {
for (var t in n) if (n.hasOwnProperty(t) && n[t].magic === e) return n[t];
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
var i = e("./stringReader"), n = e("./nodeBufferReader"), a = e("./uint8ArrayReader"), s = e("./utils"), o = e("./signature"), f = e("./zipEntry"), d = e("./support"), l = e("./object");
function h(e, t) {
this.files = [];
this.loadOptions = t;
e && this.load(e);
}
h.prototype = {
checkSignature: function(e) {
var t = this.reader.readString(4);
if (t !== e) throw new Error("Corrupted zip or bug : unexpected signature (" + s.pretty(t) + ", expected " + s.pretty(e) + ")");
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
this.zipComment = l.utf8decode(this.zipComment);
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
for (var e, t, r, i = this.zip64EndOfCentralSize - 44; 0 < i; ) {
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
if (this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
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
var t = s.getTypeOf(e);
"string" !== t || d.uint8array ? this.reader = "nodebuffer" === t ? new n(e) : new a(s.transformTo("uint8array", e)) : this.reader = new i(e, this.loadOptions.optimizedBinaryString);
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
var i = e("./stringReader"), n = e("./utils"), a = e("./compressedObject"), s = e("./object");
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
var i = e.index;
e.setIndex(t);
var n = e.readData(r);
e.setIndex(i);
return n;
};
},
prepareContent: function(e, t, r, i, a) {
return function() {
var e = n.transformTo(i.uncompressInputType, this.getCompressedContent()), t = i.uncompress(e);
if (t.length !== a) throw new Error("Bug : uncompressed data size mismatch");
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
if (null === (t = n.findCompression(this.compressionMethod))) throw new Error("Corrupted zip : compression " + n.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
this.decompressed = new a();
this.decompressed.compressedSize = this.compressedSize;
this.decompressed.uncompressedSize = this.uncompressedSize;
this.decompressed.crc32 = this.crc32;
this.decompressed.compressionMethod = this.compressionMethod;
this.decompressed.getCompressedContent = this.prepareCompressedContent(e, e.index, this.compressedSize, t);
this.decompressed.getContent = this.prepareContent(e, e.index, this.compressedSize, t, this.uncompressedSize);
if (this.loadOptions.checkCRC32) {
this.decompressed = n.transformTo("string", this.decompressed.getContent());
if (s.crc32(this.decompressed) !== this.crc32) throw new Error("Corrupted zip : CRC32 mismatch");
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
var t = new i(this.extraFields[1].value);
this.uncompressedSize === n.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8));
this.compressedSize === n.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8));
this.localHeaderOffset === n.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8));
this.diskNumberStart === n.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4));
}
},
readExtraFields: function(e) {
var t, r, i, n = e.index;
this.extraFields = this.extraFields || {};
for (;e.index < n + this.extraFieldsLength; ) {
t = e.readInt(2);
r = e.readInt(2);
i = e.readString(r);
this.extraFields[t] = {
id: t,
length: r,
value: i
};
}
},
handleUTF8: function() {
if (this.useUTF8()) {
this.fileName = s.utf8decode(this.fileName);
this.fileComment = s.utf8decode(this.fileComment);
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
var t = new i(e.value);
return 1 !== t.readInt(1) ? null : s.crc32(this.fileName) !== t.readInt(4) ? null : s.utf8decode(t.readString(e.length - 5));
}
return null;
},
findExtraFieldUnicodeComment: function() {
var e = this.extraFields[25461];
if (e) {
var t = new i(e.value);
return 1 !== t.readInt(1) ? null : s.crc32(this.fileComment) !== t.readInt(4) ? null : s.utf8decode(t.readString(e.length - 5));
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
var i = {};
(0, e("./lib/utils/common").assign)(i, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants"));
t.exports = i;
}, {
"./lib/deflate": 25,
"./lib/inflate": 26,
"./lib/utils/common": 27,
"./lib/zlib/constants": 30
} ],
25: [ function(e, t, r) {
"use strict";
var i = e("./zlib/deflate.js"), n = e("./utils/common"), a = e("./utils/strings"), s = e("./zlib/messages"), o = e("./zlib/zstream"), f = function(e) {
this.options = n.assign({
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
var r = i.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
if (0 !== r) throw new Error(s[r]);
t.header && i.deflateSetHeader(this.strm, t.header);
};
f.prototype.push = function(e, t) {
var r, s, o = this.strm, f = this.options.chunkSize;
if (this.ended) return !1;
s = t === ~~t ? t : !0 === t ? 4 : 0;
o.input = "string" == typeof e ? a.string2buf(e) : e;
o.next_in = 0;
o.avail_in = o.input.length;
do {
if (0 === o.avail_out) {
o.output = new n.Buf8(f);
o.next_out = 0;
o.avail_out = f;
}
if (1 !== (r = i.deflate(o, s)) && 0 !== r) {
this.onEnd(r);
this.ended = !0;
return !1;
}
(0 === o.avail_out || 0 === o.avail_in && 4 === s) && ("string" === this.options.to ? this.onData(a.buf2binstring(n.shrinkBuf(o.output, o.next_out))) : this.onData(n.shrinkBuf(o.output, o.next_out)));
} while ((o.avail_in > 0 || 0 === o.avail_out) && 1 !== r);
if (4 === s) {
r = i.deflateEnd(this.strm);
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
0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = n.flattenChunks(this.chunks));
this.chunks = [];
this.err = e;
this.msg = this.strm.msg;
};
function d(e, t) {
var r = new f(t);
r.push(e, !0);
if (r.err) throw r.msg;
return r.result;
}
r.Deflate = f;
r.deflate = d;
r.deflateRaw = function(e, t) {
(t = t || {}).raw = !0;
return d(e, t);
};
r.gzip = function(e, t) {
(t = t || {}).gzip = !0;
return d(e, t);
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
var i = e("./zlib/inflate.js"), n = e("./utils/common"), a = e("./utils/strings"), s = e("./zlib/constants"), o = e("./zlib/messages"), f = e("./zlib/zstream"), d = e("./zlib/gzheader"), l = function(e) {
this.options = n.assign({
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
var r = i.inflateInit2(this.strm, t.windowBits);
if (r !== s.Z_OK) throw new Error(o[r]);
this.header = new d();
i.inflateGetHeader(this.strm, this.header);
};
l.prototype.push = function(e, t) {
var r, o, f, d, l, h = this.strm, u = this.options.chunkSize;
if (this.ended) return !1;
o = t === ~~t ? t : !0 === t ? s.Z_FINISH : s.Z_NO_FLUSH;
h.input = "string" == typeof e ? a.binstring2buf(e) : e;
h.next_in = 0;
h.avail_in = h.input.length;
do {
if (0 === h.avail_out) {
h.output = new n.Buf8(u);
h.next_out = 0;
h.avail_out = u;
}
if ((r = i.inflate(h, s.Z_NO_FLUSH)) !== s.Z_STREAM_END && r !== s.Z_OK) {
this.onEnd(r);
this.ended = !0;
return !1;
}
if (h.next_out && (0 === h.avail_out || r === s.Z_STREAM_END || 0 === h.avail_in && o === s.Z_FINISH)) if ("string" === this.options.to) {
f = a.utf8border(h.output, h.next_out);
d = h.next_out - f;
l = a.buf2string(h.output, f);
h.next_out = d;
h.avail_out = u - d;
d && n.arraySet(h.output, h.output, f, d, 0);
this.onData(l);
} else this.onData(n.shrinkBuf(h.output, h.next_out));
} while (h.avail_in > 0 && r !== s.Z_STREAM_END);
r === s.Z_STREAM_END && (o = s.Z_FINISH);
if (o === s.Z_FINISH) {
r = i.inflateEnd(this.strm);
this.onEnd(r);
this.ended = !0;
return r === s.Z_OK;
}
return !0;
};
l.prototype.onData = function(e) {
this.chunks.push(e);
};
l.prototype.onEnd = function(e) {
e === s.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = n.flattenChunks(this.chunks));
this.chunks = [];
this.err = e;
this.msg = this.strm.msg;
};
function h(e, t) {
var r = new l(t);
r.push(e, !0);
if (r.err) throw r.msg;
return r.result;
}
r.Inflate = l;
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
var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
r.assign = function(e) {
for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
var r = t.shift();
if (r) {
if ("object" != typeof r) throw new TypeError(r + "must be non-object");
for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i]);
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
var n = {
arraySet: function(e, t, r, i, n) {
if (t.subarray && e.subarray) e.set(t.subarray(r, r + i), n); else for (var a = 0; a < i; a++) e[n + a] = t[r + a];
},
flattenChunks: function(e) {
var t, r, i, n, a, s;
i = 0;
for (t = 0, r = e.length; t < r; t++) i += e[t].length;
s = new Uint8Array(i);
n = 0;
for (t = 0, r = e.length; t < r; t++) {
a = e[t];
s.set(a, n);
n += a.length;
}
return s;
}
}, a = {
arraySet: function(e, t, r, i, n) {
for (var a = 0; a < i; a++) e[n + a] = t[r + a];
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
r.assign(r, n);
} else {
r.Buf8 = Array;
r.Buf16 = Array;
r.Buf32 = Array;
r.assign(r, a);
}
};
r.setTyped(i);
}, {} ],
28: [ function(e, t, r) {
"use strict";
var i = e("./common"), n = !0, a = !0;
try {
String.fromCharCode.apply(null, [ 0 ]);
} catch (e) {
n = !1;
}
try {
String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
a = !1;
}
for (var s = new i.Buf8(256), o = 0; o < 256; o++) s[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
s[254] = s[254] = 1;
r.string2buf = function(e) {
var t, r, n, a, s, o = e.length, f = 0;
for (a = 0; a < o; a++) {
if (55296 == (64512 & (r = e.charCodeAt(a))) && a + 1 < o && 56320 == (64512 & (n = e.charCodeAt(a + 1)))) {
r = 65536 + (r - 55296 << 10) + (n - 56320);
a++;
}
f += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
}
t = new i.Buf8(f);
for (s = 0, a = 0; s < f; a++) {
if (55296 == (64512 & (r = e.charCodeAt(a))) && a + 1 < o && 56320 == (64512 & (n = e.charCodeAt(a + 1)))) {
r = 65536 + (r - 55296 << 10) + (n - 56320);
a++;
}
if (r < 128) t[s++] = r; else if (r < 2048) {
t[s++] = 192 | r >>> 6;
t[s++] = 128 | 63 & r;
} else if (r < 65536) {
t[s++] = 224 | r >>> 12;
t[s++] = 128 | r >>> 6 & 63;
t[s++] = 128 | 63 & r;
} else {
t[s++] = 240 | r >>> 18;
t[s++] = 128 | r >>> 12 & 63;
t[s++] = 128 | r >>> 6 & 63;
t[s++] = 128 | 63 & r;
}
}
return t;
};
function f(e, t) {
if (t < 65537 && (e.subarray && a || !e.subarray && n)) return String.fromCharCode.apply(null, i.shrinkBuf(e, t));
for (var r = "", s = 0; s < t; s++) r += String.fromCharCode(e[s]);
return r;
}
r.buf2binstring = function(e) {
return f(e, e.length);
};
r.binstring2buf = function(e) {
for (var t = new i.Buf8(e.length), r = 0, n = t.length; r < n; r++) t[r] = e.charCodeAt(r);
return t;
};
r.buf2string = function(e, t) {
var r, i, n, a, o = t || e.length, d = new Array(2 * o);
for (i = 0, r = 0; r < o; ) if ((n = e[r++]) < 128) d[i++] = n; else if ((a = s[n]) > 4) {
d[i++] = 65533;
r += a - 1;
} else {
n &= 2 === a ? 31 : 3 === a ? 15 : 7;
for (;a > 1 && r < o; ) {
n = n << 6 | 63 & e[r++];
a--;
}
if (a > 1) d[i++] = 65533; else if (n < 65536) d[i++] = n; else {
n -= 65536;
d[i++] = 55296 | n >> 10 & 1023;
d[i++] = 56320 | 1023 & n;
}
}
return f(d, i);
};
r.utf8border = function(e, t) {
var r;
(t = t || e.length) > e.length && (t = e.length);
r = t - 1;
for (;r >= 0 && 128 == (192 & e[r]); ) r--;
return r < 0 ? t : 0 === r ? t : r + s[e[r]] > t ? r : t;
};
}, {
"./common": 27
} ],
29: [ function(e, t, r) {
"use strict";
t.exports = function(e, t, r, i) {
for (var n = 65535 & e | 0, a = e >>> 16 & 65535 | 0, s = 0; 0 !== r; ) {
r -= s = r > 2e3 ? 2e3 : r;
do {
a = a + (n = n + t[i++] | 0) | 0;
} while (--s);
n %= 65521;
a %= 65521;
}
return n | a << 16 | 0;
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
var i = function() {
for (var e, t = [], r = 0; r < 256; r++) {
e = r;
for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
t[r] = e;
}
return t;
}();
t.exports = function(e, t, r, n) {
var a = i, s = n + r;
e ^= -1;
for (var o = n; o < s; o++) e = e >>> 8 ^ a[255 & (e ^ t[o])];
return -1 ^ e;
};
}, {} ],
32: [ function(e, t, r) {
"use strict";
var i = e("../utils/common"), n = e("./trees"), a = e("./adler32"), s = e("./crc32"), o = e("./messages"), f = 0, d = 1, l = 3, h = 4, u = 5, c = 0, _ = 1, p = -2, m = -3, g = -5, b = -1, w = 1, v = 2, y = 3, k = 4, x = 0, z = 2, C = 8, A = 9, E = 15, S = 8, B = 286, I = 30, T = 19, R = 2 * B + 1, O = 15, L = 3, D = 258, N = D + L + 1, U = 32, F = 42, Z = 69, M = 73, P = 91, j = 103, H = 113, X = 666, K = 1, V = 2, Y = 3, W = 4, q = 3;
function G(e, t) {
e.msg = o[t];
return t;
}
function J(e) {
return (e << 1) - (e > 4 ? 9 : 0);
}
function $(e) {
for (var t = e.length; --t >= 0; ) e[t] = 0;
}
function Q(e) {
var t = e.state, r = t.pending;
r > e.avail_out && (r = e.avail_out);
if (0 !== r) {
i.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out);
e.next_out += r;
t.pending_out += r;
e.total_out += r;
e.avail_out -= r;
t.pending -= r;
0 === t.pending && (t.pending_out = 0);
}
}
function ee(e, t) {
n._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
e.block_start = e.strstart;
Q(e.strm);
}
function te(e, t) {
e.pending_buf[e.pending++] = t;
}
function re(e, t) {
e.pending_buf[e.pending++] = t >>> 8 & 255;
e.pending_buf[e.pending++] = 255 & t;
}
function ie(e, t, r, n) {
var o = e.avail_in;
o > n && (o = n);
if (0 === o) return 0;
e.avail_in -= o;
i.arraySet(t, e.input, e.next_in, o, r);
1 === e.state.wrap ? e.adler = a(e.adler, t, o, r) : 2 === e.state.wrap && (e.adler = s(e.adler, t, o, r));
e.next_in += o;
e.total_in += o;
return o;
}
function ne(e, t) {
var r, i, n = e.max_chain_length, a = e.strstart, s = e.prev_length, o = e.nice_match, f = e.strstart > e.w_size - N ? e.strstart - (e.w_size - N) : 0, d = e.window, l = e.w_mask, h = e.prev, u = e.strstart + D, c = d[a + s - 1], _ = d[a + s];
e.prev_length >= e.good_match && (n >>= 2);
o > e.lookahead && (o = e.lookahead);
do {
if (d[(r = t) + s] === _ && d[r + s - 1] === c && d[r] === d[a] && d[++r] === d[a + 1]) {
a += 2;
r++;
do {} while (d[++a] === d[++r] && d[++a] === d[++r] && d[++a] === d[++r] && d[++a] === d[++r] && d[++a] === d[++r] && d[++a] === d[++r] && d[++a] === d[++r] && d[++a] === d[++r] && a < u);
i = D - (u - a);
a = u - D;
if (i > s) {
e.match_start = t;
s = i;
if (i >= o) break;
c = d[a + s - 1];
_ = d[a + s];
}
}
} while ((t = h[t & l]) > f && 0 != --n);
return s <= e.lookahead ? s : e.lookahead;
}
function ae(e) {
var t, r, n, a, s, o = e.w_size;
do {
a = e.window_size - e.lookahead - e.strstart;
if (e.strstart >= o + (o - N)) {
i.arraySet(e.window, e.window, o, o, 0);
e.match_start -= o;
e.strstart -= o;
e.block_start -= o;
t = r = e.hash_size;
do {
n = e.head[--t];
e.head[t] = n >= o ? n - o : 0;
} while (--r);
t = r = o;
do {
n = e.prev[--t];
e.prev[t] = n >= o ? n - o : 0;
} while (--r);
a += o;
}
if (0 === e.strm.avail_in) break;
r = ie(e.strm, e.window, e.strstart + e.lookahead, a);
e.lookahead += r;
if (e.lookahead + e.insert >= L) {
s = e.strstart - e.insert;
e.ins_h = e.window[s];
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask;
for (;e.insert; ) {
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + L - 1]) & e.hash_mask;
e.prev[s & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = s;
s++;
e.insert--;
if (e.lookahead + e.insert < L) break;
}
}
} while (e.lookahead < N && 0 !== e.strm.avail_in);
}
function se(e, t) {
for (var r, i; ;) {
if (e.lookahead < N) {
ae(e);
if (e.lookahead < N && t === f) return K;
if (0 === e.lookahead) break;
}
r = 0;
if (e.lookahead >= L) {
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + L - 1]) & e.hash_mask;
r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = e.strstart;
}
0 !== r && e.strstart - r <= e.w_size - N && (e.match_length = ne(e, r));
if (e.match_length >= L) {
i = n._tr_tally(e, e.strstart - e.match_start, e.match_length - L);
e.lookahead -= e.match_length;
if (e.match_length <= e.max_lazy_match && e.lookahead >= L) {
e.match_length--;
do {
e.strstart++;
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + L - 1]) & e.hash_mask;
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
i = n._tr_tally(e, 0, e.window[e.strstart]);
e.lookahead--;
e.strstart++;
}
if (i) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
}
e.insert = e.strstart < L - 1 ? e.strstart : L - 1;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? Y : W;
}
if (e.last_lit) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
return V;
}
function oe(e, t) {
for (var r, i, a; ;) {
if (e.lookahead < N) {
ae(e);
if (e.lookahead < N && t === f) return K;
if (0 === e.lookahead) break;
}
r = 0;
if (e.lookahead >= L) {
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + L - 1]) & e.hash_mask;
r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = e.strstart;
}
e.prev_length = e.match_length;
e.prev_match = e.match_start;
e.match_length = L - 1;
if (0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - N) {
e.match_length = ne(e, r);
e.match_length <= 5 && (e.strategy === w || e.match_length === L && e.strstart - e.match_start > 4096) && (e.match_length = L - 1);
}
if (e.prev_length >= L && e.match_length <= e.prev_length) {
a = e.strstart + e.lookahead - L;
i = n._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - L);
e.lookahead -= e.prev_length - 1;
e.prev_length -= 2;
do {
if (++e.strstart <= a) {
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + L - 1]) & e.hash_mask;
r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
e.head[e.ins_h] = e.strstart;
}
} while (0 != --e.prev_length);
e.match_available = 0;
e.match_length = L - 1;
e.strstart++;
if (i) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
} else if (e.match_available) {
(i = n._tr_tally(e, 0, e.window[e.strstart - 1])) && ee(e, !1);
e.strstart++;
e.lookahead--;
if (0 === e.strm.avail_out) return K;
} else {
e.match_available = 1;
e.strstart++;
e.lookahead--;
}
}
if (e.match_available) {
i = n._tr_tally(e, 0, e.window[e.strstart - 1]);
e.match_available = 0;
}
e.insert = e.strstart < L - 1 ? e.strstart : L - 1;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? Y : W;
}
if (e.last_lit) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
return V;
}
var fe, de = function(e, t, r, i, n) {
this.good_length = e;
this.max_lazy = t;
this.nice_length = r;
this.max_chain = i;
this.func = n;
};
fe = [ new de(0, 0, 0, 0, function(e, t) {
var r = 65535;
r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);
for (;;) {
if (e.lookahead <= 1) {
ae(e);
if (0 === e.lookahead && t === f) return K;
if (0 === e.lookahead) break;
}
e.strstart += e.lookahead;
e.lookahead = 0;
var i = e.block_start + r;
if (0 === e.strstart || e.strstart >= i) {
e.lookahead = e.strstart - i;
e.strstart = i;
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
if (e.strstart - e.block_start >= e.w_size - N) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
}
e.insert = 0;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? Y : W;
}
if (e.strstart > e.block_start) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
return K;
}), new de(4, 4, 8, 4, se), new de(4, 5, 16, 8, se), new de(4, 6, 32, 32, se), new de(4, 4, 16, 16, oe), new de(8, 16, 32, 32, oe), new de(8, 16, 128, 128, oe), new de(8, 32, 128, 256, oe), new de(32, 128, 258, 1024, oe), new de(32, 258, 258, 4096, oe) ];
function le(e) {
var t;
if (!e || !e.state) return G(e, p);
e.total_in = e.total_out = 0;
e.data_type = z;
(t = e.state).pending = 0;
t.pending_out = 0;
t.wrap < 0 && (t.wrap = -t.wrap);
t.status = t.wrap ? F : H;
e.adler = 2 === t.wrap ? 0 : 1;
t.last_flush = f;
n._tr_init(t);
return c;
}
function he(e) {
var t = le(e);
t === c && function(e) {
e.window_size = 2 * e.w_size;
$(e.head);
e.max_lazy_match = fe[e.level].max_lazy;
e.good_match = fe[e.level].good_length;
e.nice_match = fe[e.level].nice_length;
e.max_chain_length = fe[e.level].max_chain;
e.strstart = 0;
e.block_start = 0;
e.lookahead = 0;
e.insert = 0;
e.match_length = e.prev_length = L - 1;
e.match_available = 0;
e.ins_h = 0;
}(e.state);
return t;
}
function ue(e, t, r, n, a, s) {
if (!e) return p;
var o = 1;
t === b && (t = 6);
if (n < 0) {
o = 0;
n = -n;
} else if (n > 15) {
o = 2;
n -= 16;
}
if (a < 1 || a > A || r !== C || n < 8 || n > 15 || t < 0 || t > 9 || s < 0 || s > k) return G(e, p);
8 === n && (n = 9);
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
this.method = C;
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
this.dyn_ltree = new i.Buf16(2 * R);
this.dyn_dtree = new i.Buf16(2 * (2 * I + 1));
this.bl_tree = new i.Buf16(2 * (2 * T + 1));
$(this.dyn_ltree);
$(this.dyn_dtree);
$(this.bl_tree);
this.l_desc = null;
this.d_desc = null;
this.bl_desc = null;
this.bl_count = new i.Buf16(O + 1);
this.heap = new i.Buf16(2 * B + 1);
$(this.heap);
this.heap_len = 0;
this.heap_max = 0;
this.depth = new i.Buf16(2 * B + 1);
$(this.depth);
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
f.w_bits = n;
f.w_size = 1 << f.w_bits;
f.w_mask = f.w_size - 1;
f.hash_bits = a + 7;
f.hash_size = 1 << f.hash_bits;
f.hash_mask = f.hash_size - 1;
f.hash_shift = ~~((f.hash_bits + L - 1) / L);
f.window = new i.Buf8(2 * f.w_size);
f.head = new i.Buf16(f.hash_size);
f.prev = new i.Buf16(f.w_size);
f.lit_bufsize = 1 << a + 6;
f.pending_buf_size = 4 * f.lit_bufsize;
f.pending_buf = new i.Buf8(f.pending_buf_size);
f.d_buf = f.lit_bufsize >> 1;
f.l_buf = 3 * f.lit_bufsize;
f.level = t;
f.strategy = s;
f.method = r;
return he(e);
}
r.deflateInit = function(e, t) {
return ue(e, t, C, E, S, x);
};
r.deflateInit2 = ue;
r.deflateReset = he;
r.deflateResetKeep = le;
r.deflateSetHeader = function(e, t) {
if (!e || !e.state) return p;
if (2 !== e.state.wrap) return p;
e.state.gzhead = t;
return c;
};
r.deflate = function(e, t) {
var r, i, a, o;
if (!e || !e.state || t > u || t < 0) return e ? G(e, p) : p;
i = e.state;
if (!e.output || !e.input && 0 !== e.avail_in || i.status === X && t !== h) return G(e, 0 === e.avail_out ? g : p);
i.strm = e;
r = i.last_flush;
i.last_flush = t;
if (i.status === F) if (2 === i.wrap) {
e.adler = 0;
te(i, 31);
te(i, 139);
te(i, 8);
if (i.gzhead) {
te(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0));
te(i, 255 & i.gzhead.time);
te(i, i.gzhead.time >> 8 & 255);
te(i, i.gzhead.time >> 16 & 255);
te(i, i.gzhead.time >> 24 & 255);
te(i, 9 === i.level ? 2 : i.strategy >= v || i.level < 2 ? 4 : 0);
te(i, 255 & i.gzhead.os);
if (i.gzhead.extra && i.gzhead.extra.length) {
te(i, 255 & i.gzhead.extra.length);
te(i, i.gzhead.extra.length >> 8 & 255);
}
i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0));
i.gzindex = 0;
i.status = Z;
} else {
te(i, 0);
te(i, 0);
te(i, 0);
te(i, 0);
te(i, 0);
te(i, 9 === i.level ? 2 : i.strategy >= v || i.level < 2 ? 4 : 0);
te(i, q);
i.status = H;
}
} else {
var m = C + (i.w_bits - 8 << 4) << 8;
m |= (i.strategy >= v || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6;
0 !== i.strstart && (m |= U);
m += 31 - m % 31;
i.status = H;
re(i, m);
if (0 !== i.strstart) {
re(i, e.adler >>> 16);
re(i, 65535 & e.adler);
}
e.adler = 1;
}
if (i.status === Z) if (i.gzhead.extra) {
a = i.pending;
for (;i.gzindex < (65535 & i.gzhead.extra.length); ) {
if (i.pending === i.pending_buf_size) {
i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a));
Q(e);
a = i.pending;
if (i.pending === i.pending_buf_size) break;
}
te(i, 255 & i.gzhead.extra[i.gzindex]);
i.gzindex++;
}
i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a));
if (i.gzindex === i.gzhead.extra.length) {
i.gzindex = 0;
i.status = M;
}
} else i.status = M;
if (i.status === M) if (i.gzhead.name) {
a = i.pending;
do {
if (i.pending === i.pending_buf_size) {
i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a));
Q(e);
a = i.pending;
if (i.pending === i.pending_buf_size) {
o = 1;
break;
}
}
o = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0;
te(i, o);
} while (0 !== o);
i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a));
if (0 === o) {
i.gzindex = 0;
i.status = P;
}
} else i.status = P;
if (i.status === P) if (i.gzhead.comment) {
a = i.pending;
do {
if (i.pending === i.pending_buf_size) {
i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a));
Q(e);
a = i.pending;
if (i.pending === i.pending_buf_size) {
o = 1;
break;
}
}
o = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0;
te(i, o);
} while (0 !== o);
i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a));
0 === o && (i.status = j);
} else i.status = j;
if (i.status === j) if (i.gzhead.hcrc) {
i.pending + 2 > i.pending_buf_size && Q(e);
if (i.pending + 2 <= i.pending_buf_size) {
te(i, 255 & e.adler);
te(i, e.adler >> 8 & 255);
e.adler = 0;
i.status = H;
}
} else i.status = H;
if (0 !== i.pending) {
Q(e);
if (0 === e.avail_out) {
i.last_flush = -1;
return c;
}
} else if (0 === e.avail_in && J(t) <= J(r) && t !== h) return G(e, g);
if (i.status === X && 0 !== e.avail_in) return G(e, g);
if (0 !== e.avail_in || 0 !== i.lookahead || t !== f && i.status !== X) {
var b = i.strategy === v ? function(e, t) {
for (var r; ;) {
if (0 === e.lookahead) {
ae(e);
if (0 === e.lookahead) {
if (t === f) return K;
break;
}
}
e.match_length = 0;
r = n._tr_tally(e, 0, e.window[e.strstart]);
e.lookahead--;
e.strstart++;
if (r) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
}
e.insert = 0;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? Y : W;
}
if (e.last_lit) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
return V;
}(i, t) : i.strategy === y ? function(e, t) {
for (var r, i, a, s, o = e.window; ;) {
if (e.lookahead <= D) {
ae(e);
if (e.lookahead <= D && t === f) return K;
if (0 === e.lookahead) break;
}
e.match_length = 0;
if (e.lookahead >= L && e.strstart > 0 && (i = o[a = e.strstart - 1]) === o[++a] && i === o[++a] && i === o[++a]) {
s = e.strstart + D;
do {} while (i === o[++a] && i === o[++a] && i === o[++a] && i === o[++a] && i === o[++a] && i === o[++a] && i === o[++a] && i === o[++a] && a < s);
e.match_length = D - (s - a);
e.match_length > e.lookahead && (e.match_length = e.lookahead);
}
if (e.match_length >= L) {
r = n._tr_tally(e, 1, e.match_length - L);
e.lookahead -= e.match_length;
e.strstart += e.match_length;
e.match_length = 0;
} else {
r = n._tr_tally(e, 0, e.window[e.strstart]);
e.lookahead--;
e.strstart++;
}
if (r) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
}
e.insert = 0;
if (t === h) {
ee(e, !0);
return 0 === e.strm.avail_out ? Y : W;
}
if (e.last_lit) {
ee(e, !1);
if (0 === e.strm.avail_out) return K;
}
return V;
}(i, t) : fe[i.level].func(i, t);
b !== Y && b !== W || (i.status = X);
if (b === K || b === Y) {
0 === e.avail_out && (i.last_flush = -1);
return c;
}
if (b === V) {
if (t === d) n._tr_align(i); else if (t !== u) {
n._tr_stored_block(i, 0, 0, !1);
if (t === l) {
$(i.head);
if (0 === i.lookahead) {
i.strstart = 0;
i.block_start = 0;
i.insert = 0;
}
}
}
Q(e);
if (0 === e.avail_out) {
i.last_flush = -1;
return c;
}
}
}
if (t !== h) return c;
if (i.wrap <= 0) return _;
if (2 === i.wrap) {
te(i, 255 & e.adler);
te(i, e.adler >> 8 & 255);
te(i, e.adler >> 16 & 255);
te(i, e.adler >> 24 & 255);
te(i, 255 & e.total_in);
te(i, e.total_in >> 8 & 255);
te(i, e.total_in >> 16 & 255);
te(i, e.total_in >> 24 & 255);
} else {
re(i, e.adler >>> 16);
re(i, 65535 & e.adler);
}
Q(e);
i.wrap > 0 && (i.wrap = -i.wrap);
return 0 !== i.pending ? c : _;
};
r.deflateEnd = function(e) {
var t;
if (!e || !e.state) return p;
if ((t = e.state.status) !== F && t !== Z && t !== M && t !== P && t !== j && t !== H && t !== X) return G(e, p);
e.state = null;
return t === H ? G(e, m) : c;
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
var r, i, n, a, s, o, f, d, l, h, u, c, _, p, m, g, b, w, v, y, k, x, z, C, A;
r = e.state;
i = e.next_in;
C = e.input;
n = i + (e.avail_in - 5);
a = e.next_out;
A = e.output;
s = a - (t - e.avail_out);
o = a + (e.avail_out - 257);
f = r.dmax;
d = r.wsize;
l = r.whave;
h = r.wnext;
u = r.window;
c = r.hold;
_ = r.bits;
p = r.lencode;
m = r.distcode;
g = (1 << r.lenbits) - 1;
b = (1 << r.distbits) - 1;
e: do {
if (_ < 15) {
c += C[i++] << _;
_ += 8;
c += C[i++] << _;
_ += 8;
}
w = p[c & g];
t: for (;;) {
c >>>= v = w >>> 24;
_ -= v;
if (0 === (v = w >>> 16 & 255)) A[a++] = 65535 & w; else {
if (!(16 & v)) {
if (0 == (64 & v)) {
w = p[(65535 & w) + (c & (1 << v) - 1)];
continue t;
}
if (32 & v) {
r.mode = 12;
break e;
}
e.msg = "invalid literal/length code";
r.mode = 30;
break e;
}
y = 65535 & w;
if (v &= 15) {
if (_ < v) {
c += C[i++] << _;
_ += 8;
}
y += c & (1 << v) - 1;
c >>>= v;
_ -= v;
}
if (_ < 15) {
c += C[i++] << _;
_ += 8;
c += C[i++] << _;
_ += 8;
}
w = m[c & b];
r: for (;;) {
c >>>= v = w >>> 24;
_ -= v;
if (!(16 & (v = w >>> 16 & 255))) {
if (0 == (64 & v)) {
w = m[(65535 & w) + (c & (1 << v) - 1)];
continue r;
}
e.msg = "invalid distance code";
r.mode = 30;
break e;
}
k = 65535 & w;
if (_ < (v &= 15)) {
c += C[i++] << _;
if ((_ += 8) < v) {
c += C[i++] << _;
_ += 8;
}
}
if ((k += c & (1 << v) - 1) > f) {
e.msg = "invalid distance too far back";
r.mode = 30;
break e;
}
c >>>= v;
_ -= v;
if (k > (v = a - s)) {
if ((v = k - v) > l && r.sane) {
e.msg = "invalid distance too far back";
r.mode = 30;
break e;
}
x = 0;
z = u;
if (0 === h) {
x += d - v;
if (v < y) {
y -= v;
do {
A[a++] = u[x++];
} while (--v);
x = a - k;
z = A;
}
} else if (h < v) {
x += d + h - v;
if ((v -= h) < y) {
y -= v;
do {
A[a++] = u[x++];
} while (--v);
x = 0;
if (h < y) {
y -= v = h;
do {
A[a++] = u[x++];
} while (--v);
x = a - k;
z = A;
}
}
} else {
x += h - v;
if (v < y) {
y -= v;
do {
A[a++] = u[x++];
} while (--v);
x = a - k;
z = A;
}
}
for (;y > 2; ) {
A[a++] = z[x++];
A[a++] = z[x++];
A[a++] = z[x++];
y -= 3;
}
if (y) {
A[a++] = z[x++];
y > 1 && (A[a++] = z[x++]);
}
} else {
x = a - k;
do {
A[a++] = A[x++];
A[a++] = A[x++];
A[a++] = A[x++];
y -= 3;
} while (y > 2);
if (y) {
A[a++] = A[x++];
y > 1 && (A[a++] = A[x++]);
}
}
break;
}
}
break;
}
} while (i < n && a < o);
i -= y = _ >> 3;
c &= (1 << (_ -= y << 3)) - 1;
e.next_in = i;
e.next_out = a;
e.avail_in = i < n ? n - i + 5 : 5 - (i - n);
e.avail_out = a < o ? o - a + 257 : 257 - (a - o);
r.hold = c;
r.bits = _;
};
}, {} ],
35: [ function(e, t, r) {
"use strict";
var i = e("../utils/common"), n = e("./adler32"), a = e("./crc32"), s = e("./inffast"), o = e("./inftrees"), f = 0, d = 1, l = 2, h = 4, u = 5, c = 6, _ = 0, p = 1, m = 2, g = -2, b = -3, w = -4, v = -5, y = 8, k = 1, x = 2, z = 3, C = 4, A = 5, E = 6, S = 7, B = 8, I = 9, T = 10, R = 11, O = 12, L = 13, D = 14, N = 15, U = 16, F = 17, Z = 18, M = 19, P = 20, j = 21, H = 22, X = 23, K = 24, V = 25, Y = 26, W = 27, q = 28, G = 29, J = 30, $ = 31, Q = 32, ee = 852, te = 592, re = 15;
function ie(e) {
return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
}
function ne(e) {
var t;
if (!e || !e.state) return g;
t = e.state;
e.total_in = e.total_out = t.total = 0;
e.msg = "";
t.wrap && (e.adler = 1 & t.wrap);
t.mode = k;
t.last = 0;
t.havedict = 0;
t.dmax = 32768;
t.head = null;
t.hold = 0;
t.bits = 0;
t.lencode = t.lendyn = new i.Buf32(ee);
t.distcode = t.distdyn = new i.Buf32(te);
t.sane = 1;
t.back = -1;
return _;
}
function ae(e) {
var t;
if (!e || !e.state) return g;
(t = e.state).wsize = 0;
t.whave = 0;
t.wnext = 0;
return ne(e);
}
function se(e, t) {
var r, i;
if (!e || !e.state) return g;
i = e.state;
if (t < 0) {
r = 0;
t = -t;
} else {
r = 1 + (t >> 4);
t < 48 && (t &= 15);
}
if (t && (t < 8 || t > 15)) return g;
null !== i.window && i.wbits !== t && (i.window = null);
i.wrap = r;
i.wbits = t;
return ae(e);
}
function oe(e, t) {
var r, n;
if (!e) return g;
n = new function() {
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
this.lens = new i.Buf16(320);
this.work = new i.Buf16(288);
this.lendyn = null;
this.distdyn = null;
this.sane = 0;
this.back = 0;
this.was = 0;
}();
e.state = n;
n.window = null;
(r = se(e, t)) !== _ && (e.state = null);
return r;
}
var fe, de, le = !0;
function he(e) {
if (le) {
var t;
fe = new i.Buf32(512);
de = new i.Buf32(32);
t = 0;
for (;t < 144; ) e.lens[t++] = 8;
for (;t < 256; ) e.lens[t++] = 9;
for (;t < 280; ) e.lens[t++] = 7;
for (;t < 288; ) e.lens[t++] = 8;
o(d, e.lens, 0, 288, fe, 0, e.work, {
bits: 9
});
t = 0;
for (;t < 32; ) e.lens[t++] = 5;
o(l, e.lens, 0, 32, de, 0, e.work, {
bits: 5
});
le = !1;
}
e.lencode = fe;
e.lenbits = 9;
e.distcode = de;
e.distbits = 5;
}
r.inflateReset = ae;
r.inflateReset2 = se;
r.inflateResetKeep = ne;
r.inflateInit = function(e) {
return oe(e, re);
};
r.inflateInit2 = oe;
r.inflate = function(e, t) {
var r, ee, te, re, ne, ae, se, oe, fe, de, le, ue, ce, _e, pe, me, ge, be, we, ve, ye, ke, xe, ze, Ce = 0, Ae = new i.Buf8(4), Ee = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return g;
(r = e.state).mode === O && (r.mode = L);
ne = e.next_out;
te = e.output;
se = e.avail_out;
re = e.next_in;
ee = e.input;
ae = e.avail_in;
oe = r.hold;
fe = r.bits;
de = ae;
le = se;
ke = _;
e: for (;;) switch (r.mode) {
case k:
if (0 === r.wrap) {
r.mode = L;
break;
}
for (;fe < 16; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
if (2 & r.wrap && 35615 === oe) {
r.check = 0;
Ae[0] = 255 & oe;
Ae[1] = oe >>> 8 & 255;
r.check = a(r.check, Ae, 2, 0);
oe = 0;
fe = 0;
r.mode = x;
break;
}
r.flags = 0;
r.head && (r.head.done = !1);
if (!(1 & r.wrap) || (((255 & oe) << 8) + (oe >> 8)) % 31) {
e.msg = "incorrect header check";
r.mode = J;
break;
}
if ((15 & oe) !== y) {
e.msg = "unknown compression method";
r.mode = J;
break;
}
fe -= 4;
ye = 8 + (15 & (oe >>>= 4));
if (0 === r.wbits) r.wbits = ye; else if (ye > r.wbits) {
e.msg = "invalid window size";
r.mode = J;
break;
}
r.dmax = 1 << ye;
e.adler = r.check = 1;
r.mode = 512 & oe ? T : O;
oe = 0;
fe = 0;
break;

case x:
for (;fe < 16; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
r.flags = oe;
if ((255 & r.flags) !== y) {
e.msg = "unknown compression method";
r.mode = J;
break;
}
if (57344 & r.flags) {
e.msg = "unknown header flags set";
r.mode = J;
break;
}
r.head && (r.head.text = oe >> 8 & 1);
if (512 & r.flags) {
Ae[0] = 255 & oe;
Ae[1] = oe >>> 8 & 255;
r.check = a(r.check, Ae, 2, 0);
}
oe = 0;
fe = 0;
r.mode = z;

case z:
for (;fe < 32; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
r.head && (r.head.time = oe);
if (512 & r.flags) {
Ae[0] = 255 & oe;
Ae[1] = oe >>> 8 & 255;
Ae[2] = oe >>> 16 & 255;
Ae[3] = oe >>> 24 & 255;
r.check = a(r.check, Ae, 4, 0);
}
oe = 0;
fe = 0;
r.mode = C;

case C:
for (;fe < 16; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
if (r.head) {
r.head.xflags = 255 & oe;
r.head.os = oe >> 8;
}
if (512 & r.flags) {
Ae[0] = 255 & oe;
Ae[1] = oe >>> 8 & 255;
r.check = a(r.check, Ae, 2, 0);
}
oe = 0;
fe = 0;
r.mode = A;

case A:
if (1024 & r.flags) {
for (;fe < 16; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
r.length = oe;
r.head && (r.head.extra_len = oe);
if (512 & r.flags) {
Ae[0] = 255 & oe;
Ae[1] = oe >>> 8 & 255;
r.check = a(r.check, Ae, 2, 0);
}
oe = 0;
fe = 0;
} else r.head && (r.head.extra = null);
r.mode = E;

case E:
if (1024 & r.flags) {
(ue = r.length) > ae && (ue = ae);
if (ue) {
if (r.head) {
ye = r.head.extra_len - r.length;
r.head.extra || (r.head.extra = new Array(r.head.extra_len));
i.arraySet(r.head.extra, ee, re, ue, ye);
}
512 & r.flags && (r.check = a(r.check, ee, ue, re));
ae -= ue;
re += ue;
r.length -= ue;
}
if (r.length) break e;
}
r.length = 0;
r.mode = S;

case S:
if (2048 & r.flags) {
if (0 === ae) break e;
ue = 0;
do {
ye = ee[re + ue++];
r.head && ye && r.length < 65536 && (r.head.name += String.fromCharCode(ye));
} while (ye && ue < ae);
512 & r.flags && (r.check = a(r.check, ee, ue, re));
ae -= ue;
re += ue;
if (ye) break e;
} else r.head && (r.head.name = null);
r.length = 0;
r.mode = B;

case B:
if (4096 & r.flags) {
if (0 === ae) break e;
ue = 0;
do {
ye = ee[re + ue++];
r.head && ye && r.length < 65536 && (r.head.comment += String.fromCharCode(ye));
} while (ye && ue < ae);
512 & r.flags && (r.check = a(r.check, ee, ue, re));
ae -= ue;
re += ue;
if (ye) break e;
} else r.head && (r.head.comment = null);
r.mode = I;

case I:
if (512 & r.flags) {
for (;fe < 16; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
if (oe !== (65535 & r.check)) {
e.msg = "header crc mismatch";
r.mode = J;
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

case T:
for (;fe < 32; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
e.adler = r.check = ie(oe);
oe = 0;
fe = 0;
r.mode = R;

case R:
if (0 === r.havedict) {
e.next_out = ne;
e.avail_out = se;
e.next_in = re;
e.avail_in = ae;
r.hold = oe;
r.bits = fe;
return m;
}
e.adler = r.check = 1;
r.mode = O;

case O:
if (t === u || t === c) break e;

case L:
if (r.last) {
oe >>>= 7 & fe;
fe -= 7 & fe;
r.mode = W;
break;
}
for (;fe < 3; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
r.last = 1 & oe;
fe -= 1;
switch (3 & (oe >>>= 1)) {
case 0:
r.mode = D;
break;

case 1:
he(r);
r.mode = P;
if (t === c) {
oe >>>= 2;
fe -= 2;
break e;
}
break;

case 2:
r.mode = F;
break;

case 3:
e.msg = "invalid block type";
r.mode = J;
}
oe >>>= 2;
fe -= 2;
break;

case D:
oe >>>= 7 & fe;
fe -= 7 & fe;
for (;fe < 32; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
if ((65535 & oe) != (oe >>> 16 ^ 65535)) {
e.msg = "invalid stored block lengths";
r.mode = J;
break;
}
r.length = 65535 & oe;
oe = 0;
fe = 0;
r.mode = N;
if (t === c) break e;

case N:
r.mode = U;

case U:
if (ue = r.length) {
ue > ae && (ue = ae);
ue > se && (ue = se);
if (0 === ue) break e;
i.arraySet(te, ee, re, ue, ne);
ae -= ue;
re += ue;
se -= ue;
ne += ue;
r.length -= ue;
break;
}
r.mode = O;
break;

case F:
for (;fe < 14; ) {
if (0 === ae) break e;
ae--;
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
r.mode = J;
break;
}
r.have = 0;
r.mode = Z;

case Z:
for (;r.have < r.ncode; ) {
for (;fe < 3; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
r.lens[Ee[r.have++]] = 7 & oe;
oe >>>= 3;
fe -= 3;
}
for (;r.have < 19; ) r.lens[Ee[r.have++]] = 0;
r.lencode = r.lendyn;
r.lenbits = 7;
xe = {
bits: r.lenbits
};
ke = o(f, r.lens, 0, 19, r.lencode, 0, r.work, xe);
r.lenbits = xe.bits;
if (ke) {
e.msg = "invalid code lengths set";
r.mode = J;
break;
}
r.have = 0;
r.mode = M;

case M:
for (;r.have < r.nlen + r.ndist; ) {
for (;;) {
me = (Ce = r.lencode[oe & (1 << r.lenbits) - 1]) >>> 16 & 255;
ge = 65535 & Ce;
if ((pe = Ce >>> 24) <= fe) break;
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
if (ge < 16) {
oe >>>= pe;
fe -= pe;
r.lens[r.have++] = ge;
} else {
if (16 === ge) {
ze = pe + 2;
for (;fe < ze; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
oe >>>= pe;
fe -= pe;
if (0 === r.have) {
e.msg = "invalid bit length repeat";
r.mode = J;
break;
}
ye = r.lens[r.have - 1];
ue = 3 + (3 & oe);
oe >>>= 2;
fe -= 2;
} else if (17 === ge) {
ze = pe + 3;
for (;fe < ze; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
fe -= pe;
ye = 0;
ue = 3 + (7 & (oe >>>= pe));
oe >>>= 3;
fe -= 3;
} else {
ze = pe + 7;
for (;fe < ze; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
fe -= pe;
ye = 0;
ue = 11 + (127 & (oe >>>= pe));
oe >>>= 7;
fe -= 7;
}
if (r.have + ue > r.nlen + r.ndist) {
e.msg = "invalid bit length repeat";
r.mode = J;
break;
}
for (;ue--; ) r.lens[r.have++] = ye;
}
}
if (r.mode === J) break;
if (0 === r.lens[256]) {
e.msg = "invalid code -- missing end-of-block";
r.mode = J;
break;
}
r.lenbits = 9;
xe = {
bits: r.lenbits
};
ke = o(d, r.lens, 0, r.nlen, r.lencode, 0, r.work, xe);
r.lenbits = xe.bits;
if (ke) {
e.msg = "invalid literal/lengths set";
r.mode = J;
break;
}
r.distbits = 6;
r.distcode = r.distdyn;
xe = {
bits: r.distbits
};
ke = o(l, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, xe);
r.distbits = xe.bits;
if (ke) {
e.msg = "invalid distances set";
r.mode = J;
break;
}
r.mode = P;
if (t === c) break e;

case P:
r.mode = j;

case j:
if (ae >= 6 && se >= 258) {
e.next_out = ne;
e.avail_out = se;
e.next_in = re;
e.avail_in = ae;
r.hold = oe;
r.bits = fe;
s(e, le);
ne = e.next_out;
te = e.output;
se = e.avail_out;
re = e.next_in;
ee = e.input;
ae = e.avail_in;
oe = r.hold;
fe = r.bits;
r.mode === O && (r.back = -1);
break;
}
r.back = 0;
for (;;) {
me = (Ce = r.lencode[oe & (1 << r.lenbits) - 1]) >>> 16 & 255;
ge = 65535 & Ce;
if ((pe = Ce >>> 24) <= fe) break;
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
if (me && 0 == (240 & me)) {
be = pe;
we = me;
ve = ge;
for (;;) {
me = (Ce = r.lencode[ve + ((oe & (1 << be + we) - 1) >> be)]) >>> 16 & 255;
ge = 65535 & Ce;
if (be + (pe = Ce >>> 24) <= fe) break;
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
oe >>>= be;
fe -= be;
r.back += be;
}
oe >>>= pe;
fe -= pe;
r.back += pe;
r.length = ge;
if (0 === me) {
r.mode = Y;
break;
}
if (32 & me) {
r.back = -1;
r.mode = O;
break;
}
if (64 & me) {
e.msg = "invalid literal/length code";
r.mode = J;
break;
}
r.extra = 15 & me;
r.mode = H;

case H:
if (r.extra) {
ze = r.extra;
for (;fe < ze; ) {
if (0 === ae) break e;
ae--;
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
me = (Ce = r.distcode[oe & (1 << r.distbits) - 1]) >>> 16 & 255;
ge = 65535 & Ce;
if ((pe = Ce >>> 24) <= fe) break;
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
if (0 == (240 & me)) {
be = pe;
we = me;
ve = ge;
for (;;) {
me = (Ce = r.distcode[ve + ((oe & (1 << be + we) - 1) >> be)]) >>> 16 & 255;
ge = 65535 & Ce;
if (be + (pe = Ce >>> 24) <= fe) break;
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
oe >>>= be;
fe -= be;
r.back += be;
}
oe >>>= pe;
fe -= pe;
r.back += pe;
if (64 & me) {
e.msg = "invalid distance code";
r.mode = J;
break;
}
r.offset = ge;
r.extra = 15 & me;
r.mode = K;

case K:
if (r.extra) {
ze = r.extra;
for (;fe < ze; ) {
if (0 === ae) break e;
ae--;
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
r.mode = J;
break;
}
r.mode = V;

case V:
if (0 === se) break e;
ue = le - se;
if (r.offset > ue) {
if ((ue = r.offset - ue) > r.whave && r.sane) {
e.msg = "invalid distance too far back";
r.mode = J;
break;
}
if (ue > r.wnext) {
ue -= r.wnext;
ce = r.wsize - ue;
} else ce = r.wnext - ue;
ue > r.length && (ue = r.length);
_e = r.window;
} else {
_e = te;
ce = ne - r.offset;
ue = r.length;
}
ue > se && (ue = se);
se -= ue;
r.length -= ue;
do {
te[ne++] = _e[ce++];
} while (--ue);
0 === r.length && (r.mode = j);
break;

case Y:
if (0 === se) break e;
te[ne++] = r.length;
se--;
r.mode = j;
break;

case W:
if (r.wrap) {
for (;fe < 32; ) {
if (0 === ae) break e;
ae--;
oe |= ee[re++] << fe;
fe += 8;
}
le -= se;
e.total_out += le;
r.total += le;
le && (e.adler = r.check = r.flags ? a(r.check, te, le, ne - le) : n(r.check, te, le, ne - le));
le = se;
if ((r.flags ? oe : ie(oe)) !== r.check) {
e.msg = "incorrect data check";
r.mode = J;
break;
}
oe = 0;
fe = 0;
}
r.mode = q;

case q:
if (r.wrap && r.flags) {
for (;fe < 32; ) {
if (0 === ae) break e;
ae--;
oe += ee[re++] << fe;
fe += 8;
}
if (oe !== (4294967295 & r.total)) {
e.msg = "incorrect length check";
r.mode = J;
break;
}
oe = 0;
fe = 0;
}
r.mode = G;

case G:
ke = p;
break e;

case J:
ke = b;
break e;

case $:
return w;

case Q:
default:
return g;
}
e.next_out = ne;
e.avail_out = se;
e.next_in = re;
e.avail_in = ae;
r.hold = oe;
r.bits = fe;
if ((r.wsize || le !== e.avail_out && r.mode < J && (r.mode < W || t !== h)) && function(e, t, r, n) {
var a, s = e.state;
if (null === s.window) {
s.wsize = 1 << s.wbits;
s.wnext = 0;
s.whave = 0;
s.window = new i.Buf8(s.wsize);
}
if (n >= s.wsize) {
i.arraySet(s.window, t, r - s.wsize, s.wsize, 0);
s.wnext = 0;
s.whave = s.wsize;
} else {
(a = s.wsize - s.wnext) > n && (a = n);
i.arraySet(s.window, t, r - n, a, s.wnext);
if (n -= a) {
i.arraySet(s.window, t, r - n, n, 0);
s.wnext = n;
s.whave = s.wsize;
} else {
s.wnext += a;
s.wnext === s.wsize && (s.wnext = 0);
s.whave < s.wsize && (s.whave += a);
}
}
return 0;
}(e, e.output, e.next_out, le - e.avail_out)) {
r.mode = $;
return w;
}
de -= e.avail_in;
le -= e.avail_out;
e.total_in += de;
e.total_out += le;
r.total += le;
r.wrap && le && (e.adler = r.check = r.flags ? a(r.check, te, le, e.next_out - le) : n(r.check, te, le, e.next_out - le));
e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === O ? 128 : 0) + (r.mode === P || r.mode === N ? 256 : 0);
(0 === de && 0 === le || t === h) && ke === _ && (ke = v);
return ke;
};
r.inflateEnd = function(e) {
if (!e || !e.state) return g;
var t = e.state;
t.window && (t.window = null);
e.state = null;
return _;
};
r.inflateGetHeader = function(e, t) {
var r;
if (!e || !e.state) return g;
if (0 == (2 & (r = e.state).wrap)) return g;
r.head = t;
t.done = !1;
return _;
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
var i = e("../utils/common"), n = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ], a = [ 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78 ], s = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0 ], o = [ 16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64 ];
t.exports = function(e, t, r, f, d, l, h, u) {
var c, _, p, m, g, b, w, v, y, k = u.bits, x = 0, z = 0, C = 0, A = 0, E = 0, S = 0, B = 0, I = 0, T = 0, R = 0, O = null, L = 0, D = new i.Buf16(16), N = new i.Buf16(16), U = null, F = 0;
for (x = 0; x <= 15; x++) D[x] = 0;
for (z = 0; z < f; z++) D[t[r + z]]++;
E = k;
for (A = 15; A >= 1 && 0 === D[A]; A--) ;
E > A && (E = A);
if (0 === A) {
d[l++] = 20971520;
d[l++] = 20971520;
u.bits = 1;
return 0;
}
for (C = 1; C < A && 0 === D[C]; C++) ;
E < C && (E = C);
I = 1;
for (x = 1; x <= 15; x++) {
I <<= 1;
if ((I -= D[x]) < 0) return -1;
}
if (I > 0 && (0 === e || 1 !== A)) return -1;
N[1] = 0;
for (x = 1; x < 15; x++) N[x + 1] = N[x] + D[x];
for (z = 0; z < f; z++) 0 !== t[r + z] && (h[N[t[r + z]]++] = z);
if (0 === e) {
O = U = h;
b = 19;
} else if (1 === e) {
O = n;
L -= 257;
U = a;
F -= 257;
b = 256;
} else {
O = s;
U = o;
b = -1;
}
R = 0;
z = 0;
x = C;
g = l;
S = E;
B = 0;
p = -1;
m = (T = 1 << E) - 1;
if (1 === e && T > 852 || 2 === e && T > 592) return 1;
for (;;) {
0;
w = x - B;
if (h[z] < b) {
v = 0;
y = h[z];
} else if (h[z] > b) {
v = U[F + h[z]];
y = O[L + h[z]];
} else {
v = 96;
y = 0;
}
c = 1 << x - B;
C = _ = 1 << S;
do {
d[g + (R >> B) + (_ -= c)] = w << 24 | v << 16 | y | 0;
} while (0 !== _);
c = 1 << x - 1;
for (;R & c; ) c >>= 1;
if (0 !== c) {
R &= c - 1;
R += c;
} else R = 0;
z++;
if (0 == --D[x]) {
if (x === A) break;
x = t[r + h[z]];
}
if (x > E && (R & m) !== p) {
0 === B && (B = E);
g += C;
I = 1 << (S = x - B);
for (;S + B < A && !((I -= D[S + B]) <= 0); ) {
S++;
I <<= 1;
}
T += 1 << S;
if (1 === e && T > 852 || 2 === e && T > 592) return 1;
d[p = R & m] = E << 24 | S << 16 | g - l | 0;
}
}
0 !== R && (d[g + R] = x - B << 24 | 64 << 16 | 0);
u.bits = E;
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
var i = e("../utils/common"), n = 4, a = 0, s = 1, o = 2;
function f(e) {
for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var d = 0, l = 1, h = 2, u = 29, c = 256, _ = c + 1 + u, p = 30, m = 19, g = 2 * _ + 1, b = 15, w = 16, v = 7, y = 256, k = 16, x = 17, z = 18, C = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ], A = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], E = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ], S = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], B = new Array(2 * (_ + 2));
f(B);
var I = new Array(2 * p);
f(I);
var T = new Array(512);
f(T);
var R = new Array(256);
f(R);
var O = new Array(u);
f(O);
var L = new Array(p);
f(L);
var D, N, U, F = function(e, t, r, i, n) {
this.static_tree = e;
this.extra_bits = t;
this.extra_base = r;
this.elems = i;
this.max_length = n;
this.has_stree = e && e.length;
}, Z = function(e, t) {
this.dyn_tree = e;
this.max_code = 0;
this.stat_desc = t;
};
function M(e) {
return e < 256 ? T[e] : T[256 + (e >>> 7)];
}
function P(e, t) {
e.pending_buf[e.pending++] = 255 & t;
e.pending_buf[e.pending++] = t >>> 8 & 255;
}
function j(e, t, r) {
if (e.bi_valid > w - r) {
e.bi_buf |= t << e.bi_valid & 65535;
P(e, e.bi_buf);
e.bi_buf = t >> w - e.bi_valid;
e.bi_valid += r - w;
} else {
e.bi_buf |= t << e.bi_valid & 65535;
e.bi_valid += r;
}
}
function H(e, t, r) {
j(e, r[2 * t], r[2 * t + 1]);
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
function K(e, t, r) {
var i, n, a = new Array(b + 1), s = 0;
for (i = 1; i <= b; i++) a[i] = s = s + r[i - 1] << 1;
for (n = 0; n <= t; n++) {
var o = e[2 * n + 1];
0 !== o && (e[2 * n] = X(a[o]++, o));
}
}
function V(e) {
var t;
for (t = 0; t < _; t++) e.dyn_ltree[2 * t] = 0;
for (t = 0; t < p; t++) e.dyn_dtree[2 * t] = 0;
for (t = 0; t < m; t++) e.bl_tree[2 * t] = 0;
e.dyn_ltree[2 * y] = 1;
e.opt_len = e.static_len = 0;
e.last_lit = e.matches = 0;
}
function Y(e) {
e.bi_valid > 8 ? P(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf);
e.bi_buf = 0;
e.bi_valid = 0;
}
function W(e, t, r, i) {
var n = 2 * t, a = 2 * r;
return e[n] < e[a] || e[n] === e[a] && i[t] <= i[r];
}
function q(e, t, r) {
for (var i = e.heap[r], n = r << 1; n <= e.heap_len; ) {
n < e.heap_len && W(t, e.heap[n + 1], e.heap[n], e.depth) && n++;
if (W(t, i, e.heap[n], e.depth)) break;
e.heap[r] = e.heap[n];
r = n;
n <<= 1;
}
e.heap[r] = i;
}
function G(e, t, r) {
var i, n, a, s, o = 0;
if (0 !== e.last_lit) do {
i = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1];
n = e.pending_buf[e.l_buf + o];
o++;
if (0 === i) H(e, n, t); else {
H(e, (a = R[n]) + c + 1, t);
0 !== (s = C[a]) && j(e, n -= O[a], s);
H(e, a = M(--i), r);
0 !== (s = A[a]) && j(e, i -= L[a], s);
}
} while (o < e.last_lit);
H(e, y, t);
}
function J(e, t) {
var r, i, n, a = t.dyn_tree, s = t.stat_desc.static_tree, o = t.stat_desc.has_stree, f = t.stat_desc.elems, d = -1;
e.heap_len = 0;
e.heap_max = g;
for (r = 0; r < f; r++) if (0 !== a[2 * r]) {
e.heap[++e.heap_len] = d = r;
e.depth[r] = 0;
} else a[2 * r + 1] = 0;
for (;e.heap_len < 2; ) {
a[2 * (n = e.heap[++e.heap_len] = d < 2 ? ++d : 0)] = 1;
e.depth[n] = 0;
e.opt_len--;
o && (e.static_len -= s[2 * n + 1]);
}
t.max_code = d;
for (r = e.heap_len >> 1; r >= 1; r--) q(e, a, r);
n = f;
do {
r = e.heap[1];
e.heap[1] = e.heap[e.heap_len--];
q(e, a, 1);
i = e.heap[1];
e.heap[--e.heap_max] = r;
e.heap[--e.heap_max] = i;
a[2 * n] = a[2 * r] + a[2 * i];
e.depth[n] = (e.depth[r] >= e.depth[i] ? e.depth[r] : e.depth[i]) + 1;
a[2 * r + 1] = a[2 * i + 1] = n;
e.heap[1] = n++;
q(e, a, 1);
} while (e.heap_len >= 2);
e.heap[--e.heap_max] = e.heap[1];
(function(e, t) {
var r, i, n, a, s, o, f = t.dyn_tree, d = t.max_code, l = t.stat_desc.static_tree, h = t.stat_desc.has_stree, u = t.stat_desc.extra_bits, c = t.stat_desc.extra_base, _ = t.stat_desc.max_length, p = 0;
for (a = 0; a <= b; a++) e.bl_count[a] = 0;
f[2 * e.heap[e.heap_max] + 1] = 0;
for (r = e.heap_max + 1; r < g; r++) {
if ((a = f[2 * f[2 * (i = e.heap[r]) + 1] + 1] + 1) > _) {
a = _;
p++;
}
f[2 * i + 1] = a;
if (!(i > d)) {
e.bl_count[a]++;
s = 0;
i >= c && (s = u[i - c]);
o = f[2 * i];
e.opt_len += o * (a + s);
h && (e.static_len += o * (l[2 * i + 1] + s));
}
}
if (0 !== p) {
do {
a = _ - 1;
for (;0 === e.bl_count[a]; ) a--;
e.bl_count[a]--;
e.bl_count[a + 1] += 2;
e.bl_count[_]--;
p -= 2;
} while (p > 0);
for (a = _; 0 !== a; a--) {
i = e.bl_count[a];
for (;0 !== i; ) if (!((n = e.heap[--r]) > d)) {
if (f[2 * n + 1] !== a) {
e.opt_len += (a - f[2 * n + 1]) * f[2 * n];
f[2 * n + 1] = a;
}
i--;
}
}
}
})(e, t);
K(a, d, e.bl_count);
}
function $(e, t, r) {
var i, n, a = -1, s = t[1], o = 0, f = 7, d = 4;
if (0 === s) {
f = 138;
d = 3;
}
t[2 * (r + 1) + 1] = 65535;
for (i = 0; i <= r; i++) {
n = s;
s = t[2 * (i + 1) + 1];
if (!(++o < f && n === s)) {
if (o < d) e.bl_tree[2 * n] += o; else if (0 !== n) {
n !== a && e.bl_tree[2 * n]++;
e.bl_tree[2 * k]++;
} else o <= 10 ? e.bl_tree[2 * x]++ : e.bl_tree[2 * z]++;
o = 0;
a = n;
if (0 === s) {
f = 138;
d = 3;
} else if (n === s) {
f = 6;
d = 3;
} else {
f = 7;
d = 4;
}
}
}
}
function Q(e, t, r) {
var i, n, a = -1, s = t[1], o = 0, f = 7, d = 4;
if (0 === s) {
f = 138;
d = 3;
}
for (i = 0; i <= r; i++) {
n = s;
s = t[2 * (i + 1) + 1];
if (!(++o < f && n === s)) {
if (o < d) do {
H(e, n, e.bl_tree);
} while (0 != --o); else if (0 !== n) {
if (n !== a) {
H(e, n, e.bl_tree);
o--;
}
H(e, k, e.bl_tree);
j(e, o - 3, 2);
} else if (o <= 10) {
H(e, x, e.bl_tree);
j(e, o - 3, 3);
} else {
H(e, z, e.bl_tree);
j(e, o - 11, 7);
}
o = 0;
a = n;
if (0 === s) {
f = 138;
d = 3;
} else if (n === s) {
f = 6;
d = 3;
} else {
f = 7;
d = 4;
}
}
}
}
var ee = !1;
function te(e, t, r, n) {
j(e, (d << 1) + (n ? 1 : 0), 3);
(function(e, t, r, n) {
Y(e);
if (n) {
P(e, r);
P(e, ~r);
}
i.arraySet(e.pending_buf, e.window, t, r, e.pending);
e.pending += r;
})(e, t, r, !0);
}
r._tr_init = function(e) {
if (!ee) {
(function() {
var e, t, r, i, n, a = new Array(b + 1);
r = 0;
for (i = 0; i < u - 1; i++) {
O[i] = r;
for (e = 0; e < 1 << C[i]; e++) R[r++] = i;
}
R[r - 1] = i;
n = 0;
for (i = 0; i < 16; i++) {
L[i] = n;
for (e = 0; e < 1 << A[i]; e++) T[n++] = i;
}
n >>= 7;
for (;i < p; i++) {
L[i] = n << 7;
for (e = 0; e < 1 << A[i] - 7; e++) T[256 + n++] = i;
}
for (t = 0; t <= b; t++) a[t] = 0;
e = 0;
for (;e <= 143; ) {
B[2 * e + 1] = 8;
e++;
a[8]++;
}
for (;e <= 255; ) {
B[2 * e + 1] = 9;
e++;
a[9]++;
}
for (;e <= 279; ) {
B[2 * e + 1] = 7;
e++;
a[7]++;
}
for (;e <= 287; ) {
B[2 * e + 1] = 8;
e++;
a[8]++;
}
K(B, _ + 1, a);
for (e = 0; e < p; e++) {
I[2 * e + 1] = 5;
I[2 * e] = X(e, 5);
}
D = new F(B, C, c + 1, _, b);
N = new F(I, A, 0, p, b);
U = new F(new Array(0), E, 0, m, v);
})();
ee = !0;
}
e.l_desc = new Z(e.dyn_ltree, D);
e.d_desc = new Z(e.dyn_dtree, N);
e.bl_desc = new Z(e.bl_tree, U);
e.bi_buf = 0;
e.bi_valid = 0;
V(e);
};
r._tr_stored_block = te;
r._tr_flush_block = function(e, t, r, i) {
var f, d, u = 0;
if (e.level > 0) {
e.strm.data_type === o && (e.strm.data_type = function(e) {
var t, r = 4093624447;
for (t = 0; t <= 31; t++, r >>>= 1) if (1 & r && 0 !== e.dyn_ltree[2 * t]) return a;
if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return s;
for (t = 32; t < c; t++) if (0 !== e.dyn_ltree[2 * t]) return s;
return a;
}(e));
J(e, e.l_desc);
J(e, e.d_desc);
u = function(e) {
var t;
$(e, e.dyn_ltree, e.l_desc.max_code);
$(e, e.dyn_dtree, e.d_desc.max_code);
J(e, e.bl_desc);
for (t = m - 1; t >= 3 && 0 === e.bl_tree[2 * S[t] + 1]; t--) ;
e.opt_len += 3 * (t + 1) + 5 + 5 + 4;
return t;
}(e);
f = e.opt_len + 3 + 7 >>> 3;
(d = e.static_len + 3 + 7 >>> 3) <= f && (f = d);
} else f = d = r + 5;
if (r + 4 <= f && -1 !== t) te(e, t, r, i); else if (e.strategy === n || d === f) {
j(e, (l << 1) + (i ? 1 : 0), 3);
G(e, B, I);
} else {
j(e, (h << 1) + (i ? 1 : 0), 3);
(function(e, t, r, i) {
var n;
j(e, t - 257, 5);
j(e, r - 1, 5);
j(e, i - 4, 4);
for (n = 0; n < i; n++) j(e, e.bl_tree[2 * S[n] + 1], 3);
Q(e, e.dyn_ltree, t - 1);
Q(e, e.dyn_dtree, r - 1);
})(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, u + 1);
G(e, e.dyn_ltree, e.dyn_dtree);
}
V(e);
i && Y(e);
};
r._tr_tally = function(e, t, r) {
e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255;
e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t;
e.pending_buf[e.l_buf + e.last_lit] = 255 & r;
e.last_lit++;
if (0 === t) e.dyn_ltree[2 * r]++; else {
e.matches++;
t--;
e.dyn_ltree[2 * (R[r] + c + 1)]++;
e.dyn_dtree[2 * M(t)]++;
}
return e.last_lit === e.lit_bufsize - 1;
};
r._tr_align = function(e) {
j(e, l << 1, 3);
H(e, y, B);
(function(e) {
if (16 === e.bi_valid) {
P(e, e.bi_buf);
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