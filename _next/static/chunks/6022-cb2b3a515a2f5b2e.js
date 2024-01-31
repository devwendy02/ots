"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6022], {
        66022: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return BrowseId
                }
            });
            var l = s(57437),
                a = s(50392),
                n = s(54440),
                r = s.n(n),
                i = s(16691),
                o = s.n(i),
                c = s(61396),
                d = s.n(c),
                x = s(24033),
                h = s(2265),
                u = s(56926),
                m = s(12169);

            function BlocktopusLoader(e) {
                let {
                    message: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex grow flex-col items-center justify-center gap-4",
                    children: [(0, l.jsx)("div", {
                        className: "animate-bounce",
                        children: (0, l.jsx)(o(), {
                            src: m.Z,
                            className: "h-auto w-14 opacity-80",
                            width: 50,
                            height: 50,
                            alt: "happy blocktopus loader"
                        })
                    }), (0, l.jsx)("h2", {
                        className: "font-mono text-white/90",
                        children: t
                    })]
                })
            }
            var p = s(78197),
                f = s(15276),
                b = s(67805),
                j = s(77150),
                v = s(51524),
                g = s(12025),
                y = s(2390),
                w = s.n(y),
                N = s(62936),
                k = s(17622),
                T = s(86191),
                A = s(34065),
                C = s(23685),
                Z = s(62035),
                S = s(39418),
                F = s(87415),
                I = s(52078),
                P = s(79352),
                H = s(51199),
                D = s(59344),
                M = s(79043),
                E = s(74157),
                O = s(51360),
                W = s(55777),
                _ = s(77676),
                L = s(35529),
                z = s(79425),
                B = s(10545),
                V = s(42333);
            let fetcher = function() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    return fetch(...t).then(e => e.json())
                },
                useHoneypotCheck = e => {
                    let {
                        address: t
                    } = e, {
                        data: s,
                        error: l,
                        isLoading: a,
                        mutate: n
                    } = (0, V.ZP)("/api/honeypot-check?address=".concat(t), fetcher);
                    return {
                        data: s,
                        error: l,
                        loading: a,
                        mutate: n
                    }
                },
                formatString = (e, t) => {
                    switch (t) {
                        case "title":
                            return e.toLowerCase().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
                        case "lowercase":
                            return e.toLowerCase();
                        case "uppercase":
                            return e.toUpperCase();
                        case "pascal":
                            return (e.match(/[a-zA-Z0-9]+/g) || []).map(e => "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))).join("");
                        case "snake":
                            return e.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(e => e.toLowerCase()).join("_");
                        case "kebab":
                            return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
                        default:
                            return e
                    }
                };

            function HoneypotCheck(e) {
                let {
                    token: t
                } = e, {
                    data: s,
                    loading: a
                } = useHoneypotCheck({
                    address: t.address
                });
                if (!a) return s.isHoneypot ? (0, l.jsxs)(B.bZ, {
                    variant: "danger",
                    children: [(0, l.jsx)(B.bZ.Icon, {
                        children: (0, l.jsx)(z.Z, {
                            className: "h-5 w-5"
                        })
                    }), (0, l.jsxs)(B.bZ.Description, {
                        children: [(0, l.jsxs)("span", {
                            className: "font-medium",
                            children: ["$", t.symbol]
                        }), " has been identified as a honey pot on honeypot.is."]
                    })]
                }) : s.flags.length > 0 ? (0, l.jsxs)(B.bZ, {
                    variant: "warning",
                    children: [(0, l.jsx)(B.bZ.Icon, {
                        children: (0, l.jsx)(z.Z, {
                            className: "h-5 w-5"
                        })
                    }), (0, l.jsxs)(B.bZ.Description, {
                        children: [(0, l.jsxs)("span", {
                            className: "font-medium",
                            children: ["$", t.symbol]
                        }), " has been flagged for the following reasons:", (0, l.jsx)("ul", {
                            className: "ml-2 mt-1 list-inside list-disc",
                            children: s.flags.map(e => (0, l.jsx)("li", {
                                children: formatString(e.replaceAll("_", " "), "title")
                            }, e))
                        })]
                    })]
                }) : null
            }
            var U = s(9290),
                q = s(49095),
                $ = s(54844);

            function ConfirmFill(e) {
                let {
                    order: t,
                    token: s,
                    fillAmount: a,
                    ethAmountWei: n,
                    enoughBalance: i,
                    usdValue: c,
                    isConnected: d,
                    buyDisabled: x,
                    handleFillOrder: u
                } = e, [m, p] = (0, h.useState)(!1), [f, b] = (0, h.useState)(!1), j = (0, $.Z)();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("button", {
                        type: "button",
                        className: r()("relative flex w-full items-center justify-center overflow-hidden rounded-full bg-blue-500 bg-opacity-70 font-mono tracking-wider text-white data-[disabled='true']:text-gray-500", j ? "py-3" : "px-8 py-5"),
                        disabled: x,
                        onClick: () => p(!0),
                        children: (0, l.jsx)(g.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            ...!n && {
                                open: !1
                            },
                            content: n && (i ? (0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsxs)("span", {
                                    children: [(0, P.d)(n), " ETH"]
                                }), (0, l.jsxs)("span", {
                                    className: "text-end text-xs",
                                    children: ["(~$", c.toFixed(5), " USD)"]
                                })]
                            }) : (0, l.jsx)("div", {
                                className: "flex flex-col",
                                children: (0, l.jsx)("span", {
                                    className: "text-end text-xs",
                                    children: d ? "Not enough balance" : "Wallet not connected"
                                })
                            })),
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-row items-center justify-center gap-2",
                                children: [(0, l.jsx)("span", {
                                    className: "font-comforta text-sm",
                                    children: "Pay"
                                }), n ? (0, l.jsxs)("span", {
                                    className: "font-comforta ",
                                    children: [Math.floor(1e6 * (0, P.d)(n)) / 1e6 != (0, P.d)(n) && "~", Math.floor(1e6 * (0, P.d)(n)) / 1e6, " ", "ETH"]
                                }) : (0, l.jsx)("span", {
                                    children: "0 ETH"
                                })]
                            })
                        })
                    }), (0, l.jsxs)(q.u, {
                        open: m,
                        setOpen: p,
                        onClose: () => b(!1),
                        children: [(0, l.jsx)(q.u.Title, {
                            className: "text-center text-xl",
                            children: "Confirm Fill"
                        }), (0, l.jsxs)(q.u.Content, {
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-col items-center justify-center gap-1 text-white",
                                children: [(0, l.jsx)(o(), {
                                    src: s.thumb,
                                    className: "mb-4 h-16 w-16 rounded-xl",
                                    width: 50,
                                    height: 50,
                                    alt: "Token Logo"
                                }), (0, l.jsxs)("span", {
                                    className: "text-md",
                                    children: [a, " $", s.symbol, " for", " ", n ? (0, P.d)(n) : "0", " ETH"]
                                }), (0, l.jsx)(L.Z, {
                                    className: "!text-md !w-fit",
                                    order: { ...t,
                                        token: s
                                    }
                                })]
                            }), (0, l.jsx)(U.Z, {
                                token: s,
                                verbose: !0
                            }), (0, l.jsx)(HoneypotCheck, {
                                token: s
                            }), (0, l.jsxs)("form", {
                                className: "flex flex-col justify-between gap-4",
                                onSubmit: u,
                                children: [(0, l.jsxs)("div", {
                                    className: "flex gap-2 rounded-lg border border-sea-300/20 p-3",
                                    children: [(0, l.jsx)("input", {
                                        type: "checkbox",
                                        id: "check",
                                        name: "check",
                                        "aria-describedby": "accept-checkbox",
                                        className: r()(["form-checkbox mt-1 h-5 w-5 rounded-md border border-sea-300/60 text-sea-500/50 transition duration-150 ease-in-out", "hover:cursor-pointer", "focus:outline-none focus:ring-0 focus:ring-offset-0"]),
                                        onChange: () => {
                                            b(!f)
                                        }
                                    }), (0, l.jsx)("label", {
                                        htmlFor: "check",
                                        className: "text-sm text-white",
                                        children: "I understand that any order can be created for any token, and I have conducted thorough research into the token prior to filling this order."
                                    })]
                                }), (0, l.jsx)("button", {
                                    type: "submit",
                                    disabled: !f,
                                    className: "relative w-full overflow-hidden rounded-full px-8 py-5 text-white before:absolute before:inset-0 before:rounded-3xl before:bg-orange-500 before:opacity-60 before:transition-all hover:before:opacity-70 active:top-px active:before:bg-orange-500 active:before:shadow-inner disabled:before:z-20 disabled:before:bg-gray-700 disabled:before:bg-opacity-80",
                                    children: (0, l.jsx)(g.Tooltip, {
                                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                        ...!n && {
                                            open: !1
                                        },
                                        content: n && (i ? (0, l.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, l.jsxs)("span", {
                                                children: [(0, P.d)(n), " ETH"]
                                            }), (0, l.jsxs)("span", {
                                                className: "text-end text-xs",
                                                children: ["(~$", c.toFixed(5), " USD)"]
                                            })]
                                        }) : (0, l.jsx)("div", {
                                            className: "flex flex-col",
                                            children: (0, l.jsx)("span", {
                                                className: "text-end text-xs",
                                                children: d ? "Not enough balance" : "Wallet not connected"
                                            })
                                        })),
                                        children: (0, l.jsxs)("div", {
                                            className: "relative z-10 flex items-center justify-center gap-2 text-white",
                                            children: [(0, l.jsx)("span", {
                                                className: "font-comforta text-sm",
                                                children: "Pay"
                                            }), n ? (0, l.jsxs)("span", {
                                                className: "font-comforta",
                                                children: [Math.floor(1e6 * (0, P.d)(n)) / 1e6 != (0, P.d)(n) && "~", Math.floor(1e6 * (0, P.d)(n)) / 1e6, " ", "ETH"]
                                            }) : (0, l.jsx)("span", {
                                                children: "0 ETH"
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
            var R = s(51274),
                X = s(70346),
                G = s(84437);

            function FillForm(e) {
                var t, s;
                let {
                    order: a,
                    token: n
                } = e, i = (0, Z.Z)(n), [c, d] = (0, h.useState)(i), x = (0, _.Z)(a), m = (0, u.mA)(), [p, f] = (0, h.useState)(a.partiallyFillable ? BigInt(a.pricePerToken) : (0, I.f)(String(a.requestedETHAmount))), [b, j] = (0, h.useState)(a.partiallyFillable ? 1 : a.availableTokens), handleSetAmount = e => {
                    if (!e) {
                        f(null), j(null);
                        return
                    }
                    let t = parseFloat(e),
                        {
                            availableTokens: s,
                            pricePerToken: l
                        } = a,
                        [n, r] = t <= s ? [t, BigInt(t) * BigInt(l)] : [s, BigInt(s) * BigInt(l)];
                    j(n), f(r)
                };
                a.state, E.K.Open, a.initialTokens, a.availableTokens, a.initialTokens;
                let v = (0, h.useRef)(),
                    {
                        handleFillOrder: y,
                        loadingState: w
                    } = (0, W.Z)({
                        orderId: a.id,
                        ethAmountWei: p,
                        expectedPricePerToken: a.pricePerToken,
                        onSuccess: () => {
                            j(1), f(a.pricePerToken), a[M.I.formattedPricePerToken] < i ? (d(i), v.current.showModal()) : F.Am.success("Order filled!")
                        }
                    }),
                    k = (0, C.Z)(a),
                    T = +(0, P.d)(p || 0) * (null === (t = (0, h.useContext)(A.F)) || void 0 === t ? void 0 : t.ethUsd) || 0,
                    L = Math.round(1e4 * (b || 0) / a.availableTokens) / 100,
                    {
                        address: z,
                        isConnected: B
                    } = (0, u.mA)(),
                    V = null === (s = (0, u.KQ)({
                        address: z
                    }).data) || void 0 === s ? void 0 : s.value,
                    U = p < V,
                    q = !U || !b || 0 !== a.state || a.whitelistedAddress !== N.D && a.whitelistedAddress !== m.address.toLocaleLowerCase(),
                    {
                        uniswapLabsVerifiedTokens: $
                    } = (0, h.useContext)(O.M),
                    K = $.some(e => e.address.toLowerCase() === n.address.toLowerCase());
                return (0, l.jsxs)("div", {
                    className: "flex w-full flex-col justify-between",
                    children: [(0, l.jsx)(D.Z, {
                        loadingState: w
                    }), a && (0, l.jsx)(X.Z, {
                        order: a,
                        fillAmount: b,
                        finalPrice: c,
                        token: n,
                        tokenPrice: i,
                        ref: v
                    }), (0, l.jsxs)("form", {
                        onSubmit: y,
                        className: "flex w-full flex-col items-center justify-between gap-2 rounded-3xl",
                        children: [(0, l.jsx)("div", {
                            className: "flex w-full flex-col items-center justify-between",
                            children: (0, l.jsxs)("div", {
                                className: "flex w-full flex-col gap-3 text-blue-50",
                                children: [(0, l.jsxs)("div", {
                                    className: "space-y-1 text-sm text-blue-50",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0, l.jsx)("span", {
                                            children: "Collected: "
                                        }), (0, l.jsxs)("span", {
                                            className: "flex gap-1",
                                            children: [a.fulfilledETH, " ETH"]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0, l.jsx)("span", {
                                            children: "Remaining: "
                                        }), (0, l.jsxs)("span", {
                                            className: "flex gap-1",
                                            children: [a.availableTokens, " $", n && n.symbol]
                                        })]
                                    })]
                                }), (0, l.jsx)(g.Tooltip, {
                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                    content: "".concat(x, "% filled"),
                                    children: (0, l.jsxs)("div", {
                                        className: "flex items-center justify-start gap-3",
                                        children: [(0, l.jsx)("div", {
                                            className: "relative h-1 w-full rounded-full bg-[#98BFFF1C]/20",
                                            children: (0, l.jsx)("div", {
                                                className: "absolute left-0 top-0 h-1 rounded-full bg-[#E38833]",
                                                style: {
                                                    width: "".concat(x, "%")
                                                }
                                            })
                                        }), (0, l.jsxs)("span", {
                                            className: "text-sm text-[#FFC14A]",
                                            children: [x, "%"]
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex w-full flex-col items-center gap-4",
                            children: [a && a.partiallyFillable && a.state == E.K.Open && !k && (0, l.jsxs)("div", {
                                className: "w-full space-y-1",
                                children: [(0, l.jsxs)("div", {
                                    className: "space-y-1.5",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-sm text-blue-50",
                                        children: "Fill Amount"
                                    }), (0, l.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [n && (0, l.jsxs)("div", {
                                            className: "flex flex-shrink-0 items-center gap-1",
                                            children: [(0, l.jsx)(o(), {
                                                className: "h-7 w-7 rounded-lg",
                                                src: n.thumb,
                                                width: 50,
                                                height: 50,
                                                alt: "Token icon"
                                            }), (0, l.jsxs)("h6", {
                                                className: "text-xl text-blue-50/90",
                                                children: ["$", n.symbol]
                                            })]
                                        }), (0, l.jsx)("input", {
                                            value: b || "",
                                            disabled: k,
                                            name: "fillAmount",
                                            className: r()("border-none bg-transparent text-xl text-blue-50 placeholder:text-blue-gray-100/50 focus:outline-none"),
                                            onChange: e => handleSetAmount(Math.floor(e.target.value)),
                                            type: "number",
                                            placeholder: "0.0",
                                            step: "1"
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center justify-between gap-4",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-1 items-center justify-between gap-2 text-sea-100",
                                        children: [(0, l.jsx)("input", {
                                            type: "range",
                                            name: "fillAmount",
                                            onChange: e => handleSetAmount(Math.floor(e.target.value)),
                                            className: "w-full accent-blue-50 opacity-70 ",
                                            value: b || 0,
                                            max: a.availableTokens,
                                            step: 1
                                        }), (0, l.jsxs)("span", {
                                            children: [L, "%"]
                                        })]
                                    }), (0, l.jsx)("button", {
                                        type: "button",
                                        className: "cursor-pointer rounded-lg bg-sea-300/20 px-2 py-1 text-sm font-semibold text-sea-100 hover:bg-sea-300/30",
                                        onClick: () => handleSetAmount(a.availableTokens),
                                        children: (0, l.jsx)(g.Tooltip, {
                                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                            content: "".concat(a.availableTokens, " ").concat(n && n.symbol, " available"),
                                            children: "Max"
                                        })
                                    })]
                                })]
                            }), !k && a.state == E.K.Open && (0, l.jsxs)("div", {
                                className: "flex w-full gap-2",
                                children: [(0, l.jsx)(H.Z, {
                                    disabled: q
                                }), K ? (0, l.jsx)("button", {
                                    type: "submit",
                                    className: r()(["relative w-full overflow-hidden rounded-3xl px-2 py-3 text-orange-400", "before:absolute before:inset-0 before:rounded-full before:bg-orange-400 before:opacity-70 before:transition-all", "hover:before:opacity-80", "active:top-px active:before:bg-orange-600 active:before:shadow-inner", "disabled:opacity-60"]),
                                    disabled: q,
                                    children: (0, l.jsx)("span", {
                                        className: "relative font-mono tracking-wider text-white ",
                                        children: (0, l.jsx)(g.Tooltip, {
                                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                            ...!p && {
                                                open: !1
                                            },
                                            content: p && (U ? (0, l.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [(0, l.jsxs)("span", {
                                                    children: [(0, P.d)(p), " ", "ETH"]
                                                }), (0, l.jsxs)("span", {
                                                    className: "text-end text-xs",
                                                    children: ["(~$", T.toFixed(5), " ", "USD)"]
                                                })]
                                            }) : (0, l.jsx)("div", {
                                                className: "flex flex-col",
                                                children: (0, l.jsx)("span", {
                                                    className: "text-end text-xs",
                                                    children: B ? "Not enough balance" : "Wallet not connected"
                                                })
                                            })),
                                            children: (0, l.jsxs)("div", {
                                                className: "flex flex-row items-center justify-center gap-2",
                                                children: [(0, l.jsx)("span", {
                                                    className: "font-comforta text-sm",
                                                    children: "Pay"
                                                }), p ? (0, l.jsxs)("span", {
                                                    className: "font-comforta ",
                                                    children: [Math.floor(1e6 * (0, P.d)(p)) / 1e6 != (0, P.d)(p) && "~", Math.floor(1e6 * (0, P.d)(p)) / 1e6, " ", "ETH"]
                                                }) : (0, l.jsx)("span", {
                                                    children: "0 ETH"
                                                })]
                                            })
                                        })
                                    })
                                }) : (0, l.jsx)(ConfirmFill, {
                                    order: a,
                                    token: n,
                                    fillAmount: b,
                                    ethAmountWei: p,
                                    enoughBalance: U,
                                    usdValue: T,
                                    isConnected: B,
                                    buyDisabled: q,
                                    handleFillOrder: y
                                })]
                            })]
                        })]
                    }), a.state == E.K.Settled ? (0, l.jsxs)("div", {
                        className: "mx-auto mt-3 flex items-center justify-center gap-2 font-sans text-2xl font-extrabold text-white/80",
                        children: [(0, l.jsx)(S.Z, {
                            className: "h-7 w-7"
                        }), (0, l.jsx)("span", {
                            className: "relative top-px",
                            children: "Order Closed."
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: "flex flex-col gap-2 md:mt-5",
                        children: [k && a[M.I.state] === E.K.Open && (0, l.jsx)(G.Z, {
                            order: a,
                            token: n
                        }), k && a.state != E.K.Settled && (0, l.jsx)(R.Z, {
                            order: a
                        })]
                    })]
                })
            }

            function OrderHeader(e) {
                let {
                    order: t,
                    token: s
                } = e, [a, n] = (0, h.useState)(!1), r = (0, C.Z)(t), i = (0, Z.Z)(s), {
                    ethUsd: o
                } = (0, h.useContext)(A.F), c = t.formattedPricePerToken < i;
                return c ? T.Z.Down : T.Z.Up, (0, l.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, l.jsx)("div", {
                        className: "mt-4 flex items-center justify-between gap-2",
                        children: (0, l.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, l.jsxs)(d(), {
                                href: "https://dexscreener.com/ethereum/".concat(s.address),
                                className: "flex h-6 items-center gap-1 rounded-full bg-sea-300/30 px-2 text-white transition duration-300 hover:bg-sea-300/60",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: [(0, l.jsx)(v.Z, {
                                    className: "h-3.5 w-3.5"
                                }), (0, l.jsx)("span", {
                                    className: "mt-[2px] font-comforta text-xs font-bold",
                                    children: "Chart"
                                })]
                            }), (0, l.jsxs)("button", {
                                type: "button",
                                className: "flex h-6 items-center gap-1 rounded-full bg-sea-300/50 px-2 text-white transition duration-300 hover:bg-sea-300/60",
                                onClick: () => {
                                    w()("".concat(window.origin, "/browse/").concat(t.id)), n(!0), setTimeout(() => {
                                        n(!1)
                                    }, 3e3)
                                },
                                children: [a ? (0, l.jsx)(b.Z, {
                                    className: "h-3.5 w-3.5"
                                }) : (0, l.jsx)(j.Z, {
                                    className: "h-3.5 w-3.5"
                                }), (0, l.jsx)("span", {
                                    className: "mt-[2px] font-comforta text-xs font-bold",
                                    children: "Share"
                                })]
                            })]
                        })
                    }), (0, l.jsxs)("div", {
                        className: "space-y-1 text-sm text-blue-50",
                        children: [(0, l.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, l.jsx)("span", {
                                children: "Order ID"
                            }), (0, l.jsx)(k.Z, {
                                copyTooltip: !0,
                                hash: t.id
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, l.jsx)("span", {
                                children: "Creator"
                            }), (0, l.jsx)("span", {
                                className: "relative",
                                children: r ? "You" : t.requester && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("span", {
                                        className: "absolute inset-x-0 bottom-0 border-blue-500"
                                    }), (0, l.jsx)(k.Z, {
                                        copyTooltip: !0,
                                        hash: t.requester
                                    })]
                                })
                            })]
                        }), s && (0, l.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, l.jsx)("span", {
                                children: "Offered"
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center",
                                children: [t.initialTokens, "\xa0", (0, l.jsx)(g.Tooltip, {
                                    className: "bg-black/40 px-4 py-3 backdrop-blur",
                                    content: "".concat(s.name, " [").concat(s.symbol, "] - ").concat(s.address),
                                    children: (0, l.jsxs)("span", {
                                        children: ["$", s && s.symbol]
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, l.jsx)("span", {
                                children: "For"
                            }), (0, l.jsx)("div", {
                                className: "flex",
                                children: (0, l.jsx)(g.Tooltip, {
                                    content: (0, l.jsxs)("div", {
                                        className: "text-right",
                                        children: [(0, l.jsxs)("p", {
                                            children: [t.requestedETHAmount, " ETH"]
                                        }), (0, l.jsxs)("p", {
                                            children: [t.requestedETHAmount * o, " USD"]
                                        })]
                                    }),
                                    className: "bg-black/40 px-4 py-3 backdrop-blur",
                                    children: (0, l.jsxs)("span", {
                                        className: "whitespace-nowrap",
                                        children: [parseFloat(t.requestedETHAmount).toFixed(4), " ", "ETH"]
                                    })
                                })
                            })]
                        }), (() => {
                            let e = [
                                    [(0, l.jsx)("span", {
                                        className: "whitespace-nowrap",
                                        children: (0, l.jsx)("span", {
                                            children: "Price / Token"
                                        })
                                    }, "ppt"), (0, l.jsx)("div", {
                                        className: "whitespace-nowrap",
                                        children: (0, l.jsxs)("span", {
                                            children: [t.formattedPricePerToken, " ETH"]
                                        })
                                    }, "ppt")],
                                    [(0, l.jsx)("div", {
                                        className: "whitespace-nowrap",
                                        children: (0, l.jsxs)("span", {
                                            children: [(t.formattedPricePerToken * o).toFixed(6), " ", "USD"]
                                        })
                                    }, "ppt")]
                                ],
                                [
                                    [s, a],
                                    [n, r]
                                ] = e;
                            return (0, l.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, l.jsx)("span", {
                                    children: s
                                }), (0, l.jsx)(g.Tooltip, {
                                    className: "bg-black/40 px-4 py-3 backdrop-blur",
                                    content: (0, l.jsxs)("span", {
                                        children: [n, r]
                                    }),
                                    children: a
                                })]
                            })
                        })(), (0, l.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, l.jsx)("span", {
                                children: "Crowd-Fill"
                            }), (0, l.jsx)("span", {
                                children: !0 === t.partiallyFillable ? "Yes" : "No"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, l.jsx)("span", {
                                children: "Whitelist"
                            }), (0, l.jsx)("span", {
                                children: t.whitelistedAddress !== N.D ? "Yes" : "No"
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "mx-auto h-[1px] w-full rounded-full bg-sea-300/50"
                    }), (0, l.jsx)("div", {
                        className: "rounded-3xlshadow-sm flex overflow-hidden py-4",
                        children: (0, l.jsx)(FillForm, {
                            order: t,
                            token: s
                        })
                    }), (0, l.jsx)("div", {
                        className: "mx-auto h-[1px] w-full rounded-full bg-sea-300/50"
                    })]
                })
            }
            var K = s(31095),
                Y = s(46384);
            let J = Object.freeze({
                [M.I.transactionHash]: "Tx",
                [M.I.timestamp]: "Date",
                [M.I.type]: "Type",
                [M.I.fill]: "Tokens"
            });

            function HistoryCell(e) {
                let {
                    field: t,
                    value: s
                } = e;
                return (0, l.jsx)("td", {
                    className: "whitespace-nowrap px-3 py-2",
                    children: (0, l.jsx)("span", {
                        className: "text-sm text-gray-100",
                        children: (() => {
                            switch (t) {
                                case M.I.transactionHash:
                                    return (0, l.jsx)("span", {
                                        className: "font-mono text-xs",
                                        children: (0, l.jsx)(k.Z, {
                                            chars: K.tq ? 3 : 6,
                                            hash: s,
                                            href: "https://etherscan.io/tx/".concat(s)
                                        })
                                    });
                                case M.I.timestamp:
                                    return (0, l.jsx)(Y.Z, {
                                        value: s
                                    });
                                case M.I.type:
                                    return s;
                                case M.I.fill:
                                    return (0, l.jsx)("span", {
                                        children: (null == s ? void 0 : s.tokenAmount) || "-"
                                    });
                                default:
                                    return s
                            }
                        })()
                    })
                })
            }

            function OrderHistory(e) {
                var t;
                let {
                    order: s
                } = e;
                return (0, l.jsxs)("div", {
                    className: "space-y-3",
                    children: [(0, l.jsx)("h2", {
                        className: "text-lg font-semibold text-gray-100",
                        children: "History"
                    }), (0, l.jsx)("div", {
                        className: "flex h-full flex-col overflow-hidden rounded-lg",
                        children: (0, l.jsx)("div", {
                            className: "sea-scroll max-h-80 overflow-auto rounded-lg bg-sea-300/5",
                            children: (0, l.jsxs)("table", {
                                className: "w-full text-left text-xs",
                                children: [(0, l.jsx)("thead", {
                                    className: "sticky top-0 z-50 rounded-t-lg bg-sea-950/30",
                                    children: (0, l.jsx)("tr", {
                                        children: Object.entries(J).map(e => {
                                            let [t, s] = e;
                                            return (0, l.jsx)("th", {
                                                className: "px-3 py-2 text-gray-100",
                                                children: s
                                            }, "header-".concat(t))
                                        })
                                    })
                                }), (0, l.jsx)("tbody", {
                                    children: null === (t = s.history) || void 0 === t ? void 0 : t.map(e => (0, l.jsx)("tr", {
                                        className: "even:bg-sea-300/10",
                                        children: Object.keys(J).map(t => (0, l.jsx)(HistoryCell, {
                                            field: t,
                                            value: e[t]
                                        }, "".concat(e.id, "-").concat(t)))
                                    }, e.id))
                                })]
                            })
                        })
                    })]
                })
            }

            function OrderDetails(e) {
                var t;
                let {
                    account: s,
                    order: a,
                    token: n
                } = e, r = (0, f.Z)(a);
                return (null == a ? void 0 : a.id) && !r ? (0, l.jsxs)(l.Fragment, {
                    children: [r && (0, l.jsx)("div", {
                        children: a.whitelistedAddress === (null === (t = s.address) || void 0 === t ? void 0 : t.toLowerCase()) && (0, l.jsx)("div", {
                            className: "rounded-full bg-green-400 bg-opacity-70 px-6 py-2 text-white",
                            children: "You are whitelisted for this order! \uD83C\uDF89"
                        })
                    }), (0, l.jsx)(OrderHeader, {
                        order: a,
                        token: n
                    }), (0, l.jsx)(OrderHistory, {
                        order: a
                    })]
                }) : (0, l.jsxs)("div", {
                    className: "flex min-h-no-nav-screen flex-col justify-start text-white",
                    children: [(0, l.jsx)("h1", {
                        className: "text-center text-2xl font-bold",
                        children: "Order restricted or not found"
                    }), (0, l.jsx)("p", {
                        children: "If this order was just submitted, wait a few seconds..."
                    }), (0, l.jsxs)(d(), {
                        className: "mt-8 flex justify-center gap-2 font-comforta",
                        href: "/browse",
                        children: [(0, l.jsx)(p.Z, {
                            className: "h-6 w-6"
                        }), "Go back"]
                    })]
                })
            }
            var Q = s(96602),
                ee = s(88597),
                et = s(72940),
                es = s(24186);

            function TokenHeader(e) {
                let {
                    order: t,
                    token: s,
                    prices: a,
                    pricesLoading: n,
                    setShowPreview: i
                } = e, o = !!(0, x.useSearchParams)().get("tgWebAppStartParam");
                return (0, l.jsxs)("div", {
                    className: "flex items-center justify-between gap-4",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, l.jsx)(ee.J, {
                            alt: s.name,
                            src: s.thumb,
                            width: 50,
                            height: 50,
                            className: "h-12 w-12 rounded-lg shadow-2xl"
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, l.jsx)(g.Tooltip, {
                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                    content: (0, l.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0, l.jsxs)("div", {
                                            children: [s.name, " [", s.symbol, "] -", " ", (0, l.jsx)("span", {
                                                className: "font-mono",
                                                children: (0, es.Z)(s.address)
                                            })]
                                        }), (0, l.jsx)("span", {
                                            className: "self-end text-xs",
                                            children: "Open on Etherscan"
                                        })]
                                    }),
                                    children: (0, l.jsxs)(d(), {
                                        href: "https://etherscan.io/token/".concat(s.address),
                                        className: "group flex gap-1 text-sm text-blue-50/90 hover:text-blue-50/100 ",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: [(0, l.jsxs)("h3", {
                                            className: "font-comforta text-2xl text-white",
                                            children: ["$", s.symbol]
                                        }), (0, l.jsx)(Q.Z, {
                                            className: r()(["mt-0.5 h-3.5 w-3.5 rotate-45 text-white transition-all duration-300", "group-hover:!-translate-y-[15%] group-hover:translate-x-[15%]"])
                                        })]
                                    })
                                }), (0, l.jsx)(k.Z, {
                                    hash: s.address,
                                    copyLabel: "Copy Address",
                                    hideAddress: !0,
                                    copyTooltip: !0
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex gap-4",
                                children: [(0, l.jsx)(L.Z, {
                                    order: { ...t,
                                        token: s
                                    }
                                }), (0, l.jsx)(U.Z, {
                                    token: s
                                })]
                            })]
                        })]
                    }), !o && (0, l.jsx)(et.Z, {
                        handleClose: () => i(!1),
                        className: "ms-5 scale-90 self-start text-gray-50 opacity-80 transition-all hover:scale-100 hover:opacity-100"
                    })]
                })
            }
            var el = s(67057),
                ea = s(49186),
                en = s(25350);
            let Skeleton = e => {
                let {
                    className: t,
                    show: s = !0,
                    width: a = "w-fit",
                    height: n = "h-full",
                    children: i
                } = e;
                return s ? (0, l.jsx)("div", {
                    className: "flex animate-pulse justify-center",
                    children: (0, l.jsx)("div", {
                        className: r()({
                            "bg-sea-300/50": !(null == t ? void 0 : t.includes("bg"))
                        }, a, n, "rounded", t),
                        children: i && (0, l.jsx)("div", {
                            className: "invisible",
                            children: i
                        })
                    })
                }) : (0, l.jsx)(l.Fragment, {
                    children: i
                })
            };
            var er = s(92173);
            let DTFetcher = e => er.Z.get("/api/dt?path=".concat(e)).then(e => e.data.data),
                useTokenInfo = e => {
                    let {
                        chain: t = "ether",
                        address: s
                    } = e;
                    return (0, V.ZP)(s ? "/token/".concat(t, "/").concat(s, "/info") : null, DTFetcher)
                },
                DEXTools_useTokenPrice = e => {
                    let {
                        chain: t = "ether",
                        address: s
                    } = e;
                    return (0, V.ZP)(s ? "/token/".concat(t, "/").concat(s, "/price") : null, DTFetcher)
                },
                useTokenScore = e => {
                    let {
                        chain: t = "ether",
                        address: s
                    } = e;
                    return (0, V.ZP)(s ? "/token/".concat(t, "/").concat(s, "/score") : null, DTFetcher)
                },
                useTokenAudit = e => {
                    let {
                        chain: t = "1",
                        address: s
                    } = e;
                    return (0, V.ZP)(s ? "/api/audit-info?chain=".concat(t, "&address=").concat(s) : null, fetcher)
                };

            function TokenAudit(e) {
                let {
                    token: t
                } = e, {
                    data: s,
                    isLoading: a
                } = useTokenAudit({
                    address: t.address
                }), n = [{
                    label: "Contract Renounced",
                    tooltip: "Whether the contract's creator has no longer control over it, so no one can mint new tokens, rise taxes, blacklist wallets or other dangerous contract functions for investors and holders",
                    value: (null == s ? void 0 : s.owner_address) === N.D,
                    expected: !0
                }, {
                    label: "Verified Contract",
                    tooltip: "Whether the source code of the contract is accessible",
                    value: !!+(null == s ? void 0 : s.is_open_source),
                    expected: !0
                }, {
                    label: "Honeypot",
                    tooltip: "Whether the token is a honeypot, which means the token maybe cannot be sold because of the token contract's function, or the token contains malicious code",
                    value: !!+(null == s ? void 0 : s.is_honeypot),
                    expected: !1
                }, {
                    label: "Buy Tax",
                    tooltip: "Tax when buying the token",
                    value: "".concat((null == s ? void 0 : s.buy_tax) * 100, "%")
                }, {
                    label: "Sell Tax",
                    tooltip: "Tax when selling the token",
                    value: "".concat((null == s ? void 0 : s.sell_tax) * 100, "%")
                }, {
                    label: "Proxy Contract",
                    tooltip: "Whether this contract has a proxy contract",
                    value: !!+(null == s ? void 0 : s.is_proxy)
                }, {
                    label: "Mintable",
                    tooltip: "Whether the contract has a function to mint tokens",
                    value: !!+(null == s ? void 0 : s.is_mintable)
                }, {
                    label: "Transfer Pausable",
                    tooltip: "Whether trading can be paused by token contract",
                    value: !!+(null == s ? void 0 : s.transfer_pausable)
                }, {
                    label: "Blacklisted",
                    tooltip: "Whether the blacklist function is not included in the contract. If there is a blacklist, some addresses may not be able to trade normally",
                    value: !!+(null == s ? void 0 : s.is_blacklisted)
                }, {
                    label: "Retrieve Ownership",
                    tooltip: "Whether the contract has the function to take back ownership",
                    value: !!+(null == s ? void 0 : s.can_take_back_ownership)
                }, {
                    label: "Whitelisted",
                    tooltip: "Whether the whitelist function is not included in the contract. If there is a whitelist, some addresses may not be able to trade normally",
                    value: !!+(null == s ? void 0 : s.is_whitelisted)
                }, {
                    label: "Antiwhale",
                    tooltip: "Whether the contract has the function to limit the maximum amount of transactions or the maximum token position for a single address",
                    value: !!+(null == s ? void 0 : s.is_anti_whale)
                }, {
                    label: "Antiwhale Modifiable",
                    tooltip: "Whether the contract has the function to modify the maximum amount of transactions or the maximum token position",
                    value: !!+(null == s ? void 0 : s.anti_whale_modifiable)
                }, {
                    label: "Trading Cooldown",
                    tooltip: "Whether the contract has trading cooldown mechanism which can limit the minimum time between two transactions",
                    value: !!+(null == s ? void 0 : s.trading_cooldown)
                }];
                return (0, l.jsxs)("div", {
                    className: "!mt-8 space-y-4 rounded-lg text-sea-100",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, l.jsx)("span", {
                            className: "mb-1 text-xl font-semibold",
                            children: "Alerts"
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, l.jsx)(o(), {
                                src: "/goplus-logo.png",
                                className: "h-8 w-auto",
                                alt: "GoPlus Logo",
                                width: 44,
                                height: 36
                            }), (0, l.jsx)("span", {
                                className: "mt-0.5 font-medium",
                                children: "GoPlus"
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "space-y-2",
                        children: n.map(e => (0, l.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, l.jsx)(g.Tooltip, {
                                className: "max-w-xs bg-black bg-opacity-40 px-3 py-2 backdrop-blur",
                                content: (0, l.jsx)("span", {
                                    className: "text-xs leading-none",
                                    children: e.tooltip
                                }),
                                children: (0, l.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0, l.jsx)(el.Z, {
                                        className: "h-4 w-4"
                                    }), (0, l.jsx)("span", {
                                        className: "text-sm font-medium",
                                        children: e.label
                                    })]
                                })
                            }), (0, l.jsx)(Skeleton, {
                                show: a,
                                width: "w-16",
                                children: (0, l.jsx)("span", {
                                    className: r()("boolean" == typeof(null == e ? void 0 : e.value) ? (null == e ? void 0 : e.value) === !!(null == e ? void 0 : e.expected) ? "text-green-400" : "text-yellow-700" : "text-sea-100", "flex items-center gap-1"),
                                    children: "boolean" == typeof(null == e ? void 0 : e.value) ? (null == e ? void 0 : e.value) ? (0, l.jsxs)(l.Fragment, {
                                        children: ["Yes", (null == e ? void 0 : e.value) === !!(null == e ? void 0 : e.expected) ? (0, l.jsx)(ea.Z, {
                                            className: "h-4 w-4"
                                        }) : (0, l.jsx)(en.Z, {
                                            className: "h-4 w-4"
                                        })]
                                    }) : (0, l.jsxs)(l.Fragment, {
                                        children: ["No", (null == e ? void 0 : e.value) === !!(null == e ? void 0 : e.expected) ? (0, l.jsx)(ea.Z, {
                                            className: "h-4 w-4"
                                        }) : (0, l.jsx)(en.Z, {
                                            className: "h-4 w-4"
                                        })]
                                    }) : null == e ? void 0 : e.value
                                })
                            })]
                        }, e.label))
                    })]
                })
            }
            var ei = s(13080);

            function TokenInfo(e) {
                let {
                    token: t
                } = e, {
                    data: s,
                    isLoading: a
                } = useTokenInfo({
                    address: t.address
                });
                return (0, l.jsx)("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: [{
                        label: "Total Supply",
                        value: "totalSupply"
                    }, {
                        label: "Total Market Cap",
                        value: "fdv",
                        isMoney: !0
                    }, {
                        label: "Holders",
                        value: "holders"
                    }, {
                        label: "Circulating Supply",
                        value: "circulatingSupply"
                    }, {
                        label: "Market Cap",
                        value: "mcap",
                        isMoney: !0
                    }, {
                        label: "Transactions",
                        value: "transactions"
                    }].map(e => {
                        var t;
                        let n = (0, ei.ZP)(null !== (t = null == s ? void 0 : s[e.value]) && void 0 !== t ? t : 0, {
                            precision: 2
                        });
                        return (0, l.jsxs)("div", {
                            className: "flex w-full flex-col gap-1 rounded-lg border border-sea-300/30 px-3 py-2 text-center",
                            children: [(0, l.jsx)("span", {
                                className: "text-xs text-sea-200",
                                children: e.label
                            }), (0, l.jsx)(Skeleton, {
                                show: a,
                                width: "w-full",
                                children: (0, l.jsx)("span", {
                                    className: "font-medium text-white",
                                    children: "0" === n ? "–" : e.isMoney ? "".concat(n, " USD") : n
                                })
                            })]
                        }, e.label)
                    })
                })
            }
            var eo = s(63160);

            function TokenPrice(e) {
                let {
                    token: t,
                    order: s
                } = e, a = (0, Z.Z)(t), n = !a, i = {
                    "Order Price": s[M.I.formattedPricePerToken],
                    "Market Price": a
                }, {
                    ethToUsd: c
                } = (0, h.useContext)(A.F);
                return (0, l.jsx)("div", {
                    className: "grid grid-cols-2 gap-4 rounded-lg border border-sea-300/30 p-3",
                    children: Object.entries(i).map((e, a) => {
                        let [d, x] = e;
                        return (0, l.jsxs)("div", {
                            className: "flex flex-col items-center gap-1 text-sea-100",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, l.jsx)("span", {
                                    className: "whitespace-nowrap text-sm text-sea-200",
                                    children: d
                                }), (0, l.jsx)("span", {
                                    className: "scale-85",
                                    children: "Order Price" === d && (0, l.jsx)(L.Z, {
                                        order: { ...s,
                                            token: t
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(Skeleton, {
                                show: n,
                                children: (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-1",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex justify-center gap-1",
                                        children: [(0, l.jsx)("span", {
                                            className: r()("font-medium", "Order Price" === d && (x > i["Market Price"] ? "text-red-200" : "text-green-200")),
                                            children: x && Number(x).toFixed(6)
                                        }), (0, l.jsx)(o(), {
                                            width: 25,
                                            height: 25,
                                            src: eo.Z,
                                            alt: "Ether",
                                            className: "w-4 object-contain"
                                        })]
                                    }), (0, l.jsxs)("span", {
                                        className: "text-center text-xs text-sea-200",
                                        children: ["$", c(x)]
                                    })]
                                })
                            })]
                        }, "price=".concat(a))
                    })
                })
            }

            function DEXToolsLogo(e) {
                let { ...t
                } = e;
                return (0, l.jsx)("svg", { ...t,
                    fill: "none",
                    height: "2500",
                    viewBox: "0 -.058 754.779 867.058",
                    width: "2174",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        clipRule: "evenodd",
                        d: "m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z",
                        fill: "#05a3c9",
                        fillRule: "evenodd"
                    })
                })
            }

            function TokenScore(e) {
                let t, {
                        token: s
                    } = e,
                    {
                        data: a,
                        isLoading: n
                    } = useTokenScore({
                        address: s.address
                    });
                if (a && !n) {
                    let {
                        dextScore: e,
                        votes: {
                            upvotes: s,
                            downvotes: l
                        }
                    } = a;
                    t = {
                        dextScore: e.total,
                        community: {
                            up: {
                                value: s,
                                percentage: Math.round(100 * s / (s + l))
                            },
                            down: {
                                value: l,
                                percentage: Math.round(100 * l / (s + l))
                            }
                        }
                    }
                }
                return (0, l.jsxs)("div", {
                    className: "space-y-2",
                    children: [(0, l.jsxs)("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: [(0, l.jsx)("h4", {
                            className: "text-xl font-medium text-sea-100",
                            children: "Community Votes"
                        }), (0, l.jsxs)("div", {
                            className: "flex items-center gap-1 rounded-lg border border-sea-300/30 px-3 py-2 text-sm text-sea-100",
                            children: [(0, l.jsx)(DEXToolsLogo, {
                                className: "h-4 w-4"
                            }), "DEXTools Score:", " ", (0, l.jsx)(Skeleton, {
                                show: n,
                                width: "w-6",
                                children: (0, l.jsx)("span", {
                                    className: "font-medium",
                                    children: null == t ? void 0 : t.dextScore
                                })
                            })]
                        })]
                    }), (0, l.jsx)(Skeleton, {
                        show: n,
                        height: "h-10",
                        width: "w-full",
                        children: t && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: "relative h-2 rounded-full bg-red-400",
                                children: (0, l.jsx)("div", {
                                    className: r()(100 === t.community.up.percentage ? "rounded-full" : "rounded-l-full", "absolute left-0 top-0 h-2 bg-green-400"),
                                    style: {
                                        width: "".concat(t.community.up.percentage, "%")
                                    }
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center justify-between text-sea-100",
                                children: [(0, l.jsx)(g.Tooltip, {
                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                    content: "".concat(t.community.up.value, " ").concat(1 === t.community.up.value ? "upvote" : "upvotes"),
                                    children: (0, l.jsxs)("span", {
                                        children: [t.community.up.percentage, "%"]
                                    })
                                }), (0, l.jsx)(g.Tooltip, {
                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                    content: "".concat(t.community.down.value, " ").concat(1 === t.community.down.value ? "downvote" : "downvotes"),
                                    children: (0, l.jsxs)("span", {
                                        children: [t.community.down.percentage, "%"]
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }

            function Index(e) {
                let {
                    token: t,
                    order: s
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(TokenInfo, {
                        token: t
                    }), (0, l.jsx)(TokenPrice, {
                        token: t,
                        order: s
                    }), (0, l.jsx)(TokenScore, {
                        token: t
                    }), (0, l.jsx)(TokenAudit, {
                        token: t
                    })]
                })
            }
            var ec = s(60231);
            let ed = [{
                id: "detail",
                label: "Order Details"
            }, {
                id: "info",
                label: "Token Information"
            }];

            function ViewSelector(e) {
                let {
                    activeView: t,
                    setActiveView: s
                } = e;
                return (0, l.jsx)("div", {
                    className: r()(["flex h-10 w-full gap-1 rounded-xl bg-sea-300/5 p-1", "border-0 ring-1 ring-inset ring-sea-300/30"]),
                    children: ed.map(e => (0, l.jsxs)("button", {
                        onClick: () => s(e.id),
                        className: r()(["relative h-8 w-full rounded-lg text-sm text-white transition", t === e.id ? "" : "hover:bg-white/10", "focus-visible:outline-2"]),
                        style: {
                            WebkitTapHighlightColor: "transparent"
                        },
                        children: [t === e.id && (0, l.jsx)(ec.E.span, {
                            layoutId: "order-detail-bubble",
                            className: "absolute inset-0 z-10 rounded-lg bg-white",
                            transition: {
                                type: "spring",
                                bounce: .2,
                                duration: .3
                            }
                        }), (0, l.jsx)("div", {
                            className: r()([t === e.id ? "text-blue-900" : "text-white", "absolute left-1/2 top-1/2 z-40 w-full -translate-x-1/2 -translate-y-1/2 transform transition duration-400"]),
                            children: e.label
                        })]
                    }, e.id))
                })
            }
            var ex = s(54684),
                eh = s(62461),
                eu = s(78258);

            function BrowseId(e) {
                var t;
                let {
                    setShowPreview: s
                } = e, n = (0, x.useSearchParams)(), [i, c] = (0, h.useState)("detail"), p = (0, x.useParams)().id || n.get("preview") || n.get("tgWebAppStartParam"), f = !!n.get("tgWebAppStartParam"), {
                    data: b,
                    loading: j
                } = (0, a.a)((0, eh.HG)({
                    id: p
                }), {
                    skip: !p
                }), v = (0, u.mA)(), g = null == b ? void 0 : null === (t = b.orders) || void 0 === t ? void 0 : t[0], y = (0, eu.Z)(null == g ? void 0 : g.tokenAddress), {
                    data: w,
                    isLoading: N
                } = DEXTools_useTokenPrice({
                    address: null == g ? void 0 : g.tokenAddress
                });
                return !y || j ? (0, l.jsx)("div", {
                    className: r()("my-auto flex w-full items-center justify-center", f ? "h-screen" : "h-[75vh]"),
                    children: (0, l.jsx)(BlocktopusLoader, {
                        message: "Loading..."
                    })
                }) : !!p && (0, l.jsxs)(l.Fragment, {
                    children: [f && (0, l.jsxs)("div", {
                        className: "flex items-center justify-between px-4 py-2",
                        children: [(0, l.jsx)(d(), {
                            href: "/",
                            className: "hover:bg-slate-600 z-50 flex items-center rounded-lg text-xl text-black transition-all hover:bg-opacity-50",
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-row items-center gap-2",
                                children: [(0, l.jsx)(o(), {
                                    src: m.Z,
                                    alt: "OTSea Logo",
                                    className: "w-6 lg:w-6"
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-center ",
                                    children: [(0, l.jsx)("span", {
                                        className: "font-comforta text-sm font-bold text-white",
                                        children: "OTSea"
                                    }), (0, l.jsx)("span", {
                                        className: "font-mono text-[0.45rem] uppercase leading-none tracking-wide text-white",
                                        children: "[Beta]"
                                    })]
                                })]
                            })
                        }), (0, l.jsx)(ex.Z, {})]
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col gap-4 overflow-hidden md:gap-6",
                        children: [(0, l.jsx)(ViewSelector, {
                            activeView: i,
                            setActiveView: c
                        }), (0, l.jsx)("div", {
                            className: r()("flex flex-col rounded-xl bg-sea-300/5", !f && "overflow-hidden"),
                            children: (0, l.jsxs)("div", {
                                className: r()("sea-scroll max-h-full space-y-4 overflow-auto p-5 lg:max-w-[unset]", !f && "rounded-xl border border-sea-300/30"),
                                children: [(0, l.jsx)(TokenHeader, {
                                    order: g,
                                    token: y,
                                    prices: w,
                                    pricesLoading: N,
                                    setShowPreview: s
                                }), "detail" === i ? (0, l.jsx)(OrderDetails, {
                                    account: v,
                                    order: g,
                                    token: y
                                }) : (0, l.jsx)(Index, {
                                    token: y,
                                    order: g
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        46384: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return TimestampCell
                }
            });
            var l = s(57437),
                a = s(12025),
                n = s(54440),
                r = s.n(n),
                i = s(2265);

            function TimestampCell(e) {
                let {
                    value: t,
                    className: s
                } = e, [n, o] = (0, i.useState)(new Date().getTime());
                (0, i.useEffect)(() => {
                    let e = setInterval(() => {
                        o(new Date().getTime())
                    }, 3e4);
                    return () => {
                        clearInterval(e)
                    }
                }, []);
                let c = 1e3 * parseInt(t),
                    d = n - c,
                    x = "";
                if (d < 36e5) {
                    let e = Math.floor(d / 6e4);
                    x = 1 === e ? "".concat(e, " minute") : "".concat(e, " minutes")
                } else if (d < 864e5) {
                    let e = Math.floor(d / 36e5);
                    x = 1 === e ? "".concat(e, " hour") : "".concat(e, " hours")
                } else {
                    let e = Math.floor(d / 864e5);
                    x = 1 === e ? "".concat(e, " day") : "".concat(e, " days")
                }
                return (0, l.jsx)(a.Tooltip, {
                    className: r()("bg-black bg-opacity-40 px-4 py-3 backdrop-blur"),
                    content: new Date(c).toLocaleString(),
                    animate: {
                        mount: {
                            scale: 1,
                            y: 0
                        },
                        unmount: {
                            scale: 0,
                            y: 5
                        }
                    },
                    children: (0, l.jsx)("span", {
                        className: s,
                        children: x
                    })
                })
            }
        },
        17622: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return HashTooltip
                }
            });
            var l = s(57437),
                a = s(36108),
                n = s(67805),
                r = s(12025);
            s(54440);
            var i = s(2390),
                o = s.n(i),
                c = s(61396),
                d = s.n(c),
                x = s(2265),
                h = s(90626);

            function HashTooltip(e) {
                let {
                    hash: t,
                    href: s,
                    hideAddress: i = !1,
                    copyTooltip: c = !1,
                    chars: u = 4,
                    copyLabel: m = "Copy"
                } = e, p = (0, h.Z)({
                    hash: t,
                    chars: u
                }), [f, b] = (0, x.useState)(!1);
                return (0, l.jsxs)("span", {
                    className: "inline-flex items-center",
                    children: [!i && (0, l.jsx)(r.Tooltip, {
                        className: "bg-black bg-opacity-40 px-3 py-2 backdrop-blur",
                        content: t,
                        animate: {
                            mount: {
                                scale: 1,
                                y: 0
                            },
                            unmount: {
                                scale: 0,
                                y: 5
                            }
                        },
                        children: s ? (0, l.jsx)(d(), {
                            href: s,
                            ...s.startsWith("http") ? {
                                target: "_blank",
                                rel: "noopener noreferrer"
                            } : {},
                            children: p
                        }) : p
                    }), c && (0, l.jsx)(r.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: f ? "Copied!" : m,
                        children: (0, l.jsx)("button", {
                            onClick: () => {
                                o()(t), b(!0), setTimeout(() => {
                                    b(!1)
                                }, 3e3)
                            },
                            type: "button",
                            children: f ? (0, l.jsx)(n.Z, {
                                className: "ml-2 h-4 w-4 text-green-200"
                            }) : (0, l.jsx)(a.Z, {
                                className: "ml-2 h-4 w-4 text-white"
                            })
                        })
                    })]
                })
            }
        },
        9290: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return TokenWarning
                }
            });
            var l = s(57437),
                a = s(79425),
                n = s(12025),
                r = s(2265),
                i = s(10545),
                o = s(51360);

            function TokenWarning(e) {
                let {
                    token: t,
                    iconOnly: s = !1,
                    verbose: c = !1
                } = e, {
                    uniswapLabsVerifiedTokens: d
                } = (0, r.useContext)(o.M), x = d.some(e => e.address.toLowerCase() === t.address.toLowerCase());
                return !x && (0, l.jsx)(n.Tooltip, {
                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                    content: (0, l.jsxs)("div", {
                        className: "flex flex-col text-center",
                        children: [(0, l.jsxs)("span", {
                            children: ["$", t.symbol, " isn't traded on leading centralized exchanges,"]
                        }), (0, l.jsx)("span", {
                            children: "or frequently swapped on main decentralized exchanges."
                        }), (0, l.jsx)("span", {
                            children: "Always double check the token contract address"
                        }), (0, l.jsx)("span", {
                            children: "and conduct your own research before trading."
                        })]
                    }),
                    children: s ? (0, l.jsx)(a.Z, {
                        className: "h-4 w-4 text-yellow-700"
                    }) : c ? (0, l.jsxs)(i.bZ, {
                        variant: "warning",
                        children: [(0, l.jsx)(i.bZ.Icon, {
                            children: (0, l.jsx)(a.Z, {
                                className: "h-5 w-5"
                            })
                        }), (0, l.jsxs)(i.bZ.Description, {
                            children: [(0, l.jsxs)("span", {
                                className: "font-medium",
                                children: ["$", t.symbol]
                            }), " ", "is not traded on leading centralized exchanges, or frequently swapped on main decentralized exchanges."]
                        })]
                    }) : (0, l.jsxs)("span", {
                        className: "flex select-none items-center gap-1 rounded-lg bg-yellow-50 py-0.5 pl-1.5 pr-2 text-xs font-bold leading-none text-yellow-900/90",
                        children: [(0, l.jsx)(a.Z, {
                            className: "mt-px h-4 w-4"
                        }), "Warning"]
                    })
                })
            }
        },
        10545: function(e, t, s) {
            s.d(t, {
                bZ: function() {
                    return Alert
                }
            });
            var l = s(57437),
                a = s(39213),
                n = s(54440),
                r = s.n(n);
            s(2265);
            var i = s(43436);
            let o = (0, a.j)("flex w-full gap-1 rounded-lg", {
                    variants: {
                        variant: {
                            primary: "bg-sea-50 fill-blue-800 text-blue-800",
                            secondary: "bg-gray-50 fill-gray-800 text-gray-800",
                            success: "bg-green-50 fill-green-800 text-green-800",
                            warning: "bg-yellow-50 fill-yellow-800 text-yellow-900",
                            danger: "bg-red-50 fill-red-800 text-red-800"
                        },
                        size: {
                            base: "p-4"
                        }
                    },
                    defaultVariants: {
                        variant: "primary",
                        size: "base"
                    }
                }),
                Alert = e => {
                    let {
                        className: t,
                        variant: s,
                        size: a,
                        children: n
                    } = e, c = (0, i.x)(n, "Title").length > 0, d = (0, i.x)(n, "Icon").length > 0;
                    return (0, l.jsxs)("div", {
                        role: "alert",
                        className: r()(o({
                            variant: s,
                            size: a
                        }), !c && d ? "items-center gap-2" : "flex-col", t),
                        children: [c ? d ? (0, l.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, l.jsx)("div", {
                                className: "flex-shrink-0",
                                children: (0, i.x)(n, "Icon")
                            }), (0, i.x)(n, "Title")]
                        }) : (0, i.x)(n, "Title") : d && (0, l.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, i.x)(n, "Icon")
                        }), (0, i.x)(n, "Description")]
                    })
                },
                Title = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, l.jsx)("h3", {
                        className: r()("font-medium", t),
                        children: s
                    })
                };
            Title.displayName = "Title", Alert.Title = Title;
            let Description = e => {
                let {
                    className: t,
                    children: s
                } = e;
                return (0, l.jsx)("div", {
                    className: r()("text-sm", t),
                    children: s
                })
            };
            Description.displayName = "Description", Alert.Description = Description;
            let Icon = e => {
                let {
                    children: t
                } = e;
                return t
            };
            Icon.displayName = "Icon", Alert.Icon = Icon
        },
        49095: function(e, t, s) {
            s.d(t, {
                u: function() {
                    return Modal
                }
            });
            var l = s(57437),
                a = s(9805),
                n = s(32240),
                r = s(54440),
                i = s.n(r),
                o = s(2265),
                c = s(72940),
                d = s(43436);
            let Modal = e => {
                    let {
                        open: t = !1,
                        setOpen: s,
                        onClose: r,
                        children: i,
                        hideClose: x = !1
                    } = e;
                    return (0, l.jsx)(a.u.Root, {
                        show: t,
                        as: o.Fragment,
                        children: (0, l.jsxs)(n.V, {
                            as: "div",
                            className: "relative z-50",
                            onClose: () => {
                                !x && (s(!1), r && r())
                            },
                            children: [(0, l.jsx)(a.u.Child, {
                                as: o.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, l.jsx)("div", {
                                    className: "fixed inset-0 bg-sea-950/40 backdrop-blur-md transition-opacity"
                                })
                            }), (0, l.jsx)("div", {
                                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                                children: (0, l.jsx)("div", {
                                    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                                    children: (0, l.jsx)(a.u.Child, {
                                        as: o.Fragment,
                                        enter: "ease-out duration-300",
                                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                        leave: "ease-in duration-200",
                                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                        children: (0, l.jsxs)(n.V.Panel, {
                                            className: "relative transform overflow-hidden rounded-2xl border border-sea-300/20 bg-sea-950/30 px-4 pb-4 pt-5 text-left shadow-xl backdrop-blur transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-8",
                                            children: [!x && (0, l.jsx)("div", {
                                                className: "absolute right-0 top-0 pr-4 pt-4",
                                                children: (0, l.jsx)(c.Z, {
                                                    handleClose: () => s(!1)
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [(0, d.x)(i, "Title"), (0, d.x)(i, "Content")]
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                Title = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, l.jsx)("h3", {
                        className: i()("text-2xl font-bold text-white md:text-3xl", t),
                        children: s
                    })
                };
            Title.displayName = "Title", Modal.Title = Title;
            let Content = e => {
                let {
                    children: t
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: t
                })
            };
            Content.displayName = "Content", Modal.Content = Content
        },
        43436: function(e, t, s) {
            s.d(t, {
                x: function() {
                    return getChild
                }
            });
            var l = s(2265);
            let getChild = (e, t) => l.Children.map(e, e => {
                var s;
                if ((null === (s = e.type) || void 0 === s ? void 0 : s.displayName) === t) return e
            })
        },
        24186: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return formatHash
                }
            });

            function formatHash(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                return e.slice(0, t) + "..." + e.slice(-t)
            }
        },
        63160: function(e, t) {
            t.Z = {
                src: "/_next/static/media/eth-logo-color.4997e78f.png",
                height: 2e3,
                width: 2e3,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXF6ftOimeyelOmXpdF2icu/qvCepM6kltNVQLXFq72x4u/bu8Gl6/J3lea41vaVo+Gkl+jYwsmgnc99o/ays/DjvLyumuvqy8u7t9q39vuXsGeZAAAAGHRSTlMAWTe+XhPzPmwMqOHxkdv+/qfhvfT+ktuiNgFlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nCWLWw6AIBDEigILCir45v4HNS7z0ybNAFiLztXZqVxPyz/l3c5VALMc/jZAnPaxRG3JD/0WAvABOdgBj1AmBZYAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        }
    }
]);