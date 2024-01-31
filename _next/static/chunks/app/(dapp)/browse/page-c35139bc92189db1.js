(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6483], {
        89340: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 51169))
        },
        51169: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return BrowsePage
                }
            });
            var r = t(57437),
                l = t(50392),
                a = t(99175),
                n = t(43391),
                i = t(32695),
                o = t(54440),
                c = t.n(o),
                d = t(24033),
                x = t(2265),
                u = t(31095),
                m = t(52223),
                h = t.n(m),
                p = t(12025),
                b = t(60231),
                f = t(93168),
                g = t(9805),
                j = t(21712),
                v = t(95705),
                w = t(14027),
                N = t(16691),
                k = t.n(N),
                y = t(9875),
                T = t.n(y),
                Z = t(94573),
                O = t(54034),
                C = t(28316),
                I = t(24186);
            let A = new C.x;

            function Cbox(e) {
                let {
                    token: s,
                    setToken: t
                } = e, [l, a] = (0, x.useState)(T().parse(location.search.slice(1)).tokenAddress || ""), [n, i] = (0, x.useState)([]), [o, d] = (0, x.useState)(!1), {
                    searchTokenHandler: u
                } = (0, O.Z)({
                    currentToken: s,
                    searchQuery: l,
                    setLoading: d,
                    setSearchResults: e => {
                        i(e)
                    }
                }), [m, h] = (0, Z.Z)(u, 500);
                (0, x.useEffect)(() => {
                    l.length > 0 ? m() : (h(), i([]), t(null))
                }, [l]), (0, x.useEffect)(() => {
                    void 0 === s && n.length > 0 && t(n[0])
                }, [s, n, t]);
                let handleSetToken = e => async () => {
                    try {
                        if (null == e ? void 0 : e.id) {
                            var s, r, l;
                            let {
                                data: a
                            } = await A.coinById(e.id);
                            if (!a.detail_platforms.ethereum) return alert("This token doesn't appear to be on Ethereum Mainnet.");
                            t({
                                symbol: a.symbol.toUpperCase(),
                                address: a.platforms.ethereum,
                                name: a.name,
                                thumb: (null === (s = a.image) || void 0 === s ? void 0 : s.large) || (null === (r = a.image) || void 0 === r ? void 0 : r.small) || (null === (l = a.image) || void 0 === l ? void 0 : l.thumb),
                                decimals: a.detail_platforms.ethereum.decimal_place
                            })
                        } else t(e)
                    } catch (e) {
                        console.log(e)
                    }
                };
                return (0, r.jsx)(f.h, {
                    as: "div",
                    className: "relative w-full md:max-w-sm",
                    value: s,
                    onChange: e => {
                        handleSetToken(e)()
                    },
                    nullable: !0,
                    children: e => {
                        let {
                            open: l
                        } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(f.h.Input, {
                                className: c()(["form-input h-10 w-full rounded-xl bg-sea-300/5 pl-3.5 pr-10 font-sans font-light text-white", "border-0 ring-1 ring-inset ring-sea-300/30", "placeholder:text-white/50", "focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white/50"]),
                                placeholder: "Search tokens by name, ticker, or address...",
                                onChange: e => a(e.target.value),
                                displayValue: e => null == e ? void 0 : e.name
                            }), (0, r.jsx)(f.h.Button, {
                                className: "absolute inset-y-0 right-0 flex items-center rounded-r-xl px-3 focus:outline-none",
                                onClick: () => {
                                    s && (t(null), i([]))
                                },
                                children: s ? (0, r.jsx)(w.Z, {
                                    className: "h-5 w-5 text-white"
                                }) : (0, r.jsx)(j.Z, {
                                    className: "h-5 w-5 text-white/50",
                                    "aria-hidden": "true"
                                })
                            }), (0, r.jsx)(g.u, {
                                as: x.Fragment,
                                show: l && n.length > 0,
                                enter: "transition duration-100 ease-out",
                                enterFrom: "transform scale-95 opacity-0",
                                enterTo: "transform scale-100 opacity-100",
                                leave: "transition duration-75 ease-out",
                                leaveFrom: "transform scale-100 opacity-100",
                                leaveTo: "transform scale-95 opacity-0",
                                children: (0, r.jsx)(f.h.Options, {
                                    static: !0,
                                    className: c()(["absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-[#94BDFF33] p-1.5 shadow-lg backdrop-blur", "border-0 ring-1 ring-inset ring-[#94BDFF33]", "focus:outline-none"]),
                                    children: o ? (0, r.jsx)("div", {
                                        className: "cursor-default select-none px-3 py-2",
                                        children: (0, r.jsx)("p", {
                                            className: "w-fit animate-spin text-white",
                                            children: "Loading"
                                        })
                                    }) : n.length > 0 && n.map((e, t) => (0, r.jsxs)(f.h.Option, {
                                        value: e,
                                        className: c()(["flex cursor-default select-none items-center justify-between rounded-lg p-2", "hover:bg-sea-300/20"]),
                                        children: [(0, r.jsxs)("div", {
                                            className: "inline-flex items-center gap-2",
                                            children: [(0, r.jsx)(k(), {
                                                className: "h-9 w-9 rounded-md",
                                                src: e.thumb.startsWith("http") ? e.thumb : "https://ui-avatars.com/api/?name=" + e.name,
                                                width: 50,
                                                height: 50,
                                                alt: "".concat(e.name, " logo")
                                            }), (0, r.jsxs)("div", {
                                                className: "text-white",
                                                children: [(0, r.jsx)("p", {
                                                    children: e.symbol
                                                }), (null == e ? void 0 : e.address) ? (0, r.jsx)("p", {
                                                    className: "text-xs",
                                                    children: (0, I.Z)(e.address)
                                                }) : null]
                                            })]
                                        }), (null == s ? void 0 : s.symbol) === e.symbol ? (0, r.jsx)("div", {
                                            className: "pr-2",
                                            children: (0, r.jsx)(v.Z, {
                                                className: "h-4 w-4 text-white"
                                            })
                                        }) : null]
                                    }, "".concat(e.name, "-").concat(t)))
                                })
                            })]
                        })
                    }
                })
            }
            var F = t(6180),
                P = t(66432),
                S = t(47834);
            let E = [{
                id: "cards",
                label: "Grid View",
                icon: F.Z
            }, {
                id: "table",
                label: "Table View",
                icon: P.Z
            }, {
                id: "list",
                label: "List View",
                icon: S.Z
            }];

            function ViewSelector(e) {
                let {
                    activeView: s,
                    setActiveView: t
                } = e;
                return (0, r.jsx)("div", {
                    className: c()(["flex h-10 w-fit gap-1 rounded-xl bg-sea-300/5 p-1", "border-0 ring-1 ring-inset ring-sea-300/30"]),
                    children: E.map(e => (0, r.jsx)(p.Tooltip, {
                        className: "bg-black bg-opacity-40 px-2 py-1.5 text-xs backdrop-blur",
                        content: e.label,
                        children: (0, r.jsxs)("button", {
                            onClick: () => {
                                t(e.id)
                            },
                            className: c()(["relative h-8 w-8 rounded-lg text-white transition", s === e.id ? "" : "hover:bg-white/10", "focus-visible:outline-2"]),
                            style: {
                                WebkitTapHighlightColor: "transparent"
                            },
                            children: [s === e.id && (0, r.jsx)(b.E.span, {
                                layoutId: "bubble",
                                className: "absolute inset-0 z-10 rounded-lg bg-white",
                                transition: {
                                    type: "spring",
                                    bounce: .2,
                                    duration: .4
                                }
                            }), (0, r.jsx)(e.icon, {
                                className: c()([s === e.id ? "text-blue-900" : "text-white", "absolute left-1/2 top-1/2 z-40 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 transform transition duration-400"])
                            })]
                        })
                    }, e.id))
                })
            }
            var B = t(79043),
                _ = t(74157);

            function Filters(e) {
                let {
                    filter: s,
                    setFilter: t,
                    activeView: l,
                    setActiveView: a
                } = e, [n, i] = (0, x.useState)(), o = !!n;
                (0, x.useEffect)(() => {
                    o ? t(e => ({ ...e,
                        tokenAddress: null == n ? void 0 : n.address,
                        page: 1
                    })) : t(e => {
                        let {
                            tokenAddress: s,
                            ...t
                        } = e;
                        return t
                    })
                }, [null == n ? void 0 : n.address, t, o]);
                let d = !!~s[B.I.state];
                return (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-3 pr-2 sm:flex-row",
                    children: [(0, r.jsx)(Cbox, {
                        token: n,
                        setToken: i
                    }), (0, r.jsxs)("div", {
                        className: "flex w-full flex-1 items-center justify-between gap-3",
                        children: [(0, r.jsx)("div", {
                            className: c()(["flex h-10 gap-1 rounded-xl bg-sea-300/5 p-1", "border-0 ring-1 ring-inset ring-sea-300/30"]),
                            children: [{
                                id: !1,
                                label: "All"
                            }, {
                                id: !0,
                                label: "Open"
                            }].map(e => (0, r.jsx)(p.Tooltip, {
                                className: "bg-black bg-opacity-40 px-2 py-1.5 text-xs backdrop-blur",
                                content: "Show ".concat(e.label, " Orders"),
                                children: (0, r.jsxs)("button", {
                                    onClick: () => t(e => ({ ...e,
                                        state: d ? "-1" : _.K.Open
                                    })),
                                    className: c()(["relative h-8 w-14 rounded-lg text-white transition", d ? "" : "hover:bg-white/10", "focus-visible:outline-2"]),
                                    style: {
                                        WebkitTapHighlightColor: "transparent"
                                    },
                                    children: [d === e.id && (0, r.jsx)(b.E.span, {
                                        layoutId: "bubble-1",
                                        className: "absolute inset-0 z-10 rounded-lg bg-white",
                                        transition: {
                                            type: "spring",
                                            bounce: .2,
                                            duration: .3
                                        }
                                    }), (0, r.jsx)("span", {
                                        className: c()([d === e.id ? "text-blue-900" : "text-white", "absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 transform transition duration-400"]),
                                        children: e.label
                                    })]
                                })
                            }, e.label))
                        }), (0, r.jsx)(ViewSelector, {
                            activeView: l,
                            setActiveView: a
                        })]
                    })]
                })
            }
            var D = t(10795),
                H = t(45138),
                L = t(67705),
                V = t(78258),
                q = t(23950),
                z = t(48357),
                R = t(13080);

            function OfferedTokensCell(e) {
                var s;
                let {
                    order: t
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex flex-row gap-2",
                    children: [(0, r.jsx)(p.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "".concat(parseInt(t.availableTokens).toLocaleString(), " $").concat(null === (s = t.token) || void 0 === s ? void 0 : s.symbol, " remaining"),
                        children: (0, r.jsxs)("span", {
                            className: "",
                            children: [(0, R.ZP)(t.initialTokens), " $", null == t ? void 0 : t.token.symbol]
                        })
                    }), t.state == _.K.Open && (0, r.jsx)("div", {
                        children: t.partiallyFillable ? (0, r.jsx)(p.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "Crowd-Fill",
                            children: (0, r.jsx)(z.Z, {
                                className: "w-4",
                                color: "orange"
                            })
                        }) : (0, r.jsx)(p.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "AON (All-or-Nothing)",
                            children: (0, r.jsx)(q.Z, {
                                className: "w-4",
                                color: "orange"
                            })
                        })
                    })]
                })
            }
            var K = t(34729),
                $ = t(15276),
                M = t(77676);

            function ProgressCell(e) {
                let {
                    order: s
                } = e, t = (0, $.Z)(s), l = (0, M.Z)(s);
                return (0, r.jsx)("div", {
                    className: "flex w-full flex-row gap-2",
                    children: t ? (0, r.jsxs)("span", {
                        className: "flex flex-row gap-1",
                        children: ["Reserved", " ", (0, r.jsx)(p.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "This order is reserved for a whitelisted address.",
                            children: (0, r.jsx)(K.Z, {
                                className: "w-4",
                                color: "lightgray"
                            })
                        })]
                    }) : (0, r.jsxs)("div", {
                        className: "flex items-center justify-start gap-3",
                        children: [(0, r.jsx)("div", {
                            className: "relative h-1 min-w-[70px] rounded-full bg-[#98BFFF1C]/20",
                            children: (0, r.jsx)("div", {
                                className: "absolute left-0 top-0 h-1 rounded-full bg-[#E38833]",
                                style: {
                                    width: "".concat(l, "%")
                                }
                            })
                        }), l, "%"]
                    })
                })
            }
            var W = t(35529),
                U = t(72264),
                X = t(9290),
                G = t(62035);

            function TokenCell(e) {
                let {
                    order: s,
                    token: t
                } = e;
                (0, G.Z)(t);
                let l = (0, $.Z)(s);
                return (0, r.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, r.jsx)(k(), {
                        className: "h-11 w-11 flex-shrink-0 rounded-lg",
                        src: t.thumb,
                        width: 50,
                        height: 50,
                        alt: t.name
                    }), (0, r.jsx)(p.Tooltip, {
                        className: "bg-black/40 px-4 py-3 backdrop-blur",
                        content: (0, r.jsx)("div", {
                            className: "flex flex-col",
                            children: (0, r.jsxs)("span", {
                                children: [t.name, " [", t.symbol, "] - ", t.address]
                            })
                        }),
                        children: (0, r.jsxs)(U.Z, {
                            href: !l && "/browse/".concat(s.id),
                            className: "text-lg",
                            children: ["$", t.symbol, (0, r.jsx)(W.Z, {
                                order: s
                            })]
                        })
                    }), (0, r.jsx)(X.Z, {
                        token: t,
                        iconOnly: !0
                    })]
                })
            }

            function OrderListRow(e) {
                let {
                    order: s,
                    setFilter: t
                } = e, l = { ...s,
                    token: (0, V.Z)(null == s ? void 0 : s.tokenAddress)
                }, a = [(0, r.jsx)(TokenCell, {
                    order: l,
                    token: l.token
                }), (0, r.jsx)(ProgressCell, {
                    order: l
                }), (0, r.jsx)(OfferedTokensCell, {
                    order: l
                }), (0, r.jsx)(L.Z, {
                    num: l.requestedETHAmount
                })];
                return l.token && (0, r.jsx)("tr", {
                    className: "cursor-pointer even:bg-sea-300/10",
                    children: a.map((e, s) => (0, r.jsx)(H.Z, {
                        orderId: l.id,
                        setFilter: t,
                        children: e
                    }, "order-record-cell-".concat(s)))
                })
            }

            function OrderListView(e) {
                let {
                    visibleFields: s,
                    filter: t,
                    setFilter: l,
                    loading: a,
                    error: n,
                    orders: i
                } = e;
                return (0, r.jsx)("div", {
                    className: "flex h-full flex-col overflow-hidden rounded-xl",
                    children: (0, r.jsx)(p.Card, {
                        className: "w-full overflow-hidden bg-sea-300/5 backdrop-blur",
                        children: (0, r.jsx)("div", {
                            className: "sea-scroll overflow-auto",
                            children: (0, r.jsxs)("table", {
                                className: "w-full text-left",
                                children: [(0, r.jsx)("thead", {
                                    className: "hidden",
                                    children: (0, r.jsxs)("tr", {
                                        children: [(0, r.jsx)("td", {
                                            children: "Token"
                                        }), (0, r.jsx)("td", {
                                            children: "Progress"
                                        }), (0, r.jsx)("td", {
                                            children: "Offered"
                                        }), (0, r.jsx)("td", {
                                            children: "For"
                                        })]
                                    })
                                }), (0, r.jsx)("tbody", {
                                    children: (() => {
                                        switch (!0) {
                                            case a:
                                                return [...Array(t.perPage).keys()].map(e => (0, r.jsx)("tr", {
                                                    className: "cursor-pointer even:bg-sea-300/10",
                                                    children: Object.keys(s).map((e, s) => (0, r.jsx)("td", {
                                                        className: "px-3 py-3 opacity-70 first:pl-10 last:pr-10",
                                                        children: (0, r.jsx)(D.X, {
                                                            className: "h-4 w-full rounded-md bg-blue-700/50"
                                                        })
                                                    }, e))
                                                }, "row-".concat(e)));
                                            case !!n:
                                                return (0, r.jsxs)("div", {
                                                    children: ["Error: ", n.message]
                                                });
                                            case 0 === i.length:
                                                return (0, r.jsx)("tr", {
                                                    children: (0, r.jsx)("td", {
                                                        colSpan: Object.keys(s).length,
                                                        children: (0, r.jsx)("div", {
                                                            className: "mx-auto flex items-center justify-center p-4 font-mono text-sm text-blue-50",
                                                            children: "No orders meet your filter criteria. Try another search!"
                                                        })
                                                    })
                                                });
                                            default:
                                                return i.slice(0, t.perPage).map(e => (0, r.jsx)(OrderListRow, {
                                                    order: e,
                                                    setFilter: l
                                                }, e.id))
                                        }
                                    })()
                                })]
                            })
                        })
                    })
                })
            }
            var Y = t(37678),
                J = t(62461),
                Q = t(66022),
                ee = t(36234),
                es = t(60891),
                et = t(20609),
                er = t(43568),
                el = t(63160),
                ea = t(46384),
                en = t(34065),
                ei = t(40603),
                eo = t(23685);

            function CardCoinThumb(e) {
                let {
                    src: s
                } = e;
                return (0, r.jsx)("div", {
                    className: "rounded-full p-0.5",
                    children: (0, r.jsx)("div", {
                        className: "overflow-hidden rounded-full shadow-inner-xl",
                        children: (0, r.jsx)(k(), {
                            alt: "ERC20 Token Thumbnail",
                            src: s,
                            width: 15,
                            height: 15
                        })
                    })
                })
            }

            function _templateObject() {
                let e = (0, es._)(["\n                        radial-gradient( \n                          150px circle at ", "px ", "px,\n                          rgba(14, 165, 233, 0.5),\n                          transparent 80%\n                        )\n                    "]);
                return _templateObject = function() {
                    return e
                }, e
            }

            function OrderCardSkeleton() {
                return (0, r.jsx)("div", {
                    className: "h-[200px] w-full",
                    children: (0, r.jsxs)("div", {
                        className: "relative space-y-5 overflow-hidden rounded-2xl bg-white/5 p-3 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[shimmer_2s_infinite] before:border-t before:border-white/10 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
                        children: [(0, r.jsx)("div", {
                            className: "h-24 rounded-lg bg-white/5"
                        }), (0, r.jsxs)("div", {
                            className: "space-y-3",
                            children: [(0, r.jsx)("div", {
                                className: "h-3 w-3/5 rounded-lg bg-white/5"
                            }), (0, r.jsx)("div", {
                                className: "h-3 w-4/5 rounded-lg bg-white/10"
                            }), (0, r.jsx)("div", {
                                className: "h-3 w-2/5 rounded-lg bg-white/5"
                            })]
                        })]
                    })
                })
            }

            function AtroposParent(e) {
                let {
                    children: s
                } = e, t = (0, et.c)(0), l = (0, et.c)(0);
                return u.G6 ? (0, r.jsxs)("div", {
                    className: "group relative rounded-xl border border-white/10 bg-sea-300/5",
                    onMouseMove: function(e) {
                        let {
                            currentTarget: s,
                            clientX: r,
                            clientY: a
                        } = e, {
                            left: n,
                            top: i
                        } = s.getBoundingClientRect();
                        t.set(r - n), l.set(a - i)
                    },
                    children: [(0, r.jsx)(b.E.div, {
                        className: "pointer-events-none absolute -inset-px -z-10 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100",
                        style: {
                            background: (0, er.Y)(_templateObject(), t, l)
                        }
                    }), (0, r.jsx)("div", {
                        className: "rounded-xl backdrop-blur-md",
                        children: s
                    })]
                }) : (0, r.jsx)(ee.Z, {
                    innerClassName: "rounded-xl bg-sea-300/5 backdrop-blur-md",
                    shadow: !1,
                    rotateXMax: 5,
                    rotateYMax: 5,
                    rotateTouch: !1,
                    style: {
                        "--atropos-background-image": "radial-gradient(\n                    circle at 50%,\n                    #5d97fd44,\n                    transparent 50%\n                )"
                    },
                    children: s
                })
            }

            function OrderCard(e) {
                var s;
                let {
                    order: t,
                    available: l,
                    pricePerToken: a,
                    priceDelta: n,
                    state: i,
                    created: o,
                    setFilter: d
                } = e, {
                    ethUsd: u
                } = (0, x.useContext)(en.F), m = (0, V.Z)(t.tokenAddress), h = (0, M.Z)(t);
                (0, eo.Z)(t), t.state, _.K.Open;
                let b = (0, $.Z)(t),
                    {
                        AlertDialog: f,
                        showAlertDialog: g
                    } = (0, ei.Z)();
                return m ? (0, r.jsx)(AtroposParent, {
                    children: (0, r.jsxs)("div", {
                        className: c()("h-full rounded-xl border border-sea-300/30 bg-opacity-30 p-4 text-white transition-all sm:p-5", "hover:border-blue-100/50 hover:bg-opacity-30 hover:text-blue-50 hover:shadow-lg"),
                        onClick: () => {
                            b ? g() : d(e => ({ ...e,
                                preview: t.id
                            }))
                        },
                        children: [(0, r.jsx)(f, {
                            title: "Order Restricted",
                            message: "This order is reserved for a whitelisted address. Please connect a whitelisted wallet to view this order."
                        }), (0, r.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [(0, r.jsx)(k(), {
                                src: m.thumb,
                                className: "aspect-square w-10 rounded-lg object-cover shadow-2xl sm:w-12",
                                width: 50,
                                height: 50,
                                alt: m.name
                            }), (0, r.jsx)("div", {
                                children: b ? (0, r.jsx)("div", {
                                    className: "mx-auto rounded-full p-1 shadow-inner-xl",
                                    children: (0, r.jsx)(p.Tooltip, {
                                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                        content: "This order is reserved for a whitelisted address.",
                                        children: (0, r.jsx)(K.Z, {
                                            className: "m-2 flex w-6 place-self-center drop-shadow-md",
                                            color: "lightgrey"
                                        })
                                    })
                                }) : (0, r.jsx)("div", {
                                    className: "flex items-center gap-1",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex flex-col items-end gap-1 font-comforta text-xl font-black",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex [&:hover_svg]:-translate-y-0.5 [&:hover_svg]:translate-x-0.5",
                                            children: (0, r.jsx)(p.Tooltip, {
                                                className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                                content: (0, r.jsx)("div", {
                                                    className: "flex flex-col",
                                                    children: (0, r.jsxs)("div", {
                                                        children: [m.name, " [", m.symbol, "] -", " ", (0, r.jsx)("span", {
                                                            className: "font-mono",
                                                            children: (0, I.Z)(m.address)
                                                        })]
                                                    })
                                                }),
                                                children: (0, r.jsx)("div", {
                                                    className: "flex cursor-default items-center gap-1",
                                                    children: (0, r.jsxs)("h6", {
                                                        className: "text-sm lg:text-lg",
                                                        children: ["$", (s = m.symbol).length > 7 ? s.slice(0, 6) + "..." : s]
                                                    })
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex h-6 items-center gap-2",
                                            children: [(0, r.jsx)(X.Z, {
                                                token: m,
                                                iconOnly: !0
                                            }), t.state == _.K.Open ? (0, r.jsx)(W.Z, {
                                                order: { ...t,
                                                    token: m
                                                }
                                            }) : (0, r.jsx)("span", {
                                                className: "rounded-full border border-sea-300/40 px-1.5 py-0.5 text-xs text-gray-100/80",
                                                children: "Closed"
                                            })]
                                        })]
                                    })
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-3 py-4 sm:py-5",
                            children: [(0, r.jsx)("div", {
                                className: "relative h-1 w-full rounded-full bg-[#98BFFF1C]/20",
                                children: (0, r.jsx)("div", {
                                    className: "absolute left-0 top-0 h-1 rounded-full ".concat(t.state == _.K.Open ? "bg-[#E38833]" : "bg-white/50"),
                                    style: {
                                        width: "".concat(h, "%")
                                    }
                                })
                            }), (0, r.jsxs)("span", {
                                className: "text-sm ".concat(t.state == _.K.Open ? "text-[#FFC14A]" : "text-white/50"),
                                children: [h, "%"]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex justify-between gap-5 pb-1",
                            children: [(0, r.jsxs)("div", {
                                className: "flex-shrink-0",
                                children: [(0, r.jsx)("span", {
                                    className: "text-center text-xs text-gray-300",
                                    children: "Offered"
                                }), (0, r.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0, r.jsx)(p.Tooltip, {
                                        content: "".concat(Number(t.initialTokens).toLocaleString(), " $").concat(m.symbol),
                                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                        ...(0, R.ZP)(t.initialTokens) === t.initialTokens && {
                                            open: !1
                                        },
                                        children: (0, r.jsx)("span", {
                                            className: "text-xs",
                                            children: (0, R.ZP)(t.initialTokens)
                                        })
                                    }), (0, r.jsx)(CardCoinThumb, {
                                        src: m.thumb
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex-shrink-0 text-right",
                                children: [(0, r.jsx)("span", {
                                    className: "text-center text-xs text-gray-300",
                                    children: "For"
                                }), (0, r.jsx)(p.Tooltip, {
                                    content: (0, r.jsxs)("div", {
                                        className: "flex flex-col items-end justify-end",
                                        children: [(0, r.jsxs)("span", {
                                            children: [Number(t.requestedETHAmount).toLocaleString(), " ", "ETH"]
                                        }), (0, r.jsxs)("span", {
                                            children: [Number(t.requestedETHAmount * u).toLocaleString(), " ", "USD"]
                                        })]
                                    }),
                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex items-center gap-1 text-xs",
                                        children: [parseFloat(t.requestedETHAmount).toFixed(4), " ", (0, r.jsx)(k(), {
                                            src: el.Z,
                                            alt: "ether symbol",
                                            className: "h-3 w-3"
                                        })]
                                    })
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex justify-between gap-5",
                            children: [(0, r.jsxs)("span", {
                                className: "text-xs text-blue-300/70",
                                children: [(0, r.jsx)(ea.Z, {
                                    value: t.createdAt
                                }), " ago"]
                            }), (0, r.jsxs)("span", {
                                className: "text-xs text-blue-300/70",
                                children: ["$", (0, R.ZP)(t.requestedETHAmount * u)]
                            })]
                        })]
                    })
                }) : (0, r.jsx)(OrderCardSkeleton, {})
            }

            function OrdersCardView(e) {
                let {
                    orders: s,
                    loading: t,
                    error: l,
                    filter: a,
                    setFilter: n,
                    visibleFields: i,
                    showPreview: o
                } = e;
                return (0, r.jsx)("div", {
                    className: c()("mx-auto grid w-full grid-cols-2 gap-2.5 transition-all duration-300 ease-in-out @[0px]:grid-cols-2 @xl:grid-cols-3 @4xl:grid-cols-4 @6xl:grid-cols-5 md:gap-4 lg:px-0"),
                    children: 0 === s.length && t ? [...Array(15)].map((e, s) => (0, r.jsx)(OrderCardSkeleton, {}, s)) : s.length > 0 ? s.slice(0, a.perPage).map(e => (0, r.jsx)(OrderCard, {
                        order: e,
                        setFilter: n
                    }, e.id)) : (0, r.jsx)("span", {
                        className: "font-sans text-sea-50/90",
                        children: "No orders in sight with these filters..."
                    })
                })
            }
            var ec = t(99731),
                ed = t(7223);

            function OrdersTableView(e) {
                let {
                    visibleFields: s,
                    filter: t,
                    setFilter: l,
                    loading: a,
                    error: n,
                    orders: i
                } = e;
                return (0, r.jsx)("div", {
                    className: "flex h-full flex-col overflow-hidden rounded-xl",
                    children: (0, r.jsx)(p.Card, {
                        className: "sea-scroll h-full w-full overflow-auto bg-sea-300/5",
                        children: (0, r.jsxs)("table", {
                            className: "relative w-full rounded-xl text-left",
                            children: [(0, r.jsx)("thead", {
                                className: "sticky top-0 z-50 bg-sea-950/20 backdrop-blur",
                                children: (0, r.jsx)("tr", {
                                    children: (0, r.jsx)(ed.Z, {
                                        visibleFields: s,
                                        filter: t,
                                        setFilter: l
                                    })
                                })
                            }), (0, r.jsx)("tbody", {
                                className: "sea-scroll overflow-auto pt-8 backdrop-blur",
                                children: (() => {
                                    switch (!0) {
                                        case a:
                                            return [...Array(t.perPage).keys()].map(e => (0, r.jsx)("tr", {
                                                className: "cursor-pointer even:bg-sea-300/10",
                                                children: Object.keys(s).map((e, s) => (0, r.jsx)("td", {
                                                    className: "px-3 py-3 opacity-70 first:pl-10 last:pr-10",
                                                    children: (0, r.jsx)(D.X, {
                                                        className: "h-4 w-full rounded-md bg-blue-700/50"
                                                    })
                                                }, e))
                                            }, "row-".concat(e)));
                                        case !!n:
                                            return (0, r.jsxs)("div", {
                                                children: ["Error: ", n.message]
                                            });
                                        case 0 === i.length:
                                            return (0, r.jsx)("tr", {
                                                children: (0, r.jsx)("td", {
                                                    colSpan: Object.keys(s).length,
                                                    children: (0, r.jsx)("div", {
                                                        className: "mx-auto flex items-center justify-center p-4 font-mono text-sm text-blue-50",
                                                        children: "No orders meet your filter criteria. Try another search!"
                                                    })
                                                })
                                            });
                                        default:
                                            return i.slice(0, t.perPage).map(e => (0, r.jsx)(ec.Z, {
                                                order: e,
                                                setFilter: l
                                            }, e.id))
                                    }
                                })()
                            })]
                        })
                    })
                })
            }
            let ex = {
                [B.I.tokenAddress]: "",
                [B.I.fulfiller]: "",
                [B.I.availableTokens]: "",
                [B.I.requestedETHAmount]: "",
                [B.I.requester]: "",
                [B.I.orderBy]: B.I.createdAt,
                [B.I.orderDirection]: "desc",
                [B.I.state]: "-1",
                [B.I.tokenAmountOperator]: "gte",
                [B.I.ethAmountOperator]: "gte",
                perPage: 16,
                page: 1
            };

            function Browse() {
                let [e, s] = h()(ex), {
                    loading: t,
                    error: o,
                    data: m
                } = (0, l.a)((0, J.A9)(e), {
                    pollInterval: 5e3
                }), [p, b] = (0, x.useState)([]);
                (0, x.useEffect)(() => {
                    (null == m ? void 0 : m.orders) && b(m.orders)
                }, [null == m ? void 0 : m.orders]);
                let {
                    blockNumber: f,
                    fulfiller: g,
                    orderBy: j,
                    tokenAddress: v,
                    initialTokens: w,
                    requester: N,
                    id: k,
                    ...y
                } = Y.d, [T, Z] = (0, x.useState)("cards"), O = {
                    cards: OrdersCardView,
                    table: OrdersTableView,
                    list: OrderListView
                }[T], C = (0, d.useSearchParams)().get("preview"), [I, A] = (0, x.useState)(!!C);
                return (0, x.useEffect)(() => {
                    A(!!C)
                }, [C]), (0, r.jsxs)("div", {
                    className: c()("flex max-h-[calc(95svh_-_4.5rem)] w-[200vw] flex-1 gap-2 px-2 transition-all duration-300 ease-in-out md:mt-6 md:gap-4 lg:max-h-[calc(95svh_-_8rem)] lg:w-full lg:px-4", I ? "-translate-x-[50%] px-4 lg:translate-x-0" : "lg:translate-x-[8%] lg:pr-[16%]"),
                    children: [(0, r.jsxs)("div", {
                        className: c()("flex w-1/2 flex-col gap-4 transition-all duration-300 ease-in-out", I ? "-ml-2 lg:w-3/4" : "lg:w-full"),
                        children: [(0, r.jsx)(Filters, {
                            filter: e,
                            setFilter: s,
                            activeView: T,
                            setActiveView: Z
                        }), "cards" === T ? (0, r.jsx)(n.o, {
                            id: "browse-orders-container",
                            className: c()([u.G6 ? "px-2" : "p-2", "sea-scroll -ml-2 overflow-auto  lg:@container"]),
                            children: (0, r.jsx)(O, {
                                orders: p,
                                loading: t,
                                error: o,
                                filter: e,
                                setFilter: s,
                                visibleFields: y,
                                showPreview: I
                            })
                        }) : (0, r.jsx)("div", {
                            className: "flex-1 overflow-hidden lg:@container",
                            children: (0, r.jsx)(O, {
                                orders: p,
                                loading: t,
                                error: o,
                                filter: e,
                                setFilter: s,
                                visibleFields: y,
                                showPreview: I
                            })
                        }), (0, r.jsx)("div", {
                            className: "mx-auto",
                            children: (0, r.jsx)("button", {
                                type: "button",
                                className: c()(["mb-6 flex items-center gap-2 rounded-lg bg-transparent px-5 py-2 text-gray-100/80 backdrop-blur transition duration-300 md:mb-2", "hover:bg-sea-300/10"]),
                                onClick: () => s(e => ({ ...e,
                                    page: +e.page + 1,
                                    perPage: (+e.page + 1) * 16
                                })),
                                children: t ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("span", {
                                        children: "Loading..."
                                    }), (0, r.jsx)(i.c, {
                                        color: "white",
                                        size: "sm"
                                    })]
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("span", {
                                        children: "Load more"
                                    }), (0, r.jsx)(a.Z, {
                                        className: "h-auto w-5"
                                    })]
                                })
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: c()("relative mx-auto flex h-fit max-h-[calc(95svh_-_8rem)] w-1/2 min-w-[50] flex-grow flex-col gap-2 backdrop-blur-md transition-all xl:w-2/5 2xl:w-1/3 4xl:w-1/4", I ? "fade-in max-w-full flex-shrink-0 grow translate-x-2 opacity-100 lg:translate-x-0" : "fade-out max-w-0 opacity-0"),
                        onAnimationEnd: () => !I && s(e => {
                            let {
                                preview: s,
                                ...t
                            } = e;
                            return t
                        }),
                        children: (0, r.jsx)(Q.default, {
                            setShowPreview: A
                        })
                    })]
                })
            }

            function BrowsePage() {
                return (0, r.jsx)(Browse, {})
            }
        },
        45138: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return OrderCell
                }
            });
            var r = t(57437),
                l = t(40603);

            function OrderCell(e) {
                let {
                    orderId: s,
                    setFilter: t,
                    isRestricted: a,
                    children: n
                } = e, {
                    AlertDialog: i,
                    showAlertDialog: o
                } = (0, l.Z)();
                return (0, r.jsxs)("td", {
                    className: "p-3 text-xs text-gray-100 first:pl-5 last:pr-5 lg:first:pl-10 lg:last:pr-10",
                    onClick: () => {
                        a ? o() : t(e => ({ ...e,
                            preview: s
                        }))
                    },
                    children: [(0, r.jsx)(i, {
                        title: "Order Restricted",
                        message: "This order is reserved for a whitelisted address. Please connect a whitelisted wallet to view this order."
                    }), n]
                })
            }
        },
        65741: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return TokenCell
                }
            });
            var r = t(57437),
                l = t(12025),
                a = t(88597),
                n = t(72264),
                i = t(9290),
                o = t(15276),
                c = t(62035);

            function TokenCell(e) {
                let {
                    order: s,
                    token: t
                } = e, d = (0, c.Z)(t), x = (0, o.Z)(s);
                return (0, r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, r.jsx)(a.J, {
                        alt: t.name,
                        src: t.thumb,
                        width: 25,
                        height: 25,
                        className: "aspect-square min-w-[25px] rounded-md"
                    }), (0, r.jsx)(l.Tooltip, {
                        className: "bg-black/40 px-4 py-3 backdrop-blur",
                        content: (0, r.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, r.jsxs)("span", {
                                children: [t.name, " [", t.symbol, "] - ", t.address]
                            }), (0, r.jsxs)("span", {
                                children: ["DEX Price: ", d, " ETH"]
                            })]
                        }),
                        children: (0, r.jsxs)(n.Z, {
                            href: !x && "/browse/".concat(s.id),
                            className: "text-base",
                            children: ["$", t.symbol]
                        })
                    }), (0, r.jsx)(i.Z, {
                        token: t,
                        iconOnly: !0
                    })]
                })
            }
        },
        99731: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return OrderRecord
                }
            });
            var r = t(57437),
                l = t(12025),
                a = t(54440),
                n = t.n(a),
                i = t(74157);

            function OrderStateLabel(e) {
                let {
                    state: s,
                    iconOnly: t = !1
                } = e, a = s === i.K.Open, o = a ? "Open" : "Closed";
                return (0, r.jsxs)("div", {
                    className: "mr-1 flex items-center gap-2",
                    children: [(0, r.jsx)(l.Tooltip, {
                        content: o,
                        ...!t && {
                            open: !1
                        },
                        children: (0, r.jsx)("div", {
                            className: n()(a ? "animate-pulse bg-green-200 bg-opacity-70 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-blue-200" : "bg-gray-200", "relative inline-block h-4 w-4 overflow-visible rounded-full")
                        })
                    }), !t && (0, r.jsx)("span", {
                        className: "select-none text-blue-50",
                        children: o
                    })]
                })
            }
            t(27311);
            var o = t(67705),
                c = t(79043),
                d = t(78258),
                x = t(23950),
                u = t(48357),
                m = t(13080);

            function OfferedTokensCell(e) {
                var s;
                let {
                    order: t
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex flex-row gap-2",
                    children: [(0, r.jsx)(l.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "".concat(parseInt(t.availableTokens).toLocaleString(), " $").concat(null === (s = t.token) || void 0 === s ? void 0 : s.symbol, " remaining"),
                        children: (0, r.jsxs)("span", {
                            className: "",
                            children: [(0, m.ZP)(t.initialTokens), " $", null == t ? void 0 : t.token.symbol]
                        })
                    }), t.state == i.K.Open && (0, r.jsx)("div", {
                        children: t.partiallyFillable ? (0, r.jsx)(l.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "Crowd-Fill",
                            children: (0, r.jsx)(u.Z, {
                                className: "w-4",
                                color: "orange"
                            })
                        }) : (0, r.jsx)(l.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "AON (All-or-Nothing)",
                            children: (0, r.jsx)(x.Z, {
                                className: "w-4",
                                color: "orange"
                            })
                        })
                    })]
                })
            }
            var h = t(45138),
                p = t(35529),
                b = t(34729),
                f = t(15276),
                g = t(77676);

            function ProgressCell(e) {
                let {
                    order: s
                } = e, t = (0, f.Z)(s), a = (0, g.Z)(s);
                return (0, r.jsx)("div", {
                    className: "flex w-full flex-row gap-2",
                    children: t ? (0, r.jsxs)("span", {
                        className: "flex flex-row gap-1",
                        children: ["Reserved", " ", (0, r.jsx)(l.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "This order is reserved for a whitelisted address.",
                            children: (0, r.jsx)(b.Z, {
                                className: "w-4",
                                color: "lightgray"
                            })
                        })]
                    }) : (0, r.jsxs)("div", {
                        className: "flex items-center justify-start gap-3",
                        children: [(0, r.jsx)("div", {
                            className: "relative h-1 min-w-[70px] rounded-full bg-[#98BFFF1C]/20",
                            children: (0, r.jsx)("div", {
                                className: "absolute left-0 top-0 h-1 rounded-full bg-[#E38833]",
                                style: {
                                    width: "".concat(a, "%")
                                }
                            })
                        }), a, "%"]
                    })
                })
            }
            var j = t(46384),
                v = t(65741);

            function OrderRecord(e) {
                let {
                    order: s,
                    setFilter: t
                } = e, l = { ...s,
                    token: (0, d.Z)(null == s ? void 0 : s.tokenAddress)
                }, a = [(0, r.jsx)(v.Z, {
                    order: l,
                    token: l.token
                }), (0, r.jsx)(OfferedTokensCell, {
                    order: l
                }), (0, r.jsx)(o.Z, {
                    num: l.requestedETHAmount
                }), (0, r.jsx)(ProgressCell, {
                    order: l
                }), (0, r.jsx)(o.Z, {
                    num: l[c.I.formattedPricePerToken]
                }), (0, r.jsx)(p.Z, {
                    order: l
                }), (0, r.jsx)(OrderStateLabel, {
                    state: l.state
                }), (0, r.jsx)(j.Z, {
                    value: l[c.I.createdAt]
                })];
                return l.token && (0, r.jsx)("tr", {
                    className: "cursor-pointer even:bg-sea-300/10",
                    children: a.map((e, s) => (0, r.jsx)(h.Z, {
                        orderId: l.id,
                        setFilter: t,
                        children: e
                    }, "order-record-cell-".concat(s)))
                })
            }
        },
        7223: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return OrdersTableHeaders
                }
            });
            var r = t(57437),
                l = t(67057),
                a = t(67532),
                n = t(8365),
                i = t(47834),
                o = t(12025),
                c = t(79043);

            function OrdersTableHeaders(e) {
                let {
                    visibleFields: s,
                    filter: t,
                    setFilter: d,
                    sortingEnabled: x = !0
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: Object.entries(s).map((e, s) => {
                        let [u, m] = e;
                        return (0, r.jsx)("th", {
                            className: "px-3 py-2 first:pl-5 last:pr-5 lg:first:pl-10 lg:last:pr-10",
                            children: (0, r.jsxs)("span", {
                                className: "flex items-center justify-start gap-1 text-xs font-normal leading-none text-blue-gray-50",
                                children: [m, u === c.I.priceDelta && (0, r.jsx)(o.Tooltip, {
                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                    content: (0, r.jsx)("span", {
                                        children: "Markup/markdown of this order compared to Uniswap price."
                                    }),
                                    children: (0, r.jsx)(l.Z, {
                                        className: "h-4 w-4"
                                    })
                                }), x && [c.I.availableTokens, c.I.formattedPricePerToken, c.I.createdAt].includes(u) && (0, r.jsx)(o.Button, {
                                    variant: "text",
                                    className: "text--blue-gray-50 grid place-items-center p-1",
                                    onClick: () => d(e => {
                                        let s = e[c.I.orderBy],
                                            t = e[c.I.orderDirection];
                                        return { ...e,
                                            [c.I.orderBy]: u,
                                            [c.I.orderDirection]: s === u && "desc" === t ? "asc" : "desc"
                                        }
                                    }),
                                    children: t[c.I.orderBy] === u ? "desc" === t[c.I.orderDirection] ? (0, r.jsx)(a.Z, {
                                        className: "w-4"
                                    }) : (0, r.jsx)(n.Z, {
                                        className: "w-4"
                                    }) : (0, r.jsx)(i.Z, {
                                        className: "w-4 opacity-40"
                                    })
                                })]
                            })
                        }, u)
                    })
                })
            }
        },
        72264: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return LinkWrap
                }
            });
            var r = t(57437),
                l = t(61396),
                a = t.n(l);

            function LinkWrap(e) {
                let {
                    children: s,
                    href: t,
                    className: l,
                    onClick: n,
                    ...i
                } = e;
                return t ? (0, r.jsx)(a(), {
                    href: t,
                    className: l,
                    onClick: n,
                    ...i,
                    children: s
                }) : (0, r.jsx)("div", {
                    className: l,
                    onClick: n,
                    ...i,
                    children: s
                })
            }
        },
        67705: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return SmallDecimal
                }
            });
            var r = t(57437),
                l = t(12025),
                a = t(16691),
                n = t.n(a),
                i = t(2265),
                o = t(63160),
                c = t(34065);

            function SmallDecimal(e) {
                let {
                    num: s,
                    className: t
                } = e, a = function(e) {
                    var s;
                    let [t, r] = (null !== (s = null == e ? void 0 : e.toString()) && void 0 !== s ? s : "0").split(".");
                    if (!r) return {
                        int: t,
                        zeros: 0,
                        decimals: ""
                    };
                    let l = 0;
                    for (;
                        "0" === r[l];) l++;
                    return {
                        int: t,
                        zeros: l,
                        decimals: r.slice(l)
                    }
                }(s), {
                    ethUsd: d
                } = (0, i.useContext)(c.F);
                return (0, r.jsx)(l.Tooltip, {
                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                    content: (0, r.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, r.jsxs)("span", {
                            children: [s, " ETH"]
                        }), (0, r.jsxs)("span", {
                            className: "text-end text-xs",
                            children: ["(~$", (s * d).toFixed(5), " USD)"]
                        })]
                    }),
                    children: (0, r.jsxs)("div", {
                        className: t || "flex flex-row tracking-wide",
                        children: [(0, r.jsx)(n(), {
                            src: o.Z,
                            alt: "ether symbol",
                            className: "mr-0.5 h-3 w-3"
                        }), (0, r.jsx)("span", {
                            children: a.int
                        }), ".", !!a.zeros && (0, r.jsxs)(r.Fragment, {
                            children: ["0", (0, r.jsx)("span", {
                                className: "relative top-1 mr-px text-[0.75em]",
                                children: a.zeros
                            })]
                        }), (0, r.jsx)("span", {
                            children: a.decimals.slice(0, 4)
                        })]
                    })
                })
            }
        },
        37678: function(e, s, t) {
            "use strict";
            t.d(s, {
                a: function() {
                    return a
                },
                d: function() {
                    return l
                }
            });
            var r = t(79043);
            let l = Object.freeze({
                    [r.I.id]: "Order",
                    [r.I.requester]: "Requester",
                    [r.I.fulfiller]: "Fulfiller",
                    [r.I.tokenAddress]: "Token Address",
                    [r.I.token]: "Token",
                    [r.I.initialTokens]: "Initial Amount",
                    [r.I.availableTokens]: "Offered",
                    [r.I.requestedETHAmount]: "For",
                    [r.I.fillProgress]: "Fill Progress",
                    [r.I.formattedPricePerToken]: "Price/Token",
                    [r.I.priceDelta]: "Price Delta",
                    [r.I.state]: "State",
                    [r.I.blockNumber]: "Block Number",
                    [r.I.createdAt]: "Created",
                    [r.I.orderBy]: "Order By"
                }),
                a = Object.freeze({
                    [r.I.transactionHash]: "Tx Hash",
                    [r.I.id]: "Order",
                    [r.I.token]: "Token",
                    [r.I.tokenAmount]: "Fill Amount",
                    [r.I.ethAmount]: "ETH Amount",
                    [r.I.formattedPricePerToken]: "Price/Token",
                    [r.I.state]: "State",
                    [r.I.blockNumber]: "Block Number",
                    [r.I.createdAt]: "Timestamp",
                    [r.I.orderBy]: "Order By"
                })
        },
        40603: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return useAlertDialog
                }
            });
            var r = t(57437),
                l = t(2265),
                a = t(72940),
                n = t(17518);

            function useAlertDialog() {
                let e = (0, l.useRef)(),
                    s = (0, n.Z)(e);
                return {
                    AlertDialog: function(t) {
                        let {
                            title: l,
                            message: n
                        } = t;
                        return (0, r.jsxs)("dialog", {
                            ref: e,
                            className: "scale-in-center relative w-1/2 cursor-default rounded-3xl bg-black bg-opacity-20 px-6 pb-6 pt-4 shadow-2xl backdrop-blur md:w-[30vw] md:min-w-[500px] md:px-8",
                            children: [(0, r.jsx)(a.Z, {
                                handleClose: s
                            }), (0, r.jsx)("h3", {
                                className: "mb-4 mt-1 text-xl font-extrabold text-white",
                                children: l
                            }), (0, r.jsx)("p", {
                                className: "text-white",
                                children: n
                            })]
                        })
                    },
                    showAlertDialog: () => {
                        e.current.showModal()
                    }
                }
            }
        },
        27311: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return useOrderColors
                }
            }), t(54440), t(79043);
            var r = t(74157);

            function useOrderColors(e) {
                let makePalette = e => ["bg-".concat(e, "-200"), e, "text-".concat(e, "-50")],
                    [s, t, l] = {
                        [r.K.Open]: makePalette("green"),
                        [r.K.Fulfilled]: makePalette("gray"),
                        [r.K.Settled]: makePalette("gray")
                    }[e.state] || ["bg-gray-500", "gray", "text-gray-100"],
                    a = e.state === r.K.Open ? "success" : "default";
                return {
                    buttonColor: s,
                    progressColor: t,
                    circularProgress: a,
                    textColor: l
                }
            }
        }
    },
    function(e) {
        e.O(0, [4590, 7830, 8293, 2279, 728, 1108, 6926, 7562, 7401, 939, 391, 7133, 7357, 6985, 6843, 1396, 5694, 231, 3258, 9936, 3197, 2552, 1935, 8735, 3252, 6022, 2971, 2472, 1744], function() {
            return e(e.s = 89340)
        }), _N_E = e.O()
    }
]);