"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9637], {
        89637: function(e, t, r) {
            r.r(t), r.d(t, {
                AlchemyProvider: function() {
                    return AlchemyProvider
                }
            });
            var i = r(76751),
                s = r(30795),
                n = r(67488),
                o = r(39318);
            r(56016);
            let RequestBatcher = class RequestBatcher {
                constructor(e, t = 100) {
                    this.sendBatchFn = e, this.maxBatchSize = t, this.pendingBatch = []
                }
                enqueueRequest(e) {
                    return (0, i._)(this, void 0, void 0, function*() {
                        let t = {
                                request: e,
                                resolve: void 0,
                                reject: void 0
                            },
                            r = new Promise((e, r) => {
                                t.resolve = e, t.reject = r
                            });
                        return this.pendingBatch.push(t), this.pendingBatch.length === this.maxBatchSize ? this.sendBatchRequest() : this.pendingBatchTimer || (this.pendingBatchTimer = setTimeout(() => this.sendBatchRequest(), 10)), r
                    })
                }
                sendBatchRequest() {
                    return (0, i._)(this, void 0, void 0, function*() {
                        let e = this.pendingBatch;
                        this.pendingBatch = [], this.pendingBatchTimer && (clearTimeout(this.pendingBatchTimer), this.pendingBatchTimer = void 0);
                        let t = e.map(e => e.request);
                        return this.sendBatchFn(t).then(t => {
                            e.forEach((e, r) => {
                                let i = t[r];
                                if (i.error) {
                                    let t = Error(i.error.message);
                                    t.code = i.error.code, t.data = i.error.data, e.reject(t)
                                } else e.resolve(i.result)
                            })
                        }, t => {
                            e.forEach(e => {
                                e.reject(t)
                            })
                        })
                    })
                }
            };
            let AlchemyProvider = class AlchemyProvider extends n.r {
                constructor(e) {
                    let t = AlchemyProvider.getApiKey(e.apiKey),
                        r = AlchemyProvider.getAlchemyNetwork(e.network),
                        s = AlchemyProvider.getAlchemyConnectionInfo(r, t, "http");
                    void 0 !== e.url && (s.url = e.url), s.throttleLimit = e.maxRetries;
                    let n = i.E[r];
                    super(s, n), this.apiKey = e.apiKey, this.maxRetries = e.maxRetries, this.batchRequests = e.batchRequests;
                    let h = Object.assign(Object.assign({}, this.connection), {
                        headers: Object.assign(Object.assign({}, this.connection.headers), {
                            "Alchemy-Ethers-Sdk-Method": "batchSend"
                        })
                    });
                    this.batcher = new RequestBatcher(e => (0, o.rd)(h, JSON.stringify(e))), this.modifyFormatter()
                }
                static getApiKey(e) {
                    if (null == e) return i.D;
                    if (e && "string" != typeof e) throw Error(`Invalid apiKey '${e}' provided. apiKey must be a string.`);
                    return e
                }
                static getNetwork(e) {
                    return "string" == typeof e && e in i.C ? i.C[e] : (0, s.H)(e)
                }
                static getAlchemyNetwork(e) {
                    if (void 0 === e) return i.a;
                    if ("number" == typeof e) throw Error(`Invalid network '${e}' provided. Network must be a string.`);
                    let t = Object.values(i.N).includes(e);
                    if (!t) throw Error(`Invalid network '${e}' provided. Network must be one of: ${Object.values(i.N).join(", ")}.`);
                    return e
                }
                static getAlchemyConnectionInfo(e, t, r) {
                    let s = "http" === r ? (0, i.g)(e, t) : (0, i.b)(e, t);
                    return {
                        headers: i.I ? {
                            "Alchemy-Ethers-Sdk-Version": i.V
                        } : {
                            "Alchemy-Ethers-Sdk-Version": i.V,
                            "Accept-Encoding": "gzip"
                        },
                        allowGzip: !0,
                        url: s
                    }
                }
                detectNetwork() {
                    let e = Object.create(null, {
                        detectNetwork: {
                            get: () => super.detectNetwork
                        }
                    });
                    return (0, i._)(this, void 0, void 0, function*() {
                        let t = this.network;
                        if (null == t && !(t = yield e.detectNetwork.call(this))) throw Error("No network detected");
                        return t
                    })
                }
                _startPending() {
                    (0, i.l)("WARNING: Alchemy Provider does not support pending filters")
                }
                isCommunityResource() {
                    return this.apiKey === i.D
                }
                send(e, t) {
                    return this._send(e, t, "send")
                }
                _send(e, t, r, s = !1) {
                    let n = {
                            method: e,
                            params: t,
                            id: this._nextId++,
                            jsonrpc: "2.0"
                        },
                        h = Object.assign({}, this.connection);
                    if (h.headers["Alchemy-Ethers-Sdk-Method"] = r, this.batchRequests || s) return this.batcher.enqueueRequest(n);
                    this.emit("debug", {
                        action: "request",
                        request: (0, i.d)(n),
                        provider: this
                    });
                    let c = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
                    if (c && this._cache[e]) return this._cache[e];
                    let d = (0, o.rd)(this.connection, JSON.stringify(n), getResult).then(e => (this.emit("debug", {
                        action: "response",
                        request: n,
                        response: e,
                        provider: this
                    }), e), e => {
                        throw this.emit("debug", {
                            action: "response",
                            error: e,
                            request: n,
                            provider: this
                        }), e
                    });
                    return c && (this._cache[e] = d, setTimeout(() => {
                        this._cache[e] = null
                    }, 0)), d
                }
                modifyFormatter() {
                    this.formatter.formats.receiptLog.removed = e => {
                        if ("boolean" == typeof e) return e
                    }
                }
            };

            function getResult(e) {
                if (e.error) {
                    let t = Error(e.error.message);
                    throw t.code = e.error.code, t.data = e.error.data, t
                }
                return e.result
            }
        }
    }
]);