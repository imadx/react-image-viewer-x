import "./style.css";
import yr, { useRef as ne, useState as br, useEffect as Ee } from "react";
var Le = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function st() {
  if (fr) return de;
  fr = 1;
  var e = yr, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, o, p) {
    var f, d = {}, m = null, O = null;
    p !== void 0 && (m = "" + p), o.key !== void 0 && (m = "" + o.key), o.ref !== void 0 && (O = o.ref);
    for (f in o) n.call(o, f) && !u.hasOwnProperty(f) && (d[f] = o[f]);
    if (l && l.defaultProps) for (f in o = l.defaultProps, o) d[f] === void 0 && (d[f] = o[f]);
    return { $$typeof: r, type: l, key: m, ref: O, props: d, _owner: i.current };
  }
  return de.Fragment = a, de.jsx = s, de.jsxs = s, de;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function ct() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = yr, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function S(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = y && t[y] || t[b];
      return typeof c == "function" ? c : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(t) {
      {
        for (var c = arguments.length, v = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          v[w - 1] = arguments[w];
        x("error", t, v);
      }
    }
    function x(t, c, v) {
      {
        var w = _.ReactDebugCurrentFrame, T = w.getStackAddendum();
        T !== "" && (c += "%s", v = v.concat([T]));
        var P = v.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, P);
      }
    }
    var I = !1, N = !1, C = !1, U = !1, ee = !1, Z;
    Z = Symbol.for("react.module.reference");
    function M(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === u || ee || t === i || t === p || t === f || U || t === O || I || N || C || typeof t == "object" && t !== null && (t.$$typeof === m || t.$$typeof === d || t.$$typeof === s || t.$$typeof === l || t.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Z || t.getModuleId !== void 0));
    }
    function K(t, c, v) {
      var w = t.displayName;
      if (w)
        return w;
      var T = c.displayName || c.name || "";
      return T !== "" ? v + "(" + T + ")" : v;
    }
    function re(t) {
      return t.displayName || "Context";
    }
    function D(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case u:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var c = t;
            return re(c) + ".Consumer";
          case s:
            var v = t;
            return re(v._context) + ".Provider";
          case o:
            return K(t, t.render, "ForwardRef");
          case d:
            var w = t.displayName || null;
            return w !== null ? w : D(t.type) || "Memo";
          case m: {
            var T = t, P = T._payload, R = T._init;
            try {
              return D(R(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, q = 0, pe, H, G, Q, oe, ue, se;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function me() {
      {
        if (q === 0) {
          pe = console.log, H = console.info, G = console.warn, Q = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        q++;
      }
    }
    function ce() {
      {
        if (q--, q === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, t, {
              value: pe
            }),
            info: W({}, t, {
              value: H
            }),
            warn: W({}, t, {
              value: G
            }),
            error: W({}, t, {
              value: Q
            }),
            group: W({}, t, {
              value: oe
            }),
            groupCollapsed: W({}, t, {
              value: ue
            }),
            groupEnd: W({}, t, {
              value: se
            })
          });
        }
        q < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = _.ReactCurrentDispatcher, Oe;
    function ye(t, c, v) {
      {
        if (Oe === void 0)
          try {
            throw Error();
          } catch (T) {
            var w = T.stack.trim().match(/\n( *(at )?)/);
            Oe = w && w[1] || "";
          }
        return `
` + Oe + t;
      }
    }
    var Se = !1, be;
    {
      var Lr = typeof WeakMap == "function" ? WeakMap : Map;
      be = new Lr();
    }
    function Ke(t, c) {
      if (!t || Se)
        return "";
      {
        var v = be.get(t);
        if (v !== void 0)
          return v;
      }
      var w;
      Se = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = fe.current, fe.current = null, me();
      try {
        if (c) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (V) {
              w = V;
            }
            Reflect.construct(t, [], R);
          } else {
            try {
              R.call();
            } catch (V) {
              w = V;
            }
            t.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            w = V;
          }
          t();
        }
      } catch (V) {
        if (V && w && typeof V.stack == "string") {
          for (var E = V.stack.split(`
`), L = w.stack.split(`
`), A = E.length - 1, F = L.length - 1; A >= 1 && F >= 0 && E[A] !== L[F]; )
            F--;
          for (; A >= 1 && F >= 0; A--, F--)
            if (E[A] !== L[F]) {
              if (A !== 1 || F !== 1)
                do
                  if (A--, F--, F < 0 || E[A] !== L[F]) {
                    var B = `
` + E[A].replace(" at new ", " at ");
                    return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), typeof t == "function" && be.set(t, B), B;
                  }
                while (A >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        Se = !1, fe.current = P, ce(), Error.prepareStackTrace = T;
      }
      var ie = t ? t.displayName || t.name : "", te = ie ? ye(ie) : "";
      return typeof t == "function" && be.set(t, te), te;
    }
    function Vr(t, c, v) {
      return Ke(t, !1);
    }
    function Br(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function xe(t, c, v) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ke(t, Br(t));
      if (typeof t == "string")
        return ye(t);
      switch (t) {
        case p:
          return ye("Suspense");
        case f:
          return ye("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case o:
            return Vr(t.render);
          case d:
            return xe(t.type, c, v);
          case m: {
            var w = t, T = w._payload, P = w._init;
            try {
              return xe(P(T), c, v);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, Ge = {}, Qe = _.ReactDebugCurrentFrame;
    function we(t) {
      if (t) {
        var c = t._owner, v = xe(t.type, t._source, c ? c.type : null);
        Qe.setExtraStackFrame(v);
      } else
        Qe.setExtraStackFrame(null);
    }
    function Wr(t, c, v, w, T) {
      {
        var P = Function.call.bind(le);
        for (var R in t)
          if (P(t, R)) {
            var E = void 0;
            try {
              if (typeof t[R] != "function") {
                var L = Error((w || "React class") + ": " + v + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              E = t[R](c, R, w, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              E = A;
            }
            E && !(E instanceof Error) && (we(T), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", v, R, typeof E), we(null)), E instanceof Error && !(E.message in Ge) && (Ge[E.message] = !0, we(T), h("Failed %s type: %s", v, E.message), we(null));
          }
      }
    }
    var $r = Array.isArray;
    function je(t) {
      return $r(t);
    }
    function Nr(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, v = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return v;
      }
    }
    function Yr(t) {
      try {
        return Xe(t), !1;
      } catch {
        return !0;
      }
    }
    function Xe(t) {
      return "" + t;
    }
    function er(t) {
      if (Yr(t))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nr(t)), Xe(t);
    }
    var ve = _.ReactCurrentOwner, zr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, ke;
    ke = {};
    function Ur(t) {
      if (le.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Zr(t) {
      if (le.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function qr(t, c) {
      if (typeof t.ref == "string" && ve.current && c && ve.current.stateNode !== c) {
        var v = D(ve.current.type);
        ke[v] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(ve.current.type), t.ref), ke[v] = !0);
      }
    }
    function Hr(t, c) {
      {
        var v = function() {
          rr || (rr = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Jr(t, c) {
      {
        var v = function() {
          tr || (tr = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Kr = function(t, c, v, w, T, P, R) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: v,
        props: R,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function Gr(t, c, v, w, T) {
      {
        var P, R = {}, E = null, L = null;
        v !== void 0 && (er(v), E = "" + v), Zr(c) && (er(c.key), E = "" + c.key), Ur(c) && (L = c.ref, qr(c, T));
        for (P in c)
          le.call(c, P) && !zr.hasOwnProperty(P) && (R[P] = c[P]);
        if (t && t.defaultProps) {
          var A = t.defaultProps;
          for (P in A)
            R[P] === void 0 && (R[P] = A[P]);
        }
        if (E || L) {
          var F = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          E && Hr(R, F), L && Jr(R, F);
        }
        return Kr(t, E, L, T, w, ve.current, R);
      }
    }
    var Ce = _.ReactCurrentOwner, nr = _.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var c = t._owner, v = xe(t.type, t._source, c ? c.type : null);
        nr.setExtraStackFrame(v);
      } else
        nr.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Me(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function ar() {
      {
        if (Ce.current) {
          var t = D(Ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Qr(t) {
      return "";
    }
    var ir = {};
    function Xr(t) {
      {
        var c = ar();
        if (!c) {
          var v = typeof t == "string" ? t : t.displayName || t.name;
          v && (c = `

Check the top-level render call using <` + v + ">.");
        }
        return c;
      }
    }
    function or(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var v = Xr(c);
        if (ir[v])
          return;
        ir[v] = !0;
        var w = "";
        t && t._owner && t._owner !== Ce.current && (w = " It was passed a child from " + D(t._owner.type) + "."), ae(t), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, w), ae(null);
      }
    }
    function ur(t, c) {
      {
        if (typeof t != "object")
          return;
        if (je(t))
          for (var v = 0; v < t.length; v++) {
            var w = t[v];
            Me(w) && or(w, c);
          }
        else if (Me(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var T = S(t);
          if (typeof T == "function" && T !== t.entries)
            for (var P = T.call(t), R; !(R = P.next()).done; )
              Me(R.value) && or(R.value, c);
        }
      }
    }
    function et(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var v;
        if (typeof c == "function")
          v = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === d))
          v = c.propTypes;
        else
          return;
        if (v) {
          var w = D(c);
          Wr(v, t.props, "prop", w, t);
        } else if (c.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var T = D(c);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(t) {
      {
        for (var c = Object.keys(t.props), v = 0; v < c.length; v++) {
          var w = c[v];
          if (w !== "children" && w !== "key") {
            ae(t), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), ae(null);
            break;
          }
        }
        t.ref !== null && (ae(t), h("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    var sr = {};
    function cr(t, c, v, w, T, P) {
      {
        var R = M(t);
        if (!R) {
          var E = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Qr();
          L ? E += L : E += ar();
          var A;
          t === null ? A = "null" : je(t) ? A = "array" : t !== void 0 && t.$$typeof === r ? (A = "<" + (D(t.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : A = typeof t, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, E);
        }
        var F = Gr(t, c, v, T, P);
        if (F == null)
          return F;
        if (R) {
          var B = c.children;
          if (B !== void 0)
            if (w)
              if (je(B)) {
                for (var ie = 0; ie < B.length; ie++)
                  ur(B[ie], t);
                Object.freeze && Object.freeze(B);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(B, t);
        }
        if (le.call(c, "key")) {
          var te = D(t), V = Object.keys(c).filter(function(ut) {
            return ut !== "key";
          }), De = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[te + De]) {
            var ot = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, De, te, ot, te), sr[te + De] = !0;
          }
        }
        return t === n ? rt(F) : et(F), F;
      }
    }
    function tt(t, c, v) {
      return cr(t, c, v, !0);
    }
    function nt(t, c, v) {
      return cr(t, c, v, !1);
    }
    var at = nt, it = tt;
    he.Fragment = n, he.jsx = at, he.jsxs = it;
  }()), he;
}
process.env.NODE_ENV === "production" ? Le.exports = st() : Le.exports = ct();
var j = Le.exports;
const ft = "-ftnbW_backdrop", lt = {
  backdrop: ft
}, vt = ({ src: e }) => /* @__PURE__ */ j.jsx(
  "div",
  {
    className: lt.backdrop,
    style: {
      backgroundImage: `url(${e})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
), dt = "_1p3Xka_button", ht = {
  button: dt
}, vr = ({
  children: e,
  onClick: r
}) => /* @__PURE__ */ j.jsx("button", { type: "button", onClick: r, className: ht.button, children: e }), gt = "_PkWlW_controlsContainer", pt = {
  controlsContainer: gt
}, mt = () => /* @__PURE__ */ j.jsxs(
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
      /* @__PURE__ */ j.jsx("title", { children: "Zoom In" }),
      /* @__PURE__ */ j.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ j.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ j.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      /* @__PURE__ */ j.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), yt = () => /* @__PURE__ */ j.jsxs(
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
      /* @__PURE__ */ j.jsx("title", { children: "Zoom Out" }),
      /* @__PURE__ */ j.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ j.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ j.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), bt = ({
  onZoomIn: e,
  onZoomOut: r,
  configuration: a
}) => {
  const n = a.zoomInIcon ?? /* @__PURE__ */ j.jsx(mt, {}), i = a.zoomOutIcon ?? /* @__PURE__ */ j.jsx(yt, {});
  return /* @__PURE__ */ j.jsxs("div", { className: pt.controlsContainer, children: [
    a.hasZoomIn && /* @__PURE__ */ j.jsx(vr, { onClick: e, children: n }),
    a.hasZoomOut && /* @__PURE__ */ j.jsx(vr, { onClick: r, children: i })
  ] });
}, xt = "BTwb8q_imageViewerContainer", wt = {
  imageViewerContainer: xt
};
var xr = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: "normal",
  autoplay: !0,
  timelineOffset: 0
}, We = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, Et = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], Re = {
  CSS: {},
  springs: {}
};
function Y(e, r, a) {
  return Math.min(Math.max(e, r), a);
}
function ge(e, r) {
  return e.indexOf(r) > -1;
}
function Ae(e, r) {
  return e.apply(null, r);
}
var g = {
  arr: function(e) {
    return Array.isArray(e);
  },
  obj: function(e) {
    return ge(Object.prototype.toString.call(e), "Object");
  },
  pth: function(e) {
    return g.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function(e) {
    return e instanceof SVGElement;
  },
  inp: function(e) {
    return e instanceof HTMLInputElement;
  },
  dom: function(e) {
    return e.nodeType || g.svg(e);
  },
  str: function(e) {
    return typeof e == "string";
  },
  fnc: function(e) {
    return typeof e == "function";
  },
  und: function(e) {
    return typeof e > "u";
  },
  nil: function(e) {
    return g.und(e) || e === null;
  },
  hex: function(e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function(e) {
    return /^rgb/.test(e);
  },
  hsl: function(e) {
    return /^hsl/.test(e);
  },
  col: function(e) {
    return g.hex(e) || g.rgb(e) || g.hsl(e);
  },
  key: function(e) {
    return !xr.hasOwnProperty(e) && !We.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  }
};
function wr(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r ? r[1].split(",").map(function(a) {
    return parseFloat(a);
  }) : [];
}
function Er(e, r) {
  var a = wr(e), n = Y(g.und(a[0]) ? 1 : a[0], 0.1, 100), i = Y(g.und(a[1]) ? 100 : a[1], 0.1, 100), u = Y(g.und(a[2]) ? 10 : a[2], 0.1, 100), s = Y(g.und(a[3]) ? 0 : a[3], 0.1, 100), l = Math.sqrt(i / n), o = u / (2 * Math.sqrt(i * n)), p = o < 1 ? l * Math.sqrt(1 - o * o) : 0, f = 1, d = o < 1 ? (o * l + -s) / p : -s + l;
  function m(y) {
    var b = r ? r * y / 1e3 : y;
    return o < 1 ? b = Math.exp(-b * o * l) * (f * Math.cos(p * b) + d * Math.sin(p * b)) : b = (f + d * b) * Math.exp(-b * l), y === 0 || y === 1 ? y : 1 - b;
  }
  function O() {
    var y = Re.springs[e];
    if (y)
      return y;
    for (var b = 1 / 6, S = 0, _ = 0; ; )
      if (S += b, m(S) === 1) {
        if (_++, _ >= 16)
          break;
      } else
        _ = 0;
    var h = S * b * 1e3;
    return Re.springs[e] = h, h;
  }
  return r ? m : O;
}
function Rt(e) {
  return e === void 0 && (e = 10), function(r) {
    return Math.ceil(Y(r, 1e-6, 1) * e) * (1 / e);
  };
}
var Tt = function() {
  var e = 11, r = 1 / (e - 1);
  function a(f, d) {
    return 1 - 3 * d + 3 * f;
  }
  function n(f, d) {
    return 3 * d - 6 * f;
  }
  function i(f) {
    return 3 * f;
  }
  function u(f, d, m) {
    return ((a(d, m) * f + n(d, m)) * f + i(d)) * f;
  }
  function s(f, d, m) {
    return 3 * a(d, m) * f * f + 2 * n(d, m) * f + i(d);
  }
  function l(f, d, m, O, y) {
    var b, S, _ = 0;
    do
      S = d + (m - d) / 2, b = u(S, O, y) - f, b > 0 ? m = S : d = S;
    while (Math.abs(b) > 1e-7 && ++_ < 10);
    return S;
  }
  function o(f, d, m, O) {
    for (var y = 0; y < 4; ++y) {
      var b = s(d, m, O);
      if (b === 0)
        return d;
      var S = u(d, m, O) - f;
      d -= S / b;
    }
    return d;
  }
  function p(f, d, m, O) {
    if (!(0 <= f && f <= 1 && 0 <= m && m <= 1))
      return;
    var y = new Float32Array(e);
    if (f !== d || m !== O)
      for (var b = 0; b < e; ++b)
        y[b] = u(b * r, f, m);
    function S(_) {
      for (var h = 0, x = 1, I = e - 1; x !== I && y[x] <= _; ++x)
        h += r;
      --x;
      var N = (_ - y[x]) / (y[x + 1] - y[x]), C = h + N * r, U = s(C, f, m);
      return U >= 1e-3 ? o(_, C, f, m) : U === 0 ? C : l(_, h, h + r, f, m);
    }
    return function(_) {
      return f === d && m === O || _ === 0 || _ === 1 ? _ : u(S(_), d, O);
    };
  }
  return p;
}(), Rr = function() {
  var e = { linear: function() {
    return function(n) {
      return n;
    };
  } }, r = {
    Sine: function() {
      return function(n) {
        return 1 - Math.cos(n * Math.PI / 2);
      };
    },
    Expo: function() {
      return function(n) {
        return n ? Math.pow(2, 10 * n - 10) : 0;
      };
    },
    Circ: function() {
      return function(n) {
        return 1 - Math.sqrt(1 - n * n);
      };
    },
    Back: function() {
      return function(n) {
        return n * n * (3 * n - 2);
      };
    },
    Bounce: function() {
      return function(n) {
        for (var i, u = 4; n < ((i = Math.pow(2, --u)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - u) - 7.5625 * Math.pow((i * 3 - 2) / 22 - n, 2);
      };
    },
    Elastic: function(n, i) {
      n === void 0 && (n = 1), i === void 0 && (i = 0.5);
      var u = Y(n, 1, 10), s = Y(i, 0.1, 2);
      return function(l) {
        return l === 0 || l === 1 ? l : -u * Math.pow(2, 10 * (l - 1)) * Math.sin((l - 1 - s / (Math.PI * 2) * Math.asin(1 / u)) * (Math.PI * 2) / s);
      };
    }
  }, a = ["Quad", "Cubic", "Quart", "Quint"];
  return a.forEach(function(n, i) {
    r[n] = function() {
      return function(u) {
        return Math.pow(u, i + 2);
      };
    };
  }), Object.keys(r).forEach(function(n) {
    var i = r[n];
    e["easeIn" + n] = i, e["easeOut" + n] = function(u, s) {
      return function(l) {
        return 1 - i(u, s)(1 - l);
      };
    }, e["easeInOut" + n] = function(u, s) {
      return function(l) {
        return l < 0.5 ? i(u, s)(l * 2) / 2 : 1 - i(u, s)(l * -2 + 2) / 2;
      };
    }, e["easeOutIn" + n] = function(u, s) {
      return function(l) {
        return l < 0.5 ? (1 - i(u, s)(1 - l * 2)) / 2 : (i(u, s)(l * 2 - 1) + 1) / 2;
      };
    };
  }), e;
}();
function $e(e, r) {
  if (g.fnc(e))
    return e;
  var a = e.split("(")[0], n = Rr[a], i = wr(e);
  switch (a) {
    case "spring":
      return Er(e, r);
    case "cubicBezier":
      return Ae(Tt, i);
    case "steps":
      return Ae(Rt, i);
    default:
      return Ae(n, i);
  }
}
function Tr(e) {
  try {
    var r = document.querySelectorAll(e);
    return r;
  } catch {
    return;
  }
}
function Te(e, r) {
  for (var a = e.length, n = arguments.length >= 2 ? arguments[1] : void 0, i = [], u = 0; u < a; u++)
    if (u in e) {
      var s = e[u];
      r.call(n, s, u, e) && i.push(s);
    }
  return i;
}
function _e(e) {
  return e.reduce(function(r, a) {
    return r.concat(g.arr(a) ? _e(a) : a);
  }, []);
}
function dr(e) {
  return g.arr(e) ? e : (g.str(e) && (e = Tr(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function Ne(e, r) {
  return e.some(function(a) {
    return a === r;
  });
}
function Ye(e) {
  var r = {};
  for (var a in e)
    r[a] = e[a];
  return r;
}
function Ve(e, r) {
  var a = Ye(e);
  for (var n in e)
    a[n] = r.hasOwnProperty(n) ? r[n] : e[n];
  return a;
}
function Pe(e, r) {
  var a = Ye(e);
  for (var n in r)
    a[n] = g.und(e[n]) ? r[n] : e[n];
  return a;
}
function _t(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? "rgba(" + r[1] + ",1)" : e;
}
function Pt(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, a = e.replace(r, function(l, o, p, f) {
    return o + o + p + p + f + f;
  }), n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a), i = parseInt(n[1], 16), u = parseInt(n[2], 16), s = parseInt(n[3], 16);
  return "rgba(" + i + "," + u + "," + s + ",1)";
}
function Ot(e) {
  var r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), a = parseInt(r[1], 10) / 360, n = parseInt(r[2], 10) / 100, i = parseInt(r[3], 10) / 100, u = r[4] || 1;
  function s(m, O, y) {
    return y < 0 && (y += 1), y > 1 && (y -= 1), y < 1 / 6 ? m + (O - m) * 6 * y : y < 1 / 2 ? O : y < 2 / 3 ? m + (O - m) * (2 / 3 - y) * 6 : m;
  }
  var l, o, p;
  if (n == 0)
    l = o = p = i;
  else {
    var f = i < 0.5 ? i * (1 + n) : i + n - i * n, d = 2 * i - f;
    l = s(d, f, a + 1 / 3), o = s(d, f, a), p = s(d, f, a - 1 / 3);
  }
  return "rgba(" + l * 255 + "," + o * 255 + "," + p * 255 + "," + u + ")";
}
function St(e) {
  if (g.rgb(e))
    return _t(e);
  if (g.hex(e))
    return Pt(e);
  if (g.hsl(e))
    return Ot(e);
}
function J(e) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (r)
    return r[1];
}
function jt(e) {
  if (ge(e, "translate") || e === "perspective")
    return "px";
  if (ge(e, "rotate") || ge(e, "skew"))
    return "deg";
}
function Be(e, r) {
  return g.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function z(e, r) {
  return e.getAttribute(r);
}
function ze(e, r, a) {
  var n = J(r);
  if (Ne([a, "deg", "rad", "turn"], n))
    return r;
  var i = Re.CSS[r + a];
  if (!g.und(i))
    return i;
  var u = 100, s = document.createElement(e.tagName), l = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  l.appendChild(s), s.style.position = "absolute", s.style.width = u + a;
  var o = u / s.offsetWidth;
  l.removeChild(s);
  var p = o * parseFloat(r);
  return Re.CSS[r + a] = p, p;
}
function _r(e, r, a) {
  if (r in e.style) {
    var n = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), i = e.style[r] || getComputedStyle(e).getPropertyValue(n) || "0";
    return a ? ze(e, i, a) : i;
  }
}
function Ue(e, r) {
  if (g.dom(e) && !g.inp(e) && (!g.nil(z(e, r)) || g.svg(e) && e[r]))
    return "attribute";
  if (g.dom(e) && Ne(Et, r))
    return "transform";
  if (g.dom(e) && r !== "transform" && _r(e, r))
    return "css";
  if (e[r] != null)
    return "object";
}
function Pr(e) {
  if (g.dom(e)) {
    for (var r = e.style.transform || "", a = /(\w+)\(([^)]*)\)/g, n = /* @__PURE__ */ new Map(), i; i = a.exec(r); )
      n.set(i[1], i[2]);
    return n;
  }
}
function kt(e, r, a, n) {
  var i = ge(r, "scale") ? 1 : 0 + jt(r), u = Pr(e).get(r) || i;
  return a && (a.transforms.list.set(r, u), a.transforms.last = r), n ? ze(e, u, n) : u;
}
function Ze(e, r, a, n) {
  switch (Ue(e, r)) {
    case "transform":
      return kt(e, r, n, a);
    case "css":
      return _r(e, r, a);
    case "attribute":
      return z(e, r);
    default:
      return e[r] || 0;
  }
}
function qe(e, r) {
  var a = /^(\*=|\+=|-=)/.exec(e);
  if (!a)
    return e;
  var n = J(e) || 0, i = parseFloat(r), u = parseFloat(e.replace(a[0], ""));
  switch (a[0][0]) {
    case "+":
      return i + u + n;
    case "-":
      return i - u + n;
    case "*":
      return i * u + n;
  }
}
function Or(e, r) {
  if (g.col(e))
    return St(e);
  if (/\s/g.test(e))
    return e;
  var a = J(e), n = a ? e.substr(0, e.length - a.length) : e;
  return r ? n + r : n;
}
function He(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function Ct(e) {
  return Math.PI * 2 * z(e, "r");
}
function It(e) {
  return z(e, "width") * 2 + z(e, "height") * 2;
}
function Mt(e) {
  return He(
    { x: z(e, "x1"), y: z(e, "y1") },
    { x: z(e, "x2"), y: z(e, "y2") }
  );
}
function Sr(e) {
  for (var r = e.points, a = 0, n, i = 0; i < r.numberOfItems; i++) {
    var u = r.getItem(i);
    i > 0 && (a += He(n, u)), n = u;
  }
  return a;
}
function Dt(e) {
  var r = e.points;
  return Sr(e) + He(r.getItem(r.numberOfItems - 1), r.getItem(0));
}
function jr(e) {
  if (e.getTotalLength)
    return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return Ct(e);
    case "rect":
      return It(e);
    case "line":
      return Mt(e);
    case "polyline":
      return Sr(e);
    case "polygon":
      return Dt(e);
  }
}
function At(e) {
  var r = jr(e);
  return e.setAttribute("stroke-dasharray", r), r;
}
function Ft(e) {
  for (var r = e.parentNode; g.svg(r) && g.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function kr(e, r) {
  var a = r || {}, n = a.el || Ft(e), i = n.getBoundingClientRect(), u = z(n, "viewBox"), s = i.width, l = i.height, o = a.viewBox || (u ? u.split(" ") : [0, 0, s, l]);
  return {
    el: n,
    viewBox: o,
    x: o[0] / 1,
    y: o[1] / 1,
    w: s,
    h: l,
    vW: o[2],
    vH: o[3]
  };
}
function Lt(e, r) {
  var a = g.str(e) ? Tr(e)[0] : e, n = r || 100;
  return function(i) {
    return {
      property: i,
      el: a,
      svg: kr(a),
      totalLength: jr(a) * (n / 100)
    };
  };
}
function Vt(e, r, a) {
  function n(f) {
    f === void 0 && (f = 0);
    var d = r + f >= 1 ? r + f : 0;
    return e.el.getPointAtLength(d);
  }
  var i = kr(e.el, e.svg), u = n(), s = n(-1), l = n(1), o = a ? 1 : i.w / i.vW, p = a ? 1 : i.h / i.vH;
  switch (e.property) {
    case "x":
      return (u.x - i.x) * o;
    case "y":
      return (u.y - i.y) * p;
    case "angle":
      return Math.atan2(l.y - s.y, l.x - s.x) * 180 / Math.PI;
  }
}
function hr(e, r) {
  var a = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, n = Or(g.pth(e) ? e.totalLength : e, r) + "";
  return {
    original: n,
    numbers: n.match(a) ? n.match(a).map(Number) : [0],
    strings: g.str(e) || r ? n.split(a) : []
  };
}
function Je(e) {
  var r = e ? _e(g.arr(e) ? e.map(dr) : dr(e)) : [];
  return Te(r, function(a, n, i) {
    return i.indexOf(a) === n;
  });
}
function Cr(e) {
  var r = Je(e);
  return r.map(function(a, n) {
    return { target: a, id: n, total: r.length, transforms: { list: Pr(a) } };
  });
}
function Bt(e, r) {
  var a = Ye(r);
  if (/^spring/.test(a.easing) && (a.duration = Er(a.easing)), g.arr(e)) {
    var n = e.length, i = n === 2 && !g.obj(e[0]);
    i ? e = { value: e } : g.fnc(r.duration) || (a.duration = r.duration / n);
  }
  var u = g.arr(e) ? e : [e];
  return u.map(function(s, l) {
    var o = g.obj(s) && !g.pth(s) ? s : { value: s };
    return g.und(o.delay) && (o.delay = l ? 0 : r.delay), g.und(o.endDelay) && (o.endDelay = l === u.length - 1 ? r.endDelay : 0), o;
  }).map(function(s) {
    return Pe(s, a);
  });
}
function Wt(e) {
  for (var r = Te(_e(e.map(function(u) {
    return Object.keys(u);
  })), function(u) {
    return g.key(u);
  }).reduce(function(u, s) {
    return u.indexOf(s) < 0 && u.push(s), u;
  }, []), a = {}, n = function(u) {
    var s = r[u];
    a[s] = e.map(function(l) {
      var o = {};
      for (var p in l)
        g.key(p) ? p == s && (o.value = l[p]) : o[p] = l[p];
      return o;
    });
  }, i = 0; i < r.length; i++) n(i);
  return a;
}
function $t(e, r) {
  var a = [], n = r.keyframes;
  n && (r = Pe(Wt(n), r));
  for (var i in r)
    g.key(i) && a.push({
      name: i,
      tweens: Bt(r[i], e)
    });
  return a;
}
function Nt(e, r) {
  var a = {};
  for (var n in e) {
    var i = Be(e[n], r);
    g.arr(i) && (i = i.map(function(u) {
      return Be(u, r);
    }), i.length === 1 && (i = i[0])), a[n] = i;
  }
  return a.duration = parseFloat(a.duration), a.delay = parseFloat(a.delay), a;
}
function Yt(e, r) {
  var a;
  return e.tweens.map(function(n) {
    var i = Nt(n, r), u = i.value, s = g.arr(u) ? u[1] : u, l = J(s), o = Ze(r.target, e.name, l, r), p = a ? a.to.original : o, f = g.arr(u) ? u[0] : p, d = J(f) || J(o), m = l || d;
    return g.und(s) && (s = p), i.from = hr(f, m), i.to = hr(qe(s, f), m), i.start = a ? a.end : 0, i.end = i.start + i.delay + i.duration + i.endDelay, i.easing = $e(i.easing, i.duration), i.isPath = g.pth(u), i.isPathTargetInsideSVG = i.isPath && g.svg(r.target), i.isColor = g.col(i.from.original), i.isColor && (i.round = 1), a = i, i;
  });
}
var Ir = {
  css: function(e, r, a) {
    return e.style[r] = a;
  },
  attribute: function(e, r, a) {
    return e.setAttribute(r, a);
  },
  object: function(e, r, a) {
    return e[r] = a;
  },
  transform: function(e, r, a, n, i) {
    if (n.list.set(r, a), r === n.last || i) {
      var u = "";
      n.list.forEach(function(s, l) {
        u += l + "(" + s + ") ";
      }), e.style.transform = u;
    }
  }
};
function Mr(e, r) {
  var a = Cr(e);
  a.forEach(function(n) {
    for (var i in r) {
      var u = Be(r[i], n), s = n.target, l = J(u), o = Ze(s, i, l, n), p = l || J(o), f = qe(Or(u, p), o), d = Ue(s, i);
      Ir[d](s, i, f, n.transforms, !0);
    }
  });
}
function zt(e, r) {
  var a = Ue(e.target, r.name);
  if (a) {
    var n = Yt(r, e), i = n[n.length - 1];
    return {
      type: a,
      property: r.name,
      animatable: e,
      tweens: n,
      duration: i.end,
      delay: n[0].delay,
      endDelay: i.endDelay
    };
  }
}
function Ut(e, r) {
  return Te(_e(e.map(function(a) {
    return r.map(function(n) {
      return zt(a, n);
    });
  })), function(a) {
    return !g.und(a);
  });
}
function Dr(e, r) {
  var a = e.length, n = function(u) {
    return u.timelineOffset ? u.timelineOffset : 0;
  }, i = {};
  return i.duration = a ? Math.max.apply(Math, e.map(function(u) {
    return n(u) + u.duration;
  })) : r.duration, i.delay = a ? Math.min.apply(Math, e.map(function(u) {
    return n(u) + u.delay;
  })) : r.delay, i.endDelay = a ? i.duration - Math.max.apply(Math, e.map(function(u) {
    return n(u) + u.duration - u.endDelay;
  })) : r.endDelay, i;
}
var gr = 0;
function Zt(e) {
  var r = Ve(xr, e), a = Ve(We, e), n = $t(a, e), i = Cr(e.targets), u = Ut(i, n), s = Dr(u, a), l = gr;
  return gr++, Pe(r, {
    id: l,
    children: [],
    animatables: i,
    animations: u,
    duration: s.duration,
    delay: s.delay,
    endDelay: s.endDelay
  });
}
var $ = [], Ar = function() {
  var e;
  function r() {
    !e && (!pr() || !k.suspendWhenDocumentHidden) && $.length > 0 && (e = requestAnimationFrame(a));
  }
  function a(i) {
    for (var u = $.length, s = 0; s < u; ) {
      var l = $[s];
      l.paused ? ($.splice(s, 1), u--) : (l.tick(i), s++);
    }
    e = s > 0 ? requestAnimationFrame(a) : void 0;
  }
  function n() {
    k.suspendWhenDocumentHidden && (pr() ? e = cancelAnimationFrame(e) : ($.forEach(
      function(i) {
        return i._onDocumentVisibility();
      }
    ), Ar()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", n), r;
}();
function pr() {
  return !!document && document.hidden;
}
function k(e) {
  e === void 0 && (e = {});
  var r = 0, a = 0, n = 0, i, u = 0, s = null;
  function l(h) {
    var x = window.Promise && new Promise(function(I) {
      return s = I;
    });
    return h.finished = x, x;
  }
  var o = Zt(e);
  l(o);
  function p() {
    var h = o.direction;
    h !== "alternate" && (o.direction = h !== "normal" ? "normal" : "reverse"), o.reversed = !o.reversed, i.forEach(function(x) {
      return x.reversed = o.reversed;
    });
  }
  function f(h) {
    return o.reversed ? o.duration - h : h;
  }
  function d() {
    r = 0, a = f(o.currentTime) * (1 / k.speed);
  }
  function m(h, x) {
    x && x.seek(h - x.timelineOffset);
  }
  function O(h) {
    if (o.reversePlayback)
      for (var I = u; I--; )
        m(h, i[I]);
    else
      for (var x = 0; x < u; x++)
        m(h, i[x]);
  }
  function y(h) {
    for (var x = 0, I = o.animations, N = I.length; x < N; ) {
      var C = I[x], U = C.animatable, ee = C.tweens, Z = ee.length - 1, M = ee[Z];
      Z && (M = Te(ee, function(fe) {
        return h < fe.end;
      })[0] || M);
      for (var K = Y(h - M.start - M.delay, 0, M.duration) / M.duration, re = isNaN(K) ? 1 : M.easing(K), D = M.to.strings, W = M.round, q = [], pe = M.to.numbers.length, H = void 0, G = 0; G < pe; G++) {
        var Q = void 0, oe = M.to.numbers[G], ue = M.from.numbers[G] || 0;
        M.isPath ? Q = Vt(M.value, re * oe, M.isPathTargetInsideSVG) : Q = ue + re * (oe - ue), W && (M.isColor && G > 2 || (Q = Math.round(Q * W) / W)), q.push(Q);
      }
      var se = D.length;
      if (!se)
        H = q[0];
      else {
        H = D[0];
        for (var X = 0; X < se; X++) {
          D[X];
          var me = D[X + 1], ce = q[X];
          isNaN(ce) || (me ? H += ce + me : H += ce + " ");
        }
      }
      Ir[C.type](U.target, C.property, H, U.transforms), C.currentValue = H, x++;
    }
  }
  function b(h) {
    o[h] && !o.passThrough && o[h](o);
  }
  function S() {
    o.remaining && o.remaining !== !0 && o.remaining--;
  }
  function _(h) {
    var x = o.duration, I = o.delay, N = x - o.endDelay, C = f(h);
    o.progress = Y(C / x * 100, 0, 100), o.reversePlayback = C < o.currentTime, i && O(C), !o.began && o.currentTime > 0 && (o.began = !0, b("begin")), !o.loopBegan && o.currentTime > 0 && (o.loopBegan = !0, b("loopBegin")), C <= I && o.currentTime !== 0 && y(0), (C >= N && o.currentTime !== x || !x) && y(x), C > I && C < N ? (o.changeBegan || (o.changeBegan = !0, o.changeCompleted = !1, b("changeBegin")), b("change"), y(C)) : o.changeBegan && (o.changeCompleted = !0, o.changeBegan = !1, b("changeComplete")), o.currentTime = Y(C, 0, x), o.began && b("update"), h >= x && (a = 0, S(), o.remaining ? (r = n, b("loopComplete"), o.loopBegan = !1, o.direction === "alternate" && p()) : (o.paused = !0, o.completed || (o.completed = !0, b("loopComplete"), b("complete"), !o.passThrough && "Promise" in window && (s(), l(o)))));
  }
  return o.reset = function() {
    var h = o.direction;
    o.passThrough = !1, o.currentTime = 0, o.progress = 0, o.paused = !0, o.began = !1, o.loopBegan = !1, o.changeBegan = !1, o.completed = !1, o.changeCompleted = !1, o.reversePlayback = !1, o.reversed = h === "reverse", o.remaining = o.loop, i = o.children, u = i.length;
    for (var x = u; x--; )
      o.children[x].reset();
    (o.reversed && o.loop !== !0 || h === "alternate" && o.loop === 1) && o.remaining++, y(o.reversed ? o.duration : 0);
  }, o._onDocumentVisibility = d, o.set = function(h, x) {
    return Mr(h, x), o;
  }, o.tick = function(h) {
    n = h, r || (r = n), _((n + (a - r)) * k.speed);
  }, o.seek = function(h) {
    _(f(h));
  }, o.pause = function() {
    o.paused = !0, d();
  }, o.play = function() {
    o.paused && (o.completed && o.reset(), o.paused = !1, $.push(o), d(), Ar());
  }, o.reverse = function() {
    p(), o.completed = !o.reversed, d();
  }, o.restart = function() {
    o.reset(), o.play();
  }, o.remove = function(h) {
    var x = Je(h);
    Fr(x, o);
  }, o.reset(), o.autoplay && o.play(), o;
}
function mr(e, r) {
  for (var a = r.length; a--; )
    Ne(e, r[a].animatable.target) && r.splice(a, 1);
}
function Fr(e, r) {
  var a = r.animations, n = r.children;
  mr(e, a);
  for (var i = n.length; i--; ) {
    var u = n[i], s = u.animations;
    mr(e, s), !s.length && !u.children.length && n.splice(i, 1);
  }
  !a.length && !n.length && r.pause();
}
function qt(e) {
  for (var r = Je(e), a = $.length; a--; ) {
    var n = $[a];
    Fr(r, n);
  }
}
function Ht(e, r) {
  r === void 0 && (r = {});
  var a = r.direction || "normal", n = r.easing ? $e(r.easing) : null, i = r.grid, u = r.axis, s = r.from || 0, l = s === "first", o = s === "center", p = s === "last", f = g.arr(e), d = parseFloat(f ? e[0] : e), m = f ? parseFloat(e[1]) : 0, O = J(f ? e[1] : e) || 0, y = r.start || 0 + (f ? d : 0), b = [], S = 0;
  return function(_, h, x) {
    if (l && (s = 0), o && (s = (x - 1) / 2), p && (s = x - 1), !b.length) {
      for (var I = 0; I < x; I++) {
        if (!i)
          b.push(Math.abs(s - I));
        else {
          var N = o ? (i[0] - 1) / 2 : s % i[0], C = o ? (i[1] - 1) / 2 : Math.floor(s / i[0]), U = I % i[0], ee = Math.floor(I / i[0]), Z = N - U, M = C - ee, K = Math.sqrt(Z * Z + M * M);
          u === "x" && (K = -Z), u === "y" && (K = -M), b.push(K);
        }
        S = Math.max.apply(Math, b);
      }
      n && (b = b.map(function(D) {
        return n(D / S) * S;
      })), a === "reverse" && (b = b.map(function(D) {
        return u ? D < 0 ? D * -1 : -D : Math.abs(S - D);
      }));
    }
    var re = f ? (m - d) / S : d;
    return y + re * (Math.round(b[h] * 100) / 100) + O;
  };
}
function Jt(e) {
  e === void 0 && (e = {});
  var r = k(e);
  return r.duration = 0, r.add = function(a, n) {
    var i = $.indexOf(r), u = r.children;
    i > -1 && $.splice(i, 1);
    function s(m) {
      m.passThrough = !0;
    }
    for (var l = 0; l < u.length; l++)
      s(u[l]);
    var o = Pe(a, Ve(We, e));
    o.targets = o.targets || e.targets;
    var p = r.duration;
    o.autoplay = !1, o.direction = r.direction, o.timelineOffset = g.und(n) ? p : qe(n, p), s(r), r.seek(o.timelineOffset);
    var f = k(o);
    s(f), u.push(f);
    var d = Dr(u, e);
    return r.delay = d.delay, r.endDelay = d.endDelay, r.duration = d.duration, r.seek(0), r.reset(), r.autoplay && r.play(), r;
  }, r;
}
k.version = "3.2.1";
k.speed = 1;
k.suspendWhenDocumentHidden = !0;
k.running = $;
k.remove = qt;
k.get = Ze;
k.set = Mr;
k.convertPx = ze;
k.path = Lt;
k.setDashoffset = At;
k.stagger = Ht;
k.timeline = Jt;
k.easing = $e;
k.penner = Rr;
k.random = function(e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
const Kt = "_01_JGa_container", Gt = "_01_JGa_image", Fe = {
  container: Kt,
  image: Gt
}, Qt = ({ src: e, alt: r, state: a }) => {
  const n = ne(null), i = ne(null), u = ne(null), s = ne({
    width: 800,
    height: 450
  }), l = ne({ width: 800, height: 450 }), o = ne({ x: 0, y: 0 }), p = ne(16 / 9), [f, d] = br({
    width: 800,
    height: 450
  });
  Ee(() => {
    n.current && (s.current = {
      width: n.current.offsetWidth,
      height: n.current.offsetHeight
    });
  }, []), Ee(() => {
    const y = () => {
      n.current && (o.current = {
        x: n.current.scrollLeft,
        y: n.current.scrollTop
      });
    };
    if (n.current)
      return n.current.addEventListener("scroll", y), () => {
        n.current && n.current.removeEventListener("scroll", y);
      };
  }, []), Ee(() => {
    Xt(e).then(({ width: y, height: b }) => {
      l.current = { width: y, height: b };
    }).then(() => {
      p.current = l.current.width / l.current.height;
      const y = en(
        s.current,
        l.current
      );
      d(y);
    });
  }, [e]), Ee(() => {
    if (!n.current) return;
    const y = a.scale, b = f.width * y, S = f.height * y, _ = s.current.width, h = s.current.height, x = Math.max(0, (b - _) / 2), I = Math.max(0, (S - h) / 2);
    k({
      targets: n.current,
      scrollLeft: x,
      scrollTop: I,
      duration: 300,
      easing: "cubicBezier(.3, 0, 0, 1)"
    }), k({
      targets: i.current,
      padding: `${O}px ${m}px`,
      duration: 300,
      easing: "cubicBezier(.3, 0, 0, 1)"
    }), k({
      targets: u.current,
      width: `${a.scale * f.width}px`,
      height: `${a.scale * f.height}px`,
      duration: 300,
      easing: "cubicBezier(.3, 0, 0, 1)"
    });
  }, [a.scale, f]);
  const m = Math.max(
    0,
    (s.current.width - f.width * a.scale) / 2
  ), O = Math.max(
    0,
    (s.current.height - f.height * a.scale) / 2
  );
  return /* @__PURE__ */ j.jsx("div", { ref: n, className: Fe.container, children: /* @__PURE__ */ j.jsx("div", { ref: i, className: Fe.imageWrapper, children: /* @__PURE__ */ j.jsx(
    "img",
    {
      ref: u,
      alt: r ?? "Image Preview",
      src: e,
      className: Fe.image,
      style: {
        // width: `${state.scale * imageDimensions.width}px`,
        // height: `${state.scale * imageDimensions.height}px`,
      }
    }
  ) }) });
}, Xt = (e) => {
  const r = new Image();
  return new Promise((a, n) => {
    r.onload = () => {
      a({ width: r.width, height: r.height });
    }, r.onerror = n, r.src = e;
  });
}, en = (e, r) => {
  const a = e.width / e.height, n = r.width / r.height;
  return a > n ? {
    width: e.height * n,
    height: e.height
  } : {
    width: e.width,
    height: e.width / n
  };
}, rn = {
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
}, on = ({
  src: e,
  alt: r,
  configuration: a
}) => {
  const n = tn(
    rn,
    a
  ), [i, u] = br(1), s = () => {
    i >= n.viewer.maxScale || u((p) => p + n.viewer.scaleStep);
  }, l = () => {
    i <= n.viewer.minScale || u((p) => p - n.viewer.scaleStep);
  }, o = { scale: i };
  return /* @__PURE__ */ j.jsxs("div", { className: wt.imageViewerContainer, children: [
    /* @__PURE__ */ j.jsx(vt, { src: e }),
    /* @__PURE__ */ j.jsx(
      bt,
      {
        onZoomIn: s,
        onZoomOut: l,
        configuration: n.controllers
      }
    ),
    /* @__PURE__ */ j.jsx(Qt, { src: e, alt: r, state: o })
  ] });
}, tn = (e, r) => ({
  viewer: {
    ...e.viewer,
    ...r == null ? void 0 : r.viewer
  },
  controllers: {
    ...e.controllers,
    ...r == null ? void 0 : r.controllers
  },
  options: {
    ...e.options,
    ...r == null ? void 0 : r.options
  }
});
export {
  on as ImageViewer
};
