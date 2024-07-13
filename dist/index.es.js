import Pe, { useState as hr } from "react";
var Q = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function mr() {
  if (Oe) return $;
  Oe = 1;
  var s = Pe, d = Symbol.for("react.element"), l = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, g = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(w, h, _) {
    var E, j = {}, T = null, Y = null;
    _ !== void 0 && (T = "" + _), h.key !== void 0 && (T = "" + h.key), h.ref !== void 0 && (Y = h.ref);
    for (E in h) u.call(h, E) && !O.hasOwnProperty(E) && (j[E] = h[E]);
    if (w && w.defaultProps) for (E in h = w.defaultProps, h) j[E] === void 0 && (j[E] = h[E]);
    return { $$typeof: d, type: w, key: T, ref: Y, props: j, _owner: g.current };
  }
  return $.Fragment = l, $.jsx = S, $.jsxs = S, $;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function yr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Pe, d = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), w = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), re = Symbol.iterator, Ie = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[Ie];
      return typeof r == "function" ? r : null;
    }
    var C = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var c = t.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Fe = !1, We = !1, $e = !1, Ne = !1, Ye = !1, te;
    te = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === O || Ye || e === g || e === _ || e === E || Ne || e === Y || Fe || We || $e || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === j || e.$$typeof === S || e.$$typeof === w || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case l:
          return "Portal";
        case O:
          return "Profiler";
        case g:
          return "StrictMode";
        case _:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return ne(r) + ".Consumer";
          case S:
            var t = e;
            return ne(t._context) + ".Provider";
          case h:
            return Ve(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case T: {
            var i = e, c = i._payload, o = i._init;
            try {
              return x(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, D = 0, ae, oe, ie, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Me() {
      {
        if (D === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ue() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ae
            }),
            info: k({}, e, {
              value: oe
            }),
            warn: k({}, e, {
              value: ie
            }),
            error: k({}, e, {
              value: se
            }),
            group: k({}, e, {
              value: ue
            }),
            groupCollapsed: k({}, e, {
              value: le
            }),
            groupEnd: k({}, e, {
              value: ce
            })
          });
        }
        D < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = C.ReactCurrentDispatcher, B;
    function L(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var Z = !1, V;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      V = new ze();
    }
    function de(e, r) {
      if (!e || Z)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = z.current, z.current = null, Me();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), y = n.stack.split(`
`), v = a.length - 1, p = y.length - 1; v >= 1 && p >= 0 && a[v] !== y[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (a[v] !== y[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || a[v] !== y[p]) {
                    var R = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, R), R;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        Z = !1, z.current = c, Ue(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", P = A ? L(A) : "";
      return typeof e == "function" && V.set(e, P), P;
    }
    function Be(e, r, t) {
      return de(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ze(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case _:
          return L("Suspense");
        case E:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Be(e.render);
          case j:
            return M(e.type, r, t);
          case T: {
            var n = e, i = n._payload, c = n._init;
            try {
              return M(c(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, ve = {}, pe = C.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var c = Function.call.bind(F);
        for (var o in e)
          if (c(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (U(i), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, U(i), m("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var qe = Array.isArray;
    function J(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function me(e) {
      if (Ge(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), he(e);
    }
    var W = C.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, ge, q;
    q = {};
    function He(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = x(W.current.type);
        q[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(W.current.type), e.ref), q[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, c, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, i) {
      {
        var c, o = {}, a = null, y = null;
        t !== void 0 && (me(t), a = "" + t), Qe(r) && (me(r.key), a = "" + r.key), He(r) && (y = r.ref, er(r, i));
        for (c in r)
          F.call(r, c) && !Xe.hasOwnProperty(c) && (o[c] = r[c]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (c in v)
            o[c] === void 0 && (o[c] = v[c]);
        }
        if (a || y) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, p), y && tr(o, p);
        }
        return nr(e, a, y, i, n, W.current, o);
      }
    }
    var K = C.ReactCurrentOwner, be = C.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function Ee() {
      {
        if (K.current) {
          var e = x(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var Re = {};
    function ir(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + x(e._owner.type) + "."), I(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && _e(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ae(e);
          if (typeof i == "function" && i !== e.entries)
            for (var c = i.call(e), o; !(o = c.next()).done; )
              X(o.value) && _e(o.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = x(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var we = {};
    function je(e, r, t, n, i, c) {
      {
        var o = Le(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = or();
          y ? a += y : a += Ee();
          var v;
          e === null ? v = "null" : J(e) ? v = "array" : e !== void 0 && e.$$typeof === d ? (v = "<" + (x(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var p = ar(e, r, t, i, c);
        if (p == null)
          return p;
        if (o) {
          var R = r.children;
          if (R !== void 0)
            if (n)
              if (J(R)) {
                for (var A = 0; A < R.length; A++)
                  xe(R[A], e);
                Object.freeze && Object.freeze(R);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(R, e);
        }
        if (F.call(r, "key")) {
          var P = x(e), b = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), H = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[P + H]) {
            var vr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, P, vr, P), we[P + H] = !0;
          }
        }
        return e === u ? ur(p) : sr(p), p;
      }
    }
    function lr(e, r, t) {
      return je(e, r, t, !0);
    }
    function cr(e, r, t) {
      return je(e, r, t, !1);
    }
    var fr = cr, dr = lr;
    N.Fragment = u, N.jsx = fr, N.jsxs = dr;
  }()), N;
}
process.env.NODE_ENV === "production" ? Q.exports = mr() : Q.exports = yr();
var f = Q.exports;
function Ce(s) {
  var d, l, u = "";
  if (typeof s == "string" || typeof s == "number") u += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var g = s.length;
    for (d = 0; d < g; d++) s[d] && (l = Ce(s[d])) && (u && (u += " "), u += l);
  } else for (l in s) s[l] && (u && (u += " "), u += l);
  return u;
}
function ee() {
  for (var s, d, l = 0, u = "", g = arguments.length; l < g; l++) (s = arguments[l]) && (d = Ce(s)) && (u && (u += " "), u += d);
  return u;
}
const gr = ({ src: s }) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: ee(
      "absolute inset-0 z-0",
      "bg-gray-700 bg-opacity-50",
      "blur-xl",
      "scale-125"
    ),
    style: {
      backgroundImage: `url(${s})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
), Te = ({
  children: s,
  onClick: d
}) => /* @__PURE__ */ f.jsx("button", { type: "button", onClick: d, className: "text-white p-2", children: s }), br = () => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-zoom-in",
    children: [
      /* @__PURE__ */ f.jsx("title", { children: "Zoom In" }),
      /* @__PURE__ */ f.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ f.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ f.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      /* @__PURE__ */ f.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), Er = () => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-zoom-out",
    children: [
      /* @__PURE__ */ f.jsx("title", { children: "Zoom Out" }),
      /* @__PURE__ */ f.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ f.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ f.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), Rr = ({
  onZoomIn: s,
  onZoomOut: d,
  configuration: l
}) => {
  const u = l.zoomInIcon ?? /* @__PURE__ */ f.jsx(br, {}), g = l.zoomOutIcon ?? /* @__PURE__ */ f.jsx(Er, {});
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: ee(
        "flex flex-col absolute z-10 p-2 rounded-xl border border-gray-600/30 border-gray-200 fill-white",
        "bottom-0 right-0 mr-4 mb-4",
        "backdrop-blur-md backdrop-filter"
      ),
      children: [
        l.hasZoomIn && /* @__PURE__ */ f.jsx(Te, { onClick: s, children: u }),
        l.hasZoomOut && /* @__PURE__ */ f.jsx(Te, { onClick: d, children: g })
      ]
    }
  );
}, _r = ({ src: s, alt: d, state: l }) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: ee(
      "flex justify-center content-center bg-gray-700 w-full h-full z-5",
      "overflow-auto no-scrollbar"
    ),
    children: /* @__PURE__ */ f.jsx(
      "img",
      {
        alt: d ?? "Image Preview",
        src: s,
        className: "transition-all duration-150 ease-in-out",
        style: {
          transform: `scale(${l.scale})`
        }
      }
    )
  }
), ke = {
  viewer: {
    maxScale: 3,
    minScale: 0.5,
    scaleStep: 0.5
  },
  controllers: {
    hasZoomIn: !0,
    hasZoomOut: !0
  },
  options: {
    hasNoBackdrop: !0
  }
}, wr = ({
  src: s,
  alt: d,
  configuration: l
}) => {
  const u = {
    viewer: {
      ...ke.viewer,
      ...l == null ? void 0 : l.viewer
    },
    controllers: {
      ...ke.controllers,
      ...l == null ? void 0 : l.controllers
    }
  }, [g, O] = hr(1), S = () => {
    g >= u.viewer.maxScale || O((_) => _ + u.viewer.scaleStep);
  }, w = () => {
    g <= u.viewer.minScale || O((_) => _ - u.viewer.scaleStep);
  }, h = { scale: g };
  return /* @__PURE__ */ f.jsxs("div", { className: "w-[800px] h-[450px] relative overflow-hidden", children: [
    /* @__PURE__ */ f.jsx(gr, { src: s }),
    /* @__PURE__ */ f.jsx(
      Rr,
      {
        onZoomIn: S,
        onZoomOut: w,
        configuration: u.controllers
      }
    ),
    /* @__PURE__ */ f.jsx(_r, { src: s, alt: d, state: h })
  ] });
};
export {
  wr as ImageViewer
};
