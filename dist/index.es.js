import "./style.css";
import Ae, { useRef as de, useDebugValue as wt, createElement as ao, useContext as io, useEffect as Ge, useCallback as St, useState as so } from "react";
var Dr = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function co() {
  if (xt) return Ze;
  xt = 1;
  var e = Ae, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, a, h) {
    var l, f = {}, v = null, S = null;
    h !== void 0 && (v = "" + h), a.key !== void 0 && (v = "" + a.key), a.ref !== void 0 && (S = a.ref);
    for (l in a) n.call(a, l) && !i.hasOwnProperty(l) && (f[l] = a[l]);
    if (u && u.defaultProps) for (l in a = u.defaultProps, a) f[l] === void 0 && (f[l] = a[l]);
    return { $$typeof: r, type: u, key: v, ref: S, props: f, _owner: o.current };
  }
  return Ze.Fragment = t, Ze.jsx = c, Ze.jsxs = c, Ze;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function uo() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function T(s) {
      if (s === null || typeof s != "object")
        return null;
      var d = g && s[g] || s[m];
      return typeof d == "function" ? d : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(s) {
      {
        for (var d = arguments.length, b = new Array(d > 1 ? d - 1 : 0), C = 1; C < d; C++)
          b[C - 1] = arguments[C];
        y("error", s, b);
      }
    }
    function y(s, d, b) {
      {
        var C = k.ReactDebugCurrentFrame, j = C.getStackAddendum();
        j !== "" && (d += "%s", b = b.concat([j]));
        var N = b.map(function(A) {
          return String(A);
        });
        N.unshift("Warning: " + d), Function.prototype.apply.call(console[s], console, N);
      }
    }
    var R = !1, P = !1, w = !1, x = !1, z = !1, V;
    V = Symbol.for("react.module.reference");
    function I(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || z || s === o || s === h || s === l || x || s === S || R || P || w || typeof s == "object" && s !== null && (s.$$typeof === v || s.$$typeof === f || s.$$typeof === c || s.$$typeof === u || s.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === V || s.getModuleId !== void 0));
    }
    function Z(s, d, b) {
      var C = s.displayName;
      if (C)
        return C;
      var j = d.displayName || d.name || "";
      return j !== "" ? b + "(" + j + ")" : b;
    }
    function ae(s) {
      return s.displayName || "Context";
    }
    function M(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var d = s;
            return ae(d) + ".Consumer";
          case c:
            var b = s;
            return ae(b._context) + ".Provider";
          case a:
            return Z(s, s.render, "ForwardRef");
          case f:
            var C = s.displayName || null;
            return C !== null ? C : M(s.type) || "Memo";
          case v: {
            var j = s, N = j._payload, A = j._init;
            try {
              return M(A(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, X = 0, ge, J, q, F, Q, ee, W;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function xe() {
      {
        if (X === 0) {
          ge = console.log, J = console.info, q = console.warn, F = console.error, Q = console.group, ee = console.groupCollapsed, W = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        X++;
      }
    }
    function ve() {
      {
        if (X--, X === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, s, {
              value: ge
            }),
            info: K({}, s, {
              value: J
            }),
            warn: K({}, s, {
              value: q
            }),
            error: K({}, s, {
              value: F
            }),
            group: K({}, s, {
              value: Q
            }),
            groupCollapsed: K({}, s, {
              value: ee
            }),
            groupEnd: K({}, s, {
              value: W
            })
          });
        }
        X < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = k.ReactCurrentDispatcher, Ee;
    function ue(s, d, b) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (j) {
            var C = j.stack.trim().match(/\n( *(at )?)/);
            Ee = C && C[1] || "";
          }
        return `
` + Ee + s;
      }
    }
    var le = !1, ke;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      ke = new De();
    }
    function fe(s, d) {
      if (!s || le)
        return "";
      {
        var b = ke.get(s);
        if (b !== void 0)
          return b;
      }
      var C;
      le = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = ce.current, ce.current = null, xe();
      try {
        if (d) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (ne) {
              C = ne;
            }
            Reflect.construct(s, [], A);
          } else {
            try {
              A.call();
            } catch (ne) {
              C = ne;
            }
            s.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            C = ne;
          }
          s();
        }
      } catch (ne) {
        if (ne && C && typeof ne.stack == "string") {
          for (var _ = ne.stack.split(`
`), re = C.stack.split(`
`), Y = _.length - 1, U = re.length - 1; Y >= 1 && U >= 0 && _[Y] !== re[U]; )
            U--;
          for (; Y >= 1 && U >= 0; Y--, U--)
            if (_[Y] !== re[U]) {
              if (Y !== 1 || U !== 1)
                do
                  if (Y--, U--, U < 0 || _[Y] !== re[U]) {
                    var ie = `
` + _[Y].replace(" at new ", " at ");
                    return s.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", s.displayName)), typeof s == "function" && ke.set(s, ie), ie;
                  }
                while (Y >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        le = !1, ce.current = N, ve(), Error.prepareStackTrace = j;
      }
      var Ne = s ? s.displayName || s.name : "", Ce = Ne ? ue(Ne) : "";
      return typeof s == "function" && ke.set(s, Ce), Ce;
    }
    function Mn(s, d, b) {
      return fe(s, !1);
    }
    function Nn(s) {
      var d = s.prototype;
      return !!(d && d.isReactComponent);
    }
    function er(s, d, b) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return fe(s, Nn(s));
      if (typeof s == "string")
        return ue(s);
      switch (s) {
        case h:
          return ue("Suspense");
        case l:
          return ue("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case a:
            return Mn(s.render);
          case f:
            return er(s.type, d, b);
          case v: {
            var C = s, j = C._payload, N = C._init;
            try {
              return er(N(j), d, b);
            } catch {
            }
          }
        }
      return "";
    }
    var He = Object.prototype.hasOwnProperty, st = {}, ct = k.ReactDebugCurrentFrame;
    function rr(s) {
      if (s) {
        var d = s._owner, b = er(s.type, s._source, d ? d.type : null);
        ct.setExtraStackFrame(b);
      } else
        ct.setExtraStackFrame(null);
    }
    function Fn(s, d, b, C, j) {
      {
        var N = Function.call.bind(He);
        for (var A in s)
          if (N(s, A)) {
            var _ = void 0;
            try {
              if (typeof s[A] != "function") {
                var re = Error((C || "React class") + ": " + b + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              _ = s[A](d, A, C, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              _ = Y;
            }
            _ && !(_ instanceof Error) && (rr(j), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", b, A, typeof _), rr(null)), _ instanceof Error && !(_.message in st) && (st[_.message] = !0, rr(j), p("Failed %s type: %s", b, _.message), rr(null));
          }
      }
    }
    var Ln = Array.isArray;
    function Er(s) {
      return Ln(s);
    }
    function $n(s) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, b = d && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return b;
      }
    }
    function Bn(s) {
      try {
        return ut(s), !1;
      } catch {
        return !0;
      }
    }
    function ut(s) {
      return "" + s;
    }
    function lt(s) {
      if (Bn(s))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $n(s)), ut(s);
    }
    var qe = k.ReactCurrentOwner, Vn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ft, dt, kr;
    kr = {};
    function zn(s) {
      if (He.call(s, "ref")) {
        var d = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Wn(s) {
      if (He.call(s, "key")) {
        var d = Object.getOwnPropertyDescriptor(s, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Yn(s, d) {
      if (typeof s.ref == "string" && qe.current && d && qe.current.stateNode !== d) {
        var b = M(qe.current.type);
        kr[b] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(qe.current.type), s.ref), kr[b] = !0);
      }
    }
    function Un(s, d) {
      {
        var b = function() {
          ft || (ft = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        b.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function Hn(s, d) {
      {
        var b = function() {
          dt || (dt = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        b.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var qn = function(s, d, b, C, j, N, A) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: d,
        ref: b,
        props: A,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Gn(s, d, b, C, j) {
      {
        var N, A = {}, _ = null, re = null;
        b !== void 0 && (lt(b), _ = "" + b), Wn(d) && (lt(d.key), _ = "" + d.key), zn(d) && (re = d.ref, Yn(d, j));
        for (N in d)
          He.call(d, N) && !Vn.hasOwnProperty(N) && (A[N] = d[N]);
        if (s && s.defaultProps) {
          var Y = s.defaultProps;
          for (N in Y)
            A[N] === void 0 && (A[N] = Y[N]);
        }
        if (_ || re) {
          var U = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          _ && Un(A, U), re && Hn(A, U);
        }
        return qn(s, _, re, j, C, qe.current, A);
      }
    }
    var Rr = k.ReactCurrentOwner, pt = k.ReactDebugCurrentFrame;
    function Me(s) {
      if (s) {
        var d = s._owner, b = er(s.type, s._source, d ? d.type : null);
        pt.setExtraStackFrame(b);
      } else
        pt.setExtraStackFrame(null);
    }
    var Cr;
    Cr = !1;
    function Pr(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function ht() {
      {
        if (Rr.current) {
          var s = M(Rr.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Zn(s) {
      return "";
    }
    var gt = {};
    function Kn(s) {
      {
        var d = ht();
        if (!d) {
          var b = typeof s == "string" ? s : s.displayName || s.name;
          b && (d = `

Check the top-level render call using <` + b + ">.");
        }
        return d;
      }
    }
    function vt(s, d) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var b = Kn(d);
        if (gt[b])
          return;
        gt[b] = !0;
        var C = "";
        s && s._owner && s._owner !== Rr.current && (C = " It was passed a child from " + M(s._owner.type) + "."), Me(s), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, C), Me(null);
      }
    }
    function mt(s, d) {
      {
        if (typeof s != "object")
          return;
        if (Er(s))
          for (var b = 0; b < s.length; b++) {
            var C = s[b];
            Pr(C) && vt(C, d);
          }
        else if (Pr(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var j = T(s);
          if (typeof j == "function" && j !== s.entries)
            for (var N = j.call(s), A; !(A = N.next()).done; )
              Pr(A.value) && vt(A.value, d);
        }
      }
    }
    function Jn(s) {
      {
        var d = s.type;
        if (d == null || typeof d == "string")
          return;
        var b;
        if (typeof d == "function")
          b = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === f))
          b = d.propTypes;
        else
          return;
        if (b) {
          var C = M(d);
          Fn(b, s.props, "prop", C, s);
        } else if (d.PropTypes !== void 0 && !Cr) {
          Cr = !0;
          var j = M(d);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xn(s) {
      {
        for (var d = Object.keys(s.props), b = 0; b < d.length; b++) {
          var C = d[b];
          if (C !== "children" && C !== "key") {
            Me(s), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Me(null);
            break;
          }
        }
        s.ref !== null && (Me(s), p("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var yt = {};
    function bt(s, d, b, C, j, N) {
      {
        var A = I(s);
        if (!A) {
          var _ = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = Zn();
          re ? _ += re : _ += ht();
          var Y;
          s === null ? Y = "null" : Er(s) ? Y = "array" : s !== void 0 && s.$$typeof === r ? (Y = "<" + (M(s.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof s, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, _);
        }
        var U = Gn(s, d, b, j, N);
        if (U == null)
          return U;
        if (A) {
          var ie = d.children;
          if (ie !== void 0)
            if (C)
              if (Er(ie)) {
                for (var Ne = 0; Ne < ie.length; Ne++)
                  mt(ie[Ne], s);
                Object.freeze && Object.freeze(ie);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mt(ie, s);
        }
        if (He.call(d, "key")) {
          var Ce = M(s), ne = Object.keys(d).filter(function(oo) {
            return oo !== "key";
          }), Tr = ne.length > 0 ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yt[Ce + Tr]) {
            var no = ne.length > 0 ? "{" + ne.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Tr, Ce, no, Ce), yt[Ce + Tr] = !0;
          }
        }
        return s === n ? Xn(U) : Jn(U), U;
      }
    }
    function Qn(s, d, b) {
      return bt(s, d, b, !0);
    }
    function eo(s, d, b) {
      return bt(s, d, b, !1);
    }
    var ro = eo, to = Qn;
    Ke.Fragment = n, Ke.jsx = ro, Ke.jsxs = to;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Dr.exports = co() : Dr.exports = uo();
var $ = Dr.exports, oe = function() {
  return oe = Object.assign || function(r) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, oe.apply(this, arguments);
};
function Le(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, o = r.length, i; n < o; n++)
    (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return e.concat(i || Array.prototype.slice.call(r));
}
function lo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var fo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, po = /* @__PURE__ */ lo(
  function(e) {
    return fo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), L = "-ms-", Xe = "-moz-", D = "-webkit-", qt = "comm", hr = "rule", Ur = "decl", ho = "@import", Gt = "@keyframes", go = "@layer", Zt = Math.abs, Hr = String.fromCharCode, Mr = Object.assign;
function vo(e, r) {
  return G(e, 0) ^ 45 ? (((r << 2 ^ G(e, 0)) << 2 ^ G(e, 1)) << 2 ^ G(e, 2)) << 2 ^ G(e, 3) : 0;
}
function Kt(e) {
  return e.trim();
}
function we(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function O(e, r, t) {
  return e.replace(r, t);
}
function ir(e, r, t) {
  return e.indexOf(r, t);
}
function G(e, r) {
  return e.charCodeAt(r) | 0;
}
function $e(e, r, t) {
  return e.slice(r, t);
}
function me(e) {
  return e.length;
}
function Jt(e) {
  return e.length;
}
function Je(e, r) {
  return r.push(e), e;
}
function mo(e, r) {
  return e.map(r).join("");
}
function kt(e, r) {
  return e.filter(function(t) {
    return !we(t, r);
  });
}
var gr = 1, Be = 1, Xt = 0, se = 0, H = 0, Ye = "";
function vr(e, r, t, n, o, i, c, u) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: gr, column: Be, length: c, return: "", siblings: u };
}
function Re(e, r) {
  return Mr(vr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Fe(e) {
  for (; e.root; )
    e = Re(e.root, { children: [e] });
  Je(e, e.siblings);
}
function yo() {
  return H;
}
function bo() {
  return H = se > 0 ? G(Ye, --se) : 0, Be--, H === 10 && (Be = 1, gr--), H;
}
function he() {
  return H = se < Xt ? G(Ye, se++) : 0, Be++, H === 10 && (Be = 1, gr++), H;
}
function Oe() {
  return G(Ye, se);
}
function sr() {
  return se;
}
function mr(e, r) {
  return $e(Ye, e, r);
}
function Nr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function wo(e) {
  return gr = Be = 1, Xt = me(Ye = e), se = 0, [];
}
function So(e) {
  return Ye = "", e;
}
function Or(e) {
  return Kt(mr(se - 1, Fr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xo(e) {
  for (; (H = Oe()) && H < 33; )
    he();
  return Nr(e) > 2 || Nr(H) > 3 ? "" : " ";
}
function Eo(e, r) {
  for (; --r && he() && !(H < 48 || H > 102 || H > 57 && H < 65 || H > 70 && H < 97); )
    ;
  return mr(e, sr() + (r < 6 && Oe() == 32 && he() == 32));
}
function Fr(e) {
  for (; he(); )
    switch (H) {
      case e:
        return se;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fr(H);
        break;
      case 40:
        e === 41 && Fr(e);
        break;
      case 92:
        he();
        break;
    }
  return se;
}
function ko(e, r) {
  for (; he() && e + H !== 57; )
    if (e + H === 84 && Oe() === 47)
      break;
  return "/*" + mr(r, se - 1) + "*" + Hr(e === 47 ? e : he());
}
function Ro(e) {
  for (; !Nr(Oe()); )
    he();
  return mr(e, se);
}
function Co(e) {
  return So(cr("", null, null, null, [""], e = wo(e), 0, [0], e));
}
function cr(e, r, t, n, o, i, c, u, a) {
  for (var h = 0, l = 0, f = c, v = 0, S = 0, g = 0, m = 1, T = 1, k = 1, p = 0, y = "", R = o, P = i, w = n, x = y; T; )
    switch (g = p, p = he()) {
      case 40:
        if (g != 108 && G(x, f - 1) == 58) {
          ir(x += O(Or(p), "&", "&\f"), "&\f", Zt(h ? u[h - 1] : 0)) != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Or(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += xo(g);
        break;
      case 92:
        x += Eo(sr() - 1, 7);
        continue;
      case 47:
        switch (Oe()) {
          case 42:
          case 47:
            Je(Po(ko(he(), sr()), r, t, a), a);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * m:
        u[h++] = me(x) * k;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            T = 0;
          case 59 + l:
            k == -1 && (x = O(x, /\f/g, "")), S > 0 && me(x) - f && Je(S > 32 ? Ct(x + ";", n, t, f - 1, a) : Ct(O(x, " ", "") + ";", n, t, f - 2, a), a);
            break;
          case 59:
            x += ";";
          default:
            if (Je(w = Rt(x, r, t, h, l, o, u, y, R = [], P = [], f, i), i), p === 123)
              if (l === 0)
                cr(x, r, w, w, R, i, f, u, P);
              else
                switch (v === 99 && G(x, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cr(e, w, w, n && Je(Rt(e, w, w, 0, 0, o, u, y, o, R = [], f, P), P), o, P, f, u, n ? R : P);
                    break;
                  default:
                    cr(x, w, w, w, [""], P, 0, u, P);
                }
        }
        h = l = S = 0, m = k = 1, y = x = "", f = c;
        break;
      case 58:
        f = 1 + me(x), S = g;
      default:
        if (m < 1) {
          if (p == 123)
            --m;
          else if (p == 125 && m++ == 0 && bo() == 125)
            continue;
        }
        switch (x += Hr(p), p * m) {
          case 38:
            k = l > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            u[h++] = (me(x) - 1) * k, k = 1;
            break;
          case 64:
            Oe() === 45 && (x += Or(he())), v = Oe(), l = f = me(y = x += Ro(sr())), p++;
            break;
          case 45:
            g === 45 && me(x) == 2 && (m = 0);
        }
    }
  return i;
}
function Rt(e, r, t, n, o, i, c, u, a, h, l, f) {
  for (var v = o - 1, S = o === 0 ? i : [""], g = Jt(S), m = 0, T = 0, k = 0; m < n; ++m)
    for (var p = 0, y = $e(e, v + 1, v = Zt(T = c[m])), R = e; p < g; ++p)
      (R = Kt(T > 0 ? S[p] + " " + y : O(y, /&\f/g, S[p]))) && (a[k++] = R);
  return vr(e, r, t, o === 0 ? hr : u, a, h, l, f);
}
function Po(e, r, t, n) {
  return vr(e, r, t, qt, Hr(yo()), $e(e, 2, -2), 0, n);
}
function Ct(e, r, t, n, o) {
  return vr(e, r, t, Ur, $e(e, 0, n), $e(e, n + 1, -1), n, o);
}
function Qt(e, r, t) {
  switch (vo(e, r)) {
    case 5103:
      return D + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return D + e + e;
    case 4789:
      return Xe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + Xe + e + L + e + e;
    case 5936:
      switch (G(e, r + 11)) {
        case 114:
          return D + e + L + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return D + e + L + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return D + e + L + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return D + e + L + e + e;
    case 6165:
      return D + e + L + "flex-" + e + e;
    case 5187:
      return D + e + O(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + L + "flex-$1$2") + e;
    case 5443:
      return D + e + L + "flex-item-" + O(e, /flex-|-self/g, "") + (we(e, /flex-|baseline/) ? "" : L + "grid-row-" + O(e, /flex-|-self/g, "")) + e;
    case 4675:
      return D + e + L + "flex-line-pack" + O(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return D + e + L + O(e, "shrink", "negative") + e;
    case 5292:
      return D + e + L + O(e, "basis", "preferred-size") + e;
    case 6060:
      return D + "box-" + O(e, "-grow", "") + D + e + L + O(e, "grow", "positive") + e;
    case 4554:
      return D + O(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    case 6187:
      return O(O(O(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, D + "$1$`$1");
    case 4968:
      return O(O(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + L + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D + e + e;
    case 4200:
      if (!we(e, /flex-|baseline/)) return L + "grid-column-align" + $e(e, r) + e;
      break;
    case 2592:
    case 3360:
      return L + O(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(n, o) {
        return r = o, we(n.props, /grid-\w+-end/);
      }) ? ~ir(e + (t = t[r].value), "span", 0) ? e : L + O(e, "-start", "") + e + L + "grid-row-span:" + (~ir(t, "span", 0) ? we(t, /\d+/) : +we(t, /\d+/) - +we(e, /\d+/)) + ";" : L + O(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return we(n.props, /grid-\w+-start/);
      }) ? e : L + O(O(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, D + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (me(e) - 1 - r > 6)
        switch (G(e, r + 1)) {
          case 109:
            if (G(e, r + 4) !== 45)
              break;
          case 102:
            return O(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + Xe + (G(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ir(e, "stretch", 0) ? Qt(O(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return O(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, c, u, a, h) {
        return L + o + ":" + i + h + (c ? L + o + "-span:" + (u ? a : +a - +i) + h : "") + e;
      });
    case 4949:
      if (G(e, r + 6) === 121)
        return O(e, ":", ":" + D) + e;
      break;
    case 6444:
      switch (G(e, G(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return O(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + D + (G(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + L + "$2box$3") + e;
        case 100:
          return O(e, ":", ":" + L) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return O(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function fr(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function To(e, r, t, n) {
  switch (e.type) {
    case go:
      if (e.children.length) break;
    case ho:
    case Ur:
      return e.return = e.return || e.value;
    case qt:
      return "";
    case Gt:
      return e.return = e.value + "{" + fr(e.children, n) + "}";
    case hr:
      if (!me(e.value = e.props.join(","))) return "";
  }
  return me(t = fr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Oo(e) {
  var r = Jt(e);
  return function(t, n, o, i) {
    for (var c = "", u = 0; u < r; u++)
      c += e[u](t, n, o, i) || "";
    return c;
  };
}
function _o(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Ao(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ur:
        e.return = Qt(e.value, e.length, t);
        return;
      case Gt:
        return fr([Re(e, { value: O(e.value, "@", "@" + D) })], n);
      case hr:
        if (e.length)
          return mo(t = e.props, function(o) {
            switch (we(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Fe(Re(e, { props: [O(o, /:(read-\w+)/, ":" + Xe + "$1")] })), Fe(Re(e, { props: [o] })), Mr(e, { props: kt(t, n) });
                break;
              case "::placeholder":
                Fe(Re(e, { props: [O(o, /:(plac\w+)/, ":" + D + "input-$1")] })), Fe(Re(e, { props: [O(o, /:(plac\w+)/, ":" + Xe + "$1")] })), Fe(Re(e, { props: [O(o, /:(plac\w+)/, L + "input-$1")] })), Fe(Re(e, { props: [o] })), Mr(e, { props: kt(t, n) });
                break;
            }
            return "";
          });
    }
}
var Io = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ie = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", en = "active", rn = "data-styled-version", yr = "6.1.11", qr = `/*!sc*/
`, Gr = typeof window < "u" && "HTMLElement" in window, jo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Pt = /invalid hook call/i, tr = /* @__PURE__ */ new Set(), Do = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", n = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var u = [], a = 1; a < arguments.length; a++) u[a - 1] = arguments[a];
        Pt.test(c) ? (i = !1, tr.delete(n)) : o.apply(void 0, Le([c], u, !1));
      }, de(), i && !tr.has(n) && (console.warn(n), tr.add(n));
    } catch (c) {
      Pt.test(c.message) && tr.delete(n);
    } finally {
      console.error = o;
    }
  }
}, br = Object.freeze([]), Ve = Object.freeze({});
function Mo(e, r, t) {
  return t === void 0 && (t = Ve), e.theme !== t.theme && e.theme || r || t.theme;
}
var Lr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), No = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fo = /(^-|-$)/g;
function Tt(e) {
  return e.replace(No, "-").replace(Fo, "");
}
var Lo = /(a)(d)/gi, nr = 52, Ot = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $r(e) {
  var r, t = "";
  for (r = Math.abs(e); r > nr; r = r / nr | 0) t = Ot(r % nr) + t;
  return (Ot(r % nr) + t).replace(Lo, "$1-$2");
}
var _r, tn = 5381, Pe = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, nn = function(e) {
  return Pe(tn, e);
};
function $o(e) {
  return $r(nn(e) >>> 0);
}
function on(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ar(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var an = typeof Symbol == "function" && Symbol.for, sn = an ? Symbol.for("react.memo") : 60115, Bo = an ? Symbol.for("react.forward_ref") : 60112, Vo = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, zo = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, cn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Wo = ((_r = {})[Bo] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, _r[sn] = cn, _r);
function _t(e) {
  return ("type" in (r = e) && r.type.$$typeof) === sn ? cn : "$$typeof" in e ? Wo[e.$$typeof] : Vo;
  var r;
}
var Yo = Object.defineProperty, Uo = Object.getOwnPropertyNames, At = Object.getOwnPropertySymbols, Ho = Object.getOwnPropertyDescriptor, qo = Object.getPrototypeOf, It = Object.prototype;
function un(e, r, t) {
  if (typeof r != "string") {
    if (It) {
      var n = qo(r);
      n && n !== It && un(e, n, t);
    }
    var o = Uo(r);
    At && (o = o.concat(At(r)));
    for (var i = _t(e), c = _t(r), u = 0; u < o.length; ++u) {
      var a = o[u];
      if (!(a in zo || t && t[a] || c && a in c || i && a in i)) {
        var h = Ho(r, a);
        try {
          Yo(e, a, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function ze(e) {
  return typeof e == "function";
}
function Zr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Te(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function jt(e, r) {
  if (e.length === 0) return "";
  for (var t = e[0], n = 1; n < e.length; n++) t += e[n];
  return t;
}
function We(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Br(e, r, t) {
  if (t === void 0 && (t = !1), !t && !We(e) && !Array.isArray(e)) return r;
  if (Array.isArray(r)) for (var n = 0; n < r.length; n++) e[n] = Br(e[n], r[n]);
  else if (We(r)) for (var n in r) e[n] = Br(e[n], r[n]);
  return e;
}
function Kr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var Go = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Zo() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  for (var t = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(c) {
    t = t.replace(/%[a-z]/, c);
  }), t;
}
function Ue(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Zo.apply(void 0, Le([Go[e]], r, !1)).trim());
}
var Ko = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, n = 0; n < r; n++) t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; r >= i; ) if ((i <<= 1) < 0) throw Ue(16, "".concat(r));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var c = o; c < i; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), a = (c = 0, t.length); c < a; c++) this.tag.insertRule(u, t[c]) && (this.groupSizes[r]++, u++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], n = this.indexOfGroup(r), o = n + t;
      this.groupSizes[r] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0) return t;
    for (var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n, c = o; c < i; c++) t += "".concat(this.tag.getRule(c)).concat(qr);
    return t;
  }, e;
}(), Jo = 1 << 30, ur = /* @__PURE__ */ new Map(), dr = /* @__PURE__ */ new Map(), lr = 1, or = function(e) {
  if (ur.has(e)) return ur.get(e);
  for (; dr.has(lr); ) lr++;
  var r = lr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > Jo)) throw Ue(16, "".concat(r));
  return ur.set(e, r), dr.set(r, e), r;
}, Xo = function(e, r) {
  lr = r + 1, ur.set(e, r), dr.set(r, e);
}, Qo = "style[".concat(Ie, "][").concat(rn, '="').concat(yr, '"]'), ea = new RegExp("^".concat(Ie, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ra = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, c = o.length; i < c; i++) (n = o[i]) && e.registerName(r, n);
}, ta = function(e, r) {
  for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(qr), o = [], i = 0, c = n.length; i < c; i++) {
    var u = n[i].trim();
    if (u) {
      var a = u.match(ea);
      if (a) {
        var h = 0 | parseInt(a[1], 10), l = a[2];
        h !== 0 && (Xo(l, h), ra(e, l, a[3]), e.getTag().insertRules(h, o)), o.length = 0;
      } else o.push(u);
    }
  }
};
function na() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ln = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(u) {
    var a = Array.from(u.querySelectorAll("style[".concat(Ie, "]")));
    return a[a.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ie, en), n.setAttribute(rn, yr);
  var c = na();
  return c && n.setAttribute("nonce", c), t.insertBefore(n, i), n;
}, oa = function() {
  function e(r) {
    this.element = ln(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var c = n[o];
        if (c.ownerNode === t) return c;
      }
      throw Ue(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), aa = function() {
  function e(r) {
    this.element = ln(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), ia = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Dt = Gr, sa = { isServer: !Gr, useCSSOMInjection: !jo }, fn = function() {
  function e(r, t, n) {
    r === void 0 && (r = Ve), t === void 0 && (t = {});
    var o = this;
    this.options = oe(oe({}, sa), r), this.gs = t, this.names = new Map(n), this.server = !!r.isServer, !this.server && Gr && Dt && (Dt = !1, function(i) {
      for (var c = document.querySelectorAll(Qo), u = 0, a = c.length; u < a; u++) {
        var h = c[u];
        h && h.getAttribute(Ie) !== en && (ta(i, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this)), Kr(this, function() {
      return function(i) {
        for (var c = i.getTag(), u = c.length, a = "", h = function(f) {
          var v = function(k) {
            return dr.get(k);
          }(f);
          if (v === void 0) return "continue";
          var S = i.names.get(v), g = c.getGroup(f);
          if (S === void 0 || g.length === 0) return "continue";
          var m = "".concat(Ie, ".g").concat(f, '[id="').concat(v, '"]'), T = "";
          S !== void 0 && S.forEach(function(k) {
            k.length > 0 && (T += "".concat(k, ","));
          }), a += "".concat(g).concat(m, '{content:"').concat(T, '"}').concat(qr);
        }, l = 0; l < u; l++) h(l);
        return a;
      }(o);
    });
  }
  return e.registerId = function(r) {
    return or(r);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(oe(oe({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var n = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new ia(o) : n ? new oa(o) : new aa(o);
    }(this.options), new Ko(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (or(r), this.names.has(r)) this.names.get(r).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(r, n);
    }
  }, e.prototype.insertRules = function(r, t, n) {
    this.registerName(r, t), this.getTag().insertRules(or(r), n);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(or(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ca = /&/g, ua = /^\s*\/\/.*$/gm;
function dn(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(n) {
      return "".concat(r, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = dn(t.children, r)), t;
  });
}
function la(e) {
  var r, t, n, o = Ve, i = o.options, c = i === void 0 ? Ve : i, u = o.plugins, a = u === void 0 ? br : u, h = function(v, S, g) {
    return g.startsWith(t) && g.endsWith(t) && g.replaceAll(t, "").length > 0 ? ".".concat(r) : v;
  }, l = a.slice();
  l.push(function(v) {
    v.type === hr && v.value.includes("&") && (v.props[0] = v.props[0].replace(ca, t).replace(n, h));
  }), c.prefix && l.push(Ao), l.push(To);
  var f = function(v, S, g, m) {
    S === void 0 && (S = ""), g === void 0 && (g = ""), m === void 0 && (m = "&"), r = m, t = S, n = new RegExp("\\".concat(t, "\\b"), "g");
    var T = v.replace(ua, ""), k = Co(g || S ? "".concat(g, " ").concat(S, " { ").concat(T, " }") : T);
    c.namespace && (k = dn(k, c.namespace));
    var p = [];
    return fr(k, Oo(l.concat(_o(function(y) {
      return p.push(y);
    })))), p;
  };
  return f.hash = a.length ? a.reduce(function(v, S) {
    return S.name || Ue(15), Pe(v, S.name);
  }, tn).toString() : "", f;
}
var fa = new fn(), Vr = la(), pn = Ae.createContext({ shouldForwardProp: void 0, styleSheet: fa, stylis: Vr });
pn.Consumer;
Ae.createContext(void 0);
function Mt() {
  return io(pn);
}
var Nt = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Vr);
      var c = n.name + i.hash;
      o.hasNameForId(n.id, c) || o.insertRules(n.id, c, i(n.rules, c, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, Kr(this, function() {
      throw Ue(12, String(n.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Vr), this.name + r.hash;
  }, e;
}(), da = function(e) {
  return e >= "A" && e <= "Z";
};
function Ft(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var n = e[t];
    if (t === 1 && n === "-" && e[0] === "-") return e;
    da(n) ? r += "-" + n.toLowerCase() : r += n;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var hn = function(e) {
  return e == null || e === !1 || e === "";
}, gn = function(e) {
  var r, t, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !hn(i) && (Array.isArray(i) && i.isCss || ze(i) ? n.push("".concat(Ft(o), ":"), i, ";") : We(i) ? n.push.apply(n, Le(Le(["".concat(o, " {")], gn(i), !1), ["}"], !1)) : n.push("".concat(Ft(o), ": ").concat((r = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in Io || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function _e(e, r, t, n) {
  if (hn(e)) return [];
  if (Zr(e)) return [".".concat(e.styledComponentId)];
  if (ze(e)) {
    if (!ze(i = e) || i.prototype && i.prototype.isReactComponent || !r) return [e];
    var o = e(r);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Nt || We(o) || o === null || console.error("".concat(on(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), _e(o, r, t, n);
  }
  var i;
  return e instanceof Nt ? t ? (e.inject(t, n), [e.getName(n)]) : [e] : We(e) ? gn(e) : Array.isArray(e) ? Array.prototype.concat.apply(br, e.map(function(c) {
    return _e(c, r, t, n);
  })) : [e.toString()];
}
function pa(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (ze(t) && !Zr(t)) return !1;
  }
  return !0;
}
var ha = nn(yr), ga = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && pa(r), this.componentId = t, this.baseHash = Pe(ha, t), this.baseStyle = n, fn.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = Te(o, this.staticRulesId);
    else {
      var i = jt(_e(this.rules, r, t, n)), c = $r(Pe(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, c)) {
        var u = n(i, ".".concat(c), void 0, this.componentId);
        t.insertRules(this.componentId, c, u);
      }
      o = Te(o, c), this.staticRulesId = c;
    }
    else {
      for (var a = Pe(this.baseHash, n.hash), h = "", l = 0; l < this.rules.length; l++) {
        var f = this.rules[l];
        if (typeof f == "string") h += f, process.env.NODE_ENV !== "production" && (a = Pe(a, f));
        else if (f) {
          var v = jt(_e(f, r, t, n));
          a = Pe(a, v + l), h += v;
        }
      }
      if (h) {
        var S = $r(a >>> 0);
        t.hasNameForId(this.componentId, S) || t.insertRules(this.componentId, S, n(h, ".".concat(S), void 0, this.componentId)), o = Te(o, S);
      }
    }
    return o;
  }, e;
}(), vn = Ae.createContext(void 0);
vn.Consumer;
var Ir = {}, Lt = /* @__PURE__ */ new Set();
function va(e, r, t) {
  var n = Zr(e), o = e, i = !Ar(e), c = r.attrs, u = c === void 0 ? br : c, a = r.componentId, h = a === void 0 ? function(R, P) {
    var w = typeof R != "string" ? "sc" : Tt(R);
    Ir[w] = (Ir[w] || 0) + 1;
    var x = "".concat(w, "-").concat($o(yr + w + Ir[w]));
    return P ? "".concat(P, "-").concat(x) : x;
  }(r.displayName, r.parentComponentId) : a, l = r.displayName, f = l === void 0 ? function(R) {
    return Ar(R) ? "styled.".concat(R) : "Styled(".concat(on(R), ")");
  }(e) : l, v = r.displayName && r.componentId ? "".concat(Tt(r.displayName), "-").concat(r.componentId) : r.componentId || h, S = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, g = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var T = r.shouldForwardProp;
      g = function(R, P) {
        return m(R, P) && T(R, P);
      };
    } else g = m;
  }
  var k = new ga(t, v, n ? o.componentStyle : void 0);
  function p(R, P) {
    return function(w, x, z) {
      var V = w.attrs, I = w.componentStyle, Z = w.defaultProps, ae = w.foldedComponentIds, M = w.styledComponentId, K = w.target, X = Ae.useContext(vn), ge = Mt(), J = w.shouldForwardProp || ge.shouldForwardProp;
      process.env.NODE_ENV !== "production" && wt(M);
      var q = Mo(x, X, Z) || Ve, F = function(ve, ce, Ee) {
        for (var ue, le = oe(oe({}, ce), { className: void 0, theme: Ee }), ke = 0; ke < ve.length; ke += 1) {
          var De = ze(ue = ve[ke]) ? ue(le) : ue;
          for (var fe in De) le[fe] = fe === "className" ? Te(le[fe], De[fe]) : fe === "style" ? oe(oe({}, le[fe]), De[fe]) : De[fe];
        }
        return ce.className && (le.className = Te(le.className, ce.className)), le;
      }(V, x, q), Q = F.as || K, ee = {};
      for (var W in F) F[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && F.theme === q || (W === "forwardedAs" ? ee.as = F.forwardedAs : J && !J(W, Q) || (ee[W] = F[W], J || process.env.NODE_ENV !== "development" || po(W) || Lt.has(W) || !Lr.has(Q) || (Lt.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(ve, ce) {
        var Ee = Mt(), ue = ve.generateAndInjectStyles(ce, Ee.styleSheet, Ee.stylis);
        return process.env.NODE_ENV !== "production" && wt(ue), ue;
      }(I, F);
      process.env.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(te);
      var xe = Te(ae, M);
      return te && (xe += " " + te), F.className && (xe += " " + F.className), ee[Ar(Q) && !Lr.has(Q) ? "class" : "className"] = xe, ee.ref = z, ao(Q, ee);
    }(y, R, P);
  }
  p.displayName = f;
  var y = Ae.forwardRef(p);
  return y.attrs = S, y.componentStyle = k, y.displayName = f, y.shouldForwardProp = g, y.foldedComponentIds = n ? Te(o.foldedComponentIds, o.styledComponentId) : "", y.styledComponentId = v, y.target = n ? o.target : e, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? function(P) {
      for (var w = [], x = 1; x < arguments.length; x++) w[x - 1] = arguments[x];
      for (var z = 0, V = w; z < V.length; z++) Br(P, V[z], !0);
      return P;
    }({}, o.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (Do(f, v), y.warnTooManyClasses = /* @__PURE__ */ function(R, P) {
    var w = {}, x = !1;
    return function(z) {
      if (!x && (w[z] = !0, Object.keys(w).length >= 200)) {
        var V = P ? ' with the id of "'.concat(P, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(R).concat(V, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), x = !0, w = {};
      }
    };
  }(f, v)), Kr(y, function() {
    return ".".concat(y.styledComponentId);
  }), i && un(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), y;
}
function $t(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}
var Bt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ma(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  if (ze(e) || We(e)) return Bt(_e($t(br, Le([e], r, !0))));
  var n = e;
  return r.length === 0 && n.length === 1 && typeof n[0] == "string" ? _e(n) : Bt(_e($t(n, r)));
}
function zr(e, r, t) {
  if (t === void 0 && (t = Ve), !r) throw Ue(1, r);
  var n = function(o) {
    for (var i = [], c = 1; c < arguments.length; c++) i[c - 1] = arguments[c];
    return e(r, t, ma.apply(void 0, Le([o], i, !1)));
  };
  return n.attrs = function(o) {
    return zr(e, r, oe(oe({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return zr(e, r, oe(oe({}, t), o));
  }, n;
}
var mn = function(e) {
  return zr(va, e);
}, je = mn;
Lr.forEach(function(e) {
  je[e] = mn(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ar = "__sc-".concat(Ie, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ar] || (window[ar] = 0), window[ar] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ar] += 1);
const ya = je.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #4B5563;
  filter: blur(1rem);
  transform: scale(1.25);
`, ba = ({ src: e }) => /* @__PURE__ */ $.jsx(
  ya,
  {
    style: {
      backgroundImage: `url(${e})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
), wa = je.button`
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity .15s;

  &:hover {
    opacity: 1;
  }
`, Vt = ({
  children: e,
  onClick: r
}) => /* @__PURE__ */ $.jsx(wa, { type: "button", onClick: r, children: e }), Sa = je.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  padding: 0.5rem;
  border: solid thin rgb(75 85 99 / 0.3);
  border-radius: 0.5rem;
  backdrop-filter: blur(1rem);
  z-index: 10;
`, xa = () => /* @__PURE__ */ $.jsxs(
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
      /* @__PURE__ */ $.jsx("title", { children: "Zoom In" }),
      /* @__PURE__ */ $.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ $.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ $.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      /* @__PURE__ */ $.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), Ea = () => /* @__PURE__ */ $.jsxs(
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
      /* @__PURE__ */ $.jsx("title", { children: "Zoom Out" }),
      /* @__PURE__ */ $.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ $.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      /* @__PURE__ */ $.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
    ]
  }
), ka = ({
  onZoomIn: e,
  onZoomOut: r,
  configuration: t
}) => {
  const n = t.zoomInIcon ?? /* @__PURE__ */ $.jsx(xa, {}), o = t.zoomOutIcon ?? /* @__PURE__ */ $.jsx(Ea, {});
  return /* @__PURE__ */ $.jsxs(Sa, { children: [
    t.hasZoomIn && /* @__PURE__ */ $.jsx(Vt, { onClick: e, children: n }),
    t.hasZoomOut && /* @__PURE__ */ $.jsx(Vt, { onClick: r, children: o })
  ] });
}, Ra = je.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;
var yn = {
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
}, Jr = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, Ca = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], pr = {
  CSS: {},
  springs: {}
};
function ye(e, r, t) {
  return Math.min(Math.max(e, r), t);
}
function Qe(e, r) {
  return e.indexOf(r) > -1;
}
function jr(e, r) {
  return e.apply(null, r);
}
var E = {
  arr: function(e) {
    return Array.isArray(e);
  },
  obj: function(e) {
    return Qe(Object.prototype.toString.call(e), "Object");
  },
  pth: function(e) {
    return E.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function(e) {
    return e instanceof SVGElement;
  },
  inp: function(e) {
    return e instanceof HTMLInputElement;
  },
  dom: function(e) {
    return e.nodeType || E.svg(e);
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
    return E.und(e) || e === null;
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
    return E.hex(e) || E.rgb(e) || E.hsl(e);
  },
  key: function(e) {
    return !yn.hasOwnProperty(e) && !Jr.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  }
};
function bn(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r ? r[1].split(",").map(function(t) {
    return parseFloat(t);
  }) : [];
}
function wn(e, r) {
  var t = bn(e), n = ye(E.und(t[0]) ? 1 : t[0], 0.1, 100), o = ye(E.und(t[1]) ? 100 : t[1], 0.1, 100), i = ye(E.und(t[2]) ? 10 : t[2], 0.1, 100), c = ye(E.und(t[3]) ? 0 : t[3], 0.1, 100), u = Math.sqrt(o / n), a = i / (2 * Math.sqrt(o * n)), h = a < 1 ? u * Math.sqrt(1 - a * a) : 0, l = 1, f = a < 1 ? (a * u + -c) / h : -c + u;
  function v(g) {
    var m = r ? r * g / 1e3 : g;
    return a < 1 ? m = Math.exp(-m * a * u) * (l * Math.cos(h * m) + f * Math.sin(h * m)) : m = (l + f * m) * Math.exp(-m * u), g === 0 || g === 1 ? g : 1 - m;
  }
  function S() {
    var g = pr.springs[e];
    if (g)
      return g;
    for (var m = 1 / 6, T = 0, k = 0; ; )
      if (T += m, v(T) === 1) {
        if (k++, k >= 16)
          break;
      } else
        k = 0;
    var p = T * m * 1e3;
    return pr.springs[e] = p, p;
  }
  return r ? v : S;
}
function Pa(e) {
  return e === void 0 && (e = 10), function(r) {
    return Math.ceil(ye(r, 1e-6, 1) * e) * (1 / e);
  };
}
var Ta = function() {
  var e = 11, r = 1 / (e - 1);
  function t(l, f) {
    return 1 - 3 * f + 3 * l;
  }
  function n(l, f) {
    return 3 * f - 6 * l;
  }
  function o(l) {
    return 3 * l;
  }
  function i(l, f, v) {
    return ((t(f, v) * l + n(f, v)) * l + o(f)) * l;
  }
  function c(l, f, v) {
    return 3 * t(f, v) * l * l + 2 * n(f, v) * l + o(f);
  }
  function u(l, f, v, S, g) {
    var m, T, k = 0;
    do
      T = f + (v - f) / 2, m = i(T, S, g) - l, m > 0 ? v = T : f = T;
    while (Math.abs(m) > 1e-7 && ++k < 10);
    return T;
  }
  function a(l, f, v, S) {
    for (var g = 0; g < 4; ++g) {
      var m = c(f, v, S);
      if (m === 0)
        return f;
      var T = i(f, v, S) - l;
      f -= T / m;
    }
    return f;
  }
  function h(l, f, v, S) {
    if (!(0 <= l && l <= 1 && 0 <= v && v <= 1))
      return;
    var g = new Float32Array(e);
    if (l !== f || v !== S)
      for (var m = 0; m < e; ++m)
        g[m] = i(m * r, l, v);
    function T(k) {
      for (var p = 0, y = 1, R = e - 1; y !== R && g[y] <= k; ++y)
        p += r;
      --y;
      var P = (k - g[y]) / (g[y + 1] - g[y]), w = p + P * r, x = c(w, l, v);
      return x >= 1e-3 ? a(k, w, l, v) : x === 0 ? w : u(k, p, p + r, l, v);
    }
    return function(k) {
      return l === f && v === S || k === 0 || k === 1 ? k : i(T(k), f, S);
    };
  }
  return h;
}(), Sn = function() {
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
        for (var o, i = 4; n < ((o = Math.pow(2, --i)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((o * 3 - 2) / 22 - n, 2);
      };
    },
    Elastic: function(n, o) {
      n === void 0 && (n = 1), o === void 0 && (o = 0.5);
      var i = ye(n, 1, 10), c = ye(o, 0.1, 2);
      return function(u) {
        return u === 0 || u === 1 ? u : -i * Math.pow(2, 10 * (u - 1)) * Math.sin((u - 1 - c / (Math.PI * 2) * Math.asin(1 / i)) * (Math.PI * 2) / c);
      };
    }
  }, t = ["Quad", "Cubic", "Quart", "Quint"];
  return t.forEach(function(n, o) {
    r[n] = function() {
      return function(i) {
        return Math.pow(i, o + 2);
      };
    };
  }), Object.keys(r).forEach(function(n) {
    var o = r[n];
    e["easeIn" + n] = o, e["easeOut" + n] = function(i, c) {
      return function(u) {
        return 1 - o(i, c)(1 - u);
      };
    }, e["easeInOut" + n] = function(i, c) {
      return function(u) {
        return u < 0.5 ? o(i, c)(u * 2) / 2 : 1 - o(i, c)(u * -2 + 2) / 2;
      };
    }, e["easeOutIn" + n] = function(i, c) {
      return function(u) {
        return u < 0.5 ? (1 - o(i, c)(1 - u * 2)) / 2 : (o(i, c)(u * 2 - 1) + 1) / 2;
      };
    };
  }), e;
}();
function Xr(e, r) {
  if (E.fnc(e))
    return e;
  var t = e.split("(")[0], n = Sn[t], o = bn(e);
  switch (t) {
    case "spring":
      return wn(e, r);
    case "cubicBezier":
      return jr(Ta, o);
    case "steps":
      return jr(Pa, o);
    default:
      return jr(n, o);
  }
}
function xn(e) {
  try {
    var r = document.querySelectorAll(e);
    return r;
  } catch {
    return;
  }
}
function wr(e, r) {
  for (var t = e.length, n = arguments.length >= 2 ? arguments[1] : void 0, o = [], i = 0; i < t; i++)
    if (i in e) {
      var c = e[i];
      r.call(n, c, i, e) && o.push(c);
    }
  return o;
}
function Sr(e) {
  return e.reduce(function(r, t) {
    return r.concat(E.arr(t) ? Sr(t) : t);
  }, []);
}
function zt(e) {
  return E.arr(e) ? e : (E.str(e) && (e = xn(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function Qr(e, r) {
  return e.some(function(t) {
    return t === r;
  });
}
function et(e) {
  var r = {};
  for (var t in e)
    r[t] = e[t];
  return r;
}
function Wr(e, r) {
  var t = et(e);
  for (var n in e)
    t[n] = r.hasOwnProperty(n) ? r[n] : e[n];
  return t;
}
function xr(e, r) {
  var t = et(e);
  for (var n in r)
    t[n] = E.und(e[n]) ? r[n] : e[n];
  return t;
}
function Oa(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? "rgba(" + r[1] + ",1)" : e;
}
function _a(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, t = e.replace(r, function(u, a, h, l) {
    return a + a + h + h + l + l;
  }), n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t), o = parseInt(n[1], 16), i = parseInt(n[2], 16), c = parseInt(n[3], 16);
  return "rgba(" + o + "," + i + "," + c + ",1)";
}
function Aa(e) {
  var r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), t = parseInt(r[1], 10) / 360, n = parseInt(r[2], 10) / 100, o = parseInt(r[3], 10) / 100, i = r[4] || 1;
  function c(v, S, g) {
    return g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? v + (S - v) * 6 * g : g < 1 / 2 ? S : g < 2 / 3 ? v + (S - v) * (2 / 3 - g) * 6 : v;
  }
  var u, a, h;
  if (n == 0)
    u = a = h = o;
  else {
    var l = o < 0.5 ? o * (1 + n) : o + n - o * n, f = 2 * o - l;
    u = c(f, l, t + 1 / 3), a = c(f, l, t), h = c(f, l, t - 1 / 3);
  }
  return "rgba(" + u * 255 + "," + a * 255 + "," + h * 255 + "," + i + ")";
}
function Ia(e) {
  if (E.rgb(e))
    return Oa(e);
  if (E.hex(e))
    return _a(e);
  if (E.hsl(e))
    return Aa(e);
}
function Se(e) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (r)
    return r[1];
}
function ja(e) {
  if (Qe(e, "translate") || e === "perspective")
    return "px";
  if (Qe(e, "rotate") || Qe(e, "skew"))
    return "deg";
}
function Yr(e, r) {
  return E.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function be(e, r) {
  return e.getAttribute(r);
}
function rt(e, r, t) {
  var n = Se(r);
  if (Qr([t, "deg", "rad", "turn"], n))
    return r;
  var o = pr.CSS[r + t];
  if (!E.und(o))
    return o;
  var i = 100, c = document.createElement(e.tagName), u = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  u.appendChild(c), c.style.position = "absolute", c.style.width = i + t;
  var a = i / c.offsetWidth;
  u.removeChild(c);
  var h = a * parseFloat(r);
  return pr.CSS[r + t] = h, h;
}
function En(e, r, t) {
  if (r in e.style) {
    var n = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), o = e.style[r] || getComputedStyle(e).getPropertyValue(n) || "0";
    return t ? rt(e, o, t) : o;
  }
}
function tt(e, r) {
  if (E.dom(e) && !E.inp(e) && (!E.nil(be(e, r)) || E.svg(e) && e[r]))
    return "attribute";
  if (E.dom(e) && Qr(Ca, r))
    return "transform";
  if (E.dom(e) && r !== "transform" && En(e, r))
    return "css";
  if (e[r] != null)
    return "object";
}
function kn(e) {
  if (E.dom(e)) {
    for (var r = e.style.transform || "", t = /(\w+)\(([^)]*)\)/g, n = /* @__PURE__ */ new Map(), o; o = t.exec(r); )
      n.set(o[1], o[2]);
    return n;
  }
}
function Da(e, r, t, n) {
  var o = Qe(r, "scale") ? 1 : 0 + ja(r), i = kn(e).get(r) || o;
  return t && (t.transforms.list.set(r, i), t.transforms.last = r), n ? rt(e, i, n) : i;
}
function nt(e, r, t, n) {
  switch (tt(e, r)) {
    case "transform":
      return Da(e, r, n, t);
    case "css":
      return En(e, r, t);
    case "attribute":
      return be(e, r);
    default:
      return e[r] || 0;
  }
}
function ot(e, r) {
  var t = /^(\*=|\+=|-=)/.exec(e);
  if (!t)
    return e;
  var n = Se(e) || 0, o = parseFloat(r), i = parseFloat(e.replace(t[0], ""));
  switch (t[0][0]) {
    case "+":
      return o + i + n;
    case "-":
      return o - i + n;
    case "*":
      return o * i + n;
  }
}
function Rn(e, r) {
  if (E.col(e))
    return Ia(e);
  if (/\s/g.test(e))
    return e;
  var t = Se(e), n = t ? e.substr(0, e.length - t.length) : e;
  return r ? n + r : n;
}
function at(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function Ma(e) {
  return Math.PI * 2 * be(e, "r");
}
function Na(e) {
  return be(e, "width") * 2 + be(e, "height") * 2;
}
function Fa(e) {
  return at(
    { x: be(e, "x1"), y: be(e, "y1") },
    { x: be(e, "x2"), y: be(e, "y2") }
  );
}
function Cn(e) {
  for (var r = e.points, t = 0, n, o = 0; o < r.numberOfItems; o++) {
    var i = r.getItem(o);
    o > 0 && (t += at(n, i)), n = i;
  }
  return t;
}
function La(e) {
  var r = e.points;
  return Cn(e) + at(r.getItem(r.numberOfItems - 1), r.getItem(0));
}
function Pn(e) {
  if (e.getTotalLength)
    return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return Ma(e);
    case "rect":
      return Na(e);
    case "line":
      return Fa(e);
    case "polyline":
      return Cn(e);
    case "polygon":
      return La(e);
  }
}
function $a(e) {
  var r = Pn(e);
  return e.setAttribute("stroke-dasharray", r), r;
}
function Ba(e) {
  for (var r = e.parentNode; E.svg(r) && E.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function Tn(e, r) {
  var t = r || {}, n = t.el || Ba(e), o = n.getBoundingClientRect(), i = be(n, "viewBox"), c = o.width, u = o.height, a = t.viewBox || (i ? i.split(" ") : [0, 0, c, u]);
  return {
    el: n,
    viewBox: a,
    x: a[0] / 1,
    y: a[1] / 1,
    w: c,
    h: u,
    vW: a[2],
    vH: a[3]
  };
}
function Va(e, r) {
  var t = E.str(e) ? xn(e)[0] : e, n = r || 100;
  return function(o) {
    return {
      property: o,
      el: t,
      svg: Tn(t),
      totalLength: Pn(t) * (n / 100)
    };
  };
}
function za(e, r, t) {
  function n(l) {
    l === void 0 && (l = 0);
    var f = r + l >= 1 ? r + l : 0;
    return e.el.getPointAtLength(f);
  }
  var o = Tn(e.el, e.svg), i = n(), c = n(-1), u = n(1), a = t ? 1 : o.w / o.vW, h = t ? 1 : o.h / o.vH;
  switch (e.property) {
    case "x":
      return (i.x - o.x) * a;
    case "y":
      return (i.y - o.y) * h;
    case "angle":
      return Math.atan2(u.y - c.y, u.x - c.x) * 180 / Math.PI;
  }
}
function Wt(e, r) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, n = Rn(E.pth(e) ? e.totalLength : e, r) + "";
  return {
    original: n,
    numbers: n.match(t) ? n.match(t).map(Number) : [0],
    strings: E.str(e) || r ? n.split(t) : []
  };
}
function it(e) {
  var r = e ? Sr(E.arr(e) ? e.map(zt) : zt(e)) : [];
  return wr(r, function(t, n, o) {
    return o.indexOf(t) === n;
  });
}
function On(e) {
  var r = it(e);
  return r.map(function(t, n) {
    return { target: t, id: n, total: r.length, transforms: { list: kn(t) } };
  });
}
function Wa(e, r) {
  var t = et(r);
  if (/^spring/.test(t.easing) && (t.duration = wn(t.easing)), E.arr(e)) {
    var n = e.length, o = n === 2 && !E.obj(e[0]);
    o ? e = { value: e } : E.fnc(r.duration) || (t.duration = r.duration / n);
  }
  var i = E.arr(e) ? e : [e];
  return i.map(function(c, u) {
    var a = E.obj(c) && !E.pth(c) ? c : { value: c };
    return E.und(a.delay) && (a.delay = u ? 0 : r.delay), E.und(a.endDelay) && (a.endDelay = u === i.length - 1 ? r.endDelay : 0), a;
  }).map(function(c) {
    return xr(c, t);
  });
}
function Ya(e) {
  for (var r = wr(Sr(e.map(function(i) {
    return Object.keys(i);
  })), function(i) {
    return E.key(i);
  }).reduce(function(i, c) {
    return i.indexOf(c) < 0 && i.push(c), i;
  }, []), t = {}, n = function(i) {
    var c = r[i];
    t[c] = e.map(function(u) {
      var a = {};
      for (var h in u)
        E.key(h) ? h == c && (a.value = u[h]) : a[h] = u[h];
      return a;
    });
  }, o = 0; o < r.length; o++) n(o);
  return t;
}
function Ua(e, r) {
  var t = [], n = r.keyframes;
  n && (r = xr(Ya(n), r));
  for (var o in r)
    E.key(o) && t.push({
      name: o,
      tweens: Wa(r[o], e)
    });
  return t;
}
function Ha(e, r) {
  var t = {};
  for (var n in e) {
    var o = Yr(e[n], r);
    E.arr(o) && (o = o.map(function(i) {
      return Yr(i, r);
    }), o.length === 1 && (o = o[0])), t[n] = o;
  }
  return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t;
}
function qa(e, r) {
  var t;
  return e.tweens.map(function(n) {
    var o = Ha(n, r), i = o.value, c = E.arr(i) ? i[1] : i, u = Se(c), a = nt(r.target, e.name, u, r), h = t ? t.to.original : a, l = E.arr(i) ? i[0] : h, f = Se(l) || Se(a), v = u || f;
    return E.und(c) && (c = h), o.from = Wt(l, v), o.to = Wt(ot(c, l), v), o.start = t ? t.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = Xr(o.easing, o.duration), o.isPath = E.pth(i), o.isPathTargetInsideSVG = o.isPath && E.svg(r.target), o.isColor = E.col(o.from.original), o.isColor && (o.round = 1), t = o, o;
  });
}
var _n = {
  css: function(e, r, t) {
    return e.style[r] = t;
  },
  attribute: function(e, r, t) {
    return e.setAttribute(r, t);
  },
  object: function(e, r, t) {
    return e[r] = t;
  },
  transform: function(e, r, t, n, o) {
    if (n.list.set(r, t), r === n.last || o) {
      var i = "";
      n.list.forEach(function(c, u) {
        i += u + "(" + c + ") ";
      }), e.style.transform = i;
    }
  }
};
function An(e, r) {
  var t = On(e);
  t.forEach(function(n) {
    for (var o in r) {
      var i = Yr(r[o], n), c = n.target, u = Se(i), a = nt(c, o, u, n), h = u || Se(a), l = ot(Rn(i, h), a), f = tt(c, o);
      _n[f](c, o, l, n.transforms, !0);
    }
  });
}
function Ga(e, r) {
  var t = tt(e.target, r.name);
  if (t) {
    var n = qa(r, e), o = n[n.length - 1];
    return {
      type: t,
      property: r.name,
      animatable: e,
      tweens: n,
      duration: o.end,
      delay: n[0].delay,
      endDelay: o.endDelay
    };
  }
}
function Za(e, r) {
  return wr(Sr(e.map(function(t) {
    return r.map(function(n) {
      return Ga(t, n);
    });
  })), function(t) {
    return !E.und(t);
  });
}
function In(e, r) {
  var t = e.length, n = function(i) {
    return i.timelineOffset ? i.timelineOffset : 0;
  }, o = {};
  return o.duration = t ? Math.max.apply(Math, e.map(function(i) {
    return n(i) + i.duration;
  })) : r.duration, o.delay = t ? Math.min.apply(Math, e.map(function(i) {
    return n(i) + i.delay;
  })) : r.delay, o.endDelay = t ? o.duration - Math.max.apply(Math, e.map(function(i) {
    return n(i) + i.duration - i.endDelay;
  })) : r.endDelay, o;
}
var Yt = 0;
function Ka(e) {
  var r = Wr(yn, e), t = Wr(Jr, e), n = Ua(t, e), o = On(e.targets), i = Za(o, n), c = In(i, t), u = Yt;
  return Yt++, xr(r, {
    id: u,
    children: [],
    animatables: o,
    animations: i,
    duration: c.duration,
    delay: c.delay,
    endDelay: c.endDelay
  });
}
var pe = [], jn = function() {
  var e;
  function r() {
    !e && (!Ut() || !B.suspendWhenDocumentHidden) && pe.length > 0 && (e = requestAnimationFrame(t));
  }
  function t(o) {
    for (var i = pe.length, c = 0; c < i; ) {
      var u = pe[c];
      u.paused ? (pe.splice(c, 1), i--) : (u.tick(o), c++);
    }
    e = c > 0 ? requestAnimationFrame(t) : void 0;
  }
  function n() {
    B.suspendWhenDocumentHidden && (Ut() ? e = cancelAnimationFrame(e) : (pe.forEach(
      function(o) {
        return o._onDocumentVisibility();
      }
    ), jn()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", n), r;
}();
function Ut() {
  return !!document && document.hidden;
}
function B(e) {
  e === void 0 && (e = {});
  var r = 0, t = 0, n = 0, o, i = 0, c = null;
  function u(p) {
    var y = window.Promise && new Promise(function(R) {
      return c = R;
    });
    return p.finished = y, y;
  }
  var a = Ka(e);
  u(a);
  function h() {
    var p = a.direction;
    p !== "alternate" && (a.direction = p !== "normal" ? "normal" : "reverse"), a.reversed = !a.reversed, o.forEach(function(y) {
      return y.reversed = a.reversed;
    });
  }
  function l(p) {
    return a.reversed ? a.duration - p : p;
  }
  function f() {
    r = 0, t = l(a.currentTime) * (1 / B.speed);
  }
  function v(p, y) {
    y && y.seek(p - y.timelineOffset);
  }
  function S(p) {
    if (a.reversePlayback)
      for (var R = i; R--; )
        v(p, o[R]);
    else
      for (var y = 0; y < i; y++)
        v(p, o[y]);
  }
  function g(p) {
    for (var y = 0, R = a.animations, P = R.length; y < P; ) {
      var w = R[y], x = w.animatable, z = w.tweens, V = z.length - 1, I = z[V];
      V && (I = wr(z, function(ce) {
        return p < ce.end;
      })[0] || I);
      for (var Z = ye(p - I.start - I.delay, 0, I.duration) / I.duration, ae = isNaN(Z) ? 1 : I.easing(Z), M = I.to.strings, K = I.round, X = [], ge = I.to.numbers.length, J = void 0, q = 0; q < ge; q++) {
        var F = void 0, Q = I.to.numbers[q], ee = I.from.numbers[q] || 0;
        I.isPath ? F = za(I.value, ae * Q, I.isPathTargetInsideSVG) : F = ee + ae * (Q - ee), K && (I.isColor && q > 2 || (F = Math.round(F * K) / K)), X.push(F);
      }
      var W = M.length;
      if (!W)
        J = X[0];
      else {
        J = M[0];
        for (var te = 0; te < W; te++) {
          M[te];
          var xe = M[te + 1], ve = X[te];
          isNaN(ve) || (xe ? J += ve + xe : J += ve + " ");
        }
      }
      _n[w.type](x.target, w.property, J, x.transforms), w.currentValue = J, y++;
    }
  }
  function m(p) {
    a[p] && !a.passThrough && a[p](a);
  }
  function T() {
    a.remaining && a.remaining !== !0 && a.remaining--;
  }
  function k(p) {
    var y = a.duration, R = a.delay, P = y - a.endDelay, w = l(p);
    a.progress = ye(w / y * 100, 0, 100), a.reversePlayback = w < a.currentTime, o && S(w), !a.began && a.currentTime > 0 && (a.began = !0, m("begin")), !a.loopBegan && a.currentTime > 0 && (a.loopBegan = !0, m("loopBegin")), w <= R && a.currentTime !== 0 && g(0), (w >= P && a.currentTime !== y || !y) && g(y), w > R && w < P ? (a.changeBegan || (a.changeBegan = !0, a.changeCompleted = !1, m("changeBegin")), m("change"), g(w)) : a.changeBegan && (a.changeCompleted = !0, a.changeBegan = !1, m("changeComplete")), a.currentTime = ye(w, 0, y), a.began && m("update"), p >= y && (t = 0, T(), a.remaining ? (r = n, m("loopComplete"), a.loopBegan = !1, a.direction === "alternate" && h()) : (a.paused = !0, a.completed || (a.completed = !0, m("loopComplete"), m("complete"), !a.passThrough && "Promise" in window && (c(), u(a)))));
  }
  return a.reset = function() {
    var p = a.direction;
    a.passThrough = !1, a.currentTime = 0, a.progress = 0, a.paused = !0, a.began = !1, a.loopBegan = !1, a.changeBegan = !1, a.completed = !1, a.changeCompleted = !1, a.reversePlayback = !1, a.reversed = p === "reverse", a.remaining = a.loop, o = a.children, i = o.length;
    for (var y = i; y--; )
      a.children[y].reset();
    (a.reversed && a.loop !== !0 || p === "alternate" && a.loop === 1) && a.remaining++, g(a.reversed ? a.duration : 0);
  }, a._onDocumentVisibility = f, a.set = function(p, y) {
    return An(p, y), a;
  }, a.tick = function(p) {
    n = p, r || (r = n), k((n + (t - r)) * B.speed);
  }, a.seek = function(p) {
    k(l(p));
  }, a.pause = function() {
    a.paused = !0, f();
  }, a.play = function() {
    a.paused && (a.completed && a.reset(), a.paused = !1, pe.push(a), f(), jn());
  }, a.reverse = function() {
    h(), a.completed = !a.reversed, f();
  }, a.restart = function() {
    a.reset(), a.play();
  }, a.remove = function(p) {
    var y = it(p);
    Dn(y, a);
  }, a.reset(), a.autoplay && a.play(), a;
}
function Ht(e, r) {
  for (var t = r.length; t--; )
    Qr(e, r[t].animatable.target) && r.splice(t, 1);
}
function Dn(e, r) {
  var t = r.animations, n = r.children;
  Ht(e, t);
  for (var o = n.length; o--; ) {
    var i = n[o], c = i.animations;
    Ht(e, c), !c.length && !i.children.length && n.splice(o, 1);
  }
  !t.length && !n.length && r.pause();
}
function Ja(e) {
  for (var r = it(e), t = pe.length; t--; ) {
    var n = pe[t];
    Dn(r, n);
  }
}
function Xa(e, r) {
  r === void 0 && (r = {});
  var t = r.direction || "normal", n = r.easing ? Xr(r.easing) : null, o = r.grid, i = r.axis, c = r.from || 0, u = c === "first", a = c === "center", h = c === "last", l = E.arr(e), f = parseFloat(l ? e[0] : e), v = l ? parseFloat(e[1]) : 0, S = Se(l ? e[1] : e) || 0, g = r.start || 0 + (l ? f : 0), m = [], T = 0;
  return function(k, p, y) {
    if (u && (c = 0), a && (c = (y - 1) / 2), h && (c = y - 1), !m.length) {
      for (var R = 0; R < y; R++) {
        if (!o)
          m.push(Math.abs(c - R));
        else {
          var P = a ? (o[0] - 1) / 2 : c % o[0], w = a ? (o[1] - 1) / 2 : Math.floor(c / o[0]), x = R % o[0], z = Math.floor(R / o[0]), V = P - x, I = w - z, Z = Math.sqrt(V * V + I * I);
          i === "x" && (Z = -V), i === "y" && (Z = -I), m.push(Z);
        }
        T = Math.max.apply(Math, m);
      }
      n && (m = m.map(function(M) {
        return n(M / T) * T;
      })), t === "reverse" && (m = m.map(function(M) {
        return i ? M < 0 ? M * -1 : -M : Math.abs(T - M);
      }));
    }
    var ae = l ? (v - f) / T : f;
    return g + ae * (Math.round(m[p] * 100) / 100) + S;
  };
}
function Qa(e) {
  e === void 0 && (e = {});
  var r = B(e);
  return r.duration = 0, r.add = function(t, n) {
    var o = pe.indexOf(r), i = r.children;
    o > -1 && pe.splice(o, 1);
    function c(v) {
      v.passThrough = !0;
    }
    for (var u = 0; u < i.length; u++)
      c(i[u]);
    var a = xr(t, Wr(Jr, e));
    a.targets = a.targets || e.targets;
    var h = r.duration;
    a.autoplay = !1, a.direction = r.direction, a.timelineOffset = E.und(n) ? h : ot(n, h), c(r), r.seek(a.timelineOffset);
    var l = B(a);
    c(l), i.push(l);
    var f = In(i, e);
    return r.delay = f.delay, r.endDelay = f.endDelay, r.duration = f.duration, r.seek(0), r.reset(), r.autoplay && r.play(), r;
  }, r;
}
B.version = "3.2.1";
B.speed = 1;
B.suspendWhenDocumentHidden = !0;
B.running = pe;
B.remove = Ja;
B.get = nt;
B.set = An;
B.convertPx = rt;
B.path = Va;
B.setDashoffset = $a;
B.stagger = Xa;
B.timeline = Qa;
B.easing = Xr;
B.penner = Sn;
B.random = function(e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
const ei = je.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`, ri = je.canvas`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: move;
`, ti = ({ src: e, state: r }) => {
  const t = de(null), n = de(null), o = de(null), i = de({
    width: 800,
    height: 450
  }), c = de({
    width: 800,
    height: 450
  }), u = de({ width: 800, height: 450 }), a = de(16 / 9), h = de(null), l = de(null), f = de({
    x: 0,
    y: 0,
    scale: 1
  });
  Ge(() => {
    const g = new Image();
    g.onload = () => {
      o.current = g;
    }, g.src = e;
  }, [e]), Ge(() => {
    const g = () => {
      n.current && (i.current = {
        width: n.current.offsetWidth,
        height: n.current.offsetHeight
      }, t.current && (t.current.width = i.current.width, t.current.height = i.current.height, v()));
    };
    return g(), window.addEventListener("resize", g), () => {
      window.removeEventListener("resize", g);
    };
  }, []);
  const v = St(() => {
    if (!o.current) return;
    const g = t.current;
    if (!g) return;
    const m = g.getContext("2d");
    if (!m) return;
    const { width: T, height: k } = u.current;
    if (!f.current) return;
    const p = f.current.scale, y = T * p, R = k * p, P = f.current.x - y / 2, w = f.current.y - R / 2;
    m.clearRect(0, 0, g.width, g.height), m.drawImage(
      o.current,
      P,
      w,
      y,
      R
    );
  }, []);
  Ge(() => {
    ni(e).then(({ width: g, height: m }) => {
      c.current = { width: g, height: m };
    }).then(() => {
      a.current = c.current.width / c.current.height, u.current = oi(
        i.current,
        c.current
      ), t.current && (f.current = {
        x: t.current.width / 2,
        y: t.current.height / 2,
        scale: 1
      }, v());
    });
  }, [e, v]);
  const S = St(
    (g) => {
      var m;
      ((m = h.current) == null ? void 0 : m.progress) !== 100 && (v(), l.current = requestAnimationFrame(() => {
        S(g);
      }));
    },
    [v]
  );
  return Ge(() => {
    var g, m;
    l.current && cancelAnimationFrame(l.current), (g = h.current) != null && g.complete || (m = h.current) == null || m.pause(), h.current = B({
      targets: f.current,
      scale: r.scale,
      duration: 700,
      easing: "easeInOutExpo",
      autoplay: !0,
      update: (T) => {
        S(T);
      }
    });
  }, [r, S]), Ge(() => {
    let g = 0, m = 0, T = 0, k = 0;
    const p = (P) => {
      if (!n.current) return;
      const { clientX: w, clientY: x } = P, { left: z, top: V } = n.current.getBoundingClientRect(), I = w - z, Z = x - V;
      f.current.x = T + I - g, f.current.y = k + Z - m, v();
    }, y = () => {
      var W;
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", y);
      const { width: P, height: w } = u.current, { x, y: z, scale: V } = f.current, I = i.current.width, Z = i.current.height, ae = P * V, M = w * V, K = x - ae / 2, X = x + ae / 2, ge = z - M / 2, J = z + M / 2;
      let q = 0, F = 0;
      if (K < 0 && X < I && (q = I - X), X > I && K > 0 && (q = -K), ge < 0 && J < Z && (F = Z - J), J > Z && ge > 0 && (F = -ge), !q && !F)
        return;
      let Q = x + q, ee = z + F;
      t.current && (V <= 1 && (Math.abs(q) > 0 || Math.abs(F) > 0) && (Q = t.current.width / 2, ee = t.current.height / 2), Math.abs(q) > 0 && ae < I && (Q = t.current.width / 2), Math.abs(F) > 0 && M < Z && (ee = t.current.height / 2)), l.current && cancelAnimationFrame(l.current), ((W = h.current) == null ? void 0 : W.progress) !== 100 && (h.current = null), h.current = B({
        targets: f.current,
        x: Q,
        y: ee,
        duration: 700,
        easing: "easeOutElastic",
        autoplay: !0,
        update: (te) => {
          S(te);
        }
      });
    }, R = (P) => {
      if (!n.current) return;
      const { left: w, top: x } = n.current.getBoundingClientRect();
      g = P.clientX - w, m = P.clientY - x, T = f.current.x, k = f.current.y, document.addEventListener("mousemove", p), document.addEventListener("mouseup", y);
    };
    if (n.current)
      return n.current.addEventListener("mousedown", R), n.current.addEventListener("mouseup", y), () => {
        var P, w;
        (P = n.current) == null || P.removeEventListener("mousedown", R), (w = n.current) == null || w.removeEventListener("mouseup", y);
      };
  }, [S, v]), /* @__PURE__ */ $.jsx(ei, { ref: n, children: /* @__PURE__ */ $.jsx(ri, { ref: t }) });
}, ni = (e) => {
  const r = new Image();
  return new Promise((t, n) => {
    r.onload = () => {
      t({ width: r.width, height: r.height });
    }, r.onerror = n, r.src = e;
  });
}, oi = (e, r) => {
  const t = e.width / e.height, n = r.width / r.height;
  return t > n ? {
    width: e.height * n,
    height: e.height
  } : {
    width: e.width,
    height: e.width / n
  };
}, ai = {
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
}, ui = ({
  src: e,
  configuration: r
}) => {
  const t = ii(
    ai,
    r
  ), [n, o] = so(1), i = () => {
    n >= t.viewer.maxScale || o((a) => a + t.viewer.scaleStep);
  }, c = () => {
    n <= t.viewer.minScale || o((a) => a - t.viewer.scaleStep);
  }, u = { scale: n };
  return /* @__PURE__ */ $.jsxs(Ra, { children: [
    /* @__PURE__ */ $.jsx(ba, { src: e }),
    /* @__PURE__ */ $.jsx(
      ka,
      {
        onZoomIn: i,
        onZoomOut: c,
        configuration: t.controllers
      }
    ),
    /* @__PURE__ */ $.jsx(ti, { src: e, state: u })
  ] });
}, ii = (e, r) => ({
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
  ui as ImageViewer
};
