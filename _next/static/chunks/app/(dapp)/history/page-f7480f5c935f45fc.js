(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7106], {
        65462: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 25199))
        },
        62389: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    requestIdleCallback: function() {
                        return r
                    },
                    cancelIdleCallback: function() {
                        return n
                    }
                });
            let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        25199: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return HistoryPage
                }
            });
            var n = r(57437),
                a = r(56926),
                s = r(50392),
                l = r(2265);
            let i = l.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, n) {
                return l.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: n,
                    "aria-labelledby": t
                }, r), e ? l.createElement("title", {
                    id: t
                }, e) : null, l.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
                    clipRule: "evenodd"
                }))
            });
            var o = r(78197);
            let c = l.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...r
                }, n) {
                    return l.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: n,
                        "aria-labelledby": t
                    }, r), e ? l.createElement("title", {
                        id: t
                    }, e) : null, l.createElement("path", {
                        fillRule: "evenodd",
                        d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
                        clipRule: "evenodd"
                    }))
                }),
                d = l.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...r
                }, n) {
                    return l.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: n,
                        "aria-labelledby": t
                    }, r), e ? l.createElement("title", {
                        id: t
                    }, e) : null, l.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z",
                        clipRule: "evenodd"
                    }))
                });
            var u = r(12025),
                f = r(54440),
                m = r.n(f);
            r(52223);
            var p = r(99731),
                h = r(54684),
                x = r(79043),
                b = r(37678),
                g = r(62461),
                v = r(7223),
                j = r(10795);

            function TableLoader(e) {
                let {
                    rows: t = 12,
                    cols: r = 8
                } = e;
                return [...Array(t).keys()].map(e => (0, n.jsx)("tr", {
                    className: "cursor-pointer even:bg-blue-100/70",
                    children: [...Array(r).keys()].map((t, r) => (0, n.jsx)("td", {
                        className: "px-3 py-3 opacity-70 first:pl-10 last:pr-10",
                        children: (0, n.jsx)(j.X, {
                            className: "h-4 w-full rounded-md bg-blue-700/50"
                        })
                    }, "row-".concat(e, "-col-").concat(r)))
                }, "row-".concat(e)))
            }
            var y = r(13080),
                w = r(79352),
                k = r(43977),
                N = r(17622),
                A = r(78258);
            r(45138);
            var C = r(46384),
                I = r(65741);

            function HistoryFillRecord(e) {
                let {
                    order: t,
                    fill: r
                } = e, a = (0, A.Z)(t.tokenAddress);
                return (0, n.jsxs)("tr", {
                    className: "cursor-pointer text-white even:bg-blue-gray-50/10 hover:bg-blue-gray-50/10",
                    children: [(0, n.jsx)("td", {
                        className: "p-3 pl-10 first:pl-5 last:pr-5 lg:first:pl-10 lg:last:pr-10",
                        children: (0, n.jsx)("span", {
                            className: "font-mono text-xs",
                            children: (0, n.jsx)(N.Z, {
                                hash: r[x.I.transactionHash],
                                href: "https://etherscan.io/tx/".concat(r[x.I.transactionHash])
                            })
                        })
                    }), (0, n.jsx)("td", {
                        className: "p-3",
                        children: (0, n.jsx)("span", {
                            className: "font-mono text-xs",
                            children: (0, n.jsx)(N.Z, {
                                hash: t.id,
                                href: "/browse/".concat(t.id)
                            })
                        })
                    }), (0, n.jsx)("td", {
                        className: "p-3",
                        children: a ? (0, n.jsx)(I.Z, {
                            token: a
                        }) : (0, n.jsx)(u.Spinner, {
                            color: "blue",
                            className: "h-3 w-3"
                        })
                    }), (0, n.jsx)("td", {
                        className: "p-3",
                        children: (0, n.jsx)("span", {
                            className: "font-mono text-xs",
                            children: (0, y.ZP)(r[x.I.tokenAmount])
                        })
                    }), (0, n.jsx)("td", {
                        className: "p-3",
                        children: (0, n.jsx)("span", {
                            className: "text-xs",
                            children: (0, w.d)((0, k.v)(r[x.I.ethAmount], null == a ? void 0 : a.decimals))
                        })
                    }), (0, n.jsx)("td", {
                        className: "p-3",
                        children: (0, n.jsx)("span", {
                            className: "font-mono text-xs",
                            children: (0, w.d)(r[x.I.pricePerToken])
                        })
                    }), (0, n.jsx)("td", {
                        className: "p-3 pr-10 text-xs",
                        children: (0, n.jsx)(C.Z, {
                            value: r[x.I.timestamp]
                        })
                    })]
                })
            }

            function MyOrders() {
                let e = (0, a.mA)(),
                    t = {
                        [x.I.tokenAddress]: "",
                        [x.I.fulfiller]: "",
                        [x.I.availableTokens]: "",
                        [x.I.requestedETHAmount]: "",
                        [x.I.requester]: e.address,
                        [x.I.orderBy]: x.I.createdAt,
                        [x.I.orderDirection]: "desc",
                        [x.I.state]: "-1",
                        [x.I.tokenAmountOperator]: "gte",
                        [x.I.ethAmountOperator]: "gte",
                        perPage: 6,
                        page: 1
                    },
                    [r, f] = (0, l.useState)(t);
                (0, l.useEffect)(() => {
                    f(t => ({ ...t,
                        requester: e.address
                    }))
                }, [e.address]);
                let {
                    blockNumber: h,
                    fulfiller: j,
                    orderBy: y,
                    tokenAddress: w,
                    initialTokens: k,
                    requestedETHAmount: N,
                    requester: A,
                    ...C
                } = b.d, {
                    loading: I,
                    error: T,
                    data: O
                } = (0, s.a)((0, g.ze)(r), {
                    pollInterval: 5e3,
                    skip: !e.address
                }), Z = (null == O ? void 0 : O.orders) || [];
                return (0, n.jsxs)("div", {
                    className: "relative mx-1 mb-8 mt-12 flex flex-col items-start rounded-3xl bg-white bg-opacity-10 shadow-2xl md:mx-auto md:w-3/4 md:backdrop-blur",
                    children: [(0, n.jsx)("h1", {
                        className: "mt-4 px-5 font-sans text-xl font-extrabold text-white lg:px-10",
                        children: "My Orders"
                    }), (0, n.jsx)(u.Card, {
                        className: "w-full overflow-hidden bg-transparent shadow-none",
                        children: (0, n.jsx)("div", {
                            className: "sea-scroll overflow-auto pb-4",
                            children: (0, n.jsxs)("table", {
                                className: "mt-4 w-full text-left",
                                children: [(0, n.jsx)("thead", {
                                    children: (0, n.jsx)(v.Z, {
                                        visibleFields: C,
                                        sortingEnabled: !1
                                    })
                                }), (0, n.jsx)("tbody", {
                                    children: (() => {
                                        switch (!0) {
                                            case I:
                                                return (0, n.jsx)(TableLoader, {
                                                    rows: r.perPage,
                                                    cols: Object.keys(C).length
                                                });
                                            case !!T:
                                                return (0, n.jsxs)("div", {
                                                    children: ["Error: ", T.message]
                                                });
                                            case 0 === Z.length:
                                                return (0, n.jsx)("tr", {
                                                    children: (0, n.jsx)("td", {
                                                        colSpan: Object.keys(C).length,
                                                        children: (0, n.jsx)("div", {
                                                            className: "mx-auto flex items-center justify-center p-4 font-mono text-sm text-blue-50",
                                                            children: "You have not created any orders yet."
                                                        })
                                                    })
                                                });
                                            default:
                                                return Z.slice(0, r.perPage).map(e => (0, n.jsx)(p.Z, {
                                                    order: e,
                                                    fields: Object.keys(C)
                                                }, e.id))
                                        }
                                    })()
                                })]
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        className: m()("mx-auto my-2 flex items-center justify-center gap-2", r.page > 1 ? "justify-between" : "justify-end"),
                        children: [(0, n.jsxs)(u.Button, {
                            variant: "text",
                            disabled: I,
                            className: m()("flex items-center text-blue-50 focus:outline-none disabled:text-gray-400 [&:hover_.arrow]:opacity-100 [&:hover_.chevron]:opacity-0 [&:hover_span]:right-1", 1 === r.page && "invisible"),
                            ripple: !1,
                            onClick: () => f(e => ({ ...e,
                                page: +e.page - 1
                            })),
                            children: [(0, n.jsxs)("span", {
                                className: "relative right-0 flex items-center transition-all duration-300",
                                children: [(0, n.jsx)(i, {
                                    className: "chevron relative right-1 h-4 w-4 transition-all duration-300"
                                }), (0, n.jsx)(o.Z, {
                                    className: "arrow absolute top-0 h-full w-full opacity-0 transition-all duration-300"
                                })]
                            }), "Previous"]
                        }), (0, n.jsx)("span", {
                            className: "grid h-8 w-8 place-items-center rounded-full bg-blue-gray-700 bg-opacity-20 text-blue-100",
                            children: r.page
                        }), (0, n.jsxs)(u.Button, {
                            variant: "text",
                            disabled: I,
                            className: m()("flex items-center text-blue-50 focus:outline-none disabled:text-gray-300 [&:hover_.arrow]:opacity-100 [&:hover_.chevron]:opacity-0 [&:hover_span]:left-1", !I && Z.length <= r.perPage && "invisible"),
                            ripple: !1,
                            onClick: () => f(e => ({ ...e,
                                page: +e.page + 1
                            })),
                            children: ["Next page", (0, n.jsxs)("span", {
                                className: "relative left-0 flex items-center transition-all duration-300",
                                children: [(0, n.jsx)(c, {
                                    className: "chevron relative left-1 h-4 w-4 transition-all duration-300"
                                }), (0, n.jsx)(d, {
                                    className: "arrow absolute top-0 h-full w-full opacity-0 transition-all duration-300"
                                })]
                            })]
                        })]
                    })]
                })
            }

            function MyFills() {
                let e = (0, a.mA)(),
                    [t, r] = (0, l.useState)(1),
                    {
                        loading: f,
                        error: p,
                        data: h
                    } = (0, s.a)((0, g.LI)({
                        fulfiller: e.address,
                        skip: (t - 1) * 6,
                        first: 7
                    }), {
                        pollInterval: 5e3
                    }),
                    x = (null == h ? void 0 : h.fills) || [],
                    {
                        blockNumber: j,
                        orderBy: y,
                        state: w,
                        ...k
                    } = b.a;
                return (0, n.jsxs)("div", {
                    className: "relative mx-1 mb-8 flex flex-col items-start rounded-3xl bg-white bg-opacity-10 shadow-2xl md:mx-auto md:w-3/4 md:backdrop-blur",
                    children: [(0, n.jsx)("h1", {
                        className: "mt-4 px-5 font-sans text-xl font-extrabold text-white lg:px-10",
                        children: "My Fills"
                    }), (0, n.jsx)(u.Card, {
                        className: "w-full overflow-hidden bg-transparent shadow-none",
                        children: (0, n.jsx)("div", {
                            className: "sea-scroll overflow-auto pb-4",
                            children: (0, n.jsxs)("table", {
                                className: "mt-4 w-full text-left",
                                children: [(0, n.jsx)("thead", {
                                    children: (0, n.jsx)(v.Z, {
                                        visibleFields: k,
                                        sortingEnabled: !1
                                    })
                                }), (0, n.jsx)("tbody", {
                                    children: (() => {
                                        switch (!0) {
                                            case f:
                                                return (0, n.jsx)(TableLoader, {
                                                    rows: 6,
                                                    cols: Object.keys(k).length
                                                });
                                            case !!p:
                                                return (0, n.jsx)("tr", {
                                                    children: (0, n.jsx)("td", {
                                                        colSpan: Object.keys(k).length,
                                                        children: (0, n.jsxs)("div", {
                                                            className: "mx-auto mt-4 flex items-center justify-center border border-red-500 p-4 font-sans text-sm font-bold text-red-200",
                                                            children: ["Error: ", p.message]
                                                        })
                                                    })
                                                });
                                            case 0 === x.length:
                                                return (0, n.jsx)("tr", {
                                                    children: (0, n.jsx)("td", {
                                                        colSpan: Object.keys(k).length,
                                                        children: (0, n.jsx)("div", {
                                                            className: "mx-auto flex items-center justify-center p-4 font-mono text-sm text-blue-50",
                                                            children: "You have not filled any orders yet."
                                                        })
                                                    })
                                                });
                                            default:
                                                return x.slice(0, 6).map(e => {
                                                    let {
                                                        orderId: t,
                                                        ...r
                                                    } = e;
                                                    return (0, n.jsx)(HistoryFillRecord, {
                                                        order: t,
                                                        fill: r
                                                    }, "fill-".concat(r.id))
                                                })
                                        }
                                    })()
                                })]
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        className: m()("mx-auto my-2 flex items-center justify-center gap-2", t > 1 ? "justify-between" : "justify-end"),
                        children: [(0, n.jsxs)(u.Button, {
                            variant: "text",
                            disabled: f,
                            className: m()("flex items-center text-blue-50 focus:outline-none disabled:text-gray-400 [&:hover_.arrow]:opacity-100 [&:hover_.chevron]:opacity-0 [&:hover_span]:right-1", 1 === t && "invisible"),
                            ripple: !1,
                            onClick: () => r(e => e - 1),
                            children: [(0, n.jsxs)("span", {
                                className: "relative right-0 flex items-center transition-all duration-300",
                                children: [(0, n.jsx)(i, {
                                    className: "chevron relative right-1 h-4 w-4 transition-all duration-300"
                                }), (0, n.jsx)(o.Z, {
                                    className: "arrow absolute top-0 h-full w-full opacity-0 transition-all duration-300"
                                })]
                            }), "Previous"]
                        }), (0, n.jsx)("span", {
                            className: "grid h-8 w-8 place-items-center rounded-full bg-blue-gray-700 bg-opacity-20 text-blue-100",
                            children: t
                        }), (0, n.jsxs)(u.Button, {
                            variant: "text",
                            disabled: f,
                            className: m()("flex items-center text-blue-50 focus:outline-none disabled:text-gray-300 [&:hover_.arrow]:opacity-100 [&:hover_.chevron]:opacity-0 [&:hover_span]:left-1", !f && x.length <= 6 && "invisible"),
                            ripple: !1,
                            onClick: () => r(e => e + 1),
                            children: ["Next page", (0, n.jsxs)("span", {
                                className: "relative left-0 flex items-center transition-all duration-300",
                                children: [(0, n.jsx)(c, {
                                    className: "chevron relative left-1 h-4 w-4 transition-all duration-300"
                                }), (0, n.jsx)(d, {
                                    className: "arrow absolute top-0 h-full w-full opacity-0 transition-all duration-300"
                                })]
                            })]
                        })]
                    })]
                })
            }

            function History() {
                return (0, n.jsxs)("div", {
                    className: "min-h-no-nav-screen",
                    children: [(0, n.jsx)(MyOrders, {}), (0, n.jsx)(MyFills, {})]
                })
            }

            function HistoryPage() {
                return (0, a.mA)().isDisconnected ? (0, n.jsx)("div", {
                    className: "relative -mt-[90px] flex min-h-no-nav-screen grow items-center justify-center",
                    children: (0, n.jsx)(h.Z, {})
                }) : (0, n.jsx)(History, {})
            }
        },
        45138: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return OrderCell
                }
            });
            var n = r(57437),
                a = r(40603);

            function OrderCell(e) {
                let {
                    orderId: t,
                    setFilter: r,
                    isRestricted: s,
                    children: l
                } = e, {
                    AlertDialog: i,
                    showAlertDialog: o
                } = (0, a.Z)();
                return (0, n.jsxs)("td", {
                    className: "p-3 text-xs text-gray-100 first:pl-5 last:pr-5 lg:first:pl-10 lg:last:pr-10",
                    onClick: () => {
                        s ? o() : r(e => ({ ...e,
                            preview: t
                        }))
                    },
                    children: [(0, n.jsx)(i, {
                        title: "Order Restricted",
                        message: "This order is reserved for a whitelisted address. Please connect a whitelisted wallet to view this order."
                    }), l]
                })
            }
        },
        35529: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return PriceDelta
                }
            });
            var n = r(57437),
                a = r(12025),
                s = r(54440),
                l = r.n(s),
                i = r(13080),
                o = r(86191),
                c = r(28843);

            function PriceComparison(e) {
                let {
                    dexPrice: t,
                    orderPrice: r
                } = e, a = String(r).length > String(t).length ? String(r) : String(t);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("span", {
                        className: "flex justify-between gap-2",
                        children: ["Listed Price:", (0, n.jsxs)("span", {
                            className: "font-mono",
                            children: [String(r).padEnd(a.length, "0"), " ETH"]
                        })]
                    }), (0, n.jsxs)("span", {
                        className: "flex justify-between gap-2",
                        children: ["Market Price:", (0, n.jsxs)("span", {
                            className: "font-mono",
                            children: [String(t).padEnd(a.length, "0"), " ETH"]
                        })]
                    })]
                })
            }
            var d = r(79043),
                u = r(62035);

            function PriceDelta(e) {
                let {
                    className: t,
                    order: r
                } = e, s = (0, u.Z)(r.token), f = r[d.I.formattedPricePerToken], m = 100 * Math.abs(f - s) / s;
                return null === s ? (0, n.jsx)(c.Z, {}) : isNaN(m) ? (0, n.jsx)(a.Spinner, {
                    color: "blue",
                    className: "h-3 w-3"
                }) : (0, n.jsx)(a.Tooltip, {
                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                    content: (0, n.jsxs)("div", {
                        className: "flex flex-col text-sm",
                        children: [(0, n.jsxs)("span", {
                            children: ["This order is listed ", (0, i.ZP)(m.toFixed(2)), "%", (0, n.jsx)("span", {
                                children: f > s ? " above" : " below"
                            }), " ", "market rate."]
                        }), (0, n.jsx)(PriceComparison, {
                            orderPrice: f,
                            dexPrice: s
                        })]
                    }),
                    children: (0, n.jsxs)("span", {
                        className: l()(t, "flex w-full items-center gap-1 rounded-md font-mono text-xs"),
                        children: [f < s ? (0, n.jsx)(o.Z.Down, {
                            className: "text-green-200"
                        }) : (0, n.jsx)(o.Z.Up, {
                            className: "text-red-400"
                        }), (0, n.jsxs)("span", {
                            className: f < s ? "text-green-100" : "text-red-100",
                            children: [(0, i.ZP)(m.toFixed(2)), (0, n.jsx)("span", {
                                className: "ml-1",
                                children: "%"
                            })]
                        })]
                    })
                })
            }
        },
        46384: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return TimestampCell
                }
            });
            var n = r(57437),
                a = r(12025),
                s = r(54440),
                l = r.n(s),
                i = r(2265);

            function TimestampCell(e) {
                let {
                    value: t,
                    className: r
                } = e, [s, o] = (0, i.useState)(new Date().getTime());
                (0, i.useEffect)(() => {
                    let e = setInterval(() => {
                        o(new Date().getTime())
                    }, 3e4);
                    return () => {
                        clearInterval(e)
                    }
                }, []);
                let c = 1e3 * parseInt(t),
                    d = s - c,
                    u = "";
                if (d < 36e5) {
                    let e = Math.floor(d / 6e4);
                    u = 1 === e ? "".concat(e, " minute") : "".concat(e, " minutes")
                } else if (d < 864e5) {
                    let e = Math.floor(d / 36e5);
                    u = 1 === e ? "".concat(e, " hour") : "".concat(e, " hours")
                } else {
                    let e = Math.floor(d / 864e5);
                    u = 1 === e ? "".concat(e, " day") : "".concat(e, " days")
                }
                return (0, n.jsx)(a.Tooltip, {
                    className: l()("bg-black bg-opacity-40 px-4 py-3 backdrop-blur"),
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
                    children: (0, n.jsx)("span", {
                        className: r,
                        children: u
                    })
                })
            }
        },
        65741: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return TokenCell
                }
            });
            var n = r(57437),
                a = r(12025),
                s = r(88597),
                l = r(72264),
                i = r(9290),
                o = r(15276),
                c = r(62035);

            function TokenCell(e) {
                let {
                    order: t,
                    token: r
                } = e, d = (0, c.Z)(r), u = (0, o.Z)(t);
                return (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, n.jsx)(s.J, {
                        alt: r.name,
                        src: r.thumb,
                        width: 25,
                        height: 25,
                        className: "aspect-square min-w-[25px] rounded-md"
                    }), (0, n.jsx)(a.Tooltip, {
                        className: "bg-black/40 px-4 py-3 backdrop-blur",
                        content: (0, n.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, n.jsxs)("span", {
                                children: [r.name, " [", r.symbol, "] - ", r.address]
                            }), (0, n.jsxs)("span", {
                                children: ["DEX Price: ", d, " ETH"]
                            })]
                        }),
                        children: (0, n.jsxs)(l.Z, {
                            href: !u && "/browse/".concat(t.id),
                            className: "text-base",
                            children: ["$", r.symbol]
                        })
                    }), (0, n.jsx)(i.Z, {
                        token: r,
                        iconOnly: !0
                    })]
                })
            }
        },
        99731: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return OrderRecord
                }
            });
            var n = r(57437),
                a = r(12025),
                s = r(54440),
                l = r.n(s),
                i = r(74157);

            function OrderStateLabel(e) {
                let {
                    state: t,
                    iconOnly: r = !1
                } = e, s = t === i.K.Open, o = s ? "Open" : "Closed";
                return (0, n.jsxs)("div", {
                    className: "mr-1 flex items-center gap-2",
                    children: [(0, n.jsx)(a.Tooltip, {
                        content: o,
                        ...!r && {
                            open: !1
                        },
                        children: (0, n.jsx)("div", {
                            className: l()(s ? "animate-pulse bg-green-200 bg-opacity-70 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-blue-200" : "bg-gray-200", "relative inline-block h-4 w-4 overflow-visible rounded-full")
                        })
                    }), !r && (0, n.jsx)("span", {
                        className: "select-none text-blue-50",
                        children: o
                    })]
                })
            }
            r(27311);
            var o = r(67705),
                c = r(79043),
                d = r(78258),
                u = r(23950),
                f = r(48357),
                m = r(13080);

            function OfferedTokensCell(e) {
                var t;
                let {
                    order: r
                } = e;
                return (0, n.jsxs)("div", {
                    className: "flex flex-row gap-2",
                    children: [(0, n.jsx)(a.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "".concat(parseInt(r.availableTokens).toLocaleString(), " $").concat(null === (t = r.token) || void 0 === t ? void 0 : t.symbol, " remaining"),
                        children: (0, n.jsxs)("span", {
                            className: "",
                            children: [(0, m.ZP)(r.initialTokens), " $", null == r ? void 0 : r.token.symbol]
                        })
                    }), r.state == i.K.Open && (0, n.jsx)("div", {
                        children: r.partiallyFillable ? (0, n.jsx)(a.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "Crowd-Fill",
                            children: (0, n.jsx)(f.Z, {
                                className: "w-4",
                                color: "orange"
                            })
                        }) : (0, n.jsx)(a.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "AON (All-or-Nothing)",
                            children: (0, n.jsx)(u.Z, {
                                className: "w-4",
                                color: "orange"
                            })
                        })
                    })]
                })
            }
            var p = r(45138),
                h = r(35529),
                x = r(34729),
                b = r(15276),
                g = r(77676);

            function ProgressCell(e) {
                let {
                    order: t
                } = e, r = (0, b.Z)(t), s = (0, g.Z)(t);
                return (0, n.jsx)("div", {
                    className: "flex w-full flex-row gap-2",
                    children: r ? (0, n.jsxs)("span", {
                        className: "flex flex-row gap-1",
                        children: ["Reserved", " ", (0, n.jsx)(a.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "This order is reserved for a whitelisted address.",
                            children: (0, n.jsx)(x.Z, {
                                className: "w-4",
                                color: "lightgray"
                            })
                        })]
                    }) : (0, n.jsxs)("div", {
                        className: "flex items-center justify-start gap-3",
                        children: [(0, n.jsx)("div", {
                            className: "relative h-1 min-w-[70px] rounded-full bg-[#98BFFF1C]/20",
                            children: (0, n.jsx)("div", {
                                className: "absolute left-0 top-0 h-1 rounded-full bg-[#E38833]",
                                style: {
                                    width: "".concat(s, "%")
                                }
                            })
                        }), s, "%"]
                    })
                })
            }
            var v = r(46384),
                j = r(65741);

            function OrderRecord(e) {
                let {
                    order: t,
                    setFilter: r
                } = e, a = { ...t,
                    token: (0, d.Z)(null == t ? void 0 : t.tokenAddress)
                }, s = [(0, n.jsx)(j.Z, {
                    order: a,
                    token: a.token
                }), (0, n.jsx)(OfferedTokensCell, {
                    order: a
                }), (0, n.jsx)(o.Z, {
                    num: a.requestedETHAmount
                }), (0, n.jsx)(ProgressCell, {
                    order: a
                }), (0, n.jsx)(o.Z, {
                    num: a[c.I.formattedPricePerToken]
                }), (0, n.jsx)(h.Z, {
                    order: a
                }), (0, n.jsx)(OrderStateLabel, {
                    state: a.state
                }), (0, n.jsx)(v.Z, {
                    value: a[c.I.createdAt]
                })];
                return a.token && (0, n.jsx)("tr", {
                    className: "cursor-pointer even:bg-sea-300/10",
                    children: s.map((e, t) => (0, n.jsx)(p.Z, {
                        orderId: a.id,
                        setFilter: r,
                        children: e
                    }, "order-record-cell-".concat(t)))
                })
            }
        },
        7223: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return OrdersTableHeaders
                }
            });
            var n = r(57437),
                a = r(67057),
                s = r(67532),
                l = r(8365),
                i = r(47834),
                o = r(12025),
                c = r(79043);

            function OrdersTableHeaders(e) {
                let {
                    visibleFields: t,
                    filter: r,
                    setFilter: d,
                    sortingEnabled: u = !0
                } = e;
                return (0, n.jsx)(n.Fragment, {
                    children: Object.entries(t).map((e, t) => {
                        let [f, m] = e;
                        return (0, n.jsx)("th", {
                            className: "px-3 py-2 first:pl-5 last:pr-5 lg:first:pl-10 lg:last:pr-10",
                            children: (0, n.jsxs)("span", {
                                className: "flex items-center justify-start gap-1 text-xs font-normal leading-none text-blue-gray-50",
                                children: [m, f === c.I.priceDelta && (0, n.jsx)(o.Tooltip, {
                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                    content: (0, n.jsx)("span", {
                                        children: "Markup/markdown of this order compared to Uniswap price."
                                    }),
                                    children: (0, n.jsx)(a.Z, {
                                        className: "h-4 w-4"
                                    })
                                }), u && [c.I.availableTokens, c.I.formattedPricePerToken, c.I.createdAt].includes(f) && (0, n.jsx)(o.Button, {
                                    variant: "text",
                                    className: "text--blue-gray-50 grid place-items-center p-1",
                                    onClick: () => d(e => {
                                        let t = e[c.I.orderBy],
                                            r = e[c.I.orderDirection];
                                        return { ...e,
                                            [c.I.orderBy]: f,
                                            [c.I.orderDirection]: t === f && "desc" === r ? "asc" : "desc"
                                        }
                                    }),
                                    children: r[c.I.orderBy] === f ? "desc" === r[c.I.orderDirection] ? (0, n.jsx)(s.Z, {
                                        className: "w-4"
                                    }) : (0, n.jsx)(l.Z, {
                                        className: "w-4"
                                    }) : (0, n.jsx)(i.Z, {
                                        className: "w-4 opacity-40"
                                    })
                                })]
                            })
                        }, f)
                    })
                })
            }
        },
        54684: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return CustomConnectButton
                }
            });
            var n = r(57437),
                a = r(12025),
                s = r(82256),
                l = r(16691),
                i = r.n(l),
                o = r(2265),
                c = r(56926),
                d = r(54844);

            function CustomConnectButton(e) {
                let {
                    hash: t,
                    href: r
                } = e, {
                    address: l
                } = (0, c.mA)(), [u, f] = (0, o.useState)();
                (0, o.useEffect)(() => {
                    l && (f((0, n.jsx)(a.Spinner, {
                        color: "blue",
                        className: "relative -mt-px h-3 w-3"
                    })), fetch("/api/sea-rank?address=" + l).then(e => e.ok ? e.text() : "?").then(f).catch(() => f("?")))
                }, [l]);
                let m = (0, d.Z)();
                return (0, n.jsx)(s.NL.Custom, {
                    children: e => {
                        var t;
                        let {
                            account: r,
                            chain: a,
                            openAccountModal: s,
                            openChainModal: l,
                            openConnectModal: o,
                            authenticationStatus: c,
                            mounted: d,
                            accountStatus: f
                        } = e, p = d && "loading" !== c;
                        return p ? (0, n.jsx)("div", {
                            className: "flex gap-3",
                            children: p && r && a && (!c || "authenticated" === c) ? a.unsupported ? (0, n.jsx)("button", {
                                className: "hover:bg-slate-600 flex h-[34px] items-center rounded-full bg-red-500 bg-opacity-50 px-6 font-comforta text-sm text-white shadow-none transition-all hover:bg-opacity-70",
                                onClick: l,
                                type: "button",
                                children: "Wrong network"
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("button", {
                                    onClick: s,
                                    type: "button",
                                    className: "\n                                        hover:bg-slate-600\n                                        flex\n                                        h-[34px]\n                                        w-full\n                                        items-center\n                                        justify-center\n                                        gap-2\n                                        rounded-full\n                                        bg-blue-300\n                                        px-4\n                                        font-comforta\n                                        text-xs\n                                        font-black\n                                        text-white\n                                        transition-all\n                                        hover:bg-opacity-50\n                                        md:text-sm\n                                        ",
                                    children: [(0, n.jsx)("span", {
                                        className: "text-lg",
                                        children: u
                                    }), !m && (0, n.jsx)("span", {
                                        className: "relative top-px",
                                        children: r.displayName
                                    })]
                                }), (0, n.jsx)("button", {
                                    onClick: l,
                                    className: "flex items-center justify-center",
                                    type: "button",
                                    children: a.hasIcon && (0, n.jsx)("div", {
                                        style: {
                                            background: a.iconBackground,
                                            width: 30,
                                            height: 30,
                                            borderRadius: 999,
                                            overflow: "hidden"
                                        },
                                        children: a.iconUrl && (0, n.jsx)(i(), {
                                            alt: null !== (t = a.name) && void 0 !== t ? t : "Chain icon",
                                            src: a.iconUrl,
                                            width: 30,
                                            height: 30,
                                            className: "object-contain"
                                        })
                                    })
                                })]
                            }) : (0, n.jsx)("button", {
                                onClick: o,
                                type: "button",
                                className: "\n                                        hover:bg-slate-600\n                                        flex\n                                        h-[34px]\n                                        w-full\n                                        items-center\n                                        justify-center\n                                        whitespace-nowrap\n                                        rounded-full\n                                        bg-blue-300\n                                        px-4\n                                        font-comforta\n                                        text-xs\n                                        font-black\n                                        text-white\n                                        transition-all\n                                        hover:bg-opacity-50\n                                        md:text-sm\n                                        ",
                                children: "Connect Wallet"
                            })
                        }) : null
                    }
                })
            }
        },
        17622: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return HashTooltip
                }
            });
            var n = r(57437),
                a = r(36108),
                s = r(67805),
                l = r(12025);
            r(54440);
            var i = r(2390),
                o = r.n(i),
                c = r(61396),
                d = r.n(c),
                u = r(2265),
                f = r(90626);

            function HashTooltip(e) {
                let {
                    hash: t,
                    href: r,
                    hideAddress: i = !1,
                    copyTooltip: c = !1,
                    chars: m = 4,
                    copyLabel: p = "Copy"
                } = e, h = (0, f.Z)({
                    hash: t,
                    chars: m
                }), [x, b] = (0, u.useState)(!1);
                return (0, n.jsxs)("span", {
                    className: "inline-flex items-center",
                    children: [!i && (0, n.jsx)(l.Tooltip, {
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
                        children: r ? (0, n.jsx)(d(), {
                            href: r,
                            ...r.startsWith("http") ? {
                                target: "_blank",
                                rel: "noopener noreferrer"
                            } : {},
                            children: h
                        }) : h
                    }), c && (0, n.jsx)(l.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: x ? "Copied!" : p,
                        children: (0, n.jsx)("button", {
                            onClick: () => {
                                o()(t), b(!0), setTimeout(() => {
                                    b(!1)
                                }, 3e3)
                            },
                            type: "button",
                            children: x ? (0, n.jsx)(s.Z, {
                                className: "ml-2 h-4 w-4 text-green-200"
                            }) : (0, n.jsx)(a.Z, {
                                className: "ml-2 h-4 w-4 text-white"
                            })
                        })
                    })]
                })
            }
        },
        86191: function(e, t, r) {
            "use strict";
            var n = r(57437),
                a = r(54440),
                s = r.n(a);
            t.Z = {
                Up: e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: s()("h-4 w-4", t),
                        children: (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "fill-current",
                            viewBox: "0 0 512 512",
                            children: (0, n.jsx)("path", {
                                d: "M448 368L256 144 64 368h384z"
                            })
                        })
                    })
                },
                Down: e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: s()("h-4 w-4", t),
                        children: (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "fill-current",
                            viewBox: "0 0 512 512",
                            children: (0, n.jsx)("path", {
                                d: "M64 144l192 224 192-224H64z"
                            })
                        })
                    })
                }
            }
        },
        72264: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return LinkWrap
                }
            });
            var n = r(57437),
                a = r(61396),
                s = r.n(a);

            function LinkWrap(e) {
                let {
                    children: t,
                    href: r,
                    className: a,
                    onClick: l,
                    ...i
                } = e;
                return r ? (0, n.jsx)(s(), {
                    href: r,
                    className: a,
                    onClick: l,
                    ...i,
                    children: t
                }) : (0, n.jsx)("div", {
                    className: a,
                    onClick: l,
                    ...i,
                    children: t
                })
            }
        },
        28843: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return NoPriceData
                }
            });
            var n = r(57437),
                a = r(79425),
                s = r(12025);

            function NoPriceData() {
                return (0, n.jsx)("div", {
                    children: (0, n.jsx)(s.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "No market price could be retrieved for this token",
                        children: (0, n.jsx)(a.Z, {
                            className: "h-4 w-4 text-yellow-600"
                        })
                    })
                })
            }
        },
        67705: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return SmallDecimal
                }
            });
            var n = r(57437),
                a = r(12025),
                s = r(16691),
                l = r.n(s),
                i = r(2265),
                o = r(63160),
                c = r(34065);

            function SmallDecimal(e) {
                let {
                    num: t,
                    className: r
                } = e, s = function(e) {
                    var t;
                    let [r, n] = (null !== (t = null == e ? void 0 : e.toString()) && void 0 !== t ? t : "0").split(".");
                    if (!n) return {
                        int: r,
                        zeros: 0,
                        decimals: ""
                    };
                    let a = 0;
                    for (;
                        "0" === n[a];) a++;
                    return {
                        int: r,
                        zeros: a,
                        decimals: n.slice(a)
                    }
                }(t), {
                    ethUsd: d
                } = (0, i.useContext)(c.F);
                return (0, n.jsx)(a.Tooltip, {
                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                    content: (0, n.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, n.jsxs)("span", {
                            children: [t, " ETH"]
                        }), (0, n.jsxs)("span", {
                            className: "text-end text-xs",
                            children: ["(~$", (t * d).toFixed(5), " USD)"]
                        })]
                    }),
                    children: (0, n.jsxs)("div", {
                        className: r || "flex flex-row tracking-wide",
                        children: [(0, n.jsx)(l(), {
                            src: o.Z,
                            alt: "ether symbol",
                            className: "mr-0.5 h-3 w-3"
                        }), (0, n.jsx)("span", {
                            children: s.int
                        }), ".", !!s.zeros && (0, n.jsxs)(n.Fragment, {
                            children: ["0", (0, n.jsx)("span", {
                                className: "relative top-1 mr-px text-[0.75em]",
                                children: s.zeros
                            })]
                        }), (0, n.jsx)("span", {
                            children: s.decimals.slice(0, 4)
                        })]
                    })
                })
            }
        },
        9290: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return TokenWarning
                }
            });
            var n = r(57437),
                a = r(79425),
                s = r(12025),
                l = r(2265),
                i = r(10545),
                o = r(51360);

            function TokenWarning(e) {
                let {
                    token: t,
                    iconOnly: r = !1,
                    verbose: c = !1
                } = e, {
                    uniswapLabsVerifiedTokens: d
                } = (0, l.useContext)(o.M), u = d.some(e => e.address.toLowerCase() === t.address.toLowerCase());
                return !u && (0, n.jsx)(s.Tooltip, {
                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                    content: (0, n.jsxs)("div", {
                        className: "flex flex-col text-center",
                        children: [(0, n.jsxs)("span", {
                            children: ["$", t.symbol, " isn't traded on leading centralized exchanges,"]
                        }), (0, n.jsx)("span", {
                            children: "or frequently swapped on main decentralized exchanges."
                        }), (0, n.jsx)("span", {
                            children: "Always double check the token contract address"
                        }), (0, n.jsx)("span", {
                            children: "and conduct your own research before trading."
                        })]
                    }),
                    children: r ? (0, n.jsx)(a.Z, {
                        className: "h-4 w-4 text-yellow-700"
                    }) : c ? (0, n.jsxs)(i.bZ, {
                        variant: "warning",
                        children: [(0, n.jsx)(i.bZ.Icon, {
                            children: (0, n.jsx)(a.Z, {
                                className: "h-5 w-5"
                            })
                        }), (0, n.jsxs)(i.bZ.Description, {
                            children: [(0, n.jsxs)("span", {
                                className: "font-medium",
                                children: ["$", t.symbol]
                            }), " ", "is not traded on leading centralized exchanges, or frequently swapped on main decentralized exchanges."]
                        })]
                    }) : (0, n.jsxs)("span", {
                        className: "flex select-none items-center gap-1 rounded-lg bg-yellow-50 py-0.5 pl-1.5 pr-2 text-xs font-bold leading-none text-yellow-900/90",
                        children: [(0, n.jsx)(a.Z, {
                            className: "mt-px h-4 w-4"
                        }), "Warning"]
                    })
                })
            }
        },
        10545: function(e, t, r) {
            "use strict";
            r.d(t, {
                bZ: function() {
                    return Alert
                }
            });
            var n = r(57437),
                a = r(39213),
                s = r(54440),
                l = r.n(s);
            r(2265);
            var i = r(43436);
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
                        variant: r,
                        size: a,
                        children: s
                    } = e, c = (0, i.x)(s, "Title").length > 0, d = (0, i.x)(s, "Icon").length > 0;
                    return (0, n.jsxs)("div", {
                        role: "alert",
                        className: l()(o({
                            variant: r,
                            size: a
                        }), !c && d ? "items-center gap-2" : "flex-col", t),
                        children: [c ? d ? (0, n.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, n.jsx)("div", {
                                className: "flex-shrink-0",
                                children: (0, i.x)(s, "Icon")
                            }), (0, i.x)(s, "Title")]
                        }) : (0, i.x)(s, "Title") : d && (0, n.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, i.x)(s, "Icon")
                        }), (0, i.x)(s, "Description")]
                    })
                },
                Title = e => {
                    let {
                        className: t,
                        children: r
                    } = e;
                    return (0, n.jsx)("h3", {
                        className: l()("font-medium", t),
                        children: r
                    })
                };
            Title.displayName = "Title", Alert.Title = Title;
            let Description = e => {
                let {
                    className: t,
                    children: r
                } = e;
                return (0, n.jsx)("div", {
                    className: l()("text-sm", t),
                    children: r
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
        43436: function(e, t, r) {
            "use strict";
            r.d(t, {
                x: function() {
                    return getChild
                }
            });
            var n = r(2265);
            let getChild = (e, t) => n.Children.map(e, e => {
                var r;
                if ((null === (r = e.type) || void 0 === r ? void 0 : r.displayName) === t) return e
            })
        },
        31185: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return a
                }
            });
            var n = r(33948);
            let a = {
                name: "OTSea",
                symbol: "OTSEA",
                address: n.L,
                thumb: "https://otsea.io/otsea-erc20-thumb.jpg",
                balance: 0,
                decimals: 18
            }
        },
        37678: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return s
                },
                d: function() {
                    return a
                }
            });
            var n = r(79043);
            let a = Object.freeze({
                    [n.I.id]: "Order",
                    [n.I.requester]: "Requester",
                    [n.I.fulfiller]: "Fulfiller",
                    [n.I.tokenAddress]: "Token Address",
                    [n.I.token]: "Token",
                    [n.I.initialTokens]: "Initial Amount",
                    [n.I.availableTokens]: "Offered",
                    [n.I.requestedETHAmount]: "For",
                    [n.I.fillProgress]: "Fill Progress",
                    [n.I.formattedPricePerToken]: "Price/Token",
                    [n.I.priceDelta]: "Price Delta",
                    [n.I.state]: "State",
                    [n.I.blockNumber]: "Block Number",
                    [n.I.createdAt]: "Created",
                    [n.I.orderBy]: "Order By"
                }),
                s = Object.freeze({
                    [n.I.transactionHash]: "Tx Hash",
                    [n.I.id]: "Order",
                    [n.I.token]: "Token",
                    [n.I.tokenAmount]: "Fill Amount",
                    [n.I.ethAmount]: "ETH Amount",
                    [n.I.formattedPricePerToken]: "Price/Token",
                    [n.I.state]: "State",
                    [n.I.blockNumber]: "Block Number",
                    [n.I.createdAt]: "Timestamp",
                    [n.I.orderBy]: "Order By"
                })
        },
        74157: function(e, t, r) {
            "use strict";
            r.d(t, {
                K: function() {
                    return n
                }
            });
            let n = new class {
                constructor(e) {
                    return Object.freeze(e.reduce((e, t, r) => (e[t] = r, e), e))
                }
            }(["Open", "Fulfilled", "Settled"])
        },
        51360: function(e, t, r) {
            "use strict";
            r.d(t, {
                M: function() {
                    return a
                }
            });
            var n = r(2265);
            let a = (0, n.createContext)({})
        },
        40603: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return useAlertDialog
                }
            });
            var n = r(57437),
                a = r(2265),
                s = r(72940),
                l = r(17518);

            function useAlertDialog() {
                let e = (0, a.useRef)(),
                    t = (0, l.Z)(e);
                return {
                    AlertDialog: function(r) {
                        let {
                            title: a,
                            message: l
                        } = r;
                        return (0, n.jsxs)("dialog", {
                            ref: e,
                            className: "scale-in-center relative w-1/2 cursor-default rounded-3xl bg-black bg-opacity-20 px-6 pb-6 pt-4 shadow-2xl backdrop-blur md:w-[30vw] md:min-w-[500px] md:px-8",
                            children: [(0, n.jsx)(s.Z, {
                                handleClose: t
                            }), (0, n.jsx)("h3", {
                                className: "mb-4 mt-1 text-xl font-extrabold text-white",
                                children: a
                            }), (0, n.jsx)("p", {
                                className: "text-white",
                                children: l
                            })]
                        })
                    },
                    showAlertDialog: () => {
                        e.current.showModal()
                    }
                }
            }
        },
        17518: function(e, t, r) {
            "use strict";

            function useHandleDialogClose(e) {
                return () => {
                    let t = e.current;
                    t && (t.onanimationend = () => {
                        t.onanimationend = () => !1, t.classList.replace("scale-out-center", "scale-in-center"), t.close()
                    }, t.classList.replace("scale-in-center", "scale-out-center"))
                }
            }
            r.d(t, {
                Z: function() {
                    return useHandleDialogClose
                }
            })
        },
        15276: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return useIsOrderRestricted
                }
            });
            var n = r(62936),
                a = r(56926);

            function useIsOrderRestricted(e) {
                var t, r, s;
                let l = (0, a.mA)();
                return (null == e ? void 0 : e.whitelistedAddress) !== n.D && (!l.address || ![null == e ? void 0 : null === (t = e.requester) || void 0 === t ? void 0 : t.toLocaleLowerCase(), null == e ? void 0 : null === (r = e.whitelistedAddress) || void 0 === r ? void 0 : r.toLocaleLowerCase()].includes(null === (s = l.address) || void 0 === s ? void 0 : s.toLocaleLowerCase()))
            }
        },
        27311: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return useOrderColors
                }
            }), r(54440), r(79043);
            var n = r(74157);

            function useOrderColors(e) {
                let makePalette = e => ["bg-".concat(e, "-200"), e, "text-".concat(e, "-50")],
                    [t, r, a] = {
                        [n.K.Open]: makePalette("green"),
                        [n.K.Fulfilled]: makePalette("gray"),
                        [n.K.Settled]: makePalette("gray")
                    }[e.state] || ["bg-gray-500", "gray", "text-gray-100"],
                    s = e.state === n.K.Open ? "success" : "default";
                return {
                    buttonColor: t,
                    progressColor: r,
                    circularProgress: s,
                    textColor: a
                }
            }
        },
        77676: function(e, t, r) {
            "use strict";

            function useOrderProgress(e) {
                return Math.round(1e6 * (e.initialTokens - e.availableTokens) / (100 * e.initialTokens)) / 100
            }
            r.d(t, {
                Z: function() {
                    return useOrderProgress
                }
            })
        },
        90626: function(e, t, r) {
            "use strict";

            function useShortHash(e) {
                let {
                    hash: t,
                    chars: r = 4
                } = e;
                return t.slice(0, r) + "..." + t.slice(-r)
            }
            r.d(t, {
                Z: function() {
                    return useShortHash
                }
            })
        },
        78258: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return useToken
                }
            });
            var n = r(2265),
                a = r(54034);

            function useToken() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = null == e ? void 0 : e.toLowerCase(),
                    [r, s] = (0, n.useState)(),
                    {
                        searchTokenHandler: l
                    } = (0, a.Z)({
                        token: r,
                        searchQuery: t,
                        setSearchResults: e => {
                            s(e[0])
                        }
                    });
                return (0, n.useEffect)(() => {
                    t && l()
                }, [t]), r
            }
        },
        62035: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return useTokenPrice
                }
            });
            var n = r(2265);
            r(31185);
            var a = r(34065),
                s = r(51360);

            function useTokenPrice(e) {
                let {
                    ethUsd: t
                } = (0, n.useContext)(a.F), {
                    addTokensToFetch: r,
                    removeTokensToFetch: l,
                    tokenPrices: i
                } = (0, n.useContext)(s.M);
                return (0, n.useEffect)(() => {
                    r(e)
                }, [e, r, l]), i[e.address.toLowerCase()]
            }
        },
        54034: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return useTokenSearch
                }
            });
            var n = r(14484),
                a = r(2265);
            let s = Object.freeze({
                TOKEN_INFO: "tokenInfo"
            });
            var l = r(28316);
            let i = new l.x;
            async function fetchTokenByContract(e) {
                try {
                    var t, r, a;
                    let {
                        data: n
                    } = await i.coinByAddress(e);
                    return {
                        id: n.id,
                        symbol: n.symbol.toUpperCase(),
                        address: n.platforms.ethereum,
                        name: n.name,
                        thumb: (null === (t = n.image) || void 0 === t ? void 0 : t.large) || (null === (r = n.image) || void 0 === r ? void 0 : r.small) || (null === (a = n.image) || void 0 === a ? void 0 : a.thumb),
                        decimals: n.detail_platforms.ethereum.decimal_place
                    }
                } catch (t) {
                    try {
                        let t = await (0, n.JH)({
                            contracts: ["symbol", "name", "decimals"].map(t => ({
                                address: e,
                                abi: n.em,
                                functionName: t
                            }))
                        });
                        if (t.some(e => {
                                let {
                                    status: t
                                } = e;
                                return "success" !== t
                            })) throw Error("Cannot read contract.");
                        let [r, a, s] = t.map(e => {
                            let {
                                result: t
                            } = e;
                            return t
                        });
                        return {
                            symbol: r.toUpperCase(),
                            name: a,
                            decimals: s,
                            address: e,
                            thumb: "https://ui-avatars.com/api/?name=" + a
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
                    let r = e.find(e => e.address.toLowerCase() === t);
                    return null != r || (r = await fetchTokenByContract(t)), r ? [r] : []
                }
                try {
                    let r = e.filter(e => {
                        let {
                            name: r,
                            symbol: n
                        } = e;
                        return (null == r ? void 0 : r.toLowerCase().includes(t)) || (null == n ? void 0 : n.toLowerCase().includes(t))
                    });
                    return r.length || (r = await fetchTokensByNameOrSymbol(t)), r || []
                } catch (e) {
                    console.log("error here"), console.log(e)
                }
            }

            function useTokenSearch(e) {
                var t;
                let {
                    token: r,
                    searchQuery: n,
                    setLoading: l = () => null,
                    setSearchResults: i
                } = e, [o, c] = (0, a.useState)(JSON.parse(localStorage.getItem(s.TOKEN_INFO) || "[]")), handleSetTokenInfo = e => {
                    c(t => {
                        1 === e.length && delete e[0].balance;
                        let r = t.concat(e);
                        return localStorage.setItem(s.TOKEN_INFO, JSON.stringify(r)), r
                    })
                };
                (0, a.useEffect)(() => {
                    o.length || fetch("/api/token-info").then(e => e.json()).then(handleSetTokenInfo)
                }, [o]);
                let d = !!r && (null === (t = r.address) || void 0 === t ? void 0 : t.toLowerCase());
                return (0, a.useEffect)(() => {
                    d && !o.find(e => {
                        let {
                            address: t
                        } = e;
                        return t.toLowerCase() === d
                    }) && handleSetTokenInfo([r])
                }, [d]), {
                    searchTokenHandler: async () => {
                        try {
                            if (l(!0), !n) return i([]);
                            let e = await getTokenData(o, n.toLowerCase());
                            i(e)
                        } catch (e) {
                            console.log(e)
                        } finally {
                            l(!1)
                        }
                    },
                    getTokenData: (0, a.useCallback)(e => getTokenData(o, e), [o])
                }
            }
        },
        28316: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return Coingecko
                },
                x: function() {
                    return CoingeckoClient
                }
            });
            var n = r(72007),
                a = r(14894),
                s = r(94863),
                l = r(57437),
                i = r(92173),
                o = r(2265),
                c = r(34065),
                d = new WeakMap;
            let CoingeckoClient = class CoingeckoClient {
                ethUsd() {
                    return (0, n._)(this, d).get("simple/price?ids=ethereum&vs_currencies=usd")
                }
                coinById(e) {
                    return (0, n._)(this, d).get("coins/".concat(e))
                }
                coinByAddress(e) {
                    return (0, n._)(this, d).get("coins/1/contract/".concat(e))
                }
                search(e) {
                    return (0, n._)(this, d).get("search?query=".concat(e))
                }
                get(e) {
                    return (0, n._)(this, d).get(e)
                }
                constructor() {
                    (0, a._)(this, d, {
                        writable: !0,
                        value: void 0
                    }), (0, s._)(this, d, i.Z.create({
                        baseURL: "https://api.coingecko.com/api/v3/"
                    })), (0, n._)(this, d).interceptors.response.use(e => e, e => {
                        var t;
                        let {
                            config: r
                        } = e;
                        return r.baseURL.includes("api.coingecko") && (null === (t = e.response) || void 0 === t ? void 0 : t.status) !== 404 ? (r.baseURL = "/api/", r.url = "cg?path=".concat(encodeURIComponent(r.url)), (0, n._)(this, d).request(r)) : Promise.reject(e)
                    })
                }
            };
            let u = new CoingeckoClient;

            function Coingecko(e) {
                let {
                    children: t
                } = e, [r, n] = (0, o.useState)(0);
                return (0, o.useEffect)(() => {
                    let e;
                    return (async () => {
                        let {
                            data: t
                        } = await u.ethUsd();
                        n(t.ethereum.usd), e = setInterval(async () => {
                            let {
                                data: e
                            } = await u.ethUsd();
                            n(e.ethereum.usd)
                        }, 3e4)
                    })(), () => clearInterval(e)
                }, []), (0, l.jsx)(c.F.Provider, {
                    value: {
                        ethUsd: r,
                        ethToUsd: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            return Number(Number(e * r).toFixed(t)).toLocaleString()
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
        9875: function(e) {
            ! function() {
                "use strict";
                var t = {
                        815: function(e) {
                            e.exports = function(e, r, n, a) {
                                r = r || "&", n = n || "=";
                                var s = {};
                                if ("string" != typeof e || 0 === e.length) return s;
                                var l = /\+/g;
                                e = e.split(r);
                                var i = 1e3;
                                a && "number" == typeof a.maxKeys && (i = a.maxKeys);
                                var o = e.length;
                                i > 0 && o > i && (o = i);
                                for (var c = 0; c < o; ++c) {
                                    var d, u, f, m, p = e[c].replace(l, "%20"),
                                        h = p.indexOf(n);
                                    (h >= 0 ? (d = p.substr(0, h), u = p.substr(h + 1)) : (d = p, u = ""), f = decodeURIComponent(d), m = decodeURIComponent(u), Object.prototype.hasOwnProperty.call(s, f)) ? t(s[f]) ? s[f].push(m) : s[f] = [s[f], m]: s[f] = m
                                }
                                return s
                            };
                            var t = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }
                        },
                        577: function(e) {
                            var stringifyPrimitive = function(e) {
                                switch (typeof e) {
                                    case "string":
                                        return e;
                                    case "boolean":
                                        return e ? "true" : "false";
                                    case "number":
                                        return isFinite(e) ? e : "";
                                    default:
                                        return ""
                                }
                            };
                            e.exports = function(e, n, a, s) {
                                return (n = n || "&", a = a || "=", null === e && (e = void 0), "object" == typeof e) ? map(r(e), function(r) {
                                    var s = encodeURIComponent(stringifyPrimitive(r)) + a;
                                    return t(e[r]) ? map(e[r], function(e) {
                                        return s + encodeURIComponent(stringifyPrimitive(e))
                                    }).join(n) : s + encodeURIComponent(stringifyPrimitive(e[r]))
                                }).join(n) : s ? encodeURIComponent(stringifyPrimitive(s)) + a + encodeURIComponent(stringifyPrimitive(e)) : ""
                            };
                            var t = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            };

                            function map(e, t) {
                                if (e.map) return e.map(t);
                                for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                                return r
                            }
                            var r = Object.keys || function(e) {
                                var t = [];
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                                return t
                            }
                        }
                    },
                    r = {};

                function __nccwpck_require__(e) {
                    var n = r[e];
                    if (void 0 !== n) return n.exports;
                    var a = r[e] = {
                            exports: {}
                        },
                        s = !0;
                    try {
                        t[e](a, a.exports, __nccwpck_require__), s = !1
                    } finally {
                        s && delete r[e]
                    }
                    return a.exports
                }
                __nccwpck_require__.ab = "//";
                var n = {};
                n.decode = n.parse = __nccwpck_require__(815), n.encode = n.stringify = __nccwpck_require__(577), e.exports = n
            }()
        },
        52223: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(2265),
                l = a(r(9875)),
                i = r(24033);
            t.default = function(e) {
                var t = (0, i.useRouter)(),
                    r = (0, s.useState)(e),
                    a = r[0],
                    o = r[1],
                    c = (0, i.usePathname)() + function(t) {
                        var r = n({}, t);
                        for (var a in r) r[a] === e[a] && delete r[a];
                        return "?" + l.default.stringify(r)
                    }(a);
                return (0, s.useEffect)(function() {
                    t.push(c)
                }, [c]), (0, s.useEffect)(function() {
                    o(n(n({}, e), l.default.parse(window.location.search.slice(1))))
                }, []), [a, o]
            }
        },
        48357: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let a = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, a) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                }))
            });
            t.Z = a
        },
        23950: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let a = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, a) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                }))
            });
            t.Z = a
        },
        47834: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let a = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, a) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = a
        },
        67532: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let a = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, a) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm0 4.5A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm15-.75A.75.75 0 0118 9v10.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V9a.75.75 0 01.75-.75zm-15 5.25a.75.75 0 01.75-.75h9.75a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = a
        },
        8365: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let a = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, a) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = a
        },
        34729: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let a = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, a) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: a,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = a
        },
        10795: function(e, t, r) {
            "use strict";
            r.d(t, {
                X: function() {
                    return d
                }
            });
            var n = r(34480),
                a = (0, r(68037).tv)({
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
                s = r(59762),
                l = r(48794),
                i = r(2265),
                o = r(57437),
                c = (0, n.Gp)((e, t) => {
                    let {
                        Component: r,
                        children: c,
                        getSkeletonProps: d,
                        getContentProps: u
                    } = function(e) {
                        let [t, r] = (0, n.oe)(e, a.variantKeys), {
                            as: o,
                            children: c,
                            isLoaded: d = !1,
                            className: u,
                            classNames: f,
                            ...m
                        } = t, p = (0, i.useMemo)(() => a({ ...r
                        }), [...Object.values(r), c]), h = (0, s.W)(null == f ? void 0 : f.base, u);
                        return {
                            Component: o || "div",
                            children: c,
                            slots: p,
                            classNames: f,
                            getSkeletonProps: (e = {}) => ({
                                "data-loaded": (0, l.PB)(d),
                                className: p.base({
                                    class: (0, s.W)(h, null == e ? void 0 : e.className)
                                }),
                                ...m
                            }),
                            getContentProps: (e = {}) => ({
                                className: p.content({
                                    class: (0, s.W)(null == f ? void 0 : f.content, null == e ? void 0 : e.className)
                                })
                            })
                        }
                    }({ ...e
                    });
                    return (0, o.jsx)(r, {
                        ref: t,
                        ...d(),
                        children: (0, o.jsx)("div", { ...u(),
                            children: c
                        })
                    })
                });
            c.displayName = "NextUI.Skeleton";
            var d = c
        }
    },
    function(e) {
        e.O(0, [4590, 7830, 2279, 728, 1108, 6926, 7562, 939, 7133, 7357, 6985, 6843, 1396, 9936, 8735, 2971, 2472, 1744], function() {
            return e(e.s = 65462)
        }), _N_E = e.O()
    }
]);