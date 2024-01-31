"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4590], {
        65815: function(t, e, n) {
            var r, o, i, a = n(25566);
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = n(50044),
                u = n(2265),
                l = n(73225),
                c = n(11566),
                d = n(42444),
                p = n(32040),
                f = n(84960);

            function _interopDefaultLegacy(t) {
                return t && "object" == typeof t && "default" in t ? t : {
                    default: t
                }
            }
            var v = function(t) {
                    if (t && t.__esModule) return t;
                    var e = Object.create(null);
                    return t && Object.keys(t).forEach(function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(t, n);
                            Object.defineProperty(e, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            })
                        }
                    }), e.default = t, Object.freeze(e)
                }(u),
                m = _interopDefaultLegacy(u),
                h = _interopDefaultLegacy(p),
                g = (void 0 === a || a.env, "production"),
                createDefinition = function(t) {
                    return {
                        isEnabled: function(e) {
                            return t.some(function(t) {
                                return !!e[t]
                            })
                        }
                    }
                },
                y = {
                    measureLayout: createDefinition(["layout", "layoutId", "drag"]),
                    animation: createDefinition(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: createDefinition(["exit"]),
                    drag: createDefinition(["drag", "dragControls"]),
                    focus: createDefinition(["whileFocus"]),
                    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: createDefinition(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: createDefinition(["whileInView", "onViewportEnter", "onViewportLeave"])
                };

            function loadFeatures(t) {
                for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? y.projectionNodeConstructor = t[e] : y[e].Component = t[e])
            }
            var x = u.createContext({
                    strict: !1
                }),
                V = Object.keys(y),
                P = V.length,
                E = u.createContext({
                    transformPagePoint: function(t) {
                        return t
                    },
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                T = u.createContext({});

            function useVisualElementContext() {
                return u.useContext(T).visualElement
            }
            var S = u.createContext(null),
                A = "undefined" != typeof document,
                _ = A ? u.useLayoutEffect : u.useEffect,
                C = {
                    current: null
                },
                b = !1;

            function useReducedMotion() {
                return b || function() {
                    if (b = !0, A) {
                        if (window.matchMedia) {
                            var t = window.matchMedia("(prefers-reduced-motion)"),
                                setReducedMotionPreferences = function() {
                                    return C.current = t.matches
                                };
                            t.addListener(setReducedMotionPreferences), setReducedMotionPreferences()
                        } else C.current = !1
                    }
                }(), s.__read(u.useState(C.current), 1)[0]
            }

            function useReducedMotionConfig() {
                var t = useReducedMotion(),
                    e = u.useContext(E).reducedMotion;
                return "never" !== e && ("always" === e || t)
            }

            function isRefObject(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function isVariantLabels(t) {
                return Array.isArray(t)
            }

            function isVariantLabel(t) {
                return "string" == typeof t || isVariantLabels(t)
            }

            function resolveVariantFromProps(t, e, n, r, o) {
                var i;
                return void 0 === r && (r = {}), void 0 === o && (o = {}), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), "string" == typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), e
            }

            function resolveVariant(t, e, n) {
                var r, o, i = t.getProps();
                return resolveVariantFromProps(i, e, null != n ? n : i.custom, (r = {}, t.forEachValue(function(t, e) {
                    return r[e] = t.get()
                }), r), (o = {}, t.forEachValue(function(t, e) {
                    return o[e] = t.getVelocity()
                }), o))
            }

            function checkIfControllingVariants(t) {
                var e;
                return "function" == typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || isVariantLabel(t.initial) || isVariantLabel(t.animate) || isVariantLabel(t.whileHover) || isVariantLabel(t.whileDrag) || isVariantLabel(t.whileTap) || isVariantLabel(t.whileFocus) || isVariantLabel(t.exit)
            }

            function checkIfVariantNode(t) {
                return !!(checkIfControllingVariants(t) || t.variants)
            }

            function variantLabelsAsDependency(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }

            function useConstant(t) {
                var e = u.useRef(null);
                return null === e.current && (e.current = t()), e.current
            }
            var D = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                w = 1,
                M = u.createContext({}),
                L = u.createContext({}),
                R = function(t) {
                    function VisualElementHandler() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s.__extends(VisualElementHandler, t), VisualElementHandler.prototype.getSnapshotBeforeUpdate = function() {
                        return this.updateProps(), null
                    }, VisualElementHandler.prototype.componentDidUpdate = function() {}, VisualElementHandler.prototype.updateProps = function() {
                        var t = this.props,
                            e = t.visualElement,
                            n = t.props;
                        e && e.setProps(n)
                    }, VisualElementHandler.prototype.render = function() {
                        return this.props.children
                    }, VisualElementHandler
                }(m.default.Component);

            function createMotionComponent(t) {
                var e = t.preloadedFeatures,
                    n = t.createVisualElement,
                    r = t.projectionNodeConstructor,
                    o = t.useRender,
                    i = t.useVisualState,
                    a = t.Component;
                return e && loadFeatures(e), u.forwardRef(function(t, c) {
                    var d, p, f, m, h, C, b, k, I, j, F, B, N, O, U, H, z, G, Y, W, X, K, Z, $, q, J = (B = t.layoutId, (N = null === (F = u.useContext(M)) || void 0 === F ? void 0 : F.id) && void 0 !== B ? N + "-" + B : B);
                    t = s.__assign(s.__assign({}, t), {
                        layoutId: J
                    });
                    var Q = u.useContext(E),
                        tt = null,
                        te = (U = (O = function(t, e) {
                            if (checkIfControllingVariants(t)) {
                                var n = t.initial,
                                    r = t.animate;
                                return {
                                    initial: !1 === n || isVariantLabel(n) ? n : void 0,
                                    animate: isVariantLabel(r) ? r : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, u.useContext(T))).initial, H = O.animate, u.useMemo(function() {
                            return {
                                initial: U,
                                animate: H
                            }
                        }, [variantLabelsAsDependency(U), variantLabelsAsDependency(H)])),
                        tn = Q.isStatic ? void 0 : useConstant(function() {
                            if (D.hasEverUpdated) return w++
                        }),
                        tr = i(t, Q.isStatic);
                    return !Q.isStatic && A && (te.visualElement = (z = s.__assign(s.__assign({}, Q), t), G = n, Y = u.useContext(x), W = useVisualElementContext(), X = u.useContext(S), K = useReducedMotionConfig(), Z = u.useRef(void 0), G || (G = Y.renderer), !Z.current && G && (Z.current = G(a, {
                        visualState: tr,
                        parent: W,
                        props: z,
                        presenceId: null == X ? void 0 : X.id,
                        blockInitialAnimation: (null == X ? void 0 : X.initial) === !1,
                        shouldReduceMotion: K
                    })), $ = Z.current, _(function() {
                        null == $ || $.syncRender()
                    }), u.useEffect(function() {
                        var t;
                        null === (t = null == $ ? void 0 : $.animationState) || void 0 === t || t.animateChanges()
                    }), _(function() {
                        return function() {
                            return null == $ ? void 0 : $.notifyUnmount()
                        }
                    }, []), $), d = t, p = te.visualElement, f = r || y.projectionNodeConstructor, h = d.layoutId, C = d.layout, b = d.drag, k = d.dragConstraints, I = d.layoutScroll, j = u.useContext(L), !f || !p || (null == p ? void 0 : p.projection) || (p.projection = new f(tn, p.getLatestValues(), null === (m = p.parent) || void 0 === m ? void 0 : m.projection), p.projection.setOptions({
                        layoutId: h,
                        layout: C,
                        alwaysMeasureLayout: !!b || k && isRefObject(k),
                        visualElement: p,
                        scheduleRender: function() {
                            return p.scheduleRender()
                        },
                        animationType: "string" == typeof C ? C : "both",
                        initialPromotionConfig: j,
                        layoutScroll: I
                    })), tt = function(t, e, n) {
                        var r = [],
                            o = u.useContext(x);
                        if (!e) return null;
                        "production" !== g && n && o.strict && l.invariant(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                        for (var i = 0; i < P; i++) {
                            var a = V[i],
                                c = y[a],
                                d = c.isEnabled,
                                p = c.Component;
                            d(t) && p && r.push(v.createElement(p, s.__assign({
                                key: a
                            }, t, {
                                visualElement: e
                            })))
                        }
                        return r
                    }(t, te.visualElement, e)), v.createElement(R, {
                        visualElement: te.visualElement,
                        props: s.__assign(s.__assign({}, Q), t)
                    }, tt, v.createElement(T.Provider, {
                        value: te
                    }, o(a, t, tn, (q = te.visualElement, u.useCallback(function(t) {
                        var e;
                        t && (null === (e = tr.mount) || void 0 === e || e.call(tr, t)), q && (t ? q.mount(t) : q.unmount()), c && ("function" == typeof c ? c(t) : isRefObject(c) && (c.current = t))
                    }, [q])), tr, Q.isStatic, te.visualElement)))
                })
            }

            function createMotionProxy(t) {
                function custom(e, n) {
                    return void 0 === n && (n = {}), createMotionComponent(t(e, n))
                }
                if ("undefined" == typeof Proxy) return custom;
                var e = new Map;
                return new Proxy(custom, {
                    get: function(t, n) {
                        return e.has(n) || e.set(n, custom(n)), e.get(n)
                    }
                })
            }
            var k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function isSVGComponent(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (k.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            var I = {};

            function addScaleCorrector(t) {
                Object.assign(I, t)
            }
            var j = ["", "X", "Y", "Z"],
                F = ["transformPerspective", "x", "y", "z"];

            function sortTransformProps(t, e) {
                return F.indexOf(t) - F.indexOf(e)
            }["translate", "scale", "rotate", "skew"].forEach(function(t) {
                return j.forEach(function(e) {
                    return F.push(t + e)
                })
            });
            var B = new Set(F);

            function isTransformProp(t) {
                return B.has(t)
            }
            var N = new Set(["originX", "originY", "originZ"]);

            function isForcedMotionValue(t, e) {
                var n = e.layout,
                    r = e.layoutId;
                return isTransformProp(t) || N.has(t) || (n || void 0 !== r) && (!!I[t] || "opacity" === t)
            }
            var isMotionValue = function(t) {
                    return !!(null !== t && "object" == typeof t && t.getVelocity)
                },
                O = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                };

            function isCSSVariable$1(t) {
                return t.startsWith("--")
            }
            var U = s.__assign(s.__assign({}, c.number), {
                    transform: Math.round
                }),
                H = {
                    borderWidth: c.px,
                    borderTopWidth: c.px,
                    borderRightWidth: c.px,
                    borderBottomWidth: c.px,
                    borderLeftWidth: c.px,
                    borderRadius: c.px,
                    radius: c.px,
                    borderTopLeftRadius: c.px,
                    borderTopRightRadius: c.px,
                    borderBottomRightRadius: c.px,
                    borderBottomLeftRadius: c.px,
                    width: c.px,
                    maxWidth: c.px,
                    height: c.px,
                    maxHeight: c.px,
                    size: c.px,
                    top: c.px,
                    right: c.px,
                    bottom: c.px,
                    left: c.px,
                    padding: c.px,
                    paddingTop: c.px,
                    paddingRight: c.px,
                    paddingBottom: c.px,
                    paddingLeft: c.px,
                    margin: c.px,
                    marginTop: c.px,
                    marginRight: c.px,
                    marginBottom: c.px,
                    marginLeft: c.px,
                    rotate: c.degrees,
                    rotateX: c.degrees,
                    rotateY: c.degrees,
                    rotateZ: c.degrees,
                    scale: c.scale,
                    scaleX: c.scale,
                    scaleY: c.scale,
                    scaleZ: c.scale,
                    skew: c.degrees,
                    skewX: c.degrees,
                    skewY: c.degrees,
                    distance: c.px,
                    translateX: c.px,
                    translateY: c.px,
                    translateZ: c.px,
                    x: c.px,
                    y: c.px,
                    z: c.px,
                    perspective: c.px,
                    transformPerspective: c.px,
                    opacity: c.alpha,
                    originX: c.progressPercentage,
                    originY: c.progressPercentage,
                    originZ: c.px,
                    zIndex: U,
                    fillOpacity: c.alpha,
                    strokeOpacity: c.alpha,
                    numOctaves: U
                };

            function buildHTMLStyles(t, e, n, r) {
                var o, i, a, s, u, l, c = t.style,
                    d = t.vars,
                    p = t.transform,
                    f = t.transformKeys,
                    v = t.transformOrigin;
                f.length = 0;
                var m = !1,
                    h = !1,
                    g = !0;
                for (var y in e) {
                    var x = e[y];
                    if (isCSSVariable$1(y)) {
                        d[y] = x;
                        continue
                    }
                    var V = H[y],
                        P = V && "number" == typeof x ? V.transform(x) : x;
                    if (isTransformProp(y)) {
                        if (m = !0, p[y] = P, f.push(y), !g) continue;
                        x !== (null !== (l = V.default) && void 0 !== l ? l : 0) && (g = !1)
                    } else N.has(y) ? (v[y] = P, h = !0) : c[y] = P
                }
                m ? c.transform = function(t, e, n, r) {
                    var o = t.transform,
                        i = t.transformKeys,
                        a = e.enableHardwareAcceleration,
                        s = e.allowTransformNone,
                        u = "";
                    i.sort(sortTransformProps);
                    for (var l = !1, c = i.length, d = 0; d < c; d++) {
                        var p = i[d];
                        u += "".concat(O[p] || p, "(").concat(o[p], ") "), "z" === p && (l = !0)
                    }
                    return !l && (void 0 === a || a) ? u += "translateZ(0)" : u = u.trim(), r ? u = r(o, n ? "" : u) : (void 0 === s || s) && n && (u = "none"), u
                }(t, n, g, r) : r ? c.transform = r({}, "") : !e.transform && c.transform && (c.transform = "none"), h && (c.transformOrigin = (o = v.originX, a = void 0 === (i = v.originY) ? "50%" : i, u = void 0 === (s = v.originZ) ? 0 : s, "".concat(void 0 === o ? "50%" : o, " ").concat(a, " ").concat(u)))
            }
            var createHtmlRenderState = function() {
                return {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }
            };

            function copyRawValuesOnly(t, e, n) {
                for (var r in e) isMotionValue(e[r]) || isForcedMotionValue(r, n) || (t[r] = e[r])
            }
            var z = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

            function isValidMotionProp(t) {
                return z.has(t)
            }
            var shouldForward = function(t) {
                return !isValidMotionProp(t)
            };

            function loadExternalIsValidProp(t) {
                t && (shouldForward = function(e) {
                    return e.startsWith("on") ? !isValidMotionProp(e) : t(e)
                })
            }
            try {
                loadExternalIsValidProp(n(54729).Z)
            } catch (t) {}

            function filterProps(t, e, n) {
                var r = {};
                for (var o in t)(shouldForward(o) || !0 === n && isValidMotionProp(o) || !e && !isValidMotionProp(o) || t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
                return r
            }

            function calcOrigin$1(t, e, n) {
                return "string" == typeof t ? t : c.px.transform(e + n * t)
            }
            var G = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                Y = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function buildSVGAttrs(t, e, n, r) {
                var o, i, a, u, l, d, p, f, v, m, h = e.attrX,
                    g = e.attrY,
                    y = e.originX,
                    x = e.originY,
                    V = e.pathLength,
                    P = e.pathSpacing,
                    E = e.pathOffset;
                buildHTMLStyles(t, s.__rest(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r), t.attrs = t.style, t.style = {};
                var T = t.attrs,
                    S = t.style,
                    A = t.dimensions;
                T.transform && (A && (S.transform = T.transform), delete T.transform), A && (void 0 !== y || void 0 !== x || S.transform) && (S.transformOrigin = (o = void 0 !== y ? y : .5, i = void 0 !== x ? x : .5, a = calcOrigin$1(o, A.x, A.width), u = calcOrigin$1(i, A.y, A.height), "".concat(a, " ").concat(u))), void 0 !== h && (T.x = h), void 0 !== g && (T.y = g), void 0 !== V && (p = !1, void 0 === (l = void 0 === P ? 1 : P) && (l = 1), void 0 === (d = void 0 === E ? 0 : E) && (d = 0), void 0 === p && (p = !0), T.pathLength = 1, T[(f = p ? G : Y).offset] = c.px.transform(-d), v = c.px.transform(V), m = c.px.transform(l), T[f.array] = "".concat(v, " ").concat(m))
            }
            var createSvgRenderState = function() {
                    return s.__assign(s.__assign({}, createHtmlRenderState()), {
                        attrs: {}
                    })
                },
                W = /([a-z])([A-Z])/g,
                camelToDash = function(t) {
                    return t.replace(W, "$1-$2").toLowerCase()
                };

            function renderHTML(t, e, n, r) {
                var o = e.style,
                    i = e.vars;
                for (var a in Object.assign(t.style, o, r && r.getProjectionStyles(n)), i) t.style.setProperty(a, i[a])
            }
            var X = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function renderSVG(t, e, n, r) {
                for (var o in renderHTML(t, e, void 0, r), e.attrs) t.setAttribute(X.has(o) ? o : camelToDash(o), e.attrs[o])
            }

            function scrapeMotionValuesFromProps$1(t) {
                var e = t.style,
                    n = {};
                for (var r in e)(isMotionValue(e[r]) || isForcedMotionValue(r, t)) && (n[r] = e[r]);
                return n
            }

            function scrapeMotionValuesFromProps(t) {
                var e = scrapeMotionValuesFromProps$1(t);
                for (var n in t) isMotionValue(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
                return e
            }

            function isAnimationControls(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            var isKeyframesTarget = function(t) {
                    return Array.isArray(t)
                },
                resolveFinalValueInKeyframes = function(t) {
                    return isKeyframesTarget(t) ? t[t.length - 1] || 0 : t
                };

            function resolveMotionValue(t) {
                var e = isMotionValue(t) ? t.get() : t;
                return e && "object" == typeof e && e.mix && e.toValue ? e.toValue() : e
            }

            function makeState(t, e, n, r) {
                var o = t.scrapeMotionValuesFromProps,
                    i = t.createRenderState,
                    a = t.onMount,
                    u = {
                        latestValues: function(t, e, n, r) {
                            var o = {},
                                i = (null == n ? void 0 : n.initial) === !1,
                                a = r(t);
                            for (var u in a) o[u] = resolveMotionValue(a[u]);
                            var l = t.initial,
                                c = t.animate,
                                d = checkIfControllingVariants(t),
                                p = checkIfVariantNode(t);
                            e && p && !d && !1 !== t.inherit && (null != l || (l = e.initial), null != c || (c = e.animate));
                            var f = i || !1 === l,
                                v = f ? c : l;
                            return v && "boolean" != typeof v && !isAnimationControls(v) && (Array.isArray(v) ? v : [v]).forEach(function(e) {
                                var n = resolveVariantFromProps(t, e);
                                if (n) {
                                    var r = n.transitionEnd;
                                    n.transition;
                                    var i = s.__rest(n, ["transitionEnd", "transition"]);
                                    for (var a in i) {
                                        var u = i[a];
                                        if (Array.isArray(u)) {
                                            var l = f ? u.length - 1 : 0;
                                            u = u[l]
                                        }
                                        null !== u && (o[a] = u)
                                    }
                                    for (var a in r) o[a] = r[a]
                                }
                            }), o
                        }(e, n, r, o),
                        renderState: i()
                    };
                return a && (u.mount = function(t) {
                    return a(e, t, u)
                }), u
            }
            var makeUseVisualState = function(t) {
                    return function(e, n) {
                        var r = u.useContext(T),
                            o = u.useContext(S);
                        return n ? makeState(t, e, r, o) : useConstant(function() {
                            return makeState(t, e, r, o)
                        })
                    }
                },
                K = {
                    useVisualState: makeUseVisualState({
                        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
                        createRenderState: createSvgRenderState,
                        onMount: function(t, e, n) {
                            var r = n.renderState,
                                o = n.latestValues;
                            try {
                                r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (t) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            buildSVGAttrs(r, o, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), renderSVG(e, r)
                        }
                    })
                },
                Z = {
                    useVisualState: makeUseVisualState({
                        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
                        createRenderState: createHtmlRenderState
                    })
                };

            function createDomMotionConfig(t, e, n, r, o) {
                var i, a = e.forwardMotionProps,
                    l = isSVGComponent(t) ? K : Z;
                return s.__assign(s.__assign({}, l), {
                    preloadedFeatures: n,
                    useRender: (void 0 === (i = void 0 !== a && a) && (i = !1), function(t, e, n, r, o, a) {
                        var l = o.latestValues,
                            c = (isSVGComponent(t) ? function(t, e) {
                                var n = u.useMemo(function() {
                                    var n = createSvgRenderState();
                                    return buildSVGAttrs(n, e, {
                                        enableHardwareAcceleration: !1
                                    }, t.transformTemplate), s.__assign(s.__assign({}, n.attrs), {
                                        style: s.__assign({}, n.style)
                                    })
                                }, [e]);
                                if (t.style) {
                                    var r = {};
                                    copyRawValuesOnly(r, t.style, t), n.style = s.__assign(s.__assign({}, r), n.style)
                                }
                                return n
                            } : function(t, e, n) {
                                var r, o, i = {},
                                    a = (copyRawValuesOnly(r = {}, t.style || {}, t), Object.assign(r, (o = t.transformTemplate, u.useMemo(function() {
                                        var t = createHtmlRenderState();
                                        buildHTMLStyles(t, e, {
                                            enableHardwareAcceleration: !n
                                        }, o);
                                        var r = t.vars,
                                            i = t.style;
                                        return s.__assign(s.__assign({}, r), i)
                                    }, [e]))), t.transformValues && (r = t.transformValues(r)), r);
                                return t.drag && !1 !== t.dragListener && (i.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), i.style = a, i
                            })(e, l, a),
                            d = filterProps(e, "string" == typeof t, i),
                            p = s.__assign(s.__assign(s.__assign({}, d), c), {
                                ref: r
                            });
                        return n && (p["data-projection-id"] = n), u.createElement(t, p)
                    }),
                    createVisualElement: r,
                    projectionNodeConstructor: o,
                    Component: t
                })
            }

            function addDomEvent(t, e, n, r) {
                return void 0 === r && (r = {
                        passive: !0
                    }), t.addEventListener(e, n, r),
                    function() {
                        return t.removeEventListener(e, n)
                    }
            }

            function useDomEvent(t, e, n, r) {
                u.useEffect(function() {
                    var o = t.current;
                    if (n && o) return addDomEvent(o, e, n, r)
                }, [t, e, n, r])
            }

            function isMouseEvent(t) {
                return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }
            e.AnimationType = void 0, (r = e.AnimationType || (e.AnimationType = {})).Animate = "animate", r.Hover = "whileHover", r.Tap = "whileTap", r.Drag = "whileDrag", r.Focus = "whileFocus", r.InView = "whileInView", r.Exit = "exit";
            var $ = {
                pageX: 0,
                pageY: 0
            };

            function extractEventInfo(t, e) {
                var n, r, o;
                return void 0 === e && (e = "page"), {
                    point: t.touches ? (void 0 === (n = e) && (n = "page"), {
                        x: (r = t.touches[0] || t.changedTouches[0] || $)[n + "X"],
                        y: r[n + "Y"]
                    }) : (void 0 === (o = e) && (o = "page"), {
                        x: t[o + "X"],
                        y: t[o + "Y"]
                    })
                }
            }
            var wrapHandler = function(t, e) {
                    void 0 === e && (e = !1);
                    var listener = function(e) {
                        return t(e, extractEventInfo(e))
                    };
                    return e ? function(t) {
                        var e = t instanceof MouseEvent;
                        (!e || e && 0 === t.button) && listener(t)
                    } : listener
                },
                q = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                J = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function getPointerEventName(t) {
                if (A && null === window.onpointerdown);
                else if (A && null === window.ontouchstart) return J[t];
                else if (A && null === window.onmousedown) return q[t];
                return t
            }

            function addPointerEvent(t, e, n, r) {
                return addDomEvent(t, getPointerEventName(e), wrapHandler(n, "pointerdown" === e), r)
            }

            function usePointerEvent(t, e, n, r) {
                return useDomEvent(t, getPointerEventName(e), n && wrapHandler(n, "pointerdown" === e), r)
            }

            function createLock(t) {
                var e = null;
                return function() {
                    return null === e && (e = t, function() {
                        e = null
                    })
                }
            }
            var Q = createLock("dragHorizontal"),
                tt = createLock("dragVertical");

            function getGlobalLock(t) {
                var e = !1;
                if ("y" === t) e = tt();
                else if ("x" === t) e = Q();
                else {
                    var n = Q(),
                        r = tt();
                    n && r ? e = function() {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return e
            }

            function isDragActive() {
                var t = getGlobalLock(!0);
                return !t || (t(), !1)
            }

            function createHoverEvent(t, n, r) {
                return function(o, i) {
                    var a;
                    !isMouseEvent(o) || isDragActive() || (null === (a = t.animationState) || void 0 === a || a.setActive(e.AnimationType.Hover, n), null == r || r(o, i))
                }
            }
            var isNodeOrChild = function(t, e) {
                return !!e && (t === e || isNodeOrChild(t, e.parentElement))
            };

            function useUnmountEffect(t) {
                return u.useEffect(function() {
                    return function() {
                        return t()
                    }
                }, [])
            }
            var te = new Set;

            function warnOnce(t, e, n) {
                t || te.has(e) || (console.warn(e), n && console.warn(n), te.add(e))
            }
            var tn = new WeakMap,
                tr = new WeakMap,
                fireObserverCallback = function(t) {
                    var e;
                    null === (e = tn.get(t.target)) || void 0 === e || e(t)
                },
                fireAllObserverCallbacks = function(t) {
                    t.forEach(fireObserverCallback)
                },
                to = {
                    some: 0,
                    all: 1
                },
                makeRenderlessComponent = function(t) {
                    return function(e) {
                        return t(e), null
                    }
                },
                ti = {
                    inView: makeRenderlessComponent(function(t) {
                        var n = t.visualElement,
                            r = t.whileInView,
                            o = t.onViewportEnter,
                            i = t.onViewportLeave,
                            a = t.viewport,
                            l = void 0 === a ? {} : a,
                            c = u.useRef({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            d = !!(r || o || i);
                        l.once && c.current.hasEnteredView && (d = !1), ("undefined" == typeof IntersectionObserver ? function(t, n, r, o) {
                            var i = o.fallback,
                                a = void 0 === i || i;
                            u.useEffect(function() {
                                t && a && ("production" !== g && warnOnce(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(function() {
                                    n.hasEnteredView = !0;
                                    var t, o = r.getProps().onViewportEnter;
                                    null == o || o(null), null === (t = r.animationState) || void 0 === t || t.setActive(e.AnimationType.InView, !0)
                                }))
                            }, [t])
                        } : function(t, n, r, o) {
                            var i = o.root,
                                a = o.margin,
                                l = o.amount,
                                c = void 0 === l ? "some" : l,
                                d = o.once;
                            u.useEffect(function() {
                                if (t) {
                                    var o, u, l, p, f, v, m, h = {
                                        root: null == i ? void 0 : i.current,
                                        rootMargin: a,
                                        threshold: "number" == typeof c ? c : to[c]
                                    };
                                    return o = r.getInstance(), u = h.root, l = s.__rest(h, ["root"]), p = u || document, tr.has(p) || tr.set(p, {}), (f = tr.get(p))[v = JSON.stringify(l)] || (f[v] = new IntersectionObserver(fireAllObserverCallbacks, s.__assign({
                                            root: u
                                        }, l))), m = f[v], tn.set(o, function(t) {
                                            var o, i = t.isIntersecting;
                                            if (n.isInView !== i) {
                                                if (n.isInView = i, d && !i && n.hasEnteredView) return;
                                                i && (n.hasEnteredView = !0), null === (o = r.animationState) || void 0 === o || o.setActive(e.AnimationType.InView, i);
                                                var a = r.getProps(),
                                                    s = i ? a.onViewportEnter : a.onViewportLeave;
                                                null == s || s(t)
                                            }
                                        }), m.observe(o),
                                        function() {
                                            tn.delete(o), m.unobserve(o)
                                        }
                                }
                            }, [t, i, a, c])
                        })(d, c.current, n, l)
                    }),
                    tap: makeRenderlessComponent(function(t) {
                        var n = t.onTap,
                            r = t.onTapStart,
                            o = t.onTapCancel,
                            i = t.whileTap,
                            a = t.visualElement,
                            s = n || r || o || i,
                            l = u.useRef(!1),
                            c = u.useRef(null),
                            p = {
                                passive: !(r || n || o || onPointerDown)
                            };

                        function removePointerEndListener() {
                            var t;
                            null === (t = c.current) || void 0 === t || t.call(c), c.current = null
                        }

                        function checkPointerEnd() {
                            var t;
                            return removePointerEndListener(), l.current = !1, null === (t = a.animationState) || void 0 === t || t.setActive(e.AnimationType.Tap, !1), !isDragActive()
                        }

                        function onPointerUp(t, e) {
                            checkPointerEnd() && (isNodeOrChild(a.getInstance(), t.target) ? null == n || n(t, e) : null == o || o(t, e))
                        }

                        function onPointerCancel(t, e) {
                            checkPointerEnd() && (null == o || o(t, e))
                        }

                        function onPointerDown(t, n) {
                            var o;
                            removePointerEndListener(), l.current || (l.current = !0, c.current = d.pipe(addPointerEvent(window, "pointerup", onPointerUp, p), addPointerEvent(window, "pointercancel", onPointerCancel, p)), null === (o = a.animationState) || void 0 === o || o.setActive(e.AnimationType.Tap, !0), null == r || r(t, n))
                        }
                        usePointerEvent(a, "pointerdown", s ? onPointerDown : void 0, p), useUnmountEffect(removePointerEndListener)
                    }),
                    focus: makeRenderlessComponent(function(t) {
                        var n = t.whileFocus,
                            r = t.visualElement;
                        useDomEvent(r, "focus", n ? function() {
                            var t;
                            null === (t = r.animationState) || void 0 === t || t.setActive(e.AnimationType.Focus, !0)
                        } : void 0), useDomEvent(r, "blur", n ? function() {
                            var t;
                            null === (t = r.animationState) || void 0 === t || t.setActive(e.AnimationType.Focus, !1)
                        } : void 0)
                    }),
                    hover: makeRenderlessComponent(function(t) {
                        var e = t.onHoverStart,
                            n = t.onHoverEnd,
                            r = t.whileHover,
                            o = t.visualElement;
                        usePointerEvent(o, "pointerenter", e || r ? createHoverEvent(o, !0, e) : void 0, {
                            passive: !e
                        }), usePointerEvent(o, "pointerleave", n || r ? createHoverEvent(o, !1, n) : void 0, {
                            passive: !n
                        })
                    })
                },
                ta = 0,
                incrementId = function() {
                    return ta++
                },
                useId = function() {
                    return useConstant(incrementId)
                };

            function usePresence() {
                var t = u.useContext(S);
                if (null === t) return [!0, null];
                var e = t.isPresent,
                    n = t.onExitComplete,
                    r = t.register,
                    o = useId();
                return u.useEffect(function() {
                    return r(o)
                }, []), !e && n ? [!1, function() {
                    return null == n ? void 0 : n(o)
                }] : [!0]
            }

            function shallowCompare(t, e) {
                if (!Array.isArray(e)) return !1;
                var n = e.length;
                if (n !== t.length) return !1;
                for (var r = 0; r < n; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            var secondsToMilliseconds = function(t) {
                    return 1e3 * t
                },
                ts = {
                    linear: d.linear,
                    easeIn: d.easeIn,
                    easeInOut: d.easeInOut,
                    easeOut: d.easeOut,
                    circIn: d.circIn,
                    circInOut: d.circInOut,
                    circOut: d.circOut,
                    backIn: d.backIn,
                    backInOut: d.backInOut,
                    backOut: d.backOut,
                    anticipate: d.anticipate,
                    bounceIn: d.bounceIn,
                    bounceInOut: d.bounceInOut,
                    bounceOut: d.bounceOut
                },
                easingDefinitionToFunction = function(t) {
                    if (Array.isArray(t)) {
                        l.invariant(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        var e = s.__read(t, 4),
                            n = e[0],
                            r = e[1],
                            o = e[2],
                            i = e[3];
                        return d.cubicBezier(n, r, o, i)
                    }
                    return "string" == typeof t ? (l.invariant(void 0 !== ts[t], "Invalid easing type '".concat(t, "'")), ts[t]) : t
                },
                isAnimatable = function(t, e) {
                    return "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && c.complex.test(e) && !e.startsWith("url("))
                },
                underDampedSpring = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restSpeed: 10
                    }
                },
                criticallyDampedSpring = function(t) {
                    return {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    }
                },
                linearTween = function() {
                    return {
                        type: "keyframes",
                        ease: "linear",
                        duration: .3
                    }
                },
                keyframes = function(t) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: t
                    }
                },
                tu = {
                    x: underDampedSpring,
                    y: underDampedSpring,
                    z: underDampedSpring,
                    rotate: underDampedSpring,
                    rotateX: underDampedSpring,
                    rotateY: underDampedSpring,
                    rotateZ: underDampedSpring,
                    scaleX: criticallyDampedSpring,
                    scaleY: criticallyDampedSpring,
                    scale: criticallyDampedSpring,
                    opacity: linearTween,
                    backgroundColor: linearTween,
                    color: linearTween,
                    default: criticallyDampedSpring
                },
                getDefaultTransition = function(t, e) {
                    var n;
                    return n = isKeyframesTarget(e) ? keyframes : tu[t] || tu.default, s.__assign({
                        to: e
                    }, n(e))
                },
                tl = s.__assign(s.__assign({}, H), {
                    color: c.color,
                    backgroundColor: c.color,
                    outlineColor: c.color,
                    fill: c.color,
                    stroke: c.color,
                    borderColor: c.color,
                    borderTopColor: c.color,
                    borderRightColor: c.color,
                    borderBottomColor: c.color,
                    borderLeftColor: c.color,
                    filter: c.filter,
                    WebkitFilter: c.filter
                }),
                getDefaultValueType = function(t) {
                    return tl[t]
                };

            function getAnimatableNone(t, e) {
                var n, r = getDefaultValueType(t);
                return r !== c.filter && (r = c.complex), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
            }
            var tc = {
                    current: !1
                },
                td = !1;

            function isZero(t) {
                return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function getZeroUnit(t) {
                return "number" == typeof t ? 0 : getAnimatableNone("", t)
            }

            function getValueTransition(t, e) {
                return t[e] || t.default || t
            }

            function startAnimation(t, e, n, r) {
                return void 0 === r && (r = {}), tc.current && (r = {
                    type: !1
                }), e.start(function(o) {
                    var i, a, u, c, p, f, v, m, h, g, y, x = (c = n, v = null !== (p = (f = getValueTransition(r, t)).from) && void 0 !== p ? p : e.get(), m = isAnimatable(t, c), "none" === v && m && "string" == typeof c ? v = getAnimatableNone(t, c) : isZero(v) && "string" == typeof c ? v = getZeroUnit(c) : !Array.isArray(c) && isZero(c) && "string" == typeof v && (c = getZeroUnit(v)), h = isAnimatable(t, v), l.warning(h === m, "You are trying to animate ".concat(t, ' from "').concat(v, '" to "').concat(c, '". ').concat(v, " is not an animatable value - to enable this animation set ").concat(v, " to a value animatable to ").concat(c, " via the `style` property.")), h && m && !1 !== f.type ? function() {
                            var n, r, i, a, u, p, m, h, g, y, x, V, P, E = {
                                from: v,
                                to: c,
                                velocity: e.getVelocity(),
                                onComplete: o,
                                onUpdate: function(t) {
                                    return e.set(t)
                                }
                            };
                            return "inertia" === f.type || "decay" === f.type ? d.inertia(s.__assign(s.__assign({}, E), f)) : d.animate(s.__assign(s.__assign({}, (n = f, r = E, i = t, Array.isArray(r.to) && (null !== (a = n.duration) && void 0 !== a || (n.duration = .8)), Array.isArray(r.to) && null === r.to[0] && (r.to = s.__spreadArray([], s.__read(r.to), !1), r.to[0] = r.from), (u = n).when, u.delay, u.delayChildren, u.staggerChildren, u.staggerDirection, u.repeat, u.repeatType, u.repeatDelay, u.from, Object.keys(s.__rest(u, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"])).length || (n = s.__assign(s.__assign({}, n), getDefaultTransition(i, r.to))), s.__assign(s.__assign({}, r), (m = (p = n).ease, h = p.times, g = p.yoyo, y = p.flip, x = p.loop, V = s.__rest(p, ["ease", "times", "yoyo", "flip", "loop"]), P = s.__assign({}, V), h && (P.offset = h), V.duration && (P.duration = secondsToMilliseconds(V.duration)), V.repeatDelay && (P.repeatDelay = secondsToMilliseconds(V.repeatDelay)), m && (P.ease = Array.isArray(m) && "number" != typeof m[0] ? m.map(easingDefinitionToFunction) : easingDefinitionToFunction(m)), "tween" === V.type && (P.type = "keyframes"), (g || x || y) && (l.warning(!td, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), td = !0, g ? P.repeatType = "reverse" : x ? P.repeatType = "loop" : y && (P.repeatType = "mirror"), P.repeat = x || g || y || V.repeat), "spring" !== V.type && (P.type = "keyframes"), P)))), {
                                onUpdate: function(t) {
                                    var e;
                                    E.onUpdate(t), null === (e = f.onUpdate) || void 0 === e || e.call(f, t)
                                },
                                onComplete: function() {
                                    var t;
                                    E.onComplete(), null === (t = f.onComplete) || void 0 === t || t.call(f)
                                }
                            }))
                        } : function() {
                            var t, n, r = resolveFinalValueInKeyframes(c);
                            return e.set(r), o(), null === (t = null == f ? void 0 : f.onUpdate) || void 0 === t || t.call(f, r), null === (n = null == f ? void 0 : f.onComplete) || void 0 === n || n.call(f), {
                                stop: function() {}
                            }
                        }),
                        V = null !== (u = null !== (a = (getValueTransition(i = r, t) || {}).delay) && void 0 !== a ? a : i.delay) && void 0 !== u ? u : 0,
                        start = function() {
                            return y = x()
                        };
                    return V ? g = window.setTimeout(start, secondsToMilliseconds(V)) : start(),
                        function() {
                            clearTimeout(g), null == y || y.stop()
                        }
                })
            }

            function addUniqueItem(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function removeItem(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            var tp = function() {
                    function SubscriptionManager() {
                        this.subscriptions = []
                    }
                    return SubscriptionManager.prototype.add = function(t) {
                        var e = this;
                        return addUniqueItem(this.subscriptions, t),
                            function() {
                                return removeItem(e.subscriptions, t)
                            }
                    }, SubscriptionManager.prototype.notify = function(t, e, n) {
                        var r = this.subscriptions.length;
                        if (r) {
                            if (1 === r) this.subscriptions[0](t, e, n);
                            else
                                for (var o = 0; o < r; o++) {
                                    var i = this.subscriptions[o];
                                    i && i(t, e, n)
                                }
                        }
                    }, SubscriptionManager.prototype.getSize = function() {
                        return this.subscriptions.length
                    }, SubscriptionManager.prototype.clear = function() {
                        this.subscriptions.length = 0
                    }, SubscriptionManager
                }(),
                tf = function() {
                    function MotionValue(t) {
                        var e = this;
                        this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new tp, this.velocityUpdateSubscribers = new tp, this.renderSubscribers = new tp, this.canTrackVelocity = !1, this.updateAndNotify = function(t, n) {
                            void 0 === n && (n = !0), e.prev = e.current, e.current = t;
                            var r = p.getFrameData(),
                                o = r.delta,
                                i = r.timestamp;
                            e.lastUpdated !== i && (e.timeDelta = o, e.lastUpdated = i, h.default.postRender(e.scheduleVelocityCheck)), e.prev !== e.current && e.updateSubscribers.notify(e.current), e.velocityUpdateSubscribers.getSize() && e.velocityUpdateSubscribers.notify(e.getVelocity()), n && e.renderSubscribers.notify(e.current)
                        }, this.scheduleVelocityCheck = function() {
                            return h.default.postRender(e.velocityCheck)
                        }, this.velocityCheck = function(t) {
                            t.timestamp !== e.lastUpdated && (e.prev = e.current, e.velocityUpdateSubscribers.notify(e.getVelocity()))
                        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = !isNaN(parseFloat(this.current))
                    }
                    return MotionValue.prototype.onChange = function(t) {
                        return this.updateSubscribers.add(t)
                    }, MotionValue.prototype.clearListeners = function() {
                        this.updateSubscribers.clear()
                    }, MotionValue.prototype.onRenderRequest = function(t) {
                        return t(this.get()), this.renderSubscribers.add(t)
                    }, MotionValue.prototype.attach = function(t) {
                        this.passiveEffect = t
                    }, MotionValue.prototype.set = function(t, e) {
                        void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                    }, MotionValue.prototype.get = function() {
                        return this.current
                    }, MotionValue.prototype.getPrevious = function() {
                        return this.prev
                    }, MotionValue.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? d.velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, MotionValue.prototype.start = function(t) {
                        var e = this;
                        return this.stop(), new Promise(function(n) {
                            e.hasAnimated = !0, e.stopAnimation = t(n)
                        }).then(function() {
                            return e.clearAnimation()
                        })
                    }, MotionValue.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, MotionValue.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, MotionValue.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, MotionValue.prototype.destroy = function() {
                        this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                    }, MotionValue
                }();

            function motionValue(t) {
                return new tf(t)
            }
            var testValueType = function(t) {
                    return function(e) {
                        return e.test(t)
                    }
                },
                tv = [c.number, c.px, c.percent, c.degrees, c.vw, c.vh, {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                }],
                findDimensionValueType = function(t) {
                    return tv.find(testValueType(t))
                },
                tm = s.__spreadArray(s.__spreadArray([], s.__read(tv), !1), [c.color, c.complex], !1);

            function setTarget(t, e) {
                var n = resolveVariant(t, e),
                    r = n ? t.makeTargetAnimatable(n, !1) : {},
                    o = r.transitionEnd,
                    i = void 0 === o ? {} : o;
                r.transition;
                var a = s.__rest(r, ["transitionEnd", "transition"]);
                for (var u in a = s.__assign(s.__assign({}, a), i)) {
                    var l = resolveFinalValueInKeyframes(a[u]);
                    t.hasValue(u) ? t.getValue(u).set(l) : t.addValue(u, motionValue(l))
                }
            }

            function setVariants(t, e) {
                s.__spreadArray([], s.__read(e), !1).reverse().forEach(function(n) {
                    var r, o = t.getVariant(n);
                    o && setTarget(t, o), null === (r = t.variantChildren) || void 0 === r || r.forEach(function(t) {
                        setVariants(t, e)
                    })
                })
            }

            function checkTargetForNewValues(t, e, n) {
                var r, o, i, a = Object.keys(e).filter(function(e) {
                        return !t.hasValue(e)
                    }),
                    s = a.length;
                if (s)
                    for (var u = 0; u < s; u++) {
                        var l, d, p, f = a[u],
                            v = e[f],
                            m = null;
                        Array.isArray(v) && (m = v[0]), null === m && (m = null !== (o = null !== (r = n[f]) && void 0 !== r ? r : t.readValue(f)) && void 0 !== o ? o : e[f]), null != m && ("string" == typeof m && (l = m, /^\-?\d*\.?\d+$/.test(l) || (d = m, /^0[^.\s]+$/.test(d))) ? m = parseFloat(m) : (p = m, !tm.find(testValueType(p)) && c.complex.test(v) && (m = getAnimatableNone(f, v))), t.addValue(f, motionValue(m)), null !== (i = n[f]) && void 0 !== i || (n[f] = m), t.setBaseTarget(f, m))
                    }
            }

            function getOrigin(t, e, n) {
                var r, o, i = {};
                for (var a in t) i[a] = null !== (r = function(t, e) {
                    if (e) return (e[t] || e.default || e).from
                }(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
                return i
            }

            function animateVisualElement(t, e, n) {
                if (void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
                    var r;
                    r = Promise.all(e.map(function(e) {
                        return animateVariant(t, e, n)
                    }))
                } else if ("string" == typeof e) r = animateVariant(t, e, n);
                else {
                    var o = "function" == typeof e ? resolveVariant(t, e, n.custom) : e;
                    r = animateTarget(t, o, n)
                }
                return r.then(function() {
                    return t.notifyAnimationComplete(e)
                })
            }

            function animateVariant(t, e, n) {
                void 0 === n && (n = {});
                var r, o = resolveVariant(t, e, n.custom),
                    i = (o || {}).transition,
                    a = void 0 === i ? t.getDefaultTransition() || {} : i;
                n.transitionOverride && (a = n.transitionOverride);
                var u = o ? function() {
                        return animateTarget(t, o, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    l = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
                        void 0 === r && (r = 0);
                        var o, i, u, l, c, d, p, f = a.delayChildren;
                        return o = (void 0 === f ? 0 : f) + r, i = a.staggerChildren, u = a.staggerDirection, l = n, void 0 === o && (o = 0), void 0 === i && (i = 0), void 0 === u && (u = 1), c = [], d = (t.variantChildren.size - 1) * i, p = 1 === u ? function(t) {
                            return void 0 === t && (t = 0), t * i
                        } : function(t) {
                            return void 0 === t && (t = 0), d - t * i
                        }, Array.from(t.variantChildren).sort(sortByTreeOrder).forEach(function(t, n) {
                            c.push(animateVariant(t, e, s.__assign(s.__assign({}, l), {
                                delay: o + p(n)
                            })).then(function() {
                                return t.notifyAnimationComplete(e)
                            }))
                        }), Promise.all(c)
                    } : function() {
                        return Promise.resolve()
                    },
                    c = a.when;
                if (!c) return Promise.all([u(), l(n.delay)]);
                var d = s.__read("beforeChildren" === c ? [u, l] : [l, u], 2),
                    p = d[0],
                    f = d[1];
                return p().then(f)
            }

            function animateTarget(t, e, n) {
                var r, o = void 0 === n ? {} : n,
                    i = o.delay,
                    a = void 0 === i ? 0 : i,
                    u = o.transitionOverride,
                    l = o.type,
                    c = t.makeTargetAnimatable(e),
                    d = c.transition,
                    p = void 0 === d ? t.getDefaultTransition() : d,
                    f = c.transitionEnd,
                    v = s.__rest(c, ["transition", "transitionEnd"]);
                u && (p = u);
                var m = [],
                    h = l && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[l]);
                for (var g in v) {
                    var y = t.getValue(g),
                        x = v[g];
                    if (!(!y || void 0 === x || h && function(t, e) {
                            var n = t.protectedKeys,
                                r = t.needsAnimating,
                                o = n.hasOwnProperty(e) && !0 !== r[e];
                            return r[e] = !1, o
                        }(h, g))) {
                        var V = s.__assign({
                            delay: a
                        }, p);
                        t.shouldReduceMotion && isTransformProp(g) && (V = s.__assign(s.__assign({}, V), {
                            type: !1,
                            delay: 0
                        }));
                        var P = startAnimation(g, y, x, V);
                        m.push(P)
                    }
                }
                return Promise.all(m).then(function() {
                    f && setTarget(t, f)
                })
            }

            function sortByTreeOrder(t, e) {
                return t.sortNodePosition(e)
            }
            var th = [e.AnimationType.Animate, e.AnimationType.InView, e.AnimationType.Focus, e.AnimationType.Hover, e.AnimationType.Tap, e.AnimationType.Drag, e.AnimationType.Exit],
                tg = s.__spreadArray([], s.__read(th), !1).reverse(),
                ty = th.length;

            function createTypeState(t) {
                return void 0 === t && (t = !1), {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var tx = {
                    animation: makeRenderlessComponent(function(t) {
                        var n = t.visualElement,
                            r = t.animate;
                        n.animationState || (n.animationState = function(t) {
                            var n, animate = function(e) {
                                    return Promise.all(e.map(function(e) {
                                        return animateVisualElement(t, e.animation, e.options)
                                    }))
                                },
                                r = ((n = {})[e.AnimationType.Animate] = createTypeState(!0), n[e.AnimationType.InView] = createTypeState(), n[e.AnimationType.Hover] = createTypeState(), n[e.AnimationType.Tap] = createTypeState(), n[e.AnimationType.Drag] = createTypeState(), n[e.AnimationType.Focus] = createTypeState(), n[e.AnimationType.Exit] = createTypeState(), n),
                                o = {},
                                i = !0,
                                buildResolvedTypeValues = function(e, n) {
                                    var r = resolveVariant(t, n);
                                    if (r) {
                                        r.transition;
                                        var o = r.transitionEnd,
                                            i = s.__rest(r, ["transition", "transitionEnd"]);
                                        e = s.__assign(s.__assign(s.__assign({}, e), i), o)
                                    }
                                    return e
                                };

                            function animateChanges(e, n) {
                                for (var a, u = t.getProps(), l = t.getVariantContext(!0) || {}, c = [], d = new Set, p = {}, f = 1 / 0, v = 0; v < ty; v++) ! function(o) {
                                    var v, m = tg[o],
                                        h = r[m],
                                        g = null !== (a = u[m]) && void 0 !== a ? a : l[m],
                                        y = isVariantLabel(g),
                                        x = m === n ? h.isActive : null;
                                    !1 === x && (f = o);
                                    var V = g === l[m] && g !== u[m] && y;
                                    if (V && i && t.manuallyAnimateOnMount && (V = !1), h.protectedKeys = s.__assign({}, p), !(!h.isActive && null === x || !g && !h.prevProp || isAnimationControls(g)) && "boolean" != typeof g) {
                                        var P = (v = h.prevProp, "string" == typeof g ? g !== v : !!isVariantLabels(g) && !shallowCompare(g, v)),
                                            E = P || m === n && h.isActive && !V && y || o > f && y,
                                            T = Array.isArray(g) ? g : [g],
                                            S = T.reduce(buildResolvedTypeValues, {});
                                        !1 === x && (S = {});
                                        var A = h.prevResolvedValues,
                                            _ = void 0 === A ? {} : A,
                                            C = s.__assign(s.__assign({}, _), S),
                                            markToAnimate = function(t) {
                                                E = !0, d.delete(t), h.needsAnimating[t] = !0
                                            };
                                        for (var b in C) {
                                            var D = S[b],
                                                w = _[b];
                                            p.hasOwnProperty(b) || (D !== w ? isKeyframesTarget(D) && isKeyframesTarget(w) ? !shallowCompare(D, w) || P ? markToAnimate(b) : h.protectedKeys[b] = !0 : void 0 !== D ? markToAnimate(b) : d.add(b) : void 0 !== D && d.has(b) ? markToAnimate(b) : h.protectedKeys[b] = !0)
                                        }
                                        h.prevProp = g, h.prevResolvedValues = S, h.isActive && (p = s.__assign(s.__assign({}, p), S)), i && t.blockInitialAnimation && (E = !1), E && !V && c.push.apply(c, s.__spreadArray([], s.__read(T.map(function(t) {
                                            return {
                                                animation: t,
                                                options: s.__assign({
                                                    type: m
                                                }, e)
                                            }
                                        })), !1))
                                    }
                                }(v);
                                if (o = s.__assign({}, p), d.size) {
                                    var m = {};
                                    d.forEach(function(e) {
                                        var n = t.getBaseTarget(e);
                                        void 0 !== n && (m[e] = n)
                                    }), c.push({
                                        animation: m
                                    })
                                }
                                var h = !!c.length;
                                return i && !1 === u.initial && !t.manuallyAnimateOnMount && (h = !1), i = !1, h ? animate(c) : Promise.resolve()
                            }
                            return {
                                isAnimated: function(t) {
                                    return void 0 !== o[t]
                                },
                                animateChanges: animateChanges,
                                setActive: function(e, n, o) {
                                    if (r[e].isActive === n) return Promise.resolve();
                                    null === (i = t.variantChildren) || void 0 === i || i.forEach(function(t) {
                                        var r;
                                        return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                                    }), r[e].isActive = n;
                                    var i, a = animateChanges(o, e);
                                    for (var s in r) r[s].protectedKeys = {};
                                    return a
                                },
                                setAnimateFunction: function(e) {
                                    animate = e(t)
                                },
                                getState: function() {
                                    return r
                                }
                            }
                        }(n)), isAnimationControls(r) && u.useEffect(function() {
                            return r.subscribe(n)
                        }, [r])
                    }),
                    exit: makeRenderlessComponent(function(t) {
                        var n = t.custom,
                            r = t.visualElement,
                            o = s.__read(usePresence(), 2),
                            i = o[0],
                            a = o[1],
                            l = u.useContext(S);
                        u.useEffect(function() {
                            r.isPresent = i;
                            var t, o, s = null === (t = r.animationState) || void 0 === t ? void 0 : t.setActive(e.AnimationType.Exit, !i, {
                                custom: null !== (o = null == l ? void 0 : l.custom) && void 0 !== o ? o : n
                            });
                            i || null == s || s.then(a)
                        }, [i])
                    })
                },
                tV = function() {
                    function PanSession(t, e, n) {
                        var r = this,
                            o = (void 0 === n ? {} : n).transformPagePoint;
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                                    var t = getPanInfo(r.lastMoveEventInfo, r.history),
                                        e = null !== r.startEvent,
                                        n = d.distance(t.offset, {
                                            x: 0,
                                            y: 0
                                        }) >= 3;
                                    if (e || n) {
                                        var o = t.point,
                                            i = p.getFrameData().timestamp;
                                        r.history.push(s.__assign(s.__assign({}, o), {
                                            timestamp: i
                                        }));
                                        var a = r.handlers,
                                            u = a.onStart,
                                            l = a.onMove;
                                        e || (u && u(r.lastMoveEvent, t), r.startEvent = r.lastMoveEvent), l && l(r.lastMoveEvent, t)
                                    }
                                }
                            }, this.handlePointerMove = function(t, e) {
                                if (r.lastMoveEvent = t, r.lastMoveEventInfo = transformPoint(e, r.transformPagePoint), isMouseEvent(t) && 0 === t.buttons) {
                                    r.handlePointerUp(t, e);
                                    return
                                }
                                h.default.update(r.updatePoint, !0)
                            }, this.handlePointerUp = function(t, e) {
                                r.end();
                                var n = r.handlers,
                                    o = n.onEnd,
                                    i = n.onSessionEnd,
                                    a = getPanInfo(transformPoint(e, r.transformPagePoint), r.history);
                                r.startEvent && o && o(t, a), i && i(t, a)
                            }, !t.touches || !(t.touches.length > 1)) {
                            this.handlers = e, this.transformPagePoint = o;
                            var i = transformPoint(extractEventInfo(t), this.transformPagePoint),
                                a = i.point,
                                u = p.getFrameData().timestamp;
                            this.history = [s.__assign(s.__assign({}, a), {
                                timestamp: u
                            })];
                            var l = e.onSessionStart;
                            l && l(t, getPanInfo(i, this.history)), this.removeListeners = d.pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp))
                        }
                    }
                    return PanSession.prototype.updateHandlers = function(t) {
                        this.handlers = t
                    }, PanSession.prototype.end = function() {
                        this.removeListeners && this.removeListeners(), p.cancelSync.update(this.updatePoint)
                    }, PanSession
                }();

            function transformPoint(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function subtractPoint(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function getPanInfo(t, e) {
                var n = t.point;
                return {
                    point: n,
                    delta: subtractPoint(n, lastDevicePoint(e)),
                    offset: subtractPoint(n, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        for (var n = t.length - 1, r = null, o = lastDevicePoint(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > secondsToMilliseconds(.1)));) n--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        var i = (o.timestamp - r.timestamp) / 1e3;
                        if (0 === i) return {
                            x: 0,
                            y: 0
                        };
                        var a = {
                            x: (o.x - r.x) / i,
                            y: (o.y - r.y) / i
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(e, 0)
                }
            }

            function lastDevicePoint(t) {
                return t[t.length - 1]
            }

            function calcLength(t) {
                return t.max - t.min
            }

            function isNear(t, e, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = .01), d.distance(t, e) < n
            }

            function calcAxisDelta(t, e, n, r) {
                void 0 === r && (r = .5), t.origin = r, t.originPoint = d.mix(e.min, e.max, t.origin), t.scale = calcLength(n) / calcLength(e), (isNear(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = d.mix(n.min, n.max, t.origin) - t.originPoint, (isNear(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function calcBoxDelta(t, e, n, r) {
                calcAxisDelta(t.x, e.x, n.x, null == r ? void 0 : r.originX), calcAxisDelta(t.y, e.y, n.y, null == r ? void 0 : r.originY)
            }

            function calcRelativeAxis(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + calcLength(e)
            }

            function calcRelativeAxisPosition(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + calcLength(e)
            }

            function calcRelativePosition(t, e, n) {
                calcRelativeAxisPosition(t.x, e.x, n.x), calcRelativeAxisPosition(t.y, e.y, n.y)
            }

            function calcRelativeAxisConstraints(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function calcViewportAxisConstraints(t, e) {
                var n, r = e.min - t.min,
                    o = e.max - t.max;
                return e.max - e.min < t.max - t.min && (r = (n = s.__read([o, r], 2))[0], o = n[1]), {
                    min: r,
                    max: o
                }
            }

            function resolveAxisElastic(t, e, n) {
                return {
                    min: resolvePointElastic(t, e),
                    max: resolvePointElastic(t, n)
                }
            }

            function resolvePointElastic(t, e) {
                var n;
                return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
            }
            var createAxisDelta = function() {
                    return {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                },
                createDelta = function() {
                    return {
                        x: createAxisDelta(),
                        y: createAxisDelta()
                    }
                },
                createAxis = function() {
                    return {
                        min: 0,
                        max: 0
                    }
                },
                createBox = function() {
                    return {
                        x: createAxis(),
                        y: createAxis()
                    }
                };

            function eachAxis(t) {
                return [t("x"), t("y")]
            }

            function convertBoundingBoxToBox(t) {
                var e = t.top;
                return {
                    x: {
                        min: t.left,
                        max: t.right
                    },
                    y: {
                        min: e,
                        max: t.bottom
                    }
                }
            }

            function isIdentityScale(t) {
                return void 0 === t || 1 === t
            }

            function hasScale(t) {
                var e = t.scale,
                    n = t.scaleX,
                    r = t.scaleY;
                return !isIdentityScale(e) || !isIdentityScale(n) || !isIdentityScale(r)
            }

            function hasTransform(t) {
                var e, n;
                return hasScale(t) || (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function applyPointDelta(t, e, n, r, o) {
                return void 0 !== o && (t = r + o * (t - r)), r + n * (t - r) + e
            }

            function applyAxisDelta(t, e, n, r, o) {
                void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = applyPointDelta(t.min, e, n, r, o), t.max = applyPointDelta(t.max, e, n, r, o)
            }

            function applyBoxDelta(t, e) {
                var n = e.x,
                    r = e.y;
                applyAxisDelta(t.x, n.translate, n.scale, n.originPoint), applyAxisDelta(t.y, r.translate, r.scale, r.originPoint)
            }

            function translateAxis(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function transformAxis(t, e, n) {
                var r = s.__read(n, 3),
                    o = r[0],
                    i = r[1],
                    a = r[2],
                    u = void 0 !== e[a] ? e[a] : .5,
                    l = d.mix(t.min, t.max, u);
                applyAxisDelta(t, e[o], e[i], l, e.scale)
            }
            var tP = ["x", "scaleX", "originX"],
                tE = ["y", "scaleY", "originY"];

            function transformBox(t, e) {
                transformAxis(t.x, e, tP), transformAxis(t.y, e, tE)
            }

            function measureViewportBox(t, e) {
                return convertBoundingBoxToBox(function(t, e) {
                    if (!e) return t;
                    var n = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var tT = new WeakMap,
                tS = function() {
                    function VisualElementDragControls(t) {
                        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.visualElement = t
                    }
                    return VisualElementDragControls.prototype.start = function(t, n) {
                        var r = this,
                            o = (void 0 === n ? {} : n).snapToCursor,
                            i = void 0 !== o && o;
                        !1 !== this.visualElement.isPresent && (this.panSession = new tV(t, {
                            onSessionStart: function(t) {
                                r.stopAnimation(), i && r.snapToCursor(extractEventInfo(t, "page").point)
                            },
                            onStart: function(t, n) {
                                var o, i = r.getProps(),
                                    a = i.drag,
                                    s = i.dragPropagation,
                                    u = i.onDragStart;
                                (!a || s || (r.openGlobalLock && r.openGlobalLock(), r.openGlobalLock = getGlobalLock(a), r.openGlobalLock)) && (r.isDragging = !0, r.currentDirection = null, r.resolveConstraints(), r.visualElement.projection && (r.visualElement.projection.isAnimationBlocked = !0, r.visualElement.projection.target = void 0), eachAxis(function(t) {
                                    var e, n, o = r.getAxisMotionValue(t).get() || 0;
                                    if (c.percent.test(o)) {
                                        var i = null === (n = null === (e = r.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.actual[t];
                                        i && (o = calcLength(i) * (parseFloat(o) / 100))
                                    }
                                    r.originPoint[t] = o
                                }), null == u || u(t, n), null === (o = r.visualElement.animationState) || void 0 === o || o.setActive(e.AnimationType.Drag, !0))
                            },
                            onMove: function(t, e) {
                                var n = r.getProps(),
                                    o = n.dragPropagation,
                                    i = n.dragDirectionLock,
                                    a = n.onDirectionLock,
                                    s = n.onDrag;
                                if (o || r.openGlobalLock) {
                                    var u, l, c = e.offset;
                                    if (i && null === r.currentDirection) {
                                        r.currentDirection = (void 0 === u && (u = 10), l = null, Math.abs(c.y) > u ? l = "y" : Math.abs(c.x) > u && (l = "x"), l), null !== r.currentDirection && (null == a || a(r.currentDirection));
                                        return
                                    }
                                    r.updateAxis("x", e.point, c), r.updateAxis("y", e.point, c), r.visualElement.syncRender(), null == s || s(t, e)
                                }
                            },
                            onSessionEnd: function(t, e) {
                                return r.stop(t, e)
                            }
                        }, {
                            transformPagePoint: this.visualElement.getTransformPagePoint()
                        }))
                    }, VisualElementDragControls.prototype.stop = function(t, e) {
                        var n = this.isDragging;
                        if (this.cancel(), n) {
                            var r = e.velocity;
                            this.startAnimation(r);
                            var o = this.getProps().onDragEnd;
                            null == o || o(t, e)
                        }
                    }, VisualElementDragControls.prototype.cancel = function() {
                        var t, n;
                        this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(e.AnimationType.Drag, !1)
                    }, VisualElementDragControls.prototype.updateAxis = function(t, e, n) {
                        var r = this.getProps().drag;
                        if (n && shouldDrag(t, r, this.currentDirection)) {
                            var o, i, a, s, u, l = this.getAxisMotionValue(t),
                                c = this.originPoint[t] + n[t];
                            this.constraints && this.constraints[t] && (o = c, i = this.constraints[t], a = this.elastic[t], s = i.min, u = i.max, void 0 !== s && o < s ? o = a ? d.mix(s, o, a.min) : Math.max(o, s) : void 0 !== u && o > u && (o = a ? d.mix(u, o, a.max) : Math.min(o, u)), c = o), l.set(c)
                        }
                    }, VisualElementDragControls.prototype.resolveConstraints = function() {
                        var t, e, n, r, o, i, a = this,
                            s = this.getProps(),
                            u = s.dragConstraints,
                            l = s.dragElastic,
                            c = (this.visualElement.projection || {}).layout,
                            d = this.constraints;
                        u && isRefObject(u) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : u && c ? this.constraints = (t = c.actual, e = u.top, n = u.left, r = u.bottom, o = u.right, {
                            x: calcRelativeAxisConstraints(t.x, n, o),
                            y: calcRelativeAxisConstraints(t.y, e, r)
                        }) : this.constraints = !1, this.elastic = (void 0 === (i = l) && (i = .35), !1 === i ? i = 0 : !0 === i && (i = .35), {
                            x: resolveAxisElastic(i, "left", "right"),
                            y: resolveAxisElastic(i, "top", "bottom")
                        }), d !== this.constraints && c && this.constraints && !this.hasMutatedConstraints && eachAxis(function(t) {
                            if (a.getAxisMotionValue(t)) {
                                var e, n, r;
                                a.constraints[t] = (e = c.actual[t], n = a.constraints[t], r = {}, void 0 !== n.min && (r.min = n.min - e.min), void 0 !== n.max && (r.max = n.max - e.min), r)
                            }
                        })
                    }, VisualElementDragControls.prototype.resolveRefConstraints = function() {
                        var t = this.getProps(),
                            e = t.dragConstraints,
                            n = t.onMeasureDragConstraints;
                        if (!e || !isRefObject(e)) return !1;
                        var r = e.current;
                        l.invariant(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                        var o = this.visualElement.projection;
                        if (!o || !o.layout) return !1;
                        var i = (s = o.root, u = measureViewportBox(r, this.visualElement.getTransformPagePoint()), (c = s.scroll) && (translateAxis(u.x, c.x), translateAxis(u.y, c.y)), u),
                            a = {
                                x: calcViewportAxisConstraints((d = o.layout.actual).x, i.x),
                                y: calcViewportAxisConstraints(d.y, i.y)
                            };
                        if (n) {
                            var s, u, c, d, p, f, v, m = n((f = (p = a).x, {
                                top: (v = p.y).min,
                                right: f.max,
                                bottom: v.max,
                                left: f.min
                            }));
                            this.hasMutatedConstraints = !!m, m && (a = convertBoundingBoxToBox(m))
                        }
                        return a
                    }, VisualElementDragControls.prototype.startAnimation = function(t) {
                        var e = this,
                            n = this.getProps(),
                            r = n.drag,
                            o = n.dragMomentum,
                            i = n.dragElastic,
                            a = n.dragTransition,
                            u = n.dragSnapToOrigin,
                            l = n.onDragTransitionEnd,
                            c = this.constraints || {};
                        return Promise.all(eachAxis(function(n) {
                            if (shouldDrag(n, r, e.currentDirection)) {
                                var l, d = null !== (l = null == c ? void 0 : c[n]) && void 0 !== l ? l : {};
                                u && (d = {
                                    min: 0,
                                    max: 0
                                });
                                var p = s.__assign(s.__assign({
                                    type: "inertia",
                                    velocity: o ? t[n] : 0,
                                    bounceStiffness: i ? 200 : 1e6,
                                    bounceDamping: i ? 40 : 1e7,
                                    timeConstant: 750,
                                    restDelta: 1,
                                    restSpeed: 10
                                }, a), d);
                                return e.startAxisValueAnimation(n, p)
                            }
                        })).then(l)
                    }, VisualElementDragControls.prototype.startAxisValueAnimation = function(t, e) {
                        var n = this.getAxisMotionValue(t);
                        return startAnimation(t, n, 0, e)
                    }, VisualElementDragControls.prototype.stopAnimation = function() {
                        var t = this;
                        eachAxis(function(e) {
                            return t.getAxisMotionValue(e).stop()
                        })
                    }, VisualElementDragControls.prototype.getAxisMotionValue = function(t) {
                        var e, n, r = "_drag" + t.toUpperCase();
                        return this.visualElement.getProps()[r] || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
                    }, VisualElementDragControls.prototype.snapToCursor = function(t) {
                        var e = this;
                        eachAxis(function(n) {
                            if (shouldDrag(n, e.getProps().drag, e.currentDirection)) {
                                var r = e.visualElement.projection,
                                    o = e.getAxisMotionValue(n);
                                if (r && r.layout) {
                                    var i = r.layout.actual[n],
                                        a = i.min,
                                        s = i.max;
                                    o.set(t[n] - d.mix(a, s, .5))
                                }
                            }
                        })
                    }, VisualElementDragControls.prototype.scalePositionWithinConstraints = function() {
                        var t, e = this,
                            n = this.getProps(),
                            r = n.drag,
                            o = n.dragConstraints,
                            i = this.visualElement.projection;
                        if (isRefObject(o) && i && this.constraints) {
                            this.stopAnimation();
                            var a = {
                                x: 0,
                                y: 0
                            };
                            eachAxis(function(t) {
                                var n = e.getAxisMotionValue(t);
                                if (n) {
                                    var r, o, i, s, u, l = n.get();
                                    a[t] = (r = {
                                        min: l,
                                        max: l
                                    }, o = e.constraints[t], i = .5, s = calcLength(r), (u = calcLength(o)) > s ? i = d.progress(o.min, o.max - s, r.min) : s > u && (i = d.progress(r.min, r.max - u, o.min)), d.clamp(0, 1, i))
                                }
                            });
                            var s = this.visualElement.getProps().transformTemplate;
                            this.visualElement.getInstance().style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), eachAxis(function(t) {
                                if (shouldDrag(t, r, null)) {
                                    var n = e.getAxisMotionValue(t),
                                        o = e.constraints[t],
                                        i = o.min,
                                        s = o.max;
                                    n.set(d.mix(i, s, a[t]))
                                }
                            })
                        }
                    }, VisualElementDragControls.prototype.addListeners = function() {
                        var t, e = this;
                        tT.set(this.visualElement, this);
                        var n = addPointerEvent(this.visualElement.getInstance(), "pointerdown", function(t) {
                                var n = e.getProps(),
                                    r = n.drag,
                                    o = n.dragListener;
                                r && (void 0 === o || o) && e.start(t)
                            }),
                            measureDragConstraints = function() {
                                isRefObject(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
                            },
                            r = this.visualElement.projection,
                            o = r.addEventListener("measure", measureDragConstraints);
                        r && !r.layout && (null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout()), measureDragConstraints();
                        var i = addDomEvent(window, "resize", function() {
                            return e.scalePositionWithinConstraints()
                        });
                        return r.addEventListener("didUpdate", function(t) {
                                var n = t.delta,
                                    r = t.hasLayoutChanged;
                                e.isDragging && r && (eachAxis(function(t) {
                                    var r = e.getAxisMotionValue(t);
                                    r && (e.originPoint[t] += n[t].translate, r.set(r.get() + n[t].translate))
                                }), e.visualElement.syncRender())
                            }),
                            function() {
                                i(), n(), o()
                            }
                    }, VisualElementDragControls.prototype.getProps = function() {
                        var t = this.visualElement.getProps(),
                            e = t.drag,
                            n = t.dragDirectionLock,
                            r = t.dragPropagation,
                            o = t.dragConstraints,
                            i = t.dragElastic,
                            a = t.dragMomentum;
                        return s.__assign(s.__assign({}, t), {
                            drag: void 0 !== e && e,
                            dragDirectionLock: void 0 !== n && n,
                            dragPropagation: void 0 !== r && r,
                            dragConstraints: void 0 !== o && o,
                            dragElastic: void 0 === i ? .35 : i,
                            dragMomentum: void 0 === a || a
                        })
                    }, VisualElementDragControls
                }();

            function shouldDrag(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            var tA = {
                    pan: makeRenderlessComponent(function(t) {
                        var e = t.onPan,
                            n = t.onPanStart,
                            r = t.onPanEnd,
                            o = t.onPanSessionStart,
                            i = t.visualElement,
                            a = e || n || r || o,
                            s = u.useRef(null),
                            l = u.useContext(E).transformPagePoint,
                            c = {
                                onSessionStart: o,
                                onStart: n,
                                onMove: e,
                                onEnd: function(t, e) {
                                    s.current = null, r && r(t, e)
                                }
                            };
                        u.useEffect(function() {
                            null !== s.current && s.current.updateHandlers(c)
                        }), usePointerEvent(i, "pointerdown", a && function(t) {
                            s.current = new tV(t, c, {
                                transformPagePoint: l
                            })
                        }), useUnmountEffect(function() {
                            return s.current && s.current.end()
                        })
                    }),
                    drag: makeRenderlessComponent(function(t) {
                        var e = t.dragControls,
                            n = t.visualElement,
                            r = useConstant(function() {
                                return new tS(n)
                            });
                        u.useEffect(function() {
                            return e && e.subscribe(r)
                        }, [r, e]), u.useEffect(function() {
                            return r.addListeners()
                        }, [r])
                    })
                },
                t_ = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"],
                visualElement = function(t) {
                    var e = t.treeType,
                        n = void 0 === e ? "" : e,
                        r = t.build,
                        o = t.getBaseTarget,
                        i = t.makeTargetAnimatable,
                        a = t.measureViewportBox,
                        u = t.render,
                        l = t.readValueFromInstance,
                        c = t.removeValueFromRenderState,
                        d = t.sortNodePosition,
                        f = t.scrapeMotionValuesFromProps;
                    return function(t, e) {
                        var v, m, g, y, x, V = t.parent,
                            P = t.props,
                            E = t.presenceId,
                            T = t.blockInitialAnimation,
                            S = t.visualState,
                            A = t.shouldReduceMotion;
                        void 0 === e && (e = {});
                        var _ = !1,
                            C = S.latestValues,
                            b = S.renderState,
                            D = (v = t_.map(function() {
                                return new tp
                            }), m = {}, g = {
                                clearAllListeners: function() {
                                    return v.forEach(function(t) {
                                        return t.clear()
                                    })
                                },
                                updatePropListeners: function(t) {
                                    t_.forEach(function(e) {
                                        var n, r = "on" + e,
                                            o = t[r];
                                        null === (n = m[e]) || void 0 === n || n.call(m), o && (m[e] = g[r](o))
                                    })
                                }
                            }, v.forEach(function(t, e) {
                                g["on" + t_[e]] = function(e) {
                                    return t.add(e)
                                }, g["notify" + t_[e]] = function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    return t.notify.apply(t, s.__spreadArray([], s.__read(e), !1))
                                }
                            }), g),
                            w = new Map,
                            M = new Map,
                            L = {},
                            R = s.__assign({}, C);

                        function render() {
                            y && _ && (triggerBuild(), u(y, b, P.style, N.projection))
                        }

                        function triggerBuild() {
                            r(N, b, C, e, P)
                        }

                        function update() {
                            D.notifyUpdate(C)
                        }

                        function bindToMotionValue(t, e) {
                            var n = e.onChange(function(e) {
                                    C[t] = e, P.onUpdate && h.default.update(update, !1, !0)
                                }),
                                r = e.onRenderRequest(N.scheduleRender);
                            M.set(t, function() {
                                n(), r()
                            })
                        }
                        var k = f(P);
                        for (var I in k) {
                            var j = k[I];
                            void 0 !== C[I] && isMotionValue(j) && j.set(C[I], !1)
                        }
                        var F = checkIfControllingVariants(P),
                            B = checkIfVariantNode(P),
                            N = s.__assign(s.__assign({
                                treeType: n,
                                current: null,
                                depth: V ? V.depth + 1 : 0,
                                parent: V,
                                children: new Set,
                                presenceId: E,
                                shouldReduceMotion: A,
                                variantChildren: B ? new Set : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: !!(null == V ? void 0 : V.isMounted()),
                                blockInitialAnimation: T,
                                isMounted: function() {
                                    return !!y
                                },
                                mount: function(t) {
                                    _ = !0, y = N.current = t, N.projection && N.projection.mount(t), B && V && !F && (x = null == V ? void 0 : V.addVariantChild(N)), w.forEach(function(t, e) {
                                        return bindToMotionValue(e, t)
                                    }), null == V || V.children.add(N), N.setProps(P)
                                },
                                unmount: function() {
                                    var t;
                                    null === (t = N.projection) || void 0 === t || t.unmount(), p.cancelSync.update(update), p.cancelSync.render(render), M.forEach(function(t) {
                                        return t()
                                    }), null == x || x(), null == V || V.children.delete(N), D.clearAllListeners(), y = void 0, _ = !1
                                },
                                addVariantChild: function(t) {
                                    var e, n = N.getClosestVariantNode();
                                    if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                                        function() {
                                            return n.variantChildren.delete(t)
                                        }
                                },
                                sortNodePosition: function(t) {
                                    return d && n === t.treeType ? d(N.getInstance(), t.getInstance()) : 0
                                },
                                getClosestVariantNode: function() {
                                    return B ? N : null == V ? void 0 : V.getClosestVariantNode()
                                },
                                getLayoutId: function() {
                                    return P.layoutId
                                },
                                getInstance: function() {
                                    return y
                                },
                                getStaticValue: function(t) {
                                    return C[t]
                                },
                                setStaticValue: function(t, e) {
                                    return C[t] = e
                                },
                                getLatestValues: function() {
                                    return C
                                },
                                setVisibility: function(t) {
                                    N.isVisible !== t && (N.isVisible = t, N.scheduleRender())
                                },
                                makeTargetAnimatable: function(t, e) {
                                    return void 0 === e && (e = !0), i(N, t, P, e)
                                },
                                measureViewportBox: function() {
                                    return a(y, P)
                                },
                                addValue: function(t, e) {
                                    N.hasValue(t) && N.removeValue(t), w.set(t, e), C[t] = e.get(), bindToMotionValue(t, e)
                                },
                                removeValue: function(t) {
                                    var e;
                                    w.delete(t), null === (e = M.get(t)) || void 0 === e || e(), M.delete(t), delete C[t], c(t, b)
                                },
                                hasValue: function(t) {
                                    return w.has(t)
                                },
                                getValue: function(t, e) {
                                    var n = w.get(t);
                                    return void 0 === n && void 0 !== e && (n = motionValue(e), N.addValue(t, n)), n
                                },
                                forEachValue: function(t) {
                                    return w.forEach(t)
                                },
                                readValue: function(t) {
                                    var n;
                                    return null !== (n = C[t]) && void 0 !== n ? n : l(y, t, e)
                                },
                                setBaseTarget: function(t, e) {
                                    R[t] = e
                                },
                                getBaseTarget: function(t) {
                                    if (o) {
                                        var e = o(P, t);
                                        if (void 0 !== e && !isMotionValue(e)) return e
                                    }
                                    return R[t]
                                }
                            }, D), {
                                build: function() {
                                    return triggerBuild(), b
                                },
                                scheduleRender: function() {
                                    h.default.render(render, !1, !0)
                                },
                                syncRender: render,
                                setProps: function(t) {
                                    (t.transformTemplate || P.transformTemplate) && N.scheduleRender(), P = t, D.updatePropListeners(t), L = function(t, e, n) {
                                        var r;
                                        for (var o in e) {
                                            var i = e[o],
                                                a = n[o];
                                            if (isMotionValue(i)) t.addValue(o, i);
                                            else if (isMotionValue(a)) t.addValue(o, motionValue(i));
                                            else if (a !== i) {
                                                if (t.hasValue(o)) {
                                                    var s = t.getValue(o);
                                                    s.hasAnimated || s.set(i)
                                                } else t.addValue(o, motionValue(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
                                            }
                                        }
                                        for (var o in n) void 0 === e[o] && t.removeValue(o);
                                        return e
                                    }(N, f(P), L)
                                },
                                getProps: function() {
                                    return P
                                },
                                getVariant: function(t) {
                                    var e;
                                    return null === (e = P.variants) || void 0 === e ? void 0 : e[t]
                                },
                                getDefaultTransition: function() {
                                    return P.transition
                                },
                                getTransformPagePoint: function() {
                                    return P.transformPagePoint
                                },
                                getVariantContext: function(t) {
                                    if (void 0 === t && (t = !1), t) return null == V ? void 0 : V.getVariantContext();
                                    if (!F) {
                                        var e = (null == V ? void 0 : V.getVariantContext()) || {};
                                        return void 0 !== P.initial && (e.initial = P.initial), e
                                    }
                                    for (var n = {}, r = 0; r < tb; r++) {
                                        var o = tC[r],
                                            i = P[o];
                                        (isVariantLabel(i) || !1 === i) && (n[o] = i)
                                    }
                                    return n
                                }
                            });
                        return N
                    }
                },
                tC = s.__spreadArray(["initial"], s.__read(th), !1),
                tb = tC.length;

            function isCSSVariable(t) {
                return "string" == typeof t && t.startsWith("var(--")
            }
            var tD = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function getVariableValue(t, e, n) {
                void 0 === n && (n = 1), l.invariant(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.'));
                var r = s.__read(function(t) {
                        var e = tD.exec(t);
                        if (!e) return [, ];
                        var n = s.__read(e, 3);
                        return [n[1], n[2]]
                    }(t), 2),
                    o = r[0],
                    i = r[1];
                if (o) {
                    var a = window.getComputedStyle(e).getPropertyValue(o);
                    return a ? a.trim() : isCSSVariable(i) ? getVariableValue(i, e, n + 1) : i
                }
            }
            var tw = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                isPositionalKey = function(t) {
                    return tw.has(t)
                },
                setAndResetVelocity = function(t, e) {
                    t.set(e, !1), t.set(e)
                },
                isNumOrPxType = function(t) {
                    return t === c.number || t === c.px
                };
            (o = i || (i = {})).width = "width", o.height = "height", o.left = "left", o.right = "right", o.top = "top", o.bottom = "bottom";
            var getPosFromMatrix = function(t, e) {
                    return parseFloat(t.split(", ")[e])
                },
                getTranslateFromMatrix = function(t, e) {
                    return function(n, r) {
                        var o = r.transform;
                        if ("none" === o || !o) return 0;
                        var i = o.match(/^matrix3d\((.+)\)$/);
                        if (i) return getPosFromMatrix(i[1], e);
                        var a = o.match(/^matrix\((.+)\)$/);
                        return a ? getPosFromMatrix(a[1], t) : 0
                    }
                },
                tM = new Set(["x", "y", "z"]),
                tL = F.filter(function(t) {
                    return !tM.has(t)
                }),
                tR = {
                    width: function(t, e) {
                        var n = t.x,
                            r = e.paddingLeft,
                            o = e.paddingRight;
                        return n.max - n.min - parseFloat(void 0 === r ? "0" : r) - parseFloat(void 0 === o ? "0" : o)
                    },
                    height: function(t, e) {
                        var n = t.y,
                            r = e.paddingTop,
                            o = e.paddingBottom;
                        return n.max - n.min - parseFloat(void 0 === r ? "0" : r) - parseFloat(void 0 === o ? "0" : o)
                    },
                    top: function(t, e) {
                        return parseFloat(e.top)
                    },
                    left: function(t, e) {
                        return parseFloat(e.left)
                    },
                    bottom: function(t, e) {
                        var n = t.y;
                        return parseFloat(e.top) + (n.max - n.min)
                    },
                    right: function(t, e) {
                        var n = t.x;
                        return parseFloat(e.left) + (n.max - n.min)
                    },
                    x: getTranslateFromMatrix(4, 13),
                    y: getTranslateFromMatrix(5, 14)
                },
                convertChangedValueTypes = function(t, e, n) {
                    var r = e.measureViewportBox(),
                        o = e.getInstance(),
                        i = getComputedStyle(o),
                        a = i.display,
                        s = {};
                    "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach(function(t) {
                        s[t] = tR[t](r, i)
                    }), e.syncRender();
                    var u = e.measureViewportBox();
                    return n.forEach(function(n) {
                        setAndResetVelocity(e.getValue(n), s[n]), t[n] = tR[n](u, i)
                    }), t
                },
                checkAndConvertChangedValueTypes = function(t, e, n, r) {
                    void 0 === n && (n = {}), void 0 === r && (r = {}), e = s.__assign({}, e), r = s.__assign({}, r);
                    var o = Object.keys(e).filter(isPositionalKey),
                        i = [],
                        a = !1,
                        u = [];
                    if (o.forEach(function(o) {
                            var s, d = t.getValue(o);
                            if (t.hasValue(o)) {
                                var p = n[o],
                                    f = findDimensionValueType(p),
                                    v = e[o];
                                if (isKeyframesTarget(v)) {
                                    var m = v.length,
                                        h = null === v[0] ? 1 : 0;
                                    f = findDimensionValueType(p = v[h]);
                                    for (var g = h; g < m; g++) s ? l.invariant(findDimensionValueType(v[g]) === s, "All keyframes must be of the same type") : (s = findDimensionValueType(v[g]), l.invariant(s === f || isNumOrPxType(f) && isNumOrPxType(s), "Keyframes must be of the same dimension as the current value"))
                                } else s = findDimensionValueType(v);
                                if (f !== s) {
                                    if (isNumOrPxType(f) && isNumOrPxType(s)) {
                                        var y, x = d.get();
                                        "string" == typeof x && d.set(parseFloat(x)), "string" == typeof v ? e[o] = parseFloat(v) : Array.isArray(v) && s === c.px && (e[o] = v.map(parseFloat))
                                    } else(null == f ? void 0 : f.transform) && (null == s ? void 0 : s.transform) && (0 === p || 0 === v) ? 0 === p ? d.set(s.transform(p)) : e[o] = f.transform(v) : (a || (y = [], tL.forEach(function(e) {
                                        var n = t.getValue(e);
                                        void 0 !== n && (y.push([e, n.get()]), n.set(e.startsWith("scale") ? 1 : 0))
                                    }), y.length && t.syncRender(), i = y, a = !0), u.push(o), r[o] = void 0 !== r[o] ? r[o] : e[o], setAndResetVelocity(d, v))
                                }
                            }
                        }), !u.length) return {
                        target: e,
                        transitionEnd: r
                    };
                    var d = u.indexOf("height") >= 0 ? window.pageYOffset : null,
                        p = convertChangedValueTypes(e, t, u);
                    return i.length && i.forEach(function(e) {
                        var n = s.__read(e, 2),
                            r = n[0],
                            o = n[1];
                        t.getValue(r).set(o)
                    }), t.syncRender(), null !== d && window.scrollTo({
                        top: d
                    }), {
                        target: p,
                        transitionEnd: r
                    }
                },
                parseDomVariant = function(t, e, n, r) {
                    var o, i, a = function(t, e, n) {
                        var r, o = s.__rest(e, []),
                            i = t.getInstance();
                        if (!(i instanceof Element)) return {
                            target: o,
                            transitionEnd: n
                        };
                        for (var a in n && (n = s.__assign({}, n)), t.forEachValue(function(t) {
                                var e = t.get();
                                if (isCSSVariable(e)) {
                                    var n = getVariableValue(e, i);
                                    n && t.set(n)
                                }
                            }), o) {
                            var u = o[a];
                            if (isCSSVariable(u)) {
                                var l = getVariableValue(u, i);
                                l && (o[a] = l, n && (null !== (r = n[a]) && void 0 !== r || (n[a] = u)))
                            }
                        }
                        return {
                            target: o,
                            transitionEnd: n
                        }
                    }(t, e, r);
                    return o = e = a.target, i = r = a.transitionEnd, Object.keys(o).some(isPositionalKey) ? checkAndConvertChangedValueTypes(t, o, n, i) : {
                        target: o,
                        transitionEnd: i
                    }
                },
                tk = {
                    treeType: "dom",
                    readValueFromInstance: function(t, e) {
                        if (isTransformProp(e)) {
                            var n = getDefaultValueType(e);
                            return n && n.default || 0
                        }
                        var r = window.getComputedStyle(t);
                        return (isCSSVariable$1(e) ? r.getPropertyValue(e) : r[e]) || 0
                    },
                    sortNodePosition: function(t, e) {
                        return 2 & t.compareDocumentPosition(e) ? 1 : -1
                    },
                    getBaseTarget: function(t, e) {
                        var n;
                        return null === (n = t.style) || void 0 === n ? void 0 : n[e]
                    },
                    measureViewportBox: function(t, e) {
                        return measureViewportBox(t, e.transformPagePoint)
                    },
                    resetTransform: function(t, e, n) {
                        var r = n.transformTemplate;
                        e.style.transform = r ? r({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform: function(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState: function(t, e) {
                        var n = e.vars,
                            r = e.style;
                        delete n[t], delete r[t]
                    },
                    makeTargetAnimatable: function(t, e, n, r) {
                        var o = n.transformValues;
                        void 0 === r && (r = !0);
                        var i = e.transition,
                            a = e.transitionEnd,
                            u = s.__rest(e, ["transition", "transitionEnd"]),
                            l = getOrigin(u, i || {}, t);
                        if (o && (a && (a = o(a)), u && (u = o(u)), l && (l = o(l))), r) {
                            checkTargetForNewValues(t, u, l);
                            var c = parseDomVariant(t, u, l, a);
                            a = c.transitionEnd, u = c.target
                        }
                        return s.__assign({
                            transition: i,
                            transitionEnd: a
                        }, u)
                    },
                    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
                    build: function(t, e, n, r, o) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), buildHTMLStyles(e, n, r, o.transformTemplate)
                    },
                    render: renderHTML
                },
                tI = visualElement(tk),
                tj = visualElement(s.__assign(s.__assign({}, tk), {
                    getBaseTarget: function(t, e) {
                        return t[e]
                    },
                    readValueFromInstance: function(t, e) {
                        var n;
                        return isTransformProp(e) ? (null === (n = getDefaultValueType(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = X.has(e) ? e : camelToDash(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
                    build: function(t, e, n, r, o) {
                        buildSVGAttrs(e, n, r, o.transformTemplate)
                    },
                    render: renderSVG
                })),
                createDomVisualElement = function(t, e) {
                    return isSVGComponent(t) ? tj(e, {
                        enableHardwareAcceleration: !1
                    }) : tI(e, {
                        enableHardwareAcceleration: !0
                    })
                };

            function pixelsToPercent(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            var tF = {
                    correct: function(t, e) {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!c.px.test(t)) return t;
                            t = parseFloat(t)
                        }
                        var n = pixelsToPercent(t, e.target.x),
                            r = pixelsToPercent(t, e.target.y);
                        return "".concat(n, "% ").concat(r, "%")
                    }
                },
                tB = "_$css",
                tN = function(t) {
                    function MeasureLayoutWithContext() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s.__extends(MeasureLayoutWithContext, t), MeasureLayoutWithContext.prototype.componentDidMount = function() {
                        var t = this,
                            e = this.props,
                            n = e.visualElement,
                            r = e.layoutGroup,
                            o = e.switchLayoutGroup,
                            i = e.layoutId,
                            a = n.projection;
                        addScaleCorrector(tO), a && ((null == r ? void 0 : r.group) && r.group.add(a), (null == o ? void 0 : o.register) && i && o.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", function() {
                            t.safeToRemove()
                        }), a.setOptions(s.__assign(s.__assign({}, a.options), {
                            onExitComplete: function() {
                                return t.safeToRemove()
                            }
                        }))), D.hasEverUpdated = !0
                    }, MeasureLayoutWithContext.prototype.getSnapshotBeforeUpdate = function(t) {
                        var e = this,
                            n = this.props,
                            r = n.layoutDependency,
                            o = n.visualElement,
                            i = n.drag,
                            a = n.isPresent,
                            s = o.projection;
                        return s && (s.isPresent = a, i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), t.isPresent === a || (a ? s.promote() : s.relegate() || h.default.postRender(function() {
                            var t;
                            (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
                        }))), null
                    }, MeasureLayoutWithContext.prototype.componentDidUpdate = function() {
                        var t = this.props.visualElement.projection;
                        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                    }, MeasureLayoutWithContext.prototype.componentWillUnmount = function() {
                        var t = this.props,
                            e = t.visualElement,
                            n = t.layoutGroup,
                            r = t.switchLayoutGroup,
                            o = e.projection;
                        o && (o.scheduleCheckAfterUnmount(), (null == n ? void 0 : n.group) && n.group.remove(o), (null == r ? void 0 : r.deregister) && r.deregister(o))
                    }, MeasureLayoutWithContext.prototype.safeToRemove = function() {
                        var t = this.props.safeToRemove;
                        null == t || t()
                    }, MeasureLayoutWithContext.prototype.render = function() {
                        return null
                    }, MeasureLayoutWithContext
                }(m.default.Component),
                tO = {
                    borderRadius: s.__assign(s.__assign({}, tF), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: tF,
                    borderTopRightRadius: tF,
                    borderBottomLeftRadius: tF,
                    borderBottomRightRadius: tF,
                    boxShadow: {
                        correct: function(t, e) {
                            var n = e.treeScale,
                                r = e.projectionDelta,
                                o = t,
                                i = t.includes("var("),
                                a = [];
                            i && (t = t.replace(tD, function(t) {
                                return a.push(t), tB
                            }));
                            var s = c.complex.parse(t);
                            if (s.length > 5) return o;
                            var u = c.complex.createTransformer(t),
                                l = "number" != typeof s[0] ? 1 : 0,
                                p = r.x.scale * n.x,
                                f = r.y.scale * n.y;
                            s[0 + l] /= p, s[1 + l] /= f;
                            var v = d.mix(p, f, .5);
                            "number" == typeof s[2 + l] && (s[2 + l] /= v), "number" == typeof s[3 + l] && (s[3 + l] /= v);
                            var m = u(s);
                            if (i) {
                                var h = 0;
                                m = m.replace(tB, function() {
                                    var t = a[h];
                                    return h++, t
                                })
                            }
                            return m
                        }
                    }
                },
                tU = {
                    measureLayout: function(t) {
                        var e = s.__read(usePresence(), 2),
                            n = e[0],
                            r = e[1],
                            o = u.useContext(M);
                        return m.default.createElement(tN, s.__assign({}, t, {
                            layoutGroup: o,
                            switchLayoutGroup: u.useContext(L),
                            isPresent: n,
                            safeToRemove: r
                        }))
                    }
                };

            function animate(t, e, n) {
                void 0 === n && (n = {});
                var r = isMotionValue(t) ? t : motionValue(t);
                return startAnimation("", r, e, n), {
                    stop: function() {
                        return r.stop()
                    },
                    isAnimating: function() {
                        return r.isAnimating()
                    }
                }
            }
            var tH = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tz = tH.length,
                asNumber = function(t) {
                    return "string" == typeof t ? parseFloat(t) : t
                },
                isPx = function(t) {
                    return "number" == typeof t || c.px.test(t)
                };

            function getRadius(t, e) {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
            }
            var tG = compress(0, .5, d.circOut),
                tY = compress(.5, .95, d.linear);

            function compress(t, e, n) {
                return function(r) {
                    return r < t ? 0 : r > e ? 1 : n(d.progress(t, e, r))
                }
            }

            function copyAxisInto(t, e) {
                t.min = e.min, t.max = e.max
            }

            function copyBoxInto(t, e) {
                copyAxisInto(t.x, e.x), copyAxisInto(t.y, e.y)
            }

            function removePointDelta(t, e, n, r, o) {
                return t -= e, t = r + 1 / n * (t - r), void 0 !== o && (t = r + 1 / o * (t - r)), t
            }

            function removeAxisTransforms(t, e, n, r, o) {
                var i = s.__read(n, 3),
                    a = i[0],
                    u = i[1],
                    l = i[2];
                ! function(t, e, n, r, o, i, a) {
                    if (void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === i && (i = t), void 0 === a && (a = t), c.percent.test(e) && (e = parseFloat(e), e = d.mix(a.min, a.max, e / 100) - a.min), "number" == typeof e) {
                        var s = d.mix(i.min, i.max, r);
                        t === i && (s -= e), t.min = removePointDelta(t.min, e, n, s, o), t.max = removePointDelta(t.max, e, n, s, o)
                    }
                }(t, e[a], e[u], e[l], e.scale, r, o)
            }
            var tW = ["x", "scaleX", "originX"],
                tX = ["y", "scaleY", "originY"];

            function removeBoxTransforms(t, e, n, r) {
                removeAxisTransforms(t.x, e, tW, null == n ? void 0 : n.x, null == r ? void 0 : r.x), removeAxisTransforms(t.y, e, tX, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
            }

            function isAxisDeltaZero(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function isDeltaZero(t) {
                return isAxisDeltaZero(t.x) && isAxisDeltaZero(t.y)
            }

            function boxEquals(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }
            var tK = function() {
                function NodeStack() {
                    this.members = []
                }
                return NodeStack.prototype.add = function(t) {
                    addUniqueItem(this.members, t), t.scheduleRender()
                }, NodeStack.prototype.remove = function(t) {
                    if (removeItem(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        var e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }, NodeStack.prototype.relegate = function(t) {
                    var e, n = this.members.findIndex(function(e) {
                        return t === e
                    });
                    if (0 === n) return !1;
                    for (var r = n; r >= 0; r--) {
                        var o = this.members[r];
                        if (!1 !== o.isPresent) {
                            e = o;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }, NodeStack.prototype.promote = function(t, e) {
                    var n, r = this.lead;
                    t !== r && (this.prevLead = r, this.lead = t, t.show(), r && (r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0), !1 === t.options.crossfade && r.hide()))
                }, NodeStack.prototype.exitAnimationComplete = function() {
                    this.members.forEach(function(t) {
                        var e, n, r, o, i;
                        null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (i = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === i || i.call(o)
                    })
                }, NodeStack.prototype.scheduleRender = function() {
                    this.members.forEach(function(t) {
                        t.instance && t.scheduleRender(!1)
                    })
                }, NodeStack.prototype.removeLeadSnapshot = function() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }, NodeStack
            }();

            function buildProjectionTransform(t, e, n) {
                var r = t.x.translate / e.x,
                    o = t.y.translate / e.y,
                    i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
                if (i += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") "), n) {
                    var a = n.rotate,
                        s = n.rotateX,
                        u = n.rotateY;
                    a && (i += "rotate(".concat(a, "deg) ")), s && (i += "rotateX(".concat(s, "deg) ")), u && (i += "rotateY(".concat(u, "deg) "))
                }
                var l = t.x.scale * e.x,
                    c = t.y.scale * e.y;
                return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === (i += "scale(".concat(l, ", ").concat(c, ")")) ? "none" : i
            }
            var compareByDepth = function(t, e) {
                    return t.depth - e.depth
                },
                tZ = function() {
                    function FlatTree() {
                        this.children = [], this.isDirty = !1
                    }
                    return FlatTree.prototype.add = function(t) {
                        addUniqueItem(this.children, t), this.isDirty = !0
                    }, FlatTree.prototype.remove = function(t) {
                        removeItem(this.children, t), this.isDirty = !0
                    }, FlatTree.prototype.forEach = function(t) {
                        this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(t)
                    }, FlatTree
                }();

            function createProjectionNode(t) {
                var e = t.attachResizeListener,
                    n = t.defaultParent,
                    r = t.measureScroll,
                    o = t.checkIsScrollRoot,
                    i = t.resetTransform;
                return function() {
                    function ProjectionNode(t, e, r) {
                        var o = this;
                        void 0 === e && (e = {}), void 0 === r && (r = null == n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
                            o.isUpdating && (o.isUpdating = !1, o.clearAllSnapshots())
                        }, this.updateProjection = function() {
                            o.nodes.forEach(resolveTargetDelta), o.nodes.forEach(calcProjection)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = r ? r.root || r : this, this.path = r ? s.__spreadArray(s.__spreadArray([], s.__read(r.path), !1), [r], !1) : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (var i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new tZ)
                    }
                    return ProjectionNode.prototype.addEventListener = function(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tp), this.eventHandlers.get(t).add(e)
                    }, ProjectionNode.prototype.notifyListeners = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = this.eventHandlers.get(t);
                        null == r || r.notify.apply(r, s.__spreadArray([], s.__read(e), !1))
                    }, ProjectionNode.prototype.hasListeners = function(t) {
                        return this.eventHandlers.has(t)
                    }, ProjectionNode.prototype.registerPotentialNode = function(t, e) {
                        this.potentialNodes.set(t, e)
                    }, ProjectionNode.prototype.mount = function(t, n) {
                        var r = this;
                        if (void 0 === n && (n = !1), !this.instance) {
                            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                            var o = this.options,
                                i = o.layoutId,
                                a = o.layout,
                                u = o.visualElement;
                            if (u && !u.getInstance() && u.mount(t), this.root.nodes.add(this), null === (l = this.parent) || void 0 === l || l.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (a || i) && (this.isLayoutDirty = !0), e) {
                                var l, c, resizeUnblockUpdate_1 = function() {
                                    return r.root.updateBlockedByResize = !1
                                };
                                e(t, function() {
                                    r.root.updateBlockedByResize = !0, clearTimeout(c), c = window.setTimeout(resizeUnblockUpdate_1, 250), D.hasAnimatedSinceResize && (D.hasAnimatedSinceResize = !1, r.nodes.forEach(finishAnimation))
                                })
                            }
                            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && u && (i || a) && this.addEventListener("didUpdate", function(t) {
                                var e, n, o, i, a, l = t.delta,
                                    c = t.hasLayoutChanged,
                                    d = t.hasRelativeTargetChanged,
                                    p = t.layout;
                                if (r.isTreeAnimationBlocked()) {
                                    r.target = void 0, r.relativeTarget = void 0;
                                    return
                                }
                                var f = null !== (n = null !== (e = r.options.transition) && void 0 !== e ? e : u.getDefaultTransition()) && void 0 !== n ? n : t$,
                                    v = u.getProps(),
                                    m = v.onLayoutAnimationStart,
                                    h = v.onLayoutAnimationComplete,
                                    g = !r.targetLayout || !boxEquals(r.targetLayout, p) || d,
                                    y = !c && d;
                                if ((null === (o = r.resumeFrom) || void 0 === o ? void 0 : o.instance) || y || c && (g || !r.currentAnimation)) {
                                    r.resumeFrom && (r.resumingFrom = r.resumeFrom, r.resumingFrom.resumingFrom = void 0), r.setAnimationOrigin(l, y);
                                    var x = s.__assign(s.__assign({}, getValueTransition(f, "layout")), {
                                        onPlay: m,
                                        onComplete: h
                                    });
                                    u.shouldReduceMotion && (x.delay = 0, x.type = !1), r.startAnimation(x)
                                } else c || 0 !== r.animationProgress || r.finishAnimation(), r.isLead() && (null === (a = (i = r.options).onExitComplete) || void 0 === a || a.call(i));
                                r.targetLayout = p
                            })
                        }
                    }, ProjectionNode.prototype.unmount = function() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, p.cancelSync.preRender(this.updateProjection)
                    }, ProjectionNode.prototype.blockUpdate = function() {
                        this.updateManuallyBlocked = !0
                    }, ProjectionNode.prototype.unblockUpdate = function() {
                        this.updateManuallyBlocked = !1
                    }, ProjectionNode.prototype.isUpdateBlocked = function() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }, ProjectionNode.prototype.isTreeAnimationBlocked = function() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }, ProjectionNode.prototype.startUpdate = function() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(resetRotation))
                    }, ProjectionNode.prototype.willUpdate = function(t) {
                        if (void 0 === t && (t = !0), this.root.isUpdateBlocked()) {
                            null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), !this.isLayoutDirty) {
                            this.isLayoutDirty = !0;
                            for (var e, n, r, o = 0; o < this.path.length; o++) {
                                var i = this.path[o];
                                i.shouldResetTransform = !0, i.updateScroll()
                            }
                            var a = this.options,
                                s = a.layoutId,
                                u = a.layout;
                            if (void 0 !== s || u) {
                                var l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                                this.prevTransformTemplateValue = null == l ? void 0 : l(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                            }
                        }
                    }, ProjectionNode.prototype.didUpdate = function() {
                        if (this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(mountNodeEarly), this.potentialNodes.clear()), this.nodes.forEach(resetTransformStyle), this.nodes.forEach(updateLayout), this.nodes.forEach(notifyLayoutUpdate), this.clearAllSnapshots(), p.flushSync.update(), p.flushSync.preRender(), p.flushSync.render())
                    }, ProjectionNode.prototype.clearAllSnapshots = function() {
                        this.nodes.forEach(clearSnapshot), this.sharedNodes.forEach(removeLeadSnapshots)
                    }, ProjectionNode.prototype.scheduleUpdateProjection = function() {
                        h.default.preRender(this.updateProjection, !1, !0)
                    }, ProjectionNode.prototype.scheduleCheckAfterUnmount = function() {
                        var t = this;
                        h.default.postRender(function() {
                            t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                        })
                    }, ProjectionNode.prototype.updateSnapshot = function() {
                        if (!this.snapshot && this.instance) {
                            var t = this.measure(),
                                e = this.removeTransform(this.removeElementScroll(t));
                            roundBox(e), this.snapshot = {
                                measured: t,
                                layout: e,
                                latestValues: {}
                            }
                        }
                    }, ProjectionNode.prototype.updateLayout = function() {
                        if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (var t, e = 0; e < this.path.length; e++) this.path[e].updateScroll();
                            var n = this.measure();
                            roundBox(n);
                            var r = this.layout;
                            this.layout = {
                                measured: n,
                                actual: this.removeElementScroll(n)
                            }, this.layoutCorrected = createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == r ? void 0 : r.actual)
                        }
                    }, ProjectionNode.prototype.updateScroll = function() {
                        this.options.layoutScroll && this.instance && (this.isScrollRoot = o(this.instance), this.scroll = r(this.instance))
                    }, ProjectionNode.prototype.resetTransform = function() {
                        if (i) {
                            var t, e = this.isLayoutDirty || this.shouldResetTransform,
                                n = this.projectionDelta && !isDeltaZero(this.projectionDelta),
                                r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                                o = null == r ? void 0 : r(this.latestValues, ""),
                                a = o !== this.prevTransformTemplateValue;
                            e && (n || hasTransform(this.latestValues) || a) && (i(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                    }, ProjectionNode.prototype.measure = function() {
                        var t = this.options.visualElement;
                        if (!t) return createBox();
                        var e = t.measureViewportBox(),
                            n = this.root.scroll;
                        return n && (translateAxis(e.x, n.x), translateAxis(e.y, n.y)), e
                    }, ProjectionNode.prototype.removeElementScroll = function(t) {
                        var e = createBox();
                        copyBoxInto(e, t);
                        for (var n = 0; n < this.path.length; n++) {
                            var r = this.path[n],
                                o = r.scroll,
                                i = r.options,
                                a = r.isScrollRoot;
                            if (r !== this.root && o && i.layoutScroll) {
                                if (a) {
                                    copyBoxInto(e, t);
                                    var s = this.root.scroll;
                                    s && (translateAxis(e.x, -s.x), translateAxis(e.y, -s.y))
                                }
                                translateAxis(e.x, o.x), translateAxis(e.y, o.y)
                            }
                        }
                        return e
                    }, ProjectionNode.prototype.applyTransform = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = createBox();
                        copyBoxInto(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var o = this.path[r];
                            !e && o.options.layoutScroll && o.scroll && o !== o.root && transformBox(n, {
                                x: -o.scroll.x,
                                y: -o.scroll.y
                            }), hasTransform(o.latestValues) && transformBox(n, o.latestValues)
                        }
                        return hasTransform(this.latestValues) && transformBox(n, this.latestValues), n
                    }, ProjectionNode.prototype.removeTransform = function(t) {
                        var e, n = createBox();
                        copyBoxInto(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var o = this.path[r];
                            if (o.instance && hasTransform(o.latestValues)) {
                                hasScale(o.latestValues) && o.updateSnapshot();
                                var i = createBox();
                                copyBoxInto(i, o.measure()), removeBoxTransforms(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i)
                            }
                        }
                        return hasTransform(this.latestValues) && removeBoxTransforms(n, this.latestValues), n
                    }, ProjectionNode.prototype.setTargetDelta = function(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }, ProjectionNode.prototype.setOptions = function(t) {
                        var e;
                        this.options = s.__assign(s.__assign(s.__assign({}, this.options), t), {
                            crossfade: null === (e = t.crossfade) || void 0 === e || e
                        })
                    }, ProjectionNode.prototype.clearMeasurements = function() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }, ProjectionNode.prototype.resolveTargetDelta = function() {
                        var t, e, n, r, o = this.options,
                            i = o.layout,
                            a = o.layoutId;
                        this.layout && (i || a) && (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && ((this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && (null === (r = this.relativeParent) || void 0 === r ? void 0 : r.target)) ? (t = this.target, e = this.relativeTarget, n = this.relativeParent.target, calcRelativeAxis(t.x, e.x, n.x), calcRelativeAxis(t.y, e.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.actual) : copyBoxInto(this.target, this.layout.actual), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && !!this.relativeParent.resumingFrom == !!this.resumingFrom && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)))))
                    }, ProjectionNode.prototype.getClosestProjectingParent = function() {
                        if (!(!this.parent || hasTransform(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }, ProjectionNode.prototype.calcProjection = function() {
                        var t, e = this.options,
                            n = e.layout,
                            r = e.layoutId;
                        if (this.isTreeAnimating = !!((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
                            var o = this.getLead();
                            copyBoxInto(this.layoutCorrected, this.layout.actual),
                                function(t, e, n, r) {
                                    void 0 === r && (r = !1);
                                    var o, i, a, s, u = n.length;
                                    if (u) {
                                        e.x = e.y = 1;
                                        for (var l = 0; l < u; l++) s = (a = n[l]).projectionDelta, (null === (i = null === (o = a.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && transformBox(t, {
                                            x: -a.scroll.x,
                                            y: -a.scroll.y
                                        }), s && (e.x *= s.x.scale, e.y *= s.y.scale, applyBoxDelta(t, s)), r && hasTransform(a.latestValues) && transformBox(t, a.latestValues))
                                    }
                                }(this.layoutCorrected, this.treeScale, this.path, !!this.resumingFrom || this !== o);
                            var i = o.target;
                            if (i) {
                                this.projectionDelta || (this.projectionDelta = createDelta(), this.projectionDeltaWithTransform = createDelta());
                                var a = this.treeScale.x,
                                    s = this.treeScale.y,
                                    u = this.projectionTransform;
                                calcBoxDelta(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== s) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
                            }
                        }
                    }, ProjectionNode.prototype.hide = function() {
                        this.isVisible = !1
                    }, ProjectionNode.prototype.show = function() {
                        this.isVisible = !0
                    }, ProjectionNode.prototype.scheduleRender = function(t) {
                        var e, n, r;
                        void 0 === t && (t = !0), null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }, ProjectionNode.prototype.setAnimationOrigin = function(t, e) {
                        var n, r = this;
                        void 0 === e && (e = !1);
                        var o = this.snapshot,
                            i = (null == o ? void 0 : o.latestValues) || {},
                            a = s.__assign({}, this.latestValues),
                            u = createDelta();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        var l = createBox(),
                            p = null == o ? void 0 : o.isShared,
                            f = 1 >= ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0),
                            v = !!(p && !f && !0 === this.options.crossfade && !this.path.some(hasOpacityCrossfade));
                        this.animationProgress = 0, this.mixTargetDelta = function(e) {
                            var n, o, s, m = e / 1e3;
                            mixAxisDelta(u.x, t.x, m), mixAxisDelta(u.y, t.y, m), r.setTargetDelta(u), r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (s = r.relativeParent) || void 0 === s ? void 0 : s.layout) && (calcRelativePosition(l, r.layout.actual, r.relativeParent.layout.actual), n = r.relativeTarget, o = r.relativeTargetOrigin, mixAxis(n.x, o.x, l.x, m), mixAxis(n.y, o.y, l.y, m)), p && (r.animationValues = a, function(t, e, n, r, o, i) {
                                var a, s, u, l;
                                o ? (t.opacity = d.mix(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, tG(r)), t.opacityExit = d.mix(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, tY(r))) : i && (t.opacity = d.mix(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, r));
                                for (var p = 0; p < tz; p++) {
                                    var f = "border".concat(tH[p], "Radius"),
                                        v = getRadius(e, f),
                                        m = getRadius(n, f);
                                    (void 0 !== v || void 0 !== m) && (v || (v = 0), m || (m = 0), 0 === v || 0 === m || isPx(v) === isPx(m) ? (t[f] = Math.max(d.mix(asNumber(v), asNumber(m), r), 0), (c.percent.test(m) || c.percent.test(v)) && (t[f] += "%")) : t[f] = m)
                                }(e.rotate || n.rotate) && (t.rotate = d.mix(e.rotate || 0, n.rotate || 0, r))
                            }(a, i, r.latestValues, m, v, f)), r.root.scheduleUpdateProjection(), r.scheduleRender(), r.animationProgress = m
                        }, this.mixTargetDelta(0)
                    }, ProjectionNode.prototype.startAnimation = function(t) {
                        var e, n, r = this;
                        this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (p.cancelSync.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = h.default.update(function() {
                            D.hasAnimatedSinceResize = !0, r.currentAnimation = animate(0, 1e3, s.__assign(s.__assign({}, t), {
                                onUpdate: function(e) {
                                    var n;
                                    r.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: function() {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), r.completeAnimation()
                                }
                            })), r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation), r.pendingAnimation = void 0
                        })
                    }, ProjectionNode.prototype.completeAnimation = function() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }, ProjectionNode.prototype.finishAnimation = function() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }, ProjectionNode.prototype.applyTransformsToTarget = function() {
                        var t = this.getLead(),
                            e = t.targetWithTransforms,
                            n = t.target,
                            r = t.layout,
                            o = t.latestValues;
                        e && n && r && (copyBoxInto(e, n), transformBox(e, o), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
                    }, ProjectionNode.prototype.registerSharedNode = function(t, e) {
                        var n, r, o;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new tK), this.sharedNodes.get(t).add(e), e.promote({
                            transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (o = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, e)
                        })
                    }, ProjectionNode.prototype.isLead = function() {
                        var t = this.getStack();
                        return !t || t.lead === this
                    }, ProjectionNode.prototype.getLead = function() {
                        var t;
                        return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }, ProjectionNode.prototype.getPrevLead = function() {
                        var t;
                        return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }, ProjectionNode.prototype.getStack = function() {
                        var t = this.options.layoutId;
                        if (t) return this.root.sharedNodes.get(t)
                    }, ProjectionNode.prototype.promote = function(t) {
                        var e = void 0 === t ? {} : t,
                            n = e.needsReset,
                            r = e.transition,
                            o = e.preserveFollowOpacity,
                            i = this.getStack();
                        i && i.promote(this, o), n && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
                            transition: r
                        })
                    }, ProjectionNode.prototype.relegate = function() {
                        var t = this.getStack();
                        return !!t && t.relegate(this)
                    }, ProjectionNode.prototype.resetRotation = function() {
                        var t = this.options.visualElement;
                        if (t) {
                            for (var e = !1, n = {}, r = 0; r < j.length; r++) {
                                var o = "rotate" + j[r];
                                t.getStaticValue(o) && (e = !0, n[o] = t.getStaticValue(o), t.setStaticValue(o, 0))
                            }
                            if (e) {
                                for (var o in null == t || t.syncRender(), n) t.setStaticValue(o, n[o]);
                                t.scheduleRender()
                            }
                        }
                    }, ProjectionNode.prototype.getProjectionStyles = function(t) {
                        void 0 === t && (t = {});
                        var e, n, r, o, i, a, s = {};
                        if (!this.instance || this.isSVG) return s;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        s.visibility = "";
                        var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = resolveMotionValue(t.pointerEvents) || "", s.transform = u ? u(this.latestValues, "") : "none", s;
                        var l = this.getLead();
                        if (!this.projectionDelta || !this.layout || !l.target) {
                            var c = {};
                            return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, c.pointerEvents = resolveMotionValue(t.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (c.transform = u ? u({}, "") : "none", this.hasProjected = !1), c
                        }
                        var d = l.animationValues || l.latestValues;
                        this.applyTransformsToTarget(), s.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, d), u && (s.transform = u(d, s.transform));
                        var p = this.projectionDelta,
                            f = p.x,
                            v = p.y;
                        for (var m in s.transformOrigin = "".concat(100 * f.origin, "% ").concat(100 * v.origin, "% 0"), l.animationValues ? s.opacity = l === this ? null !== (o = null !== (r = d.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : s.opacity = l === this ? null !== (i = d.opacity) && void 0 !== i ? i : "" : null !== (a = d.opacityExit) && void 0 !== a ? a : 0, I)
                            if (void 0 !== d[m]) {
                                var h = I[m],
                                    g = h.correct,
                                    y = h.applyTo,
                                    x = g(d[m], l);
                                if (y)
                                    for (var V = y.length, P = 0; P < V; P++) s[y[P]] = x;
                                else s[m] = x
                            }
                        return this.options.layoutId && (s.pointerEvents = l === this ? resolveMotionValue(t.pointerEvents) || "" : "none"), s
                    }, ProjectionNode.prototype.clearSnapshot = function() {
                        this.resumeFrom = this.snapshot = void 0
                    }, ProjectionNode.prototype.resetTree = function() {
                        this.root.nodes.forEach(function(t) {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear()
                    }, ProjectionNode
                }()
            }

            function updateLayout(t) {
                t.updateLayout()
            }

            function notifyLayoutUpdate(t) {
                var e, n, r, o, i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    var a = t.layout,
                        s = a.actual,
                        u = a.measured;
                    "size" === t.options.animationType ? eachAxis(function(t) {
                        var e = i.isShared ? i.measured[t] : i.layout[t],
                            n = calcLength(e);
                        e.min = s[t].min, e.max = e.min + n
                    }) : "position" === t.options.animationType && eachAxis(function(t) {
                        var e = i.isShared ? i.measured[t] : i.layout[t],
                            n = calcLength(s[t]);
                        e.max = e.min + n
                    });
                    var l = createDelta();
                    calcBoxDelta(l, s, i.layout);
                    var c = createDelta();
                    i.isShared ? calcBoxDelta(c, t.applyTransform(u, !0), i.measured) : calcBoxDelta(c, s, i.layout);
                    var d = !isDeltaZero(l),
                        p = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        var f = t.relativeParent,
                            v = f.snapshot,
                            m = f.layout;
                        if (v && m) {
                            var h = createBox();
                            calcRelativePosition(h, i.layout, v.layout);
                            var g = createBox();
                            calcRelativePosition(g, s, m.actual), boxEquals(h, g) || (p = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: s,
                        snapshot: i,
                        delta: c,
                        layoutDelta: l,
                        hasLayoutChanged: d,
                        hasRelativeTargetChanged: p
                    })
                } else t.isLead() && (null === (o = (r = t.options).onExitComplete) || void 0 === o || o.call(r));
                t.options.transition = void 0
            }

            function clearSnapshot(t) {
                t.clearSnapshot()
            }

            function clearMeasurements(t) {
                t.clearMeasurements()
            }

            function resetTransformStyle(t) {
                var e = t.options.visualElement;
                (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
            }

            function finishAnimation(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function resolveTargetDelta(t) {
                t.resolveTargetDelta()
            }

            function calcProjection(t) {
                t.calcProjection()
            }

            function resetRotation(t) {
                t.resetRotation()
            }

            function removeLeadSnapshots(t) {
                t.removeLeadSnapshot()
            }

            function mixAxisDelta(t, e, n) {
                t.translate = d.mix(e.translate, 0, n), t.scale = d.mix(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function mixAxis(t, e, n, r) {
                t.min = d.mix(e.min, n.min, r), t.max = d.mix(e.max, n.max, r)
            }

            function hasOpacityCrossfade(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            var t$ = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function mountNodeEarly(t, e) {
                for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
                    if (t.path[r].instance) {
                        n = t.path[r];
                        break
                    }
                var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
                o && t.mount(o, !0)
            }

            function roundAxis(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function roundBox(t) {
                roundAxis(t.x), roundAxis(t.y)
            }
            var tq = createProjectionNode({
                    attachResizeListener: function(t, e) {
                        return addDomEvent(t, "resize", e)
                    },
                    measureScroll: function() {
                        return {
                            x: document.documentElement.scrollLeft || document.body.scrollLeft,
                            y: document.documentElement.scrollTop || document.body.scrollTop
                        }
                    },
                    checkIsScrollRoot: function() {
                        return !0
                    }
                }),
                tJ = {
                    current: void 0
                },
                tQ = createProjectionNode({
                    measureScroll: function(t) {
                        return {
                            x: t.scrollLeft,
                            y: t.scrollTop
                        }
                    },
                    defaultParent: function() {
                        if (!tJ.current) {
                            var t = new tq(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), tJ.current = t
                        }
                        return tJ.current
                    },
                    resetTransform: function(t, e) {
                        t.style.transform = null != e ? e : "none"
                    },
                    checkIsScrollRoot: function(t) {
                        return "fixed" === window.getComputedStyle(t).position
                    }
                }),
                t0 = s.__assign(s.__assign(s.__assign(s.__assign({}, tx), ti), tA), tU),
                t1 = createMotionProxy(function(t, e) {
                    return createDomMotionConfig(t, e, t0, createDomVisualElement, tQ)
                }),
                t5 = createMotionProxy(createDomMotionConfig);

            function useIsMounted() {
                var t = u.useRef(!1);
                return _(function() {
                    return t.current = !0,
                        function() {
                            t.current = !1
                        }
                }, []), t
            }

            function useForceUpdate() {
                var t = useIsMounted(),
                    e = s.__read(u.useState(0), 2),
                    n = e[0],
                    r = e[1],
                    o = u.useCallback(function() {
                        t.current && r(n + 1)
                    }, [n]);
                return [u.useCallback(function() {
                    return h.default.postRender(o)
                }, [o]), n]
            }
            var PresenceChild = function(t) {
                var e = t.children,
                    n = t.initial,
                    r = t.isPresent,
                    o = t.onExitComplete,
                    i = t.custom,
                    a = t.presenceAffectsLayout,
                    l = useConstant(newChildrenMap),
                    c = useId(),
                    d = u.useMemo(function() {
                        return {
                            id: c,
                            initial: n,
                            isPresent: r,
                            custom: i,
                            onExitComplete: function(t) {
                                var e, n;
                                l.set(t, !0);
                                try {
                                    for (var r = s.__values(l.values()), i = r.next(); !i.done; i = r.next())
                                        if (!i.value) return
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        i && !i.done && (n = r.return) && n.call(r)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                null == o || o()
                            },
                            register: function(t) {
                                return l.set(t, !1),
                                    function() {
                                        return l.delete(t)
                                    }
                            }
                        }
                    }, a ? void 0 : [r]);
                return u.useMemo(function() {
                    l.forEach(function(t, e) {
                        return l.set(e, !1)
                    })
                }, [r]), v.useEffect(function() {
                    r || l.size || null == o || o()
                }, [r]), v.createElement(S.Provider, {
                    value: d
                }, e)
            };

            function newChildrenMap() {
                return new Map
            }
            var getChildKey = function(t) {
                    return t.key || ""
                },
                t2 = u.createContext(null),
                notify = function(t) {
                    return !t.isLayoutDirty && t.willUpdate(!1)
                },
                shouldInheritGroup = function(t) {
                    return !0 === t
                },
                LayoutGroup = function(t) {
                    var e, n, r, o, i, a, l = t.children,
                        c = t.id,
                        d = t.inheritId,
                        p = t.inherit,
                        f = void 0 === p || p;
                    void 0 !== d && (f = d);
                    var m = u.useContext(M),
                        h = u.useContext(t2),
                        g = s.__read(useForceUpdate(), 2),
                        y = g[0],
                        x = g[1],
                        V = u.useRef(null),
                        P = null !== (i = m.id) && void 0 !== i ? i : h;
                    null === V.current && ((shouldInheritGroup(!0 === (o = f)) || "id" === o) && P && (c = c ? P + "-" + c : P), V.current = {
                        id: c,
                        group: shouldInheritGroup(f) && null !== (a = null == m ? void 0 : m.group) && void 0 !== a ? a : (e = new Set, n = new WeakMap, {
                            add: function(t) {
                                e.add(t), n.set(t, t.addEventListener("willUpdate", r))
                            },
                            remove: function(t) {
                                var o;
                                e.delete(t), null === (o = n.get(t)) || void 0 === o || o(), n.delete(t), r()
                            },
                            dirty: r = function() {
                                return e.forEach(notify)
                            }
                        })
                    });
                    var E = u.useMemo(function() {
                        return s.__assign(s.__assign({}, V.current), {
                            forceRender: y
                        })
                    }, [x]);
                    return v.createElement(M.Provider, {
                        value: E
                    }, l)
                },
                t3 = 0;

            function isLazyBundle(t) {
                return "function" == typeof t
            }
            var t4 = u.createContext(null),
                t6 = u.forwardRef(function(t, e) {
                    var n = t.children,
                        r = t.as,
                        o = void 0 === r ? "ul" : r,
                        i = t.axis,
                        a = void 0 === i ? "y" : i,
                        c = t.onReorder,
                        p = t.values,
                        f = s.__rest(t, ["children", "as", "axis", "onReorder", "values"]),
                        m = useConstant(function() {
                            return t1(o)
                        }),
                        h = [],
                        g = u.useRef(!1);
                    return l.invariant(!!p, "Reorder.Group must be provided a values prop"), u.useEffect(function() {
                        g.current = !1
                    }), v.createElement(m, s.__assign({}, f, {
                        ref: e
                    }), v.createElement(t4.Provider, {
                        value: {
                            axis: a,
                            registerItem: function(t, e) {
                                e && -1 === h.findIndex(function(e) {
                                    return t === e.value
                                }) && (h.push({
                                    value: t,
                                    layout: e[a]
                                }), h.sort(compareMin))
                            },
                            updateOrder: function(t, e, n) {
                                if (!g.current) {
                                    var r = function(t, e, n, r) {
                                        if (!r) return t;
                                        var o = t.findIndex(function(t) {
                                            return t.value === e
                                        });
                                        if (-1 === o) return t;
                                        var i = r > 0 ? 1 : -1,
                                            a = t[o + i];
                                        if (!a) return t;
                                        var u = t[o],
                                            l = a.layout,
                                            c = d.mix(l.min, l.max, .5);
                                        return 1 === i && u.layout.max + n > c || -1 === i && u.layout.min + n < c ? function(t, e, n) {
                                            var r = s.__read(t).slice(0),
                                                o = e < 0 ? r.length + e : e;
                                            if (o >= 0 && o < r.length) {
                                                var i = n < 0 ? r.length + n : n,
                                                    a = s.__read(r.splice(e, 1), 1)[0];
                                                r.splice(i, 0, a)
                                            }
                                            return r
                                        }(t, o, o + i) : t
                                    }(h, t, e, n);
                                    h !== r && (g.current = !0, c(r.map(getValue).filter(function(t) {
                                        return -1 !== p.indexOf(t)
                                    })))
                                }
                            }
                        }
                    }, n))
                });

            function getValue(t) {
                return t.value
            }

            function compareMin(t, e) {
                return t.layout.min - e.layout.min
            }

            function useMotionValue(t) {
                var e = useConstant(function() {
                    return motionValue(t)
                });
                if (u.useContext(E).isStatic) {
                    var n = s.__read(u.useState(t), 2)[1];
                    u.useEffect(function() {
                        return e.onChange(n)
                    }, [])
                }
                return e
            }

            function transform() {
                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                var r = !Array.isArray(e[0]),
                    o = r ? 0 : -1,
                    i = e[0 + o],
                    a = e[1 + o],
                    u = e[2 + o],
                    l = e[3 + o],
                    c = d.interpolate(a, u, s.__assign({
                        mixer: "object" == typeof(t = u[0]) && t.mix ? t.mix : void 0
                    }, l));
                return r ? c(i) : c
            }

            function useCombineMotionValues(t, e) {
                var n, r = useMotionValue(e()),
                    updateValue = function() {
                        return r.set(e())
                    };
                return updateValue(), n = function() {
                    return h.default.update(updateValue, !1, !0)
                }, _(function() {
                    var e = t.map(function(t) {
                        return t.onChange(n)
                    });
                    return function() {
                        return e.forEach(function(t) {
                            return t()
                        })
                    }
                }), r
            }

            function useTransform(t, e, n, r) {
                var o = "function" == typeof e ? e : transform(e, n, r);
                return Array.isArray(t) ? useListTransform(t, o) : useListTransform([t], function(t) {
                    return o(s.__read(t, 1)[0])
                })
            }

            function useListTransform(t, e) {
                var n = useConstant(function() {
                    return []
                });
                return useCombineMotionValues(t, function() {
                    n.length = 0;
                    for (var r = t.length, o = 0; o < r; o++) n[o] = t[o].get();
                    return e(n)
                })
            }

            function useDefaultMotionValue(t, e) {
                return void 0 === e && (e = 0), isMotionValue(t) ? t : useMotionValue(e)
            }
            var t9 = u.forwardRef(function(t, e) {
                    var n = t.children,
                        r = t.style,
                        o = t.value,
                        i = t.as,
                        a = void 0 === i ? "li" : i,
                        c = t.onDrag,
                        d = t.layout,
                        p = s.__rest(t, ["children", "style", "value", "as", "onDrag", "layout"]),
                        f = useConstant(function() {
                            return t1(a)
                        }),
                        m = u.useContext(t4),
                        h = {
                            x: useDefaultMotionValue(null == r ? void 0 : r.x),
                            y: useDefaultMotionValue(null == r ? void 0 : r.y)
                        },
                        g = useTransform([h.x, h.y], function(t) {
                            var e = s.__read(t, 2),
                                n = e[0],
                                r = e[1];
                            return n || r ? 1 : "unset"
                        }),
                        y = u.useRef(null);
                    l.invariant(!!m, "Reorder.Item must be a child of Reorder.Group");
                    var x = m.axis,
                        V = m.registerItem,
                        P = m.updateOrder;
                    return u.useEffect(function() {
                        V(o, y.current)
                    }, [m]), v.createElement(f, s.__assign({
                        drag: x
                    }, p, {
                        dragSnapToOrigin: !0,
                        style: s.__assign(s.__assign({}, r), {
                            x: h.x,
                            y: h.y,
                            zIndex: g
                        }),
                        layout: void 0 === d || d,
                        onDrag: function(t, e) {
                            var n = e.velocity;
                            n[x] && P(o, h[x].get(), n[x]), null == c || c(t, e)
                        },
                        onLayoutMeasure: function(t) {
                            y.current = t
                        },
                        ref: e
                    }), n)
                }),
                t7 = s.__assign(s.__assign({
                    renderer: createDomVisualElement
                }, tx), ti),
                t8 = s.__assign(s.__assign(s.__assign(s.__assign({}, t7), tA), tU), {
                    projectionNodeConstructor: tQ
                }),
                createScrollMotionValues = function() {
                    return {
                        scrollX: motionValue(0),
                        scrollY: motionValue(0),
                        scrollXProgress: motionValue(0),
                        scrollYProgress: motionValue(0)
                    }
                };

            function useScroll(t) {
                void 0 === t && (t = {});
                var e = t.container,
                    n = t.target,
                    r = s.__rest(t, ["container", "target"]),
                    o = useConstant(createScrollMotionValues);
                return _(function() {
                    return f.scroll(function(t) {
                        var e = t.x,
                            n = t.y;
                        o.scrollX.set(e.current), o.scrollXProgress.set(e.progress), o.scrollY.set(n.current), o.scrollYProgress.set(n.progress)
                    }, s.__assign(s.__assign({}, r), {
                        container: (null == e ? void 0 : e.current) || void 0,
                        target: (null == n ? void 0 : n.current) || void 0
                    }))
                }, []), o
            }
            var et = "undefined" != typeof performance ? function() {
                return performance.now()
            } : function() {
                return Date.now()
            };

            function useAnimationFrame(t) {
                var e = useConstant(et),
                    n = u.useContext(E).isStatic;
                u.useEffect(function() {
                    if (!n) {
                        var provideTimeSinceStart = function(n) {
                            t(n.timestamp - e)
                        };
                        return h.default.update(provideTimeSinceStart, !0),
                            function() {
                                return p.cancelSync.update(provideTimeSinceStart)
                            }
                    }
                }, [t])
            }

            function animationControls() {
                var t = !1,
                    e = [],
                    n = new Set,
                    r = {
                        subscribe: function(t) {
                            return n.add(t),
                                function() {
                                    n.delete(t)
                                }
                        },
                        start: function(r, o) {
                            if (!t) return new Promise(function(t) {
                                e.push({
                                    animation: [r, o],
                                    resolve: t
                                })
                            });
                            var i = [];
                            return n.forEach(function(t) {
                                i.push(animateVisualElement(t, r, {
                                    transitionOverride: o
                                }))
                            }), Promise.all(i)
                        },
                        set: function(e) {
                            return l.invariant(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach(function(t) {
                                Array.isArray(e) ? setVariants(t, e) : "string" == typeof e ? setVariants(t, [e]) : setTarget(t, e)
                            })
                        },
                        stop: function() {
                            n.forEach(function(t) {
                                ! function(t) {
                                    t.forEachValue(function(t) {
                                        return t.stop()
                                    })
                                }(t)
                            })
                        },
                        mount: function() {
                            return t = !0, e.forEach(function(t) {
                                    var e = t.animation,
                                        n = t.resolve;
                                    r.start.apply(r, s.__spreadArray([], s.__read(e), !1)).then(n)
                                }),
                                function() {
                                    t = !1, r.stop()
                                }
                        }
                    };
                return r
            }

            function useAnimationControls() {
                var t = useConstant(animationControls);
                return u.useEffect(t.mount, []), t
            }
            var ee = function() {
                    function DragControls() {
                        this.componentControls = new Set
                    }
                    return DragControls.prototype.subscribe = function(t) {
                        var e = this;
                        return this.componentControls.add(t),
                            function() {
                                return e.componentControls.delete(t)
                            }
                    }, DragControls.prototype.start = function(t, e) {
                        this.componentControls.forEach(function(n) {
                            n.start(t.nativeEvent || t, e)
                        })
                    }, DragControls
                }(),
                createDragControls = function() {
                    return new ee
                };

            function startTransition(t) {
                tJ.current && (tJ.current.isUpdating = !1, tJ.current.blockUpdate(), null == t || t())
            }
            var createObject = function() {
                    return {}
                },
                en = visualElement({
                    build: function() {},
                    measureViewportBox: createBox,
                    resetTransform: function() {},
                    restoreTransform: function() {},
                    removeValueFromRenderState: function() {},
                    render: function() {},
                    scrapeMotionValuesFromProps: createObject,
                    readValueFromInstance: function(t, e, n) {
                        return n.initialState[e] || 0
                    },
                    makeTargetAnimatable: function(t, e) {
                        var n = e.transition,
                            r = e.transitionEnd,
                            o = s.__rest(e, ["transition", "transitionEnd"]),
                            i = getOrigin(o, n || {}, t);
                        return checkTargetForNewValues(t, o, i), s.__assign({
                            transition: n,
                            transitionEnd: r
                        }, o)
                    }
                }),
                er = makeUseVisualState({
                    scrapeMotionValuesFromProps: createObject,
                    createRenderState: createObject
                }),
                invertScale = function(t) {
                    return t > .001 ? 1 / t : 1e5
                },
                eo = !1;
            e.AnimatePresence = function(t) {
                var e, n = t.children,
                    r = t.custom,
                    o = t.initial,
                    i = void 0 === o || o,
                    a = t.onExitComplete,
                    l = t.exitBeforeEnter,
                    c = t.presenceAffectsLayout,
                    d = void 0 === c || c,
                    p = s.__read(useForceUpdate(), 1)[0],
                    f = u.useContext(M).forceRender;
                f && (p = f);
                var m = useIsMounted(),
                    h = (e = [], u.Children.forEach(n, function(t) {
                        u.isValidElement(t) && e.push(t)
                    }), e),
                    y = h,
                    x = new Set,
                    V = u.useRef(y),
                    P = u.useRef(new Map).current,
                    E = u.useRef(!0);
                if (_(function() {
                        E.current = !1,
                            function(t, e) {
                                t.forEach(function(t) {
                                    var n = getChildKey(t);
                                    e.set(n, t)
                                })
                            }(h, P), V.current = y
                    }), useUnmountEffect(function() {
                        E.current = !0, P.clear(), x.clear()
                    }), E.current) return v.createElement(v.Fragment, null, y.map(function(t) {
                    return v.createElement(PresenceChild, {
                        key: getChildKey(t),
                        isPresent: !0,
                        initial: !!i && void 0,
                        presenceAffectsLayout: d
                    }, t)
                }));
                y = s.__spreadArray([], s.__read(y), !1);
                for (var T = V.current.map(getChildKey), S = h.map(getChildKey), A = T.length, C = 0; C < A; C++) {
                    var b = T[C]; - 1 === S.indexOf(b) && x.add(b)
                }
                return l && x.size && (y = []), x.forEach(function(t) {
                    if (-1 === S.indexOf(t)) {
                        var e = P.get(t);
                        if (e) {
                            var n = T.indexOf(t);
                            y.splice(n, 0, v.createElement(PresenceChild, {
                                key: getChildKey(e),
                                isPresent: !1,
                                onExitComplete: function() {
                                    P.delete(t), x.delete(t);
                                    var e = V.current.findIndex(function(e) {
                                        return e.key === t
                                    });
                                    if (V.current.splice(e, 1), !x.size) {
                                        if (V.current = h, !1 === m.current) return;
                                        p(), a && a()
                                    }
                                },
                                custom: r,
                                presenceAffectsLayout: d
                            }, e))
                        }
                    }
                }), y = y.map(function(t) {
                    var e = t.key;
                    return x.has(e) ? t : v.createElement(PresenceChild, {
                        key: getChildKey(t),
                        isPresent: !0,
                        presenceAffectsLayout: d
                    }, t)
                }), "production" !== g && l && y.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), v.createElement(v.Fragment, null, x.size ? y : y.map(function(t) {
                    return u.cloneElement(t)
                }))
            }, e.AnimateSharedLayout = function(t) {
                var e = t.children;
                return v.useEffect(function() {
                    l.warning(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
                }, []), v.createElement(LayoutGroup, {
                    id: useConstant(function() {
                        return "asl-".concat(t3++)
                    })
                }, e)
            }, e.DeprecatedLayoutGroupContext = t2, e.DragControls = ee, e.FlatTree = tZ, e.LayoutGroup = LayoutGroup, e.LayoutGroupContext = M, e.LazyMotion = function(t) {
                var e = t.children,
                    n = t.features,
                    r = t.strict,
                    o = s.__read(u.useState(!isLazyBundle(n)), 2)[1],
                    i = u.useRef(void 0);
                if (!isLazyBundle(n)) {
                    var a = n.renderer,
                        l = s.__rest(n, ["renderer"]);
                    i.current = a, loadFeatures(l)
                }
                return u.useEffect(function() {
                    isLazyBundle(n) && n().then(function(t) {
                        var e = t.renderer;
                        loadFeatures(s.__rest(t, ["renderer"])), i.current = e, o(!0)
                    })
                }, []), v.createElement(x.Provider, {
                    value: {
                        renderer: i.current,
                        strict: void 0 !== r && r
                    }
                }, e)
            }, e.MotionConfig = function(t) {
                var e = t.children,
                    n = t.isValidProp,
                    r = s.__rest(t, ["children", "isValidProp"]);
                n && loadExternalIsValidProp(n), (r = s.__assign(s.__assign({}, u.useContext(E)), r)).isStatic = useConstant(function() {
                    return r.isStatic
                });
                var o = u.useMemo(function() {
                    return r
                }, [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion]);
                return v.createElement(E.Provider, {
                    value: o
                }, e)
            }, e.MotionConfigContext = E, e.MotionContext = T, e.MotionValue = tf, e.PresenceContext = S, e.Reorder = {
                Group: t6,
                Item: t9
            }, e.SwitchLayoutGroupContext = L, e.addPointerEvent = addPointerEvent, e.addScaleCorrector = addScaleCorrector, e.animate = animate, e.animateVisualElement = animateVisualElement, e.animationControls = animationControls, e.animations = tx, e.calcLength = calcLength, e.checkTargetForNewValues = checkTargetForNewValues, e.createBox = createBox, e.createDomMotionComponent = function(t) {
                return createMotionComponent(createDomMotionConfig(t, {
                    forwardMotionProps: !1
                }, t0, createDomVisualElement, tQ))
            }, e.createMotionComponent = createMotionComponent, e.domAnimation = t7, e.domMax = t8, e.filterProps = filterProps, e.isBrowser = A, e.isDragActive = isDragActive, e.isMotionValue = isMotionValue, e.isValidMotionProp = isValidMotionProp, e.m = t5, e.makeUseVisualState = makeUseVisualState, e.motion = t1, e.motionValue = motionValue, e.resolveMotionValue = resolveMotionValue, e.transform = transform, e.useAnimation = useAnimationControls, e.useAnimationControls = useAnimationControls, e.useAnimationFrame = useAnimationFrame, e.useCycle = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = u.useRef(0),
                    r = s.__read(u.useState(t[n.current]), 2),
                    o = r[0],
                    i = r[1];
                return [o, u.useCallback(function(e) {
                    n.current = "number" != typeof e ? d.wrap(0, t.length, n.current + 1) : e, i(t[n.current])
                }, s.__spreadArray([t.length], s.__read(t), !1))]
            }, e.useDeprecatedAnimatedState = function(t) {
                var e = s.__read(u.useState(t), 2),
                    n = e[0],
                    r = e[1],
                    o = er({}, !1),
                    i = useConstant(function() {
                        return en({
                            props: {},
                            visualState: o
                        }, {
                            initialState: t
                        })
                    });
                return u.useEffect(function() {
                    return i.mount({}), i.unmount
                }, [i]), u.useEffect(function() {
                    i.setProps({
                        onUpdate: function(t) {
                            r(s.__assign({}, t))
                        }
                    })
                }, [r, i]), [n, useConstant(function() {
                    return function(t) {
                        return animateVisualElement(i, t)
                    }
                })]
            }, e.useDeprecatedInvertedScale = function(t) {
                var e = useMotionValue(1),
                    n = useMotionValue(1),
                    r = useVisualElementContext();
                return l.invariant(!!(t || r), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), l.warning(eo, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), eo = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : r && (e = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1)), {
                    scaleX: useTransform(e, invertScale),
                    scaleY: useTransform(n, invertScale)
                }
            }, e.useDomEvent = useDomEvent, e.useDragControls = function() {
                return useConstant(createDragControls)
            }, e.useElementScroll = function(t) {
                return warnOnce(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), useScroll({
                    container: t
                })
            }, e.useForceUpdate = useForceUpdate, e.useInView = function(t, e) {
                var n = void 0 === e ? {} : e,
                    r = n.root,
                    o = n.margin,
                    i = n.amount,
                    a = n.once,
                    l = void 0 !== a && a,
                    c = s.__read(u.useState(!1), 2),
                    d = c[0],
                    p = c[1];
                return u.useEffect(function() {
                    if (t.current && (!l || !d)) {
                        var e, n = {
                            root: null !== (e = null == r ? void 0 : r.current) && void 0 !== e ? e : void 0,
                            margin: o,
                            amount: "some" === i ? "any" : i
                        };
                        return f.inView(t.current, function() {
                            return p(!0), l ? void 0 : function() {
                                return p(!1)
                            }
                        }, n)
                    }
                }, [r, t, o, l]), d
            }, e.useInstantLayoutTransition = function() {
                return startTransition
            }, e.useInstantTransition = function() {
                var t = s.__read(useForceUpdate(), 2),
                    e = t[0],
                    n = t[1];
                return u.useEffect(function() {
                        h.default.postRender(function() {
                            return h.default.postRender(function() {
                                return tc.current = !1
                            })
                        })
                    }, [n]),
                    function(t) {
                        startTransition(function() {
                            tc.current = !0, e(), t()
                        })
                    }
            }, e.useIsPresent = function() {
                var t;
                return null === (t = u.useContext(S)) || t.isPresent
            }, e.useIsomorphicLayoutEffect = _, e.useMotionTemplate = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = t.length;
                return useCombineMotionValues(e, function() {
                    for (var n = "", o = 0; o < r; o++) n += t[o], e[o] && (n += e[o].get());
                    return n
                })
            }, e.useMotionValue = useMotionValue, e.usePresence = usePresence, e.useReducedMotion = useReducedMotion, e.useReducedMotionConfig = useReducedMotionConfig, e.useResetProjection = function() {
                return v.useCallback(function() {
                    var t = tJ.current;
                    t && t.resetTree()
                }, [])
            }, e.useScroll = useScroll, e.useSpring = function(t, e) {
                void 0 === e && (e = {});
                var n, r = u.useContext(E).isStatic,
                    o = u.useRef(null),
                    i = useMotionValue(isMotionValue(t) ? t.get() : t);
                return u.useMemo(function() {
                    return i.attach(function(t, n) {
                        return r ? n(t) : (o.current && o.current.stop(), o.current = d.animate(s.__assign(s.__assign({
                            from: i.get(),
                            to: t,
                            velocity: i.getVelocity()
                        }, e), {
                            onUpdate: n
                        })), i.get())
                    })
                }, [JSON.stringify(e)]), _(function() {
                    if (isMotionValue(t)) return t.onChange(n)
                }, [n = function(t) {
                    return i.set(parseFloat(t))
                }]), i
            }, e.useTime = function() {
                var t = useMotionValue(0);
                return useAnimationFrame(function(e) {
                    return t.set(e)
                }), t
            }, e.useTransform = useTransform, e.useUnmountEffect = useUnmountEffect, e.useVelocity = function(t) {
                var e = useMotionValue(t.getVelocity());
                return u.useEffect(function() {
                    return t.velocityUpdateSubscribers.add(function(t) {
                        e.set(t)
                    })
                }, [t]), e
            }, e.useViewportScroll = function() {
                return warnOnce(!1, "useViewportScroll is deprecated. Convert to useScroll()."), useScroll()
            }, e.useVisualElementContext = useVisualElementContext, e.visualElement = visualElement, e.wrapHandler = wrapHandler
        }
    }
]);