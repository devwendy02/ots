(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1713], {
        46601: function() {},
        76080: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 76452))
        },
        76452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ClaimPage
                }
            });
            var a = n(57437),
                s = n(67057),
                l = n(99175),
                r = n(6215),
                i = n(35785),
                o = n(12025),
                u = n(36234),
                d = n(54440),
                c = n.n(d),
                p = n(16691),
                m = n.n(p),
                y = n(61396),
                f = n.n(y),
                b = n(24033),
                h = n(2265),
                x = n(31095),
                g = n(52078),
                T = n(79352),
                v = n(16775),
                w = n(43977),
                A = n(63160),
                k = n(12169),
                j = n(27833),
                N = n(79043),
                E = n(31185),
                C = n(34065),
                O = n(17518),
                S = n(54844),
                M = n(90626),
                I = n(78258),
                F = n(97271),
                Z = n(62035),
                H = n(30725),
                P = n(72940),
                _ = n(28843),
                L = n(70362),
                q = n(20521),
                W = n(21923),
                B = n(83361);
            let R = {
                token: E.B,
                partiallyFillable: !0,
                whitelistedAddress: ""
            };

            function GenerateOrder() {
                var e, t, n, d;
                let p = (0, S.Z)(),
                    [y, E] = (0, h.useState)(R),
                    {
                        ethUsd: U
                    } = (0, h.useContext)(C.F),
                    D = (0, h.useCallback)(e => {
                        let {
                            field: t,
                            value: n
                        } = e;
                        E(e => ({ ...e,
                            [t]: n
                        }))
                    }, []),
                    z = (0, F.Z)(y.token.address);
                (0, h.useEffect)(() => {
                    E(e => ({ ...e,
                        token: { ...e.token,
                            balance: z
                        }
                    }))
                }, [z]);
                let V = (0, Z.Z)(y.token),
                    [G, $] = (0, h.useState)(!1),
                    {
                        decimals: X
                    } = y[N.I.token],
                    {
                        tokenSelectionDialogRef: J,
                        toggleTokenSelectionDialog: Y
                    } = (0, H.Z)(),
                    K = !y[N.I.requestedETHAmount] || !y[N.I.tokenAmount] || z < y[N.I.tokenAmount];
                (0, h.useEffect)(() => {
                    p || G || D({
                        field: N.I.whitelistedAddress,
                        value: ""
                    })
                }, [p, G, D]);
                let Q = y && y.tokenAmount && y.requestedETHAmount && (y.requestedETHAmount * 10 ** y.token.decimals / (null == y ? void 0 : null === (e = y.tokenAmount) || void 0 === e ? void 0 : e.toString())).toFixed(V ? null === (t = String(V).split(".")[1]) || void 0 === t ? void 0 : t.length : 6),
                    ee = Q && V && ((Q - V) / V * 100).toFixed(2);
                console.table({
                    priceDelta: ee
                });
                let et = (0, b.useSearchParams)(),
                    en = p ? et.get("tokenAddress") : void 0,
                    ea = (0, I.Z)(en);
                (0, h.useEffect)(() => {
                    ea && E(e => ({ ...e,
                        token: ea
                    }))
                }, [ea]);
                let es = (0, h.useRef)(),
                    el = (0, O.Z)(es),
                    er = (0, M.Z)({
                        hash: y.whitelistedAddress
                    }),
                    [ei, eo] = (0, h.useState)(!1);
                console.log(null === (n = y.token) || void 0 === n ? void 0 : n.symbol), console.log(V);
                let [eu, ed] = (0, h.useState)(() => function(e) {
                    let {
                        children: t,
                        ...n
                    } = e;
                    return (0, a.jsx)("div", {
                        props: n,
                        children: t
                    })
                });
                return (0, h.useEffect)(() => {
                    x.tq || ed(() => u.Z)
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(eu, {
                        className: "mx-auto mt-20",
                        innerClassName: "rounded-3xl shadow-[0_75px_50px_-12px_rgba(0,0,0,0.1)]",
                        shadow: !1,
                        highlight: !1,
                        activeOffset: 5,
                        rotateXMax: 2,
                        rotateYMax: 2,
                        rotateTouch: !1,
                        children: (0, a.jsxs)("div", {
                            className: c()("relative flex flex-col items-center md:mx-auto", !p && "mx-1 rounded-3xl bg-transparent px-5 pb-4 pt-5 shadow-xl backdrop-blur-md"),
                            children: [(0, a.jsxs)("div", {
                                "data-atropos-offset": "5",
                                children: [(0, a.jsx)("h1", {
                                    className: "text-5xl",
                                    children: x.tq.toString
                                }), (0, a.jsx)(m(), {
                                    src: k.Z,
                                    alt: "mini-blocktopus",
                                    width: 21,
                                    className: "mb-4"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex w-full gap-2",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex grow flex-col gap-2 rounded-xl border border-blue-100/50 px-4 pb-3 pt-4 text-blue-400",
                                    "data-atropos-offset": "0.1",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0, a.jsx)("span", {
                                            className: "font-comforta text-blue-50",
                                            children: "Offer"
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-row gap-1 text-xs text-blue-50/50",
                                            children: ["$", y.tokenAmount ? ((0, v.b)(y.tokenAmount, X) * (V * U)).toFixed(2) : "0"]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "flex gap-6",
                                        children: (0, a.jsx)("div", {
                                            className: "flex flex-col gap-2",
                                            children: (0, a.jsx)("input", {
                                                name: "tokenAmount",
                                                value: y.tokenAmount ? (0, v.b)(y.tokenAmount, X) : "",
                                                onFocus: e => {
                                                    let t = e.target.closest("[data-atropos-offset]");
                                                    t.setAttribute("data-atropos-offset", "0.5"), t.classList.replace("border-blue-100/50", "border-blue-50/80")
                                                },
                                                onBlur: e => {
                                                    let t = e.target.closest("[data-atropos-offset]");
                                                    t.setAttribute("data-atropos-offset", "0.1"), t.classList.replace("border-blue-50/80", "border-blue-100/50")
                                                },
                                                className: "w-full border-none bg-transparent text-left text-xl text-blue-50 placeholder:text-blue-gray-100/50 focus:outline-none",
                                                onChange: e => {
                                                    D({
                                                        field: N.I.tokenAmount,
                                                        value: (0, w.v)("".concat(Math.floor(e.target.value)), X)
                                                    })
                                                },
                                                type: "number",
                                                placeholder: "0.0"
                                            })
                                        })
                                    })]
                                }), p ? (0, a.jsx)("div", {
                                    className: "pt-1 text-sm text-blue-50/80",
                                    children: y.token.symbol
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsxs)("button", {
                                        type: "button",
                                        onClick: Y,
                                        className: "relative flex flex-col items-center justify-between rounded-xl border border-blue-100/50 bg-transparent px-4 py-2 font-mono text-blue-50 transition-all hover:border-blue-100 hover:text-blue-50",
                                        "data-atropos-offset": "1",
                                        onMouseEnter: e => {
                                            e.target.closest("[data-atropos-offset]").setAttribute("data-atropos-offset", "2")
                                        },
                                        onMouseLeave: e => {
                                            e.target.closest("[data-atropos-offset]").setAttribute("data-atropos-offset", "0.1")
                                        },
                                        children: [(0, a.jsx)(W.Z, {
                                            tokenBalance: z,
                                            decimals: X,
                                            orderUpdate: D
                                        }), (0, a.jsx)("div", {
                                            className: "flex grow items-end",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex grow items-center",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "font-comforta text-xl",
                                                    children: ["$", y.token.symbol]
                                                }), (0, a.jsx)(m(), {
                                                    src: y.token.thumb,
                                                    alt: y.token.symbol,
                                                    width: 24,
                                                    height: 24,
                                                    className: "ms-1.5 rounded-md text-white"
                                                }), (0, a.jsx)("span", {
                                                    children: (0, a.jsx)(l.Z, {
                                                        className: "h-4 w-6 text-white opacity-70"
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, a.jsx)(j.Z, {
                                        ref: J,
                                        token: y.token,
                                        setToken: e => D({
                                            field: "token",
                                            value: e
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: c()("z-1 relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-center shadow-md", p ? "-my-6" : "-my-4"),
                                "data-atropos-offset": "5",
                                children: (0, a.jsx)(r.Z, {
                                    "data-atropos-offset": "5",
                                    className: "h-8 w-8 text-white opacity-70"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "relative z-10 flex w-full flex-col rounded-xl border border-blue-100/50 px-4 pb-3 pt-4 text-blue-400",
                                "data-atropos-offset": "0.1",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0, a.jsx)("span", {
                                        className: "font-comforta text-blue-50",
                                        children: "For"
                                    }), (0, a.jsxs)("span", {
                                        className: "text-xs text-blue-50/50",
                                        children: ["$", y[N.I.requestedETHAmount] && (y[N.I.requestedETHAmount] * U).toFixed(2) || "0"]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0, a.jsx)("input", {
                                        name: "ethAmount",
                                        value: y[N.I.requestedETHAmount],
                                        className: "w-full border-none bg-transparent text-left text-xl text-blue-50 placeholder:text-blue-gray-100/50 focus:outline-none",
                                        onChange: e => D({
                                            field: N.I.requestedETHAmount,
                                            value: String(e.target.value)
                                        }),
                                        type: "number",
                                        placeholder: "0.0",
                                        min: 0,
                                        onKeyDown: e => {
                                            if (y[N.I.requestedETHAmount] && ["ArrowDown", "ArrowUp"].includes(e.key)) {
                                                var t;
                                                e.preventDefault();
                                                let n = (0, g.f)(y[N.I.requestedETHAmount]),
                                                    a = 1 n * 10 n ** BigInt(18 - ((null === (t = String(y[N.I.requestedETHAmount]).split(".")[1]) || void 0 === t ? void 0 : t.length) || 0)),
                                                    s = (0, T.d)("ArrowUp" === e.key ? n + a : n - a);
                                                0 >= Number(s) || (console.table({
                                                    length: y[N.I.requestedETHAmount].length - 2,
                                                    newValue: n,
                                                    unit: a,
                                                    formattedNewValue: s
                                                }), D({
                                                    field: N.I.requestedETHAmount,
                                                    value: s
                                                }))
                                            }
                                        },
                                        onFocus: e => {
                                            let t = e.target.closest("[data-atropos-offset]");
                                            t.setAttribute("data-atropos-offset", "0.5"), t.classList.replace("border-blue-100/50", "border-blue-50/80")
                                        },
                                        onBlur: e => {
                                            let t = e.target.closest("[data-atropos-offset]");
                                            t.setAttribute("data-atropos-offset", "0.1"), t.classList.replace("border-blue-50/80", "border-blue-100/50")
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "flex items-center justify-center gap-4 rounded-3xl bg-transparent py-2",
                                        children: (0, a.jsx)(m(), {
                                            alt: "ethereum icon",
                                            src: A.Z,
                                            width: 32,
                                            height: 32,
                                            className: "text-white"
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex flex-row justify-between text-center text-xs text-blue-50/50",
                                        children: [(0, a.jsx)("span", {
                                            children: "Market Price/Token: "
                                        }), (0, a.jsxs)("span", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "font-mono",
                                                children: null !== V ? (0, a.jsx)(o.Tooltip, {
                                                    content: !!V && "$".concat(Number(U * V).toFixed(5)),
                                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                                    children: (0, a.jsxs)("div", {
                                                        children: [Number(V).toFixed(12) || (0, a.jsx)(o.Spinner, {
                                                            color: "blue",
                                                            className: "h-3 w-3"
                                                        }), " "]
                                                    })
                                                }) : (0, a.jsx)(_.Z, {})
                                            }), "ETH"]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-row justify-between text-center text-xs text-blue-50/50",
                                        children: [(0, a.jsxs)("span", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "w-28 text-left",
                                                children: "Your price"
                                            }), y[N.I.tokenAmount] && (0, a.jsxs)(o.Select, {
                                                containerProps: {
                                                    className: "h-[1em!important] min-w-[8ch] font-mono text-xs [&_button]:p-0 [&_button_span]:pt-0 [&_label]:h-6 [&_label:after]:bottom-0 [&_label:after]:border-blue-50 [&_svg]:text-blue-50"
                                                },
                                                color: "light-blue",
                                                menuProps: {
                                                    className: "bg-black bg-opacity-50 text-xs text-white rounded-xl border border-blue-100/50 min-w-[20ch] text-start"
                                                },
                                                className: "border-none text-xs text-blue-50",
                                                variant: "standard",
                                                value: ee,
                                                onChange: e => {
                                                    console.table({
                                                        newDelta: e,
                                                        current: ee
                                                    });
                                                    let t = (V * (1 + +e / 100)).toFixed(18);
                                                    console.table({
                                                        tokenDexPrice: V,
                                                        delta: e,
                                                        priceToApply: t
                                                    });
                                                    let n = (y.tokenAmount || 0 n) * (0, g.f)(t) / 10 n ** BigInt(y.token.decimals);
                                                    console.table({
                                                        requestedETHAmount: n,
                                                        parsedEth: (0, g.f)(t),
                                                        tokenAmount: y.tokenAmount,
                                                        formattedNewValue: (0, T.d)(n)
                                                    }), D({
                                                        field: N.I.requestedETHAmount,
                                                        value: (0, T.d)(n)
                                                    })
                                                },
                                                selected: e => ee ? +ee ? "".concat(Math.abs(ee), "% ").concat(ee < 0 ? "lower" : "higher") : "= Mkt Rate" : "Select %",
                                                children: [(0, a.jsx)(o.Option, {
                                                    value: "10.00",
                                                    children: "10% higher"
                                                }), (0, a.jsx)(o.Option, {
                                                    value: "5.00",
                                                    children: "5% higher"
                                                }), (0, a.jsx)(o.Option, {
                                                    value: "0.00",
                                                    children: "= Mkt Rate"
                                                }), (0, a.jsx)(o.Option, {
                                                    value: "-5.00",
                                                    children: "5% lower"
                                                }), (0, a.jsx)(o.Option, {
                                                    value: "-10.00",
                                                    children: "10% lower"
                                                })]
                                            })]
                                        }), (0, a.jsxs)("span", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "font-mono",
                                                children: (0, a.jsx)(o.Tooltip, {
                                                    content: "$".concat(!K && U * Q || "0"),
                                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                                    children: (0, a.jsx)("div", {
                                                        children: Q || "-"
                                                    })
                                                })
                                            }), "ETH"]
                                        })]
                                    })]
                                })]
                            }), (null == y ? void 0 : y.token) && (0, a.jsx)(B.Z, {
                                token: null == y ? void 0 : y.token
                            }), (0, a.jsxs)("div", {
                                className: c()("flex w-full", p ? "mt-2" : "flex-col"),
                                children: [(0, a.jsxs)("div", {
                                    className: c()("flex flex-col px-2", p ? "w-1/2 gap-2 py-2" : "w-full gap-4"),
                                    children: [(0, a.jsx)("div", {
                                        className: "",
                                        children: (0, a.jsxs)("div", {
                                            className: c()("flex items-center gap-2", !1),
                                            children: [(0, a.jsx)(o.Switch, {
                                                label: "Crowd Fill",
                                                color: "blue",
                                                checked: y[N.I.partiallyFillable],
                                                labelProps: {
                                                    className: c()("flex-shrink-1 text-sm text-blue-50/80", !p && "font-mono")
                                                },
                                                containerProps: {
                                                    className: "flex-shrink-0"
                                                },
                                                onChange: e => {
                                                    D({
                                                        field: N.I.partiallyFillable,
                                                        value: e.target.checked
                                                    })
                                                }
                                            }), (0, a.jsx)("button", {
                                                type: "button",
                                                className: "bg-transparent px-0 outline-transparent",
                                                children: (0, a.jsx)(o.Tooltip, {
                                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                                    content: "Enable to allow partial order fills.",
                                                    children: (0, a.jsx)(s.Z, {
                                                        className: "h-4 w-4 text-white/50"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: " ",
                                        children: (0, a.jsxs)("div", {
                                            className: c()("flex items-center gap-2", !1),
                                            children: [(0, a.jsx)(o.Switch, {
                                                label: p ? "Whitelist" : "Whitelisted Address",
                                                labelProps: {
                                                    className: c()("text-sm text-blue-50/80", !p && "font-mono")
                                                },
                                                containerProps: {
                                                    className: "flex-shrink-0"
                                                },
                                                checked: p ? !!y.whitelistedAddress : G,
                                                color: "blue",
                                                ripple: !1,
                                                onChange: e => {
                                                    let {
                                                        checked: t
                                                    } = e.target;
                                                    !t && y.whitelistedAddress ? D({
                                                        field: N.I.whitelistedAddress,
                                                        value: ""
                                                    }) : t && p && es.current.showModal(), $(t)
                                                }
                                            }), (0, a.jsx)("button", {
                                                type: "button",
                                                className: "bg-transparent px-0 outline-transparent",
                                                children: (0, a.jsx)(o.Tooltip, {
                                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                                    content: y.whitelistedAddress ? "Only the whitelisted address (".concat(er, ") will be able to fill this order.") : "If you specify one, only the whitelisted address will be able to fill this order.",
                                                    children: (0, a.jsx)(s.Z, {
                                                        className: "h-4 w-4 text-white/50"
                                                    })
                                                })
                                            })]
                                        })
                                    }), p ? (0, a.jsxs)("dialog", {
                                        ref: es,
                                        className: "scale-in-center relative w-screen flex-col overflow-hidden rounded-3xl bg-black bg-opacity-20 px-8 py-6 text-blue-50 shadow-2xl backdrop-blur md:w-[30vw] md:min-w-[500px] md:px-8 md:pb-10 md:pt-12",
                                        children: [(0, a.jsx)(P.Z, {
                                            handleClose: () => {
                                                D({
                                                    field: N.I.whitelistedAddress,
                                                    value: ""
                                                }), el()
                                            }
                                        }), (0, a.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, a.jsx)("h3", {
                                                className: "mb-4 mt-1 text-xl font-extrabold text-white",
                                                children: "Whitelisted address"
                                            }), (0, a.jsx)("input", {
                                                type: "text",
                                                placeholder: "0x0000000",
                                                value: y[N.I.whitelistedAddress],
                                                className: "w-full rounded-xl border border-blue-100/50 bg-transparent px-5 py-3 text-left text-sm text-blue-100 shadow-inner-xl transition-all placeholder:text-blue-gray-100/50 focus:outline-none",
                                                onChange: e => {
                                                    let t = e.target.value;
                                                    eo(e.target.value && (!t.startsWith("0x") || 42 !== t.length)), D({
                                                        field: N.I.whitelistedAddress,
                                                        value: t
                                                    })
                                                }
                                            }), ei ? (0, a.jsx)("div", {
                                                className: "text-red-500",
                                                children: "Invalid address"
                                            }) : y.whitelistedAddress && (0, a.jsx)("button", {
                                                className: "mt-4 self-end rounded-md bg-orange-500 px-4 py-2 font-mono text-white hover:bg-orange-600",
                                                onClick: () => {
                                                    ei && (eo(!1), D({
                                                        field: [N.I.whitelistedAddress],
                                                        value: ""
                                                    })), el()
                                                },
                                                children: "Add"
                                            })]
                                        })]
                                    }) : (0, a.jsx)("div", {
                                        className: c()(G ? "max-h-20 opacity-100" : "my-0 max-h-0 overflow-hidden opacity-0", "transition-all duration-500 ease-in-out"),
                                        children: (0, a.jsx)("input", {
                                            type: "text",
                                            placeholder: "0x0000000",
                                            value: y[N.I.whitelistedAddress],
                                            className: "w-full rounded-xl border border-blue-100/50 bg-transparent px-5 py-3 text-left text-sm text-blue-100 shadow-inner-xl transition-all placeholder:text-blue-gray-100/50 focus:outline-none",
                                            onChange: e => D({
                                                field: N.I.whitelistedAddress,
                                                value: e.target.value
                                            })
                                        })
                                    })]
                                }), (0, a.jsx)(o.Tooltip, {
                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                    content: y[N.I.tokenAmount] > z && (0, a.jsxs)("span", {
                                        children: ["Not enough $", y[N.I.token].symbol, " ", "balance"]
                                    }),
                                    open: (null !== (d = y[N.I.tokenAmount]) && void 0 !== d ? d : 0) > z && void 0,
                                    children: (0, a.jsx)("div", {
                                        className: c()("flex items-center transition-all duration-200", p ? "w-1/2 justify-end" : "mx-auto my-4 justify-center"),
                                        children: (0, a.jsx)(q.Z, {
                                            order: y,
                                            resetOrder: () => {
                                                E(R)
                                            },
                                            disabled: K
                                        })
                                    })
                                })]
                            }), !p && (0, a.jsx)(L.Z, {})]
                        })
                    }), !p && (0, a.jsx)("div", {
                        className: "mx-1 flex grow flex-col justify-between md:mx-auto",
                        children: (0, a.jsxs)("div", {
                            className: "mx-auto flex flex-row items-center justify-center gap-1 text-gray-50/50",
                            children: [(0, a.jsx)(i.Z, {
                                className: "mt-1 h-4 w-4 items-center"
                            }), (0, a.jsx)(f(), {
                                href: "https://www.cyberscope.io/audits/otsea",
                                className: "mb-auto mt-2 bg-transparent text-center font-comforta text-xs text-blue-50/50 hover:text-blue-50/80",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "Audited by CyberScope"
                            })]
                        })
                    })]
                })
            }

            function ClaimPage() {
                return (0, a.jsx)(GenerateOrder, {})
            }
        },
        59344: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Loader
                }
            });
            var a = n(57437);
            n(12025);
            var s = n(54440),
                l = n.n(s),
                r = n(16691),
                i = n.n(r),
                o = n(2265),
                u = n(56926),
                d = n(12169);

            function Loader(e) {
                let {
                    loadingState: t,
                    className: n,
                    fullScreen: s = !0
                } = e, {
                    transaction: r,
                    txLoadingMessage: c,
                    callbacks: [p, m] = [],
                    waitingForWallet: y,
                    setWaitingForWallet: f
                } = t || {}, [b, h] = (0, o.useState)(null), {
                    data: x,
                    isError: g,
                    isLoading: T,
                    isSuccess: v,
                    error: w
                } = (0, u.BX)({
                    hash: b
                }), A = v || g;
                return (0, o.useEffect)(() => {
                    console.log(r), r ? (async () => {
                        try {
                            let e = "string" != typeof r ? (await r.writeAsync()).hash : r;
                            h(e)
                        } catch (e) {
                            console.log(e), f(!1), null == m || m(e)
                        }
                    })() : h(null)
                }, [r, f, m]), (0, o.useEffect)(() => {
                    b && A && (g ? m(w) : p(x), h(null))
                }, [b, A, g, w, m, p, x]), (0, o.useEffect)(() => {
                    T && !A && f(!1)
                }, [A, T, f]), (T || y) && (0, a.jsxs)("div", {
                    className: l()("inset-0 z-50 flex flex-col items-center justify-center rounded-xl bg-blue-gray-900 bg-opacity-80 text-2xl font-bold text-blue-100", y || s ? "fixed" : "absolute", n),
                    children: [(0, a.jsx)(i(), {
                        alt: "happy blocktopus",
                        src: d.Z,
                        className: "h-24 w-auto animate-bounce opacity-70"
                    }), (0, a.jsx)("div", {
                        className: "flex animate-pulse items-center gap-4",
                        children: (y || c) && (0, a.jsx)("span", {
                            className: "font-mono text-base",
                            children: y ? "Proceed on Wallet..." : c
                        })
                    })]
                })
            }
        },
        28843: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return NoPriceData
                }
            });
            var a = n(57437),
                s = n(79425),
                l = n(12025);

            function NoPriceData() {
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)(l.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "No market price could be retrieved for this token",
                        children: (0, a.jsx)(s.Z, {
                            className: "h-4 w-4 text-yellow-600"
                        })
                    })
                })
            }
        },
        31185: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return s
                }
            });
            var a = n(33948);
            let s = {
                name: "OTSea",
                symbol: "OTSEA",
                address: a.L,
                thumb: "https://otsea.io/otsea-erc20-thumb.jpg",
                balance: 0,
                decimals: 18
            }
        },
        51360: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return s
                }
            });
            var a = n(2265);
            let s = (0, a.createContext)({})
        },
        44201: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useAlchemy
                }
            });
            var a = n(76751);
            let s = {
                    apiKey: "C3BHzcbwRa5S3ix8tmTjno-ZQV1MC8lF",
                    network: a.N.ETH_MAINNET
                },
                l = new a.m(s);

            function useAlchemy() {
                return l
            }
        },
        17518: function(e, t, n) {
            "use strict";

            function useHandleDialogClose(e) {
                return () => {
                    let t = e.current;
                    t && (t.onanimationend = () => {
                        t.onanimationend = () => !1, t.classList.replace("scale-out-center", "scale-in-center"), t.close()
                    }, t.classList.replace("scale-in-center", "scale-out-center"))
                }
            }
            n.d(t, {
                Z: function() {
                    return useHandleDialogClose
                }
            })
        },
        17081: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return usePendingTransaction
                }
            });
            var a = n(2265),
                s = n(87415),
                l = n(56926),
                r = n(44201);

            function usePendingTransaction() {
                let {
                    contractWrite: e,
                    onSuccess: t,
                    onError: n,
                    txLoadingMessage: i
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = (0, r.Z)(), [u, d] = (0, a.useState)(!1), [{
                    transaction: c,
                    callbacks: p
                }, m] = (0, a.useState)({
                    transaction: null
                }), handlePendingTransaction = async e => await new Promise(function() {
                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    return m({
                        transaction: e,
                        callbacks: n
                    })
                }), {
                    chain: y
                } = (0, l.LN)(), handleContractWrite = async a => {
                    if (null == a || a.preventDefault(), y.unsupported) return alert("Unsupported chain, switch to Ethereum Mainnet");
                    try {
                        d(!0), await handlePendingTransaction(e), null == t || t()
                    } catch (a) {
                        let e = a.message.includes("User rejected");
                        if (e) return;
                        if (a.name.includes("TransactionNotFoundError")) {
                            let e = a.message.match(/0x[a-fA-F0-9]{64}/)[0];
                            try {
                                return await o.transact.waitForTransaction(e, 0, 45e3), null == t ? void 0 : t()
                            } catch (e) {}
                        } else if (a.message.includes("Ledger device")) return s.Am.error("Error on Ledger device. Please check connection and try again.");
                        else if (a.name.includes("EstimateGasExecutionError")) return s.Am.error("Gas error. Check your ETH balance and try again.");
                        n ? n(a) : (console.error(a), s.Am.error("".concat(a.name, ": ").concat(a.message)))
                    } finally {
                        d(!1), m({
                            transaction: null
                        })
                    }
                };
                return {
                    isChainUnsupported: null == y ? void 0 : y.unsupported,
                    handlePendingTransaction,
                    setPendingTransaction: m,
                    loadingState: {
                        waitingForWallet: u,
                        setWaitingForWallet: d,
                        transaction: c,
                        callbacks: p,
                        txLoadingMessage: i
                    },
                    handleContractWrite
                }
            }
        },
        90626: function(e, t, n) {
            "use strict";

            function useShortHash(e) {
                let {
                    hash: t,
                    chars: n = 4
                } = e;
                return t.slice(0, n) + "..." + t.slice(-n)
            }
            n.d(t, {
                Z: function() {
                    return useShortHash
                }
            })
        },
        78258: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useToken
                }
            });
            var a = n(2265),
                s = n(54034);

            function useToken() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = null == e ? void 0 : e.toLowerCase(),
                    [n, l] = (0, a.useState)(),
                    {
                        searchTokenHandler: r
                    } = (0, s.Z)({
                        token: n,
                        searchQuery: t,
                        setSearchResults: e => {
                            l(e[0])
                        }
                    });
                return (0, a.useEffect)(() => {
                    t && r()
                }, [t]), n
            }
        },
        62035: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useTokenPrice
                }
            });
            var a = n(2265);
            n(31185);
            var s = n(34065),
                l = n(51360);

            function useTokenPrice(e) {
                let {
                    ethUsd: t
                } = (0, a.useContext)(s.F), {
                    addTokensToFetch: n,
                    removeTokensToFetch: r,
                    tokenPrices: i
                } = (0, a.useContext)(l.M);
                return (0, a.useEffect)(() => {
                    n(e)
                }, [e, n, r]), i[e.address.toLowerCase()]
            }
        },
        54034: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useTokenSearch
                }
            });
            var a = n(14484),
                s = n(2265);
            let l = Object.freeze({
                TOKEN_INFO: "tokenInfo"
            });
            var r = n(28316);
            let i = new r.x;
            async function fetchTokenByContract(e) {
                try {
                    var t, n, s;
                    let {
                        data: a
                    } = await i.coinByAddress(e);
                    return {
                        id: a.id,
                        symbol: a.symbol.toUpperCase(),
                        address: a.platforms.ethereum,
                        name: a.name,
                        thumb: (null === (t = a.image) || void 0 === t ? void 0 : t.large) || (null === (n = a.image) || void 0 === n ? void 0 : n.small) || (null === (s = a.image) || void 0 === s ? void 0 : s.thumb),
                        decimals: a.detail_platforms.ethereum.decimal_place
                    }
                } catch (t) {
                    try {
                        let t = await (0, a.JH)({
                            contracts: ["symbol", "name", "decimals"].map(t => ({
                                address: e,
                                abi: a.em,
                                functionName: t
                            }))
                        });
                        if (t.some(e => {
                                let {
                                    status: t
                                } = e;
                                return "success" !== t
                            })) throw Error("Cannot read contract.");
                        let [n, s, l] = t.map(e => {
                            let {
                                result: t
                            } = e;
                            return t
                        });
                        return {
                            symbol: n.toUpperCase(),
                            name: s,
                            decimals: l,
                            address: e,
                            thumb: "https://ui-avatars.com/api/?name=" + s
                        }
                    } catch (e) {
                        return console.error("Failed to fetch token by contract:", e), null
                    }
                }
            }
            async function fetchTokensByNameOrSymbol(e) {
                try {
                    let {
                        data: t
                    } = await i.search(e);
                    return (null == t ? void 0 : t.coins) || null
                } catch (e) {
                    return console.error("Failed to fetch tokens by name or symbol:", e), null
                }
            }
            async function getTokenData(e, t) {
                if (t.startsWith("0x") && 42 === t.length) {
                    let n = e.find(e => e.address.toLowerCase() === t);
                    return null != n || (n = await fetchTokenByContract(t)), n ? [n] : []
                }
                try {
                    let n = e.filter(e => {
                        let {
                            name: n,
                            symbol: a
                        } = e;
                        return (null == n ? void 0 : n.toLowerCase().includes(t)) || (null == a ? void 0 : a.toLowerCase().includes(t))
                    });
                    return n.length || (n = await fetchTokensByNameOrSymbol(t)), n || []
                } catch (e) {
                    console.log("error here"), console.log(e)
                }
            }

            function useTokenSearch(e) {
                var t;
                let {
                    token: n,
                    searchQuery: a,
                    setLoading: r = () => null,
                    setSearchResults: i
                } = e, [o, u] = (0, s.useState)(JSON.parse(localStorage.getItem(l.TOKEN_INFO) || "[]")), handleSetTokenInfo = e => {
                    u(t => {
                        1 === e.length && delete e[0].balance;
                        let n = t.concat(e);
                        return localStorage.setItem(l.TOKEN_INFO, JSON.stringify(n)), n
                    })
                };
                (0, s.useEffect)(() => {
                    o.length || fetch("/api/token-info").then(e => e.json()).then(handleSetTokenInfo)
                }, [o]);
                let d = !!n && (null === (t = n.address) || void 0 === t ? void 0 : t.toLowerCase());
                return (0, s.useEffect)(() => {
                    d && !o.find(e => {
                        let {
                            address: t
                        } = e;
                        return t.toLowerCase() === d
                    }) && handleSetTokenInfo([n])
                }, [d]), {
                    searchTokenHandler: async () => {
                        try {
                            if (r(!0), !a) return i([]);
                            let e = await getTokenData(o, a.toLowerCase());
                            i(e)
                        } catch (e) {
                            console.log(e)
                        } finally {
                            r(!1)
                        }
                    },
                    getTokenData: (0, s.useCallback)(e => getTokenData(o, e), [o])
                }
            }
        },
        28316: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Coingecko
                },
                x: function() {
                    return CoingeckoClient
                }
            });
            var a = n(72007),
                s = n(14894),
                l = n(94863),
                r = n(57437),
                i = n(92173),
                o = n(2265),
                u = n(34065),
                d = new WeakMap;
            let CoingeckoClient = class CoingeckoClient {
                ethUsd() {
                    return (0, a._)(this, d).get("simple/price?ids=ethereum&vs_currencies=usd")
                }
                coinById(e) {
                    return (0, a._)(this, d).get("coins/".concat(e))
                }
                coinByAddress(e) {
                    return (0, a._)(this, d).get("coins/1/contract/".concat(e))
                }
                search(e) {
                    return (0, a._)(this, d).get("search?query=".concat(e))
                }
                get(e) {
                    return (0, a._)(this, d).get(e)
                }
                constructor() {
                    (0, s._)(this, d, {
                        writable: !0,
                        value: void 0
                    }), (0, l._)(this, d, i.Z.create({
                        baseURL: "https://api.coingecko.com/api/v3/"
                    })), (0, a._)(this, d).interceptors.response.use(e => e, e => {
                        var t;
                        let {
                            config: n
                        } = e;
                        return n.baseURL.includes("api.coingecko") && (null === (t = e.response) || void 0 === t ? void 0 : t.status) !== 404 ? (n.baseURL = "/api/", n.url = "cg?path=".concat(encodeURIComponent(n.url)), (0, a._)(this, d).request(n)) : Promise.reject(e)
                    })
                }
            };
            let c = new CoingeckoClient;

            function Coingecko(e) {
                let {
                    children: t
                } = e, [n, a] = (0, o.useState)(0);
                return (0, o.useEffect)(() => {
                    let e;
                    return (async () => {
                        let {
                            data: t
                        } = await c.ethUsd();
                        a(t.ethereum.usd), e = setInterval(async () => {
                            let {
                                data: e
                            } = await c.ethUsd();
                            a(e.ethereum.usd)
                        }, 3e4)
                    })(), () => clearInterval(e)
                }, []), (0, r.jsx)(u.F.Provider, {
                    value: {
                        ethUsd: n,
                        ethToUsd: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            return Number(Number(e * n).toFixed(t)).toLocaleString()
                        }
                    },
                    children: t
                })
            }
        },
        63160: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/eth-logo-color.4997e78f.png",
                height: 2e3,
                width: 2e3,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXF6ftOimeyelOmXpdF2icu/qvCepM6kltNVQLXFq72x4u/bu8Gl6/J3lea41vaVo+Gkl+jYwsmgnc99o/ays/DjvLyumuvqy8u7t9q39vuXsGeZAAAAGHRSTlMAWTe+XhPzPmwMqOHxkdv+/qfhvfT+ktuiNgFlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nCWLWw6AIBDEigILCir45v4HNS7z0ybNAFiLztXZqVxPyz/l3c5VALMc/jZAnPaxRG3JD/0WAvABOdgBj1AmBZYAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        12169: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/otsea-logo.ce507ece.png",
                height: 600,
                width: 528,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAS1BMVEVGLWGVecqcg+G5h26jdWvAkHBVPY2tfG1+WGqdc33CkHBPMmFUOmnGlnMAACJ7Ya1rUZsAACR7X63lqnP/yXj/13+JcNO9iW9lQmJcTjaAAAAAE3RSTlND9v794P6H1Pf++/7+/RatvBWtFMUmLAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwdx0kSgCAMAMEBgYAbakLw/y+1yr41pLnMBDLMbAhZ1VRX8lbHux/If4HaWqtQ3GP0wtnDFZ77A1nIArhuvrQiAAAAAElFTkSuQmCC",
                blurWidth: 7,
                blurHeight: 8
            }
        },
        67057: function(e, t, n) {
            "use strict";
            var a = n(2265);
            let s = a.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, s) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: s,
                    "aria-labelledby": t
                }, n), e ? a.createElement("title", {
                    id: t
                }, e) : null, a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                }))
            });
            t.Z = s
        },
        6215: function(e, t, n) {
            "use strict";
            var a = n(2265);
            let s = a.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, s) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: s,
                    "aria-labelledby": t
                }, n), e ? a.createElement("title", {
                    id: t
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = s
        },
        79425: function(e, t, n) {
            "use strict";
            var a = n(2265);
            let s = a.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, s) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: s,
                    "aria-labelledby": t
                }, n), e ? a.createElement("title", {
                    id: t
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = s
        },
        35785: function(e, t, n) {
            "use strict";
            var a = n(2265);
            let s = a.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, s) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: s,
                    "aria-labelledby": t
                }, n), e ? a.createElement("title", {
                    id: t
                }, e) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = s
        },
        62936: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return a
                }
            });
            let a = "0x0000000000000000000000000000000000000000"
        },
        52078: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return parseEther
                }
            });
            var a = n(36238),
                s = n(43977);

            function parseEther(e, t = "wei") {
                return (0, s.v)(e, a.ez[t])
            }
        },
        43977: function(e, t, n) {
            "use strict";

            function parseUnits(e, t) {
                let [n, a = "0"] = e.split("."), s = n.startsWith("-");
                if (s && (n = n.slice(1)), a = a.replace(/(0+)$/, ""), 0 === t) 1 === Math.round(Number(`.${a}`)) && (n = `${BigInt(n)+1n}`), a = "";
                else if (a.length > t) {
                    let [e, s, l] = [a.slice(0, t - 1), a.slice(t - 1, t), a.slice(t)], r = Math.round(Number(`${s}.${l}`));
                    (a = r > 9 ? `${BigInt(e)+BigInt(1)}0`.padStart(e.length + 1, "0") : `${e}${r}`).length > t && (a = a.slice(1), n = `${BigInt(n)+1n}`), a = a.slice(0, t)
                } else a = a.padEnd(t, "0");
                return BigInt(`${s?"-":""}${n}${a}`)
            }
            n.d(t, {
                v: function() {
                    return parseUnits
                }
            })
        },
        10688: function(e) {
            "use strict";
            e.exports = JSON.parse('{"L":"0x28A2F7849f0a2BCCf1F5D246cEf5a6867A5BFa23","M":[{"inputs":[{"internalType":"address payable","name":"_opWallet1","type":"address"},{"internalType":"address payable","name":"_opWallet2","type":"address"},{"internalType":"address payable","name":"_dividendsWallet","type":"address"},{"internalType":"address payable","name":"_marketingWallet","type":"address"},{"internalType":"address","name":"_otseaErc20","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"indexed":false,"internalType":"struct OTSea.Order","name":"order","type":"tuple"},{"indexed":true,"internalType":"bytes32","name":"orderId","type":"bytes32"},{"indexed":false,"internalType":"uint8","name":"tokenDecimals","type":"uint8"}],"name":"OrderCreated","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"indexed":false,"internalType":"struct OTSea.Order","name":"order","type":"tuple"},{"indexed":true,"internalType":"bytes32","name":"orderId","type":"bytes32"},{"components":[{"internalType":"address","name":"fulfiller","type":"address"},{"internalType":"uint256","name":"tokensReceived","type":"uint256"},{"internalType":"uint256","name":"ethFulfilled","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"}],"indexed":false,"internalType":"struct OTSea.Fill","name":"fill","type":"tuple"}],"name":"OrderFulfilled","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"indexed":false,"internalType":"struct OTSea.Order","name":"order","type":"tuple"},{"indexed":true,"internalType":"bytes32","name":"orderId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"OrderPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"indexed":false,"internalType":"struct OTSea.Order","name":"order","type":"tuple"},{"indexed":true,"internalType":"bytes32","name":"orderId","type":"bytes32"},{"components":[{"internalType":"uint256","name":"withdrawAmount","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"},{"internalType":"uint256","name":"refundedTokens","type":"uint256"}],"indexed":false,"internalType":"struct OTSea.Withdrawal","name":"withdrawal","type":"tuple"}],"name":"OrderSettled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"transferTax","type":"uint256"}],"name":"TransferTaxRecorded","type":"event"},{"inputs":[],"name":"contractState","outputs":[{"internalType":"enum OTSea.ContractState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendsWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fishFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"orderId","type":"bytes32"},{"internalType":"uint256","name":"expectedPricePerToken","type":"uint256"}],"name":"fulfillOrder","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"opWallet1","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"opWallet2","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"orders","outputs":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"otseaERC20","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"requesterTokenAmount","type":"uint256"},{"internalType":"uint256","name":"requestedETHAmount","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"address","name":"whitelistedAddress","type":"address"}],"name":"requestOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_dividendsWallet","type":"address"}],"name":"setDividendsWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fishFee","type":"uint256"},{"internalType":"uint256","name":"_whaleFee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_marketingWallet","type":"address"}],"name":"setMarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_opWallet1","type":"address"}],"name":"setOpWallet1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_opWallet2","type":"address"}],"name":"setOpWallet2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"setWhaleThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"orderId","type":"bytes32"}],"name":"settleOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"orderId","type":"bytes32"},{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whaleFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whaleThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')
        }
    },
    function(e) {
        e.O(0, [4590, 8293, 4705, 2279, 728, 1108, 6926, 7401, 939, 391, 7133, 7357, 6985, 1396, 5694, 5764, 2552, 8735, 8308, 2971, 2472, 1744], function() {
            return e(e.s = 76080)
        }), _N_E = e.O()
    }
]);