import Ae, { useDebugValue as bt, createElement as io, useRef as de, useContext as so, useEffect as qe, useCallback as wt, useState as co } from "react";
var rr = { exports: {} }, Ge = {};
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
function uo() {
  if (xt) return Ge;
  xt = 1;
  var e = Ae, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, a, m) {
    var l, f = {}, v = null, x = null;
    m !== void 0 && (v = "" + m), a.key !== void 0 && (v = "" + a.key), a.ref !== void 0 && (x = a.ref);
    for (l in a) n.call(a, l) && !i.hasOwnProperty(l) && (f[l] = a[l]);
    if (u && u.defaultProps) for (l in a = u.defaultProps, a) f[l] === void 0 && (f[l] = a[l]);
    return { $$typeof: r, type: u, key: v, ref: x, props: f, _owner: o.current };
  }
  return Ge.Fragment = t, Ge.jsx = c, Ge.jsxs = c, Ge;
}
var Ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function lo() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), h = Symbol.iterator, g = "@@iterator";
    function T(s) {
      if (s === null || typeof s != "object")
        return null;
      var d = h && s[h] || s[g];
      return typeof d == "function" ? d : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(s) {
      {
        for (var d = arguments.length, w = new Array(d > 1 ? d - 1 : 0), C = 1; C < d; C++)
          w[C - 1] = arguments[C];
        y("error", s, w);
      }
    }
    function y(s, d, w) {
      {
        var C = k.ReactDebugCurrentFrame, j = C.getStackAddendum();
        j !== "" && (d += "%s", w = w.concat([j]));
        var N = w.map(function(A) {
          return String(A);
        });
        N.unshift("Warning: " + d), Function.prototype.apply.call(console[s], console, N);
      }
    }
    var R = !1, P = !1, b = !1, S = !1, V = !1, z;
    z = Symbol.for("react.module.reference");
    function I(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || V || s === o || s === m || s === l || S || s === x || R || P || b || typeof s == "object" && s !== null && (s.$$typeof === v || s.$$typeof === f || s.$$typeof === c || s.$$typeof === u || s.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === z || s.getModuleId !== void 0));
    }
    function Z(s, d, w) {
      var C = s.displayName;
      if (C)
        return C;
      var j = d.displayName || d.name || "";
      return j !== "" ? w + "(" + j + ")" : w;
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
        case m:
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
            var w = s;
            return ae(w._context) + ".Provider";
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
    var K = Object.assign, X = 0, ve, J, q, F, Q, ee, W;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function Se() {
      {
        if (X === 0) {
          ve = console.log, J = console.info, q = console.warn, F = console.error, Q = console.group, ee = console.groupCollapsed, W = console.groupEnd;
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
    function ge() {
      {
        if (X--, X === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, s, {
              value: ve
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
    function ue(s, d, w) {
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
        var w = ke.get(s);
        if (w !== void 0)
          return w;
      }
      var C;
      le = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = ce.current, ce.current = null, Se();
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
        le = !1, ce.current = N, ge(), Error.prepareStackTrace = j;
      }
      var Ne = s ? s.displayName || s.name : "", Ce = Ne ? ue(Ne) : "";
      return typeof s == "function" && ke.set(s, Ce), Ce;
    }
    function Nn(s, d, w) {
      return fe(s, !1);
    }
    function Fn(s) {
      var d = s.prototype;
      return !!(d && d.isReactComponent);
    }
    function Qe(s, d, w) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return fe(s, Fn(s));
      if (typeof s == "string")
        return ue(s);
      switch (s) {
        case m:
          return ue("Suspense");
        case l:
          return ue("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case a:
            return Nn(s.render);
          case f:
            return Qe(s.type, d, w);
          case v: {
            var C = s, j = C._payload, N = C._init;
            try {
              return Qe(N(j), d, w);
            } catch {
            }
          }
        }
      return "";
    }
    var He = Object.prototype.hasOwnProperty, at = {}, it = k.ReactDebugCurrentFrame;
    function er(s) {
      if (s) {
        var d = s._owner, w = Qe(s.type, s._source, d ? d.type : null);
        it.setExtraStackFrame(w);
      } else
        it.setExtraStackFrame(null);
    }
    function Ln(s, d, w, C, j) {
      {
        var N = Function.call.bind(He);
        for (var A in s)
          if (N(s, A)) {
            var _ = void 0;
            try {
              if (typeof s[A] != "function") {
                var re = Error((C || "React class") + ": " + w + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              _ = s[A](d, A, C, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              _ = Y;
            }
            _ && !(_ instanceof Error) && (er(j), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", w, A, typeof _), er(null)), _ instanceof Error && !(_.message in at) && (at[_.message] = !0, er(j), p("Failed %s type: %s", w, _.message), er(null));
          }
      }
    }
    var $n = Array.isArray;
    function kr(s) {
      return $n(s);
    }
    function Bn(s) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, w = d && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w;
      }
    }
    function Vn(s) {
      try {
        return st(s), !1;
      } catch {
        return !0;
      }
    }
    function st(s) {
      return "" + s;
    }
    function ct(s) {
      if (Vn(s))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(s)), st(s);
    }
    var ut = k.ReactCurrentOwner, zn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, ft;
    function Wn(s) {
      if (He.call(s, "ref")) {
        var d = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Yn(s) {
      if (He.call(s, "key")) {
        var d = Object.getOwnPropertyDescriptor(s, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Un(s, d) {
      typeof s.ref == "string" && ut.current;
    }
    function Hn(s, d) {
      {
        var w = function() {
          lt || (lt = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function qn(s, d) {
      {
        var w = function() {
          ft || (ft = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Gn = function(s, d, w, C, j, N, A) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: d,
        ref: w,
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
    function Zn(s, d, w, C, j) {
      {
        var N, A = {}, _ = null, re = null;
        w !== void 0 && (ct(w), _ = "" + w), Yn(d) && (ct(d.key), _ = "" + d.key), Wn(d) && (re = d.ref, Un(d, j));
        for (N in d)
          He.call(d, N) && !zn.hasOwnProperty(N) && (A[N] = d[N]);
        if (s && s.defaultProps) {
          var Y = s.defaultProps;
          for (N in Y)
            A[N] === void 0 && (A[N] = Y[N]);
        }
        if (_ || re) {
          var U = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          _ && Hn(A, U), re && qn(A, U);
        }
        return Gn(s, _, re, j, C, ut.current, A);
      }
    }
    var Rr = k.ReactCurrentOwner, dt = k.ReactDebugCurrentFrame;
    function Me(s) {
      if (s) {
        var d = s._owner, w = Qe(s.type, s._source, d ? d.type : null);
        dt.setExtraStackFrame(w);
      } else
        dt.setExtraStackFrame(null);
    }
    var Cr;
    Cr = !1;
    function Pr(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function pt() {
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
    function Kn(s) {
      return "";
    }
    var ht = {};
    function Jn(s) {
      {
        var d = pt();
        if (!d) {
          var w = typeof s == "string" ? s : s.displayName || s.name;
          w && (d = `

Check the top-level render call using <` + w + ">.");
        }
        return d;
      }
    }
    function vt(s, d) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var w = Jn(d);
        if (ht[w])
          return;
        ht[w] = !0;
        var C = "";
        s && s._owner && s._owner !== Rr.current && (C = " It was passed a child from " + M(s._owner.type) + "."), Me(s), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, C), Me(null);
      }
    }
    function gt(s, d) {
      {
        if (typeof s != "object")
          return;
        if (kr(s))
          for (var w = 0; w < s.length; w++) {
            var C = s[w];
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
    function Xn(s) {
      {
        var d = s.type;
        if (d == null || typeof d == "string")
          return;
        var w;
        if (typeof d == "function")
          w = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === f))
          w = d.propTypes;
        else
          return;
        if (w) {
          var C = M(d);
          Ln(w, s.props, "prop", C, s);
        } else if (d.PropTypes !== void 0 && !Cr) {
          Cr = !0;
          var j = M(d);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qn(s) {
      {
        for (var d = Object.keys(s.props), w = 0; w < d.length; w++) {
          var C = d[w];
          if (C !== "children" && C !== "key") {
            Me(s), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Me(null);
            break;
          }
        }
        s.ref !== null && (Me(s), p("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var mt = {};
    function yt(s, d, w, C, j, N) {
      {
        var A = I(s);
        if (!A) {
          var _ = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = Kn();
          re ? _ += re : _ += pt();
          var Y;
          s === null ? Y = "null" : kr(s) ? Y = "array" : s !== void 0 && s.$$typeof === r ? (Y = "<" + (M(s.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof s, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, _);
        }
        var U = Zn(s, d, w, j, N);
        if (U == null)
          return U;
        if (A) {
          var ie = d.children;
          if (ie !== void 0)
            if (C)
              if (kr(ie)) {
                for (var Ne = 0; Ne < ie.length; Ne++)
                  gt(ie[Ne], s);
                Object.freeze && Object.freeze(ie);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gt(ie, s);
        }
        if (He.call(d, "key")) {
          var Ce = M(s), ne = Object.keys(d).filter(function(ao) {
            return ao !== "key";
          }), Tr = ne.length > 0 ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mt[Ce + Tr]) {
            var oo = ne.length > 0 ? "{" + ne.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Tr, Ce, oo, Ce), mt[Ce + Tr] = !0;
          }
        }
        return s === n ? Qn(U) : Xn(U), U;
      }
    }
    function eo(s, d, w) {
      return yt(s, d, w, !0);
    }
    function ro(s, d, w) {
      return yt(s, d, w, !1);
    }
    var to = ro, no = eo;
    Ze.Fragment = n, Ze.jsx = to, Ze.jsxs = no;
  }()), Ze;
}
var Et;
function fo() {
  return Et || (Et = 1, process.env.NODE_ENV === "production" ? rr.exports = uo() : rr.exports = lo()), rr.exports;
}
var $ = fo(), oe = function() {
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
function po(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ho = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vo = /* @__PURE__ */ po(
  function(e) {
    return ho.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), L = "-ms-", Je = "-moz-", D = "-webkit-", Gt = "comm", vr = "rule", Yr = "decl", go = "@import", Zt = "@keyframes", mo = "@layer", Kt = Math.abs, Ur = String.fromCharCode, Dr = Object.assign;
function yo(e, r) {
  return G(e, 0) ^ 45 ? (((r << 2 ^ G(e, 0)) << 2 ^ G(e, 1)) << 2 ^ G(e, 2)) << 2 ^ G(e, 3) : 0;
}
function Jt(e) {
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
function Xt(e) {
  return e.length;
}
function Ke(e, r) {
  return r.push(e), e;
}
function bo(e, r) {
  return e.map(r).join("");
}
function kt(e, r) {
  return e.filter(function(t) {
    return !we(t, r);
  });
}
var gr = 1, Be = 1, Qt = 0, se = 0, H = 0, Ye = "";
function mr(e, r, t, n, o, i, c, u) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: gr, column: Be, length: c, return: "", siblings: u };
}
function Re(e, r) {
  return Dr(mr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Fe(e) {
  for (; e.root; )
    e = Re(e.root, { children: [e] });
  Ke(e, e.siblings);
}
function wo() {
  return H;
}
function xo() {
  return H = se > 0 ? G(Ye, --se) : 0, Be--, H === 10 && (Be = 1, gr--), H;
}
function he() {
  return H = se < Qt ? G(Ye, se++) : 0, Be++, H === 10 && (Be = 1, gr++), H;
}
function Oe() {
  return G(Ye, se);
}
function sr() {
  return se;
}
function yr(e, r) {
  return $e(Ye, e, r);
}
function Mr(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function So(e) {
  return gr = Be = 1, Qt = me(Ye = e), se = 0, [];
}
function Eo(e) {
  return Ye = "", e;
}
function Or(e) {
  return Jt(yr(se - 1, Nr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ko(e) {
  for (; (H = Oe()) && H < 33; )
    he();
  return Mr(e) > 2 || Mr(H) > 3 ? "" : " ";
}
function Ro(e, r) {
  for (; --r && he() && !(H < 48 || H > 102 || H > 57 && H < 65 || H > 70 && H < 97); )
    ;
  return yr(e, sr() + (r < 6 && Oe() == 32 && he() == 32));
}
function Nr(e) {
  for (; he(); )
    switch (H) {
      // ] ) " '
      case e:
        return se;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nr(H);
        break;
      // (
      case 40:
        e === 41 && Nr(e);
        break;
      // \
      case 92:
        he();
        break;
    }
  return se;
}
function Co(e, r) {
  for (; he() && e + H !== 57; )
    if (e + H === 84 && Oe() === 47)
      break;
  return "/*" + yr(r, se - 1) + "*" + Ur(e === 47 ? e : he());
}
function Po(e) {
  for (; !Mr(Oe()); )
    he();
  return yr(e, se);
}
function To(e) {
  return Eo(cr("", null, null, null, [""], e = So(e), 0, [0], e));
}
function cr(e, r, t, n, o, i, c, u, a) {
  for (var m = 0, l = 0, f = c, v = 0, x = 0, h = 0, g = 1, T = 1, k = 1, p = 0, y = "", R = o, P = i, b = n, S = y; T; )
    switch (h = p, p = he()) {
      // (
      case 40:
        if (h != 108 && G(S, f - 1) == 58) {
          ir(S += O(Or(p), "&", "&\f"), "&\f", Kt(m ? u[m - 1] : 0)) != -1 && (k = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += Or(p);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += ko(h);
        break;
      // \
      case 92:
        S += Ro(sr() - 1, 7);
        continue;
      // /
      case 47:
        switch (Oe()) {
          case 42:
          case 47:
            Ke(Oo(Co(he(), sr()), r, t, a), a);
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * g:
        u[m++] = me(S) * k;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          // \0 }
          case 0:
          case 125:
            T = 0;
          // ;
          case 59 + l:
            k == -1 && (S = O(S, /\f/g, "")), x > 0 && me(S) - f && Ke(x > 32 ? Ct(S + ";", n, t, f - 1, a) : Ct(O(S, " ", "") + ";", n, t, f - 2, a), a);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (Ke(b = Rt(S, r, t, m, l, o, u, y, R = [], P = [], f, i), i), p === 123)
              if (l === 0)
                cr(S, r, b, b, R, i, f, u, P);
              else
                switch (v === 99 && G(S, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cr(e, b, b, n && Ke(Rt(e, b, b, 0, 0, o, u, y, o, R = [], f, P), P), o, P, f, u, n ? R : P);
                    break;
                  default:
                    cr(S, b, b, b, [""], P, 0, u, P);
                }
        }
        m = l = x = 0, g = k = 1, y = S = "", f = c;
        break;
      // :
      case 58:
        f = 1 + me(S), x = h;
      default:
        if (g < 1) {
          if (p == 123)
            --g;
          else if (p == 125 && g++ == 0 && xo() == 125)
            continue;
        }
        switch (S += Ur(p), p * g) {
          // &
          case 38:
            k = l > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            u[m++] = (me(S) - 1) * k, k = 1;
            break;
          // @
          case 64:
            Oe() === 45 && (S += Or(he())), v = Oe(), l = f = me(y = S += Po(sr())), p++;
            break;
          // -
          case 45:
            h === 45 && me(S) == 2 && (g = 0);
        }
    }
  return i;
}
function Rt(e, r, t, n, o, i, c, u, a, m, l, f) {
  for (var v = o - 1, x = o === 0 ? i : [""], h = Xt(x), g = 0, T = 0, k = 0; g < n; ++g)
    for (var p = 0, y = $e(e, v + 1, v = Kt(T = c[g])), R = e; p < h; ++p)
      (R = Jt(T > 0 ? x[p] + " " + y : O(y, /&\f/g, x[p]))) && (a[k++] = R);
  return mr(e, r, t, o === 0 ? vr : u, a, m, l, f);
}
function Oo(e, r, t, n) {
  return mr(e, r, t, Gt, Ur(wo()), $e(e, 2, -2), 0, n);
}
function Ct(e, r, t, n, o) {
  return mr(e, r, t, Yr, $e(e, 0, n), $e(e, n + 1, -1), n, o);
}
function en(e, r, t) {
  switch (yo(e, r)) {
    // color-adjust
    case 5103:
      return D + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return D + e + e;
    // tab-size
    case 4789:
      return Je + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + Je + e + L + e + e;
    // writing-mode
    case 5936:
      switch (G(e, r + 11)) {
        // vertical-l(r)
        case 114:
          return D + e + L + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return D + e + L + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return D + e + L + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return D + e + L + e + e;
    // order
    case 6165:
      return D + e + L + "flex-" + e + e;
    // align-items
    case 5187:
      return D + e + O(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + L + "flex-$1$2") + e;
    // align-self
    case 5443:
      return D + e + L + "flex-item-" + O(e, /flex-|-self/g, "") + (we(e, /flex-|baseline/) ? "" : L + "grid-row-" + O(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return D + e + L + "flex-line-pack" + O(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return D + e + L + O(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return D + e + L + O(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return D + "box-" + O(e, "-grow", "") + D + e + L + O(e, "grow", "positive") + e;
    // transition
    case 4554:
      return D + O(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    // cursor
    case 6187:
      return O(O(O(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, D + "$1$`$1");
    // justify-content
    case 4968:
      return O(O(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + L + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D + e + e;
    // justify-self
    case 4200:
      if (!we(e, /flex-|baseline/)) return L + "grid-column-align" + $e(e, r) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return L + O(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(n, o) {
        return r = o, we(n.props, /grid-\w+-end/);
      }) ? ~ir(e + (t = t[r].value), "span", 0) ? e : L + O(e, "-start", "") + e + L + "grid-row-span:" + (~ir(t, "span", 0) ? we(t, /\d+/) : +we(t, /\d+/) - +we(e, /\d+/)) + ";" : L + O(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return we(n.props, /grid-\w+-start/);
      }) ? e : L + O(O(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, D + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
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
          // (m)ax-content, (m)in-content
          case 109:
            if (G(e, r + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return O(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + Je + (G(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ir(e, "stretch", 0) ? en(O(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return O(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, c, u, a, m) {
        return L + o + ":" + i + m + (c ? L + o + "-span:" + (u ? a : +a - +i) + m : "") + e;
      });
    // position: sticky
    case 4949:
      if (G(e, r + 6) === 121)
        return O(e, ":", ":" + D) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (G(e, G(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return O(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + D + (G(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + L + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return O(e, ":", ":" + L) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
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
function _o(e, r, t, n) {
  switch (e.type) {
    case mo:
      if (e.children.length) break;
    case go:
    case Yr:
      return e.return = e.return || e.value;
    case Gt:
      return "";
    case Zt:
      return e.return = e.value + "{" + fr(e.children, n) + "}";
    case vr:
      if (!me(e.value = e.props.join(","))) return "";
  }
  return me(t = fr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ao(e) {
  var r = Xt(e);
  return function(t, n, o, i) {
    for (var c = "", u = 0; u < r; u++)
      c += e[u](t, n, o, i) || "";
    return c;
  };
}
function Io(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function jo(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Yr:
        e.return = en(e.value, e.length, t);
        return;
      case Zt:
        return fr([Re(e, { value: O(e.value, "@", "@" + D) })], n);
      case vr:
        if (e.length)
          return bo(t = e.props, function(o) {
            switch (we(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Fe(Re(e, { props: [O(o, /:(read-\w+)/, ":" + Je + "$1")] })), Fe(Re(e, { props: [o] })), Dr(e, { props: kt(t, n) });
                break;
              // :placeholder
              case "::placeholder":
                Fe(Re(e, { props: [O(o, /:(plac\w+)/, ":" + D + "input-$1")] })), Fe(Re(e, { props: [O(o, /:(plac\w+)/, ":" + Je + "$1")] })), Fe(Re(e, { props: [O(o, /:(plac\w+)/, L + "input-$1")] })), Fe(Re(e, { props: [o] })), Dr(e, { props: kt(t, n) });
                break;
            }
            return "";
          });
    }
}
var Do = {
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
}, Ie = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", rn = "active", tn = "data-styled-version", br = "6.1.16", Hr = `/*!sc*/
`, dr = typeof window < "u" && "HTMLElement" in window, Mo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Pt = /invalid hook call/i, tr = /* @__PURE__ */ new Set(), No = function(e, r) {
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
}, wr = Object.freeze([]), Ve = Object.freeze({});
function Fo(e, r, t) {
  return t === void 0 && (t = Ve), e.theme !== t.theme && e.theme || r || t.theme;
}
var Fr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Lo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $o = /(^-|-$)/g;
function Tt(e) {
  return e.replace(Lo, "-").replace($o, "");
}
var Bo = /(a)(d)/gi, nr = 52, Ot = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Lr(e) {
  var r, t = "";
  for (r = Math.abs(e); r > nr; r = r / nr | 0) t = Ot(r % nr) + t;
  return (Ot(r % nr) + t).replace(Bo, "$1-$2");
}
var _r, nn = 5381, Pe = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, on = function(e) {
  return Pe(nn, e);
};
function Vo(e) {
  return Lr(on(e) >>> 0);
}
function an(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ar(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var sn = typeof Symbol == "function" && Symbol.for, cn = sn ? Symbol.for("react.memo") : 60115, zo = sn ? Symbol.for("react.forward_ref") : 60112, Wo = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Yo = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, un = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Uo = ((_r = {})[zo] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, _r[cn] = un, _r);
function _t(e) {
  return ("type" in (r = e) && r.type.$$typeof) === cn ? un : "$$typeof" in e ? Uo[e.$$typeof] : Wo;
  var r;
}
var Ho = Object.defineProperty, qo = Object.getOwnPropertyNames, At = Object.getOwnPropertySymbols, Go = Object.getOwnPropertyDescriptor, Zo = Object.getPrototypeOf, It = Object.prototype;
function ln(e, r, t) {
  if (typeof r != "string") {
    if (It) {
      var n = Zo(r);
      n && n !== It && ln(e, n, t);
    }
    var o = qo(r);
    At && (o = o.concat(At(r)));
    for (var i = _t(e), c = _t(r), u = 0; u < o.length; ++u) {
      var a = o[u];
      if (!(a in Yo || t && t[a] || c && a in c || i && a in i)) {
        var m = Go(r, a);
        try {
          Ho(e, a, m);
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
function qr(e) {
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
function $r(e, r, t) {
  if (t === void 0 && (t = !1), !t && !We(e) && !Array.isArray(e)) return r;
  if (Array.isArray(r)) for (var n = 0; n < r.length; n++) e[n] = $r(e[n], r[n]);
  else if (We(r)) for (var n in r) e[n] = $r(e[n], r[n]);
  return e;
}
function Gr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var Ko = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Jo() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  for (var t = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(c) {
    t = t.replace(/%[a-z]/, c);
  }), t;
}
function Ue(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Jo.apply(void 0, Le([Ko[e]], r, !1)).trim());
}
var Xo = function() {
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
    for (var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n, c = o; c < i; c++) t += "".concat(this.tag.getRule(c)).concat(Hr);
    return t;
  }, e;
}(), Qo = 1 << 30, ur = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), lr = 1, or = function(e) {
  if (ur.has(e)) return ur.get(e);
  for (; pr.has(lr); ) lr++;
  var r = lr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > Qo)) throw Ue(16, "".concat(r));
  return ur.set(e, r), pr.set(r, e), r;
}, ea = function(e, r) {
  lr = r + 1, ur.set(e, r), pr.set(r, e);
}, ra = "style[".concat(Ie, "][").concat(tn, '="').concat(br, '"]'), ta = new RegExp("^".concat(Ie, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), na = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, c = o.length; i < c; i++) (n = o[i]) && e.registerName(r, n);
}, oa = function(e, r) {
  for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(Hr), o = [], i = 0, c = n.length; i < c; i++) {
    var u = n[i].trim();
    if (u) {
      var a = u.match(ta);
      if (a) {
        var m = 0 | parseInt(a[1], 10), l = a[2];
        m !== 0 && (ea(l, m), na(e, l, a[3]), e.getTag().insertRules(m, o)), o.length = 0;
      } else o.push(u);
    }
  }
}, Dt = function(e) {
  for (var r = document.querySelectorAll(ra), t = 0, n = r.length; t < n; t++) {
    var o = r[t];
    o && o.getAttribute(Ie) !== rn && (oa(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function aa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var fn = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(u) {
    var a = Array.from(u.querySelectorAll("style[".concat(Ie, "]")));
    return a[a.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ie, rn), n.setAttribute(tn, br);
  var c = aa();
  return c && n.setAttribute("nonce", c), t.insertBefore(n, i), n;
}, ia = function() {
  function e(r) {
    this.element = fn(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
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
}(), sa = function() {
  function e(r) {
    this.element = fn(r), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ca = function() {
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
}(), Mt = dr, ua = { isServer: !dr, useCSSOMInjection: !Mo }, dn = function() {
  function e(r, t, n) {
    r === void 0 && (r = Ve), t === void 0 && (t = {});
    var o = this;
    this.options = oe(oe({}, ua), r), this.gs = t, this.names = new Map(n), this.server = !!r.isServer, !this.server && dr && Mt && (Mt = !1, Dt(this)), Gr(this, function() {
      return function(i) {
        for (var c = i.getTag(), u = c.length, a = "", m = function(f) {
          var v = function(k) {
            return pr.get(k);
          }(f);
          if (v === void 0) return "continue";
          var x = i.names.get(v), h = c.getGroup(f);
          if (x === void 0 || !x.size || h.length === 0) return "continue";
          var g = "".concat(Ie, ".g").concat(f, '[id="').concat(v, '"]'), T = "";
          x !== void 0 && x.forEach(function(k) {
            k.length > 0 && (T += "".concat(k, ","));
          }), a += "".concat(h).concat(g, '{content:"').concat(T, '"}').concat(Hr);
        }, l = 0; l < u; l++) m(l);
        return a;
      }(o);
    });
  }
  return e.registerId = function(r) {
    return or(r);
  }, e.prototype.rehydrate = function() {
    !this.server && dr && Dt(this);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(oe(oe({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var n = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new ca(o) : n ? new ia(o) : new sa(o);
    }(this.options), new Xo(r)));
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
}(), la = /&/g, fa = /^\s*\/\/.*$/gm;
function pn(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(n) {
      return "".concat(r, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = pn(t.children, r)), t;
  });
}
function da(e) {
  var r, t, n, o = Ve, i = o.options, c = i === void 0 ? Ve : i, u = o.plugins, a = u === void 0 ? wr : u, m = function(v, x, h) {
    return h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > 0 ? ".".concat(r) : v;
  }, l = a.slice();
  l.push(function(v) {
    v.type === vr && v.value.includes("&") && (v.props[0] = v.props[0].replace(la, t).replace(n, m));
  }), c.prefix && l.push(jo), l.push(_o);
  var f = function(v, x, h, g) {
    x === void 0 && (x = ""), h === void 0 && (h = ""), g === void 0 && (g = "&"), r = g, t = x, n = new RegExp("\\".concat(t, "\\b"), "g");
    var T = v.replace(fa, ""), k = To(h || x ? "".concat(h, " ").concat(x, " { ").concat(T, " }") : T);
    c.namespace && (k = pn(k, c.namespace));
    var p = [];
    return fr(k, Ao(l.concat(Io(function(y) {
      return p.push(y);
    })))), p;
  };
  return f.hash = a.length ? a.reduce(function(v, x) {
    return x.name || Ue(15), Pe(v, x.name);
  }, nn).toString() : "", f;
}
var pa = new dn(), Br = da(), hn = Ae.createContext({ shouldForwardProp: void 0, styleSheet: pa, stylis: Br });
hn.Consumer;
Ae.createContext(void 0);
function Nt() {
  return so(hn);
}
var Ft = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Br);
      var c = n.name + i.hash;
      o.hasNameForId(n.id, c) || o.insertRules(n.id, c, i(n.rules, c, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, Gr(this, function() {
      throw Ue(12, String(n.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Br), this.name + r.hash;
  }, e;
}(), ha = function(e) {
  return e >= "A" && e <= "Z";
};
function Lt(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var n = e[t];
    if (t === 1 && n === "-" && e[0] === "-") return e;
    ha(n) ? r += "-" + n.toLowerCase() : r += n;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var vn = function(e) {
  return e == null || e === !1 || e === "";
}, gn = function(e) {
  var r, t, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !vn(i) && (Array.isArray(i) && i.isCss || ze(i) ? n.push("".concat(Lt(o), ":"), i, ";") : We(i) ? n.push.apply(n, Le(Le(["".concat(o, " {")], gn(i), !1), ["}"], !1)) : n.push("".concat(Lt(o), ": ").concat((r = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in Do || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function _e(e, r, t, n) {
  if (vn(e)) return [];
  if (qr(e)) return [".".concat(e.styledComponentId)];
  if (ze(e)) {
    if (!ze(i = e) || i.prototype && i.prototype.isReactComponent || !r) return [e];
    var o = e(r);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Ft || We(o) || o === null || console.error("".concat(an(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), _e(o, r, t, n);
  }
  var i;
  return e instanceof Ft ? t ? (e.inject(t, n), [e.getName(n)]) : [e] : We(e) ? gn(e) : Array.isArray(e) ? Array.prototype.concat.apply(wr, e.map(function(c) {
    return _e(c, r, t, n);
  })) : [e.toString()];
}
function va(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (ze(t) && !qr(t)) return !1;
  }
  return !0;
}
var ga = on(br), ma = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && va(r), this.componentId = t, this.baseHash = Pe(ga, t), this.baseStyle = n, dn.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = Te(o, this.staticRulesId);
    else {
      var i = jt(_e(this.rules, r, t, n)), c = Lr(Pe(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, c)) {
        var u = n(i, ".".concat(c), void 0, this.componentId);
        t.insertRules(this.componentId, c, u);
      }
      o = Te(o, c), this.staticRulesId = c;
    }
    else {
      for (var a = Pe(this.baseHash, n.hash), m = "", l = 0; l < this.rules.length; l++) {
        var f = this.rules[l];
        if (typeof f == "string") m += f, process.env.NODE_ENV !== "production" && (a = Pe(a, f));
        else if (f) {
          var v = jt(_e(f, r, t, n));
          a = Pe(a, v + l), m += v;
        }
      }
      if (m) {
        var x = Lr(a >>> 0);
        t.hasNameForId(this.componentId, x) || t.insertRules(this.componentId, x, n(m, ".".concat(x), void 0, this.componentId)), o = Te(o, x);
      }
    }
    return o;
  }, e;
}(), mn = Ae.createContext(void 0);
mn.Consumer;
var Ir = {}, $t = /* @__PURE__ */ new Set();
function ya(e, r, t) {
  var n = qr(e), o = e, i = !Ar(e), c = r.attrs, u = c === void 0 ? wr : c, a = r.componentId, m = a === void 0 ? function(R, P) {
    var b = typeof R != "string" ? "sc" : Tt(R);
    Ir[b] = (Ir[b] || 0) + 1;
    var S = "".concat(b, "-").concat(Vo(br + b + Ir[b]));
    return P ? "".concat(P, "-").concat(S) : S;
  }(r.displayName, r.parentComponentId) : a, l = r.displayName, f = l === void 0 ? function(R) {
    return Ar(R) ? "styled.".concat(R) : "Styled(".concat(an(R), ")");
  }(e) : l, v = r.displayName && r.componentId ? "".concat(Tt(r.displayName), "-").concat(r.componentId) : r.componentId || m, x = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, h = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var T = r.shouldForwardProp;
      h = function(R, P) {
        return g(R, P) && T(R, P);
      };
    } else h = g;
  }
  var k = new ma(t, v, n ? o.componentStyle : void 0);
  function p(R, P) {
    return function(b, S, V) {
      var z = b.attrs, I = b.componentStyle, Z = b.defaultProps, ae = b.foldedComponentIds, M = b.styledComponentId, K = b.target, X = Ae.useContext(mn), ve = Nt(), J = b.shouldForwardProp || ve.shouldForwardProp;
      process.env.NODE_ENV !== "production" && bt(M);
      var q = Fo(S, X, Z) || Ve, F = function(ge, ce, Ee) {
        for (var ue, le = oe(oe({}, ce), { className: void 0, theme: Ee }), ke = 0; ke < ge.length; ke += 1) {
          var De = ze(ue = ge[ke]) ? ue(le) : ue;
          for (var fe in De) le[fe] = fe === "className" ? Te(le[fe], De[fe]) : fe === "style" ? oe(oe({}, le[fe]), De[fe]) : De[fe];
        }
        return ce.className && (le.className = Te(le.className, ce.className)), le;
      }(z, S, q), Q = F.as || K, ee = {};
      for (var W in F) F[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && F.theme === q || (W === "forwardedAs" ? ee.as = F.forwardedAs : J && !J(W, Q) || (ee[W] = F[W], J || process.env.NODE_ENV !== "development" || vo(W) || $t.has(W) || !Fr.has(Q) || ($t.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(ge, ce) {
        var Ee = Nt(), ue = ge.generateAndInjectStyles(ce, Ee.styleSheet, Ee.stylis);
        return process.env.NODE_ENV !== "production" && bt(ue), ue;
      }(I, F);
      process.env.NODE_ENV !== "production" && b.warnTooManyClasses && b.warnTooManyClasses(te);
      var Se = Te(ae, M);
      return te && (Se += " " + te), F.className && (Se += " " + F.className), ee[Ar(Q) && !Fr.has(Q) ? "class" : "className"] = Se, V && (ee.ref = V), io(Q, ee);
    }(y, R, P);
  }
  p.displayName = f;
  var y = Ae.forwardRef(p);
  return y.attrs = x, y.componentStyle = k, y.displayName = f, y.shouldForwardProp = h, y.foldedComponentIds = n ? Te(o.foldedComponentIds, o.styledComponentId) : "", y.styledComponentId = v, y.target = n ? o.target : e, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? function(P) {
      for (var b = [], S = 1; S < arguments.length; S++) b[S - 1] = arguments[S];
      for (var V = 0, z = b; V < z.length; V++) $r(P, z[V], !0);
      return P;
    }({}, o.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (No(f, v), y.warnTooManyClasses = /* @__PURE__ */ function(R, P) {
    var b = {}, S = !1;
    return function(V) {
      if (!S && (b[V] = !0, Object.keys(b).length >= 200)) {
        var z = P ? ' with the id of "'.concat(P, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(R).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, b = {};
      }
    };
  }(f, v)), Gr(y, function() {
    return ".".concat(y.styledComponentId);
  }), i && ln(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), y;
}
function Bt(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}
var Vt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ba(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  if (ze(e) || We(e)) return Vt(_e(Bt(wr, Le([e], r, !0))));
  var n = e;
  return r.length === 0 && n.length === 1 && typeof n[0] == "string" ? _e(n) : Vt(_e(Bt(n, r)));
}
function Vr(e, r, t) {
  if (t === void 0 && (t = Ve), !r) throw Ue(1, r);
  var n = function(o) {
    for (var i = [], c = 1; c < arguments.length; c++) i[c - 1] = arguments[c];
    return e(r, t, ba.apply(void 0, Le([o], i, !1)));
  };
  return n.attrs = function(o) {
    return Vr(e, r, oe(oe({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Vr(e, r, oe(oe({}, t), o));
  }, n;
}
var yn = function(e) {
  return Vr(ya, e);
}, je = yn;
Fr.forEach(function(e) {
  je[e] = yn(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ar = "__sc-".concat(Ie, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ar] || (window[ar] = 0), window[ar] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ar] += 1);
const wa = je.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #4B5563;
  filter: blur(1rem) brightness(0.5) grayscale(0.3);
  transform: scale(1.25);
`, xa = ({ src: e }) => /* @__PURE__ */ $.jsx(
  wa,
  {
    "data-rivx-backdrop": !0,
    style: {
      backgroundImage: `url(${e})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
), Sa = je.button`
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
`, zt = ({
  children: e,
  onClick: r
}) => /* @__PURE__ */ $.jsx(Sa, { type: "button", onClick: r, children: e }), Ea = je.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  padding: 0.5rem;
  border: solid thin rgb(75 85 99 / 0.3);
	background-color: rgb(75 85 99 / 0.3);
  border-radius: 0.5rem;
  backdrop-filter: blur(1rem);
  z-index: 10;
`, ka = () => /* @__PURE__ */ $.jsxs(
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
), Ra = () => /* @__PURE__ */ $.jsxs(
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
), Ca = ({
  onZoomIn: e,
  onZoomOut: r,
  configuration: t
}) => {
  const n = t.zoomInIcon ?? /* @__PURE__ */ $.jsx(ka, {}), o = t.zoomOutIcon ?? /* @__PURE__ */ $.jsx(Ra, {});
  return /* @__PURE__ */ $.jsxs(Ea, { "data-rivx-controls": !0, children: [
    t.hasZoomIn && /* @__PURE__ */ $.jsx(zt, { onClick: e, children: n }),
    t.hasZoomOut && /* @__PURE__ */ $.jsx(zt, { onClick: r, children: o })
  ] });
}, Pa = je.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;
var bn = {
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
}, Zr = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, Ta = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], hr = {
  CSS: {},
  springs: {}
};
function ye(e, r, t) {
  return Math.min(Math.max(e, r), t);
}
function Xe(e, r) {
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
    return Xe(Object.prototype.toString.call(e), "Object");
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
    return !bn.hasOwnProperty(e) && !Zr.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  }
};
function wn(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r ? r[1].split(",").map(function(t) {
    return parseFloat(t);
  }) : [];
}
function xn(e, r) {
  var t = wn(e), n = ye(E.und(t[0]) ? 1 : t[0], 0.1, 100), o = ye(E.und(t[1]) ? 100 : t[1], 0.1, 100), i = ye(E.und(t[2]) ? 10 : t[2], 0.1, 100), c = ye(E.und(t[3]) ? 0 : t[3], 0.1, 100), u = Math.sqrt(o / n), a = i / (2 * Math.sqrt(o * n)), m = a < 1 ? u * Math.sqrt(1 - a * a) : 0, l = 1, f = a < 1 ? (a * u + -c) / m : -c + u;
  function v(h) {
    var g = r ? r * h / 1e3 : h;
    return a < 1 ? g = Math.exp(-g * a * u) * (l * Math.cos(m * g) + f * Math.sin(m * g)) : g = (l + f * g) * Math.exp(-g * u), h === 0 || h === 1 ? h : 1 - g;
  }
  function x() {
    var h = hr.springs[e];
    if (h)
      return h;
    for (var g = 1 / 6, T = 0, k = 0; ; )
      if (T += g, v(T) === 1) {
        if (k++, k >= 16)
          break;
      } else
        k = 0;
    var p = T * g * 1e3;
    return hr.springs[e] = p, p;
  }
  return r ? v : x;
}
function Oa(e) {
  return e === void 0 && (e = 10), function(r) {
    return Math.ceil(ye(r, 1e-6, 1) * e) * (1 / e);
  };
}
var _a = function() {
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
  function u(l, f, v, x, h) {
    var g, T, k = 0;
    do
      T = f + (v - f) / 2, g = i(T, x, h) - l, g > 0 ? v = T : f = T;
    while (Math.abs(g) > 1e-7 && ++k < 10);
    return T;
  }
  function a(l, f, v, x) {
    for (var h = 0; h < 4; ++h) {
      var g = c(f, v, x);
      if (g === 0)
        return f;
      var T = i(f, v, x) - l;
      f -= T / g;
    }
    return f;
  }
  function m(l, f, v, x) {
    if (!(0 <= l && l <= 1 && 0 <= v && v <= 1))
      return;
    var h = new Float32Array(e);
    if (l !== f || v !== x)
      for (var g = 0; g < e; ++g)
        h[g] = i(g * r, l, v);
    function T(k) {
      for (var p = 0, y = 1, R = e - 1; y !== R && h[y] <= k; ++y)
        p += r;
      --y;
      var P = (k - h[y]) / (h[y + 1] - h[y]), b = p + P * r, S = c(b, l, v);
      return S >= 1e-3 ? a(k, b, l, v) : S === 0 ? b : u(k, p, p + r, l, v);
    }
    return function(k) {
      return l === f && v === x || k === 0 || k === 1 ? k : i(T(k), f, x);
    };
  }
  return m;
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
function Kr(e, r) {
  if (E.fnc(e))
    return e;
  var t = e.split("(")[0], n = Sn[t], o = wn(e);
  switch (t) {
    case "spring":
      return xn(e, r);
    case "cubicBezier":
      return jr(_a, o);
    case "steps":
      return jr(Oa, o);
    default:
      return jr(n, o);
  }
}
function En(e) {
  try {
    var r = document.querySelectorAll(e);
    return r;
  } catch {
    return;
  }
}
function xr(e, r) {
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
function Wt(e) {
  return E.arr(e) ? e : (E.str(e) && (e = En(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function Jr(e, r) {
  return e.some(function(t) {
    return t === r;
  });
}
function Xr(e) {
  var r = {};
  for (var t in e)
    r[t] = e[t];
  return r;
}
function zr(e, r) {
  var t = Xr(e);
  for (var n in e)
    t[n] = r.hasOwnProperty(n) ? r[n] : e[n];
  return t;
}
function Er(e, r) {
  var t = Xr(e);
  for (var n in r)
    t[n] = E.und(e[n]) ? r[n] : e[n];
  return t;
}
function Aa(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? "rgba(" + r[1] + ",1)" : e;
}
function Ia(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, t = e.replace(r, function(u, a, m, l) {
    return a + a + m + m + l + l;
  }), n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t), o = parseInt(n[1], 16), i = parseInt(n[2], 16), c = parseInt(n[3], 16);
  return "rgba(" + o + "," + i + "," + c + ",1)";
}
function ja(e) {
  var r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), t = parseInt(r[1], 10) / 360, n = parseInt(r[2], 10) / 100, o = parseInt(r[3], 10) / 100, i = r[4] || 1;
  function c(v, x, h) {
    return h < 0 && (h += 1), h > 1 && (h -= 1), h < 1 / 6 ? v + (x - v) * 6 * h : h < 1 / 2 ? x : h < 2 / 3 ? v + (x - v) * (2 / 3 - h) * 6 : v;
  }
  var u, a, m;
  if (n == 0)
    u = a = m = o;
  else {
    var l = o < 0.5 ? o * (1 + n) : o + n - o * n, f = 2 * o - l;
    u = c(f, l, t + 1 / 3), a = c(f, l, t), m = c(f, l, t - 1 / 3);
  }
  return "rgba(" + u * 255 + "," + a * 255 + "," + m * 255 + "," + i + ")";
}
function Da(e) {
  if (E.rgb(e))
    return Aa(e);
  if (E.hex(e))
    return Ia(e);
  if (E.hsl(e))
    return ja(e);
}
function xe(e) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (r)
    return r[1];
}
function Ma(e) {
  if (Xe(e, "translate") || e === "perspective")
    return "px";
  if (Xe(e, "rotate") || Xe(e, "skew"))
    return "deg";
}
function Wr(e, r) {
  return E.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function be(e, r) {
  return e.getAttribute(r);
}
function Qr(e, r, t) {
  var n = xe(r);
  if (Jr([t, "deg", "rad", "turn"], n))
    return r;
  var o = hr.CSS[r + t];
  if (!E.und(o))
    return o;
  var i = 100, c = document.createElement(e.tagName), u = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  u.appendChild(c), c.style.position = "absolute", c.style.width = i + t;
  var a = i / c.offsetWidth;
  u.removeChild(c);
  var m = a * parseFloat(r);
  return hr.CSS[r + t] = m, m;
}
function kn(e, r, t) {
  if (r in e.style) {
    var n = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), o = e.style[r] || getComputedStyle(e).getPropertyValue(n) || "0";
    return t ? Qr(e, o, t) : o;
  }
}
function et(e, r) {
  if (E.dom(e) && !E.inp(e) && (!E.nil(be(e, r)) || E.svg(e) && e[r]))
    return "attribute";
  if (E.dom(e) && Jr(Ta, r))
    return "transform";
  if (E.dom(e) && r !== "transform" && kn(e, r))
    return "css";
  if (e[r] != null)
    return "object";
}
function Rn(e) {
  if (E.dom(e)) {
    for (var r = e.style.transform || "", t = /(\w+)\(([^)]*)\)/g, n = /* @__PURE__ */ new Map(), o; o = t.exec(r); )
      n.set(o[1], o[2]);
    return n;
  }
}
function Na(e, r, t, n) {
  var o = Xe(r, "scale") ? 1 : 0 + Ma(r), i = Rn(e).get(r) || o;
  return t && (t.transforms.list.set(r, i), t.transforms.last = r), n ? Qr(e, i, n) : i;
}
function rt(e, r, t, n) {
  switch (et(e, r)) {
    case "transform":
      return Na(e, r, n, t);
    case "css":
      return kn(e, r, t);
    case "attribute":
      return be(e, r);
    default:
      return e[r] || 0;
  }
}
function tt(e, r) {
  var t = /^(\*=|\+=|-=)/.exec(e);
  if (!t)
    return e;
  var n = xe(e) || 0, o = parseFloat(r), i = parseFloat(e.replace(t[0], ""));
  switch (t[0][0]) {
    case "+":
      return o + i + n;
    case "-":
      return o - i + n;
    case "*":
      return o * i + n;
  }
}
function Cn(e, r) {
  if (E.col(e))
    return Da(e);
  if (/\s/g.test(e))
    return e;
  var t = xe(e), n = t ? e.substr(0, e.length - t.length) : e;
  return r ? n + r : n;
}
function nt(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function Fa(e) {
  return Math.PI * 2 * be(e, "r");
}
function La(e) {
  return be(e, "width") * 2 + be(e, "height") * 2;
}
function $a(e) {
  return nt(
    { x: be(e, "x1"), y: be(e, "y1") },
    { x: be(e, "x2"), y: be(e, "y2") }
  );
}
function Pn(e) {
  for (var r = e.points, t = 0, n, o = 0; o < r.numberOfItems; o++) {
    var i = r.getItem(o);
    o > 0 && (t += nt(n, i)), n = i;
  }
  return t;
}
function Ba(e) {
  var r = e.points;
  return Pn(e) + nt(r.getItem(r.numberOfItems - 1), r.getItem(0));
}
function Tn(e) {
  if (e.getTotalLength)
    return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return Fa(e);
    case "rect":
      return La(e);
    case "line":
      return $a(e);
    case "polyline":
      return Pn(e);
    case "polygon":
      return Ba(e);
  }
}
function Va(e) {
  var r = Tn(e);
  return e.setAttribute("stroke-dasharray", r), r;
}
function za(e) {
  for (var r = e.parentNode; E.svg(r) && E.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function On(e, r) {
  var t = r || {}, n = t.el || za(e), o = n.getBoundingClientRect(), i = be(n, "viewBox"), c = o.width, u = o.height, a = t.viewBox || (i ? i.split(" ") : [0, 0, c, u]);
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
function Wa(e, r) {
  var t = E.str(e) ? En(e)[0] : e, n = r || 100;
  return function(o) {
    return {
      property: o,
      el: t,
      svg: On(t),
      totalLength: Tn(t) * (n / 100)
    };
  };
}
function Ya(e, r, t) {
  function n(l) {
    l === void 0 && (l = 0);
    var f = r + l >= 1 ? r + l : 0;
    return e.el.getPointAtLength(f);
  }
  var o = On(e.el, e.svg), i = n(), c = n(-1), u = n(1), a = t ? 1 : o.w / o.vW, m = t ? 1 : o.h / o.vH;
  switch (e.property) {
    case "x":
      return (i.x - o.x) * a;
    case "y":
      return (i.y - o.y) * m;
    case "angle":
      return Math.atan2(u.y - c.y, u.x - c.x) * 180 / Math.PI;
  }
}
function Yt(e, r) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, n = Cn(E.pth(e) ? e.totalLength : e, r) + "";
  return {
    original: n,
    numbers: n.match(t) ? n.match(t).map(Number) : [0],
    strings: E.str(e) || r ? n.split(t) : []
  };
}
function ot(e) {
  var r = e ? Sr(E.arr(e) ? e.map(Wt) : Wt(e)) : [];
  return xr(r, function(t, n, o) {
    return o.indexOf(t) === n;
  });
}
function _n(e) {
  var r = ot(e);
  return r.map(function(t, n) {
    return { target: t, id: n, total: r.length, transforms: { list: Rn(t) } };
  });
}
function Ua(e, r) {
  var t = Xr(r);
  if (/^spring/.test(t.easing) && (t.duration = xn(t.easing)), E.arr(e)) {
    var n = e.length, o = n === 2 && !E.obj(e[0]);
    o ? e = { value: e } : E.fnc(r.duration) || (t.duration = r.duration / n);
  }
  var i = E.arr(e) ? e : [e];
  return i.map(function(c, u) {
    var a = E.obj(c) && !E.pth(c) ? c : { value: c };
    return E.und(a.delay) && (a.delay = u ? 0 : r.delay), E.und(a.endDelay) && (a.endDelay = u === i.length - 1 ? r.endDelay : 0), a;
  }).map(function(c) {
    return Er(c, t);
  });
}
function Ha(e) {
  for (var r = xr(Sr(e.map(function(i) {
    return Object.keys(i);
  })), function(i) {
    return E.key(i);
  }).reduce(function(i, c) {
    return i.indexOf(c) < 0 && i.push(c), i;
  }, []), t = {}, n = function(i) {
    var c = r[i];
    t[c] = e.map(function(u) {
      var a = {};
      for (var m in u)
        E.key(m) ? m == c && (a.value = u[m]) : a[m] = u[m];
      return a;
    });
  }, o = 0; o < r.length; o++) n(o);
  return t;
}
function qa(e, r) {
  var t = [], n = r.keyframes;
  n && (r = Er(Ha(n), r));
  for (var o in r)
    E.key(o) && t.push({
      name: o,
      tweens: Ua(r[o], e)
    });
  return t;
}
function Ga(e, r) {
  var t = {};
  for (var n in e) {
    var o = Wr(e[n], r);
    E.arr(o) && (o = o.map(function(i) {
      return Wr(i, r);
    }), o.length === 1 && (o = o[0])), t[n] = o;
  }
  return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t;
}
function Za(e, r) {
  var t;
  return e.tweens.map(function(n) {
    var o = Ga(n, r), i = o.value, c = E.arr(i) ? i[1] : i, u = xe(c), a = rt(r.target, e.name, u, r), m = t ? t.to.original : a, l = E.arr(i) ? i[0] : m, f = xe(l) || xe(a), v = u || f;
    return E.und(c) && (c = m), o.from = Yt(l, v), o.to = Yt(tt(c, l), v), o.start = t ? t.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = Kr(o.easing, o.duration), o.isPath = E.pth(i), o.isPathTargetInsideSVG = o.isPath && E.svg(r.target), o.isColor = E.col(o.from.original), o.isColor && (o.round = 1), t = o, o;
  });
}
var An = {
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
function In(e, r) {
  var t = _n(e);
  t.forEach(function(n) {
    for (var o in r) {
      var i = Wr(r[o], n), c = n.target, u = xe(i), a = rt(c, o, u, n), m = u || xe(a), l = tt(Cn(i, m), a), f = et(c, o);
      An[f](c, o, l, n.transforms, !0);
    }
  });
}
function Ka(e, r) {
  var t = et(e.target, r.name);
  if (t) {
    var n = Za(r, e), o = n[n.length - 1];
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
function Ja(e, r) {
  return xr(Sr(e.map(function(t) {
    return r.map(function(n) {
      return Ka(t, n);
    });
  })), function(t) {
    return !E.und(t);
  });
}
function jn(e, r) {
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
var Ut = 0;
function Xa(e) {
  var r = zr(bn, e), t = zr(Zr, e), n = qa(t, e), o = _n(e.targets), i = Ja(o, n), c = jn(i, t), u = Ut;
  return Ut++, Er(r, {
    id: u,
    children: [],
    animatables: o,
    animations: i,
    duration: c.duration,
    delay: c.delay,
    endDelay: c.endDelay
  });
}
var pe = [], Dn = function() {
  var e;
  function r() {
    !e && (!Ht() || !B.suspendWhenDocumentHidden) && pe.length > 0 && (e = requestAnimationFrame(t));
  }
  function t(o) {
    for (var i = pe.length, c = 0; c < i; ) {
      var u = pe[c];
      u.paused ? (pe.splice(c, 1), i--) : (u.tick(o), c++);
    }
    e = c > 0 ? requestAnimationFrame(t) : void 0;
  }
  function n() {
    B.suspendWhenDocumentHidden && (Ht() ? e = cancelAnimationFrame(e) : (pe.forEach(
      function(o) {
        return o._onDocumentVisibility();
      }
    ), Dn()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", n), r;
}();
function Ht() {
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
  var a = Xa(e);
  u(a);
  function m() {
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
  function x(p) {
    if (a.reversePlayback)
      for (var R = i; R--; )
        v(p, o[R]);
    else
      for (var y = 0; y < i; y++)
        v(p, o[y]);
  }
  function h(p) {
    for (var y = 0, R = a.animations, P = R.length; y < P; ) {
      var b = R[y], S = b.animatable, V = b.tweens, z = V.length - 1, I = V[z];
      z && (I = xr(V, function(ce) {
        return p < ce.end;
      })[0] || I);
      for (var Z = ye(p - I.start - I.delay, 0, I.duration) / I.duration, ae = isNaN(Z) ? 1 : I.easing(Z), M = I.to.strings, K = I.round, X = [], ve = I.to.numbers.length, J = void 0, q = 0; q < ve; q++) {
        var F = void 0, Q = I.to.numbers[q], ee = I.from.numbers[q] || 0;
        I.isPath ? F = Ya(I.value, ae * Q, I.isPathTargetInsideSVG) : F = ee + ae * (Q - ee), K && (I.isColor && q > 2 || (F = Math.round(F * K) / K)), X.push(F);
      }
      var W = M.length;
      if (!W)
        J = X[0];
      else {
        J = M[0];
        for (var te = 0; te < W; te++) {
          M[te];
          var Se = M[te + 1], ge = X[te];
          isNaN(ge) || (Se ? J += ge + Se : J += ge + " ");
        }
      }
      An[b.type](S.target, b.property, J, S.transforms), b.currentValue = J, y++;
    }
  }
  function g(p) {
    a[p] && !a.passThrough && a[p](a);
  }
  function T() {
    a.remaining && a.remaining !== !0 && a.remaining--;
  }
  function k(p) {
    var y = a.duration, R = a.delay, P = y - a.endDelay, b = l(p);
    a.progress = ye(b / y * 100, 0, 100), a.reversePlayback = b < a.currentTime, o && x(b), !a.began && a.currentTime > 0 && (a.began = !0, g("begin")), !a.loopBegan && a.currentTime > 0 && (a.loopBegan = !0, g("loopBegin")), b <= R && a.currentTime !== 0 && h(0), (b >= P && a.currentTime !== y || !y) && h(y), b > R && b < P ? (a.changeBegan || (a.changeBegan = !0, a.changeCompleted = !1, g("changeBegin")), g("change"), h(b)) : a.changeBegan && (a.changeCompleted = !0, a.changeBegan = !1, g("changeComplete")), a.currentTime = ye(b, 0, y), a.began && g("update"), p >= y && (t = 0, T(), a.remaining ? (r = n, g("loopComplete"), a.loopBegan = !1, a.direction === "alternate" && m()) : (a.paused = !0, a.completed || (a.completed = !0, g("loopComplete"), g("complete"), !a.passThrough && "Promise" in window && (c(), u(a)))));
  }
  return a.reset = function() {
    var p = a.direction;
    a.passThrough = !1, a.currentTime = 0, a.progress = 0, a.paused = !0, a.began = !1, a.loopBegan = !1, a.changeBegan = !1, a.completed = !1, a.changeCompleted = !1, a.reversePlayback = !1, a.reversed = p === "reverse", a.remaining = a.loop, o = a.children, i = o.length;
    for (var y = i; y--; )
      a.children[y].reset();
    (a.reversed && a.loop !== !0 || p === "alternate" && a.loop === 1) && a.remaining++, h(a.reversed ? a.duration : 0);
  }, a._onDocumentVisibility = f, a.set = function(p, y) {
    return In(p, y), a;
  }, a.tick = function(p) {
    n = p, r || (r = n), k((n + (t - r)) * B.speed);
  }, a.seek = function(p) {
    k(l(p));
  }, a.pause = function() {
    a.paused = !0, f();
  }, a.play = function() {
    a.paused && (a.completed && a.reset(), a.paused = !1, pe.push(a), f(), Dn());
  }, a.reverse = function() {
    m(), a.completed = !a.reversed, f();
  }, a.restart = function() {
    a.reset(), a.play();
  }, a.remove = function(p) {
    var y = ot(p);
    Mn(y, a);
  }, a.reset(), a.autoplay && a.play(), a;
}
function qt(e, r) {
  for (var t = r.length; t--; )
    Jr(e, r[t].animatable.target) && r.splice(t, 1);
}
function Mn(e, r) {
  var t = r.animations, n = r.children;
  qt(e, t);
  for (var o = n.length; o--; ) {
    var i = n[o], c = i.animations;
    qt(e, c), !c.length && !i.children.length && n.splice(o, 1);
  }
  !t.length && !n.length && r.pause();
}
function Qa(e) {
  for (var r = ot(e), t = pe.length; t--; ) {
    var n = pe[t];
    Mn(r, n);
  }
}
function ei(e, r) {
  r === void 0 && (r = {});
  var t = r.direction || "normal", n = r.easing ? Kr(r.easing) : null, o = r.grid, i = r.axis, c = r.from || 0, u = c === "first", a = c === "center", m = c === "last", l = E.arr(e), f = parseFloat(l ? e[0] : e), v = l ? parseFloat(e[1]) : 0, x = xe(l ? e[1] : e) || 0, h = r.start || 0 + (l ? f : 0), g = [], T = 0;
  return function(k, p, y) {
    if (u && (c = 0), a && (c = (y - 1) / 2), m && (c = y - 1), !g.length) {
      for (var R = 0; R < y; R++) {
        if (!o)
          g.push(Math.abs(c - R));
        else {
          var P = a ? (o[0] - 1) / 2 : c % o[0], b = a ? (o[1] - 1) / 2 : Math.floor(c / o[0]), S = R % o[0], V = Math.floor(R / o[0]), z = P - S, I = b - V, Z = Math.sqrt(z * z + I * I);
          i === "x" && (Z = -z), i === "y" && (Z = -I), g.push(Z);
        }
        T = Math.max.apply(Math, g);
      }
      n && (g = g.map(function(M) {
        return n(M / T) * T;
      })), t === "reverse" && (g = g.map(function(M) {
        return i ? M < 0 ? M * -1 : -M : Math.abs(T - M);
      }));
    }
    var ae = l ? (v - f) / T : f;
    return h + ae * (Math.round(g[p] * 100) / 100) + x;
  };
}
function ri(e) {
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
    var a = Er(t, zr(Zr, e));
    a.targets = a.targets || e.targets;
    var m = r.duration;
    a.autoplay = !1, a.direction = r.direction, a.timelineOffset = E.und(n) ? m : tt(n, m), c(r), r.seek(a.timelineOffset);
    var l = B(a);
    c(l), i.push(l);
    var f = jn(i, e);
    return r.delay = f.delay, r.endDelay = f.endDelay, r.duration = f.duration, r.seek(0), r.reset(), r.autoplay && r.play(), r;
  }, r;
}
B.version = "3.2.1";
B.speed = 1;
B.suspendWhenDocumentHidden = !0;
B.running = pe;
B.remove = Qa;
B.get = rt;
B.set = In;
B.convertPx = Qr;
B.path = Wa;
B.setDashoffset = Va;
B.stagger = ei;
B.timeline = ri;
B.easing = Kr;
B.penner = Sn;
B.random = function(e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
const ti = je.div`
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
`, ni = je.canvas`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: move;
`, oi = ({ src: e, state: r }) => {
  const t = de(null), n = de(null), o = de(null), i = de({
    width: 800,
    height: 450
  }), c = de({
    width: 800,
    height: 450
  }), u = de({ width: 800, height: 450 }), a = de(16 / 9), m = de(null), l = de(null), f = de({
    x: 0,
    y: 0,
    scale: 1
  });
  qe(() => {
    const h = new Image();
    h.onload = () => {
      o.current = h;
    }, h.src = e;
  }, [e]), qe(() => {
    const h = () => {
      n.current && (i.current = {
        width: n.current.offsetWidth,
        height: n.current.offsetHeight
      }, t.current && (t.current.width = i.current.width, t.current.height = i.current.height, v()));
    };
    return h(), window.addEventListener("resize", h), () => {
      window.removeEventListener("resize", h);
    };
  }, []);
  const v = wt(() => {
    if (!o.current) return;
    const h = t.current;
    if (!h) return;
    const g = h.getContext("2d");
    if (!g) return;
    const { width: T, height: k } = u.current;
    if (!f.current) return;
    const p = f.current.scale, y = T * p, R = k * p, P = f.current.x - y / 2, b = f.current.y - R / 2;
    g.clearRect(0, 0, h.width, h.height), g.drawImage(
      o.current,
      P,
      b,
      y,
      R
    );
  }, []);
  qe(() => {
    ai(e).then(({ width: h, height: g }) => {
      c.current = { width: h, height: g };
    }).then(() => {
      a.current = c.current.width / c.current.height, u.current = ii(
        i.current,
        c.current
      ), t.current && (f.current = {
        x: t.current.width / 2,
        y: t.current.height / 2,
        scale: 1
      }, v());
    });
  }, [e, v]);
  const x = wt(
    (h) => {
      var g;
      ((g = m.current) == null ? void 0 : g.progress) !== 100 && (v(), l.current = requestAnimationFrame(() => {
        x(h);
      }));
    },
    [v]
  );
  return qe(() => {
    var h, g;
    l.current && cancelAnimationFrame(l.current), (h = m.current) != null && h.complete || (g = m.current) == null || g.pause(), m.current = B({
      targets: f.current,
      scale: r.scale,
      duration: 300,
      easing: "easeOutExpo",
      autoplay: !0,
      update: (T) => {
        x(T);
      }
    });
  }, [r, x]), qe(() => {
    let h = 0, g = 0, T = 0, k = 0;
    const p = (P) => {
      if (!n.current) return;
      const { clientX: b, clientY: S } = P, { left: V, top: z } = n.current.getBoundingClientRect(), I = b - V, Z = S - z;
      f.current.x = T + I - h, f.current.y = k + Z - g, v();
    }, y = () => {
      var W;
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", y);
      const { width: P, height: b } = u.current, { x: S, y: V, scale: z } = f.current, I = i.current.width, Z = i.current.height, ae = P * z, M = b * z, K = S - ae / 2, X = S + ae / 2, ve = V - M / 2, J = V + M / 2;
      let q = 0, F = 0;
      if (K < 0 && X < I && (q = I - X), X > I && K > 0 && (q = -K), ve < 0 && J < Z && (F = Z - J), J > Z && ve > 0 && (F = -ve), !q && !F)
        return;
      let Q = S + q, ee = V + F;
      t.current && (z <= 1 && (Math.abs(q) > 0 || Math.abs(F) > 0) && (Q = t.current.width / 2, ee = t.current.height / 2), Math.abs(q) > 0 && ae < I && (Q = t.current.width / 2), Math.abs(F) > 0 && M < Z && (ee = t.current.height / 2)), l.current && cancelAnimationFrame(l.current), ((W = m.current) == null ? void 0 : W.progress) !== 100 && (m.current = null), m.current = B({
        targets: f.current,
        x: Q,
        y: ee,
        duration: 500,
        easing: "easeOutExpo",
        autoplay: !0,
        update: (te) => {
          x(te);
        }
      });
    }, R = (P) => {
      if (!n.current) return;
      const { left: b, top: S } = n.current.getBoundingClientRect();
      h = P.clientX - b, g = P.clientY - S, T = f.current.x, k = f.current.y, document.addEventListener("mousemove", p), document.addEventListener("mouseup", y);
    };
    if (n.current)
      return n.current.addEventListener("mousedown", R), n.current.addEventListener("mouseup", y), () => {
        var P, b;
        (P = n.current) == null || P.removeEventListener("mousedown", R), (b = n.current) == null || b.removeEventListener("mouseup", y);
      };
  }, [x, v]), /* @__PURE__ */ $.jsx(ti, { ref: n, "data-rivx-view": !0, children: /* @__PURE__ */ $.jsx(ni, { ref: t }) });
}, ai = (e) => {
  const r = new Image();
  return new Promise((t, n) => {
    r.onload = () => {
      t({ width: r.width, height: r.height });
    }, r.onerror = n, r.src = e;
  });
}, ii = (e, r) => {
  const t = e.width / e.height, n = r.width / r.height;
  return t > n ? {
    width: e.height * n,
    height: e.height
  } : {
    width: e.width,
    height: e.width / n
  };
}, si = {
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
    hasNoBackdrop: !1
  }
}, li = ({
  src: e,
  configuration: r
}) => {
  const t = ci(
    si,
    r
  ), [n, o] = co(1), i = () => {
    n >= t.viewer.maxScale || o((a) => a + t.viewer.scaleStep);
  }, c = () => {
    n <= t.viewer.minScale || o((a) => a - t.viewer.scaleStep);
  }, u = { scale: n };
  return /* @__PURE__ */ $.jsxs(Pa, { children: [
    !t.options.hasNoBackdrop && /* @__PURE__ */ $.jsx(xa, { src: e }),
    /* @__PURE__ */ $.jsx(
      Ca,
      {
        onZoomIn: i,
        onZoomOut: c,
        configuration: t.controllers
      }
    ),
    /* @__PURE__ */ $.jsx(oi, { src: e, state: u })
  ] });
}, ci = (e, r) => ({
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
  li as ImageViewer
};
