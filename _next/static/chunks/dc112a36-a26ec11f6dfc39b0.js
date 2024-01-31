(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4705], {
        94840: function(module, exports, __webpack_require__) {
            "undefined" != typeof navigator && function(u, S) {
                module.exports = S()
            }(0, function() {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg",
                    locationHref = "",
                    _useWebWorker = !1,
                    initialDefaultFrame = -999999,
                    setWebWorker = function(u) {
                        _useWebWorker = !!u
                    },
                    getWebWorker = function() {
                        return _useWebWorker
                    },
                    setLocationHref = function(u) {
                        locationHref = u
                    },
                    getLocationHref = function() {
                        return locationHref
                    };

                function createTag(u) {
                    return document.createElement(u)
                }

                function extendPrototype(u, S) {
                    var E, P, F = u.length;
                    for (E = 0; E < F; E += 1)
                        for (var T in P = u[E].prototype) Object.prototype.hasOwnProperty.call(P, T) && (S.prototype[T] = P[T])
                }

                function getDescriptor(u, S) {
                    return Object.getOwnPropertyDescriptor(u, S)
                }

                function createProxyFunction(u) {
                    function ProxyFunction() {}
                    return ProxyFunction.prototype = u, ProxyFunction
                }
                var audioControllerFactory = function() {
                        function AudioController(u) {
                            this.audios = [], this.audioFactory = u, this._volume = 1, this._isMuted = !1
                        }
                        return AudioController.prototype = {
                                addAudio: function(u) {
                                    this.audios.push(u)
                                },
                                pause: function() {
                                    var u, S = this.audios.length;
                                    for (u = 0; u < S; u += 1) this.audios[u].pause()
                                },
                                resume: function() {
                                    var u, S = this.audios.length;
                                    for (u = 0; u < S; u += 1) this.audios[u].resume()
                                },
                                setRate: function(u) {
                                    var S, E = this.audios.length;
                                    for (S = 0; S < E; S += 1) this.audios[S].setRate(u)
                                },
                                createAudio: function(u) {
                                    return this.audioFactory ? this.audioFactory(u) : window.Howl ? new window.Howl({
                                        src: [u]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(u) {
                                    this.audioFactory = u
                                },
                                setVolume: function(u) {
                                    this._volume = u, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var u, S = this.audios.length;
                                    for (u = 0; u < S; u += 1) this.audios[u].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new AudioController
                            }
                    }(),
                    createTypedArray = function() {
                        function createRegularArray(u, S) {
                            var E, P = 0,
                                F = [];
                            switch (u) {
                                case "int16":
                                case "uint8c":
                                    E = 1;
                                    break;
                                default:
                                    E = 1.1
                            }
                            for (P = 0; P < S; P += 1) F.push(E);
                            return F
                        }

                        function createTypedArrayFactory(u, S) {
                            return "float32" === u ? new Float32Array(S) : "int16" === u ? new Int16Array(S) : "uint8c" === u ? new Uint8ClampedArray(S) : createRegularArray(u, S)
                        }
                        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? createTypedArrayFactory : createRegularArray
                    }();

                function createSizedArray(u) {
                    return Array.apply(null, {
                        length: u
                    })
                }

                function _typeof$6(u) {
                    return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var subframeEnabled = !0,
                    expressionsPlugin = null,
                    expressionsInterfaces = null,
                    idPrefix$1 = "",
                    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    _shouldRoundValues = !1,
                    bmPow = Math.pow,
                    bmSqrt = Math.sqrt,
                    bmFloor = Math.floor,
                    bmMax = Math.max,
                    bmMin = Math.min,
                    BMMath = {};

                function ProjectInterface$1() {
                    return {}
                }! function() {
                    var u, S = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        E = S.length;
                    for (u = 0; u < E; u += 1) BMMath[S[u]] = Math[S[u]]
                }(), BMMath.random = Math.random, BMMath.abs = function(u) {
                    if ("object" === _typeof$6(u) && u.length) {
                        var S, E = createSizedArray(u.length),
                            P = u.length;
                        for (S = 0; S < P; S += 1) E[S] = Math.abs(u[S]);
                        return E
                    }
                    return Math.abs(u)
                };
                var defaultCurveSegments = 150,
                    degToRads = Math.PI / 180,
                    roundCorner = .5519;

                function roundValues(u) {
                    _shouldRoundValues = !!u
                }

                function bmRnd(u) {
                    return _shouldRoundValues ? Math.round(u) : u
                }

                function styleDiv(u) {
                    u.style.position = "absolute", u.style.top = 0, u.style.left = 0, u.style.display = "block", u.style.transformOrigin = "0 0", u.style.webkitTransformOrigin = "0 0", u.style.backfaceVisibility = "visible", u.style.webkitBackfaceVisibility = "visible", u.style.transformStyle = "preserve-3d", u.style.webkitTransformStyle = "preserve-3d", u.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(u, S, E, P) {
                    this.type = u, this.currentTime = S, this.totalTime = E, this.direction = P < 0 ? -1 : 1
                }

                function BMCompleteEvent(u, S) {
                    this.type = u, this.direction = S < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(u, S, E, P) {
                    this.type = u, this.currentLoop = E, this.totalLoops = S, this.direction = P < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(u, S, E) {
                    this.type = u, this.firstFrame = S, this.totalFrames = E
                }

                function BMDestroyEvent(u, S) {
                    this.type = u, this.target = S
                }

                function BMRenderFrameErrorEvent(u, S) {
                    this.type = "renderFrameError", this.nativeError = u, this.currentTime = S
                }

                function BMConfigErrorEvent(u) {
                    this.type = "configError", this.nativeError = u
                }

                function BMAnimationConfigErrorEvent(u, S) {
                    this.type = u, this.nativeError = S
                }
                var createElementID = function() {
                    var u = 0;
                    return function() {
                        return u += 1, idPrefix$1 + "__lottie_element_" + u
                    }
                }();

                function HSVtoRGB(u, S, E) {
                    var P, F, T, D, M, I, V, L;
                    switch (D = Math.floor(6 * u), M = 6 * u - D, I = E * (1 - S), V = E * (1 - M * S), L = E * (1 - (1 - M) * S), D % 6) {
                        case 0:
                            P = E, F = L, T = I;
                            break;
                        case 1:
                            P = V, F = E, T = I;
                            break;
                        case 2:
                            P = I, F = E, T = L;
                            break;
                        case 3:
                            P = I, F = V, T = E;
                            break;
                        case 4:
                            P = L, F = I, T = E;
                            break;
                        case 5:
                            P = E, F = I, T = V
                    }
                    return [P, F, T]
                }

                function RGBtoHSV(u, S, E) {
                    var P, F = Math.max(u, S, E),
                        T = Math.min(u, S, E),
                        D = F - T,
                        M = 0 === F ? 0 : D / F,
                        I = F / 255;
                    switch (F) {
                        case T:
                            P = 0;
                            break;
                        case u:
                            P = (S - E + D * (S < E ? 6 : 0)) / (6 * D);
                            break;
                        case S:
                            P = (E - u + 2 * D) / (6 * D);
                            break;
                        case E:
                            P = (u - S + 4 * D) / (6 * D)
                    }
                    return [P, M, I]
                }

                function addSaturationToRGB(u, S) {
                    var E = RGBtoHSV(255 * u[0], 255 * u[1], 255 * u[2]);
                    return E[1] += S, E[1] > 1 ? E[1] = 1 : E[1] <= 0 && (E[1] = 0), HSVtoRGB(E[0], E[1], E[2])
                }

                function addBrightnessToRGB(u, S) {
                    var E = RGBtoHSV(255 * u[0], 255 * u[1], 255 * u[2]);
                    return E[2] += S, E[2] > 1 ? E[2] = 1 : E[2] < 0 && (E[2] = 0), HSVtoRGB(E[0], E[1], E[2])
                }

                function addHueToRGB(u, S) {
                    var E = RGBtoHSV(255 * u[0], 255 * u[1], 255 * u[2]);
                    return E[0] += S / 360, E[0] > 1 ? E[0] -= 1 : E[0] < 0 && (E[0] += 1), HSVtoRGB(E[0], E[1], E[2])
                }
                var rgbToHex = function() {
                        var u, S, E = [];
                        for (u = 0; u < 256; u += 1) S = u.toString(16), E[u] = 1 === S.length ? "0" + S : S;
                        return function(u, S, P) {
                            return u < 0 && (u = 0), S < 0 && (S = 0), P < 0 && (P = 0), "#" + E[u] + E[S] + E[P]
                        }
                    }(),
                    setSubframeEnabled = function(u) {
                        subframeEnabled = !!u
                    },
                    getSubframeEnabled = function() {
                        return subframeEnabled
                    },
                    setExpressionsPlugin = function(u) {
                        expressionsPlugin = u
                    },
                    getExpressionsPlugin = function() {
                        return expressionsPlugin
                    },
                    setExpressionInterfaces = function(u) {
                        expressionsInterfaces = u
                    },
                    getExpressionInterfaces = function() {
                        return expressionsInterfaces
                    },
                    setDefaultCurveSegments = function(u) {
                        defaultCurveSegments = u
                    },
                    getDefaultCurveSegments = function() {
                        return defaultCurveSegments
                    },
                    setIdPrefix = function(u) {
                        idPrefix$1 = u
                    },
                    getIdPrefix = function() {
                        return idPrefix$1
                    };

                function createNS(u) {
                    return document.createElementNS(svgNS, u)
                }

                function _typeof$5(u) {
                    return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var dataManager = function() {
                        var u, S, E = 1,
                            P = [],
                            F = {
                                onmessage: function() {},
                                postMessage: function(S) {
                                    u({
                                        data: S
                                    })
                                }
                            },
                            T = {
                                postMessage: function(u) {
                                    F.onmessage({
                                        data: u
                                    })
                                }
                            };

                        function createWorker(S) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var E = new Blob(["var _workerSelf = self; self.onmessage = ", S.toString()], {
                                        type: "text/javascript"
                                    }),
                                    P = URL.createObjectURL(E);
                                return new Worker(P)
                            }
                            return u = S, F
                        }

                        function setupWorker() {
                            S || ((S = createWorker(function(u) {
                                function dataFunctionManager() {
                                    function completeLayers(u, S) {
                                        var E, P, F, T, D, M, I = u.length;
                                        for (P = 0; P < I; P += 1)
                                            if ("ks" in (E = u[P]) && !E.completed) {
                                                if (E.completed = !0, E.hasMask) {
                                                    var V = E.masksProperties;
                                                    for (F = 0, T = V.length; F < T; F += 1)
                                                        if (V[F].pt.k.i) convertPathsToAbsoluteValues(V[F].pt.k);
                                                        else
                                                            for (D = 0, M = V[F].pt.k.length; D < M; D += 1) V[F].pt.k[D].s && convertPathsToAbsoluteValues(V[F].pt.k[D].s[0]), V[F].pt.k[D].e && convertPathsToAbsoluteValues(V[F].pt.k[D].e[0])
                                                }
                                                0 === E.ty ? (E.layers = findCompLayers(E.refId, S), completeLayers(E.layers, S)) : 4 === E.ty ? completeShapes(E.shapes) : 5 === E.ty && completeText(E)
                                            }
                                    }

                                    function completeChars(u, S) {
                                        if (u) {
                                            var E = 0,
                                                P = u.length;
                                            for (E = 0; E < P; E += 1) 1 === u[E].t && (u[E].data.layers = findCompLayers(u[E].data.refId, S), completeLayers(u[E].data.layers, S))
                                        }
                                    }

                                    function findComp(u, S) {
                                        for (var E = 0, P = S.length; E < P;) {
                                            if (S[E].id === u) return S[E];
                                            E += 1
                                        }
                                        return null
                                    }

                                    function findCompLayers(u, S) {
                                        var E = findComp(u, S);
                                        return E ? E.layers.__used ? JSON.parse(JSON.stringify(E.layers)) : (E.layers.__used = !0, E.layers) : null
                                    }

                                    function completeShapes(u) {
                                        var S, E, P;
                                        for (S = u.length - 1; S >= 0; S -= 1)
                                            if ("sh" === u[S].ty) {
                                                if (u[S].ks.k.i) convertPathsToAbsoluteValues(u[S].ks.k);
                                                else
                                                    for (E = 0, P = u[S].ks.k.length; E < P; E += 1) u[S].ks.k[E].s && convertPathsToAbsoluteValues(u[S].ks.k[E].s[0]), u[S].ks.k[E].e && convertPathsToAbsoluteValues(u[S].ks.k[E].e[0])
                                            } else "gr" === u[S].ty && completeShapes(u[S].it)
                                    }

                                    function convertPathsToAbsoluteValues(u) {
                                        var S, E = u.i.length;
                                        for (S = 0; S < E; S += 1) u.i[S][0] += u.v[S][0], u.i[S][1] += u.v[S][1], u.o[S][0] += u.v[S][0], u.o[S][1] += u.v[S][1]
                                    }

                                    function checkVersion(u, S) {
                                        var E = S ? S.split(".") : [100, 100, 100];
                                        return u[0] > E[0] || !(E[0] > u[0]) && (u[1] > E[1] || !(E[1] > u[1]) && (u[2] > E[2] || !(E[2] > u[2]) && null))
                                    }
                                    var u = function() {
                                            var u = [4, 4, 14];

                                            function updateTextLayer(u) {
                                                var S = u.t.d;
                                                u.t.d = {
                                                    k: [{
                                                        s: S,
                                                        t: 0
                                                    }]
                                                }
                                            }

                                            function iterateLayers(u) {
                                                var S, E = u.length;
                                                for (S = 0; S < E; S += 1) 5 === u[S].ty && updateTextLayer(u[S])
                                            }
                                            return function(S) {
                                                if (checkVersion(u, S.v) && (iterateLayers(S.layers), S.assets)) {
                                                    var E, P = S.assets.length;
                                                    for (E = 0; E < P; E += 1) S.assets[E].layers && iterateLayers(S.assets[E].layers)
                                                }
                                            }
                                        }(),
                                        S = function() {
                                            var u = [4, 7, 99];
                                            return function(S) {
                                                if (S.chars && !checkVersion(u, S.v)) {
                                                    var E, P = S.chars.length;
                                                    for (E = 0; E < P; E += 1) {
                                                        var F = S.chars[E];
                                                        F.data && F.data.shapes && (completeShapes(F.data.shapes), F.data.ip = 0, F.data.op = 99999, F.data.st = 0, F.data.sr = 1, F.data.ks = {
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            }
                                                        }, S.chars[E].t || (F.data.shapes.push({
                                                            ty: "no"
                                                        }), F.data.shapes[0].it.push({
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            },
                                                            sk: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            sa: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            ty: "tr"
                                                        })))
                                                    }
                                                }
                                            }
                                        }(),
                                        E = function() {
                                            var u = [5, 7, 15];

                                            function updateTextLayer(u) {
                                                var S = u.t.p;
                                                "number" == typeof S.a && (S.a = {
                                                    a: 0,
                                                    k: S.a
                                                }), "number" == typeof S.p && (S.p = {
                                                    a: 0,
                                                    k: S.p
                                                }), "number" == typeof S.r && (S.r = {
                                                    a: 0,
                                                    k: S.r
                                                })
                                            }

                                            function iterateLayers(u) {
                                                var S, E = u.length;
                                                for (S = 0; S < E; S += 1) 5 === u[S].ty && updateTextLayer(u[S])
                                            }
                                            return function(S) {
                                                if (checkVersion(u, S.v) && (iterateLayers(S.layers), S.assets)) {
                                                    var E, P = S.assets.length;
                                                    for (E = 0; E < P; E += 1) S.assets[E].layers && iterateLayers(S.assets[E].layers)
                                                }
                                            }
                                        }(),
                                        P = function() {
                                            var u = [4, 1, 9];

                                            function iterateShapes(u) {
                                                var S, E, P, F = u.length;
                                                for (S = 0; S < F; S += 1)
                                                    if ("gr" === u[S].ty) iterateShapes(u[S].it);
                                                    else if ("fl" === u[S].ty || "st" === u[S].ty) {
                                                    if (u[S].c.k && u[S].c.k[0].i)
                                                        for (E = 0, P = u[S].c.k.length; E < P; E += 1) u[S].c.k[E].s && (u[S].c.k[E].s[0] /= 255, u[S].c.k[E].s[1] /= 255, u[S].c.k[E].s[2] /= 255, u[S].c.k[E].s[3] /= 255), u[S].c.k[E].e && (u[S].c.k[E].e[0] /= 255, u[S].c.k[E].e[1] /= 255, u[S].c.k[E].e[2] /= 255, u[S].c.k[E].e[3] /= 255);
                                                    else u[S].c.k[0] /= 255, u[S].c.k[1] /= 255, u[S].c.k[2] /= 255, u[S].c.k[3] /= 255
                                                }
                                            }

                                            function iterateLayers(u) {
                                                var S, E = u.length;
                                                for (S = 0; S < E; S += 1) 4 === u[S].ty && iterateShapes(u[S].shapes)
                                            }
                                            return function(S) {
                                                if (checkVersion(u, S.v) && (iterateLayers(S.layers), S.assets)) {
                                                    var E, P = S.assets.length;
                                                    for (E = 0; E < P; E += 1) S.assets[E].layers && iterateLayers(S.assets[E].layers)
                                                }
                                            }
                                        }(),
                                        F = function() {
                                            var u = [4, 4, 18];

                                            function completeClosingShapes(u) {
                                                var S, E, P;
                                                for (S = u.length - 1; S >= 0; S -= 1)
                                                    if ("sh" === u[S].ty) {
                                                        if (u[S].ks.k.i) u[S].ks.k.c = u[S].closed;
                                                        else
                                                            for (E = 0, P = u[S].ks.k.length; E < P; E += 1) u[S].ks.k[E].s && (u[S].ks.k[E].s[0].c = u[S].closed), u[S].ks.k[E].e && (u[S].ks.k[E].e[0].c = u[S].closed)
                                                    } else "gr" === u[S].ty && completeClosingShapes(u[S].it)
                                            }

                                            function iterateLayers(u) {
                                                var S, E, P, F, T, D, M = u.length;
                                                for (E = 0; E < M; E += 1) {
                                                    if ((S = u[E]).hasMask) {
                                                        var I = S.masksProperties;
                                                        for (P = 0, F = I.length; P < F; P += 1)
                                                            if (I[P].pt.k.i) I[P].pt.k.c = I[P].cl;
                                                            else
                                                                for (T = 0, D = I[P].pt.k.length; T < D; T += 1) I[P].pt.k[T].s && (I[P].pt.k[T].s[0].c = I[P].cl), I[P].pt.k[T].e && (I[P].pt.k[T].e[0].c = I[P].cl)
                                                    }
                                                    4 === S.ty && completeClosingShapes(S.shapes)
                                                }
                                            }
                                            return function(S) {
                                                if (checkVersion(u, S.v) && (iterateLayers(S.layers), S.assets)) {
                                                    var E, P = S.assets.length;
                                                    for (E = 0; E < P; E += 1) S.assets[E].layers && iterateLayers(S.assets[E].layers)
                                                }
                                            }
                                        }();

                                    function completeData(T) {
                                        T.__complete || (P(T), u(T), S(T), E(T), F(T), completeLayers(T.layers, T.assets), completeChars(T.chars, T.assets), T.__complete = !0)
                                    }

                                    function completeText(u) {
                                        0 === u.t.a.length && u.t.p
                                    }
                                    var T = {};
                                    return T.completeData = completeData, T.checkColors = P, T.checkChars = S, T.checkPathProperties = E, T.checkShapes = F, T.completeLayers = completeLayers, T
                                }
                                if (T.dataManager || (T.dataManager = dataFunctionManager()), T.assetLoader || (T.assetLoader = function() {
                                        function formatResponse(u) {
                                            var S = u.getResponseHeader("content-type");
                                            return S && "json" === u.responseType && -1 !== S.indexOf("json") || u.response && "object" === _typeof$5(u.response) ? u.response : u.response && "string" == typeof u.response ? JSON.parse(u.response) : u.responseText ? JSON.parse(u.responseText) : null
                                        }
                                        return {
                                            load: function(u, S, E, P) {
                                                var F, T = new XMLHttpRequest;
                                                try {
                                                    T.responseType = "json"
                                                } catch (u) {}
                                                T.onreadystatechange = function() {
                                                    if (4 === T.readyState) {
                                                        if (200 === T.status) E(F = formatResponse(T));
                                                        else try {
                                                            F = formatResponse(T), E(F)
                                                        } catch (u) {
                                                            P && P(u)
                                                        }
                                                    }
                                                };
                                                try {
                                                    T.open("GET", u, !0)
                                                } catch (E) {
                                                    T.open("GET", S + "/" + u, !0)
                                                }
                                                T.send()
                                            }
                                        }
                                    }()), "loadAnimation" === u.data.type) T.assetLoader.load(u.data.path, u.data.fullPath, function(S) {
                                    T.dataManager.completeData(S), T.postMessage({
                                        id: u.data.id,
                                        payload: S,
                                        status: "success"
                                    })
                                }, function() {
                                    T.postMessage({
                                        id: u.data.id,
                                        status: "error"
                                    })
                                });
                                else if ("complete" === u.data.type) {
                                    var S = u.data.animation;
                                    T.dataManager.completeData(S), T.postMessage({
                                        id: u.data.id,
                                        payload: S,
                                        status: "success"
                                    })
                                } else "loadData" === u.data.type && T.assetLoader.load(u.data.path, u.data.fullPath, function(S) {
                                    T.postMessage({
                                        id: u.data.id,
                                        payload: S,
                                        status: "success"
                                    })
                                }, function() {
                                    T.postMessage({
                                        id: u.data.id,
                                        status: "error"
                                    })
                                })
                            })).onmessage = function(u) {
                                var S = u.data,
                                    E = S.id,
                                    F = P[E];
                                P[E] = null, "success" === S.status ? F.onComplete(S.payload) : F.onError && F.onError()
                            })
                        }

                        function createProcess(u, S) {
                            var F = "processId_" + (E += 1);
                            return P[F] = {
                                onComplete: u,
                                onError: S
                            }, F
                        }
                        return {
                            loadAnimation: function(u, E, P) {
                                setupWorker();
                                var F = createProcess(E, P);
                                S.postMessage({
                                    type: "loadAnimation",
                                    path: u,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: F
                                })
                            },
                            loadData: function(u, E, P) {
                                setupWorker();
                                var F = createProcess(E, P);
                                S.postMessage({
                                    type: "loadData",
                                    path: u,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: F
                                })
                            },
                            completeAnimation: function(u, E, P) {
                                setupWorker();
                                var F = createProcess(E, P);
                                S.postMessage({
                                    type: "complete",
                                    animation: u,
                                    id: F
                                })
                            }
                        }
                    }(),
                    ImagePreloader = function() {
                        var u = function() {
                            var u = createTag("canvas");
                            u.width = 1, u.height = 1;
                            var S = u.getContext("2d");
                            return S.fillStyle = "rgba(0,0,0,0)", S.fillRect(0, 0, 1, 1), u
                        }();

                        function imageLoaded() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function footageLoaded() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function getAssetsPath(u, S, E) {
                            var P = "";
                            if (u.e) P = u.p;
                            else if (S) {
                                var F = u.p; - 1 !== F.indexOf("images/") && (F = F.split("/")[1]), P = S + F
                            } else P = E + (u.u ? u.u : "") + u.p;
                            return P
                        }

                        function testImageLoaded(u) {
                            var S = 0,
                                E = setInterval((function() {
                                    (u.getBBox().width || S > 500) && (this._imageLoaded(), clearInterval(E)), S += 1
                                }).bind(this), 50)
                        }

                        function createImageData(S) {
                            var E = getAssetsPath(S, this.assetsPath, this.path),
                                P = createNS("image");
                            isSafari ? this.testImageLoaded(P) : P.addEventListener("load", this._imageLoaded, !1), P.addEventListener("error", (function() {
                                F.img = u, this._imageLoaded()
                            }).bind(this), !1), P.setAttributeNS("http://www.w3.org/1999/xlink", "href", E), this._elementHelper.append ? this._elementHelper.append(P) : this._elementHelper.appendChild(P);
                            var F = {
                                img: P,
                                assetData: S
                            };
                            return F
                        }

                        function createImgData(S) {
                            var E = getAssetsPath(S, this.assetsPath, this.path),
                                P = createTag("img");
                            P.crossOrigin = "anonymous", P.addEventListener("load", this._imageLoaded, !1), P.addEventListener("error", (function() {
                                F.img = u, this._imageLoaded()
                            }).bind(this), !1), P.src = E;
                            var F = {
                                img: P,
                                assetData: S
                            };
                            return F
                        }

                        function createFootageData(u) {
                            var S = {
                                    assetData: u
                                },
                                E = getAssetsPath(u, this.assetsPath, this.path);
                            return dataManager.loadData(E, (function(u) {
                                S.img = u, this._footageLoaded()
                            }).bind(this), (function() {
                                S.img = {}, this._footageLoaded()
                            }).bind(this)), S
                        }

                        function loadAssets(u, S) {
                            this.imagesLoadedCb = S;
                            var E, P = u.length;
                            for (E = 0; E < P; E += 1) u[E].layers || (u[E].t && "seq" !== u[E].t ? 3 === u[E].t && (this.totalFootages += 1, this.images.push(this.createFootageData(u[E]))) : (this.totalImages += 1, this.images.push(this._createImageData(u[E]))))
                        }

                        function setPath(u) {
                            this.path = u || ""
                        }

                        function setAssetsPath(u) {
                            this.assetsPath = u || ""
                        }

                        function getAsset(u) {
                            for (var S = 0, E = this.images.length; S < E;) {
                                if (this.images[S].assetData === u) return this.images[S].img;
                                S += 1
                            }
                            return null
                        }

                        function destroy() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        }

                        function loadedImages() {
                            return this.totalImages === this.loadedAssets
                        }

                        function loadedFootages() {
                            return this.totalFootages === this.loadedFootagesCount
                        }

                        function setCacheType(u, S) {
                            "svg" === u ? (this._elementHelper = S, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }

                        function ImagePreloaderFactory() {
                            this._imageLoaded = imageLoaded.bind(this), this._footageLoaded = footageLoaded.bind(this), this.testImageLoaded = testImageLoaded.bind(this), this.createFootageData = createFootageData.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return ImagePreloaderFactory.prototype = {
                            loadAssets: loadAssets,
                            setAssetsPath: setAssetsPath,
                            setPath: setPath,
                            loadedImages: loadedImages,
                            loadedFootages: loadedFootages,
                            destroy: destroy,
                            getAsset: getAsset,
                            createImgData: createImgData,
                            createImageData: createImageData,
                            imageLoaded: imageLoaded,
                            footageLoaded: footageLoaded,
                            setCacheType: setCacheType
                        }, ImagePreloaderFactory
                    }();

                function BaseEvent() {}
                BaseEvent.prototype = {
                    triggerEvent: function(u, S) {
                        if (this._cbs[u])
                            for (var E = this._cbs[u], P = 0; P < E.length; P += 1) E[P](S)
                    },
                    addEventListener: function(u, S) {
                        return this._cbs[u] || (this._cbs[u] = []), this._cbs[u].push(S), (function() {
                            this.removeEventListener(u, S)
                        }).bind(this)
                    },
                    removeEventListener: function(u, S) {
                        if (S) {
                            if (this._cbs[u]) {
                                for (var E = 0, P = this._cbs[u].length; E < P;) this._cbs[u][E] === S && (this._cbs[u].splice(E, 1), E -= 1, P -= 1), E += 1;
                                this._cbs[u].length || (this._cbs[u] = null)
                            }
                        } else this._cbs[u] = null
                    }
                };
                var markerParser = function() {
                        function parsePayloadLines(u) {
                            for (var S, E = u.split("\r\n"), P = {}, F = 0, T = 0; T < E.length; T += 1) 2 === (S = E[T].split(":")).length && (P[S[0]] = S[1].trim(), F += 1);
                            if (0 === F) throw Error();
                            return P
                        }
                        return function(u) {
                            for (var S = [], E = 0; E < u.length; E += 1) {
                                var P = u[E],
                                    F = {
                                        time: P.tm,
                                        duration: P.dr
                                    };
                                try {
                                    F.payload = JSON.parse(u[E].cm)
                                } catch (S) {
                                    try {
                                        F.payload = parsePayloadLines(u[E].cm)
                                    } catch (S) {
                                        F.payload = {
                                            name: u[E].cm
                                        }
                                    }
                                }
                                S.push(F)
                            }
                            return S
                        }
                    }(),
                    ProjectInterface = function() {
                        function registerComposition(u) {
                            this.compositions.push(u)
                        }
                        return function() {
                            function _thisProjectFunction(u) {
                                for (var S = 0, E = this.compositions.length; S < E;) {
                                    if (this.compositions[S].data && this.compositions[S].data.nm === u) return this.compositions[S].prepareFrame && this.compositions[S].data.xt && this.compositions[S].prepareFrame(this.currentFrame), this.compositions[S].compInterface;
                                    S += 1
                                }
                                return null
                            }
                            return _thisProjectFunction.compositions = [], _thisProjectFunction.currentFrame = 0, _thisProjectFunction.registerComposition = registerComposition, _thisProjectFunction
                        }
                    }(),
                    renderers = {},
                    registerRenderer = function(u, S) {
                        renderers[u] = S
                    };

                function getRenderer(u) {
                    return renderers[u]
                }

                function getRegisteredRenderer() {
                    if (renderers.canvas) return "canvas";
                    for (var u in renderers)
                        if (renderers[u]) return u;
                    return ""
                }

                function _typeof$4(u) {
                    return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var AnimationItem = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
                };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(u) {
                    (u.wrapper || u.container) && (this.wrapper = u.wrapper || u.container);
                    var S = "svg";
                    u.animType ? S = u.animType : u.renderer && (S = u.renderer);
                    var E = getRenderer(S);
                    this.renderer = new E(this, u.rendererSettings), this.imagePreloader.setCacheType(S, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = S, "" === u.loop || null === u.loop || void 0 === u.loop || !0 === u.loop ? this.loop = !0 : !1 === u.loop ? this.loop = !1 : this.loop = parseInt(u.loop, 10), this.autoplay = !("autoplay" in u) || u.autoplay, this.name = u.name ? u.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(u, "autoloadSegments") || u.autoloadSegments, this.assetsPath = u.assetsPath, this.initialSegment = u.initialSegment, u.audioFactory && this.audioController.setAudioFactory(u.audioFactory), u.animationData ? this.setupAnimation(u.animationData) : u.path && (-1 !== u.path.lastIndexOf("\\") ? this.path = u.path.substr(0, u.path.lastIndexOf("\\") + 1) : this.path = u.path.substr(0, u.path.lastIndexOf("/") + 1), this.fileName = u.path.substr(u.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(u.path, this.configAnimation, this.onSetupError))
                }, AnimationItem.prototype.onSetupError = function() {
                    this.trigger("data_failed")
                }, AnimationItem.prototype.setupAnimation = function(u) {
                    dataManager.completeAnimation(u, this.configAnimation)
                }, AnimationItem.prototype.setData = function(u, S) {
                    S && "object" !== _typeof$4(S) && (S = JSON.parse(S));
                    var E = {
                            wrapper: u,
                            animationData: S
                        },
                        P = u.attributes;
                    E.path = P.getNamedItem("data-animation-path") ? P.getNamedItem("data-animation-path").value : P.getNamedItem("data-bm-path") ? P.getNamedItem("data-bm-path").value : P.getNamedItem("bm-path") ? P.getNamedItem("bm-path").value : "", E.animType = P.getNamedItem("data-anim-type") ? P.getNamedItem("data-anim-type").value : P.getNamedItem("data-bm-type") ? P.getNamedItem("data-bm-type").value : P.getNamedItem("bm-type") ? P.getNamedItem("bm-type").value : P.getNamedItem("data-bm-renderer") ? P.getNamedItem("data-bm-renderer").value : P.getNamedItem("bm-renderer") ? P.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                    var F = P.getNamedItem("data-anim-loop") ? P.getNamedItem("data-anim-loop").value : P.getNamedItem("data-bm-loop") ? P.getNamedItem("data-bm-loop").value : P.getNamedItem("bm-loop") ? P.getNamedItem("bm-loop").value : "";
                    "false" === F ? E.loop = !1 : "true" === F ? E.loop = !0 : "" !== F && (E.loop = parseInt(F, 10));
                    var T = P.getNamedItem("data-anim-autoplay") ? P.getNamedItem("data-anim-autoplay").value : P.getNamedItem("data-bm-autoplay") ? P.getNamedItem("data-bm-autoplay").value : !P.getNamedItem("bm-autoplay") || P.getNamedItem("bm-autoplay").value;
                    E.autoplay = "false" !== T, E.name = P.getNamedItem("data-name") ? P.getNamedItem("data-name").value : P.getNamedItem("data-bm-name") ? P.getNamedItem("data-bm-name").value : P.getNamedItem("bm-name") ? P.getNamedItem("bm-name").value : "", "false" === (P.getNamedItem("data-anim-prerender") ? P.getNamedItem("data-anim-prerender").value : P.getNamedItem("data-bm-prerender") ? P.getNamedItem("data-bm-prerender").value : P.getNamedItem("bm-prerender") ? P.getNamedItem("bm-prerender").value : "") && (E.prerender = !1), E.path ? this.setParams(E) : this.trigger("destroy")
                }, AnimationItem.prototype.includeLayers = function(u) {
                    u.op > this.animationData.op && (this.animationData.op = u.op, this.totalFrames = Math.floor(u.op - this.animationData.ip));
                    var S, E, P = this.animationData.layers,
                        F = P.length,
                        T = u.layers,
                        D = T.length;
                    for (E = 0; E < D; E += 1)
                        for (S = 0; S < F;) {
                            if (P[S].id === T[E].id) {
                                P[S] = T[E];
                                break
                            }
                            S += 1
                        }
                    if ((u.chars || u.fonts) && (this.renderer.globalData.fontManager.addChars(u.chars), this.renderer.globalData.fontManager.addFonts(u.fonts, this.renderer.globalData.defs)), u.assets)
                        for (S = 0, F = u.assets.length; S < F; S += 1) this.animationData.assets.push(u.assets[S]);
                    this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                }, AnimationItem.prototype.onSegmentComplete = function(u) {
                    this.animationData = u;
                    var S = getExpressionsPlugin();
                    S && S.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function() {
                    var u = this.animationData.segments;
                    if (!u || 0 === u.length || !this.autoloadSegments) {
                        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                        return
                    }
                    var S = u.shift();
                    this.timeCompleted = S.time * this.frameRate;
                    var E = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, dataManager.loadData(E, this.includeLayers.bind(this), (function() {
                        this.trigger("data_failed")
                    }).bind(this))
                }, AnimationItem.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function(u) {
                    if (this.renderer) try {
                        this.animationData = u, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(u), u.assets || (u.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(u.assets), this.markers = markerParser(u.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (u) {
                        this.triggerConfigError(u)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function() {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = !0;
                        var u = getExpressionsPlugin();
                        u && u.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                            this.trigger("DOMLoaded")
                        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                    }
                }, AnimationItem.prototype.resize = function(u, S) {
                    var E = "number" == typeof u ? u : void 0,
                        P = "number" == typeof S ? S : void 0;
                    this.renderer.updateContainerSize(E, P)
                }, AnimationItem.prototype.setSubframe = function(u) {
                    this.isSubframeEnabled = !!u
                }, AnimationItem.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, AnimationItem.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (u) {
                        this.triggerRenderFrameError(u)
                    }
                }, AnimationItem.prototype.play = function(u) {
                    (!u || this.name === u) && !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function(u) {
                    u && this.name !== u || !1 !== this.isPaused || (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, AnimationItem.prototype.togglePause = function(u) {
                    u && this.name !== u || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function(u) {
                    u && this.name !== u || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.getMarkerData = function(u) {
                    for (var S, E = 0; E < this.markers.length; E += 1)
                        if ((S = this.markers[E]).payload && S.payload.name === u) return S;
                    return null
                }, AnimationItem.prototype.goToAndStop = function(u, S, E) {
                    if (!E || this.name === E) {
                        if (isNaN(Number(u))) {
                            var P = this.getMarkerData(u);
                            P && this.goToAndStop(P.time, !0)
                        } else S ? this.setCurrentRawFrameValue(u) : this.setCurrentRawFrameValue(u * this.frameModifier);
                        this.pause()
                    }
                }, AnimationItem.prototype.goToAndPlay = function(u, S, E) {
                    if (!E || this.name === E) {
                        var P = Number(u);
                        if (isNaN(P)) {
                            var F = this.getMarkerData(u);
                            F && (F.duration ? this.playSegments([F.time, F.time + F.duration], !0) : this.goToAndStop(F.time, !0))
                        } else this.goToAndStop(P, S, E);
                        this.play()
                    }
                }, AnimationItem.prototype.advanceTime = function(u) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var S = this.currentRawFrame + u * this.frameModifier,
                            E = !1;
                        S >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? S >= this.totalFrames ? (this.playCount += 1, this.checkSegments(S % this.totalFrames) || (this.setCurrentRawFrameValue(S % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(S) : this.checkSegments(S > this.totalFrames ? S % this.totalFrames : 0) || (E = !0, S = this.totalFrames - 1) : S < 0 ? this.checkSegments(S % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop) ? (this.setCurrentRawFrameValue(this.totalFrames + S % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (E = !0, S = 0)) : this.setCurrentRawFrameValue(S), E && (this.setCurrentRawFrameValue(S), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function(u, S) {
                    this.playCount = 0, u[1] < u[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = u[0] - u[1], this.timeCompleted = this.totalFrames, this.firstFrame = u[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - S)) : u[1] > u[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = u[1] - u[0], this.timeCompleted = this.totalFrames, this.firstFrame = u[0], this.setCurrentRawFrameValue(.001 + S)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function(u, S) {
                    var E = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < u ? E = u : this.currentRawFrame + this.firstFrame > S && (E = S - u)), this.firstFrame = u, this.totalFrames = S - u, this.timeCompleted = this.totalFrames, -1 !== E && this.goToAndStop(E, !0)
                }, AnimationItem.prototype.playSegments = function(u, S) {
                    if (S && (this.segments.length = 0), "object" === _typeof$4(u[0])) {
                        var E, P = u.length;
                        for (E = 0; E < P; E += 1) this.segments.push(u[E])
                    } else this.segments.push(u);
                    this.segments.length && S && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function(u) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), u && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function(u) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), u), !0)
                }, AnimationItem.prototype.destroy = function(u) {
                    (!u || this.name === u) && this.renderer && (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function(u) {
                    this.currentRawFrame = u, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function(u) {
                    this.playSpeed = u, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function(u) {
                    this.playDirection = u < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.setLoop = function(u) {
                    this.loop = u
                }, AnimationItem.prototype.setVolume = function(u, S) {
                    S && this.name !== S || this.audioController.setVolume(u)
                }, AnimationItem.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, AnimationItem.prototype.mute = function(u) {
                    u && this.name !== u || this.audioController.mute()
                }, AnimationItem.prototype.unmute = function(u) {
                    u && this.name !== u || this.audioController.unmute()
                }, AnimationItem.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, AnimationItem.prototype.getPath = function() {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function(u) {
                    var S = "";
                    if (u.e) S = u.p;
                    else if (this.assetsPath) {
                        var E = u.p; - 1 !== E.indexOf("images/") && (E = E.split("/")[1]), S = this.assetsPath + E
                    } else S = this.path + (u.u ? u.u : "") + u.p;
                    return S
                }, AnimationItem.prototype.getAssetData = function(u) {
                    for (var S = 0, E = this.assets.length; S < E;) {
                        if (u === this.assets[S].id) return this.assets[S];
                        S += 1
                    }
                    return null
                }, AnimationItem.prototype.hide = function() {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function() {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function(u) {
                    return u ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.updateDocumentData = function(u, S, E) {
                    try {
                        this.renderer.getElementByPath(u).updateDocumentData(S, E)
                    } catch (u) {}
                }, AnimationItem.prototype.trigger = function(u) {
                    if (this._cbs && this._cbs[u]) switch (u) {
                        case "enterFrame":
                            this.triggerEvent(u, new BMEnterFrameEvent(u, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "drawnFrame":
                            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(u, this.drawnFrameEvent);
                            break;
                        case "loopComplete":
                            this.triggerEvent(u, new BMCompleteLoopEvent(u, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(u, new BMCompleteEvent(u, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(u, new BMSegmentStartEvent(u, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(u, new BMDestroyEvent(u, this));
                            break;
                        default:
                            this.triggerEvent(u)
                    }
                    "enterFrame" === u && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(u, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === u && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(u, this.loop, this.playCount, this.frameMult)), "complete" === u && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(u, this.frameMult)), "segmentStart" === u && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(u, this.firstFrame, this.totalFrames)), "destroy" === u && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(u, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function(u) {
                    var S = new BMRenderFrameErrorEvent(u, this.currentFrame);
                    this.triggerEvent("error", S), this.onError && this.onError.call(this, S)
                }, AnimationItem.prototype.triggerConfigError = function(u) {
                    var S = new BMConfigErrorEvent(u, this.currentFrame);
                    this.triggerEvent("error", S), this.onError && this.onError.call(this, S)
                };
                var animationManager = function() {
                        var u = {},
                            S = [],
                            E = 0,
                            P = 0,
                            F = 0,
                            T = !0,
                            D = !1;

                        function removeElement(u) {
                            for (var E = 0, F = u.target; E < P;) S[E].animation !== F || (S.splice(E, 1), E -= 1, P -= 1, F.isPaused || subtractPlayingCount()), E += 1
                        }

                        function registerAnimation(u, E) {
                            if (!u) return null;
                            for (var F = 0; F < P;) {
                                if (S[F].elem === u && null !== S[F].elem) return S[F].animation;
                                F += 1
                            }
                            var T = new AnimationItem;
                            return setupAnimation(T, u), T.setData(u, E), T
                        }

                        function getRegisteredAnimations() {
                            var u, E = S.length,
                                P = [];
                            for (u = 0; u < E; u += 1) P.push(S[u].animation);
                            return P
                        }

                        function addPlayingCount() {
                            F += 1, activate()
                        }

                        function subtractPlayingCount() {
                            F -= 1
                        }

                        function setupAnimation(u, E) {
                            u.addEventListener("destroy", removeElement), u.addEventListener("_active", addPlayingCount), u.addEventListener("_idle", subtractPlayingCount), S.push({
                                elem: E,
                                animation: u
                            }), P += 1
                        }

                        function loadAnimation(u) {
                            var S = new AnimationItem;
                            return setupAnimation(S, null), S.setParams(u), S
                        }

                        function setSpeed(u, E) {
                            var F;
                            for (F = 0; F < P; F += 1) S[F].animation.setSpeed(u, E)
                        }

                        function setDirection(u, E) {
                            var F;
                            for (F = 0; F < P; F += 1) S[F].animation.setDirection(u, E)
                        }

                        function play(u) {
                            var E;
                            for (E = 0; E < P; E += 1) S[E].animation.play(u)
                        }

                        function resume(u) {
                            var M, I = u - E;
                            for (M = 0; M < P; M += 1) S[M].animation.advanceTime(I);
                            E = u, F && !D ? window.requestAnimationFrame(resume) : T = !0
                        }

                        function first(u) {
                            E = u, window.requestAnimationFrame(resume)
                        }

                        function pause(u) {
                            var E;
                            for (E = 0; E < P; E += 1) S[E].animation.pause(u)
                        }

                        function goToAndStop(u, E, F) {
                            var T;
                            for (T = 0; T < P; T += 1) S[T].animation.goToAndStop(u, E, F)
                        }

                        function stop(u) {
                            var E;
                            for (E = 0; E < P; E += 1) S[E].animation.stop(u)
                        }

                        function togglePause(u) {
                            var E;
                            for (E = 0; E < P; E += 1) S[E].animation.togglePause(u)
                        }

                        function destroy(u) {
                            var E;
                            for (E = P - 1; E >= 0; E -= 1) S[E].animation.destroy(u)
                        }

                        function searchAnimations(u, S, E) {
                            var P, F = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                T = F.length;
                            for (P = 0; P < T; P += 1) E && F[P].setAttribute("data-bm-type", E), registerAnimation(F[P], u);
                            if (S && 0 === T) {
                                E || (E = "svg");
                                var D = document.getElementsByTagName("body")[0];
                                D.innerText = "";
                                var M = createTag("div");
                                M.style.width = "100%", M.style.height = "100%", M.setAttribute("data-bm-type", E), D.appendChild(M), registerAnimation(M, u)
                            }
                        }

                        function resize() {
                            var u;
                            for (u = 0; u < P; u += 1) S[u].animation.resize()
                        }

                        function activate() {
                            !D && F && T && (window.requestAnimationFrame(first), T = !1)
                        }

                        function freeze() {
                            D = !0
                        }

                        function unfreeze() {
                            D = !1, activate()
                        }

                        function setVolume(u, E) {
                            var F;
                            for (F = 0; F < P; F += 1) S[F].animation.setVolume(u, E)
                        }

                        function mute(u) {
                            var E;
                            for (E = 0; E < P; E += 1) S[E].animation.mute(u)
                        }

                        function unmute(u) {
                            var E;
                            for (E = 0; E < P; E += 1) S[E].animation.unmute(u)
                        }
                        return u.registerAnimation = registerAnimation, u.loadAnimation = loadAnimation, u.setSpeed = setSpeed, u.setDirection = setDirection, u.play = play, u.pause = pause, u.stop = stop, u.togglePause = togglePause, u.searchAnimations = searchAnimations, u.resize = resize, u.goToAndStop = goToAndStop, u.destroy = destroy, u.freeze = freeze, u.unfreeze = unfreeze, u.setVolume = setVolume, u.mute = mute, u.unmute = unmute, u.getRegisteredAnimations = getRegisteredAnimations, u
                    }(),
                    BezierFactory = function() {
                        var u = {};
                        u.getBezierEasing = getBezierEasing;
                        var S = {};

                        function getBezierEasing(u, E, P, F, T) {
                            var D = T || ("bez_" + u + "_" + E + "_" + P + "_" + F).replace(/\./g, "p");
                            if (S[D]) return S[D];
                            var M = new BezierEasing([u, E, P, F]);
                            return S[D] = M, M
                        }
                        var E = 4,
                            P = .001,
                            F = 1e-7,
                            T = 10,
                            D = 11,
                            M = .1,
                            I = "function" == typeof Float32Array;

                        function A(u, S) {
                            return 1 - 3 * S + 3 * u
                        }

                        function B(u, S) {
                            return 3 * S - 6 * u
                        }

                        function C(u) {
                            return 3 * u
                        }

                        function calcBezier(u, S, E) {
                            return ((A(S, E) * u + B(S, E)) * u + C(S)) * u
                        }

                        function getSlope(u, S, E) {
                            return 3 * A(S, E) * u * u + 2 * B(S, E) * u + C(S)
                        }

                        function binarySubdivide(u, S, E, P, D) {
                            var M, I, V = 0;
                            do(M = calcBezier(I = S + (E - S) / 2, P, D) - u) > 0 ? E = I : S = I; while (Math.abs(M) > F && ++V < T);
                            return I
                        }

                        function newtonRaphsonIterate(u, S, P, F) {
                            for (var T = 0; T < E; ++T) {
                                var D = getSlope(S, P, F);
                                if (0 === D) break;
                                var M = calcBezier(S, P, F) - u;
                                S -= M / D
                            }
                            return S
                        }

                        function BezierEasing(u) {
                            this._p = u, this._mSampleValues = I ? new Float32Array(D) : Array(D), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return BezierEasing.prototype = {
                            get: function(u) {
                                var S = this._p[0],
                                    E = this._p[1],
                                    P = this._p[2],
                                    F = this._p[3];
                                return (this._precomputed || this._precompute(), S === E && P === F) ? u : 0 === u ? 0 : 1 === u ? 1 : calcBezier(this._getTForX(u), E, F)
                            },
                            _precompute: function() {
                                var u = this._p[0],
                                    S = this._p[1],
                                    E = this._p[2],
                                    P = this._p[3];
                                this._precomputed = !0, (u !== S || E !== P) && this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var u = this._p[0], S = this._p[2], E = 0; E < D; ++E) this._mSampleValues[E] = calcBezier(E * M, u, S)
                            },
                            _getTForX: function(u) {
                                for (var S = this._p[0], E = this._p[2], F = this._mSampleValues, T = 0, I = 1, V = D - 1; I !== V && F[I] <= u; ++I) T += M;
                                var L = T + (u - F[--I]) / (F[I + 1] - F[I]) * M,
                                    R = getSlope(L, S, E);
                                return R >= P ? newtonRaphsonIterate(u, L, S, E) : 0 === R ? L : binarySubdivide(u, T, T + M, S, E)
                            }
                        }, u
                    }(),
                    pooling = function() {
                        return {
                            double: function(u) {
                                return u.concat(createSizedArray(u.length))
                            }
                        }
                    }(),
                    poolFactory = function() {
                        return function(u, S, E) {
                            var P = 0,
                                F = u,
                                T = createSizedArray(F);
                            return {
                                newElement: function() {
                                    var u;
                                    return P ? (P -= 1, u = T[P]) : u = S(), u
                                },
                                release: function(u) {
                                    P === F && (T = pooling.double(T), F *= 2), E && E(u), T[P] = u, P += 1
                                }
                            }
                        }
                    }(),
                    bezierLengthPool = function() {
                        return poolFactory(8, function() {
                            return {
                                addedLength: 0,
                                percents: createTypedArray("float32", getDefaultCurveSegments()),
                                lengths: createTypedArray("float32", getDefaultCurveSegments())
                            }
                        })
                    }(),
                    segmentsLengthPool = function() {
                        return poolFactory(8, function() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }, function(u) {
                            var S, E = u.lengths.length;
                            for (S = 0; S < E; S += 1) bezierLengthPool.release(u.lengths[S]);
                            u.lengths.length = 0
                        })
                    }();

                function bezFunction() {
                    var u = Math;

                    function pointOnLine2D(u, S, E, P, F, T) {
                        var D = u * P + S * F + E * T - F * P - T * u - E * S;
                        return D > -.001 && D < .001
                    }

                    function pointOnLine3D(S, E, P, F, T, D, M, I, V) {
                        if (0 === P && 0 === D && 0 === V) return pointOnLine2D(S, E, F, T, M, I);
                        var L, R = u.sqrt(u.pow(F - S, 2) + u.pow(T - E, 2) + u.pow(D - P, 2)),
                            G = u.sqrt(u.pow(M - S, 2) + u.pow(I - E, 2) + u.pow(V - P, 2)),
                            O = u.sqrt(u.pow(M - F, 2) + u.pow(I - T, 2) + u.pow(V - D, 2));
                        return (L = R > G ? R > O ? R - G - O : O - G - R : O > G ? O - G - R : G - R - O) > -.0001 && L < 1e-4
                    }
                    var S = function() {
                        return function(u, S, E, P) {
                            var F, T, D, M, I, V, L = getDefaultCurveSegments(),
                                R = 0,
                                G = [],
                                O = [],
                                N = bezierLengthPool.newElement();
                            for (F = 0, D = E.length; F < L; F += 1) {
                                for (T = 0, I = F / (L - 1), V = 0; T < D; T += 1) M = bmPow(1 - I, 3) * u[T] + 3 * bmPow(1 - I, 2) * I * E[T] + 3 * (1 - I) * bmPow(I, 2) * P[T] + bmPow(I, 3) * S[T], G[T] = M, null !== O[T] && (V += bmPow(G[T] - O[T], 2)), O[T] = G[T];
                                V && (R += V = bmSqrt(V)), N.percents[F] = I, N.lengths[F] = R
                            }
                            return N.addedLength = R, N
                        }
                    }();

                    function getSegmentsLength(u) {
                        var E, P = segmentsLengthPool.newElement(),
                            F = u.c,
                            T = u.v,
                            D = u.o,
                            M = u.i,
                            I = u._length,
                            V = P.lengths,
                            L = 0;
                        for (E = 0; E < I - 1; E += 1) V[E] = S(T[E], T[E + 1], D[E], M[E + 1]), L += V[E].addedLength;
                        return F && I && (V[E] = S(T[E], T[0], D[E], M[0]), L += V[E].addedLength), P.totalLength = L, P
                    }

                    function BezierData(u) {
                        this.segmentLength = 0, this.points = Array(u)
                    }

                    function PointData(u, S) {
                        this.partialLength = u, this.point = S
                    }
                    var E = function() {
                        var u = {};
                        return function(S, E, P, F) {
                            var T = (S[0] + "_" + S[1] + "_" + E[0] + "_" + E[1] + "_" + P[0] + "_" + P[1] + "_" + F[0] + "_" + F[1]).replace(/\./g, "p");
                            if (!u[T]) {
                                var D, M, I, V, L, R, G, O = getDefaultCurveSegments(),
                                    N = 0,
                                    H = null;
                                2 === S.length && (S[0] !== E[0] || S[1] !== E[1]) && pointOnLine2D(S[0], S[1], E[0], E[1], S[0] + P[0], S[1] + P[1]) && pointOnLine2D(S[0], S[1], E[0], E[1], E[0] + F[0], E[1] + F[1]) && (O = 2);
                                var W = new BezierData(O);
                                for (D = 0, I = P.length; D < O; D += 1) {
                                    for (M = 0, G = createSizedArray(I), L = D / (O - 1), R = 0; M < I; M += 1) V = bmPow(1 - L, 3) * S[M] + 3 * bmPow(1 - L, 2) * L * (S[M] + P[M]) + 3 * (1 - L) * bmPow(L, 2) * (E[M] + F[M]) + bmPow(L, 3) * E[M], G[M] = V, null !== H && (R += bmPow(G[M] - H[M], 2));
                                    N += R = bmSqrt(R), W.points[D] = new PointData(R, G), H = G
                                }
                                W.segmentLength = N, u[T] = W
                            }
                            return u[T]
                        }
                    }();

                    function getDistancePerc(u, S) {
                        var E = S.percents,
                            P = S.lengths,
                            F = E.length,
                            T = bmFloor((F - 1) * u),
                            D = u * S.addedLength,
                            M = 0;
                        if (T === F - 1 || 0 === T || D === P[T]) return E[T];
                        for (var I = P[T] > D ? -1 : 1, V = !0; V;)
                            if (P[T] <= D && P[T + 1] > D ? (M = (D - P[T]) / (P[T + 1] - P[T]), V = !1) : T += I, T < 0 || T >= F - 1) {
                                if (T === F - 1) return E[T];
                                V = !1
                            }
                        return E[T] + (E[T + 1] - E[T]) * M
                    }

                    function getPointInSegment(S, E, P, F, T, D) {
                        var M = getDistancePerc(T, D),
                            I = 1 - M;
                        return [u.round((I * I * I * S[0] + (M * I * I + I * M * I + I * I * M) * P[0] + (M * M * I + I * M * M + M * I * M) * F[0] + M * M * M * E[0]) * 1e3) / 1e3, u.round((I * I * I * S[1] + (M * I * I + I * M * I + I * I * M) * P[1] + (M * M * I + I * M * M + M * I * M) * F[1] + M * M * M * E[1]) * 1e3) / 1e3]
                    }
                    var P = createTypedArray("float32", 8);
                    return {
                        getSegmentsLength: getSegmentsLength,
                        getNewSegment: function(S, E, F, T, D, M, I) {
                            D < 0 ? D = 0 : D > 1 && (D = 1);
                            var V, L = getDistancePerc(D, I),
                                R = getDistancePerc(M = M > 1 ? 1 : M, I),
                                G = S.length,
                                O = 1 - L,
                                N = 1 - R,
                                H = O * O * O,
                                W = L * O * O * 3,
                                $ = L * L * O * 3,
                                Y = L * L * L,
                                X = O * O * N,
                                Z = L * O * N + O * L * N + O * O * R,
                                J = L * L * N + O * L * R + L * O * R,
                                K = L * L * R,
                                U = O * N * N,
                                Q = L * N * N + O * R * N + O * N * R,
                                tt = L * R * N + O * R * R + L * N * R,
                                te = L * R * R,
                                tr = N * N * N,
                                ts = R * N * N + N * R * N + N * N * R,
                                ta = R * R * N + N * R * R + R * N * R,
                                tn = R * R * R;
                            for (V = 0; V < G; V += 1) P[4 * V] = u.round((H * S[V] + W * F[V] + $ * T[V] + Y * E[V]) * 1e3) / 1e3, P[4 * V + 1] = u.round((X * S[V] + Z * F[V] + J * T[V] + K * E[V]) * 1e3) / 1e3, P[4 * V + 2] = u.round((U * S[V] + Q * F[V] + tt * T[V] + te * E[V]) * 1e3) / 1e3, P[4 * V + 3] = u.round((tr * S[V] + ts * F[V] + ta * T[V] + tn * E[V]) * 1e3) / 1e3;
                            return P
                        },
                        getPointInSegment: getPointInSegment,
                        buildBezierData: E,
                        pointOnLine2D: pointOnLine2D,
                        pointOnLine3D: pointOnLine3D
                    }
                }
                var bez = bezFunction(),
                    initFrame = initialDefaultFrame,
                    mathAbs = Math.abs;

                function interpolateValue(u, S) {
                    var E, P, F, T, D, M = this.offsetTime;
                    "multidimensional" === this.propType && (W = createTypedArray("float32", this.pv.length));
                    for (var I = S.lastIndex, V = I, L = this.keyframes.length - 1, R = !0; R;) {
                        if ($ = this.keyframes[V], Y = this.keyframes[V + 1], V === L - 1 && u >= Y.t - M) {
                            $.h && ($ = Y), I = 0;
                            break
                        }
                        if (Y.t - M > u) {
                            I = V;
                            break
                        }
                        V < L - 1 ? V += 1 : (I = 0, R = !1)
                    }
                    X = this.keyframesMetadata[V] || {};
                    var G = Y.t - M,
                        O = $.t - M;
                    if ($.to) {
                        X.bezierData || (X.bezierData = bez.buildBezierData($.s, Y.s || $.e, $.to, $.ti));
                        var N = X.bezierData;
                        if (u >= G || u < O) {
                            var H = u >= G ? N.points.length - 1 : 0;
                            for (Z = 0, J = N.points[H].point.length; Z < J; Z += 1) W[Z] = N.points[H].point[Z]
                        } else {
                            X.__fnct ? tt = X.__fnct : (tt = BezierFactory.getBezierEasing($.o.x, $.o.y, $.i.x, $.i.y, $.n).get, X.__fnct = tt), K = tt((u - O) / (G - O));
                            var W, $, Y, X, Z, J, K, U, Q, tt, te, tr, ts = N.segmentLength * K,
                                ta = S.lastFrame < u && S._lastKeyframeIndex === V ? S._lastAddedLength : 0;
                            for (Q = S.lastFrame < u && S._lastKeyframeIndex === V ? S._lastPoint : 0, R = !0, U = N.points.length; R;) {
                                if (ta += N.points[Q].partialLength, 0 === ts || 0 === K || Q === N.points.length - 1) {
                                    for (Z = 0, J = N.points[Q].point.length; Z < J; Z += 1) W[Z] = N.points[Q].point[Z];
                                    break
                                }
                                if (ts >= ta && ts < ta + N.points[Q + 1].partialLength) {
                                    for (Z = 0, tr = (ts - ta) / N.points[Q + 1].partialLength, J = N.points[Q].point.length; Z < J; Z += 1) W[Z] = N.points[Q].point[Z] + (N.points[Q + 1].point[Z] - N.points[Q].point[Z]) * tr;
                                    break
                                }
                                Q < U - 1 ? Q += 1 : R = !1
                            }
                            S._lastPoint = Q, S._lastAddedLength = ta - N.points[Q].partialLength, S._lastKeyframeIndex = V
                        }
                    } else if (L = $.s.length, te = Y.s || $.e, this.sh && 1 !== $.h) u >= G ? (W[0] = te[0], W[1] = te[1], W[2] = te[2]) : u <= O ? (W[0] = $.s[0], W[1] = $.s[1], W[2] = $.s[2]) : quaternionToEuler(W, slerp(createQuaternion($.s), createQuaternion(te), (u - O) / (G - O)));
                    else
                        for (V = 0; V < L; V += 1) 1 !== $.h && (u >= G ? K = 1 : u < O ? K = 0 : ($.o.x.constructor === Array ? (X.__fnct || (X.__fnct = []), X.__fnct[V] ? tt = X.__fnct[V] : (E = void 0 === $.o.x[V] ? $.o.x[0] : $.o.x[V], P = void 0 === $.o.y[V] ? $.o.y[0] : $.o.y[V], F = void 0 === $.i.x[V] ? $.i.x[0] : $.i.x[V], T = void 0 === $.i.y[V] ? $.i.y[0] : $.i.y[V], tt = BezierFactory.getBezierEasing(E, P, F, T).get, X.__fnct[V] = tt)) : X.__fnct ? tt = X.__fnct : (E = $.o.x, P = $.o.y, F = $.i.x, T = $.i.y, tt = BezierFactory.getBezierEasing(E, P, F, T).get, $.keyframeMetadata = tt), K = tt((u - O) / (G - O)))), te = Y.s || $.e, D = 1 === $.h ? $.s[V] : $.s[V] + (te[V] - $.s[V]) * K, "multidimensional" === this.propType ? W[V] = D : W = D;
                    return S.lastIndex = I, W
                }

                function slerp(u, S, E) {
                    var P, F, T, D, M, I = [],
                        V = u[0],
                        L = u[1],
                        R = u[2],
                        G = u[3],
                        O = S[0],
                        N = S[1],
                        H = S[2],
                        W = S[3];
                    return (F = V * O + L * N + R * H + G * W) < 0 && (F = -F, O = -O, N = -N, H = -H, W = -W), 1 - F > 1e-6 ? (T = Math.sin(P = Math.acos(F)), D = Math.sin((1 - E) * P) / T, M = Math.sin(E * P) / T) : (D = 1 - E, M = E), I[0] = D * V + M * O, I[1] = D * L + M * N, I[2] = D * R + M * H, I[3] = D * G + M * W, I
                }

                function quaternionToEuler(u, S) {
                    var E = S[0],
                        P = S[1],
                        F = S[2],
                        T = S[3],
                        D = Math.atan2(2 * P * T - 2 * E * F, 1 - 2 * P * P - 2 * F * F),
                        M = Math.asin(2 * E * P + 2 * F * T),
                        I = Math.atan2(2 * E * T - 2 * P * F, 1 - 2 * E * E - 2 * F * F);
                    u[0] = D / degToRads, u[1] = M / degToRads, u[2] = I / degToRads
                }

                function createQuaternion(u) {
                    var S = u[0] * degToRads,
                        E = u[1] * degToRads,
                        P = u[2] * degToRads,
                        F = Math.cos(S / 2),
                        T = Math.cos(E / 2),
                        D = Math.cos(P / 2),
                        M = Math.sin(S / 2),
                        I = Math.sin(E / 2),
                        V = Math.sin(P / 2),
                        L = F * T * D - M * I * V;
                    return [M * I * D + F * T * V, M * T * D + F * I * V, F * I * D - M * T * V, L]
                }

                function getValueAtCurrentTime() {
                    var u = this.comp.renderedFrame - this.offsetTime,
                        S = this.keyframes[0].t - this.offsetTime,
                        E = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(u === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= E && u >= E || this._caching.lastFrame < S && u < S))) {
                        this._caching.lastFrame >= u && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var P = this.interpolateValue(u, this._caching);
                        this.pv = P
                    }
                    return this._caching.lastFrame = u, this.pv
                }

                function setVValue(u) {
                    var S;
                    if ("unidimensional" === this.propType) S = u * this.mult, mathAbs(this.v - S) > 1e-5 && (this.v = S, this._mdf = !0);
                    else
                        for (var E = 0, P = this.v.length; E < P;) S = u[E] * this.mult, mathAbs(this.v[E] - S) > 1e-5 && (this.v[E] = S, this._mdf = !0), E += 1
                }

                function processEffectsSequence() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                        if (this.lock) {
                            this.setVValue(this.pv);
                            return
                        }
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var u, S = this.effectsSequence.length,
                            E = this.kf ? this.pv : this.data.k;
                        for (u = 0; u < S; u += 1) E = this.effectsSequence[u](E);
                        this.setVValue(E), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }

                function addEffect(u) {
                    this.effectsSequence.push(u), this.container.addDynamicProperty(this)
                }

                function ValueProperty(u, S, E, P) {
                    this.propType = "unidimensional", this.mult = E || 1, this.data = S, this.v = E ? S.k * E : S.k, this.pv = S.k, this._mdf = !1, this.elem = u, this.container = P, this.comp = u.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
                }

                function MultiDimensionalProperty(u, S, E, P) {
                    this.propType = "multidimensional", this.mult = E || 1, this.data = S, this._mdf = !1, this.elem = u, this.container = P, this.comp = u.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var F, T = S.k.length;
                    for (F = 0, this.v = createTypedArray("float32", T), this.pv = createTypedArray("float32", T), this.vel = createTypedArray("float32", T); F < T; F += 1) this.v[F] = S.k[F] * this.mult, this.pv[F] = S.k[F];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
                }

                function KeyframedValueProperty(u, S, E, P) {
                    this.propType = "unidimensional", this.keyframes = S.k, this.keyframesMetadata = [], this.offsetTime = u.data.st, this.frameId = -1, this._caching = {
                        lastFrame: initFrame,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = S, this.mult = E || 1, this.elem = u, this.container = P, this.comp = u.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
                }

                function KeyframedMultidimensionalProperty(u, S, E, P) {
                    this.propType = "multidimensional";
                    var F, T, D, M, I, V = S.k.length;
                    for (F = 0; F < V - 1; F += 1) S.k[F].to && S.k[F].s && S.k[F + 1] && S.k[F + 1].s && (T = S.k[F].s, D = S.k[F + 1].s, M = S.k[F].to, I = S.k[F].ti, (2 === T.length && !(T[0] === D[0] && T[1] === D[1]) && bez.pointOnLine2D(T[0], T[1], D[0], D[1], T[0] + M[0], T[1] + M[1]) && bez.pointOnLine2D(T[0], T[1], D[0], D[1], D[0] + I[0], D[1] + I[1]) || 3 === T.length && !(T[0] === D[0] && T[1] === D[1] && T[2] === D[2]) && bez.pointOnLine3D(T[0], T[1], T[2], D[0], D[1], D[2], T[0] + M[0], T[1] + M[1], T[2] + M[2]) && bez.pointOnLine3D(T[0], T[1], T[2], D[0], D[1], D[2], D[0] + I[0], D[1] + I[1], D[2] + I[2])) && (S.k[F].to = null, S.k[F].ti = null), T[0] === D[0] && T[1] === D[1] && 0 === M[0] && 0 === M[1] && 0 === I[0] && 0 === I[1] && (2 === T.length || T[2] === D[2] && 0 === M[2] && 0 === I[2]) && (S.k[F].to = null, S.k[F].ti = null));
                    this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = S, this.keyframes = S.k, this.keyframesMetadata = [], this.offsetTime = u.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = E || 1, this.elem = u, this.container = P, this.comp = u.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
                    var L = S.k[0].s.length;
                    for (F = 0, this.v = createTypedArray("float32", L), this.pv = createTypedArray("float32", L); F < L; F += 1) this.v[F] = initFrame, this.pv[F] = initFrame;
                    this._caching = {
                        lastFrame: initFrame,
                        lastIndex: 0,
                        value: createTypedArray("float32", L)
                    }, this.addEffect = addEffect
                }
                var PropertyFactory = function() {
                    return {
                        getProp: function(u, S, E, P, F) {
                            var T;
                            if (S.sid && (S = u.globalData.slotManager.getProp(S)), S.k.length) {
                                if ("number" == typeof S.k[0]) T = new MultiDimensionalProperty(u, S, P, F);
                                else switch (E) {
                                    case 0:
                                        T = new KeyframedValueProperty(u, S, P, F);
                                        break;
                                    case 1:
                                        T = new KeyframedMultidimensionalProperty(u, S, P, F)
                                }
                            } else T = new ValueProperty(u, S, P, F);
                            return T.effectsSequence.length && F.addDynamicProperty(T), T
                        }
                    }
                }();

                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function(u) {
                        -1 === this.dynamicProperties.indexOf(u) && (this.dynamicProperties.push(u), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        this._mdf = !1;
                        var u, S = this.dynamicProperties.length;
                        for (u = 0; u < S; u += 1) this.dynamicProperties[u].getValue(), this.dynamicProperties[u]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(u) {
                        this.container = u, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var pointPool = function() {
                    return poolFactory(8, function() {
                        return createTypedArray("float32", 2)
                    })
                }();

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }
                ShapePath.prototype.setPathData = function(u, S) {
                    this.c = u, this.setLength(S);
                    for (var E = 0; E < S;) this.v[E] = pointPool.newElement(), this.o[E] = pointPool.newElement(), this.i[E] = pointPool.newElement(), E += 1
                }, ShapePath.prototype.setLength = function(u) {
                    for (; this._maxLength < u;) this.doubleArrayLength();
                    this._length = u
                }, ShapePath.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function(u, S, E, P, F) {
                    var T;
                    switch (this._length = Math.max(this._length, P + 1), this._length >= this._maxLength && this.doubleArrayLength(), E) {
                        case "v":
                            T = this.v;
                            break;
                        case "i":
                            T = this.i;
                            break;
                        case "o":
                            T = this.o;
                            break;
                        default:
                            T = []
                    }
                    T[P] && (!T[P] || F) || (T[P] = pointPool.newElement()), T[P][0] = u, T[P][1] = S
                }, ShapePath.prototype.setTripleAt = function(u, S, E, P, F, T, D, M) {
                    this.setXYAt(u, S, "v", D, M), this.setXYAt(E, P, "o", D, M), this.setXYAt(F, T, "i", D, M)
                }, ShapePath.prototype.reverse = function() {
                    var u, S = new ShapePath;
                    S.setPathData(this.c, this._length);
                    var E = this.v,
                        P = this.o,
                        F = this.i,
                        T = 0;
                    this.c && (S.setTripleAt(E[0][0], E[0][1], F[0][0], F[0][1], P[0][0], P[0][1], 0, !1), T = 1);
                    var D = this._length - 1,
                        M = this._length;
                    for (u = T; u < M; u += 1) S.setTripleAt(E[D][0], E[D][1], F[D][0], F[D][1], P[D][0], P[D][1], u, !1), D -= 1;
                    return S
                }, ShapePath.prototype.length = function() {
                    return this._length
                };
                var shapePool = function() {
                    function clone(S) {
                        var E, P = u.newElement(),
                            F = void 0 === S._length ? S.v.length : S._length;
                        for (P.setLength(F), P.c = S.c, E = 0; E < F; E += 1) P.setTripleAt(S.v[E][0], S.v[E][1], S.o[E][0], S.o[E][1], S.i[E][0], S.i[E][1], E);
                        return P
                    }
                    var u = poolFactory(4, function() {
                        return new ShapePath
                    }, function(u) {
                        var S, E = u._length;
                        for (S = 0; S < E; S += 1) pointPool.release(u.v[S]), pointPool.release(u.i[S]), pointPool.release(u.o[S]), u.v[S] = null, u.i[S] = null, u.o[S] = null;
                        u._length = 0, u.c = !1
                    });
                    return u.clone = clone, u
                }();

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }
                ShapeCollection.prototype.addShape = function(u) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = u, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function() {
                    var u;
                    for (u = 0; u < this._length; u += 1) shapePool.release(this.shapes[u]);
                    this._length = 0
                };
                var shapeCollectionPool = function() {
                        var u = {
                                newShapeCollection: newShapeCollection,
                                release: release
                            },
                            S = 0,
                            E = 4,
                            P = createSizedArray(4);

                        function newShapeCollection() {
                            var u;
                            return S ? (S -= 1, u = P[S]) : u = new ShapeCollection, u
                        }

                        function release(u) {
                            var F, T = u._length;
                            for (F = 0; F < T; F += 1) shapePool.release(u.shapes[F]);
                            u._length = 0, S === E && (P = pooling.double(P), E *= 2), P[S] = u, S += 1
                        }
                        return u
                    }(),
                    ShapePropertyFactory = function() {
                        var u = -999999;

                        function interpolateShape(u, S, E) {
                            var P = E.lastIndex,
                                F = this.keyframes;
                            if (u < F[0].t - this.offsetTime) T = F[0].s[0], M = !0, P = 0;
                            else if (u >= F[F.length - 1].t - this.offsetTime) T = F[F.length - 1].s ? F[F.length - 1].s[0] : F[F.length - 2].e[0], M = !0;
                            else {
                                for (var T, D, M, I, V, L, R, G, O, N, H, W, $, Y = P, X = F.length - 1, Z = !0; Z && (N = F[Y], !((H = F[Y + 1]).t - this.offsetTime > u));) Y < X - 1 ? Y += 1 : Z = !1;
                                W = this.keyframesMetadata[Y] || {}, M = 1 === N.h, P = Y, M || (u >= H.t - this.offsetTime ? G = 1 : u < N.t - this.offsetTime ? G = 0 : (W.__fnct ? $ = W.__fnct : ($ = BezierFactory.getBezierEasing(N.o.x, N.o.y, N.i.x, N.i.y).get, W.__fnct = $), G = $((u - (N.t - this.offsetTime)) / (H.t - this.offsetTime - (N.t - this.offsetTime)))), D = H.s ? H.s[0] : N.e[0]), T = N.s[0]
                            }
                            for (I = 0, L = S._length, R = T.i[0].length, E.lastIndex = P; I < L; I += 1)
                                for (V = 0; V < R; V += 1) O = M ? T.i[I][V] : T.i[I][V] + (D.i[I][V] - T.i[I][V]) * G, S.i[I][V] = O, O = M ? T.o[I][V] : T.o[I][V] + (D.o[I][V] - T.o[I][V]) * G, S.o[I][V] = O, O = M ? T.v[I][V] : T.v[I][V] + (D.v[I][V] - T.v[I][V]) * G, S.v[I][V] = O
                        }

                        function interpolateShapeCurrentTime() {
                            var S = this.comp.renderedFrame - this.offsetTime,
                                E = this.keyframes[0].t - this.offsetTime,
                                P = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                F = this._caching.lastFrame;
                            return F !== u && (F < E && S < E || F > P && S > P) || (this._caching.lastIndex = F < S ? this._caching.lastIndex : 0, this.interpolateShape(S, this.pv, this._caching)), this._caching.lastFrame = S, this.pv
                        }

                        function resetShape() {
                            this.paths = this.localShapeCollection
                        }

                        function shapesEqual(u, S) {
                            if (u._length !== S._length || u.c !== S.c) return !1;
                            var E, P = u._length;
                            for (E = 0; E < P; E += 1)
                                if (u.v[E][0] !== S.v[E][0] || u.v[E][1] !== S.v[E][1] || u.o[E][0] !== S.o[E][0] || u.o[E][1] !== S.o[E][1] || u.i[E][0] !== S.i[E][0] || u.i[E][1] !== S.i[E][1]) return !1;
                            return !0
                        }

                        function setVValue(u) {
                            shapesEqual(this.v, u) || (this.v = shapePool.clone(u), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function processEffectsSequence() {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (!this.effectsSequence.length) {
                                    this._mdf = !1;
                                    return
                                }
                                if (this.lock) {
                                    this.setVValue(this.pv);
                                    return
                                }
                                this.lock = !0, this._mdf = !1, u = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var u, S, E = this.effectsSequence.length;
                                for (S = 0; S < E; S += 1) u = this.effectsSequence[S](u);
                                this.setVValue(u), this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                        }

                        function ShapeProperty(u, S, E) {
                            this.propType = "shape", this.comp = u.comp, this.container = u, this.elem = u, this.data = S, this.k = !1, this.kf = !1, this._mdf = !1;
                            var P = 3 === E ? S.pt.k : S.ks.k;
                            this.v = shapePool.clone(P), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = resetShape, this.effectsSequence = []
                        }

                        function addEffect(u) {
                            this.effectsSequence.push(u), this.container.addDynamicProperty(this)
                        }

                        function KeyframedShapeProperty(S, E, P) {
                            this.propType = "shape", this.comp = S.comp, this.elem = S, this.container = S, this.offsetTime = S.data.st, this.keyframes = 3 === P ? E.pt.k : E.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var F = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, F), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = u, this.reset = resetShape, this._caching = {
                                lastFrame: u,
                                lastIndex: 0
                            }, this.effectsSequence = [interpolateShapeCurrentTime.bind(this)]
                        }
                        ShapeProperty.prototype.interpolateShape = interpolateShape, ShapeProperty.prototype.getValue = processEffectsSequence, ShapeProperty.prototype.setVValue = setVValue, ShapeProperty.prototype.addEffect = addEffect, KeyframedShapeProperty.prototype.getValue = processEffectsSequence, KeyframedShapeProperty.prototype.interpolateShape = interpolateShape, KeyframedShapeProperty.prototype.setVValue = setVValue, KeyframedShapeProperty.prototype.addEffect = addEffect;
                        var S = function() {
                                var u = roundCorner;

                                function EllShapePropertyFactory(u, S) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = S.d, this.elem = u, this.comp = u.comp, this.frameId = -1, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, S.p, 1, 0, this), this.s = PropertyFactory.getProp(u, S.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return EllShapePropertyFactory.prototype = {
                                    reset: resetShape,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var S = this.p.v[0],
                                            E = this.p.v[1],
                                            P = this.s.v[0] / 2,
                                            F = this.s.v[1] / 2,
                                            T = 3 !== this.d,
                                            D = this.v;
                                        D.v[0][0] = S, D.v[0][1] = E - F, D.v[1][0] = T ? S + P : S - P, D.v[1][1] = E, D.v[2][0] = S, D.v[2][1] = E + F, D.v[3][0] = T ? S - P : S + P, D.v[3][1] = E, D.i[0][0] = T ? S - P * u : S + P * u, D.i[0][1] = E - F, D.i[1][0] = T ? S + P : S - P, D.i[1][1] = E - F * u, D.i[2][0] = T ? S + P * u : S - P * u, D.i[2][1] = E + F, D.i[3][0] = T ? S - P : S + P, D.i[3][1] = E + F * u, D.o[0][0] = T ? S + P * u : S - P * u, D.o[0][1] = E - F, D.o[1][0] = T ? S + P : S - P, D.o[1][1] = E + F * u, D.o[2][0] = T ? S - P * u : S + P * u, D.o[2][1] = E + F, D.o[3][0] = T ? S - P : S + P, D.o[3][1] = E - F * u
                                    }
                                }, extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory), EllShapePropertyFactory
                            }(),
                            E = function() {
                                function StarShapePropertyFactory(u, S) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = u, this.comp = u.comp, this.data = S, this.frameId = -1, this.d = S.d, this.initDynamicPropertyContainer(u), 1 === S.sy ? (this.ir = PropertyFactory.getProp(u, S.ir, 0, 0, this), this.is = PropertyFactory.getProp(u, S.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(u, S.pt, 0, 0, this), this.p = PropertyFactory.getProp(u, S.p, 1, 0, this), this.r = PropertyFactory.getProp(u, S.r, 0, degToRads, this), this.or = PropertyFactory.getProp(u, S.or, 0, 0, this), this.os = PropertyFactory.getProp(u, S.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return StarShapePropertyFactory.prototype = {
                                    reset: resetShape,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var u, S, E, P, F = 2 * Math.floor(this.pt.v),
                                            T = 2 * Math.PI / F,
                                            D = !0,
                                            M = this.or.v,
                                            I = this.ir.v,
                                            V = this.os.v,
                                            L = this.is.v,
                                            R = 2 * Math.PI * M / (2 * F),
                                            G = 2 * Math.PI * I / (2 * F),
                                            O = -Math.PI / 2;
                                        O += this.r.v;
                                        var N = 3 === this.data.d ? -1 : 1;
                                        for (u = 0, this.v._length = 0; u < F; u += 1) {
                                            S = D ? M : I, E = D ? V : L, P = D ? R : G;
                                            var H = S * Math.cos(O),
                                                W = S * Math.sin(O),
                                                $ = 0 === H && 0 === W ? 0 : W / Math.sqrt(H * H + W * W),
                                                Y = 0 === H && 0 === W ? 0 : -H / Math.sqrt(H * H + W * W);
                                            H += +this.p.v[0], W += +this.p.v[1], this.v.setTripleAt(H, W, H - $ * P * E * N, W - Y * P * E * N, H + $ * P * E * N, W + Y * P * E * N, u, !0), D = !D, O += T * N
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var u, S = Math.floor(this.pt.v),
                                            E = 2 * Math.PI / S,
                                            P = this.or.v,
                                            F = this.os.v,
                                            T = 2 * Math.PI * P / (4 * S),
                                            D = -(.5 * Math.PI),
                                            M = 3 === this.data.d ? -1 : 1;
                                        for (D += this.r.v, this.v._length = 0, u = 0; u < S; u += 1) {
                                            var I = P * Math.cos(D),
                                                V = P * Math.sin(D),
                                                L = 0 === I && 0 === V ? 0 : V / Math.sqrt(I * I + V * V),
                                                R = 0 === I && 0 === V ? 0 : -I / Math.sqrt(I * I + V * V);
                                            I += +this.p.v[0], V += +this.p.v[1], this.v.setTripleAt(I, V, I - L * T * F * M, V - R * T * F * M, I + L * T * F * M, V + R * T * F * M, u, !0), D += E * M
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory), StarShapePropertyFactory
                            }(),
                            P = function() {
                                function RectShapePropertyFactory(u, S) {
                                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = u, this.comp = u.comp, this.frameId = -1, this.d = S.d, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, S.p, 1, 0, this), this.s = PropertyFactory.getProp(u, S.s, 1, 0, this), this.r = PropertyFactory.getProp(u, S.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return RectShapePropertyFactory.prototype = {
                                    convertRectToPath: function() {
                                        var u = this.p.v[0],
                                            S = this.p.v[1],
                                            E = this.s.v[0] / 2,
                                            P = this.s.v[1] / 2,
                                            F = bmMin(E, P, this.r.v),
                                            T = F * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(u + E, S - P + F, u + E, S - P + F, u + E, S - P + T, 0, !0), this.v.setTripleAt(u + E, S + P - F, u + E, S + P - T, u + E, S + P - F, 1, !0), 0 !== F ? (this.v.setTripleAt(u + E - F, S + P, u + E - F, S + P, u + E - T, S + P, 2, !0), this.v.setTripleAt(u - E + F, S + P, u - E + T, S + P, u - E + F, S + P, 3, !0), this.v.setTripleAt(u - E, S + P - F, u - E, S + P - F, u - E, S + P - T, 4, !0), this.v.setTripleAt(u - E, S - P + F, u - E, S - P + T, u - E, S - P + F, 5, !0), this.v.setTripleAt(u - E + F, S - P, u - E + F, S - P, u - E + T, S - P, 6, !0), this.v.setTripleAt(u + E - F, S - P, u + E - T, S - P, u + E - F, S - P, 7, !0)) : (this.v.setTripleAt(u - E, S + P, u - E + T, S + P, u - E, S + P, 2), this.v.setTripleAt(u - E, S - P, u - E, S - P + T, u - E, S - P, 3))) : (this.v.setTripleAt(u + E, S - P + F, u + E, S - P + T, u + E, S - P + F, 0, !0), 0 !== F ? (this.v.setTripleAt(u + E - F, S - P, u + E - F, S - P, u + E - T, S - P, 1, !0), this.v.setTripleAt(u - E + F, S - P, u - E + T, S - P, u - E + F, S - P, 2, !0), this.v.setTripleAt(u - E, S - P + F, u - E, S - P + F, u - E, S - P + T, 3, !0), this.v.setTripleAt(u - E, S + P - F, u - E, S + P - T, u - E, S + P - F, 4, !0), this.v.setTripleAt(u - E + F, S + P, u - E + F, S + P, u - E + T, S + P, 5, !0), this.v.setTripleAt(u + E - F, S + P, u + E - T, S + P, u + E - F, S + P, 6, !0), this.v.setTripleAt(u + E, S + P - F, u + E, S + P - F, u + E, S + P - T, 7, !0)) : (this.v.setTripleAt(u - E, S - P, u - E + T, S - P, u - E, S - P, 1, !0), this.v.setTripleAt(u - E, S + P, u - E, S + P - T, u - E, S + P, 2, !0), this.v.setTripleAt(u + E, S + P, u + E - T, S + P, u + E, S + P, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: resetShape
                                }, extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory), RectShapePropertyFactory
                            }();

                        function getShapeProp(u, F, T) {
                            var D;
                            return 3 === T || 4 === T ? D = (3 === T ? F.pt : F.ks).k.length ? new KeyframedShapeProperty(u, F, T) : new ShapeProperty(u, F, T) : 5 === T ? D = new P(u, F) : 6 === T ? D = new S(u, F) : 7 === T && (D = new E(u, F)), D.k && u.addDynamicProperty(D), D
                        }

                        function getConstructorFunction() {
                            return ShapeProperty
                        }

                        function getKeyframedConstructorFunction() {
                            return KeyframedShapeProperty
                        }
                        var F = {};
                        return F.getShapeProp = getShapeProp, F.getConstructorFunction = getConstructorFunction, F.getKeyframedConstructorFunction = getKeyframedConstructorFunction, F
                    }(),
                    Matrix = function() {
                        var u = Math.cos,
                            S = Math.sin,
                            E = Math.tan,
                            P = Math.round;

                        function reset() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function rotate(E) {
                            if (0 === E) return this;
                            var P = u(E),
                                F = S(E);
                            return this._t(P, -F, 0, 0, F, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function rotateX(E) {
                            if (0 === E) return this;
                            var P = u(E),
                                F = S(E);
                            return this._t(1, 0, 0, 0, 0, P, -F, 0, 0, F, P, 0, 0, 0, 0, 1)
                        }

                        function rotateY(E) {
                            if (0 === E) return this;
                            var P = u(E),
                                F = S(E);
                            return this._t(P, 0, F, 0, 0, 1, 0, 0, -F, 0, P, 0, 0, 0, 0, 1)
                        }

                        function rotateZ(E) {
                            if (0 === E) return this;
                            var P = u(E),
                                F = S(E);
                            return this._t(P, -F, 0, 0, F, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function shear(u, S) {
                            return this._t(1, S, u, 1, 0, 0)
                        }

                        function skew(u, S) {
                            return this.shear(E(u), E(S))
                        }

                        function skewFromAxis(P, F) {
                            var T = u(F),
                                D = S(F);
                            return this._t(T, D, 0, 0, -D, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, E(P), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(T, -D, 0, 0, D, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function scale(u, S, E) {
                            return (E || 0 === E || (E = 1), 1 === u && 1 === S && 1 === E) ? this : this._t(u, 0, 0, 0, 0, S, 0, 0, 0, 0, E, 0, 0, 0, 0, 1)
                        }

                        function setTransform(u, S, E, P, F, T, D, M, I, V, L, R, G, O, N, H) {
                            return this.props[0] = u, this.props[1] = S, this.props[2] = E, this.props[3] = P, this.props[4] = F, this.props[5] = T, this.props[6] = D, this.props[7] = M, this.props[8] = I, this.props[9] = V, this.props[10] = L, this.props[11] = R, this.props[12] = G, this.props[13] = O, this.props[14] = N, this.props[15] = H, this
                        }

                        function translate(u, S, E) {
                            return (E = E || 0, 0 !== u || 0 !== S || 0 !== E) ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, u, S, E, 1) : this
                        }

                        function transform(u, S, E, P, F, T, D, M, I, V, L, R, G, O, N, H) {
                            var W = this.props;
                            if (1 === u && 0 === S && 0 === E && 0 === P && 0 === F && 1 === T && 0 === D && 0 === M && 0 === I && 0 === V && 1 === L && 0 === R) return W[12] = W[12] * u + W[15] * G, W[13] = W[13] * T + W[15] * O, W[14] = W[14] * L + W[15] * N, W[15] *= H, this._identityCalculated = !1, this;
                            var $ = W[0],
                                Y = W[1],
                                X = W[2],
                                Z = W[3],
                                J = W[4],
                                K = W[5],
                                U = W[6],
                                Q = W[7],
                                tt = W[8],
                                te = W[9],
                                tr = W[10],
                                ts = W[11],
                                ta = W[12],
                                tn = W[13],
                                th = W[14],
                                tl = W[15];
                            return W[0] = $ * u + Y * F + X * I + Z * G, W[1] = $ * S + Y * T + X * V + Z * O, W[2] = $ * E + Y * D + X * L + Z * N, W[3] = $ * P + Y * M + X * R + Z * H, W[4] = J * u + K * F + U * I + Q * G, W[5] = J * S + K * T + U * V + Q * O, W[6] = J * E + K * D + U * L + Q * N, W[7] = J * P + K * M + U * R + Q * H, W[8] = tt * u + te * F + tr * I + ts * G, W[9] = tt * S + te * T + tr * V + ts * O, W[10] = tt * E + te * D + tr * L + ts * N, W[11] = tt * P + te * M + tr * R + ts * H, W[12] = ta * u + tn * F + th * I + tl * G, W[13] = ta * S + tn * T + th * V + tl * O, W[14] = ta * E + tn * D + th * L + tl * N, W[15] = ta * P + tn * M + th * R + tl * H, this._identityCalculated = !1, this
                        }

                        function multiply(u) {
                            var S = u.props;
                            return this.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15])
                        }

                        function isIdentity() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function equals(u) {
                            for (var S = 0; S < 16;) {
                                if (u.props[S] !== this.props[S]) return !1;
                                S += 1
                            }
                            return !0
                        }

                        function clone(u) {
                            var S;
                            for (S = 0; S < 16; S += 1) u.props[S] = this.props[S];
                            return u
                        }

                        function cloneFromProps(u) {
                            var S;
                            for (S = 0; S < 16; S += 1) this.props[S] = u[S]
                        }

                        function applyToPoint(u, S, E) {
                            return {
                                x: u * this.props[0] + S * this.props[4] + E * this.props[8] + this.props[12],
                                y: u * this.props[1] + S * this.props[5] + E * this.props[9] + this.props[13],
                                z: u * this.props[2] + S * this.props[6] + E * this.props[10] + this.props[14]
                            }
                        }

                        function applyToX(u, S, E) {
                            return u * this.props[0] + S * this.props[4] + E * this.props[8] + this.props[12]
                        }

                        function applyToY(u, S, E) {
                            return u * this.props[1] + S * this.props[5] + E * this.props[9] + this.props[13]
                        }

                        function applyToZ(u, S, E) {
                            return u * this.props[2] + S * this.props[6] + E * this.props[10] + this.props[14]
                        }

                        function getInverseMatrix() {
                            var u = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                S = this.props[5] / u,
                                E = -this.props[1] / u,
                                P = -this.props[4] / u,
                                F = this.props[0] / u,
                                T = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / u,
                                D = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / u,
                                M = new Matrix;
                            return M.props[0] = S, M.props[1] = E, M.props[4] = P, M.props[5] = F, M.props[12] = T, M.props[13] = D, M
                        }

                        function inversePoint(u) {
                            return this.getInverseMatrix().applyToPointArray(u[0], u[1], u[2] || 0)
                        }

                        function inversePoints(u) {
                            var S, E = u.length,
                                P = [];
                            for (S = 0; S < E; S += 1) P[S] = inversePoint(u[S]);
                            return P
                        }

                        function applyToTriplePoints(u, S, E) {
                            var P = createTypedArray("float32", 6);
                            if (this.isIdentity()) P[0] = u[0], P[1] = u[1], P[2] = S[0], P[3] = S[1], P[4] = E[0], P[5] = E[1];
                            else {
                                var F = this.props[0],
                                    T = this.props[1],
                                    D = this.props[4],
                                    M = this.props[5],
                                    I = this.props[12],
                                    V = this.props[13];
                                P[0] = u[0] * F + u[1] * D + I, P[1] = u[0] * T + u[1] * M + V, P[2] = S[0] * F + S[1] * D + I, P[3] = S[0] * T + S[1] * M + V, P[4] = E[0] * F + E[1] * D + I, P[5] = E[0] * T + E[1] * M + V
                            }
                            return P
                        }

                        function applyToPointArray(u, S, E) {
                            return this.isIdentity() ? [u, S, E] : [u * this.props[0] + S * this.props[4] + E * this.props[8] + this.props[12], u * this.props[1] + S * this.props[5] + E * this.props[9] + this.props[13], u * this.props[2] + S * this.props[6] + E * this.props[10] + this.props[14]]
                        }

                        function applyToPointStringified(u, S) {
                            if (this.isIdentity()) return u + "," + S;
                            var E = this.props;
                            return Math.round((u * E[0] + S * E[4] + E[12]) * 100) / 100 + "," + Math.round((u * E[1] + S * E[5] + E[13]) * 100) / 100
                        }

                        function toCSS() {
                            for (var u = 0, S = this.props, E = "matrix3d(", F = 1e4; u < 16;) E += P(S[u] * F) / F + (15 === u ? ")" : ","), u += 1;
                            return E
                        }

                        function roundMatrixProperty(u) {
                            var S = 1e4;
                            return u < 1e-6 && u > 0 || u > -.000001 && u < 0 ? P(u * S) / S : u
                        }

                        function to2dCSS() {
                            var u = this.props;
                            return "matrix(" + roundMatrixProperty(u[0]) + "," + roundMatrixProperty(u[1]) + "," + roundMatrixProperty(u[4]) + "," + roundMatrixProperty(u[5]) + "," + roundMatrixProperty(u[12]) + "," + roundMatrixProperty(u[13]) + ")"
                        }
                        return function() {
                            this.reset = reset, this.rotate = rotate, this.rotateX = rotateX, this.rotateY = rotateY, this.rotateZ = rotateZ, this.skew = skew, this.skewFromAxis = skewFromAxis, this.shear = shear, this.scale = scale, this.setTransform = setTransform, this.translate = translate, this.transform = transform, this.multiply = multiply, this.applyToPoint = applyToPoint, this.applyToX = applyToX, this.applyToY = applyToY, this.applyToZ = applyToZ, this.applyToPointArray = applyToPointArray, this.applyToTriplePoints = applyToTriplePoints, this.applyToPointStringified = applyToPointStringified, this.toCSS = toCSS, this.to2dCSS = to2dCSS, this.clone = clone, this.cloneFromProps = cloneFromProps, this.equals = equals, this.inversePoints = inversePoints, this.inversePoint = inversePoint, this.getInverseMatrix = getInverseMatrix, this._t = this.transform, this.isIdentity = isIdentity, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                        }
                    }();

                function _typeof$3(u) {
                    return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var lottie = {},
                    standalone = "__[STANDALONE]__",
                    animationData = "__[ANIMATIONDATA]__",
                    renderer = "";

                function setLocation(u) {
                    setLocationHref(u)
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(u) {
                    setSubframeEnabled(u)
                }

                function setPrefix(u) {
                    setIdPrefix(u)
                }

                function loadAnimation(u) {
                    return !0 === standalone && (u.animationData = JSON.parse(animationData)), animationManager.loadAnimation(u)
                }

                function setQuality(u) {
                    if ("string" == typeof u) switch (u) {
                        case "high":
                            setDefaultCurveSegments(200);
                            break;
                        default:
                        case "medium":
                            setDefaultCurveSegments(50);
                            break;
                        case "low":
                            setDefaultCurveSegments(10)
                    } else !isNaN(u) && u > 1 && setDefaultCurveSegments(u);
                    getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
                }

                function inBrowser() {
                    return "undefined" != typeof navigator
                }

                function installPlugin(u, S) {
                    "expressions" === u && setExpressionsPlugin(S)
                }

                function getFactory(u) {
                    switch (u) {
                        case "propertyFactory":
                            return PropertyFactory;
                        case "shapePropertyFactory":
                            return ShapePropertyFactory;
                        case "matrix":
                            return Matrix;
                        default:
                            return null
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(u) {
                    for (var S = queryString.split("&"), E = 0; E < S.length; E += 1) {
                        var P = S[E].split("=");
                        if (decodeURIComponent(P[0]) == u) return decodeURIComponent(P[1])
                    }
                    return null
                }
                lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
                var queryString = "";
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"),
                        index = scripts.length - 1,
                        myScript = scripts[index] || {
                            src: ""
                        };
                    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                try {
                    "object" !== _typeof$3(exports) && __webpack_require__.amdO
                } catch (err) {}
                var ShapeModifiers = function() {
                    var u = {},
                        S = {};

                    function registerModifier(u, E) {
                        S[u] || (S[u] = E)
                    }

                    function getModifier(u, E, P) {
                        return new S[u](E, P)
                    }
                    return u.registerModifier = registerModifier, u.getModifier = getModifier, u
                }();

                function ShapeModifier() {}

                function TrimModifier() {}

                function PuckerAndBloatModifier() {}
                ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(u) {
                    if (!this.closed) {
                        u.sh.container.addDynamicProperty(u.sh);
                        var S = {
                            shape: u.sh,
                            data: u,
                            localShapeCollection: shapeCollectionPool.newShapeCollection()
                        };
                        this.shapes.push(S), this.addShapeToModifier(S), this._isAnimated && u.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function(u, S) {
                    this.shapes = [], this.elem = u, this.initDynamicPropertyContainer(u), this.initModifierProperties(u, S), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(u, S) {
                    this.s = PropertyFactory.getProp(u, S.s, 0, .01, this), this.e = PropertyFactory.getProp(u, S.e, 0, .01, this), this.o = PropertyFactory.getProp(u, S.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = S.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function(u) {
                    u.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function(u, S, E, P, F) {
                    var T, D, M = [];
                    S <= 1 ? M.push({
                        s: u,
                        e: S
                    }) : u >= 1 ? M.push({
                        s: u - 1,
                        e: S - 1
                    }) : (M.push({
                        s: u,
                        e: 1
                    }), M.push({
                        s: 0,
                        e: S - 1
                    }));
                    var I = [],
                        V = M.length;
                    for (T = 0; T < V; T += 1)(D = M[T]).e * F < P || D.s * F > P + E || I.push([D.s * F <= P ? 0 : (D.s * F - P) / E, D.e * F >= P + E ? 1 : (D.e * F - P) / E]);
                    return I.length || I.push([0, 0]), I
                }, TrimModifier.prototype.releasePathsData = function(u) {
                    var S, E = u.length;
                    for (S = 0; S < E; S += 1) segmentsLengthPool.release(u[S]);
                    return u.length = 0, u
                }, TrimModifier.prototype.processShapes = function(u) {
                    if (this._mdf || u) {
                        var S = this.o.v % 360 / 360;
                        if (S < 0 && (S += 1), (T = this.s.v > 1 ? 1 + S : this.s.v < 0 ? 0 + S : this.s.v + S) > (D = this.e.v > 1 ? 1 + S : this.e.v < 0 ? 0 + S : this.e.v + S)) {
                            var E = T;
                            T = D, D = E
                        }
                        T = 1e-4 * Math.round(1e4 * T), D = 1e-4 * Math.round(1e4 * D), this.sValue = T, this.eValue = D
                    } else T = this.sValue, D = this.eValue;
                    var P = this.shapes.length,
                        F = 0;
                    if (D === T)
                        for (I = 0; I < P; I += 1) this.shapes[I].localShapeCollection.releaseShapes(), this.shapes[I].shape._mdf = !0, this.shapes[I].shape.paths = this.shapes[I].localShapeCollection, this._mdf && (this.shapes[I].pathsData.length = 0);
                    else if (1 === D && 0 === T || 0 === D && 1 === T) {
                        if (this._mdf)
                            for (I = 0; I < P; I += 1) this.shapes[I].pathsData.length = 0, this.shapes[I].shape._mdf = !0
                    } else {
                        var T, D, M, I, V, L, R, G, O, N, H, W, $ = [];
                        for (I = 0; I < P; I += 1)
                            if ((N = this.shapes[I]).shape._mdf || this._mdf || u || 2 === this.m) {
                                if (L = (M = N.shape.paths)._length, O = 0, !N.shape._mdf && N.pathsData.length) O = N.totalShapeLength;
                                else {
                                    for (V = 0, R = this.releasePathsData(N.pathsData); V < L; V += 1) G = bez.getSegmentsLength(M.shapes[V]), R.push(G), O += G.totalLength;
                                    N.totalShapeLength = O, N.pathsData = R
                                }
                                F += O, N.shape._mdf = !0
                            } else N.shape.paths = N.localShapeCollection;
                        var Y = T,
                            X = D,
                            Z = 0;
                        for (I = P - 1; I >= 0; I -= 1)
                            if ((N = this.shapes[I]).shape._mdf) {
                                for ((H = N.localShapeCollection).releaseShapes(), 2 === this.m && P > 1 ? (W = this.calculateShapeEdges(T, D, N.totalShapeLength, Z, F), Z += N.totalShapeLength) : W = [
                                        [Y, X]
                                    ], L = W.length, V = 0; V < L; V += 1) {
                                    Y = W[V][0], X = W[V][1], $.length = 0, X <= 1 ? $.push({
                                        s: N.totalShapeLength * Y,
                                        e: N.totalShapeLength * X
                                    }) : Y >= 1 ? $.push({
                                        s: N.totalShapeLength * (Y - 1),
                                        e: N.totalShapeLength * (X - 1)
                                    }) : ($.push({
                                        s: N.totalShapeLength * Y,
                                        e: N.totalShapeLength
                                    }), $.push({
                                        s: 0,
                                        e: N.totalShapeLength * (X - 1)
                                    }));
                                    var J = this.addShapes(N, $[0]);
                                    if ($[0].s !== $[0].e) {
                                        if ($.length > 1) {
                                            if (N.shape.paths.shapes[N.shape.paths._length - 1].c) {
                                                var K = J.pop();
                                                this.addPaths(J, H), J = this.addShapes(N, $[1], K)
                                            } else this.addPaths(J, H), J = this.addShapes(N, $[1])
                                        }
                                        this.addPaths(J, H)
                                    }
                                }
                                N.shape.paths = H
                            }
                    }
                }, TrimModifier.prototype.addPaths = function(u, S) {
                    var E, P = u.length;
                    for (E = 0; E < P; E += 1) S.addShape(u[E])
                }, TrimModifier.prototype.addSegment = function(u, S, E, P, F, T, D) {
                    F.setXYAt(S[0], S[1], "o", T), F.setXYAt(E[0], E[1], "i", T + 1), D && F.setXYAt(u[0], u[1], "v", T), F.setXYAt(P[0], P[1], "v", T + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function(u, S, E, P) {
                    S.setXYAt(u[1], u[5], "o", E), S.setXYAt(u[2], u[6], "i", E + 1), P && S.setXYAt(u[0], u[4], "v", E), S.setXYAt(u[3], u[7], "v", E + 1)
                }, TrimModifier.prototype.addShapes = function(u, S, E) {
                    var P, F, T, D, M, I, V, L, R = u.pathsData,
                        G = u.shape.paths.shapes,
                        O = u.shape.paths._length,
                        N = 0,
                        H = [],
                        W = !0;
                    for (E ? (M = E._length, L = E._length) : (E = shapePool.newElement(), M = 0, L = 0), H.push(E), P = 0; P < O; P += 1) {
                        for (F = 1, I = R[P].lengths, E.c = G[P].c, T = G[P].c ? I.length : I.length + 1; F < T; F += 1)
                            if (N + (D = I[F - 1]).addedLength < S.s) N += D.addedLength, E.c = !1;
                            else if (N > S.e) {
                            E.c = !1;
                            break
                        } else S.s <= N && S.e >= N + D.addedLength ? (this.addSegment(G[P].v[F - 1], G[P].o[F - 1], G[P].i[F], G[P].v[F], E, M, W), W = !1) : (V = bez.getNewSegment(G[P].v[F - 1], G[P].v[F], G[P].o[F - 1], G[P].i[F], (S.s - N) / D.addedLength, (S.e - N) / D.addedLength, I[F - 1]), this.addSegmentFromArray(V, E, M, W), W = !1, E.c = !1), N += D.addedLength, M += 1;
                        if (G[P].c && I.length) {
                            if (D = I[F - 1], N <= S.e) {
                                var $ = I[F - 1].addedLength;
                                S.s <= N && S.e >= N + $ ? (this.addSegment(G[P].v[F - 1], G[P].o[F - 1], G[P].i[0], G[P].v[0], E, M, W), W = !1) : (V = bez.getNewSegment(G[P].v[F - 1], G[P].v[0], G[P].o[F - 1], G[P].i[0], (S.s - N) / $, (S.e - N) / $, I[F - 1]), this.addSegmentFromArray(V, E, M, W), W = !1, E.c = !1)
                            } else E.c = !1;
                            N += D.addedLength, M += 1
                        }
                        if (E._length && (E.setXYAt(E.v[L][0], E.v[L][1], "i", L), E.setXYAt(E.v[E._length - 1][0], E.v[E._length - 1][1], "o", E._length - 1)), N > S.e) break;
                        P < O - 1 && (E = shapePool.newElement(), W = !0, H.push(E), M = 0)
                    }
                    return H
                }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(u, S) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(u, S.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, PuckerAndBloatModifier.prototype.processPath = function(u, S) {
                    var E, P, F, T, D, M, I = S / 100,
                        V = [0, 0],
                        L = u._length,
                        R = 0;
                    for (R = 0; R < L; R += 1) V[0] += u.v[R][0], V[1] += u.v[R][1];
                    V[0] /= L, V[1] /= L;
                    var G = shapePool.newElement();
                    for (R = 0, G.c = u.c; R < L; R += 1) E = u.v[R][0] + (V[0] - u.v[R][0]) * I, P = u.v[R][1] + (V[1] - u.v[R][1]) * I, F = u.o[R][0] + -((V[0] - u.o[R][0]) * I), T = u.o[R][1] + -((V[1] - u.o[R][1]) * I), D = u.i[R][0] + -((V[0] - u.i[R][0]) * I), M = u.i[R][1] + -((V[1] - u.i[R][1]) * I), G.setTripleAt(E, P, F, T, D, M, R);
                    return G
                }, PuckerAndBloatModifier.prototype.processShapes = function(u) {
                    var S, E, P, F, T, D, M = this.shapes.length,
                        I = this.amount.v;
                    if (0 !== I)
                        for (E = 0; E < M; E += 1) {
                            if (D = (T = this.shapes[E]).localShapeCollection, !(!T.shape._mdf && !this._mdf && !u))
                                for (D.releaseShapes(), T.shape._mdf = !0, S = T.shape.paths.shapes, F = T.shape.paths._length, P = 0; P < F; P += 1) D.addShape(this.processPath(S[P], I));
                            T.shape.paths = T.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var TransformPropertyFactory = function() {
                    var u = [0, 0];

                    function applyToMatrix(u) {
                        var S = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || S, this.a && u.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && u.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && u.skewFromAxis(-this.sk.v, this.sa.v), this.r ? u.rotate(-this.r.v) : u.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? u.translate(this.px.v, this.py.v, -this.pz.v) : u.translate(this.px.v, this.py.v, 0) : u.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function processKeys(S) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || S) {
                                var E;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    if (E = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (P = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / E, 0), F = this.p.getValueAtTime(this.p.keyframes[0].t / E, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (P = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / E, 0), F = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / E, 0)) : (P = this.p.pv, F = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / E, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        P = [], F = [];
                                        var P, F, T = this.px,
                                            D = this.py;
                                        T._caching.lastFrame + T.offsetTime <= T.keyframes[0].t ? (P[0] = T.getValueAtTime((T.keyframes[0].t + .01) / E, 0), P[1] = D.getValueAtTime((D.keyframes[0].t + .01) / E, 0), F[0] = T.getValueAtTime(T.keyframes[0].t / E, 0), F[1] = D.getValueAtTime(D.keyframes[0].t / E, 0)) : T._caching.lastFrame + T.offsetTime >= T.keyframes[T.keyframes.length - 1].t ? (P[0] = T.getValueAtTime(T.keyframes[T.keyframes.length - 1].t / E, 0), P[1] = D.getValueAtTime(D.keyframes[D.keyframes.length - 1].t / E, 0), F[0] = T.getValueAtTime((T.keyframes[T.keyframes.length - 1].t - .01) / E, 0), F[1] = D.getValueAtTime((D.keyframes[D.keyframes.length - 1].t - .01) / E, 0)) : (P = [T.pv, D.pv], F[0] = T.getValueAtTime((T._caching.lastFrame + T.offsetTime - .01) / E, T.offsetTime), F[1] = D.getValueAtTime((D._caching.lastFrame + D.offsetTime - .01) / E, D.offsetTime))
                                    } else P = F = u;
                                    this.v.rotate(-Math.atan2(P[1] - F[1], P[0] - F[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function precalculateMatrix() {
                        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    }

                    function autoOrient() {}

                    function addDynamicProperty(u) {
                        this._addDynamicProperty(u), this.elem.addDynamicProperty(u), this._isDirty = !0
                    }

                    function TransformProperty(u, S, E) {
                        if (this.elem = u, this.frameId = -1, this.propType = "transform", this.data = S, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(E || u), S.p && S.p.s ? (this.px = PropertyFactory.getProp(u, S.p.x, 0, 0, this), this.py = PropertyFactory.getProp(u, S.p.y, 0, 0, this), S.p.z && (this.pz = PropertyFactory.getProp(u, S.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(u, S.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), S.rx) {
                            if (this.rx = PropertyFactory.getProp(u, S.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(u, S.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(u, S.rz, 0, degToRads, this), S.or.k[0].ti) {
                                var P, F = S.or.k.length;
                                for (P = 0; P < F; P += 1) S.or.k[P].to = null, S.or.k[P].ti = null
                            }
                            this.or = PropertyFactory.getProp(u, S.or, 1, degToRads, this), this.or.sh = !0
                        } else this.r = PropertyFactory.getProp(u, S.r || {
                            k: 0
                        }, 0, degToRads, this);
                        S.sk && (this.sk = PropertyFactory.getProp(u, S.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(u, S.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(u, S.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = PropertyFactory.getProp(u, S.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), S.o ? this.o = PropertyFactory.getProp(u, S.o, 0, .01, u) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }
                    return TransformProperty.prototype = {
                        applyToMatrix: applyToMatrix,
                        getValue: processKeys,
                        precalculateMatrix: precalculateMatrix,
                        autoOrient: autoOrient
                    }, extendPrototype([DynamicPropertyContainer], TransformProperty), TransformProperty.prototype.addDynamicProperty = addDynamicProperty, TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                        getTransformProperty: function(u, S, E) {
                            return new TransformProperty(u, S, E)
                        }
                    }
                }();

                function RepeaterModifier() {}

                function RoundCornersModifier() {}

                function floatEqual(u, S) {
                    return 1e5 * Math.abs(u - S) <= Math.min(Math.abs(u), Math.abs(S))
                }

                function floatZero(u) {
                    return 1e-5 >= Math.abs(u)
                }

                function lerp(u, S, E) {
                    return u * (1 - E) + S * E
                }

                function lerpPoint(u, S, E) {
                    return [lerp(u[0], S[0], E), lerp(u[1], S[1], E)]
                }

                function quadRoots(u, S, E) {
                    if (0 === u) return [];
                    var P = S * S - 4 * u * E;
                    if (P < 0) return [];
                    var F = -S / (2 * u);
                    if (0 === P) return [F];
                    var T = Math.sqrt(P) / (2 * u);
                    return [F - T, F + T]
                }

                function polynomialCoefficients(u, S, E, P) {
                    return [-u + 3 * S - 3 * E + P, 3 * u - 6 * S + 3 * E, -3 * u + 3 * S, u]
                }

                function singlePoint(u) {
                    return new PolynomialBezier(u, u, u, u, !1)
                }

                function PolynomialBezier(u, S, E, P, F) {
                    F && pointEqual(u, S) && (S = lerpPoint(u, P, 1 / 3)), F && pointEqual(E, P) && (E = lerpPoint(u, P, 2 / 3));
                    var T = polynomialCoefficients(u[0], S[0], E[0], P[0]),
                        D = polynomialCoefficients(u[1], S[1], E[1], P[1]);
                    this.a = [T[0], D[0]], this.b = [T[1], D[1]], this.c = [T[2], D[2]], this.d = [T[3], D[3]], this.points = [u, S, E, P]
                }

                function extrema(u, S) {
                    var E = u.points[0][S],
                        P = u.points[u.points.length - 1][S];
                    if (E > P) {
                        var F = P;
                        P = E, E = F
                    }
                    for (var T = quadRoots(3 * u.a[S], 2 * u.b[S], u.c[S]), D = 0; D < T.length; D += 1)
                        if (T[D] > 0 && T[D] < 1) {
                            var M = u.point(T[D])[S];
                            M < E ? E = M : M > P && (P = M)
                        }
                    return {
                        min: E,
                        max: P
                    }
                }

                function intersectData(u, S, E) {
                    var P = u.boundingBox();
                    return {
                        cx: P.cx,
                        cy: P.cy,
                        width: P.width,
                        height: P.height,
                        bez: u,
                        t: (S + E) / 2,
                        t1: S,
                        t2: E
                    }
                }

                function splitData(u) {
                    var S = u.bez.split(.5);
                    return [intersectData(S[0], u.t1, u.t), intersectData(S[1], u.t, u.t2)]
                }

                function boxIntersect(u, S) {
                    return 2 * Math.abs(u.cx - S.cx) < u.width + S.width && 2 * Math.abs(u.cy - S.cy) < u.height + S.height
                }

                function intersectsImpl(u, S, E, P, F, T) {
                    if (boxIntersect(u, S)) {
                        if (E >= T || u.width <= P && u.height <= P && S.width <= P && S.height <= P) {
                            F.push([u.t, S.t]);
                            return
                        }
                        var D = splitData(u),
                            M = splitData(S);
                        intersectsImpl(D[0], M[0], E + 1, P, F, T), intersectsImpl(D[0], M[1], E + 1, P, F, T), intersectsImpl(D[1], M[0], E + 1, P, F, T), intersectsImpl(D[1], M[1], E + 1, P, F, T)
                    }
                }

                function crossProduct(u, S) {
                    return [u[1] * S[2] - u[2] * S[1], u[2] * S[0] - u[0] * S[2], u[0] * S[1] - u[1] * S[0]]
                }

                function lineIntersection(u, S, E, P) {
                    var F = [u[0], u[1], 1],
                        T = [S[0], S[1], 1],
                        D = [E[0], E[1], 1],
                        M = [P[0], P[1], 1],
                        I = crossProduct(crossProduct(F, T), crossProduct(D, M));
                    return floatZero(I[2]) ? null : [I[0] / I[2], I[1] / I[2]]
                }

                function polarOffset(u, S, E) {
                    return [u[0] + Math.cos(S) * E, u[1] - Math.sin(S) * E]
                }

                function pointDistance(u, S) {
                    return Math.hypot(u[0] - S[0], u[1] - S[1])
                }

                function pointEqual(u, S) {
                    return floatEqual(u[0], S[0]) && floatEqual(u[1], S[1])
                }

                function ZigZagModifier() {}

                function setPoint(u, S, E, P, F, T, D) {
                    var M = E - Math.PI / 2,
                        I = E + Math.PI / 2,
                        V = S[0] + Math.cos(E) * P * F,
                        L = S[1] - Math.sin(E) * P * F;
                    u.setTripleAt(V, L, V + Math.cos(M) * T, L - Math.sin(M) * T, V + Math.cos(I) * D, L - Math.sin(I) * D, u.length())
                }

                function getPerpendicularVector(u, S) {
                    var E = [S[0] - u[0], S[1] - u[1]],
                        P = -(.5 * Math.PI);
                    return [Math.cos(P) * E[0] - Math.sin(P) * E[1], Math.sin(P) * E[0] + Math.cos(P) * E[1]]
                }

                function getProjectingAngle(u, S) {
                    var E = 0 === S ? u.length() - 1 : S - 1,
                        P = (S + 1) % u.length(),
                        F = getPerpendicularVector(u.v[E], u.v[P]);
                    return Math.atan2(0, 1) - Math.atan2(F[1], F[0])
                }

                function zigZagCorner(u, S, E, P, F, T, D) {
                    var M = getProjectingAngle(S, E),
                        I = S.v[E % S._length],
                        V = S.v[0 === E ? S._length - 1 : E - 1],
                        L = S.v[(E + 1) % S._length],
                        R = 2 === T ? Math.sqrt(Math.pow(I[0] - V[0], 2) + Math.pow(I[1] - V[1], 2)) : 0,
                        G = 2 === T ? Math.sqrt(Math.pow(I[0] - L[0], 2) + Math.pow(I[1] - L[1], 2)) : 0;
                    setPoint(u, S.v[E % S._length], M, D, P, G / ((F + 1) * 2), R / ((F + 1) * 2), T)
                }

                function zigZagSegment(u, S, E, P, F, T) {
                    for (var D = 0; D < P; D += 1) {
                        var M = (D + 1) / (P + 1),
                            I = 2 === F ? Math.sqrt(Math.pow(S.points[3][0] - S.points[0][0], 2) + Math.pow(S.points[3][1] - S.points[0][1], 2)) : 0,
                            V = S.normalAngle(M);
                        setPoint(u, S.point(M), V, T, E, I / ((P + 1) * 2), I / ((P + 1) * 2), F), T = -T
                    }
                    return T
                }

                function linearOffset(u, S, E) {
                    var P = Math.atan2(S[0] - u[0], S[1] - u[1]);
                    return [polarOffset(u, P, E), polarOffset(S, P, E)]
                }

                function offsetSegment(u, S) {
                    E = (I = linearOffset(u.points[0], u.points[1], S))[0], P = I[1], F = (I = linearOffset(u.points[1], u.points[2], S))[0], T = I[1], D = (I = linearOffset(u.points[2], u.points[3], S))[0], M = I[1];
                    var E, P, F, T, D, M, I, V = lineIntersection(E, P, F, T);
                    null === V && (V = P);
                    var L = lineIntersection(D, M, F, T);
                    return null === L && (L = D), new PolynomialBezier(E, V, L, M)
                }

                function joinLines(u, S, E, P, F) {
                    var T = S.points[3],
                        D = E.points[0];
                    if (3 === P || pointEqual(T, D)) return T;
                    if (2 === P) {
                        var M = -S.tangentAngle(1),
                            I = -E.tangentAngle(0) + Math.PI,
                            V = lineIntersection(T, polarOffset(T, M + Math.PI / 2, 100), D, polarOffset(D, M + Math.PI / 2, 100)),
                            L = V ? pointDistance(V, T) : pointDistance(T, D) / 2,
                            R = polarOffset(T, M, 2 * L * roundCorner);
                        return u.setXYAt(R[0], R[1], "o", u.length() - 1), R = polarOffset(D, I, 2 * L * roundCorner), u.setTripleAt(D[0], D[1], D[0], D[1], R[0], R[1], u.length()), D
                    }
                    var G = pointEqual(T, S.points[2]) ? S.points[0] : S.points[2],
                        O = pointEqual(D, E.points[1]) ? E.points[3] : E.points[1],
                        N = lineIntersection(G, T, D, O);
                    return N && pointDistance(N, T) < F ? (u.setTripleAt(N[0], N[1], N[0], N[1], N[0], N[1], u.length()), N) : T
                }

                function getIntersection(u, S) {
                    var E = u.intersections(S);
                    return (E.length && floatEqual(E[0][0], 1) && E.shift(), E.length) ? E[0] : null
                }

                function pruneSegmentIntersection(u, S) {
                    var E = u.slice(),
                        P = S.slice(),
                        F = getIntersection(u[u.length - 1], S[0]);
                    return (F && (E[u.length - 1] = u[u.length - 1].split(F[0])[0], P[0] = S[0].split(F[1])[1]), u.length > 1 && S.length > 1 && (F = getIntersection(u[0], S[S.length - 1]))) ? [
                        [u[0].split(F[0])[0]],
                        [S[S.length - 1].split(F[1])[1]]
                    ] : [E, P]
                }

                function pruneIntersections(u) {
                    for (var S, E = 1; E < u.length; E += 1) S = pruneSegmentIntersection(u[E - 1], u[E]), u[E - 1] = S[0], u[E] = S[1];
                    return u.length > 1 && (S = pruneSegmentIntersection(u[u.length - 1], u[0]), u[u.length - 1] = S[0], u[0] = S[1]), u
                }

                function offsetSegmentSplit(u, S) {
                    var E, P, F, T, D = u.inflectionPoints();
                    if (0 === D.length) return [offsetSegment(u, S)];
                    if (1 === D.length || floatEqual(D[1], 1)) return E = (F = u.split(D[0]))[0], P = F[1], [offsetSegment(E, S), offsetSegment(P, S)];
                    E = (F = u.split(D[0]))[0];
                    var M = (D[1] - D[0]) / (1 - D[0]);
                    return T = (F = F[1].split(M))[0], P = F[1], [offsetSegment(E, S), offsetSegment(T, S), offsetSegment(P, S)]
                }

                function OffsetPathModifier() {}

                function getFontProperties(u) {
                    for (var S = u.fStyle ? u.fStyle.split(" ") : [], E = "normal", P = "normal", F = S.length, T = 0; T < F; T += 1) switch (S[T].toLowerCase()) {
                        case "italic":
                            P = "italic";
                            break;
                        case "bold":
                            E = "700";
                            break;
                        case "black":
                            E = "900";
                            break;
                        case "medium":
                            E = "500";
                            break;
                        case "regular":
                        case "normal":
                            E = "400";
                            break;
                        case "light":
                        case "thin":
                            E = "200"
                    }
                    return {
                        style: P,
                        weight: u.fWeight || E
                    }
                }
                extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(u, S) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(u, S.c, 0, null, this), this.o = PropertyFactory.getProp(u, S.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(u, S.tr, this), this.so = PropertyFactory.getProp(u, S.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(u, S.tr.eo, 0, .01, this), this.data = S, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function(u, S, E, P, F, T) {
                    var D = T ? -1 : 1,
                        M = P.s.v[0] + (1 - P.s.v[0]) * (1 - F),
                        I = P.s.v[1] + (1 - P.s.v[1]) * (1 - F);
                    u.translate(P.p.v[0] * D * F, P.p.v[1] * D * F, P.p.v[2]), S.translate(-P.a.v[0], -P.a.v[1], P.a.v[2]), S.rotate(-P.r.v * D * F), S.translate(P.a.v[0], P.a.v[1], P.a.v[2]), E.translate(-P.a.v[0], -P.a.v[1], P.a.v[2]), E.scale(T ? 1 / M : M, T ? 1 / I : I), E.translate(P.a.v[0], P.a.v[1], P.a.v[2])
                }, RepeaterModifier.prototype.init = function(u, S, E, P) {
                    for (this.elem = u, this.arr = S, this.pos = E, this.elemsData = P, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(u), this.initModifierProperties(u, S[E]); E > 0;) E -= 1, this._elements.unshift(S[E]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function(u) {
                    var S, E = u.length;
                    for (S = 0; S < E; S += 1) u[S]._processed = !1, "gr" === u[S].ty && this.resetElements(u[S].it)
                }, RepeaterModifier.prototype.cloneElements = function(u) {
                    var S = JSON.parse(JSON.stringify(u));
                    return this.resetElements(S), S
                }, RepeaterModifier.prototype.changeGroupRender = function(u, S) {
                    var E, P = u.length;
                    for (E = 0; E < P; E += 1) u[E]._render = S, "gr" === u[E].ty && this.changeGroupRender(u[E].it, S)
                }, RepeaterModifier.prototype.processShapes = function(u) {
                    var S = !1;
                    if (this._mdf || u) {
                        var E, P, F, T, D, M, I, V, L = Math.ceil(this.c.v);
                        if (this._groups.length < L) {
                            for (; this._groups.length < L;) {
                                var R = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                R.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, R), this._groups.splice(0, 0, R), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), S = !0
                        }
                        for (F = 0, D = 0; F <= this._groups.length - 1; F += 1) {
                            if (M = D < L, this._groups[F]._render = M, this.changeGroupRender(this._groups[F].it, M), !M) {
                                var G = this.elemsData[F].it,
                                    O = G[G.length - 1];
                                0 !== O.transform.op.v ? (O.transform.op._mdf = !0, O.transform.op.v = 0) : O.transform.op._mdf = !1
                            }
                            D += 1
                        }
                        this._currentCopies = L;
                        var N = this.o.v,
                            H = N % 1,
                            W = N > 0 ? Math.floor(N) : Math.ceil(N),
                            $ = this.pMatrix.props,
                            Y = this.rMatrix.props,
                            X = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var Z = 0;
                        if (N > 0) {
                            for (; Z < W;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), Z += 1;
                            H && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, H, !1), Z += H)
                        } else if (N < 0) {
                            for (; Z > W;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), Z -= 1;
                            H && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -H, !0), Z -= H)
                        }
                        for (F = 1 === this.data.m ? 0 : this._currentCopies - 1, T = 1 === this.data.m ? 1 : -1, D = this._currentCopies; D;) {
                            if (V = (P = (E = this.elemsData[F].it)[E.length - 1].transform.mProps.v.props).length, E[E.length - 1].transform.mProps._mdf = !0, E[E.length - 1].transform.op._mdf = !0, E[E.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (F / (this._currentCopies - 1)), 0 !== Z) {
                                for ((0 !== F && 1 === T || F !== this._currentCopies - 1 && -1 === T) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(Y[0], Y[1], Y[2], Y[3], Y[4], Y[5], Y[6], Y[7], Y[8], Y[9], Y[10], Y[11], Y[12], Y[13], Y[14], Y[15]), this.matrix.transform(X[0], X[1], X[2], X[3], X[4], X[5], X[6], X[7], X[8], X[9], X[10], X[11], X[12], X[13], X[14], X[15]), this.matrix.transform($[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8], $[9], $[10], $[11], $[12], $[13], $[14], $[15]), I = 0; I < V; I += 1) P[I] = this.matrix.props[I];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), I = 0; I < V; I += 1) P[I] = this.matrix.props[I];
                            Z += 1, D -= 1, F += T
                        }
                    } else
                        for (D = this._currentCopies, F = 0, T = 1; D;) P = (E = this.elemsData[F].it)[E.length - 1].transform.mProps.v.props, E[E.length - 1].transform.mProps._mdf = !1, E[E.length - 1].transform.op._mdf = !1, D -= 1, F += T;
                    return S
                }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(u, S) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(u, S.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function(u, S) {
                    var E, P, F, T, D, M, I, V, L, R, G, O, N, H = shapePool.newElement();
                    H.c = u.c;
                    var W = u._length,
                        $ = 0;
                    for (E = 0; E < W; E += 1) P = u.v[E], T = u.o[E], F = u.i[E], P[0] === T[0] && P[1] === T[1] && P[0] === F[0] && P[1] === F[1] ? 0 !== E && E !== W - 1 || u.c ? (D = 0 === E ? u.v[W - 1] : u.v[E - 1], I = (M = Math.sqrt(Math.pow(P[0] - D[0], 2) + Math.pow(P[1] - D[1], 2))) ? Math.min(M / 2, S) / M : 0, V = O = P[0] + (D[0] - P[0]) * I, L = N = P[1] - (P[1] - D[1]) * I, R = V - (V - P[0]) * roundCorner, G = L - (L - P[1]) * roundCorner, H.setTripleAt(V, L, R, G, O, N, $), $ += 1, D = E === W - 1 ? u.v[0] : u.v[E + 1], I = (M = Math.sqrt(Math.pow(P[0] - D[0], 2) + Math.pow(P[1] - D[1], 2))) ? Math.min(M / 2, S) / M : 0, V = R = P[0] + (D[0] - P[0]) * I, L = G = P[1] + (D[1] - P[1]) * I, O = V - (V - P[0]) * roundCorner, N = L - (L - P[1]) * roundCorner, H.setTripleAt(V, L, R, G, O, N, $)) : H.setTripleAt(P[0], P[1], T[0], T[1], F[0], F[1], $) : H.setTripleAt(u.v[E][0], u.v[E][1], u.o[E][0], u.o[E][1], u.i[E][0], u.i[E][1], $), $ += 1;
                    return H
                }, RoundCornersModifier.prototype.processShapes = function(u) {
                    var S, E, P, F, T, D, M = this.shapes.length,
                        I = this.rd.v;
                    if (0 !== I)
                        for (E = 0; E < M; E += 1) {
                            if (D = (T = this.shapes[E]).localShapeCollection, !(!T.shape._mdf && !this._mdf && !u))
                                for (D.releaseShapes(), T.shape._mdf = !0, S = T.shape.paths.shapes, F = T.shape.paths._length, P = 0; P < F; P += 1) D.addShape(this.processPath(S[P], I));
                            T.shape.paths = T.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, PolynomialBezier.prototype.point = function(u) {
                    return [((this.a[0] * u + this.b[0]) * u + this.c[0]) * u + this.d[0], ((this.a[1] * u + this.b[1]) * u + this.c[1]) * u + this.d[1]]
                }, PolynomialBezier.prototype.derivative = function(u) {
                    return [(3 * u * this.a[0] + 2 * this.b[0]) * u + this.c[0], (3 * u * this.a[1] + 2 * this.b[1]) * u + this.c[1]]
                }, PolynomialBezier.prototype.tangentAngle = function(u) {
                    var S = this.derivative(u);
                    return Math.atan2(S[1], S[0])
                }, PolynomialBezier.prototype.normalAngle = function(u) {
                    var S = this.derivative(u);
                    return Math.atan2(S[0], S[1])
                }, PolynomialBezier.prototype.inflectionPoints = function() {
                    var u = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (floatZero(u)) return [];
                    var S = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / u,
                        E = S * S - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / u;
                    if (E < 0) return [];
                    var P = Math.sqrt(E);
                    return floatZero(P) ? P > 0 && P < 1 ? [S] : [] : [S - P, S + P].filter(function(u) {
                        return u > 0 && u < 1
                    })
                }, PolynomialBezier.prototype.split = function(u) {
                    if (u <= 0) return [singlePoint(this.points[0]), this];
                    if (u >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                    var S = lerpPoint(this.points[0], this.points[1], u),
                        E = lerpPoint(this.points[1], this.points[2], u),
                        P = lerpPoint(this.points[2], this.points[3], u),
                        F = lerpPoint(S, E, u),
                        T = lerpPoint(E, P, u),
                        D = lerpPoint(F, T, u);
                    return [new PolynomialBezier(this.points[0], S, F, D, !0), new PolynomialBezier(D, T, P, this.points[3], !0)]
                }, PolynomialBezier.prototype.bounds = function() {
                    return {
                        x: extrema(this, 0),
                        y: extrema(this, 1)
                    }
                }, PolynomialBezier.prototype.boundingBox = function() {
                    var u = this.bounds();
                    return {
                        left: u.x.min,
                        right: u.x.max,
                        top: u.y.min,
                        bottom: u.y.max,
                        width: u.x.max - u.x.min,
                        height: u.y.max - u.y.min,
                        cx: (u.x.max + u.x.min) / 2,
                        cy: (u.y.max + u.y.min) / 2
                    }
                }, PolynomialBezier.prototype.intersections = function(u, S, E) {
                    void 0 === S && (S = 2), void 0 === E && (E = 7);
                    var P = [];
                    return intersectsImpl(intersectData(this, 0, 1), intersectData(u, 0, 1), 0, S, P, E), P
                }, PolynomialBezier.shapeSegment = function(u, S) {
                    var E = (S + 1) % u.length();
                    return new PolynomialBezier(u.v[S], u.o[S], u.i[E], u.v[E], !0)
                }, PolynomialBezier.shapeSegmentInverted = function(u, S) {
                    var E = (S + 1) % u.length();
                    return new PolynomialBezier(u.v[E], u.i[E], u.o[S], u.v[S], !0)
                }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(u, S) {
                    this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(u, S.s, 0, null, this), this.frequency = PropertyFactory.getProp(u, S.r, 0, null, this), this.pointsType = PropertyFactory.getProp(u, S.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                }, ZigZagModifier.prototype.processPath = function(u, S, E, P) {
                    var F = u._length,
                        T = shapePool.newElement();
                    if (T.c = u.c, u.c || (F -= 1), 0 === F) return T;
                    var D = -1,
                        M = PolynomialBezier.shapeSegment(u, 0);
                    zigZagCorner(T, u, 0, S, E, P, D);
                    for (var I = 0; I < F; I += 1) D = zigZagSegment(T, M, S, E, P, -D), M = I !== F - 1 || u.c ? PolynomialBezier.shapeSegment(u, (I + 1) % F) : null, zigZagCorner(T, u, I + 1, S, E, P, D);
                    return T
                }, ZigZagModifier.prototype.processShapes = function(u) {
                    var S, E, P, F, T, D, M = this.shapes.length,
                        I = this.amplitude.v,
                        V = Math.max(0, Math.round(this.frequency.v)),
                        L = this.pointsType.v;
                    if (0 !== I)
                        for (E = 0; E < M; E += 1) {
                            if (D = (T = this.shapes[E]).localShapeCollection, !(!T.shape._mdf && !this._mdf && !u))
                                for (D.releaseShapes(), T.shape._mdf = !0, S = T.shape.paths.shapes, F = T.shape.paths._length, P = 0; P < F; P += 1) D.addShape(this.processPath(S[P], I, V, L));
                            T.shape.paths = T.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(u, S) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(u, S.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(u, S.ml, 0, null, this), this.lineJoin = S.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                }, OffsetPathModifier.prototype.processPath = function(u, S, E, P) {
                    var F, T, D, M = shapePool.newElement();
                    M.c = u.c;
                    var I = u.length();
                    u.c || (I -= 1);
                    var V = [];
                    for (F = 0; F < I; F += 1) D = PolynomialBezier.shapeSegment(u, F), V.push(offsetSegmentSplit(D, S));
                    if (!u.c)
                        for (F = I - 1; F >= 0; F -= 1) D = PolynomialBezier.shapeSegmentInverted(u, F), V.push(offsetSegmentSplit(D, S));
                    V = pruneIntersections(V);
                    var L = null,
                        R = null;
                    for (F = 0; F < V.length; F += 1) {
                        var G = V[F];
                        for (R && (L = joinLines(M, R, G[0], E, P)), R = G[G.length - 1], T = 0; T < G.length; T += 1) D = G[T], L && pointEqual(D.points[0], L) ? M.setXYAt(D.points[1][0], D.points[1][1], "o", M.length() - 1) : M.setTripleAt(D.points[0][0], D.points[0][1], D.points[1][0], D.points[1][1], D.points[0][0], D.points[0][1], M.length()), M.setTripleAt(D.points[3][0], D.points[3][1], D.points[3][0], D.points[3][1], D.points[2][0], D.points[2][1], M.length()), L = D.points[3]
                    }
                    return V.length && joinLines(M, R, V[0][0], E, P), M
                }, OffsetPathModifier.prototype.processShapes = function(u) {
                    var S, E, P, F, T, D, M = this.shapes.length,
                        I = this.amount.v,
                        V = this.miterLimit.v,
                        L = this.lineJoin;
                    if (0 !== I)
                        for (E = 0; E < M; E += 1) {
                            if (D = (T = this.shapes[E]).localShapeCollection, !(!T.shape._mdf && !this._mdf && !u))
                                for (D.releaseShapes(), T.shape._mdf = !0, S = T.shape.paths.shapes, F = T.shape.paths._length, P = 0; P < F; P += 1) D.addShape(this.processPath(S[P], I, L, V));
                            T.shape.paths = T.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var FontManager = function() {
                    var u = 5e3,
                        S = {
                            w: 0,
                            size: 0,
                            shapes: [],
                            data: {
                                shapes: []
                            }
                        },
                        E = [];
                    E = E.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var P = 127988,
                        F = 917631,
                        T = 917601,
                        D = 917626,
                        M = 65039,
                        I = 8205,
                        V = 127462,
                        L = 127487,
                        R = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                    function trimFontOptions(u) {
                        var S, E = u.split(","),
                            P = E.length,
                            F = [];
                        for (S = 0; S < P; S += 1) "sans-serif" !== E[S] && "monospace" !== E[S] && F.push(E[S]);
                        return F.join(",")
                    }

                    function setUpNode(u, S) {
                        var E = createTag("span");
                        E.setAttribute("aria-hidden", !0), E.style.fontFamily = S;
                        var P = createTag("span");
                        P.innerText = "giItT1WQy@!-/#", E.style.position = "absolute", E.style.left = "-10000px", E.style.top = "-10000px", E.style.fontSize = "300px", E.style.fontVariant = "normal", E.style.fontStyle = "normal", E.style.fontWeight = "normal", E.style.letterSpacing = "0", E.appendChild(P), document.body.appendChild(E);
                        var F = P.offsetWidth;
                        return P.style.fontFamily = trimFontOptions(u) + ", " + S, {
                            node: P,
                            w: F,
                            parent: E
                        }
                    }

                    function checkLoadedFonts() {
                        var S, E, P, F = this.fonts.length,
                            T = F;
                        for (S = 0; S < F; S += 1) this.fonts[S].loaded ? T -= 1 : "n" === this.fonts[S].fOrigin || 0 === this.fonts[S].origin ? this.fonts[S].loaded = !0 : (E = this.fonts[S].monoCase.node, P = this.fonts[S].monoCase.w, E.offsetWidth !== P ? (T -= 1, this.fonts[S].loaded = !0) : (E = this.fonts[S].sansCase.node, P = this.fonts[S].sansCase.w, E.offsetWidth !== P && (T -= 1, this.fonts[S].loaded = !0)), this.fonts[S].loaded && (this.fonts[S].sansCase.parent.parentNode.removeChild(this.fonts[S].sansCase.parent), this.fonts[S].monoCase.parent.parentNode.removeChild(this.fonts[S].monoCase.parent)));
                        0 !== T && Date.now() - this.initTime < u ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    }

                    function createHelper(u, S) {
                        var E, P = document.body && S ? "svg" : "canvas",
                            F = getFontProperties(u);
                        if ("svg" === P) {
                            var T = createNS("text");
                            T.style.fontSize = "100px", T.setAttribute("font-family", u.fFamily), T.setAttribute("font-style", F.style), T.setAttribute("font-weight", F.weight), T.textContent = "1", u.fClass ? (T.style.fontFamily = "inherit", T.setAttribute("class", u.fClass)) : T.style.fontFamily = u.fFamily, S.appendChild(T), E = T
                        } else {
                            var D = new OffscreenCanvas(500, 500).getContext("2d");
                            D.font = F.style + " " + F.weight + " 100px " + u.fFamily, E = D
                        }
                        return {
                            measureText: function(u) {
                                return "svg" === P ? (E.textContent = u, E.getComputedTextLength()) : E.measureText(u).width
                            }
                        }
                    }

                    function addFonts(u, S) {
                        if (!u) {
                            this.isLoaded = !0;
                            return
                        }
                        if (this.chars) {
                            this.isLoaded = !0, this.fonts = u.list;
                            return
                        }
                        if (!document.body) {
                            this.isLoaded = !0, u.list.forEach(function(u) {
                                u.helper = createHelper(u), u.cache = {}
                            }), this.fonts = u.list;
                            return
                        }
                        var E = u.list,
                            P = E.length,
                            F = P;
                        for (T = 0; T < P; T += 1) {
                            var T, D, M, I = !0;
                            if (E[T].loaded = !1, E[T].monoCase = setUpNode(E[T].fFamily, "monospace"), E[T].sansCase = setUpNode(E[T].fFamily, "sans-serif"), E[T].fPath) {
                                if ("p" === E[T].fOrigin || 3 === E[T].origin) {
                                    if ((D = document.querySelectorAll('style[f-forigin="p"][f-family="' + E[T].fFamily + '"], style[f-origin="3"][f-family="' + E[T].fFamily + '"]')).length > 0 && (I = !1), I) {
                                        var V = createTag("style");
                                        V.setAttribute("f-forigin", E[T].fOrigin), V.setAttribute("f-origin", E[T].origin), V.setAttribute("f-family", E[T].fFamily), V.type = "text/css", V.innerText = "@font-face {font-family: " + E[T].fFamily + "; font-style: normal; src: url('" + E[T].fPath + "');}", S.appendChild(V)
                                    }
                                } else if ("g" === E[T].fOrigin || 1 === E[T].origin) {
                                    for (M = 0, D = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'); M < D.length; M += 1) - 1 !== D[M].href.indexOf(E[T].fPath) && (I = !1);
                                    if (I) {
                                        var L = createTag("link");
                                        L.setAttribute("f-forigin", E[T].fOrigin), L.setAttribute("f-origin", E[T].origin), L.type = "text/css", L.rel = "stylesheet", L.href = E[T].fPath, document.body.appendChild(L)
                                    }
                                } else if ("t" === E[T].fOrigin || 2 === E[T].origin) {
                                    for (M = 0, D = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'); M < D.length; M += 1) E[T].fPath === D[M].src && (I = !1);
                                    if (I) {
                                        var R = createTag("link");
                                        R.setAttribute("f-forigin", E[T].fOrigin), R.setAttribute("f-origin", E[T].origin), R.setAttribute("rel", "stylesheet"), R.setAttribute("href", E[T].fPath), S.appendChild(R)
                                    }
                                }
                            } else E[T].loaded = !0, F -= 1;
                            E[T].helper = createHelper(E[T], S), E[T].cache = {}, this.fonts.push(E[T])
                        }
                        0 === F ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    }

                    function addChars(u) {
                        if (u) {
                            this.chars || (this.chars = []);
                            var S, E, P, F = u.length,
                                T = this.chars.length;
                            for (S = 0; S < F; S += 1) {
                                for (E = 0, P = !1; E < T;) this.chars[E].style === u[S].style && this.chars[E].fFamily === u[S].fFamily && this.chars[E].ch === u[S].ch && (P = !0), E += 1;
                                P || (this.chars.push(u[S]), T += 1)
                            }
                        }
                    }

                    function getCharData(u, E, P) {
                        for (var F = 0, T = this.chars.length; F < T;) {
                            if (this.chars[F].ch === u && this.chars[F].style === E && this.chars[F].fFamily === P) return this.chars[F];
                            F += 1
                        }
                        return ("string" == typeof u && 13 !== u.charCodeAt(0) || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, E, P)), S
                    }

                    function measureText(u, S, E) {
                        var P = this.getFontByName(S),
                            F = u;
                        if (!P.cache[F]) {
                            var T = P.helper;
                            if (" " === u) {
                                var D = T.measureText("|" + u + "|"),
                                    M = T.measureText("||");
                                P.cache[F] = (D - M) / 100
                            } else P.cache[F] = T.measureText(u) / 100
                        }
                        return P.cache[F] * E
                    }

                    function getFontByName(u) {
                        for (var S = 0, E = this.fonts.length; S < E;) {
                            if (this.fonts[S].fName === u) return this.fonts[S];
                            S += 1
                        }
                        return this.fonts[0]
                    }

                    function getCodePoint(u) {
                        var S = 0,
                            E = u.charCodeAt(0);
                        if (E >= 55296 && E <= 56319) {
                            var P = u.charCodeAt(1);
                            P >= 56320 && P <= 57343 && (S = (E - 55296) * 1024 + P - 56320 + 65536)
                        }
                        return S
                    }

                    function isModifier(u, S) {
                        var E = u.toString(16) + S.toString(16);
                        return -1 !== R.indexOf(E)
                    }

                    function isZeroWidthJoiner(u) {
                        return u === I
                    }

                    function isVariationSelector(u) {
                        return u === M
                    }

                    function isRegionalCode(u) {
                        var S = getCodePoint(u);
                        return S >= V && S <= L
                    }

                    function isFlagEmoji(u) {
                        return isRegionalCode(u.substr(0, 2)) && isRegionalCode(u.substr(2, 2))
                    }

                    function isCombinedCharacter(u) {
                        return -1 !== E.indexOf(u)
                    }

                    function isRegionalFlag(u, S) {
                        var E = getCodePoint(u.substr(S, 2));
                        if (E !== P) return !1;
                        var M = 0;
                        for (S += 2; M < 5;) {
                            if ((E = getCodePoint(u.substr(S, 2))) < T || E > D) return !1;
                            M += 1, S += 2
                        }
                        return getCodePoint(u.substr(S, 2)) === F
                    }

                    function setIsLoaded() {
                        this.isLoaded = !0
                    }
                    var Font = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    Font.isModifier = isModifier, Font.isZeroWidthJoiner = isZeroWidthJoiner, Font.isFlagEmoji = isFlagEmoji, Font.isRegionalCode = isRegionalCode, Font.isCombinedCharacter = isCombinedCharacter, Font.isRegionalFlag = isRegionalFlag, Font.isVariationSelector = isVariationSelector, Font.BLACK_FLAG_CODE_POINT = P;
                    var G = {
                        addChars: addChars,
                        addFonts: addFonts,
                        getCharData: getCharData,
                        getFontByName: getFontByName,
                        measureText: measureText,
                        checkLoadedFonts: checkLoadedFonts,
                        setIsLoaded: setIsLoaded
                    };
                    return Font.prototype = G, Font
                }();

                function SlotManager(u) {
                    this.animationData = u
                }

                function slotFactory(u) {
                    return new SlotManager(u)
                }

                function RenderableElement() {}
                SlotManager.prototype.getProp = function(u) {
                    return this.animationData.slots && this.animationData.slots[u.sid] ? Object.assign(u, this.animationData.slots[u.sid].p) : u
                }, RenderableElement.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(u) {
                        -1 === this.renderableComponents.indexOf(u) && this.renderableComponents.push(u)
                    },
                    removeRenderableComponent: function(u) {
                        -1 !== this.renderableComponents.indexOf(u) && this.renderableComponents.splice(this.renderableComponents.indexOf(u), 1)
                    },
                    prepareRenderableFrame: function(u) {
                        this.checkLayerLimits(u)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(u) {
                        this.data.ip - this.data.st <= u && this.data.op - this.data.st > u ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var u, S = this.renderableComponents.length;
                        for (u = 0; u < S; u += 1) this.renderableComponents[u].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                };
                var getBlendMode = function() {
                    var u = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    };
                    return function(S) {
                        return u[S] || ""
                    }
                }();

                function SliderEffect(u, S, E) {
                    this.p = PropertyFactory.getProp(S, u.v, 0, 0, E)
                }

                function AngleEffect(u, S, E) {
                    this.p = PropertyFactory.getProp(S, u.v, 0, 0, E)
                }

                function ColorEffect(u, S, E) {
                    this.p = PropertyFactory.getProp(S, u.v, 1, 0, E)
                }

                function PointEffect(u, S, E) {
                    this.p = PropertyFactory.getProp(S, u.v, 1, 0, E)
                }

                function LayerIndexEffect(u, S, E) {
                    this.p = PropertyFactory.getProp(S, u.v, 0, 0, E)
                }

                function MaskIndexEffect(u, S, E) {
                    this.p = PropertyFactory.getProp(S, u.v, 0, 0, E)
                }

                function CheckboxEffect(u, S, E) {
                    this.p = PropertyFactory.getProp(S, u.v, 0, 0, E)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager(u, S) {
                    var E, P, F = u.ef || [];
                    this.effectElements = [];
                    var T = F.length;
                    for (E = 0; E < T; E += 1) P = new GroupEffect(F[E], S), this.effectElements.push(P)
                }

                function GroupEffect(u, S) {
                    this.init(u, S)
                }

                function BaseElement() {}

                function FrameElement() {}

                function FootageElement(u, S, E) {
                    this.initFrame(), this.initRenderable(), this.assetData = S.getAssetData(u.refId), this.footageData = S.imageLoader.getAsset(this.assetData), this.initBaseData(u, S, E)
                }

                function AudioElement(u, S, E) {
                    this.initFrame(), this.initRenderable(), this.assetData = S.getAssetData(u.refId), this.initBaseData(u, S, E), this._isPlaying = !1, this._canPlay = !1;
                    var P = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(P), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = u.tm ? PropertyFactory.getProp(this, u.tm, 0, S.frameRate, this) : {
                        _placeholder: !0
                    }, this.lv = PropertyFactory.getProp(this, u.au && u.au.lv ? u.au.lv : {
                        k: [100]
                    }, 1, .01, this)
                }

                function BaseRenderer() {}
                extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(u, S) {
                    this.data = u, this.effectElements = [], this.initDynamicPropertyContainer(S);
                    var E, P, F = this.data.ef.length,
                        T = this.data.ef;
                    for (E = 0; E < F; E += 1) {
                        switch (P = null, T[E].ty) {
                            case 0:
                                P = new SliderEffect(T[E], S, this);
                                break;
                            case 1:
                                P = new AngleEffect(T[E], S, this);
                                break;
                            case 2:
                                P = new ColorEffect(T[E], S, this);
                                break;
                            case 3:
                                P = new PointEffect(T[E], S, this);
                                break;
                            case 4:
                            case 7:
                                P = new CheckboxEffect(T[E], S, this);
                                break;
                            case 10:
                                P = new LayerIndexEffect(T[E], S, this);
                                break;
                            case 11:
                                P = new MaskIndexEffect(T[E], S, this);
                                break;
                            case 5:
                                P = new EffectsManager(T[E], S, this);
                                break;
                            default:
                                P = new NoValueEffect(T[E], S, this)
                        }
                        P && this.effectElements.push(P)
                    }
                }, BaseElement.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var u = 0, S = this.data.masksProperties.length; u < S;) {
                            if ("n" !== this.data.masksProperties[u].mode && !1 !== this.data.masksProperties[u].cl) return !0;
                            u += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        var u = getExpressionInterfaces();
                        if (u) {
                            var S = u("layer"),
                                E = u("effects"),
                                P = u("shape"),
                                F = u("text"),
                                T = u("comp");
                            this.layerInterface = S(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var D = E.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(D), 0 === this.data.ty || this.data.xt ? this.compInterface = T(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = P(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = F(this), this.layerInterface.text = this.layerInterface.textInterface)
                        }
                    },
                    setBlendMode: function() {
                        var u = getBlendMode(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = u
                    },
                    initBaseData: function(u, S, E) {
                        this.globalData = S, this.comp = E, this.data = u, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, FrameElement.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(u, S) {
                        var E, P = this.dynamicProperties.length;
                        for (E = 0; E < P; E += 1)(S || this._isParent && "transform" === this.dynamicProperties[E].propType) && (this.dynamicProperties[E].getValue(), this.dynamicProperties[E]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(u) {
                        -1 === this.dynamicProperties.indexOf(u) && this.dynamicProperties.push(u)
                    }
                }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                    return null
                }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                    var u = getExpressionInterfaces();
                    if (u) {
                        var S = u("footage");
                        this.layerInterface = S(this)
                    }
                }, FootageElement.prototype.getFootageData = function() {
                    return this.footageData
                }, AudioElement.prototype.prepareFrame = function(u) {
                    if (this.prepareRenderableFrame(u, !0), this.prepareProperties(u, !0), this.tm._placeholder) this._currentTime = u / this.data.sr;
                    else {
                        var S = this.tm.v;
                        this._currentTime = S
                    }
                    this._volume = this.lv.v[0];
                    var E = this._volume * this._volumeMultiplier;
                    this._previousVolume !== E && (this._previousVolume = E, this.audio.volume(E))
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, AudioElement.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, AudioElement.prototype.resume = function() {
                    this._canPlay = !0
                }, AudioElement.prototype.setRate = function(u) {
                    this.audio.rate(u)
                }, AudioElement.prototype.volume = function(u) {
                    this._volumeMultiplier = u, this._previousVolume = u * this._volume, this.audio.volume(this._previousVolume)
                }, AudioElement.prototype.getBaseElement = function() {
                    return null
                }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(u) {
                    var S, E, P = this.layers.length;
                    for (this.completeLayers = !0, S = P - 1; S >= 0; S -= 1) !this.elements[S] && (E = this.layers[S]).ip - E.st <= u - this.layers[S].st && E.op - E.st > u - this.layers[S].st && this.buildItem(S), this.completeLayers = !!this.elements[S] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function(u) {
                    switch (u.ty) {
                        case 2:
                            return this.createImage(u);
                        case 0:
                            return this.createComp(u);
                        case 1:
                            return this.createSolid(u);
                        case 3:
                        default:
                            return this.createNull(u);
                        case 4:
                            return this.createShape(u);
                        case 5:
                            return this.createText(u);
                        case 6:
                            return this.createAudio(u);
                        case 13:
                            return this.createCamera(u);
                        case 15:
                            return this.createFootage(u)
                    }
                }, BaseRenderer.prototype.createCamera = function() {
                    throw Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.createAudio = function(u) {
                    return new AudioElement(u, this.globalData, this)
                }, BaseRenderer.prototype.createFootage = function(u) {
                    return new FootageElement(u, this.globalData, this)
                }, BaseRenderer.prototype.buildAllItems = function() {
                    var u, S = this.layers.length;
                    for (u = 0; u < S; u += 1) this.buildItem(u);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function(u) {
                    this.completeLayers = !1;
                    var S, E, P = u.length,
                        F = this.layers.length;
                    for (S = 0; S < P; S += 1)
                        for (E = 0; E < F;) {
                            if (this.layers[E].id === u[S].id) {
                                this.layers[E] = u[S];
                                break
                            }
                            E += 1
                        }
                }, BaseRenderer.prototype.setProjectInterface = function(u) {
                    this.globalData.projectInterface = u
                }, BaseRenderer.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function(u, S, E) {
                    for (var P = this.elements, F = this.layers, T = 0, D = F.length; T < D;) F[T].ind == S && (P[T] && !0 !== P[T] ? (E.push(P[T]), P[T].setAsParent(), void 0 !== F[T].parent ? this.buildElementParenting(u, F[T].parent, E) : u.setHierarchy(E)) : (this.buildItem(T), this.addPendingElement(u))), T += 1
                }, BaseRenderer.prototype.addPendingElement = function(u) {
                    this.pendingElements.push(u)
                }, BaseRenderer.prototype.searchExtraCompositions = function(u) {
                    var S, E = u.length;
                    for (S = 0; S < E; S += 1)
                        if (u[S].xt) {
                            var P = this.createComp(u[S]);
                            P.initExpressions(), this.globalData.projectInterface.registerComposition(P)
                        }
                }, BaseRenderer.prototype.getElementById = function(u) {
                    var S, E = this.elements.length;
                    for (S = 0; S < E; S += 1)
                        if (this.elements[S].data.ind === u) return this.elements[S];
                    return null
                }, BaseRenderer.prototype.getElementByPath = function(u) {
                    var S = u.shift();
                    if ("number" == typeof S) E = this.elements[S];
                    else {
                        var E, P, F = this.elements.length;
                        for (P = 0; P < F; P += 1)
                            if (this.elements[P].data.nm === S) {
                                E = this.elements[P];
                                break
                            }
                    }
                    return 0 === u.length ? E : E.getElementByPath(u)
                }, BaseRenderer.prototype.setupGlobalData = function(u, S) {
                    this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(u), this.globalData.fontManager.addChars(u.chars), this.globalData.fontManager.addFonts(u.fonts, S), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = u.fr, this.globalData.nm = u.nm, this.globalData.compSize = {
                        w: u.w,
                        h: u.h
                    }
                };
                var effectTypes = {
                    TRANSFORM_EFFECT: "transformEFfect"
                };

                function TransformElement() {}

                function MaskElement(u, S, E) {
                    this.data = u, this.element = S, this.globalData = E, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var P = this.globalData.defs,
                        F = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(F), this.solidPath = "";
                    var T = this.masksProperties,
                        D = 0,
                        M = [],
                        I = createElementID(),
                        V = "clipPath",
                        L = "clip-path";
                    for (R = 0; R < F; R += 1)
                        if (("a" !== T[R].mode && "n" !== T[R].mode || T[R].inv || 100 !== T[R].o.k || T[R].o.x) && (V = "mask", L = "mask"), ("s" === T[R].mode || "i" === T[R].mode) && 0 === D ? ((H = createNS("rect")).setAttribute("fill", "#ffffff"), H.setAttribute("width", this.element.comp.data.w || 0), H.setAttribute("height", this.element.comp.data.h || 0), M.push(H)) : H = null, G = createNS("path"), "n" === T[R].mode) this.viewData[R] = {
                            op: PropertyFactory.getProp(this.element, T[R].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, T[R], 3),
                            elem: G,
                            lastPath: ""
                        }, P.appendChild(G);
                        else {
                            if (D += 1, G.setAttribute("fill", "s" === T[R].mode ? "#000000" : "#ffffff"), G.setAttribute("clip-rule", "nonzero"), 0 !== T[R].x.k ? (V = "mask", L = "mask", Y = PropertyFactory.getProp(this.element, T[R].x, 0, null, this.element), X = createElementID(), (W = createNS("filter")).setAttribute("id", X), ($ = createNS("feMorphology")).setAttribute("operator", "erode"), $.setAttribute("in", "SourceGraphic"), $.setAttribute("radius", "0"), W.appendChild($), P.appendChild(W), G.setAttribute("stroke", "s" === T[R].mode ? "#000000" : "#ffffff")) : ($ = null, Y = null), this.storedData[R] = {
                                    elem: G,
                                    x: Y,
                                    expan: $,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: X,
                                    lastRadius: 0
                                }, "i" === T[R].mode) {
                                N = M.length;
                                var R, G, O, N, H, W, $, Y, X, Z = createNS("g");
                                for (O = 0; O < N; O += 1) Z.appendChild(M[O]);
                                var J = createNS("mask");
                                J.setAttribute("mask-type", "alpha"), J.setAttribute("id", I + "_" + D), J.appendChild(G), P.appendChild(J), Z.setAttribute("mask", "url(" + getLocationHref() + "#" + I + "_" + D + ")"), M.length = 0, M.push(Z)
                            } else M.push(G);
                            T[R].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[R] = {
                                elem: G,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, T[R].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, T[R], 3),
                                invRect: H
                            }, this.viewData[R].prop.k || this.drawPath(T[R], this.viewData[R].prop.v, this.viewData[R])
                        }
                    for (R = 0, this.maskElement = createNS(V), F = M.length; R < F; R += 1) this.maskElement.appendChild(M[R]);
                    D > 0 && (this.maskElement.setAttribute("id", I), this.element.maskedElement.setAttribute(L, "url(" + getLocationHref() + "#" + I + ")"), P.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }
                TransformElement.prototype = {
                    initTransform: function() {
                        var u = new Matrix;
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _localMatMdf: !1,
                            _opMdf: !1,
                            mat: u,
                            localMat: u,
                            localOpacity: 1
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var u, S = this.finalTransform.mat,
                                E = 0,
                                P = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; E < P;) {
                                    if (this.hierarchy[E].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    E += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (u = this.finalTransform.mProp.v.props, S.cloneFromProps(u), E = 0; E < P; E += 1) S.multiply(this.hierarchy[E].finalTransform.mProp.v)
                        }
                        this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                    },
                    renderLocalTransform: function() {
                        if (this.localTransforms) {
                            var u = 0,
                                S = this.localTransforms.length;
                            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                                for (; u < S;) this.localTransforms[u]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[u]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), u += 1;
                            if (this.finalTransform._localMatMdf) {
                                var E = this.finalTransform.localMat;
                                for (this.localTransforms[0].matrix.clone(E), u = 1; u < S; u += 1) {
                                    var P = this.localTransforms[u].matrix;
                                    E.multiply(P)
                                }
                                E.multiply(this.finalTransform.mat)
                            }
                            if (this.finalTransform._opMdf) {
                                var F = this.finalTransform.localOpacity;
                                for (u = 0; u < S; u += 1) F *= .01 * this.localTransforms[u].opacity;
                                this.finalTransform.localOpacity = F
                            }
                        }
                    },
                    searchEffectTransforms: function() {
                        if (this.renderableEffectsManager) {
                            var u = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                            if (u.length) {
                                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                                var S = 0,
                                    E = u.length;
                                for (S = 0; S < E; S += 1) this.localTransforms.push(u[S])
                            }
                        }
                    },
                    globalToLocal: function(u) {
                        var S, E, P = [];
                        P.push(this.finalTransform);
                        for (var F = !0, T = this.comp; F;) T.finalTransform ? (T.data.hasMask && P.splice(0, 0, T.finalTransform), T = T.comp) : F = !1;
                        var D = P.length;
                        for (S = 0; S < D; S += 1) E = P[S].mat.applyToPointArray(0, 0, 0), u = [u[0] - E[0], u[1] - E[1], 0];
                        return u
                    },
                    mHelper: new Matrix
                }, MaskElement.prototype.getMaskProperty = function(u) {
                    return this.viewData[u].prop
                }, MaskElement.prototype.renderFrame = function(u) {
                    var S, E = this.element.finalTransform.mat,
                        P = this.masksProperties.length;
                    for (S = 0; S < P; S += 1)
                        if ((this.viewData[S].prop._mdf || u) && this.drawPath(this.masksProperties[S], this.viewData[S].prop.v, this.viewData[S]), (this.viewData[S].op._mdf || u) && this.viewData[S].elem.setAttribute("fill-opacity", this.viewData[S].op.v), "n" !== this.masksProperties[S].mode && (this.viewData[S].invRect && (this.element.finalTransform.mProp._mdf || u) && this.viewData[S].invRect.setAttribute("transform", E.getInverseMatrix().to2dCSS()), this.storedData[S].x && (this.storedData[S].x._mdf || u))) {
                            var F = this.storedData[S].expan;
                            this.storedData[S].x.v < 0 ? ("erode" !== this.storedData[S].lastOperator && (this.storedData[S].lastOperator = "erode", this.storedData[S].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[S].filterId + ")")), F.setAttribute("radius", -this.storedData[S].x.v)) : ("dilate" !== this.storedData[S].lastOperator && (this.storedData[S].lastOperator = "dilate", this.storedData[S].elem.setAttribute("filter", null)), this.storedData[S].elem.setAttribute("stroke-width", 2 * this.storedData[S].x.v))
                        }
                }, MaskElement.prototype.getMaskelement = function() {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function() {
                    return "M0,0 " + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + " v-" + this.globalData.compSize.h) + " "
                }, MaskElement.prototype.drawPath = function(u, S, E) {
                    var P, F, T = " M" + S.v[0][0] + "," + S.v[0][1];
                    for (P = 1, F = S._length; P < F; P += 1) T += " C" + S.o[P - 1][0] + "," + S.o[P - 1][1] + " " + S.i[P][0] + "," + S.i[P][1] + " " + S.v[P][0] + "," + S.v[P][1];
                    if (S.c && F > 1 && (T += " C" + S.o[P - 1][0] + "," + S.o[P - 1][1] + " " + S.i[0][0] + "," + S.i[0][1] + " " + S.v[0][0] + "," + S.v[0][1]), E.lastPath !== T) {
                        var D = "";
                        E.elem && (S.c && (D = u.inv ? this.solidPath + T : T), E.elem.setAttribute("d", D)), E.lastPath = T
                    }
                }, MaskElement.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                };
                var filtersFactory = function() {
                        var u = {};

                        function createFilter(u, S) {
                            var E = createNS("filter");
                            return E.setAttribute("id", u), !0 !== S && (E.setAttribute("filterUnits", "objectBoundingBox"), E.setAttribute("x", "0%"), E.setAttribute("y", "0%"), E.setAttribute("width", "100%"), E.setAttribute("height", "100%")), E
                        }

                        function createAlphaToLuminanceFilter() {
                            var u = createNS("feColorMatrix");
                            return u.setAttribute("type", "matrix"), u.setAttribute("color-interpolation-filters", "sRGB"), u.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), u
                        }
                        return u.createFilter = createFilter, u.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter, u
                    }(),
                    featureSupport = function() {
                        var u = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: "undefined" != typeof OffscreenCanvas
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (u.maskType = !1), /firefox/i.test(navigator.userAgent) && (u.svgLumaHidden = !1), u
                    }(),
                    registeredEffects$1 = {},
                    idPrefix = "filter_result_";

                function SVGEffects(u) {
                    var S, E, P = "SourceGraphic",
                        F = u.data.ef ? u.data.ef.length : 0,
                        T = createElementID(),
                        D = filtersFactory.createFilter(T, !0),
                        M = 0;
                    for (S = 0, this.filters = []; S < F; S += 1) {
                        E = null;
                        var I = u.data.ef[S].ty;
                        registeredEffects$1[I] && (E = new registeredEffects$1[I].effect(D, u.effectsManager.effectElements[S], u, idPrefix + M, P), P = idPrefix + M, registeredEffects$1[I].countsAsEffect && (M += 1)), E && this.filters.push(E)
                    }
                    M && (u.globalData.defs.appendChild(D), u.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + T + ")")), this.filters.length && u.addRenderableComponent(this)
                }

                function registerEffect$1(u, S, E) {
                    registeredEffects$1[u] = {
                        effect: S,
                        countsAsEffect: E
                    }
                }

                function SVGBaseElement() {}

                function HierarchyElement() {}

                function RenderableDOMElement() {}

                function IImageElement(u, S, E) {
                    this.assetData = S.getAssetData(u.refId), this.assetData && this.assetData.sid && (this.assetData = S.slotManager.getProp(this.assetData)), this.initElement(u, S, E), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ProcessedElement(u, S) {
                    this.elem = u, this.pos = S
                }

                function IShapeElement() {}
                SVGEffects.prototype.renderFrame = function(u) {
                        var S, E = this.filters.length;
                        for (S = 0; S < E; S += 1) this.filters[S].renderFrame(u)
                    }, SVGEffects.prototype.getEffects = function(u) {
                        var S, E = this.filters.length,
                            P = [];
                        for (S = 0; S < E; S += 1) this.filters[S].type === u && P.push(this.filters[S]);
                        return P
                    }, SVGBaseElement.prototype = {
                        initRendererElement: function() {
                            this.layerElement = createNS("g")
                        },
                        createContainerElements: function() {
                            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var u = null;
                            if (this.data.td) {
                                this.matteMasks = {};
                                var S = createNS("g");
                                S.setAttribute("id", this.layerId), S.appendChild(this.layerElement), u = S, this.globalData.defs.appendChild(S)
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), u = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                var E = createNS("clipPath"),
                                    P = createNS("path");
                                P.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var F = createElementID();
                                if (E.setAttribute("id", F), E.appendChild(P), this.globalData.defs.appendChild(E), this.checkMasks()) {
                                    var T = createNS("g");
                                    T.setAttribute("clip-path", "url(" + getLocationHref() + "#" + F + ")"), T.appendChild(this.layerElement), this.transformedElement = T, u ? u.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + F + ")")
                            }
                            0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
                        },
                        getMatte: function(u) {
                            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[u]) {
                                var S, E, P, F, T = this.layerId + "_" + u;
                                if (1 === u || 3 === u) {
                                    var D = createNS("mask");
                                    D.setAttribute("id", T), D.setAttribute("mask-type", 3 === u ? "luminance" : "alpha"), (P = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), D.appendChild(P), this.globalData.defs.appendChild(D), featureSupport.maskType || 1 !== u || (D.setAttribute("mask-type", "luminance"), S = createElementID(), E = filtersFactory.createFilter(S), this.globalData.defs.appendChild(E), E.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (F = createNS("g")).appendChild(P), D.appendChild(F), F.setAttribute("filter", "url(" + getLocationHref() + "#" + S + ")"))
                                } else if (2 === u) {
                                    var M = createNS("mask");
                                    M.setAttribute("id", T), M.setAttribute("mask-type", "alpha");
                                    var I = createNS("g");
                                    M.appendChild(I), S = createElementID(), E = filtersFactory.createFilter(S);
                                    var V = createNS("feComponentTransfer");
                                    V.setAttribute("in", "SourceGraphic"), E.appendChild(V);
                                    var L = createNS("feFuncA");
                                    L.setAttribute("type", "table"), L.setAttribute("tableValues", "1.0 0.0"), V.appendChild(L), this.globalData.defs.appendChild(E);
                                    var R = createNS("rect");
                                    R.setAttribute("width", this.comp.data.w), R.setAttribute("height", this.comp.data.h), R.setAttribute("x", "0"), R.setAttribute("y", "0"), R.setAttribute("fill", "#ffffff"), R.setAttribute("opacity", "0"), I.setAttribute("filter", "url(" + getLocationHref() + "#" + S + ")"), I.appendChild(R), (P = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), I.appendChild(P), featureSupport.maskType || (M.setAttribute("mask-type", "luminance"), E.appendChild(filtersFactory.createAlphaToLuminanceFilter()), F = createNS("g"), I.appendChild(R), F.appendChild(this.layerElement), I.appendChild(F)), this.globalData.defs.appendChild(M)
                                }
                                this.matteMasks[u] = T
                            }
                            return this.matteMasks[u]
                        },
                        setMatte: function(u) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + u + ")")
                        }
                    }, HierarchyElement.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting()
                        },
                        setHierarchy: function(u) {
                            this.hierarchy = u
                        },
                        setAsParent: function() {
                            this._isParent = !0
                        },
                        checkParenting: function() {
                            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                        }
                    },
                    function() {
                        extendPrototype([RenderableElement, createProxyFunction({
                            initElement: function(u, S, E) {
                                this.initFrame(), this.initBaseData(u, S, E), this.initTransform(u, S, E), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                            },
                            hide: function() {
                                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                            },
                            show: function() {
                                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            renderInnerContent: function() {},
                            prepareFrame: function(u) {
                                this._mdf = !1, this.prepareRenderableFrame(u), this.prepareProperties(u, this.isInRange), this.checkTransparency()
                            },
                            destroy: function() {
                                this.innerElem = null, this.destroyBaseElement()
                            }
                        })], RenderableDOMElement)
                    }(), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                        var u = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this.layerElement.appendChild(this.innerElem)
                    }, IImageElement.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, IShapeElement.prototype = {
                        addShapeToModifiers: function(u) {
                            var S, E = this.shapeModifiers.length;
                            for (S = 0; S < E; S += 1) this.shapeModifiers[S].addShape(u)
                        },
                        isShapeInAnimatedModifiers: function(u) {
                            for (var S = 0, E = this.shapeModifiers.length; S < E;)
                                if (this.shapeModifiers[S].isAnimatedWithShape(u)) return !0;
                            return !1
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                var u, S = this.shapes.length;
                                for (u = 0; u < S; u += 1) this.shapes[u].sh.reset();
                                for (u = (S = this.shapeModifiers.length) - 1; u >= 0 && !this.shapeModifiers[u].processShapes(this._isFirstFrame); u -= 1);
                            }
                        },
                        searchProcessedElement: function(u) {
                            for (var S = this.processedElements, E = 0, P = S.length; E < P;) {
                                if (S[E].elem === u) return S[E].pos;
                                E += 1
                            }
                            return 0
                        },
                        addProcessedElement: function(u, S) {
                            for (var E = this.processedElements, P = E.length; P;)
                                if (E[P -= 1].elem === u) {
                                    E[P].pos = S;
                                    return
                                }
                            E.push(new ProcessedElement(u, S))
                        },
                        prepareFrame: function(u) {
                            this.prepareRenderableFrame(u), this.prepareProperties(u, this.isInRange)
                        }
                    };
                var lineCapEnum = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    lineJoinEnum = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    };

                function SVGShapeData(u, S, E) {
                    this.caches = [], this.styles = [], this.transformers = u, this.lStr = "", this.sh = E, this.lvl = S, this._isAnimated = !!E.k;
                    for (var P = 0, F = u.length; P < F;) {
                        if (u[P].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        P += 1
                    }
                }

                function SVGStyleData(u, S) {
                    this.data = u, this.type = u.ty, this.d = "", this.lvl = S, this._mdf = !1, this.closed = !0 === u.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function DashProperty(u, S, E, P) {
                    this.elem = u, this.frameId = -1, this.dataProps = createSizedArray(S.length), this.renderer = E, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", S.length ? S.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(P);
                    var F, T, D = S.length || 0;
                    for (F = 0; F < D; F += 1) T = PropertyFactory.getProp(u, S[F].v, 0, 0, this), this.k = T.k || this.k, this.dataProps[F] = {
                        n: S[F].n,
                        p: T
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function SVGStrokeStyleData(u, S, E) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(u, S.o, 0, .01, this), this.w = PropertyFactory.getProp(u, S.w, 0, null, this), this.d = new DashProperty(u, S.d || {}, "svg", this), this.c = PropertyFactory.getProp(u, S.c, 1, 255, this), this.style = E, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(u, S, E) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(u, S.o, 0, .01, this), this.c = PropertyFactory.getProp(u, S.c, 1, 255, this), this.style = E
                }

                function SVGNoStyleData(u, S, E) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.style = E
                }

                function GradientProperty(u, S, E) {
                    this.data = S, this.c = createTypedArray("uint8c", 4 * S.p);
                    var P = S.k.k[0].s ? S.k.k[0].s.length - 4 * S.p : S.k.k.length - 4 * S.p;
                    this.o = createTypedArray("float32", P), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = P, this.initDynamicPropertyContainer(E), this.prop = PropertyFactory.getProp(u, S.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }

                function SVGGradientFillStyleData(u, S, E) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.initGradientData(u, S, E)
                }

                function SVGGradientStrokeStyleData(u, S, E) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(u, S.w, 0, null, this), this.d = new DashProperty(u, S.d || {}, "svg", this), this.initGradientData(u, S, E), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }

                function SVGTransformData(u, S, E) {
                    this.transform = {
                        mProps: u,
                        op: S,
                        container: E
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }
                SVGShapeData.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, SVGStyleData.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, DashProperty.prototype.getValue = function(u) {
                    if ((this.elem.globalData.frameId !== this.frameId || u) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || u, this._mdf)) {
                        var S = 0,
                            E = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), S = 0; S < E; S += 1) "o" !== this.dataProps[S].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[S].p.v : this.dashArray[S] = this.dataProps[S].p.v : this.dashoffset[0] = this.dataProps[S].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(u, S) {
                    for (var E = 0, P = this.o.length / 2; E < P;) {
                        if (Math.abs(u[4 * E] - u[4 * S + 2 * E]) > .01) return !1;
                        E += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var u = 0, S = this.data.k.k.length; u < S;) {
                            if (!this.comparePoints(this.data.k.k[u].s, this.data.p)) return !1;
                            u += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function(u) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || u) {
                        var S, E, P, F = 4 * this.data.p;
                        for (S = 0; S < F; S += 1) E = S % 4 == 0 ? 100 : 255, P = Math.round(this.prop.v[S] * E), this.c[S] !== P && (this.c[S] = P, this._cmdf = !u);
                        if (this.o.length)
                            for (F = this.prop.v.length, S = 4 * this.data.p; S < F; S += 1) E = S % 2 == 0 ? 100 : 1, P = S % 2 == 0 ? Math.round(100 * this.prop.v[S]) : this.prop.v[S], this.o[S - 4 * this.data.p] !== P && (this.o[S - 4 * this.data.p] = P, this._omdf = !u);
                        this._mdf = !u
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(u, S, E) {
                    this.o = PropertyFactory.getProp(u, S.o, 0, .01, this), this.s = PropertyFactory.getProp(u, S.s, 1, null, this), this.e = PropertyFactory.getProp(u, S.e, 1, null, this), this.h = PropertyFactory.getProp(u, S.h || {
                        k: 0
                    }, 0, .01, this), this.a = PropertyFactory.getProp(u, S.a || {
                        k: 0
                    }, 0, degToRads, this), this.g = new GradientProperty(u, S.g, this), this.style = E, this.stops = [], this.setGradientData(E.pElem, S), this.setGradientOpacity(S, E), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function(u, S) {
                    var E, P, F, T = createElementID(),
                        D = createNS(1 === S.t ? "linearGradient" : "radialGradient");
                    D.setAttribute("id", T), D.setAttribute("spreadMethod", "pad"), D.setAttribute("gradientUnits", "userSpaceOnUse");
                    var M = [];
                    for (P = 0, F = 4 * S.g.p; P < F; P += 4) E = createNS("stop"), D.appendChild(E), M.push(E);
                    u.setAttribute("gf" === S.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + T + ")"), this.gf = D, this.cst = M
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(u, S) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var E, P, F, T = createNS("mask"),
                            D = createNS("path");
                        T.appendChild(D);
                        var M = createElementID(),
                            I = createElementID();
                        T.setAttribute("id", I);
                        var V = createNS(1 === u.t ? "linearGradient" : "radialGradient");
                        V.setAttribute("id", M), V.setAttribute("spreadMethod", "pad"), V.setAttribute("gradientUnits", "userSpaceOnUse"), F = u.g.k.k[0].s ? u.g.k.k[0].s.length : u.g.k.k.length;
                        var L = this.stops;
                        for (P = 4 * u.g.p; P < F; P += 2)(E = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), V.appendChild(E), L.push(E);
                        D.setAttribute("gf" === u.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + M + ")"), "gs" === u.ty && (D.setAttribute("stroke-linecap", lineCapEnum[u.lc || 2]), D.setAttribute("stroke-linejoin", lineJoinEnum[u.lj || 2]), 1 === u.lj && D.setAttribute("stroke-miterlimit", u.ml)), this.of = V, this.ms = T, this.ost = L, this.maskId = I, S.msElem = D
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var buildShapeString = function(u, S, E, P) {
                        if (0 === S) return "";
                        var F, T = u.o,
                            D = u.i,
                            M = u.v,
                            I = " M" + P.applyToPointStringified(M[0][0], M[0][1]);
                        for (F = 1; F < S; F += 1) I += " C" + P.applyToPointStringified(T[F - 1][0], T[F - 1][1]) + " " + P.applyToPointStringified(D[F][0], D[F][1]) + " " + P.applyToPointStringified(M[F][0], M[F][1]);
                        return E && S && (I += " C" + P.applyToPointStringified(T[F - 1][0], T[F - 1][1]) + " " + P.applyToPointStringified(D[0][0], D[0][1]) + " " + P.applyToPointStringified(M[0][0], M[0][1]) + "z"), I
                    },
                    SVGElementsRenderer = function() {
                        var u = new Matrix,
                            S = new Matrix;

                        function renderContentTransform(u, S, E) {
                            (E || S.transform.op._mdf) && S.transform.container.setAttribute("opacity", S.transform.op.v), (E || S.transform.mProps._mdf) && S.transform.container.setAttribute("transform", S.transform.mProps.v.to2dCSS())
                        }

                        function renderNoop() {}

                        function renderPath(E, P, F) {
                            var T, D, M, I, V, L, R, G, O, N, H = P.styles.length,
                                W = P.lvl;
                            for (L = 0; L < H; L += 1) {
                                if (I = P.sh._mdf || F, P.styles[L].lvl < W) {
                                    for (G = S.reset(), O = W - P.styles[L].lvl, N = P.transformers.length - 1; !I && O > 0;) I = P.transformers[N].mProps._mdf || I, O -= 1, N -= 1;
                                    if (I)
                                        for (O = W - P.styles[L].lvl, N = P.transformers.length - 1; O > 0;) G.multiply(P.transformers[N].mProps.v), O -= 1, N -= 1
                                } else G = u;
                                if (D = (R = P.sh.paths)._length, I) {
                                    for (T = 0, M = ""; T < D; T += 1)(V = R.shapes[T]) && V._length && (M += buildShapeString(V, V._length, V.c, G));
                                    P.caches[L] = M
                                } else M = P.caches[L];
                                P.styles[L].d += !0 === E.hd ? "" : M, P.styles[L]._mdf = I || P.styles[L]._mdf
                            }
                        }

                        function renderFill(u, S, E) {
                            var P = S.style;
                            (S.c._mdf || E) && P.pElem.setAttribute("fill", "rgb(" + bmFloor(S.c.v[0]) + "," + bmFloor(S.c.v[1]) + "," + bmFloor(S.c.v[2]) + ")"), (S.o._mdf || E) && P.pElem.setAttribute("fill-opacity", S.o.v)
                        }

                        function renderGradientStroke(u, S, E) {
                            renderGradient(u, S, E), renderStroke(u, S, E)
                        }

                        function renderGradient(u, S, E) {
                            var P, F, T, D, M, I = S.gf,
                                V = S.g._hasOpacity,
                                L = S.s.v,
                                R = S.e.v;
                            if (S.o._mdf || E) {
                                var G = "gf" === u.ty ? "fill-opacity" : "stroke-opacity";
                                S.style.pElem.setAttribute(G, S.o.v)
                            }
                            if (S.s._mdf || E) {
                                var O = 1 === u.t ? "x1" : "cx",
                                    N = "x1" === O ? "y1" : "cy";
                                I.setAttribute(O, L[0]), I.setAttribute(N, L[1]), V && !S.g._collapsable && (S.of.setAttribute(O, L[0]), S.of.setAttribute(N, L[1]))
                            }
                            if (S.g._cmdf || E) {
                                P = S.cst;
                                var H = S.g.c;
                                for (F = 0, T = P.length; F < T; F += 1)(D = P[F]).setAttribute("offset", H[4 * F] + "%"), D.setAttribute("stop-color", "rgb(" + H[4 * F + 1] + "," + H[4 * F + 2] + "," + H[4 * F + 3] + ")")
                            }
                            if (V && (S.g._omdf || E)) {
                                var W = S.g.o;
                                for (F = 0, T = (P = S.g._collapsable ? S.cst : S.ost).length; F < T; F += 1) D = P[F], S.g._collapsable || D.setAttribute("offset", W[2 * F] + "%"), D.setAttribute("stop-opacity", W[2 * F + 1])
                            }
                            if (1 === u.t)(S.e._mdf || E) && (I.setAttribute("x2", R[0]), I.setAttribute("y2", R[1]), V && !S.g._collapsable && (S.of.setAttribute("x2", R[0]), S.of.setAttribute("y2", R[1])));
                            else if ((S.s._mdf || S.e._mdf || E) && (M = Math.sqrt(Math.pow(L[0] - R[0], 2) + Math.pow(L[1] - R[1], 2)), I.setAttribute("r", M), V && !S.g._collapsable && S.of.setAttribute("r", M)), S.e._mdf || S.h._mdf || S.a._mdf || E) {
                                M || (M = Math.sqrt(Math.pow(L[0] - R[0], 2) + Math.pow(L[1] - R[1], 2)));
                                var $ = Math.atan2(R[1] - L[1], R[0] - L[0]),
                                    Y = S.h.v;
                                Y >= 1 ? Y = .99 : Y <= -1 && (Y = -.99);
                                var X = M * Y,
                                    Z = Math.cos($ + S.a.v) * X + L[0],
                                    J = Math.sin($ + S.a.v) * X + L[1];
                                I.setAttribute("fx", Z), I.setAttribute("fy", J), V && !S.g._collapsable && (S.of.setAttribute("fx", Z), S.of.setAttribute("fy", J))
                            }
                        }

                        function renderStroke(u, S, E) {
                            var P = S.style,
                                F = S.d;
                            F && (F._mdf || E) && F.dashStr && (P.pElem.setAttribute("stroke-dasharray", F.dashStr), P.pElem.setAttribute("stroke-dashoffset", F.dashoffset[0])), S.c && (S.c._mdf || E) && P.pElem.setAttribute("stroke", "rgb(" + bmFloor(S.c.v[0]) + "," + bmFloor(S.c.v[1]) + "," + bmFloor(S.c.v[2]) + ")"), (S.o._mdf || E) && P.pElem.setAttribute("stroke-opacity", S.o.v), (S.w._mdf || E) && (P.pElem.setAttribute("stroke-width", S.w.v), P.msElem && P.msElem.setAttribute("stroke-width", S.w.v))
                        }
                        return {
                            createRenderFunction: function(u) {
                                switch (u.ty) {
                                    case "fl":
                                        return renderFill;
                                    case "gf":
                                        return renderGradient;
                                    case "gs":
                                        return renderGradientStroke;
                                    case "st":
                                        return renderStroke;
                                    case "sh":
                                    case "el":
                                    case "rc":
                                    case "sr":
                                        return renderPath;
                                    case "tr":
                                        return renderContentTransform;
                                    case "no":
                                        return renderNoop;
                                    default:
                                        return null
                                }
                            }
                        }
                    }();

                function SVGShapeElement(u, S, E) {
                    this.shapes = [], this.shapesData = u.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(u, S, E), this.prevViewData = []
                }

                function LetterProps(u, S, E, P, F, T) {
                    this.o = u, this.sw = S, this.sc = E, this.fc = P, this.m = F, this.p = T, this._mdf = {
                        o: !0,
                        sw: !!S,
                        sc: !!E,
                        fc: !!P,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(u, S) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, S.d && S.d.sid && (S.d = u.globalData.slotManager.getProp(S.d)), this.data = S, this.elem = u, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                    var u, S, E, P, F = this.shapes.length,
                        T = this.stylesList.length,
                        D = [],
                        M = !1;
                    for (E = 0; E < T; E += 1) {
                        for (u = 0, P = this.stylesList[E], M = !1, D.length = 0; u < F; u += 1) - 1 !== (S = this.shapes[u]).styles.indexOf(P) && (D.push(S), M = S._isAnimated || M);
                        D.length > 1 && M && this.setShapesAsAnimated(D)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function(u) {
                    var S, E = u.length;
                    for (S = 0; S < E; S += 1) u[S].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function(u, S) {
                    var E, P = new SVGStyleData(u, S),
                        F = P.pElem;
                    return "st" === u.ty ? E = new SVGStrokeStyleData(this, u, P) : "fl" === u.ty ? E = new SVGFillStyleData(this, u, P) : "gf" === u.ty || "gs" === u.ty ? (E = new("gf" === u.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, u, P), this.globalData.defs.appendChild(E.gf), E.maskId && (this.globalData.defs.appendChild(E.ms), this.globalData.defs.appendChild(E.of), F.setAttribute("mask", "url(" + getLocationHref() + "#" + E.maskId + ")"))) : "no" === u.ty && (E = new SVGNoStyleData(this, u, P)), ("st" === u.ty || "gs" === u.ty) && (F.setAttribute("stroke-linecap", lineCapEnum[u.lc || 2]), F.setAttribute("stroke-linejoin", lineJoinEnum[u.lj || 2]), F.setAttribute("fill-opacity", "0"), 1 === u.lj && F.setAttribute("stroke-miterlimit", u.ml)), 2 === u.r && F.setAttribute("fill-rule", "evenodd"), u.ln && F.setAttribute("id", u.ln), u.cl && F.setAttribute("class", u.cl), u.bm && (F.style["mix-blend-mode"] = getBlendMode(u.bm)), this.stylesList.push(P), this.addToAnimatedContents(u, E), E
                }, SVGShapeElement.prototype.createGroupElement = function(u) {
                    var S = new ShapeGroupData;
                    return u.ln && S.gr.setAttribute("id", u.ln), u.cl && S.gr.setAttribute("class", u.cl), u.bm && (S.gr.style["mix-blend-mode"] = getBlendMode(u.bm)), S
                }, SVGShapeElement.prototype.createTransformElement = function(u, S) {
                    var E = TransformPropertyFactory.getTransformProperty(this, u, this),
                        P = new SVGTransformData(E, E.o, S);
                    return this.addToAnimatedContents(u, P), P
                }, SVGShapeElement.prototype.createShapeElement = function(u, S, E) {
                    var P = 4;
                    "rc" === u.ty ? P = 5 : "el" === u.ty ? P = 6 : "sr" === u.ty && (P = 7);
                    var F = ShapePropertyFactory.getShapeProp(this, u, P, this),
                        T = new SVGShapeData(S, E, F);
                    return this.shapes.push(T), this.addShapeToModifiers(T), this.addToAnimatedContents(u, T), T
                }, SVGShapeElement.prototype.addToAnimatedContents = function(u, S) {
                    for (var E = 0, P = this.animatedContents.length; E < P;) {
                        if (this.animatedContents[E].element === S) return;
                        E += 1
                    }
                    this.animatedContents.push({
                        fn: SVGElementsRenderer.createRenderFunction(u),
                        element: S,
                        data: u
                    })
                }, SVGShapeElement.prototype.setElementStyles = function(u) {
                    var S, E = u.styles,
                        P = this.stylesList.length;
                    for (S = 0; S < P; S += 1) this.stylesList[S].closed || E.push(this.stylesList[S])
                }, SVGShapeElement.prototype.reloadShapes = function() {
                    this._isFirstFrame = !0;
                    var u, S = this.itemsData.length;
                    for (u = 0; u < S; u += 1) this.prevViewData[u] = this.itemsData[u];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), S = this.dynamicProperties.length, u = 0; u < S; u += 1) this.dynamicProperties[u].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function(u, S, E, P, F, T, D) {
                    var M, I, V, L, R, G, O = [].concat(T),
                        N = u.length - 1,
                        H = [],
                        W = [];
                    for (M = N; M >= 0; M -= 1) {
                        if ((G = this.searchProcessedElement(u[M])) ? S[M] = E[G - 1] : u[M]._render = D, "fl" === u[M].ty || "st" === u[M].ty || "gf" === u[M].ty || "gs" === u[M].ty || "no" === u[M].ty) G ? S[M].style.closed = !1 : S[M] = this.createStyleElement(u[M], F), u[M]._render && S[M].style.pElem.parentNode !== P && P.appendChild(S[M].style.pElem), H.push(S[M].style);
                        else if ("gr" === u[M].ty) {
                            if (G)
                                for (I = 0, V = S[M].it.length; I < V; I += 1) S[M].prevViewData[I] = S[M].it[I];
                            else S[M] = this.createGroupElement(u[M]);
                            this.searchShapes(u[M].it, S[M].it, S[M].prevViewData, S[M].gr, F + 1, O, D), u[M]._render && S[M].gr.parentNode !== P && P.appendChild(S[M].gr)
                        } else "tr" === u[M].ty ? (G || (S[M] = this.createTransformElement(u[M], P)), L = S[M].transform, O.push(L)) : "sh" === u[M].ty || "rc" === u[M].ty || "el" === u[M].ty || "sr" === u[M].ty ? (G || (S[M] = this.createShapeElement(u[M], O, F)), this.setElementStyles(S[M])) : "tm" === u[M].ty || "rd" === u[M].ty || "ms" === u[M].ty || "pb" === u[M].ty || "zz" === u[M].ty || "op" === u[M].ty ? (G ? (R = S[M]).closed = !1 : ((R = ShapeModifiers.getModifier(u[M].ty)).init(this, u[M]), S[M] = R, this.shapeModifiers.push(R)), W.push(R)) : "rp" === u[M].ty && (G ? (R = S[M]).closed = !0 : (R = ShapeModifiers.getModifier(u[M].ty), S[M] = R, R.init(this, u, M, S), this.shapeModifiers.push(R), D = !1), W.push(R));
                        this.addProcessedElement(u[M], M + 1)
                    }
                    for (M = 0, N = H.length; M < N; M += 1) H[M].closed = !0;
                    for (M = 0, N = W.length; M < N; M += 1) W[M].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function() {
                    this.renderModifiers();
                    var u, S = this.stylesList.length;
                    for (u = 0; u < S; u += 1) this.stylesList[u].reset();
                    for (this.renderShape(), u = 0; u < S; u += 1)(this.stylesList[u]._mdf || this._isFirstFrame) && (this.stylesList[u].msElem && (this.stylesList[u].msElem.setAttribute("d", this.stylesList[u].d), this.stylesList[u].d = "M0 0" + this.stylesList[u].d), this.stylesList[u].pElem.setAttribute("d", this.stylesList[u].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function() {
                    var u, S, E = this.animatedContents.length;
                    for (u = 0; u < E; u += 1) S = this.animatedContents[u], (this._isFirstFrame || S.element._isAnimated) && !0 !== S.data && S.fn(S.data, S.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, LetterProps.prototype.update = function(u, S, E, P, F, T) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var D = !1;
                    return this.o !== u && (this.o = u, this._mdf.o = !0, D = !0), this.sw !== S && (this.sw = S, this._mdf.sw = !0, D = !0), this.sc !== E && (this.sc = E, this._mdf.sc = !0, D = !0), this.fc !== P && (this.fc = P, this._mdf.fc = !0, D = !0), this.m !== F && (this.m = F, this._mdf.m = !0, D = !0), T.length && (this.p[0] !== T[0] || this.p[1] !== T[1] || this.p[4] !== T[4] || this.p[5] !== T[5] || this.p[12] !== T[12] || this.p[13] !== T[13]) && (this.p = T, this._mdf.p = !0, D = !0), D
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(u, S) {
                    for (var E in S) Object.prototype.hasOwnProperty.call(S, E) && (u[E] = S[E]);
                    return u
                }, TextProperty.prototype.setCurrentData = function(u) {
                    u.__complete || this.completeTextData(u), this.currentData = u, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function(u) {
                    this.effectsSequence.push(u), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function(u) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || u) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var S, E = this.currentData,
                            P = this.keysIndex;
                        if (this.lock) {
                            this.setCurrentData(this.currentData);
                            return
                        }
                        this.lock = !0, this._mdf = !1;
                        var F = this.effectsSequence.length,
                            T = u || this.data.d.k[this.keysIndex].s;
                        for (S = 0; S < F; S += 1) T = P !== this.keysIndex ? this.effectsSequence[S](T, T.t) : this.effectsSequence[S](this.currentData, T.t);
                        E !== T && this.setCurrentData(T), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }, TextProperty.prototype.getKeyframeValue = function() {
                    for (var u = this.data.d.k, S = this.elem.comp.renderedFrame, E = 0, P = u.length; E <= P - 1 && E !== P - 1 && !(u[E + 1].t > S);) E += 1;
                    return this.keysIndex !== E && (this.keysIndex = E), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function(u) {
                    for (var S, E, P = [], F = 0, T = u.length, D = !1, M = !1, I = ""; F < T;) D = M, M = !1, S = u.charCodeAt(F), I = u.charAt(F), FontManager.isCombinedCharacter(S) ? D = !0 : S >= 55296 && S <= 56319 ? FontManager.isRegionalFlag(u, F) ? I = u.substr(F, 14) : (E = u.charCodeAt(F + 1)) >= 56320 && E <= 57343 && (FontManager.isModifier(S, E) ? (I = u.substr(F, 2), D = !0) : I = FontManager.isFlagEmoji(u.substr(F, 4)) ? u.substr(F, 4) : u.substr(F, 2)) : S > 56319 ? (E = u.charCodeAt(F + 1), FontManager.isVariationSelector(S) && (D = !0)) : FontManager.isZeroWidthJoiner(S) && (D = !0, M = !0), D ? (P[P.length - 1] += I, D = !1) : P.push(I), F += I.length;
                    return P
                }, TextProperty.prototype.completeTextData = function(u) {
                    u.__complete = !0;
                    var S = this.elem.globalData.fontManager,
                        E = this.data,
                        P = [],
                        F = 0,
                        T = E.m.g,
                        D = 0,
                        M = 0,
                        I = 0,
                        V = [],
                        L = 0,
                        R = 0,
                        G = S.getFontByName(u.f),
                        O = 0,
                        N = getFontProperties(G);
                    u.fWeight = N.weight, u.fStyle = N.style, u.finalSize = u.s, u.finalText = this.buildFinalText(u.t), $ = u.finalText.length, u.finalLineHeight = u.lh;
                    var H = u.tr / 1e3 * u.finalSize;
                    if (u.sz)
                        for (var W, $, Y, X, Z, J, K, U, Q, tt, te = !0, tr = u.sz[0], ts = u.sz[1]; te;) {
                            tt = this.buildFinalText(u.t), Q = 0, L = 0, $ = tt.length, H = u.tr / 1e3 * u.finalSize;
                            var ta = -1;
                            for (W = 0; W < $; W += 1) U = tt[W].charCodeAt(0), Y = !1, " " === tt[W] ? ta = W : (13 === U || 3 === U) && (L = 0, Y = !0, Q += u.finalLineHeight || 1.2 * u.finalSize), S.chars ? (K = S.getCharData(tt[W], G.fStyle, G.fFamily), O = Y ? 0 : K.w * u.finalSize / 100) : O = S.measureText(tt[W], u.f, u.finalSize), L + O > tr && " " !== tt[W] ? (-1 === ta ? $ += 1 : W = ta, Q += u.finalLineHeight || 1.2 * u.finalSize, tt.splice(W, ta === W ? 1 : 0, "\r"), ta = -1, L = 0) : L += O + H;
                            Q += G.ascent * u.finalSize / 100, this.canResize && u.finalSize > this.minimumFontSize && ts < Q ? (u.finalSize -= 1, u.finalLineHeight = u.finalSize * u.lh / u.s) : (u.finalText = tt, $ = u.finalText.length, te = !1)
                        }
                    L = -H, O = 0;
                    var tn = 0;
                    for (W = 0; W < $; W += 1)
                        if (Y = !1, 13 === (U = (tp = u.finalText[W]).charCodeAt(0)) || 3 === U ? (tn = 0, V.push(L), R = L > R ? L : R, L = -2 * H, X = "", Y = !0, I += 1) : X = tp, S.chars ? (K = S.getCharData(tp, G.fStyle, S.getFontByName(u.f).fFamily), O = Y ? 0 : K.w * u.finalSize / 100) : O = S.measureText(X, u.f, u.finalSize), " " === tp ? tn += O + H : (L += O + H + tn, tn = 0), P.push({
                                l: O,
                                an: O,
                                add: D,
                                n: Y,
                                anIndexes: [],
                                val: X,
                                line: I,
                                animatorJustifyOffset: 0
                            }), 2 == T) {
                            if (D += O, "" === X || " " === X || W === $ - 1) {
                                for (("" === X || " " === X) && (D -= O); M <= W;) P[M].an = D, P[M].ind = F, P[M].extra = O, M += 1;
                                F += 1, D = 0
                            }
                        } else if (3 == T) {
                        if (D += O, "" === X || W === $ - 1) {
                            for ("" === X && (D -= O); M <= W;) P[M].an = D, P[M].ind = F, P[M].extra = O, M += 1;
                            D = 0, F += 1
                        }
                    } else P[F].ind = F, P[F].extra = 0, F += 1;
                    if (u.l = P, R = L > R ? L : R, V.push(L), u.sz) u.boxWidth = u.sz[0], u.justifyOffset = 0;
                    else switch (u.boxWidth = R, u.j) {
                        case 1:
                            u.justifyOffset = -u.boxWidth;
                            break;
                        case 2:
                            u.justifyOffset = -u.boxWidth / 2;
                            break;
                        default:
                            u.justifyOffset = 0
                    }
                    u.lineWidths = V;
                    var th = E.a;
                    J = th.length;
                    var tl = [];
                    for (Z = 0; Z < J; Z += 1) {
                        for ((tf = th[Z]).a.sc && (u.strokeColorAnim = !0), tf.a.sw && (u.strokeWidthAnim = !0), (tf.a.fc || tf.a.fh || tf.a.fs || tf.a.fb) && (u.fillColorAnim = !0), tu = 0, tm = tf.s.b, W = 0; W < $; W += 1)(tc = P[W]).anIndexes[Z] = tu, (1 == tm && "" !== tc.val || 2 == tm && "" !== tc.val && " " !== tc.val || 3 == tm && (tc.n || " " == tc.val || W == $ - 1) || 4 == tm && (tc.n || W == $ - 1)) && (1 === tf.s.rn && tl.push(tu), tu += 1);
                        E.a[Z].s.totalChars = tu;
                        var tp, tf, tc, tm, tu, td, tg = -1;
                        if (1 === tf.s.rn)
                            for (W = 0; W < $; W += 1) tg != (tc = P[W]).anIndexes[Z] && (tg = tc.anIndexes[Z], td = tl.splice(Math.floor(Math.random() * tl.length), 1)[0]), tc.anIndexes[Z] = td
                    }
                    u.yOffset = u.finalLineHeight || 1.2 * u.finalSize, u.ls = u.ls || 0, u.ascent = G.ascent * u.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function(u, S) {
                    S = void 0 === S ? this.keysIndex : S;
                    var E = this.copyData({}, this.data.d.k[S].s);
                    E = this.copyData(E, u), this.data.d.k[S].s = E, this.recalculate(S), this.setCurrentData(E), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function(u) {
                    var S = this.data.d.k[u].s;
                    S.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(S)
                }, TextProperty.prototype.canResizeFont = function(u) {
                    this.canResize = u, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function(u) {
                    this.minimumFontSize = Math.floor(u) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function() {
                    var u = Math.max,
                        S = Math.min,
                        E = Math.floor;

                    function TextSelectorPropFactory(u, S) {
                        this._currentTextLength = -1, this.k = !1, this.data = S, this.elem = u, this.comp = u.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(u), this.s = PropertyFactory.getProp(u, S.s || {
                            k: 0
                        }, 0, 0, this), "e" in S ? this.e = PropertyFactory.getProp(u, S.e, 0, 0, this) : this.e = {
                            v: 100
                        }, this.o = PropertyFactory.getProp(u, S.o || {
                            k: 0
                        }, 0, 0, this), this.xe = PropertyFactory.getProp(u, S.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = PropertyFactory.getProp(u, S.ne || {
                            k: 0
                        }, 0, 0, this), this.sm = PropertyFactory.getProp(u, S.sm || {
                            k: 100
                        }, 0, 0, this), this.a = PropertyFactory.getProp(u, S.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }
                    return TextSelectorPropFactory.prototype = {
                        getMult: function(P) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var F = 0,
                                T = 0,
                                D = 1,
                                M = 1;
                            this.ne.v > 0 ? F = this.ne.v / 100 : T = -this.ne.v / 100, this.xe.v > 0 ? D = 1 - this.xe.v / 100 : M = 1 + this.xe.v / 100;
                            var I = BezierFactory.getBezierEasing(F, T, D, M).get,
                                V = 0,
                                L = this.finalS,
                                R = this.finalE,
                                G = this.data.sh;
                            if (2 === G) V = I(V = R === L ? P >= R ? 1 : 0 : u(0, S(.5 / (R - L) + (P - L) / (R - L), 1)));
                            else if (3 === G) V = I(V = R === L ? P >= R ? 0 : 1 : 1 - u(0, S(.5 / (R - L) + (P - L) / (R - L), 1)));
                            else if (4 === G) R === L ? V = 0 : (V = u(0, S(.5 / (R - L) + (P - L) / (R - L), 1))) < .5 ? V *= 2 : V = 1 - 2 * (V - .5), V = I(V);
                            else if (5 === G) {
                                if (R === L) V = 0;
                                else {
                                    var O = R - L,
                                        N = -O / 2 + (P = S(u(0, P + .5 - L), R - L)),
                                        H = O / 2;
                                    V = Math.sqrt(1 - N * N / (H * H))
                                }
                                V = I(V)
                            } else 6 === G ? V = I(V = R === L ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (P = S(u(0, P + .5 - L), R - L)) / (R - L))) / 2) : (P >= E(L) && (V = P - L < 0 ? u(0, S(S(R, 1) - (L - P), 1)) : u(0, S(R - P, 1))), V = I(V));
                            if (100 !== this.sm.v) {
                                var W = .01 * this.sm.v;
                                0 === W && (W = 1e-8);
                                var $ = .5 - .5 * W;
                                V < $ ? V = 0 : (V = (V - $) / W) > 1 && (V = 1)
                            }
                            return V * this.a.v
                        },
                        getValue: function(u) {
                            this.iterateDynamicProperties(), this._mdf = u || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, u && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var S = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                E = this.o.v / S,
                                P = this.s.v / S + E,
                                F = this.e.v / S + E;
                            if (P > F) {
                                var T = P;
                                P = F, F = T
                            }
                            this.finalS = P, this.finalE = F
                        }
                    }, extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory), {
                        getTextSelectorProp: function(u, S, E) {
                            return new TextSelectorPropFactory(u, S, E)
                        }
                    }
                }();

                function TextAnimatorDataProperty(u, S, E) {
                    var P = {
                            propType: !1
                        },
                        F = PropertyFactory.getProp,
                        T = S.a;
                    this.a = {
                        r: T.r ? F(u, T.r, 0, degToRads, E) : P,
                        rx: T.rx ? F(u, T.rx, 0, degToRads, E) : P,
                        ry: T.ry ? F(u, T.ry, 0, degToRads, E) : P,
                        sk: T.sk ? F(u, T.sk, 0, degToRads, E) : P,
                        sa: T.sa ? F(u, T.sa, 0, degToRads, E) : P,
                        s: T.s ? F(u, T.s, 1, .01, E) : P,
                        a: T.a ? F(u, T.a, 1, 0, E) : P,
                        o: T.o ? F(u, T.o, 0, .01, E) : P,
                        p: T.p ? F(u, T.p, 1, 0, E) : P,
                        sw: T.sw ? F(u, T.sw, 0, 0, E) : P,
                        sc: T.sc ? F(u, T.sc, 1, 0, E) : P,
                        fc: T.fc ? F(u, T.fc, 1, 0, E) : P,
                        fh: T.fh ? F(u, T.fh, 0, 0, E) : P,
                        fs: T.fs ? F(u, T.fs, 0, .01, E) : P,
                        fb: T.fb ? F(u, T.fb, 0, .01, E) : P,
                        t: T.t ? F(u, T.t, 0, 0, E) : P
                    }, this.s = TextSelectorProp.getTextSelectorProp(u, S.s, E), this.s.t = S.s.t
                }

                function TextAnimatorProperty(u, S, E) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = u, this._renderType = S, this._elem = E, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(E)
                }

                function ITextElement() {}
                TextAnimatorProperty.prototype.searchProperties = function() {
                    var u, S, E = this._textData.a.length,
                        P = PropertyFactory.getProp;
                    for (u = 0; u < E; u += 1) S = this._textData.a[u], this._animatorsData[u] = new TextAnimatorDataProperty(this._elem, S, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: P(this._elem, this._textData.p.a, 0, 0, this),
                        f: P(this._elem, this._textData.p.f, 0, 0, this),
                        l: P(this._elem, this._textData.p.l, 0, 0, this),
                        r: P(this._elem, this._textData.p.r, 0, 0, this),
                        p: P(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = P(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function(u, S) {
                    if (this.lettersChangedFlag = S, this._mdf || this._isFirstFrame || S || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var E, P, F, T, D, M, I, V, L, R, G, O, N, H, W, $, Y, X, Z = this._moreOptions.alignment.v,
                            J = this._animatorsData,
                            K = this._textData,
                            U = this.mHelper,
                            Q = this._renderType,
                            tt = this.renderedLetters.length,
                            te = u.l;
                        if (this._hasMaskedPath) {
                            if (tP = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var tr, ts, ta, tn, th, tl, tp, tf, tc, tm, tu, td, tg, tv, tb, tS, tE, tP, tC, t_ = tP.v;
                                for (this._pathData.r.v && (t_ = t_.reverse()), th = {
                                        tLength: 0,
                                        segments: []
                                    }, tn = t_._length - 1, tS = 0, ta = 0; ta < tn; ta += 1) tC = bez.buildBezierData(t_.v[ta], t_.v[ta + 1], [t_.o[ta][0] - t_.v[ta][0], t_.o[ta][1] - t_.v[ta][1]], [t_.i[ta + 1][0] - t_.v[ta + 1][0], t_.i[ta + 1][1] - t_.v[ta + 1][1]]), th.tLength += tC.segmentLength, th.segments.push(tC), tS += tC.segmentLength;
                                ta = tn, tP.v.c && (tC = bez.buildBezierData(t_.v[ta], t_.v[0], [t_.o[ta][0] - t_.v[ta][0], t_.o[ta][1] - t_.v[ta][1]], [t_.i[0][0] - t_.v[0][0], t_.i[0][1] - t_.v[0][1]]), th.tLength += tC.segmentLength, th.segments.push(tC), tS += tC.segmentLength), this._pathData.pi = th
                            }
                            if (th = this._pathData.pi, tl = this._pathData.f.v, tu = 0, tm = 1, tf = 0, tc = !0, tv = th.segments, tl < 0 && tP.v.c)
                                for (th.tLength < Math.abs(tl) && (tl = -Math.abs(tl) % th.tLength), tu = tv.length - 1, tm = (tg = tv[tu].points).length - 1; tl < 0;) tl += tg[tm].partialLength, (tm -= 1) < 0 && (tu -= 1, tm = (tg = tv[tu].points).length - 1);
                            td = (tg = tv[tu].points)[tm - 1], tb = (tp = tg[tm]).partialLength
                        }
                        tn = te.length, tr = 0, ts = 0;
                        var tA = 1.2 * u.finalSize * .714,
                            tF = !0;
                        T = J.length;
                        var tk = -1,
                            tT = tl,
                            tD = tu,
                            tM = tm,
                            tw = -1,
                            tI = "",
                            tV = this.defaultPropsArray;
                        if (2 === u.j || 1 === u.j) {
                            var tL = 0,
                                tB = 0,
                                tR = 2 === u.j ? -.5 : -1,
                                tG = 0,
                                tO = !0;
                            for (ta = 0; ta < tn; ta += 1)
                                if (te[ta].n) {
                                    for (tL && (tL += tB); tG < ta;) te[tG].animatorJustifyOffset = tL, tG += 1;
                                    tL = 0, tO = !0
                                } else {
                                    for (F = 0; F < T; F += 1)(E = J[F].a).t.propType && (tO && 2 === u.j && (tB += E.t.v * tR), (M = (P = J[F].s).getMult(te[ta].anIndexes[F], K.a[F].s.totalChars)).length ? tL += E.t.v * M[0] * tR : tL += E.t.v * M * tR);
                                    tO = !1
                                }
                            for (tL && (tL += tB); tG < ta;) te[tG].animatorJustifyOffset = tL, tG += 1
                        }
                        for (ta = 0; ta < tn; ta += 1) {
                            if (U.reset(), R = 1, te[ta].n) tr = 0, ts += u.yOffset + (tF ? 1 : 0), tl = tT, tF = !1, this._hasMaskedPath && (tu = tD, tm = tM, td = (tg = tv[tu].points)[tm - 1], tb = (tp = tg[tm]).partialLength, tf = 0), tI = "", Y = "", W = "", X = "", tV = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (tw !== te[ta].line) {
                                        switch (u.j) {
                                            case 1:
                                                tl += tS - u.lineWidths[te[ta].line];
                                                break;
                                            case 2:
                                                tl += (tS - u.lineWidths[te[ta].line]) / 2
                                        }
                                        tw = te[ta].line
                                    }
                                    tk !== te[ta].ind && (te[tk] && (tl += te[tk].extra), tl += te[ta].an / 2, tk = te[ta].ind), tl += Z[0] * te[ta].an * .005;
                                    var tN = 0;
                                    for (F = 0; F < T; F += 1)(E = J[F].a).p.propType && ((M = (P = J[F].s).getMult(te[ta].anIndexes[F], K.a[F].s.totalChars)).length ? tN += E.p.v[0] * M[0] : tN += E.p.v[0] * M), E.a.propType && ((M = (P = J[F].s).getMult(te[ta].anIndexes[F], K.a[F].s.totalChars)).length ? tN += E.a.v[0] * M[0] : tN += E.a.v[0] * M);
                                    for (tc = !0, this._pathData.a.v && (tl = .5 * te[0].an + (tS - this._pathData.f.v - .5 * te[0].an - .5 * te[te.length - 1].an) * tk / (tn - 1) + this._pathData.f.v); tc;) tf + tb >= tl + tN || !tg ? (tE = (tl + tN - tf) / tp.partialLength, V = td.point[0] + (tp.point[0] - td.point[0]) * tE, L = td.point[1] + (tp.point[1] - td.point[1]) * tE, U.translate(-Z[0] * te[ta].an * .005, -(.01 * (Z[1] * tA))), tc = !1) : tg && (tf += tp.partialLength, (tm += 1) >= tg.length && (tm = 0, tv[tu += 1] ? tg = tv[tu].points : tP.v.c ? (tm = 0, tg = tv[tu = 0].points) : (tf -= tp.partialLength, tg = null)), tg && (td = tp, tb = (tp = tg[tm]).partialLength));
                                    I = te[ta].an / 2 - te[ta].add, U.translate(-I, 0, 0)
                                } else I = te[ta].an / 2 - te[ta].add, U.translate(-I, 0, 0), U.translate(-Z[0] * te[ta].an * .005, -Z[1] * tA * .01, 0);
                                for (F = 0; F < T; F += 1)(E = J[F].a).t.propType && (M = (P = J[F].s).getMult(te[ta].anIndexes[F], K.a[F].s.totalChars), (0 !== tr || 0 !== u.j) && (this._hasMaskedPath ? M.length ? tl += E.t.v * M[0] : tl += E.t.v * M : M.length ? tr += E.t.v * M[0] : tr += E.t.v * M));
                                for (u.strokeWidthAnim && (O = u.sw || 0), u.strokeColorAnim && (G = u.sc ? [u.sc[0], u.sc[1], u.sc[2]] : [0, 0, 0]), u.fillColorAnim && u.fc && (N = [u.fc[0], u.fc[1], u.fc[2]]), F = 0; F < T; F += 1)(E = J[F].a).a.propType && ((M = (P = J[F].s).getMult(te[ta].anIndexes[F], K.a[F].s.totalChars)).length ? U.translate(-E.a.v[0] * M[0], -E.a.v[1] * M[1], E.a.v[2] * M[2]) : U.translate(-E.a.v[0] * M, -E.a.v[1] * M, E.a.v[2] * M));
                                for (F = 0; F < T; F += 1)(E = J[F].a).s.propType && ((M = (P = J[F].s).getMult(te[ta].anIndexes[F], K.a[F].s.totalChars)).length ? U.scale(1 + (E.s.v[0] - 1) * M[0], 1 + (E.s.v[1] - 1) * M[1], 1) : U.scale(1 + (E.s.v[0] - 1) * M, 1 + (E.s.v[1] - 1) * M, 1));
                                for (F = 0; F < T; F += 1) {
                                    if (E = J[F].a, M = (P = J[F].s).getMult(te[ta].anIndexes[F], K.a[F].s.totalChars), E.sk.propType && (M.length ? U.skewFromAxis(-E.sk.v * M[0], E.sa.v * M[1]) : U.skewFromAxis(-E.sk.v * M, E.sa.v * M)), E.r.propType && (M.length ? U.rotateZ(-E.r.v * M[2]) : U.rotateZ(-E.r.v * M)), E.ry.propType && (M.length ? U.rotateY(E.ry.v * M[1]) : U.rotateY(E.ry.v * M)), E.rx.propType && (M.length ? U.rotateX(E.rx.v * M[0]) : U.rotateX(E.rx.v * M)), E.o.propType && (M.length ? R += (E.o.v * M[0] - R) * M[0] : R += (E.o.v * M - R) * M), u.strokeWidthAnim && E.sw.propType && (M.length ? O += E.sw.v * M[0] : O += E.sw.v * M), u.strokeColorAnim && E.sc.propType)
                                        for (H = 0; H < 3; H += 1) M.length ? G[H] += (E.sc.v[H] - G[H]) * M[0] : G[H] += (E.sc.v[H] - G[H]) * M;
                                    if (u.fillColorAnim && u.fc) {
                                        if (E.fc.propType)
                                            for (H = 0; H < 3; H += 1) M.length ? N[H] += (E.fc.v[H] - N[H]) * M[0] : N[H] += (E.fc.v[H] - N[H]) * M;
                                        E.fh.propType && (N = M.length ? addHueToRGB(N, E.fh.v * M[0]) : addHueToRGB(N, E.fh.v * M)), E.fs.propType && (N = M.length ? addSaturationToRGB(N, E.fs.v * M[0]) : addSaturationToRGB(N, E.fs.v * M)), E.fb.propType && (N = M.length ? addBrightnessToRGB(N, E.fb.v * M[0]) : addBrightnessToRGB(N, E.fb.v * M))
                                    }
                                }
                                for (F = 0; F < T; F += 1)(E = J[F].a).p.propType && (M = (P = J[F].s).getMult(te[ta].anIndexes[F], K.a[F].s.totalChars), this._hasMaskedPath ? M.length ? U.translate(0, E.p.v[1] * M[0], -E.p.v[2] * M[1]) : U.translate(0, E.p.v[1] * M, -E.p.v[2] * M) : M.length ? U.translate(E.p.v[0] * M[0], E.p.v[1] * M[1], -E.p.v[2] * M[2]) : U.translate(E.p.v[0] * M, E.p.v[1] * M, -E.p.v[2] * M));
                                if (u.strokeWidthAnim && (W = O < 0 ? 0 : O), u.strokeColorAnim && ($ = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), u.fillColorAnim && u.fc && (Y = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), this._hasMaskedPath) {
                                    if (U.translate(0, -u.ls), U.translate(0, Z[1] * tA * .01 + ts, 0), this._pathData.p.v) {
                                        var tH = 180 * Math.atan((tp.point[1] - td.point[1]) / (tp.point[0] - td.point[0])) / Math.PI;
                                        tp.point[0] < td.point[0] && (tH += 180), U.rotate(-tH * Math.PI / 180)
                                    }
                                    U.translate(V, L, 0), tl -= Z[0] * te[ta].an * .005, te[ta + 1] && tk !== te[ta + 1].ind && (tl += te[ta].an / 2 + .001 * u.tr * u.finalSize)
                                } else {
                                    switch (U.translate(tr, ts, 0), u.ps && U.translate(u.ps[0], u.ps[1] + u.ascent, 0), u.j) {
                                        case 1:
                                            U.translate(te[ta].animatorJustifyOffset + u.justifyOffset + (u.boxWidth - u.lineWidths[te[ta].line]), 0, 0);
                                            break;
                                        case 2:
                                            U.translate(te[ta].animatorJustifyOffset + u.justifyOffset + (u.boxWidth - u.lineWidths[te[ta].line]) / 2, 0, 0)
                                    }
                                    U.translate(0, -u.ls), U.translate(I, 0, 0), U.translate(Z[0] * te[ta].an * .005, Z[1] * tA * .01, 0), tr += te[ta].l + .001 * u.tr * u.finalSize
                                }
                                "html" === Q ? tI = U.toCSS() : "svg" === Q ? tI = U.to2dCSS() : tV = [U.props[0], U.props[1], U.props[2], U.props[3], U.props[4], U.props[5], U.props[6], U.props[7], U.props[8], U.props[9], U.props[10], U.props[11], U.props[12], U.props[13], U.props[14], U.props[15]], X = R
                            }
                            tt <= ta ? (D = new LetterProps(X, W, $, Y, tI, tV), this.renderedLetters.push(D), tt += 1, this.lettersChangedFlag = !0) : (D = this.renderedLetters[ta], this.lettersChangedFlag = D.update(X, W, $, Y, tI, tV) || this.lettersChangedFlag)
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(u, S, E) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(u, S, E), this.textProperty = new TextProperty(this, u.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(u.t, this.renderType, this), this.initTransform(u, S, E), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function(u) {
                    this._mdf = !1, this.prepareRenderableFrame(u), this.prepareProperties(u, this.isInRange)
                }, ITextElement.prototype.createPathShape = function(u, S) {
                    var E, P, F = S.length,
                        T = "";
                    for (E = 0; E < F; E += 1) "sh" === S[E].ty && (T += buildShapeString(P = S[E].ks.k, P.i.length, !0, u));
                    return T
                }, ITextElement.prototype.updateDocumentData = function(u, S) {
                    this.textProperty.updateDocumentData(u, S)
                }, ITextElement.prototype.canResizeFont = function(u) {
                    this.textProperty.canResizeFont(u)
                }, ITextElement.prototype.setMinimumFontSize = function(u) {
                    this.textProperty.setMinimumFontSize(u)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function(u, S, E, P, F) {
                    switch (u.ps && S.translate(u.ps[0], u.ps[1] + u.ascent, 0), S.translate(0, -u.ls, 0), u.j) {
                        case 1:
                            S.translate(u.justifyOffset + (u.boxWidth - u.lineWidths[E]), 0, 0);
                            break;
                        case 2:
                            S.translate(u.justifyOffset + (u.boxWidth - u.lineWidths[E]) / 2, 0, 0)
                    }
                    S.translate(P, F, 0)
                }, ITextElement.prototype.buildColor = function(u) {
                    return "rgb(" + Math.round(255 * u[0]) + "," + Math.round(255 * u[1]) + "," + Math.round(255 * u[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
                    (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                };
                var emptyShapeData = {
                    shapes: []
                };

                function SVGTextLottieElement(u, S, E) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(u, S, E)
                }

                function ISolidElement(u, S, E) {
                    this.initElement(u, S, E)
                }

                function NullElement(u, S, E) {
                    this.initFrame(), this.initBaseData(u, S, E), this.initFrame(), this.initTransform(u, S, E), this.initHierarchy()
                }

                function SVGRendererBase() {}

                function ICompElement() {}

                function SVGCompElement(u, S, E) {
                    this.layers = u.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(u, S, E), this.tm = u.tm ? PropertyFactory.getProp(this, u.tm, 0, S.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function SVGRenderer(u, S) {
                    this.animationItem = u, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var E = "";
                    if (S && S.title) {
                        var P = createNS("title"),
                            F = createElementID();
                        P.setAttribute("id", F), P.textContent = S.title, this.svgElement.appendChild(P), E += F
                    }
                    if (S && S.description) {
                        var T = createNS("desc"),
                            D = createElementID();
                        T.setAttribute("id", D), T.textContent = S.description, this.svgElement.appendChild(T), E += " " + D
                    }
                    E && this.svgElement.setAttribute("aria-labelledby", E);
                    var M = createNS("defs");
                    this.svgElement.appendChild(M);
                    var I = createNS("g");
                    this.svgElement.appendChild(I), this.layerElement = I, this.renderConfig = {
                        preserveAspectRatio: S && S.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: S && S.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: S && S.contentVisibility || "visible",
                        progressiveLoad: S && S.progressiveLoad || !1,
                        hideOnTransparent: !(S && !1 === S.hideOnTransparent),
                        viewBoxOnly: S && S.viewBoxOnly || !1,
                        viewBoxSize: S && S.viewBoxSize || !1,
                        className: S && S.className || "",
                        id: S && S.id || "",
                        focusable: S && S.focusable,
                        filterSize: {
                            width: S && S.filterSize && S.filterSize.width || "100%",
                            height: S && S.filterSize && S.filterSize.height || "100%",
                            x: S && S.filterSize && S.filterSize.x || "0%",
                            y: S && S.filterSize && S.filterSize.y || "0%"
                        },
                        width: S && S.width,
                        height: S && S.height,
                        runExpressions: !S || void 0 === S.runExpressions || S.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: M,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }
                extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextLottieElement.prototype.buildTextContents = function(u) {
                    for (var S = 0, E = u.length, P = [], F = ""; S < E;) "\r" === u[S] || "\x03" === u[S] ? (P.push(F), F = "") : F += u[S], S += 1;
                    return P.push(F), P
                }, SVGTextLottieElement.prototype.buildShapeData = function(u, S) {
                    if (u.shapes && u.shapes.length) {
                        var E = u.shapes[0];
                        if (E.it) {
                            var P = E.it[E.it.length - 1];
                            P.s && (P.s.k[0] = S, P.s.k[1] = S)
                        }
                    }
                    return u
                }, SVGTextLottieElement.prototype.buildNewText = function() {
                    this.addDynamicProperty(this);
                    var u = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(u ? u.l.length : 0), u.fc ? this.layerElement.setAttribute("fill", this.buildColor(u.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), u.sc && (this.layerElement.setAttribute("stroke", this.buildColor(u.sc)), this.layerElement.setAttribute("stroke-width", u.sw)), this.layerElement.setAttribute("font-size", u.finalSize);
                    var S = this.globalData.fontManager.getFontByName(u.f);
                    if (S.fClass) this.layerElement.setAttribute("class", S.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", S.fFamily);
                        var E = u.fWeight,
                            P = u.fStyle;
                        this.layerElement.setAttribute("font-style", P), this.layerElement.setAttribute("font-weight", E)
                    }
                    this.layerElement.setAttribute("aria-label", u.t);
                    var F = u.l || [],
                        T = !!this.globalData.fontManager.chars;
                    W = F.length;
                    var D = this.mHelper,
                        M = "",
                        I = this.data.singleShape,
                        V = 0,
                        L = 0,
                        R = !0,
                        G = .001 * u.tr * u.finalSize;
                    if (!I || T || u.sz) {
                        var O = this.textSpans.length;
                        for (H = 0; H < W; H += 1) {
                            if (this.textSpans[H] || (this.textSpans[H] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !T || !I || 0 === H) {
                                if ($ = O > H ? this.textSpans[H].span : createNS(T ? "g" : "text"), O <= H) {
                                    if ($.setAttribute("stroke-linecap", "butt"), $.setAttribute("stroke-linejoin", "round"), $.setAttribute("stroke-miterlimit", "4"), this.textSpans[H].span = $, T) {
                                        var N = createNS("g");
                                        $.appendChild(N), this.textSpans[H].childSpan = N
                                    }
                                    this.textSpans[H].span = $, this.layerElement.appendChild($)
                                }
                                $.style.display = "inherit"
                            }
                            if (D.reset(), I && (F[H].n && (V = -G, L += u.yOffset + (R ? 1 : 0), R = !1), this.applyTextPropertiesToMatrix(u, D, F[H].line, V, L), V += (F[H].l || 0) + G), T) {
                                if (1 === (Y = this.globalData.fontManager.getCharData(u.finalText[H], S.fStyle, this.globalData.fontManager.getFontByName(u.f).fFamily)).t) X = new SVGCompElement(Y.data, this.globalData, this);
                                else {
                                    var H, W, $, Y, X, Z = emptyShapeData;
                                    Y.data && Y.data.shapes && (Z = this.buildShapeData(Y.data, u.finalSize)), X = new SVGShapeElement(Z, this.globalData, this)
                                }
                                if (this.textSpans[H].glyph) {
                                    var J = this.textSpans[H].glyph;
                                    this.textSpans[H].childSpan.removeChild(J.layerElement), J.destroy()
                                }
                                this.textSpans[H].glyph = X, X._debug = !0, X.prepareFrame(0), X.renderFrame(), this.textSpans[H].childSpan.appendChild(X.layerElement), 1 === Y.t && this.textSpans[H].childSpan.setAttribute("transform", "scale(" + u.finalSize / 100 + "," + u.finalSize / 100 + ")")
                            } else I && $.setAttribute("transform", "translate(" + D.props[12] + "," + D.props[13] + ")"), $.textContent = F[H].val, $.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                        }
                        I && $ && $.setAttribute("d", M)
                    } else {
                        var K = this.textContainer,
                            U = "start";
                        switch (u.j) {
                            case 1:
                                U = "end";
                                break;
                            case 2:
                                U = "middle";
                                break;
                            default:
                                U = "start"
                        }
                        K.setAttribute("text-anchor", U), K.setAttribute("letter-spacing", G);
                        var Q = this.buildTextContents(u.finalText);
                        for (H = 0, W = Q.length, L = u.ps ? u.ps[1] + u.ascent : 0; H < W; H += 1)($ = this.textSpans[H].span || createNS("tspan")).textContent = Q[H], $.setAttribute("x", 0), $.setAttribute("y", L), $.style.display = "inherit", K.appendChild($), this.textSpans[H] || (this.textSpans[H] = {
                            span: null,
                            glyph: null
                        }), this.textSpans[H].span = $, L += u.finalLineHeight;
                        this.layerElement.appendChild(K)
                    }
                    for (; H < this.textSpans.length;) this.textSpans[H].span.style.display = "none", H += 1;
                    this._sizeChanged = !0
                }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var u = this.layerElement.getBBox();
                        this.bbox = {
                            top: u.y,
                            left: u.x,
                            width: u.width,
                            height: u.height
                        }
                    }
                    return this.bbox
                }, SVGTextLottieElement.prototype.getValue = function() {
                    var u, S, E = this.textSpans.length;
                    for (u = 0, this.renderedFrame = this.comp.renderedFrame; u < E; u += 1)(S = this.textSpans[u].glyph) && (S.prepareFrame(this.comp.renderedFrame - this.data.st), S._mdf && (this._mdf = !0))
                }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                    if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        this._sizeChanged = !0;
                        var u, S, E, P, F, T = this.textAnimator.renderedLetters,
                            D = this.textProperty.currentData.l;
                        for (u = 0, S = D.length; u < S; u += 1) !D[u].n && (E = T[u], P = this.textSpans[u].span, (F = this.textSpans[u].glyph) && F.renderFrame(), E._mdf.m && P.setAttribute("transform", E.m), E._mdf.o && P.setAttribute("opacity", E.o), E._mdf.sw && P.setAttribute("stroke-width", E.sw), E._mdf.sc && P.setAttribute("stroke", E.sc), E._mdf.fc && P.setAttribute("fill", E.fc))
                    }
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                    var u = createNS("rect");
                    u.setAttribute("width", this.data.sw), u.setAttribute("height", this.data.sh), u.setAttribute("fill", this.data.sc), this.layerElement.appendChild(u)
                }, NullElement.prototype.prepareFrame = function(u) {
                    this.prepareProperties(u, !0)
                }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                    return null
                }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(u) {
                    return new NullElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.createShape = function(u) {
                    return new SVGShapeElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.createText = function(u) {
                    return new SVGTextLottieElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.createImage = function(u) {
                    return new IImageElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.createSolid = function(u) {
                    return new ISolidElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.configAnimation = function(u) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + u.w + " " + u.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", u.w), this.svgElement.setAttribute("height", u.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var S = this.globalData.defs;
                    this.setupGlobalData(u, S), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = u;
                    var E = createNS("clipPath"),
                        P = createNS("rect");
                    P.setAttribute("width", u.w), P.setAttribute("height", u.h), P.setAttribute("x", 0), P.setAttribute("y", 0);
                    var F = createElementID();
                    E.setAttribute("id", F), E.appendChild(P), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + F + ")"), S.appendChild(E), this.layers = u.layers, this.elements = createSizedArray(u.layers.length)
                }, SVGRendererBase.prototype.destroy = function() {
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var u, S = this.layers ? this.layers.length : 0;
                    for (u = 0; u < S; u += 1) this.elements[u] && this.elements[u].destroy && this.elements[u].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(u) {
                    var S = 0,
                        E = this.layers.length;
                    for (S = 0; S < E; S += 1)
                        if (this.layers[S].ind === u) return S;
                    return -1
                }, SVGRendererBase.prototype.buildItem = function(u) {
                    var S = this.elements;
                    if (!S[u] && 99 !== this.layers[u].ty) {
                        S[u] = !0;
                        var E = this.createItem(this.layers[u]);
                        if (S[u] = E, getExpressionsPlugin() && (0 === this.layers[u].ty && this.globalData.projectInterface.registerComposition(E), E.initExpressions()), this.appendElementInPos(E, u), this.layers[u].tt) {
                            var P = "tp" in this.layers[u] ? this.findIndexByInd(this.layers[u].tp) : u - 1;
                            if (-1 === P) return;
                            if (this.elements[P] && !0 !== this.elements[P]) {
                                var F = S[P].getMatte(this.layers[u].tt);
                                E.setMatte(F)
                            } else this.buildItem(P), this.addPendingElement(E)
                        }
                    }
                }, SVGRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var u = this.pendingElements.pop();
                        if (u.checkParenting(), u.data.tt)
                            for (var S = 0, E = this.elements.length; S < E;) {
                                if (this.elements[S] === u) {
                                    var P = "tp" in u.data ? this.findIndexByInd(u.data.tp) : S - 1,
                                        F = this.elements[P].getMatte(this.layers[S].tt);
                                    u.setMatte(F);
                                    break
                                }
                                S += 1
                            }
                    }
                }, SVGRendererBase.prototype.renderFrame = function(u) {
                    if (this.renderedFrame !== u && !this.destroyed) {
                        null === u ? u = this.renderedFrame : this.renderedFrame = u, this.globalData.frameNum = u, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = u, this.globalData._mdf = !1;
                        var S, E = this.layers.length;
                        for (this.completeLayers || this.checkLayers(u), S = E - 1; S >= 0; S -= 1)(this.completeLayers || this.elements[S]) && this.elements[S].prepareFrame(u - this.layers[S].st);
                        if (this.globalData._mdf)
                            for (S = 0; S < E; S += 1)(this.completeLayers || this.elements[S]) && this.elements[S].renderFrame()
                    }
                }, SVGRendererBase.prototype.appendElementInPos = function(u, S) {
                    var E, P = u.getBaseElement();
                    if (P) {
                        for (var F = 0; F < S;) this.elements[F] && !0 !== this.elements[F] && this.elements[F].getBaseElement() && (E = this.elements[F].getBaseElement()), F += 1;
                        E ? this.layerElement.insertBefore(P, E) : this.layerElement.appendChild(P)
                    }
                }, SVGRendererBase.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, SVGRendererBase.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(u, S, E) {
                    this.initFrame(), this.initBaseData(u, S, E), this.initTransform(u, S, E), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !S.progressiveLoad) && this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function(u) {
                    if (this._mdf = !1, this.prepareRenderableFrame(u), this.prepareProperties(u, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = u / this.data.sr;
                        else {
                            var S, E = this.tm.v;
                            E === this.data.op && (E = this.data.op - 1), this.renderedFrame = E
                        }
                        var P = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), S = P - 1; S >= 0; S -= 1)(this.completeLayers || this.elements[S]) && (this.elements[S].prepareFrame(this.renderedFrame - this.layers[S].st), this.elements[S]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function() {
                    var u, S = this.layers.length;
                    for (u = 0; u < S; u += 1)(this.completeLayers || this.elements[u]) && this.elements[u].renderFrame()
                }, ICompElement.prototype.setElements = function(u) {
                    this.elements = u
                }, ICompElement.prototype.getElements = function() {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function() {
                    var u, S = this.layers.length;
                    for (u = 0; u < S; u += 1) this.elements[u] && this.elements[u].destroy()
                }, ICompElement.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(u) {
                    return new SVGCompElement(u, this.globalData, this)
                }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(u) {
                    return new SVGCompElement(u, this.globalData, this)
                }, ShapeTransformManager.prototype = {
                    addTransformSequence: function(u) {
                        var S, E = u.length,
                            P = "_";
                        for (S = 0; S < E; S += 1) P += u[S].transform.key + "_";
                        var F = this.sequences[P];
                        return F || (F = {
                            transforms: [].concat(u),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[P] = F, this.sequenceList.push(F)), F
                    },
                    processSequence: function(u, S) {
                        for (var E = 0, P = u.transforms.length, F = S; E < P && !S;) {
                            if (u.transforms[E].transform.mProps._mdf) {
                                F = !0;
                                break
                            }
                            E += 1
                        }
                        if (F)
                            for (u.finalTransform.reset(), E = P - 1; E >= 0; E -= 1) u.finalTransform.multiply(u.transforms[E].transform.mProps.v);
                        u._mdf = F
                    },
                    processSequences: function(u) {
                        var S, E = this.sequenceList.length;
                        for (S = 0; S < E; S += 1) this.processSequence(this.sequenceList[S], u)
                    },
                    getNewKey: function() {
                        return this.transform_key_count += 1, "_" + this.transform_key_count
                    }
                };
                var lumaLoader = function() {
                    var u = "__lottie_element_luma_buffer",
                        S = null,
                        E = null,
                        P = null;

                    function createLumaSvgFilter() {
                        var S = createNS("svg"),
                            E = createNS("filter"),
                            P = createNS("feColorMatrix");
                        return E.setAttribute("id", u), P.setAttribute("type", "matrix"), P.setAttribute("color-interpolation-filters", "sRGB"), P.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), E.appendChild(P), S.appendChild(E), S.setAttribute("id", u + "_svg"), featureSupport.svgLumaHidden && (S.style.display = "none"), S
                    }

                    function loadLuma() {
                        S || (P = createLumaSvgFilter(), document.body.appendChild(P), (E = (S = createTag("canvas")).getContext("2d")).filter = "url(#" + u + ")", E.fillStyle = "rgba(0,0,0,0)", E.fillRect(0, 0, 1, 1))
                    }

                    function getLuma(P) {
                        return S || loadLuma(), S.width = P.width, S.height = P.height, E.filter = "url(#" + u + ")", S
                    }
                    return {
                        load: loadLuma,
                        get: getLuma
                    }
                };

                function createCanvas(u, S) {
                    if (featureSupport.offscreenCanvas) return new OffscreenCanvas(u, S);
                    var E = createTag("canvas");
                    return E.width = u, E.height = S, E
                }
                var assetLoader = function() {
                        return {
                            loadLumaCanvas: lumaLoader.load,
                            getLumaCanvas: lumaLoader.get,
                            createCanvas: createCanvas
                        }
                    }(),
                    registeredEffects = {};

                function CVEffects(u) {
                    var S, E, P = u.data.ef ? u.data.ef.length : 0;
                    for (S = 0, this.filters = []; S < P; S += 1) {
                        E = null;
                        var F = u.data.ef[S].ty;
                        registeredEffects[F] && (E = new registeredEffects[F].effect(u.effectsManager.effectElements[S], u)), E && this.filters.push(E)
                    }
                    this.filters.length && u.addRenderableComponent(this)
                }

                function registerEffect(u, S) {
                    registeredEffects[u] = {
                        effect: S
                    }
                }

                function CVMaskElement(u, S) {
                    this.data = u, this.element = S, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var E, P = this.masksProperties.length,
                        F = !1;
                    for (E = 0; E < P; E += 1) "n" !== this.masksProperties[E].mode && (F = !0), this.viewData[E] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[E], 3);
                    this.hasMasks = F, F && this.element.addRenderableComponent(this)
                }

                function CVBaseElement() {}
                CVEffects.prototype.renderFrame = function(u) {
                    var S, E = this.filters.length;
                    for (S = 0; S < E; S += 1) this.filters[S].renderFrame(u)
                }, CVEffects.prototype.getEffects = function(u) {
                    var S, E = this.filters.length,
                        P = [];
                    for (S = 0; S < E; S += 1) this.filters[S].type === u && P.push(this.filters[S]);
                    return P
                }, CVMaskElement.prototype.renderFrame = function() {
                    if (this.hasMasks) {
                        var u = this.element.finalTransform.mat,
                            S = this.element.canvasContext,
                            E = this.masksProperties.length;
                        for (S.beginPath(), P = 0; P < E; P += 1)
                            if ("n" !== this.masksProperties[P].mode) {
                                this.masksProperties[P].inv && (S.moveTo(0, 0), S.lineTo(this.element.globalData.compSize.w, 0), S.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), S.lineTo(0, this.element.globalData.compSize.h), S.lineTo(0, 0)), D = this.viewData[P].v, F = u.applyToPointArray(D.v[0][0], D.v[0][1], 0), S.moveTo(F[0], F[1]);
                                var P, F, T, D, M, I = D._length;
                                for (M = 1; M < I; M += 1) T = u.applyToTriplePoints(D.o[M - 1], D.i[M], D.v[M]), S.bezierCurveTo(T[0], T[1], T[2], T[3], T[4], T[5]);
                                T = u.applyToTriplePoints(D.o[M - 1], D.i[0], D.v[0]), S.bezierCurveTo(T[0], T[1], T[2], T[3], T[4], T[5])
                            }
                        this.element.globalData.renderer.save(!0), S.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                    this.element = null
                };
                var operationsMap = {
                    1: "source-in",
                    2: "source-out",
                    3: "source-in",
                    4: "source-out"
                };

                function CVShapeData(u, S, E, P) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var F, T, D = 4;
                    "rc" === S.ty ? D = 5 : "el" === S.ty ? D = 6 : "sr" === S.ty && (D = 7), this.sh = ShapePropertyFactory.getShapeProp(u, S, D, u);
                    var M = E.length;
                    for (F = 0; F < M; F += 1) E[F].closed || (T = {
                        transforms: P.addTransformSequence(E[F].transforms),
                        trNodes: []
                    }, this.styledShapes.push(T), E[F].elements.push(T))
                }

                function CVShapeElement(u, S, E) {
                    this.shapes = [], this.shapesData = u.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(u, S, E)
                }

                function CVTextElement(u, S, E) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(u, S, E)
                }

                function CVImageElement(u, S, E) {
                    this.assetData = S.getAssetData(u.refId), this.img = S.imageLoader.getAsset(this.assetData), this.initElement(u, S, E)
                }

                function CVSolidElement(u, S, E) {
                    this.initElement(u, S, E)
                }

                function CanvasRendererBase() {}

                function CanvasContext() {
                    this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
                }

                function CVContextData() {
                    this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
                    var u, S = 15;
                    for (u = 0; u < S; u += 1) {
                        var E = new CanvasContext;
                        this.stack[u] = E
                    }
                    this._length = S, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
                }

                function CVCompElement(u, S, E) {
                    this.completeLayers = !1, this.layers = u.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(u, S, E), this.tm = u.tm ? PropertyFactory.getProp(this, u.tm, 0, S.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function CanvasRenderer(u, S) {
                    this.animationItem = u, this.renderConfig = {
                        clearCanvas: !S || void 0 === S.clearCanvas || S.clearCanvas,
                        context: S && S.context || null,
                        progressiveLoad: S && S.progressiveLoad || !1,
                        preserveAspectRatio: S && S.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: S && S.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: S && S.contentVisibility || "visible",
                        className: S && S.className || "",
                        id: S && S.id || "",
                        runExpressions: !S || void 0 === S.runExpressions || S.runExpressions
                    }, this.renderConfig.dpr = S && S.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = S && S.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
                }

                function HBaseElement() {}

                function HSolidElement(u, S, E) {
                    this.initElement(u, S, E)
                }

                function HShapeElement(u, S, E) {
                    this.shapes = [], this.shapesData = u.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(u, S, E), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(u, S, E) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(u, S, E)
                }

                function HCameraElement(u, S, E) {
                    this.initFrame(), this.initBaseData(u, S, E), this.initHierarchy();
                    var P = PropertyFactory.getProp;
                    if (this.pe = P(this, u.pe, 0, 0, this), u.ks.p.s ? (this.px = P(this, u.ks.p.x, 1, 0, this), this.py = P(this, u.ks.p.y, 1, 0, this), this.pz = P(this, u.ks.p.z, 1, 0, this)) : this.p = P(this, u.ks.p, 1, 0, this), u.ks.a && (this.a = P(this, u.ks.a, 1, 0, this)), u.ks.or.k.length && u.ks.or.k[0].to) {
                        var F, T = u.ks.or.k.length;
                        for (F = 0; F < T; F += 1) u.ks.or.k[F].to = null, u.ks.or.k[F].ti = null
                    }
                    this.or = P(this, u.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = P(this, u.ks.rx, 0, degToRads, this), this.ry = P(this, u.ks.ry, 0, degToRads, this), this.rz = P(this, u.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                        mProp: this
                    }
                }

                function HImageElement(u, S, E) {
                    this.assetData = S.getAssetData(u.refId), this.initElement(u, S, E)
                }

                function HybridRendererBase(u, S) {
                    this.animationItem = u, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: S && S.className || "",
                        imagePreserveAspectRatio: S && S.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(S && !1 === S.hideOnTransparent),
                        filterSize: {
                            width: S && S.filterSize && S.filterSize.width || "400%",
                            height: S && S.filterSize && S.filterSize.height || "400%",
                            x: S && S.filterSize && S.filterSize.x || "-100%",
                            y: S && S.filterSize && S.filterSize.y || "-100%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function HCompElement(u, S, E) {
                    this.layers = u.layers, this.supports3d = !u.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(u, S, E), this.tm = u.tm ? PropertyFactory.getProp(this, u.tm, 0, S.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function HybridRenderer(u, S) {
                    this.animationItem = u, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: S && S.className || "",
                        imagePreserveAspectRatio: S && S.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(S && !1 === S.hideOnTransparent),
                        filterSize: {
                            width: S && S.filterSize && S.filterSize.width || "400%",
                            height: S && S.filterSize && S.filterSize.height || "400%",
                            x: S && S.filterSize && S.filterSize.x || "-100%",
                            y: S && S.filterSize && S.filterSize.y || "-100%"
                        },
                        runExpressions: !S || void 0 === S.runExpressions || S.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }
                CVBaseElement.prototype = {
                    createElements: function() {},
                    initRendererElement: function() {},
                    createContainerElements: function() {
                        if (this.data.tt >= 1) {
                            this.buffers = [];
                            var u = this.globalData.canvasContext,
                                S = assetLoader.createCanvas(u.canvas.width, u.canvas.height);
                            this.buffers.push(S);
                            var E = assetLoader.createCanvas(u.canvas.width, u.canvas.height);
                            this.buffers.push(E), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                        }
                        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
                    },
                    createContent: function() {},
                    setBlendMode: function() {
                        var u = this.globalData;
                        if (u.blendMode !== this.data.bm) {
                            u.blendMode = this.data.bm;
                            var S = getBlendMode(this.data.bm);
                            u.canvasContext.globalCompositeOperation = S
                        }
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
                    },
                    hideElement: function() {
                        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                    },
                    showElement: function() {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    },
                    clearCanvas: function(u) {
                        u.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                    },
                    prepareLayer: function() {
                        if (this.data.tt >= 1) {
                            var u = this.buffers[0].getContext("2d");
                            this.clearCanvas(u), u.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                        }
                    },
                    exitLayer: function() {
                        if (this.data.tt >= 1) {
                            var u = this.buffers[1],
                                S = u.getContext("2d");
                            if (this.clearCanvas(S), S.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                var E = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                                E.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(E, 0, 0)
                            }
                            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(u, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                        }
                    },
                    renderFrame: function(u) {
                        if (!this.hidden && !this.data.hd && (1 !== this.data.td || u)) {
                            this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                            var S = 0 === this.data.ty;
                            this.prepareLayer(), this.globalData.renderer.save(S), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(S), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    },
                    destroy: function() {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    },
                    mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function(u, S) {
                    var E = {
                            data: u,
                            type: u.ty,
                            preTransforms: this.transformsManager.addTransformSequence(S),
                            transforms: [],
                            elements: [],
                            closed: !0 === u.hd
                        },
                        P = {};
                    if ("fl" === u.ty || "st" === u.ty ? (P.c = PropertyFactory.getProp(this, u.c, 1, 255, this), P.c.k || (E.co = "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")")) : ("gf" === u.ty || "gs" === u.ty) && (P.s = PropertyFactory.getProp(this, u.s, 1, null, this), P.e = PropertyFactory.getProp(this, u.e, 1, null, this), P.h = PropertyFactory.getProp(this, u.h || {
                            k: 0
                        }, 0, .01, this), P.a = PropertyFactory.getProp(this, u.a || {
                            k: 0
                        }, 0, degToRads, this), P.g = new GradientProperty(this, u.g, this)), P.o = PropertyFactory.getProp(this, u.o, 0, .01, this), "st" === u.ty || "gs" === u.ty) {
                        if (E.lc = lineCapEnum[u.lc || 2], E.lj = lineJoinEnum[u.lj || 2], 1 == u.lj && (E.ml = u.ml), P.w = PropertyFactory.getProp(this, u.w, 0, null, this), P.w.k || (E.wi = P.w.v), u.d) {
                            var F = new DashProperty(this, u.d, "canvas", this);
                            P.d = F, P.d.k || (E.da = P.d.dashArray, E.do = P.d.dashoffset[0])
                        }
                    } else E.r = 2 === u.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(E), P.style = E, P
                }, CVShapeElement.prototype.createGroupElement = function() {
                    return {
                        it: [],
                        prevViewData: []
                    }
                }, CVShapeElement.prototype.createTransformElement = function(u) {
                    return {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, u.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, u, this)
                        }
                    }
                }, CVShapeElement.prototype.createShapeElement = function(u) {
                    var S = new CVShapeData(this, u, this.stylesList, this.transformsManager);
                    return this.shapes.push(S), this.addShapeToModifiers(S), S
                }, CVShapeElement.prototype.reloadShapes = function() {
                    this._isFirstFrame = !0;
                    var u, S = this.itemsData.length;
                    for (u = 0; u < S; u += 1) this.prevViewData[u] = this.itemsData[u];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), S = this.dynamicProperties.length, u = 0; u < S; u += 1) this.dynamicProperties[u].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function(u) {
                    var S, E = this.stylesList.length;
                    for (S = 0; S < E; S += 1) this.stylesList[S].closed || this.stylesList[S].transforms.push(u)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                    var u, S = this.stylesList.length;
                    for (u = 0; u < S; u += 1) this.stylesList[u].closed || this.stylesList[u].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function(u) {
                    var S, E = u.length;
                    for (S = 0; S < E; S += 1) u[S].closed = !0
                }, CVShapeElement.prototype.searchShapes = function(u, S, E, P, F) {
                    var T, D, M, I, V, L, R = u.length - 1,
                        G = [],
                        O = [],
                        N = [].concat(F);
                    for (T = R; T >= 0; T -= 1) {
                        if ((I = this.searchProcessedElement(u[T])) ? S[T] = E[I - 1] : u[T]._shouldRender = P, "fl" === u[T].ty || "st" === u[T].ty || "gf" === u[T].ty || "gs" === u[T].ty) I ? S[T].style.closed = !1 : S[T] = this.createStyleElement(u[T], N), G.push(S[T].style);
                        else if ("gr" === u[T].ty) {
                            if (I)
                                for (D = 0, M = S[T].it.length; D < M; D += 1) S[T].prevViewData[D] = S[T].it[D];
                            else S[T] = this.createGroupElement(u[T]);
                            this.searchShapes(u[T].it, S[T].it, S[T].prevViewData, P, N)
                        } else "tr" === u[T].ty ? (I || (L = this.createTransformElement(u[T]), S[T] = L), N.push(S[T]), this.addTransformToStyleList(S[T])) : "sh" === u[T].ty || "rc" === u[T].ty || "el" === u[T].ty || "sr" === u[T].ty ? I || (S[T] = this.createShapeElement(u[T])) : "tm" === u[T].ty || "rd" === u[T].ty || "pb" === u[T].ty || "zz" === u[T].ty || "op" === u[T].ty ? (I ? (V = S[T]).closed = !1 : ((V = ShapeModifiers.getModifier(u[T].ty)).init(this, u[T]), S[T] = V, this.shapeModifiers.push(V)), O.push(V)) : "rp" === u[T].ty && (I ? (V = S[T]).closed = !0 : (V = ShapeModifiers.getModifier(u[T].ty), S[T] = V, V.init(this, u, T, S), this.shapeModifiers.push(V), P = !1), O.push(V));
                        this.addProcessedElement(u[T], T + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(G), R = O.length, T = 0; T < R; T += 1) O[T].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function() {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function(u, S) {
                    (u._opMdf || S.op._mdf || this._isFirstFrame) && (S.opacity = u.opacity, S.opacity *= S.op.v, S._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function() {
                    var u, S, E, P, F, T, D, M, I, V = this.stylesList.length,
                        L = this.globalData.renderer,
                        R = this.globalData.canvasContext;
                    for (u = 0; u < V; u += 1)
                        if (!(("st" === (M = (I = this.stylesList[u]).type) || "gs" === M) && 0 === I.wi || !I.data._shouldRender || 0 === I.coOp || 0 === this.globalData.currentGlobalAlpha)) {
                            for (L.save(), T = I.elements, "st" === M || "gs" === M ? (L.ctxStrokeStyle("st" === M ? I.co : I.grd), L.ctxLineWidth(I.wi), L.ctxLineCap(I.lc), L.ctxLineJoin(I.lj), L.ctxMiterLimit(I.ml || 0)) : L.ctxFillStyle("fl" === M ? I.co : I.grd), L.ctxOpacity(I.coOp), "st" !== M && "gs" !== M && R.beginPath(), L.ctxTransform(I.preTransforms.finalTransform.props), E = T.length, S = 0; S < E; S += 1) {
                                for (("st" === M || "gs" === M) && (R.beginPath(), I.da && (R.setLineDash(I.da), R.lineDashOffset = I.do)), F = (D = T[S].trNodes).length, P = 0; P < F; P += 1) "m" === D[P].t ? R.moveTo(D[P].p[0], D[P].p[1]) : "c" === D[P].t ? R.bezierCurveTo(D[P].pts[0], D[P].pts[1], D[P].pts[2], D[P].pts[3], D[P].pts[4], D[P].pts[5]) : R.closePath();
                                ("st" === M || "gs" === M) && (L.ctxStroke(), I.da && R.setLineDash(this.dashResetter))
                            }
                            "st" !== M && "gs" !== M && this.globalData.renderer.ctxFill(I.r), L.restore()
                        }
                }, CVShapeElement.prototype.renderShape = function(u, S, E, P) {
                    var F, T, D = S.length - 1;
                    for (T = u, F = D; F >= 0; F -= 1) "tr" === S[F].ty ? (T = E[F].transform, this.renderShapeTransform(u, T)) : "sh" === S[F].ty || "el" === S[F].ty || "rc" === S[F].ty || "sr" === S[F].ty ? this.renderPath(S[F], E[F]) : "fl" === S[F].ty ? this.renderFill(S[F], E[F], T) : "st" === S[F].ty ? this.renderStroke(S[F], E[F], T) : "gf" === S[F].ty || "gs" === S[F].ty ? this.renderGradientFill(S[F], E[F], T) : "gr" === S[F].ty ? this.renderShape(T, S[F].it, E[F].it) : S[F].ty;
                    P && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function(u, S) {
                    if (this._isFirstFrame || S._mdf || u.transforms._mdf) {
                        var E, P, F, T = u.trNodes,
                            D = S.paths,
                            M = D._length;
                        T.length = 0;
                        var I = u.transforms.finalTransform;
                        for (F = 0; F < M; F += 1) {
                            var V = D.shapes[F];
                            if (V && V.v) {
                                for (E = 1, P = V._length; E < P; E += 1) 1 === E && T.push({
                                    t: "m",
                                    p: I.applyToPointArray(V.v[0][0], V.v[0][1], 0)
                                }), T.push({
                                    t: "c",
                                    pts: I.applyToTriplePoints(V.o[E - 1], V.i[E], V.v[E])
                                });
                                1 === P && T.push({
                                    t: "m",
                                    p: I.applyToPointArray(V.v[0][0], V.v[0][1], 0)
                                }), V.c && P && (T.push({
                                    t: "c",
                                    pts: I.applyToTriplePoints(V.o[E - 1], V.i[0], V.v[0])
                                }), T.push({
                                    t: "z"
                                }))
                            }
                        }
                        u.trNodes = T
                    }
                }, CVShapeElement.prototype.renderPath = function(u, S) {
                    if (!0 !== u.hd && u._shouldRender) {
                        var E, P = S.styledShapes.length;
                        for (E = 0; E < P; E += 1) this.renderStyledShape(S.styledShapes[E], S.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function(u, S, E) {
                    var P = S.style;
                    (S.c._mdf || this._isFirstFrame) && (P.co = "rgb(" + bmFloor(S.c.v[0]) + "," + bmFloor(S.c.v[1]) + "," + bmFloor(S.c.v[2]) + ")"), (S.o._mdf || E._opMdf || this._isFirstFrame) && (P.coOp = S.o.v * E.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function(u, S, E) {
                    var P = S.style;
                    if (!P.grd || S.g._mdf || S.s._mdf || S.e._mdf || 1 !== u.t && (S.h._mdf || S.a._mdf)) {
                        var F, T, D = this.globalData.canvasContext,
                            M = S.s.v,
                            I = S.e.v;
                        if (1 === u.t) F = D.createLinearGradient(M[0], M[1], I[0], I[1]);
                        else {
                            var V = Math.sqrt(Math.pow(M[0] - I[0], 2) + Math.pow(M[1] - I[1], 2)),
                                L = Math.atan2(I[1] - M[1], I[0] - M[0]),
                                R = S.h.v;
                            R >= 1 ? R = .99 : R <= -1 && (R = -.99);
                            var G = V * R,
                                O = Math.cos(L + S.a.v) * G + M[0],
                                N = Math.sin(L + S.a.v) * G + M[1];
                            F = D.createRadialGradient(O, N, 0, M[0], M[1], V)
                        }
                        var H = u.g.p,
                            W = S.g.c,
                            $ = 1;
                        for (T = 0; T < H; T += 1) S.g._hasOpacity && S.g._collapsable && ($ = S.g.o[2 * T + 1]), F.addColorStop(W[4 * T] / 100, "rgba(" + W[4 * T + 1] + "," + W[4 * T + 2] + "," + W[4 * T + 3] + "," + $ + ")");
                        P.grd = F
                    }
                    P.coOp = S.o.v * E.opacity
                }, CVShapeElement.prototype.renderStroke = function(u, S, E) {
                    var P = S.style,
                        F = S.d;
                    F && (F._mdf || this._isFirstFrame) && (P.da = F.dashArray, P.do = F.dashoffset[0]), (S.c._mdf || this._isFirstFrame) && (P.co = "rgb(" + bmFloor(S.c.v[0]) + "," + bmFloor(S.c.v[1]) + "," + bmFloor(S.c.v[2]) + ")"), (S.o._mdf || E._opMdf || this._isFirstFrame) && (P.coOp = S.o.v * E.opacity), (S.w._mdf || this._isFirstFrame) && (P.wi = S.w.v)
                }, CVShapeElement.prototype.destroy = function() {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                    var u, S, E, P, F, T, D, M, I, V, L, R, G = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(G.l ? G.l.length : 0);
                    var O = !1;
                    G.fc ? (O = !0, this.values.fill = this.buildColor(G.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = O;
                    var N = !1;
                    G.sc && (N = !0, this.values.stroke = this.buildColor(G.sc), this.values.sWidth = G.sw);
                    var H = this.globalData.fontManager.getFontByName(G.f),
                        W = G.l,
                        $ = this.mHelper;
                    this.stroke = N, this.values.fValue = G.finalSize + "px " + this.globalData.fontManager.getFontByName(G.f).fFamily, S = G.finalText.length;
                    var Y = this.data.singleShape,
                        X = .001 * G.tr * G.finalSize,
                        Z = 0,
                        J = 0,
                        K = !0,
                        U = 0;
                    for (u = 0; u < S; u += 1) {
                        P = (E = this.globalData.fontManager.getCharData(G.finalText[u], H.fStyle, this.globalData.fontManager.getFontByName(G.f).fFamily)) && E.data || {}, $.reset(), Y && W[u].n && (Z = -X, J += G.yOffset + (K ? 1 : 0), K = !1), I = (D = P.shapes ? P.shapes[0].it : []).length, $.scale(G.finalSize / 100, G.finalSize / 100), Y && this.applyTextPropertiesToMatrix(G, $, W[u].line, Z, J), L = createSizedArray(I - 1);
                        var Q = 0;
                        for (M = 0; M < I; M += 1)
                            if ("sh" === D[M].ty) {
                                for (F = 1, T = D[M].ks.k.i.length, V = D[M].ks.k, R = []; F < T; F += 1) 1 === F && R.push($.applyToX(V.v[0][0], V.v[0][1], 0), $.applyToY(V.v[0][0], V.v[0][1], 0)), R.push($.applyToX(V.o[F - 1][0], V.o[F - 1][1], 0), $.applyToY(V.o[F - 1][0], V.o[F - 1][1], 0), $.applyToX(V.i[F][0], V.i[F][1], 0), $.applyToY(V.i[F][0], V.i[F][1], 0), $.applyToX(V.v[F][0], V.v[F][1], 0), $.applyToY(V.v[F][0], V.v[F][1], 0));
                                R.push($.applyToX(V.o[F - 1][0], V.o[F - 1][1], 0), $.applyToY(V.o[F - 1][0], V.o[F - 1][1], 0), $.applyToX(V.i[0][0], V.i[0][1], 0), $.applyToY(V.i[0][0], V.i[0][1], 0), $.applyToX(V.v[0][0], V.v[0][1], 0), $.applyToY(V.v[0][0], V.v[0][1], 0)), L[Q] = R, Q += 1
                            }
                        Y && (Z += W[u].l + X), this.textSpans[U] ? this.textSpans[U].elem = L : this.textSpans[U] = {
                            elem: L
                        }, U += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function() {
                    this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var u, S, E, P, F, T, D, M, I, V = this.textAnimator.renderedLetters,
                        L = this.textProperty.currentData.l;
                    S = L.length;
                    var R = null,
                        G = null,
                        O = null,
                        N = this.globalData.renderer;
                    for (u = 0; u < S; u += 1)
                        if (!L[u].n) {
                            if ((D = V[u]) && (N.save(), N.ctxTransform(D.p), N.ctxOpacity(D.o)), this.fill) {
                                for (D && D.fc ? R !== D.fc && (N.ctxFillStyle(D.fc), R = D.fc) : R !== this.values.fill && (R = this.values.fill, N.ctxFillStyle(this.values.fill)), P = (M = this.textSpans[u].elem).length, this.globalData.canvasContext.beginPath(), E = 0; E < P; E += 1)
                                    for (T = (I = M[E]).length, this.globalData.canvasContext.moveTo(I[0], I[1]), F = 2; F < T; F += 6) this.globalData.canvasContext.bezierCurveTo(I[F], I[F + 1], I[F + 2], I[F + 3], I[F + 4], I[F + 5]);
                                this.globalData.canvasContext.closePath(), N.ctxFill()
                            }
                            if (this.stroke) {
                                for (D && D.sw ? O !== D.sw && (O = D.sw, N.ctxLineWidth(D.sw)) : O !== this.values.sWidth && (O = this.values.sWidth, N.ctxLineWidth(this.values.sWidth)), D && D.sc ? G !== D.sc && (G = D.sc, N.ctxStrokeStyle(D.sc)) : G !== this.values.stroke && (G = this.values.stroke, N.ctxStrokeStyle(this.values.stroke)), P = (M = this.textSpans[u].elem).length, this.globalData.canvasContext.beginPath(), E = 0; E < P; E += 1)
                                    for (T = (I = M[E]).length, this.globalData.canvasContext.moveTo(I[0], I[1]), F = 2; F < T; F += 6) this.globalData.canvasContext.bezierCurveTo(I[F], I[F + 1], I[F + 2], I[F + 3], I[F + 4], I[F + 5]);
                                this.globalData.canvasContext.closePath(), N.ctxStroke()
                            }
                            D && this.globalData.renderer.restore()
                        }
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var u, S, E = createTag("canvas");
                        E.width = this.assetData.w, E.height = this.assetData.h;
                        var P = E.getContext("2d"),
                            F = this.img.width,
                            T = this.img.height,
                            D = F / T,
                            M = this.assetData.w / this.assetData.h,
                            I = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        D > M && "xMidYMid slice" === I || D < M && "xMidYMid slice" !== I ? u = (S = T) * M : S = (u = F) / M, P.drawImage(this.img, (F - u) / 2, (T - S) / 2, u, S, 0, 0, this.assetData.w, this.assetData.h), this.img = E
                    }
                }, CVImageElement.prototype.renderInnerContent = function() {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function() {
                    this.img = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                    this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(u) {
                    return new CVShapeElement(u, this.globalData, this)
                }, CanvasRendererBase.prototype.createText = function(u) {
                    return new CVTextElement(u, this.globalData, this)
                }, CanvasRendererBase.prototype.createImage = function(u) {
                    return new CVImageElement(u, this.globalData, this)
                }, CanvasRendererBase.prototype.createSolid = function(u) {
                    return new CVSolidElement(u, this.globalData, this)
                }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(u) {
                    (1 !== u[0] || 0 !== u[1] || 0 !== u[4] || 1 !== u[5] || 0 !== u[12] || 0 !== u[13]) && this.canvasContext.transform(u[0], u[1], u[4], u[5], u[12], u[13])
                }, CanvasRendererBase.prototype.ctxOpacity = function(u) {
                    this.canvasContext.globalAlpha *= u < 0 ? 0 : u
                }, CanvasRendererBase.prototype.ctxFillStyle = function(u) {
                    this.canvasContext.fillStyle = u
                }, CanvasRendererBase.prototype.ctxStrokeStyle = function(u) {
                    this.canvasContext.strokeStyle = u
                }, CanvasRendererBase.prototype.ctxLineWidth = function(u) {
                    this.canvasContext.lineWidth = u
                }, CanvasRendererBase.prototype.ctxLineCap = function(u) {
                    this.canvasContext.lineCap = u
                }, CanvasRendererBase.prototype.ctxLineJoin = function(u) {
                    this.canvasContext.lineJoin = u
                }, CanvasRendererBase.prototype.ctxMiterLimit = function(u) {
                    this.canvasContext.miterLimit = u
                }, CanvasRendererBase.prototype.ctxFill = function(u) {
                    this.canvasContext.fill(u)
                }, CanvasRendererBase.prototype.ctxFillRect = function(u, S, E, P) {
                    this.canvasContext.fillRect(u, S, E, P)
                }, CanvasRendererBase.prototype.ctxStroke = function() {
                    this.canvasContext.stroke()
                }, CanvasRendererBase.prototype.reset = function() {
                    if (!this.renderConfig.clearCanvas) {
                        this.canvasContext.restore();
                        return
                    }
                    this.contextData.reset()
                }, CanvasRendererBase.prototype.save = function() {
                    this.canvasContext.save()
                }, CanvasRendererBase.prototype.restore = function(u) {
                    if (!this.renderConfig.clearCanvas) {
                        this.canvasContext.restore();
                        return
                    }
                    u && (this.globalData.blendMode = "source-over"), this.contextData.restore(u)
                }, CanvasRendererBase.prototype.configAnimation = function(u) {
                    if (this.animationItem.wrapper) {
                        this.animationItem.container = createTag("canvas");
                        var S = this.animationItem.container.style;
                        S.width = "100%", S.height = "100%";
                        var E = "0px 0px 0px";
                        S.transformOrigin = E, S.mozTransformOrigin = E, S.webkitTransformOrigin = E, S["-webkit-transform"] = E, S.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                    } else this.canvasContext = this.renderConfig.context;
                    this.contextData.setContext(this.canvasContext), this.data = u, this.layers = u.layers, this.transformCanvas = {
                        w: u.w,
                        h: u.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(u, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(u.layers.length), this.updateContainerSize()
                }, CanvasRendererBase.prototype.updateContainerSize = function(u, S) {
                    if (this.reset(), u ? (E = u, P = S, this.canvasContext.canvas.width = E, this.canvasContext.canvas.height = P) : (this.animationItem.wrapper && this.animationItem.container ? (E = this.animationItem.wrapper.offsetWidth, P = this.animationItem.wrapper.offsetHeight) : (E = this.canvasContext.canvas.width, P = this.canvasContext.canvas.height), this.canvasContext.canvas.width = E * this.renderConfig.dpr, this.canvasContext.canvas.height = P * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var E, P, F, T, D = this.renderConfig.preserveAspectRatio.split(" "),
                            M = D[1] || "meet",
                            I = D[0] || "xMidYMid",
                            V = I.substr(0, 4),
                            L = I.substr(4);
                        F = E / P, (T = this.transformCanvas.w / this.transformCanvas.h) > F && "meet" === M || T < F && "slice" === M ? (this.transformCanvas.sx = E / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = E / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = P / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = P / (this.transformCanvas.h / this.renderConfig.dpr)), "xMid" === V && (T < F && "meet" === M || T > F && "slice" === M) ? this.transformCanvas.tx = (E - this.transformCanvas.w * (P / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === V && (T < F && "meet" === M || T > F && "slice" === M) ? this.transformCanvas.tx = (E - this.transformCanvas.w * (P / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, "YMid" === L && (T > F && "meet" === M || T < F && "slice" === M) ? this.transformCanvas.ty = (P - this.transformCanvas.h * (E / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === L && (T > F && "meet" === M || T < F && "slice" === M) ? this.transformCanvas.ty = (P - this.transformCanvas.h * (E / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
                    } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = E / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = P / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRendererBase.prototype.destroy = function() {
                    var u;
                    for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), u = (this.layers ? this.layers.length : 0) - 1; u >= 0; u -= 1) this.elements[u] && this.elements[u].destroy && this.elements[u].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRendererBase.prototype.renderFrame = function(u, S) {
                    if ((this.renderedFrame !== u || !0 !== this.renderConfig.clearCanvas || S) && !this.destroyed && -1 !== u) {
                        this.renderedFrame = u, this.globalData.frameNum = u - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || S, this.globalData.projectInterface.currentFrame = u;
                        var E, P = this.layers.length;
                        for (this.completeLayers || this.checkLayers(u), E = P - 1; E >= 0; E -= 1)(this.completeLayers || this.elements[E]) && this.elements[E].prepareFrame(u - this.layers[E].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), E = P - 1; E >= 0; E -= 1)(this.completeLayers || this.elements[E]) && this.elements[E].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRendererBase.prototype.buildItem = function(u) {
                    var S = this.elements;
                    if (!S[u] && 99 !== this.layers[u].ty) {
                        var E = this.createItem(this.layers[u], this, this.globalData);
                        S[u] = E, E.initExpressions()
                    }
                }, CanvasRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, CanvasRendererBase.prototype.hide = function() {
                    this.animationItem.container.style.display = "none"
                }, CanvasRendererBase.prototype.show = function() {
                    this.animationItem.container.style.display = "block"
                }, CVContextData.prototype.duplicate = function() {
                    var u = 2 * this._length,
                        S = 0;
                    for (S = this._length; S < u; S += 1) this.stack[S] = new CanvasContext;
                    this._length = u
                }, CVContextData.prototype.reset = function() {
                    this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
                }, CVContextData.prototype.restore = function(u) {
                    this.cArrPos -= 1;
                    var S, E = this.stack[this.cArrPos],
                        P = E.transform,
                        F = this.cTr.props;
                    for (S = 0; S < 16; S += 1) F[S] = P[S];
                    if (u) {
                        this.nativeContext.restore();
                        var T = this.stack[this.cArrPos + 1];
                        this.appliedFillStyle = T.fillStyle, this.appliedStrokeStyle = T.strokeStyle, this.appliedLineWidth = T.lineWidth, this.appliedLineCap = T.lineCap, this.appliedLineJoin = T.lineJoin, this.appliedMiterLimit = T.miterLimit
                    }
                    this.nativeContext.setTransform(P[0], P[1], P[4], P[5], P[12], P[13]), (u || -1 !== E.opacity && this.currentOpacity !== E.opacity) && (this.nativeContext.globalAlpha = E.opacity, this.currentOpacity = E.opacity), this.currentFillStyle = E.fillStyle, this.currentStrokeStyle = E.strokeStyle, this.currentLineWidth = E.lineWidth, this.currentLineCap = E.lineCap, this.currentLineJoin = E.lineJoin, this.currentMiterLimit = E.miterLimit
                }, CVContextData.prototype.save = function(u) {
                    u && this.nativeContext.save();
                    var S, E = this.cTr.props;
                    this._length <= this.cArrPos && this.duplicate();
                    var P = this.stack[this.cArrPos];
                    for (S = 0; S < 16; S += 1) P.transform[S] = E[S];
                    this.cArrPos += 1;
                    var F = this.stack[this.cArrPos];
                    F.opacity = P.opacity, F.fillStyle = P.fillStyle, F.strokeStyle = P.strokeStyle, F.lineWidth = P.lineWidth, F.lineCap = P.lineCap, F.lineJoin = P.lineJoin, F.miterLimit = P.miterLimit
                }, CVContextData.prototype.setOpacity = function(u) {
                    this.stack[this.cArrPos].opacity = u
                }, CVContextData.prototype.setContext = function(u) {
                    this.nativeContext = u
                }, CVContextData.prototype.fillStyle = function(u) {
                    this.stack[this.cArrPos].fillStyle !== u && (this.currentFillStyle = u, this.stack[this.cArrPos].fillStyle = u)
                }, CVContextData.prototype.strokeStyle = function(u) {
                    this.stack[this.cArrPos].strokeStyle !== u && (this.currentStrokeStyle = u, this.stack[this.cArrPos].strokeStyle = u)
                }, CVContextData.prototype.lineWidth = function(u) {
                    this.stack[this.cArrPos].lineWidth !== u && (this.currentLineWidth = u, this.stack[this.cArrPos].lineWidth = u)
                }, CVContextData.prototype.lineCap = function(u) {
                    this.stack[this.cArrPos].lineCap !== u && (this.currentLineCap = u, this.stack[this.cArrPos].lineCap = u)
                }, CVContextData.prototype.lineJoin = function(u) {
                    this.stack[this.cArrPos].lineJoin !== u && (this.currentLineJoin = u, this.stack[this.cArrPos].lineJoin = u)
                }, CVContextData.prototype.miterLimit = function(u) {
                    this.stack[this.cArrPos].miterLimit !== u && (this.currentMiterLimit = u, this.stack[this.cArrPos].miterLimit = u)
                }, CVContextData.prototype.transform = function(u) {
                    this.transformMat.cloneFromProps(u);
                    var S = this.cTr;
                    this.transformMat.multiply(S), S.cloneFromProps(this.transformMat.props);
                    var E = S.props;
                    this.nativeContext.setTransform(E[0], E[1], E[4], E[5], E[12], E[13])
                }, CVContextData.prototype.opacity = function(u) {
                    var S = this.stack[this.cArrPos].opacity;
                    S *= u < 0 ? 0 : u, this.stack[this.cArrPos].opacity !== S && (this.currentOpacity !== u && (this.nativeContext.globalAlpha = u, this.currentOpacity = u), this.stack[this.cArrPos].opacity = S)
                }, CVContextData.prototype.fill = function(u) {
                    this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(u)
                }, CVContextData.prototype.fillRect = function(u, S, E, P) {
                    this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(u, S, E, P)
                }, CVContextData.prototype.stroke = function() {
                    this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
                }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                    var u, S = this.canvasContext;
                    for (S.beginPath(), S.moveTo(0, 0), S.lineTo(this.data.w, 0), S.lineTo(this.data.w, this.data.h), S.lineTo(0, this.data.h), S.lineTo(0, 0), S.clip(), u = this.layers.length - 1; u >= 0; u -= 1)(this.completeLayers || this.elements[u]) && this.elements[u].renderFrame()
                }, CVCompElement.prototype.destroy = function() {
                    var u;
                    for (u = this.layers.length - 1; u >= 0; u -= 1) this.elements[u] && this.elements[u].destroy();
                    this.layers = null, this.elements = null
                }, CVCompElement.prototype.createComp = function(u) {
                    return new CVCompElement(u, this.globalData, this)
                }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(u) {
                    return new CVCompElement(u, this.globalData, this)
                }, HBaseElement.prototype = {
                    checkBlendMode: function() {},
                    initRendererElement: function() {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    },
                    createContainerElements: function() {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        var u = this.transformedElement ? this.transformedElement.style : {};
                        if (this.finalTransform._matMdf) {
                            var S = this.finalTransform.mat.toCSS();
                            u.transform = S, u.webkitTransform = S
                        }
                        this.finalTransform._opMdf && (u.opacity = this.finalTransform.mProp.o.v)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    destroy: function() {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    },
                    addEffects: function() {},
                    setMatte: function() {}
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                    var u;
                    this.data.hasMask ? ((u = createNS("rect")).setAttribute("width", this.data.sw), u.setAttribute("height", this.data.sh), u.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((u = createTag("div")).style.width = this.data.sw + "px", u.style.height = this.data.sh + "px", u.style.backgroundColor = this.data.sc), this.layerElement.appendChild(u)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                    var u;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), u = this.svgElement;
                    else {
                        u = createNS("svg");
                        var S = this.comp.data ? this.comp.data : this.globalData.compSize;
                        u.setAttribute("width", S.w), u.setAttribute("height", S.h), u.appendChild(this.shapesContainer), this.layerElement.appendChild(u)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = u
                }, HShapeElement.prototype.getTransformedPoint = function(u, S) {
                    var E, P = u.length;
                    for (E = 0; E < P; E += 1) S = u[E].mProps.v.applyToPointArray(S[0], S[1], 0);
                    return S
                }, HShapeElement.prototype.calculateShapeBoundingBox = function(u, S) {
                    var E, P, F, T, D, M = u.sh.v,
                        I = u.transformers,
                        V = M._length;
                    if (!(V <= 1)) {
                        for (E = 0; E < V - 1; E += 1) P = this.getTransformedPoint(I, M.v[E]), F = this.getTransformedPoint(I, M.o[E]), T = this.getTransformedPoint(I, M.i[E + 1]), D = this.getTransformedPoint(I, M.v[E + 1]), this.checkBounds(P, F, T, D, S);
                        M.c && (P = this.getTransformedPoint(I, M.v[E]), F = this.getTransformedPoint(I, M.o[E]), T = this.getTransformedPoint(I, M.i[0]), D = this.getTransformedPoint(I, M.v[0]), this.checkBounds(P, F, T, D, S))
                    }
                }, HShapeElement.prototype.checkBounds = function(u, S, E, P, F) {
                    this.getBoundsOfCurve(u, S, E, P);
                    var T = this.shapeBoundingBox;
                    F.x = bmMin(T.left, F.x), F.xMax = bmMax(T.right, F.xMax), F.y = bmMin(T.top, F.y), F.yMax = bmMax(T.bottom, F.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function(u, S, E, P) {
                    for (var F, T, D, M, I, V, L, R = [
                            [u[0], P[0]],
                            [u[1], P[1]]
                        ], G = 0; G < 2; ++G) T = 6 * u[G] - 12 * S[G] + 6 * E[G], F = -3 * u[G] + 9 * S[G] - 9 * E[G] + 3 * P[G], D = 3 * S[G] - 3 * u[G], T |= 0, D |= 0, 0 == (F |= 0) && 0 === T || (0 === F ? (M = -D / T) > 0 && M < 1 && R[G].push(this.calculateF(M, u, S, E, P, G)) : (I = T * T - 4 * D * F) >= 0 && ((V = (-T + bmSqrt(I)) / (2 * F)) > 0 && V < 1 && R[G].push(this.calculateF(V, u, S, E, P, G)), (L = (-T - bmSqrt(I)) / (2 * F)) > 0 && L < 1 && R[G].push(this.calculateF(L, u, S, E, P, G))));
                    this.shapeBoundingBox.left = bmMin.apply(null, R[0]), this.shapeBoundingBox.top = bmMin.apply(null, R[1]), this.shapeBoundingBox.right = bmMax.apply(null, R[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, R[1])
                }, HShapeElement.prototype.calculateF = function(u, S, E, P, F, T) {
                    return bmPow(1 - u, 3) * S[T] + 3 * bmPow(1 - u, 2) * u * E[T] + 3 * (1 - u) * bmPow(u, 2) * P[T] + bmPow(u, 3) * F[T]
                }, HShapeElement.prototype.calculateBoundingBox = function(u, S) {
                    var E, P = u.length;
                    for (E = 0; E < P; E += 1) u[E] && u[E].sh ? this.calculateShapeBoundingBox(u[E], S) : u[E] && u[E].it ? this.calculateBoundingBox(u[E].it, S) : u[E] && u[E].style && u[E].w && this.expandStrokeBoundingBox(u[E].w, S)
                }, HShapeElement.prototype.expandStrokeBoundingBox = function(u, S) {
                    var E = 0;
                    if (u.keyframes) {
                        for (var P = 0; P < u.keyframes.length; P += 1) {
                            var F = u.keyframes[P].s;
                            F > E && (E = F)
                        }
                        E *= u.mult
                    } else E = u.v * u.mult;
                    S.x -= E, S.xMax += E, S.y -= E, S.yMax += E
                }, HShapeElement.prototype.currentBoxContains = function(u) {
                    return this.currentBBox.x <= u.x && this.currentBBox.y <= u.y && this.currentBBox.width + this.currentBBox.x >= u.x + u.width && this.currentBBox.height + this.currentBBox.y >= u.y + u.height
                }, HShapeElement.prototype.renderInnerContent = function() {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var u = this.tempBoundingBox,
                            S = 999999;
                        if (u.x = S, u.xMax = -S, u.y = S, u.yMax = -S, this.calculateBoundingBox(this.itemsData, u), u.width = u.xMax < u.x ? 0 : u.xMax - u.x, u.height = u.yMax < u.y ? 0 : u.yMax - u.y, !this.currentBoxContains(u)) {
                            var E = !1;
                            if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.shapeCont.setAttribute("width", u.width), E = !0), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.shapeCont.setAttribute("height", u.height), E = !0), E || this.currentBBox.x !== u.x || this.currentBBox.y !== u.y) {
                                this.currentBBox.w = u.width, this.currentBBox.h = u.height, this.currentBBox.x = u.x, this.currentBBox.y = u.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                var P = this.shapeCont.style,
                                    F = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                P.transform = F, P.webkitTransform = F
                            }
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var u = createNS("g");
                        this.maskedElement.appendChild(u), this.innerElem = u
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function() {
                    var u = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(u.l ? u.l.length : 0);
                    var S = this.innerElem.style,
                        E = u.fc ? this.buildColor(u.fc) : "rgba(0,0,0,0)";
                    S.fill = E, S.color = E, u.sc && (S.stroke = this.buildColor(u.sc), S.strokeWidth = u.sw + "px");
                    var P = this.globalData.fontManager.getFontByName(u.f);
                    if (!this.globalData.fontManager.chars) {
                        if (S.fontSize = u.finalSize + "px", S.lineHeight = u.finalSize + "px", P.fClass) this.innerElem.className = P.fClass;
                        else {
                            S.fontFamily = P.fFamily;
                            var F = u.fWeight,
                                T = u.fStyle;
                            S.fontStyle = T, S.fontWeight = F
                        }
                    }
                    var D = u.l;
                    R = D.length;
                    var M = this.mHelper,
                        I = "",
                        V = 0;
                    for (L = 0; L < R; L += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[V] ? G = this.textPaths[V] : ((G = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), G.setAttribute("stroke-linejoin", lineJoinEnum[2]), G.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[V] ? N = (O = this.textSpans[V]).children[0] : ((O = createTag("div")).style.lineHeight = 0, (N = createNS("svg")).appendChild(G), styleDiv(O)))) : this.isMasked ? G = this.textPaths[V] ? this.textPaths[V] : createNS("text") : this.textSpans[V] ? (O = this.textSpans[V], G = this.textPaths[V]) : (styleDiv(O = createTag("span")), styleDiv(G = createTag("span")), O.appendChild(G)), this.globalData.fontManager.chars) {
                            var L, R, G, O, N, H, W, $ = this.globalData.fontManager.getCharData(u.finalText[L], P.fStyle, this.globalData.fontManager.getFontByName(u.f).fFamily);
                            if (W = $ ? $.data : null, M.reset(), W && W.shapes && W.shapes.length && (H = W.shapes[0].it, M.scale(u.finalSize / 100, u.finalSize / 100), I = this.createPathShape(M, H), G.setAttribute("d", I)), this.isMasked) this.innerElem.appendChild(G);
                            else {
                                if (this.innerElem.appendChild(O), W && W.shapes) {
                                    document.body.appendChild(N);
                                    var Y = N.getBBox();
                                    N.setAttribute("width", Y.width + 2), N.setAttribute("height", Y.height + 2), N.setAttribute("viewBox", Y.x - 1 + " " + (Y.y - 1) + " " + (Y.width + 2) + " " + (Y.height + 2));
                                    var X = N.style,
                                        Z = "translate(" + (Y.x - 1) + "px," + (Y.y - 1) + "px)";
                                    X.transform = Z, X.webkitTransform = Z, D[L].yOffset = Y.y - 1
                                } else N.setAttribute("width", 1), N.setAttribute("height", 1);
                                O.appendChild(N)
                            }
                        } else if (G.textContent = D[L].val, G.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(G);
                        else {
                            this.innerElem.appendChild(O);
                            var J = G.style,
                                K = "translate3d(0," + -u.finalSize / 1.2 + "px,0)";
                            J.transform = K, J.webkitTransform = K
                        }
                        this.isMasked ? this.textSpans[V] = G : this.textSpans[V] = O, this.textSpans[V].style.display = "block", this.textPaths[V] = G, V += 1
                    }
                    for (; V < this.textSpans.length;) this.textSpans[V].style.display = "none", V += 1
                }, HTextElement.prototype.renderInnerContent = function() {
                    if (this.validateText(), this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        if (this.isMasked && this.finalTransform._matMdf) {
                            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), u = this.svgElement.style;
                            var u, S, E, P, F, T, D = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                            u.transform = D, u.webkitTransform = D
                        }
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var M = 0,
                            I = this.textAnimator.renderedLetters,
                            V = this.textProperty.currentData.l;
                        for (S = 0, E = V.length; S < E; S += 1) V[S].n ? M += 1 : (F = this.textSpans[S], T = this.textPaths[S], P = I[M], M += 1, P._mdf.m && (this.isMasked ? F.setAttribute("transform", P.m) : (F.style.webkitTransform = P.m, F.style.transform = P.m)), F.style.opacity = P.o, P.sw && P._mdf.sw && T.setAttribute("stroke-width", P.sw), P.sc && P._mdf.sc && T.setAttribute("stroke", P.sc), P.fc && P._mdf.fc && (T.setAttribute("fill", P.fc), T.style.color = P.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var L = this.innerElem.getBBox();
                            this.currentBBox.w !== L.width && (this.currentBBox.w = L.width, this.svgElement.setAttribute("width", L.width)), this.currentBBox.h !== L.height && (this.currentBBox.h = L.height, this.svgElement.setAttribute("height", L.height));
                            var R = 1;
                            if (this.currentBBox.w !== L.width + 2 * R || this.currentBBox.h !== L.height + 2 * R || this.currentBBox.x !== L.x - R || this.currentBBox.y !== L.y - R) {
                                this.currentBBox.w = L.width + 2 * R, this.currentBBox.h = L.height + 2 * R, this.currentBBox.x = L.x - R, this.currentBBox.y = L.y - R, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), u = this.svgElement.style;
                                var G = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                u.transform = G, u.webkitTransform = G
                            }
                        }
                    }
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                    var u, S, E, P, F = this.comp.threeDElements.length;
                    for (u = 0; u < F; u += 1)
                        if ("3d" === (S = this.comp.threeDElements[u]).type) {
                            E = S.perspectiveElem.style, P = S.container.style;
                            var T = this.pe.v + "px",
                                D = "0px 0px 0px",
                                M = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            E.perspective = T, E.webkitPerspective = T, P.transformOrigin = D, P.mozTransformOrigin = D, P.webkitTransformOrigin = D, E.transform = M, E.webkitTransform = M
                        }
                }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                    var u = this._isFirstFrame;
                    if (this.hierarchy)
                        for (E = 0, P = this.hierarchy.length; E < P; E += 1) u = this.hierarchy[E].finalTransform.mProp._mdf || u;
                    if (u || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy)
                            for (E = P = this.hierarchy.length - 1; E >= 0; E -= 1) {
                                var S = this.hierarchy[E].finalTransform.mProp;
                                this.mat.translate(-S.p.v[0], -S.p.v[1], S.p.v[2]), this.mat.rotateX(-S.or.v[0]).rotateY(-S.or.v[1]).rotateZ(S.or.v[2]), this.mat.rotateX(-S.rx.v).rotateY(-S.ry.v).rotateZ(S.rz.v), this.mat.scale(1 / S.s.v[0], 1 / S.s.v[1], 1 / S.s.v[2]), this.mat.translate(S.a.v[0], S.a.v[1], S.a.v[2])
                            }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var E, P, F, T = Math.sqrt(Math.pow((F = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]])[0], 2) + Math.pow(F[1], 2) + Math.pow(F[2], 2)),
                                D = [F[0] / T, F[1] / T, F[2] / T],
                                M = Math.sqrt(D[2] * D[2] + D[0] * D[0]),
                                I = Math.atan2(D[1], M),
                                V = Math.atan2(D[0], -D[2]);
                            this.mat.rotateY(V).rotateX(-I)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var L = !this._prevMat.equals(this.mat);
                        if ((L || this.pe._mdf) && this.comp.threeDElements) {
                            for (E = 0, P = this.comp.threeDElements.length; E < P; E += 1)
                                if ("3d" === (R = this.comp.threeDElements[E]).type) {
                                    if (L) {
                                        var R, G, O, N = this.mat.toCSS();
                                        (O = R.container.style).transform = N, O.webkitTransform = N
                                    }
                                    this.pe._mdf && ((G = R.perspectiveElem.style).perspective = this.pe.v + "px", G.webkitPerspective = this.pe.v + "px")
                                }
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function(u) {
                    this.prepareProperties(u, !0)
                }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                    return null
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                    var u = this.globalData.getAssetsPath(this.assetData),
                        S = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(S), S.crossOrigin = "anonymous", S.src = u, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, HybridRendererBase.prototype.appendElementInPos = function(u, S) {
                    var E = u.getBaseElement();
                    if (E) {
                        var P = this.layers[S];
                        if (P.ddd && this.supports3d) this.addTo3dContainer(E, S);
                        else if (this.threeDElements) this.addTo3dContainer(E, S);
                        else {
                            for (var F, T, D = 0; D < S;) this.elements[D] && !0 !== this.elements[D] && this.elements[D].getBaseElement && (T = this.elements[D], F = (this.layers[D].ddd ? this.getThreeDContainerByPos(D) : T.getBaseElement()) || F), D += 1;
                            F ? P.ddd && this.supports3d || this.layerElement.insertBefore(E, F) : P.ddd && this.supports3d || this.layerElement.appendChild(E)
                        }
                    }
                }, HybridRendererBase.prototype.createShape = function(u) {
                    return this.supports3d ? new HShapeElement(u, this.globalData, this) : new SVGShapeElement(u, this.globalData, this)
                }, HybridRendererBase.prototype.createText = function(u) {
                    return this.supports3d ? new HTextElement(u, this.globalData, this) : new SVGTextLottieElement(u, this.globalData, this)
                }, HybridRendererBase.prototype.createCamera = function(u) {
                    return this.camera = new HCameraElement(u, this.globalData, this), this.camera
                }, HybridRendererBase.prototype.createImage = function(u) {
                    return this.supports3d ? new HImageElement(u, this.globalData, this) : new IImageElement(u, this.globalData, this)
                }, HybridRendererBase.prototype.createSolid = function(u) {
                    return this.supports3d ? new HSolidElement(u, this.globalData, this) : new ISolidElement(u, this.globalData, this)
                }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(u) {
                    for (var S = 0, E = this.threeDElements.length; S < E;) {
                        if (this.threeDElements[S].startPos <= u && this.threeDElements[S].endPos >= u) return this.threeDElements[S].perspectiveElem;
                        S += 1
                    }
                    return null
                }, HybridRendererBase.prototype.createThreeDContainer = function(u, S) {
                    var E, P, F = createTag("div");
                    styleDiv(F);
                    var T = createTag("div");
                    if (styleDiv(T), "3d" === S) {
                        (E = F.style).width = this.globalData.compSize.w + "px", E.height = this.globalData.compSize.h + "px";
                        var D = "50% 50%";
                        E.webkitTransformOrigin = D, E.mozTransformOrigin = D, E.transformOrigin = D;
                        var M = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        (P = T.style).transform = M, P.webkitTransform = M
                    }
                    F.appendChild(T);
                    var I = {
                        container: T,
                        perspectiveElem: F,
                        startPos: u,
                        endPos: u,
                        type: S
                    };
                    return this.threeDElements.push(I), I
                }, HybridRendererBase.prototype.build3dContainers = function() {
                    var u, S, E = this.layers.length,
                        P = "";
                    for (u = 0; u < E; u += 1) this.layers[u].ddd && 3 !== this.layers[u].ty ? "3d" !== P && (P = "3d", S = this.createThreeDContainer(u, "3d")) : "2d" !== P && (P = "2d", S = this.createThreeDContainer(u, "2d")), S.endPos = Math.max(S.endPos, u);
                    for (u = (E = this.threeDElements.length) - 1; u >= 0; u -= 1) this.resizerElem.appendChild(this.threeDElements[u].perspectiveElem)
                }, HybridRendererBase.prototype.addTo3dContainer = function(u, S) {
                    for (var E = 0, P = this.threeDElements.length; E < P;) {
                        if (S <= this.threeDElements[E].endPos) {
                            for (var F, T = this.threeDElements[E].startPos; T < S;) this.elements[T] && this.elements[T].getBaseElement && (F = this.elements[T].getBaseElement()), T += 1;
                            F ? this.threeDElements[E].container.insertBefore(u, F) : this.threeDElements[E].container.appendChild(u);
                            break
                        }
                        E += 1
                    }
                }, HybridRendererBase.prototype.configAnimation = function(u) {
                    var S = createTag("div"),
                        E = this.animationItem.wrapper,
                        P = S.style;
                    P.width = u.w + "px", P.height = u.h + "px", this.resizerElem = S, styleDiv(S), P.transformStyle = "flat", P.mozTransformStyle = "flat", P.webkitTransformStyle = "flat", this.renderConfig.className && S.setAttribute("class", this.renderConfig.className), E.appendChild(S), P.overflow = "hidden";
                    var F = createNS("svg");
                    F.setAttribute("width", "1"), F.setAttribute("height", "1"), styleDiv(F), this.resizerElem.appendChild(F);
                    var T = createNS("defs");
                    F.appendChild(T), this.data = u, this.setupGlobalData(u, F), this.globalData.defs = T, this.layers = u.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                }, HybridRendererBase.prototype.destroy = function() {
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                    var u, S = this.layers ? this.layers.length : 0;
                    for (u = 0; u < S; u += 1) this.elements[u] && this.elements[u].destroy && this.elements[u].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, HybridRendererBase.prototype.updateContainerSize = function() {
                    var u, S, E, P, F = this.animationItem.wrapper.offsetWidth,
                        T = this.animationItem.wrapper.offsetHeight,
                        D = F / T;
                    this.globalData.compSize.w / this.globalData.compSize.h > D ? (u = F / this.globalData.compSize.w, S = F / this.globalData.compSize.w, E = 0, P = (T - this.globalData.compSize.h * (F / this.globalData.compSize.w)) / 2) : (u = T / this.globalData.compSize.h, S = T / this.globalData.compSize.h, E = (F - this.globalData.compSize.w * (T / this.globalData.compSize.h)) / 2, P = 0);
                    var M = this.resizerElem.style;
                    M.webkitTransform = "matrix3d(" + u + ",0,0,0,0," + S + ",0,0,0,0,1,0," + E + "," + P + ",0,1)", M.transform = M.webkitTransform
                }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                    this.resizerElem.style.display = "none"
                }, HybridRendererBase.prototype.show = function() {
                    this.resizerElem.style.display = "block"
                }, HybridRendererBase.prototype.initItems = function() {
                    if (this.buildAllItems(), this.camera) this.camera.setup();
                    else {
                        var u, S = this.globalData.compSize.w,
                            E = this.globalData.compSize.h,
                            P = this.threeDElements.length;
                        for (u = 0; u < P; u += 1) {
                            var F = this.threeDElements[u].perspectiveElem.style;
                            F.webkitPerspective = Math.sqrt(Math.pow(S, 2) + Math.pow(E, 2)) + "px", F.perspective = F.webkitPerspective
                        }
                    }
                }, HybridRendererBase.prototype.searchExtraCompositions = function(u) {
                    var S, E = u.length,
                        P = createTag("div");
                    for (S = 0; S < E; S += 1)
                        if (u[S].xt) {
                            var F = this.createComp(u[S], P, this.globalData.comp, null);
                            F.initExpressions(), this.globalData.projectInterface.registerComposition(F)
                        }
                }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                }, HCompElement.prototype.addTo3dContainer = function(u, S) {
                    for (var E, P = 0; P < S;) this.elements[P] && this.elements[P].getBaseElement && (E = this.elements[P].getBaseElement()), P += 1;
                    E ? this.layerElement.insertBefore(u, E) : this.layerElement.appendChild(u)
                }, HCompElement.prototype.createComp = function(u) {
                    return this.supports3d ? new HCompElement(u, this.globalData, this) : new SVGCompElement(u, this.globalData, this)
                }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(u) {
                    return this.supports3d ? new HCompElement(u, this.globalData, this) : new SVGCompElement(u, this.globalData, this)
                };
                var CompExpressionInterface = function() {
                    return function(u) {
                        function _thisLayerFunction(S) {
                            for (var E = 0, P = u.layers.length; E < P;) {
                                if (u.layers[E].nm === S || u.layers[E].ind === S) return u.elements[E].layerInterface;
                                E += 1
                            }
                            return null
                        }
                        return Object.defineProperty(_thisLayerFunction, "_name", {
                            value: u.data.nm
                        }), _thisLayerFunction.layer = _thisLayerFunction, _thisLayerFunction.pixelAspect = 1, _thisLayerFunction.height = u.data.h || u.globalData.compSize.h, _thisLayerFunction.width = u.data.w || u.globalData.compSize.w, _thisLayerFunction.pixelAspect = 1, _thisLayerFunction.frameDuration = 1 / u.globalData.frameRate, _thisLayerFunction.displayStartTime = 0, _thisLayerFunction.numLayers = u.layers.length, _thisLayerFunction
                    }
                }();

                function _typeof$2(u) {
                    return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }

                function seedRandom(u, S) {
                    var E, P = this,
                        F = 256,
                        T = 6,
                        D = 52,
                        M = "random",
                        I = S.pow(F, T),
                        V = S.pow(2, D),
                        L = 2 * V,
                        R = F - 1;

                    function seedrandom(E, P, D) {
                        var R = [],
                            G = mixkey(flatten((P = !0 === P ? {
                                entropy: !0
                            } : P || {}).entropy ? [E, tostring(u)] : null === E ? autoseed() : E, 3), R),
                            O = new ARC4(R),
                            prng = function() {
                                for (var u = O.g(T), S = I, E = 0; u < V;) u = (u + E) * F, S *= F, E = O.g(1);
                                for (; u >= L;) u /= 2, S /= 2, E >>>= 1;
                                return (u + E) / S
                            };
                        return prng.int32 = function() {
                            return 0 | O.g(4)
                        }, prng.quick = function() {
                            return O.g(4) / 4294967296
                        }, prng.double = prng, mixkey(tostring(O.S), u), (P.pass || D || function(u, E, P, F) {
                            return (F && (F.S && copy(F, O), u.state = function() {
                                return copy(O, {})
                            }), P) ? (S[M] = u, E) : u
                        })(prng, G, "global" in P ? P.global : this == S, P.state)
                    }

                    function ARC4(u) {
                        var S, E = u.length,
                            P = this,
                            T = 0,
                            D = P.i = P.j = 0,
                            M = P.S = [];
                        for (E || (u = [E++]); T < F;) M[T] = T++;
                        for (T = 0; T < F; T++) M[T] = M[D = R & D + u[T % E] + (S = M[T])], M[D] = S;
                        P.g = function(u) {
                            for (var S, E = 0, T = P.i, D = P.j, M = P.S; u--;) S = M[T = R & T + 1], E = E * F + M[R & (M[T] = M[D = R & D + S]) + (M[D] = S)];
                            return P.i = T, P.j = D, E
                        }
                    }

                    function copy(u, S) {
                        return S.i = u.i, S.j = u.j, S.S = u.S.slice(), S
                    }

                    function flatten(u, S) {
                        var E, P = [],
                            F = _typeof$2(u);
                        if (S && "object" == F)
                            for (E in u) try {
                                P.push(flatten(u[E], S - 1))
                            } catch (u) {}
                        return P.length ? P : "string" == F ? u : u + "\x00"
                    }

                    function mixkey(u, S) {
                        for (var E, P = u + "", F = 0; F < P.length;) S[R & F] = R & (E ^= 19 * S[R & F]) + P.charCodeAt(F++);
                        return tostring(S)
                    }

                    function autoseed() {
                        try {
                            if (E) return tostring(E.randomBytes(F));
                            var S = new Uint8Array(F);
                            return (P.crypto || P.msCrypto).getRandomValues(S), tostring(S)
                        } catch (S) {
                            var T = P.navigator,
                                D = T && T.plugins;
                            return [+new Date, P, D, P.screen, tostring(u)]
                        }
                    }

                    function tostring(u) {
                        return String.fromCharCode.apply(0, u)
                    }
                    S["seed" + M] = seedrandom, mixkey(S.random(), u)
                }

                function initialize$2(u) {
                    seedRandom([], u)
                }
                var propTypes = {
                    SHAPE: "shape"
                };

                function _typeof$1(u) {
                    return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var ExpressionManager = function() {
                        var ob = {},
                            Math = BMMath,
                            window = null,
                            document = null,
                            XMLHttpRequest = null,
                            fetch = null,
                            frames = null,
                            _lottieGlobal = {};

                        function resetFrame() {
                            _lottieGlobal = {}
                        }

                        function $bm_isInstanceOfArray(u) {
                            return u.constructor === Array || u.constructor === Float32Array
                        }

                        function isNumerable(u, S) {
                            return "number" === u || S instanceof Number || "boolean" === u || "string" === u
                        }

                        function $bm_neg(u) {
                            var S = _typeof$1(u);
                            if ("number" === S || u instanceof Number || "boolean" === S) return -u;
                            if ($bm_isInstanceOfArray(u)) {
                                var E, P = u.length,
                                    F = [];
                                for (E = 0; E < P; E += 1) F[E] = -u[E];
                                return F
                            }
                            return u.propType ? u.v : -u
                        }
                        initialize$2(BMMath);
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                        function sum(u, S) {
                            var E = _typeof$1(u),
                                P = _typeof$1(S);
                            if (isNumerable(E, u) && isNumerable(P, S) || "string" === E || "string" === P) return u + S;
                            if ($bm_isInstanceOfArray(u) && isNumerable(P, S)) return u = u.slice(0), u[0] += S, u;
                            if (isNumerable(E, u) && $bm_isInstanceOfArray(S)) return (S = S.slice(0))[0] = u + S[0], S;
                            if ($bm_isInstanceOfArray(u) && $bm_isInstanceOfArray(S)) {
                                for (var F = 0, T = u.length, D = S.length, M = []; F < T || F < D;)("number" == typeof u[F] || u[F] instanceof Number) && ("number" == typeof S[F] || S[F] instanceof Number) ? M[F] = u[F] + S[F] : M[F] = void 0 === S[F] ? u[F] : u[F] || S[F], F += 1;
                                return M
                            }
                            return 0
                        }
                        var add = sum;

                        function sub(u, S) {
                            var E = _typeof$1(u),
                                P = _typeof$1(S);
                            if (isNumerable(E, u) && isNumerable(P, S)) return "string" === E && (u = parseInt(u, 10)), "string" === P && (S = parseInt(S, 10)), u - S;
                            if ($bm_isInstanceOfArray(u) && isNumerable(P, S)) return u = u.slice(0), u[0] -= S, u;
                            if (isNumerable(E, u) && $bm_isInstanceOfArray(S)) return (S = S.slice(0))[0] = u - S[0], S;
                            if ($bm_isInstanceOfArray(u) && $bm_isInstanceOfArray(S)) {
                                for (var F = 0, T = u.length, D = S.length, M = []; F < T || F < D;)("number" == typeof u[F] || u[F] instanceof Number) && ("number" == typeof S[F] || S[F] instanceof Number) ? M[F] = u[F] - S[F] : M[F] = void 0 === S[F] ? u[F] : u[F] || S[F], F += 1;
                                return M
                            }
                            return 0
                        }

                        function mul(u, S) {
                            var E, P, F, T = _typeof$1(u),
                                D = _typeof$1(S);
                            if (isNumerable(T, u) && isNumerable(D, S)) return u * S;
                            if ($bm_isInstanceOfArray(u) && isNumerable(D, S)) {
                                for (P = 0, E = createTypedArray("float32", F = u.length); P < F; P += 1) E[P] = u[P] * S;
                                return E
                            }
                            if (isNumerable(T, u) && $bm_isInstanceOfArray(S)) {
                                for (P = 0, E = createTypedArray("float32", F = S.length); P < F; P += 1) E[P] = u * S[P];
                                return E
                            }
                            return 0
                        }

                        function div(u, S) {
                            var E, P, F, T = _typeof$1(u),
                                D = _typeof$1(S);
                            if (isNumerable(T, u) && isNumerable(D, S)) return u / S;
                            if ($bm_isInstanceOfArray(u) && isNumerable(D, S)) {
                                for (P = 0, E = createTypedArray("float32", F = u.length); P < F; P += 1) E[P] = u[P] / S;
                                return E
                            }
                            if (isNumerable(T, u) && $bm_isInstanceOfArray(S)) {
                                for (P = 0, E = createTypedArray("float32", F = S.length); P < F; P += 1) E[P] = u / S[P];
                                return E
                            }
                            return 0
                        }

                        function mod(u, S) {
                            return "string" == typeof u && (u = parseInt(u, 10)), "string" == typeof S && (S = parseInt(S, 10)), u % S
                        }
                        var $bm_sum = sum,
                            $bm_sub = sub,
                            $bm_mul = mul,
                            $bm_div = div,
                            $bm_mod = mod;

                        function clamp(u, S, E) {
                            if (S > E) {
                                var P = E;
                                E = S, S = P
                            }
                            return Math.min(Math.max(u, S), E)
                        }

                        function radiansToDegrees(u) {
                            return u / degToRads
                        }
                        var radians_to_degrees = radiansToDegrees;

                        function degreesToRadians(u) {
                            return u * degToRads
                        }
                        var degrees_to_radians = radiansToDegrees,
                            helperLengthArray = [0, 0, 0, 0, 0, 0];

                        function length(u, S) {
                            if ("number" == typeof u || u instanceof Number) return S = S || 0, Math.abs(u - S);
                            S || (S = helperLengthArray);
                            var E, P = Math.min(u.length, S.length),
                                F = 0;
                            for (E = 0; E < P; E += 1) F += Math.pow(S[E] - u[E], 2);
                            return Math.sqrt(F)
                        }

                        function normalize(u) {
                            return div(u, length(u))
                        }

                        function rgbToHsl(u) {
                            var S, E, P = u[0],
                                F = u[1],
                                T = u[2],
                                D = Math.max(P, F, T),
                                M = Math.min(P, F, T),
                                I = (D + M) / 2;
                            if (D === M) S = 0, E = 0;
                            else {
                                var V = D - M;
                                switch (E = I > .5 ? V / (2 - D - M) : V / (D + M), D) {
                                    case P:
                                        S = (F - T) / V + (F < T ? 6 : 0);
                                        break;
                                    case F:
                                        S = (T - P) / V + 2;
                                        break;
                                    case T:
                                        S = (P - F) / V + 4
                                }
                                S /= 6
                            }
                            return [S, E, I, u[3]]
                        }

                        function hue2rgb(u, S, E) {
                            return (E < 0 && (E += 1), E > 1 && (E -= 1), E < 1 / 6) ? u + (S - u) * 6 * E : E < .5 ? S : E < 2 / 3 ? u + (S - u) * (2 / 3 - E) * 6 : u
                        }

                        function hslToRgb(u) {
                            var S, E, P, F = u[0],
                                T = u[1],
                                D = u[2];
                            if (0 === T) S = D, P = D, E = D;
                            else {
                                var M = D < .5 ? D * (1 + T) : D + T - D * T,
                                    I = 2 * D - M;
                                S = hue2rgb(I, M, F + 1 / 3), E = hue2rgb(I, M, F), P = hue2rgb(I, M, F - 1 / 3)
                            }
                            return [S, E, P, u[3]]
                        }

                        function linear(u, S, E, P, F) {
                            if ((void 0 === P || void 0 === F) && (P = S, F = E, S = 0, E = 1), E < S) {
                                var T, D = E;
                                E = S, S = D
                            }
                            if (u <= S) return P;
                            if (u >= E) return F;
                            var M = E === S ? 0 : (u - S) / (E - S);
                            if (!P.length) return P + (F - P) * M;
                            var I = P.length,
                                V = createTypedArray("float32", I);
                            for (T = 0; T < I; T += 1) V[T] = P[T] + (F[T] - P[T]) * M;
                            return V
                        }

                        function random(u, S) {
                            if (void 0 === S && (void 0 === u ? (u = 0, S = 1) : (S = u, u = void 0)), S.length) {
                                var E, P = S.length;
                                u || (u = createTypedArray("float32", P));
                                var F = createTypedArray("float32", P),
                                    T = BMMath.random();
                                for (E = 0; E < P; E += 1) F[E] = u[E] + T * (S[E] - u[E]);
                                return F
                            }
                            return void 0 === u && (u = 0), u + BMMath.random() * (S - u)
                        }

                        function createPath(u, S, E, P) {
                            var F, T, D, M = u.length,
                                I = shapePool.newElement();
                            I.setPathData(!!P, M);
                            var V = [0, 0];
                            for (F = 0; F < M; F += 1) T = S && S[F] ? S[F] : V, D = E && E[F] ? E[F] : V, I.setTripleAt(u[F][0], u[F][1], D[0] + u[F][0], D[1] + u[F][1], T[0] + u[F][0], T[1] + u[F][1], F, !0);
                            return I
                        }

                        function initiateExpression(elem, data, property) {
                            function noOp(u) {
                                return u
                            }
                            if (!elem.globalData.renderConfig.runExpressions) return noOp;
                            var transform, $bm_transform, content, effect, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, time, velocity, value, text, textIndex, textTotal, selectorValue, parent, val = data.x,
                                needsVelocity = /velocity(?![\w\d])/.test(val),
                                _needsRandom = -1 !== val.indexOf("random"),
                                elemType = elem.data.ty,
                                thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                width = elem.data.sw ? elem.data.sw : 0,
                                height = elem.data.sh ? elem.data.sh : 0,
                                name = elem.data.nm,
                                expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                numKeys = property.kf ? data.k.length : 0,
                                active = !this.data || !0 !== this.data.hd,
                                wiggle = (function(u, S) {
                                    var E, P, F = this.pv.length ? this.pv.length : 1,
                                        T = createTypedArray("float32", F);
                                    u = 5;
                                    var D = Math.floor(time * u);
                                    for (E = 0, P = 0; E < D;) {
                                        for (P = 0; P < F; P += 1) T[P] += -S + 2 * S * BMMath.random();
                                        E += 1
                                    }
                                    var M = time * u,
                                        I = M - Math.floor(M),
                                        V = createTypedArray("float32", F);
                                    if (F > 1) {
                                        for (P = 0; P < F; P += 1) V[P] = this.pv[P] + T[P] + (-S + 2 * S * BMMath.random()) * I;
                                        return V
                                    }
                                    return this.pv + T[0] + (-S + 2 * S * BMMath.random()) * I
                                }).bind(this);

                            function loopInDuration(u, S) {
                                return loopIn(u, S, !0)
                            }

                            function loopOutDuration(u, S) {
                                return loopOut(u, S, !0)
                            }
                            thisProperty.loopIn && (loop_in = loopIn = thisProperty.loopIn.bind(thisProperty)), thisProperty.loopOut && (loop_out = loopOut = thisProperty.loopOut.bind(thisProperty)), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

                            function lookAt(u, S) {
                                var E = [S[0] - u[0], S[1] - u[1], S[2] - u[2]],
                                    P = Math.atan2(E[0], Math.sqrt(E[1] * E[1] + E[2] * E[2])) / degToRads;
                                return [-Math.atan2(E[1], E[2]) / degToRads, P, 0]
                            }

                            function easeOut(u, S, E, P, F) {
                                return applyEase(easeOutBez, u, S, E, P, F)
                            }

                            function easeIn(u, S, E, P, F) {
                                return applyEase(easeInBez, u, S, E, P, F)
                            }

                            function ease(u, S, E, P, F) {
                                return applyEase(easeInOutBez, u, S, E, P, F)
                            }

                            function applyEase(u, S, E, P, F, T) {
                                void 0 === F ? (F = E, T = P) : S = (S - E) / (P - E), S > 1 ? S = 1 : S < 0 && (S = 0);
                                var D = u(S);
                                if ($bm_isInstanceOfArray(F)) {
                                    var M, I = F.length,
                                        V = createTypedArray("float32", I);
                                    for (M = 0; M < I; M += 1) V[M] = (T[M] - F[M]) * D + F[M];
                                    return V
                                }
                                return (T - F) * D + F
                            }

                            function nearestKey(u) {
                                var S, E, P, F = data.k.length;
                                if (data.k.length && "number" != typeof data.k[0]) {
                                    if (E = -1, (u *= elem.comp.globalData.frameRate) < data.k[0].t) E = 1, P = data.k[0].t;
                                    else {
                                        for (S = 0; S < F - 1; S += 1) {
                                            if (u === data.k[S].t) {
                                                E = S + 1, P = data.k[S].t;
                                                break
                                            }
                                            if (u > data.k[S].t && u < data.k[S + 1].t) {
                                                u - data.k[S].t > data.k[S + 1].t - u ? (E = S + 2, P = data.k[S + 1].t) : (E = S + 1, P = data.k[S].t);
                                                break
                                            }
                                        } - 1 === E && (E = S + 1, P = data.k[S].t)
                                    }
                                } else E = 0, P = 0;
                                var T = {};
                                return T.index = E, T.time = P / elem.comp.globalData.frameRate, T
                            }

                            function key(u) {
                                if (!data.k.length || "number" == typeof data.k[0]) throw Error("The property has no keyframe at index " + u);
                                u -= 1, S = {
                                    time: data.k[u].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var S, E, P, F = Object.prototype.hasOwnProperty.call(data.k[u], "s") ? data.k[u].s : data.k[u - 1].e;
                                for (E = 0, P = F.length; E < P; E += 1) S[E] = F[E], S.value[E] = F[E];
                                return S
                            }

                            function framesToTime(u, S) {
                                return S || (S = elem.comp.globalData.frameRate), u / S
                            }

                            function timeToFrames(u, S) {
                                return u || 0 === u || (u = time), S || (S = elem.comp.globalData.frameRate), u * S
                            }

                            function seedRandom(u) {
                                BMMath.seedrandom(randSeed + u)
                            }

                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime()
                            }

                            function substring(u, S) {
                                return "string" == typeof value ? void 0 === S ? value.substring(u) : value.substring(u, S) : ""
                            }

                            function substr(u, S) {
                                return "string" == typeof value ? void 0 === S ? value.substr(u) : value.substr(u, S) : ""
                            }

                            function posterizeTime(u) {
                                time = 0 === u ? 0 : Math.floor(time * u) / u, value = valueAtTime(time)
                            }
                            var index = elem.data.ind,
                                hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                                randSeed = Math.floor(1e6 * Math.random()),
                                globalData = elem.globalData;

                            function executeExpression(u) {
                                return (value = u, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType) ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), !transform && ($bm_transform = transform = elem.layerInterface("ADBE Transform Group"), transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !!(elem.hierarchy && elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                            }
                            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                        }
                        return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
                    }(),
                    Expressions = function() {
                        var u = {};

                        function initExpressions(u) {
                            var S = 0,
                                E = [];

                            function pushExpression() {
                                S += 1
                            }

                            function popExpression() {
                                0 == (S -= 1) && releaseInstances()
                            }

                            function registerExpressionProperty(u) {
                                -1 === E.indexOf(u) && E.push(u)
                            }

                            function releaseInstances() {
                                var u, S = E.length;
                                for (u = 0; u < S; u += 1) E[u].release();
                                E.length = 0
                            }
                            u.renderer.compInterface = CompExpressionInterface(u.renderer), u.renderer.globalData.projectInterface.registerComposition(u.renderer), u.renderer.globalData.pushExpression = pushExpression, u.renderer.globalData.popExpression = popExpression, u.renderer.globalData.registerExpressionProperty = registerExpressionProperty
                        }
                        return u.initExpressions = initExpressions, u.resetFrame = ExpressionManager.resetFrame, u
                    }(),
                    MaskManagerInterface = function() {
                        function MaskInterface(u, S) {
                            this._mask = u, this._data = S
                        }
                        return Object.defineProperty(MaskInterface.prototype, "maskPath", {
                                get: function() {
                                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                }
                            }), Object.defineProperty(MaskInterface.prototype, "maskOpacity", {
                                get: function() {
                                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                }
                            }),
                            function(u) {
                                var S, E = createSizedArray(u.viewData.length),
                                    P = u.viewData.length;
                                for (S = 0; S < P; S += 1) E[S] = new MaskInterface(u.viewData[S], u.masksProperties[S]);
                                return function(F) {
                                    for (S = 0; S < P;) {
                                        if (u.masksProperties[S].nm === F) return E[S];
                                        S += 1
                                    }
                                    return null
                                }
                            }
                    }(),
                    ExpressionPropertyInterface = function() {
                        var u = {
                                pv: 0,
                                v: 0,
                                mult: 1
                            },
                            S = {
                                pv: [0, 0, 0],
                                v: [0, 0, 0],
                                mult: 1
                            };

                        function completeProperty(u, S, E) {
                            Object.defineProperty(u, "velocity", {
                                get: function() {
                                    return S.getVelocityAtTime(S.comp.currentFrame)
                                }
                            }), u.numKeys = S.keyframes ? S.keyframes.length : 0, u.key = function(P) {
                                if (!u.numKeys) return 0;
                                var F = "";
                                F = "s" in S.keyframes[P - 1] ? S.keyframes[P - 1].s : "e" in S.keyframes[P - 2] ? S.keyframes[P - 2].e : S.keyframes[P - 2].s;
                                var T = "unidimensional" === E ? new Number(F) : Object.assign({}, F);
                                return T.time = S.keyframes[P - 1].t / S.elem.comp.globalData.frameRate, T.value = "unidimensional" === E ? F[0] : F, T
                            }, u.valueAtTime = S.getValueAtTime, u.speedAtTime = S.getSpeedAtTime, u.velocityAtTime = S.getVelocityAtTime, u.propertyGroup = S.propertyGroup
                        }

                        function UnidimensionalPropertyInterface(S) {
                            S && "pv" in S || (S = u);
                            var E = 1 / S.mult,
                                P = S.pv * E,
                                F = new Number(P);
                            return F.value = P, completeProperty(F, S, "unidimensional"),
                                function() {
                                    return S.k && S.getValue(), P = S.v * E, F.value !== P && ((F = new Number(P)).value = P, completeProperty(F, S, "unidimensional")), F
                                }
                        }

                        function MultidimensionalPropertyInterface(u) {
                            u && "pv" in u || (u = S);
                            var E = 1 / u.mult,
                                P = u.data && u.data.l || u.pv.length,
                                F = createTypedArray("float32", P),
                                T = createTypedArray("float32", P);
                            return F.value = T, completeProperty(F, u, "multidimensional"),
                                function() {
                                    u.k && u.getValue();
                                    for (var S = 0; S < P; S += 1) T[S] = u.v[S] * E, F[S] = T[S];
                                    return F
                                }
                        }

                        function defaultGetter() {
                            return u
                        }
                        return function(u) {
                            return u ? "unidimensional" === u.propType ? UnidimensionalPropertyInterface(u) : MultidimensionalPropertyInterface(u) : defaultGetter
                        }
                    }(),
                    TransformExpressionInterface = function() {
                        return function(u) {
                            var S, E, P, F;

                            function _thisFunction(u) {
                                switch (u) {
                                    case "scale":
                                    case "Scale":
                                    case "ADBE Scale":
                                    case 6:
                                        return _thisFunction.scale;
                                    case "rotation":
                                    case "Rotation":
                                    case "ADBE Rotation":
                                    case "ADBE Rotate Z":
                                    case 10:
                                        return _thisFunction.rotation;
                                    case "ADBE Rotate X":
                                        return _thisFunction.xRotation;
                                    case "ADBE Rotate Y":
                                        return _thisFunction.yRotation;
                                    case "position":
                                    case "Position":
                                    case "ADBE Position":
                                    case 2:
                                        return _thisFunction.position;
                                    case "ADBE Position_0":
                                        return _thisFunction.xPosition;
                                    case "ADBE Position_1":
                                        return _thisFunction.yPosition;
                                    case "ADBE Position_2":
                                        return _thisFunction.zPosition;
                                    case "anchorPoint":
                                    case "AnchorPoint":
                                    case "Anchor Point":
                                    case "ADBE AnchorPoint":
                                    case 1:
                                        return _thisFunction.anchorPoint;
                                    case "opacity":
                                    case "Opacity":
                                    case 11:
                                        return _thisFunction.opacity;
                                    default:
                                        return null
                                }
                            }
                            return Object.defineProperty(_thisFunction, "rotation", {
                                get: ExpressionPropertyInterface(u.r || u.rz)
                            }), Object.defineProperty(_thisFunction, "zRotation", {
                                get: ExpressionPropertyInterface(u.rz || u.r)
                            }), Object.defineProperty(_thisFunction, "xRotation", {
                                get: ExpressionPropertyInterface(u.rx)
                            }), Object.defineProperty(_thisFunction, "yRotation", {
                                get: ExpressionPropertyInterface(u.ry)
                            }), Object.defineProperty(_thisFunction, "scale", {
                                get: ExpressionPropertyInterface(u.s)
                            }), u.p ? F = ExpressionPropertyInterface(u.p) : (S = ExpressionPropertyInterface(u.px), E = ExpressionPropertyInterface(u.py), u.pz && (P = ExpressionPropertyInterface(u.pz))), Object.defineProperty(_thisFunction, "position", {
                                get: function() {
                                    return u.p ? F() : [S(), E(), P ? P() : 0]
                                }
                            }), Object.defineProperty(_thisFunction, "xPosition", {
                                get: ExpressionPropertyInterface(u.px)
                            }), Object.defineProperty(_thisFunction, "yPosition", {
                                get: ExpressionPropertyInterface(u.py)
                            }), Object.defineProperty(_thisFunction, "zPosition", {
                                get: ExpressionPropertyInterface(u.pz)
                            }), Object.defineProperty(_thisFunction, "anchorPoint", {
                                get: ExpressionPropertyInterface(u.a)
                            }), Object.defineProperty(_thisFunction, "opacity", {
                                get: ExpressionPropertyInterface(u.o)
                            }), Object.defineProperty(_thisFunction, "skew", {
                                get: ExpressionPropertyInterface(u.sk)
                            }), Object.defineProperty(_thisFunction, "skewAxis", {
                                get: ExpressionPropertyInterface(u.sa)
                            }), Object.defineProperty(_thisFunction, "orientation", {
                                get: ExpressionPropertyInterface(u.or)
                            }), _thisFunction
                        }
                    }(),
                    LayerExpressionInterface = function() {
                        function getMatrix(u) {
                            var S = new Matrix;
                            return void 0 !== u ? this._elem.finalTransform.mProp.getValueAtTime(u).clone(S) : this._elem.finalTransform.mProp.applyToMatrix(S), S
                        }

                        function toWorldVec(u, S) {
                            var E = this.getMatrix(S);
                            return E.props[12] = 0, E.props[13] = 0, E.props[14] = 0, this.applyPoint(E, u)
                        }

                        function toWorld(u, S) {
                            var E = this.getMatrix(S);
                            return this.applyPoint(E, u)
                        }

                        function fromWorldVec(u, S) {
                            var E = this.getMatrix(S);
                            return E.props[12] = 0, E.props[13] = 0, E.props[14] = 0, this.invertPoint(E, u)
                        }

                        function fromWorld(u, S) {
                            var E = this.getMatrix(S);
                            return this.invertPoint(E, u)
                        }

                        function applyPoint(u, S) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var E, P = this._elem.hierarchy.length;
                                for (E = 0; E < P; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(u)
                            }
                            return u.applyToPointArray(S[0], S[1], S[2] || 0)
                        }

                        function invertPoint(u, S) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var E, P = this._elem.hierarchy.length;
                                for (E = 0; E < P; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(u)
                            }
                            return u.inversePoint(S)
                        }

                        function fromComp(u) {
                            var S = new Matrix;
                            if (S.reset(), this._elem.finalTransform.mProp.applyToMatrix(S), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var E, P = this._elem.hierarchy.length;
                                for (E = 0; E < P; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(S)
                            }
                            return S.inversePoint(u)
                        }

                        function sampleImage() {
                            return [1, 1, 1, 1]
                        }
                        return function(u) {
                            function _registerMaskInterface(S) {
                                _thisLayerFunction.mask = new MaskManagerInterface(S, u)
                            }

                            function _registerEffectsInterface(u) {
                                _thisLayerFunction.effect = u
                            }

                            function _thisLayerFunction(u) {
                                switch (u) {
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return _thisLayerFunction.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return S;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return _thisLayerFunction.effect;
                                    case "ADBE Text Properties":
                                        return _thisLayerFunction.textInterface;
                                    default:
                                        return null
                                }
                            }
                            _thisLayerFunction.getMatrix = getMatrix, _thisLayerFunction.invertPoint = invertPoint, _thisLayerFunction.applyPoint = applyPoint, _thisLayerFunction.toWorld = toWorld, _thisLayerFunction.toWorldVec = toWorldVec, _thisLayerFunction.fromWorld = fromWorld, _thisLayerFunction.fromWorldVec = fromWorldVec, _thisLayerFunction.toComp = toWorld, _thisLayerFunction.fromComp = fromComp, _thisLayerFunction.sampleImage = sampleImage, _thisLayerFunction.sourceRectAtTime = u.sourceRectAtTime.bind(u), _thisLayerFunction._elem = u;
                            var S, E = getDescriptor(S = TransformExpressionInterface(u.finalTransform.mProp), "anchorPoint");
                            return Object.defineProperties(_thisLayerFunction, {
                                hasParent: {
                                    get: function() {
                                        return u.hierarchy.length
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return u.hierarchy[0].layerInterface
                                    }
                                },
                                rotation: getDescriptor(S, "rotation"),
                                scale: getDescriptor(S, "scale"),
                                position: getDescriptor(S, "position"),
                                opacity: getDescriptor(S, "opacity"),
                                anchorPoint: E,
                                anchor_point: E,
                                transform: {
                                    get: function() {
                                        return S
                                    }
                                },
                                active: {
                                    get: function() {
                                        return u.isInRange
                                    }
                                }
                            }), _thisLayerFunction.startTime = u.data.st, _thisLayerFunction.index = u.data.ind, _thisLayerFunction.source = u.data.refId, _thisLayerFunction.height = 0 === u.data.ty ? u.data.h : 100, _thisLayerFunction.width = 0 === u.data.ty ? u.data.w : 100, _thisLayerFunction.inPoint = u.data.ip / u.comp.globalData.frameRate, _thisLayerFunction.outPoint = u.data.op / u.comp.globalData.frameRate, _thisLayerFunction._name = u.data.nm, _thisLayerFunction.registerMaskInterface = _registerMaskInterface, _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface, _thisLayerFunction
                        }
                    }(),
                    propertyGroupFactory = function() {
                        return function(u, S) {
                            return function(E) {
                                return (E = void 0 === E ? 1 : E) <= 0 ? u : S(E - 1)
                            }
                        }
                    }(),
                    PropertyInterface = function() {
                        return function(u, S) {
                            var E = {
                                _name: u
                            };
                            return function(u) {
                                return (u = void 0 === u ? 1 : u) <= 0 ? E : S(u - 1)
                            }
                        }
                    }(),
                    EffectsExpressionInterface = function() {
                        function createGroupInterface(u, S, E, P) {
                            function groupInterface(S) {
                                for (var E = u.ef, P = 0, F = E.length; P < F;) {
                                    if (S === E[P].nm || S === E[P].mn || S === E[P].ix) {
                                        if (5 === E[P].ty) return D[P];
                                        return D[P]()
                                    }
                                    P += 1
                                }
                                throw Error()
                            }
                            var F, T = propertyGroupFactory(groupInterface, E),
                                D = [],
                                M = u.ef.length;
                            for (F = 0; F < M; F += 1) 5 === u.ef[F].ty ? D.push(createGroupInterface(u.ef[F], S.effectElements[F], S.effectElements[F].propertyGroup, P)) : D.push(createValueInterface(S.effectElements[F], u.ef[F].ty, P, T));
                            return "ADBE Color Control" === u.mn && Object.defineProperty(groupInterface, "color", {
                                get: function() {
                                    return D[0]()
                                }
                            }), Object.defineProperties(groupInterface, {
                                numProperties: {
                                    get: function() {
                                        return u.np
                                    }
                                },
                                _name: {
                                    value: u.nm
                                },
                                propertyGroup: {
                                    value: T
                                }
                            }), groupInterface.enabled = 0 !== u.en, groupInterface.active = groupInterface.enabled, groupInterface
                        }

                        function createValueInterface(u, S, E, P) {
                            var F = ExpressionPropertyInterface(u.p);

                            function interfaceFunction() {
                                return 10 === S ? E.comp.compInterface(u.p.v) : F()
                            }
                            return u.p.setGroupProperty && u.p.setGroupProperty(PropertyInterface("", P)), interfaceFunction
                        }
                        return {
                            createEffectsInterface: function(u, S) {
                                if (u.effectsManager) {
                                    var E, P = [],
                                        F = u.data.ef,
                                        T = u.effectsManager.effectElements.length;
                                    for (E = 0; E < T; E += 1) P.push(createGroupInterface(F[E], u.effectsManager.effectElements[E], S, u));
                                    var D = u.data.ef || [],
                                        groupInterface = function(u) {
                                            for (E = 0, T = D.length; E < T;) {
                                                if (u === D[E].nm || u === D[E].mn || u === D[E].ix) return P[E];
                                                E += 1
                                            }
                                            return null
                                        };
                                    return Object.defineProperty(groupInterface, "numProperties", {
                                        get: function() {
                                            return D.length
                                        }
                                    }), groupInterface
                                }
                                return null
                            }
                        }
                    }(),
                    ShapePathInterface = function() {
                        return function(u, S, E) {
                            var P = S.sh;

                            function interfaceFunction(u) {
                                return "Shape" === u || "shape" === u || "Path" === u || "path" === u || "ADBE Vector Shape" === u || 2 === u ? interfaceFunction.path : null
                            }
                            var F = propertyGroupFactory(interfaceFunction, E);
                            return P.setGroupProperty(PropertyInterface("Path", F)), Object.defineProperties(interfaceFunction, {
                                path: {
                                    get: function() {
                                        return P.k && P.getValue(), P
                                    }
                                },
                                shape: {
                                    get: function() {
                                        return P.k && P.getValue(), P
                                    }
                                },
                                _name: {
                                    value: u.nm
                                },
                                ix: {
                                    value: u.ix
                                },
                                propertyIndex: {
                                    value: u.ix
                                },
                                mn: {
                                    value: u.mn
                                },
                                propertyGroup: {
                                    value: E
                                }
                            }), interfaceFunction
                        }
                    }(),
                    ShapeExpressionInterface = function() {
                        function iterateElements(u, S, E) {
                            var P, F = [],
                                T = u ? u.length : 0;
                            for (P = 0; P < T; P += 1) "gr" === u[P].ty ? F.push(groupInterfaceFactory(u[P], S[P], E)) : "fl" === u[P].ty ? F.push(fillInterfaceFactory(u[P], S[P], E)) : "st" === u[P].ty ? F.push(strokeInterfaceFactory(u[P], S[P], E)) : "tm" === u[P].ty ? F.push(trimInterfaceFactory(u[P], S[P], E)) : "tr" === u[P].ty || ("el" === u[P].ty ? F.push(ellipseInterfaceFactory(u[P], S[P], E)) : "sr" === u[P].ty ? F.push(starInterfaceFactory(u[P], S[P], E)) : "sh" === u[P].ty ? F.push(ShapePathInterface(u[P], S[P], E)) : "rc" === u[P].ty ? F.push(rectInterfaceFactory(u[P], S[P], E)) : "rd" === u[P].ty ? F.push(roundedInterfaceFactory(u[P], S[P], E)) : "rp" === u[P].ty ? F.push(repeaterInterfaceFactory(u[P], S[P], E)) : "gf" === u[P].ty ? F.push(gradientFillInterfaceFactory(u[P], S[P], E)) : F.push(defaultInterfaceFactory(u[P], S[P], E)));
                            return F
                        }

                        function contentsInterfaceFactory(u, S, E) {
                            var P, interfaceFunction = function(u) {
                                for (var S = 0, E = P.length; S < E;) {
                                    if (P[S]._name === u || P[S].mn === u || P[S].propertyIndex === u || P[S].ix === u || P[S].ind === u) return P[S];
                                    S += 1
                                }
                                return "number" == typeof u ? P[u - 1] : null
                            };
                            interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, E), P = iterateElements(u.it, S.it, interfaceFunction.propertyGroup), interfaceFunction.numProperties = P.length;
                            var F = transformInterfaceFactory(u.it[u.it.length - 1], S.it[S.it.length - 1], interfaceFunction.propertyGroup);
                            return interfaceFunction.transform = F, interfaceFunction.propertyIndex = u.cix, interfaceFunction._name = u.nm, interfaceFunction
                        }

                        function groupInterfaceFactory(u, S, E) {
                            var interfaceFunction = function(u) {
                                switch (u) {
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return interfaceFunction.content;
                                    default:
                                        return interfaceFunction.transform
                                }
                            };
                            interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, E);
                            var P = contentsInterfaceFactory(u, S, interfaceFunction.propertyGroup),
                                F = transformInterfaceFactory(u.it[u.it.length - 1], S.it[S.it.length - 1], interfaceFunction.propertyGroup);
                            return interfaceFunction.content = P, interfaceFunction.transform = F, Object.defineProperty(interfaceFunction, "_name", {
                                get: function() {
                                    return u.nm
                                }
                            }), interfaceFunction.numProperties = u.np, interfaceFunction.propertyIndex = u.ix, interfaceFunction.nm = u.nm, interfaceFunction.mn = u.mn, interfaceFunction
                        }

                        function fillInterfaceFactory(u, S, E) {
                            function interfaceFunction(u) {
                                return "Color" === u || "color" === u ? interfaceFunction.color : "Opacity" === u || "opacity" === u ? interfaceFunction.opacity : null
                            }
                            return Object.defineProperties(interfaceFunction, {
                                color: {
                                    get: ExpressionPropertyInterface(S.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(S.o)
                                },
                                _name: {
                                    value: u.nm
                                },
                                mn: {
                                    value: u.mn
                                }
                            }), S.c.setGroupProperty(PropertyInterface("Color", E)), S.o.setGroupProperty(PropertyInterface("Opacity", E)), interfaceFunction
                        }

                        function gradientFillInterfaceFactory(u, S, E) {
                            function interfaceFunction(u) {
                                return "Start Point" === u || "start point" === u ? interfaceFunction.startPoint : "End Point" === u || "end point" === u ? interfaceFunction.endPoint : "Opacity" === u || "opacity" === u ? interfaceFunction.opacity : null
                            }
                            return Object.defineProperties(interfaceFunction, {
                                startPoint: {
                                    get: ExpressionPropertyInterface(S.s)
                                },
                                endPoint: {
                                    get: ExpressionPropertyInterface(S.e)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(S.o)
                                },
                                type: {
                                    get: function() {
                                        return "a"
                                    }
                                },
                                _name: {
                                    value: u.nm
                                },
                                mn: {
                                    value: u.mn
                                }
                            }), S.s.setGroupProperty(PropertyInterface("Start Point", E)), S.e.setGroupProperty(PropertyInterface("End Point", E)), S.o.setGroupProperty(PropertyInterface("Opacity", E)), interfaceFunction
                        }

                        function defaultInterfaceFactory() {
                            return function() {
                                return null
                            }
                        }

                        function strokeInterfaceFactory(u, S, E) {
                            var P, F = propertyGroupFactory(interfaceFunction, E),
                                T = propertyGroupFactory(M, F);

                            function addPropertyToDashOb(E) {
                                Object.defineProperty(M, u.d[E].nm, {
                                    get: ExpressionPropertyInterface(S.d.dataProps[E].p)
                                })
                            }
                            var D = u.d ? u.d.length : 0,
                                M = {};
                            for (P = 0; P < D; P += 1) addPropertyToDashOb(P), S.d.dataProps[P].p.setGroupProperty(T);

                            function interfaceFunction(u) {
                                return "Color" === u || "color" === u ? interfaceFunction.color : "Opacity" === u || "opacity" === u ? interfaceFunction.opacity : "Stroke Width" === u || "stroke width" === u ? interfaceFunction.strokeWidth : null
                            }
                            return Object.defineProperties(interfaceFunction, {
                                color: {
                                    get: ExpressionPropertyInterface(S.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(S.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(S.w)
                                },
                                dash: {
                                    get: function() {
                                        return M
                                    }
                                },
                                _name: {
                                    value: u.nm
                                },
                                mn: {
                                    value: u.mn
                                }
                            }), S.c.setGroupProperty(PropertyInterface("Color", F)), S.o.setGroupProperty(PropertyInterface("Opacity", F)), S.w.setGroupProperty(PropertyInterface("Stroke Width", F)), interfaceFunction
                        }

                        function trimInterfaceFactory(u, S, E) {
                            function interfaceFunction(S) {
                                return S === u.e.ix || "End" === S || "end" === S ? interfaceFunction.end : S === u.s.ix ? interfaceFunction.start : S === u.o.ix ? interfaceFunction.offset : null
                            }
                            var P = propertyGroupFactory(interfaceFunction, E);
                            return interfaceFunction.propertyIndex = u.ix, S.s.setGroupProperty(PropertyInterface("Start", P)), S.e.setGroupProperty(PropertyInterface("End", P)), S.o.setGroupProperty(PropertyInterface("Offset", P)), interfaceFunction.propertyIndex = u.ix, interfaceFunction.propertyGroup = E, Object.defineProperties(interfaceFunction, {
                                start: {
                                    get: ExpressionPropertyInterface(S.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(S.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(S.o)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), interfaceFunction.mn = u.mn, interfaceFunction
                        }

                        function transformInterfaceFactory(u, S, E) {
                            function interfaceFunction(S) {
                                return u.a.ix === S || "Anchor Point" === S ? interfaceFunction.anchorPoint : u.o.ix === S || "Opacity" === S ? interfaceFunction.opacity : u.p.ix === S || "Position" === S ? interfaceFunction.position : u.r.ix === S || "Rotation" === S || "ADBE Vector Rotation" === S ? interfaceFunction.rotation : u.s.ix === S || "Scale" === S ? interfaceFunction.scale : u.sk && u.sk.ix === S || "Skew" === S ? interfaceFunction.skew : u.sa && u.sa.ix === S || "Skew Axis" === S ? interfaceFunction.skewAxis : null
                            }
                            var P = propertyGroupFactory(interfaceFunction, E);
                            return S.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", P)), S.transform.mProps.p.setGroupProperty(PropertyInterface("Position", P)), S.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", P)), S.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", P)), S.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", P)), S.transform.mProps.sk && (S.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", P)), S.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", P))), S.transform.op.setGroupProperty(PropertyInterface("Opacity", P)), Object.defineProperties(interfaceFunction, {
                                opacity: {
                                    get: ExpressionPropertyInterface(S.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(S.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(S.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(S.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(S.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(S.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(S.transform.mProps.sa)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), interfaceFunction.ty = "tr", interfaceFunction.mn = u.mn, interfaceFunction.propertyGroup = E, interfaceFunction
                        }

                        function ellipseInterfaceFactory(u, S, E) {
                            function interfaceFunction(S) {
                                return u.p.ix === S ? interfaceFunction.position : u.s.ix === S ? interfaceFunction.size : null
                            }
                            var P = propertyGroupFactory(interfaceFunction, E);
                            interfaceFunction.propertyIndex = u.ix;
                            var F = "tm" === S.sh.ty ? S.sh.prop : S.sh;
                            return F.s.setGroupProperty(PropertyInterface("Size", P)), F.p.setGroupProperty(PropertyInterface("Position", P)), Object.defineProperties(interfaceFunction, {
                                size: {
                                    get: ExpressionPropertyInterface(F.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(F.p)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), interfaceFunction.mn = u.mn, interfaceFunction
                        }

                        function starInterfaceFactory(u, S, E) {
                            function interfaceFunction(S) {
                                return u.p.ix === S ? interfaceFunction.position : u.r.ix === S ? interfaceFunction.rotation : u.pt.ix === S ? interfaceFunction.points : u.or.ix === S || "ADBE Vector Star Outer Radius" === S ? interfaceFunction.outerRadius : u.os.ix === S ? interfaceFunction.outerRoundness : u.ir && (u.ir.ix === S || "ADBE Vector Star Inner Radius" === S) ? interfaceFunction.innerRadius : u.is && u.is.ix === S ? interfaceFunction.innerRoundness : null
                            }
                            var P = propertyGroupFactory(interfaceFunction, E),
                                F = "tm" === S.sh.ty ? S.sh.prop : S.sh;
                            return interfaceFunction.propertyIndex = u.ix, F.or.setGroupProperty(PropertyInterface("Outer Radius", P)), F.os.setGroupProperty(PropertyInterface("Outer Roundness", P)), F.pt.setGroupProperty(PropertyInterface("Points", P)), F.p.setGroupProperty(PropertyInterface("Position", P)), F.r.setGroupProperty(PropertyInterface("Rotation", P)), u.ir && (F.ir.setGroupProperty(PropertyInterface("Inner Radius", P)), F.is.setGroupProperty(PropertyInterface("Inner Roundness", P))), Object.defineProperties(interfaceFunction, {
                                position: {
                                    get: ExpressionPropertyInterface(F.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(F.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(F.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(F.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(F.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(F.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(F.is)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), interfaceFunction.mn = u.mn, interfaceFunction
                        }

                        function rectInterfaceFactory(u, S, E) {
                            function interfaceFunction(S) {
                                return u.p.ix === S ? interfaceFunction.position : u.r.ix === S ? interfaceFunction.roundness : u.s.ix === S || "Size" === S || "ADBE Vector Rect Size" === S ? interfaceFunction.size : null
                            }
                            var P = propertyGroupFactory(interfaceFunction, E),
                                F = "tm" === S.sh.ty ? S.sh.prop : S.sh;
                            return interfaceFunction.propertyIndex = u.ix, F.p.setGroupProperty(PropertyInterface("Position", P)), F.s.setGroupProperty(PropertyInterface("Size", P)), F.r.setGroupProperty(PropertyInterface("Rotation", P)), Object.defineProperties(interfaceFunction, {
                                position: {
                                    get: ExpressionPropertyInterface(F.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(F.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(F.s)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), interfaceFunction.mn = u.mn, interfaceFunction
                        }

                        function roundedInterfaceFactory(u, S, E) {
                            function interfaceFunction(S) {
                                return u.r.ix === S || "Round Corners 1" === S ? interfaceFunction.radius : null
                            }
                            var P = propertyGroupFactory(interfaceFunction, E),
                                F = S;
                            return interfaceFunction.propertyIndex = u.ix, F.rd.setGroupProperty(PropertyInterface("Radius", P)), Object.defineProperties(interfaceFunction, {
                                radius: {
                                    get: ExpressionPropertyInterface(F.rd)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), interfaceFunction.mn = u.mn, interfaceFunction
                        }

                        function repeaterInterfaceFactory(u, S, E) {
                            function interfaceFunction(S) {
                                return u.c.ix === S || "Copies" === S ? interfaceFunction.copies : u.o.ix === S || "Offset" === S ? interfaceFunction.offset : null
                            }
                            var P = propertyGroupFactory(interfaceFunction, E),
                                F = S;
                            return interfaceFunction.propertyIndex = u.ix, F.c.setGroupProperty(PropertyInterface("Copies", P)), F.o.setGroupProperty(PropertyInterface("Offset", P)), Object.defineProperties(interfaceFunction, {
                                copies: {
                                    get: ExpressionPropertyInterface(F.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(F.o)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), interfaceFunction.mn = u.mn, interfaceFunction
                        }
                        return function(u, S, E) {
                            var P;

                            function _interfaceFunction(u) {
                                if ("number" == typeof u) return 0 === (u = void 0 === u ? 1 : u) ? E : P[u - 1];
                                for (var S = 0, F = P.length; S < F;) {
                                    if (P[S]._name === u) return P[S];
                                    S += 1
                                }
                                return null
                            }

                            function parentGroupWrapper() {
                                return E
                            }
                            return _interfaceFunction.propertyGroup = propertyGroupFactory(_interfaceFunction, parentGroupWrapper), P = iterateElements(u, S, _interfaceFunction.propertyGroup), _interfaceFunction.numProperties = P.length, _interfaceFunction._name = "Contents", _interfaceFunction
                        }
                    }(),
                    TextExpressionInterface = function() {
                        return function(u) {
                            var S;

                            function _thisLayerFunction(u) {
                                return "ADBE Text Document" === u ? _thisLayerFunction.sourceText : null
                            }
                            return Object.defineProperty(_thisLayerFunction, "sourceText", {
                                get: function() {
                                    u.textProperty.getValue();
                                    var E = u.textProperty.currentData.t;
                                    return S && E === S.value || ((S = new String(E)).value = E || new String(E), Object.defineProperty(S, "style", {
                                        get: function() {
                                            return {
                                                fillColor: u.textProperty.currentData.fc
                                            }
                                        }
                                    })), S
                                }
                            }), _thisLayerFunction
                        }
                    }();

                function _typeof(u) {
                    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var FootageInterface = function() {
                        var outlineInterfaceFactory = function(u) {
                                var S = "",
                                    E = u.getFootageData();

                                function searchProperty(u) {
                                    if (E[u]) return (S = u, E = E[u], "object" === _typeof(E)) ? searchProperty : E;
                                    var P = u.indexOf(S);
                                    return -1 !== P ? (E = E[parseInt(u.substr(P + S.length), 10)], "object" === _typeof(E)) ? searchProperty : E : ""
                                }
                                return function() {
                                    return S = "", E = u.getFootageData(), searchProperty
                                }
                            },
                            dataInterfaceFactory = function(u) {
                                function interfaceFunction(u) {
                                    return "Outline" === u ? interfaceFunction.outlineInterface() : null
                                }
                                return interfaceFunction._name = "Outline", interfaceFunction.outlineInterface = outlineInterfaceFactory(u), interfaceFunction
                            };
                        return function(u) {
                            function _interfaceFunction(u) {
                                return "Data" === u ? _interfaceFunction.dataInterface : null
                            }
                            return _interfaceFunction._name = "Data", _interfaceFunction.dataInterface = dataInterfaceFactory(u), _interfaceFunction
                        }
                    }(),
                    interfaces = {
                        layer: LayerExpressionInterface,
                        effects: EffectsExpressionInterface,
                        comp: CompExpressionInterface,
                        shape: ShapeExpressionInterface,
                        text: TextExpressionInterface,
                        footage: FootageInterface
                    };

                function getInterface(u) {
                    return interfaces[u] || null
                }
                var expressionHelpers = function() {
                    return {
                        searchExpressions: function(u, S, E) {
                            S.x && (E.k = !0, E.x = !0, E.initiateExpression = ExpressionManager.initiateExpression, E.effectsSequence.push(E.initiateExpression(u, S, E).bind(E)))
                        },
                        getSpeedAtTime: function(u) {
                            var S, E = -.01,
                                P = this.getValueAtTime(u),
                                F = this.getValueAtTime(u + E),
                                T = 0;
                            if (P.length) {
                                for (S = 0; S < P.length; S += 1) T += Math.pow(F[S] - P[S], 2);
                                T = 100 * Math.sqrt(T)
                            } else T = 0;
                            return T
                        },
                        getVelocityAtTime: function(u) {
                            if (void 0 !== this.vel) return this.vel;
                            var S, E, P = -.001,
                                F = this.getValueAtTime(u),
                                T = this.getValueAtTime(u + P);
                            if (F.length)
                                for (E = 0, S = createTypedArray("float32", F.length); E < F.length; E += 1) S[E] = (T[E] - F[E]) / P;
                            else S = (T - F) / P;
                            return S
                        },
                        getValueAtTime: function(u) {
                            return u *= this.elem.globalData.frameRate, (u -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < u ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(u, this._cachingAtTime), this._cachingAtTime.lastFrame = u), this._cachingAtTime.value
                        },
                        getStaticValueAtTime: function() {
                            return this.pv
                        },
                        setGroupProperty: function(u) {
                            this.propertyGroup = u
                        }
                    }
                }();

                function addPropertyDecorator() {
                    function loopOut(u, S, E) {
                        if (!this.k || !this.keyframes) return this.pv;
                        u = u ? u.toLowerCase() : "";
                        var P, F, T, D, M, I = this.comp.renderedFrame,
                            V = this.keyframes,
                            L = V[V.length - 1].t;
                        if (I <= L) return this.pv;
                        if (E ? (P = S ? Math.abs(L - this.elem.comp.globalData.frameRate * S) : Math.max(0, L - this.elem.data.ip), F = L - P) : ((!S || S > V.length - 1) && (S = V.length - 1), P = L - (F = V[V.length - 1 - S].t)), "pingpong" === u) {
                            if (Math.floor((I - F) / P) % 2 != 0) return this.getValueAtTime((P - (I - F) % P + F) / this.comp.globalData.frameRate, 0)
                        } else if ("offset" === u) {
                            var R = this.getValueAtTime(F / this.comp.globalData.frameRate, 0),
                                G = this.getValueAtTime(L / this.comp.globalData.frameRate, 0),
                                O = this.getValueAtTime(((I - F) % P + F) / this.comp.globalData.frameRate, 0),
                                N = Math.floor((I - F) / P);
                            if (this.pv.length) {
                                for (T = 0, D = (M = Array(R.length)).length; T < D; T += 1) M[T] = (G[T] - R[T]) * N + O[T];
                                return M
                            }
                            return (G - R) * N + O
                        } else if ("continue" === u) {
                            var H = this.getValueAtTime(L / this.comp.globalData.frameRate, 0),
                                W = this.getValueAtTime((L - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (T = 0, D = (M = Array(H.length)).length; T < D; T += 1) M[T] = H[T] + (H[T] - W[T]) * ((I - L) / this.comp.globalData.frameRate) / 5e-4;
                                return M
                            }
                            return H + (H - W) * ((I - L) / .001)
                        }
                        return this.getValueAtTime(((I - F) % P + F) / this.comp.globalData.frameRate, 0)
                    }

                    function loopIn(u, S, E) {
                        if (!this.k) return this.pv;
                        u = u ? u.toLowerCase() : "";
                        var P, F, T, D, M, I = this.comp.renderedFrame,
                            V = this.keyframes,
                            L = V[0].t;
                        if (I >= L) return this.pv;
                        if (E ? (P = S ? Math.abs(this.elem.comp.globalData.frameRate * S) : Math.max(0, this.elem.data.op - L), F = L + P) : ((!S || S > V.length - 1) && (S = V.length - 1), P = (F = V[S].t) - L), "pingpong" === u) {
                            if (Math.floor((L - I) / P) % 2 == 0) return this.getValueAtTime(((L - I) % P + L) / this.comp.globalData.frameRate, 0)
                        } else if ("offset" === u) {
                            var R = this.getValueAtTime(L / this.comp.globalData.frameRate, 0),
                                G = this.getValueAtTime(F / this.comp.globalData.frameRate, 0),
                                O = this.getValueAtTime((P - (L - I) % P + L) / this.comp.globalData.frameRate, 0),
                                N = Math.floor((L - I) / P) + 1;
                            if (this.pv.length) {
                                for (T = 0, D = (M = Array(R.length)).length; T < D; T += 1) M[T] = O[T] - (G[T] - R[T]) * N;
                                return M
                            }
                            return O - (G - R) * N
                        } else if ("continue" === u) {
                            var H = this.getValueAtTime(L / this.comp.globalData.frameRate, 0),
                                W = this.getValueAtTime((L + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (T = 0, D = (M = Array(H.length)).length; T < D; T += 1) M[T] = H[T] + (H[T] - W[T]) * (L - I) / .001;
                                return M
                            }
                            return H + (H - W) * (L - I) / .001
                        }
                        return this.getValueAtTime((P - ((L - I) % P + L)) / this.comp.globalData.frameRate, 0)
                    }

                    function smooth(u, S) {
                        if (!this.k || (u = .5 * (u || .4), (S = Math.floor(S || 5)) <= 1)) return this.pv;
                        var E, P, F = this.comp.renderedFrame / this.comp.globalData.frameRate,
                            T = F - u,
                            D = F + u,
                            M = S > 1 ? (D - T) / (S - 1) : 1,
                            I = 0,
                            V = 0;
                        for (E = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; I < S;) {
                            if (P = this.getValueAtTime(T + I * M), this.pv.length)
                                for (V = 0; V < this.pv.length; V += 1) E[V] += P[V];
                            else E += P;
                            I += 1
                        }
                        if (this.pv.length)
                            for (V = 0; V < this.pv.length; V += 1) E[V] /= S;
                        else E /= S;
                        return E
                    }

                    function getTransformValueAtTime(u) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {
                            v: new Matrix
                        });
                        var S = this._transformCachingAtTime.v;
                        if (S.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                            var E = this.a.getValueAtTime(u);
                            S.translate(-E[0] * this.a.mult, -E[1] * this.a.mult, E[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var P = this.s.getValueAtTime(u);
                            S.scale(P[0] * this.s.mult, P[1] * this.s.mult, P[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var F = this.sk.getValueAtTime(u),
                                T = this.sa.getValueAtTime(u);
                            S.skewFromAxis(-F * this.sk.mult, T * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var D = this.r.getValueAtTime(u);
                            S.rotate(-D * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var M = this.rz.getValueAtTime(u),
                                I = this.ry.getValueAtTime(u),
                                V = this.rx.getValueAtTime(u),
                                L = this.or.getValueAtTime(u);
                            S.rotateZ(-M * this.rz.mult).rotateY(I * this.ry.mult).rotateX(V * this.rx.mult).rotateZ(-L[2] * this.or.mult).rotateY(L[1] * this.or.mult).rotateX(L[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var R = this.px.getValueAtTime(u),
                                G = this.py.getValueAtTime(u);
                            if (this.data.p.z) {
                                var O = this.pz.getValueAtTime(u);
                                S.translate(R * this.px.mult, G * this.py.mult, -O * this.pz.mult)
                            } else S.translate(R * this.px.mult, G * this.py.mult, 0)
                        } else {
                            var N = this.p.getValueAtTime(u);
                            S.translate(N[0] * this.p.mult, N[1] * this.p.mult, -N[2] * this.p.mult)
                        }
                        return S
                    }

                    function getTransformStaticValueAtTime() {
                        return this.v.clone(new Matrix)
                    }
                    var u = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function(S, E, P) {
                        var F = u(S, E, P);
                        return F.dynamicProperties.length ? F.getValueAtTime = getTransformValueAtTime.bind(F) : F.getValueAtTime = getTransformStaticValueAtTime.bind(F), F.setGroupProperty = expressionHelpers.setGroupProperty, F
                    };
                    var S = PropertyFactory.getProp;

                    function getShapeValueAtTime(u) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), u *= this.elem.globalData.frameRate, (u -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < u ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = u, this.interpolateShape(u, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }
                    PropertyFactory.getProp = function(u, E, P, F, T) {
                        var D = S(u, E, P, F, T);
                        D.kf ? D.getValueAtTime = expressionHelpers.getValueAtTime.bind(D) : D.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(D), D.setGroupProperty = expressionHelpers.setGroupProperty, D.loopOut = loopOut, D.loopIn = loopIn, D.smooth = smooth, D.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(D), D.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(D), D.numKeys = 1 === E.a ? E.k.length : 0, D.propertyIndex = E.ix;
                        var M = 0;
                        return 0 !== P && (M = createTypedArray("float32", 1 === E.a ? E.k[0].s.length : E.k.length)), D._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: M
                        }, expressionHelpers.searchExpressions(u, E, D), D.k && T.addDynamicProperty(D), D
                    };
                    var E = ShapePropertyFactory.getConstructorFunction(),
                        P = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function ShapeExpressions() {}
                    ShapeExpressions.prototype = {
                        vertices: function(u, S) {
                            this.k && this.getValue();
                            var E, P = this.v;
                            void 0 !== S && (P = this.getValueAtTime(S, 0));
                            var F = P._length,
                                T = P[u],
                                D = P.v,
                                M = createSizedArray(F);
                            for (E = 0; E < F; E += 1) "i" === u || "o" === u ? M[E] = [T[E][0] - D[E][0], T[E][1] - D[E][1]] : M[E] = [T[E][0], T[E][1]];
                            return M
                        },
                        points: function(u) {
                            return this.vertices("v", u)
                        },
                        inTangents: function(u) {
                            return this.vertices("i", u)
                        },
                        outTangents: function(u) {
                            return this.vertices("o", u)
                        },
                        isClosed: function() {
                            return this.v.c
                        },
                        pointOnPath: function(u, S) {
                            var E, P = this.v;
                            void 0 !== S && (P = this.getValueAtTime(S, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(P));
                            for (var F = this._segmentsLength, T = F.lengths, D = F.totalLength * u, M = 0, I = T.length, V = 0; M < I;) {
                                if (V + T[M].addedLength > D) {
                                    var L = M,
                                        R = P.c && M === I - 1 ? 0 : M + 1,
                                        G = (D - V) / T[M].addedLength;
                                    E = bez.getPointInSegment(P.v[L], P.v[R], P.o[L], P.i[R], G, T[M]);
                                    break
                                }
                                V += T[M].addedLength, M += 1
                            }
                            return E || (E = P.c ? [P.v[0][0], P.v[0][1]] : [P.v[P._length - 1][0], P.v[P._length - 1][1]]), E
                        },
                        vectorOnPath: function(u, S, E) {
                            1 == u ? u = this.v.c : 0 == u && (u = .999);
                            var P = this.pointOnPath(u, S),
                                F = this.pointOnPath(u + .001, S),
                                T = F[0] - P[0],
                                D = F[1] - P[1],
                                M = Math.sqrt(Math.pow(T, 2) + Math.pow(D, 2));
                            return 0 === M ? [0, 0] : "tangent" === E ? [T / M, D / M] : [-D / M, T / M]
                        },
                        tangentOnPath: function(u, S) {
                            return this.vectorOnPath(u, S, "tangent")
                        },
                        normalOnPath: function(u, S) {
                            return this.vectorOnPath(u, S, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([ShapeExpressions], E), extendPrototype([ShapeExpressions], P), P.prototype.getValueAtTime = getShapeValueAtTime, P.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var F = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function(u, S, E, P, T) {
                        var D = F(u, S, E, P, T);
                        return D.propertyIndex = S.ix, D.lock = !1, 3 === E ? expressionHelpers.searchExpressions(u, S.pt, D) : 4 === E && expressionHelpers.searchExpressions(u, S.ks, D), D.k && u.addDynamicProperty(D), D
                    }
                }

                function initialize$1() {
                    addPropertyDecorator()
                }

                function addDecorator() {
                    function searchExpressions() {
                        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                    }
                    TextProperty.prototype.getExpressionValue = function(u, S) {
                        var E = this.calculateExpression(S);
                        if (u.t !== E) {
                            var P = {};
                            return this.copyData(P, u), P.t = E.toString(), P.__complete = !1, P
                        }
                        return u
                    }, TextProperty.prototype.searchProperty = function() {
                        var u = this.searchKeyframes(),
                            S = this.searchExpressions();
                        return this.kf = u || S, this.kf
                    }, TextProperty.prototype.searchExpressions = searchExpressions
                }

                function initialize() {
                    addDecorator()
                }

                function SVGComposableEffect() {}
                SVGComposableEffect.prototype = {
                    createMergeNode: function(u, S) {
                        var E, P, F = createNS("feMerge");
                        for (F.setAttribute("result", u), P = 0; P < S.length; P += 1)(E = createNS("feMergeNode")).setAttribute("in", S[P]), F.appendChild(E), F.appendChild(E);
                        return F
                    }
                };
                var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

                function SVGTintFilter(u, S, E, P, F) {
                    this.filterManager = S;
                    var T = createNS("feColorMatrix");
                    T.setAttribute("type", "matrix"), T.setAttribute("color-interpolation-filters", "linearRGB"), T.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = T, T.setAttribute("result", P + "_tint_1"), u.appendChild(T), (T = createNS("feColorMatrix")).setAttribute("type", "matrix"), T.setAttribute("color-interpolation-filters", "sRGB"), T.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), T.setAttribute("result", P + "_tint_2"), u.appendChild(T), this.matrixFilter = T;
                    var D = this.createMergeNode(P, [F, P + "_tint_1", P + "_tint_2"]);
                    u.appendChild(D)
                }

                function SVGFillFilter(u, S, E, P) {
                    this.filterManager = S;
                    var F = createNS("feColorMatrix");
                    F.setAttribute("type", "matrix"), F.setAttribute("color-interpolation-filters", "sRGB"), F.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), F.setAttribute("result", P), u.appendChild(F), this.matrixFilter = F
                }

                function SVGStrokeEffect(u, S, E) {
                    this.initialized = !1, this.filterManager = S, this.elem = E, this.paths = []
                }

                function SVGTritoneFilter(u, S, E, P) {
                    this.filterManager = S;
                    var F = createNS("feColorMatrix");
                    F.setAttribute("type", "matrix"), F.setAttribute("color-interpolation-filters", "linearRGB"), F.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), u.appendChild(F);
                    var T = createNS("feComponentTransfer");
                    T.setAttribute("color-interpolation-filters", "sRGB"), T.setAttribute("result", P), this.matrixFilter = T;
                    var D = createNS("feFuncR");
                    D.setAttribute("type", "table"), T.appendChild(D), this.feFuncR = D;
                    var M = createNS("feFuncG");
                    M.setAttribute("type", "table"), T.appendChild(M), this.feFuncG = M;
                    var I = createNS("feFuncB");
                    I.setAttribute("type", "table"), T.appendChild(I), this.feFuncB = I, u.appendChild(T)
                }

                function SVGProLevelsFilter(u, S, E, P) {
                    this.filterManager = S;
                    var F = this.filterManager.effectElements,
                        T = createNS("feComponentTransfer");
                    (F[10].p.k || 0 !== F[10].p.v || F[11].p.k || 1 !== F[11].p.v || F[12].p.k || 1 !== F[12].p.v || F[13].p.k || 0 !== F[13].p.v || F[14].p.k || 1 !== F[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", T)), (F[17].p.k || 0 !== F[17].p.v || F[18].p.k || 1 !== F[18].p.v || F[19].p.k || 1 !== F[19].p.v || F[20].p.k || 0 !== F[20].p.v || F[21].p.k || 1 !== F[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", T)), (F[24].p.k || 0 !== F[24].p.v || F[25].p.k || 1 !== F[25].p.v || F[26].p.k || 1 !== F[26].p.v || F[27].p.k || 0 !== F[27].p.v || F[28].p.k || 1 !== F[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", T)), (F[31].p.k || 0 !== F[31].p.v || F[32].p.k || 1 !== F[32].p.v || F[33].p.k || 1 !== F[33].p.v || F[34].p.k || 0 !== F[34].p.v || F[35].p.k || 1 !== F[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", T)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (T.setAttribute("color-interpolation-filters", "sRGB"), u.appendChild(T)), (F[3].p.k || 0 !== F[3].p.v || F[4].p.k || 1 !== F[4].p.v || F[5].p.k || 1 !== F[5].p.v || F[6].p.k || 0 !== F[6].p.v || F[7].p.k || 1 !== F[7].p.v) && ((T = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), T.setAttribute("result", P), u.appendChild(T), this.feFuncRComposed = this.createFeFunc("feFuncR", T), this.feFuncGComposed = this.createFeFunc("feFuncG", T), this.feFuncBComposed = this.createFeFunc("feFuncB", T))
                }

                function SVGDropShadowEffect(u, S, E, P, F) {
                    var T = S.container.globalData.renderConfig.filterSize,
                        D = S.data.fs || T;
                    u.setAttribute("x", D.x || T.x), u.setAttribute("y", D.y || T.y), u.setAttribute("width", D.width || T.width), u.setAttribute("height", D.height || T.height), this.filterManager = S;
                    var M = createNS("feGaussianBlur");
                    M.setAttribute("in", "SourceAlpha"), M.setAttribute("result", P + "_drop_shadow_1"), M.setAttribute("stdDeviation", "0"), this.feGaussianBlur = M, u.appendChild(M);
                    var I = createNS("feOffset");
                    I.setAttribute("dx", "25"), I.setAttribute("dy", "0"), I.setAttribute("in", P + "_drop_shadow_1"), I.setAttribute("result", P + "_drop_shadow_2"), this.feOffset = I, u.appendChild(I);
                    var V = createNS("feFlood");
                    V.setAttribute("flood-color", "#00ff00"), V.setAttribute("flood-opacity", "1"), V.setAttribute("result", P + "_drop_shadow_3"), this.feFlood = V, u.appendChild(V);
                    var L = createNS("feComposite");
                    L.setAttribute("in", P + "_drop_shadow_3"), L.setAttribute("in2", P + "_drop_shadow_2"), L.setAttribute("operator", "in"), L.setAttribute("result", P + "_drop_shadow_4"), u.appendChild(L);
                    var R = this.createMergeNode(P, [P + "_drop_shadow_4", F]);
                    u.appendChild(R)
                }
                extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var S = this.filterManager.effectElements[0].p.v,
                            E = this.filterManager.effectElements[1].p.v,
                            P = this.filterManager.effectElements[2].p.v / 100;
                        this.linearFilter.setAttribute("values", linearFilterValue + " " + P + " 0"), this.matrixFilter.setAttribute("values", E[0] - S[0] + " 0 0 0 " + S[0] + " " + (E[1] - S[1]) + " 0 0 0 " + S[1] + " " + (E[2] - S[2]) + " 0 0 0 " + S[2] + " 0 0 0 1 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var S = this.filterManager.effectElements[2].p.v,
                            E = this.filterManager.effectElements[6].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + S[0] + " 0 0 0 0 " + S[1] + " 0 0 0 0 " + S[2] + " 0 0 0 " + E + " 0")
                    }
                }, SVGStrokeEffect.prototype.initialize = function() {
                    var u, S, E, P, F = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (P = this.elem.maskManager.masksProperties.length, E = 0) : P = (E = this.filterManager.effectElements[0].p.v - 1) + 1, (S = createNS("g")).setAttribute("fill", "none"), S.setAttribute("stroke-linecap", "round"), S.setAttribute("stroke-dashoffset", 1); E < P; E += 1) u = createNS("path"), S.appendChild(u), this.paths.push({
                        p: u,
                        m: E
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var T = createNS("mask"),
                            D = createElementID();
                        T.setAttribute("id", D), T.setAttribute("mask-type", "alpha"), T.appendChild(S), this.elem.globalData.defs.appendChild(T);
                        var M = createNS("g");
                        for (M.setAttribute("mask", "url(" + getLocationHref() + "#" + D + ")"); F[0];) M.appendChild(F[0]);
                        this.elem.layerElement.appendChild(M), this.masker = T, S.setAttribute("stroke", "#fff")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v)
                            for (F = this.elem.layerElement.children || this.elem.layerElement.childNodes; F.length;) this.elem.layerElement.removeChild(F[0]);
                        this.elem.layerElement.appendChild(S), this.elem.layerElement.removeAttribute("mask"), S.setAttribute("stroke", "#fff")
                    }
                    this.initialized = !0, this.pathMasker = S
                }, SVGStrokeEffect.prototype.renderFrame = function(u) {
                    this.initialized || this.initialize();
                    var S = this.paths.length;
                    for (E = 0; E < S; E += 1)
                        if (-1 !== this.paths[E].m && (P = this.elem.maskManager.viewData[this.paths[E].m], F = this.paths[E].p, (u || this.filterManager._mdf || P.prop._mdf) && F.setAttribute("d", P.lastPath), u || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || P.prop._mdf)) {
                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                var E, P, F, T, D, M = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    I = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    V = F.getTotalLength();
                                T = "0 0 0 " + V * M + " ";
                                var L = Math.floor(V * (I - M) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01));
                                for (D = 0; D < L; D += 1) T += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                T += "0 " + 10 * V + " 0 0"
                            } else T = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                            F.setAttribute("stroke-dasharray", T)
                        }
                    if ((u || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (u || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (u || this.filterManager.effectElements[3].p._mdf)) {
                        var R = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * R[0]) + "," + bmFloor(255 * R[1]) + "," + bmFloor(255 * R[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var S = this.filterManager.effectElements[0].p.v,
                            E = this.filterManager.effectElements[1].p.v,
                            P = this.filterManager.effectElements[2].p.v,
                            F = P[0] + " " + E[0] + " " + S[0],
                            T = P[1] + " " + E[1] + " " + S[1],
                            D = P[2] + " " + E[2] + " " + S[2];
                        this.feFuncR.setAttribute("tableValues", F), this.feFuncG.setAttribute("tableValues", T), this.feFuncB.setAttribute("tableValues", D)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function(u, S) {
                    var E = createNS(u);
                    return E.setAttribute("type", "table"), S.appendChild(E), E
                }, SVGProLevelsFilter.prototype.getTableValue = function(u, S, E, P, F) {
                    for (var T, D, M = 0, I = 256, V = Math.min(u, S), L = Math.max(u, S), R = Array.call(null, {
                            length: 256
                        }), G = 0, O = F - P, N = S - u; M <= 256;) D = (T = M / 256) <= V ? N < 0 ? F : P : T >= L ? N < 0 ? P : F : P + O * Math.pow((T - u) / N, 1 / E), R[G] = D, G += 1, M += 256 / (I - 1);
                    return R.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var S, E = this.filterManager.effectElements;
                        this.feFuncRComposed && (u || E[3].p._mdf || E[4].p._mdf || E[5].p._mdf || E[6].p._mdf || E[7].p._mdf) && (S = this.getTableValue(E[3].p.v, E[4].p.v, E[5].p.v, E[6].p.v, E[7].p.v), this.feFuncRComposed.setAttribute("tableValues", S), this.feFuncGComposed.setAttribute("tableValues", S), this.feFuncBComposed.setAttribute("tableValues", S)), this.feFuncR && (u || E[10].p._mdf || E[11].p._mdf || E[12].p._mdf || E[13].p._mdf || E[14].p._mdf) && (S = this.getTableValue(E[10].p.v, E[11].p.v, E[12].p.v, E[13].p.v, E[14].p.v), this.feFuncR.setAttribute("tableValues", S)), this.feFuncG && (u || E[17].p._mdf || E[18].p._mdf || E[19].p._mdf || E[20].p._mdf || E[21].p._mdf) && (S = this.getTableValue(E[17].p.v, E[18].p.v, E[19].p.v, E[20].p.v, E[21].p.v), this.feFuncG.setAttribute("tableValues", S)), this.feFuncB && (u || E[24].p._mdf || E[25].p._mdf || E[26].p._mdf || E[27].p._mdf || E[28].p._mdf) && (S = this.getTableValue(E[24].p.v, E[25].p.v, E[26].p.v, E[27].p.v, E[28].p.v), this.feFuncB.setAttribute("tableValues", S)), this.feFuncA && (u || E[31].p._mdf || E[32].p._mdf || E[33].p._mdf || E[34].p._mdf || E[35].p._mdf) && (S = this.getTableValue(E[31].p.v, E[32].p.v, E[33].p.v, E[34].p.v, E[35].p.v), this.feFuncA.setAttribute("tableValues", S))
                    }
                }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        if ((u || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), u || this.filterManager.effectElements[0].p._mdf) {
                            var S = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * S[0]), Math.round(255 * S[1]), Math.round(255 * S[2])))
                        }
                        if ((u || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), u || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var E = this.filterManager.effectElements[3].p.v,
                                P = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                F = E * Math.cos(P),
                                T = E * Math.sin(P);
                            this.feOffset.setAttribute("dx", F), this.feOffset.setAttribute("dy", T)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(u, S, E) {
                    this.initialized = !1, this.filterManager = S, this.filterElem = u, this.elem = E, E.matteElement = createNS("g"), E.matteElement.appendChild(E.layerElement), E.matteElement.appendChild(E.transformedElement), E.baseElement = E.matteElement
                }

                function SVGGaussianBlurEffect(u, S, E, P) {
                    u.setAttribute("x", "-100%"), u.setAttribute("y", "-100%"), u.setAttribute("width", "300%"), u.setAttribute("height", "300%"), this.filterManager = S;
                    var F = createNS("feGaussianBlur");
                    F.setAttribute("result", P), u.appendChild(F), this.feGaussianBlur = F
                }

                function TransformEffect() {}

                function SVGTransformEffect(u, S) {
                    this.init(S)
                }

                function CVTransformEffect(u) {
                    this.init(u)
                }
                return SVGMatte3Effect.prototype.findSymbol = function(u) {
                    for (var S = 0, E = _svgMatteSymbols.length; S < E;) {
                        if (_svgMatteSymbols[S] === u) return _svgMatteSymbols[S];
                        S += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function(u, S) {
                    var E, P = u.layerElement.parentNode;
                    if (P) {
                        for (var F = P.children, T = 0, D = F.length; T < D && F[T] !== u.layerElement;) T += 1;
                        T <= D - 2 && (E = F[T + 1]);
                        var M = createNS("use");
                        M.setAttribute("href", "#" + S), E ? P.insertBefore(M, E) : P.appendChild(M)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function(u, S) {
                    if (!this.findSymbol(S)) {
                        var E = createElementID(),
                            P = createNS("mask");
                        P.setAttribute("id", S.layerId), P.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(S);
                        var F = u.globalData.defs;
                        F.appendChild(P);
                        var T = createNS("symbol");
                        T.setAttribute("id", E), this.replaceInParent(S, E), T.appendChild(S.layerElement), F.appendChild(T);
                        var D = createNS("use");
                        D.setAttribute("href", "#" + E), P.appendChild(D), S.data.hd = !1, S.show()
                    }
                    u.setMatte(S.layerId)
                }, SVGMatte3Effect.prototype.initialize = function() {
                    for (var u = this.filterManager.effectElements[0].p.v, S = this.elem.comp.elements, E = 0, P = S.length; E < P;) S[E] && S[E].data.ind === u && this.setElementAsMask(this.elem, S[E]), E += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function() {
                    this.initialized || this.initialize()
                }, SVGGaussianBlurEffect.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var S = .3,
                            E = this.filterManager.effectElements[0].p.v * S,
                            P = this.filterManager.effectElements[1].p.v,
                            F = 3 == P ? 0 : E,
                            T = 2 == P ? 0 : E;
                        this.feGaussianBlur.setAttribute("stdDeviation", F + " " + T);
                        var D = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                        this.feGaussianBlur.setAttribute("edgeMode", D)
                    }
                }, TransformEffect.prototype.init = function(u) {
                    this.effectsManager = u, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
                }, TransformEffect.prototype.renderFrame = function(u) {
                    if (this._opMdf = !1, this._mdf = !1, u || this.effectsManager._mdf) {
                        var S = this.effectsManager.effectElements,
                            E = S[0].p.v,
                            P = S[1].p.v,
                            F = 1 === S[2].p.v,
                            T = S[3].p.v,
                            D = F ? T : S[4].p.v,
                            M = S[5].p.v,
                            I = S[6].p.v,
                            V = S[7].p.v;
                        this.matrix.reset(), this.matrix.translate(-E[0], -E[1], E[2]), this.matrix.scale(.01 * D, .01 * T, 1), this.matrix.rotate(-V * degToRads), this.matrix.skewFromAxis(-M * degToRads, (I + 90) * degToRads), this.matrix.translate(P[0], P[1], 0), this._mdf = !0, this.opacity !== S[8].p.v && (this.opacity = S[8].p.v, this._opMdf = !0)
                    }
                }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
            })
        }
    }
]);