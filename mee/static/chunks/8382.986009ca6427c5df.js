(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8382], {
        80237: function(i, c, l) {
            "use strict";
            c.Xx = c._w = c.aP = c.KS = c.jQ = void 0, l(35077);
            let v = l(52564);

            function gf(i) {
                let c = new Float64Array(16);
                if (i)
                    for (let l = 0; l < i.length; l++) c[l] = i[l];
                return c
            }
            l(55277), c.jQ = 64, c.KS = 64, c.aP = 32;
            let w = new Uint8Array(32);
            w[0] = 9;
            let I = gf(),
                E = gf([1]),
                P = (gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                C = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                D = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function set25519(i, c) {
                for (let l = 0; l < 16; l++) i[l] = 0 | c[l]
            }

            function car25519(i) {
                let c = 1;
                for (let l = 0; l < 16; l++) {
                    let v = i[l] + c + 65535;
                    c = Math.floor(v / 65536), i[l] = v - 65536 * c
                }
                i[0] += c - 1 + 37 * (c - 1)
            }

            function sel25519(i, c, l) {
                let v = ~(l - 1);
                for (let l = 0; l < 16; l++) {
                    let w = v & (i[l] ^ c[l]);
                    i[l] ^= w, c[l] ^= w
                }
            }

            function pack25519(i, c) {
                let l = gf(),
                    v = gf();
                for (let i = 0; i < 16; i++) v[i] = c[i];
                car25519(v), car25519(v), car25519(v);
                for (let i = 0; i < 2; i++) {
                    l[0] = v[0] - 65517;
                    for (let i = 1; i < 15; i++) l[i] = v[i] - 65535 - (l[i - 1] >> 16 & 1), l[i - 1] &= 65535;
                    l[15] = v[15] - 32767 - (l[14] >> 16 & 1);
                    let i = l[15] >> 16 & 1;
                    l[14] &= 65535, sel25519(v, l, 1 - i)
                }
                for (let c = 0; c < 16; c++) i[2 * c] = 255 & v[c], i[2 * c + 1] = v[c] >> 8
            }
            gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function add(i, c, l) {
                for (let v = 0; v < 16; v++) i[v] = c[v] + l[v]
            }

            function sub(i, c, l) {
                for (let v = 0; v < 16; v++) i[v] = c[v] - l[v]
            }

            function mul(i, c, l) {
                let v, w, I = 0,
                    E = 0,
                    P = 0,
                    C = 0,
                    D = 0,
                    q = 0,
                    $ = 0,
                    B = 0,
                    J = 0,
                    F = 0,
                    W = 0,
                    Q = 0,
                    X = 0,
                    ee = 0,
                    et = 0,
                    er = 0,
                    es = 0,
                    ea = 0,
                    eo = 0,
                    ec = 0,
                    el = 0,
                    eh = 0,
                    ep = 0,
                    ed = 0,
                    eg = 0,
                    ey = 0,
                    e_ = 0,
                    ev = 0,
                    em = 0,
                    eb = 0,
                    ew = 0,
                    eI = l[0],
                    eE = l[1],
                    ex = l[2],
                    eS = l[3],
                    eP = l[4],
                    eO = l[5],
                    eR = l[6],
                    eC = l[7],
                    eA = l[8],
                    eN = l[9],
                    ej = l[10],
                    eT = l[11],
                    ez = l[12],
                    eL = l[13],
                    eM = l[14],
                    eD = l[15];
                I += (v = c[0]) * eI, E += v * eE, P += v * ex, C += v * eS, D += v * eP, q += v * eO, $ += v * eR, B += v * eC, J += v * eA, F += v * eN, W += v * ej, Q += v * eT, X += v * ez, ee += v * eL, et += v * eM, er += v * eD, E += (v = c[1]) * eI, P += v * eE, C += v * ex, D += v * eS, q += v * eP, $ += v * eO, B += v * eR, J += v * eC, F += v * eA, W += v * eN, Q += v * ej, X += v * eT, ee += v * ez, et += v * eL, er += v * eM, es += v * eD, P += (v = c[2]) * eI, C += v * eE, D += v * ex, q += v * eS, $ += v * eP, B += v * eO, J += v * eR, F += v * eC, W += v * eA, Q += v * eN, X += v * ej, ee += v * eT, et += v * ez, er += v * eL, es += v * eM, ea += v * eD, C += (v = c[3]) * eI, D += v * eE, q += v * ex, $ += v * eS, B += v * eP, J += v * eO, F += v * eR, W += v * eC, Q += v * eA, X += v * eN, ee += v * ej, et += v * eT, er += v * ez, es += v * eL, ea += v * eM, eo += v * eD, D += (v = c[4]) * eI, q += v * eE, $ += v * ex, B += v * eS, J += v * eP, F += v * eO, W += v * eR, Q += v * eC, X += v * eA, ee += v * eN, et += v * ej, er += v * eT, es += v * ez, ea += v * eL, eo += v * eM, ec += v * eD, q += (v = c[5]) * eI, $ += v * eE, B += v * ex, J += v * eS, F += v * eP, W += v * eO, Q += v * eR, X += v * eC, ee += v * eA, et += v * eN, er += v * ej, es += v * eT, ea += v * ez, eo += v * eL, ec += v * eM, el += v * eD, $ += (v = c[6]) * eI, B += v * eE, J += v * ex, F += v * eS, W += v * eP, Q += v * eO, X += v * eR, ee += v * eC, et += v * eA, er += v * eN, es += v * ej, ea += v * eT, eo += v * ez, ec += v * eL, el += v * eM, eh += v * eD, B += (v = c[7]) * eI, J += v * eE, F += v * ex, W += v * eS, Q += v * eP, X += v * eO, ee += v * eR, et += v * eC, er += v * eA, es += v * eN, ea += v * ej, eo += v * eT, ec += v * ez, el += v * eL, eh += v * eM, ep += v * eD, J += (v = c[8]) * eI, F += v * eE, W += v * ex, Q += v * eS, X += v * eP, ee += v * eO, et += v * eR, er += v * eC, es += v * eA, ea += v * eN, eo += v * ej, ec += v * eT, el += v * ez, eh += v * eL, ep += v * eM, ed += v * eD, F += (v = c[9]) * eI, W += v * eE, Q += v * ex, X += v * eS, ee += v * eP, et += v * eO, er += v * eR, es += v * eC, ea += v * eA, eo += v * eN, ec += v * ej, el += v * eT, eh += v * ez, ep += v * eL, ed += v * eM, eg += v * eD, W += (v = c[10]) * eI, Q += v * eE, X += v * ex, ee += v * eS, et += v * eP, er += v * eO, es += v * eR, ea += v * eC, eo += v * eA, ec += v * eN, el += v * ej, eh += v * eT, ep += v * ez, ed += v * eL, eg += v * eM, ey += v * eD, Q += (v = c[11]) * eI, X += v * eE, ee += v * ex, et += v * eS, er += v * eP, es += v * eO, ea += v * eR, eo += v * eC, ec += v * eA, el += v * eN, eh += v * ej, ep += v * eT, ed += v * ez, eg += v * eL, ey += v * eM, e_ += v * eD, X += (v = c[12]) * eI, ee += v * eE, et += v * ex, er += v * eS, es += v * eP, ea += v * eO, eo += v * eR, ec += v * eC, el += v * eA, eh += v * eN, ep += v * ej, ed += v * eT, eg += v * ez, ey += v * eL, e_ += v * eM, ev += v * eD, ee += (v = c[13]) * eI, et += v * eE, er += v * ex, es += v * eS, ea += v * eP, eo += v * eO, ec += v * eR, el += v * eC, eh += v * eA, ep += v * eN, ed += v * ej, eg += v * eT, ey += v * ez, e_ += v * eL, ev += v * eM, em += v * eD, et += (v = c[14]) * eI, er += v * eE, es += v * ex, ea += v * eS, eo += v * eP, ec += v * eO, el += v * eR, eh += v * eC, ep += v * eA, ed += v * eN, eg += v * ej, ey += v * eT, e_ += v * ez, ev += v * eL, em += v * eM, eb += v * eD, er += (v = c[15]) * eI, es += v * eE, ea += v * ex, eo += v * eS, ec += v * eP, el += v * eO, eh += v * eR, ep += v * eC, ed += v * eA, eg += v * eN, ey += v * ej, e_ += v * eT, ev += v * ez, em += v * eL, eb += v * eM, ew += v * eD, I += 38 * es, E += 38 * ea, P += 38 * eo, C += 38 * ec, D += 38 * el, q += 38 * eh, $ += 38 * ep, B += 38 * ed, J += 38 * eg, F += 38 * ey, W += 38 * e_, Q += 38 * ev, X += 38 * em, ee += 38 * eb, et += 38 * ew, w = Math.floor((v = I + (w = 1) + 65535) / 65536), I = v - 65536 * w, w = Math.floor((v = E + w + 65535) / 65536), E = v - 65536 * w, w = Math.floor((v = P + w + 65535) / 65536), P = v - 65536 * w, w = Math.floor((v = C + w + 65535) / 65536), C = v - 65536 * w, w = Math.floor((v = D + w + 65535) / 65536), D = v - 65536 * w, w = Math.floor((v = q + w + 65535) / 65536), q = v - 65536 * w, w = Math.floor((v = $ + w + 65535) / 65536), $ = v - 65536 * w, w = Math.floor((v = B + w + 65535) / 65536), B = v - 65536 * w, w = Math.floor((v = J + w + 65535) / 65536), J = v - 65536 * w, w = Math.floor((v = F + w + 65535) / 65536), F = v - 65536 * w, w = Math.floor((v = W + w + 65535) / 65536), W = v - 65536 * w, w = Math.floor((v = Q + w + 65535) / 65536), Q = v - 65536 * w, w = Math.floor((v = X + w + 65535) / 65536), X = v - 65536 * w, w = Math.floor((v = ee + w + 65535) / 65536), ee = v - 65536 * w, w = Math.floor((v = et + w + 65535) / 65536), et = v - 65536 * w, w = Math.floor((v = er + w + 65535) / 65536), er = v - 65536 * w, I += w - 1 + 37 * (w - 1), w = Math.floor((v = I + (w = 1) + 65535) / 65536), I = v - 65536 * w, w = Math.floor((v = E + w + 65535) / 65536), E = v - 65536 * w, w = Math.floor((v = P + w + 65535) / 65536), P = v - 65536 * w, w = Math.floor((v = C + w + 65535) / 65536), C = v - 65536 * w, w = Math.floor((v = D + w + 65535) / 65536), D = v - 65536 * w, w = Math.floor((v = q + w + 65535) / 65536), q = v - 65536 * w, w = Math.floor((v = $ + w + 65535) / 65536), $ = v - 65536 * w, w = Math.floor((v = B + w + 65535) / 65536), B = v - 65536 * w, w = Math.floor((v = J + w + 65535) / 65536), J = v - 65536 * w, w = Math.floor((v = F + w + 65535) / 65536), F = v - 65536 * w, w = Math.floor((v = W + w + 65535) / 65536), W = v - 65536 * w, w = Math.floor((v = Q + w + 65535) / 65536), Q = v - 65536 * w, w = Math.floor((v = X + w + 65535) / 65536), X = v - 65536 * w, w = Math.floor((v = ee + w + 65535) / 65536), ee = v - 65536 * w, w = Math.floor((v = et + w + 65535) / 65536), et = v - 65536 * w, w = Math.floor((v = er + w + 65535) / 65536), er = v - 65536 * w, I += w - 1 + 37 * (w - 1), i[0] = I, i[1] = E, i[2] = P, i[3] = C, i[4] = D, i[5] = q, i[6] = $, i[7] = B, i[8] = J, i[9] = F, i[10] = W, i[11] = Q, i[12] = X, i[13] = ee, i[14] = et, i[15] = er
            }

            function edadd(i, c) {
                let l = gf(),
                    v = gf(),
                    w = gf(),
                    I = gf(),
                    E = gf(),
                    C = gf(),
                    D = gf(),
                    q = gf(),
                    $ = gf();
                sub(l, i[1], i[0]), sub($, c[1], c[0]), mul(l, l, $), add(v, i[0], i[1]), add($, c[0], c[1]), mul(v, v, $), mul(w, i[3], c[3]), mul(w, w, P), mul(I, i[2], c[2]), add(I, I, I), sub(E, v, l), sub(C, I, w), add(D, I, w), add(q, v, l), mul(i[0], E, C), mul(i[1], q, D), mul(i[2], D, C), mul(i[3], E, q)
            }

            function cswap(i, c, l) {
                for (let v = 0; v < 4; v++) sel25519(i[v], c[v], l)
            }

            function pack(i, c) {
                let l = gf(),
                    v = gf(),
                    w = gf();
                (function(i, c) {
                    let l;
                    let v = gf();
                    for (l = 0; l < 16; l++) v[l] = c[l];
                    for (l = 253; l >= 0; l--) mul(v, v, v), 2 !== l && 4 !== l && mul(v, v, c);
                    for (l = 0; l < 16; l++) i[l] = v[l]
                })(w, c[2]), mul(l, c[0], w), mul(v, c[1], w), pack25519(i, v), i[31] ^= function(i) {
                    let c = new Uint8Array(32);
                    return pack25519(c, i), 1 & c[0]
                }(l) << 7
            }

            function scalarbase(i, c) {
                let l = [gf(), gf(), gf(), gf()];
                set25519(l[0], C), set25519(l[1], D), set25519(l[2], E), mul(l[3], C, D),
                    function(i, c, l) {
                        set25519(i[0], I), set25519(i[1], E), set25519(i[2], E), set25519(i[3], I);
                        for (let v = 255; v >= 0; --v) {
                            let w = l[v / 8 | 0] >> (7 & v) & 1;
                            cswap(i, c, w), edadd(c, i), edadd(i, i), cswap(i, c, w)
                        }
                    }(i, l, c)
            }
            c._w = function(i) {
                if (i.length !== c.aP) throw Error(`ed25519: seed must be ${c.aP} bytes`);
                let l = (0, v.hash)(i);
                l[0] &= 248, l[31] &= 127, l[31] |= 64;
                let w = new Uint8Array(32),
                    I = [gf(), gf(), gf(), gf()];
                scalarbase(I, l), pack(w, I);
                let E = new Uint8Array(64);
                return E.set(i), E.set(w, 32), {
                    publicKey: w,
                    secretKey: E
                }
            };
            let q = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function modL(i, c) {
                let l, v, w, I;
                for (v = 63; v >= 32; --v) {
                    for (l = 0, w = v - 32, I = v - 12; w < I; ++w) c[w] += l - 16 * c[v] * q[w - (v - 32)], l = Math.floor((c[w] + 128) / 256), c[w] -= 256 * l;
                    c[w] += l, c[v] = 0
                }
                for (w = 0, l = 0; w < 32; w++) c[w] += l - (c[31] >> 4) * q[w], l = c[w] >> 8, c[w] &= 255;
                for (w = 0; w < 32; w++) c[w] -= l * q[w];
                for (v = 0; v < 32; v++) c[v + 1] += c[v] >> 8, i[v] = 255 & c[v]
            }

            function reduce(i) {
                let c = new Float64Array(64);
                for (let l = 0; l < 64; l++) c[l] = i[l];
                for (let c = 0; c < 64; c++) i[c] = 0;
                modL(i, c)
            }
            c.Xx = function(i, c) {
                let l = new Float64Array(64),
                    w = [gf(), gf(), gf(), gf()],
                    I = (0, v.hash)(i.subarray(0, 32));
                I[0] &= 248, I[31] &= 127, I[31] |= 64;
                let E = new Uint8Array(64);
                E.set(I.subarray(32), 32);
                let P = new v.SHA512;
                P.update(E.subarray(32)), P.update(c);
                let C = P.digest();
                P.clean(), reduce(C), scalarbase(w, C), pack(E, w), P.reset(), P.update(E.subarray(0, 32)), P.update(i.subarray(32)), P.update(c);
                let D = P.digest();
                reduce(D);
                for (let i = 0; i < 32; i++) l[i] = C[i];
                for (let i = 0; i < 32; i++)
                    for (let c = 0; c < 32; c++) l[i + c] += D[i] * I[c];
                return modL(E.subarray(32), l), E
            }
        },
        52564: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var v = l(34310),
                w = l(55277);
            c.DIGEST_LENGTH = 64, c.BLOCK_SIZE = 128;
            var I = function() {
                function SHA512() {
                    this.digestLength = c.DIGEST_LENGTH, this.blockSize = c.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return SHA512.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, SHA512.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, SHA512.prototype.clean = function() {
                    w.wipe(this._buffer), w.wipe(this._tempHi), w.wipe(this._tempLo), this.reset()
                }, SHA512.prototype.update = function(i, l) {
                    if (void 0 === l && (l = i.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var v = 0;
                    if (this._bytesHashed += l, this._bufferLength > 0) {
                        for (; this._bufferLength < c.BLOCK_SIZE && l > 0;) this._buffer[this._bufferLength++] = i[v++], l--;
                        this._bufferLength === this.blockSize && (hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (l >= this.blockSize && (v = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, i, v, l), l %= this.blockSize); l > 0;) this._buffer[this._bufferLength++] = i[v++], l--;
                    return this
                }, SHA512.prototype.finish = function(i) {
                    if (!this._finished) {
                        var c = this._bytesHashed,
                            l = this._bufferLength,
                            w = c % 128 < 112 ? 128 : 256;
                        this._buffer[l] = 128;
                        for (var I = l + 1; I < w - 8; I++) this._buffer[I] = 0;
                        v.writeUint32BE(c / 536870912 | 0, this._buffer, w - 8), v.writeUint32BE(c << 3, this._buffer, w - 4), hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, w), this._finished = !0
                    }
                    for (var I = 0; I < this.digestLength / 8; I++) v.writeUint32BE(this._stateHi[I], i, 8 * I), v.writeUint32BE(this._stateLo[I], i, 8 * I + 4);
                    return this
                }, SHA512.prototype.digest = function() {
                    var i = new Uint8Array(this.digestLength);
                    return this.finish(i), i
                }, SHA512.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, SHA512.prototype.restoreState = function(i) {
                    return this._stateHi.set(i.stateHi), this._stateLo.set(i.stateLo), this._bufferLength = i.bufferLength, i.buffer && this._buffer.set(i.buffer), this._bytesHashed = i.bytesHashed, this._finished = !1, this
                }, SHA512.prototype.cleanSavedState = function(i) {
                    w.wipe(i.stateHi), w.wipe(i.stateLo), i.buffer && w.wipe(i.buffer), i.bufferLength = 0, i.bytesHashed = 0
                }, SHA512
            }();
            c.SHA512 = I;
            var E = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function hashBlocks(i, c, l, w, I, P, C) {
                for (var D, q, $, B, J, F, W, Q, X = l[0], ee = l[1], et = l[2], er = l[3], es = l[4], ea = l[5], eo = l[6], ec = l[7], el = w[0], eh = w[1], ep = w[2], ed = w[3], eg = w[4], ey = w[5], e_ = w[6], ev = w[7]; C >= 128;) {
                    for (var em = 0; em < 16; em++) {
                        var eb = 8 * em + P;
                        i[em] = v.readUint32BE(I, eb), c[em] = v.readUint32BE(I, eb + 4)
                    }
                    for (var em = 0; em < 80; em++) {
                        var ew = X,
                            eI = ee,
                            eE = et,
                            ex = er,
                            eS = es,
                            eP = ea,
                            eO = eo,
                            eR = ec,
                            eC = el,
                            eA = eh,
                            eN = ep,
                            ej = ed,
                            eT = eg,
                            ez = ey,
                            eL = e_,
                            eM = ev;
                        if (D = ec, J = 65535 & (q = ev), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = (es >>> 14 | eg << 18) ^ (es >>> 18 | eg << 14) ^ (eg >>> 9 | es << 23), J += 65535 & (q = (eg >>> 14 | es << 18) ^ (eg >>> 18 | es << 14) ^ (es >>> 9 | eg << 23)), F += q >>> 16, W += 65535 & D, Q += D >>> 16, D = es & ea ^ ~es & eo, J += 65535 & (q = eg & ey ^ ~eg & e_), F += q >>> 16, W += 65535 & D, Q += D >>> 16, D = E[2 * em], J += 65535 & (q = E[2 * em + 1]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, D = i[em % 16], J += 65535 & (q = c[em % 16]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, $ = 65535 & W | Q << 16, B = 65535 & J | F << 16, D = $, J = 65535 & (q = B), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = (X >>> 28 | el << 4) ^ (el >>> 2 | X << 30) ^ (el >>> 7 | X << 25), J += 65535 & (q = (el >>> 28 | X << 4) ^ (X >>> 2 | el << 30) ^ (X >>> 7 | el << 25)), F += q >>> 16, W += 65535 & D, Q += D >>> 16, D = X & ee ^ X & et ^ ee & et, J += 65535 & (q = el & eh ^ el & ep ^ eh & ep), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, eR = 65535 & W | Q << 16, eM = 65535 & J | F << 16, D = ex, J = 65535 & (q = ej), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = $, J += 65535 & (q = B), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, ex = 65535 & W | Q << 16, ej = 65535 & J | F << 16, ee = ew, et = eI, er = eE, es = ex, ea = eS, eo = eP, ec = eO, X = eR, eh = eC, ep = eA, ed = eN, eg = ej, ey = eT, e_ = ez, ev = eL, el = eM, em % 16 == 15)
                            for (var eb = 0; eb < 16; eb++) D = i[eb], J = 65535 & (q = c[eb]), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = i[(eb + 9) % 16], J += 65535 & (q = c[(eb + 9) % 16]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, D = (($ = i[(eb + 1) % 16]) >>> 1 | (B = c[(eb + 1) % 16]) << 31) ^ ($ >>> 8 | B << 24) ^ $ >>> 7, J += 65535 & (q = (B >>> 1 | $ << 31) ^ (B >>> 8 | $ << 24) ^ (B >>> 7 | $ << 25)), F += q >>> 16, W += 65535 & D, Q += D >>> 16, D = (($ = i[(eb + 14) % 16]) >>> 19 | (B = c[(eb + 14) % 16]) << 13) ^ (B >>> 29 | $ << 3) ^ $ >>> 6, J += 65535 & (q = (B >>> 19 | $ << 13) ^ ($ >>> 29 | B << 3) ^ (B >>> 6 | $ << 26)), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, i[eb] = 65535 & W | Q << 16, c[eb] = 65535 & J | F << 16
                    }
                    D = X, J = 65535 & (q = el), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = l[0], J += 65535 & (q = w[0]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, l[0] = X = 65535 & W | Q << 16, w[0] = el = 65535 & J | F << 16, D = ee, J = 65535 & (q = eh), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = l[1], J += 65535 & (q = w[1]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, l[1] = ee = 65535 & W | Q << 16, w[1] = eh = 65535 & J | F << 16, D = et, J = 65535 & (q = ep), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = l[2], J += 65535 & (q = w[2]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, l[2] = et = 65535 & W | Q << 16, w[2] = ep = 65535 & J | F << 16, D = er, J = 65535 & (q = ed), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = l[3], J += 65535 & (q = w[3]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, l[3] = er = 65535 & W | Q << 16, w[3] = ed = 65535 & J | F << 16, D = es, J = 65535 & (q = eg), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = l[4], J += 65535 & (q = w[4]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, l[4] = es = 65535 & W | Q << 16, w[4] = eg = 65535 & J | F << 16, D = ea, J = 65535 & (q = ey), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = l[5], J += 65535 & (q = w[5]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, l[5] = ea = 65535 & W | Q << 16, w[5] = ey = 65535 & J | F << 16, D = eo, J = 65535 & (q = e_), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = l[6], J += 65535 & (q = w[6]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, l[6] = eo = 65535 & W | Q << 16, w[6] = e_ = 65535 & J | F << 16, D = ec, J = 65535 & (q = ev), F = q >>> 16, W = 65535 & D, Q = D >>> 16, D = l[7], J += 65535 & (q = w[7]), F += q >>> 16, W += 65535 & D, Q += D >>> 16, F += J >>> 16, W += F >>> 16, Q += W >>> 16, l[7] = ec = 65535 & W | Q << 16, w[7] = ev = 65535 & J | F << 16, P += 128, C -= 128
                }
                return P
            }
            c.hash = function(i) {
                var c = new I;
                c.update(i);
                var l = c.digest();
                return c.clean(), l
            }
        },
        58382: function(i, c, l) {
            "use strict";
            let v;
            l.d(c, {
                EthereumProvider: function() {
                    return rC
                },
                OPTIONAL_EVENTS: function() {
                    return rI
                },
                OPTIONAL_METHODS: function() {
                    return rb
                }
            });
            var w = l(512),
                I = l.n(w),
                E = l(3537);
            let P = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                C = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                D = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function jsonParseTransform(i, c) {
                if ("__proto__" === i || "constructor" === i && c && "object" == typeof c && "prototype" in c) {
                    console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`);
                    return
                }
                return c
            }

            function destr(i, c = {}) {
                if ("string" != typeof i) return i;
                let l = i.trim();
                if ('"' === i[0] && '"' === i.at(-1) && !i.includes("\\")) return l.slice(1, -1);
                if (l.length <= 9) {
                    let i = l.toLowerCase();
                    if ("true" === i) return !0;
                    if ("false" === i) return !1;
                    if ("undefined" === i) return;
                    if ("null" === i) return null;
                    if ("nan" === i) return Number.NaN;
                    if ("infinity" === i) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === i) return Number.NEGATIVE_INFINITY
                }
                if (!D.test(i)) {
                    if (c.strict) throw SyntaxError("[destr] Invalid JSON");
                    return i
                }
                try {
                    if (P.test(i) || C.test(i)) {
                        if (c.strict) throw Error("[destr] Possible prototype pollution");
                        return JSON.parse(i, jsonParseTransform)
                    }
                    return JSON.parse(i)
                } catch (l) {
                    if (c.strict) throw l;
                    return i
                }
            }
            var q = l(67133).Buffer;

            function asyncCall(i, ...c) {
                try {
                    var l;
                    return (l = i(...c)) && "function" == typeof l.then ? l : Promise.resolve(l)
                } catch (i) {
                    return Promise.reject(i)
                }
            }

            function stringify(i) {
                if (function(i) {
                        let c = typeof i;
                        return null === i || "object" !== c && "function" !== c
                    }(i)) return String(i);
                if (function(i) {
                        let c = Object.getPrototypeOf(i);
                        return !c || c.isPrototypeOf(Object)
                    }(i) || Array.isArray(i)) return JSON.stringify(i);
                if ("function" == typeof i.toJSON) return stringify(i.toJSON());
                throw Error("[unstorage] Cannot stringify value!")
            }
            let $ = "base64:";

            function normalizeKey(i) {
                return i ? i.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function unstorage_8581f561_normalizeBaseKey(i) {
                return (i = normalizeKey(i)) ? i + ":" : ""
            }
            let memory = () => {
                let i = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: c => i.has(c),
                    getItem: c => i.get(c) ? ? null,
                    getItemRaw: c => i.get(c) ? ? null,
                    setItem(c, l) {
                        i.set(c, l)
                    },
                    setItemRaw(c, l) {
                        i.set(c, l)
                    },
                    removeItem(c) {
                        i.delete(c)
                    },
                    getKeys: () => Array.from(i.keys()),
                    clear() {
                        i.clear()
                    },
                    dispose() {
                        i.clear()
                    }
                }
            };

            function watch(i, c, l) {
                return i.watch ? i.watch((i, v) => c(i, l + v)) : () => {}
            }
            async function dispose(i) {
                "function" == typeof i.dispose && await asyncCall(i.dispose)
            }

            function promisifyRequest(i) {
                return new Promise((c, l) => {
                    i.oncomplete = i.onsuccess = () => c(i.result), i.onabort = i.onerror = () => l(i.error)
                })
            }

            function createStore(i, c) {
                let l = indexedDB.open(i);
                l.onupgradeneeded = () => l.result.createObjectStore(c);
                let v = promisifyRequest(l);
                return (i, l) => v.then(v => l(v.transaction(c, i).objectStore(c)))
            }

            function defaultGetStore() {
                return v || (v = createStore("keyval-store", "keyval")), v
            }

            function get(i, c = defaultGetStore()) {
                return c("readonly", c => promisifyRequest(c.get(i)))
            }
            var B = l(43283),
                z = (i = {}) => {
                    let c;
                    let l = i.base && i.base.length > 0 ? `${i.base}:` : "",
                        e = i => l + i;
                    return i.dbName && i.storeName && (c = createStore(i.dbName, i.storeName)), {
                        name: "idb-keyval",
                        options: i,
                        hasItem: async i => !(typeof await get(e(i), c) > "u"),
                        getItem: async i => await get(e(i), c) ? ? null,
                        setItem: (i, l) => (function(i, c, l = defaultGetStore()) {
                            return l("readwrite", l => (l.put(c, i), promisifyRequest(l.transaction)))
                        })(e(i), l, c),
                        removeItem: i => (function(i, c = defaultGetStore()) {
                            return c("readwrite", c => (c.delete(i), promisifyRequest(c.transaction)))
                        })(e(i), c),
                        getKeys: () => (function(i = defaultGetStore()) {
                            return i("readonly", i => {
                                var c;
                                if (i.getAllKeys) return promisifyRequest(i.getAllKeys());
                                let l = [];
                                return (c = i => l.push(i.key), i.openCursor().onsuccess = function() {
                                    this.result && (c(this.result), this.result.continue())
                                }, promisifyRequest(i.transaction)).then(() => l)
                            })
                        })(c),
                        clear: () => (function(i = defaultGetStore()) {
                            return i("readwrite", i => (i.clear(), promisifyRequest(i.transaction)))
                        })(c)
                    }
                };
            let _ = class _ {
                constructor() {
                    this.indexedDb = function(i = {}) {
                        let c = {
                                mounts: {
                                    "": i.driver || memory()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            getMount = i => {
                                for (let l of c.mountpoints)
                                    if (i.startsWith(l)) return {
                                        base: l,
                                        relativeKey: i.slice(l.length),
                                        driver: c.mounts[l]
                                    };
                                return {
                                    base: "",
                                    relativeKey: i,
                                    driver: c.mounts[""]
                                }
                            },
                            getMounts = (i, l) => c.mountpoints.filter(c => c.startsWith(i) || l && i.startsWith(c)).map(l => ({
                                relativeBase: i.length > l.length ? i.slice(l.length) : void 0,
                                mountpoint: l,
                                driver: c.mounts[l]
                            })),
                            onChange = (i, l) => {
                                if (c.watching)
                                    for (let v of (l = normalizeKey(l), c.watchListeners)) v(i, l)
                            },
                            startWatch = async () => {
                                if (!c.watching)
                                    for (let i in c.watching = !0, c.mounts) c.unwatch[i] = await watch(c.mounts[i], onChange, i)
                            },
                            stopWatch = async () => {
                                if (c.watching) {
                                    for (let i in c.unwatch) await c.unwatch[i]();
                                    c.unwatch = {}, c.watching = !1
                                }
                            },
                            runBatch = (i, c, l) => {
                                let v = new Map,
                                    getBatch = i => {
                                        let c = v.get(i.base);
                                        return c || (c = {
                                            driver: i.driver,
                                            base: i.base,
                                            items: []
                                        }, v.set(i.base, c)), c
                                    };
                                for (let l of i) {
                                    let i = "string" == typeof l,
                                        v = normalizeKey(i ? l : l.key),
                                        w = i ? void 0 : l.value,
                                        I = i || !l.options ? c : { ...c,
                                            ...l.options
                                        },
                                        E = getMount(v);
                                    getBatch(E).items.push({
                                        key: v,
                                        value: w,
                                        relativeKey: E.relativeKey,
                                        options: I
                                    })
                                }
                                return Promise.all([...v.values()].map(i => l(i))).then(i => i.flat())
                            },
                            l = {
                                hasItem(i, c = {}) {
                                    i = normalizeKey(i);
                                    let {
                                        relativeKey: l,
                                        driver: v
                                    } = getMount(i);
                                    return asyncCall(v.hasItem, l, c)
                                },
                                getItem(i, c = {}) {
                                    i = normalizeKey(i);
                                    let {
                                        relativeKey: l,
                                        driver: v
                                    } = getMount(i);
                                    return asyncCall(v.getItem, l, c).then(i => destr(i))
                                },
                                getItems: (i, c) => runBatch(i, c, i => i.driver.getItems ? asyncCall(i.driver.getItems, i.items.map(i => ({
                                    key: i.relativeKey,
                                    options: i.options
                                })), c).then(c => c.map(c => ({
                                    key: function(...i) {
                                        return normalizeKey(i.join(":"))
                                    }(i.base, c.key),
                                    value: destr(c.value)
                                }))) : Promise.all(i.items.map(c => asyncCall(i.driver.getItem, c.relativeKey, c.options).then(i => ({
                                    key: c.key,
                                    value: destr(i)
                                }))))),
                                getItemRaw(i, c = {}) {
                                    i = normalizeKey(i);
                                    let {
                                        relativeKey: l,
                                        driver: v
                                    } = getMount(i);
                                    return v.getItemRaw ? asyncCall(v.getItemRaw, l, c) : asyncCall(v.getItem, l, c).then(i => "string" == typeof i && i.startsWith($) ? q.from(i.slice($.length), "base64") : i)
                                },
                                async setItem(i, c, v = {}) {
                                    if (void 0 === c) return l.removeItem(i);
                                    i = normalizeKey(i);
                                    let {
                                        relativeKey: w,
                                        driver: I
                                    } = getMount(i);
                                    I.setItem && (await asyncCall(I.setItem, w, stringify(c), v), I.watch || onChange("update", i))
                                },
                                async setItems(i, c) {
                                    await runBatch(i, c, async i => {
                                        i.driver.setItems && await asyncCall(i.driver.setItems, i.items.map(i => ({
                                            key: i.relativeKey,
                                            value: stringify(i.value),
                                            options: i.options
                                        })), c), i.driver.setItem && await Promise.all(i.items.map(c => asyncCall(i.driver.setItem, c.relativeKey, stringify(c.value), c.options)))
                                    })
                                },
                                async setItemRaw(i, c, v = {}) {
                                    if (void 0 === c) return l.removeItem(i, v);
                                    i = normalizeKey(i);
                                    let {
                                        relativeKey: w,
                                        driver: I
                                    } = getMount(i);
                                    if (I.setItemRaw) await asyncCall(I.setItemRaw, w, c, v);
                                    else {
                                        if (!I.setItem) return;
                                        await asyncCall(I.setItem, w, function(i) {
                                            if ("string" == typeof i) return i;
                                            let c = q.from(i).toString("base64");
                                            return $ + c
                                        }(c), v)
                                    }
                                    I.watch || onChange("update", i)
                                },
                                async removeItem(i, c = {}) {
                                    "boolean" == typeof c && (c = {
                                        removeMeta: c
                                    }), i = normalizeKey(i);
                                    let {
                                        relativeKey: l,
                                        driver: v
                                    } = getMount(i);
                                    v.removeItem && (await asyncCall(v.removeItem, l, c), (c.removeMeta || c.removeMata) && await asyncCall(v.removeItem, l + "$", c), v.watch || onChange("remove", i))
                                },
                                async getMeta(i, c = {}) {
                                    "boolean" == typeof c && (c = {
                                        nativeOnly: c
                                    }), i = normalizeKey(i);
                                    let {
                                        relativeKey: l,
                                        driver: v
                                    } = getMount(i), w = Object.create(null);
                                    if (v.getMeta && Object.assign(w, await asyncCall(v.getMeta, l, c)), !c.nativeOnly) {
                                        let i = await asyncCall(v.getItem, l + "$", c).then(i => destr(i));
                                        i && "object" == typeof i && ("string" == typeof i.atime && (i.atime = new Date(i.atime)), "string" == typeof i.mtime && (i.mtime = new Date(i.mtime)), Object.assign(w, i))
                                    }
                                    return w
                                },
                                setMeta(i, c, l = {}) {
                                    return this.setItem(i + "$", c, l)
                                },
                                removeMeta(i, c = {}) {
                                    return this.removeItem(i + "$", c)
                                },
                                async getKeys(i, c = {}) {
                                    i = unstorage_8581f561_normalizeBaseKey(i);
                                    let l = getMounts(i, !0),
                                        v = [],
                                        w = [];
                                    for (let i of l) {
                                        let l = await asyncCall(i.driver.getKeys, i.relativeBase, c),
                                            I = l.map(c => i.mountpoint + normalizeKey(c)).filter(i => !v.some(c => i.startsWith(c)));
                                        w.push(...I), v = [i.mountpoint, ...v.filter(c => !c.startsWith(i.mountpoint))]
                                    }
                                    return i ? w.filter(c => c.startsWith(i) && !c.endsWith("$")) : w.filter(i => !i.endsWith("$"))
                                },
                                async clear(i, c = {}) {
                                    i = unstorage_8581f561_normalizeBaseKey(i), await Promise.all(getMounts(i, !1).map(async i => {
                                        if (i.driver.clear) return asyncCall(i.driver.clear, i.relativeBase, c);
                                        if (i.driver.removeItem) {
                                            let l = await i.driver.getKeys(i.relativeBase || "", c);
                                            return Promise.all(l.map(l => i.driver.removeItem(l, c)))
                                        }
                                    }))
                                },
                                async dispose() {
                                    await Promise.all(Object.values(c.mounts).map(i => dispose(i)))
                                },
                                watch: async i => (await startWatch(), c.watchListeners.push(i), async () => {
                                    c.watchListeners = c.watchListeners.filter(c => c !== i), 0 === c.watchListeners.length && await stopWatch()
                                }),
                                async unwatch() {
                                    c.watchListeners = [], await stopWatch()
                                },
                                mount(i, v) {
                                    if ((i = unstorage_8581f561_normalizeBaseKey(i)) && c.mounts[i]) throw Error(`already mounted at ${i}`);
                                    return i && (c.mountpoints.push(i), c.mountpoints.sort((i, c) => c.length - i.length)), c.mounts[i] = v, c.watching && Promise.resolve(watch(v, onChange, i)).then(l => {
                                        c.unwatch[i] = l
                                    }).catch(console.error), l
                                },
                                async unmount(i, l = !0) {
                                    (i = unstorage_8581f561_normalizeBaseKey(i)) && c.mounts[i] && (c.watching && i in c.unwatch && (c.unwatch[i](), delete c.unwatch[i]), l && await dispose(c.mounts[i]), c.mountpoints = c.mountpoints.filter(c => c !== i), delete c.mounts[i])
                                },
                                getMount(i = "") {
                                    i = normalizeKey(i) + ":";
                                    let c = getMount(i);
                                    return {
                                        driver: c.driver,
                                        base: c.base
                                    }
                                },
                                getMounts(i = "", c = {}) {
                                    i = normalizeKey(i);
                                    let l = getMounts(i, c.parents);
                                    return l.map(i => ({
                                        driver: i.driver,
                                        base: i.mountpoint
                                    }))
                                }
                            };
                        return l
                    }({
                        driver: z({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(i => [i.key, i.value])
                }
                async getItem(i) {
                    let c = await this.indexedDb.getItem(i);
                    if (null !== c) return c
                }
                async setItem(i, c) {
                    await this.indexedDb.setItem(i, (0, B.u)(c))
                }
                async removeItem(i) {
                    await this.indexedDb.removeItem(i)
                }
            };
            var J = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof l.g ? l.g : "u" > typeof self ? self : {},
                F = {
                    exports: {}
                };

            function k(i) {
                var c;
                return [i[0], (0, B.D)(null != (c = i[1]) ? c : "")]
            }! function() {
                function t() {}
                t.prototype.getItem = function(i) {
                    return this.hasOwnProperty(i) ? String(this[i]) : null
                }, t.prototype.setItem = function(i, c) {
                    this[i] = String(c)
                }, t.prototype.removeItem = function(i) {
                    delete this[i]
                }, t.prototype.clear = function() {
                    let i = this;
                    Object.keys(i).forEach(function(c) {
                        i[c] = void 0, delete i[c]
                    })
                }, t.prototype.key = function(i) {
                    return i = i || 0, Object.keys(this)[i]
                }, t.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), "u" > typeof J && J.localStorage ? F.exports = J.localStorage : "u" > typeof window && window.localStorage ? F.exports = window.localStorage : F.exports = new t
            }();
            let K = class K {
                constructor() {
                    this.localStorage = F.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(k)
                }
                async getItem(i) {
                    let c = this.localStorage.getItem(i);
                    if (null !== c) return (0, B.D)(c)
                }
                async setItem(i, c) {
                    this.localStorage.setItem(i, (0, B.u)(c))
                }
                async removeItem(i) {
                    this.localStorage.removeItem(i)
                }
            };
            let O = async (i, c, l) => {
                    let v = "wc_storage_version",
                        w = await c.getItem(v);
                    if (w && w >= 1) {
                        l(c);
                        return
                    }
                    let I = await i.getKeys();
                    if (!I.length) {
                        l(c);
                        return
                    }
                    let E = [];
                    for (; I.length;) {
                        let l = I.shift();
                        if (!l) continue;
                        let v = l.toLowerCase();
                        if (v.includes("wc@") || v.includes("walletconnect") || v.includes("wc_") || v.includes("wallet_connect")) {
                            let v = await i.getItem(l);
                            await c.setItem(l, v), E.push(l)
                        }
                    }
                    await c.setItem(v, 1), l(c), j(i, E)
                },
                j = async (i, c) => {
                    c.length && c.forEach(async c => {
                        await i.removeItem(c)
                    })
                };
            let h = class h {
                constructor() {
                    this.initialized = !1, this.setInitialized = i => {
                        this.storage = i, this.initialized = !0
                    };
                    let i = new K;
                    this.storage = i;
                    try {
                        let c = new _;
                        O(i, c, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(i) {
                    return await this.initialize(), this.storage.getItem(i)
                }
                async setItem(i, c) {
                    return await this.initialize(), this.storage.setItem(i, c)
                }
                async removeItem(i) {
                    return await this.initialize(), this.storage.removeItem(i)
                }
                async initialize() {
                    this.initialized || await new Promise(i => {
                        let c = setInterval(() => {
                            this.initialized && (clearInterval(c), i())
                        }, 20)
                    })
                }
            };
            var W = l(63943),
                Q = l(72058),
                X = l(95097);
            let n = class n extends X.q {
                constructor(i) {
                    super(), this.opts = i, this.protocol = "wc", this.version = 2
                }
            };
            let index_es_h = class index_es_h extends X.q {
                constructor(i, c) {
                    super(), this.core = i, this.logger = c, this.records = new Map
                }
            };
            let a = class a {
                constructor(i, c) {
                    this.logger = i, this.core = c
                }
            };
            let u = class u extends X.q {
                constructor(i, c) {
                    super(), this.relayer = i, this.logger = c
                }
            };
            let g = class g extends X.q {
                constructor(i) {
                    super()
                }
            };
            let p = class p {
                constructor(i, c, l, v) {
                    this.core = i, this.logger = c, this.name = l
                }
            };
            let d = class d extends X.q {
                constructor(i, c) {
                    super(), this.relayer = i, this.logger = c
                }
            };
            let index_es_E = class index_es_E extends X.q {
                constructor(i, c) {
                    super(), this.core = i, this.logger = c
                }
            };
            let index_es_y = class index_es_y {
                constructor(i, c) {
                    this.projectId = i, this.logger = c
                }
            };
            let b = class b {
                constructor(i) {
                    this.opts = i, this.protocol = "wc", this.version = 2
                }
            };
            let S = class S {
                constructor(i) {
                    this.client = i
                }
            };
            var ee = l(80237),
                et = l(35077),
                er = l(58619);
            let es = "base64url",
                ea = "base58btc";
            var eo = l(72281),
                ec = l(21361),
                el = l(34901);

            function encodeJSON(i) {
                return (0, ec.B)((0, el.m)((0, B.u)(i), "utf8"), es)
            }

            function encodeIss(i) {
                let c = (0, el.m)("K36", ea),
                    l = "z" + (0, ec.B)((0, eo.z)([c, i]), ea);
                return ["did", "key", l].join(":")
            }

            function generateKeyPair(i = (0, et.randomBytes)(32)) {
                return ee._w(i)
            }
            async function signJWT(i, c, l, v, w = (0, er.fromMiliseconds)(Date.now())) {
                var I, E, P;
                let C = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    D = encodeIss(v.publicKey),
                    q = {
                        iss: D,
                        sub: i,
                        aud: c,
                        iat: w,
                        exp: w + l
                    },
                    $ = (I = {
                        header: C,
                        payload: q
                    }, (0, el.m)([encodeJSON(I.header), encodeJSON(I.payload)].join("."), "utf8")),
                    B = ee.Xx(v.secretKey, $);
                return [encodeJSON((E = {
                    header: C,
                    payload: q,
                    signature: B
                }).header), encodeJSON(E.payload), (P = E.signature, (0, ec.B)(P, es))].join(".")
            }
            l(69859);
            var eh = l(71188),
                ep = l(70411),
                ed = l(53620);
            let isBrowser = () => "undefined" != typeof window,
                truncateQuery = i => i.split("?")[0],
                eg = void 0 !== l.g && void 0 !== l.g.WebSocket ? l.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : l(91656);
            var ey = class {
                    constructor(i) {
                        if (this.url = i, this.events = new w.EventEmitter, this.registering = !1, !(0, ed.isWsUrl)(i)) throw Error(`Provided URL is not compatible with WebSocket connection: ${i}`);
                        this.url = i
                    }
                    get connected() {
                        return void 0 !== this.socket
                    }
                    get connecting() {
                        return this.registering
                    }
                    on(i, c) {
                        this.events.on(i, c)
                    }
                    once(i, c) {
                        this.events.once(i, c)
                    }
                    off(i, c) {
                        this.events.off(i, c)
                    }
                    removeListener(i, c) {
                        this.events.removeListener(i, c)
                    }
                    async open(i = this.url) {
                        await this.register(i)
                    }
                    async close() {
                        return new Promise((i, c) => {
                            if (void 0 === this.socket) {
                                c(Error("Connection already closed"));
                                return
                            }
                            this.socket.onclose = c => {
                                this.onClose(c), i()
                            }, this.socket.close()
                        })
                    }
                    async send(i, c) {
                        void 0 === this.socket && (this.socket = await this.register());
                        try {
                            this.socket.send((0, B.u)(i))
                        } catch (c) {
                            this.onError(i.id, c)
                        }
                    }
                    register(i = this.url) {
                        if (!(0, ed.isWsUrl)(i)) throw Error(`Provided URL is not compatible with WebSocket connection: ${i}`);
                        if (this.registering) {
                            let i = this.events.getMaxListeners();
                            return (this.events.listenerCount("register_error") >= i || this.events.listenerCount("open") >= i) && this.events.setMaxListeners(i + 1), new Promise((i, c) => {
                                this.events.once("register_error", i => {
                                    this.resetMaxListeners(), c(i)
                                }), this.events.once("open", () => {
                                    if (this.resetMaxListeners(), void 0 === this.socket) return c(Error("WebSocket connection is missing or invalid"));
                                    i(this.socket)
                                })
                            })
                        }
                        return this.url = i, this.registering = !0, new Promise((c, l) => {
                            let v = (0, ed.isReactNative)() ? void 0 : {
                                    rejectUnauthorized: !(0, ed.isLocalhostUrl)(i)
                                },
                                w = new eg(i, [], v);
                            isBrowser() ? w.onerror = i => {
                                l(this.emitError(i.error))
                            } : w.on("error", i => {
                                l(this.emitError(i))
                            }), w.onopen = () => {
                                this.onOpen(w), c(w)
                            }
                        })
                    }
                    onOpen(i) {
                        i.onmessage = i => this.onPayload(i), i.onclose = i => this.onClose(i), this.socket = i, this.registering = !1, this.events.emit("open")
                    }
                    onClose(i) {
                        this.socket = void 0, this.registering = !1, this.events.emit("close", i)
                    }
                    onPayload(i) {
                        if (void 0 === i.data) return;
                        let c = "string" == typeof i.data ? (0, B.D)(i.data) : i.data;
                        this.events.emit("payload", c)
                    }
                    onError(i, c) {
                        let l = this.parseError(c),
                            v = l.message || l.toString(),
                            w = (0, ed.formatJsonRpcError)(i, v);
                        this.events.emit("payload", w)
                    }
                    parseError(i, c = this.url) {
                        return (0, ed.parseConnectionError)(i, truncateQuery(c), "WS")
                    }
                    resetMaxListeners() {
                        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                    }
                    emitError(i) {
                        let c = this.parseError(Error((null == i ? void 0 : i.message) || `WebSocket connection failed for host: ${truncateQuery(this.url)}`));
                        return this.events.emit("register_error", c), c
                    }
                },
                e_ = l(99780),
                ev = l.n(e_),
                em = l(25566),
                Mi = function(i, c) {
                    if (i.length >= 255) throw TypeError("Alphabet too long");
                    for (var l = new Uint8Array(256), v = 0; v < l.length; v++) l[v] = 255;
                    for (var w = 0; w < i.length; w++) {
                        var I = i.charAt(w),
                            E = I.charCodeAt(0);
                        if (255 !== l[E]) throw TypeError(I + " is ambiguous");
                        l[E] = w
                    }
                    var P = i.length,
                        C = i.charAt(0),
                        D = Math.log(P) / Math.log(256),
                        q = Math.log(256) / Math.log(P);

                    function b(i) {
                        if ("string" != typeof i) throw TypeError("Expected String");
                        if (0 === i.length) return new Uint8Array;
                        var c = 0;
                        if (" " !== i[0]) {
                            for (var v = 0, w = 0; i[c] === C;) v++, c++;
                            for (var I = (i.length - c) * D + 1 >>> 0, E = new Uint8Array(I); i[c];) {
                                var q = l[i.charCodeAt(c)];
                                if (255 === q) return;
                                for (var $ = 0, B = I - 1;
                                    (0 !== q || $ < w) && -1 !== B; B--, $++) q += P * E[B] >>> 0, E[B] = q % 256 >>> 0, q = q / 256 >>> 0;
                                if (0 !== q) throw Error("Non-zero carry");
                                w = $, c++
                            }
                            if (" " !== i[c]) {
                                for (var J = I - w; J !== I && 0 === E[J];) J++;
                                for (var F = new Uint8Array(v + (I - J)), W = v; J !== I;) F[W++] = E[J++];
                                return F
                            }
                        }
                    }
                    return {
                        encode: function(c) {
                            if (c instanceof Uint8Array || (ArrayBuffer.isView(c) ? c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength) : Array.isArray(c) && (c = Uint8Array.from(c))), !(c instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === c.length) return "";
                            for (var l = 0, v = 0, w = 0, I = c.length; w !== I && 0 === c[w];) w++, l++;
                            for (var E = (I - w) * q + 1 >>> 0, D = new Uint8Array(E); w !== I;) {
                                for (var $ = c[w], B = 0, J = E - 1;
                                    (0 !== $ || B < v) && -1 !== J; J--, B++) $ += 256 * D[J] >>> 0, D[J] = $ % P >>> 0, $ = $ / P >>> 0;
                                if (0 !== $) throw Error("Non-zero carry");
                                v = B, w++
                            }
                            for (var F = E - v; F !== E && 0 === D[F];) F++;
                            for (var W = C.repeat(l); F < E; ++F) W += i.charAt(D[F]);
                            return W
                        },
                        decodeUnsafe: b,
                        decode: function(i) {
                            var l = b(i);
                            if (l) return l;
                            throw Error(`Non-${c} character`)
                        }
                    }
                };
            let Oe = i => {
                    if (i instanceof Uint8Array && "Uint8Array" === i.constructor.name) return i;
                    if (i instanceof ArrayBuffer) return new Uint8Array(i);
                    if (ArrayBuffer.isView(i)) return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                Ki = i => new TextEncoder().encode(i),
                ki = i => new TextDecoder().decode(i);
            let Bi = class Bi {
                constructor(i, c, l) {
                    this.name = i, this.prefix = c, this.baseEncode = l
                }
                encode(i) {
                    if (i instanceof Uint8Array) return `${this.prefix}${this.baseEncode(i)}`;
                    throw Error("Unknown type, must be binary type")
                }
            };
            let ji = class ji {
                constructor(i, c, l) {
                    if (this.name = i, this.prefix = c, void 0 === c.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = c.codePointAt(0), this.baseDecode = l
                }
                decode(i) {
                    if ("string" == typeof i) {
                        if (i.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(i)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(i.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(i) {
                    return xe(this, i)
                }
            };
            let Vi = class Vi {
                constructor(i) {
                    this.decoders = i
                }
                or(i) {
                    return xe(this, i)
                }
                decode(i) {
                    let c = i[0],
                        l = this.decoders[c];
                    if (l) return l.decode(i);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(i)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            };
            let xe = (i, c) => new Vi({ ...i.decoders || {
                    [i.prefix]: i
                },
                ...c.decoders || {
                    [c.prefix]: c
                }
            });
            let qi = class qi {
                constructor(i, c, l, v) {
                    this.name = i, this.prefix = c, this.baseEncode = l, this.baseDecode = v, this.encoder = new Bi(i, c, l), this.decoder = new ji(i, c, v)
                }
                encode(i) {
                    return this.encoder.encode(i)
                }
                decode(i) {
                    return this.decoder.decode(i)
                }
            };
            let H = ({
                    name: i,
                    prefix: c,
                    encode: l,
                    decode: v
                }) => new qi(i, c, l, v),
                M = ({
                    prefix: i,
                    name: c,
                    alphabet: l
                }) => {
                    let {
                        encode: v,
                        decode: w
                    } = Mi(l, c);
                    return H({
                        prefix: i,
                        name: c,
                        encode: v,
                        decode: i => Oe(w(i))
                    })
                },
                Yi = (i, c, l, v) => {
                    let w = {};
                    for (let i = 0; i < c.length; ++i) w[c[i]] = i;
                    let I = i.length;
                    for (;
                        "=" === i[I - 1];) --I;
                    let E = new Uint8Array(I * l / 8 | 0),
                        P = 0,
                        C = 0,
                        D = 0;
                    for (let c = 0; c < I; ++c) {
                        let I = w[i[c]];
                        if (void 0 === I) throw SyntaxError(`Non-${v} character`);
                        C = C << l | I, (P += l) >= 8 && (P -= 8, E[D++] = 255 & C >> P)
                    }
                    if (P >= l || 255 & C << 8 - P) throw SyntaxError("Unexpected end of data");
                    return E
                },
                Gi = (i, c, l) => {
                    let v = "=" === c[c.length - 1],
                        w = (1 << l) - 1,
                        I = "",
                        E = 0,
                        P = 0;
                    for (let v = 0; v < i.length; ++v)
                        for (P = P << 8 | i[v], E += 8; E > l;) E -= l, I += c[w & P >> E];
                    if (E && (I += c[w & P << l - E]), v)
                        for (; I.length * l & 7;) I += "=";
                    return I
                },
                index_es_p = ({
                    name: i,
                    prefix: c,
                    bitsPerChar: l,
                    alphabet: v
                }) => H({
                    prefix: c,
                    name: i,
                    encode: i => Gi(i, v, l),
                    decode: c => Yi(c, v, l, i)
                }),
                eb = H({
                    prefix: "\x00",
                    name: "identity",
                    encode: i => ki(i),
                    decode: i => Ki(i)
                });
            var ew = Object.freeze({
                __proto__: null,
                identity: eb
            });
            let eI = index_es_p({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var eE = Object.freeze({
                __proto__: null,
                base2: eI
            });
            let ex = index_es_p({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var eS = Object.freeze({
                __proto__: null,
                base8: ex
            });
            let eP = M({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var eO = Object.freeze({
                __proto__: null,
                base10: eP
            });
            let eR = index_es_p({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                eC = index_es_p({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var eA = Object.freeze({
                __proto__: null,
                base16: eR,
                base16upper: eC
            });
            let eN = index_es_p({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                ej = index_es_p({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                eT = index_es_p({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                ez = index_es_p({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                eL = index_es_p({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                eM = index_es_p({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                eD = index_es_p({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                ek = index_es_p({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                eU = index_es_p({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var e$ = Object.freeze({
                __proto__: null,
                base32: eN,
                base32upper: ej,
                base32pad: eT,
                base32padupper: ez,
                base32hex: eL,
                base32hexupper: eM,
                base32hexpad: eD,
                base32hexpadupper: ek,
                base32z: eU
            });
            let eK = M({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                eH = M({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var eV = Object.freeze({
                __proto__: null,
                base36: eK,
                base36upper: eH
            });
            let eB = M({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                eG = M({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var eJ = Object.freeze({
                __proto__: null,
                base58btc: eB,
                base58flickr: eG
            });
            let eF = index_es_p({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                eW = index_es_p({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                eZ = index_es_p({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                eY = index_es_p({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var eQ = Object.freeze({
                __proto__: null,
                base64: eF,
                base64pad: eW,
                base64url: eZ,
                base64urlpad: eY
            });
            let eX = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                e0 = eX.reduce((i, c, l) => (i[l] = c, i), []),
                e1 = eX.reduce((i, c, l) => (i[c.codePointAt(0)] = l, i), []),
                e5 = H({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(i) {
                        return i.reduce((i, c) => i += e0[c], "")
                    },
                    decode: function(i) {
                        let c = [];
                        for (let l of i) {
                            let i = e1[l.codePointAt(0)];
                            if (void 0 === i) throw Error(`Non-base256emoji character: ${l}`);
                            c.push(i)
                        }
                        return new Uint8Array(c)
                    }
                });
            var e6 = Object.freeze({
                __proto__: null,
                base256emoji: e5
            });

            function Ne(i, c, l) {
                c = c || [], l = l || 0;
                for (var v = l; i >= 2147483648;) c[l++] = 255 & i | 128, i /= 128;
                for (; - 128 & i;) c[l++] = 255 & i | 128, i >>>= 7;
                return c[l] = 0 | i, Ne.bytes = l - v + 1, c
            }

            function ae(i, c) {
                var l, v = 0,
                    c = c || 0,
                    w = 0,
                    I = c,
                    E = i.length;
                do {
                    if (I >= E) throw ae.bytes = 0, RangeError("Could not decode varint");
                    l = i[I++], v += w < 28 ? (127 & l) << w : (127 & l) * Math.pow(2, w), w += 7
                } while (l >= 128);
                return ae.bytes = I - c, v
            }
            var e2 = {
                encode: Ne,
                decode: ae,
                encodingLength: function(i) {
                    return i < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : i < 34359738368 ? 5 : i < 4398046511104 ? 6 : i < 562949953421312 ? 7 : i < 72057594037927940 ? 8 : i < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let Fe = (i, c, l = 0) => (e2.encode(i, c, l), c),
                $e = i => e2.encodingLength(i),
                oe = (i, c) => {
                    let l = c.byteLength,
                        v = $e(i),
                        w = v + $e(l),
                        I = new Uint8Array(w + l);
                    return Fe(i, I, 0), Fe(l, I, v), I.set(c, w), new Hs(i, l, c, I)
                };
            let Hs = class Hs {
                constructor(i, c, l, v) {
                    this.code = i, this.size = c, this.digest = l, this.bytes = v
                }
            };
            let Me = ({
                name: i,
                code: c,
                encode: l
            }) => new Ws(i, c, l);
            let Ws = class Ws {
                constructor(i, c, l) {
                    this.name = i, this.code = c, this.encode = l
                }
                digest(i) {
                    if (i instanceof Uint8Array) {
                        let c = this.encode(i);
                        return c instanceof Uint8Array ? oe(this.code, c) : c.then(i => oe(this.code, i))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            };
            let Ke = i => async c => new Uint8Array(await crypto.subtle.digest(i, c)),
                e3 = Me({
                    name: "sha2-256",
                    code: 18,
                    encode: Ke("SHA-256")
                }),
                e4 = Me({
                    name: "sha2-512",
                    code: 19,
                    encode: Ke("SHA-512")
                });
            var e8 = Object.freeze({
                    __proto__: null,
                    sha256: e3,
                    sha512: e4
                }),
                e7 = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: Oe,
                        digest: i => oe(0, Oe(i))
                    }
                });
            new TextEncoder, new TextDecoder;
            let e9 = { ...ew,
                ...eE,
                ...eS,
                ...eO,
                ...eA,
                ...e$,
                ...eV,
                ...eJ,
                ...eQ,
                ...e6
            };

            function Ve(i) {
                return null != globalThis.Buffer ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : i
            }

            function qe(i, c, l, v) {
                return {
                    name: i,
                    prefix: c,
                    encoder: {
                        name: i,
                        prefix: c,
                        encode: l
                    },
                    decoder: {
                        decode: v
                    }
                }
            }({ ...e8,
                ...e7
            });
            let te = qe("utf8", "u", i => "u" + new TextDecoder("utf8").decode(i), i => new TextEncoder().encode(i.substring(1))),
                tn = qe("ascii", "a", i => {
                    let c = "a";
                    for (let l = 0; l < i.length; l++) c += String.fromCharCode(i[l]);
                    return c
                }, i => {
                    i = i.substring(1);
                    let c = function(i = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Ve(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i)
                    }(i.length);
                    for (let l = 0; l < i.length; l++) c[l] = i.charCodeAt(l);
                    return c
                }),
                ts = {
                    utf8: te,
                    "utf-8": te,
                    hex: e9.base16,
                    latin1: tn,
                    ascii: tn,
                    binary: tn,
                    ...e9
                },
                to = "core",
                tc = `wc@2:${to}:`,
                tl = {
                    logger: "error"
                },
                th = {
                    database: ":memory:"
                },
                tp = "client_ed25519_seed",
                tf = er.ONE_DAY,
                td = er.SIX_HOURS,
                tg = "wss://relay.walletconnect.com",
                ty = "wss://relay.walletconnect.org",
                t_ = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    transport_closed: "relayer_transport_closed",
                    publish: "relayer_publish"
                },
                tm = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                tb = er.ONE_SECOND / 2,
                tw = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                tI = 1e3 * er.FIVE_SECONDS,
                tE = {
                    wc_pairingDelete: {
                        req: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: er.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: er.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                tx = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                tS = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                tP = "verify-api",
                tO = "https://verify.walletconnect.com";
            let vt = class vt {
                constructor(i, c) {
                    this.core = i, this.logger = c, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = tc, this.init = async () => {
                        if (!this.initialized) {
                            let i = await this.getKeyChain();
                            "u" > typeof i && (this.keychain = i), this.initialized = !0
                        }
                    }, this.has = i => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, c) => {
                        this.isInitialized(), this.keychain.set(i, c), await this.persist()
                    }, this.get = i => {
                        this.isInitialized();
                        let c = this.keychain.get(i);
                        if (typeof c > "u") {
                            let {
                                message: c
                            } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${i}`);
                            throw Error(c)
                        }
                        return c
                    }, this.del = async i => {
                        this.isInitialized(), this.keychain.delete(i), await this.persist()
                    }, this.core = i, this.logger = (0, Q.generateChildLogger)(c, this.name)
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setKeyChain(i) {
                    await this.core.storage.setItem(this.storageKey, (0, E.KC)(i))
                }
                async getKeyChain() {
                    let i = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof i ? (0, E.IP)(i) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
            };
            let It = class It {
                constructor(i, c, l) {
                    this.core = i, this.logger = c, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = i => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
                        this.isInitialized();
                        let i = await this.getClientSeed(),
                            c = generateKeyPair(i);
                        return encodeIss(c.publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        let i = (0, E.Au)();
                        return this.setPrivateKey(i.publicKey, i.privateKey)
                    }, this.signJWT = async i => {
                        this.isInitialized();
                        let c = await this.getClientSeed(),
                            l = generateKeyPair(c),
                            v = (0, E.jd)();
                        return await signJWT(v, i, tf, l)
                    }, this.generateSharedKey = (i, c, l) => {
                        this.isInitialized();
                        let v = this.getPrivateKey(i),
                            w = (0, E.m$)(v, c);
                        return this.setSymKey(w, l)
                    }, this.setSymKey = async (i, c) => {
                        this.isInitialized();
                        let l = c || (0, E.Ym)(i);
                        return await this.keychain.set(l, i), l
                    }, this.deleteKeyPair = async i => {
                        this.isInitialized(), await this.keychain.del(i)
                    }, this.deleteSymKey = async i => {
                        this.isInitialized(), await this.keychain.del(i)
                    }, this.encode = async (i, c, l) => {
                        this.isInitialized();
                        let v = (0, E.EN)(l),
                            w = (0, B.u)(c);
                        if ((0, E.Q8)(v)) {
                            let c = v.senderPublicKey,
                                l = v.receiverPublicKey;
                            i = await this.generateSharedKey(c, l)
                        }
                        let I = this.getSymKey(i),
                            {
                                type: P,
                                senderPublicKey: C
                            } = v;
                        return (0, E.HI)({
                            type: P,
                            symKey: I,
                            message: w,
                            senderPublicKey: C
                        })
                    }, this.decode = async (i, c, l) => {
                        this.isInitialized();
                        let v = (0, E.Ll)(c, l);
                        if ((0, E.Q8)(v)) {
                            let c = v.receiverPublicKey,
                                l = v.senderPublicKey;
                            i = await this.generateSharedKey(c, l)
                        }
                        let w = this.getSymKey(i),
                            I = (0, E.pe)({
                                symKey: w,
                                encoded: c
                            });
                        return (0, B.D)(I)
                    }, this.getPayloadType = i => {
                        let c = (0, E.vB)(i);
                        return (0, E.WG)(c.type)
                    }, this.getPayloadSenderPublicKey = i => {
                        let c = (0, E.vB)(i);
                        return c.senderPublicKey ? (0, eh.BB)(c.senderPublicKey, E.AW) : void 0
                    }, this.core = i, this.logger = (0, Q.generateChildLogger)(c, this.name), this.keychain = l || new vt(this.core, this.logger)
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                async setPrivateKey(i, c) {
                    return await this.keychain.set(i, c), i
                }
                getPrivateKey(i) {
                    return this.keychain.get(i)
                }
                async getClientSeed() {
                    let i = "";
                    try {
                        i = this.keychain.get(tp)
                    } catch {
                        i = (0, E.jd)(), await this.keychain.set(tp, i)
                    }
                    return function(i, c = "utf8") {
                        let l = ts[c];
                        if (!l) throw Error(`Unsupported encoding "${c}"`);
                        return ("utf8" === c || "utf-8" === c) && null != globalThis.Buffer && null != globalThis.Buffer.from ? Ve(globalThis.Buffer.from(i, "utf-8")) : l.decoder.decode(`${l.prefix}${i}`)
                    }(i, "base16")
                }
                getSymKey(i) {
                    return this.keychain.get(i)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
            };
            let Ct = class Ct extends a {
                constructor(i, c) {
                    super(i, c), this.logger = i, this.core = c, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = tc, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let i = await this.getRelayerMessages();
                                "u" > typeof i && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (i) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (i, c) => {
                        this.isInitialized();
                        let l = (0, E.rj)(c),
                            v = this.messages.get(i);
                        return typeof v > "u" && (v = {}), "u" > typeof v[l] || (v[l] = c, this.messages.set(i, v), await this.persist()), l
                    }, this.get = i => {
                        this.isInitialized();
                        let c = this.messages.get(i);
                        return typeof c > "u" && (c = {}), c
                    }, this.has = (i, c) => {
                        this.isInitialized();
                        let l = this.get(i),
                            v = (0, E.rj)(c);
                        return "u" > typeof l[v]
                    }, this.del = async i => {
                        this.isInitialized(), this.messages.delete(i), await this.persist()
                    }, this.logger = (0, Q.generateChildLogger)(i, this.name), this.core = c
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setRelayerMessages(i) {
                    await this.core.storage.setItem(this.storageKey, (0, E.KC)(i))
                }
                async getRelayerMessages() {
                    let i = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof i ? (0, E.IP)(i) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
            };
            let lr = class lr extends u {
                constructor(i, c) {
                    super(i, c), this.relayer = i, this.logger = c, this.events = new w.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, er.toMiliseconds)(er.TEN_SECONDS), this.queueTimeout = (0, er.toMiliseconds)(er.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, c, l) => {
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: i,
                                message: c,
                                opts: l
                            }
                        });
                        try {
                            let v = l ? .ttl || td,
                                w = (0, E._H)(l),
                                I = l ? .prompt || !1,
                                P = l ? .tag || 0,
                                C = l ? .id || (0, ed.getBigIntRpcId)().toString(),
                                D = {
                                    topic: i,
                                    message: c,
                                    opts: {
                                        ttl: v,
                                        relay: w,
                                        prompt: I,
                                        tag: P,
                                        id: C
                                    }
                                },
                                q = setTimeout(() => this.queue.set(C, D), this.queueTimeout);
                            try {
                                await await (0, E.hF)(this.rpcPublish(i, c, v, w, I, P, C), this.publishTimeout), clearTimeout(q), this.relayer.events.emit(t_.publish, D)
                            } catch {
                                this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0;
                                return
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: i,
                                    message: c,
                                    opts: l
                                }
                            })
                        } catch (i) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(i), i
                        }
                    }, this.on = (i, c) => {
                        this.events.on(i, c)
                    }, this.once = (i, c) => {
                        this.events.once(i, c)
                    }, this.off = (i, c) => {
                        this.events.off(i, c)
                    }, this.removeListener = (i, c) => {
                        this.events.removeListener(i, c)
                    }, this.relayer = i, this.logger = (0, Q.generateChildLogger)(c, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                rpcPublish(i, c, l, v, w, I, P) {
                    var C, D, q, $;
                    let B = {
                        method: (0, E.cO)(v.protocol).publish,
                        params: {
                            topic: i,
                            message: c,
                            ttl: l,
                            prompt: w,
                            tag: I
                        },
                        id: P
                    };
                    return (0, E.o8)(null == (C = B.params) ? void 0 : C.prompt) && (null == (D = B.params) || delete D.prompt), (0, E.o8)(null == (q = B.params) ? void 0 : q.tag) && (null == ($ = B.params) || delete $.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: B
                    }), this.relayer.request(B)
                }
                onPublish(i) {
                    this.queue.delete(i)
                }
                checkQueue() {
                    this.queue.forEach(async i => {
                        let {
                            topic: c,
                            message: l,
                            opts: v
                        } = i;
                        await this.publish(c, l, v)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(W.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(t_.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(t_.message_ack, i => {
                        this.onPublish(i.id.toString())
                    })
                }
            };
            let dr = class dr {
                constructor() {
                    this.map = new Map, this.set = (i, c) => {
                        let l = this.get(i);
                        this.exists(i, c) || this.map.set(i, [...l, c])
                    }, this.get = i => this.map.get(i) || [], this.exists = (i, c) => this.get(i).includes(c), this.delete = (i, c) => {
                        if (typeof c > "u") {
                            this.map.delete(i);
                            return
                        }
                        if (!this.map.has(i)) return;
                        let l = this.get(i);
                        if (!this.exists(i, c)) return;
                        let v = l.filter(i => i !== c);
                        if (!v.length) {
                            this.map.delete(i);
                            return
                        }
                        this.map.set(i, v)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            };
            var tR = Object.defineProperty,
                tC = Object.defineProperties,
                tA = Object.getOwnPropertyDescriptors,
                tN = Object.getOwnPropertySymbols,
                tj = Object.prototype.hasOwnProperty,
                tT = Object.prototype.propertyIsEnumerable,
                Rt = (i, c, l) => c in i ? tR(i, c, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : i[c] = l,
                index_es_K = (i, c) => {
                    for (var l in c || (c = {})) tj.call(c, l) && Rt(i, l, c[l]);
                    if (tN)
                        for (var l of tN(c)) tT.call(c, l) && Rt(i, l, c[l]);
                    return i
                },
                pe = (i, c) => tC(i, tA(c));
            let Tt = class Tt extends d {
                constructor(i, c) {
                    super(i, c), this.relayer = i, this.logger = c, this.subscriptions = new Map, this.topicMap = new dr, this.events = new w.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = tc, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (i, c) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: i,
                                opts: c
                            }
                        });
                        try {
                            let l = (0, E._H)(c),
                                v = {
                                    topic: i,
                                    relay: l
                                };
                            this.pending.set(i, v);
                            let w = await this.rpcSubscribe(i, l);
                            return this.onSubscribe(w, v), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: i,
                                    opts: c
                                }
                            }), w
                        } catch (i) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(i), i
                        }
                    }, this.unsubscribe = async (i, c) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof c ? .id ? await this.unsubscribeById(i, c.id, c) : await this.unsubscribeByTopic(i, c)
                    }, this.isSubscribed = async i => !!this.topics.includes(i) || await new Promise((c, l) => {
                        let v = new er.Watch;
                        v.start(this.pendingSubscriptionWatchLabel);
                        let w = setInterval(() => {
                            !this.pending.has(i) && this.topics.includes(i) && (clearInterval(w), v.stop(this.pendingSubscriptionWatchLabel), c(!0)), v.elapsed(this.pendingSubscriptionWatchLabel) >= tI && (clearInterval(w), v.stop(this.pendingSubscriptionWatchLabel), l(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (i, c) => {
                        this.events.on(i, c)
                    }, this.once = (i, c) => {
                        this.events.once(i, c)
                    }, this.off = (i, c) => {
                        this.events.off(i, c)
                    }, this.removeListener = (i, c) => {
                        this.events.removeListener(i, c)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = i, this.logger = (0, Q.generateChildLogger)(c, this.name), this.clientId = ""
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(i, c) {
                    let l = !1;
                    try {
                        l = this.getSubscription(i).topic === c
                    } catch {}
                    return l
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(i, c) {
                    let l = this.topicMap.get(i);
                    await Promise.all(l.map(async l => await this.unsubscribeById(i, l, c)))
                }
                async unsubscribeById(i, c, l) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: i,
                            id: c,
                            opts: l
                        }
                    });
                    try {
                        let v = (0, E._H)(l);
                        await this.rpcUnsubscribe(i, c, v);
                        let w = (0, E.D6)("USER_DISCONNECTED", `${this.name}, ${i}`);
                        await this.onUnsubscribe(i, c, w), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: i,
                                id: c,
                                opts: l
                            }
                        })
                    } catch (i) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i
                    }
                }
                async rpcSubscribe(i, c) {
                    let l = {
                        method: (0, E.cO)(c.protocol).subscribe,
                        params: {
                            topic: i
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: l
                    });
                    try {
                        await await (0, E.hF)(this.relayer.request(l), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(t_.connection_stalled)
                    }
                    return (0, E.rj)(i + this.clientId)
                }
                async rpcBatchSubscribe(i) {
                    if (!i.length) return;
                    let c = i[0].relay,
                        l = {
                            method: (0, E.cO)(c.protocol).batchSubscribe,
                            params: {
                                topics: i.map(i => i.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: l
                    });
                    try {
                        return await await (0, E.hF)(this.relayer.request(l), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(t_.connection_stalled)
                    }
                }
                rpcUnsubscribe(i, c, l) {
                    let v = {
                        method: (0, E.cO)(l.protocol).unsubscribe,
                        params: {
                            topic: i,
                            id: c
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: v
                    }), this.relayer.request(v)
                }
                onSubscribe(i, c) {
                    this.setSubscription(i, pe(index_es_K({}, c), {
                        id: i
                    })), this.pending.delete(c.topic)
                }
                onBatchSubscribe(i) {
                    i.length && i.forEach(i => {
                        this.setSubscription(i.id, index_es_K({}, i)), this.pending.delete(i.topic)
                    })
                }
                async onUnsubscribe(i, c, l) {
                    this.events.removeAllListeners(c), this.hasSubscription(c, i) && this.deleteSubscription(c, l), await this.relayer.messages.del(i)
                }
                async setRelayerSubscriptions(i) {
                    await this.relayer.core.storage.setItem(this.storageKey, i)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(i, c) {
                    this.subscriptions.has(i) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: i,
                        subscription: c
                    }), this.addSubscription(i, c))
                }
                addSubscription(i, c) {
                    this.subscriptions.set(i, index_es_K({}, c)), this.topicMap.set(c.topic, i), this.events.emit(tw.created, c)
                }
                getSubscription(i) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: i
                    });
                    let c = this.subscriptions.get(i);
                    if (!c) {
                        let {
                            message: c
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${i}`);
                        throw Error(c)
                    }
                    return c
                }
                deleteSubscription(i, c) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: i,
                        reason: c
                    });
                    let l = this.getSubscription(i);
                    this.subscriptions.delete(i), this.topicMap.delete(l.topic, i), this.events.emit(tw.deleted, pe(index_es_K({}, l), {
                        reason: c
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(tw.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let i = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let c = 0; c < i; c++) {
                            let i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(i)
                        }
                    }
                    this.events.emit(tw.resubscribed)
                }
                async restore() {
                    try {
                        let i = await this.getRelayerSubscriptions();
                        if (typeof i > "u" || !i.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: i
                            } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(i), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(i)
                        }
                        this.cached = i, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (i) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(i)
                    }
                }
                async batchSubscribe(i) {
                    if (!i.length) return;
                    let c = await this.rpcBatchSubscribe(i);
                    (0, E.qt)(c) && this.onBatchSubscribe(c.map((c, l) => pe(index_es_K({}, i[l]), {
                        id: c
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (this.relayer.transportExplicitlyClosed) return;
                    let i = [];
                    this.pending.forEach(c => {
                        i.push(c)
                    }), await this.batchSubscribe(i)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(W.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(t_.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(t_.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(tw.created, async i => {
                        let c = tw.created;
                        this.logger.info(`Emitting ${c}`), this.logger.debug({
                            type: "event",
                            event: c,
                            data: i
                        }), await this.persist()
                    }), this.events.on(tw.deleted, async i => {
                        let c = tw.deleted;
                        this.logger.info(`Emitting ${c}`), this.logger.debug({
                            type: "event",
                            event: c,
                            data: i
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(i => {
                        let c = setInterval(() => {
                            this.restartInProgress || (clearInterval(c), i())
                        }, this.pollingInterval)
                    })
                }
            };
            var tz = Object.defineProperty,
                tL = Object.getOwnPropertySymbols,
                tM = Object.prototype.hasOwnProperty,
                tD = Object.prototype.propertyIsEnumerable,
                Pt = (i, c, l) => c in i ? tz(i, c, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : i[c] = l,
                wr = (i, c) => {
                    for (var l in c || (c = {})) tM.call(c, l) && Pt(i, l, c[l]);
                    if (tL)
                        for (var l of tL(c)) tD.call(c, l) && Pt(i, l, c[l]);
                    return i
                };
            let Ot = class Ot extends g {
                constructor(i) {
                    super(i), this.protocol = "wc", this.version = 2, this.events = new w.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async i => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(i)
                        } catch (i) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i
                        }
                    }, this.core = i.core, this.logger = "u" > typeof i.logger && "string" != typeof i.logger ? (0, Q.generateChildLogger)(i.logger, this.name) : (0, Q.pino)((0, Q.getDefaultLoggerOptions)({
                        level: i.logger || "error"
                    })), this.messages = new Ct(this.logger, i.core), this.subscriber = new Tt(this, this.logger), this.publisher = new lr(this, this.logger), this.relayUrl = i ? .relayUrl || tg, this.projectId = i.projectId, this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ty}...`), await this.restartTransport(ty)
                    }
                    this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(i, c, l) {
                    this.isInitialized(), await this.publisher.publish(i, c, l), await this.recordMessageEvent({
                        topic: i,
                        message: c,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(i, c) {
                    var l;
                    this.isInitialized();
                    let v = (null == (l = this.subscriber.topicMap.get(i)) ? void 0 : l[0]) || "";
                    return v || (await Promise.all([new Promise(c => {
                        this.subscriber.once(tw.created, l => {
                            l.topic === i && c()
                        })
                    }), new Promise(async l => {
                        v = await this.subscriber.subscribe(i, c), l()
                    })]), v)
                }
                async unsubscribe(i, c) {
                    this.isInitialized(), await this.subscriber.unsubscribe(i, c)
                }
                on(i, c) {
                    this.events.on(i, c)
                }
                once(i, c) {
                    this.events.once(i, c)
                }
                off(i, c) {
                    this.events.off(i, c)
                }
                removeListener(i, c) {
                    this.events.removeListener(i, c)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(t_.transport_closed))
                }
                async transportOpen(i) {
                    if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
                        this.relayUrl = i || this.relayUrl, this.reconnecting = !0;
                        try {
                            await Promise.all([new Promise(i => {
                                this.initialized || i(), this.subscriber.once(tw.resubscribed, () => {
                                    i()
                                })
                            }), await Promise.race([new Promise(async (i, c) => {
                                await (0, E.hF)(this.provider.connect(), 5e3, `Socket stalled when trying to connect to ${this.relayUrl}`).catch(i => c(i)).then(() => i()).finally(() => this.removeListener(t_.transport_closed, this.rejectTransportOpen))
                            }), new Promise(i => this.once(t_.transport_closed, this.rejectTransportOpen))])])
                        } catch (i) {
                            if (this.logger.error(i), !this.isConnectionStalled(i.message)) throw i;
                            this.events.emit(t_.transport_closed)
                        } finally {
                            this.reconnecting = !1
                        }
                    }
                }
                async restartTransport(i) {
                    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = i || this.relayUrl, this.connected && await Promise.all([new Promise(i => {
                        this.provider.once(tm.disconnect, () => {
                            i()
                        })
                    }), this.transportClose()]), await this.createProvider(), await this.transportOpen())
                }
                isConnectionStalled(i) {
                    return this.staleConnectionErrors.some(c => i.includes(c))
                }
                rejectTransportOpen() {
                    throw Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...")
                }
                async createProvider() {
                    let i = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new ep.r(new ey((0, E.$0)({
                        sdkVersion: "2.9.0",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: i,
                        useOnCloseEvent: !0
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(i) {
                    let {
                        topic: c,
                        message: l
                    } = i;
                    await this.messages.set(c, l)
                }
                async shouldIgnoreMessageEvent(i) {
                    let {
                        topic: c,
                        message: l
                    } = i;
                    return !await this.subscriber.isSubscribed(c) || this.messages.has(c, l)
                }
                async onProviderPayload(i) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: i
                        }), (0, ed.isJsonRpcRequest)(i)) {
                        if (!i.method.endsWith("_subscription")) return;
                        let c = i.params,
                            {
                                topic: l,
                                message: v,
                                publishedAt: w
                            } = c.data,
                            I = {
                                topic: l,
                                message: v,
                                publishedAt: w
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(wr({
                            type: "event",
                            event: c.id
                        }, I)), this.events.emit(c.id, I), await this.acknowledgePayload(i), await this.onMessageEvent(I)
                    } else(0, ed.isJsonRpcResponse)(i) && this.events.emit(t_.message_ack, i)
                }
                async onMessageEvent(i) {
                    await this.shouldIgnoreMessageEvent(i) || (this.events.emit(t_.message, i), await this.recordMessageEvent(i))
                }
                async acknowledgePayload(i) {
                    let c = (0, ed.formatJsonRpcResult)(i.id, !0);
                    await this.provider.connection.send(c)
                }
                registerProviderListeners() {
                    this.provider.on(tm.payload, i => this.onProviderPayload(i)), this.provider.on(tm.connect, () => {
                        this.events.emit(t_.connect)
                    }), this.provider.on(tm.disconnect, () => {
                        this.onProviderDisconnect()
                    }), this.provider.on(tm.error, i => {
                        this.logger.error(i), this.events.emit(t_.error, i)
                    })
                }
                registerEventListeners() {
                    this.events.on(t_.connection_stalled, async () => {
                        await this.restartTransport()
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(t_.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || setTimeout(async () => {
                        await this.restartTransport()
                    }, (0, er.toMiliseconds)(tb))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
                async toEstablishConnection() {
                    if (!this.connected) {
                        if (this.connecting) return await new Promise(i => {
                            let c = setInterval(() => {
                                this.connected && (clearInterval(c), i())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            };
            var tk = Object.defineProperty,
                tq = Object.getOwnPropertySymbols,
                tU = Object.prototype.hasOwnProperty,
                t$ = Object.prototype.propertyIsEnumerable,
                At = (i, c, l) => c in i ? tk(i, c, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : i[c] = l,
                zt = (i, c) => {
                    for (var l in c || (c = {})) tU.call(c, l) && At(i, l, c[l]);
                    if (tq)
                        for (var l of tq(c)) t$.call(c, l) && At(i, l, c[l]);
                    return i
                };
            let Nt = class Nt extends p {
                constructor(i, c, l, v = tc, w) {
                    super(i, c, l, v), this.core = i, this.logger = c, this.name = l, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tc, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => {
                            this.getKey && null !== i && !(0, E.o8)(i) ? this.map.set(this.getKey(i), i) : (0, E.xW)(i) ? this.map.set(i.id, i) : (0, E.h1)(i) && this.map.set(i.topic, i)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (i, c) => {
                        this.isInitialized(), this.map.has(i) ? await this.update(i, c) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: i,
                            value: c
                        }), this.map.set(i, c), await this.persist())
                    }, this.get = i => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: i
                    }), this.getData(i)), this.getAll = i => (this.isInitialized(), i ? this.values.filter(c => Object.keys(i).every(l => ev()(c[l], i[l]))) : this.values), this.update = async (i, c) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: i,
                            update: c
                        });
                        let l = zt(zt({}, this.getData(i)), c);
                        this.map.set(i, l), await this.persist()
                    }, this.delete = async (i, c) => {
                        this.isInitialized(), this.map.has(i) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: i,
                            reason: c
                        }), this.map.delete(i), await this.persist())
                    }, this.logger = (0, Q.generateChildLogger)(c, this.name), this.storagePrefix = v, this.getKey = w
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(i) {
                    await this.core.storage.setItem(this.storageKey, i)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(i) {
                    let c = this.map.get(i);
                    if (!c) {
                        let {
                            message: c
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${i}`);
                        throw this.logger.error(c), Error(c)
                    }
                    return c
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let i = await this.getDataStore();
                        if (typeof i > "u" || !i.length) return;
                        if (this.map.size) {
                            let {
                                message: i
                            } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(i), Error(i)
                        }
                        this.cached = i, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (i) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(i)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
            };
            let Ut = class Ut {
                constructor(i, c) {
                    this.core = i, this.logger = c, this.name = "pairing", this.version = "0.3", this.events = new(I()), this.initialized = !1, this.storagePrefix = tc, this.ignoredPayloadTypes = [E.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: i
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...i])]
                    }, this.create = async () => {
                        this.isInitialized();
                        let i = (0, E.jd)(),
                            c = await this.core.crypto.setSymKey(i),
                            l = (0, E.gn)(er.FIVE_MINUTES),
                            v = {
                                protocol: "irn"
                            },
                            w = (0, E.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: c,
                                symKey: i,
                                relay: v
                            });
                        return await this.pairings.set(c, {
                            topic: c,
                            expiry: l,
                            relay: v,
                            active: !1
                        }), await this.core.relayer.subscribe(c), this.core.expirer.set(c, l), {
                            topic: c,
                            uri: w
                        }
                    }, this.pair = async i => {
                        this.isInitialized(), this.isValidPair(i);
                        let {
                            topic: c,
                            symKey: l,
                            relay: v
                        } = (0, E.he)(i.uri);
                        if (this.pairings.keys.includes(c)) throw Error(`Pairing already exists: ${c}`);
                        if (this.core.crypto.hasKeys(c)) throw Error(`Keychain already exists: ${c}`);
                        let w = (0, E.gn)(er.FIVE_MINUTES),
                            I = {
                                topic: c,
                                relay: v,
                                expiry: w,
                                active: !1
                            };
                        return await this.pairings.set(c, I), await this.core.crypto.setSymKey(l, c), await this.core.relayer.subscribe(c, {
                            relay: v
                        }), this.core.expirer.set(c, w), i.activatePairing && await this.activate({
                            topic: c
                        }), I
                    }, this.activate = async ({
                        topic: i
                    }) => {
                        this.isInitialized();
                        let c = (0, E.gn)(er.THIRTY_DAYS);
                        await this.pairings.update(i, {
                            active: !0,
                            expiry: c
                        }), this.core.expirer.set(i, c)
                    }, this.ping = async i => {
                        this.isInitialized(), await this.isValidPing(i);
                        let {
                            topic: c
                        } = i;
                        if (this.pairings.keys.includes(c)) {
                            let i = await this.sendRequest(c, "wc_pairingPing", {}),
                                {
                                    done: l,
                                    resolve: v,
                                    reject: w
                                } = (0, E.H1)();
                            this.events.once((0, E.E0)("pairing_ping", i), ({
                                error: i
                            }) => {
                                i ? w(i) : v()
                            }), await l()
                        }
                    }, this.updateExpiry = async ({
                        topic: i,
                        expiry: c
                    }) => {
                        this.isInitialized(), await this.pairings.update(i, {
                            expiry: c
                        })
                    }, this.updateMetadata = async ({
                        topic: i,
                        metadata: c
                    }) => {
                        this.isInitialized(), await this.pairings.update(i, {
                            peerMetadata: c
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async i => {
                        this.isInitialized(), await this.isValidDisconnect(i);
                        let {
                            topic: c
                        } = i;
                        this.pairings.keys.includes(c) && (await this.sendRequest(c, "wc_pairingDelete", (0, E.D6)("USER_DISCONNECTED")), await this.deletePairing(c))
                    }, this.sendRequest = async (i, c, l) => {
                        let v = (0, ed.formatJsonRpcRequest)(c, l),
                            w = await this.core.crypto.encode(i, v),
                            I = tE[c].req;
                        return this.core.history.set(i, v), this.core.relayer.publish(i, w, I), v.id
                    }, this.sendResult = async (i, c, l) => {
                        let v = (0, ed.formatJsonRpcResult)(i, l),
                            w = await this.core.crypto.encode(c, v),
                            I = await this.core.history.get(c, i),
                            E = tE[I.request.method].res;
                        await this.core.relayer.publish(c, w, E), await this.core.history.resolve(v)
                    }, this.sendError = async (i, c, l) => {
                        let v = (0, ed.formatJsonRpcError)(i, l),
                            w = await this.core.crypto.encode(c, v),
                            I = await this.core.history.get(c, i),
                            E = tE[I.request.method] ? tE[I.request.method].res : tE.unregistered_method.res;
                        await this.core.relayer.publish(c, w, E), await this.core.history.resolve(v)
                    }, this.deletePairing = async (i, c) => {
                        await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, (0, E.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), c ? Promise.resolve() : this.core.expirer.del(i)])
                    }, this.cleanup = async () => {
                        let i = this.pairings.getAll().filter(i => (0, E.Bw)(i.expiry));
                        await Promise.all(i.map(i => this.deletePairing(i.topic)))
                    }, this.onRelayEventRequest = i => {
                        let {
                            topic: c,
                            payload: l
                        } = i, v = l.method;
                        if (this.pairings.keys.includes(c)) switch (v) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(c, l);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(c, l);
                            default:
                                return this.onUnknownRpcMethodRequest(c, l)
                        }
                    }, this.onRelayEventResponse = async i => {
                        let {
                            topic: c,
                            payload: l
                        } = i, v = (await this.core.history.get(c, l.id)).request.method;
                        if (this.pairings.keys.includes(c)) return "wc_pairingPing" === v ? this.onPairingPingResponse(c, l) : this.onUnknownRpcMethodResponse(v)
                    }, this.onPairingPingRequest = async (i, c) => {
                        let {
                            id: l
                        } = c;
                        try {
                            this.isValidPing({
                                topic: i
                            }), await this.sendResult(l, i, !0), this.events.emit("pairing_ping", {
                                id: l,
                                topic: i
                            })
                        } catch (c) {
                            await this.sendError(l, i, c), this.logger.error(c)
                        }
                    }, this.onPairingPingResponse = (i, c) => {
                        let {
                            id: l
                        } = c;
                        setTimeout(() => {
                            (0, ed.isJsonRpcResult)(c) ? this.events.emit((0, E.E0)("pairing_ping", l), {}): (0, ed.isJsonRpcError)(c) && this.events.emit((0, E.E0)("pairing_ping", l), {
                                error: c.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (i, c) => {
                        let {
                            id: l
                        } = c;
                        try {
                            this.isValidDisconnect({
                                topic: i
                            }), await this.deletePairing(i), this.events.emit("pairing_delete", {
                                id: l,
                                topic: i
                            })
                        } catch (c) {
                            await this.sendError(l, i, c), this.logger.error(c)
                        }
                    }, this.onUnknownRpcMethodRequest = async (i, c) => {
                        let {
                            id: l,
                            method: v
                        } = c;
                        try {
                            if (this.registeredMethods.includes(v)) return;
                            let c = (0, E.D6)("WC_METHOD_UNSUPPORTED", v);
                            await this.sendError(l, i, c), this.logger.error(c)
                        } catch (c) {
                            await this.sendError(l, i, c), this.logger.error(c)
                        }
                    }, this.onUnknownRpcMethodResponse = i => {
                        this.registeredMethods.includes(i) || this.logger.error((0, E.D6)("WC_METHOD_UNSUPPORTED", i))
                    }, this.isValidPair = i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `pair() params: ${i}`);
                            throw Error(c)
                        }
                        if (!(0, E.jv)(i.uri)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                            throw Error(c)
                        }
                    }, this.isValidPing = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `ping() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c
                        } = i;
                        await this.isValidPairingTopic(c)
                    }, this.isValidDisconnect = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c
                        } = i;
                        await this.isValidPairingTopic(c)
                    }, this.isValidPairingTopic = async i => {
                        if (!(0, E.M_)(i, !1)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                            throw Error(c)
                        }
                        if (!this.pairings.keys.includes(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                            throw Error(c)
                        }
                        if ((0, E.Bw)(this.pairings.get(i).expiry)) {
                            await this.deletePairing(i);
                            let {
                                message: c
                            } = (0, E.Z7)("EXPIRED", `pairing topic: ${i}`);
                            throw Error(c)
                        }
                    }, this.core = i, this.logger = (0, Q.generateChildLogger)(c, this.name), this.pairings = new Nt(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(t_.message, async i => {
                        let {
                            topic: c,
                            message: l
                        } = i;
                        if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(l))) return;
                        let v = await this.core.crypto.decode(c, l);
                        (0, ed.isJsonRpcRequest)(v) ? (this.core.history.set(c, v), this.onRelayEventRequest({
                            topic: c,
                            payload: v
                        })) : (0, ed.isJsonRpcResponse)(v) && (await this.core.history.resolve(v), await this.onRelayEventResponse({
                            topic: c,
                            payload: v
                        }), this.core.history.delete(c, v.id))
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(tS.expired, async i => {
                        let {
                            topic: c
                        } = (0, E.iP)(i.target);
                        c && this.pairings.keys.includes(c) && (await this.deletePairing(c, !0), this.events.emit("pairing_expire", {
                            topic: c
                        }))
                    })
                }
            };
            let Lt = class Lt extends index_es_h {
                constructor(i, c) {
                    super(i, c), this.core = i, this.logger = c, this.records = new Map, this.events = new w.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tc, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (i, c, l) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: i,
                                request: c,
                                chainId: l
                            }), this.records.has(c.id)) return;
                        let v = {
                            id: c.id,
                            topic: i,
                            request: {
                                method: c.method,
                                params: c.params || null
                            },
                            chainId: l,
                            expiry: (0, E.gn)(er.THIRTY_DAYS)
                        };
                        this.records.set(v.id, v), this.events.emit(tx.created, v)
                    }, this.resolve = async i => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: i
                            }), !this.records.has(i.id)) return;
                        let c = await this.getRecord(i.id);
                        typeof c.response > "u" && (c.response = (0, ed.isJsonRpcError)(i) ? {
                            error: i.error
                        } : {
                            result: i.result
                        }, this.records.set(c.id, c), this.events.emit(tx.updated, c))
                    }, this.get = async (i, c) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: i,
                        id: c
                    }), await this.getRecord(c)), this.delete = (i, c) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: c
                        }), this.values.forEach(l => {
                            l.topic !== i || "u" > typeof c && l.id !== c || (this.records.delete(l.id), this.events.emit(tx.deleted, l))
                        })
                    }, this.exists = async (i, c) => (this.isInitialized(), !!this.records.has(c) && (await this.getRecord(c)).topic === i), this.on = (i, c) => {
                        this.events.on(i, c)
                    }, this.once = (i, c) => {
                        this.events.once(i, c)
                    }, this.off = (i, c) => {
                        this.events.off(i, c)
                    }, this.removeListener = (i, c) => {
                        this.events.removeListener(i, c)
                    }, this.logger = (0, Q.generateChildLogger)(c, this.name)
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let i = [];
                    return this.values.forEach(c => {
                        if ("u" > typeof c.response) return;
                        let l = {
                            topic: c.topic,
                            request: (0, ed.formatJsonRpcRequest)(c.request.method, c.request.params, c.id),
                            chainId: c.chainId
                        };
                        return i.push(l)
                    }), i
                }
                async setJsonRpcRecords(i) {
                    await this.core.storage.setItem(this.storageKey, i)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(i) {
                    this.isInitialized();
                    let c = this.records.get(i);
                    if (!c) {
                        let {
                            message: c
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${i}`);
                        throw Error(c)
                    }
                    return c
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(tx.sync)
                }
                async restore() {
                    try {
                        let i = await this.getJsonRpcRecords();
                        if (typeof i > "u" || !i.length) return;
                        if (this.records.size) {
                            let {
                                message: i
                            } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(i), Error(i)
                        }
                        this.cached = i, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (i) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i)
                    }
                }
                registerEventListeners() {
                    this.events.on(tx.created, i => {
                        let c = tx.created;
                        this.logger.info(`Emitting ${c}`), this.logger.debug({
                            type: "event",
                            event: c,
                            record: i
                        }), this.persist()
                    }), this.events.on(tx.updated, i => {
                        let c = tx.updated;
                        this.logger.info(`Emitting ${c}`), this.logger.debug({
                            type: "event",
                            event: c,
                            record: i
                        }), this.persist()
                    }), this.events.on(tx.deleted, i => {
                        let c = tx.deleted;
                        this.logger.info(`Emitting ${c}`), this.logger.debug({
                            type: "event",
                            event: c,
                            record: i
                        }), this.persist()
                    }), this.core.heartbeat.on(W.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(i => {
                            (0, er.toMiliseconds)(i.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${i.id}`), this.delete(i.topic, i.id))
                        })
                    } catch (i) {
                        this.logger.warn(i)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
            };
            let Ft = class Ft extends index_es_E {
                constructor(i, c) {
                    super(i, c), this.core = i, this.logger = c, this.expirations = new Map, this.events = new w.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tc, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = i => {
                        try {
                            let c = this.formatTarget(i);
                            return "u" > typeof this.getExpiration(c)
                        } catch {
                            return !1
                        }
                    }, this.set = (i, c) => {
                        this.isInitialized();
                        let l = this.formatTarget(i),
                            v = {
                                target: l,
                                expiry: c
                            };
                        this.expirations.set(l, v), this.checkExpiry(l, v), this.events.emit(tS.created, {
                            target: l,
                            expiration: v
                        })
                    }, this.get = i => {
                        this.isInitialized();
                        let c = this.formatTarget(i);
                        return this.getExpiration(c)
                    }, this.del = i => {
                        if (this.isInitialized(), this.has(i)) {
                            let c = this.formatTarget(i),
                                l = this.getExpiration(c);
                            this.expirations.delete(c), this.events.emit(tS.deleted, {
                                target: c,
                                expiration: l
                            })
                        }
                    }, this.on = (i, c) => {
                        this.events.on(i, c)
                    }, this.once = (i, c) => {
                        this.events.once(i, c)
                    }, this.off = (i, c) => {
                        this.events.off(i, c)
                    }, this.removeListener = (i, c) => {
                        this.events.removeListener(i, c)
                    }, this.logger = (0, Q.generateChildLogger)(c, this.name)
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(i) {
                    if ("string" == typeof i) return (0, E.Z4)(i);
                    if ("number" == typeof i) return (0, E.Gq)(i);
                    let {
                        message: c
                    } = (0, E.Z7)("UNKNOWN_TYPE", `Target type: ${typeof i}`);
                    throw Error(c)
                }
                async setExpirations(i) {
                    await this.core.storage.setItem(this.storageKey, i)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(tS.sync)
                }
                async restore() {
                    try {
                        let i = await this.getExpirations();
                        if (typeof i > "u" || !i.length) return;
                        if (this.expirations.size) {
                            let {
                                message: i
                            } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(i), Error(i)
                        }
                        this.cached = i, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (i) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(i)
                    }
                }
                getExpiration(i) {
                    let c = this.expirations.get(i);
                    if (!c) {
                        let {
                            message: c
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${i}`);
                        throw this.logger.error(c), Error(c)
                    }
                    return c
                }
                checkExpiry(i, c) {
                    let {
                        expiry: l
                    } = c;
                    (0, er.toMiliseconds)(l) - Date.now() <= 0 && this.expire(i, c)
                }
                expire(i, c) {
                    this.expirations.delete(i), this.events.emit(tS.expired, {
                        target: i,
                        expiration: c
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((i, c) => this.checkExpiry(c, i))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(W.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(tS.created, i => {
                        let c = tS.created;
                        this.logger.info(`Emitting ${c}`), this.logger.debug({
                            type: "event",
                            event: c,
                            data: i
                        }), this.persist()
                    }), this.events.on(tS.expired, i => {
                        let c = tS.expired;
                        this.logger.info(`Emitting ${c}`), this.logger.debug({
                            type: "event",
                            event: c,
                            data: i
                        }), this.persist()
                    }), this.events.on(tS.deleted, i => {
                        let c = tS.deleted;
                        this.logger.info(`Emitting ${c}`), this.logger.debug({
                            type: "event",
                            event: c,
                            data: i
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
            };
            let $t = class $t extends index_es_y {
                constructor(i, c) {
                    super(i, c), this.projectId = i, this.logger = c, this.name = tP, this.initialized = !1, this.init = async i => {
                        (0, E.b$)() || !(0, E.jU)() || (this.verifyUrl = i ? .verifyUrl || tO, await this.createIframe())
                    }, this.register = async i => {
                        var c;
                        if (this.initialized || await this.init(), this.iframe) try {
                            null == (c = this.iframe.contentWindow) || c.postMessage(i.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${i.attestationId} ${this.verifyUrl}`)
                        } catch {}
                    }, this.resolve = async i => {
                        var c;
                        if (this.isDevEnv) return "";
                        this.logger.info(`resolving attestation: ${i.attestationId}`);
                        let l = this.startAbortTimer(er.FIVE_SECONDS),
                            v = await fetch(`${this.verifyUrl}/attestation/${i.attestationId}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(l), 200 === v.status ? null == (c = await v.json()) ? void 0 : c.origin : ""
                    }, this.createIframe = async () => {
                        try {
                            await Promise.race([new Promise((i, c) => {
                                if (document.getElementById(tP)) return i();
                                let l = document.createElement("iframe");
                                l.setAttribute("id", tP), l.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), l.style.display = "none", l.addEventListener("load", () => {
                                    this.initialized = !0, i()
                                }), l.addEventListener("error", i => {
                                    c(i)
                                }), document.body.append(l), this.iframe = l
                            }), new Promise(i => {
                                setTimeout(() => i("iframe load timeout"), (0, er.toMiliseconds)(er.ONE_SECOND / 2))
                            })])
                        } catch (i) {
                            this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(i)
                        }
                    }, this.logger = (0, Q.generateChildLogger)(c, this.name), this.verifyUrl = tO, this.abortController = new AbortController, this.isDevEnv = (0, E.UG)() && em.env.IS_VITEST
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                startAbortTimer(i) {
                    return setTimeout(() => this.abortController.abort(), (0, er.toMiliseconds)(i))
                }
            };
            var tK = Object.defineProperty,
                tH = Object.getOwnPropertySymbols,
                tV = Object.prototype.hasOwnProperty,
                tB = Object.prototype.propertyIsEnumerable,
                Kt = (i, c, l) => c in i ? tK(i, c, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : i[c] = l,
                kt = (i, c) => {
                    for (var l in c || (c = {})) tV.call(c, l) && Kt(i, l, c[l]);
                    if (tH)
                        for (var l of tH(c)) tB.call(c, l) && Kt(i, l, c[l]);
                    return i
                };
            let Z = class Z extends n {
                constructor(i) {
                    super(i), this.protocol = "wc", this.version = 2, this.name = to, this.events = new w.EventEmitter, this.initialized = !1, this.on = (i, c) => this.events.on(i, c), this.once = (i, c) => this.events.once(i, c), this.off = (i, c) => this.events.off(i, c), this.removeListener = (i, c) => this.events.removeListener(i, c), this.projectId = i ? .projectId, this.relayUrl = i ? .relayUrl || tg;
                    let c = "u" > typeof i ? .logger && "string" != typeof i ? .logger ? i.logger : (0, Q.pino)((0, Q.getDefaultLoggerOptions)({
                        level: i ? .logger || tl.logger
                    }));
                    this.logger = (0, Q.generateChildLogger)(c, this.name), this.heartbeat = new W.HeartBeat, this.crypto = new It(this, this.logger, i ? .keychain), this.history = new Lt(this, this.logger), this.expirer = new Ft(this, this.logger), this.storage = null != i && i.storage ? i.storage : new h(kt(kt({}, th), i ? .storageOptions)), this.relayer = new Ot({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new Ut(this, this.logger), this.verify = new $t(this.projectId || "", this.logger)
                }
                static async init(i) {
                    let c = new Z(i);
                    await c.initialize();
                    let l = await c.crypto.getClientId();
                    return await c.storage.setItem("WALLETCONNECT_CLIENT_ID", l), c
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (i) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, i), this.logger.error(i.message), i
                    }
                }
            };
            let tG = "client",
                tJ = `wc@2:${tG}:`,
                tF = {
                    name: tG,
                    logger: "error"
                },
                tW = "Proposal expired",
                tZ = er.SEVEN_DAYS,
                tY = {
                    wc_sessionPropose: {
                        req: {
                            ttl: er.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: er.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: er.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: er.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: er.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: er.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: er.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: er.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: er.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: er.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: er.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                tQ = {
                    min: er.FIVE_MINUTES,
                    max: er.SEVEN_DAYS
                },
                tX = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var t0 = Object.defineProperty,
                t1 = Object.defineProperties,
                t5 = Object.getOwnPropertyDescriptors,
                t6 = Object.getOwnPropertySymbols,
                t2 = Object.prototype.hasOwnProperty,
                t3 = Object.prototype.propertyIsEnumerable,
                index_es_ce = (i, c, l) => c in i ? t0(i, c, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : i[c] = l,
                index_es_w = (i, c) => {
                    for (var l in c || (c = {})) t2.call(c, l) && index_es_ce(i, l, c[l]);
                    if (t6)
                        for (var l of t6(c)) t3.call(c, l) && index_es_ce(i, l, c[l]);
                    return i
                },
                index_es_H = (i, c) => t1(i, t5(c));
            let index_es_ns = class index_es_ns extends S {
                constructor(i) {
                    super(i), this.name = "engine", this.events = new(I()), this.initialized = !1, this.ignoredPayloadTypes = [E.rV], this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
                            methods: Object.keys(tY)
                        }), this.initialized = !0)
                    }, this.connect = async i => {
                        this.isInitialized();
                        let c = index_es_H(index_es_w({}, i), {
                            requiredNamespaces: i.requiredNamespaces || {},
                            optionalNamespaces: i.optionalNamespaces || {}
                        });
                        await this.isValidConnect(c);
                        let {
                            pairingTopic: l,
                            requiredNamespaces: v,
                            optionalNamespaces: w,
                            sessionProperties: I,
                            relays: P
                        } = c, C = l, D, q = !1;
                        if (C && (q = this.client.core.pairing.pairings.get(C).active), !C || !q) {
                            let {
                                topic: i,
                                uri: c
                            } = await this.client.core.pairing.create();
                            C = i, D = c
                        }
                        let $ = await this.client.core.crypto.generateKeyPair(),
                            B = index_es_w({
                                requiredNamespaces: v,
                                optionalNamespaces: w,
                                relays: P ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: $,
                                    metadata: this.client.metadata
                                }
                            }, I && {
                                sessionProperties: I
                            }),
                            {
                                reject: J,
                                resolve: F,
                                done: W
                            } = (0, E.H1)(er.FIVE_MINUTES, tW);
                        if (this.events.once((0, E.E0)("session_connect"), async ({
                                error: i,
                                session: c
                            }) => {
                                if (i) J(i);
                                else if (c) {
                                    c.self.publicKey = $;
                                    let i = index_es_H(index_es_w({}, c), {
                                        requiredNamespaces: c.requiredNamespaces,
                                        optionalNamespaces: c.optionalNamespaces
                                    });
                                    await this.client.session.set(c.topic, i), await this.setExpiry(c.topic, c.expiry), C && await this.client.core.pairing.updateMetadata({
                                        topic: C,
                                        metadata: c.peer.metadata
                                    }), F(i)
                                }
                            }), !C) {
                            let {
                                message: i
                            } = (0, E.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${C}`);
                            throw Error(i)
                        }
                        let Q = await this.sendRequest(C, "wc_sessionPropose", B),
                            X = (0, E.gn)(er.FIVE_MINUTES);
                        return await this.setProposal(Q, index_es_w({
                            id: Q,
                            expiry: X
                        }, B)), {
                            uri: D,
                            approval: W
                        }
                    }, this.pair = async i => (this.isInitialized(), await this.client.core.pairing.pair(i)), this.approve = async i => {
                        this.isInitialized(), await this.isValidApprove(i);
                        let {
                            id: c,
                            relayProtocol: l,
                            namespaces: v,
                            sessionProperties: w
                        } = i, I = this.client.proposal.get(c), {
                            pairingTopic: P,
                            proposer: C,
                            requiredNamespaces: D,
                            optionalNamespaces: q
                        } = I;
                        P = P || "", (0, E.L5)(D) || (D = (0, E.fc)(v, "approve()"));
                        let $ = await this.client.core.crypto.generateKeyPair(),
                            B = C.publicKey,
                            J = await this.client.core.crypto.generateSharedKey($, B);
                        P && c && (await this.client.core.pairing.updateMetadata({
                            topic: P,
                            metadata: C.metadata
                        }), await this.sendResult(c, P, {
                            relay: {
                                protocol: l ? ? "irn"
                            },
                            responderPublicKey: $
                        }), await this.client.proposal.delete(c, (0, E.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: P
                        }));
                        let F = index_es_w({
                            relay: {
                                protocol: l ? ? "irn"
                            },
                            namespaces: v,
                            requiredNamespaces: D,
                            optionalNamespaces: q,
                            pairingTopic: P,
                            controller: {
                                publicKey: $,
                                metadata: this.client.metadata
                            },
                            expiry: (0, E.gn)(tZ)
                        }, w && {
                            sessionProperties: w
                        });
                        await this.client.core.relayer.subscribe(J), await this.sendRequest(J, "wc_sessionSettle", F);
                        let W = index_es_H(index_es_w({}, F), {
                            topic: J,
                            pairingTopic: P,
                            acknowledged: !1,
                            self: F.controller,
                            peer: {
                                publicKey: C.publicKey,
                                metadata: C.metadata
                            },
                            controller: $
                        });
                        return await this.client.session.set(J, W), await this.setExpiry(J, (0, E.gn)(tZ)), {
                            topic: J,
                            acknowledged: () => new Promise(i => setTimeout(() => i(this.client.session.get(J)), 500))
                        }
                    }, this.reject = async i => {
                        this.isInitialized(), await this.isValidReject(i);
                        let {
                            id: c,
                            reason: l
                        } = i, {
                            pairingTopic: v
                        } = this.client.proposal.get(c);
                        v && (await this.sendError(c, v, l), await this.client.proposal.delete(c, (0, E.D6)("USER_DISCONNECTED")))
                    }, this.update = async i => {
                        this.isInitialized(), await this.isValidUpdate(i);
                        let {
                            topic: c,
                            namespaces: l
                        } = i, v = await this.sendRequest(c, "wc_sessionUpdate", {
                            namespaces: l
                        }), {
                            done: w,
                            resolve: I,
                            reject: P
                        } = (0, E.H1)();
                        return this.events.once((0, E.E0)("session_update", v), ({
                            error: i
                        }) => {
                            i ? P(i) : I()
                        }), await this.client.session.update(c, {
                            namespaces: l
                        }), {
                            acknowledged: w
                        }
                    }, this.extend = async i => {
                        this.isInitialized(), await this.isValidExtend(i);
                        let {
                            topic: c
                        } = i, l = await this.sendRequest(c, "wc_sessionExtend", {}), {
                            done: v,
                            resolve: w,
                            reject: I
                        } = (0, E.H1)();
                        return this.events.once((0, E.E0)("session_extend", l), ({
                            error: i
                        }) => {
                            i ? I(i) : w()
                        }), await this.setExpiry(c, (0, E.gn)(tZ)), {
                            acknowledged: v
                        }
                    }, this.request = async i => {
                        this.isInitialized(), await this.isValidRequest(i);
                        let {
                            chainId: c,
                            request: l,
                            topic: v,
                            expiry: w
                        } = i, I = await this.sendRequest(v, "wc_sessionRequest", {
                            request: l,
                            chainId: c
                        }, w), {
                            done: P,
                            resolve: C,
                            reject: D
                        } = (0, E.H1)(w);
                        this.events.once((0, E.E0)("session_request", I), ({
                            error: i,
                            result: c
                        }) => {
                            i ? D(i) : C(c)
                        }), this.client.events.emit("session_request_sent", {
                            topic: v,
                            request: l,
                            chainId: c,
                            id: I
                        });
                        let q = await this.client.core.storage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
                        return (0, E.Hh)({
                            id: I,
                            topic: v,
                            wcDeepLink: q
                        }), await P()
                    }, this.respond = async i => {
                        this.isInitialized(), await this.isValidRespond(i);
                        let {
                            topic: c,
                            response: l
                        } = i, {
                            id: v
                        } = l;
                        (0, ed.isJsonRpcResult)(l) ? await this.sendResult(v, c, l.result): (0, ed.isJsonRpcError)(l) && await this.sendError(v, c, l.error), this.deletePendingSessionRequest(i.response.id, {
                            message: "fulfilled",
                            code: 0
                        })
                    }, this.ping = async i => {
                        this.isInitialized(), await this.isValidPing(i);
                        let {
                            topic: c
                        } = i;
                        if (this.client.session.keys.includes(c)) {
                            let i = await this.sendRequest(c, "wc_sessionPing", {}),
                                {
                                    done: l,
                                    resolve: v,
                                    reject: w
                                } = (0, E.H1)();
                            this.events.once((0, E.E0)("session_ping", i), ({
                                error: i
                            }) => {
                                i ? w(i) : v()
                            }), await l()
                        } else this.client.core.pairing.pairings.keys.includes(c) && await this.client.core.pairing.ping({
                            topic: c
                        })
                    }, this.emit = async i => {
                        this.isInitialized(), await this.isValidEmit(i);
                        let {
                            topic: c,
                            event: l,
                            chainId: v
                        } = i;
                        await this.sendRequest(c, "wc_sessionEvent", {
                            event: l,
                            chainId: v
                        })
                    }, this.disconnect = async i => {
                        this.isInitialized(), await this.isValidDisconnect(i);
                        let {
                            topic: c
                        } = i;
                        if (this.client.session.keys.includes(c)) {
                            let i;
                            let l = (0, ed.getBigIntRpcId)().toString(),
                                r = c => {
                                    c ? .id.toString() === l && (this.client.core.relayer.events.removeListener(t_.message_ack, r), i())
                                };
                            await Promise.all([new Promise(c => {
                                i = c, this.client.core.relayer.on(t_.message_ack, r)
                            }), this.sendRequest(c, "wc_sessionDelete", (0, E.D6)("USER_DISCONNECTED"), void 0, l)]), await this.deleteSession(c)
                        } else await this.client.core.pairing.disconnect({
                            topic: c
                        })
                    }, this.find = i => (this.isInitialized(), this.client.session.getAll().filter(c => (0, E.Ih)(c, i))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async i => {
                        if (i.pairingTopic) try {
                            let c = this.client.core.pairing.pairings.get(i.pairingTopic),
                                l = this.client.core.pairing.pairings.getAll().filter(l => {
                                    var v, w;
                                    return (null == (v = l.peerMetadata) ? void 0 : v.url) && (null == (w = l.peerMetadata) ? void 0 : w.url) === i.peer.metadata.url && l.topic && l.topic !== c.topic
                                });
                            if (0 === l.length) return;
                            this.client.logger.info(`Cleaning up ${l.length} duplicate pairing(s)`), await Promise.all(l.map(i => this.client.core.pairing.disconnect({
                                topic: i.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                    }, this.deleteSession = async (i, c) => {
                        let {
                            self: l
                        } = this.client.session.get(i);
                        await this.client.core.relayer.unsubscribe(i), this.client.session.delete(i, (0, E.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(l.publicKey) && await this.client.core.crypto.deleteKeyPair(l.publicKey), this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i), c || this.client.core.expirer.del(i)
                    }, this.deleteProposal = async (i, c) => {
                        await Promise.all([this.client.proposal.delete(i, (0, E.D6)("USER_DISCONNECTED")), c ? Promise.resolve() : this.client.core.expirer.del(i)])
                    }, this.deletePendingSessionRequest = async (i, c, l = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(i, c), l ? Promise.resolve() : this.client.core.expirer.del(i)])
                    }, this.setExpiry = async (i, c) => {
                        this.client.session.keys.includes(i) && await this.client.session.update(i, {
                            expiry: c
                        }), this.client.core.expirer.set(i, c)
                    }, this.setProposal = async (i, c) => {
                        await this.client.proposal.set(i, c), this.client.core.expirer.set(i, c.expiry)
                    }, this.setPendingSessionRequest = async i => {
                        let c = tY.wc_sessionRequest.req.ttl,
                            {
                                id: l,
                                topic: v,
                                params: w
                            } = i;
                        await this.client.pendingRequest.set(l, {
                            id: l,
                            topic: v,
                            params: w
                        }), c && this.client.core.expirer.set(l, (0, E.gn)(c))
                    }, this.sendRequest = async (i, c, l, v, w) => {
                        let I = (0, ed.formatJsonRpcRequest)(c, l);
                        if ((0, E.jU)() && tX.includes(c)) {
                            let i = (0, E.rj)(JSON.stringify(I));
                            await this.client.core.verify.register({
                                attestationId: i
                            })
                        }
                        let P = await this.client.core.crypto.encode(i, I),
                            C = tY[c].req;
                        return v && (C.ttl = v), w && (C.id = w), this.client.core.history.set(i, I), this.client.core.relayer.publish(i, P, C), I.id
                    }, this.sendResult = async (i, c, l) => {
                        let v = (0, ed.formatJsonRpcResult)(i, l),
                            w = await this.client.core.crypto.encode(c, v),
                            I = await this.client.core.history.get(c, i),
                            E = tY[I.request.method].res;
                        this.client.core.relayer.publish(c, w, E), await this.client.core.history.resolve(v)
                    }, this.sendError = async (i, c, l) => {
                        let v = (0, ed.formatJsonRpcError)(i, l),
                            w = await this.client.core.crypto.encode(c, v),
                            I = await this.client.core.history.get(c, i),
                            E = tY[I.request.method].res;
                        this.client.core.relayer.publish(c, w, E), await this.client.core.history.resolve(v)
                    }, this.cleanup = async () => {
                        let i = [],
                            c = [];
                        this.client.session.getAll().forEach(c => {
                            (0, E.Bw)(c.expiry) && i.push(c.topic)
                        }), this.client.proposal.getAll().forEach(i => {
                            (0, E.Bw)(i.expiry) && c.push(i.id)
                        }), await Promise.all([...i.map(i => this.deleteSession(i)), ...c.map(i => this.deleteProposal(i))])
                    }, this.onRelayEventRequest = i => {
                        let {
                            topic: c,
                            payload: l
                        } = i, v = l.method;
                        switch (v) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(c, l);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(c, l);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(c, l);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(c, l);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(c, l);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(c, l);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(c, l);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(c, l);
                            default:
                                return this.client.logger.info(`Unsupported request method ${v}`)
                        }
                    }, this.onRelayEventResponse = async i => {
                        let {
                            topic: c,
                            payload: l
                        } = i, v = (await this.client.core.history.get(c, l.id)).request.method;
                        switch (v) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(c, l);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(c, l);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(c, l);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(c, l);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(c, l);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(c, l);
                            default:
                                return this.client.logger.info(`Unsupported response method ${v}`)
                        }
                    }, this.onRelayEventUnknownPayload = i => {
                        let {
                            topic: c
                        } = i, {
                            message: l
                        } = (0, E.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${c} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(l)
                    }, this.onSessionProposeRequest = async (i, c) => {
                        let {
                            params: l,
                            id: v
                        } = c;
                        try {
                            this.isValidConnect(index_es_w({}, c.params));
                            let w = (0, E.gn)(er.FIVE_MINUTES),
                                I = index_es_w({
                                    id: v,
                                    pairingTopic: i,
                                    expiry: w
                                }, l);
                            await this.setProposal(v, I);
                            let P = (0, E.rj)(JSON.stringify(c)),
                                C = await this.getVerifyContext(P, I.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: v,
                                params: I,
                                verifyContext: C
                            })
                        } catch (c) {
                            await this.sendError(v, i, c), this.client.logger.error(c)
                        }
                    }, this.onSessionProposeResponse = async (i, c) => {
                        let {
                            id: l
                        } = c;
                        if ((0, ed.isJsonRpcResult)(c)) {
                            let {
                                result: v
                            } = c;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: v
                            });
                            let w = this.client.proposal.get(l);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: w
                            });
                            let I = w.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: I
                            });
                            let E = v.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: E
                            });
                            let P = await this.client.core.crypto.generateSharedKey(I, E);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: P
                            });
                            let C = await this.client.core.relayer.subscribe(P);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: C
                            }), await this.client.core.pairing.activate({
                                topic: i
                            })
                        } else(0, ed.isJsonRpcError)(c) && (await this.client.proposal.delete(l, (0, E.D6)("USER_DISCONNECTED")), this.events.emit((0, E.E0)("session_connect"), {
                            error: c.error
                        }))
                    }, this.onSessionSettleRequest = async (i, c) => {
                        let {
                            id: l,
                            params: v
                        } = c;
                        try {
                            this.isValidSessionSettleRequest(v);
                            let {
                                relay: l,
                                controller: w,
                                expiry: I,
                                namespaces: P,
                                requiredNamespaces: C,
                                optionalNamespaces: D,
                                sessionProperties: q,
                                pairingTopic: $
                            } = c.params, B = index_es_w({
                                topic: i,
                                relay: l,
                                expiry: I,
                                namespaces: P,
                                acknowledged: !0,
                                pairingTopic: $,
                                requiredNamespaces: C,
                                optionalNamespaces: D,
                                controller: w.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: w.publicKey,
                                    metadata: w.metadata
                                }
                            }, q && {
                                sessionProperties: q
                            });
                            await this.sendResult(c.id, i, !0), this.events.emit((0, E.E0)("session_connect"), {
                                session: B
                            }), this.cleanupDuplicatePairings(B)
                        } catch (c) {
                            await this.sendError(l, i, c), this.client.logger.error(c)
                        }
                    }, this.onSessionSettleResponse = async (i, c) => {
                        let {
                            id: l
                        } = c;
                        (0, ed.isJsonRpcResult)(c) ? (await this.client.session.update(i, {
                            acknowledged: !0
                        }), this.events.emit((0, E.E0)("session_approve", l), {})) : (0, ed.isJsonRpcError)(c) && (await this.client.session.delete(i, (0, E.D6)("USER_DISCONNECTED")), this.events.emit((0, E.E0)("session_approve", l), {
                            error: c.error
                        }))
                    }, this.onSessionUpdateRequest = async (i, c) => {
                        let {
                            params: l,
                            id: v
                        } = c;
                        try {
                            this.isValidUpdate(index_es_w({
                                topic: i
                            }, l)), await this.client.session.update(i, {
                                namespaces: l.namespaces
                            }), await this.sendResult(v, i, !0), this.client.events.emit("session_update", {
                                id: v,
                                topic: i,
                                params: l
                            })
                        } catch (c) {
                            await this.sendError(v, i, c), this.client.logger.error(c)
                        }
                    }, this.onSessionUpdateResponse = (i, c) => {
                        let {
                            id: l
                        } = c;
                        (0, ed.isJsonRpcResult)(c) ? this.events.emit((0, E.E0)("session_update", l), {}): (0, ed.isJsonRpcError)(c) && this.events.emit((0, E.E0)("session_update", l), {
                            error: c.error
                        })
                    }, this.onSessionExtendRequest = async (i, c) => {
                        let {
                            id: l
                        } = c;
                        try {
                            this.isValidExtend({
                                topic: i
                            }), await this.setExpiry(i, (0, E.gn)(tZ)), await this.sendResult(l, i, !0), this.client.events.emit("session_extend", {
                                id: l,
                                topic: i
                            })
                        } catch (c) {
                            await this.sendError(l, i, c), this.client.logger.error(c)
                        }
                    }, this.onSessionExtendResponse = (i, c) => {
                        let {
                            id: l
                        } = c;
                        (0, ed.isJsonRpcResult)(c) ? this.events.emit((0, E.E0)("session_extend", l), {}): (0, ed.isJsonRpcError)(c) && this.events.emit((0, E.E0)("session_extend", l), {
                            error: c.error
                        })
                    }, this.onSessionPingRequest = async (i, c) => {
                        let {
                            id: l
                        } = c;
                        try {
                            this.isValidPing({
                                topic: i
                            }), await this.sendResult(l, i, !0), this.client.events.emit("session_ping", {
                                id: l,
                                topic: i
                            })
                        } catch (c) {
                            await this.sendError(l, i, c), this.client.logger.error(c)
                        }
                    }, this.onSessionPingResponse = (i, c) => {
                        let {
                            id: l
                        } = c;
                        setTimeout(() => {
                            (0, ed.isJsonRpcResult)(c) ? this.events.emit((0, E.E0)("session_ping", l), {}): (0, ed.isJsonRpcError)(c) && this.events.emit((0, E.E0)("session_ping", l), {
                                error: c.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (i, c) => {
                        let {
                            id: l
                        } = c;
                        try {
                            this.isValidDisconnect({
                                topic: i,
                                reason: c.params
                            }), await Promise.all([new Promise(c => {
                                this.client.core.relayer.once(t_.publish, async () => {
                                    c(await this.deleteSession(i))
                                })
                            }), this.sendResult(l, i, !0)]), this.client.events.emit("session_delete", {
                                id: l,
                                topic: i
                            })
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                    }, this.onSessionRequest = async (i, c) => {
                        let {
                            id: l,
                            params: v
                        } = c;
                        try {
                            this.isValidRequest(index_es_w({
                                topic: i
                            }, v)), await this.setPendingSessionRequest({
                                id: l,
                                topic: i,
                                params: v
                            });
                            let w = (0, E.rj)(JSON.stringify(c)),
                                I = this.client.session.get(i),
                                P = await this.getVerifyContext(w, I.peer.metadata);
                            this.client.events.emit("session_request", {
                                id: l,
                                topic: i,
                                params: v,
                                verifyContext: P
                            })
                        } catch (c) {
                            await this.sendError(l, i, c), this.client.logger.error(c)
                        }
                    }, this.onSessionRequestResponse = (i, c) => {
                        let {
                            id: l
                        } = c;
                        (0, ed.isJsonRpcResult)(c) ? this.events.emit((0, E.E0)("session_request", l), {
                            result: c.result
                        }): (0, ed.isJsonRpcError)(c) && this.events.emit((0, E.E0)("session_request", l), {
                            error: c.error
                        })
                    }, this.onSessionEventRequest = async (i, c) => {
                        let {
                            id: l,
                            params: v
                        } = c;
                        try {
                            this.isValidEmit(index_es_w({
                                topic: i
                            }, v)), this.client.events.emit("session_event", {
                                id: l,
                                topic: i,
                                params: v
                            })
                        } catch (c) {
                            await this.sendError(l, i, c), this.client.logger.error(c)
                        }
                    }, this.isValidConnect = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(i)}`);
                            throw Error(c)
                        }
                        let {
                            pairingTopic: c,
                            requiredNamespaces: l,
                            optionalNamespaces: v,
                            sessionProperties: w,
                            relays: I
                        } = i;
                        if ((0, E.o8)(c) || await this.isValidPairingTopic(c), !(0, E.PM)(I, !0)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `connect() relays: ${I}`);
                            throw Error(i)
                        }(0, E.o8)(l) || 0 === (0, E.L5)(l) || this.validateNamespaces(l, "requiredNamespaces"), (0, E.o8)(v) || 0 === (0, E.L5)(v) || this.validateNamespaces(v, "optionalNamespaces"), (0, E.o8)(w) || this.validateSessionProps(w, "sessionProperties")
                    }, this.validateNamespaces = (i, c) => {
                        let l = (0, E.n)(i, "connect()", c);
                        if (l) throw Error(l.message)
                    }, this.isValidApprove = async i => {
                        if (!(0, E.EJ)(i)) throw Error((0, E.Z7)("MISSING_OR_INVALID", `approve() params: ${i}`).message);
                        let {
                            id: c,
                            namespaces: l,
                            relayProtocol: v,
                            sessionProperties: w
                        } = i;
                        await this.isValidProposalId(c);
                        let I = this.client.proposal.get(c),
                            P = (0, E.in)(l, "approve()");
                        if (P) throw Error(P.message);
                        let C = (0, E.rF)(I.requiredNamespaces, l, "approve()");
                        if (C) throw Error(C.message);
                        if (!(0, E.M_)(v, !0)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${v}`);
                            throw Error(i)
                        }(0, E.o8)(w) || this.validateSessionProps(w, "sessionProperties")
                    }, this.isValidReject = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `reject() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            id: c,
                            reason: l
                        } = i;
                        if (await this.isValidProposalId(c), !(0, E.$t)(l)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(l)}`);
                            throw Error(i)
                        }
                    }, this.isValidSessionSettleRequest = i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            relay: c,
                            controller: l,
                            namespaces: v,
                            expiry: w
                        } = i;
                        if (!(0, E.Z2)(c)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(i)
                        }
                        let I = (0, E.Dd)(l, "onSessionSettleRequest()");
                        if (I) throw Error(I.message);
                        let P = (0, E.in)(v, "onSessionSettleRequest()");
                        if (P) throw Error(P.message);
                        if ((0, E.Bw)(w)) {
                            let {
                                message: i
                            } = (0, E.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw Error(i)
                        }
                    }, this.isValidUpdate = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `update() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c,
                            namespaces: l
                        } = i;
                        await this.isValidSessionTopic(c);
                        let v = this.client.session.get(c),
                            w = (0, E.in)(l, "update()");
                        if (w) throw Error(w.message);
                        let I = (0, E.rF)(v.requiredNamespaces, l, "update()");
                        if (I) throw Error(I.message)
                    }, this.isValidExtend = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `extend() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c
                        } = i;
                        await this.isValidSessionTopic(c)
                    }, this.isValidRequest = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `request() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c,
                            request: l,
                            chainId: v,
                            expiry: w
                        } = i;
                        await this.isValidSessionTopic(c);
                        let {
                            namespaces: I
                        } = this.client.session.get(c);
                        if (!(0, E.p8)(I, v)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `request() chainId: ${v}`);
                            throw Error(i)
                        }
                        if (!(0, E.hH)(l)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(l)}`);
                            throw Error(i)
                        }
                        if (!(0, E.al)(I, v, l.method)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `request() method: ${l.method}`);
                            throw Error(i)
                        }
                        if (w && !(0, E.ON)(w, tQ)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `request() expiry: ${w}. Expiry must be a number (in seconds) between ${tQ.min} and ${tQ.max}`);
                            throw Error(i)
                        }
                    }, this.isValidRespond = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `respond() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c,
                            response: l
                        } = i;
                        if (await this.isValidSessionTopic(c), !(0, E.JT)(l)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(l)}`);
                            throw Error(i)
                        }
                    }, this.isValidPing = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `ping() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c
                        } = i;
                        await this.isValidSessionOrPairingTopic(c)
                    }, this.isValidEmit = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `emit() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c,
                            event: l,
                            chainId: v
                        } = i;
                        await this.isValidSessionTopic(c);
                        let {
                            namespaces: w
                        } = this.client.session.get(c);
                        if (!(0, E.p8)(w, v)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `emit() chainId: ${v}`);
                            throw Error(i)
                        }
                        if (!(0, E.nf)(l)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(l)}`);
                            throw Error(i)
                        }
                        if (!(0, E.sI)(w, v, l.name)) {
                            let {
                                message: i
                            } = (0, E.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(l)}`);
                            throw Error(i)
                        }
                    }, this.isValidDisconnect = async i => {
                        if (!(0, E.EJ)(i)) {
                            let {
                                message: c
                            } = (0, E.Z7)("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                            throw Error(c)
                        }
                        let {
                            topic: c
                        } = i;
                        await this.isValidSessionOrPairingTopic(c)
                    }, this.getVerifyContext = async (i, c) => {
                        let l = {
                            verified: {
                                verifyUrl: c.verifyUrl || "",
                                validation: "UNKNOWN",
                                origin: c.url || ""
                            }
                        };
                        try {
                            let v = await this.client.core.verify.resolve({
                                attestationId: i,
                                verifyUrl: c.verifyUrl
                            });
                            v && (l.verified.origin = v, l.verified.validation = v === c.url ? "VALID" : "INVALID")
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(l)}`), l
                    }, this.validateSessionProps = (i, c) => {
                        Object.values(i).forEach(i => {
                            if (!(0, E.M_)(i, !1)) {
                                let {
                                    message: l
                                } = (0, E.Z7)("MISSING_OR_INVALID", `${c} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
                                throw Error(l)
                            }
                        })
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: i
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(i)
                    }
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(t_.message, async i => {
                        let {
                            topic: c,
                            message: l
                        } = i;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(l))) return;
                        let v = await this.client.core.crypto.decode(c, l);
                        (0, ed.isJsonRpcRequest)(v) ? (this.client.core.history.set(c, v), this.onRelayEventRequest({
                            topic: c,
                            payload: v
                        })) : (0, ed.isJsonRpcResponse)(v) ? (await this.client.core.history.resolve(v), await this.onRelayEventResponse({
                            topic: c,
                            payload: v
                        }), this.client.core.history.delete(c, v.id)) : this.onRelayEventUnknownPayload({
                            topic: c,
                            payload: v
                        })
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(tS.expired, async i => {
                        let {
                            topic: c,
                            id: l
                        } = (0, E.iP)(i.target);
                        if (l && this.client.pendingRequest.keys.includes(l)) return await this.deletePendingSessionRequest(l, (0, E.Z7)("EXPIRED"), !0);
                        c ? this.client.session.keys.includes(c) && (await this.deleteSession(c, !0), this.client.events.emit("session_expire", {
                            topic: c
                        })) : l && (await this.deleteProposal(l, !0), this.client.events.emit("proposal_expire", {
                            id: l
                        }))
                    })
                }
                isValidPairingTopic(i) {
                    if (!(0, E.M_)(i, !1)) {
                        let {
                            message: c
                        } = (0, E.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                        throw Error(c)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(i)) {
                        let {
                            message: c
                        } = (0, E.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                        throw Error(c)
                    }
                    if ((0, E.Bw)(this.client.core.pairing.pairings.get(i).expiry)) {
                        let {
                            message: c
                        } = (0, E.Z7)("EXPIRED", `pairing topic: ${i}`);
                        throw Error(c)
                    }
                }
                async isValidSessionTopic(i) {
                    if (!(0, E.M_)(i, !1)) {
                        let {
                            message: c
                        } = (0, E.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${i}`);
                        throw Error(c)
                    }
                    if (!this.client.session.keys.includes(i)) {
                        let {
                            message: c
                        } = (0, E.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${i}`);
                        throw Error(c)
                    }
                    if ((0, E.Bw)(this.client.session.get(i).expiry)) {
                        await this.deleteSession(i);
                        let {
                            message: c
                        } = (0, E.Z7)("EXPIRED", `session topic: ${i}`);
                        throw Error(c)
                    }
                }
                async isValidSessionOrPairingTopic(i) {
                    if (this.client.session.keys.includes(i)) await this.isValidSessionTopic(i);
                    else if (this.client.core.pairing.pairings.keys.includes(i)) this.isValidPairingTopic(i);
                    else if ((0, E.M_)(i, !1)) {
                        let {
                            message: c
                        } = (0, E.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${i}`);
                        throw Error(c)
                    } else {
                        let {
                            message: c
                        } = (0, E.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${i}`);
                        throw Error(c)
                    }
                }
                async isValidProposalId(i) {
                    if (!(0, E.Q0)(i)) {
                        let {
                            message: c
                        } = (0, E.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${i}`);
                        throw Error(c)
                    }
                    if (!this.client.proposal.keys.includes(i)) {
                        let {
                            message: c
                        } = (0, E.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${i}`);
                        throw Error(c)
                    }
                    if ((0, E.Bw)(this.client.proposal.get(i).expiry)) {
                        await this.deleteProposal(i);
                        let {
                            message: c
                        } = (0, E.Z7)("EXPIRED", `proposal id: ${i}`);
                        throw Error(c)
                    }
                }
            };
            let index_es_rs = class index_es_rs extends Nt {
                constructor(i, c) {
                    super(i, c, "proposal", tJ), this.core = i, this.logger = c
                }
            };
            let index_es_os = class index_es_os extends Nt {
                constructor(i, c) {
                    super(i, c, "session", tJ), this.core = i, this.logger = c
                }
            };
            let index_es_as = class index_es_as extends Nt {
                constructor(i, c) {
                    super(i, c, "request", tJ, i => i.id), this.core = i, this.logger = c
                }
            };
            let index_es_M = class index_es_M extends b {
                constructor(i) {
                    super(i), this.protocol = "wc", this.version = 2, this.name = tF.name, this.events = new w.EventEmitter, this.on = (i, c) => this.events.on(i, c), this.once = (i, c) => this.events.once(i, c), this.off = (i, c) => this.events.off(i, c), this.removeListener = (i, c) => this.events.removeListener(i, c), this.removeAllListeners = i => this.events.removeAllListeners(i), this.connect = async i => {
                        try {
                            return await this.engine.connect(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.pair = async i => {
                        try {
                            return await this.engine.pair(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.approve = async i => {
                        try {
                            return await this.engine.approve(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.reject = async i => {
                        try {
                            return await this.engine.reject(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.update = async i => {
                        try {
                            return await this.engine.update(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.extend = async i => {
                        try {
                            return await this.engine.extend(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.request = async i => {
                        try {
                            return await this.engine.request(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.respond = async i => {
                        try {
                            return await this.engine.respond(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.ping = async i => {
                        try {
                            return await this.engine.ping(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.emit = async i => {
                        try {
                            return await this.engine.emit(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.disconnect = async i => {
                        try {
                            return await this.engine.disconnect(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.find = i => {
                        try {
                            return this.engine.find(i)
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (i) {
                            throw this.logger.error(i.message), i
                        }
                    }, this.name = i ? .name || tF.name, this.metadata = i ? .metadata || (0, E.D)();
                    let c = "u" > typeof i ? .logger && "string" != typeof i ? .logger ? i.logger : (0, Q.pino)((0, Q.getDefaultLoggerOptions)({
                        level: i ? .logger || tF.logger
                    }));
                    this.core = i ? .core || new Z(i), this.logger = (0, Q.generateChildLogger)(c, this.name), this.session = new index_es_os(this.core, this.logger), this.proposal = new index_es_rs(this.core, this.logger), this.pendingRequest = new index_es_as(this.core, this.logger), this.engine = new index_es_ns(this)
                }
                static async init(i) {
                    let c = new index_es_M(i);
                    return await c.initialize(), c
                }
                get context() {
                    return (0, Q.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (i) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(i.message), i
                    }
                }
            };
            var t4 = l(16e3);
            let t8 = "error",
                t7 = "wc@2:universal_provider:",
                t9 = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var re = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof l.g ? l.g : "u" > typeof self ? self : {},
                rt = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(i, c) {
                (function() {
                    var l, v = "Expected a function",
                        w = "__lodash_hash_undefined__",
                        I = "__lodash_placeholder__",
                        E = 1 / 0,
                        P = 0 / 0,
                        C = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        D = "[object Arguments]",
                        q = "[object Array]",
                        $ = "[object Boolean]",
                        B = "[object Date]",
                        J = "[object Error]",
                        F = "[object Function]",
                        W = "[object GeneratorFunction]",
                        Q = "[object Map]",
                        X = "[object Number]",
                        ee = "[object Object]",
                        et = "[object Promise]",
                        er = "[object RegExp]",
                        es = "[object Set]",
                        ea = "[object String]",
                        eo = "[object Symbol]",
                        ec = "[object WeakMap]",
                        el = "[object ArrayBuffer]",
                        eh = "[object DataView]",
                        ep = "[object Float32Array]",
                        ed = "[object Float64Array]",
                        eg = "[object Int8Array]",
                        ey = "[object Int16Array]",
                        e_ = "[object Int32Array]",
                        ev = "[object Uint8Array]",
                        em = "[object Uint8ClampedArray]",
                        eb = "[object Uint16Array]",
                        ew = "[object Uint32Array]",
                        eI = /\b__p \+= '';/g,
                        eE = /\b(__p \+=) '' \+/g,
                        ex = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        eS = /&(?:amp|lt|gt|quot|#39);/g,
                        eP = /[&<>"']/g,
                        eO = RegExp(eS.source),
                        eR = RegExp(eP.source),
                        eC = /<%-([\s\S]+?)%>/g,
                        eA = /<%([\s\S]+?)%>/g,
                        eN = /<%=([\s\S]+?)%>/g,
                        ej = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        eT = /^\w*$/,
                        ez = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        eL = /[\\^$.*+?()[\]{}|]/g,
                        eM = RegExp(eL.source),
                        eD = /^\s+/,
                        ek = /\s/,
                        eU = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        e$ = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        eK = /,? & /,
                        eH = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        eV = /[()=,{}\[\]\/\s]/,
                        eB = /\\(\\)?/g,
                        eG = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eJ = /\w*$/,
                        eF = /^[-+]0x[0-9a-f]+$/i,
                        eW = /^0b[01]+$/i,
                        eZ = /^\[object .+?Constructor\]$/,
                        eY = /^0o[0-7]+$/i,
                        eQ = /^(?:0|[1-9]\d*)$/,
                        eX = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        e0 = /($^)/,
                        e1 = /['\n\r\u2028\u2029\\]/g,
                        e5 = "\ud800-\udfff",
                        e6 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        e2 = "\\u2700-\\u27bf",
                        e3 = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        e4 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        e8 = "\\ufe0e\\ufe0f",
                        e7 = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        e9 = "['’]",
                        te = "[" + e7 + "]",
                        tn = "[" + e6 + "]",
                        ts = "[" + e3 + "]",
                        to = "[^" + e5 + e7 + "\\d+" + e2 + e3 + e4 + "]",
                        tc = "\ud83c[\udffb-\udfff]",
                        tl = "[^" + e5 + "]",
                        th = "(?:\ud83c[\udde6-\uddff]){2}",
                        tp = "[\ud800-\udbff][\udc00-\udfff]",
                        tf = "[" + e4 + "]",
                        td = "\\u200d",
                        tg = "(?:" + ts + "|" + to + ")",
                        ty = "(?:" + e9 + "(?:d|ll|m|re|s|t|ve))?",
                        t_ = "(?:" + e9 + "(?:D|LL|M|RE|S|T|VE))?",
                        tm = "(?:" + tn + "|" + tc + ")?",
                        tb = "[" + e8 + "]?",
                        tw = "(?:" + td + "(?:" + [tl, th, tp].join("|") + ")" + tb + tm + ")*",
                        tI = tb + tm + tw,
                        tE = "(?:" + ["[" + e2 + "]", th, tp].join("|") + ")" + tI,
                        tx = "(?:" + [tl + tn + "?", tn, th, tp, "[" + e5 + "]"].join("|") + ")",
                        tS = RegExp(e9, "g"),
                        tP = RegExp(tn, "g"),
                        tO = RegExp(tc + "(?=" + tc + ")|" + tx + tI, "g"),
                        tR = RegExp([tf + "?" + ts + "+" + ty + "(?=" + [te, tf, "$"].join("|") + ")", "(?:" + tf + "|" + to + ")+" + t_ + "(?=" + [te, tf + tg, "$"].join("|") + ")", tf + "?" + tg + "+" + ty, tf + "+" + t_, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", tE].join("|"), "g"),
                        tC = RegExp("[" + td + e5 + e6 + e8 + "]"),
                        tA = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        tN = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        tj = -1,
                        tT = {};
                    tT[ep] = tT[ed] = tT[eg] = tT[ey] = tT[e_] = tT[ev] = tT[em] = tT[eb] = tT[ew] = !0, tT[D] = tT[q] = tT[el] = tT[$] = tT[eh] = tT[B] = tT[J] = tT[F] = tT[Q] = tT[X] = tT[ee] = tT[er] = tT[es] = tT[ea] = tT[ec] = !1;
                    var tz = {};
                    tz[D] = tz[q] = tz[el] = tz[eh] = tz[$] = tz[B] = tz[ep] = tz[ed] = tz[eg] = tz[ey] = tz[e_] = tz[Q] = tz[X] = tz[ee] = tz[er] = tz[es] = tz[ea] = tz[eo] = tz[ev] = tz[em] = tz[eb] = tz[ew] = !0, tz[J] = tz[F] = tz[ec] = !1;
                    var tL = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        tM = parseFloat,
                        tD = parseInt,
                        tk = "object" == typeof re && re && re.Object === Object && re,
                        tq = "object" == typeof self && self && self.Object === Object && self,
                        tU = tk || tq || Function("return this")(),
                        t$ = c && !c.nodeType && c,
                        tK = t$ && i && !i.nodeType && i,
                        tH = tK && tK.exports === t$,
                        tV = tH && tk.process,
                        tB = function() {
                            try {
                                return tK && tK.require && tK.require("util").types || tV && tV.binding && tV.binding("util")
                            } catch {}
                        }(),
                        tG = tB && tB.isArrayBuffer,
                        tJ = tB && tB.isDate,
                        tF = tB && tB.isMap,
                        tW = tB && tB.isRegExp,
                        tZ = tB && tB.isSet,
                        tY = tB && tB.isTypedArray;

                    function cn(i, c, l) {
                        switch (l.length) {
                            case 0:
                                return i.call(c);
                            case 1:
                                return i.call(c, l[0]);
                            case 2:
                                return i.call(c, l[0], l[1]);
                            case 3:
                                return i.call(c, l[0], l[1], l[2])
                        }
                        return i.apply(c, l)
                    }

                    function Qo(i, c, l, v) {
                        for (var w = -1, I = null == i ? 0 : i.length; ++w < I;) {
                            var E = i[w];
                            c(v, E, l(E), i)
                        }
                        return v
                    }

                    function mn(i, c) {
                        for (var l = -1, v = null == i ? 0 : i.length; ++l < v && !1 !== c(i[l], l, i););
                        return i
                    }

                    function Ps(i, c) {
                        for (var l = -1, v = null == i ? 0 : i.length; ++l < v;)
                            if (!c(i[l], l, i)) return !1;
                        return !0
                    }

                    function jn(i, c) {
                        for (var l = -1, v = null == i ? 0 : i.length, w = 0, I = []; ++l < v;) {
                            var E = i[l];
                            c(E, l, i) && (I[w++] = E)
                        }
                        return I
                    }

                    function Ie(i, c) {
                        return !!(null == i ? 0 : i.length) && Rt(i, c, 0) > -1
                    }

                    function Lr(i, c, l) {
                        for (var v = -1, w = null == i ? 0 : i.length; ++v < w;)
                            if (l(c, i[v])) return !0;
                        return !1
                    }

                    function G(i, c) {
                        for (var l = -1, v = null == i ? 0 : i.length, w = Array(v); ++l < v;) w[l] = c(i[l], l, i);
                        return w
                    }

                    function nt(i, c) {
                        for (var l = -1, v = c.length, w = i.length; ++l < v;) i[w + l] = c[l];
                        return i
                    }

                    function Dr(i, c, l, v) {
                        var w = -1,
                            I = null == i ? 0 : i.length;
                        for (v && I && (l = i[++w]); ++w < I;) l = c(l, i[w], w, i);
                        return l
                    }

                    function ko(i, c, l, v) {
                        var w = null == i ? 0 : i.length;
                        for (v && w && (l = i[--w]); w--;) l = c(l, i[w], w, i);
                        return l
                    }

                    function Nr(i, c) {
                        for (var l = -1, v = null == i ? 0 : i.length; ++l < v;)
                            if (c(i[l], l, i)) return !0;
                        return !1
                    }
                    var tQ = Hr("length");

                    function As(i, c, l) {
                        var v;
                        return l(i, function(i, l, w) {
                            if (c(i, l, w)) return v = l, !1
                        }), v
                    }

                    function xe(i, c, l, v) {
                        for (var w = i.length, I = l + (v ? 1 : -1); v ? I-- : ++I < w;)
                            if (c(i[I], I, i)) return I;
                        return -1
                    }

                    function Rt(i, c, l) {
                        return c == c ? function(i, c, l) {
                            for (var v = l - 1, w = i.length; ++v < w;)
                                if (i[v] === c) return v;
                            return -1
                        }(i, c, l) : xe(i, Cs, l)
                    }

                    function ef(i, c, l, v) {
                        for (var w = l - 1, I = i.length; ++w < I;)
                            if (v(i[w], c)) return w;
                        return -1
                    }

                    function Cs(i) {
                        return i != i
                    }

                    function Is(i, c) {
                        var l = null == i ? 0 : i.length;
                        return l ? Ur(i, c) / l : P
                    }

                    function Hr(i) {
                        return function(c) {
                            return null == c ? l : c[i]
                        }
                    }

                    function $r(i) {
                        return function(c) {
                            return null == i ? l : i[c]
                        }
                    }

                    function xs(i, c, l, v, w) {
                        return w(i, function(i, w, I) {
                            l = v ? (v = !1, i) : c(l, i, w, I)
                        }), l
                    }

                    function Ur(i, c) {
                        for (var v, w = -1, I = i.length; ++w < I;) {
                            var E = c(i[w]);
                            E !== l && (v = v === l ? E : v + E)
                        }
                        return v
                    }

                    function Wr(i, c) {
                        for (var l = -1, v = Array(i); ++l < i;) v[l] = c(l);
                        return v
                    }

                    function Es(i) {
                        return i && i.slice(0, Rs(i) + 1).replace(eD, "")
                    }

                    function hn(i) {
                        return function(c) {
                            return i(c)
                        }
                    }

                    function Fr(i, c) {
                        return G(c, function(c) {
                            return i[c]
                        })
                    }

                    function kt(i, c) {
                        return i.has(c)
                    }

                    function ys(i, c) {
                        for (var l = -1, v = i.length; ++l < v && Rt(c, i[l], 0) > -1;);
                        return l
                    }

                    function Ss(i, c) {
                        for (var l = i.length; l-- && Rt(c, i[l], 0) > -1;);
                        return l
                    }
                    var tX = $r({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        t0 = $r({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function ff(i) {
                        return "\\" + tL[i]
                    }

                    function bt(i) {
                        return tC.test(i)
                    }

                    function Mr(i) {
                        var c = -1,
                            l = Array(i.size);
                        return i.forEach(function(i, v) {
                            l[++c] = [v, i]
                        }), l
                    }

                    function Os(i, c) {
                        return function(l) {
                            return i(c(l))
                        }
                    }

                    function tt(i, c) {
                        for (var l = -1, v = i.length, w = 0, E = []; ++l < v;) {
                            var P = i[l];
                            (P === c || P === I) && (i[l] = I, E[w++] = l)
                        }
                        return E
                    }

                    function Ee(i) {
                        var c = -1,
                            l = Array(i.size);
                        return i.forEach(function(i) {
                            l[++c] = i
                        }), l
                    }

                    function Tt(i) {
                        return bt(i) ? function(i) {
                            for (var c = tO.lastIndex = 0; tO.test(i);) ++c;
                            return c
                        }(i) : tQ(i)
                    }

                    function On(i) {
                        return bt(i) ? i.match(tO) || [] : i.split("")
                    }

                    function Rs(i) {
                        for (var c = i.length; c-- && ek.test(i.charAt(c)););
                        return c
                    }
                    var t1 = $r({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        t5 = function h(i) {
                            var c, ek, e5, e6, e2 = (i = null == i ? tU : t5.defaults(tU.Object(), i, t5.pick(tU, tN))).Array,
                                e3 = i.Date,
                                e4 = i.Error,
                                e8 = i.Function,
                                e7 = i.Math,
                                e9 = i.Object,
                                te = i.RegExp,
                                tn = i.String,
                                ts = i.TypeError,
                                to = e2.prototype,
                                tc = e8.prototype,
                                tl = e9.prototype,
                                th = i["__core-js_shared__"],
                                tp = tc.toString,
                                tf = tl.hasOwnProperty,
                                td = 0,
                                tg = (c = /[^.]+$/.exec(th && th.keys && th.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "",
                                ty = tl.toString,
                                t_ = tp.call(e9),
                                tm = tU._,
                                tb = te("^" + tp.call(tf).replace(eL, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                tw = tH ? i.Buffer : l,
                                tI = i.Symbol,
                                tE = i.Uint8Array,
                                tx = tw ? tw.allocUnsafe : l,
                                tO = Os(e9.getPrototypeOf, e9),
                                tC = e9.create,
                                tL = tl.propertyIsEnumerable,
                                tk = to.splice,
                                tq = tI ? tI.isConcatSpreadable : l,
                                t$ = tI ? tI.iterator : l,
                                tK = tI ? tI.toStringTag : l,
                                tV = function() {
                                    try {
                                        var i = _t(e9, "defineProperty");
                                        return i({}, "", {}), i
                                    } catch {}
                                }(),
                                tB = i.clearTimeout !== tU.clearTimeout && i.clearTimeout,
                                tQ = e3 && e3.now !== tU.Date.now && e3.now,
                                t6 = i.setTimeout !== tU.setTimeout && i.setTimeout,
                                t2 = e7.ceil,
                                t3 = e7.floor,
                                t4 = e9.getOwnPropertySymbols,
                                t8 = tw ? tw.isBuffer : l,
                                t7 = i.isFinite,
                                t9 = to.join,
                                re = Os(e9.keys, e9),
                                rt = e7.max,
                                rs = e7.min,
                                ro = e3.now,
                                rc = i.parseInt,
                                rl = e7.random,
                                ru = to.reverse,
                                rh = _t(i, "DataView"),
                                rp = _t(i, "Map"),
                                rf = _t(i, "Promise"),
                                rd = _t(i, "Set"),
                                rg = _t(i, "WeakMap"),
                                ry = _t(e9, "create"),
                                r_ = rg && new rg,
                                rv = {},
                                rm = mt(rh),
                                rb = mt(rp),
                                rw = mt(rf),
                                rI = mt(rd),
                                rE = mt(rg),
                                rx = tI ? tI.prototype : l,
                                rS = rx ? rx.valueOf : l,
                                rP = rx ? rx.toString : l;

                            function a(i) {
                                if (K(i) && !iP(i) && !(i instanceof N)) {
                                    if (i instanceof Pn) return i;
                                    if (tf.call(i, "__wrapped__")) return Wu(i)
                                }
                                return new Pn(i)
                            }
                            var rO = function() {
                                function n() {}
                                return function(i) {
                                    if (!z(i)) return {};
                                    if (tC) return tC(i);
                                    n.prototype = i;
                                    var c = new n;
                                    return n.prototype = l, c
                                }
                            }();

                            function Fe() {}

                            function Pn(i, c) {
                                this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = l
                            }

                            function N(i) {
                                this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function pt(i) {
                                var c = -1,
                                    l = null == i ? 0 : i.length;
                                for (this.clear(); ++c < l;) {
                                    var v = i[c];
                                    this.set(v[0], v[1])
                                }
                            }

                            function Gn(i) {
                                var c = -1,
                                    l = null == i ? 0 : i.length;
                                for (this.clear(); ++c < l;) {
                                    var v = i[c];
                                    this.set(v[0], v[1])
                                }
                            }

                            function zn(i) {
                                var c = -1,
                                    l = null == i ? 0 : i.length;
                                for (this.clear(); ++c < l;) {
                                    var v = i[c];
                                    this.set(v[0], v[1])
                                }
                            }

                            function dt(i) {
                                var c = -1,
                                    l = null == i ? 0 : i.length;
                                for (this.__data__ = new zn; ++c < l;) this.add(i[c])
                            }

                            function Rn(i) {
                                var c = this.__data__ = new Gn(i);
                                this.size = c.size
                            }

                            function Ws(i, c) {
                                var l = iP(i),
                                    v = !l && iS(i),
                                    w = !l && !v && iR(i),
                                    I = !l && !v && !w && iT(i),
                                    E = l || v || w || I,
                                    P = E ? Wr(i.length, tn) : [],
                                    C = P.length;
                                for (var D in i)(c || tf.call(i, D)) && !(E && ("length" == D || w && ("offset" == D || "parent" == D) || I && ("buffer" == D || "byteLength" == D || "byteOffset" == D) || Jn(D, C))) && P.push(D);
                                return P
                            }

                            function Fs(i) {
                                var c = i.length;
                                return c ? i[ti(0, c - 1)] : l
                            }

                            function Kr(i, c, v) {
                                (v === l || bn(i[c], v)) && (v !== l || c in i) || Kn(i, c, v)
                            }

                            function ie(i, c, v) {
                                var w = i[c];
                                tf.call(i, c) && bn(w, v) && (v !== l || c in i) || Kn(i, c, v)
                            }

                            function Me(i, c) {
                                for (var l = i.length; l--;)
                                    if (bn(i[l][0], c)) return l;
                                return -1
                            }

                            function dc(i, c, l, v) {
                                return rR(i, function(i, w, I) {
                                    c(v, i, l(i), I)
                                }), v
                            }

                            function Ms(i, c) {
                                return i && Un(c, V(c), i)
                            }

                            function Kn(i, c, l) {
                                "__proto__" == c && tV ? tV(i, c, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: l,
                                    writable: !0
                                }) : i[c] = l
                            }

                            function Yr(i, c) {
                                for (var v = -1, w = c.length, I = e2(w), E = null == i; ++v < w;) I[v] = E ? l : yi(i, c[v]);
                                return I
                            }

                            function gt(i, c, v) {
                                return i == i && (v !== l && (i = i <= v ? i : v), c !== l && (i = i >= c ? i : c)), i
                            }

                            function An(i, c, v, w, I, E) {
                                var P, C = 1 & c,
                                    q = 2 & c,
                                    J = 4 & c;
                                if (v && (P = I ? v(i, w, I, E) : v(i)), P !== l) return P;
                                if (!z(i)) return i;
                                var et = iP(i);
                                if (et) {
                                    if (ec = i.length, eI = new i.constructor(ec), ec && "string" == typeof i[0] && tf.call(i, "index") && (eI.index = i.index, eI.input = i.input), P = eI, !C) return un(i, P)
                                } else {
                                    var ec, eI, eE, ex, eS, eP = rq(i),
                                        eO = eP == F || eP == W;
                                    if (iR(i)) return cu(i, C);
                                    if (eP == ee || eP == D || eO && !I) {
                                        if (P = q || eO ? {} : Ru(i), !C) return q ? (eE = (eS = P) && Un(i, on(i), eS), Un(i, rk(i), eE)) : (ex = Ms(P, i), Un(i, rD(i), ex))
                                    } else {
                                        if (!tz[eP]) return I ? i : {};
                                        P = function(i, c, l) {
                                            var v, w, I = i.constructor;
                                            switch (c) {
                                                case el:
                                                    return oi(i);
                                                case $:
                                                case B:
                                                    return new I(+i);
                                                case eh:
                                                    return v = l ? oi(i.buffer) : i.buffer, new i.constructor(v, i.byteOffset, i.byteLength);
                                                case ep:
                                                case ed:
                                                case eg:
                                                case ey:
                                                case e_:
                                                case ev:
                                                case em:
                                                case eb:
                                                case ew:
                                                    return hu(i, l);
                                                case Q:
                                                    return new I;
                                                case X:
                                                case ea:
                                                    return new I(i);
                                                case er:
                                                    return (w = new i.constructor(i.source, eJ.exec(i))).lastIndex = i.lastIndex, w;
                                                case es:
                                                    return new I;
                                                case eo:
                                                    return rS ? e9(rS.call(i)) : {}
                                            }
                                        }(i, eP, C)
                                    }
                                }
                                E || (E = new Rn);
                                var eR = E.get(i);
                                if (eR) return eR;
                                E.set(i, P), ij(i) ? i.forEach(function(l) {
                                    P.add(An(l, c, v, l, i, E))
                                }) : iA(i) && i.forEach(function(l, w) {
                                    P.set(w, An(l, c, v, w, i, E))
                                });
                                var eC = J ? q ? li : hi : q ? on : V,
                                    eA = et ? l : eC(i);
                                return mn(eA || i, function(l, w) {
                                    eA && (l = i[w = l]), ie(P, w, An(l, c, v, w, i, E))
                                }), P
                            }

                            function qs(i, c, v) {
                                var w = v.length;
                                if (null == i) return !w;
                                for (i = e9(i); w--;) {
                                    var I = v[w],
                                        E = c[I],
                                        P = i[I];
                                    if (P === l && !(I in i) || !E(P)) return !1
                                }
                                return !0
                            }

                            function Bs(i, c, w) {
                                if ("function" != typeof i) throw new ts(v);
                                return rK(function() {
                                    i.apply(l, w)
                                }, c)
                            }

                            function se(i, c, l, v) {
                                var w = -1,
                                    I = Ie,
                                    E = !0,
                                    P = i.length,
                                    C = [],
                                    D = c.length;
                                if (!P) return C;
                                l && (c = G(c, hn(l))), v ? (I = Lr, E = !1) : c.length >= 200 && (I = kt, E = !1, c = new dt(c));
                                e: for (; ++w < P;) {
                                    var q = i[w],
                                        $ = null == l ? q : l(q);
                                    if (q = v || 0 !== q ? q : 0, E && $ == $) {
                                        for (var B = D; B--;)
                                            if (c[B] === $) continue e;
                                        C.push(q)
                                    } else I(c, $, v) || C.push(q)
                                }
                                return C
                            }
                            a.templateSettings = {
                                escape: eC,
                                evaluate: eA,
                                interpolate: eN,
                                variable: "",
                                imports: {
                                    _: a
                                }
                            }, a.prototype = Fe.prototype, a.prototype.constructor = a, Pn.prototype = rO(Fe.prototype), Pn.prototype.constructor = Pn, N.prototype = rO(Fe.prototype), N.prototype.constructor = N, pt.prototype.clear = function() {
                                this.__data__ = ry ? ry(null) : {}, this.size = 0
                            }, pt.prototype.delete = function(i) {
                                var c = this.has(i) && delete this.__data__[i];
                                return this.size -= c ? 1 : 0, c
                            }, pt.prototype.get = function(i) {
                                var c = this.__data__;
                                if (ry) {
                                    var v = c[i];
                                    return v === w ? l : v
                                }
                                return tf.call(c, i) ? c[i] : l
                            }, pt.prototype.has = function(i) {
                                var c = this.__data__;
                                return ry ? c[i] !== l : tf.call(c, i)
                            }, pt.prototype.set = function(i, c) {
                                var v = this.__data__;
                                return this.size += this.has(i) ? 0 : 1, v[i] = ry && c === l ? w : c, this
                            }, Gn.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, Gn.prototype.delete = function(i) {
                                var c = this.__data__,
                                    l = Me(c, i);
                                return !(l < 0) && (l == c.length - 1 ? c.pop() : tk.call(c, l, 1), --this.size, !0)
                            }, Gn.prototype.get = function(i) {
                                var c = this.__data__,
                                    v = Me(c, i);
                                return v < 0 ? l : c[v][1]
                            }, Gn.prototype.has = function(i) {
                                return Me(this.__data__, i) > -1
                            }, Gn.prototype.set = function(i, c) {
                                var l = this.__data__,
                                    v = Me(l, i);
                                return v < 0 ? (++this.size, l.push([i, c])) : l[v][1] = c, this
                            }, zn.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new pt,
                                    map: new(rp || Gn),
                                    string: new pt
                                }
                            }, zn.prototype.delete = function(i) {
                                var c = ke(this, i).delete(i);
                                return this.size -= c ? 1 : 0, c
                            }, zn.prototype.get = function(i) {
                                return ke(this, i).get(i)
                            }, zn.prototype.has = function(i) {
                                return ke(this, i).has(i)
                            }, zn.prototype.set = function(i, c) {
                                var l = ke(this, i),
                                    v = l.size;
                                return l.set(i, c), this.size += l.size == v ? 0 : 1, this
                            }, dt.prototype.add = dt.prototype.push = function(i) {
                                return this.__data__.set(i, w), this
                            }, dt.prototype.has = function(i) {
                                return this.__data__.has(i)
                            }, Rn.prototype.clear = function() {
                                this.__data__ = new Gn, this.size = 0
                            }, Rn.prototype.delete = function(i) {
                                var c = this.__data__,
                                    l = c.delete(i);
                                return this.size = c.size, l
                            }, Rn.prototype.get = function(i) {
                                return this.__data__.get(i)
                            }, Rn.prototype.has = function(i) {
                                return this.__data__.has(i)
                            }, Rn.prototype.set = function(i, c) {
                                var l = this.__data__;
                                if (l instanceof Gn) {
                                    var v = l.__data__;
                                    if (!rp || v.length < 199) return v.push([i, c]), this.size = ++l.size, this;
                                    l = this.__data__ = new zn(v)
                                }
                                return l.set(i, c), this.size = l.size, this
                            };
                            var rR = gu($n),
                                rC = gu(Jr, !0);

                            function _c(i, c) {
                                var l = !0;
                                return rR(i, function(i, v, w) {
                                    return l = !!c(i, v, w)
                                }), l
                            }

                            function qe(i, c, v) {
                                for (var w = -1, I = i.length; ++w < I;) {
                                    var E = i[w],
                                        P = c(E);
                                    if (null != P && (C === l ? P == P && !pn(P) : v(P, C))) var C = P,
                                        D = E
                                }
                                return D
                            }

                            function zs(i, c) {
                                var l = [];
                                return rR(i, function(i, v, w) {
                                    c(i, v, w) && l.push(i)
                                }), l
                            }

                            function j(i, c, l, v, w) {
                                var I = -1,
                                    E = i.length;
                                for (l || (l = uh), w || (w = []); ++I < E;) {
                                    var P = i[I];
                                    c > 0 && l(P) ? c > 1 ? j(P, c - 1, l, v, w) : nt(w, P) : v || (w[w.length] = P)
                                }
                                return w
                            }
                            var rA = vu(),
                                rN = vu(!0);

                            function $n(i, c) {
                                return i && rA(i, c, V)
                            }

                            function Jr(i, c) {
                                return i && rN(i, c, V)
                            }

                            function Be(i, c) {
                                return jn(c, function(c) {
                                    return Xn(i[c])
                                })
                            }

                            function vt(i, c) {
                                c = st(c, i);
                                for (var v = 0, w = c.length; null != i && v < w;) i = i[Wn(c[v++])];
                                return v && v == w ? i : l
                            }

                            function Ys(i, c, l) {
                                var v = c(i);
                                return iP(i) ? v : nt(v, l(i))
                            }

                            function en(i) {
                                return null == i ? i === l ? "[object Undefined]" : "[object Null]" : tK && tK in e9(i) ? function(i) {
                                    var c = tf.call(i, tK),
                                        v = i[tK];
                                    try {
                                        i[tK] = l;
                                        var w = !0
                                    } catch {}
                                    var I = ty.call(i);
                                    return w && (c ? i[tK] = v : delete i[tK]), I
                                }(i) : ty.call(i)
                            }

                            function Xr(i, c) {
                                return i > c
                            }

                            function wc(i, c) {
                                return null != i && tf.call(i, c)
                            }

                            function Pc(i, c) {
                                return null != i && c in e9(i)
                            }

                            function Qr(i, c, v) {
                                for (var w = v ? Lr : Ie, I = i[0].length, E = i.length, P = E, C = e2(E), D = 1 / 0, q = []; P--;) {
                                    var $ = i[P];
                                    P && c && ($ = G($, hn(c))), D = rs($.length, D), C[P] = !v && (c || I >= 120 && $.length >= 120) ? new dt(P && $) : l
                                }
                                $ = i[0];
                                var B = -1,
                                    J = C[0];
                                e: for (; ++B < I && q.length < D;) {
                                    var F = $[B],
                                        W = c ? c(F) : F;
                                    if (F = v || 0 !== F ? F : 0, !(J ? kt(J, W) : w(q, W, v))) {
                                        for (P = E; --P;) {
                                            var Q = C[P];
                                            if (!(Q ? kt(Q, W) : w(i[P], W, v))) continue e
                                        }
                                        J && J.push(W), q.push(F)
                                    }
                                }
                                return q
                            }

                            function ue(i, c, v) {
                                c = st(c, i);
                                var w = null == (i = Du(i, c)) ? i : i[Wn(In(c))];
                                return null == w ? l : cn(w, i, v)
                            }

                            function Zs(i) {
                                return K(i) && en(i) == D
                            }

                            function ae(i, c, v, w, I) {
                                return i === c || (null != i && null != c && (K(i) || K(c)) ? function(i, c, v, w, I, E) {
                                    var P = iP(i),
                                        C = iP(c),
                                        F = P ? q : rq(i),
                                        W = C ? q : rq(c);
                                    F = F == D ? ee : F, W = W == D ? ee : W;
                                    var et = F == ee,
                                        ec = W == ee,
                                        ep = F == W;
                                    if (ep && iR(i)) {
                                        if (!iR(c)) return !1;
                                        P = !0, et = !1
                                    }
                                    if (ep && !et) return E || (E = new Rn), P || iT(i) ? yu(i, c, v, w, I, E) : function(i, c, l, v, w, I, E) {
                                        switch (l) {
                                            case eh:
                                                if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset) break;
                                                i = i.buffer, c = c.buffer;
                                            case el:
                                                return !(i.byteLength != c.byteLength || !I(new tE(i), new tE(c)));
                                            case $:
                                            case B:
                                            case X:
                                                return bn(+i, +c);
                                            case J:
                                                return i.name == c.name && i.message == c.message;
                                            case er:
                                            case ea:
                                                return i == c + "";
                                            case Q:
                                                var P = Mr;
                                            case es:
                                                var C = 1 & v;
                                                if (P || (P = Ee), i.size != c.size && !C) break;
                                                var D = E.get(i);
                                                if (D) return D == c;
                                                v |= 2, E.set(i, c);
                                                var q = yu(P(i), P(c), v, w, I, E);
                                                return E.delete(i), q;
                                            case eo:
                                                if (rS) return rS.call(i) == rS.call(c)
                                        }
                                        return !1
                                    }(i, c, F, v, w, I, E);
                                    if (!(1 & v)) {
                                        var ed = et && tf.call(i, "__wrapped__"),
                                            eg = ec && tf.call(c, "__wrapped__");
                                        if (ed || eg) {
                                            var ey = ed ? i.value() : i,
                                                e_ = eg ? c.value() : c;
                                            return E || (E = new Rn), I(ey, e_, v, w, E)
                                        }
                                    }
                                    return !!ep && (E || (E = new Rn), function(i, c, v, w, I, E) {
                                        var P = 1 & v,
                                            C = hi(i),
                                            D = C.length;
                                        if (D != hi(c).length && !P) return !1;
                                        for (var q = D; q--;) {
                                            var $ = C[q];
                                            if (!(P ? $ in c : tf.call(c, $))) return !1
                                        }
                                        var B = E.get(i),
                                            J = E.get(c);
                                        if (B && J) return B == c && J == i;
                                        var F = !0;
                                        E.set(i, c), E.set(c, i);
                                        for (var W = P; ++q < D;) {
                                            var Q = i[$ = C[q]],
                                                X = c[$];
                                            if (w) var ee = P ? w(X, Q, $, c, i, E) : w(Q, X, $, i, c, E);
                                            if (!(ee === l ? Q === X || I(Q, X, v, w, E) : ee)) {
                                                F = !1;
                                                break
                                            }
                                            W || (W = "constructor" == $)
                                        }
                                        if (F && !W) {
                                            var et = i.constructor,
                                                er = c.constructor;
                                            et != er && "constructor" in i && "constructor" in c && !("function" == typeof et && et instanceof et && "function" == typeof er && er instanceof er) && (F = !1)
                                        }
                                        return E.delete(i), E.delete(c), F
                                    }(i, c, v, w, I, E))
                                }(i, c, v, w, ae, I) : i != i && c != c)
                            }

                            function Vr(i, c, v, w) {
                                var I = v.length,
                                    E = I,
                                    P = !w;
                                if (null == i) return !E;
                                for (i = e9(i); I--;) {
                                    var C = v[I];
                                    if (P && C[2] ? C[1] !== i[C[0]] : !(C[0] in i)) return !1
                                }
                                for (; ++I < E;) {
                                    var D = (C = v[I])[0],
                                        q = i[D],
                                        $ = C[1];
                                    if (P && C[2]) {
                                        if (q === l && !(D in i)) return !1
                                    } else {
                                        var B = new Rn;
                                        if (w) var J = w(q, $, D, i, c, B);
                                        if (!(J === l ? ae($, q, 3, w, B) : J)) return !1
                                    }
                                }
                                return !0
                            }

                            function Js(i) {
                                return !(!z(i) || tg && tg in i) && (Xn(i) ? tb : eZ).test(mt(i))
                            }

                            function Xs(i) {
                                return "function" == typeof i ? i : null == i ? fn : "object" == typeof i ? iP(i) ? ks(i[0], i[1]) : Vs(i) : _a(i)
                            }

                            function kr(i) {
                                if (!ce(i)) return re(i);
                                var c = [];
                                for (var l in e9(i)) tf.call(i, l) && "constructor" != l && c.push(l);
                                return c
                            }

                            function jr(i, c) {
                                return i < c
                            }

                            function Qs(i, c) {
                                var l = -1,
                                    v = an(i) ? e2(i.length) : [];
                                return rR(i, function(i, w, I) {
                                    v[++l] = c(i, w, I)
                                }), v
                            }

                            function Vs(i) {
                                var c = di(i);
                                return 1 == c.length && c[0][2] ? Tu(c[0][0], c[0][1]) : function(l) {
                                    return l === i || Vr(l, i, c)
                                }
                            }

                            function ks(i, c) {
                                var v;
                                return vi(i) && (v = c) == v && !z(v) ? Tu(Wn(i), c) : function(v) {
                                    var w = yi(v, i);
                                    return w === l && w === c ? Si(v, i) : ae(c, w, 3)
                                }
                            }

                            function Ge(i, c, v, w, I) {
                                i !== c && rA(c, function(E, P) {
                                    if (I || (I = new Rn), z(E)) ! function(i, c, v, w, I, E, P) {
                                        var C = mi(i, v),
                                            D = mi(c, v),
                                            q = P.get(D);
                                        if (q) {
                                            Kr(i, v, q);
                                            return
                                        }
                                        var $ = E ? E(C, D, v + "", i, c, P) : l,
                                            B = $ === l;
                                        if (B) {
                                            var J = iP(D),
                                                F = !J && iR(D),
                                                W = !J && !F && iT(D);
                                            $ = D, J || F || W ? iP(C) ? $ = C : Y(C) ? $ = un(C) : F ? (B = !1, $ = cu(D, !0)) : W ? (B = !1, $ = hu(D, !0)) : $ = [] : le(D) || iS(D) ? ($ = C, iS(C) ? $ = aa(C) : (!z(C) || Xn(C)) && ($ = Ru(D))) : B = !1
                                        }
                                        B && (P.set(D, $), I($, D, w, E, P), P.delete(D)), Kr(i, v, $)
                                    }(i, c, P, v, Ge, w, I);
                                    else {
                                        var C = w ? w(mi(i, P), E, P + "", i, c, I) : l;
                                        C === l && (C = E), Kr(i, P, C)
                                    }
                                }, on)
                            }

                            function js(i, c) {
                                var v = i.length;
                                if (v) return Jn(c += c < 0 ? v : 0, v) ? i[c] : l
                            }

                            function nu(i, c, l) {
                                c = c.length ? G(c, function(i) {
                                    return iP(i) ? function(c) {
                                        return vt(c, 1 === i.length ? i[0] : i)
                                    } : i
                                }) : [fn];
                                var v = -1;
                                return c = G(c, hn(x())),
                                    function(i, c) {
                                        var l = i.length;
                                        for (i.sort(c); l--;) i[l] = i[l].value;
                                        return i
                                    }(Qs(i, function(i, l, w) {
                                        return {
                                            criteria: G(c, function(c) {
                                                return c(i)
                                            }),
                                            index: ++v,
                                            value: i
                                        }
                                    }), function(i, c) {
                                        return function(i, c, l) {
                                            for (var v = -1, w = i.criteria, I = c.criteria, E = w.length, P = l.length; ++v < E;) {
                                                var C = lu(w[v], I[v]);
                                                if (C) {
                                                    if (v >= P) return C;
                                                    return C * ("desc" == l[v] ? -1 : 1)
                                                }
                                            }
                                            return i.index - c.index
                                        }(i, c, l)
                                    })
                            }

                            function tu(i, c, l) {
                                for (var v = -1, w = c.length, I = {}; ++v < w;) {
                                    var E = c[v],
                                        P = vt(i, E);
                                    l(P, E) && oe(I, st(E, i), P)
                                }
                                return I
                            }

                            function ni(i, c, l, v) {
                                var w = v ? ef : Rt,
                                    I = -1,
                                    E = c.length,
                                    P = i;
                                for (i === c && (c = un(c)), l && (P = G(i, hn(l))); ++I < E;)
                                    for (var C = 0, D = c[I], q = l ? l(D) : D;
                                        (C = w(P, q, C, v)) > -1;) P !== i && tk.call(P, C, 1), tk.call(i, C, 1);
                                return i
                            }

                            function eu(i, c) {
                                for (var l = i ? c.length : 0, v = l - 1; l--;) {
                                    var w = c[l];
                                    if (l == v || w !== I) {
                                        var I = w;
                                        Jn(w) ? tk.call(i, w, 1) : ii(i, w)
                                    }
                                }
                                return i
                            }

                            function ti(i, c) {
                                return i + t3(rl() * (c - i + 1))
                            }

                            function ei(i, c) {
                                var l = "";
                                if (!i || c < 1 || c > 9007199254740991) return l;
                                do c % 2 && (l += i), (c = t3(c / 2)) && (i += i); while (c);
                                return l
                            }

                            function T(i, c) {
                                return rH(Lu(i, c, fn), i + "")
                            }

                            function oe(i, c, v, w) {
                                if (!z(i)) return i;
                                c = st(c, i);
                                for (var I = -1, E = c.length, P = E - 1, C = i; null != C && ++I < E;) {
                                    var D = Wn(c[I]),
                                        q = v;
                                    if ("__proto__" === D || "constructor" === D || "prototype" === D) break;
                                    if (I != P) {
                                        var $ = C[D];
                                        (q = w ? w($, D, C) : l) === l && (q = z($) ? $ : Jn(c[I + 1]) ? [] : {})
                                    }
                                    ie(C, D, q), C = C[D]
                                }
                                return i
                            }
                            var rj = r_ ? function(i, c) {
                                    return r_.set(i, c), i
                                } : fn,
                                rT = tV ? function(i, c) {
                                    return tV(i, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: Ri(c),
                                        writable: !0
                                    })
                                } : fn;

                            function Cn(i, c, l) {
                                var v = -1,
                                    w = i.length;
                                c < 0 && (c = -c > w ? 0 : w + c), (l = l > w ? w : l) < 0 && (l += w), w = c > l ? 0 : l - c >>> 0, c >>>= 0;
                                for (var I = e2(w); ++v < w;) I[v] = i[v + c];
                                return I
                            }

                            function Fc(i, c) {
                                var l;
                                return rR(i, function(i, v, w) {
                                    return !(l = c(i, v, w))
                                }), !!l
                            }

                            function ze(i, c, l) {
                                var v = 0,
                                    w = null == i ? v : i.length;
                                if ("number" == typeof c && c == c && w <= 2147483647) {
                                    for (; v < w;) {
                                        var I = v + w >>> 1,
                                            E = i[I];
                                        null !== E && !pn(E) && (l ? E <= c : E < c) ? v = I + 1 : w = I
                                    }
                                    return w
                                }
                                return ri(i, c, fn, l)
                            }

                            function ri(i, c, v, w) {
                                var I = 0,
                                    E = null == i ? 0 : i.length;
                                if (0 === E) return 0;
                                c = v(c);
                                for (var P = c != c, C = null === c, D = pn(c), q = c === l; I < E;) {
                                    var $ = t3((I + E) / 2),
                                        B = v(i[$]),
                                        J = B !== l,
                                        F = null === B,
                                        W = B == B,
                                        Q = pn(B);
                                    if (P) var X = w || W;
                                    else X = q ? W && (w || J) : C ? W && J && (w || !F) : D ? W && J && !F && (w || !Q) : !F && !Q && (w ? B <= c : B < c);
                                    X ? I = $ + 1 : E = $
                                }
                                return rs(E, 4294967294)
                            }

                            function iu(i, c) {
                                for (var l = -1, v = i.length, w = 0, I = []; ++l < v;) {
                                    var E = i[l],
                                        P = c ? c(E) : E;
                                    if (!l || !bn(P, C)) {
                                        var C = P;
                                        I[w++] = 0 === E ? 0 : E
                                    }
                                }
                                return I
                            }

                            function su(i) {
                                return "number" == typeof i ? i : pn(i) ? P : +i
                            }

                            function ln(i) {
                                if ("string" == typeof i) return i;
                                if (iP(i)) return G(i, ln) + "";
                                if (pn(i)) return rP ? rP.call(i) : "";
                                var c = i + "";
                                return "0" == c && 1 / i == -E ? "-0" : c
                            }

                            function it(i, c, l) {
                                var v = -1,
                                    w = Ie,
                                    I = i.length,
                                    E = !0,
                                    P = [],
                                    C = P;
                                if (l) E = !1, w = Lr;
                                else if (I >= 200) {
                                    var D = c ? null : rL(i);
                                    if (D) return Ee(D);
                                    E = !1, w = kt, C = new dt
                                } else C = c ? [] : P;
                                e: for (; ++v < I;) {
                                    var q = i[v],
                                        $ = c ? c(q) : q;
                                    if (q = l || 0 !== q ? q : 0, E && $ == $) {
                                        for (var B = C.length; B--;)
                                            if (C[B] === $) continue e;
                                        c && C.push($), P.push(q)
                                    } else w(C, $, l) || (C !== P && C.push($), P.push(q))
                                }
                                return P
                            }

                            function ii(i, c) {
                                return c = st(c, i), null == (i = Du(i, c)) || delete i[Wn(In(c))]
                            }

                            function uu(i, c, l, v) {
                                return oe(i, c, l(vt(i, c)), v)
                            }

                            function Ke(i, c, l, v) {
                                for (var w = i.length, I = v ? w : -1;
                                    (v ? I-- : ++I < w) && c(i[I], I, i););
                                return l ? Cn(i, v ? 0 : I, v ? I + 1 : w) : Cn(i, v ? I + 1 : 0, v ? w : I)
                            }

                            function au(i, c) {
                                var l = i;
                                return l instanceof N && (l = l.value()), Dr(c, function(i, c) {
                                    return c.func.apply(c.thisArg, nt([i], c.args))
                                }, l)
                            }

                            function si(i, c, l) {
                                var v = i.length;
                                if (v < 2) return v ? it(i[0]) : [];
                                for (var w = -1, I = e2(v); ++w < v;)
                                    for (var E = i[w], P = -1; ++P < v;) P != w && (I[w] = se(I[w] || E, i[P], c, l));
                                return it(j(I, 1), c, l)
                            }

                            function ou(i, c, v) {
                                for (var w = -1, I = i.length, E = c.length, P = {}; ++w < I;) {
                                    var C = w < E ? c[w] : l;
                                    v(P, i[w], C)
                                }
                                return P
                            }

                            function ui(i) {
                                return Y(i) ? i : []
                            }

                            function ai(i) {
                                return "function" == typeof i ? i : fn
                            }

                            function st(i, c) {
                                return iP(i) ? i : vi(i, c) ? [i] : rV(U(i))
                            }

                            function ut(i, c, v) {
                                var w = i.length;
                                return v = v === l ? w : v, !c && v >= w ? i : Cn(i, c, v)
                            }
                            var rz = tB || function(i) {
                                return tU.clearTimeout(i)
                            };

                            function cu(i, c) {
                                if (c) return i.slice();
                                var l = i.length,
                                    v = tx ? tx(l) : new i.constructor(l);
                                return i.copy(v), v
                            }

                            function oi(i) {
                                var c = new i.constructor(i.byteLength);
                                return new tE(c).set(new tE(i)), c
                            }

                            function hu(i, c) {
                                var l = c ? oi(i.buffer) : i.buffer;
                                return new i.constructor(l, i.byteOffset, i.length)
                            }

                            function lu(i, c) {
                                if (i !== c) {
                                    var v = i !== l,
                                        w = null === i,
                                        I = i == i,
                                        E = pn(i),
                                        P = c !== l,
                                        C = null === c,
                                        D = c == c,
                                        q = pn(c);
                                    if (!C && !q && !E && i > c || E && P && D && !C && !q || w && P && D || !v && D || !I) return 1;
                                    if (!w && !E && !q && i < c || q && v && I && !w && !E || C && v && I || !P && I || !D) return -1
                                }
                                return 0
                            }

                            function pu(i, c, l, v) {
                                for (var w = -1, I = i.length, E = l.length, P = -1, C = c.length, D = rt(I - E, 0), q = e2(C + D), $ = !v; ++P < C;) q[P] = c[P];
                                for (; ++w < E;)($ || w < I) && (q[l[w]] = i[w]);
                                for (; D--;) q[P++] = i[w++];
                                return q
                            }

                            function du(i, c, l, v) {
                                for (var w = -1, I = i.length, E = -1, P = l.length, C = -1, D = c.length, q = rt(I - P, 0), $ = e2(q + D), B = !v; ++w < q;) $[w] = i[w];
                                for (var J = w; ++C < D;) $[J + C] = c[C];
                                for (; ++E < P;)(B || w < I) && ($[J + l[E]] = i[w++]);
                                return $
                            }

                            function un(i, c) {
                                var l = -1,
                                    v = i.length;
                                for (c || (c = e2(v)); ++l < v;) c[l] = i[l];
                                return c
                            }

                            function Un(i, c, v, w) {
                                var I = !v;
                                v || (v = {});
                                for (var E = -1, P = c.length; ++E < P;) {
                                    var C = c[E],
                                        D = w ? w(v[C], i[C], C, v, i) : l;
                                    D === l && (D = i[C]), I ? Kn(v, C, D) : ie(v, C, D)
                                }
                                return v
                            }

                            function Ye(i, c) {
                                return function(l, v) {
                                    var w = iP(l) ? Qo : dc,
                                        I = c ? c() : {};
                                    return w(l, i, x(v, 2), I)
                                }
                            }

                            function Ut(i) {
                                return T(function(c, v) {
                                    var w = -1,
                                        I = v.length,
                                        E = I > 1 ? v[I - 1] : l,
                                        P = I > 2 ? v[2] : l;
                                    for (E = i.length > 3 && "function" == typeof E ? (I--, E) : l, P && rn(v[0], v[1], P) && (E = I < 3 ? l : E, I = 1), c = e9(c); ++w < I;) {
                                        var C = v[w];
                                        C && i(c, C, w, E)
                                    }
                                    return c
                                })
                            }

                            function gu(i, c) {
                                return function(l, v) {
                                    if (null == l) return l;
                                    if (!an(l)) return i(l, v);
                                    for (var w = l.length, I = c ? w : -1, E = e9(l);
                                        (c ? I-- : ++I < w) && !1 !== v(E[I], I, E););
                                    return l
                                }
                            }

                            function vu(i) {
                                return function(c, l, v) {
                                    for (var w = -1, I = e9(c), E = v(c), P = E.length; P--;) {
                                        var C = E[i ? P : ++w];
                                        if (!1 === l(I[C], C, I)) break
                                    }
                                    return c
                                }
                            }

                            function _u(i) {
                                return function(c) {
                                    var v = bt(c = U(c)) ? On(c) : l,
                                        w = v ? v[0] : c.charAt(0),
                                        I = v ? ut(v, 1).join("") : c.slice(1);
                                    return w[i]() + I
                                }
                            }

                            function Wt(i) {
                                return function(c) {
                                    return Dr(ga(da(c).replace(tS, "")), i, "")
                                }
                            }

                            function fe(i) {
                                return function() {
                                    var c = arguments;
                                    switch (c.length) {
                                        case 0:
                                            return new i;
                                        case 1:
                                            return new i(c[0]);
                                        case 2:
                                            return new i(c[0], c[1]);
                                        case 3:
                                            return new i(c[0], c[1], c[2]);
                                        case 4:
                                            return new i(c[0], c[1], c[2], c[3]);
                                        case 5:
                                            return new i(c[0], c[1], c[2], c[3], c[4]);
                                        case 6:
                                            return new i(c[0], c[1], c[2], c[3], c[4], c[5]);
                                        case 7:
                                            return new i(c[0], c[1], c[2], c[3], c[4], c[5], c[6])
                                    }
                                    var l = rO(i.prototype),
                                        v = i.apply(l, c);
                                    return z(v) ? v : l
                                }
                            }

                            function mu(i) {
                                return function(c, v, w) {
                                    var I = e9(c);
                                    if (!an(c)) {
                                        var E = x(v, 3);
                                        c = V(c), v = function(i) {
                                            return E(I[i], i, I)
                                        }
                                    }
                                    var P = i(c, v, w);
                                    return P > -1 ? I[E ? c[P] : P] : l
                                }
                            }

                            function wu(i) {
                                return Zn(function(c) {
                                    var w = c.length,
                                        I = w,
                                        E = Pn.prototype.thru;
                                    for (i && c.reverse(); I--;) {
                                        var P = c[I];
                                        if ("function" != typeof P) throw new ts(v);
                                        if (E && !C && "wrapper" == Ve(P)) var C = new Pn([], !0)
                                    }
                                    for (I = C ? I : w; ++I < w;) {
                                        var D = Ve(P = c[I]),
                                            q = "wrapper" == D ? rM(P) : l;
                                        C = q && _i(q[0]) && 424 == q[1] && !q[4].length && 1 == q[9] ? C[Ve(q[0])].apply(C, q[3]) : 1 == P.length && _i(P) ? C[D]() : C.thru(P)
                                    }
                                    return function() {
                                        var i = arguments,
                                            l = i[0];
                                        if (C && 1 == i.length && iP(l)) return C.plant(l).value();
                                        for (var v = 0, I = w ? c[v].apply(this, i) : l; ++v < w;) I = c[v].call(this, I);
                                        return I
                                    }
                                })
                            }

                            function Ze(i, c, v, w, I, E, P, C, D, q) {
                                var $ = 128 & c,
                                    B = 1 & c,
                                    J = 2 & c,
                                    F = 24 & c,
                                    W = 512 & c,
                                    Q = J ? l : fe(i);
                                return function y() {
                                    for (var X = arguments.length, ee = e2(X), et = X; et--;) ee[et] = arguments[et];
                                    if (F) var er = Ft(y),
                                        es = function(i, c) {
                                            for (var l = i.length, v = 0; l--;) i[l] === c && ++v;
                                            return v
                                        }(ee, er);
                                    if (w && (ee = pu(ee, w, I, F)), E && (ee = du(ee, E, P, F)), X -= es, F && X < q) {
                                        var ea = tt(ee, er);
                                        return Cu(i, c, Ze, y.placeholder, v, ee, ea, C, D, q - X)
                                    }
                                    var eo = B ? v : this,
                                        ec = J ? eo[i] : i;
                                    return X = ee.length, C ? ee = function(i, c) {
                                        for (var v = i.length, w = rs(c.length, v), I = un(i); w--;) {
                                            var E = c[w];
                                            i[w] = Jn(E, v) ? I[E] : l
                                        }
                                        return i
                                    }(ee, C) : W && X > 1 && ee.reverse(), $ && D < X && (ee.length = D), this && this !== tU && this instanceof y && (ec = Q || fe(ec)), ec.apply(eo, ee)
                                }
                            }

                            function Pu(i, c) {
                                return function(l, v) {
                                    var w, I;
                                    return w = c(v), I = {}, $n(l, function(c, l, v) {
                                        i(I, w(c), l, v)
                                    }), I
                                }
                            }

                            function Je(i, c) {
                                return function(v, w) {
                                    var I;
                                    if (v === l && w === l) return c;
                                    if (v !== l && (I = v), w !== l) {
                                        if (I === l) return w;
                                        "string" == typeof v || "string" == typeof w ? (v = ln(v), w = ln(w)) : (v = su(v), w = su(w)), I = i(v, w)
                                    }
                                    return I
                                }
                            }

                            function fi(i) {
                                return Zn(function(c) {
                                    return c = G(c, hn(x())), T(function(l) {
                                        var v = this;
                                        return i(c, function(i) {
                                            return cn(i, v, l)
                                        })
                                    })
                                })
                            }

                            function Xe(i, c) {
                                var v = (c = c === l ? " " : ln(c)).length;
                                if (v < 2) return v ? ei(c, i) : c;
                                var w = ei(c, t2(i / Tt(c)));
                                return bt(c) ? ut(On(w), 0, i).join("") : w.slice(0, i)
                            }

                            function Au(i) {
                                return function(c, v, w) {
                                    return w && "number" != typeof w && rn(c, v, w) && (v = w = l), c = Qn(c), v === l ? (v = c, c = 0) : v = Qn(v), w = w === l ? c < v ? 1 : -1 : Qn(w),
                                        function(i, c, l, v) {
                                            for (var w = -1, I = rt(t2((c - i) / (l || 1)), 0), E = e2(I); I--;) E[v ? I : ++w] = i, i += l;
                                            return E
                                        }(c, v, w, i)
                                }
                            }

                            function Qe(i) {
                                return function(c, l) {
                                    return "string" == typeof c && "string" == typeof l || (c = xn(c), l = xn(l)), i(c, l)
                                }
                            }

                            function Cu(i, c, v, w, I, E, P, C, D, q) {
                                var $ = 8 & c,
                                    B = $ ? P : l,
                                    J = $ ? l : P,
                                    F = $ ? E : l,
                                    W = $ ? l : E;
                                c |= $ ? 32 : 64, 4 & (c &= ~($ ? 64 : 32)) || (c &= -4);
                                var Q = [i, c, I, F, B, W, J, C, D, q],
                                    X = v.apply(l, Q);
                                return _i(i) && r$(X, Q), X.placeholder = w, Hu(X, i, c)
                            }

                            function ci(i) {
                                var c = e7[i];
                                return function(i, l) {
                                    if (i = xn(i), (l = null == l ? 0 : rs(R(l), 292)) && t7(i)) {
                                        var v = (U(i) + "e").split("e");
                                        return +((v = (U(c(v[0] + "e" + (+v[1] + l))) + "e").split("e"))[0] + "e" + (+v[1] - l))
                                    }
                                    return c(i)
                                }
                            }
                            var rL = rd && 1 / Ee(new rd([, -0]))[1] == E ? function(i) {
                                return new rd(i)
                            } : Li;

                            function Iu(i) {
                                return function(c) {
                                    var l, v, w = rq(c);
                                    return w == Q ? Mr(c) : w == es ? (l = -1, v = Array(c.size), c.forEach(function(i) {
                                        v[++l] = [i, i]
                                    }), v) : G(i(c), function(i) {
                                        return [i, c[i]]
                                    })
                                }
                            }

                            function Yn(i, c, w, E, P, C, D, q) {
                                var $ = 2 & c;
                                if (!$ && "function" != typeof i) throw new ts(v);
                                var B = E ? E.length : 0;
                                if (B || (c &= -97, E = P = l), D = D === l ? D : rt(R(D), 0), q = q === l ? q : R(q), B -= P ? P.length : 0, 64 & c) {
                                    var J = E,
                                        F = P;
                                    E = P = l
                                }
                                var W = $ ? l : rM(i),
                                    Q = [i, c, w, E, P, J, F, C, D, q];
                                if (W && function(i, c) {
                                        var l = i[1],
                                            v = c[1],
                                            w = l | v,
                                            E = w < 131,
                                            P = 128 == v && 8 == l || 128 == v && 256 == l && i[7].length <= c[8] || 384 == v && c[7].length <= c[8] && 8 == l;
                                        if (E || P) {
                                            1 & v && (i[2] = c[2], w |= 1 & l ? 0 : 4);
                                            var C = c[3];
                                            if (C) {
                                                var D = i[3];
                                                i[3] = D ? pu(D, C, c[4]) : C, i[4] = D ? tt(i[3], I) : c[4]
                                            }(C = c[5]) && (D = i[5], i[5] = D ? du(D, C, c[6]) : C, i[6] = D ? tt(i[5], I) : c[6]), (C = c[7]) && (i[7] = C), 128 & v && (i[8] = null == i[8] ? c[8] : rs(i[8], c[8])), null == i[9] && (i[9] = c[9]), i[0] = c[0], i[1] = w
                                        }
                                    }(Q, W), i = Q[0], c = Q[1], w = Q[2], E = Q[3], P = Q[4], (q = Q[9] = Q[9] === l ? $ ? 0 : i.length : rt(Q[9] - B, 0)) || !(24 & c) || (c &= -25), c && 1 != c) 8 == c || 16 == c ? (X = i, ee = c, et = q, er = fe(X), ev = function s() {
                                    for (var i = arguments.length, c = e2(i), v = i, w = Ft(s); v--;) c[v] = arguments[v];
                                    var I = i < 3 && c[0] !== w && c[i - 1] !== w ? [] : tt(c, w);
                                    return (i -= I.length) < et ? Cu(X, ee, Ze, s.placeholder, l, c, I, l, l, et - i) : cn(this && this !== tU && this instanceof s ? er : X, this, c)
                                }) : 32 != c && 33 != c || P.length ? ev = Ze.apply(l, Q) : (es = i, ea = c, eo = w, ec = E, el = 1 & ea, eh = fe(es), ev = function f() {
                                    for (var i = -1, c = arguments.length, l = -1, v = ec.length, w = e2(v + c), I = this && this !== tU && this instanceof f ? eh : es; ++l < v;) w[l] = ec[l];
                                    for (; c--;) w[l++] = arguments[++i];
                                    return cn(I, el ? eo : this, w)
                                });
                                else var X, ee, et, er, es, ea, eo, ec, el, eh, ep, ed, eg, ey, e_, ev = (ep = i, ed = c, eg = w, ey = 1 & ed, e_ = fe(ep), function o() {
                                    return (this && this !== tU && this instanceof o ? e_ : ep).apply(ey ? eg : this, arguments)
                                });
                                return Hu((W ? rj : r$)(ev, Q), i, c)
                            }

                            function xu(i, c, v, w) {
                                return i === l || bn(i, tl[v]) && !tf.call(w, v) ? c : i
                            }

                            function Eu(i, c, v, w, I, E) {
                                return z(i) && z(c) && (E.set(c, i), Ge(i, c, l, Eu, E), E.delete(c)), i
                            }

                            function Vc(i) {
                                return le(i) ? l : i
                            }

                            function yu(i, c, v, w, I, E) {
                                var P = 1 & v,
                                    C = i.length,
                                    D = c.length;
                                if (C != D && !(P && D > C)) return !1;
                                var q = E.get(i),
                                    $ = E.get(c);
                                if (q && $) return q == c && $ == i;
                                var B = -1,
                                    J = !0,
                                    F = 2 & v ? new dt : l;
                                for (E.set(i, c), E.set(c, i); ++B < C;) {
                                    var W = i[B],
                                        Q = c[B];
                                    if (w) var X = P ? w(Q, W, B, c, i, E) : w(W, Q, B, i, c, E);
                                    if (X !== l) {
                                        if (X) continue;
                                        J = !1;
                                        break
                                    }
                                    if (F) {
                                        if (!Nr(c, function(i, c) {
                                                if (!kt(F, c) && (W === i || I(W, i, v, w, E))) return F.push(c)
                                            })) {
                                            J = !1;
                                            break
                                        }
                                    } else if (!(W === Q || I(W, Q, v, w, E))) {
                                        J = !1;
                                        break
                                    }
                                }
                                return E.delete(i), E.delete(c), J
                            }

                            function Zn(i) {
                                return rH(Lu(i, l, qu), i + "")
                            }

                            function hi(i) {
                                return Ys(i, V, rD)
                            }

                            function li(i) {
                                return Ys(i, on, rk)
                            }
                            var rM = r_ ? function(i) {
                                return r_.get(i)
                            } : Li;

                            function Ve(i) {
                                for (var c = i.name + "", l = rv[c], v = tf.call(rv, c) ? l.length : 0; v--;) {
                                    var w = l[v],
                                        I = w.func;
                                    if (null == I || I == i) return w.name
                                }
                                return c
                            }

                            function Ft(i) {
                                return (tf.call(a, "placeholder") ? a : i).placeholder
                            }

                            function x() {
                                var i = a.iteratee || bi;
                                return i = i === bi ? Xs : i, arguments.length ? i(arguments[0], arguments[1]) : i
                            }

                            function ke(i, c) {
                                var l, v = i.__data__;
                                return ("string" == (l = typeof c) || "number" == l || "symbol" == l || "boolean" == l ? "__proto__" !== c : null === c) ? v["string" == typeof c ? "string" : "hash"] : v.map
                            }

                            function di(i) {
                                for (var c = V(i), l = c.length; l--;) {
                                    var v = c[l],
                                        w = i[v];
                                    c[l] = [v, w, w == w && !z(w)]
                                }
                                return c
                            }

                            function _t(i, c) {
                                var v = null == i ? l : i[c];
                                return Js(v) ? v : l
                            }
                            var rD = t4 ? function(i) {
                                    return null == i ? [] : jn(t4(i = e9(i)), function(c) {
                                        return tL.call(i, c)
                                    })
                                } : Di,
                                rk = t4 ? function(i) {
                                    for (var c = []; i;) nt(c, rD(i)), i = tO(i);
                                    return c
                                } : Di,
                                rq = en;

                            function Ou(i, c, l) {
                                c = st(c, i);
                                for (var v = -1, w = c.length, I = !1; ++v < w;) {
                                    var E = Wn(c[v]);
                                    if (!(I = null != i && l(i, E))) break;
                                    i = i[E]
                                }
                                return I || ++v != w ? I : !!(w = null == i ? 0 : i.length) && sr(w) && Jn(E, w) && (iP(i) || iS(i))
                            }

                            function Ru(i) {
                                return "function" != typeof i.constructor || ce(i) ? {} : rO(tO(i))
                            }

                            function uh(i) {
                                return iP(i) || iS(i) || !!(tq && i && i[tq])
                            }

                            function Jn(i, c) {
                                var l = typeof i;
                                return !!(c = c ? ? 9007199254740991) && ("number" == l || "symbol" != l && eQ.test(i)) && i > -1 && i % 1 == 0 && i < c
                            }

                            function rn(i, c, l) {
                                if (!z(l)) return !1;
                                var v = typeof c;
                                return ("number" == v ? !!(an(l) && Jn(c, l.length)) : "string" == v && c in l) && bn(l[c], i)
                            }

                            function vi(i, c) {
                                if (iP(i)) return !1;
                                var l = typeof i;
                                return !!("number" == l || "symbol" == l || "boolean" == l || null == i || pn(i)) || eT.test(i) || !ej.test(i) || null != c && i in e9(c)
                            }

                            function _i(i) {
                                var c = Ve(i),
                                    l = a[c];
                                if ("function" != typeof l || !(c in N.prototype)) return !1;
                                if (i === l) return !0;
                                var v = rM(l);
                                return !!v && i === v[0]
                            }(rh && rq(new rh(new ArrayBuffer(1))) != eh || rp && rq(new rp) != Q || rf && rq(rf.resolve()) != et || rd && rq(new rd) != es || rg && rq(new rg) != ec) && (rq = function(i) {
                                var c = en(i),
                                    v = c == ee ? i.constructor : l,
                                    w = v ? mt(v) : "";
                                if (w) switch (w) {
                                    case rm:
                                        return eh;
                                    case rb:
                                        return Q;
                                    case rw:
                                        return et;
                                    case rI:
                                        return es;
                                    case rE:
                                        return ec
                                }
                                return c
                            });
                            var rU = th ? Xn : Ni;

                            function ce(i) {
                                var c = i && i.constructor;
                                return i === ("function" == typeof c && c.prototype || tl)
                            }

                            function Tu(i, c) {
                                return function(v) {
                                    return null != v && v[i] === c && (c !== l || i in e9(v))
                                }
                            }

                            function Lu(i, c, v) {
                                return c = rt(c === l ? i.length - 1 : c, 0),
                                    function() {
                                        for (var l = arguments, w = -1, I = rt(l.length - c, 0), E = e2(I); ++w < I;) E[w] = l[c + w];
                                        w = -1;
                                        for (var P = e2(c + 1); ++w < c;) P[w] = l[w];
                                        return P[c] = v(E), cn(i, this, P)
                                    }
                            }

                            function Du(i, c) {
                                return c.length < 2 ? i : vt(i, Cn(c, 0, -1))
                            }

                            function mi(i, c) {
                                if (!("constructor" === c && "function" == typeof i[c]) && "__proto__" != c) return i[c]
                            }
                            var r$ = $u(rj),
                                rK = t6 || function(i, c) {
                                    return tU.setTimeout(i, c)
                                },
                                rH = $u(rT);

                            function Hu(i, c, l) {
                                var v, w, I = c + "";
                                return rH(i, function(i, c) {
                                    var l = c.length;
                                    if (!l) return i;
                                    var v = l - 1;
                                    return c[v] = (l > 1 ? "& " : "") + c[v], c = c.join(l > 2 ? ", " : " "), i.replace(eU, `{
/* [wrapped with ` + c + `] */
`)
                                }(I, (v = (w = I.match(e$)) ? w[1].split(eK) : [], mn(C, function(i) {
                                    var c = "_." + i[0];
                                    l & i[1] && !Ie(v, c) && v.push(c)
                                }), v.sort())))
                            }

                            function $u(i) {
                                var c = 0,
                                    v = 0;
                                return function() {
                                    var w = ro(),
                                        I = 16 - (w - v);
                                    if (v = w, I > 0) {
                                        if (++c >= 800) return arguments[0]
                                    } else c = 0;
                                    return i.apply(l, arguments)
                                }
                            }

                            function je(i, c) {
                                var v = -1,
                                    w = i.length,
                                    I = w - 1;
                                for (c = c === l ? w : c; ++v < c;) {
                                    var E = ti(v, I),
                                        P = i[E];
                                    i[E] = i[v], i[v] = P
                                }
                                return i.length = c, i
                            }
                            var rV = (e5 = (ek = rr(function(i) {
                                var c = [];
                                return 46 === i.charCodeAt(0) && c.push(""), i.replace(ez, function(i, l, v, w) {
                                    c.push(v ? w.replace(eB, "$1") : l || i)
                                }), c
                            }, function(i) {
                                return 500 === e5.size && e5.clear(), i
                            })).cache, ek);

                            function Wn(i) {
                                if ("string" == typeof i || pn(i)) return i;
                                var c = i + "";
                                return "0" == c && 1 / i == -E ? "-0" : c
                            }

                            function mt(i) {
                                if (null != i) {
                                    try {
                                        return tp.call(i)
                                    } catch {}
                                    try {
                                        return i + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function Wu(i) {
                                if (i instanceof N) return i.clone();
                                var c = new Pn(i.__wrapped__, i.__chain__);
                                return c.__actions__ = un(i.__actions__), c.__index__ = i.__index__, c.__values__ = i.__values__, c
                            }
                            var rB = T(function(i, c) {
                                    return Y(i) ? se(i, j(c, 1, Y, !0)) : []
                                }),
                                rG = T(function(i, c) {
                                    var v = In(c);
                                    return Y(v) && (v = l), Y(i) ? se(i, j(c, 1, Y, !0), x(v, 2)) : []
                                }),
                                rJ = T(function(i, c) {
                                    var v = In(c);
                                    return Y(v) && (v = l), Y(i) ? se(i, j(c, 1, Y, !0), l, v) : []
                                });

                            function Fu(i, c, l) {
                                var v = null == i ? 0 : i.length;
                                if (!v) return -1;
                                var w = null == l ? 0 : R(l);
                                return w < 0 && (w = rt(v + w, 0)), xe(i, x(c, 3), w)
                            }

                            function Mu(i, c, v) {
                                var w = null == i ? 0 : i.length;
                                if (!w) return -1;
                                var I = w - 1;
                                return v !== l && (I = R(v), I = v < 0 ? rt(w + I, 0) : rs(I, w - 1)), xe(i, x(c, 3), I, !0)
                            }

                            function qu(i) {
                                return (null == i ? 0 : i.length) ? j(i, 1) : []
                            }

                            function Bu(i) {
                                return i && i.length ? i[0] : l
                            }
                            var rF = T(function(i) {
                                    var c = G(i, ui);
                                    return c.length && c[0] === i[0] ? Qr(c) : []
                                }),
                                rW = T(function(i) {
                                    var c = In(i),
                                        v = G(i, ui);
                                    return c === In(v) ? c = l : v.pop(), v.length && v[0] === i[0] ? Qr(v, x(c, 2)) : []
                                }),
                                rZ = T(function(i) {
                                    var c = In(i),
                                        v = G(i, ui);
                                    return (c = "function" == typeof c ? c : l) && v.pop(), v.length && v[0] === i[0] ? Qr(v, l, c) : []
                                });

                            function In(i) {
                                var c = null == i ? 0 : i.length;
                                return c ? i[c - 1] : l
                            }
                            var rY = T(Gu);

                            function Gu(i, c) {
                                return i && i.length && c && c.length ? ni(i, c) : i
                            }
                            var rQ = Zn(function(i, c) {
                                var l = null == i ? 0 : i.length,
                                    v = Yr(i, c);
                                return eu(i, G(c, function(i) {
                                    return Jn(i, l) ? +i : i
                                }).sort(lu)), v
                            });

                            function Pi(i) {
                                return null == i ? i : ru.call(i)
                            }
                            var rX = T(function(i) {
                                    return it(j(i, 1, Y, !0))
                                }),
                                r0 = T(function(i) {
                                    var c = In(i);
                                    return Y(c) && (c = l), it(j(i, 1, Y, !0), x(c, 2))
                                }),
                                r1 = T(function(i) {
                                    var c = In(i);
                                    return c = "function" == typeof c ? c : l, it(j(i, 1, Y, !0), l, c)
                                });

                            function Ai(i) {
                                if (!(i && i.length)) return [];
                                var c = 0;
                                return i = jn(i, function(i) {
                                    if (Y(i)) return c = rt(i.length, c), !0
                                }), Wr(c, function(c) {
                                    return G(i, Hr(c))
                                })
                            }

                            function zu(i, c) {
                                if (!(i && i.length)) return [];
                                var v = Ai(i);
                                return null == c ? v : G(v, function(i) {
                                    return cn(c, l, i)
                                })
                            }
                            var r5 = T(function(i, c) {
                                    return Y(i) ? se(i, c) : []
                                }),
                                r6 = T(function(i) {
                                    return si(jn(i, Y))
                                }),
                                r2 = T(function(i) {
                                    var c = In(i);
                                    return Y(c) && (c = l), si(jn(i, Y), x(c, 2))
                                }),
                                r3 = T(function(i) {
                                    var c = In(i);
                                    return c = "function" == typeof c ? c : l, si(jn(i, Y), l, c)
                                }),
                                r4 = T(Ai),
                                r8 = T(function(i) {
                                    var c = i.length,
                                        v = c > 1 ? i[c - 1] : l;
                                    return v = "function" == typeof v ? (i.pop(), v) : l, zu(i, v)
                                });

                            function Ku(i) {
                                var c = a(i);
                                return c.__chain__ = !0, c
                            }

                            function nr(i, c) {
                                return c(i)
                            }
                            var r7 = Zn(function(i) {
                                    var c = i.length,
                                        v = c ? i[0] : 0,
                                        w = this.__wrapped__,
                                        s = function(c) {
                                            return Yr(c, i)
                                        };
                                    return !(c > 1) && !this.__actions__.length && w instanceof N && Jn(v) ? ((w = w.slice(v, +v + (c ? 1 : 0))).__actions__.push({
                                        func: nr,
                                        args: [s],
                                        thisArg: l
                                    }), new Pn(w, this.__chain__).thru(function(i) {
                                        return c && !i.length && i.push(l), i
                                    })) : this.thru(s)
                                }),
                                r9 = Ye(function(i, c, l) {
                                    tf.call(i, l) ? ++i[l] : Kn(i, l, 1)
                                }),
                                is = mu(Fu),
                                ia = mu(Mu);

                            function Yu(i, c) {
                                return (iP(i) ? mn : rR)(i, x(c, 3))
                            }

                            function Zu(i, c) {
                                return (iP(i) ? function(i, c) {
                                    for (var l = null == i ? 0 : i.length; l-- && !1 !== c(i[l], l, i););
                                    return i
                                } : rC)(i, x(c, 3))
                            }
                            var io = Ye(function(i, c, l) {
                                    tf.call(i, l) ? i[l].push(c) : Kn(i, l, [c])
                                }),
                                ic = T(function(i, c, l) {
                                    var v = -1,
                                        w = "function" == typeof c,
                                        I = an(i) ? e2(i.length) : [];
                                    return rR(i, function(i) {
                                        I[++v] = w ? cn(c, i, l) : ue(i, c, l)
                                    }), I
                                }),
                                il = Ye(function(i, c, l) {
                                    Kn(i, l, c)
                                });

                            function tr(i, c) {
                                return (iP(i) ? G : Qs)(i, x(c, 3))
                            }
                            var ih = Ye(function(i, c, l) {
                                    i[l ? 0 : 1].push(c)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                ip = T(function(i, c) {
                                    if (null == i) return [];
                                    var l = c.length;
                                    return l > 1 && rn(i, c[0], c[1]) ? c = [] : l > 2 && rn(c[0], c[1], c[2]) && (c = [c[0]]), nu(i, j(c, 1), [])
                                }),
                                id = tQ || function() {
                                    return tU.Date.now()
                                };

                            function Ju(i, c, v) {
                                return c = v ? l : c, c = i && null == c ? i.length : c, Yn(i, 128, l, l, l, l, c)
                            }

                            function Xu(i, c) {
                                var w;
                                if ("function" != typeof c) throw new ts(v);
                                return i = R(i),
                                    function() {
                                        return --i > 0 && (w = c.apply(this, arguments)), i <= 1 && (c = l), w
                                    }
                            }
                            var ig = T(function(i, c, l) {
                                    var v = 1;
                                    if (l.length) {
                                        var w = tt(l, Ft(ig));
                                        v |= 32
                                    }
                                    return Yn(i, v, c, l, w)
                                }),
                                iy = T(function(i, c, l) {
                                    var v = 3;
                                    if (l.length) {
                                        var w = tt(l, Ft(iy));
                                        v |= 32
                                    }
                                    return Yn(c, v, i, l, w)
                                });

                            function ju(i, c, w) {
                                var I, E, P, C, D, q, $ = 0,
                                    B = !1,
                                    J = !1,
                                    F = !0;
                                if ("function" != typeof i) throw new ts(v);

                                function A(c) {
                                    var v = I,
                                        w = E;
                                    return I = E = l, $ = c, C = i.apply(w, v)
                                }

                                function y(i) {
                                    var v = i - q,
                                        w = i - $;
                                    return q === l || v >= c || v < 0 || J && w >= P
                                }

                                function L() {
                                    var i, l, v, w = id();
                                    if (y(w)) return H(w);
                                    D = rK(L, (i = w - q, l = w - $, v = c - i, J ? rs(v, P - l) : v))
                                }

                                function H(i) {
                                    return D = l, F && I ? A(i) : (I = E = l, C)
                                }

                                function gn() {
                                    var i, v = id(),
                                        w = y(v);
                                    if (I = arguments, E = this, q = v, w) {
                                        if (D === l) return $ = i = q, D = rK(L, c), B ? A(i) : C;
                                        if (J) return rz(D), D = rK(L, c), A(q)
                                    }
                                    return D === l && (D = rK(L, c)), C
                                }
                                return c = xn(c) || 0, z(w) && (B = !!w.leading, P = (J = "maxWait" in w) ? rt(xn(w.maxWait) || 0, c) : P, F = "trailing" in w ? !!w.trailing : F), gn.cancel = function() {
                                    D !== l && rz(D), $ = 0, I = q = E = D = l
                                }, gn.flush = function() {
                                    return D === l ? C : H(id())
                                }, gn
                            }
                            var i_ = T(function(i, c) {
                                    return Bs(i, 1, c)
                                }),
                                iv = T(function(i, c, l) {
                                    return Bs(i, xn(c) || 0, l)
                                });

                            function rr(i, c) {
                                if ("function" != typeof i || null != c && "function" != typeof c) throw new ts(v);
                                var e = function() {
                                    var l = arguments,
                                        v = c ? c.apply(this, l) : l[0],
                                        w = e.cache;
                                    if (w.has(v)) return w.get(v);
                                    var I = i.apply(this, l);
                                    return e.cache = w.set(v, I) || w, I
                                };
                                return e.cache = new(rr.Cache || zn), e
                            }

                            function ir(i) {
                                if ("function" != typeof i) throw new ts(v);
                                return function() {
                                    var c = arguments;
                                    switch (c.length) {
                                        case 0:
                                            return !i.call(this);
                                        case 1:
                                            return !i.call(this, c[0]);
                                        case 2:
                                            return !i.call(this, c[0], c[1]);
                                        case 3:
                                            return !i.call(this, c[0], c[1], c[2])
                                    }
                                    return !i.apply(this, c)
                                }
                            }
                            rr.Cache = zn;
                            var im = T(function(i, c) {
                                    var l = (c = 1 == c.length && iP(c[0]) ? G(c[0], hn(x())) : G(j(c, 1), hn(x()))).length;
                                    return T(function(v) {
                                        for (var w = -1, I = rs(v.length, l); ++w < I;) v[w] = c[w].call(this, v[w]);
                                        return cn(i, this, v)
                                    })
                                }),
                                ib = T(function(i, c) {
                                    var v = tt(c, Ft(ib));
                                    return Yn(i, 32, l, c, v)
                                }),
                                iw = T(function(i, c) {
                                    var v = tt(c, Ft(iw));
                                    return Yn(i, 64, l, c, v)
                                }),
                                iI = Zn(function(i, c) {
                                    return Yn(i, 256, l, l, l, c)
                                });

                            function bn(i, c) {
                                return i === c || i != i && c != c
                            }
                            var iE = Qe(Xr),
                                ix = Qe(function(i, c) {
                                    return i >= c
                                }),
                                iS = Zs(function() {
                                    return arguments
                                }()) ? Zs : function(i) {
                                    return K(i) && tf.call(i, "callee") && !tL.call(i, "callee")
                                },
                                iP = e2.isArray,
                                iO = tG ? hn(tG) : function(i) {
                                    return K(i) && en(i) == el
                                };

                            function an(i) {
                                return null != i && sr(i.length) && !Xn(i)
                            }

                            function Y(i) {
                                return K(i) && an(i)
                            }
                            var iR = t8 || Ni,
                                iC = tJ ? hn(tJ) : function(i) {
                                    return K(i) && en(i) == B
                                };

                            function xi(i) {
                                if (!K(i)) return !1;
                                var c = en(i);
                                return c == J || "[object DOMException]" == c || "string" == typeof i.message && "string" == typeof i.name && !le(i)
                            }

                            function Xn(i) {
                                if (!z(i)) return !1;
                                var c = en(i);
                                return c == F || c == W || "[object AsyncFunction]" == c || "[object Proxy]" == c
                            }

                            function ta(i) {
                                return "number" == typeof i && i == R(i)
                            }

                            function sr(i) {
                                return "number" == typeof i && i > -1 && i % 1 == 0 && i <= 9007199254740991
                            }

                            function z(i) {
                                var c = typeof i;
                                return null != i && ("object" == c || "function" == c)
                            }

                            function K(i) {
                                return null != i && "object" == typeof i
                            }
                            var iA = tF ? hn(tF) : function(i) {
                                return K(i) && rq(i) == Q
                            };

                            function ra(i) {
                                return "number" == typeof i || K(i) && en(i) == X
                            }

                            function le(i) {
                                if (!K(i) || en(i) != ee) return !1;
                                var c = tO(i);
                                if (null === c) return !0;
                                var l = tf.call(c, "constructor") && c.constructor;
                                return "function" == typeof l && l instanceof l && tp.call(l) == t_
                            }
                            var iN = tW ? hn(tW) : function(i) {
                                    return K(i) && en(i) == er
                                },
                                ij = tZ ? hn(tZ) : function(i) {
                                    return K(i) && rq(i) == es
                                };

                            function ur(i) {
                                return "string" == typeof i || !iP(i) && K(i) && en(i) == ea
                            }

                            function pn(i) {
                                return "symbol" == typeof i || K(i) && en(i) == eo
                            }
                            var iT = tY ? hn(tY) : function(i) {
                                    return K(i) && sr(i.length) && !!tT[en(i)]
                                },
                                iz = Qe(jr),
                                iL = Qe(function(i, c) {
                                    return i <= c
                                });

                            function sa(i) {
                                if (!i) return [];
                                if (an(i)) return ur(i) ? On(i) : un(i);
                                if (t$ && i[t$]) return function(i) {
                                    for (var c, l = []; !(c = i.next()).done;) l.push(c.value);
                                    return l
                                }(i[t$]());
                                var c = rq(i);
                                return (c == Q ? Mr : c == es ? Ee : qt)(i)
                            }

                            function Qn(i) {
                                return i ? (i = xn(i)) === E || i === -E ? (i < 0 ? -1 : 1) * 17976931348623157e292 : i == i ? i : 0 : 0 === i ? i : 0
                            }

                            function R(i) {
                                var c = Qn(i),
                                    l = c % 1;
                                return c == c ? l ? c - l : c : 0
                            }

                            function ua(i) {
                                return i ? gt(R(i), 0, 4294967295) : 0
                            }

                            function xn(i) {
                                if ("number" == typeof i) return i;
                                if (pn(i)) return P;
                                if (z(i)) {
                                    var c = "function" == typeof i.valueOf ? i.valueOf() : i;
                                    i = z(c) ? c + "" : c
                                }
                                if ("string" != typeof i) return 0 === i ? i : +i;
                                i = Es(i);
                                var l = eW.test(i);
                                return l || eY.test(i) ? tD(i.slice(2), l ? 2 : 8) : eF.test(i) ? P : +i
                            }

                            function aa(i) {
                                return Un(i, on(i))
                            }

                            function U(i) {
                                return null == i ? "" : ln(i)
                            }
                            var iM = Ut(function(i, c) {
                                    if (ce(c) || an(c)) {
                                        Un(c, V(c), i);
                                        return
                                    }
                                    for (var l in c) tf.call(c, l) && ie(i, l, c[l])
                                }),
                                iD = Ut(function(i, c) {
                                    Un(c, on(c), i)
                                }),
                                ik = Ut(function(i, c, l, v) {
                                    Un(c, on(c), i, v)
                                }),
                                iq = Ut(function(i, c, l, v) {
                                    Un(c, V(c), i, v)
                                }),
                                iU = Zn(Yr),
                                i$ = T(function(i, c) {
                                    i = e9(i);
                                    var v = -1,
                                        w = c.length,
                                        I = w > 2 ? c[2] : l;
                                    for (I && rn(c[0], c[1], I) && (w = 1); ++v < w;)
                                        for (var E = c[v], P = on(E), C = -1, D = P.length; ++C < D;) {
                                            var q = P[C],
                                                $ = i[q];
                                            ($ === l || bn($, tl[q]) && !tf.call(i, q)) && (i[q] = E[q])
                                        }
                                    return i
                                }),
                                iK = T(function(i) {
                                    return i.push(l, Eu), cn(iJ, l, i)
                                });

                            function yi(i, c, v) {
                                var w = null == i ? l : vt(i, c);
                                return w === l ? v : w
                            }

                            function Si(i, c) {
                                return null != i && Ou(i, c, Pc)
                            }
                            var iH = Pu(function(i, c, l) {
                                    null != c && "function" != typeof c.toString && (c = ty.call(c)), i[c] = l
                                }, Ri(fn)),
                                iV = Pu(function(i, c, l) {
                                    null != c && "function" != typeof c.toString && (c = ty.call(c)), tf.call(i, c) ? i[c].push(l) : i[c] = [l]
                                }, x),
                                iB = T(ue);

                            function V(i) {
                                return an(i) ? Ws(i) : kr(i)
                            }

                            function on(i) {
                                return an(i) ? Ws(i, !0) : function(i) {
                                    if (!z(i)) return function(i) {
                                        var c = [];
                                        if (null != i)
                                            for (var l in e9(i)) c.push(l);
                                        return c
                                    }(i);
                                    var c = ce(i),
                                        l = [];
                                    for (var v in i) "constructor" == v && (c || !tf.call(i, v)) || l.push(v);
                                    return l
                                }(i)
                            }
                            var iG = Ut(function(i, c, l) {
                                    Ge(i, c, l)
                                }),
                                iJ = Ut(function(i, c, l, v) {
                                    Ge(i, c, l, v)
                                }),
                                iF = Zn(function(i, c) {
                                    var l = {};
                                    if (null == i) return l;
                                    var v = !1;
                                    c = G(c, function(c) {
                                        return c = st(c, i), v || (v = c.length > 1), c
                                    }), Un(i, li(i), l), v && (l = An(l, 7, Vc));
                                    for (var w = c.length; w--;) ii(l, c[w]);
                                    return l
                                }),
                                iW = Zn(function(i, c) {
                                    return null == i ? {} : tu(i, c, function(c, l) {
                                        return Si(i, l)
                                    })
                                });

                            function ca(i, c) {
                                if (null == i) return {};
                                var l = G(li(i), function(i) {
                                    return [i]
                                });
                                return c = x(c), tu(i, l, function(i, l) {
                                    return c(i, l[0])
                                })
                            }
                            var iZ = Iu(V),
                                iY = Iu(on);

                            function qt(i) {
                                return null == i ? [] : Fr(i, V(i))
                            }
                            var iQ = Wt(function(i, c, l) {
                                return c = c.toLowerCase(), i + (l ? pa(c) : c)
                            });

                            function pa(i) {
                                return i3(U(i).toLowerCase())
                            }

                            function da(i) {
                                return (i = U(i)) && i.replace(eX, tX).replace(tP, "")
                            }
                            var iX = Wt(function(i, c, l) {
                                    return i + (l ? "-" : "") + c.toLowerCase()
                                }),
                                i0 = Wt(function(i, c, l) {
                                    return i + (l ? " " : "") + c.toLowerCase()
                                }),
                                i1 = _u("toLowerCase"),
                                i5 = Wt(function(i, c, l) {
                                    return i + (l ? "_" : "") + c.toLowerCase()
                                }),
                                i6 = Wt(function(i, c, l) {
                                    return i + (l ? " " : "") + i3(c)
                                }),
                                i2 = Wt(function(i, c, l) {
                                    return i + (l ? " " : "") + c.toUpperCase()
                                }),
                                i3 = _u("toUpperCase");

                            function ga(i, c, v) {
                                var w;
                                return i = U(i), (c = v ? l : c) === l ? (w = i, tA.test(w)) ? i.match(tR) || [] : i.match(eH) || [] : i.match(c) || []
                            }
                            var i4 = T(function(i, c) {
                                    try {
                                        return cn(i, l, c)
                                    } catch (i) {
                                        return xi(i) ? i : new e4(i)
                                    }
                                }),
                                i8 = Zn(function(i, c) {
                                    return mn(c, function(c) {
                                        Kn(i, c = Wn(c), ig(i[c], i))
                                    }), i
                                });

                            function Ri(i) {
                                return function() {
                                    return i
                                }
                            }
                            var i7 = wu(),
                                i9 = wu(!0);

                            function fn(i) {
                                return i
                            }

                            function bi(i) {
                                return Xs("function" == typeof i ? i : An(i, 1))
                            }
                            var ne = T(function(i, c) {
                                    return function(l) {
                                        return ue(l, i, c)
                                    }
                                }),
                                nn = T(function(i, c) {
                                    return function(l) {
                                        return ue(i, l, c)
                                    }
                                });

                            function Ti(i, c, l) {
                                var v = V(c),
                                    w = Be(c, v);
                                null != l || z(c) && (w.length || !v.length) || (l = c, c = i, i = this, w = Be(c, V(c)));
                                var I = !(z(l) && "chain" in l) || !!l.chain,
                                    E = Xn(i);
                                return mn(w, function(l) {
                                    var v = c[l];
                                    i[l] = v, E && (i.prototype[l] = function() {
                                        var c = this.__chain__;
                                        if (I || c) {
                                            var l = i(this.__wrapped__);
                                            return (l.__actions__ = un(this.__actions__)).push({
                                                func: v,
                                                args: arguments,
                                                thisArg: i
                                            }), l.__chain__ = c, l
                                        }
                                        return v.apply(i, nt([this.value()], arguments))
                                    })
                                }), i
                            }

                            function Li() {}
                            var ns = fi(G),
                                na = fi(Ps),
                                no = fi(Nr);

                            function _a(i) {
                                return vi(i) ? Hr(Wn(i)) : function(c) {
                                    return vt(c, i)
                                }
                            }
                            var nc = Au(),
                                nl = Au(!0);

                            function Di() {
                                return []
                            }

                            function Ni() {
                                return !1
                            }
                            var nh = Je(function(i, c) {
                                    return i + c
                                }, 0),
                                np = ci("ceil"),
                                nf = Je(function(i, c) {
                                    return i / c
                                }, 1),
                                nd = ci("floor"),
                                ng = Je(function(i, c) {
                                    return i * c
                                }, 1),
                                ny = ci("round"),
                                n_ = Je(function(i, c) {
                                    return i - c
                                }, 0);
                            return a.after = function(i, c) {
                                if ("function" != typeof c) throw new ts(v);
                                return i = R(i),
                                    function() {
                                        if (--i < 1) return c.apply(this, arguments)
                                    }
                            }, a.ary = Ju, a.assign = iM, a.assignIn = iD, a.assignInWith = ik, a.assignWith = iq, a.at = iU, a.before = Xu, a.bind = ig, a.bindAll = i8, a.bindKey = iy, a.castArray = function() {
                                if (!arguments.length) return [];
                                var i = arguments[0];
                                return iP(i) ? i : [i]
                            }, a.chain = Ku, a.chunk = function(i, c, v) {
                                c = (v ? rn(i, c, v) : c === l) ? 1 : rt(R(c), 0);
                                var w = null == i ? 0 : i.length;
                                if (!w || c < 1) return [];
                                for (var I = 0, E = 0, P = e2(t2(w / c)); I < w;) P[E++] = Cn(i, I, I += c);
                                return P
                            }, a.compact = function(i) {
                                for (var c = -1, l = null == i ? 0 : i.length, v = 0, w = []; ++c < l;) {
                                    var I = i[c];
                                    I && (w[v++] = I)
                                }
                                return w
                            }, a.concat = function() {
                                var i = arguments.length;
                                if (!i) return [];
                                for (var c = e2(i - 1), l = arguments[0], v = i; v--;) c[v - 1] = arguments[v];
                                return nt(iP(l) ? un(l) : [l], j(c, 1))
                            }, a.cond = function(i) {
                                var c = null == i ? 0 : i.length,
                                    l = x();
                                return i = c ? G(i, function(i) {
                                    if ("function" != typeof i[1]) throw new ts(v);
                                    return [l(i[0]), i[1]]
                                }) : [], T(function(l) {
                                    for (var v = -1; ++v < c;) {
                                        var w = i[v];
                                        if (cn(w[0], this, l)) return cn(w[1], this, l)
                                    }
                                })
                            }, a.conforms = function(i) {
                                var c, l;
                                return l = V(c = An(i, 1)),
                                    function(i) {
                                        return qs(i, c, l)
                                    }
                            }, a.constant = Ri, a.countBy = r9, a.create = function(i, c) {
                                var l = rO(i);
                                return null == c ? l : Ms(l, c)
                            }, a.curry = function Vu(i, c, v) {
                                c = v ? l : c;
                                var w = Yn(i, 8, l, l, l, l, l, c);
                                return w.placeholder = Vu.placeholder, w
                            }, a.curryRight = function ku(i, c, v) {
                                c = v ? l : c;
                                var w = Yn(i, 16, l, l, l, l, l, c);
                                return w.placeholder = ku.placeholder, w
                            }, a.debounce = ju, a.defaults = i$, a.defaultsDeep = iK, a.defer = i_, a.delay = iv, a.difference = rB, a.differenceBy = rG, a.differenceWith = rJ, a.drop = function(i, c, v) {
                                var w = null == i ? 0 : i.length;
                                return w ? Cn(i, (c = v || c === l ? 1 : R(c)) < 0 ? 0 : c, w) : []
                            }, a.dropRight = function(i, c, v) {
                                var w = null == i ? 0 : i.length;
                                return w ? Cn(i, 0, (c = w - (c = v || c === l ? 1 : R(c))) < 0 ? 0 : c) : []
                            }, a.dropRightWhile = function(i, c) {
                                return i && i.length ? Ke(i, x(c, 3), !0, !0) : []
                            }, a.dropWhile = function(i, c) {
                                return i && i.length ? Ke(i, x(c, 3), !0) : []
                            }, a.fill = function(i, c, v, w) {
                                var I = null == i ? 0 : i.length;
                                return I ? (v && "number" != typeof v && rn(i, c, v) && (v = 0, w = I), function(i, c, v, w) {
                                    var I = i.length;
                                    for ((v = R(v)) < 0 && (v = -v > I ? 0 : I + v), (w = w === l || w > I ? I : R(w)) < 0 && (w += I), w = v > w ? 0 : ua(w); v < w;) i[v++] = c;
                                    return i
                                }(i, c, v, w)) : []
                            }, a.filter = function(i, c) {
                                return (iP(i) ? jn : zs)(i, x(c, 3))
                            }, a.flatMap = function(i, c) {
                                return j(tr(i, c), 1)
                            }, a.flatMapDeep = function(i, c) {
                                return j(tr(i, c), E)
                            }, a.flatMapDepth = function(i, c, v) {
                                return v = v === l ? 1 : R(v), j(tr(i, c), v)
                            }, a.flatten = qu, a.flattenDeep = function(i) {
                                return (null == i ? 0 : i.length) ? j(i, E) : []
                            }, a.flattenDepth = function(i, c) {
                                return (null == i ? 0 : i.length) ? j(i, c = c === l ? 1 : R(c)) : []
                            }, a.flip = function(i) {
                                return Yn(i, 512)
                            }, a.flow = i7, a.flowRight = i9, a.fromPairs = function(i) {
                                for (var c = -1, l = null == i ? 0 : i.length, v = {}; ++c < l;) {
                                    var w = i[c];
                                    v[w[0]] = w[1]
                                }
                                return v
                            }, a.functions = function(i) {
                                return null == i ? [] : Be(i, V(i))
                            }, a.functionsIn = function(i) {
                                return null == i ? [] : Be(i, on(i))
                            }, a.groupBy = io, a.initial = function(i) {
                                return (null == i ? 0 : i.length) ? Cn(i, 0, -1) : []
                            }, a.intersection = rF, a.intersectionBy = rW, a.intersectionWith = rZ, a.invert = iH, a.invertBy = iV, a.invokeMap = ic, a.iteratee = bi, a.keyBy = il, a.keys = V, a.keysIn = on, a.map = tr, a.mapKeys = function(i, c) {
                                var l = {};
                                return c = x(c, 3), $n(i, function(i, v, w) {
                                    Kn(l, c(i, v, w), i)
                                }), l
                            }, a.mapValues = function(i, c) {
                                var l = {};
                                return c = x(c, 3), $n(i, function(i, v, w) {
                                    Kn(l, v, c(i, v, w))
                                }), l
                            }, a.matches = function(i) {
                                return Vs(An(i, 1))
                            }, a.matchesProperty = function(i, c) {
                                return ks(i, An(c, 1))
                            }, a.memoize = rr, a.merge = iG, a.mergeWith = iJ, a.method = ne, a.methodOf = nn, a.mixin = Ti, a.negate = ir, a.nthArg = function(i) {
                                return i = R(i), T(function(c) {
                                    return js(c, i)
                                })
                            }, a.omit = iF, a.omitBy = function(i, c) {
                                return ca(i, ir(x(c)))
                            }, a.once = function(i) {
                                return Xu(2, i)
                            }, a.orderBy = function(i, c, v, w) {
                                return null == i ? [] : (iP(c) || (c = null == c ? [] : [c]), iP(v = w ? l : v) || (v = null == v ? [] : [v]), nu(i, c, v))
                            }, a.over = ns, a.overArgs = im, a.overEvery = na, a.overSome = no, a.partial = ib, a.partialRight = iw, a.partition = ih, a.pick = iW, a.pickBy = ca, a.property = _a, a.propertyOf = function(i) {
                                return function(c) {
                                    return null == i ? l : vt(i, c)
                                }
                            }, a.pull = rY, a.pullAll = Gu, a.pullAllBy = function(i, c, l) {
                                return i && i.length && c && c.length ? ni(i, c, x(l, 2)) : i
                            }, a.pullAllWith = function(i, c, v) {
                                return i && i.length && c && c.length ? ni(i, c, l, v) : i
                            }, a.pullAt = rQ, a.range = nc, a.rangeRight = nl, a.rearg = iI, a.reject = function(i, c) {
                                return (iP(i) ? jn : zs)(i, ir(x(c, 3)))
                            }, a.remove = function(i, c) {
                                var l = [];
                                if (!(i && i.length)) return l;
                                var v = -1,
                                    w = [],
                                    I = i.length;
                                for (c = x(c, 3); ++v < I;) {
                                    var E = i[v];
                                    c(E, v, i) && (l.push(E), w.push(v))
                                }
                                return eu(i, w), l
                            }, a.rest = function(i, c) {
                                if ("function" != typeof i) throw new ts(v);
                                return T(i, c = c === l ? c : R(c))
                            }, a.reverse = Pi, a.sampleSize = function(i, c, v) {
                                return c = (v ? rn(i, c, v) : c === l) ? 1 : R(c), (iP(i) ? function(i, c) {
                                    return je(un(i), gt(c, 0, i.length))
                                } : function(i, c) {
                                    var l = qt(i);
                                    return je(l, gt(c, 0, l.length))
                                })(i, c)
                            }, a.set = function(i, c, l) {
                                return null == i ? i : oe(i, c, l)
                            }, a.setWith = function(i, c, v, w) {
                                return w = "function" == typeof w ? w : l, null == i ? i : oe(i, c, v, w)
                            }, a.shuffle = function(i) {
                                return (iP(i) ? function(i) {
                                    return je(un(i))
                                } : function(i) {
                                    return je(qt(i))
                                })(i)
                            }, a.slice = function(i, c, v) {
                                var w = null == i ? 0 : i.length;
                                return w ? (v && "number" != typeof v && rn(i, c, v) ? (c = 0, v = w) : (c = null == c ? 0 : R(c), v = v === l ? w : R(v)), Cn(i, c, v)) : []
                            }, a.sortBy = ip, a.sortedUniq = function(i) {
                                return i && i.length ? iu(i) : []
                            }, a.sortedUniqBy = function(i, c) {
                                return i && i.length ? iu(i, x(c, 2)) : []
                            }, a.split = function(i, c, v) {
                                return v && "number" != typeof v && rn(i, c, v) && (c = v = l), (v = v === l ? 4294967295 : v >>> 0) ? (i = U(i)) && ("string" == typeof c || null != c && !iN(c)) && !(c = ln(c)) && bt(i) ? ut(On(i), 0, v) : i.split(c, v) : []
                            }, a.spread = function(i, c) {
                                if ("function" != typeof i) throw new ts(v);
                                return c = null == c ? 0 : rt(R(c), 0), T(function(l) {
                                    var v = l[c],
                                        w = ut(l, 0, c);
                                    return v && nt(w, v), cn(i, this, w)
                                })
                            }, a.tail = function(i) {
                                var c = null == i ? 0 : i.length;
                                return c ? Cn(i, 1, c) : []
                            }, a.take = function(i, c, v) {
                                return i && i.length ? Cn(i, 0, (c = v || c === l ? 1 : R(c)) < 0 ? 0 : c) : []
                            }, a.takeRight = function(i, c, v) {
                                var w = null == i ? 0 : i.length;
                                return w ? Cn(i, (c = w - (c = v || c === l ? 1 : R(c))) < 0 ? 0 : c, w) : []
                            }, a.takeRightWhile = function(i, c) {
                                return i && i.length ? Ke(i, x(c, 3), !1, !0) : []
                            }, a.takeWhile = function(i, c) {
                                return i && i.length ? Ke(i, x(c, 3)) : []
                            }, a.tap = function(i, c) {
                                return c(i), i
                            }, a.throttle = function(i, c, l) {
                                var w = !0,
                                    I = !0;
                                if ("function" != typeof i) throw new ts(v);
                                return z(l) && (w = "leading" in l ? !!l.leading : w, I = "trailing" in l ? !!l.trailing : I), ju(i, c, {
                                    leading: w,
                                    maxWait: c,
                                    trailing: I
                                })
                            }, a.thru = nr, a.toArray = sa, a.toPairs = iZ, a.toPairsIn = iY, a.toPath = function(i) {
                                return iP(i) ? G(i, Wn) : pn(i) ? [i] : un(rV(U(i)))
                            }, a.toPlainObject = aa, a.transform = function(i, c, l) {
                                var v = iP(i),
                                    w = v || iR(i) || iT(i);
                                if (c = x(c, 4), null == l) {
                                    var I = i && i.constructor;
                                    l = w ? v ? new I : [] : z(i) && Xn(I) ? rO(tO(i)) : {}
                                }
                                return (w ? mn : $n)(i, function(i, v, w) {
                                    return c(l, i, v, w)
                                }), l
                            }, a.unary = function(i) {
                                return Ju(i, 1)
                            }, a.union = rX, a.unionBy = r0, a.unionWith = r1, a.uniq = function(i) {
                                return i && i.length ? it(i) : []
                            }, a.uniqBy = function(i, c) {
                                return i && i.length ? it(i, x(c, 2)) : []
                            }, a.uniqWith = function(i, c) {
                                return c = "function" == typeof c ? c : l, i && i.length ? it(i, l, c) : []
                            }, a.unset = function(i, c) {
                                return null == i || ii(i, c)
                            }, a.unzip = Ai, a.unzipWith = zu, a.update = function(i, c, l) {
                                return null == i ? i : uu(i, c, ai(l))
                            }, a.updateWith = function(i, c, v, w) {
                                return w = "function" == typeof w ? w : l, null == i ? i : uu(i, c, ai(v), w)
                            }, a.values = qt, a.valuesIn = function(i) {
                                return null == i ? [] : Fr(i, on(i))
                            }, a.without = r5, a.words = ga, a.wrap = function(i, c) {
                                return ib(ai(c), i)
                            }, a.xor = r6, a.xorBy = r2, a.xorWith = r3, a.zip = r4, a.zipObject = function(i, c) {
                                return ou(i || [], c || [], ie)
                            }, a.zipObjectDeep = function(i, c) {
                                return ou(i || [], c || [], oe)
                            }, a.zipWith = r8, a.entries = iZ, a.entriesIn = iY, a.extend = iD, a.extendWith = ik, Ti(a, a), a.add = nh, a.attempt = i4, a.camelCase = iQ, a.capitalize = pa, a.ceil = np, a.clamp = function(i, c, v) {
                                return v === l && (v = c, c = l), v !== l && (v = (v = xn(v)) == v ? v : 0), c !== l && (c = (c = xn(c)) == c ? c : 0), gt(xn(i), c, v)
                            }, a.clone = function(i) {
                                return An(i, 4)
                            }, a.cloneDeep = function(i) {
                                return An(i, 5)
                            }, a.cloneDeepWith = function(i, c) {
                                return An(i, 5, c = "function" == typeof c ? c : l)
                            }, a.cloneWith = function(i, c) {
                                return An(i, 4, c = "function" == typeof c ? c : l)
                            }, a.conformsTo = function(i, c) {
                                return null == c || qs(i, c, V(c))
                            }, a.deburr = da, a.defaultTo = function(i, c) {
                                return null == i || i != i ? c : i
                            }, a.divide = nf, a.endsWith = function(i, c, v) {
                                i = U(i), c = ln(c);
                                var w = i.length,
                                    I = v = v === l ? w : gt(R(v), 0, w);
                                return (v -= c.length) >= 0 && i.slice(v, I) == c
                            }, a.eq = bn, a.escape = function(i) {
                                return (i = U(i)) && eR.test(i) ? i.replace(eP, t0) : i
                            }, a.escapeRegExp = function(i) {
                                return (i = U(i)) && eM.test(i) ? i.replace(eL, "\\$&") : i
                            }, a.every = function(i, c, v) {
                                var w = iP(i) ? Ps : _c;
                                return v && rn(i, c, v) && (c = l), w(i, x(c, 3))
                            }, a.find = is, a.findIndex = Fu, a.findKey = function(i, c) {
                                return As(i, x(c, 3), $n)
                            }, a.findLast = ia, a.findLastIndex = Mu, a.findLastKey = function(i, c) {
                                return As(i, x(c, 3), Jr)
                            }, a.floor = nd, a.forEach = Yu, a.forEachRight = Zu, a.forIn = function(i, c) {
                                return null == i ? i : rA(i, x(c, 3), on)
                            }, a.forInRight = function(i, c) {
                                return null == i ? i : rN(i, x(c, 3), on)
                            }, a.forOwn = function(i, c) {
                                return i && $n(i, x(c, 3))
                            }, a.forOwnRight = function(i, c) {
                                return i && Jr(i, x(c, 3))
                            }, a.get = yi, a.gt = iE, a.gte = ix, a.has = function(i, c) {
                                return null != i && Ou(i, c, wc)
                            }, a.hasIn = Si, a.head = Bu, a.identity = fn, a.includes = function(i, c, l, v) {
                                i = an(i) ? i : qt(i), l = l && !v ? R(l) : 0;
                                var w = i.length;
                                return l < 0 && (l = rt(w + l, 0)), ur(i) ? l <= w && i.indexOf(c, l) > -1 : !!w && Rt(i, c, l) > -1
                            }, a.indexOf = function(i, c, l) {
                                var v = null == i ? 0 : i.length;
                                if (!v) return -1;
                                var w = null == l ? 0 : R(l);
                                return w < 0 && (w = rt(v + w, 0)), Rt(i, c, w)
                            }, a.inRange = function(i, c, v) {
                                var w, I, E;
                                return c = Qn(c), v === l ? (v = c, c = 0) : v = Qn(v), (w = i = xn(i)) >= rs(I = c, E = v) && w < rt(I, E)
                            }, a.invoke = iB, a.isArguments = iS, a.isArray = iP, a.isArrayBuffer = iO, a.isArrayLike = an, a.isArrayLikeObject = Y, a.isBoolean = function(i) {
                                return !0 === i || !1 === i || K(i) && en(i) == $
                            }, a.isBuffer = iR, a.isDate = iC, a.isElement = function(i) {
                                return K(i) && 1 === i.nodeType && !le(i)
                            }, a.isEmpty = function(i) {
                                if (null == i) return !0;
                                if (an(i) && (iP(i) || "string" == typeof i || "function" == typeof i.splice || iR(i) || iT(i) || iS(i))) return !i.length;
                                var c = rq(i);
                                if (c == Q || c == es) return !i.size;
                                if (ce(i)) return !kr(i).length;
                                for (var l in i)
                                    if (tf.call(i, l)) return !1;
                                return !0
                            }, a.isEqual = function(i, c) {
                                return ae(i, c)
                            }, a.isEqualWith = function(i, c, v) {
                                var w = (v = "function" == typeof v ? v : l) ? v(i, c) : l;
                                return w === l ? ae(i, c, l, v) : !!w
                            }, a.isError = xi, a.isFinite = function(i) {
                                return "number" == typeof i && t7(i)
                            }, a.isFunction = Xn, a.isInteger = ta, a.isLength = sr, a.isMap = iA, a.isMatch = function(i, c) {
                                return i === c || Vr(i, c, di(c))
                            }, a.isMatchWith = function(i, c, v) {
                                return v = "function" == typeof v ? v : l, Vr(i, c, di(c), v)
                            }, a.isNaN = function(i) {
                                return ra(i) && i != +i
                            }, a.isNative = function(i) {
                                if (rU(i)) throw new e4("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return Js(i)
                            }, a.isNil = function(i) {
                                return null == i
                            }, a.isNull = function(i) {
                                return null === i
                            }, a.isNumber = ra, a.isObject = z, a.isObjectLike = K, a.isPlainObject = le, a.isRegExp = iN, a.isSafeInteger = function(i) {
                                return ta(i) && i >= -9007199254740991 && i <= 9007199254740991
                            }, a.isSet = ij, a.isString = ur, a.isSymbol = pn, a.isTypedArray = iT, a.isUndefined = function(i) {
                                return i === l
                            }, a.isWeakMap = function(i) {
                                return K(i) && rq(i) == ec
                            }, a.isWeakSet = function(i) {
                                return K(i) && "[object WeakSet]" == en(i)
                            }, a.join = function(i, c) {
                                return null == i ? "" : t9.call(i, c)
                            }, a.kebabCase = iX, a.last = In, a.lastIndexOf = function(i, c, v) {
                                var w = null == i ? 0 : i.length;
                                if (!w) return -1;
                                var I = w;
                                return v !== l && (I = (I = R(v)) < 0 ? rt(w + I, 0) : rs(I, w - 1)), c == c ? function(i, c, l) {
                                    for (var v = l + 1; v-- && i[v] !== c;);
                                    return v
                                }(i, c, I) : xe(i, Cs, I, !0)
                            }, a.lowerCase = i0, a.lowerFirst = i1, a.lt = iz, a.lte = iL, a.max = function(i) {
                                return i && i.length ? qe(i, fn, Xr) : l
                            }, a.maxBy = function(i, c) {
                                return i && i.length ? qe(i, x(c, 2), Xr) : l
                            }, a.mean = function(i) {
                                return Is(i, fn)
                            }, a.meanBy = function(i, c) {
                                return Is(i, x(c, 2))
                            }, a.min = function(i) {
                                return i && i.length ? qe(i, fn, jr) : l
                            }, a.minBy = function(i, c) {
                                return i && i.length ? qe(i, x(c, 2), jr) : l
                            }, a.stubArray = Di, a.stubFalse = Ni, a.stubObject = function() {
                                return {}
                            }, a.stubString = function() {
                                return ""
                            }, a.stubTrue = function() {
                                return !0
                            }, a.multiply = ng, a.nth = function(i, c) {
                                return i && i.length ? js(i, R(c)) : l
                            }, a.noConflict = function() {
                                return tU._ === this && (tU._ = tm), this
                            }, a.noop = Li, a.now = id, a.pad = function(i, c, l) {
                                i = U(i);
                                var v = (c = R(c)) ? Tt(i) : 0;
                                if (!c || v >= c) return i;
                                var w = (c - v) / 2;
                                return Xe(t3(w), l) + i + Xe(t2(w), l)
                            }, a.padEnd = function(i, c, l) {
                                i = U(i);
                                var v = (c = R(c)) ? Tt(i) : 0;
                                return c && v < c ? i + Xe(c - v, l) : i
                            }, a.padStart = function(i, c, l) {
                                i = U(i);
                                var v = (c = R(c)) ? Tt(i) : 0;
                                return c && v < c ? Xe(c - v, l) + i : i
                            }, a.parseInt = function(i, c, l) {
                                return l || null == c ? c = 0 : c && (c = +c), rc(U(i).replace(eD, ""), c || 0)
                            }, a.random = function(i, c, v) {
                                if (v && "boolean" != typeof v && rn(i, c, v) && (c = v = l), v === l && ("boolean" == typeof c ? (v = c, c = l) : "boolean" == typeof i && (v = i, i = l)), i === l && c === l ? (i = 0, c = 1) : (i = Qn(i), c === l ? (c = i, i = 0) : c = Qn(c)), i > c) {
                                    var w = i;
                                    i = c, c = w
                                }
                                if (v || i % 1 || c % 1) {
                                    var I = rl();
                                    return rs(i + I * (c - i + tM("1e-" + ((I + "").length - 1))), c)
                                }
                                return ti(i, c)
                            }, a.reduce = function(i, c, l) {
                                var v = iP(i) ? Dr : xs,
                                    w = arguments.length < 3;
                                return v(i, x(c, 4), l, w, rR)
                            }, a.reduceRight = function(i, c, l) {
                                var v = iP(i) ? ko : xs,
                                    w = arguments.length < 3;
                                return v(i, x(c, 4), l, w, rC)
                            }, a.repeat = function(i, c, v) {
                                return c = (v ? rn(i, c, v) : c === l) ? 1 : R(c), ei(U(i), c)
                            }, a.replace = function() {
                                var i = arguments,
                                    c = U(i[0]);
                                return i.length < 3 ? c : c.replace(i[1], i[2])
                            }, a.result = function(i, c, v) {
                                c = st(c, i);
                                var w = -1,
                                    I = c.length;
                                for (I || (I = 1, i = l); ++w < I;) {
                                    var E = null == i ? l : i[Wn(c[w])];
                                    E === l && (w = I, E = v), i = Xn(E) ? E.call(i) : E
                                }
                                return i
                            }, a.round = ny, a.runInContext = h, a.sample = function(i) {
                                return (iP(i) ? Fs : function(i) {
                                    return Fs(qt(i))
                                })(i)
                            }, a.size = function(i) {
                                if (null == i) return 0;
                                if (an(i)) return ur(i) ? Tt(i) : i.length;
                                var c = rq(i);
                                return c == Q || c == es ? i.size : kr(i).length
                            }, a.snakeCase = i5, a.some = function(i, c, v) {
                                var w = iP(i) ? Nr : Fc;
                                return v && rn(i, c, v) && (c = l), w(i, x(c, 3))
                            }, a.sortedIndex = function(i, c) {
                                return ze(i, c)
                            }, a.sortedIndexBy = function(i, c, l) {
                                return ri(i, c, x(l, 2))
                            }, a.sortedIndexOf = function(i, c) {
                                var l = null == i ? 0 : i.length;
                                if (l) {
                                    var v = ze(i, c);
                                    if (v < l && bn(i[v], c)) return v
                                }
                                return -1
                            }, a.sortedLastIndex = function(i, c) {
                                return ze(i, c, !0)
                            }, a.sortedLastIndexBy = function(i, c, l) {
                                return ri(i, c, x(l, 2), !0)
                            }, a.sortedLastIndexOf = function(i, c) {
                                if (null == i ? 0 : i.length) {
                                    var l = ze(i, c, !0) - 1;
                                    if (bn(i[l], c)) return l
                                }
                                return -1
                            }, a.startCase = i6, a.startsWith = function(i, c, l) {
                                return i = U(i), l = null == l ? 0 : gt(R(l), 0, i.length), c = ln(c), i.slice(l, l + c.length) == c
                            }, a.subtract = n_, a.sum = function(i) {
                                return i && i.length ? Ur(i, fn) : 0
                            }, a.sumBy = function(i, c) {
                                return i && i.length ? Ur(i, x(c, 2)) : 0
                            }, a.template = function(i, c, v) {
                                var w = a.templateSettings;
                                v && rn(i, c, v) && (c = l), i = U(i), c = ik({}, c, w, xu);
                                var I, E, P = ik({}, c.imports, w.imports, xu),
                                    C = V(P),
                                    D = Fr(P, C),
                                    q = 0,
                                    $ = c.interpolate || e0,
                                    B = "__p += '",
                                    J = te((c.escape || e0).source + "|" + $.source + "|" + ($ === eN ? eG : e0).source + "|" + (c.evaluate || e0).source + "|$", "g"),
                                    F = "//# sourceURL=" + (tf.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++tj + "]") + `
`;
                                i.replace(J, function(c, l, v, w, P, C) {
                                    return v || (v = w), B += i.slice(q, C).replace(e1, ff), l && (I = !0, B += `' +
__e(` + l + `) +
'`), P && (E = !0, B += `';
` + P + `;
__p += '`), v && (B += `' +
((__t = (` + v + `)) == null ? '' : __t) +
'`), q = C + c.length, c
                                }), B += `';
`;
                                var W = tf.call(c, "variable") && c.variable;
                                if (W) {
                                    if (eV.test(W)) throw new e4("Invalid `variable` option passed into `_.template`")
                                } else B = `with (obj) {
` + B + `
}
`;
                                B = (E ? B.replace(eI, "") : B).replace(eE, "$1").replace(ex, "$1;"), B = "function(" + (W || "obj") + `) {
` + (W ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (I ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
                                var Q = i4(function() {
                                    return e8(C, F + "return " + B).apply(l, D)
                                });
                                if (Q.source = B, xi(Q)) throw Q;
                                return Q
                            }, a.times = function(i, c) {
                                if ((i = R(i)) < 1 || i > 9007199254740991) return [];
                                var l = 4294967295,
                                    v = rs(i, 4294967295);
                                c = x(c), i -= 4294967295;
                                for (var w = Wr(v, c); ++l < i;) c(l);
                                return w
                            }, a.toFinite = Qn, a.toInteger = R, a.toLength = ua, a.toLower = function(i) {
                                return U(i).toLowerCase()
                            }, a.toNumber = xn, a.toSafeInteger = function(i) {
                                return i ? gt(R(i), -9007199254740991, 9007199254740991) : 0 === i ? i : 0
                            }, a.toString = U, a.toUpper = function(i) {
                                return U(i).toUpperCase()
                            }, a.trim = function(i, c, v) {
                                if ((i = U(i)) && (v || c === l)) return Es(i);
                                if (!i || !(c = ln(c))) return i;
                                var w = On(i),
                                    I = On(c),
                                    E = ys(w, I),
                                    P = Ss(w, I) + 1;
                                return ut(w, E, P).join("")
                            }, a.trimEnd = function(i, c, v) {
                                if ((i = U(i)) && (v || c === l)) return i.slice(0, Rs(i) + 1);
                                if (!i || !(c = ln(c))) return i;
                                var w = On(i),
                                    I = Ss(w, On(c)) + 1;
                                return ut(w, 0, I).join("")
                            }, a.trimStart = function(i, c, v) {
                                if ((i = U(i)) && (v || c === l)) return i.replace(eD, "");
                                if (!i || !(c = ln(c))) return i;
                                var w = On(i),
                                    I = ys(w, On(c));
                                return ut(w, I).join("")
                            }, a.truncate = function(i, c) {
                                var v = 30,
                                    w = "...";
                                if (z(c)) {
                                    var I = "separator" in c ? c.separator : I;
                                    v = "length" in c ? R(c.length) : v, w = "omission" in c ? ln(c.omission) : w
                                }
                                var E = (i = U(i)).length;
                                if (bt(i)) {
                                    var P = On(i);
                                    E = P.length
                                }
                                if (v >= E) return i;
                                var C = v - Tt(w);
                                if (C < 1) return w;
                                var D = P ? ut(P, 0, C).join("") : i.slice(0, C);
                                if (I === l) return D + w;
                                if (P && (C += D.length - C), iN(I)) {
                                    if (i.slice(C).search(I)) {
                                        var q, $ = D;
                                        for (I.global || (I = te(I.source, U(eJ.exec(I)) + "g")), I.lastIndex = 0; q = I.exec($);) var B = q.index;
                                        D = D.slice(0, B === l ? C : B)
                                    }
                                } else if (i.indexOf(ln(I), C) != C) {
                                    var J = D.lastIndexOf(I);
                                    J > -1 && (D = D.slice(0, J))
                                }
                                return D + w
                            }, a.unescape = function(i) {
                                return (i = U(i)) && eO.test(i) ? i.replace(eS, t1) : i
                            }, a.uniqueId = function(i) {
                                var c = ++td;
                                return U(i) + c
                            }, a.upperCase = i2, a.upperFirst = i3, a.each = Yu, a.eachRight = Zu, a.first = Bu, Ti(a, (e6 = {}, $n(a, function(i, c) {
                                tf.call(a.prototype, c) || (e6[c] = i)
                            }), e6), {
                                chain: !1
                            }), a.VERSION = "4.17.21", mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                                a[i].placeholder = a
                            }), mn(["drop", "take"], function(i, c) {
                                N.prototype[i] = function(v) {
                                    v = v === l ? 1 : rt(R(v), 0);
                                    var w = this.__filtered__ && !c ? new N(this) : this.clone();
                                    return w.__filtered__ ? w.__takeCount__ = rs(v, w.__takeCount__) : w.__views__.push({
                                        size: rs(v, 4294967295),
                                        type: i + (w.__dir__ < 0 ? "Right" : "")
                                    }), w
                                }, N.prototype[i + "Right"] = function(c) {
                                    return this.reverse()[i](c).reverse()
                                }
                            }), mn(["filter", "map", "takeWhile"], function(i, c) {
                                var l = c + 1,
                                    v = 1 == l || 3 == l;
                                N.prototype[i] = function(i) {
                                    var c = this.clone();
                                    return c.__iteratees__.push({
                                        iteratee: x(i, 3),
                                        type: l
                                    }), c.__filtered__ = c.__filtered__ || v, c
                                }
                            }), mn(["head", "last"], function(i, c) {
                                var l = "take" + (c ? "Right" : "");
                                N.prototype[i] = function() {
                                    return this[l](1).value()[0]
                                }
                            }), mn(["initial", "tail"], function(i, c) {
                                var l = "drop" + (c ? "" : "Right");
                                N.prototype[i] = function() {
                                    return this.__filtered__ ? new N(this) : this[l](1)
                                }
                            }), N.prototype.compact = function() {
                                return this.filter(fn)
                            }, N.prototype.find = function(i) {
                                return this.filter(i).head()
                            }, N.prototype.findLast = function(i) {
                                return this.reverse().find(i)
                            }, N.prototype.invokeMap = T(function(i, c) {
                                return "function" == typeof i ? new N(this) : this.map(function(l) {
                                    return ue(l, i, c)
                                })
                            }), N.prototype.reject = function(i) {
                                return this.filter(ir(x(i)))
                            }, N.prototype.slice = function(i, c) {
                                i = R(i);
                                var v = this;
                                return v.__filtered__ && (i > 0 || c < 0) ? new N(v) : (i < 0 ? v = v.takeRight(-i) : i && (v = v.drop(i)), c !== l && (v = (c = R(c)) < 0 ? v.dropRight(-c) : v.take(c - i)), v)
                            }, N.prototype.takeRightWhile = function(i) {
                                return this.reverse().takeWhile(i).reverse()
                            }, N.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, $n(N.prototype, function(i, c) {
                                var v = /^(?:filter|find|map|reject)|While$/.test(c),
                                    w = /^(?:head|last)$/.test(c),
                                    I = a[w ? "take" + ("last" == c ? "Right" : "") : c],
                                    E = w || /^find/.test(c);
                                I && (a.prototype[c] = function() {
                                    var c = this.__wrapped__,
                                        P = w ? [1] : arguments,
                                        C = c instanceof N,
                                        D = P[0],
                                        q = C || iP(c),
                                        m = function(i) {
                                            var c = I.apply(a, nt([i], P));
                                            return w && $ ? c[0] : c
                                        };
                                    q && v && "function" == typeof D && 1 != D.length && (C = q = !1);
                                    var $ = this.__chain__,
                                        B = !!this.__actions__.length,
                                        J = E && !$,
                                        F = C && !B;
                                    if (!E && q) {
                                        c = F ? c : new N(this);
                                        var W = i.apply(c, P);
                                        return W.__actions__.push({
                                            func: nr,
                                            args: [m],
                                            thisArg: l
                                        }), new Pn(W, $)
                                    }
                                    return J && F ? i.apply(this, P) : (W = this.thru(m), J ? w ? W.value()[0] : W.value() : W)
                                })
                            }), mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                                var c = to[i],
                                    l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                                    v = /^(?:pop|shift)$/.test(i);
                                a.prototype[i] = function() {
                                    var i = arguments;
                                    if (v && !this.__chain__) {
                                        var w = this.value();
                                        return c.apply(iP(w) ? w : [], i)
                                    }
                                    return this[l](function(l) {
                                        return c.apply(iP(l) ? l : [], i)
                                    })
                                }
                            }), $n(N.prototype, function(i, c) {
                                var l = a[c];
                                if (l) {
                                    var v = l.name + "";
                                    tf.call(rv, v) || (rv[v] = []), rv[v].push({
                                        name: c,
                                        func: l
                                    })
                                }
                            }), rv[Ze(l, 2).name] = [{
                                name: "wrapper",
                                func: l
                            }], N.prototype.clone = function() {
                                var i = new N(this.__wrapped__);
                                return i.__actions__ = un(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = un(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = un(this.__views__), i
                            }, N.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var i = new N(this);
                                    i.__dir__ = -1, i.__filtered__ = !0
                                } else i = this.clone(), i.__dir__ *= -1;
                                return i
                            }, N.prototype.value = function() {
                                var i = this.__wrapped__.value(),
                                    c = this.__dir__,
                                    l = iP(i),
                                    v = c < 0,
                                    w = l ? i.length : 0,
                                    I = function(i, c, l) {
                                        for (var v = -1, w = l.length; ++v < w;) {
                                            var I = l[v],
                                                E = I.size;
                                            switch (I.type) {
                                                case "drop":
                                                    i += E;
                                                    break;
                                                case "dropRight":
                                                    c -= E;
                                                    break;
                                                case "take":
                                                    c = rs(c, i + E);
                                                    break;
                                                case "takeRight":
                                                    i = rt(i, c - E)
                                            }
                                        }
                                        return {
                                            start: i,
                                            end: c
                                        }
                                    }(0, w, this.__views__),
                                    E = I.start,
                                    P = I.end,
                                    C = P - E,
                                    D = v ? P : E - 1,
                                    q = this.__iteratees__,
                                    $ = q.length,
                                    B = 0,
                                    J = rs(C, this.__takeCount__);
                                if (!l || !v && w == C && J == C) return au(i, this.__actions__);
                                var F = [];
                                e: for (; C-- && B < J;) {
                                    D += c;
                                    for (var W = -1, Q = i[D]; ++W < $;) {
                                        var X = q[W],
                                            ee = X.iteratee,
                                            et = X.type,
                                            er = ee(Q);
                                        if (2 == et) Q = er;
                                        else if (!er) {
                                            if (1 == et) continue e;
                                            break e
                                        }
                                    }
                                    F[B++] = Q
                                }
                                return F
                            }, a.prototype.at = r7, a.prototype.chain = function() {
                                return Ku(this)
                            }, a.prototype.commit = function() {
                                return new Pn(this.value(), this.__chain__)
                            }, a.prototype.next = function() {
                                this.__values__ === l && (this.__values__ = sa(this.value()));
                                var i = this.__index__ >= this.__values__.length,
                                    c = i ? l : this.__values__[this.__index__++];
                                return {
                                    done: i,
                                    value: c
                                }
                            }, a.prototype.plant = function(i) {
                                for (var c, v = this; v instanceof Fe;) {
                                    var w = Wu(v);
                                    w.__index__ = 0, w.__values__ = l, c ? I.__wrapped__ = w : c = w;
                                    var I = w;
                                    v = v.__wrapped__
                                }
                                return I.__wrapped__ = i, c
                            }, a.prototype.reverse = function() {
                                var i = this.__wrapped__;
                                if (i instanceof N) {
                                    var c = i;
                                    return this.__actions__.length && (c = new N(this)), (c = c.reverse()).__actions__.push({
                                        func: nr,
                                        args: [Pi],
                                        thisArg: l
                                    }), new Pn(c, this.__chain__)
                                }
                                return this.thru(Pi)
                            }, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = function() {
                                return au(this.__wrapped__, this.__actions__)
                            }, a.prototype.first = a.prototype.head, t$ && (a.prototype[t$] = function() {
                                return this
                            }), a
                        }();
                    tK ? ((tK.exports = t5)._ = t5, t$._ = t5) : tU._ = t5
                }).call(re)
            }(rt, rt.exports);
            var rs = Object.defineProperty,
                ro = Object.defineProperties,
                rc = Object.getOwnPropertyDescriptors,
                rl = Object.getOwnPropertySymbols,
                ru = Object.prototype.hasOwnProperty,
                rh = Object.prototype.propertyIsEnumerable,
                Ea = (i, c, l) => c in i ? rs(i, c, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : i[c] = l,
                index_es_fr = (i, c) => {
                    for (var l in c || (c = {})) ru.call(c, l) && Ea(i, l, c[l]);
                    if (rl)
                        for (var l of rl(c)) rh.call(c, l) && Ea(i, l, c[l]);
                    return i
                },
                zg = (i, c) => ro(i, rc(c));

            function En(i, c, l) {
                let v;
                let w = Ui(i);
                return c.rpcMap && (v = c.rpcMap[w]), v || (v = `https://rpc.walletconnect.com/v1?chainId=eip155:${w}&projectId=${l}`), v
            }

            function Ui(i) {
                return i.includes("eip155") ? Number(i.split(":")[1]) : Number(i)
            }

            function ya(i) {
                return i.map(i => `${i.split(":")[0]}:${i.split(":")[1]}`)
            }

            function Sa(i) {
                var c, l, v, w;
                let I = {};
                if (!(0, E.L5)(i)) return I;
                for (let [P, C] of Object.entries(i)) {
                    let i = (0, E.gp)(P) ? [P] : C.chains,
                        D = C.methods || [],
                        q = C.events || [],
                        $ = C.rpcMap || {},
                        B = (0, E.M)(P);
                    I[B] = zg(index_es_fr(index_es_fr({}, I[B]), C), {
                        chains: (0, E.eG)(i, null == (c = I[B]) ? void 0 : c.chains),
                        methods: (0, E.eG)(D, null == (l = I[B]) ? void 0 : l.methods),
                        events: (0, E.eG)(q, null == (v = I[B]) ? void 0 : v.events),
                        rpcMap: index_es_fr(index_es_fr({}, $), null == (w = I[B]) ? void 0 : w.rpcMap)
                    })
                }
                return I
            }

            function Zg(i) {
                return i.includes(":") ? i.split(":")[2] : i
            }
            let rp = {},
                dist_index_es_J = i => rp[i],
                index_es_Wi = (i, c) => {
                    rp[i] = c
                };
            let Xg = class Xg {
                constructor(i) {
                    this.name = "polkadot", this.namespace = i.namespace, this.events = dist_index_es_J("events"), this.client = dist_index_es_J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(i) {
                    this.namespace = Object.assign(this.namespace, i)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let i = this.namespace.chains[0];
                    if (!i) throw Error("ChainId not found");
                    return i.split(":")[1]
                }
                request(i) {
                    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request)
                }
                setDefaultChain(i, c) {
                    if (this.chainId = i, !this.httpProviders[i]) {
                        let l = c || En(`${this.name}:${i}`, this.namespace);
                        if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
                        this.setHttpProvider(i, l)
                    }
                    this.events.emit(t9.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let i = this.namespace.accounts;
                    return i && i.filter(i => i.split(":")[1] === this.chainId.toString()).map(i => i.split(":")[2]) || []
                }
                createHttpProviders() {
                    let i = {};
                    return this.namespace.chains.forEach(c => {
                        var l;
                        i[c] = this.createHttpProvider(c, null == (l = this.namespace.rpcMap) ? void 0 : l[c])
                    }), i
                }
                getHttpProvider() {
                    let i = `${this.name}:${this.chainId}`,
                        c = this.httpProviders[i];
                    if (typeof c > "u") throw Error(`JSON-RPC provider for ${i} not found`);
                    return c
                }
                setHttpProvider(i, c) {
                    let l = this.createHttpProvider(i, c);
                    l && (this.httpProviders[i] = l)
                }
                createHttpProvider(i, c) {
                    let l = c || En(i, this.namespace);
                    return typeof l > "u" ? void 0 : new ep.r(new t4.Z(l, dist_index_es_J("disableProviderPing")))
                }
            };
            let Qg = class Qg {
                constructor(i) {
                    this.name = "eip155", this.namespace = i.namespace, this.events = dist_index_es_J("events"), this.client = dist_index_es_J("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(i) {
                    switch (i.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(i);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(i.request.method) ? await this.client.request(i) : this.getHttpProvider().request(i.request)
                }
                updateNamespace(i) {
                    this.namespace = Object.assign(this.namespace, i)
                }
                setDefaultChain(i, c) {
                    let l = Ui(i);
                    if (!this.httpProviders[l]) {
                        let i = c || En(`${this.name}:${l}`, this.namespace, this.client.core.projectId);
                        if (!i) throw Error(`No RPC url provided for chainId: ${l}`);
                        this.setHttpProvider(l, i)
                    }
                    this.chainId = l, this.events.emit(t9.DEFAULT_CHAIN_CHANGED, `${this.name}:${l}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let i = this.namespace.chains[0];
                    if (!i) throw Error("ChainId not found");
                    return i.split(":")[1]
                }
                createHttpProvider(i, c) {
                    let l = c || En(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
                    return typeof l > "u" ? void 0 : new ep.r(new t4.k(l, dist_index_es_J("disableProviderPing")))
                }
                setHttpProvider(i, c) {
                    let l = this.createHttpProvider(i, c);
                    l && (this.httpProviders[i] = l)
                }
                createHttpProviders() {
                    let i = {};
                    return this.namespace.chains.forEach(c => {
                        var l;
                        let v = Ui(c);
                        i[v] = this.createHttpProvider(v, null == (l = this.namespace.rpcMap) ? void 0 : l[c])
                    }), i
                }
                getAccounts() {
                    let i = this.namespace.accounts;
                    return i ? [...new Set(i.filter(i => i.split(":")[1] === this.chainId.toString()).map(i => i.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let i = this.chainId,
                        c = this.httpProviders[i];
                    if (typeof c > "u") throw Error(`JSON-RPC provider for ${i} not found`);
                    return c
                }
                async handleSwitchChain(i) {
                    var c, l;
                    let v = i.request.params ? null == (c = i.request.params[0]) ? void 0 : c.chainId : "0x0";
                    v = v.startsWith("0x") ? v : `0x${v}`;
                    let w = parseInt(v, 16);
                    if (this.isChainApproved(w)) this.setDefaultChain(`${w}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: i.topic,
                        request: {
                            method: i.request.method,
                            params: [{
                                chainId: v
                            }]
                        },
                        chainId: null == (l = this.namespace.chains) ? void 0 : l[0]
                    }), this.setDefaultChain(`${w}`);
                    else throw Error(`Failed to switch to chain 'eip155:${w}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(i) {
                    return this.namespace.chains.includes(`${this.name}:${i}`)
                }
            };
            let Vg = class Vg {
                constructor(i) {
                    this.name = "solana", this.namespace = i.namespace, this.events = dist_index_es_J("events"), this.client = dist_index_es_J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(i) {
                    this.namespace = Object.assign(this.namespace, i)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(i) {
                    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request)
                }
                setDefaultChain(i, c) {
                    if (!this.httpProviders[i]) {
                        let l = c || En(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
                        if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
                        this.setHttpProvider(i, l)
                    }
                    this.chainId = i, this.events.emit(t9.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let i = this.namespace.chains[0];
                    if (!i) throw Error("ChainId not found");
                    return i.split(":")[1]
                }
                getAccounts() {
                    let i = this.namespace.accounts;
                    return i ? [...new Set(i.filter(i => i.split(":")[1] === this.chainId.toString()).map(i => i.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let i = {};
                    return this.namespace.chains.forEach(c => {
                        var l;
                        i[c] = this.createHttpProvider(c, null == (l = this.namespace.rpcMap) ? void 0 : l[c])
                    }), i
                }
                getHttpProvider() {
                    let i = `${this.name}:${this.chainId}`,
                        c = this.httpProviders[i];
                    if (typeof c > "u") throw Error(`JSON-RPC provider for ${i} not found`);
                    return c
                }
                setHttpProvider(i, c) {
                    let l = this.createHttpProvider(i, c);
                    l && (this.httpProviders[i] = l)
                }
                createHttpProvider(i, c) {
                    let l = c || En(i, this.namespace, this.client.core.projectId);
                    return typeof l > "u" ? void 0 : new ep.r(new t4.Z(l, dist_index_es_J("disableProviderPing")))
                }
            };
            let kg = class kg {
                constructor(i) {
                    this.name = "cosmos", this.namespace = i.namespace, this.events = dist_index_es_J("events"), this.client = dist_index_es_J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(i) {
                    this.namespace = Object.assign(this.namespace, i)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let i = this.namespace.chains[0];
                    if (!i) throw Error("ChainId not found");
                    return i.split(":")[1]
                }
                request(i) {
                    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request)
                }
                setDefaultChain(i, c) {
                    if (this.chainId = i, !this.httpProviders[i]) {
                        let l = c || En(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
                        if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
                        this.setHttpProvider(i, l)
                    }
                    this.events.emit(t9.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let i = this.namespace.accounts;
                    return i ? [...new Set(i.filter(i => i.split(":")[1] === this.chainId.toString()).map(i => i.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let i = {};
                    return this.namespace.chains.forEach(c => {
                        var l;
                        i[c] = this.createHttpProvider(c, null == (l = this.namespace.rpcMap) ? void 0 : l[c])
                    }), i
                }
                getHttpProvider() {
                    let i = `${this.name}:${this.chainId}`,
                        c = this.httpProviders[i];
                    if (typeof c > "u") throw Error(`JSON-RPC provider for ${i} not found`);
                    return c
                }
                setHttpProvider(i, c) {
                    let l = this.createHttpProvider(i, c);
                    l && (this.httpProviders[i] = l)
                }
                createHttpProvider(i, c) {
                    let l = c || En(i, this.namespace, this.client.core.projectId);
                    return typeof l > "u" ? void 0 : new ep.r(new t4.Z(l, dist_index_es_J("disableProviderPing")))
                }
            };
            let jg = class jg {
                constructor(i) {
                    this.name = "cip34", this.namespace = i.namespace, this.events = dist_index_es_J("events"), this.client = dist_index_es_J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(i) {
                    this.namespace = Object.assign(this.namespace, i)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let i = this.namespace.chains[0];
                    if (!i) throw Error("ChainId not found");
                    return i.split(":")[1]
                }
                request(i) {
                    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request)
                }
                setDefaultChain(i, c) {
                    if (this.chainId = i, !this.httpProviders[i]) {
                        let l = c || this.getCardanoRPCUrl(i);
                        if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
                        this.setHttpProvider(i, l)
                    }
                    this.events.emit(t9.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let i = this.namespace.accounts;
                    return i ? [...new Set(i.filter(i => i.split(":")[1] === this.chainId.toString()).map(i => i.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let i = {};
                    return this.namespace.chains.forEach(c => {
                        let l = this.getCardanoRPCUrl(c);
                        i[c] = this.createHttpProvider(c, l)
                    }), i
                }
                getHttpProvider() {
                    let i = `${this.name}:${this.chainId}`,
                        c = this.httpProviders[i];
                    if (typeof c > "u") throw Error(`JSON-RPC provider for ${i} not found`);
                    return c
                }
                getCardanoRPCUrl(i) {
                    let c = this.namespace.rpcMap;
                    if (c) return c[i]
                }
                setHttpProvider(i, c) {
                    let l = this.createHttpProvider(i, c);
                    l && (this.httpProviders[i] = l)
                }
                createHttpProvider(i, c) {
                    let l = c || this.getCardanoRPCUrl(i);
                    return typeof l > "u" ? void 0 : new ep.r(new t4.Z(l, dist_index_es_J("disableProviderPing")))
                }
            };
            let nv = class nv {
                constructor(i) {
                    this.name = "elrond", this.namespace = i.namespace, this.events = dist_index_es_J("events"), this.client = dist_index_es_J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(i) {
                    this.namespace = Object.assign(this.namespace, i)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(i) {
                    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request)
                }
                setDefaultChain(i, c) {
                    if (!this.httpProviders[i]) {
                        let l = c || En(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
                        if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
                        this.setHttpProvider(i, l)
                    }
                    this.chainId = i, this.events.emit(t9.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let i = this.namespace.chains[0];
                    if (!i) throw Error("ChainId not found");
                    return i.split(":")[1]
                }
                getAccounts() {
                    let i = this.namespace.accounts;
                    return i ? [...new Set(i.filter(i => i.split(":")[1] === this.chainId.toString()).map(i => i.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let i = {};
                    return this.namespace.chains.forEach(c => {
                        var l;
                        i[c] = this.createHttpProvider(c, null == (l = this.namespace.rpcMap) ? void 0 : l[c])
                    }), i
                }
                getHttpProvider() {
                    let i = `${this.name}:${this.chainId}`,
                        c = this.httpProviders[i];
                    if (typeof c > "u") throw Error(`JSON-RPC provider for ${i} not found`);
                    return c
                }
                setHttpProvider(i, c) {
                    let l = this.createHttpProvider(i, c);
                    l && (this.httpProviders[i] = l)
                }
                createHttpProvider(i, c) {
                    let l = c || En(i, this.namespace, this.client.core.projectId);
                    return typeof l > "u" ? void 0 : new ep.r(new t4.Z(l, dist_index_es_J("disableProviderPing")))
                }
            };
            let tv = class tv {
                constructor(i) {
                    this.name = "multiversx", this.namespace = i.namespace, this.events = dist_index_es_J("events"), this.client = dist_index_es_J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(i) {
                    this.namespace = Object.assign(this.namespace, i)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(i) {
                    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request)
                }
                setDefaultChain(i, c) {
                    if (!this.httpProviders[i]) {
                        let l = c || En(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
                        if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
                        this.setHttpProvider(i, l)
                    }
                    this.chainId = i, this.events.emit(t9.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let i = this.namespace.chains[0];
                    if (!i) throw Error("ChainId not found");
                    return i.split(":")[1]
                }
                getAccounts() {
                    let i = this.namespace.accounts;
                    return i ? [...new Set(i.filter(i => i.split(":")[1] === this.chainId.toString()).map(i => i.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let i = {};
                    return this.namespace.chains.forEach(c => {
                        var l;
                        i[c] = this.createHttpProvider(c, null == (l = this.namespace.rpcMap) ? void 0 : l[c])
                    }), i
                }
                getHttpProvider() {
                    let i = `${this.name}:${this.chainId}`,
                        c = this.httpProviders[i];
                    if (typeof c > "u") throw Error(`JSON-RPC provider for ${i} not found`);
                    return c
                }
                setHttpProvider(i, c) {
                    let l = this.createHttpProvider(i, c);
                    l && (this.httpProviders[i] = l)
                }
                createHttpProvider(i, c) {
                    let l = c || En(i, this.namespace, this.client.core.projectId);
                    return typeof l > "u" ? void 0 : new ep.r(new t4.Z(l, dist_index_es_J("disableProviderPing")))
                }
            };
            var rf = Object.defineProperty,
                rd = Object.defineProperties,
                rg = Object.getOwnPropertyDescriptors,
                ry = Object.getOwnPropertySymbols,
                r_ = Object.prototype.hasOwnProperty,
                rv = Object.prototype.propertyIsEnumerable,
                ba = (i, c, l) => c in i ? rf(i, c, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : i[c] = l,
                index_es_cr = (i, c) => {
                    for (var l in c || (c = {})) r_.call(c, l) && ba(i, l, c[l]);
                    if (ry)
                        for (var l of ry(c)) rv.call(c, l) && ba(i, l, c[l]);
                    return i
                },
                index_es_Fi = (i, c) => rd(i, rg(c));
            let index_es_hr = class index_es_hr {
                constructor(i) {
                    this.events = new(I()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = i, this.logger = "u" > typeof i ? .logger && "string" != typeof i ? .logger ? i.logger : (0, Q.pino)((0, Q.getDefaultLoggerOptions)({
                        level: i ? .logger || t8
                    })), this.disableProviderPing = i ? .disableProviderPing || !1
                }
                static async init(i) {
                    let c = new index_es_hr(i);
                    return await c.initialize(), c
                }
                async request(i, c) {
                    let [l, v] = this.validateChain(c);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(l).request({
                        request: index_es_cr({}, i),
                        chainId: `${l}:${v}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(i, c, l) {
                    this.request(i, l).then(i => c(null, i)).catch(i => c(i, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var i;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (i = this.session) ? void 0 : i.topic,
                        reason: (0, E.D6)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(i) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(i), await this.cleanupPendingPairings(), !i.skipPairing) return await this.pair(i.pairingTopic)
                }
                on(i, c) {
                    this.events.on(i, c)
                }
                once(i, c) {
                    this.events.once(i, c)
                }
                removeListener(i, c) {
                    this.events.removeListener(i, c)
                }
                off(i, c) {
                    this.events.off(i, c)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(i) {
                    this.shouldAbortPairingAttempt = !1;
                    let c = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (c >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: l,
                            approval: v
                        } = await this.client.connect({
                            pairingTopic: i,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        l && (this.uri = l, this.events.emit("display_uri", l)), await v().then(i => {
                            this.session = i, this.namespaces || (this.namespaces = function(i) {
                                let c = {};
                                for (let [l, v] of Object.entries(i)) {
                                    let i = v.methods || [],
                                        w = v.events || [],
                                        I = v.accounts || [],
                                        P = (0, E.gp)(l) ? [l] : v.chains ? v.chains : ya(v.accounts);
                                    c[l] = {
                                        chains: P,
                                        methods: i,
                                        events: w,
                                        accounts: I
                                    }
                                }
                                return c
                            }(i.namespaces), this.persist("namespaces", this.namespaces))
                        }).catch(i => {
                            if (i.message !== tW) throw i;
                            c++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(i, c) {
                    try {
                        if (!this.session) return;
                        let [l, v] = this.validateChain(i);
                        this.getProvider(l).setDefaultChain(v, c)
                    } catch (i) {
                        if (!/Please call connect/.test(i.message)) throw i
                    }
                }
                async cleanupPendingPairings(i = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let c = this.client.pairing.getAll();
                    if ((0, E.qt)(c)) {
                        for (let l of c) i.deletePairings ? this.client.core.expirer.set(l.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(l.topic);
                        this.logger.info(`Inactive pairings cleared: ${c.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let i = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[i]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await index_es_M.init({
                        logger: this.providerOpts.logger || t8,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let i = [...new Set(Object.keys(this.session.namespaces).map(i => (0, E.M)(i)))];
                    index_es_Wi("client", this.client), index_es_Wi("events", this.events), index_es_Wi("disableProviderPing", this.disableProviderPing), i.forEach(i => {
                        if (!this.session) return;
                        let c = function(i, c) {
                                let l = Object.keys(c.namespaces).filter(c => c.includes(i));
                                if (!l.length) return [];
                                let v = [];
                                return l.forEach(i => {
                                    let l = c.namespaces[i].accounts;
                                    v.push(...l)
                                }), v
                            }(i, this.session),
                            l = ya(c),
                            v = function(i = {}, c = {}) {
                                let l = Sa(i),
                                    v = Sa(c);
                                return rt.exports.merge(l, v)
                            }(this.namespaces, this.optionalNamespaces),
                            w = index_es_Fi(index_es_cr({}, v[i]), {
                                accounts: c,
                                chains: l
                            });
                        switch (i) {
                            case "eip155":
                                this.rpcProviders[i] = new Qg({
                                    namespace: w
                                });
                                break;
                            case "solana":
                                this.rpcProviders[i] = new Vg({
                                    namespace: w
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[i] = new kg({
                                    namespace: w
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[i] = new Xg({
                                    namespace: w
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[i] = new jg({
                                    namespace: w
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[i] = new nv({
                                    namespace: w
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[i] = new tv({
                                    namespace: w
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", i => {
                        this.events.emit("session_ping", i)
                    }), this.client.on("session_event", i => {
                        let {
                            params: c
                        } = i, {
                            event: l
                        } = c;
                        if ("accountsChanged" === l.name) {
                            let i = l.data;
                            i && (0, E.qt)(i) && this.events.emit("accountsChanged", i.map(Zg))
                        } else "chainChanged" === l.name ? this.onChainChanged(c.chainId) : this.events.emit(l.name, l.data);
                        this.events.emit("session_event", i)
                    }), this.client.on("session_update", ({
                        topic: i,
                        params: c
                    }) => {
                        var l;
                        let {
                            namespaces: v
                        } = c, w = null == (l = this.client) ? void 0 : l.session.get(i);
                        this.session = index_es_Fi(index_es_cr({}, w), {
                            namespaces: v
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: i,
                            params: c
                        })
                    }), this.client.on("session_delete", async i => {
                        await this.cleanup(), this.events.emit("session_delete", i), this.events.emit("disconnect", index_es_Fi(index_es_cr({}, (0, E.D6)("USER_DISCONNECTED")), {
                            data: i.topic
                        }))
                    }), this.on(t9.DEFAULT_CHAIN_CHANGED, i => {
                        this.onChainChanged(i, !0)
                    })
                }
                getProvider(i) {
                    if (!this.rpcProviders[i]) throw Error(`Provider not found: ${i}`);
                    return this.rpcProviders[i]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(i => {
                        var c;
                        this.getProvider(i).updateNamespace(null == (c = this.session) ? void 0 : c.namespaces[i])
                    })
                }
                setNamespaces(i) {
                    let {
                        namespaces: c,
                        optionalNamespaces: l,
                        sessionProperties: v
                    } = i;
                    c && Object.keys(c).length && (this.namespaces = c), l && Object.keys(l).length && (this.optionalNamespaces = l), this.sessionProperties = v, this.persist("namespaces", c), this.persist("optionalNamespaces", l)
                }
                validateChain(i) {
                    let [c, l] = i ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [c, l];
                    if (c && !Object.keys(this.namespaces || {}).map(i => (0, E.M)(i)).includes(c)) throw Error(`Namespace '${c}' is not configured. Please call connect() first with namespace config.`);
                    if (c && l) return [c, l];
                    let v = (0, E.M)(Object.keys(this.namespaces)[0]),
                        w = this.rpcProviders[v].getDefaultChain();
                    return [v, w]
                }
                async requestAccounts() {
                    let [i] = this.validateChain();
                    return await this.getProvider(i).requestAccounts()
                }
                onChainChanged(i, c = !1) {
                    var l;
                    if (!this.namespaces) return;
                    let [v, w] = this.validateChain(i);
                    c || this.getProvider(v).setDefaultChain(w), (null != (l = this.namespaces[v]) ? l : this.namespaces[`${v}:${w}`]).defaultChain = w, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", w)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(i, c) {
                    this.client.core.storage.setItem(`${t7}/${i}`, c)
                }
                async getFromStore(i) {
                    return await this.client.core.storage.getItem(`${t7}/${i}`)
                }
            };
            let rm = ["eth_sendTransaction", "personal_sign"],
                rb = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                rw = ["chainChanged", "accountsChanged"],
                rI = ["message", "disconnect", "connect"];
            var rE = Object.defineProperty,
                rx = Object.defineProperties,
                rS = Object.getOwnPropertyDescriptors,
                rP = Object.getOwnPropertySymbols,
                rO = Object.prototype.hasOwnProperty,
                rR = Object.prototype.propertyIsEnumerable,
                ethereum_provider_dist_index_es_O = (i, c, l) => c in i ? rE(i, c, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : i[c] = l,
                dist_index_es_p = (i, c) => {
                    for (var l in c || (c = {})) rO.call(c, l) && ethereum_provider_dist_index_es_O(i, l, c[l]);
                    if (rP)
                        for (var l of rP(c)) rR.call(c, l) && ethereum_provider_dist_index_es_O(i, l, c[l]);
                    return i
                },
                dist_index_es_M = (i, c) => rx(i, rS(c));

            function dist_index_es_g(i) {
                return Number(i[0].split(":")[1])
            }

            function f(i) {
                return `0x${i.toString(16)}`
            }
            let index_es_v = class index_es_v {
                constructor() {
                    this.events = new w.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (i, c) => (this.events.on(i, c), this), this.once = (i, c) => (this.events.once(i, c), this), this.removeListener = (i, c) => (this.events.removeListener(i, c), this), this.off = (i, c) => (this.events.off(i, c), this), this.parseAccount = i => this.isCompatibleChainId(i) ? this.parseAccountId(i).address : i, this.signer = {}, this.rpc = {}
                }
                static async init(i) {
                    let c = new index_es_v;
                    return await c.initialize(i), c
                }
                async request(i) {
                    return await this.signer.request(i, this.formatChainId(this.chainId))
                }
                sendAsync(i, c) {
                    this.signer.sendAsync(i, c, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(i) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(i);
                    let {
                        required: c,
                        optional: l
                    } = function(i) {
                        let {
                            chains: c,
                            optionalChains: l,
                            methods: v,
                            optionalMethods: w,
                            events: I,
                            optionalEvents: P,
                            rpcMap: C
                        } = i;
                        if (!(0, E.qt)(c)) throw Error("Invalid chains");
                        let D = {
                                chains: c,
                                methods: v || rm,
                                events: I || rw,
                                rpcMap: dist_index_es_p({}, c.length ? {
                                    [dist_index_es_g(c)]: C[dist_index_es_g(c)]
                                } : {})
                            },
                            q = I ? .filter(i => !rw.includes(i)),
                            $ = v ? .filter(i => !rm.includes(i));
                        if (!l && !P && !w && !(null != q && q.length) && !(null != $ && $.length)) return {
                            required: c.length ? D : void 0
                        };
                        let B = q ? .length && $ ? .length || !l,
                            J = {
                                chains: [...new Set(B ? D.chains.concat(l || []) : l)],
                                methods: [...new Set(D.methods.concat(null != w && w.length ? w : rb))],
                                events: [...new Set(D.events.concat(P || rI))],
                                rpcMap: C
                            };
                        return {
                            required: c.length ? D : void 0,
                            optional: l.length ? J : void 0
                        }
                    }(this.rpc);
                    try {
                        let v = await new Promise(async (v, w) => {
                            var I;
                            this.rpc.showQrModal && (null == (I = this.modal) || I.subscribeModal(i => {
                                i.open || this.signer.session || (this.signer.abortPairingAttempt(), w(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(dist_index_es_M(dist_index_es_p({
                                namespaces: dist_index_es_p({}, c && {
                                    [this.namespace]: c
                                })
                            }, l && {
                                optionalNamespaces: {
                                    [this.namespace]: l
                                }
                            }), {
                                pairingTopic: i ? .pairingTopic
                            })).then(i => {
                                v(i)
                            }).catch(i => {
                                w(Error(i.message))
                            })
                        });
                        if (!v) return;
                        this.setChainIds(this.rpc.chains);
                        let w = (0, E.gu)(v.namespaces, [this.namespace]);
                        this.setAccounts(w), this.events.emit("connect", {
                            chainId: f(this.chainId)
                        })
                    } catch (i) {
                        throw this.signer.logger.error(i), i
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", i => {
                        let {
                            params: c
                        } = i, {
                            event: l
                        } = c;
                        "accountsChanged" === l.name ? (this.accounts = this.parseAccounts(l.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === l.name ? this.setChainId(this.formatChainId(l.data)) : this.events.emit(l.name, l.data), this.events.emit("session_event", i)
                    }), this.signer.on("chainChanged", i => {
                        let c = parseInt(i);
                        this.chainId = c, this.events.emit("chainChanged", f(this.chainId)), this.persist()
                    }), this.signer.on("session_update", i => {
                        this.events.emit("session_update", i)
                    }), this.signer.on("session_delete", i => {
                        this.reset(), this.events.emit("session_delete", i), this.events.emit("disconnect", dist_index_es_M(dist_index_es_p({}, (0, E.D6)("USER_DISCONNECTED")), {
                            data: i.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", i => {
                        var c, l;
                        this.rpc.showQrModal && (null == (c = this.modal) || c.closeModal(), null == (l = this.modal) || l.openModal({
                            uri: i
                        })), this.events.emit("display_uri", i)
                    })
                }
                switchEthereumChain(i) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: i.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(i) {
                    return "string" == typeof i && i.startsWith(`${this.namespace}:`)
                }
                formatChainId(i) {
                    return `${this.namespace}:${i}`
                }
                parseChainId(i) {
                    return Number(i.split(":")[1])
                }
                setChainIds(i) {
                    let c = i.filter(i => this.isCompatibleChainId(i)).map(i => this.parseChainId(i));
                    c.length && (this.chainId = c[0], this.events.emit("chainChanged", f(this.chainId)), this.persist())
                }
                setChainId(i) {
                    if (this.isCompatibleChainId(i)) {
                        let c = this.parseChainId(i);
                        this.chainId = c, this.switchEthereumChain(c)
                    }
                }
                parseAccountId(i) {
                    let [c, l, v] = i.split(":");
                    return {
                        chainId: `${c}:${l}`,
                        address: v
                    }
                }
                setAccounts(i) {
                    this.accounts = i.filter(i => this.parseChainId(this.parseAccountId(i).chainId) === this.chainId).map(i => this.parseAccountId(i).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(i) {
                    var c, l;
                    let v = null != (c = i ? .chains) ? c : [],
                        w = null != (l = i ? .optionalChains) ? l : [],
                        I = v.concat(w);
                    if (!I.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let E = v.length ? i ? .methods || rm : [],
                        P = v.length ? i ? .events || rw : [],
                        C = i ? .optionalMethods || [],
                        D = i ? .optionalEvents || [],
                        q = i ? .rpcMap || this.buildRpcMap(I, i.projectId),
                        $ = i ? .qrModalOptions || void 0;
                    return {
                        chains: v ? .map(i => this.formatChainId(i)),
                        optionalChains: w.map(i => this.formatChainId(i)),
                        methods: E,
                        events: P,
                        optionalMethods: C,
                        optionalEvents: D,
                        rpcMap: q,
                        showQrModal: !!(null != i && i.showQrModal),
                        qrModalOptions: $,
                        projectId: i.projectId,
                        metadata: i.metadata
                    }
                }
                buildRpcMap(i, c) {
                    let l = {};
                    return i.forEach(i => {
                        l[i] = this.getRpcUrl(i, c)
                    }), l
                }
                async initialize(i) {
                    if (this.rpc = this.getRpcConfig(i), this.chainId = this.rpc.chains.length ? dist_index_es_g(this.rpc.chains) : dist_index_es_g(this.rpc.optionalChains), this.signer = await index_es_hr.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: i.disableProviderPing,
                            relayUrl: i.relayUrl,
                            storageOptions: i.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let i;
                        try {
                            let {
                                WalletConnectModal: c
                            } = await l.e(8465).then(l.bind(l, 78465));
                            i = c
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (i) try {
                            this.modal = new i(dist_index_es_p({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (i) {
                            throw this.signer.logger.error(i), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(i) {
                    if (!i) return;
                    let {
                        chains: c,
                        optionalChains: l,
                        rpcMap: v
                    } = i;
                    c && (0, E.qt)(c) && (this.rpc.chains = c.map(i => this.formatChainId(i)), c.forEach(i => {
                        this.rpc.rpcMap[i] = v ? .[i] || this.getRpcUrl(i)
                    })), l && (0, E.qt)(l) && (this.rpc.optionalChains = [], this.rpc.optionalChains = l ? .map(i => this.formatChainId(i)), l.forEach(i => {
                        this.rpc.rpcMap[i] = v ? .[i] || this.getRpcUrl(i)
                    }))
                }
                getRpcUrl(i, c) {
                    var l;
                    return (null == (l = this.rpc.rpcMap) ? void 0 : l[i]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${i}&projectId=${c||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let i = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        c = this.session.namespaces[`${this.namespace}:${i}`] ? this.session.namespaces[`${this.namespace}:${i}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(i ? [this.formatChainId(i)] : c ? .accounts), this.setAccounts(c ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(i) {
                    return "string" == typeof i || i instanceof String ? [this.parseAccount(i)] : i.map(i => this.parseAccount(i))
                }
            };
            let rC = index_es_v
        },
        95097: function(i, c, l) {
            "use strict";
            l.d(c, {
                q: function() {
                    return IEvents
                }
            });
            let IEvents = class IEvents {}
        },
        13923: function(i, c, l) {
            "use strict";
            l.r(c), l.d(c, {
                IEvents: function() {
                    return v.q
                }
            });
            var v = l(95097)
        },
        3768: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.HEARTBEAT_EVENTS = c.HEARTBEAT_INTERVAL = void 0;
            let v = l(58619);
            c.HEARTBEAT_INTERVAL = v.FIVE_SECONDS, c.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        7051: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            let v = l(42182);
            v.__exportStar(l(3768), c)
        },
        74862: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.HeartBeat = void 0;
            let v = l(42182),
                w = l(512),
                I = l(58619),
                E = l(89219),
                P = l(7051);
            let HeartBeat = class HeartBeat extends E.IHeartBeat {
                constructor(i) {
                    super(i), this.events = new w.EventEmitter, this.interval = P.HEARTBEAT_INTERVAL, this.interval = (null == i ? void 0 : i.interval) || P.HEARTBEAT_INTERVAL
                }
                static init(i) {
                    return v.__awaiter(this, void 0, void 0, function*() {
                        let c = new HeartBeat(i);
                        return yield c.init(), c
                    })
                }
                init() {
                    return v.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(i, c) {
                    this.events.on(i, c)
                }
                once(i, c) {
                    this.events.once(i, c)
                }
                off(i, c) {
                    this.events.off(i, c)
                }
                removeListener(i, c) {
                    this.events.removeListener(i, c)
                }
                initialize() {
                    return v.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), I.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(P.HEARTBEAT_EVENTS.pulse)
                }
            };
            c.HeartBeat = HeartBeat
        },
        63943: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            let v = l(42182);
            v.__exportStar(l(74862), c), v.__exportStar(l(89219), c), v.__exportStar(l(7051), c)
        },
        74684: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.IHeartBeat = void 0;
            let v = l(13923);
            let IHeartBeat = class IHeartBeat extends v.IEvents {
                constructor(i) {
                    super()
                }
            };
            c.IHeartBeat = IHeartBeat
        },
        89219: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            let v = l(42182);
            v.__exportStar(l(74684), c)
        },
        42182: function(i, c, l) {
            "use strict";
            l.r(c), l.d(c, {
                __assign: function() {
                    return __assign
                },
                __asyncDelegator: function() {
                    return __asyncDelegator
                },
                __asyncGenerator: function() {
                    return __asyncGenerator
                },
                __asyncValues: function() {
                    return __asyncValues
                },
                __await: function() {
                    return __await
                },
                __awaiter: function() {
                    return __awaiter
                },
                __classPrivateFieldGet: function() {
                    return __classPrivateFieldGet
                },
                __classPrivateFieldSet: function() {
                    return __classPrivateFieldSet
                },
                __createBinding: function() {
                    return __createBinding
                },
                __decorate: function() {
                    return __decorate
                },
                __exportStar: function() {
                    return __exportStar
                },
                __extends: function() {
                    return __extends
                },
                __generator: function() {
                    return __generator
                },
                __importDefault: function() {
                    return __importDefault
                },
                __importStar: function() {
                    return __importStar
                },
                __makeTemplateObject: function() {
                    return __makeTemplateObject
                },
                __metadata: function() {
                    return __metadata
                },
                __param: function() {
                    return __param
                },
                __read: function() {
                    return __read
                },
                __rest: function() {
                    return __rest
                },
                __spread: function() {
                    return __spread
                },
                __spreadArrays: function() {
                    return __spreadArrays
                },
                __values: function() {
                    return __values
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var extendStatics = function(i, c) {
                return (extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(i, c) {
                    i.__proto__ = c
                } || function(i, c) {
                    for (var l in c) c.hasOwnProperty(l) && (i[l] = c[l])
                })(i, c)
            };

            function __extends(i, c) {
                function __() {
                    this.constructor = i
                }
                extendStatics(i, c), i.prototype = null === c ? Object.create(c) : (__.prototype = c.prototype, new __)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(i) {
                    for (var c, l = 1, v = arguments.length; l < v; l++)
                        for (var w in c = arguments[l]) Object.prototype.hasOwnProperty.call(c, w) && (i[w] = c[w]);
                    return i
                }).apply(this, arguments)
            };

            function __rest(i, c) {
                var l = {};
                for (var v in i) Object.prototype.hasOwnProperty.call(i, v) && 0 > c.indexOf(v) && (l[v] = i[v]);
                if (null != i && "function" == typeof Object.getOwnPropertySymbols)
                    for (var w = 0, v = Object.getOwnPropertySymbols(i); w < v.length; w++) 0 > c.indexOf(v[w]) && Object.prototype.propertyIsEnumerable.call(i, v[w]) && (l[v[w]] = i[v[w]]);
                return l
            }

            function __decorate(i, c, l, v) {
                var w, I = arguments.length,
                    E = I < 3 ? c : null === v ? v = Object.getOwnPropertyDescriptor(c, l) : v;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) E = Reflect.decorate(i, c, l, v);
                else
                    for (var P = i.length - 1; P >= 0; P--)(w = i[P]) && (E = (I < 3 ? w(E) : I > 3 ? w(c, l, E) : w(c, l)) || E);
                return I > 3 && E && Object.defineProperty(c, l, E), E
            }

            function __param(i, c) {
                return function(l, v) {
                    c(l, v, i)
                }
            }

            function __metadata(i, c) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(i, c)
            }

            function __awaiter(i, c, l, v) {
                return new(l || (l = Promise))(function(w, I) {
                    function fulfilled(i) {
                        try {
                            step(v.next(i))
                        } catch (i) {
                            I(i)
                        }
                    }

                    function rejected(i) {
                        try {
                            step(v.throw(i))
                        } catch (i) {
                            I(i)
                        }
                    }

                    function step(i) {
                        var c;
                        i.done ? w(i.value) : ((c = i.value) instanceof l ? c : new l(function(i) {
                            i(c)
                        })).then(fulfilled, rejected)
                    }
                    step((v = v.apply(i, c || [])).next())
                })
            }

            function __generator(i, c) {
                var l, v, w, I, E = {
                    label: 0,
                    sent: function() {
                        if (1 & w[0]) throw w[1];
                        return w[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function verb(I) {
                    return function(P) {
                        return function(I) {
                            if (l) throw TypeError("Generator is already executing.");
                            for (; E;) try {
                                if (l = 1, v && (w = 2 & I[0] ? v.return : I[0] ? v.throw || ((w = v.return) && w.call(v), 0) : v.next) && !(w = w.call(v, I[1])).done) return w;
                                switch (v = 0, w && (I = [2 & I[0], w.value]), I[0]) {
                                    case 0:
                                    case 1:
                                        w = I;
                                        break;
                                    case 4:
                                        return E.label++, {
                                            value: I[1],
                                            done: !1
                                        };
                                    case 5:
                                        E.label++, v = I[1], I = [0];
                                        continue;
                                    case 7:
                                        I = E.ops.pop(), E.trys.pop();
                                        continue;
                                    default:
                                        if (!(w = (w = E.trys).length > 0 && w[w.length - 1]) && (6 === I[0] || 2 === I[0])) {
                                            E = 0;
                                            continue
                                        }
                                        if (3 === I[0] && (!w || I[1] > w[0] && I[1] < w[3])) {
                                            E.label = I[1];
                                            break
                                        }
                                        if (6 === I[0] && E.label < w[1]) {
                                            E.label = w[1], w = I;
                                            break
                                        }
                                        if (w && E.label < w[2]) {
                                            E.label = w[2], E.ops.push(I);
                                            break
                                        }
                                        w[2] && E.ops.pop(), E.trys.pop();
                                        continue
                                }
                                I = c.call(i, E)
                            } catch (i) {
                                I = [6, i], v = 0
                            } finally {
                                l = w = 0
                            }
                            if (5 & I[0]) throw I[1];
                            return {
                                value: I[0] ? I[1] : void 0,
                                done: !0
                            }
                        }([I, P])
                    }
                }
            }

            function __createBinding(i, c, l, v) {
                void 0 === v && (v = l), i[v] = c[l]
            }

            function __exportStar(i, c) {
                for (var l in i) "default" === l || c.hasOwnProperty(l) || (c[l] = i[l])
            }

            function __values(i) {
                var c = "function" == typeof Symbol && Symbol.iterator,
                    l = c && i[c],
                    v = 0;
                if (l) return l.call(i);
                if (i && "number" == typeof i.length) return {
                    next: function() {
                        return i && v >= i.length && (i = void 0), {
                            value: i && i[v++],
                            done: !i
                        }
                    }
                };
                throw TypeError(c ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(i, c) {
                var l = "function" == typeof Symbol && i[Symbol.iterator];
                if (!l) return i;
                var v, w, I = l.call(i),
                    E = [];
                try {
                    for (;
                        (void 0 === c || c-- > 0) && !(v = I.next()).done;) E.push(v.value)
                } catch (i) {
                    w = {
                        error: i
                    }
                } finally {
                    try {
                        v && !v.done && (l = I.return) && l.call(I)
                    } finally {
                        if (w) throw w.error
                    }
                }
                return E
            }

            function __spread() {
                for (var i = [], c = 0; c < arguments.length; c++) i = i.concat(__read(arguments[c]));
                return i
            }

            function __spreadArrays() {
                for (var i = 0, c = 0, l = arguments.length; c < l; c++) i += arguments[c].length;
                for (var v = Array(i), w = 0, c = 0; c < l; c++)
                    for (var I = arguments[c], E = 0, P = I.length; E < P; E++, w++) v[w] = I[E];
                return v
            }

            function __await(i) {
                return this instanceof __await ? (this.v = i, this) : new __await(i)
            }

            function __asyncGenerator(i, c, l) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var v, w = l.apply(i, c || []),
                    I = [];
                return v = {}, verb("next"), verb("throw"), verb("return"), v[Symbol.asyncIterator] = function() {
                    return this
                }, v;

                function verb(i) {
                    w[i] && (v[i] = function(c) {
                        return new Promise(function(l, v) {
                            I.push([i, c, l, v]) > 1 || resume(i, c)
                        })
                    })
                }

                function resume(i, c) {
                    try {
                        var l;
                        (l = w[i](c)).value instanceof __await ? Promise.resolve(l.value.v).then(fulfill, reject) : settle(I[0][2], l)
                    } catch (i) {
                        settle(I[0][3], i)
                    }
                }

                function fulfill(i) {
                    resume("next", i)
                }

                function reject(i) {
                    resume("throw", i)
                }

                function settle(i, c) {
                    i(c), I.shift(), I.length && resume(I[0][0], I[0][1])
                }
            }

            function __asyncDelegator(i) {
                var c, l;
                return c = {}, verb("next"), verb("throw", function(i) {
                    throw i
                }), verb("return"), c[Symbol.iterator] = function() {
                    return this
                }, c;

                function verb(v, w) {
                    c[v] = i[v] ? function(c) {
                        return (l = !l) ? {
                            value: __await(i[v](c)),
                            done: "return" === v
                        } : w ? w(c) : c
                    } : w
                }
            }

            function __asyncValues(i) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var c, l = i[Symbol.asyncIterator];
                return l ? l.call(i) : (i = __values(i), c = {}, verb("next"), verb("throw"), verb("return"), c[Symbol.asyncIterator] = function() {
                    return this
                }, c);

                function verb(l) {
                    c[l] = i[l] && function(c) {
                        return new Promise(function(v, w) {
                            ! function(i, c, l, v) {
                                Promise.resolve(v).then(function(c) {
                                    i({
                                        value: c,
                                        done: l
                                    })
                                }, c)
                            }(v, w, (c = i[l](c)).done, c.value)
                        })
                    }
                }
            }

            function __makeTemplateObject(i, c) {
                return Object.defineProperty ? Object.defineProperty(i, "raw", {
                    value: c
                }) : i.raw = c, i
            }

            function __importStar(i) {
                if (i && i.__esModule) return i;
                var c = {};
                if (null != i)
                    for (var l in i) Object.hasOwnProperty.call(i, l) && (c[l] = i[l]);
                return c.default = i, c
            }

            function __importDefault(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function __classPrivateFieldGet(i, c) {
                if (!c.has(i)) throw TypeError("attempted to get private field on non-instance");
                return c.get(i)
            }

            function __classPrivateFieldSet(i, c, l) {
                if (!c.has(i)) throw TypeError("attempted to set private field on non-instance");
                return c.set(i, l), l
            }
        },
        76159: function(i, c) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.PINO_CUSTOM_CONTEXT_KEY = c.PINO_LOGGER_DEFAULTS = void 0, c.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, c.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        72058: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.pino = void 0;
            let v = l(60907),
                w = v.__importDefault(l(90440));
            Object.defineProperty(c, "pino", {
                enumerable: !0,
                get: function() {
                    return w.default
                }
            }), v.__exportStar(l(76159), c), v.__exportStar(l(8218), c)
        },
        8218: function(i, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.generateChildLogger = c.formatChildLoggerContext = c.getLoggerContext = c.setBrowserLoggerContext = c.getBrowserLoggerContext = c.getDefaultLoggerOptions = void 0;
            let v = l(76159);

            function getBrowserLoggerContext(i, c = v.PINO_CUSTOM_CONTEXT_KEY) {
                return i[c] || ""
            }

            function setBrowserLoggerContext(i, c, l = v.PINO_CUSTOM_CONTEXT_KEY) {
                return i[l] = c, i
            }

            function getLoggerContext(i, c = v.PINO_CUSTOM_CONTEXT_KEY) {
                return void 0 === i.bindings ? getBrowserLoggerContext(i, c) : i.bindings().context || ""
            }

            function formatChildLoggerContext(i, c, l = v.PINO_CUSTOM_CONTEXT_KEY) {
                let w = getLoggerContext(i, l),
                    I = w.trim() ? `${w}/${c}` : c;
                return I
            }
            c.getDefaultLoggerOptions = function(i) {
                return Object.assign(Object.assign({}, i), {
                    level: (null == i ? void 0 : i.level) || v.PINO_LOGGER_DEFAULTS.level
                })
            }, c.getBrowserLoggerContext = getBrowserLoggerContext, c.setBrowserLoggerContext = setBrowserLoggerContext, c.getLoggerContext = getLoggerContext, c.formatChildLoggerContext = formatChildLoggerContext, c.generateChildLogger = function(i, c, l = v.PINO_CUSTOM_CONTEXT_KEY) {
                let w = formatChildLoggerContext(i, c, l),
                    I = i.child({
                        context: w
                    });
                return setBrowserLoggerContext(I, w, l)
            }
        },
        60907: function(i, c, l) {
            "use strict";
            l.r(c), l.d(c, {
                __assign: function() {
                    return __assign
                },
                __asyncDelegator: function() {
                    return __asyncDelegator
                },
                __asyncGenerator: function() {
                    return __asyncGenerator
                },
                __asyncValues: function() {
                    return __asyncValues
                },
                __await: function() {
                    return __await
                },
                __awaiter: function() {
                    return __awaiter
                },
                __classPrivateFieldGet: function() {
                    return __classPrivateFieldGet
                },
                __classPrivateFieldSet: function() {
                    return __classPrivateFieldSet
                },
                __createBinding: function() {
                    return __createBinding
                },
                __decorate: function() {
                    return __decorate
                },
                __exportStar: function() {
                    return __exportStar
                },
                __extends: function() {
                    return __extends
                },
                __generator: function() {
                    return __generator
                },
                __importDefault: function() {
                    return __importDefault
                },
                __importStar: function() {
                    return __importStar
                },
                __makeTemplateObject: function() {
                    return __makeTemplateObject
                },
                __metadata: function() {
                    return __metadata
                },
                __param: function() {
                    return __param
                },
                __read: function() {
                    return __read
                },
                __rest: function() {
                    return __rest
                },
                __spread: function() {
                    return __spread
                },
                __spreadArrays: function() {
                    return __spreadArrays
                },
                __values: function() {
                    return __values
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var extendStatics = function(i, c) {
                return (extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(i, c) {
                    i.__proto__ = c
                } || function(i, c) {
                    for (var l in c) c.hasOwnProperty(l) && (i[l] = c[l])
                })(i, c)
            };

            function __extends(i, c) {
                function __() {
                    this.constructor = i
                }
                extendStatics(i, c), i.prototype = null === c ? Object.create(c) : (__.prototype = c.prototype, new __)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(i) {
                    for (var c, l = 1, v = arguments.length; l < v; l++)
                        for (var w in c = arguments[l]) Object.prototype.hasOwnProperty.call(c, w) && (i[w] = c[w]);
                    return i
                }).apply(this, arguments)
            };

            function __rest(i, c) {
                var l = {};
                for (var v in i) Object.prototype.hasOwnProperty.call(i, v) && 0 > c.indexOf(v) && (l[v] = i[v]);
                if (null != i && "function" == typeof Object.getOwnPropertySymbols)
                    for (var w = 0, v = Object.getOwnPropertySymbols(i); w < v.length; w++) 0 > c.indexOf(v[w]) && Object.prototype.propertyIsEnumerable.call(i, v[w]) && (l[v[w]] = i[v[w]]);
                return l
            }

            function __decorate(i, c, l, v) {
                var w, I = arguments.length,
                    E = I < 3 ? c : null === v ? v = Object.getOwnPropertyDescriptor(c, l) : v;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) E = Reflect.decorate(i, c, l, v);
                else
                    for (var P = i.length - 1; P >= 0; P--)(w = i[P]) && (E = (I < 3 ? w(E) : I > 3 ? w(c, l, E) : w(c, l)) || E);
                return I > 3 && E && Object.defineProperty(c, l, E), E
            }

            function __param(i, c) {
                return function(l, v) {
                    c(l, v, i)
                }
            }

            function __metadata(i, c) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(i, c)
            }

            function __awaiter(i, c, l, v) {
                return new(l || (l = Promise))(function(w, I) {
                    function fulfilled(i) {
                        try {
                            step(v.next(i))
                        } catch (i) {
                            I(i)
                        }
                    }

                    function rejected(i) {
                        try {
                            step(v.throw(i))
                        } catch (i) {
                            I(i)
                        }
                    }

                    function step(i) {
                        var c;
                        i.done ? w(i.value) : ((c = i.value) instanceof l ? c : new l(function(i) {
                            i(c)
                        })).then(fulfilled, rejected)
                    }
                    step((v = v.apply(i, c || [])).next())
                })
            }

            function __generator(i, c) {
                var l, v, w, I, E = {
                    label: 0,
                    sent: function() {
                        if (1 & w[0]) throw w[1];
                        return w[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function verb(I) {
                    return function(P) {
                        return function(I) {
                            if (l) throw TypeError("Generator is already executing.");
                            for (; E;) try {
                                if (l = 1, v && (w = 2 & I[0] ? v.return : I[0] ? v.throw || ((w = v.return) && w.call(v), 0) : v.next) && !(w = w.call(v, I[1])).done) return w;
                                switch (v = 0, w && (I = [2 & I[0], w.value]), I[0]) {
                                    case 0:
                                    case 1:
                                        w = I;
                                        break;
                                    case 4:
                                        return E.label++, {
                                            value: I[1],
                                            done: !1
                                        };
                                    case 5:
                                        E.label++, v = I[1], I = [0];
                                        continue;
                                    case 7:
                                        I = E.ops.pop(), E.trys.pop();
                                        continue;
                                    default:
                                        if (!(w = (w = E.trys).length > 0 && w[w.length - 1]) && (6 === I[0] || 2 === I[0])) {
                                            E = 0;
                                            continue
                                        }
                                        if (3 === I[0] && (!w || I[1] > w[0] && I[1] < w[3])) {
                                            E.label = I[1];
                                            break
                                        }
                                        if (6 === I[0] && E.label < w[1]) {
                                            E.label = w[1], w = I;
                                            break
                                        }
                                        if (w && E.label < w[2]) {
                                            E.label = w[2], E.ops.push(I);
                                            break
                                        }
                                        w[2] && E.ops.pop(), E.trys.pop();
                                        continue
                                }
                                I = c.call(i, E)
                            } catch (i) {
                                I = [6, i], v = 0
                            } finally {
                                l = w = 0
                            }
                            if (5 & I[0]) throw I[1];
                            return {
                                value: I[0] ? I[1] : void 0,
                                done: !0
                            }
                        }([I, P])
                    }
                }
            }

            function __createBinding(i, c, l, v) {
                void 0 === v && (v = l), i[v] = c[l]
            }

            function __exportStar(i, c) {
                for (var l in i) "default" === l || c.hasOwnProperty(l) || (c[l] = i[l])
            }

            function __values(i) {
                var c = "function" == typeof Symbol && Symbol.iterator,
                    l = c && i[c],
                    v = 0;
                if (l) return l.call(i);
                if (i && "number" == typeof i.length) return {
                    next: function() {
                        return i && v >= i.length && (i = void 0), {
                            value: i && i[v++],
                            done: !i
                        }
                    }
                };
                throw TypeError(c ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(i, c) {
                var l = "function" == typeof Symbol && i[Symbol.iterator];
                if (!l) return i;
                var v, w, I = l.call(i),
                    E = [];
                try {
                    for (;
                        (void 0 === c || c-- > 0) && !(v = I.next()).done;) E.push(v.value)
                } catch (i) {
                    w = {
                        error: i
                    }
                } finally {
                    try {
                        v && !v.done && (l = I.return) && l.call(I)
                    } finally {
                        if (w) throw w.error
                    }
                }
                return E
            }

            function __spread() {
                for (var i = [], c = 0; c < arguments.length; c++) i = i.concat(__read(arguments[c]));
                return i
            }

            function __spreadArrays() {
                for (var i = 0, c = 0, l = arguments.length; c < l; c++) i += arguments[c].length;
                for (var v = Array(i), w = 0, c = 0; c < l; c++)
                    for (var I = arguments[c], E = 0, P = I.length; E < P; E++, w++) v[w] = I[E];
                return v
            }

            function __await(i) {
                return this instanceof __await ? (this.v = i, this) : new __await(i)
            }

            function __asyncGenerator(i, c, l) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var v, w = l.apply(i, c || []),
                    I = [];
                return v = {}, verb("next"), verb("throw"), verb("return"), v[Symbol.asyncIterator] = function() {
                    return this
                }, v;

                function verb(i) {
                    w[i] && (v[i] = function(c) {
                        return new Promise(function(l, v) {
                            I.push([i, c, l, v]) > 1 || resume(i, c)
                        })
                    })
                }

                function resume(i, c) {
                    try {
                        var l;
                        (l = w[i](c)).value instanceof __await ? Promise.resolve(l.value.v).then(fulfill, reject) : settle(I[0][2], l)
                    } catch (i) {
                        settle(I[0][3], i)
                    }
                }

                function fulfill(i) {
                    resume("next", i)
                }

                function reject(i) {
                    resume("throw", i)
                }

                function settle(i, c) {
                    i(c), I.shift(), I.length && resume(I[0][0], I[0][1])
                }
            }

            function __asyncDelegator(i) {
                var c, l;
                return c = {}, verb("next"), verb("throw", function(i) {
                    throw i
                }), verb("return"), c[Symbol.iterator] = function() {
                    return this
                }, c;

                function verb(v, w) {
                    c[v] = i[v] ? function(c) {
                        return (l = !l) ? {
                            value: __await(i[v](c)),
                            done: "return" === v
                        } : w ? w(c) : c
                    } : w
                }
            }

            function __asyncValues(i) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var c, l = i[Symbol.asyncIterator];
                return l ? l.call(i) : (i = __values(i), c = {}, verb("next"), verb("throw"), verb("return"), c[Symbol.asyncIterator] = function() {
                    return this
                }, c);

                function verb(l) {
                    c[l] = i[l] && function(c) {
                        return new Promise(function(v, w) {
                            ! function(i, c, l, v) {
                                Promise.resolve(v).then(function(c) {
                                    i({
                                        value: c,
                                        done: l
                                    })
                                }, c)
                            }(v, w, (c = i[l](c)).done, c.value)
                        })
                    }
                }
            }

            function __makeTemplateObject(i, c) {
                return Object.defineProperty ? Object.defineProperty(i, "raw", {
                    value: c
                }) : i.raw = c, i
            }

            function __importStar(i) {
                if (i && i.__esModule) return i;
                var c = {};
                if (null != i)
                    for (var l in i) Object.hasOwnProperty.call(i, l) && (c[l] = i[l]);
                return c.default = i, c
            }

            function __importDefault(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function __classPrivateFieldGet(i, c) {
                if (!c.has(i)) throw TypeError("attempted to get private field on non-instance");
                return c.get(i)
            }

            function __classPrivateFieldSet(i, c, l) {
                if (!c.has(i)) throw TypeError("attempted to set private field on non-instance");
                return c.set(i, l), l
            }
        },
        69859: function() {},
        99780: function(i, c, l) {
            i = l.nmd(i);
            var v, w, I, E = "__lodash_hash_undefined__",
                P = "[object Arguments]",
                C = "[object Array]",
                D = "[object Boolean]",
                q = "[object Date]",
                $ = "[object Error]",
                B = "[object Function]",
                J = "[object Map]",
                F = "[object Number]",
                W = "[object Object]",
                Q = "[object Promise]",
                X = "[object RegExp]",
                ee = "[object Set]",
                et = "[object String]",
                er = "[object WeakMap]",
                es = "[object ArrayBuffer]",
                ea = "[object DataView]",
                eo = /^\[object .+?Constructor\]$/,
                ec = /^(?:0|[1-9]\d*)$/,
                el = {};
            el["[object Float32Array]"] = el["[object Float64Array]"] = el["[object Int8Array]"] = el["[object Int16Array]"] = el["[object Int32Array]"] = el["[object Uint8Array]"] = el["[object Uint8ClampedArray]"] = el["[object Uint16Array]"] = el["[object Uint32Array]"] = !0, el[P] = el[C] = el[es] = el[D] = el[ea] = el[q] = el[$] = el[B] = el[J] = el[F] = el[W] = el[X] = el[ee] = el[et] = el[er] = !1;
            var eh = "object" == typeof l.g && l.g && l.g.Object === Object && l.g,
                ep = "object" == typeof self && self && self.Object === Object && self,
                ed = eh || ep || Function("return this")(),
                eg = c && !c.nodeType && c,
                ey = eg && i && !i.nodeType && i,
                e_ = ey && ey.exports === eg,
                ev = e_ && eh.process,
                em = function() {
                    try {
                        return ev && ev.binding && ev.binding("util")
                    } catch (i) {}
                }(),
                eb = em && em.isTypedArray;

            function mapToArray(i) {
                var c = -1,
                    l = Array(i.size);
                return i.forEach(function(i, v) {
                    l[++c] = [v, i]
                }), l
            }

            function setToArray(i) {
                var c = -1,
                    l = Array(i.size);
                return i.forEach(function(i) {
                    l[++c] = i
                }), l
            }
            var ew = Array.prototype,
                eI = Function.prototype,
                eE = Object.prototype,
                ex = ed["__core-js_shared__"],
                eS = eI.toString,
                eP = eE.hasOwnProperty,
                eO = (v = /[^.]+$/.exec(ex && ex.keys && ex.keys.IE_PROTO || "")) ? "Symbol(src)_1." + v : "",
                eR = eE.toString,
                eC = RegExp("^" + eS.call(eP).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                eA = e_ ? ed.Buffer : void 0,
                eN = ed.Symbol,
                ej = ed.Uint8Array,
                eT = eE.propertyIsEnumerable,
                ez = ew.splice,
                eL = eN ? eN.toStringTag : void 0,
                eM = Object.getOwnPropertySymbols,
                eD = eA ? eA.isBuffer : void 0,
                ek = (w = Object.keys, I = Object, function(i) {
                    return w(I(i))
                }),
                eU = getNative(ed, "DataView"),
                e$ = getNative(ed, "Map"),
                eK = getNative(ed, "Promise"),
                eH = getNative(ed, "Set"),
                eV = getNative(ed, "WeakMap"),
                eB = getNative(Object, "create"),
                eG = toSource(eU),
                eJ = toSource(e$),
                eF = toSource(eK),
                eW = toSource(eH),
                eZ = toSource(eV),
                eY = eN ? eN.prototype : void 0,
                eQ = eY ? eY.valueOf : void 0;

            function Hash(i) {
                var c = -1,
                    l = null == i ? 0 : i.length;
                for (this.clear(); ++c < l;) {
                    var v = i[c];
                    this.set(v[0], v[1])
                }
            }

            function ListCache(i) {
                var c = -1,
                    l = null == i ? 0 : i.length;
                for (this.clear(); ++c < l;) {
                    var v = i[c];
                    this.set(v[0], v[1])
                }
            }

            function MapCache(i) {
                var c = -1,
                    l = null == i ? 0 : i.length;
                for (this.clear(); ++c < l;) {
                    var v = i[c];
                    this.set(v[0], v[1])
                }
            }

            function SetCache(i) {
                var c = -1,
                    l = null == i ? 0 : i.length;
                for (this.__data__ = new MapCache; ++c < l;) this.add(i[c])
            }

            function Stack(i) {
                var c = this.__data__ = new ListCache(i);
                this.size = c.size
            }

            function assocIndexOf(i, c) {
                for (var l = i.length; l--;)
                    if (eq(i[l][0], c)) return l;
                return -1
            }

            function baseGetTag(i) {
                return null == i ? void 0 === i ? "[object Undefined]" : "[object Null]" : eL && eL in Object(i) ? function(i) {
                    var c = eP.call(i, eL),
                        l = i[eL];
                    try {
                        i[eL] = void 0;
                        var v = !0
                    } catch (i) {}
                    var w = eR.call(i);
                    return v && (c ? i[eL] = l : delete i[eL]), w
                }(i) : eR.call(i)
            }

            function baseIsArguments(i) {
                return isObjectLike(i) && baseGetTag(i) == P
            }

            function equalArrays(i, c, l, v, w, I) {
                var E = 1 & l,
                    P = i.length,
                    C = c.length;
                if (P != C && !(E && C > P)) return !1;
                var D = I.get(i);
                if (D && I.get(c)) return D == c;
                var q = -1,
                    $ = !0,
                    B = 2 & l ? new SetCache : void 0;
                for (I.set(i, c), I.set(c, i); ++q < P;) {
                    var J = i[q],
                        F = c[q];
                    if (v) var W = E ? v(F, J, q, c, i, I) : v(J, F, q, i, c, I);
                    if (void 0 !== W) {
                        if (W) continue;
                        $ = !1;
                        break
                    }
                    if (B) {
                        if (! function(i, c) {
                                for (var l = -1, v = null == i ? 0 : i.length; ++l < v;)
                                    if (c(i[l], l, i)) return !0;
                                return !1
                            }(c, function(i, c) {
                                if (!B.has(c) && (J === i || w(J, i, l, v, I))) return B.push(c)
                            })) {
                            $ = !1;
                            break
                        }
                    } else if (!(J === F || w(J, F, l, v, I))) {
                        $ = !1;
                        break
                    }
                }
                return I.delete(i), I.delete(c), $
            }

            function getAllKeys(i) {
                var c;
                return c = function(i) {
                    return null != i && isLength(i.length) && !isFunction(i) ? function(i, c) {
                        var l, v = e5(i),
                            w = !v && e1(i),
                            I = !v && !w && e6(i),
                            E = !v && !w && !I && e2(i),
                            P = v || w || I || E,
                            C = P ? function(i, c) {
                                for (var l = -1, v = Array(i); ++l < i;) v[l] = c(l);
                                return v
                            }(i.length, String) : [],
                            D = C.length;
                        for (var q in i) eP.call(i, q) && !(P && ("length" == q || I && ("offset" == q || "parent" == q) || E && ("buffer" == q || "byteLength" == q || "byteOffset" == q) || (l = null == (l = D) ? 9007199254740991 : l) && ("number" == typeof q || ec.test(q)) && q > -1 && q % 1 == 0 && q < l)) && C.push(q);
                        return C
                    }(i) : function(i) {
                        if (c = i && i.constructor, i !== ("function" == typeof c && c.prototype || eE)) return ek(i);
                        var c, l = [];
                        for (var v in Object(i)) eP.call(i, v) && "constructor" != v && l.push(v);
                        return l
                    }(i)
                }(i), e5(i) ? c : function(i, c) {
                    for (var l = -1, v = c.length, w = i.length; ++l < v;) i[w + l] = c[l];
                    return i
                }(c, eX(i))
            }

            function getMapData(i, c) {
                var l, v = i.__data__;
                return ("string" == (l = typeof c) || "number" == l || "symbol" == l || "boolean" == l ? "__proto__" !== c : null === c) ? v["string" == typeof c ? "string" : "hash"] : v.map
            }

            function getNative(i, c) {
                var l = null == i ? void 0 : i[c];
                return !(!isObject(l) || eO && eO in l) && (isFunction(l) ? eC : eo).test(toSource(l)) ? l : void 0
            }
            Hash.prototype.clear = function() {
                this.__data__ = eB ? eB(null) : {}, this.size = 0
            }, Hash.prototype.delete = function(i) {
                var c = this.has(i) && delete this.__data__[i];
                return this.size -= c ? 1 : 0, c
            }, Hash.prototype.get = function(i) {
                var c = this.__data__;
                if (eB) {
                    var l = c[i];
                    return l === E ? void 0 : l
                }
                return eP.call(c, i) ? c[i] : void 0
            }, Hash.prototype.has = function(i) {
                var c = this.__data__;
                return eB ? void 0 !== c[i] : eP.call(c, i)
            }, Hash.prototype.set = function(i, c) {
                var l = this.__data__;
                return this.size += this.has(i) ? 0 : 1, l[i] = eB && void 0 === c ? E : c, this
            }, ListCache.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, ListCache.prototype.delete = function(i) {
                var c = this.__data__,
                    l = assocIndexOf(c, i);
                return !(l < 0) && (l == c.length - 1 ? c.pop() : ez.call(c, l, 1), --this.size, !0)
            }, ListCache.prototype.get = function(i) {
                var c = this.__data__,
                    l = assocIndexOf(c, i);
                return l < 0 ? void 0 : c[l][1]
            }, ListCache.prototype.has = function(i) {
                return assocIndexOf(this.__data__, i) > -1
            }, ListCache.prototype.set = function(i, c) {
                var l = this.__data__,
                    v = assocIndexOf(l, i);
                return v < 0 ? (++this.size, l.push([i, c])) : l[v][1] = c, this
            }, MapCache.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new Hash,
                    map: new(e$ || ListCache),
                    string: new Hash
                }
            }, MapCache.prototype.delete = function(i) {
                var c = getMapData(this, i).delete(i);
                return this.size -= c ? 1 : 0, c
            }, MapCache.prototype.get = function(i) {
                return getMapData(this, i).get(i)
            }, MapCache.prototype.has = function(i) {
                return getMapData(this, i).has(i)
            }, MapCache.prototype.set = function(i, c) {
                var l = getMapData(this, i),
                    v = l.size;
                return l.set(i, c), this.size += l.size == v ? 0 : 1, this
            }, SetCache.prototype.add = SetCache.prototype.push = function(i) {
                return this.__data__.set(i, E), this
            }, SetCache.prototype.has = function(i) {
                return this.__data__.has(i)
            }, Stack.prototype.clear = function() {
                this.__data__ = new ListCache, this.size = 0
            }, Stack.prototype.delete = function(i) {
                var c = this.__data__,
                    l = c.delete(i);
                return this.size = c.size, l
            }, Stack.prototype.get = function(i) {
                return this.__data__.get(i)
            }, Stack.prototype.has = function(i) {
                return this.__data__.has(i)
            }, Stack.prototype.set = function(i, c) {
                var l = this.__data__;
                if (l instanceof ListCache) {
                    var v = l.__data__;
                    if (!e$ || v.length < 199) return v.push([i, c]), this.size = ++l.size, this;
                    l = this.__data__ = new MapCache(v)
                }
                return l.set(i, c), this.size = l.size, this
            };
            var eX = eM ? function(i) {
                    return null == i ? [] : function(i, c) {
                        for (var l = -1, v = null == i ? 0 : i.length, w = 0, I = []; ++l < v;) {
                            var E = i[l];
                            c(E, l, i) && (I[w++] = E)
                        }
                        return I
                    }(eM(i = Object(i)), function(c) {
                        return eT.call(i, c)
                    })
                } : function() {
                    return []
                },
                e0 = baseGetTag;

            function toSource(i) {
                if (null != i) {
                    try {
                        return eS.call(i)
                    } catch (i) {}
                    try {
                        return i + ""
                    } catch (i) {}
                }
                return ""
            }

            function eq(i, c) {
                return i === c || i != i && c != c
            }(eU && e0(new eU(new ArrayBuffer(1))) != ea || e$ && e0(new e$) != J || eK && e0(eK.resolve()) != Q || eH && e0(new eH) != ee || eV && e0(new eV) != er) && (e0 = function(i) {
                var c = baseGetTag(i),
                    l = c == W ? i.constructor : void 0,
                    v = l ? toSource(l) : "";
                if (v) switch (v) {
                    case eG:
                        return ea;
                    case eJ:
                        return J;
                    case eF:
                        return Q;
                    case eW:
                        return ee;
                    case eZ:
                        return er
                }
                return c
            });
            var e1 = baseIsArguments(function() {
                    return arguments
                }()) ? baseIsArguments : function(i) {
                    return isObjectLike(i) && eP.call(i, "callee") && !eT.call(i, "callee")
                },
                e5 = Array.isArray,
                e6 = eD || function() {
                    return !1
                };

            function isFunction(i) {
                if (!isObject(i)) return !1;
                var c = baseGetTag(i);
                return c == B || "[object GeneratorFunction]" == c || "[object AsyncFunction]" == c || "[object Proxy]" == c
            }

            function isLength(i) {
                return "number" == typeof i && i > -1 && i % 1 == 0 && i <= 9007199254740991
            }

            function isObject(i) {
                var c = typeof i;
                return null != i && ("object" == c || "function" == c)
            }

            function isObjectLike(i) {
                return null != i && "object" == typeof i
            }
            var e2 = eb ? function(i) {
                return eb(i)
            } : function(i) {
                return isObjectLike(i) && isLength(i.length) && !!el[baseGetTag(i)]
            };
            i.exports = function(i, c) {
                return function baseIsEqual(i, c, l, v, w) {
                    return i === c || (null != i && null != c && (isObjectLike(i) || isObjectLike(c)) ? function(i, c, l, v, w, I) {
                        var E = e5(i),
                            B = e5(c),
                            Q = E ? C : e0(i),
                            er = B ? C : e0(c);
                        Q = Q == P ? W : Q, er = er == P ? W : er;
                        var eo = Q == W,
                            ec = er == W,
                            el = Q == er;
                        if (el && e6(i)) {
                            if (!e6(c)) return !1;
                            E = !0, eo = !1
                        }
                        if (el && !eo) return I || (I = new Stack), E || e2(i) ? equalArrays(i, c, l, v, w, I) : function(i, c, l, v, w, I, E) {
                            switch (l) {
                                case ea:
                                    if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset) break;
                                    i = i.buffer, c = c.buffer;
                                case es:
                                    if (i.byteLength != c.byteLength || !I(new ej(i), new ej(c))) break;
                                    return !0;
                                case D:
                                case q:
                                case F:
                                    return eq(+i, +c);
                                case $:
                                    return i.name == c.name && i.message == c.message;
                                case X:
                                case et:
                                    return i == c + "";
                                case J:
                                    var P = mapToArray;
                                case ee:
                                    var C = 1 & v;
                                    if (P || (P = setToArray), i.size != c.size && !C) break;
                                    var B = E.get(i);
                                    if (B) return B == c;
                                    v |= 2, E.set(i, c);
                                    var W = equalArrays(P(i), P(c), v, w, I, E);
                                    return E.delete(i), W;
                                case "[object Symbol]":
                                    if (eQ) return eQ.call(i) == eQ.call(c)
                            }
                            return !1
                        }(i, c, Q, l, v, w, I);
                        if (!(1 & l)) {
                            var eh = eo && eP.call(i, "__wrapped__"),
                                ep = ec && eP.call(c, "__wrapped__");
                            if (eh || ep) {
                                var ed = eh ? i.value() : i,
                                    eg = ep ? c.value() : c;
                                return I || (I = new Stack), w(ed, eg, l, v, I)
                            }
                        }
                        return !!el && (I || (I = new Stack), function(i, c, l, v, w, I) {
                            var E = 1 & l,
                                P = getAllKeys(i),
                                C = P.length;
                            if (C != getAllKeys(c).length && !E) return !1;
                            for (var D = C; D--;) {
                                var q = P[D];
                                if (!(E ? q in c : eP.call(c, q))) return !1
                            }
                            var $ = I.get(i);
                            if ($ && I.get(c)) return $ == c;
                            var B = !0;
                            I.set(i, c), I.set(c, i);
                            for (var J = E; ++D < C;) {
                                var F = i[q = P[D]],
                                    W = c[q];
                                if (v) var Q = E ? v(W, F, q, c, i, I) : v(F, W, q, i, c, I);
                                if (!(void 0 === Q ? F === W || w(F, W, l, v, I) : Q)) {
                                    B = !1;
                                    break
                                }
                                J || (J = "constructor" == q)
                            }
                            if (B && !J) {
                                var X = i.constructor,
                                    ee = c.constructor;
                                X != ee && "constructor" in i && "constructor" in c && !("function" == typeof X && X instanceof X && "function" == typeof ee && ee instanceof ee) && (B = !1)
                            }
                            return I.delete(i), I.delete(c), B
                        }(i, c, l, v, w, I))
                    }(i, c, l, v, baseIsEqual, w) : i != i && c != c)
                }(i, c)
            }
        },
        45503: function(i) {
            "use strict";

            function tryStringify(i) {
                try {
                    return JSON.stringify(i)
                } catch (i) {
                    return '"[Circular]"'
                }
            }
            i.exports = function(i, c, l) {
                var v = l && l.stringify || tryStringify;
                if ("object" == typeof i && null !== i) {
                    var w = c.length + 1;
                    if (1 === w) return i;
                    var I = Array(w);
                    I[0] = v(i);
                    for (var E = 1; E < w; E++) I[E] = v(c[E]);
                    return I.join(" ")
                }
                if ("string" != typeof i) return i;
                var P = c.length;
                if (0 === P) return i;
                for (var C = "", D = 0, q = -1, $ = i && i.length || 0, B = 0; B < $;) {
                    if (37 === i.charCodeAt(B) && B + 1 < $) {
                        switch (q = q > -1 ? q : 0, i.charCodeAt(B + 1)) {
                            case 100:
                            case 102:
                                if (D >= P || null == c[D]) break;
                                q < B && (C += i.slice(q, B)), C += Number(c[D]), q = B + 2, B++;
                                break;
                            case 105:
                                if (D >= P || null == c[D]) break;
                                q < B && (C += i.slice(q, B)), C += Math.floor(Number(c[D])), q = B + 2, B++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (D >= P || void 0 === c[D]) break;
                                q < B && (C += i.slice(q, B));
                                var J = typeof c[D];
                                if ("string" === J) {
                                    C += "'" + c[D] + "'", q = B + 2, B++;
                                    break
                                }
                                if ("function" === J) {
                                    C += c[D].name || "<anonymous>", q = B + 2, B++;
                                    break
                                }
                                C += v(c[D]), q = B + 2, B++;
                                break;
                            case 115:
                                if (D >= P) break;
                                q < B && (C += i.slice(q, B)), C += String(c[D]), q = B + 2, B++;
                                break;
                            case 37:
                                q < B && (C += i.slice(q, B)), C += "%", q = B + 2, B++, D--
                        }++D
                    }++B
                }
                return -1 === q ? i : (q < $ && (C += i.slice(q)), C)
            }
        },
        90440: function(i, c, l) {
            "use strict";
            let v = l(45503);
            i.exports = pino;
            let w = function() {
                function defd(i) {
                    return void 0 !== i && i
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (i) {
                    return defd(self) || defd(window) || defd(this) || {}
                }
            }().console || {};

            function pino(i) {
                var c;
                (i = i || {}).browser = i.browser || {};
                let l = i.browser.transmit;
                if (l && "function" != typeof l.send) throw Error("pino: transmit option must have a send function");
                let v = i.browser.write || w;
                i.browser.write && (i.browser.asObject = !0);
                let I = i.serializers || {},
                    E = function(i, c) {
                        if (Array.isArray(i)) {
                            let c = i.filter(function(i) {
                                return "!stdSerializers.err" !== i
                            });
                            return c
                        }
                        return !0 === i && Object.keys(c)
                    }(i.browser.serialize, I),
                    P = i.browser.serialize;
                Array.isArray(i.browser.serialize) && i.browser.serialize.indexOf("!stdSerializers.err") > -1 && (P = !1), "function" == typeof v && (v.error = v.fatal = v.warn = v.info = v.debug = v.trace = v), !1 === i.enabled && (i.level = "silent");
                let C = i.level || "info",
                    D = Object.create(v);
                D.log || (D.log = noop), Object.defineProperty(D, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(D, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(i) {
                        if ("silent" !== i && !this.levels.values[i]) throw Error("unknown level " + i);
                        this._level = i, set(q, D, "error", "log"), set(q, D, "fatal", "error"), set(q, D, "warn", "error"), set(q, D, "info", "log"), set(q, D, "debug", "log"), set(q, D, "trace", "log")
                    }
                });
                let q = {
                    transmit: l,
                    serialize: E,
                    asObject: i.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(c = i).timestamp ? c.timestamp : !1 === c.timestamp ? nullTime : epochTime
                };
                return D.levels = pino.levels, D.level = C, D.setMaxListeners = D.getMaxListeners = D.emit = D.addListener = D.on = D.prependListener = D.once = D.prependOnceListener = D.removeListener = D.removeAllListeners = D.listeners = D.listenerCount = D.eventNames = D.write = D.flush = noop, D.serializers = I, D._serialize = E, D._stdErrSerialize = P, D.child = function(c, v) {
                    if (!c) throw Error("missing bindings for child Pino");
                    v = v || {}, E && c.serializers && (v.serializers = c.serializers);
                    let w = v.serializers;
                    if (E && w) {
                        var P = Object.assign({}, I, w),
                            C = !0 === i.browser.serialize ? Object.keys(P) : E;
                        delete c.serializers, applySerializers([c], C, P, this._stdErrSerialize)
                    }

                    function Child(i) {
                        this._childLevel = (0 | i._childLevel) + 1, this.error = bind(i, c, "error"), this.fatal = bind(i, c, "fatal"), this.warn = bind(i, c, "warn"), this.info = bind(i, c, "info"), this.debug = bind(i, c, "debug"), this.trace = bind(i, c, "trace"), P && (this.serializers = P, this._serialize = C), l && (this._logEvent = createLogEventShape([].concat(i._logEvent.bindings, c)))
                    }
                    return Child.prototype = this, new Child(this)
                }, l && (D._logEvent = createLogEventShape()), D
            }

            function set(i, c, l, I) {
                let E = Object.getPrototypeOf(c);
                c[l] = c.levelVal > c.levels.values[l] ? noop : E[l] ? E[l] : w[l] || w[I] || noop,
                    function(i, c, l) {
                        if (i.transmit || c[l] !== noop) {
                            var I;
                            c[l] = (I = c[l], function() {
                                let E = i.timestamp(),
                                    P = Array(arguments.length),
                                    C = Object.getPrototypeOf && Object.getPrototypeOf(this) === w ? w : this;
                                for (var D = 0; D < P.length; D++) P[D] = arguments[D];
                                if (i.serialize && !i.asObject && applySerializers(P, this._serialize, this.serializers, this._stdErrSerialize), i.asObject ? I.call(C, function(i, c, l, w) {
                                        i._serialize && applySerializers(l, i._serialize, i.serializers, i._stdErrSerialize);
                                        let I = l.slice(),
                                            E = I[0],
                                            P = {};
                                        w && (P.time = w), P.level = pino.levels.values[c];
                                        let C = (0 | i._childLevel) + 1;
                                        if (C < 1 && (C = 1), null !== E && "object" == typeof E) {
                                            for (; C-- && "object" == typeof I[0];) Object.assign(P, I.shift());
                                            E = I.length ? v(I.shift(), I) : void 0
                                        } else "string" == typeof E && (E = v(I.shift(), I));
                                        return void 0 !== E && (P.msg = E), P
                                    }(this, l, P, E)) : I.apply(C, P), i.transmit) {
                                    let v = i.transmit.level || c.level,
                                        w = pino.levels.values[v],
                                        I = pino.levels.values[l];
                                    if (I < w) return;
                                    (function(i, c, l) {
                                        let v = c.send,
                                            w = c.ts,
                                            I = c.methodLevel,
                                            E = c.methodValue,
                                            P = c.val,
                                            C = i._logEvent.bindings;
                                        applySerializers(l, i._serialize || Object.keys(i.serializers), i.serializers, void 0 === i._stdErrSerialize || i._stdErrSerialize), i._logEvent.ts = w, i._logEvent.messages = l.filter(function(i) {
                                            return -1 === C.indexOf(i)
                                        }), i._logEvent.level.label = I, i._logEvent.level.value = E, v(I, i._logEvent, P), i._logEvent = createLogEventShape(C)
                                    })(this, {
                                        ts: E,
                                        methodLevel: l,
                                        methodValue: I,
                                        transmitLevel: v,
                                        transmitValue: pino.levels.values[i.transmit.level || c.level],
                                        send: i.transmit.send,
                                        val: c.levelVal
                                    }, P)
                                }
                            })
                        }
                    }(i, c, l)
            }

            function applySerializers(i, c, l, v) {
                for (let w in i)
                    if (v && i[w] instanceof Error) i[w] = pino.stdSerializers.err(i[w]);
                    else if ("object" == typeof i[w] && !Array.isArray(i[w]))
                    for (let v in i[w]) c && c.indexOf(v) > -1 && v in l && (i[w][v] = l[v](i[w][v]))
            }

            function bind(i, c, l) {
                return function() {
                    let v = Array(1 + arguments.length);
                    v[0] = c;
                    for (var w = 1; w < v.length; w++) v[w] = arguments[w - 1];
                    return i[l].apply(this, v)
                }
            }

            function createLogEventShape(i) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: i || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function mock() {
                return {}
            }

            function passthrough(i) {
                return i
            }

            function noop() {}

            function nullTime() {
                return !1
            }

            function epochTime() {
                return Date.now()
            }
            pino.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, pino.stdSerializers = {
                mapHttpRequest: mock,
                mapHttpResponse: mock,
                wrapRequestSerializer: passthrough,
                wrapResponseSerializer: passthrough,
                wrapErrorSerializer: passthrough,
                req: mock,
                res: mock,
                err: function(i) {
                    let c = {
                        type: i.constructor.name,
                        msg: i.message,
                        stack: i.stack
                    };
                    for (let l in i) void 0 === c[l] && (c[l] = i[l]);
                    return c
                }
            }, pino.stdTimeFunctions = Object.assign({}, {
                nullTime,
                epochTime,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);