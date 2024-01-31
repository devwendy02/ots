(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2134], {
        71497: function(e, t, r) {
            "use strict";
            r.d(t, {
                D: function() {
                    return AlchemyProvider
                }
            });
            var n = r(17213),
                i = r(89067),
                s = r(99227),
                a = r(36288),
                u = r(12312),
                l = r(61127);
            let c = new a.Yd(u.i),
                h = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
            let AlchemyWebSocketProvider = class AlchemyWebSocketProvider extends s.q {
                constructor(e, t) {
                    let r = new AlchemyProvider(e, t),
                        i = r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi.");
                    super(i, r.network), (0, n.zG)(this, "apiKey", r.apiKey)
                }
                isCommunityResource() {
                    return this.apiKey === h
                }
            };
            let AlchemyProvider = class AlchemyProvider extends l.l {
                static getWebSocketProvider(e, t) {
                    return new AlchemyWebSocketProvider(e, t)
                }
                static getApiKey(e) {
                    return null == e ? h : (e && "string" != typeof e && c.throwArgumentError("invalid apiKey", "apiKey", e), e)
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e.name) {
                        case "homestead":
                            r = "eth-mainnet.alchemyapi.io/v2/";
                            break;
                        case "goerli":
                            r = "eth-goerli.g.alchemy.com/v2/";
                            break;
                        case "matic":
                            r = "polygon-mainnet.g.alchemy.com/v2/";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.g.alchemy.com/v2/";
                            break;
                        case "arbitrum":
                            r = "arb-mainnet.g.alchemy.com/v2/";
                            break;
                        case "arbitrum-goerli":
                            r = "arb-goerli.g.alchemy.com/v2/";
                            break;
                        case "optimism":
                            r = "opt-mainnet.g.alchemy.com/v2/";
                            break;
                        case "optimism-goerli":
                            r = "opt-goerli.g.alchemy.com/v2/";
                            break;
                        default:
                            c.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return {
                        allowGzip: !0,
                        url: "https://" + r + t,
                        throttleCallback: (e, r) => (t === h && (0, i.vh)(), Promise.resolve(!0))
                    }
                }
                isCommunityResource() {
                    return this.apiKey === h
                }
            }
        },
        61127: function(e, t, r) {
            "use strict";
            r.d(t, {
                l: function() {
                    return UrlJsonRpcProvider
                }
            });
            var n = r(17213),
                i = r(36288),
                s = r(12312),
                a = r(67488);
            let u = new i.Yd(s.i);
            let StaticJsonRpcProvider = class StaticJsonRpcProvider extends a.r {
                detectNetwork() {
                    var e, t, r, s;
                    let a = Object.create(null, {
                        detectNetwork: {
                            get: () => super.detectNetwork
                        }
                    });
                    return e = this, t = void 0, r = void 0, s = function*() {
                        let e = this.network;
                        return null == e && ((e = yield a.detectNetwork.call(this)) || u.throwError("no network detected", i.Yd.errors.UNKNOWN_ERROR, {}), null == this._network && ((0, n.zG)(this, "_network", e), this.emit("network", e, null))), e
                    }, new(r || (r = Promise))(function(n, i) {
                        function fulfilled(e) {
                            try {
                                step(s.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(s.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function step(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(fulfilled, rejected)
                        }
                        step((s = s.apply(e, t || [])).next())
                    })
                }
            };
            let UrlJsonRpcProvider = class UrlJsonRpcProvider extends StaticJsonRpcProvider {
                constructor(e, t) {
                    u.checkAbstract(new.target, UrlJsonRpcProvider), e = (0, n.tu)(new.target, "getNetwork")(e), t = (0, n.tu)(new.target, "getApiKey")(t);
                    let r = (0, n.tu)(new.target, "getUrl")(e, t);
                    super(r, e), "string" == typeof t ? (0, n.zG)(this, "apiKey", t) : null != t && Object.keys(t).forEach(e => {
                        (0, n.zG)(this, e, t[e])
                    })
                }
                _startPending() {
                    u.warn("WARNING: API provider does not support pending filters")
                }
                isCommunityResource() {
                    return !1
                }
                getSigner(e) {
                    return u.throwError("API provider does not support signing", i.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "getSigner"
                    })
                }
                listAccounts() {
                    return Promise.resolve([])
                }
                static getApiKey(e) {
                    return e
                }
                static getUrl(e, t) {
                    return u.throwError("not implemented; sub-classes must override getUrl", i.Yd.errors.NOT_IMPLEMENTED, {
                        operation: "getUrl"
                    })
                }
            }
        },
        99227: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return WebSocketProvider
                }
            });
            var n = r(92598),
                i = r(17213),
                s = r(67488),
                a = r(36288),
                u = r(12312);
            let l = null;
            try {
                if (l = WebSocket, null == l) throw Error("inject please")
            } catch (t) {
                let e = new a.Yd(u.i);
                l = function() {
                    e.throwError("WebSockets not supported in this environment", a.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "new WebSocket()"
                    })
                }
            }
            var __awaiter = function(e, t, r, n) {
                return new(r || (r = Promise))(function(i, s) {
                    function fulfilled(e) {
                        try {
                            step(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((n = n.apply(e, t || [])).next())
                })
            };
            let c = new a.Yd(u.i),
                h = 1;
            let WebSocketProvider = class WebSocketProvider extends s.r {
                constructor(e, t) {
                    "any" === t && c.throwError("WebSocketProvider does not support 'any' network yet", a.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "network:any"
                    }), "string" == typeof e ? super(e, t) : super("_websocket", t), this._pollingInterval = -1, this._wsReady = !1, "string" == typeof e ? (0, i.zG)(this, "_websocket", new l(this.connection.url)) : (0, i.zG)(this, "_websocket", e), (0, i.zG)(this, "_requests", {}), (0, i.zG)(this, "_subs", {}), (0, i.zG)(this, "_subIds", {}), (0, i.zG)(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
                        this._wsReady = !0, Object.keys(this._requests).forEach(e => {
                            this.websocket.send(this._requests[e].payload)
                        })
                    }, this.websocket.onmessage = e => {
                        let t = e.data,
                            r = JSON.parse(t);
                        if (null != r.id) {
                            let e = String(r.id),
                                n = this._requests[e];
                            if (delete this._requests[e], void 0 !== r.result) n.callback(null, r.result), this.emit("debug", {
                                action: "response",
                                request: JSON.parse(n.payload),
                                response: r.result,
                                provider: this
                            });
                            else {
                                let e = null;
                                r.error ? (e = Error(r.error.message || "unknown error"), (0, i.zG)(e, "code", r.error.code || null), (0, i.zG)(e, "response", t)) : e = Error("unknown error"), n.callback(e, void 0), this.emit("debug", {
                                    action: "response",
                                    error: e,
                                    request: JSON.parse(n.payload),
                                    provider: this
                                })
                            }
                        } else if ("eth_subscription" === r.method) {
                            let e = this._subs[r.params.subscription];
                            e && e.processFunc(r.params.result)
                        } else console.warn("this should not happen")
                    };
                    let r = setInterval(() => {
                        this.emit("poll")
                    }, 1e3);
                    r.unref && r.unref()
                }
                get websocket() {
                    return this._websocket
                }
                detectNetwork() {
                    return this._detectNetwork
                }
                get pollingInterval() {
                    return 0
                }
                resetEventsBlock(e) {
                    c.throwError("cannot reset events block on WebSocketProvider", a.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "resetEventBlock"
                    })
                }
                set pollingInterval(e) {
                    c.throwError("cannot set polling interval on WebSocketProvider", a.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPollingInterval"
                    })
                }
                poll() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return null
                    })
                }
                set polling(e) {
                    e && c.throwError("cannot set polling on WebSocketProvider", a.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPolling"
                    })
                }
                send(e, t) {
                    let r = h++;
                    return new Promise((n, i) => {
                        let s = JSON.stringify({
                            method: e,
                            params: t,
                            id: r,
                            jsonrpc: "2.0"
                        });
                        this.emit("debug", {
                            action: "request",
                            request: JSON.parse(s),
                            provider: this
                        }), this._requests[String(r)] = {
                            callback: function(e, t) {
                                return e ? i(e) : n(t)
                            },
                            payload: s
                        }, this._wsReady && this.websocket.send(s)
                    })
                }
                static defaultUrl() {
                    return "ws://localhost:8546"
                }
                _subscribe(e, t, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let n = this._subIds[e];
                        null == n && (n = Promise.all(t).then(e => this.send("eth_subscribe", e)), this._subIds[e] = n);
                        let i = yield n;
                        this._subs[i] = {
                            tag: e,
                            processFunc: r
                        }
                    })
                }
                _startEvent(e) {
                    switch (e.type) {
                        case "block":
                            this._subscribe("block", ["newHeads"], e => {
                                let t = n.O$.from(e.number).toNumber();
                                this._emitted.block = t, this.emit("block", t)
                            });
                            break;
                        case "pending":
                            this._subscribe("pending", ["newPendingTransactions"], e => {
                                this.emit("pending", e)
                            });
                            break;
                        case "filter":
                            this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], t => {
                                null == t.removed && (t.removed = !1), this.emit(e.filter, this.formatter.filterLog(t))
                            });
                            break;
                        case "tx":
                            {
                                let emitReceipt = e => {
                                    let t = e.hash;
                                    this.getTransactionReceipt(t).then(e => {
                                        e && this.emit(t, e)
                                    })
                                };emitReceipt(e),
                                this._subscribe("tx", ["newHeads"], e => {
                                    this._events.filter(e => "tx" === e.type).forEach(emitReceipt)
                                });
                                break
                            }
                        case "debug":
                        case "poll":
                        case "willPoll":
                        case "didPoll":
                        case "error":
                            break;
                        default:
                            console.log("unhandled:", e)
                    }
                }
                _stopEvent(e) {
                    let t = e.tag;
                    if ("tx" === e.type) {
                        if (this._events.filter(e => "tx" === e.type).length) return;
                        t = "tx"
                    } else if (this.listenerCount(e.event)) return;
                    let r = this._subIds[t];
                    r && (delete this._subIds[t], r.then(e => {
                        this._subs[e] && (delete this._subs[e], this.send("eth_unsubscribe", [e]))
                    }))
                }
                destroy() {
                    return __awaiter(this, void 0, void 0, function*() {
                        this.websocket.readyState === l.CONNECTING && (yield new Promise(e => {
                            this.websocket.onopen = function() {
                                e(!0)
                            }, this.websocket.onerror = function() {
                                e(!1)
                            }
                        })), this.websocket.close(1e3)
                    })
                }
            }
        },
        82134: function(e, t, r) {
            "use strict";
            r.d(t, {
                a_: function() {
                    return l
                },
                HI: function() {
                    return e8
                },
                AW: function() {
                    return e7
                },
                WU: function() {
                    return e$
                },
                DX: function() {
                    return eW
                }
            });
            var n, i, s, a, u, l, c, h, d, p, f, g, m, _ = r(94e3),
                y = r.n(_);

            function tiny_invariant_invariant(e, t) {
                if (!e) throw Error("Invariant failed")
            }
            var v = r(18994),
                b = r(22528),
                w = r.n(b),
                E = r(32402),
                k = r.n(E),
                T = r(30539),
                A = r.n(T),
                P = r(92598),
                S = r(57273),
                O = r(14184),
                N = r(58337),
                D = r(36288);
            let I = RegExp("^bytes([0-9]+)$"),
                x = RegExp("^(u?int)([0-9]*)$"),
                R = RegExp("^(.*)\\[([0-9]*)\\]$"),
                C = new D.Yd("solidity/5.7.0");

            function pack(e, t) {
                e.length != t.length && C.throwArgumentError("wrong number of values; expected ${ types.length }", "values", t);
                let r = [];
                return e.forEach(function(e, n) {
                    r.push(function _pack(e, t, r) {
                        switch (e) {
                            case "address":
                                if (r) return (0, S.Bu)(t, 32);
                                return (0, S.lE)(t);
                            case "string":
                                return (0, N.Y0)(t);
                            case "bytes":
                                return (0, S.lE)(t);
                            case "bool":
                                if (t = t ? "0x01" : "0x00", r) return (0, S.Bu)(t, 32);
                                return (0, S.lE)(t)
                        }
                        let n = e.match(x);
                        if (n) {
                            let i = parseInt(n[2] || "256");
                            return (n[2] && String(i) !== n[2] || i % 8 != 0 || 0 === i || i > 256) && C.throwArgumentError("invalid number type", "type", e), r && (i = 256), t = P.O$.from(t).toTwos(i), (0, S.Bu)(t, i / 8)
                        }
                        if (n = e.match(I)) {
                            let i = parseInt(n[1]);
                            return ((String(i) !== n[1] || 0 === i || i > 32) && C.throwArgumentError("invalid bytes type", "type", e), (0, S.lE)(t).byteLength !== i && C.throwArgumentError(`invalid value for ${e}`, "value", t), r) ? (0, S.lE)((t + "0000000000000000000000000000000000000000000000000000000000000000").substring(0, 66)) : t
                        }
                        if ((n = e.match(R)) && Array.isArray(t)) {
                            let r = n[1],
                                i = parseInt(n[2] || String(t.length));
                            i != t.length && C.throwArgumentError(`invalid array length for ${e}`, "value", t);
                            let s = [];
                            return t.forEach(function(e) {
                                s.push(_pack(r, e, !0))
                            }), (0, S.zo)(s)
                        }
                        return C.throwArgumentError("invalid type", "type", e)
                    }(e, t[n]))
                }), (0, S.Dv)((0, S.zo)(r))
            }
            var B = r(17213);
            let F = "abi/5.7.0",
                z = new D.Yd(F);
            let Coder = class Coder {
                constructor(e, t, r, n) {
                    this.name = e, this.type = t, this.localName = r, this.dynamic = n
                }
                _throwError(e, t) {
                    z.throwArgumentError(e, this.localName, t)
                }
            };
            let Writer = class Writer {
                constructor(e) {
                    (0, B.zG)(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e)
                }
                get data() {
                    return (0, S.xs)(this._data)
                }
                get length() {
                    return this._dataLength
                }
                _writeData(e) {
                    return this._data.push(e), this._dataLength += e.length, e.length
                }
                appendWriter(e) {
                    return this._writeData((0, S.zo)(e._data))
                }
                writeBytes(e) {
                    let t = (0, S.lE)(e),
                        r = t.length % this.wordSize;
                    return r && (t = (0, S.zo)([t, this._padding.slice(r)])), this._writeData(t)
                }
                _getValue(e) {
                    let t = (0, S.lE)(P.O$.from(e));
                    return t.length > this.wordSize && z.throwError("value out-of-bounds", D.Yd.errors.BUFFER_OVERRUN, {
                        length: this.wordSize,
                        offset: t.length
                    }), t.length % this.wordSize && (t = (0, S.zo)([this._padding.slice(t.length % this.wordSize), t])), t
                }
                writeValue(e) {
                    return this._writeData(this._getValue(e))
                }
                writeUpdatableValue() {
                    let e = this._data.length;
                    return this._data.push(this._padding), this._dataLength += this.wordSize, t => {
                        this._data[e] = this._getValue(t)
                    }
                }
            };
            let Reader = class Reader {
                constructor(e, t, r, n) {
                    (0, B.zG)(this, "_data", (0, S.lE)(e)), (0, B.zG)(this, "wordSize", t || 32), (0, B.zG)(this, "_coerceFunc", r), (0, B.zG)(this, "allowLoose", n), this._offset = 0
                }
                get data() {
                    return (0, S.Dv)(this._data)
                }
                get consumed() {
                    return this._offset
                }
                static coerce(e, t) {
                    let r = e.match("^u?int([0-9]+)$");
                    return r && 48 >= parseInt(r[1]) && (t = t.toNumber()), t
                }
                coerce(e, t) {
                    return this._coerceFunc ? this._coerceFunc(e, t) : Reader.coerce(e, t)
                }
                _peekBytes(e, t, r) {
                    let n = Math.ceil(t / this.wordSize) * this.wordSize;
                    return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + t <= this._data.length ? n = t : z.throwError("data out-of-bounds", D.Yd.errors.BUFFER_OVERRUN, {
                        length: this._data.length,
                        offset: this._offset + n
                    })), this._data.slice(this._offset, this._offset + n)
                }
                subReader(e) {
                    return new Reader(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose)
                }
                readBytes(e, t) {
                    let r = this._peekBytes(0, e, !!t);
                    return this._offset += r.length, r.slice(0, e)
                }
                readValue() {
                    return P.O$.from(this.readBytes(this.wordSize))
                }
            };
            var j = r(36339);
            let AddressCoder = class AddressCoder extends Coder {
                constructor(e) {
                    super("address", "address", e, !1)
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000"
                }
                encode(e, t) {
                    try {
                        t = (0, v.Kn)(t)
                    } catch (e) {
                        this._throwError(e.message, t)
                    }
                    return e.writeValue(t)
                }
                decode(e) {
                    return (0, v.Kn)((0, S.$m)(e.readValue().toHexString(), 20))
                }
            };
            let AnonymousCoder = class AnonymousCoder extends Coder {
                constructor(e) {
                    super(e.name, e.type, void 0, e.dynamic), this.coder = e
                }
                defaultValue() {
                    return this.coder.defaultValue()
                }
                encode(e, t) {
                    return this.coder.encode(e, t)
                }
                decode(e) {
                    return this.coder.decode(e)
                }
            };
            let L = new D.Yd(F);

            function array_pack(e, t, r) {
                let n = null;
                if (Array.isArray(r)) n = r;
                else if (r && "object" == typeof r) {
                    let e = {};
                    n = t.map(t => {
                        let n = t.localName;
                        return n || L.throwError("cannot encode object for signature with missing names", D.Yd.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: t,
                            value: r
                        }), e[n] && L.throwError("cannot encode object for signature with duplicate names", D.Yd.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: t,
                            value: r
                        }), e[n] = !0, r[n]
                    })
                } else L.throwArgumentError("invalid tuple value", "tuple", r);
                t.length !== n.length && L.throwArgumentError("types/value length mismatch", "tuple", r);
                let i = new Writer(e.wordSize),
                    s = new Writer(e.wordSize),
                    a = [];
                return t.forEach((e, t) => {
                    let r = n[t];
                    if (e.dynamic) {
                        let t = s.length;
                        e.encode(s, r);
                        let n = i.writeUpdatableValue();
                        a.push(e => {
                            n(e + t)
                        })
                    } else e.encode(i, r)
                }), a.forEach(e => {
                    e(i.length)
                }), e.appendWriter(i) + e.appendWriter(s)
            }

            function unpack(e, t) {
                let r = [],
                    n = e.subReader(0);
                t.forEach(t => {
                    let i = null;
                    if (t.dynamic) {
                        let r = e.readValue(),
                            s = n.subReader(r.toNumber());
                        try {
                            i = t.decode(s)
                        } catch (e) {
                            if (e.code === D.Yd.errors.BUFFER_OVERRUN) throw e;
                            (i = e).baseType = t.name, i.name = t.localName, i.type = t.type
                        }
                    } else try {
                        i = t.decode(e)
                    } catch (e) {
                        if (e.code === D.Yd.errors.BUFFER_OVERRUN) throw e;
                        (i = e).baseType = t.name, i.name = t.localName, i.type = t.type
                    }
                    void 0 != i && r.push(i)
                });
                let i = t.reduce((e, t) => {
                    let r = t.localName;
                    return r && (e[r] || (e[r] = 0), e[r]++), e
                }, {});
                t.forEach((e, t) => {
                    let n = e.localName;
                    if (!n || 1 !== i[n] || ("length" === n && (n = "_length"), null != r[n])) return;
                    let s = r[t];
                    s instanceof Error ? Object.defineProperty(r, n, {
                        enumerable: !0,
                        get: () => {
                            throw s
                        }
                    }) : r[n] = s
                });
                for (let e = 0; e < r.length; e++) {
                    let t = r[e];
                    t instanceof Error && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: () => {
                            throw t
                        }
                    })
                }
                return Object.freeze(r)
            }
            let ArrayCoder = class ArrayCoder extends Coder {
                constructor(e, t, r) {
                    let n = e.type + "[" + (t >= 0 ? t : "") + "]",
                        i = -1 === t || e.dynamic;
                    super("array", n, r, i), this.coder = e, this.length = t
                }
                defaultValue() {
                    let e = this.coder.defaultValue(),
                        t = [];
                    for (let r = 0; r < this.length; r++) t.push(e);
                    return t
                }
                encode(e, t) {
                    Array.isArray(t) || this._throwError("expected array value", t);
                    let r = this.length; - 1 === r && (r = t.length, e.writeValue(t.length)), L.checkArgumentCount(t.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
                    let n = [];
                    for (let e = 0; e < t.length; e++) n.push(this.coder);
                    return array_pack(e, n, t)
                }
                decode(e) {
                    let t = this.length; - 1 === t && 32 * (t = e.readValue().toNumber()) > e._data.length && L.throwError("insufficient data length", D.Yd.errors.BUFFER_OVERRUN, {
                        length: e._data.length,
                        count: t
                    });
                    let r = [];
                    for (let e = 0; e < t; e++) r.push(new AnonymousCoder(this.coder));
                    return e.coerce(this.name, unpack(e, r))
                }
            };
            let BooleanCoder = class BooleanCoder extends Coder {
                constructor(e) {
                    super("bool", "bool", e, !1)
                }
                defaultValue() {
                    return !1
                }
                encode(e, t) {
                    return e.writeValue(t ? 1 : 0)
                }
                decode(e) {
                    return e.coerce(this.type, !e.readValue().isZero())
                }
            };
            let DynamicBytesCoder = class DynamicBytesCoder extends Coder {
                constructor(e, t) {
                    super(e, e, t, !0)
                }
                defaultValue() {
                    return "0x"
                }
                encode(e, t) {
                    return t = (0, S.lE)(t), e.writeValue(t.length) + e.writeBytes(t)
                }
                decode(e) {
                    return e.readBytes(e.readValue().toNumber(), !0)
                }
            };
            let BytesCoder = class BytesCoder extends DynamicBytesCoder {
                constructor(e) {
                    super("bytes", e)
                }
                decode(e) {
                    return e.coerce(this.name, (0, S.Dv)(super.decode(e)))
                }
            };
            let FixedBytesCoder = class FixedBytesCoder extends Coder {
                constructor(e, t) {
                    let r = "bytes" + String(e);
                    super(r, r, t, !1), this.size = e
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
                encode(e, t) {
                    let r = (0, S.lE)(t);
                    return r.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(r)
                }
                decode(e) {
                    return e.coerce(this.name, (0, S.Dv)(e.readBytes(this.size)))
                }
            };
            let NullCoder = class NullCoder extends Coder {
                constructor(e) {
                    super("null", "", e, !1)
                }
                defaultValue() {
                    return null
                }
                encode(e, t) {
                    return null != t && this._throwError("not null", t), e.writeBytes([])
                }
                decode(e) {
                    return e.readBytes(0), e.coerce(this.name, null)
                }
            };
            var M = r(53690);
            let NumberCoder = class NumberCoder extends Coder {
                constructor(e, t, r) {
                    let n = (t ? "int" : "uint") + 8 * e;
                    super(n, n, r, !1), this.size = e, this.signed = t
                }
                defaultValue() {
                    return 0
                }
                encode(e, t) {
                    let r = P.O$.from(t),
                        n = M.Bz.mask(8 * e.wordSize);
                    if (this.signed) {
                        let e = n.mask(8 * this.size - 1);
                        (r.gt(e) || r.lt(e.add(M.fh).mul(M.tL))) && this._throwError("value out-of-bounds", t)
                    } else(r.lt(M._Y) || r.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", t);
                    return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)), e.writeValue(r)
                }
                decode(e) {
                    let t = e.readValue().mask(8 * this.size);
                    return this.signed && (t = t.fromTwos(8 * this.size)), e.coerce(this.name, t)
                }
            };
            let StringCoder = class StringCoder extends DynamicBytesCoder {
                constructor(e) {
                    super("string", e)
                }
                defaultValue() {
                    return ""
                }
                encode(e, t) {
                    return super.encode(e, (0, N.Y0)(t))
                }
                decode(e) {
                    return (0, N.ZN)(super.decode(e))
                }
            };
            let TupleCoder = class TupleCoder extends Coder {
                constructor(e, t) {
                    let r = !1,
                        n = [];
                    e.forEach(e => {
                        e.dynamic && (r = !0), n.push(e.type)
                    });
                    let i = "tuple(" + n.join(",") + ")";
                    super("tuple", i, t, r), this.coders = e
                }
                defaultValue() {
                    let e = [];
                    this.coders.forEach(t => {
                        e.push(t.defaultValue())
                    });
                    let t = this.coders.reduce((e, t) => {
                        let r = t.localName;
                        return r && (e[r] || (e[r] = 0), e[r]++), e
                    }, {});
                    return this.coders.forEach((r, n) => {
                        let i = r.localName;
                        i && 1 === t[i] && ("length" === i && (i = "_length"), null == e[i] && (e[i] = e[n]))
                    }), Object.freeze(e)
                }
                encode(e, t) {
                    return array_pack(e, this.coders, t)
                }
                decode(e) {
                    return e.coerce(this.name, unpack(e, this.coders))
                }
            };
            let U = new D.Yd(F),
                G = {},
                q = {
                    calldata: !0,
                    memory: !0,
                    storage: !0
                },
                Y = {
                    calldata: !0,
                    memory: !0
                };

            function checkModifier(e, t) {
                if ("bytes" === e || "string" === e) {
                    if (q[t]) return !0
                } else if ("address" === e) {
                    if ("payable" === t) return !0
                } else if ((e.indexOf("[") >= 0 || "tuple" === e) && Y[t]) return !0;
                return (q[t] || "payable" === t) && U.throwArgumentError("invalid modifier", "name", t), !1
            }

            function populate(e, t) {
                for (let r in t)(0, B.zG)(e, r, t[r])
            }
            let $ = Object.freeze({
                    sighash: "sighash",
                    minimal: "minimal",
                    full: "full",
                    json: "json"
                }),
                W = new RegExp(/^(.*)\[([0-9]*)\]$/);
            let ParamType = class ParamType {
                constructor(e, t) {
                    e !== G && U.throwError("use fromString", D.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "new ParamType()"
                    }), populate(this, t);
                    let r = this.type.match(W);
                    r ? populate(this, {
                        arrayLength: parseInt(r[2] || "-1"),
                        arrayChildren: ParamType.fromObject({
                            type: r[1],
                            components: this.components
                        }),
                        baseType: "array"
                    }) : populate(this, {
                        arrayLength: null,
                        arrayChildren: null,
                        baseType: null != this.components ? "tuple" : this.type
                    }), this._isParamType = !0, Object.freeze(this)
                }
                format(e) {
                    if (e || (e = $.sighash), $[e] || U.throwArgumentError("invalid format type", "format", e), e === $.json) {
                        let t = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: this.name || void 0
                        };
                        return "boolean" == typeof this.indexed && (t.indexed = this.indexed), this.components && (t.components = this.components.map(t => JSON.parse(t.format(e)))), JSON.stringify(t)
                    }
                    let t = "";
                    return "array" === this.baseType ? t += this.arrayChildren.format(e) + "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]" : "tuple" === this.baseType ? (e !== $.sighash && (t += this.type), t += "(" + this.components.map(t => t.format(e)).join(e === $.full ? ", " : ",") + ")") : t += this.type, e !== $.sighash && (!0 === this.indexed && (t += " indexed"), e === $.full && this.name && (t += " " + this.name)), t
                }
                static from(e, t) {
                    return "string" == typeof e ? ParamType.fromString(e, t) : ParamType.fromObject(e)
                }
                static fromObject(e) {
                    return ParamType.isParamType(e) ? e : new ParamType(G, {
                        name: e.name || null,
                        type: verifyType(e.type),
                        indexed: null == e.indexed ? null : !!e.indexed,
                        components: e.components ? e.components.map(ParamType.fromObject) : null
                    })
                }
                static fromString(e, t) {
                    var r;
                    return r = function(e, t) {
                        let r = e;

                        function throwError(t) {
                            U.throwArgumentError(`unexpected character at position ${t}`, "param", e)
                        }

                        function newNode(e) {
                            let r = {
                                type: "",
                                name: "",
                                parent: e,
                                state: {
                                    allowType: !0
                                }
                            };
                            return t && (r.indexed = !1), r
                        }
                        e = e.replace(/\s/g, " ");
                        let n = {
                                type: "",
                                name: "",
                                state: {
                                    allowType: !0
                                }
                            },
                            i = n;
                        for (let r = 0; r < e.length; r++) {
                            let n = e[r];
                            switch (n) {
                                case "(":
                                    i.state.allowType && "" === i.type ? i.type = "tuple" : i.state.allowParams || throwError(r), i.state.allowType = !1, i.type = verifyType(i.type), i.components = [newNode(i)], i = i.components[0];
                                    break;
                                case ")":
                                    delete i.state, "indexed" === i.name && (t || throwError(r), i.indexed = !0, i.name = ""), checkModifier(i.type, i.name) && (i.name = ""), i.type = verifyType(i.type);
                                    let s = i;
                                    (i = i.parent) || throwError(r), delete s.parent, i.state.allowParams = !1, i.state.allowName = !0, i.state.allowArray = !0;
                                    break;
                                case ",":
                                    delete i.state, "indexed" === i.name && (t || throwError(r), i.indexed = !0, i.name = ""), checkModifier(i.type, i.name) && (i.name = ""), i.type = verifyType(i.type);
                                    let a = newNode(i.parent);
                                    i.parent.components.push(a), delete i.parent, i = a;
                                    break;
                                case " ":
                                    i.state.allowType && "" !== i.type && (i.type = verifyType(i.type), delete i.state.allowType, i.state.allowName = !0, i.state.allowParams = !0), i.state.allowName && "" !== i.name && ("indexed" === i.name ? (t || throwError(r), i.indexed && throwError(r), i.indexed = !0, i.name = "") : checkModifier(i.type, i.name) ? i.name = "" : i.state.allowName = !1);
                                    break;
                                case "[":
                                    i.state.allowArray || throwError(r), i.type += n, i.state.allowArray = !1, i.state.allowName = !1, i.state.readArray = !0;
                                    break;
                                case "]":
                                    i.state.readArray || throwError(r), i.type += n, i.state.readArray = !1, i.state.allowArray = !0, i.state.allowName = !0;
                                    break;
                                default:
                                    i.state.allowType ? (i.type += n, i.state.allowParams = !0, i.state.allowArray = !0) : i.state.allowName ? (i.name += n, delete i.state.allowArray) : i.state.readArray ? i.type += n : throwError(r)
                            }
                        }
                        return i.parent && U.throwArgumentError("unexpected eof", "param", e), delete n.state, "indexed" === i.name ? (t || throwError(r.length - 7), i.indexed && throwError(r.length - 7), i.indexed = !0, i.name = "") : checkModifier(i.type, i.name) && (i.name = ""), n.type = verifyType(n.type), n
                    }(e, !!t), ParamType.fromObject({
                        name: r.name,
                        type: r.type,
                        indexed: r.indexed,
                        components: r.components
                    })
                }
                static isParamType(e) {
                    return !!(null != e && e._isParamType)
                }
            };

            function parseParams(e, t) {
                return (function(e) {
                    e = e.trim();
                    let t = [],
                        r = "",
                        n = 0;
                    for (let i = 0; i < e.length; i++) {
                        let s = e[i];
                        "," === s && 0 === n ? (t.push(r), r = "") : (r += s, "(" === s ? n++ : ")" === s && -1 == --n && U.throwArgumentError("unbalanced parenthesis", "value", e))
                    }
                    return r && t.push(r), t
                })(e).map(e => ParamType.fromString(e, t))
            }
            let Fragment = class Fragment {
                constructor(e, t) {
                    e !== G && U.throwError("use a static from method", D.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "new Fragment()"
                    }), populate(this, t), this._isFragment = !0, Object.freeze(this)
                }
                static from(e) {
                    return Fragment.isFragment(e) ? e : "string" == typeof e ? Fragment.fromString(e) : Fragment.fromObject(e)
                }
                static fromObject(e) {
                    if (Fragment.isFragment(e)) return e;
                    switch (e.type) {
                        case "function":
                            return FunctionFragment.fromObject(e);
                        case "event":
                            return EventFragment.fromObject(e);
                        case "constructor":
                            return ConstructorFragment.fromObject(e);
                        case "error":
                            return ErrorFragment.fromObject(e);
                        case "fallback":
                        case "receive":
                            return null
                    }
                    return U.throwArgumentError("invalid fragment object", "value", e)
                }
                static fromString(e) {
                    return "event" === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? EventFragment.fromString(e.substring(5).trim()) : "function" === e.split(" ")[0] ? FunctionFragment.fromString(e.substring(8).trim()) : "constructor" === e.split("(")[0].trim() ? ConstructorFragment.fromString(e.trim()) : "error" === e.split(" ")[0] ? ErrorFragment.fromString(e.substring(5).trim()) : U.throwArgumentError("unsupported fragment", "value", e)
                }
                static isFragment(e) {
                    return !!(e && e._isFragment)
                }
            };
            let EventFragment = class EventFragment extends Fragment {
                format(e) {
                    if (e || (e = $.sighash), $[e] || U.throwArgumentError("invalid format type", "format", e), e === $.json) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map(t => JSON.parse(t.format(e)))
                    });
                    let t = "";
                    return e !== $.sighash && (t += "event "), t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === $.full ? ", " : ",") + ") ", e !== $.sighash && this.anonymous && (t += "anonymous "), t.trim()
                }
                static from(e) {
                    return "string" == typeof e ? EventFragment.fromString(e) : EventFragment.fromObject(e)
                }
                static fromObject(e) {
                    if (EventFragment.isEventFragment(e)) return e;
                    "event" !== e.type && U.throwArgumentError("invalid event object", "value", e);
                    let t = {
                        name: verifyIdentifier(e.name),
                        anonymous: e.anonymous,
                        inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
                        type: "event"
                    };
                    return new EventFragment(G, t)
                }
                static fromString(e) {
                    let t = e.match(V);
                    t || U.throwArgumentError("invalid event string", "value", e);
                    let r = !1;
                    return t[3].split(" ").forEach(e => {
                        switch (e.trim()) {
                            case "anonymous":
                                r = !0;
                                break;
                            case "":
                                break;
                            default:
                                U.warn("unknown modifier: " + e)
                        }
                    }), EventFragment.fromObject({
                        name: t[1].trim(),
                        anonymous: r,
                        inputs: parseParams(t[2], !0),
                        type: "event"
                    })
                }
                static isEventFragment(e) {
                    return e && e._isFragment && "event" === e.type
                }
            };

            function parseGas(e, t) {
                t.gas = null;
                let r = e.split("@");
                return 1 !== r.length ? (r.length > 2 && U.throwArgumentError("invalid human-readable ABI signature", "value", e), r[1].match(/^[0-9]+$/) || U.throwArgumentError("invalid human-readable ABI signature gas", "value", e), t.gas = P.O$.from(r[1]), r[0]) : e
            }

            function parseModifiers(e, t) {
                t.constant = !1, t.payable = !1, t.stateMutability = "nonpayable", e.split(" ").forEach(e => {
                    switch (e.trim()) {
                        case "constant":
                            t.constant = !0;
                            break;
                        case "payable":
                            t.payable = !0, t.stateMutability = "payable";
                            break;
                        case "nonpayable":
                            t.payable = !1, t.stateMutability = "nonpayable";
                            break;
                        case "pure":
                            t.constant = !0, t.stateMutability = "pure";
                            break;
                        case "view":
                            t.constant = !0, t.stateMutability = "view";
                            break;
                        case "external":
                        case "public":
                        case "":
                            break;
                        default:
                            console.log("unknown modifier: " + e)
                    }
                })
            }

            function verifyState(e) {
                let t = {
                    constant: !1,
                    payable: !0,
                    stateMutability: "payable"
                };
                return null != e.stateMutability ? (t.stateMutability = e.stateMutability, t.constant = "view" === t.stateMutability || "pure" === t.stateMutability, null != e.constant && !!e.constant !== t.constant && U.throwArgumentError("cannot have constant function with mutability " + t.stateMutability, "value", e), t.payable = "payable" === t.stateMutability, null != e.payable && !!e.payable !== t.payable && U.throwArgumentError("cannot have payable function with mutability " + t.stateMutability, "value", e)) : null != e.payable ? (t.payable = !!e.payable, null != e.constant || t.payable || "constructor" === e.type || U.throwArgumentError("unable to determine stateMutability", "value", e), t.constant = !!e.constant, t.constant ? t.stateMutability = "view" : t.stateMutability = t.payable ? "payable" : "nonpayable", t.payable && t.constant && U.throwArgumentError("cannot have constant payable function", "value", e)) : null != e.constant ? (t.constant = !!e.constant, t.payable = !t.constant, t.stateMutability = t.constant ? "view" : "payable") : "constructor" !== e.type && U.throwArgumentError("unable to determine stateMutability", "value", e), t
            }
            let ConstructorFragment = class ConstructorFragment extends Fragment {
                format(e) {
                    if (e || (e = $.sighash), $[e] || U.throwArgumentError("invalid format type", "format", e), e === $.json) return JSON.stringify({
                        type: "constructor",
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(t => JSON.parse(t.format(e)))
                    });
                    e === $.sighash && U.throwError("cannot format a constructor for sighash", D.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "format(sighash)"
                    });
                    let t = "constructor(" + this.inputs.map(t => t.format(e)).join(e === $.full ? ", " : ",") + ") ";
                    return this.stateMutability && "nonpayable" !== this.stateMutability && (t += this.stateMutability + " "), t.trim()
                }
                static from(e) {
                    return "string" == typeof e ? ConstructorFragment.fromString(e) : ConstructorFragment.fromObject(e)
                }
                static fromObject(e) {
                    if (ConstructorFragment.isConstructorFragment(e)) return e;
                    "constructor" !== e.type && U.throwArgumentError("invalid constructor object", "value", e);
                    let t = verifyState(e);
                    t.constant && U.throwArgumentError("constructor cannot be constant", "value", e);
                    let r = {
                        name: null,
                        type: e.type,
                        inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
                        payable: t.payable,
                        stateMutability: t.stateMutability,
                        gas: e.gas ? P.O$.from(e.gas) : null
                    };
                    return new ConstructorFragment(G, r)
                }
                static fromString(e) {
                    let t = {
                            type: "constructor"
                        },
                        r = (e = parseGas(e, t)).match(V);
                    return r && "constructor" === r[1].trim() || U.throwArgumentError("invalid constructor string", "value", e), t.inputs = parseParams(r[2].trim(), !1), parseModifiers(r[3].trim(), t), ConstructorFragment.fromObject(t)
                }
                static isConstructorFragment(e) {
                    return e && e._isFragment && "constructor" === e.type
                }
            };
            let FunctionFragment = class FunctionFragment extends ConstructorFragment {
                format(e) {
                    if (e || (e = $.sighash), $[e] || U.throwArgumentError("invalid format type", "format", e), e === $.json) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(t => JSON.parse(t.format(e))),
                        outputs: this.outputs.map(t => JSON.parse(t.format(e)))
                    });
                    let t = "";
                    return e !== $.sighash && (t += "function "), t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === $.full ? ", " : ",") + ") ", e !== $.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (t += this.stateMutability + " ") : this.constant && (t += "view "), this.outputs && this.outputs.length && (t += "returns (" + this.outputs.map(t => t.format(e)).join(", ") + ") "), null != this.gas && (t += "@" + this.gas.toString() + " ")), t.trim()
                }
                static from(e) {
                    return "string" == typeof e ? FunctionFragment.fromString(e) : FunctionFragment.fromObject(e)
                }
                static fromObject(e) {
                    if (FunctionFragment.isFunctionFragment(e)) return e;
                    "function" !== e.type && U.throwArgumentError("invalid function object", "value", e);
                    let t = verifyState(e),
                        r = {
                            type: e.type,
                            name: verifyIdentifier(e.name),
                            constant: t.constant,
                            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
                            outputs: e.outputs ? e.outputs.map(ParamType.fromObject) : [],
                            payable: t.payable,
                            stateMutability: t.stateMutability,
                            gas: e.gas ? P.O$.from(e.gas) : null
                        };
                    return new FunctionFragment(G, r)
                }
                static fromString(e) {
                    let t = {
                            type: "function"
                        },
                        r = (e = parseGas(e, t)).split(" returns ");
                    r.length > 2 && U.throwArgumentError("invalid function string", "value", e);
                    let n = r[0].match(V);
                    if (n || U.throwArgumentError("invalid function signature", "value", e), t.name = n[1].trim(), t.name && verifyIdentifier(t.name), t.inputs = parseParams(n[2], !1), parseModifiers(n[3].trim(), t), r.length > 1) {
                        let n = r[1].match(V);
                        ("" != n[1].trim() || "" != n[3].trim()) && U.throwArgumentError("unexpected tokens", "value", e), t.outputs = parseParams(n[2], !1)
                    } else t.outputs = [];
                    return FunctionFragment.fromObject(t)
                }
                static isFunctionFragment(e) {
                    return e && e._isFragment && "function" === e.type
                }
            };

            function checkForbidden(e) {
                let t = e.format();
                return ("Error(string)" === t || "Panic(uint256)" === t) && U.throwArgumentError(`cannot specify user defined ${t} error`, "fragment", e), e
            }
            let ErrorFragment = class ErrorFragment extends Fragment {
                format(e) {
                    if (e || (e = $.sighash), $[e] || U.throwArgumentError("invalid format type", "format", e), e === $.json) return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map(t => JSON.parse(t.format(e)))
                    });
                    let t = "";
                    return e !== $.sighash && (t += "error "), (t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === $.full ? ", " : ",") + ") ").trim()
                }
                static from(e) {
                    return "string" == typeof e ? ErrorFragment.fromString(e) : ErrorFragment.fromObject(e)
                }
                static fromObject(e) {
                    if (ErrorFragment.isErrorFragment(e)) return e;
                    "error" !== e.type && U.throwArgumentError("invalid error object", "value", e);
                    let t = {
                        type: e.type,
                        name: verifyIdentifier(e.name),
                        inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : []
                    };
                    return checkForbidden(new ErrorFragment(G, t))
                }
                static fromString(e) {
                    let t = {
                            type: "error"
                        },
                        r = e.match(V);
                    return r || U.throwArgumentError("invalid error signature", "value", e), t.name = r[1].trim(), t.name && verifyIdentifier(t.name), t.inputs = parseParams(r[2], !1), checkForbidden(ErrorFragment.fromObject(t))
                }
                static isErrorFragment(e) {
                    return e && e._isFragment && "error" === e.type
                }
            };

            function verifyType(e) {
                return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e
            }
            let K = RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

            function verifyIdentifier(e) {
                return e && e.match(K) || U.throwArgumentError(`invalid identifier "${e}"`, "value", e), e
            }
            let V = RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),
                H = new D.Yd(F),
                J = new RegExp(/^bytes([0-9]*)$/),
                Z = new RegExp(/^(u?int)([0-9]*)$/),
                X = new class {
                    constructor(e) {
                        (0, B.zG)(this, "coerceFunc", e || null)
                    }
                    _getCoder(e) {
                        switch (e.baseType) {
                            case "address":
                                return new AddressCoder(e.name);
                            case "bool":
                                return new BooleanCoder(e.name);
                            case "string":
                                return new StringCoder(e.name);
                            case "bytes":
                                return new BytesCoder(e.name);
                            case "array":
                                return new ArrayCoder(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
                            case "tuple":
                                return new TupleCoder((e.components || []).map(e => this._getCoder(e)), e.name);
                            case "":
                                return new NullCoder(e.name)
                        }
                        let t = e.type.match(Z);
                        if (t) {
                            let r = parseInt(t[2] || "256");
                            return (0 === r || r > 256 || r % 8 != 0) && H.throwArgumentError("invalid " + t[1] + " bit length", "param", e), new NumberCoder(r / 8, "int" === t[1], e.name)
                        }
                        if (t = e.type.match(J)) {
                            let r = parseInt(t[1]);
                            return (0 === r || r > 32) && H.throwArgumentError("invalid bytes length", "param", e), new FixedBytesCoder(r, e.name)
                        }
                        return H.throwArgumentError("invalid type", "type", e.type)
                    }
                    _getWordSize() {
                        return 32
                    }
                    _getReader(e, t) {
                        return new Reader(e, this._getWordSize(), this.coerceFunc, t)
                    }
                    _getWriter() {
                        return new Writer(this._getWordSize())
                    }
                    getDefaultValue(e) {
                        let t = e.map(e => this._getCoder(ParamType.from(e))),
                            r = new TupleCoder(t, "_");
                        return r.defaultValue()
                    }
                    encode(e, t) {
                        e.length !== t.length && H.throwError("types/values length mismatch", D.Yd.errors.INVALID_ARGUMENT, {
                            count: {
                                types: e.length,
                                values: t.length
                            },
                            value: {
                                types: e,
                                values: t
                            }
                        });
                        let r = e.map(e => this._getCoder(ParamType.from(e))),
                            n = new TupleCoder(r, "_"),
                            i = this._getWriter();
                        return n.encode(i, t), i.data
                    }
                    decode(e, t, r) {
                        let n = e.map(e => this._getCoder(ParamType.from(e))),
                            i = new TupleCoder(n, "_");
                        return i.decode(this._getReader((0, S.lE)(t), r))
                    }
                },
                Q = new D.Yd(F);
            let LogDescription = class LogDescription extends B.dk {};
            let TransactionDescription = class TransactionDescription extends B.dk {};
            let ErrorDescription = class ErrorDescription extends B.dk {};
            let Indexed = class Indexed extends B.dk {
                static isIndexed(e) {
                    return !!(e && e._isIndexed)
                }
            };
            let ee = {
                "0x08c379a0": {
                    signature: "Error(string)",
                    name: "Error",
                    inputs: ["string"],
                    reason: !0
                },
                "0x4e487b71": {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    inputs: ["uint256"]
                }
            };

            function wrapAccessError(e, t) {
                let r = Error(`deferred error during ABI decoding triggered accessing ${e}`);
                return r.error = t, r
            }
            let Interface = class Interface {
                constructor(e) {
                    let t = [];
                    t = "string" == typeof e ? JSON.parse(e) : e, (0, B.zG)(this, "fragments", t.map(e => Fragment.from(e)).filter(e => null != e)), (0, B.zG)(this, "_abiCoder", (0, B.tu)(new.target, "getAbiCoder")()), (0, B.zG)(this, "functions", {}), (0, B.zG)(this, "errors", {}), (0, B.zG)(this, "events", {}), (0, B.zG)(this, "structs", {}), this.fragments.forEach(e => {
                        let t = null;
                        switch (e.type) {
                            case "constructor":
                                if (this.deploy) {
                                    Q.warn("duplicate definition - constructor");
                                    return
                                }(0, B.zG)(this, "deploy", e);
                                return;
                            case "function":
                                t = this.functions;
                                break;
                            case "event":
                                t = this.events;
                                break;
                            case "error":
                                t = this.errors;
                                break;
                            default:
                                return
                        }
                        let r = e.format();
                        if (t[r]) {
                            Q.warn("duplicate definition - " + r);
                            return
                        }
                        t[r] = e
                    }), this.deploy || (0, B.zG)(this, "deploy", ConstructorFragment.from({
                        payable: !1,
                        type: "constructor"
                    })), (0, B.zG)(this, "_isInterface", !0)
                }
                format(e) {
                    e || (e = $.full), e === $.sighash && Q.throwArgumentError("interface does not support formatting sighash", "format", e);
                    let t = this.fragments.map(t => t.format(e));
                    return e === $.json ? JSON.stringify(t.map(e => JSON.parse(e))) : t
                }
                static getAbiCoder() {
                    return X
                }
                static getAddress(e) {
                    return (0, v.Kn)(e)
                }
                static getSighash(e) {
                    return (0, S.p3)((0, j.id)(e.format()), 0, 4)
                }
                static getEventTopic(e) {
                    return (0, j.id)(e.format())
                }
                getFunction(e) {
                    if ((0, S.A7)(e)) {
                        for (let t in this.functions)
                            if (e === this.getSighash(t)) return this.functions[t];
                        Q.throwArgumentError("no matching function", "sighash", e)
                    }
                    if (-1 === e.indexOf("(")) {
                        let t = e.trim(),
                            r = Object.keys(this.functions).filter(e => e.split("(")[0] === t);
                        return 0 === r.length ? Q.throwArgumentError("no matching function", "name", t) : r.length > 1 && Q.throwArgumentError("multiple matching functions", "name", t), this.functions[r[0]]
                    }
                    let t = this.functions[FunctionFragment.fromString(e).format()];
                    return t || Q.throwArgumentError("no matching function", "signature", e), t
                }
                getEvent(e) {
                    if ((0, S.A7)(e)) {
                        let t = e.toLowerCase();
                        for (let e in this.events)
                            if (t === this.getEventTopic(e)) return this.events[e];
                        Q.throwArgumentError("no matching event", "topichash", t)
                    }
                    if (-1 === e.indexOf("(")) {
                        let t = e.trim(),
                            r = Object.keys(this.events).filter(e => e.split("(")[0] === t);
                        return 0 === r.length ? Q.throwArgumentError("no matching event", "name", t) : r.length > 1 && Q.throwArgumentError("multiple matching events", "name", t), this.events[r[0]]
                    }
                    let t = this.events[EventFragment.fromString(e).format()];
                    return t || Q.throwArgumentError("no matching event", "signature", e), t
                }
                getError(e) {
                    if ((0, S.A7)(e)) {
                        let t = (0, B.tu)(this.constructor, "getSighash");
                        for (let r in this.errors) {
                            let n = this.errors[r];
                            if (e === t(n)) return this.errors[r]
                        }
                        Q.throwArgumentError("no matching error", "sighash", e)
                    }
                    if (-1 === e.indexOf("(")) {
                        let t = e.trim(),
                            r = Object.keys(this.errors).filter(e => e.split("(")[0] === t);
                        return 0 === r.length ? Q.throwArgumentError("no matching error", "name", t) : r.length > 1 && Q.throwArgumentError("multiple matching errors", "name", t), this.errors[r[0]]
                    }
                    let t = this.errors[FunctionFragment.fromString(e).format()];
                    return t || Q.throwArgumentError("no matching error", "signature", e), t
                }
                getSighash(e) {
                    if ("string" == typeof e) try {
                        e = this.getFunction(e)
                    } catch (t) {
                        try {
                            e = this.getError(e)
                        } catch (e) {
                            throw t
                        }
                    }
                    return (0, B.tu)(this.constructor, "getSighash")(e)
                }
                getEventTopic(e) {
                    return "string" == typeof e && (e = this.getEvent(e)), (0, B.tu)(this.constructor, "getEventTopic")(e)
                }
                _decodeParams(e, t) {
                    return this._abiCoder.decode(e, t)
                }
                _encodeParams(e, t) {
                    return this._abiCoder.encode(e, t)
                }
                encodeDeploy(e) {
                    return this._encodeParams(this.deploy.inputs, e || [])
                }
                decodeErrorResult(e, t) {
                    "string" == typeof e && (e = this.getError(e));
                    let r = (0, S.lE)(t);
                    return (0, S.Dv)(r.slice(0, 4)) !== this.getSighash(e) && Q.throwArgumentError(`data signature does not match error ${e.name}.`, "data", (0, S.Dv)(r)), this._decodeParams(e.inputs, r.slice(4))
                }
                encodeErrorResult(e, t) {
                    return "string" == typeof e && (e = this.getError(e)), (0, S.Dv)((0, S.zo)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
                }
                decodeFunctionData(e, t) {
                    "string" == typeof e && (e = this.getFunction(e));
                    let r = (0, S.lE)(t);
                    return (0, S.Dv)(r.slice(0, 4)) !== this.getSighash(e) && Q.throwArgumentError(`data signature does not match function ${e.name}.`, "data", (0, S.Dv)(r)), this._decodeParams(e.inputs, r.slice(4))
                }
                encodeFunctionData(e, t) {
                    return "string" == typeof e && (e = this.getFunction(e)), (0, S.Dv)((0, S.zo)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
                }
                decodeFunctionResult(e, t) {
                    "string" == typeof e && (e = this.getFunction(e));
                    let r = (0, S.lE)(t),
                        n = null,
                        i = "",
                        s = null,
                        a = null,
                        u = null;
                    switch (r.length % this._abiCoder._getWordSize()) {
                        case 0:
                            try {
                                return this._abiCoder.decode(e.outputs, r)
                            } catch (e) {}
                            break;
                        case 4:
                            {
                                let e = (0, S.Dv)(r.slice(0, 4)),
                                    t = ee[e];
                                if (t) s = this._abiCoder.decode(t.inputs, r.slice(4)),
                                a = t.name,
                                u = t.signature,
                                t.reason && (n = s[0]),
                                "Error" === a ? i = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(s[0])}` : "Panic" === a && (i = `; VM Exception while processing transaction: reverted with panic code ${s[0]}`);
                                else try {
                                    let t = this.getError(e);
                                    s = this._abiCoder.decode(t.inputs, r.slice(4)), a = t.name, u = t.format()
                                } catch (e) {}
                            }
                    }
                    return Q.throwError("call revert exception" + i, D.Yd.errors.CALL_EXCEPTION, {
                        method: e.format(),
                        data: (0, S.Dv)(t),
                        errorArgs: s,
                        errorName: a,
                        errorSignature: u,
                        reason: n
                    })
                }
                encodeFunctionResult(e, t) {
                    return "string" == typeof e && (e = this.getFunction(e)), (0, S.Dv)(this._abiCoder.encode(e.outputs, t || []))
                }
                encodeFilterTopics(e, t) {
                    "string" == typeof e && (e = this.getEvent(e)), t.length > e.inputs.length && Q.throwError("too many arguments for " + e.format(), D.Yd.errors.UNEXPECTED_ARGUMENT, {
                        argument: "values",
                        value: t
                    });
                    let r = [];
                    e.anonymous || r.push(this.getEventTopic(e));
                    let encodeTopic = (e, t) => "string" === e.type ? (0, j.id)(t) : "bytes" === e.type ? (0, O.w)((0, S.Dv)(t)) : ("bool" === e.type && "boolean" == typeof t && (t = t ? "0x01" : "0x00"), e.type.match(/^u?int/) && (t = P.O$.from(t).toHexString()), "address" === e.type && this._abiCoder.encode(["address"], [t]), (0, S.$m)((0, S.Dv)(t), 32));
                    for (t.forEach((t, n) => {
                            let i = e.inputs[n];
                            if (!i.indexed) {
                                null != t && Q.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + i.name, t);
                                return
                            }
                            null == t ? r.push(null) : "array" === i.baseType || "tuple" === i.baseType ? Q.throwArgumentError("filtering with tuples or arrays not supported", "contract." + i.name, t) : Array.isArray(t) ? r.push(t.map(e => encodeTopic(i, e))) : r.push(encodeTopic(i, t))
                        }); r.length && null === r[r.length - 1];) r.pop();
                    return r
                }
                encodeEventLog(e, t) {
                    "string" == typeof e && (e = this.getEvent(e));
                    let r = [],
                        n = [],
                        i = [];
                    return e.anonymous || r.push(this.getEventTopic(e)), t.length !== e.inputs.length && Q.throwArgumentError("event arguments/values mismatch", "values", t), e.inputs.forEach((e, s) => {
                        let a = t[s];
                        if (e.indexed) {
                            if ("string" === e.type) r.push((0, j.id)(a));
                            else if ("bytes" === e.type) r.push((0, O.w)(a));
                            else if ("tuple" === e.baseType || "array" === e.baseType) throw Error("not implemented");
                            else r.push(this._abiCoder.encode([e.type], [a]))
                        } else n.push(e), i.push(a)
                    }), {
                        data: this._abiCoder.encode(n, i),
                        topics: r
                    }
                }
                decodeEventLog(e, t, r) {
                    if ("string" == typeof e && (e = this.getEvent(e)), null != r && !e.anonymous) {
                        let t = this.getEventTopic(e);
                        (0, S.A7)(r[0], 32) && r[0].toLowerCase() === t || Q.throwError("fragment/topic mismatch", D.Yd.errors.INVALID_ARGUMENT, {
                            argument: "topics[0]",
                            expected: t,
                            value: r[0]
                        }), r = r.slice(1)
                    }
                    let n = [],
                        i = [],
                        s = [];
                    e.inputs.forEach((e, t) => {
                        e.indexed ? "string" === e.type || "bytes" === e.type || "tuple" === e.baseType || "array" === e.baseType ? (n.push(ParamType.fromObject({
                            type: "bytes32",
                            name: e.name
                        })), s.push(!0)) : (n.push(e), s.push(!1)) : (i.push(e), s.push(!1))
                    });
                    let a = null != r ? this._abiCoder.decode(n, (0, S.zo)(r)) : null,
                        u = this._abiCoder.decode(i, t, !0),
                        l = [],
                        c = 0,
                        h = 0;
                    e.inputs.forEach((e, t) => {
                        if (e.indexed) {
                            if (null == a) l[t] = new Indexed({
                                _isIndexed: !0,
                                hash: null
                            });
                            else if (s[t]) l[t] = new Indexed({
                                _isIndexed: !0,
                                hash: a[h++]
                            });
                            else try {
                                l[t] = a[h++]
                            } catch (e) {
                                l[t] = e
                            }
                        } else try {
                            l[t] = u[c++]
                        } catch (e) {
                            l[t] = e
                        }
                        if (e.name && null == l[e.name]) {
                            let r = l[t];
                            r instanceof Error ? Object.defineProperty(l, e.name, {
                                enumerable: !0,
                                get: () => {
                                    throw wrapAccessError(`property ${JSON.stringify(e.name)}`, r)
                                }
                            }) : l[e.name] = r
                        }
                    });
                    for (let e = 0; e < l.length; e++) {
                        let t = l[e];
                        t instanceof Error && Object.defineProperty(l, e, {
                            enumerable: !0,
                            get: () => {
                                throw wrapAccessError(`index ${e}`, t)
                            }
                        })
                    }
                    return Object.freeze(l)
                }
                parseTransaction(e) {
                    let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
                    return t ? new TransactionDescription({
                        args: this._abiCoder.decode(t.inputs, "0x" + e.data.substring(10)),
                        functionFragment: t,
                        name: t.name,
                        signature: t.format(),
                        sighash: this.getSighash(t),
                        value: P.O$.from(e.value || "0")
                    }) : null
                }
                parseLog(e) {
                    let t = this.getEvent(e.topics[0]);
                    return !t || t.anonymous ? null : new LogDescription({
                        eventFragment: t,
                        name: t.name,
                        signature: t.format(),
                        topic: this.getEventTopic(t),
                        args: this.decodeEventLog(t, e.data, e.topics)
                    })
                }
                parseError(e) {
                    let t = (0, S.Dv)(e),
                        r = this.getError(t.substring(0, 10).toLowerCase());
                    return r ? new ErrorDescription({
                        args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
                        errorFragment: r,
                        name: r.name,
                        signature: r.format(),
                        sighash: this.getSighash(r)
                    }) : null
                }
                static isInterface(e) {
                    return !!(e && e._isInterface)
                }
            };
            var et = r(94999),
                er = r(14941),
                en = r(52501),
                __awaiter = function(e, t, r, n) {
                    return new(r || (r = Promise))(function(i, s) {
                        function fulfilled(e) {
                            try {
                                step(n.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(n.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function step(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(e, t || [])).next())
                    })
                };
            let ei = new D.Yd("contracts/5.7.0");

            function resolveName(e, t) {
                return __awaiter(this, void 0, void 0, function*() {
                    let r = yield t;
                    "string" != typeof r && ei.throwArgumentError("invalid address or ENS name", "name", r);
                    try {
                        return (0, v.Kn)(r)
                    } catch (e) {}
                    e || ei.throwError("a provider or signer is needed to resolve ENS names", D.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "resolveName"
                    });
                    let n = yield e.resolveName(r);
                    return null == n && ei.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n
                })
            }

            function populateTransaction(e, t, r) {
                return __awaiter(this, void 0, void 0, function*() {
                    let n = {};
                    r.length === t.inputs.length + 1 && "object" == typeof r[r.length - 1] && (n = (0, B.DC)(r.pop())), ei.checkArgumentCount(r.length, t.inputs.length, "passed to contract"), e.signer ? n.from ? n.from = (0, B.mE)({
                        override: resolveName(e.signer, n.from),
                        signer: e.signer.getAddress()
                    }).then(e => __awaiter(this, void 0, void 0, function*() {
                        return (0, v.Kn)(e.signer) !== e.override && ei.throwError("Contract with a Signer cannot override from", D.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.from"
                        }), e.override
                    })) : n.from = e.signer.getAddress() : n.from && (n.from = resolveName(e.provider, n.from));
                    let i = yield(0, B.mE)({
                        args: function resolveAddresses(e, t, r) {
                            return __awaiter(this, void 0, void 0, function*() {
                                return Array.isArray(r) ? yield Promise.all(r.map((r, n) => resolveAddresses(e, Array.isArray(t) ? t[n] : t[r.name], r))): "address" === r.type ? yield resolveName(e, t): "tuple" === r.type ? yield resolveAddresses(e, t, r.components): "array" === r.baseType ? Array.isArray(t) ? yield Promise.all(t.map(t => resolveAddresses(e, t, r.arrayChildren))): Promise.reject(ei.makeError("invalid value for array", D.Yd.errors.INVALID_ARGUMENT, {
                                    argument: "value",
                                    value: t
                                })): t
                            })
                        }(e.signer || e.provider, r, t.inputs),
                        address: e.resolvedAddress,
                        overrides: (0, B.mE)(n) || {}
                    }), s = e.interface.encodeFunctionData(t, i.args), a = {
                        data: s,
                        to: i.address
                    }, u = i.overrides;
                    if (null != u.nonce && (a.nonce = P.O$.from(u.nonce).toNumber()), null != u.gasLimit && (a.gasLimit = P.O$.from(u.gasLimit)), null != u.gasPrice && (a.gasPrice = P.O$.from(u.gasPrice)), null != u.maxFeePerGas && (a.maxFeePerGas = P.O$.from(u.maxFeePerGas)), null != u.maxPriorityFeePerGas && (a.maxPriorityFeePerGas = P.O$.from(u.maxPriorityFeePerGas)), null != u.from && (a.from = u.from), null != u.type && (a.type = u.type), null != u.accessList && (a.accessList = (0, en.z7)(u.accessList)), null == a.gasLimit && null != t.gas) {
                        let e = 21e3,
                            r = (0, S.lE)(s);
                        for (let t = 0; t < r.length; t++) e += 4, r[t] && (e += 64);
                        a.gasLimit = P.O$.from(t.gas).add(e)
                    }
                    if (u.value) {
                        let e = P.O$.from(u.value);
                        e.isZero() || t.payable || ei.throwError("non-payable method cannot override value", D.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.value",
                            value: n.value
                        }), a.value = e
                    }
                    u.customData && (a.customData = (0, B.DC)(u.customData)), u.ccipReadEnabled && (a.ccipReadEnabled = !!u.ccipReadEnabled), delete n.nonce, delete n.gasLimit, delete n.gasPrice, delete n.from, delete n.value, delete n.type, delete n.accessList, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.customData, delete n.ccipReadEnabled;
                    let l = Object.keys(n).filter(e => null != n[e]);
                    return l.length && ei.throwError(`cannot override ${l.map(e=>JSON.stringify(e)).join(",")}`, D.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "overrides",
                        overrides: l
                    }), a
                })
            }

            function buildCall(e, t, r) {
                let n = e.signer || e.provider;
                return function(...i) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let s;
                        if (i.length === t.inputs.length + 1 && "object" == typeof i[i.length - 1]) {
                            let e = (0, B.DC)(i.pop());
                            null != e.blockTag && (s = yield e.blockTag), delete e.blockTag, i.push(e)
                        }
                        null != e.deployTransaction && (yield e._deployed(s));
                        let a = yield populateTransaction(e, t, i), u = yield n.call(a, s);
                        try {
                            let n = e.interface.decodeFunctionResult(t, u);
                            return r && 1 === t.outputs.length && (n = n[0]), n
                        } catch (t) {
                            throw t.code === D.Yd.errors.CALL_EXCEPTION && (t.address = e.address, t.args = i, t.transaction = a), t
                        }
                    })
                }
            }

            function buildDefault(e, t, r) {
                return t.constant ? buildCall(e, t, r) : function(...r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        e.signer || ei.throwError("sending a transaction requires a signer", D.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "sendTransaction"
                        }), null != e.deployTransaction && (yield e._deployed());
                        let n = yield populateTransaction(e, t, r), i = yield e.signer.sendTransaction(n);
                        return function(e, t) {
                            let r = t.wait.bind(t);
                            t.wait = t => r(t).then(t => (t.events = t.logs.map(r => {
                                let n = (0, B.p$)(r),
                                    i = null;
                                try {
                                    i = e.interface.parseLog(r)
                                } catch (e) {}
                                return i && (n.args = i.args, n.decode = (t, r) => e.interface.decodeEventLog(i.eventFragment, t, r), n.event = i.name, n.eventSignature = i.signature), n.removeListener = () => e.provider, n.getBlock = () => e.provider.getBlock(t.blockHash), n.getTransaction = () => e.provider.getTransaction(t.transactionHash), n.getTransactionReceipt = () => Promise.resolve(t), n
                            }), t))
                        }(e, i), i
                    })
                }
            }

            function getEventTag(e) {
                return e.address && (null == e.topics || 0 === e.topics.length) ? "*" : (e.address || "*") + "@" + (e.topics ? e.topics.map(e => Array.isArray(e) ? e.join("|") : e).join(":") : "")
            }
            let RunningEvent = class RunningEvent {
                constructor(e, t) {
                    (0, B.zG)(this, "tag", e), (0, B.zG)(this, "filter", t), this._listeners = []
                }
                addListener(e, t) {
                    this._listeners.push({
                        listener: e,
                        once: t
                    })
                }
                removeListener(e) {
                    let t = !1;
                    this._listeners = this._listeners.filter(r => !!t || r.listener !== e || (t = !0, !1))
                }
                removeAllListeners() {
                    this._listeners = []
                }
                listeners() {
                    return this._listeners.map(e => e.listener)
                }
                listenerCount() {
                    return this._listeners.length
                }
                run(e) {
                    let t = this.listenerCount();
                    return this._listeners = this._listeners.filter(t => {
                        let r = e.slice();
                        return setTimeout(() => {
                            t.listener.apply(this, r)
                        }, 0), !t.once
                    }), t
                }
                prepareEvent(e) {}
                getEmit(e) {
                    return [e]
                }
            };
            let ErrorRunningEvent = class ErrorRunningEvent extends RunningEvent {
                constructor() {
                    super("error", null)
                }
            };
            let FragmentRunningEvent = class FragmentRunningEvent extends RunningEvent {
                constructor(e, t, r, n) {
                    let i = {
                            address: e
                        },
                        s = t.getEventTopic(r);
                    n ? (s !== n[0] && ei.throwArgumentError("topic mismatch", "topics", n), i.topics = n.slice()) : i.topics = [s], super(getEventTag(i), i), (0, B.zG)(this, "address", e), (0, B.zG)(this, "interface", t), (0, B.zG)(this, "fragment", r)
                }
                prepareEvent(e) {
                    super.prepareEvent(e), e.event = this.fragment.name, e.eventSignature = this.fragment.format(), e.decode = (e, t) => this.interface.decodeEventLog(this.fragment, e, t);
                    try {
                        e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics)
                    } catch (t) {
                        e.args = null, e.decodeError = t
                    }
                }
                getEmit(e) {
                    let t = function(e) {
                        let t = [],
                            checkErrors = function(e, r) {
                                if (Array.isArray(r))
                                    for (let n in r) {
                                        let i = e.slice();
                                        i.push(n);
                                        try {
                                            checkErrors(i, r[n])
                                        } catch (e) {
                                            t.push({
                                                path: i,
                                                error: e
                                            })
                                        }
                                    }
                            };
                        return checkErrors([], e), t
                    }(e.args);
                    if (t.length) throw t[0].error;
                    let r = (e.args || []).slice();
                    return r.push(e), r
                }
            };
            let WildcardRunningEvent = class WildcardRunningEvent extends RunningEvent {
                constructor(e, t) {
                    super("*", {
                        address: e
                    }), (0, B.zG)(this, "address", e), (0, B.zG)(this, "interface", t)
                }
                prepareEvent(e) {
                    super.prepareEvent(e);
                    try {
                        let t = this.interface.parseLog(e);
                        e.event = t.name, e.eventSignature = t.signature, e.decode = (e, r) => this.interface.decodeEventLog(t.eventFragment, e, r), e.args = t.args
                    } catch (e) {}
                }
            };
            let BaseContract = class BaseContract {
                constructor(e, t, r) {
                    (0, B.zG)(this, "interface", (0, B.tu)(new.target, "getInterface")(t)), null == r ? ((0, B.zG)(this, "provider", null), (0, B.zG)(this, "signer", null)) : er.E.isSigner(r) ? ((0, B.zG)(this, "provider", r.provider || null), (0, B.zG)(this, "signer", r)) : et.zt.isProvider(r) ? ((0, B.zG)(this, "provider", r), (0, B.zG)(this, "signer", null)) : ei.throwArgumentError("invalid signer or provider", "signerOrProvider", r), (0, B.zG)(this, "callStatic", {}), (0, B.zG)(this, "estimateGas", {}), (0, B.zG)(this, "functions", {}), (0, B.zG)(this, "populateTransaction", {}), (0, B.zG)(this, "filters", {}); {
                        let e = {};
                        Object.keys(this.interface.events).forEach(t => {
                            let r = this.interface.events[t];
                            (0, B.zG)(this.filters, t, (...e) => ({
                                address: this.address,
                                topics: this.interface.encodeFilterTopics(r, e)
                            })), e[r.name] || (e[r.name] = []), e[r.name].push(t)
                        }), Object.keys(e).forEach(t => {
                            let r = e[t];
                            1 === r.length ? (0, B.zG)(this.filters, t, this.filters[r[0]]) : ei.warn(`Duplicate definition of ${t} (${r.join(", ")})`)
                        })
                    }
                    if ((0, B.zG)(this, "_runningEvents", {}), (0, B.zG)(this, "_wrappedEmits", {}), null == e && ei.throwArgumentError("invalid contract address or ENS name", "addressOrName", e), (0, B.zG)(this, "address", e), this.provider)(0, B.zG)(this, "resolvedAddress", resolveName(this.provider, e));
                    else try {
                        (0, B.zG)(this, "resolvedAddress", Promise.resolve((0, v.Kn)(e)))
                    } catch (e) {
                        ei.throwError("provider is required to use ENS name as contract address", D.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "new Contract"
                        })
                    }
                    this.resolvedAddress.catch(e => {});
                    let n = {},
                        i = {};
                    Object.keys(this.interface.functions).forEach(e => {
                        let t = this.interface.functions[e];
                        if (i[e]) {
                            ei.warn(`Duplicate ABI entry for ${JSON.stringify(e)}`);
                            return
                        }
                        i[e] = !0; {
                            let r = t.name;
                            n[`%${r}`] || (n[`%${r}`] = []), n[`%${r}`].push(e)
                        }
                        if (null == this[e] && (0, B.zG)(this, e, buildDefault(this, t, !0)), null == this.functions[e] && (0, B.zG)(this.functions, e, buildDefault(this, t, !1)), null == this.callStatic[e] && (0, B.zG)(this.callStatic, e, buildCall(this, t, !0)), null == this.populateTransaction[e]) {
                            var r;
                            (0, B.zG)(this.populateTransaction, e, (r = this, function(...e) {
                                return populateTransaction(r, t, e)
                            }))
                        }
                        null == this.estimateGas[e] && (0, B.zG)(this.estimateGas, e, function(e, t) {
                            let r = e.signer || e.provider;
                            return function(...n) {
                                return __awaiter(this, void 0, void 0, function*() {
                                    r || ei.throwError("estimate require a provider or signer", D.Yd.errors.UNSUPPORTED_OPERATION, {
                                        operation: "estimateGas"
                                    });
                                    let i = yield populateTransaction(e, t, n);
                                    return yield r.estimateGas(i)
                                })
                            }
                        }(this, t))
                    }), Object.keys(n).forEach(e => {
                        let t = n[e];
                        if (t.length > 1) return;
                        e = e.substring(1);
                        let r = t[0];
                        try {
                            null == this[e] && (0, B.zG)(this, e, this[r])
                        } catch (e) {}
                        null == this.functions[e] && (0, B.zG)(this.functions, e, this.functions[r]), null == this.callStatic[e] && (0, B.zG)(this.callStatic, e, this.callStatic[r]), null == this.populateTransaction[e] && (0, B.zG)(this.populateTransaction, e, this.populateTransaction[r]), null == this.estimateGas[e] && (0, B.zG)(this.estimateGas, e, this.estimateGas[r])
                    })
                }
                static getContractAddress(e) {
                    return (0, v.CR)(e)
                }
                static getInterface(e) {
                    return Interface.isInterface(e) ? e : new Interface(e)
                }
                deployed() {
                    return this._deployed()
                }
                _deployed(e) {
                    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, e).then(e => ("0x" === e && ei.throwError("contract not deployed", D.Yd.errors.UNSUPPORTED_OPERATION, {
                        contractAddress: this.address,
                        operation: "getDeployed"
                    }), this))), this._deployedPromise
                }
                fallback(e) {
                    this.signer || ei.throwError("sending a transactions require a signer", D.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "sendTransaction(fallback)"
                    });
                    let t = (0, B.DC)(e || {});
                    return ["from", "to"].forEach(function(e) {
                        null != t[e] && ei.throwError("cannot override " + e, D.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: e
                        })
                    }), t.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(t))
                }
                connect(e) {
                    "string" == typeof e && (e = new er.b(e, this.provider));
                    let t = new this.constructor(this.address, this.interface, e);
                    return this.deployTransaction && (0, B.zG)(t, "deployTransaction", this.deployTransaction), t
                }
                attach(e) {
                    return new this.constructor(e, this.interface, this.signer || this.provider)
                }
                static isIndexed(e) {
                    return Indexed.isIndexed(e)
                }
                _normalizeRunningEvent(e) {
                    return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e
                }
                _getRunningEvent(e) {
                    if ("string" == typeof e) {
                        if ("error" === e) return this._normalizeRunningEvent(new ErrorRunningEvent);
                        if ("event" === e) return this._normalizeRunningEvent(new RunningEvent("event", null));
                        if ("*" === e) return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface));
                        let t = this.interface.getEvent(e);
                        return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, t))
                    }
                    if (e.topics && e.topics.length > 0) {
                        try {
                            let t = e.topics[0];
                            if ("string" != typeof t) throw Error("invalid topic");
                            let r = this.interface.getEvent(t);
                            return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, r, e.topics))
                        } catch (e) {}
                        let t = {
                            address: this.address,
                            topics: e.topics
                        };
                        return this._normalizeRunningEvent(new RunningEvent(getEventTag(t), t))
                    }
                    return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface))
                }
                _checkRunningEvents(e) {
                    if (0 === e.listenerCount()) {
                        delete this._runningEvents[e.tag];
                        let t = this._wrappedEmits[e.tag];
                        t && e.filter && (this.provider.off(e.filter, t), delete this._wrappedEmits[e.tag])
                    }
                }
                _wrapEvent(e, t, r) {
                    let n = (0, B.p$)(t);
                    return n.removeListener = () => {
                        r && (e.removeListener(r), this._checkRunningEvents(e))
                    }, n.getBlock = () => this.provider.getBlock(t.blockHash), n.getTransaction = () => this.provider.getTransaction(t.transactionHash), n.getTransactionReceipt = () => this.provider.getTransactionReceipt(t.transactionHash), e.prepareEvent(n), n
                }
                _addEventListener(e, t, r) {
                    if (this.provider || ei.throwError("events require a provider or a signer with a provider", D.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "once"
                        }), e.addListener(t, r), this._runningEvents[e.tag] = e, !this._wrappedEmits[e.tag]) {
                        let wrappedEmit = r => {
                            let n = this._wrapEvent(e, r, t);
                            if (null == n.decodeError) try {
                                let t = e.getEmit(n);
                                this.emit(e.filter, ...t)
                            } catch (e) {
                                n.decodeError = e.error
                            }
                            null != e.filter && this.emit("event", n), null != n.decodeError && this.emit("error", n.decodeError, n)
                        };
                        this._wrappedEmits[e.tag] = wrappedEmit, null != e.filter && this.provider.on(e.filter, wrappedEmit)
                    }
                }
                queryFilter(e, t, r) {
                    let n = this._getRunningEvent(e),
                        i = (0, B.DC)(n.filter);
                    return "string" == typeof t && (0, S.A7)(t, 32) ? (null != r && ei.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", r), i.blockHash = t) : (i.fromBlock = null != t ? t : 0, i.toBlock = null != r ? r : "latest"), this.provider.getLogs(i).then(e => e.map(e => this._wrapEvent(n, e, null)))
                }
                on(e, t) {
                    return this._addEventListener(this._getRunningEvent(e), t, !1), this
                }
                once(e, t) {
                    return this._addEventListener(this._getRunningEvent(e), t, !0), this
                }
                emit(e, ...t) {
                    if (!this.provider) return !1;
                    let r = this._getRunningEvent(e),
                        n = r.run(t) > 0;
                    return this._checkRunningEvents(r), n
                }
                listenerCount(e) {
                    return this.provider ? null == e ? Object.keys(this._runningEvents).reduce((e, t) => e + this._runningEvents[t].listenerCount(), 0) : this._getRunningEvent(e).listenerCount() : 0
                }
                listeners(e) {
                    if (!this.provider) return [];
                    if (null == e) {
                        let e = [];
                        for (let t in this._runningEvents) this._runningEvents[t].listeners().forEach(t => {
                            e.push(t)
                        });
                        return e
                    }
                    return this._getRunningEvent(e).listeners()
                }
                removeAllListeners(e) {
                    if (!this.provider) return this;
                    if (null == e) {
                        for (let e in this._runningEvents) {
                            let t = this._runningEvents[e];
                            t.removeAllListeners(), this._checkRunningEvents(t)
                        }
                        return this
                    }
                    let t = this._getRunningEvent(e);
                    return t.removeAllListeners(), this._checkRunningEvents(t), this
                }
                off(e, t) {
                    if (!this.provider) return this;
                    let r = this._getRunningEvent(e);
                    return r.removeListener(t), this._checkRunningEvents(r), this
                }
                removeListener(e, t) {
                    return this.off(e, t)
                }
            };
            let Contract = class Contract extends BaseContract {};
            var eo = r(30795),
                es = r(71497),
                ea = r(89067),
                eu = r(61127),
                el = r(12312);
            let ec = new D.Yd(el.i),
                eh = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
            let AnkrProvider = class AnkrProvider extends eu.l {
                isCommunityResource() {
                    return this.apiKey === eh
                }
                static getApiKey(e) {
                    return null == e ? eh : e
                }
                static getUrl(e, t) {
                    null == t && (t = eh);
                    let r = {
                        allowGzip: !0,
                        url: "https://" + function(e) {
                            switch (e) {
                                case "homestead":
                                    return "rpc.ankr.com/eth/";
                                case "ropsten":
                                    return "rpc.ankr.com/eth_ropsten/";
                                case "rinkeby":
                                    return "rpc.ankr.com/eth_rinkeby/";
                                case "goerli":
                                    return "rpc.ankr.com/eth_goerli/";
                                case "matic":
                                    return "rpc.ankr.com/polygon/";
                                case "arbitrum":
                                    return "rpc.ankr.com/arbitrum/"
                            }
                            return ec.throwArgumentError("unsupported network", "name", e)
                        }(e.name) + t,
                        throttleCallback: (e, r) => (t.apiKey === eh && (0, ea.vh)(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (r.user = "", r.password = t.projectSecret), r
                }
            };
            let ed = new D.Yd(el.i);
            let CloudflareProvider = class CloudflareProvider extends eu.l {
                static getApiKey(e) {
                    return null != e && ed.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null
                }
                static getUrl(e, t) {
                    let r = null;
                    return "homestead" === e.name ? r = "https://cloudflare-eth.com/" : ed.throwArgumentError("unsupported network", "network", arguments[0]), r
                }
                perform(e, t) {
                    var r, n, i, s;
                    let a = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return r = this, n = void 0, i = void 0, s = function*() {
                        if ("getBlockNumber" === e) {
                            let e = yield a.perform.call(this, "getBlock", {
                                blockTag: "latest"
                            });
                            return e.number
                        }
                        return a.perform.call(this, e, t)
                    }, new(i || (i = Promise))(function(e, t) {
                        function fulfilled(e) {
                            try {
                                step(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function step(t) {
                            var r;
                            t.done ? e(t.value) : ((r = t.value) instanceof i ? r : new i(function(e) {
                                e(r)
                            })).then(fulfilled, rejected)
                        }
                        step((s = s.apply(r, n || [])).next())
                    })
                }
            };
            var ep = r(39318),
                ef = r(60366),
                etherscan_provider_awaiter = function(e, t, r, n) {
                    return new(r || (r = Promise))(function(i, s) {
                        function fulfilled(e) {
                            try {
                                step(n.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(n.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function step(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(e, t || [])).next())
                    })
                };
            let eg = new D.Yd(el.i);

            function getTransactionPostData(e) {
                let t = {};
                for (let r in e) {
                    if (null == e[r]) continue;
                    let n = e[r];
                    ("type" !== r || 0 !== n) && (n = ({
                        type: !0,
                        gasLimit: !0,
                        gasPrice: !0,
                        maxFeePerGs: !0,
                        maxPriorityFeePerGas: !0,
                        nonce: !0,
                        value: !0
                    })[r] ? (0, S.$P)((0, S.Dv)(n)) : "accessList" === r ? "[" + (0, en.z7)(n).map(e => `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`).join(",") + "]" : (0, S.Dv)(n), t[r] = n)
                }
                return t
            }

            function getResult(e) {
                if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message)) return e.result;
                if (1 != e.status || "string" != typeof e.message || !e.message.match(/^OK/)) {
                    let t = Error("invalid response");
                    throw t.result = JSON.stringify(e), (e.result || "").toLowerCase().indexOf("rate limit") >= 0 && (t.throttleRetry = !0), t
                }
                return e.result
            }

            function getJsonResult(e) {
                if (e && 0 == e.status && "NOTOK" == e.message && (e.result || "").toLowerCase().indexOf("rate limit") >= 0) {
                    let t = Error("throttled response");
                    throw t.result = JSON.stringify(e), t.throttleRetry = !0, t
                }
                if ("2.0" != e.jsonrpc) {
                    let t = Error("invalid response");
                    throw t.result = JSON.stringify(e), t
                }
                if (e.error) {
                    let t = Error(e.error.message || "unknown error");
                    throw e.error.code && (t.code = e.error.code), e.error.data && (t.data = e.error.data), t
                }
                return e.result
            }

            function checkLogTag(e) {
                if ("pending" === e) throw Error("pending not supported");
                return "latest" === e ? e : parseInt(e.substring(2), 16)
            }

            function checkError(e, t, r) {
                if ("call" === e && t.code === D.Yd.errors.SERVER_ERROR) {
                    let e = t.error;
                    if (e && (e.message.match(/reverted/i) || e.message.match(/VM execution error/i))) {
                        let r = e.data;
                        if (r && (r = "0x" + r.replace(/^.*0x/i, "")), (0, S.A7)(r)) return r;
                        eg.throwError("missing revert data in call exception", D.Yd.errors.CALL_EXCEPTION, {
                            error: t,
                            data: "0x"
                        })
                    }
                }
                let n = t.message;
                throw t.code === D.Yd.errors.SERVER_ERROR && (t.error && "string" == typeof t.error.message ? n = t.error.message : "string" == typeof t.body ? n = t.body : "string" == typeof t.responseText && (n = t.responseText)), (n = (n || "").toLowerCase()).match(/insufficient funds/) && eg.throwError("insufficient funds for intrinsic transaction cost", D.Yd.errors.INSUFFICIENT_FUNDS, {
                    error: t,
                    method: e,
                    transaction: r
                }), n.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && eg.throwError("nonce has already been used", D.Yd.errors.NONCE_EXPIRED, {
                    error: t,
                    method: e,
                    transaction: r
                }), n.match(/another transaction with same nonce/) && eg.throwError("replacement fee too low", D.Yd.errors.REPLACEMENT_UNDERPRICED, {
                    error: t,
                    method: e,
                    transaction: r
                }), n.match(/execution failed due to an exception|execution reverted/) && eg.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", D.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: t,
                    method: e,
                    transaction: r
                }), t
            }
            let EtherscanProvider = class EtherscanProvider extends ef.Zk {
                constructor(e, t) {
                    super(e), (0, B.zG)(this, "baseUrl", this.getBaseUrl()), (0, B.zG)(this, "apiKey", t || null)
                }
                getBaseUrl() {
                    switch (this.network ? this.network.name : "invalid") {
                        case "homestead":
                            return "https://api.etherscan.io";
                        case "goerli":
                            return "https://api-goerli.etherscan.io";
                        case "sepolia":
                            return "https://api-sepolia.etherscan.io";
                        case "matic":
                            return "https://api.polygonscan.com";
                        case "maticmum":
                            return "https://api-testnet.polygonscan.com";
                        case "arbitrum":
                            return "https://api.arbiscan.io";
                        case "arbitrum-goerli":
                            return "https://api-goerli.arbiscan.io";
                        case "optimism":
                            return "https://api-optimistic.etherscan.io";
                        case "optimism-goerli":
                            return "https://api-goerli-optimistic.etherscan.io"
                    }
                    return eg.throwArgumentError("unsupported network", "network", this.network.name)
                }
                getUrl(e, t) {
                    let r = Object.keys(t).reduce((e, r) => {
                            let n = t[r];
                            return null != n && (e += `&${r}=${n}`), e
                        }, ""),
                        n = this.apiKey ? `&apikey=${this.apiKey}` : "";
                    return `${this.baseUrl}/api?module=${e}${r}${n}`
                }
                getPostUrl() {
                    return `${this.baseUrl}/api`
                }
                getPostData(e, t) {
                    return t.module = e, t.apikey = this.apiKey, t
                }
                fetch(e, t, r) {
                    return etherscan_provider_awaiter(this, void 0, void 0, function*() {
                        let n = r ? this.getPostUrl() : this.getUrl(e, t),
                            i = r ? this.getPostData(e, t) : null,
                            s = "proxy" === e ? getJsonResult : getResult;
                        this.emit("debug", {
                            action: "request",
                            request: n,
                            provider: this
                        });
                        let a = {
                                url: n,
                                throttleSlotInterval: 1e3,
                                throttleCallback: (e, t) => (this.isCommunityResource() && (0, ea.vh)(), Promise.resolve(!0))
                            },
                            u = null;
                        i && (a.headers = {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }, u = Object.keys(i).map(e => `${e}=${i[e]}`).join("&"));
                        let l = yield(0, ep.rd)(a, u, s || getJsonResult);
                        return this.emit("debug", {
                            action: "response",
                            request: n,
                            response: (0, B.p$)(l),
                            provider: this
                        }), l
                    })
                }
                detectNetwork() {
                    return etherscan_provider_awaiter(this, void 0, void 0, function*() {
                        return this.network
                    })
                }
                perform(e, t) {
                    let r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return etherscan_provider_awaiter(this, void 0, void 0, function*() {
                        switch (e) {
                            case "getBlockNumber":
                                return this.fetch("proxy", {
                                    action: "eth_blockNumber"
                                });
                            case "getGasPrice":
                                return this.fetch("proxy", {
                                    action: "eth_gasPrice"
                                });
                            case "getBalance":
                                return this.fetch("account", {
                                    action: "balance",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getTransactionCount":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionCount",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getCode":
                                return this.fetch("proxy", {
                                    action: "eth_getCode",
                                    address: t.address,
                                    tag: t.blockTag
                                });
                            case "getStorageAt":
                                return this.fetch("proxy", {
                                    action: "eth_getStorageAt",
                                    address: t.address,
                                    position: t.position,
                                    tag: t.blockTag
                                });
                            case "sendTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_sendRawTransaction",
                                    hex: t.signedTransaction
                                }, !0).catch(e => checkError("sendTransaction", e, t.signedTransaction));
                            case "getBlock":
                                if (t.blockTag) return this.fetch("proxy", {
                                    action: "eth_getBlockByNumber",
                                    tag: t.blockTag,
                                    boolean: t.includeTransactions ? "true" : "false"
                                });
                                throw Error("getBlock by blockHash not implemented");
                            case "getTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionByHash",
                                    txhash: t.transactionHash
                                });
                            case "getTransactionReceipt":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionReceipt",
                                    txhash: t.transactionHash
                                });
                            case "call":
                                {
                                    if ("latest" !== t.blockTag) throw Error("EtherscanProvider does not support blockTag for call");
                                    let e = getTransactionPostData(t.transaction);e.module = "proxy",
                                    e.action = "eth_call";
                                    try {
                                        return yield this.fetch("proxy", e, !0)
                                    } catch (e) {
                                        return checkError("call", e, t.transaction)
                                    }
                                }
                            case "estimateGas":
                                {
                                    let e = getTransactionPostData(t.transaction);e.module = "proxy",
                                    e.action = "eth_estimateGas";
                                    try {
                                        return yield this.fetch("proxy", e, !0)
                                    } catch (e) {
                                        return checkError("estimateGas", e, t.transaction)
                                    }
                                }
                            case "getLogs":
                                {
                                    let e = {
                                        action: "getLogs"
                                    };
                                    if (t.filter.fromBlock && (e.fromBlock = checkLogTag(t.filter.fromBlock)), t.filter.toBlock && (e.toBlock = checkLogTag(t.filter.toBlock)), t.filter.address && (e.address = t.filter.address), t.filter.topics && t.filter.topics.length > 0 && (t.filter.topics.length > 1 && eg.throwError("unsupported topic count", D.Yd.errors.UNSUPPORTED_OPERATION, {
                                            topics: t.filter.topics
                                        }), 1 === t.filter.topics.length)) {
                                        let r = t.filter.topics[0];
                                        ("string" != typeof r || 66 !== r.length) && eg.throwError("unsupported topic format", D.Yd.errors.UNSUPPORTED_OPERATION, {
                                            topic0: r
                                        }), e.topic0 = r
                                    }
                                    let r = yield this.fetch("logs", e), n = {};
                                    for (let e = 0; e < r.length; e++) {
                                        let t = r[e];
                                        if (null == t.blockHash) {
                                            if (null == n[t.blockNumber]) {
                                                let e = yield this.getBlock(t.blockNumber);
                                                e && (n[t.blockNumber] = e.hash)
                                            }
                                            t.blockHash = n[t.blockNumber]
                                        }
                                    }
                                    return r
                                }
                            case "getEtherPrice":
                                if ("homestead" !== this.network.name) return 0;
                                return parseFloat((yield this.fetch("stats", {
                                    action: "ethprice"
                                })).ethusd)
                        }
                        return r.perform.call(this, e, t)
                    })
                }
                getHistory(e, t, r) {
                    return etherscan_provider_awaiter(this, void 0, void 0, function*() {
                        let n = {
                                action: "txlist",
                                address: yield this.resolveName(e), startblock: null == t ? 0 : t, endblock: null == r ? 99999999 : r, sort: "asc"
                            },
                            i = yield this.fetch("account", n);
                        return i.map(e => {
                            ["contractAddress", "to"].forEach(function(t) {
                                "" == e[t] && delete e[t]
                            }), null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
                            let t = this.formatter.transactionResponse(e);
                            return e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t
                        })
                    })
                }
                isCommunityResource() {
                    return null == this.apiKey
                }
            };
            var fallback_provider_awaiter = function(e, t, r, n) {
                return new(r || (r = Promise))(function(i, s) {
                    function fulfilled(e) {
                        try {
                            step(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((n = n.apply(e, t || [])).next())
                })
            };
            let em = new D.Yd(el.i);

            function now() {
                return new Date().getTime()
            }

            function checkNetworks(e) {
                let t = null;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (null == n) return null;
                    t ? t.name === n.name && t.chainId === n.chainId && (t.ensAddress === n.ensAddress || null == t.ensAddress && null == n.ensAddress) || em.throwArgumentError("provider mismatch", "networks", e) : t = n
                }
                return t
            }

            function median(e, t) {
                e = e.slice().sort();
                let r = Math.floor(e.length / 2);
                if (e.length % 2) return e[r];
                let n = e[r - 1],
                    i = e[r];
                return null != t && Math.abs(n - i) > t ? null : (n + i) / 2
            }

            function serialize(e) {
                if (null === e) return "null";
                if ("number" == typeof e || "boolean" == typeof e) return JSON.stringify(e);
                if ("string" == typeof e) return e;
                if (P.O$.isBigNumber(e)) return e.toString();
                if (Array.isArray(e)) return JSON.stringify(e.map(e => serialize(e)));
                if ("object" == typeof e) {
                    let t = Object.keys(e);
                    return t.sort(), "{" + t.map(t => {
                        let r = e[t];
                        return r = "function" == typeof r ? "[function]" : serialize(r), JSON.stringify(t) + ":" + r
                    }).join(",") + "}"
                }
                throw Error("unknown value type: " + typeof e)
            }
            let e_ = 1;

            function stall(e) {
                let t = null,
                    r = null,
                    n = new Promise(n => {
                        r = setTimeout(t = function() {
                            r && (clearTimeout(r), r = null), n()
                        }, e)
                    });
                return {
                    cancel: t,
                    getPromise: function() {
                        return n
                    },
                    wait: e => n = n.then(e)
                }
            }
            let ey = [D.Yd.errors.CALL_EXCEPTION, D.Yd.errors.INSUFFICIENT_FUNDS, D.Yd.errors.NONCE_EXPIRED, D.Yd.errors.REPLACEMENT_UNDERPRICED, D.Yd.errors.UNPREDICTABLE_GAS_LIMIT],
                ev = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

            function exposeDebugConfig(e, t) {
                let r = {
                    weight: e.weight
                };
                return Object.defineProperty(r, "provider", {
                    get: () => e.provider
                }), e.start && (r.start = e.start), t && (r.duration = t - e.start), e.done && (e.error ? r.error = e.error : r.result = e.result || null), r
            }

            function waitForSync(e, t) {
                return fallback_provider_awaiter(this, void 0, void 0, function*() {
                    let r = e.provider;
                    return null != r.blockNumber && r.blockNumber >= t || -1 === t ? r : (0, ep.$l)(() => new Promise((n, i) => {
                        setTimeout(function() {
                            return r.blockNumber >= t ? n(r) : e.cancelled ? n(null) : n(void 0)
                        }, 0)
                    }), {
                        oncePoll: r
                    })
                })
            }
            let FallbackProvider = class FallbackProvider extends ef.Zk {
                constructor(e, t) {
                    0 === e.length && em.throwArgumentError("missing providers", "providers", e);
                    let r = e.map((e, t) => {
                            if (et.zt.isProvider(e)) {
                                let t = (0, ea.Gp)(e) ? 2e3 : 750;
                                return Object.freeze({
                                    provider: e,
                                    weight: 1,
                                    stallTimeout: t,
                                    priority: 1
                                })
                            }
                            let r = (0, B.DC)(e);
                            null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = (0, ea.Gp)(e) ? 2e3 : 750), null == r.weight && (r.weight = 1);
                            let n = r.weight;
                            return (n % 1 || n > 512 || n < 1) && em.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${t}].weight`, n), Object.freeze(r)
                        }),
                        n = r.reduce((e, t) => e + t.weight, 0);
                    null == t ? t = n / 2 : t > n && em.throwArgumentError("quorum will always fail; larger than total weight", "quorum", t);
                    let i = checkNetworks(r.map(e => e.provider.network));
                    null == i && (i = new Promise((e, t) => {
                        setTimeout(() => {
                            this.detectNetwork().then(e, t)
                        }, 0)
                    })), super(i), (0, B.zG)(this, "providerConfigs", Object.freeze(r)), (0, B.zG)(this, "quorum", t), this._highestBlockNumber = -1
                }
                detectNetwork() {
                    return fallback_provider_awaiter(this, void 0, void 0, function*() {
                        let e = yield Promise.all(this.providerConfigs.map(e => e.provider.getNetwork()));
                        return checkNetworks(e)
                    })
                }
                perform(e, t) {
                    return fallback_provider_awaiter(this, void 0, void 0, function*() {
                        if ("sendTransaction" === e) {
                            let e = yield Promise.all(this.providerConfigs.map(e => e.provider.sendTransaction(t.signedTransaction).then(e => e.hash, e => e)));
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t];
                                if ("string" == typeof r) return r
                            }
                            throw e[0]
                        } - 1 === this._highestBlockNumber && "getBlockNumber" !== e && (yield this.getBlockNumber());
                        let r = function(e, t, r) {
                                var n, i;
                                let s = serialize;
                                switch (t) {
                                    case "getBlockNumber":
                                        return function(t) {
                                            let r = t.map(e => e.result),
                                                n = median(t.map(e => e.result), 2);
                                            if (null != n) return n = Math.ceil(n), r.indexOf(n + 1) >= 0 && n++, n >= e._highestBlockNumber && (e._highestBlockNumber = n), e._highestBlockNumber
                                        };
                                    case "getGasPrice":
                                        return function(e) {
                                            let t = e.map(e => e.result);
                                            return t.sort(), t[Math.floor(t.length / 2)]
                                        };
                                    case "getEtherPrice":
                                        return function(e) {
                                            return median(e.map(e => e.result))
                                        };
                                    case "getBalance":
                                    case "getTransactionCount":
                                    case "getCode":
                                    case "getStorageAt":
                                    case "call":
                                    case "estimateGas":
                                    case "getLogs":
                                        break;
                                    case "getTransaction":
                                    case "getTransactionReceipt":
                                        s = function(e) {
                                            return null == e ? null : ((e = (0, B.DC)(e)).confirmations = -1, serialize(e))
                                        };
                                        break;
                                    case "getBlock":
                                        s = r.includeTransactions ? function(e) {
                                            return null == e ? null : ((e = (0, B.DC)(e)).transactions = e.transactions.map(e => ((e = (0, B.DC)(e)).confirmations = -1, e)), serialize(e))
                                        } : function(e) {
                                            return null == e ? null : serialize(e)
                                        };
                                        break;
                                    default:
                                        throw Error("unknown method: " + t)
                                }
                                return n = s, i = e.quorum,
                                    function(e) {
                                        let t = {};
                                        e.forEach(e => {
                                            let r = n(e.result);
                                            t[r] || (t[r] = {
                                                count: 0,
                                                result: e.result
                                            }), t[r].count++
                                        });
                                        let r = Object.keys(t);
                                        for (let e = 0; e < r.length; e++) {
                                            let n = t[r[e]];
                                            if (n.count >= i) return n.result
                                        }
                                    }
                            }(this, e, t),
                            n = function(e) {
                                e = e.slice();
                                for (let t = e.length - 1; t > 0; t--) {
                                    let r = Math.floor(Math.random() * (t + 1)),
                                        n = e[t];
                                    e[t] = e[r], e[r] = n
                                }
                                return e
                            }(this.providerConfigs.map(B.DC));
                        n.sort((e, t) => e.priority - t.priority);
                        let i = this._highestBlockNumber,
                            s = 0,
                            a = !0;
                        for (;;) {
                            let u = now(),
                                l = n.filter(e => e.runner && u - e.start < e.stallTimeout).reduce((e, t) => e + t.weight, 0);
                            for (; l < this.quorum && s < n.length;) {
                                let r = n[s++],
                                    a = e_++;
                                r.start = now(), r.staller = stall(r.stallTimeout), r.staller.wait(() => {
                                    r.staller = null
                                }), r.runner = (function(e, t, r, n) {
                                    return fallback_provider_awaiter(this, void 0, void 0, function*() {
                                        let i = e.provider;
                                        switch (r) {
                                            case "getBlockNumber":
                                            case "getGasPrice":
                                                return i[r]();
                                            case "getEtherPrice":
                                                if (i.getEtherPrice) return i.getEtherPrice();
                                                break;
                                            case "getBalance":
                                            case "getTransactionCount":
                                            case "getCode":
                                                return n.blockTag && (0, S.A7)(n.blockTag) && (i = yield waitForSync(e, t)), i[r](n.address, n.blockTag || "latest");
                                            case "getStorageAt":
                                                return n.blockTag && (0, S.A7)(n.blockTag) && (i = yield waitForSync(e, t)), i.getStorageAt(n.address, n.position, n.blockTag || "latest");
                                            case "getBlock":
                                                return n.blockTag && (0, S.A7)(n.blockTag) && (i = yield waitForSync(e, t)), i[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](n.blockTag || n.blockHash);
                                            case "call":
                                            case "estimateGas":
                                                if (n.blockTag && (0, S.A7)(n.blockTag) && (i = yield waitForSync(e, t)), "call" === r && n.blockTag) return i[r](n.transaction, n.blockTag);
                                                return i[r](n.transaction);
                                            case "getTransaction":
                                            case "getTransactionReceipt":
                                                return i[r](n.transactionHash);
                                            case "getLogs":
                                                {
                                                    let r = n.filter;
                                                    return (r.fromBlock && (0, S.A7)(r.fromBlock) || r.toBlock && (0, S.A7)(r.toBlock)) && (i = yield waitForSync(e, t)),
                                                    i.getLogs(r)
                                                }
                                        }
                                        return em.throwError("unknown method error", D.Yd.errors.UNKNOWN_ERROR, {
                                            method: r,
                                            params: n
                                        })
                                    })
                                })(r, i, e, t).then(n => {
                                    r.done = !0, r.result = n, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: a,
                                        backend: exposeDebugConfig(r, now()),
                                        request: {
                                            method: e,
                                            params: (0, B.p$)(t)
                                        },
                                        provider: this
                                    })
                                }, n => {
                                    r.done = !0, r.error = n, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: a,
                                        backend: exposeDebugConfig(r, now()),
                                        request: {
                                            method: e,
                                            params: (0, B.p$)(t)
                                        },
                                        provider: this
                                    })
                                }), this.listenerCount("debug") && this.emit("debug", {
                                    action: "request",
                                    rid: a,
                                    backend: exposeDebugConfig(r, null),
                                    request: {
                                        method: e,
                                        params: (0, B.p$)(t)
                                    },
                                    provider: this
                                }), l += r.weight
                            }
                            let c = [];
                            n.forEach(e => {
                                !e.done && e.runner && (c.push(e.runner), e.staller && c.push(e.staller.getPromise()))
                            }), c.length && (yield Promise.race(c));
                            let h = n.filter(e => e.done && null == e.error);
                            if (h.length >= this.quorum) {
                                let e = r(h);
                                if (void 0 !== e) return n.forEach(e => {
                                    e.staller && e.staller.cancel(), e.cancelled = !0
                                }), e;
                                a || (yield stall(100).getPromise()), a = !1
                            }
                            let d = n.reduce((e, t) => {
                                if (!t.done || null == t.error) return e;
                                let r = t.error.code;
                                return ey.indexOf(r) >= 0 && (e[r] || (e[r] = {
                                    error: t.error,
                                    weight: 0
                                }), e[r].weight += t.weight), e
                            }, {});
                            if (Object.keys(d).forEach(e => {
                                    let t = d[e];
                                    if (t.weight < this.quorum) return;
                                    n.forEach(e => {
                                        e.staller && e.staller.cancel(), e.cancelled = !0
                                    });
                                    let r = t.error,
                                        i = {};
                                    ev.forEach(e => {
                                        null != r[e] && (i[e] = r[e])
                                    }), em.throwError(r.reason || r.message, e, i)
                                }), 0 === n.filter(e => !e.done).length) break
                        }
                        return n.forEach(e => {
                            e.staller && e.staller.cancel(), e.cancelled = !0
                        }), em.throwError("failed to meet quorum", D.Yd.errors.SERVER_ERROR, {
                            method: e,
                            params: t,
                            results: n.map(e => exposeDebugConfig(e)),
                            provider: this
                        })
                    })
                }
            };
            var eb = r(99227);
            let ew = new D.Yd(el.i),
                eE = "84842078b09946638c03157f83405213";
            let InfuraWebSocketProvider = class InfuraWebSocketProvider extends eb.q {
                constructor(e, t) {
                    let r = new InfuraProvider(e, t),
                        n = r.connection;
                    n.password && ew.throwError("INFURA WebSocket project secrets unsupported", D.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "InfuraProvider.getWebSocketProvider()"
                    });
                    let i = n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
                    super(i, e), (0, B.zG)(this, "apiKey", r.projectId), (0, B.zG)(this, "projectId", r.projectId), (0, B.zG)(this, "projectSecret", r.projectSecret)
                }
                isCommunityResource() {
                    return this.projectId === eE
                }
            };
            let InfuraProvider = class InfuraProvider extends eu.l {
                static getWebSocketProvider(e, t) {
                    return new InfuraWebSocketProvider(e, t)
                }
                static getApiKey(e) {
                    let t = {
                        apiKey: eE,
                        projectId: eE,
                        projectSecret: null
                    };
                    return null == e || ("string" == typeof e ? t.projectId = e : null != e.projectSecret ? (ew.assertArgument("string" == typeof e.projectId, "projectSecret requires a projectId", "projectId", e.projectId), ew.assertArgument("string" == typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), t.projectId = e.projectId, t.projectSecret = e.projectSecret) : e.projectId && (t.projectId = e.projectId), t.apiKey = t.projectId), t
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e ? e.name : "unknown") {
                        case "homestead":
                            r = "mainnet.infura.io";
                            break;
                        case "goerli":
                            r = "goerli.infura.io";
                            break;
                        case "sepolia":
                            r = "sepolia.infura.io";
                            break;
                        case "matic":
                            r = "polygon-mainnet.infura.io";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.infura.io";
                            break;
                        case "optimism":
                            r = "optimism-mainnet.infura.io";
                            break;
                        case "optimism-goerli":
                            r = "optimism-goerli.infura.io";
                            break;
                        case "arbitrum":
                            r = "arbitrum-mainnet.infura.io";
                            break;
                        case "arbitrum-goerli":
                            r = "arbitrum-goerli.infura.io";
                            break;
                        default:
                            ew.throwError("unsupported network", D.Yd.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    let n = {
                        allowGzip: !0,
                        url: "https://" + r + "/v3/" + t.projectId,
                        throttleCallback: (e, r) => (t.projectId === eE && (0, ea.vh)(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (n.user = "", n.password = t.projectSecret), n
                }
                isCommunityResource() {
                    return this.projectId === eE
                }
            };
            var ek = r(67488);
            let eT = new D.Yd(el.i);
            let NodesmithProvider = class NodesmithProvider extends eu.l {
                static getApiKey(e) {
                    return e && "string" != typeof e && eT.throwArgumentError("invalid apiKey", "apiKey", e), e || "ETHERS_JS_SHARED"
                }
                static getUrl(e, t) {
                    eT.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                    let r = null;
                    switch (e.name) {
                        case "homestead":
                            r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                            break;
                        case "ropsten":
                            r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                            break;
                        case "rinkeby":
                            r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                            break;
                        case "goerli":
                            r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                            break;
                        case "kovan":
                            r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                            break;
                        default:
                            eT.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return r + "?apiKey=" + t
                }
            };
            let eA = new D.Yd(el.i),
                eP = "62e1ad51b37b8e00394bda3b";
            let PocketProvider = class PocketProvider extends eu.l {
                static getApiKey(e) {
                    let t = {
                        applicationId: null,
                        loadBalancer: !0,
                        applicationSecretKey: null
                    };
                    return null == e ? t.applicationId = eP : "string" == typeof e ? t.applicationId = e : null != e.applicationSecretKey ? (t.applicationId = e.applicationId, t.applicationSecretKey = e.applicationSecretKey) : e.applicationId ? t.applicationId = e.applicationId : eA.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), t
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e ? e.name : "unknown") {
                        case "goerli":
                            r = "eth-goerli.gateway.pokt.network";
                            break;
                        case "homestead":
                            r = "eth-mainnet.gateway.pokt.network";
                            break;
                        case "kovan":
                            r = "poa-kovan.gateway.pokt.network";
                            break;
                        case "matic":
                            r = "poly-mainnet.gateway.pokt.network";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai-rpc.gateway.pokt.network";
                            break;
                        case "rinkeby":
                            r = "eth-rinkeby.gateway.pokt.network";
                            break;
                        case "ropsten":
                            r = "eth-ropsten.gateway.pokt.network";
                            break;
                        default:
                            eA.throwError("unsupported network", D.Yd.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    let n = `https://${r}/v1/lb/${t.applicationId}`,
                        i = {
                            headers: {},
                            url: n
                        };
                    return null != t.applicationSecretKey && (i.user = "", i.password = t.applicationSecretKey), i
                }
                isCommunityResource() {
                    return this.applicationId === eP
                }
            };
            let eS = new D.Yd(el.i),
                eO = 1;

            function buildWeb3LegacyFetcher(e, t) {
                let r = "Web3LegacyFetcher";
                return function(e, n) {
                    let i = {
                        method: e,
                        params: n,
                        id: eO++,
                        jsonrpc: "2.0"
                    };
                    return new Promise((e, n) => {
                        this.emit("debug", {
                            action: "request",
                            fetcher: r,
                            request: (0, B.p$)(i),
                            provider: this
                        }), t(i, (t, s) => {
                            if (t) return this.emit("debug", {
                                action: "response",
                                fetcher: r,
                                error: t,
                                request: i,
                                provider: this
                            }), n(t);
                            if (this.emit("debug", {
                                    action: "response",
                                    fetcher: r,
                                    request: i,
                                    response: s,
                                    provider: this
                                }), s.error) {
                                let e = Error(s.error.message);
                                return e.code = s.error.code, e.data = s.error.data, n(e)
                            }
                            e(s.result)
                        })
                    })
                }
            }
            let Web3Provider = class Web3Provider extends ek.r {
                constructor(e, t) {
                    null == e && eS.throwArgumentError("missing provider", "provider", e);
                    let r = null,
                        n = null,
                        i = null;
                    "function" == typeof e ? (r = "unknown:", n = e) : (((r = e.host || e.path || "") || !e.isMetaMask || (r = "metamask"), i = e, e.request) ? ("" === r && (r = "eip-1193:"), n = function(t, r) {
                        null == r && (r = []);
                        let n = {
                            method: t,
                            params: r
                        };
                        return this.emit("debug", {
                            action: "request",
                            fetcher: "Eip1193Fetcher",
                            request: (0, B.p$)(n),
                            provider: this
                        }), e.request(n).then(e => (this.emit("debug", {
                            action: "response",
                            fetcher: "Eip1193Fetcher",
                            request: n,
                            response: e,
                            provider: this
                        }), e), e => {
                            throw this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: n,
                                error: e,
                                provider: this
                            }), e
                        })
                    }) : e.sendAsync ? n = buildWeb3LegacyFetcher(e, e.sendAsync.bind(e)) : e.send ? n = buildWeb3LegacyFetcher(e, e.send.bind(e)) : eS.throwArgumentError("unsupported provider", "provider", e), r || (r = "unknown:")), super(r, t), (0, B.zG)(this, "jsonRpcFetchFunc", n), (0, B.zG)(this, "provider", i)
                }
                send(e, t) {
                    return this.jsonRpcFetchFunc(e, t)
                }
            };
            let eN = new D.Yd(el.i);

            function getDefaultProvider(e, t) {
                if (null == e && (e = "homestead"), "string" == typeof e) {
                    let t = e.match(/^(ws|http)s?:/i);
                    if (t) switch (t[1].toLowerCase()) {
                        case "http":
                        case "https":
                            return new ek.r(e);
                        case "ws":
                        case "wss":
                            return new eb.q(e);
                        default:
                            eN.throwArgumentError("unsupported URL scheme", "network", e)
                    }
                }
                let r = (0, eo.H)(e);
                return r && r._defaultProvider || eN.throwError("unsupported getDefaultProvider network", D.Yd.errors.NETWORK_ERROR, {
                    operation: "getDefaultProvider",
                    network: e
                }), r._defaultProvider({
                    FallbackProvider: FallbackProvider,
                    AlchemyProvider: es.D,
                    AnkrProvider: AnkrProvider,
                    CloudflareProvider: CloudflareProvider,
                    EtherscanProvider: EtherscanProvider,
                    InfuraProvider: InfuraProvider,
                    JsonRpcProvider: ek.r,
                    NodesmithProvider: NodesmithProvider,
                    PocketProvider: PocketProvider,
                    Web3Provider: Web3Provider,
                    IpcProvider: null
                }, t)
            }
            var eD = JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]}');
            (n = l || (l = {}))[n.MAINNET = 1] = "MAINNET", n[n.ROPSTEN = 3] = "ROPSTEN", n[n.RINKEBY = 4] = "RINKEBY", n[n["G\xd6RLI"] = 5] = "G\xd6RLI", n[n.KOVAN = 42] = "KOVAN", (i = c || (c = {}))[i.EXACT_INPUT = 0] = "EXACT_INPUT", i[i.EXACT_OUTPUT = 1] = "EXACT_OUTPUT", (s = h || (h = {}))[s.ROUND_DOWN = 0] = "ROUND_DOWN", s[s.ROUND_HALF_UP = 1] = "ROUND_HALF_UP", s[s.ROUND_UP = 2] = "ROUND_UP";
            var eI = y().BigInt(1e3),
                ex = y().BigInt(0),
                eR = y().BigInt(1),
                eC = y().BigInt(2),
                eB = y().BigInt(3),
                eF = y().BigInt(5),
                ez = y().BigInt(10),
                ej = y().BigInt(997),
                eL = y().BigInt(1e3);
            (a = d || (d = {})).uint8 = "uint8", a.uint256 = "uint256";
            var eM = ((u = {})[d.uint8] = y().BigInt("0xff"), u[d.uint256] = y().BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), u);

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _createClass(e, t, r) {
                return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
            }

            function _extends() {
                return (_extends = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _inheritsLoose(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _construct(e, t, r) {
                return (_construct = ! function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new(Function.bind.apply(e, n));
                    return r && _setPrototypeOf(i, r.prototype), i
                } : Reflect.construct).apply(null, arguments)
            }

            function _wrapNativeSuper(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (_wrapNativeSuper = function(e) {
                    if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                    if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, Wrapper)
                    }

                    function Wrapper() {
                        return _construct(e, arguments, _getPrototypeOf(this).constructor)
                    }
                    return Wrapper.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), _setPrototypeOf(Wrapper, e)
                })(e)
            }

            function _assertThisInitialized(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _arrayLikeToArray(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function _createForOfIteratorHelperLoose(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return _arrayLikeToArray(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _arrayLikeToArray(e, t)
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0;
                        return function() {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            }
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (r = e[Symbol.iterator]()).next.bind(r)
            }
            var eU = "setPrototypeOf" in Object,
                eG = function(e) {
                    function InsufficientReservesError() {
                        var t;
                        return (t = e.call(this) || this).isInsufficientReservesError = !0, t.name = t.constructor.name, eU && Object.setPrototypeOf(_assertThisInitialized(t), (this instanceof InsufficientReservesError ? this.constructor : void 0).prototype), t
                    }
                    return _inheritsLoose(InsufficientReservesError, e), InsufficientReservesError
                }(_wrapNativeSuper(Error)),
                eq = function(e) {
                    function InsufficientInputAmountError() {
                        var t;
                        return (t = e.call(this) || this).isInsufficientInputAmountError = !0, t.name = t.constructor.name, eU && Object.setPrototypeOf(_assertThisInitialized(t), (this instanceof InsufficientInputAmountError ? this.constructor : void 0).prototype), t
                    }
                    return _inheritsLoose(InsufficientInputAmountError, e), InsufficientInputAmountError
                }(_wrapNativeSuper(Error));

            function validateSolidityTypeInstance(e, t) {
                y().greaterThanOrEqual(e, ex) || tiny_invariant_invariant(!1), y().lessThanOrEqual(e, eM[t]) || tiny_invariant_invariant(!1)
            }

            function parseBigintIsh(e) {
                return e instanceof y() ? e : "bigint" == typeof e ? y().BigInt(e.toString()) : y().BigInt(e)
            }

            function sqrt(e) {
                validateSolidityTypeInstance(e, d.uint256);
                var t, r = ex;
                if (y().greaterThan(e, eB))
                    for (r = e, t = y().add(y().divide(e, eC), eR); y().lessThan(t, r);) r = t, t = y().divide(y().add(y().divide(e, t), t), eC);
                else y().notEqual(e, ex) && (r = eR);
                return r
            }
            var Currency = function(e, t, r) {
                validateSolidityTypeInstance(y().BigInt(e), d.uint8), this.decimals = e, this.symbol = t, this.name = r
            };
            Currency.ETHER = new Currency(18, "ETH", "Ether");
            var eY = Currency.ETHER,
                e$ = function(e) {
                    function Token(t, r, n, i, s) {
                        var a;
                        return (a = e.call(this, n, i, s) || this).chainId = t, a.address = function(e) {
                            try {
                                return (0, v.Kn)(e)
                            } catch (e) {
                                tiny_invariant_invariant(!1)
                            }
                        }(r), a
                    }
                    _inheritsLoose(Token, e);
                    var t = Token.prototype;
                    return t.equals = function(e) {
                        return this === e || this.chainId === e.chainId && this.address === e.address
                    }, t.sortsBefore = function(e) {
                        return this.chainId !== e.chainId && tiny_invariant_invariant(!1), this.address !== e.address || tiny_invariant_invariant(!1), this.address.toLowerCase() < e.address.toLowerCase()
                    }, Token
                }(Currency);

            function currencyEquals(e, t) {
                return e instanceof e$ && t instanceof e$ ? e.equals(t) : !(e instanceof e$) && !(t instanceof e$) && e === t
            }
            var eW = ((p = {})[l.MAINNET] = new e$(l.MAINNET, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether"), p[l.ROPSTEN] = new e$(l.ROPSTEN, "0xc778417E063141139Fce010982780140Aa0cD5Ab", 18, "WETH", "Wrapped Ether"), p[l.RINKEBY] = new e$(l.RINKEBY, "0xc778417E063141139Fce010982780140Aa0cD5Ab", 18, "WETH", "Wrapped Ether"), p[l.GÖRLI] = new e$(l.GÖRLI, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", 18, "WETH", "Wrapped Ether"), p[l.KOVAN] = new e$(l.KOVAN, "0xd0A1E359811322d97991E03f863a0C30C2cF029C", 18, "WETH", "Wrapped Ether"), p),
                eK = k()(A()),
                eV = k()(w()),
                eH = ((f = {})[h.ROUND_DOWN] = eK.ROUND_DOWN, f[h.ROUND_HALF_UP] = eK.ROUND_HALF_UP, f[h.ROUND_UP] = eK.ROUND_UP, f),
                eJ = ((g = {})[h.ROUND_DOWN] = 0, g[h.ROUND_HALF_UP] = 1, g[h.ROUND_UP] = 3, g),
                eZ = function() {
                    function Fraction(e, t) {
                        void 0 === t && (t = eR), this.numerator = parseBigintIsh(e), this.denominator = parseBigintIsh(t)
                    }
                    var e = Fraction.prototype;
                    return e.invert = function() {
                        return new Fraction(this.denominator, this.numerator)
                    }, e.add = function(e) {
                        var t = e instanceof Fraction ? e : new Fraction(parseBigintIsh(e));
                        return y().equal(this.denominator, t.denominator) ? new Fraction(y().add(this.numerator, t.numerator), this.denominator) : new Fraction(y().add(y().multiply(this.numerator, t.denominator), y().multiply(t.numerator, this.denominator)), y().multiply(this.denominator, t.denominator))
                    }, e.subtract = function(e) {
                        var t = e instanceof Fraction ? e : new Fraction(parseBigintIsh(e));
                        return y().equal(this.denominator, t.denominator) ? new Fraction(y().subtract(this.numerator, t.numerator), this.denominator) : new Fraction(y().subtract(y().multiply(this.numerator, t.denominator), y().multiply(t.numerator, this.denominator)), y().multiply(this.denominator, t.denominator))
                    }, e.lessThan = function(e) {
                        var t = e instanceof Fraction ? e : new Fraction(parseBigintIsh(e));
                        return y().lessThan(y().multiply(this.numerator, t.denominator), y().multiply(t.numerator, this.denominator))
                    }, e.equalTo = function(e) {
                        var t = e instanceof Fraction ? e : new Fraction(parseBigintIsh(e));
                        return y().equal(y().multiply(this.numerator, t.denominator), y().multiply(t.numerator, this.denominator))
                    }, e.greaterThan = function(e) {
                        var t = e instanceof Fraction ? e : new Fraction(parseBigintIsh(e));
                        return y().greaterThan(y().multiply(this.numerator, t.denominator), y().multiply(t.numerator, this.denominator))
                    }, e.multiply = function(e) {
                        var t = e instanceof Fraction ? e : new Fraction(parseBigintIsh(e));
                        return new Fraction(y().multiply(this.numerator, t.numerator), y().multiply(this.denominator, t.denominator))
                    }, e.divide = function(e) {
                        var t = e instanceof Fraction ? e : new Fraction(parseBigintIsh(e));
                        return new Fraction(y().multiply(this.numerator, t.denominator), y().multiply(this.denominator, t.numerator))
                    }, e.toSignificant = function(e, t, r) {
                        void 0 === t && (t = {
                            groupSeparator: ""
                        }), void 0 === r && (r = h.ROUND_HALF_UP), Number.isInteger(e) || tiny_invariant_invariant(!1), e > 0 || tiny_invariant_invariant(!1), eK.set({
                            precision: e + 1,
                            rounding: eH[r]
                        });
                        var n = new eK(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(e);
                        return n.toFormat(n.decimalPlaces(), t)
                    }, e.toFixed = function(e, t, r) {
                        return void 0 === t && (t = {
                            groupSeparator: ""
                        }), void 0 === r && (r = h.ROUND_HALF_UP), Number.isInteger(e) || tiny_invariant_invariant(!1), e >= 0 || tiny_invariant_invariant(!1), eV.DP = e, eV.RM = eJ[r], new eV(this.numerator.toString()).div(this.denominator.toString()).toFormat(e, t)
                    }, _createClass(Fraction, [{
                        key: "quotient",
                        get: function() {
                            return y().divide(this.numerator, this.denominator)
                        }
                    }, {
                        key: "remainder",
                        get: function() {
                            return new Fraction(y().remainder(this.numerator, this.denominator), this.denominator)
                        }
                    }]), Fraction
                }(),
                eX = k()(w()),
                eQ = function(e) {
                    function CurrencyAmount(t, r) {
                        var n, i = parseBigintIsh(r);
                        return validateSolidityTypeInstance(i, d.uint256), (n = e.call(this, i, y().exponentiate(ez, y().BigInt(t.decimals))) || this).currency = t, n
                    }
                    _inheritsLoose(CurrencyAmount, e), CurrencyAmount.ether = function(e) {
                        return new CurrencyAmount(eY, e)
                    };
                    var t = CurrencyAmount.prototype;
                    return t.add = function(e) {
                        return currencyEquals(this.currency, e.currency) || tiny_invariant_invariant(!1), new CurrencyAmount(this.currency, y().add(this.raw, e.raw))
                    }, t.subtract = function(e) {
                        return currencyEquals(this.currency, e.currency) || tiny_invariant_invariant(!1), new CurrencyAmount(this.currency, y().subtract(this.raw, e.raw))
                    }, t.toSignificant = function(t, r, n) {
                        return void 0 === t && (t = 6), void 0 === n && (n = h.ROUND_DOWN), e.prototype.toSignificant.call(this, t, r, n)
                    }, t.toFixed = function(t, r, n) {
                        return void 0 === t && (t = this.currency.decimals), void 0 === n && (n = h.ROUND_DOWN), t <= this.currency.decimals || tiny_invariant_invariant(!1), e.prototype.toFixed.call(this, t, r, n)
                    }, t.toExact = function(e) {
                        return void 0 === e && (e = {
                            groupSeparator: ""
                        }), eX.DP = this.currency.decimals, new eX(this.numerator.toString()).div(this.denominator.toString()).toFormat(e)
                    }, _createClass(CurrencyAmount, [{
                        key: "raw",
                        get: function() {
                            return this.numerator
                        }
                    }]), CurrencyAmount
                }(eZ),
                e0 = function(e) {
                    function TokenAmount(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).token = t, n
                    }
                    _inheritsLoose(TokenAmount, e);
                    var t = TokenAmount.prototype;
                    return t.add = function(e) {
                        return this.token.equals(e.token) || tiny_invariant_invariant(!1), new TokenAmount(this.token, y().add(this.raw, e.raw))
                    }, t.subtract = function(e) {
                        return this.token.equals(e.token) || tiny_invariant_invariant(!1), new TokenAmount(this.token, y().subtract(this.raw, e.raw))
                    }, TokenAmount
                }(eQ),
                e1 = function(e) {
                    function Price(t, r, n, i) {
                        var s;
                        return (s = e.call(this, i, n) || this).baseCurrency = t, s.quoteCurrency = r, s.scalar = new eZ(y().exponentiate(ez, y().BigInt(t.decimals)), y().exponentiate(ez, y().BigInt(r.decimals))), s
                    }
                    _inheritsLoose(Price, e), Price.fromRoute = function(e) {
                        for (var t, r = [], n = _createForOfIteratorHelperLoose(e.pairs.entries()); !(t = n()).done;) {
                            var i = t.value,
                                s = i[0],
                                a = i[1];
                            r.push(e.path[s].equals(a.token0) ? new Price(a.reserve0.currency, a.reserve1.currency, a.reserve0.raw, a.reserve1.raw) : new Price(a.reserve1.currency, a.reserve0.currency, a.reserve1.raw, a.reserve0.raw))
                        }
                        return r.slice(1).reduce(function(e, t) {
                            return e.multiply(t)
                        }, r[0])
                    };
                    var t = Price.prototype;
                    return t.invert = function() {
                        return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator)
                    }, t.multiply = function(t) {
                        currencyEquals(this.quoteCurrency, t.baseCurrency) || tiny_invariant_invariant(!1);
                        var r = e.prototype.multiply.call(this, t);
                        return new Price(this.baseCurrency, t.quoteCurrency, r.denominator, r.numerator)
                    }, t.quote = function(t) {
                        return (currencyEquals(t.currency, this.baseCurrency) || tiny_invariant_invariant(!1), this.quoteCurrency instanceof e$) ? new e0(this.quoteCurrency, e.prototype.multiply.call(this, t.raw).quotient) : eQ.ether(e.prototype.multiply.call(this, t.raw).quotient)
                    }, t.toSignificant = function(e, t, r) {
                        return void 0 === e && (e = 6), this.adjusted.toSignificant(e, t, r)
                    }, t.toFixed = function(e, t, r) {
                        return void 0 === e && (e = 4), this.adjusted.toFixed(e, t, r)
                    }, _createClass(Price, [{
                        key: "raw",
                        get: function() {
                            return new eZ(this.numerator, this.denominator)
                        }
                    }, {
                        key: "adjusted",
                        get: function() {
                            return e.prototype.multiply.call(this, this.scalar)
                        }
                    }]), Price
                }(eZ),
                e2 = {},
                e3 = function() {
                    function Pair(e, t) {
                        var r = e.token.sortsBefore(t.token) ? [e, t] : [t, e];
                        this.liquidityToken = new e$(r[0].token.chainId, Pair.getAddress(r[0].token, r[1].token), 18, "UNI-V2", "Uniswap V2"), this.tokenAmounts = r
                    }
                    Pair.getAddress = function(e, t) {
                        var r, n, i, s, a, u, l = e.sortsBefore(t) ? [e, t] : [t, e];
                        return (null === (n = e2) || void 0 === n ? void 0 : null === (i = n[l[0].address]) || void 0 === i ? void 0 : i[l[1].address]) === void 0 && (e2 = _extends({}, e2, ((u = {})[l[0].address] = _extends({}, null === (s = e2) || void 0 === s ? void 0 : s[l[0].address], ((a = {})[l[1].address] = (0, v.hB)("0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", (r = [pack(["address", "address"], [l[0].address, l[1].address])], (0, O.w)(pack(["bytes"], r))), "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f"), a)), u))), e2[l[0].address][l[1].address]
                    };
                    var e = Pair.prototype;
                    return e.involvesToken = function(e) {
                        return e.equals(this.token0) || e.equals(this.token1)
                    }, e.priceOf = function(e) {
                        return this.involvesToken(e) || tiny_invariant_invariant(!1), e.equals(this.token0) ? this.token0Price : this.token1Price
                    }, e.reserveOf = function(e) {
                        return this.involvesToken(e) || tiny_invariant_invariant(!1), e.equals(this.token0) ? this.reserve0 : this.reserve1
                    }, e.getOutputAmount = function(e) {
                        if (this.involvesToken(e.token) || tiny_invariant_invariant(!1), y().equal(this.reserve0.raw, ex) || y().equal(this.reserve1.raw, ex)) throw new eG;
                        var t = this.reserveOf(e.token),
                            r = this.reserveOf(e.token.equals(this.token0) ? this.token1 : this.token0),
                            n = y().multiply(e.raw, ej),
                            i = y().multiply(n, r.raw),
                            s = y().add(y().multiply(t.raw, eL), n),
                            a = new e0(e.token.equals(this.token0) ? this.token1 : this.token0, y().divide(i, s));
                        if (y().equal(a.raw, ex)) throw new eq;
                        return [a, new Pair(t.add(e), r.subtract(a))]
                    }, e.getInputAmount = function(e) {
                        if (this.involvesToken(e.token) || tiny_invariant_invariant(!1), y().equal(this.reserve0.raw, ex) || y().equal(this.reserve1.raw, ex) || y().greaterThanOrEqual(e.raw, this.reserveOf(e.token).raw)) throw new eG;
                        var t = this.reserveOf(e.token),
                            r = this.reserveOf(e.token.equals(this.token0) ? this.token1 : this.token0),
                            n = y().multiply(y().multiply(r.raw, e.raw), eL),
                            i = y().multiply(y().subtract(t.raw, e.raw), ej),
                            s = new e0(e.token.equals(this.token0) ? this.token1 : this.token0, y().add(y().divide(n, i), eR));
                        return [s, new Pair(r.add(s), t.subtract(e))]
                    }, e.getLiquidityMinted = function(e, t, r) {
                        e.token.equals(this.liquidityToken) || tiny_invariant_invariant(!1);
                        var n, i = t.token.sortsBefore(r.token) ? [t, r] : [r, t];
                        if (i[0].token.equals(this.token0) && i[1].token.equals(this.token1) || tiny_invariant_invariant(!1), y().equal(e.raw, ex)) n = y().subtract(sqrt(y().multiply(i[0].raw, i[1].raw)), eI);
                        else {
                            var s = y().divide(y().multiply(i[0].raw, e.raw), this.reserve0.raw),
                                a = y().divide(y().multiply(i[1].raw, e.raw), this.reserve1.raw);
                            n = y().lessThanOrEqual(s, a) ? s : a
                        }
                        if (!y().greaterThan(n, ex)) throw new eq;
                        return new e0(this.liquidityToken, n)
                    }, e.getLiquidityValue = function(e, t, r, n, i) {
                        if (void 0 === n && (n = !1), this.involvesToken(e) || tiny_invariant_invariant(!1), t.token.equals(this.liquidityToken) || tiny_invariant_invariant(!1), r.token.equals(this.liquidityToken) || tiny_invariant_invariant(!1), y().lessThanOrEqual(r.raw, t.raw) || tiny_invariant_invariant(!1), n) {
                            i || tiny_invariant_invariant(!1);
                            var s, a = parseBigintIsh(i);
                            if (y().equal(a, ex)) s = t;
                            else {
                                var u = sqrt(y().multiply(this.reserve0.raw, this.reserve1.raw)),
                                    l = sqrt(a);
                                if (y().greaterThan(u, l)) {
                                    var c = y().multiply(t.raw, y().subtract(u, l)),
                                        h = y().add(y().multiply(u, eF), l),
                                        d = y().divide(c, h);
                                    s = t.add(new e0(this.liquidityToken, d))
                                } else s = t
                            }
                        } else s = t;
                        return new e0(e, y().divide(y().multiply(r.raw, this.reserveOf(e).raw), s.raw))
                    }, _createClass(Pair, [{
                        key: "token0Price",
                        get: function() {
                            return new e1(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw)
                        }
                    }, {
                        key: "token1Price",
                        get: function() {
                            return new e1(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw)
                        }
                    }, {
                        key: "chainId",
                        get: function() {
                            return this.token0.chainId
                        }
                    }, {
                        key: "token0",
                        get: function() {
                            return this.tokenAmounts[0].token
                        }
                    }, {
                        key: "token1",
                        get: function() {
                            return this.tokenAmounts[1].token
                        }
                    }, {
                        key: "reserve0",
                        get: function() {
                            return this.tokenAmounts[0]
                        }
                    }, {
                        key: "reserve1",
                        get: function() {
                            return this.tokenAmounts[1]
                        }
                    }]), Pair
                }(),
                e7 = function() {
                    function Route(e, t, r) {
                        e.length > 0 || tiny_invariant_invariant(!1), e.every(function(t) {
                            return t.chainId === e[0].chainId
                        }) || tiny_invariant_invariant(!1), t instanceof e$ && e[0].involvesToken(t) || t === eY && e[0].involvesToken(eW[e[0].chainId]) || tiny_invariant_invariant(!1), void 0 === r || r instanceof e$ && e[e.length - 1].involvesToken(r) || r === eY && e[e.length - 1].involvesToken(eW[e[0].chainId]) || tiny_invariant_invariant(!1);
                        for (var n, i = [t instanceof e$ ? t : eW[e[0].chainId]], s = _createForOfIteratorHelperLoose(e.entries()); !(n = s()).done;) {
                            var a = n.value,
                                u = a[0],
                                l = a[1],
                                c = i[u];
                            c.equals(l.token0) || c.equals(l.token1) || tiny_invariant_invariant(!1);
                            var h = c.equals(l.token0) ? l.token1 : l.token0;
                            i.push(h)
                        }
                        this.pairs = e, this.path = i, this.midPrice = e1.fromRoute(this), this.input = t, this.output = null != r ? r : i[i.length - 1]
                    }
                    return _createClass(Route, [{
                        key: "chainId",
                        get: function() {
                            return this.pairs[0].chainId
                        }
                    }]), Route
                }(),
                e5 = [{
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }],
                e6 = ((m = {})[l.MAINNET] = {
                    "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A": 9
                }, m),
                e8 = function() {
                    function Fetcher() {}
                    return Fetcher.fetchTokenData = function(e, t, r, n, i) {
                        try {
                            var s, a, _temp3 = function(r) {
                                return new e$(e, t, r, n, i)
                            };
                            void 0 === r && (r = getDefaultProvider((0, eo.H)(e)));
                            var u = "number" == typeof(null === (s = e6) || void 0 === s ? void 0 : null === (a = s[e]) || void 0 === a ? void 0 : a[t]);
                            return Promise.resolve(u ? _temp3(e6[e][t]) : Promise.resolve(new Contract(t, e5, r).decimals().then(function(r) {
                                var n, i, s;
                                return e6 = _extends({}, e6, ((s = {})[e] = _extends({}, null === (n = e6) || void 0 === n ? void 0 : n[e], ((i = {})[t] = r, i)), s)), r
                            })).then(_temp3))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, Fetcher.fetchPairData = function(e, t, r) {
                        try {
                            void 0 === r && (r = getDefaultProvider((0, eo.H)(e.chainId))), e.chainId !== t.chainId && tiny_invariant_invariant(!1);
                            var n = e3.getAddress(e, t);
                            return Promise.resolve(new Contract(n, eD.Mt, r).getReserves()).then(function(r) {
                                var n = r[0],
                                    i = r[1],
                                    s = e.sortsBefore(t) ? [n, i] : [i, n];
                                return new e3(new e0(e, s[0]), new e0(t, s[1]))
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, Fetcher
                }()
        },
        22528: function(e, t, r) {
            var n;
            ! function(i) {
                "use strict";
                var s, a = "[big.js] ",
                    u = a + "Invalid ",
                    l = u + "decimal places",
                    c = u + "rounding mode",
                    h = a + "Division by zero",
                    d = {},
                    p = void 0,
                    f = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

                function round(e, t, r, n) {
                    var i = e.c,
                        s = e.e + t + 1;
                    if (s < i.length) {
                        if (1 === r) n = i[s] >= 5;
                        else if (2 === r) n = i[s] > 5 || 5 == i[s] && (n || s < 0 || i[s + 1] !== p || 1 & i[s - 1]);
                        else if (3 === r) n = n || !!i[0];
                        else if (n = !1, 0 !== r) throw Error(c);
                        if (s < 1) i.length = 1, n ? (e.e = -t, i[0] = 1) : i[0] = e.e = 0;
                        else {
                            if (i.length = s--, n)
                                for (; ++i[s] > 9;) i[s] = 0, s-- || (++e.e, i.unshift(1));
                            for (s = i.length; !i[--s];) i.pop()
                        }
                    } else if (r < 0 || r > 3 || r !== ~~r) throw Error(c);
                    return e
                }

                function stringify(e, t, r, n) {
                    var i, s, a = e.constructor,
                        c = !e.c[0];
                    if (r !== p) {
                        if (r !== ~~r || r < (3 == t) || r > 1e6) throw Error(3 == t ? u + "precision" : l);
                        for (r = n - (e = new a(e)).e, e.c.length > ++n && round(e, r, a.RM), 2 == t && (n = e.e + r + 1); e.c.length < n;) e.c.push(0)
                    }
                    if (i = e.e, r = (s = e.c.join("")).length, 2 != t && (1 == t || 3 == t && n <= i || i <= a.NE || i >= a.PE)) s = s.charAt(0) + (r > 1 ? "." + s.slice(1) : "") + (i < 0 ? "e" : "e+") + i;
                    else if (i < 0) {
                        for (; ++i;) s = "0" + s;
                        s = "0." + s
                    } else if (i > 0) {
                        if (++i > r)
                            for (i -= r; i--;) s += "0";
                        else i < r && (s = s.slice(0, i) + "." + s.slice(i))
                    } else r > 1 && (s = s.charAt(0) + "." + s.slice(1));
                    return e.s < 0 && (!c || 4 == t) ? "-" + s : s
                }
                d.abs = function() {
                    var e = new this.constructor(this);
                    return e.s = 1, e
                }, d.cmp = function(e) {
                    var t, r = this.c,
                        n = (e = new this.constructor(e)).c,
                        i = this.s,
                        s = e.s,
                        a = this.e,
                        u = e.e;
                    if (!r[0] || !n[0]) return r[0] ? i : n[0] ? -s : 0;
                    if (i != s) return i;
                    if (t = i < 0, a != u) return a > u ^ t ? 1 : -1;
                    for (i = -1, s = (a = r.length) < (u = n.length) ? a : u; ++i < s;)
                        if (r[i] != n[i]) return r[i] > n[i] ^ t ? 1 : -1;
                    return a == u ? 0 : a > u ^ t ? 1 : -1
                }, d.div = function(e) {
                    var t = this.constructor,
                        r = this.c,
                        n = (e = new t(e)).c,
                        i = this.s == e.s ? 1 : -1,
                        s = t.DP;
                    if (s !== ~~s || s < 0 || s > 1e6) throw Error(l);
                    if (!n[0]) throw Error(h);
                    if (!r[0]) return new t(0 * i);
                    var a, u, c, d, f, g = n.slice(),
                        m = a = n.length,
                        _ = r.length,
                        y = r.slice(0, a),
                        v = y.length,
                        b = e,
                        w = b.c = [],
                        E = 0,
                        k = s + (b.e = this.e - e.e) + 1;
                    for (b.s = i, i = k < 0 ? 0 : k, g.unshift(0); v++ < a;) y.push(0);
                    do {
                        for (c = 0; c < 10; c++) {
                            if (a != (v = y.length)) d = a > v ? 1 : -1;
                            else
                                for (f = -1, d = 0; ++f < a;)
                                    if (n[f] != y[f]) {
                                        d = n[f] > y[f] ? 1 : -1;
                                        break
                                    } if (d < 0) {
                                for (u = v == a ? n : g; v;) {
                                    if (y[--v] < u[v]) {
                                        for (f = v; f && !y[--f];) y[f] = 9;
                                        --y[f], y[v] += 10
                                    }
                                    y[v] -= u[v]
                                }
                                for (; !y[0];) y.shift()
                            } else break
                        }
                        w[E++] = d ? c : ++c, y[0] && d ? y[v] = r[m] || 0 : y = [r[m]]
                    } while ((m++ < _ || y[0] !== p) && i--);
                    return !w[0] && 1 != E && (w.shift(), b.e--), E > k && round(b, s, t.RM, y[0] !== p), b
                }, d.eq = function(e) {
                    return !this.cmp(e)
                }, d.gt = function(e) {
                    return this.cmp(e) > 0
                }, d.gte = function(e) {
                    return this.cmp(e) > -1
                }, d.lt = function(e) {
                    return 0 > this.cmp(e)
                }, d.lte = function(e) {
                    return 1 > this.cmp(e)
                }, d.minus = d.sub = function(e) {
                    var t, r, n, i, s = this.constructor,
                        a = this.s,
                        u = (e = new s(e)).s;
                    if (a != u) return e.s = -u, this.plus(e);
                    var l = this.c.slice(),
                        c = this.e,
                        h = e.c,
                        d = e.e;
                    if (!l[0] || !h[0]) return h[0] ? (e.s = -u, e) : new s(l[0] ? this : 0);
                    if (a = c - d) {
                        for ((i = a < 0) ? (a = -a, n = l) : (d = c, n = h), n.reverse(), u = a; u--;) n.push(0);
                        n.reverse()
                    } else
                        for (r = ((i = l.length < h.length) ? l : h).length, a = u = 0; u < r; u++)
                            if (l[u] != h[u]) {
                                i = l[u] < h[u];
                                break
                            } if (i && (n = l, l = h, h = n, e.s = -e.s), (u = (r = h.length) - (t = l.length)) > 0)
                        for (; u--;) l[t++] = 0;
                    for (u = t; r > a;) {
                        if (l[--r] < h[r]) {
                            for (t = r; t && !l[--t];) l[t] = 9;
                            --l[t], l[r] += 10
                        }
                        l[r] -= h[r]
                    }
                    for (; 0 === l[--u];) l.pop();
                    for (; 0 === l[0];) l.shift(), --d;
                    return l[0] || (e.s = 1, l = [d = 0]), e.c = l, e.e = d, e
                }, d.mod = function(e) {
                    var t, r = this,
                        n = r.constructor,
                        i = r.s,
                        s = (e = new n(e)).s;
                    if (!e.c[0]) throw Error(h);
                    return (r.s = e.s = 1, t = 1 == e.cmp(r), r.s = i, e.s = s, t) ? new n(r) : (i = n.DP, s = n.RM, n.DP = n.RM = 0, r = r.div(e), n.DP = i, n.RM = s, this.minus(r.times(e)))
                }, d.plus = d.add = function(e) {
                    var t, r = this.constructor,
                        n = this.s,
                        i = (e = new r(e)).s;
                    if (n != i) return e.s = -i, this.minus(e);
                    var s = this.e,
                        a = this.c,
                        u = e.e,
                        l = e.c;
                    if (!a[0] || !l[0]) return l[0] ? e : new r(a[0] ? this : 0 * n);
                    if (a = a.slice(), n = s - u) {
                        for (n > 0 ? (u = s, t = l) : (n = -n, t = a), t.reverse(); n--;) t.push(0);
                        t.reverse()
                    }
                    for (a.length - l.length < 0 && (t = l, l = a, a = t), n = l.length, i = 0; n; a[n] %= 10) i = (a[--n] = a[n] + l[n] + i) / 10 | 0;
                    for (i && (a.unshift(i), ++u), n = a.length; 0 === a[--n];) a.pop();
                    return e.c = a, e.e = u, e
                }, d.pow = function(e) {
                    var t = this,
                        r = new t.constructor(1),
                        n = r,
                        i = e < 0;
                    if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(u + "exponent");
                    for (i && (e = -e); 1 & e && (n = n.times(t)), e >>= 1;) t = t.times(t);
                    return i ? r.div(n) : n
                }, d.round = function(e, t) {
                    var r = this.constructor;
                    if (e === p) e = 0;
                    else if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(l);
                    return round(new r(this), e, t === p ? r.RM : t)
                }, d.sqrt = function() {
                    var e, t, r, n = this.constructor,
                        i = this.s,
                        s = this.e,
                        u = new n(.5);
                    if (!this.c[0]) return new n(this);
                    if (i < 0) throw Error(a + "No square root");
                    0 === (i = Math.sqrt(this + "")) || i === 1 / 0 ? ((t = this.c.join("")).length + s & 1 || (t += "0"), i = Math.sqrt(t), s = ((s + 1) / 2 | 0) - (s < 0 || 1 & s), e = new n((i == 1 / 0 ? "1e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + s)) : e = new n(i), s = e.e + (n.DP += 4);
                    do r = e, e = u.times(r.plus(this.div(r))); while (r.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
                    return round(e, n.DP -= 4, n.RM)
                }, d.times = d.mul = function(e) {
                    var t, r = this.constructor,
                        n = this.c,
                        i = (e = new r(e)).c,
                        s = n.length,
                        a = i.length,
                        u = this.e,
                        l = e.e;
                    if (e.s = this.s == e.s ? 1 : -1, !n[0] || !i[0]) return new r(0 * e.s);
                    for (e.e = u + l, s < a && (t = n, n = i, i = t, l = s, s = a, a = l), t = Array(l = s + a); l--;) t[l] = 0;
                    for (u = a; u--;) {
                        for (a = 0, l = s + u; l > u;) a = t[l] + i[u] * n[l - u - 1] + a, t[l--] = a % 10, a = a / 10 | 0;
                        t[l] = (t[l] + a) % 10
                    }
                    for (a ? ++e.e : t.shift(), u = t.length; !t[--u];) t.pop();
                    return e.c = t, e
                }, d.toExponential = function(e) {
                    return stringify(this, 1, e, e)
                }, d.toFixed = function(e) {
                    return stringify(this, 2, e, this.e + e)
                }, d.toPrecision = function(e) {
                    return stringify(this, 3, e, e - 1)
                }, d.toString = function() {
                    return stringify(this)
                }, d.valueOf = d.toJSON = function() {
                    return stringify(this, 4)
                }, (s = function _Big_() {
                    function Big(e) {
                        if (!(this instanceof Big)) return e === p ? _Big_() : new Big(e);
                        e instanceof Big ? (this.s = e.s, this.e = e.e, this.c = e.c.slice()) : function(e, t) {
                            var r, n, i;
                            if (0 === t && 1 / t < 0) t = "-0";
                            else if (!f.test(t += "")) throw Error(u + "number");
                            for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), i = t.length, n = 0; n < i && "0" == t.charAt(n);) ++n;
                            if (n == i) e.c = [e.e = 0];
                            else {
                                for (; i > 0 && "0" == t.charAt(--i););
                                for (e.e = r - n - 1, e.c = [], r = 0; n <= i;) e.c[r++] = +t.charAt(n++)
                            }
                            return e
                        }(this, e), this.constructor = Big
                    }
                    return Big.prototype = d, Big.DP = 20, Big.RM = 1, Big.NE = -7, Big.PE = 21, Big.version = "5.2.2", Big
                }()).default = s.Big = s, void 0 !== (n = (function() {
                    return s
                }).call(t, r, t, e)) && (e.exports = n)
            }(0)
        },
        30539: function(e, t, r) {
            var n; /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
            ! function(i) {
                "use strict";
                var s, a = {
                        precision: 20,
                        rounding: 4,
                        toExpNeg: -7,
                        toExpPos: 21,
                        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
                    },
                    u = !0,
                    l = "[DecimalError] ",
                    c = l + "Invalid argument: ",
                    h = l + "Exponent out of range: ",
                    d = Math.floor,
                    p = Math.pow,
                    f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    g = d(1286742750677284.5),
                    m = {};

                function add(e, t) {
                    var r, n, i, s, a, l, c, h, d = e.constructor,
                        p = d.precision;
                    if (!e.s || !t.s) return t.s || (t = new d(e)), u ? round(t, p) : t;
                    if (c = e.d, h = t.d, a = e.e, i = t.e, c = c.slice(), s = a - i) {
                        for (s < 0 ? (n = c, s = -s, l = h.length) : (n = h, i = a, l = c.length), s > (l = (a = Math.ceil(p / 7)) > l ? a + 1 : l + 1) && (s = l, n.length = 1), n.reverse(); s--;) n.push(0);
                        n.reverse()
                    }
                    for ((l = c.length) - (s = h.length) < 0 && (s = l, n = h, h = c, c = n), r = 0; s;) r = (c[--s] = c[s] + h[s] + r) / 1e7 | 0, c[s] %= 1e7;
                    for (r && (c.unshift(r), ++i), l = c.length; 0 == c[--l];) c.pop();
                    return t.d = c, t.e = i, u ? round(t, p) : t
                }

                function checkInt32(e, t, r) {
                    if (e !== ~~e || e < t || e > r) throw Error(c + e)
                }

                function digitsToString(e) {
                    var t, r, n, i = e.length - 1,
                        s = "",
                        a = e[0];
                    if (i > 0) {
                        for (s += a, t = 1; t < i; t++)(r = 7 - (n = e[t] + "").length) && (s += getZeroString(r)), s += n;
                        (r = 7 - (n = (a = e[t]) + "").length) && (s += getZeroString(r))
                    } else if (0 === a) return "0";
                    for (; a % 10 == 0;) a /= 10;
                    return s + a
                }
                m.absoluteValue = m.abs = function() {
                    var e = new this.constructor(this);
                    return e.s && (e.s = 1), e
                }, m.comparedTo = m.cmp = function(e) {
                    var t, r, n, i;
                    if (e = new this.constructor(e), this.s !== e.s) return this.s || -e.s;
                    if (this.e !== e.e) return this.e > e.e ^ this.s < 0 ? 1 : -1;
                    for (t = 0, r = (n = this.d.length) < (i = e.d.length) ? n : i; t < r; ++t)
                        if (this.d[t] !== e.d[t]) return this.d[t] > e.d[t] ^ this.s < 0 ? 1 : -1;
                    return n === i ? 0 : n > i ^ this.s < 0 ? 1 : -1
                }, m.decimalPlaces = m.dp = function() {
                    var e = this.d.length - 1,
                        t = (e - this.e) * 7;
                    if (e = this.d[e])
                        for (; e % 10 == 0; e /= 10) t--;
                    return t < 0 ? 0 : t
                }, m.dividedBy = m.div = function(e) {
                    return _(this, new this.constructor(e))
                }, m.dividedToIntegerBy = m.idiv = function(e) {
                    var t = this.constructor;
                    return round(_(this, new t(e), 0, 1), t.precision)
                }, m.equals = m.eq = function(e) {
                    return !this.cmp(e)
                }, m.exponent = function() {
                    return getBase10Exponent(this)
                }, m.greaterThan = m.gt = function(e) {
                    return this.cmp(e) > 0
                }, m.greaterThanOrEqualTo = m.gte = function(e) {
                    return this.cmp(e) >= 0
                }, m.isInteger = m.isint = function() {
                    return this.e > this.d.length - 2
                }, m.isNegative = m.isneg = function() {
                    return this.s < 0
                }, m.isPositive = m.ispos = function() {
                    return this.s > 0
                }, m.isZero = function() {
                    return 0 === this.s
                }, m.lessThan = m.lt = function(e) {
                    return 0 > this.cmp(e)
                }, m.lessThanOrEqualTo = m.lte = function(e) {
                    return 1 > this.cmp(e)
                }, m.logarithm = m.log = function(e) {
                    var t, r = this.constructor,
                        n = r.precision,
                        i = n + 5;
                    if (void 0 === e) e = new r(10);
                    else if ((e = new r(e)).s < 1 || e.eq(s)) throw Error(l + "NaN");
                    if (this.s < 1) throw Error(l + (this.s ? "NaN" : "-Infinity"));
                    return this.eq(s) ? new r(0) : (u = !1, t = _(ln(this, i), ln(e, i), i), u = !0, round(t, n))
                }, m.minus = m.sub = function(e) {
                    return e = new this.constructor(e), this.s == e.s ? subtract(this, e) : add(this, (e.s = -e.s, e))
                }, m.modulo = m.mod = function(e) {
                    var t, r = this.constructor,
                        n = r.precision;
                    if (!(e = new r(e)).s) throw Error(l + "NaN");
                    return this.s ? (u = !1, t = _(this, e, 0, 1).times(e), u = !0, this.minus(t)) : round(new r(this), n)
                }, m.naturalExponential = m.exp = function() {
                    return exp(this)
                }, m.naturalLogarithm = m.ln = function() {
                    return ln(this)
                }, m.negated = m.neg = function() {
                    var e = new this.constructor(this);
                    return e.s = -e.s || 0, e
                }, m.plus = m.add = function(e) {
                    return e = new this.constructor(e), this.s == e.s ? add(this, e) : subtract(this, (e.s = -e.s, e))
                }, m.precision = m.sd = function(e) {
                    var t, r, n;
                    if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(c + e);
                    if (t = getBase10Exponent(this) + 1, r = 7 * (n = this.d.length - 1) + 1, n = this.d[n]) {
                        for (; n % 10 == 0; n /= 10) r--;
                        for (n = this.d[0]; n >= 10; n /= 10) r++
                    }
                    return e && t > r ? t : r
                }, m.squareRoot = m.sqrt = function() {
                    var e, t, r, n, i, s, a, c = this.constructor;
                    if (this.s < 1) {
                        if (!this.s) return new c(0);
                        throw Error(l + "NaN")
                    }
                    for (e = getBase10Exponent(this), u = !1, 0 == (i = Math.sqrt(+this)) || i == 1 / 0 ? (((t = digitsToString(this.d)).length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = d((e + 1) / 2) - (e < 0 || e % 2), t = i == 1 / 0 ? "5e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e, n = new c(t)) : n = new c(i.toString()), i = a = (r = c.precision) + 3;;)
                        if (n = (s = n).plus(_(this, s, a + 2)).times(.5), digitsToString(s.d).slice(0, a) === (t = digitsToString(n.d)).slice(0, a)) {
                            if (t = t.slice(a - 3, a + 1), i == a && "4999" == t) {
                                if (round(s, r + 1, 0), s.times(s).eq(this)) {
                                    n = s;
                                    break
                                }
                            } else if ("9999" != t) break;
                            a += 4
                        }
                    return u = !0, round(n, r)
                }, m.times = m.mul = function(e) {
                    var t, r, n, i, s, a, l, c, h, d = this.constructor,
                        p = this.d,
                        f = (e = new d(e)).d;
                    if (!this.s || !e.s) return new d(0);
                    for (e.s *= this.s, r = this.e + e.e, (c = p.length) < (h = f.length) && (s = p, p = f, f = s, a = c, c = h, h = a), s = [], n = a = c + h; n--;) s.push(0);
                    for (n = h; --n >= 0;) {
                        for (t = 0, i = c + n; i > n;) l = s[i] + f[n] * p[i - n - 1] + t, s[i--] = l % 1e7 | 0, t = l / 1e7 | 0;
                        s[i] = (s[i] + t) % 1e7 | 0
                    }
                    for (; !s[--a];) s.pop();
                    return t ? ++r : s.shift(), e.d = s, e.e = r, u ? round(e, d.precision) : e
                }, m.toDecimalPlaces = m.todp = function(e, t) {
                    var r = this,
                        n = r.constructor;
                    return (r = new n(r), void 0 === e) ? r : (checkInt32(e, 0, 1e9), void 0 === t ? t = n.rounding : checkInt32(t, 0, 8), round(r, e + getBase10Exponent(r) + 1, t))
                }, m.toExponential = function(e, t) {
                    var r, n = this,
                        i = n.constructor;
                    return void 0 === e ? r = toString(n, !0) : (checkInt32(e, 0, 1e9), void 0 === t ? t = i.rounding : checkInt32(t, 0, 8), r = toString(n = round(new i(n), e + 1, t), !0, e + 1)), r
                }, m.toFixed = function(e, t) {
                    var r, n, i = this.constructor;
                    return void 0 === e ? toString(this) : (checkInt32(e, 0, 1e9), void 0 === t ? t = i.rounding : checkInt32(t, 0, 8), r = toString((n = round(new i(this), e + getBase10Exponent(this) + 1, t)).abs(), !1, e + getBase10Exponent(n) + 1), this.isneg() && !this.isZero() ? "-" + r : r)
                }, m.toInteger = m.toint = function() {
                    var e = this.constructor;
                    return round(new e(this), getBase10Exponent(this) + 1, e.rounding)
                }, m.toNumber = function() {
                    return +this
                }, m.toPower = m.pow = function(e) {
                    var t, r, n, i, a, c, h = this,
                        p = h.constructor,
                        f = +(e = new p(e));
                    if (!e.s) return new p(s);
                    if (!(h = new p(h)).s) {
                        if (e.s < 1) throw Error(l + "Infinity");
                        return h
                    }
                    if (h.eq(s)) return h;
                    if (n = p.precision, e.eq(s)) return round(h, n);
                    if (c = (t = e.e) >= (r = e.d.length - 1), a = h.s, c) {
                        if ((r = f < 0 ? -f : f) <= 9007199254740991) {
                            for (i = new p(s), t = Math.ceil(n / 7 + 4), u = !1; r % 2 && truncate((i = i.times(h)).d, t), 0 !== (r = d(r / 2));) truncate((h = h.times(h)).d, t);
                            return u = !0, e.s < 0 ? new p(s).div(i) : round(i, n)
                        }
                    } else if (a < 0) throw Error(l + "NaN");
                    return a = a < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1, h.s = 1, u = !1, i = e.times(ln(h, n + 12)), u = !0, (i = exp(i)).s = a, i
                }, m.toPrecision = function(e, t) {
                    var r, n, i = this,
                        s = i.constructor;
                    return void 0 === e ? (r = getBase10Exponent(i), n = toString(i, r <= s.toExpNeg || r >= s.toExpPos)) : (checkInt32(e, 1, 1e9), void 0 === t ? t = s.rounding : checkInt32(t, 0, 8), r = getBase10Exponent(i = round(new s(i), e, t)), n = toString(i, e <= r || r <= s.toExpNeg, e)), n
                }, m.toSignificantDigits = m.tosd = function(e, t) {
                    var r = this.constructor;
                    return void 0 === e ? (e = r.precision, t = r.rounding) : (checkInt32(e, 1, 1e9), void 0 === t ? t = r.rounding : checkInt32(t, 0, 8)), round(new r(this), e, t)
                }, m.toString = m.valueOf = m.val = m.toJSON = function() {
                    var e = getBase10Exponent(this),
                        t = this.constructor;
                    return toString(this, e <= t.toExpNeg || e >= t.toExpPos)
                };
                var _ = function() {
                    function multiplyInteger(e, t) {
                        var r, n = 0,
                            i = e.length;
                        for (e = e.slice(); i--;) r = e[i] * t + n, e[i] = r % 1e7 | 0, n = r / 1e7 | 0;
                        return n && e.unshift(n), e
                    }

                    function compare(e, t, r, n) {
                        var i, s;
                        if (r != n) s = r > n ? 1 : -1;
                        else
                            for (i = s = 0; i < r; i++)
                                if (e[i] != t[i]) {
                                    s = e[i] > t[i] ? 1 : -1;
                                    break
                                } return s
                    }

                    function subtract(e, t, r) {
                        for (var n = 0; r--;) e[r] -= n, n = e[r] < t[r] ? 1 : 0, e[r] = 1e7 * n + e[r] - t[r];
                        for (; !e[0] && e.length > 1;) e.shift()
                    }
                    return function(e, t, r, n) {
                        var i, s, a, u, c, h, d, p, f, g, m, _, y, v, b, w, E, k, T = e.constructor,
                            A = e.s == t.s ? 1 : -1,
                            P = e.d,
                            S = t.d;
                        if (!e.s) return new T(e);
                        if (!t.s) throw Error(l + "Division by zero");
                        for (a = 0, s = e.e - t.e, E = S.length, b = P.length, p = (d = new T(A)).d = []; S[a] == (P[a] || 0);) ++a;
                        if (S[a] > (P[a] || 0) && --s, (_ = null == r ? r = T.precision : n ? r + (getBase10Exponent(e) - getBase10Exponent(t)) + 1 : r) < 0) return new T(0);
                        if (_ = _ / 7 + 2 | 0, a = 0, 1 == E)
                            for (u = 0, S = S[0], _++;
                                (a < b || u) && _--; a++) y = 1e7 * u + (P[a] || 0), p[a] = y / S | 0, u = y % S | 0;
                        else {
                            for ((u = 1e7 / (S[0] + 1) | 0) > 1 && (S = multiplyInteger(S, u), P = multiplyInteger(P, u), E = S.length, b = P.length), v = E, g = (f = P.slice(0, E)).length; g < E;) f[g++] = 0;
                            (k = S.slice()).unshift(0), w = S[0], S[1] >= 1e7 / 2 && ++w;
                            do u = 0, (i = compare(S, f, E, g)) < 0 ? (m = f[0], E != g && (m = 1e7 * m + (f[1] || 0)), (u = m / w | 0) > 1 ? (u >= 1e7 && (u = 1e7 - 1), h = (c = multiplyInteger(S, u)).length, g = f.length, 1 == (i = compare(c, f, h, g)) && (u--, subtract(c, E < h ? k : S, h))) : (0 == u && (i = u = 1), c = S.slice()), (h = c.length) < g && c.unshift(0), subtract(f, c, g), -1 == i && (g = f.length, (i = compare(S, f, E, g)) < 1 && (u++, subtract(f, E < g ? k : S, g))), g = f.length) : 0 === i && (u++, f = [0]), p[a++] = u, i && f[0] ? f[g++] = P[v] || 0 : (f = [P[v]], g = 1); while ((v++ < b || void 0 !== f[0]) && _--)
                        }
                        return p[0] || p.shift(), d.e = s, round(d, n ? r + getBase10Exponent(d) + 1 : r)
                    }
                }();

                function exp(e, t) {
                    var r, n, i, a, l, c = 0,
                        d = 0,
                        f = e.constructor,
                        g = f.precision;
                    if (getBase10Exponent(e) > 16) throw Error(h + getBase10Exponent(e));
                    if (!e.s) return new f(s);
                    for (null == t ? (u = !1, l = g) : l = t, a = new f(.03125); e.abs().gte(.1);) e = e.times(a), d += 5;
                    for (l += Math.log(p(2, d)) / Math.LN10 * 2 + 5 | 0, r = n = i = new f(s), f.precision = l;;) {
                        if (n = round(n.times(e), l), r = r.times(++c), digitsToString((a = i.plus(_(n, r, l))).d).slice(0, l) === digitsToString(i.d).slice(0, l)) {
                            for (; d--;) i = round(i.times(i), l);
                            return f.precision = g, null == t ? (u = !0, round(i, g)) : i
                        }
                        i = a
                    }
                }

                function getBase10Exponent(e) {
                    for (var t = 7 * e.e, r = e.d[0]; r >= 10; r /= 10) t++;
                    return t
                }

                function getLn10(e, t, r) {
                    if (t > e.LN10.sd()) throw u = !0, r && (e.precision = r), Error(l + "LN10 precision limit exceeded");
                    return round(new e(e.LN10), t)
                }

                function getZeroString(e) {
                    for (var t = ""; e--;) t += "0";
                    return t
                }

                function ln(e, t) {
                    var r, n, i, a, c, h, d, p, f, g = 1,
                        m = e,
                        y = m.d,
                        v = m.constructor,
                        b = v.precision;
                    if (m.s < 1) throw Error(l + (m.s ? "NaN" : "-Infinity"));
                    if (m.eq(s)) return new v(0);
                    if (null == t ? (u = !1, p = b) : p = t, m.eq(10)) return null == t && (u = !0), getLn10(v, p);
                    if (p += 10, v.precision = p, n = (r = digitsToString(y)).charAt(0), !(15e14 > Math.abs(a = getBase10Exponent(m)))) return d = getLn10(v, p + 2, b).times(a + ""), m = ln(new v(n + "." + r.slice(1)), p - 10).plus(d), v.precision = b, null == t ? (u = !0, round(m, b)) : m;
                    for (; n < 7 && 1 != n || 1 == n && r.charAt(1) > 3;) n = (r = digitsToString((m = m.times(e)).d)).charAt(0), g++;
                    for (a = getBase10Exponent(m), n > 1 ? (m = new v("0." + r), a++) : m = new v(n + "." + r.slice(1)), h = c = m = _(m.minus(s), m.plus(s), p), f = round(m.times(m), p), i = 3;;) {
                        if (c = round(c.times(f), p), digitsToString((d = h.plus(_(c, new v(i), p))).d).slice(0, p) === digitsToString(h.d).slice(0, p)) return h = h.times(2), 0 !== a && (h = h.plus(getLn10(v, p + 2, b).times(a + ""))), h = _(h, new v(g), p), v.precision = b, null == t ? (u = !0, round(h, b)) : h;
                        h = d, i += 2
                    }
                }

                function parseDecimal(e, t) {
                    var r, n, i;
                    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; 48 === t.charCodeAt(n);) ++n;
                    for (i = t.length; 48 === t.charCodeAt(i - 1);) --i;
                    if (t = t.slice(n, i)) {
                        if (i -= n, r = r - n - 1, e.e = d(r / 7), e.d = [], n = (r + 1) % 7, r < 0 && (n += 7), n < i) {
                            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i;) e.d.push(+t.slice(n, n += 7));
                            n = 7 - (t = t.slice(n)).length
                        } else n -= i;
                        for (; n--;) t += "0";
                        if (e.d.push(+t), u && (e.e > g || e.e < -g)) throw Error(h + r)
                    } else e.s = 0, e.e = 0, e.d = [0];
                    return e
                }

                function round(e, t, r) {
                    var n, i, s, a, l, c, f, m, _ = e.d;
                    for (a = 1, s = _[0]; s >= 10; s /= 10) a++;
                    if ((n = t - a) < 0) n += 7, i = t, f = _[m = 0];
                    else {
                        if ((m = Math.ceil((n + 1) / 7)) >= (s = _.length)) return e;
                        for (a = 1, f = s = _[m]; s >= 10; s /= 10) a++;
                        n %= 7, i = n - 7 + a
                    }
                    if (void 0 !== r && (l = f / (s = p(10, a - i - 1)) % 10 | 0, c = t < 0 || void 0 !== _[m + 1] || f % s, c = r < 4 ? (l || c) && (0 == r || r == (e.s < 0 ? 3 : 2)) : l > 5 || 5 == l && (4 == r || c || 6 == r && (n > 0 ? i > 0 ? f / p(10, a - i) : 0 : _[m - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !_[0]) return c ? (s = getBase10Exponent(e), _.length = 1, t = t - s - 1, _[0] = p(10, (7 - t % 7) % 7), e.e = d(-t / 7) || 0) : (_.length = 1, _[0] = e.e = e.s = 0), e;
                    if (0 == n ? (_.length = m, s = 1, m--) : (_.length = m + 1, s = p(10, 7 - n), _[m] = i > 0 ? (f / p(10, a - i) % p(10, i) | 0) * s : 0), c)
                        for (;;) {
                            if (0 == m) {
                                1e7 == (_[0] += s) && (_[0] = 1, ++e.e);
                                break
                            }
                            if (_[m] += s, 1e7 != _[m]) break;
                            _[m--] = 0, s = 1
                        }
                    for (n = _.length; 0 === _[--n];) _.pop();
                    if (u && (e.e > g || e.e < -g)) throw Error(h + getBase10Exponent(e));
                    return e
                }

                function subtract(e, t) {
                    var r, n, i, s, a, l, c, h, d, p, f = e.constructor,
                        g = f.precision;
                    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new f(e), u ? round(t, g) : t;
                    if (c = e.d, p = t.d, n = t.e, h = e.e, c = c.slice(), a = h - n) {
                        for ((d = a < 0) ? (r = c, a = -a, l = p.length) : (r = p, n = h, l = c.length), a > (i = Math.max(Math.ceil(g / 7), l) + 2) && (a = i, r.length = 1), r.reverse(), i = a; i--;) r.push(0);
                        r.reverse()
                    } else {
                        for ((d = (i = c.length) < (l = p.length)) && (l = i), i = 0; i < l; i++)
                            if (c[i] != p[i]) {
                                d = c[i] < p[i];
                                break
                            }
                        a = 0
                    }
                    for (d && (r = c, c = p, p = r, t.s = -t.s), l = c.length, i = p.length - l; i > 0; --i) c[l++] = 0;
                    for (i = p.length; i > a;) {
                        if (c[--i] < p[i]) {
                            for (s = i; s && 0 === c[--s];) c[s] = 1e7 - 1;
                            --c[s], c[i] += 1e7
                        }
                        c[i] -= p[i]
                    }
                    for (; 0 === c[--l];) c.pop();
                    for (; 0 === c[0]; c.shift()) --n;
                    return c[0] ? (t.d = c, t.e = n, u ? round(t, g) : t) : new f(0)
                }

                function toString(e, t, r) {
                    var n, i = getBase10Exponent(e),
                        s = digitsToString(e.d),
                        a = s.length;
                    return t ? (r && (n = r - a) > 0 ? s = s.charAt(0) + "." + s.slice(1) + getZeroString(n) : a > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (i < 0 ? "e" : "e+") + i) : i < 0 ? (s = "0." + getZeroString(-i - 1) + s, r && (n = r - a) > 0 && (s += getZeroString(n))) : i >= a ? (s += getZeroString(i + 1 - a), r && (n = r - i - 1) > 0 && (s = s + "." + getZeroString(n))) : ((n = i + 1) < a && (s = s.slice(0, n) + "." + s.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (s += "."), s += getZeroString(n))), e.s < 0 ? "-" + s : s
                }

                function truncate(e, t) {
                    if (e.length > t) return e.length = t, !0
                }

                function config(e) {
                    if (!e || "object" != typeof e) throw Error(l + "Object expected");
                    var t, r, n, i = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
                    for (t = 0; t < i.length; t += 3)
                        if (void 0 !== (n = e[r = i[t]])) {
                            if (d(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
                            else throw Error(c + r + ": " + n)
                        }
                    if (void 0 !== (n = e[r = "LN10"])) {
                        if (n == Math.LN10) this[r] = new this(n);
                        else throw Error(c + r + ": " + n)
                    }
                    return this
                }(a = function clone(e) {
                    var t, r, n;

                    function Decimal(e) {
                        if (!(this instanceof Decimal)) return new Decimal(e);
                        if (this.constructor = Decimal, e instanceof Decimal) {
                            this.s = e.s, this.e = e.e, this.d = (e = e.d) ? e.slice() : e;
                            return
                        }
                        if ("number" == typeof e) {
                            if (0 * e != 0) throw Error(c + e);
                            if (e > 0) this.s = 1;
                            else if (e < 0) e = -e, this.s = -1;
                            else {
                                this.s = 0, this.e = 0, this.d = [0];
                                return
                            }
                            if (e === ~~e && e < 1e7) {
                                this.e = 0, this.d = [e];
                                return
                            }
                            return parseDecimal(this, e.toString())
                        }
                        if ("string" != typeof e) throw Error(c + e);
                        if (45 === e.charCodeAt(0) ? (e = e.slice(1), this.s = -1) : this.s = 1, f.test(e)) parseDecimal(this, e);
                        else throw Error(c + e)
                    }
                    if (Decimal.prototype = m, Decimal.ROUND_UP = 0, Decimal.ROUND_DOWN = 1, Decimal.ROUND_CEIL = 2, Decimal.ROUND_FLOOR = 3, Decimal.ROUND_HALF_UP = 4, Decimal.ROUND_HALF_DOWN = 5, Decimal.ROUND_HALF_EVEN = 6, Decimal.ROUND_HALF_CEIL = 7, Decimal.ROUND_HALF_FLOOR = 8, Decimal.clone = clone, Decimal.config = Decimal.set = config, void 0 === e && (e = {}), e)
                        for (t = 0, n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; t < n.length;) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
                    return Decimal.config(e), Decimal
                }(a)).default = a.Decimal = a, s = new a(1), void 0 !== (n = (function() {
                    return a
                }).call(t, r, t, e)) && (e.exports = n)
            }(0)
        },
        94e3: function(e) {
            e.exports = function() {
                "use strict";
                var e = Math.clz32,
                    t = Math.abs,
                    r = Math.max,
                    n = Math.floor;
                let o = class o extends Array {
                    constructor(e, t) {
                        if (super(e), this.sign = t, e > o.__kMaxLength) throw RangeError("Maximum BigInt size exceeded")
                    }
                    static BigInt(e) {
                        var t = Number.isFinite;
                        if ("number" == typeof e) {
                            if (0 === e) return o.__zero();
                            if (o.__isOneDigitInt(e)) return 0 > e ? o.__oneDigit(-e, !0) : o.__oneDigit(e, !1);
                            if (!t(e) || n(e) !== e) throw RangeError("The number " + e + " cannot be converted to BigInt because it is not an integer");
                            return o.__fromDouble(e)
                        }
                        if ("string" == typeof e) {
                            let t = o.__fromString(e);
                            if (null === t) throw SyntaxError("Cannot convert " + e + " to a BigInt");
                            return t
                        }
                        if ("boolean" == typeof e) return !0 === e ? o.__oneDigit(1, !1) : o.__zero();
                        if ("object" == typeof e) {
                            if (e.constructor === o) return e;
                            let t = o.__toPrimitive(e);
                            return o.BigInt(t)
                        }
                        throw TypeError("Cannot convert " + e + " to a BigInt")
                    }
                    toDebugString() {
                        let e = ["BigInt["];
                        for (let t of this) e.push((t ? (t >>> 0).toString(16) : t) + ", ");
                        return e.push("]"), e.join("")
                    }
                    toString(e = 10) {
                        if (2 > e || 36 < e) throw RangeError("toString() radix argument must be between 2 and 36");
                        return 0 === this.length ? "0" : 0 == (e & e - 1) ? o.__toStringBasePowerOfTwo(this, e) : o.__toStringGeneric(this, e, !1)
                    }
                    static toNumber(e) {
                        let t = e.length;
                        if (0 === t) return 0;
                        if (1 === t) {
                            let t = e.__unsignedDigit(0);
                            return e.sign ? -t : t
                        }
                        let r = e.__digit(t - 1),
                            n = o.__clz30(r),
                            i = 30 * t - n;
                        if (1024 < i) return e.sign ? -1 / 0 : 1 / 0;
                        let s = i - 1,
                            a = r,
                            u = t - 1,
                            l = n + 3,
                            c = 32 === l ? 0 : a << l;
                        c >>>= 12;
                        let h = l - 12,
                            d = 12 <= l ? 0 : a << 20 + l,
                            p = 20 + l;
                        for (0 < h && 0 < u && (u--, c |= (a = e.__digit(u)) >>> 30 - h, d = a << h + 2, p = h + 2); 0 < p && 0 < u;) u--, a = e.__digit(u), d |= 30 <= p ? a << p - 30 : a >>> 30 - p, p -= 30;
                        let f = o.__decideRounding(e, p, u, a);
                        if ((1 === f || 0 === f && 1 == (1 & d)) && 0 == (d = d + 1 >>> 0) && 0 != ++c >>> 20 && (c = 0, 1023 < ++s)) return e.sign ? -1 / 0 : 1 / 0;
                        let g = e.sign ? -2147483648 : 0;
                        return s = s + 1023 << 20, o.__kBitConversionInts[1] = g | s | c, o.__kBitConversionInts[0] = d, o.__kBitConversionDouble[0]
                    }
                    static unaryMinus(e) {
                        if (0 === e.length) return e;
                        let t = e.__copy();
                        return t.sign = !e.sign, t
                    }
                    static bitwiseNot(e) {
                        return e.sign ? o.__absoluteSubOne(e).__trim() : o.__absoluteAddOne(e, !0)
                    }
                    static exponentiate(e, t) {
                        if (t.sign) throw RangeError("Exponent must be positive");
                        if (0 === t.length) return o.__oneDigit(1, !1);
                        if (0 === e.length) return e;
                        if (1 === e.length && 1 === e.__digit(0)) return e.sign && 0 == (1 & t.__digit(0)) ? o.unaryMinus(e) : e;
                        if (1 < t.length) throw RangeError("BigInt too big");
                        let r = t.__unsignedDigit(0);
                        if (1 === r) return e;
                        if (r >= o.__kMaxLengthBits) throw RangeError("BigInt too big");
                        if (1 === e.length && 2 === e.__digit(0)) {
                            let t = 1 + (0 | r / 30),
                                n = e.sign && 0 != (1 & r),
                                i = new o(t, n);
                            i.__initializeDigits();
                            let s = 1 << r % 30;
                            return i.__setDigit(t - 1, s), i
                        }
                        let n = null,
                            i = e;
                        for (0 != (1 & r) && (n = e), r >>= 1; 0 !== r; r >>= 1) i = o.multiply(i, i), 0 != (1 & r) && (n = null === n ? i : o.multiply(n, i));
                        return n
                    }
                    static multiply(e, t) {
                        if (0 === e.length) return e;
                        if (0 === t.length) return t;
                        let r = e.length + t.length;
                        30 <= e.__clzmsd() + t.__clzmsd() && r--;
                        let n = new o(r, e.sign !== t.sign);
                        n.__initializeDigits();
                        for (let r = 0; r < e.length; r++) o.__multiplyAccumulate(t, e.__digit(r), n, r);
                        return n.__trim()
                    }
                    static divide(e, t) {
                        let r;
                        if (0 === t.length) throw RangeError("Division by zero");
                        if (0 > o.__absoluteCompare(e, t)) return o.__zero();
                        let n = e.sign !== t.sign,
                            i = t.__unsignedDigit(0);
                        if (1 === t.length && 32767 >= i) {
                            if (1 === i) return n === e.sign ? e : o.unaryMinus(e);
                            r = o.__absoluteDivSmall(e, i, null)
                        } else r = o.__absoluteDivLarge(e, t, !0, !1);
                        return r.sign = n, r.__trim()
                    }
                    static remainder(e, t) {
                        if (0 === t.length) throw RangeError("Division by zero");
                        if (0 > o.__absoluteCompare(e, t)) return e;
                        let r = t.__unsignedDigit(0);
                        if (1 === t.length && 32767 >= r) {
                            if (1 === r) return o.__zero();
                            let t = o.__absoluteModSmall(e, r);
                            return 0 === t ? o.__zero() : o.__oneDigit(t, e.sign)
                        }
                        let n = o.__absoluteDivLarge(e, t, !1, !0);
                        return n.sign = e.sign, n.__trim()
                    }
                    static add(e, t) {
                        let r = e.sign;
                        return r === t.sign ? o.__absoluteAdd(e, t, r) : 0 <= o.__absoluteCompare(e, t) ? o.__absoluteSub(e, t, r) : o.__absoluteSub(t, e, !r)
                    }
                    static subtract(e, t) {
                        let r = e.sign;
                        return r === t.sign ? 0 <= o.__absoluteCompare(e, t) ? o.__absoluteSub(e, t, r) : o.__absoluteSub(t, e, !r) : o.__absoluteAdd(e, t, r)
                    }
                    static leftShift(e, t) {
                        return 0 === t.length || 0 === e.length ? e : t.sign ? o.__rightShiftByAbsolute(e, t) : o.__leftShiftByAbsolute(e, t)
                    }
                    static signedRightShift(e, t) {
                        return 0 === t.length || 0 === e.length ? e : t.sign ? o.__leftShiftByAbsolute(e, t) : o.__rightShiftByAbsolute(e, t)
                    }
                    static unsignedRightShift() {
                        throw TypeError("BigInts have no unsigned right shift; use >> instead")
                    }
                    static lessThan(e, t) {
                        return 0 > o.__compareToBigInt(e, t)
                    }
                    static lessThanOrEqual(e, t) {
                        return 0 >= o.__compareToBigInt(e, t)
                    }
                    static greaterThan(e, t) {
                        return 0 < o.__compareToBigInt(e, t)
                    }
                    static greaterThanOrEqual(e, t) {
                        return 0 <= o.__compareToBigInt(e, t)
                    }
                    static equal(e, t) {
                        if (e.sign !== t.sign || e.length !== t.length) return !1;
                        for (let r = 0; r < e.length; r++)
                            if (e.__digit(r) !== t.__digit(r)) return !1;
                        return !0
                    }
                    static notEqual(e, t) {
                        return !o.equal(e, t)
                    }
                    static bitwiseAnd(e, t) {
                        if (!e.sign && !t.sign) return o.__absoluteAnd(e, t).__trim();
                        if (e.sign && t.sign) {
                            let n = r(e.length, t.length) + 1,
                                i = o.__absoluteSubOne(e, n),
                                s = o.__absoluteSubOne(t);
                            return i = o.__absoluteOr(i, s, i), o.__absoluteAddOne(i, !0, i).__trim()
                        }
                        return e.sign && ([e, t] = [t, e]), o.__absoluteAndNot(e, o.__absoluteSubOne(t)).__trim()
                    }
                    static bitwiseXor(e, t) {
                        if (!e.sign && !t.sign) return o.__absoluteXor(e, t).__trim();
                        if (e.sign && t.sign) {
                            let n = r(e.length, t.length),
                                i = o.__absoluteSubOne(e, n),
                                s = o.__absoluteSubOne(t);
                            return o.__absoluteXor(i, s, i).__trim()
                        }
                        let n = r(e.length, t.length) + 1;
                        e.sign && ([e, t] = [t, e]);
                        let i = o.__absoluteSubOne(t, n);
                        return i = o.__absoluteXor(i, e, i), o.__absoluteAddOne(i, !0, i).__trim()
                    }
                    static bitwiseOr(e, t) {
                        let n = r(e.length, t.length);
                        if (!e.sign && !t.sign) return o.__absoluteOr(e, t).__trim();
                        if (e.sign && t.sign) {
                            let r = o.__absoluteSubOne(e, n),
                                i = o.__absoluteSubOne(t);
                            return r = o.__absoluteAnd(r, i, r), o.__absoluteAddOne(r, !0, r).__trim()
                        }
                        e.sign && ([e, t] = [t, e]);
                        let i = o.__absoluteSubOne(t, n);
                        return i = o.__absoluteAndNot(i, e, i), o.__absoluteAddOne(i, !0, i).__trim()
                    }
                    static asIntN(e, t) {
                        if (0 === t.length) return t;
                        if (0 > (e = n(e))) throw RangeError("Invalid value: not (convertible to) a safe integer");
                        if (0 === e) return o.__zero();
                        if (e >= o.__kMaxLengthBits) return t;
                        let r = 0 | (e + 29) / 30;
                        if (t.length < r) return t;
                        let i = t.__unsignedDigit(r - 1),
                            s = 1 << (e - 1) % 30;
                        if (t.length === r && i < s) return t;
                        if ((i & s) !== s) return o.__truncateToNBits(e, t);
                        if (!t.sign) return o.__truncateAndSubFromPowerOfTwo(e, t, !0);
                        if (0 == (i & s - 1)) {
                            for (let n = r - 2; 0 <= n; n--)
                                if (0 !== t.__digit(n)) return o.__truncateAndSubFromPowerOfTwo(e, t, !1);
                            return t.length === r && i === s ? t : o.__truncateToNBits(e, t)
                        }
                        return o.__truncateAndSubFromPowerOfTwo(e, t, !1)
                    }
                    static asUintN(e, t) {
                        if (0 === t.length) return t;
                        if (0 > (e = n(e))) throw RangeError("Invalid value: not (convertible to) a safe integer");
                        if (0 === e) return o.__zero();
                        if (t.sign) {
                            if (e > o.__kMaxLengthBits) throw RangeError("BigInt too big");
                            return o.__truncateAndSubFromPowerOfTwo(e, t, !1)
                        }
                        if (e >= o.__kMaxLengthBits) return t;
                        let r = 0 | (e + 29) / 30;
                        if (t.length < r) return t;
                        let i = e % 30;
                        if (t.length == r) {
                            if (0 === i) return t;
                            let e = t.__digit(r - 1);
                            if (0 == e >>> i) return t
                        }
                        return o.__truncateToNBits(e, t)
                    }
                    static ADD(e, t) {
                        if (e = o.__toPrimitive(e), t = o.__toPrimitive(t), "string" == typeof e) return "string" != typeof t && (t = t.toString()), e + t;
                        if ("string" == typeof t) return e.toString() + t;
                        if (e = o.__toNumeric(e), t = o.__toNumeric(t), o.__isBigInt(e) && o.__isBigInt(t)) return o.add(e, t);
                        if ("number" == typeof e && "number" == typeof t) return e + t;
                        throw TypeError("Cannot mix BigInt and other types, use explicit conversions")
                    }
                    static LT(e, t) {
                        return o.__compare(e, t, 0)
                    }
                    static LE(e, t) {
                        return o.__compare(e, t, 1)
                    }
                    static GT(e, t) {
                        return o.__compare(e, t, 2)
                    }
                    static GE(e, t) {
                        return o.__compare(e, t, 3)
                    }
                    static EQ(e, t) {
                        for (;;) {
                            if (o.__isBigInt(e)) return o.__isBigInt(t) ? o.equal(e, t) : o.EQ(t, e);
                            if ("number" == typeof e) {
                                if (o.__isBigInt(t)) return o.__equalToNumber(t, e);
                                if ("object" != typeof t) return e == t;
                                t = o.__toPrimitive(t)
                            } else if ("string" == typeof e) {
                                if (o.__isBigInt(t)) return null !== (e = o.__fromString(e)) && o.equal(e, t);
                                if ("object" != typeof t) return e == t;
                                t = o.__toPrimitive(t)
                            } else if ("boolean" == typeof e) {
                                if (o.__isBigInt(t)) return o.__equalToNumber(t, +e);
                                if ("object" != typeof t) return e == t;
                                t = o.__toPrimitive(t)
                            } else if ("symbol" == typeof e) {
                                if (o.__isBigInt(t)) return !1;
                                if ("object" != typeof t) return e == t;
                                t = o.__toPrimitive(t)
                            } else {
                                if ("object" != typeof e || "object" == typeof t && t.constructor !== o) return e == t;
                                e = o.__toPrimitive(e)
                            }
                        }
                    }
                    static NE(e, t) {
                        return !o.EQ(e, t)
                    }
                    static __zero() {
                        return new o(0, !1)
                    }
                    static __oneDigit(e, t) {
                        let r = new o(1, t);
                        return r.__setDigit(0, e), r
                    }
                    __copy() {
                        let e = new o(this.length, this.sign);
                        for (let t = 0; t < this.length; t++) e[t] = this[t];
                        return e
                    }
                    __trim() {
                        let e = this.length,
                            t = this[e - 1];
                        for (; 0 === t;) t = this[--e - 1], this.pop();
                        return 0 === e && (this.sign = !1), this
                    }
                    __initializeDigits() {
                        for (let e = 0; e < this.length; e++) this[e] = 0
                    }
                    static __decideRounding(e, t, r, n) {
                        let i;
                        if (0 < t) return -1;
                        if (0 > t) i = -t - 1;
                        else {
                            if (0 === r) return -1;
                            r--, n = e.__digit(r), i = 29
                        }
                        let s = 1 << i;
                        if (0 == (n & s)) return -1;
                        if (0 != (n & (s -= 1))) return 1;
                        for (; 0 < r;)
                            if (r--, 0 !== e.__digit(r)) return 1;
                        return 0
                    }
                    static __fromDouble(e) {
                        o.__kBitConversionDouble[0] = e;
                        let t = 2047 & o.__kBitConversionInts[1] >>> 20,
                            r = t - 1023,
                            n = (0 | r / 30) + 1,
                            i = new o(n, 0 > e),
                            s = 1048575 & o.__kBitConversionInts[1] | 1048576,
                            a = o.__kBitConversionInts[0],
                            u = r % 30,
                            l, c = 0;
                        if (20 > u) {
                            let e = 20 - u;
                            c = e + 32, l = s >>> e, s = s << 32 - e | a >>> e, a <<= 32 - e
                        } else if (20 === u) c = 32, l = s, s = a, a = 0;
                        else {
                            let e = u - 20;
                            c = 32 - e, l = s << e | a >>> 32 - e, s = a << e, a = 0
                        }
                        i.__setDigit(n - 1, l);
                        for (let e = n - 2; 0 <= e; e--) 0 < c ? (c -= 30, l = s >>> 2, s = s << 30 | a >>> 2, a <<= 30) : l = 0, i.__setDigit(e, l);
                        return i.__trim()
                    }
                    static __isWhitespace(e) {
                        return !!(13 >= e && 9 <= e) || (159 >= e ? 32 == e : 131071 >= e ? 160 == e || 5760 == e : 196607 >= e ? 10 >= (e &= 131071) || 40 == e || 41 == e || 47 == e || 95 == e || 4096 == e : 65279 == e)
                    }
                    static __fromString(e, t = 0) {
                        let r = 0,
                            n = e.length,
                            i = 0;
                        if (0 === n) return o.__zero();
                        let s = e.charCodeAt(i);
                        for (; o.__isWhitespace(s);) {
                            if (++i === n) return o.__zero();
                            s = e.charCodeAt(i)
                        }
                        if (43 === s) {
                            if (++i === n) return null;
                            s = e.charCodeAt(i), r = 1
                        } else if (45 === s) {
                            if (++i === n) return null;
                            s = e.charCodeAt(i), r = -1
                        }
                        if (0 === t) {
                            if (t = 10, 48 === s) {
                                if (++i === n) return o.__zero();
                                if (88 === (s = e.charCodeAt(i)) || 120 === s) {
                                    if (t = 16, ++i === n) return null;
                                    s = e.charCodeAt(i)
                                } else if (79 === s || 111 === s) {
                                    if (t = 8, ++i === n) return null;
                                    s = e.charCodeAt(i)
                                } else if (66 === s || 98 === s) {
                                    if (t = 2, ++i === n) return null;
                                    s = e.charCodeAt(i)
                                }
                            }
                        } else if (16 === t && 48 === s) {
                            if (++i === n) return o.__zero();
                            if (88 === (s = e.charCodeAt(i)) || 120 === s) {
                                if (++i === n) return null;
                                s = e.charCodeAt(i)
                            }
                        }
                        if (0 != r && 10 !== t) return null;
                        for (; 48 === s;) {
                            if (++i === n) return o.__zero();
                            s = e.charCodeAt(i)
                        }
                        let a = n - i,
                            u = o.__kMaxBitsPerChar[t],
                            l = o.__kBitsPerCharTableMultiplier - 1;
                        if (a > 1073741824 / u) return null;
                        let c = u * a + l >>> o.__kBitsPerCharTableShift,
                            h = new o(0 | (c + 29) / 30, !1),
                            d = 10 > t ? t : 10,
                            p = 10 < t ? t - 10 : 0;
                        if (0 == (t & t - 1)) {
                            u >>= o.__kBitsPerCharTableShift;
                            let t = [],
                                r = [],
                                a = !1;
                            do {
                                let l = 0,
                                    c = 0;
                                for (;;) {
                                    let t;
                                    if (s - 48 >>> 0 < d) t = s - 48;
                                    else if ((32 | s) - 97 >>> 0 < p) t = (32 | s) - 87;
                                    else {
                                        a = !0;
                                        break
                                    }
                                    if (c += u, l = l << u | t, ++i === n) {
                                        a = !0;
                                        break
                                    }
                                    if (s = e.charCodeAt(i), 30 < c + u) break
                                }
                                t.push(l), r.push(c)
                            } while (!a);
                            o.__fillFromParts(h, t, r)
                        } else {
                            h.__initializeDigits();
                            let r = !1,
                                a = 0;
                            do {
                                let c = 0,
                                    f = 1;
                                for (;;) {
                                    let u;
                                    if (s - 48 >>> 0 < d) u = s - 48;
                                    else if ((32 | s) - 97 >>> 0 < p) u = (32 | s) - 87;
                                    else {
                                        r = !0;
                                        break
                                    }
                                    let l = f * t;
                                    if (1073741823 < l) break;
                                    if (f = l, c = c * t + u, a++, ++i === n) {
                                        r = !0;
                                        break
                                    }
                                    s = e.charCodeAt(i)
                                }
                                l = 30 * o.__kBitsPerCharTableMultiplier - 1;
                                let g = 0 | (u * a + l >>> o.__kBitsPerCharTableShift) / 30;
                                h.__inplaceMultiplyAdd(f, c, g)
                            } while (!r)
                        }
                        if (i !== n) {
                            if (!o.__isWhitespace(s)) return null;
                            for (i++; i < n; i++)
                                if (s = e.charCodeAt(i), !o.__isWhitespace(s)) return null
                        }
                        return h.sign = -1 == r, h.__trim()
                    }
                    static __fillFromParts(e, t, r) {
                        let n = 0,
                            i = 0,
                            s = 0;
                        for (let a = t.length - 1; 0 <= a; a--) {
                            let u = t[a],
                                l = r[a];
                            i |= u << s, 30 === (s += l) ? (e.__setDigit(n++, i), s = 0, i = 0) : 30 < s && (e.__setDigit(n++, 1073741823 & i), s -= 30, i = u >>> l - s)
                        }
                        if (0 !== i) {
                            if (n >= e.length) throw Error("implementation bug");
                            e.__setDigit(n++, i)
                        }
                        for (; n < e.length; n++) e.__setDigit(n, 0)
                    }
                    static __toStringBasePowerOfTwo(e, t) {
                        let r = e.length,
                            n = t - 1;
                        n = (15 & (n = (51 & (n = (85 & n >>> 1) + (85 & n)) >>> 2) + (51 & n)) >>> 4) + (15 & n);
                        let i = n,
                            s = t - 1,
                            a = e.__digit(r - 1),
                            u = o.__clz30(a),
                            l = 0 | (30 * r - u + i - 1) / i;
                        if (e.sign && l++, 268435456 < l) throw Error("string too long");
                        let c = Array(l),
                            h = l - 1,
                            d = 0,
                            p = 0;
                        for (let t = 0; t < r - 1; t++) {
                            let r = e.__digit(t),
                                n = (d | r << p) & s;
                            c[h--] = o.__kConversionChars[n];
                            let a = i - p;
                            for (d = r >>> a, p = 30 - a; p >= i;) c[h--] = o.__kConversionChars[d & s], d >>>= i, p -= i
                        }
                        let f = (d | a << p) & s;
                        for (c[h--] = o.__kConversionChars[f], d = a >>> i - p; 0 !== d;) c[h--] = o.__kConversionChars[d & s], d >>>= i;
                        if (e.sign && (c[h--] = "-"), -1 != h) throw Error("implementation bug");
                        return c.join("")
                    }
                    static __toStringGeneric(e, t, r) {
                        let n, i;
                        let s = e.length;
                        if (0 === s) return "";
                        if (1 === s) {
                            let n = e.__unsignedDigit(0).toString(t);
                            return !1 === r && e.sign && (n = "-" + n), n
                        }
                        let a = 30 * s - o.__clz30(e.__digit(s - 1)),
                            u = o.__kMaxBitsPerChar[t],
                            l = u - 1,
                            c = a * o.__kBitsPerCharTableMultiplier;
                        c += l - 1, c = 0 | c / l;
                        let h = c + 1 >> 1,
                            d = o.exponentiate(o.__oneDigit(t, !1), o.__oneDigit(h, !1)),
                            p = d.__unsignedDigit(0);
                        if (1 === d.length && 32767 >= p) {
                            (n = new o(e.length, !1)).__initializeDigits();
                            let r = 0;
                            for (let t = 2 * e.length - 1; 0 <= t; t--) {
                                let i = r << 15 | e.__halfDigit(t);
                                n.__setHalfDigit(t, 0 | i / p), r = 0 | i % p
                            }
                            i = r.toString(t)
                        } else {
                            let r = o.__absoluteDivLarge(e, d, !0, !0);
                            n = r.quotient;
                            let s = r.remainder.__trim();
                            i = o.__toStringGeneric(s, t, !0)
                        }
                        n.__trim();
                        let f = o.__toStringGeneric(n, t, !0);
                        for (; i.length < h;) i = "0" + i;
                        return !1 === r && e.sign && (f = "-" + f), f + i
                    }
                    static __unequalSign(e) {
                        return e ? -1 : 1
                    }
                    static __absoluteGreater(e) {
                        return e ? -1 : 1
                    }
                    static __absoluteLess(e) {
                        return e ? 1 : -1
                    }
                    static __compareToBigInt(e, t) {
                        let r = e.sign;
                        if (r !== t.sign) return o.__unequalSign(r);
                        let n = o.__absoluteCompare(e, t);
                        return 0 < n ? o.__absoluteGreater(r) : 0 > n ? o.__absoluteLess(r) : 0
                    }
                    static __compareToNumber(e, r) {
                        if (o.__isOneDigitInt(r)) {
                            let n = e.sign,
                                i = 0 > r;
                            if (n !== i) return o.__unequalSign(n);
                            if (0 === e.length) {
                                if (i) throw Error("implementation bug");
                                return 0 === r ? 0 : -1
                            }
                            if (1 < e.length) return o.__absoluteGreater(n);
                            let s = t(r),
                                a = e.__unsignedDigit(0);
                            return a > s ? o.__absoluteGreater(n) : a < s ? o.__absoluteLess(n) : 0
                        }
                        return o.__compareToDouble(e, r)
                    }
                    static __compareToDouble(e, t) {
                        if (t != t) return t;
                        if (t === 1 / 0) return -1;
                        if (t === -1 / 0) return 1;
                        let r = e.sign;
                        if (r !== 0 > t) return o.__unequalSign(r);
                        if (0 === t) throw Error("implementation bug: should be handled elsewhere");
                        if (0 === e.length) return -1;
                        o.__kBitConversionDouble[0] = t;
                        let n = 2047 & o.__kBitConversionInts[1] >>> 20;
                        if (2047 == n) throw Error("implementation bug: handled elsewhere");
                        let i = n - 1023;
                        if (0 > i) return o.__absoluteGreater(r);
                        let s = e.length,
                            a = e.__digit(s - 1),
                            u = o.__clz30(a),
                            l = 30 * s - u,
                            c = i + 1;
                        if (l < c) return o.__absoluteLess(r);
                        if (l > c) return o.__absoluteGreater(r);
                        let h = 1048576 | 1048575 & o.__kBitConversionInts[1],
                            d = o.__kBitConversionInts[0],
                            p = 29 - u;
                        if (p !== (0 | (l - 1) % 30)) throw Error("implementation bug");
                        let f, g = 0;
                        if (20 > p) {
                            let e = 20 - p;
                            g = e + 32, f = h >>> e, h = h << 32 - e | d >>> e, d <<= 32 - e
                        } else if (20 === p) g = 32, f = h, h = d, d = 0;
                        else {
                            let e = p - 20;
                            g = 32 - e, f = h << e | d >>> 32 - e, h = d << e, d = 0
                        }
                        if ((a >>>= 0) > (f >>>= 0)) return o.__absoluteGreater(r);
                        if (a < f) return o.__absoluteLess(r);
                        for (let t = s - 2; 0 <= t; t--) {
                            0 < g ? (g -= 30, f = h >>> 2, h = h << 30 | d >>> 2, d <<= 30) : f = 0;
                            let n = e.__unsignedDigit(t);
                            if (n > f) return o.__absoluteGreater(r);
                            if (n < f) return o.__absoluteLess(r)
                        }
                        if (0 !== h || 0 !== d) {
                            if (0 === g) throw Error("implementation bug");
                            return o.__absoluteLess(r)
                        }
                        return 0
                    }
                    static __equalToNumber(e, r) {
                        return o.__isOneDigitInt(r) ? 0 === r ? 0 === e.length : 1 === e.length && e.sign === 0 > r && e.__unsignedDigit(0) === t(r) : 0 === o.__compareToDouble(e, r)
                    }
                    static __comparisonResultToBool(e, t) {
                        return 0 === t ? 0 > e : 1 === t ? 0 >= e : 2 === t ? 0 < e : 3 === t ? 0 <= e : void 0
                    }
                    static __compare(e, t, r) {
                        if (e = o.__toPrimitive(e), t = o.__toPrimitive(t), "string" == typeof e && "string" == typeof t) switch (r) {
                            case 0:
                                return e < t;
                            case 1:
                                return e <= t;
                            case 2:
                                return e > t;
                            case 3:
                                return e >= t
                        }
                        if (o.__isBigInt(e) && "string" == typeof t) return null !== (t = o.__fromString(t)) && o.__comparisonResultToBool(o.__compareToBigInt(e, t), r);
                        if ("string" == typeof e && o.__isBigInt(t)) return null !== (e = o.__fromString(e)) && o.__comparisonResultToBool(o.__compareToBigInt(e, t), r);
                        if (e = o.__toNumeric(e), t = o.__toNumeric(t), o.__isBigInt(e)) {
                            if (o.__isBigInt(t)) return o.__comparisonResultToBool(o.__compareToBigInt(e, t), r);
                            if ("number" != typeof t) throw Error("implementation bug");
                            return o.__comparisonResultToBool(o.__compareToNumber(e, t), r)
                        }
                        if ("number" != typeof e) throw Error("implementation bug");
                        if (o.__isBigInt(t)) return o.__comparisonResultToBool(o.__compareToNumber(t, e), 2 ^ r);
                        if ("number" != typeof t) throw Error("implementation bug");
                        return 0 === r ? e < t : 1 === r ? e <= t : 2 === r ? e > t : 3 === r ? e >= t : void 0
                    }
                    __clzmsd() {
                        return o.__clz30(this.__digit(this.length - 1))
                    }
                    static __absoluteAdd(e, t, r) {
                        if (e.length < t.length) return o.__absoluteAdd(t, e, r);
                        if (0 === e.length) return e;
                        if (0 === t.length) return e.sign === r ? e : o.unaryMinus(e);
                        let n = e.length;
                        (0 === e.__clzmsd() || t.length === e.length && 0 === t.__clzmsd()) && n++;
                        let i = new o(n, r),
                            s = 0,
                            a = 0;
                        for (; a < t.length; a++) {
                            let r = e.__digit(a) + t.__digit(a) + s;
                            s = r >>> 30, i.__setDigit(a, 1073741823 & r)
                        }
                        for (; a < e.length; a++) {
                            let t = e.__digit(a) + s;
                            s = t >>> 30, i.__setDigit(a, 1073741823 & t)
                        }
                        return a < i.length && i.__setDigit(a, s), i.__trim()
                    }
                    static __absoluteSub(e, t, r) {
                        if (0 === e.length) return e;
                        if (0 === t.length) return e.sign === r ? e : o.unaryMinus(e);
                        let n = new o(e.length, r),
                            i = 0,
                            s = 0;
                        for (; s < t.length; s++) {
                            let r = e.__digit(s) - t.__digit(s) - i;
                            i = 1 & r >>> 30, n.__setDigit(s, 1073741823 & r)
                        }
                        for (; s < e.length; s++) {
                            let t = e.__digit(s) - i;
                            i = 1 & t >>> 30, n.__setDigit(s, 1073741823 & t)
                        }
                        return n.__trim()
                    }
                    static __absoluteAddOne(e, t, r = null) {
                        let n = e.length;
                        null === r ? r = new o(n, t) : r.sign = t;
                        let i = 1;
                        for (let t = 0; t < n; t++) {
                            let n = e.__digit(t) + i;
                            i = n >>> 30, r.__setDigit(t, 1073741823 & n)
                        }
                        return 0 != i && r.__setDigitGrow(n, 1), r
                    }
                    static __absoluteSubOne(e, t) {
                        let r = e.length;
                        t = t || r;
                        let n = new o(t, !1),
                            i = 1;
                        for (let t = 0; t < r; t++) {
                            let r = e.__digit(t) - i;
                            i = 1 & r >>> 30, n.__setDigit(t, 1073741823 & r)
                        }
                        if (0 != i) throw Error("implementation bug");
                        for (let e = r; e < t; e++) n.__setDigit(e, 0);
                        return n
                    }
                    static __absoluteAnd(e, t, r = null) {
                        let n = e.length,
                            i = t.length,
                            s = i;
                        if (n < i) {
                            s = n;
                            let r = e,
                                a = n;
                            e = t, n = i, t = r, i = a
                        }
                        let a = s;
                        null === r ? r = new o(a, !1) : a = r.length;
                        let u = 0;
                        for (; u < s; u++) r.__setDigit(u, e.__digit(u) & t.__digit(u));
                        for (; u < a; u++) r.__setDigit(u, 0);
                        return r
                    }
                    static __absoluteAndNot(e, t, r = null) {
                        let n = e.length,
                            i = t.length,
                            s = i;
                        n < i && (s = n);
                        let a = n;
                        null === r ? r = new o(a, !1) : a = r.length;
                        let u = 0;
                        for (; u < s; u++) r.__setDigit(u, e.__digit(u) & ~t.__digit(u));
                        for (; u < n; u++) r.__setDigit(u, e.__digit(u));
                        for (; u < a; u++) r.__setDigit(u, 0);
                        return r
                    }
                    static __absoluteOr(e, t, r = null) {
                        let n = e.length,
                            i = t.length,
                            s = i;
                        if (n < i) {
                            s = n;
                            let r = e,
                                a = n;
                            e = t, n = i, t = r, i = a
                        }
                        let a = n;
                        null === r ? r = new o(a, !1) : a = r.length;
                        let u = 0;
                        for (; u < s; u++) r.__setDigit(u, e.__digit(u) | t.__digit(u));
                        for (; u < n; u++) r.__setDigit(u, e.__digit(u));
                        for (; u < a; u++) r.__setDigit(u, 0);
                        return r
                    }
                    static __absoluteXor(e, t, r = null) {
                        let n = e.length,
                            i = t.length,
                            s = i;
                        if (n < i) {
                            s = n;
                            let r = e,
                                a = n;
                            e = t, n = i, t = r, i = a
                        }
                        let a = n;
                        null === r ? r = new o(a, !1) : a = r.length;
                        let u = 0;
                        for (; u < s; u++) r.__setDigit(u, e.__digit(u) ^ t.__digit(u));
                        for (; u < n; u++) r.__setDigit(u, e.__digit(u));
                        for (; u < a; u++) r.__setDigit(u, 0);
                        return r
                    }
                    static __absoluteCompare(e, t) {
                        let r = e.length - t.length;
                        if (0 != r) return r;
                        let n = e.length - 1;
                        for (; 0 <= n && e.__digit(n) === t.__digit(n);) n--;
                        return 0 > n ? 0 : e.__unsignedDigit(n) > t.__unsignedDigit(n) ? 1 : -1
                    }
                    static __multiplyAccumulate(e, t, r, n) {
                        if (0 === t) return;
                        let i = 32767 & t,
                            s = t >>> 15,
                            a = 0,
                            u = 0;
                        for (let t, l = 0; l < e.length; l++, n++) {
                            t = r.__digit(n);
                            let c = e.__digit(l),
                                h = 32767 & c,
                                d = c >>> 15,
                                p = o.__imul(h, i),
                                f = o.__imul(h, s),
                                g = o.__imul(d, i),
                                m = o.__imul(d, s);
                            t += u + p + a, a = t >>> 30, t &= 1073741823, t += ((32767 & f) << 15) + ((32767 & g) << 15), a += t >>> 30, u = m + (f >>> 15) + (g >>> 15), r.__setDigit(n, 1073741823 & t)
                        }
                        for (; 0 != a || 0 !== u; n++) {
                            let e = r.__digit(n);
                            e += a + u, u = 0, a = e >>> 30, r.__setDigit(n, 1073741823 & e)
                        }
                    }
                    static __internalMultiplyAdd(e, t, r, n, i) {
                        let s = r,
                            a = 0;
                        for (let r = 0; r < n; r++) {
                            let n = e.__digit(r),
                                u = o.__imul(32767 & n, t),
                                l = o.__imul(n >>> 15, t),
                                c = u + ((32767 & l) << 15) + a + s;
                            s = c >>> 30, a = l >>> 15, i.__setDigit(r, 1073741823 & c)
                        }
                        if (i.length > n)
                            for (i.__setDigit(n++, s + a); n < i.length;) i.__setDigit(n++, 0);
                        else if (0 !== s + a) throw Error("implementation bug")
                    }
                    __inplaceMultiplyAdd(e, t, r) {
                        r > this.length && (r = this.length);
                        let n = 32767 & e,
                            i = e >>> 15,
                            s = 0,
                            a = t;
                        for (let e = 0; e < r; e++) {
                            let t = this.__digit(e),
                                r = 32767 & t,
                                u = t >>> 15,
                                l = o.__imul(r, n),
                                c = o.__imul(r, i),
                                h = o.__imul(u, n),
                                d = o.__imul(u, i),
                                p = a + l + s;
                            s = p >>> 30, p &= 1073741823, p += ((32767 & c) << 15) + ((32767 & h) << 15), s += p >>> 30, a = d + (c >>> 15) + (h >>> 15), this.__setDigit(e, 1073741823 & p)
                        }
                        if (0 != s || 0 !== a) throw Error("implementation bug")
                    }
                    static __absoluteDivSmall(e, t, r = null) {
                        null === r && (r = new o(e.length, !1));
                        let n = 0;
                        for (let i, s = 2 * e.length - 1; 0 <= s; s -= 2) {
                            i = (n << 15 | e.__halfDigit(s)) >>> 0;
                            let a = 0 | i / t;
                            i = ((n = 0 | i % t) << 15 | e.__halfDigit(s - 1)) >>> 0;
                            let u = 0 | i / t;
                            n = 0 | i % t, r.__setDigit(s >>> 1, a << 15 | u)
                        }
                        return r
                    }
                    static __absoluteModSmall(e, t) {
                        let r = 0;
                        for (let n = 2 * e.length - 1; 0 <= n; n--) {
                            let i = (r << 15 | e.__halfDigit(n)) >>> 0;
                            r = 0 | i % t
                        }
                        return r
                    }
                    static __absoluteDivLarge(e, t, r, n) {
                        let i = t.__halfDigitLength(),
                            s = t.length,
                            a = e.__halfDigitLength() - i,
                            u = null;
                        r && (u = new o(a + 2 >>> 1, !1)).__initializeDigits();
                        let l = new o(i + 2 >>> 1, !1);
                        l.__initializeDigits();
                        let c = o.__clz15(t.__halfDigit(i - 1));
                        0 < c && (t = o.__specialLeftShift(t, c, 0));
                        let h = o.__specialLeftShift(e, c, 1),
                            d = t.__halfDigit(i - 1),
                            p = 0;
                        for (let e, n = a; 0 <= n; n--) {
                            e = 32767;
                            let a = h.__halfDigit(n + i);
                            if (a !== d) {
                                let r = (a << 15 | h.__halfDigit(n + i - 1)) >>> 0;
                                e = 0 | r / d;
                                let s = 0 | r % d,
                                    u = t.__halfDigit(i - 2),
                                    l = h.__halfDigit(n + i - 2);
                                for (; o.__imul(e, u) >>> 0 > (s << 16 | l) >>> 0 && (e--, !(32767 < (s += d))););
                            }
                            o.__internalMultiplyAdd(t, e, 0, s, l);
                            let c = h.__inplaceSub(l, n, i + 1);
                            0 !== c && (c = h.__inplaceAdd(t, n, i), h.__setHalfDigit(n + i, 32767 & h.__halfDigit(n + i) + c), e--), r && (1 & n ? p = e << 15 : u.__setDigit(n >>> 1, p | e))
                        }
                        if (n) return h.__inplaceRightShift(c), r ? {
                            quotient: u,
                            remainder: h
                        } : h;
                        if (r) return u;
                        throw Error("unreachable")
                    }
                    static __clz15(e) {
                        return o.__clz30(e) - 15
                    }
                    __inplaceAdd(e, t, r) {
                        let n = 0;
                        for (let i = 0; i < r; i++) {
                            let r = this.__halfDigit(t + i) + e.__halfDigit(i) + n;
                            n = r >>> 15, this.__setHalfDigit(t + i, 32767 & r)
                        }
                        return n
                    }
                    __inplaceSub(e, t, r) {
                        let n = 0;
                        if (1 & t) {
                            t >>= 1;
                            let i = this.__digit(t),
                                s = 32767 & i,
                                a = 0;
                            for (; a < r - 1 >>> 1; a++) {
                                let r = e.__digit(a),
                                    u = (i >>> 15) - (32767 & r) - n;
                                n = 1 & u >>> 15, this.__setDigit(t + a, (32767 & u) << 15 | 32767 & s), n = 1 & (s = (32767 & (i = this.__digit(t + a + 1))) - (r >>> 15) - n) >>> 15
                            }
                            let u = e.__digit(a),
                                l = (i >>> 15) - (32767 & u) - n;
                            if (n = 1 & l >>> 15, this.__setDigit(t + a, (32767 & l) << 15 | 32767 & s), t + a + 1 >= this.length) throw RangeError("out of bounds");
                            0 == (1 & r) && (n = 1 & (s = (32767 & (i = this.__digit(t + a + 1))) - (u >>> 15) - n) >>> 15, this.__setDigit(t + e.length, 1073709056 & i | 32767 & s))
                        } else {
                            t >>= 1;
                            let i = 0;
                            for (; i < e.length - 1; i++) {
                                let r = this.__digit(t + i),
                                    s = e.__digit(i),
                                    a = (32767 & r) - (32767 & s) - n;
                                n = 1 & a >>> 15;
                                let u = (r >>> 15) - (s >>> 15) - n;
                                n = 1 & u >>> 15, this.__setDigit(t + i, (32767 & u) << 15 | 32767 & a)
                            }
                            let s = this.__digit(t + i),
                                a = e.__digit(i),
                                u = (32767 & s) - (32767 & a) - n;
                            n = 1 & u >>> 15;
                            let l = 0;
                            0 == (1 & r) && (n = 1 & (l = (s >>> 15) - (a >>> 15) - n) >>> 15), this.__setDigit(t + i, (32767 & l) << 15 | 32767 & u)
                        }
                        return n
                    }
                    __inplaceRightShift(e) {
                        if (0 === e) return;
                        let t = this.__digit(0) >>> e,
                            r = this.length - 1;
                        for (let n = 0; n < r; n++) {
                            let r = this.__digit(n + 1);
                            this.__setDigit(n, 1073741823 & r << 30 - e | t), t = r >>> e
                        }
                        this.__setDigit(r, t)
                    }
                    static __specialLeftShift(e, t, r) {
                        let n = e.length,
                            i = new o(n + r, !1);
                        if (0 === t) {
                            for (let t = 0; t < n; t++) i.__setDigit(t, e.__digit(t));
                            return 0 < r && i.__setDigit(n, 0), i
                        }
                        let s = 0;
                        for (let r = 0; r < n; r++) {
                            let n = e.__digit(r);
                            i.__setDigit(r, 1073741823 & n << t | s), s = n >>> 30 - t
                        }
                        return 0 < r && i.__setDigit(n, s), i
                    }
                    static __leftShiftByAbsolute(e, t) {
                        let r = o.__toShiftAmount(t);
                        if (0 > r) throw RangeError("BigInt too big");
                        let n = 0 | r / 30,
                            i = r % 30,
                            s = e.length,
                            a = 0 !== i && 0 != e.__digit(s - 1) >>> 30 - i,
                            u = s + n + (a ? 1 : 0),
                            l = new o(u, e.sign);
                        if (0 === i) {
                            let t = 0;
                            for (; t < n; t++) l.__setDigit(t, 0);
                            for (; t < u; t++) l.__setDigit(t, e.__digit(t - n))
                        } else {
                            let t = 0;
                            for (let e = 0; e < n; e++) l.__setDigit(e, 0);
                            for (let r = 0; r < s; r++) {
                                let s = e.__digit(r);
                                l.__setDigit(r + n, 1073741823 & s << i | t), t = s >>> 30 - i
                            }
                            if (a) l.__setDigit(s + n, t);
                            else if (0 !== t) throw Error("implementation bug")
                        }
                        return l.__trim()
                    }
                    static __rightShiftByAbsolute(e, t) {
                        let r = e.length,
                            n = e.sign,
                            i = o.__toShiftAmount(t);
                        if (0 > i) return o.__rightShiftByMaximum(n);
                        let s = 0 | i / 30,
                            a = i % 30,
                            u = r - s;
                        if (0 >= u) return o.__rightShiftByMaximum(n);
                        let l = !1;
                        if (n) {
                            if (0 != (e.__digit(s) & (1 << a) - 1)) l = !0;
                            else
                                for (let t = 0; t < s; t++)
                                    if (0 !== e.__digit(t)) {
                                        l = !0;
                                        break
                                    }
                        }
                        if (l && 0 === a) {
                            let t = e.__digit(r - 1);
                            0 == ~t && u++
                        }
                        let c = new o(u, n);
                        if (0 === a) {
                            c.__setDigit(u - 1, 0);
                            for (let t = s; t < r; t++) c.__setDigit(t - s, e.__digit(t))
                        } else {
                            let t = e.__digit(s) >>> a,
                                n = r - s - 1;
                            for (let r = 0; r < n; r++) {
                                let n = e.__digit(r + s + 1);
                                c.__setDigit(r, 1073741823 & n << 30 - a | t), t = n >>> a
                            }
                            c.__setDigit(n, t)
                        }
                        return l && (c = o.__absoluteAddOne(c, !0, c)), c.__trim()
                    }
                    static __rightShiftByMaximum(e) {
                        return e ? o.__oneDigit(1, !0) : o.__zero()
                    }
                    static __toShiftAmount(e) {
                        if (1 < e.length) return -1;
                        let t = e.__unsignedDigit(0);
                        return t > o.__kMaxLengthBits ? -1 : t
                    }
                    static __toPrimitive(e, t = "default") {
                        if ("object" != typeof e || e.constructor === o) return e;
                        if ("undefined" != typeof Symbol && "symbol" == typeof Symbol.toPrimitive) {
                            let r = e[Symbol.toPrimitive];
                            if (r) {
                                let e = r(t);
                                if ("object" != typeof e) return e;
                                throw TypeError("Cannot convert object to primitive value")
                            }
                        }
                        let r = e.valueOf;
                        if (r) {
                            let t = r.call(e);
                            if ("object" != typeof t) return t
                        }
                        let n = e.toString;
                        if (n) {
                            let t = n.call(e);
                            if ("object" != typeof t) return t
                        }
                        throw TypeError("Cannot convert object to primitive value")
                    }
                    static __toNumeric(e) {
                        return o.__isBigInt(e) ? e : +e
                    }
                    static __isBigInt(e) {
                        return "object" == typeof e && null !== e && e.constructor === o
                    }
                    static __truncateToNBits(e, t) {
                        let r = 0 | (e + 29) / 30,
                            n = new o(r, t.sign),
                            i = r - 1;
                        for (let e = 0; e < i; e++) n.__setDigit(e, t.__digit(e));
                        let s = t.__digit(i);
                        if (0 != e % 30) {
                            let t = 32 - e % 30;
                            s = s << t >>> t
                        }
                        return n.__setDigit(i, s), n.__trim()
                    }
                    static __truncateAndSubFromPowerOfTwo(e, t, r) {
                        let n;
                        let i = 0 | (e + 29) / 30,
                            s = new o(i, r),
                            a = 0,
                            u = i - 1,
                            l = 0;
                        for (let e = (0, Math.min)(u, t.length); a < e; a++) {
                            let e = 0 - t.__digit(a) - l;
                            l = 1 & e >>> 30, s.__setDigit(a, 1073741823 & e)
                        }
                        for (; a < u; a++) s.__setDigit(a, 0 | 1073741823 & -l);
                        let c = u < t.length ? t.__digit(u) : 0,
                            h = e % 30;
                        if (0 == h) n = 0 - c - l & 1073741823;
                        else {
                            let e = 32 - h;
                            c = c << e >>> e;
                            let t = 1 << 32 - e;
                            n = t - c - l & t - 1
                        }
                        return s.__setDigit(u, n), s.__trim()
                    }
                    __digit(e) {
                        return this[e]
                    }
                    __unsignedDigit(e) {
                        return this[e] >>> 0
                    }
                    __setDigit(e, t) {
                        this[e] = 0 | t
                    }
                    __setDigitGrow(e, t) {
                        this[e] = 0 | t
                    }
                    __halfDigitLength() {
                        let e = this.length;
                        return 32767 >= this.__unsignedDigit(e - 1) ? 2 * e - 1 : 2 * e
                    }
                    __halfDigit(e) {
                        return 32767 & this[e >>> 1] >>> 15 * (1 & e)
                    }
                    __setHalfDigit(e, t) {
                        let r = e >>> 1,
                            n = this.__digit(r);
                        this.__setDigit(r, 1 & e ? 32767 & n | t << 15 : 1073709056 & n | 32767 & t)
                    }
                    static __digitPow(e, t) {
                        let r = 1;
                        for (; 0 < t;) 1 & t && (r *= e), t >>>= 1, e *= e;
                        return r
                    }
                    static __isOneDigitInt(e) {
                        return (1073741823 & e) === e
                    }
                };
                return o.__kMaxLength = 33554432, o.__kMaxLengthBits = o.__kMaxLength << 5, o.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166], o.__kBitsPerCharTableShift = 5, o.__kBitsPerCharTableMultiplier = 1 << o.__kBitsPerCharTableShift, o.__kConversionChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], o.__kBitConversionBuffer = new ArrayBuffer(8), o.__kBitConversionDouble = new Float64Array(o.__kBitConversionBuffer), o.__kBitConversionInts = new Int32Array(o.__kBitConversionBuffer), o.__clz30 = e ? function(t) {
                    return e(t) - 2
                } : function(e) {
                    return 0 === e ? 30 : 0 | 29 - (0 | (0, Math.log)(e >>> 0) / Math.LN2)
                }, o.__imul = Math.imul || function(e, t) {
                    return 0 | e * t
                }, o
            }()
        },
        32402: function(e) {
            e.exports && (e.exports = function(e) {
                return e.prototype.toFormat = function(e, t, r) {
                    if (!this.e && 0 !== this.e) return this.toString();
                    var n, i, s, a, u, l, c, h, d, p, f, g, m, _, y, v = this.format || {},
                        b = this.constructor.format || {};
                    if (e != u ? "object" == typeof e ? (r = e, e = u) : t != u ? "object" == typeof t ? (r = t, t = u) : "object" != typeof r && (r = {}) : r = {} : r = {}, h = (n = this.toFixed(e, t).split("."))[0], d = n[1], l = (c = this.s < 0 ? h.slice(1) : h).length, (p = r.decimalSeparator) == u && (p = v.decimalSeparator) == u && (p = b.decimalSeparator) == u && (p = "."), (f = r.groupSeparator) == u && (f = v.groupSeparator) == u && (f = b.groupSeparator), f && ((g = r.groupSize) == u && (g = v.groupSize) == u && (g = b.groupSize) == u && (g = 0), (m = r.secondaryGroupSize) == u && (m = v.secondaryGroupSize) == u && (m = b.secondaryGroupSize) == u && (m = 0), m ? (i = +m, l -= s = +g) : (i = +g, s = +m), i > 0 && l > 0)) {
                        for (a = l % i || i, h = c.substr(0, a); a < l; a += i) h += f + c.substr(a, i);
                        s > 0 && (h += f + c.slice(a)), this.s < 0 && (h = "-" + h)
                    }
                    return d ? ((_ = r.fractionGroupSeparator) == u && (_ = v.fractionGroupSeparator) == u && (_ = b.fractionGroupSeparator), _ && ((y = r.fractionGroupSize) == u && (y = v.fractionGroupSize) == u && (y = b.fractionGroupSize) == u && (y = 0), (y = +y) && (d = d.replace(RegExp("\\d{" + y + "}\\B", "g"), "$&" + _))), h + p + d) : h
                }, e.format = {
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: "",
                    fractionGroupSize: 0
                }, e
            })
        }
    }
]);