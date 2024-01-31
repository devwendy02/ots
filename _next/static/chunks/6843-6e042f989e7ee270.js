"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6843], {
        59762: function(r, e, t) {
            t.d(e, {
                W: function() {
                    return clsx
                }
            });

            function clsx(...r) {
                for (var e, t, o = 0, n = ""; o < r.length;)(e = r[o++]) && (t = function toVal(r) {
                    var e, t, o = "";
                    if ("string" == typeof r || "number" == typeof r) o += r;
                    else if ("object" == typeof r) {
                        if (Array.isArray(r))
                            for (e = 0; e < r.length; e++) r[e] && (t = toVal(r[e])) && (o && (o += " "), o += t);
                        else
                            for (e in r) r[e] && (o && (o += " "), o += e)
                    }
                    return o
                }(e)) && (n && (n += " "), n += t);
                return n
            }
        },
        48794: function(r, e, t) {
            t.d(e, {
                PB: function() {
                    return dataAttr
                }
            });
            var dataAttr = r => r ? "true" : void 0
        },
        34480: function(r, e, t) {
            t.d(e, {
                Gp: function() {
                    return forwardRef
                },
                oe: function() {
                    return mapPropsVariants
                }
            });
            var o = t(2265);

            function forwardRef(r) {
                return (0, o.forwardRef)(r)
            }
            var mapPropsVariants = (r, e, t = !0) => {
                if (!e) return [r, {}];
                let o = e.reduce((e, t) => t in r ? { ...e,
                    [t]: r[t]
                } : e, {});
                if (!t) return [r, o]; {
                    let t = Object.keys(r).filter(r => !e.includes(r)).reduce((e, t) => ({ ...e,
                        [t]: r[t]
                    }), {});
                    return [t, o]
                }
            }
        },
        68037: function(r, e, t) {
            t.d(e, {
                tv: function() {
                    return tv
                }
            });
            var o = ["0", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl", "1", "2", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"].map(r => `unit-${r}`),
                a = r => "boolean" == typeof r ? `${r}` : 0 === r ? "0" : r,
                chunk_T24HS5CV_l = r => !r || "object" != typeof r || 0 === Object.keys(r).length,
                u = (r, e) => JSON.stringify(r) === JSON.stringify(e);

            function y(r) {
                let e = [];
                return function i(r, e) {
                    r.forEach(function(r) {
                        Array.isArray(r) ? i(r, e) : e.push(r)
                    })
                }(r, e), e
            }
            var chunk_T24HS5CV_g = (...r) => y(r).filter(Boolean),
                p = (r, e) => {
                    let t = {},
                        o = Object.keys(r),
                        n = Object.keys(e);
                    for (let l of o)
                        if (n.includes(l)) {
                            let o = r[l],
                                n = e[l];
                            "object" == typeof o && "object" == typeof n ? t[l] = p(o, n) : t[l] = n + " " + o
                        } else t[l] = r[l];
                    for (let r of n) o.includes(r) || (t[r] = e[r]);
                    return t
                },
                k = r => r && "string" == typeof r ? r.replace(/\s+/g, " ").trim() : r,
                n = /^\[(.+)\]$/;

            function getPart(r, e) {
                var t = r;
                return e.split("-").forEach(function(r) {
                    t.nextPart.has(r) || t.nextPart.set(r, {
                        nextPart: new Map,
                        validators: []
                    }), t = t.nextPart.get(r)
                }), t
            }
            var l = /\s+/;

            function twJoin() {
                for (var r, e, t = 0, o = ""; t < arguments.length;)(r = arguments[t++]) && (e = function toValue(r) {
                    if ("string" == typeof r) return r;
                    for (var e, t = "", o = 0; o < r.length; o++) r[o] && (e = toValue(r[o])) && (t && (t += " "), t += e);
                    return t
                }(r)) && (o && (o += " "), o += e);
                return o
            }

            function createTailwindMerge() {
                for (var r, e, t, o = arguments.length, s = Array(o), c = 0; c < o; c++) s[c] = arguments[c];
                var functionToCall = function(o) {
                    var l = s[0];
                    return e = (r = function(r) {
                        var e, t, o, l, s, c, d, f, b, g, m;
                        return {
                            cache: function(r) {
                                if (r < 1) return {
                                    get: function() {},
                                    set: function() {}
                                };
                                var e = 0,
                                    t = new Map,
                                    o = new Map;

                                function update(n, l) {
                                    t.set(n, l), ++e > r && (e = 0, o = t, t = new Map)
                                }
                                return {
                                    get: function(r) {
                                        var e = t.get(r);
                                        return void 0 !== e ? e : void 0 !== (e = o.get(r)) ? (update(r, e), e) : void 0
                                    },
                                    set: function(r, e) {
                                        t.has(r) ? t.set(r, e) : update(r, e)
                                    }
                                }
                            }(r.cacheSize),
                            splitModifiers: (t = 1 === (e = r.separator || ":").length, o = e[0], l = e.length, function(r) {
                                for (var n, s = [], c = 0, d = 0, f = 0; f < r.length; f++) {
                                    var b = r[f];
                                    if (0 === c) {
                                        if (b === o && (t || r.slice(f, f + l) === e)) {
                                            s.push(r.slice(d, f)), d = f + l;
                                            continue
                                        }
                                        if ("/" === b) {
                                            n = f;
                                            continue
                                        }
                                    }
                                    "[" === b ? c++ : "]" === b && c--
                                }
                                var g = 0 === s.length ? r : r.substring(d),
                                    m = g.startsWith("!"),
                                    h = m ? g.substring(1) : g;
                                return {
                                    modifiers: s,
                                    hasImportantModifier: m,
                                    baseClassName: h,
                                    maybePostfixModifierPosition: n && n > d ? n - d : void 0
                                }
                            }),
                            ...(f = r.theme, b = r.prefix, g = {
                                nextPart: new Map,
                                validators: []
                            }, (m = Object.entries(r.classGroups), b ? m.map(function(r) {
                                return [r[0], r[1].map(function(r) {
                                    return "string" == typeof r ? b + r : "object" == typeof r ? Object.fromEntries(Object.entries(r).map(function(r) {
                                        return [b + r[0], r[1]]
                                    })) : r
                                })]
                            }) : m).forEach(function(r) {
                                var e = r[0];
                                (function processClassesRecursively(r, e, t, o) {
                                    r.forEach(function(r) {
                                        if ("string" == typeof r) {
                                            ("" === r ? e : getPart(e, r)).classGroupId = t;
                                            return
                                        }
                                        if ("function" == typeof r) {
                                            if (r.isThemeGetter) {
                                                processClassesRecursively(r(o), e, t, o);
                                                return
                                            }
                                            e.validators.push({
                                                validator: r,
                                                classGroupId: t
                                            });
                                            return
                                        }
                                        Object.entries(r).forEach(function(r) {
                                            var n = r[0];
                                            processClassesRecursively(r[1], getPart(e, n), t, o)
                                        })
                                    })
                                })(r[1], g, e, f)
                            }), s = r.conflictingClassGroups, d = void 0 === (c = r.conflictingClassGroupModifiers) ? {} : c, {
                                getClassGroupId: function(r) {
                                    var e = r.split("-");
                                    return "" === e[0] && 1 !== e.length && e.shift(),
                                        function getGroupRecursive(r, e) {
                                            if (0 === r.length) return e.classGroupId;
                                            var t = r[0],
                                                o = e.nextPart.get(t),
                                                n = o ? getGroupRecursive(r.slice(1), o) : void 0;
                                            if (n) return n;
                                            if (0 !== e.validators.length) {
                                                var l = r.join("-");
                                                return e.validators.find(function(r) {
                                                    return (0, r.validator)(l)
                                                }) ? .classGroupId
                                            }
                                        }(e, g) || function(r) {
                                            if (n.test(r)) {
                                                var e = n.exec(r)[1],
                                                    t = e ? .substring(0, e.indexOf(":"));
                                                if (t) return "arbitrary.." + t
                                            }
                                        }(r)
                                },
                                getConflictingClassGroupIds: function(r, e) {
                                    var t = s[r] || [];
                                    return e && d[r] ? [].concat(t, d[r]) : t
                                }
                            })
                        }
                    }(s.slice(1).reduce(function(r, e) {
                        return e(r)
                    }, l()))).cache.get, t = r.cache.set, functionToCall = tailwindMerge, tailwindMerge(o)
                };

                function tailwindMerge(o) {
                    var n, s, c, d, f, b = e(o);
                    if (b) return b;
                    var g = (s = (n = r).splitModifiers, c = n.getClassGroupId, d = n.getConflictingClassGroupIds, f = new Set, o.trim().split(l).map(function(r) {
                        var e = s(r),
                            t = e.modifiers,
                            o = e.hasImportantModifier,
                            n = e.baseClassName,
                            l = e.maybePostfixModifierPosition,
                            d = c(l ? n.substring(0, l) : n),
                            f = !!l;
                        if (!d) {
                            if (!l || !(d = c(n))) return {
                                isTailwindClass: !1,
                                originalClassName: r
                            };
                            f = !1
                        }
                        var b = (function(r) {
                            if (r.length <= 1) return r;
                            var e = [],
                                t = [];
                            return r.forEach(function(r) {
                                "[" === r[0] ? (e.push.apply(e, t.sort().concat([r])), t = []) : t.push(r)
                            }), e.push.apply(e, t.sort()), e
                        })(t).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: o ? b + "!" : b,
                            classGroupId: d,
                            originalClassName: r,
                            hasPostfixModifier: f
                        }
                    }).reverse().filter(function(r) {
                        if (!r.isTailwindClass) return !0;
                        var e = r.modifierId,
                            t = r.classGroupId,
                            o = r.hasPostfixModifier,
                            n = e + t;
                        return !f.has(n) && (f.add(n), d(t, o).forEach(function(r) {
                            return f.add(e + r)
                        }), !0)
                    }).reverse().map(function(r) {
                        return r.originalClassName
                    }).join(" "));
                    return t(o, g), g
                }
                return function() {
                    return functionToCall(twJoin.apply(null, arguments))
                }
            }

            function fromTheme(r) {
                var themeGetter = function(e) {
                    return e[r] || []
                };
                return themeGetter.isThemeGetter = !0, themeGetter
            }
            var s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                d = new Set(["px", "full", "screen"]),
                f = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                b = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                g = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

            function isLength(r) {
                return isNumber(r) || d.has(r) || c.test(r) || isArbitraryLength(r)
            }

            function isArbitraryLength(r) {
                return getIsArbitraryValue(r, "length", isLengthOnly)
            }

            function isArbitrarySize(r) {
                return getIsArbitraryValue(r, "size", isNever)
            }

            function isArbitraryPosition(r) {
                return getIsArbitraryValue(r, "position", isNever)
            }

            function isArbitraryUrl(r) {
                return getIsArbitraryValue(r, "url", isUrl)
            }

            function isArbitraryNumber(r) {
                return getIsArbitraryValue(r, "number", isNumber)
            }

            function isNumber(r) {
                return !Number.isNaN(Number(r))
            }

            function isPercent(r) {
                return r.endsWith("%") && isNumber(r.slice(0, -1))
            }

            function isInteger(r) {
                return isIntegerOnly(r) || getIsArbitraryValue(r, "number", isIntegerOnly)
            }

            function isArbitraryValue(r) {
                return s.test(r)
            }

            function isAny() {
                return !0
            }

            function isTshirtSize(r) {
                return f.test(r)
            }

            function isArbitraryShadow(r) {
                return getIsArbitraryValue(r, "", isShadow)
            }

            function getIsArbitraryValue(r, e, t) {
                var o = s.exec(r);
                return !!o && (o[1] ? o[1] === e : t(o[2]))
            }

            function isLengthOnly(r) {
                return b.test(r)
            }

            function isNever() {
                return !1
            }

            function isUrl(r) {
                return r.startsWith("url(")
            }

            function isIntegerOnly(r) {
                return Number.isInteger(Number(r))
            }

            function isShadow(r) {
                return g.test(r)
            }

            function getDefaultConfig() {
                var r = fromTheme("colors"),
                    e = fromTheme("spacing"),
                    t = fromTheme("blur"),
                    o = fromTheme("brightness"),
                    n = fromTheme("borderColor"),
                    l = fromTheme("borderRadius"),
                    s = fromTheme("borderSpacing"),
                    c = fromTheme("borderWidth"),
                    d = fromTheme("contrast"),
                    f = fromTheme("grayscale"),
                    b = fromTheme("hueRotate"),
                    g = fromTheme("invert"),
                    m = fromTheme("gap"),
                    h = fromTheme("gradientColorStops"),
                    A = fromTheme("gradientColorStopPositions"),
                    x = fromTheme("inset"),
                    V = fromTheme("margin"),
                    S = fromTheme("opacity"),
                    T = fromTheme("padding"),
                    C = fromTheme("saturate"),
                    N = fromTheme("scale"),
                    z = fromTheme("sepia"),
                    _ = fromTheme("skew"),
                    M = fromTheme("space"),
                    O = fromTheme("translate"),
                    getOverscroll = function() {
                        return ["auto", "contain", "none"]
                    },
                    getOverflow = function() {
                        return ["auto", "hidden", "clip", "visible", "scroll"]
                    },
                    getSpacingWithAutoAndArbitrary = function() {
                        return ["auto", isArbitraryValue, e]
                    },
                    getSpacingWithArbitrary = function() {
                        return [isArbitraryValue, e]
                    },
                    getLengthWithEmpty = function() {
                        return ["", isLength]
                    },
                    getNumberWithAutoAndArbitrary = function() {
                        return ["auto", isNumber, isArbitraryValue]
                    },
                    getPositions = function() {
                        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
                    },
                    getLineStyles = function() {
                        return ["solid", "dashed", "dotted", "double", "none"]
                    },
                    getBlendModes = function() {
                        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                    },
                    getAlign = function() {
                        return ["start", "end", "center", "between", "around", "evenly", "stretch"]
                    },
                    getZeroAndEmpty = function() {
                        return ["", "0", isArbitraryValue]
                    },
                    getBreaks = function() {
                        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                    },
                    getNumber = function() {
                        return [isNumber, isArbitraryNumber]
                    },
                    getNumberAndArbitrary = function() {
                        return [isNumber, isArbitraryValue]
                    };
                return {
                    cacheSize: 500,
                    theme: {
                        colors: [isAny],
                        spacing: [isLength],
                        blur: ["none", "", isTshirtSize, isArbitraryValue],
                        brightness: getNumber(),
                        borderColor: [r],
                        borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
                        borderSpacing: getSpacingWithArbitrary(),
                        borderWidth: getLengthWithEmpty(),
                        contrast: getNumber(),
                        grayscale: getZeroAndEmpty(),
                        hueRotate: getNumberAndArbitrary(),
                        invert: getZeroAndEmpty(),
                        gap: getSpacingWithArbitrary(),
                        gradientColorStops: [r],
                        gradientColorStopPositions: [isPercent, isArbitraryLength],
                        inset: getSpacingWithAutoAndArbitrary(),
                        margin: getSpacingWithAutoAndArbitrary(),
                        opacity: getNumber(),
                        padding: getSpacingWithArbitrary(),
                        saturate: getNumber(),
                        scale: getNumber(),
                        sepia: getZeroAndEmpty(),
                        skew: getNumberAndArbitrary(),
                        space: getSpacingWithArbitrary(),
                        translate: getSpacingWithArbitrary()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", isArbitraryValue]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [isTshirtSize]
                        }],
                        "break-after": [{
                            "break-after": getBreaks()
                        }],
                        "break-before": [{
                            "break-before": getBreaks()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [].concat(getPositions(), [isArbitraryValue])
                        }],
                        overflow: [{
                            overflow: getOverflow()
                        }],
                        "overflow-x": [{
                            "overflow-x": getOverflow()
                        }],
                        "overflow-y": [{
                            "overflow-y": getOverflow()
                        }],
                        overscroll: [{
                            overscroll: getOverscroll()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": getOverscroll()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": getOverscroll()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [x]
                        }],
                        "inset-x": [{
                            "inset-x": [x]
                        }],
                        "inset-y": [{
                            "inset-y": [x]
                        }],
                        start: [{
                            start: [x]
                        }],
                        end: [{
                            end: [x]
                        }],
                        top: [{
                            top: [x]
                        }],
                        right: [{
                            right: [x]
                        }],
                        bottom: [{
                            bottom: [x]
                        }],
                        left: [{
                            left: [x]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", isInteger]
                        }],
                        basis: [{
                            basis: getSpacingWithAutoAndArbitrary()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", isArbitraryValue]
                        }],
                        grow: [{
                            grow: getZeroAndEmpty()
                        }],
                        shrink: [{
                            shrink: getZeroAndEmpty()
                        }],
                        order: [{
                            order: ["first", "last", "none", isInteger]
                        }],
                        "grid-cols": [{
                            "grid-cols": [isAny]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", isInteger]
                            }, isArbitraryValue]
                        }],
                        "col-start": [{
                            "col-start": getNumberWithAutoAndArbitrary()
                        }],
                        "col-end": [{
                            "col-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-rows": [{
                            "grid-rows": [isAny]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [isInteger]
                            }, isArbitraryValue]
                        }],
                        "row-start": [{
                            "row-start": getNumberWithAutoAndArbitrary()
                        }],
                        "row-end": [{
                            "row-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        gap: [{
                            gap: [m]
                        }],
                        "gap-x": [{
                            "gap-x": [m]
                        }],
                        "gap-y": [{
                            "gap-y": [m]
                        }],
                        "justify-content": [{
                            justify: ["normal"].concat(getAlign())
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal"].concat(getAlign(), ["baseline"])
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [].concat(getAlign(), ["baseline"])
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [T]
                        }],
                        px: [{
                            px: [T]
                        }],
                        py: [{
                            py: [T]
                        }],
                        ps: [{
                            ps: [T]
                        }],
                        pe: [{
                            pe: [T]
                        }],
                        pt: [{
                            pt: [T]
                        }],
                        pr: [{
                            pr: [T]
                        }],
                        pb: [{
                            pb: [T]
                        }],
                        pl: [{
                            pl: [T]
                        }],
                        m: [{
                            m: [V]
                        }],
                        mx: [{
                            mx: [V]
                        }],
                        my: [{
                            my: [V]
                        }],
                        ms: [{
                            ms: [V]
                        }],
                        me: [{
                            me: [V]
                        }],
                        mt: [{
                            mt: [V]
                        }],
                        mr: [{
                            mr: [V]
                        }],
                        mb: [{
                            mb: [V]
                        }],
                        ml: [{
                            ml: [V]
                        }],
                        "space-x": [{
                            "space-x": [M]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [M]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", isArbitraryValue, e]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [isTshirtSize]
                            }, isTshirtSize, isArbitraryValue]
                        }],
                        h: [{
                            h: [isArbitraryValue, e, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
                        }],
                        "max-h": [{
                            "max-h": [isArbitraryValue, e, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", isTshirtSize, isArbitraryLength]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
                        }],
                        "font-family": [{
                            font: [isAny]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", isNumber, isArbitraryNumber]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
                        }],
                        "list-image": [{
                            "list-image": ["none", isArbitraryValue]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", isArbitraryValue]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [r]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [S]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [r]
                        }],
                        "text-opacity": [{
                            "text-opacity": [S]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [].concat(getLineStyles(), ["wavy"])
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", isLength]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", isArbitraryValue, isLength]
                        }],
                        "text-decoration-color": [{
                            decoration: [r]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: getSpacingWithArbitrary()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", isArbitraryValue]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [S]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [].concat(getPositions(), [isArbitraryPosition])
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", isArbitrarySize]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, isArbitraryUrl]
                        }],
                        "bg-color": [{
                            bg: [r]
                        }],
                        "gradient-from-pos": [{
                            from: [A]
                        }],
                        "gradient-via-pos": [{
                            via: [A]
                        }],
                        "gradient-to-pos": [{
                            to: [A]
                        }],
                        "gradient-from": [{
                            from: [h]
                        }],
                        "gradient-via": [{
                            via: [h]
                        }],
                        "gradient-to": [{
                            to: [h]
                        }],
                        rounded: [{
                            rounded: [l]
                        }],
                        "rounded-s": [{
                            "rounded-s": [l]
                        }],
                        "rounded-e": [{
                            "rounded-e": [l]
                        }],
                        "rounded-t": [{
                            "rounded-t": [l]
                        }],
                        "rounded-r": [{
                            "rounded-r": [l]
                        }],
                        "rounded-b": [{
                            "rounded-b": [l]
                        }],
                        "rounded-l": [{
                            "rounded-l": [l]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [l]
                        }],
                        "rounded-se": [{
                            "rounded-se": [l]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [l]
                        }],
                        "rounded-es": [{
                            "rounded-es": [l]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [l]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [l]
                        }],
                        "rounded-br": [{
                            "rounded-br": [l]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [l]
                        }],
                        "border-w": [{
                            border: [c]
                        }],
                        "border-w-x": [{
                            "border-x": [c]
                        }],
                        "border-w-y": [{
                            "border-y": [c]
                        }],
                        "border-w-s": [{
                            "border-s": [c]
                        }],
                        "border-w-e": [{
                            "border-e": [c]
                        }],
                        "border-w-t": [{
                            "border-t": [c]
                        }],
                        "border-w-r": [{
                            "border-r": [c]
                        }],
                        "border-w-b": [{
                            "border-b": [c]
                        }],
                        "border-w-l": [{
                            "border-l": [c]
                        }],
                        "border-opacity": [{
                            "border-opacity": [S]
                        }],
                        "border-style": [{
                            border: [].concat(getLineStyles(), ["hidden"])
                        }],
                        "divide-x": [{
                            "divide-x": [c]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [c]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [S]
                        }],
                        "divide-style": [{
                            divide: getLineStyles()
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: [""].concat(getLineStyles())
                        }],
                        "outline-offset": [{
                            "outline-offset": [isArbitraryValue, isLength]
                        }],
                        "outline-w": [{
                            outline: [isLength]
                        }],
                        "outline-color": [{
                            outline: [r]
                        }],
                        "ring-w": [{
                            ring: getLengthWithEmpty()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [r]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [S]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [isLength]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [r]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
                        }],
                        "shadow-color": [{
                            shadow: [isAny]
                        }],
                        opacity: [{
                            opacity: [S]
                        }],
                        "mix-blend": [{
                            "mix-blend": getBlendModes()
                        }],
                        "bg-blend": [{
                            "bg-blend": getBlendModes()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [t]
                        }],
                        brightness: [{
                            brightness: [o]
                        }],
                        contrast: [{
                            contrast: [d]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
                        }],
                        grayscale: [{
                            grayscale: [f]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [b]
                        }],
                        invert: [{
                            invert: [g]
                        }],
                        saturate: [{
                            saturate: [C]
                        }],
                        sepia: [{
                            sepia: [z]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [t]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [o]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [d]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [f]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [b]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [g]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [S]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [C]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [z]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [s]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [s]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [s]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
                        }],
                        duration: [{
                            duration: getNumberAndArbitrary()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", isArbitraryValue]
                        }],
                        delay: [{
                            delay: getNumberAndArbitrary()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [N]
                        }],
                        "scale-x": [{
                            "scale-x": [N]
                        }],
                        "scale-y": [{
                            "scale-y": [N]
                        }],
                        rotate: [{
                            rotate: [isInteger, isArbitraryValue]
                        }],
                        "translate-x": [{
                            "translate-x": [O]
                        }],
                        "translate-y": [{
                            "translate-y": [O]
                        }],
                        "skew-x": [{
                            "skew-x": [_]
                        }],
                        "skew-y": [{
                            "skew-y": [_]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
                        }],
                        accent: [{
                            accent: ["auto", r]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
                        }],
                        "caret-color": [{
                            caret: [r]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": getSpacingWithArbitrary()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": getSpacingWithArbitrary()
                        }],
                        "scroll-my": [{
                            "scroll-my": getSpacingWithArbitrary()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": getSpacingWithArbitrary()
                        }],
                        "scroll-me": [{
                            "scroll-me": getSpacingWithArbitrary()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": getSpacingWithArbitrary()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": getSpacingWithArbitrary()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": getSpacingWithArbitrary()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": getSpacingWithArbitrary()
                        }],
                        "scroll-p": [{
                            "scroll-p": getSpacingWithArbitrary()
                        }],
                        "scroll-px": [{
                            "scroll-px": getSpacingWithArbitrary()
                        }],
                        "scroll-py": [{
                            "scroll-py": getSpacingWithArbitrary()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": getSpacingWithArbitrary()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": getSpacingWithArbitrary()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": getSpacingWithArbitrary()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": getSpacingWithArbitrary()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": getSpacingWithArbitrary()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": getSpacingWithArbitrary()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "pinch-zoom", "manipulation", {
                                pan: ["x", "left", "right", "y", "up", "down"]
                            }]
                        }],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
                        }],
                        fill: [{
                            fill: [r, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [isLength, isArbitraryNumber]
                        }],
                        stroke: [{
                            stroke: [r, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            }
            var m = createTailwindMerge(getDefaultConfig),
                h = Object.prototype.hasOwnProperty,
                A = new Set(["string", "number", "boolean"]),
                x = {
                    twMerge: !0,
                    twMergeConfig: {},
                    responsiveVariants: !1
                },
                Z = r => r || void 0,
                j = (...r) => Z(y(r).filter(Boolean).join(" ")),
                V = null,
                S = {},
                T = !1,
                w = (...r) => e => e.twMerge ? ((!V || T) && (T = !1, V = chunk_T24HS5CV_l(S) ? m : function(r) {
                    for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) t[o - 1] = arguments[o];
                    return "function" == typeof r ? createTailwindMerge.apply(void 0, [getDefaultConfig, r].concat(t)) : createTailwindMerge.apply(void 0, [function() {
                        return function(r, e) {
                            for (var t in e)(function mergePropertyRecursively(r, e, t) {
                                if (!h.call(r, e) || A.has(typeof t) || null === t) {
                                    r[e] = t;
                                    return
                                }
                                if (Array.isArray(t) && Array.isArray(r[e])) {
                                    r[e] = r[e].concat(t);
                                    return
                                }
                                if ("object" == typeof t && "object" == typeof r[e]) {
                                    if (null === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    for (var o in t) mergePropertyRecursively(r[e], o, t[o])
                                }
                            })(r, t, e[t]);
                            return r
                        }(getDefaultConfig(), r)
                    }].concat(t))
                }(S)), Z(V(j(r)))) : j(r),
                Y = (r, e) => {
                    for (let t in e) r.hasOwnProperty(t) ? r[t] = j(r[t], e[t]) : r[t] = e[t];
                    return r
                },
                se = (r, e) => {
                    let {
                        extend: t = null,
                        slots: o = {},
                        variants: n = {},
                        compoundVariants: l = [],
                        compoundSlots: s = [],
                        defaultVariants: c = {}
                    } = r, d = { ...x,
                        ...e
                    }, f = null != t && t.base ? j(t.base, null == r ? void 0 : r.base) : null == r ? void 0 : r.base, b = null != t && t.variants && !chunk_T24HS5CV_l(t.variants) ? p(n, t.variants) : n, g = null != t && t.defaultVariants && !chunk_T24HS5CV_l(t.defaultVariants) ? { ...t.defaultVariants,
                        ...c
                    } : c;
                    chunk_T24HS5CV_l(d.twMergeConfig) || u(d.twMergeConfig, S) || (T = !0, S = d.twMergeConfig);
                    let m = chunk_T24HS5CV_l(o) ? {} : {
                            base: null == r ? void 0 : r.base,
                            ...o
                        },
                        h = chunk_T24HS5CV_l(null == t ? void 0 : t.slots) ? m : Y({ ...null == t ? void 0 : t.slots
                        }, chunk_T24HS5CV_l(m) ? {
                            base: null == r ? void 0 : r.base
                        } : m),
                        v = r => {
                            if (chunk_T24HS5CV_l(b) && chunk_T24HS5CV_l(o) && chunk_T24HS5CV_l(null == t ? void 0 : t.slots)) return w(f, null == r ? void 0 : r.class, null == r ? void 0 : r.className)(d);
                            if (l && !Array.isArray(l)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof l}`);
                            if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
                            let K = (r, e, t = [], o) => {
                                    let n = t;
                                    if ("string" == typeof e) n = n.concat(k(e).split(" ").map(e => `${r}:${e}`));
                                    else if (Array.isArray(e)) n = n.concat(e.reduce((e, t) => e.concat(`${r}:${t}`), []));
                                    else if ("object" == typeof e && "string" == typeof o) {
                                        for (let t in e)
                                            if (e.hasOwnProperty(t) && t === o) {
                                                let l = e[t];
                                                if (l && "string" == typeof l) {
                                                    let e = k(l);
                                                    n[o] ? n[o] = n[o].concat(e.split(" ").map(e => `${r}:${e}`)) : n[o] = e.split(" ").map(e => `${r}:${e}`)
                                                } else Array.isArray(l) && l.length > 0 && (n[o] = l.reduce((e, t) => e.concat(`${r}:${t}`), []))
                                            }
                                    }
                                    return n
                                },
                                W = (e, t = b, o = null, n = null) => {
                                    var l;
                                    let s = t[e];
                                    if (!s || chunk_T24HS5CV_l(s)) return null;
                                    let c = null != (l = null == n ? void 0 : n[e]) ? l : null == r ? void 0 : r[e];
                                    if (null === c) return null;
                                    let f = a(c),
                                        m = Array.isArray(d.responsiveVariants) && d.responsiveVariants.length > 0 || !0 === d.responsiveVariants,
                                        h = null == g ? void 0 : g[e],
                                        A = [];
                                    if ("object" == typeof f && m)
                                        for (let [r, e] of Object.entries(f)) {
                                            let t = s[e];
                                            if ("initial" === r) {
                                                h = e;
                                                continue
                                            }
                                            Array.isArray(d.responsiveVariants) && !d.responsiveVariants.includes(r) || (A = K(r, t, A, o))
                                        }
                                    let x = s[f] || s[a(h)];
                                    return "object" == typeof A && "string" == typeof o && A[o] ? Y(A, x) : A.length > 0 ? (A.push(x), A) : x
                                },
                                P = (r, e) => {
                                    if (!b || "object" != typeof b) return null;
                                    let t = [];
                                    for (let o in b) {
                                        let n = W(o, b, r, e),
                                            l = "base" === r && "string" == typeof n ? n : n && n[r];
                                        l && (t[t.length] = l)
                                    }
                                    return t
                                },
                                e = {};
                            for (let t in r) void 0 !== r[t] && (e[t] = r[t]);
                            let D = (t, o) => {
                                    var n;
                                    let l = "object" == typeof(null == r ? void 0 : r[t]) ? {
                                        [t]: null == (n = r[t]) ? void 0 : n.initial
                                    } : {};
                                    return { ...g,
                                        ...e,
                                        ...l,
                                        ...o
                                    }
                                },
                                G = (r = [], e) => {
                                    let t = [];
                                    for (let {
                                            class: o,
                                            className: n,
                                            ...l
                                        } of r) {
                                        let r = !0;
                                        for (let [t, o] of Object.entries(l)) {
                                            let n = D(t, e);
                                            if (Array.isArray(o)) {
                                                if (!o.includes(n[t])) {
                                                    r = !1;
                                                    break
                                                }
                                            } else if (n[t] !== o) {
                                                r = !1;
                                                break
                                            }
                                        }
                                        r && (o && t.push(o), n && t.push(n))
                                    }
                                    return t
                                },
                                H = r => {
                                    let e = G(l, r);
                                    return chunk_T24HS5CV_g(G(null == t ? void 0 : t.compoundVariants, r), e)
                                },
                                p = r => {
                                    let e = H(r);
                                    if (!Array.isArray(e)) return e;
                                    let t = {};
                                    for (let r of e)
                                        if ("string" == typeof r && (t.base = w(t.base, r)(d)), "object" == typeof r)
                                            for (let [e, o] of Object.entries(r)) t[e] = w(t[e], o)(d);
                                    return t
                                },
                                ee = r => {
                                    if (s.length < 1) return null;
                                    let e = {};
                                    for (let {
                                            slots: t = [],
                                            class: o,
                                            className: n,
                                            ...l
                                        } of s) {
                                        if (!chunk_T24HS5CV_l(l)) {
                                            let e = !0;
                                            for (let t of Object.keys(l)) {
                                                let o = D(t, r)[t];
                                                if (void 0 === o || (Array.isArray(l[t]) ? !l[t].includes(o) : l[t] !== o)) {
                                                    e = !1;
                                                    break
                                                }
                                            }
                                            if (!e) continue
                                        }
                                        for (let r of t) e[r] = e[r] || [], e[r].push([o, n])
                                    }
                                    return e
                                };
                            if (!chunk_T24HS5CV_l(o) || !chunk_T24HS5CV_l(null == t ? void 0 : t.slots)) {
                                let r = {};
                                if ("object" == typeof h && !chunk_T24HS5CV_l(h))
                                    for (let e of Object.keys(h)) r[e] = r => {
                                        var t, o;
                                        return w(h[e], P(e, r), (null != (t = p(r)) ? t : [])[e], (null != (o = ee(r)) ? o : [])[e], null == r ? void 0 : r.class, null == r ? void 0 : r.className)(d)
                                    };
                                return r
                            }
                            return w(f, b ? Object.keys(b).map(r => W(r, b)) : null, H(), null == r ? void 0 : r.class, null == r ? void 0 : r.className)(d)
                        };
                    return v.variantKeys = (() => {
                        if (!(!b || "object" != typeof b)) return Object.keys(b)
                    })(), v.extend = t, v.base = f, v.slots = h, v.variants = b, v.defaultVariants = g, v.compoundSlots = s, v.compoundVariants = l, v
                },
                C = ["small", "medium", "large"],
                tv = (r, e) => {
                    var t, n, l;
                    return se(r, { ...e,
                        twMerge: null == (t = null == e ? void 0 : e.twMerge) || t,
                        twMergeConfig: { ...null == e ? void 0 : e.twMergeConfig,
                            theme: { ...null == (n = null == e ? void 0 : e.twMergeConfig) ? void 0 : n.theme,
                                opacity: ["disabled"],
                                spacing: ["divider", "unit", ...o],
                                borderWidth: C,
                                borderRadius: C
                            },
                            classGroups: { ...null == (l = null == e ? void 0 : e.twMergeConfig) ? void 0 : l.classGroups,
                                shadow: [{
                                    shadow: C
                                }],
                                "font-size": [{
                                    text: ["tiny", ...C]
                                }],
                                "bg-image": ["bg-stripe-gradient"],
                                "min-w": [{
                                    "min-w": ["unit", ...o]
                                }],
                                "min-h": [{
                                    "min-h": ["unit", ...o]
                                }]
                            }
                        }
                    })
                }
        }
    }
]);