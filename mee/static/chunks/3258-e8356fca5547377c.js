"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3258], {
        32240: function(a, b, w) {
            let L, F;
            w.d(b, {
                V: function() {
                    return eV
                }
            });
            var A, M, k, x, _, H, j = w(2265),
                V = w.t(j, 2),
                z = w(60597),
                Y = w(11931),
                B = w(46618),
                q = w(93850),
                $ = w(35863),
                W = w(75606),
                Z = w(48957),
                G = w(58227),
                K = w(65410),
                J = w(12950),
                Q = w(27976),
                ee = ((A = ee || {})[A.Forwards = 0] = "Forwards", A[A.Backwards = 1] = "Backwards", A),
                et = w(80634),
                en = w(57728),
                er = w(61858);

            function E(a, b, w, L) {
                let F = (0, er.E)(w);
                (0, j.useEffect)(() => {
                    function r(a) {
                        F.current(a)
                    }
                    return (a = null != a ? a : window).addEventListener(b, r, L), () => a.removeEventListener(b, r, L)
                }, [a, b, L])
            }
            var eo = w(55195),
                ei = w(7566),
                el = w(82769);

            function c(a) {
                let b = (0, J.z)(a),
                    w = (0, j.useRef)(!1);
                (0, j.useEffect)(() => (w.current = !1, () => {
                    w.current = !0, (0, eo.Y)(() => {
                        w.current && b()
                    })
                }), [b])
            }

            function P(a) {
                if (!a) return new Set;
                if ("function" == typeof a) return new Set(a());
                let b = new Set;
                for (let w of a.current) w.current instanceof HTMLElement && b.add(w.current);
                return b
            }
            var eu = ((M = eu || {})[M.None = 1] = "None", M[M.InitialFocus = 2] = "InitialFocus", M[M.TabLock = 4] = "TabLock", M[M.FocusLock = 8] = "FocusLock", M[M.RestoreFocus = 16] = "RestoreFocus", M[M.All = 30] = "All", M);
            let ea = Object.assign((0, Y.yV)(function(a, b) {
                    let w, L = (0, j.useRef)(null),
                        F = (0, B.T)(L, b),
                        {
                            initialFocus: A,
                            containers: M,
                            features: k = 30,
                            ...x
                        } = a;
                    (0, Z.H)() || (k = 1);
                    let _ = (0, en.i)(L);
                    ! function({
                        ownerDocument: a
                    }, b) {
                        let w = function(a = !0) {
                            let b = (0, j.useRef)(es.slice());
                            return (0, ei.q)(([a], [w]) => {
                                !0 === w && !1 === a && (0, eo.Y)(() => {
                                    b.current.splice(0)
                                }), !1 === w && !0 === a && (b.current = es.slice())
                            }, [a, es, b]), (0, J.z)(() => {
                                var a;
                                return null != (a = b.current.find(a => null != a && a.isConnected)) ? a : null
                            })
                        }(b);
                        (0, ei.q)(() => {
                            b || (null == a ? void 0 : a.activeElement) === (null == a ? void 0 : a.body) && (0, K.C5)(w())
                        }, [b]), c(() => {
                            b && (0, K.C5)(w())
                        })
                    }({
                        ownerDocument: _
                    }, !!(16 & k));
                    let H = function({
                        ownerDocument: a,
                        container: b,
                        initialFocus: w
                    }, L) {
                        let F = (0, j.useRef)(null),
                            A = (0, et.t)();
                        return (0, ei.q)(() => {
                            if (!L) return;
                            let M = b.current;
                            M && (0, eo.Y)(() => {
                                if (!A.current) return;
                                let b = null == a ? void 0 : a.activeElement;
                                if (null != w && w.current) {
                                    if ((null == w ? void 0 : w.current) === b) {
                                        F.current = b;
                                        return
                                    }
                                } else if (M.contains(b)) {
                                    F.current = b;
                                    return
                                }
                                null != w && w.current ? (0, K.C5)(w.current) : (0, K.jA)(M, K.TO.First) === K.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), F.current = null == a ? void 0 : a.activeElement
                            })
                        }, [L]), F
                    }({
                        ownerDocument: _,
                        container: L,
                        initialFocus: A
                    }, !!(2 & k));
                    ! function({
                        ownerDocument: a,
                        container: b,
                        containers: w,
                        previousActiveElement: L
                    }, F) {
                        let A = (0, et.t)();
                        E(null == a ? void 0 : a.defaultView, "focus", a => {
                            if (!F || !A.current) return;
                            let M = P(w);
                            b.current instanceof HTMLElement && M.add(b.current);
                            let k = L.current;
                            if (!k) return;
                            let x = a.target;
                            x && x instanceof HTMLElement ? S(M, x) ? (L.current = x, (0, K.C5)(x)) : (a.preventDefault(), a.stopPropagation(), (0, K.C5)(k)) : (0, K.C5)(L.current)
                        }, !0)
                    }({
                        ownerDocument: _,
                        container: L,
                        containers: M,
                        previousActiveElement: H
                    }, !!(8 & k));
                    let V = (w = (0, j.useRef)(0), (0, Q.s)("keydown", a => {
                            "Tab" === a.key && (w.current = a.shiftKey ? 1 : 0)
                        }, !0), w),
                        q = (0, J.z)(a => {
                            let b = L.current;
                            b && (0, z.E)(V.current, {
                                [ee.Forwards]: () => {
                                    (0, K.jA)(b, K.TO.First, {
                                        skipElements: [a.relatedTarget]
                                    })
                                },
                                [ee.Backwards]: () => {
                                    (0, K.jA)(b, K.TO.Last, {
                                        skipElements: [a.relatedTarget]
                                    })
                                }
                            })
                        }),
                        $ = (0, el.G)(),
                        W = (0, j.useRef)(!1);
                    return j.createElement(j.Fragment, null, !!(4 & k) && j.createElement(G._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: q,
                        features: G.A.Focusable
                    }), (0, Y.sY)({
                        ourProps: {
                            ref: F,
                            onKeyDown(a) {
                                "Tab" == a.key && (W.current = !0, $.requestAnimationFrame(() => {
                                    W.current = !1
                                }))
                            },
                            onBlur(a) {
                                let b = P(M);
                                L.current instanceof HTMLElement && b.add(L.current);
                                let w = a.relatedTarget;
                                w instanceof HTMLElement && "true" !== w.dataset.headlessuiFocusGuard && (S(b, w) || (W.current ? (0, K.jA)(L.current, (0, z.E)(V.current, {
                                    [ee.Forwards]: () => K.TO.Next,
                                    [ee.Backwards]: () => K.TO.Previous
                                }) | K.TO.WrapAround, {
                                    relativeTo: a.target
                                }) : a.target instanceof HTMLElement && (0, K.C5)(a.target)))
                            }
                        },
                        theirProps: x,
                        defaultTag: "div",
                        name: "FocusTrap"
                    }), !!(4 & k) && j.createElement(G._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: q,
                        features: G.A.Focusable
                    }))
                }), {
                    features: eu
                }),
                es = [];

            function S(a, b) {
                for (let w of a)
                    if (w.contains(b)) return !0;
                return !1
            }! function(a) {
                function e() {
                    "loading" !== document.readyState && (a(), document.removeEventListener("DOMContentLoaded", e))
                }
                "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", e), e())
            }(() => {
                function t(a) {
                    a.target instanceof HTMLElement && a.target !== document.body && es[0] !== a.target && (es.unshift(a.target), (es = es.filter(a => null != a && a.isConnected)).splice(10))
                }
                window.addEventListener("click", t, {
                    capture: !0
                }), window.addEventListener("mousedown", t, {
                    capture: !0
                }), window.addEventListener("focus", t, {
                    capture: !0
                }), document.body.addEventListener("click", t, {
                    capture: !0
                }), document.body.addEventListener("mousedown", t, {
                    capture: !0
                }), document.body.addEventListener("focus", t, {
                    capture: !0
                })
            });
            var ec = w(54887),
                ed = w(32600);
            let ef = (0, j.createContext)(!1);

            function portal_force_root_P(a) {
                return j.createElement(ef.Provider, {
                    value: a.force
                }, a.children)
            }
            var ep = w(52057);
            let em = j.Fragment,
                ev = j.Fragment,
                eh = (0, j.createContext)(null),
                eg = (0, j.createContext)(null),
                eE = Object.assign((0, Y.yV)(function(a, b) {
                    let w = (0, j.useRef)(null),
                        L = (0, B.T)((0, B.h)(a => {
                            w.current = a
                        }), b),
                        F = (0, en.i)(w),
                        A = function(a) {
                            let b = (0, j.useContext)(ef),
                                w = (0, j.useContext)(eh),
                                L = (0, en.i)(a),
                                [F, A] = (0, j.useState)(() => {
                                    if (!b && null !== w || ep.O.isServer) return null;
                                    let a = null == L ? void 0 : L.getElementById("headlessui-portal-root");
                                    if (a) return a;
                                    if (null === L) return null;
                                    let F = L.createElement("div");
                                    return F.setAttribute("id", "headlessui-portal-root"), L.body.appendChild(F)
                                });
                            return (0, j.useEffect)(() => {
                                null !== F && (null != L && L.body.contains(F) || null == L || L.body.appendChild(F))
                            }, [F, L]), (0, j.useEffect)(() => {
                                b || null !== w && A(w.current)
                            }, [w, A, b]), F
                        }(w),
                        [M] = (0, j.useState)(() => {
                            var a;
                            return ep.O.isServer ? null : null != (a = null == F ? void 0 : F.createElement("div")) ? a : null
                        }),
                        k = (0, j.useContext)(eg),
                        x = (0, Z.H)();
                    return (0, ed.e)(() => {
                        !A || !M || A.contains(M) || (M.setAttribute("data-headlessui-portal", ""), A.appendChild(M))
                    }, [A, M]), (0, ed.e)(() => {
                        if (M && k) return k.register(M)
                    }, [k, M]), c(() => {
                        var a;
                        A && M && (M instanceof Node && A.contains(M) && A.removeChild(M), A.childNodes.length <= 0 && (null == (a = A.parentElement) || a.removeChild(A)))
                    }), x && A && M ? (0, ec.createPortal)((0, Y.sY)({
                        ourProps: {
                            ref: L
                        },
                        theirProps: a,
                        defaultTag: em,
                        name: "Portal"
                    }), M) : null
                }), {
                    Group: (0, Y.yV)(function(a, b) {
                        let {
                            target: w,
                            ...L
                        } = a, F = {
                            ref: (0, B.T)(b)
                        };
                        return j.createElement(eh.Provider, {
                            value: w
                        }, (0, Y.sY)({
                            ourProps: F,
                            theirProps: L,
                            defaultTag: ev,
                            name: "Popover.Group"
                        }))
                    })
                }),
                eb = (0, j.createContext)(null),
                ew = Object.assign((0, Y.yV)(function(a, b) {
                    let w = (0, W.M)(),
                        {
                            id: L = `headlessui-description-${w}`,
                            ...F
                        } = a,
                        A = function description_f() {
                            let a = (0, j.useContext)(eb);
                            if (null === a) {
                                let a = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                                throw Error.captureStackTrace && Error.captureStackTrace(a, description_f), a
                            }
                            return a
                        }(),
                        M = (0, B.T)(b);
                    (0, ed.e)(() => A.register(L), [L, A.register]);
                    let k = {
                        ref: M,
                        ...A.props,
                        id: L
                    };
                    return (0, Y.sY)({
                        ourProps: k,
                        theirProps: F,
                        slot: A.slot || {},
                        defaultTag: "p",
                        name: A.name || "Description"
                    })
                }), {});
            var ey = w(25306);
            let eT = (0, j.createContext)(() => {});
            eT.displayName = "StackContext";
            var eS = ((k = eS || {})[k.Add = 0] = "Add", k[k.Remove = 1] = "Remove", k);

            function stack_context_M({
                children: a,
                onUpdate: b,
                type: w,
                element: L,
                enabled: F
            }) {
                let A = (0, j.useContext)(eT),
                    M = (0, J.z)((...a) => {
                        null == b || b(...a), A(...a)
                    });
                return (0, ed.e)(() => {
                    let a = void 0 === F || !0 === F;
                    return a && M(0, w, L), () => {
                        a && M(1, w, L)
                    }
                }, [M, w, L, F]), j.createElement(eT.Provider, {
                    value: M
                }, a)
            }
            var eP = w(90583);
            let {
                useState: eC,
                useEffect: eO,
                useLayoutEffect: eL,
                useDebugValue: eF
            } = V;
            "undefined" != typeof window && void 0 !== window.document && window.document.createElement;
            let eA = V.useSyncExternalStore;
            var eM = w(85390),
                eN = w(34644);
            let eR = (x = {
                PUSH(a, b) {
                    var w;
                    let L = null != (w = this.get(a)) ? w : {
                        doc: a,
                        count: 0,
                        d: (0, eM.k)(),
                        meta: new Set
                    };
                    return L.count++, L.meta.add(b), this.set(a, L), this
                },
                POP(a, b) {
                    let w = this.get(a);
                    return w && (w.count--, w.meta.delete(b)), this
                },
                SCROLL_PREVENT({
                    doc: a,
                    d: b,
                    meta: w
                }) {
                    let L, F;
                    let A = {
                            doc: a,
                            d: b,
                            meta: function(a) {
                                let b = {};
                                for (let w of a) Object.assign(b, w(b));
                                return b
                            }(w)
                        },
                        M = [(0, eN.gn)() ? {
                            before() {
                                L = window.pageYOffset
                            },
                            after({
                                doc: a,
                                d: b,
                                meta: w
                            }) {
                                function i(a) {
                                    return w.containers.flatMap(a => a()).some(b => b.contains(a))
                                }
                                b.microTask(() => {
                                    if ("auto" !== window.getComputedStyle(a.documentElement).scrollBehavior) {
                                        let w = (0, eM.k)();
                                        w.style(a.documentElement, "scroll-behavior", "auto"), b.add(() => b.microTask(() => w.dispose()))
                                    }
                                    b.style(a.body, "marginTop", `-${L}px`), window.scrollTo(0, 0);
                                    let w = null;
                                    b.addEventListener(a, "click", b => {
                                        if (b.target instanceof HTMLElement) try {
                                            let L = b.target.closest("a");
                                            if (!L) return;
                                            let {
                                                hash: F
                                            } = new URL(L.href), A = a.querySelector(F);
                                            A && !i(A) && (w = A)
                                        } catch {}
                                    }, !0), b.addEventListener(a, "touchmove", a => {
                                        a.target instanceof HTMLElement && !i(a.target) && a.preventDefault()
                                    }, {
                                        passive: !1
                                    }), b.add(() => {
                                        window.scrollTo(0, window.pageYOffset + L), w && w.isConnected && (w.scrollIntoView({
                                            block: "nearest"
                                        }), w = null)
                                    })
                                })
                            }
                        } : {}, {
                            before({
                                doc: a
                            }) {
                                var b;
                                let w = a.documentElement;
                                F = (null != (b = a.defaultView) ? b : window).innerWidth - w.clientWidth
                            },
                            after({
                                doc: a,
                                d: b
                            }) {
                                let w = a.documentElement,
                                    L = w.clientWidth - w.offsetWidth,
                                    A = F - L;
                                b.style(w, "paddingRight", `${A}px`)
                            }
                        }, {
                            before({
                                doc: a,
                                d: b
                            }) {
                                b.style(a.documentElement, "overflow", "hidden")
                            }
                        }];
                    M.forEach(({
                        before: a
                    }) => null == a ? void 0 : a(A)), M.forEach(({
                        after: a
                    }) => null == a ? void 0 : a(A))
                },
                SCROLL_ALLOW({
                    d: a
                }) {
                    a.dispose()
                },
                TEARDOWN({
                    doc: a
                }) {
                    this.delete(a)
                }
            }, L = new Map, F = new Set, {
                getSnapshot: () => L,
                subscribe: a => (F.add(a), () => F.delete(a)),
                dispatch(a, ...b) {
                    let w = x[a].call(L, ...b);
                    w && (L = w, F.forEach(a => a()))
                }
            });
            eR.subscribe(() => {
                let a = eR.getSnapshot(),
                    b = new Map;
                for (let [w] of a) b.set(w, w.documentElement.style.overflow);
                for (let w of a.values()) {
                    let a = "hidden" === b.get(w.doc),
                        L = 0 !== w.count;
                    (L && !a || !L && a) && eR.dispatch(w.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", w), 0 === w.count && eR.dispatch("TEARDOWN", w)
                }
            });
            let ek = new Map,
                ex = new Map;

            function use_inert_h(a, b = !0) {
                (0, ed.e)(() => {
                    var w;
                    if (!b) return;
                    let L = "function" == typeof a ? a() : a.current;
                    if (!L) return;
                    let F = null != (w = ex.get(L)) ? w : 0;
                    return ex.set(L, F + 1), 0 !== F || (ek.set(L, {
                            "aria-hidden": L.getAttribute("aria-hidden"),
                            inert: L.inert
                        }), L.setAttribute("aria-hidden", "true"), L.inert = !0),
                        function() {
                            var a;
                            if (!L) return;
                            let b = null != (a = ex.get(L)) ? a : 1;
                            if (1 === b ? ex.delete(L) : ex.set(L, b - 1), 1 !== b) return;
                            let w = ek.get(L);
                            w && (null === w["aria-hidden"] ? L.removeAttribute("aria-hidden") : L.setAttribute("aria-hidden", w["aria-hidden"]), L.inert = w.inert, ek.delete(L))
                        }
                }, [a, b])
            }
            var eD = ((_ = eD || {})[_.Open = 0] = "Open", _[_.Closed = 1] = "Closed", _),
                e_ = ((H = e_ || {})[H.SetTitleId = 0] = "SetTitleId", H);
            let eH = {
                    0: (a, b) => a.titleId === b.id ? a : { ...a,
                        titleId: b.id
                    }
                },
                ej = (0, j.createContext)(null);

            function dialog_b(a) {
                let b = (0, j.useContext)(ej);
                if (null === b) {
                    let b = Error(`<${a} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(b, dialog_b), b
                }
                return b
            }

            function Be(a, b) {
                return (0, z.E)(b.type, eH, a, b)
            }
            ej.displayName = "DialogContext";
            let eI = Y.AN.RenderStrategy | Y.AN.Static,
                eV = Object.assign((0, Y.yV)(function(a, b) {
                    var w;
                    let L, F, A, M, k;
                    let x = (0, W.M)(),
                        {
                            id: _ = `headlessui-dialog-${x}`,
                            open: H,
                            onClose: V,
                            initialFocus: $,
                            __demoMode: K = !1,
                            ...Q
                        } = a,
                        [ee, et] = (0, j.useState)(0),
                        er = (0, ey.oJ)();
                    void 0 === H && null !== er && (H = (er & ey.ZM.Open) === ey.ZM.Open);
                    let eo = (0, j.useRef)(null),
                        ei = (0, B.T)(eo, b),
                        el = (0, en.i)(eo),
                        eu = a.hasOwnProperty("open") || null !== er,
                        es = a.hasOwnProperty("onClose");
                    if (!eu && !es) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!eu) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!es) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof H) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${H}`);
                    if ("function" != typeof V) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${V}`);
                    let ec = H ? 0 : 1,
                        [ef, ep] = (0, j.useReducer)(Be, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, j.createRef)()
                        }),
                        em = (0, J.z)(() => V(!1)),
                        ev = (0, J.z)(a => ep({
                            type: 0,
                            id: a
                        })),
                        eh = !!(0, Z.H)() && !K && 0 === ec,
                        ew = ee > 1,
                        eT = null !== (0, j.useContext)(ej),
                        [eC, eO] = (L = (0, j.useContext)(eg), F = (0, j.useRef)([]), A = (0, J.z)(a => (F.current.push(a), L && L.register(a), () => M(a))), M = (0, J.z)(a => {
                            let b = F.current.indexOf(a); - 1 !== b && F.current.splice(b, 1), L && L.unregister(a)
                        }), k = (0, j.useMemo)(() => ({
                            register: A,
                            unregister: M,
                            portals: F
                        }), [A, M, F]), [F, (0, j.useMemo)(() => function({
                            children: a
                        }) {
                            return j.createElement(eg.Provider, {
                                value: k
                            }, a)
                        }, [k])]),
                        {
                            resolveContainers: eL,
                            mainTreeNodeRef: eF,
                            MainTreeNode: eM
                        } = function({
                            defaultContainers: a = [],
                            portals: b,
                            mainTreeNodeRef: w
                        } = {}) {
                            var L;
                            let F = (0, j.useRef)(null != (L = null == w ? void 0 : w.current) ? L : null),
                                A = (0, en.i)(F),
                                M = (0, J.z)(() => {
                                    var w;
                                    let L = [];
                                    for (let b of a) null !== b && (b instanceof HTMLElement ? L.push(b) : "current" in b && b.current instanceof HTMLElement && L.push(b.current));
                                    if (null != b && b.current)
                                        for (let a of b.current) L.push(a);
                                    for (let a of null != (w = null == A ? void 0 : A.querySelectorAll("html > *, body > *")) ? w : []) a !== document.body && a !== document.head && a instanceof HTMLElement && "headlessui-portal-root" !== a.id && (a.contains(F.current) || L.some(b => a.contains(b)) || L.push(a));
                                    return L
                                });
                            return {
                                resolveContainers: M,
                                contains: (0, J.z)(a => M().some(b => b.contains(a))),
                                mainTreeNodeRef: F,
                                MainTreeNode: (0, j.useMemo)(() => function() {
                                    return null != w ? null : j.createElement(G._, {
                                        features: G.A.Hidden,
                                        ref: F
                                    })
                                }, [F, w])
                            }
                        }({
                            portals: eC,
                            defaultContainers: [null != (w = ef.panelRef.current) ? w : eo.current]
                        }),
                        eN = ew ? "parent" : "leaf",
                        ek = null !== er && (er & ey.ZM.Closing) === ey.ZM.Closing,
                        ex = !eT && !ek && eh;
                    use_inert_h((0, j.useCallback)(() => {
                        var a, b;
                        return null != (b = Array.from(null != (a = null == el ? void 0 : el.querySelectorAll("body > *")) ? a : []).find(a => "headlessui-portal-root" !== a.id && a.contains(eF.current) && a instanceof HTMLElement)) ? b : null
                    }, [eF]), ex);
                    let eD = !!ew || eh;
                    use_inert_h((0, j.useCallback)(() => {
                        var a, b;
                        return null != (b = Array.from(null != (a = null == el ? void 0 : el.querySelectorAll("[data-headlessui-portal]")) ? a : []).find(a => a.contains(eF.current) && a instanceof HTMLElement)) ? b : null
                    }, [eF]), eD);
                    let e_ = !(!eh || ew);
                    (0, eP.O)(eL, em, e_);
                    let eH = !(ew || 0 !== ec);
                    E(null == el ? void 0 : el.defaultView, "keydown", a => {
                            eH && (a.defaultPrevented || a.key === q.R.Escape && (a.preventDefault(), a.stopPropagation(), em()))
                        }),
                        function(a, b, w = () => [document.body]) {
                            var L;
                            let F, A;
                            L = a => {
                                var b;
                                return {
                                    containers: [...null != (b = a.containers) ? b : [], w]
                                }
                            }, F = eA(eR.subscribe, eR.getSnapshot, eR.getSnapshot), (A = a ? F.get(a) : void 0) && A.count, (0, ed.e)(() => {
                                if (!(!a || !b)) return eR.dispatch("PUSH", a, L), () => eR.dispatch("POP", a, L)
                            }, [b, a])
                        }(el, !(ek || 0 !== ec || eT), eL), (0, j.useEffect)(() => {
                            if (0 !== ec || !eo.current) return;
                            let a = new ResizeObserver(a => {
                                for (let b of a) {
                                    let a = b.target.getBoundingClientRect();
                                    0 === a.x && 0 === a.y && 0 === a.width && 0 === a.height && em()
                                }
                            });
                            return a.observe(eo.current), () => a.disconnect()
                        }, [ec, eo, em]);
                    let [eV, ez] = function() {
                        let [a, b] = (0, j.useState)([]);
                        return [a.length > 0 ? a.join(" ") : void 0, (0, j.useMemo)(() => function(a) {
                            let w = (0, J.z)(a => (b(b => [...b, a]), () => b(b => {
                                    let w = b.slice(),
                                        L = w.indexOf(a);
                                    return -1 !== L && w.splice(L, 1), w
                                }))),
                                L = (0, j.useMemo)(() => ({
                                    register: w,
                                    slot: a.slot,
                                    name: a.name,
                                    props: a.props
                                }), [w, a.slot, a.name, a.props]);
                            return j.createElement(eb.Provider, {
                                value: L
                            }, a.children)
                        }, [b])]
                    }(), eY = (0, j.useMemo)(() => [{
                        dialogState: ec,
                        close: em,
                        setTitleId: ev
                    }, ef], [ec, ef, em, ev]), eU = (0, j.useMemo)(() => ({
                        open: 0 === ec
                    }), [ec]), eB = {
                        ref: ei,
                        id: _,
                        role: "dialog",
                        "aria-modal": 0 === ec || void 0,
                        "aria-labelledby": ef.titleId,
                        "aria-describedby": eV
                    };
                    return j.createElement(stack_context_M, {
                        type: "Dialog",
                        enabled: 0 === ec,
                        element: eo,
                        onUpdate: (0, J.z)((a, b) => {
                            "Dialog" === b && (0, z.E)(a, {
                                [eS.Add]: () => et(a => a + 1),
                                [eS.Remove]: () => et(a => a - 1)
                            })
                        })
                    }, j.createElement(portal_force_root_P, {
                        force: !0
                    }, j.createElement(eE, null, j.createElement(ej.Provider, {
                        value: eY
                    }, j.createElement(eE.Group, {
                        target: eo
                    }, j.createElement(portal_force_root_P, {
                        force: !1
                    }, j.createElement(ez, {
                        slot: eU,
                        name: "Dialog.Description"
                    }, j.createElement(ea, {
                        initialFocus: $,
                        containers: eL,
                        features: eh ? (0, z.E)(eN, {
                            parent: ea.features.RestoreFocus,
                            leaf: ea.features.All & ~ea.features.FocusLock
                        }) : ea.features.None
                    }, j.createElement(eO, null, (0, Y.sY)({
                        ourProps: eB,
                        theirProps: Q,
                        slot: eU,
                        defaultTag: "div",
                        features: eI,
                        visible: 0 === ec,
                        name: "Dialog"
                    }))))))))), j.createElement(eM, null))
                }), {
                    Backdrop: (0, Y.yV)(function(a, b) {
                        let w = (0, W.M)(),
                            {
                                id: L = `headlessui-dialog-backdrop-${w}`,
                                ...F
                            } = a,
                            [{
                                dialogState: A
                            }, M] = dialog_b("Dialog.Backdrop"),
                            k = (0, B.T)(b);
                        (0, j.useEffect)(() => {
                            if (null === M.panelRef.current) throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                        }, [M.panelRef]);
                        let x = (0, j.useMemo)(() => ({
                            open: 0 === A
                        }), [A]);
                        return j.createElement(portal_force_root_P, {
                            force: !0
                        }, j.createElement(eE, null, (0, Y.sY)({
                            ourProps: {
                                ref: k,
                                id: L,
                                "aria-hidden": !0
                            },
                            theirProps: F,
                            slot: x,
                            defaultTag: "div",
                            name: "Dialog.Backdrop"
                        })))
                    }),
                    Panel: (0, Y.yV)(function(a, b) {
                        let w = (0, W.M)(),
                            {
                                id: L = `headlessui-dialog-panel-${w}`,
                                ...F
                            } = a,
                            [{
                                dialogState: A
                            }, M] = dialog_b("Dialog.Panel"),
                            k = (0, B.T)(b, M.panelRef),
                            x = (0, j.useMemo)(() => ({
                                open: 0 === A
                            }), [A]),
                            _ = (0, J.z)(a => {
                                a.stopPropagation()
                            });
                        return (0, Y.sY)({
                            ourProps: {
                                ref: k,
                                id: L,
                                onClick: _
                            },
                            theirProps: F,
                            slot: x,
                            defaultTag: "div",
                            name: "Dialog.Panel"
                        })
                    }),
                    Overlay: (0, Y.yV)(function(a, b) {
                        let w = (0, W.M)(),
                            {
                                id: L = `headlessui-dialog-overlay-${w}`,
                                ...F
                            } = a,
                            [{
                                dialogState: A,
                                close: M
                            }] = dialog_b("Dialog.Overlay"),
                            k = (0, B.T)(b),
                            x = (0, J.z)(a => {
                                if (a.target === a.currentTarget) {
                                    if ((0, $.P)(a.currentTarget)) return a.preventDefault();
                                    a.preventDefault(), a.stopPropagation(), M()
                                }
                            }),
                            _ = (0, j.useMemo)(() => ({
                                open: 0 === A
                            }), [A]);
                        return (0, Y.sY)({
                            ourProps: {
                                ref: k,
                                id: L,
                                "aria-hidden": !0,
                                onClick: x
                            },
                            theirProps: F,
                            slot: _,
                            defaultTag: "div",
                            name: "Dialog.Overlay"
                        })
                    }),
                    Title: (0, Y.yV)(function(a, b) {
                        let w = (0, W.M)(),
                            {
                                id: L = `headlessui-dialog-title-${w}`,
                                ...F
                            } = a,
                            [{
                                dialogState: A,
                                setTitleId: M
                            }] = dialog_b("Dialog.Title"),
                            k = (0, B.T)(b);
                        (0, j.useEffect)(() => (M(L), () => M(null)), [L, M]);
                        let x = (0, j.useMemo)(() => ({
                            open: 0 === A
                        }), [A]);
                        return (0, Y.sY)({
                            ourProps: {
                                ref: k,
                                id: L
                            },
                            theirProps: F,
                            slot: x,
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    }),
                    Description: ew
                })
        },
        93850: function(a, b, w) {
            w.d(b, {
                R: function() {
                    return F
                }
            });
            var L, F = ((L = F || {}).Space = " ", L.Enter = "Enter", L.Escape = "Escape", L.Backspace = "Backspace", L.Delete = "Delete", L.ArrowLeft = "ArrowLeft", L.ArrowUp = "ArrowUp", L.ArrowRight = "ArrowRight", L.ArrowDown = "ArrowDown", L.Home = "Home", L.End = "End", L.PageUp = "PageUp", L.PageDown = "PageDown", L.Tab = "Tab", L)
        },
        9805: function(a, b, w) {
            w.d(b, {
                u: function() {
                    return et
                }
            });
            var L, F = w(2265),
                A = w(11931),
                M = w(25306),
                k = w(60597),
                x = w(80634),
                _ = w(32600),
                H = w(61858),
                j = w(48957),
                V = w(46618),
                z = w(85390);

            function g(a, ...b) {
                a && b.length > 0 && a.classList.add(...b)
            }

            function v(a, ...b) {
                a && b.length > 0 && a.classList.remove(...b)
            }
            var Y = w(82769),
                B = w(12950),
                q = w(63960);

            function S(a = "") {
                return a.split(" ").filter(a => a.trim().length > 1)
            }
            let $ = (0, F.createContext)(null);
            $.displayName = "TransitionContext";
            var W = ((L = W || {}).Visible = "visible", L.Hidden = "hidden", L);
            let Z = (0, F.createContext)(null);

            function U(a) {
                return "children" in a ? U(a.children) : a.current.filter(({
                    el: a
                }) => null !== a.current).filter(({
                    state: a
                }) => "visible" === a).length > 0
            }

            function oe(a, b) {
                let w = (0, H.E)(a),
                    L = (0, F.useRef)([]),
                    M = (0, x.t)(),
                    _ = (0, Y.G)(),
                    j = (0, B.z)((a, b = A.l4.Hidden) => {
                        let F = L.current.findIndex(({
                            el: b
                        }) => b === a); - 1 !== F && ((0, k.E)(b, {
                            [A.l4.Unmount]() {
                                L.current.splice(F, 1)
                            },
                            [A.l4.Hidden]() {
                                L.current[F].state = "hidden"
                            }
                        }), _.microTask(() => {
                            var a;
                            !U(L) && M.current && (null == (a = w.current) || a.call(w))
                        }))
                    }),
                    V = (0, B.z)(a => {
                        let b = L.current.find(({
                            el: b
                        }) => b === a);
                        return b ? "visible" !== b.state && (b.state = "visible") : L.current.push({
                            el: a,
                            state: "visible"
                        }), () => j(a, A.l4.Unmount)
                    }),
                    z = (0, F.useRef)([]),
                    q = (0, F.useRef)(Promise.resolve()),
                    $ = (0, F.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    W = (0, B.z)((a, w, L) => {
                        z.current.splice(0), b && (b.chains.current[w] = b.chains.current[w].filter(([b]) => b !== a)), null == b || b.chains.current[w].push([a, new Promise(a => {
                            z.current.push(a)
                        })]), null == b || b.chains.current[w].push([a, new Promise(a => {
                            Promise.all($.current[w].map(([a, b]) => b)).then(() => a())
                        })]), "enter" === w ? q.current = q.current.then(() => null == b ? void 0 : b.wait.current).then(() => L(w)) : L(w)
                    }),
                    Z = (0, B.z)((a, b, w) => {
                        Promise.all($.current[b].splice(0).map(([a, b]) => b)).then(() => {
                            var a;
                            null == (a = z.current.shift()) || a()
                        }).then(() => w(b))
                    });
                return (0, F.useMemo)(() => ({
                    children: L,
                    register: V,
                    unregister: j,
                    onStart: W,
                    onStop: Z,
                    wait: q,
                    chains: $
                }), [V, j, L, W, Z, $, q])
            }

            function xe() {}
            Z.displayName = "NestingContext";
            let G = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function se(a) {
                var b;
                let w = {};
                for (let L of G) w[L] = null != (b = a[L]) ? b : xe;
                return w
            }
            let K = A.AN.RenderStrategy,
                J = (0, A.yV)(function(a, b) {
                    let {
                        show: w,
                        appear: L = !1,
                        unmount: k = !0,
                        ...x
                    } = a, H = (0, F.useRef)(null), z = (0, V.T)(H, b);
                    (0, j.H)();
                    let Y = (0, M.oJ)();
                    if (void 0 === w && null !== Y && (w = (Y & M.ZM.Open) === M.ZM.Open), ![!0, !1].includes(w)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [q, W] = (0, F.useState)(w ? "visible" : "hidden"), G = oe(() => {
                        W("hidden")
                    }), [J, ee] = (0, F.useState)(!0), et = (0, F.useRef)([w]);
                    (0, _.e)(() => {
                        !1 !== J && et.current[et.current.length - 1] !== w && (et.current.push(w), ee(!1))
                    }, [et, w]);
                    let en = (0, F.useMemo)(() => ({
                        show: w,
                        appear: L,
                        initial: J
                    }), [w, L, J]);
                    (0, F.useEffect)(() => {
                        if (w) W("visible");
                        else if (U(G)) {
                            let a = H.current;
                            if (!a) return;
                            let b = a.getBoundingClientRect();
                            0 === b.x && 0 === b.y && 0 === b.width && 0 === b.height && W("hidden")
                        } else W("hidden")
                    }, [w, G]);
                    let er = {
                            unmount: k
                        },
                        eo = (0, B.z)(() => {
                            var b;
                            J && ee(!1), null == (b = a.beforeEnter) || b.call(a)
                        }),
                        ei = (0, B.z)(() => {
                            var b;
                            J && ee(!1), null == (b = a.beforeLeave) || b.call(a)
                        });
                    return F.createElement(Z.Provider, {
                        value: G
                    }, F.createElement($.Provider, {
                        value: en
                    }, (0, A.sY)({
                        ourProps: { ...er,
                            as: F.Fragment,
                            children: F.createElement(Q, {
                                ref: z,
                                ...er,
                                ...x,
                                beforeEnter: eo,
                                beforeLeave: ei
                            })
                        },
                        theirProps: {},
                        defaultTag: F.Fragment,
                        features: K,
                        visible: "visible" === q,
                        name: "Transition"
                    })))
                }),
                Q = (0, A.yV)(function(a, b) {
                    var w, L, W;
                    let G;
                    let {
                        beforeEnter: J,
                        afterEnter: Q,
                        beforeLeave: ee,
                        afterLeave: et,
                        enter: en,
                        enterFrom: er,
                        enterTo: eo,
                        entered: ei,
                        leave: el,
                        leaveFrom: eu,
                        leaveTo: ea,
                        ...es
                    } = a, ec = (0, F.useRef)(null), ed = (0, V.T)(ec, b), ef = null == (w = es.unmount) || w ? A.l4.Unmount : A.l4.Hidden, {
                        show: ep,
                        appear: em,
                        initial: ev
                    } = function() {
                        let a = (0, F.useContext)($);
                        if (null === a) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return a
                    }(), [eh, eg] = (0, F.useState)(ep ? "visible" : "hidden"), eE = function() {
                        let a = (0, F.useContext)(Z);
                        if (null === a) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return a
                    }(), {
                        register: eb,
                        unregister: ew
                    } = eE;
                    (0, F.useEffect)(() => eb(ec), [eb, ec]), (0, F.useEffect)(() => {
                        if (ef === A.l4.Hidden && ec.current) {
                            if (ep && "visible" !== eh) {
                                eg("visible");
                                return
                            }
                            return (0, k.E)(eh, {
                                hidden: () => ew(ec),
                                visible: () => eb(ec)
                            })
                        }
                    }, [eh, ec, eb, ew, ep, ef]);
                    let ey = (0, H.E)({
                            base: S(es.className),
                            enter: S(en),
                            enterFrom: S(er),
                            enterTo: S(eo),
                            entered: S(ei),
                            leave: S(el),
                            leaveFrom: S(eu),
                            leaveTo: S(ea)
                        }),
                        eT = (W = {
                            beforeEnter: J,
                            afterEnter: Q,
                            beforeLeave: ee,
                            afterLeave: et
                        }, G = (0, F.useRef)(se(W)), (0, F.useEffect)(() => {
                            G.current = se(W)
                        }, [W]), G),
                        eS = (0, j.H)();
                    (0, F.useEffect)(() => {
                        if (eS && "visible" === eh && null === ec.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }, [ec, eh, eS]);
                    let eP = em && ep && ev,
                        eC = eS && (!ev || em) ? ep ? "enter" : "leave" : "idle",
                        eO = function(a = 0) {
                            let [b, w] = (0, F.useState)(a), L = (0, x.t)(), A = (0, F.useCallback)(a => {
                                L.current && w(b => b | a)
                            }, [b, L]), M = (0, F.useCallback)(a => !!(b & a), [b]);
                            return {
                                flags: b,
                                addFlag: A,
                                hasFlag: M,
                                removeFlag: (0, F.useCallback)(a => {
                                    L.current && w(b => b & ~a)
                                }, [w, L]),
                                toggleFlag: (0, F.useCallback)(a => {
                                    L.current && w(b => b ^ a)
                                }, [w])
                            }
                        }(0),
                        eL = (0, B.z)(a => (0, k.E)(a, {
                            enter: () => {
                                eO.addFlag(M.ZM.Opening), eT.current.beforeEnter()
                            },
                            leave: () => {
                                eO.addFlag(M.ZM.Closing), eT.current.beforeLeave()
                            },
                            idle: () => {}
                        })),
                        eF = (0, B.z)(a => (0, k.E)(a, {
                            enter: () => {
                                eO.removeFlag(M.ZM.Opening), eT.current.afterEnter()
                            },
                            leave: () => {
                                eO.removeFlag(M.ZM.Closing), eT.current.afterLeave()
                            },
                            idle: () => {}
                        })),
                        eA = oe(() => {
                            eg("hidden"), ew(ec)
                        }, eE);
                    ! function({
                        immediate: a,
                        container: b,
                        direction: w,
                        classes: L,
                        onStart: F,
                        onStop: A
                    }) {
                        let M = (0, x.t)(),
                            j = (0, Y.G)(),
                            V = (0, H.E)(w);
                        (0, _.e)(() => {
                            a && (V.current = "enter")
                        }, [a]), (0, _.e)(() => {
                            let a = (0, z.k)();
                            j.add(a.dispose);
                            let w = b.current;
                            if (w && "idle" !== V.current && M.current) {
                                var x, _, H;
                                let b, M, j, Y, B, q, $;
                                return a.dispose(), F.current(V.current), a.add((x = L.current, _ = "enter" === V.current, H = () => {
                                    a.dispose(), A.current(V.current)
                                }, M = _ ? "enter" : "leave", j = (0, z.k)(), Y = void 0 !== H ? (b = {
                                    called: !1
                                }, (...a) => {
                                    if (!b.called) return b.called = !0, H(...a)
                                }) : () => {}, "enter" === M && (w.removeAttribute("hidden"), w.style.display = ""), B = (0, k.E)(M, {
                                    enter: () => x.enter,
                                    leave: () => x.leave
                                }), q = (0, k.E)(M, {
                                    enter: () => x.enterTo,
                                    leave: () => x.leaveTo
                                }), $ = (0, k.E)(M, {
                                    enter: () => x.enterFrom,
                                    leave: () => x.leaveFrom
                                }), v(w, ...x.base, ...x.enter, ...x.enterTo, ...x.enterFrom, ...x.leave, ...x.leaveFrom, ...x.leaveTo, ...x.entered), g(w, ...x.base, ...B, ...$), j.nextFrame(() => {
                                    v(w, ...x.base, ...B, ...$), g(w, ...x.base, ...B, ...q),
                                        function(a, b) {
                                            let w = (0, z.k)();
                                            if (!a) return w.dispose;
                                            let {
                                                transitionDuration: L,
                                                transitionDelay: F
                                            } = getComputedStyle(a), [A, M] = [L, F].map(a => {
                                                let [b = 0] = a.split(",").filter(Boolean).map(a => a.includes("ms") ? parseFloat(a) : 1e3 * parseFloat(a)).sort((a, b) => b - a);
                                                return b
                                            }), k = A + M;
                                            if (0 !== k) {
                                                w.group(w => {
                                                    w.setTimeout(() => {
                                                        b(), w.dispose()
                                                    }, k), w.addEventListener(a, "transitionrun", a => {
                                                        a.target === a.currentTarget && w.dispose()
                                                    })
                                                });
                                                let L = w.addEventListener(a, "transitionend", a => {
                                                    a.target === a.currentTarget && (b(), L())
                                                })
                                            } else b();
                                            w.add(() => b()), w.dispose
                                        }(w, () => (v(w, ...x.base, ...B), g(w, ...x.base, ...x.entered), Y()))
                                }), j.dispose)), a.dispose
                            }
                        }, [w])
                    }({
                        immediate: eP,
                        container: ec,
                        classes: ey,
                        direction: eC,
                        onStart: (0, H.E)(a => {
                            eA.onStart(ec, a, eL)
                        }),
                        onStop: (0, H.E)(a => {
                            eA.onStop(ec, a, eF), "leave" !== a || U(eA) || (eg("hidden"), ew(ec))
                        })
                    });
                    let eM = es;
                    return eP ? eM = { ...eM,
                        className: (0, q.A)(es.className, ...ey.current.enter, ...ey.current.enterFrom)
                    } : (eM.className = (0, q.A)(es.className, null == (L = ec.current) ? void 0 : L.className), "" === eM.className && delete eM.className), F.createElement(Z.Provider, {
                        value: eA
                    }, F.createElement(M.up, {
                        value: (0, k.E)(eh, {
                            visible: M.ZM.Open,
                            hidden: M.ZM.Closed
                        }) | eO.flags
                    }, (0, A.sY)({
                        ourProps: {
                            ref: ed
                        },
                        theirProps: eM,
                        defaultTag: "div",
                        features: K,
                        visible: "visible" === eh,
                        name: "Transition.Child"
                    })))
                }),
                ee = (0, A.yV)(function(a, b) {
                    let w = null !== (0, F.useContext)($),
                        L = null !== (0, M.oJ)();
                    return F.createElement(F.Fragment, null, !w && L ? F.createElement(J, {
                        ref: b,
                        ...a
                    }) : F.createElement(Q, {
                        ref: b,
                        ...a
                    }))
                }),
                et = Object.assign(J, {
                    Child: ee,
                    Root: J
                })
        },
        82769: function(a, b, w) {
            w.d(b, {
                G: function() {
                    return p
                }
            });
            var L = w(2265),
                F = w(85390);

            function p() {
                let [a] = (0, L.useState)(F.k);
                return (0, L.useEffect)(() => () => a.dispose(), [a]), a
            }
        },
        12950: function(a, b, w) {
            w.d(b, {
                z: function() {
                    return o
                }
            });
            var L = w(2265),
                F = w(61858);
            let o = function(a) {
                let b = (0, F.E)(a);
                return L.useCallback((...a) => b.current(...a), [b])
            }
        },
        75606: function(a, b, w) {
            w.d(b, {
                M: function() {
                    return x
                }
            });
            var L, F = w(2265),
                A = w(32600),
                M = w(48957),
                k = w(52057);
            let x = null != (L = F.useId) ? L : function() {
                let a = (0, M.H)(),
                    [b, w] = F.useState(a ? () => k.O.nextId() : null);
                return (0, A.e)(() => {
                    null === b && w(k.O.nextId())
                }, [b]), null != b ? "" + b : void 0
            }
        },
        80634: function(a, b, w) {
            w.d(b, {
                t: function() {
                    return f
                }
            });
            var L = w(2265),
                F = w(32600);

            function f() {
                let a = (0, L.useRef)(!1);
                return (0, F.e)(() => (a.current = !0, () => {
                    a.current = !1
                }), []), a
            }
        },
        32600: function(a, b, w) {
            w.d(b, {
                e: function() {
                    return l
                }
            });
            var L = w(2265),
                F = w(52057);
            let l = (a, b) => {
                F.O.isServer ? (0, L.useEffect)(a, b) : (0, L.useLayoutEffect)(a, b)
            }
        },
        61858: function(a, b, w) {
            w.d(b, {
                E: function() {
                    return s
                }
            });
            var L = w(2265),
                F = w(32600);

            function s(a) {
                let b = (0, L.useRef)(a);
                return (0, F.e)(() => {
                    b.current = a
                }, [a]), b
            }
        },
        90583: function(a, b, w) {
            w.d(b, {
                O: function() {
                    return h
                }
            });
            var L = w(2265),
                F = w(65410),
                A = w(61858);

            function d(a, b, w) {
                let F = (0, A.E)(b);
                (0, L.useEffect)(() => {
                    function t(a) {
                        F.current(a)
                    }
                    return document.addEventListener(a, t, w), () => document.removeEventListener(a, t, w)
                }, [a, w])
            }
            var M = w(27976);

            function h(a, b, w = !0) {
                let A = (0, L.useRef)(!1);

                function c(w, L) {
                    if (!A.current || w.defaultPrevented) return;
                    let M = L(w);
                    if (null !== M && M.getRootNode().contains(M) && M.isConnected) {
                        for (let b of function u(a) {
                                return "function" == typeof a ? u(a()) : Array.isArray(a) || a instanceof Set ? a : [a]
                            }(a)) {
                            if (null === b) continue;
                            let a = b instanceof HTMLElement ? b : b.current;
                            if (null != a && a.contains(M) || w.composed && w.composedPath().includes(a)) return
                        }
                        return (0, F.sP)(M, F.tJ.Loose) || -1 === M.tabIndex || w.preventDefault(), b(w, M)
                    }
                }(0, L.useEffect)(() => {
                    requestAnimationFrame(() => {
                        A.current = w
                    })
                }, [w]);
                let k = (0, L.useRef)(null);
                d("pointerdown", a => {
                    var b, w;
                    A.current && (k.current = (null == (w = null == (b = a.composedPath) ? void 0 : b.call(a)) ? void 0 : w[0]) || a.target)
                }, !0), d("mousedown", a => {
                    var b, w;
                    A.current && (k.current = (null == (w = null == (b = a.composedPath) ? void 0 : b.call(a)) ? void 0 : w[0]) || a.target)
                }, !0), d("click", a => {
                    k.current && (c(a, () => k.current), k.current = null)
                }, !0), d("touchend", a => c(a, () => a.target instanceof HTMLElement ? a.target : null), !0), (0, M.s)("blur", a => c(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
            }
        },
        57728: function(a, b, w) {
            w.d(b, {
                i: function() {
                    return n
                }
            });
            var L = w(2265),
                F = w(54851);

            function n(...a) {
                return (0, L.useMemo)(() => (0, F.r)(...a), [...a])
            }
        },
        48957: function(a, b, w) {
            w.d(b, {
                H: function() {
                    return l
                }
            });
            var L, F = w(2265),
                A = w(52057);

            function l() {
                let a;
                let b = (a = "undefined" == typeof document, (0, (L || (L = w.t(F, 2))).useSyncExternalStore)(() => () => {}, () => !1, () => !a)),
                    [M, k] = F.useState(A.O.isHandoffComplete);
                return M && !1 === A.O.isHandoffComplete && k(!1), F.useEffect(() => {
                    !0 !== M && k(!0)
                }, [M]), F.useEffect(() => A.O.handoff(), []), !b && M
            }
        },
        46618: function(a, b, w) {
            w.d(b, {
                T: function() {
                    return y
                },
                h: function() {
                    return T
                }
            });
            var L = w(2265),
                F = w(12950);
            let A = Symbol();

            function T(a, b = !0) {
                return Object.assign(a, {
                    [A]: b
                })
            }

            function y(...a) {
                let b = (0, L.useRef)(a);
                (0, L.useEffect)(() => {
                    b.current = a
                }, [a]);
                let w = (0, F.z)(a => {
                    for (let w of b.current) null != w && ("function" == typeof w ? w(a) : w.current = a)
                });
                return a.every(a => null == a || (null == a ? void 0 : a[A])) ? void 0 : w
            }
        },
        7566: function(a, b, w) {
            w.d(b, {
                q: function() {
                    return m
                }
            });
            var L = w(2265),
                F = w(12950);

            function m(a, b) {
                let w = (0, L.useRef)([]),
                    A = (0, F.z)(a);
                (0, L.useEffect)(() => {
                    let a = [...w.current];
                    for (let [L, F] of b.entries())
                        if (w.current[L] !== F) {
                            let L = A(b, a);
                            return w.current = b, L
                        }
                }, [A, ...b])
            }
        },
        27976: function(a, b, w) {
            w.d(b, {
                s: function() {
                    return s
                }
            });
            var L = w(2265),
                F = w(61858);

            function s(a, b, w) {
                let A = (0, F.E)(b);
                (0, L.useEffect)(() => {
                    function t(a) {
                        A.current(a)
                    }
                    return window.addEventListener(a, t, w), () => window.removeEventListener(a, t, w)
                }, [a, w])
            }
        },
        58227: function(a, b, w) {
            w.d(b, {
                A: function() {
                    return A
                },
                _: function() {
                    return M
                }
            });
            var L, F = w(11931),
                A = ((L = A || {})[L.None = 1] = "None", L[L.Focusable = 2] = "Focusable", L[L.Hidden = 4] = "Hidden", L);
            let M = (0, F.yV)(function(a, b) {
                let {
                    features: w = 1,
                    ...L
                } = a, A = {
                    ref: b,
                    "aria-hidden": (2 & w) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & w) == 4 && (2 & w) != 2 && {
                            display: "none"
                        }
                    }
                };
                return (0, F.sY)({
                    ourProps: A,
                    theirProps: L,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            })
        },
        25306: function(a, b, w) {
            w.d(b, {
                ZM: function() {
                    return M
                },
                oJ: function() {
                    return C
                },
                up: function() {
                    return c
                }
            });
            var L, F = w(2265);
            let A = (0, F.createContext)(null);
            A.displayName = "OpenClosedContext";
            var M = ((L = M || {})[L.Open = 1] = "Open", L[L.Closed = 2] = "Closed", L[L.Closing = 4] = "Closing", L[L.Opening = 8] = "Opening", L);

            function C() {
                return (0, F.useContext)(A)
            }

            function c({
                value: a,
                children: b
            }) {
                return F.createElement(A.Provider, {
                    value: a
                }, b)
            }
        },
        35863: function(a, b, w) {
            function r(a) {
                let b = a.parentElement,
                    w = null;
                for (; b && !(b instanceof HTMLFieldSetElement);) b instanceof HTMLLegendElement && (w = b), b = b.parentElement;
                let L = (null == b ? void 0 : b.getAttribute("disabled")) === "";
                return !(L && function(a) {
                    if (!a) return !1;
                    let b = a.previousElementSibling;
                    for (; null !== b;) {
                        if (b instanceof HTMLLegendElement) return !1;
                        b = b.previousElementSibling
                    }
                    return !0
                }(w)) && L
            }
            w.d(b, {
                P: function() {
                    return r
                }
            })
        },
        63960: function(a, b, w) {
            w.d(b, {
                A: function() {
                    return t
                }
            });

            function t(...a) {
                return Array.from(new Set(a.flatMap(a => "string" == typeof a ? a.split(" ") : []))).filter(Boolean).join(" ")
            }
        },
        85390: function(a, b, w) {
            w.d(b, {
                k: function() {
                    return function o() {
                        let a = [],
                            b = {
                                addEventListener: (a, w, L, F) => (a.addEventListener(w, L, F), b.add(() => a.removeEventListener(w, L, F))),
                                requestAnimationFrame(...a) {
                                    let w = requestAnimationFrame(...a);
                                    return b.add(() => cancelAnimationFrame(w))
                                },
                                nextFrame: (...a) => b.requestAnimationFrame(() => b.requestAnimationFrame(...a)),
                                setTimeout(...a) {
                                    let w = setTimeout(...a);
                                    return b.add(() => clearTimeout(w))
                                },
                                microTask(...a) {
                                    let w = {
                                        current: !0
                                    };
                                    return (0, L.Y)(() => {
                                        w.current && a[0]()
                                    }), b.add(() => {
                                        w.current = !1
                                    })
                                },
                                style(a, b, w) {
                                    let L = a.style.getPropertyValue(b);
                                    return Object.assign(a.style, {
                                        [b]: w
                                    }), this.add(() => {
                                        Object.assign(a.style, {
                                            [b]: L
                                        })
                                    })
                                },
                                group(a) {
                                    let b = o();
                                    return a(b), this.add(() => b.dispose())
                                },
                                add: b => (a.push(b), () => {
                                    let w = a.indexOf(b);
                                    if (w >= 0)
                                        for (let b of a.splice(w, 1)) b()
                                }),
                                dispose() {
                                    for (let b of a.splice(0)) b()
                                }
                            };
                        return b
                    }
                }
            });
            var L = w(55195)
        },
        52057: function(a, b, w) {
            w.d(b, {
                O: function() {
                    return F
                }
            });
            var L = Object.defineProperty,
                d = (a, b, w) => b in a ? L(a, b, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: w
                }) : a[b] = w,
                r = (a, b, w) => (d(a, "symbol" != typeof b ? b + "" : b, w), w);
            let F = new class {
                constructor() {
                    r(this, "current", this.detect()), r(this, "handoffState", "pending"), r(this, "currentId", 0)
                }
                set(a) {
                    this.current !== a && (this.handoffState = "pending", this.currentId = 0, this.current = a)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
            }
        },
        65410: function(a, b, w) {
            w.d(b, {
                C5: function() {
                    return y
                },
                TO: function() {
                    return j
                },
                fE: function() {
                    return V
                },
                jA: function() {
                    return O
                },
                sP: function() {
                    return h
                },
                tJ: function() {
                    return Y
                },
                z2: function() {
                    return I
                }
            });
            var L, F, A, M, k, x = w(60597),
                _ = w(54851);
            let H = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(a => `${a}:not([tabindex='-1'])`).join(",");
            var j = ((L = j || {})[L.First = 1] = "First", L[L.Previous = 2] = "Previous", L[L.Next = 4] = "Next", L[L.Last = 8] = "Last", L[L.WrapAround = 16] = "WrapAround", L[L.NoScroll = 32] = "NoScroll", L),
                V = ((F = V || {})[F.Error = 0] = "Error", F[F.Overflow = 1] = "Overflow", F[F.Success = 2] = "Success", F[F.Underflow = 3] = "Underflow", F),
                z = ((A = z || {})[A.Previous = -1] = "Previous", A[A.Next = 1] = "Next", A),
                Y = ((M = Y || {})[M.Strict = 0] = "Strict", M[M.Loose = 1] = "Loose", M);

            function h(a, b = 0) {
                var w;
                return a !== (null == (w = (0, _.r)(a)) ? void 0 : w.body) && (0, x.E)(b, {
                    0: () => a.matches(H),
                    1() {
                        let b = a;
                        for (; null !== b;) {
                            if (b.matches(H)) return !0;
                            b = b.parentElement
                        }
                        return !1
                    }
                })
            }
            var B = ((k = B || {})[k.Keyboard = 0] = "Keyboard", k[k.Mouse = 1] = "Mouse", k);

            function y(a) {
                null == a || a.focus({
                    preventScroll: !0
                })
            }

            function I(a, b = a => a) {
                return a.slice().sort((a, w) => {
                    let L = b(a),
                        F = b(w);
                    if (null === L || null === F) return 0;
                    let A = L.compareDocumentPosition(F);
                    return A & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : A & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function O(a, b, {
                sorted: w = !0,
                relativeTo: L = null,
                skipElements: F = []
            } = {}) {
                var A, M, k;
                let x = Array.isArray(a) ? a.length > 0 ? a[0].ownerDocument : document : a.ownerDocument,
                    _ = Array.isArray(a) ? w ? I(a) : a : function(a = document.body) {
                        return null == a ? [] : Array.from(a.querySelectorAll(H)).sort((a, b) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) - (b.tabIndex || Number.MAX_SAFE_INTEGER)))
                    }(a);
                F.length > 0 && _.length > 1 && (_ = _.filter(a => !F.includes(a))), L = null != L ? L : x.activeElement;
                let j = (() => {
                        if (5 & b) return 1;
                        if (10 & b) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    V = (() => {
                        if (1 & b) return 0;
                        if (2 & b) return Math.max(0, _.indexOf(L)) - 1;
                        if (4 & b) return Math.max(0, _.indexOf(L)) + 1;
                        if (8 & b) return _.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    z = 32 & b ? {
                        preventScroll: !0
                    } : {},
                    Y = 0,
                    B = _.length,
                    q;
                do {
                    if (Y >= B || Y + B <= 0) return 0;
                    let a = V + Y;
                    if (16 & b) a = (a + B) % B;
                    else {
                        if (a < 0) return 3;
                        if (a >= B) return 1
                    }
                    null == (q = _[a]) || q.focus(z), Y += j
                } while (q !== x.activeElement);
                return 6 & b && null != (k = null == (M = null == (A = q) ? void 0 : A.matches) ? void 0 : M.call(A, "textarea,input")) && k && q.select(), 2
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", a => {
                a.metaKey || a.altKey || a.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", a => {
                1 === a.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === a.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0))
        },
        60597: function(a, b, w) {
            w.d(b, {
                E: function() {
                    return u
                }
            });

            function u(a, b, ...w) {
                if (a in b) {
                    let L = b[a];
                    return "function" == typeof L ? L(...w) : L
                }
                let L = Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(b).map(a=>`"${a}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(L, u), L
            }
        },
        55195: function(a, b, w) {
            w.d(b, {
                Y: function() {
                    return t
                }
            });

            function t(a) {
                "function" == typeof queueMicrotask ? queueMicrotask(a) : Promise.resolve().then(a).catch(a => setTimeout(() => {
                    throw a
                }))
            }
        },
        54851: function(a, b, w) {
            w.d(b, {
                r: function() {
                    return e
                }
            });
            var L = w(52057);

            function e(a) {
                return L.O.isServer ? null : a instanceof Node ? a.ownerDocument : null != a && a.hasOwnProperty("current") && a.current instanceof Node ? a.current.ownerDocument : document
            }
        },
        34644: function(a, b, w) {
            function t() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function n() {
                return t() || /Android/gi.test(window.navigator.userAgent)
            }
            w.d(b, {
                gn: function() {
                    return t
                },
                tq: function() {
                    return n
                }
            })
        },
        11931: function(a, b, w) {
            w.d(b, {
                AN: function() {
                    return x
                },
                l4: function() {
                    return _
                },
                oA: function() {
                    return R
                },
                sY: function() {
                    return X
                },
                yV: function() {
                    return D
                }
            });
            var L, F, A = w(2265),
                M = w(63960),
                k = w(60597),
                x = ((L = x || {})[L.None = 0] = "None", L[L.RenderStrategy = 1] = "RenderStrategy", L[L.Static = 2] = "Static", L),
                _ = ((F = _ || {})[F.Unmount = 0] = "Unmount", F[F.Hidden = 1] = "Hidden", F);

            function X({
                ourProps: a,
                theirProps: b,
                slot: w,
                defaultTag: L,
                features: F,
                visible: A = !0,
                name: M
            }) {
                let x = N(b, a);
                if (A) return c(x, w, L, M);
                let _ = null != F ? F : 0;
                if (2 & _) {
                    let {
                        static: a = !1,
                        ...b
                    } = x;
                    if (a) return c(b, w, L, M)
                }
                if (1 & _) {
                    let {
                        unmount: a = !0,
                        ...b
                    } = x;
                    return (0, k.E)(a ? 0 : 1, {
                        0: () => null,
                        1: () => c({ ...b,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, w, L, M)
                    })
                }
                return c(x, w, L, M)
            }

            function c(a, b = {}, w, L) {
                let {
                    as: F = w,
                    children: k,
                    refName: x = "ref",
                    ..._
                } = g(a, ["unmount", "static"]), H = void 0 !== a.ref ? {
                    [x]: a.ref
                } : {}, j = "function" == typeof k ? k(b) : k;
                "className" in _ && _.className && "function" == typeof _.className && (_.className = _.className(b));
                let V = {};
                if (b) {
                    let a = !1,
                        w = [];
                    for (let [L, F] of Object.entries(b)) "boolean" == typeof F && (a = !0), !0 === F && w.push(L);
                    a && (V["data-headlessui-state"] = w.join(" "))
                }
                if (F === A.Fragment && Object.keys(R(_)).length > 0) {
                    if (!(0, A.isValidElement)(j) || Array.isArray(j) && j.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${L} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(_).map(a => `  - ${a}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(a => `  - ${a}`).join(`
`)].join(`
`));
                    let a = j.props,
                        b = "function" == typeof(null == a ? void 0 : a.className) ? (...b) => (0, M.A)(null == a ? void 0 : a.className(...b), _.className) : (0, M.A)(null == a ? void 0 : a.className, _.className),
                        w = b ? {
                            className: b
                        } : {};
                    return (0, A.cloneElement)(j, Object.assign({}, N(j.props, R(g(_, ["ref"]))), V, H, function(...a) {
                        return {
                            ref: a.every(a => null == a) ? void 0 : b => {
                                for (let w of a) null != w && ("function" == typeof w ? w(b) : w.current = b)
                            }
                        }
                    }(j.ref, H.ref), w))
                }
                return (0, A.createElement)(F, Object.assign({}, g(_, ["ref"]), F !== A.Fragment && H, F !== A.Fragment && V), j)
            }

            function N(...a) {
                if (0 === a.length) return {};
                if (1 === a.length) return a[0];
                let b = {},
                    w = {};
                for (let L of a)
                    for (let a in L) a.startsWith("on") && "function" == typeof L[a] ? (null != w[a] || (w[a] = []), w[a].push(L[a])) : b[a] = L[a];
                if (b.disabled || b["aria-disabled"]) return Object.assign(b, Object.fromEntries(Object.keys(w).map(a => [a, void 0])));
                for (let a in w) Object.assign(b, {
                    [a](b, ...L) {
                        for (let F of w[a]) {
                            if ((b instanceof Event || (null == b ? void 0 : b.nativeEvent) instanceof Event) && b.defaultPrevented) return;
                            F(b, ...L)
                        }
                    }
                });
                return b
            }

            function D(a) {
                var b;
                return Object.assign((0, A.forwardRef)(a), {
                    displayName: null != (b = a.displayName) ? b : a.name
                })
            }

            function R(a) {
                let b = Object.assign({}, a);
                for (let a in b) void 0 === b[a] && delete b[a];
                return b
            }

            function g(a, b = []) {
                let w = Object.assign({}, a);
                for (let a of b) a in w && delete w[a];
                return w
            }
        }
    }
]);