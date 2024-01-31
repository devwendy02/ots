(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3197], {
        90868: function(e, t) {
            var n, r;
            void 0 !== (r = "function" == typeof(n = function() {
                var devnull = function() {},
                    e = {},
                    t = {},
                    n = {};

                function publish(e, r) {
                    if (e) {
                        var i = n[e];
                        if (t[e] = r, i)
                            for (; i.length;) i[0](e, r), i.splice(0, 1)
                    }
                }

                function executeCallbacks(e, t) {
                    e.call && (e = {
                        success: e
                    }), t.length ? (e.error || devnull)(t) : (e.success || devnull)(e)
                }

                function loadjs(t, n, r) {
                    var i, a;
                    if (n && n.trim && (i = n), a = (i ? r : n) || {}, i) {
                        if (i in e) throw "LoadJS";
                        e[i] = !0
                    }

                    function loadFn(e, n) {
                        ! function(e, t, n) {
                            var r, i, a = (e = e.push ? e : [e]).length,
                                o = a,
                                l = [];
                            for (i = 0, r = function(e, n, r) {
                                    if ("e" == n && l.push(e), "b" == n) {
                                        if (!r) return;
                                        l.push(e)
                                    }--a || t(l)
                                }; i < o; i++) ! function loadFile(e, t, n, r) {
                                var i, a, o = document,
                                    l = n.async,
                                    s = (n.numRetries || 0) + 1,
                                    u = n.before || devnull,
                                    c = e.replace(/[\?|#].*$/, ""),
                                    d = e.replace(/^(css|img)!/, "");
                                r = r || 0, /(^css!|\.css$)/.test(c) ? ((a = o.createElement("link")).rel = "stylesheet", a.href = d, (i = "hideFocus" in a) && a.relList && (i = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(c) ? (a = o.createElement("img")).src = d : ((a = o.createElement("script")).src = e, a.async = void 0 === l || l), a.onload = a.onerror = a.onbeforeload = function(o) {
                                    var l = o.type[0];
                                    if (i) try {
                                        a.sheet.cssText.length || (l = "e")
                                    } catch (e) {
                                        18 != e.code && (l = "e")
                                    }
                                    if ("e" == l) {
                                        if ((r += 1) < s) return loadFile(e, t, n, r)
                                    } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
                                    t(e, l, o.defaultPrevented)
                                }, !1 !== u(e, a) && o.head.appendChild(a)
                            }(e[i], r, n)
                        }(t, function(t) {
                            executeCallbacks(a, t), e && executeCallbacks({
                                success: e,
                                error: n
                            }, t), publish(i, t)
                        }, a)
                    }
                    if (a.returnPromise) return new Promise(loadFn);
                    loadFn()
                }
                return loadjs.ready = function(e, r) {
                    return function(e, r) {
                        e = e.push ? e : [e];
                        var i, a, o, l = [],
                            s = e.length,
                            u = s;
                        for (i = function(e, t) {
                                t.length && l.push(e), --u || r(l)
                            }; s--;) {
                            if (o = t[a = e[s]]) {
                                i(a, o);
                                continue
                            }(n[a] = n[a] || []).push(i)
                        }
                    }(e, function(e) {
                        executeCallbacks(r, e)
                    }), loadjs
                }, loadjs.done = function(e) {
                    publish(e, [])
                }, loadjs.reset = function() {
                    e = {}, t = {}, n = {}
                }, loadjs.isDefined = function(t) {
                    return t in e
                }, loadjs
            }) ? n.apply(t, []) : n) && (e.exports = r)
        },
        39297: function(e, t, n) {
            "use strict";
            n.d(t, {
                mB: function() {
                    return Share
                },
                bQ: function() {
                    return loadTwitterLibrary
                }
            });
            var r = n(2265),
                i = n(90868),
                a = n.n(i),
                o = "twttr",
                l = !!("undefined" != typeof window && window.document && window.document.createElement);

            function loadTwitterLibrary() {
                a().isDefined(o) || a()("https://platform.twitter.com/widgets.js", o)
            }

            function is(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }

            function useShallowCompareMemoize(e) {
                var t = (0, r.useRef)();
                return ! function(e, t) {
                    if (is(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (var i = 0; i < n.length; i++)
                        if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !is(e[n[i]], t[n[i]])) return !1;
                    return !0
                }(e, t.current) && (t.current = e), t.current
            }

            function cloneShallow(e) {
                return "object" == typeof e ? Object.assign({}, e) : e
            }
            var s = "twdiv",
                Share = function(e) {
                    var t = e.url,
                        n = e.options,
                        i = e.onLoad,
                        u = e.renderError,
                        c = function(e, t, n, i) {
                            var u = (0, r.useState)(null),
                                c = u[0],
                                d = u[1],
                                f = (0, r.useRef)(null);
                            if (!l) return {
                                ref: f,
                                error: c
                            };
                            var g = [e, useShallowCompareMemoize(t), useShallowCompareMemoize(n)];
                            return (0, r.useEffect)(function() {
                                d(null);
                                var r = !1;
                                if (f.current) {
                                    if ((l = f.current) && l.querySelectorAll("*").forEach(function(e) {
                                            e.hasAttribute(s) && e.remove()
                                        }), !f || !f.current) return;
                                    var l, u = document.createElement("div");
                                    u.setAttribute(s, "yes"), f.current.appendChild(u), new Promise(function(e, t) {
                                        var rejectWithError = function() {
                                            return t(Error("Could not load remote twitter widgets js"))
                                        };
                                        loadTwitterLibrary(), a().ready(o, {
                                            success: function() {
                                                var t = window[o];
                                                t && t.widgets || rejectWithError(), e(t.widgets)
                                            },
                                            error: rejectWithError
                                        })
                                    }).then(function(r) {
                                        return r[e](cloneShallow(t), u, cloneShallow(n))
                                    }).then(function(e) {
                                        if (!e && !r) throw Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");
                                        if (f && f.current) {
                                            if (r) {
                                                u && u.remove();
                                                return
                                            }
                                            i && i()
                                        }
                                    }).catch(function(e) {
                                        console.error(e), d(e)
                                    })
                                }
                                return function() {
                                    r = !0
                                }
                            }, g), {
                                ref: f,
                                error: c
                            }
                        }("createShareButton", t, n, i),
                        d = c.ref,
                        f = c.error;
                    return r.createElement("div", {
                        ref: d
                    }, f && u && u(f))
                }
        },
        28093: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                }))
            });
            t.Z = i
        },
        96602: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                }))
            });
            t.Z = i
        },
        49186: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }))
            });
            t.Z = i
        },
        25350: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                }))
            });
            t.Z = i
        },
        77150: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                }))
            });
            t.Z = i
        },
        39418: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                }))
            });
            t.Z = i
        },
        51524: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    d: "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"
                }))
            });
            t.Z = i
        },
        35785: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = i
        },
        99527: function(e, t, n) {
            "use strict";
            var r = n(2265);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    fillRule: "evenodd",
                    d: "M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = i
        },
        42333: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return F
                }
            });
            var r, i = n(2265),
                a = n(26272);
            let noop = () => {},
                o = noop(),
                l = Object,
                isUndefined = e => e === o,
                isFunction = e => "function" == typeof e,
                mergeObjects = (e, t) => ({ ...e,
                    ...t
                }),
                isPromiseLike = e => isFunction(e.then),
                s = new WeakMap,
                u = 0,
                stableHash = e => {
                    let t, n;
                    let r = typeof e,
                        i = e && e.constructor,
                        a = i == Date;
                    if (l(e) !== e || a || i == RegExp) t = a ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = s.get(e)) return t;
                        if (t = ++u + "~", s.set(e, t), i == Array) {
                            for (n = 0, t = "@"; n < e.length; n++) t += stableHash(e[n]) + ",";
                            s.set(e, t)
                        }
                        if (i == l) {
                            t = "#";
                            let r = l.keys(e).sort();
                            for (; !isUndefined(n = r.pop());) isUndefined(e[n]) || (t += n + ":" + stableHash(e[n]) + ",");
                            s.set(e, t)
                        }
                    }
                    return t
                },
                c = new WeakMap,
                d = {},
                f = {},
                g = "undefined",
                h = typeof window != g,
                m = typeof document != g,
                hasRequestAnimationFrame = () => h && typeof window.requestAnimationFrame != g,
                createCacheHelper = (e, t) => {
                    let n = c.get(e);
                    return [() => !isUndefined(t) && e.get(t) || d, r => {
                        if (!isUndefined(t)) {
                            let i = e.get(t);
                            t in f || (f[t] = i), n[5](t, mergeObjects(i, r), i || d)
                        }
                    }, n[6], () => !isUndefined(t) && t in f ? f[t] : !isUndefined(t) && e.get(t) || d]
                },
                v = !0,
                [w, p] = h && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [noop, noop],
                b = {
                    initFocus: e => (m && document.addEventListener("visibilitychange", e), w("focus", e), () => {
                        m && document.removeEventListener("visibilitychange", e), p("focus", e)
                    }),
                    initReconnect: e => {
                        let onOnline = () => {
                                v = !0, e()
                            },
                            onOffline = () => {
                                v = !1
                            };
                        return w("online", onOnline), w("offline", onOffline), () => {
                            p("online", onOnline), p("offline", onOffline)
                        }
                    }
                },
                E = !i.useId,
                y = !h || "Deno" in window,
                rAF = e => hasRequestAnimationFrame() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                C = y ? i.useEffect : i.useLayoutEffect,
                k = "undefined" != typeof navigator && navigator.connection,
                R = !y && k && (["slow-2g", "2g"].includes(k.effectiveType) || k.saveData),
                dist_serialize = e => {
                    if (isFunction(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? stableHash(e) : "", t]
                },
                O = 0,
                getTimestamp = () => ++O;
            var S = {
                ERROR_REVALIDATE_EVENT: 3,
                FOCUS_EVENT: 0,
                MUTATE_EVENT: 2,
                RECONNECT_EVENT: 1
            };
            async function internalMutate(...e) {
                let [t, n, r, i] = e, a = mergeObjects({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof i ? {
                    revalidate: i
                } : i || {}), l = a.populateCache, s = a.rollbackOnError, u = a.optimisticData, d = !1 !== a.revalidate, rollbackOnError = e => "function" == typeof s ? s(e) : !1 !== s, f = a.throwOnError;
                if (isFunction(n)) {
                    let e = [],
                        r = t.keys();
                    for (let i of r) !/^\$(inf|sub)\$/.test(i) && n(t.get(i)._k) && e.push(i);
                    return Promise.all(e.map(mutateByKey))
                }
                return mutateByKey(n);
                async function mutateByKey(n) {
                    let i;
                    let [a] = dist_serialize(n);
                    if (!a) return;
                    let [s, g] = createCacheHelper(t, a), [h, m, v, w] = c.get(t), startRevalidate = () => {
                        let e = h[a];
                        return d && (delete v[a], delete w[a], e && e[0]) ? e[0](2).then(() => s().data) : s().data
                    };
                    if (e.length < 3) return startRevalidate();
                    let p = r,
                        b = getTimestamp();
                    m[a] = [b, 0];
                    let E = !isUndefined(u),
                        y = s(),
                        C = y.data,
                        k = y._c,
                        R = isUndefined(k) ? C : k;
                    if (E && g({
                            data: u = isFunction(u) ? u(R, C) : u,
                            _c: R
                        }), isFunction(p)) try {
                        p = p(R)
                    } catch (e) {
                        i = e
                    }
                    if (p && isPromiseLike(p)) {
                        if (p = await p.catch(e => {
                                i = e
                            }), b !== m[a][0]) {
                            if (i) throw i;
                            return p
                        }
                        i && E && rollbackOnError(i) && (l = !0, g({
                            data: R,
                            _c: o
                        }))
                    }
                    if (l && !i) {
                        if (isFunction(l)) {
                            let e = l(p, R);
                            g({
                                data: e,
                                error: o,
                                _c: o
                            })
                        } else g({
                            data: p,
                            error: o,
                            _c: o
                        })
                    }
                    if (m[a][1] = getTimestamp(), Promise.resolve(startRevalidate()).then(() => {
                            g({
                                _c: o
                            })
                        }), i) {
                        if (f) throw i;
                        return
                    }
                    return p
                }
            }
            let revalidateAllKeys = (e, t) => {
                    for (let n in e) e[n][0] && e[n][0](t)
                },
                initCache = (e, t) => {
                    if (!c.has(e)) {
                        let n = mergeObjects(b, t),
                            r = {},
                            i = internalMutate.bind(o, e),
                            a = noop,
                            l = {},
                            subscribe = (e, t) => {
                                let n = l[e] || [];
                                return l[e] = n, n.push(t), () => n.splice(n.indexOf(t), 1)
                            },
                            setter = (t, n, r) => {
                                e.set(t, n);
                                let i = l[t];
                                if (i)
                                    for (let e of i) e(n, r)
                            },
                            initProvider = () => {
                                if (!c.has(e) && (c.set(e, [r, {}, {}, {}, i, setter, subscribe]), !y)) {
                                    let t = n.initFocus(setTimeout.bind(o, revalidateAllKeys.bind(o, r, 0))),
                                        i = n.initReconnect(setTimeout.bind(o, revalidateAllKeys.bind(o, r, 1)));
                                    a = () => {
                                        t && t(), i && i(), c.delete(e)
                                    }
                                }
                            };
                        return initProvider(), [e, i, initProvider, a]
                    }
                    return [e, c.get(e)[4]]
                },
                [j, L] = initCache(new Map),
                T = mergeObjects({
                    onLoadingSlow: noop,
                    onSuccess: noop,
                    onError: noop,
                    onErrorRetry: (e, t, n, r, i) => {
                        let a = n.errorRetryCount,
                            o = i.retryCount,
                            l = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
                        (isUndefined(a) || !(o > a)) && setTimeout(r, l, i)
                    },
                    onDiscarded: noop,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: R ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: R ? 5e3 : 3e3,
                    compare: (e, t) => stableHash(e) == stableHash(t),
                    isPaused: () => !1,
                    cache: j,
                    mutate: L,
                    fallback: {}
                }, {
                    isOnline: () => v,
                    isVisible: () => {
                        let e = m && document.visibilityState;
                        return isUndefined(e) || "hidden" !== e
                    }
                }),
                mergeConfigs = (e, t) => {
                    let n = mergeObjects(e, t);
                    if (t) {
                        let {
                            use: r,
                            fallback: i
                        } = e, {
                            use: a,
                            fallback: o
                        } = t;
                        r && a && (n.use = r.concat(a)), i && o && (n.fallback = mergeObjects(i, o))
                    }
                    return n
                },
                _ = (0, i.createContext)({}),
                U = h && window.__SWR_DEVTOOLS_USE__,
                x = U ? window.__SWR_DEVTOOLS_USE__ : [],
                normalize = e => isFunction(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                useSWRConfig = () => mergeObjects(T, (0, i.useContext)(_)),
                A = x.concat(e => (t, n, r) => {
                    let i = n && ((...e) => {
                        let [r] = dist_serialize(t), [, , , i] = c.get(j);
                        if (r.startsWith("$inf$")) return n(...e);
                        let a = i[r];
                        return isUndefined(a) ? n(...e) : (delete i[r], a)
                    });
                    return e(t, i, r)
                }),
                subscribeCallback = (e, t, n) => {
                    let r = t[e] || (t[e] = []);
                    return r.push(n), () => {
                        let e = r.indexOf(n);
                        e >= 0 && (r[e] = r[r.length - 1], r.pop())
                    }
                };
            U && (window.__SWR_DEVTOOLS_REACT__ = i);
            let V = i.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    if ("rejected" === e.status) throw e.reason;
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
                }),
                M = {
                    dedupe: !0
                };
            l.defineProperty(e => {
                let {
                    value: t
                } = e, n = (0, i.useContext)(_), r = isFunction(t), a = (0, i.useMemo)(() => r ? t(n) : t, [r, n, t]), l = (0, i.useMemo)(() => r ? a : mergeConfigs(n, a), [r, n, a]), s = a && a.provider, u = (0, i.useRef)(o);
                s && !u.current && (u.current = initCache(s(l.cache || j), a));
                let c = u.current;
                return c && (l.cache = c[0], l.mutate = c[1]), C(() => {
                    if (c) return c[2] && c[2](), c[3]
                }, []), (0, i.createElement)(_.Provider, mergeObjects(e, {
                    value: l
                }))
            }, "defaultValue", {
                value: T
            });
            let F = (r = (e, t, n) => {
                let {
                    cache: r,
                    compare: l,
                    suspense: s,
                    fallbackData: u,
                    revalidateOnMount: d,
                    revalidateIfStale: f,
                    refreshInterval: g,
                    refreshWhenHidden: h,
                    refreshWhenOffline: m,
                    keepPreviousData: v
                } = n, [w, p, b, k] = c.get(r), [R, O] = dist_serialize(e), j = (0, i.useRef)(!1), L = (0, i.useRef)(!1), T = (0, i.useRef)(R), _ = (0, i.useRef)(t), U = (0, i.useRef)(n), getConfig = () => U.current, isActive = () => getConfig().isVisible() && getConfig().isOnline(), [x, A, F, z] = createCacheHelper(r, R), P = (0, i.useRef)({}).current, N = isUndefined(u) ? n.fallback[R] : u, isEqual = (e, t) => {
                    for (let n in P)
                        if ("data" === n) {
                            if (!l(e[n], t[n]) && (!isUndefined(e[n]) || !l(K, t[n]))) return !1
                        } else if (t[n] !== e[n]) return !1;
                    return !0
                }, D = (0, i.useMemo)(() => {
                    let e = !!R && !!t && (isUndefined(d) ? !getConfig().isPaused() && !s && (!!isUndefined(f) || f) : d),
                        getSelectedCache = t => {
                            let n = mergeObjects(t);
                            return (delete n._k, e) ? {
                                isValidating: !0,
                                isLoading: !0,
                                ...n
                            } : n
                        },
                        n = x(),
                        r = z(),
                        i = getSelectedCache(n),
                        a = n === r ? i : getSelectedCache(r),
                        o = i;
                    return [() => {
                        let e = getSelectedCache(x()),
                            t = isEqual(e, o);
                        return t ? (o.data = e.data, o.isLoading = e.isLoading, o.isValidating = e.isValidating, o.error = e.error, o) : (o = e, e)
                    }, () => a]
                }, [r, R]), W = (0, a.useSyncExternalStore)((0, i.useCallback)(e => F(R, (t, n) => {
                    isEqual(n, t) || e()
                }), [r, R]), D[0], D[1]), B = !j.current, I = w[R] && w[R].length > 0, q = W.data, H = isUndefined(q) ? N : q, Z = W.error, $ = (0, i.useRef)(H), K = v ? isUndefined(q) ? $.current : q : H, J = (!I || !!isUndefined(Z)) && (B && !isUndefined(d) ? d : !getConfig().isPaused() && (s ? !isUndefined(H) && f : isUndefined(H) || f)), Q = !!(R && t && B && J), G = isUndefined(W.isValidating) ? Q : W.isValidating, X = isUndefined(W.isLoading) ? Q : W.isLoading, Y = (0, i.useCallback)(async e => {
                    let t, r;
                    let i = _.current;
                    if (!R || !i || L.current || getConfig().isPaused()) return !1;
                    let a = !0,
                        s = e || {},
                        u = !b[R] || !s.dedupe,
                        callbackSafeguard = () => E ? !L.current && R === T.current && j.current : R === T.current,
                        c = {
                            isValidating: !1,
                            isLoading: !1
                        },
                        finishRequestAndUpdateState = () => {
                            A(c)
                        },
                        cleanupState = () => {
                            let e = b[R];
                            e && e[1] === r && delete b[R]
                        },
                        d = {
                            isValidating: !0
                        };
                    isUndefined(x().data) && (d.isLoading = !0);
                    try {
                        if (u && (A(d), n.loadingTimeout && isUndefined(x().data) && setTimeout(() => {
                                a && callbackSafeguard() && getConfig().onLoadingSlow(R, n)
                            }, n.loadingTimeout), b[R] = [i(O), getTimestamp()]), [t, r] = b[R], t = await t, u && setTimeout(cleanupState, n.dedupingInterval), !b[R] || b[R][1] !== r) return u && callbackSafeguard() && getConfig().onDiscarded(R), !1;
                        c.error = o;
                        let e = p[R];
                        if (!isUndefined(e) && (r <= e[0] || r <= e[1] || 0 === e[1])) return finishRequestAndUpdateState(), u && callbackSafeguard() && getConfig().onDiscarded(R), !1;
                        let s = x().data;
                        c.data = l(s, t) ? s : t, u && callbackSafeguard() && getConfig().onSuccess(t, R, n)
                    } catch (n) {
                        cleanupState();
                        let e = getConfig(),
                            {
                                shouldRetryOnError: t
                            } = e;
                        !e.isPaused() && (c.error = n, u && callbackSafeguard() && (e.onError(n, R, e), (!0 === t || isFunction(t) && t(n)) && isActive() && e.onErrorRetry(n, R, e, e => {
                            let t = w[R];
                            t && t[0] && t[0](S.ERROR_REVALIDATE_EVENT, e)
                        }, {
                            retryCount: (s.retryCount || 0) + 1,
                            dedupe: !0
                        })))
                    }
                    return a = !1, finishRequestAndUpdateState(), !0
                }, [R, r]), ee = (0, i.useCallback)((...e) => internalMutate(r, T.current, ...e), []);
                if (C(() => {
                        _.current = t, U.current = n, isUndefined(q) || ($.current = q)
                    }), C(() => {
                        if (!R) return;
                        let e = Y.bind(o, M),
                            t = 0,
                            n = subscribeCallback(R, w, (n, r = {}) => {
                                if (n == S.FOCUS_EVENT) {
                                    let n = Date.now();
                                    getConfig().revalidateOnFocus && n > t && isActive() && (t = n + getConfig().focusThrottleInterval, e())
                                } else if (n == S.RECONNECT_EVENT) getConfig().revalidateOnReconnect && isActive() && e();
                                else if (n == S.MUTATE_EVENT) return Y();
                                else if (n == S.ERROR_REVALIDATE_EVENT) return Y(r)
                            });
                        return L.current = !1, T.current = R, j.current = !0, A({
                            _k: O
                        }), J && (isUndefined(H) || y ? e() : rAF(e)), () => {
                            L.current = !0, n()
                        }
                    }, [R]), C(() => {
                        let e;

                        function next() {
                            let t = isFunction(g) ? g(x().data) : g;
                            t && -1 !== e && (e = setTimeout(execute, t))
                        }

                        function execute() {
                            !x().error && (h || getConfig().isVisible()) && (m || getConfig().isOnline()) ? Y(M).then(next) : next()
                        }
                        return next(), () => {
                            e && (clearTimeout(e), e = -1)
                        }
                    }, [g, h, m, R]), (0, i.useDebugValue)(K), s && isUndefined(H) && R) {
                    if (!E && y) throw Error("Fallback data is required when using suspense in SSR.");
                    _.current = t, U.current = n, L.current = !1;
                    let e = k[R];
                    if (!isUndefined(e)) {
                        let t = ee(e);
                        V(t)
                    }
                    if (isUndefined(Z)) {
                        let e = Y(M);
                        isUndefined(K) || (e.status = "fulfilled", e.value = !0), V(e)
                    } else throw Z
                }
                return {
                    mutate: ee,
                    get data() {
                        return P.data = !0, K
                    },
                    get error() {
                        return P.error = !0, Z
                    },
                    get isValidating() {
                        return P.isValidating = !0, G
                    },
                    get isLoading() {
                        return P.isLoading = !0, X
                    }
                }
            }, function(...e) {
                let t = useSWRConfig(),
                    [n, i, a] = normalize(e),
                    o = mergeConfigs(t, a),
                    l = r,
                    {
                        use: s
                    } = o,
                    u = (s || []).concat(A);
                for (let e = u.length; e--;) l = u[e](l);
                return l(n, i || o.fetcher || null, o)
            })
        },
        52078: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return parseEther
                }
            });
            var r = n(36238),
                i = n(43977);

            function parseEther(e, t = "wei") {
                return (0, i.v)(e, r.ez[t])
            }
        }
    }
]);