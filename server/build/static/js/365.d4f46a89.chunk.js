(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [365],
  {
    2365: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return f;
          },
        });
      n(2791);
      var r = n(6871),
        i = n(2419),
        s = n(2065),
        a = n(7892),
        u = n.n(a),
        o = n(7528),
        c = n(8717),
        h = n(184);
      function f() {
        var t = (0, r.UO)().id,
          e = (0, i.ZP)("/error-logs/".concat(t), s.Z).data,
          n = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/error-logs", name: "Error Logs" },
            { isLink: !1, link: "", name: t },
          ];
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(c.Z, { details: n }),
            (0, h.jsxs)("pre", {
              className: "dark:text-white pt-3 text-base",
              children: [
                "Error title : ",
                e && e.data.message,
                (0, h.jsx)("br", {}),
                "Error accrued at",
                " ",
                (0, h.jsx)(o.Z, {
                  color: "purple",
                  children: (0, h.jsx)("span", {
                    className: "text-base font-medium",
                    children:
                      e &&
                      u()(e.data.createdAt).format("MMMM DD, YYYY h:mm:ss a"),
                  }),
                }),
                (0, h.jsx)("br", {}),
                "Error originated by: ",
                e && e.data.IP,
                (0, h.jsx)("br", {}),
                e && e.data.stack,
              ],
            }),
          ],
        });
      }
    },
    7892: function (t) {
      t.exports = (function () {
        "use strict";
        var t = 1e3,
          e = 6e4,
          n = 36e5,
          r = "millisecond",
          i = "second",
          s = "minute",
          a = "hour",
          u = "day",
          o = "week",
          c = "month",
          h = "quarter",
          f = "year",
          d = "date",
          l = "Invalid Date",
          $ =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          m =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          M = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
          },
          g = function (t, e, n) {
            var r = String(t);
            return !r || r.length >= e
              ? t
              : "" + Array(e + 1 - r.length).join(n) + t;
          },
          v = {
            s: g,
            z: function (t) {
              var e = -t.utcOffset(),
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
              return (e <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(i, 2, "0");
            },
            m: function t(e, n) {
              if (e.date() < n.date()) return -t(n, e);
              var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                i = e.clone().add(r, c),
                s = n - i < 0,
                a = e.clone().add(r + (s ? -1 : 1), c);
              return +(-(r + (n - i) / (s ? i - a : a - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (t) {
              return (
                { M: c, y: f, w: o, d: u, D: d, h: a, m: s, s: i, ms: r, Q: h }[
                  t
                ] ||
                String(t || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          },
          y = "en",
          p = {};
        p[y] = M;
        var D = function (t) {
            return t instanceof _;
          },
          S = function t(e, n, r) {
            var i;
            if (!e) return y;
            if ("string" == typeof e) {
              var s = e.toLowerCase();
              p[s] && (i = s), n && ((p[s] = n), (i = s));
              var a = e.split("-");
              if (!i && a.length > 1) return t(a[0]);
            } else {
              var u = e.name;
              (p[u] = e), (i = u);
            }
            return !r && i && (y = i), i || (!r && y);
          },
          w = function (t, e) {
            if (D(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return (n.date = t), (n.args = arguments), new _(n);
          },
          O = v;
        (O.l = S),
          (O.i = D),
          (O.w = function (t, e) {
            return w(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var _ = (function () {
            function M(t) {
              (this.$L = S(t.locale, null, !0)), this.parse(t);
            }
            var g = M.prototype;
            return (
              (g.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    n = t.utc;
                  if (null === e) return new Date(NaN);
                  if (O.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                      var i = r[2] - 1 || 0,
                        s = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              i,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              s
                            )
                          )
                        : new Date(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            s
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  (this.$x = t.x || {}),
                  this.init();
              }),
              (g.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (g.$utils = function () {
                return O;
              }),
              (g.isValid = function () {
                return !(this.$d.toString() === l);
              }),
              (g.isSame = function (t, e) {
                var n = w(t);
                return this.startOf(e) <= n && n <= this.endOf(e);
              }),
              (g.isAfter = function (t, e) {
                return w(t) < this.startOf(e);
              }),
              (g.isBefore = function (t, e) {
                return this.endOf(e) < w(t);
              }),
              (g.$g = function (t, e, n) {
                return O.u(t) ? this[e] : this.set(n, t);
              }),
              (g.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (g.valueOf = function () {
                return this.$d.getTime();
              }),
              (g.startOf = function (t, e) {
                var n = this,
                  r = !!O.u(e) || e,
                  h = O.p(t),
                  l = function (t, e) {
                    var i = O.w(
                      n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                      n
                    );
                    return r ? i : i.endOf(u);
                  },
                  $ = function (t, e) {
                    return O.w(
                      n
                        .toDate()
                        [t].apply(
                          n.toDate("s"),
                          (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      n
                    );
                  },
                  m = this.$W,
                  M = this.$M,
                  g = this.$D,
                  v = "set" + (this.$u ? "UTC" : "");
                switch (h) {
                  case f:
                    return r ? l(1, 0) : l(31, 11);
                  case c:
                    return r ? l(1, M) : l(0, M + 1);
                  case o:
                    var y = this.$locale().weekStart || 0,
                      p = (m < y ? m + 7 : m) - y;
                    return l(r ? g - p : g + (6 - p), M);
                  case u:
                  case d:
                    return $(v + "Hours", 0);
                  case a:
                    return $(v + "Minutes", 1);
                  case s:
                    return $(v + "Seconds", 2);
                  case i:
                    return $(v + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (g.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (g.$set = function (t, e) {
                var n,
                  o = O.p(t),
                  h = "set" + (this.$u ? "UTC" : ""),
                  l = ((n = {}),
                  (n[u] = h + "Date"),
                  (n[d] = h + "Date"),
                  (n[c] = h + "Month"),
                  (n[f] = h + "FullYear"),
                  (n[a] = h + "Hours"),
                  (n[s] = h + "Minutes"),
                  (n[i] = h + "Seconds"),
                  (n[r] = h + "Milliseconds"),
                  n)[o],
                  $ = o === u ? this.$D + (e - this.$W) : e;
                if (o === c || o === f) {
                  var m = this.clone().set(d, 1);
                  m.$d[l]($),
                    m.init(),
                    (this.$d = m.set(d, Math.min(this.$D, m.daysInMonth())).$d);
                } else l && this.$d[l]($);
                return this.init(), this;
              }),
              (g.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (g.get = function (t) {
                return this[O.p(t)]();
              }),
              (g.add = function (r, h) {
                var d,
                  l = this;
                r = Number(r);
                var $ = O.p(h),
                  m = function (t) {
                    var e = w(l);
                    return O.w(e.date(e.date() + Math.round(t * r)), l);
                  };
                if ($ === c) return this.set(c, this.$M + r);
                if ($ === f) return this.set(f, this.$y + r);
                if ($ === u) return m(1);
                if ($ === o) return m(7);
                var M =
                    ((d = {}), (d[s] = e), (d[a] = n), (d[i] = t), d)[$] || 1,
                  g = this.$d.getTime() + r * M;
                return O.w(g, this);
              }),
              (g.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (g.format = function (t) {
                var e = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || l;
                var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                  i = O.z(this),
                  s = this.$H,
                  a = this.$m,
                  u = this.$M,
                  o = n.weekdays,
                  c = n.months,
                  h = function (t, n, i, s) {
                    return (t && (t[n] || t(e, r))) || i[n].slice(0, s);
                  },
                  f = function (t) {
                    return O.s(s % 12 || 12, t, "0");
                  },
                  d =
                    n.meridiem ||
                    function (t, e, n) {
                      var r = t < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    },
                  $ = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: u + 1,
                    MM: O.s(u + 1, 2, "0"),
                    MMM: h(n.monthsShort, u, c, 3),
                    MMMM: h(c, u),
                    D: this.$D,
                    DD: O.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: h(n.weekdaysMin, this.$W, o, 2),
                    ddd: h(n.weekdaysShort, this.$W, o, 3),
                    dddd: o[this.$W],
                    H: String(s),
                    HH: O.s(s, 2, "0"),
                    h: f(1),
                    hh: f(2),
                    a: d(s, a, !0),
                    A: d(s, a, !1),
                    m: String(a),
                    mm: O.s(a, 2, "0"),
                    s: String(this.$s),
                    ss: O.s(this.$s, 2, "0"),
                    SSS: O.s(this.$ms, 3, "0"),
                    Z: i,
                  };
                return r.replace(m, function (t, e) {
                  return e || $[t] || i.replace(":", "");
                });
              }),
              (g.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (g.diff = function (r, d, l) {
                var $,
                  m = O.p(d),
                  M = w(r),
                  g = (M.utcOffset() - this.utcOffset()) * e,
                  v = this - M,
                  y = O.m(this, M);
                return (
                  (y =
                    (($ = {}),
                    ($[f] = y / 12),
                    ($[c] = y),
                    ($[h] = y / 3),
                    ($[o] = (v - g) / 6048e5),
                    ($[u] = (v - g) / 864e5),
                    ($[a] = v / n),
                    ($[s] = v / e),
                    ($[i] = v / t),
                    $)[m] || v),
                  l ? y : O.a(y)
                );
              }),
              (g.daysInMonth = function () {
                return this.endOf(c).$D;
              }),
              (g.$locale = function () {
                return p[this.$L];
              }),
              (g.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                  r = S(t, e, !0);
                return r && (n.$L = r), n;
              }),
              (g.clone = function () {
                return O.w(this.$d, this);
              }),
              (g.toDate = function () {
                return new Date(this.valueOf());
              }),
              (g.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (g.toISOString = function () {
                return this.$d.toISOString();
              }),
              (g.toString = function () {
                return this.$d.toUTCString();
              }),
              M
            );
          })(),
          x = _.prototype;
        return (
          (w.prototype = x),
          [
            ["$ms", r],
            ["$s", i],
            ["$m", s],
            ["$H", a],
            ["$W", u],
            ["$M", c],
            ["$y", f],
            ["$D", d],
          ].forEach(function (t) {
            x[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          (w.extend = function (t, e) {
            return t.$i || (t(e, _, w), (t.$i = !0)), w;
          }),
          (w.locale = S),
          (w.isDayjs = D),
          (w.unix = function (t) {
            return w(1e3 * t);
          }),
          (w.en = p[y]),
          (w.Ls = p),
          (w.p = {}),
          w
        );
      })();
    },
  },
]);
//# sourceMappingURL=365.d4f46a89.chunk.js.map
