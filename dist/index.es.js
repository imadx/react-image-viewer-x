import "./style.css";
import br, { useRef as Q, useEffect as he, useCallback as cr, useState as st } from "react";
var Fe = { exports: {} }, ge = {};
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
  if (fr) return ge;
  fr = 1;
  var e = br, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, i, w) {
    var f, v = {}, y = null, S = null;
    w !== void 0 && (y = "" + w), i.key !== void 0 && (y = "" + i.key), i.ref !== void 0 && (S = i.ref);
    for (f in i) a.call(i, f) && !u.hasOwnProperty(f) && (v[f] = i[f]);
    if (l && l.defaultProps) for (f in i = l.defaultProps, i) v[f] === void 0 && (v[f] = i[f]);
    return { $$typeof: r, type: l, key: y, ref: S, props: v, _owner: o.current };
  }
  return ge.Fragment = n, ge.jsx = s, ge.jsxs = s, ge;
}
var pe = {};
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
    var e = br, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function O(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = p && t[p] || t[g];
      return typeof c == "function" ? c : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(t) {
      {
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), x = 1; x < c; x++)
          d[x - 1] = arguments[x];
        b("error", t, d);
      }
    }
    function b(t, c, d) {
      {
        var x = _.ReactDebugCurrentFrame, P = x.getStackAddendum();
        P !== "" && (c += "%s", d = d.concat([P]));
        var k = d.map(function(T) {
          return String(T);
        });
        k.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, k);
      }
    }
    var j = !1, A = !1, R = !1, V = !1, U = !1, B;
    B = Symbol.for("react.module.reference");
    function C(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === u || U || t === o || t === w || t === f || V || t === S || j || A || R || typeof t == "object" && t !== null && (t.$$typeof === y || t.$$typeof === v || t.$$typeof === s || t.$$typeof === l || t.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === B || t.getModuleId !== void 0));
    }
    function z(t, c, d) {
      var x = t.displayName;
      if (x)
        return x;
      var P = c.displayName || c.name || "";
      return P !== "" ? d + "(" + P + ")" : d;
    }
    function H(t) {
      return t.displayName || "Context";
    }
    function I(t) {
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
        case w:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var c = t;
            return H(c) + ".Consumer";
          case s:
            var d = t;
            return H(d._context) + ".Provider";
          case i:
            return z(t, t.render, "ForwardRef");
          case v:
            var x = t.displayName || null;
            return x !== null ? x : I(t.type) || "Memo";
          case y: {
            var P = t, k = P._payload, T = P._init;
            try {
              return I(T(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, Z = 0, re, Y, J, K, ne, ie, ce;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function ye() {
      {
        if (Z === 0) {
          re = console.log, Y = console.info, J = console.warn, K = console.error, ne = console.group, ie = console.groupCollapsed, ce = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ae,
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
        Z++;
      }
    }
    function fe() {
      {
        if (Z--, Z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, t, {
              value: re
            }),
            info: W({}, t, {
              value: Y
            }),
            warn: W({}, t, {
              value: J
            }),
            error: W({}, t, {
              value: K
            }),
            group: W({}, t, {
              value: ne
            }),
            groupCollapsed: W({}, t, {
              value: ie
            }),
            groupEnd: W({}, t, {
              value: ce
            })
          });
        }
        Z < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = _.ReactCurrentDispatcher, Pe;
    function be(t, c, d) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (P) {
            var x = P.stack.trim().match(/\n( *(at )?)/);
            Pe = x && x[1] || "";
          }
        return `
` + Pe + t;
      }
    }
    var Se = !1, we;
    {
      var Lr = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Lr();
    }
    function Je(t, c) {
      if (!t || Se)
        return "";
      {
        var d = we.get(t);
        if (d !== void 0)
          return d;
      }
      var x;
      Se = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = le.current, le.current = null, ye();
      try {
        if (c) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (N) {
              x = N;
            }
            Reflect.construct(t, [], T);
          } else {
            try {
              T.call();
            } catch (N) {
              x = N;
            }
            t.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            x = N;
          }
          t();
        }
      } catch (N) {
        if (N && x && typeof N.stack == "string") {
          for (var E = N.stack.split(`
`), $ = x.stack.split(`
`), F = E.length - 1, L = $.length - 1; F >= 1 && L >= 0 && E[F] !== $[L]; )
            L--;
          for (; F >= 1 && L >= 0; F--, L--)
            if (E[F] !== $[L]) {
              if (F !== 1 || L !== 1)
                do
                  if (F--, L--, L < 0 || E[F] !== $[L]) {
                    var q = `
` + E[F].replace(" at new ", " at ");
                    return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)), typeof t == "function" && we.set(t, q), q;
                  }
                while (F >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        Se = !1, le.current = k, fe(), Error.prepareStackTrace = P;
      }
      var se = t ? t.displayName || t.name : "", oe = se ? be(se) : "";
      return typeof t == "function" && we.set(t, oe), oe;
    }
    function Vr(t, c, d) {
      return Je(t, !1);
    }
    function Br(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function xe(t, c, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, Br(t));
      if (typeof t == "string")
        return be(t);
      switch (t) {
        case w:
          return be("Suspense");
        case f:
          return be("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case i:
            return Vr(t.render);
          case v:
            return xe(t.type, c, d);
          case y: {
            var x = t, P = x._payload, k = x._init;
            try {
              return xe(k(P), c, d);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, Ke = {}, Ge = _.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var c = t._owner, d = xe(t.type, t._source, c ? c.type : null);
        Ge.setExtraStackFrame(d);
      } else
        Ge.setExtraStackFrame(null);
    }
    function Wr(t, c, d, x, P) {
      {
        var k = Function.call.bind(ve);
        for (var T in t)
          if (k(t, T)) {
            var E = void 0;
            try {
              if (typeof t[T] != "function") {
                var $ = Error((x || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              E = t[T](c, T, x, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              E = F;
            }
            E && !(E instanceof Error) && (Ee(P), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", d, T, typeof E), Ee(null)), E instanceof Error && !(E.message in Ke) && (Ke[E.message] = !0, Ee(P), h("Failed %s type: %s", d, E.message), Ee(null));
          }
      }
    }
    var $r = Array.isArray;
    function Ce(t) {
      return $r(t);
    }
    function Yr(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, d = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function Nr(t) {
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
      if (Nr(t))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yr(t)), Qe(t);
    }
    var de = _.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, ke;
    ke = {};
    function zr(t) {
      if (ve.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Zr(t) {
      if (ve.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function qr(t, c) {
      if (typeof t.ref == "string" && de.current && c && de.current.stateNode !== c) {
        var d = I(de.current.type);
        ke[d] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(de.current.type), t.ref), ke[d] = !0);
      }
    }
    function Hr(t, c) {
      {
        var d = function() {
          er || (er = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function Jr(t, c) {
      {
        var d = function() {
          rr || (rr = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Kr = function(t, c, d, x, P, k, T) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: d,
        props: T,
        // Record the component responsible for creating this element.
        _owner: k
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
        value: P
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function Gr(t, c, d, x, P) {
      {
        var k, T = {}, E = null, $ = null;
        d !== void 0 && (Xe(d), E = "" + d), Zr(c) && (Xe(c.key), E = "" + c.key), zr(c) && ($ = c.ref, qr(c, P));
        for (k in c)
          ve.call(c, k) && !Ur.hasOwnProperty(k) && (T[k] = c[k]);
        if (t && t.defaultProps) {
          var F = t.defaultProps;
          for (k in F)
            T[k] === void 0 && (T[k] = F[k]);
        }
        if (E || $) {
          var L = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          E && Hr(T, L), $ && Jr(T, L);
        }
        return Kr(t, E, $, P, x, de.current, T);
      }
    }
    var je = _.ReactCurrentOwner, tr = _.ReactDebugCurrentFrame;
    function ue(t) {
      if (t) {
        var c = t._owner, d = xe(t.type, t._source, c ? c.type : null);
        tr.setExtraStackFrame(d);
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
          var t = I(je.current.type);
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
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (c = `

Check the top-level render call using <` + d + ">.");
        }
        return c;
      }
    }
    function ir(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = Xr(c);
        if (ar[d])
          return;
        ar[d] = !0;
        var x = "";
        t && t._owner && t._owner !== je.current && (x = " It was passed a child from " + I(t._owner.type) + "."), ue(t), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, x), ue(null);
      }
    }
    function or(t, c) {
      {
        if (typeof t != "object")
          return;
        if (Ce(t))
          for (var d = 0; d < t.length; d++) {
            var x = t[d];
            Me(x) && ir(x, c);
          }
        else if (Me(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var P = O(t);
          if (typeof P == "function" && P !== t.entries)
            for (var k = P.call(t), T; !(T = k.next()).done; )
              Me(T.value) && ir(T.value, c);
        }
      }
    }
    function et(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var d;
        if (typeof c == "function")
          d = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === v))
          d = c.propTypes;
        else
          return;
        if (d) {
          var x = I(c);
          Wr(d, t.props, "prop", x, t);
        } else if (c.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var P = I(c);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(t) {
      {
        for (var c = Object.keys(t.props), d = 0; d < c.length; d++) {
          var x = c[d];
          if (x !== "children" && x !== "key") {
            ue(t), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), ue(null);
            break;
          }
        }
        t.ref !== null && (ue(t), h("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    var ur = {};
    function sr(t, c, d, x, P, k) {
      {
        var T = C(t);
        if (!T) {
          var E = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Qr();
          $ ? E += $ : E += nr();
          var F;
          t === null ? F = "null" : Ce(t) ? F = "array" : t !== void 0 && t.$$typeof === r ? (F = "<" + (I(t.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : F = typeof t, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, E);
        }
        var L = Gr(t, c, d, P, k);
        if (L == null)
          return L;
        if (T) {
          var q = c.children;
          if (q !== void 0)
            if (x)
              if (Ce(q)) {
                for (var se = 0; se < q.length; se++)
                  or(q[se], t);
                Object.freeze && Object.freeze(q);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(q, t);
        }
        if (ve.call(c, "key")) {
          var oe = I(t), N = Object.keys(c).filter(function(ut) {
            return ut !== "key";
          }), De = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[oe + De]) {
            var ot = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, De, oe, ot, oe), ur[oe + De] = !0;
          }
        }
        return t === a ? rt(L) : et(L), L;
      }
    }
    function tt(t, c, d) {
      return sr(t, c, d, !0);
    }
    function nt(t, c, d) {
      return sr(t, c, d, !1);
    }
    var at = nt, it = tt;
    pe.Fragment = a, pe.jsx = at, pe.jsxs = it;
  }()), pe;
}
process.env.NODE_ENV === "production" ? Fe.exports = ct() : Fe.exports = ft();
var M = Fe.exports;
const lt = "-ftnbW_backdrop", vt = {
  backdrop: lt
}, dt = ({ src: e }) => /* @__PURE__ */ M.jsx(
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
}) => /* @__PURE__ */ M.jsx("button", { type: "button", onClick: r, className: gt.button, children: e }), pt = "_PkWlW_controlsContainer", mt = {
  controlsContainer: pt
}, yt = () => /* @__PURE__ */ M.jsxs(
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
      /* @__PURE__ */ M.jsx("title", { children: "Zoom In" }),
      /* @__PURE__ */ M.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ M.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ M.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      /* @__PURE__ */ M.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), bt = () => /* @__PURE__ */ M.jsxs(
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
      /* @__PURE__ */ M.jsx("title", { children: "Zoom Out" }),
      /* @__PURE__ */ M.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ M.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ M.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), wt = ({
  onZoomIn: e,
  onZoomOut: r,
  configuration: n
}) => {
  const a = n.zoomInIcon ?? /* @__PURE__ */ M.jsx(yt, {}), o = n.zoomOutIcon ?? /* @__PURE__ */ M.jsx(bt, {});
  return /* @__PURE__ */ M.jsxs("div", { className: mt.controlsContainer, children: [
    n.hasZoomIn && /* @__PURE__ */ M.jsx(vr, { onClick: e, children: a }),
    n.hasZoomOut && /* @__PURE__ */ M.jsx(vr, { onClick: r, children: o })
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
}, Be = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, Rt = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], Re = {
  CSS: {},
  springs: {}
};
function X(e, r, n) {
  return Math.min(Math.max(e, r), n);
}
function me(e, r) {
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
    return me(Object.prototype.toString.call(e), "Object");
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
    return !wr.hasOwnProperty(e) && !Be.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  }
};
function xr(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r ? r[1].split(",").map(function(n) {
    return parseFloat(n);
  }) : [];
}
function Er(e, r) {
  var n = xr(e), a = X(m.und(n[0]) ? 1 : n[0], 0.1, 100), o = X(m.und(n[1]) ? 100 : n[1], 0.1, 100), u = X(m.und(n[2]) ? 10 : n[2], 0.1, 100), s = X(m.und(n[3]) ? 0 : n[3], 0.1, 100), l = Math.sqrt(o / a), i = u / (2 * Math.sqrt(o * a)), w = i < 1 ? l * Math.sqrt(1 - i * i) : 0, f = 1, v = i < 1 ? (i * l + -s) / w : -s + l;
  function y(p) {
    var g = r ? r * p / 1e3 : p;
    return i < 1 ? g = Math.exp(-g * i * l) * (f * Math.cos(w * g) + v * Math.sin(w * g)) : g = (f + v * g) * Math.exp(-g * l), p === 0 || p === 1 ? p : 1 - g;
  }
  function S() {
    var p = Re.springs[e];
    if (p)
      return p;
    for (var g = 1 / 6, O = 0, _ = 0; ; )
      if (O += g, y(O) === 1) {
        if (_++, _ >= 16)
          break;
      } else
        _ = 0;
    var h = O * g * 1e3;
    return Re.springs[e] = h, h;
  }
  return r ? y : S;
}
function Tt(e) {
  return e === void 0 && (e = 10), function(r) {
    return Math.ceil(X(r, 1e-6, 1) * e) * (1 / e);
  };
}
var _t = function() {
  var e = 11, r = 1 / (e - 1);
  function n(f, v) {
    return 1 - 3 * v + 3 * f;
  }
  function a(f, v) {
    return 3 * v - 6 * f;
  }
  function o(f) {
    return 3 * f;
  }
  function u(f, v, y) {
    return ((n(v, y) * f + a(v, y)) * f + o(v)) * f;
  }
  function s(f, v, y) {
    return 3 * n(v, y) * f * f + 2 * a(v, y) * f + o(v);
  }
  function l(f, v, y, S, p) {
    var g, O, _ = 0;
    do
      O = v + (y - v) / 2, g = u(O, S, p) - f, g > 0 ? y = O : v = O;
    while (Math.abs(g) > 1e-7 && ++_ < 10);
    return O;
  }
  function i(f, v, y, S) {
    for (var p = 0; p < 4; ++p) {
      var g = s(v, y, S);
      if (g === 0)
        return v;
      var O = u(v, y, S) - f;
      v -= O / g;
    }
    return v;
  }
  function w(f, v, y, S) {
    if (!(0 <= f && f <= 1 && 0 <= y && y <= 1))
      return;
    var p = new Float32Array(e);
    if (f !== v || y !== S)
      for (var g = 0; g < e; ++g)
        p[g] = u(g * r, f, y);
    function O(_) {
      for (var h = 0, b = 1, j = e - 1; b !== j && p[b] <= _; ++b)
        h += r;
      --b;
      var A = (_ - p[b]) / (p[b + 1] - p[b]), R = h + A * r, V = s(R, f, y);
      return V >= 1e-3 ? i(_, R, f, y) : V === 0 ? R : l(_, h, h + r, f, y);
    }
    return function(_) {
      return f === v && y === S || _ === 0 || _ === 1 ? _ : u(O(_), v, S);
    };
  }
  return w;
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
      var u = X(a, 1, 10), s = X(o, 0.1, 2);
      return function(l) {
        return l === 0 || l === 1 ? l : -u * Math.pow(2, 10 * (l - 1)) * Math.sin((l - 1 - s / (Math.PI * 2) * Math.asin(1 / u)) * (Math.PI * 2) / s);
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
      return function(l) {
        return 1 - o(u, s)(1 - l);
      };
    }, e["easeInOut" + a] = function(u, s) {
      return function(l) {
        return l < 0.5 ? o(u, s)(l * 2) / 2 : 1 - o(u, s)(l * -2 + 2) / 2;
      };
    }, e["easeOutIn" + a] = function(u, s) {
      return function(l) {
        return l < 0.5 ? (1 - o(u, s)(1 - l * 2)) / 2 : (o(u, s)(l * 2 - 1) + 1) / 2;
      };
    };
  }), e;
}();
function We(e, r) {
  if (m.fnc(e))
    return e;
  var n = e.split("(")[0], a = Rr[n], o = xr(e);
  switch (n) {
    case "spring":
      return Er(e, r);
    case "cubicBezier":
      return Ae(_t, o);
    case "steps":
      return Ae(Tt, o);
    default:
      return Ae(a, o);
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
  for (var n = e.length, a = arguments.length >= 2 ? arguments[1] : void 0, o = [], u = 0; u < n; u++)
    if (u in e) {
      var s = e[u];
      r.call(a, s, u, e) && o.push(s);
    }
  return o;
}
function _e(e) {
  return e.reduce(function(r, n) {
    return r.concat(m.arr(n) ? _e(n) : n);
  }, []);
}
function dr(e) {
  return m.arr(e) ? e : (m.str(e) && (e = Tr(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function $e(e, r) {
  return e.some(function(n) {
    return n === r;
  });
}
function Ye(e) {
  var r = {};
  for (var n in e)
    r[n] = e[n];
  return r;
}
function Le(e, r) {
  var n = Ye(e);
  for (var a in e)
    n[a] = r.hasOwnProperty(a) ? r[a] : e[a];
  return n;
}
function Oe(e, r) {
  var n = Ye(e);
  for (var a in r)
    n[a] = m.und(e[a]) ? r[a] : e[a];
  return n;
}
function Ot(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? "rgba(" + r[1] + ",1)" : e;
}
function Pt(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = e.replace(r, function(l, i, w, f) {
    return i + i + w + w + f + f;
  }), a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n), o = parseInt(a[1], 16), u = parseInt(a[2], 16), s = parseInt(a[3], 16);
  return "rgba(" + o + "," + u + "," + s + ",1)";
}
function St(e) {
  var r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), n = parseInt(r[1], 10) / 360, a = parseInt(r[2], 10) / 100, o = parseInt(r[3], 10) / 100, u = r[4] || 1;
  function s(y, S, p) {
    return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? y + (S - y) * 6 * p : p < 1 / 2 ? S : p < 2 / 3 ? y + (S - y) * (2 / 3 - p) * 6 : y;
  }
  var l, i, w;
  if (a == 0)
    l = i = w = o;
  else {
    var f = o < 0.5 ? o * (1 + a) : o + a - o * a, v = 2 * o - f;
    l = s(v, f, n + 1 / 3), i = s(v, f, n), w = s(v, f, n - 1 / 3);
  }
  return "rgba(" + l * 255 + "," + i * 255 + "," + w * 255 + "," + u + ")";
}
function Ct(e) {
  if (m.rgb(e))
    return Ot(e);
  if (m.hex(e))
    return Pt(e);
  if (m.hsl(e))
    return St(e);
}
function te(e) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (r)
    return r[1];
}
function kt(e) {
  if (me(e, "translate") || e === "perspective")
    return "px";
  if (me(e, "rotate") || me(e, "skew"))
    return "deg";
}
function Ve(e, r) {
  return m.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function ee(e, r) {
  return e.getAttribute(r);
}
function Ne(e, r, n) {
  var a = te(r);
  if ($e([n, "deg", "rad", "turn"], a))
    return r;
  var o = Re.CSS[r + n];
  if (!m.und(o))
    return o;
  var u = 100, s = document.createElement(e.tagName), l = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  l.appendChild(s), s.style.position = "absolute", s.style.width = u + n;
  var i = u / s.offsetWidth;
  l.removeChild(s);
  var w = i * parseFloat(r);
  return Re.CSS[r + n] = w, w;
}
function _r(e, r, n) {
  if (r in e.style) {
    var a = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), o = e.style[r] || getComputedStyle(e).getPropertyValue(a) || "0";
    return n ? Ne(e, o, n) : o;
  }
}
function Ue(e, r) {
  if (m.dom(e) && !m.inp(e) && (!m.nil(ee(e, r)) || m.svg(e) && e[r]))
    return "attribute";
  if (m.dom(e) && $e(Rt, r))
    return "transform";
  if (m.dom(e) && r !== "transform" && _r(e, r))
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
  var o = me(r, "scale") ? 1 : 0 + kt(r), u = Or(e).get(r) || o;
  return n && (n.transforms.list.set(r, u), n.transforms.last = r), a ? Ne(e, u, a) : u;
}
function ze(e, r, n, a) {
  switch (Ue(e, r)) {
    case "transform":
      return jt(e, r, a, n);
    case "css":
      return _r(e, r, n);
    case "attribute":
      return ee(e, r);
    default:
      return e[r] || 0;
  }
}
function Ze(e, r) {
  var n = /^(\*=|\+=|-=)/.exec(e);
  if (!n)
    return e;
  var a = te(e) || 0, o = parseFloat(r), u = parseFloat(e.replace(n[0], ""));
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
    return Ct(e);
  if (/\s/g.test(e))
    return e;
  var n = te(e), a = n ? e.substr(0, e.length - n.length) : e;
  return r ? a + r : a;
}
function qe(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function It(e) {
  return Math.PI * 2 * ee(e, "r");
}
function Mt(e) {
  return ee(e, "width") * 2 + ee(e, "height") * 2;
}
function Dt(e) {
  return qe(
    { x: ee(e, "x1"), y: ee(e, "y1") },
    { x: ee(e, "x2"), y: ee(e, "y2") }
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
function Cr(e) {
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
  var r = Cr(e);
  return e.setAttribute("stroke-dasharray", r), r;
}
function Lt(e) {
  for (var r = e.parentNode; m.svg(r) && m.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function kr(e, r) {
  var n = r || {}, a = n.el || Lt(e), o = a.getBoundingClientRect(), u = ee(a, "viewBox"), s = o.width, l = o.height, i = n.viewBox || (u ? u.split(" ") : [0, 0, s, l]);
  return {
    el: a,
    viewBox: i,
    x: i[0] / 1,
    y: i[1] / 1,
    w: s,
    h: l,
    vW: i[2],
    vH: i[3]
  };
}
function Vt(e, r) {
  var n = m.str(e) ? Tr(e)[0] : e, a = r || 100;
  return function(o) {
    return {
      property: o,
      el: n,
      svg: kr(n),
      totalLength: Cr(n) * (a / 100)
    };
  };
}
function Bt(e, r, n) {
  function a(f) {
    f === void 0 && (f = 0);
    var v = r + f >= 1 ? r + f : 0;
    return e.el.getPointAtLength(v);
  }
  var o = kr(e.el, e.svg), u = a(), s = a(-1), l = a(1), i = n ? 1 : o.w / o.vW, w = n ? 1 : o.h / o.vH;
  switch (e.property) {
    case "x":
      return (u.x - o.x) * i;
    case "y":
      return (u.y - o.y) * w;
    case "angle":
      return Math.atan2(l.y - s.y, l.x - s.x) * 180 / Math.PI;
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
  var r = e ? _e(m.arr(e) ? e.map(dr) : dr(e)) : [];
  return Te(r, function(n, a, o) {
    return o.indexOf(n) === a;
  });
}
function jr(e) {
  var r = He(e);
  return r.map(function(n, a) {
    return { target: n, id: a, total: r.length, transforms: { list: Or(n) } };
  });
}
function Wt(e, r) {
  var n = Ye(r);
  if (/^spring/.test(n.easing) && (n.duration = Er(n.easing)), m.arr(e)) {
    var a = e.length, o = a === 2 && !m.obj(e[0]);
    o ? e = { value: e } : m.fnc(r.duration) || (n.duration = r.duration / a);
  }
  var u = m.arr(e) ? e : [e];
  return u.map(function(s, l) {
    var i = m.obj(s) && !m.pth(s) ? s : { value: s };
    return m.und(i.delay) && (i.delay = l ? 0 : r.delay), m.und(i.endDelay) && (i.endDelay = l === u.length - 1 ? r.endDelay : 0), i;
  }).map(function(s) {
    return Oe(s, n);
  });
}
function $t(e) {
  for (var r = Te(_e(e.map(function(u) {
    return Object.keys(u);
  })), function(u) {
    return m.key(u);
  }).reduce(function(u, s) {
    return u.indexOf(s) < 0 && u.push(s), u;
  }, []), n = {}, a = function(u) {
    var s = r[u];
    n[s] = e.map(function(l) {
      var i = {};
      for (var w in l)
        m.key(w) ? w == s && (i.value = l[w]) : i[w] = l[w];
      return i;
    });
  }, o = 0; o < r.length; o++) a(o);
  return n;
}
function Yt(e, r) {
  var n = [], a = r.keyframes;
  a && (r = Oe($t(a), r));
  for (var o in r)
    m.key(o) && n.push({
      name: o,
      tweens: Wt(r[o], e)
    });
  return n;
}
function Nt(e, r) {
  var n = {};
  for (var a in e) {
    var o = Ve(e[a], r);
    m.arr(o) && (o = o.map(function(u) {
      return Ve(u, r);
    }), o.length === 1 && (o = o[0])), n[a] = o;
  }
  return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n;
}
function Ut(e, r) {
  var n;
  return e.tweens.map(function(a) {
    var o = Nt(a, r), u = o.value, s = m.arr(u) ? u[1] : u, l = te(s), i = ze(r.target, e.name, l, r), w = n ? n.to.original : i, f = m.arr(u) ? u[0] : w, v = te(f) || te(i), y = l || v;
    return m.und(s) && (s = w), o.from = hr(f, y), o.to = hr(Ze(s, f), y), o.start = n ? n.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = We(o.easing, o.duration), o.isPath = m.pth(u), o.isPathTargetInsideSVG = o.isPath && m.svg(r.target), o.isColor = m.col(o.from.original), o.isColor && (o.round = 1), n = o, o;
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
      a.list.forEach(function(s, l) {
        u += l + "(" + s + ") ";
      }), e.style.transform = u;
    }
  }
};
function Mr(e, r) {
  var n = jr(e);
  n.forEach(function(a) {
    for (var o in r) {
      var u = Ve(r[o], a), s = a.target, l = te(u), i = ze(s, o, l, a), w = l || te(i), f = Ze(Pr(u, w), i), v = Ue(s, o);
      Ir[v](s, o, f, a.transforms, !0);
    }
  });
}
function zt(e, r) {
  var n = Ue(e.target, r.name);
  if (n) {
    var a = Ut(r, e), o = a[a.length - 1];
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
  return Te(_e(e.map(function(n) {
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
  var r = Le(wr, e), n = Le(Be, e), a = Yt(n, e), o = jr(e.targets), u = Zt(o, a), s = Dr(u, n), l = gr;
  return gr++, Oe(r, {
    id: l,
    children: [],
    animatables: o,
    animations: u,
    duration: s.duration,
    delay: s.delay,
    endDelay: s.endDelay
  });
}
var G = [], Ar = function() {
  var e;
  function r() {
    !e && (!pr() || !D.suspendWhenDocumentHidden) && G.length > 0 && (e = requestAnimationFrame(n));
  }
  function n(o) {
    for (var u = G.length, s = 0; s < u; ) {
      var l = G[s];
      l.paused ? (G.splice(s, 1), u--) : (l.tick(o), s++);
    }
    e = s > 0 ? requestAnimationFrame(n) : void 0;
  }
  function a() {
    D.suspendWhenDocumentHidden && (pr() ? e = cancelAnimationFrame(e) : (G.forEach(
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
  function l(h) {
    var b = window.Promise && new Promise(function(j) {
      return s = j;
    });
    return h.finished = b, b;
  }
  var i = qt(e);
  l(i);
  function w() {
    var h = i.direction;
    h !== "alternate" && (i.direction = h !== "normal" ? "normal" : "reverse"), i.reversed = !i.reversed, o.forEach(function(b) {
      return b.reversed = i.reversed;
    });
  }
  function f(h) {
    return i.reversed ? i.duration - h : h;
  }
  function v() {
    r = 0, n = f(i.currentTime) * (1 / D.speed);
  }
  function y(h, b) {
    b && b.seek(h - b.timelineOffset);
  }
  function S(h) {
    if (i.reversePlayback)
      for (var j = u; j--; )
        y(h, o[j]);
    else
      for (var b = 0; b < u; b++)
        y(h, o[b]);
  }
  function p(h) {
    for (var b = 0, j = i.animations, A = j.length; b < A; ) {
      var R = j[b], V = R.animatable, U = R.tweens, B = U.length - 1, C = U[B];
      B && (C = Te(U, function(le) {
        return h < le.end;
      })[0] || C);
      for (var z = X(h - C.start - C.delay, 0, C.duration) / C.duration, H = isNaN(z) ? 1 : C.easing(z), I = C.to.strings, W = C.round, Z = [], re = C.to.numbers.length, Y = void 0, J = 0; J < re; J++) {
        var K = void 0, ne = C.to.numbers[J], ie = C.from.numbers[J] || 0;
        C.isPath ? K = Bt(C.value, H * ne, C.isPathTargetInsideSVG) : K = ie + H * (ne - ie), W && (C.isColor && J > 2 || (K = Math.round(K * W) / W)), Z.push(K);
      }
      var ce = I.length;
      if (!ce)
        Y = Z[0];
      else {
        Y = I[0];
        for (var ae = 0; ae < ce; ae++) {
          I[ae];
          var ye = I[ae + 1], fe = Z[ae];
          isNaN(fe) || (ye ? Y += fe + ye : Y += fe + " ");
        }
      }
      Ir[R.type](V.target, R.property, Y, V.transforms), R.currentValue = Y, b++;
    }
  }
  function g(h) {
    i[h] && !i.passThrough && i[h](i);
  }
  function O() {
    i.remaining && i.remaining !== !0 && i.remaining--;
  }
  function _(h) {
    var b = i.duration, j = i.delay, A = b - i.endDelay, R = f(h);
    i.progress = X(R / b * 100, 0, 100), i.reversePlayback = R < i.currentTime, o && S(R), !i.began && i.currentTime > 0 && (i.began = !0, g("begin")), !i.loopBegan && i.currentTime > 0 && (i.loopBegan = !0, g("loopBegin")), R <= j && i.currentTime !== 0 && p(0), (R >= A && i.currentTime !== b || !b) && p(b), R > j && R < A ? (i.changeBegan || (i.changeBegan = !0, i.changeCompleted = !1, g("changeBegin")), g("change"), p(R)) : i.changeBegan && (i.changeCompleted = !0, i.changeBegan = !1, g("changeComplete")), i.currentTime = X(R, 0, b), i.began && g("update"), h >= b && (n = 0, O(), i.remaining ? (r = a, g("loopComplete"), i.loopBegan = !1, i.direction === "alternate" && w()) : (i.paused = !0, i.completed || (i.completed = !0, g("loopComplete"), g("complete"), !i.passThrough && "Promise" in window && (s(), l(i)))));
  }
  return i.reset = function() {
    var h = i.direction;
    i.passThrough = !1, i.currentTime = 0, i.progress = 0, i.paused = !0, i.began = !1, i.loopBegan = !1, i.changeBegan = !1, i.completed = !1, i.changeCompleted = !1, i.reversePlayback = !1, i.reversed = h === "reverse", i.remaining = i.loop, o = i.children, u = o.length;
    for (var b = u; b--; )
      i.children[b].reset();
    (i.reversed && i.loop !== !0 || h === "alternate" && i.loop === 1) && i.remaining++, p(i.reversed ? i.duration : 0);
  }, i._onDocumentVisibility = v, i.set = function(h, b) {
    return Mr(h, b), i;
  }, i.tick = function(h) {
    a = h, r || (r = a), _((a + (n - r)) * D.speed);
  }, i.seek = function(h) {
    _(f(h));
  }, i.pause = function() {
    i.paused = !0, v();
  }, i.play = function() {
    i.paused && (i.completed && i.reset(), i.paused = !1, G.push(i), v(), Ar());
  }, i.reverse = function() {
    w(), i.completed = !i.reversed, v();
  }, i.restart = function() {
    i.reset(), i.play();
  }, i.remove = function(h) {
    var b = He(h);
    Fr(b, i);
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
  for (var r = He(e), n = G.length; n--; ) {
    var a = G[n];
    Fr(r, a);
  }
}
function Jt(e, r) {
  r === void 0 && (r = {});
  var n = r.direction || "normal", a = r.easing ? We(r.easing) : null, o = r.grid, u = r.axis, s = r.from || 0, l = s === "first", i = s === "center", w = s === "last", f = m.arr(e), v = parseFloat(f ? e[0] : e), y = f ? parseFloat(e[1]) : 0, S = te(f ? e[1] : e) || 0, p = r.start || 0 + (f ? v : 0), g = [], O = 0;
  return function(_, h, b) {
    if (l && (s = 0), i && (s = (b - 1) / 2), w && (s = b - 1), !g.length) {
      for (var j = 0; j < b; j++) {
        if (!o)
          g.push(Math.abs(s - j));
        else {
          var A = i ? (o[0] - 1) / 2 : s % o[0], R = i ? (o[1] - 1) / 2 : Math.floor(s / o[0]), V = j % o[0], U = Math.floor(j / o[0]), B = A - V, C = R - U, z = Math.sqrt(B * B + C * C);
          u === "x" && (z = -B), u === "y" && (z = -C), g.push(z);
        }
        O = Math.max.apply(Math, g);
      }
      a && (g = g.map(function(I) {
        return a(I / O) * O;
      })), n === "reverse" && (g = g.map(function(I) {
        return u ? I < 0 ? I * -1 : -I : Math.abs(O - I);
      }));
    }
    var H = f ? (y - v) / O : v;
    return p + H * (Math.round(g[h] * 100) / 100) + S;
  };
}
function Kt(e) {
  e === void 0 && (e = {});
  var r = D(e);
  return r.duration = 0, r.add = function(n, a) {
    var o = G.indexOf(r), u = r.children;
    o > -1 && G.splice(o, 1);
    function s(y) {
      y.passThrough = !0;
    }
    for (var l = 0; l < u.length; l++)
      s(u[l]);
    var i = Oe(n, Le(Be, e));
    i.targets = i.targets || e.targets;
    var w = r.duration;
    i.autoplay = !1, i.direction = r.direction, i.timelineOffset = m.und(a) ? w : Ze(a, w), s(r), r.seek(i.timelineOffset);
    var f = D(i);
    s(f), u.push(f);
    var v = Dr(u, e);
    return r.delay = v.delay, r.endDelay = v.endDelay, r.duration = v.duration, r.seek(0), r.reset(), r.autoplay && r.play(), r;
  }, r;
}
D.version = "3.2.1";
D.speed = 1;
D.suspendWhenDocumentHidden = !0;
D.running = G;
D.remove = Ht;
D.get = ze;
D.set = Mr;
D.convertPx = Ne;
D.path = Vt;
D.setDashoffset = Ft;
D.stagger = Jt;
D.timeline = Kt;
D.easing = We;
D.penner = Rr;
D.random = function(e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
const Gt = "_01_JGa_container", Qt = "_01_JGa_image", yr = {
  container: Gt,
  image: Qt
}, Xt = ({ src: e, state: r }) => {
  const n = Q(null), a = Q(null), o = Q(null), u = Q({
    width: 800,
    height: 450
  }), s = Q({
    width: 800,
    height: 450
  }), l = Q({ width: 800, height: 450 }), i = Q(16 / 9), w = Q(null), f = Q(null), v = Q({
    x: 0,
    y: 0,
    scale: 1
  });
  he(() => {
    const p = new Image();
    p.onload = () => {
      o.current = p;
    }, p.src = e;
  }, [e]), he(() => {
    a.current && (u.current = {
      width: a.current.offsetWidth,
      height: a.current.offsetHeight
    }, n.current && (n.current.width = u.current.width, n.current.height = u.current.height));
  }, []);
  const y = cr(() => {
    if (!o.current) return;
    const p = n.current;
    if (!p) return;
    const g = p.getContext("2d");
    if (!g) return;
    const { width: O, height: _ } = l.current;
    if (!v.current) return;
    const h = v.current.scale, b = O * h, j = _ * h, A = v.current.x - b / 2, R = v.current.y - j / 2;
    g.clearRect(0, 0, p.width, p.height), g.drawImage(
      o.current,
      A,
      R,
      b,
      j
    );
  }, []);
  he(() => {
    en(e).then(({ width: p, height: g }) => {
      s.current = { width: p, height: g };
    }).then(() => {
      i.current = s.current.width / s.current.height, l.current = rn(
        u.current,
        s.current
      ), n.current && (v.current = {
        x: n.current.width / 2,
        y: n.current.height / 2,
        scale: 1
      }, y());
    });
  }, [e, y]);
  const S = cr(
    (p) => {
      var g;
      ((g = w.current) == null ? void 0 : g.progress) !== 100 && (y(), f.current = requestAnimationFrame(() => {
        S(p);
      }));
    },
    [y]
  );
  return he(() => {
    var p, g;
    f.current && cancelAnimationFrame(f.current), (p = w.current) != null && p.complete || (g = w.current) == null || g.pause(), w.current = D({
      targets: v.current,
      scale: r.scale,
      duration: 700,
      easing: "easeInOutExpo",
      autoplay: !0,
      update: (O) => {
        S(O);
      }
    });
  }, [r, S]), he(() => {
    let p = 0, g = 0, O = 0, _ = 0;
    const h = (A) => {
      if (!a.current) return;
      const { clientX: R, clientY: V } = A, { left: U, top: B } = a.current.getBoundingClientRect(), C = R - U, z = V - B;
      v.current.x = O + C - p, v.current.y = _ + z - g, y();
    }, b = () => {
      var ne;
      document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", b);
      const { width: A, height: R } = l.current, { x: V, y: U, scale: B } = v.current, C = A * B, z = R * B, H = V - C / 2, I = V + C / 2, W = U - z / 2, Z = U + z / 2;
      let re = 0, Y = 0;
      H < 0 && I < u.current.width && (re = u.current.width - I), I > u.current.width && H > 0 && (re = -H), W < 0 && Z < u.current.height && (Y = u.current.height - Z), Z > u.current.height && W > 0 && (Y = -W);
      let J = V + re, K = U + Y;
      B <= 1 && n.current && (Math.abs(re) > 0 && (J = n.current.width / 2), Math.abs(Y) > 0 && (K = n.current.height / 2)), f.current && cancelAnimationFrame(f.current), ((ne = w.current) == null ? void 0 : ne.progress) !== 100 && (w.current = null), w.current = D({
        targets: v.current,
        x: J,
        y: K,
        duration: 700,
        easing: "easeOutElastic",
        autoplay: !0,
        update: (ie) => {
          S(ie);
        }
      });
    }, j = (A) => {
      if (!a.current) return;
      const { left: R, top: V } = a.current.getBoundingClientRect();
      p = A.clientX - R, g = A.clientY - V, O = v.current.x, _ = v.current.y, document.addEventListener("mousemove", h), document.addEventListener("mouseup", b);
    };
    if (a.current)
      return a.current.addEventListener("mousedown", j), a.current.addEventListener("mouseup", b), () => {
        var A, R;
        (A = a.current) == null || A.removeEventListener("mousedown", j), (R = a.current) == null || R.removeEventListener("mouseup", b);
      };
  }, [S, y]), /* @__PURE__ */ M.jsx("div", { ref: a, className: yr.container, children: /* @__PURE__ */ M.jsx("canvas", { ref: n, className: yr.image }) });
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
  }, l = { scale: a };
  return /* @__PURE__ */ M.jsxs("div", { className: Et.imageViewerContainer, children: [
    /* @__PURE__ */ M.jsx(dt, { src: e }),
    /* @__PURE__ */ M.jsx(
      wt,
      {
        onZoomIn: u,
        onZoomOut: s,
        configuration: n.controllers
      }
    ),
    /* @__PURE__ */ M.jsx(Xt, { src: e, state: l })
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
