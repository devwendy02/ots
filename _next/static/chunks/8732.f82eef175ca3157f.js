"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8732], {
        16095: function(e, t, l) {
            l.d(t, {
                f: function() {
                    return Animation
                }
            });
            var o = l(56011),
                n = l(3495),
                s = l(61427),
                c = l(31300),
                d = l(10277),
                m = l(32303);
            let Animation = class Animation {
                constructor(e, t = [0, 1], {
                    easing: l,
                    duration: h = o.c.duration,
                    delay: p = o.c.delay,
                    endDelay: g = o.c.endDelay,
                    repeat: f = o.c.repeat,
                    offset: b,
                    direction: y = "normal"
                } = {}) {
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = n.V, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((e, t) => {
                            this.resolve = e, this.reject = t
                        }), l = l || o.c.easing, (0, s.m)(l)) {
                        let e = l.createAnimation(t);
                        l = e.easing, t = e.keyframes || t, h = e.duration || h
                    }
                    this.repeat = f, this.easing = (0, c.K)(l) ? n.V : (0, m.I)(l), this.updateDuration(h);
                    let x = (0, d.s)(t, b, (0, c.K)(l) ? l.map(m.I) : n.V);
                    this.tick = t => {
                        var l;
                        let o = 0;
                        o = void 0 !== this.pauseTime ? this.pauseTime : (t - this.startTime) * this.rate, this.t = o, o /= 1e3, o = Math.max(o - p, 0), "finished" === this.playState && void 0 === this.pauseTime && (o = this.totalDuration);
                        let n = o / this.duration,
                            s = Math.floor(n),
                            c = n % 1;
                        !c && n >= 1 && (c = 1), 1 === c && s--;
                        let d = s % 2;
                        ("reverse" === y || "alternate" === y && d || "alternate-reverse" === y && !d) && (c = 1 - c);
                        let m = o >= this.totalDuration ? 1 : Math.min(c, 1),
                            h = x(this.easing(m));
                        e(h);
                        let f = void 0 === this.pauseTime && ("finished" === this.playState || o >= this.totalDuration + g);
                        f ? (this.playState = "finished", null === (l = this.resolve) || void 0 === l || l.call(this, h)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, this.play()
                }
                play() {
                    let e = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var e;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (e = this.reject) || void 0 === e || e.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(e) {
                    this.duration = e, this.totalDuration = e * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(e) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(e) {
                    this.rate = e
                }
            }
        },
        32303: function(e, t, l) {
            l.d(t, {
                I: function() {
                    return getEasingFunction
                }
            });
            var o = l(3495);
            let calcBezier = (e, t, l) => (((1 - 3 * l + 3 * t) * e + (3 * l - 6 * t)) * e + 3 * t) * e;

            function cubicBezier(e, t, l, n) {
                if (e === t && l === n) return o.V;
                let getTForX = t => (function(e, t, l, o, n) {
                    let s, c;
                    let d = 0;
                    do(s = calcBezier(c = t + (l - t) / 2, o, n) - e) > 0 ? l = c : t = c; while (Math.abs(s) > 1e-7 && ++d < 12);
                    return c
                })(t, 0, 1, e, l);
                return e => 0 === e || 1 === e ? e : calcBezier(getTForX(e), t, n)
            }
            var n = l(56956);
            let steps = (e, t = "end") => l => {
                l = "end" === t ? Math.min(l, .999) : Math.max(l, .001);
                let o = l * e,
                    s = "end" === t ? Math.floor(o) : Math.ceil(o);
                return (0, n.u)(0, 1, s / e)
            };
            var s = l(22939),
                c = l(13852);
            let d = {
                    ease: cubicBezier(.25, .1, .25, 1),
                    "ease-in": cubicBezier(.42, 0, 1, 1),
                    "ease-in-out": cubicBezier(.42, 0, .58, 1),
                    "ease-out": cubicBezier(0, 0, .58, 1)
                },
                m = /\((.*?)\)/;

            function getEasingFunction(e) {
                if ((0, s.m)(e)) return e;
                if ((0, c.U)(e)) return cubicBezier(...e);
                if (d[e]) return d[e];
                if (e.startsWith("steps")) {
                    let t = m.exec(e);
                    if (t) {
                        let e = t[1].split(",");
                        return steps(parseFloat(e[0]), e[1].trim())
                    }
                }
                return o.V
            }
        },
        14931: function(e, t, l) {
            l.d(t, {
                H: function() {
                    return MotionValue
                }
            });
            let MotionValue = class MotionValue {
                setAnimation(e) {
                    this.animation = e, null == e || e.finished.then(() => this.clearAnimation()).catch(() => {})
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
        },
        86074: function(e, t, l) {
            function addUniqueItem(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function removeItem(e, t) {
                let l = e.indexOf(t);
                l > -1 && e.splice(l, 1)
            }
            l.d(t, {
                c: function() {
                    return removeItem
                },
                y: function() {
                    return addUniqueItem
                }
            })
        },
        56956: function(e, t, l) {
            l.d(t, {
                u: function() {
                    return clamp
                }
            });
            let clamp = (e, t, l) => Math.min(Math.max(l, e), t)
        },
        56011: function(e, t, l) {
            l.d(t, {
                c: function() {
                    return o
                }
            });
            let o = {
                duration: .3,
                delay: 0,
                endDelay: 0,
                repeat: 0,
                easing: "ease"
            }
        },
        68533: function(e, t, l) {
            l.d(t, {
                I: function() {
                    return getEasingForSegment
                }
            });
            var o = l(31300);
            let wrap = (e, t, l) => {
                let o = t - e;
                return ((l - e) % o + o) % o + e
            };

            function getEasingForSegment(e, t) {
                return (0, o.K)(e) ? e[wrap(0, e.length, t)] : e
            }
        },
        10277: function(e, t, l) {
            l.d(t, {
                s: function() {
                    return interpolate
                }
            });
            var o = l(48619),
                n = l(3495),
                s = l(77401),
                c = l(5323),
                d = l(68533),
                m = l(56956);

            function interpolate(e, t = (0, s.Y)(e.length), l = n.V) {
                let h = e.length,
                    p = h - t.length;
                return p > 0 && (0, s.c)(t, p), n => {
                    let s = 0;
                    for (; s < h - 2 && !(n < t[s + 1]); s++);
                    let p = (0, m.u)(0, 1, (0, c.Y)(t[s], t[s + 1], n)),
                        g = (0, d.I)(l, s);
                    return p = g(p), (0, o.C)(e[s], e[s + 1], p)
                }
            }
        },
        13852: function(e, t, l) {
            l.d(t, {
                U: function() {
                    return isCubicBezier
                }
            });
            var o = l(34300);
            let isCubicBezier = e => Array.isArray(e) && (0, o.h)(e[0])
        },
        61427: function(e, t, l) {
            l.d(t, {
                m: function() {
                    return isEasingGenerator
                }
            });
            let isEasingGenerator = e => "object" == typeof e && !!e.createAnimation
        },
        31300: function(e, t, l) {
            l.d(t, {
                K: function() {
                    return isEasingList
                }
            });
            var o = l(34300);
            let isEasingList = e => Array.isArray(e) && !(0, o.h)(e[0])
        },
        22939: function(e, t, l) {
            l.d(t, {
                m: function() {
                    return isFunction
                }
            });
            let isFunction = e => "function" == typeof e
        },
        34300: function(e, t, l) {
            l.d(t, {
                h: function() {
                    return isNumber
                }
            });
            let isNumber = e => "number" == typeof e
        },
        34743: function(e, t, l) {
            l.d(t, {
                H: function() {
                    return isString
                }
            });
            let isString = e => "string" == typeof e
        },
        48619: function(e, t, l) {
            l.d(t, {
                C: function() {
                    return mix
                }
            });
            let mix = (e, t, l) => -l * e + l * t + e
        },
        3495: function(e, t, l) {
            l.d(t, {
                V: function() {
                    return noopReturn
                },
                Z: function() {
                    return noop
                }
            });
            let noop = () => {},
                noopReturn = e => e
        },
        77401: function(e, t, l) {
            l.d(t, {
                Y: function() {
                    return defaultOffset
                },
                c: function() {
                    return fillOffset
                }
            });
            var o = l(48619),
                n = l(5323);

            function fillOffset(e, t) {
                let l = e[e.length - 1];
                for (let s = 1; s <= t; s++) {
                    let c = (0, n.Y)(0, t, s);
                    e.push((0, o.C)(l, 1, c))
                }
            }

            function defaultOffset(e) {
                let t = [0];
                return fillOffset(t, e - 1), t
            }
        },
        5323: function(e, t, l) {
            l.d(t, {
                Y: function() {
                    return progress
                }
            });
            let progress = (e, t, l) => t - e == 0 ? 1 : (l - e) / (t - e)
        },
        88418: function(e, t, l) {
            l.d(t, {
                X: function() {
                    return o
                }
            });
            let o = {
                ms: e => 1e3 * e,
                s: e => e / 1e3
            }
        },
        73225: function(e, t, l) {
            l.r(t), l.d(t, {
                invariant: function() {
                    return invariant
                },
                warning: function() {
                    return warning
                }
            });
            var warning = function() {},
                invariant = function() {}
        },
        48732: function(e, t, l) {
            l.r(t), l.d(t, {
                WcmModal: function() {
                    return rb
                },
                WcmQrCode: function() {
                    return tS
                }
            });
            /**
             * @license
             * Copyright 2019 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let o = window,
                n = o.ShadowRoot && (void 0 === o.ShadyCSS || o.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                s = Symbol(),
                c = new WeakMap;
            let css_tag_o = class css_tag_o {
                constructor(e, t, l) {
                    if (this._$cssResult$ = !0, l !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = e, this.t = t
                }
                get styleSheet() {
                    let e = this.o,
                        t = this.t;
                    if (n && void 0 === e) {
                        let l = void 0 !== t && 1 === t.length;
                        l && (e = c.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), l && c.set(t, e))
                    }
                    return e
                }
                toString() {
                    return this.cssText
                }
            };
            let r = e => new css_tag_o("string" == typeof e ? e : e + "", void 0, s),
                i = (e, ...t) => {
                    let l = 1 === e.length ? e[0] : t.reduce((t, l, o) => t + (e => {
                        if (!0 === e._$cssResult$) return e.cssText;
                        if ("number" == typeof e) return e;
                        throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                    })(l) + e[o + 1], e[0]);
                    return new css_tag_o(l, e, s)
                },
                S = (e, t) => {
                    n ? e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t => {
                        let l = document.createElement("style"),
                            n = o.litNonce;
                        void 0 !== n && l.setAttribute("nonce", n), l.textContent = t.cssText, e.appendChild(l)
                    })
                },
                d = n ? e => e : e => e instanceof CSSStyleSheet ? (e => {
                    let t = "";
                    for (let l of e.cssRules) t += l.cssText;
                    return r(t)
                })(e) : e,
                m = window,
                h = m.trustedTypes,
                p = h ? h.emptyScript : "",
                g = m.reactiveElementPolyfillSupport,
                f = {
                    toAttribute(e, t) {
                        switch (t) {
                            case Boolean:
                                e = e ? p : null;
                                break;
                            case Object:
                            case Array:
                                e = null == e ? e : JSON.stringify(e)
                        }
                        return e
                    },
                    fromAttribute(e, t) {
                        let l = e;
                        switch (t) {
                            case Boolean:
                                l = null !== e;
                                break;
                            case Number:
                                l = null === e ? null : Number(e);
                                break;
                            case Object:
                            case Array:
                                try {
                                    l = JSON.parse(e)
                                } catch (e) {
                                    l = null
                                }
                        }
                        return l
                    }
                },
                a = (e, t) => t !== e && (t == t || e == e),
                b = {
                    attribute: !0,
                    type: String,
                    converter: f,
                    reflect: !1,
                    hasChanged: a
                },
                y = "finalized";
            let u = class u extends HTMLElement {
                constructor() {
                    super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu()
                }
                static addInitializer(e) {
                    var t;
                    this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
                }
                static get observedAttributes() {
                    this.finalize();
                    let e = [];
                    return this.elementProperties.forEach((t, l) => {
                        let o = this._$Ep(l, t);
                        void 0 !== o && (this._$Ev.set(o, l), e.push(o))
                    }), e
                }
                static createProperty(e, t = b) {
                    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                        let l = "symbol" == typeof e ? Symbol() : "__" + e,
                            o = this.getPropertyDescriptor(e, l, t);
                        void 0 !== o && Object.defineProperty(this.prototype, e, o)
                    }
                }
                static getPropertyDescriptor(e, t, l) {
                    return {
                        get() {
                            return this[t]
                        },
                        set(o) {
                            let n = this[e];
                            this[t] = o, this.requestUpdate(e, n, l)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(e) {
                    return this.elementProperties.get(e) || b
                }
                static finalize() {
                    if (this.hasOwnProperty(y)) return !1;
                    this[y] = !0;
                    let e = Object.getPrototypeOf(this);
                    if (e.finalize(), void 0 !== e.h && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                        let e = this.properties,
                            t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
                        for (let l of t) this.createProperty(l, e[l])
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles), !0
                }
                static finalizeStyles(e) {
                    let t = [];
                    if (Array.isArray(e)) {
                        let l = new Set(e.flat(1 / 0).reverse());
                        for (let e of l) t.unshift(d(e))
                    } else void 0 !== e && t.push(d(e));
                    return t
                }
                static _$Ep(e, t) {
                    let l = t.attribute;
                    return !1 === l ? void 0 : "string" == typeof l ? l : "string" == typeof e ? e.toLowerCase() : void 0
                }
                _$Eu() {
                    var e;
                    this._$E_ = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach(e => e(this))
                }
                addController(e) {
                    var t, l;
                    (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (l = e.hostConnected) || void 0 === l || l.call(e))
                }
                removeController(e) {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
                }
                _$Eg() {
                    this.constructor.elementProperties.forEach((e, t) => {
                        this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
                    })
                }
                createRenderRoot() {
                    var e;
                    let t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                    return S(t, this.constructor.elementStyles), t
                }
                connectedCallback() {
                    var e;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                        var t;
                        return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                    })
                }
                enableUpdating(e) {}
                disconnectedCallback() {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                        var t;
                        return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                    })
                }
                attributeChangedCallback(e, t, l) {
                    this._$AK(e, l)
                }
                _$EO(e, t, l = b) {
                    var o;
                    let n = this.constructor._$Ep(e, l);
                    if (void 0 !== n && !0 === l.reflect) {
                        let s = (void 0 !== (null === (o = l.converter) || void 0 === o ? void 0 : o.toAttribute) ? l.converter : f).toAttribute(t, l.type);
                        this._$El = e, null == s ? this.removeAttribute(n) : this.setAttribute(n, s), this._$El = null
                    }
                }
                _$AK(e, t) {
                    var l;
                    let o = this.constructor,
                        n = o._$Ev.get(e);
                    if (void 0 !== n && this._$El !== n) {
                        let e = o.getPropertyOptions(n),
                            s = "function" == typeof e.converter ? {
                                fromAttribute: e.converter
                            } : void 0 !== (null === (l = e.converter) || void 0 === l ? void 0 : l.fromAttribute) ? e.converter : f;
                        this._$El = n, this[n] = s.fromAttribute(t, e.type), this._$El = null
                    }
                }
                requestUpdate(e, t, l) {
                    let o = !0;
                    void 0 !== e && (((l = l || this.constructor.getPropertyOptions(e)).hasChanged || a)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === l.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, l))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej())
                }
                async _$Ej() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$E_
                    } catch (e) {
                        Promise.reject(e)
                    }
                    let e = this.scheduleUpdate();
                    return null != e && await e, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    var e;
                    if (!this.isUpdatePending) return;
                    this.hasUpdated, this._$Ei && (this._$Ei.forEach((e, t) => this[t] = e), this._$Ei = void 0);
                    let t = !1,
                        l = this._$AL;
                    try {
                        (t = this.shouldUpdate(l)) ? (this.willUpdate(l), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
                            var t;
                            return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                        }), this.update(l)) : this._$Ek()
                    } catch (e) {
                        throw t = !1, this._$Ek(), e
                    }
                    t && this._$AE(l)
                }
                willUpdate(e) {}
                _$AE(e) {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.forEach(e => {
                        var t;
                        return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
                }
                _$Ek() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$E_
                }
                shouldUpdate(e) {
                    return !0
                }
                update(e) {
                    void 0 !== this._$EC && (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)), this._$EC = void 0), this._$Ek()
                }
                updated(e) {}
                firstUpdated(e) {}
            };
            u[y] = !0, u.elementProperties = new Map, u.elementStyles = [], u.shadowRootOptions = {
                mode: "open"
            }, null == g || g({
                ReactiveElement: u
            }), (null !== (em = m.reactiveElementVersions) && void 0 !== em ? em : m.reactiveElementVersions = []).push("1.6.3");
            let x = window,
                _ = x.trustedTypes,
                $ = _ ? _.createPolicy("lit-html", {
                    createHTML: e => e
                }) : void 0,
                C = "$lit$",
                A = `lit$${(Math.random()+"").slice(9)}$`,
                O = "?" + A,
                E = `<${O}>`,
                I = document,
                lit_html_u = () => I.createComment(""),
                lit_html_d = e => null === e || "object" != typeof e && "function" != typeof e,
                T = Array.isArray,
                v = e => T(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
                W = "[ 	\n\f\r]",
                j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                U = /-->/g,
                B = />/g,
                Y = RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
                G = /'/g,
                X = /"/g,
                Q = /^(?:script|style|textarea|title)$/i,
                w = e => (t, ...l) => ({
                    _$litType$: e,
                    strings: t,
                    values: l
                }),
                J = w(1),
                ee = w(2),
                et = Symbol.for("lit-noChange"),
                er = Symbol.for("lit-nothing"),
                ei = new WeakMap,
                el = I.createTreeWalker(I, 129, null, !1);

            function P(e, t) {
                if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== $ ? $.createHTML(t) : t
            }
            let V = (e, t) => {
                let l = e.length - 1,
                    o = [],
                    n, s = 2 === t ? "<svg>" : "",
                    c = j;
                for (let t = 0; t < l; t++) {
                    let l = e[t],
                        d, m, h = -1,
                        p = 0;
                    for (; p < l.length && (c.lastIndex = p, null !== (m = c.exec(l)));) p = c.lastIndex, c === j ? "!--" === m[1] ? c = U : void 0 !== m[1] ? c = B : void 0 !== m[2] ? (Q.test(m[2]) && (n = RegExp("</" + m[2], "g")), c = Y) : void 0 !== m[3] && (c = Y) : c === Y ? ">" === m[0] ? (c = null != n ? n : j, h = -1) : void 0 === m[1] ? h = -2 : (h = c.lastIndex - m[2].length, d = m[1], c = void 0 === m[3] ? Y : '"' === m[3] ? X : G) : c === X || c === G ? c = Y : c === U || c === B ? c = j : (c = Y, n = void 0);
                    let g = c === Y && e[t + 1].startsWith("/>") ? " " : "";
                    s += c === j ? l + E : h >= 0 ? (o.push(d), l.slice(0, h) + C + l.slice(h) + A + g) : l + A + (-2 === h ? (o.push(void 0), t) : g)
                }
                return [P(e, s + (e[l] || "<?>") + (2 === t ? "</svg>" : "")), o]
            };
            let N = class N {
                constructor({
                    strings: e,
                    _$litType$: t
                }, l) {
                    let o;
                    this.parts = [];
                    let n = 0,
                        s = 0,
                        c = e.length - 1,
                        d = this.parts,
                        [m, h] = V(e, t);
                    if (this.el = N.createElement(m, l), el.currentNode = this.el.content, 2 === t) {
                        let e = this.el.content,
                            t = e.firstChild;
                        t.remove(), e.append(...t.childNodes)
                    }
                    for (; null !== (o = el.nextNode()) && d.length < c;) {
                        if (1 === o.nodeType) {
                            if (o.hasAttributes()) {
                                let e = [];
                                for (let t of o.getAttributeNames())
                                    if (t.endsWith(C) || t.startsWith(A)) {
                                        let l = h[s++];
                                        if (e.push(t), void 0 !== l) {
                                            let e = o.getAttribute(l.toLowerCase() + C).split(A),
                                                t = /([.?@])?(.*)/.exec(l);
                                            d.push({
                                                type: 1,
                                                index: n,
                                                name: t[2],
                                                strings: e,
                                                ctor: "." === t[1] ? H : "?" === t[1] ? L : "@" === t[1] ? z : k
                                            })
                                        } else d.push({
                                            type: 6,
                                            index: n
                                        })
                                    }
                                for (let t of e) o.removeAttribute(t)
                            }
                            if (Q.test(o.tagName)) {
                                let e = o.textContent.split(A),
                                    t = e.length - 1;
                                if (t > 0) {
                                    o.textContent = _ ? _.emptyScript : "";
                                    for (let l = 0; l < t; l++) o.append(e[l], lit_html_u()), el.nextNode(), d.push({
                                        type: 2,
                                        index: ++n
                                    });
                                    o.append(e[t], lit_html_u())
                                }
                            }
                        } else if (8 === o.nodeType) {
                            if (o.data === O) d.push({
                                type: 2,
                                index: n
                            });
                            else {
                                let e = -1;
                                for (; - 1 !== (e = o.data.indexOf(A, e + 1));) d.push({
                                    type: 7,
                                    index: n
                                }), e += A.length - 1
                            }
                        }
                        n++
                    }
                }
                static createElement(e, t) {
                    let l = I.createElement("template");
                    return l.innerHTML = e, l
                }
            };

            function lit_html_S(e, t, l = e, o) {
                var n, s, c;
                if (t === et) return t;
                let d = void 0 !== o ? null === (n = l._$Co) || void 0 === n ? void 0 : n[o] : l._$Cl,
                    m = lit_html_d(t) ? void 0 : t._$litDirective$;
                return (null == d ? void 0 : d.constructor) !== m && (null === (s = null == d ? void 0 : d._$AO) || void 0 === s || s.call(d, !1), void 0 === m ? d = void 0 : (d = new m(e))._$AT(e, l, o), void 0 !== o ? (null !== (c = l._$Co) && void 0 !== c ? c : l._$Co = [])[o] = d : l._$Cl = d), void 0 !== d && (t = lit_html_S(e, d._$AS(e, t.values), d, o)), t
            }
            let M = class M {
                constructor(e, t) {
                    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(e) {
                    var t;
                    let {
                        el: {
                            content: l
                        },
                        parts: o
                    } = this._$AD, n = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : I).importNode(l, !0);
                    el.currentNode = n;
                    let s = el.nextNode(),
                        c = 0,
                        d = 0,
                        m = o[0];
                    for (; void 0 !== m;) {
                        if (c === m.index) {
                            let t;
                            2 === m.type ? t = new R(s, s.nextSibling, this, e) : 1 === m.type ? t = new m.ctor(s, m.name, m.strings, this, e) : 6 === m.type && (t = new Z(s, this, e)), this._$AV.push(t), m = o[++d]
                        }
                        c !== (null == m ? void 0 : m.index) && (s = el.nextNode(), c++)
                    }
                    return el.currentNode = I, n
                }
                v(e) {
                    let t = 0;
                    for (let l of this._$AV) void 0 !== l && (void 0 !== l.strings ? (l._$AI(e, l, t), t += l.strings.length - 2) : l._$AI(e[t])), t++
                }
            };
            let R = class R {
                constructor(e, t, l, o) {
                    var n;
                    this.type = 2, this._$AH = er, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = l, this.options = o, this._$Cp = null === (n = null == o ? void 0 : o.isConnected) || void 0 === n || n
                }
                get _$AU() {
                    var e, t;
                    return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
                }
                get parentNode() {
                    let e = this._$AA.parentNode,
                        t = this._$AM;
                    return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode), e
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(e, t = this) {
                    lit_html_d(e = lit_html_S(this, e, t)) ? e === er || null == e || "" === e ? (this._$AH !== er && this._$AR(), this._$AH = er) : e !== this._$AH && e !== et && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : v(e) ? this.T(e) : this._(e)
                }
                k(e) {
                    return this._$AA.parentNode.insertBefore(e, this._$AB)
                }
                $(e) {
                    this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
                }
                _(e) {
                    this._$AH !== er && lit_html_d(this._$AH) ? this._$AA.nextSibling.data = e : this.$(I.createTextNode(e)), this._$AH = e
                }
                g(e) {
                    var t;
                    let {
                        values: l,
                        _$litType$: o
                    } = e, n = "number" == typeof o ? this._$AC(e) : (void 0 === o.el && (o.el = N.createElement(P(o.h, o.h[0]), this.options)), o);
                    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === n) this._$AH.v(l);
                    else {
                        let e = new M(n, this),
                            t = e.u(this.options);
                        e.v(l), this.$(t), this._$AH = e
                    }
                }
                _$AC(e) {
                    let t = ei.get(e.strings);
                    return void 0 === t && ei.set(e.strings, t = new N(e)), t
                }
                T(e) {
                    T(this._$AH) || (this._$AH = [], this._$AR());
                    let t = this._$AH,
                        l, o = 0;
                    for (let n of e) o === t.length ? t.push(l = new R(this.k(lit_html_u()), this.k(lit_html_u()), this, this.options)) : l = t[o], l._$AI(n), o++;
                    o < t.length && (this._$AR(l && l._$AB.nextSibling, o), t.length = o)
                }
                _$AR(e = this._$AA.nextSibling, t) {
                    var l;
                    for (null === (l = this._$AP) || void 0 === l || l.call(this, !1, !0, t); e && e !== this._$AB;) {
                        let t = e.nextSibling;
                        e.remove(), e = t
                    }
                }
                setConnected(e) {
                    var t;
                    void 0 === this._$AM && (this._$Cp = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
                }
            };
            let k = class k {
                constructor(e, t, l, o, n) {
                    this.type = 1, this._$AH = er, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = n, l.length > 2 || "" !== l[0] || "" !== l[1] ? (this._$AH = Array(l.length - 1).fill(new String), this.strings = l) : this._$AH = er
                }
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e, t = this, l, o) {
                    let n = this.strings,
                        s = !1;
                    if (void 0 === n)(s = !lit_html_d(e = lit_html_S(this, e, t, 0)) || e !== this._$AH && e !== et) && (this._$AH = e);
                    else {
                        let o, c;
                        let d = e;
                        for (e = n[0], o = 0; o < n.length - 1; o++)(c = lit_html_S(this, d[l + o], t, o)) === et && (c = this._$AH[o]), s || (s = !lit_html_d(c) || c !== this._$AH[o]), c === er ? e = er : e !== er && (e += (null != c ? c : "") + n[o + 1]), this._$AH[o] = c
                    }
                    s && !o && this.j(e)
                }
                j(e) {
                    e === er ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
                }
            };
            let H = class H extends k {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(e) {
                    this.element[this.name] = e === er ? void 0 : e
                }
            };
            let eo = _ ? _.emptyScript : "";
            let L = class L extends k {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(e) {
                    e && e !== er ? this.element.setAttribute(this.name, eo) : this.element.removeAttribute(this.name)
                }
            };
            let z = class z extends k {
                constructor(e, t, l, o, n) {
                    super(e, t, l, o, n), this.type = 5
                }
                _$AI(e, t = this) {
                    var l;
                    if ((e = null !== (l = lit_html_S(this, e, t, 0)) && void 0 !== l ? l : er) === et) return;
                    let o = this._$AH,
                        n = e === er && o !== er || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive,
                        s = e !== er && (o === er || n);
                    n && this.element.removeEventListener(this.name, this, o), s && this.element.addEventListener(this.name, this, e), this._$AH = e
                }
                handleEvent(e) {
                    var t, l;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (l = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== l ? l : this.element, e) : this._$AH.handleEvent(e)
                }
            };
            let Z = class Z {
                constructor(e, t, l) {
                    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = l
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e) {
                    lit_html_S(this, e)
                }
            };
            let ea = x.litHtmlPolyfillSupport;
            null == ea || ea(N, R), (null !== (eh = x.litHtmlVersions) && void 0 !== eh ? eh : x.litHtmlVersions = []).push("2.8.0");
            let D = (e, t, l) => {
                var o, n;
                let s = null !== (o = null == l ? void 0 : l.renderBefore) && void 0 !== o ? o : t,
                    c = s._$litPart$;
                if (void 0 === c) {
                    let e = null !== (n = null == l ? void 0 : l.renderBefore) && void 0 !== n ? n : null;
                    s._$litPart$ = c = new R(t.insertBefore(lit_html_u(), e), e, void 0, null != l ? l : {})
                }
                return c._$AI(e), c
            };
            let lit_element_s = class lit_element_s extends u {
                constructor() {
                    super(...arguments), this.renderOptions = {
                        host: this
                    }, this._$Do = void 0
                }
                createRenderRoot() {
                    var e, t;
                    let l = super.createRenderRoot();
                    return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = l.firstChild), l
                }
                update(e) {
                    let t = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = D(t, this.renderRoot, this.renderOptions)
                }
                connectedCallback() {
                    var e;
                    super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
                }
                disconnectedCallback() {
                    var e;
                    super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
                }
                render() {
                    return et
                }
            };
            lit_element_s.finalized = !0, lit_element_s._$litElement$ = !0, null === (ep = globalThis.litElementHydrateSupport) || void 0 === ep || ep.call(globalThis, {
                LitElement: lit_element_s
            });
            let en = globalThis.litElementPolyfillSupport;
            null == en || en({
                LitElement: lit_element_s
            }), (null !== (eu = globalThis.litElementVersions) && void 0 !== eu ? eu : globalThis.litElementVersions = []).push("3.3.3");
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let custom_element_e = e => t => "function" == typeof t ? (customElements.define(e, t), t) : ((e, t) => {
                    let {
                        kind: l,
                        elements: o
                    } = t;
                    return {
                        kind: l,
                        elements: o,
                        finisher(t) {
                            customElements.define(e, t)
                        }
                    }
                })(e, t),
                property_i = (e, t) => "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
                    kind: "field",
                    key: Symbol(),
                    placement: "own",
                    descriptor: {},
                    originalKey: t.key,
                    initializer() {
                        "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
                    },
                    finisher(l) {
                        l.createProperty(t.key, e)
                    }
                } : { ...t,
                    finisher(l) {
                        l.createProperty(t.key, e)
                    }
                },
                property_e = (e, t, l) => {
                    t.constructor.createProperty(l, e)
                };

            function property_n(e) {
                return (t, l) => void 0 !== l ? property_e(e, t, l) : property_i(e, t)
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            function state_t(e) {
                return property_n({ ...e,
                    state: !0
                })
            }
            null != (null === (eg = window.HTMLSlotElement) || void 0 === eg ? void 0 : eg.prototype.assignedElements) || ((e, t) => e.assignedNodes(t).filter(e => e.nodeType === Node.ELEMENT_NODE));
            let directive_i = class directive_i {
                constructor(e) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(e, t, l) {
                    this._$Ct = e, this._$AM = t, this._$Ci = l
                }
                _$AS(e, t) {
                    return this.update(e, t)
                }
                update(e, t) {
                    return this.render(...t)
                }
            };
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let es = (ed = class extends directive_i {
                constructor(e) {
                    var t;
                    if (super(e), 1 !== e.type || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(e) {
                    return " " + Object.keys(e).filter(t => e[t]).join(" ") + " "
                }
                update(e, [t]) {
                    var l, o;
                    if (void 0 === this.it) {
                        for (let o in this.it = new Set, void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter(e => "" !== e))), t) !t[o] || (null === (l = this.nt) || void 0 === l ? void 0 : l.has(o)) || this.it.add(o);
                        return this.render(t)
                    }
                    let n = e.element.classList;
                    for (let e in this.it.forEach(e => {
                            e in t || (n.remove(e), this.it.delete(e))
                        }), t) {
                        let l = !!t[e];
                        l === this.it.has(e) || (null === (o = this.nt) || void 0 === o ? void 0 : o.has(e)) || (l ? (n.add(e), this.it.add(e)) : (n.remove(e), this.it.delete(e)))
                    }
                    return et
                }
            }, (...e) => ({
                _$litDirective$: ed,
                values: e
            }));
            var ec, ed, em, eh, ep, eu, eg, ew = l(39670),
                ev = l(56011),
                ef = l(88418),
                eb = l(3495);

            function stopAnimation(e, t = !0) {
                if (e && "finished" !== e.playState) try {
                    e.stop ? e.stop() : (t && e.commitStyles(), e.cancel())
                } catch (e) {}
            }
            let createAnimation = e => e(),
                withControls = (e, t, l = ev.c.duration) => new Proxy({
                    animations: e.map(createAnimation).filter(Boolean),
                    duration: l,
                    options: t
                }, ey),
                getActiveAnimation = e => e.animations[0],
                ey = {
                    get: (e, t) => {
                        let l = getActiveAnimation(e);
                        switch (t) {
                            case "duration":
                                return e.duration;
                            case "currentTime":
                                return ef.X.s((null == l ? void 0 : l[t]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null == l ? void 0 : l[t];
                            case "finished":
                                return e.finished || (e.finished = Promise.all(e.animations.map(selectFinished)).catch(eb.Z)), e.finished;
                            case "stop":
                                return () => {
                                    e.animations.forEach(e => stopAnimation(e))
                                };
                            case "forEachNative":
                                return t => {
                                    e.animations.forEach(l => t(l, e))
                                };
                            default:
                                return void 0 === (null == l ? void 0 : l[t]) ? void 0 : () => e.animations.forEach(e => e[t]())
                        }
                    },
                    set: (e, t, l) => {
                        switch (t) {
                            case "currentTime":
                                l = ef.X.ms(l);
                            case "playbackRate":
                                for (let o = 0; o < e.animations.length; o++) e.animations[o][t] = l;
                                return !0
                        }
                        return !1
                    }
                },
                selectFinished = e => e.finished;
            var ex = l(16095),
                e_ = l(73225),
                e$ = l(14931);
            let eC = new WeakMap;

            function getAnimationData(e) {
                return eC.has(e) || eC.set(e, {
                    transforms: [],
                    values: new Map
                }), eC.get(e)
            }
            var eA = l(86074);
            let eO = ["", "X", "Y", "Z"],
                eE = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                ek = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: e => e + "deg"
                },
                eI = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: e => e + "px"
                    },
                    rotate: ek,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: eb.V
                    },
                    skew: ek
                },
                eT = new Map,
                asTransformCssVar = e => `--motion-${e}`,
                eS = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach(e => {
                eO.forEach(t => {
                    eS.push(e + t), eT.set(asTransformCssVar(e + t), eI[e])
                })
            });
            let compareTransformOrder = (e, t) => eS.indexOf(e) - eS.indexOf(t),
                eP = new Set(eS),
                isTransform = e => eP.has(e),
                addTransformToElement = (e, t) => {
                    eE[t] && (t = eE[t]);
                    let {
                        transforms: l
                    } = getAnimationData(e);
                    (0, eA.y)(l, t), e.style.transform = buildTransformTemplate(l)
                },
                buildTransformTemplate = e => e.sort(compareTransformOrder).reduce(transformListToString, "").trim(),
                transformListToString = (e, t) => `${e} ${t}(var(${asTransformCssVar(t)}))`,
                isCssVar = e => e.startsWith("--"),
                eR = new Set;
            var eM = l(61427),
                eL = l(22939),
                eW = l(31300),
                ej = l(34300),
                eD = l(5323),
                eN = l(13852);
            let testAnimation = (e, t) => document.createElement("div").animate(e, t),
                ez = {
                    cssRegisterProperty: () => "undefined" != typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            testAnimation({
                                opacity: [1]
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => !!testAnimation({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished,
                    linearEasing: () => {
                        try {
                            testAnimation({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }
                },
                eU = {},
                eH = {};
            for (let e in ez) eH[e] = () => (void 0 === eU[e] && (eU[e] = ez[e]()), eU[e]);
            let generateLinearEasingPoints = (e, t) => {
                    let l = "",
                        o = Math.round(t / .015);
                    for (let t = 0; t < o; t++) l += e((0, eD.Y)(0, o - 1, t)) + ", ";
                    return l.substring(0, l.length - 2)
                },
                convertEasing = (e, t) => (0, eL.m)(e) ? eH.linearEasing() ? `linear(${generateLinearEasingPoints(e,t)})` : ev.c.easing : (0, eN.U)(e) ? cubicBezierAsString(e) : e,
                cubicBezierAsString = ([e, t, l, o]) => `cubic-bezier(${e}, ${t}, ${l}, ${o})`,
                keyframesList = e => Array.isArray(e) ? e : [e];

            function getStyleName(e) {
                return eE[e] && (e = eE[e]), isTransform(e) ? asTransformCssVar(e) : e
            }
            let eV = {
                get: (e, t) => {
                    let l = isCssVar(t = getStyleName(t)) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
                    if (!l && 0 !== l) {
                        let e = eT.get(t);
                        e && (l = e.initialValue)
                    }
                    return l
                },
                set: (e, t, l) => {
                    isCssVar(t = getStyleName(t)) ? e.style.setProperty(t, l) : e.style[t] = l
                }
            };
            var eZ = l(34743);
            let getOptions = (e, t) => e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e),
                eB = (ec = ex.f, function(e, t, l = {}) {
                    var o, n, s, c, d;
                    "string" == typeof(o = e) ? n ? (null !== (s = n[o]) && void 0 !== s || (n[o] = document.querySelectorAll(o)), o = n[o]) : o = document.querySelectorAll(o): o instanceof Element && (o = [o]), e = Array.from(o || []);
                    let m = e.length;
                    (0, e_.invariant)(!!m, "No valid element provided."), (0, e_.invariant)(!!t, "No keyframes defined.");
                    let h = [];
                    for (let o = 0; o < m; o++) {
                        let n = e[o];
                        for (let e in t) {
                            let s = getOptions(l, e);
                            s.delay = (c = s.delay, d = o, (0, eL.m)(c) ? c(d, m) : c);
                            let p = function(e, t, l, o = {}, n) {
                                var s;
                                let c;
                                let d = window.__MOTION_DEV_TOOLS_RECORD,
                                    m = !1 !== o.record && d,
                                    {
                                        duration: h = ev.c.duration,
                                        delay: p = ev.c.delay,
                                        endDelay: g = ev.c.endDelay,
                                        repeat: f = ev.c.repeat,
                                        easing: b = ev.c.easing,
                                        persist: y = !1,
                                        direction: x,
                                        offset: _,
                                        allowWebkitAcceleration: $ = !1
                                    } = o,
                                    C = getAnimationData(e),
                                    A = isTransform(t),
                                    O = eH.waapi();
                                A && addTransformToElement(e, t);
                                let E = getStyleName(t),
                                    I = ((s = C.values).has(E) || s.set(E, new e$.H), s.get(E)),
                                    T = eT.get(E);
                                return stopAnimation(I.animation, !((0, eM.m)(b) && I.generator) && !1 !== o.record), () => {
                                    let readInitialValue = () => {
                                            var t, l;
                                            return null !== (l = null !== (t = eV.get(e, E)) && void 0 !== t ? t : null == T ? void 0 : T.initialValue) && void 0 !== l ? l : 0
                                        },
                                        s = function(e, t) {
                                            for (let l = 0; l < e.length; l++) null === e[l] && (e[l] = l ? e[l - 1] : t());
                                            return e
                                        }(keyframesList(l), readInitialValue),
                                        C = function(e, t) {
                                            var l;
                                            let o = (null == t ? void 0 : t.toDefaultUnit) || eb.V,
                                                n = e[e.length - 1];
                                            if ((0, eZ.H)(n)) {
                                                let e = (null === (l = n.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === l ? void 0 : l[2]) || "";
                                                e && (o = t => t + e)
                                            }
                                            return o
                                        }(s, T);
                                    if ((0, eM.m)(b)) {
                                        let e = b.createAnimation(s, "opacity" !== t, readInitialValue, E, I);
                                        b = e.easing, s = e.keyframes || s, h = e.duration || h
                                    }
                                    if (isCssVar(E) && (eH.cssRegisterProperty() ? function(e) {
                                            if (!eR.has(e)) {
                                                eR.add(e);
                                                try {
                                                    let {
                                                        syntax: t,
                                                        initialValue: l
                                                    } = eT.has(e) ? eT.get(e) : {};
                                                    CSS.registerProperty({
                                                        name: e,
                                                        inherits: !1,
                                                        syntax: t,
                                                        initialValue: l
                                                    })
                                                } catch (e) {}
                                            }
                                        }(E) : O = !1), A && !eH.linearEasing() && ((0, eL.m)(b) || (0, eW.K)(b) && b.some(eL.m)) && (O = !1), O) {
                                        T && (s = s.map(e => (0, ej.h)(e) ? T.toDefaultUnit(e) : e)), 1 === s.length && (!eH.partialKeyframes() || m) && s.unshift(readInitialValue());
                                        let t = {
                                            delay: ef.X.ms(p),
                                            duration: ef.X.ms(h),
                                            endDelay: ef.X.ms(g),
                                            easing: (0, eW.K)(b) ? void 0 : convertEasing(b, h),
                                            direction: x,
                                            iterations: f + 1,
                                            fill: "both"
                                        };
                                        (c = e.animate({
                                            [E]: s,
                                            offset: _,
                                            easing: (0, eW.K)(b) ? b.map(e => convertEasing(e, h)) : void 0
                                        }, t)).finished || (c.finished = new Promise((e, t) => {
                                            c.onfinish = e, c.oncancel = t
                                        }));
                                        let l = s[s.length - 1];
                                        c.finished.then(() => {
                                            y || (eV.set(e, E, l), c.cancel())
                                        }).catch(eb.Z), $ || (c.playbackRate = 1.000001)
                                    } else if (n && A) 1 === (s = s.map(e => "string" == typeof e ? parseFloat(e) : e)).length && s.unshift(parseFloat(readInitialValue())), c = new n(t => {
                                        eV.set(e, E, C ? C(t) : t)
                                    }, s, Object.assign(Object.assign({}, o), {
                                        duration: h,
                                        easing: b
                                    }));
                                    else {
                                        let t = s[s.length - 1];
                                        eV.set(e, E, T && (0, ej.h)(t) ? T.toDefaultUnit(t) : t)
                                    }
                                    return m && d(e, t, s, {
                                        duration: h,
                                        delay: p,
                                        easing: b,
                                        repeat: f,
                                        offset: _
                                    }, "motion-one"), I.setAnimation(c), c
                                }
                            }(n, e, t[e], s, ec);
                            h.push(p)
                        }
                    }
                    return withControls(h, l, l.duration)
                });

            function animateProgress(e, t = {}) {
                return withControls([() => {
                    let l = new ex.f(e, [0, 1], t);
                    return l.finished.catch(() => {}), l
                }], t, t.duration)
            }

            function animate_es_animate(e, t, l) {
                let o = (0, eL.m)(e) ? animateProgress : eB;
                return o(e, t, l)
            }
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let if_defined_l = e => null != e ? e : er;
            var eF = l(75298),
                eq = Object.defineProperty,
                eK = Object.getOwnPropertySymbols,
                eY = Object.prototype.hasOwnProperty,
                eG = Object.prototype.propertyIsEnumerable,
                Ue = (e, t, l) => t in e ? eq(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : e[t] = l,
                ve = (e, t) => {
                    for (var l in t || (t = {})) eY.call(t, l) && Ue(e, l, t[l]);
                    if (eK)
                        for (var l of eK(t)) eG.call(t, l) && Ue(e, l, t[l]);
                    return e
                };

            function He() {
                return {
                    "--wcm-accent-color": "#3396FF",
                    "--wcm-accent-fill-color": "#FFFFFF",
                    "--wcm-z-index": "89",
                    "--wcm-background-color": "#3396FF",
                    "--wcm-background-border-radius": "8px",
                    "--wcm-container-border-radius": "30px",
                    "--wcm-wallet-icon-border-radius": "15px",
                    "--wcm-wallet-icon-large-border-radius": "30px",
                    "--wcm-wallet-icon-small-border-radius": "7px",
                    "--wcm-input-border-radius": "28px",
                    "--wcm-button-border-radius": "10px",
                    "--wcm-notification-border-radius": "36px",
                    "--wcm-secondary-button-border-radius": "28px",
                    "--wcm-icon-button-border-radius": "50%",
                    "--wcm-button-hover-highlight-border-radius": "10px",
                    "--wcm-text-big-bold-size": "20px",
                    "--wcm-text-big-bold-weight": "600",
                    "--wcm-text-big-bold-line-height": "24px",
                    "--wcm-text-big-bold-letter-spacing": "-0.03em",
                    "--wcm-text-big-bold-text-transform": "none",
                    "--wcm-text-xsmall-bold-size": "10px",
                    "--wcm-text-xsmall-bold-weight": "700",
                    "--wcm-text-xsmall-bold-line-height": "12px",
                    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                    "--wcm-text-xsmall-bold-text-transform": "uppercase",
                    "--wcm-text-xsmall-regular-size": "12px",
                    "--wcm-text-xsmall-regular-weight": "600",
                    "--wcm-text-xsmall-regular-line-height": "14px",
                    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                    "--wcm-text-xsmall-regular-text-transform": "none",
                    "--wcm-text-small-thin-size": "14px",
                    "--wcm-text-small-thin-weight": "500",
                    "--wcm-text-small-thin-line-height": "16px",
                    "--wcm-text-small-thin-letter-spacing": "-0.03em",
                    "--wcm-text-small-thin-text-transform": "none",
                    "--wcm-text-small-regular-size": "14px",
                    "--wcm-text-small-regular-weight": "600",
                    "--wcm-text-small-regular-line-height": "16px",
                    "--wcm-text-small-regular-letter-spacing": "-0.03em",
                    "--wcm-text-small-regular-text-transform": "none",
                    "--wcm-text-medium-regular-size": "16px",
                    "--wcm-text-medium-regular-weight": "600",
                    "--wcm-text-medium-regular-line-height": "20px",
                    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                    "--wcm-text-medium-regular-text-transform": "none",
                    "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                    "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                    "--wcm-success-color": "rgb(38,181,98)",
                    "--wcm-error-color": "rgb(242, 90, 103)",
                    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                    "--wcm-overlay-backdrop-filter": "none"
                }
            }
            let eX = {
                    getPreset: e => He()[e],
                    setTheme() {
                        let e = document.querySelector(":root"),
                            {
                                themeVariables: t
                            } = ew.ThemeCtrl.state;
                        if (e) {
                            let l = ve(ve(ve({}, function() {
                                var e;
                                let t = null != (e = ew.ThemeCtrl.state.themeMode) ? e : "dark",
                                    l = {
                                        light: {
                                            foreground: {
                                                1: "rgb(20,20,20)",
                                                2: "rgb(121,134,134)",
                                                3: "rgb(158,169,169)"
                                            },
                                            background: {
                                                1: "rgb(255,255,255)",
                                                2: "rgb(241,243,243)",
                                                3: "rgb(228,231,231)"
                                            },
                                            overlay: "rgba(0,0,0,0.1)"
                                        },
                                        dark: {
                                            foreground: {
                                                1: "rgb(228,231,231)",
                                                2: "rgb(148,158,158)",
                                                3: "rgb(110,119,119)"
                                            },
                                            background: {
                                                1: "rgb(20,20,20)",
                                                2: "rgb(39,42,42)",
                                                3: "rgb(59,64,64)"
                                            },
                                            overlay: "rgba(255,255,255,0.1)"
                                        }
                                    }[t];
                                return {
                                    "--wcm-color-fg-1": l.foreground[1],
                                    "--wcm-color-fg-2": l.foreground[2],
                                    "--wcm-color-fg-3": l.foreground[3],
                                    "--wcm-color-bg-1": l.background[1],
                                    "--wcm-color-bg-2": l.background[2],
                                    "--wcm-color-bg-3": l.background[3],
                                    "--wcm-color-overlay": l.overlay
                                }
                            }()), He()), t);
                            Object.entries(l).forEach(([t, l]) => e.style.setProperty(t, l))
                        }
                    },
                    globalCss: i `*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
                },
                eQ = i `button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
            var eJ = Object.defineProperty,
                e0 = Object.getOwnPropertyDescriptor,
                F = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? e0(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && eJ(t, l, s), s
                };
            let e1 = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
                }
                render() {
                    let e = {
                            "wcm-icon-left": void 0 !== this.iconLeft,
                            "wcm-icon-right": void 0 !== this.iconRight,
                            "wcm-ghost": "ghost" === this.variant,
                            "wcm-outline": "outline" === this.variant
                        },
                        t = "inverse";
                    return "ghost" === this.variant && (t = "secondary"), "outline" === this.variant && (t = "accent"), J `<button class="${es(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${t}"><slot></slot></wcm-text>${this.iconRight}</button>`
                }
            };
            e1.styles = [eX.globalCss, eQ], F([property_n({
                type: Boolean
            })], e1.prototype, "disabled", 2), F([property_n()], e1.prototype, "iconLeft", 2), F([property_n()], e1.prototype, "iconRight", 2), F([property_n()], e1.prototype, "onClick", 2), F([property_n()], e1.prototype, "variant", 2), e1 = F([custom_element_e("wcm-button")], e1);
            let e2 = i `:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
            var e5 = Object.defineProperty,
                e3 = Object.getOwnPropertyDescriptor,
                ue = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? e3(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && e5(t, l, s), s
                };
            let e4 = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.disabled = !1, this.variant = "primary"
                }
                render() {
                    let e = {
                        "wcm-secondary": "secondary" === this.variant
                    };
                    return J `<button ?disabled="${this.disabled}" class="${es(e)}"><slot></slot></button>`
                }
            };
            e4.styles = [eX.globalCss, e2], ue([property_n({
                type: Boolean
            })], e4.prototype, "disabled", 2), ue([property_n()], e4.prototype, "variant", 2), e4 = ue([custom_element_e("wcm-button-big")], e4);
            let e7 = i `:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
            var e6 = Object.defineProperty,
                e8 = Object.getOwnPropertyDescriptor;
            let e9 = class extends lit_element_s {
                render() {
                    return J `<div><slot></slot></div>`
                }
            };
            e9.styles = [eX.globalCss, e7], e9 = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? e8(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && e6(t, l, s), s
            })([custom_element_e("wcm-info-footer")], e9);
            let tt = {
                    CROSS_ICON: ee `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_LOGO: ee `<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_ICON: ee `<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
                    WALLET_CONNECT_ICON_COLORED: ee `<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
                    BACK_ICON: ee `<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
                    COPY_ICON: ee `<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
                    RETRY_ICON: ee `<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
                    DESKTOP_ICON: ee `<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    MOBILE_ICON: ee `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
                    ARROW_DOWN_ICON: ee `<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
                    ARROW_UP_RIGHT_ICON: ee `<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    ARROW_RIGHT_ICON: ee `<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
                    QRCODE_ICON: ee `<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
                    SCAN_ICON: ee `<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
                    CHECKMARK_ICON: ee `<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
                    SEARCH_ICON: ee `<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
                    WALLET_PLACEHOLDER: ee `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    GLOBE_ICON: ee `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
                },
                tr = i `.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
            var ti = Object.defineProperty,
                tl = Object.getOwnPropertyDescriptor;
            let to = class extends lit_element_s {
                render() {
                    return J `<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${tt.WALLET_CONNECT_LOGO} <button @click="${ew.jb.close}">${tt.CROSS_ICON}</button></div>`
                }
            };
            to.styles = [eX.globalCss, tr], to = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? tl(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && ti(t, l, s), s
            })([custom_element_e("wcm-modal-backcard")], to);
            let ta = i `main{padding:20px;padding-top:0;width:100%}`;
            var tn = Object.defineProperty,
                ts = Object.getOwnPropertyDescriptor;
            let tc = class extends lit_element_s {
                render() {
                    return J `<main><slot></slot></main>`
                }
            };
            tc.styles = [eX.globalCss, ta], tc = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? ts(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && tn(t, l, s), s
            })([custom_element_e("wcm-modal-content")], tc);
            let td = i `footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
            var tm = Object.defineProperty,
                th = Object.getOwnPropertyDescriptor;
            let tp = class extends lit_element_s {
                render() {
                    return J `<footer><slot></slot></footer>`
                }
            };
            tp.styles = [eX.globalCss, td], tp = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? th(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && tm(t, l, s), s
            })([custom_element_e("wcm-modal-footer")], tp);
            let tu = i `header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
            var tg = Object.defineProperty,
                tw = Object.getOwnPropertyDescriptor,
                te = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tw(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && tg(t, l, s), s
                };
            let tv = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
                }
                backBtnTemplate() {
                    return J `<button class="wcm-back-btn" @click="${ew.AV.goBack}">${tt.BACK_ICON}</button>`
                }
                actionBtnTemplate() {
                    return J `<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
                }
                render() {
                    let e = {
                            "wcm-border": this.border
                        },
                        t = ew.AV.state.history.length > 1,
                        l = this.title ? J `<wcm-text variant="big-bold">${this.title}</wcm-text>` : J `<slot></slot>`;
                    return J `<header class="${es(e)}">${t?this.backBtnTemplate():null} ${l} ${this.onAction?this.actionBtnTemplate():null}</header>`
                }
            };
            tv.styles = [eX.globalCss, tu], te([property_n()], tv.prototype, "title", 2), te([property_n()], tv.prototype, "onAction", 2), te([property_n()], tv.prototype, "actionIcon", 2), te([property_n({
                type: Boolean
            })], tv.prototype, "border", 2), tv = te([custom_element_e("wcm-modal-header")], tv);
            let tf = {
                    MOBILE_BREAKPOINT: 600,
                    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
                    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
                    getShadowRootElement(e, t) {
                        let l = e.renderRoot.querySelector(t);
                        if (!l) throw Error(`${t} not found`);
                        return l
                    },
                    getWalletIcon({
                        id: e,
                        image_id: t
                    }) {
                        let {
                            walletImages: l
                        } = ew.ConfigCtrl.state;
                        return null != l && l[e] ? l[e] : t ? ew.ExplorerCtrl.getWalletImageUrl(t) : ""
                    },
                    getWalletName: (e, t = !1) => t ? e.split(" ")[0] : e,
                    isMobileAnimation: () => window.innerWidth <= tf.MOBILE_BREAKPOINT,
                    async preloadImage(e) {
                        let t = new Promise((t, l) => {
                            let o = new Image;
                            o.onload = t, o.onerror = l, o.src = e
                        });
                        return Promise.race([t, ew.zv.wait(3e3)])
                    },
                    getErrorMessage: e => e instanceof Error ? e.message : "Unknown Error",
                    debounce(e, t = 500) {
                        let l;
                        return (...o) => {
                            l && clearTimeout(l), l = setTimeout(function() {
                                e(...o)
                            }, t)
                        }
                    },
                    handleMobileLinking(e) {
                        let t;
                        let {
                            walletConnectUri: l
                        } = ew.OptionsCtrl.state, {
                            mobile: o,
                            name: n
                        } = e, s = o ? .native, c = o ? .universal;
                        tf.setRecentWallet(e), l && (t = "", s ? t = ew.zv.formatUniversalUrl(s, l, n) : c && (t = ew.zv.formatNativeUrl(c, l, n)), ew.zv.openHref(t, "_self"))
                    },
                    handleAndroidLinking() {
                        let {
                            walletConnectUri: e
                        } = ew.OptionsCtrl.state;
                        e && (ew.zv.setWalletConnectAndroidDeepLink(e), ew.zv.openHref(e, "_self"))
                    },
                    async handleUriCopy() {
                        let {
                            walletConnectUri: e
                        } = ew.OptionsCtrl.state;
                        if (e) try {
                            await navigator.clipboard.writeText(e), ew.ToastCtrl.openToast("Link copied", "success")
                        } catch {
                            ew.ToastCtrl.openToast("Failed to copy", "error")
                        }
                    },
                    getCustomImageUrls() {
                        let {
                            walletImages: e
                        } = ew.ConfigCtrl.state, t = Object.values(e ? ? {});
                        return Object.values(t)
                    },
                    truncate: (e, t = 8) => e.length <= t ? e : `${e.substring(0,4)}...${e.substring(e.length-4)}`,
                    setRecentWallet(e) {
                        try {
                            localStorage.setItem(tf.WCM_RECENT_WALLET_DATA, JSON.stringify(e))
                        } catch {
                            console.info("Unable to set recent wallet")
                        }
                    },
                    getRecentWallet() {
                        try {
                            let e = localStorage.getItem(tf.WCM_RECENT_WALLET_DATA);
                            return e ? JSON.parse(e) : void 0
                        } catch {
                            console.info("Unable to get recent wallet")
                        }
                    },
                    caseSafeIncludes: (e, t) => e.toUpperCase().includes(t.toUpperCase()),
                    openWalletExplorerUrl() {
                        ew.zv.openHref(tf.EXPLORER_WALLET_URL, "_blank")
                    },
                    getCachedRouterWalletPlatforms() {
                        let {
                            desktop: e,
                            mobile: t
                        } = ew.zv.getWalletRouterData(), l = !!e ? .native, o = !!e ? .universal, n = !!t ? .native || !!t ? .universal;
                        return {
                            isDesktop: l,
                            isMobile: n,
                            isWeb: o
                        }
                    },
                    goToConnectingView(e) {
                        ew.AV.setData({
                            Wallet: e
                        });
                        let t = ew.zv.isMobile(),
                            {
                                isDesktop: l,
                                isWeb: o,
                                isMobile: n
                            } = tf.getCachedRouterWalletPlatforms();
                        t ? n ? ew.AV.push("MobileConnecting") : o ? ew.AV.push("WebConnecting") : ew.AV.push("InstallWallet") : l ? ew.AV.push("DesktopConnecting") : o ? ew.AV.push("WebConnecting") : n ? ew.AV.push("MobileQrcodeConnecting") : ew.AV.push("InstallWallet")
                    }
                },
                tb = i `.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
            var ty = Object.defineProperty,
                tx = Object.getOwnPropertyDescriptor,
                $e = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tx(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && ty(t, l, s), s
                };
            let t_ = class extends lit_element_s {
                constructor() {
                    super(), this.view = ew.AV.state.view, this.prevView = ew.AV.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = ew.AV.subscribe(e => {
                        this.view !== e.view && this.onChangeRoute()
                    })
                }
                firstUpdated() {
                    this.resizeObserver = new ResizeObserver(([e]) => {
                        let t = `${e.contentRect.height}px`;
                        "0px" !== this.oldHeight && animate_es_animate(this.routerEl, {
                            height: [this.oldHeight, t]
                        }, {
                            duration: .2
                        }), this.oldHeight = t
                    }), this.resizeObserver.observe(this.contentEl)
                }
                disconnectedCallback() {
                    var e, t;
                    null == (e = this.unsubscribe) || e.call(this), null == (t = this.resizeObserver) || t.disconnect()
                }
                get routerEl() {
                    return tf.getShadowRootElement(this, ".wcm-router")
                }
                get contentEl() {
                    return tf.getShadowRootElement(this, ".wcm-content")
                }
                viewTemplate() {
                    switch (this.view) {
                        case "ConnectWallet":
                            return J `<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
                        case "DesktopConnecting":
                            return J `<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
                        case "MobileConnecting":
                            return J `<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
                        case "WebConnecting":
                            return J `<wcm-web-connecting-view></wcm-web-connecting-view>`;
                        case "MobileQrcodeConnecting":
                            return J `<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
                        case "WalletExplorer":
                            return J `<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
                        case "Qrcode":
                            return J `<wcm-qrcode-view></wcm-qrcode-view>`;
                        case "InstallWallet":
                            return J `<wcm-install-wallet-view></wcm-install-wallet-view>`;
                        default:
                            return J `<div>Not Found</div>`
                    }
                }
                async onChangeRoute() {
                    await animate_es_animate(this.routerEl, {
                        opacity: [1, 0],
                        scale: [1, 1.02]
                    }, {
                        duration: .15,
                        delay: .1
                    }).finished, this.view = ew.AV.state.view, animate_es_animate(this.routerEl, {
                        opacity: [0, 1],
                        scale: [.99, 1]
                    }, {
                        duration: .37,
                        delay: .05
                    })
                }
                render() {
                    return J `<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`
                }
            };
            t_.styles = [eX.globalCss, tb], $e([state_t()], t_.prototype, "view", 2), $e([state_t()], t_.prototype, "prevView", 2), t_ = $e([custom_element_e("wcm-modal-router")], t_);
            let t$ = i `div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
            var tC = Object.defineProperty,
                tA = Object.getOwnPropertyDescriptor,
                ze = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tA(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && tC(t, l, s), s
                };
            let tO = class extends lit_element_s {
                constructor() {
                    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = ew.ToastCtrl.subscribe(e => {
                        e.open ? (this.open = !0, this.timeout = setTimeout(() => ew.ToastCtrl.closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout))
                    })
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribe) || e.call(this), clearTimeout(this.timeout), ew.ToastCtrl.closeToast()
                }
                render() {
                    let {
                        message: e,
                        variant: t
                    } = ew.ToastCtrl.state;
                    return this.open ? J `<div class="${es({"wcm-success":"success"===t,"wcm-error":"error"===t})}">${"success"===t?tt.CHECKMARK_ICON:null} ${"error"===t?tt.CROSS_ICON:null}<wcm-text variant="small-regular">${e}</wcm-text></div>` : null
                }
            };

            function Ce(e, t, l) {
                return e !== t && (e - t < 0 ? t - e : e - t) <= l + .1
            }
            tO.styles = [eX.globalCss, t$], ze([state_t()], tO.prototype, "open", 2), tO = ze([custom_element_e("wcm-modal-toast")], tO);
            let tE = {
                    generate(e, t, l) {
                        let o = "#141414",
                            n = [],
                            s = function(e, t) {
                                let l = Array.prototype.slice.call(eF.create(e, {
                                        errorCorrectionLevel: "Q"
                                    }).modules.data, 0),
                                    o = Math.sqrt(l.length);
                                return l.reduce((e, t, l) => (l % o == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e, [])
                            }(e, 0),
                            c = t / s.length,
                            d = [{
                                x: 0,
                                y: 0
                            }, {
                                x: 1,
                                y: 0
                            }, {
                                x: 0,
                                y: 1
                            }];
                        d.forEach(({
                            x: e,
                            y: t
                        }) => {
                            let l = (s.length - 7) * c * e,
                                m = (s.length - 7) * c * t;
                            for (let e = 0; e < d.length; e += 1) {
                                let t = c * (7 - 2 * e);
                                n.push(ee `<rect fill="${e%2==0?o:"#ffffff"}" height="${t}" rx="${.45*t}" ry="${.45*t}" width="${t}" x="${l+c*e}" y="${m+c*e}">`)
                            }
                        });
                        let m = Math.floor((l + 25) / c),
                            h = s.length / 2 - m / 2,
                            p = s.length / 2 + m / 2 - 1,
                            g = [];
                        s.forEach((e, t) => {
                            e.forEach((e, l) => {
                                if (s[t][l] && !(t < 7 && l < 7 || t > s.length - 8 && l < 7 || t < 7 && l > s.length - 8) && !(t > h && t < p && l > h && l < p)) {
                                    let e = t * c + c / 2,
                                        o = l * c + c / 2;
                                    g.push([e, o])
                                }
                            })
                        });
                        let f = {};
                        return g.forEach(([e, t]) => {
                            f[e] ? f[e].push(t) : f[e] = [t]
                        }), Object.entries(f).map(([e, t]) => {
                            let l = t.filter(e => t.every(t => !Ce(e, t, c)));
                            return [Number(e), l]
                        }).forEach(([e, t]) => {
                            t.forEach(t => {
                                n.push(ee `<circle cx="${e}" cy="${t}" fill="${o}" r="${c/2.5}">`)
                            })
                        }), Object.entries(f).filter(([e, t]) => t.length > 1).map(([e, t]) => {
                            let l = t.filter(e => t.some(t => Ce(e, t, c)));
                            return [Number(e), l]
                        }).map(([e, t]) => {
                            t.sort((e, t) => e < t ? -1 : 1);
                            let l = [];
                            for (let e of t) {
                                let t = l.find(t => t.some(t => Ce(e, t, c)));
                                t ? t.push(e) : l.push([e])
                            }
                            return [e, l.map(e => [e[0], e[e.length - 1]])]
                        }).forEach(([e, t]) => {
                            t.forEach(([t, l]) => {
                                n.push(ee `<line x1="${e}" x2="${e}" y1="${t}" y2="${l}" stroke="${o}" stroke-width="${c/1.25}" stroke-linecap="round">`)
                            })
                        }), n
                    }
                },
                tk = i `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
            var tI = Object.defineProperty,
                tT = Object.getOwnPropertyDescriptor,
                q = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tT(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && tI(t, l, s), s
                };
            let tS = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0
                }
                svgTemplate() {
                    let e = "light" === ew.ThemeCtrl.state.themeMode ? this.size : this.size - 36;
                    return ee `<svg height="${e}" width="${e}">${tE.generate(this.uri,e,e/4)}</svg>`
                }
                render() {
                    let e = {
                        "wcm-dark": "dark" === ew.ThemeCtrl.state.themeMode
                    };
                    return J `<div style="${`width: ${this.size}px`}" class="${es(e)}">${this.walletId||this.imageUrl?J`<wcm-wallet-image walletId="${if_defined_l(this.walletId)}" imageId="${if_defined_l(this.imageId)}" imageUrl="${if_defined_l(this.imageUrl)}"></wcm-wallet-image>`:tt.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`
                }
            };
            tS.styles = [eX.globalCss, tk], q([property_n()], tS.prototype, "uri", 2), q([property_n({
                type: Number
            })], tS.prototype, "size", 2), q([property_n()], tS.prototype, "imageId", 2), q([property_n()], tS.prototype, "walletId", 2), q([property_n()], tS.prototype, "imageUrl", 2), tS = q([custom_element_e("wcm-qrcode")], tS);
            let tP = i `:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
            var tR = Object.defineProperty,
                tM = Object.getOwnPropertyDescriptor,
                Fe = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tM(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && tR(t, l, s), s
                };
            let tL = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.onChange = () => null
                }
                render() {
                    return J `<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${tt.SEARCH_ICON}`
                }
            };
            tL.styles = [eX.globalCss, tP], Fe([property_n()], tL.prototype, "onChange", 2), tL = Fe([custom_element_e("wcm-search-input")], tL);
            let tW = i `@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
            var tj = Object.defineProperty,
                tD = Object.getOwnPropertyDescriptor;
            let tN = class extends lit_element_s {
                render() {
                    return J `<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
                }
            };
            tN.styles = [eX.globalCss, tW], tN = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? tD(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && tj(t, l, s), s
            })([custom_element_e("wcm-spinner")], tN);
            let tz = i `span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
            var tU = Object.defineProperty,
                tH = Object.getOwnPropertyDescriptor,
                Oe = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tH(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && tU(t, l, s), s
                };
            let tV = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.variant = "medium-regular", this.color = "primary"
                }
                render() {
                    let e = {
                        "wcm-big-bold": "big-bold" === this.variant,
                        "wcm-medium-regular": "medium-regular" === this.variant,
                        "wcm-small-regular": "small-regular" === this.variant,
                        "wcm-small-thin": "small-thin" === this.variant,
                        "wcm-xsmall-regular": "xsmall-regular" === this.variant,
                        "wcm-xsmall-bold": "xsmall-bold" === this.variant,
                        "wcm-color-primary": "primary" === this.color,
                        "wcm-color-secondary": "secondary" === this.color,
                        "wcm-color-tertiary": "tertiary" === this.color,
                        "wcm-color-inverse": "inverse" === this.color,
                        "wcm-color-accnt": "accent" === this.color,
                        "wcm-color-error": "error" === this.color
                    };
                    return J `<span><slot class="${es(e)}"></slot></span>`
                }
            };
            tV.styles = [eX.globalCss, tz], Oe([property_n()], tV.prototype, "variant", 2), Oe([property_n()], tV.prototype, "color", 2), tV = Oe([custom_element_e("wcm-text")], tV);
            let tZ = i `button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
            var tB = Object.defineProperty,
                tF = Object.getOwnPropertyDescriptor,
                dist_ = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tF(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && tB(t, l, s), s
                };
            let tq = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
                }
                sublabelTemplate() {
                    return this.recent ? J `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? J `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null
                }
                handleClick() {
                    ew.uA.click({
                        name: "WALLET_BUTTON",
                        walletId: this.walletId
                    }), this.onClick()
                }
                render() {
                    var e;
                    return J `<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${if_defined_l(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${null!=(e=this.label)?e:tf.getWalletName(this.name,!0)}</wcm-text>${this.sublabelTemplate()}</div></button>`
                }
            };
            tq.styles = [eX.globalCss, tZ], dist_([property_n()], tq.prototype, "onClick", 2), dist_([property_n()], tq.prototype, "name", 2), dist_([property_n()], tq.prototype, "walletId", 2), dist_([property_n()], tq.prototype, "label", 2), dist_([property_n()], tq.prototype, "imageId", 2), dist_([property_n({
                type: Boolean
            })], tq.prototype, "installed", 2), dist_([property_n({
                type: Boolean
            })], tq.prototype, "recent", 2), tq = dist_([custom_element_e("wcm-wallet-button")], tq);
            let tK = i `:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var tY = Object.defineProperty,
                tG = Object.getOwnPropertyDescriptor,
                se = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tG(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && tY(t, l, s), s
                };
            let tX = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0
                }
                render() {
                    var e;
                    let t = null != (e = this.imageUrl) && e.length ? this.imageUrl : tf.getWalletIcon({
                        id: this.walletId,
                        image_id: this.imageId
                    });
                    return J `${t.length?J`<div><img src="${t}" alt="${this.id}"></div>`:tt.WALLET_PLACEHOLDER}`
                }
            };
            tX.styles = [eX.globalCss, tK], se([property_n()], tX.prototype, "walletId", 2), se([property_n()], tX.prototype, "imageId", 2), se([property_n()], tX.prototype, "imageUrl", 2), tX = se([custom_element_e("wcm-wallet-image")], tX);
            var tQ = Object.defineProperty,
                tJ = Object.getOwnPropertyDescriptor,
                qe = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? tJ(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && tQ(t, l, s), s
                };
            let t0 = class extends lit_element_s {
                constructor() {
                    super(), this.preload = !0, this.preloadData()
                }
                async loadImages(e) {
                    try {
                        null != e && e.length && await Promise.all(e.map(async e => tf.preloadImage(e)))
                    } catch {
                        console.info("Unsuccessful attempt at preloading some images", e)
                    }
                }
                async preloadListings() {
                    if (ew.ConfigCtrl.state.enableExplorer) {
                        await ew.ExplorerCtrl.getRecomendedWallets(), ew.OptionsCtrl.setIsDataLoaded(!0);
                        let {
                            recomendedWallets: e
                        } = ew.ExplorerCtrl.state, t = e.map(e => tf.getWalletIcon(e));
                        await this.loadImages(t)
                    } else ew.OptionsCtrl.setIsDataLoaded(!0)
                }
                async preloadCustomImages() {
                    let e = tf.getCustomImageUrls();
                    await this.loadImages(e)
                }
                async preloadData() {
                    try {
                        this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                    } catch (e) {
                        console.error(e), ew.ToastCtrl.openToast("Failed preloading", "error")
                    }
                }
            };
            qe([state_t()], t0.prototype, "preload", 2), t0 = qe([custom_element_e("wcm-explorer-context")], t0);
            var t1 = Object.defineProperty,
                t2 = Object.getOwnPropertyDescriptor;
            let t5 = class extends lit_element_s {
                constructor() {
                    super(), this.unsubscribeTheme = void 0, eX.setTheme(), this.unsubscribeTheme = ew.ThemeCtrl.subscribe(eX.setTheme)
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribeTheme) || e.call(this)
                }
            };
            t5 = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? t2(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && t1(t, l, s), s
            })([custom_element_e("wcm-theme-context")], t5);
            let t3 = i `@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var t4 = Object.defineProperty,
                t7 = Object.getOwnPropertyDescriptor;
            let t6 = class extends lit_element_s {
                onGoToQrcode() {
                    ew.AV.push("Qrcode")
                }
                render() {
                    let {
                        recomendedWallets: e
                    } = ew.ExplorerCtrl.state, t = [...e, ...e], l = 2 * ew.zv.RECOMMENDED_WALLET_AMOUNT;
                    return J `<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${tt.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${tt.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(l)].map((e,l)=>{let o=t[l%t.length];return o?J`<wcm-wallet-image walletId="${o.id}" imageId="${o.image_id}"></wcm-wallet-image>`:tt.WALLET_PLACEHOLDER})}</div><wcm-button-big @click="${tf.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`
                }
            };
            t6.styles = [eX.globalCss, t3], t6 = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? t7(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && t4(t, l, s), s
            })([custom_element_e("wcm-android-wallet-selection")], t6);
            let t8 = i `@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
            var t9 = Object.defineProperty,
                re = Object.getOwnPropertyDescriptor,
                K = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? re(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && t9(t, l, s), s
                };
            let rt = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
                }
                svgLoaderTemplate() {
                    var e, t;
                    let l = null != (t = null == (e = ew.ThemeCtrl.state.themeVariables) ? void 0 : e["--wcm-wallet-icon-large-border-radius"]) ? t : eX.getPreset("--wcm-wallet-icon-large-border-radius"),
                        o = 0;
                    o = (l.includes("%") ? .88 * parseInt(l, 10) : parseInt(l, 10)) * 1.17;
                    let n = 317 - 1.57 * o,
                        s = 425 - 1.8 * o;
                    return J `<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${o}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${n}" stroke-dashoffset="${s}"></use></svg>`
                }
                render() {
                    let e = {
                        "wcm-error": this.isError,
                        "wcm-stale": this.isStale
                    };
                    return J `<div class="${es(e)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${if_defined_l(this.walletId)}" imageId="${if_defined_l(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Connection declined":this.label}</wcm-text>`
                }
            };
            rt.styles = [eX.globalCss, t8], K([property_n()], rt.prototype, "walletId", 2), K([property_n()], rt.prototype, "imageId", 2), K([property_n({
                type: Boolean
            })], rt.prototype, "isError", 2), K([property_n({
                type: Boolean
            })], rt.prototype, "isStale", 2), K([property_n()], rt.prototype, "label", 2), rt = K([custom_element_e("wcm-connector-waiting")], rt);
            let rr = {
                    manualWallets() {
                        var e, t;
                        let {
                            mobileWallets: l,
                            desktopWallets: o
                        } = ew.ConfigCtrl.state, n = null == (e = rr.recentWallet()) ? void 0 : e.id, s = ew.zv.isMobile() ? l : o, c = s ? .filter(e => n !== e.id);
                        return null != (t = ew.zv.isMobile() ? c ? .map(({
                            id: e,
                            name: t,
                            links: l
                        }) => ({
                            id: e,
                            name: t,
                            mobile: l,
                            links: l
                        })) : c ? .map(({
                            id: e,
                            name: t,
                            links: l
                        }) => ({
                            id: e,
                            name: t,
                            desktop: l,
                            links: l
                        }))) ? t : []
                    },
                    recentWallet: () => tf.getRecentWallet(),
                    recomendedWallets(e = !1) {
                        var t;
                        let l = e || null == (t = rr.recentWallet()) ? void 0 : t.id,
                            {
                                recomendedWallets: o
                            } = ew.ExplorerCtrl.state;
                        return o.filter(e => l !== e.id)
                    }
                },
                ri = {
                    onConnecting(e) {
                        tf.goToConnectingView(e)
                    },
                    manualWalletsTemplate() {
                        return rr.manualWallets().map(e => J `<wcm-wallet-button walletId="${e.id}" name="${e.name}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`)
                    },
                    recomendedWalletsTemplate(e = !1) {
                        return rr.recomendedWallets(e).map(e => J `<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`)
                    },
                    recentWalletTemplate() {
                        let e = rr.recentWallet();
                        if (e) return J `<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${if_defined_l(e.image_id)}" .recent="${!0}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`
                    }
                },
                rl = i `.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
            var ro = Object.defineProperty,
                ra = Object.getOwnPropertyDescriptor;
            let rn = class extends lit_element_s {
                render() {
                    let {
                        explorerExcludedWalletIds: e,
                        enableExplorer: t
                    } = ew.ConfigCtrl.state, l = ri.manualWalletsTemplate(), o = ri.recomendedWalletsTemplate(), n = [ri.recentWalletTemplate(), ...l, ...o];
                    n = n.filter(Boolean);
                    let s = n.length > 4 || "ALL" !== e && t,
                        c = [];
                    c = s ? n.slice(0, 3) : n;
                    let d = !!c.length;
                    return J `<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${tf.handleUriCopy}" .actionIcon="${tt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${tt.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${tt.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${d?J`<wcm-modal-footer><div class="wcm-desktop-title">${tt.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${c} ${s?J`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-footer>`:null}`
                }
            };
            rn.styles = [eX.globalCss, rl], rn = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? ra(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && ro(t, l, s), s
            })([custom_element_e("wcm-desktop-wallet-selection")], rn);
            let rs = i `div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
            var rc = Object.defineProperty,
                rd = Object.getOwnPropertyDescriptor;
            let rm = class extends lit_element_s {
                render() {
                    let {
                        termsOfServiceUrl: e,
                        privacyPolicyUrl: t
                    } = ew.ConfigCtrl.state;
                    return e ? ? t ? J `<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e?J`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${e&&t?"and":null} ${t?J`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</wcm-text></div>` : null
                }
            };
            rm.styles = [eX.globalCss, rs], rm = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? rd(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && rc(t, l, s), s
            })([custom_element_e("wcm-legal-notice")], rm);
            let rh = i `div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
            var rp = Object.defineProperty,
                ru = Object.getOwnPropertyDescriptor;
            let rg = class extends lit_element_s {
                onQrcode() {
                    ew.AV.push("Qrcode")
                }
                render() {
                    let {
                        explorerExcludedWalletIds: e,
                        enableExplorer: t
                    } = ew.ConfigCtrl.state, l = ri.manualWalletsTemplate(), o = ri.recomendedWalletsTemplate(), n = [ri.recentWalletTemplate(), ...l, ...o];
                    n = n.filter(Boolean);
                    let s = n.length > 8 || "ALL" !== e && t,
                        c = [];
                    c = s ? n.slice(0, 7) : n;
                    let d = !!c.length;
                    return J `<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${tt.QRCODE_ICON}"></wcm-modal-header>${d?J`<wcm-modal-content><div>${c} ${s?J`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-content>`:null}`
                }
            };
            rg.styles = [eX.globalCss, rh], rg = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? ru(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && rp(t, l, s), s
            })([custom_element_e("wcm-mobile-wallet-selection")], rg);
            let rw = i `:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
            var rv = Object.defineProperty,
                rf = Object.getOwnPropertyDescriptor,
                Re = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? rf(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && rv(t, l, s), s
                };
            let rb = class extends lit_element_s {
                constructor() {
                    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = ew.jb.subscribe(e => {
                        e.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                    })
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.unsubscribeModal) || e.call(this)
                }
                get overlayEl() {
                    return tf.getShadowRootElement(this, ".wcm-overlay")
                }
                get containerEl() {
                    return tf.getShadowRootElement(this, ".wcm-container")
                }
                toggleBodyScroll(e) {
                    if (document.querySelector("body")) {
                        if (e) {
                            let e = document.getElementById("wcm-styles");
                            e ? .remove()
                        } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                    }
                }
                onCloseModal(e) {
                    e.target === e.currentTarget && ew.jb.close()
                }
                onOpenModalEvent() {
                    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async () => {
                        let e = tf.isMobileAnimation() ? {
                            y: ["50vh", "0vh"]
                        } : {
                            scale: [.98, 1]
                        };
                        await Promise.all([animate_es_animate(this.overlayEl, {
                            opacity: [0, 1]
                        }, {
                            delay: .1,
                            duration: .2
                        }).finished, animate_es_animate(this.containerEl, e, {
                            delay: .1,
                            duration: .2
                        }).finished]), this.active = !0
                    }, 0)
                }
                async onCloseModalEvent() {
                    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
                    let e = tf.isMobileAnimation() ? {
                        y: ["0vh", "50vh"]
                    } : {
                        scale: [1, .98]
                    };
                    await Promise.all([animate_es_animate(this.overlayEl, {
                        opacity: [1, 0]
                    }, {
                        duration: .2
                    }).finished, animate_es_animate(this.containerEl, e, {
                        duration: .2
                    }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1
                }
                addKeyboardEvents() {
                    this.abortController = new AbortController, window.addEventListener("keydown", e => {
                        var t;
                        "Escape" === e.key ? ew.jb.close() : "Tab" === e.key && (null != (t = e.target) && t.tagName.includes("wcm-") || this.containerEl.focus())
                    }, this.abortController), this.containerEl.focus()
                }
                removeKeyboardEvents() {
                    var e;
                    null == (e = this.abortController) || e.abort(), this.abortController = void 0
                }
                render() {
                    let e = {
                        "wcm-overlay": !0,
                        "wcm-active": this.active
                    };
                    return J `<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${es(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open?J`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`:null}</div></div>`
                }
            };
            rb.styles = [eX.globalCss, rw], Re([state_t()], rb.prototype, "open", 2), Re([state_t()], rb.prototype, "active", 2), rb = Re([custom_element_e("wcm-modal")], rb);
            let ry = i `div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
            var rx = Object.defineProperty,
                r_ = Object.getOwnPropertyDescriptor,
                le = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? r_(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && rx(t, l, s), s
                };
            let r$ = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
                }
                onMobile() {
                    ew.zv.isMobile() ? ew.AV.replace("MobileConnecting") : ew.AV.replace("MobileQrcodeConnecting")
                }
                onDesktop() {
                    ew.AV.replace("DesktopConnecting")
                }
                onWeb() {
                    ew.AV.replace("WebConnecting")
                }
                render() {
                    return J `<div>${this.isRetry?J`<slot></slot>`:null} ${this.isMobile?J`<wcm-button .onClick="${this.onMobile}" .iconLeft="${tt.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`:null} ${this.isDesktop?J`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${tt.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`:null} ${this.isWeb?J`<wcm-button .onClick="${this.onWeb}" .iconLeft="${tt.GLOBE_ICON}" variant="outline">Web</wcm-button>`:null}</div>`
                }
            };
            r$.styles = [eX.globalCss, ry], le([property_n({
                type: Boolean
            })], r$.prototype, "isMobile", 2), le([property_n({
                type: Boolean
            })], r$.prototype, "isDesktop", 2), le([property_n({
                type: Boolean
            })], r$.prototype, "isWeb", 2), le([property_n({
                type: Boolean
            })], r$.prototype, "isRetry", 2), r$ = le([custom_element_e("wcm-platform-selection")], r$);
            let rC = i `button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var rA = Object.defineProperty,
                rO = Object.getOwnPropertyDescriptor;
            let rE = class extends lit_element_s {
                onClick() {
                    ew.AV.push("WalletExplorer")
                }
                render() {
                    let {
                        recomendedWallets: e
                    } = ew.ExplorerCtrl.state, t = rr.manualWallets(), l = [...e, ...t].reverse().slice(0, 4);
                    return J `<button @click="${this.onClick}"><div class="wcm-icons">${l.map(e=>{let t=tf.getWalletIcon(e);if(t)return J`<img src="${t}">`;let l=tf.getWalletIcon({id:e.id});return l?J` < img src = "${l}" > `:tt.WALLET_PLACEHOLDER})} ${[...Array(4-l.length)].map(()=>tt.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`
                }
            };
            rE.styles = [eX.globalCss, rC], rE = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? rO(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && rA(t, l, s), s
            })([custom_element_e("wcm-view-all-wallets-button")], rE);
            let rk = i `.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
            var rI = Object.defineProperty,
                rT = Object.getOwnPropertyDescriptor,
                de = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? rT(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && rI(t, l, s), s
                };
            let rS = class extends lit_element_s {
                constructor() {
                    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
                        let {
                            walletConnectUri: e
                        } = ew.OptionsCtrl.state;
                        this.uri = e
                    }, 0)
                }
                get overlayEl() {
                    return tf.getShadowRootElement(this, ".wcm-qr-container")
                }
                render() {
                    return J `<div class="wcm-qr-container">${this.uri?J`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${if_defined_l(this.walletId)}" imageId="${if_defined_l(this.imageId)}"></wcm-qrcode>`:J`<wcm-spinner></wcm-spinner>`}</div>`
                }
            };
            rS.styles = [eX.globalCss, rk], de([property_n()], rS.prototype, "walletId", 2), de([property_n()], rS.prototype, "imageId", 2), de([state_t()], rS.prototype, "uri", 2), rS = de([custom_element_e("wcm-walletconnect-qr")], rS);
            var rP = Object.defineProperty,
                rR = Object.getOwnPropertyDescriptor;
            let rM = class extends lit_element_s {
                viewTemplate() {
                    return ew.zv.isAndroid() ? J `<wcm-android-wallet-selection></wcm-android-wallet-selection>` : ew.zv.isMobile() ? J `<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : J `<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`
                }
                render() {
                    return J `${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`
                }
            };
            rM.styles = [eX.globalCss], rM = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? rR(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && rP(t, l, s), s
            })([custom_element_e("wcm-connect-wallet-view")], rM);
            let rL = i `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var rW = Object.defineProperty,
                rj = Object.getOwnPropertyDescriptor,
                Ke = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? rj(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && rW(t, l, s), s
                };
            let rD = class extends lit_element_s {
                constructor() {
                    super(), this.isError = !1, this.openDesktopApp()
                }
                onFormatAndRedirect(e) {
                    let {
                        desktop: t,
                        name: l
                    } = ew.zv.getWalletRouterData(), o = t ? .native;
                    if (o) {
                        let t = ew.zv.formatNativeUrl(o, e, l);
                        ew.zv.openHref(t, "_self")
                    }
                }
                openDesktopApp() {
                    let {
                        walletConnectUri: e
                    } = ew.OptionsCtrl.state, t = ew.zv.getWalletRouterData();
                    tf.setRecentWallet(t), e && this.onFormatAndRedirect(e)
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: l
                    } = ew.zv.getWalletRouterData(), {
                        isMobile: o,
                        isWeb: n
                    } = tf.getCachedRouterWalletPlatforms();
                    return J `<wcm-modal-header title="${e}" .onAction="${tf.handleUriCopy}" .actionIcon="${tt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${if_defined_l(l)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isWeb="${n}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${tt.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            rD.styles = [eX.globalCss, rL], Ke([state_t()], rD.prototype, "isError", 2), rD = Ke([custom_element_e("wcm-desktop-connecting-view")], rD);
            let rN = i `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
            var rz = Object.defineProperty,
                rU = Object.getOwnPropertyDescriptor;
            let rH = class extends lit_element_s {
                onInstall(e) {
                    e && ew.zv.openHref(e, "_blank")
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: l,
                        homepage: o
                    } = ew.zv.getWalletRouterData();
                    return J `<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${if_defined_l(l)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${()=>this.onInstall(o)}" .iconLeft="${tt.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`
                }
            };
            rH.styles = [eX.globalCss, rN], rH = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? rU(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && rz(t, l, s), s
            })([custom_element_e("wcm-install-wallet-view")], rH);
            let rV = i `wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
            var rZ = Object.defineProperty,
                rB = Object.getOwnPropertyDescriptor,
                Ye = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? rB(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && rZ(t, l, s), s
                };
            let rF = class extends lit_element_s {
                constructor() {
                    super(), this.isError = !1, this.openMobileApp()
                }
                onFormatAndRedirect(e, t = !1) {
                    let {
                        mobile: l,
                        name: o
                    } = ew.zv.getWalletRouterData(), n = l ? .native, s = l ? .universal;
                    if (n && !t) {
                        let t = ew.zv.formatNativeUrl(n, e, o);
                        ew.zv.openHref(t, "_self")
                    } else if (s) {
                        let t = ew.zv.formatUniversalUrl(s, e, o);
                        ew.zv.openHref(t, "_self")
                    }
                }
                openMobileApp(e = !1) {
                    let {
                        walletConnectUri: t
                    } = ew.OptionsCtrl.state, l = ew.zv.getWalletRouterData();
                    tf.setRecentWallet(l), t && this.onFormatAndRedirect(t, e)
                }
                onGoToAppStore(e) {
                    e && ew.zv.openHref(e, "_blank")
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: l,
                        app: o,
                        mobile: n
                    } = ew.zv.getWalletRouterData(), {
                        isWeb: s
                    } = tf.getCachedRouterWalletPlatforms(), c = o ? .ios, d = n ? .universal;
                    return J `<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${if_defined_l(l)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${s}" .isRetry="${!0}"><wcm-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${tt.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${d?J`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>`:null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${t}" imageId="${if_defined_l(l)}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${tt.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(c)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`
                }
            };
            rF.styles = [eX.globalCss, rV], Ye([state_t()], rF.prototype, "isError", 2), rF = Ye([custom_element_e("wcm-mobile-connecting-view")], rF);
            let rq = i `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var rK = Object.defineProperty,
                rY = Object.getOwnPropertyDescriptor;
            let rG = class extends lit_element_s {
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: l
                    } = ew.zv.getWalletRouterData(), {
                        isDesktop: o,
                        isWeb: n
                    } = tf.getCachedRouterWalletPlatforms();
                    return J `<wcm-modal-header title="${e}" .onAction="${tf.handleUriCopy}" .actionIcon="${tt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${t}" imageId="${if_defined_l(l)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${o}" .isWeb="${n}"></wcm-platform-selection></wcm-info-footer>`
                }
            };
            rG.styles = [eX.globalCss, rq], rG = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? rY(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && rK(t, l, s), s
            })([custom_element_e("wcm-mobile-qr-connecting-view")], rG);
            var rX = Object.defineProperty,
                rQ = Object.getOwnPropertyDescriptor;
            let rJ = class extends lit_element_s {
                render() {
                    return J `<wcm-modal-header title="Scan the code" .onAction="${tf.handleUriCopy}" .actionIcon="${tt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`
                }
            };
            rJ.styles = [eX.globalCss], rJ = ((e, t, l, o) => {
                for (var n, s = o > 1 ? void 0 : o ? rQ(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                return o && s && rX(t, l, s), s
            })([custom_element_e("wcm-qrcode-view")], rJ);
            let r0 = i `wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
            var r1 = Object.defineProperty,
                r2 = Object.getOwnPropertyDescriptor,
                ie = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? r2(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && r1(t, l, s), s
                };
            let r5 = class extends lit_element_s {
                constructor() {
                    super(...arguments), this.loading = !ew.ExplorerCtrl.state.wallets.listings.length, this.firstFetch = !ew.ExplorerCtrl.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = tf.debounce(e => {
                        e.length >= 3 ? (this.firstFetch = !0, this.endReached = !1, this.search = e, ew.ExplorerCtrl.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), ew.ExplorerCtrl.resetSearch())
                    })
                }
                firstUpdated() {
                    this.createPaginationObserver()
                }
                disconnectedCallback() {
                    var e;
                    null == (e = this.intersectionObserver) || e.disconnect()
                }
                get placeholderEl() {
                    return tf.getShadowRootElement(this, ".wcm-placeholder-block")
                }
                createPaginationObserver() {
                    this.intersectionObserver = new IntersectionObserver(([e]) => {
                        e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets()
                    }), this.intersectionObserver.observe(this.placeholderEl)
                }
                isLastPage() {
                    let {
                        wallets: e,
                        search: t
                    } = ew.ExplorerCtrl.state, {
                        listings: l,
                        total: o
                    } = this.search ? t : e;
                    return o <= 40 || l.length >= o
                }
                async fetchWallets() {
                    var e;
                    let {
                        wallets: t,
                        search: l
                    } = ew.ExplorerCtrl.state, {
                        listings: o,
                        total: n,
                        page: s
                    } = this.search ? l : t;
                    if (!this.endReached && (this.firstFetch || n > 40 && o.length < n)) try {
                        this.loading = !0;
                        let t = null == (e = ew.OptionsCtrl.state.chains) ? void 0 : e.join(","),
                            {
                                listings: l
                            } = await ew.ExplorerCtrl.getWallets({
                                page: this.firstFetch ? 1 : s + 1,
                                entries: 40,
                                search: this.search,
                                version: 2,
                                chains: t
                            }),
                            o = l.map(e => tf.getWalletIcon(e));
                        await Promise.all([...o.map(async e => tf.preloadImage(e)), ew.zv.wait(300)]), this.endReached = this.isLastPage()
                    } catch (e) {
                        console.error(e), ew.ToastCtrl.openToast(tf.getErrorMessage(e), "error")
                    } finally {
                        this.loading = !1, this.firstFetch = !1
                    }
                }
                onConnect(e) {
                    ew.zv.isAndroid() ? tf.handleMobileLinking(e) : tf.goToConnectingView(e)
                }
                onSearchChange(e) {
                    let {
                        value: t
                    } = e.target;
                    this.searchDebounce(t)
                }
                render() {
                    let {
                        wallets: e,
                        search: t
                    } = ew.ExplorerCtrl.state, {
                        listings: l
                    } = this.search ? t : e, o = this.loading && !l.length, n = this.search.length >= 3, s = ri.manualWalletsTemplate(), c = ri.recomendedWalletsTemplate(!0);
                    n && (s = s.filter(({
                        values: e
                    }) => tf.caseSafeIncludes(e[0], this.search)), c = c.filter(({
                        values: e
                    }) => tf.caseSafeIncludes(e[0], this.search)));
                    let d = !this.loading && !l.length && !c.length,
                        m = {
                            "wcm-loading": o,
                            "wcm-end-reached": this.endReached || !this.loading,
                            "wcm-empty": d
                        };
                    return J `<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${es(m)}"><div class="wcm-grid">${o?null:s} ${o?null:c} ${o?null:l.map(e=>J`${e?J`<wcm-wallet-button imageId="${e.image_id}" name="${e.name}" walletId="${e.id}" .onClick="${()=>this.onConnect(e)}"></wcm-wallet-button>`:null}`)}</div><div class="wcm-placeholder-block">${d?J`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`:null} ${!d&&this.loading?J`<wcm-spinner></wcm-spinner>`:null}</div></wcm-modal-content>`
                }
            };
            r5.styles = [eX.globalCss, r0], ie([state_t()], r5.prototype, "loading", 2), ie([state_t()], r5.prototype, "firstFetch", 2), ie([state_t()], r5.prototype, "search", 2), ie([state_t()], r5.prototype, "endReached", 2), r5 = ie([custom_element_e("wcm-wallet-explorer-view")], r5);
            let r3 = i `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var r4 = Object.defineProperty,
                r7 = Object.getOwnPropertyDescriptor,
                Ge = (e, t, l, o) => {
                    for (var n, s = o > 1 ? void 0 : o ? r7(t, l) : t, c = e.length - 1; c >= 0; c--)(n = e[c]) && (s = (o ? n(t, l, s) : n(s)) || s);
                    return o && s && r4(t, l, s), s
                };
            let r6 = class extends lit_element_s {
                constructor() {
                    super(), this.isError = !1, this.openWebWallet()
                }
                onFormatAndRedirect(e) {
                    let {
                        desktop: t,
                        name: l
                    } = ew.zv.getWalletRouterData(), o = t ? .universal;
                    if (o) {
                        let t = ew.zv.formatUniversalUrl(o, e, l);
                        ew.zv.openHref(t, "_blank")
                    }
                }
                openWebWallet() {
                    let {
                        walletConnectUri: e
                    } = ew.OptionsCtrl.state, t = ew.zv.getWalletRouterData();
                    tf.setRecentWallet(t), e && this.onFormatAndRedirect(e)
                }
                render() {
                    let {
                        name: e,
                        id: t,
                        image_id: l
                    } = ew.zv.getWalletRouterData(), {
                        isMobile: o,
                        isDesktop: n
                    } = tf.getCachedRouterWalletPlatforms(), s = ew.zv.isMobile();
                    return J `<wcm-modal-header title="${e}" .onAction="${tf.handleUriCopy}" .actionIcon="${tt.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${if_defined_l(l)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isDesktop="${!s&&n}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${tt.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            r6.styles = [eX.globalCss, r3], Ge([state_t()], r6.prototype, "isError", 2), r6 = Ge([custom_element_e("wcm-web-connecting-view")], r6)
        }
    }
]);