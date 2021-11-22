/*! modernizr 3.2.0 (Custom Build) | MIT *
* http://modernizr.com/download/?-flexbox-flexboxtweener-setclasses-shiv !*/!function (e, t, n) { function r(e, t) { return typeof e === t } function o() { var e, t, n, o, a, i, s; for (var l in C) if (C.hasOwnProperty(l)) { if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase()); for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++)i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-")) } } function a(e) { var t = x.className, n = Modernizr._config.classPrefix || ""; if (b && (t = t.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)"); t = t.replace(r, "$1" + n + "js$2") } Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), b ? x.className.baseVal = t : x.className = t) } function i(e, t) { return !!~("" + e).indexOf(t) } function s() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : b ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) } function l(e) { return e.replace(/([a-z])-([a-z])/g, function (e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") } function c(e, t) { return function () { return e.apply(t, arguments) } } function f(e, t, n) { var o; for (var a in e) if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? c(o, n || t) : o); return !1 } function u(e) { return e.replace(/([A-Z])/g, function (e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") } function d() { var e = t.body; return e || (e = s(b ? "svg" : "body"), e.fake = !0), e } function p(e, n, r, o) { var a, i, l, c, f = "modernizr", u = s("div"), p = d(); if (parseInt(r, 10)) for (; r--;)l = s("div"), l.id = o ? o[r] : f + (r + 1), u.appendChild(l); return a = s("style"), a.type = "text/css", a.id = "s" + f, (p.fake ? p : u).appendChild(a), p.appendChild(u), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), u.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), i = n(u, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = c, x.offsetHeight) : u.parentNode.removeChild(u), !!i } function m(t, r) { var o = t.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)if (e.CSS.supports(u(t[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var a = []; o--;)a.push("(" + u(t[o]) + ":" + r + ")"); return a = a.join(" or "), p("@supports (" + a + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == getComputedStyle(e, null).position }) } return n } function h(e, t, o, a) { function c() { u && (delete j.style, delete j.modElem) } if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) { var f = m(e, o); if (!r(f, "undefined")) return f } for (var u, d, p, h, g, v = ["modernizr", "tspan"]; !j.style;)u = !0, j.modElem = s(v.shift()), j.style = j.modElem.style; for (p = e.length, d = 0; p > d; d++)if (h = e[d], g = j.style[h], i(h, "-") && (h = l(h)), j.style[h] !== n) { if (a || r(o, "undefined")) return c(), "pfx" == t ? h : !0; try { j.style[h] = o } catch (y) { } if (j.style[h] != g) return c(), "pfx" == t ? h : !0 } return c(), !1 } function g(e, t, n, o, a) { var i = e.charAt(0).toUpperCase() + e.slice(1), s = (e + " " + w.join(i + " ") + i).split(" "); return r(t, "string") || r(t, "undefined") ? h(s, t, o, a) : (s = (e + " " + _.join(i + " ") + i).split(" "), f(s, t, n)) } function v(e, t, r) { return g(e, n, n, t, r) } var y = [], C = [], E = { _version: "3.2.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, t) { var n = this; setTimeout(function () { t(n[e]) }, 0) }, addTest: function (e, t, n) { C.push({ name: e, fn: t, options: n }) }, addAsyncTest: function (e) { C.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = E, Modernizr = new Modernizr; var x = t.documentElement, b = "svg" === x.nodeName.toLowerCase(); b || !function (e, t) { function n(e, t) { var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement; return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild) } function r() { var e = C.elements; return "string" == typeof e ? e.split(" ") : e } function o(e, t) { var n = C.elements; "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, c(t) } function a(e) { var t = y[e[g]]; return t || (t = {}, v++, e[g] = v, y[v] = t), t } function i(e, n, r) { if (n || (n = t), u) return n.createElement(e); r || (r = a(n)); var o; return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o) } function s(e, n) { if (e || (e = t), u) return e.createDocumentFragment(); n = n || a(e); for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++)o.createElement(s[i]); return o } function l(e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) { return C.shivMethods ? i(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) { return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(C, t.frag) } function c(e) { e || (e = t); var r = a(e); return !C.shivCSS || f || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || l(e, r), e } var f, u, d = "3.7.3", p = e.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", v = 0, y = {}; !function () { try { var e = t.createElement("a"); e.innerHTML = "<xyz></xyz>", f = "hidden" in e, u = 1 == e.childNodes.length || function () { t.createElement("a"); var e = t.createDocumentFragment(); return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement }() } catch (n) { f = !0, u = !0 } }(); var C = { elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: d, shivCSS: p.shivCSS !== !1, supportsUnknownElements: u, shivMethods: p.shivMethods !== !1, type: "default", shivDocument: c, createElement: i, createDocumentFragment: s, addElements: o }; e.html5 = C, c(t), "object" == typeof module && module.exports && (module.exports = C) }("undefined" != typeof e ? e : this, t); var S = "Moz O ms Webkit", w = E._config.usePrefixes ? S.split(" ") : []; E._cssomPrefixes = w; var _ = E._config.usePrefixes ? S.toLowerCase().split(" ") : []; E._domPrefixes = _; var N = { elem: s("modernizr") }; Modernizr._q.push(function () { delete N.elem }); var j = { style: N.elem.style }; Modernizr._q.unshift(function () { delete j.style }), E.testAllProps = g, E.testAllProps = v, Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)), Modernizr.addTest("flexboxtweener", v("flexAlign", "end", !0)), o(), a(y), delete E.addTest, delete E.addAsyncTest; for (var T = 0; T < Modernizr._q.length; T++)Modernizr._q[T](); e.Modernizr = Modernizr }(window, document);