"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8968], {
        33657: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return q
                }
            });
            /*!
             * paths 3.12.3
             * https://gsap.com
             *
             * Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var o = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
                i = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
                a = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
                l = /(^[#\.][a-z]|[a-y][a-z])/i,
                c = Math.PI / 180,
                u = 180 / Math.PI,
                p = Math.sin,
                f = Math.cos,
                g = Math.abs,
                d = Math.sqrt,
                h = Math.atan2,
                _isString = function(e) {
                    return "string" == typeof e
                },
                _isNumber = function(e) {
                    return "number" == typeof e
                },
                m = {},
                v = {},
                _wrapProgress = function(e) {
                    return Math.round((e + 1e8) % 1 * 1e5) / 1e5 || (e < 0 ? 0 : 1)
                },
                _round = function(e) {
                    return Math.round(1e5 * e) / 1e5 || 0
                },
                _roundPrecise = function(e) {
                    return Math.round(1e10 * e) / 1e10 || 0
                },
                _splitSegment = function(e, t, r, o) {
                    var i = e[t],
                        a = 1 === o ? 6 : subdivideSegment(i, r, o);
                    if (a && a + r + 2 < i.length) return e.splice(t, 0, i.slice(0, r + a + 2)), i.splice(0, r + a), 1
                },
                _getSampleIndex = function(e, t, r) {
                    var o = e.length,
                        i = ~~(r * o);
                    if (e[i] > t) {
                        for (; --i && e[i] > t;);
                        i < 0 && (i = 0)
                    } else
                        for (; e[++i] < t && i < o;);
                    return i < o ? i : o - 1
                },
                _reverseRawPath = function(e, t) {
                    var r = e.length;
                    for (t || e.reverse(); r--;) e[r].reversed || function(e) {
                        var t, r = 0;
                        for (e.reverse(); r < e.length; r += 2) t = e[r], e[r] = e[r + 1], e[r + 1] = t;
                        e.reversed = !e.reversed
                    }(e[r])
                },
                _copyMetaData = function(e, t) {
                    return t.totalLength = e.totalLength, e.samples ? (t.samples = e.samples.slice(0), t.lookup = e.lookup.slice(0), t.minLength = e.minLength, t.resolution = e.resolution) : e.totalPoints && (t.totalPoints = e.totalPoints), t
                },
                _appendOrMerge = function(e, t) {
                    var r = e.length,
                        o = e[r - 1] || [],
                        i = o.length;
                    r && t[0] === o[i - 2] && t[1] === o[i - 1] && (t = o.concat(t.slice(2)), r--), e[r] = t
                };

            function getRawPath(e) {
                var t, r = (e = _isString(e) && l.test(e) && document.querySelector(e) || e).getAttribute ? e : 0;
                return r && (e = e.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}), (t = r._gsPath[e]) && !t._dirty ? t : r._gsPath[e] = stringToRawPath(e)) : e ? _isString(e) ? stringToRawPath(e) : _isNumber(e[0]) ? [e] : e : console.warn("Expecting a <path> element or an SVG path data string")
            }
            var _createPath = function(e, t) {
                    var r, o = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        i = [].slice.call(e.attributes),
                        a = i.length;
                    for (t = "," + t + ","; --a > -1;) r = i[a].nodeName.toLowerCase(), 0 > t.indexOf("," + r + ",") && o.setAttributeNS(null, r, i[a].nodeValue);
                    return o
                },
                x = {
                    rect: "rx,ry,x,y,width,height",
                    circle: "r,cx,cy",
                    ellipse: "rx,ry,cx,cy",
                    line: "x1,x2,y1,y2"
                },
                _attrToObj = function(e, t) {
                    for (var r = t ? t.split(",") : [], o = {}, i = r.length; --i > -1;) o[r[i]] = +e.getAttribute(r[i]) || 0;
                    return o
                };

            function getRotationAtBezierT(e, t, r) {
                var o, i = e[t],
                    a = e[t + 2],
                    l = e[t + 4];
                return i += (a - i) * r, a += (l - a) * r, i += (a - i) * r, o = a + (l + (e[t + 6] - l) * r - a) * r - i, i = e[t + 1], a = e[t + 3], l = e[t + 5], i += (a - i) * r, a += (l - a) * r, i += (a - i) * r, _round(h(a + (l + (e[t + 7] - l) * r - a) * r - i, o) * u)
            }

            function sliceRawPath(e, t, r) {
                var o = Math.max(0, ~~(g((r = void 0 === r ? 1 : _roundPrecise(r) || 0) - (t = _roundPrecise(t) || 0)) - 1e-8)),
                    i = function(e) {
                        for (var t = [], r = 0; r < e.length; r++) t[r] = _copyMetaData(e[r], e[r].slice(0));
                        return _copyMetaData(e, t)
                    }(e);
                if (t > r && (t = 1 - t, r = 1 - r, _reverseRawPath(i), i.totalLength = 0), t < 0 || r < 0) {
                    var a = Math.abs(~~Math.min(t, r)) + 1;
                    t += a, r += a
                }
                i.totalLength || cacheRawPathMeasurements(i);
                var l, c, u, p, f, d, h, x, w = r > 1,
                    b = getProgressData(i, t, m, !0),
                    T = getProgressData(i, r, v),
                    M = T.segment,
                    O = b.segment,
                    k = T.segIndex,
                    A = b.segIndex,
                    L = T.i,
                    R = b.i,
                    E = A === k,
                    F = L === R && E;
                if (w || o) {
                    for (l = k < A || E && L < R || F && T.t < b.t, _splitSegment(i, A, R, b.t) && (A++, !l && (k++, F ? (T.t = (T.t - b.t) / (1 - b.t), L = 0) : E && (L -= R))), 1e-5 > Math.abs(1 - (r - t)) ? k = A - 1 : !T.t && k ? k-- : _splitSegment(i, k, L, T.t) && l && A++, 1 === b.t && (A = (A + 1) % i.length), f = [], h = 1 + (d = i.length) * o, x = A, h += (d - A + k) % d, p = 0; p < h; p++) _appendOrMerge(f, i[x++ % d]);
                    i = f
                } else if (u = 1 === T.t ? 6 : subdivideSegment(M, L, T.t), t !== r)
                    for (c = subdivideSegment(O, R, F ? b.t / T.t : b.t), E && (u += c), M.splice(L + u + 2), (c || R) && O.splice(0, R + c), p = i.length; p--;)(p < A || p > k) && i.splice(p, 1);
                else M.angle = getRotationAtBezierT(M, L + u, 0), L += u, b = M[L], T = M[L + 1], M.length = M.totalLength = 0, M.totalPoints = i.totalPoints = 8, M.push(b, T, b, T, b, T, b, T);
                return i.totalLength = 0, i
            }

            function cacheRawPathMeasurements(e, t) {
                var r, o, i;
                for (i = r = o = 0; i < e.length; i++) e[i].resolution = ~~t || 12, o += e[i].length, r += function(e, t, r) {
                    t = t || 0, e.samples || (e.samples = [], e.lookup = []);
                    var o, i, a, l, c, u, p, f, h, m, v, x, w, b, T, M, O, k = ~~e.resolution || 12,
                        A = 1 / k,
                        L = r ? t + 6 * r + 1 : e.length,
                        R = e[t],
                        E = e[t + 1],
                        F = t ? t / 6 * k : 0,
                        N = e.samples,
                        D = e.lookup,
                        B = (t ? e.minLength : 1e8) || 1e8,
                        z = N[F + r * k - 1],
                        I = t ? N[F - 1] : 0;
                    for (N.length = D.length = 0, i = t + 2; i < L; i += 6) {
                        if (a = e[i + 4] - R, l = e[i + 2] - R, c = e[i] - R, f = e[i + 5] - E, h = e[i + 3] - E, m = e[i + 1] - E, u = p = v = x = 0, .01 > g(a) && .01 > g(f) && g(c) + g(m) < .01) e.length > 8 && (e.splice(i, 6), i -= 6, L -= 6);
                        else
                            for (o = 1; o <= k; o++) w = 1 - (b = A * o), u = p - (p = (b * b * a + 3 * w * (b * l + w * c)) * b), (M = d((v = x - (x = (b * b * f + 3 * w * (b * h + w * m)) * b)) * v + u * u)) < B && (B = M), I += M, N[F++] = I;
                        R += a, E += f
                    }
                    if (z)
                        for (z -= I; F < N.length; F++) N[F] += z;
                    if (N.length && B) {
                        if (e.totalLength = O = N[N.length - 1] || 0, e.minLength = B, O / B < 9999)
                            for (o = 0, M = T = 0; o < O; o += B) D[M++] = N[T] < o ? ++T : T
                    } else e.totalLength = N[0] = 0;
                    return t ? I - N[t / 2 - 1] : I
                }(e[i]);
                return e.totalPoints = o, e.totalLength = r, e
            }

            function subdivideSegment(e, t, r) {
                if (r <= 0 || r >= 1) return 0;
                var o = e[t],
                    i = e[t + 1],
                    a = e[t + 2],
                    l = e[t + 3],
                    c = e[t + 4],
                    u = e[t + 5],
                    p = e[t + 6],
                    f = e[t + 7],
                    g = o + (a - o) * r,
                    d = a + (c - a) * r,
                    h = i + (l - i) * r,
                    m = l + (u - l) * r,
                    v = g + (d - g) * r,
                    x = h + (m - h) * r,
                    w = c + (p - c) * r,
                    b = u + (f - u) * r;
                return d += (w - d) * r, m += (b - m) * r, e.splice(t + 2, 4, _round(g), _round(h), _round(v), _round(x), _round(v + (d - v) * r), _round(x + (m - x) * r), _round(d), _round(m), _round(w), _round(b)), e.samples && e.samples.splice(t / 6 * e.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
            }

            function getProgressData(e, t, r, o) {
                r = r || {}, e.totalLength || cacheRawPathMeasurements(e), (t < 0 || t > 1) && (t = _wrapProgress(t));
                var i, a, l, c, u, p, f, g = 0,
                    d = e[0];
                if (t) {
                    if (1 === t) f = 1, g = e.length - 1, p = (d = e[g]).length - 8;
                    else {
                        if (e.length > 1) {
                            for (l = e.totalLength * t, u = p = 0;
                                (u += e[p++].totalLength) < l;) g = p;
                            t = (l - (c = u - (d = e[g]).totalLength)) / (u - c) || 0
                        }
                        i = d.samples, a = d.resolution, l = d.totalLength * t, c = (p = d.lookup.length ? d.lookup[~~(l / d.minLength)] || 0 : _getSampleIndex(i, l, t)) ? i[p - 1] : 0, (u = i[p]) < l && (c = u, u = i[++p]), f = 1 / a * ((l - c) / (u - c) + p % a), p = 6 * ~~(p / a), o && 1 === f && (p + 6 < d.length ? (p += 6, f = 0) : g + 1 < e.length && (p = f = 0, d = e[++g]))
                    }
                } else f = p = g = 0, d = e[0];
                return r.t = f, r.i = p, r.path = e, r.segment = d, r.segIndex = g, r
            }

            function getPositionOnPath(e, t, r, o) {
                var i, a, l, c, u, p, f, g, d, h = e[0],
                    m = o || {};
                if ((t < 0 || t > 1) && (t = _wrapProgress(t)), h.lookup || cacheRawPathMeasurements(e), e.length > 1) {
                    for (l = e.totalLength * t, u = p = 0;
                        (u += e[p++].totalLength) < l;) h = e[p];
                    t = (l - (c = u - h.totalLength)) / (u - c) || 0
                }
                return i = h.samples, a = h.resolution, l = h.totalLength * t, c = (p = h.lookup.length ? h.lookup[t < 1 ? ~~(l / h.minLength) : h.lookup.length - 1] || 0 : _getSampleIndex(i, l, t)) ? i[p - 1] : 0, (u = i[p]) < l && (c = u, u = i[++p]), d = 1 - (f = 1 / a * ((l - c) / (u - c) + p % a) || 0), g = h[p = 6 * ~~(p / a)], m.x = _round((f * f * (h[p + 6] - g) + 3 * d * (f * (h[p + 4] - g) + d * (h[p + 2] - g))) * f + g), m.y = _round((f * f * (h[p + 7] - (g = h[p + 1])) + 3 * d * (f * (h[p + 5] - g) + d * (h[p + 3] - g))) * f + g), r && (m.angle = h.totalLength ? getRotationAtBezierT(h, p, f >= 1 ? 1 - 1e-9 : f || 1e-9) : h.angle || 0), m
            }

            function transformRawPath(e, t, r, o, i, a, l) {
                for (var c, u, p, f, g, d = e.length; --d > -1;)
                    for (p = 0, u = (c = e[d]).length; p < u; p += 2) f = c[p], g = c[p + 1], c[p] = f * t + g * o + a, c[p + 1] = f * r + g * i + l;
                return e._dirty = 1, e
            }

            function stringToRawPath(e) {
                var t, r, i, l, u, h, m, v, x, w, b, T, M, O, k, A = (e + "").replace(a, function(e) {
                        var t = +e;
                        return t < 1e-4 && t > -.0001 ? 0 : t
                    }).match(o) || [],
                    L = [],
                    R = 0,
                    E = 0,
                    F = 2 / 3,
                    N = A.length,
                    D = 0,
                    B = "ERROR: malformed path: " + e,
                    line = function(e, t, r, o) {
                        w = (r - e) / 3, b = (o - t) / 3, m.push(e + w, t + b, r - w, o - b, r, o)
                    };
                if (!e || !isNaN(A[0]) || isNaN(A[1])) return console.log(B), L;
                for (t = 0; t < N; t++)
                    if (M = u, isNaN(A[t]) ? h = (u = A[t].toUpperCase()) !== A[t] : t--, i = +A[t + 1], l = +A[t + 2], h && (i += R, l += E), t || (v = i, x = l), "M" === u) m && (m.length < 8 ? L.length -= 1 : D += m.length), R = v = i, E = x = l, m = [i, l], L.push(m), t += 2, u = "L";
                    else if ("C" === u) m || (m = [0, 0]), h || (R = E = 0), m.push(i, l, R + 1 * A[t + 3], E + 1 * A[t + 4], R += 1 * A[t + 5], E += 1 * A[t + 6]), t += 6;
                else if ("S" === u) w = R, b = E, ("C" === M || "S" === M) && (w += R - m[m.length - 4], b += E - m[m.length - 3]), h || (R = E = 0), m.push(w, b, i, l, R += 1 * A[t + 3], E += 1 * A[t + 4]), t += 4;
                else if ("Q" === u) w = R + (i - R) * F, b = E + (l - E) * F, h || (R = E = 0), R += 1 * A[t + 3], E += 1 * A[t + 4], m.push(w, b, R + (i - R) * F, E + (l - E) * F, R, E), t += 4;
                else if ("T" === u) w = R - m[m.length - 4], b = E - m[m.length - 3], m.push(R + w, E + b, i + (R + 1.5 * w - i) * F, l + (E + 1.5 * b - l) * F, R = i, E = l), t += 2;
                else if ("H" === u) line(R, E, R = i, E), t += 1;
                else if ("V" === u) line(R, E, R, E = i + (h ? E - R : 0)), t += 1;
                else if ("L" === u || "Z" === u) "Z" === u && (i = v, l = x, m.closed = !0), ("L" === u || g(R - i) > .5 || g(E - l) > .5) && (line(R, E, i, l), "L" === u && (t += 2)), R = i, E = l;
                else if ("A" === u) {
                    if (O = A[t + 4], k = A[t + 5], w = A[t + 6], b = A[t + 7], r = 7, O.length > 1 && (O.length < 3 ? (b = w, w = k, r--) : (b = k, w = O.substr(2), r -= 2), k = O.charAt(1), O = O.charAt(0)), T = function(e, t, r, o, i, a, l, u, h) {
                            if (e !== u || t !== h) {
                                r = g(r), o = g(o);
                                var m = i % 360 * c,
                                    v = f(m),
                                    x = p(m),
                                    w = Math.PI,
                                    b = 2 * w,
                                    T = (e - u) / 2,
                                    M = (t - h) / 2,
                                    O = v * T + x * M,
                                    k = -x * T + v * M,
                                    A = O * O,
                                    L = k * k,
                                    R = A / (r * r) + L / (o * o);
                                R > 1 && (r = d(R) * r, o = d(R) * o);
                                var E = r * r,
                                    F = o * o,
                                    N = (E * F - E * L - F * A) / (E * L + F * A);
                                N < 0 && (N = 0);
                                var D = (a === l ? -1 : 1) * d(N),
                                    B = D * (r * k / o),
                                    z = -(D * (o * O / r)),
                                    I = (e + u) / 2 + (v * B - x * z),
                                    Y = (t + h) / 2 + (x * B + v * z),
                                    V = (O - B) / r,
                                    X = (k - z) / o,
                                    W = (-O - B) / r,
                                    G = (-k - z) / o,
                                    H = V * V + X * X,
                                    j = (X < 0 ? -1 : 1) * Math.acos(V / d(H)),
                                    U = (V * G - X * W < 0 ? -1 : 1) * Math.acos((V * W + X * G) / d(H * (W * W + G * G)));
                                isNaN(U) && (U = w), !l && U > 0 ? U -= b : l && U < 0 && (U += b), j %= b;
                                var q, Z = Math.ceil(g(U %= b) / (b / 4)),
                                    $ = [],
                                    K = U / Z,
                                    Q = 4 / 3 * p(K / 2) / (1 + f(K / 2)),
                                    J = v * r,
                                    ee = x * r,
                                    et = -(x * o),
                                    er = v * o;
                                for (q = 0; q < Z; q++) O = f(i = j + q * K), k = p(i), V = f(i += K), X = p(i), $.push(O - Q * k, k + Q * O, V + Q * X, X - Q * V, V, X);
                                for (q = 0; q < $.length; q += 2) O = $[q], k = $[q + 1], $[q] = O * J + k * et + I, $[q + 1] = O * ee + k * er + Y;
                                return $[q - 2] = u, $[q - 1] = h, $
                            }
                        }(R, E, +A[t + 1], +A[t + 2], +A[t + 3], +O, +k, (h ? R : 0) + 1 * w, (h ? E : 0) + 1 * b), t += r, T)
                        for (r = 0; r < T.length; r++) m.push(T[r]);
                    R = m[m.length - 2], E = m[m.length - 1]
                } else console.log(B);
                return (t = m.length) < 6 ? (L.pop(), t = 0) : m[0] === m[t - 2] && m[1] === m[t - 1] && (m.closed = !0), L.totalPoints = D + t, L
            }

            function pointsToSegment(e, t) {
                1e-4 > g(e[0] - e[2]) && 1e-4 > g(e[1] - e[3]) && (e = e.slice(2));
                var r, o, i, a, l, c, u, p, f, h, m, v, x, w, b, T = e.length - 2,
                    M = +e[0],
                    O = +e[1],
                    k = +e[2],
                    A = +e[3],
                    L = [M, O, M, O],
                    R = k - M,
                    E = A - O,
                    F = .001 > Math.abs(e[T] - M) && .001 > Math.abs(e[T + 1] - O);
                for (F && (e.push(k, A), k = M, A = O, M = e[T - 2], O = e[T - 1], e.unshift(M, O), T += 4), t = t || 0 === t ? +t : 1, i = 2; i < T; i += 2) r = M, o = O, M = k, O = A, k = +e[i + 2], A = +e[i + 3], (M !== k || O !== A) && (a = R, l = E, R = k - M, E = A - O, c = d(a * a + l * l), u = d(R * R + E * E), p = d(Math.pow(R / u + a / c, 2) + Math.pow(E / u + l / c, 2)), f = (c + u) * t * .25 / p, h = M - (M - r) * (c ? f / c : 0), m = M + (k - M) * (u ? f / u : 0), v = M - (h + ((m - h) * (3 * c / (c + u) + .5) / 4 || 0)), x = O - (O - o) * (c ? f / c : 0), w = O + (A - O) * (u ? f / u : 0), b = O - (x + ((w - x) * (3 * c / (c + u) + .5) / 4 || 0)), (M !== r || O !== o) && L.push(_round(h + v), _round(x + b), _round(M), _round(O), _round(m + v), _round(w + b)));
                return M !== k || O !== A || L.length < 4 ? L.push(_round(k), _round(A), _round(k), _round(A)) : L.length -= 2, 2 === L.length ? L.push(M, O, M, O, M, O) : F && (L.splice(0, 6), L.length = L.length - 6), L
            }

            function rawPathToString(e) {
                _isNumber(e[0]) && (e = [e]);
                var t, r, o, i, a = "",
                    l = e.length;
                for (r = 0; r < l; r++) {
                    for (a += "M" + _round((i = e[r])[0]) + "," + _round(i[1]) + " C", t = i.length, o = 2; o < t; o++) a += _round(i[o++]) + "," + _round(i[o++]) + " " + _round(i[o++]) + "," + _round(i[o++]) + " " + _round(i[o++]) + "," + _round(i[o]) + " ";
                    i.closed && (a += "z")
                }
                return a
            }
            /*!
             * matrix 3.12.3
             * https://gsap.com
             *
             * Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var w, b, T, M, O, k, A, L, R, E = "transform",
                F = E + "Origin",
                _setDoc = function(e) {
                    var t = e.ownerDocument || e;
                    for (!(E in e.style) && ("msTransform" in e.style) && (F = (E = "msTransform") + "Origin"); t.parentNode && (t = t.parentNode););
                    if (b = window, A = new B, t) {
                        w = t, T = t.documentElement, M = t.body, (L = w.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                        var r = t.createElement("div"),
                            o = t.createElement("div"),
                            i = t && (t.body || t.firstElementChild);
                        i && i.appendChild && (i.appendChild(r), r.appendChild(o), r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), R = o.offsetParent !== r, i.removeChild(r))
                    }
                    return t
                },
                _forceNonZeroScale = function(e) {
                    for (var t, r; e && e !== M;)(r = e._gsap) && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), t ? t.push(r) : t = [r]), e = e.parentNode;
                    return t
                },
                N = [],
                D = [],
                _svgOwner = function(e) {
                    return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
                },
                _createSibling = function _createSibling(e, t) {
                    if (e.parentNode && (w || _setDoc(e))) {
                        var r = _svgOwner(e),
                            o = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                            i = r ? t ? "rect" : "g" : "div",
                            a = 2 !== t ? 0 : 100,
                            l = 3 === t ? 100 : 0,
                            c = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                            u = w.createElementNS ? w.createElementNS(o.replace(/^https/, "http"), i) : w.createElement(i);
                        return t && (r ? (k || (k = _createSibling(e)), u.setAttribute("width", .01), u.setAttribute("height", .01), u.setAttribute("transform", "translate(" + a + "," + l + ")"), k.appendChild(u)) : (O || ((O = _createSibling(e)).style.cssText = c), u.style.cssText = c + "width:0.1px;height:0.1px;top:" + l + "px;left:" + a + "px", O.appendChild(u))), u
                    }
                    throw "Need document and parent."
                },
                _consolidate = function(e) {
                    for (var t = new B, r = 0; r < e.numberOfItems; r++) t.multiply(e.getItem(r).matrix);
                    return t
                },
                _getCTM = function(e) {
                    var t, r = e.getCTM();
                    return r || (t = e.style[E], e.style[E] = "none", e.appendChild(L), r = L.getCTM(), e.removeChild(L), t ? e.style[E] = t : e.style.removeProperty(E.replace(/([A-Z])/g, "-$1").toLowerCase())), r || A.clone()
                },
                _placeSiblings = function(e, t) {
                    var r, o, i, a, l, c, u = _svgOwner(e),
                        p = e === u,
                        f = u ? N : D,
                        g = e.parentNode;
                    if (e === b) return e;
                    if (f.length || f.push(_createSibling(e, 1), _createSibling(e, 2), _createSibling(e, 3)), r = u ? k : O, u) p ? (a = -(i = _getCTM(e)).e / i.a, l = -i.f / i.d, o = A) : e.getBBox ? (i = e.getBBox(), a = (o = (o = e.transform ? e.transform.baseVal : {}).numberOfItems ? o.numberOfItems > 1 ? _consolidate(o) : o.getItem(0).matrix : A).a * i.x + o.c * i.y, l = o.b * i.x + o.d * i.y) : (o = new B, a = l = 0), t && "g" === e.tagName.toLowerCase() && (a = l = 0), (p ? u : g).appendChild(r), r.setAttribute("transform", "matrix(" + o.a + "," + o.b + "," + o.c + "," + o.d + "," + (o.e + a) + "," + (o.f + l) + ")");
                    else {
                        if (a = l = 0, R)
                            for (o = e.offsetParent, i = e; i && (i = i.parentNode) && i !== o && i.parentNode;)(b.getComputedStyle(i)[E] + "").length > 4 && (a = i.offsetLeft, l = i.offsetTop, i = 0);
                        if ("absolute" !== (c = b.getComputedStyle(e)).position && "fixed" !== c.position)
                            for (o = e.offsetParent; g && g !== o;) a += g.scrollLeft || 0, l += g.scrollTop || 0, g = g.parentNode;
                        (i = r.style).top = e.offsetTop - l + "px", i.left = e.offsetLeft - a + "px", i[E] = c[E], i[F] = c[F], i.position = "fixed" === c.position ? "fixed" : "absolute", e.parentNode.appendChild(r)
                    }
                    return r
                },
                _setMatrix = function(e, t, r, o, i, a, l) {
                    return e.a = t, e.b = r, e.c = o, e.d = i, e.e = a, e.f = l, e
                },
                B = function() {
                    function Matrix2D(e, t, r, o, i, a) {
                        void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === r && (r = 0), void 0 === o && (o = 1), void 0 === i && (i = 0), void 0 === a && (a = 0), _setMatrix(this, e, t, r, o, i, a)
                    }
                    var e = Matrix2D.prototype;
                    return e.inverse = function() {
                        var e = this.a,
                            t = this.b,
                            r = this.c,
                            o = this.d,
                            i = this.e,
                            a = this.f,
                            l = e * o - t * r || 1e-10;
                        return _setMatrix(this, o / l, -t / l, -r / l, e / l, (r * a - o * i) / l, -(e * a - t * i) / l)
                    }, e.multiply = function(e) {
                        var t = this.a,
                            r = this.b,
                            o = this.c,
                            i = this.d,
                            a = this.e,
                            l = this.f,
                            c = e.a,
                            u = e.c,
                            p = e.b,
                            f = e.d,
                            g = e.e,
                            d = e.f;
                        return _setMatrix(this, c * t + p * o, c * r + p * i, u * t + f * o, u * r + f * i, a + g * t + d * o, l + g * r + d * i)
                    }, e.clone = function() {
                        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, e.equals = function(e) {
                        var t = this.a,
                            r = this.b,
                            o = this.c,
                            i = this.d,
                            a = this.e,
                            l = this.f;
                        return t === e.a && r === e.b && o === e.c && i === e.d && a === e.e && l === e.f
                    }, e.apply = function(e, t) {
                        void 0 === t && (t = {});
                        var r = e.x,
                            o = e.y,
                            i = this.a,
                            a = this.b,
                            l = this.c,
                            c = this.d,
                            u = this.e,
                            p = this.f;
                        return t.x = r * i + o * l + u || 0, t.y = r * a + o * c + p || 0, t
                    }, Matrix2D
                }();

            function getGlobalMatrix(e, t, r, o) {
                if (!e || !e.parentNode || (w || _setDoc(e)).documentElement === e) return new B;
                var i = _forceNonZeroScale(e),
                    a = _svgOwner(e) ? N : D,
                    l = _placeSiblings(e, r),
                    c = a[0].getBoundingClientRect(),
                    u = a[1].getBoundingClientRect(),
                    p = a[2].getBoundingClientRect(),
                    f = l.parentNode,
                    g = !o && function _isFixed(e) {
                        return "fixed" === b.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
                    }(e),
                    d = new B((u.left - c.left) / 100, (u.top - c.top) / 100, (p.left - c.left) / 100, (p.top - c.top) / 100, c.left + (g ? 0 : b.pageXOffset || w.scrollLeft || T.scrollLeft || M.scrollLeft || 0), c.top + (g ? 0 : b.pageYOffset || w.scrollTop || T.scrollTop || M.scrollTop || 0));
                if (f.removeChild(l), i)
                    for (c = i.length; c--;)(u = i[c]).scaleX = u.scaleY = 0, u.renderTransform(1, u);
                return t ? d.inverse() : d
            }
            /*!
             * MotionPathPlugin 3.12.3
             * https://gsap.com
             *
             * @license Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var z, I, Y, V, X, W, G = "x,translateX,left,marginLeft,xPercent".split(","),
                H = "y,translateY,top,marginTop,yPercent".split(","),
                j = Math.PI / 180,
                _populateSegmentFromArray = function(e, t, r, o) {
                    for (var i = t.length, a = 2 === o ? 0 : o, l = 0; l < i; l++) e[a] = parseFloat(t[l][r]), 2 === o && (e[a + 1] = 0), a += 2;
                    return e
                },
                _getPropNum = function(e, t, r) {
                    return parseFloat(e._gsap.get(e, t, r || "px")) || 0
                },
                _relativize = function(e) {
                    var t, r = e[0],
                        o = e[1];
                    for (t = 2; t < e.length; t += 2) r = e[t] += r, o = e[t + 1] += o
                },
                _segmentToRawPath = function(e, t, r, o, i, a, l, c, u) {
                    return "cubic" === l.type ? t = [t] : (!1 !== l.fromCurrent && t.unshift(_getPropNum(r, o, c), i ? _getPropNum(r, i, u) : 0), l.relative && _relativize(t), t = [(i ? pointsToSegment : function(e, t) {
                        void 0 === t && (t = 1);
                        for (var r = e[0], o = 0, i = [r, 0], a = 2; a < e.length; a += 2) i.push(r, o, e[a], o = (e[a] - r) * t / 2, r = e[a], -o);
                        return i
                    })(t, l.curviness)]), t = a(_align(t, r, l)), _addDimensionalPropTween(e, r, o, t, "x", c), i && _addDimensionalPropTween(e, r, i, t, "y", u), cacheRawPathMeasurements(t, l.resolution || (0 === l.curviness ? 20 : 12))
                },
                _emptyFunc = function(e) {
                    return e
                },
                U = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
                _originToPoint = function(e, t, r) {
                    var o, i = getGlobalMatrix(e),
                        a = 0,
                        l = 0;
                    return "svg" === (e.tagName + "").toLowerCase() ? (o = e.viewBox.baseVal).width || (o = {
                        width: +e.getAttribute("width"),
                        height: +e.getAttribute("height")
                    }) : o = t && e.getBBox && e.getBBox(), t && "auto" !== t && (a = t.push ? t[0] * (o ? o.width : e.offsetWidth || 0) : t.x, l = t.push ? t[1] * (o ? o.height : e.offsetHeight || 0) : t.y), r.apply(a || l ? i.apply({
                        x: a,
                        y: l
                    }) : {
                        x: i.e,
                        y: i.f
                    })
                },
                _getAlignMatrix = function(e, t, r, o) {
                    var i, a = getGlobalMatrix(e.parentNode, !0, !0),
                        l = a.clone().multiply(getGlobalMatrix(t)),
                        c = _originToPoint(e, r, a),
                        u = _originToPoint(t, o, a),
                        p = u.x,
                        f = u.y;
                    return l.e = l.f = 0, "auto" === o && t.getTotalLength && "path" === t.tagName.toLowerCase() && (i = t.getAttribute("d").match(U) || [], p += (i = l.apply({
                        x: +i[0],
                        y: +i[1]
                    })).x, f += i.y), i && (p -= (i = l.apply(t.getBBox())).x, f -= i.y), l.e = p - c.x, l.f = f - c.y, l
                },
                _align = function(e, t, r) {
                    var o, i, a, l = r.align,
                        c = r.matrix,
                        u = r.offsetX,
                        p = r.offsetY,
                        f = r.alignOrigin,
                        g = e[0][0],
                        d = e[0][1],
                        h = _getPropNum(t, "x"),
                        m = _getPropNum(t, "y");
                    return e && e.length ? (l && ("self" === l || (o = V(l)[0] || t) === t ? transformRawPath(e, 1, 0, 0, 1, h - g, m - d) : (f && !1 !== f[2] ? z.set(t, {
                        transformOrigin: 100 * f[0] + "% " + 100 * f[1] + "%"
                    }) : f = [-(_getPropNum(t, "xPercent") / 100), -(_getPropNum(t, "yPercent") / 100)], a = (i = _getAlignMatrix(t, o, f, "auto")).apply({
                        x: g,
                        y: d
                    }), transformRawPath(e, i.a, i.b, i.c, i.d, h + i.e - (a.x - i.e), m + i.f - (a.y - i.f)))), c ? transformRawPath(e, c.a, c.b, c.c, c.d, c.e, c.f) : (u || p) && transformRawPath(e, 1, 0, 0, 1, u || 0, p || 0), e) : getRawPath("M0,0L0,0")
                },
                _addDimensionalPropTween = function(e, t, r, o, i, a) {
                    var l = t._gsap,
                        c = l.harness,
                        u = c && c.aliases && c.aliases[r],
                        p = u && 0 > u.indexOf(",") ? u : r,
                        f = e._pt = new I(e._pt, t, p, 0, 0, _emptyFunc, 0, l.set(t, p, e));
                    f.u = Y(l.get(t, p, a)) || 0, f.path = o, f.pp = i, e._props.push(p)
                },
                q = {
                    version: "3.12.3",
                    name: "motionPath",
                    register: function(e, t, r) {
                        Y = (z = e).utils.getUnit, V = z.utils.toArray, X = z.core.getStyleSaver, W = z.core.reverting || function() {}, I = r
                    },
                    init: function(e, t, r) {
                        if (!z) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                        "object" == typeof t && !t.style && t.path || (t = {
                            path: t
                        });
                        var o, i, a, l, c = [],
                            u = t,
                            p = u.path,
                            f = u.autoRotate,
                            g = u.unitX,
                            d = u.unitY,
                            h = u.x,
                            m = u.y,
                            v = p[0],
                            x = (o = t.start, i = "end" in t ? t.end : 1, function(e) {
                                return o || 1 !== i ? sliceRawPath(e, o, i) : e
                            });
                        if (this.rawPaths = c, this.target = e, this.tween = r, this.styles = X && X(e, "transform"), (this.rotate = f || 0 === f) && (this.rOffset = parseFloat(f) || 0, this.radians = !!t.useRadians, this.rProp = t.rotation || "rotation", this.rSet = e._gsap.set(e, this.rProp, this), this.ru = Y(e._gsap.get(e, this.rProp)) || 0), !Array.isArray(p) || "closed" in p || "number" == typeof v) cacheRawPathMeasurements(a = x(_align(getRawPath(t.path), e, t)), t.resolution), c.push(a), _addDimensionalPropTween(this, e, t.x || "x", a, "x", t.unitX || "px"), _addDimensionalPropTween(this, e, t.y || "y", a, "y", t.unitY || "px");
                        else {
                            for (l in v) !h && ~G.indexOf(l) ? h = l : !m && ~H.indexOf(l) && (m = l);
                            for (l in h && m ? c.push(_segmentToRawPath(this, _populateSegmentFromArray(_populateSegmentFromArray([], p, h, 0), p, m, 1), e, h, m, x, t, g || Y(p[0][h]), d || Y(p[0][m]))) : h = m = 0, v) l !== h && l !== m && c.push(_segmentToRawPath(this, _populateSegmentFromArray([], p, l, 2), e, l, 0, x, t, Y(p[0][l])))
                        }
                    },
                    render: function(e, t) {
                        var r = t.rawPaths,
                            o = r.length,
                            i = t._pt;
                        if (t.tween._time || !W()) {
                            for (e > 1 ? e = 1 : e < 0 && (e = 0); o--;) getPositionOnPath(r[o], e, !o && t.rotate, r[o]);
                            for (; i;) i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, e), i = i._next;
                            t.rotate && t.rSet(t.target, t.rProp, r[0].angle * (t.radians ? j : 1) + t.rOffset + t.ru, t, e)
                        } else t.styles.revert()
                    },
                    getLength: function(e) {
                        return cacheRawPathMeasurements(getRawPath(e)).totalLength
                    },
                    sliceRawPath: sliceRawPath,
                    getRawPath: getRawPath,
                    pointsToSegment: pointsToSegment,
                    stringToRawPath: stringToRawPath,
                    rawPathToString: rawPathToString,
                    transformRawPath: transformRawPath,
                    getGlobalMatrix: getGlobalMatrix,
                    getPositionOnPath: getPositionOnPath,
                    cacheRawPathMeasurements: cacheRawPathMeasurements,
                    convertToPath: function(e, t) {
                        return V(e).map(function(e) {
                            var r, o, a, l, c, u, p, f, g, d, h, m, v, w, b, T, M, O, k, A, L, R, E;
                            return "path" !== (E = e.tagName.toLowerCase()) && e.getBBox ? (u = _createPath(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), R = _attrToObj(e, x[E]), "rect" === E ? (l = R.rx, c = R.ry || l, o = R.x, a = R.y, d = R.width - 2 * l, h = R.height - 2 * c, l || c ? (m = o + .44771525016900005 * l, b = (w = (v = o + l) + d) + .552284749831 * l, T = w + l, M = a + .44771525016900005 * c, A = (k = (O = a + c) + h) + .552284749831 * c, L = k + c, r = "M" + T + "," + O + " V" + k + " C" + [T, A, b, L, w, L, w - (w - v) / 3, L, v + (w - v) / 3, L, v, L, m, L, o, A, o, k, o, k - (k - O) / 3, o, O + (k - O) / 3, o, O, o, M, m, a, v, a, v + (w - v) / 3, a, w - (w - v) / 3, a, w, a, b, a, T, M, T, O].join(",") + "z") : r = "M" + (o + d) + "," + a + " v" + h + " h" + -d + " v" + -h + " h" + d + "z") : "circle" === E || "ellipse" === E ? ("circle" === E ? f = .552284749831 * (l = c = R.r) : (l = R.rx, f = .552284749831 * (c = R.ry)), o = R.cx, a = R.cy, p = .552284749831 * l, r = "M" + (o + l) + "," + a + " C" + [o + l, a + f, o + p, a + c, o, a + c, o - p, a + c, o - l, a + f, o - l, a, o - l, a - f, o - p, a - c, o, a - c, o + p, a - c, o + l, a - f, o + l, a].join(",") + "z") : "line" === E ? r = "M" + R.x1 + "," + R.y1 + " L" + R.x2 + "," + R.y2 : ("polyline" === E || "polygon" === E) && (r = "M" + (o = (g = (e.getAttribute("points") + "").match(i) || []).shift()) + "," + (a = g.shift()) + " L" + g.join(","), "polygon" === E && (r += "," + o + "," + a + "z")), u.setAttribute("d", rawPathToString(u._gsRawPath = stringToRawPath(r))), !1 !== t && e.parentNode && (e.parentNode.insertBefore(u, e), e.parentNode.removeChild(e)), u) : e
                        })
                    },
                    convertCoordinates: function(e, t, r) {
                        var o = getGlobalMatrix(t, !0, !0).multiply(getGlobalMatrix(e));
                        return r ? o.apply(r) : o
                    },
                    getAlignMatrix: _getAlignMatrix,
                    getRelativePosition: function(e, t, r, o) {
                        var i = _getAlignMatrix(e, t, r, o);
                        return {
                            x: i.e,
                            y: i.f
                        }
                    },
                    arrayToRawPath: function(e, t) {
                        var r = _populateSegmentFromArray(_populateSegmentFromArray([], e, (t = t || {}).x || "x", 0), e, t.y || "y", 1);
                        return t.relative && _relativize(r), ["cubic" === t.type ? r : pointsToSegment(r, t.curviness)]
                    }
                };
            (z || "undefined" != typeof window && (z = window.gsap) && z.registerPlugin && z) && z.registerPlugin(q)
        },
        74686: function(e, t, r) {
            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            r.d(t, {
                Z: function() {
                    return eK
                }
            });
            /*!
             * Observer 3.12.3
             * https://gsap.com
             *
             * @license Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var o, i, a, l, c, u, p, f, g, d, h, m, v, _getGSAP = function() {
                    return o || "undefined" != typeof window && (o = window.gsap) && o.registerPlugin && o
                },
                x = 1,
                w = [],
                b = [],
                T = [],
                M = Date.now,
                _bridge = function(e, t) {
                    return t
                },
                _integrate = function() {
                    var e = g.core,
                        t = e.bridge || {},
                        r = e._scrollers,
                        o = e._proxies;
                    r.push.apply(r, b), o.push.apply(o, T), b = r, T = o, _bridge = function(e, r) {
                        return t[e](r)
                    }
                },
                _getProxyProp = function(e, t) {
                    return ~T.indexOf(e) && T[T.indexOf(e) + 1][t]
                },
                _isViewport = function(e) {
                    return !!~d.indexOf(e)
                },
                _addListener = function(e, t, r, o, i) {
                    return e.addEventListener(t, r, {
                        passive: !o,
                        capture: !!i
                    })
                },
                _removeListener = function(e, t, r, o) {
                    return e.removeEventListener(t, r, !!o)
                },
                O = "scrollLeft",
                k = "scrollTop",
                _onScroll = function() {
                    return h && h.isPressed || b.cache++
                },
                _scrollCacheFunc = function(e, t) {
                    var cachingFunc = function cachingFunc(r) {
                        if (r || 0 === r) {
                            x && (a.history.scrollRestoration = "manual");
                            var o = h && h.isPressed;
                            e(r = cachingFunc.v = Math.round(r) || (h && h.iOS ? 1 : 0)), cachingFunc.cacheID = b.cache, o && _bridge("ss", r)
                        } else(t || b.cache !== cachingFunc.cacheID || _bridge("ref")) && (cachingFunc.cacheID = b.cache, cachingFunc.v = e());
                        return cachingFunc.v + cachingFunc.offset
                    };
                    return cachingFunc.offset = 0, e && cachingFunc
                },
                A = {
                    s: O,
                    p: "left",
                    p2: "Left",
                    os: "right",
                    os2: "Right",
                    d: "width",
                    d2: "Width",
                    a: "x",
                    sc: _scrollCacheFunc(function(e) {
                        return arguments.length ? a.scrollTo(e, L.sc()) : a.pageXOffset || l[O] || c[O] || u[O] || 0
                    })
                },
                L = {
                    s: k,
                    p: "top",
                    p2: "Top",
                    os: "bottom",
                    os2: "Bottom",
                    d: "height",
                    d2: "Height",
                    a: "y",
                    op: A,
                    sc: _scrollCacheFunc(function(e) {
                        return arguments.length ? a.scrollTo(A.sc(), e) : a.pageYOffset || l[k] || c[k] || u[k] || 0
                    })
                },
                _getTarget = function(e, t) {
                    return (t && t._ctx && t._ctx.selector || o.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== o.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
                },
                _getScrollFunc = function(e, t) {
                    var r = t.s,
                        i = t.sc;
                    _isViewport(e) && (e = l.scrollingElement || c);
                    var a = b.indexOf(e),
                        u = i === L.sc ? 1 : 2;
                    ~a || (a = b.push(e) - 1), b[a + u] || _addListener(e, "scroll", _onScroll);
                    var p = b[a + u],
                        f = p || (b[a + u] = _scrollCacheFunc(_getProxyProp(e, r), !0) || (_isViewport(e) ? i : _scrollCacheFunc(function(t) {
                            return arguments.length ? e[r] = t : e[r]
                        })));
                    return f.target = e, p || (f.smooth = "smooth" === o.getProperty(e, "scrollBehavior")), f
                },
                _getVelocityProp = function(e, t, r) {
                    var o = e,
                        i = e,
                        a = M(),
                        l = a,
                        c = t || 50,
                        u = Math.max(500, 3 * c),
                        update = function(e, t) {
                            var u = M();
                            t || u - a > c ? (i = o, o = e, l = a, a = u) : r ? o += e : o = i + (e - i) / (u - l) * (a - l)
                        };
                    return {
                        update: update,
                        reset: function() {
                            i = o = r ? 0 : o, l = a = 0
                        },
                        getVelocity: function(e) {
                            var t = l,
                                c = i,
                                p = M();
                            return (e || 0 === e) && e !== o && update(e), a === l || p - l > u ? 0 : (o + (r ? c : -c)) / ((r ? p : a) - t) * 1e3
                        }
                    }
                },
                _getEvent = function(e, t) {
                    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
                },
                _getAbsoluteMax = function(e) {
                    var t = Math.max.apply(Math, e),
                        r = Math.min.apply(Math, e);
                    return Math.abs(t) >= Math.abs(r) ? t : r
                },
                _setScrollTrigger = function() {
                    (g = o.core.globals().ScrollTrigger) && g.core && _integrate()
                },
                _initCore = function(e) {
                    return o = e || _getGSAP(), !i && o && "undefined" != typeof document && document.body && (a = window, c = (l = document).documentElement, u = l.body, d = [a, l, c, u], o.utils.clamp, v = o.core.context || function() {}, f = "onpointerenter" in u ? "pointer" : "mouse", p = R.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = R.eventTypes = ("ontouchstart" in c ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in c ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                        return x = 0
                    }, 500), _setScrollTrigger(), i = 1), i
                };
            A.op = L, b.cache = 0;
            var R = function() {
                var e;

                function Observer(e) {
                    this.init(e)
                }
                return Observer.prototype.init = function(e) {
                    i || _initCore(o) || console.warn("Please gsap.registerPlugin(Observer)"), g || _setScrollTrigger();
                    var t = e.tolerance,
                        r = e.dragMinimum,
                        d = e.type,
                        x = e.target,
                        b = e.lineHeight,
                        T = e.debounce,
                        O = e.preventDefault,
                        k = e.onStop,
                        R = e.onStopDelay,
                        E = e.ignore,
                        F = e.wheelSpeed,
                        N = e.event,
                        D = e.onDragStart,
                        B = e.onDragEnd,
                        z = e.onDrag,
                        I = e.onPress,
                        Y = e.onRelease,
                        V = e.onRight,
                        X = e.onLeft,
                        W = e.onUp,
                        G = e.onDown,
                        H = e.onChangeX,
                        j = e.onChangeY,
                        U = e.onChange,
                        q = e.onToggleX,
                        Z = e.onToggleY,
                        $ = e.onHover,
                        K = e.onHoverEnd,
                        Q = e.onMove,
                        J = e.ignoreCheck,
                        ee = e.isNormalizer,
                        et = e.onGestureStart,
                        er = e.onGestureEnd,
                        en = e.onWheel,
                        eo = e.onEnable,
                        ei = e.onDisable,
                        ea = e.onClick,
                        es = e.scrollSpeed,
                        el = e.capture,
                        ec = e.allowClicks,
                        eu = e.lockAxis,
                        ep = e.onLockAxis;
                    this.target = x = _getTarget(x) || c, this.vars = e, E && (E = o.utils.toArray(E)), t = t || 1e-9, r = r || 0, F = F || 1, es = es || 1, d = d || "wheel,touch,pointer", T = !1 !== T, b || (b = parseFloat(a.getComputedStyle(u).lineHeight) || 22);
                    var ef, eg, ed, eh, e_, em, ev, ey = this,
                        ex = 0,
                        eS = 0,
                        ew = _getScrollFunc(x, A),
                        eb = _getScrollFunc(x, L),
                        eT = ew(),
                        eP = eb(),
                        eC = ~d.indexOf("touch") && !~d.indexOf("pointer") && "pointerdown" === m[0],
                        eM = _isViewport(x),
                        eO = x.ownerDocument || l,
                        ek = [0, 0, 0],
                        eA = [0, 0, 0],
                        eL = 0,
                        clickCapture = function() {
                            return eL = M()
                        },
                        _ignoreCheck = function(e, t) {
                            return (ey.event = e) && E && ~E.indexOf(e.target) || t && eC && "touch" !== e.pointerType || J && J(e, t)
                        },
                        update = function() {
                            var e = ey.deltaX = _getAbsoluteMax(ek),
                                r = ey.deltaY = _getAbsoluteMax(eA),
                                o = Math.abs(e) >= t,
                                i = Math.abs(r) >= t;
                            U && (o || i) && U(ey, e, r, ek, eA), o && (V && ey.deltaX > 0 && V(ey), X && ey.deltaX < 0 && X(ey), H && H(ey), q && ey.deltaX < 0 != ex < 0 && q(ey), ex = ey.deltaX, ek[0] = ek[1] = ek[2] = 0), i && (G && ey.deltaY > 0 && G(ey), W && ey.deltaY < 0 && W(ey), j && j(ey), Z && ey.deltaY < 0 != eS < 0 && Z(ey), eS = ey.deltaY, eA[0] = eA[1] = eA[2] = 0), (eh || ed) && (Q && Q(ey), ed && (z(ey), ed = !1), eh = !1), em && (em = !1, 1) && ep && ep(ey), e_ && (en(ey), e_ = !1), ef = 0
                        },
                        onDelta = function(e, t, r) {
                            ek[r] += e, eA[r] += t, ey._vx.update(e), ey._vy.update(t), T ? ef || (ef = requestAnimationFrame(update)) : update()
                        },
                        onTouchOrPointerDelta = function(e, t) {
                            eu && !ev && (ey.axis = ev = Math.abs(e) > Math.abs(t) ? "x" : "y", em = !0), "y" !== ev && (ek[2] += e, ey._vx.update(e, !0)), "x" !== ev && (eA[2] += t, ey._vy.update(t, !0)), T ? ef || (ef = requestAnimationFrame(update)) : update()
                        },
                        _onDrag = function(e) {
                            if (!_ignoreCheck(e, 1)) {
                                var t = (e = _getEvent(e, O)).clientX,
                                    o = e.clientY,
                                    i = t - ey.x,
                                    a = o - ey.y,
                                    l = ey.isDragging;
                                ey.x = t, ey.y = o, (l || Math.abs(ey.startX - t) >= r || Math.abs(ey.startY - o) >= r) && (z && (ed = !0), l || (ey.isDragging = !0), onTouchOrPointerDelta(i, a), l || D && D(ey))
                            }
                        },
                        eR = ey.onPress = function(e) {
                            _ignoreCheck(e, 1) || e && e.button || (ey.axis = ev = null, eg.pause(), ey.isPressed = !0, e = _getEvent(e), ex = eS = 0, ey.startX = ey.x = e.clientX, ey.startY = ey.y = e.clientY, ey._vx.reset(), ey._vy.reset(), _addListener(ee ? x : eO, m[1], _onDrag, O, !0), ey.deltaX = ey.deltaY = 0, I && I(ey))
                        },
                        eE = ey.onRelease = function(e) {
                            if (!_ignoreCheck(e, 1)) {
                                _removeListener(ee ? x : eO, m[1], _onDrag, !0);
                                var t = !isNaN(ey.y - ey.startY),
                                    r = ey.isDragging,
                                    i = r && (Math.abs(ey.x - ey.startX) > 3 || Math.abs(ey.y - ey.startY) > 3),
                                    l = _getEvent(e);
                                !i && t && (ey._vx.reset(), ey._vy.reset(), O && ec && o.delayedCall(.08, function() {
                                    if (M() - eL > 300 && !e.defaultPrevented) {
                                        if (e.target.click) e.target.click();
                                        else if (eO.createEvent) {
                                            var t = eO.createEvent("MouseEvents");
                                            t.initMouseEvent("click", !0, !0, a, 1, l.screenX, l.screenY, l.clientX, l.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                                        }
                                    }
                                })), ey.isDragging = ey.isGesturing = ey.isPressed = !1, k && r && !ee && eg.restart(!0), B && r && B(ey), Y && Y(ey, i)
                            }
                        },
                        _onGestureStart = function(e) {
                            return e.touches && e.touches.length > 1 && (ey.isGesturing = !0) && et(e, ey.isDragging)
                        },
                        _onGestureEnd = function() {
                            return ey.isGesturing = !1, er(ey)
                        },
                        onScroll = function(e) {
                            if (!_ignoreCheck(e)) {
                                var t = ew(),
                                    r = eb();
                                onDelta((t - eT) * es, (r - eP) * es, 1), eT = t, eP = r, k && eg.restart(!0)
                            }
                        },
                        _onWheel = function(e) {
                            if (!_ignoreCheck(e)) {
                                e = _getEvent(e, O), en && (e_ = !0);
                                var t = (1 === e.deltaMode ? b : 2 === e.deltaMode ? a.innerHeight : 1) * F;
                                onDelta(e.deltaX * t, e.deltaY * t, 0), k && !ee && eg.restart(!0)
                            }
                        },
                        _onMove = function(e) {
                            if (!_ignoreCheck(e)) {
                                var t = e.clientX,
                                    r = e.clientY,
                                    o = t - ey.x,
                                    i = r - ey.y;
                                ey.x = t, ey.y = r, eh = !0, k && eg.restart(!0), (o || i) && onTouchOrPointerDelta(o, i)
                            }
                        },
                        _onHover = function(e) {
                            ey.event = e, $(ey)
                        },
                        _onHoverEnd = function(e) {
                            ey.event = e, K(ey)
                        },
                        _onClick = function(e) {
                            return _ignoreCheck(e) || _getEvent(e, O) && ea(ey)
                        };
                    eg = ey._dc = o.delayedCall(R || .25, function() {
                        ey._vx.reset(), ey._vy.reset(), eg.pause(), k && k(ey)
                    }).pause(), ey.deltaX = ey.deltaY = 0, ey._vx = _getVelocityProp(0, 50, !0), ey._vy = _getVelocityProp(0, 50, !0), ey.scrollX = ew, ey.scrollY = eb, ey.isDragging = ey.isGesturing = ey.isPressed = !1, v(this), ey.enable = function(e) {
                        return !ey.isEnabled && (_addListener(eM ? eO : x, "scroll", _onScroll), d.indexOf("scroll") >= 0 && _addListener(eM ? eO : x, "scroll", onScroll, O, el), d.indexOf("wheel") >= 0 && _addListener(x, "wheel", _onWheel, O, el), (d.indexOf("touch") >= 0 && p || d.indexOf("pointer") >= 0) && (_addListener(x, m[0], eR, O, el), _addListener(eO, m[2], eE), _addListener(eO, m[3], eE), ec && _addListener(x, "click", clickCapture, !1, !0), ea && _addListener(x, "click", _onClick), et && _addListener(eO, "gesturestart", _onGestureStart), er && _addListener(eO, "gestureend", _onGestureEnd), $ && _addListener(x, f + "enter", _onHover), K && _addListener(x, f + "leave", _onHoverEnd), Q && _addListener(x, f + "move", _onMove)), ey.isEnabled = !0, e && e.type && eR(e), eo && eo(ey)), ey
                    }, ey.disable = function() {
                        ey.isEnabled && (w.filter(function(e) {
                            return e !== ey && _isViewport(e.target)
                        }).length || _removeListener(eM ? eO : x, "scroll", _onScroll), ey.isPressed && (ey._vx.reset(), ey._vy.reset(), _removeListener(ee ? x : eO, m[1], _onDrag, !0)), _removeListener(eM ? eO : x, "scroll", onScroll, el), _removeListener(x, "wheel", _onWheel, el), _removeListener(x, m[0], eR, el), _removeListener(eO, m[2], eE), _removeListener(eO, m[3], eE), _removeListener(x, "click", clickCapture, !0), _removeListener(x, "click", _onClick), _removeListener(eO, "gesturestart", _onGestureStart), _removeListener(eO, "gestureend", _onGestureEnd), _removeListener(x, f + "enter", _onHover), _removeListener(x, f + "leave", _onHoverEnd), _removeListener(x, f + "move", _onMove), ey.isEnabled = ey.isPressed = ey.isDragging = !1, ei && ei(ey))
                    }, ey.kill = ey.revert = function() {
                        ey.disable();
                        var e = w.indexOf(ey);
                        e >= 0 && w.splice(e, 1), h === ey && (h = 0)
                    }, w.push(ey), ee && _isViewport(x) && (h = ey), ey.enable(N)
                }, _defineProperties(Observer.prototype, [{
                    key: "velocityX",
                    get: function() {
                        return this._vx.getVelocity()
                    }
                }, {
                    key: "velocityY",
                    get: function() {
                        return this._vy.getVelocity()
                    }
                }]), e && _defineProperties(Observer, e), Observer
            }();
            R.version = "3.12.3", R.create = function(e) {
                return new R(e)
            }, R.register = _initCore, R.getAll = function() {
                return w.slice()
            }, R.getById = function(e) {
                return w.filter(function(t) {
                    return t.vars.id === e
                })[0]
            }, _getGSAP() && o.registerPlugin(R);
            /*!
             * ScrollTrigger 3.12.3
             * https://gsap.com
             *
             * @license Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://gsap.com/standard-license or for
             * Club GSAP members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var E, F, N, D, B, z, I, Y, V, X, W, G, H, j, U, q, Z, $, K, Q, J, ee, et, er, en, eo, ei, ea, es, el, ec, eu, ep, ef, eg, ed, eh, e_, em = 1,
                ev = Date.now,
                ey = ev(),
                ex = 0,
                eS = 0,
                _parseClamp = function(e, t, r) {
                    var o = _isString(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
                    return r["_" + t + "Clamp"] = o, o ? e.substr(6, e.length - 7) : e
                },
                _keepClamp = function(e, t) {
                    return t && (!_isString(e) || "clamp(" !== e.substr(0, 6)) ? "clamp(" + e + ")" : e
                },
                _pointerDownHandler = function() {
                    return j = 1
                },
                _pointerUpHandler = function() {
                    return j = 0
                },
                _passThrough = function(e) {
                    return e
                },
                _round = function(e) {
                    return Math.round(1e5 * e) / 1e5 || 0
                },
                _windowExists = function() {
                    return "undefined" != typeof window
                },
                ScrollTrigger_getGSAP = function() {
                    return E || _windowExists() && (E = window.gsap) && E.registerPlugin && E
                },
                ScrollTrigger_isViewport = function(e) {
                    return !!~I.indexOf(e)
                },
                _getViewportDimension = function(e) {
                    return ("Height" === e ? ec : N["inner" + e]) || B["client" + e] || z["client" + e]
                },
                _getBoundsFunc = function(e) {
                    return _getProxyProp(e, "getBoundingClientRect") || (ScrollTrigger_isViewport(e) ? function() {
                        return eZ.width = N.innerWidth, eZ.height = ec, eZ
                    } : function() {
                        return _getBounds(e)
                    })
                },
                _getSizeFunc = function(e, t, r) {
                    var o = r.d,
                        i = r.d2,
                        a = r.a;
                    return (a = _getProxyProp(e, "getBoundingClientRect")) ? function() {
                        return a()[o]
                    } : function() {
                        return (t ? _getViewportDimension(i) : e["client" + i]) || 0
                    }
                },
                _maxScroll = function(e, t) {
                    var r = t.s,
                        o = t.d2,
                        i = t.d,
                        a = t.a;
                    return Math.max(0, (a = _getProxyProp(e, r = "scroll" + o)) ? a() - _getBoundsFunc(e)()[i] : ScrollTrigger_isViewport(e) ? (B[r] || z[r]) - _getViewportDimension(o) : e[r] - e["offset" + o])
                },
                _iterateAutoRefresh = function(e, t) {
                    for (var r = 0; r < K.length; r += 3)(!t || ~t.indexOf(K[r + 1])) && e(K[r], K[r + 1], K[r + 2])
                },
                _isString = function(e) {
                    return "string" == typeof e
                },
                _isFunction = function(e) {
                    return "function" == typeof e
                },
                _isNumber = function(e) {
                    return "number" == typeof e
                },
                _isObject = function(e) {
                    return "object" == typeof e
                },
                _endAnimation = function(e, t, r) {
                    return e && e.progress(t ? 0 : 1) && r && e.pause()
                },
                _callback = function(e, t) {
                    if (e.enabled) {
                        var r = e._ctx ? e._ctx.add(function() {
                            return t(e)
                        }) : t(e);
                        r && r.totalTime && (e.callbackAnimation = r)
                    }
                },
                ew = Math.abs,
                eb = "left",
                eT = "right",
                eP = "bottom",
                eC = "width",
                eM = "height",
                eO = "Right",
                ek = "Left",
                eA = "Bottom",
                eL = "padding",
                eR = "margin",
                eE = "Width",
                eF = "Height",
                _getComputedStyle = function(e) {
                    return N.getComputedStyle(e)
                },
                _makePositionable = function(e) {
                    var t = _getComputedStyle(e).position;
                    e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                },
                _setDefaults = function(e, t) {
                    for (var r in t) r in e || (e[r] = t[r]);
                    return e
                },
                _getBounds = function(e, t) {
                    var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== _getComputedStyle(e)[U] && E.to(e, {
                            x: 0,
                            y: 0,
                            xPercent: 0,
                            yPercent: 0,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0
                        }).progress(1),
                        o = e.getBoundingClientRect();
                    return r && r.progress(0).kill(), o
                },
                _getSize = function(e, t) {
                    var r = t.d2;
                    return e["offset" + r] || e["client" + r] || 0
                },
                _getLabelRatioArray = function(e) {
                    var t, r = [],
                        o = e.labels,
                        i = e.duration();
                    for (t in o) r.push(o[t] / i);
                    return r
                },
                _snapDirectional = function(e) {
                    var t = E.utils.snap(e),
                        r = Array.isArray(e) && e.slice(0).sort(function(e, t) {
                            return e - t
                        });
                    return r ? function(e, o, i) {
                        var a;
                        if (void 0 === i && (i = .001), !o) return t(e);
                        if (o > 0) {
                            for (e -= i, a = 0; a < r.length; a++)
                                if (r[a] >= e) return r[a];
                            return r[a - 1]
                        }
                        for (a = r.length, e += i; a--;)
                            if (r[a] <= e) return r[a];
                        return r[0]
                    } : function(r, o, i) {
                        void 0 === i && (i = .001);
                        var a = t(r);
                        return !o || Math.abs(a - r) < i || a - r < 0 == o < 0 ? a : t(o < 0 ? r - e : r + e)
                    }
                },
                _multiListener = function(e, t, r, o) {
                    return r.split(",").forEach(function(r) {
                        return e(t, r, o)
                    })
                },
                ScrollTrigger_addListener = function(e, t, r, o, i) {
                    return e.addEventListener(t, r, {
                        passive: !o,
                        capture: !!i
                    })
                },
                ScrollTrigger_removeListener = function(e, t, r, o) {
                    return e.removeEventListener(t, r, !!o)
                },
                _wheelListener = function(e, t, r) {
                    (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
                },
                eN = {
                    startColor: "green",
                    endColor: "red",
                    indent: 0,
                    fontSize: "16px",
                    fontWeight: "normal"
                },
                eD = {
                    toggleActions: "play",
                    anticipatePin: 0
                },
                eB = {
                    top: 0,
                    left: 0,
                    center: .5,
                    bottom: 1,
                    right: 1
                },
                _offsetToPx = function(e, t) {
                    if (_isString(e)) {
                        var r = e.indexOf("="),
                            o = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                        ~r && (e.indexOf("%") > r && (o *= t / 100), e = e.substr(0, r - 1)), e = o + (e in eB ? eB[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
                    }
                    return e
                },
                _createMarker = function(e, t, r, o, i, a, l, c) {
                    var u = i.startColor,
                        p = i.endColor,
                        f = i.fontSize,
                        g = i.indent,
                        d = i.fontWeight,
                        h = D.createElement("div"),
                        m = ScrollTrigger_isViewport(r) || "fixed" === _getProxyProp(r, "pinType"),
                        v = -1 !== e.indexOf("scroller"),
                        x = m ? z : r,
                        w = -1 !== e.indexOf("start"),
                        b = w ? u : p,
                        T = "border-color:" + b + ";font-size:" + f + ";color:" + b + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return T += "position:" + ((v || c) && m ? "fixed;" : "absolute;"), (v || c || !m) && (T += (o === L ? eT : eP) + ":" + (a + parseFloat(g)) + "px;"), l && (T += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), h._isStart = w, h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), h.style.cssText = T, h.innerText = t || 0 === t ? e + "-" + t : e, x.children[0] ? x.insertBefore(h, x.children[0]) : x.appendChild(h), h._offset = h["offset" + o.op.d2], _positionMarker(h, 0, o, w), h
                },
                _positionMarker = function(e, t, r, o) {
                    var i = {
                            display: "block"
                        },
                        a = r[o ? "os2" : "p2"],
                        l = r[o ? "p2" : "os2"];
                    e._isFlipped = o, i[r.a + "Percent"] = o ? -100 : 0, i[r.a] = o ? "1px" : 0, i["border" + a + eE] = 1, i["border" + l + eE] = 0, i[r.p] = t + "px", E.set(e, i)
                },
                ez = [],
                eI = {},
                _sync = function() {
                    return ev() - ex > 34 && (eg || (eg = requestAnimationFrame(_updateAll)))
                },
                ScrollTrigger_onScroll = function() {
                    et && et.isPressed && !(et.startX > z.clientWidth) || (b.cache++, et ? eg || (eg = requestAnimationFrame(_updateAll)) : _updateAll(), ex || _dispatch("scrollStart"), ex = ev())
                },
                _setBaseDimensions = function() {
                    eo = N.innerWidth, en = N.innerHeight
                },
                _onResize = function() {
                    b.cache++, !(!H && !ee && !D.fullscreenElement && !D.webkitFullscreenElement && (!er || eo !== N.innerWidth || Math.abs(N.innerHeight - en) > .25 * N.innerHeight)) || Y.restart(!0)
                },
                eY = {},
                eV = [],
                _softRefresh = function _softRefresh() {
                    return ScrollTrigger_removeListener(eK, "scrollEnd", _softRefresh) || _refreshAll(!0)
                },
                _dispatch = function(e) {
                    return eY[e] && eY[e].map(function(e) {
                        return e()
                    }) || eV
                },
                eX = [],
                _revertRecorded = function(e) {
                    for (var t = 0; t < eX.length; t += 5)(!e || eX[t + 4] && eX[t + 4].query === e) && (eX[t].style.cssText = eX[t + 1], eX[t].getBBox && eX[t].setAttribute("transform", eX[t + 2] || ""), eX[t + 3].uncache = 1)
                },
                _revertAll = function(e, t) {
                    var r;
                    for (q = 0; q < ez.length; q++)(r = ez[q]) && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
                    eu = !0, t && _revertRecorded(t), t || _dispatch("revert")
                },
                _clearScrollMemory = function(e, t) {
                    b.cache++, (t || !ed) && b.forEach(function(e) {
                        return _isFunction(e) && e.cacheID++ && (e.rec = 0)
                    }), _isString(e) && (N.history.scrollRestoration = es = e)
                },
                eW = 0,
                _queueRefreshAll = function() {
                    if (eh !== eW) {
                        var e = eh = eW;
                        requestAnimationFrame(function() {
                            return e === eW && _refreshAll(!0)
                        })
                    }
                },
                _refresh100vh = function() {
                    z.appendChild(el), ec = !et && el.offsetHeight || N.innerHeight, z.removeChild(el)
                },
                _hideAllMarkers = function(e) {
                    return V(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
                        return t.style.display = e ? "none" : "block"
                    })
                },
                _refreshAll = function(e, t) {
                    if (ex && !e) {
                        ScrollTrigger_addListener(eK, "scrollEnd", _softRefresh);
                        return
                    }
                    _refresh100vh(), ed = eK.isRefreshing = !0, b.forEach(function(e) {
                        return _isFunction(e) && ++e.cacheID && (e.rec = e())
                    });
                    var r = _dispatch("refreshInit");
                    Q && eK.sort(), t || _revertAll(), b.forEach(function(e) {
                        _isFunction(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                    }), ez.slice(0).forEach(function(e) {
                        return e.refresh()
                    }), eu = !1, ez.forEach(function(e) {
                        if (e._subPinOffset && e.pin) {
                            var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                r = e.pin[t];
                            e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
                        }
                    }), ep = 1, _hideAllMarkers(!0), ez.forEach(function(e) {
                        var t = _maxScroll(e.scroller, e._dir),
                            r = "max" === e.vars.end || e._endClamp && e.end > t,
                            o = e._startClamp && e.start >= t;
                        (r || o) && e.setPositions(o ? t - 1 : e.start, r ? Math.max(o ? t : e.start + 1, t) : e.end, !0)
                    }), _hideAllMarkers(!1), ep = 0, r.forEach(function(e) {
                        return e && e.render && e.render(-1)
                    }), b.forEach(function(e) {
                        _isFunction(e) && (e.smooth && requestAnimationFrame(function() {
                            return e.target.style.scrollBehavior = "smooth"
                        }), e.rec && e(e.rec))
                    }), _clearScrollMemory(es, 1), Y.pause(), eW++, ed = 2, _updateAll(2), ez.forEach(function(e) {
                        return _isFunction(e.vars.onRefresh) && e.vars.onRefresh(e)
                    }), ed = eK.isRefreshing = !1, _dispatch("refresh")
                },
                eG = 0,
                eH = 1,
                _updateAll = function(e) {
                    if (2 === e || !ed && !eu) {
                        eK.isUpdating = !0, e_ && e_.update(0);
                        var t = ez.length,
                            r = ev(),
                            o = r - ey >= 50,
                            i = t && ez[0].scroll();
                        if (eH = eG > i ? -1 : 1, ed || (eG = i), o && (ex && !j && r - ex > 200 && (ex = 0, _dispatch("scrollEnd")), W = ey, ey = r), eH < 0) {
                            for (q = t; q-- > 0;) ez[q] && ez[q].update(0, o);
                            eH = 1
                        } else
                            for (q = 0; q < t; q++) ez[q] && ez[q].update(0, o);
                        eK.isUpdating = !1
                    }
                    eg = 0
                },
                ej = [eb, "top", eP, eT, eR + eA, eR + eO, eR + "Top", eR + ek, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
                eU = ej.concat([eC, eM, "boxSizing", "max" + eE, "max" + eF, "position", eR, eL, eL + "Top", eL + eO, eL + eA, eL + ek]),
                _swapPinOut = function(e, t, r) {
                    _setState(r);
                    var o = e._gsap;
                    if (o.spacerIsNative) _setState(o.spacerState);
                    else if (e._gsap.swappedIn) {
                        var i = t.parentNode;
                        i && (i.insertBefore(e, t), i.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                },
                _swapPinIn = function(e, t, r, o) {
                    if (!e._gsap.swappedIn) {
                        for (var i, a = ej.length, l = t.style, c = e.style; a--;) l[i = ej[a]] = r[i];
                        l.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (l.display = "inline-block"), c[eP] = c[eT] = "auto", l.flexBasis = r.flexBasis || "auto", l.overflow = "visible", l.boxSizing = "border-box", l[eC] = _getSize(e, A) + "px", l[eM] = _getSize(e, L) + "px", l[eL] = c[eR] = c.top = c[eb] = "0", _setState(o), c[eC] = c["max" + eE] = r[eC], c[eM] = c["max" + eF] = r[eM], c[eL] = r[eL], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
                    }
                },
                eq = /([A-Z])/g,
                _setState = function(e) {
                    if (e) {
                        var t, r, o = e.t.style,
                            i = e.length,
                            a = 0;
                        for ((e.t._gsap || E.core.getCache(e.t)).uncache = 1; a < i; a += 2) r = e[a + 1], t = e[a], r ? o[t] = r : o[t] && o.removeProperty(t.replace(eq, "-$1").toLowerCase())
                    }
                },
                _getState = function(e) {
                    for (var t = eU.length, r = e.style, o = [], i = 0; i < t; i++) o.push(eU[i], r[eU[i]]);
                    return o.t = e, o
                },
                _copyState = function(e, t, r) {
                    for (var o, i = [], a = e.length, l = r ? 8 : 0; l < a; l += 2) o = e[l], i.push(o, o in t ? t[o] : e[l + 1]);
                    return i.t = e.t, i
                },
                eZ = {
                    left: 0,
                    top: 0
                },
                _parsePosition = function(e, t, r, o, i, a, l, c, u, p, f, g, d, h) {
                    _isFunction(e) && (e = e(c)), _isString(e) && "max" === e.substr(0, 3) && (e = g + ("=" === e.charAt(4) ? _offsetToPx("0" + e.substr(3), r) : 0));
                    var m, v, x, w = d ? d.time() : 0;
                    if (d && d.seek(0), isNaN(e) || (e = +e), _isNumber(e)) d && (e = E.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, g, e)), l && _positionMarker(l, r, o, !0);
                    else {
                        _isFunction(t) && (t = t(c));
                        var b, T, M, O, k = (e || "0").split(" ");
                        (b = _getBounds(x = _getTarget(t, c) || z) || {}).left || b.top || "none" !== _getComputedStyle(x).display || (O = x.style.display, x.style.display = "block", b = _getBounds(x), O ? x.style.display = O : x.style.removeProperty("display")), T = _offsetToPx(k[0], b[o.d]), M = _offsetToPx(k[1] || "0", r), e = b[o.p] - u[o.p] - p + T + i - M, l && _positionMarker(l, M, o, r - M < 20 || l._isStart && M > 20), r -= r - M
                    }
                    if (h && (c[h] = e || -.001, e < 0 && (e = 0)), a) {
                        var A = e + r,
                            L = a._isStart;
                        m = "scroll" + o.d2, _positionMarker(a, A, o, L && A > 20 || !L && (f ? Math.max(z[m], B[m]) : a.parentNode[m]) <= A + 1), f && (u = _getBounds(l), f && (a.style[o.op.p] = u[o.op.p] - o.op.m - a._offset + "px"))
                    }
                    return d && x && (m = _getBounds(x), d.seek(g), v = _getBounds(x), d._caScrollDist = m[o.p] - v[o.p], e = e / d._caScrollDist * g), d && d.seek(w), d ? e : Math.round(e)
                },
                e$ = /(webkit|moz|length|cssText|inset)/i,
                _reparent = function(e, t, r, o) {
                    if (e.parentNode !== t) {
                        var i, a, l = e.style;
                        if (t === z) {
                            for (i in e._stOrig = l.cssText, a = _getComputedStyle(e)) + i || e$.test(i) || !a[i] || "string" != typeof l[i] || "0" === i || (l[i] = a[i]);
                            l.top = r, l.left = o
                        } else l.cssText = e._stOrig;
                        E.core.getCache(e).uncache = 1, t.appendChild(e)
                    }
                },
                _interruptionTracker = function(e, t, r) {
                    var o = t,
                        i = o;
                    return function(t) {
                        var a = Math.round(e());
                        return a !== o && a !== i && Math.abs(a - o) > 3 && Math.abs(a - i) > 3 && (t = a, r && r()), i = o, o = t, t
                    }
                },
                _shiftMarker = function(e, t, r) {
                    var o = {};
                    o[t.p] = "+=" + r, E.set(e, o)
                },
                _getTweenCreator = function(e, t) {
                    var r = _getScrollFunc(e, t),
                        o = "_scroll" + t.p2,
                        getTween = function getTween(t, i, a, l, c) {
                            var u = getTween.tween,
                                p = i.onComplete,
                                f = {};
                            a = a || r();
                            var g = _interruptionTracker(r, a, function() {
                                u.kill(), getTween.tween = 0
                            });
                            return c = l && c || 0, l = l || t - a, u && u.kill(), i[o] = t, i.modifiers = f, f[o] = function() {
                                return g(a + l * u.ratio + c * u.ratio * u.ratio)
                            }, i.onUpdate = function() {
                                b.cache++, getTween.tween && _updateAll()
                            }, i.onComplete = function() {
                                getTween.tween = 0, p && p.call(u)
                            }, u = getTween.tween = E.to(e, i)
                        };
                    return e[o] = r, r.wheelHandler = function() {
                        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0)
                    }, ScrollTrigger_addListener(e, "wheel", r.wheelHandler), eK.isTouch && ScrollTrigger_addListener(e, "touchmove", r.wheelHandler), getTween
                },
                eK = function() {
                    function ScrollTrigger(e, t) {
                        F || ScrollTrigger.register(E) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ea(this), this.init(e, t)
                    }
                    return ScrollTrigger.prototype.init = function(e, t) {
                        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !eS) {
                            this.update = this.refresh = this.kill = _passThrough;
                            return
                        }
                        var r, o, i, a, l, c, u, p, f, g, d, h, m, v, x, w, M, O, k, R, F, I, Y, G, U, Z, $, K, ee, et, er, en, eo, ei, ea, es, el, ec, eu, eg, eh, ey = e = _setDefaults(_isString(e) || _isNumber(e) || e.nodeType ? {
                                trigger: e
                            } : e, eD),
                            eb = ey.onUpdate,
                            eT = ey.toggleClass,
                            eP = ey.id,
                            eB = ey.onToggle,
                            eY = ey.onRefresh,
                            eV = ey.scrub,
                            eX = ey.trigger,
                            eW = ey.pin,
                            eG = ey.pinSpacing,
                            ej = ey.invalidateOnRefresh,
                            eU = ey.anticipatePin,
                            eq = ey.onScrubComplete,
                            e$ = ey.onSnapComplete,
                            eK = ey.once,
                            eQ = ey.snap,
                            eJ = ey.pinReparent,
                            e0 = ey.pinSpacer,
                            e1 = ey.containerAnimation,
                            e2 = ey.fastScrollEnd,
                            e3 = ey.preventOverlaps,
                            e5 = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? A : L,
                            e4 = !eV && 0 !== eV,
                            e8 = _getTarget(e.scroller || N),
                            e6 = E.core.getCache(e8),
                            e9 = ScrollTrigger_isViewport(e8),
                            e7 = ("pinType" in e ? e.pinType : _getProxyProp(e8, "pinType") || e9 && "fixed") === "fixed",
                            te = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                            tt = e4 && e.toggleActions.split(" "),
                            tr = "markers" in e ? e.markers : eD.markers,
                            tn = e9 ? 0 : parseFloat(_getComputedStyle(e8)["border" + e5.p2 + eE]) || 0,
                            to = this,
                            ti = e.onRefreshInit && function() {
                                return e.onRefreshInit(to)
                            },
                            ta = _getSizeFunc(e8, e9, e5),
                            ts = !e9 || ~T.indexOf(e8) ? _getBoundsFunc(e8) : function() {
                                return eZ
                            },
                            tl = 0,
                            tc = 0,
                            tu = 0,
                            tp = _getScrollFunc(e8, e5);
                        if (to._startClamp = to._endClamp = !1, to._dir = e5, eU *= 45, to.scroller = e8, to.scroll = e1 ? e1.time.bind(e1) : tp, c = tp(), to.vars = e, t = t || e.animation, "refreshPriority" in e && (Q = 1, -9999 === e.refreshPriority && (e_ = to)), e6.tweenScroll = e6.tweenScroll || {
                                top: _getTweenCreator(e8, L),
                                left: _getTweenCreator(e8, A)
                            }, to.tweenTo = i = e6.tweenScroll[e5.p], to.scrubDuration = function(e) {
                                (ea = _isNumber(e) && e) ? ei ? ei.duration(e) : ei = E.to(t, {
                                    ease: "expo",
                                    totalProgress: "+=0",
                                    duration: ea,
                                    paused: !0,
                                    onComplete: function() {
                                        return eq && eq(to)
                                    }
                                }): (ei && ei.progress(1).kill(), ei = 0)
                            }, t && (t.vars.lazy = !1, t._initted && !to.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), to.animation = t.pause(), t.scrollTrigger = to, to.scrubDuration(eV), en = 0, eP || (eP = t.vars.id)), eQ && ((!_isObject(eQ) || eQ.push) && (eQ = {
                                snapTo: eQ
                            }), "scrollBehavior" in z.style && E.set(e9 ? [z, B] : e8, {
                                scrollBehavior: "auto"
                            }), b.forEach(function(e) {
                                return _isFunction(e) && e.target === (e9 ? D.scrollingElement || B : e8) && (e.smooth = !1)
                            }), l = _isFunction(eQ.snapTo) ? eQ.snapTo : "labels" === eQ.snapTo ? (r = t, function(e) {
                                return E.utils.snap(_getLabelRatioArray(r), e)
                            }) : "labelsDirectional" === eQ.snapTo ? (o = t, function(e, t) {
                                return _snapDirectional(_getLabelRatioArray(o))(e, t.direction)
                            }) : !1 !== eQ.directional ? function(e, t) {
                                return _snapDirectional(eQ.snapTo)(e, ev() - tc < 500 ? 0 : t.direction)
                            } : E.utils.snap(eQ.snapTo), es = _isObject(es = eQ.duration || {
                                min: .1,
                                max: 2
                            }) ? X(es.min, es.max) : X(es, es), el = E.delayedCall(eQ.delay || ea / 2 || .1, function() {
                                var e = tp(),
                                    r = ev() - tc < 500,
                                    o = i.tween;
                                if ((r || 10 > Math.abs(to.getVelocity())) && !o && !j && tl !== e) {
                                    var a = (e - p) / w,
                                        c = t && !e4 ? t.totalProgress() : a,
                                        u = r ? 0 : (c - eo) / (ev() - W) * 1e3 || 0,
                                        g = E.utils.clamp(-a, 1 - a, ew(u / 2) * u / .185),
                                        d = a + (!1 === eQ.inertia ? 0 : g),
                                        h = X(0, 1, l(d, to)),
                                        m = Math.round(p + h * w),
                                        v = eQ,
                                        x = v.onStart,
                                        b = v.onInterrupt,
                                        T = v.onComplete;
                                    if (e <= f && e >= p && m !== e) {
                                        if (o && !o._initted && o.data <= ew(m - e)) return;
                                        !1 === eQ.inertia && (g = h - a), i(m, {
                                            duration: es(ew(.185 * Math.max(ew(d - c), ew(h - c)) / u / .05 || 0)),
                                            ease: eQ.ease || "power3",
                                            data: ew(m - e),
                                            onInterrupt: function() {
                                                return el.restart(!0) && b && b(to)
                                            },
                                            onComplete: function() {
                                                to.update(), tl = tp(), ei && t && t.progress(h), en = eo = t && !e4 ? t.totalProgress() : to.progress, e$ && e$(to), T && T(to)
                                            }
                                        }, e, g * w, m - e - g * w), x && x(to, i.tween)
                                    }
                                } else to.isActive && tl !== e && el.restart(!0)
                            }).pause()), eP && (eI[eP] = to), (eh = (eX = to.trigger = _getTarget(eX || !0 !== eW && eW)) && eX._gsap && eX._gsap.stRevert) && (eh = eh(to)), eW = !0 === eW ? eX : _getTarget(eW), _isString(eT) && (eT = {
                                targets: eX,
                                className: eT
                            }), eW && (!1 === eG || eG === eR || (eG = (!!eG || !eW.parentNode || !eW.parentNode.style || "flex" !== _getComputedStyle(eW.parentNode).display) && eL), to.pin = eW, (a = E.core.getCache(eW)).spacer ? M = a.pinState : (e0 && ((e0 = _getTarget(e0)) && !e0.nodeType && (e0 = e0.current || e0.nativeElement), a.spacerIsNative = !!e0, e0 && (a.spacerState = _getState(e0))), a.spacer = R = e0 || D.createElement("div"), R.classList.add("pin-spacer"), eP && R.classList.add("pin-spacer-" + eP), a.pinState = M = _getState(eW)), !1 !== e.force3D && E.set(eW, {
                                force3D: !0
                            }), to.spacer = R = a.spacer, Z = (er = _getComputedStyle(eW))[eG + e5.os2], I = E.getProperty(eW), Y = E.quickSetter(eW, e5.a, "px"), _swapPinIn(eW, R, er), k = _getState(eW)), tr) {
                            v = _isObject(tr) ? _setDefaults(tr, eN) : eN, h = _createMarker("scroller-start", eP, e8, e5, v, 0), m = _createMarker("scroller-end", eP, e8, e5, v, 0, h), F = h["offset" + e5.op.d2];
                            var tf = _getTarget(_getProxyProp(e8, "content") || e8);
                            g = this.markerStart = _createMarker("start", eP, tf, e5, v, F, 0, e1), d = this.markerEnd = _createMarker("end", eP, tf, e5, v, F, 0, e1), e1 && (eg = E.quickSetter([g, d], e5.a, "px")), e7 || T.length && !0 === _getProxyProp(e8, "fixedMarkers") || (_makePositionable(e9 ? z : e8), E.set([h, m], {
                                force3D: !0
                            }), K = E.quickSetter(h, e5.a, "px"), et = E.quickSetter(m, e5.a, "px"))
                        }
                        if (e1) {
                            var tg = e1.vars.onUpdate,
                                td = e1.vars.onUpdateParams;
                            e1.eventCallback("onUpdate", function() {
                                to.update(0, 0, 1), tg && tg.apply(e1, td || [])
                            })
                        }
                        if (to.previous = function() {
                                return ez[ez.indexOf(to) - 1]
                            }, to.next = function() {
                                return ez[ez.indexOf(to) + 1]
                            }, to.revert = function(e, r) {
                                if (!r) return to.kill(!0);
                                var o = !1 !== e || !to.enabled,
                                    i = H;
                                o !== to.isReverted && (o && (ec = Math.max(tp(), to.scroll.rec || 0), tu = to.progress, eu = t && t.progress()), g && [g, d, h, m].forEach(function(e) {
                                    return e.style.display = o ? "none" : "block"
                                }), o && (H = to, to.update(o)), !eW || eJ && to.isActive || (o ? _swapPinOut(eW, R, M) : _swapPinIn(eW, R, _getComputedStyle(eW), $)), o || to.update(o), H = i, to.isReverted = o)
                            }, to.refresh = function(r, o, a, l) {
                                if (!H && to.enabled || o) {
                                    if (eW && r && ex) {
                                        ScrollTrigger_addListener(ScrollTrigger, "scrollEnd", _softRefresh);
                                        return
                                    }!ed && ti && ti(to), H = to, i.tween && !a && (i.tween.kill(), i.tween = 0), ei && ei.pause(), ej && t && t.revert({
                                        kill: !1
                                    }).invalidate(), to.isReverted || to.revert(!0, !0), to._subPinOffset = !1;
                                    var v, b, T, F, N, Y, V, X, W, j, q, Z, K, Q = ta(),
                                        et = ts(),
                                        er = e1 ? e1.duration() : _maxScroll(e8, e5),
                                        en = w <= .01,
                                        eo = 0,
                                        ea = l || 0,
                                        es = _isObject(a) ? a.end : e.end,
                                        ef = e.endTrigger || eX,
                                        eg = _isObject(a) ? a.start : e.start || (0 !== e.start && eX ? eW ? "0 0" : "0 100%" : 0),
                                        eh = to.pinnedContainer = e.pinnedContainer && _getTarget(e.pinnedContainer, to),
                                        e_ = eX && Math.max(0, ez.indexOf(to)) || 0,
                                        em = e_;
                                    for (tr && _isObject(a) && (Z = E.getProperty(h, e5.p), K = E.getProperty(m, e5.p)); em--;)(Y = ez[em]).end || Y.refresh(0, 1) || (H = to), (V = Y.pin) && (V === eX || V === eW || V === eh) && !Y.isReverted && (j || (j = []), j.unshift(Y), Y.revert(!0, !0)), Y !== ez[em] && (e_--, em--);
                                    for (_isFunction(eg) && (eg = eg(to)), p = _parsePosition(eg = _parseClamp(eg, "start", to), eX, Q, e5, tp(), g, h, to, et, tn, e7, er, e1, to._startClamp && "_startClamp") || (eW ? -.001 : 0), _isFunction(es) && (es = es(to)), _isString(es) && !es.indexOf("+=") && (~es.indexOf(" ") ? es = (_isString(eg) ? eg.split(" ")[0] : "") + es : (eo = _offsetToPx(es.substr(2), Q), es = _isString(eg) ? eg : (e1 ? E.utils.mapRange(0, e1.duration(), e1.scrollTrigger.start, e1.scrollTrigger.end, p) : p) + eo, ef = eX)), es = _parseClamp(es, "end", to), f = Math.max(p, _parsePosition(es || (ef ? "100% 0" : er), ef, Q, e5, tp() + eo, d, m, to, et, tn, e7, er, e1, to._endClamp && "_endClamp")) || -.001, eo = 0, em = e_; em--;)(V = (Y = ez[em]).pin) && Y.start - Y._pinPush <= p && !e1 && Y.end > 0 && (v = Y.end - (to._startClamp ? Math.max(0, Y.start) : Y.start), (V === eX && Y.start - Y._pinPush < p || V === eh) && isNaN(eg) && (eo += v * (1 - Y.progress)), V === eW && (ea += v));
                                    if (p += eo, f += eo, to._startClamp && (to._startClamp += eo), to._endClamp && !ed && (to._endClamp = f || -.001, f = Math.min(f, _maxScroll(e8, e5))), w = f - p || (p -= .01) && .001, en && (tu = E.utils.clamp(0, 1, E.utils.normalize(p, f, ec))), to._pinPush = ea, g && eo && ((v = {})[e5.a] = "+=" + eo, eh && (v[e5.p] = "-=" + tp()), E.set([g, d], v)), eW && !(ep && to.end >= _maxScroll(e8, e5))) v = _getComputedStyle(eW), F = e5 === L, T = tp(), G = parseFloat(I(e5.a)) + ea, !er && f > 1 && (q = {
                                        style: q = (e9 ? D.scrollingElement || B : e8).style,
                                        value: q["overflow" + e5.a.toUpperCase()]
                                    }, e9 && "scroll" !== _getComputedStyle(z)["overflow" + e5.a.toUpperCase()] && (q.style["overflow" + e5.a.toUpperCase()] = "scroll")), _swapPinIn(eW, R, v), k = _getState(eW), b = _getBounds(eW, !0), X = e7 && _getScrollFunc(e8, F ? A : L)(), eG && (($ = [eG + e5.os2, w + ea + "px"]).t = R, (em = eG === eL ? _getSize(eW, e5) + w + ea : 0) && ($.push(e5.d, em + "px"), "auto" !== R.style.flexBasis && (R.style.flexBasis = em + "px")), _setState($), eh && ez.forEach(function(e) {
                                        e.pin === eh && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                                    }), e7 && tp(ec)), e7 && ((N = {
                                        top: b.top + (F ? T - p : X) + "px",
                                        left: b.left + (F ? X : T - p) + "px",
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    })[eC] = N["max" + eE] = Math.ceil(b.width) + "px", N[eM] = N["max" + eF] = Math.ceil(b.height) + "px", N[eR] = N[eR + "Top"] = N[eR + eO] = N[eR + eA] = N[eR + ek] = "0", N[eL] = v[eL], N[eL + "Top"] = v[eL + "Top"], N[eL + eO] = v[eL + eO], N[eL + eA] = v[eL + eA], N[eL + ek] = v[eL + ek], O = _copyState(M, N, eJ), ed && tp(0)), t ? (W = t._initted, J(1), t.render(t.duration(), !0, !0), U = I(e5.a) - G + w + ea, ee = Math.abs(w - U) > 1, e7 && ee && O.splice(O.length - 2, 2), t.render(0, !0, !0), W || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), J(0)) : U = w, q && (q.value ? q.style["overflow" + e5.a.toUpperCase()] = q.value : q.style.removeProperty("overflow-" + e5.a));
                                    else if (eX && tp() && !e1)
                                        for (b = eX.parentNode; b && b !== z;) b._pinOffset && (p -= b._pinOffset, f -= b._pinOffset), b = b.parentNode;
                                    j && j.forEach(function(e) {
                                        return e.revert(!1, !0)
                                    }), to.start = p, to.end = f, c = u = ed ? ec : tp(), e1 || ed || (c < ec && tp(ec), to.scroll.rec = 0), to.revert(!1, !0), tc = ev(), el && (tl = -1, el.restart(!0)), H = 0, t && e4 && (t._initted || eu) && t.progress() !== eu && t.progress(eu || 0, !0).render(t.time(), !0, !0), (en || tu !== to.progress || e1) && (t && !e4 && t.totalProgress(e1 && p < -.001 && !tu ? E.utils.normalize(p, f, 0) : tu, !0), to.progress = en || (c - p) / w === tu ? 0 : tu), eW && eG && (R._pinOffset = Math.round(to.progress * U)), ei && ei.invalidate(), isNaN(Z) || (Z -= E.getProperty(h, e5.p), K -= E.getProperty(m, e5.p), _shiftMarker(h, e5, Z), _shiftMarker(g, e5, Z - (l || 0)), _shiftMarker(m, e5, K), _shiftMarker(d, e5, K - (l || 0))), en && !ed && to.update(), !eY || ed || x || (x = !0, eY(to), x = !1)
                                }
                            }, to.getVelocity = function() {
                                return (tp() - u) / (ev() - W) * 1e3 || 0
                            }, to.endAnimation = function() {
                                _endAnimation(to.callbackAnimation), t && (ei ? ei.progress(1) : t.paused() ? e4 || _endAnimation(t, to.direction < 0, 1) : _endAnimation(t, t.reversed()))
                            }, to.labelToScroll = function(e) {
                                return t && t.labels && (p || to.refresh() || p) + t.labels[e] / t.duration() * w || 0
                            }, to.getTrailing = function(e) {
                                var t = ez.indexOf(to),
                                    r = to.direction > 0 ? ez.slice(0, t).reverse() : ez.slice(t + 1);
                                return (_isString(e) ? r.filter(function(t) {
                                    return t.vars.preventOverlaps === e
                                }) : r).filter(function(e) {
                                    return to.direction > 0 ? e.end <= p : e.start >= f
                                })
                            }, to.update = function(e, r, o) {
                                if (!e1 || o || e) {
                                    var a, l, g, d, m, v, x, b = !0 === ed ? ec : to.scroll(),
                                        T = e ? 0 : (b - p) / w,
                                        M = T < 0 ? 0 : T > 1 ? 1 : T || 0,
                                        A = to.progress;
                                    if (r && (u = c, c = e1 ? tp() : b, eQ && (eo = en, en = t && !e4 ? t.totalProgress() : M)), eU && !M && eW && !H && !em && ex && p < b + (b - u) / (ev() - W) * eU && (M = 1e-4), M !== A && to.enabled) {
                                        if (d = (m = (a = to.isActive = !!M && M < 1) != (!!A && A < 1)) || !!M != !!A, to.direction = M > A ? 1 : -1, to.progress = M, d && !H && (l = M && !A ? 0 : 1 === M ? 1 : 1 === A ? 2 : 3, e4 && (g = !m && "none" !== tt[l + 1] && tt[l + 1] || tt[l], x = t && ("complete" === g || "reset" === g || g in t))), e3 && (m || x) && (x || eV || !t) && (_isFunction(e3) ? e3(to) : to.getTrailing(e3).forEach(function(e) {
                                                return e.endAnimation()
                                            })), !e4 && (!ei || H || em ? t && t.totalProgress(M, !!(H && (tc || e))) : (ei._dp._time - ei._start !== ei._time && ei.render(ei._dp._time - ei._start), ei.resetTo ? ei.resetTo("totalProgress", M, t._tTime / t._tDur) : (ei.vars.totalProgress = M, ei.invalidate().restart()))), eW) {
                                            if (e && eG && (R.style[eG + e5.os2] = Z), e7) {
                                                if (d) {
                                                    if (v = !e && M > A && f + 1 > b && b + 1 >= _maxScroll(e8, e5), eJ) {
                                                        if (!e && (a || v)) {
                                                            var E = _getBounds(eW, !0),
                                                                F = b - p;
                                                            _reparent(eW, z, E.top + (e5 === L ? F : 0) + "px", E.left + (e5 === L ? 0 : F) + "px")
                                                        } else _reparent(eW, R)
                                                    }
                                                    _setState(a || v ? O : k), ee && M < 1 && a || Y(G + (1 !== M || v ? 0 : U))
                                                }
                                            } else Y(_round(G + U * M))
                                        }!eQ || i.tween || H || em || el.restart(!0), eT && (m || eK && M && (M < 1 || !ef)) && V(eT.targets).forEach(function(e) {
                                            return e.classList[a || eK ? "add" : "remove"](eT.className)
                                        }), !eb || e4 || e || eb(to), d && !H ? (e4 && (x && ("complete" === g ? t.pause().totalProgress(1) : "reset" === g ? t.restart(!0).pause() : "restart" === g ? t.restart(!0) : t[g]()), eb && eb(to)), (m || !ef) && (eB && m && _callback(to, eB), te[l] && _callback(to, te[l]), eK && (1 === M ? to.kill(!1, 1) : te[l] = 0), !m && te[l = 1 === M ? 1 : 3] && _callback(to, te[l])), e2 && !a && Math.abs(to.getVelocity()) > (_isNumber(e2) ? e2 : 2500) && (_endAnimation(to.callbackAnimation), ei ? ei.progress(1) : _endAnimation(t, "reverse" === g ? 1 : !M, 1))) : e4 && eb && !H && eb(to)
                                    }
                                    if (et) {
                                        var N = e1 ? b / e1.duration() * (e1._caScrollDist || 0) : b;
                                        K(N + (h._isFlipped ? 1 : 0)), et(N)
                                    }
                                    eg && eg(-b / e1.duration() * (e1._caScrollDist || 0))
                                }
                            }, to.enable = function(e, t) {
                                to.enabled || (to.enabled = !0, ScrollTrigger_addListener(e8, "resize", _onResize), e9 || ScrollTrigger_addListener(e8, "scroll", ScrollTrigger_onScroll), ti && ScrollTrigger_addListener(ScrollTrigger, "refreshInit", ti), !1 !== e && (to.progress = tu = 0, c = u = tl = tp()), !1 !== t && to.refresh())
                            }, to.getTween = function(e) {
                                return e && i ? i.tween : ei
                            }, to.setPositions = function(e, t, r, o) {
                                if (e1) {
                                    var i = e1.scrollTrigger,
                                        a = e1.duration(),
                                        l = i.end - i.start;
                                    e = i.start + l * e / a, t = i.start + l * t / a
                                }
                                to.refresh(!1, !1, {
                                    start: _keepClamp(e, r && !!to._startClamp),
                                    end: _keepClamp(t, r && !!to._endClamp)
                                }, o), to.update()
                            }, to.adjustPinSpacing = function(e) {
                                if ($ && e) {
                                    var t = $.indexOf(e5.d) + 1;
                                    $[t] = parseFloat($[t]) + e + "px", $[1] = parseFloat($[1]) + e + "px", _setState($)
                                }
                            }, to.disable = function(e, t) {
                                if (to.enabled && (!1 !== e && to.revert(!0, !0), to.enabled = to.isActive = !1, t || ei && ei.pause(), ec = 0, a && (a.uncache = 1), ti && ScrollTrigger_removeListener(ScrollTrigger, "refreshInit", ti), el && (el.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !e9)) {
                                    for (var r = ez.length; r--;)
                                        if (ez[r].scroller === e8 && ez[r] !== to) return;
                                    ScrollTrigger_removeListener(e8, "resize", _onResize), e9 || ScrollTrigger_removeListener(e8, "scroll", ScrollTrigger_onScroll)
                                }
                            }, to.kill = function(r, o) {
                                to.disable(r, o), ei && !o && ei.kill(), eP && delete eI[eP];
                                var i = ez.indexOf(to);
                                i >= 0 && ez.splice(i, 1), i === q && eH > 0 && q--, i = 0, ez.forEach(function(e) {
                                    return e.scroller === to.scroller && (i = 1)
                                }), i || ed || (to.scroll.rec = 0), t && (t.scrollTrigger = null, r && t.revert({
                                    kill: !1
                                }), o || t.kill()), g && [g, d, h, m].forEach(function(e) {
                                    return e.parentNode && e.parentNode.removeChild(e)
                                }), e_ === to && (e_ = 0), eW && (a && (a.uncache = 1), i = 0, ez.forEach(function(e) {
                                    return e.pin === eW && i++
                                }), i || (a.spacer = 0)), e.onKill && e.onKill(to)
                            }, ez.push(to), to.enable(!1, !1), eh && eh(to), t && t.add && !w) {
                            var th = to.update;
                            to.update = function() {
                                to.update = th, p || f || to.refresh()
                            }, E.delayedCall(.01, to.update), w = .01, p = f = 0
                        } else to.refresh();
                        eW && _queueRefreshAll()
                    }, ScrollTrigger.register = function(e) {
                        return F || (E = e || ScrollTrigger_getGSAP(), _windowExists() && window.document && ScrollTrigger.enable(), F = eS), F
                    }, ScrollTrigger.defaults = function(e) {
                        if (e)
                            for (var t in e) eD[t] = e[t];
                        return eD
                    }, ScrollTrigger.disable = function(e, t) {
                        eS = 0, ez.forEach(function(r) {
                            return r[t ? "kill" : "disable"](e)
                        }), ScrollTrigger_removeListener(N, "wheel", ScrollTrigger_onScroll), ScrollTrigger_removeListener(D, "scroll", ScrollTrigger_onScroll), clearInterval(G), ScrollTrigger_removeListener(D, "touchcancel", _passThrough), ScrollTrigger_removeListener(z, "touchstart", _passThrough), _multiListener(ScrollTrigger_removeListener, D, "pointerdown,touchstart,mousedown", _pointerDownHandler), _multiListener(ScrollTrigger_removeListener, D, "pointerup,touchend,mouseup", _pointerUpHandler), Y.kill(), _iterateAutoRefresh(ScrollTrigger_removeListener);
                        for (var r = 0; r < b.length; r += 3) _wheelListener(ScrollTrigger_removeListener, b[r], b[r + 1]), _wheelListener(ScrollTrigger_removeListener, b[r], b[r + 2])
                    }, ScrollTrigger.enable = function() {
                        if (N = window, B = (D = document).documentElement, z = D.body, E && (V = E.utils.toArray, X = E.utils.clamp, ea = E.core.context || _passThrough, J = E.core.suppressOverwrites || _passThrough, es = N.history.scrollRestoration || "auto", eG = N.pageYOffset, E.core.globals("ScrollTrigger", ScrollTrigger), z)) {
                            eS = 1, (el = document.createElement("div")).style.height = "100vh", el.style.position = "absolute", _refresh100vh(),
                                function _rafBugFix() {
                                    return eS && requestAnimationFrame(_rafBugFix)
                                }(), R.register(E), ScrollTrigger.isTouch = R.isTouch, ei = R.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ScrollTrigger_addListener(N, "wheel", ScrollTrigger_onScroll), I = [N, D, B, z], E.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                                    var t, r = E.matchMedia();
                                    for (t in e) r.add(t, e[t]);
                                    return r
                                }, E.addEventListener("matchMediaInit", function() {
                                    return _revertAll()
                                }), E.addEventListener("matchMediaRevert", function() {
                                    return _revertRecorded()
                                }), E.addEventListener("matchMedia", function() {
                                    _refreshAll(0, 1), _dispatch("matchMedia")
                                }), E.matchMedia("(orientation: portrait)", function() {
                                    return _setBaseDimensions(), _setBaseDimensions
                                })) : console.warn("Requires GSAP 3.11.0 or later"), _setBaseDimensions(), ScrollTrigger_addListener(D, "scroll", ScrollTrigger_onScroll);
                            var e, t, r = z.style,
                                o = r.borderTopStyle,
                                i = E.core.Animation.prototype;
                            for (i.revert || Object.defineProperty(i, "revert", {
                                    value: function() {
                                        return this.time(-.01, !0)
                                    }
                                }), r.borderTopStyle = "solid", e = _getBounds(z), L.m = Math.round(e.top + L.sc()) || 0, A.m = Math.round(e.left + A.sc()) || 0, o ? r.borderTopStyle = o : r.removeProperty("border-top-style"), G = setInterval(_sync, 250), E.delayedCall(.5, function() {
                                    return em = 0
                                }), ScrollTrigger_addListener(D, "touchcancel", _passThrough), ScrollTrigger_addListener(z, "touchstart", _passThrough), _multiListener(ScrollTrigger_addListener, D, "pointerdown,touchstart,mousedown", _pointerDownHandler), _multiListener(ScrollTrigger_addListener, D, "pointerup,touchend,mouseup", _pointerUpHandler), U = E.utils.checkPrefix("transform"), eU.push(U), F = ev(), Y = E.delayedCall(.2, _refreshAll).pause(), K = [D, "visibilitychange", function() {
                                    var e = N.innerWidth,
                                        t = N.innerHeight;
                                    D.hidden ? (Z = e, $ = t) : (Z !== e || $ !== t) && _onResize()
                                }, D, "DOMContentLoaded", _refreshAll, N, "load", _refreshAll, N, "resize", _onResize], _iterateAutoRefresh(ScrollTrigger_addListener), ez.forEach(function(e) {
                                    return e.enable(0, 1)
                                }), t = 0; t < b.length; t += 3) _wheelListener(ScrollTrigger_removeListener, b[t], b[t + 1]), _wheelListener(ScrollTrigger_removeListener, b[t], b[t + 2])
                        }
                    }, ScrollTrigger.config = function(e) {
                        "limitCallbacks" in e && (ef = !!e.limitCallbacks);
                        var t = e.syncInterval;
                        t && clearInterval(G) || (G = t) && setInterval(_sync, t), "ignoreMobileResize" in e && (er = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (_iterateAutoRefresh(ScrollTrigger_removeListener) || _iterateAutoRefresh(ScrollTrigger_addListener, e.autoRefreshEvents || "none"), ee = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
                    }, ScrollTrigger.scrollerProxy = function(e, t) {
                        var r = _getTarget(e),
                            o = b.indexOf(r),
                            i = ScrollTrigger_isViewport(r);
                        ~o && b.splice(o, i ? 6 : 2), t && (i ? T.unshift(N, t, z, t, B, t) : T.unshift(r, t))
                    }, ScrollTrigger.clearMatchMedia = function(e) {
                        ez.forEach(function(t) {
                            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
                        })
                    }, ScrollTrigger.isInViewport = function(e, t, r) {
                        var o = (_isString(e) ? _getTarget(e) : e).getBoundingClientRect(),
                            i = o[r ? eC : eM] * t || 0;
                        return r ? o.right - i > 0 && o.left + i < N.innerWidth : o.bottom - i > 0 && o.top + i < N.innerHeight
                    }, ScrollTrigger.positionInViewport = function(e, t, r) {
                        _isString(e) && (e = _getTarget(e));
                        var o = e.getBoundingClientRect(),
                            i = o[r ? eC : eM],
                            a = null == t ? i / 2 : t in eB ? eB[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
                        return r ? (o.left + a) / N.innerWidth : (o.top + a) / N.innerHeight
                    }, ScrollTrigger.killAll = function(e) {
                        if (ez.slice(0).forEach(function(e) {
                                return "ScrollSmoother" !== e.vars.id && e.kill()
                            }), !0 !== e) {
                            var t = eY.killAll || [];
                            eY = {}, t.forEach(function(e) {
                                return e()
                            })
                        }
                    }, ScrollTrigger
                }();
            eK.version = "3.12.3", eK.saveStyles = function(e) {
                return e ? V(e).forEach(function(e) {
                    if (e && e.style) {
                        var t = eX.indexOf(e);
                        t >= 0 && eX.splice(t, 5), eX.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), E.core.getCache(e), ea())
                    }
                }) : eX
            }, eK.revert = function(e, t) {
                return _revertAll(!e, t)
            }, eK.create = function(e, t) {
                return new eK(e, t)
            }, eK.refresh = function(e) {
                return e ? _onResize() : (F || eK.register()) && _refreshAll(!0)
            }, eK.update = function(e) {
                return ++b.cache && _updateAll(!0 === e ? 2 : 0)
            }, eK.clearScrollMemory = _clearScrollMemory, eK.maxScroll = function(e, t) {
                return _maxScroll(e, t ? A : L)
            }, eK.getScrollFunc = function(e, t) {
                return _getScrollFunc(_getTarget(e), t ? A : L)
            }, eK.getById = function(e) {
                return eI[e]
            }, eK.getAll = function() {
                return ez.filter(function(e) {
                    return "ScrollSmoother" !== e.vars.id
                })
            }, eK.isScrolling = function() {
                return !!ex
            }, eK.snapDirectional = _snapDirectional, eK.addEventListener = function(e, t) {
                var r = eY[e] || (eY[e] = []);
                ~r.indexOf(t) || r.push(t)
            }, eK.removeEventListener = function(e, t) {
                var r = eY[e],
                    o = r && r.indexOf(t);
                o >= 0 && r.splice(o, 1)
            }, eK.batch = function(e, t) {
                var r, o = [],
                    i = {},
                    a = t.interval || .016,
                    l = t.batchMax || 1e9,
                    proxyCallback = function(e, t) {
                        var r = [],
                            o = [],
                            i = E.delayedCall(a, function() {
                                t(r, o), r = [], o = []
                            }).pause();
                        return function(e) {
                            r.length || i.restart(!0), r.push(e.trigger), o.push(e), l <= r.length && i.progress(1)
                        }
                    };
                for (r in t) i[r] = "on" === r.substr(0, 2) && _isFunction(t[r]) && "onRefreshInit" !== r ? proxyCallback(r, t[r]) : t[r];
                return _isFunction(l) && (l = l(), ScrollTrigger_addListener(eK, "refresh", function() {
                    return l = t.batchMax()
                })), V(e).forEach(function(e) {
                    var t = {};
                    for (r in i) t[r] = i[r];
                    t.trigger = e, o.push(eK.create(t))
                }), o
            };
            var eQ, _clampScrollAndGetDurationMultiplier = function(e, t, r, o) {
                    return t > o ? e(o) : t < 0 && e(0), r > o ? (o - t) / (r - t) : r < 0 ? t / (t - r) : 1
                },
                _allowNativePanning = function _allowNativePanning(e, t) {
                    !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (R.isTouch ? " pinch-zoom" : "") : "none", e === B && _allowNativePanning(z, t)
                },
                eJ = {
                    auto: 1,
                    scroll: 1
                },
                _nestedScroll = function(e) {
                    var t, r = e.event,
                        o = e.target,
                        i = e.axis,
                        a = (r.changedTouches ? r.changedTouches[0] : r).target,
                        l = a._gsap || E.core.getCache(a),
                        c = ev();
                    if (!l._isScrollT || c - l._isScrollT > 2e3) {
                        for (; a && a !== z && (a.scrollHeight <= a.clientHeight && a.scrollWidth <= a.clientWidth || !(eJ[(t = _getComputedStyle(a)).overflowY] || eJ[t.overflowX]));) a = a.parentNode;
                        l._isScroll = a && a !== o && !ScrollTrigger_isViewport(a) && (eJ[(t = _getComputedStyle(a)).overflowY] || eJ[t.overflowX]), l._isScrollT = c
                    }(l._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
                },
                _inputObserver = function(e, t, r, o) {
                    return R.create({
                        target: e,
                        capture: !0,
                        debounce: !1,
                        lockAxis: !0,
                        type: t,
                        onWheel: o = o && _nestedScroll,
                        onPress: o,
                        onDrag: o,
                        onScroll: o,
                        onEnable: function() {
                            return r && ScrollTrigger_addListener(D, R.eventTypes[0], _captureInputs, !1, !0)
                        },
                        onDisable: function() {
                            return ScrollTrigger_removeListener(D, R.eventTypes[0], _captureInputs, !0)
                        }
                    })
                },
                e0 = /(input|label|select|textarea)/i,
                _captureInputs = function(e) {
                    var t = e0.test(e.target.tagName);
                    (t || eQ) && (e._gsapAllow = !0, eQ = t)
                },
                _getScrollNormalizer = function(e) {
                    _isObject(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
                    var t, r, o, i, a, l, c, u, p = e,
                        f = p.normalizeScrollX,
                        g = p.momentum,
                        d = p.allowNestedScroll,
                        h = p.onRelease,
                        m = _getTarget(e.target) || B,
                        v = E.core.globals().ScrollSmoother,
                        x = v && v.get(),
                        w = ei && (e.content && _getTarget(e.content) || x && !1 !== e.content && !x.smooth() && x.content()),
                        T = _getScrollFunc(m, L),
                        M = _getScrollFunc(m, A),
                        O = 1,
                        k = (R.isTouch && N.visualViewport ? N.visualViewport.scale * N.visualViewport.width : N.outerWidth) / N.innerWidth,
                        F = 0,
                        D = _isFunction(g) ? function() {
                            return g(t)
                        } : function() {
                            return g || 2.8
                        },
                        z = _inputObserver(m, e.type, !0, d),
                        resumeTouchMove = function() {
                            return i = !1
                        },
                        I = _passThrough,
                        Y = _passThrough,
                        updateClamps = function() {
                            r = _maxScroll(m, L), Y = X(ei ? 1 : 0, r), f && (I = X(0, _maxScroll(m, A))), o = eW
                        },
                        removeContentOffset = function() {
                            w._gsap.y = _round(parseFloat(w._gsap.y) + T.offset) + "px", w.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(w._gsap.y) + ", 0, 1)", T.offset = T.cacheID = 0
                        },
                        ignoreDrag = function() {
                            if (i) {
                                requestAnimationFrame(resumeTouchMove);
                                var e = _round(t.deltaY / 2),
                                    r = Y(T.v - e);
                                if (w && r !== T.v + T.offset) {
                                    T.offset = r - T.v;
                                    var o = _round((parseFloat(w && w._gsap.y) || 0) - T.offset);
                                    w.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + o + ", 0, 1)", w._gsap.y = o + "px", T.cacheID = b.cache, _updateAll()
                                }
                                return !0
                            }
                            T.offset && removeContentOffset(), i = !0
                        },
                        onResize = function() {
                            updateClamps(), a.isActive() && a.vars.scrollY > r && (T() > r ? a.progress(1) && T(r) : a.resetTo("scrollY", r))
                        };
                    return w && E.set(w, {
                        y: "+=0"
                    }), e.ignoreCheck = function(e) {
                        return ei && "touchmove" === e.type && ignoreDrag(e) || O > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
                    }, e.onPress = function() {
                        i = !1;
                        var e = O;
                        O = _round((N.visualViewport && N.visualViewport.scale || 1) / k), a.pause(), e !== O && _allowNativePanning(m, O > 1.01 || !f && "x"), l = M(), c = T(), updateClamps(), o = eW
                    }, e.onRelease = e.onGestureStart = function(e, t) {
                        if (T.offset && removeContentOffset(), t) {
                            b.cache++;
                            var o, i, l = D();
                            f && (i = (o = M()) + -(.05 * l * e.velocityX) / .227, l *= _clampScrollAndGetDurationMultiplier(M, o, i, _maxScroll(m, A)), a.vars.scrollX = I(i)), i = (o = T()) + -(.05 * l * e.velocityY) / .227, l *= _clampScrollAndGetDurationMultiplier(T, o, i, _maxScroll(m, L)), a.vars.scrollY = Y(i), a.invalidate().duration(l).play(.01), (ei && a.vars.scrollY >= r || o >= r - 1) && E.to({}, {
                                onUpdate: onResize,
                                duration: l
                            })
                        } else u.restart(!0);
                        h && h(e)
                    }, e.onWheel = function() {
                        a._ts && a.pause(), ev() - F > 1e3 && (o = 0, F = ev())
                    }, e.onChange = function(e, t, r, i, a) {
                        if (eW !== o && updateClamps(), t && f && M(I(i[2] === t ? l + (e.startX - e.x) : M() + t - i[1])), r) {
                            T.offset && removeContentOffset();
                            var u = a[2] === r,
                                p = u ? c + e.startY - e.y : T() + r - a[1],
                                g = Y(p);
                            u && p !== g && (c += g - p), T(g)
                        }(r || t) && _updateAll()
                    }, e.onEnable = function() {
                        _allowNativePanning(m, !f && "x"), eK.addEventListener("refresh", onResize), ScrollTrigger_addListener(N, "resize", onResize), T.smooth && (T.target.style.scrollBehavior = "auto", T.smooth = M.smooth = !1), z.enable()
                    }, e.onDisable = function() {
                        _allowNativePanning(m, !0), ScrollTrigger_removeListener(N, "resize", onResize), eK.removeEventListener("refresh", onResize), z.kill()
                    }, e.lockAxis = !1 !== e.lockAxis, (t = new R(e)).iOS = ei, ei && !T() && T(1), ei && E.ticker.add(_passThrough), u = t._dc, a = E.to(t, {
                        ease: "power4",
                        paused: !0,
                        scrollX: f ? "+=0.1" : "+=0",
                        scrollY: "+=0.1",
                        modifiers: {
                            scrollY: _interruptionTracker(T, T(), function() {
                                return a.pause()
                            })
                        },
                        onUpdate: _updateAll,
                        onComplete: u.vars.onComplete
                    }), t
                };
            eK.sort = function(e) {
                return ez.sort(e || function(e, t) {
                    return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
                })
            }, eK.observe = function(e) {
                return new R(e)
            }, eK.normalizeScroll = function(e) {
                if (void 0 === e) return et;
                if (!0 === e && et) return et.enable();
                if (!1 === e) {
                    et && et.kill(), et = e;
                    return
                }
                var t = e instanceof R ? e : _getScrollNormalizer(e);
                return et && et.target === t.target && et.kill(), ScrollTrigger_isViewport(t.target) && (et = t), t
            }, eK.core = {
                _getVelocityProp: _getVelocityProp,
                _inputObserver: _inputObserver,
                _scrollers: b,
                _proxies: T,
                bridge: {
                    ss: function() {
                        ex || _dispatch("scrollStart"), ex = ev()
                    },
                    ref: function() {
                        return H
                    }
                }
            }, ScrollTrigger_getGSAP() && E.registerPlugin(eK)
        },
        42815: function(e, t, r) {
            r.d(t, {
                ZP: function() {
                    return Y
                }
            });
            var o, i, a, l, c, u, p, f, g, d, h = r(79123),
                m = {},
                v = 180 / Math.PI,
                x = Math.PI / 180,
                w = Math.atan2,
                b = /([A-Z])/g,
                T = /(left|right|width|margin|padding|x)/i,
                M = /[\s,\(]\S/,
                O = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                _renderCSSProp = function(e, t) {
                    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
                },
                _renderPropWithEnd = function(e, t) {
                    return t.set(t.t, t.p, 1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
                },
                _renderCSSPropWithBeginning = function(e, t) {
                    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
                },
                _renderRoundedCSSProp = function(e, t) {
                    var r = t.s + t.c * e;
                    t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
                },
                _renderNonTweeningValue = function(e, t) {
                    return t.set(t.t, t.p, e ? t.e : t.b, t)
                },
                _renderNonTweeningValueOnlyAtEnd = function(e, t) {
                    return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
                },
                _setterCSSStyle = function(e, t, r) {
                    return e.style[t] = r
                },
                _setterCSSProp = function(e, t, r) {
                    return e.style.setProperty(t, r)
                },
                _setterTransform = function(e, t, r) {
                    return e._gsap[t] = r
                },
                _setterScale = function(e, t, r) {
                    return e._gsap.scaleX = e._gsap.scaleY = r
                },
                _setterScaleWithRender = function(e, t, r, o, i) {
                    var a = e._gsap;
                    a.scaleX = a.scaleY = r, a.renderTransform(i, a)
                },
                _setterTransformWithRender = function(e, t, r, o, i) {
                    var a = e._gsap;
                    a[t] = r, a.renderTransform(i, a)
                },
                k = "transform",
                A = k + "Origin",
                _saveStyle = function _saveStyle(e, t) {
                    var r = this,
                        o = this.target,
                        i = o.style,
                        a = o._gsap;
                    if (e in m && i) {
                        if (this.tfm = this.tfm || {}, "transform" === e) return O.transform.split(",").forEach(function(e) {
                            return _saveStyle.call(r, e, t)
                        });
                        if (~(e = O[e] || e).indexOf(",") ? e.split(",").forEach(function(e) {
                                return r.tfm[e] = _get(o, e)
                            }) : this.tfm[e] = a.x ? a[e] : _get(o, e), e === A && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(k) >= 0) return;
                        a.svg && (this.svgo = o.getAttribute("data-svg-origin"), this.props.push(A, t, "")), e = k
                    }(i || t) && this.props.push(e, t, i[e])
                },
                _removeIndependentTransforms = function(e) {
                    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
                },
                _revertStyle = function() {
                    var e, t, r = this.props,
                        o = this.target,
                        i = o.style,
                        a = o._gsap;
                    for (e = 0; e < r.length; e += 3) r[e + 1] ? o[r[e]] = r[e + 2] : r[e + 2] ? i[r[e]] = r[e + 2] : i.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(b, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (t in this.tfm) a[t] = this.tfm[t];
                        a.svg && (a.renderTransform(), o.setAttribute("data-svg-origin", this.svgo || "")), (e = g()) && e.isStart || i[k] || (_removeIndependentTransforms(i), a.zOrigin && i[A] && (i[A] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1)
                    }
                },
                _getStyleSaver = function(e, t) {
                    var r = {
                        target: e,
                        props: [],
                        revert: _revertStyle,
                        save: _saveStyle
                    };
                    return e._gsap || h.p8.core.getCache(e), t && t.split(",").forEach(function(e) {
                        return r.save(e)
                    }), r
                },
                _createElement = function(e, t) {
                    var r = l.createElementNS ? l.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : l.createElement(e);
                    return r && r.style ? r : l.createElement(e)
                },
                _getComputedProperty = function _getComputedProperty(e, t, r) {
                    var o = getComputedStyle(e);
                    return o[t] || o.getPropertyValue(t.replace(b, "-$1").toLowerCase()) || o.getPropertyValue(t) || !r && _getComputedProperty(e, _checkPropPrefix(t) || t, 1) || ""
                },
                L = "O,Moz,ms,Ms,Webkit".split(","),
                _checkPropPrefix = function(e, t, r) {
                    var o = (t || p).style,
                        i = 5;
                    if (e in o && !r) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(L[i] + e in o););
                    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? L[i] : "") + e
                },
                _initCore = function() {
                    "undefined" != typeof window && window.document && (c = (l = window.document).documentElement, p = _createElement("div") || {
                        style: {}
                    }, _createElement("div"), A = (k = _checkPropPrefix(k)) + "Origin", p.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", d = !!_checkPropPrefix("perspective"), g = h.p8.core.reverting, u = 1)
                },
                _getBBoxHack = function _getBBoxHack(e) {
                    var t, r = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        o = this.parentNode,
                        i = this.nextSibling,
                        a = this.style.cssText;
                    if (c.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                        t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = _getBBoxHack
                    } catch (e) {} else this._gsapBBox && (t = this._gsapBBox());
                    return o && (i ? o.insertBefore(this, i) : o.appendChild(this)), c.removeChild(r), this.style.cssText = a, t
                },
                _getAttributeFallbacks = function(e, t) {
                    for (var r = t.length; r--;)
                        if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
                },
                _getBBox = function(e) {
                    var t;
                    try {
                        t = e.getBBox()
                    } catch (r) {
                        t = _getBBoxHack.call(e, !0)
                    }
                    return t && (t.width || t.height) || e.getBBox === _getBBoxHack || (t = _getBBoxHack.call(e, !0)), !t || t.width || t.x || t.y ? t : {
                        x: +_getAttributeFallbacks(e, ["x", "cx", "x1"]) || 0,
                        y: +_getAttributeFallbacks(e, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                _isSVG = function(e) {
                    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e))
                },
                _removeProperty = function(e, t) {
                    if (t) {
                        var r, o = e.style;
                        t in m && t !== A && (t = k), o.removeProperty ? (("ms" === (r = t.substr(0, 2)) || "webkit" === t.substr(0, 6)) && (t = "-" + t), o.removeProperty("--" === r ? t : t.replace(b, "-$1").toLowerCase())) : o.removeAttribute(t)
                    }
                },
                _addNonTweeningPT = function(e, t, r, o, i, a) {
                    var l = new h.Fo(e._pt, t, r, 0, 1, a ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
                    return e._pt = l, l.b = o, l.e = i, e._props.push(r), l
                },
                R = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                E = {
                    grid: 1,
                    flex: 1
                },
                _convertToUnit = function _convertToUnit(e, t, r, o) {
                    var i, a, c, u, f = parseFloat(r) || 0,
                        g = (r + "").trim().substr((f + "").length) || "px",
                        d = p.style,
                        v = T.test(t),
                        x = "svg" === e.tagName.toLowerCase(),
                        w = (x ? "client" : "offset") + (v ? "Width" : "Height"),
                        b = "px" === o,
                        M = "%" === o;
                    if (o === g || !f || R[o] || R[g]) return f;
                    if ("px" === g || b || (f = _convertToUnit(e, t, r, "px")), u = e.getCTM && _isSVG(e), (M || "%" === g) && (m[t] || ~t.indexOf("adius"))) return i = u ? e.getBBox()[v ? "width" : "height"] : e[w], (0, h.Pr)(M ? f / i * 100 : f / 100 * i);
                    if (d[v ? "width" : "height"] = 100 + (b ? g : o), a = ~t.indexOf("adius") || "em" === o && e.appendChild && !x ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== l && a.appendChild || (a = l.body), (c = a._gsap) && M && c.width && v && c.time === h.xr.time && !c.uncache) return (0, h.Pr)(f / c.width * 100);
                    if (M && ("height" === t || "width" === t)) {
                        var O = e.style[t];
                        e.style[t] = 100 + o, i = e[w], O ? e.style[t] = O : _removeProperty(e, t)
                    } else(M || "%" === g) && !E[_getComputedProperty(a, "display")] && (d.position = _getComputedProperty(e, "position")), a === e && (d.position = "static"), a.appendChild(p), i = p[w], a.removeChild(p), d.position = "absolute";
                    return v && M && ((c = (0, h.DY)(a)).time = h.xr.time, c.width = a[w]), (0, h.Pr)(b ? i * f / 100 : i && f ? 100 / i * f : 0)
                },
                _get = function(e, t, r, o) {
                    var i;
                    return u || _initCore(), t in O && "transform" !== t && ~(t = O[t]).indexOf(",") && (t = t.split(",")[0]), m[t] && "transform" !== t ? (i = _parseTransform(e, o), i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : _firstTwoOnly(_getComputedProperty(e, A)) + " " + i.zOrigin + "px") : (!(i = e.style[t]) || "auto" === i || o || ~(i + "").indexOf("calc(")) && (i = N[t] && N[t](e, t, r) || _getComputedProperty(e, t) || (0, h.Ok)(e, t) || ("opacity" === t ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? _convertToUnit(e, t, i, r) + r : i
                },
                _tweenComplexCSSString = function(e, t, r, o) {
                    if (!r || "none" === r) {
                        var i = _checkPropPrefix(t, e, 1),
                            a = i && _getComputedProperty(e, i, 1);
                        a && a !== r ? (t = i, r = a) : "borderColor" === t && (r = _getComputedProperty(e, "borderTopColor"))
                    }
                    var l, c, u, p, f, g, d, m, v, x, w, b = new h.Fo(this._pt, e.style, t, 0, 1, h.Ks),
                        T = 0,
                        M = 0;
                    if (b.b = r, b.e = o, r += "", "auto" == (o += "") && (g = e.style[t], e.style[t] = o, o = _getComputedProperty(e, t) || o, g ? e.style[t] = g : _removeProperty(e, t)), l = [r, o], (0, h.kr)(l), r = l[0], o = l[1], u = r.match(h.d4) || [], (o.match(h.d4) || []).length) {
                        for (; c = h.d4.exec(o);) d = c[0], v = o.substring(T, c.index), f ? f = (f + 1) % 5 : ("rgba(" === v.substr(-5) || "hsla(" === v.substr(-5)) && (f = 1), d !== (g = u[M++] || "") && (p = parseFloat(g) || 0, w = g.substr((p + "").length), "=" === d.charAt(1) && (d = (0, h.cy)(p, d) + w), m = parseFloat(d), x = d.substr((m + "").length), T = h.d4.lastIndex - x.length, x || (x = x || h.Fc.units[t] || w, T !== o.length || (o += x, b.e += x)), w !== x && (p = _convertToUnit(e, t, g, x) || 0), b._pt = {
                            _next: b._pt,
                            p: v || 1 === M ? v : ",",
                            s: p,
                            c: m - p,
                            m: f && f < 4 || "zIndex" === t ? Math.round : 0
                        });
                        b.c = T < o.length ? o.substring(T, o.length) : ""
                    } else b.r = "display" === t && "none" === o ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
                    return h.bQ.test(o) && (b.e = 0), this._pt = b, b
                },
                F = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                _convertKeywordsToPercentages = function(e) {
                    var t = e.split(" "),
                        r = t[0],
                        o = t[1] || "50%";
                    return ("top" === r || "bottom" === r || "left" === o || "right" === o) && (e = r, r = o, o = e), t[0] = F[r] || r, t[1] = F[o] || o, t.join(" ")
                },
                _renderClearProps = function(e, t) {
                    if (t.tween && t.tween._time === t.tween._dur) {
                        var r, o, i, a = t.t,
                            l = a.style,
                            c = t.u,
                            u = a._gsap;
                        if ("all" === c || !0 === c) l.cssText = "", o = 1;
                        else
                            for (i = (c = c.split(",")).length; --i > -1;) m[r = c[i]] && (o = 1, r = "transformOrigin" === r ? A : k), _removeProperty(a, r);
                        o && (_removeProperty(a, k), u && (u.svg && a.removeAttribute("transform"), _parseTransform(a, 1), u.uncache = 1, _removeIndependentTransforms(l)))
                    }
                },
                N = {
                    clearProps: function(e, t, r, o, i) {
                        if ("isFromStart" !== i.data) {
                            var a = e._pt = new h.Fo(e._pt, t, r, 0, 0, _renderClearProps);
                            return a.u = o, a.pr = -10, a.tween = i, e._props.push(r), 1
                        }
                    }
                },
                D = [1, 0, 0, 1, 0, 0],
                B = {},
                _isNullTransform = function(e) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
                },
                _getComputedTransformMatrixAsArray = function(e) {
                    var t = _getComputedProperty(e, k);
                    return _isNullTransform(t) ? D : t.substr(7).match(h.SI).map(h.Pr)
                },
                _getMatrix = function(e, t) {
                    var r, o, i, a, l = e._gsap || (0, h.DY)(e),
                        u = e.style,
                        p = _getComputedTransformMatrixAsArray(e);
                    return l.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (p = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? D : p : (p !== D || e.offsetParent || e === c || l.svg || (i = u.display, u.display = "block", (r = e.parentNode) && e.offsetParent || (a = 1, o = e.nextElementSibling, c.appendChild(e)), p = _getComputedTransformMatrixAsArray(e), i ? u.display = i : _removeProperty(e, "display"), a && (o ? r.insertBefore(e, o) : r ? r.appendChild(e) : c.removeChild(e))), t && p.length > 6 ? [p[0], p[1], p[4], p[5], p[12], p[13]] : p)
                },
                _applySVGOrigin = function(e, t, r, o, i, a) {
                    var l, c, u, p, f = e._gsap,
                        g = i || _getMatrix(e, !0),
                        d = f.xOrigin || 0,
                        h = f.yOrigin || 0,
                        m = f.xOffset || 0,
                        v = f.yOffset || 0,
                        x = g[0],
                        w = g[1],
                        b = g[2],
                        T = g[3],
                        M = g[4],
                        O = g[5],
                        k = t.split(" "),
                        L = parseFloat(k[0]) || 0,
                        R = parseFloat(k[1]) || 0;
                    r ? g !== D && (c = x * T - w * b) && (u = L * (T / c) + R * (-b / c) + (b * O - T * M) / c, p = L * (-w / c) + R * (x / c) - (x * O - w * M) / c, L = u, R = p) : (L = (l = _getBBox(e)).x + (~k[0].indexOf("%") ? L / 100 * l.width : L), R = l.y + (~(k[1] || k[0]).indexOf("%") ? R / 100 * l.height : R), "xOrigin" in f || !L && !R || (L -= l.x, R -= l.y)), o || !1 !== o && f.smooth ? (M = L - d, O = R - h, f.xOffset = m + (M * x + O * b) - M, f.yOffset = v + (M * w + O * T) - O) : f.xOffset = f.yOffset = 0, f.xOrigin = L, f.yOrigin = R, f.smooth = !!o, f.origin = t, f.originIsAbsolute = !!r, e.style[A] = "0px 0px", a && (_addNonTweeningPT(a, f, "xOrigin", d, L), _addNonTweeningPT(a, f, "yOrigin", h, R), _addNonTweeningPT(a, f, "xOffset", m, f.xOffset), _addNonTweeningPT(a, f, "yOffset", v, f.yOffset)), e.setAttribute("data-svg-origin", L + " " + R)
                },
                _parseTransform = function(e, t) {
                    var r = e._gsap || new h.l1(e);
                    if ("x" in r && !t && !r.uncache) return r;
                    var o, i, a, l, c, u, p, f, g, m, b, T, M, O, L, R, E, F, N, B, z, I, Y, V, X, W, G, H, j, U, q, Z, $ = e.style,
                        K = r.scaleX < 0,
                        Q = getComputedStyle(e),
                        J = _getComputedProperty(e, A) || "0";
                    return o = i = a = u = p = f = g = m = b = 0, l = c = 1, r.svg = !!(e.getCTM && _isSVG(e)), Q.translate && (("none" !== Q.translate || "none" !== Q.scale || "none" !== Q.rotate) && ($[k] = ("none" !== Q.translate ? "translate3d(" + (Q.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== Q.rotate ? "rotate(" + Q.rotate + ") " : "") + ("none" !== Q.scale ? "scale(" + Q.scale.split(" ").join(",") + ") " : "") + ("none" !== Q[k] ? Q[k] : "")), $.scale = $.rotate = $.translate = "none"), O = _getMatrix(e, r.svg), r.svg && (r.uncache ? (X = e.getBBox(), J = r.xOrigin - X.x + "px " + (r.yOrigin - X.y) + "px", V = "") : V = !t && e.getAttribute("data-svg-origin"), _applySVGOrigin(e, V || J, !!V || r.originIsAbsolute, !1 !== r.smooth, O)), T = r.xOrigin || 0, M = r.yOrigin || 0, O !== D && (F = O[0], N = O[1], B = O[2], z = O[3], o = I = O[4], i = Y = O[5], 6 === O.length ? (l = Math.sqrt(F * F + N * N), c = Math.sqrt(z * z + B * B), u = F || N ? w(N, F) * v : 0, (g = B || z ? w(B, z) * v + u : 0) && (c *= Math.abs(Math.cos(g * x))), r.svg && (o -= T - (T * F + M * B), i -= M - (T * N + M * z))) : (Z = O[6], U = O[7], G = O[8], H = O[9], j = O[10], q = O[11], o = O[12], i = O[13], a = O[14], p = (L = w(Z, j)) * v, L && (V = I * (R = Math.cos(-L)) + G * (E = Math.sin(-L)), X = Y * R + H * E, W = Z * R + j * E, G = -(I * E) + G * R, H = -(Y * E) + H * R, j = -(Z * E) + j * R, q = -(U * E) + q * R, I = V, Y = X, Z = W), f = (L = w(-B, j)) * v, L && (V = F * (R = Math.cos(-L)) - G * (E = Math.sin(-L)), X = N * R - H * E, W = B * R - j * E, q = z * E + q * R, F = V, N = X, B = W), u = (L = w(N, F)) * v, L && (V = F * (R = Math.cos(L)) + N * (E = Math.sin(L)), X = I * R + Y * E, N = N * R - F * E, Y = Y * R - I * E, F = V, I = X), p && Math.abs(p) + Math.abs(u) > 359.9 && (p = u = 0, f = 180 - f), l = (0, h.Pr)(Math.sqrt(F * F + N * N + B * B)), c = (0, h.Pr)(Math.sqrt(Y * Y + Z * Z)), g = Math.abs(L = w(I, Y)) > 2e-4 ? L * v : 0, b = q ? 1 / (q < 0 ? -q : q) : 0), r.svg && (V = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(e, k)), V && e.setAttribute("transform", V))), Math.abs(g) > 90 && 270 > Math.abs(g) && (K ? (l *= -1, g += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (c *= -1, g += g <= 0 ? 180 : -180)), t = t || r.uncache, r.x = o - ((r.xPercent = o && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-o) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = i - ((r.yPercent = i && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = (0, h.Pr)(l), r.scaleY = (0, h.Pr)(c), r.rotation = (0, h.Pr)(u) + "deg", r.rotationX = (0, h.Pr)(p) + "deg", r.rotationY = (0, h.Pr)(f) + "deg", r.skewX = g + "deg", r.skewY = m + "deg", r.transformPerspective = b + "px", (r.zOrigin = parseFloat(J.split(" ")[2]) || !t && r.zOrigin || 0) && ($[A] = _firstTwoOnly(J)), r.svg || (r.xOffset = r.yOffset = 0), r.force3D = h.Fc.force3D, r.renderTransform = r.svg ? _renderSVGTransforms : d ? _renderCSSTransforms : _renderNon3DTransforms, r.uncache = 0, r
                },
                _firstTwoOnly = function(e) {
                    return (e = e.split(" "))[0] + " " + e[1]
                },
                _addPxTranslate = function(e, t, r) {
                    var o = (0, h.Wy)(t);
                    return (0, h.Pr)(parseFloat(t) + parseFloat(_convertToUnit(e, "x", r + "px", o))) + o
                },
                _renderNon3DTransforms = function(e, t) {
                    t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, _renderCSSTransforms(e, t)
                },
                z = "0deg",
                _renderCSSTransforms = function(e, t) {
                    var r = t || this,
                        o = r.xPercent,
                        i = r.yPercent,
                        a = r.x,
                        l = r.y,
                        c = r.z,
                        u = r.rotation,
                        p = r.rotationY,
                        f = r.rotationX,
                        g = r.skewX,
                        d = r.skewY,
                        h = r.scaleX,
                        m = r.scaleY,
                        v = r.transformPerspective,
                        w = r.force3D,
                        b = r.target,
                        T = r.zOrigin,
                        M = "",
                        O = "auto" === w && e && 1 !== e || !0 === w;
                    if (T && (f !== z || p !== z)) {
                        var A, L = parseFloat(p) * x,
                            R = Math.sin(L),
                            E = Math.cos(L);
                        a = _addPxTranslate(b, a, -(R * (A = Math.cos(L = parseFloat(f) * x)) * T)), l = _addPxTranslate(b, l, -(-Math.sin(L) * T)), c = _addPxTranslate(b, c, -(E * A * T) + T)
                    }
                    "0px" !== v && (M += "perspective(" + v + ") "), (o || i) && (M += "translate(" + o + "%, " + i + "%) "), (O || "0px" !== a || "0px" !== l || "0px" !== c) && (M += "0px" !== c || O ? "translate3d(" + a + ", " + l + ", " + c + ") " : "translate(" + a + ", " + l + ") "), u !== z && (M += "rotate(" + u + ") "), p !== z && (M += "rotateY(" + p + ") "), f !== z && (M += "rotateX(" + f + ") "), (g !== z || d !== z) && (M += "skew(" + g + ", " + d + ") "), (1 !== h || 1 !== m) && (M += "scale(" + h + ", " + m + ") "), b.style[k] = M || "translate(0, 0)"
                },
                _renderSVGTransforms = function(e, t) {
                    var r, o, i, a, l, c = t || this,
                        u = c.xPercent,
                        p = c.yPercent,
                        f = c.x,
                        g = c.y,
                        d = c.rotation,
                        m = c.skewX,
                        v = c.skewY,
                        w = c.scaleX,
                        b = c.scaleY,
                        T = c.target,
                        M = c.xOrigin,
                        O = c.yOrigin,
                        A = c.xOffset,
                        L = c.yOffset,
                        R = c.forceCSS,
                        E = parseFloat(f),
                        F = parseFloat(g);
                    d = parseFloat(d), m = parseFloat(m), (v = parseFloat(v)) && (m += v = parseFloat(v), d += v), d || m ? (d *= x, m *= x, r = Math.cos(d) * w, o = Math.sin(d) * w, i = -(Math.sin(d - m) * b), a = Math.cos(d - m) * b, m && (v *= x, i *= l = Math.sqrt(1 + (l = Math.tan(m - v)) * l), a *= l, v && (r *= l = Math.sqrt(1 + (l = Math.tan(v)) * l), o *= l)), r = (0, h.Pr)(r), o = (0, h.Pr)(o), i = (0, h.Pr)(i), a = (0, h.Pr)(a)) : (r = w, a = b, o = i = 0), (E && !~(f + "").indexOf("px") || F && !~(g + "").indexOf("px")) && (E = _convertToUnit(T, "x", f, "px"), F = _convertToUnit(T, "y", g, "px")), (M || O || A || L) && (E = (0, h.Pr)(E + M - (M * r + O * i) + A), F = (0, h.Pr)(F + O - (M * o + O * a) + L)), (u || p) && (l = T.getBBox(), E = (0, h.Pr)(E + u / 100 * l.width), F = (0, h.Pr)(F + p / 100 * l.height)), l = "matrix(" + r + "," + o + "," + i + "," + a + "," + E + "," + F + ")", T.setAttribute("transform", l), R && (T.style[k] = l)
                },
                _addRotationalPropTween = function(e, t, r, o, i) {
                    var a, l, c = (0, h.r9)(i),
                        u = parseFloat(i) * (c && ~i.indexOf("rad") ? v : 1) - o,
                        p = o + u + "deg";
                    return c && ("short" === (a = i.split("_")[1]) && (u %= 360) != u % 180 && (u += u < 0 ? 360 : -360), "cw" === a && u < 0 ? u = (u + 36e9) % 360 - 360 * ~~(u / 360) : "ccw" === a && u > 0 && (u = (u - 36e9) % 360 - 360 * ~~(u / 360))), e._pt = l = new h.Fo(e._pt, t, r, o, u, _renderPropWithEnd), l.e = p, l.u = "deg", e._props.push(r), l
                },
                _assign = function(e, t) {
                    for (var r in t) e[r] = t[r];
                    return e
                },
                _addRawTransformPTs = function(e, t, r) {
                    var o, i, a, l, c, u, p, f = _assign({}, r._gsap),
                        g = r.style;
                    for (i in f.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), g[k] = t, o = _parseTransform(r, 1), _removeProperty(r, k), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[k], g[k] = t, o = _parseTransform(r, 1), g[k] = a), m)(a = f[i]) !== (l = o[i]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) && (c = (0, h.Wy)(a) !== (p = (0, h.Wy)(l)) ? _convertToUnit(r, i, a, p) : parseFloat(a), u = parseFloat(l), e._pt = new h.Fo(e._pt, o, i, c, u - c, _renderCSSProp), e._pt.u = p || 0, e._props.push(i));
                    _assign(o, f)
                };
            (0, h.fS)("padding,margin,Width,Radius", function(e, t) {
                var r = "Right",
                    o = "Bottom",
                    i = "Left",
                    a = (t < 3 ? ["Top", r, o, i] : ["Top" + i, "Top" + r, o + r, o + i]).map(function(r) {
                        return t < 2 ? e + r : "border" + r + e
                    });
                N[t > 1 ? "border" + e : e] = function(e, t, r, o, i) {
                    var l, c;
                    if (arguments.length < 4) return 5 === (c = (l = a.map(function(t) {
                        return _get(e, t, r)
                    })).join(" ")).split(l[0]).length ? l[0] : c;
                    l = (o + "").split(" "), c = {}, a.forEach(function(e, t) {
                        return c[e] = l[t] = l[t] || l[(t - 1) / 2 | 0]
                    }), e.init(t, c, i)
                }
            });
            var I = {
                name: "css",
                register: _initCore,
                targetTest: function(e) {
                    return e.style && e.nodeType
                },
                init: function(e, t, r, o, i) {
                    var a, l, c, p, f, g, d, v, x, w, b, T, L, R, E, F, D = this._props,
                        z = e.style,
                        I = r.vars.startAt;
                    for (d in u || _initCore(), this.styles = this.styles || _getStyleSaver(e), F = this.styles.props, this.tween = r, t)
                        if ("autoRound" !== d && (l = t[d], !(h.$i[d] && (0, h.if)(d, t, r, o, e, i)))) {
                            if (f = typeof l, g = N[d], "function" === f && (f = typeof(l = l.call(r, o, e, i))), "string" === f && ~l.indexOf("random(") && (l = (0, h.UI)(l)), g) g(this, e, d, l, r) && (E = 1);
                            else if ("--" === d.substr(0, 2)) a = (getComputedStyle(e).getPropertyValue(d) + "").trim(), l += "", h.GN.lastIndex = 0, h.GN.test(a) || (v = (0, h.Wy)(a), x = (0, h.Wy)(l)), x ? v !== x && (a = _convertToUnit(e, d, a, x) + x) : v && (l += v), this.add(z, "setProperty", a, l, o, i, 0, 0, d), D.push(d), F.push(d, 0, z[d]);
                            else if ("undefined" !== f) {
                                if (I && d in I ? (a = "function" == typeof I[d] ? I[d].call(r, o, e, i) : I[d], (0, h.r9)(a) && ~a.indexOf("random(") && (a = (0, h.UI)(a)), (0, h.Wy)(a + "") || "auto" === a || (a += h.Fc.units[d] || (0, h.Wy)(_get(e, d)) || ""), "=" === (a + "").charAt(1) && (a = _get(e, d))) : a = _get(e, d), p = parseFloat(a), (w = "string" === f && "=" === l.charAt(1) && l.substr(0, 2)) && (l = l.substr(2)), c = parseFloat(l), d in O && ("autoAlpha" === d && (1 === p && "hidden" === _get(e, "visibility") && c && (p = 0), F.push("visibility", 0, z.visibility), _addNonTweeningPT(this, z, "visibility", p ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), "scale" !== d && "transform" !== d && ~(d = O[d]).indexOf(",") && (d = d.split(",")[0])), b = d in m) {
                                    if (this.styles.save(d), T || ((L = e._gsap).renderTransform && !t.parseTransform || _parseTransform(e, t.parseTransform), R = !1 !== t.smoothOrigin && L.smooth, (T = this._pt = new h.Fo(this._pt, z, k, 0, 1, L.renderTransform, L, 0, -1)).dep = 1), "scale" === d) this._pt = new h.Fo(this._pt, L, "scaleY", L.scaleY, (w ? (0, h.cy)(L.scaleY, w + c) : c) - L.scaleY || 0, _renderCSSProp), this._pt.u = 0, D.push("scaleY", d), d += "X";
                                    else if ("transformOrigin" === d) {
                                        F.push(A, 0, z[A]), l = _convertKeywordsToPercentages(l), L.svg ? _applySVGOrigin(e, l, 0, R, 0, this) : ((x = parseFloat(l.split(" ")[2]) || 0) !== L.zOrigin && _addNonTweeningPT(this, L, "zOrigin", L.zOrigin, x), _addNonTweeningPT(this, z, d, _firstTwoOnly(a), _firstTwoOnly(l)));
                                        continue
                                    } else if ("svgOrigin" === d) {
                                        _applySVGOrigin(e, l, 1, R, 0, this);
                                        continue
                                    } else if (d in B) {
                                        _addRotationalPropTween(this, L, d, p, w ? (0, h.cy)(p, w + l) : l);
                                        continue
                                    } else if ("smoothOrigin" === d) {
                                        _addNonTweeningPT(this, L, "smooth", L.smooth, l);
                                        continue
                                    } else if ("force3D" === d) {
                                        L[d] = l;
                                        continue
                                    } else if ("transform" === d) {
                                        _addRawTransformPTs(this, l, e);
                                        continue
                                    }
                                } else d in z || (d = _checkPropPrefix(d) || d);
                                if (b || (c || 0 === c) && (p || 0 === p) && !M.test(l) && d in z) v = (a + "").substr((p + "").length), c || (c = 0), x = (0, h.Wy)(l) || (d in h.Fc.units ? h.Fc.units[d] : v), v !== x && (p = _convertToUnit(e, d, a, x)), this._pt = new h.Fo(this._pt, b ? L : z, d, p, (w ? (0, h.cy)(p, w + c) : c) - p, b || "px" !== x && "zIndex" !== d || !1 === t.autoRound ? _renderCSSProp : _renderRoundedCSSProp), this._pt.u = x || 0, v !== x && "%" !== x && (this._pt.b = a, this._pt.r = _renderCSSPropWithBeginning);
                                else if (d in z) _tweenComplexCSSString.call(this, e, d, a, w ? w + l : l);
                                else if (d in e) this.add(e, d, a || e[d], w ? w + l : l, o, i);
                                else if ("parseTransform" !== d) {
                                    (0, h.lC)(d, l);
                                    continue
                                }
                                b || (d in z ? F.push(d, 0, z[d]) : F.push(d, 1, a || e[d])), D.push(d)
                            }
                        }
                    E && (0, h.JV)(this)
                },
                render: function(e, t) {
                    if (t.tween._time || !g())
                        for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
                    else t.styles.revert()
                },
                get: _get,
                aliases: O,
                getSetter: function(e, t, r) {
                    var o = O[t];
                    return o && 0 > o.indexOf(",") && (t = o), t in m && t !== A && (e._gsap.x || _get(e, "x")) ? r && f === r ? "scale" === t ? _setterScale : _setterTransform : (f = r || {}, "scale" === t ? _setterScaleWithRender : _setterTransformWithRender) : e.style && !(0, h.m2)(e.style[t]) ? _setterCSSStyle : ~t.indexOf("-") ? _setterCSSProp : (0, h.S5)(e, t)
                },
                core: {
                    _removeProperty: _removeProperty,
                    _getMatrix: _getMatrix
                }
            };
            h.p8.utils.checkPrefix = _checkPropPrefix, h.p8.core.getStyleSaver = _getStyleSaver, o = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent", i = "rotation,rotationX,rotationY,skewX,skewY", a = (0, h.fS)(o + "," + i + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
                m[e] = 1
            }), (0, h.fS)(i, function(e) {
                h.Fc.units[e] = "deg", B[e] = 1
            }), O[a[13]] = o + "," + i, (0, h.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
                var t = e.split(":");
                O[t[1]] = a[t[0]]
            }), (0, h.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
                h.Fc.units[e] = "px"
            }), h.p8.registerPlugin(I);
            var Y = h.p8.registerPlugin(I) || h.p8;
            Y.core.Tween
        },
        74521: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return R
                }
            });
            var o, i = r(2265),
                a = r(80282),
                l = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof self ? self : {},
                c = {},
                u = {};
            ({
                get exports() {
                    return c
                },
                set exports(n) {
                    c = n
                }
            }).exports = function() {
                if (o) return u;
                o = 1;
                var e = Symbol.for("react.element"),
                    t = Symbol.for("react.fragment"),
                    r = Object.prototype.hasOwnProperty,
                    a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function _(t, o, i) {
                    var c, u = {},
                        p = null,
                        f = null;
                    for (c in void 0 !== i && (p = "" + i), void 0 !== o.key && (p = "" + o.key), void 0 !== o.ref && (f = o.ref), o) r.call(o, c) && !l.hasOwnProperty(c) && (u[c] = o[c]);
                    if (t && t.defaultProps)
                        for (c in o = t.defaultProps) void 0 === u[c] && (u[c] = o[c]);
                    return {
                        $$typeof: e,
                        type: t,
                        key: p,
                        ref: f,
                        props: u,
                        _owner: a.current
                    }
                }
                return u.Fragment = t, u.jsx = _, u.jsxs = _, u
            }();
            let p = c.jsx;
            var f = 0 / 0,
                g = /^\s+|\s+$/g,
                d = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                v = parseInt,
                x = "object" == typeof l && l && l.Object === Object && l,
                w = "object" == typeof self && self && self.Object === Object && self,
                b = x || w || Function("return this")(),
                T = Object.prototype.toString,
                M = Math.max,
                O = Math.min,
                ue = function() {
                    return b.Date.now()
                };

            function le(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function Le(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == T.call(t)) return f;
                if (le(e)) {
                    var t, r = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = le(r) ? r + "" : r
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(g, "");
                var o = h.test(e);
                return o || m.test(e) ? v(e.slice(2), o ? 2 : 8) : d.test(e) ? f : +e
            }
            var Lr = function(e, t, r) {
                var o, i, a, l, c, u, p = 0,
                    f = !1,
                    g = !1,
                    d = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function C(t) {
                    var r = o,
                        a = i;
                    return o = i = void 0, p = t, l = e.apply(a, r)
                }

                function P(e) {
                    var r = e - u,
                        o = e - p;
                    return void 0 === u || r >= t || r < 0 || g && o >= a
                }

                function y() {
                    var e, r, o, i = ue();
                    if (P(i)) return s(i);
                    c = setTimeout(y, (e = i - u, r = i - p, o = t - e, g ? O(o, a - r) : o))
                }

                function s(e) {
                    return c = void 0, d && o ? C(e) : (o = i = void 0, l)
                }

                function S() {
                    var e, r = ue(),
                        a = P(r);
                    if (o = arguments, i = this, u = r, a) {
                        if (void 0 === c) return p = e = u, c = setTimeout(y, t), f ? C(e) : l;
                        if (g) return c = setTimeout(y, t), C(u)
                    }
                    return void 0 === c && (c = setTimeout(y, t)), l
                }
                return t = Le(t) || 0, le(r) && (f = !!r.leading, a = (g = "maxWait" in r) ? M(Le(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d), S.cancel = function() {
                    void 0 !== c && clearTimeout(c), p = 0, o = u = i = c = void 0
                }, S.flush = function() {
                    return void 0 === c ? l : s(ue())
                }, S
            };
            let k = [],
                A = {
                    width: "100%",
                    height: "100%"
                },
                L = (0, i.forwardRef)(function({
                    className: e,
                    children: t,
                    debounceTime: r = 300,
                    ignoreDimensions: o = k,
                    parentSizeStyles: a,
                    enableDebounceLeadingCall: l = !0,
                    resizeObserverPolyfill: c,
                    ...u
                }, f) {
                    var g;
                    let d = (0, i.useRef)(null),
                        h = (0, i.useRef)(0),
                        [m, v] = (0, i.useState)({
                            width: 0,
                            height: 0,
                            top: 0,
                            left: 0
                        }),
                        x = (0, i.useMemo)(() => {
                            let e = Array.isArray(o) ? o : [o];
                            return Lr(t => {
                                v(r => Object.keys(r).filter(e => r[e] !== t[e]).every(t => e.includes(t)) ? r : t)
                            }, r, {
                                leading: l
                            })
                        }, [r, l, o]);
                    return (0, i.useEffect)(() => {
                        let e = c || window.ResizeObserver,
                            t = new e(e => {
                                e.forEach(e => {
                                    let {
                                        left: t,
                                        top: r,
                                        width: o,
                                        height: i
                                    } = (null == e ? void 0 : e.contentRect) ? ? {};
                                    h.current = window.requestAnimationFrame(() => {
                                        x({
                                            width: o,
                                            height: i,
                                            top: r,
                                            left: t
                                        })
                                    })
                                })
                            });
                        return d.current && t.observe(d.current), () => {
                            window.cancelAnimationFrame(h.current), t.disconnect(), x.cancel()
                        }
                    }, [x, c]), p("div", {
                        style: { ...A,
                            ...a
                        },
                        ref: (g = [f, d], e => {
                            g.forEach(t => {
                                "function" == typeof t ? t(e) : null != t && (t.current = e)
                            })
                        }),
                        className: e,
                        ...u,
                        children: t({ ...m,
                            ref: d.current,
                            resize: x
                        })
                    })
                }),
                R = (0, i.forwardRef)(({
                    scene: e,
                    style: t,
                    onMouseDown: r,
                    onMouseUp: o,
                    onMouseHover: l,
                    onKeyDown: c,
                    onKeyUp: u,
                    onStart: f,
                    onLookAt: g,
                    onFollow: d,
                    onWheel: h,
                    onLoad: m,
                    renderOnDemand: v = !0,
                    ...x
                }, w) => {
                    let b = (0, i.useRef)(null),
                        [T, M] = (0, i.useState)(!0);
                    return (0, i.useEffect)(() => {
                        let t;
                        M(!0);
                        let i = [{
                            name: "mouseDown",
                            cb: r
                        }, {
                            name: "mouseUp",
                            cb: o
                        }, {
                            name: "mouseHover",
                            cb: l
                        }, {
                            name: "keyDown",
                            cb: c
                        }, {
                            name: "keyUp",
                            cb: u
                        }, {
                            name: "start",
                            cb: f
                        }, {
                            name: "lookAt",
                            cb: g
                        }, {
                            name: "follow",
                            cb: d
                        }, {
                            name: "scroll",
                            cb: h
                        }];
                        return b.current && (t = new a.M(b.current, {
                            renderOnDemand: v
                        }), async function() {
                            for (let r of (await t.load(e), i)) r.cb && t.addEventListener(r.name, r.cb);
                            M(!1), null == m || m(t)
                        }()), () => {
                            for (let e of i) e.cb && t.removeEventListener(e.name, e.cb);
                            t.dispose()
                        }
                    }, [e]), p(L, {
                        ref: w,
                        parentSizeStyles: t,
                        debounceTime: 50,
                        ...x,
                        children: () => p("canvas", {
                            ref: b,
                            style: {
                                display: T ? "none" : "block"
                            }
                        })
                    })
                })
        }
    }
]);