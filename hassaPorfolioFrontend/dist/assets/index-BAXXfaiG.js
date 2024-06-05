function Lm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _m = { exports: {} },
  ja = {},
  Im = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rs = Symbol.for("react.element"),
  I1 = Symbol.for("react.portal"),
  D1 = Symbol.for("react.fragment"),
  U1 = Symbol.for("react.strict_mode"),
  O1 = Symbol.for("react.profiler"),
  B1 = Symbol.for("react.provider"),
  z1 = Symbol.for("react.context"),
  V1 = Symbol.for("react.forward_ref"),
  H1 = Symbol.for("react.suspense"),
  $1 = Symbol.for("react.memo"),
  G1 = Symbol.for("react.lazy"),
  Pf = Symbol.iterator;
function W1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pf && e[Pf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Dm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Um = Object.assign,
  Om = {};
function di(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Om),
    (this.updater = n || Dm);
}
di.prototype.isReactComponent = {};
di.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
di.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bm() {}
Bm.prototype = di.prototype;
function Cc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Om),
    (this.updater = n || Dm);
}
var bc = (Cc.prototype = new Bm());
bc.constructor = Cc;
Um(bc, di.prototype);
bc.isPureReactComponent = !0;
var Cf = Array.isArray,
  zm = Object.prototype.hasOwnProperty,
  kc = { current: null },
  Vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hm(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      zm.call(t, r) && !Vm.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Rs,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: kc.current,
  };
}
function K1(e, t) {
  return {
    $$typeof: Rs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Nc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rs;
}
function Y1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bf = /\/+/g;
function tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Y1("" + e.key)
    : t.toString(36);
}
function yo(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Rs:
          case I1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + tl(o, 0) : r),
      Cf(i)
        ? ((n = ""),
          e != null && (n = e.replace(bf, "$&/") + "/"),
          yo(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Nc(i) &&
            (i = K1(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(bf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Cf(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + tl(s, a);
      o += yo(s, t, n, l, i);
    }
  else if (((l = W1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + tl(s, a++)), (o += yo(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Xs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    yo(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function X1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Qe = { current: null },
  xo = { transition: null },
  q1 = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: xo,
    ReactCurrentOwner: kc,
  };
function $m() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
  map: Xs,
  forEach: function (e, t, n) {
    Xs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Nc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = di;
ee.Fragment = D1;
ee.Profiler = O1;
ee.PureComponent = Cc;
ee.StrictMode = U1;
ee.Suspense = H1;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q1;
ee.act = $m;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Um({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = kc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      zm.call(t, l) &&
        !Vm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Rs, type: e.type, key: i, ref: s, props: r, _owner: o };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: z1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: B1, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = Hm;
ee.createFactory = function (e) {
  var t = Hm.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: V1, render: e };
};
ee.isValidElement = Nc;
ee.lazy = function (e) {
  return { $$typeof: G1, _payload: { _status: -1, _result: e }, _init: X1 };
};
ee.memo = function (e, t) {
  return { $$typeof: $1, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = xo.transition;
  xo.transition = {};
  try {
    e();
  } finally {
    xo.transition = t;
  }
};
ee.unstable_act = $m;
ee.useCallback = function (e, t) {
  return Qe.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return Qe.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return Qe.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return Qe.current.useEffect(e, t);
};
ee.useId = function () {
  return Qe.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return Qe.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return Qe.current.useRef(e);
};
ee.useState = function (e) {
  return Qe.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return Qe.current.useTransition();
};
ee.version = "18.3.1";
Im.exports = ee;
var E = Im.exports;
const ae = Pc(E),
  Q1 = Lm({ __proto__: null, default: ae }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J1 = E,
  Z1 = Symbol.for("react.element"),
  ex = Symbol.for("react.fragment"),
  tx = Object.prototype.hasOwnProperty,
  nx = J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gm(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) tx.call(t, r) && !rx.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Z1,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: nx.current,
  };
}
ja.Fragment = ex;
ja.jsx = Gm;
ja.jsxs = Gm;
_m.exports = ja;
var f = _m.exports,
  ru = {},
  Wm = { exports: {} },
  ht = {},
  Km = { exports: {} },
  Ym = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, U) {
    var B = A.length;
    A.push(U);
    e: for (; 0 < B; ) {
      var te = (B - 1) >>> 1,
        re = A[te];
      if (0 < i(re, U)) (A[te] = U), (A[B] = re), (B = te);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var U = A[0],
      B = A.pop();
    if (B !== U) {
      A[0] = B;
      e: for (var te = 0, re = A.length, Nt = re >>> 1; te < Nt; ) {
        var st = 2 * (te + 1) - 1,
          ot = A[st],
          Ke = st + 1,
          vt = A[Ke];
        if (0 > i(ot, B))
          Ke < re && 0 > i(vt, ot)
            ? ((A[te] = vt), (A[Ke] = B), (te = Ke))
            : ((A[te] = ot), (A[st] = B), (te = st));
        else if (Ke < re && 0 > i(vt, B)) (A[te] = vt), (A[Ke] = B), (te = Ke);
        else break e;
      }
    }
    return U;
  }
  function i(A, U) {
    var B = A.sortIndex - U.sortIndex;
    return B !== 0 ? B : A.id - U.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    p = 3,
    h = !1,
    v = !1,
    x = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(A) {
    for (var U = n(c); U !== null; ) {
      if (U.callback === null) r(c);
      else if (U.startTime <= A)
        r(c), (U.sortIndex = U.expirationTime), t(l, U);
      else break;
      U = n(c);
    }
  }
  function S(A) {
    if (((x = !1), g(A), !v))
      if (n(l) !== null) (v = !0), se(T);
      else {
        var U = n(c);
        U !== null && be(S, U.startTime - A);
      }
  }
  function T(A, U) {
    (v = !1), x && ((x = !1), m(P), (P = -1)), (h = !0);
    var B = p;
    try {
      for (
        g(U), d = n(l);
        d !== null && (!(d.expirationTime > U) || (A && !L()));

      ) {
        var te = d.callback;
        if (typeof te == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var re = te(d.expirationTime <= U);
          (U = e.unstable_now()),
            typeof re == "function" ? (d.callback = re) : d === n(l) && r(l),
            g(U);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Nt = !0;
      else {
        var st = n(c);
        st !== null && be(S, st.startTime - U), (Nt = !1);
      }
      return Nt;
    } finally {
      (d = null), (p = B), (h = !1);
    }
  }
  var k = !1,
    w = null,
    P = -1,
    R = 5,
    C = -1;
  function L() {
    return !(e.unstable_now() - C < R);
  }
  function O() {
    if (w !== null) {
      var A = e.unstable_now();
      C = A;
      var U = !0;
      try {
        U = w(!0, A);
      } finally {
        U ? D() : ((k = !1), (w = null));
      }
    } else k = !1;
  }
  var D;
  if (typeof y == "function")
    D = function () {
      y(O);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      K = W.port2;
    (W.port1.onmessage = O),
      (D = function () {
        K.postMessage(null);
      });
  } else
    D = function () {
      j(O, 0);
    };
  function se(A) {
    (w = A), k || ((k = !0), D());
  }
  function be(A, U) {
    P = j(function () {
      A(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), se(T));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = p;
      }
      var B = p;
      p = U;
      try {
        return A();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, U) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var B = p;
      p = A;
      try {
        return U();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (A, U, B) {
      var te = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? te + B : te))
          : (B = te),
        A)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = B + re),
        (A = {
          id: u++,
          callback: U,
          priorityLevel: A,
          startTime: B,
          expirationTime: re,
          sortIndex: -1,
        }),
        B > te
          ? ((A.sortIndex = B),
            t(c, A),
            n(l) === null &&
              A === n(c) &&
              (x ? (m(P), (P = -1)) : (x = !0), be(S, B - te)))
          : ((A.sortIndex = re), t(l, A), v || h || ((v = !0), se(T))),
        A
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (A) {
      var U = p;
      return function () {
        var B = p;
        p = U;
        try {
          return A.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(Ym);
Km.exports = Ym;
var ix = Km.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sx = E,
  ft = ix;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xm = new Set(),
  ss = {};
function Sr(e, t) {
  ti(e, t), ti(e + "Capture", t);
}
function ti(e, t) {
  for (ss[e] = t, e = 0; e < t.length; e++) Xm.add(t[e]);
}
var un = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  iu = Object.prototype.hasOwnProperty,
  ox =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  kf = {},
  Nf = {};
function ax(e) {
  return iu.call(Nf, e)
    ? !0
    : iu.call(kf, e)
    ? !1
    : ox.test(e)
    ? (Nf[e] = !0)
    : ((kf[e] = !0), !1);
}
function lx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ux(e, t, n, r) {
  if (t === null || typeof t > "u" || lx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Je(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new Je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new Je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new Je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new Je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rc = /[\-:]([a-z])/g;
function Ac(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rc, Ac);
    Oe[t] = new Je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rc, Ac);
    Oe[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Rc, Ac);
  Oe[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mc(e, t, n, r) {
  var i = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ux(t, n, i, r) && (n = null),
    r || i === null
      ? ax(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pn = sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qs = Symbol.for("react.element"),
  Rr = Symbol.for("react.portal"),
  Ar = Symbol.for("react.fragment"),
  Lc = Symbol.for("react.strict_mode"),
  su = Symbol.for("react.profiler"),
  qm = Symbol.for("react.provider"),
  Qm = Symbol.for("react.context"),
  _c = Symbol.for("react.forward_ref"),
  ou = Symbol.for("react.suspense"),
  au = Symbol.for("react.suspense_list"),
  Ic = Symbol.for("react.memo"),
  Sn = Symbol.for("react.lazy"),
  Jm = Symbol.for("react.offscreen"),
  Rf = Symbol.iterator;
function Pi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rf && e[Rf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  nl;
function Oi(e) {
  if (nl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      nl = (t && t[1]) || "";
    }
  return (
    `
` +
    nl +
    e
  );
}
var rl = !1;
function il(e, t) {
  if (!e || rl) return "";
  rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (rl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Oi(e) : "";
}
function cx(e) {
  switch (e.tag) {
    case 5:
      return Oi(e.type);
    case 16:
      return Oi("Lazy");
    case 13:
      return Oi("Suspense");
    case 19:
      return Oi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = il(e.type, !1)), e;
    case 11:
      return (e = il(e.type.render, !1)), e;
    case 1:
      return (e = il(e.type, !0)), e;
    default:
      return "";
  }
}
function lu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ar:
      return "Fragment";
    case Rr:
      return "Portal";
    case su:
      return "Profiler";
    case Lc:
      return "StrictMode";
    case ou:
      return "Suspense";
    case au:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qm:
        return (e.displayName || "Context") + ".Consumer";
      case qm:
        return (e._context.displayName || "Context") + ".Provider";
      case _c:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ic:
        return (
          (t = e.displayName || null), t !== null ? t : lu(e.type) || "Memo"
        );
      case Sn:
        (t = e._payload), (e = e._init);
        try {
          return lu(e(t));
        } catch {}
    }
  return null;
}
function dx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return lu(t);
    case 8:
      return t === Lc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function On(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fx(e) {
  var t = Zm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qs(e) {
  e._valueTracker || (e._valueTracker = fx(e));
}
function eg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Io(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uu(e, t) {
  var n = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Af(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function tg(e, t) {
  (t = t.checked), t != null && Mc(e, "checked", t, !1);
}
function cu(e, t) {
  tg(e, t);
  var n = On(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? du(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && du(e, t.type, On(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function du(e, t, n) {
  (t !== "number" || Io(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bi = Array.isArray;
function Yr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + On(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function fu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Lf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Bi(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: On(n) };
}
function ng(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _f(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? rg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Js,
  ig = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Js = Js || document.createElement("div"),
          Js.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Js.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function os(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $i = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  px = ["Webkit", "ms", "Moz", "O"];
Object.keys($i).forEach(function (e) {
  px.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($i[t] = $i[e]);
  });
});
function sg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($i.hasOwnProperty(e) && $i[e])
    ? ("" + t).trim()
    : t + "px";
}
function og(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = sg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var hx = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function hu(e, t) {
  if (t) {
    if (hx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function mu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gu = null;
function Dc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vu = null,
  Xr = null,
  qr = null;
function If(e) {
  if ((e = Ls(e))) {
    if (typeof vu != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Ca(t)), vu(e.stateNode, e.type, t));
  }
}
function ag(e) {
  Xr ? (qr ? qr.push(e) : (qr = [e])) : (Xr = e);
}
function lg() {
  if (Xr) {
    var e = Xr,
      t = qr;
    if (((qr = Xr = null), If(e), t)) for (e = 0; e < t.length; e++) If(t[e]);
  }
}
function ug(e, t) {
  return e(t);
}
function cg() {}
var sl = !1;
function dg(e, t, n) {
  if (sl) return e(t, n);
  sl = !0;
  try {
    return ug(e, t, n);
  } finally {
    (sl = !1), (Xr !== null || qr !== null) && (cg(), lg());
  }
}
function as(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ca(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var yu = !1;
if (un)
  try {
    var Ci = {};
    Object.defineProperty(Ci, "passive", {
      get: function () {
        yu = !0;
      },
    }),
      window.addEventListener("test", Ci, Ci),
      window.removeEventListener("test", Ci, Ci);
  } catch {
    yu = !1;
  }
function mx(e, t, n, r, i, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Gi = !1,
  Do = null,
  Uo = !1,
  xu = null,
  gx = {
    onError: function (e) {
      (Gi = !0), (Do = e);
    },
  };
function vx(e, t, n, r, i, s, o, a, l) {
  (Gi = !1), (Do = null), mx.apply(gx, arguments);
}
function yx(e, t, n, r, i, s, o, a, l) {
  if ((vx.apply(this, arguments), Gi)) {
    if (Gi) {
      var c = Do;
      (Gi = !1), (Do = null);
    } else throw Error(_(198));
    Uo || ((Uo = !0), (xu = c));
  }
}
function jr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Df(e) {
  if (jr(e) !== e) throw Error(_(188));
}
function xx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jr(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Df(i), e;
        if (s === r) return Df(i), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function pg(e) {
  return (e = xx(e)), e !== null ? hg(e) : null;
}
function hg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var mg = ft.unstable_scheduleCallback,
  Uf = ft.unstable_cancelCallback,
  wx = ft.unstable_shouldYield,
  Sx = ft.unstable_requestPaint,
  je = ft.unstable_now,
  jx = ft.unstable_getCurrentPriorityLevel,
  Uc = ft.unstable_ImmediatePriority,
  gg = ft.unstable_UserBlockingPriority,
  Oo = ft.unstable_NormalPriority,
  Ex = ft.unstable_LowPriority,
  vg = ft.unstable_IdlePriority,
  Ea = null,
  Wt = null;
function Tx(e) {
  if (Wt && typeof Wt.onCommitFiberRoot == "function")
    try {
      Wt.onCommitFiberRoot(Ea, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var It = Math.clz32 ? Math.clz32 : Cx,
  Fx = Math.log,
  Px = Math.LN2;
function Cx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Fx(e) / Px) | 0)) | 0;
}
var Zs = 64,
  eo = 4194304;
function zi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Bo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = zi(a)) : ((s &= o), s !== 0 && (r = zi(s)));
  } else (o = n & ~i), o !== 0 ? (r = zi(o)) : s !== 0 && (r = zi(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - It(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function bx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - It(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = bx(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function wu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yg() {
  var e = Zs;
  return (Zs <<= 1), !(Zs & 4194240) && (Zs = 64), e;
}
function ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function As(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - It(t)),
    (e[t] = n);
}
function Nx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - It(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Oc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - It(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var oe = 0;
function xg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wg,
  Bc,
  Sg,
  jg,
  Eg,
  Su = !1,
  to = [],
  kn = null,
  Nn = null,
  Rn = null,
  ls = new Map(),
  us = new Map(),
  Tn = [],
  Rx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Of(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kn = null;
      break;
    case "dragenter":
    case "dragleave":
      Nn = null;
      break;
    case "mouseover":
    case "mouseout":
      Rn = null;
      break;
    case "pointerover":
    case "pointerout":
      ls.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      us.delete(t.pointerId);
  }
}
function bi(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ls(t)), t !== null && Bc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ax(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (kn = bi(kn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Nn = bi(Nn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Rn = bi(Rn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ls.set(s, bi(ls.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), us.set(s, bi(us.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Tg(e) {
  var t = rr(e.target);
  if (t !== null) {
    var n = jr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fg(n)), t !== null)) {
          (e.blockedOn = t),
            Eg(e.priority, function () {
              Sg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ju(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (gu = r), n.target.dispatchEvent(r), (gu = null);
    } else return (t = Ls(n)), t !== null && Bc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bf(e, t, n) {
  wo(e) && n.delete(t);
}
function Mx() {
  (Su = !1),
    kn !== null && wo(kn) && (kn = null),
    Nn !== null && wo(Nn) && (Nn = null),
    Rn !== null && wo(Rn) && (Rn = null),
    ls.forEach(Bf),
    us.forEach(Bf);
}
function ki(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Su ||
      ((Su = !0),
      ft.unstable_scheduleCallback(ft.unstable_NormalPriority, Mx)));
}
function cs(e) {
  function t(i) {
    return ki(i, e);
  }
  if (0 < to.length) {
    ki(to[0], e);
    for (var n = 1; n < to.length; n++) {
      var r = to[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    kn !== null && ki(kn, e),
      Nn !== null && ki(Nn, e),
      Rn !== null && ki(Rn, e),
      ls.forEach(t),
      us.forEach(t),
      n = 0;
    n < Tn.length;
    n++
  )
    (r = Tn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tn.length && ((n = Tn[0]), n.blockedOn === null); )
    Tg(n), n.blockedOn === null && Tn.shift();
}
var Qr = pn.ReactCurrentBatchConfig,
  zo = !0;
function Lx(e, t, n, r) {
  var i = oe,
    s = Qr.transition;
  Qr.transition = null;
  try {
    (oe = 1), zc(e, t, n, r);
  } finally {
    (oe = i), (Qr.transition = s);
  }
}
function _x(e, t, n, r) {
  var i = oe,
    s = Qr.transition;
  Qr.transition = null;
  try {
    (oe = 4), zc(e, t, n, r);
  } finally {
    (oe = i), (Qr.transition = s);
  }
}
function zc(e, t, n, r) {
  if (zo) {
    var i = ju(e, t, n, r);
    if (i === null) gl(e, t, r, Vo, n), Of(e, r);
    else if (Ax(i, e, t, n, r)) r.stopPropagation();
    else if ((Of(e, r), t & 4 && -1 < Rx.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ls(i);
        if (
          (s !== null && wg(s),
          (s = ju(e, t, n, r)),
          s === null && gl(e, t, r, Vo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else gl(e, t, r, null, n);
  }
}
var Vo = null;
function ju(e, t, n, r) {
  if (((Vo = null), (e = Dc(r)), (e = rr(e)), e !== null))
    if (((t = jr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vo = e), null;
}
function Fg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (jx()) {
        case Uc:
          return 1;
        case gg:
          return 4;
        case Oo:
        case Ex:
          return 16;
        case vg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pn = null,
  Vc = null,
  So = null;
function Pg() {
  if (So) return So;
  var e,
    t = Vc,
    n = t.length,
    r,
    i = "value" in Pn ? Pn.value : Pn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (So = i.slice(e, 1 < r ? 1 - r : void 0));
}
function jo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function no() {
  return !0;
}
function zf() {
  return !1;
}
function mt(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? no
        : zf),
      (this.isPropagationStopped = zf),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = no));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = no));
      },
      persist: function () {},
      isPersistent: no,
    }),
    t
  );
}
var fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hc = mt(fi),
  Ms = xe({}, fi, { view: 0, detail: 0 }),
  Ix = mt(Ms),
  al,
  ll,
  Ni,
  Ta = xe({}, Ms, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $c,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ni &&
            (Ni && e.type === "mousemove"
              ? ((al = e.screenX - Ni.screenX), (ll = e.screenY - Ni.screenY))
              : (ll = al = 0),
            (Ni = e)),
          al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ll;
    },
  }),
  Vf = mt(Ta),
  Dx = xe({}, Ta, { dataTransfer: 0 }),
  Ux = mt(Dx),
  Ox = xe({}, Ms, { relatedTarget: 0 }),
  ul = mt(Ox),
  Bx = xe({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zx = mt(Bx),
  Vx = xe({}, fi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Hx = mt(Vx),
  $x = xe({}, fi, { data: 0 }),
  Hf = mt($x),
  Gx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Wx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Kx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kx[e]) ? !!t[e] : !1;
}
function $c() {
  return Yx;
}
var Xx = xe({}, Ms, {
    key: function (e) {
      if (e.key) {
        var t = Gx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Wx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $c,
    charCode: function (e) {
      return e.type === "keypress" ? jo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  qx = mt(Xx),
  Qx = xe({}, Ta, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $f = mt(Qx),
  Jx = xe({}, Ms, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $c,
  }),
  Zx = mt(Jx),
  ew = xe({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tw = mt(ew),
  nw = xe({}, Ta, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  rw = mt(nw),
  iw = [9, 13, 27, 32],
  Gc = un && "CompositionEvent" in window,
  Wi = null;
un && "documentMode" in document && (Wi = document.documentMode);
var sw = un && "TextEvent" in window && !Wi,
  Cg = un && (!Gc || (Wi && 8 < Wi && 11 >= Wi)),
  Gf = " ",
  Wf = !1;
function bg(e, t) {
  switch (e) {
    case "keyup":
      return iw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mr = !1;
function ow(e, t) {
  switch (e) {
    case "compositionend":
      return kg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wf = !0), Gf);
    case "textInput":
      return (e = t.data), e === Gf && Wf ? null : e;
    default:
      return null;
  }
}
function aw(e, t) {
  if (Mr)
    return e === "compositionend" || (!Gc && bg(e, t))
      ? ((e = Pg()), (So = Vc = Pn = null), (Mr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Cg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Kf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lw[e.type] : t === "textarea";
}
function Ng(e, t, n, r) {
  ag(r),
    (t = Ho(t, "onChange")),
    0 < t.length &&
      ((n = new Hc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ki = null,
  ds = null;
function uw(e) {
  zg(e, 0);
}
function Fa(e) {
  var t = Ir(e);
  if (eg(t)) return e;
}
function cw(e, t) {
  if (e === "change") return t;
}
var Rg = !1;
if (un) {
  var cl;
  if (un) {
    var dl = "oninput" in document;
    if (!dl) {
      var Yf = document.createElement("div");
      Yf.setAttribute("oninput", "return;"),
        (dl = typeof Yf.oninput == "function");
    }
    cl = dl;
  } else cl = !1;
  Rg = cl && (!document.documentMode || 9 < document.documentMode);
}
function Xf() {
  Ki && (Ki.detachEvent("onpropertychange", Ag), (ds = Ki = null));
}
function Ag(e) {
  if (e.propertyName === "value" && Fa(ds)) {
    var t = [];
    Ng(t, ds, e, Dc(e)), dg(uw, t);
  }
}
function dw(e, t, n) {
  e === "focusin"
    ? (Xf(), (Ki = t), (ds = n), Ki.attachEvent("onpropertychange", Ag))
    : e === "focusout" && Xf();
}
function fw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fa(ds);
}
function pw(e, t) {
  if (e === "click") return Fa(t);
}
function hw(e, t) {
  if (e === "input" || e === "change") return Fa(t);
}
function mw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == "function" ? Object.is : mw;
function fs(e, t) {
  if (Ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!iu.call(t, i) || !Ot(e[i], t[i])) return !1;
  }
  return !0;
}
function qf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qf(e, t) {
  var n = qf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qf(n);
  }
}
function Mg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Mg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Lg() {
  for (var e = window, t = Io(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Io(e.document);
  }
  return t;
}
function Wc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function gw(e) {
  var t = Lg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Mg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Wc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Qf(n, s));
        var o = Qf(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vw = un && "documentMode" in document && 11 >= document.documentMode,
  Lr = null,
  Eu = null,
  Yi = null,
  Tu = !1;
function Jf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Tu ||
    Lr == null ||
    Lr !== Io(r) ||
    ((r = Lr),
    "selectionStart" in r && Wc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yi && fs(Yi, r)) ||
      ((Yi = r),
      (r = Ho(Eu, "onSelect")),
      0 < r.length &&
        ((t = new Hc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Lr))));
}
function ro(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _r = {
    animationend: ro("Animation", "AnimationEnd"),
    animationiteration: ro("Animation", "AnimationIteration"),
    animationstart: ro("Animation", "AnimationStart"),
    transitionend: ro("Transition", "TransitionEnd"),
  },
  fl = {},
  _g = {};
un &&
  ((_g = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _r.animationend.animation,
    delete _r.animationiteration.animation,
    delete _r.animationstart.animation),
  "TransitionEvent" in window || delete _r.transitionend.transition);
function Pa(e) {
  if (fl[e]) return fl[e];
  if (!_r[e]) return e;
  var t = _r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _g) return (fl[e] = t[n]);
  return e;
}
var Ig = Pa("animationend"),
  Dg = Pa("animationiteration"),
  Ug = Pa("animationstart"),
  Og = Pa("transitionend"),
  Bg = new Map(),
  Zf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function $n(e, t) {
  Bg.set(e, t), Sr(t, [e]);
}
for (var pl = 0; pl < Zf.length; pl++) {
  var hl = Zf[pl],
    yw = hl.toLowerCase(),
    xw = hl[0].toUpperCase() + hl.slice(1);
  $n(yw, "on" + xw);
}
$n(Ig, "onAnimationEnd");
$n(Dg, "onAnimationIteration");
$n(Ug, "onAnimationStart");
$n("dblclick", "onDoubleClick");
$n("focusin", "onFocus");
$n("focusout", "onBlur");
$n(Og, "onTransitionEnd");
ti("onMouseEnter", ["mouseout", "mouseover"]);
ti("onMouseLeave", ["mouseout", "mouseover"]);
ti("onPointerEnter", ["pointerout", "pointerover"]);
ti("onPointerLeave", ["pointerout", "pointerover"]);
Sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ww = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));
function ep(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), yx(r, t, void 0, e), (e.currentTarget = null);
}
function zg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          ep(i, a, c), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          ep(i, a, c), (s = l);
        }
    }
  }
  if (Uo) throw ((e = xu), (Uo = !1), (xu = null), e);
}
function ue(e, t) {
  var n = t[ku];
  n === void 0 && (n = t[ku] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vg(t, e, 2, !1), n.add(r));
}
function ml(e, t, n) {
  var r = 0;
  t && (r |= 4), Vg(n, e, r, t);
}
var io = "_reactListening" + Math.random().toString(36).slice(2);
function ps(e) {
  if (!e[io]) {
    (e[io] = !0),
      Xm.forEach(function (n) {
        n !== "selectionchange" && (ww.has(n) || ml(n, !1, e), ml(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[io] || ((t[io] = !0), ml("selectionchange", !1, t));
  }
}
function Vg(e, t, n, r) {
  switch (Fg(t)) {
    case 1:
      var i = Lx;
      break;
    case 4:
      i = _x;
      break;
    default:
      i = zc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !yu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function gl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = rr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  dg(function () {
    var c = s,
      u = Dc(n),
      d = [];
    e: {
      var p = Bg.get(e);
      if (p !== void 0) {
        var h = Hc,
          v = e;
        switch (e) {
          case "keypress":
            if (jo(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = qx;
            break;
          case "focusin":
            (v = "focus"), (h = ul);
            break;
          case "focusout":
            (v = "blur"), (h = ul);
            break;
          case "beforeblur":
          case "afterblur":
            h = ul;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Vf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Ux;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Zx;
            break;
          case Ig:
          case Dg:
          case Ug:
            h = zx;
            break;
          case Og:
            h = tw;
            break;
          case "scroll":
            h = Ix;
            break;
          case "wheel":
            h = rw;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Hx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = $f;
        }
        var x = (t & 4) !== 0,
          j = !x && e === "scroll",
          m = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var y = c, g; y !== null; ) {
          g = y;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              m !== null && ((S = as(y, m)), S != null && x.push(hs(y, S, g)))),
            j)
          )
            break;
          y = y.return;
        }
        0 < x.length &&
          ((p = new h(p, v, null, n, u)), d.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          p &&
            n !== gu &&
            (v = n.relatedTarget || n.fromElement) &&
            (rr(v) || v[cn]))
        )
          break e;
        if (
          (h || p) &&
          ((p =
            u.window === u
              ? u
              : (p = u.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = c),
              (v = v ? rr(v) : null),
              v !== null &&
                ((j = jr(v)), v !== j || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = c)),
          h !== v)
        ) {
          if (
            ((x = Vf),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = $f),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (y = "pointer")),
            (j = h == null ? p : Ir(h)),
            (g = v == null ? p : Ir(v)),
            (p = new x(S, y + "leave", h, n, u)),
            (p.target = j),
            (p.relatedTarget = g),
            (S = null),
            rr(u) === c &&
              ((x = new x(m, y + "enter", v, n, u)),
              (x.target = g),
              (x.relatedTarget = j),
              (S = x)),
            (j = S),
            h && v)
          )
            t: {
              for (x = h, m = v, y = 0, g = x; g; g = kr(g)) y++;
              for (g = 0, S = m; S; S = kr(S)) g++;
              for (; 0 < y - g; ) (x = kr(x)), y--;
              for (; 0 < g - y; ) (m = kr(m)), g--;
              for (; y--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = kr(x)), (m = kr(m));
              }
              x = null;
            }
          else x = null;
          h !== null && tp(d, p, h, x, !1),
            v !== null && j !== null && tp(d, j, v, x, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ir(c) : window),
          (h = p.nodeName && p.nodeName.toLowerCase()),
          h === "select" || (h === "input" && p.type === "file"))
        )
          var T = cw;
        else if (Kf(p))
          if (Rg) T = hw;
          else {
            T = fw;
            var k = dw;
          }
        else
          (h = p.nodeName) &&
            h.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (T = pw);
        if (T && (T = T(e, c))) {
          Ng(d, T, n, u);
          break e;
        }
        k && k(e, p, c),
          e === "focusout" &&
            (k = p._wrapperState) &&
            k.controlled &&
            p.type === "number" &&
            du(p, "number", p.value);
      }
      switch (((k = c ? Ir(c) : window), e)) {
        case "focusin":
          (Kf(k) || k.contentEditable === "true") &&
            ((Lr = k), (Eu = c), (Yi = null));
          break;
        case "focusout":
          Yi = Eu = Lr = null;
          break;
        case "mousedown":
          Tu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Tu = !1), Jf(d, n, u);
          break;
        case "selectionchange":
          if (vw) break;
        case "keydown":
        case "keyup":
          Jf(d, n, u);
      }
      var w;
      if (Gc)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Mr
          ? bg(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Cg &&
          n.locale !== "ko" &&
          (Mr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Mr && (w = Pg())
            : ((Pn = u),
              (Vc = "value" in Pn ? Pn.value : Pn.textContent),
              (Mr = !0))),
        (k = Ho(c, P)),
        0 < k.length &&
          ((P = new Hf(P, e, null, n, u)),
          d.push({ event: P, listeners: k }),
          w ? (P.data = w) : ((w = kg(n)), w !== null && (P.data = w)))),
        (w = sw ? ow(e, n) : aw(e, n)) &&
          ((c = Ho(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Hf("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = w)));
    }
    zg(d, t);
  });
}
function hs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ho(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = as(e, n)),
      s != null && r.unshift(hs(e, s, i)),
      (s = as(e, t)),
      s != null && r.push(hs(e, s, i))),
      (e = e.return);
  }
  return r;
}
function kr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tp(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = as(n, s)), l != null && o.unshift(hs(n, l, a)))
        : i || ((l = as(n, s)), l != null && o.push(hs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Sw = /\r\n?/g,
  jw = /\u0000|\uFFFD/g;
function np(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Sw,
      `
`
    )
    .replace(jw, "");
}
function so(e, t, n) {
  if (((t = np(t)), np(e) !== t && n)) throw Error(_(425));
}
function $o() {}
var Fu = null,
  Pu = null;
function Cu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var bu = typeof setTimeout == "function" ? setTimeout : void 0,
  Ew = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rp = typeof Promise == "function" ? Promise : void 0,
  Tw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rp < "u"
      ? function (e) {
          return rp.resolve(null).then(e).catch(Fw);
        }
      : bu;
function Fw(e) {
  setTimeout(function () {
    throw e;
  });
}
function vl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), cs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  cs(t);
}
function An(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ip(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pi = Math.random().toString(36).slice(2),
  Gt = "__reactFiber$" + pi,
  ms = "__reactProps$" + pi,
  cn = "__reactContainer$" + pi,
  ku = "__reactEvents$" + pi,
  Pw = "__reactListeners$" + pi,
  Cw = "__reactHandles$" + pi;
function rr(e) {
  var t = e[Gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[cn] || n[Gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ip(e); e !== null; ) {
          if ((n = e[Gt])) return n;
          e = ip(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ls(e) {
  return (
    (e = e[Gt] || e[cn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Ca(e) {
  return e[ms] || null;
}
var Nu = [],
  Dr = -1;
function Gn(e) {
  return { current: e };
}
function ce(e) {
  0 > Dr || ((e.current = Nu[Dr]), (Nu[Dr] = null), Dr--);
}
function le(e, t) {
  Dr++, (Nu[Dr] = e.current), (e.current = t);
}
var Bn = {},
  We = Gn(Bn),
  tt = Gn(!1),
  pr = Bn;
function ni(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function nt(e) {
  return (e = e.childContextTypes), e != null;
}
function Go() {
  ce(tt), ce(We);
}
function sp(e, t, n) {
  if (We.current !== Bn) throw Error(_(168));
  le(We, t), le(tt, n);
}
function Hg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(_(108, dx(e) || "Unknown", i));
  return xe({}, n, r);
}
function Wo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bn),
    (pr = We.current),
    le(We, e),
    le(tt, tt.current),
    !0
  );
}
function op(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = Hg(e, t, pr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(tt),
      ce(We),
      le(We, e))
    : ce(tt),
    le(tt, n);
}
var Qt = null,
  ba = !1,
  yl = !1;
function $g(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e);
}
function bw(e) {
  (ba = !0), $g(e);
}
function Wn() {
  if (!yl && Qt !== null) {
    yl = !0;
    var e = 0,
      t = oe;
    try {
      var n = Qt;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qt = null), (ba = !1);
    } catch (i) {
      throw (Qt !== null && (Qt = Qt.slice(e + 1)), mg(Uc, Wn), i);
    } finally {
      (oe = t), (yl = !1);
    }
  }
  return null;
}
var Ur = [],
  Or = 0,
  Ko = null,
  Yo = 0,
  jt = [],
  Et = 0,
  hr = null,
  Jt = 1,
  Zt = "";
function Jn(e, t) {
  (Ur[Or++] = Yo), (Ur[Or++] = Ko), (Ko = e), (Yo = t);
}
function Gg(e, t, n) {
  (jt[Et++] = Jt), (jt[Et++] = Zt), (jt[Et++] = hr), (hr = e);
  var r = Jt;
  e = Zt;
  var i = 32 - It(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - It(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Jt = (1 << (32 - It(t) + i)) | (n << i) | r),
      (Zt = s + e);
  } else (Jt = (1 << s) | (n << i) | r), (Zt = e);
}
function Kc(e) {
  e.return !== null && (Jn(e, 1), Gg(e, 1, 0));
}
function Yc(e) {
  for (; e === Ko; )
    (Ko = Ur[--Or]), (Ur[Or] = null), (Yo = Ur[--Or]), (Ur[Or] = null);
  for (; e === hr; )
    (hr = jt[--Et]),
      (jt[Et] = null),
      (Zt = jt[--Et]),
      (jt[Et] = null),
      (Jt = jt[--Et]),
      (jt[Et] = null);
}
var dt = null,
  ct = null,
  pe = !1,
  _t = null;
function Wg(e, t) {
  var n = Ft(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ap(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (dt = e), (ct = An(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (dt = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hr !== null ? { id: Jt, overflow: Zt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (dt = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Au(e) {
  if (pe) {
    var t = ct;
    if (t) {
      var n = t;
      if (!ap(e, t)) {
        if (Ru(e)) throw Error(_(418));
        t = An(n.nextSibling);
        var r = dt;
        t && ap(e, t)
          ? Wg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (dt = e));
      }
    } else {
      if (Ru(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (dt = e);
    }
  }
}
function lp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  dt = e;
}
function oo(e) {
  if (e !== dt) return !1;
  if (!pe) return lp(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cu(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (Ru(e)) throw (Kg(), Error(_(418)));
    for (; t; ) Wg(e, t), (t = An(t.nextSibling));
  }
  if ((lp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = An(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = dt ? An(e.stateNode.nextSibling) : null;
  return !0;
}
function Kg() {
  for (var e = ct; e; ) e = An(e.nextSibling);
}
function ri() {
  (ct = dt = null), (pe = !1);
}
function Xc(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
var kw = pn.ReactCurrentBatchConfig;
function Ri(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function ao(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function up(e) {
  var t = e._init;
  return t(e._payload);
}
function Yg(e) {
  function t(m, y) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [y]), (m.flags |= 16)) : g.push(y);
    }
  }
  function n(m, y) {
    if (!e) return null;
    for (; y !== null; ) t(m, y), (y = y.sibling);
    return null;
  }
  function r(m, y) {
    for (m = new Map(); y !== null; )
      y.key !== null ? m.set(y.key, y) : m.set(y.index, y), (y = y.sibling);
    return m;
  }
  function i(m, y) {
    return (m = In(m, y)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, y, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < y ? ((m.flags |= 2), y) : g)
            : ((m.flags |= 2), y))
        : ((m.flags |= 1048576), y)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, y, g, S) {
    return y === null || y.tag !== 6
      ? ((y = Fl(g, m.mode, S)), (y.return = m), y)
      : ((y = i(y, g)), (y.return = m), y);
  }
  function l(m, y, g, S) {
    var T = g.type;
    return T === Ar
      ? u(m, y, g.props.children, S, g.key)
      : y !== null &&
        (y.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === Sn &&
            up(T) === y.type))
      ? ((S = i(y, g.props)), (S.ref = Ri(m, y, g)), (S.return = m), S)
      : ((S = ko(g.type, g.key, g.props, null, m.mode, S)),
        (S.ref = Ri(m, y, g)),
        (S.return = m),
        S);
  }
  function c(m, y, g, S) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== g.containerInfo ||
      y.stateNode.implementation !== g.implementation
      ? ((y = Pl(g, m.mode, S)), (y.return = m), y)
      : ((y = i(y, g.children || [])), (y.return = m), y);
  }
  function u(m, y, g, S, T) {
    return y === null || y.tag !== 7
      ? ((y = cr(g, m.mode, S, T)), (y.return = m), y)
      : ((y = i(y, g)), (y.return = m), y);
  }
  function d(m, y, g) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Fl("" + y, m.mode, g)), (y.return = m), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case qs:
          return (
            (g = ko(y.type, y.key, y.props, null, m.mode, g)),
            (g.ref = Ri(m, null, y)),
            (g.return = m),
            g
          );
        case Rr:
          return (y = Pl(y, m.mode, g)), (y.return = m), y;
        case Sn:
          var S = y._init;
          return d(m, S(y._payload), g);
      }
      if (Bi(y) || Pi(y))
        return (y = cr(y, m.mode, g, null)), (y.return = m), y;
      ao(m, y);
    }
    return null;
  }
  function p(m, y, g, S) {
    var T = y !== null ? y.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return T !== null ? null : a(m, y, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case qs:
          return g.key === T ? l(m, y, g, S) : null;
        case Rr:
          return g.key === T ? c(m, y, g, S) : null;
        case Sn:
          return (T = g._init), p(m, y, T(g._payload), S);
      }
      if (Bi(g) || Pi(g)) return T !== null ? null : u(m, y, g, S, null);
      ao(m, g);
    }
    return null;
  }
  function h(m, y, g, S, T) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(g) || null), a(y, m, "" + S, T);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case qs:
          return (m = m.get(S.key === null ? g : S.key) || null), l(y, m, S, T);
        case Rr:
          return (m = m.get(S.key === null ? g : S.key) || null), c(y, m, S, T);
        case Sn:
          var k = S._init;
          return h(m, y, g, k(S._payload), T);
      }
      if (Bi(S) || Pi(S)) return (m = m.get(g) || null), u(y, m, S, T, null);
      ao(y, S);
    }
    return null;
  }
  function v(m, y, g, S) {
    for (
      var T = null, k = null, w = y, P = (y = 0), R = null;
      w !== null && P < g.length;
      P++
    ) {
      w.index > P ? ((R = w), (w = null)) : (R = w.sibling);
      var C = p(m, w, g[P], S);
      if (C === null) {
        w === null && (w = R);
        break;
      }
      e && w && C.alternate === null && t(m, w),
        (y = s(C, y, P)),
        k === null ? (T = C) : (k.sibling = C),
        (k = C),
        (w = R);
    }
    if (P === g.length) return n(m, w), pe && Jn(m, P), T;
    if (w === null) {
      for (; P < g.length; P++)
        (w = d(m, g[P], S)),
          w !== null &&
            ((y = s(w, y, P)), k === null ? (T = w) : (k.sibling = w), (k = w));
      return pe && Jn(m, P), T;
    }
    for (w = r(m, w); P < g.length; P++)
      (R = h(w, m, P, g[P], S)),
        R !== null &&
          (e && R.alternate !== null && w.delete(R.key === null ? P : R.key),
          (y = s(R, y, P)),
          k === null ? (T = R) : (k.sibling = R),
          (k = R));
    return (
      e &&
        w.forEach(function (L) {
          return t(m, L);
        }),
      pe && Jn(m, P),
      T
    );
  }
  function x(m, y, g, S) {
    var T = Pi(g);
    if (typeof T != "function") throw Error(_(150));
    if (((g = T.call(g)), g == null)) throw Error(_(151));
    for (
      var k = (T = null), w = y, P = (y = 0), R = null, C = g.next();
      w !== null && !C.done;
      P++, C = g.next()
    ) {
      w.index > P ? ((R = w), (w = null)) : (R = w.sibling);
      var L = p(m, w, C.value, S);
      if (L === null) {
        w === null && (w = R);
        break;
      }
      e && w && L.alternate === null && t(m, w),
        (y = s(L, y, P)),
        k === null ? (T = L) : (k.sibling = L),
        (k = L),
        (w = R);
    }
    if (C.done) return n(m, w), pe && Jn(m, P), T;
    if (w === null) {
      for (; !C.done; P++, C = g.next())
        (C = d(m, C.value, S)),
          C !== null &&
            ((y = s(C, y, P)), k === null ? (T = C) : (k.sibling = C), (k = C));
      return pe && Jn(m, P), T;
    }
    for (w = r(m, w); !C.done; P++, C = g.next())
      (C = h(w, m, P, C.value, S)),
        C !== null &&
          (e && C.alternate !== null && w.delete(C.key === null ? P : C.key),
          (y = s(C, y, P)),
          k === null ? (T = C) : (k.sibling = C),
          (k = C));
    return (
      e &&
        w.forEach(function (O) {
          return t(m, O);
        }),
      pe && Jn(m, P),
      T
    );
  }
  function j(m, y, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Ar &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case qs:
          e: {
            for (var T = g.key, k = y; k !== null; ) {
              if (k.key === T) {
                if (((T = g.type), T === Ar)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (y = i(k, g.props.children)),
                      (y.return = m),
                      (m = y);
                    break e;
                  }
                } else if (
                  k.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Sn &&
                    up(T) === k.type)
                ) {
                  n(m, k.sibling),
                    (y = i(k, g.props)),
                    (y.ref = Ri(m, k, g)),
                    (y.return = m),
                    (m = y);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            g.type === Ar
              ? ((y = cr(g.props.children, m.mode, S, g.key)),
                (y.return = m),
                (m = y))
              : ((S = ko(g.type, g.key, g.props, null, m.mode, S)),
                (S.ref = Ri(m, y, g)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case Rr:
          e: {
            for (k = g.key; y !== null; ) {
              if (y.key === k)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === g.containerInfo &&
                  y.stateNode.implementation === g.implementation
                ) {
                  n(m, y.sibling),
                    (y = i(y, g.children || [])),
                    (y.return = m),
                    (m = y);
                  break e;
                } else {
                  n(m, y);
                  break;
                }
              else t(m, y);
              y = y.sibling;
            }
            (y = Pl(g, m.mode, S)), (y.return = m), (m = y);
          }
          return o(m);
        case Sn:
          return (k = g._init), j(m, y, k(g._payload), S);
      }
      if (Bi(g)) return v(m, y, g, S);
      if (Pi(g)) return x(m, y, g, S);
      ao(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        y !== null && y.tag === 6
          ? (n(m, y.sibling), (y = i(y, g)), (y.return = m), (m = y))
          : (n(m, y), (y = Fl(g, m.mode, S)), (y.return = m), (m = y)),
        o(m))
      : n(m, y);
  }
  return j;
}
var ii = Yg(!0),
  Xg = Yg(!1),
  Xo = Gn(null),
  qo = null,
  Br = null,
  qc = null;
function Qc() {
  qc = Br = qo = null;
}
function Jc(e) {
  var t = Xo.current;
  ce(Xo), (e._currentValue = t);
}
function Mu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jr(e, t) {
  (qo = e),
    (qc = Br = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (et = !0), (e.firstContext = null));
}
function bt(e) {
  var t = e._currentValue;
  if (qc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Br === null)) {
      if (qo === null) throw Error(_(308));
      (Br = e), (qo.dependencies = { lanes: 0, firstContext: e });
    } else Br = Br.next = e;
  return t;
}
var ir = null;
function Zc(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
function qg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Zc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    dn(e, r)
  );
}
function dn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jn = !1;
function ed(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function nn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      dn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Zc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    dn(e, n)
  );
}
function Eo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oc(e, n);
  }
}
function cp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qo(e, t, n, r) {
  var i = e.updateQueue;
  jn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== o &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (u = c = l = null), (a = s);
    do {
      var p = a.lane,
        h = a.eventTime;
      if ((r & p) === p) {
        u !== null &&
          (u = u.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((p = t), (h = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                d = v.call(h, d, p);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (p = typeof v == "function" ? v.call(h, d, p) : v),
                p == null)
              )
                break e;
              d = xe({}, d, p);
              break e;
            case 2:
              jn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (h = {
          eventTime: h,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = h), (l = d)) : (u = u.next = h),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (gr |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function dp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(_(191, i));
        i.call(r);
      }
    }
}
var _s = {},
  Kt = Gn(_s),
  gs = Gn(_s),
  vs = Gn(_s);
function sr(e) {
  if (e === _s) throw Error(_(174));
  return e;
}
function td(e, t) {
  switch ((le(vs, t), le(gs, e), le(Kt, _s), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pu(t, e));
  }
  ce(Kt), le(Kt, t);
}
function si() {
  ce(Kt), ce(gs), ce(vs);
}
function Jg(e) {
  sr(vs.current);
  var t = sr(Kt.current),
    n = pu(t, e.type);
  t !== n && (le(gs, e), le(Kt, n));
}
function nd(e) {
  gs.current === e && (ce(Kt), ce(gs));
}
var ge = Gn(0);
function Jo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xl = [];
function rd() {
  for (var e = 0; e < xl.length; e++)
    xl[e]._workInProgressVersionPrimary = null;
  xl.length = 0;
}
var To = pn.ReactCurrentDispatcher,
  wl = pn.ReactCurrentBatchConfig,
  mr = 0,
  ye = null,
  Pe = null,
  Ne = null,
  Zo = !1,
  Xi = !1,
  ys = 0,
  Nw = 0;
function Be() {
  throw Error(_(321));
}
function id(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ot(e[n], t[n])) return !1;
  return !0;
}
function sd(e, t, n, r, i, s) {
  if (
    ((mr = s),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (To.current = e === null || e.memoizedState === null ? Lw : _w),
    (e = n(r, i)),
    Xi)
  ) {
    s = 0;
    do {
      if (((Xi = !1), (ys = 0), 25 <= s)) throw Error(_(301));
      (s += 1),
        (Ne = Pe = null),
        (t.updateQueue = null),
        (To.current = Iw),
        (e = n(r, i));
    } while (Xi);
  }
  if (
    ((To.current = ea),
    (t = Pe !== null && Pe.next !== null),
    (mr = 0),
    (Ne = Pe = ye = null),
    (Zo = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function od() {
  var e = ys !== 0;
  return (ys = 0), e;
}
function $t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function kt() {
  if (Pe === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Ne === null ? ye.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (Pe = e);
  else {
    if (e === null) throw Error(_(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function xs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sl(e) {
  var t = kt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      c = s;
    do {
      var u = c.lane;
      if ((mr & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (ye.lanes |= u),
          (gr |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (o = r) : (l.next = a),
      Ot(r, t.memoizedState) || (et = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ye.lanes |= s), (gr |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function jl(e) {
  var t = kt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ot(s, t.memoizedState) || (et = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Zg() {}
function ev(e, t) {
  var n = ye,
    r = kt(),
    i = t(),
    s = !Ot(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (et = !0)),
    (r = r.queue),
    ad(rv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ws(9, nv.bind(null, n, r, i, t), void 0, null),
      Re === null)
    )
      throw Error(_(349));
    mr & 30 || tv(n, t, i);
  }
  return i;
}
function tv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function nv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), iv(t) && sv(e);
}
function rv(e, t, n) {
  return n(function () {
    iv(t) && sv(e);
  });
}
function iv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch {
    return !0;
  }
}
function sv(e) {
  var t = dn(e, 1);
  t !== null && Dt(t, e, 1, -1);
}
function fp(e) {
  var t = $t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Mw.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function ws(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ov() {
  return kt().memoizedState;
}
function Fo(e, t, n, r) {
  var i = $t();
  (ye.flags |= e),
    (i.memoizedState = ws(1 | t, n, void 0, r === void 0 ? null : r));
}
function ka(e, t, n, r) {
  var i = kt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Pe !== null) {
    var o = Pe.memoizedState;
    if (((s = o.destroy), r !== null && id(r, o.deps))) {
      i.memoizedState = ws(t, n, s, r);
      return;
    }
  }
  (ye.flags |= e), (i.memoizedState = ws(1 | t, n, s, r));
}
function pp(e, t) {
  return Fo(8390656, 8, e, t);
}
function ad(e, t) {
  return ka(2048, 8, e, t);
}
function av(e, t) {
  return ka(4, 2, e, t);
}
function lv(e, t) {
  return ka(4, 4, e, t);
}
function uv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ka(4, 4, uv.bind(null, t, e), n)
  );
}
function ld() {}
function dv(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && id(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fv(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && id(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pv(e, t, n) {
  return mr & 21
    ? (Ot(n, t) || ((n = yg()), (ye.lanes |= n), (gr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function Rw(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = wl.transition;
  wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (wl.transition = r);
  }
}
function hv() {
  return kt().memoizedState;
}
function Aw(e, t, n) {
  var r = _n(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mv(e))
  )
    gv(t, n);
  else if (((n = qg(e, t, n, r)), n !== null)) {
    var i = qe();
    Dt(n, e, r, i), vv(n, t, r);
  }
}
function Mw(e, t, n) {
  var r = _n(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mv(e)) gv(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ot(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Zc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = qg(e, t, i, r)),
      n !== null && ((i = qe()), Dt(n, e, r, i), vv(n, t, r));
  }
}
function mv(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function gv(e, t) {
  Xi = Zo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function vv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oc(e, n);
  }
}
var ea = {
    readContext: bt,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1,
  },
  Lw = {
    readContext: bt,
    useCallback: function (e, t) {
      return ($t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: bt,
    useEffect: pp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fo(4194308, 4, uv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Aw.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fp,
    useDebugValue: ld,
    useDeferredValue: function (e) {
      return ($t().memoizedState = e);
    },
    useTransition: function () {
      var e = fp(!1),
        t = e[0];
      return (e = Rw.bind(null, e[1])), ($t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        i = $t();
      if (pe) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Re === null)) throw Error(_(349));
        mr & 30 || tv(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        pp(rv.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ws(9, nv.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $t(),
        t = Re.identifierPrefix;
      if (pe) {
        var n = Zt,
          r = Jt;
        (n = (r & ~(1 << (32 - It(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ys++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Nw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _w = {
    readContext: bt,
    useCallback: dv,
    useContext: bt,
    useEffect: ad,
    useImperativeHandle: cv,
    useInsertionEffect: av,
    useLayoutEffect: lv,
    useMemo: fv,
    useReducer: Sl,
    useRef: ov,
    useState: function () {
      return Sl(xs);
    },
    useDebugValue: ld,
    useDeferredValue: function (e) {
      var t = kt();
      return pv(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Sl(xs)[0],
        t = kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zg,
    useSyncExternalStore: ev,
    useId: hv,
    unstable_isNewReconciler: !1,
  },
  Iw = {
    readContext: bt,
    useCallback: dv,
    useContext: bt,
    useEffect: ad,
    useImperativeHandle: cv,
    useInsertionEffect: av,
    useLayoutEffect: lv,
    useMemo: fv,
    useReducer: jl,
    useRef: ov,
    useState: function () {
      return jl(xs);
    },
    useDebugValue: ld,
    useDeferredValue: function (e) {
      var t = kt();
      return Pe === null ? (t.memoizedState = e) : pv(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(xs)[0],
        t = kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zg,
    useSyncExternalStore: ev,
    useId: hv,
    unstable_isNewReconciler: !1,
  };
function At(e, t) {
  if (e && e.defaultProps) {
    (t = xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Lu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Na = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      i = _n(e),
      s = nn(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Mn(e, s, i)),
      t !== null && (Dt(t, e, i, r), Eo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      i = _n(e),
      s = nn(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Mn(e, s, i)),
      t !== null && (Dt(t, e, i, r), Eo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = qe(),
      r = _n(e),
      i = nn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Mn(e, i, r)),
      t !== null && (Dt(t, e, r, n), Eo(t, e, r));
  },
};
function hp(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fs(n, r) || !fs(i, s)
      : !0
  );
}
function yv(e, t, n) {
  var r = !1,
    i = Bn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = bt(s))
      : ((i = nt(t) ? pr : We.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ni(e, i) : Bn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Na),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function mp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Na.enqueueReplaceState(t, t.state, null);
}
function _u(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ed(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = bt(s))
    : ((s = nt(t) ? pr : We.current), (i.context = ni(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Lu(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Na.enqueueReplaceState(i, i.state, null),
      Qo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function oi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += cx(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function El(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Iu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Dw = typeof WeakMap == "function" ? WeakMap : Map;
function xv(e, t, n) {
  (n = nn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      na || ((na = !0), (Wu = r)), Iu(e, t);
    }),
    n
  );
}
function wv(e, t, n) {
  (n = nn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Iu(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Iu(e, t),
          typeof r != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function gp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Qw.bind(null, e, t, n)), t.then(e, e));
}
function vp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nn(-1, 1)), (t.tag = 2), Mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Uw = pn.ReactCurrentOwner,
  et = !1;
function Xe(e, t, n, r) {
  t.child = e === null ? Xg(t, null, n, r) : ii(t, e.child, n, r);
}
function xp(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Jr(t, i),
    (r = sd(e, t, n, r, s, i)),
    (n = od()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        fn(e, t, i))
      : (pe && n && Kc(t), (t.flags |= 1), Xe(e, t, r, i), t.child)
  );
}
function wp(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !gd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Sv(e, t, s, r, i))
      : ((e = ko(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fs), n(o, r) && e.ref === t.ref)
    )
      return fn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = In(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sv(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (fs(s, r) && e.ref === t.ref)
      if (((et = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (et = !0);
      else return (t.lanes = e.lanes), fn(e, t, i);
  }
  return Du(e, t, n, r, i);
}
function jv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(Vr, lt),
        (lt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(Vr, lt),
          (lt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        le(Vr, lt),
        (lt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(Vr, lt),
      (lt |= r);
  return Xe(e, t, i, n), t.child;
}
function Ev(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Du(e, t, n, r, i) {
  var s = nt(n) ? pr : We.current;
  return (
    (s = ni(t, s)),
    Jr(t, i),
    (n = sd(e, t, n, r, s, i)),
    (r = od()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        fn(e, t, i))
      : (pe && r && Kc(t), (t.flags |= 1), Xe(e, t, n, i), t.child)
  );
}
function Sp(e, t, n, r, i) {
  if (nt(n)) {
    var s = !0;
    Wo(t);
  } else s = !1;
  if ((Jr(t, i), t.stateNode === null))
    Po(e, t), yv(t, n, r), _u(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = bt(c))
      : ((c = nt(n) ? pr : We.current), (c = ni(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && mp(t, o, r, c)),
      (jn = !1);
    var p = t.memoizedState;
    (o.state = p),
      Qo(t, r, o, i),
      (l = t.memoizedState),
      a !== r || p !== l || tt.current || jn
        ? (typeof u == "function" && (Lu(t, n, u, r), (l = t.memoizedState)),
          (a = jn || hp(t, n, a, r, p, l, c))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Qg(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : At(t.type, a)),
      (o.props = c),
      (d = t.pendingProps),
      (p = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = bt(l))
        : ((l = nt(n) ? pr : We.current), (l = ni(t, l)));
    var h = n.getDerivedStateFromProps;
    (u =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || p !== l) && mp(t, o, r, l)),
      (jn = !1),
      (p = t.memoizedState),
      (o.state = p),
      Qo(t, r, o, i);
    var v = t.memoizedState;
    a !== d || p !== v || tt.current || jn
      ? (typeof h == "function" && (Lu(t, n, h, r), (v = t.memoizedState)),
        (c = jn || hp(t, n, c, r, p, v, l) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Uu(e, t, n, r, s, i);
}
function Uu(e, t, n, r, i, s) {
  Ev(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && op(t, n, !1), fn(e, t, s);
  (r = t.stateNode), (Uw.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ii(t, e.child, null, s)), (t.child = ii(t, null, a, s)))
      : Xe(e, t, a, s),
    (t.memoizedState = r.state),
    i && op(t, n, !0),
    t.child
  );
}
function Tv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sp(e, t.context, !1),
    td(e, t.containerInfo);
}
function jp(e, t, n, r, i) {
  return ri(), Xc(i), (t.flags |= 256), Xe(e, t, n, r), t.child;
}
var Ou = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fv(e, t, n) {
  var r = t.pendingProps,
    i = ge.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    le(ge, i & 1),
    e === null)
  )
    return (
      Au(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ma(o, r, 0, null)),
              (e = cr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Bu(n)),
              (t.memoizedState = Ou),
              e)
            : ud(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Ow(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = In(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = In(a, s)) : ((s = cr(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Bu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ou),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = In(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ud(e, t) {
  return (
    (t = Ma({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function lo(e, t, n, r) {
  return (
    r !== null && Xc(r),
    ii(t, e.child, null, n),
    (e = ud(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ow(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = El(Error(_(422)))), lo(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Ma({ mode: "visible", children: r.children }, i, 0, null)),
        (s = cr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && ii(t, e.child, null, o),
        (t.child.memoizedState = Bu(o)),
        (t.memoizedState = Ou),
        s);
  if (!(t.mode & 1)) return lo(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(_(419))), (r = El(s, r, void 0)), lo(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), et || a)) {
    if (((r = Re), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), dn(e, i), Dt(r, e, i, -1));
    }
    return md(), (r = El(Error(_(421)))), lo(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (ct = An(i.nextSibling)),
      (dt = t),
      (pe = !0),
      (_t = null),
      e !== null &&
        ((jt[Et++] = Jt),
        (jt[Et++] = Zt),
        (jt[Et++] = hr),
        (Jt = e.id),
        (Zt = e.overflow),
        (hr = t)),
      (t = ud(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ep(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mu(e.return, t, n);
}
function Tl(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Pv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Xe(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ep(e, n, t);
        else if (e.tag === 19) Ep(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((le(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Jo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Tl(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Jo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Tl(t, !0, n, null, s);
        break;
      case "together":
        Tl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Po(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bw(e, t, n) {
  switch (t.tag) {
    case 3:
      Tv(t), ri();
      break;
    case 5:
      Jg(t);
      break;
    case 1:
      nt(t.type) && Wo(t);
      break;
    case 4:
      td(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      le(Xo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Fv(e, t, n)
          : (le(ge, ge.current & 1),
            (e = fn(e, t, n)),
            e !== null ? e.sibling : null);
      le(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        le(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), jv(e, t, n);
  }
  return fn(e, t, n);
}
var Cv, zu, bv, kv;
Cv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zu = function () {};
bv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), sr(Kt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = uu(e, i)), (r = uu(e, r)), (s = []);
        break;
      case "select":
        (i = xe({}, i, { value: void 0 })),
          (r = xe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = fu(e, i)), (r = fu(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $o);
    }
    hu(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ss.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ss.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && ue("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
kv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ai(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zw(e, t, n) {
  var r = t.pendingProps;
  switch ((Yc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ze(t), null;
    case 1:
      return nt(t.type) && Go(), ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        si(),
        ce(tt),
        ce(We),
        rd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (oo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), _t !== null && (Xu(_t), (_t = null)))),
        zu(e, t),
        ze(t),
        null
      );
    case 5:
      nd(t);
      var i = sr(vs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        bv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return ze(t), null;
        }
        if (((e = sr(Kt.current)), oo(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Gt] = t), (r[ms] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Vi.length; i++) ue(Vi[i], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              Af(r, s), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              Lf(r, s), ue("invalid", r);
          }
          hu(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      so(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      so(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ss.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              Qs(r), Mf(r, s, !0);
              break;
            case "textarea":
              Qs(r), _f(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = $o);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = rg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Gt] = t),
            (e[ms] = r),
            Cv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = mu(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Vi.length; i++) ue(Vi[i], e);
                i = r;
                break;
              case "source":
                ue("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (i = r);
                break;
              case "details":
                ue("toggle", e), (i = r);
                break;
              case "input":
                Af(e, r), (i = uu(e, r)), ue("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = xe({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                Lf(e, r), (i = fu(e, r)), ue("invalid", e);
                break;
              default:
                i = r;
            }
            hu(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? og(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && ig(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && os(e, l)
                    : typeof l == "number" && os(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (ss.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && ue("scroll", e)
                      : l != null && Mc(e, s, l, o));
              }
            switch (n) {
              case "input":
                Qs(e), Mf(e, r, !1);
                break;
              case "textarea":
                Qs(e), _f(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + On(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Yr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Yr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = $o);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) kv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = sr(vs.current)), sr(Kt.current), oo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Gt] = t),
            (s = r.nodeValue !== n) && ((e = dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                so(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  so(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Gt] = t),
            (t.stateNode = r);
      }
      return ze(t), null;
    case 13:
      if (
        (ce(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && ct !== null && t.mode & 1 && !(t.flags & 128))
          Kg(), ri(), (t.flags |= 98560), (s = !1);
        else if (((s = oo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(_(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(_(317));
            s[Gt] = t;
          } else
            ri(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ze(t), (s = !1);
        } else _t !== null && (Xu(_t), (_t = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Ce === 0 && (Ce = 3) : md())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null);
    case 4:
      return (
        si(), zu(e, t), e === null && ps(t.stateNode.containerInfo), ze(t), null
      );
    case 10:
      return Jc(t.type._context), ze(t), null;
    case 17:
      return nt(t.type) && Go(), ze(t), null;
    case 19:
      if ((ce(ge), (s = t.memoizedState), s === null)) return ze(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Ai(s, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Jo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ai(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            je() > ai &&
            ((t.flags |= 128), (r = !0), Ai(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ai(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !pe)
            )
              return ze(t), null;
          } else
            2 * je() - s.renderingStartTime > ai &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ai(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = je()),
          (t.sibling = null),
          (n = ge.current),
          le(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null);
    case 22:
    case 23:
      return (
        hd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? lt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Vw(e, t) {
  switch ((Yc(t), t.tag)) {
    case 1:
      return (
        nt(t.type) && Go(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        si(),
        ce(tt),
        ce(We),
        rd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return nd(t), null;
    case 13:
      if (
        (ce(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        ri();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(ge), null;
    case 4:
      return si(), null;
    case 10:
      return Jc(t.type._context), null;
    case 22:
    case 23:
      return hd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var uo = !1,
  He = !1,
  Hw = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function zr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function Vu(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Tp = !1;
function $w(e, t) {
  if (((Fu = zo), (e = Lg()), Wc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (p = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++c === i && (a = o),
                p === s && ++u === r && (l = o),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pu = { focusedElem: e, selectionRange: n }, zo = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    j = v.memoizedState,
                    m = t.stateNode,
                    y = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : At(t.type, x),
                      j
                    );
                  m.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (S) {
          we(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (v = Tp), (Tp = !1), v;
}
function qi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Vu(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ra(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Hu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Nv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Nv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Gt], delete t[ms], delete t[ku], delete t[Pw], delete t[Cw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $o));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($u(e, t, n), e = e.sibling; e !== null; ) $u(e, t, n), (e = e.sibling);
}
function Gu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gu(e, t, n), e = e.sibling; e !== null; ) Gu(e, t, n), (e = e.sibling);
}
var Ie = null,
  Mt = !1;
function vn(e, t, n) {
  for (n = n.child; n !== null; ) Av(e, t, n), (n = n.sibling);
}
function Av(e, t, n) {
  if (Wt && typeof Wt.onCommitFiberUnmount == "function")
    try {
      Wt.onCommitFiberUnmount(Ea, n);
    } catch {}
  switch (n.tag) {
    case 5:
      He || zr(n, t);
    case 6:
      var r = Ie,
        i = Mt;
      (Ie = null),
        vn(e, t, n),
        (Ie = r),
        (Mt = i),
        Ie !== null &&
          (Mt
            ? ((e = Ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ie.removeChild(n.stateNode));
      break;
    case 18:
      Ie !== null &&
        (Mt
          ? ((e = Ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? vl(e.parentNode, n)
              : e.nodeType === 1 && vl(e, n),
            cs(e))
          : vl(Ie, n.stateNode));
      break;
    case 4:
      (r = Ie),
        (i = Mt),
        (Ie = n.stateNode.containerInfo),
        (Mt = !0),
        vn(e, t, n),
        (Ie = r),
        (Mt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !He &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Vu(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      vn(e, t, n);
      break;
    case 1:
      if (
        !He &&
        (zr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          we(n, t, a);
        }
      vn(e, t, n);
      break;
    case 21:
      vn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((He = (r = He) || n.memoizedState !== null), vn(e, t, n), (He = r))
        : vn(e, t, n);
      break;
    default:
      vn(e, t, n);
  }
}
function Pp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hw()),
      t.forEach(function (r) {
        var i = Zw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Rt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ie = a.stateNode), (Mt = !1);
              break e;
            case 3:
              (Ie = a.stateNode.containerInfo), (Mt = !0);
              break e;
            case 4:
              (Ie = a.stateNode.containerInfo), (Mt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ie === null) throw Error(_(160));
        Av(s, o, i), (Ie = null), (Mt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        we(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mv(t, e), (t = t.sibling);
}
function Mv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Rt(t, e), Ht(e), r & 4)) {
        try {
          qi(3, e, e.return), Ra(3, e);
        } catch (x) {
          we(e, e.return, x);
        }
        try {
          qi(5, e, e.return);
        } catch (x) {
          we(e, e.return, x);
        }
      }
      break;
    case 1:
      Rt(t, e), Ht(e), r & 512 && n !== null && zr(n, n.return);
      break;
    case 5:
      if (
        (Rt(t, e),
        Ht(e),
        r & 512 && n !== null && zr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          os(i, "");
        } catch (x) {
          we(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && tg(i, s),
              mu(a, o);
            var c = mu(a, s);
            for (o = 0; o < l.length; o += 2) {
              var u = l[o],
                d = l[o + 1];
              u === "style"
                ? og(i, d)
                : u === "dangerouslySetInnerHTML"
                ? ig(i, d)
                : u === "children"
                ? os(i, d)
                : Mc(i, u, d, c);
            }
            switch (a) {
              case "input":
                cu(i, s);
                break;
              case "textarea":
                ng(i, s);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var h = s.value;
                h != null
                  ? Yr(i, !!s.multiple, h, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Yr(i, !!s.multiple, s.defaultValue, !0)
                      : Yr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ms] = s;
          } catch (x) {
            we(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Rt(t, e), Ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          we(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Rt(t, e), Ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          cs(t.containerInfo);
        } catch (x) {
          we(e, e.return, x);
        }
      break;
    case 4:
      Rt(t, e), Ht(e);
      break;
    case 13:
      Rt(t, e),
        Ht(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (fd = je())),
        r & 4 && Pp(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((He = (c = He) || u), Rt(t, e), (He = c)) : Rt(t, e),
        Ht(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (z = e, u = e.child; u !== null; ) {
            for (d = z = u; z !== null; ) {
              switch (((p = z), (h = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qi(4, p, p.return);
                  break;
                case 1:
                  zr(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      we(r, n, x);
                    }
                  }
                  break;
                case 5:
                  zr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    bp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = p), (z = h)) : bp(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (i = d.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = sg("display", o)));
              } catch (x) {
                we(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (x) {
                we(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Rt(t, e), Ht(e), r & 4 && Pp(e);
      break;
    case 21:
      break;
    default:
      Rt(t, e), Ht(e);
  }
}
function Ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (os(i, ""), (r.flags &= -33));
          var s = Fp(e);
          Gu(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Fp(e);
          $u(e, a, o);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      we(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gw(e, t, n) {
  (z = e), Lv(e);
}
function Lv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var i = z,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || uo;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || He;
        a = uo;
        var c = He;
        if (((uo = o), (He = l) && !c))
          for (z = i; z !== null; )
            (o = z),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? kp(i)
                : l !== null
                ? ((l.return = o), (z = l))
                : kp(i);
        for (; s !== null; ) (z = s), Lv(s), (s = s.sibling);
        (z = i), (uo = a), (He = c);
      }
      Cp(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (z = s)) : Cp(e);
  }
}
function Cp(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || Ra(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !He)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : At(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && dp(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                dp(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && cs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        He || (t.flags & 512 && Hu(t));
      } catch (p) {
        we(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function bp(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function kp(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ra(4, t);
          } catch (l) {
            we(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              we(t, i, l);
            }
          }
          var s = t.return;
          try {
            Hu(t);
          } catch (l) {
            we(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Hu(t);
          } catch (l) {
            we(t, o, l);
          }
      }
    } catch (l) {
      we(t, t.return, l);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var Ww = Math.ceil,
  ta = pn.ReactCurrentDispatcher,
  cd = pn.ReactCurrentOwner,
  Pt = pn.ReactCurrentBatchConfig,
  ie = 0,
  Re = null,
  Fe = null,
  Ue = 0,
  lt = 0,
  Vr = Gn(0),
  Ce = 0,
  Ss = null,
  gr = 0,
  Aa = 0,
  dd = 0,
  Qi = null,
  Ze = null,
  fd = 0,
  ai = 1 / 0,
  qt = null,
  na = !1,
  Wu = null,
  Ln = null,
  co = !1,
  Cn = null,
  ra = 0,
  Ji = 0,
  Ku = null,
  Co = -1,
  bo = 0;
function qe() {
  return ie & 6 ? je() : Co !== -1 ? Co : (Co = je());
}
function _n(e) {
  return e.mode & 1
    ? ie & 2 && Ue !== 0
      ? Ue & -Ue
      : kw.transition !== null
      ? (bo === 0 && (bo = yg()), bo)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fg(e.type))),
        e)
    : 1;
}
function Dt(e, t, n, r) {
  if (50 < Ji) throw ((Ji = 0), (Ku = null), Error(_(185)));
  As(e, n, r),
    (!(ie & 2) || e !== Re) &&
      (e === Re && (!(ie & 2) && (Aa |= n), Ce === 4 && Fn(e, Ue)),
      rt(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((ai = je() + 500), ba && Wn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  kx(e, t);
  var r = Bo(e, e === Re ? Ue : 0);
  if (r === 0)
    n !== null && Uf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Uf(n), t === 1))
      e.tag === 0 ? bw(Np.bind(null, e)) : $g(Np.bind(null, e)),
        Tw(function () {
          !(ie & 6) && Wn();
        }),
        (n = null);
    else {
      switch (xg(r)) {
        case 1:
          n = Uc;
          break;
        case 4:
          n = gg;
          break;
        case 16:
          n = Oo;
          break;
        case 536870912:
          n = vg;
          break;
        default:
          n = Oo;
      }
      n = Vv(n, _v.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _v(e, t) {
  if (((Co = -1), (bo = 0), ie & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (Zr() && e.callbackNode !== n) return null;
  var r = Bo(e, e === Re ? Ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ia(e, r);
  else {
    t = r;
    var i = ie;
    ie |= 2;
    var s = Dv();
    (Re !== e || Ue !== t) && ((qt = null), (ai = je() + 500), ur(e, t));
    do
      try {
        Xw();
        break;
      } catch (a) {
        Iv(e, a);
      }
    while (!0);
    Qc(),
      (ta.current = s),
      (ie = i),
      Fe !== null ? (t = 0) : ((Re = null), (Ue = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = wu(e)), i !== 0 && ((r = i), (t = Yu(e, i)))), t === 1)
    )
      throw ((n = Ss), ur(e, 0), Fn(e, r), rt(e, je()), n);
    if (t === 6) Fn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Kw(i) &&
          ((t = ia(e, r)),
          t === 2 && ((s = wu(e)), s !== 0 && ((r = s), (t = Yu(e, s)))),
          t === 1))
      )
        throw ((n = Ss), ur(e, 0), Fn(e, r), rt(e, je()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Zn(e, Ze, qt);
          break;
        case 3:
          if (
            (Fn(e, r), (r & 130023424) === r && ((t = fd + 500 - je()), 10 < t))
          ) {
            if (Bo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              qe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bu(Zn.bind(null, e, Ze, qt), t);
            break;
          }
          Zn(e, Ze, qt);
          break;
        case 4:
          if ((Fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - It(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ww(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bu(Zn.bind(null, e, Ze, qt), r);
            break;
          }
          Zn(e, Ze, qt);
          break;
        case 5:
          Zn(e, Ze, qt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return rt(e, je()), e.callbackNode === n ? _v.bind(null, e) : null;
}
function Yu(e, t) {
  var n = Qi;
  return (
    e.current.memoizedState.isDehydrated && (ur(e, t).flags |= 256),
    (e = ia(e, t)),
    e !== 2 && ((t = Ze), (Ze = n), t !== null && Xu(t)),
    e
  );
}
function Xu(e) {
  Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
}
function Kw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ot(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Fn(e, t) {
  for (
    t &= ~dd,
      t &= ~Aa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - It(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Np(e) {
  if (ie & 6) throw Error(_(327));
  Zr();
  var t = Bo(e, 0);
  if (!(t & 1)) return rt(e, je()), null;
  var n = ia(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wu(e);
    r !== 0 && ((t = r), (n = Yu(e, r)));
  }
  if (n === 1) throw ((n = Ss), ur(e, 0), Fn(e, t), rt(e, je()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zn(e, Ze, qt),
    rt(e, je()),
    null
  );
}
function pd(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && ((ai = je() + 500), ba && Wn());
  }
}
function vr(e) {
  Cn !== null && Cn.tag === 0 && !(ie & 6) && Zr();
  var t = ie;
  ie |= 1;
  var n = Pt.transition,
    r = oe;
  try {
    if (((Pt.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (Pt.transition = n), (ie = t), !(ie & 6) && Wn();
  }
}
function hd() {
  (lt = Vr.current), ce(Vr);
}
function ur(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ew(n)), Fe !== null))
    for (n = Fe.return; n !== null; ) {
      var r = n;
      switch ((Yc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Go();
          break;
        case 3:
          si(), ce(tt), ce(We), rd();
          break;
        case 5:
          nd(r);
          break;
        case 4:
          si();
          break;
        case 13:
          ce(ge);
          break;
        case 19:
          ce(ge);
          break;
        case 10:
          Jc(r.type._context);
          break;
        case 22:
        case 23:
          hd();
      }
      n = n.return;
    }
  if (
    ((Re = e),
    (Fe = e = In(e.current, null)),
    (Ue = lt = t),
    (Ce = 0),
    (Ss = null),
    (dd = Aa = gr = 0),
    (Ze = Qi = null),
    ir !== null)
  ) {
    for (t = 0; t < ir.length; t++)
      if (((n = ir[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    ir = null;
  }
  return e;
}
function Iv(e, t) {
  do {
    var n = Fe;
    try {
      if ((Qc(), (To.current = ea), Zo)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Zo = !1;
      }
      if (
        ((mr = 0),
        (Ne = Pe = ye = null),
        (Xi = !1),
        (ys = 0),
        (cd.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (Ss = t), (Fe = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Ue),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = u.alternate;
            p
              ? ((u.updateQueue = p.updateQueue),
                (u.memoizedState = p.memoizedState),
                (u.lanes = p.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var h = vp(o);
          if (h !== null) {
            (h.flags &= -257),
              yp(h, o, a, s, t),
              h.mode & 1 && gp(s, c, t),
              (t = h),
              (l = c);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              gp(s, c, t), md();
              break e;
            }
            l = Error(_(426));
          }
        } else if (pe && a.mode & 1) {
          var j = vp(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              yp(j, o, a, s, t),
              Xc(oi(l, a));
            break e;
          }
        }
        (s = l = oi(l, a)),
          Ce !== 4 && (Ce = 2),
          Qi === null ? (Qi = [s]) : Qi.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = xv(s, l, t);
              cp(s, m);
              break e;
            case 1:
              a = l;
              var y = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Ln === null || !Ln.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = wv(s, a, t);
                cp(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ov(n);
    } catch (T) {
      (t = T), Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Dv() {
  var e = ta.current;
  return (ta.current = ea), e === null ? ea : e;
}
function md() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Re === null || (!(gr & 268435455) && !(Aa & 268435455)) || Fn(Re, Ue);
}
function ia(e, t) {
  var n = ie;
  ie |= 2;
  var r = Dv();
  (Re !== e || Ue !== t) && ((qt = null), ur(e, t));
  do
    try {
      Yw();
      break;
    } catch (i) {
      Iv(e, i);
    }
  while (!0);
  if ((Qc(), (ie = n), (ta.current = r), Fe !== null)) throw Error(_(261));
  return (Re = null), (Ue = 0), Ce;
}
function Yw() {
  for (; Fe !== null; ) Uv(Fe);
}
function Xw() {
  for (; Fe !== null && !wx(); ) Uv(Fe);
}
function Uv(e) {
  var t = zv(e.alternate, e, lt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ov(e) : (Fe = t),
    (cd.current = null);
}
function Ov(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Vw(n, t)), n !== null)) {
        (n.flags &= 32767), (Fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (Fe = null);
        return;
      }
    } else if (((n = zw(n, t, lt)), n !== null)) {
      Fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function Zn(e, t, n) {
  var r = oe,
    i = Pt.transition;
  try {
    (Pt.transition = null), (oe = 1), qw(e, t, n, r);
  } finally {
    (Pt.transition = i), (oe = r);
  }
  return null;
}
function qw(e, t, n, r) {
  do Zr();
  while (Cn !== null);
  if (ie & 6) throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Nx(e, s),
    e === Re && ((Fe = Re = null), (Ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      co ||
      ((co = !0),
      Vv(Oo, function () {
        return Zr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Pt.transition), (Pt.transition = null);
    var o = oe;
    oe = 1;
    var a = ie;
    (ie |= 4),
      (cd.current = null),
      $w(e, n),
      Mv(n, e),
      gw(Pu),
      (zo = !!Fu),
      (Pu = Fu = null),
      (e.current = n),
      Gw(n),
      Sx(),
      (ie = a),
      (oe = o),
      (Pt.transition = s);
  } else e.current = n;
  if (
    (co && ((co = !1), (Cn = e), (ra = i)),
    (s = e.pendingLanes),
    s === 0 && (Ln = null),
    Tx(n.stateNode),
    rt(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (na) throw ((na = !1), (e = Wu), (Wu = null), e);
  return (
    ra & 1 && e.tag !== 0 && Zr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ku ? Ji++ : ((Ji = 0), (Ku = e))) : (Ji = 0),
    Wn(),
    null
  );
}
function Zr() {
  if (Cn !== null) {
    var e = xg(ra),
      t = Pt.transition,
      n = oe;
    try {
      if (((Pt.transition = null), (oe = 16 > e ? 16 : e), Cn === null))
        var r = !1;
      else {
        if (((e = Cn), (Cn = null), (ra = 0), ie & 6)) throw Error(_(331));
        var i = ie;
        for (ie |= 4, z = e.current; z !== null; ) {
          var s = z,
            o = s.child;
          if (z.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (z = c; z !== null; ) {
                  var u = z;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qi(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (z = d);
                  else
                    for (; z !== null; ) {
                      u = z;
                      var p = u.sibling,
                        h = u.return;
                      if ((Nv(u), u === c)) {
                        z = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = h), (z = p);
                        break;
                      }
                      z = h;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var j = x.sibling;
                    (x.sibling = null), (x = j);
                  } while (x !== null);
                }
              }
              z = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (z = o);
          else
            e: for (; z !== null; ) {
              if (((s = z), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qi(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (z = m);
                break e;
              }
              z = s.return;
            }
        }
        var y = e.current;
        for (z = y; z !== null; ) {
          o = z;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (z = g);
          else
            e: for (o = y; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ra(9, a);
                  }
                } catch (T) {
                  we(a, a.return, T);
                }
              if (a === o) {
                z = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (z = S);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((ie = i), Wn(), Wt && typeof Wt.onPostCommitFiberRoot == "function")
        )
          try {
            Wt.onPostCommitFiberRoot(Ea, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (Pt.transition = t);
    }
  }
  return !1;
}
function Rp(e, t, n) {
  (t = oi(n, t)),
    (t = xv(e, t, 1)),
    (e = Mn(e, t, 1)),
    (t = qe()),
    e !== null && (As(e, 1, t), rt(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) Rp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ln === null || !Ln.has(r)))
        ) {
          (e = oi(n, e)),
            (e = wv(t, e, 1)),
            (t = Mn(t, e, 1)),
            (e = qe()),
            t !== null && (As(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Qw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Re === e &&
      (Ue & n) === n &&
      (Ce === 4 || (Ce === 3 && (Ue & 130023424) === Ue && 500 > je() - fd)
        ? ur(e, 0)
        : (dd |= n)),
    rt(e, t);
}
function Bv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = eo), (eo <<= 1), !(eo & 130023424) && (eo = 4194304))
      : (t = 1));
  var n = qe();
  (e = dn(e, t)), e !== null && (As(e, t, n), rt(e, n));
}
function Jw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bv(e, n);
}
function Zw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Bv(e, n);
}
var zv;
zv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), Bw(e, t, n);
      et = !!(e.flags & 131072);
    }
  else (et = !1), pe && t.flags & 1048576 && Gg(t, Yo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Po(e, t), (e = t.pendingProps);
      var i = ni(t, We.current);
      Jr(t, n), (i = sd(null, t, r, e, i, n));
      var s = od();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            nt(r) ? ((s = !0), Wo(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ed(t),
            (i.updater = Na),
            (t.stateNode = i),
            (i._reactInternals = t),
            _u(t, r, e, n),
            (t = Uu(null, t, r, !0, s, n)))
          : ((t.tag = 0), pe && s && Kc(t), Xe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Po(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = tS(r)),
          (e = At(r, e)),
          i)
        ) {
          case 0:
            t = Du(null, t, r, e, n);
            break e;
          case 1:
            t = Sp(null, t, r, e, n);
            break e;
          case 11:
            t = xp(null, t, r, e, n);
            break e;
          case 14:
            t = wp(null, t, r, At(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        Du(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        Sp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Tv(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Qg(e, t),
          Qo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = oi(Error(_(423)), t)), (t = jp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = oi(Error(_(424)), t)), (t = jp(e, t, r, n, i));
            break e;
          } else
            for (
              ct = An(t.stateNode.containerInfo.firstChild),
                dt = t,
                pe = !0,
                _t = null,
                n = Xg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ri(), r === i)) {
            t = fn(e, t, n);
            break e;
          }
          Xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jg(t),
        e === null && Au(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Cu(r, i) ? (o = null) : s !== null && Cu(r, s) && (t.flags |= 32),
        Ev(e, t),
        Xe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Au(t), null;
    case 13:
      return Fv(e, t, n);
    case 4:
      return (
        td(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ii(t, null, r, n)) : Xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        xp(e, t, r, i, n)
      );
    case 7:
      return Xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          le(Xo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ot(s.value, o)) {
            if (s.children === i.children && !tt.current) {
              t = fn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = nn(-1, n & -n)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Mu(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(_(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Mu(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Xe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Jr(t, n),
        (i = bt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = At(r, t.pendingProps)),
        (i = At(r.type, i)),
        wp(e, t, r, i, n)
      );
    case 15:
      return Sv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        Po(e, t),
        (t.tag = 1),
        nt(r) ? ((e = !0), Wo(t)) : (e = !1),
        Jr(t, n),
        yv(t, r, i),
        _u(t, r, i, n),
        Uu(null, t, r, !0, e, n)
      );
    case 19:
      return Pv(e, t, n);
    case 22:
      return jv(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Vv(e, t) {
  return mg(e, t);
}
function eS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ft(e, t, n, r) {
  return new eS(e, t, n, r);
}
function gd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function tS(e) {
  if (typeof e == "function") return gd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _c)) return 11;
    if (e === Ic) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ft(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ko(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) gd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ar:
        return cr(n.children, i, s, t);
      case Lc:
        (o = 8), (i |= 8);
        break;
      case su:
        return (
          (e = Ft(12, n, t, i | 2)), (e.elementType = su), (e.lanes = s), e
        );
      case ou:
        return (e = Ft(13, n, t, i)), (e.elementType = ou), (e.lanes = s), e;
      case au:
        return (e = Ft(19, n, t, i)), (e.elementType = au), (e.lanes = s), e;
      case Jm:
        return Ma(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qm:
              o = 10;
              break e;
            case Qm:
              o = 9;
              break e;
            case _c:
              o = 11;
              break e;
            case Ic:
              o = 14;
              break e;
            case Sn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ft(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function cr(e, t, n, r) {
  return (e = Ft(7, e, r, t)), (e.lanes = n), e;
}
function Ma(e, t, n, r) {
  return (
    (e = Ft(22, e, r, t)),
    (e.elementType = Jm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fl(e, t, n) {
  return (e = Ft(6, e, null, t)), (e.lanes = n), e;
}
function Pl(e, t, n) {
  return (
    (t = Ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function nS(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ol(0)),
    (this.expirationTimes = ol(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ol(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function vd(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new nS(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ft(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ed(s),
    e
  );
}
function rS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hv(e) {
  if (!e) return Bn;
  e = e._reactInternals;
  e: {
    if (jr(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (nt(n)) return Hg(e, n, t);
  }
  return t;
}
function $v(e, t, n, r, i, s, o, a, l) {
  return (
    (e = vd(n, r, !0, e, i, s, o, a, l)),
    (e.context = Hv(null)),
    (n = e.current),
    (r = qe()),
    (i = _n(n)),
    (s = nn(r, i)),
    (s.callback = t ?? null),
    Mn(n, s, i),
    (e.current.lanes = i),
    As(e, i, r),
    rt(e, r),
    e
  );
}
function La(e, t, n, r) {
  var i = t.current,
    s = qe(),
    o = _n(i);
  return (
    (n = Hv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nn(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mn(i, t, o)),
    e !== null && (Dt(e, i, o, s), Eo(e, i, o)),
    o
  );
}
function sa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ap(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function yd(e, t) {
  Ap(e, t), (e = e.alternate) && Ap(e, t);
}
function iS() {
  return null;
}
var Gv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xd(e) {
  this._internalRoot = e;
}
_a.prototype.render = xd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  La(e, t, null, null);
};
_a.prototype.unmount = xd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    vr(function () {
      La(null, e, null, null);
    }),
      (t[cn] = null);
  }
};
function _a(e) {
  this._internalRoot = e;
}
_a.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tn.length && t !== 0 && t < Tn[n].priority; n++);
    Tn.splice(n, 0, e), n === 0 && Tg(e);
  }
};
function wd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ia(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mp() {}
function sS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = sa(o);
        s.call(c);
      };
    }
    var o = $v(t, r, e, 0, null, !1, !1, "", Mp);
    return (
      (e._reactRootContainer = o),
      (e[cn] = o.current),
      ps(e.nodeType === 8 ? e.parentNode : e),
      vr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = sa(l);
      a.call(c);
    };
  }
  var l = vd(e, 0, !1, null, null, !1, !1, "", Mp);
  return (
    (e._reactRootContainer = l),
    (e[cn] = l.current),
    ps(e.nodeType === 8 ? e.parentNode : e),
    vr(function () {
      La(t, l, n, r);
    }),
    l
  );
}
function Da(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = sa(o);
        a.call(l);
      };
    }
    La(t, o, e, i);
  } else o = sS(n, t, e, i, r);
  return sa(o);
}
wg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zi(t.pendingLanes);
        n !== 0 &&
          (Oc(t, n | 1), rt(t, je()), !(ie & 6) && ((ai = je() + 500), Wn()));
      }
      break;
    case 13:
      vr(function () {
        var r = dn(e, 1);
        if (r !== null) {
          var i = qe();
          Dt(r, e, 1, i);
        }
      }),
        yd(e, 1);
  }
};
Bc = function (e) {
  if (e.tag === 13) {
    var t = dn(e, 134217728);
    if (t !== null) {
      var n = qe();
      Dt(t, e, 134217728, n);
    }
    yd(e, 134217728);
  }
};
Sg = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = dn(e, t);
    if (n !== null) {
      var r = qe();
      Dt(n, e, t, r);
    }
    yd(e, t);
  }
};
jg = function () {
  return oe;
};
Eg = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
vu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((cu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ca(r);
            if (!i) throw Error(_(90));
            eg(r), cu(r, i);
          }
        }
      }
      break;
    case "textarea":
      ng(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yr(e, !!n.multiple, t, !1);
  }
};
ug = pd;
cg = vr;
var oS = { usingClientEntryPoint: !1, Events: [Ls, Ir, Ca, ag, lg, pd] },
  Mi = {
    findFiberByHostInstance: rr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  aS = {
    bundleType: Mi.bundleType,
    version: Mi.version,
    rendererPackageName: Mi.rendererPackageName,
    rendererConfig: Mi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mi.findFiberByHostInstance || iS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fo.isDisabled && fo.supportsFiber)
    try {
      (Ea = fo.inject(aS)), (Wt = fo);
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oS;
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wd(t)) throw Error(_(200));
  return rS(e, t, null, n);
};
ht.createRoot = function (e, t) {
  if (!wd(e)) throw Error(_(299));
  var n = !1,
    r = "",
    i = Gv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = vd(e, 1, !1, null, null, n, !1, r, i)),
    (e[cn] = t.current),
    ps(e.nodeType === 8 ? e.parentNode : e),
    new xd(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = pg(t)), (e = e === null ? null : e.stateNode), e;
};
ht.flushSync = function (e) {
  return vr(e);
};
ht.hydrate = function (e, t, n) {
  if (!Ia(t)) throw Error(_(200));
  return Da(null, e, t, !0, n);
};
ht.hydrateRoot = function (e, t, n) {
  if (!wd(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Gv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = $v(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[cn] = t.current),
    ps(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new _a(t);
};
ht.render = function (e, t, n) {
  if (!Ia(t)) throw Error(_(200));
  return Da(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function (e) {
  if (!Ia(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (vr(function () {
        Da(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[cn] = null);
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = pd;
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ia(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Da(e, t, n, !1, r);
};
ht.version = "18.3.1-next-f1338f8080-20240426";
function Wv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv);
    } catch (e) {
      console.error(e);
    }
}
Wv(), (Wm.exports = ht);
var Sd = Wm.exports;
const lS = Pc(Sd),
  uS = Lm({ __proto__: null, default: lS }, [Sd]);
var Lp = Sd;
(ru.createRoot = Lp.createRoot), (ru.hydrateRoot = Lp.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
var Te;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Te || (Te = {}));
const _p = "popstate";
function cS(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return js(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : yr(i);
  }
  return fS(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function li(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function dS() {
  return Math.random().toString(36).substr(2, 8);
}
function Ip(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function js(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    me(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Kn(t) : t,
      { state: n, key: (t && t.key) || r || dS() }
    )
  );
}
function yr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Kn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function fS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = Te.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), o.replaceState(me({}, o.state, { idx: c }), ""));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = Te.Pop;
    let j = u(),
      m = j == null ? null : j - c;
    (c = j), l && l({ action: a, location: x.location, delta: m });
  }
  function p(j, m) {
    a = Te.Push;
    let y = js(x.location, j, m);
    c = u() + 1;
    let g = Ip(y, c),
      S = x.createHref(y);
    try {
      o.pushState(g, "", S);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      i.location.assign(S);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function h(j, m) {
    a = Te.Replace;
    let y = js(x.location, j, m);
    c = u();
    let g = Ip(y, c),
      S = x.createHref(y);
    o.replaceState(g, "", S),
      s && l && l({ action: a, location: x.location, delta: 0 });
  }
  function v(j) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      y = typeof j == "string" ? j : yr(j);
    return (
      (y = y.replace(/ $/, "%20")),
      Z(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(j) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(_p, d),
        (l = j),
        () => {
          i.removeEventListener(_p, d), (l = null);
        }
      );
    },
    createHref(j) {
      return t(i, j);
    },
    createURL: v,
    encodeLocation(j) {
      let m = v(j);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: h,
    go(j) {
      return o.go(j);
    },
  };
  return x;
}
var fe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fe || (fe = {}));
const pS = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function hS(e) {
  return e.index === !0;
}
function qu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let o = [...n, s],
        a = typeof i.id == "string" ? i.id : o.join("-");
      if (
        (Z(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        Z(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        hS(i))
      ) {
        let l = me({}, i, t(i), { id: a });
        return (r[a] = l), l;
      } else {
        let l = me({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = l), i.children && (l.children = qu(i.children, t, o, r)), l
        );
      }
    })
  );
}
function Hr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Kn(t) : t,
    i = hi(r.pathname || "/", n);
  if (i == null) return null;
  let s = Kv(e);
  gS(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) {
    let l = bS(i);
    o = FS(s[a], l);
  }
  return o;
}
function mS(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Kv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (Z(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = rn([r, l.relativePath]),
      u = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (Z(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Kv(s.children, t, u, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: ES(c, s.index), routesMeta: u });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Yv(s.path)) i(s, o, l);
    }),
    t
  );
}
function Yv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Yv(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function gS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : TS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vS = /^:[\w-]+$/,
  yS = 3,
  xS = 2,
  wS = 1,
  SS = 10,
  jS = -2,
  Dp = (e) => e === "*";
function ES(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Dp) && (r += jS),
    t && (r += xS),
    n
      .filter((i) => !Dp(i))
      .reduce((i, s) => i + (vS.test(s) ? yS : s === "" ? wS : SS), r)
  );
}
function TS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function FS(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      u = PS(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        c
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let d = a.route;
    s.push({
      params: r,
      pathname: rn([i, u.pathname]),
      pathnameBase: RS(rn([i, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (i = rn([i, u.pathnameBase]));
  }
  return s;
}
function PS(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = CS(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: p, isOptional: h } = u;
      if (p === "*") {
        let x = a[d] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        h && !v ? (c[p] = void 0) : (c[p] = (v || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function CS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    li(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function bS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      li(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function hi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function kS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Kn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : NS(n, t)) : t,
    search: AS(r),
    hash: MS(i),
  };
}
function NS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Cl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Xv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function jd(e, t) {
  let n = Xv(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ed(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Kn(e))
    : ((i = me({}, e)),
      Z(
        !i.pathname || !i.pathname.includes("?"),
        Cl("?", "pathname", "search", i)
      ),
      Z(
        !i.pathname || !i.pathname.includes("#"),
        Cl("#", "pathname", "hash", i)
      ),
      Z(!i.search || !i.search.includes("#"), Cl("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      i.pathname = p.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = kS(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    u = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const rn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  RS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  AS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  MS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Td {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Fd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const qv = ["post", "put", "patch", "delete"],
  LS = new Set(qv),
  _S = ["get", ...qv],
  IS = new Set(_S),
  DS = new Set([301, 302, 303, 307, 308]),
  US = new Set([307, 308]),
  bl = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  OS = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Li = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Pd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  BS = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Qv = "remix-router-transitions";
function zS(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Z(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let F = e.detectErrorBoundary;
    i = (b) => ({ hasErrorBoundary: F(b) });
  } else i = BS;
  let s = {},
    o = qu(e.routes, i, void 0, s),
    a,
    l = e.basename || "/",
    c = e.unstable_dataStrategy || GS,
    u = me(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    p = new Set(),
    h = null,
    v = null,
    x = null,
    j = e.hydrationData != null,
    m = Hr(o, e.history.location, l),
    y = null;
  if (m == null) {
    let F = St(404, { pathname: e.history.location.pathname }),
      { matches: b, route: M } = Kp(o);
    (m = b), (y = { [M.id]: F });
  }
  let g,
    S = m.some((F) => F.route.lazy),
    T = m.some((F) => F.route.loader);
  if (S) g = !1;
  else if (!T) g = !0;
  else if (u.v7_partialHydration) {
    let F = e.hydrationData ? e.hydrationData.loaderData : null,
      b = e.hydrationData ? e.hydrationData.errors : null,
      M = (I) =>
        I.route.loader
          ? typeof I.route.loader == "function" && I.route.loader.hydrate === !0
            ? !1
            : (F && F[I.route.id] !== void 0) || (b && b[I.route.id] !== void 0)
          : !0;
    if (b) {
      let I = m.findIndex((V) => b[V.route.id] !== void 0);
      g = m.slice(0, I + 1).every(M);
    } else g = m.every(M);
  } else g = e.hydrationData != null;
  let k,
    w = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: m,
      initialized: g,
      navigation: bl,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = Te.Pop,
    R = !1,
    C,
    L = !1,
    O = new Map(),
    D = null,
    W = !1,
    K = !1,
    se = [],
    be = [],
    A = new Map(),
    U = 0,
    B = -1,
    te = new Map(),
    re = new Set(),
    Nt = new Map(),
    st = new Map(),
    ot = new Set(),
    Ke = new Map(),
    vt = new Map(),
    Ja = !1;
  function S1() {
    if (
      ((d = e.history.listen((F) => {
        let { action: b, location: M, delta: I } = F;
        if (Ja) {
          Ja = !1;
          return;
        }
        li(
          vt.size === 0 || I != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let V = jf({
          currentLocation: w.location,
          nextLocation: M,
          historyAction: b,
        });
        if (V && I != null) {
          (Ja = !0),
            e.history.go(I * -1),
            Gs(V, {
              state: "blocked",
              location: M,
              proceed() {
                Gs(V, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  e.history.go(I);
              },
              reset() {
                let q = new Map(w.blockers);
                q.set(V, Li), at({ blockers: q });
              },
            });
          return;
        }
        return qn(b, M);
      })),
      n)
    ) {
      rj(t, O);
      let F = () => ij(t, O);
      t.addEventListener("pagehide", F),
        (D = () => t.removeEventListener("pagehide", F));
    }
    return w.initialized || qn(Te.Pop, w.location, { initialHydration: !0 }), k;
  }
  function j1() {
    d && d(),
      D && D(),
      p.clear(),
      C && C.abort(),
      w.fetchers.forEach((F, b) => $s(b)),
      w.blockers.forEach((F, b) => Sf(b));
  }
  function E1(F) {
    return p.add(F), () => p.delete(F);
  }
  function at(F, b) {
    b === void 0 && (b = {}), (w = me({}, w, F));
    let M = [],
      I = [];
    u.v7_fetcherPersist &&
      w.fetchers.forEach((V, q) => {
        V.state === "idle" && (ot.has(q) ? I.push(q) : M.push(q));
      }),
      [...p].forEach((V) =>
        V(w, {
          deletedFetchers: I,
          unstable_viewTransitionOpts: b.viewTransitionOpts,
          unstable_flushSync: b.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (M.forEach((V) => w.fetchers.delete(V)), I.forEach((V) => $s(V)));
  }
  function wi(F, b, M) {
    var I, V;
    let { flushSync: q } = M === void 0 ? {} : M,
      $ =
        w.actionData != null &&
        w.navigation.formMethod != null &&
        Lt(w.navigation.formMethod) &&
        w.navigation.state === "loading" &&
        ((I = F.state) == null ? void 0 : I._isRedirect) !== !0,
      H;
    b.actionData
      ? Object.keys(b.actionData).length > 0
        ? (H = b.actionData)
        : (H = null)
      : $
      ? (H = w.actionData)
      : (H = null);
    let J = b.loaderData
        ? Gp(w.loaderData, b.loaderData, b.matches || [], b.errors)
        : w.loaderData,
      X = w.blockers;
    X.size > 0 && ((X = new Map(X)), X.forEach((Y, de) => X.set(de, Li)));
    let Me =
      R === !0 ||
      (w.navigation.formMethod != null &&
        Lt(w.navigation.formMethod) &&
        ((V = F.state) == null ? void 0 : V._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      W ||
        P === Te.Pop ||
        (P === Te.Push
          ? e.history.push(F, F.state)
          : P === Te.Replace && e.history.replace(F, F.state));
    let Le;
    if (P === Te.Pop) {
      let Y = O.get(w.location.pathname);
      Y && Y.has(F.pathname)
        ? (Le = { currentLocation: w.location, nextLocation: F })
        : O.has(F.pathname) &&
          (Le = { currentLocation: F, nextLocation: w.location });
    } else if (L) {
      let Y = O.get(w.location.pathname);
      Y
        ? Y.add(F.pathname)
        : ((Y = new Set([F.pathname])), O.set(w.location.pathname, Y)),
        (Le = { currentLocation: w.location, nextLocation: F });
    }
    at(
      me({}, b, {
        actionData: H,
        loaderData: J,
        historyAction: P,
        location: F,
        initialized: !0,
        navigation: bl,
        revalidation: "idle",
        restoreScrollPosition: Tf(F, b.matches || w.matches),
        preventScrollReset: Me,
        blockers: X,
      }),
      { viewTransitionOpts: Le, flushSync: q === !0 }
    ),
      (P = Te.Pop),
      (R = !1),
      (L = !1),
      (W = !1),
      (K = !1),
      (se = []),
      (be = []);
  }
  async function mf(F, b) {
    if (typeof F == "number") {
      e.history.go(F);
      return;
    }
    let M = Qu(
        w.location,
        w.matches,
        l,
        u.v7_prependBasename,
        F,
        u.v7_relativeSplatPath,
        b == null ? void 0 : b.fromRouteId,
        b == null ? void 0 : b.relative
      ),
      {
        path: I,
        submission: V,
        error: q,
      } = Up(u.v7_normalizeFormMethod, !1, M, b),
      $ = w.location,
      H = js(w.location, I, b && b.state);
    H = me({}, H, e.history.encodeLocation(H));
    let J = b && b.replace != null ? b.replace : void 0,
      X = Te.Push;
    J === !0
      ? (X = Te.Replace)
      : J === !1 ||
        (V != null &&
          Lt(V.formMethod) &&
          V.formAction === w.location.pathname + w.location.search &&
          (X = Te.Replace));
    let Me =
        b && "preventScrollReset" in b ? b.preventScrollReset === !0 : void 0,
      Le = (b && b.unstable_flushSync) === !0,
      Y = jf({ currentLocation: $, nextLocation: H, historyAction: X });
    if (Y) {
      Gs(Y, {
        state: "blocked",
        location: H,
        proceed() {
          Gs(Y, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: H,
          }),
            mf(F, b);
        },
        reset() {
          let de = new Map(w.blockers);
          de.set(Y, Li), at({ blockers: de });
        },
      });
      return;
    }
    return await qn(X, H, {
      submission: V,
      pendingError: q,
      preventScrollReset: Me,
      replace: b && b.replace,
      enableViewTransition: b && b.unstable_viewTransition,
      flushSync: Le,
    });
  }
  function T1() {
    if (
      (Za(),
      at({ revalidation: "loading" }),
      w.navigation.state !== "submitting")
    ) {
      if (w.navigation.state === "idle") {
        qn(w.historyAction, w.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      qn(P || w.historyAction, w.navigation.location, {
        overrideNavigation: w.navigation,
      });
    }
  }
  async function qn(F, b, M) {
    C && C.abort(),
      (C = null),
      (P = F),
      (W = (M && M.startUninterruptedRevalidation) === !0),
      M1(w.location, w.matches),
      (R = (M && M.preventScrollReset) === !0),
      (L = (M && M.enableViewTransition) === !0);
    let I = a || o,
      V = M && M.overrideNavigation,
      q = Hr(I, b, l),
      $ = (M && M.flushSync) === !0;
    if (!q) {
      let Y = St(404, { pathname: b.pathname }),
        { matches: de, route: ke } = Kp(I);
      el(),
        wi(
          b,
          { matches: de, loaderData: {}, errors: { [ke.id]: Y } },
          { flushSync: $ }
        );
      return;
    }
    if (
      w.initialized &&
      !K &&
      QS(w.location, b) &&
      !(M && M.submission && Lt(M.submission.formMethod))
    ) {
      wi(b, { matches: q }, { flushSync: $ });
      return;
    }
    C = new AbortController();
    let H = Nr(e.history, b, C.signal, M && M.submission),
      J;
    if (M && M.pendingError)
      J = [Zi(q).route.id, { type: fe.error, error: M.pendingError }];
    else if (M && M.submission && Lt(M.submission.formMethod)) {
      let Y = await F1(H, b, M.submission, q, {
        replace: M.replace,
        flushSync: $,
      });
      if (Y.shortCircuited) return;
      (J = Y.pendingActionResult),
        (V = kl(b, M.submission)),
        ($ = !1),
        (H = Nr(e.history, H.url, H.signal));
    }
    let {
      shortCircuited: X,
      loaderData: Me,
      errors: Le,
    } = await P1(
      H,
      b,
      q,
      V,
      M && M.submission,
      M && M.fetcherSubmission,
      M && M.replace,
      M && M.initialHydration === !0,
      $,
      J
    );
    X ||
      ((C = null),
      wi(b, me({ matches: q }, Wp(J), { loaderData: Me, errors: Le })));
  }
  async function F1(F, b, M, I, V) {
    V === void 0 && (V = {}), Za();
    let q = tj(b, M);
    at({ navigation: q }, { flushSync: V.flushSync === !0 });
    let $,
      H = Zu(I, b);
    if (!H.route.action && !H.route.lazy)
      $ = {
        type: fe.error,
        error: St(405, {
          method: F.method,
          pathname: b.pathname,
          routeId: H.route.id,
        }),
      };
    else if ((($ = (await ji("action", F, [H], I))[0]), F.signal.aborted))
      return { shortCircuited: !0 };
    if (ar($)) {
      let J;
      return (
        V && V.replace != null
          ? (J = V.replace)
          : (J =
              Vp($.response.headers.get("Location"), new URL(F.url), l) ===
              w.location.pathname + w.location.search),
        await Si(F, $, { submission: M, replace: J }),
        { shortCircuited: !0 }
      );
    }
    if (or($)) throw St(400, { type: "defer-action" });
    if (Tt($)) {
      let J = Zi(I, H.route.id);
      return (
        (V && V.replace) !== !0 && (P = Te.Push),
        { pendingActionResult: [J.route.id, $] }
      );
    }
    return { pendingActionResult: [H.route.id, $] };
  }
  async function P1(F, b, M, I, V, q, $, H, J, X) {
    let Me = I || kl(b, V),
      Le = V || q || qp(Me),
      Y = a || o,
      [de, ke] = Op(
        e.history,
        w,
        M,
        Le,
        b,
        u.v7_partialHydration && H === !0,
        u.unstable_skipActionErrorRevalidation,
        K,
        se,
        be,
        ot,
        Nt,
        re,
        Y,
        l,
        X
      );
    if (
      (el(
        (ne) =>
          !(M && M.some((Ye) => Ye.route.id === ne)) ||
          (de && de.some((Ye) => Ye.route.id === ne))
      ),
      (B = ++U),
      de.length === 0 && ke.length === 0)
    ) {
      let ne = xf();
      return (
        wi(
          b,
          me(
            {
              matches: M,
              loaderData: {},
              errors: X && Tt(X[1]) ? { [X[0]]: X[1].error } : null,
            },
            Wp(X),
            ne ? { fetchers: new Map(w.fetchers) } : {}
          ),
          { flushSync: J }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!W && (!u.v7_partialHydration || !H)) {
      ke.forEach((Ye) => {
        let yt = w.fetchers.get(Ye.key),
          _e = _i(void 0, yt ? yt.data : void 0);
        w.fetchers.set(Ye.key, _e);
      });
      let ne;
      X && !Tt(X[1])
        ? (ne = { [X[0]]: X[1].data })
        : w.actionData &&
          (Object.keys(w.actionData).length === 0
            ? (ne = null)
            : (ne = w.actionData)),
        at(
          me(
            { navigation: Me },
            ne !== void 0 ? { actionData: ne } : {},
            ke.length > 0 ? { fetchers: new Map(w.fetchers) } : {}
          ),
          { flushSync: J }
        );
    }
    ke.forEach((ne) => {
      A.has(ne.key) && mn(ne.key),
        ne.controller && A.set(ne.key, ne.controller);
    });
    let Ti = () => ke.forEach((ne) => mn(ne.key));
    C && C.signal.addEventListener("abort", Ti);
    let { loaderResults: gn, fetcherResults: Pr } = await gf(
      w.matches,
      M,
      de,
      ke,
      F
    );
    if (F.signal.aborted) return { shortCircuited: !0 };
    C && C.signal.removeEventListener("abort", Ti),
      ke.forEach((ne) => A.delete(ne.key));
    let Cr = Yp([...gn, ...Pr]);
    if (Cr) {
      if (Cr.idx >= de.length) {
        let ne = ke[Cr.idx - de.length].key;
        re.add(ne);
      }
      return await Si(F, Cr.result, { replace: $ }), { shortCircuited: !0 };
    }
    let { loaderData: br, errors: Vt } = $p(w, M, de, gn, X, ke, Pr, Ke);
    Ke.forEach((ne, Ye) => {
      ne.subscribe((yt) => {
        (yt || ne.done) && Ke.delete(Ye);
      });
    }),
      u.v7_partialHydration &&
        H &&
        w.errors &&
        Object.entries(w.errors)
          .filter((ne) => {
            let [Ye] = ne;
            return !de.some((yt) => yt.route.id === Ye);
          })
          .forEach((ne) => {
            let [Ye, yt] = ne;
            Vt = Object.assign(Vt || {}, { [Ye]: yt });
          });
    let Ws = xf(),
      Ks = wf(B),
      Ys = Ws || Ks || ke.length > 0;
    return me(
      { loaderData: br, errors: Vt },
      Ys ? { fetchers: new Map(w.fetchers) } : {}
    );
  }
  function C1(F, b, M, I) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    A.has(F) && mn(F);
    let V = (I && I.unstable_flushSync) === !0,
      q = a || o,
      $ = Qu(
        w.location,
        w.matches,
        l,
        u.v7_prependBasename,
        M,
        u.v7_relativeSplatPath,
        b,
        I == null ? void 0 : I.relative
      ),
      H = Hr(q, $, l);
    if (!H) {
      Ei(F, b, St(404, { pathname: $ }), { flushSync: V });
      return;
    }
    let {
      path: J,
      submission: X,
      error: Me,
    } = Up(u.v7_normalizeFormMethod, !0, $, I);
    if (Me) {
      Ei(F, b, Me, { flushSync: V });
      return;
    }
    let Le = Zu(H, J);
    if (((R = (I && I.preventScrollReset) === !0), X && Lt(X.formMethod))) {
      b1(F, b, J, Le, H, V, X);
      return;
    }
    Nt.set(F, { routeId: b, path: J }), k1(F, b, J, Le, H, V, X);
  }
  async function b1(F, b, M, I, V, q, $) {
    if ((Za(), Nt.delete(F), !I.route.action && !I.route.lazy)) {
      let _e = St(405, { method: $.formMethod, pathname: M, routeId: b });
      Ei(F, b, _e, { flushSync: q });
      return;
    }
    let H = w.fetchers.get(F);
    hn(F, nj($, H), { flushSync: q });
    let J = new AbortController(),
      X = Nr(e.history, M, J.signal, $);
    A.set(F, J);
    let Me = U,
      Y = (await ji("action", X, [I], V))[0];
    if (X.signal.aborted) {
      A.get(F) === J && A.delete(F);
      return;
    }
    if (u.v7_fetcherPersist && ot.has(F)) {
      if (ar(Y) || Tt(Y)) {
        hn(F, xn(void 0));
        return;
      }
    } else {
      if (ar(Y))
        if ((A.delete(F), B > Me)) {
          hn(F, xn(void 0));
          return;
        } else
          return re.add(F), hn(F, _i($)), Si(X, Y, { fetcherSubmission: $ });
      if (Tt(Y)) {
        Ei(F, b, Y.error);
        return;
      }
    }
    if (or(Y)) throw St(400, { type: "defer-action" });
    let de = w.navigation.location || w.location,
      ke = Nr(e.history, de, J.signal),
      Ti = a || o,
      gn =
        w.navigation.state !== "idle"
          ? Hr(Ti, w.navigation.location, l)
          : w.matches;
    Z(gn, "Didn't find any matches after fetcher action");
    let Pr = ++U;
    te.set(F, Pr);
    let Cr = _i($, Y.data);
    w.fetchers.set(F, Cr);
    let [br, Vt] = Op(
      e.history,
      w,
      gn,
      $,
      de,
      !1,
      u.unstable_skipActionErrorRevalidation,
      K,
      se,
      be,
      ot,
      Nt,
      re,
      Ti,
      l,
      [I.route.id, Y]
    );
    Vt.filter((_e) => _e.key !== F).forEach((_e) => {
      let Fi = _e.key,
        Ff = w.fetchers.get(Fi),
        _1 = _i(void 0, Ff ? Ff.data : void 0);
      w.fetchers.set(Fi, _1),
        A.has(Fi) && mn(Fi),
        _e.controller && A.set(Fi, _e.controller);
    }),
      at({ fetchers: new Map(w.fetchers) });
    let Ws = () => Vt.forEach((_e) => mn(_e.key));
    J.signal.addEventListener("abort", Ws);
    let { loaderResults: Ks, fetcherResults: Ys } = await gf(
      w.matches,
      gn,
      br,
      Vt,
      ke
    );
    if (J.signal.aborted) return;
    J.signal.removeEventListener("abort", Ws),
      te.delete(F),
      A.delete(F),
      Vt.forEach((_e) => A.delete(_e.key));
    let ne = Yp([...Ks, ...Ys]);
    if (ne) {
      if (ne.idx >= br.length) {
        let _e = Vt[ne.idx - br.length].key;
        re.add(_e);
      }
      return Si(ke, ne.result);
    }
    let { loaderData: Ye, errors: yt } = $p(
      w,
      w.matches,
      br,
      Ks,
      void 0,
      Vt,
      Ys,
      Ke
    );
    if (w.fetchers.has(F)) {
      let _e = xn(Y.data);
      w.fetchers.set(F, _e);
    }
    wf(Pr),
      w.navigation.state === "loading" && Pr > B
        ? (Z(P, "Expected pending action"),
          C && C.abort(),
          wi(w.navigation.location, {
            matches: gn,
            loaderData: Ye,
            errors: yt,
            fetchers: new Map(w.fetchers),
          }))
        : (at({
            errors: yt,
            loaderData: Gp(w.loaderData, Ye, gn, yt),
            fetchers: new Map(w.fetchers),
          }),
          (K = !1));
  }
  async function k1(F, b, M, I, V, q, $) {
    let H = w.fetchers.get(F);
    hn(F, _i($, H ? H.data : void 0), { flushSync: q });
    let J = new AbortController(),
      X = Nr(e.history, M, J.signal);
    A.set(F, J);
    let Me = U,
      Y = (await ji("loader", X, [I], V))[0];
    if (
      (or(Y) && (Y = (await ty(Y, X.signal, !0)) || Y),
      A.get(F) === J && A.delete(F),
      !X.signal.aborted)
    ) {
      if (ot.has(F)) {
        hn(F, xn(void 0));
        return;
      }
      if (ar(Y))
        if (B > Me) {
          hn(F, xn(void 0));
          return;
        } else {
          re.add(F), await Si(X, Y);
          return;
        }
      if (Tt(Y)) {
        Ei(F, b, Y.error);
        return;
      }
      Z(!or(Y), "Unhandled fetcher deferred data"), hn(F, xn(Y.data));
    }
  }
  async function Si(F, b, M) {
    let {
      submission: I,
      fetcherSubmission: V,
      replace: q,
    } = M === void 0 ? {} : M;
    b.response.headers.has("X-Remix-Revalidate") && (K = !0);
    let $ = b.response.headers.get("Location");
    Z($, "Expected a Location header on the redirect Response"),
      ($ = Vp($, new URL(F.url), l));
    let H = js(w.location, $, { _isRedirect: !0 });
    if (n) {
      let de = !1;
      if (b.response.headers.has("X-Remix-Reload-Document")) de = !0;
      else if (Pd.test($)) {
        const ke = e.history.createURL($);
        de = ke.origin !== t.location.origin || hi(ke.pathname, l) == null;
      }
      if (de) {
        q ? t.location.replace($) : t.location.assign($);
        return;
      }
    }
    C = null;
    let J = q === !0 ? Te.Replace : Te.Push,
      { formMethod: X, formAction: Me, formEncType: Le } = w.navigation;
    !I && !V && X && Me && Le && (I = qp(w.navigation));
    let Y = I || V;
    if (US.has(b.response.status) && Y && Lt(Y.formMethod))
      await qn(J, H, {
        submission: me({}, Y, { formAction: $ }),
        preventScrollReset: R,
      });
    else {
      let de = kl(H, I);
      await qn(J, H, {
        overrideNavigation: de,
        fetcherSubmission: V,
        preventScrollReset: R,
      });
    }
  }
  async function ji(F, b, M, I) {
    try {
      let V = await WS(c, F, b, M, I, s, i);
      return await Promise.all(
        V.map((q, $) => {
          if (JS(q)) {
            let H = q.result;
            return {
              type: fe.redirect,
              response: XS(H, b, M[$].route.id, I, l, u.v7_relativeSplatPath),
            };
          }
          return YS(q);
        })
      );
    } catch (V) {
      return M.map(() => ({ type: fe.error, error: V }));
    }
  }
  async function gf(F, b, M, I, V) {
    let [q, ...$] = await Promise.all([
      M.length ? ji("loader", V, M, b) : [],
      ...I.map((H) => {
        if (H.matches && H.match && H.controller) {
          let J = Nr(e.history, H.path, H.controller.signal);
          return ji("loader", J, [H.match], H.matches).then((X) => X[0]);
        } else
          return Promise.resolve({
            type: fe.error,
            error: St(404, { pathname: H.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Xp(
          F,
          M,
          q,
          q.map(() => V.signal),
          !1,
          w.loaderData
        ),
        Xp(
          F,
          I.map((H) => H.match),
          $,
          I.map((H) => (H.controller ? H.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: q, fetcherResults: $ }
    );
  }
  function Za() {
    (K = !0),
      se.push(...el()),
      Nt.forEach((F, b) => {
        A.has(b) && (be.push(b), mn(b));
      });
  }
  function hn(F, b, M) {
    M === void 0 && (M = {}),
      w.fetchers.set(F, b),
      at(
        { fetchers: new Map(w.fetchers) },
        { flushSync: (M && M.flushSync) === !0 }
      );
  }
  function Ei(F, b, M, I) {
    I === void 0 && (I = {});
    let V = Zi(w.matches, b);
    $s(F),
      at(
        { errors: { [V.route.id]: M }, fetchers: new Map(w.fetchers) },
        { flushSync: (I && I.flushSync) === !0 }
      );
  }
  function vf(F) {
    return (
      u.v7_fetcherPersist &&
        (st.set(F, (st.get(F) || 0) + 1), ot.has(F) && ot.delete(F)),
      w.fetchers.get(F) || OS
    );
  }
  function $s(F) {
    let b = w.fetchers.get(F);
    A.has(F) && !(b && b.state === "loading" && te.has(F)) && mn(F),
      Nt.delete(F),
      te.delete(F),
      re.delete(F),
      ot.delete(F),
      w.fetchers.delete(F);
  }
  function N1(F) {
    if (u.v7_fetcherPersist) {
      let b = (st.get(F) || 0) - 1;
      b <= 0 ? (st.delete(F), ot.add(F)) : st.set(F, b);
    } else $s(F);
    at({ fetchers: new Map(w.fetchers) });
  }
  function mn(F) {
    let b = A.get(F);
    Z(b, "Expected fetch controller: " + F), b.abort(), A.delete(F);
  }
  function yf(F) {
    for (let b of F) {
      let M = vf(b),
        I = xn(M.data);
      w.fetchers.set(b, I);
    }
  }
  function xf() {
    let F = [],
      b = !1;
    for (let M of re) {
      let I = w.fetchers.get(M);
      Z(I, "Expected fetcher: " + M),
        I.state === "loading" && (re.delete(M), F.push(M), (b = !0));
    }
    return yf(F), b;
  }
  function wf(F) {
    let b = [];
    for (let [M, I] of te)
      if (I < F) {
        let V = w.fetchers.get(M);
        Z(V, "Expected fetcher: " + M),
          V.state === "loading" && (mn(M), te.delete(M), b.push(M));
      }
    return yf(b), b.length > 0;
  }
  function R1(F, b) {
    let M = w.blockers.get(F) || Li;
    return vt.get(F) !== b && vt.set(F, b), M;
  }
  function Sf(F) {
    w.blockers.delete(F), vt.delete(F);
  }
  function Gs(F, b) {
    let M = w.blockers.get(F) || Li;
    Z(
      (M.state === "unblocked" && b.state === "blocked") ||
        (M.state === "blocked" && b.state === "blocked") ||
        (M.state === "blocked" && b.state === "proceeding") ||
        (M.state === "blocked" && b.state === "unblocked") ||
        (M.state === "proceeding" && b.state === "unblocked"),
      "Invalid blocker state transition: " + M.state + " -> " + b.state
    );
    let I = new Map(w.blockers);
    I.set(F, b), at({ blockers: I });
  }
  function jf(F) {
    let { currentLocation: b, nextLocation: M, historyAction: I } = F;
    if (vt.size === 0) return;
    vt.size > 1 && li(!1, "A router only supports one blocker at a time");
    let V = Array.from(vt.entries()),
      [q, $] = V[V.length - 1],
      H = w.blockers.get(q);
    if (
      !(H && H.state === "proceeding") &&
      $({ currentLocation: b, nextLocation: M, historyAction: I })
    )
      return q;
  }
  function el(F) {
    let b = [];
    return (
      Ke.forEach((M, I) => {
        (!F || F(I)) && (M.cancel(), b.push(I), Ke.delete(I));
      }),
      b
    );
  }
  function A1(F, b, M) {
    if (((h = F), (x = b), (v = M || null), !j && w.navigation === bl)) {
      j = !0;
      let I = Tf(w.location, w.matches);
      I != null && at({ restoreScrollPosition: I });
    }
    return () => {
      (h = null), (x = null), (v = null);
    };
  }
  function Ef(F, b) {
    return (
      (v &&
        v(
          F,
          b.map((I) => mS(I, w.loaderData))
        )) ||
      F.key
    );
  }
  function M1(F, b) {
    if (h && x) {
      let M = Ef(F, b);
      h[M] = x();
    }
  }
  function Tf(F, b) {
    if (h) {
      let M = Ef(F, b),
        I = h[M];
      if (typeof I == "number") return I;
    }
    return null;
  }
  function L1(F) {
    (s = {}), (a = qu(F, i, void 0, s));
  }
  return (
    (k = {
      get basename() {
        return l;
      },
      get future() {
        return u;
      },
      get state() {
        return w;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: S1,
      subscribe: E1,
      enableScrollRestoration: A1,
      navigate: mf,
      fetch: C1,
      revalidate: T1,
      createHref: (F) => e.history.createHref(F),
      encodeLocation: (F) => e.history.encodeLocation(F),
      getFetcher: vf,
      deleteFetcher: N1,
      dispose: j1,
      getBlocker: R1,
      deleteBlocker: Sf,
      _internalFetchControllers: A,
      _internalActiveDeferreds: Ke,
      _internalSetRoutes: L1,
    }),
    k
  );
}
function VS(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Qu(e, t, n, r, i, s, o, a) {
  let l, c;
  if (o) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === o)) {
        c = d;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let u = Ed(i || ".", jd(l, s), hi(e.pathname, n) || e.pathname, a === "path");
  return (
    i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      c &&
      c.route.index &&
      !Cd(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : rn([n, u.pathname])),
    yr(u)
  );
}
function Up(e, t, n, r) {
  if (!r || !VS(r)) return { path: n };
  if (r.formMethod && !ej(r.formMethod))
    return { path: n, error: St(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: St(400, { type: "invalid-body" }) }),
    s = r.formMethod || "get",
    o = e ? s.toUpperCase() : s.toLowerCase(),
    a = Zv(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Lt(o)) return i();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((h, v) => {
              let [x, j] = v;
              return (
                "" +
                h +
                x +
                "=" +
                j +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Lt(o)) return i();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  Z(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, c;
  if (r.formData) (l = Ju(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (l = Ju(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (c = Hp(l));
  else if (r.body == null) (l = new URLSearchParams()), (c = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (c = Hp(l));
    } catch {
      return i();
    }
  let u = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (Lt(u.formMethod)) return { path: n, submission: u };
  let d = Kn(n);
  return (
    t && d.search && Cd(d.search) && l.append("index", ""),
    (d.search = "?" + l),
    { path: yr(d), submission: u }
  );
}
function HS(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Op(e, t, n, r, i, s, o, a, l, c, u, d, p, h, v, x) {
  let j = x ? (Tt(x[1]) ? x[1].error : x[1].data) : void 0,
    m = e.createURL(t.location),
    y = e.createURL(i),
    g = x && Tt(x[1]) ? x[0] : void 0,
    S = g ? HS(n, g) : n,
    T = x ? x[1].statusCode : void 0,
    k = o && T && T >= 400,
    w = S.filter((R, C) => {
      let { route: L } = R;
      if (L.lazy) return !0;
      if (L.loader == null) return !1;
      if (s)
        return typeof L.loader != "function" || L.loader.hydrate
          ? !0
          : t.loaderData[L.id] === void 0 &&
              (!t.errors || t.errors[L.id] === void 0);
      if ($S(t.loaderData, t.matches[C], R) || l.some((W) => W === R.route.id))
        return !0;
      let O = t.matches[C],
        D = R;
      return Bp(
        R,
        me(
          {
            currentUrl: m,
            currentParams: O.params,
            nextUrl: y,
            nextParams: D.params,
          },
          r,
          {
            actionResult: j,
            unstable_actionStatus: T,
            defaultShouldRevalidate: k
              ? !1
              : a ||
                m.pathname + m.search === y.pathname + y.search ||
                m.search !== y.search ||
                Jv(O, D),
          }
        )
      );
    }),
    P = [];
  return (
    d.forEach((R, C) => {
      if (s || !n.some((K) => K.route.id === R.routeId) || u.has(C)) return;
      let L = Hr(h, R.path, v);
      if (!L) {
        P.push({
          key: C,
          routeId: R.routeId,
          path: R.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let O = t.fetchers.get(C),
        D = Zu(L, R.path),
        W = !1;
      p.has(C)
        ? (W = !1)
        : c.includes(C)
        ? (W = !0)
        : O && O.state !== "idle" && O.data === void 0
        ? (W = a)
        : (W = Bp(
            D,
            me(
              {
                currentUrl: m,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: y,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: j,
                unstable_actionStatus: T,
                defaultShouldRevalidate: k ? !1 : a,
              }
            )
          )),
        W &&
          P.push({
            key: C,
            routeId: R.routeId,
            path: R.path,
            matches: L,
            match: D,
            controller: new AbortController(),
          });
    }),
    [w, P]
  );
}
function $S(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Jv(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Bp(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function zp(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  Z(i, "No route found in manifest");
  let s = {};
  for (let o in r) {
    let l = i[o] !== void 0 && o !== "hasErrorBoundary";
    li(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !l && !pS.has(o) && (s[o] = r[o]);
  }
  Object.assign(i, s), Object.assign(i, me({}, t(i), { lazy: void 0 }));
}
function GS(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function WS(e, t, n, r, i, s, o, a) {
  let l = r.reduce((d, p) => d.add(p.route.id), new Set()),
    c = new Set(),
    u = await e({
      matches: i.map((d) => {
        let p = l.has(d.route.id);
        return me({}, d, {
          shouldLoad: p,
          resolve: (v) => (
            c.add(d.route.id),
            p
              ? KS(t, n, d, s, o, v, a)
              : Promise.resolve({ type: fe.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: a,
    });
  return (
    i.forEach((d) =>
      Z(
        c.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    u.filter((d, p) => l.has(i[p].route.id))
  );
}
async function KS(e, t, n, r, i, s, o) {
  let a,
    l,
    c = (u) => {
      let d,
        p = new Promise((x, j) => (d = j));
      (l = () => d()), t.signal.addEventListener("abort", l);
      let h = (x) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : u(
                { request: t, params: n.params, context: o },
                ...(x !== void 0 ? [x] : [])
              ),
        v;
      return (
        s
          ? (v = s((x) => h(x)))
          : (v = (async () => {
              try {
                return { type: "data", result: await h() };
              } catch (x) {
                return { type: "error", result: x };
              }
            })()),
        Promise.race([v, p])
      );
    };
  try {
    let u = n.route[e];
    if (n.route.lazy)
      if (u) {
        let d,
          [p] = await Promise.all([
            c(u).catch((h) => {
              d = h;
            }),
            zp(n.route, i, r),
          ]);
        if (d !== void 0) throw d;
        a = p;
      } else if ((await zp(n.route, i, r), (u = n.route[e]), u)) a = await c(u);
      else if (e === "action") {
        let d = new URL(t.url),
          p = d.pathname + d.search;
        throw St(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: fe.data, result: void 0 };
    else if (u) a = await c(u);
    else {
      let d = new URL(t.url),
        p = d.pathname + d.search;
      throw St(404, { pathname: p });
    }
    Z(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (u) {
    return { type: fe.error, result: u };
  } finally {
    l && t.signal.removeEventListener("abort", l);
  }
  return a;
}
async function YS(e) {
  let { result: t, type: n, status: r } = e;
  if (ey(t)) {
    let o;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (o = null)
          : (o = await t.json())
        : (o = await t.text());
    } catch (a) {
      return { type: fe.error, error: a };
    }
    return n === fe.error
      ? {
          type: fe.error,
          error: new Td(t.status, t.statusText, o),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: fe.data, data: o, statusCode: t.status, headers: t.headers };
  }
  if (n === fe.error)
    return { type: fe.error, error: t, statusCode: Fd(t) ? t.status : r };
  if (ZS(t)) {
    var i, s;
    return {
      type: fe.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((s = t.init) == null ? void 0 : s.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: fe.data, data: t, statusCode: r };
}
function XS(e, t, n, r, i, s) {
  let o = e.headers.get("Location");
  if (
    (Z(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Pd.test(o))
  ) {
    let a = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    (o = Qu(new URL(t.url), a, i, !0, o, s)), e.headers.set("Location", o);
  }
  return e;
}
function Vp(e, t, n) {
  if (Pd.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      s = hi(i.pathname, n) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Nr(e, t, n, r) {
  let i = e.createURL(Zv(t)).toString(),
    s = { signal: n };
  if (r && Lt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (s.method = o.toUpperCase()),
      a === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": a })),
          (s.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (s.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (s.body = Ju(r.formData))
        : (s.body = r.formData);
  }
  return new Request(i, s);
}
function Ju(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Hp(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function qS(e, t, n, r, i, s) {
  let o = {},
    a = null,
    l,
    c = !1,
    u = {},
    d = r && Tt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, h) => {
      let v = t[h].route.id;
      if (
        (Z(!ar(p), "Cannot handle redirect results in processLoaderData"),
        Tt(p))
      ) {
        let x = p.error;
        d !== void 0 && ((x = d), (d = void 0)), (a = a || {});
        {
          let j = Zi(e, v);
          a[j.route.id] == null && (a[j.route.id] = x);
        }
        (o[v] = void 0),
          c || ((c = !0), (l = Fd(p.error) ? p.error.status : 500)),
          p.headers && (u[v] = p.headers);
      } else
        or(p)
          ? (i.set(v, p.deferredData),
            (o[v] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !c &&
              (l = p.statusCode),
            p.headers && (u[v] = p.headers))
          : ((o[v] = p.data),
            p.statusCode && p.statusCode !== 200 && !c && (l = p.statusCode),
            p.headers && (u[v] = p.headers));
    }),
    d !== void 0 && r && ((a = { [r[0]]: d }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: l || 200, loaderHeaders: u }
  );
}
function $p(e, t, n, r, i, s, o, a) {
  let { loaderData: l, errors: c } = qS(t, n, r, i, a);
  for (let u = 0; u < s.length; u++) {
    let { key: d, match: p, controller: h } = s[u];
    Z(
      o !== void 0 && o[u] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let v = o[u];
    if (!(h && h.signal.aborted))
      if (Tt(v)) {
        let x = Zi(e.matches, p == null ? void 0 : p.route.id);
        (c && c[x.route.id]) || (c = me({}, c, { [x.route.id]: v.error })),
          e.fetchers.delete(d);
      } else if (ar(v)) Z(!1, "Unhandled fetcher revalidation redirect");
      else if (or(v)) Z(!1, "Unhandled fetcher deferred data");
      else {
        let x = xn(v.data);
        e.fetchers.set(d, x);
      }
  }
  return { loaderData: l, errors: c };
}
function Gp(e, t, n, r) {
  let i = me({}, t);
  for (let s of n) {
    let o = s.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && s.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Wp(e) {
  return e
    ? Tt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Zi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Kp(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function St(e, t) {
  let { pathname: n, routeId: r, method: i, type: s } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
          ? (a = "defer() is not supported in actions")
          : s === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        i && n && r
          ? (a =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Td(e || 500, o, new Error(a), !0)
  );
}
function Yp(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ar(n)) return { result: n, idx: t };
  }
}
function Zv(e) {
  let t = typeof e == "string" ? Kn(e) : e;
  return yr(me({}, t, { hash: "" }));
}
function QS(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function JS(e) {
  return ey(e.result) && DS.has(e.result.status);
}
function or(e) {
  return e.type === fe.deferred;
}
function Tt(e) {
  return e.type === fe.error;
}
function ar(e) {
  return (e && e.type) === fe.redirect;
}
function ZS(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function ey(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function ej(e) {
  return IS.has(e.toLowerCase());
}
function Lt(e) {
  return LS.has(e.toLowerCase());
}
async function Xp(e, t, n, r, i, s) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      l = t[o];
    if (!l) continue;
    let c = e.find((d) => d.route.id === l.route.id),
      u = c != null && !Jv(c, l) && (s && s[l.route.id]) !== void 0;
    if (or(a) && (i || u)) {
      let d = r[o];
      Z(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await ty(a, d, i).then((p) => {
          p && (n[o] = p || n[o]);
        });
    }
  }
}
async function ty(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: fe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: fe.error, error: i };
      }
    return { type: fe.data, data: e.deferredData.data };
  }
}
function Cd(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Zu(e, t) {
  let n = typeof t == "string" ? Kn(t).search : t.search;
  if (e[e.length - 1].route.index && Cd(n || "")) return e[e.length - 1];
  let r = Xv(e);
  return r[r.length - 1];
}
function qp(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function kl(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function tj(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function _i(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function nj(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function xn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function rj(e, t) {
  try {
    let n = e.sessionStorage.getItem(Qv);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {}
}
function ij(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Qv, JSON.stringify(n));
    } catch (r) {
      li(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oa() {
  return (
    (oa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oa.apply(this, arguments)
  );
}
const Ua = E.createContext(null),
  ny = E.createContext(null),
  Er = E.createContext(null),
  bd = E.createContext(null),
  Tr = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ry = E.createContext(null);
function sj(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Is() || Z(!1);
  let { basename: r, navigator: i } = E.useContext(Er),
    { hash: s, pathname: o, search: a } = sy(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : rn([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function Is() {
  return E.useContext(bd) != null;
}
function Ds() {
  return Is() || Z(!1), E.useContext(bd).location;
}
function iy(e) {
  E.useContext(Er).static || E.useLayoutEffect(e);
}
function oj() {
  let { isDataRoute: e } = E.useContext(Tr);
  return e ? yj() : aj();
}
function aj() {
  Is() || Z(!1);
  let e = E.useContext(Ua),
    { basename: t, future: n, navigator: r } = E.useContext(Er),
    { matches: i } = E.useContext(Tr),
    { pathname: s } = Ds(),
    o = JSON.stringify(jd(i, n.v7_relativeSplatPath)),
    a = E.useRef(!1);
  return (
    iy(() => {
      a.current = !0;
    }),
    E.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let d = Ed(c, JSON.parse(o), s, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : rn([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, o, s, e]
    )
  );
}
function sy(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(Er),
    { matches: i } = E.useContext(Tr),
    { pathname: s } = Ds(),
    o = JSON.stringify(jd(i, r.v7_relativeSplatPath));
  return E.useMemo(() => Ed(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function lj(e, t, n, r) {
  Is() || Z(!1);
  let { navigator: i } = E.useContext(Er),
    { matches: s } = E.useContext(Tr),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Ds(),
    u;
  u = c;
  let d = u.pathname || "/",
    p = d;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    p = "/" + d.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let h = Hr(e, { pathname: p });
  return pj(
    h &&
      h.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, a, x.params),
          pathname: rn([
            l,
            i.encodeLocation
              ? i.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? l
              : rn([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        })
      ),
    s,
    n,
    r
  );
}
function uj() {
  let e = vj(),
    t = Fd(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: i }, n) : null,
    null
  );
}
const cj = E.createElement(uj, null);
class dj extends E.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          Tr.Provider,
          { value: this.props.routeContext },
          E.createElement(ry.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function fj(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(Ua);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Tr.Provider, { value: t }, r)
  );
}
function pj(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let u = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    u >= 0 || Z(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < o.length; u++) {
      let d = o[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u),
        d.route.id)
      ) {
        let { loaderData: p, errors: h } = n,
          v =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((u, d, p) => {
    let h,
      v = !1,
      x = null,
      j = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (x = d.route.errorElement || cj),
      l &&
        (c < 0 && p === 0
          ? (xj("route-fallback"), (v = !0), (j = null))
          : c === p &&
            ((v = !0), (j = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, p + 1)),
      y = () => {
        let g;
        return (
          h
            ? (g = x)
            : v
            ? (g = j)
            : d.route.Component
            ? (g = E.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = u),
          E.createElement(fj, {
            match: d,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? E.createElement(dj, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: h,
          children: y(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var oy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(oy || {}),
  aa = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(aa || {});
function hj(e) {
  let t = E.useContext(Ua);
  return t || Z(!1), t;
}
function mj(e) {
  let t = E.useContext(ny);
  return t || Z(!1), t;
}
function gj(e) {
  let t = E.useContext(Tr);
  return t || Z(!1), t;
}
function ay(e) {
  let t = gj(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function vj() {
  var e;
  let t = E.useContext(ry),
    n = mj(aa.UseRouteError),
    r = ay(aa.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function yj() {
  let { router: e } = hj(oy.UseNavigateStable),
    t = ay(aa.UseNavigateStable),
    n = E.useRef(!1);
  return (
    iy(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, oa({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const Qp = {};
function xj(e, t, n) {
  Qp[e] || (Qp[e] = !0);
}
function wj(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Te.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  Is() && Z(!1);
  let l = t.replace(/^\/*/, "/"),
    c = E.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: oa({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof r == "string" && (r = Kn(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: p = "",
      state: h = null,
      key: v = "default",
    } = r,
    x = E.useMemo(() => {
      let j = hi(u, l);
      return j == null
        ? null
        : {
            location: { pathname: j, search: d, hash: p, state: h, key: v },
            navigationType: i,
          };
    }, [l, u, d, p, h, v, i]);
  return x == null
    ? null
    : E.createElement(
        Er.Provider,
        { value: c },
        E.createElement(bd.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function Sj(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: E.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: E.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: E.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Es() {
  return (
    (Es = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Es.apply(this, arguments)
  );
}
function jj(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ej(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Tj(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ej(e);
}
const Fj = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Pj = "6";
try {
  window.__reactRouterVersion = Pj;
} catch {}
function Cj(e, t) {
  return zS({
    basename: void 0,
    future: Es({}, void 0, { v7_prependBasename: !0 }),
    history: cS({ window: void 0 }),
    hydrationData: bj(),
    routes: e,
    mapRouteProperties: Sj,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function bj() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Es({}, t, { errors: kj(t.errors) })), t;
}
function kj(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Td(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let o = new s(i.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        (s.stack = ""), (n[r] = s);
      }
    } else n[r] = i;
  return n;
}
const Nj = E.createContext({ isTransitioning: !1 }),
  Rj = E.createContext(new Map()),
  Aj = "startTransition",
  Jp = Q1[Aj],
  Mj = "flushSync",
  Zp = uS[Mj];
function Lj(e) {
  Jp ? Jp(e) : e();
}
function Ii(e) {
  Zp ? Zp(e) : e();
}
class _j {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Ij(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, s] = E.useState(n.state),
    [o, a] = E.useState(),
    [l, c] = E.useState({ isTransitioning: !1 }),
    [u, d] = E.useState(),
    [p, h] = E.useState(),
    [v, x] = E.useState(),
    j = E.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    y = E.useCallback(
      (w) => {
        m ? Lj(w) : w();
      },
      [m]
    ),
    g = E.useCallback(
      (w, P) => {
        let {
          deletedFetchers: R,
          unstable_flushSync: C,
          unstable_viewTransitionOpts: L,
        } = P;
        R.forEach((D) => j.current.delete(D)),
          w.fetchers.forEach((D, W) => {
            D.data !== void 0 && j.current.set(W, D.data);
          });
        let O =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!L || O) {
          C ? Ii(() => s(w)) : y(() => s(w));
          return;
        }
        if (C) {
          Ii(() => {
            p && (u && u.resolve(), p.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: L.currentLocation,
                nextLocation: L.nextLocation,
              });
          });
          let D = n.window.document.startViewTransition(() => {
            Ii(() => s(w));
          });
          D.finished.finally(() => {
            Ii(() => {
              d(void 0), h(void 0), a(void 0), c({ isTransitioning: !1 });
            });
          }),
            Ii(() => h(D));
          return;
        }
        p
          ? (u && u.resolve(),
            p.skipTransition(),
            x({
              state: w,
              currentLocation: L.currentLocation,
              nextLocation: L.nextLocation,
            }))
          : (a(w),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: L.currentLocation,
              nextLocation: L.nextLocation,
            }));
      },
      [n.window, p, u, j, y]
    );
  E.useLayoutEffect(() => n.subscribe(g), [n, g]),
    E.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new _j());
    }, [l]),
    E.useEffect(() => {
      if (u && o && n.window) {
        let w = o,
          P = u.promise,
          R = n.window.document.startViewTransition(async () => {
            y(() => s(w)), await P;
          });
        R.finished.finally(() => {
          d(void 0), h(void 0), a(void 0), c({ isTransitioning: !1 });
        }),
          h(R);
      }
    }, [y, o, u, n.window]),
    E.useEffect(() => {
      u && o && i.location.key === o.location.key && u.resolve();
    }, [u, p, i.location, o]),
    E.useEffect(() => {
      !l.isTransitioning &&
        v &&
        (a(v.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        x(void 0));
    }, [l.isTransitioning, v]),
    E.useEffect(() => {}, []);
  let S = E.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (w) => n.navigate(w),
        push: (w, P, R) =>
          n.navigate(w, {
            state: P,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset,
          }),
        replace: (w, P, R) =>
          n.navigate(w, {
            replace: !0,
            state: P,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset,
          }),
      }),
      [n]
    ),
    T = n.basename || "/",
    k = E.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: T }),
      [n, S, T]
    );
  return E.createElement(
    E.Fragment,
    null,
    E.createElement(
      Ua.Provider,
      { value: k },
      E.createElement(
        ny.Provider,
        { value: i },
        E.createElement(
          Rj.Provider,
          { value: j.current },
          E.createElement(
            Nj.Provider,
            { value: l },
            E.createElement(
              wj,
              {
                basename: T,
                location: i.location,
                navigationType: i.historyAction,
                navigator: S,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? E.createElement(Dj, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Dj(e) {
  let { routes: t, future: n, state: r } = e;
  return lj(t, void 0, r, n);
}
const Uj =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Oj = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ee = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: c,
        preventScrollReset: u,
        unstable_viewTransition: d,
      } = t,
      p = jj(t, Fj),
      { basename: h } = E.useContext(Er),
      v,
      x = !1;
    if (typeof c == "string" && Oj.test(c) && ((v = c), Uj))
      try {
        let g = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          T = hi(S.pathname, h);
        S.origin === g.origin && T != null
          ? (c = T + S.search + S.hash)
          : (x = !0);
      } catch {}
    let j = sj(c, { relative: i }),
      m = Bj(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: u,
        relative: i,
        unstable_viewTransition: d,
      });
    function y(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return E.createElement(
      "a",
      Es({}, p, { href: v || j, onClick: x || s ? r : y, ref: n, target: l })
    );
  });
var eh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(eh || (eh = {}));
var th;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(th || (th = {}));
function Bj(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = oj(),
    c = Ds(),
    u = sy(e, { relative: o });
  return E.useCallback(
    (d) => {
      if (Tj(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : yr(c) === yr(u);
        l(e, {
          replace: p,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [c, l, u, r, i, n, e, s, o, a]
  );
}
function zj() {
  return f.jsxs("div", {
    className:
      "footer-b pl-[30px] pt-[44px] pb-[114px] text-[11px] space-y-3 lg:max-w-[90vw] lg:mx-auto lg:mt-[2.188vw] lg:flex lg:space-y-0 lg:space-x-1 lg:text-[0.82vw]",
    children: [
      f.jsx("h1", { children: "© 2024 Revel. All Rights Reversed." }),
      f.jsxs("p", {
        children: [
          f.jsx("span", {
            className: "font-semibold underline cursor-pointer",
            children: "Privacy Policy",
          }),
          " ",
          "and",
          " ",
          f.jsx("span", {
            className: "font-semibold underline cursor-pointer",
            children: "Term of use",
          }),
        ],
      }),
    ],
  });
}
function Vj() {
  const e = [
    { text: "About", link: "/about" },
    { text: "Solutions", link: "/solutions" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Contact Me", link: "/contact" },
  ];
  return f.jsxs("div", {
    className: "mt-[87px] lg:mt-0",
    children: [
      f.jsx("h1", {
        className:
          "text-[25px] lg:text-[1.563vw] font-Bold mb-[35px] lg:mb-[2.125vw]",
        children: "Explore",
      }),
      f.jsxs("div", {
        className: "flex space-x-[5.125vw]",
        children: [
          f.jsx("div", {
            className:
              "text-[15px] lg:text-[1vw] font-Bold uppercase space-y-[1.66vw]",
            children: e.map((t, n) =>
              f.jsx(
                "div",
                { children: f.jsx(Ee, { to: t.link, children: t.text }) },
                n
              )
            ),
          }),
          f.jsxs("div", {
            className: "text-[15px] lg:text-[1vw] font-Bold  space-y-[1.688vw]",
            children: [
              f.jsx("p", { className: "uppercase", children: "Resources" }),
              f.jsx("p", {
                className: "font-Regular lg:text-[.96vw]",
                children: f.jsx(Ee, { to: "/blogs", children: "Blogs" }),
              }),
              f.jsx("p", {
                className: "font-Regular lg:text-[.96vw]",
                children: f.jsx(Ee, { to: "/vlogs", children: "Vlogs" }),
              }),
              f.jsx("p", { className: "uppercase", children: "Newsletters" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Hj() {
  const e = [
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/instagram.png",
      link: "https://www.instagram.com/hassanrevela",
    },
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/youtube.png",
      link: "https://www.youtube.com/@hassanrevel",
    },
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/facebook.png",
      link: "https://www.facebook.com/hassanrevela",
    },
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/linkedin.png",
      link: "https://linkedin.com/in/hassanrevel",
    },
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/twitter.png",
      link: "https://twitter.com/hassanrevel",
    },
  ];
  return f.jsxs("div", {
    children: [
      f.jsx("h1", {
        className:
          "text-[25px] lg:text-[1.563vw] font-Bold my-[35px] lg:my-0 lg:mb-[2.125vw]",
        children: "Contact us",
      }),
      f.jsxs("div", {
        className: "space-y-3",
        children: [
          f.jsx("div", {
            className: "",
            children: f.jsx("a", {
              href: "tel: +923257450912",
              children: f.jsxs("div", {
                className:
                  "text-[16px] lg:text-[1vw] flex items-center space-x-4",
                children: [
                  f.jsx("img", {
                    src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/phone.png",
                    alt: "",
                    className: "w-[20px] lg:w-[25px] rotate-[270deg]",
                  }),
                  f.jsx("p", { children: "+923257450912" }),
                ],
              }),
            }),
          }),
          f.jsx("div", {
            children: f.jsx("a", {
              href: "mailto: hassanrevel@hotmail.com",
              children: f.jsxs("div", {
                className:
                  "text-[16px] lg:text-[1vw] flex items-center space-x-4",
                children: [
                  f.jsx("img", {
                    src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/envelope.png",
                    alt: "",
                    className: "w-[20px] lg:w-[25px]",
                  }),
                  f.jsx("p", { children: "hassanrevel@hotmail.com" }),
                ],
              }),
            }),
          }),
          f.jsx("div", {
            className: "flex items-center  space-x-3    ",
            children: e.map((t, n) =>
              f.jsx(
                "div",
                {
                  children: f.jsx(Ee, {
                    to: t.link,
                    target: "_blank",
                    children: f.jsx("img", {
                      src: t.img,
                      alt: "",
                      className: "w-[2.5vh] hover:opacity-60 duration-300",
                    }),
                  }),
                },
                n
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function kd() {
  const e = [
      "REVEL. AI News and updates",
      "My AI tips and tricks",
      "Updates on my AI solutions",
    ],
    [t, n] = E.useState([]),
    r = (i) => !!t.includes(i);
  return f.jsxs("div", {
    className: "flex flex-col",
    children: [
      f.jsx("h1", {
        className:
          "mt-[70px] lg:mt-0 text-[25px] lg:text-[1.563vw] leading-[1.3] font-Bold",
        children: "What are you interested In?",
      }),
      f.jsx("div", {
        className:
          "text-[11px] lg:text-[.93vw] space-y-1 lg:space-y-[0.625vw] pt-[1.875vw] ",
        children: e.map((i, s) =>
          f.jsxs(
            "div",
            {
              className: "flex items-start space-x-2 cursor-pointer",
              onClick: () =>
                t.includes(s) ? n(() => t.filter((o) => o != s)) : n([...t, s]),
              children: [
                f.jsx("div", {
                  style: { width: "20px", height: "20px" },
                  children: f.jsx("input", {
                    type: "checkbox",
                    checked: r(s),
                    className: "w-full h-full cursor-pointer",
                  }),
                }),
                f.jsx("p", { children: i }),
              ],
            },
            s
          )
        ),
      }),
      f.jsx("input", {
        type: "text",
        placeholder: "ENTER YOUR EMAIL ADDRESS",
        className:
          "w-full pl-[10px] lg:pl-[1.25vw] h-[50px] text-[11px] mt-7 lg:h-[3.313vw] lg:text-[0.875vw] leading-normal lg:mt-[1.938vw] text-black focus:outline-none",
      }),
      f.jsx("button", {
        className:
          "text-[12px] h-[58px] lg:text-[1vw] lg:h-[3.625vw] lg:max-w-[9.375vw] lg:mt-[1.813vw]  submit-border font-Bold mt-7 duration-300 hover:bg-white hover:text-darkBlue ",
        children: "SUBMIT",
      }),
    ],
  });
}
function $j() {
  return f.jsx("h1", {
    className: "text-[6.6rem] lg:text-[6.8vw] translate-y-[-2vw] font-Bold",
    children: "R.",
  });
}
function mi() {
  return f.jsxs("section", {
    id: "footer",
    className: "bg-heavyBlue text-white",
    children: [
      f.jsxs("div", {
        className:
          "px-[16px] md:px-[23px] pt-[103px] pb-[30px] lg:p-0 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:pt-[8.938vw] lg:max-w-[90vw] lg:mx-auto lg:min-h-[80vh]",
        children: [f.jsx($j, {}), f.jsx(Vj, {}), f.jsx(Hj, {}), f.jsx(kd, {})],
      }),
      f.jsx(zj, {}),
    ],
  });
}
const Nd = E.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Oa = E.createContext({}),
  Ba = E.createContext(null),
  Rd = typeof document < "u",
  Ad = Rd ? E.useLayoutEffect : E.useEffect,
  ly = E.createContext({ strict: !1 }),
  Md = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Gj = "framerAppearId",
  uy = "data-" + Md(Gj),
  Wj = { skipAnimations: !1, useManualTiming: !1 };
class nh {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function Kj(e) {
  let t = new nh(),
    n = new nh(),
    r = 0,
    i = !1,
    s = !1;
  const o = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        const d = u && i,
          p = d ? t : n;
        return c && o.add(l), p.add(l) && d && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), o.delete(l);
      },
      process: (l) => {
        if (i) {
          s = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            const u = t.order[c];
            o.has(u) && (a.schedule(u), e()), u(l);
          }
        (i = !1), s && ((s = !1), a.process(l));
      },
    };
  return a;
}
const po = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Yj = 40;
function cy(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = po.reduce((d, p) => ((d[p] = Kj(() => (n = !0))), d), {}),
    o = (d) => {
      s[d].process(i);
    },
    a = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, Yj), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        po.forEach(o),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: po.reduce((d, p) => {
      const h = s[p];
      return (d[p] = (v, x = !1, j = !1) => (n || l(), h.schedule(v, x, j))), d;
    }, {}),
    cancel: (d) => po.forEach((p) => s[p].cancel(d)),
    state: i,
    steps: s,
  };
}
const { schedule: Ld, cancel: HN } = cy(queueMicrotask, !1);
function Xj(e, t, n, r) {
  const { visualElement: i } = E.useContext(Oa),
    s = E.useContext(ly),
    o = E.useContext(Ba),
    a = E.useContext(Nd).reducedMotion,
    l = E.useRef();
  (r = r || s.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const c = l.current;
  E.useInsertionEffect(() => {
    c && c.update(n, o);
  });
  const u = E.useRef(!!(n[uy] && !window.HandoffComplete));
  return (
    Ad(() => {
      c &&
        (Ld.postRender(c.render),
        u.current && c.animationState && c.animationState.animateChanges());
    }),
    E.useEffect(() => {
      c &&
        (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && ((u.current = !1), (window.HandoffComplete = !0)));
    }),
    c
  );
}
function $r(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function qj(e, t, n) {
  return E.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : $r(n) && (n.current = r));
    },
    [t]
  );
}
function Ts(e) {
  return typeof e == "string" || Array.isArray(e);
}
function za(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const _d = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Id = ["initial", ..._d];
function Va(e) {
  return za(e.animate) || Id.some((t) => Ts(e[t]));
}
function dy(e) {
  return !!(Va(e) || e.variants);
}
function Qj(e, t) {
  if (Va(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ts(n) ? n : void 0,
      animate: Ts(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Jj(e) {
  const { initial: t, animate: n } = Qj(e, E.useContext(Oa));
  return E.useMemo(() => ({ initial: t, animate: n }), [rh(t), rh(n)]);
}
function rh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ih = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Fs = {};
for (const e in ih) Fs[e] = { isEnabled: (t) => ih[e].some((n) => !!t[n]) };
function Zj(e) {
  for (const t in e) Fs[t] = { ...Fs[t], ...e[t] };
}
const Dd = E.createContext({}),
  fy = E.createContext({}),
  eE = Symbol.for("motionComponentSymbol");
function tE({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Zj(e);
  function s(a, l) {
    let c;
    const u = { ...E.useContext(Nd), ...a, layoutId: nE(a) },
      { isStatic: d } = u,
      p = Jj(a),
      h = r(a, d);
    if (!d && Rd) {
      p.visualElement = Xj(i, h, u, t);
      const v = E.useContext(fy),
        x = E.useContext(ly).strict;
      p.visualElement && (c = p.visualElement.loadFeatures(u, x, e, v));
    }
    return f.jsxs(Oa.Provider, {
      value: p,
      children: [
        c && p.visualElement
          ? f.jsx(c, { visualElement: p.visualElement, ...u })
          : null,
        n(i, a, qj(h, p.visualElement, l), h, d, p.visualElement),
      ],
    });
  }
  const o = E.forwardRef(s);
  return (o[eE] = i), o;
}
function nE({ layoutId: e }) {
  const t = E.useContext(Dd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rE(e) {
  function t(r, i = {}) {
    return tE(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const iE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ud(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(iE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const la = {};
function sE(e) {
  Object.assign(la, e);
}
const Us = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Fr = new Set(Us);
function py(e, { layout: t, layoutId: n }) {
  return (
    Fr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!la[e] || e === "opacity"))
  );
}
const $e = (e) => !!(e && e.getVelocity),
  oE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  aE = Us.length;
function lE(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let s = "";
  for (let o = 0; o < aE; o++) {
    const a = Us[o];
    if (e[a] !== void 0) {
      const l = oE[a] || a;
      s += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (s += "translateZ(0)"),
    (s = s.trim()),
    i ? (s = i(e, r ? "" : s)) : n && r && (s = "none"),
    s
  );
}
const hy = (e) => (t) => typeof t == "string" && t.startsWith(e),
  my = hy("--"),
  uE = hy("var(--"),
  Od = (e) => (uE(e) ? cE.test(e.split("/*")[0].trim()) : !1),
  cE =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  dE = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  zn = (e, t, n) => (n > t ? t : n < e ? e : n),
  gi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  es = { ...gi, transform: (e) => zn(0, 1, e) },
  ho = { ...gi, default: 1 },
  ts = (e) => Math.round(e * 1e5) / 1e5,
  Bd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  fE =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  pE =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Os(e) {
  return typeof e == "string";
}
const Bs = (e) => ({
    test: (t) => Os(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wn = Bs("deg"),
  Yt = Bs("%"),
  G = Bs("px"),
  hE = Bs("vh"),
  mE = Bs("vw"),
  sh = {
    ...Yt,
    parse: (e) => Yt.parse(e) / 100,
    transform: (e) => Yt.transform(e * 100),
  },
  oh = { ...gi, transform: Math.round },
  gy = {
    borderWidth: G,
    borderTopWidth: G,
    borderRightWidth: G,
    borderBottomWidth: G,
    borderLeftWidth: G,
    borderRadius: G,
    radius: G,
    borderTopLeftRadius: G,
    borderTopRightRadius: G,
    borderBottomRightRadius: G,
    borderBottomLeftRadius: G,
    width: G,
    maxWidth: G,
    height: G,
    maxHeight: G,
    size: G,
    top: G,
    right: G,
    bottom: G,
    left: G,
    padding: G,
    paddingTop: G,
    paddingRight: G,
    paddingBottom: G,
    paddingLeft: G,
    margin: G,
    marginTop: G,
    marginRight: G,
    marginBottom: G,
    marginLeft: G,
    rotate: wn,
    rotateX: wn,
    rotateY: wn,
    rotateZ: wn,
    scale: ho,
    scaleX: ho,
    scaleY: ho,
    scaleZ: ho,
    skew: wn,
    skewX: wn,
    skewY: wn,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: es,
    originX: sh,
    originY: sh,
    originZ: G,
    zIndex: oh,
    backgroundPositionX: G,
    backgroundPositionY: G,
    fillOpacity: es,
    strokeOpacity: es,
    numOctaves: oh,
  };
function zd(e, t, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: a } = e;
  let l = !1,
    c = !1,
    u = !0;
  for (const d in t) {
    const p = t[d];
    if (my(d)) {
      s[d] = p;
      continue;
    }
    const h = gy[d],
      v = dE(p, h);
    if (Fr.has(d)) {
      if (((l = !0), (o[d] = v), !u)) continue;
      p !== (h.default || 0) && (u = !1);
    } else d.startsWith("origin") ? ((c = !0), (a[d] = v)) : (i[d] = v);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = lE(e.transform, n, u, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    const { originX: d = "50%", originY: p = "50%", originZ: h = 0 } = a;
    i.transformOrigin = `${d} ${p} ${h}`;
  }
}
const Vd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function vy(e, t, n) {
  for (const r in t) !$e(t[r]) && !py(r, n) && (e[r] = t[r]);
}
function gE({ transformTemplate: e }, t, n) {
  return E.useMemo(() => {
    const r = Vd();
    return (
      zd(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function vE(e, t, n) {
  const r = e.style || {},
    i = {};
  return vy(i, r, e), Object.assign(i, gE(e, t, n)), i;
}
function yE(e, t, n) {
  const r = {},
    i = vE(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const xE = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ua(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    xE.has(e)
  );
}
let yy = (e) => !ua(e);
function wE(e) {
  e && (yy = (t) => (t.startsWith("on") ? !ua(t) : e(t)));
}
try {
  wE(require("@emotion/is-prop-valid").default);
} catch {}
function SE(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((yy(i) ||
        (n === !0 && ua(i)) ||
        (!t && !ua(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function ah(e, t, n) {
  return typeof e == "string" ? e : G.transform(t + n * e);
}
function jE(e, t, n) {
  const r = ah(t, e.x, e.width),
    i = ah(n, e.y, e.height);
  return `${r} ${i}`;
}
const EE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  TE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function FE(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? EE : TE;
  e[s.offset] = G.transform(-r);
  const o = G.transform(t),
    a = G.transform(n);
  e[s.array] = `${o} ${a}`;
}
function Hd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  d,
  p
) {
  if ((zd(e, c, u, p), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: v, dimensions: x } = e;
  h.transform && (x && (v.transform = h.transform), delete h.transform),
    x &&
      (i !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = jE(
        x,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && FE(h, o, a, l, !1);
}
const xy = () => ({ ...Vd(), attrs: {} }),
  $d = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function PE(e, t, n, r) {
  const i = E.useMemo(() => {
    const s = xy();
    return (
      Hd(s, t, { enableHardwareAcceleration: !1 }, $d(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    vy(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function CE(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (Ud(n) ? PE : yE)(r, s, o, n),
      c = SE(r, typeof n == "string", e),
      u = n !== E.Fragment ? { ...c, ...l, ref: i } : {},
      { children: d } = r,
      p = E.useMemo(() => ($e(d) ? d.get() : d), [d]);
    return E.createElement(n, { ...u, children: p });
  };
}
function wy(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Sy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function jy(e, t, n, r) {
  wy(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Sy.has(i) ? i : Md(i), t.attrs[i]);
}
function Gd(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    ($e(i[o]) ||
      (t.style && $e(t.style[o])) ||
      py(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Ey(e, t, n) {
  const r = Gd(e, t, n);
  for (const i in e)
    if ($e(e[i]) || $e(t[i])) {
      const s =
        Us.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Wd(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Ty(e) {
  const t = E.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ec = (e) => Array.isArray(e),
  bE = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  kE = (e) => (ec(e) ? e[e.length - 1] || 0 : e);
function No(e) {
  const t = $e(e) ? e.get() : e;
  return bE(t) ? t.toValue() : t;
}
function NE(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: RE(r, i, s, e), renderState: t() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const Fy = (e) => (t, n) => {
  const r = E.useContext(Oa),
    i = E.useContext(Ba),
    s = () => NE(e, t, r, i);
  return n ? s() : Ty(s);
};
function RE(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const p in s) i[p] = No(s[p]);
  let { initial: o, animate: a } = e;
  const l = Va(e),
    c = dy(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const d = u ? a : o;
  return (
    d &&
      typeof d != "boolean" &&
      !za(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const v = Wd(e, h);
        if (!v) return;
        const { transitionEnd: x, transition: j, ...m } = v;
        for (const y in m) {
          let g = m[y];
          if (Array.isArray(g)) {
            const S = u ? g.length - 1 : 0;
            g = g[S];
          }
          g !== null && (i[y] = g);
        }
        for (const y in x) i[y] = x[y];
      }),
    i
  );
}
const Ge = (e) => e,
  {
    schedule: Ae,
    cancel: Vn,
    state: De,
    steps: Nl,
  } = cy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ge, !0),
  AE = {
    useVisualState: Fy({
      scrapeMotionValuesFromProps: Ey,
      createRenderState: xy,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Ae.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Ae.render(() => {
            Hd(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              $d(t.tagName),
              e.transformTemplate
            ),
              jy(t, n);
          });
      },
    }),
  },
  ME = {
    useVisualState: Fy({
      scrapeMotionValuesFromProps: Gd,
      createRenderState: Vd,
    }),
  };
function LE(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Ud(e) ? AE : ME),
    preloadedFeatures: n,
    useRender: CE(t),
    createVisualElement: r,
    Component: e,
  };
}
function en(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Py = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ha(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const _E = (e) => (t) => Py(t) && e(t, Ha(t));
function sn(e, t, n, r) {
  return en(e, t, _E(n), r);
}
const IE = (e, t) => (n) => t(e(n)),
  on = (...e) => e.reduce(IE);
function Cy(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const lh = Cy("dragHorizontal"),
  uh = Cy("dragVertical");
function by(e) {
  let t = !1;
  if (e === "y") t = uh();
  else if (e === "x") t = lh();
  else {
    const n = lh(),
      r = uh();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function ky() {
  const e = by(!0);
  return e ? (e(), !1) : !0;
}
class Yn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function ch(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (s, o) => {
      if (s.pointerType === "touch" || ky()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && l(s, o);
    };
  return sn(e.current, n, i, { passive: !e.getProps()[r] });
}
class DE extends Yn {
  mount() {
    this.unmount = on(ch(this.node, !0), ch(this.node, !1));
  }
  unmount() {}
}
class UE extends Yn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = on(
      en(this.node.current, "focus", () => this.onFocus()),
      en(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Ny = (e, t) => (t ? (e === t ? !0 : Ny(e, t.parentElement)) : !1);
function Rl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ha(n));
}
class OE extends Yn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ge),
      (this.removeEndListeners = Ge),
      (this.removeAccessibleListeners = Ge),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = sn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: c,
                onTapCancel: u,
                globalTapTarget: d,
              } = this.node.getProps();
              !d && !Ny(this.node.current, a.target)
                ? u && u(a, l)
                : c && c(a, l);
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = sn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = on(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Rl("up", (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && u(l, c);
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = en(this.node.current, "keyup", o)),
              Rl("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = en(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Rl("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = en(this.node.current, "blur", r);
        this.removeAccessibleListeners = on(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && r(t, n);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !ky()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && r(t, n);
  }
  mount() {
    const t = this.node.getProps(),
      n = sn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = en(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = on(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const tc = new WeakMap(),
  Al = new WeakMap(),
  BE = (e) => {
    const t = tc.get(e.target);
    t && t(e);
  },
  zE = (e) => {
    e.forEach(BE);
  };
function VE({ root: e, ...t }) {
  const n = e || document;
  Al.has(n) || Al.set(n, {});
  const r = Al.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(zE, { root: e, ...t })), r[i];
}
function HE(e, t, n) {
  const r = VE(t);
  return (
    tc.set(e, n),
    r.observe(e),
    () => {
      tc.delete(e), r.unobserve(e);
    }
  );
}
const $E = { some: 0, all: 1 };
class GE extends Yn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : $E[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
          p = c ? u : d;
        p && p(l);
      };
    return HE(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(WE(t, n)) && this.startObserver();
  }
  unmount() {}
}
function WE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const KE = {
  inView: { Feature: GE },
  tap: { Feature: OE },
  focus: { Feature: UE },
  hover: { Feature: DE },
};
function Ry(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function YE(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function XE(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function $a(e, t, n) {
  const r = e.getProps();
  return Wd(r, t, n !== void 0 ? n : r.custom, YE(e), XE(e));
}
const Dn = (e) => e * 1e3,
  an = (e) => e / 1e3,
  qE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  QE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  JE = { type: "keyframes", duration: 0.8 },
  ZE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  eT = (e, { keyframes: t }) =>
    t.length > 2
      ? JE
      : Fr.has(e)
      ? e.startsWith("scale")
        ? QE(t[1])
        : qE
      : ZE;
function tT({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function Kd(e, t) {
  return e[t] || e.default || e;
}
const nT = (e) => e !== null;
function Ga(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(nT),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
let Ro;
function rT() {
  Ro = void 0;
}
const Un = {
    now: () => (
      Ro === void 0 &&
        Un.set(
          De.isProcessing || Wj.useManualTiming
            ? De.timestamp
            : performance.now()
        ),
      Ro
    ),
    set: (e) => {
      (Ro = e), queueMicrotask(rT);
    },
  },
  Ay = (e) => /^0[^.\s]+$/u.test(e);
function iT(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Ay(e)
    : !0;
}
let nc = Ge;
const My = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  sT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function oT(e) {
  const t = sT.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Ly(e, t, n = 1) {
  const [r, i] = oT(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return My(o) ? parseFloat(o) : o;
  }
  return Od(i) ? Ly(i, t, n + 1) : i;
}
const aT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  dh = (e) => e === gi || e === G,
  fh = (e, t) => parseFloat(e.split(", ")[t]),
  ph =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return fh(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? fh(s[1], e) : 0;
      }
    },
  lT = new Set(["x", "y", "z"]),
  uT = Us.filter((e) => !lT.has(e));
function cT(e) {
  const t = [];
  return (
    uT.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ui = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: ph(4, 13),
  y: ph(5, 14),
};
ui.translateX = ui.x;
ui.translateY = ui.y;
const _y = (e) => (t) => t.test(e),
  dT = { test: (e) => e === "auto", parse: (e) => e },
  Iy = [gi, G, Yt, wn, mE, hE, dT],
  hh = (e) => Iy.find(_y(e)),
  dr = new Set();
let rc = !1,
  ic = !1;
function Dy() {
  if (ic) {
    const e = Array.from(dr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = cT(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (ic = !1), (rc = !1), dr.forEach((e) => e.complete()), dr.clear();
}
function Uy() {
  dr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ic = !0);
  });
}
function fT() {
  Uy(), Dy();
}
class Yd {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (dr.add(this),
          rc || ((rc = !0), Ae.read(Uy), Ae.resolveKeyframes(Dy)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      dr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), dr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Xd = (e, t) => (n) =>
    !!(
      (Os(n) && pE.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Oy = (e, t, n) => (r) => {
    if (!Os(r)) return r;
    const [i, s, o, a] = r.match(Bd);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  pT = (e) => zn(0, 255, e),
  Ml = { ...gi, transform: (e) => Math.round(pT(e)) },
  lr = {
    test: Xd("rgb", "red"),
    parse: Oy("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ml.transform(e) +
      ", " +
      Ml.transform(t) +
      ", " +
      Ml.transform(n) +
      ", " +
      ts(es.transform(r)) +
      ")",
  };
function hT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const sc = { test: Xd("#"), parse: hT, transform: lr.transform },
  Gr = {
    test: Xd("hsl", "hue"),
    parse: Oy("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Yt.transform(ts(t)) +
      ", " +
      Yt.transform(ts(n)) +
      ", " +
      ts(es.transform(r)) +
      ")",
  },
  Ve = {
    test: (e) => lr.test(e) || sc.test(e) || Gr.test(e),
    parse: (e) =>
      lr.test(e) ? lr.parse(e) : Gr.test(e) ? Gr.parse(e) : sc.parse(e),
    transform: (e) =>
      Os(e) ? e : e.hasOwnProperty("red") ? lr.transform(e) : Gr.transform(e),
  };
function mT(e) {
  var t, n;
  return (
    isNaN(e) &&
    Os(e) &&
    (((t = e.match(Bd)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(fE)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const By = "number",
  zy = "color",
  gT = "var",
  vT = "var(",
  mh = "${}",
  yT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ca(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      yT,
      (l) => (
        Ve.test(l)
          ? (r.color.push(s), i.push(zy), n.push(Ve.parse(l)))
          : l.startsWith(vT)
          ? (r.var.push(s), i.push(gT), n.push(l))
          : (r.number.push(s), i.push(By), n.push(parseFloat(l))),
        ++s,
        mh
      )
    )
    .split(mh);
  return { values: n, split: a, indexes: r, types: i };
}
function Vy(e) {
  return ca(e).values;
}
function Hy(e) {
  const { split: t, types: n } = ca(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === By
          ? (s += ts(i[o]))
          : a === zy
          ? (s += Ve.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const xT = (e) => (typeof e == "number" ? 0 : e);
function wT(e) {
  const t = Vy(e);
  return Hy(e)(t.map(xT));
}
const Hn = {
    test: mT,
    parse: Vy,
    createTransformer: Hy,
    getAnimatableNone: wT,
  },
  ST = new Set(["brightness", "contrast", "saturate", "opacity"]);
function jT(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Bd) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = ST.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const ET = /\b([a-z-]*)\(.*?\)/gu,
  oc = {
    ...Hn,
    getAnimatableNone: (e) => {
      const t = e.match(ET);
      return t ? t.map(jT).join(" ") : e;
    },
  },
  TT = {
    ...gy,
    color: Ve,
    backgroundColor: Ve,
    outlineColor: Ve,
    fill: Ve,
    stroke: Ve,
    borderColor: Ve,
    borderTopColor: Ve,
    borderRightColor: Ve,
    borderBottomColor: Ve,
    borderLeftColor: Ve,
    filter: oc,
    WebkitFilter: oc,
  },
  qd = (e) => TT[e];
function $y(e, t) {
  let n = qd(e);
  return (
    n !== oc && (n = Hn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const FT = new Set(["auto", "none", "0"]);
function PT(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !FT.has(s) && (i = e[r]), r++;
  }
  if (i && n) for (const s of t) e[s] = $y(n, i);
}
class Gy extends Yd {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      const c = t[l];
      if (typeof c == "string" && Od(c)) {
        const u = Ly(c, n.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !aT.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = hh(i),
      a = hh(s);
    if (o !== a)
      if (dh(o) && dh(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) iT(t[i]) && r.push(i);
    r.length && PT(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ui[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = ui[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function CT(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const gh = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Hn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function bT(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function kT(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  const s = e[e.length - 1],
    o = gh(i, t),
    a = gh(s, t);
  return !o || !a ? !1 : bT(e) || (n === "spring" && r);
}
class Wy {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && fT(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !kT(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l(Ga(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Ky(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const NT = 5;
function Yy(e, t, n) {
  const r = Math.max(t - NT, 0);
  return Ky(n - e(r), t - r);
}
const Ll = 0.001,
  RT = 0.01,
  AT = 10,
  MT = 0.05,
  LT = 1;
function _T({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = zn(MT, LT, o)),
    (e = zn(RT, AT, an(e))),
    o < 1
      ? ((i = (c) => {
          const u = c * o,
            d = u * e,
            p = u - n,
            h = ac(c, o),
            v = Math.exp(-d);
          return Ll - (p / h) * v;
        }),
        (s = (c) => {
          const d = c * o * e,
            p = d * n + n,
            h = Math.pow(o, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-d),
            x = ac(Math.pow(c, 2), o);
          return ((-i(c) + Ll > 0 ? -1 : 1) * ((p - h) * v)) / x;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * e),
            d = (c - n) * e + 1;
          return -Ll + u * d;
        }),
        (s = (c) => {
          const u = Math.exp(-c * e),
            d = (n - c) * (e * e);
          return u * d;
        }));
  const a = 5 / e,
    l = DT(i, s, a);
  if (((e = Dn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const IT = 12;
function DT(e, t, n) {
  let r = n;
  for (let i = 1; i < IT; i++) r = r - e(r) / t(r);
  return r;
}
function ac(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const UT = ["duration", "bounce"],
  OT = ["stiffness", "damping", "mass"];
function vh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function BT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!vh(e, OT) && vh(e, UT)) {
    const n = _T(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Xy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: d,
      isResolvedFromDuration: p,
    } = BT({ ...r, velocity: -an(r.velocity || 0) }),
    h = d || 0,
    v = l / (2 * Math.sqrt(a * c)),
    x = s - i,
    j = an(Math.sqrt(a / c)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let y;
  if (v < 1) {
    const g = ac(j, v);
    y = (S) => {
      const T = Math.exp(-v * j * S);
      return (
        s - T * (((h + v * j * x) / g) * Math.sin(g * S) + x * Math.cos(g * S))
      );
    };
  } else if (v === 1) y = (g) => s - Math.exp(-j * g) * (x + (h + j * x) * g);
  else {
    const g = j * Math.sqrt(v * v - 1);
    y = (S) => {
      const T = Math.exp(-v * j * S),
        k = Math.min(g * S, 300);
      return (
        s - (T * ((h + v * j * x) * Math.sinh(k) + g * x * Math.cosh(k))) / g
      );
    };
  }
  return {
    calculatedDuration: (p && u) || null,
    next: (g) => {
      const S = y(g);
      if (p) o.done = g >= u;
      else {
        let T = h;
        g !== 0 && (v < 1 ? (T = Yy(y, g, S)) : (T = 0));
        const k = Math.abs(T) <= n,
          w = Math.abs(s - S) <= t;
        o.done = k && w;
      }
      return (o.value = o.done ? s : S), o;
    },
  };
}
function yh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const d = e[0],
    p = { done: !1, value: d },
    h = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    v = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let x = n * t;
  const j = d + x,
    m = o === void 0 ? j : o(j);
  m !== j && (x = m - d);
  const y = (P) => -x * Math.exp(-P / r),
    g = (P) => m + y(P),
    S = (P) => {
      const R = y(P),
        C = g(P);
      (p.done = Math.abs(R) <= c), (p.value = p.done ? m : C);
    };
  let T, k;
  const w = (P) => {
    h(p.value) &&
      ((T = P),
      (k = Xy({
        keyframes: [p.value, v(p.value)],
        velocity: Yy(g, P, p.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    w(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let R = !1;
        return (
          !k && T === void 0 && ((R = !0), S(P), w(P)),
          T !== void 0 && P >= T ? k.next(P - T) : (!R && S(P), p)
        );
      },
    }
  );
}
const qy = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  zT = 1e-7,
  VT = 12;
function HT(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = qy(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > zT && ++a < VT);
  return o;
}
function zs(e, t, n, r) {
  if (e === t && n === r) return Ge;
  const i = (s) => HT(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : qy(i(s), t, r));
}
const $T = zs(0.42, 0, 1, 1),
  GT = zs(0, 0, 0.58, 1),
  Qy = zs(0.42, 0, 0.58, 1),
  WT = (e) => Array.isArray(e) && typeof e[0] != "number",
  Jy = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Zy = (e) => (t) => 1 - e(1 - t),
  Qd = (e) => 1 - Math.sin(Math.acos(e)),
  e0 = Zy(Qd),
  KT = Jy(Qd),
  t0 = zs(0.33, 1.53, 0.69, 0.99),
  Jd = Zy(t0),
  YT = Jy(Jd),
  XT = (e) =>
    (e *= 2) < 1 ? 0.5 * Jd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  xh = {
    linear: Ge,
    easeIn: $T,
    easeInOut: Qy,
    easeOut: GT,
    circIn: Qd,
    circInOut: KT,
    circOut: e0,
    backIn: Jd,
    backInOut: YT,
    backOut: t0,
    anticipate: XT,
  },
  wh = (e) => {
    if (Array.isArray(e)) {
      nc(e.length === 4);
      const [t, n, r, i] = e;
      return zs(t, n, r, i);
    } else if (typeof e == "string") return nc(xh[e] !== void 0), xh[e];
    return e;
  },
  Ps = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ve = (e, t, n) => e + (t - e) * n;
function _l(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function qT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = _l(l, a, e + 1 / 3)), (s = _l(l, a, e)), (o = _l(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const Il = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  QT = [sc, lr, Gr],
  JT = (e) => QT.find((t) => t.test(e));
function Sh(e) {
  const t = JT(e);
  let n = t.parse(e);
  return t === Gr && (n = qT(n)), n;
}
const jh = (e, t) => {
  const n = Sh(e),
    r = Sh(t),
    i = { ...n };
  return (s) => (
    (i.red = Il(n.red, r.red, s)),
    (i.green = Il(n.green, r.green, s)),
    (i.blue = Il(n.blue, r.blue, s)),
    (i.alpha = ve(n.alpha, r.alpha, s)),
    lr.transform(i)
  );
};
function lc(e, t) {
  return (n) => (n > 0 ? t : e);
}
function ZT(e, t) {
  return (n) => ve(e, t, n);
}
function Zd(e) {
  return typeof e == "number"
    ? ZT
    : typeof e == "string"
    ? Od(e)
      ? lc
      : Ve.test(e)
      ? jh
      : nF
    : Array.isArray(e)
    ? n0
    : typeof e == "object"
    ? Ve.test(e)
      ? jh
      : eF
    : lc;
}
function n0(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Zd(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function eF(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Zd(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function tF(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const nF = (e, t) => {
  const n = Hn.createTransformer(t),
    r = ca(e),
    i = ca(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? on(n0(tF(r, i), i.values), n)
    : lc(e, t);
};
function r0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ve(e, t, n)
    : Zd(e)(e, t);
}
function rF(e, t, n) {
  const r = [],
    i = n || r0,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ge : t;
      a = on(l, a);
    }
    r.push(a);
  }
  return r;
}
function iF(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((nc(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = rF(t, r, i),
    a = o.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      const d = Ps(e[u], e[u + 1], c);
      return o[u](d);
    };
  return n ? (c) => l(zn(e[0], e[s - 1], c)) : l;
}
function sF(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Ps(0, t, r);
    e.push(ve(n, 1, i));
  }
}
function oF(e) {
  const t = [0];
  return sF(t, e.length - 1), t;
}
function aF(e, t) {
  return e.map((n) => n * t);
}
function lF(e, t) {
  return e.map(() => t || Qy).splice(0, e.length - 1);
}
function da({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = WT(r) ? r.map(wh) : wh(r),
    s = { done: !1, value: t[0] },
    o = aF(n && n.length === t.length ? n : oF(t), e),
    a = iF(o, t, { ease: Array.isArray(i) ? i : lF(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Eh = 2e4;
function uF(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Eh; ) (t += n), (r = e.next(t));
  return t >= Eh ? 1 / 0 : t;
}
const cF = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ae.update(t, !0),
      stop: () => Vn(t),
      now: () => (De.isProcessing ? De.timestamp : Un.now()),
    };
  },
  dF = { decay: yh, inertia: yh, tween: da, keyframes: da, spring: Xy },
  fF = (e) => e / 100;
class ef extends Wy {
  constructor({ KeyframeResolver: t = Yd, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: i, keyframes: s } = this.options,
      o = (a, l) => this.onKeyframesResolved(a, l);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(s, o, r, i))
      : (this.resolver = new t(s, o, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = dF[n] || da;
    let l, c;
    a !== da &&
      typeof t[0] != "number" &&
      ((l = on(fF, r0(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = uF(u));
    const { calculatedDuration: d } = u,
      p = d + i,
      h = p * (r + 1) - i;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: p,
      totalDuration: h,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: p,
      repeat: h,
      repeatType: v,
      repeatDelay: x,
      onUpdate: j,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - p * (this.speed >= 0 ? 1 : -1),
      y = this.speed >= 0 ? m < 0 : m > u;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u);
    let g = this.currentTime,
      S = s;
    if (h) {
      const P = Math.min(this.currentTime, u) / d;
      let R = Math.floor(P),
        C = P % 1;
      !C && P >= 1 && (C = 1),
        C === 1 && R--,
        (R = Math.min(R, h + 1)),
        !!(R % 2) &&
          (v === "reverse"
            ? ((C = 1 - C), x && (C -= x / d))
            : v === "mirror" && (S = o)),
        (g = zn(0, 1, C) * d);
    }
    const T = y ? { done: !1, value: l[0] } : S.next(g);
    a && (T.value = a(T.value));
    let { done: k } = T;
    !y &&
      c !== null &&
      (k = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const w =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && k));
    return (
      w && i !== void 0 && (T.value = Ga(l, this.options, i)),
      j && j(T.value),
      w && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? an(t.calculatedDuration) : 0;
  }
  get time() {
    return an(this.currentTime);
  }
  set time(t) {
    (t = Dn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = an(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = cF, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const i0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function s0(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in tf) ||
    i0(e) ||
    (Array.isArray(e) && e.every(s0))
  );
}
const Hi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  tf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Hi([0, 0.65, 0.55, 1]),
    circOut: Hi([0.55, 0, 1, 0.45]),
    backIn: Hi([0.31, 0.01, 0.66, -0.59]),
    backOut: Hi([0.33, 1.53, 0.69, 0.99]),
  };
function pF(e) {
  return o0(e) || tf.easeOut;
}
function o0(e) {
  if (e) return i0(e) ? Hi(e) : Array.isArray(e) ? e.map(pF) : tf[e];
}
function hF(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = o0(a);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const mF = CT(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  gF = new Set(["opacity", "clipPath", "filter", "transform"]),
  fa = 10,
  vF = 2e4;
function yF(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !s0(e.ease);
}
function xF(e, t) {
  const n = new ef({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < vF; ) (r = n.sample(s)), i.push(r.value), (s += fa);
  return { times: void 0, keyframes: i, duration: s - fa, ease: "linear" };
}
class Th extends Wy {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new Gy(i, (s, o) => this.onKeyframesResolved(s, o), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (yF(this.options)) {
      const { onComplete: d, onUpdate: p, motionValue: h, ...v } = this.options,
        x = xF(t, v);
      (t = x.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = x.duration),
        (s = x.times),
        (o = x.ease),
        (a = "keyframes");
    }
    const u = hF(l.owner.current, c, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (u.startTime = Un.now()),
      this.pendingTimeline
        ? ((u.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Ga(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: u, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return an(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return an(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Dn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ge;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Ge;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: l,
            onUpdate: c,
            onComplete: u,
            ...d
          } = this.options,
          p = new ef({
            ...d,
            keyframes: r,
            duration: i,
            type: s,
            ease: o,
            times: a,
            isGenerator: !0,
          }),
          h = Dn(this.time);
        l.setWithVelocity(p.sample(h - fa).value, p.sample(h).value, fa);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    return (
      mF() &&
      r &&
      gF.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const nf =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = Kd(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - Dn(l);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (p) => {
        t.set(p), a.onUpdate && a.onUpdate(p);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    tT(a) || (u = { ...u, ...eT(e, u) }),
      u.duration && (u.duration = Dn(u.duration)),
      u.repeatDelay && (u.repeatDelay = Dn(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      d && !s && t.get() !== void 0)
    ) {
      const p = Ga(u.keyframes, a);
      if (p !== void 0) {
        Ae.update(() => {
          u.onUpdate(p), u.onComplete();
        });
        return;
      }
    }
    return !s && Th.supports(u) ? new Th(u) : new ef(u);
  };
function pa(e) {
  return !!($e(e) && e.add);
}
function rf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function sf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class of {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return rf(this.subscriptions, t), () => sf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Fh = 30,
  wF = (e) => !isNaN(parseFloat(e));
class SF {
  constructor(t, n = {}) {
    (this.version = "11.1.8"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = Un.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = wF(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = Un.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new of());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Ae.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Un.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Fh
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fh);
    return Ky(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Cs(e, t) {
  return new SF(e, t);
}
function jF(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Cs(n));
}
function EF(e, t) {
  const n = $a(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = kE(s[o]);
    jF(e, o, a);
  }
}
function TF({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function a0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  const c = e.getValue("willChange");
  r && (o = r);
  const u = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const p in l) {
    const h = e.getValue(
        p,
        (s = e.latestValues[p]) !== null && s !== void 0 ? s : null
      ),
      v = l[p];
    if (v === void 0 || (d && TF(d, p))) continue;
    const x = { delay: n, elapsed: 0, ...Kd(o || {}, p) };
    let j = !1;
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[uy];
      if (g) {
        const S = window.HandoffAppearAnimations(g, p);
        S !== null && ((x.elapsed = S), (j = !0));
      }
    }
    h.start(
      nf(p, h, v, e.shouldReduceMotion && Fr.has(p) ? { type: !1 } : x, e, j)
    );
    const m = h.animation;
    m && (pa(c) && (c.add(p), m.then(() => c.remove(p))), u.push(m));
  }
  return (
    a &&
      Promise.all(u).then(() => {
        Ae.update(() => {
          a && EF(e, a);
        });
      }),
    u
  );
}
function uc(e, t, n = {}) {
  var r;
  const i = $a(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(a0(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: d,
              staggerDirection: p,
            } = s;
            return FF(e, t, u + c, d, p, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function FF(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(PF)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          o.push(
            uc(c, t, { ...s, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function PF(e, t) {
  return e.sortNodePosition(t);
}
function CF(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => uc(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = uc(e, t, n);
  else {
    const i = typeof t == "function" ? $a(e, t, n.custom) : t;
    r = Promise.all(a0(e, i, n));
  }
  return r.then(() => {
    Ae.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const bF = [..._d].reverse(),
  kF = _d.length;
function NF(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => CF(e, n, r)));
}
function RF(e) {
  let t = NF(e);
  const n = MF();
  let r = !0;
  const i = (l) => (c, u) => {
    var d;
    const p = $a(
      e,
      u,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (p) {
      const { transition: h, transitionEnd: v, ...x } = p;
      c = { ...c, ...x, ...v };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const c = e.getProps(),
      u = e.getVariantContext(!0) || {},
      d = [],
      p = new Set();
    let h = {},
      v = 1 / 0;
    for (let j = 0; j < kF; j++) {
      const m = bF[j],
        y = n[m],
        g = c[m] !== void 0 ? c[m] : u[m],
        S = Ts(g),
        T = m === l ? y.isActive : null;
      T === !1 && (v = j);
      let k = g === u[m] && g !== c[m] && S;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (y.protectedKeys = { ...h }),
        (!y.isActive && T === null) ||
          (!g && !y.prevProp) ||
          za(g) ||
          typeof g == "boolean")
      )
        continue;
      let P =
          AF(y.prevProp, g) ||
          (m === l && y.isActive && !k && S) ||
          (j > v && S),
        R = !1;
      const C = Array.isArray(g) ? g : [g];
      let L = C.reduce(i(m), {});
      T === !1 && (L = {});
      const { prevResolvedValues: O = {} } = y,
        D = { ...O, ...L },
        W = (K) => {
          (P = !0),
            p.has(K) && ((R = !0), p.delete(K)),
            (y.needsAnimating[K] = !0);
          const se = e.getValue(K);
          se && (se.liveStyle = !1);
        };
      for (const K in D) {
        const se = L[K],
          be = O[K];
        if (h.hasOwnProperty(K)) continue;
        let A = !1;
        ec(se) && ec(be) ? (A = !Ry(se, be)) : (A = se !== be),
          A
            ? se != null
              ? W(K)
              : p.add(K)
            : se !== void 0 && p.has(K)
            ? W(K)
            : (y.protectedKeys[K] = !0);
      }
      (y.prevProp = g),
        (y.prevResolvedValues = L),
        y.isActive && (h = { ...h, ...L }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!k || R) &&
          d.push(...C.map((K) => ({ animation: K, options: { type: m } })));
    }
    if (p.size) {
      const j = {};
      p.forEach((m) => {
        const y = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (j[m] = y ?? null);
      }),
        d.push({ animation: j });
    }
    let x = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((p) => {
        var h;
        return (h = p.animationState) === null || h === void 0
          ? void 0
          : h.setActive(l, c);
      }),
      (n[l].isActive = c);
    const d = o(l);
    for (const p in n) n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
  };
}
function AF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ry(t, e) : !1;
}
function Qn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function MF() {
  return {
    animate: Qn(!0),
    whileInView: Qn(),
    whileHover: Qn(),
    whileTap: Qn(),
    whileDrag: Qn(),
    whileFocus: Qn(),
    exit: Qn(),
  };
}
class LF extends Yn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = RF(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), za(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let _F = 0;
class IF extends Yn {
  constructor() {
    super(...arguments), (this.id = _F++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const DF = { animation: { Feature: LF }, exit: { Feature: IF } },
  Ph = (e, t) => Math.abs(e - t);
function UF(e, t) {
  const n = Ph(e.x, t.x),
    r = Ph(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class l0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Ul(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          h = UF(d.offset, { x: 0, y: 0 }) >= 3;
        if (!p && !h) return;
        const { point: v } = d,
          { timestamp: x } = De;
        this.history.push({ ...v, timestamp: x });
        const { onStart: j, onMove: m } = this.handlers;
        p ||
          (j && j(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, p) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Dl(p, this.transformPagePoint)),
          Ae.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, p) => {
        this.end();
        const { onEnd: h, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const j = Ul(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Dl(p, this.transformPagePoint),
          this.history
        );
        this.startEvent && h && h(d, j), v && v(d, j);
      }),
      !Py(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Ha(t),
      a = Dl(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = De;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Ul(a, this.history)),
      (this.removeListeners = on(
        sn(this.contextWindow, "pointermove", this.handlePointerMove),
        sn(this.contextWindow, "pointerup", this.handlePointerUp),
        sn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Vn(this.updatePoint);
  }
}
function Dl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ch(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ul({ point: e }, t) {
  return {
    point: e,
    delta: Ch(e, u0(t)),
    offset: Ch(e, OF(t)),
    velocity: BF(t, 0.1),
  };
}
function OF(e) {
  return e[0];
}
function u0(e) {
  return e[e.length - 1];
}
function BF(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = u0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Dn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = an(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function pt(e) {
  return e.max - e.min;
}
function cc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function bh(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ve(t.min, t.max, e.origin)),
    (e.scale = pt(n) / pt(t)),
    (cc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ve(n.min, n.max, e.origin) - e.originPoint),
    (cc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ns(e, t, n, r) {
  bh(e.x, t.x, n.x, r ? r.originX : void 0),
    bh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function kh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + pt(t));
}
function zF(e, t, n) {
  kh(e.x, t.x, n.x), kh(e.y, t.y, n.y);
}
function Nh(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + pt(t));
}
function rs(e, t, n) {
  Nh(e.x, t.x, n.x), Nh(e.y, t.y, n.y);
}
function VF(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ve(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ve(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Rh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function HF(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Rh(e.x, n, i), y: Rh(e.y, t, r) };
}
function Ah(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function $F(e, t) {
  return { x: Ah(e.x, t.x), y: Ah(e.y, t.y) };
}
function GF(e, t) {
  let n = 0.5;
  const r = pt(e),
    i = pt(t);
  return (
    i > r
      ? (n = Ps(t.min, t.max - r, e.min))
      : r > i && (n = Ps(e.min, e.max - i, t.min)),
    zn(0, 1, n)
  );
}
function WF(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const dc = 0.35;
function KF(e = dc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = dc),
    { x: Mh(e, "left", "right"), y: Mh(e, "top", "bottom") }
  );
}
function Mh(e, t, n) {
  return { min: Lh(e, t), max: Lh(e, n) };
}
function Lh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const _h = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Wr = () => ({ x: _h(), y: _h() }),
  Ih = () => ({ min: 0, max: 0 }),
  Se = () => ({ x: Ih(), y: Ih() });
function wt(e) {
  return [e("x"), e("y")];
}
function c0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function YF({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function XF(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ol(e) {
  return e === void 0 || e === 1;
}
function fc({ scale: e, scaleX: t, scaleY: n }) {
  return !Ol(e) || !Ol(t) || !Ol(n);
}
function er(e) {
  return (
    fc(e) ||
    d0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function d0(e) {
  return Dh(e.x) || Dh(e.y);
}
function Dh(e) {
  return e && e !== "0%";
}
function ha(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Uh(e, t, n, r, i) {
  return i !== void 0 && (e = ha(e, i, r)), ha(e, n, r) + t;
}
function pc(e, t = 0, n = 1, r, i) {
  (e.min = Uh(e.min, t, n, r, i)), (e.max = Uh(e.max, t, n, r, i));
}
function f0(e, { x: t, y: n }) {
  pc(e.x, t.translate, t.scale, t.originPoint),
    pc(e.y, n.translate, n.scale, n.originPoint);
}
function qF(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const l = s.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Kr(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), f0(e, o)),
      r && er(s.latestValues) && Kr(e, s.latestValues));
  }
  (t.x = Oh(t.x)), (t.y = Oh(t.y));
}
function Oh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function En(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Bh(e, t, [n, r, i]) {
  const s = t[i] !== void 0 ? t[i] : 0.5,
    o = ve(e.min, e.max, s);
  pc(e, t[n], t[r], o, t.scale);
}
const QF = ["x", "scaleX", "originX"],
  JF = ["y", "scaleY", "originY"];
function Kr(e, t) {
  Bh(e.x, t, QF), Bh(e.y, t, JF);
}
function p0(e, t) {
  return c0(XF(e.getBoundingClientRect(), t));
}
function ZF(e, t, n) {
  const r = p0(e, n),
    { scroll: i } = t;
  return i && (En(r.x, i.offset.x), En(r.y, i.offset.y)), r;
}
const h0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  eP = new WeakMap();
class tP {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Se()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (u) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ha(u, "page").point);
      },
      s = (u, d) => {
        const { drag: p, dragPropagation: h, onDragStart: v } = this.getProps();
        if (
          p &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = by(p)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          wt((j) => {
            let m = this.getAxisMotionValue(j).get() || 0;
            if (Yt.test(m)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const g = y.layout.layoutBox[j];
                g && (m = pt(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[j] = m;
          }),
          v && v(u, d);
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (u, d) => {
        const {
          dragPropagation: p,
          dragDirectionLock: h,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!p && !this.openGlobalLock) return;
        const { offset: j } = d;
        if (h && this.currentDirection === null) {
          (this.currentDirection = nP(j)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, j),
          this.updateAxis("y", d.point, j),
          this.visualElement.render(),
          x && x(u, d);
      },
      a = (u, d) => this.stop(u, d),
      l = () =>
        wt((u) => {
          var d;
          return (
            this.getAnimationState(u) === "paused" &&
            ((d = this.getAxisMotionValue(u).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new l0(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: h0(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && s(t, n);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !mo(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = VF(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && $r(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = HF(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = KF(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        wt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = WF(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !$r(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = ZF(r, i.root, this.visualElement.getTransformPagePoint());
    let o = $F(i.layout.layoutBox, s);
    if (n) {
      const a = n(YF(o));
      (this.hasMutatedConstraints = !!a), a && (o = c0(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = wt((u) => {
        if (!mo(u, n, this.currentDirection)) return;
        let d = (l && l[u]) || {};
        o && (d = { min: 0, max: 0 });
        const p = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[u] : 0,
            bounceStiffness: p,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(u, v);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(nf(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    wt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    wt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    wt((n) => {
      const { drag: r } = this.getProps();
      if (!mo(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - ve(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!$r(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    wt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = GF({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      wt((o) => {
        if (!mo(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(ve(l, c, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    eP.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = sn(t, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        $r(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = en(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (wt((u) => {
              const d = this.getAxisMotionValue(u);
              d &&
                ((this.originPoint[u] += l[u].translate),
                d.set(d.get() + l[u].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = dc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function mo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function nP(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class rP extends Yn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ge),
      (this.removeListeners = Ge),
      (this.controls = new tP(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ge);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const zh = (e) => (t, n) => {
  e && e(t, n);
};
class iP extends Yn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ge);
  }
  onPointerDown(t) {
    this.session = new l0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: h0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: zh(t),
      onStart: zh(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && i(s, o);
      },
    };
  }
  mount() {
    this.removePointerDownListener = sn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function sP() {
  const e = E.useContext(Ba);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = E.useId();
  return E.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Ao = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Vh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Di = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (G.test(e)) e = parseFloat(e);
        else return e;
      const n = Vh(e, t.target.x),
        r = Vh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  oP = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Hn.parse(e);
      if (i.length > 5) return r;
      const s = Hn.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const c = ve(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
class aP extends E.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    sE(lP),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ao.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              Ae.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Ld.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function m0(e) {
  const [t, n] = sP(),
    r = E.useContext(Dd);
  return f.jsx(aP, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(fy),
    isPresent: t,
    safeToRemove: n,
  });
}
const lP = {
    borderRadius: {
      ...Di,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Di,
    borderTopRightRadius: Di,
    borderBottomLeftRadius: Di,
    borderBottomRightRadius: Di,
    boxShadow: oP,
  },
  g0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  uP = g0.length,
  Hh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  $h = (e) => typeof e == "number" || G.test(e);
function cP(e, t, n, r, i, s) {
  i
    ? ((e.opacity = ve(0, n.opacity !== void 0 ? n.opacity : 1, dP(r))),
      (e.opacityExit = ve(t.opacity !== void 0 ? t.opacity : 1, 0, fP(r))))
    : s &&
      (e.opacity = ve(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < uP; o++) {
    const a = `border${g0[o]}Radius`;
    let l = Gh(t, a),
      c = Gh(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || $h(l) === $h(c)
        ? ((e[a] = Math.max(ve(Hh(l), Hh(c), r), 0)),
          (Yt.test(c) || Yt.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = ve(t.rotate || 0, n.rotate || 0, r));
}
function Gh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const dP = v0(0, 0.5, e0),
  fP = v0(0.5, 0.95, Ge);
function v0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ps(e, t, r)));
}
function Wh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function xt(e, t) {
  Wh(e.x, t.x), Wh(e.y, t.y);
}
function Kh(e, t, n, r, i) {
  return (
    (e -= t), (e = ha(e, 1 / n, r)), i !== void 0 && (e = ha(e, 1 / i, r)), e
  );
}
function pP(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (Yt.test(t) &&
      ((t = parseFloat(t)), (t = ve(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = ve(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = Kh(e.min, t, n, a, i)),
    (e.max = Kh(e.max, t, n, a, i));
}
function Yh(e, t, [n, r, i], s, o) {
  pP(e, t[n], t[r], t[i], t.scale, s, o);
}
const hP = ["x", "scaleX", "originX"],
  mP = ["y", "scaleY", "originY"];
function Xh(e, t, n, r) {
  Yh(e.x, t, hP, n ? n.x : void 0, r ? r.x : void 0),
    Yh(e.y, t, mP, n ? n.y : void 0, r ? r.y : void 0);
}
function qh(e) {
  return e.translate === 0 && e.scale === 1;
}
function y0(e) {
  return qh(e.x) && qh(e.y);
}
function gP(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function x0(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Qh(e) {
  return pt(e.x) / pt(e.y);
}
class vP {
  constructor() {
    this.members = [];
  }
  add(t) {
    rf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (sf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Jh(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: d,
      rotateY: p,
      skewX: h,
      skewY: v,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      d && (r += `rotateX(${d}deg) `),
      p && (r += `rotateY(${p}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const yP = (e, t) => e.depth - t.depth;
class xP {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    rf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    sf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(yP),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function wP(e, t) {
  const n = Un.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Vn(r), e(s - t));
    };
  return Ae.read(r, !0), () => Vn(r);
}
function SP(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function jP(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function EP(e, t, n) {
  const r = $e(e) ? e : Cs(e);
  return r.start(nf("", r, t, n)), r.animation;
}
const Bl = ["", "X", "Y", "Z"],
  TP = { visibility: "hidden" },
  Zh = 1e3;
let FP = 0;
const tr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function zl(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function w0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = FP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (tr.totalNodes =
              tr.resolvedTargetDeltas =
              tr.recalculatedProjection =
                0),
            this.nodes.forEach(bP),
            this.nodes.forEach(MP),
            this.nodes.forEach(LP),
            this.nodes.forEach(kP),
            SP(tr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xP());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new of()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = jP(o)), (this.instance = o);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const p = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = wP(p, 250)),
            Ao.hasAnimatedSinceResize &&
              ((Ao.hasAnimatedSinceResize = !1), this.nodes.forEach(tm));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: p,
              hasRelativeTargetChanged: h,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || u.getDefaultTransition() || OP,
                { onLayoutAnimationStart: j, onLayoutAnimationComplete: m } =
                  u.getProps(),
                y = !this.targetLayout || !x0(this.targetLayout, v) || h,
                g = !p && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (p && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const S = { ...Kd(x, "layout"), onPlay: j, onComplete: m };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                p || tm(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Vn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(_P),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(em);
        return;
      }
      this.isUpdating || this.nodes.forEach(RP),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(AP),
        this.nodes.forEach(PP),
        this.nodes.forEach(CP),
        this.clearAllSnapshots();
      const a = Un.now();
      (De.delta = zn(0, 1e3 / 60, a - De.timestamp)),
        (De.timestamp = a),
        (De.isProcessing = !0),
        Nl.update.process(De),
        Nl.preRender.process(De),
        Nl.render.process(De),
        (De.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ld.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(NP), this.sharedNodes.forEach(IP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ae.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Se()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !y0(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      o &&
        (a || er(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        BP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return Se();
      const a = o.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (En(a.x, l.offset.x), En(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = Se();
      xt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l],
          { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            xt(a, o);
            const { scroll: p } = this.root;
            p && (En(a.x, -p.offset.x), En(a.y, -p.offset.y));
          }
          En(a.x, u.offset.x), En(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Se();
      xt(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Kr(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          er(u.latestValues) && Kr(l, u.latestValues);
      }
      return er(this.latestValues) && Kr(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Se();
      xt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !er(c.latestValues)) continue;
        fc(c.latestValues) && c.updateSnapshot();
        const u = Se(),
          d = c.measurePageBox();
        xt(u, d),
          Xh(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return er(this.latestValues) && Xh(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== De.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: p } = this.options;
      if (!(!this.layout || !(d || p))) {
        if (
          ((this.resolvedRelativeTargetAt = De.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Se()),
              (this.relativeTargetOrigin = Se()),
              rs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              xt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Se()), (this.targetWithTransforms = Se())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                zF(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : xt(this.target, this.layout.layoutBox),
                f0(this.target, this.targetDelta))
              : xt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Se()),
                (this.relativeTargetOrigin = Se()),
                rs(this.relativeTargetOrigin, this.target, h.target),
                xt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          tr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          fc(this.parent.latestValues) ||
          d0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === De.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || d))
      )
        return;
      xt(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x,
        h = this.treeScale.y;
      qF(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Se()));
      const { target: v } = a;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = Wr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Wr()),
        (this.projectionDeltaWithTransform = Wr()));
      const x = this.projectionTransform;
      ns(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = Jh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== p ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        tr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        d = Wr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const p = Se(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = h !== v,
        j = this.getStack(),
        m = !j || j.members.length <= 1,
        y = !!(x && !m && this.options.crossfade === !0 && !this.path.some(UP));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (S) => {
        const T = S / 1e3;
        nm(d.x, o.x, T),
          nm(d.y, o.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (rs(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            DP(this.relativeTarget, this.relativeTargetOrigin, p, T),
            g && gP(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Se()),
            xt(g, this.relativeTarget)),
          x &&
            ((this.animationValues = u), cP(u, c, this.latestValues, T, y, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Vn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ae.update(() => {
          (Ao.hasAnimatedSinceResize = !0),
            (this.currentAnimation = EP(0, Zh, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Zh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          S0(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Se();
          const d = pt(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const p = pt(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + p);
        }
        xt(a, l),
          Kr(a, u),
          ns(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new vP()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && zl("z", o, c, this.animationValues);
      for (let u = 0; u < Bl.length; u++)
        zl(`rotate${Bl[u]}`, o, c, this.animationValues),
          zl(`skew${Bl[u]}`, o, c, this.animationValues);
      o.render();
      for (const u in c)
        o.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return TP;
      const c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = No(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = No(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !er(this.latestValues) &&
            ((x.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const p = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Jh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          p
        )),
        u && (c.transform = u(p, c.transform));
      const { x: h, y: v } = this.projectionDelta;
      (c.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (c.opacity =
              d === this
                ? (l =
                    (a = p.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : p.opacityExit)
          : (c.opacity =
              d === this
                ? p.opacity !== void 0
                  ? p.opacity
                  : ""
                : p.opacityExit !== void 0
                ? p.opacityExit
                : 0);
      for (const x in la) {
        if (p[x] === void 0) continue;
        const { correct: j, applyTo: m } = la[x],
          y = c.transform === "none" ? p[x] : j(p[x], d);
        if (m) {
          const g = m.length;
          for (let S = 0; S < g; S++) c[m[S]] = y;
        } else c[x] = y;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            d === this
              ? No(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(em),
        this.root.sharedNodes.clear();
    }
  };
}
function PP(e) {
  e.updateLayout();
}
function CP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? wt((d) => {
          const p = o ? n.measuredBox[d] : n.layoutBox[d],
            h = pt(p);
          (p.min = r[d].min), (p.max = p.min + h);
        })
      : S0(s, n.layoutBox, r) &&
        wt((d) => {
          const p = o ? n.measuredBox[d] : n.layoutBox[d],
            h = pt(r[d]);
          (p.max = p.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const a = Wr();
    ns(a, r, n.layoutBox);
    const l = Wr();
    o ? ns(l, e.applyTransform(i, !0), n.measuredBox) : ns(l, r, n.layoutBox);
    const c = !y0(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: p, layout: h } = d;
        if (p && h) {
          const v = Se();
          rs(v, n.layoutBox, p.layoutBox);
          const x = Se();
          rs(x, r, h.layoutBox),
            x0(v, x) || (u = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function bP(e) {
  tr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function kP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function NP(e) {
  e.clearSnapshot();
}
function em(e) {
  e.clearMeasurements();
}
function RP(e) {
  e.isLayoutDirty = !1;
}
function AP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function tm(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function MP(e) {
  e.resolveTargetDelta();
}
function LP(e) {
  e.calcProjection();
}
function _P(e) {
  e.resetSkewAndRotation();
}
function IP(e) {
  e.removeLeadSnapshot();
}
function nm(e, t, n) {
  (e.translate = ve(t.translate, 0, n)),
    (e.scale = ve(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function rm(e, t, n, r) {
  (e.min = ve(t.min, n.min, r)), (e.max = ve(t.max, n.max, r));
}
function DP(e, t, n, r) {
  rm(e.x, t.x, n.x, r), rm(e.y, t.y, n.y, r);
}
function UP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const OP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  im = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  sm = im("applewebkit/") && !im("chrome/") ? Math.round : Ge;
function om(e) {
  (e.min = sm(e.min)), (e.max = sm(e.max));
}
function BP(e) {
  om(e.x), om(e.y);
}
function S0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !cc(Qh(t), Qh(n), 0.2))
  );
}
const zP = w0({
    attachResizeListener: (e, t) => en(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Vl = { current: void 0 },
  j0 = w0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Vl.current) {
        const e = new zP({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Vl.current = e);
      }
      return Vl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  VP = {
    pan: { Feature: iP },
    drag: { Feature: rP, ProjectionNode: j0, MeasureLayout: m0 },
  },
  hc = { current: null },
  E0 = { current: !1 };
function HP() {
  if (((E0.current = !0), !!Rd))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (hc.current = e.matches);
      e.addListener(t), t();
    } else hc.current = !1;
}
function $P(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const s = t[i],
      o = n[i];
    if ($e(s)) e.addValue(i, s), pa(r) && r.add(i);
    else if ($e(o)) e.addValue(i, Cs(s, { owner: e })), pa(r) && r.remove(i);
    else if (o !== s)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(s) : a.hasAnimated || a.set(s);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, Cs(a !== void 0 ? a : s, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const am = new WeakMap(),
  GP = [...Iy, Ve, Hn],
  WP = (e) => GP.find(_y(e)),
  T0 = Object.keys(Fs),
  KP = T0.length,
  lm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  YP = Id.length;
function F0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : F0(e.parent);
}
class XP {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.resolveKeyframes = (p, h, v, x) =>
      new this.KeyframeResolver(p, h, v, x, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Yd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Ae.render(this.render, !1, !0));
    const { latestValues: l, renderState: c } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Va(n)),
      (this.isVariantNode = dy(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const p in d) {
      const h = d[p];
      l[p] !== void 0 && $e(h) && (h.set(l[p], !1), pa(u) && u.add(p));
    }
  }
  mount(t) {
    (this.current = t),
      am.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      E0.current || HP(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : hc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    am.delete(this.current),
      this.projection && this.projection.unmount(),
      Vn(this.notifyUpdate),
      Vn(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features)
      (t = this.features[n]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Fr.has(t),
      i = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && Ae.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, s) {
    let o, a;
    for (let l = 0; l < KP; l++) {
      const c = T0[l],
        {
          isEnabled: u,
          Feature: d,
          ProjectionNode: p,
          MeasureLayout: h,
        } = Fs[c];
      p && (o = p),
        u(n) &&
          (!this.features[c] && d && (this.features[c] = new d(this)),
          h && (a = h));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      o
    ) {
      this.projection = new o(this.latestValues, F0(this.parent));
      const {
        layoutId: l,
        layout: c,
        drag: u,
        dragConstraints: d,
        layoutScroll: p,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || (d && $r(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: p,
        layoutRoot: h,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Se();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < lm.length; r++) {
      const i = lm[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = $P(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < YP; r++) {
      const i = Id[r],
        s = this.props[i];
      (Ts(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Cs(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (My(i) || Ay(i))
          ? (i = parseFloat(i))
          : !WP(i) && Hn.test(n) && (i = $y(t, n)),
        this.setBaseTarget(t, $e(i) ? i.get() : i)),
      $e(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Wd(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !$e(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new of()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class P0 extends XP {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Gy);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function qP(e) {
  return window.getComputedStyle(e);
}
class QP extends P0 {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (Fr.has(n)) {
      const r = qd(n);
      return (r && r.default) || 0;
    } else {
      const r = qP(t),
        i = (my(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return p0(t, n);
  }
  build(t, n, r, i) {
    zd(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Gd(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    $e(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    wy(t, n, r, i);
  }
}
class JP extends P0 {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Fr.has(n)) {
      const r = qd(n);
      return (r && r.default) || 0;
    }
    return (n = Sy.has(n) ? n : Md(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Se();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ey(t, n, r);
  }
  build(t, n, r, i) {
    Hd(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    jy(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = $d(t.tagName)), super.mount(t);
  }
}
const ZP = (e, t) =>
    Ud(e)
      ? new JP(t, { enableHardwareAcceleration: !1 })
      : new QP(t, {
          allowProjection: e !== E.Fragment,
          enableHardwareAcceleration: !0,
        }),
  eC = { layout: { ProjectionNode: j0, MeasureLayout: m0 } },
  tC = { ...DF, ...KE, ...VP, ...eC },
  bs = rE((e, t) => LE(e, t, tC, ZP));
function C0() {
  const e = E.useRef(!1);
  return (
    Ad(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function nC() {
  const e = C0(),
    [t, n] = E.useState(0),
    r = E.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [E.useCallback(() => Ae.postRender(r), [r]), t];
}
class rC extends E.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function iC({ children: e, isPresent: t }) {
  const n = E.useId(),
    r = E.useRef(null),
    i = E.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = E.useContext(Nd);
  return (
    E.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        s && (u.nonce = s),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    f.jsx(rC, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: E.cloneElement(e, { ref: r }),
    })
  );
}
const Hl = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = Ty(sC),
    l = E.useId(),
    c = E.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (const d of a.values()) if (!d) return;
          r && r();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      s ? [Math.random()] : [n]
    );
  return (
    E.useMemo(() => {
      a.forEach((u, d) => a.set(d, !1));
    }, [n]),
    E.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = f.jsx(iC, { isPresent: n, children: e })),
    f.jsx(Ba.Provider, { value: c, children: e })
  );
};
function sC() {
  return new Map();
}
function oC(e) {
  return E.useEffect(() => () => e(), []);
}
const nr = (e) => e.key || "";
function aC(e, t) {
  e.forEach((n) => {
    const r = nr(n);
    t.set(r, n);
  });
}
function lC(e) {
  const t = [];
  return (
    E.Children.forEach(e, (n) => {
      E.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const ks = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: s = !0,
  mode: o = "sync",
}) => {
  const a = E.useContext(Dd).forceRender || nC()[0],
    l = C0(),
    c = lC(e);
  let u = c;
  const d = E.useRef(new Map()).current,
    p = E.useRef(u),
    h = E.useRef(new Map()).current,
    v = E.useRef(!0);
  if (
    (Ad(() => {
      (v.current = !1), aC(c, h), (p.current = u);
    }),
    oC(() => {
      (v.current = !0), h.clear(), d.clear();
    }),
    v.current)
  )
    return f.jsx(f.Fragment, {
      children: u.map((y) =>
        f.jsx(
          Hl,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: s,
            mode: o,
            children: y,
          },
          nr(y)
        )
      ),
    });
  u = [...u];
  const x = p.current.map(nr),
    j = c.map(nr),
    m = x.length;
  for (let y = 0; y < m; y++) {
    const g = x[y];
    j.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
  }
  return (
    o === "wait" && d.size && (u = []),
    d.forEach((y, g) => {
      if (j.indexOf(g) !== -1) return;
      const S = h.get(g);
      if (!S) return;
      const T = x.indexOf(g);
      let k = y;
      if (!k) {
        const w = () => {
          d.delete(g);
          const P = Array.from(h.keys()).filter((R) => !j.includes(R));
          if (
            (P.forEach((R) => h.delete(R)),
            (p.current = c.filter((R) => {
              const C = nr(R);
              return C === g || P.includes(C);
            })),
            !d.size)
          ) {
            if (l.current === !1) return;
            a(), r && r();
          }
        };
        (k = f.jsx(
          Hl,
          {
            isPresent: !1,
            onExitComplete: w,
            custom: t,
            presenceAffectsLayout: s,
            mode: o,
            children: S,
          },
          nr(S)
        )),
          d.set(g, k);
      }
      u.splice(T, 0, k);
    }),
    (u = u.map((y) => {
      const g = y.key;
      return d.has(g)
        ? y
        : f.jsx(
            Hl,
            { isPresent: !0, presenceAffectsLayout: s, mode: o, children: y },
            nr(y)
          );
    })),
    f.jsx(f.Fragment, {
      children: d.size ? u : u.map((y) => E.cloneElement(y)),
    })
  );
};
function uC(e, t, n) {
  return (
    typeof e == "string"
      ? (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const cC = { some: 0, all: 1 };
function dC(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const s = uC(e),
    o = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        const d = o.get(u.target);
        if (u.isIntersecting !== !!d)
          if (u.isIntersecting) {
            const p = t(u);
            typeof p == "function" ? o.set(u.target, p) : l.unobserve(u.target);
          } else d && (d(u), o.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : cC[i],
    });
  return s.forEach((c) => l.observe(c)), () => l.disconnect();
}
function fC(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  const [s, o] = E.useState(!1);
  return (
    E.useEffect(() => {
      if (!e.current || (i && s)) return;
      const a = () => (o(!0), i ? void 0 : () => o(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return dC(e.current, a, l);
    }, [t, e, n, i, r]),
    s
  );
}
var pC = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const um = (e) => {
    let t;
    const n = new Set(),
      r = (l, c) => {
        const u = typeof l == "function" ? l(t) : l;
        if (!Object.is(u, t)) {
          const d = t;
          (t = c ?? typeof u != "object" ? u : Object.assign({}, t, u)),
            n.forEach((p) => p(t, d));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        subscribe: (l) => (n.add(l), () => n.delete(l)),
        destroy: () => {
          (pC && "production") !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      };
    return (t = e(r, i, a)), a;
  },
  hC = (e) => (e ? um(e) : um);
var b0 = { exports: {} },
  k0 = {},
  N0 = { exports: {} },
  R0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ci = E;
function mC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gC = typeof Object.is == "function" ? Object.is : mC,
  vC = ci.useState,
  yC = ci.useEffect,
  xC = ci.useLayoutEffect,
  wC = ci.useDebugValue;
function SC(e, t) {
  var n = t(),
    r = vC({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    s = r[1];
  return (
    xC(
      function () {
        (i.value = n), (i.getSnapshot = t), $l(i) && s({ inst: i });
      },
      [e, n, t]
    ),
    yC(
      function () {
        return (
          $l(i) && s({ inst: i }),
          e(function () {
            $l(i) && s({ inst: i });
          })
        );
      },
      [e]
    ),
    wC(n),
    n
  );
}
function $l(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gC(e, n);
  } catch {
    return !0;
  }
}
function jC(e, t) {
  return t();
}
var EC =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? jC
    : SC;
R0.useSyncExternalStore =
  ci.useSyncExternalStore !== void 0 ? ci.useSyncExternalStore : EC;
N0.exports = R0;
var TC = N0.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wa = E,
  FC = TC;
function PC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var CC = typeof Object.is == "function" ? Object.is : PC,
  bC = FC.useSyncExternalStore,
  kC = Wa.useRef,
  NC = Wa.useEffect,
  RC = Wa.useMemo,
  AC = Wa.useDebugValue;
k0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = kC(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = RC(
    function () {
      function l(h) {
        if (!c) {
          if (((c = !0), (u = h), (h = r(h)), i !== void 0 && o.hasValue)) {
            var v = o.value;
            if (i(v, h)) return (d = v);
          }
          return (d = h);
        }
        if (((v = d), CC(u, h))) return v;
        var x = r(h);
        return i !== void 0 && i(v, x) ? v : ((u = h), (d = x));
      }
      var c = !1,
        u,
        d,
        p = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        p === null
          ? void 0
          : function () {
              return l(p());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = bC(e, s[0], s[1]);
  return (
    NC(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    AC(a),
    a
  );
};
b0.exports = k0;
var MC = b0.exports;
const LC = Pc(MC);
var _C = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useSyncExternalStoreWithSelector: IC } = LC;
function DC(e, t = e.getState, n) {
  const r = IC(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
  return E.useDebugValue(r), r;
}
const cm = (e) => {
    (_C && "production") !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == "function" ? hC(e) : e,
      n = (r, i) => DC(t, r, i);
    return Object.assign(n, t), n;
  },
  UC = (e) => (e ? cm(e) : cm),
  Bt = UC((e) => ({
    subsForms: !1,
    subsFixForms: !1,
    setSubsForm: (t) => e(() => ({ subsForms: t })),
    setSubsFixForm: (t) => e(() => ({ subsFixForms: t })),
    revInViews: [0, 1, 2],
    setInViews: (t) => e(() => ({ revInViews: t })),
  }));
function af() {
  return f.jsx(f.Fragment, {
    children: f.jsx("p", {
      className: "font-Bold text-[5vh]  xl:text-[6vh] text-darkBlue",
      children: "R.",
    }),
  });
}
function OC() {
  const e = [
      { text: "About", link: "/about" },
      { text: "Solutions", link: "/solutions" },
      { text: "Blogs", link: "/blogs" },
    ],
    { setSubsFixForm: t } = Bt();
  return f.jsx("div", {
    className: "w-[75%] flex items-center  nav-bg",
    onClick: () => t(!1),
    children: f.jsxs("div", {
      className: "flex items-center space-x-[4vh] xl:space-x-[6vh] lg:px-[9vh]",
      children: [
        f.jsx(Ee, { to: "/", children: f.jsx(af, {}) }),
        f.jsxs("div", {
          className:
            "flex items-center space-x-[1.5vh] font-Bold text-[1.6vh] xl:text-[2vh] uppercase ",
          children: [
            e.map((n, r) =>
              f.jsx(
                "div",
                {
                  className: "hover:text-heavyBlue duration-300",
                  children: f.jsx(Ee, { to: n.link, children: n.text }),
                },
                r
              )
            ),
            f.jsx("div", {
              className: "hover:text-heavyBlue duration-300",
              children: f.jsx(Ee, { to: "/contact", children: "Contact" }),
            }),
          ],
        }),
      ],
    }),
  });
}
function BC() {
  const e = [
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/instagram.png",
        link: "https://www.instagram.com/hassanrevela",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/youtube.png",
        link: "https://www.youtube.com/@hassanrevel",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/facebook.png",
        link: "https://www.facebook.com/hassanrevela",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/linkedin.png",
        link: "https://linkedin.com/in/hassanrevel",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/twitter.png",
        link: "https://twitter.com/hassanrevel",
      },
    ],
    { subsFixForms: t, setSubsFixForm: n } = Bt();
  return f.jsx("div", {
    className: "h-full flex items-center justify-center right-0 top-0 absolute",
    style: {
      background:
        'url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-right-bg.jpg")',
    },
    onClick: () => t && n(!1),
    children: f.jsxs("div", {
      className:
        "flex items-center space-x-[2vh] relative z-20  text-white lg:px-[9vh] ",
      children: [
        f.jsx("div", {
          className: "flex items-center space-x-[1.5vh]",
          children: e.map((r, i) =>
            f.jsx(
              "div",
              {
                children: f.jsx(Ee, {
                  to: r.link,
                  target: "_blank",
                  children: f.jsx("img", {
                    src: r.img,
                    alt: "",
                    className: "w-[2.5vh] hover:opacity-60 duration-300",
                  }),
                }),
              },
              i
            )
          ),
        }),
        f.jsx("div", { className: " h-[4vh] w-[0.1vh] bg-slate-100" }),
        f.jsx("div", {
          className: "relative",
          children: f.jsx("p", {
            className:
              "font-Bold text-[1.6vh] xl:text-[2vh] uppercase hover:opacity-60 duration-300 cursor-pointer",
            onClick: () => n(!t),
            children: "SUBSCRIBE",
          }),
        }),
      ],
    }),
  });
}
function zC({ show: e }) {
  const { subsFixForms: t } = Bt();
  return f.jsx(ks, {
    children:
      !e &&
      f.jsxs(bs.section, {
        id: "navDesktop",
        className: "hidden lg:flex fixed w-full top-0 left-0 h-[5vw] z-50",
        initial: { y: -140, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -140, opacity: 0 },
        transition: { ease: "linear", duration: 0.4 },
        children: [
          f.jsx(OC, {}),
          f.jsx(BC, {}),
          f.jsx(ks, {
            children:
              t &&
              f.jsx(bs.div, {
                className:
                  "absolute top-[5.98vw] right-[1vw] w-[32.063vw] sub-bg-img z-50 text-white",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { ease: "linear", duration: 0.4 },
                children: f.jsx("div", {
                  className: "z-30 relative pt-[4.5vw] px-[4.563vw] pb-[1vw]",
                  children: f.jsx(kd, {}),
                }),
              }),
          }),
        ],
      }),
  });
}
function VC() {
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className:
        "flex uppercase p-[2vh] text-[2.7vh] sm:text-[3vh] md:text-[3.2vh] font-Medium text-gray-600",
      children: [
        f.jsx("p", { children: "Hassan" }),
        f.jsx("p", {
          className: "text-heavyBlue font-Black",
          children: "Revel.",
        }),
      ],
    }),
  });
}
function HC({ setShow: e }) {
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className:
        "h-full absolute top-0 right-0 text-white flex flex-col items-center justify-center  w-[10vh] md:w-[20vh] space-y-0.5",
      style: {
        background:
          'url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-right-bg.jpg")',
      },
      onClick: e,
      children: [
        f.jsx("div", { className: "w-[5vh] h-[0.19rem] bg-white" }),
        f.jsx("p", { className: "text-[1.5vh]", children: "MENU" }),
        f.jsx("div", { className: "w-[5vh] h-[0.19rem] bg-white" }),
      ],
    }),
  });
}
var A0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  dm = ae.createContext && ae.createContext(A0),
  $C = ["attr", "size", "title"];
function GC(e, t) {
  if (e == null) return {};
  var n = WC(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function WC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ma() {
  return (
    (ma = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ma.apply(this, arguments)
  );
}
function fm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ga(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fm(Object(n), !0).forEach(function (r) {
          KC(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : fm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function KC(e, t, n) {
  return (
    (t = YC(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function YC(e) {
  var t = XC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XC(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function M0(e) {
  return (
    e &&
    e.map((t, n) =>
      ae.createElement(t.tag, ga({ key: n }, t.attr), M0(t.child))
    )
  );
}
function L0(e) {
  return (t) =>
    ae.createElement(qC, ma({ attr: ga({}, e.attr) }, t), M0(e.child));
}
function qC(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = GC(e, $C),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      ae.createElement(
        "svg",
        ma(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: l,
            style: ga(ga({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && ae.createElement("title", null, s),
        e.children
      )
    );
  };
  return dm !== void 0
    ? ae.createElement(dm.Consumer, null, (n) => t(n))
    : t(A0);
}
function QC(e) {
  return L0({
    tag: "svg",
    attr: { version: "1.1", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z",
        },
        child: [],
      },
    ],
  })(e);
}
function JC({ show: e, setShow: t }) {
  const n = [
      { text: "About", link: "/about" },
      { text: "Solutions", link: "/solutions" },
      { text: "Blogs", link: "/blogs" },
      {
        text: "Vlogs",
        link: "https://www.youtube.com/@hassanrevel",
        target: "_blank",
      },
      { text: "Contact", link: "/contact" },
    ],
    r = [
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/instagram.png",
        link: "https://www.instagram.com/hassanrevela",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/youtube.png",
        link: "https://www.youtube.com/@hassanrevel",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/facebook.png",
        link: "https://www.facebook.com/hassanrevela",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/linkedin.png",
        link: "https://linkedin.com/in/hassanrevel",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/twitter.png",
        link: "https://twitter.com/hassanrevel",
      },
    ];
  return f.jsx(ks, {
    children:
      e &&
      f.jsxs(bs.div, {
        className: "absolute right-0 top-0 z-30  w-[280px] space-y-[4vh]",
        style: {
          background:
            'url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-left-bg.jpg")',
        },
        initial: { y: -140, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -140, opacity: 0 },
        transition: { ease: "linear" },
        children: [
          f.jsxs("div", {
            className: "flex items-center justify-between relative px-[4vh]",
            children: [
              f.jsx("div", {
                onClick: t,
                children: f.jsx(Ee, { to: "/", children: f.jsx(af, {}) }),
              }),
              f.jsx("div", {
                className:
                  "flex items-center justify-center w-[25%] h-full absolute right-0 top-0 text-white ",
                style: {
                  background:
                    'url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-right-bg.jpg")',
                },
                onClick: t,
                children: f.jsx(QC, {}),
              }),
            ],
          }),
          f.jsx("div", {
            className:
              "font-Bold text-[2.2vh] space-y-[1vh] uppercase px-[4vh]",
            children: n.map((i, s) =>
              f.jsx(
                "div",
                {
                  className: "hover:text-heavyBlue duration-300",
                  children: f.jsx(Ee, {
                    to: i.link,
                    target: i.target,
                    children: i.text,
                  }),
                },
                s
              )
            ),
          }),
          f.jsx("div", {
            className:
              "flex items-center justify-center space-x-[1.5vh] h-[10vh]",
            style: {
              background:
                'url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-right-bg.jpg")',
            },
            children: r.map((i, s) =>
              f.jsx(
                "div",
                {
                  children: f.jsx(Ee, {
                    to: i.link,
                    target: "_blank",
                    children: f.jsx("img", {
                      src: i.img,
                      alt: "",
                      className: "w-[2.5vh] hover:opacity-60 duration-300",
                    }),
                  }),
                },
                s
              )
            ),
          }),
        ],
      }),
  });
}
function ZC() {
  const [e, t] = E.useState(!1);
  return f.jsxs(f.Fragment, {
    children: [
      f.jsx(ks, {
        children:
          e &&
          f.jsx(bs.div, {
            className: "fixed bg-black w-full left-0 top-0 h-[100%] z-30",
            initial: { opacity: 0 },
            animate: { opacity: 0.5 },
            exit: { opacity: 0 },
          }),
      }),
      f.jsx("section", {
        id: "navmobil",
        className: "lg:hidden absolute top-0 left-0 w-full h-[8vh]",
        style: {
          background:
            'url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-left-bg.jpg")',
        },
        children: f.jsxs("div", {
          className: "relative h-full flex items-center",
          children: [
            f.jsx(VC, {}),
            f.jsx(HC, { setShow: () => t(!0) }),
            f.jsx(JC, { show: e, setShow: () => t(!1) }),
          ],
        }),
      }),
      f.jsx("div", { className: "h-[8vh] lg:hidden" }),
    ],
  });
}
function e2() {
  const e = [
      { text: "About", link: "/about" },
      { text: "Solutions", link: "/solutions" },
      { text: "Blogs", link: "/blogs" },
    ],
    t = [
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/instagram.png",
        link: "https://www.instagram.com/hassanrevela",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/youtube.png",
        link: "https://www.youtube.com/@hassanrevel",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/facebook.png",
        link: "https://www.facebook.com/hassanrevela",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/linkedin.png",
        link: "https://linkedin.com/in/hassanrevel",
      },
      {
        img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/twitter.png",
        link: "https://twitter.com/hassanrevel",
      },
    ],
    { subsForms: n, setSubsForm: r } = Bt();
  return f.jsxs("div", {
    className:
      "hidden lg:flex absolute w-full top-0 left-0 justify-between h-[8vw]",
    children: [
      f.jsx(ks, {
        children:
          n &&
          f.jsx(bs.div, {
            className:
              "absolute top-[8vw] right-[1vw] w-[32.063vw] sub-bg-img z-50 text-white",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { ease: "linear", duration: 0.4 },
            children: f.jsx("div", {
              className: "z-30 relative pt-[4.5vw] px-[4.563vw] pb-[1vw]",
              children: f.jsx(kd, {}),
            }),
          }),
      }),
      f.jsxs("div", {
        className:
          "navbar-img lg:px-[9vh] flex items-center w-[55.5vw] 2xl:w-[60vw]",
        onClick: () => n && r(!1),
        children: [
          f.jsxs("div", {
            className:
              "flex items-center space-x-[4vh] xl:space-x-[6vh] relative z-20",
            children: [
              f.jsx(Ee, { to: "/", children: f.jsx(af, {}) }),
              f.jsxs("div", {
                className:
                  "flex items-center space-x-[1.5vh] font-Bold text-[1.6vh] xl:text-[2vh] uppercase ",
                children: [
                  e.map((i, s) =>
                    f.jsx(
                      "div",
                      {
                        className: "hover:text-heavyBlue duration-300",
                        children: f.jsx(Ee, { to: i.link, children: i.text }),
                      },
                      s
                    )
                  ),
                  f.jsx("div", {
                    className: "hover:text-heavyBlue duration-300",
                    children: f.jsx(Ee, {
                      to: "/contact",
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: "absolute w-full h-full left-0 top-0 bg-no-repeat",
            children: f.jsx("div", {
              className: "absolute bg-white w-full h-full opacity-90",
            }),
          }),
        ],
      }),
      f.jsxs("div", {
        className:
          "flex items-center justify-end space-x-[2vh] relative z-20  text-white lg:px-[9vh] ",
        onClick: () => n && r(!1),
        children: [
          f.jsx("div", {
            className: "flex items-center space-x-[1.5vh]",
            children: t.map((i, s) =>
              f.jsx(
                "div",
                {
                  children: f.jsx(Ee, {
                    to: i.link,
                    target: "_blank",
                    children: f.jsx("img", {
                      src: i.img,
                      alt: "",
                      className: "w-[2.5vh] hover:opacity-60 duration-300",
                    }),
                  }),
                },
                s
              )
            ),
          }),
          f.jsx("div", { className: " h-[4vh] w-[0.1vh] bg-slate-100" }),
          f.jsx("div", {
            className: "relative",
            children: f.jsx("p", {
              className:
                "font-Bold text-[1.6vh] xl:text-[2vh] uppercase hover:opacity-60 duration-300 cursor-pointer",
              onClick: () => r(!n),
              children: "SUBSCRIBE",
            }),
          }),
        ],
      }),
    ],
  });
}
function Xn() {
  const e = E.useRef(null),
    t = fC(e),
    { setSubsForm: n, setSubsFixForm: r } = Bt();
  return (
    E.useEffect(() => {
      n(!1), r(!1);
    }, [t]),
    f.jsxs("section", {
      id: "nav",
      className: "relative",
      children: [
        f.jsx(zC, { show: t }),
        f.jsx(e2, {}),
        f.jsx(ZC, {}),
        f.jsx("div", {
          className: "absolute w-full top-0 left-0 h-[15vw] -z-10 ",
          ref: e,
        }),
      ],
    })
  );
}
function vi() {
  const { pathname: e } = Ds();
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
function t2() {
  const e = [
      `In the modern world, AI is becoming an
  invaluable part of daily life, offering
  vast opportunities for businesses,
  researchers, and consumers. As an AI
  Engineer, I create cutting-edge AI
  solutions for businesses, researchers,
  and individuals, helping them
  seamlessly integrate these innovations
  into their existing infrastructure.`,
      `“Just as electricity transformed almost
  everything 100 years ago, today I
  actually have a hard time thinking of an
  industry that I don’t think AI will
  transform in the next several years.”`,
      "Former chief scientist at Baidu, Co-founder at Coursera",
    ],
    t = "text-[16px] leading-[2] lg:text-[1.125vw] lg:max-w-[48.625vw]";
  return f.jsx("section", {
    id: "aboutAI",
    className: "lg:max-w-[94.375vw] mx-auto",
    children: f.jsxs("div", {
      className:
        "bg-[#1C1C1F] text-white lg:pt-[4.125vw] lg:pb-[2vw] lg:px-[2.313vw] ",
      children: [
        f.jsx("h1", {
          className:
            "text-[44px] lg:text-[2.5vw] font-Black px-[30px] pt-[15px] lg:p-0",
          children: "R.",
        }),
        f.jsxs("div", {
          className: "flex flex-col lg:flex-row",
          children: [
            f.jsx("div", {
              className: "lg:w-[40%] order-2 lg:order-1 relative",
              children: f.jsx("div", {
                className:
                  "lg:w-[50.875vw] lg:h-[70%] lg:absolute lg:left-[-19vw] lg:top-[6vw] w-full",
                children: f.jsx("img", {
                  src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/images/AI+Girl.jpg",
                  alt: "",
                  className: "w-full",
                }),
              }),
            }),
            f.jsxs("div", {
              className:
                "space-y-4 lg:w-[60%] lg:space-y-[1.75vw] order-1 lg:order-2 p-[30px] lg:p-0",
              children: [
                f.jsx("div", {
                  className:
                    "text-[34px] lg:text-[5.25vw] lg:leading-[0.9]  font-Black  leading-[1.2] uppercase overflow-hidden",
                  children: f.jsxs("p", {
                    className: "text-bg",
                    children: [
                      "artificial int. ",
                      f.jsx("br", {}),
                      " ENGINEER",
                      " ",
                    ],
                  }),
                }),
                f.jsx("p", { className: t, children: e[0] }),
                f.jsx("div", {
                  className: "w-full border lg:max-w-[48.625vw] lg:opacity-50",
                }),
                f.jsx("p", { className: t, children: e[1] }),
                f.jsx("h1", {
                  className: "text-[24px] lg:text-[2.5vw] font-Bold ",
                  children: "Andrew Ng",
                }),
                f.jsx("p", { className: t, children: e[2] }),
                f.jsx("div", {
                  className:
                    "w-full py-[40px] flex items-center justify-center lg:justify-end lg:max-w-[48.625vw]",
                  children: f.jsxs(Ee, {
                    to: "/contact",
                    className: "w-full max-w-[300px]",
                    children: [
                      " ",
                      f.jsx("div", {
                        className:
                          "text-center bg-white text-black uppercase text-[14px] py-[22px] font-Bold hover:bg-heavyBlue duration-300 hover:text-white w-full",
                        children: "Contact Revel",
                      }),
                      " ",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: n2 } = Object.prototype,
  { getPrototypeOf: lf } = Object,
  Ka = ((e) => (t) => {
    const n = n2.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  zt = (e) => ((e = e.toLowerCase()), (t) => Ka(t) === e),
  Ya = (e) => (t) => typeof t === e,
  { isArray: yi } = Array,
  Ns = Ya("undefined");
function r2(e) {
  return (
    e !== null &&
    !Ns(e) &&
    e.constructor !== null &&
    !Ns(e.constructor) &&
    Ct(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const I0 = zt("ArrayBuffer");
function i2(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && I0(e.buffer)),
    t
  );
}
const s2 = Ya("string"),
  Ct = Ya("function"),
  D0 = Ya("number"),
  Xa = (e) => e !== null && typeof e == "object",
  o2 = (e) => e === !0 || e === !1,
  Mo = (e) => {
    if (Ka(e) !== "object") return !1;
    const t = lf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  a2 = zt("Date"),
  l2 = zt("File"),
  u2 = zt("Blob"),
  c2 = zt("FileList"),
  d2 = (e) => Xa(e) && Ct(e.pipe),
  f2 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ct(e.append) &&
          ((t = Ka(e)) === "formdata" ||
            (t === "object" &&
              Ct(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  p2 = zt("URLSearchParams"),
  [h2, m2, g2, v2] = ["ReadableStream", "Request", "Response", "Headers"].map(
    zt
  ),
  y2 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Vs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), yi(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function U0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const O0 =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  B0 = (e) => !Ns(e) && e !== O0;
function mc() {
  const { caseless: e } = (B0(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && U0(t, i)) || i;
      Mo(t[s]) && Mo(r)
        ? (t[s] = mc(t[s], r))
        : Mo(r)
        ? (t[s] = mc({}, r))
        : yi(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Vs(arguments[r], n);
  return t;
}
const x2 = (e, t, n, { allOwnKeys: r } = {}) => (
    Vs(
      t,
      (i, s) => {
        n && Ct(i) ? (e[s] = _0(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  w2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  S2 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  j2 = (e, t, n, r) => {
    let i, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && lf(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  E2 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  T2 = (e) => {
    if (!e) return null;
    if (yi(e)) return e;
    let t = e.length;
    if (!D0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  F2 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && lf(Uint8Array)),
  P2 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  C2 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  b2 = zt("HTMLFormElement"),
  k2 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  pm = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  N2 = zt("RegExp"),
  z0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Vs(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r);
  },
  R2 = (e) => {
    z0(e, (t, n) => {
      if (Ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ct(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  A2 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return yi(e) ? r(e) : r(String(e).split(t)), n;
  },
  M2 = () => {},
  L2 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Gl = "abcdefghijklmnopqrstuvwxyz",
  hm = "0123456789",
  V0 = { DIGIT: hm, ALPHA: Gl, ALPHA_DIGIT: Gl + Gl.toUpperCase() + hm },
  _2 = (e = 16, t = V0.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function I2(e) {
  return !!(
    e &&
    Ct(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const D2 = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Xa(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = yi(r) ? [] : {};
            return (
              Vs(r, (o, a) => {
                const l = n(o, i + 1);
                !Ns(l) && (s[a] = l);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  U2 = zt("AsyncFunction"),
  O2 = (e) => e && (Xa(e) || Ct(e)) && Ct(e.then) && Ct(e.catch),
  N = {
    isArray: yi,
    isArrayBuffer: I0,
    isBuffer: r2,
    isFormData: f2,
    isArrayBufferView: i2,
    isString: s2,
    isNumber: D0,
    isBoolean: o2,
    isObject: Xa,
    isPlainObject: Mo,
    isReadableStream: h2,
    isRequest: m2,
    isResponse: g2,
    isHeaders: v2,
    isUndefined: Ns,
    isDate: a2,
    isFile: l2,
    isBlob: u2,
    isRegExp: N2,
    isFunction: Ct,
    isStream: d2,
    isURLSearchParams: p2,
    isTypedArray: F2,
    isFileList: c2,
    forEach: Vs,
    merge: mc,
    extend: x2,
    trim: y2,
    stripBOM: w2,
    inherits: S2,
    toFlatObject: j2,
    kindOf: Ka,
    kindOfTest: zt,
    endsWith: E2,
    toArray: T2,
    forEachEntry: P2,
    matchAll: C2,
    isHTMLForm: b2,
    hasOwnProperty: pm,
    hasOwnProp: pm,
    reduceDescriptors: z0,
    freezeMethods: R2,
    toObjectSet: A2,
    toCamelCase: k2,
    noop: M2,
    toFiniteNumber: L2,
    findKey: U0,
    global: O0,
    isContextDefined: B0,
    ALPHABET: V0,
    generateString: _2,
    isSpecCompliantForm: I2,
    toJSONObject: D2,
    isAsyncFn: U2,
    isThenable: O2,
  };
function Q(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
N.inherits(Q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: N.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const H0 = Q.prototype,
  $0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  $0[e] = { value: e };
});
Object.defineProperties(Q, $0);
Object.defineProperty(H0, "isAxiosError", { value: !0 });
Q.from = (e, t, n, r, i, s) => {
  const o = Object.create(H0);
  return (
    N.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    Q.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const B2 = null;
function gc(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function G0(e) {
  return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function mm(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = G0(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function z2(e) {
  return N.isArray(e) && !e.some(gc);
}
const V2 = N.toFlatObject(N, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function qa(e, t, n) {
  if (!N.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = N.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, j) {
        return !N.isUndefined(j[x]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || u,
    s = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && N.isSpecCompliantForm(t);
  if (!N.isFunction(i)) throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null) return "";
    if (N.isDate(v)) return v.toISOString();
    if (!l && N.isBlob(v))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(v) || N.isTypedArray(v)
      ? l && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function u(v, x, j) {
    let m = v;
    if (v && !j && typeof v == "object") {
      if (N.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (N.isArray(v) && z2(v)) ||
        ((N.isFileList(v) || N.endsWith(x, "[]")) && (m = N.toArray(v)))
      )
        return (
          (x = G0(x)),
          m.forEach(function (g, S) {
            !(N.isUndefined(g) || g === null) &&
              t.append(
                o === !0 ? mm([x], S, s) : o === null ? x : x + "[]",
                c(g)
              );
          }),
          !1
        );
    }
    return gc(v) ? !0 : (t.append(mm(j, x, s), c(v)), !1);
  }
  const d = [],
    p = Object.assign(V2, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: gc,
    });
  function h(v, x) {
    if (!N.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(v),
        N.forEach(v, function (m, y) {
          (!(N.isUndefined(m) || m === null) &&
            i.call(t, m, N.isString(y) ? y.trim() : y, x, p)) === !0 &&
            h(m, x ? x.concat(y) : [y]);
        }),
        d.pop();
    }
  }
  if (!N.isObject(e)) throw new TypeError("data must be an object");
  return h(e), t;
}
function gm(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function uf(e, t) {
  (this._pairs = []), e && qa(e, this, t);
}
const W0 = uf.prototype;
W0.append = function (t, n) {
  this._pairs.push([t, n]);
};
W0.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, gm);
      }
    : gm;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function H2(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function K0(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || H2,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = N.isURLSearchParams(t) ? t.toString() : new uf(t, n).toString(r)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class vm {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    N.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Y0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  $2 = typeof URLSearchParams < "u" ? URLSearchParams : uf,
  G2 = typeof FormData < "u" ? FormData : null,
  W2 = typeof Blob < "u" ? Blob : null,
  K2 = {
    isBrowser: !0,
    classes: { URLSearchParams: $2, FormData: G2, Blob: W2 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  cf = typeof window < "u" && typeof document < "u",
  Y2 = ((e) => cf && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  X2 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  q2 = (cf && window.location.href) || "http://localhost",
  Q2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: cf,
        hasStandardBrowserEnv: Y2,
        hasStandardBrowserWebWorkerEnv: X2,
        origin: q2,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ut = { ...Q2, ...K2 };
function J2(e, t) {
  return qa(
    e,
    new Ut.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return Ut.isNode && N.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Z2(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function eb(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function X0(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && N.isArray(i) ? i.length : o),
      l
        ? (N.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
        : ((!i[o] || !N.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && N.isArray(i[o]) && (i[o] = eb(i[o])),
          !a)
    );
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const n = {};
    return (
      N.forEachEntry(e, (r, i) => {
        t(Z2(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function tb(e, t, n) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Hs = {
  transitional: Y0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = N.isObject(t);
      if ((s && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t)))
        return i ? JSON.stringify(X0(t)) : t;
      if (
        N.isArrayBuffer(t) ||
        N.isBuffer(t) ||
        N.isStream(t) ||
        N.isFile(t) ||
        N.isBlob(t) ||
        N.isReadableStream(t)
      )
        return t;
      if (N.isArrayBufferView(t)) return t.buffer;
      if (N.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return J2(t, this.formSerializer).toString();
        if ((a = N.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return qa(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), tb(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Hs.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (N.isResponse(t) || N.isReadableStream(t)) return t;
      if (t && N.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? Q.from(a, Q.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ut.classes.FormData, Blob: Ut.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
N.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hs.headers[e] = {};
});
const nb = N.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  rb = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && nb[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ym = Symbol("internals");
function Ui(e) {
  return e && String(e).trim().toLowerCase();
}
function Lo(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(Lo) : String(e);
}
function ib(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const sb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Wl(e, t, n, r, i) {
  if (N.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!N.isString(t))) {
    if (N.isString(r)) return t.indexOf(r) !== -1;
    if (N.isRegExp(r)) return r.test(t);
  }
}
function ob(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ab(e, t) {
  const n = N.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
class it {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(a, l, c) {
      const u = Ui(l);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = N.findKey(i, u);
      (!d || i[d] === void 0 || c === !0 || (c === void 0 && i[d] !== !1)) &&
        (i[d || l] = Lo(a));
    }
    const o = (a, l) => N.forEach(a, (c, u) => s(c, u, l));
    if (N.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (N.isString(t) && (t = t.trim()) && !sb(t)) o(rb(t), n);
    else if (N.isHeaders(t)) for (const [a, l] of t.entries()) s(l, a, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Ui(t)), t)) {
      const r = N.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return ib(i);
        if (N.isFunction(n)) return n.call(this, i, r);
        if (N.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ui(t)), t)) {
      const r = N.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Wl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = Ui(o)), o)) {
        const a = N.findKey(r, o);
        a && (!n || Wl(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return N.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Wl(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      N.forEach(this, (i, s) => {
        const o = N.findKey(r, s);
        if (o) {
          (n[o] = Lo(i)), delete n[s];
          return;
        }
        const a = t ? ob(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = Lo(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      N.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && N.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[ym] = this[ym] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = Ui(o);
      r[a] || (ab(i, o), (r[a] = !0));
    }
    return N.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
it.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
N.reduceDescriptors(it.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
N.freezeMethods(it);
function Kl(e, t) {
  const n = this || Hs,
    r = t || n,
    i = it.from(r.headers);
  let s = r.data;
  return (
    N.forEach(e, function (a) {
      s = a.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function q0(e) {
  return !!(e && e.__CANCEL__);
}
function xi(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
N.inherits(xi, Q, { __CANCEL__: !0 });
function Q0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Q(
          "Request failed with status code " + n.status,
          [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function lb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function ub(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        u = r[s];
      o || (o = c), (n[i] = l), (r[i] = c);
      let d = s,
        p = 0;
      for (; d !== i; ) (p += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), c - o < t)) return;
      const h = u && c - u;
      return h ? Math.round((p * 1e3) / h) : void 0;
    }
  );
}
function cb(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const o = this === !0,
      a = Date.now();
    if (o || a - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = a), e.apply(null, arguments)
      );
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (a - n)
      ));
  };
}
const va = (e, t, n = 3) => {
    let r = 0;
    const i = ub(50, 250);
    return cb((s) => {
      const o = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = o - r,
        c = i(l),
        u = o <= a;
      r = o;
      const d = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: c || void 0,
        estimated: c && a && u ? (a - o) / c : void 0,
        event: s,
        lengthComputable: a != null,
      };
      (d[t ? "download" : "upload"] = !0), e(d);
    }, n);
  },
  db = Ut.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(s) {
          let o = s;
          return (
            t && (n.setAttribute("href", o), (o = n.href)),
            n.setAttribute("href", o),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (o) {
            const a = N.isString(o) ? i(o) : o;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  fb = Ut.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, s) {
          const o = [e + "=" + encodeURIComponent(t)];
          N.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            N.isString(r) && o.push("path=" + r),
            N.isString(i) && o.push("domain=" + i),
            s === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function pb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function J0(e, t) {
  return e && !pb(t) ? hb(e, t) : t;
}
const xm = (e) => (e instanceof it ? { ...e } : e);
function xr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return N.isPlainObject(c) && N.isPlainObject(u)
      ? N.merge.call({ caseless: d }, c, u)
      : N.isPlainObject(u)
      ? N.merge({}, u)
      : N.isArray(u)
      ? u.slice()
      : u;
  }
  function i(c, u, d) {
    if (N.isUndefined(u)) {
      if (!N.isUndefined(c)) return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function s(c, u) {
    if (!N.isUndefined(u)) return r(void 0, u);
  }
  function o(c, u) {
    if (N.isUndefined(u)) {
      if (!N.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, d) {
    if (d in t) return r(c, u);
    if (d in e) return r(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, u) => i(xm(c), xm(u), !0),
  };
  return (
    N.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = l[u] || i,
        p = d(e[u], t[u], u);
      (N.isUndefined(p) && d !== a) || (n[u] = p);
    }),
    n
  );
}
const Z0 = (e) => {
    const t = xr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = it.from(o)),
      (t.url = K0(J0(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (N.isFormData(n)) {
      if (Ut.hasStandardBrowserEnv || Ut.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [c, ...u] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([c || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      Ut.hasStandardBrowserEnv &&
      (r && N.isFunction(r) && (r = r(t)), r || (r !== !1 && db(t.url)))
    ) {
      const c = i && s && fb.read(s);
      c && o.set(i, c);
    }
    return t;
  },
  mb = typeof XMLHttpRequest < "u",
  gb =
    mb &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Z0(e);
        let s = i.data;
        const o = it.from(i.headers).normalize();
        let { responseType: a } = i,
          l;
        function c() {
          i.cancelToken && i.cancelToken.unsubscribe(l),
            i.signal && i.signal.removeEventListener("abort", l);
        }
        let u = new XMLHttpRequest();
        u.open(i.method.toUpperCase(), i.url, !0), (u.timeout = i.timeout);
        function d() {
          if (!u) return;
          const h = it.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            x = {
              data:
                !a || a === "text" || a === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: h,
              config: e,
              request: u,
            };
          Q0(
            function (m) {
              n(m), c();
            },
            function (m) {
              r(m), c();
            },
            x
          ),
            (u = null);
        }
        "onloadend" in u
          ? (u.onloadend = d)
          : (u.onreadystatechange = function () {
              !u ||
                u.readyState !== 4 ||
                (u.status === 0 &&
                  !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                setTimeout(d);
            }),
          (u.onabort = function () {
            u &&
              (r(new Q("Request aborted", Q.ECONNABORTED, i, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new Q("Network Error", Q.ERR_NETWORK, i, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let v = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const x = i.transitional || Y0;
            i.timeoutErrorMessage && (v = i.timeoutErrorMessage),
              r(
                new Q(
                  v,
                  x.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
                  i,
                  u
                )
              ),
              (u = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in u &&
            N.forEach(o.toJSON(), function (v, x) {
              u.setRequestHeader(x, v);
            }),
          N.isUndefined(i.withCredentials) ||
            (u.withCredentials = !!i.withCredentials),
          a && a !== "json" && (u.responseType = i.responseType),
          typeof i.onDownloadProgress == "function" &&
            u.addEventListener("progress", va(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", va(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((l = (h) => {
              u &&
                (r(!h || h.type ? new xi(null, e, u) : h),
                u.abort(),
                (u = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(l),
            i.signal &&
              (i.signal.aborted ? l() : i.signal.addEventListener("abort", l)));
        const p = lb(i.url);
        if (p && Ut.protocols.indexOf(p) === -1) {
          r(new Q("Unsupported protocol " + p + ":", Q.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(s || null);
      });
    },
  vb = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (l) {
      if (!r) {
        (r = !0), o();
        const c = l instanceof Error ? l : this.reason;
        n.abort(
          c instanceof Q ? c : new xi(c instanceof Error ? c.message : c)
        );
      }
    };
    let s =
      t &&
      setTimeout(() => {
        i(new Q(`timeout ${t} of ms exceeded`, Q.ETIMEDOUT));
      }, t);
    const o = () => {
      e &&
        (s && clearTimeout(s),
        (s = null),
        e.forEach((l) => {
          l &&
            (l.removeEventListener
              ? l.removeEventListener("abort", i)
              : l.unsubscribe(i));
        }),
        (e = null));
    };
    e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", i));
    const { signal: a } = n;
    return (
      (a.unsubscribe = o),
      [
        a,
        () => {
          s && clearTimeout(s), (s = null);
        },
      ]
    );
  },
  yb = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  xb = async function* (e, t, n) {
    for await (const r of e)
      yield* yb(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  wm = (e, t, n, r, i) => {
    const s = xb(e, t, i);
    let o = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(a) {
          const { done: l, value: c } = await s.next();
          if (l) {
            a.close(), r();
            return;
          }
          let u = c.byteLength;
          n && n((o += u)), a.enqueue(new Uint8Array(c));
        },
        cancel(a) {
          return r(a), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Sm = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  Qa =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  e1 = Qa && typeof ReadableStream == "function",
  vc =
    Qa &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  wb =
    e1 &&
    (() => {
      let e = !1;
      const t = new Request(Ut.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  jm = 64 * 1024,
  yc =
    e1 &&
    !!(() => {
      try {
        return N.isReadableStream(new Response("").body);
      } catch {}
    })(),
  ya = { stream: yc && ((e) => e.body) };
Qa &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !ya[t] &&
        (ya[t] = N.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new Q(
                `Response type '${t}' is not supported`,
                Q.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Sb = async (e) => {
    if (e == null) return 0;
    if (N.isBlob(e)) return e.size;
    if (N.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (N.isArrayBufferView(e)) return e.byteLength;
    if ((N.isURLSearchParams(e) && (e = e + ""), N.isString(e)))
      return (await vc(e)).byteLength;
  },
  jb = async (e, t) => {
    const n = N.toFiniteNumber(e.getContentLength());
    return n ?? Sb(t);
  },
  Eb =
    Qa &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: p,
      } = Z0(e);
      c = c ? (c + "").toLowerCase() : "text";
      let [h, v] = i || s || o ? vb([i, s], o) : [],
        x,
        j;
      const m = () => {
        !x &&
          setTimeout(() => {
            h && h.unsubscribe();
          }),
          (x = !0);
      };
      let y;
      try {
        if (
          l &&
          wb &&
          n !== "get" &&
          n !== "head" &&
          (y = await jb(u, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            w;
          N.isFormData(r) &&
            (w = k.headers.get("content-type")) &&
            u.setContentType(w),
            k.body && (r = wm(k.body, jm, Sm(y, va(l)), null, vc));
        }
        N.isString(d) || (d = d ? "cors" : "omit"),
          (j = new Request(t, {
            ...p,
            signal: h,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let g = await fetch(j);
        const S = yc && (c === "stream" || c === "response");
        if (yc && (a || S)) {
          const k = {};
          ["status", "statusText", "headers"].forEach((P) => {
            k[P] = g[P];
          });
          const w = N.toFiniteNumber(g.headers.get("content-length"));
          g = new Response(
            wm(g.body, jm, a && Sm(w, va(a, !0)), S && m, vc),
            k
          );
        }
        c = c || "text";
        let T = await ya[N.findKey(ya, c) || "text"](g, e);
        return (
          !S && m(),
          v && v(),
          await new Promise((k, w) => {
            Q0(k, w, {
              data: T,
              headers: it.from(g.headers),
              status: g.status,
              statusText: g.statusText,
              config: e,
              request: j,
            });
          })
        );
      } catch (g) {
        throw (
          (m(),
          g && g.name === "TypeError" && /fetch/i.test(g.message)
            ? Object.assign(new Q("Network Error", Q.ERR_NETWORK, e, j), {
                cause: g.cause || g,
              })
            : Q.from(g, g && g.code, e, j))
        );
      }
    }),
  xc = { http: B2, xhr: gb, fetch: Eb };
N.forEach(xc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Em = (e) => `- ${e}`,
  Tb = (e) => N.isFunction(e) || e === null || e === !1,
  t1 = {
    getAdapter: (e) => {
      e = N.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (
          ((r = n),
          !Tb(n) && ((r = xc[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Q(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(Em).join(`
`)
            : " " + Em(s[0])
          : "as no adapter specified";
        throw new Q(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: xc,
  };
function Yl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new xi(null, e);
}
function Tm(e) {
  return (
    Yl(e),
    (e.headers = it.from(e.headers)),
    (e.data = Kl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    t1
      .getAdapter(e.adapter || Hs.adapter)(e)
      .then(
        function (r) {
          return (
            Yl(e),
            (r.data = Kl.call(e, e.transformResponse, r)),
            (r.headers = it.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            q0(r) ||
              (Yl(e),
              r &&
                r.response &&
                ((r.response.data = Kl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = it.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const n1 = "1.7.2",
  df = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    df[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Fm = {};
df.transitional = function (t, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      n1 +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new Q(
        i(o, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return (
      n &&
        !Fm[o] &&
        ((Fm[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, a) : !0
    );
  };
};
function Fb(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = t[s];
    if (o) {
      const a = e[s],
        l = a === void 0 || o(a, s, e);
      if (l !== !0)
        throw new Q("option " + s + " must be " + l, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Q("Unknown option " + s, Q.ERR_BAD_OPTION);
  }
}
const wc = { assertOptions: Fb, validators: df },
  yn = wc.validators;
class fr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new vm(), response: new vm() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = xr(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      wc.assertOptions(
        r,
        {
          silentJSONParsing: yn.transitional(yn.boolean),
          forcedJSONParsing: yn.transitional(yn.boolean),
          clarifyTimeoutError: yn.transitional(yn.boolean),
        },
        !1
      ),
      i != null &&
        (N.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : wc.assertOptions(
              i,
              { encode: yn.function, serialize: yn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && N.merge(s.common, s[n.method]);
    s &&
      N.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete s[v];
        }
      ),
      (n.headers = it.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((l = l && x.synchronous), a.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (x) {
      c.push(x.fulfilled, x.rejected);
    });
    let u,
      d = 0,
      p;
    if (!l) {
      const v = [Tm.bind(this), void 0];
      for (
        v.unshift.apply(v, a),
          v.push.apply(v, c),
          p = v.length,
          u = Promise.resolve(n);
        d < p;

      )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    p = a.length;
    let h = n;
    for (d = 0; d < p; ) {
      const v = a[d++],
        x = a[d++];
      try {
        h = v(h);
      } catch (j) {
        x.call(this, j);
        break;
      }
    }
    try {
      u = Tm.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, p = c.length; d < p; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = xr(this.defaults, t);
    const n = J0(t.baseURL, t.url);
    return K0(n, t.params, t.paramsSerializer);
  }
}
N.forEach(["delete", "get", "head", "options"], function (t) {
  fr.prototype[t] = function (n, r) {
    return this.request(
      xr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
N.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, o, a) {
      return this.request(
        xr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (fr.prototype[t] = n()), (fr.prototype[t + "Form"] = n(!0));
});
class ff {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        r.reason || ((r.reason = new xi(s, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ff(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function Pb(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Cb(e) {
  return N.isObject(e) && e.isAxiosError === !0;
}
const Sc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Sc).forEach(([e, t]) => {
  Sc[t] = e;
});
function r1(e) {
  const t = new fr(e),
    n = _0(fr.prototype.request, t);
  return (
    N.extend(n, fr.prototype, t, { allOwnKeys: !0 }),
    N.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return r1(xr(e, i));
    }),
    n
  );
}
const he = r1(Hs);
he.Axios = fr;
he.CanceledError = xi;
he.CancelToken = ff;
he.isCancel = q0;
he.VERSION = n1;
he.toFormData = qa;
he.AxiosError = Q;
he.Cancel = he.CanceledError;
he.all = function (t) {
  return Promise.all(t);
};
he.spread = Pb;
he.isAxiosError = Cb;
he.mergeConfig = xr;
he.AxiosHeaders = it;
he.formToJSON = (e) => X0(N.isHTMLForm(e) ? new FormData(e) : e);
he.getAdapter = t1.getAdapter;
he.HttpStatusCode = Sc;
he.default = he;
function bb() {
  const [e, t] = E.useState([]);
  return (
    E.useEffect(() => {
      he.get("https://api.hassanrevel.com/api/blogs/?page=1").then((n) =>
        t(n.data.results)
      );
    }, []),
    f.jsx(f.Fragment, {
      children: f.jsx("div", {
        className: "grid grid-cols-2 lg:flex gap-10 mt-[5vw] px-[16px] lg:p-0",
        children: e.map((n, r) =>
          f.jsxs(
            "div",
            {
              className: "w-full space-y-4 cursor-pointer",
              children: [
                f.jsx("div", {
                  className: "w-full overflow-hidden rounded-lg",
                  children: f.jsx("img", {
                    src: n.img,
                    alt: "",
                    className: "w-full hover:scale-105 duration-300",
                  }),
                }),
                f.jsx("div", {}),
              ],
            },
            r
          )
        ),
      }),
    })
  );
}
function kb() {
  const e = [
      { text: "read blogs", link: "/blogs" },
      { text: "SUBSCRIBE", link: "#footer" },
    ],
    t = `Look at the behind the scenes of my life in AI, AI Solutions and how I strive for
  success everyday.
  `,
    [n, r] = E.useState(window.innerWidth);
  E.useEffect(() => {
    const s = () => {
      r(window.innerWidth);
    };
    return (
      window.addEventListener("resize", s),
      () => {
        window.removeEventListener("resize", s);
      }
    );
  }, []);
  const i = (s) =>
    s >= 1024
      ? "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/images/blogsImglg.jpg"
      : "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/images/blogsImg.jpg";
  return f.jsxs("section", {
    id: "blogSec",
    className: "my-[56px] lg:my-[6.6vw]",
    children: [
      f.jsxs("div", {
        className:
          "flex flex-col lg:flex-row lg:justify-between lg:items-center w-full",
        children: [
          f.jsxs("div", {
            className:
              "px-[30px] lg:px-[6.6vw]  space-y-[34px] h-[385px] lg:h-[38.5vw]   relative flex flex-col lg:w-[54.875vw]",
            children: [
              f.jsxs("div", {
                className:
                  "w-full h-full absolute left-0 top-0 z-[-10] overflow-hidden",
                children: [
                  f.jsx("div", {
                    className:
                      "w-full h-full absolute bg-white top-0 left-0 blog-img ",
                  }),
                  f.jsx("div", {
                    className:
                      "w-full h-full absolute bg-white left-0 top-0 opacity-90 ",
                  }),
                ],
              }),
              f.jsx("h1", {
                className:
                  "text-[44px] lg:text-[5vw] font-Black text-heavyBlue",
                children: "Blogs",
              }),
              f.jsx("p", {
                className: "text-[16px] leading-[2] lg:text-[1vw]",
                children: t,
              }),
              f.jsxs("div", {
                className:
                  "flex space-x-4 lg:space-x-[2vw] max-w-[306px] lg:max-w-[24vw]",
                children: [
                  f.jsx("div", {
                    className: "w-[50%]",
                    children: f.jsx(Ee, {
                      to: e[0].link,
                      children: f.jsx("div", {
                        className:
                          "text-[11px] sm:text-[14px]  font-SemiBold py-[18px] px-[8px] text-center uppercase lg:text-[0.875vw] review-border text-black   hero-btn-border lg:px-0 lg:w-[12.5vw] lg:py-[1.313vw] hover:bg-darkBlue hover:text-white duration-300",
                        children: e[0].text,
                      }),
                    }),
                  }),
                  f.jsx("div", {
                    className: "w-[50%]",
                    children: f.jsx("a", {
                      href: e[1].link,
                      children: f.jsx("div", {
                        className:
                          "text-[11px] sm:text-[14px]  font-SemiBold py-[18px] px-[8px] text-center uppercase lg:text-[0.875vw] review-border text-black   hero-btn-border lg:px-0 lg:w-[12.5vw] lg:py-[1.313vw] hover:bg-darkBlue hover:text-white duration-300",
                        children: e[1].text,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: "w-full lg:w-[44vw]",
            children: f.jsx("img", { src: i(n), alt: "", className: "w-full" }),
          }),
        ],
      }),
      f.jsx(bb, {}),
    ],
  });
}
function Nb() {
  const e = `I’m an AI Engineer. I make AI solutions for businesses, researchers, and
    individuals, seamlessly integrating them into existing infrastructures. I also write
    blog posts about projects I create for clients and personal endeavors driven by
    enthusiasm and learning. Additionally, I cover the latest news and updates in the
    ever-evolving world of AI.`,
    t = [
      { text: "I'm new to Hassan!", link: "/about" },
      { text: "Contact Revel", link: "/contact" },
    ];
  return f.jsx("section", {
    id: "homeHero",
    children: f.jsxs("div", {
      className: "flex flex-col lg:flex-row",
      children: [
        f.jsx("div", {
          className: "lg:w-[44.81%] lg:order-2 relative",
          children: f.jsx("img", {
            src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.jpg",
            alt: "",
            className: "w-full ",
          }),
        }),
        f.jsxs("div", {
          className:
            "pt-[82px] px-[30px] pb-[50px] space-y-[30px] lg:pl-[5.125vw] lg:pt-[13.938vw] lg:space-y-[2.313vw] lg:w-[55.18%] lg:order-1",
          children: [
            f.jsxs("div", {
              className:
                "space-y-[-20px] lg:space-y-[-1vw] space-x-[14px] lg:space-x-[4.438vw] uppercase",
              children: [
                f.jsx("h1", {
                  className: "text-[#949494] text-[46px] lg:text-[4.813vw]",
                  children: "revel",
                }),
                f.jsx("p", {
                  className:
                    "font-Black text-[46px] lg:text-[6.188vw] text-heavyBlue",
                  children: "hassan",
                }),
              ],
            }),
            f.jsx("div", {
              children: f.jsx("p", {
                className:
                  "border-l-[10px] border-darkBlue py-[30px] px-[33px] text-[16px] lg:py-[1vw] lg:px-[1.2vw] lg:text-[1vw] lg:leading-[2] lg:max-w-[45vw]",
                children: e,
              }),
            }),
            f.jsx("div", {
              className: "space-x-4 flex flex-row",
              children: t.map((n, r) =>
                f.jsx(
                  "div",
                  {
                    children: f.jsx(Ee, {
                      to: n.link,
                      children: f.jsx("div", {
                        className:
                          "text-[11px] sm:text-[14px]  font-SemiBold py-[18px] px-[8px] bg-darkBlue text-white text-center uppercase lg:text-[0.875vw] lg:bg-white lg:text-heavyBlue hero-btn-border lg:px-0 lg:w-[12.5vw] lg:py-[1.313vw] hover:bg-darkBlue hover:text-white duration-300",
                        children: n.text,
                      }),
                    }),
                  },
                  r
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Pm(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function pf(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Pm(t[n]) &&
          Pm(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          pf(e[n], t[n]);
    });
}
const i1 = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function ln() {
  const e = typeof document < "u" ? document : {};
  return pf(e, i1), e;
}
const Rb = {
  document: i1,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function gt() {
  const e = typeof window < "u" ? window : {};
  return pf(e, Rb), e;
}
function Ab(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Mb(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function jc(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function xa() {
  return Date.now();
}
function Lb(e) {
  const t = gt();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function _b(e, t) {
  t === void 0 && (t = "x");
  const n = gt();
  let r, i, s;
  const o = Lb(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function go(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Ib(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ut() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !Ib(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, o = i.length; s < o; s += 1) {
        const a = i[s],
          l = Object.getOwnPropertyDescriptor(r, a);
        l !== void 0 &&
          l.enumerable &&
          (go(e[a]) && go(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : ut(e[a], r[a])
            : !go(e[a]) && go(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : ut(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function vo(e, t, n) {
  e.style.setProperty(t, n);
}
function s1(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = gt(),
    s = -t.translate;
  let o = null,
    a;
  const l = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > s ? "next" : "prev",
    u = (p, h) => (c === "next" && p >= h) || (c === "prev" && p <= h),
    d = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const p = Math.max(Math.min((a - o) / l, 1), 0),
        h = 0.5 - Math.cos(p * Math.PI) / 2;
      let v = s + h * (n - s);
      if ((u(v, n) && (v = n), t.wrapperEl.scrollTo({ [r]: v }), u(v, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function tn(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function wa(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Ec(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : Ab(t))), n;
}
function Db(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Ub(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function bn(e, t) {
  return gt().getComputedStyle(e, null).getPropertyValue(t);
}
function Cm(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Ob(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) n.push(r), (r = r.parentElement);
  return n;
}
function bm(e, t, n) {
  const r = gt();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
let Xl;
function Bb() {
  const e = gt(),
    t = ln();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function o1() {
  return Xl || (Xl = Bb()), Xl;
}
let ql;
function zb(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = o1(),
    r = gt(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = r.screen.width,
    l = r.screen.height,
    c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = i === "Win32";
  let v = i === "MacIntel";
  const x = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      v &&
      n.touch &&
      x.indexOf(`${a}x${l}`) >= 0 &&
      ((u = s.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (v = !1)),
    c && !h && ((o.os = "android"), (o.android = !0)),
    (u || p || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function a1(e) {
  return e === void 0 && (e = {}), ql || (ql = zb(e)), ql;
}
let Ql;
function Vb() {
  const e = gt(),
    t = a1();
  let n = !1;
  function r() {
    const a = e.navigator.userAgent.toLowerCase();
    return (
      a.indexOf("safari") >= 0 &&
      a.indexOf("chrome") < 0 &&
      a.indexOf("android") < 0
    );
  }
  if (r()) {
    const a = String(e.navigator.userAgent);
    if (a.includes("Version/")) {
      const [l, c] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((u) => Number(u));
      n = l < 16 || (l === 16 && c < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    o = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function Hb() {
  return Ql || (Ql = Vb()), Ql;
}
function $b(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = gt();
  let s = null,
    o = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    l = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: p, height: h } = t;
            let v = p,
              x = h;
            d.forEach((j) => {
              let { contentBoxSize: m, contentRect: y, target: g } = j;
              (g && g !== t.el) ||
                ((v = y ? y.width : (m[0] || m).inlineSize),
                (x = y ? y.height : (m[0] || m).blockSize));
            }),
              (v !== p || x !== h) && a();
          });
        })),
        s.observe(t.el));
    },
    c = () => {
      o && i.cancelAnimationFrame(o),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    u = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      l();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", u);
  }),
    n("destroy", () => {
      c(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", u);
    });
}
function Gb(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    o = gt(),
    a = function (u, d) {
      d === void 0 && (d = {});
      const p = o.MutationObserver || o.WebkitMutationObserver,
        h = new p((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i("observerUpdate", v[0]);
            return;
          }
          const x = function () {
            i("observerUpdate", v[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(x)
            : o.setTimeout(x, 0);
        });
      h.observe(u, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(h);
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = Ob(t.hostEl);
          for (let d = 0; d < u.length; d += 1) a(u[d]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      s.forEach((u) => {
        u.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", l),
    r("destroy", c);
}
var Wb = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
        o[a] = arguments[a];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((l) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(r, [l, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[l] &&
            e.eventsListeners[l].forEach((c) => {
              c.apply(r, n);
            });
      }),
      e
    );
  },
};
function Kb() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(bn(r, "padding-left") || 0, 10) -
        parseInt(bn(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(bn(r, "padding-top") || 0, 10) -
        parseInt(bn(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Yb() {
  const e = this;
  function t(C, L) {
    return parseFloat(C.getPropertyValue(e.getDirectionLabel(L)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: o, wrongRTL: a } = e,
    l = e.virtual && n.virtual.enabled,
    c = l ? e.virtual.slides.length : e.slides.length,
    u = tn(i, `.${e.params.slideClass}, swiper-slide`),
    d = l ? e.virtual.slides.length : u.length;
  let p = [];
  const h = [],
    v = [];
  let x = n.slidesOffsetBefore;
  typeof x == "function" && (x = n.slidesOffsetBefore.call(e));
  let j = n.slidesOffsetAfter;
  typeof j == "function" && (j = n.slidesOffsetAfter.call(e));
  const m = e.snapGrid.length,
    y = e.slidesGrid.length;
  let g = n.spaceBetween,
    S = -x,
    T = 0,
    k = 0;
  if (typeof s > "u") return;
  typeof g == "string" && g.indexOf("%") >= 0
    ? (g = (parseFloat(g.replace("%", "")) / 100) * s)
    : typeof g == "string" && (g = parseFloat(g)),
    (e.virtualSize = -g),
    u.forEach((C) => {
      o ? (C.style.marginLeft = "") : (C.style.marginRight = ""),
        (C.style.marginBottom = ""),
        (C.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (vo(r, "--swiper-centered-offset-before", ""),
      vo(r, "--swiper-centered-offset-after", ""));
  const w = n.grid && n.grid.rows > 1 && e.grid;
  w ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
  let P;
  const R =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (C) => typeof n.breakpoints[C].slidesPerView < "u"
    ).length > 0;
  for (let C = 0; C < d; C += 1) {
    P = 0;
    let L;
    if (
      (u[C] && (L = u[C]),
      w && e.grid.updateSlide(C, L, u),
      !(u[C] && bn(L, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        R && (u[C].style[e.getDirectionLabel("width")] = "");
        const O = getComputedStyle(L),
          D = L.style.transform,
          W = L.style.webkitTransform;
        if (
          (D && (L.style.transform = "none"),
          W && (L.style.webkitTransform = "none"),
          n.roundLengths)
        )
          P = e.isHorizontal() ? bm(L, "width") : bm(L, "height");
        else {
          const K = t(O, "width"),
            se = t(O, "padding-left"),
            be = t(O, "padding-right"),
            A = t(O, "margin-left"),
            U = t(O, "margin-right"),
            B = O.getPropertyValue("box-sizing");
          if (B && B === "border-box") P = K + A + U;
          else {
            const { clientWidth: te, offsetWidth: re } = L;
            P = K + se + be + A + U + (re - te);
          }
        }
        D && (L.style.transform = D),
          W && (L.style.webkitTransform = W),
          n.roundLengths && (P = Math.floor(P));
      } else
        (P = (s - (n.slidesPerView - 1) * g) / n.slidesPerView),
          n.roundLengths && (P = Math.floor(P)),
          u[C] && (u[C].style[e.getDirectionLabel("width")] = `${P}px`);
      u[C] && (u[C].swiperSlideSize = P),
        v.push(P),
        n.centeredSlides
          ? ((S = S + P / 2 + T / 2 + g),
            T === 0 && C !== 0 && (S = S - s / 2 - g),
            C === 0 && (S = S - s / 2 - g),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            n.roundLengths && (S = Math.floor(S)),
            k % n.slidesPerGroup === 0 && p.push(S),
            h.push(S))
          : (n.roundLengths && (S = Math.floor(S)),
            (k - Math.min(e.params.slidesPerGroupSkip, k)) %
              e.params.slidesPerGroup ===
              0 && p.push(S),
            h.push(S),
            (S = S + P + g)),
        (e.virtualSize += P + g),
        (T = P),
        (k += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + j),
    o &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + g}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + g}px`),
    w && e.grid.updateWrapperSize(P, p),
    !n.centeredSlides)
  ) {
    const C = [];
    for (let L = 0; L < p.length; L += 1) {
      let O = p[L];
      n.roundLengths && (O = Math.floor(O)),
        p[L] <= e.virtualSize - s && C.push(O);
    }
    (p = C),
      Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(e.virtualSize - s);
  }
  if (l && n.loop) {
    const C = v[0] + g;
    if (n.slidesPerGroup > 1) {
      const L = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        O = C * n.slidesPerGroup;
      for (let D = 0; D < L; D += 1) p.push(p[p.length - 1] + O);
    }
    for (let L = 0; L < e.virtual.slidesBefore + e.virtual.slidesAfter; L += 1)
      n.slidesPerGroup === 1 && p.push(p[p.length - 1] + C),
        h.push(h[h.length - 1] + C),
        (e.virtualSize += C);
  }
  if ((p.length === 0 && (p = [0]), g !== 0)) {
    const C =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    u.filter((L, O) =>
      !n.cssMode || n.loop ? !0 : O !== u.length - 1
    ).forEach((L) => {
      L.style[C] = `${g}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let C = 0;
    v.forEach((O) => {
      C += O + (g || 0);
    }),
      (C -= g);
    const L = C - s;
    p = p.map((O) => (O <= 0 ? -x : O > L ? L + j : O));
  }
  if (n.centerInsufficientSlides) {
    let C = 0;
    v.forEach((O) => {
      C += O + (g || 0);
    }),
      (C -= g);
    const L = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (C + L < s) {
      const O = (s - C - L) / 2;
      p.forEach((D, W) => {
        p[W] = D - O;
      }),
        h.forEach((D, W) => {
          h[W] = D + O;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: p,
      slidesGrid: h,
      slidesSizesGrid: v,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    vo(r, "--swiper-centered-offset-before", `${-p[0]}px`),
      vo(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - v[v.length - 1] / 2}px`
      );
    const C = -e.snapGrid[0],
      L = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((O) => O + C)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + L));
  }
  if (
    (d !== c && e.emit("slidesLengthChange"),
    p.length !== m &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    h.length !== y && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const C = `${n.containerModifierClass}backface-hidden`,
      L = e.el.classList.contains(C);
    d <= n.maxBackfaceHiddenSlides
      ? L || e.el.classList.add(C)
      : L && e.el.classList.remove(C);
  }
}
function Xb(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const a = t.activeIndex + s;
        if (a > t.slides.length && !r) break;
        n.push(o(a));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const a = n[s].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function qb() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const km = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Qb(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let l = 0; l < r.length; l += 1) {
    const c = r[l];
    let u = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + a),
      p =
        (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + a),
      h = -(o - u),
      v = h + t.slidesSizesGrid[l],
      x = h >= 0 && h <= t.size - t.slidesSizesGrid[l],
      j =
        (h >= 0 && h < t.size - 1) ||
        (v > 1 && v <= t.size) ||
        (h <= 0 && v >= t.size);
    j && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(l)),
      km(c, j, n.slideVisibleClass),
      km(c, x, n.slideFullyVisibleClass),
      (c.progress = i ? -d : d),
      (c.originalProgress = i ? -p : p);
  }
}
function Jb(e) {
  const t = this;
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * u) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: o, progressLoop: a } = t;
  const l = s,
    c = o;
  if (r === 0) (i = 0), (s = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const u = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = u || i <= 0), (o = d || i >= 1), u && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const u = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      p = t.slidesGrid[u],
      h = t.slidesGrid[d],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      x = Math.abs(e);
    x >= p ? (a = (x - p) / v) : (a = (x + v - h) / v), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !l && t.emit("reachBeginning toEdge"),
    o && !c && t.emit("reachEnd toEdge"),
    ((l && !s) || (c && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Jl = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Zb() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    a = (d) => tn(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let l, c, u;
  if (s)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (l = a(`[data-swiper-slide-index="${d}"]`));
    } else l = a(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((l = t.filter((d) => d.column === i)[0]),
        (u = t.filter((d) => d.column === i + 1)[0]),
        (c = t.filter((d) => d.column === i - 1)[0]))
      : (l = t[i]);
  l &&
    (o ||
      ((u = Ub(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u && (u = t[0]),
      (c = Db(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = t[t.length - 1]))),
    t.forEach((d) => {
      Jl(d, d === l, n.slideActiveClass),
        Jl(d, d === u, n.slideNextClass),
        Jl(d, d === c, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const _o = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Zl = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Tc = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        a = [o - t];
      a.push(...Array.from({ length: t }).map((l, c) => o + r + c)),
        e.slides.forEach((l, c) => {
          a.includes(l.column) && Zl(e, c);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= s + t; o += 1) {
        const a = ((o % n) + n) % n;
        (a < i || a > s) && Zl(e, a);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
        o !== i && (o > s || o < i) && Zl(e, o);
  };
function ek(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function tk(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: a } = t;
  let l = e,
    c;
  const u = (h) => {
    let v = h - t.virtual.slidesBefore;
    return (
      v < 0 && (v = t.virtual.slides.length + v),
      v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
      v
    );
  };
  if ((typeof l > "u" && (l = ek(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
  else {
    const h = Math.min(i.slidesPerGroupSkip, l);
    c = h + Math.floor((l - h) / i.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), l === s && !t.params.loop)) {
    c !== a && ((t.snapIndex = c), t.emit("snapIndexChange"));
    return;
  }
  if (l === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(l);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let p;
  if (t.virtual && i.virtual.enabled && i.loop) p = u(l);
  else if (d) {
    const h = t.slides.filter((x) => x.column === l)[0];
    let v = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(v) && (v = Math.max(t.slides.indexOf(h), 0)),
      (p = Math.floor(v / i.grid.rows));
  } else if (t.slides[l]) {
    const h = t.slides[l].getAttribute("data-swiper-slide-index");
    h ? (p = parseInt(h, 10)) : (p = l);
  } else p = l;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: p,
    previousIndex: s,
    activeIndex: l,
  }),
    t.initialized && Tc(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== p && t.emit("realIndexChange"), t.emit("slideChange"));
}
function nk(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let s = !1,
    o;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (s = !0), (o = a);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var rk = {
  updateSize: Kb,
  updateSlides: Yb,
  updateAutoHeight: Xb,
  updateSlidesOffset: qb,
  updateSlidesProgress: Qb,
  updateProgress: Jb,
  updateSlidesClasses: Zb,
  updateActiveIndex: tk,
  updateClickedSlide: nk,
};
function ik(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = _b(s, e);
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function sk(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: o } = n;
  let a = 0,
    l = 0;
  const c = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (l = e),
    i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -l)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (l -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${a}px, ${l}px, ${c}px)`));
  let u;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (u = 0) : (u = (e - n.minTranslate()) / d),
    u !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function ok() {
  return -this.snapGrid[0];
}
function ak() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function lk(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: o, wrapperEl: a } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const l = s.minTranslate(),
    c = s.maxTranslate();
  let u;
  if (
    (r && e > l ? (u = l) : r && e < c ? (u = c) : (u = e),
    s.updateProgress(u),
    o.cssMode)
  ) {
    const d = s.isHorizontal();
    if (t === 0) a[d ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!s.support.smoothScroll)
        return (
          s1({ swiper: s, targetPosition: -u, side: d ? "left" : "top" }), !0
        );
      a.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(u),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(u),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (p) {
              !s ||
                s.destroyed ||
                (p.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var uk = {
  getTranslate: ik,
  setTranslate: sk,
  minTranslate: ok,
  maxTranslate: ak,
  translateTo: lk,
};
function ck(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function l1(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: o } = t;
  let a = r;
  if (
    (a || (s > o ? (a = "next") : s < o ? (a = "prev") : (a = "reset")),
    t.emit(`transition${i}`),
    n && s !== o)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function dk(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    l1({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function fk(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      l1({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var pk = { setTransition: ck, transitionStart: dk, transitionEnd: fk };
function hk(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: p,
    wrapperEl: h,
    enabled: v,
  } = s;
  if (
    (!v && !r && !i) ||
    s.destroyed ||
    (s.animating && a.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const x = Math.min(s.params.slidesPerGroupSkip, o);
  let j = x + Math.floor((o - x) / s.params.slidesPerGroup);
  j >= l.length && (j = l.length - 1);
  const m = -l[j];
  if (a.normalizeSlideIndex)
    for (let g = 0; g < c.length; g += 1) {
      const S = -Math.floor(m * 100),
        T = Math.floor(c[g] * 100),
        k = Math.floor(c[g + 1] * 100);
      typeof c[g + 1] < "u"
        ? S >= T && S < k - (k - T) / 2
          ? (o = g)
          : S >= T && S < k && (o = g + 1)
        : S >= T && (o = g);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (p
        ? m > s.translate && m > s.minTranslate()
        : m < s.translate && m < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        m > s.translate &&
        m > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (u || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(m);
  let y;
  if (
    (o > d ? (y = "next") : o < d ? (y = "prev") : (y = "reset"),
    (p && -m === s.translate) || (!p && m === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== "slide" && s.setTranslate(m),
      y !== "reset" && (s.transitionStart(n, y), s.transitionEnd(n, y)),
      !1
    );
  if (a.cssMode) {
    const g = s.isHorizontal(),
      S = p ? m : -m;
    if (t === 0) {
      const T = s.virtual && s.params.virtual.enabled;
      T &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        T && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[g ? "scrollLeft" : "scrollTop"] = S;
            }))
          : (h[g ? "scrollLeft" : "scrollTop"] = S),
        T &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          s1({ swiper: s, targetPosition: S, side: g ? "left" : "top" }), !0
        );
      h.scrollTo({ [g ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(m),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, y),
    t === 0
      ? s.transitionEnd(n, y)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (S) {
            !s ||
              s.destroyed ||
              (S.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, y)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function mk(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const p = o * i.params.grid.rows;
        a = i.slides.filter(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === p
        )[0].column;
      } else a = i.getSlideIndexByData(o);
      const l = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: c } = i.params;
      let u = i.params.slidesPerView;
      u === "auto"
        ? (u = i.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          c && u % 2 === 0 && (u = u + 1));
      let d = l - a < u;
      if (
        (c && (d = d || a < Math.ceil(u / 2)),
        r && c && i.params.slidesPerView !== "auto" && !s && (d = !1),
        d)
      ) {
        const p = c
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? a + 1 : a - l + 1,
          slideRealIndex: p === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const p = o * i.params.grid.rows;
        o = i.slides.filter(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === p
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function gk(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: o } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : a,
    c = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !c && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + l, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + l, e, t, n);
}
function vk(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: a,
      enabled: l,
      animating: c,
    } = r;
  if (!l || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const u = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !u && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = a ? r.translate : -r.translate;
  function p(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const h = p(d),
    v = s.map((m) => p(m));
  let x = s[v.indexOf(h) - 1];
  if (typeof x > "u" && i.cssMode) {
    let m;
    s.forEach((y, g) => {
      h >= y && (m = g);
    }),
      typeof m < "u" && (x = s[m > 0 ? m - 1 : m]);
  }
  let j = 0;
  if (
    (typeof x < "u" &&
      ((j = o.indexOf(x)),
      j < 0 && (j = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((j = j - r.slidesPerViewDynamic("previous", !0) + 1),
        (j = Math.max(j, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const m =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(m, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(j, e, t, n);
      }),
      !0
    );
  return r.slideTo(j, e, t, n);
}
function yk(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function xk(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s),
    a = o + Math.floor((s - o) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[a]) {
    const c = i.snapGrid[a],
      u = i.snapGrid[a + 1];
    l - c > (u - c) * r && (s += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[a - 1],
      u = i.snapGrid[a];
    l - c <= (u - c) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function wk() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              tn(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            jc(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            tn(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
          )),
          jc(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var Sk = {
  slideTo: hk,
  slideToLoop: mk,
  slideNext: gk,
  slidePrev: vk,
  slideReset: yk,
  slideToClosest: xk,
  slideToClickedSlide: wk,
};
function jk(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      tn(r, `.${n.slideClass}, swiper-slide`).forEach((d, p) => {
        d.setAttribute("data-swiper-slide-index", p);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (s ? n.grid.rows : 1),
    a = t.slides.length % o !== 0,
    l = s && t.slides.length % n.grid.rows !== 0,
    c = (u) => {
      for (let d = 0; d < u; d += 1) {
        const p = t.isElement
          ? Ec("swiper-slide", [n.slideBlankClass])
          : Ec("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(p);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const u = o - (t.slides.length % o);
      c(u), t.recalcSlides(), t.updateSlides();
    } else
      wa(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const u = n.grid.rows - (t.slides.length % n.grid.rows);
      c(u), t.recalcSlides(), t.updateSlides();
    } else
      wa(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function Ek(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const l = this;
  if (!l.params.loop) return;
  l.emit("beforeLoopFix");
  const {
      slides: c,
      allowSlidePrev: u,
      allowSlideNext: d,
      slidesEl: p,
      params: h,
    } = l,
    { centeredSlides: v } = h;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && h.virtual.enabled)
  ) {
    n &&
      (!h.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && l.snapIndex < h.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = u),
      (l.allowSlideNext = d),
      l.emit("loopFix");
    return;
  }
  let x = h.slidesPerView;
  x === "auto"
    ? (x = l.slidesPerViewDynamic())
    : ((x = Math.ceil(parseFloat(h.slidesPerView, 10))),
      v && x % 2 === 0 && (x = x + 1));
  const j = h.slidesPerGroupAuto ? x : h.slidesPerGroup;
  let m = j;
  m % j !== 0 && (m += j - (m % j)),
    (m += h.loopAdditionalSlides),
    (l.loopedSlides = m);
  const y = l.grid && h.grid && h.grid.rows > 1;
  c.length < x + m
    ? wa(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : y &&
      h.grid.fill === "row" &&
      wa(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const g = [],
    S = [];
  let T = l.activeIndex;
  typeof s > "u"
    ? (s = l.getSlideIndex(
        c.filter((D) => D.classList.contains(h.slideActiveClass))[0]
      ))
    : (T = s);
  const k = r === "next" || !r,
    w = r === "prev" || !r;
  let P = 0,
    R = 0;
  const C = y ? Math.ceil(c.length / h.grid.rows) : c.length,
    O = (y ? c[s].column : s) + (v && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (O < m) {
    P = Math.max(m - O, j);
    for (let D = 0; D < m - O; D += 1) {
      const W = D - Math.floor(D / C) * C;
      if (y) {
        const K = C - W - 1;
        for (let se = c.length - 1; se >= 0; se -= 1)
          c[se].column === K && g.push(se);
      } else g.push(C - W - 1);
    }
  } else if (O + x > C - m) {
    R = Math.max(O - (C - m * 2), j);
    for (let D = 0; D < R; D += 1) {
      const W = D - Math.floor(D / C) * C;
      y
        ? c.forEach((K, se) => {
            K.column === W && S.push(se);
          })
        : S.push(W);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    w &&
      g.forEach((D) => {
        (c[D].swiperLoopMoveDOM = !0),
          p.prepend(c[D]),
          (c[D].swiperLoopMoveDOM = !1);
      }),
    k &&
      S.forEach((D) => {
        (c[D].swiperLoopMoveDOM = !0),
          p.append(c[D]),
          (c[D].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    h.slidesPerView === "auto"
      ? l.updateSlides()
      : y &&
        ((g.length > 0 && w) || (S.length > 0 && k)) &&
        l.slides.forEach((D, W) => {
          l.grid.updateSlide(W, D, l.slides);
        }),
    h.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (g.length > 0 && w) {
      if (typeof t > "u") {
        const D = l.slidesGrid[T],
          K = l.slidesGrid[T + P] - D;
        a
          ? l.setTranslate(l.translate - K)
          : (l.slideTo(T + Math.ceil(P), 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - K),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - K)));
      } else if (i) {
        const D = y ? g.length / h.grid.rows : g.length;
        l.slideTo(l.activeIndex + D, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate);
      }
    } else if (S.length > 0 && k)
      if (typeof t > "u") {
        const D = l.slidesGrid[T],
          K = l.slidesGrid[T - R] - D;
        a
          ? l.setTranslate(l.translate - K)
          : (l.slideTo(T - R, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - K),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - K)));
      } else {
        const D = y ? S.length / h.grid.rows : S.length;
        l.slideTo(l.activeIndex - D, 0, !1, !0);
      }
  }
  if (
    ((l.allowSlidePrev = u),
    (l.allowSlideNext = d),
    l.controller && l.controller.control && !o)
  ) {
    const D = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((W) => {
          !W.destroyed &&
            W.params.loop &&
            W.loopFix({
              ...D,
              slideTo: W.params.slidesPerView === h.slidesPerView ? n : !1,
            });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...D,
          slideTo:
            l.controller.control.params.slidesPerView === h.slidesPerView
              ? n
              : !1,
        });
  }
  l.emit("loopFix");
}
function Tk() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Fk = { loopCreate: jk, loopFix: Ek, loopDestroy: Tk };
function Pk(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function Ck() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var bk = { setGrabCursor: Pk, unsetGrabCursor: Ck };
function kk(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === ln() || r === gt()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Nm(e, t, n) {
  const r = gt(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return s && (n <= o || n >= r.innerWidth - o)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function Nk(e) {
  const t = this,
    n = ln();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Nm(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: o, enabled: a } = t;
  if (
    !a ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let l = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(l)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "",
    u = r.composedPath ? r.composedPath() : r.path;
  c && r.target && r.target.shadowRoot && u && (l = u[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    p = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (p ? kk(d, l) : l.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const h = o.currentX,
    v = o.currentY;
  if (!Nm(t, r, h)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = h),
    (o.startY = v),
    (i.touchStartTime = xa()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let x = !0;
  l.matches(i.focusableElements) &&
    ((x = !1), l.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== l &&
      n.activeElement.blur();
  const j = x && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || j) &&
    !l.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function Rk(e) {
  const t = ln(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: o, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let l = e;
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" &&
      (r.touchId !== null || l.pointerId !== r.pointerId))
  )
    return;
  let c;
  if (l.type === "touchmove") {
    if (
      ((c = [...l.changedTouches].filter((k) => k.identifier === r.touchId)[0]),
      !c || c.identifier !== r.touchId)
    )
      return;
  } else c = l;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
    return;
  }
  const u = c.pageX,
    d = c.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = u), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: u, startY: d, currentX: u, currentY: d }),
        (r.touchStartTime = xa()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (u < s.startX && n.translate <= n.maxTranslate()) ||
      (u > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    l.target === t.activeElement &&
    l.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", l),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = u),
    (s.currentY = d);
  const p = s.currentX - s.startX,
    h = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let k;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : p * p + h * h >= 25 &&
        ((k = (Math.atan2(Math.abs(h), Math.abs(p)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? k > i.touchAngle
          : 90 - k > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", l),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (l.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let v = n.isHorizontal() ? p : h,
    x = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((v = Math.abs(v) * (o ? 1 : -1)), (x = Math.abs(x) * (o ? 1 : -1))),
    (s.diff = v),
    (v *= i.touchRatio),
    o && ((v = -v), (x = -x));
  const j = n.touchesDirection;
  (n.swipeDirection = v > 0 ? "prev" : "next"),
    (n.touchesDirection = x > 0 ? "prev" : "next");
  const m = n.params.loop && !i.cssMode,
    y =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (m && y && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const k = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(k);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", l);
  }
  let g;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      j !== n.touchesDirection &&
      m &&
      y &&
      Math.abs(v) >= 1)
  ) {
    Object.assign(s, {
      startX: u,
      startY: d,
      currentX: u,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", l),
    (r.isMoved = !0),
    (r.currentTranslate = v + r.startTranslate);
  let S = !0,
    T = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (T = 0),
    v > 0
      ? (m &&
          y &&
          !g &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((S = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + v) ** T)))
      : v < 0 &&
        (m &&
          y &&
          !g &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((S = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - v) ** T))),
    S && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(v) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Ak(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((T) => T.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: a,
    rtlTranslate: l,
    slidesGrid: c,
    enabled: u,
  } = t;
  if (!u || (!o.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = xa(),
    p = d - n.touchStartTime;
  if (t.allowClick) {
    const T = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((T && T[0]) || r.target, T),
      t.emit("tap click", r),
      p < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = xa()),
    jc(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let h;
  if (
    (o.followFinger
      ? (h = l ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  const v = h >= -t.maxTranslate() && !t.params.loop;
  let x = 0,
    j = t.slidesSizesGrid[0];
  for (
    let T = 0;
    T < c.length;
    T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const k = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof c[T + k] < "u"
      ? (v || (h >= c[T] && h < c[T + k])) && ((x = T), (j = c[T + k] - c[T]))
      : (v || h >= c[T]) && ((x = T), (j = c[c.length - 1] - c[c.length - 2]));
  }
  let m = null,
    y = null;
  o.rewind &&
    (t.isBeginning
      ? (y =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (m = 0));
  const g = (h - c[x]) / j,
    S = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (p > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (g >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? m : x + S)
        : t.slideTo(x)),
      t.swipeDirection === "prev" &&
        (g > 1 - o.longSwipesRatio
          ? t.slideTo(x + S)
          : y !== null && g < 0 && Math.abs(g) > o.longSwipesRatio
          ? t.slideTo(y)
          : t.slideTo(x));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(x + S)
        : t.slideTo(x)
      : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : x + S),
        t.swipeDirection === "prev" && t.slideTo(y !== null ? y : x));
  }
}
function Rm() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function Mk(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Lk() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function _k(e) {
  const t = this;
  _o(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function Ik() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const u1 = (e, t) => {
  const n = ln(),
    { params: r, el: i, wrapperEl: s, device: o } = e,
    a = !!r.nested,
    l = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  n[l]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[l]("touchstart", e.onTouchStart, { passive: !1 }),
    i[l]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[l]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[l]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[l]("touchend", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[l]("click", e.onClick, !0),
    r.cssMode && s[l]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[c](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Rm,
          !0
        )
      : e[c]("observerUpdate", Rm, !0),
    i[l]("load", e.onLoad, { capture: !0 });
};
function Dk() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = Nk.bind(e)),
    (e.onTouchMove = Rk.bind(e)),
    (e.onTouchEnd = Ak.bind(e)),
    (e.onDocumentTouchStart = Ik.bind(e)),
    t.cssMode && (e.onScroll = Lk.bind(e)),
    (e.onClick = Mk.bind(e)),
    (e.onLoad = _k.bind(e)),
    u1(e, "on");
}
function Uk() {
  u1(this, "off");
}
var Ok = { attachEvents: Dk, detachEvents: Uk };
const Am = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Bk() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const l = (o in s ? s[o] : void 0) || e.originalParams,
    c = Am(e, r),
    u = Am(e, l),
    d = e.params.grabCursor,
    p = l.grabCursor,
    h = r.enabled;
  c && !u
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      u &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") ||
        (!l.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !p ? e.unsetGrabCursor() : !d && p && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((g) => {
      if (typeof l[g] > "u") return;
      const S = r[g] && r[g].enabled,
        T = l[g] && l[g].enabled;
      S && !T && e[g].disable(), !S && T && e[g].enable();
    });
  const v = l.direction && l.direction !== r.direction,
    x = r.loop && (l.slidesPerView !== r.slidesPerView || v),
    j = r.loop;
  v && n && e.changeDirection(), ut(e.params, l);
  const m = e.params.enabled,
    y = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    h && !m ? e.disable() : !h && m && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", l),
    n &&
      (x
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !j && y
        ? (e.loopCreate(t), e.updateSlides())
        : j && !y && e.loopDestroy()),
    e.emit("breakpoint", l);
}
function zk(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = gt(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: s * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: c } = o[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = l)
      : c <= n.clientWidth && (r = l);
  }
  return r || "max";
}
var Vk = { setBreakpoint: Bk, getBreakpoint: zk };
function Hk(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function $k() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    o = Hk(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function Gk() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var Wk = { addClasses: $k, removeClasses: Gk };
function Kk() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Yk = { checkOverflow: Kk },
  Fc = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Xk(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      ut(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      ut(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      ut(t, r);
  };
}
const eu = {
    eventsEmitter: Wb,
    update: rk,
    translate: uk,
    transition: pk,
    slide: Sk,
    loop: Fk,
    grabCursor: bk,
    events: Ok,
    breakpoints: Vk,
    checkOverflow: Yk,
    classes: Wk,
  },
  tu = {};
let hf = class Xt {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = ut({}, n)),
      t && !n.el && (n.el = t);
    const o = ln();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const u = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const p = ut({}, n, { el: d });
          u.push(new Xt(p));
        }),
        u
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = o1()),
      (a.device = a1({ userAgent: n.userAgent })),
      (a.browser = Hb()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const l = {};
    a.modules.forEach((u) => {
      u({
        params: n,
        swiper: a,
        extendParams: Xk(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const c = ut({}, Fc, l);
    return (
      (a.params = ut({}, c, tu, n)),
      (a.originalParams = ut({}, a.params)),
      (a.passedParams = ut({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((u) => {
          a.on(u, a.params.on[u]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = tn(n, `.${r.slideClass}, swiper-slide`),
      s = Cm(i[0]);
    return Cm(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = tn(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: c,
      } = r;
    let u = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[c] ? Math.ceil(s[c].swiperSlideSize) : 0,
        p;
      for (let h = c + 1; h < s.length; h += 1)
        s[h] &&
          !p &&
          ((d += Math.ceil(s[h].swiperSlideSize)), (u += 1), d > l && (p = !0));
      for (let h = c - 1; h >= 0; h -= 1)
        s[h] &&
          !p &&
          ((d += s[h].swiperSlideSize), (u += 1), d > l && (p = !0));
    } else if (t === "current")
      for (let d = c + 1; d < s.length; d += 1)
        (n ? o[d] + a[d] - o[c] < l : o[d] - o[c] < l) && (u += 1);
    else for (let d = c - 1; d >= 0; d -= 1) o[c] - o[d] < l && (u += 1);
    return u;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && _o(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(o.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : tn(r, i())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = Ec("div", n.params.wrapperClass)),
        r.append(o),
        tn(r, `.${n.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || bn(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || bn(r, "direction") === "rtl"),
        wrongRTL: bn(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? _o(n, s)
          : s.addEventListener("load", (o) => {
              _o(n, o.target);
            });
      }),
      Tc(n),
      (n.initialized = !0),
      Tc(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: o, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s.removeAttribute("style"),
          o.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l);
        }),
        t !== !1 && ((r.el.swiper = null), Mb(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ut(tu, t);
  }
  static get extendedDefaults() {
    return tu;
  }
  static get defaults() {
    return Fc;
  }
  static installModule(t) {
    Xt.prototype.__modules__ || (Xt.prototype.__modules__ = []);
    const n = Xt.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Xt.installModule(n)), Xt)
      : (Xt.installModule(t), Xt);
  }
};
Object.keys(eu).forEach((e) => {
  Object.keys(eu[e]).forEach((t) => {
    hf.prototype[t] = eu[e][t];
  });
});
hf.use([$b, Gb]);
const c1 = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function wr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function ei(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : wr(t[r]) && wr(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : ei(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function d1(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function f1(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function p1(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function h1(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function qk(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Qk(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l,
  } = e;
  const c = i.filter(
      (R) => R !== "children" && R !== "direction" && R !== "wrapperClass"
    ),
    {
      params: u,
      pagination: d,
      navigation: p,
      scrollbar: h,
      virtual: v,
      thumbs: x,
    } = t;
  let j, m, y, g, S, T, k, w;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (j = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      u.controller &&
      !u.controller.control &&
      (m = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || l) &&
      (u.pagination || u.pagination === !1) &&
      d &&
      !d.el &&
      (y = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (u.scrollbar || u.scrollbar === !1) &&
      h &&
      !h.el &&
      (g = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || s) &&
      (u.navigation || u.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (S = !0);
  const P = (R) => {
    t[R] &&
      (t[R].destroy(),
      R === "navigation"
        ? (t.isElement && (t[R].prevEl.remove(), t[R].nextEl.remove()),
          (u[R].prevEl = void 0),
          (u[R].nextEl = void 0),
          (t[R].prevEl = void 0),
          (t[R].nextEl = void 0))
        : (t.isElement && t[R].el.remove(),
          (u[R].el = void 0),
          (t[R].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (u.loop && !r.loop ? (T = !0) : !u.loop && r.loop ? (k = !0) : (w = !0)),
    c.forEach((R) => {
      if (wr(u[R]) && wr(r[R]))
        Object.assign(u[R], r[R]),
          (R === "navigation" || R === "pagination" || R === "scrollbar") &&
            "enabled" in r[R] &&
            !r[R].enabled &&
            P(R);
      else {
        const C = r[R];
        (C === !0 || C === !1) &&
        (R === "navigation" || R === "pagination" || R === "scrollbar")
          ? C === !1 && P(R)
          : (u[R] = r[R]);
      }
    }),
    c.includes("controller") &&
      !m &&
      t.controller &&
      t.controller.control &&
      u.controller &&
      u.controller.control &&
      (t.controller.control = u.controller.control),
    i.includes("children") && n && v && u.virtual.enabled
      ? ((v.slides = n), v.update(!0))
      : i.includes("virtual") &&
        v &&
        u.virtual.enabled &&
        (n && (v.slides = n), v.update(!0)),
    i.includes("children") && n && u.loop && (w = !0),
    j && x.init() && x.update(!0),
    m && (t.controller.control = u.controller.control),
    y &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-pagination"),
        l.part.add("pagination"),
        t.el.appendChild(l)),
      l && (u.pagination.el = l),
      d.init(),
      d.render(),
      d.update()),
    g &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (u.scrollbar.el = a),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    S &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      s && (u.navigation.nextEl = s),
      o && (u.navigation.prevEl = o),
      p.init(),
      p.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (T || w) && t.loopDestroy(),
    (k || w) && t.loopCreate(),
    t.update();
}
function Jk(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  ei(n, Fc), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    o = c1.map((l) => l.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((l) => {
      typeof e[l] > "u" ||
        (o.indexOf(l) >= 0
          ? wr(e[l])
            ? ((n[l] = {}), (i[l] = {}), ei(n[l], e[l]), ei(i[l], e[l]))
            : ((n[l] = e[l]), (i[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function"
          ? t
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (s[l] = e[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function Zk(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: o,
    swiper: a,
  } = e;
  d1(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    f1(t) &&
      s &&
      ((a.params.pagination.el = s), (a.originalParams.pagination.el = s)),
    p1(t) &&
      o &&
      ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(n);
}
function eN(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const o = (l) => {
    s.indexOf(l) < 0 && s.push(l);
  };
  if (n && r) {
    const l = r.map(i),
      c = n.map(i);
    l.join("") !== c.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    c1
      .filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in e && l in t)
          if (wr(e[l]) && wr(t[l])) {
            const c = Object.keys(e[l]),
              u = Object.keys(t[l]);
            c.length !== u.length
              ? o(l)
              : (c.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }),
                u.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }));
          } else e[l] !== t[l] && o(l);
      }),
    s
  );
}
const tN = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Sa() {
  return (
    (Sa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sa.apply(this, arguments)
  );
}
function m1(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function g1(e) {
  const t = [];
  return (
    ae.Children.toArray(e).forEach((n) => {
      m1(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          g1(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function nN(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    ae.Children.toArray(e).forEach((r) => {
      if (m1(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = g1(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function rN(e, t, n) {
  if (!n) return null;
  const r = (u) => {
      let d = u;
      return (
        u < 0 ? (d = t.length + u) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    a = e.params.loop ? -t.length : 0,
    l = e.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let u = a; u < l; u += 1) u >= s && u <= o && c.push(t[r(u)]);
  return c.map((u, d) =>
    ae.cloneElement(u, {
      swiper: e,
      style: i,
      key: u.props.virtualIndex || u.key || `slide-${d}`,
    })
  );
}
function is(e, t) {
  return typeof window > "u" ? E.useEffect(e, t) : E.useLayoutEffect(e, t);
}
const Mm = E.createContext(null),
  iN = E.createContext(null),
  v1 = E.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: o,
        ...a
      } = e === void 0 ? {} : e,
      l = !1;
    const [c, u] = E.useState("swiper"),
      [d, p] = E.useState(null),
      [h, v] = E.useState(!1),
      x = E.useRef(!1),
      j = E.useRef(null),
      m = E.useRef(null),
      y = E.useRef(null),
      g = E.useRef(null),
      S = E.useRef(null),
      T = E.useRef(null),
      k = E.useRef(null),
      w = E.useRef(null),
      { params: P, passedParams: R, rest: C, events: L } = Jk(a),
      { slides: O, slots: D } = nN(s),
      W = () => {
        v(!h);
      };
    Object.assign(P.on, {
      _containerClasses(U, B) {
        u(B);
      },
    });
    const K = () => {
      Object.assign(P.on, L), (l = !0);
      const U = { ...P };
      if (
        (delete U.wrapperClass,
        (m.current = new hf(U)),
        m.current.virtual && m.current.params.virtual.enabled)
      ) {
        m.current.virtual.slides = O;
        const B = {
          cache: !1,
          slides: O,
          renderExternal: p,
          renderExternalUpdate: !1,
        };
        ei(m.current.params.virtual, B),
          ei(m.current.originalParams.virtual, B);
      }
    };
    j.current || K(), m.current && m.current.on("_beforeBreakpoint", W);
    const se = () => {
        l ||
          !L ||
          !m.current ||
          Object.keys(L).forEach((U) => {
            m.current.on(U, L[U]);
          });
      },
      be = () => {
        !L ||
          !m.current ||
          Object.keys(L).forEach((U) => {
            m.current.off(U, L[U]);
          });
      };
    E.useEffect(() => () => {
      m.current && m.current.off("_beforeBreakpoint", W);
    }),
      E.useEffect(() => {
        !x.current &&
          m.current &&
          (m.current.emitSlidesClasses(), (x.current = !0));
      }),
      is(() => {
        if ((t && (t.current = j.current), !!j.current))
          return (
            m.current.destroyed && K(),
            Zk(
              {
                el: j.current,
                nextEl: S.current,
                prevEl: T.current,
                paginationEl: k.current,
                scrollbarEl: w.current,
                swiper: m.current,
              },
              P
            ),
            o && !m.current.destroyed && o(m.current),
            () => {
              m.current && !m.current.destroyed && m.current.destroy(!0, !1);
            }
          );
      }, []),
      is(() => {
        se();
        const U = eN(R, y.current, O, g.current, (B) => B.key);
        return (
          (y.current = R),
          (g.current = O),
          U.length &&
            m.current &&
            !m.current.destroyed &&
            Qk({
              swiper: m.current,
              slides: O,
              passedParams: R,
              changedParams: U,
              nextEl: S.current,
              prevEl: T.current,
              scrollbarEl: w.current,
              paginationEl: k.current,
            }),
          () => {
            be();
          }
        );
      }),
      is(() => {
        tN(m.current);
      }, [d]);
    function A() {
      return P.virtual
        ? rN(m.current, O, d)
        : O.map((U, B) =>
            ae.cloneElement(U, { swiper: m.current, swiperSlideIndex: B })
          );
    }
    return ae.createElement(
      r,
      Sa({ ref: j, className: h1(`${c}${n ? ` ${n}` : ""}`) }, C),
      ae.createElement(
        iN.Provider,
        { value: m.current },
        D["container-start"],
        ae.createElement(
          i,
          { className: qk(P.wrapperClass) },
          D["wrapper-start"],
          A(),
          D["wrapper-end"]
        ),
        d1(P) &&
          ae.createElement(
            ae.Fragment,
            null,
            ae.createElement("div", {
              ref: T,
              className: "swiper-button-prev",
            }),
            ae.createElement("div", { ref: S, className: "swiper-button-next" })
          ),
        p1(P) &&
          ae.createElement("div", { ref: w, className: "swiper-scrollbar" }),
        f1(P) &&
          ae.createElement("div", { ref: k, className: "swiper-pagination" }),
        D["container-end"]
      )
    );
  });
v1.displayName = "Swiper";
const y1 = E.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: o,
    lazy: a,
    virtualIndex: l,
    swiperSlideIndex: c,
    ...u
  } = e === void 0 ? {} : e;
  const d = E.useRef(null),
    [p, h] = E.useState("swiper-slide"),
    [v, x] = E.useState(!1);
  function j(S, T, k) {
    T === d.current && h(k);
  }
  is(() => {
    if (
      (typeof c < "u" && (d.current.swiperSlideIndex = c),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        p !== "swiper-slide" && h("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", j),
        () => {
          s && s.off("_slideClass", j);
        }
      );
    }
  }),
    is(() => {
      s && d.current && !s.destroyed && h(s.getSlideClasses(d.current));
    }, [s]);
  const m = {
      isActive: p.indexOf("swiper-slide-active") >= 0,
      isVisible: p.indexOf("swiper-slide-visible") >= 0,
      isPrev: p.indexOf("swiper-slide-prev") >= 0,
      isNext: p.indexOf("swiper-slide-next") >= 0,
    },
    y = () => (typeof r == "function" ? r(m) : r),
    g = () => {
      x(!0);
    };
  return ae.createElement(
    n,
    Sa(
      {
        ref: d,
        className: h1(`${p}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": l,
        onLoad: g,
      },
      u
    ),
    o &&
      ae.createElement(
        Mm.Provider,
        { value: m },
        ae.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          y(),
          a &&
            !v &&
            ae.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      ae.createElement(
        Mm.Provider,
        { value: m },
        y(),
        a &&
          !v &&
          ae.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
y1.displayName = "SwiperSlide";
function x1({ name: e, img: t, review: n, title: r }) {
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className:
        "max-w-[305px] md:max-w-[305px] lg:max-w-[100%] mx-auto relative flex flex-col   bg-white review-card w-full",
      children: [
        f.jsxs("div", {
          className:
            "lg:h-[15.313vw] w-full h-[197px] relative overflow-hidden",
          children: [
            f.jsx("div", {
              className: "absolute top-0 left-0 w-full h-full reviews-bg",
              style: { background: `url("${t}")` },
            }),
            f.jsx("img", {
              src: t,
              alt: "",
              className: "h-full mx-auto z-10 relative",
            }),
          ],
        }),
        f.jsxs("div", {
          className:
            "pb-[50px] pt-[39px] px-[10px] text-[16px] leading-[1.8] lg:text-[1vw]",
          children: [
            f.jsx("p", { className: " w-full text-center ", children: n }),
            f.jsxs("div", {
              className: "w-full text-center mt-[53px] space-y-[8px]",
              children: [
                f.jsx("h1", {
                  className: "text-[20px] font-Bold text-heavyBlue",
                  children: e,
                }),
                f.jsx("p", { children: r }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function sN(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: s } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    a,
    l = s && s.autoplay ? s.autoplay.delay : 3e3,
    c = s && s.autoplay ? s.autoplay.delay : 3e3,
    u,
    d = new Date().getTime(),
    p,
    h,
    v,
    x,
    j,
    m,
    y;
  function g(A) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (A.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", g),
        !(y || (A.detail && A.detail.bySwiperTouchMove)) && C()));
  }
  const S = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (p = !0) : p && ((c = u), (p = !1));
      const A = t.autoplay.paused ? u : d + c - new Date().getTime();
      (t.autoplay.timeLeft = A),
        i("autoplayTimeLeft", A, A / l),
        (a = requestAnimationFrame(() => {
          S();
        }));
    },
    T = () => {
      let A;
      return (
        t.virtual && t.params.virtual.enabled
          ? (A = t.slides.filter((B) =>
              B.classList.contains("swiper-slide-active")
            )[0])
          : (A = t.slides[t.activeIndex]),
        A ? parseInt(A.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    k = (A) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(a), S();
      let U = typeof A > "u" ? t.params.autoplay.delay : A;
      (l = t.params.autoplay.delay), (c = t.params.autoplay.delay);
      const B = T();
      !Number.isNaN(B) &&
        B > 0 &&
        typeof A > "u" &&
        ((U = B), (l = B), (c = B)),
        (u = U);
      const te = t.params.speed,
        re = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(te, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, te, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(te, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, te, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                k();
              })));
        };
      return (
        U > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              re();
            }, U)))
          : requestAnimationFrame(() => {
              re();
            }),
        U
      );
    },
    w = () => {
      (d = new Date().getTime()),
        (t.autoplay.running = !0),
        k(),
        i("autoplayStart");
    },
    P = () => {
      (t.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(a),
        i("autoplayStop");
    },
    R = (A, U) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(o), A || (m = !0);
      const B = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", g)
            : C();
      };
      if (((t.autoplay.paused = !0), U)) {
        j && (u = t.params.autoplay.delay), (j = !1), B();
        return;
      }
      (u = (u || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && u < 0 && !t.params.loop) && (u < 0 && (u = 0), B());
    },
    C = () => {
      (t.isEnd && u < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        m ? ((m = !1), k(u)) : k(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    L = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const A = ln();
      A.visibilityState === "hidden" && ((m = !0), R(!0)),
        A.visibilityState === "visible" && C();
    },
    O = (A) => {
      A.pointerType === "mouse" &&
        ((m = !0), (y = !0), !(t.animating || t.autoplay.paused) && R(!0));
    },
    D = (A) => {
      A.pointerType === "mouse" && ((y = !1), t.autoplay.paused && C());
    },
    W = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", O),
        t.el.addEventListener("pointerleave", D));
    },
    K = () => {
      t.el.removeEventListener("pointerenter", O),
        t.el.removeEventListener("pointerleave", D);
    },
    se = () => {
      ln().addEventListener("visibilitychange", L);
    },
    be = () => {
      ln().removeEventListener("visibilitychange", L);
    };
  r("init", () => {
    t.params.autoplay.enabled && (W(), se(), w());
  }),
    r("destroy", () => {
      K(), be(), t.autoplay.running && P();
    }),
    r("_freeModeStaticRelease", () => {
      (v || m) && C();
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? P() : R(!0, !0);
    }),
    r("beforeTransitionStart", (A, U, B) => {
      t.destroyed ||
        !t.autoplay.running ||
        (B || !t.params.autoplay.disableOnInteraction ? R(!0, !0) : P());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          P();
          return;
        }
        (h = !0),
          (v = !1),
          (m = !1),
          (x = setTimeout(() => {
            (m = !0), (v = !0), R(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !h)) {
        if (
          (clearTimeout(x),
          clearTimeout(o),
          t.params.autoplay.disableOnInteraction)
        ) {
          (v = !1), (h = !1);
          return;
        }
        v && t.params.cssMode && C(), (v = !1), (h = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (j = !0);
    }),
    Object.assign(t.autoplay, { start: w, stop: P, pause: R, resume: C });
}
function oN() {
  const [e, t] = E.useState(window.innerWidth);
  E.useEffect(() => {
    const s = () => {
      t(window.innerWidth);
    };
    return (
      window.addEventListener("resize", s),
      () => {
        window.removeEventListener("resize", s);
      }
    );
  }, []);
  const n = (s) => (s >= 1024 ? 3 : s < 1024 && s >= 768 ? 2 : 1),
    [r, i] = E.useState([]);
  return (
    E.useEffect(() => {
      he.get("https://api.hassanrevel.com/api/reviews").then((s) => i(s.data));
    }, []),
    f.jsxs("div", {
      className:
        "relative w-full overflow-hidden md:max-w-[90vw] lg:max-w-[80vw] mx-auto space-y-[36px] lg:space-y-[3vw]",
      children: [
        f.jsx("h1", {
          className:
            "text-[44px] lg:text-[3vw] text-center font-Black text-heavyBlue px-[16px]",
          children: "Reviews",
        }),
        f.jsxs(v1, {
          spaceBetween: 50,
          slidesPerView: n(e),
          loop: !0,
          modules: [sN],
          autoplay: { delay: 2500, disableOnInteraction: !1 },
          className: " relative my-swiper",
          children: [
            r.map((s, o) =>
              f.jsx(
                y1,
                {
                  className: "px-[16px] select-none relative",
                  children: f.jsx(x1, {
                    name: s.name,
                    img: s.img,
                    review: s.review,
                    title: s.title,
                  }),
                },
                o
              )
            ),
            f.jsx("div", {
              className:
                "w-[20vw] h-full absolute top-0 left-[-20vw] bg-white z-30",
            }),
            f.jsx("div", {
              className:
                "w-[20vw] h-full bg-white  absolute top-0 right-[-20vw] z-30",
            }),
          ],
        }),
      ],
    })
  );
}
function aN() {
  return f.jsxs("section", {
    id: "reviews",
    className: "relative pb-[5.438vw] pt-[56px] lg:pt-[1vw] ",
    children: [
      f.jsx("div", {
        className: "w-full h-full  absolute top-0 left-0 z-10 select-none ",
        children: f.jsx("img", {
          src: "https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/homepage/testimonials-icon-overlay2.jpg",
          alt: "",
          className: "absolute bottom-0 lg:left-[-8.313vw] lg:w-[50.75vw]",
        }),
      }),
      f.jsx(oN, {}),
      f.jsx("div", {
        className:
          "w-full px-[16px] relative review-btn mt-[106px] lg:mt-[2vw]",
        children: f.jsx(Ee, {
          to: "/success",
          children: f.jsx("div", {
            className:
              "review-border duration-300 hover:bg-heavyBlue hover:text-white font-SemiBold hove uppercase text-[14px] py-[22px] text-center w-full sm:max-w-[300px] lg:max-w-[20.75vw] xl:max-w-[14.75vw] mx-auto",
            style: { zIndex: "30 !important" },
            children: "Read Success stories",
          }),
        }),
      }),
    ],
  });
}
const lN = [
  {
    img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/linkedin.png",
    tag: "@hassanrevel",
    name: "Linkedin",
    text: "Connect with me for thoughts on the AI market and latest AI insights ",
    link: "https://www.linkedin.com/in/hassanrevel/",
  },
  {
    img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/youtube.png",
    tag: "@hassanrevel",
    name: "Youtube",
    text: "Subscribe For behind the scenes vlogs for my real Life.",
    link: "https://www.youtube.com/@hassanrevel",
  },
  {
    img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/instagram.png",
    tag: "@hassanrevela",
    name: "Instagram",
    text: "Every day of my life is on here. Ride along with me while I do what I do.",
    link: "https://www.instagram.com/hassanrevela",
  },
  {
    img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/facebook.png",
    tag: "@hassanrevela",
    name: "Facebook",
    text: "Follow me here for events, news, launchers and rambling inspiration.",
    link: "https://www.facebook.com/hassanrevela",
  },
  {
    img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/twitter.png",
    tag: "@hassanrevel",
    name: "Twitter",
    text: "Broadcast straight from my brain, hot takes and tidbits of wisdom.",
    link: "https://twitter.com/hassanrevel",
  },
];
function uN() {
  const e = [
      "bg-[#0077b5]",
      "bg-[#cd201f]",
      "insta-bg",
      "bg-[#4d6baa]",
      " bg-[#4fc6f8]",
    ],
    t = [
      "lg:pt-[9.875vw]",
      "lg:pt-[3.975vw]",
      "",
      "lg:pt-[3.975vw]",
      "lg:pt-[9.875vw]",
    ];
  return f.jsx("section", {
    id: "socialGrid",
    className: "",
    children: f.jsx("div", {
      className:
        "space-y-20  text-black max-w-[280px] mx-auto lg:flex lg:max-w-[92.375vw] lg:space-y-0 lg:space-x-[1vw]",
      children: lN.map((n, r) =>
        f.jsx(
          "div",
          {
            className: `lg:w-full  ${t[r]}`,
            children: f.jsx(Ee, {
              to: n.link,
              target: "_blank",
              children: f.jsxs("div", {
                className:
                  "bg-white relative flex flex-col items-center justify-start lg:w-full lg:h-[23.938vw]",
                children: [
                  f.jsx("div", {
                    className:
                      "absolute bottom-[-16px]  bg-white w-[33px] h-[33px] lg:w-[2.75vw] lg:h-[2.75vw] lg:bottom-[-1vw]  rotate-45",
                  }),
                  f.jsx("div", {
                    className:
                      " flex items-center justify-center h-[87px] w-full lg:h-[5.438vw] " +
                      e[r],
                    children: f.jsx("img", {
                      src: n.img,
                      alt: "",
                      className: "w-[23px] lg:w-[1.375vw]",
                    }),
                  }),
                  f.jsxs("div", {
                    className: "text-center pb-[55px] lg:pb-[2vw]",
                    children: [
                      f.jsx("p", {
                        className:
                          "text-[16px] mt-[19px] lg:mt-[1vw] text-[#767676] lg:text-[1vw]",
                        children: n.tag,
                      }),
                      f.jsx("p", {
                        className:
                          "text-[#1c1c1f] font-Bold text-[37px] mt-[34px] lg:mt-[1vw] lg:text-[2.938vw]",
                        children: n.name,
                      }),
                      f.jsx("p", {
                        className:
                          "max-w-[200px] pt-[29px] mx-auto leading-[1.4] text-[#4c4c4c] lg:text-[0.93vw] lg:max-w-[12.313vw] lg:pt-[2vw]",
                        children: n.text,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          },
          r
        )
      ),
    }),
  });
}
function cN() {
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className: "w-full text-center space-y-[37px] ",
      children: [
        f.jsxs("h1", {
          className: "text-[48px] font-Bold leading-[1.1] lg:text-[7.063vw]",
          children: [
            "Engage ",
            f.jsx("br", {}),
            " with me ",
            f.jsx("br", {}),
            " 24/7",
          ],
        }),
        f.jsx("p", {
          className:
            "text-[18px] px-[37px] leading-[1.8] text-[#ababab] lg:max-w-[55.93vw] mx-auto lg:text-[1.125vw] lg:my-[3.438vw]",
          children:
            "If there’s anything in the world that I love the most is making AI that can change the world forever, and I’d love to share my creation with you and connect with those who’re interested in hiring, learning and seeing my creation.",
        }),
      ],
    }),
  });
}
function dN() {
  return f.jsxs("section", {
    id: "socialMedia",
    className: "bg-[#1C1C1F] text-white pt-[70px] pb-[65px] space-y-[76px]",
    children: [
      f.jsx("h1", {
        className:
          "text-[40px] font-Black px-[30px] lg:px-[3.2vw] lg:text-[3vw]",
        children: "R.",
      }),
      f.jsx(uN, {}),
      f.jsx(cN, {}),
    ],
  });
}
function fN() {
  const [e, t] = E.useState([]);
  return (
    E.useEffect(() => {
      he.get("https://api.hassanrevel.com/api/solutions/?page=1").then((n) =>
        t(n.data.results)
      );
    }),
    f.jsx("section", {
      id: "solutionSec",
      children: f.jsxs("div", {
        className:
          "px-[30px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw] space-y-[34px] lg:space-y-[5.6vw]",
        children: [
          f.jsx("h1", {
            className: "text-[44px] lg:text-[5vw] font-Black text-heavyBlue",
            children: "Solution",
          }),
          f.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5vw]",
            children: e.map((n, r) =>
              f.jsxs(
                "div",
                {
                  className: "space-y-5",
                  children: [
                    f.jsx("img", { src: n.img, alt: "" }),
                    f.jsx("h1", {
                      className:
                        "font-Bold text-[24px] lg:text-[2vw] text-darkBlue",
                      children: n.name,
                    }),
                  ],
                },
                r
              )
            ),
          }),
          f.jsx("div", {
            className: "w-full flex justify-end items-end max-w-[95vw]",
            children: f.jsx(Ee, {
              to: "/solutions",
              children: f.jsx("div", {
                className:
                  "review-border duration-300 text-heavyBlue hover:bg-heavyBlue hover:text-white font-SemiBold uppercase text-[14px] py-[22px] text-center relative z-20 w-[220px] h-[58px] bg-transparent flex items-center justify-center cursor-pointer",
                children: "View more",
              }),
            }),
          }),
        ],
      }),
    })
  );
}
function pN() {
  const { setSubsFixForm: e, setSubsForm: t } = Bt();
  return f.jsxs("section", {
    id: "Home",
    children: [
      f.jsx(Xn, {}),
      f.jsxs("div", {
        onClick: () => {
          t(!1), e(!1);
        },
        children: [
          f.jsx(Nb, {}),
          f.jsx(t2, {}),
          f.jsx(fN, {}),
          f.jsx(aN, {}),
          f.jsx(kb, {}),
          f.jsx(dN, {}),
          f.jsx(mi, {}),
        ],
      }),
      f.jsx(vi, {}),
    ],
  });
}
function hN() {
  const e =
    "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Hassan+Revel+about+page.jpg";
  return f.jsxs("section", {
    id: "heroLg",
    className: "lg:flex hidden justify-between items-end space-x-20",
    children: [
      f.jsxs("div", {
        className: "pl-[6.6vw] w-[55.18%]  h-full 2xl:-translate-y-24",
        children: [
          f.jsxs("div", {
            className: "space-y-[-20px] space-x-10",
            children: [
              f.jsx("h1", {
                className: "text-[#949494] text-[4.375vw]",
                children: "ABOUT",
              }),
              f.jsx("p", {
                className: "font-Black text-[6.375vw] text-heavyBlue",
                children: "HASSAN",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex relative space-x-[2vw] items-center",
            children: [
              f.jsx("div", {
                className: " h-[70%] border-l-[10px] border-darkBlue absolute",
              }),
              f.jsxs("div", {
                className: "space-y-4",
                children: [
                  f.jsxs("div", {
                    className:
                      "text-nowrap text-[2em] font-Bold text-Dark space-y-3 md:hidden",
                    children: [
                      f.jsx("p", { children: "About Hassan " }),
                      f.jsx("p", { children: "Revel" }),
                    ],
                  }),
                  f.jsx("div", {
                    className:
                      "text-nowrap text-[32px] font-Bold text-Dark hidden md:block",
                    children: f.jsx("p", { children: "About Hassan Revel " }),
                  }),
                  f.jsx("p", {
                    className:
                      "max-w-[90%] text-[16px] lg:text-[1vw] leading-[1.9] tracking-[0.02em]",
                    children:
                      "I’m an AI Engineer. I make AI solutions for my clients. My client involves businesses, individuals, researchers and organizations. The solutions I make are Generative AI, AI applications, Prompt Engineering, Discriminative AI, and building deploying Machine learning models to Sagemaker. Additionally I’m working on my two software products, a no code chatbot development platform AquaChat and an AI gaming character development platform Phantom. There’s nothing more than I love making fun and engaging content for all kinds of people, news, vlogs, blogs and social media post.",
                  }),
                  f.jsx("p", {
                    className: "text-[1.5em] font-Bold text-Dark ",
                    children: "Simpler, Easier and Faster, at all cost.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className: "xl:max-w-[43%] w-[100%] relative",
        children: [
          f.jsx("img", { src: e, alt: "", className: "w-full relative z-10" }),
          f.jsxs("div", {
            className: "absolute w-[90%]  -left-5 top-0",
            children: [
              f.jsx("div", {
                className: "absolute w-full h-full bg-white opacity-30",
              }),
              f.jsx("img", { src: e, alt: "", className: "w-full" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function mN() {
  return f.jsxs("section", {
    id: "hero",
    className:
      "flex flex-col lg:flex-row justify-between space-y-14 mb-32 lg:hidden",
    children: [
      f.jsx("div", {
        className: "w-full",
        children: f.jsx("img", {
          src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Hassan+Revel+about+page.jpg",
          alt: "",
          className: "w-full",
        }),
      }),
      f.jsxs("div", {
        className: "px-[26px] space-y-10",
        children: [
          f.jsxs("div", {
            className: "space-y-[-20px] space-x-10",
            children: [
              f.jsx("h1", {
                className: "text-[#949494] text-[48px]",
                children: "ABOUT",
              }),
              f.jsx("p", {
                className:
                  "font-Black text-[48px] sm:text-[65px] text-heavyBlue",
                children: "HASSAN",
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "space-y-4 border-l-[10px] border-heavyBlue px-[30px] py-[1vh]",
            children: [
              f.jsxs("div", {
                className:
                  "text-nowrap text-[32px] font-Bold text-Dark space-y-3 md:hidden",
                children: [
                  f.jsx("p", { children: "About Hassan " }),
                  f.jsx("p", { children: "Revel" }),
                ],
              }),
              f.jsx("div", {
                className:
                  "text-nowrap text-[32px] font-Bold text-Dark hidden md:block",
                children: f.jsx("p", { children: "About Hassan Revel " }),
              }),
              f.jsx("p", {
                children:
                  "I’m an AI Engineer. I make AI solutions for my clients. My client involves businesses, individuals, researchers and organizations. The solutions I make are Generative AI, AI applications, Prompt Engineering, Discriminative AI, and building deploying Machine learning models to Sagemaker. Additionally I’m working on my two software products, a no code chatbot development platform AquaChat and an AI gaming character development platform Phantom. There’s nothing more than I love making fun and engaging content for all kinds of people, news, vlogs, blogs and social media post.",
              }),
              f.jsx("p", {
                className: "text-[16px] font-Bold text-Dark ",
                children: "Simpler, Easier and Faster, at all cost.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function gN() {
  const e = [
    `I used to spend all my time watching anime, playing games
        and Basketball, as a typical highschool student. Somehow I
        found my way into programming and I started to really like. I
        picked AI cause it was according to my taste`,
    `On January 2023, I started my career in AI as a freelancer. I
        studied Data Science from Data Camp, then I specialize in
        making Machine learning and AI solutions through
        lazypgrogramer Inc. I’m activally working on Generative AI
        as it is the latest market trend. My main enthusiasm has
        always Artificial General Intelligence (AGI) which is the
        upcoming.
        `,
    `As of this point I make AI solutions for my clients tailored to
        their needs and business requirements. I’m working on my
        two AI Software products as well, Aquachat a no code
        chatbot development software and Phantom a no code AI
        gaming character development software. And I’m attached
        to ITech Agency.`,
    `“My main moto has always been is to keep things Simpler,
        Easier and Faster”
        `,
  ];
  return f.jsx("section", {
    id: "aboutSec1 ",
    className: "about-sec1-img mt-24 hidden lg:block",
    children: f.jsxs("div", {
      className: "flex items-center justify-between px-[6.8vw] ",
      children: [
        f.jsx("div", {
          className:
            "min-h-[495px] xl:min-h-[697px] w-[35.56%]  flex items-end",
          children: f.jsx("img", {
            src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Revel+png+1.png",
            alt: "",
            className: "w-[70%] xl:w-[65%]",
          }),
        }),
        f.jsxs("div", {
          className: "",
          children: [
            f.jsxs("div", {
              className: "text-[5vw] font-Black leading-[1.1] text-darkBlue",
              children: [
                f.jsx("h1", { children: "AI" }),
                f.jsx("h1", { children: "Engineer" }),
              ],
            }),
            f.jsx("div", {
              className:
                "space-y-4 max-w-[50.125vw] pt-[3.063vw] text-[16px] lg:text-[1vw] leading-[1.9] tracking-[0.02em]",
              children: e.map((t, n) => f.jsx("p", { children: t }, n)),
            }),
          ],
        }),
      ],
    }),
  });
}
function vN() {
  const e = [
    `I used to spend all my time watching anime, playing games
        and Basketball, as a typical highschool student. Somehow I
        found my way into programming and I started to really like. I
        picked AI cause it was according to my taste`,
    `On January 2023, I started my career in AI as a freelancer. I
        studied Data Science from Data Camp, then I specialize in
        making Machine learning and AI solutions through
        lazypgrogramer Inc. I’m activally working on Generative AI
        as it is the latest market trend. My main enthusiasm has
        always Artificial General Intelligence (AGI) which is the
        upcoming.
        `,
    `As of this point I make AI solutions for my clients tailored to
        their needs and business requirements. I’m working on my
        two AI Software products as well, Aquachat a no code
        chatbot development software and Phantom a no code AI
        gaming character development software. And I’m attached
        to ITech Agency.`,
    `“My main moto has always been is to keep things Simpler,
        Easier and Faster”
        `,
  ];
  return f.jsx("section", {
    id: "aboutSec1 ",
    className: "about-sec1-img mt-24 lg:hidden",
    children: f.jsxs("div", {
      className:
        "flex flex-col items-center justify-center px-[30px] space-y-20",
      children: [
        f.jsxs("div", {
          className: "w-full h-full space-y-10",
          children: [
            f.jsxs("div", {
              className:
                "text-[35px] md:text-[42px] lg:font-[5vw] font-Bold text-darkBlue -space-y-1.5",
              children: [
                f.jsx("h1", { children: "AI" }),
                f.jsx("h1", { children: "Engineer" }),
              ],
            }),
            f.jsx("div", {
              className: "space-y-4",
              children: e.map((t, n) => f.jsx("p", { children: t }, n)),
            }),
          ],
        }),
        f.jsx("img", {
          src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Revel+png+1.png",
          alt: "",
          className: " md:max-w-[420px]",
        }),
      ],
    }),
  });
}
function yN() {
  const e = [
    `Learning should be fun. AI has started
        to become the hottest topic in
        everyone’s lives due to the recent
        development of Generative from
        companies such openai, Google,
        Stable diffusions and many other
        startups`,
    `Thereby on my channels I tend to talk
        about AI in most intuitive and humanly
        fashion. Learning should be fun. And I
        do these for all kinds of people,
        particularly for entertainment and
        education purposes.`,
    `I tend to make fun videos of AI where I
        play around with different AI tools and
        models and see they behave in
        particular situation. I try to teach some
        of the tools and methodologies to use
        AI for your own particular use cases.
        And I intend to most latest news and
        updates of AI.
        `,
  ];
  return f.jsxs("section", {
    id: "about2",
    className: "hidden lg:flex justify-end pt-[8.313vw] relative",
    children: [
      f.jsx("img", {
        src: "https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/about/ip-about-sec3-overlay.jpg",
        alt: "",
        className: "absolute left-0 top-0 h-[95%] -z-10",
      }),
      f.jsxs("div", {
        className:
          "flex justify-between  overflow-hidden lg:overflow-visible about-Sec2-img max-w-[97.18%] lg:space-x-24",
        children: [
          f.jsxs("div", {
            className:
              "px-[30px] lg:px-0 lg:pt-[4.875vw] lg:pl-[8vw] space-y-6",
            children: [
              f.jsx("h1", {
                className:
                  "text-[28px] sm:text-[35px] md:text-[42px] lg:text-[4.4vw]  font-Black text-darkBlue ",
                children: "Content Creator",
              }),
              f.jsx("div", {
                className:
                  "text-[16px] lg:text-[1vw] leading-[1.9] tracking-[0.02em] space-y-4",
                children: e.map((t, n) => f.jsx("p", { children: t }, n)),
              }),
            ],
          }),
          f.jsx("img", {
            src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutImgSec2.png",
            alt: "",
            className:
              "img-sec2-h hidden sm:block lg:w-[30%] xl:w-[33%] 2xl:w-[37%]",
          }),
          f.jsx("img", {
            src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutImgSec2Croped.png",
            alt: "",
            className: "h-[auto] sm:hidden ",
          }),
        ],
      }),
    ],
  });
}
function xN() {
  const e = [
    `Learning should be fun. AI has started
        to become the hottest topic in
        everyone’s lives due to the recent
        development of Generative from
        companies such openai, Google,
        Stable diffusions and many other
        startups`,
    `Thereby on my channels I tend to talk
        about AI in most intuitive and humanly
        fashion. Learning should be fun. And I
        do these for all kinds of people,
        particularly for entertainment and
        education purposes.`,
    `I tend to make fun videos of AI where I
        play around with different AI tools and
        models and see they behave in
        particular situation. I try to teach some
        of the tools and methodologies to use
        AI for your own particular use cases.
        And I intend to most latest news and
        updates of AI.
        `,
  ];
  return f.jsx("section", {
    id: "about2",
    className: "lg:hidden",
    children: f.jsxs("div", {
      className:
        "flex flex-col items-center justify-center space-y-24 pt-10 overflow-hidden about-Sec2-img",
      children: [
        f.jsxs("div", {
          className: "px-[30px] space-y-6",
          children: [
            f.jsx("h1", {
              className:
                "text-[28px] sm:text-[35px] md:text-[42px] font-Black text-darkBlue",
              children: "Content Creator",
            }),
            f.jsx("div", {
              className:
                "text-[16px] leading-[1.9] tracking-[0.02em] space-y-4",
              children: e.map((t, n) => f.jsx("p", { children: t }, n)),
            }),
          ],
        }),
        f.jsx("img", {
          src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutImgSec2.png",
          alt: "",
          className: "h-[auto] hidden sm:block max-w-[420px]",
        }),
        f.jsx("img", {
          src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutImgSec2Croped.png",
          alt: "",
          className: "h-[auto] sm:hidden ",
        }),
      ],
    }),
  });
}
function wN() {
  const e = [
      `I’m highly focused on building a community of people who are developers, learners, enthusiasts and who are there for just fine. So that we could share our experiences and learning to each other, and develop AI that’s highly profitable and for the development of humanity.
        `,
      `The purpose here is to provide everyone a platform, where they could share their struggles, help each other out and be aware of the latest trends and stay on top of them.
        `,
      "Feeding them with knowledge they can harvest to build something awesome.",
    ],
    t =
      "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/abouttwo.png";
  return f.jsxs("section", {
    id: "aboutSec3",
    className: " hidden lg:block relative pr-[6vw] overflow-hidden pb-[6.8vw]",
    children: [
      f.jsx("img", {
        src: "https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/about/ip-about-sec3-overlay.jpg",
        alt: "",
        className: "absolute  top-0 right-0 w-[11.375vw] h-full",
      }),
      f.jsxs("div", {
        className:
          "flex  justify-between  z-10 bg-white relative pt-[6.8vw] xl:space-x-[2.2vw] xl:space-y-[2vw]",
        children: [
          f.jsxs("div", {
            className:
              "relative flex justify-end pt-[20px] md:pt-[30px] w-[50%]",
            children: [
              f.jsx("img", {
                src: t,
                alt: "Hasss Revel Sec 3 img",
                className: "w-[95%] z-10",
              }),
              f.jsx("img", {
                src: t,
                alt: "Hasss Revel Sec 3 img",
                className: "absolute top-0 left-0 opacity-40 w-[95%]",
              }),
            ],
          }),
          f.jsx("div", {
            className: "w-[50%]",
            children: f.jsxs("div", {
              className: "px-[30px] space-y-6",
              children: [
                f.jsx("h1", {
                  className:
                    "text-[5.625vw] leading-[1.1] font-Black text-darkBlue",
                  children: "Community Leader",
                }),
                f.jsx("div", {
                  className:
                    "text-[1vw] leading-[1.9] tracking-[0.02em] space-y-[2vw] max-w-[40.063vw]",
                  children: e.map((n, r) => f.jsx("p", { children: n }, r)),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function SN() {
  const e = [
      `I’m highly focused on building a community of people who are developers, learners, enthusiasts and who are there for just fine. So that we could share our experiences and learning to each other, and develop AI that’s highly profitable and for the development of humanity.
        `,
      `The purpose here is to provide everyone a platform, where they could share their struggles, help each other out and be aware of the latest trends and stay on top of them.
        `,
      "Feeding them with knowledge they can harvest to build something awesome.",
    ],
    t =
      "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/abouttwo.png";
  return f.jsx("section", {
    id: "aboutSec3",
    className: "mt-10 lg:hidden",
    children: f.jsxs("div", {
      className: "space-y-24",
      children: [
        f.jsx("div", {
          children: f.jsxs("div", {
            className: "px-[30px] space-y-6",
            children: [
              f.jsx("h1", {
                className:
                  "text-[28px] sm:text-[35px] md:text-[42px] font-Black text-darkBlue",
                children: "Community Leader",
              }),
              f.jsx("div", {
                className:
                  "text-[16px] leading-[1.9] tracking-[0.02em] space-y-4",
                children: e.map((n, r) => f.jsx("p", { children: n }, r)),
              }),
            ],
          }),
        }),
        f.jsxs("div", {
          className: "relative flex justify-end pt-[20px] md:pt-[30px]",
          children: [
            f.jsx("img", {
              src: t,
              alt: "Hasss Revel Sec 3 img",
              className: "w-[95%] z-10",
            }),
            f.jsx("img", {
              src: t,
              alt: "Hasss Revel Sec 3 img",
              className: "absolute top-0 left-0 opacity-40 w-[95%]",
            }),
          ],
        }),
      ],
    }),
  });
}
function jN() {
  return f.jsx("section", {
    id: "aboutSec",
    className: "mt-10",
    children: f.jsxs("div", {
      className: "space-y-10 lg:space-y-0 lg:flex justify-between ",
      children: [
        f.jsxs("div", {
          className:
            "space-y-[2vw] px-[30px] lg:px-[6.8vw] lg:w-[50%] mt-[4vw]",
          children: [
            f.jsxs("div", {
              className:
                "text-[28px] sm:text-[35px] md:text-[42px] lg:text-[5.625vw] lg:leading-[1.1] font-Black text-darkBlue",
              children: [
                f.jsx("h1", { children: "Personal" }),
                f.jsx("h1", { children: "Life" }),
              ],
            }),
            f.jsx("p", {
              className:
                "text-[16px] lg:text-[1vw] leading-[1.9] tracking-[0.02em] lg:max-w-[42.08vw]",
              children: `I used to watch anime and play games all
    day long. From there I got into programming
    and 3D modeling, which lead to AI. Now I
    learn to fight which keeps me active all day
    long and do freelancing.`,
            }),
          ],
        }),
        f.jsx("img", {
          src: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutFourth.png",
          alt: "",
          className: "lg:w-[50%]",
        }),
      ],
    }),
  });
}
function EN() {
  const { setSubsFixForm: e, setSubsForm: t } = Bt();
  return f.jsxs("section", {
    id: "aboutPage",
    children: [
      f.jsx(Xn, {}),
      f.jsxs("div", {
        onClick: () => {
          t(!1), e(!1);
        },
        children: [
          f.jsx(mN, {}),
          f.jsx(hN, {}),
          f.jsx(vN, {}),
          f.jsx(gN, {}),
          f.jsx(xN, {}),
          f.jsx(yN, {}),
          f.jsx(SN, {}),
          f.jsx(wN, {}),
          f.jsx(jN, {}),
          f.jsx(mi, {}),
        ],
      }),
      f.jsx(vi, {}),
    ],
  });
}
function w1({ api: e }) {
  const [t, n] = E.useState([]),
    [r, i] = E.useState(1),
    [s, o] = E.useState(0),
    a =
      "https://api.hassanrevel.com/api/" +
      e.toString() +
      "/?page=" +
      r.toString();
  E.useEffect(() => {
    he.get(a).then((c) => {
      n(c.data.results), l(c.data.count, 6);
    });
  }, [r]);
  const l = (c, u) => {
    let d = Math.floor(c / u);
    return c % u !== 0 && d++, o(d);
  };
  return f.jsx(f.Fragment, {
    children: f.jsxs("section", {
      id: "solGrid",
      className: "px-[16px] md:px-[32px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw]",
      children: [
        f.jsx("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[2.5vw]",
          children: t.map((c, u) =>
            f.jsxs(
              "div",
              {
                className: "w-full space-y-4",
                children: [
                  f.jsx("div", {
                    className: "w-full overflow-hidden rounded-lg",
                    children: f.jsx("img", {
                      src: c.img,
                      alt: "",
                      className: "w-full hover:scale-105 duration-300",
                    }),
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("h1", {
                        className:
                          "text-[24px] leading-[1.31] tracking-normal lg:text-[1.8vw] font-Bold text-heavyBlue",
                        children: c.name,
                      }),
                      f.jsx("p", {
                        className: "text-[10px] lg:text-[1vw] opacity-70",
                        children: c.date,
                      }),
                    ],
                  }),
                ],
              },
              u
            )
          ),
        }),
        f.jsxs("div", {
          className:
            "px-[16px] sm:px-[30px] lg:px-[5.125vw] my-[56px] flex items-center justify-between lg:max-w-[35vw] mx-auto ",
          children: [
            f.jsx("div", {
              className:
                "border rounded-full w-[40px] h-[40px] flex items-center justify-center   relative duration-300 " +
                (r > 1
                  ? " group hover:bg-heavyBlue cursor-pointer"
                  : " opacity-70"),
              onClick: () => r > 1 && i(r - 1),
              children: f.jsx("svg", {
                fill: "#000000",
                className: "w-7 group-hover:fill-white",
                viewBox: "-8.5 0 32 32",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                children: f.jsx("path", {
                  d: "M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z",
                }),
              }),
            }),
            [...Array(s)].map((c, u) =>
              f.jsx(
                "div",
                {
                  className:
                    " rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-heavyBlue hover:text-white cursor-pointer " +
                    (u === r - 1 && " bg-heavyBlue text-white"),
                  onClick: () => i(u + 1),
                  children: f.jsx("p", { children: u + 1 }),
                },
                u
              )
            ),
            f.jsx("div", {
              className:
                "border rounded-full w-[40px] h-[40px] flex items-center justify-center rotate-180    relative  " +
                (r < s
                  ? " group hover:bg-heavyBlue cursor-pointer"
                  : " opacity-70"),
              onClick: () => r < s && i(r + 1),
              children: f.jsx("svg", {
                fill: "#000000",
                className: "w-7 group-hover:fill-white",
                viewBox: "-8.5 0 32 32",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                children: f.jsx("path", {
                  d: "M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z",
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function TN() {
  const e = `I’m an AI Engineer. I make Machine learning and
    AI solutions for businesses, organizations,
    individuals and researchers.
    `,
    t =
      "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Hassan+Revel+about+page.jpg";
  return f.jsx("section", {
    id: "solHero",
    children: f.jsxs("div", {
      className: "flex flex-col space-y-14 lg:flex-row lg:justify-between",
      children: [
        f.jsxs("div", {
          className: "w-[100%] relative lg:order-2 lg:w-[44.18%]",
          children: [
            f.jsx("img", {
              src: t,
              alt: "",
              className: "w-full relative z-10",
            }),
            f.jsx("img", {
              src: t,
              alt: "",
              className:
                "w-full absolute top-0 -left-3 scale-x-95 lg:scale-x-100 lg:scale-y-95 origin-top opacity-30",
            }),
          ],
        }),
        f.jsxs("div", {
          className:
            "px-[26px] space-y-10 lg:space-y-[1vw] lg:order-1 lg:w-[55.82%] lg:pt-[14vw] lg:pl-[6.6vw]",
          children: [
            f.jsx("h1", {
              className:
                "text-darkBlue font-Bold text-[48px] lg:text-[4.375vw]",
              children: "SOLUTIONS",
            }),
            f.jsxs("div", {
              className:
                "space-y-4 border-l-[10px] border-heavyBlue px-[30px] py-[1vh]",
              children: [
                f.jsx("div", {
                  className:
                    " text-[32px] lg:text-[2em] font-Bold text-Dark space-y-3",
                  children: f.jsx("p", { children: "Hassan Revel Solutions" }),
                }),
                f.jsx("p", {
                  className: "lg:text-[1vw] text-[16px] lg:max-w-[42vw]",
                  children: e,
                }),
                f.jsx("p", {
                  className: "text-[16px] font-Bold text-Dark lg:text-[1.5em]",
                  children: "Simpler, Easier and Faster, at all cost.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function FN() {
  return f.jsx("section", {
    id: "solHeading",
    children: f.jsx("div", {
      className:
        "px-[16px] md:px-[32px] lg:px-[6.6vw] mt-[56px] lg:mt-[6.6vw] text-darkBlue",
      children: f.jsxs("div", {
        className: "text-[48px] lg:text-[4.375vw] font-Bold",
        children: [
          f.jsx("p", { children: "Latest" }),
          f.jsx("p", { children: "AI Solutions" }),
        ],
      }),
    }),
  });
}
function PN() {
  const { setSubsFixForm: e, setSubsForm: t } = Bt();
  return f.jsxs("section", {
    id: "solutionPage",
    children: [
      f.jsx(Xn, {}),
      f.jsxs("div", {
        onClick: () => {
          t(!1), e(!1);
        },
        children: [
          f.jsx(TN, {}),
          f.jsx(FN, {}),
          f.jsx(w1, { api: "solutions" }),
          f.jsx(mi, {}),
        ],
      }),
      f.jsx(vi, {}),
    ],
  });
}
function CN() {
  return f.jsx("section", { id: "portfolioPage", children: f.jsx(Xn, {}) });
}
function bN() {
  return f.jsx("section", {
    id: "blogsFirst",
    children: f.jsxs("div", {
      className:
        "flex flex-col lg:flex-row px-[16px] sm:px-[30px] space-y-[35px] lg:px-[5.125vw] lg:space-x-[5vw]  my-[5.818vw]",
      children: [
        f.jsx("div", {
          className: "lg:w-[55.18%]  overflow-hidden",
          children: f.jsx("div", {
            className: "rounded-lg overflow-hidden",
            children: f.jsx("img", {
              src: "https://media.licdn.com/dms/image/D4D12AQHjrQWrhgdDAg/article-cover_image-shrink_720_1280/0/1715880568432?e=1721260800&v=beta&t=fCcHpaCxtEOzO81ILNuh3L0jKRFFJlkqgXduoldtxjQ",
              alt: "",
              className: "duration-300 hover:scale-105 rounded-lg w-full",
            }),
          }),
        }),
        f.jsxs("div", {
          className: "space-y-5 lg:w-[44.82%]",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", { className: "font-SemiBold", children: "2024" }),
                f.jsx("h1", {
                  className: "text-[2em] font-Bold text-darkBlue",
                  children: "London Weather Forecast",
                }),
              ],
            }),
            f.jsx("p", {
              className: "text-[16px] leading-[2]",
              children:
                "Picture this—London, a city rich in history and characterized by its ever-changing weather, now with a cutting-edge forecasting tool at your fingertips. The ability to predict weather patterns accurately has always intrigued me, leading to this project. Using a dataset from Kaggle, featuring historical weather data from 1979 to 2021 recorded near Heathrow, I set out to build an AI-powered model. By focusing on maximum temperature, I split the data, preprocessed it, and trained a BiLSTM model over 500 epochs. The results? An impressive RMSE of 0.07 and a MAPE of 12.02%. This tool not only demonstrates the potential of AI in meteorology but also satisfies a deep curiosity.",
            }),
          ],
        }),
      ],
    }),
  });
}
function kN(e) {
  return L0({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
        },
        child: [],
      },
    ],
  })(e);
}
function NN() {
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className:
        "space-y-[36px] md:space-y-0 md:flex items-center justify-between px-[16px] md:px-[32px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw]",
      children: [
        f.jsx("h1", {
          className: "text-darkBlue text-[2em] font-Bold",
          children: "Latest Blog Posts",
        }),
        f.jsxs("div", {
          className:
            "flex space-x-4 border rounded-full items-center justify-between px-[2rem] h-[3.5rem] text-[.875rem] font-Bold",
          children: [
            f.jsx("p", { children: "All Categories" }),
            " ",
            f.jsx("div", { className: "-rotate-90", children: f.jsx(kN, {}) }),
          ],
        }),
      ],
    }),
  });
}
function RN() {
  const e =
      "I give a funny, inspirational, and behind-the-scenes look into my entire day from early morning to late night, juggling work and personal life as an AI Engineer creating innovative solutions for my clients",
    t =
      "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.jpg";
  return f.jsx("section", {
    id: "hero",
    className: "hidden lg:block ",
    children: f.jsxs("div", {
      className: "relative flex justify-between",
      children: [
        f.jsxs("div", {
          className: "pl-[5.125vw] pt-[17.938vw] space-y-[5.313vw] w-[55.18%]",
          children: [
            f.jsx("h1", {
              className:
                "uppercase text-[6.375vw] font-Black leading-[1] text-darkBlue",
              children: "Blog",
            }),
            f.jsxs("div", {
              className: "relative flex items-center pl-[3.375vw] pr-[7.875vw]",
              children: [
                f.jsx("div", {
                  className:
                    "w-[0.625vw] absolute left-0  h-[13.938vw] bg-darkBlue",
                }),
                f.jsxs("div", {
                  className: "",
                  children: [
                    f.jsx("h1", {
                      className: "text-[2em] font-Bold text-Dark",
                      children: "Hassan Revel Blog",
                    }),
                    f.jsx("p", {
                      className: "text-[1vw] leading-[1.7]",
                      children: e,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        f.jsxs("div", {
          className: "w-[44.81%] relative",
          children: [
            f.jsx("img", {
              src: t,
              alt: "",
              className: "w-[95%] absolute top-0 left-[-3%]  opacity-40",
            }),
            f.jsx("img", { src: t, alt: "", className: "relative w-full" }),
          ],
        }),
      ],
    }),
  });
}
function AN() {
  const e =
      "I give a funny, inspirational, and behind-the-scenes look into my entire day from early morning to late night, juggling work and personal life as an AI Engineer creating innovative solutions for my clients",
    t =
      "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.jpg";
  return f.jsx("section", {
    id: "hero",
    className: "lg:hidden",
    children: f.jsxs("div", {
      className: "relative flex flex-col justify-center",
      children: [
        f.jsx("img", {
          src: t,
          alt: "",
          className: "md:w-full absolute top-4 scale-x-[90%] opacity-40",
        }),
        f.jsx("img", { src: t, alt: "", className: "relative md:w-full" }),
        f.jsxs("div", {
          className: "pt-[82px] px-[30px] pb-[50px] space-y-[30px]",
          children: [
            f.jsx("h1", {
              className:
                "uppercase text-[60px] font-Black leading-[1] text-darkBlue",
              children: "Blog",
            }),
            f.jsxs("div", {
              children: [
                f.jsx("div", {}),
                f.jsxs("div", {
                  className:
                    "border-l-[10px] border-darkBlue py-[59px] pl-[33px]",
                  children: [
                    f.jsx("h1", {
                      className: "text-[2em] font-Bold text-Dark",
                      children: "Hassan Revel Blog",
                    }),
                    f.jsx("p", {
                      className: "text-[16px] leading-[36px]",
                      children: e,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function MN() {
  const { setSubsFixForm: e, setSubsForm: t } = Bt();
  return f.jsxs("section", {
    id: "blogsPage",
    children: [
      f.jsx(Xn, {}),
      f.jsxs("div", {
        onClick: () => {
          t(!1), e(!1);
        },
        children: [
          f.jsx(AN, {}),
          f.jsx(RN, {}),
          f.jsx(bN, {}),
          f.jsx(NN, {}),
          f.jsx(w1, { api: "blogs" }),
          f.jsx(mi, {}),
        ],
      }),
      f.jsx(vi, {}),
    ],
  });
}
function LN() {
  return f.jsx("section", { id: "vlogsPage", children: f.jsx(Xn, {}) });
}
function _N() {
  const e =
    "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/images/contactformImage.png";
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className: "relative lg:order-2 lg:w-[44.82%]",
      children: [
        f.jsx("img", { src: e, alt: "", className: "relative w-full" }),
        f.jsx("img", {
          src: e,
          alt: "",
          className:
            "absolute w-full top-4 scale-x-95 origin-right opacity-30 z-[-10] lg:scale-x-100 lg:scale-y-95 lg:top-0 lg:-left-5",
        }),
      ],
    }),
  });
}
const nu = [
  {
    name: "Andorra",
    code: "AD",
    emoji: "🇦🇩",
    unicode: "U+1F1E6 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
    dial_code: "+376",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    emoji: "🇦🇪",
    unicode: "U+1F1E6 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
    dial_code: "+971",
  },
  {
    name: "Afghanistan",
    code: "AF",
    emoji: "🇦🇫",
    unicode: "U+1F1E6 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
    dial_code: "+93",
  },
  {
    name: "Anguilla",
    code: "AI",
    emoji: "🇦🇮",
    unicode: "U+1F1E6 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
    dial_code: "+1264",
  },
  {
    name: "Albania",
    code: "AL",
    emoji: "🇦🇱",
    unicode: "U+1F1E6 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
    dial_code: "+355",
  },
  {
    name: "Armenia",
    code: "AM",
    emoji: "🇦🇲",
    unicode: "U+1F1E6 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
    dial_code: "+374",
  },
  {
    name: "Angola",
    code: "AO",
    emoji: "🇦🇴",
    unicode: "U+1F1E6 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
    dial_code: "+244",
  },
  {
    name: "Antarctica",
    code: "AQ",
    emoji: "🇦🇶",
    unicode: "U+1F1E6 U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg",
    dial_code: "+672",
  },
  {
    name: "Argentina",
    code: "AR",
    emoji: "🇦🇷",
    unicode: "U+1F1E6 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
    dial_code: "+54",
  },
  {
    name: "Austria",
    code: "AT",
    emoji: "🇦🇹",
    unicode: "U+1F1E6 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
    dial_code: "+43",
  },
  {
    name: "Australia",
    code: "AU",
    emoji: "🇦🇺",
    unicode: "U+1F1E6 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
    dial_code: "+61",
  },
  {
    name: "Aruba",
    code: "AW",
    emoji: "🇦🇼",
    unicode: "U+1F1E6 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
    dial_code: "+297",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    emoji: "🇦🇿",
    unicode: "U+1F1E6 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
    dial_code: "+994",
  },
  {
    name: "Barbados",
    code: "BB",
    emoji: "🇧🇧",
    unicode: "U+1F1E7 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg",
    dial_code: "+1246",
  },
  {
    name: "Bangladesh",
    code: "BD",
    emoji: "🇧🇩",
    unicode: "U+1F1E7 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
    dial_code: "+880",
  },
  {
    name: "Belgium",
    code: "BE",
    emoji: "🇧🇪",
    unicode: "U+1F1E7 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
    dial_code: "+32",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    emoji: "🇧🇫",
    unicode: "U+1F1E7 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg",
    dial_code: "+226",
  },
  {
    name: "Bulgaria",
    code: "BG",
    emoji: "🇧🇬",
    unicode: "U+1F1E7 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
    dial_code: "+359",
  },
  {
    name: "Bahrain",
    code: "BH",
    emoji: "🇧🇭",
    unicode: "U+1F1E7 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
    dial_code: "+973",
  },
  {
    name: "Burundi",
    code: "BI",
    emoji: "🇧🇮",
    unicode: "U+1F1E7 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg",
    dial_code: "+257",
  },
  {
    name: "Benin",
    code: "BJ",
    emoji: "🇧🇯",
    unicode: "U+1F1E7 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg",
    dial_code: "+229",
  },
  {
    name: "Bermuda",
    code: "BM",
    emoji: "🇧🇲",
    unicode: "U+1F1E7 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg",
    dial_code: "+1441",
  },
  {
    name: "Brazil",
    code: "BR",
    emoji: "🇧🇷",
    unicode: "U+1F1E7 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
    dial_code: "+55",
  },
  {
    name: "Bahamas",
    code: "BS",
    emoji: "🇧🇸",
    unicode: "U+1F1E7 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg",
    dial_code: "+1242",
  },
  {
    name: "Bhutan",
    code: "BT",
    emoji: "🇧🇹",
    unicode: "U+1F1E7 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg",
    dial_code: "+975",
  },
  {
    name: "Botswana",
    code: "BW",
    emoji: "🇧🇼",
    unicode: "U+1F1E7 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg",
    dial_code: "+267",
  },
  {
    name: "Belarus",
    code: "BY",
    emoji: "🇧🇾",
    unicode: "U+1F1E7 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
    dial_code: "+375",
  },
  {
    name: "Belize",
    code: "BZ",
    emoji: "🇧🇿",
    unicode: "U+1F1E7 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
    dial_code: "+501",
  },
  {
    name: "Canada",
    code: "CA",
    emoji: "🇨🇦",
    unicode: "U+1F1E8 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
    dial_code: "+1",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    emoji: "🇨🇨",
    unicode: "U+1F1E8 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg",
    dial_code: "+61",
  },
  {
    name: "Central African Republic",
    code: "CF",
    emoji: "🇨🇫",
    unicode: "U+1F1E8 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg",
    dial_code: "+236",
  },
  {
    name: "Switzerland",
    code: "CH",
    emoji: "🇨🇭",
    unicode: "U+1F1E8 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
    dial_code: "+41",
  },
  {
    name: "Cook Islands",
    code: "CK",
    emoji: "🇨🇰",
    unicode: "U+1F1E8 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg",
    dial_code: "+682",
  },
  {
    name: "Chile",
    code: "CL",
    emoji: "🇨🇱",
    unicode: "U+1F1E8 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
    dial_code: "+56",
  },
  {
    name: "Cameroon",
    code: "CM",
    emoji: "🇨🇲",
    unicode: "U+1F1E8 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg",
    dial_code: "+237",
  },
  {
    name: "China",
    code: "CN",
    emoji: "🇨🇳",
    unicode: "U+1F1E8 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
    dial_code: "+86",
  },
  {
    name: "Colombia",
    code: "CO",
    emoji: "🇨🇴",
    unicode: "U+1F1E8 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
    dial_code: "+57",
  },
  {
    name: "Costa Rica",
    code: "CR",
    emoji: "🇨🇷",
    unicode: "U+1F1E8 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
    dial_code: "+506",
  },
  {
    name: "Cuba",
    code: "CU",
    emoji: "🇨🇺",
    unicode: "U+1F1E8 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg",
    dial_code: "+53",
  },
  {
    name: "Cape Verde",
    code: "CV",
    emoji: "🇨🇻",
    unicode: "U+1F1E8 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg",
    dial_code: "+238",
  },
  {
    name: "Christmas Island",
    code: "CX",
    emoji: "🇨🇽",
    unicode: "U+1F1E8 U+1F1FD",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg",
    dial_code: "+61",
  },
  {
    name: "Cyprus",
    code: "CY",
    emoji: "🇨🇾",
    unicode: "U+1F1E8 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
    dial_code: "+357",
  },
  {
    name: "Germany",
    code: "DE",
    emoji: "🇩🇪",
    unicode: "U+1F1E9 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
    dial_code: "+49",
  },
  {
    name: "Djibouti",
    code: "DJ",
    emoji: "🇩🇯",
    unicode: "U+1F1E9 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg",
    dial_code: "+253",
  },
  {
    name: "Denmark",
    code: "DK",
    emoji: "🇩🇰",
    unicode: "U+1F1E9 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
    dial_code: "+45",
  },
  {
    name: "Dominica",
    code: "DM",
    emoji: "🇩🇲",
    unicode: "U+1F1E9 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg",
    dial_code: "+1767",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    emoji: "🇩🇴",
    unicode: "U+1F1E9 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
    dial_code: "+1849",
  },
  {
    name: "Algeria",
    code: "DZ",
    emoji: "🇩🇿",
    unicode: "U+1F1E9 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
    dial_code: "+213",
  },
  {
    name: "Ecuador",
    code: "EC",
    emoji: "🇪🇨",
    unicode: "U+1F1EA U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
    dial_code: "+593",
  },
  {
    name: "Estonia",
    code: "EE",
    emoji: "🇪🇪",
    unicode: "U+1F1EA U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
    dial_code: "+372",
  },
  {
    name: "Egypt",
    code: "EG",
    emoji: "🇪🇬",
    unicode: "U+1F1EA U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
    dial_code: "+20",
  },
  {
    name: "Eritrea",
    code: "ER",
    emoji: "🇪🇷",
    unicode: "U+1F1EA U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg",
    dial_code: "+291",
  },
  {
    name: "Spain",
    code: "ES",
    emoji: "🇪🇸",
    unicode: "U+1F1EA U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
    dial_code: "+34",
  },
  {
    name: "Ethiopia",
    code: "ET",
    emoji: "🇪🇹",
    unicode: "U+1F1EA U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
    dial_code: "+251",
  },
  {
    name: "Finland",
    code: "FI",
    emoji: "🇫🇮",
    unicode: "U+1F1EB U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
    dial_code: "+358",
  },
  {
    name: "Fiji",
    code: "FJ",
    emoji: "🇫🇯",
    unicode: "U+1F1EB U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg",
    dial_code: "+679",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    emoji: "🇫🇴",
    unicode: "U+1F1EB U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
    dial_code: "+298",
  },
  {
    name: "France",
    code: "FR",
    emoji: "🇫🇷",
    unicode: "U+1F1EB U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
    dial_code: "+33",
  },
  {
    name: "Gabon",
    code: "GA",
    emoji: "🇬🇦",
    unicode: "U+1F1EC U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg",
    dial_code: "+241",
  },
  {
    name: "United Kingdom",
    code: "GB",
    emoji: "🇬🇧",
    unicode: "U+1F1EC U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
    dial_code: "+44",
  },
  {
    name: "Grenada",
    code: "GD",
    emoji: "🇬🇩",
    unicode: "U+1F1EC U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg",
    dial_code: "+1473",
  },
  {
    name: "Georgia",
    code: "GE",
    emoji: "🇬🇪",
    unicode: "U+1F1EC U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
    dial_code: "+995",
  },
  {
    name: "French Guiana",
    code: "GF",
    emoji: "🇬🇫",
    unicode: "U+1F1EC U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg",
    dial_code: "+594",
  },
  {
    name: "Guernsey",
    code: "GG",
    emoji: "🇬🇬",
    unicode: "U+1F1EC U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg",
    dial_code: "+44",
  },
  {
    name: "Ghana",
    code: "GH",
    emoji: "🇬🇭",
    unicode: "U+1F1EC U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
    dial_code: "+233",
  },
  {
    name: "Gibraltar",
    code: "GI",
    emoji: "🇬🇮",
    unicode: "U+1F1EC U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg",
    dial_code: "+350",
  },
  {
    name: "Greenland",
    code: "GL",
    emoji: "🇬🇱",
    unicode: "U+1F1EC U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
    dial_code: "+299",
  },
  {
    name: "Gambia",
    code: "GM",
    emoji: "🇬🇲",
    unicode: "U+1F1EC U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg",
    dial_code: "+220",
  },
  {
    name: "Guinea",
    code: "GN",
    emoji: "🇬🇳",
    unicode: "U+1F1EC U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg",
    dial_code: "+224",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    emoji: "🇬🇵",
    unicode: "U+1F1EC U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg",
    dial_code: "+590",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    emoji: "🇬🇶",
    unicode: "U+1F1EC U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg",
    dial_code: "+240",
  },
  {
    name: "Greece",
    code: "GR",
    emoji: "🇬🇷",
    unicode: "U+1F1EC U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
    dial_code: "+30",
  },
  {
    name: "Guatemala",
    code: "GT",
    emoji: "🇬🇹",
    unicode: "U+1F1EC U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
    dial_code: "+502",
  },
  {
    name: "Guam",
    code: "GU",
    emoji: "🇬🇺",
    unicode: "U+1F1EC U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg",
    dial_code: "+1671",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    emoji: "🇬🇼",
    unicode: "U+1F1EC U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg",
    dial_code: "+245",
  },
  {
    name: "Guyana",
    code: "GY",
    emoji: "🇬🇾",
    unicode: "U+1F1EC U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg",
    dial_code: "+595",
  },
  {
    name: "Honduras",
    code: "HN",
    emoji: "🇭🇳",
    unicode: "U+1F1ED U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
    dial_code: "+504",
  },
  {
    name: "Croatia",
    code: "HR",
    emoji: "🇭🇷",
    unicode: "U+1F1ED U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
    dial_code: "+385",
  },
  {
    name: "Haiti",
    code: "HT",
    emoji: "🇭🇹",
    unicode: "U+1F1ED U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg",
    dial_code: "+509",
  },
  {
    name: "Hungary",
    code: "HU",
    emoji: "🇭🇺",
    unicode: "U+1F1ED U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
    dial_code: "+36",
  },
  {
    name: "Indonesia",
    code: "ID",
    emoji: "🇮🇩",
    unicode: "U+1F1EE U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
    dial_code: "+62",
  },
  {
    name: "Ireland",
    code: "IE",
    emoji: "🇮🇪",
    unicode: "U+1F1EE U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
    dial_code: "+353",
  },
  {
    name: "Israel",
    code: "IL",
    emoji: "🇮🇱",
    unicode: "U+1F1EE U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
    dial_code: "+972",
  },
  {
    name: "Isle of Man",
    code: "IM",
    emoji: "🇮🇲",
    unicode: "U+1F1EE U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg",
    dial_code: "+44",
  },
  {
    name: "India",
    code: "IN",
    emoji: "🇮🇳",
    unicode: "U+1F1EE U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
    dial_code: "+91",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    emoji: "🇮🇴",
    unicode: "U+1F1EE U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg",
    dial_code: "+246",
  },
  {
    name: "Iraq",
    code: "IQ",
    emoji: "🇮🇶",
    unicode: "U+1F1EE U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
    dial_code: "+964",
  },
  {
    name: "Iceland",
    code: "IS",
    emoji: "🇮🇸",
    unicode: "U+1F1EE U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
    dial_code: "+354",
  },
  {
    name: "Italy",
    code: "IT",
    emoji: "🇮🇹",
    unicode: "U+1F1EE U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
    dial_code: "+39",
  },
  {
    name: "Jersey",
    code: "JE",
    emoji: "🇯🇪",
    unicode: "U+1F1EF U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg",
    dial_code: "+44",
  },
  {
    name: "Jamaica",
    code: "JM",
    emoji: "🇯🇲",
    unicode: "U+1F1EF U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
    dial_code: "+1876",
  },
  {
    name: "Jordan",
    code: "JO",
    emoji: "🇯🇴",
    unicode: "U+1F1EF U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
    dial_code: "+962",
  },
  {
    name: "Japan",
    code: "JP",
    emoji: "🇯🇵",
    unicode: "U+1F1EF U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
    dial_code: "+81",
  },
  {
    name: "Kenya",
    code: "KE",
    emoji: "🇰🇪",
    unicode: "U+1F1F0 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
    dial_code: "+254",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    emoji: "🇰🇬",
    unicode: "U+1F1F0 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
    dial_code: "+996",
  },
  {
    name: "Cambodia",
    code: "KH",
    emoji: "🇰🇭",
    unicode: "U+1F1F0 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
    dial_code: "+855",
  },
  {
    name: "Kiribati",
    code: "KI",
    emoji: "🇰🇮",
    unicode: "U+1F1F0 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg",
    dial_code: "+686",
  },
  {
    name: "Comoros",
    code: "KM",
    emoji: "🇰🇲",
    unicode: "U+1F1F0 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg",
    dial_code: "+269",
  },
  {
    name: "Kuwait",
    code: "KW",
    emoji: "🇰🇼",
    unicode: "U+1F1F0 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
    dial_code: "+965",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    emoji: "🇰🇾",
    unicode: "U+1F1F0 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg",
    dial_code: "+ 345",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    emoji: "🇰🇿",
    unicode: "U+1F1F0 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
    dial_code: "+77",
  },
  {
    name: "Laos",
    code: "LA",
    emoji: "🇱🇦",
    unicode: "U+1F1F1 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
    dial_code: "+856",
  },
  {
    name: "Lebanon",
    code: "LB",
    emoji: "🇱🇧",
    unicode: "U+1F1F1 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
    dial_code: "+961",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    emoji: "🇱🇮",
    unicode: "U+1F1F1 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
    dial_code: "+423",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    emoji: "🇱🇰",
    unicode: "U+1F1F1 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
    dial_code: "+94",
  },
  {
    name: "Liberia",
    code: "LR",
    emoji: "🇱🇷",
    unicode: "U+1F1F1 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg",
    dial_code: "+231",
  },
  {
    name: "Lesotho",
    code: "LS",
    emoji: "🇱🇸",
    unicode: "U+1F1F1 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg",
    dial_code: "+266",
  },
  {
    name: "Lithuania",
    code: "LT",
    emoji: "🇱🇹",
    unicode: "U+1F1F1 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
    dial_code: "+370",
  },
  {
    name: "Luxembourg",
    code: "LU",
    emoji: "🇱🇺",
    unicode: "U+1F1F1 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
    dial_code: "+352",
  },
  {
    name: "Latvia",
    code: "LV",
    emoji: "🇱🇻",
    unicode: "U+1F1F1 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
    dial_code: "+371",
  },
  {
    name: "Morocco",
    code: "MA",
    emoji: "🇲🇦",
    unicode: "U+1F1F2 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
    dial_code: "+212",
  },
  {
    name: "Monaco",
    code: "MC",
    emoji: "🇲🇨",
    unicode: "U+1F1F2 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
    dial_code: "+377",
  },
  {
    name: "Moldova",
    code: "MD",
    emoji: "🇲🇩",
    unicode: "U+1F1F2 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg",
    dial_code: "+373",
  },
  {
    name: "Montenegro",
    code: "ME",
    emoji: "🇲🇪",
    unicode: "U+1F1F2 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
    dial_code: "+382",
  },
  {
    name: "Madagascar",
    code: "MG",
    emoji: "🇲🇬",
    unicode: "U+1F1F2 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg",
    dial_code: "+261",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    emoji: "🇲🇭",
    unicode: "U+1F1F2 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg",
    dial_code: "+692",
  },
  {
    name: "Mali",
    code: "ML",
    emoji: "🇲🇱",
    unicode: "U+1F1F2 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg",
    dial_code: "+223",
  },
  {
    name: "Mongolia",
    code: "MN",
    emoji: "🇲🇳",
    unicode: "U+1F1F2 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
    dial_code: "+976",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    emoji: "🇲🇵",
    unicode: "U+1F1F2 U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg",
    dial_code: "+1670",
  },
  {
    name: "Martinique",
    code: "MQ",
    emoji: "🇲🇶",
    unicode: "U+1F1F2 U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg",
    dial_code: "+596",
  },
  {
    name: "Mauritania",
    code: "MR",
    emoji: "🇲🇷",
    unicode: "U+1F1F2 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg",
    dial_code: "+222",
  },
  {
    name: "Montserrat",
    code: "MS",
    emoji: "🇲🇸",
    unicode: "U+1F1F2 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg",
    dial_code: "+1664",
  },
  {
    name: "Malta",
    code: "MT",
    emoji: "🇲🇹",
    unicode: "U+1F1F2 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
    dial_code: "+356",
  },
  {
    name: "Mauritius",
    code: "MU",
    emoji: "🇲🇺",
    unicode: "U+1F1F2 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg",
    dial_code: "+230",
  },
  {
    name: "Maldives",
    code: "MV",
    emoji: "🇲🇻",
    unicode: "U+1F1F2 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
    dial_code: "+960",
  },
  {
    name: "Malawi",
    code: "MW",
    emoji: "🇲🇼",
    unicode: "U+1F1F2 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg",
    dial_code: "+265",
  },
  {
    name: "Mexico",
    code: "MX",
    emoji: "🇲🇽",
    unicode: "U+1F1F2 U+1F1FD",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
    dial_code: "+52",
  },
  {
    name: "Malaysia",
    code: "MY",
    emoji: "🇲🇾",
    unicode: "U+1F1F2 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
    dial_code: "+60",
  },
  {
    name: "Mozambique",
    code: "MZ",
    emoji: "🇲🇿",
    unicode: "U+1F1F2 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg",
    dial_code: "+258",
  },
  {
    name: "Namibia",
    code: "NA",
    emoji: "🇳🇦",
    unicode: "U+1F1F3 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg",
    dial_code: "+264",
  },
  {
    name: "New Caledonia",
    code: "NC",
    emoji: "🇳🇨",
    unicode: "U+1F1F3 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg",
    dial_code: "+687",
  },
  {
    name: "Niger",
    code: "NE",
    emoji: "🇳🇪",
    unicode: "U+1F1F3 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg",
    dial_code: "+227",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    emoji: "🇳🇫",
    unicode: "U+1F1F3 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg",
    dial_code: "+672",
  },
  {
    name: "Nigeria",
    code: "NG",
    emoji: "🇳🇬",
    unicode: "U+1F1F3 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
    dial_code: "+234",
  },
  {
    name: "Nicaragua",
    code: "NI",
    emoji: "🇳🇮",
    unicode: "U+1F1F3 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
    dial_code: "+505",
  },
  {
    name: "Netherlands",
    code: "NL",
    emoji: "🇳🇱",
    unicode: "U+1F1F3 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
    dial_code: "+31",
  },
  {
    name: "Norway",
    code: "NO",
    emoji: "🇳🇴",
    unicode: "U+1F1F3 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
    dial_code: "+47",
  },
  {
    name: "Nepal",
    code: "NP",
    emoji: "🇳🇵",
    unicode: "U+1F1F3 U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
    dial_code: "+977",
  },
  {
    name: "Nauru",
    code: "NR",
    emoji: "🇳🇷",
    unicode: "U+1F1F3 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg",
    dial_code: "+674",
  },
  {
    name: "Niue",
    code: "NU",
    emoji: "🇳🇺",
    unicode: "U+1F1F3 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg",
    dial_code: "+683",
  },
  {
    name: "New Zealand",
    code: "NZ",
    emoji: "🇳🇿",
    unicode: "U+1F1F3 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
    dial_code: "+64",
  },
  {
    name: "Oman",
    code: "OM",
    emoji: "🇴🇲",
    unicode: "U+1F1F4 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
    dial_code: "+968",
  },
  {
    name: "Panama",
    code: "PA",
    emoji: "🇵🇦",
    unicode: "U+1F1F5 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
    dial_code: "+507",
  },
  {
    name: "Peru",
    code: "PE",
    emoji: "🇵🇪",
    unicode: "U+1F1F5 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
    dial_code: "+51",
  },
  {
    name: "French Polynesia",
    code: "PF",
    emoji: "🇵🇫",
    unicode: "U+1F1F5 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg",
    dial_code: "+689",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    emoji: "🇵🇬",
    unicode: "U+1F1F5 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg",
    dial_code: "+675",
  },
  {
    name: "Philippines",
    code: "PH",
    emoji: "🇵🇭",
    unicode: "U+1F1F5 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
    dial_code: "+63",
  },
  {
    name: "Pakistan",
    code: "PK",
    emoji: "🇵🇰",
    unicode: "U+1F1F5 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
    dial_code: "+92",
  },
  {
    name: "Poland",
    code: "PL",
    emoji: "🇵🇱",
    unicode: "U+1F1F5 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
    dial_code: "+48",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    emoji: "🇵🇷",
    unicode: "U+1F1F5 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
    dial_code: "+1939",
  },
  {
    name: "Portugal",
    code: "PT",
    emoji: "🇵🇹",
    unicode: "U+1F1F5 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
    dial_code: "+351",
  },
  {
    name: "Palau",
    code: "PW",
    emoji: "🇵🇼",
    unicode: "U+1F1F5 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg",
    dial_code: "+680",
  },
  {
    name: "Paraguay",
    code: "PY",
    emoji: "🇵🇾",
    unicode: "U+1F1F5 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
    dial_code: "+595",
  },
  {
    name: "Qatar",
    code: "QA",
    emoji: "🇶🇦",
    unicode: "U+1F1F6 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
    dial_code: "+974",
  },
  {
    name: "Romania",
    code: "RO",
    emoji: "🇷🇴",
    unicode: "U+1F1F7 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
    dial_code: "+40",
  },
  {
    name: "Serbia",
    code: "RS",
    emoji: "🇷🇸",
    unicode: "U+1F1F7 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
    dial_code: "+381",
  },
  {
    name: "Russia",
    code: "RU",
    emoji: "🇷🇺",
    unicode: "U+1F1F7 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
    dial_code: "+7",
  },
  {
    name: "Rwanda",
    code: "RW",
    emoji: "🇷🇼",
    unicode: "U+1F1F7 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
    dial_code: "+250",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    emoji: "🇸🇦",
    unicode: "U+1F1F8 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
    dial_code: "+966",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    emoji: "🇸🇧",
    unicode: "U+1F1F8 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg",
    dial_code: "+677",
  },
  {
    name: "Seychelles",
    code: "SC",
    emoji: "🇸🇨",
    unicode: "U+1F1F8 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg",
    dial_code: "+248",
  },
  {
    name: "Sudan",
    code: "SD",
    emoji: "🇸🇩",
    unicode: "U+1F1F8 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg",
    dial_code: "+249",
  },
  {
    name: "Sweden",
    code: "SE",
    emoji: "🇸🇪",
    unicode: "U+1F1F8 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
    dial_code: "+46",
  },
  {
    name: "Singapore",
    code: "SG",
    emoji: "🇸🇬",
    unicode: "U+1F1F8 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
    dial_code: "+65",
  },
  {
    name: "Slovenia",
    code: "SI",
    emoji: "🇸🇮",
    unicode: "U+1F1F8 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
    dial_code: "+386",
  },
  {
    name: "Slovakia",
    code: "SK",
    emoji: "🇸🇰",
    unicode: "U+1F1F8 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
    dial_code: "+421",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    emoji: "🇸🇱",
    unicode: "U+1F1F8 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg",
    dial_code: "+232",
  },
  {
    name: "San Marino",
    code: "SM",
    emoji: "🇸🇲",
    unicode: "U+1F1F8 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg",
    dial_code: "+378",
  },
  {
    name: "Senegal",
    code: "SN",
    emoji: "🇸🇳",
    unicode: "U+1F1F8 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
    dial_code: "+221",
  },
  {
    name: "Somalia",
    code: "SO",
    emoji: "🇸🇴",
    unicode: "U+1F1F8 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg",
    dial_code: "+252",
  },
  {
    name: "Suriname",
    code: "SR",
    emoji: "🇸🇷",
    unicode: "U+1F1F8 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg",
    dial_code: "+597",
  },
  {
    name: "South Sudan",
    code: "SS",
    emoji: "🇸🇸",
    unicode: "U+1F1F8 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg",
    dial_code: "+211",
  },
  {
    name: "El Salvador",
    code: "SV",
    emoji: "🇸🇻",
    unicode: "U+1F1F8 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
    dial_code: "+503",
  },
  {
    name: "Chad",
    code: "TD",
    emoji: "🇹🇩",
    unicode: "U+1F1F9 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg",
    dial_code: "+235",
  },
  {
    name: "Togo",
    code: "TG",
    emoji: "🇹🇬",
    unicode: "U+1F1F9 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg",
    dial_code: "+228",
  },
  {
    name: "Thailand",
    code: "TH",
    emoji: "🇹🇭",
    unicode: "U+1F1F9 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
    dial_code: "+66",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    emoji: "🇹🇯",
    unicode: "U+1F1F9 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
    dial_code: "+992",
  },
  {
    name: "Tokelau",
    code: "TK",
    emoji: "🇹🇰",
    unicode: "U+1F1F9 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg",
    dial_code: "+690",
  },
  {
    name: "Timor-Leste",
    code: "TL",
    emoji: "🇹🇱",
    unicode: "U+1F1F9 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg",
    dial_code: "+670",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    emoji: "🇹🇲",
    unicode: "U+1F1F9 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg",
    dial_code: "+993",
  },
  {
    name: "Tunisia",
    code: "TN",
    emoji: "🇹🇳",
    unicode: "U+1F1F9 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
    dial_code: "+216",
  },
  {
    name: "Tonga",
    code: "TO",
    emoji: "🇹🇴",
    unicode: "U+1F1F9 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg",
    dial_code: "+676",
  },
  {
    name: "Turkey",
    code: "TR",
    emoji: "🇹🇷",
    unicode: "U+1F1F9 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
    dial_code: "+90",
  },
  {
    name: "Tuvalu",
    code: "TV",
    emoji: "🇹🇻",
    unicode: "U+1F1F9 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg",
    dial_code: "+688",
  },
  {
    name: "Taiwan",
    code: "TW",
    emoji: "🇹🇼",
    unicode: "U+1F1F9 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
    dial_code: "+886",
  },
  {
    name: "Ukraine",
    code: "UA",
    emoji: "🇺🇦",
    unicode: "U+1F1FA U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
    dial_code: "+380",
  },
  {
    name: "Uganda",
    code: "UG",
    emoji: "🇺🇬",
    unicode: "U+1F1FA U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
    dial_code: "+256",
  },
  {
    name: "United States",
    code: "US",
    emoji: "🇺🇸",
    unicode: "U+1F1FA U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
    dial_code: "+1",
  },
  {
    name: "Uruguay",
    code: "UY",
    emoji: "🇺🇾",
    unicode: "U+1F1FA U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
    dial_code: "+598",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    emoji: "🇺🇿",
    unicode: "U+1F1FA U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
    dial_code: "+998",
  },
  {
    name: "Vietnam",
    code: "VN",
    emoji: "🇻🇳",
    unicode: "U+1F1FB U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
    dial_code: "+84",
  },
  {
    name: "Vanuatu",
    code: "VU",
    emoji: "🇻🇺",
    unicode: "U+1F1FB U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg",
    dial_code: "+678",
  },
  {
    name: "Samoa",
    code: "WS",
    emoji: "🇼🇸",
    unicode: "U+1F1FC U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg",
    dial_code: "+685",
  },
  {
    name: "Yemen",
    code: "YE",
    emoji: "🇾🇪",
    unicode: "U+1F1FE U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
    dial_code: "+967",
  },
  {
    name: "Mayotte",
    code: "YT",
    emoji: "🇾🇹",
    unicode: "U+1F1FE U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg",
    dial_code: "+262",
  },
  {
    name: "South Africa",
    code: "ZA",
    emoji: "🇿🇦",
    unicode: "U+1F1FF U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
    dial_code: "+27",
  },
  {
    name: "Zambia",
    code: "ZM",
    emoji: "🇿🇲",
    unicode: "U+1F1FF U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg",
    dial_code: "+260",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    emoji: "🇿🇼",
    unicode: "U+1F1FF U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
    dial_code: "+263",
  },
];
function IN() {
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className: "space-y-[-20px] space-x-10 lg:space-x-[3.9vw]",
      children: [
        f.jsx("h1", {
          className: "text-[#949494] text-[48px] lg:text-[4.401vw]",
          children: "CONTACT",
        }),
        f.jsx("p", {
          className:
            "font-Black text-[48px] sm:text-[65px] text-heavyBlue lg:text-[6.382vw]",
          children: "HASSAN",
        }),
      ],
    }),
  });
}
function DN() {
  const [e, t] = E.useState(!1),
    [n, r] = E.useState(0),
    [i, s] = E.useState(nu),
    o = (l) => {
      const c = nu.filter((u) =>
        u.name.toLowerCase().startsWith(l.toLowerCase())
      );
      s([...c, ...nu]);
    },
    a = E.useCallback(
      (l) => {
        const c = l.key.toLocaleLowerCase();
        if (/^[a-z]$/.test(c)) return o(c);
      },
      [e]
    );
  return (
    E.useEffect(() => {
      if (e === !0)
        return (
          document.addEventListener("keydown", a, !1),
          () => {
            document.removeEventListener("keydown", a, !1);
          }
        );
    }, [a, e]),
    console.log(e),
    f.jsxs("div", {
      className: "lg:flex justify-between mb-[56px] lg:mb-[12vw]",
      onClick: () => e && t(!1),
      children: [
        f.jsx(_N, {}),
        f.jsxs("div", {
          className:
            "px-[30px] py-[60px] lg:order-1 lg:w-[55.18%] lg:mt-[13vw] lg:p-0 lg:pr-[4vw] lg:pl-[5.125vw]",
          children: [
            f.jsx(IN, {}),
            f.jsxs("form", {
              className: "flex flex-col space-y-[10px] lg:space-y-0 mt-[1.2vw]",
              children: [
                f.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[1.250vw] lg:pb-[1.250vw]",
                  children: [
                    f.jsx("div", {
                      className: "",
                      children: f.jsx("input", {
                        type: "text",
                        name: "",
                        id: "",
                        className:
                          "focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]",
                        placeholder: "First Name",
                      }),
                    }),
                    f.jsx("div", {
                      children: f.jsx("input", {
                        type: "text",
                        name: "",
                        id: "",
                        className:
                          "focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]",
                        placeholder: "Last Name",
                      }),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[1.250vw] lg:pb-[1.250vw] ",
                  children: [
                    f.jsx("div", {
                      children: f.jsx("input", {
                        type: "email",
                        name: "",
                        id: "",
                        className:
                          "focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]",
                        placeholder: "Email",
                      }),
                    }),
                    f.jsxs("div", {
                      className:
                        "flex border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] space-x-[10px] relative lg:text-[0.875vw] lg:h-[3.063vw] lg:px-[0.375vw]",
                      children: [
                        f.jsx("div", {
                          className:
                            "w-10 h-full cursor-pointer flex items-center ",
                          onClick: () => t(!e),
                          children: f.jsx("img", { src: i[n].image, alt: "" }),
                        }),
                        e &&
                          f.jsx("div", {
                            className:
                              "absolute w-[80%] h-[200px] top-[42px] lg:h-[12vw] lg:top-[3.063vw] left-0 overflow-y-scroll cursor-pointer",
                            children: i.map((l, c) =>
                              f.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between bg-white px-4",
                                  onClick: () => {
                                    r(c), t(!1);
                                  },
                                  children: [
                                    f.jsx("p", { children: l.name }),
                                    f.jsx("img", {
                                      src: l.image,
                                      alt: "",
                                      className: "w-10 h-10",
                                    }),
                                  ],
                                },
                                c
                              )
                            ),
                          }),
                        f.jsx("input", {
                          type: "number",
                          name: "",
                          id: "",
                          className:
                            "focus:outline-none  text-[#333333] placeholder:text-[#333333] remove-arrow w-full",
                          placeholder: "Phone",
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  children: [
                    f.jsx("textarea", {
                      className:
                        "focus:outline-none border-[1px] border-[#bcbcbc] w-full text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] resize-none h-[80px] p-[10px] lg:p-0 lg:py-[1.125vw] lg:px-[1.375vw] lg:h-[7.438vw] lg:text-[0.875vw] lg:mb-[1.250vw]",
                      placeholder: "Your message",
                    }),
                    f.jsx("button", {
                      className:
                        "border-[1px] border-[#bcbcbc] w-full text-[12px] h-[40px] font-semibold text-darkBlue tracking-[0.050em] lg:w-[15vw] lg:mt-[0.5vw] lg:text-[0.875vw] lg:h-[3.625vw] hover:bg-darkBlue duration-300 hover:text-white",
                      children: "SUBMIT",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function UN() {
  const { setSubsFixForm: e, setSubsForm: t } = Bt();
  return f.jsxs("section", {
    id: "contactPage",
    children: [
      f.jsx(Xn, {}),
      f.jsxs("div", {
        onClick: () => {
          t(!1), e(!1);
        },
        children: [f.jsx(DN, {}), f.jsx(mi, {})],
      }),
      f.jsx(vi, {}),
    ],
  });
}
function ON() {
  const [e, t] = E.useState([]);
  return (
    E.useEffect(() => {
      he.get("https://api.hassanrevel.com/api/reviews").then((n) => t(n.data));
    }),
    f.jsxs("section", {
      id: "successGrid",
      className:
        "mt-[1.875vw] pt-[5.438vw] pb-[10.75vw] relative space-y-[36px] lg:space-y-[5vw] lg:max-w-[96vw]",
      children: [
        f.jsx("img", {
          src: "https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/testimonials/ip-testimonials-quote.png",
          alt: "",
          className:
            "absolute bottom-[4.375vw] lg:bottom-[2.375vw] left-[-8.313vw] w-[54.125vw] z-10",
        }),
        f.jsx("img", {
          src: "https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/testimonials/ip-testimonials-bg.jpg",
          alt: "",
          className: "absolute w-full h-[70%] top-0 left-0",
        }),
        f.jsx("div", {
          className:
            "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[3vw] px-[4vw] mx-auto relative z-20",
          children: e.map((n, r) =>
            f.jsx(
              x1,
              { name: n.name, img: n.img, review: n.review, title: n.title },
              r
            )
          ),
        }),
        f.jsx("div", {
          className: "w-full flex justify-end items-end max-w-[95vw]",
          children: f.jsx("div", {
            className:
              "review-border duration-300 text-heavyBlue hover:bg-heavyBlue hover:text-white font-SemiBold uppercase text-[14px] py-[22px] text-center relative z-20 w-[220px] h-[58px] bg-transparent flex items-center justify-center cursor-pointer",
            children: "View more",
          }),
        }),
      ],
    })
  );
}
function BN() {
  const e =
    "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.jpg";
  return f.jsx("section", {
    id: "successHero",
    children: f.jsxs("div", {
      className: "flex flex-col lg:flex-row",
      children: [
        f.jsxs("div", {
          className: "w-[100%] relative lg:order-2 lg:w-[44.18%]",
          children: [
            f.jsx("img", {
              src: e,
              alt: "",
              className: "w-full relative z-10",
            }),
            f.jsx("img", {
              src: e,
              alt: "",
              className:
                "w-full absolute top-0 -left-3 scale-x-95 lg:scale-x-100 lg:scale-y-95 origin-top opacity-30",
            }),
          ],
        }),
        f.jsxs("div", {
          className:
            "p-[30px] space-y-[20px] lg:space-y-[1.250vw] lg:order-1 lg:w-[55.82%] lg:pt-[20vw] lg:pl-[6.6vw]",
          children: [
            f.jsxs("div", {
              className:
                "leading-[1] uppercase text-center lg:text-start lg:space-x-[6vw]",
              children: [
                f.jsxs("h1", {
                  className: "text-[46px] text-[#949494] lg:text-[4.375vw]",
                  children: ["What everyone", " "],
                }),
                f.jsx("p", {
                  className:
                    "text-[65.69px] font-Black leading-[0.88] text-heavyBlue lg:text-[6.375vw]",
                  children: "is saying",
                }),
              ],
            }),
            f.jsx("p", {
              className:
                "py-[50px] px-[30px] border-l-[10px] border-heavyBlue text-center text-[30px] leading-[1] text-[#333333] font-Bold lg:text-start lg:border-l-[0.625vw] lg:py-[4.875vw] lg:px-[2.438vw] lg:text-[1.875vw]",
              children: "Your success. Amplified.",
            }),
          ],
        }),
      ],
    }),
  });
}
function zN() {
  const { setSubsFixForm: e, setSubsForm: t } = Bt();
  return f.jsxs("section", {
    id: "success",
    children: [
      f.jsx(Xn, {}),
      f.jsxs("div", {
        onClick: () => {
          t(!1), e(!1);
        },
        children: [f.jsx(BN, {}), f.jsx(ON, {}), f.jsx(mi, {})],
      }),
      f.jsx(vi, {}),
    ],
  });
}
const VN = Cj([
  { path: "/", element: f.jsx(pN, {}) },
  { path: "/about", element: f.jsx(EN, {}) },
  { path: "/solutions", element: f.jsx(PN, {}) },
  { path: "/portfolio", element: f.jsx(CN, {}) },
  { path: "/blogs", element: f.jsx(MN, {}) },
  { path: "/vlogs", element: f.jsx(LN, {}) },
  { path: "/contact", element: f.jsx(UN, {}) },
  { path: "/success", element: f.jsx(zN, {}) },
]);
ru.createRoot(document.getElementById("root")).render(
  f.jsx(ae.StrictMode, { children: f.jsx(Ij, { router: VN }) })
);
