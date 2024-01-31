(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6402], {
        46601: function() {},
        77100: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 80765))
        },
        80765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ClaimPage
                }
            });
            var a = n(57437),
                i = n(50392),
                s = n(67057),
                r = n(12025),
                o = n(10795),
                l = n(54440),
                u = n.n(l),
                d = n(2265),
                p = n(79352),
                c = n(56926),
                m = n(34065),
                y = JSON.parse('{"L":"0x44468779f627499D627C147162990823b9BdBfce","M":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DividendWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DividendsDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"ExcludeFromDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"accumulativeDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimGracePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"close","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributeDividends","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"dividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedFromDividends","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getAccount","outputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"withdrawableDividends","type":"uint256"},{"internalType":"uint256","name":"totalDividends","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"takeFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalDividendsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"}],"name":"updateBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawDividend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"withdrawableDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"withdrawnDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]}'),
                f = n(42755),
                b = n(62461),
                x = n(87415),
                h = n(17081),
                T = n(59344);

            function Claim() {
                let {
                    handleSubmitClaim: e,
                    loadingState: t
                } = function() {
                    let {
                        config: e
                    } = (0, c.PJ)({
                        address: f.L,
                        abi: f.M,
                        functionName: "claim",
                        args: []
                    }), t = (0, c.GG)(e), {
                        handleContractWrite: n,
                        loadingState: a
                    } = (0, h.Z)({
                        contractWrite: t,
                        txLoadingMessage: "Claiming...",
                        onSuccess: () => {
                            x.Am.success("Claimed successfully!")
                        }
                    });
                    return {
                        handleSubmitClaim: n,
                        loadingState: a
                    }
                }(), {
                    ethToUsd: n
                } = (0, d.useContext)(m.F), {
                    address: l
                } = (0, c.mA)(), {
                    data: v,
                    isLoading: w
                } = (0, c.do)({
                    address: f.L,
                    abi: f.M,
                    functionName: "stats",
                    args: [l],
                    watch: !0
                }), [g, A] = v || [], j = g && Number((0, p.d)(g)).toFixed(6), {
                    data: k,
                    isLoading: M
                } = (0, c.do)({
                    address: y.L,
                    abi: y.M,
                    functionName: "balanceOf",
                    args: [l]
                }), {
                    data: N,
                    isLoading: O
                } = (0, c.do)({
                    address: y.L,
                    abi: y.M,
                    functionName: "totalSupply",
                    args: []
                }), _ = k && N && Number(100 * Number(k / 10 n ** 18 n) / Number(N / 10 n ** 18 n)).toFixed(3), {
                    data: P,
                    loading: E
                } = (0, i.a)((0, b.j_)({
                    totalOf: "dividendTotal"
                })), C = (null == P ? void 0 : P.totals[0].dividendTotal) || "00000";
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(T.Z, {
                        loadingState: t
                    }), (0, a.jsxs)("div", {
                        className: "mx-2 flex min-h-no-nav-screen flex-col items-center justify-center pt-20 md:mx-auto md:gap-0",
                        children: [(0, a.jsx)("div", {
                            className: "fade-in mx-auto flex w-full flex-col items-center justify-center rounded-3xl p-8 md:w-1/2",
                            children: (0, a.jsxs)("div", {
                                className: "fade-in m-auto flex w-full grow flex-col items-center gap-4 font-comforta text-white",
                                children: [(0, a.jsx)("h1", {
                                    className: "text-center font-sans text-4xl font-extrabold",
                                    children: "Claim Your Rewards"
                                }), (0, a.jsx)("div", {
                                    className: "flex flex-col items-center gap-4 px-4 text-2xl font-extrabold",
                                    children: (0, a.jsxs)("div", {
                                        className: "text-center font-sans text-sm font-normal text-blue-50",
                                        children: [l ? 0 n === g ? (0, a.jsx)("p", {
                                            children: "⚠️ No ETH to distribute at the moment."
                                        }) : (0, a.jsx)("p", {
                                            className: "mx-auto mb-2 w-fit rounded-md px-6 py-3",
                                            children: (0, a.jsxs)("strong", {
                                                children: ["\uD83C\uDF0A ⚓️ Rewards available! Click on", " ", (0, a.jsx)("span", {
                                                    className: "text-orange-100",
                                                    children: "Claim"
                                                }), " ", "to collect! ⚓️ \uD83C\uDF0A"]
                                            })
                                        }) : (0, a.jsx)("p", {
                                            children: (0, a.jsx)("strong", {
                                                children: "⚠️ Connect your wallet to claim your rewards."
                                            })
                                        }), "Dividends will be periodically injected into the pool. Your dividend share will be based on your $OTSea token holdings. Check socials for more updates!"]
                                    })
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: "fade-in z-10 mx-auto mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-3xl border border-blue-50/20 bg-white bg-opacity-5 p-2 shadow-sm backdrop-blur-md md:mb-60 md:w-1/2",
                            children: [(0, a.jsxs)("div", {
                                className: "relative mt-2 flex w-full flex-col items-center justify-between gap-1 rounded-3xl bg-gradient-to-b from-[#90caf900] to-[#ffffff00] p-2",
                                children: [(0, a.jsx)("h4", {
                                    className: "flex items-center gap-2 font-comforta font-bold text-blue-50",
                                    children: "Total ETH Distributed"
                                }), (0, a.jsx)(o.X, {
                                    className: u()("my-0.5 transition-opacity", E && "rounded-lg opacity-50"),
                                    isLoaded: !E,
                                    children: (0, a.jsxs)("div", {
                                        className: "flex flex-col items-center bg-gradient-to-r from-blue-50 to-blue-gray-200 bg-[length:_400%] bg-clip-text font-sans text-transparent",
                                        children: [(0, a.jsxs)("p", {
                                            className: "text-3xl font-extrabold",
                                            children: [C, " ETH"]
                                        }), (0, a.jsxs)("span", {
                                            className: "-mt-1 text-sm font-bold",
                                            children: ["~", n(C), " USD"]
                                        })]
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "fade-in flex w-full grow flex-col items-center rounded-3xl p-0 font-comforta  text-white md:flex-row md:p-2",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex w-full flex-col items-center justify-between rounded-b-md md:flex-col",
                                    children: [(0, a.jsxs)("div", {
                                        className: "relative flex w-full flex-col items-center justify-between rounded-3xl p-4 ",
                                        children: [(0, a.jsxs)("h4", {
                                            className: "flex items-center gap-2 font-comforta font-bold text-blue-50",
                                            children: ["Your % Share", (0, a.jsx)(r.Tooltip, {
                                                className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                                content: "To be applied on the next rewards injection.",
                                                children: (0, a.jsx)(s.Z, {
                                                    className: "relative bottom-px h-4 w-4"
                                                })
                                            })]
                                        }), (0, a.jsx)(o.X, {
                                            isLoaded: !M && !O,
                                            className: u()("my-0.5 transition-opacity", M && O && "rounded-lg opacity-50"),
                                            children: (0, a.jsx)("div", {
                                                className: "font-sans text-2xl font-extrabold text-white",
                                                children: (0, a.jsx)(r.Tooltip, {
                                                    className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                                    content: (0, a.jsxs)("div", {
                                                        children: [(0, a.jsxs)("p", {
                                                            className: "flex gap-4 first-line:justify-between",
                                                            children: [(0, a.jsxs)("span", {
                                                                children: ["Dividends allocation:", " "]
                                                            }), (0, a.jsx)("span", {
                                                                children: k && Number(k / 10 n ** 18 n).toLocaleString()
                                                            })]
                                                        }), (0, a.jsxs)("p", {
                                                            className: "flex gap-4 first-line:justify-between",
                                                            children: [(0, a.jsx)("span", {
                                                                children: "Dividends supply:"
                                                            }), (0, a.jsx)("span", {
                                                                children: N && Number(N / 10 n ** 18 n).toLocaleString()
                                                            })]
                                                        })]
                                                    }),
                                                    children: (0, a.jsxs)("div", {
                                                        children: [_ || 0, "%"]
                                                    })
                                                })
                                            })
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "h-[1px] w-2/3 bg-gray-50/20"
                                    }), (0, a.jsxs)("div", {
                                        className: "relative flex w-full flex-col items-center justify-between rounded-3xl p-4 ",
                                        children: [(0, a.jsx)("h4", {
                                            className: "font-comforta font-bold text-blue-50",
                                            children: "Your Total Accrued"
                                        }), (0, a.jsx)(o.X, {
                                            isLoaded: !w,
                                            className: u()("transition-opacity", w && "rounded-lg opacity-50"),
                                            children: (0, a.jsxs)("div", {
                                                className: "flex flex-col items-center font-sans text-blue-50",
                                                children: [(0, a.jsxs)("p", {
                                                    className: "text-2xl font-extrabold",
                                                    children: [A > 0 ? Number((0, p.d)(A || 0 n)).toFixed(6) : 0, " ", "ETH"]
                                                }), (0, a.jsxs)("span", {
                                                    className: "-mt-1 text-sm font-bold",
                                                    children: ["~", n((0, p.d)(A || 0 n)), " ", "USD"]
                                                })]
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex w-full flex-col items-center rounded-3xl border border-blue-50/10 p-4 shadow-inner-xl",
                                    children: [(0, a.jsx)("h4", {
                                        className: "font-comforta font-bold text-blue-50",
                                        children: "Your Claimable ETH"
                                    }), (0, a.jsx)(o.X, {
                                        className: u()("transition-opacity", w && "rounded-lg opacity-50"),
                                        isLoaded: !w,
                                        children: (0, a.jsxs)("div", {
                                            className: u()("flex flex-col font-sans text-2xl font-extrabold text-blue-50", !!g && "animate-pulse"),
                                            children: [(0, a.jsxs)("p", {
                                                children: [g > 0 ? j : 0, " ", "ETH"]
                                            }), (0, a.jsxs)("span", {
                                                className: "-mt-1 text-center text-sm font-bold",
                                                children: ["~", n(j || 0), " ", "USD"]
                                            })]
                                        })
                                    }), (0, a.jsxs)("button", {
                                        onClick: () => {
                                            l && e()
                                        },
                                        disabled: !l || 0 n === g,
                                        className: "relative mt-4 w-full overflow-hidden rounded-3xl px-8 py-5 text-white before:absolute before:inset-0 before:rounded-3xl before:bg-orange-400 before:opacity-50 before:transition-all hover:before:opacity-70 active:top-px active:before:bg-orange-600 active:before:shadow-inner disabled:before:content-none",
                                        children: [l ? (0, a.jsx)("span", {
                                            className: "relative z-10",
                                            children: "Claim"
                                        }) : (0, a.jsx)("span", {
                                            className: "relative z-10",
                                            children: "Wallet disconnected"
                                        }), (0, a.jsx)("span", {
                                            className: "absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-800 opacity-20 transition-all"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }

            function ClaimPage() {
                return (0, a.jsx)(Claim, {})
            }
            n(54684)
        },
        54684: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return CustomConnectButton
                }
            });
            var a = n(57437),
                i = n(12025),
                s = n(82256),
                r = n(16691),
                o = n.n(r),
                l = n(2265),
                u = n(56926),
                d = n(54844);

            function CustomConnectButton(e) {
                let {
                    hash: t,
                    href: n
                } = e, {
                    address: r
                } = (0, u.mA)(), [p, c] = (0, l.useState)();
                (0, l.useEffect)(() => {
                    r && (c((0, a.jsx)(i.Spinner, {
                        color: "blue",
                        className: "relative -mt-px h-3 w-3"
                    })), fetch("/api/sea-rank?address=" + r).then(e => e.ok ? e.text() : "?").then(c).catch(() => c("?")))
                }, [r]);
                let m = (0, d.Z)();
                return (0, a.jsx)(s.NL.Custom, {
                    children: e => {
                        var t;
                        let {
                            account: n,
                            chain: i,
                            openAccountModal: s,
                            openChainModal: r,
                            openConnectModal: l,
                            authenticationStatus: u,
                            mounted: d,
                            accountStatus: c
                        } = e, y = d && "loading" !== u;
                        return y ? (0, a.jsx)("div", {
                            className: "flex gap-3",
                            children: y && n && i && (!u || "authenticated" === u) ? i.unsupported ? (0, a.jsx)("button", {
                                className: "hover:bg-slate-600 flex h-[34px] items-center rounded-full bg-red-500 bg-opacity-50 px-6 font-comforta text-sm text-white shadow-none transition-all hover:bg-opacity-70",
                                onClick: r,
                                type: "button",
                                children: "Wrong network"
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)("button", {
                                    onClick: s,
                                    type: "button",
                                    className: "\n                                        hover:bg-slate-600\n                                        flex\n                                        h-[34px]\n                                        w-full\n                                        items-center\n                                        justify-center\n                                        gap-2\n                                        rounded-full\n                                        bg-blue-300\n                                        px-4\n                                        font-comforta\n                                        text-xs\n                                        font-black\n                                        text-white\n                                        transition-all\n                                        hover:bg-opacity-50\n                                        md:text-sm\n                                        ",
                                    children: [(0, a.jsx)("span", {
                                        className: "text-lg",
                                        children: p
                                    }), !m && (0, a.jsx)("span", {
                                        className: "relative top-px",
                                        children: n.displayName
                                    })]
                                }), (0, a.jsx)("button", {
                                    onClick: r,
                                    className: "flex items-center justify-center",
                                    type: "button",
                                    children: i.hasIcon && (0, a.jsx)("div", {
                                        style: {
                                            background: i.iconBackground,
                                            width: 30,
                                            height: 30,
                                            borderRadius: 999,
                                            overflow: "hidden"
                                        },
                                        children: i.iconUrl && (0, a.jsx)(o(), {
                                            alt: null !== (t = i.name) && void 0 !== t ? t : "Chain icon",
                                            src: i.iconUrl,
                                            width: 30,
                                            height: 30,
                                            className: "object-contain"
                                        })
                                    })
                                })]
                            }) : (0, a.jsx)("button", {
                                onClick: l,
                                type: "button",
                                className: "\n                                        hover:bg-slate-600\n                                        flex\n                                        h-[34px]\n                                        w-full\n                                        items-center\n                                        justify-center\n                                        whitespace-nowrap\n                                        rounded-full\n                                        bg-blue-300\n                                        px-4\n                                        font-comforta\n                                        text-xs\n                                        font-black\n                                        text-white\n                                        transition-all\n                                        hover:bg-opacity-50\n                                        md:text-sm\n                                        ",
                                children: "Connect Wallet"
                            })
                        }) : null
                    }
                })
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
            var i = n(54440),
                s = n.n(i),
                r = n(16691),
                o = n.n(r),
                l = n(2265),
                u = n(56926),
                d = n(12169);

            function Loader(e) {
                let {
                    loadingState: t,
                    className: n,
                    fullScreen: i = !0
                } = e, {
                    transaction: r,
                    txLoadingMessage: p,
                    callbacks: [c, m] = [],
                    waitingForWallet: y,
                    setWaitingForWallet: f
                } = t || {}, [b, x] = (0, l.useState)(null), {
                    data: h,
                    isError: T,
                    isLoading: v,
                    isSuccess: w,
                    error: g
                } = (0, u.BX)({
                    hash: b
                }), A = w || T;
                return (0, l.useEffect)(() => {
                    console.log(r), r ? (async () => {
                        try {
                            let e = "string" != typeof r ? (await r.writeAsync()).hash : r;
                            x(e)
                        } catch (e) {
                            console.log(e), f(!1), null == m || m(e)
                        }
                    })() : x(null)
                }, [r, f, m]), (0, l.useEffect)(() => {
                    b && A && (T ? m(g) : c(h), x(null))
                }, [b, A, T, g, m, c, h]), (0, l.useEffect)(() => {
                    v && !A && f(!1)
                }, [A, v, f]), (v || y) && (0, a.jsxs)("div", {
                    className: s()("inset-0 z-50 flex flex-col items-center justify-center rounded-xl bg-blue-gray-900 bg-opacity-80 text-2xl font-bold text-blue-100", y || i ? "fixed" : "absolute", n),
                    children: [(0, a.jsx)(o(), {
                        alt: "happy blocktopus",
                        src: d.Z,
                        className: "h-24 w-auto animate-bounce opacity-70"
                    }), (0, a.jsx)("div", {
                        className: "flex animate-pulse items-center gap-4",
                        children: (y || p) && (0, a.jsx)("span", {
                            className: "font-mono text-base",
                            children: y ? "Proceed on Wallet..." : p
                        })
                    })]
                })
            }
        },
        79043: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return a
                }
            });
            let a = Object.freeze({
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
        34065: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return i
                }
            });
            var a = n(2265);
            let i = (0, a.createContext)()
        },
        62461: function(e, t, n) {
            "use strict";
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
            var a = n(60891),
                i = n(67389),
                s = n(79043);

            function _templateObject() {
                let e = (0, a._)(['\n    query GetOrderById {\n        orders(where: { id: "', '" } ) {\n            id\n            requester\n            tokenAddress\n            initialTokens\n            availableTokens\n            pricePerToken\n            partiallyFillable\n            whitelistedAddress\n            fulfilledETH\n            formattedPricePerToken\n            requestedETHAmount\n            state\n            history(orderBy: timestamp, orderDirection: ', ") {\n                id\n                type\n                transactionHash\n                timestamp\n                state\n                fill {\n                    tokenAmount\n                }\n            }\n        }\n    }\n"]);
                return _templateObject = function() {
                    return e
                }, e
            }

            function _templateObject1() {
                let e = (0, a._)(['\n    query GetOrdersByTokenAddress {\n        orders(where: { tokenAddress: "', '" }, orderBy: createdAt, orderDirection: "desc" ) {\n            id\n            requester\n            tokenAddress\n            initialTokens\n            availableTokens\n            pricePerToken\n            partiallyFillable\n            whitelistedAddress\n            fulfilledETH\n            createdAt\n            formattedPricePerToken\n            requestedETHAmount\n            state\n            history(orderBy: timestamp, orderDirection: ', ") {\n                id\n                type\n                transactionHash\n                timestamp\n                state\n                fill {\n                    tokenAmount\n                }\n            }\n        }\n    }\n"]);
                return _templateObject1 = function() {
                    return e
                }, e
            }

            function _templateObject2() {
                let e = (0, a._)(['\n    query GetOrdersByTokenAndRequester {\n        orders(where: { tokenAddress: "', '", requester: "', '" }, orderBy: createdAt, orderDirection: "desc" ) {\n            id\n            requester\n            tokenAddress\n            initialTokens\n            availableTokens\n            pricePerToken\n            partiallyFillable\n            whitelistedAddress\n            fulfilledETH\n            createdAt\n            formattedPricePerToken\n            requestedETHAmount\n            state\n            history(orderBy: timestamp, orderDirection: ', ") {\n                id\n                type\n                transactionHash\n                timestamp\n                state\n                fill {\n                    tokenAmount\n                }\n            }\n        }\n    }\n"]);
                return _templateObject2 = function() {
                    return e
                }, e
            }

            function _templateObject4() {
                let e = (0, a._)(["\n        query searchOrders {\n            orders (\n                first: ", ",\n                where: {\n                    ", "\n                },\n                orderBy: ", ",\n                orderDirection: ", "\n            ) {\n                id\n                createdAt\n                requester\n                initialTokens\n                availableTokens\n                pricePerToken\n                whitelistedAddress\n                formattedPricePerToken\n                partiallyFillable\n                requestedETHAmount\n                tokenAddress\n                state\n                history (orderBy: timestamp, first: 1) {\n                    timestamp\n                }\n            }\n        }\n    "]);
                return _templateObject4 = function() {
                    return e
                }, e
            }

            function _templateObject5() {
                let e = (0, a._)(["\n        query myOrders {\n            orders (\n                first: ", ",\n                skip: ", ',\n                where: {\n                    requester: "', '"\n                },\n                orderBy: ', ",\n                orderDirection: ", "\n            ) {\n                id\n                createdAt\n                requester\n                initialTokens\n                availableTokens\n                pricePerToken\n                whitelistedAddress\n                formattedPricePerToken\n                partiallyFillable\n                requestedETHAmount\n                tokenAddress\n                state\n                history (orderBy: timestamp, first: 1) {\n                    timestamp\n                }\n            }\n        }\n    "]);
                return _templateObject5 = function() {
                    return e
                }, e
            }

            function _templateObject6() {
                let e = (0, a._)(["\n    query getTotals {\n        totals {\n            ", "\n        }\n    }\n"]);
                return _templateObject6 = function() {
                    return e
                }, e
            }

            function _templateObject7() {
                let e = (0, a._)(['\n        {\n            fills(\n                orderBy: timestamp\n                orderDirection: desc\n                where: { \n                    fulfiller: "', '"\n                },\n                skip: ', ",\n                first: ", "\n            ) {\n                id\n                fulfiller\n                tokenAmount\n                timestamp\n                pricePerToken\n                ethAmount\n                transactionHash\n                orderId {\n                    id\n                    tokenAddress\n                    state\n                    formattedPricePerToken\n                    createdAt\n                }\n            }\n        }\n    "]);
                return _templateObject7 = function() {
                    return e
                }, e
            }

            function _templateObject8() {
                let e = (0, a._)(['\n    {\n        transferTaxes(\n            first: 1, \n            where: { \n                tokenAddress: "', '"\n            }, \n            orderBy: timestamp, \n            orderDirection: desc\n        ) {\n            percentage\n        }\n    }\n']);
                return _templateObject8 = function() {
                    return e
                }, e
            }

            function _templateObject9() {
                let e = (0, a._)(['\n    query GetGlobals {\n        globals(id: "0x01") {\n            currentEpoch {\n                id\n                sharePerToken\n            }\n            latestEpoch {\n                id\n                sharePerToken\n            }\n            totalStaked\n            totalClaimed\n            totalDistributed\n            totalCompoundedETH\n            totalCompoundedTokens\n        }\n    }\n']);
                return _templateObject9 = function() {
                    return e
                }, e
            }

            function _templateObject10() {
                let e = (0, a._)(['\n    query GetEpoch {\n        epoches(where: { id: "', '" }) {\n            id\n            startedAt\n            endedAt\n            totalStake\n            sharePerToken\n            distributed\n        }\n    }\n']);
                return _templateObject10 = function() {
                    return e
                }, e
            }

            function _templateObject11() {
                let e = (0, a._)(['\n    query GetUserStakingData {\n        users(where: { id: "', '" }) {\n            currentStake\n            totalClaimed\n            deposits {\n                index\n                firstRewardedEpoch {\n                    id\n                }\n                claimedUpToEpoch {\n                    id\n                }\n                lastRewardedEpoch {\n                    id\n                }\n                amount\n                stakeTxHash\n                stakeTimestamp\n                unstakeTxHash\n                unstakeTimestamp\n            }\n            claims(orderDirection: asc) {\n                receiver\n                indexes\n                amount\n                blockTimestamp\n                txHash\n            }\n            compounds {\n                amount\n                txHash\n                blockTimestamp\n                indexes\n            }\n            totalClaimed\n        }\n    }\n']);
                return _templateObject11 = function() {
                    return e
                }, e
            }
            let getOrderById = e => {
                    let {
                        id: t,
                        historyOrder: n = "desc"
                    } = e;
                    return (0, i.Ps)(_templateObject(), t, n)
                },
                getOrdersByTokenAddress = e => {
                    let {
                        tokenAddress: t,
                        historyOrder: n = "desc"
                    } = e;
                    return (0, i.Ps)(_templateObject1(), t, n)
                },
                getOrdersByTokenAndRequester = e => {
                    let {
                        tokenAddress: t,
                        historyOrder: n = "desc",
                        requester: a
                    } = e;
                    return (0, i.Ps)(_templateObject2(), t, a, n)
                },
                searchOrders = function() {
                    let {
                        tokenAmountOperator: e,
                        ethAmountOperator: t,
                        orderBy: n = s.I.createdAt,
                        orderDirection: a = "desc",
                        page: r,
                        perPage: o,
                        ...l
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = Object.entries(l).filter(e => {
                        let [t] = e;
                        return "preview" !== t
                    }).map(n => {
                        let [a, i] = n;
                        if (!i && !Number.isSafeInteger(i)) return null;
                        switch (a) {
                            case s.I.availableTokens:
                                return "availableTokens_".concat(e, ": ").concat(parseFloat(i));
                            case s.I.requestedETHAmount:
                                return "requestedETHAmount_".concat(t, ": ").concat(parseFloat(i));
                            case s.I.state:
                                if (!~i) return "state_gt: ".concat(i);
                            case s.I.requester:
                                if (i) return 'requester: "'.concat(i, '"');
                            default:
                                return Number.isSafeInteger(parseInt(i)) ? "".concat(a, ": ").concat(parseInt(i)) : "".concat(a, ': "').concat(i, '"')
                        }
                    }).filter(Boolean).join(", ");
                    return console.log(u), (0, i.Ps)(_templateObject4(), o + 1, u, n, a)
                },
                getMyOrders = function() {
                    let {
                        orderBy: e = s.I.createdAt,
                        orderDirection: t = "desc",
                        page: n,
                        perPage: a,
                        requester: r
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.Ps)(_templateObject5(), a + 1, (n - 1) * a, r, e, t)
                },
                getTotals = e => {
                    let {
                        totalOf: t
                    } = e;
                    return (0, i.Ps)(_templateObject6(), t)
                },
                getFillEvents = e => {
                    let {
                        fulfiller: t,
                        skip: n,
                        first: a
                    } = e;
                    return (0, i.Ps)(_templateObject7(), t, n, a)
                },
                getTransferTax = e => {
                    let {
                        tokenAddress: t
                    } = e;
                    return t && (0, i.Ps)(_templateObject8(), t)
                },
                getMetrics = () => (0, i.Ps)(_templateObject9()),
                getEpoch = e => (0, i.Ps)(_templateObject10(), e),
                getUserStakingData = e => (0, i.Ps)(_templateObject11(), e)
        },
        44201: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useAlchemy
                }
            });
            var a = n(76751);
            let i = {
                    apiKey: "C3BHzcbwRa5S3ix8tmTjno-ZQV1MC8lF",
                    network: a.N.ETH_MAINNET
                },
                s = new a.m(i);

            function useAlchemy() {
                return s
            }
        },
        54844: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useIsMiniMarket
                }
            });
            var a = n(24033);

            function useIsMiniMarket() {
                return (0, a.usePathname)().includes("mini-market")
            }
        },
        17081: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return usePendingTransaction
                }
            });
            var a = n(2265),
                i = n(87415),
                s = n(56926),
                r = n(44201);

            function usePendingTransaction() {
                let {
                    contractWrite: e,
                    onSuccess: t,
                    onError: n,
                    txLoadingMessage: o
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = (0, r.Z)(), [u, d] = (0, a.useState)(!1), [{
                    transaction: p,
                    callbacks: c
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
                } = (0, s.LN)(), handleContractWrite = async a => {
                    if (null == a || a.preventDefault(), y.unsupported) return alert("Unsupported chain, switch to Ethereum Mainnet");
                    try {
                        d(!0), await handlePendingTransaction(e), null == t || t()
                    } catch (a) {
                        let e = a.message.includes("User rejected");
                        if (e) return;
                        if (a.name.includes("TransactionNotFoundError")) {
                            let e = a.message.match(/0x[a-fA-F0-9]{64}/)[0];
                            try {
                                return await l.transact.waitForTransaction(e, 0, 45e3), null == t ? void 0 : t()
                            } catch (e) {}
                        } else if (a.message.includes("Ledger device")) return i.Am.error("Error on Ledger device. Please check connection and try again.");
                        else if (a.name.includes("EstimateGasExecutionError")) return i.Am.error("Gas error. Check your ETH balance and try again.");
                        n ? n(a) : (console.error(a), i.Am.error("".concat(a.name, ": ").concat(a.message)))
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
                        transaction: p,
                        callbacks: c,
                        txLoadingMessage: o
                    },
                    handleContractWrite
                }
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
            let i = a.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? a.createElement("title", {
                    id: t
                }, e) : null, a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                }))
            });
            t.Z = i
        },
        10795: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return d
                }
            });
            var a = n(34480),
                i = (0, n(68037).tv)({
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
                s = n(59762),
                r = n(48794),
                o = n(2265),
                l = n(57437),
                u = (0, a.Gp)((e, t) => {
                    let {
                        Component: n,
                        children: u,
                        getSkeletonProps: d,
                        getContentProps: p
                    } = function(e) {
                        let [t, n] = (0, a.oe)(e, i.variantKeys), {
                            as: l,
                            children: u,
                            isLoaded: d = !1,
                            className: p,
                            classNames: c,
                            ...m
                        } = t, y = (0, o.useMemo)(() => i({ ...n
                        }), [...Object.values(n), u]), f = (0, s.W)(null == c ? void 0 : c.base, p);
                        return {
                            Component: l || "div",
                            children: u,
                            slots: y,
                            classNames: c,
                            getSkeletonProps: (e = {}) => ({
                                "data-loaded": (0, r.PB)(d),
                                className: y.base({
                                    class: (0, s.W)(f, null == e ? void 0 : e.className)
                                }),
                                ...m
                            }),
                            getContentProps: (e = {}) => ({
                                className: y.content({
                                    class: (0, s.W)(null == c ? void 0 : c.content, null == e ? void 0 : e.className)
                                })
                            })
                        }
                    }({ ...e
                    });
                    return (0, l.jsx)(n, {
                        ref: t,
                        ...d(),
                        children: (0, l.jsx)("div", { ...p(),
                            children: u
                        })
                    })
                });
            u.displayName = "NextUI.Skeleton";
            var d = u
        },
        42755: function(e) {
            "use strict";
            e.exports = JSON.parse('{"L":"0x37DA9DE38c4094e090c014325f6eF4baEB302626","M":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"botWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividends","outputs":[{"internalType":"contract OTSeaDividends","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openTradingBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"receiveBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"stats","outputs":[{"internalType":"uint256","name":"withdrawableDividends","type":"uint256"},{"internalType":"uint256","name":"totalDividends","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_botWallet","type":"address"}],"name":"updateBotWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dividends","type":"address"}],"name":"updateDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_totalFee","type":"uint256"},{"internalType":"uint256","name":"_botFee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"updateMaxHoldingPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateSwapAt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}')
        }
    },
    function(e) {
        e.O(0, [4590, 7830, 8293, 2279, 728, 1108, 6926, 7562, 7401, 939, 391, 7357, 6843, 2971, 2472, 1744], function() {
            return e(e.s = 77100)
        }), _N_E = e.O()
    }
]);