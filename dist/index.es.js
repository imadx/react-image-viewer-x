import "./style.css";
import br, { useRef as U, useEffect as Ee, useCallback as cr, useState as st } from "react";
var Fe = { exports: {} }, de = {};
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
function ct() {
  if (fr) return de;
  fr = 1;
  var e = br, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, i, b) {
    var l, d = {}, y = null, O = null;
    b !== void 0 && (y = "" + b), i.key !== void 0 && (y = "" + i.key), i.ref !== void 0 && (O = i.ref);
    for (l in i) a.call(i, l) && !u.hasOwnProperty(l) && (d[l] = i[l]);
    if (f && f.defaultProps) for (l in i = f.defaultProps, i) d[l] === void 0 && (d[l] = i[l]);
    return { $$typeof: r, type: f, key: y, ref: O, props: d, _owner: o.current };
  }
  return de.Fragment = n, de.jsx = s, de.jsxs = s, de;
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
function ft() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = br, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), f = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function P(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = g && t[g] || t[p];
      return typeof c == "function" ? c : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(t) {
      {
        for (var c = arguments.length, v = new Array(c > 1 ? c - 1 : 0), x = 1; x < c; x++)
          v[x - 1] = arguments[x];
        w("error", t, v);
      }
    }
    function w(t, c, v) {
      {
        var x = T.ReactDebugCurrentFrame, _ = x.getStackAddendum();
        _ !== "" && (c += "%s", v = v.concat([_]));
        var S = v.map(function(R) {
          return String(R);
        });
        S.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var j = !1, W = !1, k = !1, Z = !1, re = !1, q;
    q = Symbol.for("react.module.reference");
    function I(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === u || re || t === o || t === b || t === l || Z || t === O || j || W || k || typeof t == "object" && t !== null && (t.$$typeof === y || t.$$typeof === d || t.$$typeof === s || t.$$typeof === f || t.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === q || t.getModuleId !== void 0));
    }
    function G(t, c, v) {
      var x = t.displayName;
      if (x)
        return x;
      var _ = c.displayName || c.name || "";
      return _ !== "" ? v + "(" + _ + ")" : v;
    }
    function te(t) {
      return t.displayName || "Context";
    }
    function M(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case o:
          return "StrictMode";
        case b:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var c = t;
            return te(c) + ".Consumer";
          case s:
            var v = t;
            return te(v._context) + ".Provider";
          case i:
            return G(t, t.render, "ForwardRef");
          case d:
            var x = t.displayName || null;
            return x !== null ? x : M(t.type) || "Memo";
          case y: {
            var _ = t, S = _._payload, R = _._init;
            try {
              return M(R(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, H = 0, pe, J, Q, X, oe, ue, se;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function me() {
      {
        if (H === 0) {
          pe = console.log, J = console.info, Q = console.warn, X = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ee,
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
        H++;
      }
    }
    function ce() {
      {
        if (H--, H === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, t, {
              value: pe
            }),
            info: $({}, t, {
              value: J
            }),
            warn: $({}, t, {
              value: Q
            }),
            error: $({}, t, {
              value: X
            }),
            group: $({}, t, {
              value: oe
            }),
            groupCollapsed: $({}, t, {
              value: ue
            }),
            groupEnd: $({}, t, {
              value: se
            })
          });
        }
        H < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = T.ReactCurrentDispatcher, Pe;
    function ye(t, c, v) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (_) {
            var x = _.stack.trim().match(/\n( *(at )?)/);
            Pe = x && x[1] || "";
          }
        return `
` + Pe + t;
      }
    }
    var Se = !1, be;
    {
      var Lr = typeof WeakMap == "function" ? WeakMap : Map;
      be = new Lr();
    }
    function Je(t, c) {
      if (!t || Se)
        return "";
      {
        var v = be.get(t);
        if (v !== void 0)
          return v;
      }
      var x;
      Se = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = fe.current, fe.current = null, me();
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
              x = V;
            }
            Reflect.construct(t, [], R);
          } else {
            try {
              R.call();
            } catch (V) {
              x = V;
            }
            t.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            x = V;
          }
          t();
        }
      } catch (V) {
        if (V && x && typeof V.stack == "string") {
          for (var E = V.stack.split(`
`), L = x.stack.split(`
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
        Se = !1, fe.current = S, ce(), Error.prepareStackTrace = _;
      }
      var ie = t ? t.displayName || t.name : "", ne = ie ? ye(ie) : "";
      return typeof t == "function" && be.set(t, ne), ne;
    }
    function Vr(t, c, v) {
      return Je(t, !1);
    }
    function Wr(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function we(t, c, v) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, Wr(t));
      if (typeof t == "string")
        return ye(t);
      switch (t) {
        case b:
          return ye("Suspense");
        case l:
          return ye("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case i:
            return Vr(t.render);
          case d:
            return we(t.type, c, v);
          case y: {
            var x = t, _ = x._payload, S = x._init;
            try {
              return we(S(_), c, v);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, Ke = {}, Ge = T.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var c = t._owner, v = we(t.type, t._source, c ? c.type : null);
        Ge.setExtraStackFrame(v);
      } else
        Ge.setExtraStackFrame(null);
    }
    function Br(t, c, v, x, _) {
      {
        var S = Function.call.bind(le);
        for (var R in t)
          if (S(t, R)) {
            var E = void 0;
            try {
              if (typeof t[R] != "function") {
                var L = Error((x || "React class") + ": " + v + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              E = t[R](c, R, x, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              E = A;
            }
            E && !(E instanceof Error) && (xe(_), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", v, R, typeof E), xe(null)), E instanceof Error && !(E.message in Ke) && (Ke[E.message] = !0, xe(_), h("Failed %s type: %s", v, E.message), xe(null));
          }
      }
    }
    var $r = Array.isArray;
    function ke(t) {
      return $r(t);
    }
    function Nr(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, v = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return v;
      }
    }
    function Ur(t) {
      try {
        return Qe(t), !1;
      } catch {
        return !0;
      }
    }
    function Qe(t) {
      return "" + t;
    }
    function Xe(t) {
      if (Ur(t))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nr(t)), Qe(t);
    }
    var ve = T.ReactCurrentOwner, Yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, Ce;
    Ce = {};
    function zr(t) {
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
        var v = M(ve.current.type);
        Ce[v] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ve.current.type), t.ref), Ce[v] = !0);
      }
    }
    function Hr(t, c) {
      {
        var v = function() {
          er || (er = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
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
          rr || (rr = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Kr = function(t, c, v, x, _, S, R) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: v,
        props: R,
        // Record the component responsible for creating this element.
        _owner: S
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
        value: x
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function Gr(t, c, v, x, _) {
      {
        var S, R = {}, E = null, L = null;
        v !== void 0 && (Xe(v), E = "" + v), Zr(c) && (Xe(c.key), E = "" + c.key), zr(c) && (L = c.ref, qr(c, _));
        for (S in c)
          le.call(c, S) && !Yr.hasOwnProperty(S) && (R[S] = c[S]);
        if (t && t.defaultProps) {
          var A = t.defaultProps;
          for (S in A)
            R[S] === void 0 && (R[S] = A[S]);
        }
        if (E || L) {
          var F = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          E && Hr(R, F), L && Jr(R, F);
        }
        return Kr(t, E, L, _, x, ve.current, R);
      }
    }
    var je = T.ReactCurrentOwner, tr = T.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var c = t._owner, v = we(t.type, t._source, c ? c.type : null);
        tr.setExtraStackFrame(v);
      } else
        tr.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Me(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function nr() {
      {
        if (je.current) {
          var t = M(je.current.type);
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
    var ar = {};
    function Xr(t) {
      {
        var c = nr();
        if (!c) {
          var v = typeof t == "string" ? t : t.displayName || t.name;
          v && (c = `

Check the top-level render call using <` + v + ">.");
        }
        return c;
      }
    }
    function ir(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var v = Xr(c);
        if (ar[v])
          return;
        ar[v] = !0;
        var x = "";
        t && t._owner && t._owner !== je.current && (x = " It was passed a child from " + M(t._owner.type) + "."), ae(t), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, x), ae(null);
      }
    }
    function or(t, c) {
      {
        if (typeof t != "object")
          return;
        if (ke(t))
          for (var v = 0; v < t.length; v++) {
            var x = t[v];
            Me(x) && ir(x, c);
          }
        else if (Me(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = P(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var S = _.call(t), R; !(R = S.next()).done; )
              Me(R.value) && ir(R.value, c);
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
        else if (typeof c == "object" && (c.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === d))
          v = c.propTypes;
        else
          return;
        if (v) {
          var x = M(c);
          Br(v, t.props, "prop", x, t);
        } else if (c.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var _ = M(c);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(t) {
      {
        for (var c = Object.keys(t.props), v = 0; v < c.length; v++) {
          var x = c[v];
          if (x !== "children" && x !== "key") {
            ae(t), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), ae(null);
            break;
          }
        }
        t.ref !== null && (ae(t), h("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    var ur = {};
    function sr(t, c, v, x, _, S) {
      {
        var R = I(t);
        if (!R) {
          var E = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Qr();
          L ? E += L : E += nr();
          var A;
          t === null ? A = "null" : ke(t) ? A = "array" : t !== void 0 && t.$$typeof === r ? (A = "<" + (M(t.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : A = typeof t, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, E);
        }
        var F = Gr(t, c, v, _, S);
        if (F == null)
          return F;
        if (R) {
          var B = c.children;
          if (B !== void 0)
            if (x)
              if (ke(B)) {
                for (var ie = 0; ie < B.length; ie++)
                  or(B[ie], t);
                Object.freeze && Object.freeze(B);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(B, t);
        }
        if (le.call(c, "key")) {
          var ne = M(t), V = Object.keys(c).filter(function(ut) {
            return ut !== "key";
          }), De = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[ne + De]) {
            var ot = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, De, ne, ot, ne), ur[ne + De] = !0;
          }
        }
        return t === a ? rt(F) : et(F), F;
      }
    }
    function tt(t, c, v) {
      return sr(t, c, v, !0);
    }
    function nt(t, c, v) {
      return sr(t, c, v, !1);
    }
    var at = nt, it = tt;
    he.Fragment = a, he.jsx = at, he.jsxs = it;
  }()), he;
}
process.env.NODE_ENV === "production" ? Fe.exports = ct() : Fe.exports = ft();
var C = Fe.exports;
const lt = "-ftnbW_backdrop", vt = {
  backdrop: lt
}, dt = ({ src: e }) => /* @__PURE__ */ C.jsx(
  "div",
  {
    className: vt.backdrop,
    style: {
      backgroundImage: `url(${e})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
), ht = "_1p3Xka_button", gt = {
  button: ht
}, vr = ({
  children: e,
  onClick: r
}) => /* @__PURE__ */ C.jsx("button", { type: "button", onClick: r, className: gt.button, children: e }), pt = "_PkWlW_controlsContainer", mt = {
  controlsContainer: pt
}, yt = () => /* @__PURE__ */ C.jsxs(
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
      /* @__PURE__ */ C.jsx("title", { children: "Zoom In" }),
      /* @__PURE__ */ C.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ C.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ C.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      /* @__PURE__ */ C.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), bt = () => /* @__PURE__ */ C.jsxs(
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
      /* @__PURE__ */ C.jsx("title", { children: "Zoom Out" }),
      /* @__PURE__ */ C.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ C.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ C.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), wt = ({
  onZoomIn: e,
  onZoomOut: r,
  configuration: n
}) => {
  const a = n.zoomInIcon ?? /* @__PURE__ */ C.jsx(yt, {}), o = n.zoomOutIcon ?? /* @__PURE__ */ C.jsx(bt, {});
  return /* @__PURE__ */ C.jsxs("div", { className: mt.controlsContainer, children: [
    n.hasZoomIn && /* @__PURE__ */ C.jsx(vr, { onClick: e, children: a }),
    n.hasZoomOut && /* @__PURE__ */ C.jsx(vr, { onClick: r, children: o })
  ] });
}, xt = "BTwb8q_imageViewerContainer", Et = {
  imageViewerContainer: xt
};
var wr = {
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
}, Rt = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], Re = {
  CSS: {},
  springs: {}
};
function Y(e, r, n) {
  return Math.min(Math.max(e, r), n);
}
function ge(e, r) {
  return e.indexOf(r) > -1;
}
function Ae(e, r) {
  return e.apply(null, r);
}
var m = {
  arr: function(e) {
    return Array.isArray(e);
  },
  obj: function(e) {
    return ge(Object.prototype.toString.call(e), "Object");
  },
  pth: function(e) {
    return m.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function(e) {
    return e instanceof SVGElement;
  },
  inp: function(e) {
    return e instanceof HTMLInputElement;
  },
  dom: function(e) {
    return e.nodeType || m.svg(e);
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
    return m.und(e) || e === null;
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
    return m.hex(e) || m.rgb(e) || m.hsl(e);
  },
  key: function(e) {
    return !wr.hasOwnProperty(e) && !We.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  }
};
function xr(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r ? r[1].split(",").map(function(n) {
    return parseFloat(n);
  }) : [];
}
function Er(e, r) {
  var n = xr(e), a = Y(m.und(n[0]) ? 1 : n[0], 0.1, 100), o = Y(m.und(n[1]) ? 100 : n[1], 0.1, 100), u = Y(m.und(n[2]) ? 10 : n[2], 0.1, 100), s = Y(m.und(n[3]) ? 0 : n[3], 0.1, 100), f = Math.sqrt(o / a), i = u / (2 * Math.sqrt(o * a)), b = i < 1 ? f * Math.sqrt(1 - i * i) : 0, l = 1, d = i < 1 ? (i * f + -s) / b : -s + f;
  function y(g) {
    var p = r ? r * g / 1e3 : g;
    return i < 1 ? p = Math.exp(-p * i * f) * (l * Math.cos(b * p) + d * Math.sin(b * p)) : p = (l + d * p) * Math.exp(-p * f), g === 0 || g === 1 ? g : 1 - p;
  }
  function O() {
    var g = Re.springs[e];
    if (g)
      return g;
    for (var p = 1 / 6, P = 0, T = 0; ; )
      if (P += p, y(P) === 1) {
        if (T++, T >= 16)
          break;
      } else
        T = 0;
    var h = P * p * 1e3;
    return Re.springs[e] = h, h;
  }
  return r ? y : O;
}
function _t(e) {
  return e === void 0 && (e = 10), function(r) {
    return Math.ceil(Y(r, 1e-6, 1) * e) * (1 / e);
  };
}
var Tt = function() {
  var e = 11, r = 1 / (e - 1);
  function n(l, d) {
    return 1 - 3 * d + 3 * l;
  }
  function a(l, d) {
    return 3 * d - 6 * l;
  }
  function o(l) {
    return 3 * l;
  }
  function u(l, d, y) {
    return ((n(d, y) * l + a(d, y)) * l + o(d)) * l;
  }
  function s(l, d, y) {
    return 3 * n(d, y) * l * l + 2 * a(d, y) * l + o(d);
  }
  function f(l, d, y, O, g) {
    var p, P, T = 0;
    do
      P = d + (y - d) / 2, p = u(P, O, g) - l, p > 0 ? y = P : d = P;
    while (Math.abs(p) > 1e-7 && ++T < 10);
    return P;
  }
  function i(l, d, y, O) {
    for (var g = 0; g < 4; ++g) {
      var p = s(d, y, O);
      if (p === 0)
        return d;
      var P = u(d, y, O) - l;
      d -= P / p;
    }
    return d;
  }
  function b(l, d, y, O) {
    if (!(0 <= l && l <= 1 && 0 <= y && y <= 1))
      return;
    var g = new Float32Array(e);
    if (l !== d || y !== O)
      for (var p = 0; p < e; ++p)
        g[p] = u(p * r, l, y);
    function P(T) {
      for (var h = 0, w = 1, j = e - 1; w !== j && g[w] <= T; ++w)
        h += r;
      --w;
      var W = (T - g[w]) / (g[w + 1] - g[w]), k = h + W * r, Z = s(k, l, y);
      return Z >= 1e-3 ? i(T, k, l, y) : Z === 0 ? k : f(T, h, h + r, l, y);
    }
    return function(T) {
      return l === d && y === O || T === 0 || T === 1 ? T : u(P(T), d, O);
    };
  }
  return b;
}(), Rr = function() {
  var e = { linear: function() {
    return function(a) {
      return a;
    };
  } }, r = {
    Sine: function() {
      return function(a) {
        return 1 - Math.cos(a * Math.PI / 2);
      };
    },
    Expo: function() {
      return function(a) {
        return a ? Math.pow(2, 10 * a - 10) : 0;
      };
    },
    Circ: function() {
      return function(a) {
        return 1 - Math.sqrt(1 - a * a);
      };
    },
    Back: function() {
      return function(a) {
        return a * a * (3 * a - 2);
      };
    },
    Bounce: function() {
      return function(a) {
        for (var o, u = 4; a < ((o = Math.pow(2, --u)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - u) - 7.5625 * Math.pow((o * 3 - 2) / 22 - a, 2);
      };
    },
    Elastic: function(a, o) {
      a === void 0 && (a = 1), o === void 0 && (o = 0.5);
      var u = Y(a, 1, 10), s = Y(o, 0.1, 2);
      return function(f) {
        return f === 0 || f === 1 ? f : -u * Math.pow(2, 10 * (f - 1)) * Math.sin((f - 1 - s / (Math.PI * 2) * Math.asin(1 / u)) * (Math.PI * 2) / s);
      };
    }
  }, n = ["Quad", "Cubic", "Quart", "Quint"];
  return n.forEach(function(a, o) {
    r[a] = function() {
      return function(u) {
        return Math.pow(u, o + 2);
      };
    };
  }), Object.keys(r).forEach(function(a) {
    var o = r[a];
    e["easeIn" + a] = o, e["easeOut" + a] = function(u, s) {
      return function(f) {
        return 1 - o(u, s)(1 - f);
      };
    }, e["easeInOut" + a] = function(u, s) {
      return function(f) {
        return f < 0.5 ? o(u, s)(f * 2) / 2 : 1 - o(u, s)(f * -2 + 2) / 2;
      };
    }, e["easeOutIn" + a] = function(u, s) {
      return function(f) {
        return f < 0.5 ? (1 - o(u, s)(1 - f * 2)) / 2 : (o(u, s)(f * 2 - 1) + 1) / 2;
      };
    };
  }), e;
}();
function Be(e, r) {
  if (m.fnc(e))
    return e;
  var n = e.split("(")[0], a = Rr[n], o = xr(e);
  switch (n) {
    case "spring":
      return Er(e, r);
    case "cubicBezier":
      return Ae(Tt, o);
    case "steps":
      return Ae(_t, o);
    default:
      return Ae(a, o);
  }
}
function _r(e) {
  try {
    var r = document.querySelectorAll(e);
    return r;
  } catch {
    return;
  }
}
function _e(e, r) {
  for (var n = e.length, a = arguments.length >= 2 ? arguments[1] : void 0, o = [], u = 0; u < n; u++)
    if (u in e) {
      var s = e[u];
      r.call(a, s, u, e) && o.push(s);
    }
  return o;
}
function Te(e) {
  return e.reduce(function(r, n) {
    return r.concat(m.arr(n) ? Te(n) : n);
  }, []);
}
function dr(e) {
  return m.arr(e) ? e : (m.str(e) && (e = _r(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function $e(e, r) {
  return e.some(function(n) {
    return n === r;
  });
}
function Ne(e) {
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return r;
}
function Le(e, r) {
  var n = Ne(e);
  for (var a in e)
    n[a] = r.hasOwnProperty(a) ? r[a] : e[a];
  return n;
}
function Oe(e, r) {
  var n = Ne(e);
  for (var a in r)
    n[a] = m.und(e[a]) ? r[a] : e[a];
  return n;
}
function Ot(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? "rgba(" + r[1] + ",1)" : e;
}
function Pt(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = e.replace(r, function(f, i, b, l) {
    return i + i + b + b + l + l;
  }), a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n), o = parseInt(a[1], 16), u = parseInt(a[2], 16), s = parseInt(a[3], 16);
  return "rgba(" + o + "," + u + "," + s + ",1)";
}
function St(e) {
  var r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), n = parseInt(r[1], 10) / 360, a = parseInt(r[2], 10) / 100, o = parseInt(r[3], 10) / 100, u = r[4] || 1;
  function s(y, O, g) {
    return g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? y + (O - y) * 6 * g : g < 1 / 2 ? O : g < 2 / 3 ? y + (O - y) * (2 / 3 - g) * 6 : y;
  }
  var f, i, b;
  if (a == 0)
    f = i = b = o;
  else {
    var l = o < 0.5 ? o * (1 + a) : o + a - o * a, d = 2 * o - l;
    f = s(d, l, n + 1 / 3), i = s(d, l, n), b = s(d, l, n - 1 / 3);
  }
  return "rgba(" + f * 255 + "," + i * 255 + "," + b * 255 + "," + u + ")";
}
function kt(e) {
  if (m.rgb(e))
    return Ot(e);
  if (m.hex(e))
    return Pt(e);
  if (m.hsl(e))
    return St(e);
}
function K(e) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (r)
    return r[1];
}
function Ct(e) {
  if (ge(e, "translate") || e === "perspective")
    return "px";
  if (ge(e, "rotate") || ge(e, "skew"))
    return "deg";
}
function Ve(e, r) {
  return m.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function z(e, r) {
  return e.getAttribute(r);
}
function Ue(e, r, n) {
  var a = K(r);
  if ($e([n, "deg", "rad", "turn"], a))
    return r;
  var o = Re.CSS[r + n];
  if (!m.und(o))
    return o;
  var u = 100, s = document.createElement(e.tagName), f = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  f.appendChild(s), s.style.position = "absolute", s.style.width = u + n;
  var i = u / s.offsetWidth;
  f.removeChild(s);
  var b = i * parseFloat(r);
  return Re.CSS[r + n] = b, b;
}
function Tr(e, r, n) {
  if (r in e.style) {
    var a = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), o = e.style[r] || getComputedStyle(e).getPropertyValue(a) || "0";
    return n ? Ue(e, o, n) : o;
  }
}
function Ye(e, r) {
  if (m.dom(e) && !m.inp(e) && (!m.nil(z(e, r)) || m.svg(e) && e[r]))
    return "attribute";
  if (m.dom(e) && $e(Rt, r))
    return "transform";
  if (m.dom(e) && r !== "transform" && Tr(e, r))
    return "css";
  if (e[r] != null)
    return "object";
}
function Or(e) {
  if (m.dom(e)) {
    for (var r = e.style.transform || "", n = /(\w+)\(([^)]*)\)/g, a = /* @__PURE__ */ new Map(), o; o = n.exec(r); )
      a.set(o[1], o[2]);
    return a;
  }
}
function jt(e, r, n, a) {
  var o = ge(r, "scale") ? 1 : 0 + Ct(r), u = Or(e).get(r) || o;
  return n && (n.transforms.list.set(r, u), n.transforms.last = r), a ? Ue(e, u, a) : u;
}
function ze(e, r, n, a) {
  switch (Ye(e, r)) {
    case "transform":
      return jt(e, r, a, n);
    case "css":
      return Tr(e, r, n);
    case "attribute":
      return z(e, r);
    default:
      return e[r] || 0;
  }
}
function Ze(e, r) {
  var n = /^(\*=|\+=|-=)/.exec(e);
  if (!n)
    return e;
  var a = K(e) || 0, o = parseFloat(r), u = parseFloat(e.replace(n[0], ""));
  switch (n[0][0]) {
    case "+":
      return o + u + a;
    case "-":
      return o - u + a;
    case "*":
      return o * u + a;
  }
}
function Pr(e, r) {
  if (m.col(e))
    return kt(e);
  if (/\s/g.test(e))
    return e;
  var n = K(e), a = n ? e.substr(0, e.length - n.length) : e;
  return r ? a + r : a;
}
function qe(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function It(e) {
  return Math.PI * 2 * z(e, "r");
}
function Mt(e) {
  return z(e, "width") * 2 + z(e, "height") * 2;
}
function Dt(e) {
  return qe(
    { x: z(e, "x1"), y: z(e, "y1") },
    { x: z(e, "x2"), y: z(e, "y2") }
  );
}
function Sr(e) {
  for (var r = e.points, n = 0, a, o = 0; o < r.numberOfItems; o++) {
    var u = r.getItem(o);
    o > 0 && (n += qe(a, u)), a = u;
  }
  return n;
}
function At(e) {
  var r = e.points;
  return Sr(e) + qe(r.getItem(r.numberOfItems - 1), r.getItem(0));
}
function kr(e) {
  if (e.getTotalLength)
    return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return It(e);
    case "rect":
      return Mt(e);
    case "line":
      return Dt(e);
    case "polyline":
      return Sr(e);
    case "polygon":
      return At(e);
  }
}
function Ft(e) {
  var r = kr(e);
  return e.setAttribute("stroke-dasharray", r), r;
}
function Lt(e) {
  for (var r = e.parentNode; m.svg(r) && m.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function Cr(e, r) {
  var n = r || {}, a = n.el || Lt(e), o = a.getBoundingClientRect(), u = z(a, "viewBox"), s = o.width, f = o.height, i = n.viewBox || (u ? u.split(" ") : [0, 0, s, f]);
  return {
    el: a,
    viewBox: i,
    x: i[0] / 1,
    y: i[1] / 1,
    w: s,
    h: f,
    vW: i[2],
    vH: i[3]
  };
}
function Vt(e, r) {
  var n = m.str(e) ? _r(e)[0] : e, a = r || 100;
  return function(o) {
    return {
      property: o,
      el: n,
      svg: Cr(n),
      totalLength: kr(n) * (a / 100)
    };
  };
}
function Wt(e, r, n) {
  function a(l) {
    l === void 0 && (l = 0);
    var d = r + l >= 1 ? r + l : 0;
    return e.el.getPointAtLength(d);
  }
  var o = Cr(e.el, e.svg), u = a(), s = a(-1), f = a(1), i = n ? 1 : o.w / o.vW, b = n ? 1 : o.h / o.vH;
  switch (e.property) {
    case "x":
      return (u.x - o.x) * i;
    case "y":
      return (u.y - o.y) * b;
    case "angle":
      return Math.atan2(f.y - s.y, f.x - s.x) * 180 / Math.PI;
  }
}
function hr(e, r) {
  var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, a = Pr(m.pth(e) ? e.totalLength : e, r) + "";
  return {
    original: a,
    numbers: a.match(n) ? a.match(n).map(Number) : [0],
    strings: m.str(e) || r ? a.split(n) : []
  };
}
function He(e) {
  var r = e ? Te(m.arr(e) ? e.map(dr) : dr(e)) : [];
  return _e(r, function(n, a, o) {
    return o.indexOf(n) === a;
  });
}
function jr(e) {
  var r = He(e);
  return r.map(function(n, a) {
    return { target: n, id: a, total: r.length, transforms: { list: Or(n) } };
  });
}
function Bt(e, r) {
  var n = Ne(r);
  if (/^spring/.test(n.easing) && (n.duration = Er(n.easing)), m.arr(e)) {
    var a = e.length, o = a === 2 && !m.obj(e[0]);
    o ? e = { value: e } : m.fnc(r.duration) || (n.duration = r.duration / a);
  }
  var u = m.arr(e) ? e : [e];
  return u.map(function(s, f) {
    var i = m.obj(s) && !m.pth(s) ? s : { value: s };
    return m.und(i.delay) && (i.delay = f ? 0 : r.delay), m.und(i.endDelay) && (i.endDelay = f === u.length - 1 ? r.endDelay : 0), i;
  }).map(function(s) {
    return Oe(s, n);
  });
}
function $t(e) {
  for (var r = _e(Te(e.map(function(u) {
    return Object.keys(u);
  })), function(u) {
    return m.key(u);
  }).reduce(function(u, s) {
    return u.indexOf(s) < 0 && u.push(s), u;
  }, []), n = {}, a = function(u) {
    var s = r[u];
    n[s] = e.map(function(f) {
      var i = {};
      for (var b in f)
        m.key(b) ? b == s && (i.value = f[b]) : i[b] = f[b];
      return i;
    });
  }, o = 0; o < r.length; o++) a(o);
  return n;
}
function Nt(e, r) {
  var n = [], a = r.keyframes;
  a && (r = Oe($t(a), r));
  for (var o in r)
    m.key(o) && n.push({
      name: o,
      tweens: Bt(r[o], e)
    });
  return n;
}
function Ut(e, r) {
  var n = {};
  for (var a in e) {
    var o = Ve(e[a], r);
    m.arr(o) && (o = o.map(function(u) {
      return Ve(u, r);
    }), o.length === 1 && (o = o[0])), n[a] = o;
  }
  return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n;
}
function Yt(e, r) {
  var n;
  return e.tweens.map(function(a) {
    var o = Ut(a, r), u = o.value, s = m.arr(u) ? u[1] : u, f = K(s), i = ze(r.target, e.name, f, r), b = n ? n.to.original : i, l = m.arr(u) ? u[0] : b, d = K(l) || K(i), y = f || d;
    return m.und(s) && (s = b), o.from = hr(l, y), o.to = hr(Ze(s, l), y), o.start = n ? n.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = Be(o.easing, o.duration), o.isPath = m.pth(u), o.isPathTargetInsideSVG = o.isPath && m.svg(r.target), o.isColor = m.col(o.from.original), o.isColor && (o.round = 1), n = o, o;
  });
}
var Ir = {
  css: function(e, r, n) {
    return e.style[r] = n;
  },
  attribute: function(e, r, n) {
    return e.setAttribute(r, n);
  },
  object: function(e, r, n) {
    return e[r] = n;
  },
  transform: function(e, r, n, a, o) {
    if (a.list.set(r, n), r === a.last || o) {
      var u = "";
      a.list.forEach(function(s, f) {
        u += f + "(" + s + ") ";
      }), e.style.transform = u;
    }
  }
};
function Mr(e, r) {
  var n = jr(e);
  n.forEach(function(a) {
    for (var o in r) {
      var u = Ve(r[o], a), s = a.target, f = K(u), i = ze(s, o, f, a), b = f || K(i), l = Ze(Pr(u, b), i), d = Ye(s, o);
      Ir[d](s, o, l, a.transforms, !0);
    }
  });
}
function zt(e, r) {
  var n = Ye(e.target, r.name);
  if (n) {
    var a = Yt(r, e), o = a[a.length - 1];
    return {
      type: n,
      property: r.name,
      animatable: e,
      tweens: a,
      duration: o.end,
      delay: a[0].delay,
      endDelay: o.endDelay
    };
  }
}
function Zt(e, r) {
  return _e(Te(e.map(function(n) {
    return r.map(function(a) {
      return zt(n, a);
    });
  })), function(n) {
    return !m.und(n);
  });
}
function Dr(e, r) {
  var n = e.length, a = function(u) {
    return u.timelineOffset ? u.timelineOffset : 0;
  }, o = {};
  return o.duration = n ? Math.max.apply(Math, e.map(function(u) {
    return a(u) + u.duration;
  })) : r.duration, o.delay = n ? Math.min.apply(Math, e.map(function(u) {
    return a(u) + u.delay;
  })) : r.delay, o.endDelay = n ? o.duration - Math.max.apply(Math, e.map(function(u) {
    return a(u) + u.duration - u.endDelay;
  })) : r.endDelay, o;
}
var gr = 0;
function qt(e) {
  var r = Le(wr, e), n = Le(We, e), a = Nt(n, e), o = jr(e.targets), u = Zt(o, a), s = Dr(u, n), f = gr;
  return gr++, Oe(r, {
    id: f,
    children: [],
    animatables: o,
    animations: u,
    duration: s.duration,
    delay: s.delay,
    endDelay: s.endDelay
  });
}
var N = [], Ar = function() {
  var e;
  function r() {
    !e && (!pr() || !D.suspendWhenDocumentHidden) && N.length > 0 && (e = requestAnimationFrame(n));
  }
  function n(o) {
    for (var u = N.length, s = 0; s < u; ) {
      var f = N[s];
      f.paused ? (N.splice(s, 1), u--) : (f.tick(o), s++);
    }
    e = s > 0 ? requestAnimationFrame(n) : void 0;
  }
  function a() {
    D.suspendWhenDocumentHidden && (pr() ? e = cancelAnimationFrame(e) : (N.forEach(
      function(o) {
        return o._onDocumentVisibility();
      }
    ), Ar()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", a), r;
}();
function pr() {
  return !!document && document.hidden;
}
function D(e) {
  e === void 0 && (e = {});
  var r = 0, n = 0, a = 0, o, u = 0, s = null;
  function f(h) {
    var w = window.Promise && new Promise(function(j) {
      return s = j;
    });
    return h.finished = w, w;
  }
  var i = qt(e);
  f(i);
  function b() {
    var h = i.direction;
    h !== "alternate" && (i.direction = h !== "normal" ? "normal" : "reverse"), i.reversed = !i.reversed, o.forEach(function(w) {
      return w.reversed = i.reversed;
    });
  }
  function l(h) {
    return i.reversed ? i.duration - h : h;
  }
  function d() {
    r = 0, n = l(i.currentTime) * (1 / D.speed);
  }
  function y(h, w) {
    w && w.seek(h - w.timelineOffset);
  }
  function O(h) {
    if (i.reversePlayback)
      for (var j = u; j--; )
        y(h, o[j]);
    else
      for (var w = 0; w < u; w++)
        y(h, o[w]);
  }
  function g(h) {
    for (var w = 0, j = i.animations, W = j.length; w < W; ) {
      var k = j[w], Z = k.animatable, re = k.tweens, q = re.length - 1, I = re[q];
      q && (I = _e(re, function(fe) {
        return h < fe.end;
      })[0] || I);
      for (var G = Y(h - I.start - I.delay, 0, I.duration) / I.duration, te = isNaN(G) ? 1 : I.easing(G), M = I.to.strings, $ = I.round, H = [], pe = I.to.numbers.length, J = void 0, Q = 0; Q < pe; Q++) {
        var X = void 0, oe = I.to.numbers[Q], ue = I.from.numbers[Q] || 0;
        I.isPath ? X = Wt(I.value, te * oe, I.isPathTargetInsideSVG) : X = ue + te * (oe - ue), $ && (I.isColor && Q > 2 || (X = Math.round(X * $) / $)), H.push(X);
      }
      var se = M.length;
      if (!se)
        J = H[0];
      else {
        J = M[0];
        for (var ee = 0; ee < se; ee++) {
          M[ee];
          var me = M[ee + 1], ce = H[ee];
          isNaN(ce) || (me ? J += ce + me : J += ce + " ");
        }
      }
      Ir[k.type](Z.target, k.property, J, Z.transforms), k.currentValue = J, w++;
    }
  }
  function p(h) {
    i[h] && !i.passThrough && i[h](i);
  }
  function P() {
    i.remaining && i.remaining !== !0 && i.remaining--;
  }
  function T(h) {
    var w = i.duration, j = i.delay, W = w - i.endDelay, k = l(h);
    i.progress = Y(k / w * 100, 0, 100), i.reversePlayback = k < i.currentTime, o && O(k), !i.began && i.currentTime > 0 && (i.began = !0, p("begin")), !i.loopBegan && i.currentTime > 0 && (i.loopBegan = !0, p("loopBegin")), k <= j && i.currentTime !== 0 && g(0), (k >= W && i.currentTime !== w || !w) && g(w), k > j && k < W ? (i.changeBegan || (i.changeBegan = !0, i.changeCompleted = !1, p("changeBegin")), p("change"), g(k)) : i.changeBegan && (i.changeCompleted = !0, i.changeBegan = !1, p("changeComplete")), i.currentTime = Y(k, 0, w), i.began && p("update"), h >= w && (n = 0, P(), i.remaining ? (r = a, p("loopComplete"), i.loopBegan = !1, i.direction === "alternate" && b()) : (i.paused = !0, i.completed || (i.completed = !0, p("loopComplete"), p("complete"), !i.passThrough && "Promise" in window && (s(), f(i)))));
  }
  return i.reset = function() {
    var h = i.direction;
    i.passThrough = !1, i.currentTime = 0, i.progress = 0, i.paused = !0, i.began = !1, i.loopBegan = !1, i.changeBegan = !1, i.completed = !1, i.changeCompleted = !1, i.reversePlayback = !1, i.reversed = h === "reverse", i.remaining = i.loop, o = i.children, u = o.length;
    for (var w = u; w--; )
      i.children[w].reset();
    (i.reversed && i.loop !== !0 || h === "alternate" && i.loop === 1) && i.remaining++, g(i.reversed ? i.duration : 0);
  }, i._onDocumentVisibility = d, i.set = function(h, w) {
    return Mr(h, w), i;
  }, i.tick = function(h) {
    a = h, r || (r = a), T((a + (n - r)) * D.speed);
  }, i.seek = function(h) {
    T(l(h));
  }, i.pause = function() {
    i.paused = !0, d();
  }, i.play = function() {
    i.paused && (i.completed && i.reset(), i.paused = !1, N.push(i), d(), Ar());
  }, i.reverse = function() {
    b(), i.completed = !i.reversed, d();
  }, i.restart = function() {
    i.reset(), i.play();
  }, i.remove = function(h) {
    var w = He(h);
    Fr(w, i);
  }, i.reset(), i.autoplay && i.play(), i;
}
function mr(e, r) {
  for (var n = r.length; n--; )
    $e(e, r[n].animatable.target) && r.splice(n, 1);
}
function Fr(e, r) {
  var n = r.animations, a = r.children;
  mr(e, n);
  for (var o = a.length; o--; ) {
    var u = a[o], s = u.animations;
    mr(e, s), !s.length && !u.children.length && a.splice(o, 1);
  }
  !n.length && !a.length && r.pause();
}
function Ht(e) {
  for (var r = He(e), n = N.length; n--; ) {
    var a = N[n];
    Fr(r, a);
  }
}
function Jt(e, r) {
  r === void 0 && (r = {});
  var n = r.direction || "normal", a = r.easing ? Be(r.easing) : null, o = r.grid, u = r.axis, s = r.from || 0, f = s === "first", i = s === "center", b = s === "last", l = m.arr(e), d = parseFloat(l ? e[0] : e), y = l ? parseFloat(e[1]) : 0, O = K(l ? e[1] : e) || 0, g = r.start || 0 + (l ? d : 0), p = [], P = 0;
  return function(T, h, w) {
    if (f && (s = 0), i && (s = (w - 1) / 2), b && (s = w - 1), !p.length) {
      for (var j = 0; j < w; j++) {
        if (!o)
          p.push(Math.abs(s - j));
        else {
          var W = i ? (o[0] - 1) / 2 : s % o[0], k = i ? (o[1] - 1) / 2 : Math.floor(s / o[0]), Z = j % o[0], re = Math.floor(j / o[0]), q = W - Z, I = k - re, G = Math.sqrt(q * q + I * I);
          u === "x" && (G = -q), u === "y" && (G = -I), p.push(G);
        }
        P = Math.max.apply(Math, p);
      }
      a && (p = p.map(function(M) {
        return a(M / P) * P;
      })), n === "reverse" && (p = p.map(function(M) {
        return u ? M < 0 ? M * -1 : -M : Math.abs(P - M);
      }));
    }
    var te = l ? (y - d) / P : d;
    return g + te * (Math.round(p[h] * 100) / 100) + O;
  };
}
function Kt(e) {
  e === void 0 && (e = {});
  var r = D(e);
  return r.duration = 0, r.add = function(n, a) {
    var o = N.indexOf(r), u = r.children;
    o > -1 && N.splice(o, 1);
    function s(y) {
      y.passThrough = !0;
    }
    for (var f = 0; f < u.length; f++)
      s(u[f]);
    var i = Oe(n, Le(We, e));
    i.targets = i.targets || e.targets;
    var b = r.duration;
    i.autoplay = !1, i.direction = r.direction, i.timelineOffset = m.und(a) ? b : Ze(a, b), s(r), r.seek(i.timelineOffset);
    var l = D(i);
    s(l), u.push(l);
    var d = Dr(u, e);
    return r.delay = d.delay, r.endDelay = d.endDelay, r.duration = d.duration, r.seek(0), r.reset(), r.autoplay && r.play(), r;
  }, r;
}
D.version = "3.2.1";
D.speed = 1;
D.suspendWhenDocumentHidden = !0;
D.running = N;
D.remove = Ht;
D.get = ze;
D.set = Mr;
D.convertPx = Ue;
D.path = Vt;
D.setDashoffset = Ft;
D.stagger = Jt;
D.timeline = Kt;
D.easing = Be;
D.penner = Rr;
D.random = function(e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
const Gt = "_01_JGa_container", Qt = "_01_JGa_image", yr = {
  container: Gt,
  image: Qt
}, Xt = ({ src: e, state: r }) => {
  const n = U(null), a = U(null), o = U(null), u = U({
    width: 800,
    height: 450
  }), s = U({
    width: 800,
    height: 450
  }), f = U({ width: 800, height: 450 }), i = U(16 / 9), b = U(null), l = U(null), d = U({
    x: 0,
    y: 0,
    scale: 1
  });
  Ee(() => {
    const g = new Image();
    g.onload = () => {
      o.current = g;
    }, g.src = e;
  }, [e]), Ee(() => {
    a.current && (u.current = {
      width: a.current.offsetWidth,
      height: a.current.offsetHeight
    }, n.current && (n.current.width = u.current.width, n.current.height = u.current.height));
  }, []);
  const y = cr(() => {
    if (!o.current) return;
    const g = n.current;
    if (!g) return;
    const p = g.getContext("2d");
    if (!p) return;
    const { width: P, height: T } = f.current;
    if (!d.current) return;
    console.log("=>(view.tsx:83) animationRef", d);
    const h = d.current.scale, w = P * h, j = T * h, W = d.current.x - w / 2, k = d.current.y - j / 2;
    p.clearRect(0, 0, g.width, g.height), p.drawImage(
      o.current,
      W,
      k,
      w,
      j
    );
  }, []);
  Ee(() => {
    en(e).then(({ width: g, height: p }) => {
      s.current = { width: g, height: p };
    }).then(() => {
      i.current = s.current.width / s.current.height;
      const g = rn(
        u.current,
        s.current
      );
      console.log("=>(view.tsx:55) dimensions", g), f.current = g, n.current && (d.current = {
        x: n.current.width / 2,
        y: n.current.height / 2,
        scale: 1
      }, y());
    });
  }, [e, y]);
  const O = cr(
    (g) => {
      var p;
      ((p = b.current) == null ? void 0 : p.progress) !== 100 && (y(), l.current = requestAnimationFrame(() => {
        O(g);
      }));
    },
    [y]
  );
  return Ee(() => {
    var g, p;
    r && (l.current && cancelAnimationFrame(l.current), (g = b.current) != null && g.complete || (p = b.current) == null || p.pause(), b.current = D({
      targets: d.current,
      scale: r.scale,
      duration: 500,
      easing: "easeOutExpo",
      autoplay: !0,
      update: (P) => {
        O(P);
      }
    }));
  }, [r, O]), /* @__PURE__ */ C.jsx("div", { ref: a, className: yr.container, children: /* @__PURE__ */ C.jsx("canvas", { ref: n, className: yr.image }) });
}, en = (e) => {
  const r = new Image();
  return new Promise((n, a) => {
    r.onload = () => {
      n({ width: r.width, height: r.height });
    }, r.onerror = a, r.src = e;
  });
}, rn = (e, r) => {
  const n = e.width / e.height, a = r.width / r.height;
  return n > a ? {
    width: e.height * a,
    height: e.height
  } : {
    width: e.width,
    height: e.width / a
  };
}, tn = {
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
}, un = ({
  src: e,
  configuration: r
}) => {
  const n = nn(
    tn,
    r
  ), [a, o] = st(1), u = () => {
    a >= n.viewer.maxScale || o((i) => i + n.viewer.scaleStep);
  }, s = () => {
    a <= n.viewer.minScale || o((i) => i - n.viewer.scaleStep);
  }, f = { scale: a };
  return /* @__PURE__ */ C.jsxs("div", { className: Et.imageViewerContainer, children: [
    /* @__PURE__ */ C.jsx(dt, { src: e }),
    /* @__PURE__ */ C.jsx(
      wt,
      {
        onZoomIn: u,
        onZoomOut: s,
        configuration: n.controllers
      }
    ),
    /* @__PURE__ */ C.jsx(Xt, { src: e, state: f })
  ] });
}, nn = (e, r) => ({
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
  un as ImageViewer
};
