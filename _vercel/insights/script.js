"use strict";
! function() {
    let e = e => e,
        t = document.currentScript,
        n = (null == t ? void 0 : t.dataset.endpoint) || (null != t && t.src.includes("/va/") ? "/va" : "/_vercel/insights"),
        i = null == t ? void 0 : t.dataset.disableAutoTrack,
        a = null,
        o = !0;
    async function r({
        type: i,
        data: o,
        options: r
    }) {
        var l, d;
        let s = location.href,
            u = document.referrer,
            c = e({
                type: i,
                url: s
            });
        if (!1 === c || null === c) return;
        c && (s = c.url);
        let f = u.includes(location.host),
            h = {
                o: s,
                sv: "0.1.2",
                sdkn: null != (l = null == t ? void 0 : t.dataset.sdkn) ? l : void 0,
                sdkv: null != (d = null == t ? void 0 : t.dataset.sdkv) ? d : void 0,
                ts: Date.now(),
                ...a && {
                    dp: a
                },
                ...null != r && r.withReferrer && !f ? {
                    r: u
                } : {},
                ..."event" === i && o && {
                    en: o.name,
                    ed: o.data
                }
            };
        try {
            await fetch(`${n}/${"pageview"===i?"view":"event"}`, {
                method: "POST",
                keepalive: !0,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(h)
            })
        } catch (v) {}
    }
    async function l(e = {}) {
        return r({
            type: "pageview",
            options: {
                withReferrer: e.withReferrer
            }
        })
    }
    async function d(e, t) {
        return r({
            type: "event",
            data: {
                name: e,
                data: t
            },
            options: {
                withReferrer: !0
            }
        })
    }
    async function s() {
        await fetch(`${n}/session`, {
            method: "GET",
            keepalive: !0
        }).catch(() => {})
    }

    function u(e) {
        return e.pathname === new URL(f).pathname
    }

    function c(e) {
        let t = e ? "string" == typeof e ? new URL(e, location.origin) : new URL(e.href) : null;
        !t || u(t) || Boolean(t.hash) && u(t) || l()
    }
    let f = location.href,
        h = () => {
            var t;
            window.va = function(t, n) {
                "beforeSend" === t ? e = n : "event" === t ? n && d(n.name, n.data) : "pageview" === t && n && (n.route && (a = n.route), l({
                    withReferrer: o
                }), o = !1), "enableCookie" === t && s()
            }, null == (t = window.vaq) || t.forEach(([e, t]) => {
                window.va(e, t)
            })
        };
    (() => {
        if (window.vai || (window.vai = !0, h(), i)) return;
        l({
            withReferrer: !0
        });
        let e = history.pushState.bind(history);
        history.pushState = function(...t) {
            e(...t), c(t[2]), f = location.href
        }, window.addEventListener("popstate", function() {
            c(location.href), f = location.href
        })
    })()
}();