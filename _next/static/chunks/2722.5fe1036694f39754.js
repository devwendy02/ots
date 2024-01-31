"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2722], {
        13080: function(e, t, n) {
            let r = n(2655),
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
                let s;
                let i = t ? { ...r.defaultOptions,
                    ...t
                } : r.defaultOptions;
                if (!Array.isArray(i.units) || !i.units.length) throw Error("Option `units` must be a non-empty array");
                try {
                    s = a.parseValue(e)
                } catch (t) {
                    return t instanceof Error && console.warn(`WARN: ${t.message} (millify)`), String(e)
                }
                let o = s < 0 ? "-" : "",
                    c = 0;
                for (let e of divider(s = Math.abs(s))) s = e, c += 1;
                let d = c >= i.units.length;
                if (d) return e.toString();
                let u = a.roundTo(s, i.precision);
                for (let e of divider(u)) u = e, c += 1;
                let h = null !== (n = i.units[c]) && void 0 !== n ? n : "",
                    m = i.lowercase ? h.toLowerCase() : h,
                    p = i.space ? " " : "",
                    x = u.toLocaleString(null !== (l = i.locales) && void 0 !== l ? l : a.getLocales(), {
                        minimumFractionDigits: a.getFractionDigits(u)
                    });
                return `${o}${x}${p}${m}`
            }
        },
        2655: function(e, t) {
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
        52722: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return App
                }
            });
            var r = n(57437);
            n(18998), n(8780), n(83343);
            var a = n(12025),
                l = n(54440),
                s = n.n(l),
                i = n(16691),
                o = n.n(i),
                c = n(61396),
                d = n.n(c),
                u = n(24033),
                h = n(2265),
                m = n(14627),
                p = n(54684),
                x = n(50392);
            let f = h.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, r) {
                return h.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: r,
                    "aria-labelledby": t
                }, n), e ? h.createElement("title", {
                    id: t
                }, e) : null, h.createElement("path", {
                    d: "M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"
                }))
            });
            var g = n(28035),
                C = n(76303),
                b = {
                    src: "/_next/static/media/ethIcon.4fa34f7d.svg",
                    height: 16,
                    width: 16,
                    blurWidth: 0,
                    blurHeight: 0
                },
                v = {
                    src: "/_next/static/media/gas.631c4e54.svg",
                    height: 13,
                    width: 14,
                    blurWidth: 0,
                    blurHeight: 0
                },
                j = n(12169);

            function VerticalSeparator(e) {
                let {
                    className: t
                } = e;
                return (0, r.jsx)("div", {
                    className: s()("h-5 w-px bg-gray-300/50", t)
                })
            }

            function DesktopFooter(e) {
                var t, n;
                let {
                    gas: l,
                    data: i,
                    links: c,
                    otseaPrice: u,
                    ethUsd: h,
                    ethToUsd: m,
                    musicPaused: p,
                    setMusicPaused: x
                } = e;
                return (0, r.jsxs)("div", {
                    className: s()(["hidden md:flex md:h-8 md:flex-row md:justify-between lg:items-center", "translate-x-0 scale-100 transition-all duration-300", "bg-black/50 px-4 text-xs text-white backdrop-blur"]),
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center gap-3.5 font-comforta",
                        children: [(0, r.jsxs)("div", {
                            className: "hidden select-none items-center gap-2 lg:flex",
                            children: [(0, r.jsx)("span", {
                                className: "mt-0.5 text-green-500",
                                children: "Live Data"
                            }), (0, r.jsxs)("span", {
                                className: "relative flex w-2",
                                children: [(0, r.jsx)("span", {
                                    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"
                                }), (0, r.jsx)("span", {
                                    className: "relative inline-flex h-2 w-2 rounded-full bg-green-500"
                                })]
                            })]
                        }), (0, r.jsx)(VerticalSeparator, {
                            className: "hidden lg:block"
                        }), l && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, r.jsx)(o(), {
                                    src: v,
                                    alt: "Gas Icon",
                                    className: "h-3 w-auto"
                                }), (0, r.jsx)("span", {
                                    className: "mt-0.5 text-orange-500",
                                    children: Math.floor(C.bM(l, "gwei"))
                                })]
                            }), (0, r.jsx)(VerticalSeparator, {})]
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, r.jsx)(o(), {
                                src: b,
                                alt: "Ethereum Icon",
                                className: "h-4 w-auto"
                            }), (0, r.jsxs)("span", {
                                className: "mt-0.5 text-orange-500",
                                children: ["$", h]
                            })]
                        }), (0, r.jsx)(VerticalSeparator, {}), (0, r.jsxs)(d(), {
                            className: "flex items-center gap-2",
                            href: "https://dexscreener.com/ethereum/0x37DA9DE38c4094e090c014325f6eF4baEB302626",
                            rel: "noreferrer",
                            target: "_blank",
                            children: [(0, r.jsx)(o(), {
                                src: j.Z,
                                alt: "OTSea Logo",
                                className: "h-3.5 w-auto"
                            }), (0, r.jsxs)("span", {
                                className: "mt-0.5 text-orange-500",
                                children: ["$", u && m(u, 5)]
                            })]
                        }), (0, r.jsx)(VerticalSeparator, {}), (0, r.jsxs)("div", {
                            className: "mt-0.5 flex items-center gap-2",
                            children: ["Orders", " ", (0, r.jsx)("span", {
                                className: "text-orange-500",
                                children: (null == i ? void 0 : null === (t = i.totals[0]) || void 0 === t ? void 0 : t.totalOrders) || 0
                            })]
                        }), (0, r.jsx)(VerticalSeparator, {}), (0, r.jsxs)(d(), {
                            className: "mt-0.5 flex items-center gap-2",
                            href: "https://dune.com/whale_hunter/otsea",
                            rel: "noreferrer",
                            target: "_blank",
                            children: ["Volume", " ", (0, r.jsx)("span", {
                                className: "text-orange-500",
                                children: "$".concat(Number((parseFloat(null == i ? void 0 : null === (n = i.totals[0]) || void 0 === n ? void 0 : n.totalVolume).toFixed(4) / 1e18 * h).toFixed(2)).toLocaleString())
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex items-center gap-2 font-sans",
                        children: [c.map(e => (0, r.jsx)(a.Tooltip, {
                            className: "bg-black bg-opacity-40 px-3 py-2 text-xs backdrop-blur xl:hidden",
                            content: (0, r.jsx)("span", {
                                children: e.label
                            }),
                            children: (0, r.jsxs)(d(), {
                                href: e.href,
                                className: "flex items-center gap-1.5 transition duration-200 hover:text-orange-400 hover:shadow-orange-500 hover:drop-shadow-lg",
                                rel: "noreferrer",
                                target: "_blank",
                                children: [(0, r.jsx)(() => e.icon, {}), (0, r.jsx)("span", {
                                    className: "hidden xl:block",
                                    children: e.label
                                }), (0, r.jsx)(VerticalSeparator, {})]
                            })
                        }, e.label)), (0, r.jsx)(a.Tooltip, {
                            className: "w-24 bg-black bg-opacity-40 px-3 py-2 text-center text-xs backdrop-blur",
                            content: (0, r.jsxs)("span", {
                                children: [p ? "Play" : "Pause", " Music"]
                            }),
                            children: (0, r.jsx)("button", {
                                type: "button",
                                className: s()(["flex h-[18px] w-[18px] items-center justify-center rounded-full p-1 transition-all duration-200", " hover:shadow-orange-500 hover:drop-shadow-lg", p ? "bg-sea-300/60" : "bg-orange-500"]),
                                onClick: () => x(!p),
                                children: (0, r.jsx)(g.Z, {
                                    className: "h-3.5 w-3.5"
                                })
                            })
                        })]
                    })]
                })
            }
            var w = n(13080);

            function Mobile_VerticalSeparator(e) {
                let {
                    className: t
                } = e;
                return (0, r.jsx)("div", {
                    className: s()("h-5 w-px bg-gray-300/50", t)
                })
            }

            function MobileFooter(e) {
                var t, n;
                let {
                    gas: a,
                    data: l,
                    links: i,
                    otseaPrice: c,
                    ethUsd: u,
                    ethToUsd: m,
                    musicPaused: p,
                    setMusicPaused: x
                } = e, [f, y] = (0, h.useState)(!1);
                return (0, r.jsxs)("div", {
                    className: s()([f ? "h-16 justify-around" : "h-8 justify-center", "relative flex flex-col md:hidden", "bg-black/50 px-4 text-xs text-white backdrop-blur"]),
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center justify-center gap-2 font-comforta",
                        children: [(0, r.jsxs)("div", {
                            className: "hidden select-none items-center gap-2 lg:flex",
                            children: [(0, r.jsx)("span", {
                                className: "mt-0.5 text-green-500",
                                children: "Live Data"
                            }), (0, r.jsxs)("span", {
                                className: "relative flex w-2",
                                children: [(0, r.jsx)("span", {
                                    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"
                                }), (0, r.jsx)("span", {
                                    className: "relative inline-flex h-2 w-2 rounded-full bg-green-500"
                                })]
                            })]
                        }), (0, r.jsx)(Mobile_VerticalSeparator, {
                            className: "hidden lg:block"
                        }), a && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, r.jsx)(o(), {
                                    src: v,
                                    alt: "Gas Icon",
                                    className: "h-3 w-auto"
                                }), (0, r.jsx)("span", {
                                    className: "mt-0.5 text-orange-500",
                                    children: Math.floor(C.bM(a, "gwei"))
                                })]
                            }), (0, r.jsx)(Mobile_VerticalSeparator, {})]
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-0.5",
                            children: [(0, r.jsx)(o(), {
                                src: b,
                                alt: "Ethereum Icon",
                                className: "h-4 w-auto"
                            }), (0, r.jsxs)("span", {
                                className: "mt-0.5 text-orange-500",
                                children: ["$", (0, w.ZP)(u)]
                            })]
                        }), (0, r.jsx)(Mobile_VerticalSeparator, {}), (0, r.jsxs)(d(), {
                            className: "flex items-center gap-1",
                            href: "https://dexscreener.com/ethereum/0x37DA9DE38c4094e090c014325f6eF4baEB302626",
                            rel: "noreferrer",
                            target: "_blank",
                            children: [(0, r.jsx)(o(), {
                                src: j.Z,
                                alt: "OTSea Logo",
                                className: "h-3.5 w-auto"
                            }), (0, r.jsxs)("span", {
                                className: "mt-0.5 text-orange-500",
                                children: ["$", c && m(c, 5)]
                            })]
                        }), (0, r.jsx)(Mobile_VerticalSeparator, {}), (0, r.jsxs)("div", {
                            className: "mt-0.5 flex items-center gap-1",
                            children: ["Orders", " ", (0, r.jsx)("span", {
                                className: "text-orange-500",
                                children: (null == l ? void 0 : null === (t = l.totals[0]) || void 0 === t ? void 0 : t.totalOrders) || 0
                            })]
                        }), (0, r.jsx)(Mobile_VerticalSeparator, {}), (0, r.jsxs)(d(), {
                            className: "mt-0.5 flex items-center gap-1",
                            href: "https://dune.com/whale_hunter/otsea",
                            rel: "noreferrer",
                            target: "_blank",
                            children: ["Vol.", " ", (0, r.jsxs)("span", {
                                className: "text-orange-500",
                                children: ["$", (0, w.ZP)(Number((parseFloat(null == l ? void 0 : null === (n = l.totals[0]) || void 0 === n ? void 0 : n.totalVolume).toFixed(4) / 1e18 * u).toFixed(2)))]
                            })]
                        })]
                    }), f && (0, r.jsxs)("div", {
                        className: "flex items-center justify-evenly font-sans",
                        children: [i.map(e => (0, r.jsx)(d(), {
                            href: e.href,
                            className: "transition duration-200 hover:text-orange-400 hover:shadow-orange-500 hover:drop-shadow-lg",
                            rel: "noreferrer",
                            target: "_blank",
                            children: (0, r.jsx)(() => e.icon, {})
                        }, e.label)), (0, r.jsx)("button", {
                            type: "button",
                            className: s()(["flex h-[18px] w-[18px] items-center justify-center rounded-full p-1 transition-all duration-200", "hover:bg-orange-500 hover:shadow-orange-500 hover:drop-shadow-lg", p ? "bg-sea-300/60" : "bg-orange-500"]),
                            onClick: () => x(!p),
                            children: (0, r.jsx)(g.Z, {
                                className: "h-3.5 w-3.5"
                            })
                        })]
                    })]
                })
            }
            var y = n(63019),
                k = n(1290),
                N = n(31185),
                A = n(34065),
                T = n(70682),
                _ = n(62461),
                O = n(44201),
                E = n(62035);
            let L = [{
                label: "Buy $OTSEA",
                href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x5da151b95657e788076d04d56234bd93e409cb09",
                icon: (0, r.jsx)(k.Z, {
                    className: "-mr-1 h-[22px] w-[22px]"
                })
            }, {
                label: "OTSEA on X.com",
                href: "https://x.com/otseaerc20",
                icon: (0, r.jsx)(function(e) {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsxs)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsxs)("g", {
                            clipPath: "url(#clip0_10_4697)",
                            children: [(0, r.jsx)("path", {
                                d: "M8.10268 7.15303L5.39248 3.36079H3.94696L7.30422 8.05806L7.72683 8.64896L10.6004 12.673H12.046L8.5235 7.74393L8.10268 7.15303Z",
                                fill: "currentColor"
                            }), (0, r.jsx)("path", {
                                d: "M14.1065 0.666664H1.89349C1.21592 0.666664 0.666687 1.2159 0.666687 1.89347V14.1065C0.666687 14.7841 1.21592 15.3333 1.89349 15.3333H14.1065C14.7841 15.3333 15.3334 14.7841 15.3334 14.1065V1.89347C15.3334 1.2159 14.7841 0.666664 14.1065 0.666664ZM10.1569 13.3333L7.24856 9.19132L3.60765 13.3333H2.66669L6.83128 8.59688L2.66669 2.66666H5.84312L8.59654 6.58797L12.0464 2.66666H12.9873L9.01601 7.18375L13.3334 13.3333H10.1569Z",
                                fill: "currentColor"
                            })]
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsx)("clipPath", {
                                id: "clip0_10_4697",
                                children: (0, r.jsx)("rect", {
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor"
                                })
                            })
                        })]
                    })
                }, {})
            }, {
                label: "Join the Community",
                href: "https://t.me/OTSeaPortal",
                icon: (0, r.jsx)(y.Z, {})
            }, {
                label: "GitBook",
                href: "https://otsea.gitbook.io/otsea",
                icon: (0, r.jsx)(f, {
                    className: "h-[18px] w-[18px]"
                })
            }];

            function Index() {
                let [e, t] = (0, h.useState)(null), n = (0, O.Z)(), {
                    data: a
                } = (0, x.a)((0, _.j_)({
                    totalOf: "totalOrders, totalVolume"
                }), {
                    pollInterval: 5e3
                }), {
                    ethUsd: l
                } = (0, h.useContext)(A.F);
                (0, h.useEffect)(() => {
                    let getGas = async () => {
                        let e = await n.core.getGasPrice();
                        t(e._hex)
                    };
                    getGas()
                }, [n.core]);
                let {
                    entered: i,
                    musicPaused: o,
                    setMusicPaused: c
                } = (0, h.useContext)(T.H), d = (0, E.Z)(N.B), {
                    ethToUsd: u
                } = (0, h.useContext)(A.F);
                return (0, r.jsxs)("footer", {
                    className: s()("sticky bottom-0 z-50 w-full transition-all duration-700", i ? "opacity-100" : "pointer-events-none opacity-0"),
                    children: [(0, r.jsx)(DesktopFooter, {
                        gas: e,
                        data: a,
                        links: L,
                        otseaPrice: d,
                        ethUsd: l,
                        ethToUsd: u,
                        musicPaused: o,
                        setMusicPaused: c
                    }), (0, r.jsx)(MobileFooter, {
                        gas: e,
                        data: a,
                        links: L,
                        otseaPrice: d,
                        ethUsd: l,
                        ethToUsd: u,
                        musicPaused: o,
                        setMusicPaused: c
                    })]
                })
            }
            let M = h.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, r) {
                    return h.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        ref: r,
                        "aria-labelledby": t
                    }, n), e ? h.createElement("title", {
                        id: t
                    }, e) : null, h.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    }))
                }),
                H = h.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, r) {
                    return h.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        ref: r,
                        "aria-labelledby": t
                    }, n), e ? h.createElement("title", {
                        id: t
                    }, e) : null, h.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    }))
                }),
                P = h.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, r) {
                    return h.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: r,
                        "aria-labelledby": t
                    }, n), e ? h.createElement("title", {
                        id: t
                    }, e) : null, h.createElement("path", {
                        fillRule: "evenodd",
                        d: "M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z",
                        clipRule: "evenodd"
                    }))
                }),
                S = h.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, r) {
                    return h.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: r,
                        "aria-labelledby": t
                    }, n), e ? h.createElement("title", {
                        id: t
                    }, e) : null, h.createElement("path", {
                        fillRule: "evenodd",
                        d: "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",
                        clipRule: "evenodd"
                    }))
                }),
                B = h.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...n
                }, r) {
                    return h.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: r,
                        "aria-labelledby": t
                    }, n), e ? h.createElement("title", {
                        id: t
                    }, e) : null, h.createElement("path", {
                        d: "M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z"
                    }), h.createElement("path", {
                        fillRule: "evenodd",
                        d: "M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z",
                        clipRule: "evenodd"
                    }))
                });
            var F = {
                src: "/_next/static/media/uniswap.83fecd5c.svg",
                height: 48,
                width: 48,
                blurWidth: 0,
                blurHeight: 0
            };

            function HistoryIcon(e) {
                let {
                    className: t
                } = e;
                return (0, r.jsx)("svg", {
                    width: "25",
                    height: "24",
                    viewBox: "0 0 25 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        scale: .75,
                        marginInline: "-0.25rem"
                    },
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.2317 20.5366H5.20732C5.06098 20.5366 4.96341 20.439 4.96341 20.2927V3.70732C4.96341 3.56098 5.06098 3.46341 5.20732 3.46341H18.378C18.5244 3.46341 18.622 3.56098 18.622 3.70732V8.73171C18.622 9.12195 18.9634 9.46342 19.3537 9.46342C19.7439 9.46342 20.0854 9.12195 20.0854 8.73171V3.70732C20.0854 2.78049 19.3049 2 18.378 2H5.20732C4.28049 2 3.5 2.78049 3.5 3.70732V20.2927C3.5 21.2195 4.28049 22 5.20732 22H10.2317C10.622 22 10.9634 21.6585 10.9634 21.2683C10.9634 20.878 10.622 20.5366 10.2317 20.5366ZM16.9146 10.7805C13.8414 10.7805 11.3049 13.3171 11.3049 16.3902C11.3049 19.4634 13.8414 22 16.9146 22C19.9878 22 22.5244 19.4634 22.5244 16.3902C22.5244 13.3171 19.9878 10.7805 16.9146 10.7805ZM16.9146 20.5366C14.6219 20.5366 12.7683 18.6829 12.7683 16.3902C12.7683 14.0976 14.6219 12.2439 16.9146 12.2439C19.2073 12.2439 21.061 14.0976 21.061 16.3902C21.061 18.6829 19.2073 20.5366 16.9146 20.5366ZM17.6463 16L19.1585 16.6829C19.5488 16.878 19.6951 17.2683 19.5488 17.6585C19.4024 17.9512 19.1585 18.0976 18.8658 18.0976C18.7683 18.0976 18.6707 18.0976 18.5732 18.0488L16.6219 17.1707C16.378 17.0244 16.1829 16.7805 16.1829 16.4878V13.9512C16.1829 13.561 16.5244 13.2195 16.9146 13.2195C17.3049 13.2195 17.6463 13.561 17.6463 13.9512V16ZM15.939 6.39024C16.3292 6.39024 16.6707 6.73171 16.6707 7.12195C16.6707 7.5122 16.3292 7.85366 15.939 7.85366H7.64632C7.25608 7.85366 6.91462 7.5122 6.91462 7.12195C6.91462 6.73171 7.25608 6.39024 7.64632 6.39024H15.939ZM6.91462 11.0244C6.91462 10.6341 7.25608 10.2927 7.64632 10.2927H10.0853C10.4756 10.2927 10.8171 10.6341 10.8171 11.0244C10.8171 11.4146 10.4756 11.7561 10.0853 11.7561H7.64632C7.25608 11.7561 6.91462 11.4146 6.91462 11.0244Z",
                        fill: "currentColor"
                    })
                })
            }

            function Nav(e) {
                let {
                    children: t
                } = e, [n, l] = (0, h.useState)(!1);
                (0, h.useEffect)(() => {
                    let handleScroll = () => {
                        l(window.scrollY > 0)
                    };
                    return document.addEventListener("scroll", handleScroll), () => {
                        document.removeEventListener("scroll", handleScroll)
                    }
                }, []);
                let {
                    entered: i
                } = (0, h.useContext)(T.H), [c, m] = (0, h.useState)(!1), p = (0, u.usePathname)();
                return (0, h.useEffect)(() => {
                    m(!1)
                }, [p]), (0, h.useEffect)(() => {
                    let e = document.body.classList;
                    c ? e.add("overflow-hidden") : e.remove("overflow-hidden")
                }, [c]), (0, r.jsx)("nav", {
                    className: s()("sticky top-0 z-50 flex h-24 w-screen items-center justify-between px-4 py-3 transition-all duration-700 lg:px-9", n && "backdrop-blur", i ? "opacity-100" : "pointer-events-none opacity-0"),
                    children: (0, r.jsxs)("div", {
                        className: "flex grow items-center justify-between gap-3",
                        children: [(0, r.jsx)(d(), {
                            href: "/",
                            className: "hover:bg-slate-600 z-50 flex items-center rounded-lg text-xl text-black transition-all hover:bg-opacity-50 lg:absolute lg:left-9 lg:top-1/2 lg:-translate-y-1/2 lg:pr-6",
                            children: (0, r.jsxs)("div", {
                                className: "flex flex-row items-center gap-2",
                                children: [(0, r.jsx)(o(), {
                                    src: j.Z,
                                    alt: "OTSea Logo",
                                    className: "mb-3 w-7 lg:w-7"
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, r.jsx)("p", {
                                        className: "m-0 font-comforta text-2xl font-bold text-white",
                                        children: "OTSea"
                                    }), (0, r.jsx)("span", {
                                        className: "-mt-2 self-end font-mono text-2xs uppercase tracking-wide text-white",
                                        children: "[Beta]"
                                    })]
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "ml-auto lg:order-1 lg:ml-0",
                            children: t
                        }), (0, r.jsx)("input", {
                            type: "checkbox",
                            className: "peer hidden",
                            id: "sidebar-open",
                            checked: c,
                            onChange: e => {
                                let {
                                    checked: t
                                } = e.target;
                                if (m(t), window.scrollY) {
                                    let e = document.querySelector("nav").classList;
                                    t ? e.remove("backdrop-blur") : e.add("backdrop-blur")
                                }
                            }
                        }), (0, r.jsx)("label", {
                            htmlFor: "sidebar-open",
                            className: "\n                        fixed\n                        -z-50\n                        opacity-0\n                        transition-all\n                        peer-checked:inset-0\n                        peer-checked:z-40\n                        peer-checked:bg-black\n                        peer-checked:opacity-30\n                        lg:hidden\n                        lg:h-screen\n                        lg:w-screen\n                    "
                        }), (0, r.jsxs)("label", {
                            className: "\n                        relative\n                        z-[60]\n                        ml-1\n                        inline-flex\n                        h-5\n                        w-5\n                        cursor-pointer\n                        flex-col\n                        justify-around\n                        text-white\n                        transition-all\n                        peer-checked:scale-[70%]\n                        peer-checked:before:absolute\n                        peer-checked:before:-inset-3\n                        peer-checked:before:rounded-full\n                        peer-checked:before:bg-white\n                        peer-checked:before:bg-opacity-20\n                        peer-checked:hover:scale-75\n                        focus:outline-none\n                        lg:hidden\n                        peer-checked:[&_.line-b]:-translate-y-[0.425rem]\n                        peer-checked:[&_.line-b]:-rotate-45\n                        peer-checked:[&_.line-c]:opacity-0 \n                        peer-checked:[&_.line-t]:translate-y-[0.425rem]\n                        peer-checked:[&_.line-t]:rotate-45\n                    ",
                            htmlFor: "sidebar-open",
                            children: [(0, r.jsx)("span", {
                                className: "line-t h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                            }), (0, r.jsx)("span", {
                                className: "line-c h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                            }), (0, r.jsx)("span", {
                                className: "line-b h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "\n                    pointer-events-none\n                    fixed\n                    right-0 \n                    top-4\n                    flex \n                    w-2/3 \n                    grow\n                    origin-[calc(100%_-_24px)_44px]\n                    scale-75\n                    flex-col\n                    justify-center\n                    gap-1.5\n                    rounded-3xl\n                    bg-black\n                    bg-opacity-20\n                    py-4\n                    pl-4\n                    pr-4\n                    text-white\n                    opacity-0\n                    backdrop-blur\n                    transition-all\n                    duration-300\n                    peer-checked:pointer-events-auto\n                    peer-checked:z-40\n                    peer-checked:scale-100\n                    peer-checked:opacity-100\n                    md:w-2/5\n                    lg:pointer-events-auto\n                    lg:static\n                    lg:z-40\n                    lg:flex\n                    lg:h-auto\n                    lg:w-auto\n                    lg:translate-x-0\n                    lg:scale-100\n                    lg:flex-row\n                    lg:items-center\n                    lg:rounded-none\n                    lg:bg-transparent\n                    lg:p-0\n                    lg:opacity-100\n                    peer-checked:[&_*]:animate-[fade-in_0.65s_ease-out_0.15s_backwards]\n                ",
                            children: [(0, r.jsx)(a.Typography, {
                                as: "div",
                                variant: "small",
                                color: "white",
                                className: "w-[calc(100%_-_2rem)] text-xs font-normal lg:w-auto",
                                children: (0, r.jsx)(a.ListItem, {
                                    className: "p-0",
                                    children: (0, r.jsxs)(d(), {
                                        href: "/create",
                                        className: "flex items-center gap-2 px-4 py-2 font-comforta",
                                        children: [(0, r.jsx)(P, {
                                            className: "h-[18px] w-[18px]"
                                        }), "Create"]
                                    })
                                })
                            }), (0, r.jsx)(a.Typography, {
                                as: "div",
                                variant: "small",
                                color: "white",
                                className: "text-xs font-normal",
                                children: (0, r.jsx)(a.ListItem, {
                                    className: "p-0",
                                    children: (0, r.jsxs)(d(), {
                                        href: "/browse",
                                        className: "flex items-center gap-2 px-4 py-2 font-comforta",
                                        children: [(0, r.jsx)(S, {
                                            className: "h-[18px] w-[18px]"
                                        }), "Browse"]
                                    })
                                })
                            }), (0, r.jsx)(a.Typography, {
                                as: "div",
                                variant: "small",
                                color: "white",
                                className: "text-xs font-normal",
                                children: (0, r.jsx)(a.ListItem, {
                                    className: "p-0",
                                    children: (0, r.jsxs)(d(), {
                                        href: "/claim",
                                        className: "flex items-center gap-2 px-4 py-2 font-comforta",
                                        children: [(0, r.jsx)(M, {
                                            className: "h-[18px] w-[18px]"
                                        }), "Claim"]
                                    })
                                })
                            }), (0, r.jsx)(a.Typography, {
                                as: "div",
                                variant: "small",
                                color: "white",
                                className: "text-xs font-normal",
                                rel: "noreferrer",
                                target: "_blank",
                                children: (0, r.jsx)(a.Badge, {
                                    color: "orange",
                                    content: (0, r.jsx)("span", {
                                        className: "relative top-px mx-1 text-2xs",
                                        children: "New!"
                                    }),
                                    children: (0, r.jsx)(a.ListItem, {
                                        className: "p-0",
                                        children: (0, r.jsxs)(d(), {
                                            href: "/migration",
                                            className: "flex items-center gap-2 px-4 py-2 font-comforta",
                                            children: [(0, r.jsx)(H, {
                                                className: "h-[18px] w-[18px]"
                                            }), "Migration"]
                                        })
                                    })
                                })
                            }), (0, r.jsx)(a.Typography, {
                                as: "div",
                                variant: "small",
                                color: "white",
                                className: "text-xs font-normal",
                                rel: "noreferrer",
                                target: "_blank",
                                children: (0, r.jsx)(a.ListItem, {
                                    className: "p-0",
                                    children: (0, r.jsxs)(d(), {
                                        href: "/minimarkets",
                                        className: "flex items-center gap-2 px-4 py-2 font-comforta",
                                        children: [(0, r.jsx)(B, {
                                            className: "h-[18px] w-[18px]"
                                        }), "Mini-Markets"]
                                    })
                                })
                            }), (0, r.jsx)(a.Typography, {
                                as: "div",
                                variant: "small",
                                color: "white",
                                className: "text-xs font-normal xl:hidden",
                                children: (0, r.jsx)(a.ListItem, {
                                    className: "p-0",
                                    children: (0, r.jsxs)(d(), {
                                        href: "/history",
                                        className: "flex h-[34px] items-center gap-2 px-4 py-2 font-comforta",
                                        children: [(0, r.jsx)(HistoryIcon, {}), "History"]
                                    })
                                })
                            }), (0, r.jsx)("hr", {
                                className: "border-white lg:hidden"
                            }), (0, r.jsx)(d(), {
                                href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x5da151b95657e788076d04d56234bd93e409cb09",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "\n                            hover:bg-slate-600\n                            mt-3\n                            flex \n                            items-center\n                            justify-center\n                            rounded-3xl\n                            border\n                            border-blue-100/50\n                            bg-blue-400\n                            p-1\n                            px-2\n                            text-xl\n                            text-black\n                            shadow-inner-xl\n                            transition-all\n                            hover:bg-opacity-50\n                            lg:hidden\n                        ",
                                children: (0, r.jsxs)("div", {
                                    className: "flex flex-row items-center gap-1 ",
                                    children: [(0, r.jsx)(o(), {
                                        src: F,
                                        alt: "OTSea Logo",
                                        className: "w-8"
                                    }), (0, r.jsx)("p", {
                                        className: "relative top-px pr-2 font-comforta text-xs text-white lg:text-sm ",
                                        children: "Buy $OTSEA"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
            var I = n(54844);
            n(72940);
            var Z = n(49095);

            function App(e) {
                let {
                    children: t
                } = e, n = (0, u.usePathname)(), l = (0, I.Z)(), [i, c] = (0, h.useState)(!n.includes("migration"));
                return (0, r.jsxs)(r.Fragment, {
                    children: [!l && (0, r.jsx)(Nav, {
                        children: (0, r.jsxs)("div", {
                            className: "flex gap-2 lg:absolute lg:right-9 lg:top-1/2 lg:z-50 lg:-translate-y-1/2",
                            children: [(0, r.jsx)(a.Typography, {
                                as: "div",
                                variant: "small",
                                color: "white",
                                className: "hidden text-xs font-normal xl:block",
                                children: (0, r.jsx)(a.ListItem, {
                                    className: "p-0",
                                    children: (0, r.jsxs)(d(), {
                                        href: "/history",
                                        className: "flex h-[34px] items-center gap-2 px-4 py-2 font-comforta",
                                        children: [(0, r.jsx)(HistoryIcon, {}), "History"]
                                    })
                                })
                            }), (0, r.jsx)(p.Z, {})]
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative flex min-h-no-nav-screen flex-col overflow-hidden",
                        children: t
                    }), (0, r.jsxs)(Z.u, {
                        open: i,
                        setOpen: c,
                        hideClose: !0,
                        className: "relative",
                        children: [(0, r.jsx)(Z.u.Title, {
                            className: " mt-28 text-center",
                            children: "Migration Underway!"
                        }), (0, r.jsxs)(Z.u.Content, {
                            children: [(0, r.jsx)(o(), {
                                className: "absolute left-1/2 top-4 -translate-x-1/2",
                                src: m.Z,
                                width: 100,
                                height: 100,
                                alt: "Migration success"
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col gap-y-4 px-4 text-white md:items-end",
                                children: [(0, r.jsxs)("p", {
                                    className: "text-medium",
                                    children: ["OTSea is currently migrating to a new ERC20 token contract. If you were holding $OTSEA tokens on", " ", "".concat(new Date(1706597775e3)), " when a snapshot was taken, you are eligible to migrate and swap your tokens at a 1:1 ratio."]
                                }), (0, r.jsxs)("p", {
                                    className: "text-medium",
                                    children: [(0, r.jsx)("strong", {
                                        className: "underline underline-offset-2",
                                        children: "DO NOT buy, sell, or transfer"
                                    }), " ", "the old tokens and follow the instructions on the", " ", (0, r.jsx)(d(), {
                                        className: "font-semibold text-orange-500 underline underline-offset-2 transition-all hover:text-orange-400 hover:underline-offset-4",
                                        href: "/migration",
                                        onClick: () => c(!1),
                                        children: "Migration Page"
                                    }), " ", "to complete the process. Ahoy!"]
                                }), (0, r.jsx)("button", {
                                    className: s()(["relative overflow-hidden rounded-xl bg-orange-400 bg-opacity-70 px-6 py-2.5 font-comforta text-sm font-bold text-white transition-all hover:bg-opacity-80", "active:top-px active:bg-orange-500 active:bg-opacity-70 active:before:shadow-inner"]),
                                    onClick: () => c(!1),
                                    children: "Ok"
                                })]
                            })]
                        })]
                    }), "/" !== n && !l && (0, r.jsx)(Index, {})]
                })
            }
        },
        72940: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return CloseBtn
                }
            });
            var r = n(57437),
                a = n(54440),
                l = n.n(a);

            function CloseBtn(e) {
                let {
                    className: t,
                    handleClose: n
                } = e;
                return (0, r.jsx)("button", {
                    type: "button",
                    className: l()(["absolute right-4 top-4 scale-90 text-gray-50 opacity-80 outline-none transition-all", "hover:scale-100 hover:opacity-100", "focus:outline-none focus:ring-0", t]),
                    onClick: n,
                    children: (0, r.jsx)("div", {
                        className: "rounded-full bg-white bg-opacity-10 p-3 text-blue-50",
                        children: (0, r.jsx)("svg", {
                            "aria-hidden": "true",
                            fill: "none",
                            height: "10",
                            viewBox: "0 0 10 10",
                            width: "10",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, r.jsx)("path", {
                                d: "M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z",
                                fill: "currentColor"
                            })
                        })
                    })
                })
            }
        },
        54684: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return CustomConnectButton
                }
            });
            var r = n(57437),
                a = n(12025),
                l = n(82256),
                s = n(16691),
                i = n.n(s),
                o = n(2265),
                c = n(56926),
                d = n(54844);

            function CustomConnectButton(e) {
                let {
                    hash: t,
                    href: n
                } = e, {
                    address: s
                } = (0, c.mA)(), [u, h] = (0, o.useState)();
                (0, o.useEffect)(() => {
                    s && (h((0, r.jsx)(a.Spinner, {
                        color: "blue",
                        className: "relative -mt-px h-3 w-3"
                    })), fetch("/api/sea-rank?address=" + s).then(e => e.ok ? e.text() : "?").then(h).catch(() => h("?")))
                }, [s]);
                let m = (0, d.Z)();
                return (0, r.jsx)(l.NL.Custom, {
                    children: e => {
                        var t;
                        let {
                            account: n,
                            chain: a,
                            openAccountModal: l,
                            openChainModal: s,
                            openConnectModal: o,
                            authenticationStatus: c,
                            mounted: d,
                            accountStatus: h
                        } = e, p = d && "loading" !== c;
                        return p ? (0, r.jsx)("div", {
                            className: "flex gap-3",
                            children: p && n && a && (!c || "authenticated" === c) ? a.unsupported ? (0, r.jsx)("button", {
                                className: "hover:bg-slate-600 flex h-[34px] items-center rounded-full bg-red-500 bg-opacity-50 px-6 font-comforta text-sm text-white shadow-none transition-all hover:bg-opacity-70",
                                onClick: s,
                                type: "button",
                                children: "Wrong network"
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("button", {
                                    onClick: l,
                                    type: "button",
                                    className: "\n                                        hover:bg-slate-600\n                                        flex\n                                        h-[34px]\n                                        w-full\n                                        items-center\n                                        justify-center\n                                        gap-2\n                                        rounded-full\n                                        bg-blue-300\n                                        px-4\n                                        font-comforta\n                                        text-xs\n                                        font-black\n                                        text-white\n                                        transition-all\n                                        hover:bg-opacity-50\n                                        md:text-sm\n                                        ",
                                    children: [(0, r.jsx)("span", {
                                        className: "text-lg",
                                        children: u
                                    }), !m && (0, r.jsx)("span", {
                                        className: "relative top-px",
                                        children: n.displayName
                                    })]
                                }), (0, r.jsx)("button", {
                                    onClick: s,
                                    className: "flex items-center justify-center",
                                    type: "button",
                                    children: a.hasIcon && (0, r.jsx)("div", {
                                        style: {
                                            background: a.iconBackground,
                                            width: 30,
                                            height: 30,
                                            borderRadius: 999,
                                            overflow: "hidden"
                                        },
                                        children: a.iconUrl && (0, r.jsx)(i(), {
                                            alt: null !== (t = a.name) && void 0 !== t ? t : "Chain icon",
                                            src: a.iconUrl,
                                            width: 30,
                                            height: 30,
                                            className: "object-contain"
                                        })
                                    })
                                })]
                            }) : (0, r.jsx)("button", {
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
        63019: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return TelegramIcon
                }
            });
            var r = n(57437);

            function TelegramIcon() {
                return (0, r.jsxs)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("g", {
                        clipPath: "url(#clip0_10_4691)",
                        children: (0, r.jsx)("path", {
                            d: "M8 6.99382e-07C3.58172 3.13124e-07 -3.13124e-07 3.58172 -6.99382e-07 8C-1.08564e-06 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 1.08564e-06 8 6.99382e-07ZM12.1581 5.0605L10.7372 11.8438C10.72 11.9258 10.6825 12.0022 10.6281 12.066C10.5736 12.1297 10.5041 12.1788 10.4257 12.2086C10.3474 12.2385 10.2628 12.2481 10.1798 12.2368C10.0967 12.2254 10.0179 12.1933 9.95044 12.1435L7.88369 10.6166L6.63156 11.7979C6.61517 11.8133 6.59587 11.8254 6.57477 11.8333C6.55368 11.8412 6.53121 11.8449 6.5087 11.844C6.48618 11.8432 6.46406 11.8378 6.44363 11.8283C6.42319 11.8188 6.40486 11.8054 6.38969 11.7887L6.36278 11.7591L6.58034 9.65366L10.5017 6.07081C10.5211 6.05312 10.5332 6.02881 10.5355 6.00267C10.5379 5.97652 10.5303 5.95045 10.5144 5.92959C10.4985 5.90873 10.4753 5.8946 10.4494 5.88998C10.4236 5.88537 10.397 5.8906 10.3748 5.90466L5.35984 9.07872L3.2 8.35335C3.14257 8.33405 3.09252 8.29746 3.05671 8.24859C3.0209 8.19973 3.00109 8.14098 2.99999 8.0804C2.9989 8.01983 3.01657 7.9604 3.05059 7.91027C3.08461 7.86014 3.13331 7.82176 3.19 7.80041L11.6406 4.617C11.7058 4.59247 11.7764 4.5859 11.845 4.59798C11.9136 4.61006 11.9777 4.64035 12.0306 4.68567C12.0834 4.731 12.1232 4.7897 12.1456 4.85564C12.168 4.92157 12.1724 4.99233 12.1581 5.0605Z",
                            fill: "currentColor"
                        })
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "clip0_10_4691",
                            children: (0, r.jsx)("rect", {
                                width: "16",
                                height: "16",
                                fill: "currentColor"
                            })
                        })
                    })]
                })
            }
        },
        1290: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return UniswapIcon
                }
            });
            var r = n(57437);

            function UniswapIcon(e) {
                let {
                    className: t
                } = e;
                return (0, r.jsxs)("svg", {
                    className: t,
                    width: "48",
                    height: "48",
                    viewBox: "0 0 48 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M16.8138 9.22753C16.3763 9.15969 16.3578 9.15168 16.5638 9.12008C16.9583 9.05935 17.8899 9.14209 18.532 9.2947C20.0308 9.651 21.3946 10.5637 22.8504 12.1845L23.2372 12.6152L23.7904 12.5262C26.1213 12.1516 28.4925 12.4493 30.4757 13.3655C31.0213 13.6176 31.8816 14.1193 31.9891 14.2483C32.0234 14.2893 32.0863 14.5539 32.1288 14.8361C32.2761 15.8126 32.2024 16.5611 31.9037 17.1201C31.7412 17.4244 31.7321 17.5208 31.8414 17.7811C31.9286 17.9889 32.1718 18.1427 32.4126 18.1424C32.9055 18.1417 33.4359 17.3449 33.6817 16.2364L33.7794 15.796L33.9728 16.0151C35.0337 17.2171 35.867 18.8564 36.0101 20.0232L36.0474 20.3274L35.8691 20.0508C35.5622 19.5749 35.2538 19.2509 34.859 18.9897C34.1471 18.5186 33.3945 18.3584 31.4012 18.2533C29.601 18.1585 28.5821 18.0047 27.5718 17.6752C25.8529 17.1148 24.9864 16.3685 22.9445 13.6895C22.0376 12.4997 21.4771 11.8413 20.9195 11.3112C19.6525 10.1065 18.4075 9.47472 16.8138 9.22753Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        d: "M32.3951 11.8842C32.4404 11.0869 32.5486 10.5609 32.766 10.0807C32.852 9.89059 32.9327 9.73499 32.9451 9.73499C32.9575 9.73499 32.9201 9.87532 32.862 10.0468C32.7039 10.5129 32.678 11.1504 32.7868 11.8922C32.925 12.8333 33.0036 12.9691 33.9983 13.9858C34.4649 14.4626 35.0076 15.064 35.2043 15.3222L35.562 15.7917L35.2043 15.4562C34.7668 15.0459 33.7608 14.2457 33.5385 14.1313C33.3896 14.0546 33.3674 14.0559 33.2755 14.1474C33.1908 14.2317 33.173 14.3583 33.1612 14.9572C33.1429 15.8904 33.0157 16.4895 32.7087 17.0885C32.5427 17.4124 32.5165 17.3433 32.6667 16.9777C32.7789 16.7046 32.7903 16.5846 32.7895 15.6811C32.7878 13.8658 32.5722 13.4294 31.3084 12.6818C30.9882 12.4924 30.4606 12.2192 30.1361 12.0748C29.8115 11.9303 29.5536 11.8045 29.563 11.7951C29.5988 11.7594 30.8314 12.1192 31.3275 12.31C32.0654 12.5939 32.1872 12.6306 32.2768 12.5964C32.3369 12.5735 32.3659 12.3985 32.3951 11.8842Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        d: "M17.6636 14.9897C16.7754 13.767 16.2259 11.8921 16.3448 10.4906L16.3817 10.0569L16.5838 10.0938C16.9635 10.1631 17.6181 10.4067 17.9246 10.5929C18.7658 11.1037 19.13 11.7763 19.5005 13.5035C19.609 14.0094 19.7513 14.5818 19.8169 14.7757C19.9224 15.0877 20.3209 15.8164 20.6449 16.2896C20.8783 16.6304 20.7233 16.7919 20.2074 16.7454C19.4195 16.6742 18.3522 15.9377 17.6636 14.9897Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        d: "M31.3178 24.0904C27.167 22.4192 25.7051 20.9685 25.7051 18.5209C25.7051 18.1607 25.7176 17.866 25.7326 17.866C25.7477 17.866 25.9084 17.9849 26.0895 18.1302C26.9312 18.8052 27.8738 19.0936 30.483 19.4742C32.0184 19.6983 32.8825 19.8792 33.6796 20.1435C36.213 20.9837 37.7805 22.6888 38.1542 25.0112C38.2629 25.6861 38.1991 26.9515 38.023 27.6185C37.884 28.1453 37.4598 29.0948 37.3473 29.1312C37.316 29.1413 37.2855 29.0218 37.2775 28.8591C37.2348 27.9871 36.7941 27.1381 36.054 26.5021C35.2126 25.779 34.082 25.2033 31.3178 24.0904Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        d: "M28.4039 24.7846C28.3519 24.4752 28.2617 24.08 28.2034 23.9064L28.0976 23.5908L28.2943 23.8116C28.5665 24.1172 28.7816 24.5082 28.964 25.0289C29.1031 25.4264 29.1187 25.5446 29.1177 26.1905C29.1166 26.8246 29.0993 26.9576 28.9708 27.3153C28.7681 27.8794 28.5167 28.2795 28.0947 28.7088C27.3365 29.4805 26.3617 29.9077 24.955 30.085C24.7104 30.1158 23.9978 30.1676 23.3712 30.2002C21.7922 30.2823 20.753 30.452 19.8192 30.7799C19.6849 30.8271 19.565 30.8557 19.5529 30.8435C19.5151 30.8059 20.1509 30.4269 20.676 30.1739C21.4165 29.8173 22.1536 29.6226 23.8051 29.3476C24.621 29.2117 25.4635 29.0469 25.6774 28.9813C27.6978 28.3618 28.7362 26.7633 28.4039 24.7846Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        d: "M30.3065 28.1639C29.7551 26.9783 29.6285 25.8337 29.9306 24.7662C29.9629 24.6522 30.0149 24.5588 30.0462 24.5588C30.0774 24.5588 30.2076 24.6292 30.3353 24.7151C30.5895 24.8862 31.0991 25.1743 32.457 25.9147C34.1515 26.8385 35.1176 27.5539 35.7746 28.3711C36.3499 29.0869 36.706 29.9021 36.8774 30.8962C36.9744 31.4593 36.9175 32.8142 36.7731 33.3812C36.3175 35.169 35.2586 36.5733 33.7484 37.3927C33.5271 37.5128 33.3285 37.6114 33.307 37.6119C33.2855 37.6122 33.3661 37.4073 33.4862 37.1563C33.9942 36.0943 34.052 35.0613 33.668 33.9114C33.4328 33.2074 32.9533 32.3483 31.9851 30.8964C30.8595 29.2084 30.5835 28.7591 30.3065 28.1639Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        d: "M14.7159 34.5603C16.2563 33.2598 18.1727 32.3359 19.9186 32.0523C20.6709 31.93 21.9242 31.9785 22.6209 32.1568C23.7377 32.4427 24.7367 33.0828 25.2562 33.8454C25.764 34.5908 25.9818 35.2404 26.2087 36.6856C26.2981 37.2557 26.3954 37.8282 26.4248 37.9578C26.5951 38.7068 26.9266 39.3055 27.3373 39.6061C27.9897 40.0836 29.113 40.1133 30.218 39.6823C30.4055 39.6091 30.5683 39.5585 30.5798 39.5699C30.6199 39.6097 30.0635 39.9822 29.6709 40.1783C29.1427 40.4421 28.7227 40.5442 28.1646 40.5442C27.1525 40.5442 26.3123 40.0293 25.6112 38.9795C25.4732 38.7729 25.1631 38.1541 24.922 37.6044C24.1818 35.916 23.8162 35.4016 22.9567 34.8387C22.2087 34.3489 21.2441 34.2612 20.5184 34.617C19.5651 35.0844 19.2991 36.3026 19.9819 37.0746C20.2532 37.3814 20.7593 37.6461 21.1731 37.6975C21.9471 37.7938 22.6124 37.2049 22.6124 36.4234C22.6124 35.9159 22.4173 35.6263 21.9263 35.4047C21.2557 35.1021 20.5348 35.4558 20.5383 36.0859C20.5398 36.3545 20.6568 36.5232 20.926 36.645C21.0988 36.7232 21.1028 36.7294 20.9619 36.7001C20.3466 36.5725 20.2024 35.8307 20.6972 35.3382C21.2912 34.747 22.5195 35.0079 22.9413 35.8149C23.1185 36.1539 23.139 36.8289 22.9846 37.2366C22.6388 38.149 21.6306 38.6287 20.6079 38.3676C19.9116 38.1899 19.6281 37.9974 18.7886 37.1327C17.3298 35.63 16.7634 35.3388 14.6603 35.0105L14.2573 34.9476L14.7159 34.5603Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.7157 0.898828C8.58742 6.81164 16.0981 16.0175 16.471 16.533C16.7789 16.9585 16.663 17.3411 16.1356 17.6409C15.8423 17.8077 15.2393 17.9766 14.9373 17.9766C14.5959 17.9766 14.2112 17.8122 13.9311 17.5464C13.733 17.3586 12.9339 16.1653 11.089 13.3027C9.67734 11.1123 8.49599 9.2953 8.46379 9.2649C8.38928 9.19451 8.39055 9.19691 10.945 13.7675C12.549 16.6376 13.0905 17.6522 13.0905 17.7879C13.0905 18.064 13.0153 18.209 12.6748 18.5888C12.1071 19.222 11.8534 19.9335 11.6703 21.406C11.4649 23.0566 10.8875 24.2226 9.28743 26.2182C8.35079 27.3864 8.19751 27.6004 7.96117 28.0713C7.66344 28.6642 7.58159 28.9963 7.54842 29.7449C7.51337 30.5365 7.58167 31.0479 7.82354 31.8048C8.03523 32.4674 8.25621 32.9049 8.82121 33.78C9.30877 34.5351 9.58958 35.0964 9.58958 35.3159C9.58958 35.4906 9.6229 35.4908 10.3785 35.3202C12.1865 34.9119 13.6548 34.1938 14.4805 33.3137C14.9915 32.769 15.1115 32.4682 15.1153 31.7218C15.1179 31.2336 15.1007 31.1313 14.9688 30.8504C14.754 30.3933 14.3628 30.0132 13.5008 29.4239C12.3713 28.6518 11.8889 28.0302 11.7556 27.1753C11.6463 26.4739 11.7732 25.979 12.398 24.6695C13.0448 23.3139 13.205 22.7363 13.3134 21.37C13.3835 20.4872 13.4804 20.139 13.7341 19.8596C13.9985 19.5682 14.2367 19.4696 14.8913 19.3801C15.9585 19.2343 16.6381 18.9582 17.1967 18.4435C17.6813 17.9969 17.8841 17.5667 17.9152 16.9189L17.9388 16.428L17.668 16.1123C16.6874 14.9688 3.05896 0 2.9986 0C2.98572 0 3.30842 0.404502 3.7157 0.898828ZM10.14 30.6406C10.3618 30.248 10.244 29.7432 9.87309 29.4966C9.52263 29.2635 8.97824 29.3733 8.97824 29.677C8.97824 29.7696 9.02953 29.8371 9.145 29.8965C9.3394 29.9966 9.35355 30.109 9.20056 30.339C9.04563 30.5719 9.05814 30.7766 9.23583 30.9157C9.52226 31.14 9.92768 31.0167 10.14 30.6406Z",
                        fill: "currentColor"
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.6123 19.6376C18.1113 19.7915 17.6243 20.3225 17.4735 20.8793C17.3815 21.219 17.4337 21.8149 17.5715 21.9988C17.7941 22.2961 18.0093 22.3744 18.5921 22.3703C19.733 22.3623 20.7249 21.873 20.8402 21.2612C20.9348 20.7598 20.4991 20.0648 19.8991 19.7597C19.5894 19.6023 18.9309 19.5398 18.6123 19.6376ZM19.9461 20.6806C20.1221 20.4306 20.0451 20.1604 19.7459 19.9777C19.176 19.6297 18.3142 19.9176 18.3142 20.456C18.3142 20.724 18.7636 21.0164 19.1756 21.0164C19.4497 21.0164 19.825 20.8529 19.9461 20.6806Z",
                        fill: "currentColor"
                    })]
                })
            }
        },
        49095: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return Modal
                }
            });
            var r = n(57437),
                a = n(9805),
                l = n(32240),
                s = n(54440),
                i = n.n(s),
                o = n(2265),
                c = n(72940),
                d = n(43436);
            let Modal = e => {
                    let {
                        open: t = !1,
                        setOpen: n,
                        onClose: s,
                        children: i,
                        hideClose: u = !1
                    } = e;
                    return (0, r.jsx)(a.u.Root, {
                        show: t,
                        as: o.Fragment,
                        children: (0, r.jsxs)(l.V, {
                            as: "div",
                            className: "relative z-50",
                            onClose: () => {
                                !u && (n(!1), s && s())
                            },
                            children: [(0, r.jsx)(a.u.Child, {
                                as: o.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, r.jsx)("div", {
                                    className: "fixed inset-0 bg-sea-950/40 backdrop-blur-md transition-opacity"
                                })
                            }), (0, r.jsx)("div", {
                                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                                children: (0, r.jsx)("div", {
                                    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                                    children: (0, r.jsx)(a.u.Child, {
                                        as: o.Fragment,
                                        enter: "ease-out duration-300",
                                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                        leave: "ease-in duration-200",
                                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                        children: (0, r.jsxs)(l.V.Panel, {
                                            className: "relative transform overflow-hidden rounded-2xl border border-sea-300/20 bg-sea-950/30 px-4 pb-4 pt-5 text-left shadow-xl backdrop-blur transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-8",
                                            children: [!u && (0, r.jsx)("div", {
                                                className: "absolute right-0 top-0 pr-4 pt-4",
                                                children: (0, r.jsx)(c.Z, {
                                                    handleClose: () => n(!1)
                                                })
                                            }), (0, r.jsxs)("div", {
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
                        children: n
                    } = e;
                    return (0, r.jsx)("h3", {
                        className: i()("text-2xl font-bold text-white md:text-3xl", t),
                        children: n
                    })
                };
            Title.displayName = "Title", Modal.Title = Title;
            let Content = e => {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: t
                })
            };
            Content.displayName = "Content", Modal.Content = Content
        },
        43436: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return getChild
                }
            });
            var r = n(2265);
            let getChild = (e, t) => r.Children.map(e, e => {
                var n;
                if ((null === (n = e.type) || void 0 === n ? void 0 : n.displayName) === t) return e
            })
        },
        79043: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return r
                }
            });
            let r = Object.freeze({
                id: "id",
                requester: "requester",
                fulfiller: "fulfiller",
                tokenAddress: "tokenAddress",
                token: "token",
                initialTokens: "initialTokens",
                availableTokens: "availableTokens",
                formattedPricePerToken: "formattedPricePerToken",
                pricePerToken: "pricePerToken",
                requestedETHAmount: "requestedETHAmount",
                fulfilledETH: "fulfilledETH",
                state: "state",
                blockNumber: "blockNumber",
                createdAt: "createdAt",
                partiallyFillable: "partiallyFillable",
                whitelistedAddress: "whitelistedAddress",
                fillProgress: "fillProgress",
                priceDelta: "priceDelta",
                orderBy: "orderBy",
                orderDirection: "orderDirection",
                tokenAmountOperator: "tokenAmountOperator",
                ethAmountOperator: "ethAmountOperator",
                type: "type",
                transactionHash: "transactionHash",
                timestamp: "timestamp",
                historyState: "state",
                fill: "fill",
                tokenAmount: "tokenAmount",
                ethAmount: "ethAmount"
            })
        },
        62461: function(e, t, n) {
            n.d(t, {
                A9: function() {
                    return searchOrders
                },
                HG: function() {
                    return getOrderById
                },
                Kt: function() {
                    return getMetrics
                },
                LI: function() {
                    return getFillEvents
                },
                R5: function() {
                    return getEpoch
                },
                XS: function() {
                    return getOrdersByTokenAddress
                },
                j_: function() {
                    return getTotals
                },
                k8: function() {
                    return getTransferTax
                },
                oI: function() {
                    return getUserStakingData
                },
                v1: function() {
                    return getOrdersByTokenAndRequester
                },
                ze: function() {
                    return getMyOrders
                }
            });
            var r = n(60891),
                a = n(67389),
                l = n(79043);

            function _templateObject() {
                let e = (0, r._)(['\n    query GetOrderById {\n        orders(where: { id: "', '" } ) {\n            id\n            requester\n            tokenAddress\n            initialTokens\n            availableTokens\n            pricePerToken\n            partiallyFillable\n            whitelistedAddress\n            fulfilledETH\n            formattedPricePerToken\n            requestedETHAmount\n            state\n            history(orderBy: timestamp, orderDirection: ', ") {\n                id\n                type\n                transactionHash\n                timestamp\n                state\n                fill {\n                    tokenAmount\n                }\n            }\n        }\n    }\n"]);
                return _templateObject = function() {
                    return e
                }, e
            }

            function _templateObject1() {
                let e = (0, r._)(['\n    query GetOrdersByTokenAddress {\n        orders(where: { tokenAddress: "', '" }, orderBy: createdAt, orderDirection: "desc" ) {\n            id\n            requester\n            tokenAddress\n            initialTokens\n            availableTokens\n            pricePerToken\n            partiallyFillable\n            whitelistedAddress\n            fulfilledETH\n            createdAt\n            formattedPricePerToken\n            requestedETHAmount\n            state\n            history(orderBy: timestamp, orderDirection: ', ") {\n                id\n                type\n                transactionHash\n                timestamp\n                state\n                fill {\n                    tokenAmount\n                }\n            }\n        }\n    }\n"]);
                return _templateObject1 = function() {
                    return e
                }, e
            }

            function _templateObject2() {
                let e = (0, r._)(['\n    query GetOrdersByTokenAndRequester {\n        orders(where: { tokenAddress: "', '", requester: "', '" }, orderBy: createdAt, orderDirection: "desc" ) {\n            id\n            requester\n            tokenAddress\n            initialTokens\n            availableTokens\n            pricePerToken\n            partiallyFillable\n            whitelistedAddress\n            fulfilledETH\n            createdAt\n            formattedPricePerToken\n            requestedETHAmount\n            state\n            history(orderBy: timestamp, orderDirection: ', ") {\n                id\n                type\n                transactionHash\n                timestamp\n                state\n                fill {\n                    tokenAmount\n                }\n            }\n        }\n    }\n"]);
                return _templateObject2 = function() {
                    return e
                }, e
            }

            function _templateObject4() {
                let e = (0, r._)(["\n        query searchOrders {\n            orders (\n                first: ", ",\n                where: {\n                    ", "\n                },\n                orderBy: ", ",\n                orderDirection: ", "\n            ) {\n                id\n                createdAt\n                requester\n                initialTokens\n                availableTokens\n                pricePerToken\n                whitelistedAddress\n                formattedPricePerToken\n                partiallyFillable\n                requestedETHAmount\n                tokenAddress\n                state\n                history (orderBy: timestamp, first: 1) {\n                    timestamp\n                }\n            }\n        }\n    "]);
                return _templateObject4 = function() {
                    return e
                }, e
            }

            function _templateObject5() {
                let e = (0, r._)(["\n        query myOrders {\n            orders (\n                first: ", ",\n                skip: ", ',\n                where: {\n                    requester: "', '"\n                },\n                orderBy: ', ",\n                orderDirection: ", "\n            ) {\n                id\n                createdAt\n                requester\n                initialTokens\n                availableTokens\n                pricePerToken\n                whitelistedAddress\n                formattedPricePerToken\n                partiallyFillable\n                requestedETHAmount\n                tokenAddress\n                state\n                history (orderBy: timestamp, first: 1) {\n                    timestamp\n                }\n            }\n        }\n    "]);
                return _templateObject5 = function() {
                    return e
                }, e
            }

            function _templateObject6() {
                let e = (0, r._)(["\n    query getTotals {\n        totals {\n            ", "\n        }\n    }\n"]);
                return _templateObject6 = function() {
                    return e
                }, e
            }

            function _templateObject7() {
                let e = (0, r._)(['\n        {\n            fills(\n                orderBy: timestamp\n                orderDirection: desc\n                where: { \n                    fulfiller: "', '"\n                },\n                skip: ', ",\n                first: ", "\n            ) {\n                id\n                fulfiller\n                tokenAmount\n                timestamp\n                pricePerToken\n                ethAmount\n                transactionHash\n                orderId {\n                    id\n                    tokenAddress\n                    state\n                    formattedPricePerToken\n                    createdAt\n                }\n            }\n        }\n    "]);
                return _templateObject7 = function() {
                    return e
                }, e
            }

            function _templateObject8() {
                let e = (0, r._)(['\n    {\n        transferTaxes(\n            first: 1, \n            where: { \n                tokenAddress: "', '"\n            }, \n            orderBy: timestamp, \n            orderDirection: desc\n        ) {\n            percentage\n        }\n    }\n']);
                return _templateObject8 = function() {
                    return e
                }, e
            }

            function _templateObject9() {
                let e = (0, r._)(['\n    query GetGlobals {\n        globals(id: "0x01") {\n            currentEpoch {\n                id\n                sharePerToken\n            }\n            latestEpoch {\n                id\n                sharePerToken\n            }\n            totalStaked\n            totalClaimed\n            totalDistributed\n            totalCompoundedETH\n            totalCompoundedTokens\n        }\n    }\n']);
                return _templateObject9 = function() {
                    return e
                }, e
            }

            function _templateObject10() {
                let e = (0, r._)(['\n    query GetEpoch {\n        epoches(where: { id: "', '" }) {\n            id\n            startedAt\n            endedAt\n            totalStake\n            sharePerToken\n            distributed\n        }\n    }\n']);
                return _templateObject10 = function() {
                    return e
                }, e
            }

            function _templateObject11() {
                let e = (0, r._)(['\n    query GetUserStakingData {\n        users(where: { id: "', '" }) {\n            currentStake\n            totalClaimed\n            deposits {\n                index\n                firstRewardedEpoch {\n                    id\n                }\n                claimedUpToEpoch {\n                    id\n                }\n                lastRewardedEpoch {\n                    id\n                }\n                amount\n                stakeTxHash\n                stakeTimestamp\n                unstakeTxHash\n                unstakeTimestamp\n            }\n            claims(orderDirection: asc) {\n                receiver\n                indexes\n                amount\n                blockTimestamp\n                txHash\n            }\n            compounds {\n                amount\n                txHash\n                blockTimestamp\n                indexes\n            }\n            totalClaimed\n        }\n    }\n']);
                return _templateObject11 = function() {
                    return e
                }, e
            }
            let getOrderById = e => {
                    let {
                        id: t,
                        historyOrder: n = "desc"
                    } = e;
                    return (0, a.Ps)(_templateObject(), t, n)
                },
                getOrdersByTokenAddress = e => {
                    let {
                        tokenAddress: t,
                        historyOrder: n = "desc"
                    } = e;
                    return (0, a.Ps)(_templateObject1(), t, n)
                },
                getOrdersByTokenAndRequester = e => {
                    let {
                        tokenAddress: t,
                        historyOrder: n = "desc",
                        requester: r
                    } = e;
                    return (0, a.Ps)(_templateObject2(), t, r, n)
                },
                searchOrders = function() {
                    let {
                        tokenAmountOperator: e,
                        ethAmountOperator: t,
                        orderBy: n = l.I.createdAt,
                        orderDirection: r = "desc",
                        page: s,
                        perPage: i,
                        ...o
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, c = Object.entries(o).filter(e => {
                        let [t] = e;
                        return "preview" !== t
                    }).map(n => {
                        let [r, a] = n;
                        if (!a && !Number.isSafeInteger(a)) return null;
                        switch (r) {
                            case l.I.availableTokens:
                                return "availableTokens_".concat(e, ": ").concat(parseFloat(a));
                            case l.I.requestedETHAmount:
                                return "requestedETHAmount_".concat(t, ": ").concat(parseFloat(a));
                            case l.I.state:
                                if (!~a) return "state_gt: ".concat(a);
                            case l.I.requester:
                                if (a) return 'requester: "'.concat(a, '"');
                            default:
                                return Number.isSafeInteger(parseInt(a)) ? "".concat(r, ": ").concat(parseInt(a)) : "".concat(r, ': "').concat(a, '"')
                        }
                    }).filter(Boolean).join(", ");
                    return console.log(c), (0, a.Ps)(_templateObject4(), i + 1, c, n, r)
                },
                getMyOrders = function() {
                    let {
                        orderBy: e = l.I.createdAt,
                        orderDirection: t = "desc",
                        page: n,
                        perPage: r,
                        requester: s
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Ps)(_templateObject5(), r + 1, (n - 1) * r, s, e, t)
                },
                getTotals = e => {
                    let {
                        totalOf: t
                    } = e;
                    return (0, a.Ps)(_templateObject6(), t)
                },
                getFillEvents = e => {
                    let {
                        fulfiller: t,
                        skip: n,
                        first: r
                    } = e;
                    return (0, a.Ps)(_templateObject7(), t, n, r)
                },
                getTransferTax = e => {
                    let {
                        tokenAddress: t
                    } = e;
                    return t && (0, a.Ps)(_templateObject8(), t)
                },
                getMetrics = () => (0, a.Ps)(_templateObject9()),
                getEpoch = e => (0, a.Ps)(_templateObject10(), e),
                getUserStakingData = e => (0, a.Ps)(_templateObject11(), e)
        },
        44201: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return useAlchemy
                }
            });
            var r = n(76751);
            let a = {
                    apiKey: "C3BHzcbwRa5S3ix8tmTjno-ZQV1MC8lF",
                    network: r.N.ETH_MAINNET
                },
                l = new r.m(a);

            function useAlchemy() {
                return l
            }
        },
        62035: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return useTokenPrice
                }
            });
            var r = n(2265);
            n(31185);
            var a = n(34065),
                l = n(51360);

            function useTokenPrice(e) {
                let {
                    ethUsd: t
                } = (0, r.useContext)(a.F), {
                    addTokensToFetch: n,
                    removeTokensToFetch: s,
                    tokenPrices: i
                } = (0, r.useContext)(l.M);
                return (0, r.useEffect)(() => {
                    n(e)
                }, [e, n, s]), i[e.address.toLowerCase()]
            }
        },
        14627: function(e, t) {
            t.Z = {
                src: "/_next/static/media/migrated.c516e2bb.webp",
                height: 1080,
                width: 1080,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        12169: function(e, t) {
            t.Z = {
                src: "/_next/static/media/otsea-logo.ce507ece.png",
                height: 600,
                width: 528,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAS1BMVEVGLWGVecqcg+G5h26jdWvAkHBVPY2tfG1+WGqdc33CkHBPMmFUOmnGlnMAACJ7Ya1rUZsAACR7X63lqnP/yXj/13+JcNO9iW9lQmJcTjaAAAAAE3RSTlND9v794P6H1Pf++/7+/RatvBWtFMUmLAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwdx0kSgCAMAMEBgYAbakLw/y+1yr41pLnMBDLMbAhZ1VRX8lbHux/If4HaWqtQ3GP0wtnDFZ77A1nIArhuvrQiAAAAAElFTkSuQmCC",
                blurWidth: 7,
                blurHeight: 8
            }
        }
    }
]);