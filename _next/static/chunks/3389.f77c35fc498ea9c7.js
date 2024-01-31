(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3389], {
        81431: function(t, e, r) {
            "use strict";

            function getBrowerCrypto() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function getSubtleCrypto() {
                let t = getBrowerCrypto();
                return t.subtle || t.webkitSubtle
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = getBrowerCrypto, e.getSubtleCrypto = getSubtleCrypto, e.isBrowserCryptoAvailable = function() {
                return !!getBrowerCrypto() && !!getSubtleCrypto()
            }
        },
        51164: function(t, e, r) {
            "use strict";
            var n = r(25566);

            function isReactNative() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function isNode() {
                return void 0 !== n && void 0 !== n.versions && void 0 !== n.versions.node
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = isReactNative, e.isNode = isNode, e.isBrowser = function() {
                return !isReactNative() && !isNode()
            }
        },
        36014: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            let n = r(75031);
            n.__exportStar(r(81431), e), n.__exportStar(r(51164), e)
        },
        75031: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
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
            var extendStatics = function(t, e) {
                return (extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
            };

            function __extends(t, e) {
                function __() {
                    this.constructor = t
                }
                extendStatics(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };

            function __rest(t, e) {
                var r = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                return r
            }

            function __decorate(t, e, r, n) {
                var o, s = arguments.length,
                    i = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, n);
                else
                    for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
                return s > 3 && i && Object.defineProperty(e, r, i), i
            }

            function __param(t, e) {
                return function(r, n) {
                    e(r, n, t)
                }
            }

            function __metadata(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function __awaiter(t, e, r, n) {
                return new(r || (r = Promise))(function(o, s) {
                    function fulfilled(t) {
                        try {
                            step(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function rejected(t) {
                        try {
                            step(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function step(t) {
                        var e;
                        t.done ? o(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                            t(e)
                        })).then(fulfilled, rejected)
                    }
                    step((n = n.apply(t, e || [])).next())
                })
            }

            function __generator(t, e) {
                var r, n, o, s, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function verb(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                                switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            i.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && i.label < o[1]) {
                                            i.label = o[1], o = s;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(s);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                s = e.call(t, i)
                            } catch (t) {
                                s = [6, t], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function __createBinding(t, e, r, n) {
                void 0 === n && (n = r), t[n] = e[r]
            }

            function __exportStar(t, e) {
                for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r])
            }

            function __values(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
                throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var n, o, s = r.call(t),
                    i = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = s.next()).done;) i.push(n.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return i
            }

            function __spread() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
                return t
            }

            function __spreadArrays() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < r; e++)
                    for (var s = arguments[e], i = 0, a = s.length; i < a; i++, o++) n[o] = s[i];
                return n
            }

            function __await(t) {
                return this instanceof __await ? (this.v = t, this) : new __await(t)
            }

            function __asyncGenerator(t, e, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(t, e || []),
                    s = [];
                return n = {}, verb("next"), verb("throw"), verb("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function verb(t) {
                    o[t] && (n[t] = function(e) {
                        return new Promise(function(r, n) {
                            s.push([t, e, r, n]) > 1 || resume(t, e)
                        })
                    })
                }

                function resume(t, e) {
                    try {
                        var r;
                        (r = o[t](e)).value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(s[0][2], r)
                    } catch (t) {
                        settle(s[0][3], t)
                    }
                }

                function fulfill(t) {
                    resume("next", t)
                }

                function reject(t) {
                    resume("throw", t)
                }

                function settle(t, e) {
                    t(e), s.shift(), s.length && resume(s[0][0], s[0][1])
                }
            }

            function __asyncDelegator(t) {
                var e, r;
                return e = {}, verb("next"), verb("throw", function(t) {
                    throw t
                }), verb("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function verb(n, o) {
                    e[n] = t[n] ? function(e) {
                        return (r = !r) ? {
                            value: __await(t[n](e)),
                            done: "return" === n
                        } : o ? o(e) : e
                    } : o
                }
            }

            function __asyncValues(t) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var e, r = t[Symbol.asyncIterator];
                return r ? r.call(t) : (t = __values(t), e = {}, verb("next"), verb("throw"), verb("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function verb(r) {
                    e[r] = t[r] && function(e) {
                        return new Promise(function(n, o) {
                            ! function(t, e, r, n) {
                                Promise.resolve(n).then(function(e) {
                                    t({
                                        value: e,
                                        done: r
                                    })
                                }, e)
                            }(n, o, (e = t[r](e)).done, e.value)
                        })
                    }
                }
            }

            function __makeTemplateObject(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }

            function __importStar(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }

            function __importDefault(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function __classPrivateFieldGet(t, e) {
                if (!e.has(t)) throw TypeError("attempted to get private field on non-instance");
                return e.get(t)
            }

            function __classPrivateFieldSet(t, e, r) {
                if (!e.has(t)) throw TypeError("attempted to set private field on non-instance");
                return e.set(t, r), r
            }
        },
        16e3: function(t, e, r) {
            "use strict";
            r.d(e, {
                k: function() {
                    return HttpConnection
                },
                Z: function() {
                    return u
                }
            });
            var n = r(512),
                o = r(69719),
                s = r.n(o),
                i = r(43283),
                a = r(53620);
            let c = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            let HttpConnection = class HttpConnection {
                constructor(t, e = !1) {
                    if (this.url = t, this.disableProviderPing = e, this.events = new n.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, a.isHttpUrl)(t)) throw Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    this.url = t, this.disableProviderPing = e
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open(t = this.url) {
                    await this.register(t)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(t, e) {
                    this.isAvailable || await this.register();
                    try {
                        let e = (0, i.u)(t),
                            r = await s()(this.url, Object.assign(Object.assign({}, c), {
                                body: e
                            })),
                            n = await r.json();
                        this.onPayload({
                            data: n
                        })
                    } catch (e) {
                        this.onError(t.id, e)
                    }
                }
                async register(t = this.url) {
                    if (!(0, a.isHttpUrl)(t)) throw Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    if (this.registering) {
                        let t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((t, e) => {
                            this.events.once("register_error", t => {
                                this.resetMaxListeners(), e(t)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return e(Error("HTTP connection is missing or invalid"));
                                t()
                            })
                        })
                    }
                    this.url = t, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let e = (0, i.u)({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await s()(t, Object.assign(Object.assign({}, c), {
                                body: e
                            }))
                        }
                        this.onOpen()
                    } catch (e) {
                        let t = this.parseError(e);
                        throw this.events.emit("register_error", t), this.onClose(), t
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(t) {
                    if (void 0 === t.data) return;
                    let e = "string" == typeof t.data ? (0, i.D)(t.data) : t.data;
                    this.events.emit("payload", e)
                }
                onError(t, e) {
                    let r = this.parseError(e),
                        n = r.message || r.toString(),
                        o = (0, a.formatJsonRpcError)(t, n);
                    this.events.emit("payload", o)
                }
                parseError(t, e = this.url) {
                    return (0, a.parseConnectionError)(t, e, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            };
            var u = HttpConnection
        },
        69719: function(t, e) {
            var r = "undefined" != typeof self ? self : this,
                n = function() {
                    function F() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return F.prototype = r, new F
                }();
            (function(t) {
                var e = {
                    searchParams: "URLSearchParams" in n,
                    iterable: "Symbol" in n && "iterator" in Symbol,
                    blob: "FileReader" in n && "Blob" in n && function() {
                        try {
                            return new Blob, !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in n,
                    arrayBuffer: "ArrayBuffer" in n
                };
                if (e.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    o = ArrayBuffer.isView || function(t) {
                        return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                    };

                function normalizeName(t) {
                    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }

                function normalizeValue(t) {
                    return "string" != typeof t && (t = String(t)), t
                }

                function iteratorFor(t) {
                    var r = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return e.iterable && (r[Symbol.iterator] = function() {
                        return r
                    }), r
                }

                function Headers(t) {
                    this.map = {}, t instanceof Headers ? t.forEach(function(t, e) {
                        this.append(e, t)
                    }, this) : Array.isArray(t) ? t.forEach(function(t) {
                        this.append(t[0], t[1])
                    }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                        this.append(e, t[e])
                    }, this)
                }

                function consumed(t) {
                    if (t.bodyUsed) return Promise.reject(TypeError("Already read"));
                    t.bodyUsed = !0
                }

                function fileReaderReady(t) {
                    return new Promise(function(e, r) {
                        t.onload = function() {
                            e(t.result)
                        }, t.onerror = function() {
                            r(t.error)
                        }
                    })
                }

                function readBlobAsArrayBuffer(t) {
                    var e = new FileReader,
                        r = fileReaderReady(e);
                    return e.readAsArrayBuffer(t), r
                }

                function bufferClone(t) {
                    if (t.slice) return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)), e.buffer
                }

                function Body() {
                    return this.bodyUsed = !1, this._initBody = function(t) {
                        if (this._bodyInit = t, t) {
                            if ("string" == typeof t) this._bodyText = t;
                            else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                            else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                            else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                            else {
                                var r;
                                e.arrayBuffer && e.blob && (r = t) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = bufferClone(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : e.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || o(t)) ? this._bodyArrayBuffer = bufferClone(t) : this._bodyText = t = Object.prototype.toString.call(t)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, e.blob && (this.blob = function() {
                        var t = consumed(this);
                        if (t) return t;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer)
                    }), this.text = function() {
                        var t, e, r, n = consumed(this);
                        if (n) return n;
                        if (this._bodyBlob) return t = this._bodyBlob, r = fileReaderReady(e = new FileReader), e.readAsText(t), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                            for (var e = new Uint8Array(t), r = Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                            return r.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, e.formData && (this.formData = function() {
                        return this.text().then(decode)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                Headers.prototype.append = function(t, e) {
                    t = normalizeName(t), e = normalizeValue(e);
                    var r = this.map[t];
                    this.map[t] = r ? r + ", " + e : e
                }, Headers.prototype.delete = function(t) {
                    delete this.map[normalizeName(t)]
                }, Headers.prototype.get = function(t) {
                    return t = normalizeName(t), this.has(t) ? this.map[t] : null
                }, Headers.prototype.has = function(t) {
                    return this.map.hasOwnProperty(normalizeName(t))
                }, Headers.prototype.set = function(t, e) {
                    this.map[normalizeName(t)] = normalizeValue(e)
                }, Headers.prototype.forEach = function(t, e) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                }, Headers.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(e, r) {
                        t.push(r)
                    }), iteratorFor(t)
                }, Headers.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(e) {
                        t.push(e)
                    }), iteratorFor(t)
                }, Headers.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(e, r) {
                        t.push([r, e])
                    }), iteratorFor(t)
                }, e.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
                var s = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function Request(t, e) {
                    var r, n, o = (e = e || {}).body;
                    if (t instanceof Request) {
                        if (t.bodyUsed) throw TypeError("Already read");
                        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new Headers(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
                    } else this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "same-origin", (e.headers || !this.headers) && (this.headers = new Headers(e.headers)), this.method = (n = (r = e.method || this.method || "GET").toUpperCase(), s.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(o)
                }

                function decode(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach(function(t) {
                        if (t) {
                            var r = t.split("="),
                                n = r.shift().replace(/\+/g, " "),
                                o = r.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(n), decodeURIComponent(o))
                        }
                    }), e
                }

                function Response(t, e) {
                    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new Headers(e.headers), this.url = e.url || "", this._initBody(t)
                }
                Request.prototype.clone = function() {
                    return new Request(this, {
                        body: this._bodyInit
                    })
                }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function() {
                    return new Response(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new Headers(this.headers),
                        url: this.url
                    })
                }, Response.error = function() {
                    var t = new Response(null, {
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error", t
                };
                var i = [301, 302, 303, 307, 308];
                Response.redirect = function(t, e) {
                    if (-1 === i.indexOf(e)) throw RangeError("Invalid status code");
                    return new Response(null, {
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                }, t.DOMException = n.DOMException;
                try {
                    new t.DOMException
                } catch (e) {
                    t.DOMException = function(t, e) {
                        this.message = t, this.name = e;
                        var r = Error(t);
                        this.stack = r.stack
                    }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                }

                function fetch(r, n) {
                    return new Promise(function(o, s) {
                        var i = new Request(r, n);
                        if (i.signal && i.signal.aborted) return s(new t.DOMException("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function abortXhr() {
                            a.abort()
                        }
                        a.onload = function() {
                            var t, e, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (t = a.getAllResponseHeaders() || "", e = new Headers, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                    var r = t.split(":"),
                                        n = r.shift().trim();
                                    if (n) {
                                        var o = r.join(":").trim();
                                        e.append(n, o)
                                    }
                                }), e)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                            var n = "response" in a ? a.response : a.responseText;
                            o(new Response(n, r))
                        }, a.onerror = function() {
                            s(TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            s(TypeError("Network request failed"))
                        }, a.onabort = function() {
                            s(new t.DOMException("Aborted", "AbortError"))
                        }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && e.blob && (a.responseType = "blob"), i.headers.forEach(function(t, e) {
                            a.setRequestHeader(e, t)
                        }), i.signal && (i.signal.addEventListener("abort", abortXhr), a.onreadystatechange = function() {
                            4 === a.readyState && i.signal.removeEventListener("abort", abortXhr)
                        }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
                    })
                }
                fetch.polyfill = !0, n.fetch || (n.fetch = fetch, n.Headers = Headers, n.Request = Request, n.Response = Response), t.Headers = Headers, t.Request = Request, t.Response = Response, t.fetch = fetch, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            })({}), n.fetch.ponyfill = !0, delete n.fetch.polyfill, (e = n.fetch).default = n.fetch, e.fetch = n.fetch, e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response, t.exports = e
        },
        70411: function(t, e, r) {
            "use strict";
            r.d(e, {
                r: function() {
                    return JsonRpcProvider
                }
            });
            var n = r(512),
                o = r(53620);
            let JsonRpcProvider = class JsonRpcProvider extends o.IJsonRpcProvider {
                constructor(t) {
                    super(t), this.events = new n.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
                }
                async connect(t = this.connection) {
                    await this.open(t)
                }
                async disconnect() {
                    await this.close()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async request(t, e) {
                    return this.requestStrict((0, o.formatJsonRpcRequest)(t.method, t.params || [], t.id || (0, o.getBigIntRpcId)().toString()), e)
                }
                async requestStrict(t, e) {
                    return new Promise(async (r, n) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (t) {
                            n(t)
                        }
                        this.events.on(`${t.id}`, t => {
                            (0, o.isJsonRpcError)(t) ? n(t.error): r(t.result)
                        });
                        try {
                            await this.connection.send(t, e)
                        } catch (t) {
                            n(t)
                        }
                    })
                }
                setConnection(t = this.connection) {
                    return t
                }
                onPayload(t) {
                    this.events.emit("payload", t), (0, o.isJsonRpcResponse)(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
                        type: t.method,
                        data: t.params
                    })
                }
                onClose(t) {
                    t && 3e3 === t.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(t = this.connection) {
                    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof t && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)), this.connection.on("close", t => this.onClose(t)), this.connection.on("error", t => this.events.emit("error", t)), this.connection.on("register_error", t => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
        },
        6322: function(t, e, r) {
            "use strict";
            r.d(e, {
                XR: function() {
                    return IJsonRpcConnection
                },
                x0: function() {
                    return IJsonRpcProvider
                }
            });
            let IEvents = class IEvents {};
            let IJsonRpcConnection = class IJsonRpcConnection extends IEvents {
                constructor(t) {
                    super()
                }
            };
            let IBaseJsonRpcProvider = class IBaseJsonRpcProvider extends IEvents {
                constructor() {
                    super()
                }
            };
            let IJsonRpcProvider = class IJsonRpcProvider extends IBaseJsonRpcProvider {
                constructor(t) {
                    super()
                }
            }
        },
        34103: function(t, e, r) {
            "use strict";
            r.d(e, {
                CA: function() {
                    return o
                },
                JV: function() {
                    return a
                },
                O4: function() {
                    return n
                },
                dQ: function() {
                    return s
                },
                xK: function() {
                    return i
                }
            });
            let n = "INTERNAL_ERROR",
                o = "SERVER_ERROR",
                s = [-32700, -32600, -32601, -32602, -32603],
                i = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [n]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [o]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                a = o
        },
        26637: function(t, e, r) {
            "use strict";
            var n = r(36014);
            r.o(n, "IJsonRpcProvider") && r.d(e, {
                IJsonRpcProvider: function() {
                    return n.IJsonRpcProvider
                }
            }), r.o(n, "formatJsonRpcError") && r.d(e, {
                formatJsonRpcError: function() {
                    return n.formatJsonRpcError
                }
            }), r.o(n, "formatJsonRpcRequest") && r.d(e, {
                formatJsonRpcRequest: function() {
                    return n.formatJsonRpcRequest
                }
            }), r.o(n, "formatJsonRpcResult") && r.d(e, {
                formatJsonRpcResult: function() {
                    return n.formatJsonRpcResult
                }
            }), r.o(n, "getBigIntRpcId") && r.d(e, {
                getBigIntRpcId: function() {
                    return n.getBigIntRpcId
                }
            }), r.o(n, "isHttpUrl") && r.d(e, {
                isHttpUrl: function() {
                    return n.isHttpUrl
                }
            }), r.o(n, "isJsonRpcError") && r.d(e, {
                isJsonRpcError: function() {
                    return n.isJsonRpcError
                }
            }), r.o(n, "isJsonRpcRequest") && r.d(e, {
                isJsonRpcRequest: function() {
                    return n.isJsonRpcRequest
                }
            }), r.o(n, "isJsonRpcResponse") && r.d(e, {
                isJsonRpcResponse: function() {
                    return n.isJsonRpcResponse
                }
            }), r.o(n, "isJsonRpcResult") && r.d(e, {
                isJsonRpcResult: function() {
                    return n.isJsonRpcResult
                }
            }), r.o(n, "isLocalhostUrl") && r.d(e, {
                isLocalhostUrl: function() {
                    return n.isLocalhostUrl
                }
            }), r.o(n, "isReactNative") && r.d(e, {
                isReactNative: function() {
                    return n.isReactNative
                }
            }), r.o(n, "isWsUrl") && r.d(e, {
                isWsUrl: function() {
                    return n.isWsUrl
                }
            }), r.o(n, "payloadId") && r.d(e, {
                payloadId: function() {
                    return n.payloadId
                }
            })
        },
        77507: function(t, e, r) {
            "use strict";
            r.d(e, {
                CX: function() {
                    return parseConnectionError
                },
                L2: function() {
                    return getErrorByCode
                },
                by: function() {
                    return getError
                },
                i5: function() {
                    return isReservedErrorCode
                }
            });
            var n = r(34103);

            function isReservedErrorCode(t) {
                return n.dQ.includes(t)
            }

            function getError(t) {
                return Object.keys(n.xK).includes(t) ? n.xK[t] : n.xK[n.JV]
            }

            function getErrorByCode(t) {
                let e = Object.values(n.xK).find(e => e.code === t);
                return e || n.xK[n.JV]
            }

            function parseConnectionError(t, e, r) {
                return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${r} RPC url at ${e}`) : t
            }
        },
        17957: function(t, e, r) {
            "use strict";
            r.d(e, {
                CS: function() {
                    return getBigIntRpcId
                },
                RI: function() {
                    return formatJsonRpcError
                },
                o0: function() {
                    return payloadId
                },
                sT: function() {
                    return formatJsonRpcRequest
                },
                tm: function() {
                    return formatJsonRpcResult
                }
            });
            var n = r(77507),
                o = r(34103);

            function payloadId(t = 3) {
                let e = Date.now() * Math.pow(10, t);
                return e + Math.floor(Math.random() * Math.pow(10, t))
            }

            function getBigIntRpcId(t = 6) {
                return BigInt(payloadId(t))
            }

            function formatJsonRpcRequest(t, e, r) {
                return {
                    id: r || payloadId(),
                    jsonrpc: "2.0",
                    method: t,
                    params: e
                }
            }

            function formatJsonRpcResult(t, e) {
                return {
                    id: t,
                    jsonrpc: "2.0",
                    result: e
                }
            }

            function formatJsonRpcError(t, e, r) {
                var s;
                return {
                    id: t,
                    jsonrpc: "2.0",
                    error: void 0 === (s = e) ? (0, n.by)(o.O4) : ("string" == typeof s && (s = Object.assign(Object.assign({}, (0, n.by)(o.CA)), {
                        message: s
                    })), void 0 !== r && (s.data = r), (0, n.i5)(s.code) && (s = (0, n.L2)(s.code)), s)
                }
            }
        },
        53620: function(t, e, r) {
            "use strict";
            r.d(e, {
                IJsonRpcProvider: function() {
                    return i.x0
                },
                formatJsonRpcError: function() {
                    return s.RI
                },
                formatJsonRpcRequest: function() {
                    return s.sT
                },
                formatJsonRpcResult: function() {
                    return s.tm
                },
                getBigIntRpcId: function() {
                    return s.CS
                },
                isHttpUrl: function() {
                    return a.jK
                },
                isJsonRpcError: function() {
                    return c.jg
                },
                isJsonRpcRequest: function() {
                    return c.DW
                },
                isJsonRpcResponse: function() {
                    return c.u
                },
                isJsonRpcResult: function() {
                    return c.k4
                },
                isLocalhostUrl: function() {
                    return a.JF
                },
                isWsUrl: function() {
                    return a.UZ
                },
                parseConnectionError: function() {
                    return n.CX
                },
                payloadId: function() {
                    return s.o0
                }
            }), r(34103);
            var n = r(77507),
                o = r(26637);
            r.o(o, "IJsonRpcProvider") && r.d(e, {
                IJsonRpcProvider: function() {
                    return o.IJsonRpcProvider
                }
            }), r.o(o, "formatJsonRpcError") && r.d(e, {
                formatJsonRpcError: function() {
                    return o.formatJsonRpcError
                }
            }), r.o(o, "formatJsonRpcRequest") && r.d(e, {
                formatJsonRpcRequest: function() {
                    return o.formatJsonRpcRequest
                }
            }), r.o(o, "formatJsonRpcResult") && r.d(e, {
                formatJsonRpcResult: function() {
                    return o.formatJsonRpcResult
                }
            }), r.o(o, "getBigIntRpcId") && r.d(e, {
                getBigIntRpcId: function() {
                    return o.getBigIntRpcId
                }
            }), r.o(o, "isHttpUrl") && r.d(e, {
                isHttpUrl: function() {
                    return o.isHttpUrl
                }
            }), r.o(o, "isJsonRpcError") && r.d(e, {
                isJsonRpcError: function() {
                    return o.isJsonRpcError
                }
            }), r.o(o, "isJsonRpcRequest") && r.d(e, {
                isJsonRpcRequest: function() {
                    return o.isJsonRpcRequest
                }
            }), r.o(o, "isJsonRpcResponse") && r.d(e, {
                isJsonRpcResponse: function() {
                    return o.isJsonRpcResponse
                }
            }), r.o(o, "isJsonRpcResult") && r.d(e, {
                isJsonRpcResult: function() {
                    return o.isJsonRpcResult
                }
            }), r.o(o, "isLocalhostUrl") && r.d(e, {
                isLocalhostUrl: function() {
                    return o.isLocalhostUrl
                }
            }), r.o(o, "isReactNative") && r.d(e, {
                isReactNative: function() {
                    return o.isReactNative
                }
            }), r.o(o, "isWsUrl") && r.d(e, {
                isWsUrl: function() {
                    return o.isWsUrl
                }
            }), r.o(o, "payloadId") && r.d(e, {
                payloadId: function() {
                    return o.payloadId
                }
            });
            var s = r(17957),
                i = r(7182),
                a = r(59490),
                c = r(7739)
        },
        7182: function(t, e, r) {
            "use strict";
            r.d(e, {
                x0: function() {
                    return n.x0
                }
            });
            var n = r(6322)
        },
        59490: function(t, e, r) {
            "use strict";

            function matchRegexProtocol(t, e) {
                let r = function(t) {
                    let e = t.match(RegExp(/^\w+:/, "gi"));
                    if (e && e.length) return e[0]
                }(t);
                return void 0 !== r && new RegExp(e).test(r)
            }

            function isHttpUrl(t) {
                return matchRegexProtocol(t, "^https?:")
            }

            function isWsUrl(t) {
                return matchRegexProtocol(t, "^wss?:")
            }

            function isLocalhostUrl(t) {
                return RegExp("wss?://localhost(:d{2,5})?").test(t)
            }
            r.d(e, {
                JF: function() {
                    return isLocalhostUrl
                },
                UZ: function() {
                    return isWsUrl
                },
                jK: function() {
                    return isHttpUrl
                }
            })
        },
        7739: function(t, e, r) {
            "use strict";

            function isJsonRpcPayload(t) {
                return "object" == typeof t && "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc
            }

            function isJsonRpcRequest(t) {
                return isJsonRpcPayload(t) && "method" in t
            }

            function isJsonRpcResponse(t) {
                return isJsonRpcPayload(t) && (isJsonRpcResult(t) || isJsonRpcError(t))
            }

            function isJsonRpcResult(t) {
                return "result" in t
            }

            function isJsonRpcError(t) {
                return "error" in t
            }
            r.d(e, {
                DW: function() {
                    return isJsonRpcRequest
                },
                jg: function() {
                    return isJsonRpcError
                },
                k4: function() {
                    return isJsonRpcResult
                },
                u: function() {
                    return isJsonRpcResponse
                }
            })
        },
        43283: function(t, e, r) {
            "use strict";
            r.d(e, {
                D: function() {
                    return safeJsonParse
                },
                u: function() {
                    return safeJsonStringify
                }
            });
            let JSONStringify = t => JSON.stringify(t, (t, e) => "bigint" == typeof e ? e.toString() + "n" : e),
                JSONParse = t => {
                    let e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(e, (t, e) => {
                        let r = "string" == typeof e && e.match(/^\d+n$/);
                        return r ? BigInt(e.substring(0, e.length - 1)) : e
                    })
                };

            function safeJsonParse(t) {
                if ("string" != typeof t) throw Error(`Cannot safe json parse value of type ${typeof t}`);
                try {
                    return JSONParse(t)
                } catch (e) {
                    return t
                }
            }

            function safeJsonStringify(t) {
                return "string" == typeof t ? t : JSONStringify(t) || ""
            }
        },
        91656: function(t) {
            "use strict";
            t.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        }
    }
]);