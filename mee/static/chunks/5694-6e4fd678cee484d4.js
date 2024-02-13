(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5694], {
        62389: function(e, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                    value: !0
                }),
                function(e, i) {
                    for (var a in i) Object.defineProperty(e, a, {
                        enumerable: !0,
                        get: i[a]
                    })
                }(i, {
                    requestIdleCallback: function() {
                        return a
                    },
                    cancelIdleCallback: function() {
                        return o
                    }
                });
            let a = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let i = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - i))
                            }
                        })
                    }, 1)
                },
                o = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
                value: !0
            }), Object.assign(i.default, i), e.exports = i.default)
        },
        31095: function(e, i, a) {
            "use strict";
            var o, r, t, n, s, b, l = a(2265);
            l && "object" == typeof l && "default" in l && l.default;
            var w = a(96565),
                d = new w,
                u = d.getBrowser(),
                c = d.getCPU(),
                m = d.getDevice(),
                p = d.getEngine(),
                f = d.getOS(),
                g = d.getUA(),
                h = {
                    Mobile: "mobile",
                    Tablet: "tablet",
                    SmartTv: "smarttv",
                    Console: "console",
                    Wearable: "wearable",
                    Embedded: "embedded",
                    Browser: void 0
                },
                v = {
                    Chrome: "Chrome",
                    Firefox: "Firefox",
                    Opera: "Opera",
                    Yandex: "Yandex",
                    Safari: "Safari",
                    InternetExplorer: "Internet Explorer",
                    Edge: "Edge",
                    Chromium: "Chromium",
                    Ie: "IE",
                    MobileSafari: "Mobile Safari",
                    MIUI: "MIUI Browser",
                    SamsungBrowser: "Samsung Browser"
                },
                setDefaults = function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                    return e || i
                },
                getNavigatorInstance = function() {
                    return !!("undefined" != typeof window && (window.navigator || navigator)) && (window.navigator || navigator)
                },
                isIOS13Check = function(e) {
                    var i = getNavigatorInstance();
                    return i && i.platform && (-1 !== i.platform.indexOf(e) || "MacIntel" === i.platform && i.maxTouchPoints > 1 && !window.MSStream)
                },
                isBrowserType = function(e) {
                    return e.type === h.Browser
                },
                isEdgeType = function(e) {
                    return e.name === v.Edge
                },
                isEdgeChromiumType = function(e) {
                    return "string" == typeof e && -1 !== e.indexOf("Edg/")
                },
                getIPad13 = function() {
                    return isIOS13Check("iPad")
                };
            m.type, h.SmartTv, m.type, h.Console, m.type, h.Wearable, m.type, h.Embedded, u.name === v.MobileSafari || getIPad13(), u.name, v.Chromium;
            var x = (o = m.type) === h.Mobile || o === h.Tablet || getIPad13(),
                k = (m.type, h.Mobile, m.type === h.Tablet || getIPad13(), isBrowserType(m), isBrowserType(m), f.name, f.name, "iOS" === f.name || getIPad13(), u.name, v.Chrome, u.name, v.Firefox, (r = u.name) === v.Safari || r === v.MobileSafari),
                y = (u.name, v.Opera, (t = u.name) === v.InternetExplorer || v.Ie, setDefaults(f.version), setDefaults(f.name), setDefaults(u.version), setDefaults(u.major), setDefaults(u.name));
            setDefaults(m.vendor), setDefaults(m.model), setDefaults(p.name), setDefaults(p.version), setDefaults(g), isEdgeType(u) || isEdgeChromiumType(g), u.name, v.Yandex, setDefaults(m.type, "browser"), (n = getNavigatorInstance()) && (/iPad|iPhone|iPod/.test(n.platform) || "MacIntel" === n.platform && n.maxTouchPoints > 1) && window.MSStream, getIPad13(), isIOS13Check("iPhone"), isIOS13Check("iPod"), "string" == typeof(b = (s = getNavigatorInstance()) && s.userAgent && s.userAgent.toLowerCase()) && /electron/.test(b), isEdgeChromiumType(g), isEdgeType(u) && isEdgeChromiumType(g), f.name, f.name, u.name, v.MIUI, u.name, v.SamsungBrowser, i.KC = y, i.tq = x, i.G6 = k
        },
        96565: function(e, i, a) {
            var o;
            ! function(r, t) {
                "use strict";
                var n = "function",
                    s = "undefined",
                    b = "object",
                    l = "string",
                    w = "major",
                    d = "model",
                    u = "name",
                    c = "type",
                    m = "vendor",
                    p = "version",
                    f = "architecture",
                    g = "console",
                    h = "mobile",
                    v = "tablet",
                    x = "smarttv",
                    k = "wearable",
                    y = "embedded",
                    S = "Amazon",
                    T = "Apple",
                    _ = "ASUS",
                    P = "BlackBerry",
                    C = "Browser",
                    I = "Chrome",
                    M = "Firefox",
                    A = "Google",
                    E = "Huawei",
                    U = "Microsoft",
                    z = "Motorola",
                    O = "Opera",
                    q = "Samsung",
                    N = "Sharp",
                    D = "Sony",
                    B = "Xiaomi",
                    j = "Zebra",
                    R = "Facebook",
                    V = "Chromium OS",
                    L = "Mac OS",
                    extend = function(e, i) {
                        var a = {};
                        for (var o in e) i[o] && i[o].length % 2 == 0 ? a[o] = i[o].concat(e[o]) : a[o] = e[o];
                        return a
                    },
                    enumerize = function(e) {
                        for (var i = {}, a = 0; a < e.length; a++) i[e[a].toUpperCase()] = e[a];
                        return i
                    },
                    has = function(e, i) {
                        return typeof e === l && -1 !== lowerize(i).indexOf(lowerize(e))
                    },
                    lowerize = function(e) {
                        return e.toLowerCase()
                    },
                    trim = function(e, i) {
                        if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof i === s ? e : e.substring(0, 500)
                    },
                    rgxMapper = function(e, i) {
                        for (var a, o, r, s, l, w, d = 0; d < i.length && !l;) {
                            var u = i[d],
                                c = i[d + 1];
                            for (a = o = 0; a < u.length && !l && u[a];)
                                if (l = u[a++].exec(e))
                                    for (r = 0; r < c.length; r++) w = l[++o], typeof(s = c[r]) === b && s.length > 0 ? 2 === s.length ? typeof s[1] == n ? this[s[0]] = s[1].call(this, w) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== n || s[1].exec && s[1].test ? this[s[0]] = w ? w.replace(s[1], s[2]) : t : this[s[0]] = w ? s[1].call(this, w, s[2]) : t : 4 === s.length && (this[s[0]] = w ? s[3].call(this, w.replace(s[1], s[2])) : t) : this[s] = w || t;
                            d += 2
                        }
                    },
                    strMapper = function(e, i) {
                        for (var a in i)
                            if (typeof i[a] === b && i[a].length > 0) {
                                for (var o = 0; o < i[a].length; o++)
                                    if (has(i[a][o], e)) return "?" === a ? t : a
                            } else if (has(i[a], e)) return "?" === a ? t : a;
                        return e
                    },
                    F = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    G = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [p, [u, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [p, [u, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [u, p],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [p, [u, O + " Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [p, [u, O]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [p, [u, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [u, p],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [p, [u, "UC" + C]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [p, [u, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [p, [u, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [p, [u, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [p, [u, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [p, [u, "Smart Lenovo " + C]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [u, /(.+)/, "$1 Secure " + C], p
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [p, [u, M + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [p, [u, O + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [p, [u, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [p, [u, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [p, [u, O + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [p, [u, "MIUI " + C]],
                            [/fxios\/([-\w\.]+)/i],
                            [p, [u, M]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [u, "360 " + C]
                            ],
                            [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                            [
                                [u, /(.+)/, "$1 " + C], p
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [p, [u, q + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [u, /_/g, " "], p
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [p, [u, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [u, "Sogou Mobile"], p
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [u, p],
                            [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [u],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [u, R], p
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [u, p],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [p, [u, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [p, [u, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [p, [u, I + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [u, I + " WebView"], p
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [p, [u, "Android " + C]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [u, p],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [p, [u, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [p, u],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [u, [p, strMapper, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [u, p],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [u, "Netscape"], p
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [p, [u, M + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                            [u, p],
                            [/(cobalt)\/([\w\.]+)/i],
                            [u, [p, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [f, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [f, lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [f, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [f, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [f, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [f, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [f, /ower/, "", lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [f, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [f, lowerize]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [d, [m, q],
                                [c, v]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [d, [m, q],
                                [c, h]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [d, [m, T],
                                [c, h]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [m, T],
                                [c, v]
                            ],
                            [/(macintosh);/i],
                            [d, [m, T]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [d, [m, N],
                                [c, h]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [d, [m, E],
                                [c, v]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [d, [m, E],
                                [c, h]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [m, B],
                                [c, h]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [m, B],
                                [c, v]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [d, [m, "OPPO"],
                                [c, h]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [d, [m, "Vivo"],
                                [c, h]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [d, [m, "Realme"],
                                [c, h]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [d, [m, z],
                                [c, h]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [d, [m, z],
                                [c, v]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [d, [m, "LG"],
                                [c, v]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [d, [m, "LG"],
                                [c, h]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [d, [m, "Lenovo"],
                                [c, v]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [d, /_/g, " "],
                                [m, "Nokia"],
                                [c, h]
                            ],
                            [/(pixel c)\b/i],
                            [d, [m, A],
                                [c, v]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [d, [m, A],
                                [c, h]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [m, D],
                                [c, h]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [m, D],
                                [c, v]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [d, [m, "OnePlus"],
                                [c, h]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [d, [m, S],
                                [c, v]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [d, /(.+)/g, "Fire Phone $1"],
                                [m, S],
                                [c, h]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [d, m, [c, v]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [d, [m, P],
                                [c, h]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [d, [m, _],
                                [c, v]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [d, [m, _],
                                [c, h]
                            ],
                            [/(nexus 9)/i],
                            [d, [m, "HTC"],
                                [c, v]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [m, [d, /_/g, " "],
                                [c, h]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [d, [m, "Acer"],
                                [c, v]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [d, [m, "Meizu"],
                                [c, h]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [d, [m, "Ulefone"],
                                [c, h]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [m, d, [c, h]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [m, d, [c, v]],
                            [/(surface duo)/i],
                            [d, [m, U],
                                [c, v]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [d, [m, "Fairphone"],
                                [c, h]
                            ],
                            [/(u304aa)/i],
                            [d, [m, "AT&T"],
                                [c, h]
                            ],
                            [/\bsie-(\w*)/i],
                            [d, [m, "Siemens"],
                                [c, h]
                            ],
                            [/\b(rct\w+) b/i],
                            [d, [m, "RCA"],
                                [c, v]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [d, [m, "Dell"],
                                [c, v]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [d, [m, "Verizon"],
                                [c, v]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [d, [m, "Barnes & Noble"],
                                [c, v]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [d, [m, "NuVision"],
                                [c, v]
                            ],
                            [/\b(k88) b/i],
                            [d, [m, "ZTE"],
                                [c, v]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [d, [m, "ZTE"],
                                [c, h]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [d, [m, "Swiss"],
                                [c, h]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [d, [m, "Swiss"],
                                [c, v]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [d, [m, "Zeki"],
                                [c, v]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [m, "Dragon Touch"], d, [c, v]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [d, [m, "Insignia"],
                                [c, v]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [d, [m, "NextBook"],
                                [c, v]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [m, "Voice"], d, [c, h]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [m, "LvTel"], d, [c, h]
                            ],
                            [/\b(ph-1) /i],
                            [d, [m, "Essential"],
                                [c, h]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [d, [m, "Envizen"],
                                [c, v]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [d, [m, "MachSpeed"],
                                [c, v]
                            ],
                            [/\btu_(1491) b/i],
                            [d, [m, "Rotor"],
                                [c, v]
                            ],
                            [/(shield[\w ]+) b/i],
                            [d, [m, "Nvidia"],
                                [c, v]
                            ],
                            [/(sprint) (\w+)/i],
                            [m, d, [c, h]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [m, U],
                                [c, h]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [m, j],
                                [c, v]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [m, j],
                                [c, h]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [m, [c, x]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [m, q],
                                [c, x]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [m, "LG"],
                                [c, x]
                            ],
                            [/(apple) ?tv/i],
                            [m, [d, T + " TV"],
                                [c, x]
                            ],
                            [/crkey/i],
                            [
                                [d, I + "cast"],
                                [m, A],
                                [c, x]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [d, [m, S],
                                [c, x]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [d, [m, N],
                                [c, x]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [d, [m, D],
                                [c, x]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [d, [m, B],
                                [c, x]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [m, d, [c, x]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [m, trim],
                                [d, trim],
                                [c, x]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [c, x]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [m, d, [c, g]],
                            [/droid.+; (shield) bui/i],
                            [d, [m, "Nvidia"],
                                [c, g]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [d, [m, D],
                                [c, g]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [d, [m, U],
                                [c, g]
                            ],
                            [/((pebble))app/i],
                            [m, d, [c, k]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [d, [m, T],
                                [c, k]
                            ],
                            [/droid.+; (glass) \d/i],
                            [d, [m, A],
                                [c, k]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [d, [m, j],
                                [c, k]
                            ],
                            [/(quest( 2| pro)?)/i],
                            [d, [m, R],
                                [c, k]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [m, [c, y]],
                            [/(aeobc)\b/i],
                            [d, [m, S],
                                [c, y]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [d, [c, h]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [d, [c, v]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [c, v]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [c, h]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [d, [m, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [p, [u, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [p, [u, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [u, p],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [p, u]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [u, p],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [u, [p, strMapper, F]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [p, strMapper, F],
                                [u, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [p, /_/g, "."],
                                [u, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [u, L],
                                [p, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [p, u],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [u, p],
                            [/\(bb(10);/i],
                            [p, [u, P]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [p, [u, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [p, [u, M + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [p, [u, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [p, [u, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [p, [u, I + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [u, V], p
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [u, p],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [u, "Solaris"], p
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [u, p]
                        ]
                    },
                    UAParser = function(e, i) {
                        if (typeof e === b && (i = e, e = t), !(this instanceof UAParser)) return new UAParser(e, i).getResult();
                        var a = typeof r !== s && r.navigator ? r.navigator : t,
                            o = e || (a && a.userAgent ? a.userAgent : ""),
                            g = a && a.userAgentData ? a.userAgentData : t,
                            x = i ? extend(G, i) : G,
                            k = a && a.userAgent == o;
                        return this.getBrowser = function() {
                            var e, i = {};
                            return i[u] = t, i[p] = t, rgxMapper.call(i, o, x.browser), i[w] = typeof(e = i[p]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : t, k && a && a.brave && typeof a.brave.isBrave == n && (i[u] = "Brave"), i
                        }, this.getCPU = function() {
                            var e = {};
                            return e[f] = t, rgxMapper.call(e, o, x.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[m] = t, e[d] = t, e[c] = t, rgxMapper.call(e, o, x.device), k && !e[c] && g && g.mobile && (e[c] = h), k && "Macintosh" == e[d] && a && typeof a.standalone !== s && a.maxTouchPoints && a.maxTouchPoints > 2 && (e[d] = "iPad", e[c] = v), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[u] = t, e[p] = t, rgxMapper.call(e, o, x.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[u] = t, e[p] = t, rgxMapper.call(e, o, x.os), k && !e[u] && g && "Unknown" != g.platform && (e[u] = g.platform.replace(/chrome os/i, V).replace(/macos/i, L)), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return o
                        }, this.setUA = function(e) {
                            return o = typeof e === l && e.length > 500 ? trim(e, 500) : e, this
                        }, this.setUA(o), this
                    };
                UAParser.VERSION = "1.0.37", UAParser.BROWSER = enumerize([u, p, w]), UAParser.CPU = enumerize([f]), UAParser.DEVICE = enumerize([d, m, c, g, h, x, v, k, y]), UAParser.ENGINE = UAParser.OS = enumerize([u, p]), typeof i !== s ? (e.exports && (i = e.exports = UAParser), i.UAParser = UAParser) : a.amdO ? t !== (o = (function() {
                    return UAParser
                }).call(i, a, i, e)) && (e.exports = o) : typeof r !== s && (r.UAParser = UAParser);
                var W = typeof r !== s && (r.jQuery || r.Zepto);
                if (W && !W.ua) {
                    var H = new UAParser;
                    W.ua = H.getResult(), W.ua.get = function() {
                        return H.getUA()
                    }, W.ua.set = function(e) {
                        H.setUA(e);
                        var i = H.getResult();
                        for (var a in i) W.ua[a] = i[a]
                    }
                }
            }("object" == typeof window ? window : this)
        }
    }
]);