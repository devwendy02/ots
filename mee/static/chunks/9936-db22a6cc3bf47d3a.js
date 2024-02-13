(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9936], {
        2390: function(e, t, n) {
            "use strict";
            var o = n(25809),
                a = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, l, i, s, u, d, c, f, p = !1;
                t || (t = {}), i = t.debug || !1;
                try {
                    if (u = o(), d = document.createRange(), c = document.getSelection(), (f = document.createElement("span")).textContent = e, f.ariaHidden = "true", f.style.all = "unset", f.style.position = "fixed", f.style.top = 0, f.style.clip = "rect(0, 0, 0, 0)", f.style.whiteSpace = "pre", f.style.webkitUserSelect = "text", f.style.MozUserSelect = "text", f.style.msUserSelect = "text", f.style.userSelect = "text", f.addEventListener("copy", function(n) {
                            if (n.stopPropagation(), t.format) {
                                if (n.preventDefault(), void 0 === n.clipboardData) {
                                    i && console.warn("unable to use e.clipboardData"), i && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var o = a[t.format] || a.default;
                                    window.clipboardData.setData(o, e)
                                } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e)
                            }
                            t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                        }), document.body.appendChild(f), d.selectNodeContents(f), c.addRange(d), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                    p = !0
                } catch (o) {
                    i && console.error("unable to copy using execCommand: ", o), i && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), p = !0
                    } catch (o) {
                        i && console.error("unable to copy using clipboardData: ", o), i && console.error("falling back to prompt"), n = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", l = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", s = n.replace(/#{\s*key\s*}/g, l), window.prompt(s, e)
                    }
                } finally {
                    c && ("function" == typeof c.removeRange ? c.removeRange(d) : c.removeAllRanges()), f && document.body.removeChild(f), u()
                }
                return p
            }
        },
        13080: function(e, t, n) {
            "use strict";
            let o = n(2655),
                a = n(34818);

            function* divider(e) {
                let t = 1e3;
                for (;;) {
                    let n = e / t;
                    if (n < 1) return;
                    yield n, t *= 1e3
                }
            }
            t.ZP = function(e, t) {
                var n, l;
                let i;
                let s = t ? { ...o.defaultOptions,
                    ...t
                } : o.defaultOptions;
                if (!Array.isArray(s.units) || !s.units.length) throw Error("Option `units` must be a non-empty array");
                try {
                    i = a.parseValue(e)
                } catch (t) {
                    return t instanceof Error && console.warn(`WARN: ${t.message} (millify)`), String(e)
                }
                let u = i < 0 ? "-" : "",
                    d = 0;
                for (let e of divider(i = Math.abs(i))) i = e, d += 1;
                let c = d >= s.units.length;
                if (c) return e.toString();
                let f = a.roundTo(i, s.precision);
                for (let e of divider(f)) f = e, d += 1;
                let p = null !== (n = s.units[d]) && void 0 !== n ? n : "",
                    m = s.lowercase ? p.toLowerCase() : p,
                    g = s.space ? " " : "",
                    v = f.toLocaleString(null !== (l = s.locales) && void 0 !== l ? l : a.getLocales(), {
                        minimumFractionDigits: a.getFractionDigits(f)
                    });
                return `${u}${v}${g}${m}`
            }
        },
        2655: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultOptions = void 0, t.defaultOptions = {
                lowercase: !1,
                precision: 1,
                space: !1,
                units: ["", "K", "M", "B", "T", "P", "E"]
            }
        },
        34818: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocales = t.getFractionDigits = t.roundTo = t.parseValue = void 0, t.parseValue = function(e) {
                let t = parseFloat(null == e ? void 0 : e.toString());
                if (isNaN(t)) throw Error("Input value is not a number");
                if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER) throw RangeError("Input value is outside of safe integer range");
                return t
            }, t.roundTo = function(e, t) {
                if (!Number.isFinite(e)) throw Error("Input value is not a finite number");
                if (!Number.isInteger(t) || t < 0) throw Error("Precision is not a positive integer");
                return Number.isInteger(e) ? e : parseFloat(e.toFixed(t))
            }, t.getFractionDigits = function(e) {
                var t;
                if (Number.isInteger(e)) return 0;
                let n = e.toString().split(".")[1];
                return null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0
            }, t.getLocales = function() {
                var e;
                return "undefined" == typeof navigator ? [] : Array.from(null !== (e = navigator.languages) && void 0 !== e ? e : [])
            }
        },
        25809: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, n = [], o = 0; o < e.rangeCount; o++) n.push(e.getRangeAt(o));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
                            e.addRange(t)
                        }), t && t.focus()
                    }
            }
        },
        67805: function(e, t, n) {
            "use strict";
            var o = n(2265);
            let a = o.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, a) {
                return o.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, n), e ? o.createElement("title", {
                    id: t
                }, e) : null, o.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                }))
            });
            t.Z = a
        },
        36108: function(e, t, n) {
            "use strict";
            var o = n(2265);
            let a = o.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, a) {
                return o.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, n), e ? o.createElement("title", {
                    id: t
                }, e) : null, o.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                }))
            });
            t.Z = a
        },
        67057: function(e, t, n) {
            "use strict";
            var o = n(2265);
            let a = o.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, a) {
                return o.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, n), e ? o.createElement("title", {
                    id: t
                }, e) : null, o.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                }))
            });
            t.Z = a
        },
        78197: function(e, t, n) {
            "use strict";
            var o = n(2265);
            let a = o.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, a) {
                return o.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, n), e ? o.createElement("title", {
                    id: t
                }, e) : null, o.createElement("path", {
                    fillRule: "evenodd",
                    d: "M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = a
        },
        79425: function(e, t, n) {
            "use strict";
            var o = n(2265);
            let a = o.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, a) {
                return o.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, n), e ? o.createElement("title", {
                    id: t
                }, e) : null, o.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = a
        },
        88597: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return p
                }
            });
            var o = n(2265),
                a = n(34480),
                l = (0, n(68037).tv)({
                    slots: {
                        wrapper: "relative shadow-black/5",
                        zoomedWrapper: "relative overflow-hidden rounded-inherit",
                        img: "relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",
                        blurredImg: ["absolute", "z-0", "inset-0", "w-full", "h-full", "object-cover", "filter", "blur-lg", "scale-105", "saturate-150", "opacity-30", "translate-y-1"]
                    },
                    variants: {
                        radius: {
                            none: {},
                            sm: {},
                            md: {},
                            lg: {},
                            full: {}
                        },
                        shadow: {
                            none: {
                                wrapper: "shadow-none",
                                img: "shadow-none"
                            },
                            sm: {
                                wrapper: "shadow-small",
                                img: "shadow-small"
                            },
                            md: {
                                wrapper: "shadow-medium",
                                img: "shadow-medium"
                            },
                            lg: {
                                wrapper: "shadow-large",
                                img: "shadow-large"
                            }
                        },
                        isZoomed: {
                            true: {
                                img: ["object-cover", "transform", "hover:scale-125"]
                            }
                        },
                        showSkeleton: {
                            true: {
                                wrapper: ["group", "relative", "overflow-hidden", "bg-content3 dark:bg-content2", "before:opacity-100", "before:absolute", "before:inset-0", "before:-translate-x-full", "before:animate-[shimmer_2s_infinite]", "before:border-t", "before:border-content4/30", "before:bg-gradient-to-r", "before:from-transparent", "before:via-content4", "dark:before:via-default-700/10", "before:to-transparent", "after:opacity-100", "after:absolute", "after:inset-0", "after:-z-10", "after:bg-content3", "dark:after:bg-content2"],
                                img: "opacity-0"
                            }
                        },
                        disableAnimation: {
                            true: {
                                img: "transition-none"
                            },
                            false: {
                                img: "transition-transform-opacity motion-reduce:transition-none !duration-300"
                            }
                        }
                    },
                    defaultVariants: {
                        radius: "lg",
                        shadow: "none",
                        isZoomed: !1,
                        isBlurred: !1,
                        showSkeleton: !1,
                        disableAnimation: !1
                    },
                    compoundSlots: [{
                        slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
                        radius: "none",
                        class: "rounded-none"
                    }, {
                        slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
                        radius: "full",
                        class: "rounded-full"
                    }, {
                        slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
                        radius: "sm",
                        class: "rounded-small"
                    }, {
                        slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
                        radius: "md",
                        class: "rounded-md"
                    }, {
                        slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
                        radius: "lg",
                        class: "rounded-large"
                    }]
                }),
                i = n(25312),
                s = n(59762),
                u = n(48794),
                d = (null == globalThis ? void 0 : globalThis.document) ? o.useLayoutEffect : o.useEffect,
                c = n(57437),
                f = (0, a.Gp)((e, t) => {
                    let {
                        Component: n,
                        domRef: f,
                        slots: p,
                        classNames: m,
                        isBlurred: g,
                        isZoomed: v,
                        fallbackSrc: b,
                        removeWrapper: w,
                        disableSkeleton: h,
                        getImgProps: y,
                        getWrapperProps: E,
                        getBlurredImgProps: x
                    } = function(e) {
                        let [t, n] = (0, a.oe)(e, l.variantKeys), {
                            ref: c,
                            as: f,
                            src: p,
                            className: m,
                            classNames: g,
                            loading: v,
                            isBlurred: b,
                            fallbackSrc: w,
                            isLoading: h,
                            disableSkeleton: y = !!w,
                            removeWrapper: E = !1,
                            onError: x,
                            onLoad: k,
                            srcSet: I,
                            sizes: C,
                            crossOrigin: N,
                            ...R
                        } = t, D = function(e = {}) {
                            let {
                                loading: t,
                                src: n,
                                srcSet: a,
                                onLoad: l,
                                onError: i,
                                crossOrigin: s,
                                sizes: u,
                                ignoreFallback: c
                            } = e, [f, p] = (0, o.useState)("pending");
                            (0, o.useEffect)(() => {
                                p(n ? "loading" : "pending")
                            }, [n]);
                            let m = (0, o.useRef)(),
                                g = (0, o.useCallback)(() => {
                                    if (!n) return;
                                    flush();
                                    let e = new Image;
                                    e.src = n, s && (e.crossOrigin = s), a && (e.srcset = a), u && (e.sizes = u), t && (e.loading = t), e.onload = e => {
                                        flush(), p("loaded"), null == l || l(e)
                                    }, e.onerror = e => {
                                        flush(), p("failed"), null == i || i(e)
                                    }, m.current = e
                                }, [n, s, a, u, l, i, t]),
                                flush = () => {
                                    m.current && (m.current.onload = null, m.current.onerror = null, m.current = null)
                                };
                            return d(() => {
                                if (!c) return "loading" === f && g(), () => {
                                    flush()
                                }
                            }, [f, g, c]), c ? "loaded" : f
                        }({
                            src: p,
                            loading: v,
                            onError: x,
                            onLoad: k,
                            ignoreFallback: !1,
                            srcSet: I,
                            sizes: C,
                            crossOrigin: N
                        }), j = "loaded" === D && !h, S = "loading" === D || h, A = e.isZoomed, M = (0, i.gy)(c), {
                            w: z
                        } = (0, o.useMemo)(() => ({
                            w: t.width ? "number" == typeof t.width ? `${t.width}px` : t.width : "fit-content"
                        }), [null == t ? void 0 : t.width]), O = (!p || !j) && !!w, $ = S && !y, T = (0, o.useMemo)(() => l({ ...n,
                            showSkeleton: $
                        }), [...Object.values(n), $]), W = (0, s.W)(m, null == g ? void 0 : g.img), L = (0, o.useCallback)(() => {
                            let e = O ? {
                                backgroundImage: `url(${w})`
                            } : {};
                            return {
                                className: T.wrapper({
                                    class: null == g ? void 0 : g.wrapper
                                }),
                                style: { ...e,
                                    maxWidth: z
                                }
                            }
                        }, [T, O, w, null == g ? void 0 : g.wrapper]), B = (0, o.useCallback)(() => ({
                            src: p,
                            "aria-hidden": (0, u.PB)(!0),
                            className: T.blurredImg({
                                class: null == g ? void 0 : g.blurredImg
                            })
                        }), [T, p, null == g ? void 0 : g.blurredImg]);
                        return {
                            Component: f || "img",
                            domRef: M,
                            slots: T,
                            classNames: g,
                            isBlurred: b,
                            disableSkeleton: y,
                            fallbackSrc: w,
                            removeWrapper: E,
                            isZoomed: A,
                            isLoading: S,
                            getImgProps: (e = {}) => {
                                let t = (0, s.W)(W, null == e ? void 0 : e.className);
                                return {
                                    src: p,
                                    ref: M,
                                    "data-loaded": (0, u.PB)(j),
                                    className: T.img({
                                        class: t
                                    }),
                                    loading: v,
                                    srcSet: I,
                                    sizes: C,
                                    crossOrigin: N,
                                    ...R
                                }
                            },
                            getWrapperProps: L,
                            getBlurredImgProps: B
                        }
                    }({ ...e,
                        ref: t
                    }), k = (0, c.jsx)(n, {
                        ref: f,
                        ...y()
                    });
                    if (w) return k;
                    let I = (0, c.jsx)("div", {
                        className: p.zoomedWrapper({
                            class: null == m ? void 0 : m.zoomedWrapper
                        }),
                        children: k
                    });
                    return g ? (0, c.jsxs)("div", { ...E(),
                        children: [v ? I : k, (0, o.cloneElement)(k, x())]
                    }) : v || !h || b ? (0, c.jsxs)("div", { ...E(),
                        children: [" ", v ? I : k]
                    }) : k
                });
            f.displayName = "NextUI.Image";
            var p = f
        },
        25312: function(e, t, n) {
            "use strict";
            n.d(t, {
                gy: function() {
                    return useDOMRef
                }
            });
            var o = n(2265);

            function useDOMRef(e) {
                let t = (0, o.useRef)(null);
                return (0, o.useImperativeHandle)(e, () => t.current), t
            }
            "undefined" != typeof window && window.document && window.document.createElement
        },
        39213: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return cva
                }
            });
            let falsyToString = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                cx = function() {
                    for (var e, t, n = 0, o = ""; n < arguments.length;)(e = arguments[n++]) && (t = function r(e) {
                        var t, n, o = "";
                        if ("string" == typeof e || "number" == typeof e) o += e;
                        else if ("object" == typeof e) {
                            if (Array.isArray(e))
                                for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n);
                            else
                                for (t in e) e[t] && (o && (o += " "), o += t)
                        }
                        return o
                    }(e)) && (o && (o += " "), o += t);
                    return o
                },
                cva = (e, t) => n => {
                    var o;
                    if ((null == t ? void 0 : t.variants) == null) return cx(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: a,
                        defaultVariants: l
                    } = t, i = Object.keys(a).map(e => {
                        let t = null == n ? void 0 : n[e],
                            o = null == l ? void 0 : l[e];
                        if (null === t) return null;
                        let i = falsyToString(t) || falsyToString(o);
                        return a[e][i]
                    }), s = n && Object.entries(n).reduce((e, t) => {
                        let [n, o] = t;
                        return void 0 === o || (e[n] = o), e
                    }, {}), u = null == t ? void 0 : null === (o = t.compoundVariants) || void 0 === o ? void 0 : o.reduce((e, t) => {
                        let {
                            class: n,
                            className: o,
                            ...a
                        } = t;
                        return Object.entries(a).every(e => {
                            let [t, n] = e;
                            return Array.isArray(n) ? n.includes({ ...l,
                                ...s
                            }[t]) : ({ ...l,
                                ...s
                            })[t] === n
                        }) ? [...e, n, o] : e
                    }, []);
                    return cx(e, i, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        },
        62936: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return o
                }
            });
            let o = "0x0000000000000000000000000000000000000000"
        },
        43977: function(e, t, n) {
            "use strict";

            function parseUnits(e, t) {
                let [n, o = "0"] = e.split("."), a = n.startsWith("-");
                if (a && (n = n.slice(1)), o = o.replace(/(0+)$/, ""), 0 === t) 1 === Math.round(Number(`.${o}`)) && (n = `${BigInt(n)+1n}`), o = "";
                else if (o.length > t) {
                    let [e, a, l] = [o.slice(0, t - 1), o.slice(t - 1, t), o.slice(t)], i = Math.round(Number(`${a}.${l}`));
                    (o = i > 9 ? `${BigInt(e)+BigInt(1)}0`.padStart(e.length + 1, "0") : `${e}${i}`).length > t && (o = o.slice(1), n = `${BigInt(n)+1n}`), o = o.slice(0, t)
                } else o = o.padEnd(t, "0");
                return BigInt(`${a?"-":""}${n}${o}`)
            }
            n.d(t, {
                v: function() {
                    return parseUnits
                }
            })
        }
    }
]);