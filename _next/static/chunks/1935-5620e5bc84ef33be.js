"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1935], {
        52223: function(e, r, n) {
            var a = this && this.__assign || function() {
                    return (a = Object.assign || function(e) {
                        for (var r, n = 1, a = arguments.length; n < a; n++)
                            for (var l in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
                        return e
                    }).apply(this, arguments)
                },
                l = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var u = n(2265),
                c = l(n(9875)),
                s = n(24033);
            r.default = function(e) {
                var r = (0, s.useRouter)(),
                    n = (0, u.useState)(e),
                    l = n[0],
                    d = n[1],
                    f = (0, s.usePathname)() + function(r) {
                        var n = a({}, r);
                        for (var l in n) n[l] === e[l] && delete n[l];
                        return "?" + c.default.stringify(n)
                    }(l);
                return (0, u.useEffect)(function() {
                    r.push(f)
                }, [f]), (0, u.useEffect)(function() {
                    d(a(a({}, e), c.default.parse(window.location.search.slice(1))))
                }, []), [l, d]
            }
        },
        93168: function(e, r, n) {
            n.d(r, {
                h: function() {
                    return $
                }
            });
            var a, l, u, c, s, d = n(2265),
                f = n(32600),
                p = n(61858);

            function use_computed_i(e, r) {
                let [n, a] = (0, d.useState)(e), l = (0, p.E)(e);
                return (0, f.e)(() => a(l.current), [l, a, ...r]), n
            }
            var b = n(82769),
                v = n(12950),
                m = n(75606),
                g = n(90583);

            function i(e) {
                var r;
                if (e.type) return e.type;
                let n = null != (r = e.as) ? r : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }
            var h = n(46618),
                x = n(54851),
                R = ((a = R || {})[a.First = 0] = "First", a[a.Previous = 1] = "Previous", a[a.Next = 2] = "Next", a[a.Last = 3] = "Last", a[a.Specific = 4] = "Specific", a[a.Nothing = 5] = "Nothing", a),
                w = n(85390),
                O = n(11931),
                y = n(35863),
                S = n(60597);

            function form_f(e, r) {
                return e ? e + "[" + r + "]" : r
            }
            var C = n(65410),
                E = n(58227),
                I = n(25306),
                M = n(93850),
                z = n(7566);

            function t(e) {
                return [e.screenX, e.screenY]
            }
            var _ = n(34644),
                k = n(57728),
                A = ((l = A || {})[l.Open = 0] = "Open", l[l.Closed = 1] = "Closed", l),
                P = ((u = P || {})[u.Single = 0] = "Single", u[u.Multi = 1] = "Multi", u),
                T = ((c = T || {})[c.Pointer = 0] = "Pointer", c[c.Other = 1] = "Other", c),
                L = ((s = L || {})[s.OpenCombobox = 0] = "OpenCombobox", s[s.CloseCombobox = 1] = "CloseCombobox", s[s.GoToOption = 2] = "GoToOption", s[s.RegisterOption = 3] = "RegisterOption", s[s.UnregisterOption = 4] = "UnregisterOption", s[s.RegisterLabel = 5] = "RegisterLabel", s);

            function ae(e, r = e => e) {
                let n = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
                    a = (0, C.z2)(r(e.options.slice()), e => e.dataRef.current.domRef.current),
                    l = n ? a.indexOf(n) : null;
                return -1 === l && (l = null), {
                    options: a,
                    activeOptionIndex: l
                }
            }
            let N = {
                    1(e) {
                        var r;
                        return null != (r = e.dataRef.current) && r.disabled || 1 === e.comboboxState ? e : { ...e,
                            activeOptionIndex: null,
                            comboboxState: 1
                        }
                    },
                    0(e) {
                        var r;
                        if (null != (r = e.dataRef.current) && r.disabled || 0 === e.comboboxState) return e;
                        let n = e.activeOptionIndex;
                        if (e.dataRef.current) {
                            let {
                                isSelected: r
                            } = e.dataRef.current, a = e.options.findIndex(e => r(e.dataRef.current.value)); - 1 !== a && (n = a)
                        }
                        return { ...e,
                            comboboxState: 0,
                            activeOptionIndex: n
                        }
                    },
                    2(e, r) {
                        var n, a, l, u;
                        if (null != (n = e.dataRef.current) && n.disabled || null != (a = e.dataRef.current) && a.optionsRef.current && !(null != (l = e.dataRef.current) && l.optionsPropsRef.current.static) && 1 === e.comboboxState) return e;
                        let c = ae(e);
                        if (null === c.activeOptionIndex) {
                            let e = c.options.findIndex(e => !e.dataRef.current.disabled); - 1 !== e && (c.activeOptionIndex = e)
                        }
                        let s = function(e, r) {
                            let n = r.resolveItems();
                            if (n.length <= 0) return null;
                            let a = r.resolveActiveIndex(),
                                l = null != a ? a : -1,
                                u = (() => {
                                    switch (e.focus) {
                                        case 0:
                                            return n.findIndex(e => !r.resolveDisabled(e));
                                        case 1:
                                            {
                                                let e = n.slice().reverse().findIndex((e, n, a) => (-1 === l || !(a.length - n - 1 >= l)) && !r.resolveDisabled(e));
                                                return -1 === e ? e : n.length - 1 - e
                                            }
                                        case 2:
                                            return n.findIndex((e, n) => !(n <= l) && !r.resolveDisabled(e));
                                        case 3:
                                            {
                                                let e = n.slice().reverse().findIndex(e => !r.resolveDisabled(e));
                                                return -1 === e ? e : n.length - 1 - e
                                            }
                                        case 4:
                                            return n.findIndex(n => r.resolveId(n) === e.id);
                                        case 5:
                                            return null;
                                        default:
                                            ! function(e) {
                                                throw Error("Unexpected object: " + e)
                                            }(e)
                                    }
                                })();
                            return -1 === u ? a : u
                        }(r, {
                            resolveItems: () => c.options,
                            resolveActiveIndex: () => c.activeOptionIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                        return { ...e,
                            ...c,
                            activeOptionIndex: s,
                            activationTrigger: null != (u = r.trigger) ? u : 1
                        }
                    },
                    3: (e, r) => {
                        var n, a;
                        let l = {
                                id: r.id,
                                dataRef: r.dataRef
                            },
                            u = ae(e, e => [...e, l]);
                        null === e.activeOptionIndex && null != (n = e.dataRef.current) && n.isSelected(r.dataRef.current.value) && (u.activeOptionIndex = u.options.indexOf(l));
                        let c = { ...e,
                            ...u,
                            activationTrigger: 1
                        };
                        return null != (a = e.dataRef.current) && a.__demoMode && void 0 === e.dataRef.current.value && (c.activeOptionIndex = 0), c
                    },
                    4: (e, r) => {
                        let n = ae(e, e => {
                            let n = e.findIndex(e => e.id === r.id);
                            return -1 !== n && e.splice(n, 1), e
                        });
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    },
                    5: (e, r) => ({ ...e,
                        labelId: r.id
                    })
                },
                j = (0, d.createContext)(null);

            function Z(e) {
                let r = (0, d.useContext)(j);
                if (null === r) {
                    let r = Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(r, Z), r
                }
                return r
            }
            j.displayName = "ComboboxActionsContext";
            let V = (0, d.createContext)(null);

            function J(e) {
                let r = (0, d.useContext)(V);
                if (null === r) {
                    let r = Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(r, J), r
                }
                return r
            }

            function Xe(e, r) {
                return (0, S.E)(r.type, N, e, r)
            }
            V.displayName = "ComboboxDataContext";
            let D = d.Fragment,
                B = O.AN.RenderStrategy | O.AN.Static,
                F = (0, O.yV)(function(e, r) {
                    let {
                        value: n,
                        defaultValue: a,
                        onChange: l,
                        form: u,
                        name: c,
                        by: s = (e, r) => e === r,
                        disabled: p = !1,
                        __demoMode: m = !1,
                        nullable: h = !1,
                        multiple: x = !1,
                        ...w
                    } = e, [y = x ? [] : void 0, C] = function(e, r, n) {
                        let [a, l] = (0, d.useState)(n), u = void 0 !== e, c = (0, d.useRef)(u), s = (0, d.useRef)(!1), f = (0, d.useRef)(!1);
                        return !u || c.current || s.current ? u || !c.current || f.current || (f.current = !0, c.current = u, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (s.current = !0, c.current = u, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [u ? e : a, (0, v.z)(e => (u || l(e), null == r ? void 0 : r(e)))]
                    }(n, l, a), [M, z] = (0, d.useReducer)(Xe, {
                        dataRef: (0, d.createRef)(),
                        comboboxState: m ? 0 : 1,
                        options: [],
                        activeOptionIndex: null,
                        activationTrigger: 1,
                        labelId: null
                    }), _ = (0, d.useRef)(!1), k = (0, d.useRef)({
                        static: !1,
                        hold: !1
                    }), A = (0, d.useRef)(null), P = (0, d.useRef)(null), T = (0, d.useRef)(null), L = (0, d.useRef)(null), N = (0, v.z)("string" == typeof s ? (e, r) => (null == e ? void 0 : e[s]) === (null == r ? void 0 : r[s]) : s), B = (0, d.useCallback)(e => (0, S.E)(F.mode, {
                        1: () => y.some(r => N(r, e)),
                        0: () => N(y, e)
                    }), [y]), F = (0, d.useMemo)(() => ({ ...M,
                        optionsPropsRef: k,
                        labelRef: A,
                        inputRef: P,
                        buttonRef: T,
                        optionsRef: L,
                        value: y,
                        defaultValue: a,
                        disabled: p,
                        mode: x ? 1 : 0,
                        get activeOptionIndex() {
                            if (_.current && null === M.activeOptionIndex && M.options.length > 0) {
                                let e = M.options.findIndex(e => !e.dataRef.current.disabled);
                                if (-1 !== e) return e
                            }
                            return M.activeOptionIndex
                        },
                        compare: N,
                        isSelected: B,
                        nullable: h,
                        __demoMode: m
                    }), [y, a, p, x, h, m, M]), H = (0, d.useRef)(null !== F.activeOptionIndex ? F.options[F.activeOptionIndex] : null);
                    (0, d.useEffect)(() => {
                        let e = null !== F.activeOptionIndex ? F.options[F.activeOptionIndex] : null;
                        H.current !== e && (H.current = e)
                    }), (0, f.e)(() => {
                        M.dataRef.current = F
                    }, [F]), (0, g.O)([F.buttonRef, F.inputRef, F.optionsRef], () => ee.closeCombobox(), 0 === F.comboboxState);
                    let $ = (0, d.useMemo)(() => ({
                            open: 0 === F.comboboxState,
                            disabled: p,
                            activeIndex: F.activeOptionIndex,
                            activeOption: null === F.activeOptionIndex ? null : F.options[F.activeOptionIndex].dataRef.current.value,
                            value: y
                        }), [F, p, y]),
                        W = (0, v.z)(e => {
                            let r = F.options.find(r => r.id === e);
                            r && Q(r.dataRef.current.value)
                        }),
                        U = (0, v.z)(() => {
                            if (null !== F.activeOptionIndex) {
                                let {
                                    dataRef: e,
                                    id: r
                                } = F.options[F.activeOptionIndex];
                                Q(e.current.value), ee.goToOption(R.Specific, r)
                            }
                        }),
                        G = (0, v.z)(() => {
                            z({
                                type: 0
                            }), _.current = !0
                        }),
                        K = (0, v.z)(() => {
                            z({
                                type: 1
                            }), _.current = !1
                        }),
                        Y = (0, v.z)((e, r, n) => (_.current = !1, e === R.Specific ? z({
                            type: 2,
                            focus: R.Specific,
                            id: r,
                            trigger: n
                        }) : z({
                            type: 2,
                            focus: e,
                            trigger: n
                        }))),
                        q = (0, v.z)((e, r) => (z({
                            type: 3,
                            id: e,
                            dataRef: r
                        }), () => {
                            var r;
                            (null == (r = H.current) ? void 0 : r.id) === e && (_.current = !0), z({
                                type: 4,
                                id: e
                            })
                        })),
                        X = (0, v.z)(e => (z({
                            type: 5,
                            id: e
                        }), () => z({
                            type: 5,
                            id: null
                        }))),
                        Q = (0, v.z)(e => (0, S.E)(F.mode, {
                            0: () => null == C ? void 0 : C(e),
                            1() {
                                let r = F.value.slice(),
                                    n = r.findIndex(r => N(r, e));
                                return -1 === n ? r.push(e) : r.splice(n, 1), null == C ? void 0 : C(r)
                            }
                        })),
                        ee = (0, d.useMemo)(() => ({
                            onChange: Q,
                            registerOption: q,
                            registerLabel: X,
                            goToOption: Y,
                            closeCombobox: K,
                            openCombobox: G,
                            selectActiveOption: U,
                            selectOption: W
                        }), []),
                        et = (0, d.useRef)(null),
                        er = (0, b.G)();
                    return (0, d.useEffect)(() => {
                        et.current && void 0 !== a && er.addEventListener(et.current, "reset", () => {
                            null == C || C(a)
                        })
                    }, [et, C]), d.createElement(j.Provider, {
                        value: ee
                    }, d.createElement(V.Provider, {
                        value: F
                    }, d.createElement(I.up, {
                        value: (0, S.E)(F.comboboxState, {
                            0: I.ZM.Open,
                            1: I.ZM.Closed
                        })
                    }, null != c && null != y && (function form_e(e = {}, r = null, n = []) {
                        for (let [a, l] of Object.entries(e)) ! function o(e, r, n) {
                            if (Array.isArray(n))
                                for (let [a, l] of n.entries()) o(e, form_f(r, a.toString()), l);
                            else n instanceof Date ? e.push([r, n.toISOString()]) : "boolean" == typeof n ? e.push([r, n ? "1" : "0"]) : "string" == typeof n ? e.push([r, n]) : "number" == typeof n ? e.push([r, `${n}`]) : null == n ? e.push([r, ""]) : form_e(n, r, e)
                        }(n, form_f(r, a), l);
                        return n
                    })({
                        [c]: y
                    }).map(([e, r], n) => d.createElement(E._, {
                        features: E.A.Hidden,
                        ref: 0 === n ? e => {
                            var r;
                            et.current = null != (r = null == e ? void 0 : e.closest("form")) ? r : null
                        } : void 0,
                        ...(0, O.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            form: u,
                            name: e,
                            value: r
                        })
                    })), (0, O.sY)({
                        ourProps: null === r ? {} : {
                            ref: r
                        },
                        theirProps: w,
                        slot: $,
                        defaultTag: D,
                        name: "Combobox"
                    }))))
                }),
                H = (0, O.yV)(function(e, r) {
                    var n;
                    let a = J("Combobox.Button"),
                        l = Z("Combobox.Button"),
                        u = (0, h.T)(a.buttonRef, r),
                        c = (0, m.M)(),
                        {
                            id: s = `headlessui-combobox-button-${c}`,
                            ...p
                        } = e,
                        g = (0, b.G)(),
                        x = (0, v.z)(e => {
                            switch (e.key) {
                                case M.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), 1 === a.comboboxState && l.openCombobox(), g.nextFrame(() => {
                                        var e;
                                        return null == (e = a.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    });
                                case M.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), 1 === a.comboboxState && (l.openCombobox(), g.nextFrame(() => {
                                        a.value || l.goToOption(R.Last)
                                    })), g.nextFrame(() => {
                                        var e;
                                        return null == (e = a.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    });
                                case M.R.Escape:
                                    return 0 !== a.comboboxState ? void 0 : (e.preventDefault(), a.optionsRef.current && !a.optionsPropsRef.current.static && e.stopPropagation(), l.closeCombobox(), g.nextFrame(() => {
                                        var e;
                                        return null == (e = a.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                default:
                                    return
                            }
                        }),
                        w = (0, v.z)(e => {
                            if ((0, y.P)(e.currentTarget)) return e.preventDefault();
                            0 === a.comboboxState ? l.closeCombobox() : (e.preventDefault(), l.openCombobox()), g.nextFrame(() => {
                                var e;
                                return null == (e = a.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            })
                        }),
                        S = use_computed_i(() => {
                            if (a.labelId) return [a.labelId, s].join(" ")
                        }, [a.labelId, s]),
                        C = (0, d.useMemo)(() => ({
                            open: 0 === a.comboboxState,
                            disabled: a.disabled,
                            value: a.value
                        }), [a]),
                        E = {
                            ref: u,
                            id: s,
                            type: function(e, r) {
                                let [n, a] = (0, d.useState)(() => i(e));
                                return (0, f.e)(() => {
                                    a(i(e))
                                }, [e.type, e.as]), (0, f.e)(() => {
                                    n || r.current && r.current instanceof HTMLButtonElement && !r.current.hasAttribute("type") && a("button")
                                }, [n, r]), n
                            }(e, a.buttonRef),
                            tabIndex: -1,
                            "aria-haspopup": "listbox",
                            "aria-controls": null == (n = a.optionsRef.current) ? void 0 : n.id,
                            "aria-expanded": 0 === a.comboboxState,
                            "aria-labelledby": S,
                            disabled: a.disabled,
                            onClick: w,
                            onKeyDown: x
                        };
                    return (0, O.sY)({
                        ourProps: E,
                        theirProps: p,
                        slot: C,
                        defaultTag: "button",
                        name: "Combobox.Button"
                    })
                }),
                $ = Object.assign(F, {
                    Input: (0, O.yV)(function(e, r) {
                        var n, a, l, u, c;
                        let s = (0, m.M)(),
                            {
                                id: f = `headlessui-combobox-input-${s}`,
                                onChange: p,
                                displayValue: g,
                                type: x = "text",
                                ...w
                            } = e,
                            y = J("Combobox.Input"),
                            C = Z("Combobox.Input"),
                            E = (0, h.T)(y.inputRef, r),
                            I = (0, k.i)(y.inputRef),
                            _ = (0, d.useRef)(!1),
                            A = (0, b.G)(),
                            P = (0, v.z)(() => {
                                C.onChange(null), y.optionsRef.current && (y.optionsRef.current.scrollTop = 0), C.goToOption(R.Nothing)
                            }),
                            T = "function" == typeof g && void 0 !== y.value ? null != (c = g(y.value)) ? c : "" : "string" == typeof y.value ? y.value : "";
                        (0, z.q)(([e, r], [n, a]) => {
                            if (_.current) return;
                            let l = y.inputRef.current;
                            l && ((0 === a && 1 === r || e !== n) && (l.value = e), requestAnimationFrame(() => {
                                if (_.current || !l || (null == I ? void 0 : I.activeElement) !== l) return;
                                let {
                                    selectionStart: e,
                                    selectionEnd: r
                                } = l;
                                0 === Math.abs((null != r ? r : 0) - (null != e ? e : 0)) && 0 === e && l.setSelectionRange(l.value.length, l.value.length)
                            }))
                        }, [T, y.comboboxState, I]), (0, z.q)(([e], [r]) => {
                            if (0 === e && 1 === r) {
                                if (_.current) return;
                                let e = y.inputRef.current;
                                if (!e) return;
                                let r = e.value,
                                    {
                                        selectionStart: n,
                                        selectionEnd: a,
                                        selectionDirection: l
                                    } = e;
                                e.value = "", e.value = r, null !== l ? e.setSelectionRange(n, a, l) : e.setSelectionRange(n, a)
                            }
                        }, [y.comboboxState]);
                        let L = (0, d.useRef)(!1),
                            N = (0, v.z)(() => {
                                L.current = !0
                            }),
                            j = (0, v.z)(() => {
                                A.nextFrame(() => {
                                    L.current = !1
                                })
                            }),
                            V = (0, v.z)(e => {
                                switch (_.current = !0, e.key) {
                                    case M.R.Enter:
                                        if (_.current = !1, 0 !== y.comboboxState || L.current) return;
                                        if (e.preventDefault(), e.stopPropagation(), null === y.activeOptionIndex) {
                                            C.closeCombobox();
                                            return
                                        }
                                        C.selectActiveOption(), 0 === y.mode && C.closeCombobox();
                                        break;
                                    case M.R.ArrowDown:
                                        return _.current = !1, e.preventDefault(), e.stopPropagation(), (0, S.E)(y.comboboxState, {
                                            0: () => {
                                                C.goToOption(R.Next)
                                            },
                                            1: () => {
                                                C.openCombobox()
                                            }
                                        });
                                    case M.R.ArrowUp:
                                        return _.current = !1, e.preventDefault(), e.stopPropagation(), (0, S.E)(y.comboboxState, {
                                            0: () => {
                                                C.goToOption(R.Previous)
                                            },
                                            1: () => {
                                                C.openCombobox(), A.nextFrame(() => {
                                                    y.value || C.goToOption(R.Last)
                                                })
                                            }
                                        });
                                    case M.R.Home:
                                        if (e.shiftKey) break;
                                        return _.current = !1, e.preventDefault(), e.stopPropagation(), C.goToOption(R.First);
                                    case M.R.PageUp:
                                        return _.current = !1, e.preventDefault(), e.stopPropagation(), C.goToOption(R.First);
                                    case M.R.End:
                                        if (e.shiftKey) break;
                                        return _.current = !1, e.preventDefault(), e.stopPropagation(), C.goToOption(R.Last);
                                    case M.R.PageDown:
                                        return _.current = !1, e.preventDefault(), e.stopPropagation(), C.goToOption(R.Last);
                                    case M.R.Escape:
                                        return _.current = !1, 0 !== y.comboboxState ? void 0 : (e.preventDefault(), y.optionsRef.current && !y.optionsPropsRef.current.static && e.stopPropagation(), y.nullable && 0 === y.mode && null === y.value && P(), C.closeCombobox());
                                    case M.R.Tab:
                                        if (_.current = !1, 0 !== y.comboboxState) return;
                                        0 === y.mode && C.selectActiveOption(), C.closeCombobox()
                                }
                            }),
                            D = (0, v.z)(e => {
                                null == p || p(e), y.nullable && 0 === y.mode && "" === e.target.value && P(), C.openCombobox()
                            }),
                            B = (0, v.z)(() => {
                                _.current = !1
                            }),
                            F = use_computed_i(() => {
                                if (y.labelId) return [y.labelId].join(" ")
                            }, [y.labelId]),
                            H = (0, d.useMemo)(() => ({
                                open: 0 === y.comboboxState,
                                disabled: y.disabled
                            }), [y]),
                            $ = {
                                ref: E,
                                id: f,
                                role: "combobox",
                                type: x,
                                "aria-controls": null == (n = y.optionsRef.current) ? void 0 : n.id,
                                "aria-expanded": 0 === y.comboboxState,
                                "aria-activedescendant": null === y.activeOptionIndex || null == (a = y.options[y.activeOptionIndex]) ? void 0 : a.id,
                                "aria-labelledby": F,
                                "aria-autocomplete": "list",
                                defaultValue: null != (u = null != (l = e.defaultValue) ? l : void 0 !== y.defaultValue ? null == g ? void 0 : g(y.defaultValue) : null) ? u : y.defaultValue,
                                disabled: y.disabled,
                                onCompositionStart: N,
                                onCompositionEnd: j,
                                onKeyDown: V,
                                onChange: D,
                                onBlur: B
                            };
                        return (0, O.sY)({
                            ourProps: $,
                            theirProps: w,
                            slot: H,
                            defaultTag: "input",
                            name: "Combobox.Input"
                        })
                    }),
                    Button: H,
                    Label: (0, O.yV)(function(e, r) {
                        let n = (0, m.M)(),
                            {
                                id: a = `headlessui-combobox-label-${n}`,
                                ...l
                            } = e,
                            u = J("Combobox.Label"),
                            c = Z("Combobox.Label"),
                            s = (0, h.T)(u.labelRef, r);
                        (0, f.e)(() => c.registerLabel(a), [a]);
                        let p = (0, v.z)(() => {
                                var e;
                                return null == (e = u.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }),
                            b = (0, d.useMemo)(() => ({
                                open: 0 === u.comboboxState,
                                disabled: u.disabled
                            }), [u]);
                        return (0, O.sY)({
                            ourProps: {
                                ref: s,
                                id: a,
                                onClick: p
                            },
                            theirProps: l,
                            slot: b,
                            defaultTag: "label",
                            name: "Combobox.Label"
                        })
                    }),
                    Options: (0, O.yV)(function(e, r) {
                        let n = (0, m.M)(),
                            {
                                id: a = `headlessui-combobox-options-${n}`,
                                hold: l = !1,
                                ...u
                            } = e,
                            c = J("Combobox.Options"),
                            s = (0, h.T)(c.optionsRef, r),
                            p = (0, I.oJ)(),
                            b = null !== p ? (p & I.ZM.Open) === I.ZM.Open : 0 === c.comboboxState;
                        (0, f.e)(() => {
                            var r;
                            c.optionsPropsRef.current.static = null != (r = e.static) && r
                        }, [c.optionsPropsRef, e.static]), (0, f.e)(() => {
                            c.optionsPropsRef.current.hold = l
                        }, [c.optionsPropsRef, l]),
                        function({
                            container: e,
                            accept: r,
                            walk: n,
                            enabled: a = !0
                        }) {
                            let l = (0, d.useRef)(r),
                                u = (0, d.useRef)(n);
                            (0, d.useEffect)(() => {
                                l.current = r, u.current = n
                            }, [r, n]), (0, f.e)(() => {
                                if (!e || !a) return;
                                let r = (0, x.r)(e);
                                if (!r) return;
                                let n = l.current,
                                    c = u.current,
                                    s = Object.assign(e => n(e), {
                                        acceptNode: n
                                    }),
                                    d = r.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);
                                for (; d.nextNode();) c(d.currentNode)
                            }, [e, a, l, u])
                        }({
                            container: c.optionsRef.current,
                            enabled: 0 === c.comboboxState,
                            accept: e => "option" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                            walk(e) {
                                e.setAttribute("role", "none")
                            }
                        });
                        let v = use_computed_i(() => {
                                var e, r;
                                return null != (r = c.labelId) ? r : null == (e = c.buttonRef.current) ? void 0 : e.id
                            }, [c.labelId, c.buttonRef.current]),
                            g = (0, d.useMemo)(() => ({
                                open: 0 === c.comboboxState
                            }), [c]),
                            R = {
                                "aria-labelledby": v,
                                role: "listbox",
                                "aria-multiselectable": 1 === c.mode || void 0,
                                id: a,
                                ref: s
                            };
                        return (0, O.sY)({
                            ourProps: R,
                            theirProps: u,
                            slot: g,
                            defaultTag: "ul",
                            features: B,
                            visible: b,
                            name: "Combobox.Options"
                        })
                    }),
                    Option: (0, O.yV)(function(e, r) {
                        var n, a;
                        let l;
                        let u = (0, m.M)(),
                            {
                                id: c = `headlessui-combobox-option-${u}`,
                                disabled: s = !1,
                                value: b,
                                ...g
                            } = e,
                            x = J("Combobox.Option"),
                            y = Z("Combobox.Option"),
                            S = null !== x.activeOptionIndex && x.options[x.activeOptionIndex].id === c,
                            C = x.isSelected(b),
                            E = (0, d.useRef)(null),
                            I = (0, p.E)({
                                disabled: s,
                                value: b,
                                domRef: E,
                                textValue: null == (a = null == (n = E.current) ? void 0 : n.textContent) ? void 0 : a.toLowerCase()
                            }),
                            M = (0, h.T)(r, E),
                            z = (0, v.z)(() => y.selectOption(c));
                        (0, f.e)(() => y.registerOption(c, I), [I, c]);
                        let k = (0, d.useRef)(!x.__demoMode);
                        (0, f.e)(() => {
                            if (!x.__demoMode) return;
                            let e = (0, w.k)();
                            return e.requestAnimationFrame(() => {
                                k.current = !0
                            }), e.dispose
                        }, []), (0, f.e)(() => {
                            if (0 !== x.comboboxState || !S || !k.current || 0 === x.activationTrigger) return;
                            let e = (0, w.k)();
                            return e.requestAnimationFrame(() => {
                                var e, r;
                                null == (r = null == (e = E.current) ? void 0 : e.scrollIntoView) || r.call(e, {
                                    block: "nearest"
                                })
                            }), e.dispose
                        }, [E, S, x.comboboxState, x.activationTrigger, x.activeOptionIndex]);
                        let A = (0, v.z)(e => {
                                if (s) return e.preventDefault();
                                z(), 0 === x.mode && y.closeCombobox(), (0, _.tq)() || requestAnimationFrame(() => {
                                    var e;
                                    return null == (e = x.inputRef.current) ? void 0 : e.focus()
                                })
                            }),
                            P = (0, v.z)(() => {
                                if (s) return y.goToOption(R.Nothing);
                                y.goToOption(R.Specific, c)
                            }),
                            T = (l = (0, d.useRef)([-1, -1]), {
                                wasMoved(e) {
                                    let r = t(e);
                                    return (l.current[0] !== r[0] || l.current[1] !== r[1]) && (l.current = r, !0)
                                },
                                update(e) {
                                    l.current = t(e)
                                }
                            }),
                            L = (0, v.z)(e => T.update(e)),
                            N = (0, v.z)(e => {
                                T.wasMoved(e) && (s || S || y.goToOption(R.Specific, c, 0))
                            }),
                            j = (0, v.z)(e => {
                                T.wasMoved(e) && (s || S && (x.optionsPropsRef.current.hold || y.goToOption(R.Nothing)))
                            }),
                            V = (0, d.useMemo)(() => ({
                                active: S,
                                selected: C,
                                disabled: s
                            }), [S, C, s]);
                        return (0, O.sY)({
                            ourProps: {
                                id: c,
                                ref: M,
                                role: "option",
                                tabIndex: !0 === s ? void 0 : -1,
                                "aria-disabled": !0 === s || void 0,
                                "aria-selected": C,
                                disabled: void 0,
                                onClick: A,
                                onFocus: P,
                                onPointerEnter: L,
                                onMouseEnter: L,
                                onPointerMove: N,
                                onMouseMove: N,
                                onPointerLeave: j,
                                onMouseLeave: j
                            },
                            theirProps: g,
                            slot: V,
                            defaultTag: "li",
                            name: "Combobox.Option"
                        })
                    })
                })
        },
        95705: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                    clipRule: "evenodd"
                }))
            });
            r.Z = l
        },
        21712: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
                    clipRule: "evenodd"
                }))
            });
            r.Z = l
        },
        48357: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                }))
            });
            r.Z = l
        },
        23950: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                }))
            });
            r.Z = l
        },
        66432: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                }))
            });
            r.Z = l
        },
        6180: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                }))
            });
            r.Z = l
        },
        47834: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
                    clipRule: "evenodd"
                }))
            });
            r.Z = l
        },
        67532: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm0 4.5A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm15-.75A.75.75 0 0118 9v10.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V9a.75.75 0 01.75-.75zm-15 5.25a.75.75 0 01.75-.75h9.75a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z",
                    clipRule: "evenodd"
                }))
            });
            r.Z = l
        },
        8365: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z",
                    clipRule: "evenodd"
                }))
            });
            r.Z = l
        },
        34729: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                    clipRule: "evenodd"
                }))
            });
            r.Z = l
        },
        14027: function(e, r, n) {
            var a = n(2265);
            let l = a.forwardRef(function({
                title: e,
                titleId: r,
                ...n
            }, l) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: l,
                    "aria-labelledby": r
                }, n), e ? a.createElement("title", {
                    id: r
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                    clipRule: "evenodd"
                }))
            });
            r.Z = l
        },
        43391: function(e, r, n) {
            n.d(r, {
                o: function() {
                    return f
                }
            });
            var a = n(34480),
                l = (0, n(68037).tv)({
                    base: [],
                    variants: {
                        orientation: {
                            vertical: ["overflow-y-auto", "data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]", "data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]", "data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"],
                            horizontal: ["overflow-x-auto", "data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]", "data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]", "data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"]
                        },
                        hideScrollBar: {
                            true: "scrollbar-hide",
                            false: ""
                        }
                    },
                    defaultVariants: {
                        orientation: "vertical",
                        hideScrollBar: !1
                    }
                }),
                u = n(25312),
                capitalize = e => e.charAt(0).toUpperCase() + e.slice(1),
                c = n(2265),
                s = n(57437),
                d = (0, a.Gp)((e, r) => {
                    let {
                        Component: n,
                        children: d,
                        getBaseProps: f
                    } = function(e) {
                        var r;
                        let [n, s] = (0, a.oe)(e, l.variantKeys), {
                            ref: d,
                            as: f,
                            children: p,
                            className: b,
                            style: v,
                            size: m = 40,
                            offset: g = 0,
                            visibility: h = "auto",
                            isEnabled: x = !0,
                            onVisibilityChange: R,
                            ...w
                        } = n, O = (0, u.gy)(d);
                        ! function(e = {}) {
                            let {
                                domRef: r,
                                isEnabled: n = !0,
                                overflowCheck: a = "vertical",
                                visibility: l = "auto",
                                offset: u = 0,
                                onVisibilityChange: s,
                                updateDeps: d = []
                            } = e, f = (0, c.useRef)(l);
                            (0, c.useEffect)(() => {
                                let e = null == r ? void 0 : r.current;
                                if (!e || !n) return;
                                let setAttributes = (r, n, a, u, c) => {
                                        if ("auto" === l) {
                                            let r = `${u}${capitalize(c)}Scroll`;
                                            n && a ? (e.dataset[r] = "true", e.removeAttribute(`data-${u}-scroll`), e.removeAttribute(`data-${c}-scroll`)) : (e.dataset[`${u}Scroll`] = n.toString(), e.dataset[`${c}Scroll`] = a.toString(), e.removeAttribute(`data-${u}-${c}-scroll`))
                                        } else {
                                            let e = n && a ? "both" : n ? u : a ? c : "none";
                                            e !== f.current && (null == s || s(e), f.current = e)
                                        }
                                    },
                                    checkOverflow = () => {
                                        for (let {
                                                type: r,
                                                prefix: n,
                                                suffix: l
                                            } of [{
                                                type: "vertical",
                                                prefix: "top",
                                                suffix: "bottom"
                                            }, {
                                                type: "horizontal",
                                                prefix: "left",
                                                suffix: "right"
                                            }])
                                            if (a === r || "both" === a) {
                                                let a = "vertical" === r ? e.scrollTop > u : e.scrollLeft > u,
                                                    c = "vertical" === r ? e.scrollTop + e.clientHeight + u < e.scrollHeight : e.scrollLeft + e.clientWidth + u < e.scrollWidth;
                                                setAttributes(r, a, c, n, l)
                                            }
                                    },
                                    clearOverflow = () => {
                                        ["top", "bottom", "topBottom", "left", "right", "leftRight"].forEach(r => {
                                            e.removeAttribute(`data-${r}-scroll`)
                                        })
                                    };
                                return checkOverflow(), e.addEventListener("scroll", checkOverflow), "auto" !== l && (clearOverflow(), "both" === l ? (e.dataset.topBottomScroll = String("vertical" === a), e.dataset.leftRightScroll = String("horizontal" === a)) : (e.dataset.topBottomScroll = "false", e.dataset.leftRightScroll = "false", ["top", "bottom", "left", "right"].forEach(r => {
                                    e.dataset[`${r}Scroll`] = String(l === r)
                                }))), () => {
                                    e.removeEventListener("scroll", checkOverflow), clearOverflow()
                                }
                            }, [...d, n, l, a, s, r])
                        }({
                            domRef: O,
                            offset: g,
                            visibility: h,
                            isEnabled: x,
                            onVisibilityChange: R,
                            updateDeps: [p],
                            overflowCheck: null != (r = e.orientation) ? r : "vertical"
                        });
                        let y = (0, c.useMemo)(() => l({ ...s,
                            className: b
                        }), [...Object.values(s), b]);
                        return {
                            Component: f || "div",
                            styles: y,
                            domRef: O,
                            children: p,
                            getBaseProps: (r = {}) => {
                                var n;
                                return {
                                    ref: O,
                                    className: y,
                                    "data-orientation": null != (n = e.orientation) ? n : "vertical",
                                    style: {
                                        "--scroll-shadow-size": `${m}px`,
                                        ...v,
                                        ...r.style
                                    },
                                    ...w,
                                    ...r
                                }
                            }
                        }
                    }({ ...e,
                        ref: r
                    });
                    return (0, s.jsx)(n, { ...f(),
                        children: d
                    })
                });
            d.displayName = "NextUI.ScrollShadow";
            var f = d
        },
        10795: function(e, r, n) {
            n.d(r, {
                X: function() {
                    return p
                }
            });
            var a = n(34480),
                l = (0, n(68037).tv)({
                    slots: {
                        base: ["group", "relative", "overflow-hidden", "bg-content3 dark:bg-content2", "before:opacity-100", "before:absolute", "before:inset-0", "before:-translate-x-full", "before:animate-[shimmer_2s_infinite]", "before:border-t", "before:border-content4/30", "before:bg-gradient-to-r", "before:from-transparent", "before:via-content4", "dark:before:via-default-700/10", "before:to-transparent", "after:opacity-100", "after:absolute", "after:inset-0", "after:-z-10", "after:bg-content3", "dark:after:bg-content2", "data-[loaded=true]:!bg-transparent", "data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none", "data-[loaded=true]:after:opacity-0"],
                        content: ["opacity-0", "group-data-[loaded=true]:opacity-100"]
                    },
                    variants: {
                        disableAnimation: {
                            true: {
                                base: "before:transition-none",
                                content: "transition-none"
                            },
                            false: {
                                base: "transition-background !duration-300 before:transition-opacity before:!duration-300",
                                content: "transition-opacity motion-reduce:transition-none !duration-300"
                            }
                        }
                    },
                    defaultVariants: {
                        disableAnimation: !1
                    }
                }),
                u = n(59762),
                c = n(48794),
                s = n(2265),
                d = n(57437),
                f = (0, a.Gp)((e, r) => {
                    let {
                        Component: n,
                        children: f,
                        getSkeletonProps: p,
                        getContentProps: b
                    } = function(e) {
                        let [r, n] = (0, a.oe)(e, l.variantKeys), {
                            as: d,
                            children: f,
                            isLoaded: p = !1,
                            className: b,
                            classNames: v,
                            ...m
                        } = r, g = (0, s.useMemo)(() => l({ ...n
                        }), [...Object.values(n), f]), h = (0, u.W)(null == v ? void 0 : v.base, b);
                        return {
                            Component: d || "div",
                            children: f,
                            slots: g,
                            classNames: v,
                            getSkeletonProps: (e = {}) => ({
                                "data-loaded": (0, c.PB)(p),
                                className: g.base({
                                    class: (0, u.W)(h, null == e ? void 0 : e.className)
                                }),
                                ...m
                            }),
                            getContentProps: (e = {}) => ({
                                className: g.content({
                                    class: (0, u.W)(null == v ? void 0 : v.content, null == e ? void 0 : e.className)
                                })
                            })
                        }
                    }({ ...e
                    });
                    return (0, d.jsx)(n, {
                        ref: r,
                        ...p(),
                        children: (0, d.jsx)("div", { ...b(),
                            children: f
                        })
                    })
                });
            f.displayName = "NextUI.Skeleton";
            var p = f
        },
        32695: function(e, r, n) {
            n.d(r, {
                c: function() {
                    return f
                }
            });
            var a = n(34480),
                l = (0, n(68037).tv)({
                    slots: {
                        base: "relative inline-flex flex-col gap-2 items-center justify-center",
                        wrapper: "relative flex",
                        circle1: ["absolute", "w-full", "h-full", "rounded-full", "animate-spinner-ease-spin", "border-2", "border-solid", "border-t-transparent", "border-l-transparent", "border-r-transparent"],
                        circle2: ["absolute", "w-full", "h-full", "rounded-full", "opacity-75", "animate-spinner-linear-spin", "border-2", "border-dotted", "border-t-transparent", "border-l-transparent", "border-r-transparent"],
                        label: "text-foreground dark:text-foreground-dark font-regular"
                    },
                    variants: {
                        size: {
                            sm: {
                                wrapper: "w-5 h-5",
                                circle1: "border-2",
                                circle2: "border-2",
                                label: "text-small"
                            },
                            md: {
                                wrapper: "w-8 h-8",
                                circle1: "border-3",
                                circle2: "border-3",
                                label: "text-medium"
                            },
                            lg: {
                                wrapper: "w-10 h-10",
                                circle1: "border-3",
                                circle2: "border-3",
                                label: "text-large"
                            }
                        },
                        color: {
                            current: {
                                circle1: "border-b-current",
                                circle2: "border-b-current"
                            },
                            white: {
                                circle1: "border-b-white",
                                circle2: "border-b-white"
                            },
                            default: {
                                circle1: "border-b-default",
                                circle2: "border-b-default"
                            },
                            primary: {
                                circle1: "border-b-primary",
                                circle2: "border-b-primary"
                            },
                            secondary: {
                                circle1: "border-b-secondary",
                                circle2: "border-b-secondary"
                            },
                            success: {
                                circle1: "border-b-success",
                                circle2: "border-b-success"
                            },
                            warning: {
                                circle1: "border-b-warning",
                                circle2: "border-b-warning"
                            },
                            danger: {
                                circle1: "border-b-danger",
                                circle2: "border-b-danger"
                            }
                        },
                        labelColor: {
                            foreground: {
                                label: "text-foreground"
                            },
                            primary: {
                                label: "text-primary"
                            },
                            secondary: {
                                label: "text-secondary"
                            },
                            success: {
                                label: "text-success"
                            },
                            warning: {
                                label: "text-warning"
                            },
                            danger: {
                                label: "text-danger"
                            }
                        }
                    },
                    defaultVariants: {
                        size: "md",
                        color: "primary",
                        labelColor: "foreground"
                    }
                }),
                u = n(59762),
                c = n(2265),
                s = n(57437),
                d = (0, a.Gp)((e, r) => {
                    let {
                        slots: n,
                        classNames: d,
                        label: f,
                        getSpinnerProps: p
                    } = function(e) {
                        let [r, n] = (0, a.oe)(e, l.variantKeys), {
                            children: s,
                            className: d,
                            classNames: f,
                            label: p,
                            ...b
                        } = r, v = (0, c.useMemo)(() => l({ ...n
                        }), [...Object.values(n)]), m = (0, u.W)(null == f ? void 0 : f.base, d), g = p || s, h = (0, c.useMemo)(() => g && "string" == typeof g ? g : b["aria-label"] ? "" : "Loading", [s, g, b["aria-label"]]), x = (0, c.useCallback)(() => ({
                            "aria-label": h,
                            className: v.base({
                                class: m
                            }),
                            ...b
                        }), [h, v, m, b]);
                        return {
                            label: g,
                            slots: v,
                            classNames: f,
                            getSpinnerProps: x
                        }
                    }({ ...e
                    });
                    return (0, s.jsxs)("div", {
                        ref: r,
                        ...p(),
                        children: [(0, s.jsxs)("div", {
                            className: n.wrapper({
                                class: null == d ? void 0 : d.wrapper
                            }),
                            children: [(0, s.jsx)("i", {
                                className: n.circle1({
                                    class: null == d ? void 0 : d.circle1
                                })
                            }), (0, s.jsx)("i", {
                                className: n.circle2({
                                    class: null == d ? void 0 : d.circle2
                                })
                            })]
                        }), f && (0, s.jsx)("span", {
                            className: n.label(),
                            children: f
                        })]
                    })
                });
            d.displayName = "NextUI.Spinner";
            var f = d
        },
        43568: function(e, r, n) {
            n.d(r, {
                Y: function() {
                    return useMotionTemplate
                }
            });
            var a = n(20609),
                l = n(538),
                u = n(72363),
                c = n(65735);

            function useMotionTemplate(e, ...r) {
                let n = e.length;
                return function(e, r) {
                    let n = (0, a.c)(r()),
                        updateValue = () => n.set(r());
                    return updateValue(), (0, l.L)(() => {
                        let scheduleUpdate = () => u.Wi.update(updateValue, !1, !0),
                            r = e.map(e => e.on("change", scheduleUpdate));
                        return () => {
                            r.forEach(e => e()), (0, u.Pn)(updateValue)
                        }
                    }), n
                }(r.filter(c.i), function() {
                    let a = "";
                    for (let l = 0; l < n; l++) {
                        a += e[l];
                        let n = r[l];
                        n && (a += (0, c.i)(n) ? n.get() : n)
                    }
                    return a
                })
            }
        },
        20609: function(e, r, n) {
            n.d(r, {
                c: function() {
                    return useMotionValue
                }
            });
            var a = n(2265),
                l = n(74101),
                u = n(45968),
                c = n(10961);

            function useMotionValue(e) {
                let r = (0, c.h)(() => (0, l.BX)(e)),
                    {
                        isStatic: n
                    } = (0, a.useContext)(u._);
                if (n) {
                    let [, n] = (0, a.useState)(e);
                    (0, a.useEffect)(() => r.on("change", n), [])
                }
                return r
            }
        }
    }
]);