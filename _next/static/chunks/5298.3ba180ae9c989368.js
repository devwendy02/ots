(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5298], {
        75298: function(t, e, n) {
            let r = n(47363),
                o = n(37621),
                i = n(46028),
                a = n(12330);

            function renderCanvas(t, e, n, i, a) {
                let l = [].slice.call(arguments, 1),
                    u = l.length,
                    s = "function" == typeof l[u - 1];
                if (!s && !r()) throw Error("Callback required as last argument");
                if (s) {
                    if (u < 2) throw Error("Too few arguments provided");
                    2 === u ? (a = n, n = e, e = i = void 0) : 3 === u && (e.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = n, n = e, e = void 0))
                } else {
                    if (u < 1) throw Error("Too few arguments provided");
                    return 1 === u ? (n = e, e = i = void 0) : 2 !== u || e.getContext || (i = n, n = e, e = void 0), new Promise(function(r, a) {
                        try {
                            let a = o.create(n, i);
                            r(t(a, e, i))
                        } catch (t) {
                            a(t)
                        }
                    })
                }
                try {
                    let r = o.create(n, i);
                    a(null, t(r, e, i))
                } catch (t) {
                    a(t)
                }
            }
            e.create = o.create, e.toCanvas = renderCanvas.bind(null, i.render), e.toDataURL = renderCanvas.bind(null, i.renderToDataURL), e.toString = renderCanvas.bind(null, function(t, e, n) {
                return a.render(t, n)
            })
        },
        47363: function(t) {
            t.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        8177: function(t, e, n) {
            let r = n(13400).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t) return [];
                let e = Math.floor(t / 7) + 2,
                    n = r(t),
                    o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
                    i = [n - 7];
                for (let t = 1; t < e - 1; t++) i[t] = i[t - 1] - o;
                return i.push(6), i.reverse()
            }, e.getPositions = function(t) {
                let n = [],
                    r = e.getRowColCoords(t),
                    o = r.length;
                for (let t = 0; t < o; t++)
                    for (let e = 0; e < o; e++)(0 !== t || 0 !== e) && (0 !== t || e !== o - 1) && (t !== o - 1 || 0 !== e) && n.push([r[t], r[e]]);
                return n
            }
        },
        77654: function(t, e, n) {
            let r = n(37662),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function AlphanumericData(t) {
                this.mode = r.ALPHANUMERIC, this.data = t
            }
            AlphanumericData.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + 6 * (t % 2)
            }, AlphanumericData.prototype.getLength = function() {
                return this.data.length
            }, AlphanumericData.prototype.getBitsLength = function() {
                return AlphanumericData.getBitsLength(this.data.length)
            }, AlphanumericData.prototype.write = function(t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let n = 45 * o.indexOf(this.data[e]);
                    n += o.indexOf(this.data[e + 1]), t.put(n, 11)
                }
                this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
            }, t.exports = AlphanumericData
        },
        41904: function(t) {
            function BitBuffer() {
                this.buffer = [], this.length = 0
            }
            BitBuffer.prototype = {
                get: function(t) {
                    return (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
                },
                put: function(t, e) {
                    for (let n = 0; n < e; n++) this.putBit((t >>> e - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    let e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = BitBuffer
        },
        21091: function(t) {
            function BitMatrix(t) {
                if (!t || t < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t)
            }
            BitMatrix.prototype.set = function(t, e, n, r) {
                let o = t * this.size + e;
                this.data[o] = n, r && (this.reservedBit[o] = !0)
            }, BitMatrix.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }, BitMatrix.prototype.xor = function(t, e, n) {
                this.data[t * this.size + e] ^= n
            }, BitMatrix.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }, t.exports = BitMatrix
        },
        90690: function(t, e, n) {
            let r = n(53216),
                o = n(37662);

            function ByteData(t) {
                this.mode = o.BYTE, "string" == typeof t && (t = r(t)), this.data = new Uint8Array(t)
            }
            ByteData.getBitsLength = function(t) {
                return 8 * t
            }, ByteData.prototype.getLength = function() {
                return this.data.length
            }, ByteData.prototype.getBitsLength = function() {
                return ByteData.getBitsLength(this.data.length)
            }, ByteData.prototype.write = function(t) {
                for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
            }, t.exports = ByteData
        },
        37039: function(t, e, n) {
            let r = n(9406),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return o[(t - 1) * 4 + 0];
                    case r.M:
                        return o[(t - 1) * 4 + 1];
                    case r.Q:
                        return o[(t - 1) * 4 + 2];
                    case r.H:
                        return o[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }, e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return i[(t - 1) * 4 + 0];
                    case r.M:
                        return i[(t - 1) * 4 + 1];
                    case r.Q:
                        return i[(t - 1) * 4 + 2];
                    case r.H:
                        return i[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        9406: function(t, e) {
            e.L = {
                bit: 1
            }, e.M = {
                bit: 0
            }, e.Q = {
                bit: 3
            }, e.H = {
                bit: 2
            }, e.isValid = function(t) {
                return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        let n = t.toLowerCase();
                        switch (n) {
                            case "l":
                            case "low":
                                return e.L;
                            case "m":
                            case "medium":
                                return e.M;
                            case "q":
                            case "quartile":
                                return e.Q;
                            case "h":
                            case "high":
                                return e.H;
                            default:
                                throw Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (t) {
                    return n
                }
            }
        },
        61193: function(t, e, n) {
            let r = n(13400).getSymbolSize;
            e.getPositions = function(t) {
                let e = r(t);
                return [
                    [0, 0],
                    [e - 7, 0],
                    [0, e - 7]
                ]
            }
        },
        50237: function(t, e, n) {
            let r = n(13400),
                o = r.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                let n = t.bit << 3 | e,
                    i = n << 10;
                for (; r.getBCHDigit(i) - o >= 0;) i ^= 1335 << r.getBCHDigit(i) - o;
                return (n << 10 | i) ^ 21522
            }
        },
        51309: function(t, e) {
            let n = new Uint8Array(512),
                r = new Uint8Array(256);
            ! function() {
                let t = 1;
                for (let e = 0; e < 255; e++) n[e] = t, r[t] = e, 256 & (t <<= 1) && (t ^= 285);
                for (let t = 255; t < 512; t++) n[t] = n[t - 255]
            }(), e.log = function(t) {
                if (t < 1) throw Error("log(" + t + ")");
                return r[t]
            }, e.exp = function(t) {
                return n[t]
            }, e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : n[r[t] + r[e]]
            }
        },
        69592: function(t, e, n) {
            let r = n(37662),
                o = n(13400);

            function KanjiData(t) {
                this.mode = r.KANJI, this.data = t
            }
            KanjiData.getBitsLength = function(t) {
                return 13 * t
            }, KanjiData.prototype.getLength = function() {
                return this.data.length
            }, KanjiData.prototype.getBitsLength = function() {
                return KanjiData.getBitsLength(this.data.length)
            }, KanjiData.prototype.write = function(t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let n = o.toSJIS(this.data[e]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), t.put(n, 13)
                }
            }, t.exports = KanjiData
        },
        62486: function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }, e.getPenaltyN1 = function(t) {
                let e = t.size,
                    r = 0,
                    o = 0,
                    i = 0,
                    a = null,
                    l = null;
                for (let u = 0; u < e; u++) {
                    o = i = 0, a = l = null;
                    for (let s = 0; s < e; s++) {
                        let e = t.get(u, s);
                        e === a ? o++ : (o >= 5 && (r += n.N1 + (o - 5)), a = e, o = 1), (e = t.get(s, u)) === l ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), l = e, i = 1)
                    }
                    o >= 5 && (r += n.N1 + (o - 5)), i >= 5 && (r += n.N1 + (i - 5))
                }
                return r
            }, e.getPenaltyN2 = function(t) {
                let e = t.size,
                    r = 0;
                for (let n = 0; n < e - 1; n++)
                    for (let o = 0; o < e - 1; o++) {
                        let e = t.get(n, o) + t.get(n, o + 1) + t.get(n + 1, o) + t.get(n + 1, o + 1);
                        (4 === e || 0 === e) && r++
                    }
                return r * n.N2
            }, e.getPenaltyN3 = function(t) {
                let e = t.size,
                    r = 0,
                    o = 0,
                    i = 0;
                for (let n = 0; n < e; n++) {
                    o = i = 0;
                    for (let a = 0; a < e; a++) o = o << 1 & 2047 | t.get(n, a), a >= 10 && (1488 === o || 93 === o) && r++, i = i << 1 & 2047 | t.get(a, n), a >= 10 && (1488 === i || 93 === i) && r++
                }
                return r * n.N3
            }, e.getPenaltyN4 = function(t) {
                let e = 0,
                    r = t.data.length;
                for (let n = 0; n < r; n++) e += t.data[n];
                let o = Math.abs(Math.ceil(100 * e / r / 5) - 10);
                return o * n.N4
            }, e.applyMask = function(t, n) {
                let r = n.size;
                for (let o = 0; o < r; o++)
                    for (let i = 0; i < r; i++) n.isReserved(i, o) || n.xor(i, o, function(t, n, r) {
                        switch (t) {
                            case e.Patterns.PATTERN000:
                                return (n + r) % 2 == 0;
                            case e.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case e.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case e.Patterns.PATTERN011:
                                return (n + r) % 3 == 0;
                            case e.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                            case e.Patterns.PATTERN101:
                                return n * r % 2 + n * r % 3 == 0;
                            case e.Patterns.PATTERN110:
                                return (n * r % 2 + n * r % 3) % 2 == 0;
                            case e.Patterns.PATTERN111:
                                return (n * r % 3 + (n + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + t)
                        }
                    }(t, i, o))
            }, e.getBestMask = function(t, n) {
                let r = Object.keys(e.Patterns).length,
                    o = 0,
                    i = 1 / 0;
                for (let a = 0; a < r; a++) {
                    n(a), e.applyMask(a, t);
                    let r = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(a, t), r < i && (i = r, o = a)
                }
                return o
            }
        },
        37662: function(t, e, n) {
            let r = n(64956),
                o = n(66579);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, e.MIXED = {
                bit: -1
            }, e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits) throw Error("Invalid mode: " + t);
                if (!r.isValid(e)) throw Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }, e.getBestModeForData = function(t) {
                return o.testNumeric(t) ? e.NUMERIC : o.testAlphanumeric(t) ? e.ALPHANUMERIC : o.testKanji(t) ? e.KANJI : e.BYTE
            }, e.toString = function(t) {
                if (t && t.id) return t.id;
                throw Error("Invalid mode")
            }, e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        let n = t.toLowerCase();
                        switch (n) {
                            case "numeric":
                                return e.NUMERIC;
                            case "alphanumeric":
                                return e.ALPHANUMERIC;
                            case "kanji":
                                return e.KANJI;
                            case "byte":
                                return e.BYTE;
                            default:
                                throw Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (t) {
                    return n
                }
            }
        },
        10894: function(t, e, n) {
            let r = n(37662);

            function NumericData(t) {
                this.mode = r.NUMERIC, this.data = t.toString()
            }
            NumericData.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, NumericData.prototype.getLength = function() {
                return this.data.length
            }, NumericData.prototype.getBitsLength = function() {
                return NumericData.getBitsLength(this.data.length)
            }, NumericData.prototype.write = function(t) {
                let e, n;
                for (e = 0; e + 3 <= this.data.length; e += 3) n = parseInt(this.data.substr(e, 3), 10), t.put(n, 10);
                let r = this.data.length - e;
                r > 0 && (n = parseInt(this.data.substr(e), 10), t.put(n, 3 * r + 1))
            }, t.exports = NumericData
        },
        25153: function(t, e, n) {
            let r = n(51309);
            e.mul = function(t, e) {
                let n = new Uint8Array(t.length + e.length - 1);
                for (let o = 0; o < t.length; o++)
                    for (let i = 0; i < e.length; i++) n[o + i] ^= r.mul(t[o], e[i]);
                return n
            }, e.mod = function(t, e) {
                let n = new Uint8Array(t);
                for (; n.length - e.length >= 0;) {
                    let t = n[0];
                    for (let o = 0; o < e.length; o++) n[o] ^= r.mul(e[o], t);
                    let o = 0;
                    for (; o < n.length && 0 === n[o];) o++;
                    n = n.slice(o)
                }
                return n
            }, e.generateECPolynomial = function(t) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < t; o++) n = e.mul(n, new Uint8Array([1, r.exp(o)]));
                return n
            }
        },
        37621: function(t, e, n) {
            let r = n(13400),
                o = n(9406),
                i = n(41904),
                a = n(21091),
                l = n(8177),
                u = n(61193),
                s = n(62486),
                g = n(37039),
                f = n(9936),
                c = n(78089),
                h = n(50237),
                d = n(37662),
                m = n(25082);

            function setupFormatInfo(t, e, n) {
                let r, o;
                let i = t.size,
                    a = h.getEncodedBits(e, n);
                for (r = 0; r < 15; r++) o = (a >> r & 1) == 1, r < 6 ? t.set(r, 8, o, !0) : r < 8 ? t.set(r + 1, 8, o, !0) : t.set(i - 15 + r, 8, o, !0), r < 8 ? t.set(8, i - r - 1, o, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, o, !0) : t.set(8, 15 - r - 1, o, !0);
                t.set(i - 8, 8, 1, !0)
            }
            e.create = function(t, e) {
                let n, h;
                if (void 0 === t || "" === t) throw Error("No input text");
                let p = o.M;
                return void 0 !== e && (p = o.from(e.errorCorrectionLevel, o.M), n = c.from(e.version), h = s.from(e.maskPattern), e.toSJISFunc && r.setToSJISFunction(e.toSJISFunc)),
                    function(t, e, n, o) {
                        let h;
                        if (Array.isArray(t)) h = m.fromArray(t);
                        else if ("string" == typeof t) {
                            let r = e;
                            if (!r) {
                                let e = m.rawSplit(t);
                                r = c.getBestVersionForData(e, n)
                            }
                            h = m.fromString(t, r || 40)
                        } else throw Error("Invalid data");
                        let p = c.getBestVersionForData(h, n);
                        if (!p) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (e) {
                            if (e < p) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + p + ".\n")
                        } else e = p;
                        let E = function(t, e, n) {
                                let o = new i;
                                n.forEach(function(e) {
                                    o.put(e.mode.bit, 4), o.put(e.getLength(), d.getCharCountIndicator(e.mode, t)), e.write(o)
                                });
                                let a = r.getSymbolTotalCodewords(t),
                                    l = g.getTotalCodewordsCount(t, e),
                                    u = (a - l) * 8;
                                for (o.getLengthInBits() + 4 <= u && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                let s = (u - o.getLengthInBits()) / 8;
                                for (let t = 0; t < s; t++) o.put(t % 2 ? 17 : 236, 8);
                                return function(t, e, n) {
                                    let o, i;
                                    let a = r.getSymbolTotalCodewords(e),
                                        l = g.getTotalCodewordsCount(e, n),
                                        u = a - l,
                                        s = g.getBlocksCount(e, n),
                                        c = a % s,
                                        h = s - c,
                                        d = Math.floor(a / s),
                                        m = Math.floor(u / s),
                                        p = m + 1,
                                        E = d - m,
                                        y = new f(E),
                                        B = 0,
                                        w = Array(s),
                                        C = Array(s),
                                        A = 0,
                                        N = new Uint8Array(t.buffer);
                                    for (let t = 0; t < s; t++) {
                                        let e = t < h ? m : p;
                                        w[t] = N.slice(B, B + e), C[t] = y.encode(w[t]), B += e, A = Math.max(A, e)
                                    }
                                    let M = new Uint8Array(a),
                                        I = 0;
                                    for (o = 0; o < A; o++)
                                        for (i = 0; i < s; i++) o < w[i].length && (M[I++] = w[i][o]);
                                    for (o = 0; o < E; o++)
                                        for (i = 0; i < s; i++) M[I++] = C[i][o];
                                    return M
                                }(o, t, e)
                            }(e, n, h),
                            y = r.getSymbolSize(e),
                            B = new a(y);
                        return function(t, e) {
                                let n = t.size,
                                    r = u.getPositions(e);
                                for (let e = 0; e < r.length; e++) {
                                    let o = r[e][0],
                                        i = r[e][1];
                                    for (let e = -1; e <= 7; e++)
                                        if (!(o + e <= -1) && !(n <= o + e))
                                            for (let r = -1; r <= 7; r++) i + r <= -1 || n <= i + r || (e >= 0 && e <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === e || 6 === e) || e >= 2 && e <= 4 && r >= 2 && r <= 4 ? t.set(o + e, i + r, !0, !0) : t.set(o + e, i + r, !1, !0))
                                }
                            }(B, e),
                            function(t) {
                                let e = t.size;
                                for (let n = 8; n < e - 8; n++) {
                                    let e = n % 2 == 0;
                                    t.set(n, 6, e, !0), t.set(6, n, e, !0)
                                }
                            }(B),
                            function(t, e) {
                                let n = l.getPositions(e);
                                for (let e = 0; e < n.length; e++) {
                                    let r = n[e][0],
                                        o = n[e][1];
                                    for (let e = -2; e <= 2; e++)
                                        for (let n = -2; n <= 2; n++) - 2 === e || 2 === e || -2 === n || 2 === n || 0 === e && 0 === n ? t.set(r + e, o + n, !0, !0) : t.set(r + e, o + n, !1, !0)
                                }
                            }(B, e), setupFormatInfo(B, n, 0), e >= 7 && function(t, e) {
                                let n, r, o;
                                let i = t.size,
                                    a = c.getEncodedBits(e);
                                for (let e = 0; e < 18; e++) n = Math.floor(e / 3), r = e % 3 + i - 8 - 3, o = (a >> e & 1) == 1, t.set(n, r, o, !0), t.set(r, n, o, !0)
                            }(B, e),
                            function(t, e) {
                                let n = t.size,
                                    r = -1,
                                    o = n - 1,
                                    i = 7,
                                    a = 0;
                                for (let l = n - 1; l > 0; l -= 2)
                                    for (6 === l && l--;;) {
                                        for (let n = 0; n < 2; n++)
                                            if (!t.isReserved(o, l - n)) {
                                                let r = !1;
                                                a < e.length && (r = (e[a] >>> i & 1) == 1), t.set(o, l - n, r), -1 == --i && (a++, i = 7)
                                            }
                                        if ((o += r) < 0 || n <= o) {
                                            o -= r, r = -r;
                                            break
                                        }
                                    }
                            }(B, E), isNaN(o) && (o = s.getBestMask(B, setupFormatInfo.bind(null, B, n))), s.applyMask(o, B), setupFormatInfo(B, n, o), {
                                modules: B,
                                version: e,
                                errorCorrectionLevel: n,
                                maskPattern: o,
                                segments: h
                            }
                    }(t, n, p, h)
            }
        },
        9936: function(t, e, n) {
            let r = n(25153);

            function ReedSolomonEncoder(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            ReedSolomonEncoder.prototype.initialize = function(t) {
                this.degree = t, this.genPoly = r.generateECPolynomial(this.degree)
            }, ReedSolomonEncoder.prototype.encode = function(t) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let e = new Uint8Array(t.length + this.degree);
                e.set(t);
                let n = r.mod(e, this.genPoly),
                    o = this.degree - n.length;
                if (o > 0) {
                    let t = new Uint8Array(this.degree);
                    return t.set(n, o), t
                }
                return n
            }, t.exports = ReedSolomonEncoder
        },
        66579: function(t, e) {
            let n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            let o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            e.KANJI = RegExp(r, "g"), e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = RegExp(o, "g"), e.NUMERIC = RegExp(n, "g"), e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let i = RegExp("^" + r + "$"),
                a = RegExp("^" + n + "$"),
                l = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return i.test(t)
            }, e.testNumeric = function(t) {
                return a.test(t)
            }, e.testAlphanumeric = function(t) {
                return l.test(t)
            }
        },
        25082: function(t, e, n) {
            let r = n(37662),
                o = n(10894),
                i = n(77654),
                a = n(90690),
                l = n(69592),
                u = n(66579),
                s = n(13400),
                g = n(78343);

            function getStringByteLength(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function getSegments(t, e, n) {
                let r;
                let o = [];
                for (; null !== (r = t.exec(n));) o.push({
                    data: r[0],
                    index: r.index,
                    mode: e,
                    length: r[0].length
                });
                return o
            }

            function getSegmentsFromString(t) {
                let e, n;
                let o = getSegments(u.NUMERIC, r.NUMERIC, t),
                    i = getSegments(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
                s.isKanjiModeEnabled() ? (e = getSegments(u.BYTE, r.BYTE, t), n = getSegments(u.KANJI, r.KANJI, t)) : (e = getSegments(u.BYTE_KANJI, r.BYTE, t), n = []);
                let a = o.concat(i, e, n);
                return a.sort(function(t, e) {
                    return t.index - e.index
                }).map(function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                })
            }

            function getSegmentBitsLength(t, e) {
                switch (e) {
                    case r.NUMERIC:
                        return o.getBitsLength(t);
                    case r.ALPHANUMERIC:
                        return i.getBitsLength(t);
                    case r.KANJI:
                        return l.getBitsLength(t);
                    case r.BYTE:
                        return a.getBitsLength(t)
                }
            }

            function buildSingleSegment(t, e) {
                let n;
                let u = r.getBestModeForData(t);
                if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit) throw Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u));
                switch (n !== r.KANJI || s.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new o(t);
                    case r.ALPHANUMERIC:
                        return new i(t);
                    case r.KANJI:
                        return new l(t);
                    case r.BYTE:
                        return new a(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce(function(t, e) {
                    return "string" == typeof e ? t.push(buildSingleSegment(e, null)) : e.data && t.push(buildSingleSegment(e.data, e.mode)), t
                }, [])
            }, e.fromString = function(t, n) {
                let o = getSegmentsFromString(t, s.isKanjiModeEnabled()),
                    i = function(t) {
                        let e = [];
                        for (let n = 0; n < t.length; n++) {
                            let o = t[n];
                            switch (o.mode) {
                                case r.NUMERIC:
                                    e.push([o, {
                                        data: o.data,
                                        mode: r.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    e.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    e.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: getStringByteLength(o.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    e.push([{
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: getStringByteLength(o.data)
                                    }])
                            }
                        }
                        return e
                    }(o),
                    a = function(t, e) {
                        let n = {},
                            o = {
                                start: {}
                            },
                            i = ["start"];
                        for (let a = 0; a < t.length; a++) {
                            let l = t[a],
                                u = [];
                            for (let t = 0; t < l.length; t++) {
                                let s = l[t],
                                    g = "" + a + t;
                                u.push(g), n[g] = {
                                    node: s,
                                    lastCount: 0
                                }, o[g] = {};
                                for (let t = 0; t < i.length; t++) {
                                    let a = i[t];
                                    n[a] && n[a].node.mode === s.mode ? (o[a][g] = getSegmentBitsLength(n[a].lastCount + s.length, s.mode) - getSegmentBitsLength(n[a].lastCount, s.mode), n[a].lastCount += s.length) : (n[a] && (n[a].lastCount = s.length), o[a][g] = getSegmentBitsLength(s.length, s.mode) + 4 + r.getCharCountIndicator(s.mode, e))
                                }
                            }
                            i = u
                        }
                        for (let t = 0; t < i.length; t++) o[i[t]].end = 0;
                        return {
                            map: o,
                            table: n
                        }
                    }(i, n),
                    l = g.find_path(a.map, "start", "end"),
                    u = [];
                for (let t = 1; t < l.length - 1; t++) u.push(a.table[l[t]].node);
                return e.fromArray(u.reduce(function(t, e) {
                    let n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                    return n && n.mode === e.mode ? t[t.length - 1].data += e.data : t.push(e), t
                }, []))
            }, e.rawSplit = function(t) {
                return e.fromArray(getSegmentsFromString(t, s.isKanjiModeEnabled()))
            }
        },
        13400: function(t, e) {
            let n;
            let r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t) throw Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, e.getSymbolTotalCodewords = function(t) {
                return r[t]
            }, e.getBCHDigit = function(t) {
                let e = 0;
                for (; 0 !== t;) e++, t >>>= 1;
                return e
            }, e.setToSJISFunction = function(t) {
                if ("function" != typeof t) throw Error('"toSJISFunc" is not a valid function.');
                n = t
            }, e.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, e.toSJIS = function(t) {
                return n(t)
            }
        },
        64956: function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        78089: function(t, e, n) {
            let r = n(13400),
                o = n(37039),
                i = n(9406),
                a = n(37662),
                l = n(64956),
                u = r.getBCHDigit(7973);

            function getReservedBitsCount(t, e) {
                return a.getCharCountIndicator(t, e) + 4
            }
            e.from = function(t, e) {
                return l.isValid(t) ? parseInt(t, 10) : e
            }, e.getCapacity = function(t, e, n) {
                if (!l.isValid(t)) throw Error("Invalid QR Code version");
                void 0 === n && (n = a.BYTE);
                let i = r.getSymbolTotalCodewords(t),
                    u = o.getTotalCodewordsCount(t, e),
                    s = (i - u) * 8;
                if (n === a.MIXED) return s;
                let g = s - getReservedBitsCount(n, t);
                switch (n) {
                    case a.NUMERIC:
                        return Math.floor(g / 10 * 3);
                    case a.ALPHANUMERIC:
                        return Math.floor(g / 11 * 2);
                    case a.KANJI:
                        return Math.floor(g / 13);
                    case a.BYTE:
                    default:
                        return Math.floor(g / 8)
                }
            }, e.getBestVersionForData = function(t, n) {
                let r;
                let o = i.from(n, i.M);
                if (Array.isArray(t)) {
                    if (t.length > 1) return function(t, n) {
                        for (let r = 1; r <= 40; r++) {
                            let o = function(t, e) {
                                let n = 0;
                                return t.forEach(function(t) {
                                    let r = getReservedBitsCount(t.mode, e);
                                    n += r + t.getBitsLength()
                                }), n
                            }(t, r);
                            if (o <= e.getCapacity(r, n, a.MIXED)) return r
                        }
                    }(t, o);
                    if (0 === t.length) return 1;
                    r = t[0]
                } else r = t;
                return function(t, n, r) {
                    for (let o = 1; o <= 40; o++)
                        if (n <= e.getCapacity(o, r, t)) return o
                }(r.mode, r.getLength(), o)
            }, e.getEncodedBits = function(t) {
                if (!l.isValid(t) || t < 7) throw Error("Invalid QR Code version");
                let e = t << 12;
                for (; r.getBCHDigit(e) - u >= 0;) e ^= 7973 << r.getBCHDigit(e) - u;
                return t << 12 | e
            }
        },
        46028: function(t, e, n) {
            let r = n(10544);
            e.render = function(t, e, n) {
                var o;
                let i = n,
                    a = e;
                void 0 !== i || e && e.getContext || (i = e, e = void 0), e || (a = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), i = r.getOptions(i);
                let l = r.getImageWidth(t.modules.size, i),
                    u = a.getContext("2d"),
                    s = u.createImageData(l, l);
                return r.qrToImageData(s.data, t, i), o = a, u.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = l, o.width = l, o.style.height = l + "px", o.style.width = l + "px", u.putImageData(s, 0, 0), a
            }, e.renderToDataURL = function(t, n, r) {
                let o = r;
                void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
                let i = e.render(t, n, o),
                    a = o.type || "image/png",
                    l = o.rendererOpts || {};
                return i.toDataURL(a, l.quality)
            }
        },
        12330: function(t, e, n) {
            let r = n(10544);

            function getColorAttrib(t, e) {
                let n = t.a / 255,
                    r = e + '="' + t.hex + '"';
                return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function svgCmd(t, e, n) {
                let r = t + e;
                return void 0 !== n && (r += " " + n), r
            }
            e.render = function(t, e, n) {
                let o = r.getOptions(e),
                    i = t.modules.size,
                    a = t.modules.data,
                    l = i + 2 * o.margin,
                    u = o.color.light.a ? "<path " + getColorAttrib(o.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
                    s = "<path " + getColorAttrib(o.color.dark, "stroke") + ' d="' + function(t, e, n) {
                        let r = "",
                            o = 0,
                            i = !1,
                            a = 0;
                        for (let l = 0; l < t.length; l++) {
                            let u = Math.floor(l % e),
                                s = Math.floor(l / e);
                            u || i || (i = !0), t[l] ? (a++, l > 0 && u > 0 && t[l - 1] || (r += i ? svgCmd("M", u + n, .5 + s + n) : svgCmd("m", o, 0), o = 0, i = !1), u + 1 < e && t[l + 1] || (r += svgCmd("h", a), a = 0)) : o++
                        }
                        return r
                    }(a, i, o.margin) + '"/>',
                    g = o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "",
                    f = '<svg xmlns="http://www.w3.org/2000/svg" ' + g + ('viewBox="0 0 ' + l) + " " + l + '" shape-rendering="crispEdges">' + u + s + "</svg>\n";
                return "function" == typeof n && n(null, f), f
            }
        },
        10544: function(t, e) {
            function hex2rgba(t) {
                if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw Error("Color should be defined as hex string");
                let e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8) throw Error("Invalid hex color: " + t);
                (3 === e.length || 4 === e.length) && (e = Array.prototype.concat.apply([], e.map(function(t) {
                    return [t, t]
                }))), 6 === e.length && e.push("F", "F");
                let n = parseInt(e.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}), t.color || (t.color = {});
                let e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    n = t.width && t.width >= 21 ? t.width : void 0,
                    r = t.scale || 4;
                return {
                    width: n,
                    scale: n ? 4 : r,
                    margin: e,
                    color: {
                        dark: hex2rgba(t.color.dark || "#000000ff"),
                        light: hex2rgba(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }, e.getImageWidth = function(t, n) {
                let r = e.getScale(t, n);
                return Math.floor((t + 2 * n.margin) * r)
            }, e.qrToImageData = function(t, n, r) {
                let o = n.modules.size,
                    i = n.modules.data,
                    a = e.getScale(o, r),
                    l = Math.floor((o + 2 * r.margin) * a),
                    u = r.margin * a,
                    s = [r.color.light, r.color.dark];
                for (let e = 0; e < l; e++)
                    for (let n = 0; n < l; n++) {
                        let g = (e * l + n) * 4,
                            f = r.color.light;
                        if (e >= u && n >= u && e < l - u && n < l - u) {
                            let t = Math.floor((e - u) / a),
                                r = Math.floor((n - u) / a);
                            f = s[i[t * o + r] ? 1 : 0]
                        }
                        t[g++] = f.r, t[g++] = f.g, t[g++] = f.b, t[g] = f.a
                    }
            }
        }
    }
]);