import Ee, { useDebugValue as sr, createElement as _n, useRef as ie, useContext as On, useEffect as He, useCallback as cr, useState as An } from "react";
var Xe = { exports: {} }, Ue = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Pn() {
  if (ur) return Ue;
  ur = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, a) {
    var c = null;
    if (a !== void 0 && (c = "" + a), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      a = {};
      for (var u in o)
        u !== "key" && (a[u] = o[u]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: n,
      key: c,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Ue.Fragment = t, Ue.jsx = r, Ue.jsxs = r, Ue;
}
var qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function Nn() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === q ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case y:
          return "Fragment";
        case T:
          return "Portal";
        case D:
          return "Profiler";
        case E:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case A:
            return (s.displayName || "Context") + ".Provider";
          case z:
            return (s._context.displayName || "Context") + ".Consumer";
          case W:
            var w = s.render;
            return s = s.displayName, s || (s = w.displayName || w.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case ee:
            return w = s.displayName || null, w !== null ? w : e(s.type) || "Memo";
          case te:
            w = s._payload, s = s._init;
            try {
              return e(s(w));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function r(s) {
      try {
        t(s);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var x = w.error, P = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return x.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(s);
      }
    }
    function n() {
    }
    function o() {
      if (re === 0) {
        ae = console.log, ue = console.info, Se = console.warn, ge = console.error, le = console.group, Ne = console.groupCollapsed, ke = console.groupEnd;
        var s = {
          configurable: !0,
          enumerable: !0,
          value: n,
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
      re++;
    }
    function a() {
      if (re--, re === 0) {
        var s = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: F({}, s, { value: ae }),
          info: F({}, s, { value: ue }),
          warn: F({}, s, { value: Se }),
          error: F({}, s, { value: ge }),
          group: F({}, s, { value: le }),
          groupCollapsed: F({}, s, { value: Ne }),
          groupEnd: F({}, s, { value: ke })
        });
      }
      0 > re && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function c(s) {
      if (ne === void 0)
        try {
          throw Error();
        } catch (x) {
          var w = x.stack.trim().match(/\n( *(at )?)/);
          ne = w && w[1] || "", rr = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ne + s + rr;
    }
    function u(s, w) {
      if (!s || Et) return "";
      var x = St.get(s);
      if (x !== void 0) return x;
      Et = !0, x = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var P = null;
      P = N.H, N.H = null, o();
      try {
        var G = {
          DetermineComponentFrameRoot: function() {
            try {
              if (w) {
                var we = function() {
                  throw Error();
                };
                if (Object.defineProperty(we.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(we, []);
                  } catch (ve) {
                    var Ke = ve;
                  }
                  Reflect.construct(s, [], we);
                } else {
                  try {
                    we.call();
                  } catch (ve) {
                    Ke = ve;
                  }
                  s.call(we.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ve) {
                  Ke = ve;
                }
                (we = s()) && typeof we.catch == "function" && we.catch(function() {
                });
              }
            } catch (ve) {
              if (ve && Ke && typeof ve.stack == "string")
                return [ve.stack, Ke.stack];
            }
            return [null, null];
          }
        };
        G.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var $ = Object.getOwnPropertyDescriptor(
          G.DetermineComponentFrameRoot,
          "name"
        );
        $ && $.configurable && Object.defineProperty(
          G.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var _ = G.DetermineComponentFrameRoot(), me = _[0], Ie = _[1];
        if (me && Ie) {
          var K = me.split(`
`), Ce = Ie.split(`
`);
          for (_ = $ = 0; $ < K.length && !K[$].includes(
            "DetermineComponentFrameRoot"
          ); )
            $++;
          for (; _ < Ce.length && !Ce[_].includes(
            "DetermineComponentFrameRoot"
          ); )
            _++;
          if ($ === K.length || _ === Ce.length)
            for ($ = K.length - 1, _ = Ce.length - 1; 1 <= $ && 0 <= _ && K[$] !== Ce[_]; )
              _--;
          for (; 1 <= $ && 0 <= _; $--, _--)
            if (K[$] !== Ce[_]) {
              if ($ !== 1 || _ !== 1)
                do
                  if ($--, _--, 0 > _ || K[$] !== Ce[_]) {
                    var We = `
` + K[$].replace(
                      " at new ",
                      " at "
                    );
                    return s.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", s.displayName)), typeof s == "function" && St.set(s, We), We;
                  }
                while (1 <= $ && 0 <= _);
              break;
            }
        }
      } finally {
        Et = !1, N.H = P, a(), Error.prepareStackTrace = x;
      }
      return K = (K = s ? s.displayName || s.name : "") ? c(K) : "", typeof s == "function" && St.set(s, K), K;
    }
    function i(s) {
      if (s == null) return "";
      if (typeof s == "function") {
        var w = s.prototype;
        return u(
          s,
          !(!w || !w.isReactComponent)
        );
      }
      if (typeof s == "string") return c(s);
      switch (s) {
        case X:
          return c("Suspense");
        case B:
          return c("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case W:
            return s = u(s.render, !1), s;
          case ee:
            return i(s.type);
          case te:
            w = s._payload, s = s._init;
            try {
              return i(s(w));
            } catch {
            }
        }
      return "";
    }
    function p() {
      var s = N.A;
      return s === null ? null : s.getOwner();
    }
    function l(s) {
      if (Z.call(s, "key")) {
        var w = Object.getOwnPropertyDescriptor(s, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function f(s, w) {
      function x() {
        nr || (nr = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: x,
        configurable: !0
      });
    }
    function g() {
      var s = e(this.type);
      return or[s] || (or[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function b(s, w, x, P, G, $) {
      return x = $.ref, s = {
        $$typeof: R,
        type: s,
        key: w,
        props: $,
        _owner: G
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function d(s, w, x, P, G, $) {
      if (typeof s == "string" || typeof s == "function" || s === y || s === D || s === E || s === X || s === B || s === pe || typeof s == "object" && s !== null && (s.$$typeof === te || s.$$typeof === ee || s.$$typeof === A || s.$$typeof === z || s.$$typeof === W || s.$$typeof === V || s.getModuleId !== void 0)) {
        var _ = w.children;
        if (_ !== void 0)
          if (P)
            if (J(_)) {
              for (P = 0; P < _.length; P++)
                h(_[P], s);
              Object.freeze && Object.freeze(_);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else h(_, s);
      } else
        _ = "", (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), s === null ? P = "null" : J(s) ? P = "array" : s !== void 0 && s.$$typeof === R ? (P = "<" + (e(s.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : P = typeof s, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          P,
          _
        );
      if (Z.call(w, "key")) {
        _ = e(s);
        var me = Object.keys(w).filter(function(K) {
          return K !== "key";
        });
        P = 0 < me.length ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}", ar[_ + P] || (me = 0 < me.length ? "{" + me.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          _,
          me,
          _
        ), ar[_ + P] = !0);
      }
      if (_ = null, x !== void 0 && (r(x), _ = "" + x), l(w) && (r(w.key), _ = "" + w.key), "key" in w) {
        x = {};
        for (var Ie in w)
          Ie !== "key" && (x[Ie] = w[Ie]);
      } else x = w;
      return _ && f(
        x,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), b(s, _, $, G, p(), x);
    }
    function h(s, w) {
      if (typeof s == "object" && s && s.$$typeof !== Tn) {
        if (J(s))
          for (var x = 0; x < s.length; x++) {
            var P = s[x];
            C(P) && k(P, w);
          }
        else if (C(s))
          s._store && (s._store.validated = 1);
        else if (s === null || typeof s != "object" ? x = null : (x = U && s[U] || s["@@iterator"], x = typeof x == "function" ? x : null), typeof x == "function" && x !== s.entries && (x = x.call(s), x !== s))
          for (; !(s = x.next()).done; )
            C(s.value) && k(s.value, w);
      }
    }
    function C(s) {
      return typeof s == "object" && s !== null && s.$$typeof === R;
    }
    function k(s, w) {
      if (s._store && !s._store.validated && s.key == null && (s._store.validated = 1, w = v(w), !ir[w])) {
        ir[w] = !0;
        var x = "";
        s && s._owner != null && s._owner !== p() && (x = null, typeof s._owner.tag == "number" ? x = e(s._owner.type) : typeof s._owner.name == "string" && (x = s._owner.name), x = " It was passed a child from " + x + ".");
        var P = N.getCurrentStack;
        N.getCurrentStack = function() {
          var G = i(s.type);
          return P && (G += P() || ""), G;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          w,
          x
        ), N.getCurrentStack = P;
      }
    }
    function v(s) {
      var w = "", x = p();
      return x && (x = e(x.type)) && (w = `

Check the render method of \`` + x + "`."), w || (s = e(s)) && (w = `

Check the top-level render call using <` + s + ">."), w;
    }
    var m = Ee, R = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), A = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), U = Symbol.iterator, q = Symbol.for("react.client.reference"), N = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, F = Object.assign, V = Symbol.for("react.client.reference"), J = Array.isArray, re = 0, ae, ue, Se, ge, le, Ne, ke;
    n.__reactDisabledLog = !0;
    var ne, rr, Et = !1, St = new (typeof WeakMap == "function" ? WeakMap : Map)(), Tn = Symbol.for("react.client.reference"), nr, or = {}, ar = {}, ir = {};
    qe.Fragment = y, qe.jsx = function(s, w, x, P, G) {
      return d(s, w, x, !1, P, G);
    }, qe.jsxs = function(s, w, x, P, G) {
      return d(s, w, x, !0, P, G);
    };
  }()), qe;
}
var fr;
function In() {
  return fr || (fr = 1, process.env.NODE_ENV === "production" ? Xe.exports = Pn() : Xe.exports = Nn()), Xe.exports;
}
var M = In(), Qe = { exports: {} }, kt = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function jn() {
  if (dr) return kt;
  dr = 1;
  var e = Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return kt.c = function(t) {
    return e.H.useMemoCache(t);
  }, kt;
}
var Ct = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Mn() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Ct.c = function(t) {
      var r = e.H;
      return r === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), r.useMemoCache(t);
    };
  }()), Ct;
}
var pr;
function Dn() {
  return pr || (pr = 1, process.env.NODE_ENV === "production" ? Qe.exports = jn() : Qe.exports = Mn()), Qe.exports;
}
var Fe = Dn(), Q = function() {
  return Q = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Q.apply(this, arguments);
};
function Me(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function $n(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ln = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zn = /* @__PURE__ */ $n(
  function(e) {
    return Ln.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), j = "-ms-", Ze = "-moz-", I = "-webkit-", zr = "comm", ht = "rule", Ft = "decl", Bn = "@import", Br = "@keyframes", Fn = "@layer", Fr = Math.abs, Vt = String.fromCharCode, Pt = Object.assign;
function Vn(e, t) {
  return H(e, 0) ^ 45 ? (((t << 2 ^ H(e, 0)) << 2 ^ H(e, 1)) << 2 ^ H(e, 2)) << 2 ^ H(e, 3) : 0;
}
function Vr(e) {
  return e.trim();
}
function ye(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function O(e, t, r) {
  return e.replace(t, r);
}
function ot(e, t, r) {
  return e.indexOf(t, r);
}
function H(e, t) {
  return e.charCodeAt(t) | 0;
}
function De(e, t, r) {
  return e.slice(t, r);
}
function fe(e) {
  return e.length;
}
function Yr(e) {
  return e.length;
}
function Ge(e, t) {
  return t.push(e), e;
}
function Yn(e, t) {
  return e.map(t).join("");
}
function gr(e, t) {
  return e.filter(function(r) {
    return !ye(r, t);
  });
}
var pt = 1, $e = 1, Wr = 0, oe = 0, Y = 0, Ve = "";
function gt(e, t, r, n, o, a, c, u) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: pt, column: $e, length: c, return: "", siblings: u };
}
function xe(e, t) {
  return Pt(gt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function je(e) {
  for (; e.root; )
    e = xe(e.root, { children: [e] });
  Ge(e, e.siblings);
}
function Wn() {
  return Y;
}
function Hn() {
  return Y = oe > 0 ? H(Ve, --oe) : 0, $e--, Y === 10 && ($e = 1, pt--), Y;
}
function ce() {
  return Y = oe < Wr ? H(Ve, oe++) : 0, $e++, Y === 10 && ($e = 1, pt++), Y;
}
function _e() {
  return H(Ve, oe);
}
function at() {
  return oe;
}
function mt(e, t) {
  return De(Ve, e, t);
}
function Nt(e) {
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
function Un(e) {
  return pt = $e = 1, Wr = fe(Ve = e), oe = 0, [];
}
function qn(e) {
  return Ve = "", e;
}
function Rt(e) {
  return Vr(mt(oe - 1, It(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gn(e) {
  for (; (Y = _e()) && Y < 33; )
    ce();
  return Nt(e) > 2 || Nt(Y) > 3 ? "" : " ";
}
function Zn(e, t) {
  for (; --t && ce() && !(Y < 48 || Y > 102 || Y > 57 && Y < 65 || Y > 70 && Y < 97); )
    ;
  return mt(e, at() + (t < 6 && _e() == 32 && ce() == 32));
}
function It(e) {
  for (; ce(); )
    switch (Y) {
      // ] ) " '
      case e:
        return oe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && It(Y);
        break;
      // (
      case 40:
        e === 41 && It(e);
        break;
      // \
      case 92:
        ce();
        break;
    }
  return oe;
}
function Jn(e, t) {
  for (; ce() && e + Y !== 57; )
    if (e + Y === 84 && _e() === 47)
      break;
  return "/*" + mt(t, oe - 1) + "*" + Vt(e === 47 ? e : ce());
}
function Kn(e) {
  for (; !Nt(_e()); )
    ce();
  return mt(e, oe);
}
function Xn(e) {
  return qn(it("", null, null, null, [""], e = Un(e), 0, [0], e));
}
function it(e, t, r, n, o, a, c, u, i) {
  for (var p = 0, l = 0, f = c, g = 0, b = 0, d = 0, h = 1, C = 1, k = 1, v = 0, m = "", R = o, T = a, y = n, E = m; C; )
    switch (d = v, v = ce()) {
      // (
      case 40:
        if (d != 108 && H(E, f - 1) == 58) {
          ot(E += O(Rt(v), "&", "&\f"), "&\f", Fr(p ? u[p - 1] : 0)) != -1 && (k = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += Rt(v);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Gn(d);
        break;
      // \
      case 92:
        E += Zn(at() - 1, 7);
        continue;
      // /
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            Ge(Qn(Jn(ce(), at()), t, r, i), i);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * h:
        u[p++] = fe(E) * k;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (v) {
          // \0 }
          case 0:
          case 125:
            C = 0;
          // ;
          case 59 + l:
            k == -1 && (E = O(E, /\f/g, "")), b > 0 && fe(E) - f && Ge(b > 32 ? vr(E + ";", n, r, f - 1, i) : vr(O(E, " ", "") + ";", n, r, f - 2, i), i);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Ge(y = mr(E, t, r, p, l, o, u, m, R = [], T = [], f, a), a), v === 123)
              if (l === 0)
                it(E, t, y, y, R, a, f, u, T);
              else
                switch (g === 99 && H(E, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    it(e, y, y, n && Ge(mr(e, y, y, 0, 0, o, u, m, o, R = [], f, T), T), o, T, f, u, n ? R : T);
                    break;
                  default:
                    it(E, y, y, y, [""], T, 0, u, T);
                }
        }
        p = l = b = 0, h = k = 1, m = E = "", f = c;
        break;
      // :
      case 58:
        f = 1 + fe(E), b = d;
      default:
        if (h < 1) {
          if (v == 123)
            --h;
          else if (v == 125 && h++ == 0 && Hn() == 125)
            continue;
        }
        switch (E += Vt(v), v * h) {
          // &
          case 38:
            k = l > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            u[p++] = (fe(E) - 1) * k, k = 1;
            break;
          // @
          case 64:
            _e() === 45 && (E += Rt(ce())), g = _e(), l = f = fe(m = E += Kn(at())), v++;
            break;
          // -
          case 45:
            d === 45 && fe(E) == 2 && (h = 0);
        }
    }
  return a;
}
function mr(e, t, r, n, o, a, c, u, i, p, l, f) {
  for (var g = o - 1, b = o === 0 ? a : [""], d = Yr(b), h = 0, C = 0, k = 0; h < n; ++h)
    for (var v = 0, m = De(e, g + 1, g = Fr(C = c[h])), R = e; v < d; ++v)
      (R = Vr(C > 0 ? b[v] + " " + m : O(m, /&\f/g, b[v]))) && (i[k++] = R);
  return gt(e, t, r, o === 0 ? ht : u, i, p, l, f);
}
function Qn(e, t, r, n) {
  return gt(e, t, r, zr, Vt(Wn()), De(e, 2, -2), 0, n);
}
function vr(e, t, r, n, o) {
  return gt(e, t, r, Ft, De(e, 0, n), De(e, n + 1, -1), n, o);
}
function Hr(e, t, r) {
  switch (Vn(e, t)) {
    // color-adjust
    case 5103:
      return I + "print-" + e + e;
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
      return I + e + e;
    // tab-size
    case 4789:
      return Ze + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return I + e + Ze + e + j + e + e;
    // writing-mode
    case 5936:
      switch (H(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return I + e + j + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return I + e + j + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return I + e + j + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return I + e + j + e + e;
    // order
    case 6165:
      return I + e + j + "flex-" + e + e;
    // align-items
    case 5187:
      return I + e + O(e, /(\w+).+(:[^]+)/, I + "box-$1$2" + j + "flex-$1$2") + e;
    // align-self
    case 5443:
      return I + e + j + "flex-item-" + O(e, /flex-|-self/g, "") + (ye(e, /flex-|baseline/) ? "" : j + "grid-row-" + O(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return I + e + j + "flex-line-pack" + O(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return I + e + j + O(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return I + e + j + O(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return I + "box-" + O(e, "-grow", "") + I + e + j + O(e, "grow", "positive") + e;
    // transition
    case 4554:
      return I + O(e, /([^-])(transform)/g, "$1" + I + "$2") + e;
    // cursor
    case 6187:
      return O(O(O(e, /(zoom-|grab)/, I + "$1"), /(image-set)/, I + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, I + "$1$`$1");
    // justify-content
    case 4968:
      return O(O(e, /(.+:)(flex-)?(.*)/, I + "box-pack:$3" + j + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + I + e + e;
    // justify-self
    case 4200:
      if (!ye(e, /flex-|baseline/)) return j + "grid-column-align" + De(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return j + O(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, ye(n.props, /grid-\w+-end/);
      }) ? ~ot(e + (r = r[t].value), "span", 0) ? e : j + O(e, "-start", "") + e + j + "grid-row-span:" + (~ot(r, "span", 0) ? ye(r, /\d+/) : +ye(r, /\d+/) - +ye(e, /\d+/)) + ";" : j + O(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return ye(n.props, /grid-\w+-start/);
      }) ? e : j + O(O(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, I + "$1$2") + e;
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
      if (fe(e) - 1 - t > 6)
        switch (H(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (H(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return O(e, /(.+:)(.+)-([^]+)/, "$1" + I + "$2-$3$1" + Ze + (H(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ot(e, "stretch", 0) ? Hr(O(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return O(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, a, c, u, i, p) {
        return j + o + ":" + a + p + (c ? j + o + "-span:" + (u ? i : +i - +a) + p : "") + e;
      });
    // position: sticky
    case 4949:
      if (H(e, t + 6) === 121)
        return O(e, ":", ":" + I) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (H(e, H(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return O(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + I + (H(e, 14) === 45 ? "inline-" : "") + "box$3$1" + I + "$2$3$1" + j + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return O(e, ":", ":" + j) + e;
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
function ut(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function eo(e, t, r, n) {
  switch (e.type) {
    case Fn:
      if (e.children.length) break;
    case Bn:
    case Ft:
      return e.return = e.return || e.value;
    case zr:
      return "";
    case Br:
      return e.return = e.value + "{" + ut(e.children, n) + "}";
    case ht:
      if (!fe(e.value = e.props.join(","))) return "";
  }
  return fe(r = ut(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function to(e) {
  var t = Yr(e);
  return function(r, n, o, a) {
    for (var c = "", u = 0; u < t; u++)
      c += e[u](r, n, o, a) || "";
    return c;
  };
}
function ro(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function no(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ft:
        e.return = Hr(e.value, e.length, r);
        return;
      case Br:
        return ut([xe(e, { value: O(e.value, "@", "@" + I) })], n);
      case ht:
        if (e.length)
          return Yn(r = e.props, function(o) {
            switch (ye(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                je(xe(e, { props: [O(o, /:(read-\w+)/, ":" + Ze + "$1")] })), je(xe(e, { props: [o] })), Pt(e, { props: gr(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                je(xe(e, { props: [O(o, /:(plac\w+)/, ":" + I + "input-$1")] })), je(xe(e, { props: [O(o, /:(plac\w+)/, ":" + Ze + "$1")] })), je(xe(e, { props: [O(o, /:(plac\w+)/, j + "input-$1")] })), je(xe(e, { props: [o] })), Pt(e, { props: gr(r, n) });
                break;
            }
            return "";
          });
    }
}
var oo = {
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
}, Ae = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ur = "active", qr = "data-styled-version", vt = "6.1.16", Yt = `/*!sc*/
`, lt = typeof window < "u" && "HTMLElement" in window, ao = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), yr = /invalid hook call/i, et = /* @__PURE__ */ new Set(), io = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var a = !0;
      console.error = function(c) {
        for (var u = [], i = 1; i < arguments.length; i++) u[i - 1] = arguments[i];
        yr.test(c) ? (a = !1, et.delete(n)) : o.apply(void 0, Me([c], u, !1));
      }, ie(), a && !et.has(n) && (console.warn(n), et.add(n));
    } catch (c) {
      yr.test(c.message) && et.delete(n);
    } finally {
      console.error = o;
    }
  }
}, yt = Object.freeze([]), Le = Object.freeze({});
function so(e, t, r) {
  return r === void 0 && (r = Le), e.theme !== r.theme && e.theme || t || r.theme;
}
var jt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), co = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, uo = /(^-|-$)/g;
function br(e) {
  return e.replace(co, "-").replace(uo, "");
}
var lo = /(a)(d)/gi, tt = 52, wr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Mt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > tt; t = t / tt | 0) r = wr(t % tt) + r;
  return (wr(t % tt) + r).replace(lo, "$1-$2");
}
var Tt, Gr = 5381, Re = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Zr = function(e) {
  return Re(Gr, e);
};
function fo(e) {
  return Mt(Zr(e) >>> 0);
}
function Jr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function _t(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Kr = typeof Symbol == "function" && Symbol.for, Xr = Kr ? Symbol.for("react.memo") : 60115, ho = Kr ? Symbol.for("react.forward_ref") : 60112, po = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, go = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Qr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, mo = ((Tt = {})[ho] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Tt[Xr] = Qr, Tt);
function xr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Xr ? Qr : "$$typeof" in e ? mo[e.$$typeof] : po;
  var t;
}
var vo = Object.defineProperty, yo = Object.getOwnPropertyNames, Er = Object.getOwnPropertySymbols, bo = Object.getOwnPropertyDescriptor, wo = Object.getPrototypeOf, Sr = Object.prototype;
function en(e, t, r) {
  if (typeof t != "string") {
    if (Sr) {
      var n = wo(t);
      n && n !== Sr && en(e, n, r);
    }
    var o = yo(t);
    Er && (o = o.concat(Er(t)));
    for (var a = xr(e), c = xr(t), u = 0; u < o.length; ++u) {
      var i = o[u];
      if (!(i in go || r && r[i] || c && i in c || a && i in a)) {
        var p = bo(t, i);
        try {
          vo(e, i, p);
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
function Wt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Te(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function kr(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function Be(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Dt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Be(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = Dt(e[n], t[n]);
  else if (Be(t)) for (var n in t) e[n] = Dt(e[n], t[n]);
  return e;
}
function Ht(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var xo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Eo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, a = e.length; o < a; o += 1) n.push(e[o]);
  return n.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Ye(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Eo.apply(void 0, Me([xo[e]], t, !1)).trim());
}
var So = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, a = o; t >= a; ) if ((a <<= 1) < 0) throw Ye(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
      for (var c = o; c < a; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), i = (c = 0, r.length); c < i; c++) this.tag.insertRule(u, r[c]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var a = n; a < o; a++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), a = o + n, c = o; c < a; c++) r += "".concat(this.tag.getRule(c)).concat(Yt);
    return r;
  }, e;
}(), ko = 1 << 30, st = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), ct = 1, rt = function(e) {
  if (st.has(e)) return st.get(e);
  for (; ft.has(ct); ) ct++;
  var t = ct++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > ko)) throw Ye(16, "".concat(t));
  return st.set(e, t), ft.set(t, e), t;
}, Co = function(e, t) {
  ct = t + 1, st.set(e, t), ft.set(t, e);
}, Ro = "style[".concat(Ae, "][").concat(qr, '="').concat(vt, '"]'), To = new RegExp("^".concat(Ae, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), _o = function(e, t, r) {
  for (var n, o = r.split(","), a = 0, c = o.length; a < c; a++) (n = o[a]) && e.registerName(t, n);
}, Oo = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Yt), o = [], a = 0, c = n.length; a < c; a++) {
    var u = n[a].trim();
    if (u) {
      var i = u.match(To);
      if (i) {
        var p = 0 | parseInt(i[1], 10), l = i[2];
        p !== 0 && (Co(l, p), _o(e, l, i[3]), e.getTag().insertRules(p, o)), o.length = 0;
      } else o.push(u);
    }
  }
}, Cr = function(e) {
  for (var t = document.querySelectorAll(Ro), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(Ae) !== Ur && (Oo(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Ao() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var tn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(u) {
    var i = Array.from(u.querySelectorAll("style[".concat(Ae, "]")));
    return i[i.length - 1];
  }(r), a = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ae, Ur), n.setAttribute(qr, vt);
  var c = Ao();
  return c && n.setAttribute("nonce", c), r.insertBefore(n, a), n;
}, Po = function() {
  function e(t) {
    this.element = tn(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, a = n.length; o < a; o++) {
        var c = n[o];
        if (c.ownerNode === r) return c;
      }
      throw Ye(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), No = function() {
  function e(t) {
    this.element = tn(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Io = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Rr = lt, jo = { isServer: !lt, useCSSOMInjection: !ao }, rn = function() {
  function e(t, r, n) {
    t === void 0 && (t = Le), r === void 0 && (r = {});
    var o = this;
    this.options = Q(Q({}, jo), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && lt && Rr && (Rr = !1, Cr(this)), Ht(this, function() {
      return function(a) {
        for (var c = a.getTag(), u = c.length, i = "", p = function(f) {
          var g = function(k) {
            return ft.get(k);
          }(f);
          if (g === void 0) return "continue";
          var b = a.names.get(g), d = c.getGroup(f);
          if (b === void 0 || !b.size || d.length === 0) return "continue";
          var h = "".concat(Ae, ".g").concat(f, '[id="').concat(g, '"]'), C = "";
          b !== void 0 && b.forEach(function(k) {
            k.length > 0 && (C += "".concat(k, ","));
          }), i += "".concat(d).concat(h, '{content:"').concat(C, '"}').concat(Yt);
        }, l = 0; l < u; l++) p(l);
        return i;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return rt(t);
  }, e.prototype.rehydrate = function() {
    !this.server && lt && Cr(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Q(Q({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new Io(o) : n ? new Po(o) : new No(o);
    }(this.options), new So(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (rt(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(rt(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(rt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Mo = /&/g, Do = /^\s*\/\/.*$/gm;
function nn(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = nn(r.children, t)), r;
  });
}
function $o(e) {
  var t, r, n, o = Le, a = o.options, c = a === void 0 ? Le : a, u = o.plugins, i = u === void 0 ? yt : u, p = function(g, b, d) {
    return d.startsWith(r) && d.endsWith(r) && d.replaceAll(r, "").length > 0 ? ".".concat(t) : g;
  }, l = i.slice();
  l.push(function(g) {
    g.type === ht && g.value.includes("&") && (g.props[0] = g.props[0].replace(Mo, r).replace(n, p));
  }), c.prefix && l.push(no), l.push(eo);
  var f = function(g, b, d, h) {
    b === void 0 && (b = ""), d === void 0 && (d = ""), h === void 0 && (h = "&"), t = h, r = b, n = new RegExp("\\".concat(r, "\\b"), "g");
    var C = g.replace(Do, ""), k = Xn(d || b ? "".concat(d, " ").concat(b, " { ").concat(C, " }") : C);
    c.namespace && (k = nn(k, c.namespace));
    var v = [];
    return ut(k, to(l.concat(ro(function(m) {
      return v.push(m);
    })))), v;
  };
  return f.hash = i.length ? i.reduce(function(g, b) {
    return b.name || Ye(15), Re(g, b.name);
  }, Gr).toString() : "", f;
}
var Lo = new rn(), $t = $o(), on = Ee.createContext({ shouldForwardProp: void 0, styleSheet: Lo, stylis: $t });
on.Consumer;
Ee.createContext(void 0);
function Tr() {
  return On(on);
}
var _r = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, a) {
      a === void 0 && (a = $t);
      var c = n.name + a.hash;
      o.hasNameForId(n.id, c) || o.insertRules(n.id, c, a(n.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Ht(this, function() {
      throw Ye(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = $t), this.name + t.hash;
  }, e;
}(), zo = function(e) {
  return e >= "A" && e <= "Z";
};
function Or(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    zo(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var an = function(e) {
  return e == null || e === !1 || e === "";
}, sn = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var a = e[o];
    e.hasOwnProperty(o) && !an(a) && (Array.isArray(a) && a.isCss || ze(a) ? n.push("".concat(Or(o), ":"), a, ";") : Be(a) ? n.push.apply(n, Me(Me(["".concat(o, " {")], sn(a), !1), ["}"], !1)) : n.push("".concat(Or(o), ": ").concat((t = o, (r = a) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in oo || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function Oe(e, t, r, n) {
  if (an(e)) return [];
  if (Wt(e)) return [".".concat(e.styledComponentId)];
  if (ze(e)) {
    if (!ze(a = e) || a.prototype && a.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof _r || Be(o) || o === null || console.error("".concat(Jr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Oe(o, t, r, n);
  }
  var a;
  return e instanceof _r ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Be(e) ? sn(e) : Array.isArray(e) ? Array.prototype.concat.apply(yt, e.map(function(c) {
    return Oe(c, t, r, n);
  })) : [e.toString()];
}
function Bo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ze(r) && !Wt(r)) return !1;
  }
  return !0;
}
var Fo = Zr(vt), Vo = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Bo(t), this.componentId = r, this.baseHash = Re(Fo, r), this.baseStyle = n, rn.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = Te(o, this.staticRulesId);
    else {
      var a = kr(Oe(this.rules, t, r, n)), c = Mt(Re(this.baseHash, a) >>> 0);
      if (!r.hasNameForId(this.componentId, c)) {
        var u = n(a, ".".concat(c), void 0, this.componentId);
        r.insertRules(this.componentId, c, u);
      }
      o = Te(o, c), this.staticRulesId = c;
    }
    else {
      for (var i = Re(this.baseHash, n.hash), p = "", l = 0; l < this.rules.length; l++) {
        var f = this.rules[l];
        if (typeof f == "string") p += f, process.env.NODE_ENV !== "production" && (i = Re(i, f));
        else if (f) {
          var g = kr(Oe(f, t, r, n));
          i = Re(i, g + l), p += g;
        }
      }
      if (p) {
        var b = Mt(i >>> 0);
        r.hasNameForId(this.componentId, b) || r.insertRules(this.componentId, b, n(p, ".".concat(b), void 0, this.componentId)), o = Te(o, b);
      }
    }
    return o;
  }, e;
}(), cn = Ee.createContext(void 0);
cn.Consumer;
var Ot = {}, Ar = /* @__PURE__ */ new Set();
function Yo(e, t, r) {
  var n = Wt(e), o = e, a = !_t(e), c = t.attrs, u = c === void 0 ? yt : c, i = t.componentId, p = i === void 0 ? function(R, T) {
    var y = typeof R != "string" ? "sc" : br(R);
    Ot[y] = (Ot[y] || 0) + 1;
    var E = "".concat(y, "-").concat(fo(vt + y + Ot[y]));
    return T ? "".concat(T, "-").concat(E) : E;
  }(t.displayName, t.parentComponentId) : i, l = t.displayName, f = l === void 0 ? function(R) {
    return _t(R) ? "styled.".concat(R) : "Styled(".concat(Jr(R), ")");
  }(e) : l, g = t.displayName && t.componentId ? "".concat(br(t.displayName), "-").concat(t.componentId) : t.componentId || p, b = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, d = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      d = function(R, T) {
        return h(R, T) && C(R, T);
      };
    } else d = h;
  }
  var k = new Vo(r, g, n ? o.componentStyle : void 0);
  function v(R, T) {
    return function(y, E, D) {
      var z = y.attrs, A = y.componentStyle, W = y.defaultProps, X = y.foldedComponentIds, B = y.styledComponentId, ee = y.target, te = Ee.useContext(cn), pe = Tr(), U = y.shouldForwardProp || pe.shouldForwardProp;
      process.env.NODE_ENV !== "production" && sr(B);
      var q = so(E, te, W) || Le, N = function(ae, ue, Se) {
        for (var ge, le = Q(Q({}, ue), { className: void 0, theme: Se }), Ne = 0; Ne < ae.length; Ne += 1) {
          var ke = ze(ge = ae[Ne]) ? ge(le) : ge;
          for (var ne in ke) le[ne] = ne === "className" ? Te(le[ne], ke[ne]) : ne === "style" ? Q(Q({}, le[ne]), ke[ne]) : ke[ne];
        }
        return ue.className && (le.className = Te(le.className, ue.className)), le;
      }(z, E, q), Z = N.as || ee, F = {};
      for (var V in N) N[V] === void 0 || V[0] === "$" || V === "as" || V === "theme" && N.theme === q || (V === "forwardedAs" ? F.as = N.forwardedAs : U && !U(V, Z) || (F[V] = N[V], U || process.env.NODE_ENV !== "development" || zn(V) || Ar.has(V) || !jt.has(Z) || (Ar.add(V), console.warn('styled-components: it looks like an unknown prop "'.concat(V, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var J = function(ae, ue) {
        var Se = Tr(), ge = ae.generateAndInjectStyles(ue, Se.styleSheet, Se.stylis);
        return process.env.NODE_ENV !== "production" && sr(ge), ge;
      }(A, N);
      process.env.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(J);
      var re = Te(X, B);
      return J && (re += " " + J), N.className && (re += " " + N.className), F[_t(Z) && !jt.has(Z) ? "class" : "className"] = re, D && (F.ref = D), _n(Z, F);
    }(m, R, T);
  }
  v.displayName = f;
  var m = Ee.forwardRef(v);
  return m.attrs = b, m.componentStyle = k, m.displayName = f, m.shouldForwardProp = d, m.foldedComponentIds = n ? Te(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = g, m.target = n ? o.target : e, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? function(T) {
      for (var y = [], E = 1; E < arguments.length; E++) y[E - 1] = arguments[E];
      for (var D = 0, z = y; D < z.length; D++) Dt(T, z[D], !0);
      return T;
    }({}, o.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (io(f, g), m.warnTooManyClasses = /* @__PURE__ */ function(R, T) {
    var y = {}, E = !1;
    return function(D) {
      if (!E && (y[D] = !0, Object.keys(y).length >= 200)) {
        var z = T ? ' with the id of "'.concat(T, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(R).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), E = !0, y = {};
      }
    };
  }(f, g)), Ht(m, function() {
    return ".".concat(m.styledComponentId);
  }), a && en(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
function Pr(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var Nr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Wo(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (ze(e) || Be(e)) return Nr(Oe(Pr(yt, Me([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? Oe(n) : Nr(Oe(Pr(n, t)));
}
function Lt(e, t, r) {
  if (r === void 0 && (r = Le), !t) throw Ye(1, t);
  var n = function(o) {
    for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
    return e(t, r, Wo.apply(void 0, Me([o], a, !1)));
  };
  return n.attrs = function(o) {
    return Lt(e, t, Q(Q({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Lt(e, t, Q(Q({}, r), o));
  }, n;
}
var un = function(e) {
  return Lt(Yo, e);
}, Pe = un;
jt.forEach(function(e) {
  Pe[e] = un(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var nt = "__sc-".concat(Ae, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[nt] || (window[nt] = 0), window[nt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[nt] += 1);
const Ho = Pe.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #4B5563;
  filter: blur(1rem) brightness(0.5) grayscale(0.3);
  transform: scale(1.25);
`, Uo = (e) => {
  const t = Fe.c(2), {
    src: r
  } = e, n = `url(${r})`;
  let o;
  return t[0] !== n ? (o = /* @__PURE__ */ M.jsx(Ho, { "data-rivx-backdrop": !0, style: {
    backgroundImage: n,
    backgroundSize: "cover",
    backgroundPosition: "center"
  } }), t[0] = n, t[1] = o) : o = t[1], o;
}, qo = Pe.button`
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
`, Ir = (e) => {
  const t = Fe.c(3), {
    children: r,
    onClick: n
  } = e;
  let o;
  return t[0] !== r || t[1] !== n ? (o = /* @__PURE__ */ M.jsx(qo, { type: "button", onClick: n, children: r }), t[0] = r, t[1] = n, t[2] = o) : o = t[2], o;
}, Go = Pe.div`
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
`, Zo = () => {
  const e = Fe.c(1);
  let t;
  return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = /* @__PURE__ */ M.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ M.jsx("title", { children: "Zoom In" }),
    /* @__PURE__ */ M.jsx("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ M.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
    /* @__PURE__ */ M.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
    /* @__PURE__ */ M.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
  ] }), e[0] = t) : t = e[0], t;
}, Jo = () => {
  const e = Fe.c(1);
  let t;
  return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = /* @__PURE__ */ M.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ M.jsx("title", { children: "Zoom Out" }),
    /* @__PURE__ */ M.jsx("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ M.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
    /* @__PURE__ */ M.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
  ] }), e[0] = t) : t = e[0], t;
}, Ko = (e) => {
  const t = Fe.c(15), {
    onZoomIn: r,
    onZoomOut: n,
    configuration: o
  } = e;
  let a;
  t[0] !== o.zoomInIcon ? (a = o.zoomInIcon ?? /* @__PURE__ */ M.jsx(Zo, {}), t[0] = o.zoomInIcon, t[1] = a) : a = t[1];
  const c = a;
  let u;
  t[2] !== o.zoomOutIcon ? (u = o.zoomOutIcon ?? /* @__PURE__ */ M.jsx(Jo, {}), t[2] = o.zoomOutIcon, t[3] = u) : u = t[3];
  const i = u;
  let p;
  t[4] !== o.hasZoomIn || t[5] !== r || t[6] !== c ? (p = o.hasZoomIn && /* @__PURE__ */ M.jsx(Ir, { onClick: r, children: c }), t[4] = o.hasZoomIn, t[5] = r, t[6] = c, t[7] = p) : p = t[7];
  let l;
  t[8] !== o.hasZoomOut || t[9] !== n || t[10] !== i ? (l = o.hasZoomOut && /* @__PURE__ */ M.jsx(Ir, { onClick: n, children: i }), t[8] = o.hasZoomOut, t[9] = n, t[10] = i, t[11] = l) : l = t[11];
  let f;
  return t[12] !== p || t[13] !== l ? (f = /* @__PURE__ */ M.jsxs(Go, { "data-rivx-controls": !0, children: [
    p,
    l
  ] }), t[12] = p, t[13] = l, t[14] = f) : f = t[14], f;
}, Xo = Pe.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;
var ln = {
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
}, Ut = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, Qo = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], dt = {
  CSS: {},
  springs: {}
};
function de(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Je(e, t) {
  return e.indexOf(t) > -1;
}
function At(e, t) {
  return e.apply(null, t);
}
var S = {
  arr: function(e) {
    return Array.isArray(e);
  },
  obj: function(e) {
    return Je(Object.prototype.toString.call(e), "Object");
  },
  pth: function(e) {
    return S.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function(e) {
    return e instanceof SVGElement;
  },
  inp: function(e) {
    return e instanceof HTMLInputElement;
  },
  dom: function(e) {
    return e.nodeType || S.svg(e);
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
    return S.und(e) || e === null;
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
    return S.hex(e) || S.rgb(e) || S.hsl(e);
  },
  key: function(e) {
    return !ln.hasOwnProperty(e) && !Ut.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  }
};
function fn(e) {
  var t = /\(([^)]+)\)/.exec(e);
  return t ? t[1].split(",").map(function(r) {
    return parseFloat(r);
  }) : [];
}
function dn(e, t) {
  var r = fn(e), n = de(S.und(r[0]) ? 1 : r[0], 0.1, 100), o = de(S.und(r[1]) ? 100 : r[1], 0.1, 100), a = de(S.und(r[2]) ? 10 : r[2], 0.1, 100), c = de(S.und(r[3]) ? 0 : r[3], 0.1, 100), u = Math.sqrt(o / n), i = a / (2 * Math.sqrt(o * n)), p = i < 1 ? u * Math.sqrt(1 - i * i) : 0, l = 1, f = i < 1 ? (i * u + -c) / p : -c + u;
  function g(d) {
    var h = t ? t * d / 1e3 : d;
    return i < 1 ? h = Math.exp(-h * i * u) * (l * Math.cos(p * h) + f * Math.sin(p * h)) : h = (l + f * h) * Math.exp(-h * u), d === 0 || d === 1 ? d : 1 - h;
  }
  function b() {
    var d = dt.springs[e];
    if (d)
      return d;
    for (var h = 1 / 6, C = 0, k = 0; ; )
      if (C += h, g(C) === 1) {
        if (k++, k >= 16)
          break;
      } else
        k = 0;
    var v = C * h * 1e3;
    return dt.springs[e] = v, v;
  }
  return t ? g : b;
}
function ea(e) {
  return e === void 0 && (e = 10), function(t) {
    return Math.ceil(de(t, 1e-6, 1) * e) * (1 / e);
  };
}
var ta = function() {
  var e = 11, t = 1 / (e - 1);
  function r(l, f) {
    return 1 - 3 * f + 3 * l;
  }
  function n(l, f) {
    return 3 * f - 6 * l;
  }
  function o(l) {
    return 3 * l;
  }
  function a(l, f, g) {
    return ((r(f, g) * l + n(f, g)) * l + o(f)) * l;
  }
  function c(l, f, g) {
    return 3 * r(f, g) * l * l + 2 * n(f, g) * l + o(f);
  }
  function u(l, f, g, b, d) {
    var h, C, k = 0;
    do
      C = f + (g - f) / 2, h = a(C, b, d) - l, h > 0 ? g = C : f = C;
    while (Math.abs(h) > 1e-7 && ++k < 10);
    return C;
  }
  function i(l, f, g, b) {
    for (var d = 0; d < 4; ++d) {
      var h = c(f, g, b);
      if (h === 0)
        return f;
      var C = a(f, g, b) - l;
      f -= C / h;
    }
    return f;
  }
  function p(l, f, g, b) {
    if (!(0 <= l && l <= 1 && 0 <= g && g <= 1))
      return;
    var d = new Float32Array(e);
    if (l !== f || g !== b)
      for (var h = 0; h < e; ++h)
        d[h] = a(h * t, l, g);
    function C(k) {
      for (var v = 0, m = 1, R = e - 1; m !== R && d[m] <= k; ++m)
        v += t;
      --m;
      var T = (k - d[m]) / (d[m + 1] - d[m]), y = v + T * t, E = c(y, l, g);
      return E >= 1e-3 ? i(k, y, l, g) : E === 0 ? y : u(k, v, v + t, l, g);
    }
    return function(k) {
      return l === f && g === b || k === 0 || k === 1 ? k : a(C(k), f, b);
    };
  }
  return p;
}(), hn = function() {
  var e = { linear: function() {
    return function(n) {
      return n;
    };
  } }, t = {
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
        for (var o, a = 4; n < ((o = Math.pow(2, --a)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - a) - 7.5625 * Math.pow((o * 3 - 2) / 22 - n, 2);
      };
    },
    Elastic: function(n, o) {
      n === void 0 && (n = 1), o === void 0 && (o = 0.5);
      var a = de(n, 1, 10), c = de(o, 0.1, 2);
      return function(u) {
        return u === 0 || u === 1 ? u : -a * Math.pow(2, 10 * (u - 1)) * Math.sin((u - 1 - c / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / c);
      };
    }
  }, r = ["Quad", "Cubic", "Quart", "Quint"];
  return r.forEach(function(n, o) {
    t[n] = function() {
      return function(a) {
        return Math.pow(a, o + 2);
      };
    };
  }), Object.keys(t).forEach(function(n) {
    var o = t[n];
    e["easeIn" + n] = o, e["easeOut" + n] = function(a, c) {
      return function(u) {
        return 1 - o(a, c)(1 - u);
      };
    }, e["easeInOut" + n] = function(a, c) {
      return function(u) {
        return u < 0.5 ? o(a, c)(u * 2) / 2 : 1 - o(a, c)(u * -2 + 2) / 2;
      };
    }, e["easeOutIn" + n] = function(a, c) {
      return function(u) {
        return u < 0.5 ? (1 - o(a, c)(1 - u * 2)) / 2 : (o(a, c)(u * 2 - 1) + 1) / 2;
      };
    };
  }), e;
}();
function qt(e, t) {
  if (S.fnc(e))
    return e;
  var r = e.split("(")[0], n = hn[r], o = fn(e);
  switch (r) {
    case "spring":
      return dn(e, t);
    case "cubicBezier":
      return At(ta, o);
    case "steps":
      return At(ea, o);
    default:
      return At(n, o);
  }
}
function pn(e) {
  try {
    var t = document.querySelectorAll(e);
    return t;
  } catch {
    return;
  }
}
function bt(e, t) {
  for (var r = e.length, n = arguments.length >= 2 ? arguments[1] : void 0, o = [], a = 0; a < r; a++)
    if (a in e) {
      var c = e[a];
      t.call(n, c, a, e) && o.push(c);
    }
  return o;
}
function wt(e) {
  return e.reduce(function(t, r) {
    return t.concat(S.arr(r) ? wt(r) : r);
  }, []);
}
function jr(e) {
  return S.arr(e) ? e : (S.str(e) && (e = pn(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function Gt(e, t) {
  return e.some(function(r) {
    return r === t;
  });
}
function Zt(e) {
  var t = {};
  for (var r in e)
    t[r] = e[r];
  return t;
}
function zt(e, t) {
  var r = Zt(e);
  for (var n in e)
    r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
  return r;
}
function xt(e, t) {
  var r = Zt(e);
  for (var n in t)
    r[n] = S.und(e[n]) ? t[n] : e[n];
  return r;
}
function ra(e) {
  var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return t ? "rgba(" + t[1] + ",1)" : e;
}
function na(e) {
  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, r = e.replace(t, function(u, i, p, l) {
    return i + i + p + p + l + l;
  }), n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r), o = parseInt(n[1], 16), a = parseInt(n[2], 16), c = parseInt(n[3], 16);
  return "rgba(" + o + "," + a + "," + c + ",1)";
}
function oa(e) {
  var t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), r = parseInt(t[1], 10) / 360, n = parseInt(t[2], 10) / 100, o = parseInt(t[3], 10) / 100, a = t[4] || 1;
  function c(g, b, d) {
    return d < 0 && (d += 1), d > 1 && (d -= 1), d < 1 / 6 ? g + (b - g) * 6 * d : d < 1 / 2 ? b : d < 2 / 3 ? g + (b - g) * (2 / 3 - d) * 6 : g;
  }
  var u, i, p;
  if (n == 0)
    u = i = p = o;
  else {
    var l = o < 0.5 ? o * (1 + n) : o + n - o * n, f = 2 * o - l;
    u = c(f, l, r + 1 / 3), i = c(f, l, r), p = c(f, l, r - 1 / 3);
  }
  return "rgba(" + u * 255 + "," + i * 255 + "," + p * 255 + "," + a + ")";
}
function aa(e) {
  if (S.rgb(e))
    return ra(e);
  if (S.hex(e))
    return na(e);
  if (S.hsl(e))
    return oa(e);
}
function be(e) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (t)
    return t[1];
}
function ia(e) {
  if (Je(e, "translate") || e === "perspective")
    return "px";
  if (Je(e, "rotate") || Je(e, "skew"))
    return "deg";
}
function Bt(e, t) {
  return S.fnc(e) ? e(t.target, t.id, t.total) : e;
}
function he(e, t) {
  return e.getAttribute(t);
}
function Jt(e, t, r) {
  var n = be(t);
  if (Gt([r, "deg", "rad", "turn"], n))
    return t;
  var o = dt.CSS[t + r];
  if (!S.und(o))
    return o;
  var a = 100, c = document.createElement(e.tagName), u = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  u.appendChild(c), c.style.position = "absolute", c.style.width = a + r;
  var i = a / c.offsetWidth;
  u.removeChild(c);
  var p = i * parseFloat(t);
  return dt.CSS[t + r] = p, p;
}
function gn(e, t, r) {
  if (t in e.style) {
    var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), o = e.style[t] || getComputedStyle(e).getPropertyValue(n) || "0";
    return r ? Jt(e, o, r) : o;
  }
}
function Kt(e, t) {
  if (S.dom(e) && !S.inp(e) && (!S.nil(he(e, t)) || S.svg(e) && e[t]))
    return "attribute";
  if (S.dom(e) && Gt(Qo, t))
    return "transform";
  if (S.dom(e) && t !== "transform" && gn(e, t))
    return "css";
  if (e[t] != null)
    return "object";
}
function mn(e) {
  if (S.dom(e)) {
    for (var t = e.style.transform || "", r = /(\w+)\(([^)]*)\)/g, n = /* @__PURE__ */ new Map(), o; o = r.exec(t); )
      n.set(o[1], o[2]);
    return n;
  }
}
function sa(e, t, r, n) {
  var o = Je(t, "scale") ? 1 : 0 + ia(t), a = mn(e).get(t) || o;
  return r && (r.transforms.list.set(t, a), r.transforms.last = t), n ? Jt(e, a, n) : a;
}
function Xt(e, t, r, n) {
  switch (Kt(e, t)) {
    case "transform":
      return sa(e, t, n, r);
    case "css":
      return gn(e, t, r);
    case "attribute":
      return he(e, t);
    default:
      return e[t] || 0;
  }
}
function Qt(e, t) {
  var r = /^(\*=|\+=|-=)/.exec(e);
  if (!r)
    return e;
  var n = be(e) || 0, o = parseFloat(t), a = parseFloat(e.replace(r[0], ""));
  switch (r[0][0]) {
    case "+":
      return o + a + n;
    case "-":
      return o - a + n;
    case "*":
      return o * a + n;
  }
}
function vn(e, t) {
  if (S.col(e))
    return aa(e);
  if (/\s/g.test(e))
    return e;
  var r = be(e), n = r ? e.substr(0, e.length - r.length) : e;
  return t ? n + t : n;
}
function er(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function ca(e) {
  return Math.PI * 2 * he(e, "r");
}
function ua(e) {
  return he(e, "width") * 2 + he(e, "height") * 2;
}
function la(e) {
  return er(
    { x: he(e, "x1"), y: he(e, "y1") },
    { x: he(e, "x2"), y: he(e, "y2") }
  );
}
function yn(e) {
  for (var t = e.points, r = 0, n, o = 0; o < t.numberOfItems; o++) {
    var a = t.getItem(o);
    o > 0 && (r += er(n, a)), n = a;
  }
  return r;
}
function fa(e) {
  var t = e.points;
  return yn(e) + er(t.getItem(t.numberOfItems - 1), t.getItem(0));
}
function bn(e) {
  if (e.getTotalLength)
    return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return ca(e);
    case "rect":
      return ua(e);
    case "line":
      return la(e);
    case "polyline":
      return yn(e);
    case "polygon":
      return fa(e);
  }
}
function da(e) {
  var t = bn(e);
  return e.setAttribute("stroke-dasharray", t), t;
}
function ha(e) {
  for (var t = e.parentNode; S.svg(t) && S.svg(t.parentNode); )
    t = t.parentNode;
  return t;
}
function wn(e, t) {
  var r = t || {}, n = r.el || ha(e), o = n.getBoundingClientRect(), a = he(n, "viewBox"), c = o.width, u = o.height, i = r.viewBox || (a ? a.split(" ") : [0, 0, c, u]);
  return {
    el: n,
    viewBox: i,
    x: i[0] / 1,
    y: i[1] / 1,
    w: c,
    h: u,
    vW: i[2],
    vH: i[3]
  };
}
function pa(e, t) {
  var r = S.str(e) ? pn(e)[0] : e, n = t || 100;
  return function(o) {
    return {
      property: o,
      el: r,
      svg: wn(r),
      totalLength: bn(r) * (n / 100)
    };
  };
}
function ga(e, t, r) {
  function n(l) {
    l === void 0 && (l = 0);
    var f = t + l >= 1 ? t + l : 0;
    return e.el.getPointAtLength(f);
  }
  var o = wn(e.el, e.svg), a = n(), c = n(-1), u = n(1), i = r ? 1 : o.w / o.vW, p = r ? 1 : o.h / o.vH;
  switch (e.property) {
    case "x":
      return (a.x - o.x) * i;
    case "y":
      return (a.y - o.y) * p;
    case "angle":
      return Math.atan2(u.y - c.y, u.x - c.x) * 180 / Math.PI;
  }
}
function Mr(e, t) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, n = vn(S.pth(e) ? e.totalLength : e, t) + "";
  return {
    original: n,
    numbers: n.match(r) ? n.match(r).map(Number) : [0],
    strings: S.str(e) || t ? n.split(r) : []
  };
}
function tr(e) {
  var t = e ? wt(S.arr(e) ? e.map(jr) : jr(e)) : [];
  return bt(t, function(r, n, o) {
    return o.indexOf(r) === n;
  });
}
function xn(e) {
  var t = tr(e);
  return t.map(function(r, n) {
    return { target: r, id: n, total: t.length, transforms: { list: mn(r) } };
  });
}
function ma(e, t) {
  var r = Zt(t);
  if (/^spring/.test(r.easing) && (r.duration = dn(r.easing)), S.arr(e)) {
    var n = e.length, o = n === 2 && !S.obj(e[0]);
    o ? e = { value: e } : S.fnc(t.duration) || (r.duration = t.duration / n);
  }
  var a = S.arr(e) ? e : [e];
  return a.map(function(c, u) {
    var i = S.obj(c) && !S.pth(c) ? c : { value: c };
    return S.und(i.delay) && (i.delay = u ? 0 : t.delay), S.und(i.endDelay) && (i.endDelay = u === a.length - 1 ? t.endDelay : 0), i;
  }).map(function(c) {
    return xt(c, r);
  });
}
function va(e) {
  for (var t = bt(wt(e.map(function(a) {
    return Object.keys(a);
  })), function(a) {
    return S.key(a);
  }).reduce(function(a, c) {
    return a.indexOf(c) < 0 && a.push(c), a;
  }, []), r = {}, n = function(a) {
    var c = t[a];
    r[c] = e.map(function(u) {
      var i = {};
      for (var p in u)
        S.key(p) ? p == c && (i.value = u[p]) : i[p] = u[p];
      return i;
    });
  }, o = 0; o < t.length; o++) n(o);
  return r;
}
function ya(e, t) {
  var r = [], n = t.keyframes;
  n && (t = xt(va(n), t));
  for (var o in t)
    S.key(o) && r.push({
      name: o,
      tweens: ma(t[o], e)
    });
  return r;
}
function ba(e, t) {
  var r = {};
  for (var n in e) {
    var o = Bt(e[n], t);
    S.arr(o) && (o = o.map(function(a) {
      return Bt(a, t);
    }), o.length === 1 && (o = o[0])), r[n] = o;
  }
  return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r;
}
function wa(e, t) {
  var r;
  return e.tweens.map(function(n) {
    var o = ba(n, t), a = o.value, c = S.arr(a) ? a[1] : a, u = be(c), i = Xt(t.target, e.name, u, t), p = r ? r.to.original : i, l = S.arr(a) ? a[0] : p, f = be(l) || be(i), g = u || f;
    return S.und(c) && (c = p), o.from = Mr(l, g), o.to = Mr(Qt(c, l), g), o.start = r ? r.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = qt(o.easing, o.duration), o.isPath = S.pth(a), o.isPathTargetInsideSVG = o.isPath && S.svg(t.target), o.isColor = S.col(o.from.original), o.isColor && (o.round = 1), r = o, o;
  });
}
var En = {
  css: function(e, t, r) {
    return e.style[t] = r;
  },
  attribute: function(e, t, r) {
    return e.setAttribute(t, r);
  },
  object: function(e, t, r) {
    return e[t] = r;
  },
  transform: function(e, t, r, n, o) {
    if (n.list.set(t, r), t === n.last || o) {
      var a = "";
      n.list.forEach(function(c, u) {
        a += u + "(" + c + ") ";
      }), e.style.transform = a;
    }
  }
};
function Sn(e, t) {
  var r = xn(e);
  r.forEach(function(n) {
    for (var o in t) {
      var a = Bt(t[o], n), c = n.target, u = be(a), i = Xt(c, o, u, n), p = u || be(i), l = Qt(vn(a, p), i), f = Kt(c, o);
      En[f](c, o, l, n.transforms, !0);
    }
  });
}
function xa(e, t) {
  var r = Kt(e.target, t.name);
  if (r) {
    var n = wa(t, e), o = n[n.length - 1];
    return {
      type: r,
      property: t.name,
      animatable: e,
      tweens: n,
      duration: o.end,
      delay: n[0].delay,
      endDelay: o.endDelay
    };
  }
}
function Ea(e, t) {
  return bt(wt(e.map(function(r) {
    return t.map(function(n) {
      return xa(r, n);
    });
  })), function(r) {
    return !S.und(r);
  });
}
function kn(e, t) {
  var r = e.length, n = function(a) {
    return a.timelineOffset ? a.timelineOffset : 0;
  }, o = {};
  return o.duration = r ? Math.max.apply(Math, e.map(function(a) {
    return n(a) + a.duration;
  })) : t.duration, o.delay = r ? Math.min.apply(Math, e.map(function(a) {
    return n(a) + a.delay;
  })) : t.delay, o.endDelay = r ? o.duration - Math.max.apply(Math, e.map(function(a) {
    return n(a) + a.duration - a.endDelay;
  })) : t.endDelay, o;
}
var Dr = 0;
function Sa(e) {
  var t = zt(ln, e), r = zt(Ut, e), n = ya(r, e), o = xn(e.targets), a = Ea(o, n), c = kn(a, r), u = Dr;
  return Dr++, xt(t, {
    id: u,
    children: [],
    animatables: o,
    animations: a,
    duration: c.duration,
    delay: c.delay,
    endDelay: c.endDelay
  });
}
var se = [], Cn = function() {
  var e;
  function t() {
    !e && (!$r() || !L.suspendWhenDocumentHidden) && se.length > 0 && (e = requestAnimationFrame(r));
  }
  function r(o) {
    for (var a = se.length, c = 0; c < a; ) {
      var u = se[c];
      u.paused ? (se.splice(c, 1), a--) : (u.tick(o), c++);
    }
    e = c > 0 ? requestAnimationFrame(r) : void 0;
  }
  function n() {
    L.suspendWhenDocumentHidden && ($r() ? e = cancelAnimationFrame(e) : (se.forEach(
      function(o) {
        return o._onDocumentVisibility();
      }
    ), Cn()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", n), t;
}();
function $r() {
  return !!document && document.hidden;
}
function L(e) {
  e === void 0 && (e = {});
  var t = 0, r = 0, n = 0, o, a = 0, c = null;
  function u(v) {
    var m = window.Promise && new Promise(function(R) {
      return c = R;
    });
    return v.finished = m, m;
  }
  var i = Sa(e);
  u(i);
  function p() {
    var v = i.direction;
    v !== "alternate" && (i.direction = v !== "normal" ? "normal" : "reverse"), i.reversed = !i.reversed, o.forEach(function(m) {
      return m.reversed = i.reversed;
    });
  }
  function l(v) {
    return i.reversed ? i.duration - v : v;
  }
  function f() {
    t = 0, r = l(i.currentTime) * (1 / L.speed);
  }
  function g(v, m) {
    m && m.seek(v - m.timelineOffset);
  }
  function b(v) {
    if (i.reversePlayback)
      for (var R = a; R--; )
        g(v, o[R]);
    else
      for (var m = 0; m < a; m++)
        g(v, o[m]);
  }
  function d(v) {
    for (var m = 0, R = i.animations, T = R.length; m < T; ) {
      var y = R[m], E = y.animatable, D = y.tweens, z = D.length - 1, A = D[z];
      z && (A = bt(D, function(ue) {
        return v < ue.end;
      })[0] || A);
      for (var W = de(v - A.start - A.delay, 0, A.duration) / A.duration, X = isNaN(W) ? 1 : A.easing(W), B = A.to.strings, ee = A.round, te = [], pe = A.to.numbers.length, U = void 0, q = 0; q < pe; q++) {
        var N = void 0, Z = A.to.numbers[q], F = A.from.numbers[q] || 0;
        A.isPath ? N = ga(A.value, X * Z, A.isPathTargetInsideSVG) : N = F + X * (Z - F), ee && (A.isColor && q > 2 || (N = Math.round(N * ee) / ee)), te.push(N);
      }
      var V = B.length;
      if (!V)
        U = te[0];
      else {
        U = B[0];
        for (var J = 0; J < V; J++) {
          B[J];
          var re = B[J + 1], ae = te[J];
          isNaN(ae) || (re ? U += ae + re : U += ae + " ");
        }
      }
      En[y.type](E.target, y.property, U, E.transforms), y.currentValue = U, m++;
    }
  }
  function h(v) {
    i[v] && !i.passThrough && i[v](i);
  }
  function C() {
    i.remaining && i.remaining !== !0 && i.remaining--;
  }
  function k(v) {
    var m = i.duration, R = i.delay, T = m - i.endDelay, y = l(v);
    i.progress = de(y / m * 100, 0, 100), i.reversePlayback = y < i.currentTime, o && b(y), !i.began && i.currentTime > 0 && (i.began = !0, h("begin")), !i.loopBegan && i.currentTime > 0 && (i.loopBegan = !0, h("loopBegin")), y <= R && i.currentTime !== 0 && d(0), (y >= T && i.currentTime !== m || !m) && d(m), y > R && y < T ? (i.changeBegan || (i.changeBegan = !0, i.changeCompleted = !1, h("changeBegin")), h("change"), d(y)) : i.changeBegan && (i.changeCompleted = !0, i.changeBegan = !1, h("changeComplete")), i.currentTime = de(y, 0, m), i.began && h("update"), v >= m && (r = 0, C(), i.remaining ? (t = n, h("loopComplete"), i.loopBegan = !1, i.direction === "alternate" && p()) : (i.paused = !0, i.completed || (i.completed = !0, h("loopComplete"), h("complete"), !i.passThrough && "Promise" in window && (c(), u(i)))));
  }
  return i.reset = function() {
    var v = i.direction;
    i.passThrough = !1, i.currentTime = 0, i.progress = 0, i.paused = !0, i.began = !1, i.loopBegan = !1, i.changeBegan = !1, i.completed = !1, i.changeCompleted = !1, i.reversePlayback = !1, i.reversed = v === "reverse", i.remaining = i.loop, o = i.children, a = o.length;
    for (var m = a; m--; )
      i.children[m].reset();
    (i.reversed && i.loop !== !0 || v === "alternate" && i.loop === 1) && i.remaining++, d(i.reversed ? i.duration : 0);
  }, i._onDocumentVisibility = f, i.set = function(v, m) {
    return Sn(v, m), i;
  }, i.tick = function(v) {
    n = v, t || (t = n), k((n + (r - t)) * L.speed);
  }, i.seek = function(v) {
    k(l(v));
  }, i.pause = function() {
    i.paused = !0, f();
  }, i.play = function() {
    i.paused && (i.completed && i.reset(), i.paused = !1, se.push(i), f(), Cn());
  }, i.reverse = function() {
    p(), i.completed = !i.reversed, f();
  }, i.restart = function() {
    i.reset(), i.play();
  }, i.remove = function(v) {
    var m = tr(v);
    Rn(m, i);
  }, i.reset(), i.autoplay && i.play(), i;
}
function Lr(e, t) {
  for (var r = t.length; r--; )
    Gt(e, t[r].animatable.target) && t.splice(r, 1);
}
function Rn(e, t) {
  var r = t.animations, n = t.children;
  Lr(e, r);
  for (var o = n.length; o--; ) {
    var a = n[o], c = a.animations;
    Lr(e, c), !c.length && !a.children.length && n.splice(o, 1);
  }
  !r.length && !n.length && t.pause();
}
function ka(e) {
  for (var t = tr(e), r = se.length; r--; ) {
    var n = se[r];
    Rn(t, n);
  }
}
function Ca(e, t) {
  t === void 0 && (t = {});
  var r = t.direction || "normal", n = t.easing ? qt(t.easing) : null, o = t.grid, a = t.axis, c = t.from || 0, u = c === "first", i = c === "center", p = c === "last", l = S.arr(e), f = parseFloat(l ? e[0] : e), g = l ? parseFloat(e[1]) : 0, b = be(l ? e[1] : e) || 0, d = t.start || 0 + (l ? f : 0), h = [], C = 0;
  return function(k, v, m) {
    if (u && (c = 0), i && (c = (m - 1) / 2), p && (c = m - 1), !h.length) {
      for (var R = 0; R < m; R++) {
        if (!o)
          h.push(Math.abs(c - R));
        else {
          var T = i ? (o[0] - 1) / 2 : c % o[0], y = i ? (o[1] - 1) / 2 : Math.floor(c / o[0]), E = R % o[0], D = Math.floor(R / o[0]), z = T - E, A = y - D, W = Math.sqrt(z * z + A * A);
          a === "x" && (W = -z), a === "y" && (W = -A), h.push(W);
        }
        C = Math.max.apply(Math, h);
      }
      n && (h = h.map(function(B) {
        return n(B / C) * C;
      })), r === "reverse" && (h = h.map(function(B) {
        return a ? B < 0 ? B * -1 : -B : Math.abs(C - B);
      }));
    }
    var X = l ? (g - f) / C : f;
    return d + X * (Math.round(h[v] * 100) / 100) + b;
  };
}
function Ra(e) {
  e === void 0 && (e = {});
  var t = L(e);
  return t.duration = 0, t.add = function(r, n) {
    var o = se.indexOf(t), a = t.children;
    o > -1 && se.splice(o, 1);
    function c(g) {
      g.passThrough = !0;
    }
    for (var u = 0; u < a.length; u++)
      c(a[u]);
    var i = xt(r, zt(Ut, e));
    i.targets = i.targets || e.targets;
    var p = t.duration;
    i.autoplay = !1, i.direction = t.direction, i.timelineOffset = S.und(n) ? p : Qt(n, p), c(t), t.seek(i.timelineOffset);
    var l = L(i);
    c(l), a.push(l);
    var f = kn(a, e);
    return t.delay = f.delay, t.endDelay = f.endDelay, t.duration = f.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t;
  }, t;
}
L.version = "3.2.1";
L.speed = 1;
L.suspendWhenDocumentHidden = !0;
L.running = se;
L.remove = ka;
L.get = Xt;
L.set = Sn;
L.convertPx = Jt;
L.path = pa;
L.setDashoffset = da;
L.stagger = Ca;
L.timeline = Ra;
L.easing = qt;
L.penner = hn;
L.random = function(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
};
const Ta = Pe.div`
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
`, _a = Pe.canvas`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: move;
`, Oa = ({
  src: e,
  state: t
}) => {
  const r = ie(null), n = ie(null), o = ie(null), a = ie({
    width: 800,
    height: 450
  }), c = ie({
    width: 800,
    height: 450
  }), u = ie({
    width: 800,
    height: 450
  }), i = ie(16 / 9), p = ie(null), l = ie(null), f = ie({
    x: 0,
    y: 0,
    scale: 1
  });
  He(() => {
    const d = new Image();
    d.onload = () => {
      o.current = d;
    }, d.src = e;
  }, [e]), He(() => {
    const d = () => {
      n.current && (a.current = {
        width: n.current.offsetWidth,
        height: n.current.offsetHeight
      }, r.current && (r.current.width = a.current.width, r.current.height = a.current.height, g()));
    };
    return d(), window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d);
    };
  }, []);
  const g = cr(() => {
    if (!o.current) return;
    const d = r.current;
    if (!d) return;
    const h = d.getContext("2d");
    if (!h) return;
    const {
      width: C,
      height: k
    } = u.current;
    if (!f.current) return;
    const v = f.current.scale, m = C * v, R = k * v, T = f.current.x - m / 2, y = f.current.y - R / 2;
    h.clearRect(0, 0, d.width, d.height), h.drawImage(o.current, T, y, m, R);
  }, []);
  He(() => {
    Aa(e).then(({
      width: d,
      height: h
    }) => {
      c.current = {
        width: d,
        height: h
      };
    }).then(() => {
      i.current = c.current.width / c.current.height, u.current = Pa(a.current, c.current), r.current && (f.current = {
        x: r.current.width / 2,
        y: r.current.height / 2,
        scale: 1
      }, g());
    });
  }, [e, g]);
  const b = cr((d) => {
    var h;
    ((h = p.current) == null ? void 0 : h.progress) !== 100 && (g(), l.current = requestAnimationFrame(() => {
      b(d);
    }));
  }, [g]);
  return He(() => {
    var d, h;
    l.current && cancelAnimationFrame(l.current), (d = p.current) != null && d.complete || (h = p.current) == null || h.pause(), p.current = L({
      targets: f.current,
      scale: t.scale,
      duration: 300,
      easing: "easeOutExpo",
      autoplay: !0,
      update: (C) => {
        b(C);
      }
    });
  }, [t, b]), He(() => {
    let d = 0, h = 0, C = 0, k = 0;
    const v = (T) => {
      if (!n.current) return;
      const {
        clientX: y,
        clientY: E
      } = T, {
        left: D,
        top: z
      } = n.current.getBoundingClientRect(), A = y - D, W = E - z;
      f.current.x = C + A - d, f.current.y = k + W - h, g();
    }, m = () => {
      var V;
      document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m);
      const {
        width: T,
        height: y
      } = u.current, {
        x: E,
        y: D,
        scale: z
      } = f.current, A = a.current.width, W = a.current.height, X = T * z, B = y * z, ee = E - X / 2, te = E + X / 2, pe = D - B / 2, U = D + B / 2;
      let q = 0, N = 0;
      if (ee < 0 && te < A && (q = A - te), te > A && ee > 0 && (q = -ee), pe < 0 && U < W && (N = W - U), U > W && pe > 0 && (N = -pe), !q && !N)
        return;
      let Z = E + q, F = D + N;
      r.current && (z <= 1 && (Math.abs(q) > 0 || Math.abs(N) > 0) && (Z = r.current.width / 2, F = r.current.height / 2), Math.abs(q) > 0 && X < A && (Z = r.current.width / 2), Math.abs(N) > 0 && B < W && (F = r.current.height / 2)), l.current && cancelAnimationFrame(l.current), ((V = p.current) == null ? void 0 : V.progress) !== 100 && (p.current = null), p.current = L({
        targets: f.current,
        x: Z,
        y: F,
        duration: 500,
        easing: "easeOutExpo",
        autoplay: !0,
        update: (J) => {
          b(J);
        }
      });
    }, R = (T) => {
      if (!n.current) return;
      const {
        left: y,
        top: E
      } = n.current.getBoundingClientRect();
      d = T.clientX - y, h = T.clientY - E, C = f.current.x, k = f.current.y, document.addEventListener("mousemove", v), document.addEventListener("mouseup", m);
    };
    if (n.current)
      return n.current.addEventListener("mousedown", R), n.current.addEventListener("mouseup", m), () => {
        var T, y;
        (T = n.current) == null || T.removeEventListener("mousedown", R), (y = n.current) == null || y.removeEventListener("mouseup", m);
      };
  }, [b, g]), /* @__PURE__ */ M.jsx(Ta, { ref: n, "data-rivx-view": !0, children: /* @__PURE__ */ M.jsx(_a, { ref: r }) });
}, Aa = (e) => {
  const t = new Image();
  return new Promise((r, n) => {
    t.onload = () => {
      r({
        width: t.width,
        height: t.height
      });
    }, t.onerror = n, t.src = e;
  });
}, Pa = (e, t) => {
  const r = e.width / e.height, n = t.width / t.height;
  return r > n ? {
    width: e.height * n,
    height: e.height
  } : {
    width: e.width,
    height: e.width / n
  };
}, Na = {
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
}, Ma = (e) => {
  const t = Fe.c(26), {
    src: r,
    configuration: n
  } = e;
  let o;
  t[0] !== n ? (o = Ia(Na, n), t[0] = n, t[1] = o) : o = t[1];
  const a = o, [c, u] = An(1);
  let i;
  t[2] !== a.viewer.maxScale || t[3] !== a.viewer.scaleStep || t[4] !== c ? (i = () => {
    c >= a.viewer.maxScale || u((v) => v + a.viewer.scaleStep);
  }, t[2] = a.viewer.maxScale, t[3] = a.viewer.scaleStep, t[4] = c, t[5] = i) : i = t[5];
  const p = i;
  let l;
  t[6] !== a.viewer.minScale || t[7] !== a.viewer.scaleStep || t[8] !== c ? (l = () => {
    c <= a.viewer.minScale || u((v) => v - a.viewer.scaleStep);
  }, t[6] = a.viewer.minScale, t[7] = a.viewer.scaleStep, t[8] = c, t[9] = l) : l = t[9];
  const f = l;
  let g;
  t[10] !== c ? (g = {
    scale: c
  }, t[10] = c, t[11] = g) : g = t[11];
  const b = g;
  let d;
  t[12] !== a.options.hasNoBackdrop || t[13] !== r ? (d = !a.options.hasNoBackdrop && /* @__PURE__ */ M.jsx(Uo, { src: r }), t[12] = a.options.hasNoBackdrop, t[13] = r, t[14] = d) : d = t[14];
  let h;
  t[15] !== a.controllers || t[16] !== p || t[17] !== f ? (h = /* @__PURE__ */ M.jsx(Ko, { onZoomIn: p, onZoomOut: f, configuration: a.controllers }), t[15] = a.controllers, t[16] = p, t[17] = f, t[18] = h) : h = t[18];
  let C;
  t[19] !== r || t[20] !== b ? (C = /* @__PURE__ */ M.jsx(Oa, { src: r, state: b }), t[19] = r, t[20] = b, t[21] = C) : C = t[21];
  let k;
  return t[22] !== d || t[23] !== h || t[24] !== C ? (k = /* @__PURE__ */ M.jsxs(Xo, { children: [
    d,
    h,
    C
  ] }), t[22] = d, t[23] = h, t[24] = C, t[25] = k) : k = t[25], k;
}, Ia = (e, t) => ({
  viewer: {
    ...e.viewer,
    ...t == null ? void 0 : t.viewer
  },
  controllers: {
    ...e.controllers,
    ...t == null ? void 0 : t.controllers
  },
  options: {
    ...e.options,
    ...t == null ? void 0 : t.options
  }
});
export {
  Ma as ImageViewer
};
