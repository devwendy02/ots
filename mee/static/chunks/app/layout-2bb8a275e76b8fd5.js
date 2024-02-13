(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        35883: function() {},
        46601: function() {},
        57281: function(e, t, i) {
            Promise.resolve().then(i.bind(i, 9924))
        },
        9924: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return RootLayout
                }
            });
            var n = i(57437),
                s = i(71839),
                r = i.n(s),
                a = i(59205),
                o = i.n(a),
                l = i(45226),
                c = i.n(l);
            i(83343), i(18998), i(8780);
            var u = i(44441),
                d = i(54440),
                f = i.n(d),
                p = i(28811),
                g = i.n(p),
                h = i(24033),
                m = i(48475),
                x = i.n(m),
                w = i(2265),
                b = (0, w.memo)(function() {
                    return (0, n.jsx)("div", {
                        id: "bubble-wrapper",
                        className: "fixed left-0 top-0 z-0 w-screen overflow-hidden",
                        children: Array.from({
                            length: 20
                        }, (e, t) => (0, n.jsx)("div", {
                            className: "bubble-".concat(t + 1)
                        }, "bubble-".concat(t)))
                    })
                }),
                T = i(54844);

            function rgbKineticSlider(e) {
                let t, i, n, s, r, a, o, l, c;
                (e = e || {}).slideImages = e.hasOwnProperty("slideImages") ? e.slideImages : [], e.itemsTitles = e.hasOwnProperty("itemsTitles") ? e.itemsTitles : [], e.backgroundDisplacementSprite = e.hasOwnProperty("backgroundDisplacementSprite") ? e.backgroundDisplacementSprite : "", e.cursorDisplacementSprite = e.hasOwnProperty("cursorDisplacementSprite") ? e.cursorDisplacementSprite : "", e.cursorImgEffect = !e.hasOwnProperty("cursorImgEffect") || e.cursorImgEffect, e.cursorTextEffect = !e.hasOwnProperty("cursorTextEffect") || e.cursorTextEffect, e.cursorScaleIntensity = e.hasOwnProperty("cursorScaleIntensity") ? e.cursorScaleIntensity : .25, e.cursorMomentum = e.hasOwnProperty("cursorMomentum") ? e.cursorMomentum : .14, e.swipe = !e.hasOwnProperty("swipe") || e.swipe, e.swipeDistance = e.hasOwnProperty("swipeDistance") ? e.swipeDistance : 500, e.slideTransitionDuration = e.hasOwnProperty("slideTransitionDuration") ? e.slideTransitionDuration : 1, e.transitionScaleIntensity = e.hasOwnProperty("transitionScaleIntensity") ? e.transitionScaleIntensity : 40, e.transitionScaleAmplitude = e.hasOwnProperty("transitionScaleAmplitude") ? e.transitionScaleAmplitude : 300, e.swipeScaleIntensity = e.hasOwnProperty("swipeScaleIntensity") ? e.swipeScaleIntensity : .3, e.transitionSpriteRotation = e.hasOwnProperty("transitionSpriteRotation") ? e.transitionSpriteRotation : 0, e.nav = !e.hasOwnProperty("nav") || e.nav, e.textsRgbEffect = !e.hasOwnProperty("textsRgbEffect") || e.textsRgbEffect, e.imagesRgbEffect = !!e.hasOwnProperty("imagesRgbEffect") && e.imagesRgbEffect, e.textsSubTitleDisplay = !!e.hasOwnProperty("textsSubTitleDisplay") && e.textsSubTitleDisplay, e.textsDisplay = !!e.hasOwnProperty("textsDisplay") && e.textsDisplay, e.textsTiltEffect = !e.hasOwnProperty("textsTiltEffect") || e.textsTiltEffect, e.googleFonts = e.hasOwnProperty("googleFonts") ? e.googleFonts : ["Roboto:400"], e.buttonMode = !e.hasOwnProperty("buttonMode") || e.buttonMode, e.textTitleColor = e.hasOwnProperty("textTitleColor") ? e.textTitleColor : "white", e.textTitleSize = e.hasOwnProperty("textTitleSize") ? e.textTitleSize : 125, e.mobileTextTitleSize = e.hasOwnProperty("mobileTextTitleSize") ? e.mobileTextTitleSize : 45, e.textTitleLetterspacing = e.hasOwnProperty("textTitleLetterspacing") ? e.textTitleLetterspacing : 3, e.textSubTitleColor = e.hasOwnProperty("textSubTitleColor") ? e.textSubTitleColor : "white", e.textSubTitleSize = e.hasOwnProperty("textSubTitleSize") ? e.textSubTitleSize : 21, e.mobileTextSubTitleSize = e.hasOwnProperty("mobileTextSubTitleSize") ? e.mobileTextSubTitleSize : 14, e.textSubTitleLetterspacing = e.hasOwnProperty("textSubTitleLetterspacing") ? e.textSubTitleLetterspacing : 3, e.textSubTitleOffsetTop = e.hasOwnProperty("textSubTitleOffsetTop") ? e.textSubTitleOffsetTop : 120, e.mobileTextSubTitleOffsetTop = e.hasOwnProperty("mobileTextSubTitleOffsetTop") ? e.mobileTextSubTitleOffsetTop : 40, e.textsRgbIntensity = e.hasOwnProperty("textsRgbIntensity") ? e.textsRgbIntensity : .09, e.navTextsRgbIntensity = e.hasOwnProperty("navTextsRgbIntensity") ? e.navTextsRgbIntensity : 10, e.imagesRgbIntensity = e.hasOwnProperty("imagesRgbIntensity") ? e.imagesRgbIntensity : .9, e.navImagesRgbIntensity = e.hasOwnProperty("navImagesRgbIntensity") ? e.navImagesRgbIntensity : 100, PIXI.utils.skipHello();
                let u = new PIXI.autoDetectRenderer(1920, 1080, {
                        transparent: !0,
                        autoResize: !0,
                        resolution: devicePixelRatio
                    }),
                    d = document.getElementById("rgbKineticSlider"),
                    f = new PIXI.Container,
                    p = new PIXI.Container,
                    g = new PIXI.Container,
                    h = new PIXI.Container,
                    m = new PIXI.Container,
                    x = new PIXI.Sprite.from(e.backgroundDisplacementSprite),
                    w = new PIXI.filters.DisplacementFilter(x),
                    b = PIXI.Sprite.from(e.cursorDisplacementSprite),
                    T = new PIXI.filters.DisplacementFilter(b),
                    y = new PIXI.filters.RGBSplitFilter,
                    S = new PIXI.filters.RGBSplitFilter,
                    I = 0,
                    v = !1,
                    P = 0,
                    O = !1,
                    R = !1,
                    D = !1,
                    E = 0,
                    C = 0,
                    j = 0,
                    k = 0,
                    M = 0,
                    L = 0;

                function slideTransition(t) {
                    var r;
                    x.anchor.set(.5), x.x = u.view.width / 2, x.y = u.view.height / 2, window.timelineTransition = new TimelineMax({
                        onStart: function() {
                            O = !0, v = !1, x.rotation = 0
                        },
                        onComplete: function() {
                            !0 == e.textsRgbEffect && (y.red = [0, 0], y.green = [0, 0], y.blue = [0, 0]), !0 == e.imagesRgbEffect && (S.red = [0, 0], S.green = [0, 0], S.blue = [0, 0]), O = !1, v = !1, D = !0, I = t
                        },
                        onUpdate: function() {
                            x.rotation = e.transitionSpriteRotation, x.scale.set(timelineTransition.progress() * e.transitionScaleIntensity), !0 === D && (!0 == e.textsRgbEffect && (.5 > timelineTransition.progress() ? (y.red = [timelineTransition.progress() * e.navTextsRgbIntensity, 0], y.green = [0, 0], y.blue = [-timelineTransition.progress(), 0]) : (y.red = [-(e.navTextsRgbIntensity - timelineTransition.progress() * e.navTextsRgbIntensity), 0], y.green = [0, 0], y.blue = [e.navTextsRgbIntensity - timelineTransition.progress() * e.navTextsRgbIntensity, 0])), !0 == e.imagesRgbEffect && (.5 > timelineTransition.progress() ? (S.red = [-timelineTransition.progress() * e.navImagesRgbIntensity, 0], S.green = [0, 0], S.blue = [timelineTransition.progress(), 0]) : (S.red = [-(e.navImagesRgbIntensity - timelineTransition.progress() * e.navImagesRgbIntensity), 0], S.green = [0, 0], S.blue = [e.navImagesRgbIntensity - timelineTransition.progress() * e.navImagesRgbIntensity, 0])))
                        }
                    }), timelineTransition.clear(), timelineTransition.isActive() || (r = !1 === D ? 0 : e.transitionScaleAmplitude, !0 == e.textsSubTitleDisplay && !0 == e.textsDisplay && e.itemsTitles.length > 0 ? timelineTransition.to(w.scale, e.slideTransitionDuration, {
                        x: r,
                        y: r,
                        ease: Power2.easeIn
                    }).to([i[I], n[I], s[I]], e.slideTransitionDuration, {
                        alpha: 0,
                        ease: Power2.easeOut
                    }, .5 * e.slideTransitionDuration).to([i[t], n[t], s[t]], e.slideTransitionDuration, {
                        alpha: 1,
                        ease: Power2.easeOut
                    }, .5 * e.slideTransitionDuration).to(w.scale, e.slideTransitionDuration, {
                        x: 0,
                        y: 0,
                        ease: Power1.easeOut
                    }, e.slideTransitionDuration) : !1 == e.textsSubTitleDisplay && !0 == e.textsDisplay && e.itemsTitles.length > 0 ? timelineTransition.to(w.scale, e.slideTransitionDuration, {
                        x: r,
                        y: r,
                        ease: Power2.easeIn
                    }).to([i[I], n[I]], e.slideTransitionDuration, {
                        alpha: 0,
                        ease: Power2.easeOut
                    }, .5 * e.slideTransitionDuration).to([i[t], n[t]], e.slideTransitionDuration, {
                        alpha: 1,
                        ease: Power2.easeOut
                    }, .5 * e.slideTransitionDuration).to(w.scale, e.slideTransitionDuration, {
                        x: 0,
                        y: 0,
                        ease: Power1.easeOut
                    }, e.slideTransitionDuration) : timelineTransition.to(w.scale, e.slideTransitionDuration, {
                        x: r,
                        y: r,
                        ease: Power2.easeIn
                    }).to(i, e.slideTransitionDuration, {
                        alpha: 0,
                        ease: Power2.easeOut
                    }, .5 * e.slideTransitionDuration).to([i[t]], e.slideTransitionDuration, {
                        alpha: 1,
                        ease: Power2.easeOut
                    }, .5 * e.slideTransitionDuration).to(w.scale, e.slideTransitionDuration, {
                        x: 0,
                        y: 0,
                        ease: Power1.easeOut
                    }, e.slideTransitionDuration))
                }
                if ((l = document.createElement("script")).src = ("https:" === document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", l.type = "text/javascript", l.async = "true", (c = document.getElementsByTagName("script")[0]).parentNode.insertBefore(l, c), !0 == e.nav) {
                    let t = document.querySelectorAll(".main-nav");
                    for (let i = 0; i < t.length; i++) t[i].onclick = function(t) {
                        if (O) return !1;
                        let i = document.querySelector(".active");
                        return i && i.classList.remove("active"), this.classList.add("active"), "next" === this.getAttribute("data-nav") ? I >= 0 && I < e.slideImages.length - 1 ? slideTransition(I + 1) : slideTransition(0) : I > 0 && I < e.slideImages.length ? slideTransition(I - 1) : slideTransition(e.slideImages.length - 1), !1
                    }
                }
                window.WebFontConfig = {
                    google: {
                        families: e.googleFonts
                    },
                    active: function() {
                        imagesLoaded(e.slideImages, function() {
                            document.body.classList.remove("loading"),
                                function() {
                                    function resizeTexts() {
                                        window.innerWidth,
                                            function() {
                                                if (e.itemsTitles.length > 0 && !0 == e.textsDisplay) {
                                                    window.innerWidth < 768 ? (r = e.mobileTextTitleSize, a = e.mobileTextSubTitleSize, o = e.mobileTextSubTitleOffsetTop) : (r = e.textTitleSize, a = e.textSubTitleSize, o = e.textSubTitleOffsetTop);
                                                    for (let t = 0; t < e.itemsTitles.length; t++) {
                                                        let i, n = e.googleFonts[0].split(":")[0];
                                                        i = window.innerWidth < 768 ? 1.5 * window.innerWidth : window.innerWidth / 2;
                                                        let s = e.googleFonts[0].split(":").pop();
                                                        if ((textTitles = new PIXI.Text(e.itemsTitles[t][0], {
                                                                fontFamily: n,
                                                                fontSize: r,
                                                                fontWeight: s,
                                                                fill: e.textTitleColor,
                                                                align: "left",
                                                                padding: 0,
                                                                wordWrap: !0,
                                                                wordWrapWidth: i,
                                                                letterSpacing: e.textTitleLetterspacing
                                                            })).anchor.set(.5), textTitles.x = u.width / 2, textTitles.y = u.height / 2, h.addChild(textTitles), TweenMax.set(textTitles, {
                                                                alpha: 0
                                                            }), !0 == e.buttonMode) {
                                                            function onClick() {}
                                                            textTitles.interactive = !0, textTitles.buttonMode = !0, textTitles.on("pointerdown", onClick)
                                                        }
                                                    }
                                                    if (n = h.children, !0 == e.textsSubTitleDisplay) {
                                                        for (let t = 0; t < e.itemsTitles.length; t++) {
                                                            let i, n = e.googleFonts[1].split(":")[0],
                                                                s = e.googleFonts[1].split(":").pop();
                                                            i = window.innerWidth < 768 ? u.width / 1.5 : u.width / 2, (textTitles2 = new PIXI.Text(e.itemsTitles[t][1], {
                                                                fontFamily: n,
                                                                fontSize: a,
                                                                fontWeight: s,
                                                                fill: e.textSubTitleColor,
                                                                align: "left",
                                                                wordWrap: !0,
                                                                wordWrapWidth: i,
                                                                letterSpacing: e.textSubTitleLetterspacing
                                                            })).anchor.set(.5), textTitles2.x = textTitles.x, textTitles2.y = textTitles.y + o, m.addChild(textTitles2), TweenMax.set(textTitles2, {
                                                                alpha: 0
                                                            })
                                                        }
                                                        s = m.children
                                                    }
                                                }
                                            }(), u.render(f)
                                    }
                                    u.resize(1920, 1080), d.appendChild(u.view), f.filters = [w], p.interactive = !0, !0 == e.textsRgbEffect && (h.filters = [y], m.filters = [y], y.red = [0, 0], y.green = [0, 0], y.blue = [0, 0]), !0 == e.cursorTextEffect && (h.filters = [T, y], m.filters = [T, y]), !0 == e.imagesRgbEffect && !0 == e.cursorImgEffect ? (!0 == e.cursorImgEffect ? g.filters = [T, S] : g.filters = [S], S.red = [0, 0], S.green = [0, 0], S.blue = [0, 0]) : !0 == e.cursorImgEffect && (g.filters = [T]), x.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, w.autoFit = !1, w.padding = 0, b.anchor.set(.5), T.scale.x = 0, T.scale.y = 0, u.view.style.objectFit = "cover", u.view.style.width = "100%", u.view.style.height = "100%", p.addChild(g, h, m, b), f.addChild(p, x), (t = new PIXI.Ticker).autoStart = !0, t.add(function(e) {
                                            u.render(f)
                                        }),
                                        function() {
                                            for (let t = 0; t < e.slideImages.length; t++) {
                                                let i = new PIXI.Texture.from(e.slideImages[t]),
                                                    n = new PIXI.Sprite(i);
                                                n.anchor.set(.5), n.x = u.width / 2, n.y = u.height / 2, TweenMax.set(n, {
                                                    alpha: 0
                                                }), g.addChild(n)
                                            }
                                            i = g.children
                                        }(), resizeTexts(), window.addEventListener("mousemove", function(e) {
                                            E = e.clientX, C = e.clientY
                                        }), window.addEventListener("touchmove", function(e) {
                                            E = e.touches[0].clientX, C = e.touches[0].clientY
                                        }),
                                        function mainLoop() {
                                            var t, i, r;
                                            requestAnimationFrame(mainLoop), C <= 0 || E <= 0 || E >= window.innerWidth - 2 || C >= window.innerHeight - 2 ? (R = !1, E = j = window.innerWidth / 2, C = k = window.innerHeight / 2, M = L = window.newkineX = window.newkineY = 0) : R = !0, j += (E - j) * e.cursorMomentum, k += (C - k) * e.cursorMomentum, M = Math.floor(E - j), L = Math.floor(C - k), !0 == e.textsTiltEffect && (t = I, i = M, r = L, e.itemsTitles.length > 0 && !0 == e.textsDisplay && (TweenMax.to(n[t], 2, {
                                                x: u.width / 2 - .1 * i,
                                                y: u.height / 2 - .2 * r,
                                                ease: Expo.easeOut
                                            }), !0 == e.textsSubTitleDisplay && TweenMax.to(s[t], 2, {
                                                x: u.width / 2 - .25 * i,
                                                y: u.height / 2 + o - .2 * r,
                                                ease: Expo.easeOut
                                            }))), !0 === R && (b.x = j, b.y = k, TweenMax.to(T.scale, .5, {
                                                x: M * e.cursorScaleIntensity,
                                                y: L * e.cursorScaleIntensity,
                                                ease: Power4.easeOut
                                            })), O && (x.x = j, x.y = k), v && (x.x = j, x.y = k, w.x = j, w.y = k, w.scale.x = M * e.swipeScaleIntensity, w.scale.y = L * e.swipeScaleIntensity, !0 == e.textsRgbEffect && (y.red = [M * e.textsRgbIntensity, 0], y.green = [0, 0], y.blue = [-M * e.textsRgbIntensity, 0]), !0 == e.imagesRgbEffect && (S.red = [M * e.imagesRgbIntensity, 0], S.green = [0, 0], S.blue = [-M * e.imagesRgbIntensity, 0]))
                                        }(), !0 == e.swipe && p.on("pointerdown", function(t) {
                                            O || (this.data = t.data, P = this.data.getLocalPosition(this.parent), v = !0, !0 == e.textsRgbEffect && (y.red = [0, 0], y.green = [0, 0], y.blue = [0, 0]), !0 != e.imagesRgbEffect || (S.red = [0, 0], S.green = [0, 0], S.blue = [0, 0]))
                                        }).on("pointerup", function() {
                                            O || (!0 == e.textsRgbEffect && (y.red = [0, 0], y.green = [0, 0], y.blue = [0, 0]), !0 == e.imagesRgbEffect && (S.red = [0, 0], S.green = [0, 0], S.blue = [0, 0]), TweenMax.to(w.scale, .5, {
                                                x: 0,
                                                y: 0,
                                                ease: Power4.easeOut
                                            }), TweenMax.to(w, .5, {
                                                x: j,
                                                y: k,
                                                ease: Power4.easeOut
                                            }), this.data = null, v = !1)
                                        }).on("pointermove", function() {
                                            if (!O && v) {
                                                let t = this.data.getLocalPosition(this.parent);
                                                P.x - t.x < -e.swipeDistance && (I >= 0 && I < e.slideImages.length - 1 ? slideTransition(I + 1) : slideTransition(0)), P.x - t.x > e.swipeDistance && (I > 0 && I < e.slideImages.length ? slideTransition(I - 1) : slideTransition(e.slideImages.length - 1))
                                            }
                                        }), slideTransition(I), window.addEventListener("resize", resizeTexts)
                                }()
                        })
                    }
                }
            }

            function LiquidBackground() {
                let e = (0, T.Z)(),
                    t = !!(0, h.useSearchParams)().get("tgWebAppStartParam"),
                    i = !e || t;
                (0, w.useEffect)(() => {
                    i && setTimeout(() => {
                        new rgbKineticSlider({
                            slideImages: ["".concat(window.location.origin, "/bg-image.jpg")],
                            backgroundDisplacementSprite: "https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                            cursorDisplacementSprite: "https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                            cursorImgEffect: !0,
                            cursorTextEffect: !1,
                            cursorScaleIntensity: .1,
                            cursorMomentum: .013,
                            swipe: !0,
                            swipeDistance: .4 * window.innerWidth,
                            swipeScaleIntensity: 2,
                            slideTransitionDuration: 1,
                            transitionScaleIntensity: 30,
                            transitionScaleAmplitude: 160,
                            nav: !1,
                            imagesRgbEffect: !1,
                            imagesRgbIntensity: .9,
                            navImagesRgbIntensity: 80
                        })
                    }, 200)
                }, [i]);
                let s = (0, h.usePathname)();
                return i && (0, n.jsx)("div", {
                    id: "rgbKineticSlider",
                    className: f()("fixed inset-0 h-screen w-screen overflow-hidden", "/" === s && "opacity-50")
                })
            }
            var y = i(28035),
                S = i(70682);

            function MoonlightJellies() {
                let [e, t] = (0, w.useState)(), {
                    entered: i,
                    setEntered: s,
                    musicPaused: r,
                    setMusicPaused: a,
                    splineReady: o
                } = (0, w.useContext)(S.H);
                (0, w.useEffect)(() => {
                    e && i && (e.volume = .2, !r && e.paused && e.play(), r && e.pause())
                }, [e, i, r]);
                let l = (0, h.usePathname)(),
                    c = "/" === l,
                    u = (0, T.Z)();
                return u ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("audio", {
                        src: "/moonlightJellies.mp3",
                        loop: !0,
                        ref: t,
                        onPlay: () => a(!1),
                        onPause: () => a(!0)
                    }), (0, n.jsx)("button", {
                        className: f()("fixed bottom-10 z-40 cursor-pointer transition-all duration-2000 before:absolute before:inset-0 before:rounded-full before:bg-blue-300 before:bg-opacity-20 md:bottom-24", !r && i && "before:animate-ping", i ? "right-3 translate-x-0 translate-y-0 md:right-12" : "right-1/2 translate-x-1/2", !i && !c && "translate-y-[1000px]", !o && c && "pointer-events-none", !c && "md:hidden"),
                        onClick: i ? () => {
                            e.paused ? e.play() : e.pause()
                        } : () => {
                            s(!0)
                        },
                        children: (0, n.jsx)("div", {
                            className: f()("transition-all", o && "hover:scale-105"),
                            children: (0, n.jsxs)("div", {
                                className: f()("relative box-content flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-200 bg-opacity-50 font-comforta text-2xl transition-box hover:shadow-lg", i ? "h-5 w-5 p-3 md:h-8 md:w-8" : "h-24 w-72", i && r ? "bg-blue-gray-400 text-gray-400" : "text-white", c && "duration-4000"),
                                style: {
                                    willChange: "height, width"
                                },
                                children: [c && (0, n.jsx)("span", {
                                    className: f()("absolute left-1/2 top-1/2 w-72 -translate-y-1/2 transition-all duration-1500 will-change-transform", i ? "translate-x-0 opacity-0" : "-translate-x-1/2 opacity-100"),
                                    children: o ? "Enter the Sea" : "Loading..."
                                }), (0, n.jsx)(y.Z, {
                                    className: f()(i ? "h-5 w-5 opacity-100 md:h-8 md:w-8" : "h-0 w-0 opacity-0", "transition-all duration-1000")
                                })]
                            })
                        })
                    })]
                })
            }
            var I = i(87415),
                v = "0.10.5",
                P = i(74118),
                O = i(56358),
                R = i(25787);
            let D = new P.f({
                uri: "https://gateway-arbitrum.network.thegraph.com/api/7f81cd50d63ae64a578abbf60dcb4248/subgraphs/id/8a6wnwVV4rQ6SwByUsPpyfBqH1FVC1FR865EvUA7khfC",
                cache: new O.h({
                    resultCaching: !1
                })
            });

            function GraphProvider(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(R.e, {
                    client: D,
                    children: t
                })
            }
            var E = i(28316),
                C = i(71497),
                j = i(82134),
                k = i(31185),
                M = i(34065),
                L = i(51360);

            function DexProvider(e) {
                let {
                    children: t
                } = e, [i, s] = (0, w.useState)([k.B]), {
                    ethUsd: r
                } = (0, w.useContext)(M.F);
                (0, w.useEffect)(() => {
                    1 === i.length && fetch("https://extendedtokens-uniswap-org.ipns.dweb.link").then(e => e.json()).then(e => {
                        let {
                            tokens: t
                        } = e;
                        s(e => e.concat(t))
                    })
                }, [i.length]);
                let [a, o] = (0, w.useState)([]), [l, c] = (0, w.useState)({}), u = (0, w.useCallback)(async e => {
                    let {
                        symbol: t,
                        address: i,
                        decimals: n
                    } = e, s = "https://api.dexscreener.com/latest/dex/tokens/".concat(i), a = "https://coins.llama.fi/prices/current/ethereum:".concat(i);
                    try {
                        ! function(e) {
                            if (["0xdac17f958d2ee523a2206206994597c13d831ec7"].includes(e.toLowerCase())) throw Error("Short circuit")
                        }(i);
                        let e = await fetch(s);
                        if (e.ok) {
                            let t = await e.json(),
                                i = t.pairs.filter(e => {
                                    var t;
                                    return !!(null === (t = e.liquidity) || void 0 === t ? void 0 : t.usd) && ["ETH", "USD"].some(t => e.quoteToken.symbol.includes(t))
                                });
                            if (i.length > 0) {
                                let e = i.reduce((e, t) => t.liquidity.usd > e.liquidity.usd ? t : e, i[0]),
                                    t = e.baseToken,
                                    n = e.priceNative / (e.quoteToken.symbol.includes("USD") ? r : 1);
                                return console.table({
                                    price: n,
                                    baseToken: e.baseToken,
                                    price: e.priceNative
                                }), {
                                    token: t,
                                    price: n
                                }
                            }
                        }
                    } catch (e) {
                        "Short circuit" !== e && console.error("Dexscreener call failed: ".concat(e))
                    }
                    try {
                        let e = await fetch(a);
                        if (e.ok) {
                            let t = await e.json(),
                                n = "ethereum:".concat(i),
                                s = t.coins[n];
                            s.address = i;
                            let a = s.price / r;
                            return {
                                token: s,
                                price: a
                            }
                        }
                    } catch (e) {
                        console.error("DefiLlama call failed: ".concat(e))
                    }
                    return {
                        token: {
                            address: i,
                            symbol: t,
                            decimals: n
                        },
                        price: null
                    }
                }, [r]);
                (0, w.useEffect)(() => {
                    let fetchPrices = async () => {
                        let e = {},
                            t = await Promise.allSettled(a.map(u)).then(e => e.filter(e => "fulfilled" === e.status).map(e => e.value));
                        for (let {
                                token: i,
                                price: n
                            } of t) i && (e[i.address.toLowerCase()] = n);
                        c(t => ({ ...t,
                            ...e
                        }))
                    };
                    fetchPrices();
                    let e = setInterval(fetchPrices, 3e4);
                    return () => {
                        clearInterval(e)
                    }
                }, [a, u]);
                let d = (0, w.useCallback)(e => {
                        (e = [].concat(e).filter(Boolean)).length && o(t => {
                            let i = [...new Set(t.map(e => e.address.toLowerCase()))],
                                n = e.filter(e => !i.includes(e.address.toLowerCase()));
                            return t.concat(n)
                        })
                    }, []),
                    f = (0, w.useCallback)(e => {
                        (e = [].concat(e).filter(Boolean)).length && (o(t => t.filter(t => e.some(e => e.address.toLowerCase() !== t.address.toLowerCase()))), c(t => {
                            let i = { ...t
                            };
                            return e.forEach(e => {
                                delete i[e.address.toLowerCase()]
                            }), i
                        }))
                    }, []);
                return (0, n.jsx)(L.M.Provider, {
                    value: {
                        uniswapLabsVerifiedTokens: i,
                        tokenPrices: l,
                        addTokensToFetch: d,
                        removeTokensToFetch: f,
                        setTokensToFetch: o
                    },
                    children: t
                })
            }
            new C.D(j.a_.MAINNET, "C3BHzcbwRa5S3ix8tmTjno-ZQV1MC8lF");
            var B = i(26029),
                N = i(82256),
                z = i(91527),
                F = i(26266),
                W = i(14484),
                X = i(89390),
                _ = i(9253);
            let {
                chains: A,
                publicClient: H
            } = (0, W.QB)([F.RJ], [(0, X.G)({
                apiKey: "C3BHzcbwRa5S3ix8tmTjno-ZQV1MC8lF"
            }), (0, _.I)()]);

            function RKProvider(e) {
                let {
                    children: t
                } = e, i = (0, T.Z)(), s = (0, z.useMediaQuery)({
                    minWidth: 768
                }), [r, a] = (0, w.useState)(!1);
                (0, w.useEffect)(() => {
                    a(s)
                }, [s]);
                let o = (0, B.$)({
                    fontStack: "system",
                    overlayBlur: i ? "large" : "small"
                });
                return (0, n.jsx)(N.pj, {
                    coolMode: !0,
                    chains: A,
                    theme: { ...o,
                        shadows: { ...o.shadows,
                            dialog: "0px 0px 0px 0px rgba(0, 0, 0, 0)"
                        },
                        colors: { ...o.colors,
                            modalBackground: "#00000033",
                            modalBackdrop: r ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.5)"
                        },
                        fonts: {
                            body: ""
                        }
                    },
                    children: t
                })
            }
            var q = i(27472),
                U = i(56926);
            let {
                connectors: G
            } = (0, q.wo)({
                appName: "OTSea",
                projectId: "de95771050180e7024e11a8550bd6d52",
                chains: A
            }), Z = (0, U._g)({
                autoConnect: !0,
                connectors: G,
                publicClient: H
            });

            function WagmiProvider(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(U.eM, {
                    config: Z,
                    children: t
                })
            }

            function Providers(e) {
                let {
                    children: t
                } = e, [i, s] = (0, w.useState)(!1), [r, a] = (0, w.useState)(!1), [o, l] = (0, w.useState)(!1), [c, u] = (0, w.useState)();
                (0, w.useEffect)(() => {
                    let e = localStorage.getItem("v");
                    e !== v ? (console.log("New OTSea client version. Clearing storage."), localStorage.clear(), localStorage.setItem("v", v), u(v)) : u(e)
                }, [c]);
                let d = "/" === (0, h.usePathname)();
                return (0, w.useEffect)(() => {
                    console.table({
                        isLanding: d
                    }), d || (a(!0), l(!0))
                }, []), (0, w.useEffect)(() => {
                    d && (r ? document.body.style.removeProperty("overflow") : document.body.style.overflow = "hidden")
                }, [r, d]), (0, n.jsx)(S.H.Provider, {
                    value: {
                        entered: r,
                        setEntered: a,
                        musicPaused: o,
                        setMusicPaused: l,
                        splineReady: i,
                        setSplineReady: s
                    },
                    children: (0, n.jsx)(E.Z, {
                        children: (0, n.jsx)(DexProvider, {
                            children: (0, n.jsx)(GraphProvider, {
                                children: (0, n.jsx)(WagmiProvider, {
                                    children: (0, n.jsxs)(RKProvider, {
                                        children: [t, (0, n.jsx)(I.Ix, {
                                            position: I.Am.POSITION.BOTTOM_RIGHT,
                                            theme: "dark"
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })
            }
            let K = g()(() => Promise.all([i.e(4590), i.e(8293), i.e(2279), i.e(939), i.e(391), i.e(1396), i.e(3258), i.e(2722)]).then(i.bind(i, 52722)), {
                loadableGenerated: {
                    webpack: () => [52722]
                },
                ssr: !1
            });

            function RootLayout(e) {
                let {
                    children: t
                } = e;
                (0, w.useEffect)(() => {
                    (null === this || void 0 === this ? void 0 : this.location.href.includes("dev.otsea")) || (console.log = () => {}, console.table = () => {})
                }, []), console.table({
                    env: "production"
                });
                let i = (0, h.usePathname)(),
                    s = "/" !== i,
                    a = (0, h.useSearchParams)(),
                    l = (0, T.Z)() && (a.get("theme") || "icon"),
                    [d, p] = (0, w.useState)(""),
                    [g, m] = (0, w.useState)(!0);
                (0, w.useEffect)(() => {
                    window.location.href.includes("dev.otsea") && fetch("/api/authorize", {
                        method: "POST",
                        body: JSON.stringify({
                            _: localStorage.getItem("_")
                        })
                    }).then(e => {
                        e.ok || window.location.assign("https://otsea.io")
                    })
                }, []);
                let [y, S] = (0, w.useState)(0);
                return (0, n.jsx)("html", {
                    lang: "en",
                    className: "scrollbar-none",
                    children: (0, n.jsxs)("body", {
                        className: f()(r().className, r().variable, o().className, o().variable, c().variable),
                        "data-pathname": i,
                        ...l && {
                            "data-minimarket-theme": l
                        },
                        children: [(0, n.jsx)(x(), {
                            onLoad: () => {
                                S(e => ++e)
                            },
                            src: "/libs/imagesLoaded.pkgd.min.js"
                        }), y > 0 && (0, n.jsx)(x(), {
                            onLoad: () => {
                                S(e => ++e)
                            },
                            src: "/libs/pixi.min.js"
                        }), y > 1 && (0, n.jsx)(x(), {
                            onLoad: () => {
                                S(e => ++e)
                            },
                            src: "/libs/pixi-filters.min.js"
                        }), y > 2 && (0, n.jsx)(x(), {
                            onLoad: () => {
                                S(e => ++e)
                            },
                            src: "/libs/TweenMax.min.js"
                        }), y > 3 && (0, n.jsx)(LiquidBackground, {}), (0, n.jsx)(b, {}), (0, n.jsx)(u.c, {}), !s || s && g ? (0, n.jsxs)(Providers, {
                            children: [(0, n.jsx)(MoonlightJellies, {}), (0, n.jsx)(K, {
                                children: t
                            })]
                        }) : (0, n.jsx)("div", {
                            className: "flex h-screen flex-col items-center justify-center",
                            children: (0, n.jsx)("h1", {
                                className: "my-4 animate-pulse font-comforta text-2xl font-bold text-white",
                                children: "Upgrade in progress. Be back soon"
                            })
                        })]
                    })
                })
            }
        },
        31185: function(e, t, i) {
            "use strict";
            i.d(t, {
                B: function() {
                    return s
                }
            });
            var n = i(33948);
            let s = {
                name: "OTSea",
                symbol: "OTSEA",
                address: n.L,
                thumb: "https://otsea.io/otsea-erc20-thumb.jpg",
                balance: 0,
                decimals: 18
            }
        },
        34065: function(e, t, i) {
            "use strict";
            i.d(t, {
                F: function() {
                    return s
                }
            });
            var n = i(2265);
            let s = (0, n.createContext)()
        },
        51360: function(e, t, i) {
            "use strict";
            i.d(t, {
                M: function() {
                    return s
                }
            });
            var n = i(2265);
            let s = (0, n.createContext)({})
        },
        70682: function(e, t, i) {
            "use strict";
            i.d(t, {
                H: function() {
                    return s
                }
            });
            var n = i(2265);
            let s = (0, n.createContext)({})
        },
        54844: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return useIsMiniMarket
                }
            });
            var n = i(24033);

            function useIsMiniMarket() {
                return (0, n.usePathname)().includes("mini-market")
            }
        },
        28316: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return Coingecko
                },
                x: function() {
                    return CoingeckoClient
                }
            });
            var n = i(72007),
                s = i(14894),
                r = i(94863),
                a = i(57437),
                o = i(92173),
                l = i(2265),
                c = i(34065),
                u = new WeakMap;
            let CoingeckoClient = class CoingeckoClient {
                ethUsd() {
                    return (0, n._)(this, u).get("simple/price?ids=ethereum&vs_currencies=usd")
                }
                coinById(e) {
                    return (0, n._)(this, u).get("coins/".concat(e))
                }
                coinByAddress(e) {
                    return (0, n._)(this, u).get("coins/1/contract/".concat(e))
                }
                search(e) {
                    return (0, n._)(this, u).get("search?query=".concat(e))
                }
                get(e) {
                    return (0, n._)(this, u).get(e)
                }
                constructor() {
                    (0, s._)(this, u, {
                        writable: !0,
                        value: void 0
                    }), (0, r._)(this, u, o.Z.create({
                        baseURL: "https://api.coingecko.com/api/v3/"
                    })), (0, n._)(this, u).interceptors.response.use(e => e, e => {
                        var t;
                        let {
                            config: i
                        } = e;
                        return i.baseURL.includes("api.coingecko") && (null === (t = e.response) || void 0 === t ? void 0 : t.status) !== 404 ? (i.baseURL = "/api/", i.url = "cg?path=".concat(encodeURIComponent(i.url)), (0, n._)(this, u).request(i)) : Promise.reject(e)
                    })
                }
            };
            let d = new CoingeckoClient;

            function Coingecko(e) {
                let {
                    children: t
                } = e, [i, n] = (0, l.useState)(0);
                return (0, l.useEffect)(() => {
                    let e;
                    return (async () => {
                        let {
                            data: t
                        } = await d.ethUsd();
                        n(t.ethereum.usd), e = setInterval(async () => {
                            let {
                                data: e
                            } = await d.ethUsd();
                            n(e.ethereum.usd)
                        }, 3e4)
                    })(), () => clearInterval(e)
                }, []), (0, a.jsx)(c.F.Provider, {
                    value: {
                        ethUsd: i,
                        ethToUsd: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            return Number(Number(e * i).toFixed(t)).toLocaleString()
                        }
                    },
                    children: t
                })
            }
        },
        18998: function() {},
        33948: function(e) {
            "use strict";
            e.exports = JSON.parse('{"L":"0x5dA151B95657e788076D04d56234Bd93e409CB09"}')
        }
    },
    function(e) {
        e.O(0, [7830, 728, 1108, 6926, 7562, 7401, 7133, 7357, 6985, 7488, 2134, 4776, 2971, 2472, 1744], function() {
            return e(e.s = 57281)
        }), _N_E = e.O()
    }
]);