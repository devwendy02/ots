(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7488], {
        94999: function(e, t, r) {
            "use strict";
            r.d(t, {
                Sg: function() {
                    return ForkEvent
                },
                zt: function() {
                    return Provider
                }
            });
            var n = r(92598),
                i = r(17213),
                o = r(36288);
            let s = new o.Yd("abstract-provider/5.7.0");
            let ForkEvent = class ForkEvent extends i.dk {
                static isForkEvent(e) {
                    return !!(e && e._isForkEvent)
                }
            };
            let Provider = class Provider {
                constructor() {
                    s.checkAbstract(new.target, Provider), (0, i.zG)(this, "_isProvider", !0)
                }
                getFeeData() {
                    var e, t, r, o;
                    return e = this, t = void 0, r = void 0, o = function*() {
                        let {
                            block: e,
                            gasPrice: t
                        } = yield(0, i.mE)({
                            block: this.getBlock("latest"),
                            gasPrice: this.getGasPrice().catch(e => null)
                        }), r = null, o = null, s = null;
                        return e && e.baseFeePerGas && (r = e.baseFeePerGas, s = n.O$.from("1500000000"), o = e.baseFeePerGas.mul(2).add(s)), {
                            lastBaseFeePerGas: r,
                            maxFeePerGas: o,
                            maxPriorityFeePerGas: s,
                            gasPrice: t
                        }
                    }, new(r || (r = Promise))(function(n, i) {
                        function fulfilled(e) {
                            try {
                                step(o.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(o.throw(e))
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
                        step((o = o.apply(e, t || [])).next())
                    })
                }
                addListener(e, t) {
                    return this.on(e, t)
                }
                removeListener(e, t) {
                    return this.off(e, t)
                }
                static isProvider(e) {
                    return !!(e && e._isProvider)
                }
            }
        },
        14941: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return Signer
                },
                b: function() {
                    return VoidSigner
                }
            });
            var n = r(17213),
                i = r(36288),
                __awaiter = function(e, t, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function fulfilled(e) {
                            try {
                                step(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(n.throw(e))
                            } catch (e) {
                                o(e)
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
            let o = new i.Yd("abstract-signer/5.7.0"),
                s = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                a = [i.Yd.errors.INSUFFICIENT_FUNDS, i.Yd.errors.NONCE_EXPIRED, i.Yd.errors.REPLACEMENT_UNDERPRICED];
            let Signer = class Signer {
                constructor() {
                    o.checkAbstract(new.target, Signer), (0, n.zG)(this, "_isSigner", !0)
                }
                getBalance(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e)
                    })
                }
                getTransactionCount(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e)
                    })
                }
                estimateGas(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        this._checkProvider("estimateGas");
                        let t = yield(0, n.mE)(this.checkTransaction(e));
                        return yield this.provider.estimateGas(t)
                    })
                }
                call(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        this._checkProvider("call");
                        let r = yield(0, n.mE)(this.checkTransaction(e));
                        return yield this.provider.call(r, t)
                    })
                }
                sendTransaction(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        this._checkProvider("sendTransaction");
                        let t = yield this.populateTransaction(e), r = yield this.signTransaction(t);
                        return yield this.provider.sendTransaction(r)
                    })
                }
                getChainId() {
                    return __awaiter(this, void 0, void 0, function*() {
                        this._checkProvider("getChainId");
                        let e = yield this.provider.getNetwork();
                        return e.chainId
                    })
                }
                getGasPrice() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                    })
                }
                getFeeData() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                    })
                }
                resolveName(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(e)
                    })
                }
                checkTransaction(e) {
                    for (let t in e) - 1 === s.indexOf(t) && o.throwArgumentError("invalid transaction key: " + t, "transaction", e);
                    let t = (0, n.DC)(e);
                    return null == t.from ? t.from = this.getAddress() : t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then(t => (t[0].toLowerCase() !== t[1].toLowerCase() && o.throwArgumentError("from address mismatch", "transaction", e), t[0])), t
                }
                populateTransaction(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = yield(0, n.mE)(this.checkTransaction(e));
                        null != t.to && (t.to = Promise.resolve(t.to).then(e => __awaiter(this, void 0, void 0, function*() {
                            if (null == e) return null;
                            let t = yield this.resolveName(e);
                            return null == t && o.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
                        })), t.to.catch(e => {}));
                        let r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
                        if (null != t.gasPrice && (2 === t.type || r) ? o.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e) : (0 === t.type || 1 === t.type) && r && o.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e), (2 === t.type || null == t.type) && null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) t.type = 2;
                        else if (0 === t.type || 1 === t.type) null == t.gasPrice && (t.gasPrice = this.getGasPrice());
                        else {
                            let e = yield this.getFeeData();
                            if (null == t.type) {
                                if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas) {
                                    if (t.type = 2, null != t.gasPrice) {
                                        let e = t.gasPrice;
                                        delete t.gasPrice, t.maxFeePerGas = e, t.maxPriorityFeePerGas = e
                                    } else null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas)
                                } else null != e.gasPrice ? (r && o.throwError("network does not support EIP-1559", i.Yd.errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }), null == t.gasPrice && (t.gasPrice = e.gasPrice), t.type = 0) : o.throwError("failed to get consistent fee data", i.Yd.errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                })
                            } else 2 === t.type && (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas))
                        }
                        return null == t.nonce && (t.nonce = this.getTransactionCount("pending")), null == t.gasLimit && (t.gasLimit = this.estimateGas(t).catch(e => {
                            if (a.indexOf(e.code) >= 0) throw e;
                            return o.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                                error: e,
                                tx: t
                            })
                        })), null == t.chainId ? t.chainId = this.getChainId() : t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then(t => (0 !== t[1] && t[0] !== t[1] && o.throwArgumentError("chainId address mismatch", "transaction", e), t[0])), yield(0, n.mE)(t)
                    })
                }
                _checkProvider(e) {
                    this.provider || o.throwError("missing provider", i.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: e || "_checkProvider"
                    })
                }
                static isSigner(e) {
                    return !!(e && e._isSigner)
                }
            };
            let VoidSigner = class VoidSigner extends Signer {
                constructor(e, t) {
                    super(), (0, n.zG)(this, "address", e), (0, n.zG)(this, "provider", t || null)
                }
                getAddress() {
                    return Promise.resolve(this.address)
                }
                _fail(e, t) {
                    return Promise.resolve().then(() => {
                        o.throwError(e, i.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: t
                        })
                    })
                }
                signMessage(e) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage")
                }
                signTransaction(e) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction")
                }
                _signTypedData(e, t, r) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData")
                }
                connect(e) {
                    return new VoidSigner(this.address, e)
                }
            }
        },
        18994: function(e, t, r) {
            "use strict";
            r.d(t, {
                Kn: function() {
                    return getAddress
                },
                CR: function() {
                    return getContractAddress
                },
                hB: function() {
                    return getCreate2Address
                }
            });
            var n = r(57273),
                i = r(92598),
                o = r(14184),
                s = r(7054),
                a = r(36288);
            let l = new a.Yd("address/5.7.0");

            function getChecksumAddress(e) {
                (0, n.A7)(e, 20) || l.throwArgumentError("invalid address", "address", e), e = e.toLowerCase();
                let t = e.substring(2).split(""),
                    r = new Uint8Array(40);
                for (let e = 0; e < 40; e++) r[e] = t[e].charCodeAt(0);
                let i = (0, n.lE)((0, o.w)(r));
                for (let e = 0; e < 40; e += 2) i[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()), (15 & i[e >> 1]) >= 8 && (t[e + 1] = t[e + 1].toUpperCase());
                return "0x" + t.join("")
            }
            let u = {};
            for (let e = 0; e < 10; e++) u[String(e)] = String(e);
            for (let e = 0; e < 26; e++) u[String.fromCharCode(65 + e)] = String(10 + e);
            let c = Math.floor(Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10);

            function getAddress(e) {
                let t = null;
                if ("string" != typeof e && l.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = getChecksumAddress(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && l.throwArgumentError("bad address checksum", "address", e);
                else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (e.substring(2, 4) !== function(e) {
                            let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => u[e]).join("");
                            for (; t.length >= c;) {
                                let e = t.substring(0, c);
                                t = parseInt(e, 10) % 97 + t.substring(e.length)
                            }
                            let r = String(98 - parseInt(t, 10) % 97);
                            for (; r.length < 2;) r = "0" + r;
                            return r
                        }(e) && l.throwArgumentError("bad icap checksum", "address", e), t = (0, i.g$)(e.substring(4)); t.length < 40;) t = "0" + t;
                    t = getChecksumAddress("0x" + t)
                } else l.throwArgumentError("invalid address", "address", e);
                return t
            }

            function getContractAddress(e) {
                let t = null;
                try {
                    t = getAddress(e.from)
                } catch (t) {
                    l.throwArgumentError("missing from address", "transaction", e)
                }
                let r = (0, n.G1)((0, n.lE)(i.O$.from(e.nonce).toHexString()));
                return getAddress((0, n.p3)((0, o.w)((0, s.c)([t, r])), 12))
            }

            function getCreate2Address(e, t, r) {
                return 32 !== (0, n.E1)(t) && l.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== (0, n.E1)(r) && l.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), getAddress((0, n.p3)((0, o.w)((0, n.zo)(["0xff", getAddress(e), t, r])), 12))
            }
        },
        72275: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return decode
                },
                c: function() {
                    return encode
                }
            });
            var n = r(57273);

            function decode(e) {
                e = atob(e);
                let t = [];
                for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
                return (0, n.lE)(t)
            }

            function encode(e) {
                e = (0, n.lE)(e);
                let t = "";
                for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                return btoa(t)
            }
        },
        53690: function(e, t, r) {
            "use strict";
            r.d(t, {
                Bz: function() {
                    return a
                },
                _Y: function() {
                    return o
                },
                fh: function() {
                    return s
                },
                tL: function() {
                    return i
                }
            });
            var n = r(92598);
            let i = n.O$.from(-1),
                o = n.O$.from(0),
                s = n.O$.from(1),
                a = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        },
        10996: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return n
                }
            });
            let n = "hash/5.7.0"
        },
        36339: function(e, t, r) {
            "use strict";
            r.d(t, {
                id: function() {
                    return id
                }
            });
            var n = r(14184),
                i = r(58337);

            function id(e) {
                return (0, n.w)((0, i.Y0)(e))
            }
        },
        14184: function(e, t, r) {
            "use strict";
            r.d(t, {
                w: function() {
                    return keccak256
                }
            });
            var n = r(26398),
                i = r.n(n),
                o = r(57273);

            function keccak256(e) {
                return "0x" + i().keccak_256((0, o.lE)(e))
            }
        },
        30795: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return getNetwork
                }
            });
            var n = r(36288);
            let i = new n.Yd("networks/5.7.1");

            function ethDefaultProvider(e) {
                let func = function(t, r) {
                    null == r && (r = {});
                    let n = [];
                    if (t.InfuraProvider && "-" !== r.infura) try {
                        n.push(new t.InfuraProvider(e, r.infura))
                    } catch (e) {}
                    if (t.EtherscanProvider && "-" !== r.etherscan) try {
                        n.push(new t.EtherscanProvider(e, r.etherscan))
                    } catch (e) {}
                    if (t.AlchemyProvider && "-" !== r.alchemy) try {
                        n.push(new t.AlchemyProvider(e, r.alchemy))
                    } catch (e) {}
                    if (t.PocketProvider && "-" !== r.pocket) try {
                        let i = new t.PocketProvider(e, r.pocket);
                        i.network && -1 === ["goerli", "ropsten", "rinkeby", "sepolia"].indexOf(i.network.name) && n.push(i)
                    } catch (e) {}
                    if (t.CloudflareProvider && "-" !== r.cloudflare) try {
                        n.push(new t.CloudflareProvider(e))
                    } catch (e) {}
                    if (t.AnkrProvider && "-" !== r.ankr) try {
                        let i = new t.AnkrProvider(e, r.ankr);
                        i.network && -1 === ["ropsten"].indexOf(i.network.name) && n.push(i)
                    } catch (e) {}
                    if (0 === n.length) return null;
                    if (t.FallbackProvider) {
                        let i = 1;
                        return null != r.quorum ? i = r.quorum : "homestead" === e && (i = 2), new t.FallbackProvider(n, i)
                    }
                    return n[0]
                };
                return func.renetwork = function(e) {
                    return ethDefaultProvider(e)
                }, func
            }

            function etcDefaultProvider(e, t) {
                let func = function(r, n) {
                    return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null
                };
                return func.renetwork = function(t) {
                    return etcDefaultProvider(e, t)
                }, func
            }
            let o = {
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead",
                    _defaultProvider: ethDefaultProvider("homestead")
                },
                s = {
                    chainId: 3,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "ropsten",
                    _defaultProvider: ethDefaultProvider("ropsten")
                },
                a = {
                    chainId: 63,
                    name: "classicMordor",
                    _defaultProvider: etcDefaultProvider("https://www.ethercluster.com/mordor", "classicMordor")
                },
                l = {
                    unspecified: {
                        chainId: 0,
                        name: "unspecified"
                    },
                    homestead: o,
                    mainnet: o,
                    morden: {
                        chainId: 2,
                        name: "morden"
                    },
                    ropsten: s,
                    testnet: s,
                    rinkeby: {
                        chainId: 4,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "rinkeby",
                        _defaultProvider: ethDefaultProvider("rinkeby")
                    },
                    kovan: {
                        chainId: 42,
                        name: "kovan",
                        _defaultProvider: ethDefaultProvider("kovan")
                    },
                    goerli: {
                        chainId: 5,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "goerli",
                        _defaultProvider: ethDefaultProvider("goerli")
                    },
                    kintsugi: {
                        chainId: 1337702,
                        name: "kintsugi"
                    },
                    sepolia: {
                        chainId: 11155111,
                        name: "sepolia",
                        _defaultProvider: ethDefaultProvider("sepolia")
                    },
                    classic: {
                        chainId: 61,
                        name: "classic",
                        _defaultProvider: etcDefaultProvider("https://www.ethercluster.com/etc", "classic")
                    },
                    classicMorden: {
                        chainId: 62,
                        name: "classicMorden"
                    },
                    classicMordor: a,
                    classicTestnet: a,
                    classicKotti: {
                        chainId: 6,
                        name: "classicKotti",
                        _defaultProvider: etcDefaultProvider("https://www.ethercluster.com/kotti", "classicKotti")
                    },
                    xdai: {
                        chainId: 100,
                        name: "xdai"
                    },
                    matic: {
                        chainId: 137,
                        name: "matic",
                        _defaultProvider: ethDefaultProvider("matic")
                    },
                    maticmum: {
                        chainId: 80001,
                        name: "maticmum"
                    },
                    optimism: {
                        chainId: 10,
                        name: "optimism",
                        _defaultProvider: ethDefaultProvider("optimism")
                    },
                    "optimism-kovan": {
                        chainId: 69,
                        name: "optimism-kovan"
                    },
                    "optimism-goerli": {
                        chainId: 420,
                        name: "optimism-goerli"
                    },
                    arbitrum: {
                        chainId: 42161,
                        name: "arbitrum"
                    },
                    "arbitrum-rinkeby": {
                        chainId: 421611,
                        name: "arbitrum-rinkeby"
                    },
                    "arbitrum-goerli": {
                        chainId: 421613,
                        name: "arbitrum-goerli"
                    },
                    bnb: {
                        chainId: 56,
                        name: "bnb"
                    },
                    bnbt: {
                        chainId: 97,
                        name: "bnbt"
                    }
                };

            function getNetwork(e) {
                if (null == e) return null;
                if ("number" == typeof e) {
                    for (let t in l) {
                        let r = l[t];
                        if (r.chainId === e) return {
                            name: r.name,
                            chainId: r.chainId,
                            ensAddress: r.ensAddress || null,
                            _defaultProvider: r._defaultProvider || null
                        }
                    }
                    return {
                        chainId: e,
                        name: "unknown"
                    }
                }
                if ("string" == typeof e) {
                    let t = l[e];
                    return null == t ? null : {
                        name: t.name,
                        chainId: t.chainId,
                        ensAddress: t.ensAddress,
                        _defaultProvider: t._defaultProvider || null
                    }
                }
                let t = l[e.name];
                if (!t) return "number" != typeof e.chainId && i.throwArgumentError("invalid network chainId", "network", e), e;
                0 !== e.chainId && e.chainId !== t.chainId && i.throwArgumentError("network chainId mismatch", "network", e);
                let r = e._defaultProvider || null;
                if (null == r && t._defaultProvider) {
                    var n;
                    r = (n = t._defaultProvider) && "function" == typeof n.renetwork ? t._defaultProvider.renetwork(e) : t._defaultProvider
                }
                return {
                    name: e.name,
                    chainId: t.chainId,
                    ensAddress: e.ensAddress || t.ensAddress || null,
                    _defaultProvider: r
                }
            }
        },
        17213: function(e, t, r) {
            "use strict";
            r.d(t, {
                dk: function() {
                    return Description
                },
                uj: function() {
                    return checkProperties
                },
                p$: function() {
                    return deepCopy
                },
                zG: function() {
                    return defineReadOnly
                },
                tu: function() {
                    return getStatic
                },
                mE: function() {
                    return resolveProperties
                },
                DC: function() {
                    return shallowCopy
                }
            });
            var n = r(36288);
            let i = new n.Yd("properties/5.7.0");

            function defineReadOnly(e, t, r) {
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }

            function getStatic(e, t) {
                for (let r = 0; r < 32; r++) {
                    if (e[t]) return e[t];
                    if (!e.prototype || "object" != typeof e.prototype) break;
                    e = Object.getPrototypeOf(e.prototype).constructor
                }
                return null
            }

            function resolveProperties(e) {
                var t, r, n, i;
                return t = this, r = void 0, n = void 0, i = function*() {
                    let t = Object.keys(e).map(t => {
                            let r = e[t];
                            return Promise.resolve(r).then(e => ({
                                key: t,
                                value: e
                            }))
                        }),
                        r = yield Promise.all(t);
                    return r.reduce((e, t) => (e[t.key] = t.value, e), {})
                }, new(n || (n = Promise))(function(e, o) {
                    function fulfilled(e) {
                        try {
                            step(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function step(t) {
                        var r;
                        t.done ? e(t.value) : ((r = t.value) instanceof n ? r : new n(function(e) {
                            e(r)
                        })).then(fulfilled, rejected)
                    }
                    step((i = i.apply(t, r || [])).next())
                })
            }

            function checkProperties(e, t) {
                e && "object" == typeof e || i.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach(r => {
                    t[r] || i.throwArgumentError("invalid object key - " + r, "transaction:" + r, e)
                })
            }

            function shallowCopy(e) {
                let t = {};
                for (let r in e) t[r] = e[r];
                return t
            }
            let o = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function deepCopy(e) {
                return function(e) {
                    if (function _isFrozen(e) {
                            if (null == e || o[typeof e]) return !0;
                            if (Array.isArray(e) || "object" == typeof e) {
                                if (!Object.isFrozen(e)) return !1;
                                let t = Object.keys(e);
                                for (let r = 0; r < t.length; r++) {
                                    let n = null;
                                    try {
                                        n = e[t[r]]
                                    } catch (e) {
                                        continue
                                    }
                                    if (!_isFrozen(n)) return !1
                                }
                                return !0
                            }
                            return i.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
                        }(e)) return e;
                    if (Array.isArray(e)) return Object.freeze(e.map(e => deepCopy(e)));
                    if ("object" == typeof e) {
                        let t = {};
                        for (let r in e) {
                            let n = e[r];
                            void 0 !== n && defineReadOnly(t, r, deepCopy(n))
                        }
                        return t
                    }
                    return i.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
                }(e)
            }
            let Description = class Description {
                constructor(e) {
                    for (let t in e) this[t] = deepCopy(e[t])
                }
            }
        },
        12312: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return n
                }
            });
            let n = "providers/5.7.2"
        },
        60366: function(e, t, r) {
            "use strict";
            let n, i;
            r.d(t, {
                Zk: function() {
                    return BaseProvider
                }
            });
            var o, s = r(94999),
                a = r(72275),
                l = r(57273),
                u = r(17213);
            let BaseX = class BaseX {
                constructor(e) {
                    (0, u.zG)(this, "alphabet", e), (0, u.zG)(this, "base", e.length), (0, u.zG)(this, "_alphabetMap", {}), (0, u.zG)(this, "_leader", e.charAt(0));
                    for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t
                }
                encode(e) {
                    let t = (0, l.lE)(e);
                    if (0 === t.length) return "";
                    let r = [0];
                    for (let e = 0; e < t.length; ++e) {
                        let n = t[e];
                        for (let e = 0; e < r.length; ++e) n += r[e] << 8, r[e] = n % this.base, n = n / this.base | 0;
                        for (; n > 0;) r.push(n % this.base), n = n / this.base | 0
                    }
                    let n = "";
                    for (let e = 0; 0 === t[e] && e < t.length - 1; ++e) n += this._leader;
                    for (let e = r.length - 1; e >= 0; --e) n += this.alphabet[r[e]];
                    return n
                }
                decode(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    let t = [];
                    if (0 === e.length) return new Uint8Array(t);
                    t.push(0);
                    for (let r = 0; r < e.length; r++) {
                        let n = this._alphabetMap[e[r]];
                        if (void 0 === n) throw Error("Non-base" + this.base + " character");
                        let i = n;
                        for (let e = 0; e < t.length; ++e) i += t[e] * this.base, t[e] = 255 & i, i >>= 8;
                        for (; i > 0;) t.push(255 & i), i >>= 8
                    }
                    for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r) t.push(0);
                    return (0, l.lE)(new Uint8Array(t.reverse()))
                }
            };
            new BaseX("abcdefghijklmnopqrstuvwxyz234567");
            let c = new BaseX("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
            var h = r(92598),
                d = r(58337),
                p = r(14184),
                m = r(36288),
                g = r(10996);

            function flat(e, t) {
                null == t && (t = 1);
                let r = [],
                    n = r.forEach,
                    flatDeep = function(e, t) {
                        n.call(e, function(e) {
                            t > 0 && Array.isArray(e) ? flatDeep(e, t - 1) : r.push(e)
                        })
                    };
                return flatDeep(e, t), r
            }

            function read_ascending(e, t) {
                let r = Array(e);
                for (let n = 0, i = -1; n < e; n++) r[n] = i += 1 + t();
                return r
            }

            function read_member_array(e, t) {
                let r = read_ascending(e(), e),
                    n = e(),
                    i = read_ascending(n, e),
                    o = function(e, t) {
                        let r = Array(e);
                        for (let n = 0; n < e; n++) r[n] = 1 + t();
                        return r
                    }(n, e);
                for (let e = 0; e < n; e++)
                    for (let t = 0; t < o[e]; t++) r.push(i[e] + t);
                return t ? r.map(e => t[e]) : r
            }

            function read_transposed(e, t, r) {
                let n = Array(e).fill(void 0).map(() => []);
                for (let i = 0; i < t; i++)(function(e, t) {
                    let r = Array(e);
                    for (let i = 0, o = 0; i < e; i++) {
                        var n;
                        r[i] = o += 1 & (n = t()) ? ~n >> 1 : n >> 1
                    }
                    return r
                })(e, r).forEach((e, t) => n[t].push(e));
                return n
            }
            let A = (o = function(e) {
                    let t = 0;

                    function u16() {
                        return e[t++] << 8 | e[t++]
                    }
                    let r = u16(),
                        n = 1,
                        i = [0, 1];
                    for (let e = 1; e < r; e++) i.push(n += u16());
                    let o = u16(),
                        s = t;
                    t += o;
                    let a = 0,
                        l = 0;

                    function read_bit() {
                        return 0 == a && (l = l << 8 | e[t++], a = 8), l >> --a & 1
                    }
                    let u = 0;
                    for (let e = 0; e < 31; e++) u = u << 1 | read_bit();
                    let c = [],
                        h = 0,
                        d = 2147483648;
                    for (;;) {
                        let e = Math.floor(((u - h + 1) * n - 1) / d),
                            t = 0,
                            o = r;
                        for (; o - t > 1;) {
                            let r = t + o >>> 1;
                            e < i[r] ? o = r : t = r
                        }
                        if (0 == t) break;
                        c.push(t);
                        let s = h + Math.floor(d * i[t] / n),
                            a = h + Math.floor(d * i[t + 1] / n) - 1;
                        for (;
                            ((s ^ a) & 1073741824) == 0;) u = u << 1 & 2147483647 | read_bit(), s = s << 1 & 2147483647, a = a << 1 & 2147483647 | 1;
                        for (; s & ~a & 536870912;) u = 1073741824 & u | u << 1 & 1073741823 | read_bit(), s = s << 1 ^ 1073741824, a = (1073741824 ^ a) << 1 | 1073741825;
                        h = s, d = 1 + a - s
                    }
                    let p = r - 4;
                    return c.map(t => {
                        switch (t - p) {
                            case 3:
                                return p + 65792 + (e[s++] << 16 | e[s++] << 8 | e[s++]);
                            case 2:
                                return p + 256 + (e[s++] << 8 | e[s++]);
                            case 1:
                                return p + e[s++];
                            default:
                                return t - 1
                        }
                    })
                }((0, a.J)("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")), i = 0, () => o[i++]),
                y = new Set(read_member_array(A)),
                v = new Set(read_member_array(A)),
                b = function(e) {
                    let t = [];
                    for (;;) {
                        let r = e();
                        if (0 == r) break;
                        t.push(function(e, t) {
                            let r = 1 + t(),
                                n = t(),
                                i = function(e) {
                                    let t = [];
                                    for (;;) {
                                        let r = e();
                                        if (0 == r) break;
                                        t.push(r)
                                    }
                                    return t
                                }(t);
                            return flat(read_transposed(i.length, 1 + e, t).map((e, t) => {
                                let o = e[0],
                                    s = e.slice(1);
                                return Array(i[t]).fill(void 0).map((e, t) => {
                                    let i = t * n;
                                    return [o + t * r, s.map(e => e + i)]
                                })
                            }))
                        }(r, e))
                    }
                    for (;;) {
                        let r = e() - 1;
                        if (r < 0) break;
                        t.push(read_transposed(1 + e(), 1 + r, e).map(e => [e[0], e.slice(1)]))
                    }
                    return function(e) {
                        let t = {};
                        for (let r = 0; r < e.length; r++) {
                            let n = e[r];
                            t[n[0]] = n[1]
                        }
                        return t
                    }(flat(t))
                }(A),
                w = (n = read_member_array(A).sort((e, t) => e - t), function read() {
                    let e = [];
                    for (;;) {
                        let t = read_member_array(A, n);
                        if (0 == t.length) break;
                        e.push({
                            set: new Set(t),
                            node: read()
                        })
                    }
                    e.sort((e, t) => t.set.size - e.set.size);
                    let t = A();
                    return {
                        branches: e,
                        valid: t % 3,
                        fe0f: !!(1 & (t = t / 3 | 0)),
                        save: 1 == (t >>= 1),
                        check: 2 == t
                    }
                }());

            function filter_fe0f(e) {
                return e.filter(e => 65039 != e)
            }

            function ens_normalize_post_check(e) {
                for (let t of e.split(".")) {
                    let e = (0, d.XL)(t);
                    try {
                        for (let t = e.lastIndexOf(95) - 1; t >= 0; t--)
                            if (95 !== e[t]) throw Error("underscore only allowed at start");
                        if (e.length >= 4 && e.every(e => e < 128) && 45 === e[2] && 45 === e[3]) throw Error("invalid label extension")
                    } catch (e) {
                        throw Error(`Invalid label "${t}": ${e.message}`)
                    }
                }
                return e
            }
            let E = new m.Yd(g.i),
                k = new Uint8Array(32);

            function checkComponent(e) {
                if (0 === e.length) throw Error("invalid ENS name; empty component");
                return e
            }

            function ensNameSplit(e) {
                let t = (0, d.Y0)(ens_normalize_post_check(function(e, t) {
                        let r = (0, d.XL)(e).reverse(),
                            n = [];
                        for (; r.length;) {
                            let e = function(e, t) {
                                var r;
                                let n, i;
                                let o = w,
                                    s = [],
                                    a = e.length;
                                for (t && (t.length = 0); a;) {
                                    let l = e[--a];
                                    if (!(o = null === (r = o.branches.find(e => e.set.has(l))) || void 0 === r ? void 0 : r.node)) break;
                                    if (o.save) i = l;
                                    else if (o.check && l === i) break;
                                    s.push(l), o.fe0f && (s.push(65039), a > 0 && 65039 == e[a - 1] && a--), o.valid && (n = s.slice(), 2 == o.valid && n.splice(1, 1), t && t.push(...e.slice(a).reverse()), e.length = a)
                                }
                                return n
                            }(r);
                            if (e) {
                                n.push(...t(e));
                                continue
                            }
                            let i = r.pop();
                            if (y.has(i)) {
                                n.push(i);
                                continue
                            }
                            if (v.has(i)) continue;
                            let o = b[i];
                            if (o) {
                                n.push(...o);
                                continue
                            }
                            throw Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`)
                        }
                        return ens_normalize_post_check(String.fromCodePoint(...n).normalize("NFC"))
                    }(e, filter_fe0f))),
                    r = [];
                if (0 === e.length) return r;
                let n = 0;
                for (let e = 0; e < t.length; e++) {
                    let i = t[e];
                    46 === i && (r.push(checkComponent(t.slice(n, e))), n = e + 1)
                }
                if (n >= t.length) throw Error("invalid ENS name; empty component");
                return r.push(checkComponent(t.slice(n))), r
            }

            function namehash(e) {
                "string" != typeof e && E.throwArgumentError("invalid ENS name; not a string", "name", e);
                let t = k,
                    r = ensNameSplit(e);
                for (; r.length;) t = (0, p.w)((0, l.zo)([t, (0, p.w)(r.pop())]));
                return (0, l.Dv)(t)
            }
            k.fill(0);
            var _ = r(30795),
                P = r(55336),
                C = r.n(P);

            function sha256(e) {
                return "0x" + C().sha256().update((0, l.lE)(e)).digest("hex")
            }
            new m.Yd("sha2/5.7.0");
            var S = r(39318),
                N = r(76942),
                I = r.n(N),
                x = r(12312),
                B = r(89067),
                __awaiter = function(e, t, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function fulfilled(e) {
                            try {
                                step(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(n.throw(e))
                            } catch (e) {
                                o(e)
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
            let R = new m.Yd(x.i);

            function checkTopic(e) {
                return null == e ? "null" : (32 !== (0, l.E1)(e) && R.throwArgumentError("invalid topic", "topic", e), e.toLowerCase())
            }

            function serializeTopics(e) {
                for (e = e.slice(); e.length > 0 && null == e[e.length - 1];) e.pop();
                return e.map(e => {
                    if (!Array.isArray(e)) return checkTopic(e); {
                        let t = {};
                        e.forEach(e => {
                            t[checkTopic(e)] = !0
                        });
                        let r = Object.keys(t);
                        return r.sort(), r.join("|")
                    }
                }).join("&")
            }

            function getEventTag(e) {
                if ("string" == typeof e) {
                    if (e = e.toLowerCase(), 32 === (0, l.E1)(e)) return "tx:" + e;
                    if (-1 === e.indexOf(":")) return e
                } else if (Array.isArray(e)) return "filter:*:" + serializeTopics(e);
                else if (s.Sg.isForkEvent(e)) throw R.warn("not implemented"), Error("not implemented");
                else if (e && "object" == typeof e) return "filter:" + (e.address || "*") + ":" + serializeTopics(e.topics || []);
                throw Error("invalid event - " + e)
            }

            function getTime() {
                return new Date().getTime()
            }

            function stall(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }
            let T = ["block", "network", "pending", "poll"];
            let Event = class Event {
                constructor(e, t, r) {
                    (0, u.zG)(this, "tag", e), (0, u.zG)(this, "listener", t), (0, u.zG)(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter
                    }
                    return this.tag
                }
                get type() {
                    return this.tag.split(":")[0]
                }
                get hash() {
                    let e = this.tag.split(":");
                    return "tx" !== e[0] ? null : e[1]
                }
                get filter() {
                    var e;
                    let t = this.tag.split(":");
                    if ("filter" !== t[0]) return null;
                    let r = t[1],
                        n = "" === (e = t[2]) ? [] : e.split(/&/g).map(e => {
                            if ("" === e) return [];
                            let t = e.split("|").map(e => "null" === e ? null : e);
                            return 1 === t.length ? t[0] : t
                        }),
                        i = {};
                    return n.length > 0 && (i.topics = n), r && "*" !== r && (i.address = r), i
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || T.indexOf(this.tag) >= 0
                }
            };
            let O = {
                0: {
                    symbol: "btc",
                    p2pkh: 0,
                    p2sh: 5,
                    prefix: "bc"
                },
                2: {
                    symbol: "ltc",
                    p2pkh: 48,
                    p2sh: 50,
                    prefix: "ltc"
                },
                3: {
                    symbol: "doge",
                    p2pkh: 30,
                    p2sh: 22
                },
                60: {
                    symbol: "eth",
                    ilk: "eth"
                },
                61: {
                    symbol: "etc",
                    ilk: "eth"
                },
                700: {
                    symbol: "xdai",
                    ilk: "eth"
                }
            };

            function bytes32ify(e) {
                return (0, l.$m)(h.O$.from(e).toHexString(), 32)
            }

            function base58Encode(e) {
                return c.encode((0, l.zo)([e, (0, l.p3)(sha256(sha256(e)), 0, 4)]))
            }
            let D = RegExp("^(ipfs)://(.*)$", "i"),
                F = [RegExp("^(https)://(.*)$", "i"), RegExp("^(data):(.*)$", "i"), D, RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

            function _parseString(e, t) {
                try {
                    return (0, d.ZN)(_parseBytes(e, t))
                } catch (e) {}
                return null
            }

            function _parseBytes(e, t) {
                if ("0x" === e) return null;
                let r = h.O$.from((0, l.p3)(e, t, t + 32)).toNumber(),
                    n = h.O$.from((0, l.p3)(e, r, r + 32)).toNumber();
                return (0, l.p3)(e, r + 32, r + 32 + n)
            }

            function getIpfsLink(e) {
                return e.match(/^ipfs:\/\/ipfs\//i) ? e = e.substring(12) : e.match(/^ipfs:\/\//i) ? e = e.substring(7) : R.throwArgumentError("unsupported IPFS format", "link", e), `https://gateway.ipfs.io/ipfs/${e}`
            }

            function numPad(e) {
                let t = (0, l.lE)(e);
                if (t.length > 32) throw Error("internal; should not happen");
                let r = new Uint8Array(32);
                return r.set(t, 32 - t.length), r
            }

            function encodeBytes(e) {
                let t = [],
                    r = 0;
                for (let n = 0; n < e.length; n++) t.push(null), r += 32;
                for (let n = 0; n < e.length; n++) {
                    let i = (0, l.lE)(e[n]);
                    t[n] = numPad(r), t.push(numPad(i.length)), t.push(function(e) {
                        if (e.length % 32 == 0) return e;
                        let t = new Uint8Array(32 * Math.ceil(e.length / 32));
                        return t.set(e), t
                    }(i)), r += 32 + 32 * Math.ceil(i.length / 32)
                }
                return (0, l.xs)(t)
            }
            let Resolver = class Resolver {
                constructor(e, t, r, n) {
                    (0, u.zG)(this, "provider", e), (0, u.zG)(this, "name", r), (0, u.zG)(this, "address", e.formatter.address(t)), (0, u.zG)(this, "_resolvedAddress", n)
                }
                supportsWildcard() {
                    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                        to: this.address,
                        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                    }).then(e => h.O$.from(e).eq(1)).catch(e => {
                        if (e.code === m.Yd.errors.CALL_EXCEPTION) return !1;
                        throw this._supportsEip2544 = null, e
                    })), this._supportsEip2544
                }
                _fetch(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let r = {
                                to: this.address,
                                ccipReadEnabled: !0,
                                data: (0, l.xs)([e, namehash(this.name), t || "0x"])
                            },
                            n = !1;
                        if (yield this.supportsWildcard()) {
                            var i;
                            n = !0, r.data = (0, l.xs)(["0x9061b923", encodeBytes([(i = this.name, (0, l.Dv)((0, l.zo)(ensNameSplit(i).map(e => {
                                if (e.length > 63) throw Error("invalid DNS encoded entry; length exceeds 63 bytes");
                                let t = new Uint8Array(e.length + 1);
                                return t.set(e, 1), t[0] = t.length - 1, t
                            }))) + "00"), r.data])])
                        }
                        try {
                            let e = yield this.provider.call(r);
                            return (0, l.lE)(e).length % 32 == 4 && R.throwError("resolver threw error", m.Yd.errors.CALL_EXCEPTION, {
                                transaction: r,
                                data: e
                            }), n && (e = _parseBytes(e, 0)), e
                        } catch (e) {
                            if (e.code === m.Yd.errors.CALL_EXCEPTION) return null;
                            throw e
                        }
                    })
                }
                _fetchBytes(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let r = yield this._fetch(e, t);
                        return null != r ? _parseBytes(r, 0) : null
                    })
                }
                _getAddress(e, t) {
                    let r = O[String(e)];
                    if (null == r && R.throwError(`unsupported coin type: ${e}`, m.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${e})`
                        }), "eth" === r.ilk) return this.provider.formatter.address(t);
                    let n = (0, l.lE)(t);
                    if (null != r.p2pkh) {
                        let e = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (e) {
                            let t = parseInt(e[1], 16);
                            if (e[2].length === 2 * t && t >= 1 && t <= 75) return base58Encode((0, l.zo)([
                                [r.p2pkh], "0x" + e[2]
                            ]))
                        }
                    }
                    if (null != r.p2sh) {
                        let e = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (e) {
                            let t = parseInt(e[1], 16);
                            if (e[2].length === 2 * t && t >= 1 && t <= 75) return base58Encode((0, l.zo)([
                                [r.p2sh], "0x" + e[2]
                            ]))
                        }
                    }
                    if (null != r.prefix) {
                        let e = n[1],
                            t = n[0];
                        if (0 === t ? 20 !== e && 32 !== e && (t = -1) : t = -1, t >= 0 && n.length === 2 + e && e >= 1 && e <= 75) {
                            let e = I().toWords(n.slice(2));
                            return e.unshift(t), I().encode(r.prefix, e)
                        }
                    }
                    return null
                }
                getAddress(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if (null == e && (e = 60), 60 === e) try {
                            let e = yield this._fetch("0x3b3b57de");
                            if ("0x" === e || "0x0000000000000000000000000000000000000000000000000000000000000000" === e) return null;
                            return this.provider.formatter.callAddress(e)
                        } catch (e) {
                            if (e.code === m.Yd.errors.CALL_EXCEPTION) return null;
                            throw e
                        }
                        let t = yield this._fetchBytes("0xf1cb7e06", bytes32ify(e));
                        if (null == t || "0x" === t) return null;
                        let r = this._getAddress(e, t);
                        return null == r && R.throwError("invalid or unsupported coin data", m.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${e})`,
                            coinType: e,
                            data: t
                        }), r
                    })
                }
                getAvatar() {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = [{
                            type: "name",
                            content: this.name
                        }];
                        try {
                            let t = yield this.getText("avatar");
                            if (null == t) return null;
                            for (let r = 0; r < F.length; r++) {
                                let n = t.match(F[r]);
                                if (null == n) continue;
                                let i = n[1].toLowerCase();
                                switch (i) {
                                    case "https":
                                        return e.push({
                                            type: "url",
                                            content: t
                                        }), {
                                            linkage: e,
                                            url: t
                                        };
                                    case "data":
                                        return e.push({
                                            type: "data",
                                            content: t
                                        }), {
                                            linkage: e,
                                            url: t
                                        };
                                    case "ipfs":
                                        return e.push({
                                            type: "ipfs",
                                            content: t
                                        }), {
                                            linkage: e,
                                            url: getIpfsLink(t)
                                        };
                                    case "erc721":
                                    case "erc1155":
                                        {
                                            let r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";e.push({
                                                type: i,
                                                content: t
                                            });
                                            let o = this._resolvedAddress || (yield this.getAddress()),
                                                s = (n[2] || "").split("/");
                                            if (2 !== s.length) return null;
                                            let a = yield this.provider.formatter.address(s[0]), u = (0, l.$m)(h.O$.from(s[1]).toHexString(), 32);
                                            if ("erc721" === i) {
                                                let t = this.provider.formatter.callAddress((yield this.provider.call({
                                                    to: a,
                                                    data: (0, l.xs)(["0x6352211e", u])
                                                })));
                                                if (o !== t) return null;
                                                e.push({
                                                    type: "owner",
                                                    content: t
                                                })
                                            } else if ("erc1155" === i) {
                                                let t = h.O$.from((yield this.provider.call({
                                                    to: a,
                                                    data: (0, l.xs)(["0x00fdd58e", (0, l.$m)(o, 32), u])
                                                })));
                                                if (t.isZero()) return null;
                                                e.push({
                                                    type: "balance",
                                                    content: t.toString()
                                                })
                                            }
                                            let c = {
                                                    to: this.provider.formatter.address(s[0]),
                                                    data: (0, l.xs)([r, u])
                                                },
                                                d = _parseString((yield this.provider.call(c)), 0);
                                            if (null == d) return null;e.push({
                                                type: "metadata-url-base",
                                                content: d
                                            }),
                                            "erc1155" === i && (d = d.replace("{id}", u.substring(2)), e.push({
                                                type: "metadata-url-expanded",
                                                content: d
                                            })),
                                            d.match(/^ipfs:/i) && (d = getIpfsLink(d)),
                                            e.push({
                                                type: "metadata-url",
                                                content: d
                                            });
                                            let p = yield(0, S.rd)(d);
                                            if (!p) return null;e.push({
                                                type: "metadata",
                                                content: JSON.stringify(p)
                                            });
                                            let m = p.image;
                                            if ("string" != typeof m) return null;
                                            if (m.match(/^(https:\/\/|data:)/i));
                                            else {
                                                let t = m.match(D);
                                                if (null == t) return null;
                                                e.push({
                                                    type: "url-ipfs",
                                                    content: m
                                                }), m = getIpfsLink(m)
                                            }
                                            return e.push({
                                                type: "url",
                                                content: m
                                            }),
                                            {
                                                linkage: e,
                                                url: m
                                            }
                                        }
                                }
                            }
                        } catch (e) {}
                        return null
                    })
                }
                getContentHash() {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = yield this._fetchBytes("0xbc1c58d1");
                        if (null == e || "0x" === e) return null;
                        let t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (t) {
                            let e = parseInt(t[3], 16);
                            if (t[4].length === 2 * e) return "ipfs://" + c.encode("0x" + t[1])
                        }
                        let r = e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (r) {
                            let e = parseInt(r[3], 16);
                            if (r[4].length === 2 * e) return "ipns://" + c.encode("0x" + r[1])
                        }
                        let n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        if (n && 64 === n[1].length) return "bzz://" + n[1];
                        let i = e.match(/^0x90b2c605([0-9a-f]*)$/);
                        if (i && 68 === i[1].length) {
                            let e = {
                                    "=": "",
                                    "+": "-",
                                    "/": "_"
                                },
                                t = (0, a.c)("0x" + i[1]).replace(/[=+\/]/g, t => e[t]);
                            return "sia://" + t
                        }
                        return R.throwError("invalid or unsupported content hash data", m.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "getContentHash()",
                            data: e
                        })
                    })
                }
                getText(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = (0, d.Y0)(e);
                        (t = (0, l.zo)([bytes32ify(64), bytes32ify(t.length), t])).length % 32 != 0 && (t = (0, l.zo)([t, (0, l.$m)("0x", 32 - e.length % 32)]));
                        let r = yield this._fetchBytes("0x59d1d43c", (0, l.Dv)(t));
                        return null == r || "0x" === r ? null : (0, d.ZN)(r)
                    })
                }
            };
            let M = null,
                L = 1;
            let BaseProvider = class BaseProvider extends s.zt {
                constructor(e) {
                    if (super(), this._events = [], this._emitted = {
                            block: -2
                        }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), (0, u.zG)(this, "anyNetwork", "any" === e), this.anyNetwork && (e = this.detectNetwork()), e instanceof Promise) this._networkPromise = e, e.catch(e => {}), this._ready().catch(e => {});
                    else {
                        let t = (0, u.tu)(new.target, "getNetwork")(e);
                        t ? ((0, u.zG)(this, "_network", t), this.emit("network", t, null)) : R.throwArgumentError("invalid network", "network", e)
                    }
                    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
                }
                _ready() {
                    return __awaiter(this, void 0, void 0, function*() {
                        if (null == this._network) {
                            let e = null;
                            if (this._networkPromise) try {
                                e = yield this._networkPromise
                            } catch (e) {}
                            null == e && (e = yield this.detectNetwork()), e || R.throwError("no network detected", m.Yd.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = e : (0, u.zG)(this, "_network", e), this.emit("network", e, null))
                        }
                        return this._network
                    })
                }
                get ready() {
                    return (0, S.$l)(() => this._ready().then(e => e, e => {
                        if (e.code !== m.Yd.errors.NETWORK_ERROR || "noNetwork" !== e.event) throw e
                    }))
                }
                static getFormatter() {
                    return null == M && (M = new B.Mb), M
                }
                static getNetwork(e) {
                    return (0, _.H)(null == e ? "homestead" : e)
                }
                ccipReadFetch(e, t, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if (this.disableCcipRead || 0 === r.length) return null;
                        let n = e.to.toLowerCase(),
                            i = t.toLowerCase(),
                            o = [];
                        for (let e = 0; e < r.length; e++) {
                            let t = r[e],
                                s = t.replace("{sender}", n).replace("{data}", i),
                                a = t.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                    data: i,
                                    sender: n
                                }),
                                l = yield(0, S.rd)({
                                    url: s,
                                    errorPassThrough: !0
                                }, a, (e, t) => (e.status = t.statusCode, e));
                            if (l.data) return l.data;
                            let u = l.message || "unknown error";
                            if (l.status >= 400 && l.status < 500) return R.throwError(`response not found during CCIP fetch: ${u}`, m.Yd.errors.SERVER_ERROR, {
                                url: t,
                                errorMessage: u
                            });
                            o.push(u)
                        }
                        return R.throwError(`error encountered during CCIP fetch: ${o.map(e=>JSON.stringify(e)).join(", ")}`, m.Yd.errors.SERVER_ERROR, {
                            urls: r,
                            errorMessages: o
                        })
                    })
                }
                _getInternalBlockNumber(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if (yield this._ready(), e > 0)
                            for (; this._internalBlockNumber;) {
                                let t = this._internalBlockNumber;
                                try {
                                    let r = yield t;
                                    if (getTime() - r.respTime <= e) return r.blockNumber;
                                    break
                                } catch (e) {
                                    if (this._internalBlockNumber === t) break
                                }
                            }
                        let t = getTime(),
                            r = (0, u.mE)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then(e => null, e => e)
                            }).then(({
                                blockNumber: e,
                                networkError: n
                            }) => {
                                if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
                                let i = getTime();
                                return (e = h.O$.from(e).toNumber()) < this._maxInternalBlockNumber && (e = this._maxInternalBlockNumber), this._maxInternalBlockNumber = e, this._setFastBlockNumber(e), {
                                    blockNumber: e,
                                    reqTime: t,
                                    respTime: i
                                }
                            });
                        return this._internalBlockNumber = r, r.catch(e => {
                            this._internalBlockNumber === r && (this._internalBlockNumber = null)
                        }), (yield r).blockNumber
                    })
                }
                poll() {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = L++,
                            t = [],
                            r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                        } catch (e) {
                            this.emit("error", e);
                            return
                        }
                        if (this._setFastBlockNumber(r), this.emit("poll", e, r), r === this._lastBlockNumber) {
                            this.emit("didPoll", e);
                            return
                        }
                        if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) R.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", R.makeError("network block skew detected", m.Yd.errors.NETWORK_ERROR, {
                            blockNumber: r,
                            event: "blockSkew",
                            previousBlockNumber: this._emitted.block
                        })), this.emit("block", r);
                        else
                            for (let e = this._emitted.block + 1; e <= r; e++) this.emit("block", e);
                        this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach(e => {
                            if ("block" === e) return;
                            let t = this._emitted[e];
                            "pending" !== t && r - t > 12 && delete this._emitted[e]
                        })), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach(e => {
                            switch (e.type) {
                                case "tx":
                                    {
                                        let r = e.hash,
                                            n = this.getTransactionReceipt(r).then(e => (e && null != e.blockNumber && (this._emitted["t:" + r] = e.blockNumber, this.emit(r, e)), null)).catch(e => {
                                                this.emit("error", e)
                                            });t.push(n);
                                        break
                                    }
                                case "filter":
                                    if (!e._inflight) {
                                        e._inflight = !0, -2 === e._lastBlockNumber && (e._lastBlockNumber = r - 1);
                                        let n = e.filter;
                                        n.fromBlock = e._lastBlockNumber + 1, n.toBlock = r;
                                        let i = n.toBlock - this._maxFilterBlockRange;
                                        i > n.fromBlock && (n.fromBlock = i), n.fromBlock < 0 && (n.fromBlock = 0);
                                        let o = this.getLogs(n).then(t => {
                                            e._inflight = !1, 0 !== t.length && t.forEach(t => {
                                                t.blockNumber > e._lastBlockNumber && (e._lastBlockNumber = t.blockNumber), this._emitted["b:" + t.blockHash] = t.blockNumber, this._emitted["t:" + t.transactionHash] = t.blockNumber, this.emit(n, t)
                                            })
                                        }).catch(t => {
                                            this.emit("error", t), e._inflight = !1
                                        });
                                        t.push(o)
                                    }
                            }
                        }), this._lastBlockNumber = r, Promise.all(t).then(() => {
                            this.emit("didPoll", e)
                        }).catch(e => {
                            this.emit("error", e)
                        })
                    })
                }
                resetEventsBlock(e) {
                    this._lastBlockNumber = e - 1, this.polling && this.poll()
                }
                get network() {
                    return this._network
                }
                detectNetwork() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return R.throwError("provider does not support network detection", m.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "provider.detectNetwork"
                        })
                    })
                }
                getNetwork() {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = yield this._ready(), t = yield this.detectNetwork();
                        if (e.chainId !== t.chainId) {
                            if (this.anyNetwork) return this._network = t, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", t, e), yield stall(0), this._network;
                            let r = R.makeError("underlying network changed", m.Yd.errors.NETWORK_ERROR, {
                                event: "changed",
                                network: e,
                                detectedNetwork: t
                            });
                            throw this.emit("error", r), r
                        }
                        return e
                    })
                }
                get blockNumber() {
                    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(e => {
                        this._setFastBlockNumber(e)
                    }, e => {}), null != this._fastBlockNumber ? this._fastBlockNumber : -1
                }
                get polling() {
                    return null != this._poller
                }
                set polling(e) {
                    e && !this._poller ? (this._poller = setInterval(() => {
                        this.poll()
                    }, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
                        this.poll(), this._bootstrapPoll = setTimeout(() => {
                            this._poller || this.poll(), this._bootstrapPoll = null
                        }, this.pollingInterval)
                    }, 0))) : !e && this._poller && (clearInterval(this._poller), this._poller = null)
                }
                get pollingInterval() {
                    return this._pollingInterval
                }
                set pollingInterval(e) {
                    if ("number" != typeof e || e <= 0 || parseInt(String(e)) != e) throw Error("invalid polling interval");
                    this._pollingInterval = e, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
                        this.poll()
                    }, this._pollingInterval))
                }
                _getFastBlockNumber() {
                    let e = getTime();
                    return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then(e => ((null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e), this._fastBlockNumber))), this._fastBlockNumberPromise
                }
                _setFastBlockNumber(e) {
                    (null == this._fastBlockNumber || !(e < this._fastBlockNumber)) && (this._fastQueryDate = getTime(), (null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e)))
                }
                waitForTransaction(e, t, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._waitForTransaction(e, null == t ? 1 : t, r || 0, null)
                    })
                }
                _waitForTransaction(e, t, r, n) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let i = yield this.getTransactionReceipt(e);
                        return (i ? i.confirmations : 0) >= t ? i : new Promise((i, o) => {
                            let s = [],
                                a = !1,
                                alreadyDone = function() {
                                    return !!a || (a = !0, s.forEach(e => {
                                        e()
                                    }), !1)
                                },
                                minedHandler = e => {
                                    e.confirmations < t || alreadyDone() || i(e)
                                };
                            if (this.on(e, minedHandler), s.push(() => {
                                    this.removeListener(e, minedHandler)
                                }), n) {
                                let r = n.startBlock,
                                    i = null,
                                    replaceHandler = s => __awaiter(this, void 0, void 0, function*() {
                                        a || (yield stall(1e3), this.getTransactionCount(n.from).then(l => __awaiter(this, void 0, void 0, function*() {
                                            if (!a) {
                                                if (l <= n.nonce) r = s;
                                                else {
                                                    {
                                                        let t = yield this.getTransaction(e);
                                                        if (t && null != t.blockNumber) return
                                                    }
                                                    for (null == i && (i = r - 3) < n.startBlock && (i = n.startBlock); i <= s;) {
                                                        if (a) return;
                                                        let r = yield this.getBlockWithTransactions(i);
                                                        for (let i = 0; i < r.transactions.length; i++) {
                                                            let s = r.transactions[i];
                                                            if (s.hash === e) return;
                                                            if (s.from === n.from && s.nonce === n.nonce) {
                                                                if (a) return;
                                                                let r = yield this.waitForTransaction(s.hash, t);
                                                                if (alreadyDone()) return;
                                                                let i = "replaced";
                                                                s.data === n.data && s.to === n.to && s.value.eq(n.value) ? i = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (i = "cancelled"), o(R.makeError("transaction was replaced", m.Yd.errors.TRANSACTION_REPLACED, {
                                                                    cancelled: "replaced" === i || "cancelled" === i,
                                                                    reason: i,
                                                                    replacement: this._wrapTransaction(s),
                                                                    hash: e,
                                                                    receipt: r
                                                                }));
                                                                return
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                                a || this.once("block", replaceHandler)
                                            }
                                        }), e => {
                                            a || this.once("block", replaceHandler)
                                        }))
                                    });
                                if (a) return;
                                this.once("block", replaceHandler), s.push(() => {
                                    this.removeListener("block", replaceHandler)
                                })
                            }
                            if ("number" == typeof r && r > 0) {
                                let e = setTimeout(() => {
                                    alreadyDone() || o(R.makeError("timeout exceeded", m.Yd.errors.TIMEOUT, {
                                        timeout: r
                                    }))
                                }, r);
                                e.unref && e.unref(), s.push(() => {
                                    clearTimeout(e)
                                })
                            }
                        })
                    })
                }
                getBlockNumber() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._getInternalBlockNumber(0)
                    })
                }
                getGasPrice() {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let e = yield this.perform("getGasPrice", {});
                        try {
                            return h.O$.from(e)
                        } catch (t) {
                            return R.throwError("bad result from backend", m.Yd.errors.SERVER_ERROR, {
                                method: "getGasPrice",
                                result: e,
                                error: t
                            })
                        }
                    })
                }
                getBalance(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, u.mE)({
                            address: this._getAddress(e),
                            blockTag: this._getBlockTag(t)
                        }), n = yield this.perform("getBalance", r);
                        try {
                            return h.O$.from(n)
                        } catch (e) {
                            return R.throwError("bad result from backend", m.Yd.errors.SERVER_ERROR, {
                                method: "getBalance",
                                params: r,
                                result: n,
                                error: e
                            })
                        }
                    })
                }
                getTransactionCount(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, u.mE)({
                            address: this._getAddress(e),
                            blockTag: this._getBlockTag(t)
                        }), n = yield this.perform("getTransactionCount", r);
                        try {
                            return h.O$.from(n).toNumber()
                        } catch (e) {
                            return R.throwError("bad result from backend", m.Yd.errors.SERVER_ERROR, {
                                method: "getTransactionCount",
                                params: r,
                                result: n,
                                error: e
                            })
                        }
                    })
                }
                getCode(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, u.mE)({
                            address: this._getAddress(e),
                            blockTag: this._getBlockTag(t)
                        }), n = yield this.perform("getCode", r);
                        try {
                            return (0, l.Dv)(n)
                        } catch (e) {
                            return R.throwError("bad result from backend", m.Yd.errors.SERVER_ERROR, {
                                method: "getCode",
                                params: r,
                                result: n,
                                error: e
                            })
                        }
                    })
                }
                getStorageAt(e, t, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let n = yield(0, u.mE)({
                            address: this._getAddress(e),
                            blockTag: this._getBlockTag(r),
                            position: Promise.resolve(t).then(e => (0, l.$P)(e))
                        }), i = yield this.perform("getStorageAt", n);
                        try {
                            return (0, l.Dv)(i)
                        } catch (e) {
                            return R.throwError("bad result from backend", m.Yd.errors.SERVER_ERROR, {
                                method: "getStorageAt",
                                params: n,
                                result: i,
                                error: e
                            })
                        }
                    })
                }
                _wrapTransaction(e, t, r) {
                    if (null != t && 32 !== (0, l.E1)(t)) throw Error("invalid response - sendTransaction");
                    return null != t && e.hash !== t && R.throwError("Transaction hash mismatch from Provider.sendTransaction.", m.Yd.errors.UNKNOWN_ERROR, {
                        expectedHash: e.hash,
                        returnedHash: t
                    }), e.wait = (t, n) => __awaiter(this, void 0, void 0, function*() {
                        let i;
                        null == t && (t = 1), null == n && (n = 0), 0 !== t && null != r && (i = {
                            data: e.data,
                            from: e.from,
                            nonce: e.nonce,
                            to: e.to,
                            value: e.value,
                            startBlock: r
                        });
                        let o = yield this._waitForTransaction(e.hash, t, n, i);
                        return null == o && 0 === t ? null : (this._emitted["t:" + e.hash] = o.blockNumber, 0 === o.status && R.throwError("transaction failed", m.Yd.errors.CALL_EXCEPTION, {
                            transactionHash: e.hash,
                            transaction: e,
                            receipt: o
                        }), o)
                    }), e
                }
                sendTransaction(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let t = yield Promise.resolve(e).then(e => (0, l.Dv)(e)), r = this.formatter.transaction(e);
                        null == r.confirmations && (r.confirmations = 0);
                        let n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            let e = yield this.perform("sendTransaction", {
                                signedTransaction: t
                            });
                            return this._wrapTransaction(r, e, n)
                        } catch (e) {
                            throw e.transaction = r, e.transactionHash = r.hash, e
                        }
                    })
                }
                _getTransactionRequest(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = yield e, r = {};
                        return ["from", "to"].forEach(e => {
                            null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? this._getAddress(e) : null))
                        }), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(e => {
                            null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? h.O$.from(e) : null))
                        }), ["type"].forEach(e => {
                            null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => null != e ? e : null))
                        }), t.accessList && (r.accessList = this.formatter.accessList(t.accessList)), ["data"].forEach(e => {
                            null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? (0, l.Dv)(e) : null))
                        }), this.formatter.transactionRequest((yield(0, u.mE)(r)))
                    })
                }
                _getFilter(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        e = yield e;
                        let t = {};
                        return null != e.address && (t.address = this._getAddress(e.address)), ["blockHash", "topics"].forEach(r => {
                            null != e[r] && (t[r] = e[r])
                        }), ["fromBlock", "toBlock"].forEach(r => {
                            null != e[r] && (t[r] = this._getBlockTag(e[r]))
                        }), this.formatter.filter((yield(0, u.mE)(t)))
                    })
                }
                _call(e, t, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        r >= 10 && R.throwError("CCIP read exceeded maximum redirections", m.Yd.errors.SERVER_ERROR, {
                            redirects: r,
                            transaction: e
                        });
                        let n = e.to,
                            i = yield this.perform("call", {
                                transaction: e,
                                blockTag: t
                            });
                        if (r >= 0 && "latest" === t && null != n && "0x556f1830" === i.substring(0, 10) && (0, l.E1)(i) % 32 == 4) try {
                            let o = (0, l.p3)(i, 4),
                                s = (0, l.p3)(o, 0, 32);
                            h.O$.from(s).eq(n) || R.throwError("CCIP Read sender did not match", m.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: e,
                                data: i
                            });
                            let a = [],
                                u = h.O$.from((0, l.p3)(o, 32, 64)).toNumber(),
                                c = h.O$.from((0, l.p3)(o, u, u + 32)).toNumber(),
                                d = (0, l.p3)(o, u + 32);
                            for (let t = 0; t < c; t++) {
                                let r = _parseString(d, 32 * t);
                                null == r && R.throwError("CCIP Read contained corrupt URL string", m.Yd.errors.CALL_EXCEPTION, {
                                    name: "OffchainLookup",
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    transaction: e,
                                    data: i
                                }), a.push(r)
                            }
                            let p = _parseBytes(o, 64);
                            h.O$.from((0, l.p3)(o, 100, 128)).isZero() || R.throwError("CCIP Read callback selector included junk", m.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: e,
                                data: i
                            });
                            let g = (0, l.p3)(o, 96, 100),
                                A = _parseBytes(o, 128),
                                y = yield this.ccipReadFetch(e, p, a);
                            null == y && R.throwError("CCIP Read disabled or provided no URLs", m.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: e,
                                data: i
                            });
                            let v = {
                                to: n,
                                data: (0, l.xs)([g, encodeBytes([y, A])])
                            };
                            return this._call(v, t, r + 1)
                        } catch (e) {
                            if (e.code === m.Yd.errors.SERVER_ERROR) throw e
                        }
                        try {
                            return (0, l.Dv)(i)
                        } catch (r) {
                            return R.throwError("bad result from backend", m.Yd.errors.SERVER_ERROR, {
                                method: "call",
                                params: {
                                    transaction: e,
                                    blockTag: t
                                },
                                result: i,
                                error: r
                            })
                        }
                    })
                }
                call(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, u.mE)({
                            transaction: this._getTransactionRequest(e),
                            blockTag: this._getBlockTag(t),
                            ccipReadEnabled: Promise.resolve(e.ccipReadEnabled)
                        });
                        return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                    })
                }
                estimateGas(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let t = yield(0, u.mE)({
                            transaction: this._getTransactionRequest(e)
                        }), r = yield this.perform("estimateGas", t);
                        try {
                            return h.O$.from(r)
                        } catch (e) {
                            return R.throwError("bad result from backend", m.Yd.errors.SERVER_ERROR, {
                                method: "estimateGas",
                                params: t,
                                result: r,
                                error: e
                            })
                        }
                    })
                }
                _getAddress(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        "string" != typeof(e = yield e) && R.throwArgumentError("invalid address or ENS name", "name", e);
                        let t = yield this.resolveName(e);
                        return null == t && R.throwError("ENS name not configured", m.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: `resolveName(${JSON.stringify(e)})`
                        }), t
                    })
                }
                _getBlock(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork(), e = yield e;
                        let r = -128,
                            n = {
                                includeTransactions: !!t
                            };
                        if ((0, l.A7)(e, 32)) n.blockHash = e;
                        else try {
                            n.blockTag = yield this._getBlockTag(e), (0, l.A7)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
                        } catch (t) {
                            R.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e)
                        }
                        return (0, S.$l)(() => __awaiter(this, void 0, void 0, function*() {
                            let e = yield this.perform("getBlock", n);
                            if (null == e) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
                            if (t) {
                                let t = null;
                                for (let r = 0; r < e.transactions.length; r++) {
                                    let n = e.transactions[r];
                                    if (null == n.blockNumber) n.confirmations = 0;
                                    else if (null == n.confirmations) {
                                        null == t && (t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                        let e = t - n.blockNumber + 1;
                                        e <= 0 && (e = 1), n.confirmations = e
                                    }
                                }
                                let r = this.formatter.blockWithTransactions(e);
                                return r.transactions = r.transactions.map(e => this._wrapTransaction(e)), r
                            }
                            return this.formatter.block(e)
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getBlock(e) {
                    return this._getBlock(e, !1)
                }
                getBlockWithTransactions(e) {
                    return this._getBlock(e, !0)
                }
                getTransaction(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork(), e = yield e;
                        let t = {
                            transactionHash: this.formatter.hash(e, !0)
                        };
                        return (0, S.$l)(() => __awaiter(this, void 0, void 0, function*() {
                            let r = yield this.perform("getTransaction", t);
                            if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
                            let n = this.formatter.transactionResponse(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval), t = e - n.blockNumber + 1;
                                t <= 0 && (t = 1), n.confirmations = t
                            }
                            return this._wrapTransaction(n)
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getTransactionReceipt(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork(), e = yield e;
                        let t = {
                            transactionHash: this.formatter.hash(e, !0)
                        };
                        return (0, S.$l)(() => __awaiter(this, void 0, void 0, function*() {
                            let r = yield this.perform("getTransactionReceipt", t);
                            if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
                            if (null == r.blockHash) return;
                            let n = this.formatter.receipt(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval), t = e - n.blockNumber + 1;
                                t <= 0 && (t = 1), n.confirmations = t
                            }
                            return n
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getLogs(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let t = yield(0, u.mE)({
                            filter: this._getFilter(e)
                        }), r = yield this.perform("getLogs", t);
                        return r.forEach(e => {
                            null == e.removed && (e.removed = !1)
                        }), B.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                    })
                }
                getEtherPrice() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {})
                    })
                }
                _getBlockTag(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if ("number" == typeof(e = yield e) && e < 0) {
                            e % 1 && R.throwArgumentError("invalid BlockTag", "blockTag", e);
                            let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return (t += e) < 0 && (t = 0), this.formatter.blockTag(t)
                        }
                        return this.formatter.blockTag(e)
                    })
                }
                getResolver(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = e;
                        for (;;) {
                            if ("" === t || "." === t || "eth" !== e && "eth" === t) return null;
                            let r = yield this._getResolver(t, "getResolver");
                            if (null != r) {
                                let n = new Resolver(this, r, e);
                                if (t !== e && !(yield n.supportsWildcard())) return null;
                                return n
                            }
                            t = t.split(".").slice(1).join(".")
                        }
                    })
                }
                _getResolver(e, t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        null == t && (t = "ENS");
                        let r = yield this.getNetwork();
                        r.ensAddress || R.throwError("network does not support ENS", m.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: t,
                            network: r.name
                        });
                        try {
                            let t = yield this.call({
                                to: r.ensAddress,
                                data: "0x0178b8bf" + namehash(e).substring(2)
                            });
                            return this.formatter.callAddress(t)
                        } catch (e) {}
                        return null
                    })
                }
                resolveName(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        e = yield e;
                        try {
                            return Promise.resolve(this.formatter.address(e))
                        } catch (t) {
                            if ((0, l.A7)(e)) throw t
                        }
                        "string" != typeof e && R.throwArgumentError("invalid ENS name", "name", e);
                        let t = yield this.getResolver(e);
                        return t ? yield t.getAddress(): null
                    })
                }
                lookupAddress(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        e = yield e, e = this.formatter.address(e);
                        let t = e.substring(2).toLowerCase() + ".addr.reverse",
                            r = yield this._getResolver(t, "lookupAddress");
                        if (null == r) return null;
                        let n = _parseString((yield this.call({
                                to: r,
                                data: "0x691f3431" + namehash(t).substring(2)
                            })), 0),
                            i = yield this.resolveName(n);
                        return i != e ? null : n
                    })
                }
                getAvatar(e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = null;
                        if ((0, l.A7)(e)) {
                            let r = this.formatter.address(e),
                                n = r.substring(2).toLowerCase() + ".addr.reverse",
                                i = yield this._getResolver(n, "getAvatar");
                            if (!i) return null;
                            t = new Resolver(this, i, n);
                            try {
                                let e = yield t.getAvatar();
                                if (e) return e.url
                            } catch (e) {
                                if (e.code !== m.Yd.errors.CALL_EXCEPTION) throw e
                            }
                            try {
                                let e = _parseString((yield this.call({
                                    to: i,
                                    data: "0x691f3431" + namehash(n).substring(2)
                                })), 0);
                                t = yield this.getResolver(e)
                            } catch (e) {
                                if (e.code !== m.Yd.errors.CALL_EXCEPTION) throw e;
                                return null
                            }
                        } else if (!(t = yield this.getResolver(e))) return null;
                        let r = yield t.getAvatar();
                        return null == r ? null : r.url
                    })
                }
                perform(e, t) {
                    return R.throwError(e + " not implemented", m.Yd.errors.NOT_IMPLEMENTED, {
                        operation: e
                    })
                }
                _startEvent(e) {
                    this.polling = this._events.filter(e => e.pollable()).length > 0
                }
                _stopEvent(e) {
                    this.polling = this._events.filter(e => e.pollable()).length > 0
                }
                _addEventListener(e, t, r) {
                    let n = new Event(getEventTag(e), t, r);
                    return this._events.push(n), this._startEvent(n), this
                }
                on(e, t) {
                    return this._addEventListener(e, t, !1)
                }
                once(e, t) {
                    return this._addEventListener(e, t, !0)
                }
                emit(e, ...t) {
                    let r = !1,
                        n = [],
                        i = getEventTag(e);
                    return this._events = this._events.filter(e => e.tag !== i || (setTimeout(() => {
                        e.listener.apply(this, t)
                    }, 0), r = !0, !e.once || (n.push(e), !1))), n.forEach(e => {
                        this._stopEvent(e)
                    }), r
                }
                listenerCount(e) {
                    if (!e) return this._events.length;
                    let t = getEventTag(e);
                    return this._events.filter(e => e.tag === t).length
                }
                listeners(e) {
                    if (null == e) return this._events.map(e => e.listener);
                    let t = getEventTag(e);
                    return this._events.filter(e => e.tag === t).map(e => e.listener)
                }
                off(e, t) {
                    if (null == t) return this.removeAllListeners(e);
                    let r = [],
                        n = !1,
                        i = getEventTag(e);
                    return this._events = this._events.filter(e => e.tag !== i || e.listener != t || !!n || (n = !0, r.push(e), !1)), r.forEach(e => {
                        this._stopEvent(e)
                    }), this
                }
                removeAllListeners(e) {
                    let t = [];
                    if (null == e) t = this._events, this._events = [];
                    else {
                        let r = getEventTag(e);
                        this._events = this._events.filter(e => e.tag !== r || (t.push(e), !1))
                    }
                    return t.forEach(e => {
                        this._stopEvent(e)
                    }), this
                }
            }
        },
        89067: function(e, t, r) {
            "use strict";
            r.d(t, {
                Mb: function() {
                    return Formatter
                },
                Gp: function() {
                    return isCommunityResource
                },
                vh: function() {
                    return showThrottleMessage
                }
            });
            var n = r(18994),
                i = r(92598),
                o = r(57273),
                s = r(17213),
                a = r(52501),
                l = r(36288),
                u = r(12312);
            let c = new l.Yd(u.i);
            let Formatter = class Formatter {
                constructor() {
                    this.formats = this.getDefaultFormats()
                }
                getDefaultFormats() {
                    let e = {},
                        t = this.address.bind(this),
                        r = this.bigNumber.bind(this),
                        n = this.blockTag.bind(this),
                        i = this.data.bind(this),
                        o = this.hash.bind(this),
                        a = this.hex.bind(this),
                        l = this.number.bind(this),
                        u = this.type.bind(this);
                    return e.transaction = {
                        hash: o,
                        type: u,
                        accessList: Formatter.allowNull(this.accessList.bind(this), null),
                        blockHash: Formatter.allowNull(o, null),
                        blockNumber: Formatter.allowNull(l, null),
                        transactionIndex: Formatter.allowNull(l, null),
                        confirmations: Formatter.allowNull(l, null),
                        from: t,
                        gasPrice: Formatter.allowNull(r),
                        maxPriorityFeePerGas: Formatter.allowNull(r),
                        maxFeePerGas: Formatter.allowNull(r),
                        gasLimit: r,
                        to: Formatter.allowNull(t, null),
                        value: r,
                        nonce: l,
                        data: i,
                        r: Formatter.allowNull(this.uint256),
                        s: Formatter.allowNull(this.uint256),
                        v: Formatter.allowNull(l),
                        creates: Formatter.allowNull(t, null),
                        raw: Formatter.allowNull(i)
                    }, e.transactionRequest = {
                        from: Formatter.allowNull(t),
                        nonce: Formatter.allowNull(l),
                        gasLimit: Formatter.allowNull(r),
                        gasPrice: Formatter.allowNull(r),
                        maxPriorityFeePerGas: Formatter.allowNull(r),
                        maxFeePerGas: Formatter.allowNull(r),
                        to: Formatter.allowNull(t),
                        value: Formatter.allowNull(r),
                        data: Formatter.allowNull(e => this.data(e, !0)),
                        type: Formatter.allowNull(l),
                        accessList: Formatter.allowNull(this.accessList.bind(this), null)
                    }, e.receiptLog = {
                        transactionIndex: l,
                        blockNumber: l,
                        transactionHash: o,
                        address: t,
                        topics: Formatter.arrayOf(o),
                        data: i,
                        logIndex: l,
                        blockHash: o
                    }, e.receipt = {
                        to: Formatter.allowNull(this.address, null),
                        from: Formatter.allowNull(this.address, null),
                        contractAddress: Formatter.allowNull(t, null),
                        transactionIndex: l,
                        root: Formatter.allowNull(a),
                        gasUsed: r,
                        logsBloom: Formatter.allowNull(i),
                        blockHash: o,
                        transactionHash: o,
                        logs: Formatter.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: l,
                        confirmations: Formatter.allowNull(l, null),
                        cumulativeGasUsed: r,
                        effectiveGasPrice: Formatter.allowNull(r),
                        status: Formatter.allowNull(l),
                        type: u
                    }, e.block = {
                        hash: Formatter.allowNull(o),
                        parentHash: o,
                        number: l,
                        timestamp: l,
                        nonce: Formatter.allowNull(a),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: r,
                        gasUsed: r,
                        miner: Formatter.allowNull(t),
                        extraData: i,
                        transactions: Formatter.allowNull(Formatter.arrayOf(o)),
                        baseFeePerGas: Formatter.allowNull(r)
                    }, e.blockWithTransactions = (0, s.DC)(e.block), e.blockWithTransactions.transactions = Formatter.allowNull(Formatter.arrayOf(this.transactionResponse.bind(this))), e.filter = {
                        fromBlock: Formatter.allowNull(n, void 0),
                        toBlock: Formatter.allowNull(n, void 0),
                        blockHash: Formatter.allowNull(o, void 0),
                        address: Formatter.allowNull(t, void 0),
                        topics: Formatter.allowNull(this.topics.bind(this), void 0)
                    }, e.filterLog = {
                        blockNumber: Formatter.allowNull(l),
                        blockHash: Formatter.allowNull(o),
                        transactionIndex: l,
                        removed: Formatter.allowNull(this.boolean.bind(this)),
                        address: t,
                        data: Formatter.allowFalsish(i, "0x"),
                        topics: Formatter.arrayOf(o),
                        transactionHash: o,
                        logIndex: l
                    }, e
                }
                accessList(e) {
                    return (0, a.z7)(e || [])
                }
                number(e) {
                    return "0x" === e ? 0 : i.O$.from(e).toNumber()
                }
                type(e) {
                    return "0x" === e || null == e ? 0 : i.O$.from(e).toNumber()
                }
                bigNumber(e) {
                    return i.O$.from(e)
                }
                boolean(e) {
                    if ("boolean" == typeof e) return e;
                    if ("string" == typeof e) {
                        if ("true" === (e = e.toLowerCase())) return !0;
                        if ("false" === e) return !1
                    }
                    throw Error("invalid boolean - " + e)
                }
                hex(e, t) {
                    return "string" == typeof e && (t || "0x" === e.substring(0, 2) || (e = "0x" + e), (0, o.A7)(e)) ? e.toLowerCase() : c.throwArgumentError("invalid hash", "value", e)
                }
                data(e, t) {
                    let r = this.hex(e, t);
                    if (r.length % 2 != 0) throw Error("invalid data; odd-length - " + e);
                    return r
                }
                address(e) {
                    return (0, n.Kn)(e)
                }
                callAddress(e) {
                    if (!(0, o.A7)(e, 32)) return null;
                    let t = (0, n.Kn)((0, o.p3)(e, 12));
                    return "0x0000000000000000000000000000000000000000" === t ? null : t
                }
                contractAddress(e) {
                    return (0, n.CR)(e)
                }
                blockTag(e) {
                    if (null == e) return "latest";
                    if ("earliest" === e) return "0x0";
                    switch (e) {
                        case "earliest":
                            return "0x0";
                        case "latest":
                        case "pending":
                        case "safe":
                        case "finalized":
                            return e
                    }
                    if ("number" == typeof e || (0, o.A7)(e)) return (0, o.$P)(e);
                    throw Error("invalid blockTag")
                }
                hash(e, t) {
                    let r = this.hex(e, t);
                    return 32 !== (0, o.E1)(r) ? c.throwArgumentError("invalid hash", "value", e) : r
                }
                difficulty(e) {
                    if (null == e) return null;
                    let t = i.O$.from(e);
                    try {
                        return t.toNumber()
                    } catch (e) {}
                    return null
                }
                uint256(e) {
                    if (!(0, o.A7)(e)) throw Error("invalid uint256");
                    return (0, o.$m)(e, 32)
                }
                _block(e, t) {
                    null != e.author && null == e.miner && (e.miner = e.author);
                    let r = null != e._difficulty ? e._difficulty : e.difficulty,
                        n = Formatter.check(t, e);
                    return n._difficulty = null == r ? null : i.O$.from(r), n
                }
                block(e) {
                    return this._block(e, this.formats.block)
                }
                blockWithTransactions(e) {
                    return this._block(e, this.formats.blockWithTransactions)
                }
                transactionRequest(e) {
                    return Formatter.check(this.formats.transactionRequest, e)
                }
                transactionResponse(e) {
                    null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas), e.to && i.O$.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), null != e.input && null == e.data && (e.data = e.input), null == e.to && null == e.creates && (e.creates = this.contractAddress(e)), (1 === e.type || 2 === e.type) && null == e.accessList && (e.accessList = []);
                    let t = Formatter.check(this.formats.transaction, e);
                    if (null != e.chainId) {
                        let r = e.chainId;
                        (0, o.A7)(r) && (r = i.O$.from(r).toNumber()), t.chainId = r
                    } else {
                        let r = e.networkId;
                        null == r && null == t.v && (r = e.chainId), (0, o.A7)(r) && (r = i.O$.from(r).toNumber()), "number" != typeof r && null != t.v && ((r = (t.v - 35) / 2) < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), t.chainId = r
                    }
                    return t.blockHash && "x" === t.blockHash.replace(/0/g, "") && (t.blockHash = null), t
                }
                transaction(e) {
                    return (0, a.Qc)(e)
                }
                receiptLog(e) {
                    return Formatter.check(this.formats.receiptLog, e)
                }
                receipt(e) {
                    let t = Formatter.check(this.formats.receipt, e);
                    if (null != t.root) {
                        if (t.root.length <= 4) {
                            let e = i.O$.from(t.root).toNumber();
                            0 === e || 1 === e ? (null != t.status && t.status !== e && c.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: t.root,
                                status: t.status
                            }), t.status = e, delete t.root) : c.throwArgumentError("invalid alt-root-status", "value.root", t.root)
                        } else 66 !== t.root.length && c.throwArgumentError("invalid root hash", "value.root", t.root)
                    }
                    return null != t.status && (t.byzantium = !0), t
                }
                topics(e) {
                    return Array.isArray(e) ? e.map(e => this.topics(e)) : null != e ? this.hash(e, !0) : null
                }
                filter(e) {
                    return Formatter.check(this.formats.filter, e)
                }
                filterLog(e) {
                    return Formatter.check(this.formats.filterLog, e)
                }
                static check(e, t) {
                    let r = {};
                    for (let n in e) try {
                        let i = e[n](t[n]);
                        void 0 !== i && (r[n] = i)
                    } catch (e) {
                        throw e.checkKey = n, e.checkValue = t[n], e
                    }
                    return r
                }
                static allowNull(e, t) {
                    return function(r) {
                        return null == r ? t : e(r)
                    }
                }
                static allowFalsish(e, t) {
                    return function(r) {
                        return r ? e(r) : t
                    }
                }
                static arrayOf(e) {
                    return function(t) {
                        if (!Array.isArray(t)) throw Error("not an array");
                        let r = [];
                        return t.forEach(function(t) {
                            r.push(e(t))
                        }), r
                    }
                }
            };

            function isCommunityResource(e) {
                return e && "function" == typeof e.isCommunityResource && e.isCommunityResource()
            }
            let h = !1;

            function showThrottleMessage() {
                h || (h = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
            }
        },
        67488: function(e, t, r) {
            "use strict";
            r.d(t, {
                r: function() {
                    return JsonRpcProvider
                }
            });
            var n = r(14941),
                i = r(92598),
                o = r(57273),
                s = r(18994),
                a = r(14184),
                l = r(17213),
                u = r(36288),
                c = r(10996),
                h = r(36339);
            let d = new u.Yd(c.i),
                p = new Uint8Array(32);
            p.fill(0);
            let m = i.O$.from(-1),
                g = i.O$.from(0),
                A = i.O$.from(1),
                y = i.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                v = (0, o.$m)(A.toHexString(), 32),
                b = (0, o.$m)(g.toHexString(), 32),
                w = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                E = ["name", "version", "chainId", "verifyingContract", "salt"];

            function checkString(e) {
                return function(t) {
                    return "string" != typeof t && d.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`, `domain.${e}`, t), t
                }
            }
            let k = {
                name: checkString("name"),
                version: checkString("version"),
                chainId: function(e) {
                    try {
                        return i.O$.from(e).toString()
                    } catch (e) {}
                    return d.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e)
                },
                verifyingContract: function(e) {
                    try {
                        return (0, s.Kn)(e).toLowerCase()
                    } catch (e) {}
                    return d.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e)
                },
                salt: function(e) {
                    try {
                        let t = (0, o.lE)(e);
                        if (32 !== t.length) throw Error("bad length");
                        return (0, o.Dv)(t)
                    } catch (e) {}
                    return d.throwArgumentError('invalid domain value "salt"', "domain.salt", e)
                }
            };

            function getBaseEncoder(e) {
                {
                    let t = e.match(/^(u?)int(\d*)$/);
                    if (t) {
                        let r = "" === t[1],
                            n = parseInt(t[2] || "256");
                        (n % 8 != 0 || n > 256 || t[2] && t[2] !== String(n)) && d.throwArgumentError("invalid numeric width", "type", e);
                        let s = y.mask(r ? n - 1 : n),
                            a = r ? s.add(A).mul(m) : g;
                        return function(t) {
                            let r = i.O$.from(t);
                            return (r.lt(a) || r.gt(s)) && d.throwArgumentError(`value out-of-bounds for ${e}`, "value", t), (0, o.$m)(r.toTwos(256).toHexString(), 32)
                        }
                    }
                } {
                    let t = e.match(/^bytes(\d+)$/);
                    if (t) {
                        let r = parseInt(t[1]);
                        return (0 === r || r > 32 || t[1] !== String(r)) && d.throwArgumentError("invalid bytes width", "type", e),
                            function(t) {
                                let n = (0, o.lE)(t);
                                return n.length !== r && d.throwArgumentError(`invalid length for ${e}`, "value", t),
                                    function(e) {
                                        let t = (0, o.lE)(e),
                                            r = t.length % 32;
                                        return r ? (0, o.xs)([t, p.slice(r)]) : (0, o.Dv)(t)
                                    }(t)
                            }
                    }
                }
                switch (e) {
                    case "address":
                        return function(e) {
                            return (0, o.$m)((0, s.Kn)(e), 32)
                        };
                    case "bool":
                        return function(e) {
                            return e ? v : b
                        };
                    case "bytes":
                        return function(e) {
                            return (0, a.w)(e)
                        };
                    case "string":
                        return function(e) {
                            return (0, h.id)(e)
                        }
                }
                return null
            }

            function encodeType(e, t) {
                return `${e}(${t.map(({name:e,type:t})=>t+" "+e).join(",")})`
            }
            let TypedDataEncoder = class TypedDataEncoder {
                constructor(e) {
                    (0, l.zG)(this, "types", Object.freeze((0, l.p$)(e))), (0, l.zG)(this, "_encoderCache", {}), (0, l.zG)(this, "_types", {});
                    let t = {},
                        r = {},
                        n = {};
                    for (let i in Object.keys(e).forEach(e => {
                            t[e] = {}, r[e] = [], n[e] = {}
                        }), e) {
                        let n = {};
                        e[i].forEach(o => {
                            n[o.name] && d.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(i)}`, "types", e), n[o.name] = !0;
                            let s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            s === i && d.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", e);
                            let a = getBaseEncoder(s);
                            a || (r[s] || d.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", e), r[s].push(i), t[i][s] = !0)
                        })
                    }
                    let i = Object.keys(r).filter(e => 0 === r[e].length);
                    for (let o in 0 === i.length ? d.throwArgumentError("missing primary type", "types", e) : i.length > 1 && d.throwArgumentError(`ambiguous primary types or unused types: ${i.map(e=>JSON.stringify(e)).join(", ")}`, "types", e), (0, l.zG)(this, "primaryType", i[0]), ! function checkCircular(i, o) {
                            o[i] && d.throwArgumentError(`circular type reference to ${JSON.stringify(i)}`, "types", e), o[i] = !0, Object.keys(t[i]).forEach(e => {
                                r[e] && (checkCircular(e, o), Object.keys(o).forEach(t => {
                                    n[t][e] = !0
                                }))
                            }), delete o[i]
                        }(this.primaryType, {}), n) {
                        let t = Object.keys(n[o]);
                        t.sort(), this._types[o] = encodeType(o, e[o]) + t.map(t => encodeType(t, e[t])).join("")
                    }
                }
                getEncoder(e) {
                    let t = this._encoderCache[e];
                    return t || (t = this._encoderCache[e] = this._getEncoder(e)), t
                }
                _getEncoder(e) {
                    {
                        let t = getBaseEncoder(e);
                        if (t) return t
                    }
                    let t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (t) {
                        let e = t[1],
                            r = this.getEncoder(e),
                            n = parseInt(t[3]);
                        return t => {
                            n >= 0 && t.length !== n && d.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t);
                            let i = t.map(r);
                            return this._types[e] && (i = i.map(a.w)), (0, a.w)((0, o.xs)(i))
                        }
                    }
                    let r = this.types[e];
                    if (r) {
                        let t = (0, h.id)(this._types[e]);
                        return e => {
                            let n = r.map(({
                                name: t,
                                type: r
                            }) => {
                                let n = this.getEncoder(r)(e[t]);
                                return this._types[r] ? (0, a.w)(n) : n
                            });
                            return n.unshift(t), (0, o.xs)(n)
                        }
                    }
                    return d.throwArgumentError(`unknown type: ${e}`, "type", e)
                }
                encodeType(e) {
                    let t = this._types[e];
                    return t || d.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), t
                }
                encodeData(e, t) {
                    return this.getEncoder(e)(t)
                }
                hashStruct(e, t) {
                    return (0, a.w)(this.encodeData(e, t))
                }
                encode(e) {
                    return this.encodeData(this.primaryType, e)
                }
                hash(e) {
                    return this.hashStruct(this.primaryType, e)
                }
                _visit(e, t, r) {
                    {
                        let n = getBaseEncoder(e);
                        if (n) return r(e, t)
                    }
                    let n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        let e = n[1],
                            i = parseInt(n[3]);
                        return i >= 0 && t.length !== i && d.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map(t => this._visit(e, t, r))
                    }
                    let i = this.types[e];
                    return i ? i.reduce((e, {
                        name: n,
                        type: i
                    }) => (e[n] = this._visit(i, t[n], r), e), {}) : d.throwArgumentError(`unknown type: ${e}`, "type", e)
                }
                visit(e, t) {
                    return this._visit(this.primaryType, e, t)
                }
                static from(e) {
                    return new TypedDataEncoder(e)
                }
                static getPrimaryType(e) {
                    return TypedDataEncoder.from(e).primaryType
                }
                static hashStruct(e, t, r) {
                    return TypedDataEncoder.from(t).hashStruct(e, r)
                }
                static hashDomain(e) {
                    let t = [];
                    for (let r in e) {
                        let n = w[r];
                        n || d.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), t.push({
                            name: r,
                            type: n
                        })
                    }
                    return t.sort((e, t) => E.indexOf(e.name) - E.indexOf(t.name)), TypedDataEncoder.hashStruct("EIP712Domain", {
                        EIP712Domain: t
                    }, e)
                }
                static encode(e, t, r) {
                    return (0, o.xs)(["0x1901", TypedDataEncoder.hashDomain(e), TypedDataEncoder.from(t).hash(r)])
                }
                static hash(e, t, r) {
                    return (0, a.w)(TypedDataEncoder.encode(e, t, r))
                }
                static resolveNames(e, t, r, n) {
                    var i, s, a, u;
                    return i = this, s = void 0, a = void 0, u = function*() {
                        e = (0, l.DC)(e);
                        let i = {};
                        e.verifyingContract && !(0, o.A7)(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
                        let s = TypedDataEncoder.from(t);
                        for (let e in s.visit(r, (e, t) => ("address" !== e || (0, o.A7)(t, 20) || (i[t] = "0x"), t)), i) i[e] = yield n(e);
                        return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), {
                            domain: e,
                            value: r = s.visit(r, (e, t) => "address" === e && i[t] ? i[t] : t)
                        }
                    }, new(a || (a = Promise))(function(e, t) {
                        function fulfilled(e) {
                            try {
                                step(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function step(t) {
                            var r;
                            t.done ? e(t.value) : ((r = t.value) instanceof a ? r : new a(function(e) {
                                e(r)
                            })).then(fulfilled, rejected)
                        }
                        step((u = u.apply(i, s || [])).next())
                    })
                }
                static getPayload(e, t, r) {
                    TypedDataEncoder.hashDomain(e);
                    let n = {},
                        s = [];
                    E.forEach(t => {
                        let r = e[t];
                        null != r && (n[t] = k[t](r), s.push({
                            name: t,
                            type: w[t]
                        }))
                    });
                    let a = TypedDataEncoder.from(t),
                        u = (0, l.DC)(t);
                    return u.EIP712Domain ? d.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : u.EIP712Domain = s, a.encode(r), {
                        types: u,
                        domain: n,
                        primaryType: a.primaryType,
                        message: a.visit(r, (e, t) => {
                            if (e.match(/^bytes(\d*)/)) return (0, o.Dv)((0, o.lE)(t));
                            if (e.match(/^u?int/)) return i.O$.from(t).toString();
                            switch (e) {
                                case "address":
                                    return t.toLowerCase();
                                case "bool":
                                    return !!t;
                                case "string":
                                    return "string" != typeof t && d.throwArgumentError("invalid string", "value", t), t
                            }
                            return d.throwArgumentError("unsupported type", "type", e)
                        })
                    }
                }
            };
            var _ = r(58337),
                P = r(52501),
                C = r(39318),
                S = r(12312),
                N = r(60366),
                json_rpc_provider_awaiter = function(e, t, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function fulfilled(e) {
                            try {
                                step(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(n.throw(e))
                            } catch (e) {
                                o(e)
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
            let I = new u.Yd(S.i),
                x = ["call", "estimateGas"];

            function spelunk(e, t) {
                if (null == e) return null;
                if ("string" == typeof e.message && e.message.match("reverted")) {
                    let r = (0, o.A7)(e.data) ? e.data : null;
                    if (!t || r) return {
                        message: e.message,
                        data: r
                    }
                }
                if ("object" == typeof e) {
                    for (let r in e) {
                        let n = spelunk(e[r], t);
                        if (n) return n
                    }
                    return null
                }
                if ("string" == typeof e) try {
                    return spelunk(JSON.parse(e), t)
                } catch (e) {}
                return null
            }

            function checkError(e, t, r) {
                let n = r.transaction || r.signedTransaction;
                if ("call" === e) {
                    let e = spelunk(t, !0);
                    if (e) return e.data;
                    I.throwError("missing revert data in call exception; Transaction reverted without a reason string", u.Yd.errors.CALL_EXCEPTION, {
                        data: "0x",
                        transaction: n,
                        error: t
                    })
                }
                if ("estimateGas" === e) {
                    let r = spelunk(t.body, !1);
                    null == r && (r = spelunk(t, !1)), r && I.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", u.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                        reason: r.message,
                        method: e,
                        transaction: n,
                        error: t
                    })
                }
                let i = t.message;
                throw t.code === u.Yd.errors.SERVER_ERROR && t.error && "string" == typeof t.error.message ? i = t.error.message : "string" == typeof t.body ? i = t.body : "string" == typeof t.responseText && (i = t.responseText), (i = (i || "").toLowerCase()).match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && I.throwError("insufficient funds for intrinsic transaction cost", u.Yd.errors.INSUFFICIENT_FUNDS, {
                    error: t,
                    method: e,
                    transaction: n
                }), i.match(/nonce (is )?too low/i) && I.throwError("nonce has already been used", u.Yd.errors.NONCE_EXPIRED, {
                    error: t,
                    method: e,
                    transaction: n
                }), i.match(/replacement transaction underpriced|transaction gas price.*too low/i) && I.throwError("replacement fee too low", u.Yd.errors.REPLACEMENT_UNDERPRICED, {
                    error: t,
                    method: e,
                    transaction: n
                }), i.match(/only replay-protected/i) && I.throwError("legacy pre-eip-155 transactions not supported", u.Yd.errors.UNSUPPORTED_OPERATION, {
                    error: t,
                    method: e,
                    transaction: n
                }), x.indexOf(e) >= 0 && i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && I.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", u.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: t,
                    method: e,
                    transaction: n
                }), t
            }

            function timer(e) {
                return new Promise(function(t) {
                    setTimeout(t, e)
                })
            }

            function getResult(e) {
                if (e.error) {
                    let t = Error(e.error.message);
                    throw t.code = e.error.code, t.data = e.error.data, t
                }
                return e.result
            }

            function getLowerCase(e) {
                return e ? e.toLowerCase() : e
            }
            let B = {};
            let JsonRpcSigner = class JsonRpcSigner extends n.E {
                constructor(e, t, r) {
                    if (super(), e !== B) throw Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                    (0, l.zG)(this, "provider", t), null == r && (r = 0), "string" == typeof r ? ((0, l.zG)(this, "_address", this.provider.formatter.address(r)), (0, l.zG)(this, "_index", null)) : "number" == typeof r ? ((0, l.zG)(this, "_index", r), (0, l.zG)(this, "_address", null)) : I.throwArgumentError("invalid address or index", "addressOrIndex", r)
                }
                connect(e) {
                    return I.throwError("cannot alter JSON-RPC Signer connection", u.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "connect"
                    })
                }
                connectUnchecked() {
                    return new UncheckedJsonRpcSigner(B, this.provider, this._address || this._index)
                }
                getAddress() {
                    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(e => (e.length <= this._index && I.throwError("unknown account #" + this._index, u.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress"
                    }), this.provider.formatter.address(e[this._index])))
                }
                sendUncheckedTransaction(e) {
                    e = (0, l.DC)(e);
                    let t = this.getAddress().then(e => (e && (e = e.toLowerCase()), e));
                    if (null == e.gasLimit) {
                        let r = (0, l.DC)(e);
                        r.from = t, e.gasLimit = this.provider.estimateGas(r)
                    }
                    return null != e.to && (e.to = Promise.resolve(e.to).then(e => json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                        if (null == e) return null;
                        let t = yield this.provider.resolveName(e);
                        return null == t && I.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
                    }))), (0, l.mE)({
                        tx: (0, l.mE)(e),
                        sender: t
                    }).then(({
                        tx: t,
                        sender: r
                    }) => {
                        null != t.from ? t.from.toLowerCase() !== r && I.throwArgumentError("from address mismatch", "transaction", e) : t.from = r;
                        let n = this.provider.constructor.hexlifyTransaction(t, {
                            from: !0
                        });
                        return this.provider.send("eth_sendTransaction", [n]).then(e => e, e => ("string" == typeof e.message && e.message.match(/user denied/i) && I.throwError("user rejected transaction", u.Yd.errors.ACTION_REJECTED, {
                            action: "sendTransaction",
                            transaction: t
                        }), checkError("sendTransaction", e, n)))
                    })
                }
                signTransaction(e) {
                    return I.throwError("signing transactions is unsupported", u.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "signTransaction"
                    })
                }
                sendTransaction(e) {
                    return json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                        let t = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(e);
                        try {
                            return yield(0, C.$l)(() => json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                                let e = yield this.provider.getTransaction(r);
                                if (null !== e) return this.provider._wrapTransaction(e, r, t)
                            }), {
                                oncePoll: this.provider
                            })
                        } catch (e) {
                            throw e.transactionHash = r, e
                        }
                    })
                }
                signMessage(e) {
                    return json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                        let t = "string" == typeof e ? (0, _.Y0)(e) : e,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("personal_sign", [(0, o.Dv)(t), r.toLowerCase()])
                        } catch (t) {
                            throw "string" == typeof t.message && t.message.match(/user denied/i) && I.throwError("user rejected signing", u.Yd.errors.ACTION_REJECTED, {
                                action: "signMessage",
                                from: r,
                                messageData: e
                            }), t
                        }
                    })
                }
                _legacySignMessage(e) {
                    return json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                        let t = "string" == typeof e ? (0, _.Y0)(e) : e,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_sign", [r.toLowerCase(), (0, o.Dv)(t)])
                        } catch (t) {
                            throw "string" == typeof t.message && t.message.match(/user denied/i) && I.throwError("user rejected signing", u.Yd.errors.ACTION_REJECTED, {
                                action: "_legacySignMessage",
                                from: r,
                                messageData: e
                            }), t
                        }
                    })
                }
                _signTypedData(e, t, r) {
                    return json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                        let n = yield TypedDataEncoder.resolveNames(e, t, r, e => this.provider.resolveName(e)), i = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_signTypedData_v4", [i.toLowerCase(), JSON.stringify(TypedDataEncoder.getPayload(n.domain, t, n.value))])
                        } catch (e) {
                            throw "string" == typeof e.message && e.message.match(/user denied/i) && I.throwError("user rejected signing", u.Yd.errors.ACTION_REJECTED, {
                                action: "_signTypedData",
                                from: i,
                                messageData: {
                                    domain: n.domain,
                                    types: t,
                                    value: n.value
                                }
                            }), e
                        }
                    })
                }
                unlock(e) {
                    return json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                        let t = this.provider,
                            r = yield this.getAddress();
                        return t.send("personal_unlockAccount", [r.toLowerCase(), e, null])
                    })
                }
            };
            let UncheckedJsonRpcSigner = class UncheckedJsonRpcSigner extends JsonRpcSigner {
                sendTransaction(e) {
                    return this.sendUncheckedTransaction(e).then(e => ({
                        hash: e,
                        nonce: null,
                        gasLimit: null,
                        gasPrice: null,
                        data: null,
                        value: null,
                        chainId: null,
                        confirmations: 0,
                        from: null,
                        wait: t => this.provider.waitForTransaction(e, t)
                    }))
                }
            };
            let R = {
                chainId: !0,
                data: !0,
                gasLimit: !0,
                gasPrice: !0,
                nonce: !0,
                to: !0,
                value: !0,
                type: !0,
                accessList: !0,
                maxFeePerGas: !0,
                maxPriorityFeePerGas: !0
            };
            let JsonRpcProvider = class JsonRpcProvider extends N.Zk {
                constructor(e, t) {
                    let r = t;
                    null == r && (r = new Promise((e, t) => {
                        setTimeout(() => {
                            this.detectNetwork().then(t => {
                                e(t)
                            }, e => {
                                t(e)
                            })
                        }, 0)
                    })), super(r), e || (e = (0, l.tu)(this.constructor, "defaultUrl")()), "string" == typeof e ? (0, l.zG)(this, "connection", Object.freeze({
                        url: e
                    })) : (0, l.zG)(this, "connection", Object.freeze((0, l.DC)(e))), this._nextId = 42
                }
                get _cache() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
                }
                static defaultUrl() {
                    return "http://localhost:8545"
                }
                detectNetwork() {
                    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
                        this._cache.detectNetwork = null
                    }, 0)), this._cache.detectNetwork
                }
                _uncachedDetectNetwork() {
                    return json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                        yield timer(0);
                        let e = null;
                        try {
                            e = yield this.send("eth_chainId", [])
                        } catch (t) {
                            try {
                                e = yield this.send("net_version", [])
                            } catch (e) {}
                        }
                        if (null != e) {
                            let t = (0, l.tu)(this.constructor, "getNetwork");
                            try {
                                return t(i.O$.from(e).toNumber())
                            } catch (t) {
                                return I.throwError("could not detect network", u.Yd.errors.NETWORK_ERROR, {
                                    chainId: e,
                                    event: "invalidNetwork",
                                    serverError: t
                                })
                            }
                        }
                        return I.throwError("could not detect network", u.Yd.errors.NETWORK_ERROR, {
                            event: "noNetwork"
                        })
                    })
                }
                getSigner(e) {
                    return new JsonRpcSigner(B, this, e)
                }
                getUncheckedSigner(e) {
                    return this.getSigner(e).connectUnchecked()
                }
                listAccounts() {
                    return this.send("eth_accounts", []).then(e => e.map(e => this.formatter.address(e)))
                }
                send(e, t) {
                    let r = {
                        method: e,
                        params: t,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "request",
                        request: (0, l.p$)(r),
                        provider: this
                    });
                    let n = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
                    if (n && this._cache[e]) return this._cache[e];
                    let i = (0, C.rd)(this.connection, JSON.stringify(r), getResult).then(e => (this.emit("debug", {
                        action: "response",
                        request: r,
                        response: e,
                        provider: this
                    }), e), e => {
                        throw this.emit("debug", {
                            action: "response",
                            error: e,
                            request: r,
                            provider: this
                        }), e
                    });
                    return n && (this._cache[e] = i, setTimeout(() => {
                        this._cache[e] = null
                    }, 0)), i
                }
                prepareRequest(e, t) {
                    switch (e) {
                        case "getBlockNumber":
                            return ["eth_blockNumber", []];
                        case "getGasPrice":
                            return ["eth_gasPrice", []];
                        case "getBalance":
                            return ["eth_getBalance", [getLowerCase(t.address), t.blockTag]];
                        case "getTransactionCount":
                            return ["eth_getTransactionCount", [getLowerCase(t.address), t.blockTag]];
                        case "getCode":
                            return ["eth_getCode", [getLowerCase(t.address), t.blockTag]];
                        case "getStorageAt":
                            return ["eth_getStorageAt", [getLowerCase(t.address), (0, o.$m)(t.position, 32), t.blockTag]];
                        case "sendTransaction":
                            return ["eth_sendRawTransaction", [t.signedTransaction]];
                        case "getBlock":
                            if (t.blockTag) return ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]];
                            if (t.blockHash) return ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]];
                            break;
                        case "getTransaction":
                            return ["eth_getTransactionByHash", [t.transactionHash]];
                        case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [t.transactionHash]];
                        case "call":
                            {
                                let e = (0, l.tu)(this.constructor, "hexlifyTransaction");
                                return ["eth_call", [e(t.transaction, {
                                    from: !0
                                }), t.blockTag]]
                            }
                        case "estimateGas":
                            {
                                let e = (0, l.tu)(this.constructor, "hexlifyTransaction");
                                return ["eth_estimateGas", [e(t.transaction, {
                                    from: !0
                                })]]
                            }
                        case "getLogs":
                            return t.filter && null != t.filter.address && (t.filter.address = getLowerCase(t.filter.address)), ["eth_getLogs", [t.filter]]
                    }
                    return null
                }
                perform(e, t) {
                    return json_rpc_provider_awaiter(this, void 0, void 0, function*() {
                        if ("call" === e || "estimateGas" === e) {
                            let e = t.transaction;
                            if (e && null != e.type && i.O$.from(e.type).isZero() && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                                let r = yield this.getFeeData();
                                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((t = (0, l.DC)(t)).transaction = (0, l.DC)(e), delete t.transaction.type)
                            }
                        }
                        let r = this.prepareRequest(e, t);
                        null == r && I.throwError(e + " not implemented", u.Yd.errors.NOT_IMPLEMENTED, {
                            operation: e
                        });
                        try {
                            return yield this.send(r[0], r[1])
                        } catch (r) {
                            return checkError(e, r, t)
                        }
                    })
                }
                _startEvent(e) {
                    "pending" === e.tag && this._startPending(), super._startEvent(e)
                }
                _startPending() {
                    if (null != this._pendingFilter) return;
                    let e = this,
                        t = this.send("eth_newPendingTransactionFilter", []);
                    this._pendingFilter = t, t.then(function(r) {
                        return function poll() {
                            e.send("eth_getFilterChanges", [r]).then(function(r) {
                                if (e._pendingFilter != t) return null;
                                let n = Promise.resolve();
                                return r.forEach(function(t) {
                                    e._emitted["t:" + t.toLowerCase()] = "pending", n = n.then(function() {
                                        return e.getTransaction(t).then(function(t) {
                                            return e.emit("pending", t), null
                                        })
                                    })
                                }), n.then(function() {
                                    return timer(1e3)
                                })
                            }).then(function() {
                                if (e._pendingFilter != t) {
                                    e.send("eth_uninstallFilter", [r]);
                                    return
                                }
                                return setTimeout(function() {
                                    poll()
                                }, 0), null
                            }).catch(e => {})
                        }(), r
                    }).catch(e => {})
                }
                _stopEvent(e) {
                    "pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(e)
                }
                static hexlifyTransaction(e, t) {
                    let r = (0, l.DC)(R);
                    if (t)
                        for (let e in t) t[e] && (r[e] = !0);
                    (0, l.uj)(e, r);
                    let n = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function(t) {
                        if (null == e[t]) return;
                        let r = (0, o.$P)(i.O$.from(e[t]));
                        "gasLimit" === t && (t = "gas"), n[t] = r
                    }), ["from", "to", "data"].forEach(function(t) {
                        null != e[t] && (n[t] = (0, o.Dv)(e[t]))
                    }), e.accessList && (n.accessList = (0, P.z7)(e.accessList)), n
                }
            }
        },
        7054: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return decode
                },
                c: function() {
                    return encode
                }
            });
            var n = r(57273),
                i = r(36288);
            let o = new i.Yd("rlp/5.7.0");

            function arrayifyInteger(e) {
                let t = [];
                for (; e;) t.unshift(255 & e), e >>= 8;
                return t
            }

            function unarrayifyInteger(e, t, r) {
                let n = 0;
                for (let i = 0; i < r; i++) n = 256 * n + e[t + i];
                return n
            }

            function encode(e) {
                return (0, n.Dv)(function _encode(e) {
                    if (Array.isArray(e)) {
                        let t = [];
                        if (e.forEach(function(e) {
                                t = t.concat(_encode(e))
                            }), t.length <= 55) return t.unshift(192 + t.length), t;
                        let r = arrayifyInteger(t.length);
                        return r.unshift(247 + r.length), r.concat(t)
                    }(0, n.Zq)(e) || o.throwArgumentError("RLP object must be BytesLike", "object", e);
                    let t = Array.prototype.slice.call((0, n.lE)(e));
                    if (1 === t.length && t[0] <= 127) return t;
                    if (t.length <= 55) return t.unshift(128 + t.length), t;
                    let r = arrayifyInteger(t.length);
                    return r.unshift(183 + r.length), r.concat(t)
                }(e))
            }

            function _decodeChildren(e, t, r, n) {
                let s = [];
                for (; r < t + 1 + n;) {
                    let a = _decode(e, r);
                    s.push(a.result), (r += a.consumed) > t + 1 + n && o.throwError("child data too short", i.Yd.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + n,
                    result: s
                }
            }

            function _decode(e, t) {
                if (0 === e.length && o.throwError("data too short", i.Yd.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
                    let r = e[t] - 247;
                    t + 1 + r > e.length && o.throwError("data short segment too short", i.Yd.errors.BUFFER_OVERRUN, {});
                    let n = unarrayifyInteger(e, t + 1, r);
                    return t + 1 + r + n > e.length && o.throwError("data long segment too short", i.Yd.errors.BUFFER_OVERRUN, {}), _decodeChildren(e, t, t + 1 + r, r + n)
                }
                if (e[t] >= 192) {
                    let r = e[t] - 192;
                    return t + 1 + r > e.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {}), _decodeChildren(e, t, t + 1, r)
                }
                if (e[t] >= 184) {
                    let r = e[t] - 183;
                    t + 1 + r > e.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {});
                    let s = unarrayifyInteger(e, t + 1, r);
                    t + 1 + r + s > e.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {});
                    let a = (0, n.Dv)(e.slice(t + 1 + r, t + 1 + r + s));
                    return {
                        consumed: 1 + r + s,
                        result: a
                    }
                }
                if (e[t] >= 128) {
                    let r = e[t] - 128;
                    t + 1 + r > e.length && o.throwError("data too short", i.Yd.errors.BUFFER_OVERRUN, {});
                    let s = (0, n.Dv)(e.slice(t + 1, t + 1 + r));
                    return {
                        consumed: 1 + r,
                        result: s
                    }
                }
                return {
                    consumed: 1,
                    result: (0, n.Dv)(e[t])
                }
            }

            function decode(e) {
                let t = (0, n.lE)(e),
                    r = _decode(t, 0);
                return r.consumed !== t.length && o.throwArgumentError("invalid rlp data", "data", e), r.result
            }
        },
        58337: function(e, t, r) {
            "use strict";
            r.d(t, {
                Y0: function() {
                    return toUtf8Bytes
                },
                XL: function() {
                    return toUtf8CodePoints
                },
                ZN: function() {
                    return toUtf8String
                }
            });
            var n, i, o, s, a = r(57273),
                l = r(36288);
            let u = new l.Yd("strings/5.7.0");

            function ignoreFunc(e, t, r, n, i) {
                if (e === s.BAD_PREFIX || e === s.UNEXPECTED_CONTINUE) {
                    let e = 0;
                    for (let n = t + 1; n < r.length && r[n] >> 6 == 2; n++) e++;
                    return e
                }
                return e === s.OVERRUN ? r.length - t - 1 : 0
            }(n = o || (o = {})).current = "", n.NFC = "NFC", n.NFD = "NFD", n.NFKC = "NFKC", n.NFKD = "NFKD", (i = s || (s = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte", i.BAD_PREFIX = "bad codepoint prefix", i.OVERRUN = "string overrun", i.MISSING_CONTINUE = "missing continuation byte", i.OUT_OF_RANGE = "out of UTF-8 range", i.UTF16_SURROGATE = "UTF-16 surrogate", i.OVERLONG = "overlong representation";
            let c = Object.freeze({
                error: function(e, t, r, n, i) {
                    return u.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r)
                },
                ignore: ignoreFunc,
                replace: function(e, t, r, n, i) {
                    return e === s.OVERLONG ? (n.push(i), 0) : (n.push(65533), ignoreFunc(e, t, r, n, i))
                }
            });

            function getUtf8CodePoints(e, t) {
                null == t && (t = c.error), e = (0, a.lE)(e);
                let r = [],
                    n = 0;
                for (; n < e.length;) {
                    let i = e[n++];
                    if (i >> 7 == 0) {
                        r.push(i);
                        continue
                    }
                    let o = null,
                        a = null;
                    if ((224 & i) == 192) o = 1, a = 127;
                    else if ((240 & i) == 224) o = 2, a = 2047;
                    else if ((248 & i) == 240) o = 3, a = 65535;
                    else {
                        (192 & i) == 128 ? n += t(s.UNEXPECTED_CONTINUE, n - 1, e, r) : n += t(s.BAD_PREFIX, n - 1, e, r);
                        continue
                    }
                    if (n - 1 + o >= e.length) {
                        n += t(s.OVERRUN, n - 1, e, r);
                        continue
                    }
                    let l = i & (1 << 8 - o - 1) - 1;
                    for (let i = 0; i < o; i++) {
                        let i = e[n];
                        if ((192 & i) != 128) {
                            n += t(s.MISSING_CONTINUE, n, e, r), l = null;
                            break
                        }
                        l = l << 6 | 63 & i, n++
                    }
                    if (null !== l) {
                        if (l > 1114111) {
                            n += t(s.OUT_OF_RANGE, n - 1 - o, e, r, l);
                            continue
                        }
                        if (l >= 55296 && l <= 57343) {
                            n += t(s.UTF16_SURROGATE, n - 1 - o, e, r, l);
                            continue
                        }
                        if (l <= a) {
                            n += t(s.OVERLONG, n - 1 - o, e, r, l);
                            continue
                        }
                        r.push(l)
                    }
                }
                return r
            }

            function toUtf8Bytes(e, t = o.current) {
                t != o.current && (u.checkNormalize(), e = e.normalize(t));
                let r = [];
                for (let t = 0; t < e.length; t++) {
                    let n = e.charCodeAt(t);
                    if (n < 128) r.push(n);
                    else if (n < 2048) r.push(n >> 6 | 192), r.push(63 & n | 128);
                    else if ((64512 & n) == 55296) {
                        t++;
                        let i = e.charCodeAt(t);
                        if (t >= e.length || (64512 & i) != 56320) throw Error("invalid utf-8 string");
                        let o = 65536 + ((1023 & n) << 10) + (1023 & i);
                        r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                    } else r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)
                }
                return (0, a.lE)(r)
            }

            function toUtf8String(e, t) {
                return getUtf8CodePoints(e, t).map(e => e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10 & 1023) + 55296, (1023 & e) + 56320)).join("")
            }

            function toUtf8CodePoints(e, t = o.current) {
                return getUtf8CodePoints(toUtf8Bytes(e, t))
            }
        },
        52501: function(e, t, r) {
            "use strict";
            r.d(t, {
                z7: function() {
                    return accessListify
                },
                Qc: function() {
                    return parse
                }
            });
            var n, i, o = r(18994),
                s = r(92598),
                a = r(57273),
                l = r(53690),
                u = r(14184),
                c = r(7054),
                h = r(56662),
                d = r.n(h),
                p = r(55336),
                m = r.n(p);

            function createCommonjsModule(e, t, r) {
                return e(r = {
                    path: t,
                    exports: {},
                    require: function(e, t) {
                        return function() {
                            throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(e, null == t ? r.path : t)
                    }
                }, r.exports), r.exports
            }
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
            var g = assert;

            function assert(e, t) {
                if (!e) throw Error(t || "Assertion failed")
            }
            assert.equal = function(e, t, r) {
                if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t)
            };
            var A = createCommonjsModule(function(e, t) {
                    function zero2(e) {
                        return 1 === e.length ? "0" + e : e
                    }

                    function toHex(e) {
                        for (var t = "", r = 0; r < e.length; r++) t += zero2(e[r].toString(16));
                        return t
                    }
                    t.toArray = function(e, t) {
                        if (Array.isArray(e)) return e.slice();
                        if (!e) return [];
                        var r = [];
                        if ("string" != typeof e) {
                            for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
                            return r
                        }
                        if ("hex" === t) {
                            (e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e);
                            for (var n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
                        } else
                            for (var n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n),
                                    o = i >> 8,
                                    s = 255 & i;
                                o ? r.push(o, s) : r.push(s)
                            }
                        return r
                    }, t.zero2 = zero2, t.toHex = toHex, t.encode = function(e, t) {
                        return "hex" === t ? toHex(e) : e
                    }
                }),
                y = createCommonjsModule(function(e, t) {
                    t.assert = g, t.toArray = A.toArray, t.zero2 = A.zero2, t.toHex = A.toHex, t.encode = A.encode, t.getNAF = function(e, t, r) {
                        var n = Array(Math.max(e.bitLength(), r) + 1);
                        n.fill(0);
                        for (var i = 1 << t + 1, o = e.clone(), s = 0; s < n.length; s++) {
                            var a, l = o.andln(i - 1);
                            o.isOdd() ? (a = l > (i >> 1) - 1 ? (i >> 1) - l : l, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                        }
                        return n
                    }, t.getJSF = function(e, t) {
                        var r = [
                            [],
                            []
                        ];
                        e = e.clone(), t = t.clone();
                        for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0;) {
                            var o, s, a, l = e.andln(3) + n & 3,
                                u = t.andln(3) + i & 3;
                            3 === l && (l = -1), 3 === u && (u = -1), s = (1 & l) == 0 ? 0 : (3 == (o = e.andln(7) + n & 7) || 5 === o) && 2 === u ? -l : l, r[0].push(s), a = (1 & u) == 0 ? 0 : (3 == (o = t.andln(7) + i & 7) || 5 === o) && 2 === l ? -u : u, r[1].push(a), 2 * n === s + 1 && (n = 1 - n), 2 * i === a + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1)
                        }
                        return r
                    }, t.cachedProperty = function(e, t, r) {
                        var n = "_" + t;
                        e.prototype[t] = function() {
                            return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                        }
                    }, t.parseBytes = function(e) {
                        return "string" == typeof e ? t.toArray(e, "hex") : e
                    }, t.intFromLE = function(e) {
                        return new(d())(e, "hex", "le")
                    }
                }),
                v = y.getNAF,
                b = y.getJSF,
                w = y.assert;

            function BaseCurve(e, t) {
                this.type = e, this.p = new(d())(t.p, 16), this.red = t.prime ? d().red(t.prime) : d().mont(this.p), this.zero = new(d())(0).toRed(this.red), this.one = new(d())(1).toRed(this.red), this.two = new(d())(2).toRed(this.red), this.n = t.n && new(d())(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function BasePoint(e, t) {
                this.curve = e, this.type = t, this.precomputed = null
            }
            BaseCurve.prototype.point = function() {
                throw Error("Not implemented")
            }, BaseCurve.prototype.validate = function() {
                throw Error("Not implemented")
            }, BaseCurve.prototype._fixedNafMul = function(e, t) {
                w(e.precomputed);
                var r, n, i = e._getDoubles(),
                    o = v(t, 1, this._bitLength),
                    s = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
                s /= 3;
                var a = [];
                for (r = 0; r < o.length; r += i.step) {
                    n = 0;
                    for (var l = r + i.step - 1; l >= r; l--) n = (n << 1) + o[l];
                    a.push(n)
                }
                for (var u = this.jpoint(null, null, null), c = this.jpoint(null, null, null), h = s; h > 0; h--) {
                    for (r = 0; r < a.length; r++)(n = a[r]) === h ? c = c.mixedAdd(i.points[r]) : n === -h && (c = c.mixedAdd(i.points[r].neg()));
                    u = u.add(c)
                }
                return u.toP()
            }, BaseCurve.prototype._wnafMul = function(e, t) {
                var r = 4,
                    n = e._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, o = v(t, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                    for (var l = 0; a >= 0 && 0 === o[a]; a--) l++;
                    if (a >= 0 && l++, s = s.dblp(l), a < 0) break;
                    var u = o[a];
                    w(0 !== u), s = "affine" === e.type ? u > 0 ? s.mixedAdd(i[u - 1 >> 1]) : s.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? s.add(i[u - 1 >> 1]) : s.add(i[-u - 1 >> 1].neg())
                }
                return "affine" === e.type ? s.toP() : s
            }, BaseCurve.prototype._wnafMulAdd = function(e, t, r, n, i) {
                var o, s, a, l = this._wnafT1,
                    u = this._wnafT2,
                    c = this._wnafT3,
                    h = 0;
                for (o = 0; o < n; o++) {
                    var d = (a = t[o])._getNAFPoints(e);
                    l[o] = d.wnd, u[o] = d.points
                }
                for (o = n - 1; o >= 1; o -= 2) {
                    var p = o - 1,
                        m = o;
                    if (1 !== l[p] || 1 !== l[m]) {
                        c[p] = v(r[p], l[p], this._bitLength), c[m] = v(r[m], l[m], this._bitLength), h = Math.max(c[p].length, h), h = Math.max(c[m].length, h);
                        continue
                    }
                    var g = [t[p], null, null, t[m]];
                    0 === t[p].y.cmp(t[m].y) ? (g[1] = t[p].add(t[m]), g[2] = t[p].toJ().mixedAdd(t[m].neg())) : 0 === t[p].y.cmp(t[m].y.redNeg()) ? (g[1] = t[p].toJ().mixedAdd(t[m]), g[2] = t[p].add(t[m].neg())) : (g[1] = t[p].toJ().mixedAdd(t[m]), g[2] = t[p].toJ().mixedAdd(t[m].neg()));
                    var A = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        y = b(r[p], r[m]);
                    for (s = 0, h = Math.max(y[0].length, h), c[p] = Array(h), c[m] = Array(h); s < h; s++) {
                        var w = 0 | y[0][s],
                            E = 0 | y[1][s];
                        c[p][s] = A[(w + 1) * 3 + (E + 1)], c[m][s] = 0, u[p] = g
                    }
                }
                var k = this.jpoint(null, null, null),
                    _ = this._wnafT4;
                for (o = h; o >= 0; o--) {
                    for (var P = 0; o >= 0;) {
                        var C = !0;
                        for (s = 0; s < n; s++) _[s] = 0 | c[s][o], 0 !== _[s] && (C = !1);
                        if (!C) break;
                        P++, o--
                    }
                    if (o >= 0 && P++, k = k.dblp(P), o < 0) break;
                    for (s = 0; s < n; s++) {
                        var S = _[s];
                        0 !== S && (S > 0 ? a = u[s][S - 1 >> 1] : S < 0 && (a = u[s][-S - 1 >> 1].neg()), k = "affine" === a.type ? k.mixedAdd(a) : k.add(a))
                    }
                }
                for (o = 0; o < n; o++) u[o] = null;
                return i ? k : k.toP()
            }, BaseCurve.BasePoint = BasePoint, BasePoint.prototype.eq = function() {
                throw Error("Not implemented")
            }, BasePoint.prototype.validate = function() {
                return this.curve.validate(this)
            }, BaseCurve.prototype.decodePoint = function(e, t) {
                e = y.toArray(e, t);
                var r = this.p.byteLength();
                if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? w(e[e.length - 1] % 2 == 0) : 7 === e[0] && w(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                throw Error("Unknown point format")
            }, BasePoint.prototype.encodeCompressed = function(e) {
                return this.encode(e, !0)
            }, BasePoint.prototype._encode = function(e) {
                var t = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", t);
                return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
            }, BasePoint.prototype.encode = function(e, t) {
                return y.encode(this._encode(t), e)
            }, BasePoint.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var t = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
            }, BasePoint.prototype._hasDoubles = function(e) {
                if (!this.precomputed) return !1;
                var t = this.precomputed.doubles;
                return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
            }, BasePoint.prototype._getDoubles = function(e, t) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < t; i += e) {
                    for (var o = 0; o < e; o++) n = n.dbl();
                    r.push(n)
                }
                return {
                    step: e,
                    points: r
                }
            }, BasePoint.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
                return {
                    wnd: e,
                    points: t
                }
            }, BasePoint.prototype._getBeta = function() {
                return null
            }, BasePoint.prototype.dblp = function(e) {
                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                return t
            };
            var E = createCommonjsModule(function(e) {
                    "function" == typeof Object.create ? e.exports = function(e, t) {
                        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : e.exports = function(e, t) {
                        if (t) {
                            e.super_ = t;
                            var TempCtor = function() {};
                            TempCtor.prototype = t.prototype, e.prototype = new TempCtor, e.prototype.constructor = e
                        }
                    }
                }),
                k = y.assert;

            function ShortCurve(e) {
                BaseCurve.call(this, "short", e), this.a = new(d())(e.a, 16).toRed(this.red), this.b = new(d())(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
            }

            function Point(e, t, r, n) {
                BaseCurve.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new(d())(t, 16), this.y = new(d())(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function JPoint(e, t, r, n) {
                BaseCurve.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new(d())(0)) : (this.x = new(d())(t, 16), this.y = new(d())(r, 16), this.z = new(d())(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            E(ShortCurve, BaseCurve), ShortCurve.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    if (e.beta) t = new(d())(e.beta, 16).toRed(this.red);
                    else {
                        var t, r, n, i = this._getEndoRoots(this.p);
                        t = (t = 0 > i[0].cmp(i[1]) ? i[0] : i[1]).toRed(this.red)
                    }
                    if (e.lambda) r = new(d())(e.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], k(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                    }
                    return n = e.basis ? e.basis.map(function(e) {
                        return {
                            a: new(d())(e.a, 16),
                            b: new(d())(e.b, 16)
                        }
                    }) : this._getEndoBasis(r), {
                        beta: t,
                        lambda: r,
                        basis: n
                    }
                }
            }, ShortCurve.prototype._getEndoRoots = function(e) {
                var t = e === this.p ? this.red : d().mont(e),
                    r = new(d())(2).toRed(t).redInvm(),
                    n = r.redNeg(),
                    i = new(d())(3).toRed(t).redNeg().redSqrt().redMul(r);
                return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
            }, ShortCurve.prototype._getEndoBasis = function(e) {
                for (var t, r, n, i, o, s, a, l, u, c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, p = this.n.clone(), m = new(d())(1), g = new(d())(0), A = new(d())(0), y = new(d())(1), v = 0; 0 !== h.cmpn(0);) {
                    var b = p.div(h);
                    l = p.sub(b.mul(h)), u = A.sub(b.mul(m));
                    var w = y.sub(b.mul(g));
                    if (!n && 0 > l.cmp(c)) t = a.neg(), r = m, n = l.neg(), i = u;
                    else if (n && 2 == ++v) break;
                    a = l, p = h, h = l, A = m, m = u, y = g, g = w
                }
                o = l.neg(), s = u;
                var E = n.sqr().add(i.sqr());
                return o.sqr().add(s.sqr()).cmp(E) >= 0 && (o = t, s = r), n.negative && (n = n.neg(), i = i.neg()), o.negative && (o = o.neg(), s = s.neg()), [{
                    a: n,
                    b: i
                }, {
                    a: o,
                    b: s
                }]
            }, ShortCurve.prototype._endoSplit = function(e) {
                var t = this.endo.basis,
                    r = t[0],
                    n = t[1],
                    i = n.b.mul(e).divRound(this.n),
                    o = r.b.neg().mul(e).divRound(this.n),
                    s = i.mul(r.a),
                    a = o.mul(n.a),
                    l = i.mul(r.b),
                    u = o.mul(n.b);
                return {
                    k1: e.sub(s).sub(a),
                    k2: l.add(u).neg()
                }
            }, ShortCurve.prototype.pointFromX = function(e, t) {
                (e = new(d())(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                    n = r.redSqrt();
                if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
                var i = n.fromRed().isOdd();
                return (t && !i || !t && i) && (n = n.redNeg()), this.point(e, n)
            }, ShortCurve.prototype.validate = function(e) {
                if (e.inf) return !0;
                var t = e.x,
                    r = e.y,
                    n = this.a.redMul(t),
                    i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }, ShortCurve.prototype._endoWnafMulAdd = function(e, t, r) {
                for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
                    var s = this._endoSplit(t[o]),
                        a = e[o],
                        l = a._getBeta();
                    s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), l = l.neg(!0)), n[2 * o] = a, n[2 * o + 1] = l, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                }
                for (var u = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0; c < 2 * o; c++) n[c] = null, i[c] = null;
                return u
            }, E(Point, BaseCurve.BasePoint), ShortCurve.prototype.point = function(e, t, r) {
                return new Point(this, e, t, r)
            }, ShortCurve.prototype.pointFromJSON = function(e, t) {
                return Point.fromJSON(this, e, t)
            }, Point.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var e = this.precomputed;
                    if (e && e.beta) return e.beta;
                    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (e) {
                        var r = this.curve,
                            endoMul = function(e) {
                                return r.point(e.x.redMul(r.endo.beta), e.y)
                            };
                        e.beta = t, t.precomputed = {
                            beta: null,
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(endoMul)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(endoMul)
                            }
                        }
                    }
                    return t
                }
            }, Point.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, Point.fromJSON = function(e, t, r) {
                "string" == typeof t && (t = JSON.parse(t));
                var n = e.point(t[0], t[1], r);
                if (!t[2]) return n;

                function obj2point(t) {
                    return e.point(t[0], t[1], r)
                }
                var i = t[2];
                return n.precomputed = {
                    beta: null,
                    doubles: i.doubles && {
                        step: i.doubles.step,
                        points: [n].concat(i.doubles.points.map(obj2point))
                    },
                    naf: i.naf && {
                        wnd: i.naf.wnd,
                        points: [n].concat(i.naf.points.map(obj2point))
                    }
                }, n
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return this.inf
            }, Point.prototype.add = function(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                var r = t.redSqr().redISub(this.x).redISub(e.x),
                    n = t.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }, Point.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var t = this.curve.a,
                    r = this.x.redSqr(),
                    n = e.redInvm(),
                    i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
                    o = i.redSqr().redISub(this.x.redAdd(this.x)),
                    s = i.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, Point.prototype.getX = function() {
                return this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.y.fromRed()
            }, Point.prototype.mul = function(e) {
                return (e = new(d())(e, 16), this.isInfinity()) ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
            }, Point.prototype.mulAdd = function(e, t, r) {
                var n = [this, t],
                    i = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }, Point.prototype.jmulAdd = function(e, t, r) {
                var n = [this, t],
                    i = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
            }, Point.prototype.eq = function(e) {
                return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
            }, Point.prototype.neg = function(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var r = this.precomputed,
                        negate = function(e) {
                            return e.neg()
                        };
                    t.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(negate)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(negate)
                        }
                    }
                }
                return t
            }, Point.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, E(JPoint, BaseCurve.BasePoint), ShortCurve.prototype.jpoint = function(e, t, r) {
                return new JPoint(this, e, t, r)
            }, JPoint.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                    t = e.redSqr(),
                    r = this.x.redMul(t),
                    n = this.y.redMul(t).redMul(e);
                return this.curve.point(r, n)
            }, JPoint.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, JPoint.prototype.add = function(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr(),
                    r = this.z.redSqr(),
                    n = this.x.redMul(t),
                    i = e.x.redMul(r),
                    o = this.y.redMul(t.redMul(e.z)),
                    s = e.y.redMul(r.redMul(this.z)),
                    a = n.redSub(i),
                    l = o.redSub(s);
                if (0 === a.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = a.redSqr(),
                    c = u.redMul(a),
                    h = n.redMul(u),
                    d = l.redSqr().redIAdd(c).redISub(h).redISub(h),
                    p = l.redMul(h.redISub(d)).redISub(o.redMul(c)),
                    m = this.z.redMul(e.z).redMul(a);
                return this.curve.jpoint(d, p, m)
            }, JPoint.prototype.mixedAdd = function(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr(),
                    r = this.x,
                    n = e.x.redMul(t),
                    i = this.y,
                    o = e.y.redMul(t).redMul(this.z),
                    s = r.redSub(n),
                    a = i.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var l = s.redSqr(),
                    u = l.redMul(s),
                    c = r.redMul(l),
                    h = a.redSqr().redIAdd(u).redISub(c).redISub(c),
                    d = a.redMul(c.redISub(h)).redISub(i.redMul(u)),
                    p = this.z.redMul(s);
                return this.curve.jpoint(h, d, p)
            }, JPoint.prototype.dblp = function(e) {
                if (0 === e || this.isInfinity()) return this;
                if (!e) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var t, r = this;
                    for (t = 0; t < e; t++) r = r.dbl();
                    return r
                }
                var n = this.curve.a,
                    i = this.curve.tinv,
                    o = this.x,
                    s = this.y,
                    a = this.z,
                    l = a.redSqr().redSqr(),
                    u = s.redAdd(s);
                for (t = 0; t < e; t++) {
                    var c = o.redSqr(),
                        h = u.redSqr(),
                        d = h.redSqr(),
                        p = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(l)),
                        m = o.redMul(h),
                        g = p.redSqr().redISub(m.redAdd(m)),
                        A = m.redISub(g),
                        y = p.redMul(A);
                    y = y.redIAdd(y).redISub(d);
                    var v = u.redMul(a);
                    t + 1 < e && (l = l.redMul(d)), o = g, a = v, u = y
                }
                return this.curve.jpoint(o, u.redMul(i), a)
            }, JPoint.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, JPoint.prototype._zeroDbl = function() {
                if (this.zOne) {
                    var e, t, r, n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n),
                        l = a.redSqr().redISub(s).redISub(s),
                        u = o.redIAdd(o);
                    u = (u = u.redIAdd(u)).redIAdd(u), e = l, t = a.redMul(s.redISub(l)).redISub(u), r = this.y.redAdd(this.y)
                } else {
                    var c = this.x.redSqr(),
                        h = this.y.redSqr(),
                        d = h.redSqr(),
                        p = this.x.redAdd(h).redSqr().redISub(c).redISub(d);
                    p = p.redIAdd(p);
                    var m = c.redAdd(c).redIAdd(c),
                        g = m.redSqr(),
                        A = d.redIAdd(d);
                    A = (A = A.redIAdd(A)).redIAdd(A), e = g.redISub(p).redISub(p), t = m.redMul(p.redISub(e)).redISub(A), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(e, t, r)
            }, JPoint.prototype._threeDbl = function() {
                if (this.zOne) {
                    var e, t, r, n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                        l = a.redSqr().redISub(s).redISub(s);
                    e = l;
                    var u = o.redIAdd(o);
                    u = (u = u.redIAdd(u)).redIAdd(u), t = a.redMul(s.redISub(l)).redISub(u), r = this.y.redAdd(this.y)
                } else {
                    var c = this.z.redSqr(),
                        h = this.y.redSqr(),
                        d = this.x.redMul(h),
                        p = this.x.redSub(c).redMul(this.x.redAdd(c));
                    p = p.redAdd(p).redIAdd(p);
                    var m = d.redIAdd(d),
                        g = (m = m.redIAdd(m)).redAdd(m);
                    e = p.redSqr().redISub(g), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c);
                    var A = h.redSqr();
                    A = (A = (A = A.redIAdd(A)).redIAdd(A)).redIAdd(A), t = p.redMul(m.redISub(e)).redISub(A)
                }
                return this.curve.jpoint(e, t, r)
            }, JPoint.prototype._dbl = function() {
                var e = this.curve.a,
                    t = this.x,
                    r = this.y,
                    n = this.z,
                    i = n.redSqr().redSqr(),
                    o = t.redSqr(),
                    s = r.redSqr(),
                    a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
                    l = t.redAdd(t),
                    u = (l = l.redIAdd(l)).redMul(s),
                    c = a.redSqr().redISub(u.redAdd(u)),
                    h = u.redISub(c),
                    d = s.redSqr();
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var p = a.redMul(h).redISub(d),
                    m = r.redAdd(r).redMul(n);
                return this.curve.jpoint(c, p, m)
            }, JPoint.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr(),
                    n = t.redSqr(),
                    i = e.redAdd(e).redIAdd(e),
                    o = i.redSqr(),
                    s = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                    a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                    l = n.redIAdd(n);
                l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
                var u = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(l),
                    c = t.redMul(u);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var h = this.x.redMul(a).redISub(c);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var d = this.y.redMul(u.redMul(l.redISub(u)).redISub(s.redMul(a)));
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var p = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
                return this.curve.jpoint(h, d, p)
            }, JPoint.prototype.mul = function(e, t) {
                return e = new(d())(e, t), this.curve._wnafMul(this, e)
            }, JPoint.prototype.eq = function(e) {
                if ("affine" === e.type) return this.eq(e.toJ());
                if (this === e) return !0;
                var t = this.z.redSqr(),
                    r = e.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
                var n = t.redMul(this.z),
                    i = r.redMul(e.z);
                return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
            }, JPoint.prototype.eqXToP = function(e) {
                var t = this.z.redSqr(),
                    r = e.toRed(this.curve.red).redMul(t);
                if (0 === this.x.cmp(r)) return !0;
                for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
                    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
                }
            }, JPoint.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, JPoint.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var _ = createCommonjsModule(function(e, t) {
                    t.base = BaseCurve, t.short = ShortCurve, t.mont = null, t.edwards = null
                }),
                P = createCommonjsModule(function(e, t) {
                    var r, n = y.assert;

                    function PresetCurve(e) {
                        "short" === e.type ? this.curve = new _.short(e) : "edwards" === e.type ? this.curve = new _.edwards(e) : this.curve = new _.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function defineCurve(e, r) {
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var n = new PresetCurve(r);
                                return Object.defineProperty(t, e, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n
                                }), n
                            }
                        })
                    }
                    t.PresetCurve = PresetCurve, defineCurve("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: m().sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), defineCurve("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: m().sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), defineCurve("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: m().sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), defineCurve("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: m().sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), defineCurve("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: m().sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), defineCurve("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: m().sha256,
                        gRed: !1,
                        g: ["9"]
                    }), defineCurve("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: m().sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        r = null.crash()
                    } catch (e) {
                        r = void 0
                    }
                    defineCurve("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: m().sha256,
                        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                        basis: [{
                            a: "3086d221a7d46bcde86c90e49284eb15",
                            b: "-e4437ed6010e88286f547fa90abfe4c3"
                        }, {
                            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                            b: "3086d221a7d46bcde86c90e49284eb15"
                        }],
                        gRed: !1,
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                    })
                });

            function HmacDRBG(e) {
                if (!(this instanceof HmacDRBG)) return new HmacDRBG(e);
                this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var t = A.toArray(e.entropy, e.entropyEnc || "hex"),
                    r = A.toArray(e.nonce, e.nonceEnc || "hex"),
                    n = A.toArray(e.pers, e.persEnc || "hex");
                g(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
            }
            HmacDRBG.prototype._init = function(e, t, r) {
                var n = e.concat(t).concat(r);
                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
            }, HmacDRBG.prototype._hmac = function() {
                return new(m()).hmac(this.hash, this.K)
            }, HmacDRBG.prototype._update = function(e) {
                var t = this._hmac().update(this.V).update([0]);
                e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
            }, HmacDRBG.prototype.reseed = function(e, t, r, n) {
                "string" != typeof t && (n = r, r = t, t = null), e = A.toArray(e, t), r = A.toArray(r, n), g(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
            }, HmacDRBG.prototype.generate = function(e, t, r, n) {
                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                "string" != typeof t && (n = r, r = t, t = null), r && (r = A.toArray(r, n || "hex"), this._update(r));
                for (var i = []; i.length < e;) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
                var o = i.slice(0, e);
                return this._update(r), this._reseed++, A.encode(o, t)
            };
            var C = y.assert;

            function KeyPair(e, t) {
                this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
            }
            KeyPair.fromPublic = function(e, t, r) {
                return t instanceof KeyPair ? t : new KeyPair(e, {
                    pub: t,
                    pubEnc: r
                })
            }, KeyPair.fromPrivate = function(e, t, r) {
                return t instanceof KeyPair ? t : new KeyPair(e, {
                    priv: t,
                    privEnc: r
                })
            }, KeyPair.prototype.validate = function() {
                var e = this.getPublic();
                return e.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, KeyPair.prototype.getPublic = function(e, t) {
                return ("string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t) ? this.pub.encode(t, e) : this.pub
            }, KeyPair.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv
            }, KeyPair.prototype._importPrivate = function(e, t) {
                this.priv = new(d())(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, KeyPair.prototype._importPublic = function(e, t) {
                if (e.x || e.y) {
                    "mont" === this.ec.curve.type ? C(e.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && C(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(e, t)
            }, KeyPair.prototype.derive = function(e) {
                return e.validate() || C(e.validate(), "public point not validated"), e.mul(this.priv).getX()
            }, KeyPair.prototype.sign = function(e, t, r) {
                return this.ec.sign(e, this, t, r)
            }, KeyPair.prototype.verify = function(e, t) {
                return this.ec.verify(e, t, this)
            }, KeyPair.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var S = y.assert;

            function Signature(e, t) {
                if (e instanceof Signature) return e;
                this._importDER(e, t) || (S(e.r && e.s, "Signature without r or s"), this.r = new(d())(e.r, 16), this.s = new(d())(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
            }

            function Position() {
                this.place = 0
            }

            function getLength(e, t) {
                var r = e[t.place++];
                if (!(128 & r)) return r;
                var n = 15 & r;
                if (0 === n || n > 4) return !1;
                for (var i = 0, o = 0, s = t.place; o < n; o++, s++) i <<= 8, i |= e[s], i >>>= 0;
                return !(i <= 127) && (t.place = s, i)
            }

            function rmPadding(e) {
                for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
                return 0 === t ? e : e.slice(t)
            }

            function constructLength(e, t) {
                if (t < 128) {
                    e.push(t);
                    return
                }
                var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                e.push(t)
            }
            Signature.prototype._importDER = function(e, t) {
                e = y.toArray(e, t);
                var r = new Position;
                if (48 !== e[r.place++]) return !1;
                var n = getLength(e, r);
                if (!1 === n || n + r.place !== e.length || 2 !== e[r.place++]) return !1;
                var i = getLength(e, r);
                if (!1 === i) return !1;
                var o = e.slice(r.place, i + r.place);
                if (r.place += i, 2 !== e[r.place++]) return !1;
                var s = getLength(e, r);
                if (!1 === s || e.length !== s + r.place) return !1;
                var a = e.slice(r.place, s + r.place);
                if (0 === o[0]) {
                    if (!(128 & o[1])) return !1;
                    o = o.slice(1)
                }
                if (0 === a[0]) {
                    if (!(128 & a[1])) return !1;
                    a = a.slice(1)
                }
                return this.r = new(d())(o), this.s = new(d())(a), this.recoveryParam = null, !0
            }, Signature.prototype.toDER = function(e) {
                var t = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = rmPadding(t), r = rmPadding(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var n = [2];
                constructLength(n, t.length), (n = n.concat(t)).push(2), constructLength(n, r.length);
                var i = n.concat(r),
                    o = [48];
                return constructLength(o, i.length), o = o.concat(i), y.encode(o, e)
            };
            var rand = function() {
                    throw Error("unsupported")
                },
                N = y.assert;

            function EC(e) {
                if (!(this instanceof EC)) return new EC(e);
                "string" == typeof e && (N(Object.prototype.hasOwnProperty.call(P, e), "Unknown curve " + e), e = P[e]), e instanceof P.PresetCurve && (e = {
                    curve: e
                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
            }
            EC.prototype.keyPair = function(e) {
                return new KeyPair(this, e)
            }, EC.prototype.keyFromPrivate = function(e, t) {
                return KeyPair.fromPrivate(this, e, t)
            }, EC.prototype.keyFromPublic = function(e, t) {
                return KeyPair.fromPublic(this, e, t)
            }, EC.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (var t = new HmacDRBG({
                        hash: this.hash,
                        pers: e.pers,
                        persEnc: e.persEnc || "utf8",
                        entropy: e.entropy || rand(this.hash.hmacStrength),
                        entropyEnc: e.entropy && e.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), n = this.n.sub(new(d())(2));;) {
                    var i = new(d())(t.generate(r));
                    if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i)
                }
            }, EC.prototype._truncateToN = function(e, t) {
                var r = 8 * e.byteLength() - this.n.bitLength();
                return (r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e
            }, EC.prototype.sign = function(e, t, r, n) {
                "object" == typeof r && (n = r, r = null), n || (n = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new(d())(e, 16));
                for (var i = this.n.byteLength(), o = t.getPrivate().toArray("be", i), s = e.toArray("be", i), a = new HmacDRBG({
                        hash: this.hash,
                        entropy: o,
                        nonce: s,
                        pers: n.pers,
                        persEnc: n.persEnc || "utf8"
                    }), l = this.n.sub(new(d())(1)), u = 0;; u++) {
                    var c = n.k ? n.k(u) : new(d())(a.generate(this.n.byteLength()));
                    if (!(0 >= (c = this._truncateToN(c, !0)).cmpn(1) || c.cmp(l) >= 0)) {
                        var h = this.g.mul(c);
                        if (!h.isInfinity()) {
                            var p = h.getX(),
                                m = p.umod(this.n);
                            if (0 !== m.cmpn(0)) {
                                var g = c.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                                if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                                    var A = (h.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                                    return n.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), A ^= 1), new Signature({
                                        r: m,
                                        s: g,
                                        recoveryParam: A
                                    })
                                }
                            }
                        }
                    }
                }
            }, EC.prototype.verify = function(e, t, r, n) {
                e = this._truncateToN(new(d())(e, 16)), r = this.keyFromPublic(r, n);
                var i, o = (t = new Signature(t, "hex")).r,
                    s = t.s;
                if (0 > o.cmpn(1) || o.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0) return !1;
                var a = s.invm(this.n),
                    l = a.mul(e).umod(this.n),
                    u = a.mul(o).umod(this.n);
                return this.curve._maxwellTrick ? !(i = this.g.jmulAdd(l, r.getPublic(), u)).isInfinity() && i.eqXToP(o) : !(i = this.g.mulAdd(l, r.getPublic(), u)).isInfinity() && 0 === i.getX().umod(this.n).cmp(o)
            }, EC.prototype.recoverPubKey = function(e, t, r, n) {
                N((3 & r) === r, "The recovery param is more than two bits"), t = new Signature(t, n);
                var i = this.n,
                    o = new(d())(e),
                    s = t.r,
                    a = t.s,
                    l = 1 & r,
                    u = r >> 1;
                if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw Error("Unable to find sencond key candinate");
                s = u ? this.curve.pointFromX(s.add(this.curve.n), l) : this.curve.pointFromX(s, l);
                var c = t.r.invm(i),
                    h = i.sub(o).mul(c).umod(i),
                    p = a.mul(c).umod(i);
                return this.g.mulAdd(h, s, p)
            }, EC.prototype.getKeyRecoveryParam = function(e, t, r, n) {
                if (null !== (t = new Signature(t, n)).recoveryParam) return t.recoveryParam;
                for (var i, o = 0; o < 4; o++) {
                    try {
                        i = this.recoverPubKey(e, t, o)
                    } catch (e) {
                        continue
                    }
                    if (i.eq(r)) return o
                }
                throw Error("Unable to find valid recovery factor")
            };
            var I = createCommonjsModule(function(e, t) {
                    t.version = "6.5.4", t.utils = y, t.rand = function() {
                        throw Error("unsupported")
                    }, t.curve = _, t.curves = P, t.ec = EC, t.eddsa = null
                }).ec,
                x = r(17213),
                B = r(36288);
            let R = new B.Yd("signing-key/5.7.0"),
                T = null;

            function getCurve() {
                return T || (T = new I("secp256k1")), T
            }
            let SigningKey = class SigningKey {
                constructor(e) {
                    (0, x.zG)(this, "curve", "secp256k1"), (0, x.zG)(this, "privateKey", (0, a.Dv)(e)), 32 !== (0, a.E1)(this.privateKey) && R.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    let t = getCurve().keyFromPrivate((0, a.lE)(this.privateKey));
                    (0, x.zG)(this, "publicKey", "0x" + t.getPublic(!1, "hex")), (0, x.zG)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), (0, x.zG)(this, "_isSigningKey", !0)
                }
                _addPoint(e) {
                    let t = getCurve().keyFromPublic((0, a.lE)(this.publicKey)),
                        r = getCurve().keyFromPublic((0, a.lE)(e));
                    return "0x" + t.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(e) {
                    let t = getCurve().keyFromPrivate((0, a.lE)(this.privateKey)),
                        r = (0, a.lE)(e);
                    32 !== r.length && R.throwArgumentError("bad digest length", "digest", e);
                    let n = t.sign(r, {
                        canonical: !0
                    });
                    return (0, a.N)({
                        recoveryParam: n.recoveryParam,
                        r: (0, a.$m)("0x" + n.r.toString(16), 32),
                        s: (0, a.$m)("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(e) {
                    let t = getCurve().keyFromPrivate((0, a.lE)(this.privateKey)),
                        r = getCurve().keyFromPublic((0, a.lE)(computePublicKey(e)));
                    return (0, a.$m)("0x" + t.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(e) {
                    return !!(e && e._isSigningKey)
                }
            };

            function computePublicKey(e, t) {
                let r = (0, a.lE)(e);
                if (32 === r.length) {
                    let e = new SigningKey(r);
                    return t ? "0x" + getCurve().keyFromPrivate(r).getPublic(!0, "hex") : e.publicKey
                }
                return 33 === r.length ? t ? (0, a.Dv)(r) : "0x" + getCurve().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? t ? "0x" + getCurve().keyFromPublic(r).getPublic(!0, "hex") : (0, a.Dv)(r) : R.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
            let O = new B.Yd("transactions/5.7.0");

            function handleAddress(e) {
                return "0x" === e ? null : (0, o.Kn)(e)
            }

            function handleNumber(e) {
                return "0x" === e ? l._Y : s.O$.from(e)
            }

            function recoverAddress(e, t) {
                return function(e) {
                    let t = computePublicKey(e);
                    return (0, o.Kn)((0, a.p3)((0, u.w)((0, a.p3)(t, 1)), 12))
                }(function(e, t) {
                    let r = (0, a.N)(t),
                        n = {
                            r: (0, a.lE)(r.r),
                            s: (0, a.lE)(r.s)
                        };
                    return "0x" + getCurve().recoverPubKey((0, a.lE)(e), n, r.recoveryParam).encode("hex", !1)
                }((0, a.lE)(e), t))
            }

            function formatNumber(e, t) {
                let r = (0, a.G1)(s.O$.from(e).toHexString());
                return r.length > 32 && O.throwArgumentError("invalid length for " + t, "transaction:" + t, e), r
            }

            function accessSetify(e, t) {
                return {
                    address: (0, o.Kn)(e),
                    storageKeys: (t || []).map((t, r) => (32 !== (0, a.E1)(t) && O.throwArgumentError("invalid access list storageKey", `accessList[${e}:${r}]`, t), t.toLowerCase()))
                }
            }

            function accessListify(e) {
                if (Array.isArray(e)) return e.map((e, t) => Array.isArray(e) ? (e.length > 2 && O.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${t}]`, e), accessSetify(e[0], e[1])) : accessSetify(e.address, e.storageKeys));
                let t = Object.keys(e).map(t => {
                    let r = e[t].reduce((e, t) => (e[t] = !0, e), {});
                    return accessSetify(t, Object.keys(r).sort())
                });
                return t.sort((e, t) => e.address.localeCompare(t.address)), t
            }

            function formatAccessList(e) {
                return accessListify(e).map(e => [e.address, e.storageKeys])
            }

            function _serializeEip1559(e, t) {
                if (null != e.gasPrice) {
                    let t = s.O$.from(e.gasPrice),
                        r = s.O$.from(e.maxFeePerGas || 0);
                    t.eq(r) || O.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                        gasPrice: t,
                        maxFeePerGas: r
                    })
                }
                let r = [formatNumber(e.chainId || 0, "chainId"), formatNumber(e.nonce || 0, "nonce"), formatNumber(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), formatNumber(e.maxFeePerGas || 0, "maxFeePerGas"), formatNumber(e.gasLimit || 0, "gasLimit"), null != e.to ? (0, o.Kn)(e.to) : "0x", formatNumber(e.value || 0, "value"), e.data || "0x", formatAccessList(e.accessList || [])];
                if (t) {
                    let e = (0, a.N)(t);
                    r.push(formatNumber(e.recoveryParam, "recoveryParam")), r.push((0, a.G1)(e.r)), r.push((0, a.G1)(e.s))
                }
                return (0, a.xs)(["0x02", c.c(r)])
            }

            function _serializeEip2930(e, t) {
                let r = [formatNumber(e.chainId || 0, "chainId"), formatNumber(e.nonce || 0, "nonce"), formatNumber(e.gasPrice || 0, "gasPrice"), formatNumber(e.gasLimit || 0, "gasLimit"), null != e.to ? (0, o.Kn)(e.to) : "0x", formatNumber(e.value || 0, "value"), e.data || "0x", formatAccessList(e.accessList || [])];
                if (t) {
                    let e = (0, a.N)(t);
                    r.push(formatNumber(e.recoveryParam, "recoveryParam")), r.push((0, a.G1)(e.r)), r.push((0, a.G1)(e.s))
                }
                return (0, a.xs)(["0x01", c.c(r)])
            }

            function _parseEipSignature(e, t, r) {
                try {
                    let r = handleNumber(t[0]).toNumber();
                    if (0 !== r && 1 !== r) throw Error("bad recid");
                    e.v = r
                } catch (e) {
                    O.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
                }
                e.r = (0, a.$m)(t[1], 32), e.s = (0, a.$m)(t[2], 32);
                try {
                    let t = (0, u.w)(r(e));
                    e.from = recoverAddress(t, {
                        r: e.r,
                        s: e.s,
                        recoveryParam: e.v
                    })
                } catch (e) {}
            }

            function parse(e) {
                let t = (0, a.lE)(e);
                if (t[0] > 127) return function(e) {
                    let t = c.J(e);
                    9 !== t.length && 6 !== t.length && O.throwArgumentError("invalid raw transaction", "rawTransaction", e);
                    let r = {
                        nonce: handleNumber(t[0]).toNumber(),
                        gasPrice: handleNumber(t[1]),
                        gasLimit: handleNumber(t[2]),
                        to: handleAddress(t[3]),
                        value: handleNumber(t[4]),
                        data: t[5],
                        chainId: 0
                    };
                    if (6 === t.length) return r;
                    try {
                        r.v = s.O$.from(t[6]).toNumber()
                    } catch (e) {
                        return r
                    }
                    if (r.r = (0, a.$m)(t[7], 32), r.s = (0, a.$m)(t[8], 32), s.O$.from(r.r).isZero() && s.O$.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
                    else {
                        r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
                        let n = r.v - 27,
                            i = t.slice(0, 6);
                        0 !== r.chainId && (i.push((0, a.Dv)(r.chainId)), i.push("0x"), i.push("0x"), n -= 2 * r.chainId + 8);
                        let o = (0, u.w)(c.c(i));
                        try {
                            r.from = recoverAddress(o, {
                                r: (0, a.Dv)(r.r),
                                s: (0, a.Dv)(r.s),
                                recoveryParam: n
                            })
                        } catch (e) {}
                        r.hash = (0, u.w)(e)
                    }
                    return r.type = null, r
                }(t);
                switch (t[0]) {
                    case 1:
                        return function(e) {
                            let t = c.J(e.slice(1));
                            8 !== t.length && 11 !== t.length && O.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, a.Dv)(e));
                            let r = {
                                type: 1,
                                chainId: handleNumber(t[0]).toNumber(),
                                nonce: handleNumber(t[1]).toNumber(),
                                gasPrice: handleNumber(t[2]),
                                gasLimit: handleNumber(t[3]),
                                to: handleAddress(t[4]),
                                value: handleNumber(t[5]),
                                data: t[6],
                                accessList: accessListify(t[7])
                            };
                            return 8 === t.length || (r.hash = (0, u.w)(e), _parseEipSignature(r, t.slice(8), _serializeEip2930)), r
                        }(t);
                    case 2:
                        return function(e) {
                            let t = c.J(e.slice(1));
                            9 !== t.length && 12 !== t.length && O.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, a.Dv)(e));
                            let r = handleNumber(t[2]),
                                n = handleNumber(t[3]),
                                i = {
                                    type: 2,
                                    chainId: handleNumber(t[0]).toNumber(),
                                    nonce: handleNumber(t[1]).toNumber(),
                                    maxPriorityFeePerGas: r,
                                    maxFeePerGas: n,
                                    gasPrice: null,
                                    gasLimit: handleNumber(t[4]),
                                    to: handleAddress(t[5]),
                                    value: handleNumber(t[6]),
                                    data: t[7],
                                    accessList: accessListify(t[8])
                                };
                            return 9 === t.length || (i.hash = (0, u.w)(e), _parseEipSignature(i, t.slice(9), _serializeEip1559)), i
                        }(t)
                }
                return O.throwError(`unsupported transaction type: ${t[0]}`, B.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "parseTransaction",
                    transactionType: t[0]
                })
            }(n = i || (i = {}))[n.legacy = 0] = "legacy", n[n.eip2930 = 1] = "eip2930", n[n.eip1559 = 2] = "eip1559"
        },
        39318: function(e, t, r) {
            "use strict";
            r.d(t, {
                rd: function() {
                    return fetchJson
                },
                $l: function() {
                    return poll
                }
            });
            var n = r(72275),
                i = r(57273),
                o = r(17213),
                s = r(58337),
                a = r(36288);
            let l = new a.Yd("web/5.7.1");

            function staller(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }

            function bodyify(e, t) {
                if (null == e) return null;
                if ("string" == typeof e) return e;
                if ((0, i.Zq)(e)) {
                    if (t && ("text" === t.split("/")[0] || "application/json" === t.split(";")[0].trim())) try {
                        return (0, s.ZN)(e)
                    } catch (e) {}
                    return (0, i.Dv)(e)
                }
                return e
            }

            function fetchJson(e, t, r) {
                let u = null;
                if (null != t) {
                    u = (0, s.Y0)(t);
                    let r = "string" == typeof e ? {
                        url: e
                    } : (0, o.DC)(e);
                    if (r.headers) {
                        let e = 0 !== Object.keys(r.headers).filter(e => "content-type" === e.toLowerCase()).length;
                        e || (r.headers = (0, o.DC)(r.headers), r.headers["content-type"] = "application/json")
                    } else r.headers = {
                        "content-type": "application/json"
                    };
                    e = r
                }
                return function(e, t, r) {
                    let u = "object" == typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
                    l.assertArgument(u > 0 && u % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", u);
                    let c = "object" == typeof e ? e.throttleCallback : null,
                        h = "object" == typeof e && "number" == typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
                    l.assertArgument(h > 0 && h % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", h);
                    let d = "object" == typeof e && !!e.errorPassThrough,
                        p = {},
                        m = null,
                        g = {
                            method: "GET"
                        },
                        A = !1,
                        y = 12e4;
                    if ("string" == typeof e) m = e;
                    else if ("object" == typeof e) {
                        if ((null == e || null == e.url) && l.throwArgumentError("missing URL", "connection.url", e), m = e.url, "number" == typeof e.timeout && e.timeout > 0 && (y = e.timeout), e.headers)
                            for (let t in e.headers) p[t.toLowerCase()] = {
                                key: t,
                                value: String(e.headers[t])
                            }, ["if-none-match", "if-modified-since"].indexOf(t.toLowerCase()) >= 0 && (A = !0);
                        if (g.allowGzip = !!e.allowGzip, null != e.user && null != e.password) {
                            "https:" !== m.substring(0, 6) && !0 !== e.allowInsecureAuthentication && l.throwError("basic authentication requires a secure https url", a.Yd.errors.INVALID_ARGUMENT, {
                                argument: "url",
                                url: m,
                                user: e.user,
                                password: "[REDACTED]"
                            });
                            let t = e.user + ":" + e.password;
                            p.authorization = {
                                key: "Authorization",
                                value: "Basic " + (0, n.c)((0, s.Y0)(t))
                            }
                        }
                        null != e.skipFetchSetup && (g.skipFetchSetup = !!e.skipFetchSetup), null != e.fetchOptions && (g.fetchOptions = (0, o.DC)(e.fetchOptions))
                    }
                    let v = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                        b = m ? m.match(v) : null;
                    if (b) try {
                        var w;
                        let e = {
                                statusCode: 200,
                                statusMessage: "OK",
                                headers: {
                                    "content-type": b[1] || "text/plain"
                                },
                                body: b[2] ? (0, n.J)(b[3]) : (w = b[3], (0, s.Y0)(w.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) => String.fromCharCode(parseInt(t, 16)))))
                            },
                            t = e.body;
                        return r && (t = r(e.body, e)), Promise.resolve(t)
                    } catch (e) {
                        l.throwError("processing response error", a.Yd.errors.SERVER_ERROR, {
                            body: bodyify(b[1], b[2]),
                            error: e,
                            requestBody: null,
                            requestMethod: "GET",
                            url: m
                        })
                    }
                    t && (g.method = "POST", g.body = t, null == p["content-type"] && (p["content-type"] = {
                        key: "Content-Type",
                        value: "application/octet-stream"
                    }), null == p["content-length"] && (p["content-length"] = {
                        key: "Content-Length",
                        value: String(t.length)
                    }));
                    let E = {};
                    Object.keys(p).forEach(e => {
                        let t = p[e];
                        E[t.key] = t.value
                    }), g.headers = E;
                    let k = function() {
                            let e = null,
                                t = new Promise(function(t, r) {
                                    y && (e = setTimeout(() => {
                                        null != e && (e = null, r(l.makeError("timeout", a.Yd.errors.TIMEOUT, {
                                            requestBody: bodyify(g.body, E["content-type"]),
                                            requestMethod: g.method,
                                            timeout: y,
                                            url: m
                                        })))
                                    }, y))
                                });
                            return {
                                promise: t,
                                cancel: function() {
                                    null != e && (clearTimeout(e), e = null)
                                }
                            }
                        }(),
                        _ = function() {
                            var e, t, n, o;
                            return e = this, t = void 0, n = void 0, o = function*() {
                                for (let e = 0; e < u; e++) {
                                    let t = null;
                                    try {
                                        if (t = yield function(e, t) {
                                                var r, n, o, s;
                                                return r = this, n = void 0, o = void 0, s = function*() {
                                                    null == t && (t = {});
                                                    let r = {
                                                        method: t.method || "GET",
                                                        headers: t.headers || {},
                                                        body: t.body || void 0
                                                    };
                                                    if (!0 !== t.skipFetchSetup && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), null != t.fetchOptions) {
                                                        let e = t.fetchOptions;
                                                        e.mode && (r.mode = e.mode), e.cache && (r.cache = e.cache), e.credentials && (r.credentials = e.credentials), e.redirect && (r.redirect = e.redirect), e.referrer && (r.referrer = e.referrer)
                                                    }
                                                    let n = yield fetch(e, r), o = yield n.arrayBuffer(), s = {};
                                                    return n.headers.forEach ? n.headers.forEach((e, t) => {
                                                        s[t.toLowerCase()] = e
                                                    }) : n.headers.keys().forEach(e => {
                                                        s[e.toLowerCase()] = n.headers.get(e)
                                                    }), {
                                                        headers: s,
                                                        statusCode: n.status,
                                                        statusMessage: n.statusText,
                                                        body: (0, i.lE)(new Uint8Array(o))
                                                    }
                                                }, new(o || (o = Promise))(function(e, t) {
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
                                                        t.done ? e(t.value) : ((r = t.value) instanceof o ? r : new o(function(e) {
                                                            e(r)
                                                        })).then(fulfilled, rejected)
                                                    }
                                                    step((s = s.apply(r, n || [])).next())
                                                })
                                            }(m, g), e < u) {
                                            if (301 === t.statusCode || 302 === t.statusCode) {
                                                let e = t.headers.location || "";
                                                if ("GET" === g.method && e.match(/^https:/)) {
                                                    m = t.headers.location;
                                                    continue
                                                }
                                            } else if (429 === t.statusCode) {
                                                let r = !0;
                                                if (c && (r = yield c(e, m)), r) {
                                                    let r = 0,
                                                        n = t.headers["retry-after"];
                                                    r = "string" == typeof n && n.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(n) : h * parseInt(String(Math.random() * Math.pow(2, e))), yield staller(r);
                                                    continue
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        null == (t = e.response) && (k.cancel(), l.throwError("missing response", a.Yd.errors.SERVER_ERROR, {
                                            requestBody: bodyify(g.body, E["content-type"]),
                                            requestMethod: g.method,
                                            serverError: e,
                                            url: m
                                        }))
                                    }
                                    let n = t.body;
                                    if (A && 304 === t.statusCode ? n = null : !d && (t.statusCode < 200 || t.statusCode >= 300) && (k.cancel(), l.throwError("bad response", a.Yd.errors.SERVER_ERROR, {
                                            status: t.statusCode,
                                            headers: t.headers,
                                            body: bodyify(n, t.headers ? t.headers["content-type"] : null),
                                            requestBody: bodyify(g.body, E["content-type"]),
                                            requestMethod: g.method,
                                            url: m
                                        })), r) try {
                                        let e = yield r(n, t);
                                        return k.cancel(), e
                                    } catch (r) {
                                        if (r.throttleRetry && e < u) {
                                            let t = !0;
                                            if (c && (t = yield c(e, m)), t) {
                                                let t = h * parseInt(String(Math.random() * Math.pow(2, e)));
                                                yield staller(t);
                                                continue
                                            }
                                        }
                                        k.cancel(), l.throwError("processing response error", a.Yd.errors.SERVER_ERROR, {
                                            body: bodyify(n, t.headers ? t.headers["content-type"] : null),
                                            error: r,
                                            requestBody: bodyify(g.body, E["content-type"]),
                                            requestMethod: g.method,
                                            url: m
                                        })
                                    }
                                    return k.cancel(), n
                                }
                                return l.throwError("failed response", a.Yd.errors.SERVER_ERROR, {
                                    requestBody: bodyify(g.body, E["content-type"]),
                                    requestMethod: g.method,
                                    url: m
                                })
                            }, new(n || (n = Promise))(function(r, i) {
                                function fulfilled(e) {
                                    try {
                                        step(o.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function rejected(e) {
                                    try {
                                        step(o.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function step(e) {
                                    var t;
                                    e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                        e(t)
                                    })).then(fulfilled, rejected)
                                }
                                step((o = o.apply(e, t || [])).next())
                            })
                        }();
                    return Promise.race([k.promise, _])
                }(e, u, (e, t) => {
                    let n = null;
                    if (null != e) try {
                        n = JSON.parse((0, s.ZN)(e))
                    } catch (t) {
                        l.throwError("invalid JSON", a.Yd.errors.SERVER_ERROR, {
                            body: e,
                            error: t
                        })
                    }
                    return r && (n = r(n, t)), n
                })
            }

            function poll(e, t) {
                return t || (t = {}), null == (t = (0, o.DC)(t)).floor && (t.floor = 0), null == t.ceiling && (t.ceiling = 1e4), null == t.interval && (t.interval = 250), new Promise(function(r, n) {
                    let i = null,
                        o = !1,
                        cancel = () => !o && (o = !0, i && clearTimeout(i), !0);
                    t.timeout && (i = setTimeout(() => {
                        cancel() && n(Error("timeout"))
                    }, t.timeout));
                    let s = t.retryLimit,
                        a = 0;
                    ! function check() {
                        return e().then(function(e) {
                            if (void 0 !== e) cancel() && r(e);
                            else if (t.oncePoll) t.oncePoll.once("poll", check);
                            else if (t.onceBlock) t.onceBlock.once("block", check);
                            else if (!o) {
                                if (++a > s) {
                                    cancel() && n(Error("retry limit reached"));
                                    return
                                }
                                let e = t.interval * parseInt(String(Math.random() * Math.pow(2, a)));
                                e < t.floor && (e = t.floor), e > t.ceiling && (e = t.ceiling), setTimeout(check, e)
                            }
                            return null
                        }, function(e) {
                            cancel() && n(e)
                        })
                    }()
                })
            }
        },
        76942: function(e) {
            "use strict";
            for (var t = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0; n < t.length; n++) {
                var i = t.charAt(n);
                if (void 0 !== r[i]) throw TypeError(i + " is ambiguous");
                r[i] = n
            }

            function polymodStep(e) {
                var t = e >> 25;
                return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
            }

            function prefixChk(e) {
                for (var t = 1, r = 0; r < e.length; ++r) {
                    var n = e.charCodeAt(r);
                    if (n < 33 || n > 126) return "Invalid prefix (" + e + ")";
                    t = polymodStep(t) ^ n >> 5
                }
                for (r = 0, t = polymodStep(t); r < e.length; ++r) {
                    var i = e.charCodeAt(r);
                    t = polymodStep(t) ^ 31 & i
                }
                return t
            }

            function __decode(e, t) {
                if (t = t || 90, e.length < 8) return e + " too short";
                if (e.length > t) return "Exceeds length limit";
                var n = e.toLowerCase(),
                    i = e.toUpperCase();
                if (e !== n && e !== i) return "Mixed-case string " + e;
                var o = (e = n).lastIndexOf("1");
                if (-1 === o) return "No separator character for " + e;
                if (0 === o) return "Missing prefix for " + e;
                var s = e.slice(0, o),
                    a = e.slice(o + 1);
                if (a.length < 6) return "Data too short";
                var l = prefixChk(s);
                if ("string" == typeof l) return l;
                for (var u = [], c = 0; c < a.length; ++c) {
                    var h = a.charAt(c),
                        d = r[h];
                    if (void 0 === d) return "Unknown character " + h;
                    l = polymodStep(l) ^ d, c + 6 >= a.length || u.push(d)
                }
                return 1 !== l ? "Invalid checksum for " + e : {
                    prefix: s,
                    words: u
                }
            }

            function convert(e, t, r, n) {
                for (var i = 0, o = 0, s = (1 << r) - 1, a = [], l = 0; l < e.length; ++l)
                    for (i = i << t | e[l], o += t; o >= r;) a.push(i >> (o -= r) & s);
                if (n) o > 0 && a.push(i << r - o & s);
                else {
                    if (o >= t) return "Excess padding";
                    if (i << r - o & s) return "Non-zero padding"
                }
                return a
            }
            e.exports = {
                decodeUnsafe: function() {
                    var e = __decode.apply(null, arguments);
                    if ("object" == typeof e) return e
                },
                decode: function(e) {
                    var t = __decode.apply(null, arguments);
                    if ("object" == typeof t) return t;
                    throw Error(t)
                },
                encode: function(e, r, n) {
                    if (n = n || 90, e.length + 7 + r.length > n) throw TypeError("Exceeds length limit");
                    var i = prefixChk(e = e.toLowerCase());
                    if ("string" == typeof i) throw Error(i);
                    for (var o = e + "1", s = 0; s < r.length; ++s) {
                        var a = r[s];
                        if (a >> 5 != 0) throw Error("Non 5-bit word");
                        i = polymodStep(i) ^ a, o += t.charAt(a)
                    }
                    for (s = 0; s < 6; ++s) i = polymodStep(i);
                    for (i ^= 1, s = 0; s < 6; ++s) {
                        var l = i >> (5 - s) * 5 & 31;
                        o += t.charAt(l)
                    }
                    return o
                },
                toWordsUnsafe: function(e) {
                    var t = convert(e, 8, 5, !0);
                    if (Array.isArray(t)) return t
                },
                toWords: function(e) {
                    var t = convert(e, 8, 5, !0);
                    if (Array.isArray(t)) return t;
                    throw Error(t)
                },
                fromWordsUnsafe: function(e) {
                    var t = convert(e, 5, 8, !1);
                    if (Array.isArray(t)) return t
                },
                fromWords: function(e) {
                    var t = convert(e, 5, 8, !1);
                    if (Array.isArray(t)) return t;
                    throw Error(t)
                }
            }
        },
        55336: function(e, t, r) {
            t.utils = r(65794), t.common = r(49619), t.sha = r(53610), t.ripemd = r(17721), t.hmac = r(56432), t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160
        },
        49619: function(e, t, r) {
            "use strict";
            var n = r(65794),
                i = r(8786);

            function BlockHash() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            t.BlockHash = BlockHash, BlockHash.prototype.update = function(e, t) {
                if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                    var r = (e = this.pending).length % this._delta8;
                    this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
                    for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
                }
                return this
            }, BlockHash.prototype.digest = function(e) {
                return this.update(this._pad()), i(null === this.pending), this._digest(e)
            }, BlockHash.prototype._pad = function() {
                var e = this.pendingTotal,
                    t = this._delta8,
                    r = t - (e + this.padLength) % t,
                    n = Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (e <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                    n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e
                } else
                    for (o = 8, n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0; o < this.padLength; o++) n[i++] = 0;
                return n
            }
        },
        56432: function(e, t, r) {
            "use strict";
            var n = r(65794),
                i = r(8786);

            function Hmac(e, t, r) {
                if (!(this instanceof Hmac)) return new Hmac(e, t, r);
                this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r))
            }
            e.exports = Hmac, Hmac.prototype._init = function(e) {
                e.length > this.blockSize && (e = new this.Hash().update(e).digest()), i(e.length <= this.blockSize);
                for (var t = e.length; t < this.blockSize; t++) e.push(0);
                for (t = 0; t < e.length; t++) e[t] ^= 54;
                for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++) e[t] ^= 106;
                this.outer = new this.Hash().update(e)
            }, Hmac.prototype.update = function(e, t) {
                return this.inner.update(e, t), this
            }, Hmac.prototype.digest = function(e) {
                return this.outer.update(this.inner.digest()), this.outer.digest(e)
            }
        },
        17721: function(e, t, r) {
            "use strict";
            var n = r(65794),
                i = r(49619),
                o = n.rotl32,
                s = n.sum32,
                a = n.sum32_3,
                l = n.sum32_4,
                u = i.BlockHash;

            function RIPEMD160() {
                if (!(this instanceof RIPEMD160)) return new RIPEMD160;
                u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function f(e, t, r, n) {
                return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
            }
            n.inherits(RIPEMD160, u), t.ripemd160 = RIPEMD160, RIPEMD160.blockSize = 512, RIPEMD160.outSize = 160, RIPEMD160.hmacStrength = 192, RIPEMD160.padLength = 64, RIPEMD160.prototype._update = function(e, t) {
                for (var r = this.h[0], n = this.h[1], i = this.h[2], u = this.h[3], m = this.h[4], g = r, A = n, y = i, v = u, b = m, w = 0; w < 80; w++) {
                    var E, k, _ = s(o(l(r, f(w, n, i, u), e[c[w] + t], (E = w) <= 15 ? 0 : E <= 31 ? 1518500249 : E <= 47 ? 1859775393 : E <= 63 ? 2400959708 : 2840853838), d[w]), m);
                    r = m, m = u, u = o(i, 10), i = n, n = _, _ = s(o(l(g, f(79 - w, A, y, v), e[h[w] + t], (k = w) <= 15 ? 1352829926 : k <= 31 ? 1548603684 : k <= 47 ? 1836072691 : k <= 63 ? 2053994217 : 0), p[w]), b), g = b, b = v, v = o(y, 10), y = A, A = _
                }
                _ = a(this.h[1], i, v), this.h[1] = a(this.h[2], u, b), this.h[2] = a(this.h[3], m, g), this.h[3] = a(this.h[4], r, A), this.h[4] = a(this.h[0], n, y), this.h[0] = _
            }, RIPEMD160.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
            };
            var c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                h = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                d = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                p = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        },
        53610: function(e, t, r) {
            "use strict";
            t.sha1 = r(22490), t.sha224 = r(10627), t.sha256 = r(78101), t.sha384 = r(11629), t.sha512 = r(20368)
        },
        22490: function(e, t, r) {
            "use strict";
            var n = r(65794),
                i = r(49619),
                o = r(52770),
                s = n.rotl32,
                a = n.sum32,
                l = n.sum32_5,
                u = o.ft_1,
                c = i.BlockHash,
                h = [1518500249, 1859775393, 2400959708, 3395469782];

            function SHA1() {
                if (!(this instanceof SHA1)) return new SHA1;
                c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
            }
            n.inherits(SHA1, c), e.exports = SHA1, SHA1.blockSize = 512, SHA1.outSize = 160, SHA1.hmacStrength = 80, SHA1.padLength = 64, SHA1.prototype._update = function(e, t) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0],
                    o = this.h[1],
                    c = this.h[2],
                    d = this.h[3],
                    p = this.h[4];
                for (n = 0; n < r.length; n++) {
                    var m = ~~(n / 20),
                        g = l(s(i, 5), u(m, o, c, d), p, r[n], h[m]);
                    p = d, d = c, c = s(o, 30), o = i, i = g
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], c), this.h[3] = a(this.h[3], d), this.h[4] = a(this.h[4], p)
            }, SHA1.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        10627: function(e, t, r) {
            "use strict";
            var n = r(65794),
                i = r(78101);

            function SHA224() {
                if (!(this instanceof SHA224)) return new SHA224;
                i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            n.inherits(SHA224, i), e.exports = SHA224, SHA224.blockSize = 512, SHA224.outSize = 224, SHA224.hmacStrength = 192, SHA224.padLength = 64, SHA224.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
            }
        },
        78101: function(e, t, r) {
            "use strict";
            var n = r(65794),
                i = r(49619),
                o = r(52770),
                s = r(8786),
                a = n.sum32,
                l = n.sum32_4,
                u = n.sum32_5,
                c = o.ch32,
                h = o.maj32,
                d = o.s0_256,
                p = o.s1_256,
                m = o.g0_256,
                g = o.g1_256,
                A = i.BlockHash,
                y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function SHA256() {
                if (!(this instanceof SHA256)) return new SHA256;
                A.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = y, this.W = Array(64)
            }
            n.inherits(SHA256, A), e.exports = SHA256, SHA256.blockSize = 512, SHA256.outSize = 256, SHA256.hmacStrength = 192, SHA256.padLength = 64, SHA256.prototype._update = function(e, t) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                for (; n < r.length; n++) r[n] = l(g(r[n - 2]), r[n - 7], m(r[n - 15]), r[n - 16]);
                var i = this.h[0],
                    o = this.h[1],
                    A = this.h[2],
                    y = this.h[3],
                    v = this.h[4],
                    b = this.h[5],
                    w = this.h[6],
                    E = this.h[7];
                for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
                    var k = u(E, p(v), c(v, b, w), this.k[n], r[n]),
                        _ = a(d(i), h(i, o, A));
                    E = w, w = b, b = v, v = a(y, k), y = A, A = o, o = i, i = a(k, _)
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], A), this.h[3] = a(this.h[3], y), this.h[4] = a(this.h[4], v), this.h[5] = a(this.h[5], b), this.h[6] = a(this.h[6], w), this.h[7] = a(this.h[7], E)
            }, SHA256.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        11629: function(e, t, r) {
            "use strict";
            var n = r(65794),
                i = r(20368);

            function SHA384() {
                if (!(this instanceof SHA384)) return new SHA384;
                i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            n.inherits(SHA384, i), e.exports = SHA384, SHA384.blockSize = 1024, SHA384.outSize = 384, SHA384.hmacStrength = 192, SHA384.padLength = 128, SHA384.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
            }
        },
        20368: function(e, t, r) {
            "use strict";
            var n = r(65794),
                i = r(49619),
                o = r(8786),
                s = n.rotr64_hi,
                a = n.rotr64_lo,
                l = n.shr64_hi,
                u = n.shr64_lo,
                c = n.sum64,
                h = n.sum64_hi,
                d = n.sum64_lo,
                p = n.sum64_4_hi,
                m = n.sum64_4_lo,
                g = n.sum64_5_hi,
                A = n.sum64_5_lo,
                y = i.BlockHash,
                v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function SHA512() {
                if (!(this instanceof SHA512)) return new SHA512;
                y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = v, this.W = Array(160)
            }
            n.inherits(SHA512, y), e.exports = SHA512, SHA512.blockSize = 1024, SHA512.outSize = 512, SHA512.hmacStrength = 192, SHA512.padLength = 128, SHA512.prototype._prepareBlock = function(e, t) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
                for (; n < r.length; n += 2) {
                    var i = function(e, t) {
                            var r = s(e, t, 19) ^ s(t, e, 29) ^ l(e, t, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 4], r[n - 3]),
                        o = function(e, t) {
                            var r = a(e, t, 19) ^ a(t, e, 29) ^ u(e, t, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 4], r[n - 3]),
                        c = r[n - 14],
                        h = r[n - 13],
                        d = function(e, t) {
                            var r = s(e, t, 1) ^ s(e, t, 8) ^ l(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 30], r[n - 29]),
                        g = function(e, t) {
                            var r = a(e, t, 1) ^ a(e, t, 8) ^ u(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 30], r[n - 29]),
                        A = r[n - 32],
                        y = r[n - 31];
                    r[n] = p(i, o, c, h, d, g, A, y), r[n + 1] = m(i, o, c, h, d, g, A, y)
                }
            }, SHA512.prototype._update = function(e, t) {
                this._prepareBlock(e, t);
                var r = this.W,
                    n = this.h[0],
                    i = this.h[1],
                    l = this.h[2],
                    u = this.h[3],
                    p = this.h[4],
                    m = this.h[5],
                    y = this.h[6],
                    v = this.h[7],
                    b = this.h[8],
                    w = this.h[9],
                    E = this.h[10],
                    k = this.h[11],
                    _ = this.h[12],
                    P = this.h[13],
                    C = this.h[14],
                    S = this.h[15];
                o(this.k.length === r.length);
                for (var N = 0; N < r.length; N += 2) {
                    var I = C,
                        x = S,
                        B = function(e, t) {
                            var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
                            return r < 0 && (r += 4294967296), r
                        }(b, w),
                        R = function(e, t) {
                            var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
                            return r < 0 && (r += 4294967296), r
                        }(b, w),
                        T = function(e, t, r, n, i) {
                            var o = e & r ^ ~e & i;
                            return o < 0 && (o += 4294967296), o
                        }(b, 0, E, 0, _, P),
                        O = function(e, t, r, n, i, o) {
                            var s = t & n ^ ~t & o;
                            return s < 0 && (s += 4294967296), s
                        }(0, w, 0, k, 0, P),
                        D = this.k[N],
                        F = this.k[N + 1],
                        M = r[N],
                        L = r[N + 1],
                        H = g(I, x, B, R, T, O, D, F, M, L),
                        z = A(I, x, B, R, T, O, D, F, M, L);
                    I = function(e, t) {
                        var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
                        return r < 0 && (r += 4294967296), r
                    }(n, i);
                    var G = h(I, x = function(e, t) {
                            var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }(n, i), B = function(e, t, r, n, i) {
                            var o = e & r ^ e & i ^ r & i;
                            return o < 0 && (o += 4294967296), o
                        }(n, 0, l, 0, p, m), R = function(e, t, r, n, i, o) {
                            var s = t & n ^ t & o ^ n & o;
                            return s < 0 && (s += 4294967296), s
                        }(0, i, 0, u, 0, m)),
                        Y = d(I, x, B, R);
                    C = _, S = P, _ = E, P = k, E = b, k = w, b = h(y, v, H, z), w = d(v, v, H, z), y = p, v = m, p = l, m = u, l = n, u = i, n = h(H, z, G, Y), i = d(H, z, G, Y)
                }
                c(this.h, 0, n, i), c(this.h, 2, l, u), c(this.h, 4, p, m), c(this.h, 6, y, v), c(this.h, 8, b, w), c(this.h, 10, E, k), c(this.h, 12, _, P), c(this.h, 14, C, S)
            }, SHA512.prototype._digest = function(e) {
                return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        52770: function(e, t, r) {
            "use strict";
            var n = r(65794).rotr32;

            function maj32(e, t, r) {
                return e & t ^ e & r ^ t & r
            }
            t.ft_1 = function(e, t, r, n) {
                return 0 === e ? t & r ^ ~t & n : 1 === e || 3 === e ? t ^ r ^ n : 2 === e ? maj32(t, r, n) : void 0
            }, t.ch32 = function(e, t, r) {
                return e & t ^ ~e & r
            }, t.maj32 = maj32, t.p32 = function(e, t, r) {
                return e ^ t ^ r
            }, t.s0_256 = function(e) {
                return n(e, 2) ^ n(e, 13) ^ n(e, 22)
            }, t.s1_256 = function(e) {
                return n(e, 6) ^ n(e, 11) ^ n(e, 25)
            }, t.g0_256 = function(e) {
                return n(e, 7) ^ n(e, 18) ^ e >>> 3
            }, t.g1_256 = function(e) {
                return n(e, 17) ^ n(e, 19) ^ e >>> 10
            }
        },
        65794: function(e, t, r) {
            "use strict";
            var n = r(8786),
                i = r(75335);

            function htonl(e) {
                return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
            }

            function zero2(e) {
                return 1 === e.length ? "0" + e : e
            }

            function zero8(e) {
                if (7 === e.length) return "0" + e;
                if (6 === e.length) return "00" + e;
                if (5 === e.length) return "000" + e;
                if (4 === e.length) return "0000" + e;
                if (3 === e.length) return "00000" + e;
                if (2 === e.length) return "000000" + e;
                if (1 === e.length) return "0000000" + e;
                else return e
            }
            t.inherits = i, t.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" == typeof e) {
                    if (t) {
                        if ("hex" === t)
                            for ((e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
                    } else
                        for (var n = 0, i = 0; i < e.length; i++) {
                            var o, s, a = e.charCodeAt(i);
                            a < 128 ? r[n++] = a : (a < 2048 ? r[n++] = a >> 6 | 192 : ((o = e, s = i, (64512 & o.charCodeAt(s)) != 55296 || s < 0 || s + 1 >= o.length ? 1 : (64512 & o.charCodeAt(s + 1)) != 56320) ? r[n++] = a >> 12 | 224 : (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = a >> 18 | 240, r[n++] = a >> 12 & 63 | 128), r[n++] = a >> 6 & 63 | 128), r[n++] = 63 & a | 128)
                        }
                } else
                    for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
                return r
            }, t.toHex = function(e) {
                for (var t = "", r = 0; r < e.length; r++) t += zero2(e[r].toString(16));
                return t
            }, t.htonl = htonl, t.toHex32 = function(e, t) {
                for (var r = "", n = 0; n < e.length; n++) {
                    var i = e[n];
                    "little" === t && (i = htonl(i)), r += zero8(i.toString(16))
                }
                return r
            }, t.zero2 = zero2, t.zero8 = zero8, t.join32 = function(e, t, r, i) {
                var o, s = r - t;
                n(s % 4 == 0);
                for (var a = Array(s / 4), l = 0, u = t; l < a.length; l++, u += 4) o = "big" === i ? e[u] << 24 | e[u + 1] << 16 | e[u + 2] << 8 | e[u + 3] : e[u + 3] << 24 | e[u + 2] << 16 | e[u + 1] << 8 | e[u], a[l] = o >>> 0;
                return a
            }, t.split32 = function(e, t) {
                for (var r = Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
                    var o = e[n];
                    "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
                }
                return r
            }, t.rotr32 = function(e, t) {
                return e >>> t | e << 32 - t
            }, t.rotl32 = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.sum32 = function(e, t) {
                return e + t >>> 0
            }, t.sum32_3 = function(e, t, r) {
                return e + t + r >>> 0
            }, t.sum32_4 = function(e, t, r, n) {
                return e + t + r + n >>> 0
            }, t.sum32_5 = function(e, t, r, n, i) {
                return e + t + r + n + i >>> 0
            }, t.sum64 = function(e, t, r, n) {
                var i = e[t],
                    o = n + e[t + 1] >>> 0;
                e[t] = (o < n ? 1 : 0) + r + i >>> 0, e[t + 1] = o
            }, t.sum64_hi = function(e, t, r, n) {
                return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
            }, t.sum64_lo = function(e, t, r, n) {
                return t + n >>> 0
            }, t.sum64_4_hi = function(e, t, r, n, i, o, s, a) {
                var l, u = t;
                return e + r + i + s + (0 + ((u = u + n >>> 0) < t ? 1 : 0) + ((u = u + o >>> 0) < o ? 1 : 0) + ((u = u + a >>> 0) < a ? 1 : 0)) >>> 0
            }, t.sum64_4_lo = function(e, t, r, n, i, o, s, a) {
                return t + n + o + a >>> 0
            }, t.sum64_5_hi = function(e, t, r, n, i, o, s, a, l, u) {
                var c, h = t;
                return e + r + i + s + l + (0 + ((h = h + n >>> 0) < t ? 1 : 0) + ((h = h + o >>> 0) < o ? 1 : 0) + ((h = h + a >>> 0) < a ? 1 : 0) + ((h = h + u >>> 0) < u ? 1 : 0)) >>> 0
            }, t.sum64_5_lo = function(e, t, r, n, i, o, s, a, l, u) {
                return t + n + o + a + u >>> 0
            }, t.rotr64_hi = function(e, t, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, t.rotr64_lo = function(e, t, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, t.shr64_hi = function(e, t, r) {
                return e >>> r
            }, t.shr64_lo = function(e, t, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }
        },
        75335: function(e) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var TempCtor = function() {};
                    TempCtor.prototype = t.prototype, e.prototype = new TempCtor, e.prototype.constructor = e
                }
            }
        },
        26398: function(e, t, r) {
            var n, i = r(25566);
            ! function() {
                "use strict";
                var o = "input is invalid type",
                    s = "object" == typeof window,
                    a = s ? window : {};
                a.JS_SHA3_NO_WINDOW && (s = !1);
                var l = !s && "object" == typeof self;
                !a.JS_SHA3_NO_NODE_JS && "object" == typeof i && i.versions && i.versions.node ? a = r.g : l && (a = self);
                var u = !a.JS_SHA3_NO_COMMON_JS && e.exports,
                    c = r.amdO,
                    h = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    d = "0123456789abcdef".split(""),
                    p = [4, 1024, 262144, 67108864],
                    m = [0, 8, 16, 24],
                    g = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    A = [224, 256, 384, 512],
                    y = [128, 256],
                    v = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    b = {
                        128: 168,
                        256: 136
                    };
                (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }), h && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(e) {
                    return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                });
                for (var createOutputMethod = function(e, t, r) {
                        return function(n) {
                            return new Keccak(e, t, e).update(n)[r]()
                        }
                    }, createShakeOutputMethod = function(e, t, r) {
                        return function(n, i) {
                            return new Keccak(e, t, i).update(n)[r]()
                        }
                    }, createCshakeOutputMethod = function(e, t, r) {
                        return function(t, n, i, o) {
                            return E["cshake" + e].update(t, n, i, o)[r]()
                        }
                    }, createKmacOutputMethod = function(e, t, r) {
                        return function(t, n, i, o) {
                            return E["kmac" + e].update(t, n, i, o)[r]()
                        }
                    }, createOutputMethods = function(e, t, r, n) {
                        for (var i = 0; i < v.length; ++i) {
                            var o = v[i];
                            e[o] = t(r, n, o)
                        }
                        return e
                    }, createMethod = function(e, t) {
                        var r = createOutputMethod(e, t, "hex");
                        return r.create = function() {
                            return new Keccak(e, t, e)
                        }, r.update = function(e) {
                            return r.create().update(e)
                        }, createOutputMethods(r, createOutputMethod, e, t)
                    }, w = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: A,
                        createMethod: createMethod
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: A,
                        createMethod: createMethod
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: y,
                        createMethod: function(e, t) {
                            var r = createShakeOutputMethod(e, t, "hex");
                            return r.create = function(r) {
                                return new Keccak(e, t, r)
                            }, r.update = function(e, t) {
                                return r.create(t).update(e)
                            }, createOutputMethods(r, createShakeOutputMethod, e, t)
                        }
                    }, {
                        name: "cshake",
                        padding: p,
                        bits: y,
                        createMethod: function(e, t) {
                            var r = b[e],
                                n = createCshakeOutputMethod(e, t, "hex");
                            return n.create = function(n, i, o) {
                                return i || o ? new Keccak(e, t, n).bytepad([i, o], r) : E["shake" + e].create(n)
                            }, n.update = function(e, t, r, i) {
                                return n.create(t, r, i).update(e)
                            }, createOutputMethods(n, createCshakeOutputMethod, e, t)
                        }
                    }, {
                        name: "kmac",
                        padding: p,
                        bits: y,
                        createMethod: function(e, t) {
                            var r = b[e],
                                n = createKmacOutputMethod(e, t, "hex");
                            return n.create = function(n, i, o) {
                                return new Kmac(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r)
                            }, n.update = function(e, t, r, i) {
                                return n.create(e, r, i).update(t)
                            }, createOutputMethods(n, createKmacOutputMethod, e, t)
                        }
                    }], E = {}, k = [], _ = 0; _ < w.length; ++_)
                    for (var P = w[_], C = P.bits, S = 0; S < C.length; ++S) {
                        var N = P.name + "_" + C[S];
                        if (k.push(N), E[N] = P.createMethod(C[S], P.padding), "sha3" !== P.name) {
                            var I = P.name + C[S];
                            k.push(I), E[I] = E[N]
                        }
                    }

                function Keccak(e, t, r) {
                    this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }

                function Kmac(e, t, r) {
                    Keccak.call(this, e, t, r)
                }
                Keccak.prototype.update = function(e) {
                    if (this.finalized) throw Error("finalize already called");
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === e) throw Error(o);
                            if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw Error(o)
                        } else throw Error(o);
                        t = !0
                    }
                    for (var n, i, s = this.blocks, a = this.byteCount, l = e.length, u = this.blockCount, c = 0, d = this.s; c < l;) {
                        if (this.reset)
                            for (n = 1, this.reset = !1, s[0] = this.block; n < u + 1; ++n) s[n] = 0;
                        if (t)
                            for (n = this.start; c < l && n < a; ++c) s[n >> 2] |= e[c] << m[3 & n++];
                        else
                            for (n = this.start; c < l && n < a; ++c)(i = e.charCodeAt(c)) < 128 ? s[n >> 2] |= i << m[3 & n++] : (i < 2048 ? s[n >> 2] |= (192 | i >> 6) << m[3 & n++] : (i < 55296 || i >= 57344 ? s[n >> 2] |= (224 | i >> 12) << m[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++c)), s[n >> 2] |= (240 | i >> 18) << m[3 & n++], s[n >> 2] |= (128 | i >> 12 & 63) << m[3 & n++]), s[n >> 2] |= (128 | i >> 6 & 63) << m[3 & n++]), s[n >> 2] |= (128 | 63 & i) << m[3 & n++]);
                        if (this.lastByteIndex = n, n >= a) {
                            for (this.start = n - a, this.block = s[u], n = 0; n < u; ++n) d[n] ^= s[n];
                            f(d), this.reset = !0
                        } else this.start = n
                    }
                    return this
                }, Keccak.prototype.encode = function(e, t) {
                    var r = 255 & e,
                        n = 1,
                        i = [r];
                    for (e >>= 8, r = 255 & e; r > 0;) i.unshift(r), e >>= 8, r = 255 & e, ++n;
                    return t ? i.push(n) : i.unshift(n), this.update(i), i.length
                }, Keccak.prototype.encodeString = function(e) {
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === e) throw Error(o);
                            if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw Error(o)
                        } else throw Error(o);
                        t = !0
                    }
                    var n = 0,
                        i = e.length;
                    if (t) n = i;
                    else
                        for (var s = 0; s < e.length; ++s) {
                            var a = e.charCodeAt(s);
                            a < 128 ? n += 1 : a < 2048 ? n += 2 : a < 55296 || a >= 57344 ? n += 3 : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++s)), n += 4)
                        }
                    return n += this.encode(8 * n), this.update(e), n
                }, Keccak.prototype.bytepad = function(e, t) {
                    for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]);
                    var i = t - r % t,
                        o = [];
                    return o.length = i, this.update(o), this
                }, Keccak.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks,
                            t = this.lastByteIndex,
                            r = this.blockCount,
                            n = this.s;
                        if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                            for (t = 1, e[0] = e[r]; t < r + 1; ++t) e[t] = 0;
                        for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                        f(n)
                    }
                }, Keccak.prototype.toString = Keccak.prototype.hex = function() {
                    this.finalize();
                    for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = ""; s < n;) {
                        for (o = 0; o < t && s < n; ++o, ++s) a += d[(e = r[o]) >> 4 & 15] + d[15 & e] + d[e >> 12 & 15] + d[e >> 8 & 15] + d[e >> 20 & 15] + d[e >> 16 & 15] + d[e >> 28 & 15] + d[e >> 24 & 15];
                        s % t == 0 && (f(r), o = 0)
                    }
                    return i && (a += d[(e = r[o]) >> 4 & 15] + d[15 & e], i > 1 && (a += d[e >> 12 & 15] + d[e >> 8 & 15]), i > 2 && (a += d[e >> 20 & 15] + d[e >> 16 & 15])), a
                }, Keccak.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e, t = this.blockCount,
                        r = this.s,
                        n = this.outputBlocks,
                        i = this.extraBytes,
                        o = 0,
                        s = 0,
                        a = this.outputBits >> 3;
                    e = new ArrayBuffer(i ? n + 1 << 2 : a);
                    for (var l = new Uint32Array(e); s < n;) {
                        for (o = 0; o < t && s < n; ++o, ++s) l[s] = r[o];
                        s % t == 0 && f(r)
                    }
                    return i && (l[o] = r[o], e = e.slice(0, a)), e
                }, Keccak.prototype.buffer = Keccak.prototype.arrayBuffer, Keccak.prototype.digest = Keccak.prototype.array = function() {
                    this.finalize();
                    for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, l = []; a < i;) {
                        for (s = 0; s < r && a < i; ++s, ++a) e = a << 2, t = n[s], l[e] = 255 & t, l[e + 1] = t >> 8 & 255, l[e + 2] = t >> 16 & 255, l[e + 3] = t >> 24 & 255;
                        a % r == 0 && f(n)
                    }
                    return o && (e = a << 2, t = n[s], l[e] = 255 & t, o > 1 && (l[e + 1] = t >> 8 & 255), o > 2 && (l[e + 2] = t >> 16 & 255)), l
                }, Kmac.prototype = new Keccak, Kmac.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), Keccak.prototype.finalize.call(this)
                };
                var f = function(e) {
                    var t, r, n, i, o, s, a, l, u, c, h, d, p, m, A, y, v, b, w, E, k, _, P, C, S, N, I, x, B, R, T, O, D, F, M, L, H, z, G, Y, U, K, q, J, j, Q, V, X, W, Z, $, ee, et, er, en, ei, eo, es, ea, el, eu, ef, ec;
                    for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48], p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49], t = d ^ (s << 1 | a >>> 31), r = p ^ (a << 1 | s >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (l << 1 | u >>> 31), r = o ^ (u << 1 | l >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = s ^ (c << 1 | h >>> 31), r = a ^ (h << 1 | c >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = l ^ (d << 1 | p >>> 31), r = u ^ (p << 1 | d >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = c ^ (i << 1 | o >>> 31), r = h ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, m = e[0], A = e[1], Q = e[11] << 4 | e[10] >>> 28, V = e[10] << 4 | e[11] >>> 28, x = e[20] << 3 | e[21] >>> 29, B = e[21] << 3 | e[20] >>> 29, el = e[31] << 9 | e[30] >>> 23, eu = e[30] << 9 | e[31] >>> 23, K = e[40] << 18 | e[41] >>> 14, q = e[41] << 18 | e[40] >>> 14, F = e[2] << 1 | e[3] >>> 31, M = e[3] << 1 | e[2] >>> 31, y = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, X = e[22] << 10 | e[23] >>> 22, W = e[23] << 10 | e[22] >>> 22, R = e[33] << 13 | e[32] >>> 19, T = e[32] << 13 | e[33] >>> 19, ef = e[42] << 2 | e[43] >>> 30, ec = e[43] << 2 | e[42] >>> 30, er = e[5] << 30 | e[4] >>> 2, en = e[4] << 30 | e[5] >>> 2, L = e[14] << 6 | e[15] >>> 26, H = e[15] << 6 | e[14] >>> 26, b = e[25] << 11 | e[24] >>> 21, w = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, $ = e[35] << 15 | e[34] >>> 17, O = e[45] << 29 | e[44] >>> 3, D = e[44] << 29 | e[45] >>> 3, C = e[6] << 28 | e[7] >>> 4, S = e[7] << 28 | e[6] >>> 4, ei = e[17] << 23 | e[16] >>> 9, eo = e[16] << 23 | e[17] >>> 9, z = e[26] << 25 | e[27] >>> 7, G = e[27] << 25 | e[26] >>> 7, E = e[36] << 21 | e[37] >>> 11, k = e[37] << 21 | e[36] >>> 11, ee = e[47] << 24 | e[46] >>> 8, et = e[46] << 24 | e[47] >>> 8, J = e[8] << 27 | e[9] >>> 5, j = e[9] << 27 | e[8] >>> 5, N = e[18] << 20 | e[19] >>> 12, I = e[19] << 20 | e[18] >>> 12, es = e[29] << 7 | e[28] >>> 25, ea = e[28] << 7 | e[29] >>> 25, Y = e[38] << 8 | e[39] >>> 24, U = e[39] << 8 | e[38] >>> 24, _ = e[48] << 14 | e[49] >>> 18, P = e[49] << 14 | e[48] >>> 18, e[0] = m ^ ~y & b, e[1] = A ^ ~v & w, e[10] = C ^ ~N & x, e[11] = S ^ ~I & B, e[20] = F ^ ~L & z, e[21] = M ^ ~H & G, e[30] = J ^ ~Q & X, e[31] = j ^ ~V & W, e[40] = er ^ ~ei & es, e[41] = en ^ ~eo & ea, e[2] = y ^ ~b & E, e[3] = v ^ ~w & k, e[12] = N ^ ~x & R, e[13] = I ^ ~B & T, e[22] = L ^ ~z & Y, e[23] = H ^ ~G & U, e[32] = Q ^ ~X & Z, e[33] = V ^ ~W & $, e[42] = ei ^ ~es & el, e[43] = eo ^ ~ea & eu, e[4] = b ^ ~E & _, e[5] = w ^ ~k & P, e[14] = x ^ ~R & O, e[15] = B ^ ~T & D, e[24] = z ^ ~Y & K, e[25] = G ^ ~U & q, e[34] = X ^ ~Z & ee, e[35] = W ^ ~$ & et, e[44] = es ^ ~el & ef, e[45] = ea ^ ~eu & ec, e[6] = E ^ ~_ & m, e[7] = k ^ ~P & A, e[16] = R ^ ~O & C, e[17] = T ^ ~D & S, e[26] = Y ^ ~K & F, e[27] = U ^ ~q & M, e[36] = Z ^ ~ee & J, e[37] = $ ^ ~et & j, e[46] = el ^ ~ef & er, e[47] = eu ^ ~ec & en, e[8] = _ ^ ~m & y, e[9] = P ^ ~A & v, e[18] = O ^ ~C & N, e[19] = D ^ ~S & I, e[28] = K ^ ~F & L, e[29] = q ^ ~M & H, e[38] = ee ^ ~J & Q, e[39] = et ^ ~j & V, e[48] = ef ^ ~er & ei, e[49] = ec ^ ~en & eo, e[0] ^= g[n], e[1] ^= g[n + 1]
                };
                if (u) e.exports = E;
                else {
                    for (_ = 0; _ < k.length; ++_) a[k[_]] = E[k[_]];
                    c && void 0 !== (n = (function() {
                        return E
                    }).call(t, r, t, e)) && (e.exports = n)
                }
            }()
        },
        8786: function(e) {
            function assert(e, t) {
                if (!e) throw Error(t || "Assertion failed")
            }
            e.exports = assert, assert.equal = function(e, t, r) {
                if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t)
            }
        }
    }
]);