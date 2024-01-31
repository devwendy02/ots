"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8293], {
        76751: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return eF
                },
                C: function() {
                    return eh
                },
                D: function() {
                    return ec
                },
                E: function() {
                    return ef
                },
                I: function() {
                    return eA
                },
                N: function() {
                    return C
                },
                V: function() {
                    return eR
                },
                _: function() {
                    return __awaiter$1
                },
                a: function() {
                    return eu
                },
                b: function() {
                    return getAlchemyWsUrl
                },
                c: function() {
                    return EthersEvent
                },
                d: function() {
                    return function deepCopy(e) {
                        return function(e) {
                            if (function _isFrozen(e) {
                                    if (null == e || eN[typeof e]) return !0;
                                    if (Array.isArray(e) || "object" == typeof e) {
                                        if (!Object.isFrozen(e)) return !1;
                                        let t = Object.keys(e);
                                        for (let r = 0; r < t.length; r++) {
                                            let o = null;
                                            try {
                                                o = e[t[r]]
                                            } catch (e) {
                                                continue
                                            }
                                            if (!_isFrozen(o)) return !1
                                        }
                                        return !0
                                    }
                                    return eT.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
                                }(e)) return e;
                            if (Array.isArray(e)) return Object.freeze(e.map(e => deepCopy(e)));
                            if ("object" == typeof e) {
                                let t = {};
                                for (let r in e) {
                                    let o = e[r];
                                    void 0 !== o && Object.defineProperty(t, r, {
                                        enumerable: !0,
                                        value: deepCopy(o),
                                        writable: !1
                                    })
                                }
                                return t
                            }
                            return eT.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
                        }(e)
                    }
                },
                e: function() {
                    return getAlchemyEventTag
                },
                f: function() {
                    return fromHex
                },
                g: function() {
                    return getAlchemyHttpUrl
                },
                h: function() {
                    return eP
                },
                i: function() {
                    return isAlchemyEvent
                },
                j: function() {
                    return j
                },
                k: function() {
                    return eS
                },
                l: function() {
                    return logWarn
                },
                m: function() {
                    return Alchemy
                },
                n: function() {
                    return noop
                },
                t: function() {
                    return toHex
                },
                v: function() {
                    return verifyAlchemyEventName
                }
            });
            var o, i, n, a, s, l, d, c, u, f, h, g, v, _, m, y, p, E, T, N, A, w, k, O, R, b, I, C, P, S, F, M, B, $, U, D, L, W, G, x, K, H, j, q, z, V, Y, Q, X, J, Z, ee, et, er, eo, ei, en = r(76303),
                ea = r(57273),
                es = r(92598),
                el = r(56016),
                ed = r.n(el);
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
            function __awaiter$1(e, t, r, o) {
                return new(r || (r = Promise))(function(i, n) {
                    function fulfilled(e) {
                        try {
                            step(o.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(o.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((o = o.apply(e, t || [])).next())
                })
            }

            function __await(e) {
                return this instanceof __await ? (this.v = e, this) : new __await(e)
            }

            function __asyncGenerator(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var o, i = r.apply(e, t || []),
                    n = [];
                return o = {}, verb("next"), verb("throw"), verb("return"), o[Symbol.asyncIterator] = function() {
                    return this
                }, o;

                function verb(e) {
                    i[e] && (o[e] = function(t) {
                        return new Promise(function(r, o) {
                            n.push([e, t, r, o]) > 1 || resume(e, t)
                        })
                    })
                }

                function resume(e, t) {
                    try {
                        var r;
                        (r = i[e](t)).value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(n[0][2], r)
                    } catch (e) {
                        settle(n[0][3], e)
                    }
                }

                function fulfill(e) {
                    resume("next", e)
                }

                function reject(e) {
                    resume("throw", e)
                }

                function settle(e, t) {
                    e(t), n.shift(), n.length && resume(n[0][0], n[0][1])
                }
            }

            function __asyncValues(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        r = t && e[t],
                        o = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && o >= e.length && (e = void 0), {
                                value: e && e[o++],
                                done: !e
                            }
                        }
                    };
                    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(e), t = {}, verb("next"), verb("throw"), verb("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function verb(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(o, i) {
                            ! function(e, t, r, o) {
                                Promise.resolve(o).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(o, i, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }(o = C || (C = {})).ETH_MAINNET = "eth-mainnet", o.ETH_ROPSTEN = "eth-ropsten", o.ETH_GOERLI = "eth-goerli", o.ETH_KOVAN = "eth-kovan", o.ETH_RINKEBY = "eth-rinkeby", o.ETH_SEPOLIA = "eth-sepolia", o.OPT_MAINNET = "opt-mainnet", o.OPT_KOVAN = "opt-kovan", o.OPT_GOERLI = "opt-goerli", o.OPT_SEPOLIA = "opt-sepolia", o.ARB_MAINNET = "arb-mainnet", o.ARB_RINKEBY = "arb-rinkeby", o.ARB_GOERLI = "arb-goerli", o.ARB_SEPOLIA = "arb-sepolia", o.MATIC_MAINNET = "polygon-mainnet", o.MATIC_MUMBAI = "polygon-mumbai", o.ASTAR_MAINNET = "astar-mainnet", o.POLYGONZKEVM_MAINNET = "polygonzkevm-mainnet", o.POLYGONZKEVM_TESTNET = "polygonzkevm-testnet", o.BASE_MAINNET = "base-mainnet", o.BASE_GOERLI = "base-goerli", o.BASE_SEPOLIA = "base-sepolia", (i = P || (P = {})).DEFAULT_TOKENS = "DEFAULT_TOKENS", i.ERC20 = "erc20", (n = S || (S = {})).EXTERNAL = "external", n.INTERNAL = "internal", n.ERC20 = "erc20", n.ERC721 = "erc721", n.ERC1155 = "erc1155", n.SPECIALNFT = "specialnft", (a = F || (F = {})).ASCENDING = "asc", a.DESCENDING = "desc", (s = M || (M = {})).ERC721 = "ERC721", s.ERC1155 = "ERC1155", s.NO_SUPPORTED_NFT_STANDARD = "NO_SUPPORTED_NFT_STANDARD", s.NOT_A_CONTRACT = "NOT_A_CONTRACT", s.UNKNOWN = "UNKNOWN", (l = B || (B = {})).Erc721TooManyOwners = "Erc721TooManyOwners", l.Erc721TooManyTokens = "Erc721TooManyTokens", l.Erc721DishonestTotalSupply = "Erc721DishonestTotalSupply", l.MostlyHoneyPotOwners = "MostlyHoneyPotOwners", l.OwnedByMostHoneyPots = "OwnedByMostHoneyPots", (d = $ || ($ = {})).SPAM = "SPAM", d.AIRDROPS = "AIRDROPS", (c = U || (U = {})).SPAM = "SPAM", c.AIRDROPS = "AIRDROPS", (D || (D = {})).TRANSFERTIME = "TRANSFERTIME", (u = L || (L = {})).TO = "TO", u.FROM = "FROM", (f = W || (W = {})).ASCENDING = "asc", f.DESCENDING = "desc", (h = G || (G = {})).SEAPORT = "seaport", h.LOOKSRARE = "looksrare", h.X2Y2 = "x2y2", h.WYVERN = "wyvern", h.CRYPTOPUNKS = "cryptopunks", h.BLUR = "blur", h.UNKNOWN = "unknown", (g = x || (x = {})).BUYER = "buyer", g.SELLER = "seller", (v = K || (K = {})).DOES_NOT_EXIST = "does_not_exist", v.ALREADY_QUEUED = "already_queued", v.IN_PROGRESS = "in_progress", v.FINISHED = "finished", v.QUEUED = "queued", v.QUEUE_FAILED = "queue_failed", (_ = H || (H = {})).VERIFIED = "verified", _.APPROVED = "approved", _.REQUESTED = "requested", _.NOT_REQUESTED = "not_requested", (m = j || (j = {})).PENDING_TRANSACTIONS = "alchemy_pendingTransactions", m.MINED_TRANSACTIONS = "alchemy_minedTransactions", (y = q || (q = {})).NATIVE = "NATIVE", y.ERC20 = "ERC20", y.ERC721 = "ERC721", y.ERC1155 = "ERC1155", y.SPECIAL_NFT = "SPECIAL_NFT", (p = z || (z = {})).APPROVE = "APPROVE", p.TRANSFER = "TRANSFER", (V || (V = {})).ETHERSCAN = "ETHERSCAN", (E = Y || (Y = {})).CREATE = "CREATE", E.CALL = "CALL", E.STATICCALL = "STATICCALL", E.DELEGATECALL = "DELEGATECALL", (T = Q || (Q = {})).UNSPECIFIED = "TRANSACTION_JOB_STATUS_UNSPECIFIED", T.IN_PROGRESS = "IN_PROGRESS", T.COMPLETE = "COMPLETE", T.ABANDONED = "ABANDONED", (N = X || (X = {})).V1 = "V1", N.V2 = "V2", (A = J || (J = {})).MINED_TRANSACTION = "MINED_TRANSACTION", A.DROPPED_TRANSACTION = "DROPPED_TRANSACTION", A.ADDRESS_ACTIVITY = "ADDRESS_ACTIVITY", A.NFT_ACTIVITY = "NFT_ACTIVITY", A.NFT_METADATA_UPDATE = "NFT_METADATA_UPDATE", A.GRAPHQL = "GRAPHQL", (w = Z || (Z = {})).PENDING = "pending", w.LATEST = "latest", w.SAFE = "safe", w.FINALIZED = "finalized", w.EARLIEST = "earliest", (k = ee || (ee = {})).CALL_TRACER = "callTracer", k.PRESTATE_TRACER = "prestateTracer";
            let ec = "demo",
                eu = C.ETH_MAINNET;

            function getAlchemyHttpUrl(e, t) {
                return `https://${e}.g.alchemy.com/v2/${t}`
            }

            function getAlchemyWsUrl(e, t) {
                return `wss://${e}.g.alchemy.com/v2/${t}`
            }(O = et || (et = {}))[O.BASE = 0] = "BASE", O[O.NFT = 1] = "NFT", O[O.WEBHOOK = 2] = "WEBHOOK";
            let ef = {
                    [C.ETH_MAINNET]: "mainnet",
                    [C.ETH_ROPSTEN]: "ropsten",
                    [C.ETH_GOERLI]: "goerli",
                    [C.ETH_KOVAN]: "kovan",
                    [C.ETH_RINKEBY]: "rinkeby",
                    [C.ETH_SEPOLIA]: "sepolia",
                    [C.OPT_MAINNET]: "optimism",
                    [C.OPT_KOVAN]: "optimism-kovan",
                    [C.OPT_GOERLI]: "optimism-goerli",
                    [C.OPT_SEPOLIA]: "optimism-sepolia",
                    [C.ARB_MAINNET]: "arbitrum",
                    [C.ARB_RINKEBY]: "arbitrum-rinkeby",
                    [C.ARB_GOERLI]: "arbitrum-goerli",
                    [C.ARB_SEPOLIA]: "arbitrum-sepolia",
                    [C.MATIC_MAINNET]: "matic",
                    [C.MATIC_MUMBAI]: "maticmum",
                    [C.ASTAR_MAINNET]: "astar-mainnet",
                    [C.POLYGONZKEVM_MAINNET]: "polygonzkevm-mainnet",
                    [C.POLYGONZKEVM_TESTNET]: "polygonzkevm-testnet",
                    [C.BASE_MAINNET]: "base-mainnet",
                    [C.BASE_GOERLI]: "base-goerli",
                    [C.BASE_SEPOLIA]: "base-sepolia"
                },
                eh = {
                    "arbitrum-goerli": {
                        chainId: 421613,
                        name: "arbitrum-goerli"
                    },
                    "arbitrum-sepolia": {
                        chainId: 421614,
                        name: "arbitrum-sepolia"
                    },
                    "astar-mainnet": {
                        chainId: 592,
                        name: "astar-mainnet"
                    },
                    sepolia: {
                        chainId: 11155111,
                        name: "sepolia"
                    },
                    "optimism-sepolia": {
                        chainId: 11155420,
                        name: "optimism-sepolia"
                    },
                    "polygonzkevm-mainnet": {
                        chainId: 1101,
                        name: "polygonzkevm-mainnet"
                    },
                    "polygonzkevm-testnet": {
                        chainId: 1442,
                        name: "polygonzkevm-testnet"
                    },
                    "base-mainnet": {
                        chainId: 8453,
                        name: "base-mainnet"
                    },
                    "base-goerli": {
                        chainId: 84531,
                        name: "base-goerli"
                    },
                    "base-sepolia": {
                        chainId: 84532,
                        name: "base-sepolia"
                    }
                };

            function noop() {}
            let AlchemyConfig = class AlchemyConfig {
                constructor(e) {
                    this.apiKey = (null == e ? void 0 : e.apiKey) || ec, this.network = (null == e ? void 0 : e.network) || eu, this.maxRetries = (null == e ? void 0 : e.maxRetries) || 5, this.url = null == e ? void 0 : e.url, this.authToken = null == e ? void 0 : e.authToken, this.batchRequests = (null == e ? void 0 : e.batchRequests) || !1, this.requestTimeout = (null == e ? void 0 : e.requestTimeout) || 0
                }
                _getRequestUrl(e) {
                    if (void 0 !== this.url) return this.url;
                    if (e === et.NFT) {
                        var t, r;
                        return t = this.network, r = this.apiKey, `https://${t}.g.alchemy.com/nft/v2/${r}`
                    }
                    return e === et.WEBHOOK ? "https://dashboard.alchemy.com/api" : getAlchemyHttpUrl(this.network, this.apiKey)
                }
                getProvider() {
                    return this._baseAlchemyProvider || (this._baseAlchemyProvider = __awaiter$1(this, void 0, void 0, function*() {
                        let {
                            AlchemyProvider: e
                        } = yield Promise.all([r.e(7488), r.e(9637)]).then(r.bind(r, 89637));
                        return new e(this)
                    })), this._baseAlchemyProvider
                }
                getWebSocketProvider() {
                    return this._baseAlchemyWssProvider || (this._baseAlchemyWssProvider = __awaiter$1(this, void 0, void 0, function*() {
                        let {
                            AlchemyWebSocketProvider: e
                        } = yield Promise.all([r.e(7488), r.e(437)]).then(r.bind(r, 60437));
                        return new e(this)
                    })), this._baseAlchemyWssProvider
                }
            };
            let eg = !1,
                ev = !1,
                e_ = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                },
                em = 2,
                ey = null,
                ep = function() {
                    try {
                        let e = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
                                try {
                                    if ("test" !== "test".normalize(t)) throw Error("bad normalize")
                                } catch (r) {
                                    e.push(t)
                                }
                            }), e.length) throw Error("missing " + e.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
                    } catch (e) {
                        return e.message
                    }
                    return null
                }();
            (R = er || (er = {})).DEBUG = "DEBUG", R.INFO = "INFO", R.WARNING = "WARNING", R.ERROR = "ERROR", R.OFF = "OFF", (b = eo || (eo = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", b.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", b.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", b.NETWORK_ERROR = "NETWORK_ERROR", b.SERVER_ERROR = "SERVER_ERROR", b.TIMEOUT = "TIMEOUT", b.BUFFER_OVERRUN = "BUFFER_OVERRUN", b.NUMERIC_FAULT = "NUMERIC_FAULT", b.MISSING_NEW = "MISSING_NEW", b.INVALID_ARGUMENT = "INVALID_ARGUMENT", b.MISSING_ARGUMENT = "MISSING_ARGUMENT", b.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", b.CALL_EXCEPTION = "CALL_EXCEPTION", b.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", b.NONCE_EXPIRED = "NONCE_EXPIRED", b.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", b.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", b.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", b.ACTION_REJECTED = "ACTION_REJECTED";
            let eE = "0123456789abcdef";
            let Logger$1 = class Logger$1 {
                constructor(e) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: e,
                        writable: !1
                    })
                }
                _log(e, t) {
                    let r = e.toLowerCase();
                    null == e_[r] && this.throwArgumentError("invalid log level name", "logLevel", e), em > e_[r] || console.log.apply(console, t)
                }
                debug(...e) {
                    this._log(Logger$1.levels.DEBUG, e)
                }
                info(...e) {
                    this._log(Logger$1.levels.INFO, e)
                }
                warn(...e) {
                    this._log(Logger$1.levels.WARNING, e)
                }
                makeError(e, t, r) {
                    if (ev) return this.makeError("censored error", t, {});
                    t || (t = Logger$1.errors.UNKNOWN_ERROR), r || (r = {});
                    let o = [];
                    Object.keys(r).forEach(e => {
                        let t = r[e];
                        try {
                            if (t instanceof Uint8Array) {
                                let r = "";
                                for (let e = 0; e < t.length; e++) r += eE[t[e] >> 4] + eE[15 & t[e]];
                                o.push(e + "=Uint8Array(0x" + r + ")")
                            } else o.push(e + "=" + JSON.stringify(t))
                        } catch (t) {
                            o.push(e + "=" + JSON.stringify(r[e].toString()))
                        }
                    }), o.push(`code=${t}`), o.push(`version=${this.version}`);
                    let i = e,
                        n = "";
                    switch (t) {
                        case eo.NUMERIC_FAULT:
                            {
                                n = "NUMERIC_FAULT";
                                let t = e;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        n += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        n += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        n += "-unbound-result"
                                }
                                break
                            }
                        case eo.CALL_EXCEPTION:
                        case eo.INSUFFICIENT_FUNDS:
                        case eo.MISSING_NEW:
                        case eo.NONCE_EXPIRED:
                        case eo.REPLACEMENT_UNDERPRICED:
                        case eo.TRANSACTION_REPLACED:
                        case eo.UNPREDICTABLE_GAS_LIMIT:
                            n = t
                    }
                    n && (e += " [ See: https://links.ethers.org/v5-errors-" + n + " ]"), o.length && (e += " (" + o.join(", ") + ")");
                    let a = Error(e);
                    return a.reason = i, a.code = t, Object.keys(r).forEach(function(e) {
                        a[e] = r[e]
                    }), a
                }
                throwError(e, t, r) {
                    throw this.makeError(e, t, r)
                }
                throwArgumentError(e, t, r) {
                    return this.throwError(e, Logger$1.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: r
                    })
                }
                assert(e, t, r, o) {
                    e || this.throwError(t, r, o)
                }
                assertArgument(e, t, r, o) {
                    e || this.throwArgumentError(t, r, o)
                }
                checkNormalize(e) {
                    ep && this.throwError("platform missing String.prototype.normalize", Logger$1.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: ep
                    })
                }
                checkSafeUint53(e, t) {
                    "number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, Logger$1.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: e
                    }), e % 1 && this.throwError(t, Logger$1.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: e
                    }))
                }
                checkArgumentCount(e, t, r) {
                    r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, Logger$1.errors.MISSING_ARGUMENT, {
                        count: e,
                        expectedCount: t
                    }), e > t && this.throwError("too many arguments" + r, Logger$1.errors.UNEXPECTED_ARGUMENT, {
                        count: e,
                        expectedCount: t
                    })
                }
                checkNew(e, t) {
                    (e === Object || null == e) && this.throwError("missing new", Logger$1.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(e, t) {
                    e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", Logger$1.errors.UNSUPPORTED_OPERATION, {
                        name: e.name,
                        operation: "new"
                    }) : (e === Object || null == e) && this.throwError("missing new", Logger$1.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return ey || (ey = new Logger$1("logger/5.7.0")), ey
                }
                static setCensorship(e, t) {
                    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", Logger$1.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), eg) {
                        if (!e) return;
                        this.globalLogger().throwError("error censorship permanent", Logger$1.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    ev = !!e, eg = !!t
                }
                static setLogLevel(e) {
                    let t = e_[e.toLowerCase()];
                    if (null == t) {
                        Logger$1.globalLogger().warn("invalid log level - " + e);
                        return
                    }
                    em = t
                }
                static from(e) {
                    return new Logger$1(e)
                }
            };
            Logger$1.errors = eo, Logger$1.levels = er;
            let eT = new Logger$1("properties/5.7.0");

            function resolveProperties(e) {
                var t, r, o, i;
                return t = this, r = void 0, o = void 0, i = function*() {
                    let t = Object.keys(e).map(t => {
                            let r = e[t];
                            return Promise.resolve(r).then(e => ({
                                key: t,
                                value: e
                            }))
                        }),
                        r = yield Promise.all(t);
                    return r.reduce((e, t) => (e[t.key] = t.value, e), {})
                }, new(o || (o = Promise))(function(e, n) {
                    function fulfilled(e) {
                        try {
                            step(i.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(i.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function step(t) {
                        var r;
                        t.done ? e(t.value) : ((r = t.value) instanceof o ? r : new o(function(e) {
                            e(r)
                        })).then(fulfilled, rejected)
                    }
                    step((i = i.apply(t, r || [])).next())
                })
            }
            let eN = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function fromHex(e) {
                return es.O$.from(e).toNumber()
            }

            function toHex(e) {
                return es.O$.from(e).toHexString()
            }

            function formatBlock(e) {
                return "string" == typeof e ? e : Number.isInteger(e) ? toHex(e) : e.toString()
            }

            function getNftContractFromRaw(e) {
                return {
                    address: e.address,
                    name: e.contractMetadata.name,
                    symbol: e.contractMetadata.symbol,
                    totalSupply: e.contractMetadata.totalSupply,
                    tokenType: parseNftTokenType(e.contractMetadata.tokenType),
                    openSea: parseOpenSeaMetadata(e.contractMetadata.openSea),
                    contractDeployer: e.contractMetadata.contractDeployer,
                    deployedBlockNumber: e.contractMetadata.deployedBlockNumber
                }
            }

            function getBaseNftFromRaw(e, t) {
                var r;
                return {
                    contract: t ? {
                        address: t
                    } : e.contract,
                    tokenId: es.O$.from(e.id.tokenId).toString(),
                    tokenType: parseNftTokenType(null === (r = e.id.tokenMetadata) || void 0 === r ? void 0 : r.tokenType)
                }
            }

            function getNftFromRaw(e) {
                var t, r, o, i, n, a, s, l, d, c;
                try {
                    let u = parseNftTokenType(null === (t = e.id.tokenMetadata) || void 0 === t ? void 0 : t.tokenType),
                        f = function(e) {
                            if (!e) return;
                            let {
                                isSpam: t,
                                classifications: r
                            } = e;
                            return {
                                isSpam: "true" === t,
                                classifications: r
                            }
                        }(e.spamInfo);
                    return {
                        contract: {
                            address: e.contract.address,
                            name: null === (r = e.contractMetadata) || void 0 === r ? void 0 : r.name,
                            symbol: null === (o = e.contractMetadata) || void 0 === o ? void 0 : o.symbol,
                            totalSupply: null === (i = e.contractMetadata) || void 0 === i ? void 0 : i.totalSupply,
                            tokenType: u,
                            openSea: parseOpenSeaMetadata(null === (n = e.contractMetadata) || void 0 === n ? void 0 : n.openSea),
                            contractDeployer: null === (a = e.contractMetadata) || void 0 === a ? void 0 : a.contractDeployer,
                            deployedBlockNumber: null === (s = e.contractMetadata) || void 0 === s ? void 0 : s.deployedBlockNumber
                        },
                        tokenId: (l = e.id.tokenId, es.O$.from(l).toString()),
                        tokenType: u,
                        title: e.title,
                        description: (d = e.description, void 0 === d ? "" : Array.isArray(d) || "object" != typeof d ? "string" == typeof d ? d : d.join(" ") : JSON.stringify(d)),
                        timeLastUpdated: e.timeLastUpdated,
                        metadataError: e.error,
                        rawMetadata: e.metadata,
                        tokenUri: parseNftTokenUri(e.tokenUri),
                        media: (c = e.media, void 0 === c ? [] : c.filter(e => void 0 !== parseNftTokenUri(e))),
                        spamInfo: f,
                        acquiredAt: e.acquiredAt
                    }
                } catch (e) {
                    throw Error("Error parsing the NFT response: " + e)
                }
            }

            function parseNftTokenType(e) {
                switch (e) {
                    case "erc721":
                    case "ERC721":
                        return M.ERC721;
                    case "erc1155":
                    case "ERC1155":
                        return M.ERC1155;
                    case "no_supported_nft_standard":
                    case "NO_SUPPORTED_NFT_STANDARD":
                        return M.NO_SUPPORTED_NFT_STANDARD;
                    case "not_a_contract":
                    case "NOT_A_CONTRACT":
                        return M.NOT_A_CONTRACT;
                    default:
                        return M.UNKNOWN
                }
            }

            function parseNftTokenUri(e) {
                if (!e || 0 !== e.raw.length || 0 != e.gateway.length) return e
            }

            function parseOpenSeaMetadata(e) {
                var t;
                if (void 0 !== e) return {
                    floorPrice: e.floorPrice,
                    collectionName: e.collectionName,
                    safelistRequestStatus: void 0 !== e.safelistRequestStatus ? (t = e.safelistRequestStatus, Object.values(H).includes(t) ? t : void 0) : void 0,
                    imageUrl: e.imageUrl,
                    description: e.description,
                    externalUrl: e.externalUrl,
                    twitterUsername: e.twitterUsername,
                    discordUrl: e.discordUrl,
                    lastIngestedAt: e.lastIngestedAt
                }
            }
            let eA = "undefined" != typeof window && null !== window;

            function nullsToUndefined(e) {
                if (null !== e) {
                    if ("object" == typeof e)
                        for (let t in e) e[t] = nullsToUndefined(e[t]);
                    return e
                }
            }

            function getAssetTransfers(e, t, r = "getAssetTransfers") {
                return __awaiter$1(this, void 0, void 0, function*() {
                    let o = yield e.getProvider();
                    return t.fromAddress && (t.fromAddress = yield o._getAddress(t.fromAddress)), t.toAddress && (t.toAddress = yield o._getAddress(t.toAddress)), o._send("alchemy_getAssetTransfers", [Object.assign(Object.assign({}, t), {
                        fromBlock: null != t.fromBlock ? formatBlock(t.fromBlock) : void 0,
                        toBlock: null != t.toBlock ? formatBlock(t.toBlock) : void 0,
                        maxCount: null != t.maxCount ? toHex(t.maxCount) : void 0
                    })], r)
                })
            }

            function getTransactionReceipts(e, t, r = "getTransactionReceipts") {
                return __awaiter$1(this, void 0, void 0, function*() {
                    let o = yield e.getProvider();
                    return o._send("alchemy_getTransactionReceipts", [t], r)
                })
            }
            let CoreNamespace = class CoreNamespace {
                constructor(e) {
                    this.config = e
                }
                getBalance(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider();
                        return r.getBalance(e, t)
                    })
                }
                isContractAddress(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider(), r = yield t.getCode(e);
                        return "0x" !== r
                    })
                }
                getCode(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider();
                        return r.getCode(e, t)
                    })
                }
                getStorageAt(e, t, r) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let o = yield this.config.getProvider();
                        return o.getStorageAt(e, t, r)
                    })
                }
                getTransactionCount(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider();
                        return r.getTransactionCount(e, t)
                    })
                }
                getBlock(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.getBlock(e)
                    })
                }
                getBlockWithTransactions(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.getBlockWithTransactions(e)
                    })
                }
                getNetwork() {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let e = yield this.config.getProvider();
                        return e.getNetwork()
                    })
                }
                getBlockNumber() {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let e = yield this.config.getProvider();
                        return e.getBlockNumber()
                    })
                }
                getGasPrice() {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let e = yield this.config.getProvider();
                        return e.getGasPrice()
                    })
                }
                getFeeData() {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let e = yield this.config.getProvider();
                        return e.getFeeData()
                    })
                }
                ready() {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let e = yield this.config.getProvider();
                        return e.ready
                    })
                }
                call(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider();
                        return r.call(e, t)
                    })
                }
                estimateGas(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.estimateGas(e)
                    })
                }
                getTransaction(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.getTransaction(e)
                    })
                }
                getTransactionReceipt(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.getTransactionReceipt(e)
                    })
                }
                sendTransaction(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.sendTransaction(e)
                    })
                }
                waitForTransaction(e, t, r) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let o = yield this.config.getProvider();
                        return o.waitForTransaction(e, t, r)
                    })
                }
                getLogs(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        return function(e, t) {
                            return __awaiter$1(this, void 0, void 0, function*() {
                                var r;
                                let o = yield e.getProvider();
                                yield o.getNetwork();
                                let i = yield resolveProperties({
                                    filter: function(e, t) {
                                        return __awaiter$1(this, void 0, void 0, function*() {
                                            let r = yield e.getProvider(), o = yield t, i = {};
                                            return ["blockHash", "topics"].forEach(e => {
                                                null != o[e] && (i[e] = o[e])
                                            }), ["fromBlock", "toBlock"].forEach(e => {
                                                null != o[e] && (i[e] = r._getBlockTag(o[e]))
                                            }), i = r.formatter.filter((yield resolveProperties(i))), Array.isArray(o.address) ? i.address = yield Promise.all(o.address.map(e => __awaiter$1(this, void 0, void 0, function*() {
                                                return r._getAddress(e)
                                            }))): null != o.address && (i.address = yield r._getAddress(o.address)), i
                                        })
                                    }(e, t)
                                }), n = yield o.send("eth_getLogs", [i.filter]);
                                return n.forEach(e => {
                                    null == e.removed && (e.removed = !1)
                                }), (r = o.formatter.filterLog.bind(o.formatter), function(e) {
                                    if (!Array.isArray(e)) throw Error("not an array");
                                    let t = [];
                                    return e.forEach(e => {
                                        t.push(r(e))
                                    }), t
                                })(n)
                            })
                        }(this.config, e)
                    })
                }
                send(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider();
                        return r.send(e, t)
                    })
                }
                findContractDeployer(e) {
                    var t;
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider(), o = yield r.getBlockNumber();
                        if ((yield r.getCode(e, o)) === "0x") throw Error(`Contract '${e}' does not exist`);
                        let i = yield function binarySearchFirstBlock(e, t, r, o) {
                            return __awaiter$1(this, void 0, void 0, function*() {
                                if (e >= t) return t;
                                let i = Math.floor((e + t) / 2),
                                    n = yield o.getProvider(), a = yield n.getCode(r, i);
                                return "0x" === a ? binarySearchFirstBlock(i + 1, t, r, o) : binarySearchFirstBlock(e, i, r, o)
                            })
                        }(0, o + 1, e, this.config), n = yield getTransactionReceipts(this.config, {
                            blockNumber: toHex(i)
                        }, "findContractDeployer"), a = null === (t = n.receipts) || void 0 === t ? void 0 : t.find(t => t.contractAddress === e.toLowerCase());
                        return {
                            deployerAddress: null == a ? void 0 : a.from,
                            blockNumber: i
                        }
                    })
                }
                getTokenBalances(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider(), o = yield r._getAddress(e);
                        if (Array.isArray(t)) {
                            if (t.length > 1500) throw Error("You cannot pass in more than 1500 contract addresses to getTokenBalances()");
                            if (0 === t.length) throw Error("getTokenBalances() requires at least one contractAddress when using an array");
                            return r._send("alchemy_getTokenBalances", [o, t], "getTokenBalances")
                        } {
                            let e = void 0 === t ? P.ERC20 : t.type,
                                i = [o, e];
                            return (null == t ? void 0 : t.type) === P.ERC20 && t.pageKey && i.push({
                                pageKey: t.pageKey
                            }), r._send("alchemy_getTokenBalances", i, "getTokenBalances")
                        }
                    })
                }
                getTokensForOwner(e, t) {
                    var r;
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let o = yield this.config.getProvider(), i = yield o._getAddress(e), n = [i, null !== (r = null == t ? void 0 : t.contractAddresses) && void 0 !== r ? r : P.ERC20];
                        (null == t ? void 0 : t.pageKey) && n.push({
                            pageKey: t.pageKey
                        });
                        let a = yield o._send("alchemy_getTokenBalances", n, "getTokensForOwner"), s = a.tokenBalances.map(e => ({
                            contractAddress: e.contractAddress,
                            rawBalance: es.O$.from(e.tokenBalance).toString()
                        })), l = yield Promise.allSettled(a.tokenBalances.map(e => o._send("alchemy_getTokenMetadata", [e.contractAddress], "getTokensForOwner", !0))), d = l.map(e => "fulfilled" === e.status ? e.value : {
                            name: null,
                            symbol: null,
                            decimals: null,
                            logo: null
                        }), c = s.map((e, t) => Object.assign(Object.assign(Object.assign({}, e), d[t]), {
                            balance: null !== d[t].decimals ? (0, en.bM)(e.rawBalance, d[t].decimals) : void 0
                        }));
                        return {
                            tokens: c.map(nullsToUndefined),
                            pageKey: a.pageKey
                        }
                    })
                }
                getTokenMetadata(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t._send("alchemy_getTokenMetadata", [e], "getTokenMetadata")
                    })
                }
                getAssetTransfers(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        return getAssetTransfers(this.config, e)
                    })
                }
                getTransactionReceipts(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        return getTransactionReceipts(this.config, e)
                    })
                }
                resolveName(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.resolveName(e)
                    })
                }
                lookupAddress(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.lookupAddress(e)
                    })
                }
            };
            let DebugNamespace = class DebugNamespace {
                constructor(e) {
                    this.config = e
                }
                traceCall(e, t, r) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let o = yield this.config.getProvider(), i = [e, t, parseTracerParams(r)];
                        return o._send("debug_traceCall", i, "traceCall")
                    })
                }
                traceTransaction(e, t, r) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let o = yield this.config.getProvider(), i = [e, parseTracerParams(t, r)];
                        return o._send("debug_traceTransaction", i, "traceTransaction")
                    })
                }
                traceBlock(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r, o;
                        let i = yield this.config.getProvider();
                        if ((0, ea.A7)(e, 32)) r = "debug_traceBlockByHash", o = [e, parseTracerParams(t)];
                        else {
                            r = "debug_traceBlockByNumber";
                            let i = "number" == typeof e ? (0, ea.Ou)((0, ea.$P)(e)) : e;
                            o = [i, parseTracerParams(t)]
                        }
                        return i._send(r, o, "traceBlock")
                    })
                }
            };

            function parseTracerParams(e, t) {
                return Object.assign({
                    tracer: e.type
                }, void 0 !== e.onlyTopCall && {
                    tracerConfig: {
                        onlyTopCall: e.onlyTopCall,
                        timeout: t
                    }
                })
            }(I = ei || (ei = {}))[I.DEBUG = 0] = "DEBUG", I[I.INFO = 1] = "INFO", I[I.WARN = 2] = "WARN", I[I.ERROR = 3] = "ERROR", I[I.SILENT = 4] = "SILENT", ei.DEBUG, ei.INFO, ei.WARN, ei.ERROR, ei.SILENT;
            let ew = {
                    [ei.DEBUG]: "log",
                    [ei.INFO]: "info",
                    [ei.WARN]: "warn",
                    [ei.ERROR]: "error"
                },
                ek = ei.INFO;

            function logDebug(e, ...t) {
                eO.debug(e, t)
            }

            function logInfo(e, ...t) {
                eO.info(e, t)
            }

            function logWarn(e, ...t) {
                eO.warn(e, t)
            }

            function stringify(e) {
                if ("string" == typeof e) return e;
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return e
                }
            }
            let eO = new class {
                    constructor() {
                        this._logLevel = ek
                    }
                    get logLevel() {
                        return this._logLevel
                    }
                    set logLevel(e) {
                        if (!(e in ei)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                        this._logLevel = e
                    }
                    debug(...e) {
                        this._log(ei.DEBUG, ...e)
                    }
                    info(...e) {
                        this._log(ei.INFO, ...e)
                    }
                    warn(...e) {
                        this._log(ei.WARN, ...e)
                    }
                    error(...e) {
                        this._log(ei.ERROR, ...e)
                    }
                    _log(e, ...t) {
                        if (e < this._logLevel) return;
                        let r = new Date().toISOString(),
                            o = ew[e];
                        if (o) console[o](`[${r}] Alchemy:`, ...t.map(stringify));
                        else throw Error(`Logger received an invalid logLevel (value: ${e})`)
                    }
                },
                eR = "2.12.0";
            let ExponentialBackoff = class ExponentialBackoff {
                constructor(e = 5) {
                    this.maxAttempts = e, this.initialDelayMs = 1e3, this.backoffMultiplier = 1.5, this.maxDelayMs = 3e4, this.numAttempts = 0, this.currentDelayMs = 0, this.isInBackoff = !1
                }
                backoff() {
                    if (this.numAttempts >= this.maxAttempts) return Promise.reject(Error(`Exceeded maximum number of attempts: ${this.maxAttempts}`));
                    if (this.isInBackoff) return Promise.reject(Error("A backoff operation is already in progress"));
                    let e = this.withJitterMs(this.currentDelayMs);
                    return e > 0 && logDebug("ExponentialBackoff.backoff", `Backing off for ${e}ms`), this.currentDelayMs *= this.backoffMultiplier, this.currentDelayMs = Math.max(this.currentDelayMs, this.initialDelayMs), this.currentDelayMs = Math.min(this.currentDelayMs, this.maxDelayMs), this.numAttempts += 1, new Promise(t => {
                        this.isInBackoff = !0, setTimeout(() => {
                            this.isInBackoff = !1, t()
                        }, e)
                    })
                }
                withJitterMs(e) {
                    return Math.min(e + (Math.random() - .5) * e, this.maxDelayMs)
                }
            };

            function requestHttpWithBackoff(e, t, r, o, i, n) {
                return __awaiter$1(this, void 0, void 0, function*() {
                    let a;
                    let s = new ExponentialBackoff(e.maxRetries);
                    for (let l = 0; l < e.maxRetries + 1; l++) try {
                        void 0 !== a && logInfo("requestHttp", `Retrying after error: ${a.message}`);
                        try {
                            yield s.backoff()
                        } catch (e) {
                            break
                        }
                        let l = yield function(e, t, r, o, i) {
                            var n;
                            let a = Object.assign(Object.assign({}, i), {
                                headers: Object.assign(Object.assign(Object.assign({}, null == i ? void 0 : i.headers), !eA && {
                                    "Accept-Encoding": "gzip"
                                }), {
                                    "Alchemy-Ethers-Sdk-Version": eR,
                                    "Alchemy-Ethers-Sdk-Method": r
                                }),
                                method: null !== (n = null == i ? void 0 : i.method) && void 0 !== n ? n : "GET",
                                url: e + "/" + t,
                                params: o
                            });
                            return ed()(a)
                        }(e._getRequestUrl(t), r, o, i, Object.assign(Object.assign({}, n), {
                            timeout: e.requestTimeout
                        }));
                        if (200 === l.status) return logDebug(r, `Successful request: ${r}`), l.data;
                        logInfo(r, `Request failed: ${r}, ${l.status}, ${l.data}`), a = Error(l.status + ": " + l.data)
                    } catch (e) {
                        if (!ed().isAxiosError(e) || void 0 === e.response) throw e;
                        if (a = Error(e.response.status + ": " + e.response.data), ! function(e, t) {
                                let r = t === et.WEBHOOK ? [429, 500] : [429];
                                return void 0 !== e.response && r.includes(e.response.status)
                            }(e, t)) break
                    }
                    return Promise.reject(a)
                })
            }

            function paginateEndpoint(e, t, r, o, i, n, a) {
                return __asyncGenerator(this, arguments, function*() {
                    let s = !0,
                        l = Object.assign({}, a);
                    for (; s;) {
                        let a = yield __await(requestHttpWithBackoff(e, t, r, o, l));
                        yield yield __await(a), void 0 !== a[n] ? l[i] = a[n] : s = !1
                    }
                })
            }

            function getNftMetadata(e, t, r, o, i = "getNftMetadata") {
                return __awaiter$1(this, void 0, void 0, function*() {
                    let n = yield requestHttpWithBackoff(e, et.NFT, "getNFTMetadata", i, {
                        contractAddress: t,
                        tokenId: es.O$.from(r).toString(),
                        tokenType: function(e) {
                            if (e === M.ERC1155 || e === M.ERC721) return e
                        }(null == o ? void 0 : o.tokenType),
                        tokenUriTimeoutInMs: null == o ? void 0 : o.tokenUriTimeoutInMs,
                        refreshCache: null == o ? void 0 : o.refreshCache
                    });
                    return getNftFromRaw(n)
                })
            }

            function getNftMetadataBatch(e, t, r) {
                return __awaiter$1(this, void 0, void 0, function*() {
                    let o = {
                            tokens: t,
                            tokenUriTimeoutInMs: null == r ? void 0 : r.tokenUriTimeoutInMs,
                            refreshCache: null == r ? void 0 : r.refreshCache
                        },
                        i = yield requestHttpWithBackoff(e, et.NFT, "getNFTMetadataBatch", "getNftMetadataBatch", {}, {
                            method: "POST",
                            data: o
                        });
                    return i.map(getNftFromRaw)
                })
            }

            function getNftsForOwner(e, t, r, o = "getNftsForOwner") {
                return __awaiter$1(this, void 0, void 0, function*() {
                    let i = omitMetadataToWithMetadata(null == r ? void 0 : r.omitMetadata),
                        n = yield requestHttpWithBackoff(e, et.NFT, "getNFTs", o, {
                            contractAddresses: null == r ? void 0 : r.contractAddresses,
                            pageKey: null == r ? void 0 : r.pageKey,
                            filters: null == r ? void 0 : r.excludeFilters,
                            excludeFilters: null == r ? void 0 : r.excludeFilters,
                            includeFilters: null == r ? void 0 : r.includeFilters,
                            owner: t,
                            pageSize: null == r ? void 0 : r.pageSize,
                            withMetadata: i,
                            tokenUriTimeoutInMs: null == r ? void 0 : r.tokenUriTimeoutInMs,
                            orderBy: null == r ? void 0 : r.orderBy
                        });
                    return {
                        ownedNfts: n.ownedNfts.map(e => Object.assign(Object.assign({}, nftFromGetNftResponse(e)), {
                            balance: parseInt(e.balance)
                        })),
                        pageKey: n.pageKey,
                        totalCount: n.totalCount,
                        blockHash: n.blockHash
                    }
                })
            }

            function nftTokenTypeToCategory(e) {
                switch (e) {
                    case M.ERC721:
                        return [S.ERC721];
                    case M.ERC1155:
                        return [S.ERC1155];
                    default:
                        return [S.ERC721, S.ERC1155, S.SPECIALNFT]
                }
            }

            function nftFromGetNftResponse(e) {
                return isNftWithMetadata(e) ? getNftFromRaw(e) : getBaseNftFromRaw(e)
            }

            function nftFromGetNftContractResponse(e, t) {
                return isNftWithMetadata(e) ? getNftFromRaw(e) : getBaseNftFromRaw(e, t)
            }

            function isNftWithMetadata(e) {
                return void 0 !== e.title
            }

            function getNftsForTransfers(e, t) {
                return __awaiter$1(this, void 0, void 0, function*() {
                    let r = t.transfers.filter(e => null !== e.rawContract.address).flatMap(e => {
                        var t, r;
                        let o = (r = e).category !== S.ERC1155 ? [{
                                contractAddress: r.rawContract.address,
                                tokenId: r.tokenId,
                                tokenType: r.category === S.ERC721 ? M.ERC721 : void 0
                            }] : r.erc1155Metadata.map(e => ({
                                contractAddress: r.rawContract.address,
                                tokenId: e.tokenId,
                                tokenType: M.ERC1155
                            })),
                            i = {
                                from: e.from,
                                to: null !== (t = e.to) && void 0 !== t ? t : void 0,
                                transactionHash: e.hash,
                                blockNumber: e.blockNum
                            };
                        return o.map(e => ({
                            metadata: i,
                            token: e
                        }))
                    });
                    if (0 === r.length) return {
                        nfts: []
                    };
                    let o = [];
                    for (let e = 0; e < r.length; e += 100) o.push(r.slice(e, e + 100));
                    let i = yield Promise.all(o.map(t => getNftMetadataBatch(e, t.map(e => e.token)))), n = i.flat(), a = new Map;
                    n.forEach(e => {
                        let t = `${e.contract.address}-${es.O$.from(e.tokenId).toString()}`;
                        a.set(t, e)
                    });
                    let s = r.map(e => {
                        let t = `${e.token.contractAddress}-${es.O$.from(e.token.tokenId).toString()}`;
                        return Object.assign(Object.assign({}, a.get(t)), e.metadata)
                    });
                    return {
                        nfts: s,
                        pageKey: t.pageKey
                    }
                })
            }

            function omitMetadataToWithMetadata(e) {
                return void 0 === e || !e
            }
            let NftNamespace = class NftNamespace {
                constructor(e) {
                    this.config = e
                }
                getNftMetadata(e, t, r, o) {
                    let i;
                    return i = "object" == typeof r ? {
                        tokenType: r.tokenType,
                        tokenUriTimeoutInMs: r.tokenUriTimeoutInMs,
                        refreshCache: r.refreshCache
                    } : {
                        tokenType: r,
                        tokenUriTimeoutInMs: o
                    }, getNftMetadata(this.config, e, t, i)
                }
                getNftMetadataBatch(e, t) {
                    return getNftMetadataBatch(this.config, e, t)
                }
                getContractMetadata(e) {
                    return function(e, t, r = "getContractMetadata") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let o = yield requestHttpWithBackoff(e, et.NFT, "getContractMetadata", r, {
                                contractAddress: t
                            });
                            return getNftContractFromRaw(o)
                        })
                    }(this.config, e)
                }
                getContractMetadataBatch(e) {
                    return function(e, t) {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let r = yield requestHttpWithBackoff(e, et.NFT, "getContractMetadataBatch", "getContractMetadataBatch", {}, {
                                method: "POST",
                                data: {
                                    contractAddresses: t
                                }
                            });
                            return r.map(getNftContractFromRaw)
                        })
                    }(this.config, e)
                }
                getNftsForOwnerIterator(e, t) {
                    return function(e, t, r, o = "getNftsForOwnerIterator") {
                        return __asyncGenerator(this, arguments, function*() {
                            var i, n;
                            let a = omitMetadataToWithMetadata(null == r ? void 0 : r.omitMetadata);
                            try {
                                for (var s, l = __asyncValues(paginateEndpoint(e, et.NFT, "getNFTs", o, "pageKey", "pageKey", {
                                        contractAddresses: null == r ? void 0 : r.contractAddresses,
                                        pageKey: null == r ? void 0 : r.pageKey,
                                        filters: null == r ? void 0 : r.excludeFilters,
                                        owner: t,
                                        withMetadata: a
                                    })); !(s = yield __await(l.next())).done;) {
                                    let e = s.value;
                                    for (let t of e.ownedNfts) yield yield __await(Object.assign(Object.assign({}, nftFromGetNftResponse(t)), {
                                        balance: parseInt(t.balance)
                                    }))
                                }
                            } catch (e) {
                                i = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (n = l.return) && (yield __await(n.call(l)))
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                        })
                    }(this.config, e, t)
                }
                getNftsForOwner(e, t) {
                    return getNftsForOwner(this.config, e, t)
                }
                getNftsForContract(e, t) {
                    return function(e, t, r, o = "getNftsForContract") {
                        var i;
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let n = omitMetadataToWithMetadata(null == r ? void 0 : r.omitMetadata),
                                a = yield requestHttpWithBackoff(e, et.NFT, "getNFTsForCollection", o, {
                                    contractAddress: t,
                                    startToken: null == r ? void 0 : r.pageKey,
                                    withMetadata: n,
                                    limit: null !== (i = null == r ? void 0 : r.pageSize) && void 0 !== i ? i : void 0,
                                    tokenUriTimeoutInMs: null == r ? void 0 : r.tokenUriTimeoutInMs
                                });
                            return {
                                nfts: a.nfts.map(e => nftFromGetNftContractResponse(e, t)),
                                pageKey: a.nextToken
                            }
                        })
                    }(this.config, e, t)
                }
                getNftsForContractIterator(e, t) {
                    return function(e, t, r, o = "getNftsForContractIterator") {
                        return __asyncGenerator(this, arguments, function*() {
                            var i, n;
                            let a = omitMetadataToWithMetadata(null == r ? void 0 : r.omitMetadata);
                            try {
                                for (var s, l = __asyncValues(paginateEndpoint(e, et.NFT, "getNFTsForCollection", o, "startToken", "nextToken", {
                                        contractAddress: t,
                                        startToken: null == r ? void 0 : r.pageKey,
                                        withMetadata: a
                                    })); !(s = yield __await(l.next())).done;) {
                                    let e = s.value;
                                    for (let r of e.nfts) yield yield __await(nftFromGetNftContractResponse(r, t))
                                }
                            } catch (e) {
                                i = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (n = l.return) && (yield __await(n.call(l)))
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                        })
                    }(this.config, e, t)
                }
                getOwnersForContract(e, t) {
                    return function(e, t, r, o = "getOwnersForContract") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let i = yield requestHttpWithBackoff(e, et.NFT, "getOwnersForCollection", o, Object.assign(Object.assign({}, r), {
                                contractAddress: t
                            }));
                            return Object.assign({
                                owners: i.ownerAddresses,
                                totalCount: i.totalCount
                            }, void 0 !== i.pageKey && {
                                pageKey: i.pageKey
                            })
                        })
                    }(this.config, e, t)
                }
                getOwnersForNft(e, t, r) {
                    return function(e, t, r, o, i = "getOwnersForNft") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            return requestHttpWithBackoff(e, et.NFT, "getOwnersForToken", i, Object.assign({
                                contractAddress: t,
                                tokenId: es.O$.from(r).toString()
                            }, o))
                        })
                    }(this.config, e, t, r)
                }
                getContractsForOwner(e, t) {
                    return function(e, t, r, o = "getContractsForOwner") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let i = yield requestHttpWithBackoff(e, et.NFT, "getContractsForOwner", o, {
                                owner: t,
                                excludeFilters: null == r ? void 0 : r.excludeFilters,
                                includeFilters: null == r ? void 0 : r.includeFilters,
                                pageKey: null == r ? void 0 : r.pageKey,
                                pageSize: null == r ? void 0 : r.pageSize,
                                orderBy: null == r ? void 0 : r.orderBy
                            });
                            return {
                                pageKey: null == i ? void 0 : i.pageKey,
                                totalCount: i.totalCount,
                                contracts: i.contracts.map(e => ({
                                    address: e.address,
                                    totalSupply: e.totalSupply,
                                    isSpam: e.isSpam,
                                    media: e.media,
                                    numDistinctTokensOwned: e.numDistinctTokensOwned,
                                    tokenId: e.tokenId,
                                    totalBalance: e.totalBalance,
                                    name: e.name,
                                    title: e.title,
                                    openSea: parseOpenSeaMetadata(null == e ? void 0 : e.opensea),
                                    symbol: null == e ? void 0 : e.symbol,
                                    tokenType: parseNftTokenType(null == e ? void 0 : e.tokenType),
                                    contractDeployer: e.contractDeployer,
                                    deployedBlockNumber: e.deployedBlockNumber
                                }))
                            }
                        })
                    }(this.config, e, t)
                }
                getTransfersForOwner(e, t, r) {
                    return function(e, t, r, o) {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let i = yield e.getProvider(), n = yield i._getAddress(t), a = nftTokenTypeToCategory(null == o ? void 0 : o.tokenType), s = {
                                fromBlock: "0x0",
                                excludeZeroValue: !0,
                                contractAddresses: null == o ? void 0 : o.contractAddresses,
                                category: a,
                                maxCount: 100,
                                pageKey: null == o ? void 0 : o.pageKey
                            };
                            r === L.TO ? s.toAddress = n : s.fromAddress = n;
                            let l = yield getAssetTransfers(e, s, "getTransfersForOwner");
                            return getNftsForTransfers(e, l)
                        })
                    }(this.config, e, t, r)
                }
                getTransfersForContract(e, t) {
                    return function(e, t, r) {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let o = [S.ERC721, S.ERC1155, S.SPECIALNFT],
                                i = yield e.getProvider(), n = (null == r ? void 0 : r.fromBlock) ? i.formatter.blockTag((yield i._getBlockTag(r.fromBlock))) : "0x0", a = (null == r ? void 0 : r.toBlock) ? i.formatter.blockTag((yield i._getBlockTag(r.toBlock))) : void 0, s = {
                                    fromBlock: n,
                                    toBlock: a,
                                    excludeZeroValue: !0,
                                    contractAddresses: [t],
                                    order: null == r ? void 0 : r.order,
                                    category: o,
                                    maxCount: 100,
                                    pageKey: null == r ? void 0 : r.pageKey
                                }, l = yield getAssetTransfers(e, s, "getTransfersForContract");
                            return getNftsForTransfers(e, l)
                        })
                    }(this.config, e, t)
                }
                getMintedNfts(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        return function(e, t, r) {
                            return __awaiter$1(this, void 0, void 0, function*() {
                                let o = yield e.getProvider(), i = yield o._getAddress(t), n = nftTokenTypeToCategory(null == r ? void 0 : r.tokenType), a = {
                                    fromBlock: "0x0",
                                    fromAddress: "0x0000000000000000000000000000000000000000",
                                    toAddress: i,
                                    excludeZeroValue: !0,
                                    contractAddresses: null == r ? void 0 : r.contractAddresses,
                                    category: n,
                                    maxCount: 100,
                                    pageKey: null == r ? void 0 : r.pageKey
                                }, s = yield getAssetTransfers(e, a, "getMintedNfts");
                                return getNftsForTransfers(e, s)
                            })
                        }(this.config, e, t)
                    })
                }
                checkNftOwnership(e, t) {
                    return function(e, t, r, o = "checkNftOwnership") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            if (0 === r.length) throw Error("Must provide at least one contract address");
                            let i = yield getNftsForOwner(e, t, {
                                contractAddresses: r,
                                omitMetadata: !0
                            }, o);
                            return i.ownedNfts.length > 0
                        })
                    }(this.config, e, t)
                }
                verifyNftOwnership(e, t) {
                    return function(e, t, r, o = "verifyNftOwnership") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            if ("string" == typeof r) {
                                let i = yield getNftsForOwner(e, t, {
                                    contractAddresses: [r],
                                    omitMetadata: !0
                                }, o);
                                return i.ownedNfts.length > 0
                            } {
                                if (0 === r.length) throw Error("Must provide at least one contract address");
                                let i = yield getNftsForOwner(e, t, {
                                    contractAddresses: r,
                                    omitMetadata: !0
                                }, o), n = r.reduce((e, t) => (e[t] = !1, e), {});
                                for (let e of i.ownedNfts) n[e.contract.address] = !0;
                                return n
                            }
                        })
                    }(this.config, e, t)
                }
                isSpamContract(e) {
                    return function(e, t, r = "isSpamContract") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            return requestHttpWithBackoff(e, et.NFT, "isSpamContract", r, {
                                contractAddress: t
                            })
                        })
                    }(this.config, e)
                }
                getSpamContracts() {
                    return function(e, t = "getSpamContracts") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            return requestHttpWithBackoff(e, et.NFT, "getSpamContracts", t, void 0)
                        })
                    }(this.config)
                }
                getFloorPrice(e) {
                    return function(e, t, r = "getFloorPrice") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            return requestHttpWithBackoff(e, et.NFT, "getFloorPrice", r, {
                                contractAddress: t
                            })
                        })
                    }(this.config, e)
                }
                getNftSales(e) {
                    return function(e, t = {}, r = "getNftSales") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            var o, i;
                            let n = Object.assign({}, t),
                                a = yield requestHttpWithBackoff(e, et.NFT, "getNFTSales", r, {
                                    fromBlock: null == n ? void 0 : n.fromBlock,
                                    toBlock: null == n ? void 0 : n.toBlock,
                                    order: null == n ? void 0 : n.order,
                                    marketplace: null == n ? void 0 : n.marketplace,
                                    contractAddress: null == n ? void 0 : n.contractAddress,
                                    tokenId: (null == n ? void 0 : n.tokenId) ? es.O$.from(null == n ? void 0 : n.tokenId).toString() : void 0,
                                    sellerAddress: null == n ? void 0 : n.sellerAddress,
                                    buyerAddress: null == n ? void 0 : n.buyerAddress,
                                    taker: null == n ? void 0 : n.taker,
                                    limit: null == n ? void 0 : n.limit,
                                    pageKey: null == n ? void 0 : n.pageKey
                                });
                            return {
                                nftSales: a.nftSales.map(e => ({
                                    marketplace: function(e) {
                                        switch (e) {
                                            case "looksrare":
                                                return G.LOOKSRARE;
                                            case "seaport":
                                                return G.SEAPORT;
                                            case "x2y2":
                                                return G.X2Y2;
                                            case "wyvern":
                                                return G.WYVERN;
                                            case "cryptopunks":
                                                return G.CRYPTOPUNKS;
                                            case "blur":
                                                return G.BLUR;
                                            default:
                                                return G.UNKNOWN
                                        }
                                    }(e.marketplace),
                                    contractAddress: e.contractAddress,
                                    tokenId: e.tokenId,
                                    quantity: e.quantity,
                                    buyerAddress: e.buyerAddress,
                                    sellerAddress: e.sellerAddress,
                                    taker: function(e) {
                                        switch (e.toLowerCase()) {
                                            case "buyer":
                                                return x.BUYER;
                                            case "seller":
                                                return x.SELLER;
                                            default:
                                                throw Error(`Unsupported NftSaleTakerType ${e}`)
                                        }
                                    }(e.taker),
                                    sellerFee: null == e ? void 0 : e.sellerFee,
                                    marketplaceFee: null == e ? void 0 : e.protocolFee,
                                    protocolFee: null == e ? void 0 : e.protocolFee,
                                    royaltyFee: null == e ? void 0 : e.royaltyFee,
                                    blockNumber: null == e ? void 0 : e.blockNumber,
                                    logIndex: e.logIndex,
                                    bundleIndex: e.bundleIndex,
                                    transactionHash: e.transactionHash
                                })),
                                validAt: {
                                    blockNumber: a.validAt.blockNumber,
                                    blockHash: null !== (o = a.validAt.blockHash) && void 0 !== o ? o : void 0,
                                    blockTimestamp: null !== (i = a.validAt.blockTimestamp) && void 0 !== i ? i : void 0
                                },
                                pageKey: null == a ? void 0 : a.pageKey
                            }
                        })
                    }(this.config, e)
                }
                computeRarity(e, t, r) {
                    return function(e, t, r, o, i = "computeRarity") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let n = yield requestHttpWithBackoff(e, et.NFT, "computeRarity", i, {
                                contractAddress: t,
                                tokenId: es.O$.from(r).toString(),
                                refreshCache: o
                            });
                            return n.map(({
                                prevalence: e,
                                trait_type: t,
                                value: r
                            }) => ({
                                prevalence: e,
                                traitType: t,
                                value: r
                            }))
                        })
                    }(this.config, e, t, r)
                }
                searchContractMetadata(e) {
                    return function(e, t, r = "searchContractMetadata") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let o = yield requestHttpWithBackoff(e, et.NFT, "searchContractMetadata", r, {
                                query: t
                            });
                            return o.map(getNftContractFromRaw)
                        })
                    }(this.config, e)
                }
                summarizeNftAttributes(e, t) {
                    return function(e, t, r, o = "summarizeNftAttributes") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            return requestHttpWithBackoff(e, et.NFT, "summarizeNftAttributes", o, {
                                contractAddress: t,
                                refreshCache: r
                            })
                        })
                    }(this.config, e, t)
                }
                refreshNftMetadata(e, t) {
                    return function(e, t, r, o = "refreshNftMetadata") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let i = es.O$.from(r).toString(),
                                n = yield getNftMetadata(e, t, i, void 0, o), a = yield function(e, t, r, o) {
                                    return __awaiter$1(this, void 0, void 0, function*() {
                                        let i = yield requestHttpWithBackoff(e, et.NFT, "getNFTMetadata", o, {
                                            contractAddress: t,
                                            tokenId: es.O$.from(r).toString(),
                                            refreshCache: !0
                                        });
                                        return getNftFromRaw(i)
                                    })
                                }(e, t, i, o);
                            return n.timeLastUpdated !== a.timeLastUpdated
                        })
                    }(this.config, e, t)
                }
                refreshContract(e) {
                    return function(e, t, r = "refreshContract") {
                        return __awaiter$1(this, void 0, void 0, function*() {
                            let o = yield requestHttpWithBackoff(e, et.NFT, "reingestContract", r, {
                                contractAddress: t
                            });
                            return {
                                contractAddress: o.contractAddress,
                                refreshState: function(e) {
                                    switch (e) {
                                        case "does_not_exist":
                                            return K.DOES_NOT_EXIST;
                                        case "already_queued":
                                            return K.ALREADY_QUEUED;
                                        case "in_progress":
                                            return K.IN_PROGRESS;
                                        case "finished":
                                            return K.FINISHED;
                                        case "queued":
                                            return K.QUEUED;
                                        case "queue_failed":
                                            return K.QUEUE_FAILED;
                                        default:
                                            throw Error("Unknown reingestion state: " + e)
                                    }
                                }(o.reingestionState),
                                progress: o.progress
                            }
                        })
                    }(this.config, e)
                }
            };
            let NotifyNamespace = class NotifyNamespace {
                constructor(e) {
                    this.config = e
                }
                getAllWebhooks() {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        this.verifyConfig();
                        let e = yield this.sendWebhookRequest("team-webhooks", "getAllWebhooks", {});
                        return {
                            webhooks: e.data.map(parseRawWebhook),
                            totalCount: e.data.length
                        }
                    })
                }
                getAddresses(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        this.verifyConfig();
                        let r = "string" == typeof e ? e : e.id,
                            o = yield this.sendWebhookRequest("webhook-addresses", "getAddresses", {
                                webhook_id: r,
                                limit: null == t ? void 0 : t.limit,
                                after: null == t ? void 0 : t.pageKey
                            });
                        return {
                            addresses: o.data,
                            totalCount: o.pagination.total_count,
                            pageKey: o.pagination.cursors.after
                        }
                    })
                }
                getGraphqlQuery(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        this.verifyConfig();
                        let t = "string" == typeof e ? e : e.id,
                            r = yield this.sendWebhookRequest("dashboard-webhook-graphql-query", "getGraphqlQuery", {
                                webhook_id: t
                            });
                        return {
                            graphqlQuery: r.data.graphql_query
                        }
                    })
                }
                getNftFilters(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        this.verifyConfig();
                        let r = "string" == typeof e ? e : e.id,
                            o = yield this.sendWebhookRequest("webhook-nft-filters", "getNftFilters", {
                                webhook_id: r,
                                limit: null == t ? void 0 : t.limit,
                                after: null == t ? void 0 : t.pageKey
                            });
                        return {
                            filters: o.data.map(e => e.token_id ? {
                                contractAddress: e.contract_address,
                                tokenId: es.O$.from(e.token_id).toString()
                            } : {
                                contractAddress: e.contract_address
                            }),
                            totalCount: o.pagination.total_count,
                            pageKey: o.pagination.cursors.after
                        }
                    })
                }
                updateWebhook(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r, o, i, n;
                        let a = "string" == typeof e ? e : e.id;
                        if ("isActive" in t) r = "update-webhook", o = "updateWebhook", i = "PUT", n = {
                            webhook_id: a,
                            is_active: t.isActive
                        };
                        else if ("addFilters" in t || "removeFilters" in t) r = "update-webhook-nft-filters", o = "updateWebhookNftFilters", i = "PATCH", n = {
                            webhook_id: a,
                            nft_filters_to_add: t.addFilters ? t.addFilters.map(nftFilterToParam) : [],
                            nft_filters_to_remove: t.removeFilters ? t.removeFilters.map(nftFilterToParam) : []
                        };
                        else if ("addMetadataFilters" in t || "removeMetadataFilters" in t) r = "update-webhook-nft-metadata-filters", o = "updateWebhookNftMetadataFilters", i = "PATCH", n = {
                            webhook_id: a,
                            nft_metadata_filters_to_add: t.addMetadataFilters ? t.addMetadataFilters.map(nftFilterToParam) : [],
                            nft_metadata_filters_to_remove: t.removeMetadataFilters ? t.removeMetadataFilters.map(nftFilterToParam) : []
                        };
                        else if ("addAddresses" in t || "removeAddresses" in t) r = "update-webhook-addresses", o = "webhook:updateWebhookAddresses", i = "PATCH", n = {
                            webhook_id: a,
                            addresses_to_add: yield this.resolveAddresses(t.addAddresses), addresses_to_remove: yield this.resolveAddresses(t.removeAddresses)
                        };
                        else if ("newAddresses" in t) r = "update-webhook-addresses", o = "webhook:updateWebhookAddress", i = "PUT", n = {
                            webhook_id: a,
                            addresses: yield this.resolveAddresses(t.newAddresses)
                        };
                        else throw Error("Invalid `update` param passed into `updateWebhook`");
                        yield this.sendWebhookRequest(r, o, {}, {
                            method: i,
                            data: n
                        })
                    })
                }
                createWebhook(e, t, r) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let o, i, n, a;
                        if (t === J.MINED_TRANSACTION || t === J.DROPPED_TRANSACTION) {
                            if (!("appId" in r)) throw Error("Transaction Webhooks require an app id.");
                            o = r.appId
                        }
                        let s = eI.get(this.config.network);
                        if (t === J.NFT_ACTIVITY || t === J.NFT_METADATA_UPDATE) {
                            if (!("filters" in r) || 0 === r.filters.length) throw Error("Nft Activity Webhooks require a non-empty array input.");
                            s = r.network ? eI.get(r.network) : s;
                            let e = r.filters.map(e => e.tokenId ? {
                                contract_address: e.contractAddress,
                                token_id: es.O$.from(e.tokenId).toString()
                            } : {
                                contract_address: e.contractAddress
                            });
                            i = t === J.NFT_ACTIVITY ? {
                                nft_filters: e
                            } : {
                                nft_metadata_filters: e
                            }
                        } else if (t === J.ADDRESS_ACTIVITY) {
                            if (void 0 === r || !("addresses" in r) || 0 === r.addresses.length) throw Error("Address Activity Webhooks require a non-empty array input.");
                            s = r.network ? eI.get(r.network) : s, n = yield this.resolveAddresses(r.addresses)
                        } else if (t == J.GRAPHQL) {
                            if (void 0 === r || !("graphqlQuery" in r) || 0 === r.graphqlQuery.length) throw Error("Custom Webhooks require a non-empty graphql query.");
                            s = r.network ? eI.get(r.network) : s, a = r.graphqlQuery
                        }
                        let l = Object.assign(Object.assign(Object.assign(Object.assign({
                                network: s,
                                webhook_type: t,
                                webhook_url: e
                            }, o && {
                                app_id: o
                            }), i), n && {
                                addresses: n
                            }), a && {
                                graphql_query: a
                            }),
                            d = yield this.sendWebhookRequest("create-webhook", "createWebhook", {}, {
                                method: "POST",
                                data: l
                            });
                        return parseRawWebhook(d.data)
                    })
                }
                deleteWebhook(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        this.verifyConfig();
                        let t = "string" == typeof e ? e : e.id,
                            r = yield this.sendWebhookRequest("delete-webhook", "deleteWebhook", {
                                webhook_id: t
                            }, {
                                method: "DELETE"
                            });
                        if ("message" in r) throw Error(`Webhook not found. Failed to delete webhook: ${t}`)
                    })
                }
                verifyConfig() {
                    if (void 0 === this.config.authToken) throw Error("Using the Notify API requires setting the Alchemy Auth Token in the settings object when initializing Alchemy.")
                }
                sendWebhookRequest(e, t, r, o) {
                    return requestHttpWithBackoff(this.config, et.WEBHOOK, e, t, r, Object.assign(Object.assign({}, o), {
                        headers: Object.assign({
                            "X-Alchemy-Token": this.config.authToken
                        }, null == o ? void 0 : o.headers)
                    }))
                }
                resolveAddresses(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        if (void 0 === e) return [];
                        let t = [],
                            r = yield this.config.getProvider();
                        for (let o of e) {
                            let e = yield r.resolveName(o);
                            if (null === e) throw Error(`Unable to resolve the ENS address: ${o}`);
                            t.push(e)
                        }
                        return t
                    })
                }
            };
            let eb = {
                    ETH_MAINNET: C.ETH_MAINNET,
                    ETH_GOERLI: C.ETH_GOERLI,
                    ETH_SEPOLIA: C.ETH_SEPOLIA,
                    ETH_ROPSTEN: C.ETH_ROPSTEN,
                    ETH_RINKEBY: C.ETH_RINKEBY,
                    ETH_KOVAN: C.ETH_KOVAN,
                    MATIC_MAINNET: C.MATIC_MAINNET,
                    MATIC_MUMBAI: C.MATIC_MUMBAI,
                    ARB_MAINNET: C.ARB_MAINNET,
                    ARB_GOERLI: C.ARB_GOERLI,
                    ARB_RINKEBY: C.ARB_RINKEBY,
                    OPT_MAINNET: C.OPT_MAINNET,
                    OPT_GOERLI: C.OPT_GOERLI,
                    OPT_KOVAN: C.OPT_KOVAN
                },
                eI = Object.keys(C).reduce((e, t) => (t in eb && e.set(eb[t], t), e), new Map);

            function parseRawWebhook(e) {
                return Object.assign({
                    id: e.id,
                    network: eb[e.network],
                    type: e.webhook_type,
                    url: e.webhook_url,
                    isActive: e.is_active,
                    timeCreated: new Date(e.time_created).toISOString(),
                    signingKey: e.signing_key,
                    version: e.version
                }, void 0 !== e.app_id && {
                    appId: e.app_id
                })
            }

            function nftFilterToParam(e) {
                return e.tokenId ? {
                    contract_address: e.contractAddress,
                    token_id: es.O$.from(e.tokenId).toString()
                } : {
                    contract_address: e.contractAddress
                }
            }
            let eC = [.9, 1, 1.1, 1.2, 1.3];
            let TransactNamespace = class TransactNamespace {
                constructor(e) {
                    this.config = e
                }
                sendPrivateTransaction(e, t, r) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let o = yield this.config.getProvider(), i = t ? toHex(t) : void 0;
                        return o._send("eth_sendPrivateTransaction", [{
                            tx: e,
                            maxBlockNumber: i,
                            preferences: r
                        }], "sendPrivateTransaction")
                    })
                }
                cancelPrivateTransaction(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t._send("eth_cancelPrivateTransaction", [{
                            txHash: e
                        }], "cancelPrivateTransaction")
                    })
                }
                simulateAssetChangesBundle(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider(), o = yield r._send("alchemy_simulateAssetChangesBundle", void 0 !== t ? [e, t] : [e], "simulateAssetChangesBundle");
                        return nullsToUndefined(o)
                    })
                }
                simulateAssetChanges(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider(), o = yield r._send("alchemy_simulateAssetChanges", void 0 !== t ? [e, t] : [e], "simulateAssetChanges");
                        return nullsToUndefined(o)
                    })
                }
                simulateExecutionBundle(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider(), o = r._send("alchemy_simulateExecutionBundle", void 0 !== t ? [e, t] : [e], "simulateExecutionBundle");
                        return nullsToUndefined(o)
                    })
                }
                simulateExecution(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider(), o = r._send("alchemy_simulateExecution", void 0 !== t ? [e, t] : [e], "simulateExecution");
                        return nullsToUndefined(o)
                    })
                }
                getTransaction(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.getTransaction(e)
                    })
                }
                sendTransaction(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.sendTransaction(e)
                    })
                }
                estimateGas(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t.estimateGas(e)
                    })
                }
                getMaxPriorityFeePerGas() {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let e = yield this.config.getProvider(), t = yield e._send("eth_maxPriorityFeePerGas", [], "getMaxPriorityFeePerGas");
                        return fromHex(t)
                    })
                }
                waitForTransaction(e, t, r) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let o = yield this.config.getProvider();
                        return o.waitForTransaction(e, t, r)
                    })
                }
                sendGasOptimizedTransaction(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        var r, o, i;
                        let n, a, s;
                        if (Array.isArray(e)) return this._sendGasOptimizedTransaction(e, "sendGasOptimizedTransactionPreSigned");
                        let l = yield this.config.getProvider();
                        try {
                            n = yield this.estimateGas(e), a = yield this.getMaxPriorityFeePerGas();
                            let t = yield l.getBlock("latest");
                            s = t.baseFeePerGas.toNumber()
                        } catch (e) {
                            throw Error(`Failed to estimate gas for transaction: ${e}`)
                        }
                        let d = (r = n.toNumber(), o = s, i = a, eC.map(t => Object.assign(Object.assign({}, e), {
                                gasLimit: r,
                                maxFeePerGas: Math.round(o * t + i * t),
                                maxPriorityFeePerGas: Math.round(t * i)
                            }))),
                            c = yield Promise.all(d.map(e => t.signTransaction(e)));
                        return this._sendGasOptimizedTransaction(c, "sendGasOptimizedTransactionGenerated")
                    })
                }
                getGasOptimizedTransactionStatus(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider();
                        return t._send("alchemy_getGasOptimizedTransactionStatus", [e], "getGasOptimizedTransactionStatus")
                    })
                }
                _sendGasOptimizedTransaction(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getProvider();
                        return r._send("alchemy_sendGasOptimizedTransaction", [{
                            rawTransactions: e
                        }], t)
                    })
                }
            };
            let eP = "alchemy-pending-transactions",
                eS = "alchemy-mined-transactions",
                eF = [eP, eS];
            let Event = class Event {
                constructor(e, t, r) {
                    this.listener = t, this.tag = e, this.once = r, this._lastBlockNumber = -2, this._inflight = !1
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter;
                        default:
                            return this.tag
                    }
                }
                get type() {
                    return this.tag.split(":")[0]
                }
                get hash() {
                    let e = this.tag.split(":");
                    if ("tx" !== e[0]) throw Error("Not a transaction event");
                    return e[1]
                }
                get filter() {
                    var e;
                    let t = this.tag.split(":");
                    if ("filter" !== t[0]) throw Error("Not a transaction event");
                    let r = t[1],
                        o = "" === (e = t[2]) ? [] : e.split(/&/g).map(e => {
                            if ("" === e) return [];
                            let t = e.split("|").map(e => "null" === e ? null : e);
                            return 1 === t.length ? t[0] : t
                        }),
                        i = {};
                    return o.length > 0 && (i.topics = o), r && "*" !== r && (i.address = r), i
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || ["block", "network", "pending", "poll"].indexOf(this.tag) >= 0
                }
            };
            let EthersEvent = class EthersEvent extends Event {
                get fromAddress() {
                    let e = this.tag.split(":");
                    return e[0] !== eP ? void 0 : e[1] && "*" !== e[1] ? deserializeAddressField(e[1]) : void 0
                }
                get toAddress() {
                    let e = this.tag.split(":");
                    return e[0] !== eP ? void 0 : e[2] && "*" !== e[2] ? deserializeAddressField(e[2]) : void 0
                }
                get hashesOnly() {
                    let e = this.tag.split(":");
                    return eF.includes(e[0]) && e[3] && "*" !== e[3] ? "true" === e[3] : void 0
                }
                get includeRemoved() {
                    let e = this.tag.split(":");
                    return e[0] !== eS ? void 0 : e[2] && "*" !== e[2] ? "true" === e[2] : void 0
                }
                get addresses() {
                    let e = this.tag.split(":");
                    return e[0] !== eS ? void 0 : e[1] && "*" !== e[1] ? function(e) {
                        if ("" !== e) return e.split("|").map(e => e.split(",")).map(e => Object.assign(Object.assign({}, "*" !== e[0] && {
                            to: e[0]
                        }), "*" !== e[1] && {
                            from: e[1]
                        }))
                    }(e[1]) : void 0
                }
            };

            function isAlchemyEvent(e) {
                return "object" == typeof e && "method" in e
            }

            function getAlchemyEventTag(e) {
                if (!isAlchemyEvent(e)) throw Error("Event tag requires AlchemyEventType");
                if (e.method === j.PENDING_TRANSACTIONS) return function(e) {
                    let t = serializeAddressField(e.fromAddress),
                        r = serializeAddressField(e.toAddress),
                        o = serializeBooleanField(e.hashesOnly);
                    return eP + ":" + t + ":" + r + ":" + o
                }(e);
                if (e.method === j.MINED_TRANSACTIONS) return function(e) {
                    var t;
                    let r = void 0 === (t = e.addresses) ? "*" : t.map(e => serializeAddressField(e.to) + "," + serializeAddressField(e.from)).join("|"),
                        o = serializeBooleanField(e.includeRemoved),
                        i = serializeBooleanField(e.hashesOnly);
                    return eS + ":" + r + ":" + o + ":" + i
                }(e);
                throw Error(`Unrecognized AlchemyFilterEvent: ${e}`)
            }

            function verifyAlchemyEventName(e) {
                if (!Object.values(j).includes(e.method)) throw Error(`Invalid method name ${e.method}. Accepted method names: ${Object.values(j)}`)
            }

            function serializeAddressField(e) {
                return void 0 === e ? "*" : Array.isArray(e) ? e.join("|") : e
            }

            function serializeBooleanField(e) {
                return void 0 === e ? "*" : e.toString()
            }

            function deserializeAddressField(e) {
                if ("" === e) return;
                let t = e.split("|");
                return 1 === t.length ? t[0] : t
            }
            let WebSocketNamespace = class WebSocketNamespace {
                constructor(e) {
                    this.config = e
                }
                on(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getWebSocketProvider(), o = yield this._resolveEnsAlchemyEvent(e);
                        r.on(o, t)
                    }), this
                }
                once(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getWebSocketProvider(), o = yield this._resolveEnsAlchemyEvent(e);
                        r.once(o, t)
                    }), this
                }
                off(e, t) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let r = yield this.config.getWebSocketProvider(), o = yield this._resolveEnsAlchemyEvent(e);
                        return r.off(o, t)
                    }), this
                }
                removeAllListeners(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getWebSocketProvider(), r = e ? yield this._resolveEnsAlchemyEvent(e): void 0;
                        t.removeAllListeners(r)
                    }), this
                }
                listenerCount(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getWebSocketProvider(), r = e ? yield this._resolveEnsAlchemyEvent(e): void 0;
                        return t.listenerCount(r)
                    })
                }
                listeners(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getWebSocketProvider(), r = e ? yield this._resolveEnsAlchemyEvent(e): void 0;
                        return t.listeners(r)
                    })
                }
                _resolveEnsAlchemyEvent(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        if (!isAlchemyEvent(e)) return e;
                        if (e.method === j.MINED_TRANSACTIONS && e.addresses) {
                            let t = [];
                            for (let r of e.addresses) r.to && (r.to = yield this._resolveNameOrError(r.to)), r.from && (r.from = yield this._resolveNameOrError(r.from)), t.push(r);
                            e.addresses = t
                        } else e.method === j.PENDING_TRANSACTIONS && (e.fromAddress && ("string" == typeof e.fromAddress ? e.fromAddress = yield this._resolveNameOrError(e.fromAddress): e.fromAddress = yield Promise.all(e.fromAddress.map(e => this._resolveNameOrError(e)))), e.toAddress && ("string" == typeof e.toAddress ? e.toAddress = yield this._resolveNameOrError(e.toAddress): e.toAddress = yield Promise.all(e.toAddress.map(e => this._resolveNameOrError(e)))));
                        return e
                    })
                }
                _resolveNameOrError(e) {
                    return __awaiter$1(this, void 0, void 0, function*() {
                        let t = yield this.config.getProvider(), r = yield t.resolveName(e);
                        if (null === r) throw Error(`Unable to resolve the ENS address: ${e}`);
                        return r
                    })
                }
            };
            let Alchemy = class Alchemy {
                constructor(e) {
                    this.config = new AlchemyConfig(e), this.core = new CoreNamespace(this.config), this.nft = new NftNamespace(this.config), this.ws = new WebSocketNamespace(this.config), this.transact = new TransactNamespace(this.config), this.notify = new NotifyNamespace(this.config), this.debug = new DebugNamespace(this.config)
                }
            }
        }
    }
]);