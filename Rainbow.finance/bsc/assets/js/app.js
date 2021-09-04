function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
}

function _createClass(e, t, n) { return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e }
var Navigation = function() {
        function e() { _classCallCheck(this, e), this.init() }
        return _createClass(e, [{ key: "init", value: function() { return $(document).on("click", "#sidebarCollapse", function() { $("#sidebar").toggleClass("active") }), this } }]), e
    }(),
    app = null,
    App = function() {
        function e() { return _classCallCheck(this, e), app = this, this.init(), this }
        return _createClass(e, [{ key: "init", value: function() { return AOS.init({ once: !0 }), this.currentResult = null, this.navigation = new Navigation, $(document).on("click", ".vault-header", function(e) { var t = $(this).closest(".vault-container"); "<span" == e.target && t.toggleClass("collapsed"), t.toggleClass("collapsed") }), $(document).on("click", ".vault-header a", function(e) { e.stopPropagation() }), $(document).on("click", ".vault-header .vault-apy", function(e) { e.preventDefault() }), this.customSelect(), this.networkSelect(), this.initNumbers(), this.initThemes(), this } }, {
            key: "customSelect",
            value: function() {
                $(document).on("click", ".vault-select-wrapper", function() { $(".vault-select").toggleClass("open") }), $(document).on("click", ".custom-option", function(e) {
                    e.stopPropagation();
                    var t = $(this);
                    $(".vault-select").toggleClass("open"), $(".custom-option").removeClass("selected"), t.addClass("selected"), t.closest(".vault-select ").find(".vault-select__trigger span").html(t.html()), $("#sortBy").val(t.data("value")), $("#sortBy").trigger("change");
                    try { vm.changeSort(t.data("value")) } catch (e) { console.log(e) }
                })
            }
        }, {
            key: "networkSelect",
            value: function() {
                $(document).on("click", ".network-select-wrapper", function() { $(".network-select").toggleClass("open") }), $(document).on("click", ".network-custom-option", function(e) {
                    e.stopPropagation();
                    var t = $(this);
                    $(".network-select").toggleClass("open"), $(".network-custom-option").removeClass("selected"), t.addClass("selected"), t.closest(".network-select ").find(".network-select__trigger span").html(t.html()), $("#networkBy").val(t.data("value")), $("#networkBy").trigger("change");
                    try { vm.changeNetwork(t.data("value")) } catch (e) { console.log(e) }
                })
            }
        }, { key: "initNumbers", value: function() { $(document).ready(function() { $(".numeric").length && $(".numeric").autoNumeric("init", { dGroup: 0, aSep: "", mDec: 2, vMin: 0 }) }) } }, {
            key: "initThemes",
            value: function() {
                var e = "dark";
                void 0 === getCookie("theme_color") ? setCookie("theme_color", "dark", 360) : e = getCookie("theme_color"), $("body").removeClass("dark-theme light-theme"), $("body").addClass(e + "-theme"), $(document).on("click", ".switch-themes a", function(e) {
                    e.preventDefault(), $(".switch-themes a").removeClass("active");
                    var t = $(this);
                    t.addClass("active"), $("body").removeClass("dark-theme light-theme"), "dark" == t.data("type") && $("body").addClass("dark-theme"), setCookie("theme_color", t.data("type"), 360)
                })
            }
        }]), e
    }();

function setCookie(e, t, n) {
    var o = new Date;
    o.setDate(o.getDate() + n);
    var a = escape(t) + (null == n ? "" : "; expires=" + o.toUTCString());
    document.cookie = e + "=" + a
}

function getCookie(e) {
    var t, n, o, a = document.cookie.split(";");
    for (t = 0; t < a.length; t++)
        if (n = a[t].substr(0, a[t].indexOf("=")), o = a[t].substr(a[t].indexOf("=") + 1), (n = n.replace(/^\s+|\s+$/g, "")) == e) return unescape(o)
}
$(function() { new App });