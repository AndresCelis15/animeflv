!function (t) { t.fn.percircle = function (a) { var r = { animate: !0 }; a || (a = {}), t.extend(a, r); var e = 3.6; return this.each(function () { var r = t(this); r.hasClass("percircle") || r.addClass("percircle"), "undefined" != typeof r.attr("data-animate") && (a.animate = "true" == r.attr("data-animate")), a.animate && r.addClass("animate"); var s = r.attr("data-percent") || a.percent || 0, o = r.attr("data-perclock") || a.perclock || 0; if (o) { r.hasClass("perclock") || r.addClass("perclock"); var n = function (t) { return 10 > t ? "0" + t : t }; setInterval(function () { var a = new Date, e = n(a.getHours()) + ":" + n(a.getMinutes()) + ":" + n(a.getSeconds()); r.html("<span>" + e + "</span>"), t('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(r); var s = a.getSeconds(); 0 === s && r.removeClass("gt50"), s > 30 && (r.addClass("gt50"), t(".bar", r).css({ "-webkit-transform": "rotate(180deg)", "-moz-transform": "rotate(180deg)", "-ms-transform": "rotate(180deg)", "-o-transform": "rotate(180deg)", transform: "rotate(180deg)" })); var o = 6 * s; t(".bar", r).css({ "-webkit-transform": "rotate(" + o + "deg)", "-moz-transform": "rotate(" + o + "deg)", "-ms-transform": "rotate(" + o + "deg)", "-o-transform": "rotate(" + o + "deg)", transform: "rotate(" + o + "deg)" }) }, 1e3) } else { s > 50 && r.addClass("gt50"); var d = r.attr("data-text") || a.text || s + ""; t("<span>" + d + "</span>").appendTo(r), t('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(r), s > 50 && t(".bar", r).css({ "-webkit-transform": "rotate(180deg)", "-moz-transform": "rotate(180deg)", "-ms-transform": "rotate(180deg)", "-o-transform": "rotate(180deg)", transform: "rotate(180deg)" }); var i = e * s; setTimeout(function () { t(".bar", r).css({ "-webkit-transform": "rotate(" + i + "deg)", "-moz-transform": "rotate(" + i + "deg)", "-ms-transform": "rotate(" + i + "deg)", "-o-transform": "rotate(" + i + "deg)", transform: "rotate(" + i + "deg)" }) }, 0) } }) } }(jQuery);