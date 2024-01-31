(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3252], {
        46601: function() {},
        51199: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return AddMEVProtection
                }
            });
            var a = n(57437),
                r = n(35785),
                s = n(99527),
                i = n(12025),
                l = n(54440),
                o = n.n(l),
                u = n(54844);

            function AddMEVProtection(e) {
                var t, n;
                let {
                    disabled: l = !1
                } = e, addNetwork = async () => {
                    if (!window.ethereum) {
                        console.error("Metamask not detected");
                        return
                    }
                    let e = await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: "0x1",
                            chainName: "Flashbots Protect (Mainnet)",
                            rpcUrls: ["https://rpc.flashbots.net/fast"],
                            blockExplorerUrls: ["https://etherscan.io"],
                            nativeCurrency: {
                                name: "Ether",
                                symbol: "ETH",
                                decimals: 18
                            }
                        }]
                    });
                    console.log("Switched?", e)
                }, d = !!(null === (t = window.ethereum) || void 0 === t ? void 0 : t.isBraveWallet), c = !!(null === (n = window.ethereum) || void 0 === n ? void 0 : n.isMetaMask) && !d, p = (0, u.Z)();
                return console.table({
                    isBraveWallet: d,
                    isMetaMask: c
                }), (0, a.jsxs)(a.Fragment, {
                    children: [d && (0, a.jsx)(i.Tooltip, {
                        className: "w-1/2 bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "MEV bots scan the mempool to frontrun your transaction on DEX's across DeFi. Brave Wallet users are protected against MEV bots on OTSea.",
                        children: (0, a.jsx)("button", {
                            type: "button",
                            disabled: l,
                            className: o()("relative z-10 flex cursor-default justify-center overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:bg-green-200 before:opacity-70 before:transition-all hover:before:opacity-80 active:top-px active:before:bg-green-400 active:before:shadow-inner disabled:cursor-default disabled:opacity-60", p ? "px-4 py-2" : "w-1/4 px-2 py-6"),
                            children: (0, a.jsx)(r.Z, {
                                className: o()("text-white/80", p ? "h-6 w-6" : "h-8 w-8")
                            })
                        })
                    }), c && (0, a.jsx)(i.Tooltip, {
                        className: "w-1/2 bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "MEV bots scan the mempool to frontrun your transaction on DEX's across DeFi. Add Flashbots RPC to protect against MEV bots by making your transactions private. Read more in our docs.",
                        children: (0, a.jsx)("button", {
                            type: "button",
                            disabled: l,
                            onClick: () => addNetwork(),
                            className: o()("relative z-10 flex cursor-pointer justify-center overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:bg-blue-200 before:opacity-70 before:transition-all hover:before:opacity-80 active:top-px active:before:bg-blue-400 active:before:shadow-inner disabled:cursor-default disabled:opacity-60", p ? "px-4 py-2" : "w-1/4 flex-shrink-0 px-2 py-6"),
                            children: (0, a.jsx)(s.Z, {
                                className: o()("text-white", p ? "h-6 w-6" : "h-8 w-8")
                            })
                        })
                    })]
                })
            }
        },
        51274: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return SettleOrder
                }
            });
            var a = n(57437),
                r = n(12025),
                s = n(54440),
                i = n.n(s),
                l = n(59344),
                o = n(54844),
                u = n(87415),
                d = n(56926),
                c = n(10688),
                p = n(17081);

            function SettleOrder(e) {
                let {
                    order: t
                } = e, {
                    handleSettleOrder: n,
                    loadingState: s
                } = function(e) {
                    let {
                        config: t
                    } = (0, d.PJ)({
                        address: c.L,
                        abi: c.M,
                        functionName: "settleOrder",
                        args: [e.id]
                    }), n = (0, d.GG)(t), {
                        handleContractWrite: a,
                        loadingState: r
                    } = (0, p.Z)({
                        contractWrite: n,
                        txLoadingMessage: "Settling order...",
                        onSuccess: () => {
                            u.Am.success("Order settled.")
                        }
                    });
                    return {
                        handleSettleOrder: a,
                        loadingState: r
                    }
                }(t), y = (0, o.Z)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.Z, {
                        loadingState: s
                    }), (0, a.jsx)(r.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "Settling will collect all ETH and withdraw unfulfilled tokens",
                        children: (0, a.jsx)("button", {
                            className: i()("relative w-full overflow-hidden rounded-lg text-white before:absolute before:inset-0 before:bg-orange-500 before:opacity-60 before:transition-all hover:before:opacity-70 active:top-px active:before:bg-orange-500 active:before:shadow-inner disabled:before:content-none", y ? "py-3" : "px-8 py-5"),
                            onClick: n,
                            type: "submit",
                            children: (0, a.jsx)("span", {
                                className: "relative font-mono tracking-wider text-white data-[disabled='true']:text-gray-500 ",
                                children: y ? "Settle" : "Settle Order"
                            })
                        })
                    })]
                })
            }
        },
        70346: function(e, t, n) {
            "use strict";
            var a = n(57437),
                r = n(28093),
                s = n(12025),
                i = n(16691),
                l = n.n(i),
                o = n(61396),
                u = n.n(o),
                d = n(2265),
                c = n(31095),
                p = n(39297),
                y = n(72940),
                m = n(17518);
            t.Z = (0, d.forwardRef)(function(e, t) {
                let {
                    order: n,
                    fillAmount: i,
                    finalPrice: o,
                    token: f,
                    tokenPrice: b
                } = e, h = (0, m.Z)(t), x = (Math.abs(o - n.formattedPricePerToken) / o * 100).toFixed(2), g = x.replace(/\.?0+$/, ""), w = "I just picked up some $".concat(f.symbol, " at ").concat(g, "% below market price on OTSea! @otseaERC20"), T = "".concat("https://otsea.io", "/api/trade-recap?title=OTSea&tokenAmount=").concat(i, "&tokenPrice=").concat(n.formattedPricePerToken, "&uniswapPrice=").concat(b, "&percentDiscount=").concat((Math.abs(o - n.formattedPricePerToken) / o * 100).toFixed(2), "&tokenSymbol=").concat(f.symbol), [v, k] = (0, d.useState)(!0);
                (0, d.useEffect)(() => {
                    (0, p.bQ)(), k(!0)
                }, [T]);
                let [j, N] = (0, d.useState)();
                return (0, d.useEffect)(() => {
                    j && setTimeout(() => {
                        j.classList.remove("flex"), j.offsetWidth, j.classList.add("flex")
                    }, 500)
                }, [j]), (0, a.jsxs)("dialog", {
                    className: "scale-in-center relative box-content w-[75vmin] max-w-[500px] rounded-3xl bg-black bg-opacity-20 px-6 pb-6 pt-4 shadow-2xl backdrop-blur",
                    ref: t,
                    children: [(0, a.jsx)(y.Z, {
                        handleClose: h
                    }), (0, a.jsx)("h1", {
                        className: "mb-3 mt-1 text-xl font-extrabold text-white",
                        children: "Filled! Share your savings \uD83C\uDF8A"
                    }), (0, a.jsxs)("div", {
                        className: "flex max-w-full flex-col",
                        children: [(0, a.jsxs)("div", {
                            className: "relative grid h-[90vmin] max-h-[600px] w-[75vmin] max-w-[500px] place-items-center",
                            children: [v && (0, a.jsx)(s.Spinner, {
                                color: "blue",
                                className: "h-12 w-12"
                            }), (0, a.jsx)(l(), {
                                src: T,
                                width: 500,
                                height: 600,
                                onLoadingComplete: () => k(!1),
                                alt: "generated image",
                                className: "absolute inset-0 rounded-xl shadow-inner-xl"
                            })]
                        }), (0, a.jsxs)("div", {
                            ref: N,
                            className: "-mb-2 mt-4 flex w-full items-center justify-center gap-2 md:justify-start",
                            children: [" ", c.tq ? (0, a.jsx)("span", {
                                className: "font-sans text-xs font-bold text-white",
                                children: "Long tap, Save Image and"
                            }) : (0, a.jsxs)(u(), {
                                href: T + "&download=true",
                                className: "flex items-center justify-center gap-2 rounded-full bg-blue-400 px-3 py-1 text-sm font-bold text-white transition-all hover:bg-blue-500",
                                children: [(0, a.jsx)(r.Z, {
                                    className: "h-4 w-4"
                                }), "Download"]
                            }), (0, a.jsx)(p.mB, {
                                url: w,
                                options: {
                                    size: "large"
                                },
                                renderError: e => (console.log(e), (0, a.jsx)(u(), {
                                    href: "twitter.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "font-sm rounded-full bg-blue-400 px-4 py-0.5 font-sans font-bold text-white",
                                    children: "Open Twitter"
                                }))
                            })]
                        })]
                    })]
                })
            })
        },
        84437: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return UpdatePrice
                }
            });
            var a = n(57437),
                r = n(12025),
                s = n(54440),
                i = n.n(s),
                l = n(2265),
                o = n(79352),
                u = n(52078),
                d = n(72940),
                c = n(59344),
                p = n(79043),
                y = n(17518),
                m = n(54844),
                f = n(62035),
                b = n(61396),
                h = n.n(b),
                x = n(87415),
                g = n(56926),
                w = n(10688),
                T = n(17081);

            function UpdatePrice(e) {
                let {
                    order: t,
                    token: n
                } = e, s = (0, l.useRef)(), b = (0, f.Z)(n), v = (0, y.Z)(s), [k, j] = (0, l.useState)(t.partiallyFillable ? t.formattedPricePerToken : t[p.I.requestedETHAmount]), {
                    handleUpdatePrice: N,
                    loadingState: A
                } = function(e) {
                    let {
                        orderId: t,
                        newPrice: n,
                        handleCloseDialog: r
                    } = e, {
                        config: s
                    } = (0, g.PJ)({
                        address: w.L,
                        abi: w.M,
                        functionName: "updatePrice",
                        args: [t, (0, u.f)(n)]
                    }), i = (0, g.GG)(s), {
                        handleContractWrite: l,
                        loadingState: o
                    } = (0, T.Z)({
                        contractWrite: i,
                        onSuccess: () => {
                            r(), x.Am.success((0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(h(), {
                                    href: "/orders",
                                    children: "Price updated."
                                })
                            }))
                        },
                        txLoadingMessage: "Updating price..."
                    });
                    return {
                        handleUpdatePrice: l,
                        loadingState: o
                    }
                }({
                    orderId: t.id,
                    newPrice: k,
                    handleCloseDialog: () => {
                        j(""), v()
                    }
                }), S = k && b && (((t.partiallyFillable ? k : (0, o.d)((0, u.f)(k) / BigInt(t[p.I.availableTokens]))) - b) / b * 100).toFixed(2), [C, E] = (0, l.useState)(""), [O, P] = (0, l.useState)(""), {
                    partiallyFillable: M,
                    fulfilledETH: F,
                    availableTokens: Z
                } = t;
                (0, l.useEffect)(() => {
                    M ? (console.table({
                        fulfilledETH: F,
                        newPrice: k,
                        availableTokens: Z,
                        newRETH: Number(F) + Number(k) * Number(Z)
                    }), P(k), E(Number(F) + Number(k) * Number(Z))) : (E(k), P((BigInt(Math.floor(1e18 * k)) / BigInt(Z)).toString()))
                }, [k, C, O, M, F, Z]);
                let L = (0, m.Z)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("button", {
                        onClick: () => s.current.showModal(),
                        className: i()("relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-blue-500 bg-opacity-70 font-mono tracking-wider text-white data-[disabled='true']:text-gray-500", L ? "py-3" : "px-8 py-5"),
                        children: L ? "Update" : "Update Price"
                    }), (0, a.jsxs)("dialog", {
                        ref: s,
                        className: "scale-in-center relative w-screen flex-col overflow-hidden rounded-3xl bg-black bg-opacity-20 px-8 py-6 text-blue-50 shadow-2xl backdrop-blur md:w-[30vw] md:min-w-[500px] md:px-8 md:pb-10 md:pt-12",
                        children: [(0, a.jsx)(c.Z, {
                            loadingState: A
                        }), (0, a.jsx)(d.Z, {
                            handleClose: v
                        }), (0, a.jsx)("h2", {
                            className: "text-md flex items-center gap-4 font-mono text-lg md:text-2xl",
                            children: t.partiallyFillable ? "Update price per token" : "Update Requested ETH"
                        }), (0, a.jsx)("div", {
                            className: "mt-4 flex flex-col",
                            children: (0, a.jsx)("form", {
                                onSubmit: N,
                                className: "flex flex-col justify-between gap-4",
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-col justify-between",
                                    children: [(0, a.jsxs)("div", {
                                        className: "md:text-md flex flex-row justify-between gap-2 text-sm",
                                        children: [(0, a.jsx)("div", {
                                            children: "Your Price: "
                                        }), (0, a.jsx)("div", {
                                            children: +(0, o.d)(t.pricePerToken)
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "md:text-md flex flex-row justify-between gap-2 text-sm",
                                        children: [(0, a.jsx)("div", {
                                            children: "Market Price/Token: "
                                        }), (0, a.jsxs)("div", {
                                            children: [b || (0, a.jsx)(r.Spinner, {
                                                color: "blue",
                                                className: "h-3 w-3"
                                            }), " "]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "md:text-md mt-4 flex flex-row justify-between gap-2 text-sm md:gap-0",
                                        children: [(0, a.jsx)("div", {
                                            children: t.partiallyFillable ? "New Requested ETH: " : "New Price Per Token:"
                                        }), (0, a.jsx)("div", {
                                            children: t.partiallyFillable ? (0, a.jsx)("span", {
                                                children: C
                                            }) : (0, a.jsx)("span", {
                                                children: +(0, o.d)(O)
                                            })
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "my-3 flex w-1/3 justify-start md:w-1/4",
                                        children: (0, a.jsxs)(r.Select, {
                                            containerProps: {
                                                className: "h-[1em!important] min-w-[8ch] font-mono text-xs [&_button]:p-0 [&_button_span]:pt-0 [&_label]:h-6 [&_label:after]:bottom-0 [&_label:after]:border-blue-50 [&_svg]:text-blue-50"
                                            },
                                            color: "light-blue",
                                            menuProps: {
                                                className: "bg-black bg-opacity-50 text-xs text-white rounded-xl border border-blue-50/10 min-w-[20ch] text-start"
                                            },
                                            className: "border-none text-xs text-blue-50",
                                            variant: "standard",
                                            value: S,
                                            onChange: e => {
                                                console.table({
                                                    newDelta: e,
                                                    current: S
                                                });
                                                let n = (b * (1 + +e / 100)).toFixed(18);
                                                console.table({
                                                    tokenDexPrice: b,
                                                    delta: e,
                                                    priceToApply: n
                                                }), j(t.partiallyFillable ? n : (0, o.d)((0, u.f)(n) * BigInt(t[p.I.availableTokens])))
                                            },
                                            selected: e => S ? +S ? "".concat(Math.abs(S), "% ").concat(S < 0 ? "lower" : "higher") : "= Mkt Rate" : "Select %",
                                            children: [(0, a.jsx)(r.Option, {
                                                value: "10.00",
                                                children: "10% higher"
                                            }), (0, a.jsx)(r.Option, {
                                                value: "5.00",
                                                children: "5% higher"
                                            }), (0, a.jsx)(r.Option, {
                                                value: "0.00",
                                                children: "= Mkt Rate"
                                            }), (0, a.jsx)(r.Option, {
                                                value: "-5.00",
                                                children: "5% lower"
                                            }), (0, a.jsx)(r.Option, {
                                                value: "-10.00",
                                                children: "10% lower"
                                            })]
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col justify-end gap-2",
                                        children: [(0, a.jsx)(r.Input, {
                                            className: "absolute inset-0 h-full w-full bg-transparent p-4 text-white outline-none",
                                            label: t.partiallyFillable ? "New price per token" : "New requested ETH",
                                            containerProps: {
                                                className: "min-w-[unset]"
                                            },
                                            labelProps: {
                                                className: "text-blue-900"
                                            },
                                            type: "number",
                                            value: k,
                                            onChange: e => j(e.target.value),
                                            color: "light-blue"
                                        }), (0, a.jsx)("button", {
                                            type: "submit",
                                            className: "relative w-full overflow-hidden rounded-lg px-8 py-5 text-white before:absolute before:inset-0 before:rounded-3xl before:bg-orange-500 before:opacity-60 before:transition-all hover:before:opacity-70 active:top-px active:before:bg-orange-500 active:before:shadow-inner disabled:before:content-none",
                                            children: (0, a.jsx)("span", {
                                                className: "relative font-mono tracking-wider text-white data-[disabled='true']:text-gray-500 ",
                                                children: "Update"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
        },
        35529: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return PriceDelta
                }
            });
            var a = n(57437),
                r = n(12025),
                s = n(54440),
                i = n.n(s),
                l = n(13080),
                o = n(86191),
                u = n(28843);

            function PriceComparison(e) {
                let {
                    dexPrice: t,
                    orderPrice: n
                } = e, r = String(n).length > String(t).length ? String(n) : String(t);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("span", {
                        className: "flex justify-between gap-2",
                        children: ["Listed Price:", (0, a.jsxs)("span", {
                            className: "font-mono",
                            children: [String(n).padEnd(r.length, "0"), " ETH"]
                        })]
                    }), (0, a.jsxs)("span", {
                        className: "flex justify-between gap-2",
                        children: ["Market Price:", (0, a.jsxs)("span", {
                            className: "font-mono",
                            children: [String(t).padEnd(r.length, "0"), " ETH"]
                        })]
                    })]
                })
            }
            var d = n(79043),
                c = n(62035);

            function PriceDelta(e) {
                let {
                    className: t,
                    order: n
                } = e, s = (0, c.Z)(n.token), p = n[d.I.formattedPricePerToken], y = 100 * Math.abs(p - s) / s;
                return null === s ? (0, a.jsx)(u.Z, {}) : isNaN(y) ? (0, a.jsx)(r.Spinner, {
                    color: "blue",
                    className: "h-3 w-3"
                }) : (0, a.jsx)(r.Tooltip, {
                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                    content: (0, a.jsxs)("div", {
                        className: "flex flex-col text-sm",
                        children: [(0, a.jsxs)("span", {
                            children: ["This order is listed ", (0, l.ZP)(y.toFixed(2)), "%", (0, a.jsx)("span", {
                                children: p > s ? " above" : " below"
                            }), " ", "market rate."]
                        }), (0, a.jsx)(PriceComparison, {
                            orderPrice: p,
                            dexPrice: s
                        })]
                    }),
                    children: (0, a.jsxs)("span", {
                        className: i()(t, "flex w-full items-center gap-1 rounded-md font-mono text-xs"),
                        children: [p < s ? (0, a.jsx)(o.Z.Down, {
                            className: "text-green-200"
                        }) : (0, a.jsx)(o.Z.Up, {
                            className: "text-red-400"
                        }), (0, a.jsxs)("span", {
                            className: p < s ? "text-green-100" : "text-red-100",
                            children: [(0, l.ZP)(y.toFixed(2)), (0, a.jsx)("span", {
                                className: "ml-1",
                                children: "%"
                            })]
                        })]
                    })
                })
            }
        },
        54684: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return CustomConnectButton
                }
            });
            var a = n(57437),
                r = n(12025),
                s = n(82256),
                i = n(16691),
                l = n.n(i),
                o = n(2265),
                u = n(56926),
                d = n(54844);

            function CustomConnectButton(e) {
                let {
                    hash: t,
                    href: n
                } = e, {
                    address: i
                } = (0, u.mA)(), [c, p] = (0, o.useState)();
                (0, o.useEffect)(() => {
                    i && (p((0, a.jsx)(r.Spinner, {
                        color: "blue",
                        className: "relative -mt-px h-3 w-3"
                    })), fetch("/api/sea-rank?address=" + i).then(e => e.ok ? e.text() : "?").then(p).catch(() => p("?")))
                }, [i]);
                let y = (0, d.Z)();
                return (0, a.jsx)(s.NL.Custom, {
                    children: e => {
                        var t;
                        let {
                            account: n,
                            chain: r,
                            openAccountModal: s,
                            openChainModal: i,
                            openConnectModal: o,
                            authenticationStatus: u,
                            mounted: d,
                            accountStatus: p
                        } = e, m = d && "loading" !== u;
                        return m ? (0, a.jsx)("div", {
                            className: "flex gap-3",
                            children: m && n && r && (!u || "authenticated" === u) ? r.unsupported ? (0, a.jsx)("button", {
                                className: "hover:bg-slate-600 flex h-[34px] items-center rounded-full bg-red-500 bg-opacity-50 px-6 font-comforta text-sm text-white shadow-none transition-all hover:bg-opacity-70",
                                onClick: i,
                                type: "button",
                                children: "Wrong network"
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)("button", {
                                    onClick: s,
                                    type: "button",
                                    className: "\n                                        hover:bg-slate-600\n                                        flex\n                                        h-[34px]\n                                        w-full\n                                        items-center\n                                        justify-center\n                                        gap-2\n                                        rounded-full\n                                        bg-blue-300\n                                        px-4\n                                        font-comforta\n                                        text-xs\n                                        font-black\n                                        text-white\n                                        transition-all\n                                        hover:bg-opacity-50\n                                        md:text-sm\n                                        ",
                                    children: [(0, a.jsx)("span", {
                                        className: "text-lg",
                                        children: c
                                    }), !y && (0, a.jsx)("span", {
                                        className: "relative top-px",
                                        children: n.displayName
                                    })]
                                }), (0, a.jsx)("button", {
                                    onClick: i,
                                    className: "flex items-center justify-center",
                                    type: "button",
                                    children: r.hasIcon && (0, a.jsx)("div", {
                                        style: {
                                            background: r.iconBackground,
                                            width: 30,
                                            height: 30,
                                            borderRadius: 999,
                                            overflow: "hidden"
                                        },
                                        children: r.iconUrl && (0, a.jsx)(l(), {
                                            alt: null !== (t = r.name) && void 0 !== t ? t : "Chain icon",
                                            src: r.iconUrl,
                                            width: 30,
                                            height: 30,
                                            className: "object-contain"
                                        })
                                    })
                                })]
                            }) : (0, a.jsx)("button", {
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
        86191: function(e, t, n) {
            "use strict";
            var a = n(57437),
                r = n(54440),
                s = n.n(r);
            t.Z = {
                Up: e => {
                    let {
                        className: t
                    } = e;
                    return (0, a.jsx)("div", {
                        className: s()("h-4 w-4", t),
                        children: (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "fill-current",
                            viewBox: "0 0 512 512",
                            children: (0, a.jsx)("path", {
                                d: "M448 368L256 144 64 368h384z"
                            })
                        })
                    })
                },
                Down: e => {
                    let {
                        className: t
                    } = e;
                    return (0, a.jsx)("div", {
                        className: s()("h-4 w-4", t),
                        children: (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "fill-current",
                            viewBox: "0 0 512 512",
                            children: (0, a.jsx)("path", {
                                d: "M64 144l192 224 192-224H64z"
                            })
                        })
                    })
                }
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
            var r = n(54440),
                s = n.n(r),
                i = n(16691),
                l = n.n(i),
                o = n(2265),
                u = n(56926),
                d = n(12169);

            function Loader(e) {
                let {
                    loadingState: t,
                    className: n,
                    fullScreen: r = !0
                } = e, {
                    transaction: i,
                    txLoadingMessage: c,
                    callbacks: [p, y] = [],
                    waitingForWallet: m,
                    setWaitingForWallet: f
                } = t || {}, [b, h] = (0, o.useState)(null), {
                    data: x,
                    isError: g,
                    isLoading: w,
                    isSuccess: T,
                    error: v
                } = (0, u.BX)({
                    hash: b
                }), k = T || g;
                return (0, o.useEffect)(() => {
                    console.log(i), i ? (async () => {
                        try {
                            let e = "string" != typeof i ? (await i.writeAsync()).hash : i;
                            h(e)
                        } catch (e) {
                            console.log(e), f(!1), null == y || y(e)
                        }
                    })() : h(null)
                }, [i, f, y]), (0, o.useEffect)(() => {
                    b && k && (g ? y(v) : p(x), h(null))
                }, [b, k, g, v, y, p, x]), (0, o.useEffect)(() => {
                    w && !k && f(!1)
                }, [k, w, f]), (w || m) && (0, a.jsxs)("div", {
                    className: s()("inset-0 z-50 flex flex-col items-center justify-center rounded-xl bg-blue-gray-900 bg-opacity-80 text-2xl font-bold text-blue-100", m || r ? "fixed" : "absolute", n),
                    children: [(0, a.jsx)(l(), {
                        alt: "happy blocktopus",
                        src: d.Z,
                        className: "h-24 w-auto animate-bounce opacity-70"
                    }), (0, a.jsx)("div", {
                        className: "flex animate-pulse items-center gap-4",
                        children: (m || c) && (0, a.jsx)("span", {
                            className: "font-mono text-base",
                            children: m ? "Proceed on Wallet..." : c
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
                r = n(79425),
                s = n(12025);

            function NoPriceData() {
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)(s.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "No market price could be retrieved for this token",
                        children: (0, a.jsx)(r.Z, {
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
                    return r
                }
            });
            var a = n(33948);
            let r = {
                name: "OTSea",
                symbol: "OTSEA",
                address: a.L,
                thumb: "https://otsea.io/otsea-erc20-thumb.jpg",
                balance: 0,
                decimals: 18
            }
        },
        74157: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return a
                }
            });
            let a = new class {
                constructor(e) {
                    return Object.freeze(e.reduce((e, t, n) => (e[t] = n, e), e))
                }
            }(["Open", "Fulfilled", "Settled"])
        },
        51360: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return r
                }
            });
            var a = n(2265);
            let r = (0, a.createContext)({})
        },
        44201: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useAlchemy
                }
            });
            var a = n(76751);
            let r = {
                    apiKey: "C3BHzcbwRa5S3ix8tmTjno-ZQV1MC8lF",
                    network: a.N.ETH_MAINNET
                },
                s = new a.m(r);

            function useAlchemy() {
                return s
            }
        },
        55777: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useFillOrder
                }
            });
            var a = n(87415),
                r = n(44201),
                s = n(2265),
                i = n(22570),
                l = n(39730),
                o = n(33720),
                u = n(53883),
                d = n(75404),
                c = n(56926),
                p = n(10688),
                y = n(17081);

            function useFillOrder(e) {
                var t;
                let n = (0, r.Z)();
                e.onError = async t => {
                    if (t.name.includes("TransactionNotFoundError")) {
                        let a = t.message.match(/0x[a-fA-F0-9]{64}/)[0];
                        try {
                            return await n.transact.waitForTransaction(a, 0, 45e3), e.onSuccess()
                        } catch (e) {}
                    } else if (t.message.includes("Ledger device")) return a.Am.error("Error on Ledger device. Please check connection and try again.");
                    else if (t.name.includes("EstimateGasExecutionError")) return a.Am.error("Gas error. Check your ETH balance and try again.");
                    console.error(t), a.Am.error("Something went wrong. Please try again later.")
                };
                let {
                    handlePrivatelyFillOrder: m,
                    loadingState: f
                } = function(e) {
                    let {
                        orderId: t,
                        ethAmountWei: n,
                        expectedPricePerToken: m,
                        onSuccess: f,
                        onError: b
                    } = e, [h, x] = (0, s.useState)(null);
                    (0, s.useEffect)(() => {
                        x((0, i.K)({
                            chain: d.R,
                            transport: window.ethereum ? (0, l.P)(window.ethereum) : (0, o.d)()
                        }))
                    }, []);
                    let g = (0, r.Z)(),
                        {
                            address: w
                        } = (0, c.mA)(),
                        {
                            loadingState: T,
                            isChainUnsupported: v,
                            handlePendingTransaction: k,
                            setPendingTransaction: j
                        } = (0, y.Z)({
                            txLoadingMessage: "Swapping..."
                        }),
                        handlePrivatelyFillOrder = async e => {
                            if (e.preventDefault(), v) return alert("Unsupported chain, switch to Ethereum Mainnet");
                            try {
                                T.setWaitingForWallet(!0);
                                let e = (0, u.R)({
                                        abi: p.M,
                                        functionName: "fulfillOrder",
                                        args: [t, m]
                                    }),
                                    a = await h.prepareTransactionRequest({
                                        account: w,
                                        to: p.L,
                                        value: n,
                                        data: e,
                                        chain: d.R
                                    }),
                                    r = await h.signTransaction(a);
                                try {
                                    let e = await g.transact.sendPrivateTransaction(r);
                                    await k(e)
                                } catch (t) {
                                    let e = t.message.match(/0x[a-fA-F0-9]{64}/)[0];
                                    if (t.message.includes("unable to decode txs")) await g.transact.waitForTransaction(e, 0, 6e4);
                                    else throw t
                                }
                                f()
                            } catch (e) {
                                if (e.message.includes("User rejected")) return;
                                b ? b(e) : (console.error(e), a.Am.error("".concat(e.name, ": ").concat(e.message)))
                            } finally {
                                j({
                                    transaction: null
                                }), T.setWaitingForWallet(!1)
                            }
                        };
                    return {
                        handlePrivatelyFillOrder,
                        loadingState: T
                    }
                }(e), {
                    handlePubliclyFillOrder: b,
                    loadingState: h
                } = function(e) {
                    let {
                        orderId: t,
                        ethAmountWei: n,
                        expectedPricePerToken: a,
                        onSuccess: r,
                        onError: s
                    } = e, i = (0, c.GG)({
                        address: p.L,
                        abi: p.M,
                        functionName: "fulfillOrder",
                        args: [t, a],
                        value: BigInt(n || 0)
                    }), {
                        handleContractWrite: l,
                        loadingState: o
                    } = (0, y.Z)({
                        contractWrite: i,
                        onSuccess: r,
                        onError: s,
                        txLoadingMessage: "Swapping..."
                    });
                    return {
                        handlePubliclyFillOrder: l,
                        loadingState: o
                    }
                }(e), x = !!(null === (t = window.ethereum) || void 0 === t ? void 0 : t.isBraveWallet);
                console.table({
                    isPrivateTxSupported: x
                });
                let [g, w] = x ? [m, f] : [b, h];
                return {
                    handleFillOrder: g,
                    loadingState: w
                }
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
        23685: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useIsOrderOwner
                }
            });
            var a = n(56926);

            function useIsOrderOwner(e) {
                var t;
                let n = ((0, a.mA)().address || "").toUpperCase();
                return (null == e ? void 0 : null === (t = e.requester) || void 0 === t ? void 0 : t.toUpperCase()) === n
            }
        },
        15276: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useIsOrderRestricted
                }
            });
            var a = n(62936),
                r = n(56926);

            function useIsOrderRestricted(e) {
                var t, n, s;
                let i = (0, r.mA)();
                return (null == e ? void 0 : e.whitelistedAddress) !== a.D && (!i.address || ![null == e ? void 0 : null === (t = e.requester) || void 0 === t ? void 0 : t.toLocaleLowerCase(), null == e ? void 0 : null === (n = e.whitelistedAddress) || void 0 === n ? void 0 : n.toLocaleLowerCase()].includes(null === (s = i.address) || void 0 === s ? void 0 : s.toLocaleLowerCase()))
            }
        },
        77676: function(e, t, n) {
            "use strict";

            function useOrderProgress(e) {
                return Math.round(1e6 * (e.initialTokens - e.availableTokens) / (100 * e.initialTokens)) / 100
            }
            n.d(t, {
                Z: function() {
                    return useOrderProgress
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
                r = n(87415),
                s = n(56926),
                i = n(44201);

            function usePendingTransaction() {
                let {
                    contractWrite: e,
                    onSuccess: t,
                    onError: n,
                    txLoadingMessage: l
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = (0, i.Z)(), [u, d] = (0, a.useState)(!1), [{
                    transaction: c,
                    callbacks: p
                }, y] = (0, a.useState)({
                    transaction: null
                }), handlePendingTransaction = async e => await new Promise(function() {
                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    return y({
                        transaction: e,
                        callbacks: n
                    })
                }), {
                    chain: m
                } = (0, s.LN)(), handleContractWrite = async a => {
                    if (null == a || a.preventDefault(), m.unsupported) return alert("Unsupported chain, switch to Ethereum Mainnet");
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
                        } else if (a.message.includes("Ledger device")) return r.Am.error("Error on Ledger device. Please check connection and try again.");
                        else if (a.name.includes("EstimateGasExecutionError")) return r.Am.error("Gas error. Check your ETH balance and try again.");
                        n ? n(a) : (console.error(a), r.Am.error("".concat(a.name, ": ").concat(a.message)))
                    } finally {
                        d(!1), y({
                            transaction: null
                        })
                    }
                };
                return {
                    isChainUnsupported: null == m ? void 0 : m.unsupported,
                    handlePendingTransaction,
                    setPendingTransaction: y,
                    loadingState: {
                        waitingForWallet: u,
                        setWaitingForWallet: d,
                        transaction: c,
                        callbacks: p,
                        txLoadingMessage: l
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
                r = n(54034);

            function useToken() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = null == e ? void 0 : e.toLowerCase(),
                    [n, s] = (0, a.useState)(),
                    {
                        searchTokenHandler: i
                    } = (0, r.Z)({
                        token: n,
                        searchQuery: t,
                        setSearchResults: e => {
                            s(e[0])
                        }
                    });
                return (0, a.useEffect)(() => {
                    t && i()
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
            var r = n(34065),
                s = n(51360);

            function useTokenPrice(e) {
                let {
                    ethUsd: t
                } = (0, a.useContext)(r.F), {
                    addTokensToFetch: n,
                    removeTokensToFetch: i,
                    tokenPrices: l
                } = (0, a.useContext)(s.M);
                return (0, a.useEffect)(() => {
                    n(e)
                }, [e, n, i]), l[e.address.toLowerCase()]
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
                r = n(2265);
            let s = Object.freeze({
                TOKEN_INFO: "tokenInfo"
            });
            var i = n(28316);
            let l = new i.x;
            async function fetchTokenByContract(e) {
                try {
                    var t, n, r;
                    let {
                        data: a
                    } = await l.coinByAddress(e);
                    return {
                        id: a.id,
                        symbol: a.symbol.toUpperCase(),
                        address: a.platforms.ethereum,
                        name: a.name,
                        thumb: (null === (t = a.image) || void 0 === t ? void 0 : t.large) || (null === (n = a.image) || void 0 === n ? void 0 : n.small) || (null === (r = a.image) || void 0 === r ? void 0 : r.thumb),
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
                        let [n, r, s] = t.map(e => {
                            let {
                                result: t
                            } = e;
                            return t
                        });
                        return {
                            symbol: n.toUpperCase(),
                            name: r,
                            decimals: s,
                            address: e,
                            thumb: "https://ui-avatars.com/api/?name=" + r
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
                    } = await l.search(e);
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
                    setLoading: i = () => null,
                    setSearchResults: l
                } = e, [o, u] = (0, r.useState)(JSON.parse(localStorage.getItem(s.TOKEN_INFO) || "[]")), handleSetTokenInfo = e => {
                    u(t => {
                        1 === e.length && delete e[0].balance;
                        let n = t.concat(e);
                        return localStorage.setItem(s.TOKEN_INFO, JSON.stringify(n)), n
                    })
                };
                (0, r.useEffect)(() => {
                    o.length || fetch("/api/token-info").then(e => e.json()).then(handleSetTokenInfo)
                }, [o]);
                let d = !!n && (null === (t = n.address) || void 0 === t ? void 0 : t.toLowerCase());
                return (0, r.useEffect)(() => {
                    d && !o.find(e => {
                        let {
                            address: t
                        } = e;
                        return t.toLowerCase() === d
                    }) && handleSetTokenInfo([n])
                }, [d]), {
                    searchTokenHandler: async () => {
                        try {
                            if (i(!0), !a) return l([]);
                            let e = await getTokenData(o, a.toLowerCase());
                            l(e)
                        } catch (e) {
                            console.log(e)
                        } finally {
                            i(!1)
                        }
                    },
                    getTokenData: (0, r.useCallback)(e => getTokenData(o, e), [o])
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
                r = n(14894),
                s = n(94863),
                i = n(57437),
                l = n(92173),
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
                    (0, r._)(this, d, {
                        writable: !0,
                        value: void 0
                    }), (0, s._)(this, d, l.Z.create({
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
                }, []), (0, i.jsx)(u.F.Provider, {
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
        10688: function(e) {
            "use strict";
            e.exports = JSON.parse('{"L":"0x28A2F7849f0a2BCCf1F5D246cEf5a6867A5BFa23","M":[{"inputs":[{"internalType":"address payable","name":"_opWallet1","type":"address"},{"internalType":"address payable","name":"_opWallet2","type":"address"},{"internalType":"address payable","name":"_dividendsWallet","type":"address"},{"internalType":"address payable","name":"_marketingWallet","type":"address"},{"internalType":"address","name":"_otseaErc20","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"indexed":false,"internalType":"struct OTSea.Order","name":"order","type":"tuple"},{"indexed":true,"internalType":"bytes32","name":"orderId","type":"bytes32"},{"indexed":false,"internalType":"uint8","name":"tokenDecimals","type":"uint8"}],"name":"OrderCreated","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"indexed":false,"internalType":"struct OTSea.Order","name":"order","type":"tuple"},{"indexed":true,"internalType":"bytes32","name":"orderId","type":"bytes32"},{"components":[{"internalType":"address","name":"fulfiller","type":"address"},{"internalType":"uint256","name":"tokensReceived","type":"uint256"},{"internalType":"uint256","name":"ethFulfilled","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"}],"indexed":false,"internalType":"struct OTSea.Fill","name":"fill","type":"tuple"}],"name":"OrderFulfilled","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"indexed":false,"internalType":"struct OTSea.Order","name":"order","type":"tuple"},{"indexed":true,"internalType":"bytes32","name":"orderId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"OrderPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"indexed":false,"internalType":"struct OTSea.Order","name":"order","type":"tuple"},{"indexed":true,"internalType":"bytes32","name":"orderId","type":"bytes32"},{"components":[{"internalType":"uint256","name":"withdrawAmount","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"},{"internalType":"uint256","name":"refundedTokens","type":"uint256"}],"indexed":false,"internalType":"struct OTSea.Withdrawal","name":"withdrawal","type":"tuple"}],"name":"OrderSettled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"transferTax","type":"uint256"}],"name":"TransferTaxRecorded","type":"event"},{"inputs":[],"name":"contractState","outputs":[{"internalType":"enum OTSea.ContractState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendsWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fishFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"orderId","type":"bytes32"},{"internalType":"uint256","name":"expectedPricePerToken","type":"uint256"}],"name":"fulfillOrder","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"opWallet1","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"opWallet2","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"orders","outputs":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"address","name":"whitelistedAddress","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"initialTokens","type":"uint256"},{"internalType":"uint256","name":"availableTokens","type":"uint256"},{"internalType":"uint256","name":"requestedETH","type":"uint256"},{"internalType":"uint256","name":"fulfilledETH","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"enum OTSea.OrderState","name":"state","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"otseaERC20","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"requesterTokenAmount","type":"uint256"},{"internalType":"uint256","name":"requestedETHAmount","type":"uint256"},{"internalType":"bool","name":"partiallyFillable","type":"bool"},{"internalType":"address","name":"whitelistedAddress","type":"address"}],"name":"requestOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_dividendsWallet","type":"address"}],"name":"setDividendsWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fishFee","type":"uint256"},{"internalType":"uint256","name":"_whaleFee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_marketingWallet","type":"address"}],"name":"setMarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_opWallet1","type":"address"}],"name":"setOpWallet1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_opWallet2","type":"address"}],"name":"setOpWallet2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"setWhaleThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"orderId","type":"bytes32"}],"name":"settleOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"orderId","type":"bytes32"},{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whaleFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whaleThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')
        }
    }
]);