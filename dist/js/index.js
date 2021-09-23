!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.BUnits = t())
    : (e.BUnits = t())
})(this, function () {
  return (() => {
    'use strict'
    var e = {
        d: (t, r) => {
          for (var n in r)
            e.o(r, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: r[n] })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      t = {}
    function r(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = r),
        e
      )
    }
    e.d(t, { default: () => s })
    const n = {
      getInterval: function (e, t) {
        if (e > t) throw new Error('Parameter error')
        for (var r = [], n = e; n <= t; n++) r.push(n)
        return r
      }
    }
    function o(e) {
      return !(
        -1 ===
        [1, 3, 5, 7, 8, 10, 12].findIndex(function (t) {
          return t === e
        })
      )
    }
    const c = {
      isBigMonth: o,
      getMonthMaxCount: function (e, t) {
        var r = (function (e) {
            return 0 == e % 400 || 0 == e % 4
          })(e),
          n = o(t)
        return 2 === t ? (r ? 29 : 28) : n ? 31 : 30
      }
    }
    function i(e, t) {
      var r = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          r.push.apply(r, n)
      }
      return r
    }
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              r(e, t, n[t])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
      }
      return e
    }
    const f = {
      Year: u(
        {},
        {
          getIntervalYear: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1900,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 2050
            return n.getInterval(e, t)
          },
          isLeapYear: function (e) {
            return 0 == e % 400 || 0 == e % 4
          }
        }
      ),
      Month: u({}, c)
    }
    function p(e, t) {
      var r = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          r.push.apply(r, n)
      }
      return r
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? p(Object(n), !0).forEach(function (t) {
              r(e, t, n[t])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : p(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
      }
      return e
    }
    const s = { _Array: a({}, n), _Date: a({}, f) }
    return t.default
  })()
})
