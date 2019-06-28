/**
 * mango-for-chrome - v0.5.5
 * vapour at 2017.07.21 11:59
 */
angular.module("mango", ["mg.bootstrap.alert"]).config(["$httpProvider", function (a) {
    a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    var b = function (a) {
        var c, d, e, f, g, h, i, j = "";
        for (c in a) if (d = a[c], d instanceof Array) for (i = 0; i < d.length; ++i) g = d[i],
        e = c + "[" + i + "]",
        h = {},
        h[e] = g,
        j += b(h) + "&";
        else if (d instanceof Object) for (f in d) g = d[f],
        e = c + "[" + f + "]",
        h = {},
        h[e] = g,
        j += b(h) + "&";
        else void 0 !== d && null !== d && (j += encodeURIComponent(c) + "=" + encodeURIComponent(d) + "&");
        return j.length ? j.substr(0, j.length - 1) : j
    };
    a.defaults.transformRequest = [function (a) {
        return angular.isObject(a) && "[object File]" !== String(a) ? b(a) : a
    }]
}]).controller("mainCtrl", ["$http", "$q", "$log", "$timeout", "mgAlert", function (a, b, c, d, e) {
    function f(a) {
        n.percent = 0,
        n.pageSize = 0,
        n.totalItems = 0,
        n.startPage = 0,
        n.pages = [],
        n.list = [],
        n.count = {
            success: 0,
            error: 0
        },
        g(a)
    }
    function g(a) {
        i(a).then(function (a) {
            n.category = a,
            n.totalPage = parseInt(n.category.totalPage || 1, 10),
            n.currentPage = parseInt(n.category.page || 1, 10),
            n.startPage || (n.startPage = parseInt(n.category.page || 1, 10), m(n.startPage, n.totalPage));
            var c = n.category.list.length;
            return n.category.nextPageUrl ? (n.pageSize = c, n.totalItems = (n.totalPage - n.startPage + 1) * n.pageSize) : n.totalItems = (n.totalPage - n.startPage) * (n.pageSize || c) + c,
            b.when(n.category.list)
        }).then(function (a) {
            function b() {
                var c = a.shift();
                c && (c.status = "loading", c.date = Date.now(), n.list.unshift(c), n.percent = parseInt(100 * n.list.length / n.totalItems, 10), j(c.url, c).then(function () {
                    c.status = "success",
                    n.count.success++
                }, function (a) {
                    c.status = "fail",
                    c.errorMsg = a,
                    n.count.error++
                })["finally"](function () {
                    a.length ? d(function () {
                        b()
                    }, 200) : n.category.nextPageUrl ? g(n.category.nextPageUrl) : e.success({
                        title: "采集完成",
                        description: "您可以去芒果采集箱认领到平台(速卖通、wish、ebay、lazada)",
                        btns: [{
                            text: "去芒果采集箱",
                            href: "http://www.mangoerp.com/erp/#/erp/product/outbox",
                            className: "btn-primary"
                        },
                        {
                            text: "关闭",
                            className: "btn-default"
                        }]
                    })
                }))
            }
            a && a.length ? b() : e.warn("未获取到商品", "你可以反馈给芒果店长")
        })["catch"](function (a) {
            "string" == typeof a ? e.error(a) : "S0004" === a.code ? e.error({
                title: a.msg,
                btns: [{
                    text: "马上登录",
                    href: "http://www.mangoerp.com/login/#/signin",
                    className: "btn-primary"
                },
                {
                    text: "取消",
                    className: "btn-default"
                }]
            }) : e.error(a.code, a.msg)
        })
    }
    function h(a) {
        a.status = "loading",
        n.list.unshift(a),
        j(a.url, a).then(function () {
            a.status = "success",
            n.count.success++
        }, function (b) {
            a.status = "fail",
            a.errorMsg = b,
            n.count.error++
        })["finally"](function () {
            arr.length && d(function () {
                _iterator()
            }, 200)
        })
    }
    function i(c) {
        return b(function (d, e) {
            function f(c) {
                l(c).then(function (b) {
                    return a.post(q, {
                        url: c,
                        html: b,
                        version: r
                    })
                }).then(function (a) {
                    var c = a.data;
                    return c.success ? void(c.data.category ? d(c.data.category) : f(c.data.url)) : b.reject({
                        code: c.code,
                        msg: c.msg
                    })
                })["catch"](function (a) {
                    e(a)
                })
            }
            f(c)
        })
    }
    function j(c, d) {
        var e;
        return b(function (f, g) {
            function h(c) {
                l(c).then(function (b) {
                    return a.post("http://www.mangoerp.com/bridge/gather/cateproduct", {
                        url: c,
                        html: b,
                        site: d && d.site || "",
                        version: r
                    })
                }).then(function (c) {
                    var i = c.data;
                    return e = i.data,
                    i.success ? void(e.url ? h(e.url) : (k(d, e), e.refId && e.detailUrl ? l(e.detailUrl).then(function (b) {
                        return a.post("http://www.mangoerp.com/bridge/gather/detail", {
                            refId: e.refId,
                            html: b,
                            site: d && d.site || "",
                            url: e.detailUrl,
                            version: r
                        })
                    }).then(function (a) {
                        var b = a.data;
                        b.success ? f() : g(b.msg)
                    })["catch"](function (a) {
                        g(a)
                    }) : f())) : ("G0018" === i.code && k(d, e), b.reject(i.msg))
                })["catch"](function (a) {
                    g(a)
                })
            }
            h(c)
        })
    }
    function k(a, b) {
        a && b.title && (a.title = b.title, a.id = b.id, a.img = b.img)
    }
    function l(d) {
        return b(function (b) {
            function e() {
                ++f,
                a.get(d, {
                    timeout: p
                }).success(function (a) {
                    "object" == typeof a && (a = JSON.stringify(a)),
                    b(a)
                }).error(function () {
                    o > f ? (e(), c.warn("[get]" + f + ":" + d)) : (b(""), c.error("[get]" + f + ":" + d))
                })
            }
            var f = 0;
            e()
        })
    }
    function m(a, b) {
        var c, d, e = 30;
        if (c = b - a, n.pages = [], c > 0) {
            d = Math.ceil(c / e);
            for (var f = a; b >= f; f += d) n.pages.push(f);
            n.pages[n.pages.length - 1] !== b && n.pages.push(b)
        }
    }
    var n = this,
        o = 3,
        p = 15e3,
        q = "http://www.mangoerp.com/bridge/gather/category",
        r = "";
    try {
            r = chrome.app.getDetails().version
        } catch (s) {}
    n.list = [],
    n.count = {
            success: 0,
            error: 0
        },
    a.get("http://www.mangoerp.com/standalone/loginStatus").success(function (a) {
            a.success && (n.uname = a.data.uname)
        }),
    chrome.extension.onMessage.addListener(function (a) {
            "mainTab" === a.ID && (n.type = a.type, "single" === a.type ? h({
                id: 0,
                date: Date.now(),
                site: a.site,
                img: "http://ns.mangoerp.com/public/placeholder/90x90.jpg?text=暂无图片",
                url: a.url,
                title: a.title
            }) : f(a.url))
        }),
    n.fetch = function () {
            n.cateUrl && f(n.cateUrl, {})
        }
}]).filter("verifySrc", [function () {
    return function (a) {
        return a && 0 !== a.indexOf("http") ? "http:" + a : a
    }
}]);