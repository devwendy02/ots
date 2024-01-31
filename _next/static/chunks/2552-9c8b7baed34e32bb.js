(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2552], {
        9875: function(t) {
            ! function() {
                "use strict";
                var e = {
                        815: function(t) {
                            t.exports = function(t, r, n, o) {
                                r = r || "&", n = n || "=";
                                var a = {};
                                if ("string" != typeof t || 0 === t.length) return a;
                                var i = /\+/g;
                                t = t.split(r);
                                var s = 1e3;
                                o && "number" == typeof o.maxKeys && (s = o.maxKeys);
                                var c = t.length;
                                s > 0 && c > s && (c = s);
                                for (var u = 0; u < c; ++u) {
                                    var p, l, f, d, v = t[u].replace(i, "%20"),
                                        h = v.indexOf(n);
                                    (h >= 0 ? (p = v.substr(0, h), l = v.substr(h + 1)) : (p = v, l = ""), f = decodeURIComponent(p), d = decodeURIComponent(l), Object.prototype.hasOwnProperty.call(a, f)) ? e(a[f]) ? a[f].push(d) : a[f] = [a[f], d]: a[f] = d
                                }
                                return a
                            };
                            var e = Array.isArray || function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            }
                        },
                        577: function(t) {
                            var stringifyPrimitive = function(t) {
                                switch (typeof t) {
                                    case "string":
                                        return t;
                                    case "boolean":
                                        return t ? "true" : "false";
                                    case "number":
                                        return isFinite(t) ? t : "";
                                    default:
                                        return ""
                                }
                            };
                            t.exports = function(t, n, o, a) {
                                return (n = n || "&", o = o || "=", null === t && (t = void 0), "object" == typeof t) ? map(r(t), function(r) {
                                    var a = encodeURIComponent(stringifyPrimitive(r)) + o;
                                    return e(t[r]) ? map(t[r], function(t) {
                                        return a + encodeURIComponent(stringifyPrimitive(t))
                                    }).join(n) : a + encodeURIComponent(stringifyPrimitive(t[r]))
                                }).join(n) : a ? encodeURIComponent(stringifyPrimitive(a)) + o + encodeURIComponent(stringifyPrimitive(t)) : ""
                            };
                            var e = Array.isArray || function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            };

                            function map(t, e) {
                                if (t.map) return t.map(e);
                                for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
                                return r
                            }
                            var r = Object.keys || function(t) {
                                var e = [];
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
                                return e
                            }
                        }
                    },
                    r = {};

                function __nccwpck_require__(t) {
                    var n = r[t];
                    if (void 0 !== n) return n.exports;
                    var o = r[t] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        e[t](o, o.exports, __nccwpck_require__), a = !1
                    } finally {
                        a && delete r[t]
                    }
                    return o.exports
                }
                __nccwpck_require__.ab = "//";
                var n = {};
                n.decode = n.parse = __nccwpck_require__(815), n.encode = n.stringify = __nccwpck_require__(577), t.exports = n
            }()
        },
        94573: function(t, e, r) {
            "use strict";
            var n = r(2265);
            e.Z = function(t, e) {
                void 0 === e && (e = 250);
                var r = (0, n.useState)(null),
                    o = r[0],
                    a = r[1],
                    i = (0, n.useCallback)(function() {
                        o && clearTimeout(o)
                    }, [o]);
                return (0, n.useEffect)(function() {
                    return i
                }, [i]), [function() {
                    a(setTimeout(t, e))
                }, i]
            }
        },
        99175: function(t, e, r) {
            "use strict";
            var n = r(2265);
            let o = n.forwardRef(function({
                title: t,
                titleId: e,
                ...r
            }, o) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: o,
                    "aria-labelledby": e
                }, r), t ? n.createElement("title", {
                    id: e
                }, t) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",
                    clipRule: "evenodd"
                }))
            });
            e.Z = o
        },
        36234: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return atropos_react
                }
            });
            var n = r(2265);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var $ = function(t, e) {
                    return t.querySelector(e)
                },
                removeUndefinedProps = function(t) {
                    void 0 === t && (t = {});
                    var e = {};
                    return Object.keys(t).forEach(function(r) {
                        void 0 !== t[r] && (e[r] = t[r])
                    }), e
                },
                o = {
                    alwaysActive: !1,
                    activeOffset: 50,
                    shadowOffset: 50,
                    shadowScale: 1,
                    duration: 300,
                    rotate: !0,
                    rotateTouch: !0,
                    rotateXMax: 15,
                    rotateYMax: 15,
                    rotateXInvert: !1,
                    rotateYInvert: !1,
                    stretchX: 0,
                    stretchY: 0,
                    stretchZ: 0,
                    commonOrigin: !0,
                    shadow: !0,
                    highlight: !0
                },
                a = ["component", "children", "rootChildren", "scaleChildren", "rotateChildren", "className", "scaleClassName", "rotateClassName", "innerClassName"];

            function atropos_react_extends() {
                return (atropos_react_extends = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = ["eventsEl", "alwaysActive", "activeOffset", "shadowOffset", "shadowScale", "duration", "rotate", "rotateTouch", "rotateXMax", "rotateYMax", "rotateXInvert", "rotateYInvert", "stretchX", "stretchY", "stretchZ", "commonOrigin", "shadow", "highlight", "onEnter", "onLeave", "onRotate"],
                removeParamsKeys = function(t) {
                    var e = {};
                    return Object.keys(t).forEach(function(r) {
                        i.includes(r) || (e[r] = t[r])
                    }), e
                },
                extractParamsKeys = function(t) {
                    var e = {};
                    return Object.keys(t).forEach(function(r) {
                        i.includes(r) && (e[r] = t[r])
                    }), e
                },
                atropos_react = function(t) {
                    var e = t.component,
                        r = t.children,
                        i = t.rootChildren,
                        s = t.scaleChildren,
                        c = t.rotateChildren,
                        u = t.className,
                        p = void 0 === u ? "" : u,
                        l = t.scaleClassName,
                        f = void 0 === l ? "" : l,
                        d = t.rotateClassName,
                        v = void 0 === d ? "" : d,
                        h = t.innerClassName,
                        m = void 0 === h ? "" : h,
                        y = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                a = Object.keys(t);
                            for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, a),
                        g = (0, n.useRef)(null),
                        _ = (0, n.useRef)(null),
                        cls = function() {
                            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            return e.filter(function(t) {
                                return !!t
                            }).join(" ")
                        },
                        init = function() {
                            var e, r, n, a, i, s, c, u, p, l, f, d, v, h, m, y, x, b, w, O, E, M, C, R, j, A, P, L, N, X, Y, T, k, I, U, q, S;
                            _.current = (void 0 === (e = atropos_react_extends({
                                el: g.current
                            }, extractParamsKeys(t))) && (e = {}), m = (h = e).el, y = h.eventsEl, x = e.isComponent, w = (b = {
                                __atropos__: !0,
                                params: _extends({}, o, {
                                    onEnter: null,
                                    onLeave: null,
                                    onRotate: null
                                }, removeUndefinedProps(e || {})),
                                destroyed: !1,
                                isActive: !1
                            }).params, O = [], ! function purgeQueue() {
                                v = requestAnimationFrame(function() {
                                    O.forEach(function(t) {
                                        if ("function" == typeof t) t();
                                        else {
                                            var e = t.element,
                                                r = t.prop,
                                                n = t.value;
                                            e.style[r] = n
                                        }
                                    }), O.splice(0, O.length), purgeQueue()
                                })
                            }(), E = function(t, e) {
                                O.push({
                                    element: t,
                                    prop: "transitionDuration",
                                    value: e
                                })
                            }, M = function(t, e) {
                                O.push({
                                    element: t,
                                    prop: "transitionTimingFunction",
                                    value: e
                                })
                            }, C = function(t, e) {
                                O.push({
                                    element: t,
                                    prop: "transform",
                                    value: e
                                })
                            }, R = function(t, e) {
                                O.push({
                                    element: t,
                                    prop: "opacity",
                                    value: e
                                })
                            }, j = function(t, e) {
                                O.push({
                                    element: t,
                                    prop: "transformOrigin",
                                    value: e
                                })
                            }, A = function(t, e, r, n) {
                                return t.addEventListener(e, r, n)
                            }, P = function(t, e, r, n) {
                                return t.removeEventListener(e, r, n)
                            }, L = function(t) {
                                var e = t.rotateXPercentage,
                                    n = void 0 === e ? 0 : e,
                                    o = t.rotateYPercentage,
                                    a = void 0 === o ? 0 : o,
                                    i = t.duration,
                                    s = t.opacityOnly,
                                    c = t.easeOut,
                                    getOpacity = function(t) {
                                        if (t.dataset.atroposOpacity && "string" == typeof t.dataset.atroposOpacity) return t.dataset.atroposOpacity.split(";").map(function(t) {
                                            return parseFloat(t)
                                        })
                                    };
                                r.querySelectorAll("[data-atropos-offset], [data-atropos-opacity]").forEach(function(t) {
                                    E(t, i), M(t, c ? "ease-out" : "");
                                    var e = getOpacity(t);
                                    if (0 === n && 0 === a) s || C(t, "translate3d(0, 0, 0)"), e && R(t, e[0]);
                                    else {
                                        var r = parseFloat(t.dataset.atroposOffset) / 100;
                                        if (Number.isNaN(r) || s || C(t, "translate3d(" + -(-a * r) + "%, " + -(n * r) + "%, 0)"), e) {
                                            var o = e[0];
                                            R(t, o + (e[1] - o) * Math.max(Math.abs(n), Math.abs(a)) / 100)
                                        }
                                    }
                                })
                            }, N = function(t, e) {
                                var r, o = m !== y;
                                if (s || (s = m.getBoundingClientRect()), o && !c && (c = y.getBoundingClientRect()), void 0 === t && void 0 === e) {
                                    var a = o ? c : s;
                                    t = a.left + a.width / 2, e = a.top + a.height / 2
                                }
                                var i = 0,
                                    u = 0,
                                    l = s,
                                    f = l.top,
                                    d = l.left,
                                    v = l.width,
                                    h = l.height;
                                if (o) {
                                    var g = c,
                                        _ = g.top,
                                        x = g.left,
                                        b = g.width,
                                        O = g.height,
                                        A = t - x,
                                        P = e - _;
                                    u = -(w.rotateYMax * (A - (v / 2 + (d - x))) / (b - v / 2) * 1), i = w.rotateXMax * (P - (h / 2 + (f - _))) / (O - h / 2), r = t - d + "px " + (e - f) + "px"
                                } else {
                                    var N = t - d,
                                        X = e - f;
                                    u = -(w.rotateYMax * (N - v / 2) / (v / 2) * 1), i = w.rotateXMax * (X - h / 2) / (h / 2)
                                }
                                i = Math.min(Math.max(-i, -w.rotateXMax), w.rotateXMax), w.rotateXInvert && (i = -i), u = Math.min(Math.max(-u, -w.rotateYMax), w.rotateYMax), w.rotateYInvert && (u = -u);
                                var Y = i / w.rotateXMax * 100,
                                    T = u / w.rotateYMax * 100,
                                    k = (o ? T / 100 * w.stretchX : 0) * (w.rotateYInvert ? -1 : 1),
                                    I = (o ? Y / 100 * w.stretchY : 0) * (w.rotateXInvert ? -1 : 1),
                                    U = o ? Math.max(Math.abs(Y), Math.abs(T)) / 100 * w.stretchZ : 0;
                                C(n, "translate3d(" + k + "%, " + -I + "%, " + -U + "px) rotateX(" + i + "deg) rotateY(" + u + "deg)"), r && w.commonOrigin && j(n, r), p && (E(p, w.duration + "ms"), M(p, "ease-out"), C(p, "translate3d(" + -(.25 * T) + "%, " + .25 * Y + "%, 0)"), R(p, Math.max(Math.abs(Y), Math.abs(T)) / 100)), L({
                                    rotateXPercentage: Y,
                                    rotateYPercentage: T,
                                    duration: w.duration + "ms",
                                    easeOut: !0
                                }), "function" == typeof w.onRotate && w.onRotate(i, u)
                            }, X = function() {
                                O.push(function() {
                                    return m.classList.add("atropos-active")
                                }), E(n, w.duration + "ms"), M(n, "ease-out"), C(a, "translate3d(0,0, " + w.activeOffset + "px)"), E(a, w.duration + "ms"), M(a, "ease-out"), u && (E(u, w.duration + "ms"), M(u, "ease-out")), b.isActive = !0
                            }, Y = function(t) {
                                if (l = void 0, ("pointerdown" !== t.type || "mouse" !== t.pointerType) && ("pointerenter" !== t.type || "mouse" === t.pointerType)) {
                                    if ("pointerdown" === t.type && t.preventDefault(), f = t.clientX, d = t.clientY, w.alwaysActive) {
                                        s = void 0, c = void 0;
                                        return
                                    }
                                    X(), "function" == typeof w.onEnter && w.onEnter()
                                }
                            }, T = function(t) {
                                !1 === l && t.cancelable && t.preventDefault()
                            }, k = function(t) {
                                if (w.rotate && b.isActive) {
                                    if ("mouse" !== t.pointerType) {
                                        if (!w.rotateTouch) return;
                                        t.preventDefault()
                                    }
                                    var e = t.clientX,
                                        r = t.clientY,
                                        n = e - f,
                                        o = r - d;
                                    if ("string" == typeof w.rotateTouch && (0 !== n || 0 !== o) && void 0 === l) {
                                        if (n * n + o * o >= 25) {
                                            var a = 180 * Math.atan2(Math.abs(o), Math.abs(n)) / Math.PI;
                                            l = "scroll-y" === w.rotateTouch ? a > 45 : 90 - a > 45
                                        }!1 === l && (m.classList.add("atropos-rotate-touch"), t.cancelable && t.preventDefault())
                                    }
                                    "mouse" !== t.pointerType && l || N(e, r)
                                }
                            }, I = function(t) {
                                if (s = void 0, c = void 0, b.isActive && (!t || "pointerup" !== t.type || "mouse" !== t.pointerType) && (!t || "pointerleave" !== t.type || "mouse" === t.pointerType)) {
                                    if ("string" == typeof w.rotateTouch && l && m.classList.remove("atropos-rotate-touch"), w.alwaysActive) {
                                        N(), "function" == typeof w.onRotate && w.onRotate(0, 0), "function" == typeof w.onLeave && w.onLeave();
                                        return
                                    }
                                    O.push(function() {
                                        return m.classList.remove("atropos-active")
                                    }), E(a, w.duration + "ms"), M(a, ""), C(a, "translate3d(0,0, 0px)"), u && (E(u, w.duration + "ms"), M(u, "")), p && (E(p, w.duration + "ms"), M(p, ""), C(p, "translate3d(0, 0, 0)"), R(p, 0)), E(n, w.duration + "ms"), M(n, ""), C(n, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"), L({
                                        duration: w.duration + "ms"
                                    }), b.isActive = !1, "function" == typeof w.onRotate && w.onRotate(0, 0), "function" == typeof w.onLeave && w.onLeave()
                                }
                            }, U = function(t) {
                                var e = t.target;
                                !y.contains(e) && e !== y && b.isActive && I()
                            }, b.destroy = function() {
                                b.destroyed = !0, cancelAnimationFrame(v), P(document, "click", U), P(y, "pointerdown", Y), P(y, "pointerenter", Y), P(y, "pointermove", k), P(y, "touchmove", T), P(y, "pointerleave", I), P(y, "pointerup", I), P(y, "lostpointercapture", I), delete m.__atropos__
                            }, "string" == typeof m && (m = $(document, m)), m && (m.__atropos__ || (void 0 !== y ? "string" == typeof y && (y = $(document, y)) : y = m, r = x ? m.parentNode.host : m, Object.assign(b, {
                                el: m
                            }), n = $(m, ".atropos-rotate"), a = $(m, ".atropos-scale"), i = $(m, ".atropos-inner"), m.__atropos__ = b)), m && y && (w.shadow && ((u = $(m, ".atropos-shadow")) || ((u = document.createElement("span")).classList.add("atropos-shadow"), q = !0), C(u, "translate3d(0,0,-" + w.shadowOffset + "px) scale(" + w.shadowScale + ")"), q && n.appendChild(u)), w.highlight && ((p = $(m, ".atropos-highlight")) || ((p = document.createElement("span")).classList.add("atropos-highlight"), S = !0), C(p, "translate3d(0,0,0)"), S && i.appendChild(p)), w.rotateTouch && ("string" == typeof w.rotateTouch ? m.classList.add("atropos-rotate-touch-" + w.rotateTouch) : m.classList.add("atropos-rotate-touch")), $(r, "[data-atropos-opacity]") && L({
                                opacityOnly: !0
                            }), A(document, "click", U), A(y, "pointerdown", Y), A(y, "pointerenter", Y), A(y, "pointermove", k), A(y, "touchmove", T), A(y, "pointerleave", I), A(y, "pointerup", I), A(y, "lostpointercapture", I), w.alwaysActive && (X(), N())), b)
                        },
                        destroy = function() {
                            _.current && (_.current.destroy(), _.current = null)
                        };
                    return (0, n.useEffect)(function() {
                        return g.current && init(),
                            function() {
                                destroy()
                            }
                    }, []), (0, n.useEffect)(function() {
                        return _.current && (_.current.params.onEnter = t.onEnter, _.current.params.onLeave = t.onLeave, _.current.params.onRotate = t.onRotate),
                            function() {
                                _.current && (_.current.params.onEnter = null, _.current.params.onLeave = null, _.current.params.onRotate = null)
                            }
                    }), n.createElement(void 0 === e ? "div" : e, atropos_react_extends({
                        className: cls("atropos", p)
                    }, removeParamsKeys(y), {
                        ref: g
                    }), n.createElement("span", {
                        className: cls("atropos-scale", f)
                    }, n.createElement("span", {
                        className: cls("atropos-rotate", v)
                    }, n.createElement("span", {
                        className: cls("atropos-inner", m)
                    }, r, (t.highlight || void 0 === t.highlight) && n.createElement("span", {
                        className: "atropos-highlight"
                    })), c, (t.shadow || void 0 === t.shadow) && n.createElement("span", {
                        className: "atropos-shadow"
                    })), s), i)
                }
        }
    }
]);