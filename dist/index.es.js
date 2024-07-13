import "./style.css";
import ke, { useState as vr } from "react";
var Q = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function pr() {
  if (je) return W;
  je = 1;
  var d = ke, u = Symbol.for("react.element"), g = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, E = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(w, v, R) {
    var b, j = {}, T = null, Y = null;
    R !== void 0 && (T = "" + R), v.key !== void 0 && (T = "" + v.key), v.ref !== void 0 && (Y = v.ref);
    for (b in v) h.call(v, b) && !O.hasOwnProperty(b) && (j[b] = v[b]);
    if (w && w.defaultProps) for (b in v = w.defaultProps, v) j[b] === void 0 && (j[b] = v[b]);
    return { $$typeof: u, type: w, key: T, ref: Y, props: j, _owner: E.current };
  }
  return W.Fragment = g, W.jsx = S, W.jsxs = S, W;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function mr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var d = ke, u = Symbol.for("react.element"), g = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), w = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ee = Symbol.iterator, Pe = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var C = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var De = !1, Fe = !1, Ae = !1, $e = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === O || We || e === E || e === R || e === b || $e || e === Y || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === j || e.$$typeof === S || e.$$typeof === w || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case g:
          return "Portal";
        case O:
          return "Profiler";
        case E:
          return "StrictMode";
        case R:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return te(r) + ".Consumer";
          case S:
            var t = e;
            return te(t._context) + ".Provider";
          case v:
            return Ye(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case T: {
            var i = e, s = i._payload, o = i._init;
            try {
              return x(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, F = 0, ne, ae, oe, ie, se, ce, ue;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ce = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        F++;
      }
    }
    function Ne() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ne
            }),
            info: k({}, e, {
              value: ae
            }),
            warn: k({}, e, {
              value: oe
            }),
            error: k({}, e, {
              value: ie
            }),
            group: k({}, e, {
              value: se
            }),
            groupCollapsed: k({}, e, {
              value: ce
            }),
            groupEnd: k({}, e, {
              value: ue
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = C.ReactCurrentDispatcher, Z;
    function L(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var J = !1, N;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Me();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, Le();
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
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (y) {
              n = y;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), m = n.stack.split(`
`), l = a.length - 1, f = m.length - 1; l >= 1 && f >= 0 && a[l] !== m[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== m[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== m[f]) {
                    var _ = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, _), _;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        J = !1, B.current = s, Ne(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", P = D ? L(D) : "";
      return typeof e == "function" && N.set(e, P), P;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case R:
          return L("Suspense");
        case b:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ue(e.render);
          case j:
            return M(e.type, r, t);
          case T: {
            var n = e, i = n._payload, s = n._init;
            try {
              return M(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, de = {}, ve = C.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, i) {
      {
        var s = Function.call.bind(A);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (U(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, U(i), p("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Je = Array.isArray;
    function z(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function me(e) {
      if (qe(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), pe(e);
    }
    var $ = C.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ye, q;
    q = {};
    function Ke(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = x($.current.type);
        q[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x($.current.type), e.ref), q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          he || (he = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
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
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, m = null;
        t !== void 0 && (me(t), a = "" + t), Xe(r) && (me(r.key), a = "" + r.key), Ke(r) && (m = r.ref, He(r, i));
        for (s in r)
          A.call(r, s) && !Ge.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            o[s] === void 0 && (o[s] = l[s]);
        }
        if (a || m) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, f), m && er(o, f);
        }
        return rr(e, a, m, i, n, $.current, o);
      }
    }
    var G = C.ReactCurrentOwner, ge = C.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function be() {
      {
        if (G.current) {
          var e = x(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var _e = {};
    function ar(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + x(e._owner.type) + "."), I(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Ee(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ce(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              X(o.value) && Ee(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var i = x(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var xe = {};
    function we(e, r, t, n, i, s) {
      {
        var o = Ve(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = nr();
          m ? a += m : a += be();
          var l;
          e === null ? l = "null" : z(e) ? l = "array" : e !== void 0 && e.$$typeof === u ? (l = "<" + (x(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = tr(e, r, t, i, s);
        if (f == null)
          return f;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (z(_)) {
                for (var D = 0; D < _.length; D++)
                  Re(_[D], e);
                Object.freeze && Object.freeze(_);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(_, e);
        }
        if (A.call(r, "key")) {
          var P = x(e), y = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), H = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[P + H]) {
            var fr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, P, fr, P), xe[P + H] = !0;
          }
        }
        return e === h ? ir(f) : or(f), f;
      }
    }
    function sr(e, r, t) {
      return we(e, r, t, !0);
    }
    function cr(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = cr, lr = sr;
    V.Fragment = h, V.jsx = ur, V.jsxs = lr;
  }()), V;
}
process.env.NODE_ENV === "production" ? Q.exports = pr() : Q.exports = mr();
var c = Q.exports;
const hr = "-ftnbW_backdrop", yr = {
  backdrop: hr
}, gr = ({ src: d }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: yr.backdrop,
    style: {
      backgroundImage: `url(${d})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
), br = "_1p3Xka_button", _r = {
  button: br
}, Se = ({
  children: d,
  onClick: u
}) => /* @__PURE__ */ c.jsx("button", { type: "button", onClick: u, className: _r.button, children: d }), Er = "_PkWlW_controlsContainer", Rr = {
  controlsContainer: Er
}, xr = () => /* @__PURE__ */ c.jsxs(
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
    children: [
      /* @__PURE__ */ c.jsx("title", { children: "Zoom In" }),
      /* @__PURE__ */ c.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ c.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      /* @__PURE__ */ c.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), wr = () => /* @__PURE__ */ c.jsxs(
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
    children: [
      /* @__PURE__ */ c.jsx("title", { children: "Zoom Out" }),
      /* @__PURE__ */ c.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ c.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), jr = ({
  onZoomIn: d,
  onZoomOut: u,
  configuration: g
}) => {
  const h = g.zoomInIcon ?? /* @__PURE__ */ c.jsx(xr, {}), E = g.zoomOutIcon ?? /* @__PURE__ */ c.jsx(wr, {});
  return /* @__PURE__ */ c.jsxs("div", { className: Rr.controlsContainer, children: [
    g.hasZoomIn && /* @__PURE__ */ c.jsx(Se, { onClick: d, children: h }),
    g.hasZoomOut && /* @__PURE__ */ c.jsx(Se, { onClick: u, children: E })
  ] });
}, Or = "BTwb8q_imageViewerContainer", Sr = {
  imageViewerContainer: Or
}, Tr = "_01_JGa_container", kr = "_01_JGa_image", Te = {
  container: Tr,
  image: kr
}, Pr = ({ src: d, alt: u, state: g }) => /* @__PURE__ */ c.jsx("div", { className: Te.container, children: /* @__PURE__ */ c.jsx(
  "img",
  {
    alt: u ?? "Image Preview",
    src: d,
    className: Te.image,
    style: {
      width: `${g.scale * 100}%`,
      height: `${g.scale * 100}%`
    }
  }
) }), Cr = {
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
}, Ar = ({
  src: d,
  alt: u,
  configuration: g
}) => {
  const h = Ir(
    Cr,
    g
  ), [E, O] = vr(1), S = () => {
    E >= h.viewer.maxScale || O((R) => R + h.viewer.scaleStep);
  }, w = () => {
    E <= h.viewer.minScale || O((R) => R - h.viewer.scaleStep);
  }, v = { scale: E };
  return /* @__PURE__ */ c.jsxs("div", { className: Sr.imageViewerContainer, children: [
    /* @__PURE__ */ c.jsx(gr, { src: d }),
    /* @__PURE__ */ c.jsx(
      jr,
      {
        onZoomIn: S,
        onZoomOut: w,
        configuration: h.controllers
      }
    ),
    /* @__PURE__ */ c.jsx(Pr, { src: d, alt: u, state: v })
  ] });
}, Ir = (d, u) => ({
  viewer: {
    ...d.viewer,
    ...u == null ? void 0 : u.viewer
  },
  controllers: {
    ...d.controllers,
    ...u == null ? void 0 : u.controllers
  },
  options: {
    ...d.options,
    ...u == null ? void 0 : u.options
  }
});
export {
  Ar as ImageViewer
};
