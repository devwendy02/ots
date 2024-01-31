"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6926], {
        81853: function(e, t, i) {
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var s = i(2265),
                n = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                u = s.useState,
                o = s.useEffect,
                l = s.useLayoutEffect,
                c = s.useDebugValue;

            function r(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var i = t();
                    return !n(e, i)
                } catch (e) {
                    return !0
                }
            }
            var h = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var i = t(),
                    s = u({
                        inst: {
                            value: i,
                            getSnapshot: t
                        }
                    }),
                    n = s[0].inst,
                    h = s[1];
                return l(function() {
                    n.value = i, n.getSnapshot = t, r(n) && h({
                        inst: n
                    })
                }, [e, i, t]), o(function() {
                    return r(n) && h({
                        inst: n
                    }), e(function() {
                        r(n) && h({
                            inst: n
                        })
                    })
                }, [e]), c(i), i
            };
            t.useSyncExternalStore = void 0 !== s.useSyncExternalStore ? s.useSyncExternalStore : h
        },
        78704: function(e, t, i) {
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var s = i(2265),
                n = i(26272),
                u = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                o = n.useSyncExternalStore,
                l = s.useRef,
                c = s.useEffect,
                h = s.useMemo,
                d = s.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, i, s, n) {
                var f = l(null);
                if (null === f.current) {
                    var y = {
                        hasValue: !1,
                        value: null
                    };
                    f.current = y
                } else y = f.current;
                var p = o(e, (f = h(function() {
                    function a(t) {
                        if (!l) {
                            if (l = !0, e = t, t = s(t), void 0 !== n && y.hasValue) {
                                var i = y.value;
                                if (n(i, t)) return o = i
                            }
                            return o = t
                        }
                        if (i = o, u(e, t)) return i;
                        var c = s(t);
                        return void 0 !== n && n(i, c) ? i : (e = t, o = c)
                    }
                    var e, o, l = !1,
                        c = void 0 === i ? null : i;
                    return [function() {
                        return a(t())
                    }, null === c ? void 0 : function() {
                        return a(c())
                    }]
                }, [t, i, s, n]))[0], f[1]);
                return c(function() {
                    y.hasValue = !0, y.value = p
                }, [p]), d(p), p
            }
        },
        26272: function(e, t, i) {
            e.exports = i(81853)
        },
        65401: function(e, t, i) {
            e.exports = i(78704)
        },
        56926: function(e, t, i) {
            let s;

            function noop() {}
            i.d(t, {
                eM: function() {
                    return WagmiConfig
                },
                _g: function() {
                    return createConfig
                },
                mA: function() {
                    return useAccount
                },
                KQ: function() {
                    return useBalance
                },
                $4: function() {
                    return useConnect
                },
                do: function() {
                    return useContractRead
                },
                GG: function() {
                    return useContractWrite
                },
                qL: function() {
                    return useDisconnect
                },
                c9: function() {
                    return useEnsAvatar
                },
                F6: function() {
                    return useEnsName
                },
                LN: function() {
                    return useNetwork
                },
                PJ: function() {
                    return usePrepareContractWrite
                },
                t_: function() {
                    return usePublicClient
                },
                QW: function() {
                    return useSignMessage
                },
                g0: function() {
                    return useSwitchNetwork
                },
                BX: function() {
                    return useWaitForTransaction
                }
            });
            let n = "undefined" == typeof window || "Deno" in window;

            function utils_noop() {}

            function isValidTimeout(e) {
                return "number" == typeof e && e >= 0 && e !== 1 / 0
            }

            function timeUntilStale(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function parseQueryArgs(e, t, i) {
                return isQueryKey(e) ? "function" == typeof t ? { ...i,
                    queryKey: e,
                    queryFn: t
                } : { ...t,
                    queryKey: e
                } : e
            }

            function parseMutationArgs(e, t, i) {
                return isQueryKey(e) ? "function" == typeof t ? { ...i,
                    mutationKey: e,
                    mutationFn: t
                } : { ...t,
                    mutationKey: e
                } : "function" == typeof e ? { ...t,
                    mutationFn: e
                } : { ...e
                }
            }

            function parseFilterArgs(e, t, i) {
                return isQueryKey(e) ? [{ ...t,
                    queryKey: e
                }, i] : [e || {}, t]
            }

            function matchQuery(e, t) {
                let {
                    type: i = "all",
                    exact: s,
                    fetchStatus: n,
                    predicate: u,
                    queryKey: o,
                    stale: l
                } = e;
                if (isQueryKey(o)) {
                    if (s) {
                        if (t.queryHash !== hashQueryKeyByOptions(o, t.options)) return !1
                    } else {
                        if (!partialDeepEqual(t.queryKey, o)) return !1
                    }
                }
                if ("all" !== i) {
                    let e = t.isActive();
                    if ("active" === i && !e || "inactive" === i && e) return !1
                }
                return ("boolean" != typeof l || t.isStale() === l) && (void 0 === n || n === t.state.fetchStatus) && (!u || !!u(t))
            }

            function matchMutation(e, t) {
                let {
                    exact: i,
                    fetching: s,
                    predicate: n,
                    mutationKey: u
                } = e;
                if (isQueryKey(u)) {
                    if (!t.options.mutationKey) return !1;
                    if (i) {
                        if (hashQueryKey(t.options.mutationKey) !== hashQueryKey(u)) return !1
                    } else {
                        if (!partialDeepEqual(t.options.mutationKey, u)) return !1
                    }
                }
                return ("boolean" != typeof s || "loading" === t.state.status === s) && (!n || !!n(t))
            }

            function hashQueryKeyByOptions(e, t) {
                let i = (null == t ? void 0 : t.queryKeyHashFn) || hashQueryKey;
                return i(e)
            }

            function hashQueryKey(e) {
                return JSON.stringify(e, (e, t) => isPlainObject(t) ? Object.keys(t).sort().reduce((e, i) => (e[i] = t[i], e), {}) : t)
            }

            function partialDeepEqual(e, t) {
                return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && !Object.keys(t).some(i => !partialDeepEqual(e[i], t[i]))
            }

            function utils_replaceEqualDeep(e, t) {
                if (e === t) return e;
                let i = isPlainArray(e) && isPlainArray(t);
                if (i || isPlainObject(e) && isPlainObject(t)) {
                    let s = i ? e.length : Object.keys(e).length,
                        n = i ? t : Object.keys(t),
                        u = n.length,
                        o = i ? [] : {},
                        l = 0;
                    for (let s = 0; s < u; s++) {
                        let u = i ? s : n[s];
                        o[u] = utils_replaceEqualDeep(e[u], t[u]), o[u] === e[u] && l++
                    }
                    return s === u && l === s ? e : o
                }
                return t
            }

            function shallowEqualObjects(e, t) {
                if (e && !t || t && !e) return !1;
                for (let i in e)
                    if (e[i] !== t[i]) return !1;
                return !0
            }

            function isPlainArray(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function isPlainObject(e) {
                if (!hasObjectPrototype(e)) return !1;
                let t = e.constructor;
                if (void 0 === t) return !0;
                let i = t.prototype;
                return !!(hasObjectPrototype(i) && i.hasOwnProperty("isPrototypeOf"))
            }

            function hasObjectPrototype(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function isQueryKey(e) {
                return Array.isArray(e)
            }

            function sleep(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }

            function scheduleMicrotask(e) {
                sleep(0).then(e)
            }

            function replaceData(e, t, i) {
                return null != i.isDataEqual && i.isDataEqual(e, t) ? e : "function" == typeof i.structuralSharing ? i.structuralSharing(e, t) : !1 !== i.structuralSharing ? utils_replaceEqualDeep(e, t) : t
            }
            let u = console,
                o = function() {
                    let e = [],
                        t = 0,
                        notifyFn = e => {
                            e()
                        },
                        batchNotifyFn = e => {
                            e()
                        },
                        schedule = i => {
                            t ? e.push(i) : scheduleMicrotask(() => {
                                notifyFn(i)
                            })
                        },
                        flush = () => {
                            let t = e;
                            e = [], t.length && scheduleMicrotask(() => {
                                batchNotifyFn(() => {
                                    t.forEach(e => {
                                        notifyFn(e)
                                    })
                                })
                            })
                        };
                    return {
                        batch: e => {
                            let i;
                            t++;
                            try {
                                i = e()
                            } finally {
                                --t || flush()
                            }
                            return i
                        },
                        batchCalls: e => (...t) => {
                            schedule(() => {
                                e(...t)
                            })
                        },
                        schedule,
                        setNotifyFunction: e => {
                            notifyFn = e
                        },
                        setBatchNotifyFunction: e => {
                            batchNotifyFn = e
                        }
                    }
                }();
            let Subscribable = class Subscribable {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    let t = {
                        listener: e
                    };
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            };
            let l = new class extends Subscribable {
                    constructor() {
                        super(), this.setup = e => {
                            if (!n && window.addEventListener) {
                                let listener = () => e();
                                return window.addEventListener("visibilitychange", listener, !1), window.addEventListener("focus", listener, !1), () => {
                                    window.removeEventListener("visibilitychange", listener), window.removeEventListener("focus", listener)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.cleanup || this.setEventListener(this.setup)
                    }
                    onUnsubscribe() {
                        if (!this.hasListeners()) {
                            var e;
                            null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                        }
                    }
                    setEventListener(e) {
                        var t;
                        this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                            "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                        })
                    }
                    setFocused(e) {
                        let t = this.focused !== e;
                        t && (this.focused = e, this.onFocus())
                    }
                    onFocus() {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e()
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                    }
                },
                c = ["online", "offline"],
                h = new class extends Subscribable {
                    constructor() {
                        super(), this.setup = e => {
                            if (!n && window.addEventListener) {
                                let listener = () => e();
                                return c.forEach(e => {
                                    window.addEventListener(e, listener, !1)
                                }), () => {
                                    c.forEach(e => {
                                        window.removeEventListener(e, listener)
                                    })
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.cleanup || this.setEventListener(this.setup)
                    }
                    onUnsubscribe() {
                        if (!this.hasListeners()) {
                            var e;
                            null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                        }
                    }
                    setEventListener(e) {
                        var t;
                        this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                            "boolean" == typeof e ? this.setOnline(e) : this.onOnline()
                        })
                    }
                    setOnline(e) {
                        let t = this.online !== e;
                        t && (this.online = e, this.onOnline())
                    }
                    onOnline() {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e()
                        })
                    }
                    isOnline() {
                        return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                    }
                };

            function defaultRetryDelay(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function canFetch(e) {
                return (null != e ? e : "online") !== "online" || h.isOnline()
            }
            let CancelledError = class CancelledError {
                constructor(e) {
                    this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
                }
            };

            function isCancelledError(e) {
                return e instanceof CancelledError
            }

            function createRetryer(e) {
                let t, i, s, n = !1,
                    u = 0,
                    o = !1,
                    c = new Promise((e, t) => {
                        i = e, s = t
                    }),
                    shouldPause = () => !l.isFocused() || "always" !== e.networkMode && !h.isOnline(),
                    resolve = s => {
                        o || (o = !0, null == e.onSuccess || e.onSuccess(s), null == t || t(), i(s))
                    },
                    reject = i => {
                        o || (o = !0, null == e.onError || e.onError(i), null == t || t(), s(i))
                    },
                    pause = () => new Promise(i => {
                        t = e => {
                            let t = o || !shouldPause();
                            return t && i(e), t
                        }, null == e.onPause || e.onPause()
                    }).then(() => {
                        t = void 0, o || null == e.onContinue || e.onContinue()
                    }),
                    run = () => {
                        let t;
                        if (!o) {
                            try {
                                t = e.fn()
                            } catch (e) {
                                t = Promise.reject(e)
                            }
                            Promise.resolve(t).then(resolve).catch(t => {
                                var i, s;
                                if (o) return;
                                let l = null != (i = e.retry) ? i : 3,
                                    c = null != (s = e.retryDelay) ? s : defaultRetryDelay,
                                    h = "function" == typeof c ? c(u, t) : c,
                                    d = !0 === l || "number" == typeof l && u < l || "function" == typeof l && l(u, t);
                                if (n || !d) {
                                    reject(t);
                                    return
                                }
                                u++, null == e.onFail || e.onFail(u, t), sleep(h).then(() => {
                                    if (shouldPause()) return pause()
                                }).then(() => {
                                    n ? reject(t) : run()
                                })
                            })
                        }
                    };
                return canFetch(e.networkMode) ? run() : pause().then(run), {
                    promise: c,
                    cancel: t => {
                        o || (reject(new CancelledError(t)), null == e.abort || e.abort())
                    },
                    continue: () => {
                        let e = null == t ? void 0 : t();
                        return e ? c : Promise.resolve()
                    },
                    cancelRetry: () => {
                        n = !0
                    },
                    continueRetry: () => {
                        n = !1
                    }
                }
            }
            let Removable = class Removable {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), isValidTimeout(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove()
                    }, this.cacheTime))
                }
                updateCacheTime(e) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != e ? e : n ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            };
            let Query = class Query extends Removable {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || u, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || function(e) {
                        let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                            i = void 0 !== t,
                            s = i ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: i ? null != s ? s : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: i ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    let i = replaceData(this.state.data, e, this.options);
                    return this.dispatch({
                        data: i,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        manual: null == t ? void 0 : t.manual
                    }), i
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    let i = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), i ? i.then(utils_noop).catch(utils_noop) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some(e => !1 !== e.options.enabled)
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e => e.getCurrentResult().isStale)
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnWindowFocus());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnReconnect());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var i, s, n, u;
                    if ("idle" !== this.state.fetchStatus) {
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) return null == (n = this.retryer) || n.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        let e = this.observers.find(e => e.options.queryFn);
                        e && this.setOptions(e.options)
                    }
                    let o = function() {
                            if ("function" == typeof AbortController) return new AbortController
                        }(),
                        l = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        addSignalProperty = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (o) return this.abortSignalConsumed = !0, o.signal
                                }
                            })
                        };
                    addSignalProperty(l);
                    let c = {
                        fetchOptions: t,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(l)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    addSignalProperty(c), null == (i = this.options.behavior) || i.onFetch(c), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (s = c.fetchOptions) ? void 0 : s.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (u = c.fetchOptions) ? void 0 : u.meta
                    });
                    let onError = e => {
                        if (isCancelledError(e) && e.silent || this.dispatch({
                                type: "error",
                                error: e
                            }), !isCancelledError(e)) {
                            var t, i, s, n;
                            null == (t = (i = this.cache.config).onError) || t.call(i, e, this), null == (s = (n = this.cache.config).onSettled) || s.call(n, this.state.data, e, this)
                        }
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = createRetryer({
                        fn: c.fetchFn,
                        abort: null == o ? void 0 : o.abort.bind(o),
                        onSuccess: e => {
                            var t, i, s, n;
                            if (void 0 === e) {
                                onError(Error(this.queryHash + " data is undefined"));
                                return
                            }
                            this.setData(e), null == (t = (i = this.cache.config).onSuccess) || t.call(i, e, this), null == (s = (n = this.cache.config).onSettled) || s.call(n, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        },
                        onError,
                        onFail: (e, t) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: e,
                                error: t
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: c.options.retry,
                        retryDelay: c.options.retryDelay,
                        networkMode: c.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    this.state = (t => {
                        var i, s;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: e.failureCount,
                                    fetchFailureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (i = e.meta) ? i : null,
                                    fetchStatus: canFetch(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (s = e.dataUpdatedAt) ? s : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!e.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                let n = e.error;
                                if (isCancelledError(n) && n.revert && this.revertState) return { ...this.revertState,
                                    fetchStatus: "idle"
                                };
                                return { ...t,
                                    error: n,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchFailureReason: n,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), o.batch(() => {
                        this.observers.forEach(t => {
                            t.onQueryUpdate(e)
                        }), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            };
            let QueryCache = class QueryCache extends Subscribable {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, i) {
                    var s;
                    let n = t.queryKey,
                        u = null != (s = t.queryHash) ? s : hashQueryKeyByOptions(n, t),
                        o = this.get(u);
                    return o || (o = new Query({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: n,
                        queryHash: u,
                        options: e.defaultQueryOptions(t),
                        state: i,
                        defaultOptions: e.getQueryDefaults(n)
                    }), this.add(o)), o
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    let t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter(t => t !== e), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    o.batch(() => {
                        this.queries.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    let [i] = parseFilterArgs(e, t);
                    return void 0 === i.exact && (i.exact = !0), this.queries.find(e => matchQuery(i, e))
                }
                findAll(e, t) {
                    let [i] = parseFilterArgs(e, t);
                    return Object.keys(i).length > 0 ? this.queries.filter(e => matchQuery(i, e)) : this.queries
                }
                notify(e) {
                    o.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                onFocus() {
                    o.batch(() => {
                        this.queries.forEach(e => {
                            e.onFocus()
                        })
                    })
                }
                onOnline() {
                    o.batch(() => {
                        this.queries.forEach(e => {
                            e.onOnline()
                        })
                    })
                }
            };
            let Mutation = class Mutation extends Removable {
                constructor(e) {
                    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || u, this.observers = [], this.state = e.state || mutation_getDefaultState(), this.setOptions(e.options), this.scheduleGc()
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                get meta() {
                    return this.options.meta
                }
                setState(e) {
                    this.dispatch({
                        type: "setState",
                        state: e
                    })
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers = this.observers.filter(t => t !== e), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: e
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    var e, t;
                    return null != (e = null == (t = this.retryer) ? void 0 : t.continue()) ? e : this.execute()
                }
                async execute() {
                    var e, t, i, s, n, u, o, l, c, h, d, f, y, p, v, m, b, g, C, S;
                    let O = "loading" === this.state.status;
                    try {
                        if (!O) {
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (c = (h = this.mutationCache.config).onMutate) ? void 0 : c.call(h, this.state.variables, this));
                            let e = await (null == (d = (f = this.options).onMutate) ? void 0 : d.call(f, this.state.variables));
                            e !== this.state.context && this.dispatch({
                                type: "loading",
                                context: e,
                                variables: this.state.variables
                            })
                        }
                        let y = await (() => {
                            var e;
                            return this.retryer = createRetryer({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                                onFail: (e, t) => {
                                    this.dispatch({
                                        type: "failed",
                                        failureCount: e,
                                        error: t
                                    })
                                },
                                onPause: () => {
                                    this.dispatch({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.dispatch({
                                        type: "continue"
                                    })
                                },
                                retry: null != (e = this.options.retry) ? e : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        })();
                        return await (null == (e = (t = this.mutationCache.config).onSuccess) ? void 0 : e.call(t, y, this.state.variables, this.state.context, this)), await (null == (i = (s = this.options).onSuccess) ? void 0 : i.call(s, y, this.state.variables, this.state.context)), await (null == (n = (u = this.mutationCache.config).onSettled) ? void 0 : n.call(u, y, null, this.state.variables, this.state.context, this)), await (null == (o = (l = this.options).onSettled) ? void 0 : o.call(l, y, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: y
                        }), y
                    } catch (e) {
                        try {
                            throw await (null == (y = (p = this.mutationCache.config).onError) ? void 0 : y.call(p, e, this.state.variables, this.state.context, this)), await (null == (v = (m = this.options).onError) ? void 0 : v.call(m, e, this.state.variables, this.state.context)), await (null == (b = (g = this.mutationCache.config).onSettled) ? void 0 : b.call(g, void 0, e, this.state.variables, this.state.context, this)), await (null == (C = (S = this.options).onSettled) ? void 0 : C.call(S, void 0, e, this.state.variables, this.state.context)), e
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: e
                            })
                        }
                    }
                }
                dispatch(e) {
                    this.state = (t => {
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    failureCount: e.failureCount,
                                    failureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...t,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...t,
                                    context: e.context,
                                    data: void 0,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    isPaused: !canFetch(this.options.networkMode),
                                    status: "loading",
                                    variables: e.variables
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...t,
                                    data: void 0,
                                    error: e.error,
                                    failureCount: t.failureCount + 1,
                                    failureReason: e.error,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), o.batch(() => {
                        this.observers.forEach(t => {
                            t.onMutationUpdate(e)
                        }), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            };

            function mutation_getDefaultState() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
            let MutationCache = class MutationCache extends Subscribable {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, i) {
                    let s = new Mutation({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: i,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
                    });
                    return this.add(s), s
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter(t => t !== e), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    o.batch(() => {
                        this.mutations.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return void 0 === e.exact && (e.exact = !0), this.mutations.find(t => matchMutation(e, t))
                }
                findAll(e) {
                    return this.mutations.filter(t => matchMutation(e, t))
                }
                notify(e) {
                    o.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                resumePausedMutations() {
                    var e;
                    return this.resuming = (null != (e = this.resuming) ? e : Promise.resolve()).then(() => {
                        let e = this.mutations.filter(e => e.state.isPaused);
                        return o.batch(() => e.reduce((e, t) => e.then(() => t.continue().catch(utils_noop)), Promise.resolve()))
                    }).then(() => {
                        this.resuming = void 0
                    }), this.resuming
                }
            };

            function getNextPageParam(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }
            let QueryClient = class QueryClient {
                constructor(e = {}) {
                    this.queryCache = e.queryCache || new QueryCache, this.mutationCache = e.mutationCache || new MutationCache, this.logger = e.logger || u, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = l.subscribe(() => {
                        l.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    }), this.unsubscribeOnline = h.subscribe(() => {
                        h.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var e, t;
                    this.mountCount--, 0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), this.unsubscribeFocus = void 0, null == (t = this.unsubscribeOnline) || t.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(e, t) {
                    let [i] = parseFilterArgs(e, t);
                    return i.fetchStatus = "fetching", this.queryCache.findAll(i).length
                }
                isMutating(e) {
                    return this.mutationCache.findAll({ ...e,
                        fetching: !0
                    }).length
                }
                getQueryData(e, t) {
                    var i;
                    return null == (i = this.queryCache.find(e, t)) ? void 0 : i.state.data
                }
                ensureQueryData(e, t, i) {
                    let s = parseQueryArgs(e, t, i),
                        n = this.getQueryData(s.queryKey);
                    return n ? Promise.resolve(n) : this.fetchQuery(s)
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map(({
                        queryKey: e,
                        state: t
                    }) => {
                        let i = t.data;
                        return [e, i]
                    })
                }
                setQueryData(e, t, i) {
                    let s = this.queryCache.find(e),
                        n = null == s ? void 0 : s.state.data,
                        u = "function" == typeof t ? t(n) : t;
                    if (void 0 === u) return;
                    let o = parseQueryArgs(e),
                        l = this.defaultQueryOptions(o);
                    return this.queryCache.build(this, l).setData(u, { ...i,
                        manual: !0
                    })
                }
                setQueriesData(e, t, i) {
                    return o.batch(() => this.getQueryCache().findAll(e).map(({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, i)]))
                }
                getQueryState(e, t) {
                    var i;
                    return null == (i = this.queryCache.find(e, t)) ? void 0 : i.state
                }
                removeQueries(e, t) {
                    let [i] = parseFilterArgs(e, t), s = this.queryCache;
                    o.batch(() => {
                        s.findAll(i).forEach(e => {
                            s.remove(e)
                        })
                    })
                }
                resetQueries(e, t, i) {
                    let [s, n] = parseFilterArgs(e, t, i), u = this.queryCache, l = {
                        type: "active",
                        ...s
                    };
                    return o.batch(() => (u.findAll(s).forEach(e => {
                        e.reset()
                    }), this.refetchQueries(l, n)))
                }
                cancelQueries(e, t, i) {
                    let [s, n = {}] = parseFilterArgs(e, t, i);
                    void 0 === n.revert && (n.revert = !0);
                    let u = o.batch(() => this.queryCache.findAll(s).map(e => e.cancel(n)));
                    return Promise.all(u).then(utils_noop).catch(utils_noop)
                }
                invalidateQueries(e, t, i) {
                    let [s, n] = parseFilterArgs(e, t, i);
                    return o.batch(() => {
                        var e, t;
                        if (this.queryCache.findAll(s).forEach(e => {
                                e.invalidate()
                            }), "none" === s.refetchType) return Promise.resolve();
                        let i = { ...s,
                            type: null != (e = null != (t = s.refetchType) ? t : s.type) ? e : "active"
                        };
                        return this.refetchQueries(i, n)
                    })
                }
                refetchQueries(e, t, i) {
                    let [s, n] = parseFilterArgs(e, t, i), u = o.batch(() => this.queryCache.findAll(s).filter(e => !e.isDisabled()).map(e => {
                        var t;
                        return e.fetch(void 0, { ...n,
                            cancelRefetch: null == (t = null == n ? void 0 : n.cancelRefetch) || t,
                            meta: {
                                refetchPage: s.refetchPage
                            }
                        })
                    })), l = Promise.all(u).then(utils_noop);
                    return null != n && n.throwOnError || (l = l.catch(utils_noop)), l
                }
                fetchQuery(e, t, i) {
                    let s = parseQueryArgs(e, t, i),
                        n = this.defaultQueryOptions(s);
                    void 0 === n.retry && (n.retry = !1);
                    let u = this.queryCache.build(this, n);
                    return u.isStaleByTime(n.staleTime) ? u.fetch(n) : Promise.resolve(u.state.data)
                }
                prefetchQuery(e, t, i) {
                    return this.fetchQuery(e, t, i).then(utils_noop).catch(utils_noop)
                }
                fetchInfiniteQuery(e, t, i) {
                    let s = parseQueryArgs(e, t, i);
                    return s.behavior = {
                        onFetch: e => {
                            e.fetchFn = () => {
                                var t, i, s, n, u, o, l;
                                let c;
                                let h = null == (t = e.fetchOptions) ? void 0 : null == (i = t.meta) ? void 0 : i.refetchPage,
                                    d = null == (s = e.fetchOptions) ? void 0 : null == (n = s.meta) ? void 0 : n.fetchMore,
                                    f = null == d ? void 0 : d.pageParam,
                                    y = (null == d ? void 0 : d.direction) === "forward",
                                    p = (null == d ? void 0 : d.direction) === "backward",
                                    v = (null == (u = e.state.data) ? void 0 : u.pages) || [],
                                    m = (null == (o = e.state.data) ? void 0 : o.pageParams) || [],
                                    b = m,
                                    g = !1,
                                    addSignalProperty = t => {
                                        Object.defineProperty(t, "signal", {
                                            enumerable: !0,
                                            get: () => {
                                                var t, i;
                                                return null != (t = e.signal) && t.aborted ? g = !0 : null == (i = e.signal) || i.addEventListener("abort", () => {
                                                    g = !0
                                                }), e.signal
                                            }
                                        })
                                    },
                                    C = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
                                    buildNewPages = (e, t, i, s) => (b = s ? [t, ...b] : [...b, t], s ? [i, ...e] : [...e, i]),
                                    fetchPage = (t, i, s, n) => {
                                        if (g) return Promise.reject("Cancelled");
                                        if (void 0 === s && !i && t.length) return Promise.resolve(t);
                                        let u = {
                                            queryKey: e.queryKey,
                                            pageParam: s,
                                            meta: e.options.meta
                                        };
                                        addSignalProperty(u);
                                        let o = C(u),
                                            l = Promise.resolve(o).then(e => buildNewPages(t, s, e, n));
                                        return l
                                    };
                                if (v.length) {
                                    if (y) {
                                        let t = void 0 !== f,
                                            i = t ? f : getNextPageParam(e.options, v);
                                        c = fetchPage(v, t, i)
                                    } else if (p) {
                                        let t = void 0 !== f,
                                            i = t ? f : null == (l = e.options).getPreviousPageParam ? void 0 : l.getPreviousPageParam(v[0], v);
                                        c = fetchPage(v, t, i, !0)
                                    } else {
                                        b = [];
                                        let t = void 0 === e.options.getNextPageParam,
                                            i = !h || !v[0] || h(v[0], 0, v);
                                        c = i ? fetchPage([], t, m[0]) : Promise.resolve(buildNewPages([], m[0], v[0]));
                                        for (let i = 1; i < v.length; i++) c = c.then(s => {
                                            let n = !h || !v[i] || h(v[i], i, v);
                                            if (n) {
                                                let n = t ? m[i] : getNextPageParam(e.options, s);
                                                return fetchPage(s, t, n)
                                            }
                                            return Promise.resolve(buildNewPages(s, m[i], v[i]))
                                        })
                                    }
                                } else c = fetchPage([]);
                                let S = c.then(e => ({
                                    pages: e,
                                    pageParams: b
                                }));
                                return S
                            }
                        }
                    }, this.fetchQuery(s)
                }
                prefetchInfiniteQuery(e, t, i) {
                    return this.fetchInfiniteQuery(e, t, i).then(utils_noop).catch(utils_noop)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(e) {
                    this.defaultOptions = e
                }
                setQueryDefaults(e, t) {
                    let i = this.queryDefaults.find(t => hashQueryKey(e) === hashQueryKey(t.queryKey));
                    i ? i.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    if (!e) return;
                    let t = this.queryDefaults.find(t => partialDeepEqual(e, t.queryKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                setMutationDefaults(e, t) {
                    let i = this.mutationDefaults.find(t => hashQueryKey(e) === hashQueryKey(t.mutationKey));
                    i ? i.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    if (!e) return;
                    let t = this.mutationDefaults.find(t => partialDeepEqual(e, t.mutationKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                defaultQueryOptions(e) {
                    if (null != e && e._defaulted) return e;
                    let t = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return !t.queryHash && t.queryKey && (t.queryHash = hashQueryKeyByOptions(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                }
                defaultMutationOptions(e) {
                    return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            };

            function defaultShouldDehydrateMutation(e) {
                return e.state.isPaused
            }

            function defaultShouldDehydrateQuery(e) {
                return "success" === e.state.status
            }
            let d = ["added", "removed", "updated"];

            function isCacheableEventType(e) {
                return d.includes(e)
            }
            async function persistQueryClientRestore({
                queryClient: e,
                persister: t,
                maxAge: i = 864e5,
                buster: s = "",
                hydrateOptions: n
            }) {
                try {
                    let u = await t.restoreClient();
                    if (u) {
                        if (u.timestamp) {
                            let o = Date.now() - u.timestamp > i,
                                l = u.buster !== s;
                            o || l ? t.removeClient() : function(e, t, i) {
                                if ("object" != typeof t || null === t) return;
                                let s = e.getMutationCache(),
                                    n = e.getQueryCache(),
                                    u = t.mutations || [],
                                    o = t.queries || [];
                                u.forEach(t => {
                                    var n;
                                    s.build(e, { ...null == i ? void 0 : null == (n = i.defaultOptions) ? void 0 : n.mutations,
                                        mutationKey: t.mutationKey
                                    }, t.state)
                                }), o.forEach(({
                                    queryKey: t,
                                    state: s,
                                    queryHash: u
                                }) => {
                                    var o;
                                    let l = n.get(u);
                                    if (l) {
                                        if (l.state.dataUpdatedAt < s.dataUpdatedAt) {
                                            let {
                                                fetchStatus: e,
                                                ...t
                                            } = s;
                                            l.setState(t)
                                        }
                                        return
                                    }
                                    n.build(e, { ...null == i ? void 0 : null == (o = i.defaultOptions) ? void 0 : o.queries,
                                        queryKey: t,
                                        queryHash: u
                                    }, { ...s,
                                        fetchStatus: "idle"
                                    })
                                })
                            }(e, u.clientState, n)
                        } else t.removeClient()
                    }
                } catch (e) {
                    t.removeClient()
                }
            }
            async function persistQueryClientSave({
                queryClient: e,
                persister: t,
                buster: i = "",
                dehydrateOptions: s
            }) {
                let n = {
                    buster: i,
                    timestamp: Date.now(),
                    clientState: function(e, t = {}) {
                        let i = [],
                            s = [];
                        if (!1 !== t.dehydrateMutations) {
                            let s = t.shouldDehydrateMutation || defaultShouldDehydrateMutation;
                            e.getMutationCache().getAll().forEach(e => {
                                s(e) && i.push({
                                    mutationKey: e.options.mutationKey,
                                    state: e.state
                                })
                            })
                        }
                        if (!1 !== t.dehydrateQueries) {
                            let i = t.shouldDehydrateQuery || defaultShouldDehydrateQuery;
                            e.getQueryCache().getAll().forEach(e => {
                                i(e) && s.push({
                                    state: e.state,
                                    queryKey: e.queryKey,
                                    queryHash: e.queryHash
                                })
                            })
                        }
                        return {
                            mutations: i,
                            queries: s
                        }
                    }(e, s)
                };
                await t.persistClient(n)
            }
            var f = i(14484),
                y = i(2265);
            let p = y.createContext(void 0),
                v = y.createContext(!1);

            function getQueryClientContext(e, t) {
                return e || (t && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = p), window.ReactQueryClientContext) : p)
            }
            let useQueryClient = ({
                    context: e
                } = {}) => {
                    let t = y.useContext(getQueryClientContext(e, y.useContext(v)));
                    if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                QueryClientProvider = ({
                    client: e,
                    children: t,
                    context: i,
                    contextSharing: s = !1
                }) => {
                    y.useEffect(() => (e.mount(), () => {
                        e.unmount()
                    }), [e]);
                    let n = getQueryClientContext(i, s);
                    return y.createElement(v.Provider, {
                        value: !i && s
                    }, y.createElement(n.Provider, {
                        value: e
                    }, t))
                },
                m = y.createContext(!1),
                useIsRestoring = () => y.useContext(m);
            m.Provider;
            let b = y.createContext((s = !1, {
                    clearReset: () => {
                        s = !1
                    },
                    reset: () => {
                        s = !0
                    },
                    isReset: () => s
                })),
                useQueryErrorResetBoundary = () => y.useContext(b);
            var g = i(26272);
            let MutationObserver = class MutationObserver extends Subscribable {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    var t;
                    let i = this.options;
                    this.options = this.client.defaultMutationOptions(e), shallowEqualObjects(i, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    }), null == (t = this.currentMutation) || t.setOptions(this.options)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.currentMutation) || e.removeObserver(this)
                    }
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    let t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: void 0 !== e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    let e = this.currentMutation ? this.currentMutation.state : mutation_getDefaultState(),
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    o.batch(() => {
                        if (this.mutateOptions && this.hasListeners()) {
                            var t, i, s, n, u, o, l, c;
                            e.onSuccess ? (null == (t = (i = this.mutateOptions).onSuccess) || t.call(i, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (s = (n = this.mutateOptions).onSettled) || s.call(n, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (u = (o = this.mutateOptions).onError) || u.call(o, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (l = (c = this.mutateOptions).onSettled) || l.call(c, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        })
                    })
                }
            };
            let C = g.useSyncExternalStore;

            function useMutation_noop() {}
            let QueryObserver = class QueryObserver extends Subscribable {
                constructor(e, t) {
                    super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.currentQuery.addObserver(this), shouldFetchOnMount(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(e, t) {
                    let i = this.options,
                        s = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(e), shallowEqualObjects(i, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = i.queryKey), this.updateQuery();
                    let n = this.hasListeners();
                    n && shouldFetchOptionally(this.currentQuery, s, this.options, i) && this.executeFetch(), this.updateResult(t), n && (this.currentQuery !== s || this.options.enabled !== i.enabled || this.options.staleTime !== i.staleTime) && this.updateStaleTimeout();
                    let u = this.computeRefetchInterval();
                    n && (this.currentQuery !== s || this.options.enabled !== i.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u)
                }
                getOptimisticResult(e) {
                    let t = this.client.getQueryCache().build(this.client, e),
                        i = this.createResult(t, e);
                    return e.keepPreviousData || (void 0 !== e.placeholderData ? !i.isPlaceholderData : shallowEqualObjects(this.getCurrentResult(), i)) || (this.currentResult = i, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), i
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(e) {
                    let t = {};
                    return Object.keys(e).forEach(i => {
                        Object.defineProperty(t, i, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(i), e[i])
                        })
                    }), t
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            refetchPage: e
                        }
                    })
                }
                fetchOptimistic(e) {
                    let t = this.client.defaultQueryOptions(e),
                        i = this.client.getQueryCache().build(this.client, t);
                    return i.isFetchingOptimistic = !0, i.fetch().then(() => this.createResult(i, t))
                }
                fetch(e) {
                    var t;
                    return this.executeFetch({ ...e,
                        cancelRefetch: null == (t = e.cancelRefetch) || t
                    }).then(() => (this.updateResult(), this.currentResult))
                }
                executeFetch(e) {
                    this.updateQuery();
                    let t = this.currentQuery.fetch(this.options, e);
                    return null != e && e.throwOnError || (t = t.catch(utils_noop)), t
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), n || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) return;
                    let e = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    this.staleTimeoutId = setTimeout(() => {
                        this.currentResult.isStale || this.updateResult()
                    }, e + 1)
                }
                computeRefetchInterval() {
                    var e;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
                }
                updateRefetchInterval(e) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = e, !n && !1 !== this.options.enabled && isValidTimeout(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground || l.isFocused()) && this.executeFetch()
                    }, this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(e, t) {
                    let i;
                    let s = this.currentQuery,
                        n = this.options,
                        u = this.currentResult,
                        o = this.currentResultState,
                        l = this.currentResultOptions,
                        c = e !== s,
                        h = c ? e.state : this.currentQueryInitialState,
                        d = c ? this.currentResult : this.previousQueryResult,
                        {
                            state: f
                        } = e,
                        {
                            dataUpdatedAt: y,
                            error: p,
                            errorUpdatedAt: v,
                            fetchStatus: m,
                            status: b
                        } = f,
                        g = !1,
                        C = !1;
                    if (t._optimisticResults) {
                        let i = this.hasListeners(),
                            u = !i && shouldFetchOnMount(e, t),
                            o = i && shouldFetchOptionally(e, s, t, n);
                        (u || o) && (m = canFetch(e.options.networkMode) ? "fetching" : "paused", y || (b = "loading")), "isRestoring" === t._optimisticResults && (m = "idle")
                    }
                    if (t.keepPreviousData && !f.dataUpdatedAt && null != d && d.isSuccess && "error" !== b) i = d.data, y = d.dataUpdatedAt, b = d.status, g = !0;
                    else if (t.select && void 0 !== f.data) {
                        if (u && f.data === (null == o ? void 0 : o.data) && t.select === this.selectFn) i = this.selectResult;
                        else try {
                            this.selectFn = t.select, i = t.select(f.data), i = replaceData(null == u ? void 0 : u.data, i, t), this.selectResult = i, this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                    } else i = f.data;
                    if (void 0 !== t.placeholderData && void 0 === i && "loading" === b) {
                        let e;
                        if (null != u && u.isPlaceholderData && t.placeholderData === (null == l ? void 0 : l.placeholderData)) e = u.data;
                        else if (e = "function" == typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && void 0 !== e) try {
                            e = t.select(e), this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                        void 0 !== e && (b = "success", i = replaceData(null == u ? void 0 : u.data, e, t), C = !0)
                    }
                    this.selectError && (p = this.selectError, i = this.selectResult, v = Date.now(), b = "error");
                    let S = "fetching" === m,
                        O = "loading" === b,
                        q = "error" === b,
                        E = {
                            status: b,
                            fetchStatus: m,
                            isLoading: O,
                            isSuccess: "success" === b,
                            isError: q,
                            isInitialLoading: O && S,
                            data: i,
                            dataUpdatedAt: y,
                            error: p,
                            errorUpdatedAt: v,
                            failureCount: f.fetchFailureCount,
                            failureReason: f.fetchFailureReason,
                            errorUpdateCount: f.errorUpdateCount,
                            isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
                            isFetchedAfterMount: f.dataUpdateCount > h.dataUpdateCount || f.errorUpdateCount > h.errorUpdateCount,
                            isFetching: S,
                            isRefetching: S && !O,
                            isLoadingError: q && 0 === f.dataUpdatedAt,
                            isPaused: "paused" === m,
                            isPlaceholderData: C,
                            isPreviousData: g,
                            isRefetchError: q && 0 !== f.dataUpdatedAt,
                            isStale: isStale(e, t),
                            refetch: this.refetch,
                            remove: this.remove
                        };
                    return E
                }
                updateResult(e) {
                    let t = this.currentResult,
                        i = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, shallowEqualObjects(i, t)) return;
                    this.currentResult = i;
                    let s = {
                        cache: !0
                    };
                    (null == e ? void 0 : e.listeners) !== !1 && (() => {
                        if (!t) return !0;
                        let {
                            notifyOnChangeProps: e
                        } = this.options, i = "function" == typeof e ? e() : e;
                        if ("all" === i || !i && !this.trackedProps.size) return !0;
                        let s = new Set(null != i ? i : this.trackedProps);
                        return this.options.useErrorBoundary && s.add("error"), Object.keys(this.currentResult).some(e => {
                            let i = this.currentResult[e] !== t[e];
                            return i && s.has(e)
                        })
                    })() && (s.listeners = !0), this.notify({ ...s,
                        ...e
                    })
                }
                updateQuery() {
                    let e = this.client.getQueryCache().build(this.client, this.options);
                    if (e === this.currentQuery) return;
                    let t = this.currentQuery;
                    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
                }
                onQueryUpdate(e) {
                    let t = {};
                    "success" === e.type ? t.onSuccess = !e.manual : "error" !== e.type || isCancelledError(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
                }
                notify(e) {
                    o.batch(() => {
                        var t, i, s, n, u, o, l, c;
                        e.onSuccess ? (null == (t = (i = this.options).onSuccess) || t.call(i, this.currentResult.data), null == (s = (n = this.options).onSettled) || s.call(n, this.currentResult.data, null)) : e.onError && (null == (u = (o = this.options).onError) || u.call(o, this.currentResult.error), null == (l = (c = this.options).onSettled) || l.call(c, void 0, this.currentResult.error)), e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        }), e.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            };

            function shouldFetchOnMount(e, t) {
                return !1 !== t.enabled && !e.state.dataUpdatedAt && !("error" === e.state.status && !1 === t.retryOnMount) || e.state.dataUpdatedAt > 0 && shouldFetchOn(e, t, t.refetchOnMount)
            }

            function shouldFetchOn(e, t, i) {
                if (!1 !== t.enabled) {
                    let s = "function" == typeof i ? i(e) : i;
                    return "always" === s || !1 !== s && isStale(e, t)
                }
                return !1
            }

            function shouldFetchOptionally(e, t, i, s) {
                return !1 !== i.enabled && (e !== t || !1 === s.enabled) && (!i.suspense || "error" !== e.state.status) && isStale(e, i)
            }

            function isStale(e, t) {
                return e.isStaleByTime(t.staleTime)
            }
            var S = i(65401);

            function createConfig({
                queryClient: e = new QueryClient({
                    defaultOptions: {
                        queries: {
                            cacheTime: 864e5,
                            networkMode: "offlineFirst",
                            refetchOnWindowFocus: !1,
                            retry: 0
                        },
                        mutations: {
                            networkMode: "offlineFirst"
                        }
                    }
                }),
                storage: t = (0, f.o6)({
                    storage: "undefined" != typeof window && window.localStorage ? window.localStorage : f.wp
                }),
                persister: i = "undefined" != typeof window ? function({
                    storage: e,
                    key: t = "REACT_QUERY_OFFLINE_CACHE",
                    throttleTime: i = 1e3,
                    serialize: s = JSON.stringify,
                    deserialize: n = JSON.parse,
                    retry: u
                }) {
                    if (e) {
                        let trySave = i => {
                            try {
                                e.setItem(t, s(i));
                                return
                            } catch (e) {
                                return e
                            }
                        };
                        return {
                            persistClient: function(e, t = 100) {
                                let i, s = null;
                                return function(...n) {
                                    i = n, null === s && (s = setTimeout(() => {
                                        e(...i), s = null
                                    }, t))
                                }
                            }(e => {
                                let t = e,
                                    i = trySave(t),
                                    s = 0;
                                for (; i && t;) s++, (t = null == u ? void 0 : u({
                                    persistedClient: t,
                                    error: i,
                                    errorCount: s
                                })) && (i = trySave(t))
                            }, i),
                            restoreClient: () => {
                                let i = e.getItem(t);
                                if (i) return n(i)
                            },
                            removeClient: () => {
                                e.removeItem(t)
                            }
                        }
                    }
                    return {
                        persistClient: noop,
                        restoreClient: () => void 0,
                        removeClient: noop
                    }
                }({
                    key: "cache",
                    storage: t,
                    serialize: e => e,
                    deserialize: e => e
                }) : void 0,
                ...s
            }) {
                let n = (0, f._g)({ ...s,
                    storage: t
                });
                return i && function(e) {
                    persistQueryClientRestore(e).then(() => {
                        (function(e) {
                            let t = e.queryClient.getQueryCache().subscribe(t => {
                                    isCacheableEventType(t.type) && persistQueryClientSave(e)
                                }),
                                i = e.queryClient.getMutationCache().subscribe(t => {
                                    isCacheableEventType(t.type) && persistQueryClientSave(e)
                                })
                        })(e)
                    })
                }({
                    queryClient: e,
                    persister: i,
                    dehydrateOptions: {
                        shouldDehydrateQuery: e => 0 !== e.cacheTime && !1 !== e.queryKey[0].persist
                    }
                }), Object.assign(n, {
                    queryClient: e
                })
            }
            var O = y.createContext(void 0),
                q = y.createContext(void 0);

            function WagmiConfig({
                children: e,
                config: t
            }) {
                return y.createElement(O.Provider, {
                    children: y.createElement(QueryClientProvider, {
                        children: e,
                        client: t.queryClient,
                        context: q
                    }),
                    value: t
                })
            }

            function useConfig() {
                let e = y.useContext(O);
                if (!e) throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");
                return e
            }
            var E = g.useSyncExternalStore;

            function dist_hasObjectPrototype(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function queryKeyHashFn(e) {
                return JSON.stringify(e, (e, t) => ! function(e) {
                    if (!dist_hasObjectPrototype(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let i = t.prototype;
                    return !!(dist_hasObjectPrototype(i) && i.hasOwnProperty("isPrototypeOf"))
                }(t) ? "bigint" == typeof t ? t.toString() : t : Object.keys(t).sort().reduce((e, i) => (e[i] = t[i], e), {}))
            }

            function dist_useMutation(e, t, i) {
                let s = parseMutationArgs(e, t, i);
                return function(e, t, i) {
                    var s, n;
                    let u = parseMutationArgs(e, void 0, void 0),
                        l = useQueryClient({
                            context: u.context
                        }),
                        [c] = y.useState(() => new MutationObserver(l, u));
                    y.useEffect(() => {
                        c.setOptions(u)
                    }, [c, u]);
                    let h = C(y.useCallback(e => c.subscribe(o.batchCalls(e)), [c]), () => c.getCurrentResult(), () => c.getCurrentResult()),
                        d = y.useCallback((e, t) => {
                            c.mutate(e, t).catch(useMutation_noop)
                        }, [c]);
                    if (h.error && (s = c.options.useErrorBoundary, n = [h.error], "function" == typeof s ? s(...n) : !!s)) throw h.error;
                    return { ...h,
                        mutate: d,
                        mutateAsync: h.mutate
                    }
                }({
                    context: q,
                    ...s
                })
            }

            function useQuery(e, t, i) {
                let s = Array.isArray(e) ? "function" == typeof t ? { ...i,
                        queryKey: e,
                        queryFn: t
                    } : { ...t,
                        queryKey: e
                    } : e,
                    n = function(e, t) {
                        var i, s;
                        let n = useQueryClient({
                                context: e.context
                            }),
                            u = useIsRestoring(),
                            l = useQueryErrorResetBoundary(),
                            c = n.defaultQueryOptions({ ...e,
                                queryKeyHashFn
                            });
                        c._optimisticResults = u ? "isRestoring" : "optimistic", c.onError && (c.onError = o.batchCalls(c.onError)), c.onSuccess && (c.onSuccess = o.batchCalls(c.onSuccess)), c.onSettled && (c.onSettled = o.batchCalls(c.onSettled)), c.suspense && "number" != typeof c.staleTime && (c.staleTime = 1e3), (c.suspense || c.useErrorBoundary) && !l.isReset() && (c.retryOnMount = !1);
                        let [h] = y.useState(() => new t(n, c)), d = h.getOptimisticResult(c);
                        if (E(y.useCallback(e => u ? () => void 0 : h.subscribe(o.batchCalls(e)), [h, u]), () => h.getCurrentResult(), () => h.getCurrentResult()), y.useEffect(() => {
                                l.clearReset()
                            }, [l]), y.useEffect(() => {
                                h.setOptions(c, {
                                    listeners: !1
                                })
                            }, [c, h]), c.suspense && d.isLoading && d.isFetching && !u) throw h.fetchOptimistic(c).then(({
                            data: e
                        }) => {
                            c.onSuccess ? .(e), c.onSettled ? .(e, null)
                        }).catch(e => {
                            l.clearReset(), c.onError ? .(e), c.onSettled ? .(void 0, e)
                        });
                        if (d.isError && !l.isReset() && !d.isFetching && (i = c.useErrorBoundary, s = [d.error, h.getCurrentQuery()], "function" == typeof i ? i(...s) : !!i)) throw d.error;
                        let f = "loading" === d.status && "idle" === d.fetchStatus ? "idle" : d.status,
                            p = "loading" === f && "fetching" === d.fetchStatus;
                        return { ...d,
                            defaultedOptions: c,
                            isIdle: "idle" === f,
                            isLoading: p,
                            observer: h,
                            status: f
                        }
                    }({
                        context: q,
                        ...s
                    }, QueryObserver),
                    u = {
                        data: n.data,
                        error: n.error,
                        fetchStatus: n.fetchStatus,
                        isError: n.isError,
                        isFetched: n.isFetched,
                        isFetchedAfterMount: n.isFetchedAfterMount,
                        isFetching: n.isFetching,
                        isIdle: n.isIdle,
                        isLoading: n.isLoading,
                        isRefetching: n.isRefetching,
                        isSuccess: n.isSuccess,
                        refetch: n.refetch,
                        status: n.status,
                        internal: {
                            dataUpdatedAt: n.dataUpdatedAt,
                            errorUpdatedAt: n.errorUpdatedAt,
                            failureCount: n.failureCount,
                            isFetchedAfterMount: n.isFetchedAfterMount,
                            isLoadingError: n.isLoadingError,
                            isPaused: n.isPaused,
                            isPlaceholderData: n.isPlaceholderData,
                            isPreviousData: n.isPreviousData,
                            isRefetchError: n.isRefetchError,
                            isStale: n.isStale,
                            remove: n.remove
                        }
                    };
                return n.defaultedOptions.notifyOnChangeProps ? u : function(e, t) {
                    let i = {};
                    return Object.keys(e).forEach(s => {
                        Object.defineProperty(i, s, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (t.trackedProps.add(s), e[s])
                        })
                    }), i
                }(u, n.observer)
            }
            var useQueryClient2 = () => useQueryClient({
                context: q
            });

            function usePublicClient({
                chainId: e
            } = {}) {
                return (0, S.useSyncExternalStoreWithSelector)(t => (0, f.pC)({
                    chainId: e
                }, t), () => (0, f.uV)({
                    chainId: e
                }), () => (0, f.uV)({
                    chainId: e
                }), e => e, (e, t) => e.uid === t.uid)
            }

            function queryKey({
                chainId: e
            }) {
                return [{
                    entity: "walletClient",
                    chainId: e,
                    persist: !1
                }]
            }

            function queryFn({
                queryKey: [{
                    chainId: e
                }]
            }) {
                return (0, f.xz)({
                    chainId: e
                })
            }

            function useChainId({
                chainId: e
            } = {}) {
                let t = usePublicClient({
                    chainId: e
                });
                return t.chain.id
            }

            function queryKey2({
                chainId: e,
                scopeKey: t
            }) {
                return [{
                    entity: "blockNumber",
                    chainId: e,
                    scopeKey: t
                }]
            }

            function queryFn2({
                queryKey: [{
                    chainId: e
                }]
            }) {
                return (0, f.RQ)({
                    chainId: e
                })
            }

            function useBlockNumber({
                cacheTime: e = 0,
                chainId: t,
                enabled: i = !0,
                scopeKey: s,
                staleTime: n,
                suspense: u,
                watch: o = !1,
                onBlock: l,
                onError: c,
                onSettled: h,
                onSuccess: d
            } = {}) {
                let p = useChainId({
                        chainId: t
                    }),
                    v = usePublicClient({
                        chainId: p
                    }),
                    m = function({
                        chainId: e
                    } = {}) {
                        return (0, S.useSyncExternalStoreWithSelector)(t => (0, f.fq)({
                            chainId: e
                        }, t), () => (0, f.jr)({
                            chainId: e
                        }), () => (0, f.jr)({
                            chainId: e
                        }), e => e, (e, t) => e ? .uid === t ? .uid)
                    }({
                        chainId: p
                    }),
                    b = useQueryClient2();
                return y.useEffect(() => {
                    if (!i || !o && !l) return;
                    let e = m ? ? v,
                        t = e.watchBlockNumber({
                            onBlockNumber: e => {
                                o && b.setQueryData(queryKey2({
                                    chainId: p,
                                    scopeKey: s
                                }), e), l && l(e)
                            },
                            emitOnBegin: !0
                        });
                    return t
                }, [p, s, l, v, b, o, m, i]), useQuery(queryKey2({
                    scopeKey: s,
                    chainId: p
                }), queryFn2, {
                    cacheTime: e,
                    enabled: i,
                    staleTime: n,
                    suspense: u,
                    onError: c,
                    onSettled: h,
                    onSuccess: d
                })
            }

            function useInvalidateOnBlock({
                chainId: e,
                enabled: t,
                queryKey: i
            }) {
                let s = useQueryClient2(),
                    n = y.useCallback(() => s.invalidateQueries({
                        queryKey: i
                    }, {
                        cancelRefetch: !1
                    }), [s, i]);
                useBlockNumber({
                    chainId: e,
                    enabled: t,
                    onBlock: t ? n : void 0,
                    scopeKey: t ? void 0 : "idle"
                })
            }
            var isPlainObject2 = e => "object" == typeof e && !Array.isArray(e);

            function useSyncExternalStoreWithTracked(e, t, i = t, s = f.vZ) {
                let n = y.useRef([]),
                    u = (0, S.useSyncExternalStoreWithSelector)(e, t, i, e => e, (e, t) => {
                        if (isPlainObject2(e) && isPlainObject2(t) && n.current.length) {
                            for (let i of n.current) {
                                let n = s(e[i], t[i]);
                                if (!n) return !1
                            }
                            return !0
                        }
                        return s(e, t)
                    });
                if (isPlainObject2(u)) {
                    let e = { ...u
                    };
                    return Object.defineProperties(e, Object.entries(e).reduce((e, [t, i]) => ({ ...e,
                        [t]: {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (n.current.includes(t) || n.current.push(t), i)
                        }
                    }), {})), e
                }
                return u
            }

            function useAccount({
                onConnect: e,
                onDisconnect: t
            } = {}) {
                let i = useConfig(),
                    s = y.useCallback(e => (0, f.uH)(e), [i]),
                    n = useSyncExternalStoreWithTracked(s, f.D0),
                    u = y.useRef(),
                    o = u.current;
                return y.useEffect(() => {
                    o ? .status !== "connected" && "connected" === n.status && e ? .({
                        address: n.address,
                        connector: n.connector,
                        isReconnected: o ? .status === "reconnecting" || o ? .status === void 0
                    }), o ? .status === "connected" && "disconnected" === n.status && t ? .(), u.current = n
                }, [e, t, o, n]), n
            }

            function queryFn4({
                queryKey: [{
                    address: e,
                    chainId: t,
                    formatUnits: i,
                    token: s
                }]
            }) {
                if (!e) throw Error("address is required");
                return (0, f.EG)({
                    address: e,
                    chainId: t,
                    formatUnits: i,
                    token: s
                })
            }

            function useBalance({
                address: e,
                cacheTime: t,
                chainId: i,
                enabled: s = !0,
                formatUnits: n,
                scopeKey: u,
                staleTime: o,
                suspense: l,
                token: c,
                watch: h,
                onError: d,
                onSettled: f,
                onSuccess: p
            } = {}) {
                let v = useChainId({
                        chainId: i
                    }),
                    m = y.useMemo(() => (function({
                        address: e,
                        chainId: t,
                        formatUnits: i,
                        scopeKey: s,
                        token: n
                    }) {
                        return [{
                            entity: "balance",
                            address: e,
                            chainId: t,
                            formatUnits: i,
                            scopeKey: s,
                            token: n
                        }]
                    })({
                        address: e,
                        chainId: v,
                        formatUnits: n,
                        scopeKey: u,
                        token: c
                    }), [e, v, n, u, c]),
                    b = useQuery(m, queryFn4, {
                        cacheTime: t,
                        enabled: !!(s && e),
                        staleTime: o,
                        suspense: l,
                        onError: d,
                        onSettled: f,
                        onSuccess: p
                    });
                return useInvalidateOnBlock({
                    chainId: v,
                    enabled: !!(s && h && e),
                    queryKey: m
                }), b
            }
            var mutationKey = e => [{
                    entity: "connect",
                    ...e
                }],
                mutationFn = e => {
                    let {
                        connector: t,
                        chainId: i
                    } = e;
                    if (!t) throw Error("connector is required");
                    return (0, f.$j)({
                        connector: t,
                        chainId: i
                    })
                };

            function useConnect({
                chainId: e,
                connector: t,
                onError: i,
                onMutate: s,
                onSettled: n,
                onSuccess: u
            } = {}) {
                let o = useConfig(),
                    {
                        data: l,
                        error: c,
                        isError: h,
                        isIdle: d,
                        isLoading: f,
                        isSuccess: p,
                        mutate: v,
                        mutateAsync: m,
                        reset: b,
                        status: g,
                        variables: C
                    } = dist_useMutation(mutationKey({
                        connector: t,
                        chainId: e
                    }), mutationFn, {
                        onError: i,
                        onMutate: s,
                        onSettled: n,
                        onSuccess: u
                    }),
                    S = y.useCallback(i => v({
                        chainId: i ? .chainId ? ? e,
                        connector: i ? .connector ? ? t
                    }), [e, t, v]),
                    O = y.useCallback(i => m({
                        chainId: i ? .chainId ? ? e,
                        connector: i ? .connector ? ? t
                    }), [e, t, m]);
                return {
                    connect: S,
                    connectAsync: O,
                    connectors: o.connectors,
                    data: l,
                    error: c,
                    isError: h,
                    isIdle: d,
                    isLoading: f,
                    isSuccess: p,
                    pendingConnector: C ? .connector,
                    reset: b,
                    status: g,
                    variables: C
                }
            }
            var w = [{
                    entity: "disconnect"
                }],
                mutationFn2 = () => (0, f.zP)();

            function useDisconnect({
                onError: e,
                onMutate: t,
                onSettled: i,
                onSuccess: s
            } = {}) {
                let {
                    error: n,
                    isError: u,
                    isIdle: o,
                    isLoading: l,
                    isSuccess: c,
                    mutate: h,
                    mutateAsync: d,
                    reset: f,
                    status: y
                } = dist_useMutation(w, mutationFn2, { ...e ? {
                        onError(t, i, s) {
                            e(t, s)
                        }
                    } : {},
                    onMutate: t,
                    ...i ? {
                        onSettled(e, t, s, n) {
                            i(t, n)
                        }
                    } : {},
                    ...s ? {
                        onSuccess(e, t, i) {
                            s(i)
                        }
                    } : {}
                });
                return {
                    disconnect: h,
                    disconnectAsync: d,
                    error: n,
                    isError: u,
                    isIdle: o,
                    isLoading: l,
                    isSuccess: c,
                    reset: f,
                    status: y
                }
            }

            function useNetwork() {
                let e = useConfig(),
                    t = (0, y.useCallback)(e => (0, f.QC)(e), [e]);
                return useSyncExternalStoreWithTracked(t, f.Hy)
            }
            var mutationKey3 = e => [{
                    entity: "signMessage",
                    ...e
                }],
                mutationFn3 = e => {
                    let {
                        message: t
                    } = e;
                    if (!t) throw Error("message is required");
                    return (0, f.l)({
                        message: t
                    })
                };

            function useSignMessage({
                message: e,
                onError: t,
                onMutate: i,
                onSettled: s,
                onSuccess: n
            } = {}) {
                let {
                    data: u,
                    error: o,
                    isError: l,
                    isIdle: c,
                    isLoading: h,
                    isSuccess: d,
                    mutate: f,
                    mutateAsync: p,
                    reset: v,
                    status: m,
                    variables: b
                } = dist_useMutation(mutationKey3({
                    message: e
                }), mutationFn3, {
                    onError: t,
                    onMutate: i,
                    onSettled: s,
                    onSuccess: n
                }), g = y.useCallback(t => f(t || {
                    message: e
                }), [e, f]), C = y.useCallback(t => p(t || {
                    message: e
                }), [e, p]);
                return {
                    data: u,
                    error: o,
                    isError: l,
                    isIdle: c,
                    isLoading: h,
                    isSuccess: d,
                    reset: v,
                    signMessage: g,
                    signMessageAsync: C,
                    status: m,
                    variables: b
                }
            }
            var mutationKey5 = e => [{
                    entity: "switchNetwork",
                    ...e
                }],
                mutationFn5 = e => {
                    let {
                        chainId: t
                    } = e;
                    if (!t) throw Error("chainId is required");
                    return (0, f.If)({
                        chainId: t
                    })
                };

            function useSwitchNetwork({
                chainId: e,
                throwForSwitchChainNotSupported: t,
                onError: i,
                onMutate: s,
                onSettled: n,
                onSuccess: u
            } = {}) {
                let o, l;
                let c = useConfig(),
                    h = function() {
                        let [, e] = y.useReducer(e => e + 1, 0);
                        return e
                    }(),
                    {
                        data: d,
                        error: f,
                        isError: p,
                        isIdle: v,
                        isLoading: m,
                        isSuccess: b,
                        mutate: g,
                        mutateAsync: C,
                        reset: S,
                        status: O,
                        variables: q
                    } = dist_useMutation(mutationKey5({
                        chainId: e
                    }), mutationFn5, {
                        onError: i,
                        onMutate: s,
                        onSettled: n,
                        onSuccess: u
                    }),
                    E = y.useCallback(t => g({
                        chainId: t ? ? e
                    }), [e, g]),
                    w = y.useCallback(t => C({
                        chainId: t ? ? e
                    }), [e, C]);
                y.useEffect(() => {
                    let e = c.subscribe(({
                        chains: e,
                        connector: t
                    }) => ({
                        chains: e,
                        connector: t
                    }), h);
                    return e
                }, [c, h]);
                let R = !!c.connector ? .switchChain;
                return (t || R) && (o = E, l = w), {
                    chains: c.chains ? ? [],
                    data: d,
                    error: f,
                    isError: p,
                    isIdle: v,
                    isLoading: m,
                    isSuccess: b,
                    pendingChainId: q ? .chainId,
                    reset: S,
                    status: O,
                    switchNetwork: o,
                    switchNetworkAsync: l,
                    variables: q
                }
            }

            function useContractRead({
                abi: e,
                address: t,
                account: i,
                args: s,
                blockNumber: n,
                blockTag: u,
                cacheOnBlock: o = !1,
                cacheTime: l,
                chainId: c,
                enabled: h = !0,
                functionName: d,
                isDataEqual: p,
                keepPreviousData: v,
                onError: m,
                onSettled: b,
                onSuccess: g,
                scopeKey: C,
                select: S,
                staleTime: O,
                structuralSharing: q = (e, t) => (0, f.vZ)(e, t) ? e : utils_replaceEqualDeep(e, t),
                suspense: E,
                watch: w
            } = {}) {
                let R = useChainId({
                        chainId: c
                    }),
                    {
                        data: Q
                    } = useBlockNumber({
                        chainId: R,
                        enabled: w || o,
                        scopeKey: w || o ? void 0 : "idle",
                        watch: w
                    }),
                    F = n ? ? Q,
                    P = y.useMemo(() => (function({
                        account: e,
                        address: t,
                        args: i,
                        blockNumber: s,
                        blockTag: n,
                        chainId: u,
                        functionName: o,
                        scopeKey: l
                    }) {
                        return [{
                            entity: "readContract",
                            account: e,
                            address: t,
                            args: i,
                            blockNumber: s,
                            blockTag: n,
                            chainId: u,
                            functionName: o,
                            scopeKey: l
                        }]
                    })({
                        account: i,
                        address: t,
                        args: s,
                        blockNumber: o ? F : void 0,
                        blockTag: u,
                        chainId: R,
                        functionName: d,
                        scopeKey: C
                    }), [i, t, s, F, u, o, R, d, C]),
                    M = y.useMemo(() => {
                        let i = !!(h && e && t && d);
                        return o && (i = !!(i && F)), i
                    }, [e, t, F, o, h, d]);
                return useInvalidateOnBlock({
                    chainId: R,
                    enabled: !!(M && w && !o),
                    queryKey: P
                }), useQuery(P, function({
                    abi: e
                }) {
                    return async ({
                        queryKey: [{
                            account: t,
                            address: i,
                            args: s,
                            blockNumber: n,
                            blockTag: u,
                            chainId: o,
                            functionName: l
                        }]
                    }) => {
                        if (!e) throw Error("abi is required");
                        if (!i) throw Error("address is required");
                        return await (0, f.a4)({
                            account: t,
                            address: i,
                            args: s,
                            blockNumber: n,
                            blockTag: u,
                            chainId: o,
                            abi: e,
                            functionName: l
                        }) ? ? null
                    }
                }({
                    abi: e
                }), {
                    cacheTime: l,
                    enabled: M,
                    isDataEqual: p,
                    keepPreviousData: v,
                    select: S,
                    staleTime: O,
                    structuralSharing: q,
                    suspense: E,
                    onError: m,
                    onSettled: b,
                    onSuccess: g
                })
            }

            function mutationFn6(e) {
                if ("prepared" === e.mode) {
                    if (!e.request) throw Error("request is required");
                    return (0, f.n9)({
                        mode: "prepared",
                        request: e.request
                    })
                }
                if (!e.address) throw Error("address is required");
                if (!e.abi) throw Error("abi is required");
                if (!e.functionName) throw Error("functionName is required");
                return (0, f.n9)({
                    address: e.address,
                    args: e.args,
                    chainId: e.chainId,
                    abi: e.abi,
                    functionName: e.functionName,
                    accessList: e.accessList,
                    account: e.account,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    maxFeePerGas: e.maxFeePerGas,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                    nonce: e.nonce,
                    value: e.value
                })
            }

            function useContractWrite(e) {
                let {
                    address: t,
                    abi: i,
                    args: s,
                    chainId: n,
                    functionName: u,
                    mode: o,
                    request: l
                } = e, {
                    accessList: c,
                    account: h,
                    gas: d,
                    gasPrice: p,
                    maxFeePerGas: v,
                    maxPriorityFeePerGas: m,
                    nonce: b,
                    value: g
                } = (0, f.gY)(e), {
                    data: C,
                    error: S,
                    isError: O,
                    isIdle: q,
                    isLoading: E,
                    isSuccess: w,
                    mutate: R,
                    mutateAsync: Q,
                    reset: F,
                    status: P,
                    variables: M
                } = dist_useMutation(function({
                    address: e,
                    abi: t,
                    functionName: i,
                    ...s
                }) {
                    let {
                        args: n,
                        accessList: u,
                        account: o,
                        gas: l,
                        gasPrice: c,
                        maxFeePerGas: h,
                        maxPriorityFeePerGas: d,
                        nonce: f,
                        request: y,
                        value: p
                    } = s;
                    return [{
                        entity: "writeContract",
                        address: e,
                        args: n,
                        abi: t,
                        accessList: u,
                        account: o,
                        functionName: i,
                        gas: l,
                        gasPrice: c,
                        maxFeePerGas: h,
                        maxPriorityFeePerGas: d,
                        nonce: f,
                        request: y,
                        value: p
                    }]
                }({
                    address: t,
                    abi: i,
                    functionName: u,
                    chainId: n,
                    mode: o,
                    args: s,
                    accessList: c,
                    account: h,
                    gas: d,
                    gasPrice: p,
                    maxFeePerGas: v,
                    maxPriorityFeePerGas: m,
                    nonce: b,
                    request: l,
                    value: g
                }), mutationFn6, {
                    onError: e.onError,
                    onMutate: e.onMutate,
                    onSettled: e.onSettled,
                    onSuccess: e.onSuccess
                }), I = y.useMemo(() => {
                    if ("prepared" === e.mode) {
                        if (!l) return;
                        return () => R({
                            mode: "prepared",
                            request: e.request,
                            chainId: e.chainId
                        })
                    }
                    return e => R({
                        address: t,
                        args: s,
                        abi: i,
                        functionName: u,
                        chainId: n,
                        accessList: c,
                        account: h,
                        gas: d,
                        gasPrice: p,
                        maxFeePerGas: v,
                        maxPriorityFeePerGas: m,
                        nonce: b,
                        value: g,
                        ...e
                    })
                }, [c, h, i, t, s, n, e.chainId, e.mode, e.request, u, d, p, v, m, R, b, l, g]), D = y.useMemo(() => {
                    if ("prepared" === e.mode) {
                        if (!l) return;
                        return () => Q({
                            mode: "prepared",
                            request: e.request
                        })
                    }
                    return e => Q({
                        address: t,
                        args: s,
                        abi: i,
                        chainId: n,
                        functionName: u,
                        accessList: c,
                        account: h,
                        gas: d,
                        gasPrice: p,
                        maxFeePerGas: v,
                        maxPriorityFeePerGas: m,
                        nonce: b,
                        value: g,
                        ...e
                    })
                }, [c, h, i, t, s, n, e.mode, e.request, u, d, p, v, m, Q, b, l, g]);
                return {
                    data: C,
                    error: S,
                    isError: O,
                    isIdle: q,
                    isLoading: E,
                    isSuccess: w,
                    reset: F,
                    status: P,
                    variables: M,
                    write: I,
                    writeAsync: D
                }
            }

            function usePrepareContractWrite({
                address: e,
                abi: t,
                functionName: i,
                chainId: s,
                args: n,
                cacheTime: u,
                enabled: o = !0,
                scopeKey: l,
                staleTime: c,
                suspense: h,
                onError: d,
                onSettled: p,
                onSuccess: v,
                ...m
            } = {}) {
                let {
                    chain: b
                } = useNetwork(), {
                    data: g
                } = function({
                    chainId: e,
                    suspense: t,
                    onError: i,
                    onSettled: s,
                    onSuccess: n
                } = {}) {
                    let {
                        connector: u
                    } = useAccount(), o = useChainId({
                        chainId: e
                    }), l = useQuery(queryKey({
                        chainId: o
                    }), queryFn, {
                        cacheTime: 0,
                        enabled: !!u,
                        staleTime: 1 / 0,
                        suspense: t,
                        onError: i,
                        onSettled: s,
                        onSuccess: n
                    }), c = useQueryClient2();
                    return y.useEffect(() => {
                        let e = (0, f.Tb)({
                            chainId: o
                        }, e => {
                            e ? c.invalidateQueries(queryKey({
                                chainId: o
                            })) : c.removeQueries(queryKey({
                                chainId: o
                            }))
                        });
                        return e
                    }, [c, o]), l
                }({
                    chainId: s
                }), {
                    accessList: C,
                    account: S,
                    blockNumber: O,
                    blockTag: q,
                    gas: E,
                    gasPrice: w,
                    maxFeePerGas: R,
                    maxPriorityFeePerGas: Q,
                    nonce: F,
                    value: P
                } = (0, f._X)(m), M = useQuery(function({
                    accessList: e,
                    account: t,
                    activeChainId: i,
                    args: s,
                    address: n,
                    blockNumber: u,
                    blockTag: o,
                    chainId: l,
                    functionName: c,
                    gas: h,
                    gasPrice: d,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: y,
                    nonce: p,
                    scopeKey: v,
                    walletClientAddress: m,
                    value: b
                }) {
                    return [{
                        entity: "prepareContractTransaction",
                        accessList: e,
                        account: t,
                        activeChainId: i,
                        address: n,
                        args: s,
                        blockNumber: u,
                        blockTag: o,
                        chainId: l,
                        functionName: c,
                        gas: h,
                        gasPrice: d,
                        maxFeePerGas: f,
                        maxPriorityFeePerGas: y,
                        nonce: p,
                        scopeKey: v,
                        walletClientAddress: m,
                        value: b
                    }]
                }({
                    accessList: C,
                    account: S,
                    activeChainId: b ? .id,
                    address: e,
                    args: n,
                    blockNumber: O,
                    blockTag: q,
                    chainId: s,
                    functionName: i,
                    gas: E,
                    gasPrice: w,
                    maxFeePerGas: R,
                    maxPriorityFeePerGas: Q,
                    nonce: F,
                    scopeKey: l,
                    walletClientAddress: g ? .account.address,
                    value: P
                }), function({
                    abi: e,
                    walletClient: t
                }) {
                    return ({
                        queryKey: [{
                            accessList: i,
                            account: s,
                            args: n,
                            address: u,
                            blockNumber: o,
                            blockTag: l,
                            chainId: c,
                            functionName: h,
                            gas: d,
                            gasPrice: y,
                            maxFeePerGas: p,
                            maxPriorityFeePerGas: v,
                            nonce: m,
                            value: b
                        }]
                    }) => {
                        if (!e) throw Error("abi is required");
                        if (!u) throw Error("address is required");
                        if (!h) throw Error("functionName is required");
                        return (0, f.$q)({
                            abi: e,
                            accessList: i,
                            account: s,
                            args: n,
                            address: u,
                            blockNumber: o,
                            blockTag: l,
                            chainId: c,
                            functionName: h,
                            gas: d,
                            gasPrice: y,
                            maxFeePerGas: p,
                            maxPriorityFeePerGas: v,
                            nonce: m,
                            walletClient: t,
                            value: b
                        })
                    }
                }({
                    abi: t,
                    walletClient: g
                }), {
                    cacheTime: u,
                    enabled: !!(o && t && e && i && g),
                    staleTime: c,
                    suspense: h,
                    onError: d,
                    onSettled: p,
                    onSuccess: v
                });
                return Object.assign(M, {
                    config: {
                        chainId: s,
                        mode: "prepared",
                        request: void 0,
                        ...M.data
                    }
                })
            }

            function queryFn11({
                queryKey: [{
                    name: e,
                    chainId: t
                }]
            }) {
                if (!e) throw Error("name is required");
                return (0, f.w6)({
                    name: e,
                    chainId: t
                })
            }

            function useEnsAvatar({
                cacheTime: e,
                chainId: t,
                enabled: i = !0,
                name: s,
                scopeKey: n,
                staleTime: u = 864e5,
                suspense: o,
                onError: l,
                onSettled: c,
                onSuccess: h
            } = {}) {
                let d = useChainId({
                    chainId: t
                });
                return useQuery(function({
                    name: e,
                    chainId: t,
                    scopeKey: i
                }) {
                    return [{
                        entity: "ensAvatar",
                        name: e,
                        chainId: t,
                        scopeKey: i
                    }]
                }({
                    name: s,
                    chainId: d,
                    scopeKey: n
                }), queryFn11, {
                    cacheTime: e,
                    enabled: !!(i && s && d),
                    staleTime: u,
                    suspense: o,
                    onError: l,
                    onSettled: c,
                    onSuccess: h
                })
            }

            function queryFn12({
                queryKey: [{
                    address: e,
                    chainId: t
                }]
            }) {
                if (!e) throw Error("address is required");
                return (0, f.Lk)({
                    address: e,
                    chainId: t
                })
            }

            function useEnsName({
                address: e,
                cacheTime: t,
                chainId: i,
                enabled: s = !0,
                scopeKey: n,
                staleTime: u = 864e5,
                suspense: o,
                onError: l,
                onSettled: c,
                onSuccess: h
            } = {}) {
                let d = useChainId({
                    chainId: i
                });
                return useQuery(function({
                    address: e,
                    chainId: t,
                    scopeKey: i
                }) {
                    return [{
                        entity: "ensName",
                        address: e,
                        chainId: t,
                        scopeKey: i
                    }]
                }({
                    address: e,
                    chainId: d,
                    scopeKey: n
                }), queryFn12, {
                    cacheTime: t,
                    enabled: !!(s && e && d),
                    staleTime: u,
                    suspense: o,
                    onError: l,
                    onSettled: c,
                    onSuccess: h
                })
            }

            function useWaitForTransaction({
                chainId: e,
                confirmations: t,
                hash: i,
                timeout: s,
                cacheTime: n,
                enabled: u = !0,
                scopeKey: o,
                staleTime: l,
                suspense: c,
                onError: h,
                onReplaced: d,
                onSettled: y,
                onSuccess: p
            } = {}) {
                let v = useChainId({
                    chainId: e
                });
                return useQuery(function({
                    confirmations: e,
                    chainId: t,
                    hash: i,
                    scopeKey: s,
                    timeout: n
                }) {
                    return [{
                        entity: "waitForTransaction",
                        confirmations: e,
                        chainId: t,
                        hash: i,
                        scopeKey: s,
                        timeout: n
                    }]
                }({
                    chainId: v,
                    confirmations: t,
                    hash: i,
                    scopeKey: o,
                    timeout: s
                }), function({
                    onReplaced: e
                }) {
                    return ({
                        queryKey: [{
                            chainId: t,
                            confirmations: i,
                            hash: s,
                            timeout: n
                        }]
                    }) => {
                        if (!s) throw Error("hash is required");
                        return (0, f.Mn)({
                            chainId: t,
                            confirmations: i,
                            hash: s,
                            onReplaced: e,
                            timeout: n
                        })
                    }
                }({
                    onReplaced: d
                }), {
                    cacheTime: n,
                    enabled: !!(u && i),
                    staleTime: l,
                    suspense: c,
                    onError: h,
                    onSettled: y,
                    onSuccess: p
                })
            }
        }
    }
]);