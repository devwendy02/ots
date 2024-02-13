"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8735], {
        72940: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return CloseBtn
                }
            });
            var r = n(57437),
                i = n(54440),
                o = n.n(i);

            function CloseBtn(e) {
                let {
                    className: t,
                    handleClose: n
                } = e;
                return (0, r.jsx)("button", {
                    type: "button",
                    className: o()(["absolute right-4 top-4 scale-90 text-gray-50 opacity-80 outline-none transition-all", "hover:scale-100 hover:opacity-100", "focus:outline-none focus:ring-0", t]),
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
        34065: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return i
                }
            });
            var r = n(2265);
            let i = (0, r.createContext)()
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
                i = n(67389),
                o = n(79043);

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
                        requester: r
                    } = e;
                    return (0, i.Ps)(_templateObject2(), t, r, n)
                },
                searchOrders = function() {
                    let {
                        tokenAmountOperator: e,
                        ethAmountOperator: t,
                        orderBy: n = o.I.createdAt,
                        orderDirection: r = "desc",
                        page: s,
                        perPage: a,
                        ...l
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, d = Object.entries(l).filter(e => {
                        let [t] = e;
                        return "preview" !== t
                    }).map(n => {
                        let [r, i] = n;
                        if (!i && !Number.isSafeInteger(i)) return null;
                        switch (r) {
                            case o.I.availableTokens:
                                return "availableTokens_".concat(e, ": ").concat(parseFloat(i));
                            case o.I.requestedETHAmount:
                                return "requestedETHAmount_".concat(t, ": ").concat(parseFloat(i));
                            case o.I.state:
                                if (!~i) return "state_gt: ".concat(i);
                            case o.I.requester:
                                if (i) return 'requester: "'.concat(i, '"');
                            default:
                                return Number.isSafeInteger(parseInt(i)) ? "".concat(r, ": ").concat(parseInt(i)) : "".concat(r, ': "').concat(i, '"')
                        }
                    }).filter(Boolean).join(", ");
                    return console.log(d), (0, i.Ps)(_templateObject4(), a + 1, d, n, r)
                },
                getMyOrders = function() {
                    let {
                        orderBy: e = o.I.createdAt,
                        orderDirection: t = "desc",
                        page: n,
                        perPage: r,
                        requester: s
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.Ps)(_templateObject5(), r + 1, (n - 1) * r, s, e, t)
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
                        first: r
                    } = e;
                    return (0, i.Ps)(_templateObject7(), t, n, r)
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
        54844: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return useIsMiniMarket
                }
            });
            var r = n(24033);

            function useIsMiniMarket() {
                return (0, r.usePathname)().includes("mini-market")
            }
        },
        33948: function(e) {
            e.exports = JSON.parse('{"L":"0x5dA151B95657e788076D04d56234Bd93e409CB09"}')
        }
    }
]);