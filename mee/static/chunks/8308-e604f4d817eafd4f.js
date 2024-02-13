"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8308], {
        70362: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return FeesTooltip
                }
            });
            var a = n(57437),
                s = n(67057),
                i = n(12025),
                r = n(54440),
                l = n.n(r),
                o = n(45764),
                u = n(73571),
                d = n(42755),
                p = n(97271);

            function FeesTooltip() {
                let e = (0, p.Z)(d.L) > 2e5 * 1e18;
                return (0, a.jsxs)("div", {
                    className: "flex flex-col",
                    children: [e && (0, a.jsx)(i.Tooltip, {
                        className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                        content: "Holding 200k+ $OTSEA is saving you 70% in fees \uD83D\uDC0B",
                        children: (0, a.jsx)("div", {
                            className: "h-18 w-18",
                            children: (0, a.jsx)(o.Z, {
                                animationData: u,
                                play: !0,
                                className: "-my-6 mx-auto flex h-24 w-24 items-center justify-center md:w-auto"
                            })
                        })
                    }), (0, a.jsxs)("span", {
                        className: l()("text-blue-50/80", "mx-auto flex justify-center gap-1 text-xs"),
                        children: [!e && (0, a.jsx)(i.Tooltip, {
                            className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                            content: "Hold 200k+ $OTSEA to get a 0.3% discounted fee \uD83C\uDF0A",
                            children: (0, a.jsx)(s.Z, {
                                className: "h-4 w-4"
                            })
                        }), e ? "Your platform fee: 0.3%" : "Platform fee: 1%"]
                    })]
                })
            }
        },
        20521: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return SendOrder
                }
            });
            var a = n(57437);
            n(12025);
            var s = n(54440),
                i = n.n(s);
            n(16691);
            var r = n(61396),
                l = n.n(r),
                o = n(2265),
                u = n(87415),
                d = n(56926);
            n(12169);
            var p = n(59344),
                c = n(54844),
                m = n(14484),
                y = n(79043),
                b = n(10688),
                f = n(17081),
                x = n(52078),
                h = n(62936);

            function SendOrder(e) {
                let {
                    order: t,
                    resetOrder: n,
                    disabled: s
                } = e, r = (0, c.Z)(), {
                    handleSubmitOrder: v,
                    loadingState: T
                } = function(e) {
                    let {
                        order: t,
                        onSuccess: n
                    } = e, a = (0, d.mA)(), s = function(e) {
                        let {
                            data: t
                        } = (0, d.do)({
                            address: e[y.I.token].address,
                            abi: m.em,
                            functionName: "allowance",
                            args: [e[y.I.requester], b.L]
                        }), {
                            config: n,
                            error: a,
                            isError: s
                        } = (0, d.PJ)({
                            address: e[y.I.token].address,
                            abi: m.em,
                            functionName: "approve",
                            args: [b.L, e[y.I.tokenAmount]]
                        });
                        return (0, d.GG)(n)
                    }(t), i = (0, d.GG)({
                        address: b.L,
                        abi: b.M,
                        functionName: "requestOrder",
                        args: [t[y.I.token].address, t[y.I.tokenAmount], (0, x.f)(String(Number(t[y.I.requestedETHAmount] || 0).toFixed(18))), t[y.I.partiallyFillable], t[y.I.whitelistedAddress] || h.D]
                    }), [r, l] = (0, o.useState)("Waiting for $".concat(t.token.symbol, " allowance...")), {
                        isChainUnsupported: p,
                        loadingState: c,
                        handlePendingTransaction: v,
                        setPendingTransaction: T
                    } = (0, f.Z)({
                        txLoadingMessage: r
                    }), handleSubmitOrder = async e => {
                        if (null == e || e.preventDefault(), p) return alert("Unsupported chain, switch to Ethereum Mainnet");
                        try {
                            let e = await (0, m.a4)({
                                address: t[y.I.token].address,
                                abi: m.em,
                                functionName: "allowance",
                                args: [a.address, b.L]
                            });
                            c.setWaitingForWallet(!0), e < t[y.I.tokenAmount] && await v(s), c.setWaitingForWallet(!0), l("Submitting order...");
                            let r = await v(i),
                                o = r.logs.at(-1).topics.at(-1);
                            n(o)
                        } catch (e) {
                            if (e.message.includes("User rejected")) return;
                            console.error(e), u.Am.error("Something went wrong. Please try again later.")
                        } finally {
                            T({
                                transaction: null
                            }), c.setWaitingForWallet(!1)
                        }
                    };
                    return {
                        handleSubmitOrder,
                        loadingState: c
                    }
                }({
                    order: t,
                    onSuccess: e => {
                        r ? (document.querySelector("li[role=tab]:last-child").click(), u.Am.success("Order submitted")) : u.Am.success((0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(l(), {
                                href: "/browse/".concat(e),
                                children: "Order submitted. Click to view"
                            })
                        })), n()
                    }
                }), {
                    address: w
                } = (0, d.mA)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(p.Z, {
                        loadingState: T
                    }), (0, a.jsx)("button", {
                        onClick: v,
                        className: i()("my-1 flex cursor-pointer items-center overflow-hidden  bg-orange-500 bg-opacity-70 px-8 font-comforta text-xs text-white transition-all duration-400 hover:shadow-2xl disabled:cursor-auto disabled:opacity-50", r ? "grow justify-center self-stretch rounded-md" : "rounded-2xl py-6"),
                        disabled: s || !w,
                        "data-atropos-offset": "2",
                        children: w ? "Send Order" : "Wallet disconnected"
                    })]
                })
            }
        },
        21923: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return TokenBalance
                }
            });
            var a = n(57437),
                s = n(16775),
                i = n(43977);

            function TokenBalance(e) {
                let {
                    tokenBalance: t,
                    decimals: n,
                    orderUpdate: r
                } = e, l = void 0 !== t ? Math.floor((0, s.b)(t, n)) : 0;
                return (0, a.jsxs)("span", {
                    className: "cursor-pointer self-end text-xs font-bold text-blue-50/80 underline underline-offset-2 transition-all duration-300 hover:text-blue-50 hover:underline-offset-4",
                    onClick: e => {
                        e.stopPropagation(), r({
                            field: "tokenAmount",
                            value: (0, i.v)("".concat(l), n)
                        })
                    },
                    children: ["Max: ", l]
                })
            }
        },
        83361: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return TransferTaxData
                }
            });
            var a = n(57437),
                s = n(50392),
                i = n(67057),
                r = n(12025),
                l = n(62461);

            function TransferTaxData(e) {
                var t, n, o;
                let {
                    token: u
                } = e, d = u.address, {
                    loading: p,
                    data: c
                } = (0, s.a)((0, l.k8)({
                    tokenAddress: d
                }));
                return (0, a.jsx)(a.Fragment, {
                    children: p ? (0, a.jsx)("div", {
                        className: "mr-1 mt-3 flex items-center justify-end self-end text-right",
                        children: (0, a.jsx)(r.Spinner, {
                            color: "blue",
                            className: "h-3 w-3"
                        })
                    }) : (0, a.jsx)(a.Fragment, {
                        children: (null == c ? void 0 : null === (t = c.transferTaxes[0]) || void 0 === t ? void 0 : t.percentage) ? (0, a.jsxs)("div", {
                            className: "mt-2 flex w-full items-center justify-end gap-1 pr-1 text-right text-sm text-blue-50/50",
                            children: [(0, a.jsx)(r.Tooltip, {
                                className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                content: "Last recorded transfer tax on OTSea for $".concat(u.symbol, "."),
                                children: (0, a.jsx)(i.Z, {
                                    className: "h-4 w-4"
                                })
                            }), (0, a.jsxs)("span", {
                                children: ["$", u.symbol, " transfer tax:", " ", (null == c ? void 0 : null === (n = c.transferTaxes[0]) || void 0 === n ? void 0 : n.percentage) / 100 < 0 ? 0 : (null == c ? void 0 : null === (o = c.transferTaxes[0]) || void 0 === o ? void 0 : o.percentage) / 100, "%"]
                            })]
                        }) : (0, a.jsxs)("div", {
                            className: "mt-2 flex w-full items-center justify-end gap-1 pr-1 text-right text-sm text-blue-50/50",
                            children: [(0, a.jsx)(r.Tooltip, {
                                className: "bg-black bg-opacity-40 px-4 py-3 backdrop-blur",
                                content: "$".concat(u.symbol, " has not been traded on OTSea before. Transfer tax has not been recorded."),
                                children: (0, a.jsx)(i.Z, {
                                    className: "h-4 w-4"
                                })
                            }), "$", u.symbol, " transfer tax is unknown."]
                        })
                    })
                })
            }
        },
        27833: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var a = n(57437),
                s = n(16691),
                i = n.n(s),
                r = n(9875),
                l = n.n(r),
                o = n(2265),
                u = n(94573),
                d = n(56926),
                p = n(12169),
                c = n(17518),
                m = n(54034),
                y = n(28316),
                b = n(72940),
                f = n(16775);

            function TokenResult(e) {
                let {
                    handleSetToken: t,
                    result: n
                } = e;
                return (0, a.jsxs)("div", {
                    onClick: t,
                    className: "mb-3 me-2 flex cursor-pointer select-none items-center gap-3 rounded-xl border border-blue-100/20 p-3 text-white transition-all hover:border-blue-100/50 hover:bg-blue-200 hover:bg-opacity-20 hover:text-blue-50",
                    children: [(0, a.jsx)(i(), {
                        src: n.thumb.startsWith("http") ? n.thumb : "https://ui-avatars.com/api/?name=" + n.name,
                        width: 24,
                        height: 24,
                        alt: n.thumb
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col items-start",
                        children: [(0, a.jsx)("span", {
                            className: "font-bold",
                            children: n.symbol
                        }), (0, a.jsx)("span", {
                            className: "opacity-90 ",
                            children: n.name
                        })]
                    }), (null == n ? void 0 : n.balance) && (0, a.jsxs)("span", {
                        className: "ms-auto font-sans text-sm opacity-50",
                        children: ["Balance: ", (0, f.b)(n.balance, n.decimals)]
                    })]
                })
            }
            let x = new y.x;
            var h = (0, o.forwardRef)(function(e, t) {
                var n;
                let {
                    isFilter: s,
                    token: r,
                    setToken: y
                } = e, f = (0, c.Z)(t), h = (0, d.mA)(), [v, T] = (0, o.useState)([]), [w, g] = (0, o.useState)(l().parse(location.search.slice(1)).tokenAddress || ""), [k, j] = (0, o.useState)(v), [N, M] = (0, o.useState)(!1), {
                    searchTokenHandler: S,
                    getTokenData: A
                } = (0, m.Z)({
                    token: r,
                    searchQuery: w,
                    setLoading: M,
                    setSearchResults: (null === (n = t.current) || void 0 === n ? void 0 : n.open) ? j : e => {
                        j(e), y(e[0])
                    }
                }), D = (0, o.useCallback)(async e => (await Promise.all(e.map(async e => {
                    let {
                        contractAddress: t,
                        tokenBalance: n
                    } = e;
                    if (!t) return null;
                    let [a] = await A(t);
                    return a ? { ...a,
                        balance: n
                    } : a
                }))).filter(Boolean), [A]);
                (0, o.useEffect)(() => {
                    (null == h ? void 0 : h.address) && fetch("/api/token-balances?owner=".concat(h.address)).then(e => e.json()).then(D).then(T).catch(e => {
                        console.error(e), T([])
                    })
                }, [null == h ? void 0 : h.address, D]);
                let [O, F] = (0, u.Z)(S, 500);
                (0, o.useEffect)(() => {
                    w.length > 0 ? O() : (F(), j(v))
                }, [w]);
                let handleSetToken = e => async () => {
                    try {
                        if (e.id) {
                            var t, n, a;
                            let {
                                data: s
                            } = await x.coinById(e.id);
                            if (!s.detail_platforms.ethereum) return alert("This token doesn't appear to be on Ethereum Mainnet.");
                            y({
                                symbol: s.symbol.toUpperCase(),
                                address: s.platforms.ethereum,
                                name: s.name,
                                thumb: (null === (t = s.image) || void 0 === t ? void 0 : t.large) || (null === (n = s.image) || void 0 === n ? void 0 : n.small) || (null === (a = s.image) || void 0 === a ? void 0 : a.thumb),
                                decimals: s.detail_platforms.ethereum.decimal_place
                            })
                        } else y(e);
                        f()
                    } catch (e) {
                        console.log(e)
                    }
                };
                return (0, a.jsxs)("dialog", {
                    ref: t,
                    className: "scale-in-center relative h-[70vh] w-screen overflow-hidden rounded-3xl bg-black bg-opacity-20 px-6 py-4 shadow-2xl backdrop-blur-xl md:h-[50vh] md:w-[50vw]",
                    children: [(0, a.jsx)(b.Z, {
                        handleClose: f
                    }), (0, a.jsx)("h3", {
                        className: "mb-4 mt-1 text-xl font-extrabold text-white",
                        children: "Select Token"
                    }), (0, a.jsxs)("section", {
                        className: "relative flex h-full max-h-[calc(100%_-_56px)] flex-col",
                        children: [(0, a.jsxs)("div", {
                            className: "relative flex",
                            children: [!!w && (0, a.jsx)(b.Z, {
                                className: "absolute right-4 top-1/2 -translate-y-1/2 scale-75 text-white opacity-40 hover:opacity-50",
                                handleClose: () => g("")
                            }), (0, a.jsx)("input", {
                                value: w,
                                type: "text",
                                placeholder: "Search tokens by name or address...",
                                onChange: e => g(e.target.value),
                                className: "focus:border-blue w-full rounded-md border border-blue-50/20 bg-transparent p-3 font-sans text-blue-100 outline-none transition-all placeholder:text-blue-100/50 focus:text-blue-50 focus:shadow-inner-xl active:outline-transparent"
                            })]
                        }), w.length ? (0, a.jsxs)(a.Fragment, {
                            children: [N && (0, a.jsx)("div", {
                                className: " absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2",
                                children: (0, a.jsx)(i(), {
                                    src: p.Z,
                                    className: "h-12 w-12 animate-bounce opacity-70",
                                    alt: "happy blocktopus"
                                })
                            }), (0, a.jsx)("span", {
                                className: "my-4 inline-block font-sans text-sm text-blue-50/80",
                                children: "Tokens found:"
                            }), (0, a.jsx)("div", {
                                className: "sea-scroll overflow-auto pb-24",
                                children: !N && k.map(e => (0, a.jsx)(TokenResult, {
                                    handleSetToken: handleSetToken(e),
                                    result: v.find(t => t.address === e.address) || e
                                }, "token-".concat(e.address)))
                            })]
                        }) : !!v.length && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "my-4 inline-block font-sans text-sm text-white/80",
                                children: "Your tokens:"
                            }), (0, a.jsx)("div", {
                                className: "sea-scroll overflow-auto ",
                                children: v.map(e => (0, a.jsx)(TokenResult, {
                                    handleSetToken: handleSetToken(e),
                                    result: e
                                }, "user-token-".concat(e.address)))
                            })]
                        }), s && (0, a.jsx)("button", {
                            className: "mx-auto -mb-3 select-none rounded-xl px-6 py-4 text-center font-sans text-sm font-bold uppercase text-blue-50 hover:shadow-lg active:bottom-[calc(2em_-_1px)] active:shadow-inner-xl",
                            variant: "text",
                            onClick: () => {
                                y(), f()
                            },
                            children: "Remove Filter"
                        })]
                    })]
                })
            })
        },
        97271: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return useTokenBalance
                }
            });
            var a = n(56926),
                s = n(14484);

            function useTokenBalance(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = (0, a.mA)(),
                    {
                        data: i
                    } = (0, a.do)({
                        address: e,
                        abi: s.em,
                        functionName: "balanceOf",
                        args: [n.address],
                        watch: t
                    });
                return i
            }
        },
        30725: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return useTokenSelectionDialog
                }
            });
            var a = n(2265);

            function useTokenSelectionDialog() {
                let e = (0, a.useRef)();
                return {
                    tokenSelectionDialogRef: e,
                    toggleTokenSelectionDialog: t => {
                        let n = e.current;
                        if (!n) return;
                        if (n.open) return n.close();
                        let {
                            left: a,
                            bottom: s,
                            width: i,
                            height: r
                        } = t.target.getBoundingClientRect(), l = a - window.innerWidth / 4 + i / 2, o = s - window.innerHeight / 4 - r / 2;
                        n.setAttribute("style", "--transform-origin: ".concat(l, "px ").concat(o, "px")), n.showModal()
                    }
                }
            }
        },
        73571: function(e) {
            e.exports = JSON.parse('{"v":"5.6.3","fr":60,"ip":0,"op":242,"w":200,"h":200,"nm":"animals 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":9,"ty":4,"nm":"ballena Silhouettes","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[99.858,99.86,0],"ix":2},"a":{"a":0,"k":[81.576,41.396,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.352,-4.948],[0.965,-0.054],[-3.115,8.785],[-3.872,2.576],[-8.504,3.562],[-12.307,10.877],[0.321,2.388],[1.54,0.631],[1.609,-0.504],[2.938,-1.809],[-0.046,-0.117],[-7.733,5.159],[0.253,0.659],[4.592,-0.741],[0.747,-0.279],[5.776,-1.538],[5.332,-1.836],[3.942,-0.659],[14.528,-6.32],[0.581,-9.952],[-2.55,1.085],[4.669,5.831],[5.903,-1.575],[-0.635,-1.879],[-3.676,0.355],[-7.786,1.734],[-5.173,0.506],[-14.128,0.108],[-2.966,8.509],[1.603,1.443],[4.532,-3.646],[5.76,-6.569],[-0.419,-1.17],[-8.223,7.374],[-0.643,3.286]],"o":[[-1.101,2.602],[-2.299,8.417],[-1.49,0.083],[2.298,-6.481],[4.947,-3.29],[0,-0.001],[1.425,-1.259],[-0.253,-1.877],[-2.106,-0.864],[-5.555,1.741],[-10.598,6.525],[0.064,0.162],[1.047,-0.699],[-0.075,-0.196],[-5.425,0.875],[-3.049,1.138],[-10.786,3.617],[-5.494,1.89],[-9.578,1.599],[-8.411,3.659],[-0.47,8.068],[2.19,-0.931],[-4.051,-5.06],[-4.785,1.276],[0.747,2.205],[6.455,-0.622],[1.08,-0.242],[14.205,-1.393],[1.517,-0.012],[0.783,-2.245],[-2.924,-2.631],[-5.702,4.589],[-6.461,7.368],[0.522,1.462],[5.715,-5.126],[0,0]],"v":[[28.447,9.721],[24.468,21.214],[21.374,33.812],[18.943,15.468],[30.435,2.87],[45.465,-3.538],[70.439,-19.674],[73.755,-25.42],[70.218,-29.397],[64.471,-29.176],[53.2,-24.757],[31.983,-16.137],[58.284,-30.503],[60.935,-33.154],[55.852,-33.154],[45.685,-30.503],[32.425,-26.304],[8.335,-18.126],[-3.543,-14.678],[-32.553,-9.064],[-55.981,10.826],[-45.151,26.298],[-47.803,10.606],[-64.821,4.859],[-73.441,11.932],[-61.285,13.036],[-44.046,9.281],[-31.227,7.07],[-0.285,11.49],[23.142,2.649],[22.037,-3.982],[7.45,-0.446],[-2.495,14.583],[-15.756,24.309],[4.799,18.119],[12.975,3.091]],"c":false},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.078004118975,0.52904549393,0.968993661918,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[81.576,41.396],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":174,"s":[0]},{"t":245,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[0]},{"t":94,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"R\xe9duire les trac\xe9s 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":244,"st":0,"bm":0}],"markers":[]}')
        },
        42755: function(e) {
            e.exports = JSON.parse('{"L":"0x37DA9DE38c4094e090c014325f6eF4baEB302626","M":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"botWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividends","outputs":[{"internalType":"contract OTSeaDividends","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openTradingBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"receiveBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"stats","outputs":[{"internalType":"uint256","name":"withdrawableDividends","type":"uint256"},{"internalType":"uint256","name":"totalDividends","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_botWallet","type":"address"}],"name":"updateBotWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dividends","type":"address"}],"name":"updateDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_totalFee","type":"uint256"},{"internalType":"uint256","name":"_botFee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"updateMaxHoldingPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"updateSwapAt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}')
        }
    }
]);