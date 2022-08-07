import require$$0, { createContext, PureComponent, createRef, useState, useCallback } from "react";
function _mergeNamespaces(i, a) {
  for (var t = 0; t < a.length; t++) {
    const e = a[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const n in e)
        if (n !== "default" && !(n in i)) {
          const o = Object.getOwnPropertyDescriptor(e, n);
          o && Object.defineProperty(i, n, o.get ? o : {
            enumerable: !0,
            get: () => e[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function getAugmentedNamespace(i) {
  var a = i.default;
  if (typeof a == "function") {
    var t = function() {
      return a.apply(this, arguments);
    };
    t.prototype = a.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(i).forEach(function(e) {
    var n = Object.getOwnPropertyDescriptor(i, e);
    Object.defineProperty(t, e, n.get ? n : {
      enumerable: !0,
      get: function() {
        return i[e];
      }
    });
  }), t;
}
function commonjsRequire(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf$2 = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module, exports) {
  (function(a, t) {
    module.exports = t();
  })(commonjsGlobal, function() {
    return (() => {
      var __webpack_modules__ = [
        ,
        (i, a, t) => {
          function e(I) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(l) {
              return typeof l;
            } : e = function(l) {
              return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
            }, e(I);
          }
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.StatTimer = a.RenderingCancelledException = a.PixelsPerInch = a.PageViewport = a.PDFDateString = a.LinkTarget = a.DOMStandardFontDataFactory = a.DOMSVGFactory = a.DOMCanvasFactory = a.DOMCMapReaderFactory = void 0, a.addLinkAttributes = X, a.deprecated = he, a.getFilenameFromUrl = A, a.getPdfFilenameFromUrl = C, a.getXfaPageViewport = j, a.isDataScheme = S, a.isPdfFile = h, a.isValidFetchUrl = Z, a.loadScript = z;
          var n = u(t(2)), o = t(4), d = t(135);
          function u(I) {
            return I && I.__esModule ? I : { default: I };
          }
          function g(I, f) {
            var l = typeof Symbol < "u" && I[Symbol.iterator] || I["@@iterator"];
            if (!l) {
              if (Array.isArray(I) || (l = P(I)) || f && I && typeof I.length == "number") {
                l && (I = l);
                var _ = 0, N = function() {
                };
                return { s: N, n: function() {
                  return _ >= I.length ? { done: !0 } : { done: !1, value: I[_++] };
                }, e: function(be) {
                  throw be;
                }, f: N };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var G = !0, ee = !1, ce;
            return { s: function() {
              l = l.call(I);
            }, n: function() {
              var be = l.next();
              return G = be.done, be;
            }, e: function(be) {
              ee = !0, ce = be;
            }, f: function() {
              try {
                !G && l.return != null && l.return();
              } finally {
                if (ee)
                  throw ce;
              }
            } };
          }
          function P(I, f) {
            if (!!I) {
              if (typeof I == "string")
                return F(I, f);
              var l = Object.prototype.toString.call(I).slice(8, -1);
              if (l === "Object" && I.constructor && (l = I.constructor.name), l === "Map" || l === "Set")
                return Array.from(I);
              if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
                return F(I, f);
            }
          }
          function F(I, f) {
            (f == null || f > I.length) && (f = I.length);
            for (var l = 0, _ = new Array(f); l < f; l++)
              _[l] = I[l];
            return _;
          }
          function D(I, f, l, _, N, G, ee) {
            try {
              var ce = I[G](ee), ye = ce.value;
            } catch (be) {
              l(be);
              return;
            }
            ce.done ? f(ye) : Promise.resolve(ye).then(_, N);
          }
          function B(I) {
            return function() {
              var f = this, l = arguments;
              return new Promise(function(_, N) {
                var G = I.apply(f, l);
                function ee(ye) {
                  D(G, _, N, ee, ce, "next", ye);
                }
                function ce(ye) {
                  D(G, _, N, ee, ce, "throw", ye);
                }
                ee(void 0);
              });
            };
          }
          function x(I, f) {
            if (!(I instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function w(I, f) {
            for (var l = 0; l < f.length; l++) {
              var _ = f[l];
              _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(I, _.key, _);
            }
          }
          function O(I, f, l) {
            return f && w(I.prototype, f), l && w(I, l), I;
          }
          function k(I, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function");
            I.prototype = Object.create(f && f.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), f && W(I, f);
          }
          function W(I, f) {
            return W = Object.setPrototypeOf || function(_, N) {
              return _.__proto__ = N, _;
            }, W(I, f);
          }
          function R(I) {
            var f = c();
            return function() {
              var _ = p(I), N;
              if (f) {
                var G = p(this).constructor;
                N = Reflect.construct(_, arguments, G);
              } else
                N = _.apply(this, arguments);
              return U(this, N);
            };
          }
          function U(I, f) {
            if (f && (e(f) === "object" || typeof f == "function"))
              return f;
            if (f !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return v(I);
          }
          function v(I) {
            if (I === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return I;
          }
          function c() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }
          function p(I) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
              return l.__proto__ || Object.getPrototypeOf(l);
            }, p(I);
          }
          var b = "noopener noreferrer nofollow", m = "http://www.w3.org/2000/svg", y = {
            CSS: 96,
            PDF: 72,
            get PDF_TO_CSS_UNITS() {
              return (0, o.shadow)(this, "PDF_TO_CSS_UNITS", this.CSS / this.PDF);
            }
          };
          a.PixelsPerInch = y;
          var T = /* @__PURE__ */ function(I) {
            k(l, I);
            var f = R(l);
            function l() {
              var _, N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, G = N.ownerDocument, ee = G === void 0 ? globalThis.document : G;
              return x(this, l), _ = f.call(this), _._document = ee, _;
            }
            return O(l, [{
              key: "_createCanvas",
              value: function(N, G) {
                var ee = this._document.createElement("canvas");
                return ee.width = N, ee.height = G, ee;
              }
            }]), l;
          }(d.BaseCanvasFactory);
          a.DOMCanvasFactory = T;
          function M(I) {
            return H.apply(this, arguments);
          }
          function H() {
            return H = B(/* @__PURE__ */ n.default.mark(function I(f) {
              var l, _, N = arguments;
              return n.default.wrap(function(ee) {
                for (; ; )
                  switch (ee.prev = ee.next) {
                    case 0:
                      if (l = N.length > 1 && N[1] !== void 0 ? N[1] : !1, !Z(f, document.baseURI)) {
                        ee.next = 21;
                        break;
                      }
                      return ee.next = 4, fetch(f);
                    case 4:
                      if (_ = ee.sent, _.ok) {
                        ee.next = 7;
                        break;
                      }
                      throw new Error(_.statusText);
                    case 7:
                      if (!l) {
                        ee.next = 15;
                        break;
                      }
                      return ee.t1 = Uint8Array, ee.next = 11, _.arrayBuffer();
                    case 11:
                      ee.t2 = ee.sent, ee.t0 = new ee.t1(ee.t2), ee.next = 20;
                      break;
                    case 15:
                      return ee.t3 = o.stringToBytes, ee.next = 18, _.text();
                    case 18:
                      ee.t4 = ee.sent, ee.t0 = (0, ee.t3)(ee.t4);
                    case 20:
                      return ee.abrupt("return", ee.t0);
                    case 21:
                      return ee.abrupt("return", new Promise(function(ce, ye) {
                        var be = new XMLHttpRequest();
                        be.open("GET", f, !0), l && (be.responseType = "arraybuffer"), be.onreadystatechange = function() {
                          if (be.readyState === XMLHttpRequest.DONE) {
                            if (be.status === 200 || be.status === 0) {
                              var me;
                              if (l && be.response ? me = new Uint8Array(be.response) : !l && be.responseText && (me = (0, o.stringToBytes)(be.responseText)), me) {
                                ce(me);
                                return;
                              }
                            }
                            ye(new Error(be.statusText));
                          }
                        }, be.send(null);
                      }));
                    case 22:
                    case "end":
                      return ee.stop();
                  }
              }, I);
            })), H.apply(this, arguments);
          }
          var L = /* @__PURE__ */ function(I) {
            k(l, I);
            var f = R(l);
            function l() {
              return x(this, l), f.apply(this, arguments);
            }
            return O(l, [{
              key: "_fetchData",
              value: function(N, G) {
                return M(N, this.isCompressed).then(function(ee) {
                  return {
                    cMapData: ee,
                    compressionType: G
                  };
                });
              }
            }]), l;
          }(d.BaseCMapReaderFactory);
          a.DOMCMapReaderFactory = L;
          var Y = /* @__PURE__ */ function(I) {
            k(l, I);
            var f = R(l);
            function l() {
              return x(this, l), f.apply(this, arguments);
            }
            return O(l, [{
              key: "_fetchData",
              value: function(N) {
                return M(N, !0);
              }
            }]), l;
          }(d.BaseStandardFontDataFactory);
          a.DOMStandardFontDataFactory = Y;
          var te = /* @__PURE__ */ function(I) {
            k(l, I);
            var f = R(l);
            function l() {
              return x(this, l), f.apply(this, arguments);
            }
            return O(l, [{
              key: "_createSVG",
              value: function(N) {
                return document.createElementNS(m, N);
              }
            }]), l;
          }(d.BaseSVGFactory);
          a.DOMSVGFactory = te;
          var K = /* @__PURE__ */ function() {
            function I(f) {
              var l = f.viewBox, _ = f.scale, N = f.rotation, G = f.offsetX, ee = G === void 0 ? 0 : G, ce = f.offsetY, ye = ce === void 0 ? 0 : ce, be = f.dontFlip, me = be === void 0 ? !1 : be;
              x(this, I), this.viewBox = l, this.scale = _, this.rotation = N, this.offsetX = ee, this.offsetY = ye;
              var Pe = (l[2] + l[0]) / 2, Ce = (l[3] + l[1]) / 2, xe, Fe, Me, Ue;
              switch (N %= 360, N < 0 && (N += 360), N) {
                case 180:
                  xe = -1, Fe = 0, Me = 0, Ue = 1;
                  break;
                case 90:
                  xe = 0, Fe = 1, Me = 1, Ue = 0;
                  break;
                case 270:
                  xe = 0, Fe = -1, Me = -1, Ue = 0;
                  break;
                case 0:
                  xe = 1, Fe = 0, Me = 0, Ue = -1;
                  break;
                default:
                  throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
              }
              me && (Me = -Me, Ue = -Ue);
              var Ve, de, pe, V;
              xe === 0 ? (Ve = Math.abs(Ce - l[1]) * _ + ee, de = Math.abs(Pe - l[0]) * _ + ye, pe = Math.abs(l[3] - l[1]) * _, V = Math.abs(l[2] - l[0]) * _) : (Ve = Math.abs(Pe - l[0]) * _ + ee, de = Math.abs(Ce - l[1]) * _ + ye, pe = Math.abs(l[2] - l[0]) * _, V = Math.abs(l[3] - l[1]) * _), this.transform = [xe * _, Fe * _, Me * _, Ue * _, Ve - xe * _ * Pe - Me * _ * Ce, de - Fe * _ * Pe - Ue * _ * Ce], this.width = pe, this.height = V;
            }
            return O(I, [{
              key: "clone",
              value: function() {
                var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ = l.scale, N = _ === void 0 ? this.scale : _, G = l.rotation, ee = G === void 0 ? this.rotation : G, ce = l.offsetX, ye = ce === void 0 ? this.offsetX : ce, be = l.offsetY, me = be === void 0 ? this.offsetY : be, Pe = l.dontFlip, Ce = Pe === void 0 ? !1 : Pe;
                return new I({
                  viewBox: this.viewBox.slice(),
                  scale: N,
                  rotation: ee,
                  offsetX: ye,
                  offsetY: me,
                  dontFlip: Ce
                });
              }
            }, {
              key: "convertToViewportPoint",
              value: function(l, _) {
                return o.Util.applyTransform([l, _], this.transform);
              }
            }, {
              key: "convertToViewportRectangle",
              value: function(l) {
                var _ = o.Util.applyTransform([l[0], l[1]], this.transform), N = o.Util.applyTransform([l[2], l[3]], this.transform);
                return [_[0], _[1], N[0], N[1]];
              }
            }, {
              key: "convertToPdfPoint",
              value: function(l, _) {
                return o.Util.applyInverseTransform([l, _], this.transform);
              }
            }]), I;
          }();
          a.PageViewport = K;
          var oe = /* @__PURE__ */ function(I) {
            k(l, I);
            var f = R(l);
            function l(_, N) {
              var G;
              return x(this, l), G = f.call(this, _, "RenderingCancelledException"), G.type = N, G;
            }
            return l;
          }(o.BaseException);
          a.RenderingCancelledException = oe;
          var q = {
            NONE: 0,
            SELF: 1,
            BLANK: 2,
            PARENT: 3,
            TOP: 4
          };
          a.LinkTarget = q;
          function X(I) {
            var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = f.url, _ = f.target, N = f.rel, G = f.enabled, ee = G === void 0 ? !0 : G;
            (0, o.assert)(l && typeof l == "string", 'addLinkAttributes: A valid "url" parameter must provided.');
            var ce = (0, o.removeNullCharacters)(l);
            ee ? I.href = I.title = ce : (I.href = "", I.title = "Disabled: ".concat(ce), I.onclick = function() {
              return !1;
            });
            var ye = "";
            switch (_) {
              case q.NONE:
                break;
              case q.SELF:
                ye = "_self";
                break;
              case q.BLANK:
                ye = "_blank";
                break;
              case q.PARENT:
                ye = "_parent";
                break;
              case q.TOP:
                ye = "_top";
                break;
            }
            I.target = ye, I.rel = typeof N == "string" ? N : b;
          }
          function S(I) {
            for (var f = I.length, l = 0; l < f && I[l].trim() === ""; )
              l++;
            return I.substring(l, l + 5).toLowerCase() === "data:";
          }
          function h(I) {
            return typeof I == "string" && /\.pdf$/i.test(I);
          }
          function A(I) {
            var f = I.indexOf("#"), l = I.indexOf("?"), _ = Math.min(f > 0 ? f : I.length, l > 0 ? l : I.length);
            return I.substring(I.lastIndexOf("/", _) + 1, _);
          }
          function C(I) {
            var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "document.pdf";
            if (typeof I != "string")
              return f;
            if (S(I))
              return (0, o.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), f;
            var l = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, _ = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, N = l.exec(I), G = _.exec(N[1]) || _.exec(N[2]) || _.exec(N[3]);
            if (G && (G = G[0], G.includes("%")))
              try {
                G = _.exec(decodeURIComponent(G))[0];
              } catch {
              }
            return G || f;
          }
          var $ = /* @__PURE__ */ function() {
            function I() {
              x(this, I), this.started = /* @__PURE__ */ Object.create(null), this.times = [];
            }
            return O(I, [{
              key: "time",
              value: function(l) {
                l in this.started && (0, o.warn)("Timer is already running for ".concat(l)), this.started[l] = Date.now();
              }
            }, {
              key: "timeEnd",
              value: function(l) {
                l in this.started || (0, o.warn)("Timer has not been started for ".concat(l)), this.times.push({
                  name: l,
                  start: this.started[l],
                  end: Date.now()
                }), delete this.started[l];
              }
            }, {
              key: "toString",
              value: function() {
                var l = [], _ = 0, N = g(this.times), G;
                try {
                  for (N.s(); !(G = N.n()).done; ) {
                    var ee = G.value, ce = ee.name;
                    ce.length > _ && (_ = ce.length);
                  }
                } catch (Ce) {
                  N.e(Ce);
                } finally {
                  N.f();
                }
                var ye = g(this.times), be;
                try {
                  for (ye.s(); !(be = ye.n()).done; ) {
                    var me = be.value, Pe = me.end - me.start;
                    l.push("".concat(me.name.padEnd(_), " ").concat(Pe, `ms
`));
                  }
                } catch (Ce) {
                  ye.e(Ce);
                } finally {
                  ye.f();
                }
                return l.join("");
              }
            }]), I;
          }();
          a.StatTimer = $;
          function Z(I, f) {
            try {
              var l = f ? new URL(I, f) : new URL(I), _ = l.protocol;
              return _ === "http:" || _ === "https:";
            } catch {
              return !1;
            }
          }
          function z(I) {
            var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            return new Promise(function(l, _) {
              var N = document.createElement("script");
              N.src = I, N.onload = function(G) {
                f && N.remove(), l(G);
              }, N.onerror = function() {
                _(new Error("Cannot load script at: ".concat(N.src)));
              }, (document.head || document.documentElement).appendChild(N);
            });
          }
          function he(I) {
            console.log("Deprecated API usage: " + I);
          }
          var _e, Te = /* @__PURE__ */ function() {
            function I() {
              x(this, I);
            }
            return O(I, null, [{
              key: "toDateObject",
              value: function(l) {
                if (!l || !(0, o.isString)(l))
                  return null;
                _e || (_e = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
                var _ = _e.exec(l);
                if (!_)
                  return null;
                var N = parseInt(_[1], 10), G = parseInt(_[2], 10);
                G = G >= 1 && G <= 12 ? G - 1 : 0;
                var ee = parseInt(_[3], 10);
                ee = ee >= 1 && ee <= 31 ? ee : 1;
                var ce = parseInt(_[4], 10);
                ce = ce >= 0 && ce <= 23 ? ce : 0;
                var ye = parseInt(_[5], 10);
                ye = ye >= 0 && ye <= 59 ? ye : 0;
                var be = parseInt(_[6], 10);
                be = be >= 0 && be <= 59 ? be : 0;
                var me = _[7] || "Z", Pe = parseInt(_[8], 10);
                Pe = Pe >= 0 && Pe <= 23 ? Pe : 0;
                var Ce = parseInt(_[9], 10) || 0;
                return Ce = Ce >= 0 && Ce <= 59 ? Ce : 0, me === "-" ? (ce += Pe, ye += Ce) : me === "+" && (ce -= Pe, ye -= Ce), new Date(Date.UTC(N, G, ee, ce, ye, be));
              }
            }]), I;
          }();
          a.PDFDateString = Te;
          function j(I, f) {
            var l = f.scale, _ = l === void 0 ? 1 : l, N = f.rotation, G = N === void 0 ? 0 : N, ee = I.attributes.style, ce = ee.width, ye = ee.height, be = [0, 0, parseInt(ce), parseInt(ye)];
            return new K({
              viewBox: be,
              scale: _,
              rotation: G
            });
          }
        },
        (i, a, t) => {
          i.exports = t(3);
        },
        (i, a, t) => {
          i = t.nmd(i);
          function e(o) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(u) {
              return typeof u;
            } : e = function(u) {
              return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
            }, e(o);
          }
          var n = function(o) {
            var d = Object.prototype, u = d.hasOwnProperty, g, P = typeof Symbol == "function" ? Symbol : {}, F = P.iterator || "@@iterator", D = P.asyncIterator || "@@asyncIterator", B = P.toStringTag || "@@toStringTag";
            function x(h, A, C) {
              return Object.defineProperty(h, A, {
                value: C,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), h[A];
            }
            try {
              x({}, "");
            } catch {
              x = function(C, $, Z) {
                return C[$] = Z;
              };
            }
            function w(h, A, C, $) {
              var Z = A && A.prototype instanceof c ? A : c, z = Object.create(Z.prototype), he = new q($ || []);
              return z._invoke = Y(h, C, he), z;
            }
            o.wrap = w;
            function O(h, A, C) {
              try {
                return {
                  type: "normal",
                  arg: h.call(A, C)
                };
              } catch ($) {
                return {
                  type: "throw",
                  arg: $
                };
              }
            }
            var k = "suspendedStart", W = "suspendedYield", R = "executing", U = "completed", v = {};
            function c() {
            }
            function p() {
            }
            function b() {
            }
            var m = {};
            x(m, F, function() {
              return this;
            });
            var y = Object.getPrototypeOf, T = y && y(y(X([])));
            T && T !== d && u.call(T, F) && (m = T);
            var M = b.prototype = c.prototype = Object.create(m);
            p.prototype = b, x(M, "constructor", b), x(b, "constructor", p), p.displayName = x(b, B, "GeneratorFunction");
            function H(h) {
              ["next", "throw", "return"].forEach(function(A) {
                x(h, A, function(C) {
                  return this._invoke(A, C);
                });
              });
            }
            o.isGeneratorFunction = function(h) {
              var A = typeof h == "function" && h.constructor;
              return A ? A === p || (A.displayName || A.name) === "GeneratorFunction" : !1;
            }, o.mark = function(h) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(h, b) : (h.__proto__ = b, x(h, B, "GeneratorFunction")), h.prototype = Object.create(M), h;
            }, o.awrap = function(h) {
              return {
                __await: h
              };
            };
            function L(h, A) {
              function C(z, he, _e, Te) {
                var j = O(h[z], h, he);
                if (j.type === "throw")
                  Te(j.arg);
                else {
                  var I = j.arg, f = I.value;
                  return f && e(f) === "object" && u.call(f, "__await") ? A.resolve(f.__await).then(function(l) {
                    C("next", l, _e, Te);
                  }, function(l) {
                    C("throw", l, _e, Te);
                  }) : A.resolve(f).then(function(l) {
                    I.value = l, _e(I);
                  }, function(l) {
                    return C("throw", l, _e, Te);
                  });
                }
              }
              var $;
              function Z(z, he) {
                function _e() {
                  return new A(function(Te, j) {
                    C(z, he, Te, j);
                  });
                }
                return $ = $ ? $.then(_e, _e) : _e();
              }
              this._invoke = Z;
            }
            H(L.prototype), x(L.prototype, D, function() {
              return this;
            }), o.AsyncIterator = L, o.async = function(h, A, C, $, Z) {
              Z === void 0 && (Z = Promise);
              var z = new L(w(h, A, C, $), Z);
              return o.isGeneratorFunction(A) ? z : z.next().then(function(he) {
                return he.done ? he.value : z.next();
              });
            };
            function Y(h, A, C) {
              var $ = k;
              return function(z, he) {
                if ($ === R)
                  throw new Error("Generator is already running");
                if ($ === U) {
                  if (z === "throw")
                    throw he;
                  return S();
                }
                for (C.method = z, C.arg = he; ; ) {
                  var _e = C.delegate;
                  if (_e) {
                    var Te = te(_e, C);
                    if (Te) {
                      if (Te === v)
                        continue;
                      return Te;
                    }
                  }
                  if (C.method === "next")
                    C.sent = C._sent = C.arg;
                  else if (C.method === "throw") {
                    if ($ === k)
                      throw $ = U, C.arg;
                    C.dispatchException(C.arg);
                  } else
                    C.method === "return" && C.abrupt("return", C.arg);
                  $ = R;
                  var j = O(h, A, C);
                  if (j.type === "normal") {
                    if ($ = C.done ? U : W, j.arg === v)
                      continue;
                    return {
                      value: j.arg,
                      done: C.done
                    };
                  } else
                    j.type === "throw" && ($ = U, C.method = "throw", C.arg = j.arg);
                }
              };
            }
            function te(h, A) {
              var C = h.iterator[A.method];
              if (C === g) {
                if (A.delegate = null, A.method === "throw") {
                  if (h.iterator.return && (A.method = "return", A.arg = g, te(h, A), A.method === "throw"))
                    return v;
                  A.method = "throw", A.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return v;
              }
              var $ = O(C, h.iterator, A.arg);
              if ($.type === "throw")
                return A.method = "throw", A.arg = $.arg, A.delegate = null, v;
              var Z = $.arg;
              if (!Z)
                return A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, v;
              if (Z.done)
                A[h.resultName] = Z.value, A.next = h.nextLoc, A.method !== "return" && (A.method = "next", A.arg = g);
              else
                return Z;
              return A.delegate = null, v;
            }
            H(M), x(M, B, "Generator"), x(M, F, function() {
              return this;
            }), x(M, "toString", function() {
              return "[object Generator]";
            });
            function K(h) {
              var A = {
                tryLoc: h[0]
              };
              1 in h && (A.catchLoc = h[1]), 2 in h && (A.finallyLoc = h[2], A.afterLoc = h[3]), this.tryEntries.push(A);
            }
            function oe(h) {
              var A = h.completion || {};
              A.type = "normal", delete A.arg, h.completion = A;
            }
            function q(h) {
              this.tryEntries = [{
                tryLoc: "root"
              }], h.forEach(K, this), this.reset(!0);
            }
            o.keys = function(h) {
              var A = [];
              for (var C in h)
                A.push(C);
              return A.reverse(), function $() {
                for (; A.length; ) {
                  var Z = A.pop();
                  if (Z in h)
                    return $.value = Z, $.done = !1, $;
                }
                return $.done = !0, $;
              };
            };
            function X(h) {
              if (h) {
                var A = h[F];
                if (A)
                  return A.call(h);
                if (typeof h.next == "function")
                  return h;
                if (!isNaN(h.length)) {
                  var C = -1, $ = function Z() {
                    for (; ++C < h.length; )
                      if (u.call(h, C))
                        return Z.value = h[C], Z.done = !1, Z;
                    return Z.value = g, Z.done = !0, Z;
                  };
                  return $.next = $;
                }
              }
              return {
                next: S
              };
            }
            o.values = X;
            function S() {
              return {
                value: g,
                done: !0
              };
            }
            return q.prototype = {
              constructor: q,
              reset: function(A) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = g, this.done = !1, this.delegate = null, this.method = "next", this.arg = g, this.tryEntries.forEach(oe), !A)
                  for (var C in this)
                    C.charAt(0) === "t" && u.call(this, C) && !isNaN(+C.slice(1)) && (this[C] = g);
              },
              stop: function() {
                this.done = !0;
                var A = this.tryEntries[0], C = A.completion;
                if (C.type === "throw")
                  throw C.arg;
                return this.rval;
              },
              dispatchException: function(A) {
                if (this.done)
                  throw A;
                var C = this;
                function $(j, I) {
                  return he.type = "throw", he.arg = A, C.next = j, I && (C.method = "next", C.arg = g), !!I;
                }
                for (var Z = this.tryEntries.length - 1; Z >= 0; --Z) {
                  var z = this.tryEntries[Z], he = z.completion;
                  if (z.tryLoc === "root")
                    return $("end");
                  if (z.tryLoc <= this.prev) {
                    var _e = u.call(z, "catchLoc"), Te = u.call(z, "finallyLoc");
                    if (_e && Te) {
                      if (this.prev < z.catchLoc)
                        return $(z.catchLoc, !0);
                      if (this.prev < z.finallyLoc)
                        return $(z.finallyLoc);
                    } else if (_e) {
                      if (this.prev < z.catchLoc)
                        return $(z.catchLoc, !0);
                    } else if (Te) {
                      if (this.prev < z.finallyLoc)
                        return $(z.finallyLoc);
                    } else
                      throw new Error("try statement without catch or finally");
                  }
                }
              },
              abrupt: function(A, C) {
                for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
                  var Z = this.tryEntries[$];
                  if (Z.tryLoc <= this.prev && u.call(Z, "finallyLoc") && this.prev < Z.finallyLoc) {
                    var z = Z;
                    break;
                  }
                }
                z && (A === "break" || A === "continue") && z.tryLoc <= C && C <= z.finallyLoc && (z = null);
                var he = z ? z.completion : {};
                return he.type = A, he.arg = C, z ? (this.method = "next", this.next = z.finallyLoc, v) : this.complete(he);
              },
              complete: function(A, C) {
                if (A.type === "throw")
                  throw A.arg;
                return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && C && (this.next = C), v;
              },
              finish: function(A) {
                for (var C = this.tryEntries.length - 1; C >= 0; --C) {
                  var $ = this.tryEntries[C];
                  if ($.finallyLoc === A)
                    return this.complete($.completion, $.afterLoc), oe($), v;
                }
              },
              catch: function(A) {
                for (var C = this.tryEntries.length - 1; C >= 0; --C) {
                  var $ = this.tryEntries[C];
                  if ($.tryLoc === A) {
                    var Z = $.completion;
                    if (Z.type === "throw") {
                      var z = Z.arg;
                      oe($);
                    }
                    return z;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function(A, C, $) {
                return this.delegate = {
                  iterator: X(A),
                  resultName: C,
                  nextLoc: $
                }, this.method === "next" && (this.arg = g), v;
              }
            }, o;
          }(e(i) === "object" ? i.exports : {});
          try {
            regeneratorRuntime = n;
          } catch {
            (typeof globalThis > "u" ? "undefined" : e(globalThis)) === "object" ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
          }
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.VerbosityLevel = a.Util = a.UnknownErrorException = a.UnexpectedResponseException = a.UNSUPPORTED_FEATURES = a.TextRenderingMode = a.StreamType = a.RenderingIntentFlag = a.PermissionFlag = a.PasswordResponses = a.PasswordException = a.PageActionEventType = a.OPS = a.MissingPDFException = a.IsLittleEndianCached = a.IsEvalSupportedCached = a.InvalidPDFException = a.ImageKind = a.IDENTITY_MATRIX = a.FormatError = a.FontType = a.FONT_IDENTITY_MATRIX = a.DocumentActionEventType = a.CMapCompressionType = a.BaseException = a.AnnotationType = a.AnnotationStateModelType = a.AnnotationReviewState = a.AnnotationReplyType = a.AnnotationMode = a.AnnotationMarkedState = a.AnnotationFlag = a.AnnotationFieldFlag = a.AnnotationBorderStyleType = a.AnnotationActionEventType = a.AbortException = void 0, a.arrayByteLength = fe, a.arraysToBytes = Ae, a.assert = be, a.bytesToString = Q, a.createObjectURL = et, a.createPromiseCapability = at, a.createValidAbsoluteUrl = Ce, a.escapeString = rt, a.getModificationDate = nt, a.getVerbosityLevel = G, a.info = ee, a.isArrayBuffer = ze, a.isArrayEqual = Xe, a.isAscii = lt, a.isBool = Pt, a.isNum = le, a.isSameOrigin = me, a.isString = Le, a.objectFromMap = Ne, a.objectSize = De, a.removeNullCharacters = ne, a.setVerbosityLevel = N, a.shadow = xe, a.string32 = Ee, a.stringToBytes = ve, a.stringToPDFString = Ze, a.stringToUTF16BEString = ct, a.stringToUTF8String = _t, a.unreachable = ye, a.utf8StringToString = St, a.warn = ce, t(5);
          function e(ae, Re) {
            for (var ie = 0; ie < Re.length; ie++) {
              var ge = Re[ie];
              ge.enumerable = ge.enumerable || !1, ge.configurable = !0, "value" in ge && (ge.writable = !0), Object.defineProperty(ae, ge.key, ge);
            }
          }
          function n(ae, Re, ie) {
            return Re && e(ae.prototype, Re), ie && e(ae, ie), ae;
          }
          function o(ae) {
            return g(ae) || u(ae) || w(ae) || d();
          }
          function d() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function u(ae) {
            if (typeof Symbol < "u" && ae[Symbol.iterator] != null || ae["@@iterator"] != null)
              return Array.from(ae);
          }
          function g(ae) {
            if (Array.isArray(ae))
              return O(ae);
          }
          function P(ae, Re) {
            return B(ae) || D(ae, Re) || w(ae, Re) || F();
          }
          function F() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function D(ae, Re) {
            var ie = ae == null ? null : typeof Symbol < "u" && ae[Symbol.iterator] || ae["@@iterator"];
            if (ie != null) {
              var ge = [], je = !0, $e = !1, Ke, Je;
              try {
                for (ie = ie.call(ae); !(je = (Ke = ie.next()).done) && (ge.push(Ke.value), !(Re && ge.length === Re)); je = !0)
                  ;
              } catch (ft) {
                $e = !0, Je = ft;
              } finally {
                try {
                  !je && ie.return != null && ie.return();
                } finally {
                  if ($e)
                    throw Je;
                }
              }
              return ge;
            }
          }
          function B(ae) {
            if (Array.isArray(ae))
              return ae;
          }
          function x(ae, Re) {
            var ie = typeof Symbol < "u" && ae[Symbol.iterator] || ae["@@iterator"];
            if (!ie) {
              if (Array.isArray(ae) || (ie = w(ae)) || Re && ae && typeof ae.length == "number") {
                ie && (ae = ie);
                var ge = 0, je = function() {
                };
                return { s: je, n: function() {
                  return ge >= ae.length ? { done: !0 } : { done: !1, value: ae[ge++] };
                }, e: function(ht) {
                  throw ht;
                }, f: je };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var $e = !0, Ke = !1, Je;
            return { s: function() {
              ie = ie.call(ae);
            }, n: function() {
              var ht = ie.next();
              return $e = ht.done, ht;
            }, e: function(ht) {
              Ke = !0, Je = ht;
            }, f: function() {
              try {
                !$e && ie.return != null && ie.return();
              } finally {
                if (Ke)
                  throw Je;
              }
            } };
          }
          function w(ae, Re) {
            if (!!ae) {
              if (typeof ae == "string")
                return O(ae, Re);
              var ie = Object.prototype.toString.call(ae).slice(8, -1);
              if (ie === "Object" && ae.constructor && (ie = ae.constructor.name), ie === "Map" || ie === "Set")
                return Array.from(ae);
              if (ie === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))
                return O(ae, Re);
            }
          }
          function O(ae, Re) {
            (Re == null || Re > ae.length) && (Re = ae.length);
            for (var ie = 0, ge = new Array(Re); ie < Re; ie++)
              ge[ie] = ae[ie];
            return ge;
          }
          function k(ae) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? k = function(ie) {
              return typeof ie;
            } : k = function(ie) {
              return ie && typeof Symbol == "function" && ie.constructor === Symbol && ie !== Symbol.prototype ? "symbol" : typeof ie;
            }, k(ae);
          }
          function W(ae, Re) {
            if (!(ae instanceof Re))
              throw new TypeError("Cannot call a class as a function");
          }
          function R(ae, Re) {
            if (typeof Re != "function" && Re !== null)
              throw new TypeError("Super expression must either be null or a function");
            ae.prototype = Object.create(Re && Re.prototype, { constructor: { value: ae, writable: !0, configurable: !0 } }), Re && U(ae, Re);
          }
          function U(ae, Re) {
            return U = Object.setPrototypeOf || function(ge, je) {
              return ge.__proto__ = je, ge;
            }, U(ae, Re);
          }
          function v(ae) {
            var Re = b();
            return function() {
              var ge = m(ae), je;
              if (Re) {
                var $e = m(this).constructor;
                je = Reflect.construct(ge, arguments, $e);
              } else
                je = ge.apply(this, arguments);
              return c(this, je);
            };
          }
          function c(ae, Re) {
            if (Re && (k(Re) === "object" || typeof Re == "function"))
              return Re;
            if (Re !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return p(ae);
          }
          function p(ae) {
            if (ae === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ae;
          }
          function b() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }
          function m(ae) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(ie) {
              return ie.__proto__ || Object.getPrototypeOf(ie);
            }, m(ae);
          }
          var y = [1, 0, 0, 1, 0, 0];
          a.IDENTITY_MATRIX = y;
          var T = [1e-3, 0, 0, 1e-3, 0, 0];
          a.FONT_IDENTITY_MATRIX = T;
          var M = {
            ANY: 1,
            DISPLAY: 2,
            PRINT: 4,
            ANNOTATIONS_FORMS: 16,
            ANNOTATIONS_STORAGE: 32,
            ANNOTATIONS_DISABLE: 64,
            OPLIST: 256
          };
          a.RenderingIntentFlag = M;
          var H = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_FORMS: 2,
            ENABLE_STORAGE: 3
          };
          a.AnnotationMode = H;
          var L = {
            PRINT: 4,
            MODIFY_CONTENTS: 8,
            COPY: 16,
            MODIFY_ANNOTATIONS: 32,
            FILL_INTERACTIVE_FORMS: 256,
            COPY_FOR_ACCESSIBILITY: 512,
            ASSEMBLE: 1024,
            PRINT_HIGH_QUALITY: 2048
          };
          a.PermissionFlag = L;
          var Y = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4
          };
          a.TextRenderingMode = Y;
          var te = {
            GRAYSCALE_1BPP: 1,
            RGB_24BPP: 2,
            RGBA_32BPP: 3
          };
          a.ImageKind = te;
          var K = {
            TEXT: 1,
            LINK: 2,
            FREETEXT: 3,
            LINE: 4,
            SQUARE: 5,
            CIRCLE: 6,
            POLYGON: 7,
            POLYLINE: 8,
            HIGHLIGHT: 9,
            UNDERLINE: 10,
            SQUIGGLY: 11,
            STRIKEOUT: 12,
            STAMP: 13,
            CARET: 14,
            INK: 15,
            POPUP: 16,
            FILEATTACHMENT: 17,
            SOUND: 18,
            MOVIE: 19,
            WIDGET: 20,
            SCREEN: 21,
            PRINTERMARK: 22,
            TRAPNET: 23,
            WATERMARK: 24,
            THREED: 25,
            REDACT: 26
          };
          a.AnnotationType = K;
          var oe = {
            MARKED: "Marked",
            REVIEW: "Review"
          };
          a.AnnotationStateModelType = oe;
          var q = {
            MARKED: "Marked",
            UNMARKED: "Unmarked"
          };
          a.AnnotationMarkedState = q;
          var X = {
            ACCEPTED: "Accepted",
            REJECTED: "Rejected",
            CANCELLED: "Cancelled",
            COMPLETED: "Completed",
            NONE: "None"
          };
          a.AnnotationReviewState = X;
          var S = {
            GROUP: "Group",
            REPLY: "R"
          };
          a.AnnotationReplyType = S;
          var h = {
            INVISIBLE: 1,
            HIDDEN: 2,
            PRINT: 4,
            NOZOOM: 8,
            NOROTATE: 16,
            NOVIEW: 32,
            READONLY: 64,
            LOCKED: 128,
            TOGGLENOVIEW: 256,
            LOCKEDCONTENTS: 512
          };
          a.AnnotationFlag = h;
          var A = {
            READONLY: 1,
            REQUIRED: 2,
            NOEXPORT: 4,
            MULTILINE: 4096,
            PASSWORD: 8192,
            NOTOGGLETOOFF: 16384,
            RADIO: 32768,
            PUSHBUTTON: 65536,
            COMBO: 131072,
            EDIT: 262144,
            SORT: 524288,
            FILESELECT: 1048576,
            MULTISELECT: 2097152,
            DONOTSPELLCHECK: 4194304,
            DONOTSCROLL: 8388608,
            COMB: 16777216,
            RICHTEXT: 33554432,
            RADIOSINUNISON: 33554432,
            COMMITONSELCHANGE: 67108864
          };
          a.AnnotationFieldFlag = A;
          var C = {
            SOLID: 1,
            DASHED: 2,
            BEVELED: 3,
            INSET: 4,
            UNDERLINE: 5
          };
          a.AnnotationBorderStyleType = C;
          var $ = {
            E: "Mouse Enter",
            X: "Mouse Exit",
            D: "Mouse Down",
            U: "Mouse Up",
            Fo: "Focus",
            Bl: "Blur",
            PO: "PageOpen",
            PC: "PageClose",
            PV: "PageVisible",
            PI: "PageInvisible",
            K: "Keystroke",
            F: "Format",
            V: "Validate",
            C: "Calculate"
          };
          a.AnnotationActionEventType = $;
          var Z = {
            WC: "WillClose",
            WS: "WillSave",
            DS: "DidSave",
            WP: "WillPrint",
            DP: "DidPrint"
          };
          a.DocumentActionEventType = Z;
          var z = {
            O: "PageOpen",
            C: "PageClose"
          };
          a.PageActionEventType = z;
          var he = {
            UNKNOWN: "UNKNOWN",
            FLATE: "FLATE",
            LZW: "LZW",
            DCT: "DCT",
            JPX: "JPX",
            JBIG: "JBIG",
            A85: "A85",
            AHX: "AHX",
            CCF: "CCF",
            RLX: "RLX"
          };
          a.StreamType = he;
          var _e = {
            UNKNOWN: "UNKNOWN",
            TYPE1: "TYPE1",
            TYPE1STANDARD: "TYPE1STANDARD",
            TYPE1C: "TYPE1C",
            CIDFONTTYPE0: "CIDFONTTYPE0",
            CIDFONTTYPE0C: "CIDFONTTYPE0C",
            TRUETYPE: "TRUETYPE",
            CIDFONTTYPE2: "CIDFONTTYPE2",
            TYPE3: "TYPE3",
            OPENTYPE: "OPENTYPE",
            TYPE0: "TYPE0",
            MMTYPE1: "MMTYPE1"
          };
          a.FontType = _e;
          var Te = {
            ERRORS: 0,
            WARNINGS: 1,
            INFOS: 5
          };
          a.VerbosityLevel = Te;
          var j = {
            NONE: 0,
            BINARY: 1,
            STREAM: 2
          };
          a.CMapCompressionType = j;
          var I = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotations: 78,
            endAnnotations: 79,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintJpegXObject: 82,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91
          };
          a.OPS = I;
          var f = {
            unknown: "unknown",
            forms: "forms",
            javaScript: "javaScript",
            signatures: "signatures",
            smask: "smask",
            shadingPattern: "shadingPattern",
            font: "font",
            errorTilingPattern: "errorTilingPattern",
            errorExtGState: "errorExtGState",
            errorXObject: "errorXObject",
            errorFontLoadType3: "errorFontLoadType3",
            errorFontState: "errorFontState",
            errorFontMissing: "errorFontMissing",
            errorFontTranslate: "errorFontTranslate",
            errorColorSpace: "errorColorSpace",
            errorOperatorList: "errorOperatorList",
            errorFontToUnicode: "errorFontToUnicode",
            errorFontLoadNative: "errorFontLoadNative",
            errorFontBuildPath: "errorFontBuildPath",
            errorFontGetPath: "errorFontGetPath",
            errorMarkedContent: "errorMarkedContent",
            errorContentSubStream: "errorContentSubStream"
          };
          a.UNSUPPORTED_FEATURES = f;
          var l = {
            NEED_PASSWORD: 1,
            INCORRECT_PASSWORD: 2
          };
          a.PasswordResponses = l;
          var _ = Te.WARNINGS;
          function N(ae) {
            Number.isInteger(ae) && (_ = ae);
          }
          function G() {
            return _;
          }
          function ee(ae) {
            _ >= Te.INFOS && console.log("Info: ".concat(ae));
          }
          function ce(ae) {
            _ >= Te.WARNINGS && console.log("Warning: ".concat(ae));
          }
          function ye(ae) {
            throw new Error(ae);
          }
          function be(ae, Re) {
            ae || ye(Re);
          }
          function me(ae, Re) {
            var ie;
            try {
              if (ie = new URL(ae), !ie.origin || ie.origin === "null")
                return !1;
            } catch {
              return !1;
            }
            var ge = new URL(Re, ie);
            return ie.origin === ge.origin;
          }
          function Pe(ae) {
            if (!ae)
              return !1;
            switch (ae.protocol) {
              case "http:":
              case "https:":
              case "ftp:":
              case "mailto:":
              case "tel:":
                return !0;
              default:
                return !1;
            }
          }
          function Ce(ae) {
            var Re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            if (!ae)
              return null;
            try {
              if (ie && typeof ae == "string") {
                if (ie.addDefaultProtocol && ae.startsWith("www.")) {
                  var ge = ae.match(/\./g);
                  ge && ge.length >= 2 && (ae = "http://".concat(ae));
                }
                if (ie.tryConvertEncoding)
                  try {
                    ae = _t(ae);
                  } catch {
                  }
              }
              var je = Re ? new URL(ae, Re) : new URL(ae);
              if (Pe(je))
                return je;
            } catch {
            }
            return null;
          }
          function xe(ae, Re, ie) {
            return Object.defineProperty(ae, Re, {
              value: ie,
              enumerable: !0,
              configurable: !0,
              writable: !1
            }), ie;
          }
          var Fe = function() {
            function Re(ie, ge) {
              this.constructor === Re && ye("Cannot initialize BaseException."), this.message = ie, this.name = ge;
            }
            return Re.prototype = new Error(), Re.constructor = Re, Re;
          }();
          a.BaseException = Fe;
          var Me = /* @__PURE__ */ function(ae) {
            R(ie, ae);
            var Re = v(ie);
            function ie(ge, je) {
              var $e;
              return W(this, ie), $e = Re.call(this, ge, "PasswordException"), $e.code = je, $e;
            }
            return ie;
          }(Fe);
          a.PasswordException = Me;
          var Ue = /* @__PURE__ */ function(ae) {
            R(ie, ae);
            var Re = v(ie);
            function ie(ge, je) {
              var $e;
              return W(this, ie), $e = Re.call(this, ge, "UnknownErrorException"), $e.details = je, $e;
            }
            return ie;
          }(Fe);
          a.UnknownErrorException = Ue;
          var Ve = /* @__PURE__ */ function(ae) {
            R(ie, ae);
            var Re = v(ie);
            function ie(ge) {
              return W(this, ie), Re.call(this, ge, "InvalidPDFException");
            }
            return ie;
          }(Fe);
          a.InvalidPDFException = Ve;
          var de = /* @__PURE__ */ function(ae) {
            R(ie, ae);
            var Re = v(ie);
            function ie(ge) {
              return W(this, ie), Re.call(this, ge, "MissingPDFException");
            }
            return ie;
          }(Fe);
          a.MissingPDFException = de;
          var pe = /* @__PURE__ */ function(ae) {
            R(ie, ae);
            var Re = v(ie);
            function ie(ge, je) {
              var $e;
              return W(this, ie), $e = Re.call(this, ge, "UnexpectedResponseException"), $e.status = je, $e;
            }
            return ie;
          }(Fe);
          a.UnexpectedResponseException = pe;
          var V = /* @__PURE__ */ function(ae) {
            R(ie, ae);
            var Re = v(ie);
            function ie(ge) {
              return W(this, ie), Re.call(this, ge, "FormatError");
            }
            return ie;
          }(Fe);
          a.FormatError = V;
          var re = /* @__PURE__ */ function(ae) {
            R(ie, ae);
            var Re = v(ie);
            function ie(ge) {
              return W(this, ie), Re.call(this, ge, "AbortException");
            }
            return ie;
          }(Fe);
          a.AbortException = re;
          var J = /\x00+/g, ue = /[\x01-\x1F]/g;
          function ne(ae) {
            var Re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            return typeof ae != "string" ? (ce("The argument for removeNullCharacters must be a string."), ae) : (Re && (ae = ae.replace(ue, " ")), ae.replace(J, ""));
          }
          function Q(ae) {
            be(ae !== null && k(ae) === "object" && ae.length !== void 0, "Invalid argument for bytesToString");
            var Re = ae.length, ie = 8192;
            if (Re < ie)
              return String.fromCharCode.apply(null, ae);
            for (var ge = [], je = 0; je < Re; je += ie) {
              var $e = Math.min(je + ie, Re), Ke = ae.subarray(je, $e);
              ge.push(String.fromCharCode.apply(null, Ke));
            }
            return ge.join("");
          }
          function ve(ae) {
            be(typeof ae == "string", "Invalid argument for stringToBytes");
            for (var Re = ae.length, ie = new Uint8Array(Re), ge = 0; ge < Re; ++ge)
              ie[ge] = ae.charCodeAt(ge) & 255;
            return ie;
          }
          function fe(ae) {
            return ae.length !== void 0 ? ae.length : (be(ae.byteLength !== void 0, "arrayByteLength - invalid argument."), ae.byteLength);
          }
          function Ae(ae) {
            var Re = ae.length;
            if (Re === 1 && ae[0] instanceof Uint8Array)
              return ae[0];
            for (var ie = 0, ge = 0; ge < Re; ge++)
              ie += fe(ae[ge]);
            for (var je = 0, $e = new Uint8Array(ie), Ke = 0; Ke < Re; Ke++) {
              var Je = ae[Ke];
              Je instanceof Uint8Array || (typeof Je == "string" ? Je = ve(Je) : Je = new Uint8Array(Je));
              var ft = Je.byteLength;
              $e.set(Je, je), je += ft;
            }
            return $e;
          }
          function Ee(ae) {
            return String.fromCharCode(ae >> 24 & 255, ae >> 16 & 255, ae >> 8 & 255, ae & 255);
          }
          function De(ae) {
            return Object.keys(ae).length;
          }
          function Ne(ae) {
            var Re = /* @__PURE__ */ Object.create(null), ie = x(ae), ge;
            try {
              for (ie.s(); !(ge = ie.n()).done; ) {
                var je = P(ge.value, 2), $e = je[0], Ke = je[1];
                Re[$e] = Ke;
              }
            } catch (Je) {
              ie.e(Je);
            } finally {
              ie.f();
            }
            return Re;
          }
          function ke() {
            var ae = new Uint8Array(4);
            ae[0] = 1;
            var Re = new Uint32Array(ae.buffer, 0, 1);
            return Re[0] === 1;
          }
          var He = {
            get value() {
              return xe(this, "value", ke());
            }
          };
          a.IsLittleEndianCached = He;
          function Oe() {
            try {
              return new Function(""), !0;
            } catch {
              return !1;
            }
          }
          var Ie = {
            get value() {
              return xe(this, "value", Oe());
            }
          };
          a.IsEvalSupportedCached = Ie;
          var Ge = o(Array(256).keys()).map(function(ae) {
            return ae.toString(16).padStart(2, "0");
          }), Be = /* @__PURE__ */ function() {
            function ae() {
              W(this, ae);
            }
            return n(ae, null, [{
              key: "makeHexColor",
              value: function(ie, ge, je) {
                return "#".concat(Ge[ie]).concat(Ge[ge]).concat(Ge[je]);
              }
            }, {
              key: "transform",
              value: function(ie, ge) {
                return [ie[0] * ge[0] + ie[2] * ge[1], ie[1] * ge[0] + ie[3] * ge[1], ie[0] * ge[2] + ie[2] * ge[3], ie[1] * ge[2] + ie[3] * ge[3], ie[0] * ge[4] + ie[2] * ge[5] + ie[4], ie[1] * ge[4] + ie[3] * ge[5] + ie[5]];
              }
            }, {
              key: "applyTransform",
              value: function(ie, ge) {
                var je = ie[0] * ge[0] + ie[1] * ge[2] + ge[4], $e = ie[0] * ge[1] + ie[1] * ge[3] + ge[5];
                return [je, $e];
              }
            }, {
              key: "applyInverseTransform",
              value: function(ie, ge) {
                var je = ge[0] * ge[3] - ge[1] * ge[2], $e = (ie[0] * ge[3] - ie[1] * ge[2] + ge[2] * ge[5] - ge[4] * ge[3]) / je, Ke = (-ie[0] * ge[1] + ie[1] * ge[0] + ge[4] * ge[1] - ge[5] * ge[0]) / je;
                return [$e, Ke];
              }
            }, {
              key: "getAxialAlignedBoundingBox",
              value: function(ie, ge) {
                var je = ae.applyTransform(ie, ge), $e = ae.applyTransform(ie.slice(2, 4), ge), Ke = ae.applyTransform([ie[0], ie[3]], ge), Je = ae.applyTransform([ie[2], ie[1]], ge);
                return [Math.min(je[0], $e[0], Ke[0], Je[0]), Math.min(je[1], $e[1], Ke[1], Je[1]), Math.max(je[0], $e[0], Ke[0], Je[0]), Math.max(je[1], $e[1], Ke[1], Je[1])];
              }
            }, {
              key: "inverseTransform",
              value: function(ie) {
                var ge = ie[0] * ie[3] - ie[1] * ie[2];
                return [ie[3] / ge, -ie[1] / ge, -ie[2] / ge, ie[0] / ge, (ie[2] * ie[5] - ie[4] * ie[3]) / ge, (ie[4] * ie[1] - ie[5] * ie[0]) / ge];
              }
            }, {
              key: "apply3dTransform",
              value: function(ie, ge) {
                return [ie[0] * ge[0] + ie[1] * ge[1] + ie[2] * ge[2], ie[3] * ge[0] + ie[4] * ge[1] + ie[5] * ge[2], ie[6] * ge[0] + ie[7] * ge[1] + ie[8] * ge[2]];
              }
            }, {
              key: "singularValueDecompose2dScale",
              value: function(ie) {
                var ge = [ie[0], ie[2], ie[1], ie[3]], je = ie[0] * ge[0] + ie[1] * ge[2], $e = ie[0] * ge[1] + ie[1] * ge[3], Ke = ie[2] * ge[0] + ie[3] * ge[2], Je = ie[2] * ge[1] + ie[3] * ge[3], ft = (je + Je) / 2, ht = Math.sqrt(Math.pow(je + Je, 2) - 4 * (je * Je - Ke * $e)) / 2, At = ft + ht || 1, mt = ft - ht || 1;
                return [Math.sqrt(At), Math.sqrt(mt)];
              }
            }, {
              key: "normalizeRect",
              value: function(ie) {
                var ge = ie.slice(0);
                return ie[0] > ie[2] && (ge[0] = ie[2], ge[2] = ie[0]), ie[1] > ie[3] && (ge[1] = ie[3], ge[3] = ie[1]), ge;
              }
            }, {
              key: "intersect",
              value: function(ie, ge) {
                function je(ft, ht) {
                  return ft - ht;
                }
                var $e = [ie[0], ie[2], ge[0], ge[2]].sort(je), Ke = [ie[1], ie[3], ge[1], ge[3]].sort(je), Je = [];
                if (ie = ae.normalizeRect(ie), ge = ae.normalizeRect(ge), $e[0] === ie[0] && $e[1] === ge[0] || $e[0] === ge[0] && $e[1] === ie[0])
                  Je[0] = $e[1], Je[2] = $e[2];
                else
                  return null;
                if (Ke[0] === ie[1] && Ke[1] === ge[1] || Ke[0] === ge[1] && Ke[1] === ie[1])
                  Je[1] = Ke[1], Je[3] = Ke[2];
                else
                  return null;
                return Je;
              }
            }, {
              key: "bezierBoundingBox",
              value: function(ie, ge, je, $e, Ke, Je, ft, ht) {
                for (var At = [], mt = [[], []], Et, Rt, Dt, dt, zt, $t, nr, Xt, Vt = 0; Vt < 2; ++Vt) {
                  if (Vt === 0 ? (Rt = 6 * ie - 12 * je + 6 * Ke, Et = -3 * ie + 9 * je - 9 * Ke + 3 * ft, Dt = 3 * je - 3 * ie) : (Rt = 6 * ge - 12 * $e + 6 * Je, Et = -3 * ge + 9 * $e - 9 * Je + 3 * ht, Dt = 3 * $e - 3 * ge), Math.abs(Et) < 1e-12) {
                    if (Math.abs(Rt) < 1e-12)
                      continue;
                    dt = -Dt / Rt, 0 < dt && dt < 1 && At.push(dt);
                    continue;
                  }
                  nr = Rt * Rt - 4 * Dt * Et, Xt = Math.sqrt(nr), !(nr < 0) && (zt = (-Rt + Xt) / (2 * Et), 0 < zt && zt < 1 && At.push(zt), $t = (-Rt - Xt) / (2 * Et), 0 < $t && $t < 1 && At.push($t));
                }
                for (var kt = At.length, yt, Lt = kt; kt--; )
                  dt = At[kt], yt = 1 - dt, mt[0][kt] = yt * yt * yt * ie + 3 * yt * yt * dt * je + 3 * yt * dt * dt * Ke + dt * dt * dt * ft, mt[1][kt] = yt * yt * yt * ge + 3 * yt * yt * dt * $e + 3 * yt * dt * dt * Je + dt * dt * dt * ht;
                return mt[0][Lt] = ie, mt[1][Lt] = ge, mt[0][Lt + 1] = ft, mt[1][Lt + 1] = ht, mt[0].length = mt[1].length = Lt + 2, [Math.min.apply(Math, o(mt[0])), Math.min.apply(Math, o(mt[1])), Math.max.apply(Math, o(mt[0])), Math.max.apply(Math, o(mt[1]))];
              }
            }]), ae;
          }();
          a.Util = Be;
          var Ye = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
          function Ze(ae) {
            var Re = ae.length, ie = [];
            if (ae[0] === "\xFE" && ae[1] === "\xFF")
              for (var ge = 2; ge < Re; ge += 2)
                ie.push(String.fromCharCode(ae.charCodeAt(ge) << 8 | ae.charCodeAt(ge + 1)));
            else if (ae[0] === "\xFF" && ae[1] === "\xFE")
              for (var je = 2; je < Re; je += 2)
                ie.push(String.fromCharCode(ae.charCodeAt(je + 1) << 8 | ae.charCodeAt(je)));
            else
              for (var $e = 0; $e < Re; ++$e) {
                var Ke = Ye[ae.charCodeAt($e)];
                ie.push(Ke ? String.fromCharCode(Ke) : ae.charAt($e));
              }
            return ie.join("");
          }
          function rt(ae) {
            return ae.replace(/([()\\\n\r])/g, function(Re) {
              return Re === `
` ? "\\n" : Re === "\r" ? "\\r" : "\\".concat(Re);
            });
          }
          function lt(ae) {
            return /^[\x00-\x7F]*$/.test(ae);
          }
          function ct(ae) {
            for (var Re = ["\xFE\xFF"], ie = 0, ge = ae.length; ie < ge; ie++) {
              var je = ae.charCodeAt(ie);
              Re.push(String.fromCharCode(je >> 8 & 255), String.fromCharCode(je & 255));
            }
            return Re.join("");
          }
          function _t(ae) {
            return decodeURIComponent(escape(ae));
          }
          function St(ae) {
            return unescape(encodeURIComponent(ae));
          }
          function Pt(ae) {
            return typeof ae == "boolean";
          }
          function le(ae) {
            return typeof ae == "number";
          }
          function Le(ae) {
            return typeof ae == "string";
          }
          function ze(ae) {
            return k(ae) === "object" && ae !== null && ae.byteLength !== void 0;
          }
          function Xe(ae, Re) {
            if (ae.length !== Re.length)
              return !1;
            for (var ie = 0, ge = ae.length; ie < ge; ie++)
              if (ae[ie] !== Re[ie])
                return !1;
            return !0;
          }
          function nt() {
            var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Date(), Re = [ae.getUTCFullYear().toString(), (ae.getUTCMonth() + 1).toString().padStart(2, "0"), ae.getUTCDate().toString().padStart(2, "0"), ae.getUTCHours().toString().padStart(2, "0"), ae.getUTCMinutes().toString().padStart(2, "0"), ae.getUTCSeconds().toString().padStart(2, "0")];
            return Re.join("");
          }
          function at() {
            var ae = /* @__PURE__ */ Object.create(null), Re = !1;
            return Object.defineProperty(ae, "settled", {
              get: function() {
                return Re;
              }
            }), ae.promise = new Promise(function(ie, ge) {
              ae.resolve = function(je) {
                Re = !0, ie(je);
              }, ae.reject = function(je) {
                Re = !0, ge(je);
              };
            }), ae;
          }
          function et(ae) {
            var Re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            if (URL.createObjectURL && typeof Blob < "u" && !ie)
              return URL.createObjectURL(new Blob([ae], {
                type: Re
              }));
            for (var ge = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", je = "data:".concat(Re, ";base64,"), $e = 0, Ke = ae.length; $e < Ke; $e += 3) {
              var Je = ae[$e] & 255, ft = ae[$e + 1] & 255, ht = ae[$e + 2] & 255, At = Je >> 2, mt = (Je & 3) << 4 | ft >> 4, Et = $e + 1 < Ke ? (ft & 15) << 2 | ht >> 6 : 64, Rt = $e + 2 < Ke ? ht & 63 : 64;
              je += ge[At] + ge[mt] + ge[Et] + ge[Rt];
            }
            return je;
          }
        },
        (i, a, t) => {
          var e = t(6);
          (typeof globalThis > "u" || !globalThis._pdfjsCompatibilityChecked) && ((typeof globalThis > "u" || globalThis.Math !== Math) && (globalThis = t(7)), globalThis._pdfjsCompatibilityChecked = !0, function() {
            globalThis.btoa || !e.isNodeJS || (globalThis.btoa = function(o) {
              return Buffer.from(o, "binary").toString("base64");
            });
          }(), function() {
            globalThis.atob || !e.isNodeJS || (globalThis.atob = function(o) {
              return Buffer.from(o, "base64").toString("binary");
            });
          }(), function() {
            globalThis.DOMMatrix || !e.isNodeJS || (globalThis.DOMMatrix = t(69));
          }(), function() {
            Object.fromEntries || t(70);
          }(), function() {
            globalThis.Promise.allSettled || (globalThis.Promise = t(97));
          }(), function() {
            globalThis.ReadableStream || !e.isNodeJS || (globalThis.ReadableStream = t(134).ReadableStream);
          }());
        },
        (i, a) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.isNodeJS = void 0;
          function t(n) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(d) {
              return typeof d;
            } : t = function(d) {
              return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
            }, t(n);
          }
          var e = (typeof process > "u" ? "undefined" : t(process)) === "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
          a.isNodeJS = e;
        },
        (i, a, t) => {
          t(8), i.exports = t(10);
        },
        (i, a, t) => {
          var e = t(9), n = t(10);
          e({ global: !0 }, { globalThis: n });
        },
        (i, a, t) => {
          var e = t(10), n = t(11).f, o = t(47), d = t(50), u = t(41), g = t(57), P = t(68);
          i.exports = function(F, D) {
            var B = F.target, x = F.global, w = F.stat, O, k, W, R, U, v;
            if (x ? k = e : w ? k = e[B] || u(B, {}) : k = (e[B] || {}).prototype, k)
              for (W in D) {
                if (U = D[W], F.noTargetGet ? (v = n(k, W), R = v && v.value) : R = k[W], O = P(x ? W : B + (w ? "." : "#") + W, F.forced), !O && R !== void 0) {
                  if (typeof U == typeof R)
                    continue;
                  g(U, R);
                }
                (F.sham || R && R.sham) && o(U, "sham", !0), d(k, W, U, F);
              }
          };
        },
        (i) => {
          var a = function(t) {
            return t && t.Math == Math && t;
          };
          i.exports = a(typeof globalThis == "object" && globalThis) || a(typeof window == "object" && window) || a(typeof self == "object" && self) || a(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
            return this;
          }() || Function("return this")();
        },
        (i, a, t) => {
          var e = t(12), n = t(14), o = t(15), d = t(16), u = t(17), g = t(22), P = t(42), F = t(45), D = Object.getOwnPropertyDescriptor;
          a.f = e ? D : function(x, w) {
            if (x = u(x), w = g(w), F)
              try {
                return D(x, w);
              } catch {
              }
            if (P(x, w))
              return d(!n(o.f, x, w), x[w]);
          };
        },
        (i, a, t) => {
          var e = t(13);
          i.exports = !e(function() {
            return Object.defineProperty({}, 1, {
              get: function() {
                return 7;
              }
            })[1] != 7;
          });
        },
        (i) => {
          i.exports = function(a) {
            try {
              return !!a();
            } catch {
              return !0;
            }
          };
        },
        (i) => {
          var a = Function.prototype.call;
          i.exports = a.bind ? a.bind(a) : function() {
            return a.apply(a, arguments);
          };
        },
        (i, a) => {
          var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, n = e && !t.call({ 1: 2 }, 1);
          a.f = n ? function(d) {
            var u = e(this, d);
            return !!u && u.enumerable;
          } : t;
        },
        (i) => {
          i.exports = function(a, t) {
            return {
              enumerable: !(a & 1),
              configurable: !(a & 2),
              writable: !(a & 4),
              value: t
            };
          };
        },
        (i, a, t) => {
          var e = t(18), n = t(21);
          i.exports = function(o) {
            return e(n(o));
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(19), o = t(13), d = t(20), u = e.Object, g = n("".split);
          i.exports = o(function() {
            return !u("z").propertyIsEnumerable(0);
          }) ? function(P) {
            return d(P) == "String" ? g(P, "") : u(P);
          } : u;
        },
        (i) => {
          var a = Function.prototype, t = a.bind, e = a.call, n = t && t.bind(e);
          i.exports = t ? function(o) {
            return o && n(e, o);
          } : function(o) {
            return o && function() {
              return e.apply(o, arguments);
            };
          };
        },
        (i, a, t) => {
          var e = t(19), n = e({}.toString), o = e("".slice);
          i.exports = function(d) {
            return o(n(d), 8, -1);
          };
        },
        (i, a, t) => {
          var e = t(10), n = e.TypeError;
          i.exports = function(o) {
            if (o == null)
              throw n("Can't call method on " + o);
            return o;
          };
        },
        (i, a, t) => {
          var e = t(23), n = t(26);
          i.exports = function(o) {
            var d = e(o, "string");
            return n(d) ? d : d + "";
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(14), o = t(24), d = t(26), u = t(33), g = t(36), P = t(37), F = e.TypeError, D = P("toPrimitive");
          i.exports = function(B, x) {
            if (!o(B) || d(B))
              return B;
            var w = u(B, D), O;
            if (w) {
              if (x === void 0 && (x = "default"), O = n(w, B, x), !o(O) || d(O))
                return O;
              throw F("Can't convert object to primitive value");
            }
            return x === void 0 && (x = "number"), g(B, x);
          };
        },
        (i, a, t) => {
          var e = t(25);
          i.exports = function(n) {
            return typeof n == "object" ? n !== null : e(n);
          };
        },
        (i) => {
          i.exports = function(a) {
            return typeof a == "function";
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(27), o = t(25), d = t(28), u = t(29), g = e.Object;
          i.exports = u ? function(P) {
            return typeof P == "symbol";
          } : function(P) {
            var F = n("Symbol");
            return o(F) && d(F.prototype, g(P));
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(25), o = function(d) {
            return n(d) ? d : void 0;
          };
          i.exports = function(d, u) {
            return arguments.length < 2 ? o(e[d]) : e[d] && e[d][u];
          };
        },
        (i, a, t) => {
          var e = t(19);
          i.exports = e({}.isPrototypeOf);
        },
        (i, a, t) => {
          var e = t(30);
          i.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
        },
        (i, a, t) => {
          var e = t(31), n = t(13);
          i.exports = !!Object.getOwnPropertySymbols && !n(function() {
            var o = Symbol();
            return !String(o) || !(Object(o) instanceof Symbol) || !Symbol.sham && e && e < 41;
          });
        },
        (i, a, t) => {
          var e = t(10), n = t(32), o = e.process, d = e.Deno, u = o && o.versions || d && d.version, g = u && u.v8, P, F;
          g && (P = g.split("."), F = P[0] > 0 && P[0] < 4 ? 1 : +(P[0] + P[1])), !F && n && (P = n.match(/Edge\/(\d+)/), (!P || P[1] >= 74) && (P = n.match(/Chrome\/(\d+)/), P && (F = +P[1]))), i.exports = F;
        },
        (i, a, t) => {
          var e = t(27);
          i.exports = e("navigator", "userAgent") || "";
        },
        (i, a, t) => {
          var e = t(34);
          i.exports = function(n, o) {
            var d = n[o];
            return d == null ? void 0 : e(d);
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(25), o = t(35), d = e.TypeError;
          i.exports = function(u) {
            if (n(u))
              return u;
            throw d(o(u) + " is not a function");
          };
        },
        (i, a, t) => {
          var e = t(10), n = e.String;
          i.exports = function(o) {
            try {
              return n(o);
            } catch {
              return "Object";
            }
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(14), o = t(25), d = t(24), u = e.TypeError;
          i.exports = function(g, P) {
            var F, D;
            if (P === "string" && o(F = g.toString) && !d(D = n(F, g)) || o(F = g.valueOf) && !d(D = n(F, g)) || P !== "string" && o(F = g.toString) && !d(D = n(F, g)))
              return D;
            throw u("Can't convert object to primitive value");
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(38), o = t(42), d = t(44), u = t(30), g = t(29), P = n("wks"), F = e.Symbol, D = F && F.for, B = g ? F : F && F.withoutSetter || d;
          i.exports = function(x) {
            if (!o(P, x) || !(u || typeof P[x] == "string")) {
              var w = "Symbol." + x;
              u && o(F, x) ? P[x] = F[x] : g && D ? P[x] = D(w) : P[x] = B(w);
            }
            return P[x];
          };
        },
        (i, a, t) => {
          var e = t(39), n = t(40);
          (i.exports = function(o, d) {
            return n[o] || (n[o] = d !== void 0 ? d : {});
          })("versions", []).push({
            version: "3.19.3",
            mode: e ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
          });
        },
        (i) => {
          i.exports = !1;
        },
        (i, a, t) => {
          var e = t(10), n = t(41), o = "__core-js_shared__", d = e[o] || n(o, {});
          i.exports = d;
        },
        (i, a, t) => {
          var e = t(10), n = Object.defineProperty;
          i.exports = function(o, d) {
            try {
              n(e, o, {
                value: d,
                configurable: !0,
                writable: !0
              });
            } catch {
              e[o] = d;
            }
            return d;
          };
        },
        (i, a, t) => {
          var e = t(19), n = t(43), o = e({}.hasOwnProperty);
          i.exports = Object.hasOwn || function(u, g) {
            return o(n(u), g);
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(21), o = e.Object;
          i.exports = function(d) {
            return o(n(d));
          };
        },
        (i, a, t) => {
          var e = t(19), n = 0, o = Math.random(), d = e(1 .toString);
          i.exports = function(u) {
            return "Symbol(" + (u === void 0 ? "" : u) + ")_" + d(++n + o, 36);
          };
        },
        (i, a, t) => {
          var e = t(12), n = t(13), o = t(46);
          i.exports = !e && !n(function() {
            return Object.defineProperty(o("div"), "a", {
              get: function() {
                return 7;
              }
            }).a != 7;
          });
        },
        (i, a, t) => {
          var e = t(10), n = t(24), o = e.document, d = n(o) && n(o.createElement);
          i.exports = function(u) {
            return d ? o.createElement(u) : {};
          };
        },
        (i, a, t) => {
          var e = t(12), n = t(48), o = t(16);
          i.exports = e ? function(d, u, g) {
            return n.f(d, u, o(1, g));
          } : function(d, u, g) {
            return d[u] = g, d;
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(12), o = t(45), d = t(49), u = t(22), g = e.TypeError, P = Object.defineProperty;
          a.f = n ? P : function(D, B, x) {
            if (d(D), B = u(B), d(x), o)
              try {
                return P(D, B, x);
              } catch {
              }
            if ("get" in x || "set" in x)
              throw g("Accessors not supported");
            return "value" in x && (D[B] = x.value), D;
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(24), o = e.String, d = e.TypeError;
          i.exports = function(u) {
            if (n(u))
              return u;
            throw d(o(u) + " is not an object");
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(25), o = t(42), d = t(47), u = t(41), g = t(51), P = t(52), F = t(56).CONFIGURABLE, D = P.get, B = P.enforce, x = String(String).split("String");
          (i.exports = function(w, O, k, W) {
            var R = W ? !!W.unsafe : !1, U = W ? !!W.enumerable : !1, v = W ? !!W.noTargetGet : !1, c = W && W.name !== void 0 ? W.name : O, p;
            if (n(k) && (String(c).slice(0, 7) === "Symbol(" && (c = "[" + String(c).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!o(k, "name") || F && k.name !== c) && d(k, "name", c), p = B(k), p.source || (p.source = x.join(typeof c == "string" ? c : ""))), w === e) {
              U ? w[O] = k : u(O, k);
              return;
            } else
              R ? !v && w[O] && (U = !0) : delete w[O];
            U ? w[O] = k : d(w, O, k);
          })(Function.prototype, "toString", function() {
            return n(this) && D(this).source || g(this);
          });
        },
        (i, a, t) => {
          var e = t(19), n = t(25), o = t(40), d = e(Function.toString);
          n(o.inspectSource) || (o.inspectSource = function(u) {
            return d(u);
          }), i.exports = o.inspectSource;
        },
        (i, a, t) => {
          var e = t(53), n = t(10), o = t(19), d = t(24), u = t(47), g = t(42), P = t(40), F = t(54), D = t(55), B = "Object already initialized", x = n.TypeError, w = n.WeakMap, O, k, W, R = function(y) {
            return W(y) ? k(y) : O(y, {});
          }, U = function(y) {
            return function(T) {
              var M;
              if (!d(T) || (M = k(T)).type !== y)
                throw x("Incompatible receiver, " + y + " required");
              return M;
            };
          };
          if (e || P.state) {
            var v = P.state || (P.state = new w()), c = o(v.get), p = o(v.has), b = o(v.set);
            O = function(y, T) {
              if (p(v, y))
                throw new x(B);
              return T.facade = y, b(v, y, T), T;
            }, k = function(y) {
              return c(v, y) || {};
            }, W = function(y) {
              return p(v, y);
            };
          } else {
            var m = F("state");
            D[m] = !0, O = function(y, T) {
              if (g(y, m))
                throw new x(B);
              return T.facade = y, u(y, m, T), T;
            }, k = function(y) {
              return g(y, m) ? y[m] : {};
            }, W = function(y) {
              return g(y, m);
            };
          }
          i.exports = {
            set: O,
            get: k,
            has: W,
            enforce: R,
            getterFor: U
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(25), o = t(51), d = e.WeakMap;
          i.exports = n(d) && /native code/.test(o(d));
        },
        (i, a, t) => {
          var e = t(38), n = t(44), o = e("keys");
          i.exports = function(d) {
            return o[d] || (o[d] = n(d));
          };
        },
        (i) => {
          i.exports = {};
        },
        (i, a, t) => {
          var e = t(12), n = t(42), o = Function.prototype, d = e && Object.getOwnPropertyDescriptor, u = n(o, "name"), g = u && function() {
          }.name === "something", P = u && (!e || e && d(o, "name").configurable);
          i.exports = {
            EXISTS: u,
            PROPER: g,
            CONFIGURABLE: P
          };
        },
        (i, a, t) => {
          var e = t(42), n = t(58), o = t(11), d = t(48);
          i.exports = function(u, g) {
            for (var P = n(g), F = d.f, D = o.f, B = 0; B < P.length; B++) {
              var x = P[B];
              e(u, x) || F(u, x, D(g, x));
            }
          };
        },
        (i, a, t) => {
          var e = t(27), n = t(19), o = t(59), d = t(67), u = t(49), g = n([].concat);
          i.exports = e("Reflect", "ownKeys") || function(F) {
            var D = o.f(u(F)), B = d.f;
            return B ? g(D, B(F)) : D;
          };
        },
        (i, a, t) => {
          var e = t(60), n = t(66), o = n.concat("length", "prototype");
          a.f = Object.getOwnPropertyNames || function(u) {
            return e(u, o);
          };
        },
        (i, a, t) => {
          var e = t(19), n = t(42), o = t(17), d = t(61).indexOf, u = t(55), g = e([].push);
          i.exports = function(P, F) {
            var D = o(P), B = 0, x = [], w;
            for (w in D)
              !n(u, w) && n(D, w) && g(x, w);
            for (; F.length > B; )
              n(D, w = F[B++]) && (~d(x, w) || g(x, w));
            return x;
          };
        },
        (i, a, t) => {
          var e = t(17), n = t(62), o = t(64), d = function(u) {
            return function(g, P, F) {
              var D = e(g), B = o(D), x = n(F, B), w;
              if (u && P != P) {
                for (; B > x; )
                  if (w = D[x++], w != w)
                    return !0;
              } else
                for (; B > x; x++)
                  if ((u || x in D) && D[x] === P)
                    return u || x || 0;
              return !u && -1;
            };
          };
          i.exports = {
            includes: d(!0),
            indexOf: d(!1)
          };
        },
        (i, a, t) => {
          var e = t(63), n = Math.max, o = Math.min;
          i.exports = function(d, u) {
            var g = e(d);
            return g < 0 ? n(g + u, 0) : o(g, u);
          };
        },
        (i) => {
          var a = Math.ceil, t = Math.floor;
          i.exports = function(e) {
            var n = +e;
            return n !== n || n === 0 ? 0 : (n > 0 ? t : a)(n);
          };
        },
        (i, a, t) => {
          var e = t(65);
          i.exports = function(n) {
            return e(n.length);
          };
        },
        (i, a, t) => {
          var e = t(63), n = Math.min;
          i.exports = function(o) {
            return o > 0 ? n(e(o), 9007199254740991) : 0;
          };
        },
        (i) => {
          i.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf"
          ];
        },
        (i, a) => {
          a.f = Object.getOwnPropertySymbols;
        },
        (i, a, t) => {
          var e = t(13), n = t(25), o = /#|\.prototype\./, d = function(D, B) {
            var x = g[u(D)];
            return x == F ? !0 : x == P ? !1 : n(B) ? e(B) : !!B;
          }, u = d.normalize = function(D) {
            return String(D).replace(o, ".").toLowerCase();
          }, g = d.data = {}, P = d.NATIVE = "N", F = d.POLYFILL = "P";
          i.exports = d;
        },
        (i, a, t) => {
          var e, n;
          function o(d) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? o = function(g) {
              return typeof g;
            } : o = function(g) {
              return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
            }, o(d);
          }
          (function(d, u) {
            o(a) === "object" ? i.exports = u() : (e = u, n = typeof e == "function" ? e.call(a, t, a, i) : e, n !== void 0 && (i.exports = n));
          })(void 0, function() {
            function d(v) {
              var c = new k(), p = Array.from(v);
              if (!p.every(function(Te) {
                return !Number.isNaN(Te);
              }))
                throw TypeError('CSSMatrix: "' + v + '" must only have numbers.');
              if (p.length === 16) {
                var b = p[0], m = p[1], y = p[2], T = p[3], M = p[4], H = p[5], L = p[6], Y = p[7], te = p[8], K = p[9], oe = p[10], q = p[11], X = p[12], S = p[13], h = p[14], A = p[15];
                c.m11 = b, c.a = b, c.m21 = M, c.c = M, c.m31 = te, c.m41 = X, c.e = X, c.m12 = m, c.b = m, c.m22 = H, c.d = H, c.m32 = K, c.m42 = S, c.f = S, c.m13 = y, c.m23 = L, c.m33 = oe, c.m43 = h, c.m14 = T, c.m24 = Y, c.m34 = q, c.m44 = A;
              } else if (p.length === 6) {
                var C = p[0], $ = p[1], Z = p[2], z = p[3], he = p[4], _e = p[5];
                c.m11 = C, c.a = C, c.m12 = $, c.b = $, c.m21 = Z, c.c = Z, c.m22 = z, c.d = z, c.m41 = he, c.e = he, c.m42 = _e, c.f = _e;
              } else
                throw new TypeError("CSSMatrix: expecting an Array of 6/16 values.");
              return c;
            }
            function u(v) {
              var c = Object.keys(new k());
              if (o(v) === "object" && c.every(function(p) {
                return p in v;
              }))
                return d([v.m11, v.m12, v.m13, v.m14, v.m21, v.m22, v.m23, v.m24, v.m31, v.m32, v.m33, v.m34, v.m41, v.m42, v.m43, v.m44]);
              throw TypeError('CSSMatrix: "' + v + '" is not a DOMMatrix / CSSMatrix / JSON compatible object.');
            }
            function g(v) {
              if (typeof v != "string")
                throw TypeError('CSSMatrix: "' + v + '" is not a string.');
              var c = String(v).replace(/\s/g, ""), p = new k(), b = 'CSSMatrix: invalid transform string "' + v + '"';
              return c.split(")").filter(function(m) {
                return m;
              }).forEach(function(m) {
                var y = m.split("("), T = y[0], M = y[1];
                if (!M)
                  throw TypeError(b);
                var H = M.split(",").map(function(z) {
                  return z.includes("rad") ? parseFloat(z) * (180 / Math.PI) : parseFloat(z);
                }), L = H[0], Y = H[1], te = H[2], K = H[3], oe = [L, Y, te], q = [L, Y, te, K];
                if (T === "perspective" && L && [Y, te].every(function(z) {
                  return z === void 0;
                }))
                  p.m34 = -1 / L;
                else if (T.includes("matrix") && [6, 16].includes(H.length) && H.every(function(z) {
                  return !Number.isNaN(+z);
                })) {
                  var X = H.map(function(z) {
                    return Math.abs(z) < 1e-6 ? 0 : z;
                  });
                  p = p.multiply(d(X));
                } else if (T === "translate3d" && oe.every(function(z) {
                  return !Number.isNaN(+z);
                }))
                  p = p.translate(L, Y, te);
                else if (T === "translate" && L && te === void 0)
                  p = p.translate(L, Y || 0, 0);
                else if (T === "rotate3d" && q.every(function(z) {
                  return !Number.isNaN(+z);
                }) && K)
                  p = p.rotateAxisAngle(L, Y, te, K);
                else if (T === "rotate" && L && [Y, te].every(function(z) {
                  return z === void 0;
                }))
                  p = p.rotate(0, 0, L);
                else if (T === "scale3d" && oe.every(function(z) {
                  return !Number.isNaN(+z);
                }) && oe.some(function(z) {
                  return z !== 1;
                }))
                  p = p.scale(L, Y, te);
                else if (T === "scale" && !Number.isNaN(L) && L !== 1 && te === void 0) {
                  var S = Number.isNaN(+Y), h = S ? L : Y;
                  p = p.scale(L, h, 1);
                } else if (T === "skew" && L && te === void 0)
                  p = p.skewX(L), p = Y ? p.skewY(Y) : p;
                else if (/[XYZ]/.test(T) && L && [Y, te].every(function(z) {
                  return z === void 0;
                }) && ["translate", "rotate", "scale", "skew"].some(function(z) {
                  return T.includes(z);
                }))
                  if (["skewX", "skewY"].includes(T))
                    p = p[T](L);
                  else {
                    var A = T.replace(/[XYZ]/, ""), C = T.replace(A, ""), $ = ["X", "Y", "Z"].indexOf(C), Z = [$ === 0 ? L : 0, $ === 1 ? L : 0, $ === 2 ? L : 0];
                    p = p[A].apply(p, Z);
                  }
                else
                  throw TypeError(b);
              }), p;
            }
            function P(v, c, p) {
              var b = new k();
              return b.m41 = v, b.e = v, b.m42 = c, b.f = c, b.m43 = p, b;
            }
            function F(v, c, p) {
              var b = new k(), m = Math.PI / 180, y = v * m, T = c * m, M = p * m, H = Math.cos(y), L = -Math.sin(y), Y = Math.cos(T), te = -Math.sin(T), K = Math.cos(M), oe = -Math.sin(M), q = Y * K, X = -Y * oe;
              b.m11 = q, b.a = q, b.m12 = X, b.b = X, b.m13 = te;
              var S = L * te * K + H * oe;
              b.m21 = S, b.c = S;
              var h = H * K - L * te * oe;
              return b.m22 = h, b.d = h, b.m23 = -L * Y, b.m31 = L * oe - H * te * K, b.m32 = L * K + H * te * oe, b.m33 = H * Y, b;
            }
            function D(v, c, p, b) {
              var m = new k(), y = b * (Math.PI / 360), T = Math.sin(y), M = Math.cos(y), H = T * T, L = Math.sqrt(v * v + c * c + p * p), Y = v, te = c, K = p;
              L === 0 ? (Y = 0, te = 0, K = 1) : (Y /= L, te /= L, K /= L);
              var oe = Y * Y, q = te * te, X = K * K, S = 1 - 2 * (q + X) * H;
              m.m11 = S, m.a = S;
              var h = 2 * (Y * te * H + K * T * M);
              m.m12 = h, m.b = h, m.m13 = 2 * (Y * K * H - te * T * M);
              var A = 2 * (te * Y * H - K * T * M);
              m.m21 = A, m.c = A;
              var C = 1 - 2 * (X + oe) * H;
              return m.m22 = C, m.d = C, m.m23 = 2 * (te * K * H + Y * T * M), m.m31 = 2 * (K * Y * H + te * T * M), m.m32 = 2 * (K * te * H - Y * T * M), m.m33 = 1 - 2 * (oe + q) * H, m;
            }
            function B(v, c, p) {
              var b = new k();
              return b.m11 = v, b.a = v, b.m22 = c, b.d = c, b.m33 = p, b;
            }
            function x(v) {
              var c = new k(), p = v * Math.PI / 180, b = Math.tan(p);
              return c.m21 = b, c.c = b, c;
            }
            function w(v) {
              var c = new k(), p = v * Math.PI / 180, b = Math.tan(p);
              return c.m12 = b, c.b = b, c;
            }
            function O(v, c) {
              var p = c.m11 * v.m11 + c.m12 * v.m21 + c.m13 * v.m31 + c.m14 * v.m41, b = c.m11 * v.m12 + c.m12 * v.m22 + c.m13 * v.m32 + c.m14 * v.m42, m = c.m11 * v.m13 + c.m12 * v.m23 + c.m13 * v.m33 + c.m14 * v.m43, y = c.m11 * v.m14 + c.m12 * v.m24 + c.m13 * v.m34 + c.m14 * v.m44, T = c.m21 * v.m11 + c.m22 * v.m21 + c.m23 * v.m31 + c.m24 * v.m41, M = c.m21 * v.m12 + c.m22 * v.m22 + c.m23 * v.m32 + c.m24 * v.m42, H = c.m21 * v.m13 + c.m22 * v.m23 + c.m23 * v.m33 + c.m24 * v.m43, L = c.m21 * v.m14 + c.m22 * v.m24 + c.m23 * v.m34 + c.m24 * v.m44, Y = c.m31 * v.m11 + c.m32 * v.m21 + c.m33 * v.m31 + c.m34 * v.m41, te = c.m31 * v.m12 + c.m32 * v.m22 + c.m33 * v.m32 + c.m34 * v.m42, K = c.m31 * v.m13 + c.m32 * v.m23 + c.m33 * v.m33 + c.m34 * v.m43, oe = c.m31 * v.m14 + c.m32 * v.m24 + c.m33 * v.m34 + c.m34 * v.m44, q = c.m41 * v.m11 + c.m42 * v.m21 + c.m43 * v.m31 + c.m44 * v.m41, X = c.m41 * v.m12 + c.m42 * v.m22 + c.m43 * v.m32 + c.m44 * v.m42, S = c.m41 * v.m13 + c.m42 * v.m23 + c.m43 * v.m33 + c.m44 * v.m43, h = c.m41 * v.m14 + c.m42 * v.m24 + c.m43 * v.m34 + c.m44 * v.m44;
              return d([p, b, m, y, T, M, H, L, Y, te, K, oe, q, X, S, h]);
            }
            var k = function() {
              for (var c = [], p = arguments.length; p--; )
                c[p] = arguments[p];
              var b = this;
              if (b.a = 1, b.b = 0, b.c = 0, b.d = 1, b.e = 0, b.f = 0, b.m11 = 1, b.m12 = 0, b.m13 = 0, b.m14 = 0, b.m21 = 0, b.m22 = 1, b.m23 = 0, b.m24 = 0, b.m31 = 0, b.m32 = 0, b.m33 = 1, b.m34 = 0, b.m41 = 0, b.m42 = 0, b.m43 = 0, b.m44 = 1, c && c.length) {
                var m = [16, 6].some(function(y) {
                  return y === c.length;
                }) ? c : c[0];
                return b.setMatrixValue(m);
              }
              return b;
            }, W = {
              isIdentity: {
                configurable: !0
              },
              is2D: {
                configurable: !0
              }
            };
            W.isIdentity.set = function(v) {
              this.isIdentity = v;
            }, W.isIdentity.get = function() {
              var v = this;
              return v.m11 === 1 && v.m12 === 0 && v.m13 === 0 && v.m14 === 0 && v.m21 === 0 && v.m22 === 1 && v.m23 === 0 && v.m24 === 0 && v.m31 === 0 && v.m32 === 0 && v.m33 === 1 && v.m34 === 0 && v.m41 === 0 && v.m42 === 0 && v.m43 === 0 && v.m44 === 1;
            }, W.is2D.get = function() {
              var v = this;
              return v.m31 === 0 && v.m32 === 0 && v.m33 === 1 && v.m34 === 0 && v.m43 === 0 && v.m44 === 1;
            }, W.is2D.set = function(v) {
              this.is2D = v;
            }, k.prototype.setMatrixValue = function(c) {
              var p = this;
              return [Array, Float64Array, Float32Array].some(function(b) {
                return c instanceof b;
              }) ? d(c) : typeof c == "string" && c.length && c !== "none" ? g(c) : o(c) === "object" ? u(c) : p;
            }, k.prototype.toArray = function() {
              var c = this, p = Math.pow(10, 6), b;
              return c.is2D ? b = [c.a, c.b, c.c, c.d, c.e, c.f] : b = [c.m11, c.m12, c.m13, c.m14, c.m21, c.m22, c.m23, c.m24, c.m31, c.m32, c.m33, c.m34, c.m41, c.m42, c.m43, c.m44], b.map(function(m) {
                return Math.abs(m) < 1e-6 ? 0 : (m * p >> 0) / p;
              });
            }, k.prototype.toString = function() {
              var c = this, p = c.toArray(), b = c.is2D ? "matrix" : "matrix3d";
              return b + "(" + p + ")";
            }, k.prototype.toJSON = function() {
              var c = this, p = c.is2D, b = c.isIdentity;
              return Object.assign({}, c, {
                is2D: p,
                isIdentity: b
              });
            }, k.prototype.multiply = function(c) {
              return O(this, c);
            }, k.prototype.translate = function(c, p, b) {
              var m = c, y = p, T = b;
              return T === void 0 && (T = 0), y === void 0 && (y = 0), O(this, P(m, y, T));
            }, k.prototype.scale = function(c, p, b) {
              var m = c, y = p, T = b;
              return y === void 0 && (y = c), T === void 0 && (T = 1), O(this, B(m, y, T));
            }, k.prototype.rotate = function(c, p, b) {
              var m = c, y = p, T = b;
              return y === void 0 && (y = 0), T === void 0 && (T = m, m = 0), O(this, F(m, y, T));
            }, k.prototype.rotateAxisAngle = function(c, p, b, m) {
              if ([c, p, b, m].some(function(y) {
                return Number.isNaN(y);
              }))
                throw new TypeError("CSSMatrix: expecting 4 values");
              return O(this, D(c, p, b, m));
            }, k.prototype.skewX = function(c) {
              return O(this, x(c));
            }, k.prototype.skewY = function(c) {
              return O(this, w(c));
            }, k.prototype.transformPoint = function(c) {
              var p = this, b = P(c.x, c.y, c.z);
              return b.m44 = c.w || 1, b = p.multiply(b), {
                x: b.m41,
                y: b.m42,
                z: b.m43,
                w: b.m44
              };
            }, k.prototype.transform = function(c) {
              var p = this, b = p.m11 * c.x + p.m12 * c.y + p.m13 * c.z + p.m14 * c.w, m = p.m21 * c.x + p.m22 * c.y + p.m23 * c.z + p.m24 * c.w, y = p.m31 * c.x + p.m32 * c.y + p.m33 * c.z + p.m34 * c.w, T = p.m41 * c.x + p.m42 * c.y + p.m43 * c.z + p.m44 * c.w;
              return {
                x: b / T,
                y: m / T,
                z: y / T,
                w: T
              };
            }, Object.defineProperties(k.prototype, W), Object.assign(k, {
              Translate: P,
              Rotate: F,
              RotateAxisAngle: D,
              Scale: B,
              SkewX: x,
              SkewY: w,
              Multiply: O,
              fromArray: d,
              fromMatrix: u,
              fromString: g
            });
            var R = "0.0.24", U = R;
            return Object.assign(k, {
              Version: U
            }), k;
          });
        },
        (i, a, t) => {
          t(71), t(86);
          var e = t(96);
          i.exports = e.Object.fromEntries;
        },
        (i, a, t) => {
          var e = t(17), n = t(72), o = t(77), d = t(52), u = t(78), g = "Array Iterator", P = d.set, F = d.getterFor(g);
          i.exports = u(Array, "Array", function(D, B) {
            P(this, {
              type: g,
              target: e(D),
              index: 0,
              kind: B
            });
          }, function() {
            var D = F(this), B = D.target, x = D.kind, w = D.index++;
            return !B || w >= B.length ? (D.target = void 0, {
              value: void 0,
              done: !0
            }) : x == "keys" ? {
              value: w,
              done: !1
            } : x == "values" ? {
              value: B[w],
              done: !1
            } : {
              value: [
                w,
                B[w]
              ],
              done: !1
            };
          }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries");
        },
        (i, a, t) => {
          var e = t(37), n = t(73), o = t(48), d = e("unscopables"), u = Array.prototype;
          u[d] == null && o.f(u, d, {
            configurable: !0,
            value: n(null)
          }), i.exports = function(g) {
            u[d][g] = !0;
          };
        },
        (i, a, t) => {
          var e = t(49), n = t(74), o = t(66), d = t(55), u = t(76), g = t(46), P = t(54), F = ">", D = "<", B = "prototype", x = "script", w = P("IE_PROTO"), O = function() {
          }, k = function(c) {
            return D + x + F + c + D + "/" + x + F;
          }, W = function(c) {
            c.write(k("")), c.close();
            var p = c.parentWindow.Object;
            return c = null, p;
          }, R = function() {
            var c = g("iframe"), p = "java" + x + ":", b;
            return c.style.display = "none", u.appendChild(c), c.src = String(p), b = c.contentWindow.document, b.open(), b.write(k("document.F=Object")), b.close(), b.F;
          }, U, v = function() {
            try {
              U = new ActiveXObject("htmlfile");
            } catch {
            }
            v = typeof document < "u" ? document.domain && U ? W(U) : R() : W(U);
            for (var c = o.length; c--; )
              delete v[B][o[c]];
            return v();
          };
          d[w] = !0, i.exports = Object.create || function(p, b) {
            var m;
            return p !== null ? (O[B] = e(p), m = new O(), O[B] = null, m[w] = p) : m = v(), b === void 0 ? m : n(m, b);
          };
        },
        (i, a, t) => {
          var e = t(12), n = t(48), o = t(49), d = t(17), u = t(75);
          i.exports = e ? Object.defineProperties : function(P, F) {
            o(P);
            for (var D = d(F), B = u(F), x = B.length, w = 0, O; x > w; )
              n.f(P, O = B[w++], D[O]);
            return P;
          };
        },
        (i, a, t) => {
          var e = t(60), n = t(66);
          i.exports = Object.keys || function(d) {
            return e(d, n);
          };
        },
        (i, a, t) => {
          var e = t(27);
          i.exports = e("document", "documentElement");
        },
        (i) => {
          i.exports = {};
        },
        (i, a, t) => {
          var e = t(9), n = t(14), o = t(39), d = t(56), u = t(25), g = t(79), P = t(81), F = t(84), D = t(83), B = t(47), x = t(50), w = t(37), O = t(77), k = t(80), W = d.PROPER, R = d.CONFIGURABLE, U = k.IteratorPrototype, v = k.BUGGY_SAFARI_ITERATORS, c = w("iterator"), p = "keys", b = "values", m = "entries", y = function() {
            return this;
          };
          i.exports = function(T, M, H, L, Y, te, K) {
            g(H, M, L);
            var oe = function(he) {
              if (he === Y && A)
                return A;
              if (!v && he in S)
                return S[he];
              switch (he) {
                case p:
                  return function() {
                    return new H(this, he);
                  };
                case b:
                  return function() {
                    return new H(this, he);
                  };
                case m:
                  return function() {
                    return new H(this, he);
                  };
              }
              return function() {
                return new H(this);
              };
            }, q = M + " Iterator", X = !1, S = T.prototype, h = S[c] || S["@@iterator"] || Y && S[Y], A = !v && h || oe(Y), C = M == "Array" && S.entries || h, $, Z, z;
            if (C && ($ = P(C.call(new T())), $ !== Object.prototype && $.next && (!o && P($) !== U && (F ? F($, U) : u($[c]) || x($, c, y)), D($, q, !0, !0), o && (O[q] = y))), W && Y == b && h && h.name !== b && (!o && R ? B(S, "name", b) : (X = !0, A = function() {
              return n(h, this);
            })), Y)
              if (Z = {
                values: oe(b),
                keys: te ? A : oe(p),
                entries: oe(m)
              }, K)
                for (z in Z)
                  (v || X || !(z in S)) && x(S, z, Z[z]);
              else
                e({
                  target: M,
                  proto: !0,
                  forced: v || X
                }, Z);
            return (!o || K) && S[c] !== A && x(S, c, A, { name: Y }), O[M] = A, Z;
          };
        },
        (i, a, t) => {
          var e = t(80).IteratorPrototype, n = t(73), o = t(16), d = t(83), u = t(77), g = function() {
            return this;
          };
          i.exports = function(P, F, D, B) {
            var x = F + " Iterator";
            return P.prototype = n(e, { next: o(+!B, D) }), d(P, x, !1, !0), u[x] = g, P;
          };
        },
        (i, a, t) => {
          var e = t(13), n = t(25), o = t(73), d = t(81), u = t(50), g = t(37), P = t(39), F = g("iterator"), D = !1, B, x, w;
          [].keys && (w = [].keys(), "next" in w ? (x = d(d(w)), x !== Object.prototype && (B = x)) : D = !0);
          var O = B == null || e(function() {
            var k = {};
            return B[F].call(k) !== k;
          });
          O ? B = {} : P && (B = o(B)), n(B[F]) || u(B, F, function() {
            return this;
          }), i.exports = {
            IteratorPrototype: B,
            BUGGY_SAFARI_ITERATORS: D
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(42), o = t(25), d = t(43), u = t(54), g = t(82), P = u("IE_PROTO"), F = e.Object, D = F.prototype;
          i.exports = g ? F.getPrototypeOf : function(B) {
            var x = d(B);
            if (n(x, P))
              return x[P];
            var w = x.constructor;
            return o(w) && x instanceof w ? w.prototype : x instanceof F ? D : null;
          };
        },
        (i, a, t) => {
          var e = t(13);
          i.exports = !e(function() {
            function n() {
            }
            return n.prototype.constructor = null, Object.getPrototypeOf(new n()) !== n.prototype;
          });
        },
        (i, a, t) => {
          var e = t(48).f, n = t(42), o = t(37), d = o("toStringTag");
          i.exports = function(u, g, P) {
            u && !n(u = P ? u : u.prototype, d) && e(u, d, {
              configurable: !0,
              value: g
            });
          };
        },
        (i, a, t) => {
          var e = t(19), n = t(49), o = t(85);
          i.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var d = !1, u = {}, g;
            try {
              g = e(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), g(u, []), d = u instanceof Array;
            } catch {
            }
            return function(F, D) {
              return n(F), o(D), d ? g(F, D) : F.__proto__ = D, F;
            };
          }() : void 0);
        },
        (i, a, t) => {
          var e = t(10), n = t(25), o = e.String, d = e.TypeError;
          i.exports = function(u) {
            if (typeof u == "object" || n(u))
              return u;
            throw d("Can't set " + o(u) + " as a prototype");
          };
        },
        (i, a, t) => {
          var e = t(9), n = t(87), o = t(95);
          e({
            target: "Object",
            stat: !0
          }, {
            fromEntries: function(u) {
              var g = {};
              return n(u, function(P, F) {
                o(g, P, F);
              }, { AS_ENTRIES: !0 }), g;
            }
          });
        },
        (i, a, t) => {
          var e = t(10), n = t(88), o = t(14), d = t(49), u = t(35), g = t(89), P = t(64), F = t(28), D = t(90), B = t(91), x = t(94), w = e.TypeError, O = function(W, R) {
            this.stopped = W, this.result = R;
          }, k = O.prototype;
          i.exports = function(W, R, U) {
            var v = U && U.that, c = !!(U && U.AS_ENTRIES), p = !!(U && U.IS_ITERATOR), b = !!(U && U.INTERRUPTED), m = n(R, v), y, T, M, H, L, Y, te, K = function(q) {
              return y && x(y, "normal", q), new O(!0, q);
            }, oe = function(q) {
              return c ? (d(q), b ? m(q[0], q[1], K) : m(q[0], q[1])) : b ? m(q, K) : m(q);
            };
            if (p)
              y = W;
            else {
              if (T = B(W), !T)
                throw w(u(W) + " is not iterable");
              if (g(T)) {
                for (M = 0, H = P(W); H > M; M++)
                  if (L = oe(W[M]), L && F(k, L))
                    return L;
                return new O(!1);
              }
              y = D(W, T);
            }
            for (Y = y.next; !(te = o(Y, y)).done; ) {
              try {
                L = oe(te.value);
              } catch (q) {
                x(y, "throw", q);
              }
              if (typeof L == "object" && L && F(k, L))
                return L;
            }
            return new O(!1);
          };
        },
        (i, a, t) => {
          var e = t(19), n = t(34), o = e(e.bind);
          i.exports = function(d, u) {
            return n(d), u === void 0 ? d : o ? o(d, u) : function() {
              return d.apply(u, arguments);
            };
          };
        },
        (i, a, t) => {
          var e = t(37), n = t(77), o = e("iterator"), d = Array.prototype;
          i.exports = function(u) {
            return u !== void 0 && (n.Array === u || d[o] === u);
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(14), o = t(34), d = t(49), u = t(35), g = t(91), P = e.TypeError;
          i.exports = function(F, D) {
            var B = arguments.length < 2 ? g(F) : D;
            if (o(B))
              return d(n(B, F));
            throw P(u(F) + " is not iterable");
          };
        },
        (i, a, t) => {
          var e = t(92), n = t(33), o = t(77), d = t(37), u = d("iterator");
          i.exports = function(g) {
            if (g != null)
              return n(g, u) || n(g, "@@iterator") || o[e(g)];
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(93), o = t(25), d = t(20), u = t(37), g = u("toStringTag"), P = e.Object, F = d(function() {
            return arguments;
          }()) == "Arguments", D = function(B, x) {
            try {
              return B[x];
            } catch {
            }
          };
          i.exports = n ? d : function(B) {
            var x, w, O;
            return B === void 0 ? "Undefined" : B === null ? "Null" : typeof (w = D(x = P(B), g)) == "string" ? w : F ? d(x) : (O = d(x)) == "Object" && o(x.callee) ? "Arguments" : O;
          };
        },
        (i, a, t) => {
          var e = t(37), n = e("toStringTag"), o = {};
          o[n] = "z", i.exports = String(o) === "[object z]";
        },
        (i, a, t) => {
          var e = t(14), n = t(49), o = t(33);
          i.exports = function(d, u, g) {
            var P, F;
            n(d);
            try {
              if (P = o(d, "return"), !P) {
                if (u === "throw")
                  throw g;
                return g;
              }
              P = e(P, d);
            } catch (D) {
              F = !0, P = D;
            }
            if (u === "throw")
              throw g;
            if (F)
              throw P;
            return n(P), g;
          };
        },
        (i, a, t) => {
          var e = t(22), n = t(48), o = t(16);
          i.exports = function(d, u, g) {
            var P = e(u);
            P in d ? n.f(d, P, o(0, g)) : d[P] = g;
          };
        },
        (i, a, t) => {
          var e = t(10);
          i.exports = e;
        },
        (i, a, t) => {
          t(98), t(71), t(105), t(107), t(129), t(130), t(131), t(132);
          var e = t(96);
          i.exports = e.Promise;
        },
        (i, a, t) => {
          var e = t(9), n = t(10), o = t(28), d = t(81), u = t(84), g = t(57), P = t(73), F = t(47), D = t(16), B = t(99), x = t(101), w = t(87), O = t(102), k = t(37), W = t(104), R = k("toStringTag"), U = n.Error, v = [].push, c = function(m, y) {
            var T = arguments.length > 2 ? arguments[2] : void 0, M = o(p, this), H;
            u ? H = u(new U(void 0), M ? d(this) : p) : (H = M ? this : P(p), F(H, R, "Error")), F(H, "message", O(y, "")), W && F(H, "stack", B(H.stack, 1)), x(H, T);
            var L = [];
            return w(m, v, { that: L }), F(H, "errors", L), H;
          };
          u ? u(c, U) : g(c, U);
          var p = c.prototype = P(U.prototype, {
            constructor: D(1, c),
            message: D(1, ""),
            name: D(1, "AggregateError")
          });
          e({ global: !0 }, { AggregateError: c });
        },
        (i, a, t) => {
          var e = t(19), n = t(100), o = e("".replace), d = e("".split), u = e([].join), g = function(B) {
            return String(Error(B).stack);
          }("zxcasd"), P = /\n\s*at [^:]*:[^\n]*/, F = P.test(g), D = /@[^\n]*\n/.test(g) && !/zxcasd/.test(g);
          i.exports = function(B, x) {
            if (typeof B != "string")
              return B;
            if (F)
              for (; x--; )
                B = o(B, P, "");
            else if (D)
              return u(n(d(B, `
`), x), `
`);
            return B;
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(62), o = t(64), d = t(95), u = e.Array, g = Math.max;
          i.exports = function(P, F, D) {
            for (var B = o(P), x = n(F, B), w = n(D === void 0 ? B : D, B), O = u(g(w - x, 0)), k = 0; x < w; x++, k++)
              d(O, k, P[x]);
            return O.length = k, O;
          };
        },
        (i, a, t) => {
          var e = t(24), n = t(47);
          i.exports = function(o, d) {
            e(d) && "cause" in d && n(o, "cause", d.cause);
          };
        },
        (i, a, t) => {
          var e = t(103);
          i.exports = function(n, o) {
            return n === void 0 ? arguments.length < 2 ? "" : o : e(n);
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(92), o = e.String;
          i.exports = function(d) {
            if (n(d) === "Symbol")
              throw TypeError("Cannot convert a Symbol value to a string");
            return o(d);
          };
        },
        (i, a, t) => {
          var e = t(13), n = t(16);
          i.exports = !e(function() {
            var o = Error("a");
            return "stack" in o ? (Object.defineProperty(o, "stack", n(1, 7)), o.stack !== 7) : !0;
          });
        },
        (i, a, t) => {
          var e = t(93), n = t(50), o = t(106);
          e || n(Object.prototype, "toString", o, { unsafe: !0 });
        },
        (i, a, t) => {
          var e = t(93), n = t(92);
          i.exports = e ? {}.toString : function() {
            return "[object " + n(this) + "]";
          };
        },
        (i, a, t) => {
          var e = t(9), n = t(39), o = t(10), d = t(27), u = t(14), g = t(108), P = t(50), F = t(109), D = t(84), B = t(83), x = t(110), w = t(34), O = t(25), k = t(24), W = t(111), R = t(51), U = t(87), v = t(112), c = t(113), p = t(116).set, b = t(121), m = t(124), y = t(126), T = t(125), M = t(127), H = t(52), L = t(68), Y = t(37), te = t(128), K = t(120), oe = t(31), q = Y("species"), X = "Promise", S = H.getterFor(X), h = H.set, A = H.getterFor(X), C = g && g.prototype, $ = g, Z = C, z = o.TypeError, he = o.document, _e = o.process, Te = T.f, j = Te, I = !!(he && he.createEvent && o.dispatchEvent), f = O(o.PromiseRejectionEvent), l = "unhandledrejection", _ = "rejectionhandled", N = 0, G = 1, ee = 2, ce = 1, ye = 2, be = !1, me, Pe, Ce, xe, Fe = L(X, function() {
            var Q = R($), ve = Q !== String($);
            if (!ve && oe === 66 || n && !Z.finally)
              return !0;
            if (oe >= 51 && /native code/.test(Q))
              return !1;
            var fe = new $(function(De) {
              De(1);
            }), Ae = function(De) {
              De(function() {
              }, function() {
              });
            }, Ee = fe.constructor = {};
            return Ee[q] = Ae, be = fe.then(function() {
            }) instanceof Ae, be ? !ve && te && !f : !0;
          }), Me = Fe || !v(function(Q) {
            $.all(Q).catch(function() {
            });
          }), Ue = function(Q) {
            var ve;
            return k(Q) && O(ve = Q.then) ? ve : !1;
          }, Ve = function(Q, ve) {
            if (!Q.notified) {
              Q.notified = !0;
              var fe = Q.reactions;
              b(function() {
                for (var Ae = Q.value, Ee = Q.state == G, De = 0; fe.length > De; ) {
                  var Ne = fe[De++], ke = Ee ? Ne.ok : Ne.fail, He = Ne.resolve, Oe = Ne.reject, Ie = Ne.domain, Ge, Be, Ye;
                  try {
                    ke ? (Ee || (Q.rejection === ye && re(Q), Q.rejection = ce), ke === !0 ? Ge = Ae : (Ie && Ie.enter(), Ge = ke(Ae), Ie && (Ie.exit(), Ye = !0)), Ge === Ne.promise ? Oe(z("Promise-chain cycle")) : (Be = Ue(Ge)) ? u(Be, Ge, He, Oe) : He(Ge)) : Oe(Ae);
                  } catch (Ze) {
                    Ie && !Ye && Ie.exit(), Oe(Ze);
                  }
                }
                Q.reactions = [], Q.notified = !1, ve && !Q.rejection && pe(Q);
              });
            }
          }, de = function(Q, ve, fe) {
            var Ae, Ee;
            I ? (Ae = he.createEvent("Event"), Ae.promise = ve, Ae.reason = fe, Ae.initEvent(Q, !1, !0), o.dispatchEvent(Ae)) : Ae = {
              promise: ve,
              reason: fe
            }, !f && (Ee = o["on" + Q]) ? Ee(Ae) : Q === l && y("Unhandled promise rejection", fe);
          }, pe = function(Q) {
            u(p, o, function() {
              var ve = Q.facade, fe = Q.value, Ae = V(Q), Ee;
              if (Ae && (Ee = M(function() {
                K ? _e.emit("unhandledRejection", fe, ve) : de(l, ve, fe);
              }), Q.rejection = K || V(Q) ? ye : ce, Ee.error))
                throw Ee.value;
            });
          }, V = function(Q) {
            return Q.rejection !== ce && !Q.parent;
          }, re = function(Q) {
            u(p, o, function() {
              var ve = Q.facade;
              K ? _e.emit("rejectionHandled", ve) : de(_, ve, Q.value);
            });
          }, J = function(Q, ve, fe) {
            return function(Ae) {
              Q(ve, Ae, fe);
            };
          }, ue = function(Q, ve, fe) {
            Q.done || (Q.done = !0, fe && (Q = fe), Q.value = ve, Q.state = ee, Ve(Q, !0));
          }, ne = function(Q, ve, fe) {
            if (!Q.done) {
              Q.done = !0, fe && (Q = fe);
              try {
                if (Q.facade === ve)
                  throw z("Promise can't be resolved itself");
                var Ae = Ue(ve);
                Ae ? b(function() {
                  var Ee = { done: !1 };
                  try {
                    u(Ae, ve, J(ne, Ee, Q), J(ue, Ee, Q));
                  } catch (De) {
                    ue(Ee, De, Q);
                  }
                }) : (Q.value = ve, Q.state = G, Ve(Q, !1));
              } catch (Ee) {
                ue({ done: !1 }, Ee, Q);
              }
            }
          };
          if (Fe && ($ = function(ve) {
            W(this, Z), w(ve), u(me, this);
            var fe = S(this);
            try {
              ve(J(ne, fe), J(ue, fe));
            } catch (Ae) {
              ue(fe, Ae);
            }
          }, Z = $.prototype, me = function(ve) {
            h(this, {
              type: X,
              done: !1,
              notified: !1,
              parent: !1,
              reactions: [],
              rejection: !1,
              state: N,
              value: void 0
            });
          }, me.prototype = F(Z, {
            then: function(ve, fe) {
              var Ae = A(this), Ee = Ae.reactions, De = Te(c(this, $));
              return De.ok = O(ve) ? ve : !0, De.fail = O(fe) && fe, De.domain = K ? _e.domain : void 0, Ae.parent = !0, Ee[Ee.length] = De, Ae.state != N && Ve(Ae, !1), De.promise;
            },
            catch: function(Q) {
              return this.then(void 0, Q);
            }
          }), Pe = function() {
            var Q = new me(), ve = S(Q);
            this.promise = Q, this.resolve = J(ne, ve), this.reject = J(ue, ve);
          }, T.f = Te = function(Q) {
            return Q === $ || Q === Ce ? new Pe(Q) : j(Q);
          }, !n && O(g) && C !== Object.prototype)) {
            xe = C.then, be || (P(C, "then", function(ve, fe) {
              var Ae = this;
              return new $(function(Ee, De) {
                u(xe, Ae, Ee, De);
              }).then(ve, fe);
            }, { unsafe: !0 }), P(C, "catch", Z.catch, { unsafe: !0 }));
            try {
              delete C.constructor;
            } catch {
            }
            D && D(C, Z);
          }
          e({
            global: !0,
            wrap: !0,
            forced: Fe
          }, { Promise: $ }), B($, X, !1, !0), x(X), Ce = d(X), e({
            target: X,
            stat: !0,
            forced: Fe
          }, {
            reject: function(ve) {
              var fe = Te(this);
              return u(fe.reject, void 0, ve), fe.promise;
            }
          }), e({
            target: X,
            stat: !0,
            forced: n || Fe
          }, {
            resolve: function(ve) {
              return m(n && this === Ce ? $ : this, ve);
            }
          }), e({
            target: X,
            stat: !0,
            forced: Me
          }, {
            all: function(ve) {
              var fe = this, Ae = Te(fe), Ee = Ae.resolve, De = Ae.reject, Ne = M(function() {
                var ke = w(fe.resolve), He = [], Oe = 0, Ie = 1;
                U(ve, function(Ge) {
                  var Be = Oe++, Ye = !1;
                  Ie++, u(ke, fe, Ge).then(function(Ze) {
                    Ye || (Ye = !0, He[Be] = Ze, --Ie || Ee(He));
                  }, De);
                }), --Ie || Ee(He);
              });
              return Ne.error && De(Ne.value), Ae.promise;
            },
            race: function(ve) {
              var fe = this, Ae = Te(fe), Ee = Ae.reject, De = M(function() {
                var Ne = w(fe.resolve);
                U(ve, function(ke) {
                  u(Ne, fe, ke).then(Ae.resolve, Ee);
                });
              });
              return De.error && Ee(De.value), Ae.promise;
            }
          });
        },
        (i, a, t) => {
          var e = t(10);
          i.exports = e.Promise;
        },
        (i, a, t) => {
          var e = t(50);
          i.exports = function(n, o, d) {
            for (var u in o)
              e(n, u, o[u], d);
            return n;
          };
        },
        (i, a, t) => {
          var e = t(27), n = t(48), o = t(37), d = t(12), u = o("species");
          i.exports = function(g) {
            var P = e(g), F = n.f;
            d && P && !P[u] && F(P, u, {
              configurable: !0,
              get: function() {
                return this;
              }
            });
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(28), o = e.TypeError;
          i.exports = function(d, u) {
            if (n(u, d))
              return d;
            throw o("Incorrect invocation");
          };
        },
        (i, a, t) => {
          var e = t(37), n = e("iterator"), o = !1;
          try {
            var d = 0, u = {
              next: function() {
                return { done: !!d++ };
              },
              return: function() {
                o = !0;
              }
            };
            u[n] = function() {
              return this;
            }, Array.from(u, function() {
              throw 2;
            });
          } catch {
          }
          i.exports = function(g, P) {
            if (!P && !o)
              return !1;
            var F = !1;
            try {
              var D = {};
              D[n] = function() {
                return {
                  next: function() {
                    return { done: F = !0 };
                  }
                };
              }, g(D);
            } catch {
            }
            return F;
          };
        },
        (i, a, t) => {
          var e = t(49), n = t(114), o = t(37), d = o("species");
          i.exports = function(u, g) {
            var P = e(u).constructor, F;
            return P === void 0 || (F = e(P)[d]) == null ? g : n(F);
          };
        },
        (i, a, t) => {
          var e = t(10), n = t(115), o = t(35), d = e.TypeError;
          i.exports = function(u) {
            if (n(u))
              return u;
            throw d(o(u) + " is not a constructor");
          };
        },
        (i, a, t) => {
          var e = t(19), n = t(13), o = t(25), d = t(92), u = t(27), g = t(51), P = function() {
          }, F = [], D = u("Reflect", "construct"), B = /^\s*(?:class|function)\b/, x = e(B.exec), w = !B.exec(P), O = function(W) {
            if (!o(W))
              return !1;
            try {
              return D(P, F, W), !0;
            } catch {
              return !1;
            }
          }, k = function(W) {
            if (!o(W))
              return !1;
            switch (d(W)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            return w || !!x(B, g(W));
          };
          i.exports = !D || n(function() {
            var W;
            return O(O.call) || !O(Object) || !O(function() {
              W = !0;
            }) || W;
          }) ? k : O;
        },
        (i, a, t) => {
          var e = t(10), n = t(117), o = t(88), d = t(25), u = t(42), g = t(13), P = t(76), F = t(118), D = t(46), B = t(119), x = t(120), w = e.setImmediate, O = e.clearImmediate, k = e.process, W = e.Dispatch, R = e.Function, U = e.MessageChannel, v = e.String, c = 0, p = {}, b = "onreadystatechange", m, y, T, M;
          try {
            m = e.location;
          } catch {
          }
          var H = function(K) {
            if (u(p, K)) {
              var oe = p[K];
              delete p[K], oe();
            }
          }, L = function(K) {
            return function() {
              H(K);
            };
          }, Y = function(K) {
            H(K.data);
          }, te = function(K) {
            e.postMessage(v(K), m.protocol + "//" + m.host);
          };
          (!w || !O) && (w = function(oe) {
            var q = F(arguments, 1);
            return p[++c] = function() {
              n(d(oe) ? oe : R(oe), void 0, q);
            }, y(c), c;
          }, O = function(oe) {
            delete p[oe];
          }, x ? y = function(K) {
            k.nextTick(L(K));
          } : W && W.now ? y = function(K) {
            W.now(L(K));
          } : U && !B ? (T = new U(), M = T.port2, T.port1.onmessage = Y, y = o(M.postMessage, M)) : e.addEventListener && d(e.postMessage) && !e.importScripts && m && m.protocol !== "file:" && !g(te) ? (y = te, e.addEventListener("message", Y, !1)) : b in D("script") ? y = function(K) {
            P.appendChild(D("script"))[b] = function() {
              P.removeChild(this), H(K);
            };
          } : y = function(K) {
            setTimeout(L(K), 0);
          }), i.exports = {
            set: w,
            clear: O
          };
        },
        (i) => {
          var a = Function.prototype, t = a.apply, e = a.bind, n = a.call;
          i.exports = typeof Reflect == "object" && Reflect.apply || (e ? n.bind(t) : function() {
            return n.apply(t, arguments);
          });
        },
        (i, a, t) => {
          var e = t(19);
          i.exports = e([].slice);
        },
        (i, a, t) => {
          var e = t(32);
          i.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(e);
        },
        (i, a, t) => {
          var e = t(20), n = t(10);
          i.exports = e(n.process) == "process";
        },
        (i, a, t) => {
          var e = t(10), n = t(88), o = t(11).f, d = t(116).set, u = t(119), g = t(122), P = t(123), F = t(120), D = e.MutationObserver || e.WebKitMutationObserver, B = e.document, x = e.process, w = e.Promise, O = o(e, "queueMicrotask"), k = O && O.value, W, R, U, v, c, p, b, m;
          k || (W = function() {
            var y, T;
            for (F && (y = x.domain) && y.exit(); R; ) {
              T = R.fn, R = R.next;
              try {
                T();
              } catch (M) {
                throw R ? v() : U = void 0, M;
              }
            }
            U = void 0, y && y.enter();
          }, !u && !F && !P && D && B ? (c = !0, p = B.createTextNode(""), new D(W).observe(p, { characterData: !0 }), v = function() {
            p.data = c = !c;
          }) : !g && w && w.resolve ? (b = w.resolve(void 0), b.constructor = w, m = n(b.then, b), v = function() {
            m(W);
          }) : F ? v = function() {
            x.nextTick(W);
          } : (d = n(d, e), v = function() {
            d(W);
          })), i.exports = k || function(y) {
            var T = {
              fn: y,
              next: void 0
            };
            U && (U.next = T), R || (R = T, v()), U = T;
          };
        },
        (i, a, t) => {
          var e = t(32), n = t(10);
          i.exports = /ipad|iphone|ipod/i.test(e) && n.Pebble !== void 0;
        },
        (i, a, t) => {
          var e = t(32);
          i.exports = /web0s(?!.*chrome)/i.test(e);
        },
        (i, a, t) => {
          var e = t(49), n = t(24), o = t(125);
          i.exports = function(d, u) {
            if (e(d), n(u) && u.constructor === d)
              return u;
            var g = o.f(d), P = g.resolve;
            return P(u), g.promise;
          };
        },
        (i, a, t) => {
          var e = t(34), n = function(o) {
            var d, u;
            this.promise = new o(function(g, P) {
              if (d !== void 0 || u !== void 0)
                throw TypeError("Bad Promise constructor");
              d = g, u = P;
            }), this.resolve = e(d), this.reject = e(u);
          };
          i.exports.f = function(o) {
            return new n(o);
          };
        },
        (i, a, t) => {
          var e = t(10);
          i.exports = function(n, o) {
            var d = e.console;
            d && d.error && (arguments.length == 1 ? d.error(n) : d.error(n, o));
          };
        },
        (i) => {
          i.exports = function(a) {
            try {
              return {
                error: !1,
                value: a()
              };
            } catch (t) {
              return {
                error: !0,
                value: t
              };
            }
          };
        },
        (i) => {
          i.exports = typeof window == "object";
        },
        (i, a, t) => {
          var e = t(9), n = t(14), o = t(34), d = t(125), u = t(127), g = t(87);
          e({
            target: "Promise",
            stat: !0
          }, {
            allSettled: function(F) {
              var D = this, B = d.f(D), x = B.resolve, w = B.reject, O = u(function() {
                var k = o(D.resolve), W = [], R = 0, U = 1;
                g(F, function(v) {
                  var c = R++, p = !1;
                  U++, n(k, D, v).then(function(b) {
                    p || (p = !0, W[c] = {
                      status: "fulfilled",
                      value: b
                    }, --U || x(W));
                  }, function(b) {
                    p || (p = !0, W[c] = {
                      status: "rejected",
                      reason: b
                    }, --U || x(W));
                  });
                }), --U || x(W);
              });
              return O.error && w(O.value), B.promise;
            }
          });
        },
        (i, a, t) => {
          var e = t(9), n = t(34), o = t(27), d = t(14), u = t(125), g = t(127), P = t(87), F = "No one promise resolved";
          e({
            target: "Promise",
            stat: !0
          }, {
            any: function(B) {
              var x = this, w = o("AggregateError"), O = u.f(x), k = O.resolve, W = O.reject, R = g(function() {
                var U = n(x.resolve), v = [], c = 0, p = 1, b = !1;
                P(B, function(m) {
                  var y = c++, T = !1;
                  p++, d(U, x, m).then(function(M) {
                    T || b || (b = !0, k(M));
                  }, function(M) {
                    T || b || (T = !0, v[y] = M, --p || W(new w(v, F)));
                  });
                }), --p || W(new w(v, F));
              });
              return R.error && W(R.value), O.promise;
            }
          });
        },
        (i, a, t) => {
          var e = t(9), n = t(39), o = t(108), d = t(13), u = t(27), g = t(25), P = t(113), F = t(124), D = t(50), B = !!o && d(function() {
            o.prototype.finally.call({
              then: function() {
              }
            }, function() {
            });
          });
          if (e({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: B
          }, {
            finally: function(w) {
              var O = P(this, u("Promise")), k = g(w);
              return this.then(k ? function(W) {
                return F(O, w()).then(function() {
                  return W;
                });
              } : w, k ? function(W) {
                return F(O, w()).then(function() {
                  throw W;
                });
              } : w);
            }
          }), !n && g(o)) {
            var x = u("Promise").prototype.finally;
            o.prototype.finally !== x && D(o.prototype, "finally", x, { unsafe: !0 });
          }
        },
        (i, a, t) => {
          var e = t(133).charAt, n = t(103), o = t(52), d = t(78), u = "String Iterator", g = o.set, P = o.getterFor(u);
          d(String, "String", function(F) {
            g(this, {
              type: u,
              string: n(F),
              index: 0
            });
          }, function() {
            var D = P(this), B = D.string, x = D.index, w;
            return x >= B.length ? {
              value: void 0,
              done: !0
            } : (w = e(B, x), D.index += w.length, {
              value: w,
              done: !1
            });
          });
        },
        (i, a, t) => {
          var e = t(19), n = t(63), o = t(103), d = t(21), u = e("".charAt), g = e("".charCodeAt), P = e("".slice), F = function(D) {
            return function(B, x) {
              var w = o(d(B)), O = n(x), k = w.length, W, R;
              return O < 0 || O >= k ? D ? "" : void 0 : (W = g(w, O), W < 55296 || W > 56319 || O + 1 === k || (R = g(w, O + 1)) < 56320 || R > 57343 ? D ? u(w, O) : W : D ? P(w, O, O + 2) : (W - 55296 << 10) + (R - 56320) + 65536);
            };
          };
          i.exports = {
            codeAt: F(!1),
            charAt: F(!0)
          };
        },
        function(i, a) {
          (function(t, e) {
            e(a);
          })(this, function(t) {
            var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol : function(r) {
              return "Symbol(" + r + ")";
            };
            function n() {
            }
            function o() {
              if (typeof self < "u")
                return self;
              if (typeof window < "u")
                return window;
              if (typeof commonjsGlobal < "u")
                return commonjsGlobal;
            }
            var d = o();
            function u(r) {
              return typeof r == "object" && r !== null || typeof r == "function";
            }
            var g = n, P = Promise, F = Promise.prototype.then, D = Promise.resolve.bind(P), B = Promise.reject.bind(P);
            function x(r) {
              return new P(r);
            }
            function w(r) {
              return D(r);
            }
            function O(r) {
              return B(r);
            }
            function k(r, s, E) {
              return F.call(r, s, E);
            }
            function W(r, s, E) {
              k(k(r, s, E), void 0, g);
            }
            function R(r, s) {
              W(r, s);
            }
            function U(r, s) {
              W(r, void 0, s);
            }
            function v(r, s, E) {
              return k(r, s, E);
            }
            function c(r) {
              k(r, void 0, g);
            }
            var p = function() {
              var r = d && d.queueMicrotask;
              if (typeof r == "function")
                return r;
              var s = w(void 0);
              return function(E) {
                return k(s, E);
              };
            }();
            function b(r, s, E) {
              if (typeof r != "function")
                throw new TypeError("Argument is not a function");
              return Function.prototype.apply.call(r, s, E);
            }
            function m(r, s, E) {
              try {
                return w(b(r, s, E));
              } catch (se) {
                return O(se);
              }
            }
            var y = 16384, T = function() {
              function r() {
                this._cursor = 0, this._size = 0, this._front = {
                  _elements: [],
                  _next: void 0
                }, this._back = this._front, this._cursor = 0, this._size = 0;
              }
              return Object.defineProperty(r.prototype, "length", {
                get: function() {
                  return this._size;
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.push = function(s) {
                var E = this._back, se = E;
                E._elements.length === y - 1 && (se = {
                  _elements: [],
                  _next: void 0
                }), E._elements.push(s), se !== E && (this._back = se, E._next = se), ++this._size;
              }, r.prototype.shift = function() {
                var s = this._front, E = s, se = this._cursor, Se = se + 1, we = s._elements, We = we[se];
                return Se === y && (E = s._next, Se = 0), --this._size, this._cursor = Se, s !== E && (this._front = E), we[se] = void 0, We;
              }, r.prototype.forEach = function(s) {
                for (var E = this._cursor, se = this._front, Se = se._elements; (E !== Se.length || se._next !== void 0) && !(E === Se.length && (se = se._next, Se = se._elements, E = 0, Se.length === 0)); )
                  s(Se[E]), ++E;
              }, r.prototype.peek = function() {
                var s = this._front, E = this._cursor;
                return s._elements[E];
              }, r;
            }();
            function M(r, s) {
              r._ownerReadableStream = s, s._reader = r, s._state === "readable" ? te(r) : s._state === "closed" ? oe(r) : K(r, s._storedError);
            }
            function H(r, s) {
              var E = r._ownerReadableStream;
              return Ct(E, s);
            }
            function L(r) {
              r._ownerReadableStream._state === "readable" ? q(r, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : X(r, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), r._ownerReadableStream._reader = void 0, r._ownerReadableStream = void 0;
            }
            function Y(r) {
              return new TypeError("Cannot " + r + " a stream using a released reader");
            }
            function te(r) {
              r._closedPromise = x(function(s, E) {
                r._closedPromise_resolve = s, r._closedPromise_reject = E;
              });
            }
            function K(r, s) {
              te(r), q(r, s);
            }
            function oe(r) {
              te(r), S(r);
            }
            function q(r, s) {
              r._closedPromise_reject !== void 0 && (c(r._closedPromise), r._closedPromise_reject(s), r._closedPromise_resolve = void 0, r._closedPromise_reject = void 0);
            }
            function X(r, s) {
              K(r, s);
            }
            function S(r) {
              r._closedPromise_resolve !== void 0 && (r._closedPromise_resolve(void 0), r._closedPromise_resolve = void 0, r._closedPromise_reject = void 0);
            }
            var h = e("[[AbortSteps]]"), A = e("[[ErrorSteps]]"), C = e("[[CancelSteps]]"), $ = e("[[PullSteps]]"), Z = Number.isFinite || function(r) {
              return typeof r == "number" && isFinite(r);
            }, z = Math.trunc || function(r) {
              return r < 0 ? Math.ceil(r) : Math.floor(r);
            };
            function he(r) {
              return typeof r == "object" || typeof r == "function";
            }
            function _e(r, s) {
              if (r !== void 0 && !he(r))
                throw new TypeError(s + " is not an object.");
            }
            function Te(r, s) {
              if (typeof r != "function")
                throw new TypeError(s + " is not a function.");
            }
            function j(r) {
              return typeof r == "object" && r !== null || typeof r == "function";
            }
            function I(r, s) {
              if (!j(r))
                throw new TypeError(s + " is not an object.");
            }
            function f(r, s, E) {
              if (r === void 0)
                throw new TypeError("Parameter " + s + " is required in '" + E + "'.");
            }
            function l(r, s, E) {
              if (r === void 0)
                throw new TypeError(s + " is required in '" + E + "'.");
            }
            function _(r) {
              return Number(r);
            }
            function N(r) {
              return r === 0 ? 0 : r;
            }
            function G(r) {
              return N(z(r));
            }
            function ee(r, s) {
              var E = 0, se = Number.MAX_SAFE_INTEGER, Se = Number(r);
              if (Se = N(Se), !Z(Se))
                throw new TypeError(s + " is not a finite number");
              if (Se = G(Se), Se < E || Se > se)
                throw new TypeError(s + " is outside the accepted range of " + E + " to " + se + ", inclusive");
              return !Z(Se) || Se === 0 ? 0 : Se;
            }
            function ce(r, s) {
              if (!jt(r))
                throw new TypeError(s + " is not a ReadableStream.");
            }
            function ye(r) {
              return new xe(r);
            }
            function be(r, s) {
              r._reader._readRequests.push(s);
            }
            function me(r, s, E) {
              var se = r._reader, Se = se._readRequests.shift();
              E ? Se._closeSteps() : Se._chunkSteps(s);
            }
            function Pe(r) {
              return r._reader._readRequests.length;
            }
            function Ce(r) {
              var s = r._reader;
              return !(s === void 0 || !Fe(s));
            }
            var xe = function() {
              function r(s) {
                if (f(s, 1, "ReadableStreamDefaultReader"), ce(s, "First parameter"), Bt(s))
                  throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                M(this, s), this._readRequests = new T();
              }
              return Object.defineProperty(r.prototype, "closed", {
                get: function() {
                  return Fe(this) ? this._closedPromise : O(Ue("closed"));
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.cancel = function(s) {
                return s === void 0 && (s = void 0), Fe(this) ? this._ownerReadableStream === void 0 ? O(Y("cancel")) : H(this, s) : O(Ue("cancel"));
              }, r.prototype.read = function() {
                if (!Fe(this))
                  return O(Ue("read"));
                if (this._ownerReadableStream === void 0)
                  return O(Y("read from"));
                var s, E, se = x(function(we, We) {
                  s = we, E = We;
                }), Se = {
                  _chunkSteps: function(we) {
                    return s({
                      value: we,
                      done: !1
                    });
                  },
                  _closeSteps: function() {
                    return s({
                      value: void 0,
                      done: !0
                    });
                  },
                  _errorSteps: function(we) {
                    return E(we);
                  }
                };
                return Me(this, Se), se;
              }, r.prototype.releaseLock = function() {
                if (!Fe(this))
                  throw Ue("releaseLock");
                if (this._ownerReadableStream !== void 0) {
                  if (this._readRequests.length > 0)
                    throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
                  L(this);
                }
              }, r;
            }();
            Object.defineProperties(xe.prototype, {
              cancel: { enumerable: !0 },
              read: { enumerable: !0 },
              releaseLock: { enumerable: !0 },
              closed: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(xe.prototype, e.toStringTag, {
              value: "ReadableStreamDefaultReader",
              configurable: !0
            });
            function Fe(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_readRequests") ? !1 : r instanceof xe;
            }
            function Me(r, s) {
              var E = r._ownerReadableStream;
              E._disturbed = !0, E._state === "closed" ? s._closeSteps() : E._state === "errored" ? s._errorSteps(E._storedError) : E._readableStreamController[$](s);
            }
            function Ue(r) {
              return new TypeError("ReadableStreamDefaultReader.prototype." + r + " can only be used on a ReadableStreamDefaultReader");
            }
            var Ve, de;
            typeof e.asyncIterator == "symbol" && (de = (Ve = {}, Ve[e.asyncIterator] = function() {
              return this;
            }, Ve), Object.defineProperty(de, e.asyncIterator, { enumerable: !1 }));
            var pe = function() {
              function r(s, E) {
                this._ongoingPromise = void 0, this._isFinished = !1, this._reader = s, this._preventCancel = E;
              }
              return r.prototype.next = function() {
                var s = this, E = function() {
                  return s._nextSteps();
                };
                return this._ongoingPromise = this._ongoingPromise ? v(this._ongoingPromise, E, E) : E(), this._ongoingPromise;
              }, r.prototype.return = function(s) {
                var E = this, se = function() {
                  return E._returnSteps(s);
                };
                return this._ongoingPromise ? v(this._ongoingPromise, se, se) : se();
              }, r.prototype._nextSteps = function() {
                var s = this;
                if (this._isFinished)
                  return Promise.resolve({
                    value: void 0,
                    done: !0
                  });
                var E = this._reader;
                if (E._ownerReadableStream === void 0)
                  return O(Y("iterate"));
                var se, Se, we = x(function(qe, tt) {
                  se = qe, Se = tt;
                }), We = {
                  _chunkSteps: function(qe) {
                    s._ongoingPromise = void 0, p(function() {
                      return se({
                        value: qe,
                        done: !1
                      });
                    });
                  },
                  _closeSteps: function() {
                    s._ongoingPromise = void 0, s._isFinished = !0, L(E), se({
                      value: void 0,
                      done: !0
                    });
                  },
                  _errorSteps: function(qe) {
                    s._ongoingPromise = void 0, s._isFinished = !0, L(E), Se(qe);
                  }
                };
                return Me(E, We), we;
              }, r.prototype._returnSteps = function(s) {
                if (this._isFinished)
                  return Promise.resolve({
                    value: s,
                    done: !0
                  });
                this._isFinished = !0;
                var E = this._reader;
                if (E._ownerReadableStream === void 0)
                  return O(Y("finish iterating"));
                if (!this._preventCancel) {
                  var se = H(E, s);
                  return L(E), v(se, function() {
                    return {
                      value: s,
                      done: !0
                    };
                  });
                }
                return L(E), w({
                  value: s,
                  done: !0
                });
              }, r;
            }(), V = {
              next: function() {
                return J(this) ? this._asyncIteratorImpl.next() : O(ue("next"));
              },
              return: function(r) {
                return J(this) ? this._asyncIteratorImpl.return(r) : O(ue("return"));
              }
            };
            de !== void 0 && Object.setPrototypeOf(V, de);
            function re(r, s) {
              var E = ye(r), se = new pe(E, s), Se = Object.create(V);
              return Se._asyncIteratorImpl = se, Se;
            }
            function J(r) {
              if (!u(r) || !Object.prototype.hasOwnProperty.call(r, "_asyncIteratorImpl"))
                return !1;
              try {
                return r._asyncIteratorImpl instanceof pe;
              } catch {
                return !1;
              }
            }
            function ue(r) {
              return new TypeError("ReadableStreamAsyncIterator." + r + " can only be used on a ReadableSteamAsyncIterator");
            }
            var ne = Number.isNaN || function(r) {
              return r !== r;
            };
            function Q(r) {
              return r.slice();
            }
            function ve(r, s, E, se, Se) {
              new Uint8Array(r).set(new Uint8Array(E, se, Se), s);
            }
            function fe(r) {
              return r;
            }
            function Ae(r) {
              return !1;
            }
            function Ee(r, s, E) {
              if (r.slice)
                return r.slice(s, E);
              var se = E - s, Se = new ArrayBuffer(se);
              return ve(Se, 0, r, s, se), Se;
            }
            function De(r) {
              return !(typeof r != "number" || ne(r) || r < 0);
            }
            function Ne(r) {
              var s = Ee(r.buffer, r.byteOffset, r.byteOffset + r.byteLength);
              return new Uint8Array(s);
            }
            function ke(r) {
              var s = r._queue.shift();
              return r._queueTotalSize -= s.size, r._queueTotalSize < 0 && (r._queueTotalSize = 0), s.value;
            }
            function He(r, s, E) {
              if (!De(E) || E === 1 / 0)
                throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
              r._queue.push({
                value: s,
                size: E
              }), r._queueTotalSize += E;
            }
            function Oe(r) {
              var s = r._queue.peek();
              return s.value;
            }
            function Ie(r) {
              r._queue = new T(), r._queueTotalSize = 0;
            }
            var Ge = function() {
              function r() {
                throw new TypeError("Illegal constructor");
              }
              return Object.defineProperty(r.prototype, "view", {
                get: function() {
                  if (!Ze(this))
                    throw Dt("view");
                  return this._view;
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.respond = function(s) {
                if (!Ze(this))
                  throw Dt("respond");
                if (f(s, 1, "respond"), s = ee(s, "First parameter"), this._associatedReadableByteStreamController === void 0)
                  throw new TypeError("This BYOB request has been invalidated");
                Ae(this._view.buffer), ht(this._associatedReadableByteStreamController, s);
              }, r.prototype.respondWithNewView = function(s) {
                if (!Ze(this))
                  throw Dt("respondWithNewView");
                if (f(s, 1, "respondWithNewView"), !ArrayBuffer.isView(s))
                  throw new TypeError("You can only respond with array buffer views");
                if (this._associatedReadableByteStreamController === void 0)
                  throw new TypeError("This BYOB request has been invalidated");
                Ae(s.buffer), At(this._associatedReadableByteStreamController, s);
              }, r;
            }();
            Object.defineProperties(Ge.prototype, {
              respond: { enumerable: !0 },
              respondWithNewView: { enumerable: !0 },
              view: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(Ge.prototype, e.toStringTag, {
              value: "ReadableStreamBYOBRequest",
              configurable: !0
            });
            var Be = function() {
              function r() {
                throw new TypeError("Illegal constructor");
              }
              return Object.defineProperty(r.prototype, "byobRequest", {
                get: function() {
                  if (!Ye(this))
                    throw dt("byobRequest");
                  return Je(this);
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(r.prototype, "desiredSize", {
                get: function() {
                  if (!Ye(this))
                    throw dt("desiredSize");
                  return ft(this);
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.close = function() {
                if (!Ye(this))
                  throw dt("close");
                if (this._closeRequested)
                  throw new TypeError("The stream has already been closed; do not close it again!");
                var s = this._controlledReadableByteStream._state;
                if (s !== "readable")
                  throw new TypeError("The stream (in " + s + " state) is not in the readable state and cannot be closed");
                je(this);
              }, r.prototype.enqueue = function(s) {
                if (!Ye(this))
                  throw dt("enqueue");
                if (f(s, 1, "enqueue"), !ArrayBuffer.isView(s))
                  throw new TypeError("chunk must be an array buffer view");
                if (s.byteLength === 0)
                  throw new TypeError("chunk must have non-zero byteLength");
                if (s.buffer.byteLength === 0)
                  throw new TypeError("chunk's buffer must have non-zero byteLength");
                if (this._closeRequested)
                  throw new TypeError("stream is closed or draining");
                var E = this._controlledReadableByteStream._state;
                if (E !== "readable")
                  throw new TypeError("The stream (in " + E + " state) is not in the readable state and cannot be enqueued to");
                $e(this, s);
              }, r.prototype.error = function(s) {
                if (s === void 0 && (s = void 0), !Ye(this))
                  throw dt("error");
                Ke(this, s);
              }, r.prototype[C] = function(s) {
                lt(this), Ie(this);
                var E = this._cancelAlgorithm(s);
                return ge(this), E;
              }, r.prototype[$] = function(s) {
                var E = this._controlledReadableByteStream;
                if (this._queueTotalSize > 0) {
                  var se = this._queue.shift();
                  this._queueTotalSize -= se.byteLength, Le(this);
                  var Se = new Uint8Array(se.buffer, se.byteOffset, se.byteLength);
                  s._chunkSteps(Se);
                  return;
                }
                var we = this._autoAllocateChunkSize;
                if (we !== void 0) {
                  var We = void 0;
                  try {
                    We = new ArrayBuffer(we);
                  } catch (tt) {
                    s._errorSteps(tt);
                    return;
                  }
                  var qe = {
                    buffer: We,
                    bufferByteLength: we,
                    byteOffset: 0,
                    byteLength: we,
                    bytesFilled: 0,
                    elementSize: 1,
                    viewConstructor: Uint8Array,
                    readerType: "default"
                  };
                  this._pendingPullIntos.push(qe);
                }
                be(E, s), rt(this);
              }, r;
            }();
            Object.defineProperties(Be.prototype, {
              close: { enumerable: !0 },
              enqueue: { enumerable: !0 },
              error: { enumerable: !0 },
              byobRequest: { enumerable: !0 },
              desiredSize: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(Be.prototype, e.toStringTag, {
              value: "ReadableByteStreamController",
              configurable: !0
            });
            function Ye(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_controlledReadableByteStream") ? !1 : r instanceof Be;
            }
            function Ze(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_associatedReadableByteStreamController") ? !1 : r instanceof Ge;
            }
            function rt(r) {
              var s = ie(r);
              if (!!s) {
                if (r._pulling) {
                  r._pullAgain = !0;
                  return;
                }
                r._pulling = !0;
                var E = r._pullAlgorithm();
                W(E, function() {
                  r._pulling = !1, r._pullAgain && (r._pullAgain = !1, rt(r));
                }, function(se) {
                  Ke(r, se);
                });
              }
            }
            function lt(r) {
              ze(r), r._pendingPullIntos = new T();
            }
            function ct(r, s) {
              var E = !1;
              r._state === "closed" && (E = !0);
              var se = _t(s);
              s.readerType === "default" ? me(r, se, E) : nr(r, se, E);
            }
            function _t(r) {
              var s = r.bytesFilled, E = r.elementSize;
              return new r.viewConstructor(r.buffer, r.byteOffset, s / E);
            }
            function St(r, s, E, se) {
              r._queue.push({
                buffer: s,
                byteOffset: E,
                byteLength: se
              }), r._queueTotalSize += se;
            }
            function Pt(r, s) {
              var E = s.elementSize, se = s.bytesFilled - s.bytesFilled % E, Se = Math.min(r._queueTotalSize, s.byteLength - s.bytesFilled), we = s.bytesFilled + Se, We = we - we % E, qe = Se, tt = !1;
              We > se && (qe = We - s.bytesFilled, tt = !0);
              for (var it = r._queue; qe > 0; ) {
                var ot = it.peek(), st = Math.min(qe, ot.byteLength), gt = s.byteOffset + s.bytesFilled;
                ve(s.buffer, gt, ot.buffer, ot.byteOffset, st), ot.byteLength === st ? it.shift() : (ot.byteOffset += st, ot.byteLength -= st), r._queueTotalSize -= st, le(r, st, s), qe -= st;
              }
              return tt;
            }
            function le(r, s, E) {
              E.bytesFilled += s;
            }
            function Le(r) {
              r._queueTotalSize === 0 && r._closeRequested ? (ge(r), cr(r._controlledReadableByteStream)) : rt(r);
            }
            function ze(r) {
              r._byobRequest !== null && (r._byobRequest._associatedReadableByteStreamController = void 0, r._byobRequest._view = null, r._byobRequest = null);
            }
            function Xe(r) {
              for (; r._pendingPullIntos.length > 0; ) {
                if (r._queueTotalSize === 0)
                  return;
                var s = r._pendingPullIntos.peek();
                Pt(r, s) && (Re(r), ct(r._controlledReadableByteStream, s));
              }
            }
            function nt(r, s, E) {
              var se = r._controlledReadableByteStream, Se = 1;
              s.constructor !== DataView && (Se = s.constructor.BYTES_PER_ELEMENT);
              var we = s.constructor, We = s.buffer, qe = {
                buffer: We,
                bufferByteLength: We.byteLength,
                byteOffset: s.byteOffset,
                byteLength: s.byteLength,
                bytesFilled: 0,
                elementSize: Se,
                viewConstructor: we,
                readerType: "byob"
              };
              if (r._pendingPullIntos.length > 0) {
                r._pendingPullIntos.push(qe), $t(se, E);
                return;
              }
              if (se._state === "closed") {
                var tt = new we(qe.buffer, qe.byteOffset, 0);
                E._closeSteps(tt);
                return;
              }
              if (r._queueTotalSize > 0) {
                if (Pt(r, qe)) {
                  var it = _t(qe);
                  Le(r), E._chunkSteps(it);
                  return;
                }
                if (r._closeRequested) {
                  var ot = new TypeError("Insufficient bytes to fill elements in the given buffer");
                  Ke(r, ot), E._errorSteps(ot);
                  return;
                }
              }
              r._pendingPullIntos.push(qe), $t(se, E), rt(r);
            }
            function at(r, s) {
              var E = r._controlledReadableByteStream;
              if (Vt(E))
                for (; Xt(E) > 0; ) {
                  var se = Re(r);
                  ct(E, se);
                }
            }
            function et(r, s, E) {
              if (le(r, s, E), !(E.bytesFilled < E.elementSize)) {
                Re(r);
                var se = E.bytesFilled % E.elementSize;
                if (se > 0) {
                  var Se = E.byteOffset + E.bytesFilled, we = Ee(E.buffer, Se - se, Se);
                  St(r, we, 0, we.byteLength);
                }
                E.bytesFilled -= se, ct(r._controlledReadableByteStream, E), Xe(r);
              }
            }
            function ae(r, s) {
              var E = r._pendingPullIntos.peek();
              ze(r);
              var se = r._controlledReadableByteStream._state;
              se === "closed" ? at(r) : et(r, s, E), rt(r);
            }
            function Re(r) {
              var s = r._pendingPullIntos.shift();
              return s;
            }
            function ie(r) {
              var s = r._controlledReadableByteStream;
              if (s._state !== "readable" || r._closeRequested || !r._started)
                return !1;
              if (Ce(s) && Pe(s) > 0 || Vt(s) && Xt(s) > 0)
                return !0;
              var E = ft(r);
              return E > 0;
            }
            function ge(r) {
              r._pullAlgorithm = void 0, r._cancelAlgorithm = void 0;
            }
            function je(r) {
              var s = r._controlledReadableByteStream;
              if (!(r._closeRequested || s._state !== "readable")) {
                if (r._queueTotalSize > 0) {
                  r._closeRequested = !0;
                  return;
                }
                if (r._pendingPullIntos.length > 0) {
                  var E = r._pendingPullIntos.peek();
                  if (E.bytesFilled > 0) {
                    var se = new TypeError("Insufficient bytes to fill elements in the given buffer");
                    throw Ke(r, se), se;
                  }
                }
                ge(r), cr(s);
              }
            }
            function $e(r, s) {
              var E = r._controlledReadableByteStream;
              if (!(r._closeRequested || E._state !== "readable")) {
                var se = s.buffer, Se = s.byteOffset, we = s.byteLength, We = se;
                if (r._pendingPullIntos.length > 0) {
                  var qe = r._pendingPullIntos.peek();
                  Ae(qe.buffer), qe.buffer = qe.buffer;
                }
                if (ze(r), Ce(E))
                  if (Pe(E) === 0)
                    St(r, We, Se, we);
                  else {
                    r._pendingPullIntos.length > 0 && Re(r);
                    var tt = new Uint8Array(We, Se, we);
                    me(E, tt, !1);
                  }
                else
                  Vt(E) ? (St(r, We, Se, we), Xe(r)) : St(r, We, Se, we);
                rt(r);
              }
            }
            function Ke(r, s) {
              var E = r._controlledReadableByteStream;
              E._state === "readable" && (lt(r), Ie(r), ge(r), bn(E, s));
            }
            function Je(r) {
              if (r._byobRequest === null && r._pendingPullIntos.length > 0) {
                var s = r._pendingPullIntos.peek(), E = new Uint8Array(s.buffer, s.byteOffset + s.bytesFilled, s.byteLength - s.bytesFilled), se = Object.create(Ge.prototype);
                Rt(se, r, E), r._byobRequest = se;
              }
              return r._byobRequest;
            }
            function ft(r) {
              var s = r._controlledReadableByteStream._state;
              return s === "errored" ? null : s === "closed" ? 0 : r._strategyHWM - r._queueTotalSize;
            }
            function ht(r, s) {
              var E = r._pendingPullIntos.peek(), se = r._controlledReadableByteStream._state;
              if (se === "closed") {
                if (s !== 0)
                  throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
              } else {
                if (s === 0)
                  throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                if (E.bytesFilled + s > E.byteLength)
                  throw new RangeError("bytesWritten out of range");
              }
              E.buffer = E.buffer, ae(r, s);
            }
            function At(r, s) {
              var E = r._pendingPullIntos.peek(), se = r._controlledReadableByteStream._state;
              if (se === "closed") {
                if (s.byteLength !== 0)
                  throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
              } else if (s.byteLength === 0)
                throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
              if (E.byteOffset + E.bytesFilled !== s.byteOffset)
                throw new RangeError("The region specified by view does not match byobRequest");
              if (E.bufferByteLength !== s.buffer.byteLength)
                throw new RangeError("The buffer of view has different capacity than byobRequest");
              if (E.bytesFilled + s.byteLength > E.byteLength)
                throw new RangeError("The region specified by view is larger than byobRequest");
              var Se = s.byteLength;
              E.buffer = s.buffer, ae(r, Se);
            }
            function mt(r, s, E, se, Se, we, We) {
              s._controlledReadableByteStream = r, s._pullAgain = !1, s._pulling = !1, s._byobRequest = null, s._queue = s._queueTotalSize = void 0, Ie(s), s._closeRequested = !1, s._started = !1, s._strategyHWM = we, s._pullAlgorithm = se, s._cancelAlgorithm = Se, s._autoAllocateChunkSize = We, s._pendingPullIntos = new T(), r._readableStreamController = s;
              var qe = E();
              W(w(qe), function() {
                s._started = !0, rt(s);
              }, function(tt) {
                Ke(s, tt);
              });
            }
            function Et(r, s, E) {
              var se = Object.create(Be.prototype), Se = function() {
              }, we = function() {
                return w(void 0);
              }, We = function() {
                return w(void 0);
              };
              s.start !== void 0 && (Se = function() {
                return s.start(se);
              }), s.pull !== void 0 && (we = function() {
                return s.pull(se);
              }), s.cancel !== void 0 && (We = function(tt) {
                return s.cancel(tt);
              });
              var qe = s.autoAllocateChunkSize;
              if (qe === 0)
                throw new TypeError("autoAllocateChunkSize must be greater than 0");
              mt(r, se, Se, we, We, E, qe);
            }
            function Rt(r, s, E) {
              r._associatedReadableByteStreamController = s, r._view = E;
            }
            function Dt(r) {
              return new TypeError("ReadableStreamBYOBRequest.prototype." + r + " can only be used on a ReadableStreamBYOBRequest");
            }
            function dt(r) {
              return new TypeError("ReadableByteStreamController.prototype." + r + " can only be used on a ReadableByteStreamController");
            }
            function zt(r) {
              return new kt(r);
            }
            function $t(r, s) {
              r._reader._readIntoRequests.push(s);
            }
            function nr(r, s, E) {
              var se = r._reader, Se = se._readIntoRequests.shift();
              E ? Se._closeSteps(s) : Se._chunkSteps(s);
            }
            function Xt(r) {
              return r._reader._readIntoRequests.length;
            }
            function Vt(r) {
              var s = r._reader;
              return !(s === void 0 || !yt(s));
            }
            var kt = function() {
              function r(s) {
                if (f(s, 1, "ReadableStreamBYOBReader"), ce(s, "First parameter"), Bt(s))
                  throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                if (!Ye(s._readableStreamController))
                  throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
                M(this, s), this._readIntoRequests = new T();
              }
              return Object.defineProperty(r.prototype, "closed", {
                get: function() {
                  return yt(this) ? this._closedPromise : O(hr("closed"));
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.cancel = function(s) {
                return s === void 0 && (s = void 0), yt(this) ? this._ownerReadableStream === void 0 ? O(Y("cancel")) : H(this, s) : O(hr("cancel"));
              }, r.prototype.read = function(s) {
                if (!yt(this))
                  return O(hr("read"));
                if (!ArrayBuffer.isView(s))
                  return O(new TypeError("view must be an array buffer view"));
                if (s.byteLength === 0)
                  return O(new TypeError("view must have non-zero byteLength"));
                if (s.buffer.byteLength === 0)
                  return O(new TypeError("view's buffer must have non-zero byteLength"));
                if (Ae(s.buffer), this._ownerReadableStream === void 0)
                  return O(Y("read from"));
                var E, se, Se = x(function(We, qe) {
                  E = We, se = qe;
                }), we = {
                  _chunkSteps: function(We) {
                    return E({
                      value: We,
                      done: !1
                    });
                  },
                  _closeSteps: function(We) {
                    return E({
                      value: We,
                      done: !0
                    });
                  },
                  _errorSteps: function(We) {
                    return se(We);
                  }
                };
                return Lt(this, s, we), Se;
              }, r.prototype.releaseLock = function() {
                if (!yt(this))
                  throw hr("releaseLock");
                if (this._ownerReadableStream !== void 0) {
                  if (this._readIntoRequests.length > 0)
                    throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
                  L(this);
                }
              }, r;
            }();
            Object.defineProperties(kt.prototype, {
              cancel: { enumerable: !0 },
              read: { enumerable: !0 },
              releaseLock: { enumerable: !0 },
              closed: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(kt.prototype, e.toStringTag, {
              value: "ReadableStreamBYOBReader",
              configurable: !0
            });
            function yt(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_readIntoRequests") ? !1 : r instanceof kt;
            }
            function Lt(r, s, E) {
              var se = r._ownerReadableStream;
              se._disturbed = !0, se._state === "errored" ? E._errorSteps(se._storedError) : nt(se._readableStreamController, s, E);
            }
            function hr(r) {
              return new TypeError("ReadableStreamBYOBReader.prototype." + r + " can only be used on a ReadableStreamBYOBReader");
            }
            function ar(r, s) {
              var E = r.highWaterMark;
              if (E === void 0)
                return s;
              if (ne(E) || E < 0)
                throw new RangeError("Invalid highWaterMark");
              return E;
            }
            function pr(r) {
              var s = r.size;
              return s || function() {
                return 1;
              };
            }
            function vr(r, s) {
              _e(r, s);
              var E = r == null ? void 0 : r.highWaterMark, se = r == null ? void 0 : r.size;
              return {
                highWaterMark: E === void 0 ? void 0 : _(E),
                size: se === void 0 ? void 0 : Fn(se, s + " has member 'size' that")
              };
            }
            function Fn(r, s) {
              return Te(r, s), function(E) {
                return _(r(E));
              };
            }
            function Mn(r, s) {
              _e(r, s);
              var E = r == null ? void 0 : r.abort, se = r == null ? void 0 : r.close, Se = r == null ? void 0 : r.start, we = r == null ? void 0 : r.type, We = r == null ? void 0 : r.write;
              return {
                abort: E === void 0 ? void 0 : Dn(E, r, s + " has member 'abort' that"),
                close: se === void 0 ? void 0 : Ln(se, r, s + " has member 'close' that"),
                start: Se === void 0 ? void 0 : Nn(Se, r, s + " has member 'start' that"),
                write: We === void 0 ? void 0 : Wn(We, r, s + " has member 'write' that"),
                type: we
              };
            }
            function Dn(r, s, E) {
              return Te(r, E), function(se) {
                return m(r, s, [se]);
              };
            }
            function Ln(r, s, E) {
              return Te(r, E), function() {
                return m(r, s, []);
              };
            }
            function Nn(r, s, E) {
              return Te(r, E), function(se) {
                return b(r, s, [se]);
              };
            }
            function Wn(r, s, E) {
              return Te(r, E), function(se, Se) {
                return m(r, s, [
                  se,
                  Se
                ]);
              };
            }
            function Kr(r, s) {
              if (!Kt(r))
                throw new TypeError(s + " is not a WritableStream.");
            }
            function jn(r) {
              if (typeof r != "object" || r === null)
                return !1;
              try {
                return typeof r.aborted == "boolean";
              } catch {
                return !1;
              }
            }
            var Bn = typeof AbortController == "function";
            function Un() {
              if (Bn)
                return new AbortController();
            }
            var ir = function() {
              function r(s, E) {
                s === void 0 && (s = {}), E === void 0 && (E = {}), s === void 0 ? s = null : I(s, "First parameter");
                var se = vr(E, "Second parameter"), Se = Mn(s, "First parameter");
                Qr(this);
                var we = Se.type;
                if (we !== void 0)
                  throw new RangeError("Invalid type is specified");
                var We = pr(se), qe = ar(se, 1);
                ta(this, Se, qe, We);
              }
              return Object.defineProperty(r.prototype, "locked", {
                get: function() {
                  if (!Kt(this))
                    throw Sr("locked");
                  return Jt(this);
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.abort = function(s) {
                return s === void 0 && (s = void 0), Kt(this) ? Jt(this) ? O(new TypeError("Cannot abort a stream that already has a writer")) : yr(this, s) : O(Sr("abort"));
              }, r.prototype.close = function() {
                return Kt(this) ? Jt(this) ? O(new TypeError("Cannot close a stream that already has a writer")) : xt(this) ? O(new TypeError("Cannot close an already-closing stream")) : Zr(this) : O(Sr("close"));
              }, r.prototype.getWriter = function() {
                if (!Kt(this))
                  throw Sr("getWriter");
                return Jr(this);
              }, r;
            }();
            Object.defineProperties(ir.prototype, {
              abort: { enumerable: !0 },
              close: { enumerable: !0 },
              getWriter: { enumerable: !0 },
              locked: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(ir.prototype, e.toStringTag, {
              value: "WritableStream",
              configurable: !0
            });
            function Jr(r) {
              return new or(r);
            }
            function Gn(r, s, E, se, Se, we) {
              Se === void 0 && (Se = 1), we === void 0 && (we = function() {
                return 1;
              });
              var We = Object.create(ir.prototype);
              Qr(We);
              var qe = Object.create(Qt.prototype);
              return on(We, qe, r, s, E, se, Se, we), We;
            }
            function Qr(r) {
              r._state = "writable", r._storedError = void 0, r._writer = void 0, r._writableStreamController = void 0, r._writeRequests = new T(), r._inFlightWriteRequest = void 0, r._closeRequest = void 0, r._inFlightCloseRequest = void 0, r._pendingAbortRequest = void 0, r._backpressure = !1;
            }
            function Kt(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_writableStreamController") ? !1 : r instanceof ir;
            }
            function Jt(r) {
              return r._writer !== void 0;
            }
            function yr(r, s) {
              var E;
              if (r._state === "closed" || r._state === "errored")
                return w(void 0);
              r._writableStreamController._abortReason = s, (E = r._writableStreamController._abortController) === null || E === void 0 || E.abort();
              var se = r._state;
              if (se === "closed" || se === "errored")
                return w(void 0);
              if (r._pendingAbortRequest !== void 0)
                return r._pendingAbortRequest._promise;
              var Se = !1;
              se === "erroring" && (Se = !0, s = void 0);
              var we = x(function(We, qe) {
                r._pendingAbortRequest = {
                  _promise: void 0,
                  _resolve: We,
                  _reject: qe,
                  _reason: s,
                  _wasAlreadyErroring: Se
                };
              });
              return r._pendingAbortRequest._promise = we, Se || Lr(r, s), we;
            }
            function Zr(r) {
              var s = r._state;
              if (s === "closed" || s === "errored")
                return O(new TypeError("The stream (in " + s + " state) is not in the writable state and cannot be closed"));
              var E = x(function(Se, we) {
                var We = {
                  _resolve: Se,
                  _reject: we
                };
                r._closeRequest = We;
              }), se = r._writer;
              return se !== void 0 && r._backpressure && s === "writable" && Vr(se), ra(r._writableStreamController), E;
            }
            function zn(r) {
              var s = x(function(E, se) {
                var Se = {
                  _resolve: E,
                  _reject: se
                };
                r._writeRequests.push(Se);
              });
              return s;
            }
            function Dr(r, s) {
              var E = r._state;
              if (E === "writable") {
                Lr(r, s);
                return;
              }
              Nr(r);
            }
            function Lr(r, s) {
              var E = r._writableStreamController;
              r._state = "erroring", r._storedError = s;
              var se = r._writer;
              se !== void 0 && tn(se, s), !Yn(r) && E._started && Nr(r);
            }
            function Nr(r) {
              r._state = "errored", r._writableStreamController[A]();
              var s = r._storedError;
              if (r._writeRequests.forEach(function(Se) {
                Se._reject(s);
              }), r._writeRequests = new T(), r._pendingAbortRequest === void 0) {
                gr(r);
                return;
              }
              var E = r._pendingAbortRequest;
              if (r._pendingAbortRequest = void 0, E._wasAlreadyErroring) {
                E._reject(s), gr(r);
                return;
              }
              var se = r._writableStreamController[h](E._reason);
              W(se, function() {
                E._resolve(), gr(r);
              }, function(Se) {
                E._reject(Se), gr(r);
              });
            }
            function $n(r) {
              r._inFlightWriteRequest._resolve(void 0), r._inFlightWriteRequest = void 0;
            }
            function Vn(r, s) {
              r._inFlightWriteRequest._reject(s), r._inFlightWriteRequest = void 0, Dr(r, s);
            }
            function Hn(r) {
              r._inFlightCloseRequest._resolve(void 0), r._inFlightCloseRequest = void 0;
              var s = r._state;
              s === "erroring" && (r._storedError = void 0, r._pendingAbortRequest !== void 0 && (r._pendingAbortRequest._resolve(), r._pendingAbortRequest = void 0)), r._state = "closed";
              var E = r._writer;
              E !== void 0 && cn(E);
            }
            function qn(r, s) {
              r._inFlightCloseRequest._reject(s), r._inFlightCloseRequest = void 0, r._pendingAbortRequest !== void 0 && (r._pendingAbortRequest._reject(s), r._pendingAbortRequest = void 0), Dr(r, s);
            }
            function xt(r) {
              return !(r._closeRequest === void 0 && r._inFlightCloseRequest === void 0);
            }
            function Yn(r) {
              return !(r._inFlightWriteRequest === void 0 && r._inFlightCloseRequest === void 0);
            }
            function Xn(r) {
              r._inFlightCloseRequest = r._closeRequest, r._closeRequest = void 0;
            }
            function Kn(r) {
              r._inFlightWriteRequest = r._writeRequests.shift();
            }
            function gr(r) {
              r._closeRequest !== void 0 && (r._closeRequest._reject(r._storedError), r._closeRequest = void 0);
              var s = r._writer;
              s !== void 0 && zr(s, r._storedError);
            }
            function Wr(r, s) {
              var E = r._writer;
              E !== void 0 && s !== r._backpressure && (s ? la(E) : Vr(E)), r._backpressure = s;
            }
            var or = function() {
              function r(s) {
                if (f(s, 1, "WritableStreamDefaultWriter"), Kr(s, "First parameter"), Jt(s))
                  throw new TypeError("This stream has already been locked for exclusive writing by another writer");
                this._ownerWritableStream = s, s._writer = this;
                var E = s._state;
                if (E === "writable")
                  !xt(s) && s._backpressure ? Ar(this) : fn(this), _r(this);
                else if (E === "erroring")
                  $r(this, s._storedError), _r(this);
                else if (E === "closed")
                  fn(this), sa(this);
                else {
                  var se = s._storedError;
                  $r(this, se), ln(this, se);
                }
              }
              return Object.defineProperty(r.prototype, "closed", {
                get: function() {
                  return Ht(this) ? this._closedPromise : O(qt("closed"));
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(r.prototype, "desiredSize", {
                get: function() {
                  if (!Ht(this))
                    throw qt("desiredSize");
                  if (this._ownerWritableStream === void 0)
                    throw sr("desiredSize");
                  return ea(this);
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(r.prototype, "ready", {
                get: function() {
                  return Ht(this) ? this._readyPromise : O(qt("ready"));
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.abort = function(s) {
                return s === void 0 && (s = void 0), Ht(this) ? this._ownerWritableStream === void 0 ? O(sr("abort")) : Jn(this, s) : O(qt("abort"));
              }, r.prototype.close = function() {
                if (!Ht(this))
                  return O(qt("close"));
                var s = this._ownerWritableStream;
                return s === void 0 ? O(sr("close")) : xt(s) ? O(new TypeError("Cannot close an already-closing stream")) : en(this);
              }, r.prototype.releaseLock = function() {
                if (!Ht(this))
                  throw qt("releaseLock");
                var s = this._ownerWritableStream;
                s !== void 0 && rn(this);
              }, r.prototype.write = function(s) {
                return s === void 0 && (s = void 0), Ht(this) ? this._ownerWritableStream === void 0 ? O(sr("write to")) : nn(this, s) : O(qt("write"));
              }, r;
            }();
            Object.defineProperties(or.prototype, {
              abort: { enumerable: !0 },
              close: { enumerable: !0 },
              releaseLock: { enumerable: !0 },
              write: { enumerable: !0 },
              closed: { enumerable: !0 },
              desiredSize: { enumerable: !0 },
              ready: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(or.prototype, e.toStringTag, {
              value: "WritableStreamDefaultWriter",
              configurable: !0
            });
            function Ht(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_ownerWritableStream") ? !1 : r instanceof or;
            }
            function Jn(r, s) {
              var E = r._ownerWritableStream;
              return yr(E, s);
            }
            function en(r) {
              var s = r._ownerWritableStream;
              return Zr(s);
            }
            function Qn(r) {
              var s = r._ownerWritableStream, E = s._state;
              return xt(s) || E === "closed" ? w(void 0) : E === "errored" ? O(s._storedError) : en(r);
            }
            function Zn(r, s) {
              r._closedPromiseState === "pending" ? zr(r, s) : ua(r, s);
            }
            function tn(r, s) {
              r._readyPromiseState === "pending" ? dn(r, s) : ca(r, s);
            }
            function ea(r) {
              var s = r._ownerWritableStream, E = s._state;
              return E === "errored" || E === "erroring" ? null : E === "closed" ? 0 : sn(s._writableStreamController);
            }
            function rn(r) {
              var s = r._ownerWritableStream, E = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
              tn(r, E), Zn(r, E), s._writer = void 0, r._ownerWritableStream = void 0;
            }
            function nn(r, s) {
              var E = r._ownerWritableStream, se = E._writableStreamController, Se = na(se, s);
              if (E !== r._ownerWritableStream)
                return O(sr("write to"));
              var we = E._state;
              if (we === "errored")
                return O(E._storedError);
              if (xt(E) || we === "closed")
                return O(new TypeError("The stream is closing or closed and cannot be written to"));
              if (we === "erroring")
                return O(E._storedError);
              var We = zn(E);
              return aa(se, s, Se), We;
            }
            var an = {}, Qt = function() {
              function r() {
                throw new TypeError("Illegal constructor");
              }
              return Object.defineProperty(r.prototype, "abortReason", {
                get: function() {
                  if (!jr(this))
                    throw Gr("abortReason");
                  return this._abortReason;
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(r.prototype, "signal", {
                get: function() {
                  if (!jr(this))
                    throw Gr("signal");
                  if (this._abortController === void 0)
                    throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
                  return this._abortController.signal;
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.error = function(s) {
                if (s === void 0 && (s = void 0), !jr(this))
                  throw Gr("error");
                var E = this._controlledWritableStream._state;
                E === "writable" && un(this, s);
              }, r.prototype[h] = function(s) {
                var E = this._abortAlgorithm(s);
                return mr(this), E;
              }, r.prototype[A] = function() {
                Ie(this);
              }, r;
            }();
            Object.defineProperties(Qt.prototype, {
              abortReason: { enumerable: !0 },
              signal: { enumerable: !0 },
              error: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(Qt.prototype, e.toStringTag, {
              value: "WritableStreamDefaultController",
              configurable: !0
            });
            function jr(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_controlledWritableStream") ? !1 : r instanceof Qt;
            }
            function on(r, s, E, se, Se, we, We, qe) {
              s._controlledWritableStream = r, r._writableStreamController = s, s._queue = void 0, s._queueTotalSize = void 0, Ie(s), s._abortReason = void 0, s._abortController = Un(), s._started = !1, s._strategySizeAlgorithm = qe, s._strategyHWM = We, s._writeAlgorithm = se, s._closeAlgorithm = Se, s._abortAlgorithm = we;
              var tt = Ur(s);
              Wr(r, tt);
              var it = E(), ot = w(it);
              W(ot, function() {
                s._started = !0, br(s);
              }, function(st) {
                s._started = !0, Dr(r, st);
              });
            }
            function ta(r, s, E, se) {
              var Se = Object.create(Qt.prototype), we = function() {
              }, We = function() {
                return w(void 0);
              }, qe = function() {
                return w(void 0);
              }, tt = function() {
                return w(void 0);
              };
              s.start !== void 0 && (we = function() {
                return s.start(Se);
              }), s.write !== void 0 && (We = function(it) {
                return s.write(it, Se);
              }), s.close !== void 0 && (qe = function() {
                return s.close();
              }), s.abort !== void 0 && (tt = function(it) {
                return s.abort(it);
              }), on(r, Se, we, We, qe, tt, E, se);
            }
            function mr(r) {
              r._writeAlgorithm = void 0, r._closeAlgorithm = void 0, r._abortAlgorithm = void 0, r._strategySizeAlgorithm = void 0;
            }
            function ra(r) {
              He(r, an, 0), br(r);
            }
            function na(r, s) {
              try {
                return r._strategySizeAlgorithm(s);
              } catch (E) {
                return Br(r, E), 1;
              }
            }
            function sn(r) {
              return r._strategyHWM - r._queueTotalSize;
            }
            function aa(r, s, E) {
              try {
                He(r, s, E);
              } catch (we) {
                Br(r, we);
                return;
              }
              var se = r._controlledWritableStream;
              if (!xt(se) && se._state === "writable") {
                var Se = Ur(r);
                Wr(se, Se);
              }
              br(r);
            }
            function br(r) {
              var s = r._controlledWritableStream;
              if (!!r._started && s._inFlightWriteRequest === void 0) {
                var E = s._state;
                if (E === "erroring") {
                  Nr(s);
                  return;
                }
                if (r._queue.length !== 0) {
                  var se = Oe(r);
                  se === an ? ia(r) : oa(r, se);
                }
              }
            }
            function Br(r, s) {
              r._controlledWritableStream._state === "writable" && un(r, s);
            }
            function ia(r) {
              var s = r._controlledWritableStream;
              Xn(s), ke(r);
              var E = r._closeAlgorithm();
              mr(r), W(E, function() {
                Hn(s);
              }, function(se) {
                qn(s, se);
              });
            }
            function oa(r, s) {
              var E = r._controlledWritableStream;
              Kn(E);
              var se = r._writeAlgorithm(s);
              W(se, function() {
                $n(E);
                var Se = E._state;
                if (ke(r), !xt(E) && Se === "writable") {
                  var we = Ur(r);
                  Wr(E, we);
                }
                br(r);
              }, function(Se) {
                E._state === "writable" && mr(r), Vn(E, Se);
              });
            }
            function Ur(r) {
              var s = sn(r);
              return s <= 0;
            }
            function un(r, s) {
              var E = r._controlledWritableStream;
              mr(r), Lr(E, s);
            }
            function Sr(r) {
              return new TypeError("WritableStream.prototype." + r + " can only be used on a WritableStream");
            }
            function Gr(r) {
              return new TypeError("WritableStreamDefaultController.prototype." + r + " can only be used on a WritableStreamDefaultController");
            }
            function qt(r) {
              return new TypeError("WritableStreamDefaultWriter.prototype." + r + " can only be used on a WritableStreamDefaultWriter");
            }
            function sr(r) {
              return new TypeError("Cannot " + r + " a stream using a released writer");
            }
            function _r(r) {
              r._closedPromise = x(function(s, E) {
                r._closedPromise_resolve = s, r._closedPromise_reject = E, r._closedPromiseState = "pending";
              });
            }
            function ln(r, s) {
              _r(r), zr(r, s);
            }
            function sa(r) {
              _r(r), cn(r);
            }
            function zr(r, s) {
              r._closedPromise_reject !== void 0 && (c(r._closedPromise), r._closedPromise_reject(s), r._closedPromise_resolve = void 0, r._closedPromise_reject = void 0, r._closedPromiseState = "rejected");
            }
            function ua(r, s) {
              ln(r, s);
            }
            function cn(r) {
              r._closedPromise_resolve !== void 0 && (r._closedPromise_resolve(void 0), r._closedPromise_resolve = void 0, r._closedPromise_reject = void 0, r._closedPromiseState = "resolved");
            }
            function Ar(r) {
              r._readyPromise = x(function(s, E) {
                r._readyPromise_resolve = s, r._readyPromise_reject = E;
              }), r._readyPromiseState = "pending";
            }
            function $r(r, s) {
              Ar(r), dn(r, s);
            }
            function fn(r) {
              Ar(r), Vr(r);
            }
            function dn(r, s) {
              r._readyPromise_reject !== void 0 && (c(r._readyPromise), r._readyPromise_reject(s), r._readyPromise_resolve = void 0, r._readyPromise_reject = void 0, r._readyPromiseState = "rejected");
            }
            function la(r) {
              Ar(r);
            }
            function ca(r, s) {
              $r(r, s);
            }
            function Vr(r) {
              r._readyPromise_resolve !== void 0 && (r._readyPromise_resolve(void 0), r._readyPromise_resolve = void 0, r._readyPromise_reject = void 0, r._readyPromiseState = "fulfilled");
            }
            var hn = typeof DOMException < "u" ? DOMException : void 0;
            function fa(r) {
              if (!(typeof r == "function" || typeof r == "object"))
                return !1;
              try {
                return new r(), !0;
              } catch {
                return !1;
              }
            }
            function da() {
              var r = function(E, se) {
                this.message = E || "", this.name = se || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
              };
              return r.prototype = Object.create(Error.prototype), Object.defineProperty(r.prototype, "constructor", {
                value: r,
                writable: !0,
                configurable: !0
              }), r;
            }
            var ha = fa(hn) ? hn : da();
            function pn(r, s, E, se, Se, we) {
              var We = ye(r), qe = Jr(s);
              r._disturbed = !0;
              var tt = !1, it = w(void 0);
              return x(function(ot, st) {
                var gt;
                if (we !== void 0) {
                  if (gt = function() {
                    var Qe = new ha("Aborted", "AbortError"), ut = [];
                    se || ut.push(function() {
                      return s._state === "writable" ? yr(s, Qe) : w(void 0);
                    }), Se || ut.push(function() {
                      return r._state === "readable" ? Ct(r, Qe) : w(void 0);
                    }), Tt(function() {
                      return Promise.all(ut.map(function(vt) {
                        return vt();
                      }));
                    }, !0, Qe);
                  }, we.aborted) {
                    gt();
                    return;
                  }
                  we.addEventListener("abort", gt);
                }
                function wt() {
                  return x(function(Qe, ut) {
                    function vt(Ft) {
                      Ft ? Qe() : k(tr(), vt, ut);
                    }
                    vt(!1);
                  });
                }
                function tr() {
                  return tt ? w(!0) : k(qe._readyPromise, function() {
                    return x(function(Qe, ut) {
                      Me(We, {
                        _chunkSteps: function(vt) {
                          it = k(nn(qe, vt), void 0, n), Qe(!1);
                        },
                        _closeSteps: function() {
                          return Qe(!0);
                        },
                        _errorSteps: ut
                      });
                    });
                  });
                }
                if (bt(r, We._closedPromise, function(Qe) {
                  se ? Mt(!0, Qe) : Tt(function() {
                    return yr(s, Qe);
                  }, !0, Qe);
                }), bt(s, qe._closedPromise, function(Qe) {
                  Se ? Mt(!0, Qe) : Tt(function() {
                    return Ct(r, Qe);
                  }, !0, Qe);
                }), It(r, We._closedPromise, function() {
                  E ? Mt() : Tt(function() {
                    return Qn(qe);
                  });
                }), xt(s) || s._state === "closed") {
                  var Ut = new TypeError("the destination writable stream closed before all data could be piped to it");
                  Se ? Mt(!0, Ut) : Tt(function() {
                    return Ct(r, Ut);
                  }, !0, Ut);
                }
                c(wt());
                function Ot() {
                  var Qe = it;
                  return k(it, function() {
                    return Qe !== it ? Ot() : void 0;
                  });
                }
                function bt(Qe, ut, vt) {
                  Qe._state === "errored" ? vt(Qe._storedError) : U(ut, vt);
                }
                function It(Qe, ut, vt) {
                  Qe._state === "closed" ? vt() : R(ut, vt);
                }
                function Tt(Qe, ut, vt) {
                  if (tt)
                    return;
                  tt = !0, s._state === "writable" && !xt(s) ? R(Ot(), Ft) : Ft();
                  function Ft() {
                    W(Qe(), function() {
                      return pt(ut, vt);
                    }, function(Gt) {
                      return pt(!0, Gt);
                    });
                  }
                }
                function Mt(Qe, ut) {
                  tt || (tt = !0, s._state === "writable" && !xt(s) ? R(Ot(), function() {
                    return pt(Qe, ut);
                  }) : pt(Qe, ut));
                }
                function pt(Qe, ut) {
                  rn(qe), L(We), we !== void 0 && we.removeEventListener("abort", gt), Qe ? st(ut) : ot(void 0);
                }
              });
            }
            var Zt = function() {
              function r() {
                throw new TypeError("Illegal constructor");
              }
              return Object.defineProperty(r.prototype, "desiredSize", {
                get: function() {
                  if (!Tr(this))
                    throw kr("desiredSize");
                  return Hr(this);
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.close = function() {
                if (!Tr(this))
                  throw kr("close");
                if (!er(this))
                  throw new TypeError("The stream is not in a state that permits close");
                lr(this);
              }, r.prototype.enqueue = function(s) {
                if (s === void 0 && (s = void 0), !Tr(this))
                  throw kr("enqueue");
                if (!er(this))
                  throw new TypeError("The stream is not in a state that permits enqueue");
                return Pr(this, s);
              }, r.prototype.error = function(s) {
                if (s === void 0 && (s = void 0), !Tr(this))
                  throw kr("error");
                Nt(this, s);
              }, r.prototype[C] = function(s) {
                Ie(this);
                var E = this._cancelAlgorithm(s);
                return Rr(this), E;
              }, r.prototype[$] = function(s) {
                var E = this._controlledReadableStream;
                if (this._queue.length > 0) {
                  var se = ke(this);
                  this._closeRequested && this._queue.length === 0 ? (Rr(this), cr(E)) : ur(this), s._chunkSteps(se);
                } else
                  be(E, s), ur(this);
              }, r;
            }();
            Object.defineProperties(Zt.prototype, {
              close: { enumerable: !0 },
              enqueue: { enumerable: !0 },
              error: { enumerable: !0 },
              desiredSize: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(Zt.prototype, e.toStringTag, {
              value: "ReadableStreamDefaultController",
              configurable: !0
            });
            function Tr(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_controlledReadableStream") ? !1 : r instanceof Zt;
            }
            function ur(r) {
              var s = vn(r);
              if (!!s) {
                if (r._pulling) {
                  r._pullAgain = !0;
                  return;
                }
                r._pulling = !0;
                var E = r._pullAlgorithm();
                W(E, function() {
                  r._pulling = !1, r._pullAgain && (r._pullAgain = !1, ur(r));
                }, function(se) {
                  Nt(r, se);
                });
              }
            }
            function vn(r) {
              var s = r._controlledReadableStream;
              if (!er(r) || !r._started)
                return !1;
              if (Bt(s) && Pe(s) > 0)
                return !0;
              var E = Hr(r);
              return E > 0;
            }
            function Rr(r) {
              r._pullAlgorithm = void 0, r._cancelAlgorithm = void 0, r._strategySizeAlgorithm = void 0;
            }
            function lr(r) {
              if (!!er(r)) {
                var s = r._controlledReadableStream;
                r._closeRequested = !0, r._queue.length === 0 && (Rr(r), cr(s));
              }
            }
            function Pr(r, s) {
              if (!!er(r)) {
                var E = r._controlledReadableStream;
                if (Bt(E) && Pe(E) > 0)
                  me(E, s, !1);
                else {
                  var se = void 0;
                  try {
                    se = r._strategySizeAlgorithm(s);
                  } catch (Se) {
                    throw Nt(r, Se), Se;
                  }
                  try {
                    He(r, s, se);
                  } catch (Se) {
                    throw Nt(r, Se), Se;
                  }
                }
                ur(r);
              }
            }
            function Nt(r, s) {
              var E = r._controlledReadableStream;
              E._state === "readable" && (Ie(r), Rr(r), bn(E, s));
            }
            function Hr(r) {
              var s = r._controlledReadableStream._state;
              return s === "errored" ? null : s === "closed" ? 0 : r._strategyHWM - r._queueTotalSize;
            }
            function pa(r) {
              return !vn(r);
            }
            function er(r) {
              var s = r._controlledReadableStream._state;
              return !r._closeRequested && s === "readable";
            }
            function yn(r, s, E, se, Se, we, We) {
              s._controlledReadableStream = r, s._queue = void 0, s._queueTotalSize = void 0, Ie(s), s._started = !1, s._closeRequested = !1, s._pullAgain = !1, s._pulling = !1, s._strategySizeAlgorithm = We, s._strategyHWM = we, s._pullAlgorithm = se, s._cancelAlgorithm = Se, r._readableStreamController = s;
              var qe = E();
              W(w(qe), function() {
                s._started = !0, ur(s);
              }, function(tt) {
                Nt(s, tt);
              });
            }
            function va(r, s, E, se) {
              var Se = Object.create(Zt.prototype), we = function() {
              }, We = function() {
                return w(void 0);
              }, qe = function() {
                return w(void 0);
              };
              s.start !== void 0 && (we = function() {
                return s.start(Se);
              }), s.pull !== void 0 && (We = function() {
                return s.pull(Se);
              }), s.cancel !== void 0 && (qe = function(tt) {
                return s.cancel(tt);
              }), yn(r, Se, we, We, qe, E, se);
            }
            function kr(r) {
              return new TypeError("ReadableStreamDefaultController.prototype." + r + " can only be used on a ReadableStreamDefaultController");
            }
            function ya(r, s) {
              return Ye(r._readableStreamController) ? ma(r) : ga(r);
            }
            function ga(r, s) {
              var E = ye(r), se = !1, Se = !1, we = !1, We = !1, qe, tt, it, ot, st, gt = x(function(bt) {
                st = bt;
              });
              function wt() {
                if (se)
                  return Se = !0, w(void 0);
                se = !0;
                var bt = {
                  _chunkSteps: function(It) {
                    p(function() {
                      Se = !1;
                      var Tt = It, Mt = It;
                      we || Pr(it._readableStreamController, Tt), We || Pr(ot._readableStreamController, Mt), se = !1, Se && wt();
                    });
                  },
                  _closeSteps: function() {
                    se = !1, we || lr(it._readableStreamController), We || lr(ot._readableStreamController), (!we || !We) && st(void 0);
                  },
                  _errorSteps: function() {
                    se = !1;
                  }
                };
                return Me(E, bt), w(void 0);
              }
              function tr(bt) {
                if (we = !0, qe = bt, We) {
                  var It = Q([
                    qe,
                    tt
                  ]), Tt = Ct(r, It);
                  st(Tt);
                }
                return gt;
              }
              function Ut(bt) {
                if (We = !0, tt = bt, we) {
                  var It = Q([
                    qe,
                    tt
                  ]), Tt = Ct(r, It);
                  st(Tt);
                }
                return gt;
              }
              function Ot() {
              }
              return it = qr(Ot, wt, tr), ot = qr(Ot, wt, Ut), U(E._closedPromise, function(bt) {
                Nt(it._readableStreamController, bt), Nt(ot._readableStreamController, bt), (!we || !We) && st(void 0);
              }), [
                it,
                ot
              ];
            }
            function ma(r) {
              var s = ye(r), E = !1, se = !1, Se = !1, we = !1, We = !1, qe, tt, it, ot, st, gt = x(function(pt) {
                st = pt;
              });
              function wt(pt) {
                U(pt._closedPromise, function(Qe) {
                  pt === s && (Ke(it._readableStreamController, Qe), Ke(ot._readableStreamController, Qe), (!we || !We) && st(void 0));
                });
              }
              function tr() {
                yt(s) && (L(s), s = ye(r), wt(s));
                var pt = {
                  _chunkSteps: function(Qe) {
                    p(function() {
                      se = !1, Se = !1;
                      var ut = Qe, vt = Qe;
                      if (!we && !We)
                        try {
                          vt = Ne(Qe);
                        } catch (Ft) {
                          Ke(it._readableStreamController, Ft), Ke(ot._readableStreamController, Ft), st(Ct(r, Ft));
                          return;
                        }
                      we || $e(it._readableStreamController, ut), We || $e(ot._readableStreamController, vt), E = !1, se ? Ot() : Se && bt();
                    });
                  },
                  _closeSteps: function() {
                    E = !1, we || je(it._readableStreamController), We || je(ot._readableStreamController), it._readableStreamController._pendingPullIntos.length > 0 && ht(it._readableStreamController, 0), ot._readableStreamController._pendingPullIntos.length > 0 && ht(ot._readableStreamController, 0), (!we || !We) && st(void 0);
                  },
                  _errorSteps: function() {
                    E = !1;
                  }
                };
                Me(s, pt);
              }
              function Ut(pt, Qe) {
                Fe(s) && (L(s), s = zt(r), wt(s));
                var ut = Qe ? ot : it, vt = Qe ? it : ot, Ft = {
                  _chunkSteps: function(Gt) {
                    p(function() {
                      se = !1, Se = !1;
                      var rr = Qe ? We : we, dr = Qe ? we : We;
                      if (dr)
                        rr || At(ut._readableStreamController, Gt);
                      else {
                        var In = void 0;
                        try {
                          In = Ne(Gt);
                        } catch (Xr) {
                          Ke(ut._readableStreamController, Xr), Ke(vt._readableStreamController, Xr), st(Ct(r, Xr));
                          return;
                        }
                        rr || At(ut._readableStreamController, Gt), $e(vt._readableStreamController, In);
                      }
                      E = !1, se ? Ot() : Se && bt();
                    });
                  },
                  _closeSteps: function(Gt) {
                    E = !1;
                    var rr = Qe ? We : we, dr = Qe ? we : We;
                    rr || je(ut._readableStreamController), dr || je(vt._readableStreamController), Gt !== void 0 && (rr || At(ut._readableStreamController, Gt), !dr && vt._readableStreamController._pendingPullIntos.length > 0 && ht(vt._readableStreamController, 0)), (!rr || !dr) && st(void 0);
                  },
                  _errorSteps: function() {
                    E = !1;
                  }
                };
                Lt(s, pt, Ft);
              }
              function Ot() {
                if (E)
                  return se = !0, w(void 0);
                E = !0;
                var pt = Je(it._readableStreamController);
                return pt === null ? tr() : Ut(pt._view, !1), w(void 0);
              }
              function bt() {
                if (E)
                  return Se = !0, w(void 0);
                E = !0;
                var pt = Je(ot._readableStreamController);
                return pt === null ? tr() : Ut(pt._view, !0), w(void 0);
              }
              function It(pt) {
                if (we = !0, qe = pt, We) {
                  var Qe = Q([
                    qe,
                    tt
                  ]), ut = Ct(r, Qe);
                  st(ut);
                }
                return gt;
              }
              function Tt(pt) {
                if (We = !0, tt = pt, we) {
                  var Qe = Q([
                    qe,
                    tt
                  ]), ut = Ct(r, Qe);
                  st(ut);
                }
                return gt;
              }
              function Mt() {
              }
              return it = mn(Mt, Ot, It), ot = mn(Mt, bt, Tt), wt(s), [
                it,
                ot
              ];
            }
            function ba(r, s) {
              _e(r, s);
              var E = r, se = E == null ? void 0 : E.autoAllocateChunkSize, Se = E == null ? void 0 : E.cancel, we = E == null ? void 0 : E.pull, We = E == null ? void 0 : E.start, qe = E == null ? void 0 : E.type;
              return {
                autoAllocateChunkSize: se === void 0 ? void 0 : ee(se, s + " has member 'autoAllocateChunkSize' that"),
                cancel: Se === void 0 ? void 0 : Sa(Se, E, s + " has member 'cancel' that"),
                pull: we === void 0 ? void 0 : _a(we, E, s + " has member 'pull' that"),
                start: We === void 0 ? void 0 : Aa(We, E, s + " has member 'start' that"),
                type: qe === void 0 ? void 0 : Ta(qe, s + " has member 'type' that")
              };
            }
            function Sa(r, s, E) {
              return Te(r, E), function(se) {
                return m(r, s, [se]);
              };
            }
            function _a(r, s, E) {
              return Te(r, E), function(se) {
                return m(r, s, [se]);
              };
            }
            function Aa(r, s, E) {
              return Te(r, E), function(se) {
                return b(r, s, [se]);
              };
            }
            function Ta(r, s) {
              if (r = "" + r, r !== "bytes")
                throw new TypeError(s + " '" + r + "' is not a valid enumeration value for ReadableStreamType");
              return r;
            }
            function Ra(r, s) {
              _e(r, s);
              var E = r == null ? void 0 : r.mode;
              return { mode: E === void 0 ? void 0 : Pa(E, s + " has member 'mode' that") };
            }
            function Pa(r, s) {
              if (r = "" + r, r !== "byob")
                throw new TypeError(s + " '" + r + "' is not a valid enumeration value for ReadableStreamReaderMode");
              return r;
            }
            function ka(r, s) {
              _e(r, s);
              var E = r == null ? void 0 : r.preventCancel;
              return { preventCancel: Boolean(E) };
            }
            function gn(r, s) {
              _e(r, s);
              var E = r == null ? void 0 : r.preventAbort, se = r == null ? void 0 : r.preventCancel, Se = r == null ? void 0 : r.preventClose, we = r == null ? void 0 : r.signal;
              return we !== void 0 && Ca(we, s + " has member 'signal' that"), {
                preventAbort: Boolean(E),
                preventCancel: Boolean(se),
                preventClose: Boolean(Se),
                signal: we
              };
            }
            function Ca(r, s) {
              if (!jn(r))
                throw new TypeError(s + " is not an AbortSignal.");
            }
            function wa(r, s) {
              _e(r, s);
              var E = r == null ? void 0 : r.readable;
              l(E, "readable", "ReadableWritablePair"), ce(E, s + " has member 'readable' that");
              var se = r == null ? void 0 : r.writable;
              return l(se, "writable", "ReadableWritablePair"), Kr(se, s + " has member 'writable' that"), {
                readable: E,
                writable: se
              };
            }
            var Wt = function() {
              function r(s, E) {
                s === void 0 && (s = {}), E === void 0 && (E = {}), s === void 0 ? s = null : I(s, "First parameter");
                var se = vr(E, "Second parameter"), Se = ba(s, "First parameter");
                if (Yr(this), Se.type === "bytes") {
                  if (se.size !== void 0)
                    throw new RangeError("The strategy for a byte stream cannot have a size function");
                  var we = ar(se, 0);
                  Et(this, Se, we);
                } else {
                  var We = pr(se), we = ar(se, 1);
                  va(this, Se, we, We);
                }
              }
              return Object.defineProperty(r.prototype, "locked", {
                get: function() {
                  if (!jt(this))
                    throw Yt("locked");
                  return Bt(this);
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.cancel = function(s) {
                return s === void 0 && (s = void 0), jt(this) ? Bt(this) ? O(new TypeError("Cannot cancel a stream that already has a reader")) : Ct(this, s) : O(Yt("cancel"));
              }, r.prototype.getReader = function(s) {
                if (s === void 0 && (s = void 0), !jt(this))
                  throw Yt("getReader");
                var E = Ra(s, "First parameter");
                return E.mode === void 0 ? ye(this) : zt(this);
              }, r.prototype.pipeThrough = function(s, E) {
                if (E === void 0 && (E = {}), !jt(this))
                  throw Yt("pipeThrough");
                f(s, 1, "pipeThrough");
                var se = wa(s, "First parameter"), Se = gn(E, "Second parameter");
                if (Bt(this))
                  throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
                if (Jt(se.writable))
                  throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
                var we = pn(this, se.writable, Se.preventClose, Se.preventAbort, Se.preventCancel, Se.signal);
                return c(we), se.readable;
              }, r.prototype.pipeTo = function(s, E) {
                if (E === void 0 && (E = {}), !jt(this))
                  return O(Yt("pipeTo"));
                if (s === void 0)
                  return O("Parameter 1 is required in 'pipeTo'.");
                if (!Kt(s))
                  return O(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
                var se;
                try {
                  se = gn(E, "Second parameter");
                } catch (Se) {
                  return O(Se);
                }
                return Bt(this) ? O(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Jt(s) ? O(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : pn(this, s, se.preventClose, se.preventAbort, se.preventCancel, se.signal);
              }, r.prototype.tee = function() {
                if (!jt(this))
                  throw Yt("tee");
                var s = ya(this);
                return Q(s);
              }, r.prototype.values = function(s) {
                if (s === void 0 && (s = void 0), !jt(this))
                  throw Yt("values");
                var E = ka(s, "First parameter");
                return re(this, E.preventCancel);
              }, r;
            }();
            Object.defineProperties(Wt.prototype, {
              cancel: { enumerable: !0 },
              getReader: { enumerable: !0 },
              pipeThrough: { enumerable: !0 },
              pipeTo: { enumerable: !0 },
              tee: { enumerable: !0 },
              values: { enumerable: !0 },
              locked: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(Wt.prototype, e.toStringTag, {
              value: "ReadableStream",
              configurable: !0
            }), typeof e.asyncIterator == "symbol" && Object.defineProperty(Wt.prototype, e.asyncIterator, {
              value: Wt.prototype.values,
              writable: !0,
              configurable: !0
            });
            function qr(r, s, E, se, Se) {
              se === void 0 && (se = 1), Se === void 0 && (Se = function() {
                return 1;
              });
              var we = Object.create(Wt.prototype);
              Yr(we);
              var We = Object.create(Zt.prototype);
              return yn(we, We, r, s, E, se, Se), we;
            }
            function mn(r, s, E) {
              var se = Object.create(Wt.prototype);
              Yr(se);
              var Se = Object.create(Be.prototype);
              return mt(se, Se, r, s, E, 0, void 0), se;
            }
            function Yr(r) {
              r._state = "readable", r._reader = void 0, r._storedError = void 0, r._disturbed = !1;
            }
            function jt(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_readableStreamController") ? !1 : r instanceof Wt;
            }
            function Bt(r) {
              return r._reader !== void 0;
            }
            function Ct(r, s) {
              if (r._disturbed = !0, r._state === "closed")
                return w(void 0);
              if (r._state === "errored")
                return O(r._storedError);
              cr(r);
              var E = r._reader;
              E !== void 0 && yt(E) && (E._readIntoRequests.forEach(function(Se) {
                Se._closeSteps(void 0);
              }), E._readIntoRequests = new T());
              var se = r._readableStreamController[C](s);
              return v(se, n);
            }
            function cr(r) {
              r._state = "closed";
              var s = r._reader;
              s !== void 0 && (S(s), Fe(s) && (s._readRequests.forEach(function(E) {
                E._closeSteps();
              }), s._readRequests = new T()));
            }
            function bn(r, s) {
              r._state = "errored", r._storedError = s;
              var E = r._reader;
              E !== void 0 && (q(E, s), Fe(E) ? (E._readRequests.forEach(function(se) {
                se._errorSteps(s);
              }), E._readRequests = new T()) : (E._readIntoRequests.forEach(function(se) {
                se._errorSteps(s);
              }), E._readIntoRequests = new T()));
            }
            function Yt(r) {
              return new TypeError("ReadableStream.prototype." + r + " can only be used on a ReadableStream");
            }
            function Sn(r, s) {
              _e(r, s);
              var E = r == null ? void 0 : r.highWaterMark;
              return l(E, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: _(E) };
            }
            var _n = function(r) {
              return r.byteLength;
            };
            Object.defineProperty(_n, "name", {
              value: "size",
              configurable: !0
            });
            var Cr = function() {
              function r(s) {
                f(s, 1, "ByteLengthQueuingStrategy"), s = Sn(s, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = s.highWaterMark;
              }
              return Object.defineProperty(r.prototype, "highWaterMark", {
                get: function() {
                  if (!Tn(this))
                    throw An("highWaterMark");
                  return this._byteLengthQueuingStrategyHighWaterMark;
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(r.prototype, "size", {
                get: function() {
                  if (!Tn(this))
                    throw An("size");
                  return _n;
                },
                enumerable: !1,
                configurable: !0
              }), r;
            }();
            Object.defineProperties(Cr.prototype, {
              highWaterMark: { enumerable: !0 },
              size: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(Cr.prototype, e.toStringTag, {
              value: "ByteLengthQueuingStrategy",
              configurable: !0
            });
            function An(r) {
              return new TypeError("ByteLengthQueuingStrategy.prototype." + r + " can only be used on a ByteLengthQueuingStrategy");
            }
            function Tn(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_byteLengthQueuingStrategyHighWaterMark") ? !1 : r instanceof Cr;
            }
            var Rn = function() {
              return 1;
            };
            Object.defineProperty(Rn, "name", {
              value: "size",
              configurable: !0
            });
            var wr = function() {
              function r(s) {
                f(s, 1, "CountQueuingStrategy"), s = Sn(s, "First parameter"), this._countQueuingStrategyHighWaterMark = s.highWaterMark;
              }
              return Object.defineProperty(r.prototype, "highWaterMark", {
                get: function() {
                  if (!kn(this))
                    throw Pn("highWaterMark");
                  return this._countQueuingStrategyHighWaterMark;
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(r.prototype, "size", {
                get: function() {
                  if (!kn(this))
                    throw Pn("size");
                  return Rn;
                },
                enumerable: !1,
                configurable: !0
              }), r;
            }();
            Object.defineProperties(wr.prototype, {
              highWaterMark: { enumerable: !0 },
              size: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(wr.prototype, e.toStringTag, {
              value: "CountQueuingStrategy",
              configurable: !0
            });
            function Pn(r) {
              return new TypeError("CountQueuingStrategy.prototype." + r + " can only be used on a CountQueuingStrategy");
            }
            function kn(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_countQueuingStrategyHighWaterMark") ? !1 : r instanceof wr;
            }
            function Ea(r, s) {
              _e(r, s);
              var E = r == null ? void 0 : r.flush, se = r == null ? void 0 : r.readableType, Se = r == null ? void 0 : r.start, we = r == null ? void 0 : r.transform, We = r == null ? void 0 : r.writableType;
              return {
                flush: E === void 0 ? void 0 : xa(E, r, s + " has member 'flush' that"),
                readableType: se,
                start: Se === void 0 ? void 0 : Oa(Se, r, s + " has member 'start' that"),
                transform: we === void 0 ? void 0 : Ia(we, r, s + " has member 'transform' that"),
                writableType: We
              };
            }
            function xa(r, s, E) {
              return Te(r, E), function(se) {
                return m(r, s, [se]);
              };
            }
            function Oa(r, s, E) {
              return Te(r, E), function(se) {
                return b(r, s, [se]);
              };
            }
            function Ia(r, s, E) {
              return Te(r, E), function(se, Se) {
                return m(r, s, [
                  se,
                  Se
                ]);
              };
            }
            var Er = function() {
              function r(s, E, se) {
                s === void 0 && (s = {}), E === void 0 && (E = {}), se === void 0 && (se = {}), s === void 0 && (s = null);
                var Se = vr(E, "Second parameter"), we = vr(se, "Third parameter"), We = Ea(s, "First parameter");
                if (We.readableType !== void 0)
                  throw new RangeError("Invalid readableType specified");
                if (We.writableType !== void 0)
                  throw new RangeError("Invalid writableType specified");
                var qe = ar(we, 0), tt = pr(we), it = ar(Se, 1), ot = pr(Se), st, gt = x(function(wt) {
                  st = wt;
                });
                Fa(this, gt, it, ot, qe, tt), Da(this, We), We.start !== void 0 ? st(We.start(this._transformStreamController)) : st(void 0);
              }
              return Object.defineProperty(r.prototype, "readable", {
                get: function() {
                  if (!Cn(this))
                    throw On("readable");
                  return this._readable;
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(r.prototype, "writable", {
                get: function() {
                  if (!Cn(this))
                    throw On("writable");
                  return this._writable;
                },
                enumerable: !1,
                configurable: !0
              }), r;
            }();
            Object.defineProperties(Er.prototype, {
              readable: { enumerable: !0 },
              writable: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(Er.prototype, e.toStringTag, {
              value: "TransformStream",
              configurable: !0
            });
            function Fa(r, s, E, se, Se, we) {
              function We() {
                return s;
              }
              function qe(gt) {
                return Wa(r, gt);
              }
              function tt(gt) {
                return ja(r, gt);
              }
              function it() {
                return Ba(r);
              }
              r._writable = Gn(We, qe, it, tt, E, se);
              function ot() {
                return Ua(r);
              }
              function st(gt) {
                return Or(r, gt), w(void 0);
              }
              r._readable = qr(We, ot, st, Se, we), r._backpressure = void 0, r._backpressureChangePromise = void 0, r._backpressureChangePromise_resolve = void 0, Ir(r, !0), r._transformStreamController = void 0;
            }
            function Cn(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_transformStreamController") ? !1 : r instanceof Er;
            }
            function xr(r, s) {
              Nt(r._readable._readableStreamController, s), Or(r, s);
            }
            function Or(r, s) {
              wn(r._transformStreamController), Br(r._writable._writableStreamController, s), r._backpressure && Ir(r, !1);
            }
            function Ir(r, s) {
              r._backpressureChangePromise !== void 0 && r._backpressureChangePromise_resolve(), r._backpressureChangePromise = x(function(E) {
                r._backpressureChangePromise_resolve = E;
              }), r._backpressure = s;
            }
            var fr = function() {
              function r() {
                throw new TypeError("Illegal constructor");
              }
              return Object.defineProperty(r.prototype, "desiredSize", {
                get: function() {
                  if (!Fr(this))
                    throw Mr("desiredSize");
                  var s = this._controlledTransformStream._readable._readableStreamController;
                  return Hr(s);
                },
                enumerable: !1,
                configurable: !0
              }), r.prototype.enqueue = function(s) {
                if (s === void 0 && (s = void 0), !Fr(this))
                  throw Mr("enqueue");
                En(this, s);
              }, r.prototype.error = function(s) {
                if (s === void 0 && (s = void 0), !Fr(this))
                  throw Mr("error");
                La(this, s);
              }, r.prototype.terminate = function() {
                if (!Fr(this))
                  throw Mr("terminate");
                Na(this);
              }, r;
            }();
            Object.defineProperties(fr.prototype, {
              enqueue: { enumerable: !0 },
              error: { enumerable: !0 },
              terminate: { enumerable: !0 },
              desiredSize: { enumerable: !0 }
            }), typeof e.toStringTag == "symbol" && Object.defineProperty(fr.prototype, e.toStringTag, {
              value: "TransformStreamDefaultController",
              configurable: !0
            });
            function Fr(r) {
              return !u(r) || !Object.prototype.hasOwnProperty.call(r, "_controlledTransformStream") ? !1 : r instanceof fr;
            }
            function Ma(r, s, E, se) {
              s._controlledTransformStream = r, r._transformStreamController = s, s._transformAlgorithm = E, s._flushAlgorithm = se;
            }
            function Da(r, s) {
              var E = Object.create(fr.prototype), se = function(we) {
                try {
                  return En(E, we), w(void 0);
                } catch (We) {
                  return O(We);
                }
              }, Se = function() {
                return w(void 0);
              };
              s.transform !== void 0 && (se = function(we) {
                return s.transform(we, E);
              }), s.flush !== void 0 && (Se = function() {
                return s.flush(E);
              }), Ma(r, E, se, Se);
            }
            function wn(r) {
              r._transformAlgorithm = void 0, r._flushAlgorithm = void 0;
            }
            function En(r, s) {
              var E = r._controlledTransformStream, se = E._readable._readableStreamController;
              if (!er(se))
                throw new TypeError("Readable side is not in a state that permits enqueue");
              try {
                Pr(se, s);
              } catch (we) {
                throw Or(E, we), E._readable._storedError;
              }
              var Se = pa(se);
              Se !== E._backpressure && Ir(E, !0);
            }
            function La(r, s) {
              xr(r._controlledTransformStream, s);
            }
            function xn(r, s) {
              var E = r._transformAlgorithm(s);
              return v(E, void 0, function(se) {
                throw xr(r._controlledTransformStream, se), se;
              });
            }
            function Na(r) {
              var s = r._controlledTransformStream, E = s._readable._readableStreamController;
              lr(E);
              var se = new TypeError("TransformStream terminated");
              Or(s, se);
            }
            function Wa(r, s) {
              var E = r._transformStreamController;
              if (r._backpressure) {
                var se = r._backpressureChangePromise;
                return v(se, function() {
                  var Se = r._writable, we = Se._state;
                  if (we === "erroring")
                    throw Se._storedError;
                  return xn(E, s);
                });
              }
              return xn(E, s);
            }
            function ja(r, s) {
              return xr(r, s), w(void 0);
            }
            function Ba(r) {
              var s = r._readable, E = r._transformStreamController, se = E._flushAlgorithm();
              return wn(E), v(se, function() {
                if (s._state === "errored")
                  throw s._storedError;
                lr(s._readableStreamController);
              }, function(Se) {
                throw xr(r, Se), s._storedError;
              });
            }
            function Ua(r) {
              return Ir(r, !1), r._backpressureChangePromise;
            }
            function Mr(r) {
              return new TypeError("TransformStreamDefaultController.prototype." + r + " can only be used on a TransformStreamDefaultController");
            }
            function On(r) {
              return new TypeError("TransformStream.prototype." + r + " can only be used on a TransformStream");
            }
            t.ByteLengthQueuingStrategy = Cr, t.CountQueuingStrategy = wr, t.ReadableByteStreamController = Be, t.ReadableStream = Wt, t.ReadableStreamBYOBReader = kt, t.ReadableStreamBYOBRequest = Ge, t.ReadableStreamDefaultController = Zt, t.ReadableStreamDefaultReader = xe, t.TransformStream = Er, t.TransformStreamDefaultController = fr, t.WritableStream = ir, t.WritableStreamDefaultController = Qt, t.WritableStreamDefaultWriter = or, Object.defineProperty(t, "__esModule", { value: !0 });
          });
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.BaseStandardFontDataFactory = a.BaseSVGFactory = a.BaseCanvasFactory = a.BaseCMapReaderFactory = void 0;
          var e = o(t(2)), n = t(4);
          function o(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function d(O, k, W, R, U, v, c) {
            try {
              var p = O[v](c), b = p.value;
            } catch (m) {
              W(m);
              return;
            }
            p.done ? k(b) : Promise.resolve(b).then(R, U);
          }
          function u(O) {
            return function() {
              var k = this, W = arguments;
              return new Promise(function(R, U) {
                var v = O.apply(k, W);
                function c(b) {
                  d(v, R, U, c, p, "next", b);
                }
                function p(b) {
                  d(v, R, U, c, p, "throw", b);
                }
                c(void 0);
              });
            };
          }
          function g(O, k) {
            if (!(O instanceof k))
              throw new TypeError("Cannot call a class as a function");
          }
          function P(O, k) {
            for (var W = 0; W < k.length; W++) {
              var R = k[W];
              R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(O, R.key, R);
            }
          }
          function F(O, k, W) {
            return k && P(O.prototype, k), W && P(O, W), O;
          }
          var D = /* @__PURE__ */ function() {
            function O() {
              g(this, O), this.constructor === O && (0, n.unreachable)("Cannot initialize BaseCanvasFactory.");
            }
            return F(O, [{
              key: "create",
              value: function(W, R) {
                if (W <= 0 || R <= 0)
                  throw new Error("Invalid canvas size");
                var U = this._createCanvas(W, R);
                return {
                  canvas: U,
                  context: U.getContext("2d")
                };
              }
            }, {
              key: "reset",
              value: function(W, R, U) {
                if (!W.canvas)
                  throw new Error("Canvas is not specified");
                if (R <= 0 || U <= 0)
                  throw new Error("Invalid canvas size");
                W.canvas.width = R, W.canvas.height = U;
              }
            }, {
              key: "destroy",
              value: function(W) {
                if (!W.canvas)
                  throw new Error("Canvas is not specified");
                W.canvas.width = 0, W.canvas.height = 0, W.canvas = null, W.context = null;
              }
            }, {
              key: "_createCanvas",
              value: function(W, R) {
                (0, n.unreachable)("Abstract method `_createCanvas` called.");
              }
            }]), O;
          }();
          a.BaseCanvasFactory = D;
          var B = /* @__PURE__ */ function() {
            function O(k) {
              var W = k.baseUrl, R = W === void 0 ? null : W, U = k.isCompressed, v = U === void 0 ? !1 : U;
              g(this, O), this.constructor === O && (0, n.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = R, this.isCompressed = v;
            }
            return F(O, [{
              key: "fetch",
              value: function() {
                var k = u(/* @__PURE__ */ e.default.mark(function R(U) {
                  var v = this, c, p, b;
                  return e.default.wrap(function(y) {
                    for (; ; )
                      switch (y.prev = y.next) {
                        case 0:
                          if (c = U.name, this.baseUrl) {
                            y.next = 3;
                            break;
                          }
                          throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                        case 3:
                          if (c) {
                            y.next = 5;
                            break;
                          }
                          throw new Error("CMap name must be specified.");
                        case 5:
                          return p = this.baseUrl + c + (this.isCompressed ? ".bcmap" : ""), b = this.isCompressed ? n.CMapCompressionType.BINARY : n.CMapCompressionType.NONE, y.abrupt("return", this._fetchData(p, b).catch(function(T) {
                            throw new Error("Unable to load ".concat(v.isCompressed ? "binary " : "", "CMap at: ").concat(p));
                          }));
                        case 8:
                        case "end":
                          return y.stop();
                      }
                  }, R, this);
                }));
                function W(R) {
                  return k.apply(this, arguments);
                }
                return W;
              }()
            }, {
              key: "_fetchData",
              value: function(W, R) {
                (0, n.unreachable)("Abstract method `_fetchData` called.");
              }
            }]), O;
          }();
          a.BaseCMapReaderFactory = B;
          var x = /* @__PURE__ */ function() {
            function O(k) {
              var W = k.baseUrl, R = W === void 0 ? null : W;
              g(this, O), this.constructor === O && (0, n.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = R;
            }
            return F(O, [{
              key: "fetch",
              value: function() {
                var k = u(/* @__PURE__ */ e.default.mark(function R(U) {
                  var v, c;
                  return e.default.wrap(function(b) {
                    for (; ; )
                      switch (b.prev = b.next) {
                        case 0:
                          if (v = U.filename, this.baseUrl) {
                            b.next = 3;
                            break;
                          }
                          throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
                        case 3:
                          if (v) {
                            b.next = 5;
                            break;
                          }
                          throw new Error("Font filename must be specified.");
                        case 5:
                          return c = "".concat(this.baseUrl).concat(v), b.abrupt("return", this._fetchData(c).catch(function(m) {
                            throw new Error("Unable to load font data at: ".concat(c));
                          }));
                        case 7:
                        case "end":
                          return b.stop();
                      }
                  }, R, this);
                }));
                function W(R) {
                  return k.apply(this, arguments);
                }
                return W;
              }()
            }, {
              key: "_fetchData",
              value: function(W) {
                (0, n.unreachable)("Abstract method `_fetchData` called.");
              }
            }]), O;
          }();
          a.BaseStandardFontDataFactory = x;
          var w = /* @__PURE__ */ function() {
            function O() {
              g(this, O), this.constructor === O && (0, n.unreachable)("Cannot initialize BaseSVGFactory.");
            }
            return F(O, [{
              key: "create",
              value: function(W, R) {
                if (W <= 0 || R <= 0)
                  throw new Error("Invalid SVG dimensions");
                var U = this._createSVG("svg:svg");
                return U.setAttribute("version", "1.1"), U.setAttribute("width", "".concat(W, "px")), U.setAttribute("height", "".concat(R, "px")), U.setAttribute("preserveAspectRatio", "none"), U.setAttribute("viewBox", "0 0 ".concat(W, " ").concat(R)), U;
              }
            }, {
              key: "createElement",
              value: function(W) {
                if (typeof W != "string")
                  throw new Error("Invalid SVG element type");
                return this._createSVG(W);
              }
            }, {
              key: "_createSVG",
              value: function(W) {
                (0, n.unreachable)("Abstract method `_createSVG` called.");
              }
            }]), O;
          }();
          a.BaseSVGFactory = w;
        },
        (__unused_webpack_module, exports, __w_pdfjs_require__) => {
          Object.defineProperty(exports, "__esModule", {
            value: !0
          }), exports.build = exports.RenderTask = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, exports.getDocument = getDocument, exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory, exports.version = void 0;
          var _regenerator = _interopRequireDefault(__w_pdfjs_require__(2)), _util = __w_pdfjs_require__(4), _display_utils = __w_pdfjs_require__(1), _font_loader = __w_pdfjs_require__(137), _node_utils = __w_pdfjs_require__(138), _annotation_storage = __w_pdfjs_require__(139), _canvas = __w_pdfjs_require__(140), _worker_options = __w_pdfjs_require__(142), _is_node = __w_pdfjs_require__(6), _message_handler = __w_pdfjs_require__(143), _metadata = __w_pdfjs_require__(144), _optional_content_config = __w_pdfjs_require__(145), _transport_stream = __w_pdfjs_require__(146), _xfa_text = __w_pdfjs_require__(147);
          function _interopRequireDefault(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function _classPrivateFieldInitSpec(i, a, t) {
            _checkPrivateRedeclaration(i, a), a.set(i, t);
          }
          function _checkPrivateRedeclaration(i, a) {
            if (a.has(i))
              throw new TypeError("Cannot initialize the same private elements twice on an object");
          }
          function _classPrivateFieldSet(i, a, t) {
            var e = _classExtractFieldDescriptor(i, a, "set");
            return _classApplyDescriptorSet(i, e, t), t;
          }
          function _classApplyDescriptorSet(i, a, t) {
            if (a.set)
              a.set.call(i, t);
            else {
              if (!a.writable)
                throw new TypeError("attempted to set read only private field");
              a.value = t;
            }
          }
          function _classPrivateFieldGet(i, a) {
            var t = _classExtractFieldDescriptor(i, a, "get");
            return _classApplyDescriptorGet(i, t);
          }
          function _classExtractFieldDescriptor(i, a, t) {
            if (!a.has(i))
              throw new TypeError("attempted to " + t + " private field on non-instance");
            return a.get(i);
          }
          function _classApplyDescriptorGet(i, a) {
            return a.get ? a.get.call(i) : a.value;
          }
          function _toConsumableArray(i) {
            return _arrayWithoutHoles(i) || _iterableToArray(i) || _unsupportedIterableToArray(i) || _nonIterableSpread();
          }
          function _nonIterableSpread() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function _iterableToArray(i) {
            if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
              return Array.from(i);
          }
          function _arrayWithoutHoles(i) {
            if (Array.isArray(i))
              return _arrayLikeToArray(i);
          }
          function _createForOfIteratorHelper(i, a) {
            var t = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
            if (!t) {
              if (Array.isArray(i) || (t = _unsupportedIterableToArray(i)) || a && i && typeof i.length == "number") {
                t && (i = t);
                var e = 0, n = function() {
                };
                return { s: n, n: function() {
                  return e >= i.length ? { done: !0 } : { done: !1, value: i[e++] };
                }, e: function(P) {
                  throw P;
                }, f: n };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var o = !0, d = !1, u;
            return { s: function() {
              t = t.call(i);
            }, n: function() {
              var P = t.next();
              return o = P.done, P;
            }, e: function(P) {
              d = !0, u = P;
            }, f: function() {
              try {
                !o && t.return != null && t.return();
              } finally {
                if (d)
                  throw u;
              }
            } };
          }
          function _classCallCheck(i, a) {
            if (!(i instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function _defineProperties(i, a) {
            for (var t = 0; t < a.length; t++) {
              var e = a[t];
              e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e);
            }
          }
          function _createClass(i, a, t) {
            return a && _defineProperties(i.prototype, a), t && _defineProperties(i, t), i;
          }
          function asyncGeneratorStep(i, a, t, e, n, o, d) {
            try {
              var u = i[o](d), g = u.value;
            } catch (P) {
              t(P);
              return;
            }
            u.done ? a(g) : Promise.resolve(g).then(e, n);
          }
          function _asyncToGenerator(i) {
            return function() {
              var a = this, t = arguments;
              return new Promise(function(e, n) {
                var o = i.apply(a, t);
                function d(g) {
                  asyncGeneratorStep(o, e, n, d, u, "next", g);
                }
                function u(g) {
                  asyncGeneratorStep(o, e, n, d, u, "throw", g);
                }
                d(void 0);
              });
            };
          }
          function _slicedToArray(i, a) {
            return _arrayWithHoles(i) || _iterableToArrayLimit(i, a) || _unsupportedIterableToArray(i, a) || _nonIterableRest();
          }
          function _nonIterableRest() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function _unsupportedIterableToArray(i, a) {
            if (!!i) {
              if (typeof i == "string")
                return _arrayLikeToArray(i, a);
              var t = Object.prototype.toString.call(i).slice(8, -1);
              if (t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set")
                return Array.from(i);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return _arrayLikeToArray(i, a);
            }
          }
          function _arrayLikeToArray(i, a) {
            (a == null || a > i.length) && (a = i.length);
            for (var t = 0, e = new Array(a); t < a; t++)
              e[t] = i[t];
            return e;
          }
          function _iterableToArrayLimit(i, a) {
            var t = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
            if (t != null) {
              var e = [], n = !0, o = !1, d, u;
              try {
                for (t = t.call(i); !(n = (d = t.next()).done) && (e.push(d.value), !(a && e.length === a)); n = !0)
                  ;
              } catch (g) {
                o = !0, u = g;
              } finally {
                try {
                  !n && t.return != null && t.return();
                } finally {
                  if (o)
                    throw u;
                }
              }
              return e;
            }
          }
          function _arrayWithHoles(i) {
            if (Array.isArray(i))
              return i;
          }
          function _typeof(i) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(t) {
              return typeof t;
            } : _typeof = function(t) {
              return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, _typeof(i);
          }
          var DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100, DefaultCanvasFactory = _is_node.isNodeJS ? _node_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
          exports.DefaultCanvasFactory = DefaultCanvasFactory;
          var DefaultCMapReaderFactory = _is_node.isNodeJS ? _node_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
          var DefaultStandardFontDataFactory = _is_node.isNodeJS ? _node_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
          exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
          var createPDFNetworkStream;
          function setPDFNetworkStreamFactory(i) {
            createPDFNetworkStream = i;
          }
          function getDocument(i) {
            var a = new PDFDocumentLoadingTask(), t;
            if (typeof i == "string" || i instanceof URL)
              t = {
                url: i
              };
            else if ((0, _util.isArrayBuffer)(i))
              t = {
                data: i
              };
            else if (i instanceof PDFDataRangeTransport)
              t = {
                range: i
              };
            else {
              if (_typeof(i) !== "object")
                throw new Error("Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object.");
              if (!i.url && !i.data && !i.range)
                throw new Error("Invalid parameter object: need either .data, .range or .url");
              t = i;
            }
            var e = /* @__PURE__ */ Object.create(null), n = null, o = null;
            for (var d in t) {
              var u = t[d];
              switch (d) {
                case "url":
                  if (typeof window < "u")
                    try {
                      e[d] = new URL(u, window.location).href;
                      continue;
                    } catch (F) {
                      (0, _util.warn)('Cannot create valid URL: "'.concat(F, '".'));
                    }
                  else if (typeof u == "string" || u instanceof URL) {
                    e[d] = u.toString();
                    continue;
                  }
                  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
                case "range":
                  n = u;
                  continue;
                case "worker":
                  o = u;
                  continue;
                case "data":
                  if (_is_node.isNodeJS && typeof Buffer < "u" && u instanceof Buffer)
                    e[d] = new Uint8Array(u);
                  else {
                    if (u instanceof Uint8Array)
                      break;
                    if (typeof u == "string")
                      e[d] = (0, _util.stringToBytes)(u);
                    else if (_typeof(u) === "object" && u !== null && !isNaN(u.length))
                      e[d] = new Uint8Array(u);
                    else if ((0, _util.isArrayBuffer)(u))
                      e[d] = new Uint8Array(u);
                    else
                      throw new Error("Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property.");
                  }
                  continue;
              }
              e[d] = u;
            }
            if (e.rangeChunkSize = e.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE, e.CMapReaderFactory = e.CMapReaderFactory || DefaultCMapReaderFactory, e.StandardFontDataFactory = e.StandardFontDataFactory || DefaultStandardFontDataFactory, e.ignoreErrors = e.stopAtErrors !== !0, e.fontExtraProperties = e.fontExtraProperties === !0, e.pdfBug = e.pdfBug === !0, e.enableXfa = e.enableXfa === !0, (typeof e.docBaseUrl != "string" || (0, _display_utils.isDataScheme)(e.docBaseUrl)) && (e.docBaseUrl = null), Number.isInteger(e.maxImageSize) || (e.maxImageSize = -1), typeof e.useWorkerFetch != "boolean" && (e.useWorkerFetch = e.CMapReaderFactory === _display_utils.DOMCMapReaderFactory && e.StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory), typeof e.isEvalSupported != "boolean" && (e.isEvalSupported = !0), typeof e.disableFontFace != "boolean" && (e.disableFontFace = _is_node.isNodeJS), typeof e.useSystemFonts != "boolean" && (e.useSystemFonts = !_is_node.isNodeJS && !e.disableFontFace), typeof e.ownerDocument > "u" && (e.ownerDocument = globalThis.document), typeof e.disableRange != "boolean" && (e.disableRange = !1), typeof e.disableStream != "boolean" && (e.disableStream = !1), typeof e.disableAutoFetch != "boolean" && (e.disableAutoFetch = !1), (0, _util.setVerbosityLevel)(e.verbosity), !o) {
              var g = {
                verbosity: e.verbosity,
                port: _worker_options.GlobalWorkerOptions.workerPort
              };
              o = g.port ? PDFWorker.fromPort(g) : new PDFWorker(g), a._worker = o;
            }
            var P = a.docId;
            return o.promise.then(function() {
              if (a.destroyed)
                throw new Error("Loading aborted");
              var F = _fetchDocument(o, e, n, P), D = new Promise(function(B) {
                var x;
                n ? x = new _transport_stream.PDFDataTransportStream({
                  length: e.length,
                  initialData: e.initialData,
                  progressiveDone: e.progressiveDone,
                  contentDispositionFilename: e.contentDispositionFilename,
                  disableRange: e.disableRange,
                  disableStream: e.disableStream
                }, n) : e.data || (x = createPDFNetworkStream({
                  url: e.url,
                  length: e.length,
                  httpHeaders: e.httpHeaders,
                  withCredentials: e.withCredentials,
                  rangeChunkSize: e.rangeChunkSize,
                  disableRange: e.disableRange,
                  disableStream: e.disableStream
                })), B(x);
              });
              return Promise.all([F, D]).then(function(B) {
                var x = _slicedToArray(B, 2), w = x[0], O = x[1];
                if (a.destroyed)
                  throw new Error("Loading aborted");
                var k = new _message_handler.MessageHandler(P, w, o.port), W = new WorkerTransport(k, a, O, e);
                a._transport = W, k.send("Ready", null);
              });
            }).catch(a._capability.reject), a;
          }
          function _fetchDocument(i, a, t, e) {
            return _fetchDocument2.apply(this, arguments);
          }
          function _fetchDocument2() {
            return _fetchDocument2 = _asyncToGenerator(/* @__PURE__ */ _regenerator.default.mark(function i(a, t, e, n) {
              var o;
              return _regenerator.default.wrap(function(u) {
                for (; ; )
                  switch (u.prev = u.next) {
                    case 0:
                      if (!a.destroyed) {
                        u.next = 2;
                        break;
                      }
                      throw new Error("Worker was destroyed");
                    case 2:
                      return e && (t.length = e.length, t.initialData = e.initialData, t.progressiveDone = e.progressiveDone, t.contentDispositionFilename = e.contentDispositionFilename), u.next = 5, a.messageHandler.sendWithPromise("GetDocRequest", {
                        docId: n,
                        apiVersion: "2.12.313",
                        source: {
                          data: t.data,
                          url: t.url,
                          password: t.password,
                          disableAutoFetch: t.disableAutoFetch,
                          rangeChunkSize: t.rangeChunkSize,
                          length: t.length
                        },
                        maxImageSize: t.maxImageSize,
                        disableFontFace: t.disableFontFace,
                        docBaseUrl: t.docBaseUrl,
                        ignoreErrors: t.ignoreErrors,
                        isEvalSupported: t.isEvalSupported,
                        fontExtraProperties: t.fontExtraProperties,
                        enableXfa: t.enableXfa,
                        useSystemFonts: t.useSystemFonts,
                        cMapUrl: t.useWorkerFetch ? t.cMapUrl : null,
                        standardFontDataUrl: t.useWorkerFetch ? t.standardFontDataUrl : null
                      });
                    case 5:
                      if (o = u.sent, !a.destroyed) {
                        u.next = 8;
                        break;
                      }
                      throw new Error("Worker was destroyed");
                    case 8:
                      return u.abrupt("return", o);
                    case 9:
                    case "end":
                      return u.stop();
                  }
              }, i);
            })), _fetchDocument2.apply(this, arguments);
          }
          var PDFDocumentLoadingTask = /* @__PURE__ */ function() {
            function i() {
              _classCallCheck(this, i), this._capability = (0, _util.createPromiseCapability)(), this._transport = null, this._worker = null, this.docId = "d".concat(i.idCounters.doc++), this.destroyed = !1, this.onPassword = null, this.onProgress = null, this.onUnsupportedFeature = null;
            }
            return _createClass(i, [{
              key: "promise",
              get: function() {
                return this._capability.promise;
              }
            }, {
              key: "destroy",
              value: function() {
                var a = _asyncToGenerator(/* @__PURE__ */ _regenerator.default.mark(function e() {
                  var n;
                  return _regenerator.default.wrap(function(d) {
                    for (; ; )
                      switch (d.prev = d.next) {
                        case 0:
                          return this.destroyed = !0, d.next = 3, (n = this._transport) === null || n === void 0 ? void 0 : n.destroy();
                        case 3:
                          this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
                        case 5:
                        case "end":
                          return d.stop();
                      }
                  }, e, this);
                }));
                function t() {
                  return a.apply(this, arguments);
                }
                return t;
              }()
            }], [{
              key: "idCounters",
              get: function() {
                return (0, _util.shadow)(this, "idCounters", {
                  doc: 0
                });
              }
            }]), i;
          }();
          exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
          var PDFDataRangeTransport = /* @__PURE__ */ function() {
            function i(a, t) {
              var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
              _classCallCheck(this, i), this.length = a, this.initialData = t, this.progressiveDone = e, this.contentDispositionFilename = n, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = (0, _util.createPromiseCapability)();
            }
            return _createClass(i, [{
              key: "addRangeListener",
              value: function(t) {
                this._rangeListeners.push(t);
              }
            }, {
              key: "addProgressListener",
              value: function(t) {
                this._progressListeners.push(t);
              }
            }, {
              key: "addProgressiveReadListener",
              value: function(t) {
                this._progressiveReadListeners.push(t);
              }
            }, {
              key: "addProgressiveDoneListener",
              value: function(t) {
                this._progressiveDoneListeners.push(t);
              }
            }, {
              key: "onDataRange",
              value: function(t, e) {
                var n = _createForOfIteratorHelper(this._rangeListeners), o;
                try {
                  for (n.s(); !(o = n.n()).done; ) {
                    var d = o.value;
                    d(t, e);
                  }
                } catch (u) {
                  n.e(u);
                } finally {
                  n.f();
                }
              }
            }, {
              key: "onDataProgress",
              value: function(t, e) {
                var n = this;
                this._readyCapability.promise.then(function() {
                  var o = _createForOfIteratorHelper(n._progressListeners), d;
                  try {
                    for (o.s(); !(d = o.n()).done; ) {
                      var u = d.value;
                      u(t, e);
                    }
                  } catch (g) {
                    o.e(g);
                  } finally {
                    o.f();
                  }
                });
              }
            }, {
              key: "onDataProgressiveRead",
              value: function(t) {
                var e = this;
                this._readyCapability.promise.then(function() {
                  var n = _createForOfIteratorHelper(e._progressiveReadListeners), o;
                  try {
                    for (n.s(); !(o = n.n()).done; ) {
                      var d = o.value;
                      d(t);
                    }
                  } catch (u) {
                    n.e(u);
                  } finally {
                    n.f();
                  }
                });
              }
            }, {
              key: "onDataProgressiveDone",
              value: function() {
                var t = this;
                this._readyCapability.promise.then(function() {
                  var e = _createForOfIteratorHelper(t._progressiveDoneListeners), n;
                  try {
                    for (e.s(); !(n = e.n()).done; ) {
                      var o = n.value;
                      o();
                    }
                  } catch (d) {
                    e.e(d);
                  } finally {
                    e.f();
                  }
                });
              }
            }, {
              key: "transportReady",
              value: function() {
                this._readyCapability.resolve();
              }
            }, {
              key: "requestDataRange",
              value: function(t, e) {
                (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
              }
            }, {
              key: "abort",
              value: function() {
              }
            }]), i;
          }();
          exports.PDFDataRangeTransport = PDFDataRangeTransport;
          var PDFDocumentProxy = /* @__PURE__ */ function() {
            function i(a, t) {
              var e = this;
              _classCallCheck(this, i), this._pdfInfo = a, this._transport = t, Object.defineProperty(this, "fingerprint", {
                get: function() {
                  return (0, _display_utils.deprecated)("`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead."), this.fingerprints[0];
                }
              }), Object.defineProperty(this, "getStats", {
                value: function() {
                  var n = _asyncToGenerator(/* @__PURE__ */ _regenerator.default.mark(function d() {
                    return _regenerator.default.wrap(function(g) {
                      for (; ; )
                        switch (g.prev = g.next) {
                          case 0:
                            return (0, _display_utils.deprecated)("`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead."), g.abrupt("return", e.stats || {
                              streamTypes: {},
                              fontTypes: {}
                            });
                          case 2:
                          case "end":
                            return g.stop();
                        }
                    }, d);
                  }));
                  function o() {
                    return n.apply(this, arguments);
                  }
                  return o;
                }()
              });
            }
            return _createClass(i, [{
              key: "annotationStorage",
              get: function() {
                return this._transport.annotationStorage;
              }
            }, {
              key: "numPages",
              get: function() {
                return this._pdfInfo.numPages;
              }
            }, {
              key: "fingerprints",
              get: function() {
                return this._pdfInfo.fingerprints;
              }
            }, {
              key: "stats",
              get: function() {
                return this._transport.stats;
              }
            }, {
              key: "isPureXfa",
              get: function() {
                return !!this._transport._htmlForXfa;
              }
            }, {
              key: "allXfaHtml",
              get: function() {
                return this._transport._htmlForXfa;
              }
            }, {
              key: "getPage",
              value: function(t) {
                return this._transport.getPage(t);
              }
            }, {
              key: "getPageIndex",
              value: function(t) {
                return this._transport.getPageIndex(t);
              }
            }, {
              key: "getDestinations",
              value: function() {
                return this._transport.getDestinations();
              }
            }, {
              key: "getDestination",
              value: function(t) {
                return this._transport.getDestination(t);
              }
            }, {
              key: "getPageLabels",
              value: function() {
                return this._transport.getPageLabels();
              }
            }, {
              key: "getPageLayout",
              value: function() {
                return this._transport.getPageLayout();
              }
            }, {
              key: "getPageMode",
              value: function() {
                return this._transport.getPageMode();
              }
            }, {
              key: "getViewerPreferences",
              value: function() {
                return this._transport.getViewerPreferences();
              }
            }, {
              key: "getOpenAction",
              value: function() {
                return this._transport.getOpenAction();
              }
            }, {
              key: "getAttachments",
              value: function() {
                return this._transport.getAttachments();
              }
            }, {
              key: "getJavaScript",
              value: function() {
                return this._transport.getJavaScript();
              }
            }, {
              key: "getJSActions",
              value: function() {
                return this._transport.getDocJSActions();
              }
            }, {
              key: "getOutline",
              value: function() {
                return this._transport.getOutline();
              }
            }, {
              key: "getOptionalContentConfig",
              value: function() {
                return this._transport.getOptionalContentConfig();
              }
            }, {
              key: "getPermissions",
              value: function() {
                return this._transport.getPermissions();
              }
            }, {
              key: "getMetadata",
              value: function() {
                return this._transport.getMetadata();
              }
            }, {
              key: "getMarkInfo",
              value: function() {
                return this._transport.getMarkInfo();
              }
            }, {
              key: "getData",
              value: function() {
                return this._transport.getData();
              }
            }, {
              key: "getDownloadInfo",
              value: function() {
                return this._transport.downloadInfoCapability.promise;
              }
            }, {
              key: "cleanup",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                return this._transport.startCleanup(t || this.isPureXfa);
              }
            }, {
              key: "destroy",
              value: function() {
                return this.loadingTask.destroy();
              }
            }, {
              key: "loadingParams",
              get: function() {
                return this._transport.loadingParams;
              }
            }, {
              key: "loadingTask",
              get: function() {
                return this._transport.loadingTask;
              }
            }, {
              key: "saveDocument",
              value: function() {
                return this._transport.annotationStorage.size <= 0 && (0, _display_utils.deprecated)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."), this._transport.saveDocument();
              }
            }, {
              key: "getFieldObjects",
              value: function() {
                return this._transport.getFieldObjects();
              }
            }, {
              key: "hasJSActions",
              value: function() {
                return this._transport.hasJSActions();
              }
            }, {
              key: "getCalculationOrderIds",
              value: function() {
                return this._transport.getCalculationOrderIds();
              }
            }]), i;
          }();
          exports.PDFDocumentProxy = PDFDocumentProxy;
          var PDFPageProxy = /* @__PURE__ */ function() {
            function i(a, t, e, n) {
              var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
              _classCallCheck(this, i), this._pageIndex = a, this._pageInfo = t, this._ownerDocument = n, this._transport = e, this._stats = o ? new _display_utils.StatTimer() : null, this._pdfBug = o, this.commonObjs = e.commonObjs, this.objs = new PDFObjects(), this.cleanupAfterRender = !1, this.pendingCleanup = !1, this._intentStates = /* @__PURE__ */ new Map(), this._annotationPromises = /* @__PURE__ */ new Map(), this.destroyed = !1;
            }
            return _createClass(i, [{
              key: "pageNumber",
              get: function() {
                return this._pageIndex + 1;
              }
            }, {
              key: "rotate",
              get: function() {
                return this._pageInfo.rotate;
              }
            }, {
              key: "ref",
              get: function() {
                return this._pageInfo.ref;
              }
            }, {
              key: "userUnit",
              get: function() {
                return this._pageInfo.userUnit;
              }
            }, {
              key: "view",
              get: function() {
                return this._pageInfo.view;
              }
            }, {
              key: "getViewport",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.scale, n = t.rotation, o = n === void 0 ? this.rotate : n, d = t.offsetX, u = d === void 0 ? 0 : d, g = t.offsetY, P = g === void 0 ? 0 : g, F = t.dontFlip, D = F === void 0 ? !1 : F;
                return new _display_utils.PageViewport({
                  viewBox: this.view,
                  scale: e,
                  rotation: o,
                  offsetX: u,
                  offsetY: P,
                  dontFlip: D
                });
              }
            }, {
              key: "getAnnotations",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.intent, n = e === void 0 ? "display" : e, o = this._transport.getRenderingIntent(n), d = this._annotationPromises.get(o.cacheKey);
                return d || (d = this._transport.getAnnotations(this._pageIndex, o.renderingIntent), this._annotationPromises.set(o.cacheKey, d), d = d.then(function(u) {
                  var g = _createForOfIteratorHelper(u), P;
                  try {
                    var F = function() {
                      var B = P.value;
                      B.titleObj !== void 0 && Object.defineProperty(B, "title", {
                        get: function() {
                          return (0, _display_utils.deprecated)("`title`-property on annotation, please use `titleObj` instead."), B.titleObj.str;
                        }
                      }), B.contentsObj !== void 0 && Object.defineProperty(B, "contents", {
                        get: function() {
                          return (0, _display_utils.deprecated)("`contents`-property on annotation, please use `contentsObj` instead."), B.contentsObj.str;
                        }
                      });
                    };
                    for (g.s(); !(P = g.n()).done; )
                      F();
                  } catch (D) {
                    g.e(D);
                  } finally {
                    g.f();
                  }
                  return u;
                })), d;
              }
            }, {
              key: "getJSActions",
              value: function() {
                return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex));
              }
            }, {
              key: "getXfa",
              value: function() {
                var a = _asyncToGenerator(/* @__PURE__ */ _regenerator.default.mark(function e() {
                  var n;
                  return _regenerator.default.wrap(function(d) {
                    for (; ; )
                      switch (d.prev = d.next) {
                        case 0:
                          return d.abrupt("return", ((n = this._transport._htmlForXfa) === null || n === void 0 ? void 0 : n.children[this._pageIndex]) || null);
                        case 1:
                        case "end":
                          return d.stop();
                      }
                  }, e, this);
                }));
                function t() {
                  return a.apply(this, arguments);
                }
                return t;
              }()
            }, {
              key: "render",
              value: function(t) {
                var e, n, o = this, d, u = t.canvasContext, g = t.viewport, P = t.intent, F = P === void 0 ? "display" : P, D = t.annotationMode, B = D === void 0 ? _util.AnnotationMode.ENABLE : D, x = t.transform, w = x === void 0 ? null : x, O = t.imageLayer, k = O === void 0 ? null : O, W = t.canvasFactory, R = W === void 0 ? null : W, U = t.background, v = U === void 0 ? null : U, c = t.optionalContentConfigPromise, p = c === void 0 ? null : c, b = t.annotationCanvasMap, m = b === void 0 ? null : b;
                ((e = arguments[0]) === null || e === void 0 ? void 0 : e.renderInteractiveForms) !== void 0 && ((0, _display_utils.deprecated)("render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead."), arguments[0].renderInteractiveForms === !0 && B === _util.AnnotationMode.ENABLE && (B = _util.AnnotationMode.ENABLE_FORMS)), ((n = arguments[0]) === null || n === void 0 ? void 0 : n.includeAnnotationStorage) !== void 0 && ((0, _display_utils.deprecated)("render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead."), arguments[0].includeAnnotationStorage === !0 && B === _util.AnnotationMode.ENABLE && (B = _util.AnnotationMode.ENABLE_STORAGE)), this._stats && this._stats.time("Overall");
                var y = this._transport.getRenderingIntent(F, B);
                this.pendingCleanup = !1, p || (p = this._transport.getOptionalContentConfig());
                var T = this._intentStates.get(y.cacheKey);
                T || (T = /* @__PURE__ */ Object.create(null), this._intentStates.set(y.cacheKey, T)), T.streamReaderCancelTimeout && (clearTimeout(T.streamReaderCancelTimeout), T.streamReaderCancelTimeout = null);
                var M = R || new DefaultCanvasFactory({
                  ownerDocument: this._ownerDocument
                }), H = !!(y.renderingIntent & _util.RenderingIntentFlag.PRINT);
                T.displayReadyCapability || (T.displayReadyCapability = (0, _util.createPromiseCapability)(), T.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: !1
                }, this._stats && this._stats.time("Page Request"), this._pumpOperatorList(y));
                var L = function(oe) {
                  T.renderTasks.delete(Y), (o.cleanupAfterRender || H) && (o.pendingCleanup = !0), o._tryCleanup(), oe ? (Y.capability.reject(oe), o._abortOperatorList({
                    intentState: T,
                    reason: oe instanceof Error ? oe : new Error(oe)
                  })) : Y.capability.resolve(), o._stats && (o._stats.timeEnd("Rendering"), o._stats.timeEnd("Overall"));
                }, Y = new InternalRenderTask({
                  callback: L,
                  params: {
                    canvasContext: u,
                    viewport: g,
                    transform: w,
                    imageLayer: k,
                    background: v
                  },
                  objs: this.objs,
                  commonObjs: this.commonObjs,
                  annotationCanvasMap: m,
                  operatorList: T.operatorList,
                  pageIndex: this._pageIndex,
                  canvasFactory: M,
                  useRequestAnimationFrame: !H,
                  pdfBug: this._pdfBug
                });
                ((d = T).renderTasks || (d.renderTasks = /* @__PURE__ */ new Set())).add(Y);
                var te = Y.task;
                return Promise.all([T.displayReadyCapability.promise, p]).then(function(K) {
                  var oe = _slicedToArray(K, 2), q = oe[0], X = oe[1];
                  if (o.pendingCleanup) {
                    L();
                    return;
                  }
                  o._stats && o._stats.time("Rendering"), Y.initializeGraphics({
                    transparency: q,
                    optionalContentConfig: X
                  }), Y.operatorListChanged();
                }).catch(L), te;
              }
            }, {
              key: "getOperatorList",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.intent, n = e === void 0 ? "display" : e, o = t.annotationMode, d = o === void 0 ? _util.AnnotationMode.ENABLE : o;
                function u() {
                  P.operatorList.lastChunk && (P.opListReadCapability.resolve(P.operatorList), P.renderTasks.delete(F));
                }
                var g = this._transport.getRenderingIntent(n, d, !0), P = this._intentStates.get(g.cacheKey);
                P || (P = /* @__PURE__ */ Object.create(null), this._intentStates.set(g.cacheKey, P));
                var F;
                if (!P.opListReadCapability) {
                  var D;
                  F = /* @__PURE__ */ Object.create(null), F.operatorListChanged = u, P.opListReadCapability = (0, _util.createPromiseCapability)(), ((D = P).renderTasks || (D.renderTasks = /* @__PURE__ */ new Set())).add(F), P.operatorList = {
                    fnArray: [],
                    argsArray: [],
                    lastChunk: !1
                  }, this._stats && this._stats.time("Page Request"), this._pumpOperatorList(g);
                }
                return P.opListReadCapability.promise;
              }
            }, {
              key: "streamTextContent",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.normalizeWhitespace, n = e === void 0 ? !1 : e, o = t.disableCombineTextItems, d = o === void 0 ? !1 : o, u = t.includeMarkedContent, g = u === void 0 ? !1 : u, P = 100;
                return this._transport.messageHandler.sendWithStream("GetTextContent", {
                  pageIndex: this._pageIndex,
                  normalizeWhitespace: n === !0,
                  combineTextItems: d !== !0,
                  includeMarkedContent: g === !0
                }, {
                  highWaterMark: P,
                  size: function(D) {
                    return D.items.length;
                  }
                });
              }
            }, {
              key: "getTextContent",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (this._transport._htmlForXfa)
                  return this.getXfa().then(function(n) {
                    return _xfa_text.XfaText.textContent(n);
                  });
                var e = this.streamTextContent(t);
                return new Promise(function(n, o) {
                  function d() {
                    u.read().then(function(P) {
                      var F, D = P.value, B = P.done;
                      if (B) {
                        n(g);
                        return;
                      }
                      Object.assign(g.styles, D.styles), (F = g.items).push.apply(F, _toConsumableArray(D.items)), d();
                    }, o);
                  }
                  var u = e.getReader(), g = {
                    items: [],
                    styles: /* @__PURE__ */ Object.create(null)
                  };
                  d();
                });
              }
            }, {
              key: "getStructTree",
              value: function() {
                return this._structTreePromise || (this._structTreePromise = this._transport.getStructTree(this._pageIndex));
              }
            }, {
              key: "_destroy",
              value: function() {
                this.destroyed = !0;
                var t = [], e = _createForOfIteratorHelper(this._intentStates.values()), n;
                try {
                  for (e.s(); !(n = e.n()).done; ) {
                    var o = n.value;
                    if (this._abortOperatorList({
                      intentState: o,
                      reason: new Error("Page was destroyed."),
                      force: !0
                    }), !o.opListReadCapability) {
                      var d = _createForOfIteratorHelper(o.renderTasks), u;
                      try {
                        for (d.s(); !(u = d.n()).done; ) {
                          var g = u.value;
                          t.push(g.completed), g.cancel();
                        }
                      } catch (P) {
                        d.e(P);
                      } finally {
                        d.f();
                      }
                    }
                  }
                } catch (P) {
                  e.e(P);
                } finally {
                  e.f();
                }
                return this.objs.clear(), this._annotationPromises.clear(), this._jsActionsPromise = null, this._structTreePromise = null, this.pendingCleanup = !1, Promise.all(t);
              }
            }, {
              key: "cleanup",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                return this.pendingCleanup = !0, this._tryCleanup(t);
              }
            }, {
              key: "_tryCleanup",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                if (!this.pendingCleanup)
                  return !1;
                var e = _createForOfIteratorHelper(this._intentStates.values()), n;
                try {
                  for (e.s(); !(n = e.n()).done; ) {
                    var o = n.value, d = o.renderTasks, u = o.operatorList;
                    if (d.size > 0 || !u.lastChunk)
                      return !1;
                  }
                } catch (g) {
                  e.e(g);
                } finally {
                  e.f();
                }
                return this._intentStates.clear(), this.objs.clear(), this._annotationPromises.clear(), this._jsActionsPromise = null, this._structTreePromise = null, t && this._stats && (this._stats = new _display_utils.StatTimer()), this.pendingCleanup = !1, !0;
              }
            }, {
              key: "_startRenderPage",
              value: function(t, e) {
                var n = this._intentStates.get(e);
                !n || (this._stats && this._stats.timeEnd("Page Request"), n.displayReadyCapability && n.displayReadyCapability.resolve(t));
              }
            }, {
              key: "_renderPageChunk",
              value: function(t, e) {
                for (var n = 0, o = t.length; n < o; n++)
                  e.operatorList.fnArray.push(t.fnArray[n]), e.operatorList.argsArray.push(t.argsArray[n]);
                e.operatorList.lastChunk = t.lastChunk;
                var d = _createForOfIteratorHelper(e.renderTasks), u;
                try {
                  for (d.s(); !(u = d.n()).done; ) {
                    var g = u.value;
                    g.operatorListChanged();
                  }
                } catch (P) {
                  d.e(P);
                } finally {
                  d.f();
                }
                t.lastChunk && this._tryCleanup();
              }
            }, {
              key: "_pumpOperatorList",
              value: function(t) {
                var e = this, n = t.renderingIntent, o = t.cacheKey, d = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                  pageIndex: this._pageIndex,
                  intent: n,
                  cacheKey: o,
                  annotationStorage: n & _util.RenderingIntentFlag.ANNOTATIONS_STORAGE ? this._transport.annotationStorage.serializable : null
                }), u = d.getReader(), g = this._intentStates.get(o);
                g.streamReader = u;
                var P = function F() {
                  u.read().then(function(D) {
                    var B = D.value, x = D.done;
                    if (x) {
                      g.streamReader = null;
                      return;
                    }
                    e._transport.destroyed || (e._renderPageChunk(B, g), F());
                  }, function(D) {
                    if (g.streamReader = null, !e._transport.destroyed) {
                      if (g.operatorList) {
                        g.operatorList.lastChunk = !0;
                        var B = _createForOfIteratorHelper(g.renderTasks), x;
                        try {
                          for (B.s(); !(x = B.n()).done; ) {
                            var w = x.value;
                            w.operatorListChanged();
                          }
                        } catch (O) {
                          B.e(O);
                        } finally {
                          B.f();
                        }
                        e._tryCleanup();
                      }
                      if (g.displayReadyCapability)
                        g.displayReadyCapability.reject(D);
                      else if (g.opListReadCapability)
                        g.opListReadCapability.reject(D);
                      else
                        throw D;
                    }
                  });
                };
                P();
              }
            }, {
              key: "_abortOperatorList",
              value: function(t) {
                var e = this, n = t.intentState, o = t.reason, d = t.force, u = d === void 0 ? !1 : d;
                if (!!n.streamReader) {
                  if (!u) {
                    if (n.renderTasks.size > 0)
                      return;
                    if (o instanceof _display_utils.RenderingCancelledException) {
                      n.streamReaderCancelTimeout = setTimeout(function() {
                        e._abortOperatorList({
                          intentState: n,
                          reason: o,
                          force: !0
                        }), n.streamReaderCancelTimeout = null;
                      }, RENDERING_CANCELLED_TIMEOUT);
                      return;
                    }
                  }
                  if (n.streamReader.cancel(new _util.AbortException(o.message)).catch(function() {
                  }), n.streamReader = null, !this._transport.destroyed) {
                    var g = _createForOfIteratorHelper(this._intentStates), P;
                    try {
                      for (g.s(); !(P = g.n()).done; ) {
                        var F = _slicedToArray(P.value, 2), D = F[0], B = F[1];
                        if (B === n) {
                          this._intentStates.delete(D);
                          break;
                        }
                      }
                    } catch (x) {
                      g.e(x);
                    } finally {
                      g.f();
                    }
                    this.cleanup();
                  }
                }
              }
            }, {
              key: "stats",
              get: function() {
                return this._stats;
              }
            }]), i;
          }();
          exports.PDFPageProxy = PDFPageProxy;
          var LoopbackPort = /* @__PURE__ */ function() {
            function i() {
              _classCallCheck(this, i), this._listeners = [], this._deferred = Promise.resolve();
            }
            return _createClass(i, [{
              key: "postMessage",
              value: function(t, e) {
                var n = this;
                function o(u) {
                  if (globalThis.structuredClone)
                    return globalThis.structuredClone(u, e);
                  function g(F) {
                    if (typeof F == "function" || _typeof(F) === "symbol" || F instanceof URL)
                      throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(F == null ? void 0 : F.toString()));
                    if (_typeof(F) !== "object" || F === null)
                      return F;
                    if (P.has(F))
                      return P.get(F);
                    var D, B;
                    if ((D = F.buffer) && (0, _util.isArrayBuffer)(D))
                      return e != null && e.includes(D) ? B = new F.constructor(D, F.byteOffset, F.byteLength) : B = new F.constructor(F), P.set(F, B), B;
                    if (F instanceof Map) {
                      B = /* @__PURE__ */ new Map(), P.set(F, B);
                      var x = _createForOfIteratorHelper(F), w;
                      try {
                        for (x.s(); !(w = x.n()).done; ) {
                          var O = _slicedToArray(w.value, 2), k = O[0], W = O[1];
                          B.set(k, g(W));
                        }
                      } catch (y) {
                        x.e(y);
                      } finally {
                        x.f();
                      }
                      return B;
                    }
                    if (F instanceof Set) {
                      B = /* @__PURE__ */ new Set(), P.set(F, B);
                      var R = _createForOfIteratorHelper(F), U;
                      try {
                        for (R.s(); !(U = R.n()).done; ) {
                          var v = U.value;
                          B.add(g(v));
                        }
                      } catch (y) {
                        R.e(y);
                      } finally {
                        R.f();
                      }
                      return B;
                    }
                    B = Array.isArray(F) ? [] : /* @__PURE__ */ Object.create(null), P.set(F, B);
                    for (var c in F) {
                      for (var p, b = void 0, m = F; !(b = Object.getOwnPropertyDescriptor(m, c)); )
                        m = Object.getPrototypeOf(m);
                      typeof b.value > "u" || typeof b.value == "function" && !((p = F.hasOwnProperty) !== null && p !== void 0 && p.call(F, c)) || (B[c] = g(b.value));
                    }
                    return B;
                  }
                  var P = /* @__PURE__ */ new WeakMap();
                  return g(u);
                }
                var d = {
                  data: o(t)
                };
                this._deferred.then(function() {
                  var u = _createForOfIteratorHelper(n._listeners), g;
                  try {
                    for (u.s(); !(g = u.n()).done; ) {
                      var P = g.value;
                      P.call(n, d);
                    }
                  } catch (F) {
                    u.e(F);
                  } finally {
                    u.f();
                  }
                });
              }
            }, {
              key: "addEventListener",
              value: function(t, e) {
                this._listeners.push(e);
              }
            }, {
              key: "removeEventListener",
              value: function(t, e) {
                var n = this._listeners.indexOf(e);
                this._listeners.splice(n, 1);
              }
            }, {
              key: "terminate",
              value: function() {
                this._listeners.length = 0;
              }
            }]), i;
          }();
          exports.LoopbackPort = LoopbackPort;
          var PDFWorkerUtil = {
            isWorkerDisabled: !1,
            fallbackWorkerSrc: null,
            fakeWorkerId: 0
          };
          {
            if (_is_node.isNodeJS && typeof commonjsRequire == "function")
              PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
            else if ((typeof document > "u" ? "undefined" : _typeof(document)) === "object") {
              var _document, _document$currentScri, pdfjsFilePath = (_document = document) === null || _document === void 0 || (_document$currentScri = _document.currentScript) === null || _document$currentScri === void 0 ? void 0 : _document$currentScri.src;
              pdfjsFilePath && (PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
            }
            PDFWorkerUtil.createCDNWrapper = function(i) {
              var a = 'importScripts("'.concat(i, '");');
              return URL.createObjectURL(new Blob([a]));
            };
          }
          var PDFWorker = /* @__PURE__ */ function() {
            function PDFWorker() {
              var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = i.name, t = a === void 0 ? null : a, e = i.port, n = e === void 0 ? null : e, o = i.verbosity, d = o === void 0 ? (0, _util.getVerbosityLevel)() : o;
              if (_classCallCheck(this, PDFWorker), n && PDFWorker._workerPorts.has(n))
                throw new Error("Cannot use more than one PDFWorker per port.");
              if (this.name = t, this.destroyed = !1, this.verbosity = d, this._readyCapability = (0, _util.createPromiseCapability)(), this._port = null, this._webWorker = null, this._messageHandler = null, n) {
                PDFWorker._workerPorts.set(n, this), this._initializeFromPort(n);
                return;
              }
              this._initialize();
            }
            return _createClass(PDFWorker, [{
              key: "promise",
              get: function() {
                return this._readyCapability.promise;
              }
            }, {
              key: "port",
              get: function() {
                return this._port;
              }
            }, {
              key: "messageHandler",
              get: function() {
                return this._messageHandler;
              }
            }, {
              key: "_initializeFromPort",
              value: function(a) {
                this._port = a, this._messageHandler = new _message_handler.MessageHandler("main", "worker", a), this._messageHandler.on("ready", function() {
                }), this._readyCapability.resolve();
              }
            }, {
              key: "_initialize",
              value: function() {
                var a = this;
                if (typeof Worker < "u" && !PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
                  var t = PDFWorker.workerSrc;
                  try {
                    (0, _util.isSameOrigin)(window.location.href, t) || (t = PDFWorkerUtil.createCDNWrapper(new URL(t, window.location).href));
                    var e = new Worker(t), n = new _message_handler.MessageHandler("main", "worker", e), o = function() {
                      e.removeEventListener("error", d), n.destroy(), e.terminate(), a.destroyed ? a._readyCapability.reject(new Error("Worker was destroyed")) : a._setupFakeWorker();
                    }, d = function() {
                      a._webWorker || o();
                    };
                    e.addEventListener("error", d), n.on("test", function(g) {
                      if (e.removeEventListener("error", d), a.destroyed) {
                        o();
                        return;
                      }
                      g ? (a._messageHandler = n, a._port = e, a._webWorker = e, a._readyCapability.resolve(), n.send("configure", {
                        verbosity: a.verbosity
                      })) : (a._setupFakeWorker(), n.destroy(), e.terminate());
                    }), n.on("ready", function(g) {
                      if (e.removeEventListener("error", d), a.destroyed) {
                        o();
                        return;
                      }
                      try {
                        u();
                      } catch {
                        a._setupFakeWorker();
                      }
                    });
                    var u = function() {
                      var P = new Uint8Array([255]);
                      try {
                        n.send("test", P, [P.buffer]);
                      } catch {
                        (0, _util.warn)("Cannot use postMessage transfers."), P[0] = 0, n.send("test", P);
                      }
                    };
                    u();
                    return;
                  } catch {
                    (0, _util.info)("The worker has been disabled.");
                  }
                }
                this._setupFakeWorker();
              }
            }, {
              key: "_setupFakeWorker",
              value: function() {
                var a = this;
                PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), PDFWorker._setupFakeWorkerGlobal.then(function(t) {
                  if (a.destroyed) {
                    a._readyCapability.reject(new Error("Worker was destroyed"));
                    return;
                  }
                  var e = new LoopbackPort();
                  a._port = e;
                  var n = "fake".concat(PDFWorkerUtil.fakeWorkerId++), o = new _message_handler.MessageHandler(n + "_worker", n, e);
                  t.setup(o, e);
                  var d = new _message_handler.MessageHandler(n, n + "_worker", e);
                  a._messageHandler = d, a._readyCapability.resolve(), d.send("configure", {
                    verbosity: a.verbosity
                  });
                }).catch(function(t) {
                  a._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(t.message, '".')));
                });
              }
            }, {
              key: "destroy",
              value: function() {
                this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), PDFWorker._workerPorts.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
              }
            }], [{
              key: "_workerPorts",
              get: function() {
                return (0, _util.shadow)(this, "_workerPorts", /* @__PURE__ */ new WeakMap());
              }
            }, {
              key: "fromPort",
              value: function(a) {
                if (!(a != null && a.port))
                  throw new Error("PDFWorker.fromPort - invalid method signature.");
                return this._workerPorts.has(a.port) ? this._workerPorts.get(a.port) : new PDFWorker(a);
              }
            }, {
              key: "workerSrc",
              get: function() {
                if (_worker_options.GlobalWorkerOptions.workerSrc)
                  return _worker_options.GlobalWorkerOptions.workerSrc;
                if (PDFWorkerUtil.fallbackWorkerSrc !== null)
                  return _is_node.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
                throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
              }
            }, {
              key: "_mainThreadWorkerMessageHandler",
              get: function() {
                try {
                  var a;
                  return ((a = globalThis.pdfjsWorker) === null || a === void 0 ? void 0 : a.WorkerMessageHandler) || null;
                } catch {
                  return null;
                }
              }
            }, {
              key: "_setupFakeWorkerGlobal",
              get: function get() {
                var _this11 = this, loader = /* @__PURE__ */ function() {
                  var _ref15 = _asyncToGenerator(/* @__PURE__ */ _regenerator.default.mark(function _callee4() {
                    var mainWorkerMessageHandler, worker;
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      for (; ; )
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (mainWorkerMessageHandler = _this11._mainThreadWorkerMessageHandler, !mainWorkerMessageHandler) {
                              _context4.next = 3;
                              break;
                            }
                            return _context4.abrupt("return", mainWorkerMessageHandler);
                          case 3:
                            if (!(_is_node.isNodeJS && typeof commonjsRequire == "function")) {
                              _context4.next = 6;
                              break;
                            }
                            return worker = eval("require")(_this11.workerSrc), _context4.abrupt("return", worker.WorkerMessageHandler);
                          case 6:
                            return _context4.next = 8, (0, _display_utils.loadScript)(_this11.workerSrc);
                          case 8:
                            return _context4.abrupt("return", window.pdfjsWorker.WorkerMessageHandler);
                          case 9:
                          case "end":
                            return _context4.stop();
                        }
                    }, _callee4);
                  }));
                  return function i() {
                    return _ref15.apply(this, arguments);
                  };
                }();
                return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
              }
            }]), PDFWorker;
          }();
          exports.PDFWorker = PDFWorker, PDFWorker.getWorkerSrc = function() {
            return (0, _display_utils.deprecated)("`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead."), this.workerSrc;
          };
          var _docStats = /* @__PURE__ */ new WeakMap(), _pageCache = /* @__PURE__ */ new WeakMap(), _pagePromises = /* @__PURE__ */ new WeakMap(), _metadataPromise = /* @__PURE__ */ new WeakMap(), WorkerTransport = /* @__PURE__ */ function() {
            function i(a, t, e, n) {
              _classCallCheck(this, i), _classPrivateFieldInitSpec(this, _docStats, {
                writable: !0,
                value: null
              }), _classPrivateFieldInitSpec(this, _pageCache, {
                writable: !0,
                value: /* @__PURE__ */ new Map()
              }), _classPrivateFieldInitSpec(this, _pagePromises, {
                writable: !0,
                value: /* @__PURE__ */ new Map()
              }), _classPrivateFieldInitSpec(this, _metadataPromise, {
                writable: !0,
                value: null
              }), this.messageHandler = a, this.loadingTask = t, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({
                docId: t.docId,
                onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                ownerDocument: n.ownerDocument,
                styleElement: n.styleElement
              }), this._params = n, n.useWorkerFetch || (this.CMapReaderFactory = new n.CMapReaderFactory({
                baseUrl: n.cMapUrl,
                isCompressed: n.cMapPacked
              }), this.StandardFontDataFactory = new n.StandardFontDataFactory({
                baseUrl: n.standardFontDataUrl
              })), this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this._networkStream = e, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = (0, _util.createPromiseCapability)(), this.setupMessageHandler();
            }
            return _createClass(i, [{
              key: "annotationStorage",
              get: function() {
                return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
              }
            }, {
              key: "stats",
              get: function() {
                return _classPrivateFieldGet(this, _docStats);
              }
            }, {
              key: "getRenderingIntent",
              value: function(t) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _util.AnnotationMode.ENABLE, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, o = _util.RenderingIntentFlag.DISPLAY, d = "";
                switch (t) {
                  case "any":
                    o = _util.RenderingIntentFlag.ANY;
                    break;
                  case "display":
                    break;
                  case "print":
                    o = _util.RenderingIntentFlag.PRINT;
                    break;
                  default:
                    (0, _util.warn)("getRenderingIntent - invalid intent: ".concat(t));
                }
                switch (e) {
                  case _util.AnnotationMode.DISABLE:
                    o += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                    break;
                  case _util.AnnotationMode.ENABLE:
                    break;
                  case _util.AnnotationMode.ENABLE_FORMS:
                    o += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                    break;
                  case _util.AnnotationMode.ENABLE_STORAGE:
                    o += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, d = this.annotationStorage.lastModified;
                    break;
                  default:
                    (0, _util.warn)("getRenderingIntent - invalid annotationMode: ".concat(e));
                }
                return n && (o += _util.RenderingIntentFlag.OPLIST), {
                  renderingIntent: o,
                  cacheKey: "".concat(o, "_").concat(d)
                };
              }
            }, {
              key: "destroy",
              value: function() {
                var t = this;
                if (this.destroyCapability)
                  return this.destroyCapability.promise;
                this.destroyed = !0, this.destroyCapability = (0, _util.createPromiseCapability)(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                var e = [], n = _createForOfIteratorHelper(_classPrivateFieldGet(this, _pageCache).values()), o;
                try {
                  for (n.s(); !(o = n.n()).done; ) {
                    var d = o.value;
                    e.push(d._destroy());
                  }
                } catch (g) {
                  n.e(g);
                } finally {
                  n.f();
                }
                _classPrivateFieldGet(this, _pageCache).clear(), _classPrivateFieldGet(this, _pagePromises).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
                var u = this.messageHandler.sendWithPromise("Terminate", null);
                return e.push(u), Promise.all(e).then(function() {
                  t.commonObjs.clear(), t.fontLoader.clear(), _classPrivateFieldSet(t, _metadataPromise, null), t._getFieldObjectsPromise = null, t._hasJSActionsPromise = null, t._networkStream && t._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")), t.messageHandler && (t.messageHandler.destroy(), t.messageHandler = null), t.destroyCapability.resolve();
                }, this.destroyCapability.reject), this.destroyCapability.promise;
              }
            }, {
              key: "setupMessageHandler",
              value: function() {
                var t = this, e = this.messageHandler, n = this.loadingTask;
                e.on("GetReader", function(o, d) {
                  (0, _util.assert)(t._networkStream, "GetReader - no `IPDFStream` instance available."), t._fullReader = t._networkStream.getFullReader(), t._fullReader.onProgress = function(u) {
                    t._lastProgress = {
                      loaded: u.loaded,
                      total: u.total
                    };
                  }, d.onPull = function() {
                    t._fullReader.read().then(function(u) {
                      var g = u.value, P = u.done;
                      if (P) {
                        d.close();
                        return;
                      }
                      (0, _util.assert)((0, _util.isArrayBuffer)(g), "GetReader - expected an ArrayBuffer."), d.enqueue(new Uint8Array(g), 1, [g]);
                    }).catch(function(u) {
                      d.error(u);
                    });
                  }, d.onCancel = function(u) {
                    t._fullReader.cancel(u), d.ready.catch(function(g) {
                      if (!t.destroyed)
                        throw g;
                    });
                  };
                }), e.on("ReaderHeadersReady", function(o) {
                  var d = (0, _util.createPromiseCapability)(), u = t._fullReader;
                  return u.headersReady.then(function() {
                    if (!u.isStreamingSupported || !u.isRangeSupported) {
                      if (t._lastProgress) {
                        var g;
                        (g = n.onProgress) === null || g === void 0 || g.call(n, t._lastProgress);
                      }
                      u.onProgress = function(P) {
                        var F;
                        (F = n.onProgress) === null || F === void 0 || F.call(n, {
                          loaded: P.loaded,
                          total: P.total
                        });
                      };
                    }
                    d.resolve({
                      isStreamingSupported: u.isStreamingSupported,
                      isRangeSupported: u.isRangeSupported,
                      contentLength: u.contentLength
                    });
                  }, d.reject), d.promise;
                }), e.on("GetRangeReader", function(o, d) {
                  (0, _util.assert)(t._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                  var u = t._networkStream.getRangeReader(o.begin, o.end);
                  if (!u) {
                    d.close();
                    return;
                  }
                  d.onPull = function() {
                    u.read().then(function(g) {
                      var P = g.value, F = g.done;
                      if (F) {
                        d.close();
                        return;
                      }
                      (0, _util.assert)((0, _util.isArrayBuffer)(P), "GetRangeReader - expected an ArrayBuffer."), d.enqueue(new Uint8Array(P), 1, [P]);
                    }).catch(function(g) {
                      d.error(g);
                    });
                  }, d.onCancel = function(g) {
                    u.cancel(g), d.ready.catch(function(P) {
                      if (!t.destroyed)
                        throw P;
                    });
                  };
                }), e.on("GetDoc", function(o) {
                  var d = o.pdfInfo;
                  t._numPages = d.numPages, t._htmlForXfa = d.htmlForXfa, delete d.htmlForXfa, n._capability.resolve(new PDFDocumentProxy(d, t));
                }), e.on("DocException", function(o) {
                  var d;
                  switch (o.name) {
                    case "PasswordException":
                      d = new _util.PasswordException(o.message, o.code);
                      break;
                    case "InvalidPDFException":
                      d = new _util.InvalidPDFException(o.message);
                      break;
                    case "MissingPDFException":
                      d = new _util.MissingPDFException(o.message);
                      break;
                    case "UnexpectedResponseException":
                      d = new _util.UnexpectedResponseException(o.message, o.status);
                      break;
                    case "UnknownErrorException":
                      d = new _util.UnknownErrorException(o.message, o.details);
                      break;
                    default:
                      (0, _util.unreachable)("DocException - expected a valid Error.");
                  }
                  n._capability.reject(d);
                }), e.on("PasswordRequest", function(o) {
                  if (t._passwordCapability = (0, _util.createPromiseCapability)(), n.onPassword) {
                    var d = function(g) {
                      t._passwordCapability.resolve({
                        password: g
                      });
                    };
                    try {
                      n.onPassword(d, o.code);
                    } catch (u) {
                      t._passwordCapability.reject(u);
                    }
                  } else
                    t._passwordCapability.reject(new _util.PasswordException(o.message, o.code));
                  return t._passwordCapability.promise;
                }), e.on("DataLoaded", function(o) {
                  var d;
                  (d = n.onProgress) === null || d === void 0 || d.call(n, {
                    loaded: o.length,
                    total: o.length
                  }), t.downloadInfoCapability.resolve(o);
                }), e.on("StartRenderPage", function(o) {
                  if (!t.destroyed) {
                    var d = _classPrivateFieldGet(t, _pageCache).get(o.pageIndex);
                    d._startRenderPage(o.transparency, o.cacheKey);
                  }
                }), e.on("commonobj", function(o) {
                  var d, u = _slicedToArray(o, 3), g = u[0], P = u[1], F = u[2];
                  if (!t.destroyed && !t.commonObjs.has(g))
                    switch (P) {
                      case "Font":
                        var D = t._params;
                        if ("error" in F) {
                          var B = F.error;
                          (0, _util.warn)("Error during font loading: ".concat(B)), t.commonObjs.resolve(g, B);
                          break;
                        }
                        var x = null;
                        D.pdfBug && (d = globalThis.FontInspector) !== null && d !== void 0 && d.enabled && (x = {
                          registerFont: function(k, W) {
                            globalThis.FontInspector.fontAdded(k, W);
                          }
                        });
                        var w = new _font_loader.FontFaceObject(F, {
                          isEvalSupported: D.isEvalSupported,
                          disableFontFace: D.disableFontFace,
                          ignoreErrors: D.ignoreErrors,
                          onUnsupportedFeature: t._onUnsupportedFeature.bind(t),
                          fontRegistry: x
                        });
                        t.fontLoader.bind(w).catch(function(O) {
                          return e.sendWithPromise("FontFallback", {
                            id: g
                          });
                        }).finally(function() {
                          !D.fontExtraProperties && w.data && (w.data = null), t.commonObjs.resolve(g, w);
                        });
                        break;
                      case "FontPath":
                      case "Image":
                        t.commonObjs.resolve(g, F);
                        break;
                      default:
                        throw new Error("Got unknown common object type ".concat(P));
                    }
                }), e.on("obj", function(o) {
                  var d, u = _slicedToArray(o, 4), g = u[0], P = u[1], F = u[2], D = u[3];
                  if (!t.destroyed) {
                    var B = _classPrivateFieldGet(t, _pageCache).get(P);
                    if (!B.objs.has(g))
                      switch (F) {
                        case "Image":
                          B.objs.resolve(g, D);
                          var x = 8e6;
                          (D == null || (d = D.data) === null || d === void 0 ? void 0 : d.length) > x && (B.cleanupAfterRender = !0);
                          break;
                        case "Pattern":
                          B.objs.resolve(g, D);
                          break;
                        default:
                          throw new Error("Got unknown object type ".concat(F));
                      }
                  }
                }), e.on("DocProgress", function(o) {
                  var d;
                  t.destroyed || (d = n.onProgress) === null || d === void 0 || d.call(n, {
                    loaded: o.loaded,
                    total: o.total
                  });
                }), e.on("DocStats", function(o) {
                  t.destroyed || _classPrivateFieldSet(t, _docStats, Object.freeze({
                    streamTypes: Object.freeze(o.streamTypes),
                    fontTypes: Object.freeze(o.fontTypes)
                  }));
                }), e.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this)), e.on("FetchBuiltInCMap", function(o) {
                  return t.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : t.CMapReaderFactory ? t.CMapReaderFactory.fetch(o) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."));
                }), e.on("FetchStandardFontData", function(o) {
                  return t.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : t.StandardFontDataFactory ? t.StandardFontDataFactory.fetch(o) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."));
                });
              }
            }, {
              key: "_onUnsupportedFeature",
              value: function(t) {
                var e, n, o = t.featureId;
                this.destroyed || (e = (n = this.loadingTask).onUnsupportedFeature) === null || e === void 0 || e.call(n, o);
              }
            }, {
              key: "getData",
              value: function() {
                return this.messageHandler.sendWithPromise("GetData", null);
              }
            }, {
              key: "getPage",
              value: function(t) {
                var e = this;
                if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
                  return Promise.reject(new Error("Invalid page request"));
                var n = t - 1, o = _classPrivateFieldGet(this, _pagePromises).get(n);
                if (o)
                  return o;
                var d = this.messageHandler.sendWithPromise("GetPage", {
                  pageIndex: n
                }).then(function(u) {
                  if (e.destroyed)
                    throw new Error("Transport destroyed");
                  var g = new PDFPageProxy(n, u, e, e._params.ownerDocument, e._params.pdfBug);
                  return _classPrivateFieldGet(e, _pageCache).set(n, g), g;
                });
                return _classPrivateFieldGet(this, _pagePromises).set(n, d), d;
              }
            }, {
              key: "getPageIndex",
              value: function(t) {
                return this.messageHandler.sendWithPromise("GetPageIndex", {
                  ref: t
                });
              }
            }, {
              key: "getAnnotations",
              value: function(t, e) {
                return this.messageHandler.sendWithPromise("GetAnnotations", {
                  pageIndex: t,
                  intent: e
                });
              }
            }, {
              key: "saveDocument",
              value: function() {
                var t, e, n = this;
                return this.messageHandler.sendWithPromise("SaveDocument", {
                  isPureXfa: !!this._htmlForXfa,
                  numPages: this._numPages,
                  annotationStorage: this.annotationStorage.serializable,
                  filename: (t = (e = this._fullReader) === null || e === void 0 ? void 0 : e.filename) !== null && t !== void 0 ? t : null
                }).finally(function() {
                  n.annotationStorage.resetModified();
                });
              }
            }, {
              key: "getFieldObjects",
              value: function() {
                return this._getFieldObjectsPromise || (this._getFieldObjectsPromise = this.messageHandler.sendWithPromise("GetFieldObjects", null));
              }
            }, {
              key: "hasJSActions",
              value: function() {
                return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null));
              }
            }, {
              key: "getCalculationOrderIds",
              value: function() {
                return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
              }
            }, {
              key: "getDestinations",
              value: function() {
                return this.messageHandler.sendWithPromise("GetDestinations", null);
              }
            }, {
              key: "getDestination",
              value: function(t) {
                return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                  id: t
                });
              }
            }, {
              key: "getPageLabels",
              value: function() {
                return this.messageHandler.sendWithPromise("GetPageLabels", null);
              }
            }, {
              key: "getPageLayout",
              value: function() {
                return this.messageHandler.sendWithPromise("GetPageLayout", null);
              }
            }, {
              key: "getPageMode",
              value: function() {
                return this.messageHandler.sendWithPromise("GetPageMode", null);
              }
            }, {
              key: "getViewerPreferences",
              value: function() {
                return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
              }
            }, {
              key: "getOpenAction",
              value: function() {
                return this.messageHandler.sendWithPromise("GetOpenAction", null);
              }
            }, {
              key: "getAttachments",
              value: function() {
                return this.messageHandler.sendWithPromise("GetAttachments", null);
              }
            }, {
              key: "getJavaScript",
              value: function() {
                return this.messageHandler.sendWithPromise("GetJavaScript", null);
              }
            }, {
              key: "getDocJSActions",
              value: function() {
                return this.messageHandler.sendWithPromise("GetDocJSActions", null);
              }
            }, {
              key: "getPageJSActions",
              value: function(t) {
                return this.messageHandler.sendWithPromise("GetPageJSActions", {
                  pageIndex: t
                });
              }
            }, {
              key: "getStructTree",
              value: function(t) {
                return this.messageHandler.sendWithPromise("GetStructTree", {
                  pageIndex: t
                });
              }
            }, {
              key: "getOutline",
              value: function() {
                return this.messageHandler.sendWithPromise("GetOutline", null);
              }
            }, {
              key: "getOptionalContentConfig",
              value: function() {
                return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(function(t) {
                  return new _optional_content_config.OptionalContentConfig(t);
                });
              }
            }, {
              key: "getPermissions",
              value: function() {
                return this.messageHandler.sendWithPromise("GetPermissions", null);
              }
            }, {
              key: "getMetadata",
              value: function() {
                var t = this;
                return _classPrivateFieldGet(this, _metadataPromise) || _classPrivateFieldSet(this, _metadataPromise, this.messageHandler.sendWithPromise("GetMetadata", null).then(function(e) {
                  var n, o, d, u;
                  return {
                    info: e[0],
                    metadata: e[1] ? new _metadata.Metadata(e[1]) : null,
                    contentDispositionFilename: (n = (o = t._fullReader) === null || o === void 0 ? void 0 : o.filename) !== null && n !== void 0 ? n : null,
                    contentLength: (d = (u = t._fullReader) === null || u === void 0 ? void 0 : u.contentLength) !== null && d !== void 0 ? d : null
                  };
                }));
              }
            }, {
              key: "getMarkInfo",
              value: function() {
                return this.messageHandler.sendWithPromise("GetMarkInfo", null);
              }
            }, {
              key: "startCleanup",
              value: function() {
                var a = _asyncToGenerator(/* @__PURE__ */ _regenerator.default.mark(function e() {
                  var n, o, d, u, g, P = arguments;
                  return _regenerator.default.wrap(function(D) {
                    for (; ; )
                      switch (D.prev = D.next) {
                        case 0:
                          return n = P.length > 0 && P[0] !== void 0 ? P[0] : !1, D.next = 3, this.messageHandler.sendWithPromise("Cleanup", null);
                        case 3:
                          if (!this.destroyed) {
                            D.next = 5;
                            break;
                          }
                          return D.abrupt("return");
                        case 5:
                          o = _createForOfIteratorHelper(_classPrivateFieldGet(this, _pageCache).values()), D.prev = 6, o.s();
                        case 8:
                          if ((d = o.n()).done) {
                            D.next = 15;
                            break;
                          }
                          if (u = d.value, g = u.cleanup(), g) {
                            D.next = 13;
                            break;
                          }
                          throw new Error("startCleanup: Page ".concat(u.pageNumber, " is currently rendering."));
                        case 13:
                          D.next = 8;
                          break;
                        case 15:
                          D.next = 20;
                          break;
                        case 17:
                          D.prev = 17, D.t0 = D.catch(6), o.e(D.t0);
                        case 20:
                          return D.prev = 20, o.f(), D.finish(20);
                        case 23:
                          this.commonObjs.clear(), n || this.fontLoader.clear(), _classPrivateFieldSet(this, _metadataPromise, null), this._getFieldObjectsPromise = null, this._hasJSActionsPromise = null;
                        case 28:
                        case "end":
                          return D.stop();
                      }
                  }, e, this, [[6, 17, 20, 23]]);
                }));
                function t() {
                  return a.apply(this, arguments);
                }
                return t;
              }()
            }, {
              key: "loadingParams",
              get: function() {
                var t = this._params;
                return (0, _util.shadow)(this, "loadingParams", {
                  disableAutoFetch: t.disableAutoFetch,
                  enableXfa: t.enableXfa
                });
              }
            }]), i;
          }(), PDFObjects = /* @__PURE__ */ function() {
            function i() {
              _classCallCheck(this, i), this._objs = /* @__PURE__ */ Object.create(null);
            }
            return _createClass(i, [{
              key: "_ensureObj",
              value: function(t) {
                return this._objs[t] ? this._objs[t] : this._objs[t] = {
                  capability: (0, _util.createPromiseCapability)(),
                  data: null,
                  resolved: !1
                };
              }
            }, {
              key: "get",
              value: function(t) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (e)
                  return this._ensureObj(t).capability.promise.then(e), null;
                var n = this._objs[t];
                if (!n || !n.resolved)
                  throw new Error("Requesting object that isn't resolved yet ".concat(t, "."));
                return n.data;
              }
            }, {
              key: "has",
              value: function(t) {
                var e = this._objs[t];
                return (e == null ? void 0 : e.resolved) || !1;
              }
            }, {
              key: "resolve",
              value: function(t, e) {
                var n = this._ensureObj(t);
                n.resolved = !0, n.data = e, n.capability.resolve(e);
              }
            }, {
              key: "clear",
              value: function() {
                this._objs = /* @__PURE__ */ Object.create(null);
              }
            }]), i;
          }(), RenderTask = /* @__PURE__ */ function() {
            function i(a) {
              _classCallCheck(this, i), this._internalRenderTask = a, this.onContinue = null;
            }
            return _createClass(i, [{
              key: "promise",
              get: function() {
                return this._internalRenderTask.capability.promise;
              }
            }, {
              key: "cancel",
              value: function() {
                this._internalRenderTask.cancel();
              }
            }]), i;
          }();
          exports.RenderTask = RenderTask;
          var InternalRenderTask = /* @__PURE__ */ function() {
            function i(a) {
              var t = a.callback, e = a.params, n = a.objs, o = a.commonObjs, d = a.annotationCanvasMap, u = a.operatorList, g = a.pageIndex, P = a.canvasFactory, F = a.useRequestAnimationFrame, D = F === void 0 ? !1 : F, B = a.pdfBug, x = B === void 0 ? !1 : B;
              _classCallCheck(this, i), this.callback = t, this.params = e, this.objs = n, this.commonObjs = o, this.annotationCanvasMap = d, this.operatorListIdx = null, this.operatorList = u, this._pageIndex = g, this.canvasFactory = P, this._pdfBug = x, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = D === !0 && typeof window < "u", this.cancelled = !1, this.capability = (0, _util.createPromiseCapability)(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
            }
            return _createClass(i, [{
              key: "completed",
              get: function() {
                return this.capability.promise.catch(function() {
                });
              }
            }, {
              key: "initializeGraphics",
              value: function(t) {
                var e, n = t.transparency, o = n === void 0 ? !1 : n, d = t.optionalContentConfig;
                if (!this.cancelled) {
                  if (this._canvas) {
                    if (i.canvasInUse.has(this._canvas))
                      throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                    i.canvasInUse.add(this._canvas);
                  }
                  this._pdfBug && (e = globalThis.StepperManager) !== null && e !== void 0 && e.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                  var u = this.params, g = u.canvasContext, P = u.viewport, F = u.transform, D = u.imageLayer, B = u.background;
                  this.gfx = new _canvas.CanvasGraphics(g, this.commonObjs, this.objs, this.canvasFactory, D, d, this.annotationCanvasMap), this.gfx.beginDrawing({
                    transform: F,
                    viewport: P,
                    transparency: o,
                    background: B
                  }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback && this.graphicsReadyCallback();
                }
              }
            }, {
              key: "cancel",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                this.running = !1, this.cancelled = !0, this.gfx && this.gfx.endDrawing(), this._canvas && i.canvasInUse.delete(this._canvas), this.callback(t || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex + 1), "canvas"));
              }
            }, {
              key: "operatorListChanged",
              value: function() {
                if (!this.graphicsReady) {
                  this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
                  return;
                }
                this.stepper && this.stepper.updateOperatorList(this.operatorList), !this.running && this._continue();
              }
            }, {
              key: "_continue",
              value: function() {
                this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
              }
            }, {
              key: "_scheduleNext",
              value: function() {
                var t = this;
                this._useRequestAnimationFrame ? window.requestAnimationFrame(function() {
                  t._nextBound().catch(t._cancelBound);
                }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
              }
            }, {
              key: "_next",
              value: function() {
                var a = _asyncToGenerator(/* @__PURE__ */ _regenerator.default.mark(function e() {
                  return _regenerator.default.wrap(function(o) {
                    for (; ; )
                      switch (o.prev = o.next) {
                        case 0:
                          if (!this.cancelled) {
                            o.next = 2;
                            break;
                          }
                          return o.abrupt("return");
                        case 2:
                          this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), this._canvas && i.canvasInUse.delete(this._canvas), this.callback()));
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, e, this);
                }));
                function t() {
                  return a.apply(this, arguments);
                }
                return t;
              }()
            }], [{
              key: "canvasInUse",
              get: function() {
                return (0, _util.shadow)(this, "canvasInUse", /* @__PURE__ */ new WeakSet());
              }
            }]), i;
          }(), version = "2.12.313";
          exports.version = version;
          var build = "a2ae56f39";
          exports.build = build;
        },
        (i, a, t) => {
          function e(y) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(M) {
              return typeof M;
            } : e = function(M) {
              return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
            }, e(y);
          }
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.FontLoader = a.FontFaceObject = void 0;
          var n = d(t(2)), o = t(4);
          function d(y) {
            return y && y.__esModule ? y : { default: y };
          }
          function u(y, T) {
            if (typeof T != "function" && T !== null)
              throw new TypeError("Super expression must either be null or a function");
            y.prototype = Object.create(T && T.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), T && g(y, T);
          }
          function g(y, T) {
            return g = Object.setPrototypeOf || function(H, L) {
              return H.__proto__ = L, H;
            }, g(y, T);
          }
          function P(y) {
            var T = B();
            return function() {
              var H = x(y), L;
              if (T) {
                var Y = x(this).constructor;
                L = Reflect.construct(H, arguments, Y);
              } else
                L = H.apply(this, arguments);
              return F(this, L);
            };
          }
          function F(y, T) {
            if (T && (e(T) === "object" || typeof T == "function"))
              return T;
            if (T !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return D(y);
          }
          function D(y) {
            if (y === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y;
          }
          function B() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }
          function x(y) {
            return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(M) {
              return M.__proto__ || Object.getPrototypeOf(M);
            }, x(y);
          }
          function w(y, T, M, H, L, Y, te) {
            try {
              var K = y[Y](te), oe = K.value;
            } catch (q) {
              M(q);
              return;
            }
            K.done ? T(oe) : Promise.resolve(oe).then(H, L);
          }
          function O(y) {
            return function() {
              var T = this, M = arguments;
              return new Promise(function(H, L) {
                var Y = y.apply(T, M);
                function te(oe) {
                  w(Y, H, L, te, K, "next", oe);
                }
                function K(oe) {
                  w(Y, H, L, te, K, "throw", oe);
                }
                te(void 0);
              });
            };
          }
          function k(y, T) {
            var M = typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
            if (!M) {
              if (Array.isArray(y) || (M = W(y)) || T && y && typeof y.length == "number") {
                M && (y = M);
                var H = 0, L = function() {
                };
                return { s: L, n: function() {
                  return H >= y.length ? { done: !0 } : { done: !1, value: y[H++] };
                }, e: function(q) {
                  throw q;
                }, f: L };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var Y = !0, te = !1, K;
            return { s: function() {
              M = M.call(y);
            }, n: function() {
              var q = M.next();
              return Y = q.done, q;
            }, e: function(q) {
              te = !0, K = q;
            }, f: function() {
              try {
                !Y && M.return != null && M.return();
              } finally {
                if (te)
                  throw K;
              }
            } };
          }
          function W(y, T) {
            if (!!y) {
              if (typeof y == "string")
                return R(y, T);
              var M = Object.prototype.toString.call(y).slice(8, -1);
              if (M === "Object" && y.constructor && (M = y.constructor.name), M === "Map" || M === "Set")
                return Array.from(y);
              if (M === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))
                return R(y, T);
            }
          }
          function R(y, T) {
            (T == null || T > y.length) && (T = y.length);
            for (var M = 0, H = new Array(T); M < T; M++)
              H[M] = y[M];
            return H;
          }
          function U(y, T) {
            if (!(y instanceof T))
              throw new TypeError("Cannot call a class as a function");
          }
          function v(y, T) {
            for (var M = 0; M < T.length; M++) {
              var H = T[M];
              H.enumerable = H.enumerable || !1, H.configurable = !0, "value" in H && (H.writable = !0), Object.defineProperty(y, H.key, H);
            }
          }
          function c(y, T, M) {
            return T && v(y.prototype, T), M && v(y, M), y;
          }
          var p = /* @__PURE__ */ function() {
            function y(T) {
              var M = T.docId, H = T.onUnsupportedFeature, L = T.ownerDocument, Y = L === void 0 ? globalThis.document : L;
              T.styleElement, U(this, y), this.constructor === y && (0, o.unreachable)("Cannot initialize BaseFontLoader."), this.docId = M, this._onUnsupportedFeature = H, this._document = Y, this.nativeFontFaces = [], this.styleElement = null;
            }
            return c(y, [{
              key: "addNativeFontFace",
              value: function(M) {
                this.nativeFontFaces.push(M), this._document.fonts.add(M);
              }
            }, {
              key: "insertRule",
              value: function(M) {
                var H = this.styleElement;
                H || (H = this.styleElement = this._document.createElement("style"), H.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId), this._document.documentElement.getElementsByTagName("head")[0].appendChild(H));
                var L = H.sheet;
                L.insertRule(M, L.cssRules.length);
              }
            }, {
              key: "clear",
              value: function() {
                var M = k(this.nativeFontFaces), H;
                try {
                  for (M.s(); !(H = M.n()).done; ) {
                    var L = H.value;
                    this._document.fonts.delete(L);
                  }
                } catch (Y) {
                  M.e(Y);
                } finally {
                  M.f();
                }
                this.nativeFontFaces.length = 0, this.styleElement && (this.styleElement.remove(), this.styleElement = null);
              }
            }, {
              key: "bind",
              value: function() {
                var T = O(/* @__PURE__ */ n.default.mark(function H(L) {
                  var Y = this, te, K;
                  return n.default.wrap(function(q) {
                    for (; ; )
                      switch (q.prev = q.next) {
                        case 0:
                          if (!(L.attached || L.missingFile)) {
                            q.next = 2;
                            break;
                          }
                          return q.abrupt("return");
                        case 2:
                          if (L.attached = !0, !this.isFontLoadingAPISupported) {
                            q.next = 19;
                            break;
                          }
                          if (te = L.createNativeFontFace(), !te) {
                            q.next = 18;
                            break;
                          }
                          return this.addNativeFontFace(te), q.prev = 7, q.next = 10, te.loaded;
                        case 10:
                          q.next = 18;
                          break;
                        case 12:
                          throw q.prev = 12, q.t0 = q.catch(7), this._onUnsupportedFeature({
                            featureId: o.UNSUPPORTED_FEATURES.errorFontLoadNative
                          }), (0, o.warn)("Failed to load font '".concat(te.family, "': '").concat(q.t0, "'.")), L.disableFontFace = !0, q.t0;
                        case 18:
                          return q.abrupt("return");
                        case 19:
                          if (K = L.createFontFaceRule(), !K) {
                            q.next = 26;
                            break;
                          }
                          if (this.insertRule(K), !this.isSyncFontLoadingSupported) {
                            q.next = 24;
                            break;
                          }
                          return q.abrupt("return");
                        case 24:
                          return q.next = 26, new Promise(function(X) {
                            var S = Y._queueLoadingCallback(X);
                            Y._prepareFontLoadEvent([K], [L], S);
                          });
                        case 26:
                        case "end":
                          return q.stop();
                      }
                  }, H, this, [[7, 12]]);
                }));
                function M(H) {
                  return T.apply(this, arguments);
                }
                return M;
              }()
            }, {
              key: "_queueLoadingCallback",
              value: function(M) {
                (0, o.unreachable)("Abstract method `_queueLoadingCallback`.");
              }
            }, {
              key: "isFontLoadingAPISupported",
              get: function() {
                var M, H = !!((M = this._document) !== null && M !== void 0 && M.fonts);
                return (0, o.shadow)(this, "isFontLoadingAPISupported", H);
              }
            }, {
              key: "isSyncFontLoadingSupported",
              get: function() {
                (0, o.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
              }
            }, {
              key: "_loadTestFont",
              get: function() {
                (0, o.unreachable)("Abstract method `_loadTestFont`.");
              }
            }, {
              key: "_prepareFontLoadEvent",
              value: function(M, H, L) {
                (0, o.unreachable)("Abstract method `_prepareFontLoadEvent`.");
              }
            }]), y;
          }(), b;
          a.FontLoader = b, a.FontLoader = b = /* @__PURE__ */ function(y) {
            u(M, y);
            var T = P(M);
            function M(H) {
              var L;
              return U(this, M), L = T.call(this, H), L.loadingContext = {
                requests: [],
                nextRequestId: 0
              }, L.loadTestFontId = 0, L;
            }
            return c(M, [{
              key: "isSyncFontLoadingSupported",
              get: function() {
                var L = !1;
                if (typeof navigator > "u")
                  L = !0;
                else {
                  var Y = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
                  (Y == null ? void 0 : Y[1]) >= 14 && (L = !0);
                }
                return (0, o.shadow)(this, "isSyncFontLoadingSupported", L);
              }
            }, {
              key: "_queueLoadingCallback",
              value: function(L) {
                function Y() {
                  for ((0, o.assert)(!K.done, "completeRequest() cannot be called twice."), K.done = !0; te.requests.length > 0 && te.requests[0].done; ) {
                    var oe = te.requests.shift();
                    setTimeout(oe.callback, 0);
                  }
                }
                var te = this.loadingContext, K = {
                  id: "pdfjs-font-loading-".concat(te.nextRequestId++),
                  done: !1,
                  complete: Y,
                  callback: L
                };
                return te.requests.push(K), K;
              }
            }, {
              key: "_loadTestFont",
              get: function() {
                var L = function() {
                  return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
                };
                return (0, o.shadow)(this, "_loadTestFont", L());
              }
            }, {
              key: "_prepareFontLoadEvent",
              value: function(L, Y, te) {
                function K(me, Pe) {
                  return me.charCodeAt(Pe) << 24 | me.charCodeAt(Pe + 1) << 16 | me.charCodeAt(Pe + 2) << 8 | me.charCodeAt(Pe + 3) & 255;
                }
                function oe(me, Pe, Ce, xe) {
                  var Fe = me.substring(0, Pe), Me = me.substring(Pe + Ce);
                  return Fe + xe + Me;
                }
                var q, X, S = this._document.createElement("canvas");
                S.width = 1, S.height = 1;
                var h = S.getContext("2d"), A = 0;
                function C(me, Pe) {
                  if (A++, A > 30) {
                    (0, o.warn)("Load test font never loaded."), Pe();
                    return;
                  }
                  h.font = "30px " + me, h.fillText(".", 0, 20);
                  var Ce = h.getImageData(0, 0, 1, 1);
                  if (Ce.data[3] > 0) {
                    Pe();
                    return;
                  }
                  setTimeout(C.bind(null, me, Pe));
                }
                var $ = "lt".concat(Date.now()).concat(this.loadTestFontId++), Z = this._loadTestFont, z = 976;
                Z = oe(Z, z, $.length, $);
                var he = 16, _e = 1482184792, Te = K(Z, he);
                for (q = 0, X = $.length - 3; q < X; q += 4)
                  Te = Te - _e + K($, q) | 0;
                q < $.length && (Te = Te - _e + K($ + "XXX", q) | 0), Z = oe(Z, he, 4, (0, o.string32)(Te));
                var j = "url(data:font/opentype;base64,".concat(btoa(Z), ");"), I = '@font-face {font-family:"'.concat($, '";src:').concat(j, "}");
                this.insertRule(I);
                var f = [], l = k(Y), _;
                try {
                  for (l.s(); !(_ = l.n()).done; ) {
                    var N = _.value;
                    f.push(N.loadedName);
                  }
                } catch (me) {
                  l.e(me);
                } finally {
                  l.f();
                }
                f.push($);
                var G = this._document.createElement("div");
                G.style.visibility = "hidden", G.style.width = G.style.height = "10px", G.style.position = "absolute", G.style.top = G.style.left = "0px";
                for (var ee = 0, ce = f; ee < ce.length; ee++) {
                  var ye = ce[ee], be = this._document.createElement("span");
                  be.textContent = "Hi", be.style.fontFamily = ye, G.appendChild(be);
                }
                this._document.body.appendChild(G), C($, function() {
                  G.remove(), te.complete();
                });
              }
            }]), M;
          }(p);
          var m = /* @__PURE__ */ function() {
            function y(T, M) {
              var H = M.isEvalSupported, L = H === void 0 ? !0 : H, Y = M.disableFontFace, te = Y === void 0 ? !1 : Y, K = M.ignoreErrors, oe = K === void 0 ? !1 : K, q = M.onUnsupportedFeature, X = M.fontRegistry, S = X === void 0 ? null : X;
              U(this, y), this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
              for (var h in T)
                this[h] = T[h];
              this.isEvalSupported = L !== !1, this.disableFontFace = te === !0, this.ignoreErrors = oe === !0, this._onUnsupportedFeature = q, this.fontRegistry = S;
            }
            return c(y, [{
              key: "createNativeFontFace",
              value: function() {
                if (!this.data || this.disableFontFace)
                  return null;
                var M;
                if (!this.cssFontInfo)
                  M = new FontFace(this.loadedName, this.data, {});
                else {
                  var H = {
                    weight: this.cssFontInfo.fontWeight
                  };
                  this.cssFontInfo.italicAngle && (H.style = "oblique ".concat(this.cssFontInfo.italicAngle, "deg")), M = new FontFace(this.cssFontInfo.fontFamily, this.data, H);
                }
                return this.fontRegistry && this.fontRegistry.registerFont(this), M;
              }
            }, {
              key: "createFontFaceRule",
              value: function() {
                if (!this.data || this.disableFontFace)
                  return null;
                var M = (0, o.bytesToString)(this.data), H = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(M), ");"), L;
                if (!this.cssFontInfo)
                  L = '@font-face {font-family:"'.concat(this.loadedName, '";src:').concat(H, "}");
                else {
                  var Y = "font-weight: ".concat(this.cssFontInfo.fontWeight, ";");
                  this.cssFontInfo.italicAngle && (Y += "font-style: oblique ".concat(this.cssFontInfo.italicAngle, "deg;")), L = '@font-face {font-family:"'.concat(this.cssFontInfo.fontFamily, '";').concat(Y, "src:").concat(H, "}");
                }
                return this.fontRegistry && this.fontRegistry.registerFont(this, H), L;
              }
            }, {
              key: "getPathGenerator",
              value: function(M, H) {
                if (this.compiledGlyphs[H] !== void 0)
                  return this.compiledGlyphs[H];
                var L;
                try {
                  L = M.get(this.loadedName + "_path_" + H);
                } catch (X) {
                  if (!this.ignoreErrors)
                    throw X;
                  return this._onUnsupportedFeature({
                    featureId: o.UNSUPPORTED_FEATURES.errorFontGetPath
                  }), (0, o.warn)('getPathGenerator - ignoring character: "'.concat(X, '".')), this.compiledGlyphs[H] = function(S, h) {
                  };
                }
                if (this.isEvalSupported && o.IsEvalSupportedCached.value) {
                  var Y = [], te = k(L), K;
                  try {
                    for (te.s(); !(K = te.n()).done; ) {
                      var oe = K.value, q = oe.args !== void 0 ? oe.args.join(",") : "";
                      Y.push("c.", oe.cmd, "(", q, `);
`);
                    }
                  } catch (X) {
                    te.e(X);
                  } finally {
                    te.f();
                  }
                  return this.compiledGlyphs[H] = new Function("c", "size", Y.join(""));
                }
                return this.compiledGlyphs[H] = function(X, S) {
                  var h = k(L), A;
                  try {
                    for (h.s(); !(A = h.n()).done; ) {
                      var C = A.value;
                      C.cmd === "scale" && (C.args = [S, -S]), X[C.cmd].apply(X, C.args);
                    }
                  } catch ($) {
                    h.e($);
                  } finally {
                    h.f();
                  }
                };
              }
            }]), y;
          }();
          a.FontFaceObject = m;
        },
        (i, a, t) => {
          function e(c) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(b) {
              return typeof b;
            } : e = function(b) {
              return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
            }, e(c);
          }
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.NodeStandardFontDataFactory = a.NodeCanvasFactory = a.NodeCMapReaderFactory = void 0;
          var n = t(135), o = t(6), d = t(4);
          function u(c, p) {
            for (var b = 0; b < p.length; b++) {
              var m = p[b];
              m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, m.key, m);
            }
          }
          function g(c, p, b) {
            return p && u(c.prototype, p), b && u(c, b), c;
          }
          function P(c, p) {
            if (typeof p != "function" && p !== null)
              throw new TypeError("Super expression must either be null or a function");
            c.prototype = Object.create(p && p.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), p && F(c, p);
          }
          function F(c, p) {
            return F = Object.setPrototypeOf || function(m, y) {
              return m.__proto__ = y, m;
            }, F(c, p);
          }
          function D(c) {
            var p = w();
            return function() {
              var m = O(c), y;
              if (p) {
                var T = O(this).constructor;
                y = Reflect.construct(m, arguments, T);
              } else
                y = m.apply(this, arguments);
              return B(this, y);
            };
          }
          function B(c, p) {
            if (p && (e(p) === "object" || typeof p == "function"))
              return p;
            if (p !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return x(c);
          }
          function x(c) {
            if (c === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return c;
          }
          function w() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }
          function O(c) {
            return O = Object.setPrototypeOf ? Object.getPrototypeOf : function(b) {
              return b.__proto__ || Object.getPrototypeOf(b);
            }, O(c);
          }
          function k(c, p) {
            if (!(c instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          var W = function c() {
            k(this, c), (0, d.unreachable)("Not implemented: NodeCanvasFactory");
          };
          a.NodeCanvasFactory = W;
          var R = function c() {
            k(this, c), (0, d.unreachable)("Not implemented: NodeCMapReaderFactory");
          };
          a.NodeCMapReaderFactory = R;
          var U = function c() {
            k(this, c), (0, d.unreachable)("Not implemented: NodeStandardFontDataFactory");
          };
          if (a.NodeStandardFontDataFactory = U, o.isNodeJS) {
            var v = function(p) {
              return new Promise(function(b, m) {
                var y = require$$5;
                y.readFile(p, function(T, M) {
                  if (T || !M) {
                    m(new Error(T));
                    return;
                  }
                  b(new Uint8Array(M));
                });
              });
            };
            a.NodeCanvasFactory = W = /* @__PURE__ */ function(c) {
              P(b, c);
              var p = D(b);
              function b() {
                return k(this, b), p.apply(this, arguments);
              }
              return g(b, [{
                key: "_createCanvas",
                value: function(y, T) {
                  var M = require$$5;
                  return M.createCanvas(y, T);
                }
              }]), b;
            }(n.BaseCanvasFactory), a.NodeCMapReaderFactory = R = /* @__PURE__ */ function(c) {
              P(b, c);
              var p = D(b);
              function b() {
                return k(this, b), p.apply(this, arguments);
              }
              return g(b, [{
                key: "_fetchData",
                value: function(y, T) {
                  return v(y).then(function(M) {
                    return {
                      cMapData: M,
                      compressionType: T
                    };
                  });
                }
              }]), b;
            }(n.BaseCMapReaderFactory), a.NodeStandardFontDataFactory = U = /* @__PURE__ */ function(c) {
              P(b, c);
              var p = D(b);
              function b() {
                return k(this, b), p.apply(this, arguments);
              }
              return g(b, [{
                key: "_fetchData",
                value: function(y) {
                  return v(y);
                }
              }]), b;
            }(n.BaseStandardFontDataFactory);
          }
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.AnnotationStorage = void 0;
          var e = t(4);
          function n(w, O) {
            return P(w) || g(w, O) || d(w, O) || o();
          }
          function o() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function d(w, O) {
            if (!!w) {
              if (typeof w == "string")
                return u(w, O);
              var k = Object.prototype.toString.call(w).slice(8, -1);
              if (k === "Object" && w.constructor && (k = w.constructor.name), k === "Map" || k === "Set")
                return Array.from(w);
              if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))
                return u(w, O);
            }
          }
          function u(w, O) {
            (O == null || O > w.length) && (O = w.length);
            for (var k = 0, W = new Array(O); k < O; k++)
              W[k] = w[k];
            return W;
          }
          function g(w, O) {
            var k = w == null ? null : typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
            if (k != null) {
              var W = [], R = !0, U = !1, v, c;
              try {
                for (k = k.call(w); !(R = (v = k.next()).done) && (W.push(v.value), !(O && W.length === O)); R = !0)
                  ;
              } catch (p) {
                U = !0, c = p;
              } finally {
                try {
                  !R && k.return != null && k.return();
                } finally {
                  if (U)
                    throw c;
                }
              }
              return W;
            }
          }
          function P(w) {
            if (Array.isArray(w))
              return w;
          }
          function F(w, O) {
            if (!(w instanceof O))
              throw new TypeError("Cannot call a class as a function");
          }
          function D(w, O) {
            for (var k = 0; k < O.length; k++) {
              var W = O[k];
              W.enumerable = W.enumerable || !1, W.configurable = !0, "value" in W && (W.writable = !0), Object.defineProperty(w, W.key, W);
            }
          }
          function B(w, O, k) {
            return O && D(w.prototype, O), k && D(w, k), w;
          }
          var x = /* @__PURE__ */ function() {
            function w() {
              F(this, w), this._storage = /* @__PURE__ */ new Map(), this._timeStamp = Date.now(), this._modified = !1, this.onSetModified = null, this.onResetModified = null;
            }
            return B(w, [{
              key: "getValue",
              value: function(k, W) {
                var R = this._storage.get(k);
                return R === void 0 ? W : Object.assign(W, R);
              }
            }, {
              key: "setValue",
              value: function(k, W) {
                var R = this._storage.get(k), U = !1;
                if (R !== void 0)
                  for (var v = 0, c = Object.entries(W); v < c.length; v++) {
                    var p = n(c[v], 2), b = p[0], m = p[1];
                    R[b] !== m && (U = !0, R[b] = m);
                  }
                else
                  U = !0, this._storage.set(k, W);
                U && (this._timeStamp = Date.now(), this._setModified());
              }
            }, {
              key: "getAll",
              value: function() {
                return this._storage.size > 0 ? (0, e.objectFromMap)(this._storage) : null;
              }
            }, {
              key: "size",
              get: function() {
                return this._storage.size;
              }
            }, {
              key: "_setModified",
              value: function() {
                this._modified || (this._modified = !0, typeof this.onSetModified == "function" && this.onSetModified());
              }
            }, {
              key: "resetModified",
              value: function() {
                this._modified && (this._modified = !1, typeof this.onResetModified == "function" && this.onResetModified());
              }
            }, {
              key: "serializable",
              get: function() {
                return this._storage.size > 0 ? this._storage : null;
              }
            }, {
              key: "lastModified",
              get: function() {
                return this._timeStamp.toString();
              }
            }]), w;
          }();
          a.AnnotationStorage = x;
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.CanvasGraphics = void 0;
          var e = t(4), n = t(141), o = t(1);
          function d(j) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? d = function(f) {
              return typeof f;
            } : d = function(f) {
              return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
            }, d(j);
          }
          function u(j, I) {
            var f = typeof Symbol < "u" && j[Symbol.iterator] || j["@@iterator"];
            if (!f) {
              if (Array.isArray(j) || (f = x(j)) || I && j && typeof j.length == "number") {
                f && (j = f);
                var l = 0, _ = function() {
                };
                return { s: _, n: function() {
                  return l >= j.length ? { done: !0 } : { done: !1, value: j[l++] };
                }, e: function(ye) {
                  throw ye;
                }, f: _ };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var N = !0, G = !1, ee;
            return { s: function() {
              f = f.call(j);
            }, n: function() {
              var ye = f.next();
              return N = ye.done, ye;
            }, e: function(ye) {
              G = !0, ee = ye;
            }, f: function() {
              try {
                !N && f.return != null && f.return();
              } finally {
                if (G)
                  throw ee;
              }
            } };
          }
          function g(j, I) {
            if (!(j instanceof I))
              throw new TypeError("Cannot call a class as a function");
          }
          function P(j, I) {
            for (var f = 0; f < I.length; f++) {
              var l = I[f];
              l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(j, l.key, l);
            }
          }
          function F(j, I, f) {
            return I && P(j.prototype, I), f && P(j, f), j;
          }
          function D(j, I) {
            return k(j) || O(j, I) || x(j, I) || B();
          }
          function B() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function x(j, I) {
            if (!!j) {
              if (typeof j == "string")
                return w(j, I);
              var f = Object.prototype.toString.call(j).slice(8, -1);
              if (f === "Object" && j.constructor && (f = j.constructor.name), f === "Map" || f === "Set")
                return Array.from(j);
              if (f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))
                return w(j, I);
            }
          }
          function w(j, I) {
            (I == null || I > j.length) && (I = j.length);
            for (var f = 0, l = new Array(I); f < I; f++)
              l[f] = j[f];
            return l;
          }
          function O(j, I) {
            var f = j == null ? null : typeof Symbol < "u" && j[Symbol.iterator] || j["@@iterator"];
            if (f != null) {
              var l = [], _ = !0, N = !1, G, ee;
              try {
                for (f = f.call(j); !(_ = (G = f.next()).done) && (l.push(G.value), !(I && l.length === I)); _ = !0)
                  ;
              } catch (ce) {
                N = !0, ee = ce;
              } finally {
                try {
                  !_ && f.return != null && f.return();
                } finally {
                  if (N)
                    throw ee;
                }
              }
              return l;
            }
          }
          function k(j) {
            if (Array.isArray(j))
              return j;
          }
          var W = 16, R = 100, U = 4096, v = 15, c = 10, p = 1e3, b = 16, m = 1.000001;
          function y(j, I) {
            if (j._removeMirroring)
              throw new Error("Context is already forwarding operations.");
            j.__originalSave = j.save, j.__originalRestore = j.restore, j.__originalRotate = j.rotate, j.__originalScale = j.scale, j.__originalTranslate = j.translate, j.__originalTransform = j.transform, j.__originalSetTransform = j.setTransform, j.__originalResetTransform = j.resetTransform, j.__originalClip = j.clip, j.__originalMoveTo = j.moveTo, j.__originalLineTo = j.lineTo, j.__originalBezierCurveTo = j.bezierCurveTo, j.__originalRect = j.rect, j.__originalClosePath = j.closePath, j.__originalBeginPath = j.beginPath, j._removeMirroring = function() {
              j.save = j.__originalSave, j.restore = j.__originalRestore, j.rotate = j.__originalRotate, j.scale = j.__originalScale, j.translate = j.__originalTranslate, j.transform = j.__originalTransform, j.setTransform = j.__originalSetTransform, j.resetTransform = j.__originalResetTransform, j.clip = j.__originalClip, j.moveTo = j.__originalMoveTo, j.lineTo = j.__originalLineTo, j.bezierCurveTo = j.__originalBezierCurveTo, j.rect = j.__originalRect, j.closePath = j.__originalClosePath, j.beginPath = j.__originalBeginPath, delete j._removeMirroring;
            }, j.save = function() {
              I.save(), this.__originalSave();
            }, j.restore = function() {
              I.restore(), this.__originalRestore();
            }, j.translate = function(l, _) {
              I.translate(l, _), this.__originalTranslate(l, _);
            }, j.scale = function(l, _) {
              I.scale(l, _), this.__originalScale(l, _);
            }, j.transform = function(l, _, N, G, ee, ce) {
              I.transform(l, _, N, G, ee, ce), this.__originalTransform(l, _, N, G, ee, ce);
            }, j.setTransform = function(l, _, N, G, ee, ce) {
              I.setTransform(l, _, N, G, ee, ce), this.__originalSetTransform(l, _, N, G, ee, ce);
            }, j.resetTransform = function() {
              I.resetTransform(), this.__originalResetTransform();
            }, j.rotate = function(l) {
              I.rotate(l), this.__originalRotate(l);
            }, j.clip = function(l) {
              I.clip(l), this.__originalClip(l);
            }, j.moveTo = function(f, l) {
              I.moveTo(f, l), this.__originalMoveTo(f, l);
            }, j.lineTo = function(f, l) {
              I.lineTo(f, l), this.__originalLineTo(f, l);
            }, j.bezierCurveTo = function(f, l, _, N, G, ee) {
              I.bezierCurveTo(f, l, _, N, G, ee), this.__originalBezierCurveTo(f, l, _, N, G, ee);
            }, j.rect = function(f, l, _, N) {
              I.rect(f, l, _, N), this.__originalRect(f, l, _, N);
            }, j.closePath = function() {
              I.closePath(), this.__originalClosePath();
            }, j.beginPath = function() {
              I.beginPath(), this.__originalBeginPath();
            };
          }
          function T(j) {
            if (!j.mozCurrentTransform) {
              j._originalSave = j.save, j._originalRestore = j.restore, j._originalRotate = j.rotate, j._originalScale = j.scale, j._originalTranslate = j.translate, j._originalTransform = j.transform, j._originalSetTransform = j.setTransform, j._originalResetTransform = j.resetTransform, j._transformMatrix = j._transformMatrix || [1, 0, 0, 1, 0, 0], j._transformStack = [];
              try {
                var I = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(j), "lineWidth");
                j._setLineWidth = I.set, j._getLineWidth = I.get, Object.defineProperty(j, "lineWidth", {
                  set: function(l) {
                    this._setLineWidth(l * m);
                  },
                  get: function() {
                    return this._getLineWidth();
                  }
                });
              } catch {
              }
              Object.defineProperty(j, "mozCurrentTransform", {
                get: function() {
                  return this._transformMatrix;
                }
              }), Object.defineProperty(j, "mozCurrentTransformInverse", {
                get: function() {
                  var l = D(this._transformMatrix, 6), _ = l[0], N = l[1], G = l[2], ee = l[3], ce = l[4], ye = l[5], be = _ * ee - N * G, me = N * G - _ * ee;
                  return [ee / be, N / me, G / me, _ / be, (ee * ce - G * ye) / me, (N * ce - _ * ye) / be];
                }
              }), j.save = function() {
                var l = this._transformMatrix;
                this._transformStack.push(l), this._transformMatrix = l.slice(0, 6), this._originalSave();
              }, j.restore = function() {
                var l = this._transformStack.pop();
                l && (this._transformMatrix = l, this._originalRestore());
              }, j.translate = function(l, _) {
                var N = this._transformMatrix;
                N[4] = N[0] * l + N[2] * _ + N[4], N[5] = N[1] * l + N[3] * _ + N[5], this._originalTranslate(l, _);
              }, j.scale = function(l, _) {
                var N = this._transformMatrix;
                N[0] *= l, N[1] *= l, N[2] *= _, N[3] *= _, this._originalScale(l, _);
              }, j.transform = function(l, _, N, G, ee, ce) {
                var ye = this._transformMatrix;
                this._transformMatrix = [ye[0] * l + ye[2] * _, ye[1] * l + ye[3] * _, ye[0] * N + ye[2] * G, ye[1] * N + ye[3] * G, ye[0] * ee + ye[2] * ce + ye[4], ye[1] * ee + ye[3] * ce + ye[5]], j._originalTransform(l, _, N, G, ee, ce);
              }, j.setTransform = function(l, _, N, G, ee, ce) {
                this._transformMatrix = [l, _, N, G, ee, ce], j._originalSetTransform(l, _, N, G, ee, ce);
              }, j.resetTransform = function() {
                this._transformMatrix = [1, 0, 0, 1, 0, 0], j._originalResetTransform();
              }, j.rotate = function(l) {
                var _ = Math.cos(l), N = Math.sin(l), G = this._transformMatrix;
                this._transformMatrix = [G[0] * _ + G[2] * N, G[1] * _ + G[3] * N, G[0] * -N + G[2] * _, G[1] * -N + G[3] * _, G[4], G[5]], this._originalRotate(l);
              };
            }
          }
          var M = /* @__PURE__ */ function() {
            function j(I) {
              g(this, j), this.canvasFactory = I, this.cache = /* @__PURE__ */ Object.create(null);
            }
            return F(j, [{
              key: "getCanvas",
              value: function(f, l, _, N) {
                var G;
                return this.cache[f] !== void 0 ? (G = this.cache[f], this.canvasFactory.reset(G, l, _), G.context.setTransform(1, 0, 0, 1, 0, 0)) : (G = this.canvasFactory.create(l, _), this.cache[f] = G), N && T(G.context), G;
              }
            }, {
              key: "clear",
              value: function() {
                for (var f in this.cache) {
                  var l = this.cache[f];
                  this.canvasFactory.destroy(l), delete this.cache[f];
                }
              }
            }]), j;
          }();
          function H(j) {
            var I = 1e3, f = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), l = j.width, _ = j.height, N = l + 1, G, ee, ce, ye, be = new Uint8Array(N * (_ + 1)), me = l + 7 & -8, Pe = j.data, Ce = new Uint8Array(me * _), xe = 0;
            for (G = 0, ee = Pe.length; G < ee; G++)
              for (var Fe = Pe[G], Me = 128; Me > 0; )
                Ce[xe++] = Fe & Me ? 0 : 255, Me >>= 1;
            var Ue = 0;
            for (xe = 0, Ce[xe] !== 0 && (be[0] = 1, ++Ue), ce = 1; ce < l; ce++)
              Ce[xe] !== Ce[xe + 1] && (be[ce] = Ce[xe] ? 2 : 1, ++Ue), xe++;
            for (Ce[xe] !== 0 && (be[ce] = 2, ++Ue), G = 1; G < _; G++) {
              xe = G * me, ye = G * N, Ce[xe - me] !== Ce[xe] && (be[ye] = Ce[xe] ? 1 : 8, ++Ue);
              var Ve = (Ce[xe] ? 4 : 0) + (Ce[xe - me] ? 8 : 0);
              for (ce = 1; ce < l; ce++)
                Ve = (Ve >> 2) + (Ce[xe + 1] ? 4 : 0) + (Ce[xe - me + 1] ? 8 : 0), f[Ve] && (be[ye + ce] = f[Ve], ++Ue), xe++;
              if (Ce[xe - me] !== Ce[xe] && (be[ye + ce] = Ce[xe] ? 2 : 4, ++Ue), Ue > I)
                return null;
            }
            for (xe = me * (_ - 1), ye = G * N, Ce[xe] !== 0 && (be[ye] = 8, ++Ue), ce = 1; ce < l; ce++)
              Ce[xe] !== Ce[xe + 1] && (be[ye + ce] = Ce[xe] ? 4 : 8, ++Ue), xe++;
            if (Ce[xe] !== 0 && (be[ye + ce] = 4, ++Ue), Ue > I)
              return null;
            var de = new Int32Array([0, N, -1, 0, -N, 0, 0, 0, 1]), pe = [];
            for (G = 0; Ue && G <= _; G++) {
              for (var V = G * N, re = V + l; V < re && !be[V]; )
                V++;
              if (V !== re) {
                var J = [V % N, G], ue = V, ne = be[V];
                do {
                  var Q = de[ne];
                  do
                    V += Q;
                  while (!be[V]);
                  var ve = be[V];
                  ve !== 5 && ve !== 10 ? (ne = ve, be[V] = 0) : (ne = ve & 51 * ne >> 4, be[V] &= ne >> 2 | ne << 2), J.push(V % N, V / N | 0), be[V] || --Ue;
                } while (ue !== V);
                pe.push(J), --G;
              }
            }
            var fe = function(Ee) {
              Ee.save(), Ee.scale(1 / l, -1 / _), Ee.translate(0, -_), Ee.beginPath();
              for (var De = 0, Ne = pe.length; De < Ne; De++) {
                var ke = pe[De];
                Ee.moveTo(ke[0], ke[1]);
                for (var He = 2, Oe = ke.length; He < Oe; He += 2)
                  Ee.lineTo(ke[He], ke[He + 1]);
              }
              Ee.fill(), Ee.beginPath(), Ee.restore();
            };
            return fe;
          }
          var L = /* @__PURE__ */ function() {
            function j(I, f) {
              g(this, j), this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = e.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = e.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = e.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = null, this.startNewPathAndClipBox([0, 0, I, f]);
            }
            return F(j, [{
              key: "clone",
              value: function() {
                var f = Object.create(this);
                return f.clipBox = this.clipBox.slice(), f;
              }
            }, {
              key: "setCurrentPoint",
              value: function(f, l) {
                this.x = f, this.y = l;
              }
            }, {
              key: "updatePathMinMax",
              value: function(f, l, _) {
                var N = e.Util.applyTransform([l, _], f), G = D(N, 2);
                l = G[0], _ = G[1], this.minX = Math.min(this.minX, l), this.minY = Math.min(this.minY, _), this.maxX = Math.max(this.maxX, l), this.maxY = Math.max(this.maxY, _);
              }
            }, {
              key: "updateCurvePathMinMax",
              value: function(f, l, _, N, G, ee, ce, ye, be) {
                var me = e.Util.bezierBoundingBox(l, _, N, G, ee, ce, ye, be);
                this.updatePathMinMax(f, me[0], me[1]), this.updatePathMinMax(f, me[2], me[3]);
              }
            }, {
              key: "getPathBoundingBox",
              value: function() {
                var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : n.PathType.FILL, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, _ = [this.minX, this.minY, this.maxX, this.maxY];
                if (f === n.PathType.STROKE) {
                  l || (0, e.unreachable)("Stroke bounding box must include transform.");
                  var N = e.Util.singularValueDecompose2dScale(l), G = N[0] * this.lineWidth / 2, ee = N[1] * this.lineWidth / 2;
                  _[0] -= G, _[1] -= ee, _[2] += G, _[3] += ee;
                }
                return _;
              }
            }, {
              key: "updateClipFromPath",
              value: function() {
                var f = e.Util.intersect(this.clipBox, this.getPathBoundingBox());
                this.startNewPathAndClipBox(f || [0, 0, 0, 0]);
              }
            }, {
              key: "startNewPathAndClipBox",
              value: function(f) {
                this.clipBox = f, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
              }
            }, {
              key: "getClippedPathBoundingBox",
              value: function() {
                var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : n.PathType.FILL, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                return e.Util.intersect(this.clipBox, this.getPathBoundingBox(f, l));
              }
            }]), j;
          }();
          function Y(j, I) {
            var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            if (typeof ImageData < "u" && I instanceof ImageData) {
              j.putImageData(I, 0, 0);
              return;
            }
            var l = I.height, _ = I.width, N = l % b, G = (l - N) / b, ee = N === 0 ? G : G + 1, ce = j.createImageData(_, b), ye = 0, be, me = I.data, Pe = ce.data, Ce, xe, Fe, Me, Ue, Ve, de, pe;
            if (f)
              switch (f.length) {
                case 1:
                  Ue = f[0], Ve = f[0], de = f[0], pe = f[0];
                  break;
                case 4:
                  Ue = f[0], Ve = f[1], de = f[2], pe = f[3];
                  break;
              }
            if (I.kind === e.ImageKind.GRAYSCALE_1BPP) {
              var V = me.byteLength, re = new Uint32Array(Pe.buffer, 0, Pe.byteLength >> 2), J = re.length, ue = _ + 7 >> 3, ne = 4294967295, Q = e.IsLittleEndianCached.value ? 4278190080 : 255;
              if (pe && pe[0] === 255 && pe[255] === 0) {
                var ve = [Q, ne];
                ne = ve[0], Q = ve[1];
              }
              for (Ce = 0; Ce < ee; Ce++) {
                for (Fe = Ce < G ? b : N, be = 0, xe = 0; xe < Fe; xe++) {
                  for (var fe = V - ye, Ae = 0, Ee = fe > ue ? _ : fe * 8 - 7, De = Ee & -8, Ne = 0, ke = 0; Ae < De; Ae += 8)
                    ke = me[ye++], re[be++] = ke & 128 ? ne : Q, re[be++] = ke & 64 ? ne : Q, re[be++] = ke & 32 ? ne : Q, re[be++] = ke & 16 ? ne : Q, re[be++] = ke & 8 ? ne : Q, re[be++] = ke & 4 ? ne : Q, re[be++] = ke & 2 ? ne : Q, re[be++] = ke & 1 ? ne : Q;
                  for (; Ae < Ee; Ae++)
                    Ne === 0 && (ke = me[ye++], Ne = 128), re[be++] = ke & Ne ? ne : Q, Ne >>= 1;
                }
                for (; be < J; )
                  re[be++] = 0;
                j.putImageData(ce, 0, Ce * b);
              }
            } else if (I.kind === e.ImageKind.RGBA_32BPP) {
              var He = !!(Ue || Ve || de);
              for (xe = 0, Me = _ * b * 4, Ce = 0; Ce < G; Ce++) {
                if (Pe.set(me.subarray(ye, ye + Me)), ye += Me, He)
                  for (var Oe = 0; Oe < Me; Oe += 4)
                    Ue && (Pe[Oe + 0] = Ue[Pe[Oe + 0]]), Ve && (Pe[Oe + 1] = Ve[Pe[Oe + 1]]), de && (Pe[Oe + 2] = de[Pe[Oe + 2]]);
                j.putImageData(ce, 0, xe), xe += b;
              }
              if (Ce < ee) {
                if (Me = _ * N * 4, Pe.set(me.subarray(ye, ye + Me)), He)
                  for (var Ie = 0; Ie < Me; Ie += 4)
                    Ue && (Pe[Ie + 0] = Ue[Pe[Ie + 0]]), Ve && (Pe[Ie + 1] = Ve[Pe[Ie + 1]]), de && (Pe[Ie + 2] = de[Pe[Ie + 2]]);
                j.putImageData(ce, 0, xe);
              }
            } else if (I.kind === e.ImageKind.RGB_24BPP) {
              var Ge = !!(Ue || Ve || de);
              for (Fe = b, Me = _ * Fe, Ce = 0; Ce < ee; Ce++) {
                for (Ce >= G && (Fe = N, Me = _ * Fe), be = 0, xe = Me; xe--; )
                  Pe[be++] = me[ye++], Pe[be++] = me[ye++], Pe[be++] = me[ye++], Pe[be++] = 255;
                if (Ge)
                  for (var Be = 0; Be < be; Be += 4)
                    Ue && (Pe[Be + 0] = Ue[Pe[Be + 0]]), Ve && (Pe[Be + 1] = Ve[Pe[Be + 1]]), de && (Pe[Be + 2] = de[Pe[Be + 2]]);
                j.putImageData(ce, 0, Ce * b);
              }
            } else
              throw new Error("bad image kind: ".concat(I.kind));
          }
          function te(j, I) {
            for (var f = I.height, l = I.width, _ = f % b, N = (f - _) / b, G = _ === 0 ? N : N + 1, ee = j.createImageData(l, b), ce = 0, ye = I.data, be = ee.data, me = 0; me < G; me++) {
              for (var Pe = me < N ? b : _, Ce = 3, xe = 0; xe < Pe; xe++)
                for (var Fe = void 0, Me = 0, Ue = 0; Ue < l; Ue++)
                  Me || (Fe = ye[ce++], Me = 128), be[Ce] = Fe & Me ? 0 : 255, Ce += 4, Me >>= 1;
              j.putImageData(ee, 0, me * b);
            }
          }
          function K(j, I) {
            for (var f = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"], l = 0, _ = f.length; l < _; l++) {
              var N = f[l];
              j[N] !== void 0 && (I[N] = j[N]);
            }
            j.setLineDash !== void 0 && (I.setLineDash(j.getLineDash()), I.lineDashOffset = j.lineDashOffset);
          }
          function oe(j) {
            j.strokeStyle = "#000000", j.fillStyle = "#000000", j.fillRule = "nonzero", j.globalAlpha = 1, j.lineWidth = 1, j.lineCap = "butt", j.lineJoin = "miter", j.miterLimit = 10, j.globalCompositeOperation = "source-over", j.font = "10px sans-serif", j.setLineDash !== void 0 && (j.setLineDash([]), j.lineDashOffset = 0);
          }
          function q(j, I, f, l) {
            for (var _ = j.length, N = 3; N < _; N += 4) {
              var G = j[N];
              if (G === 0)
                j[N - 3] = I, j[N - 2] = f, j[N - 1] = l;
              else if (G < 255) {
                var ee = 255 - G;
                j[N - 3] = j[N - 3] * G + I * ee >> 8, j[N - 2] = j[N - 2] * G + f * ee >> 8, j[N - 1] = j[N - 1] * G + l * ee >> 8;
              }
            }
          }
          function X(j, I, f) {
            for (var l = j.length, _ = 1 / 255, N = 3; N < l; N += 4) {
              var G = f ? f[j[N]] : j[N];
              I[N] = I[N] * G * _ | 0;
            }
          }
          function S(j, I, f) {
            for (var l = j.length, _ = 3; _ < l; _ += 4) {
              var N = j[_ - 3] * 77 + j[_ - 2] * 152 + j[_ - 1] * 28;
              I[_] = f ? I[_] * f[N >> 8] >> 8 : I[_] * N >> 16;
            }
          }
          function h(j, I, f, l, _, N, G, ee, ce, ye, be) {
            var me = !!N, Pe = me ? N[0] : 0, Ce = me ? N[1] : 0, xe = me ? N[2] : 0, Fe;
            _ === "Luminosity" ? Fe = S : Fe = X;
            for (var Me = 1048576, Ue = Math.min(l, Math.ceil(Me / f)), Ve = 0; Ve < l; Ve += Ue) {
              var de = Math.min(Ue, l - Ve), pe = j.getImageData(ee - ye, Ve + (ce - be), f, de), V = I.getImageData(ee, Ve + ce, f, de);
              me && q(pe.data, Pe, Ce, xe), Fe(pe.data, V.data, G), I.putImageData(V, ee, Ve + ce);
            }
          }
          function A(j, I, f, l) {
            var _ = l[0], N = l[1], G = l[2] - _, ee = l[3] - N;
            G === 0 || ee === 0 || (h(I.context, f, G, ee, I.subtype, I.backdrop, I.transferMap, _, N, I.offsetX, I.offsetY), j.save(), j.globalAlpha = 1, j.globalCompositeOperation = "source-over", j.setTransform(1, 0, 0, 1, 0, 0), j.drawImage(f.canvas, 0, 0), j.restore());
          }
          function C(j, I) {
            var f = e.Util.singularValueDecompose2dScale(j);
            f[0] = Math.fround(f[0]), f[1] = Math.fround(f[1]);
            var l = Math.fround((globalThis.devicePixelRatio || 1) * o.PixelsPerInch.PDF_TO_CSS_UNITS);
            return I !== void 0 ? I : f[0] <= l || f[1] <= l;
          }
          var $ = ["butt", "round", "square"], Z = ["miter", "round", "bevel"], z = {}, he = {}, _e = /* @__PURE__ */ function() {
            function j(I, f, l, _, N, G, ee) {
              g(this, j), this.ctx = I, this.current = new L(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = f, this.objs = l, this.canvasFactory = _, this.imageLayer = N, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = [], this.optionalContentConfig = G, this.cachedCanvases = new M(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = ee, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, I && T(I), this._cachedGetSinglePixelWidth = null;
            }
            return F(j, [{
              key: "beginDrawing",
              value: function(f) {
                var l = f.transform, _ = f.viewport, N = f.transparency, G = N === void 0 ? !1 : N, ee = f.background, ce = ee === void 0 ? null : ee, ye = this.ctx.canvas.width, be = this.ctx.canvas.height;
                if (this.ctx.save(), this.ctx.fillStyle = ce || "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, ye, be), this.ctx.restore(), G) {
                  var me = this.cachedCanvases.getCanvas("transparent", ye, be, !0);
                  this.compositeCtx = this.ctx, this.transparentCanvas = me.canvas, this.ctx = me.context, this.ctx.save(), this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
                }
                this.ctx.save(), oe(this.ctx), l && (this.ctx.transform.apply(this.ctx, l), this.outputScaleX = l[0], this.outputScaleY = l[0]), this.ctx.transform.apply(this.ctx, _.transform), this.viewportScale = _.scale, this.baseTransform = this.ctx.mozCurrentTransform.slice(), this._combinedScaleFactor = Math.hypot(this.baseTransform[0], this.baseTransform[2]), this.imageLayer && this.imageLayer.beginLayout();
              }
            }, {
              key: "executeOperatorList",
              value: function(f, l, _, N) {
                var G = f.argsArray, ee = f.fnArray, ce = l || 0, ye = G.length;
                if (ye === ce)
                  return ce;
                for (var be = ye - ce > c && typeof _ == "function", me = be ? Date.now() + v : 0, Pe = 0, Ce = this.commonObjs, xe = this.objs, Fe; ; ) {
                  if (N !== void 0 && ce === N.nextBreakPoint)
                    return N.breakIt(ce, _), ce;
                  if (Fe = ee[ce], Fe !== e.OPS.dependency)
                    this[Fe].apply(this, G[ce]);
                  else {
                    var Me = u(G[ce]), Ue;
                    try {
                      for (Me.s(); !(Ue = Me.n()).done; ) {
                        var Ve = Ue.value, de = Ve.startsWith("g_") ? Ce : xe;
                        if (!de.has(Ve))
                          return de.get(Ve, _), ce;
                      }
                    } catch (pe) {
                      Me.e(pe);
                    } finally {
                      Me.f();
                    }
                  }
                  if (ce++, ce === ye)
                    return ce;
                  if (be && ++Pe > c) {
                    if (Date.now() > me)
                      return _(), ce;
                    Pe = 0;
                  }
                }
              }
            }, {
              key: "endDrawing",
              value: function() {
                for (; this.stateStack.length || this.current.activeSMask !== null; )
                  this.restore();
                this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null), this.cachedCanvases.clear(), this.cachedPatterns.clear(), this.imageLayer && this.imageLayer.endLayout();
              }
            }, {
              key: "_scaleImage",
              value: function(f, l) {
                for (var _ = f.width, N = f.height, G = Math.max(Math.hypot(l[0], l[1]), 1), ee = Math.max(Math.hypot(l[2], l[3]), 1), ce = _, ye = N, be = "prescale1", me, Pe; G > 2 && ce > 1 || ee > 2 && ye > 1; ) {
                  var Ce = ce, xe = ye;
                  G > 2 && ce > 1 && (Ce = Math.ceil(ce / 2), G /= ce / Ce), ee > 2 && ye > 1 && (xe = Math.ceil(ye / 2), ee /= ye / xe), me = this.cachedCanvases.getCanvas(be, Ce, xe), Pe = me.context, Pe.clearRect(0, 0, Ce, xe), Pe.drawImage(f, 0, 0, ce, ye, 0, 0, Ce, xe), f = me.canvas, ce = Ce, ye = xe, be = be === "prescale1" ? "prescale2" : "prescale1";
                }
                return {
                  img: f,
                  paintWidth: ce,
                  paintHeight: ye
                };
              }
            }, {
              key: "_createMaskCanvas",
              value: function(f) {
                var l = this.ctx, _ = f.width, N = f.height, G = this.current.fillColor, ee = this.current.patternFill, ce = this.cachedCanvases.getCanvas("maskCanvas", _, N), ye = ce.context;
                te(ye, f);
                var be = l.mozCurrentTransform, me = e.Util.transform(be, [1 / _, 0, 0, -1 / N, 0, 0]);
                me = e.Util.transform(me, [1, 0, 0, 1, 0, -N]);
                var Pe = e.Util.applyTransform([0, 0], me), Ce = e.Util.applyTransform([_, N], me), xe = e.Util.normalizeRect([Pe[0], Pe[1], Ce[0], Ce[1]]), Fe = Math.ceil(xe[2] - xe[0]), Me = Math.ceil(xe[3] - xe[1]), Ue = this.cachedCanvases.getCanvas("fillCanvas", Fe, Me, !0), Ve = Ue.context, de = Math.min(Pe[0], Ce[0]), pe = Math.min(Pe[1], Ce[1]);
                Ve.translate(-de, -pe), Ve.transform.apply(Ve, me);
                var V = this._scaleImage(ce.canvas, Ve.mozCurrentTransformInverse);
                Ve.imageSmoothingEnabled = C(Ve.mozCurrentTransform, f.interpolate), Ve.drawImage(V.img, 0, 0, V.img.width, V.img.height, 0, 0, _, N), Ve.globalCompositeOperation = "source-in";
                var re = e.Util.transform(Ve.mozCurrentTransformInverse, [1, 0, 0, 1, -de, -pe]);
                return Ve.fillStyle = ee ? G.getPattern(l, this, re, n.PathType.FILL) : G, Ve.fillRect(0, 0, _, N), {
                  canvas: Ue.canvas,
                  offsetX: Math.round(de),
                  offsetY: Math.round(pe)
                };
              }
            }, {
              key: "setLineWidth",
              value: function(f) {
                this.current.lineWidth = f, this.ctx.lineWidth = f;
              }
            }, {
              key: "setLineCap",
              value: function(f) {
                this.ctx.lineCap = $[f];
              }
            }, {
              key: "setLineJoin",
              value: function(f) {
                this.ctx.lineJoin = Z[f];
              }
            }, {
              key: "setMiterLimit",
              value: function(f) {
                this.ctx.miterLimit = f;
              }
            }, {
              key: "setDash",
              value: function(f, l) {
                var _ = this.ctx;
                _.setLineDash !== void 0 && (_.setLineDash(f), _.lineDashOffset = l);
              }
            }, {
              key: "setRenderingIntent",
              value: function(f) {
              }
            }, {
              key: "setFlatness",
              value: function(f) {
              }
            }, {
              key: "setGState",
              value: function(f) {
                for (var l = 0, _ = f.length; l < _; l++) {
                  var N = f[l], G = N[0], ee = N[1];
                  switch (G) {
                    case "LW":
                      this.setLineWidth(ee);
                      break;
                    case "LC":
                      this.setLineCap(ee);
                      break;
                    case "LJ":
                      this.setLineJoin(ee);
                      break;
                    case "ML":
                      this.setMiterLimit(ee);
                      break;
                    case "D":
                      this.setDash(ee[0], ee[1]);
                      break;
                    case "RI":
                      this.setRenderingIntent(ee);
                      break;
                    case "FL":
                      this.setFlatness(ee);
                      break;
                    case "Font":
                      this.setFont(ee[0], ee[1]);
                      break;
                    case "CA":
                      this.current.strokeAlpha = N[1];
                      break;
                    case "ca":
                      this.current.fillAlpha = N[1], this.ctx.globalAlpha = N[1];
                      break;
                    case "BM":
                      this.ctx.globalCompositeOperation = ee;
                      break;
                    case "SMask":
                      this.current.activeSMask = ee ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                      break;
                    case "TR":
                      this.current.transferMaps = ee;
                  }
                }
              }
            }, {
              key: "checkSMaskState",
              value: function() {
                var f = !!this.suspendedCtx;
                this.current.activeSMask && !f ? this.beginSMaskMode() : !this.current.activeSMask && f && this.endSMaskMode();
              }
            }, {
              key: "beginSMaskMode",
              value: function() {
                if (this.suspendedCtx)
                  throw new Error("beginSMaskMode called while already in smask mode");
                var f = this.ctx.canvas.width, l = this.ctx.canvas.height, _ = "smaskGroupAt" + this.groupLevel, N = this.cachedCanvases.getCanvas(_, f, l, !0);
                this.suspendedCtx = this.ctx, this.ctx = N.context;
                var G = this.ctx;
                G.setTransform.apply(G, this.suspendedCtx.mozCurrentTransform), K(this.suspendedCtx, G), y(G, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
              }
            }, {
              key: "endSMaskMode",
              value: function() {
                if (!this.suspendedCtx)
                  throw new Error("endSMaskMode called while not in smask mode");
                this.ctx._removeMirroring(), K(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.current.activeSMask = null, this.suspendedCtx = null;
              }
            }, {
              key: "compose",
              value: function(f) {
                if (!!this.current.activeSMask) {
                  f ? (f[0] = Math.floor(f[0]), f[1] = Math.floor(f[1]), f[2] = Math.ceil(f[2]), f[3] = Math.ceil(f[3])) : f = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
                  var l = this.current.activeSMask, _ = this.suspendedCtx;
                  A(_, l, this.ctx, f), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
                }
              }
            }, {
              key: "save",
              value: function() {
                this.ctx.save();
                var f = this.current;
                this.stateStack.push(f), this.current = f.clone();
              }
            }, {
              key: "restore",
              value: function() {
                this.stateStack.length === 0 && this.current.activeSMask && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedGetSinglePixelWidth = null);
              }
            }, {
              key: "transform",
              value: function(f, l, _, N, G, ee) {
                this.ctx.transform(f, l, _, N, G, ee), this._cachedGetSinglePixelWidth = null;
              }
            }, {
              key: "constructPath",
              value: function(f, l) {
                for (var _ = this.ctx, N = this.current, G = N.x, ee = N.y, ce, ye, be = 0, me = 0, Pe = f.length; be < Pe; be++)
                  switch (f[be] | 0) {
                    case e.OPS.rectangle:
                      G = l[me++], ee = l[me++];
                      var Ce = l[me++], xe = l[me++], Fe = G + Ce, Me = ee + xe;
                      _.moveTo(G, ee), Ce === 0 || xe === 0 ? _.lineTo(Fe, Me) : (_.lineTo(Fe, ee), _.lineTo(Fe, Me), _.lineTo(G, Me)), N.updatePathMinMax(_.mozCurrentTransform, G, ee), N.updatePathMinMax(_.mozCurrentTransform, Fe, Me), _.closePath();
                      break;
                    case e.OPS.moveTo:
                      G = l[me++], ee = l[me++], _.moveTo(G, ee), N.updatePathMinMax(_.mozCurrentTransform, G, ee);
                      break;
                    case e.OPS.lineTo:
                      G = l[me++], ee = l[me++], _.lineTo(G, ee), N.updatePathMinMax(_.mozCurrentTransform, G, ee);
                      break;
                    case e.OPS.curveTo:
                      ce = G, ye = ee, G = l[me + 4], ee = l[me + 5], _.bezierCurveTo(l[me], l[me + 1], l[me + 2], l[me + 3], G, ee), N.updateCurvePathMinMax(_.mozCurrentTransform, ce, ye, l[me], l[me + 1], l[me + 2], l[me + 3], G, ee), me += 6;
                      break;
                    case e.OPS.curveTo2:
                      ce = G, ye = ee, _.bezierCurveTo(G, ee, l[me], l[me + 1], l[me + 2], l[me + 3]), N.updateCurvePathMinMax(_.mozCurrentTransform, ce, ye, G, ee, l[me], l[me + 1], l[me + 2], l[me + 3]), G = l[me + 2], ee = l[me + 3], me += 4;
                      break;
                    case e.OPS.curveTo3:
                      ce = G, ye = ee, G = l[me + 2], ee = l[me + 3], _.bezierCurveTo(l[me], l[me + 1], G, ee, G, ee), N.updateCurvePathMinMax(_.mozCurrentTransform, ce, ye, l[me], l[me + 1], G, ee, G, ee), me += 4;
                      break;
                    case e.OPS.closePath:
                      _.closePath();
                      break;
                  }
                N.setCurrentPoint(G, ee);
              }
            }, {
              key: "closePath",
              value: function() {
                this.ctx.closePath();
              }
            }, {
              key: "stroke",
              value: function(f) {
                f = typeof f < "u" ? f : !0;
                var l = this.ctx, _ = this.current.strokeColor;
                if (l.globalAlpha = this.current.strokeAlpha, this.contentVisible)
                  if (d(_) === "object" && _ !== null && _ !== void 0 && _.getPattern) {
                    var N = this.getSinglePixelWidth();
                    l.save(), l.strokeStyle = _.getPattern(l, this, l.mozCurrentTransformInverse, n.PathType.STROKE), l.lineWidth = Math.max(N, this.current.lineWidth), l.stroke(), l.restore();
                  } else {
                    var G = this.getSinglePixelWidth();
                    G < 0 && -G >= this.current.lineWidth ? (l.save(), l.resetTransform(), l.lineWidth = Math.round(this._combinedScaleFactor), l.stroke(), l.restore()) : (l.lineWidth = Math.max(G, this.current.lineWidth), l.stroke());
                  }
                f && this.consumePath(this.current.getClippedPathBoundingBox()), l.globalAlpha = this.current.fillAlpha;
              }
            }, {
              key: "closeStroke",
              value: function() {
                this.closePath(), this.stroke();
              }
            }, {
              key: "fill",
              value: function(f) {
                f = typeof f < "u" ? f : !0;
                var l = this.ctx, _ = this.current.fillColor, N = this.current.patternFill, G = !1;
                N && (l.save(), l.fillStyle = _.getPattern(l, this, l.mozCurrentTransformInverse, n.PathType.FILL), G = !0);
                var ee = this.current.getClippedPathBoundingBox();
                this.contentVisible && ee !== null && (this.pendingEOFill ? (l.fill("evenodd"), this.pendingEOFill = !1) : l.fill()), G && l.restore(), f && this.consumePath(ee);
              }
            }, {
              key: "eoFill",
              value: function() {
                this.pendingEOFill = !0, this.fill();
              }
            }, {
              key: "fillStroke",
              value: function() {
                this.fill(!1), this.stroke(!1), this.consumePath();
              }
            }, {
              key: "eoFillStroke",
              value: function() {
                this.pendingEOFill = !0, this.fillStroke();
              }
            }, {
              key: "closeFillStroke",
              value: function() {
                this.closePath(), this.fillStroke();
              }
            }, {
              key: "closeEOFillStroke",
              value: function() {
                this.pendingEOFill = !0, this.closePath(), this.fillStroke();
              }
            }, {
              key: "endPath",
              value: function() {
                this.consumePath();
              }
            }, {
              key: "clip",
              value: function() {
                this.pendingClip = z;
              }
            }, {
              key: "eoClip",
              value: function() {
                this.pendingClip = he;
              }
            }, {
              key: "beginText",
              value: function() {
                this.current.textMatrix = e.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
              }
            }, {
              key: "endText",
              value: function() {
                var f = this.pendingTextPaths, l = this.ctx;
                if (f === void 0) {
                  l.beginPath();
                  return;
                }
                l.save(), l.beginPath();
                for (var _ = 0; _ < f.length; _++) {
                  var N = f[_];
                  l.setTransform.apply(l, N.transform), l.translate(N.x, N.y), N.addToPath(l, N.fontSize);
                }
                l.restore(), l.clip(), l.beginPath(), delete this.pendingTextPaths;
              }
            }, {
              key: "setCharSpacing",
              value: function(f) {
                this.current.charSpacing = f;
              }
            }, {
              key: "setWordSpacing",
              value: function(f) {
                this.current.wordSpacing = f;
              }
            }, {
              key: "setHScale",
              value: function(f) {
                this.current.textHScale = f / 100;
              }
            }, {
              key: "setLeading",
              value: function(f) {
                this.current.leading = -f;
              }
            }, {
              key: "setFont",
              value: function(f, l) {
                var _ = this.commonObjs.get(f), N = this.current;
                if (!_)
                  throw new Error("Can't find font for ".concat(f));
                if (N.fontMatrix = _.fontMatrix || e.FONT_IDENTITY_MATRIX, (N.fontMatrix[0] === 0 || N.fontMatrix[3] === 0) && (0, e.warn)("Invalid font matrix for font " + f), l < 0 ? (l = -l, N.fontDirection = -1) : N.fontDirection = 1, this.current.font = _, this.current.fontSize = l, !_.isType3Font) {
                  var G = _.loadedName || "sans-serif", ee = "normal";
                  _.black ? ee = "900" : _.bold && (ee = "bold");
                  var ce = _.italic ? "italic" : "normal", ye = '"'.concat(G, '", ').concat(_.fallbackName), be = l;
                  l < W ? be = W : l > R && (be = R), this.current.fontSizeScale = l / be, this.ctx.font = "".concat(ce, " ").concat(ee, " ").concat(be, "px ").concat(ye);
                }
              }
            }, {
              key: "setTextRenderingMode",
              value: function(f) {
                this.current.textRenderingMode = f;
              }
            }, {
              key: "setTextRise",
              value: function(f) {
                this.current.textRise = f;
              }
            }, {
              key: "moveText",
              value: function(f, l) {
                this.current.x = this.current.lineX += f, this.current.y = this.current.lineY += l;
              }
            }, {
              key: "setLeadingMoveText",
              value: function(f, l) {
                this.setLeading(-l), this.moveText(f, l);
              }
            }, {
              key: "setTextMatrix",
              value: function(f, l, _, N, G, ee) {
                this.current.textMatrix = [f, l, _, N, G, ee], this.current.textMatrixScale = Math.hypot(f, l), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
              }
            }, {
              key: "nextLine",
              value: function() {
                this.moveText(0, this.current.leading);
              }
            }, {
              key: "paintChar",
              value: function(f, l, _, N, G) {
                var ee = this.ctx, ce = this.current, ye = ce.font, be = ce.textRenderingMode, me = ce.fontSize / ce.fontSizeScale, Pe = be & e.TextRenderingMode.FILL_STROKE_MASK, Ce = !!(be & e.TextRenderingMode.ADD_TO_PATH_FLAG), xe = ce.patternFill && !ye.missingFile, Fe;
                if ((ye.disableFontFace || Ce || xe) && (Fe = ye.getPathGenerator(this.commonObjs, f)), ye.disableFontFace || xe ? (ee.save(), ee.translate(l, _), ee.beginPath(), Fe(ee, me), N && ee.setTransform.apply(ee, N), (Pe === e.TextRenderingMode.FILL || Pe === e.TextRenderingMode.FILL_STROKE) && ee.fill(), (Pe === e.TextRenderingMode.STROKE || Pe === e.TextRenderingMode.FILL_STROKE) && (G && (ee.resetTransform(), ee.lineWidth = Math.round(this._combinedScaleFactor)), ee.stroke()), ee.restore()) : ((Pe === e.TextRenderingMode.FILL || Pe === e.TextRenderingMode.FILL_STROKE) && ee.fillText(f, l, _), (Pe === e.TextRenderingMode.STROKE || Pe === e.TextRenderingMode.FILL_STROKE) && (G ? (ee.save(), ee.moveTo(l, _), ee.resetTransform(), ee.lineWidth = Math.round(this._combinedScaleFactor), ee.strokeText(f, 0, 0), ee.restore()) : ee.strokeText(f, l, _))), Ce) {
                  var Me = this.pendingTextPaths || (this.pendingTextPaths = []);
                  Me.push({
                    transform: ee.mozCurrentTransform,
                    x: l,
                    y: _,
                    fontSize: me,
                    addToPath: Fe
                  });
                }
              }
            }, {
              key: "isFontSubpixelAAEnabled",
              get: function() {
                var f = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10), l = f.context;
                l.scale(1.5, 1), l.fillText("I", 0, 10);
                for (var _ = l.getImageData(0, 0, 10, 10).data, N = !1, G = 3; G < _.length; G += 4)
                  if (_[G] > 0 && _[G] < 255) {
                    N = !0;
                    break;
                  }
                return (0, e.shadow)(this, "isFontSubpixelAAEnabled", N);
              }
            }, {
              key: "showText",
              value: function(f) {
                var l = this.current, _ = l.font;
                if (_.isType3Font)
                  return this.showType3Text(f);
                var N = l.fontSize;
                if (N !== 0) {
                  var G = this.ctx, ee = l.fontSizeScale, ce = l.charSpacing, ye = l.wordSpacing, be = l.fontDirection, me = l.textHScale * be, Pe = f.length, Ce = _.vertical, xe = Ce ? 1 : -1, Fe = _.defaultVMetrics, Me = N * l.fontMatrix[0], Ue = l.textRenderingMode === e.TextRenderingMode.FILL && !_.disableFontFace && !l.patternFill;
                  G.save(), G.transform.apply(G, l.textMatrix), G.translate(l.x, l.y + l.textRise), be > 0 ? G.scale(me, -1) : G.scale(me, 1);
                  var Ve;
                  if (l.patternFill) {
                    G.save();
                    var de = l.fillColor.getPattern(G, this, G.mozCurrentTransformInverse, n.PathType.FILL);
                    Ve = G.mozCurrentTransform, G.restore(), G.fillStyle = de;
                  }
                  var pe = l.lineWidth, V = !1, re = l.textMatrixScale;
                  if (re === 0 || pe === 0) {
                    var J = l.textRenderingMode & e.TextRenderingMode.FILL_STROKE_MASK;
                    (J === e.TextRenderingMode.STROKE || J === e.TextRenderingMode.FILL_STROKE) && (this._cachedGetSinglePixelWidth = null, pe = this.getSinglePixelWidth(), V = pe < 0);
                  } else
                    pe /= re;
                  ee !== 1 && (G.scale(ee, ee), pe /= ee), G.lineWidth = pe;
                  var ue = 0, ne;
                  for (ne = 0; ne < Pe; ++ne) {
                    var Q = f[ne];
                    if ((0, e.isNum)(Q)) {
                      ue += xe * Q * N / 1e3;
                      continue;
                    }
                    var ve = !1, fe = (Q.isSpace ? ye : 0) + ce, Ae = Q.fontChar, Ee = Q.accent, De = void 0, Ne = void 0, ke = Q.width;
                    if (Ce) {
                      var He = Q.vmetric || Fe, Oe = -(Q.vmetric ? He[1] : ke * 0.5) * Me, Ie = He[2] * Me;
                      ke = He ? -He[0] : ke, De = Oe / ee, Ne = (ue + Ie) / ee;
                    } else
                      De = ue / ee, Ne = 0;
                    if (_.remeasure && ke > 0) {
                      var Ge = G.measureText(Ae).width * 1e3 / N * ee;
                      if (ke < Ge && this.isFontSubpixelAAEnabled) {
                        var Be = ke / Ge;
                        ve = !0, G.save(), G.scale(Be, 1), De /= Be;
                      } else
                        ke !== Ge && (De += (ke - Ge) / 2e3 * N / ee);
                    }
                    if (this.contentVisible && (Q.isInFont || _.missingFile)) {
                      if (Ue && !Ee)
                        G.fillText(Ae, De, Ne);
                      else if (this.paintChar(Ae, De, Ne, Ve, V), Ee) {
                        var Ye = De + N * Ee.offset.x / ee, Ze = Ne - N * Ee.offset.y / ee;
                        this.paintChar(Ee.fontChar, Ye, Ze, Ve, V);
                      }
                    }
                    var rt = void 0;
                    Ce ? rt = ke * Me - fe * be : rt = ke * Me + fe * be, ue += rt, ve && G.restore();
                  }
                  Ce ? l.y -= ue : l.x += ue * me, G.restore(), this.compose();
                }
              }
            }, {
              key: "showType3Text",
              value: function(f) {
                var l = this.ctx, _ = this.current, N = _.font, G = _.fontSize, ee = _.fontDirection, ce = N.vertical ? 1 : -1, ye = _.charSpacing, be = _.wordSpacing, me = _.textHScale * ee, Pe = _.fontMatrix || e.FONT_IDENTITY_MATRIX, Ce = f.length, xe = _.textRenderingMode === e.TextRenderingMode.INVISIBLE, Fe, Me, Ue, Ve;
                if (!(xe || G === 0)) {
                  for (this._cachedGetSinglePixelWidth = null, l.save(), l.transform.apply(l, _.textMatrix), l.translate(_.x, _.y), l.scale(me, ee), Fe = 0; Fe < Ce; ++Fe) {
                    if (Me = f[Fe], (0, e.isNum)(Me)) {
                      Ve = ce * Me * G / 1e3, this.ctx.translate(Ve, 0), _.x += Ve * me;
                      continue;
                    }
                    var de = (Me.isSpace ? be : 0) + ye, pe = N.charProcOperatorList[Me.operatorListId];
                    if (!pe) {
                      (0, e.warn)('Type3 character "'.concat(Me.operatorListId, '" is not available.'));
                      continue;
                    }
                    this.contentVisible && (this.processingType3 = Me, this.save(), l.scale(G, G), l.transform.apply(l, Pe), this.executeOperatorList(pe), this.restore());
                    var V = e.Util.applyTransform([Me.width, 0], Pe);
                    Ue = V[0] * G + de, l.translate(Ue, 0), _.x += Ue * me;
                  }
                  l.restore(), this.processingType3 = null;
                }
              }
            }, {
              key: "setCharWidth",
              value: function(f, l) {
              }
            }, {
              key: "setCharWidthAndBounds",
              value: function(f, l, _, N, G, ee) {
                this.ctx.rect(_, N, G - _, ee - N), this.clip(), this.endPath();
              }
            }, {
              key: "getColorN_Pattern",
              value: function(f) {
                var l = this, _;
                if (f[0] === "TilingPattern") {
                  var N = f[1], G = this.baseTransform || this.ctx.mozCurrentTransform.slice(), ee = {
                    createCanvasGraphics: function(ye) {
                      return new j(ye, l.commonObjs, l.objs, l.canvasFactory);
                    }
                  };
                  _ = new n.TilingPattern(f, N, this.ctx, ee, G);
                } else
                  _ = this._getPattern(f[1], f[2]);
                return _;
              }
            }, {
              key: "setStrokeColorN",
              value: function() {
                this.current.strokeColor = this.getColorN_Pattern(arguments);
              }
            }, {
              key: "setFillColorN",
              value: function() {
                this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
              }
            }, {
              key: "setStrokeRGBColor",
              value: function(f, l, _) {
                var N = e.Util.makeHexColor(f, l, _);
                this.ctx.strokeStyle = N, this.current.strokeColor = N;
              }
            }, {
              key: "setFillRGBColor",
              value: function(f, l, _) {
                var N = e.Util.makeHexColor(f, l, _);
                this.ctx.fillStyle = N, this.current.fillColor = N, this.current.patternFill = !1;
              }
            }, {
              key: "_getPattern",
              value: function(f) {
                var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, _;
                return this.cachedPatterns.has(f) ? _ = this.cachedPatterns.get(f) : (_ = (0, n.getShadingPattern)(this.objs.get(f)), this.cachedPatterns.set(f, _)), l && (_.matrix = l), _;
              }
            }, {
              key: "shadingFill",
              value: function(f) {
                if (!!this.contentVisible) {
                  var l = this.ctx;
                  this.save();
                  var _ = this._getPattern(f);
                  l.fillStyle = _.getPattern(l, this, l.mozCurrentTransformInverse, n.PathType.SHADING);
                  var N = l.mozCurrentTransformInverse;
                  if (N) {
                    var G = l.canvas, ee = G.width, ce = G.height, ye = e.Util.applyTransform([0, 0], N), be = e.Util.applyTransform([0, ce], N), me = e.Util.applyTransform([ee, 0], N), Pe = e.Util.applyTransform([ee, ce], N), Ce = Math.min(ye[0], be[0], me[0], Pe[0]), xe = Math.min(ye[1], be[1], me[1], Pe[1]), Fe = Math.max(ye[0], be[0], me[0], Pe[0]), Me = Math.max(ye[1], be[1], me[1], Pe[1]);
                    this.ctx.fillRect(Ce, xe, Fe - Ce, Me - xe);
                  } else
                    this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                  this.compose(this.current.getClippedPathBoundingBox()), this.restore();
                }
              }
            }, {
              key: "beginInlineImage",
              value: function() {
                (0, e.unreachable)("Should not call beginInlineImage");
              }
            }, {
              key: "beginImageData",
              value: function() {
                (0, e.unreachable)("Should not call beginImageData");
              }
            }, {
              key: "paintFormXObjectBegin",
              value: function(f, l) {
                if (!!this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(f) && f.length === 6 && this.transform.apply(this, f), this.baseTransform = this.ctx.mozCurrentTransform, l)) {
                  var _ = l[2] - l[0], N = l[3] - l[1];
                  this.ctx.rect(l[0], l[1], _, N), this.current.updatePathMinMax(this.ctx.mozCurrentTransform, l[0], l[1]), this.current.updatePathMinMax(this.ctx.mozCurrentTransform, l[2], l[3]), this.clip(), this.endPath();
                }
              }
            }, {
              key: "paintFormXObjectEnd",
              value: function() {
                !this.contentVisible || (this.restore(), this.baseTransform = this.baseTransformStack.pop());
              }
            }, {
              key: "beginGroup",
              value: function(f) {
                if (!!this.contentVisible) {
                  this.save();
                  var l = this.suspendedCtx;
                  this.current.activeSMask && (this.suspendedCtx = null, this.current.activeSMask = null);
                  var _ = this.ctx;
                  f.isolated || (0, e.info)("TODO: Support non-isolated groups."), f.knockout && (0, e.warn)("Knockout groups not supported.");
                  var N = _.mozCurrentTransform;
                  if (f.matrix && _.transform.apply(_, f.matrix), !f.bbox)
                    throw new Error("Bounding box is required.");
                  var G = e.Util.getAxialAlignedBoundingBox(f.bbox, _.mozCurrentTransform), ee = [0, 0, _.canvas.width, _.canvas.height];
                  G = e.Util.intersect(G, ee) || [0, 0, 0, 0];
                  var ce = Math.floor(G[0]), ye = Math.floor(G[1]), be = Math.max(Math.ceil(G[2]) - ce, 1), me = Math.max(Math.ceil(G[3]) - ye, 1), Pe = 1, Ce = 1;
                  be > U && (Pe = be / U, be = U), me > U && (Ce = me / U, me = U), this.current.startNewPathAndClipBox([0, 0, be, me]);
                  var xe = "groupAt" + this.groupLevel;
                  f.smask && (xe += "_smask_" + this.smaskCounter++ % 2);
                  var Fe = this.cachedCanvases.getCanvas(xe, be, me, !0), Me = Fe.context;
                  Me.scale(1 / Pe, 1 / Ce), Me.translate(-ce, -ye), Me.transform.apply(Me, N), f.smask ? this.smaskStack.push({
                    canvas: Fe.canvas,
                    context: Me,
                    offsetX: ce,
                    offsetY: ye,
                    scaleX: Pe,
                    scaleY: Ce,
                    subtype: f.smask.subtype,
                    backdrop: f.smask.backdrop,
                    transferMap: f.smask.transferMap || null,
                    startTransformInverse: null
                  }) : (_.setTransform(1, 0, 0, 1, 0, 0), _.translate(ce, ye), _.scale(Pe, Ce), _.save()), K(_, Me), this.ctx = Me, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push({
                    ctx: _,
                    suspendedCtx: l
                  }), this.groupLevel++;
                }
              }
            }, {
              key: "endGroup",
              value: function(f) {
                if (!!this.contentVisible) {
                  this.groupLevel--;
                  var l = this.ctx, _ = this.groupStack.pop(), N = _.ctx, G = _.suspendedCtx;
                  if (this.ctx = N, this.ctx.imageSmoothingEnabled = !1, G && (this.suspendedCtx = G), f.smask)
                    this.tempSMask = this.smaskStack.pop(), this.restore();
                  else {
                    this.ctx.restore();
                    var ee = this.ctx.mozCurrentTransform;
                    this.restore(), this.ctx.save(), this.ctx.setTransform.apply(this.ctx, ee);
                    var ce = e.Util.getAxialAlignedBoundingBox([0, 0, l.canvas.width, l.canvas.height], ee);
                    this.ctx.drawImage(l.canvas, 0, 0), this.ctx.restore(), this.compose(ce);
                  }
                }
              }
            }, {
              key: "beginAnnotations",
              value: function() {
                this.save(), this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform);
              }
            }, {
              key: "endAnnotations",
              value: function() {
                this.restore();
              }
            }, {
              key: "beginAnnotation",
              value: function(f, l, _, N, G) {
                if (this.save(), Array.isArray(l) && l.length === 4) {
                  var ee = l[2] - l[0], ce = l[3] - l[1];
                  if (G && this.annotationCanvasMap) {
                    _ = _.slice(), _[4] -= l[0], _[5] -= l[1], l = l.slice(), l[0] = l[1] = 0, l[2] = ee, l[3] = ce;
                    var ye = e.Util.singularValueDecompose2dScale(this.ctx.mozCurrentTransform), be = D(ye, 2), me = be[0], Pe = be[1], Ce = this.viewportScale, xe = Math.ceil(ee * this.outputScaleX * Ce), Fe = Math.ceil(ce * this.outputScaleY * Ce);
                    this.annotationCanvas = this.canvasFactory.create(xe, Fe);
                    var Me = this.annotationCanvas, Ue = Me.canvas, Ve = Me.context;
                    Ue.style.width = "calc(".concat(ee, "px * var(--viewport-scale-factor))"), Ue.style.height = "calc(".concat(ce, "px * var(--viewport-scale-factor))"), this.annotationCanvasMap.set(f, Ue), this.annotationCanvas.savedCtx = this.ctx, this.ctx = Ve, this.ctx.setTransform(me, 0, 0, -Pe, 0, ce * Pe), T(this.ctx), oe(this.ctx);
                  } else
                    oe(this.ctx), this.ctx.rect(l[0], l[1], ee, ce), this.clip(), this.endPath();
                }
                this.current = new L(this.ctx.canvas.width, this.ctx.canvas.height), this.transform.apply(this, _), this.transform.apply(this, N);
              }
            }, {
              key: "endAnnotation",
              value: function() {
                this.annotationCanvas && (this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas), this.restore();
              }
            }, {
              key: "paintImageMaskXObject",
              value: function(f) {
                if (!!this.contentVisible) {
                  var l = this.ctx, _ = f.width, N = f.height, G = this.processingType3;
                  if (G && G.compiled === void 0 && (_ <= p && N <= p ? G.compiled = H({
                    data: f.data,
                    width: _,
                    height: N
                  }) : G.compiled = null), G != null && G.compiled) {
                    G.compiled(l);
                    return;
                  }
                  var ee = this._createMaskCanvas(f), ce = ee.canvas;
                  l.save(), l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(ce, ee.offsetX, ee.offsetY), l.restore(), this.compose();
                }
              }
            }, {
              key: "paintImageMaskXObjectRepeat",
              value: function(f, l) {
                var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, N = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, G = arguments.length > 4 ? arguments[4] : void 0, ee = arguments.length > 5 ? arguments[5] : void 0;
                if (!!this.contentVisible) {
                  var ce = this.ctx;
                  ce.save();
                  var ye = ce.mozCurrentTransform;
                  ce.transform(l, _, N, G, 0, 0);
                  var be = this._createMaskCanvas(f);
                  ce.setTransform(1, 0, 0, 1, 0, 0);
                  for (var me = 0, Pe = ee.length; me < Pe; me += 2) {
                    var Ce = e.Util.transform(ye, [l, _, N, G, ee[me], ee[me + 1]]), xe = e.Util.applyTransform([0, 0], Ce), Fe = D(xe, 2), Me = Fe[0], Ue = Fe[1];
                    ce.drawImage(be.canvas, Me, Ue);
                  }
                  ce.restore(), this.compose();
                }
              }
            }, {
              key: "paintImageMaskXObjectGroup",
              value: function(f) {
                if (!!this.contentVisible) {
                  for (var l = this.ctx, _ = this.current.fillColor, N = this.current.patternFill, G = 0, ee = f.length; G < ee; G++) {
                    var ce = f[G], ye = ce.width, be = ce.height, me = this.cachedCanvases.getCanvas("maskCanvas", ye, be), Pe = me.context;
                    Pe.save(), te(Pe, ce), Pe.globalCompositeOperation = "source-in", Pe.fillStyle = N ? _.getPattern(Pe, this, l.mozCurrentTransformInverse, n.PathType.FILL) : _, Pe.fillRect(0, 0, ye, be), Pe.restore(), l.save(), l.transform.apply(l, ce.transform), l.scale(1, -1), l.drawImage(me.canvas, 0, 0, ye, be, 0, -1, 1, 1), l.restore();
                  }
                  this.compose();
                }
              }
            }, {
              key: "paintImageXObject",
              value: function(f) {
                if (!!this.contentVisible) {
                  var l = f.startsWith("g_") ? this.commonObjs.get(f) : this.objs.get(f);
                  if (!l) {
                    (0, e.warn)("Dependent image isn't ready yet");
                    return;
                  }
                  this.paintInlineImageXObject(l);
                }
              }
            }, {
              key: "paintImageXObjectRepeat",
              value: function(f, l, _, N) {
                if (!!this.contentVisible) {
                  var G = f.startsWith("g_") ? this.commonObjs.get(f) : this.objs.get(f);
                  if (!G) {
                    (0, e.warn)("Dependent image isn't ready yet");
                    return;
                  }
                  for (var ee = G.width, ce = G.height, ye = [], be = 0, me = N.length; be < me; be += 2)
                    ye.push({
                      transform: [l, 0, 0, _, N[be], N[be + 1]],
                      x: 0,
                      y: 0,
                      w: ee,
                      h: ce
                    });
                  this.paintInlineImageXObjectGroup(G, ye);
                }
              }
            }, {
              key: "paintInlineImageXObject",
              value: function(f) {
                if (!!this.contentVisible) {
                  var l = f.width, _ = f.height, N = this.ctx;
                  this.save(), N.scale(1 / l, -1 / _);
                  var G;
                  if (typeof HTMLElement == "function" && f instanceof HTMLElement || !f.data)
                    G = f;
                  else {
                    var ee = this.cachedCanvases.getCanvas("inlineImage", l, _), ce = ee.context;
                    Y(ce, f, this.current.transferMaps), G = ee.canvas;
                  }
                  var ye = this._scaleImage(G, N.mozCurrentTransformInverse);
                  if (N.imageSmoothingEnabled = C(N.mozCurrentTransform, f.interpolate), N.drawImage(ye.img, 0, 0, ye.paintWidth, ye.paintHeight, 0, -_, l, _), this.imageLayer) {
                    var be = this.getCanvasPosition(0, -_);
                    this.imageLayer.appendImage({
                      imgData: f,
                      left: be[0],
                      top: be[1],
                      width: l / N.mozCurrentTransformInverse[0],
                      height: _ / N.mozCurrentTransformInverse[3]
                    });
                  }
                  this.compose(), this.restore();
                }
              }
            }, {
              key: "paintInlineImageXObjectGroup",
              value: function(f, l) {
                if (!!this.contentVisible) {
                  var _ = this.ctx, N = f.width, G = f.height, ee = this.cachedCanvases.getCanvas("inlineImage", N, G), ce = ee.context;
                  Y(ce, f, this.current.transferMaps);
                  for (var ye = 0, be = l.length; ye < be; ye++) {
                    var me = l[ye];
                    if (_.save(), _.transform.apply(_, me.transform), _.scale(1, -1), _.drawImage(ee.canvas, me.x, me.y, me.w, me.h, 0, -1, 1, 1), this.imageLayer) {
                      var Pe = this.getCanvasPosition(me.x, me.y);
                      this.imageLayer.appendImage({
                        imgData: f,
                        left: Pe[0],
                        top: Pe[1],
                        width: N,
                        height: G
                      });
                    }
                    _.restore();
                  }
                  this.compose();
                }
              }
            }, {
              key: "paintSolidColorImageMask",
              value: function() {
                !this.contentVisible || (this.ctx.fillRect(0, 0, 1, 1), this.compose());
              }
            }, {
              key: "markPoint",
              value: function(f) {
              }
            }, {
              key: "markPointProps",
              value: function(f, l) {
              }
            }, {
              key: "beginMarkedContent",
              value: function(f) {
                this.markedContentStack.push({
                  visible: !0
                });
              }
            }, {
              key: "beginMarkedContentProps",
              value: function(f, l) {
                f === "OC" ? this.markedContentStack.push({
                  visible: this.optionalContentConfig.isVisible(l)
                }) : this.markedContentStack.push({
                  visible: !0
                }), this.contentVisible = this.isContentVisible();
              }
            }, {
              key: "endMarkedContent",
              value: function() {
                this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
              }
            }, {
              key: "beginCompat",
              value: function() {
              }
            }, {
              key: "endCompat",
              value: function() {
              }
            }, {
              key: "consumePath",
              value: function(f) {
                this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(f);
                var l = this.ctx;
                this.pendingClip && (this.pendingClip === he ? l.clip("evenodd") : l.clip(), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), l.beginPath();
              }
            }, {
              key: "getSinglePixelWidth",
              value: function() {
                if (this._cachedGetSinglePixelWidth === null) {
                  var f = this.ctx.mozCurrentTransform, l = Math.abs(f[0] * f[3] - f[2] * f[1]), _ = Math.pow(f[0], 2) + Math.pow(f[2], 2), N = Math.pow(f[1], 2) + Math.pow(f[3], 2), G = Math.sqrt(Math.max(_, N)) / l;
                  _ !== N && this._combinedScaleFactor * G > 1 ? this._cachedGetSinglePixelWidth = -(this._combinedScaleFactor * G) : l > Number.EPSILON ? this._cachedGetSinglePixelWidth = G : this._cachedGetSinglePixelWidth = 1;
                }
                return this._cachedGetSinglePixelWidth;
              }
            }, {
              key: "getCanvasPosition",
              value: function(f, l) {
                var _ = this.ctx.mozCurrentTransform;
                return [_[0] * f + _[2] * l + _[4], _[1] * f + _[3] * l + _[5]];
              }
            }, {
              key: "isContentVisible",
              value: function() {
                for (var f = this.markedContentStack.length - 1; f >= 0; f--)
                  if (!this.markedContentStack[f].visible)
                    return !1;
                return !0;
              }
            }]), j;
          }();
          a.CanvasGraphics = _e;
          for (var Te in e.OPS)
            _e.prototype[Te] !== void 0 && (_e.prototype[e.OPS[Te]] = _e.prototype[Te]);
        },
        (i, a, t) => {
          function e(L) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(te) {
              return typeof te;
            } : e = function(te) {
              return te && typeof Symbol == "function" && te.constructor === Symbol && te !== Symbol.prototype ? "symbol" : typeof te;
            }, e(L);
          }
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.TilingPattern = a.PathType = void 0, a.getShadingPattern = T;
          var n = t(4);
          function o(L, Y) {
            var te = typeof Symbol < "u" && L[Symbol.iterator] || L["@@iterator"];
            if (!te) {
              if (Array.isArray(L) || (te = d(L)) || Y && L && typeof L.length == "number") {
                te && (L = te);
                var K = 0, oe = function() {
                };
                return { s: oe, n: function() {
                  return K >= L.length ? { done: !0 } : { done: !1, value: L[K++] };
                }, e: function(A) {
                  throw A;
                }, f: oe };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var q = !0, X = !1, S;
            return { s: function() {
              te = te.call(L);
            }, n: function() {
              var A = te.next();
              return q = A.done, A;
            }, e: function(A) {
              X = !0, S = A;
            }, f: function() {
              try {
                !q && te.return != null && te.return();
              } finally {
                if (X)
                  throw S;
              }
            } };
          }
          function d(L, Y) {
            if (!!L) {
              if (typeof L == "string")
                return u(L, Y);
              var te = Object.prototype.toString.call(L).slice(8, -1);
              if (te === "Object" && L.constructor && (te = L.constructor.name), te === "Map" || te === "Set")
                return Array.from(L);
              if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))
                return u(L, Y);
            }
          }
          function u(L, Y) {
            (Y == null || Y > L.length) && (Y = L.length);
            for (var te = 0, K = new Array(Y); te < Y; te++)
              K[te] = L[te];
            return K;
          }
          function g(L, Y) {
            if (typeof Y != "function" && Y !== null)
              throw new TypeError("Super expression must either be null or a function");
            L.prototype = Object.create(Y && Y.prototype, { constructor: { value: L, writable: !0, configurable: !0 } }), Y && P(L, Y);
          }
          function P(L, Y) {
            return P = Object.setPrototypeOf || function(K, oe) {
              return K.__proto__ = oe, K;
            }, P(L, Y);
          }
          function F(L) {
            var Y = x();
            return function() {
              var K = w(L), oe;
              if (Y) {
                var q = w(this).constructor;
                oe = Reflect.construct(K, arguments, q);
              } else
                oe = K.apply(this, arguments);
              return D(this, oe);
            };
          }
          function D(L, Y) {
            if (Y && (e(Y) === "object" || typeof Y == "function"))
              return Y;
            if (Y !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return B(L);
          }
          function B(L) {
            if (L === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return L;
          }
          function x() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }
          function w(L) {
            return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(te) {
              return te.__proto__ || Object.getPrototypeOf(te);
            }, w(L);
          }
          function O(L, Y) {
            if (!(L instanceof Y))
              throw new TypeError("Cannot call a class as a function");
          }
          function k(L, Y) {
            for (var te = 0; te < Y.length; te++) {
              var K = Y[te];
              K.enumerable = K.enumerable || !1, K.configurable = !0, "value" in K && (K.writable = !0), Object.defineProperty(L, K.key, K);
            }
          }
          function W(L, Y, te) {
            return Y && k(L.prototype, Y), te && k(L, te), L;
          }
          var R = {
            FILL: "Fill",
            STROKE: "Stroke",
            SHADING: "Shading"
          };
          a.PathType = R;
          function U(L, Y) {
            if (!(!Y || typeof Path2D > "u")) {
              var te = Y[2] - Y[0], K = Y[3] - Y[1], oe = new Path2D();
              oe.rect(Y[0], Y[1], te, K), L.clip(oe);
            }
          }
          var v = /* @__PURE__ */ function() {
            function L() {
              O(this, L), this.constructor === L && (0, n.unreachable)("Cannot initialize BaseShadingPattern.");
            }
            return W(L, [{
              key: "getPattern",
              value: function() {
                (0, n.unreachable)("Abstract method `getPattern` called.");
              }
            }]), L;
          }(), c = /* @__PURE__ */ function(L) {
            g(te, L);
            var Y = F(te);
            function te(K) {
              var oe;
              return O(this, te), oe = Y.call(this), oe._type = K[1], oe._bbox = K[2], oe._colorStops = K[3], oe._p0 = K[4], oe._p1 = K[5], oe._r0 = K[6], oe._r1 = K[7], oe.matrix = null, oe;
            }
            return W(te, [{
              key: "_createGradient",
              value: function(oe) {
                var q;
                this._type === "axial" ? q = oe.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (q = oe.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
                var X = o(this._colorStops), S;
                try {
                  for (X.s(); !(S = X.n()).done; ) {
                    var h = S.value;
                    q.addColorStop(h[0], h[1]);
                  }
                } catch (A) {
                  X.e(A);
                } finally {
                  X.f();
                }
                return q;
              }
            }, {
              key: "getPattern",
              value: function(oe, q, X, S) {
                var h;
                if (S === R.STROKE || S === R.FILL) {
                  var A = q.current.getClippedPathBoundingBox(S, oe.mozCurrentTransform) || [0, 0, 0, 0], C = Math.ceil(A[2] - A[0]) || 1, $ = Math.ceil(A[3] - A[1]) || 1, Z = q.cachedCanvases.getCanvas("pattern", C, $, !0), z = Z.context;
                  z.clearRect(0, 0, z.canvas.width, z.canvas.height), z.beginPath(), z.rect(0, 0, z.canvas.width, z.canvas.height), z.translate(-A[0], -A[1]), X = n.Util.transform(X, [1, 0, 0, 1, A[0], A[1]]), z.transform.apply(z, q.baseTransform), this.matrix && z.transform.apply(z, this.matrix), U(z, this._bbox), z.fillStyle = this._createGradient(z), z.fill(), h = oe.createPattern(Z.canvas, "no-repeat");
                  var he = new DOMMatrix(X);
                  try {
                    h.setTransform(he);
                  } catch (_e) {
                    (0, n.warn)('RadialAxialShadingPattern.getPattern: "'.concat(_e == null ? void 0 : _e.message, '".'));
                  }
                } else
                  U(oe, this._bbox), h = this._createGradient(oe);
                return h;
              }
            }]), te;
          }(v);
          function p(L, Y, te, K, oe, q, X, S) {
            var h = Y.coords, A = Y.colors, C = L.data, $ = L.width * 4, Z;
            h[te + 1] > h[K + 1] && (Z = te, te = K, K = Z, Z = q, q = X, X = Z), h[K + 1] > h[oe + 1] && (Z = K, K = oe, oe = Z, Z = X, X = S, S = Z), h[te + 1] > h[K + 1] && (Z = te, te = K, K = Z, Z = q, q = X, X = Z);
            var z = (h[te] + Y.offsetX) * Y.scaleX, he = (h[te + 1] + Y.offsetY) * Y.scaleY, _e = (h[K] + Y.offsetX) * Y.scaleX, Te = (h[K + 1] + Y.offsetY) * Y.scaleY, j = (h[oe] + Y.offsetX) * Y.scaleX, I = (h[oe + 1] + Y.offsetY) * Y.scaleY;
            if (!(he >= I))
              for (var f = A[q], l = A[q + 1], _ = A[q + 2], N = A[X], G = A[X + 1], ee = A[X + 2], ce = A[S], ye = A[S + 1], be = A[S + 2], me = Math.round(he), Pe = Math.round(I), Ce, xe, Fe, Me, Ue, Ve, de, pe, V = me; V <= Pe; V++) {
                if (V < Te) {
                  var re = void 0;
                  V < he ? re = 0 : re = (he - V) / (he - Te), Ce = z - (z - _e) * re, xe = f - (f - N) * re, Fe = l - (l - G) * re, Me = _ - (_ - ee) * re;
                } else {
                  var J = void 0;
                  V > I ? J = 1 : Te === I ? J = 0 : J = (Te - V) / (Te - I), Ce = _e - (_e - j) * J, xe = N - (N - ce) * J, Fe = G - (G - ye) * J, Me = ee - (ee - be) * J;
                }
                var ue = void 0;
                V < he ? ue = 0 : V > I ? ue = 1 : ue = (he - V) / (he - I), Ue = z - (z - j) * ue, Ve = f - (f - ce) * ue, de = l - (l - ye) * ue, pe = _ - (_ - be) * ue;
                for (var ne = Math.round(Math.min(Ce, Ue)), Q = Math.round(Math.max(Ce, Ue)), ve = $ * V + ne * 4, fe = ne; fe <= Q; fe++)
                  ue = (Ce - fe) / (Ce - Ue), ue < 0 ? ue = 0 : ue > 1 && (ue = 1), C[ve++] = xe - (xe - Ve) * ue | 0, C[ve++] = Fe - (Fe - de) * ue | 0, C[ve++] = Me - (Me - pe) * ue | 0, C[ve++] = 255;
              }
          }
          function b(L, Y, te) {
            var K = Y.coords, oe = Y.colors, q, X;
            switch (Y.type) {
              case "lattice":
                var S = Y.verticesPerRow, h = Math.floor(K.length / S) - 1, A = S - 1;
                for (q = 0; q < h; q++)
                  for (var C = q * S, $ = 0; $ < A; $++, C++)
                    p(L, te, K[C], K[C + 1], K[C + S], oe[C], oe[C + 1], oe[C + S]), p(L, te, K[C + S + 1], K[C + 1], K[C + S], oe[C + S + 1], oe[C + 1], oe[C + S]);
                break;
              case "triangles":
                for (q = 0, X = K.length; q < X; q += 3)
                  p(L, te, K[q], K[q + 1], K[q + 2], oe[q], oe[q + 1], oe[q + 2]);
                break;
              default:
                throw new Error("illegal figure");
            }
          }
          var m = /* @__PURE__ */ function(L) {
            g(te, L);
            var Y = F(te);
            function te(K) {
              var oe;
              return O(this, te), oe = Y.call(this), oe._coords = K[2], oe._colors = K[3], oe._figures = K[4], oe._bounds = K[5], oe._bbox = K[7], oe._background = K[8], oe.matrix = null, oe;
            }
            return W(te, [{
              key: "_createMeshCanvas",
              value: function(oe, q, X) {
                var S = 1.1, h = 3e3, A = 2, C = Math.floor(this._bounds[0]), $ = Math.floor(this._bounds[1]), Z = Math.ceil(this._bounds[2]) - C, z = Math.ceil(this._bounds[3]) - $, he = Math.min(Math.ceil(Math.abs(Z * oe[0] * S)), h), _e = Math.min(Math.ceil(Math.abs(z * oe[1] * S)), h), Te = Z / he, j = z / _e, I = {
                  coords: this._coords,
                  colors: this._colors,
                  offsetX: -C,
                  offsetY: -$,
                  scaleX: 1 / Te,
                  scaleY: 1 / j
                }, f = he + A * 2, l = _e + A * 2, _ = X.getCanvas("mesh", f, l, !1), N = _.context, G = N.createImageData(he, _e);
                if (q)
                  for (var ee = G.data, ce = 0, ye = ee.length; ce < ye; ce += 4)
                    ee[ce] = q[0], ee[ce + 1] = q[1], ee[ce + 2] = q[2], ee[ce + 3] = 255;
                var be = o(this._figures), me;
                try {
                  for (be.s(); !(me = be.n()).done; ) {
                    var Pe = me.value;
                    b(G, Pe, I);
                  }
                } catch (xe) {
                  be.e(xe);
                } finally {
                  be.f();
                }
                N.putImageData(G, A, A);
                var Ce = _.canvas;
                return {
                  canvas: Ce,
                  offsetX: C - A * Te,
                  offsetY: $ - A * j,
                  scaleX: Te,
                  scaleY: j
                };
              }
            }, {
              key: "getPattern",
              value: function(oe, q, X, S) {
                U(oe, this._bbox);
                var h;
                if (S === R.SHADING)
                  h = n.Util.singularValueDecompose2dScale(oe.mozCurrentTransform);
                else if (h = n.Util.singularValueDecompose2dScale(q.baseTransform), this.matrix) {
                  var A = n.Util.singularValueDecompose2dScale(this.matrix);
                  h = [h[0] * A[0], h[1] * A[1]];
                }
                var C = this._createMeshCanvas(h, S === R.SHADING ? null : this._background, q.cachedCanvases);
                return S !== R.SHADING && (oe.setTransform.apply(oe, q.baseTransform), this.matrix && oe.transform.apply(oe, this.matrix)), oe.translate(C.offsetX, C.offsetY), oe.scale(C.scaleX, C.scaleY), oe.createPattern(C.canvas, "no-repeat");
              }
            }]), te;
          }(v), y = /* @__PURE__ */ function(L) {
            g(te, L);
            var Y = F(te);
            function te() {
              return O(this, te), Y.apply(this, arguments);
            }
            return W(te, [{
              key: "getPattern",
              value: function() {
                return "hotpink";
              }
            }]), te;
          }(v);
          function T(L) {
            switch (L[0]) {
              case "RadialAxial":
                return new c(L);
              case "Mesh":
                return new m(L);
              case "Dummy":
                return new y();
            }
            throw new Error("Unknown IR type: ".concat(L[0]));
          }
          var M = {
            COLORED: 1,
            UNCOLORED: 2
          }, H = /* @__PURE__ */ function() {
            function L(Y, te, K, oe, q) {
              O(this, L), this.operatorList = Y[2], this.matrix = Y[3] || [1, 0, 0, 1, 0, 0], this.bbox = Y[4], this.xstep = Y[5], this.ystep = Y[6], this.paintType = Y[7], this.tilingType = Y[8], this.color = te, this.ctx = K, this.canvasGraphicsFactory = oe, this.baseTransform = q;
            }
            return W(L, [{
              key: "createPatternCanvas",
              value: function(te) {
                var K = this.operatorList, oe = this.bbox, q = this.xstep, X = this.ystep, S = this.paintType, h = this.tilingType, A = this.color, C = this.canvasGraphicsFactory;
                (0, n.info)("TilingType: " + h);
                var $ = oe[0], Z = oe[1], z = oe[2], he = oe[3], _e = n.Util.singularValueDecompose2dScale(this.matrix), Te = n.Util.singularValueDecompose2dScale(this.baseTransform), j = [_e[0] * Te[0], _e[1] * Te[1]], I = this.getSizeAndScale(q, this.ctx.canvas.width, j[0]), f = this.getSizeAndScale(X, this.ctx.canvas.height, j[1]), l = te.cachedCanvases.getCanvas("pattern", I.size, f.size, !0), _ = l.context, N = C.createCanvasGraphics(_);
                N.groupLevel = te.groupLevel, this.setFillAndStrokeStyleToContext(N, S, A);
                var G = $, ee = Z, ce = z, ye = he;
                return $ < 0 && (G = 0, ce += Math.abs($)), Z < 0 && (ee = 0, ye += Math.abs(Z)), _.translate(-(I.scale * G), -(f.scale * ee)), N.transform(I.scale, 0, 0, f.scale, 0, 0), this.clipBbox(N, G, ee, ce, ye), N.baseTransform = N.ctx.mozCurrentTransform.slice(), N.executeOperatorList(K), N.endDrawing(), {
                  canvas: l.canvas,
                  scaleX: I.scale,
                  scaleY: f.scale,
                  offsetX: G,
                  offsetY: ee
                };
              }
            }, {
              key: "getSizeAndScale",
              value: function(te, K, oe) {
                te = Math.abs(te);
                var q = Math.max(L.MAX_PATTERN_SIZE, K), X = Math.ceil(te * oe);
                return X >= q ? X = q : oe = X / te, {
                  scale: oe,
                  size: X
                };
              }
            }, {
              key: "clipBbox",
              value: function(te, K, oe, q, X) {
                var S = q - K, h = X - oe;
                te.ctx.rect(K, oe, S, h), te.clip(), te.endPath();
              }
            }, {
              key: "setFillAndStrokeStyleToContext",
              value: function(te, K, oe) {
                var q = te.ctx, X = te.current;
                switch (K) {
                  case M.COLORED:
                    var S = this.ctx;
                    q.fillStyle = S.fillStyle, q.strokeStyle = S.strokeStyle, X.fillColor = S.fillStyle, X.strokeColor = S.strokeStyle;
                    break;
                  case M.UNCOLORED:
                    var h = n.Util.makeHexColor(oe[0], oe[1], oe[2]);
                    q.fillStyle = h, q.strokeStyle = h, X.fillColor = h, X.strokeColor = h;
                    break;
                  default:
                    throw new n.FormatError("Unsupported paint type: ".concat(K));
                }
              }
            }, {
              key: "getPattern",
              value: function(te, K, oe, q) {
                var X = oe;
                q !== R.SHADING && (X = n.Util.transform(X, K.baseTransform), this.matrix && (X = n.Util.transform(X, this.matrix)));
                var S = this.createPatternCanvas(K), h = new DOMMatrix(X);
                h = h.translate(S.offsetX, S.offsetY), h = h.scale(1 / S.scaleX, 1 / S.scaleY);
                var A = te.createPattern(S.canvas, "repeat");
                try {
                  A.setTransform(h);
                } catch (C) {
                  (0, n.warn)('TilingPattern.getPattern: "'.concat(C == null ? void 0 : C.message, '".'));
                }
                return A;
              }
            }], [{
              key: "MAX_PATTERN_SIZE",
              get: function() {
                return (0, n.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
              }
            }]), L;
          }();
          a.TilingPattern = H;
        },
        (i, a) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.GlobalWorkerOptions = void 0;
          var t = /* @__PURE__ */ Object.create(null);
          a.GlobalWorkerOptions = t, t.workerPort = t.workerPort === void 0 ? null : t.workerPort, t.workerSrc = t.workerSrc === void 0 ? "" : t.workerSrc;
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.MessageHandler = void 0;
          var e = o(t(2)), n = t(4);
          function o(k) {
            return k && k.__esModule ? k : { default: k };
          }
          function d(k, W, R, U, v, c, p) {
            try {
              var b = k[c](p), m = b.value;
            } catch (y) {
              R(y);
              return;
            }
            b.done ? W(m) : Promise.resolve(m).then(U, v);
          }
          function u(k) {
            return function() {
              var W = this, R = arguments;
              return new Promise(function(U, v) {
                var c = k.apply(W, R);
                function p(m) {
                  d(c, U, v, p, b, "next", m);
                }
                function b(m) {
                  d(c, U, v, p, b, "throw", m);
                }
                p(void 0);
              });
            };
          }
          function g(k, W) {
            if (!(k instanceof W))
              throw new TypeError("Cannot call a class as a function");
          }
          function P(k, W) {
            for (var R = 0; R < W.length; R++) {
              var U = W[R];
              U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(k, U.key, U);
            }
          }
          function F(k, W, R) {
            return W && P(k.prototype, W), R && P(k, R), k;
          }
          function D(k) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? D = function(R) {
              return typeof R;
            } : D = function(R) {
              return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
            }, D(k);
          }
          var B = {
            UNKNOWN: 0,
            DATA: 1,
            ERROR: 2
          }, x = {
            UNKNOWN: 0,
            CANCEL: 1,
            CANCEL_COMPLETE: 2,
            CLOSE: 3,
            ENQUEUE: 4,
            ERROR: 5,
            PULL: 6,
            PULL_COMPLETE: 7,
            START_COMPLETE: 8
          };
          function w(k) {
            if (!(k instanceof Error || D(k) === "object" && k !== null))
              return (0, n.warn)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), k;
            switch (k.name) {
              case "AbortException":
                return new n.AbortException(k.message);
              case "MissingPDFException":
                return new n.MissingPDFException(k.message);
              case "PasswordException":
                return new n.PasswordException(k.message, k.code);
              case "UnexpectedResponseException":
                return new n.UnexpectedResponseException(k.message, k.status);
              case "UnknownErrorException":
                return new n.UnknownErrorException(k.message, k.details);
              default:
                return new n.UnknownErrorException(k.message, k.toString());
            }
          }
          var O = /* @__PURE__ */ function() {
            function k(W, R, U) {
              var v = this;
              g(this, k), this.sourceName = W, this.targetName = R, this.comObj = U, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = function(c) {
                var p = c.data;
                if (p.targetName === v.sourceName) {
                  if (p.stream) {
                    v._processStreamMessage(p);
                    return;
                  }
                  if (p.callback) {
                    var b = p.callbackId, m = v.callbackCapabilities[b];
                    if (!m)
                      throw new Error("Cannot resolve callback ".concat(b));
                    if (delete v.callbackCapabilities[b], p.callback === B.DATA)
                      m.resolve(p.data);
                    else if (p.callback === B.ERROR)
                      m.reject(w(p.reason));
                    else
                      throw new Error("Unexpected callback case");
                    return;
                  }
                  var y = v.actionHandler[p.action];
                  if (!y)
                    throw new Error("Unknown action from worker: ".concat(p.action));
                  if (p.callbackId) {
                    var T = v.sourceName, M = p.sourceName;
                    new Promise(function(H) {
                      H(y(p.data));
                    }).then(function(H) {
                      U.postMessage({
                        sourceName: T,
                        targetName: M,
                        callback: B.DATA,
                        callbackId: p.callbackId,
                        data: H
                      });
                    }, function(H) {
                      U.postMessage({
                        sourceName: T,
                        targetName: M,
                        callback: B.ERROR,
                        callbackId: p.callbackId,
                        reason: w(H)
                      });
                    });
                    return;
                  }
                  if (p.streamId) {
                    v._createStreamSink(p);
                    return;
                  }
                  y(p.data);
                }
              }, U.addEventListener("message", this._onComObjOnMessage);
            }
            return F(k, [{
              key: "on",
              value: function(R, U) {
                var v = this.actionHandler;
                if (v[R])
                  throw new Error('There is already an actionName called "'.concat(R, '"'));
                v[R] = U;
              }
            }, {
              key: "send",
              value: function(R, U, v) {
                this.comObj.postMessage({
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: R,
                  data: U
                }, v);
              }
            }, {
              key: "sendWithPromise",
              value: function(R, U, v) {
                var c = this.callbackId++, p = (0, n.createPromiseCapability)();
                this.callbackCapabilities[c] = p;
                try {
                  this.comObj.postMessage({
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: R,
                    callbackId: c,
                    data: U
                  }, v);
                } catch (b) {
                  p.reject(b);
                }
                return p.promise;
              }
            }, {
              key: "sendWithStream",
              value: function(R, U, v, c) {
                var p = this, b = this.streamId++, m = this.sourceName, y = this.targetName, T = this.comObj;
                return new ReadableStream({
                  start: function(H) {
                    var L = (0, n.createPromiseCapability)();
                    return p.streamControllers[b] = {
                      controller: H,
                      startCall: L,
                      pullCall: null,
                      cancelCall: null,
                      isClosed: !1
                    }, T.postMessage({
                      sourceName: m,
                      targetName: y,
                      action: R,
                      streamId: b,
                      data: U,
                      desiredSize: H.desiredSize
                    }, c), L.promise;
                  },
                  pull: function(H) {
                    var L = (0, n.createPromiseCapability)();
                    return p.streamControllers[b].pullCall = L, T.postMessage({
                      sourceName: m,
                      targetName: y,
                      stream: x.PULL,
                      streamId: b,
                      desiredSize: H.desiredSize
                    }), L.promise;
                  },
                  cancel: function(H) {
                    (0, n.assert)(H instanceof Error, "cancel must have a valid reason");
                    var L = (0, n.createPromiseCapability)();
                    return p.streamControllers[b].cancelCall = L, p.streamControllers[b].isClosed = !0, T.postMessage({
                      sourceName: m,
                      targetName: y,
                      stream: x.CANCEL,
                      streamId: b,
                      reason: w(H)
                    }), L.promise;
                  }
                }, v);
              }
            }, {
              key: "_createStreamSink",
              value: function(R) {
                var U = R.streamId, v = this.sourceName, c = R.sourceName, p = this.comObj, b = this, m = this.actionHandler[R.action], y = {
                  enqueue: function(M) {
                    var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, L = arguments.length > 2 ? arguments[2] : void 0;
                    if (!this.isCancelled) {
                      var Y = this.desiredSize;
                      this.desiredSize -= H, Y > 0 && this.desiredSize <= 0 && (this.sinkCapability = (0, n.createPromiseCapability)(), this.ready = this.sinkCapability.promise), p.postMessage({
                        sourceName: v,
                        targetName: c,
                        stream: x.ENQUEUE,
                        streamId: U,
                        chunk: M
                      }, L);
                    }
                  },
                  close: function() {
                    this.isCancelled || (this.isCancelled = !0, p.postMessage({
                      sourceName: v,
                      targetName: c,
                      stream: x.CLOSE,
                      streamId: U
                    }), delete b.streamSinks[U]);
                  },
                  error: function(M) {
                    (0, n.assert)(M instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, p.postMessage({
                      sourceName: v,
                      targetName: c,
                      stream: x.ERROR,
                      streamId: U,
                      reason: w(M)
                    }));
                  },
                  sinkCapability: (0, n.createPromiseCapability)(),
                  onPull: null,
                  onCancel: null,
                  isCancelled: !1,
                  desiredSize: R.desiredSize,
                  ready: null
                };
                y.sinkCapability.resolve(), y.ready = y.sinkCapability.promise, this.streamSinks[U] = y, new Promise(function(T) {
                  T(m(R.data, y));
                }).then(function() {
                  p.postMessage({
                    sourceName: v,
                    targetName: c,
                    stream: x.START_COMPLETE,
                    streamId: U,
                    success: !0
                  });
                }, function(T) {
                  p.postMessage({
                    sourceName: v,
                    targetName: c,
                    stream: x.START_COMPLETE,
                    streamId: U,
                    reason: w(T)
                  });
                });
              }
            }, {
              key: "_processStreamMessage",
              value: function(R) {
                var U = R.streamId, v = this.sourceName, c = R.sourceName, p = this.comObj, b = this.streamControllers[U], m = this.streamSinks[U];
                switch (R.stream) {
                  case x.START_COMPLETE:
                    R.success ? b.startCall.resolve() : b.startCall.reject(w(R.reason));
                    break;
                  case x.PULL_COMPLETE:
                    R.success ? b.pullCall.resolve() : b.pullCall.reject(w(R.reason));
                    break;
                  case x.PULL:
                    if (!m) {
                      p.postMessage({
                        sourceName: v,
                        targetName: c,
                        stream: x.PULL_COMPLETE,
                        streamId: U,
                        success: !0
                      });
                      break;
                    }
                    m.desiredSize <= 0 && R.desiredSize > 0 && m.sinkCapability.resolve(), m.desiredSize = R.desiredSize, new Promise(function(y) {
                      y(m.onPull && m.onPull());
                    }).then(function() {
                      p.postMessage({
                        sourceName: v,
                        targetName: c,
                        stream: x.PULL_COMPLETE,
                        streamId: U,
                        success: !0
                      });
                    }, function(y) {
                      p.postMessage({
                        sourceName: v,
                        targetName: c,
                        stream: x.PULL_COMPLETE,
                        streamId: U,
                        reason: w(y)
                      });
                    });
                    break;
                  case x.ENQUEUE:
                    if ((0, n.assert)(b, "enqueue should have stream controller"), b.isClosed)
                      break;
                    b.controller.enqueue(R.chunk);
                    break;
                  case x.CLOSE:
                    if ((0, n.assert)(b, "close should have stream controller"), b.isClosed)
                      break;
                    b.isClosed = !0, b.controller.close(), this._deleteStreamController(b, U);
                    break;
                  case x.ERROR:
                    (0, n.assert)(b, "error should have stream controller"), b.controller.error(w(R.reason)), this._deleteStreamController(b, U);
                    break;
                  case x.CANCEL_COMPLETE:
                    R.success ? b.cancelCall.resolve() : b.cancelCall.reject(w(R.reason)), this._deleteStreamController(b, U);
                    break;
                  case x.CANCEL:
                    if (!m)
                      break;
                    new Promise(function(y) {
                      y(m.onCancel && m.onCancel(w(R.reason)));
                    }).then(function() {
                      p.postMessage({
                        sourceName: v,
                        targetName: c,
                        stream: x.CANCEL_COMPLETE,
                        streamId: U,
                        success: !0
                      });
                    }, function(y) {
                      p.postMessage({
                        sourceName: v,
                        targetName: c,
                        stream: x.CANCEL_COMPLETE,
                        streamId: U,
                        reason: w(y)
                      });
                    }), m.sinkCapability.reject(w(R.reason)), m.isCancelled = !0, delete this.streamSinks[U];
                    break;
                  default:
                    throw new Error("Unexpected stream case");
                }
              }
            }, {
              key: "_deleteStreamController",
              value: function() {
                var W = u(/* @__PURE__ */ e.default.mark(function U(v, c) {
                  return e.default.wrap(function(b) {
                    for (; ; )
                      switch (b.prev = b.next) {
                        case 0:
                          return b.next = 2, Promise.allSettled([v.startCall && v.startCall.promise, v.pullCall && v.pullCall.promise, v.cancelCall && v.cancelCall.promise]);
                        case 2:
                          delete this.streamControllers[c];
                        case 3:
                        case "end":
                          return b.stop();
                      }
                  }, U, this);
                }));
                function R(U, v) {
                  return W.apply(this, arguments);
                }
                return R;
              }()
            }, {
              key: "destroy",
              value: function() {
                this.comObj.removeEventListener("message", this._onComObjOnMessage);
              }
            }]), k;
          }();
          a.MessageHandler = O;
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.Metadata = void 0;
          var e = t(4);
          function n(W, R) {
            if (!(W instanceof R))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(W, R) {
            for (var U = 0; U < R.length; U++) {
              var v = R[U];
              v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(W, v.key, v);
            }
          }
          function d(W, R, U) {
            return R && o(W.prototype, R), U && o(W, U), W;
          }
          function u(W, R, U) {
            g(W, R), R.set(W, U);
          }
          function g(W, R) {
            if (R.has(W))
              throw new TypeError("Cannot initialize the same private elements twice on an object");
          }
          function P(W, R) {
            var U = B(W, R, "get");
            return F(W, U);
          }
          function F(W, R) {
            return R.get ? R.get.call(W) : R.value;
          }
          function D(W, R, U) {
            var v = B(W, R, "set");
            return x(W, v, U), U;
          }
          function B(W, R, U) {
            if (!R.has(W))
              throw new TypeError("attempted to " + U + " private field on non-instance");
            return R.get(W);
          }
          function x(W, R, U) {
            if (R.set)
              R.set.call(W, U);
            else {
              if (!R.writable)
                throw new TypeError("attempted to set read only private field");
              R.value = U;
            }
          }
          var w = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ function() {
            function W(R) {
              var U = R.parsedData, v = R.rawData;
              n(this, W), u(this, w, {
                writable: !0,
                value: void 0
              }), u(this, O, {
                writable: !0,
                value: void 0
              }), D(this, w, U), D(this, O, v);
            }
            return d(W, [{
              key: "getRaw",
              value: function() {
                return P(this, O);
              }
            }, {
              key: "get",
              value: function(U) {
                var v;
                return (v = P(this, w).get(U)) !== null && v !== void 0 ? v : null;
              }
            }, {
              key: "getAll",
              value: function() {
                return (0, e.objectFromMap)(P(this, w));
              }
            }, {
              key: "has",
              value: function(U) {
                return P(this, w).has(U);
              }
            }]), W;
          }();
          a.Metadata = k;
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.OptionalContentConfig = void 0;
          var e = t(4);
          function n(B, x) {
            var w = typeof Symbol < "u" && B[Symbol.iterator] || B["@@iterator"];
            if (!w) {
              if (Array.isArray(B) || (w = o(B)) || x && B && typeof B.length == "number") {
                w && (B = w);
                var O = 0, k = function() {
                };
                return { s: k, n: function() {
                  return O >= B.length ? { done: !0 } : { done: !1, value: B[O++] };
                }, e: function(c) {
                  throw c;
                }, f: k };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var W = !0, R = !1, U;
            return { s: function() {
              w = w.call(B);
            }, n: function() {
              var c = w.next();
              return W = c.done, c;
            }, e: function(c) {
              R = !0, U = c;
            }, f: function() {
              try {
                !W && w.return != null && w.return();
              } finally {
                if (R)
                  throw U;
              }
            } };
          }
          function o(B, x) {
            if (!!B) {
              if (typeof B == "string")
                return d(B, x);
              var w = Object.prototype.toString.call(B).slice(8, -1);
              if (w === "Object" && B.constructor && (w = B.constructor.name), w === "Map" || w === "Set")
                return Array.from(B);
              if (w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))
                return d(B, x);
            }
          }
          function d(B, x) {
            (x == null || x > B.length) && (x = B.length);
            for (var w = 0, O = new Array(x); w < x; w++)
              O[w] = B[w];
            return O;
          }
          function u(B, x) {
            for (var w = 0; w < x.length; w++) {
              var O = x[w];
              O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(B, O.key, O);
            }
          }
          function g(B, x, w) {
            return x && u(B.prototype, x), w && u(B, w), B;
          }
          function P(B, x) {
            if (!(B instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          var F = function B(x, w) {
            P(this, B), this.visible = !0, this.name = x, this.intent = w;
          }, D = /* @__PURE__ */ function() {
            function B(x) {
              if (P(this, B), this.name = null, this.creator = null, this._order = null, this._groups = /* @__PURE__ */ new Map(), x !== null) {
                this.name = x.name, this.creator = x.creator, this._order = x.order;
                var w = n(x.groups), O;
                try {
                  for (w.s(); !(O = w.n()).done; ) {
                    var k = O.value;
                    this._groups.set(k.id, new F(k.name, k.intent));
                  }
                } catch (T) {
                  w.e(T);
                } finally {
                  w.f();
                }
                if (x.baseState === "OFF") {
                  var W = n(this._groups), R;
                  try {
                    for (W.s(); !(R = W.n()).done; ) {
                      var U = R.value;
                      U.visible = !1;
                    }
                  } catch (T) {
                    W.e(T);
                  } finally {
                    W.f();
                  }
                }
                var v = n(x.on), c;
                try {
                  for (v.s(); !(c = v.n()).done; ) {
                    var p = c.value;
                    this._groups.get(p).visible = !0;
                  }
                } catch (T) {
                  v.e(T);
                } finally {
                  v.f();
                }
                var b = n(x.off), m;
                try {
                  for (b.s(); !(m = b.n()).done; ) {
                    var y = m.value;
                    this._groups.get(y).visible = !1;
                  }
                } catch (T) {
                  b.e(T);
                } finally {
                  b.f();
                }
              }
            }
            return g(B, [{
              key: "_evaluateVisibilityExpression",
              value: function(w) {
                var O = w.length;
                if (O < 2)
                  return !0;
                for (var k = w[0], W = 1; W < O; W++) {
                  var R = w[W], U = void 0;
                  if (Array.isArray(R))
                    U = this._evaluateVisibilityExpression(R);
                  else if (this._groups.has(R))
                    U = this._groups.get(R).visible;
                  else
                    return (0, e.warn)("Optional content group not found: ".concat(R)), !0;
                  switch (k) {
                    case "And":
                      if (!U)
                        return !1;
                      break;
                    case "Or":
                      if (U)
                        return !0;
                      break;
                    case "Not":
                      return !U;
                    default:
                      return !0;
                  }
                }
                return k === "And";
              }
            }, {
              key: "isVisible",
              value: function(w) {
                if (this._groups.size === 0)
                  return !0;
                if (!w)
                  return (0, e.warn)("Optional content group not defined."), !0;
                if (w.type === "OCG")
                  return this._groups.has(w.id) ? this._groups.get(w.id).visible : ((0, e.warn)("Optional content group not found: ".concat(w.id)), !0);
                if (w.type === "OCMD") {
                  if (w.expression)
                    return this._evaluateVisibilityExpression(w.expression);
                  if (!w.policy || w.policy === "AnyOn") {
                    var O = n(w.ids), k;
                    try {
                      for (O.s(); !(k = O.n()).done; ) {
                        var W = k.value;
                        if (!this._groups.has(W))
                          return (0, e.warn)("Optional content group not found: ".concat(W)), !0;
                        if (this._groups.get(W).visible)
                          return !0;
                      }
                    } catch (M) {
                      O.e(M);
                    } finally {
                      O.f();
                    }
                    return !1;
                  } else if (w.policy === "AllOn") {
                    var R = n(w.ids), U;
                    try {
                      for (R.s(); !(U = R.n()).done; ) {
                        var v = U.value;
                        if (!this._groups.has(v))
                          return (0, e.warn)("Optional content group not found: ".concat(v)), !0;
                        if (!this._groups.get(v).visible)
                          return !1;
                      }
                    } catch (M) {
                      R.e(M);
                    } finally {
                      R.f();
                    }
                    return !0;
                  } else if (w.policy === "AnyOff") {
                    var c = n(w.ids), p;
                    try {
                      for (c.s(); !(p = c.n()).done; ) {
                        var b = p.value;
                        if (!this._groups.has(b))
                          return (0, e.warn)("Optional content group not found: ".concat(b)), !0;
                        if (!this._groups.get(b).visible)
                          return !0;
                      }
                    } catch (M) {
                      c.e(M);
                    } finally {
                      c.f();
                    }
                    return !1;
                  } else if (w.policy === "AllOff") {
                    var m = n(w.ids), y;
                    try {
                      for (m.s(); !(y = m.n()).done; ) {
                        var T = y.value;
                        if (!this._groups.has(T))
                          return (0, e.warn)("Optional content group not found: ".concat(T)), !0;
                        if (this._groups.get(T).visible)
                          return !1;
                      }
                    } catch (M) {
                      m.e(M);
                    } finally {
                      m.f();
                    }
                    return !0;
                  }
                  return (0, e.warn)("Unknown optional content policy ".concat(w.policy, ".")), !0;
                }
                return (0, e.warn)("Unknown group type ".concat(w.type, ".")), !0;
              }
            }, {
              key: "setVisibility",
              value: function(w) {
                var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                if (!this._groups.has(w)) {
                  (0, e.warn)("Optional content group not found: ".concat(w));
                  return;
                }
                this._groups.get(w).visible = !!O;
              }
            }, {
              key: "getOrder",
              value: function() {
                return this._groups.size ? this._order ? this._order.slice() : Array.from(this._groups.keys()) : null;
              }
            }, {
              key: "getGroups",
              value: function() {
                return this._groups.size > 0 ? (0, e.objectFromMap)(this._groups) : null;
              }
            }, {
              key: "getGroup",
              value: function(w) {
                return this._groups.get(w) || null;
              }
            }]), B;
          }();
          a.OptionalContentConfig = D;
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.PDFDataTransportStream = void 0;
          var e = d(t(2)), n = t(4), o = t(1);
          function d(R) {
            return R && R.__esModule ? R : { default: R };
          }
          function u(R, U, v, c, p, b, m) {
            try {
              var y = R[b](m), T = y.value;
            } catch (M) {
              v(M);
              return;
            }
            y.done ? U(T) : Promise.resolve(T).then(c, p);
          }
          function g(R) {
            return function() {
              var U = this, v = arguments;
              return new Promise(function(c, p) {
                var b = R.apply(U, v);
                function m(T) {
                  u(b, c, p, m, y, "next", T);
                }
                function y(T) {
                  u(b, c, p, m, y, "throw", T);
                }
                m(void 0);
              });
            };
          }
          function P(R, U) {
            var v = typeof Symbol < "u" && R[Symbol.iterator] || R["@@iterator"];
            if (!v) {
              if (Array.isArray(R) || (v = F(R)) || U && R && typeof R.length == "number") {
                v && (R = v);
                var c = 0, p = function() {
                };
                return { s: p, n: function() {
                  return c >= R.length ? { done: !0 } : { done: !1, value: R[c++] };
                }, e: function(M) {
                  throw M;
                }, f: p };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var b = !0, m = !1, y;
            return { s: function() {
              v = v.call(R);
            }, n: function() {
              var M = v.next();
              return b = M.done, M;
            }, e: function(M) {
              m = !0, y = M;
            }, f: function() {
              try {
                !b && v.return != null && v.return();
              } finally {
                if (m)
                  throw y;
              }
            } };
          }
          function F(R, U) {
            if (!!R) {
              if (typeof R == "string")
                return D(R, U);
              var v = Object.prototype.toString.call(R).slice(8, -1);
              if (v === "Object" && R.constructor && (v = R.constructor.name), v === "Map" || v === "Set")
                return Array.from(R);
              if (v === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))
                return D(R, U);
            }
          }
          function D(R, U) {
            (U == null || U > R.length) && (U = R.length);
            for (var v = 0, c = new Array(U); v < U; v++)
              c[v] = R[v];
            return c;
          }
          function B(R, U) {
            if (!(R instanceof U))
              throw new TypeError("Cannot call a class as a function");
          }
          function x(R, U) {
            for (var v = 0; v < U.length; v++) {
              var c = U[v];
              c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(R, c.key, c);
            }
          }
          function w(R, U, v) {
            return U && x(R.prototype, U), v && x(R, v), R;
          }
          var O = /* @__PURE__ */ function() {
            function R(U, v) {
              var c = this;
              B(this, R), (0, n.assert)(v, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = U.progressiveDone || !1, this._contentDispositionFilename = U.contentDispositionFilename || null;
              var p = U.initialData;
              if ((p == null ? void 0 : p.length) > 0) {
                var b = new Uint8Array(p).buffer;
                this._queuedChunks.push(b);
              }
              this._pdfDataRangeTransport = v, this._isStreamingSupported = !U.disableStream, this._isRangeSupported = !U.disableRange, this._contentLength = U.length, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener(function(m, y) {
                c._onReceiveData({
                  begin: m,
                  chunk: y
                });
              }), this._pdfDataRangeTransport.addProgressListener(function(m, y) {
                c._onProgress({
                  loaded: m,
                  total: y
                });
              }), this._pdfDataRangeTransport.addProgressiveReadListener(function(m) {
                c._onReceiveData({
                  chunk: m
                });
              }), this._pdfDataRangeTransport.addProgressiveDoneListener(function() {
                c._onProgressiveDone();
              }), this._pdfDataRangeTransport.transportReady();
            }
            return w(R, [{
              key: "_onReceiveData",
              value: function(v) {
                var c = new Uint8Array(v.chunk).buffer;
                if (v.begin === void 0)
                  this._fullRequestReader ? this._fullRequestReader._enqueue(c) : this._queuedChunks.push(c);
                else {
                  var p = this._rangeReaders.some(function(b) {
                    return b._begin !== v.begin ? !1 : (b._enqueue(c), !0);
                  });
                  (0, n.assert)(p, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
                }
              }
            }, {
              key: "_progressiveDataLength",
              get: function() {
                var v, c;
                return (v = (c = this._fullRequestReader) === null || c === void 0 ? void 0 : c._loaded) !== null && v !== void 0 ? v : 0;
              }
            }, {
              key: "_onProgress",
              value: function(v) {
                if (v.total === void 0) {
                  var c = this._rangeReaders[0];
                  c != null && c.onProgress && c.onProgress({
                    loaded: v.loaded
                  });
                } else {
                  var p = this._fullRequestReader;
                  p != null && p.onProgress && p.onProgress({
                    loaded: v.loaded,
                    total: v.total
                  });
                }
              }
            }, {
              key: "_onProgressiveDone",
              value: function() {
                this._fullRequestReader && this._fullRequestReader.progressiveDone(), this._progressiveDone = !0;
              }
            }, {
              key: "_removeRangeReader",
              value: function(v) {
                var c = this._rangeReaders.indexOf(v);
                c >= 0 && this._rangeReaders.splice(c, 1);
              }
            }, {
              key: "getFullReader",
              value: function() {
                (0, n.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                var v = this._queuedChunks;
                return this._queuedChunks = null, new k(this, v, this._progressiveDone, this._contentDispositionFilename);
              }
            }, {
              key: "getRangeReader",
              value: function(v, c) {
                if (c <= this._progressiveDataLength)
                  return null;
                var p = new W(this, v, c);
                return this._pdfDataRangeTransport.requestDataRange(v, c), this._rangeReaders.push(p), p;
              }
            }, {
              key: "cancelAllRequests",
              value: function(v) {
                this._fullRequestReader && this._fullRequestReader.cancel(v);
                var c = P(this._rangeReaders.slice(0)), p;
                try {
                  for (c.s(); !(p = c.n()).done; ) {
                    var b = p.value;
                    b.cancel(v);
                  }
                } catch (m) {
                  c.e(m);
                } finally {
                  c.f();
                }
                this._pdfDataRangeTransport.abort();
              }
            }]), R;
          }();
          a.PDFDataTransportStream = O;
          var k = /* @__PURE__ */ function() {
            function R(U, v) {
              var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
              B(this, R), this._stream = U, this._done = c || !1, this._filename = (0, o.isPdfFile)(p) ? p : null, this._queuedChunks = v || [], this._loaded = 0;
              var b = P(this._queuedChunks), m;
              try {
                for (b.s(); !(m = b.n()).done; ) {
                  var y = m.value;
                  this._loaded += y.byteLength;
                }
              } catch (T) {
                b.e(T);
              } finally {
                b.f();
              }
              this._requests = [], this._headersReady = Promise.resolve(), U._fullRequestReader = this, this.onProgress = null;
            }
            return w(R, [{
              key: "_enqueue",
              value: function(v) {
                if (!this._done) {
                  if (this._requests.length > 0) {
                    var c = this._requests.shift();
                    c.resolve({
                      value: v,
                      done: !1
                    });
                  } else
                    this._queuedChunks.push(v);
                  this._loaded += v.byteLength;
                }
              }
            }, {
              key: "headersReady",
              get: function() {
                return this._headersReady;
              }
            }, {
              key: "filename",
              get: function() {
                return this._filename;
              }
            }, {
              key: "isRangeSupported",
              get: function() {
                return this._stream._isRangeSupported;
              }
            }, {
              key: "isStreamingSupported",
              get: function() {
                return this._stream._isStreamingSupported;
              }
            }, {
              key: "contentLength",
              get: function() {
                return this._stream._contentLength;
              }
            }, {
              key: "read",
              value: function() {
                var U = g(/* @__PURE__ */ e.default.mark(function c() {
                  var p, b;
                  return e.default.wrap(function(y) {
                    for (; ; )
                      switch (y.prev = y.next) {
                        case 0:
                          if (!(this._queuedChunks.length > 0)) {
                            y.next = 3;
                            break;
                          }
                          return p = this._queuedChunks.shift(), y.abrupt("return", {
                            value: p,
                            done: !1
                          });
                        case 3:
                          if (!this._done) {
                            y.next = 5;
                            break;
                          }
                          return y.abrupt("return", {
                            value: void 0,
                            done: !0
                          });
                        case 5:
                          return b = (0, n.createPromiseCapability)(), this._requests.push(b), y.abrupt("return", b.promise);
                        case 8:
                        case "end":
                          return y.stop();
                      }
                  }, c, this);
                }));
                function v() {
                  return U.apply(this, arguments);
                }
                return v;
              }()
            }, {
              key: "cancel",
              value: function(v) {
                this._done = !0;
                var c = P(this._requests), p;
                try {
                  for (c.s(); !(p = c.n()).done; ) {
                    var b = p.value;
                    b.resolve({
                      value: void 0,
                      done: !0
                    });
                  }
                } catch (m) {
                  c.e(m);
                } finally {
                  c.f();
                }
                this._requests.length = 0;
              }
            }, {
              key: "progressiveDone",
              value: function() {
                this._done || (this._done = !0);
              }
            }]), R;
          }(), W = /* @__PURE__ */ function() {
            function R(U, v, c) {
              B(this, R), this._stream = U, this._begin = v, this._end = c, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
            }
            return w(R, [{
              key: "_enqueue",
              value: function(v) {
                if (!this._done) {
                  if (this._requests.length === 0)
                    this._queuedChunk = v;
                  else {
                    var c = this._requests.shift();
                    c.resolve({
                      value: v,
                      done: !1
                    });
                    var p = P(this._requests), b;
                    try {
                      for (p.s(); !(b = p.n()).done; ) {
                        var m = b.value;
                        m.resolve({
                          value: void 0,
                          done: !0
                        });
                      }
                    } catch (y) {
                      p.e(y);
                    } finally {
                      p.f();
                    }
                    this._requests.length = 0;
                  }
                  this._done = !0, this._stream._removeRangeReader(this);
                }
              }
            }, {
              key: "isStreamingSupported",
              get: function() {
                return !1;
              }
            }, {
              key: "read",
              value: function() {
                var U = g(/* @__PURE__ */ e.default.mark(function c() {
                  var p, b;
                  return e.default.wrap(function(y) {
                    for (; ; )
                      switch (y.prev = y.next) {
                        case 0:
                          if (!this._queuedChunk) {
                            y.next = 4;
                            break;
                          }
                          return p = this._queuedChunk, this._queuedChunk = null, y.abrupt("return", {
                            value: p,
                            done: !1
                          });
                        case 4:
                          if (!this._done) {
                            y.next = 6;
                            break;
                          }
                          return y.abrupt("return", {
                            value: void 0,
                            done: !0
                          });
                        case 6:
                          return b = (0, n.createPromiseCapability)(), this._requests.push(b), y.abrupt("return", b.promise);
                        case 9:
                        case "end":
                          return y.stop();
                      }
                  }, c, this);
                }));
                function v() {
                  return U.apply(this, arguments);
                }
                return v;
              }()
            }, {
              key: "cancel",
              value: function(v) {
                this._done = !0;
                var c = P(this._requests), p;
                try {
                  for (c.s(); !(p = c.n()).done; ) {
                    var b = p.value;
                    b.resolve({
                      value: void 0,
                      done: !0
                    });
                  }
                } catch (m) {
                  c.e(m);
                } finally {
                  c.f();
                }
                this._requests.length = 0, this._stream._removeRangeReader(this);
              }
            }]), R;
          }();
        },
        (i, a) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.XfaText = void 0;
          function t(P, F) {
            var D = typeof Symbol < "u" && P[Symbol.iterator] || P["@@iterator"];
            if (!D) {
              if (Array.isArray(P) || (D = e(P)) || F && P && typeof P.length == "number") {
                D && (P = D);
                var B = 0, x = function() {
                };
                return { s: x, n: function() {
                  return B >= P.length ? { done: !0 } : { done: !1, value: P[B++] };
                }, e: function(R) {
                  throw R;
                }, f: x };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var w = !0, O = !1, k;
            return { s: function() {
              D = D.call(P);
            }, n: function() {
              var R = D.next();
              return w = R.done, R;
            }, e: function(R) {
              O = !0, k = R;
            }, f: function() {
              try {
                !w && D.return != null && D.return();
              } finally {
                if (O)
                  throw k;
              }
            } };
          }
          function e(P, F) {
            if (!!P) {
              if (typeof P == "string")
                return n(P, F);
              var D = Object.prototype.toString.call(P).slice(8, -1);
              if (D === "Object" && P.constructor && (D = P.constructor.name), D === "Map" || D === "Set")
                return Array.from(P);
              if (D === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))
                return n(P, F);
            }
          }
          function n(P, F) {
            (F == null || F > P.length) && (F = P.length);
            for (var D = 0, B = new Array(F); D < F; D++)
              B[D] = P[D];
            return B;
          }
          function o(P, F) {
            if (!(P instanceof F))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(P, F) {
            for (var D = 0; D < F.length; D++) {
              var B = F[D];
              B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(P, B.key, B);
            }
          }
          function u(P, F, D) {
            return F && d(P.prototype, F), D && d(P, D), P;
          }
          var g = /* @__PURE__ */ function() {
            function P() {
              o(this, P);
            }
            return u(P, null, [{
              key: "textContent",
              value: function(D) {
                var B = [], x = {
                  items: B,
                  styles: /* @__PURE__ */ Object.create(null)
                };
                function w(O) {
                  var k;
                  if (!!O) {
                    var W = null, R = O.name;
                    if (R === "#text")
                      W = O.value;
                    else if (P.shouldBuildText(R))
                      O != null && (k = O.attributes) !== null && k !== void 0 && k.textContent ? W = O.attributes.textContent : O.value && (W = O.value);
                    else
                      return;
                    if (W !== null && B.push({
                      str: W
                    }), !!O.children) {
                      var U = t(O.children), v;
                      try {
                        for (U.s(); !(v = U.n()).done; ) {
                          var c = v.value;
                          w(c);
                        }
                      } catch (p) {
                        U.e(p);
                      } finally {
                        U.f();
                      }
                    }
                  }
                }
                return w(D), x;
              }
            }, {
              key: "shouldBuildText",
              value: function(D) {
                return !(D === "textarea" || D === "input" || D === "option" || D === "select");
              }
            }]), P;
          }();
          a.XfaText = g;
        },
        (i, a, t) => {
          function e(de) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(V) {
              return typeof V;
            } : e = function(V) {
              return V && typeof Symbol == "function" && V.constructor === Symbol && V !== Symbol.prototype ? "symbol" : typeof V;
            }, e(de);
          }
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.AnnotationLayer = void 0;
          var n = t(4), o = t(1), d = t(139), u = t(149), g = t(150);
          function P(de, pe, V) {
            return F(de, pe), V;
          }
          function F(de, pe) {
            if (de !== pe)
              throw new TypeError("Private static access of wrong provenance");
          }
          function D(de, pe, V) {
            return typeof Reflect < "u" && Reflect.get ? D = Reflect.get : D = function(J, ue, ne) {
              var Q = B(J, ue);
              if (!!Q) {
                var ve = Object.getOwnPropertyDescriptor(Q, ue);
                return ve.get ? ve.get.call(ne) : ve.value;
              }
            }, D(de, pe, V || de);
          }
          function B(de, pe) {
            for (; !Object.prototype.hasOwnProperty.call(de, pe) && (de = m(de), de !== null); )
              ;
            return de;
          }
          function x(de, pe, V) {
            return pe in de ? Object.defineProperty(de, pe, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : de[pe] = V, de;
          }
          function w(de) {
            return W(de) || k(de) || H(de) || O();
          }
          function O() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function k(de) {
            if (typeof Symbol < "u" && de[Symbol.iterator] != null || de["@@iterator"] != null)
              return Array.from(de);
          }
          function W(de) {
            if (Array.isArray(de))
              return L(de);
          }
          function R(de, pe) {
            if (typeof pe != "function" && pe !== null)
              throw new TypeError("Super expression must either be null or a function");
            de.prototype = Object.create(pe && pe.prototype, { constructor: { value: de, writable: !0, configurable: !0 } }), pe && U(de, pe);
          }
          function U(de, pe) {
            return U = Object.setPrototypeOf || function(re, J) {
              return re.__proto__ = J, re;
            }, U(de, pe);
          }
          function v(de) {
            var pe = b();
            return function() {
              var re = m(de), J;
              if (pe) {
                var ue = m(this).constructor;
                J = Reflect.construct(re, arguments, ue);
              } else
                J = re.apply(this, arguments);
              return c(this, J);
            };
          }
          function c(de, pe) {
            if (pe && (e(pe) === "object" || typeof pe == "function"))
              return pe;
            if (pe !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return p(de);
          }
          function p(de) {
            if (de === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return de;
          }
          function b() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }
          function m(de) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(V) {
              return V.__proto__ || Object.getPrototypeOf(V);
            }, m(de);
          }
          function y(de, pe) {
            var V = typeof Symbol < "u" && de[Symbol.iterator] || de["@@iterator"];
            if (!V) {
              if (Array.isArray(de) || (V = H(de)) || pe && de && typeof de.length == "number") {
                V && (de = V);
                var re = 0, J = function() {
                };
                return { s: J, n: function() {
                  return re >= de.length ? { done: !0 } : { done: !1, value: de[re++] };
                }, e: function(fe) {
                  throw fe;
                }, f: J };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var ue = !0, ne = !1, Q;
            return { s: function() {
              V = V.call(de);
            }, n: function() {
              var fe = V.next();
              return ue = fe.done, fe;
            }, e: function(fe) {
              ne = !0, Q = fe;
            }, f: function() {
              try {
                !ue && V.return != null && V.return();
              } finally {
                if (ne)
                  throw Q;
              }
            } };
          }
          function T(de, pe) {
            return te(de) || Y(de, pe) || H(de, pe) || M();
          }
          function M() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function H(de, pe) {
            if (!!de) {
              if (typeof de == "string")
                return L(de, pe);
              var V = Object.prototype.toString.call(de).slice(8, -1);
              if (V === "Object" && de.constructor && (V = de.constructor.name), V === "Map" || V === "Set")
                return Array.from(de);
              if (V === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))
                return L(de, pe);
            }
          }
          function L(de, pe) {
            (pe == null || pe > de.length) && (pe = de.length);
            for (var V = 0, re = new Array(pe); V < pe; V++)
              re[V] = de[V];
            return re;
          }
          function Y(de, pe) {
            var V = de == null ? null : typeof Symbol < "u" && de[Symbol.iterator] || de["@@iterator"];
            if (V != null) {
              var re = [], J = !0, ue = !1, ne, Q;
              try {
                for (V = V.call(de); !(J = (ne = V.next()).done) && (re.push(ne.value), !(pe && re.length === pe)); J = !0)
                  ;
              } catch (ve) {
                ue = !0, Q = ve;
              } finally {
                try {
                  !J && V.return != null && V.return();
                } finally {
                  if (ue)
                    throw Q;
                }
              }
              return re;
            }
          }
          function te(de) {
            if (Array.isArray(de))
              return de;
          }
          function K(de, pe) {
            if (!(de instanceof pe))
              throw new TypeError("Cannot call a class as a function");
          }
          function oe(de, pe) {
            for (var V = 0; V < pe.length; V++) {
              var re = pe[V];
              re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(de, re.key, re);
            }
          }
          function q(de, pe, V) {
            return pe && oe(de.prototype, pe), V && oe(de, V), de;
          }
          var X = 1e3, S = /* @__PURE__ */ new WeakSet(), h = /* @__PURE__ */ function() {
            function de() {
              K(this, de);
            }
            return q(de, null, [{
              key: "create",
              value: function(V) {
                var re = V.data.annotationType;
                switch (re) {
                  case n.AnnotationType.LINK:
                    return new C(V);
                  case n.AnnotationType.TEXT:
                    return new $(V);
                  case n.AnnotationType.WIDGET:
                    var J = V.data.fieldType;
                    switch (J) {
                      case "Tx":
                        return new z(V);
                      case "Btn":
                        return V.data.radioButton ? new _e(V) : V.data.checkBox ? new he(V) : new Te(V);
                      case "Ch":
                        return new j(V);
                    }
                    return new Z(V);
                  case n.AnnotationType.POPUP:
                    return new I(V);
                  case n.AnnotationType.FREETEXT:
                    return new l(V);
                  case n.AnnotationType.LINE:
                    return new _(V);
                  case n.AnnotationType.SQUARE:
                    return new N(V);
                  case n.AnnotationType.CIRCLE:
                    return new G(V);
                  case n.AnnotationType.POLYLINE:
                    return new ee(V);
                  case n.AnnotationType.CARET:
                    return new ye(V);
                  case n.AnnotationType.INK:
                    return new be(V);
                  case n.AnnotationType.POLYGON:
                    return new ce(V);
                  case n.AnnotationType.HIGHLIGHT:
                    return new me(V);
                  case n.AnnotationType.UNDERLINE:
                    return new Pe(V);
                  case n.AnnotationType.SQUIGGLY:
                    return new Ce(V);
                  case n.AnnotationType.STRIKEOUT:
                    return new xe(V);
                  case n.AnnotationType.STAMP:
                    return new Fe(V);
                  case n.AnnotationType.FILEATTACHMENT:
                    return new Me(V);
                  default:
                    return new A(V);
                }
              }
            }]), de;
          }(), A = /* @__PURE__ */ function() {
            function de(pe) {
              var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, re = V.isRenderable, J = re === void 0 ? !1 : re, ue = V.ignoreBorder, ne = ue === void 0 ? !1 : ue, Q = V.createQuadrilaterals, ve = Q === void 0 ? !1 : Q;
              K(this, de), this.isRenderable = J, this.data = pe.data, this.layer = pe.layer, this.page = pe.page, this.viewport = pe.viewport, this.linkService = pe.linkService, this.downloadManager = pe.downloadManager, this.imageResourcesPath = pe.imageResourcesPath, this.renderForms = pe.renderForms, this.svgFactory = pe.svgFactory, this.annotationStorage = pe.annotationStorage, this.enableScripting = pe.enableScripting, this.hasJSActions = pe.hasJSActions, this._fieldObjects = pe.fieldObjects, this._mouseState = pe.mouseState, J && (this.container = this._createContainer(ne)), ve && (this.quadrilaterals = this._createQuadrilaterals(ne));
            }
            return q(de, [{
              key: "_createContainer",
              value: function() {
                var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, re = this.data, J = this.page, ue = this.viewport, ne = document.createElement("section"), Q = re.rect[2] - re.rect[0], ve = re.rect[3] - re.rect[1];
                ne.setAttribute("data-annotation-id", re.id);
                var fe = n.Util.normalizeRect([re.rect[0], J.view[3] - re.rect[1] + J.view[1], re.rect[2], J.view[3] - re.rect[3] + J.view[1]]);
                if (re.hasOwnCanvas) {
                  var Ae = ue.transform.slice(), Ee = n.Util.singularValueDecompose2dScale(Ae), De = T(Ee, 2), Ne = De[0], ke = De[1];
                  Q = Math.ceil(Q * Ne), ve = Math.ceil(ve * ke), fe[0] *= Ne, fe[1] *= ke;
                  for (var He = 0; He < 4; He++)
                    Ae[He] = Math.sign(Ae[He]);
                  ne.style.transform = "matrix(".concat(Ae.join(","), ")");
                } else
                  ne.style.transform = "matrix(".concat(ue.transform.join(","), ")");
                if (ne.style.transformOrigin = "".concat(-fe[0], "px ").concat(-fe[1], "px"), !V && re.borderStyle.width > 0) {
                  ne.style.borderWidth = "".concat(re.borderStyle.width, "px"), re.borderStyle.style !== n.AnnotationBorderStyleType.UNDERLINE && (Q -= 2 * re.borderStyle.width, ve -= 2 * re.borderStyle.width);
                  var Oe = re.borderStyle.horizontalCornerRadius, Ie = re.borderStyle.verticalCornerRadius;
                  if (Oe > 0 || Ie > 0) {
                    var Ge = "".concat(Oe, "px / ").concat(Ie, "px");
                    ne.style.borderRadius = Ge;
                  }
                  switch (re.borderStyle.style) {
                    case n.AnnotationBorderStyleType.SOLID:
                      ne.style.borderStyle = "solid";
                      break;
                    case n.AnnotationBorderStyleType.DASHED:
                      ne.style.borderStyle = "dashed";
                      break;
                    case n.AnnotationBorderStyleType.BEVELED:
                      (0, n.warn)("Unimplemented border style: beveled");
                      break;
                    case n.AnnotationBorderStyleType.INSET:
                      (0, n.warn)("Unimplemented border style: inset");
                      break;
                    case n.AnnotationBorderStyleType.UNDERLINE:
                      ne.style.borderBottomStyle = "solid";
                      break;
                  }
                  var Be = re.borderColor || re.color || null;
                  Be ? ne.style.borderColor = n.Util.makeHexColor(re.color[0] | 0, re.color[1] | 0, re.color[2] | 0) : ne.style.borderWidth = 0;
                }
                return ne.style.left = "".concat(fe[0], "px"), ne.style.top = "".concat(fe[1], "px"), re.hasOwnCanvas ? ne.style.width = ne.style.height = "auto" : (ne.style.width = "".concat(Q, "px"), ne.style.height = "".concat(ve, "px")), ne;
              }
            }, {
              key: "_createQuadrilaterals",
              value: function() {
                var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                if (!this.data.quadPoints)
                  return null;
                var re = [], J = this.data.rect, ue = y(this.data.quadPoints), ne;
                try {
                  for (ue.s(); !(ne = ue.n()).done; ) {
                    var Q = ne.value;
                    this.data.rect = [Q[2].x, Q[2].y, Q[1].x, Q[1].y], re.push(this._createContainer(V));
                  }
                } catch (ve) {
                  ue.e(ve);
                } finally {
                  ue.f();
                }
                return this.data.rect = J, re;
              }
            }, {
              key: "_createPopup",
              value: function(V, re) {
                var J = this.container;
                this.quadrilaterals && (V = V || this.quadrilaterals, J = this.quadrilaterals[0]), V || (V = document.createElement("div"), V.style.height = J.style.height, V.style.width = J.style.width, J.appendChild(V));
                var ue = new f({
                  container: J,
                  trigger: V,
                  color: re.color,
                  titleObj: re.titleObj,
                  modificationDate: re.modificationDate,
                  contentsObj: re.contentsObj,
                  richText: re.richText,
                  hideWrapper: !0
                }), ne = ue.render();
                ne.style.left = J.style.width, J.appendChild(ne);
              }
            }, {
              key: "_renderQuadrilaterals",
              value: function(V) {
                var re = y(this.quadrilaterals), J;
                try {
                  for (re.s(); !(J = re.n()).done; ) {
                    var ue = J.value;
                    ue.className = V;
                  }
                } catch (ne) {
                  re.e(ne);
                } finally {
                  re.f();
                }
                return this.quadrilaterals;
              }
            }, {
              key: "render",
              value: function() {
                (0, n.unreachable)("Abstract method `AnnotationElement.render` called");
              }
            }, {
              key: "_getElementsByName",
              value: function(V) {
                var re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, J = [];
                if (this._fieldObjects) {
                  var ue = this._fieldObjects[V];
                  if (ue) {
                    var ne = y(ue), Q;
                    try {
                      for (ne.s(); !(Q = ne.n()).done; ) {
                        var ve = Q.value, fe = ve.page, Ae = ve.id, Ee = ve.exportValues;
                        if (fe !== -1 && Ae !== re) {
                          var De = typeof Ee == "string" ? Ee : null, Ne = document.getElementById(Ae);
                          if (Ne && !S.has(Ne)) {
                            (0, n.warn)("_getElementsByName - element not allowed: ".concat(Ae));
                            continue;
                          }
                          J.push({
                            id: Ae,
                            exportValue: De,
                            domElement: Ne
                          });
                        }
                      }
                    } catch (Be) {
                      ne.e(Be);
                    } finally {
                      ne.f();
                    }
                  }
                  return J;
                }
                var ke = y(document.getElementsByName(V)), He;
                try {
                  for (ke.s(); !(He = ke.n()).done; ) {
                    var Oe = He.value, Ie = Oe.id, Ge = Oe.exportValue;
                    Ie !== re && (!S.has(Oe) || J.push({
                      id: Ie,
                      exportValue: Ge,
                      domElement: Oe
                    }));
                  }
                } catch (Be) {
                  ke.e(Be);
                } finally {
                  ke.f();
                }
                return J;
              }
            }], [{
              key: "platform",
              get: function() {
                var V = typeof navigator < "u" ? navigator.platform : "";
                return (0, n.shadow)(this, "platform", {
                  isWin: V.includes("Win"),
                  isMac: V.includes("Mac")
                });
              }
            }]), de;
          }(), C = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              K(this, V);
              var ue = !!(re.data.url || re.data.dest || re.data.action || re.data.isTooltipOnly || re.data.resetForm || re.data.actions && (re.data.actions.Action || re.data.actions["Mouse Up"] || re.data.actions["Mouse Down"]));
              return pe.call(this, re, {
                isRenderable: ue,
                ignoreBorder: !!(J != null && J.ignoreBorder),
                createQuadrilaterals: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                var J = this.data, ue = this.linkService, ne = document.createElement("a");
                if (J.url) {
                  var Q;
                  ue.addLinkAttributes || (0, n.warn)("LinkAnnotationElement.render - missing `addLinkAttributes`-method on the `linkService`-instance."), (Q = ue.addLinkAttributes) === null || Q === void 0 || Q.call(ue, ne, J.url, J.newWindow);
                } else if (J.action)
                  this._bindNamedAction(ne, J.action);
                else if (J.dest)
                  this._bindLink(ne, J.dest);
                else {
                  var ve = !1;
                  J.actions && (J.actions.Action || J.actions["Mouse Up"] || J.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (ve = !0, this._bindJSAction(ne, J)), J.resetForm ? this._bindResetFormAction(ne, J.resetForm) : ve || this._bindLink(ne, "");
                }
                return this.quadrilaterals ? this._renderQuadrilaterals("linkAnnotation").map(function(fe, Ae) {
                  var Ee = Ae === 0 ? ne : ne.cloneNode();
                  return fe.appendChild(Ee), fe;
                }) : (this.container.className = "linkAnnotation", this.container.appendChild(ne), this.container);
              }
            }, {
              key: "_bindLink",
              value: function(J, ue) {
                var ne = this;
                J.href = this.linkService.getDestinationHash(ue), J.onclick = function() {
                  return ue && ne.linkService.goToDestination(ue), !1;
                }, (ue || ue === "") && (J.className = "internalLink");
              }
            }, {
              key: "_bindNamedAction",
              value: function(J, ue) {
                var ne = this;
                J.href = this.linkService.getAnchorUrl(""), J.onclick = function() {
                  return ne.linkService.executeNamedAction(ue), !1;
                }, J.className = "internalLink";
              }
            }, {
              key: "_bindJSAction",
              value: function(J, ue) {
                var ne = this;
                J.href = this.linkService.getAnchorUrl("");
                for (var Q = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]), ve = function() {
                  var Ne = Ae[fe], ke = Q.get(Ne);
                  if (!ke)
                    return "continue";
                  J[ke] = function() {
                    var He;
                    return (He = ne.linkService.eventBus) === null || He === void 0 || He.dispatch("dispatcheventinsandbox", {
                      source: ne,
                      detail: {
                        id: ue.id,
                        name: Ne
                      }
                    }), !1;
                  };
                }, fe = 0, Ae = Object.keys(ue.actions); fe < Ae.length; fe++)
                  var Ee = ve();
                J.onclick || (J.onclick = function() {
                  return !1;
                }), J.className = "internalLink";
              }
            }, {
              key: "_bindResetFormAction",
              value: function(J, ue) {
                var ne = this, Q = J.onclick;
                if (Q || (J.href = this.linkService.getAnchorUrl("")), J.className = "internalLink", !this._fieldObjects) {
                  (0, n.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), Q || (J.onclick = function() {
                    return !1;
                  });
                  return;
                }
                J.onclick = function() {
                  Q && Q();
                  var ve = ue.fields, fe = ue.refs, Ae = ue.include, Ee = [];
                  if (ve.length !== 0 || fe.length !== 0) {
                    var De = new Set(fe), Ne = y(ve), ke;
                    try {
                      for (Ne.s(); !(ke = Ne.n()).done; ) {
                        var He = ke.value, Oe = ne._fieldObjects[He] || [], Ie = y(Oe), Ge;
                        try {
                          for (Ie.s(); !(Ge = Ie.n()).done; ) {
                            var Be = Ge.value.id;
                            De.add(Be);
                          }
                        } catch ($e) {
                          Ie.e($e);
                        } finally {
                          Ie.f();
                        }
                      }
                    } catch ($e) {
                      Ne.e($e);
                    } finally {
                      Ne.f();
                    }
                    for (var Ye = 0, Ze = Object.values(ne._fieldObjects); Ye < Ze.length; Ye++) {
                      var rt = Ze[Ye], lt = y(rt), ct;
                      try {
                        for (lt.s(); !(ct = lt.n()).done; ) {
                          var _t = ct.value;
                          De.has(_t.id) === Ae && Ee.push(_t);
                        }
                      } catch ($e) {
                        lt.e($e);
                      } finally {
                        lt.f();
                      }
                    }
                  } else
                    for (var St = 0, Pt = Object.values(ne._fieldObjects); St < Pt.length; St++) {
                      var le = Pt[St];
                      Ee.push.apply(Ee, w(le));
                    }
                  for (var Le = ne.annotationStorage, ze = [], Xe = 0, nt = Ee; Xe < nt.length; Xe++) {
                    var at = nt[Xe], et = at.id;
                    switch (ze.push(et), at.type) {
                      case "text": {
                        var ae = at.defaultValue || "";
                        Le.setValue(et, {
                          value: ae,
                          valueAsString: ae
                        });
                        break;
                      }
                      case "checkbox":
                      case "radiobutton": {
                        var Re = at.defaultValue === at.exportValues;
                        Le.setValue(et, {
                          value: Re
                        });
                        break;
                      }
                      case "combobox":
                      case "listbox": {
                        var ie = at.defaultValue || "";
                        Le.setValue(et, {
                          value: ie
                        });
                        break;
                      }
                      default:
                        continue;
                    }
                    var ge = document.getElementById(et);
                    !ge || !S.has(ge) || ge.dispatchEvent(new Event("resetform"));
                  }
                  if (ne.enableScripting) {
                    var je;
                    (je = ne.linkService.eventBus) === null || je === void 0 || je.dispatch("dispatcheventinsandbox", {
                      source: ne,
                      detail: {
                        id: "app",
                        ids: ze,
                        name: "ResetForm"
                      }
                    });
                  }
                  return !1;
                };
              }
            }]), V;
          }(A), $ = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                this.container.className = "textAnnotation";
                var J = document.createElement("img");
                return J.style.height = this.container.style.height, J.style.width = this.container.style.width, J.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", J.alt = "[{{type}} Annotation]", J.dataset.l10nId = "text_annotation_type", J.dataset.l10nArgs = JSON.stringify({
                  type: this.data.name
                }), this.data.hasPopup || this._createPopup(J, this.data), this.container.appendChild(J), this.container;
              }
            }]), V;
          }(A), Z = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V() {
              return K(this, V), pe.apply(this, arguments);
            }
            return q(V, [{
              key: "render",
              value: function() {
                return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
              }
            }, {
              key: "_getKeyModifier",
              value: function(J) {
                var ue = A.platform, ne = ue.isWin, Q = ue.isMac;
                return ne && J.ctrlKey || Q && J.metaKey;
              }
            }, {
              key: "_setEventListener",
              value: function(J, ue, ne, Q) {
                var ve = this;
                ue.includes("mouse") ? J.addEventListener(ue, function(fe) {
                  var Ae;
                  (Ae = ve.linkService.eventBus) === null || Ae === void 0 || Ae.dispatch("dispatcheventinsandbox", {
                    source: ve,
                    detail: {
                      id: ve.data.id,
                      name: ne,
                      value: Q(fe),
                      shift: fe.shiftKey,
                      modifier: ve._getKeyModifier(fe)
                    }
                  });
                }) : J.addEventListener(ue, function(fe) {
                  var Ae;
                  (Ae = ve.linkService.eventBus) === null || Ae === void 0 || Ae.dispatch("dispatcheventinsandbox", {
                    source: ve,
                    detail: {
                      id: ve.data.id,
                      name: ne,
                      value: fe.target.checked
                    }
                  });
                });
              }
            }, {
              key: "_setEventListeners",
              value: function(J, ue, ne) {
                var Q = y(ue), ve;
                try {
                  for (Q.s(); !(ve = Q.n()).done; ) {
                    var fe, Ae = T(ve.value, 2), Ee = Ae[0], De = Ae[1];
                    (De === "Action" || (fe = this.data.actions) !== null && fe !== void 0 && fe[De]) && this._setEventListener(J, Ee, De, ne);
                  }
                } catch (Ne) {
                  Q.e(Ne);
                } finally {
                  Q.f();
                }
              }
            }, {
              key: "_setBackgroundColor",
              value: function(J) {
                var ue = this.data.backgroundColor || null;
                J.style.backgroundColor = ue === null ? "transparent" : n.Util.makeHexColor(ue[0], ue[1], ue[2]);
              }
            }, {
              key: "_dispatchEventFromSandbox",
              value: function(J, ue) {
                for (var ne = this, Q = function(ke, He, Oe) {
                  var Ie = Oe.detail[ke];
                  Oe.target.style[He] = u.ColorConverters["".concat(Ie[0], "_HTML")](Ie.slice(1));
                }, ve = {
                  display: function(ke) {
                    var He = ke.detail.display % 2 === 1;
                    ke.target.style.visibility = He ? "hidden" : "visible", ne.annotationStorage.setValue(ne.data.id, {
                      hidden: He,
                      print: ke.detail.display === 0 || ke.detail.display === 3
                    });
                  },
                  print: function(ke) {
                    ne.annotationStorage.setValue(ne.data.id, {
                      print: ke.detail.print
                    });
                  },
                  hidden: function(ke) {
                    ke.target.style.visibility = ke.detail.hidden ? "hidden" : "visible", ne.annotationStorage.setValue(ne.data.id, {
                      hidden: ke.detail.hidden
                    });
                  },
                  focus: function(ke) {
                    setTimeout(function() {
                      return ke.target.focus({
                        preventScroll: !1
                      });
                    }, 0);
                  },
                  userName: function(ke) {
                    ke.target.title = ke.detail.userName;
                  },
                  readonly: function(ke) {
                    ke.detail.readonly ? ke.target.setAttribute("readonly", "") : ke.target.removeAttribute("readonly");
                  },
                  required: function(ke) {
                    ke.detail.required ? ke.target.setAttribute("required", "") : ke.target.removeAttribute("required");
                  },
                  bgColor: function(ke) {
                    Q("bgColor", "backgroundColor", ke);
                  },
                  fillColor: function(ke) {
                    Q("fillColor", "backgroundColor", ke);
                  },
                  fgColor: function(ke) {
                    Q("fgColor", "color", ke);
                  },
                  textColor: function(ke) {
                    Q("textColor", "color", ke);
                  },
                  borderColor: function(ke) {
                    Q("borderColor", "borderColor", ke);
                  },
                  strokeColor: function(ke) {
                    Q("strokeColor", "borderColor", ke);
                  }
                }, fe = 0, Ae = Object.keys(ue.detail); fe < Ae.length; fe++) {
                  var Ee = Ae[fe], De = J[Ee] || ve[Ee];
                  De && De(ue);
                }
              }
            }]), V;
          }(A), z = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              K(this, V);
              var J = re.renderForms || !re.data.hasAppearance && !!re.data.fieldValue;
              return pe.call(this, re, {
                isRenderable: J
              });
            }
            return q(V, [{
              key: "setPropertyOnSiblings",
              value: function(J, ue, ne, Q) {
                var ve = this.annotationStorage, fe = y(this._getElementsByName(J.name, J.id)), Ae;
                try {
                  for (fe.s(); !(Ae = fe.n()).done; ) {
                    var Ee = Ae.value;
                    Ee.domElement && (Ee.domElement[ue] = ne), ve.setValue(Ee.id, x({}, Q, ne));
                  }
                } catch (De) {
                  fe.e(De);
                } finally {
                  fe.f();
                }
              }
            }, {
              key: "render",
              value: function() {
                var J = this, ue = this.annotationStorage, ne = this.data.id;
                this.container.className = "textWidgetAnnotation";
                var Q = null;
                if (this.renderForms) {
                  var ve = ue.getValue(ne, {
                    value: this.data.fieldValue,
                    valueAsString: this.data.fieldValue
                  }), fe = ve.valueAsString || ve.value || "", Ae = {
                    userValue: null,
                    formattedValue: null,
                    beforeInputSelectionRange: null,
                    beforeInputValue: null
                  };
                  this.data.multiLine ? (Q = document.createElement("textarea"), Q.textContent = fe) : (Q = document.createElement("input"), Q.type = "text", Q.setAttribute("value", fe)), S.add(Q), Q.disabled = this.data.readOnly, Q.name = this.data.fieldName, Q.tabIndex = X, Ae.userValue = fe, Q.setAttribute("id", ne), Q.addEventListener("input", function(Oe) {
                    ue.setValue(ne, {
                      value: Oe.target.value
                    }), J.setPropertyOnSiblings(Q, "value", Oe.target.value, "value");
                  }), Q.addEventListener("resetform", function(Oe) {
                    var Ie = J.data.defaultFieldValue || "";
                    Q.value = Ae.userValue = Ie, delete Ae.formattedValue;
                  });
                  var Ee = function(Ie) {
                    Ae.formattedValue && (Ie.target.value = Ae.formattedValue), Ie.target.scrollLeft = 0, Ae.beforeInputSelectionRange = null;
                  };
                  if (this.enableScripting && this.hasJSActions) {
                    var De;
                    Q.addEventListener("focus", function(Oe) {
                      Ae.userValue && (Oe.target.value = Ae.userValue);
                    }), Q.addEventListener("updatefromsandbox", function(Oe) {
                      var Ie = {
                        value: function(Be) {
                          Ae.userValue = Be.detail.value || "", ue.setValue(ne, {
                            value: Ae.userValue.toString()
                          }), Ae.formattedValue || (Be.target.value = Ae.userValue);
                        },
                        valueAsString: function(Be) {
                          Ae.formattedValue = Be.detail.valueAsString || "", Be.target !== document.activeElement && (Be.target.value = Ae.formattedValue), ue.setValue(ne, {
                            formattedValue: Ae.formattedValue
                          });
                        },
                        selRange: function(Be) {
                          var Ye = T(Be.detail.selRange, 2), Ze = Ye[0], rt = Ye[1];
                          Ze >= 0 && rt < Be.target.value.length && Be.target.setSelectionRange(Ze, rt);
                        }
                      };
                      J._dispatchEventFromSandbox(Ie, Oe);
                    }), Q.addEventListener("keydown", function(Oe) {
                      var Ie;
                      Ae.beforeInputValue = Oe.target.value;
                      var Ge = -1;
                      Oe.key === "Escape" ? Ge = 0 : Oe.key === "Enter" ? Ge = 2 : Oe.key === "Tab" && (Ge = 3), Ge !== -1 && (Ae.userValue = Oe.target.value, (Ie = J.linkService.eventBus) === null || Ie === void 0 || Ie.dispatch("dispatcheventinsandbox", {
                        source: J,
                        detail: {
                          id: ne,
                          name: "Keystroke",
                          value: Oe.target.value,
                          willCommit: !0,
                          commitKey: Ge,
                          selStart: Oe.target.selectionStart,
                          selEnd: Oe.target.selectionEnd
                        }
                      }));
                    });
                    var Ne = Ee;
                    Ee = null, Q.addEventListener("blur", function(Oe) {
                      if (J._mouseState.isDown) {
                        var Ie;
                        Ae.userValue = Oe.target.value, (Ie = J.linkService.eventBus) === null || Ie === void 0 || Ie.dispatch("dispatcheventinsandbox", {
                          source: J,
                          detail: {
                            id: ne,
                            name: "Keystroke",
                            value: Oe.target.value,
                            willCommit: !0,
                            commitKey: 1,
                            selStart: Oe.target.selectionStart,
                            selEnd: Oe.target.selectionEnd
                          }
                        });
                      }
                      Ne(Oe);
                    }), Q.addEventListener("mousedown", function(Oe) {
                      Ae.beforeInputValue = Oe.target.value, Ae.beforeInputSelectionRange = null;
                    }), Q.addEventListener("keyup", function(Oe) {
                      Oe.target.selectionStart === Oe.target.selectionEnd && (Ae.beforeInputSelectionRange = null);
                    }), Q.addEventListener("select", function(Oe) {
                      Ae.beforeInputSelectionRange = [Oe.target.selectionStart, Oe.target.selectionEnd];
                    }), (De = this.data.actions) !== null && De !== void 0 && De.Keystroke && Q.addEventListener("input", function(Oe) {
                      var Ie, Ge = -1, Be = -1;
                      if (Ae.beforeInputSelectionRange) {
                        var Ye = T(Ae.beforeInputSelectionRange, 2);
                        Ge = Ye[0], Be = Ye[1];
                      }
                      (Ie = J.linkService.eventBus) === null || Ie === void 0 || Ie.dispatch("dispatcheventinsandbox", {
                        source: J,
                        detail: {
                          id: ne,
                          name: "Keystroke",
                          value: Ae.beforeInputValue,
                          change: Oe.data,
                          willCommit: !1,
                          selStart: Ge,
                          selEnd: Be
                        }
                      });
                    }), this._setEventListeners(Q, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function(Oe) {
                      return Oe.target.value;
                    });
                  }
                  if (Ee && Q.addEventListener("blur", Ee), this.data.maxLen !== null && (Q.maxLength = this.data.maxLen), this.data.comb) {
                    var ke = this.data.rect[2] - this.data.rect[0], He = ke / this.data.maxLen;
                    Q.classList.add("comb"), Q.style.letterSpacing = "calc(".concat(He, "px - 1ch)");
                  }
                } else
                  Q = document.createElement("div"), Q.textContent = this.data.fieldValue, Q.style.verticalAlign = "middle", Q.style.display = "table-cell";
                return this._setTextStyle(Q), this._setBackgroundColor(Q), this.container.appendChild(Q), this.container;
              }
            }, {
              key: "_setTextStyle",
              value: function(J) {
                var ue = ["left", "center", "right"], ne = this.data.defaultAppearanceData, Q = ne.fontSize, ve = ne.fontColor, fe = J.style;
                Q && (fe.fontSize = "".concat(Q, "px")), fe.color = n.Util.makeHexColor(ve[0], ve[1], ve[2]), this.data.textAlignment !== null && (fe.textAlign = ue[this.data.textAlignment]);
              }
            }]), V;
          }(Z), he = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              return K(this, V), pe.call(this, re, {
                isRenderable: re.renderForms
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                var J = this, ue = this.annotationStorage, ne = this.data, Q = ne.id, ve = ue.getValue(Q, {
                  value: ne.exportValue === ne.fieldValue
                }).value;
                typeof ve == "string" && (ve = ve !== "Off", ue.setValue(Q, {
                  value: ve
                })), this.container.className = "buttonWidgetAnnotation checkBox";
                var fe = document.createElement("input");
                return S.add(fe), fe.disabled = ne.readOnly, fe.type = "checkbox", fe.name = ne.fieldName, ve && fe.setAttribute("checked", !0), fe.setAttribute("id", Q), fe.setAttribute("exportValue", ne.exportValue), fe.tabIndex = X, fe.addEventListener("change", function(Ae) {
                  var Ee = Ae.target, De = Ee.name, Ne = Ee.checked, ke = y(J._getElementsByName(De, Q)), He;
                  try {
                    for (ke.s(); !(He = ke.n()).done; ) {
                      var Oe = He.value, Ie = Ne && Oe.exportValue === ne.exportValue;
                      Oe.domElement && (Oe.domElement.checked = Ie), ue.setValue(Oe.id, {
                        value: Ie
                      });
                    }
                  } catch (Ge) {
                    ke.e(Ge);
                  } finally {
                    ke.f();
                  }
                  ue.setValue(Q, {
                    value: Ne
                  });
                }), fe.addEventListener("resetform", function(Ae) {
                  var Ee = ne.defaultFieldValue || "Off";
                  Ae.target.checked = Ee === ne.exportValue;
                }), this.enableScripting && this.hasJSActions && (fe.addEventListener("updatefromsandbox", function(Ae) {
                  var Ee = {
                    value: function(Ne) {
                      Ne.target.checked = Ne.detail.value !== "Off", ue.setValue(Q, {
                        value: Ne.target.checked
                      });
                    }
                  };
                  J._dispatchEventFromSandbox(Ee, Ae);
                }), this._setEventListeners(fe, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function(Ae) {
                  return Ae.target.checked;
                })), this._setBackgroundColor(fe), this.container.appendChild(fe), this.container;
              }
            }]), V;
          }(Z), _e = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              return K(this, V), pe.call(this, re, {
                isRenderable: re.renderForms
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                var J = this;
                this.container.className = "buttonWidgetAnnotation radioButton";
                var ue = this.annotationStorage, ne = this.data, Q = ne.id, ve = ue.getValue(Q, {
                  value: ne.fieldValue === ne.buttonValue
                }).value;
                typeof ve == "string" && (ve = ve !== ne.buttonValue, ue.setValue(Q, {
                  value: ve
                }));
                var fe = document.createElement("input");
                if (S.add(fe), fe.disabled = ne.readOnly, fe.type = "radio", fe.name = ne.fieldName, ve && fe.setAttribute("checked", !0), fe.setAttribute("id", Q), fe.tabIndex = X, fe.addEventListener("change", function(Ee) {
                  var De = Ee.target, Ne = De.name, ke = De.checked, He = y(J._getElementsByName(Ne, Q)), Oe;
                  try {
                    for (He.s(); !(Oe = He.n()).done; ) {
                      var Ie = Oe.value;
                      ue.setValue(Ie.id, {
                        value: !1
                      });
                    }
                  } catch (Ge) {
                    He.e(Ge);
                  } finally {
                    He.f();
                  }
                  ue.setValue(Q, {
                    value: ke
                  });
                }), fe.addEventListener("resetform", function(Ee) {
                  var De = ne.defaultFieldValue;
                  Ee.target.checked = De != null && De === ne.buttonValue;
                }), this.enableScripting && this.hasJSActions) {
                  var Ae = ne.buttonValue;
                  fe.addEventListener("updatefromsandbox", function(Ee) {
                    var De = {
                      value: function(ke) {
                        var He = Ae === ke.detail.value, Oe = y(J._getElementsByName(ke.target.name)), Ie;
                        try {
                          for (Oe.s(); !(Ie = Oe.n()).done; ) {
                            var Ge = Ie.value, Be = He && Ge.id === Q;
                            Ge.domElement && (Ge.domElement.checked = Be), ue.setValue(Ge.id, {
                              value: Be
                            });
                          }
                        } catch (Ye) {
                          Oe.e(Ye);
                        } finally {
                          Oe.f();
                        }
                      }
                    };
                    J._dispatchEventFromSandbox(De, Ee);
                  }), this._setEventListeners(fe, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], function(Ee) {
                    return Ee.target.checked;
                  });
                }
                return this._setBackgroundColor(fe), this.container.appendChild(fe), this.container;
              }
            }]), V;
          }(Z), Te = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              return K(this, V), pe.call(this, re, {
                ignoreBorder: re.data.hasAppearance
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                var J = D(m(V.prototype), "render", this).call(this);
                return J.className = "buttonWidgetAnnotation pushButton", this.data.alternativeText && (J.title = this.data.alternativeText), J;
              }
            }]), V;
          }(C), j = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              return K(this, V), pe.call(this, re, {
                isRenderable: re.renderForms
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                var J = this;
                this.container.className = "choiceWidgetAnnotation";
                var ue = this.annotationStorage, ne = this.data.id;
                ue.getValue(ne, {
                  value: this.data.fieldValue.length > 0 ? this.data.fieldValue[0] : void 0
                });
                var Q = this.data.defaultAppearanceData.fontSize;
                Q || (Q = 9);
                var ve = "calc(".concat(Q, "px * var(--zoom-factor))"), fe = document.createElement("select");
                S.add(fe), fe.disabled = this.data.readOnly, fe.name = this.data.fieldName, fe.setAttribute("id", ne), fe.tabIndex = X, fe.style.fontSize = "".concat(Q, "px"), this.data.combo || (fe.size = this.data.options.length, this.data.multiSelect && (fe.multiple = !0)), fe.addEventListener("resetform", function(Oe) {
                  var Ie = J.data.defaultFieldValue, Ge = y(fe.options), Be;
                  try {
                    for (Ge.s(); !(Be = Ge.n()).done; ) {
                      var Ye = Be.value;
                      Ye.selected = Ye.value === Ie;
                    }
                  } catch (Ze) {
                    Ge.e(Ze);
                  } finally {
                    Ge.f();
                  }
                });
                var Ae = y(this.data.options), Ee;
                try {
                  for (Ae.s(); !(Ee = Ae.n()).done; ) {
                    var De = Ee.value, Ne = document.createElement("option");
                    Ne.textContent = De.displayValue, Ne.value = De.exportValue, this.data.combo && (Ne.style.fontSize = ve), this.data.fieldValue.includes(De.exportValue) && Ne.setAttribute("selected", !0), fe.appendChild(Ne);
                  }
                } catch (Oe) {
                  Ae.e(Oe);
                } finally {
                  Ae.f();
                }
                var ke = function(Ie, Ge) {
                  var Be = Ge ? "value" : "textContent", Ye = Ie.target.options;
                  return Ie.target.multiple ? Array.prototype.filter.call(Ye, function(Ze) {
                    return Ze.selected;
                  }).map(function(Ze) {
                    return Ze[Be];
                  }) : Ye.selectedIndex === -1 ? null : Ye[Ye.selectedIndex][Be];
                }, He = function(Ie) {
                  var Ge = Ie.target.options;
                  return Array.prototype.map.call(Ge, function(Be) {
                    return {
                      displayValue: Be.textContent,
                      exportValue: Be.value
                    };
                  });
                };
                return this.enableScripting && this.hasJSActions ? (fe.addEventListener("updatefromsandbox", function(Oe) {
                  var Ie = {
                    value: function(Be) {
                      var Ye = Be.detail.value, Ze = new Set(Array.isArray(Ye) ? Ye : [Ye]), rt = y(fe.options), lt;
                      try {
                        for (rt.s(); !(lt = rt.n()).done; ) {
                          var ct = lt.value;
                          ct.selected = Ze.has(ct.value);
                        }
                      } catch (_t) {
                        rt.e(_t);
                      } finally {
                        rt.f();
                      }
                      ue.setValue(ne, {
                        value: ke(Be, !0)
                      });
                    },
                    multipleSelection: function(Be) {
                      fe.multiple = !0;
                    },
                    remove: function(Be) {
                      var Ye = fe.options, Ze = Be.detail.remove;
                      if (Ye[Ze].selected = !1, fe.remove(Ze), Ye.length > 0) {
                        var rt = Array.prototype.findIndex.call(Ye, function(lt) {
                          return lt.selected;
                        });
                        rt === -1 && (Ye[0].selected = !0);
                      }
                      ue.setValue(ne, {
                        value: ke(Be, !0),
                        items: He(Be)
                      });
                    },
                    clear: function(Be) {
                      for (; fe.length !== 0; )
                        fe.remove(0);
                      ue.setValue(ne, {
                        value: null,
                        items: []
                      });
                    },
                    insert: function(Be) {
                      var Ye = Be.detail.insert, Ze = Ye.index, rt = Ye.displayValue, lt = Ye.exportValue, ct = document.createElement("option");
                      ct.textContent = rt, ct.value = lt, fe.insertBefore(ct, fe.children[Ze]), ue.setValue(ne, {
                        value: ke(Be, !0),
                        items: He(Be)
                      });
                    },
                    items: function(Be) {
                      for (var Ye = Be.detail.items; fe.length !== 0; )
                        fe.remove(0);
                      var Ze = y(Ye), rt;
                      try {
                        for (Ze.s(); !(rt = Ze.n()).done; ) {
                          var lt = rt.value, ct = lt.displayValue, _t = lt.exportValue, St = document.createElement("option");
                          St.textContent = ct, St.value = _t, fe.appendChild(St);
                        }
                      } catch (Pt) {
                        Ze.e(Pt);
                      } finally {
                        Ze.f();
                      }
                      fe.options.length > 0 && (fe.options[0].selected = !0), ue.setValue(ne, {
                        value: ke(Be, !0),
                        items: He(Be)
                      });
                    },
                    indices: function(Be) {
                      var Ye = new Set(Be.detail.indices), Ze = y(Be.target.options), rt;
                      try {
                        for (Ze.s(); !(rt = Ze.n()).done; ) {
                          var lt = rt.value;
                          lt.selected = Ye.has(lt.index);
                        }
                      } catch (ct) {
                        Ze.e(ct);
                      } finally {
                        Ze.f();
                      }
                      ue.setValue(ne, {
                        value: ke(Be, !0)
                      });
                    },
                    editable: function(Be) {
                      Be.target.disabled = !Be.detail.editable;
                    }
                  };
                  J._dispatchEventFromSandbox(Ie, Oe);
                }), fe.addEventListener("input", function(Oe) {
                  var Ie, Ge = ke(Oe, !0), Be = ke(Oe, !1);
                  ue.setValue(ne, {
                    value: Ge
                  }), (Ie = J.linkService.eventBus) === null || Ie === void 0 || Ie.dispatch("dispatcheventinsandbox", {
                    source: J,
                    detail: {
                      id: ne,
                      name: "Keystroke",
                      value: Be,
                      changeEx: Ge,
                      willCommit: !0,
                      commitKey: 1,
                      keyDown: !1
                    }
                  });
                }), this._setEventListeners(fe, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"]], function(Oe) {
                  return Oe.target.checked;
                })) : fe.addEventListener("input", function(Oe) {
                  ue.setValue(ne, {
                    value: ke(Oe)
                  });
                }), this._setBackgroundColor(fe), this.container.appendChild(fe), this.container;
              }
            }]), V;
          }(Z), I = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!((J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                var J = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
                if (this.container.className = "popupAnnotation", J.includes(this.data.parentType))
                  return this.container;
                var ue = '[data-annotation-id="'.concat(this.data.parentId, '"]'), ne = this.layer.querySelectorAll(ue);
                if (ne.length === 0)
                  return this.container;
                var Q = new f({
                  container: this.container,
                  trigger: Array.from(ne),
                  color: this.data.color,
                  titleObj: this.data.titleObj,
                  modificationDate: this.data.modificationDate,
                  contentsObj: this.data.contentsObj,
                  richText: this.data.richText
                }), ve = this.page, fe = n.Util.normalizeRect([this.data.parentRect[0], ve.view[3] - this.data.parentRect[1] + ve.view[1], this.data.parentRect[2], ve.view[3] - this.data.parentRect[3] + ve.view[1]]), Ae = fe[0] + this.data.parentRect[2] - this.data.parentRect[0], Ee = fe[1];
                return this.container.style.transformOrigin = "".concat(-Ae, "px ").concat(-Ee, "px"), this.container.style.left = "".concat(Ae, "px"), this.container.style.top = "".concat(Ee, "px"), this.container.appendChild(Q.render()), this.container;
              }
            }]), V;
          }(A), f = /* @__PURE__ */ function() {
            function de(pe) {
              K(this, de), this.container = pe.container, this.trigger = pe.trigger, this.color = pe.color, this.titleObj = pe.titleObj, this.modificationDate = pe.modificationDate, this.contentsObj = pe.contentsObj, this.richText = pe.richText, this.hideWrapper = pe.hideWrapper || !1, this.pinned = !1;
            }
            return q(de, [{
              key: "render",
              value: function() {
                var V, re, J = 0.7, ue = document.createElement("div");
                ue.className = "popupWrapper", this.hideElement = this.hideWrapper ? ue : this.container, this.hideElement.hidden = !0;
                var ne = document.createElement("div");
                ne.className = "popup";
                var Q = this.color;
                if (Q) {
                  var ve = J * (255 - Q[0]) + Q[0], fe = J * (255 - Q[1]) + Q[1], Ae = J * (255 - Q[2]) + Q[2];
                  ne.style.backgroundColor = n.Util.makeHexColor(ve | 0, fe | 0, Ae | 0);
                }
                var Ee = document.createElement("h1");
                Ee.dir = this.titleObj.dir, Ee.textContent = this.titleObj.str, ne.appendChild(Ee);
                var De = o.PDFDateString.toDateObject(this.modificationDate);
                if (De) {
                  var Ne = document.createElement("span");
                  Ne.className = "popupDate", Ne.textContent = "{{date}}, {{time}}", Ne.dataset.l10nId = "annotation_date_string", Ne.dataset.l10nArgs = JSON.stringify({
                    date: De.toLocaleDateString(),
                    time: De.toLocaleTimeString()
                  }), ne.appendChild(Ne);
                }
                if ((V = this.richText) !== null && V !== void 0 && V.str && (!((re = this.contentsObj) !== null && re !== void 0 && re.str) || this.contentsObj.str === this.richText.str))
                  g.XfaLayer.render({
                    xfaHtml: this.richText.html,
                    intent: "richText",
                    div: ne
                  }), ne.lastChild.className = "richText popupContent";
                else {
                  var ke = this._formatContents(this.contentsObj);
                  ne.appendChild(ke);
                }
                Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
                var He = y(this.trigger), Oe;
                try {
                  for (He.s(); !(Oe = He.n()).done; ) {
                    var Ie = Oe.value;
                    Ie.addEventListener("click", this._toggle.bind(this)), Ie.addEventListener("mouseover", this._show.bind(this, !1)), Ie.addEventListener("mouseout", this._hide.bind(this, !1));
                  }
                } catch (Ge) {
                  He.e(Ge);
                } finally {
                  He.f();
                }
                return ne.addEventListener("click", this._hide.bind(this, !0)), ue.appendChild(ne), ue;
              }
            }, {
              key: "_formatContents",
              value: function(V) {
                var re = V.str, J = V.dir, ue = document.createElement("p");
                ue.className = "popupContent", ue.dir = J;
                for (var ne = re.split(/(?:\r\n?|\n)/), Q = 0, ve = ne.length; Q < ve; ++Q) {
                  var fe = ne[Q];
                  ue.appendChild(document.createTextNode(fe)), Q < ve - 1 && ue.appendChild(document.createElement("br"));
                }
                return ue;
              }
            }, {
              key: "_toggle",
              value: function() {
                this.pinned ? this._hide(!0) : this._show(!0);
              }
            }, {
              key: "_show",
              value: function() {
                var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                V && (this.pinned = !0), this.hideElement.hidden && (this.hideElement.hidden = !1, this.container.style.zIndex += 1);
              }
            }, {
              key: "_hide",
              value: function() {
                var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                V && (this.pinned = !1), !this.hideElement.hidden && !this.pinned && (this.hideElement.hidden = !0, this.container.style.zIndex -= 1);
              }
            }]), de;
          }(), l = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                return this.container.className = "freeTextAnnotation", this.data.hasPopup || this._createPopup(null, this.data), this.container;
              }
            }]), V;
          }(A), _ = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                this.container.className = "lineAnnotation";
                var J = this.data, ue = J.rect[2] - J.rect[0], ne = J.rect[3] - J.rect[1], Q = this.svgFactory.create(ue, ne), ve = this.svgFactory.createElement("svg:line");
                return ve.setAttribute("x1", J.rect[2] - J.lineCoordinates[0]), ve.setAttribute("y1", J.rect[3] - J.lineCoordinates[1]), ve.setAttribute("x2", J.rect[2] - J.lineCoordinates[2]), ve.setAttribute("y2", J.rect[3] - J.lineCoordinates[3]), ve.setAttribute("stroke-width", J.borderStyle.width || 1), ve.setAttribute("stroke", "transparent"), ve.setAttribute("fill", "transparent"), Q.appendChild(ve), this.container.append(Q), this._createPopup(ve, J), this.container;
              }
            }]), V;
          }(A), N = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                this.container.className = "squareAnnotation";
                var J = this.data, ue = J.rect[2] - J.rect[0], ne = J.rect[3] - J.rect[1], Q = this.svgFactory.create(ue, ne), ve = J.borderStyle.width, fe = this.svgFactory.createElement("svg:rect");
                return fe.setAttribute("x", ve / 2), fe.setAttribute("y", ve / 2), fe.setAttribute("width", ue - ve), fe.setAttribute("height", ne - ve), fe.setAttribute("stroke-width", ve || 1), fe.setAttribute("stroke", "transparent"), fe.setAttribute("fill", "transparent"), Q.appendChild(fe), this.container.append(Q), this._createPopup(fe, J), this.container;
              }
            }]), V;
          }(A), G = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                this.container.className = "circleAnnotation";
                var J = this.data, ue = J.rect[2] - J.rect[0], ne = J.rect[3] - J.rect[1], Q = this.svgFactory.create(ue, ne), ve = J.borderStyle.width, fe = this.svgFactory.createElement("svg:ellipse");
                return fe.setAttribute("cx", ue / 2), fe.setAttribute("cy", ne / 2), fe.setAttribute("rx", ue / 2 - ve / 2), fe.setAttribute("ry", ne / 2 - ve / 2), fe.setAttribute("stroke-width", ve || 1), fe.setAttribute("stroke", "transparent"), fe.setAttribute("fill", "transparent"), Q.appendChild(fe), this.container.append(Q), this._createPopup(fe, J), this.container;
              }
            }]), V;
          }(A), ee = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne, Q;
              K(this, V);
              var ve = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return Q = pe.call(this, re, {
                isRenderable: ve,
                ignoreBorder: !0
              }), Q.containerClassName = "polylineAnnotation", Q.svgElementName = "svg:polyline", Q;
            }
            return q(V, [{
              key: "render",
              value: function() {
                this.container.className = this.containerClassName;
                var J = this.data, ue = J.rect[2] - J.rect[0], ne = J.rect[3] - J.rect[1], Q = this.svgFactory.create(ue, ne), ve = [], fe = y(J.vertices), Ae;
                try {
                  for (fe.s(); !(Ae = fe.n()).done; ) {
                    var Ee = Ae.value, De = Ee.x - J.rect[0], Ne = J.rect[3] - Ee.y;
                    ve.push(De + "," + Ne);
                  }
                } catch (He) {
                  fe.e(He);
                } finally {
                  fe.f();
                }
                ve = ve.join(" ");
                var ke = this.svgFactory.createElement(this.svgElementName);
                return ke.setAttribute("points", ve), ke.setAttribute("stroke-width", J.borderStyle.width || 1), ke.setAttribute("stroke", "transparent"), ke.setAttribute("fill", "transparent"), Q.appendChild(ke), this.container.append(Q), this._createPopup(ke, J), this.container;
              }
            }]), V;
          }(A), ce = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J;
              return K(this, V), J = pe.call(this, re), J.containerClassName = "polygonAnnotation", J.svgElementName = "svg:polygon", J;
            }
            return V;
          }(ee), ye = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                return this.container.className = "caretAnnotation", this.data.hasPopup || this._createPopup(null, this.data), this.container;
              }
            }]), V;
          }(A), be = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne, Q;
              K(this, V);
              var ve = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return Q = pe.call(this, re, {
                isRenderable: ve,
                ignoreBorder: !0
              }), Q.containerClassName = "inkAnnotation", Q.svgElementName = "svg:polyline", Q;
            }
            return q(V, [{
              key: "render",
              value: function() {
                this.container.className = this.containerClassName;
                var J = this.data, ue = J.rect[2] - J.rect[0], ne = J.rect[3] - J.rect[1], Q = this.svgFactory.create(ue, ne), ve = y(J.inkLists), fe;
                try {
                  for (ve.s(); !(fe = ve.n()).done; ) {
                    var Ae = fe.value, Ee = [], De = y(Ae), Ne;
                    try {
                      for (De.s(); !(Ne = De.n()).done; ) {
                        var ke = Ne.value, He = ke.x - J.rect[0], Oe = J.rect[3] - ke.y;
                        Ee.push("".concat(He, ",").concat(Oe));
                      }
                    } catch (Ge) {
                      De.e(Ge);
                    } finally {
                      De.f();
                    }
                    Ee = Ee.join(" ");
                    var Ie = this.svgFactory.createElement(this.svgElementName);
                    Ie.setAttribute("points", Ee), Ie.setAttribute("stroke-width", J.borderStyle.width || 1), Ie.setAttribute("stroke", "transparent"), Ie.setAttribute("fill", "transparent"), this._createPopup(Ie, J), Q.appendChild(Ie);
                  }
                } catch (Ge) {
                  ve.e(Ge);
                } finally {
                  ve.f();
                }
                return this.container.append(Q), this.container;
              }
            }]), V;
          }(A), me = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("highlightAnnotation") : (this.container.className = "highlightAnnotation", this.container);
              }
            }]), V;
          }(A), Pe = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("underlineAnnotation") : (this.container.className = "underlineAnnotation", this.container);
              }
            }]), V;
          }(A), Ce = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("squigglyAnnotation") : (this.container.className = "squigglyAnnotation", this.container);
              }
            }]), V;
          }(A), xe = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("strikeoutAnnotation") : (this.container.className = "strikeoutAnnotation", this.container);
              }
            }]), V;
          }(A), Fe = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue, ne;
              K(this, V);
              var Q = !!(re.data.hasPopup || (J = re.data.titleObj) !== null && J !== void 0 && J.str || (ue = re.data.contentsObj) !== null && ue !== void 0 && ue.str || (ne = re.data.richText) !== null && ne !== void 0 && ne.str);
              return pe.call(this, re, {
                isRenderable: Q,
                ignoreBorder: !0
              });
            }
            return q(V, [{
              key: "render",
              value: function() {
                return this.container.className = "stampAnnotation", this.data.hasPopup || this._createPopup(null, this.data), this.container;
              }
            }]), V;
          }(A), Me = /* @__PURE__ */ function(de) {
            R(V, de);
            var pe = v(V);
            function V(re) {
              var J, ue;
              K(this, V), ue = pe.call(this, re, {
                isRenderable: !0
              });
              var ne = ue.data.file, Q = ne.filename, ve = ne.content;
              return ue.filename = (0, o.getFilenameFromUrl)(Q), ue.content = ve, (J = ue.linkService.eventBus) === null || J === void 0 || J.dispatch("fileattachmentannotation", {
                source: p(ue),
                id: (0, n.stringToPDFString)(Q),
                filename: Q,
                content: ve
              }), ue;
            }
            return q(V, [{
              key: "render",
              value: function() {
                var J, ue;
                this.container.className = "fileAttachmentAnnotation";
                var ne = document.createElement("div");
                return ne.style.height = this.container.style.height, ne.style.width = this.container.style.width, ne.addEventListener("dblclick", this._download.bind(this)), !this.data.hasPopup && ((J = this.data.titleObj) !== null && J !== void 0 && J.str || (ue = this.data.contentsObj) !== null && ue !== void 0 && ue.str || this.data.richText) && this._createPopup(ne, this.data), this.container.appendChild(ne), this.container;
              }
            }, {
              key: "_download",
              value: function() {
                var J;
                (J = this.downloadManager) === null || J === void 0 || J.openOrDownloadData(this.container, this.content, this.filename);
              }
            }]), V;
          }(A), Ue = /* @__PURE__ */ function() {
            function de() {
              K(this, de);
            }
            return q(de, null, [{
              key: "render",
              value: function(V) {
                var re = [], J = [], ue = y(V.annotations), ne;
                try {
                  for (ue.s(); !(ne = ue.n()).done; ) {
                    var Q = ne.value;
                    if (!!Q) {
                      if (Q.annotationType === n.AnnotationType.POPUP) {
                        J.push(Q);
                        continue;
                      }
                      re.push(Q);
                    }
                  }
                } catch (Ie) {
                  ue.e(Ie);
                } finally {
                  ue.f();
                }
                J.length && re.push.apply(re, J);
                for (var ve = V.div, fe = 0, Ae = re; fe < Ae.length; fe++) {
                  var Ee = Ae[fe], De = h.create({
                    data: Ee,
                    layer: ve,
                    page: V.page,
                    viewport: V.viewport,
                    linkService: V.linkService,
                    downloadManager: V.downloadManager,
                    imageResourcesPath: V.imageResourcesPath || "",
                    renderForms: V.renderForms !== !1,
                    svgFactory: new o.DOMSVGFactory(),
                    annotationStorage: V.annotationStorage || new d.AnnotationStorage(),
                    enableScripting: V.enableScripting,
                    hasJSActions: V.hasJSActions,
                    fieldObjects: V.fieldObjects,
                    mouseState: V.mouseState || {
                      isDown: !1
                    }
                  });
                  if (De.isRenderable) {
                    var Ne = De.render();
                    if (Ee.hidden && (Ne.style.visibility = "hidden"), Array.isArray(Ne)) {
                      var ke = y(Ne), He;
                      try {
                        for (ke.s(); !(He = ke.n()).done; ) {
                          var Oe = He.value;
                          ve.appendChild(Oe);
                        }
                      } catch (Ie) {
                        ke.e(Ie);
                      } finally {
                        ke.f();
                      }
                    } else
                      De instanceof I ? ve.prepend(Ne) : ve.appendChild(Ne);
                  }
                }
                P(this, de, Ve).call(this, ve, V.annotationCanvasMap);
              }
            }, {
              key: "update",
              value: function(V) {
                var re = V.page, J = V.viewport, ue = V.annotations, ne = V.annotationCanvasMap, Q = V.div, ve = J.transform, fe = "matrix(".concat(ve.join(","), ")"), Ae, Ee, De = y(ue), Ne;
                try {
                  for (De.s(); !(Ne = De.n()).done; ) {
                    var ke = Ne.value, He = Q.querySelectorAll('[data-annotation-id="'.concat(ke.id, '"]'));
                    if (He) {
                      var Oe = y(He), Ie;
                      try {
                        for (Oe.s(); !(Ie = Oe.n()).done; ) {
                          var Ge = Ie.value;
                          if (ke.hasOwnCanvas) {
                            var Be = n.Util.normalizeRect([ke.rect[0], re.view[3] - ke.rect[1] + re.view[1], ke.rect[2], re.view[3] - ke.rect[3] + re.view[1]]);
                            if (!Ee) {
                              Ae = Math.abs(ve[0] || ve[1]);
                              for (var Ye = ve.slice(), Ze = 0; Ze < 4; Ze++)
                                Ye[Ze] = Math.sign(Ye[Ze]);
                              Ee = "matrix(".concat(Ye.join(","), ")");
                            }
                            var rt = Be[0] * Ae, lt = Be[1] * Ae;
                            Ge.style.left = "".concat(rt, "px"), Ge.style.top = "".concat(lt, "px"), Ge.style.transformOrigin = "".concat(-rt, "px ").concat(-lt, "px"), Ge.style.transform = Ee;
                          } else
                            Ge.style.transform = fe;
                        }
                      } catch (ct) {
                        Oe.e(ct);
                      } finally {
                        Oe.f();
                      }
                    }
                  }
                } catch (ct) {
                  De.e(ct);
                } finally {
                  De.f();
                }
                P(this, de, Ve).call(this, Q, ne), Q.hidden = !1;
              }
            }]), de;
          }();
          a.AnnotationLayer = Ue;
          function Ve(de, pe) {
            if (!!pe) {
              var V = y(pe), re;
              try {
                for (V.s(); !(re = V.n()).done; ) {
                  var J = T(re.value, 2), ue = J[0], ne = J[1], Q = de.querySelector('[data-annotation-id="'.concat(ue, '"]'));
                  if (!!Q) {
                    var ve = Q.firstChild;
                    ve.nodeName === "CANVAS" ? Q.replaceChild(ne, ve) : Q.insertBefore(ne, ve);
                  }
                }
              } catch (fe) {
                V.e(fe);
              } finally {
                V.f();
              }
              pe.clear();
            }
          }
        },
        (i, a) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.ColorConverters = void 0;
          function t(x, w) {
            return u(x) || d(x, w) || n(x, w) || e();
          }
          function e() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function n(x, w) {
            if (!!x) {
              if (typeof x == "string")
                return o(x, w);
              var O = Object.prototype.toString.call(x).slice(8, -1);
              if (O === "Object" && x.constructor && (O = x.constructor.name), O === "Map" || O === "Set")
                return Array.from(x);
              if (O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))
                return o(x, w);
            }
          }
          function o(x, w) {
            (w == null || w > x.length) && (w = x.length);
            for (var O = 0, k = new Array(w); O < w; O++)
              k[O] = x[O];
            return k;
          }
          function d(x, w) {
            var O = x == null ? null : typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
            if (O != null) {
              var k = [], W = !0, R = !1, U, v;
              try {
                for (O = O.call(x); !(W = (U = O.next()).done) && (k.push(U.value), !(w && k.length === w)); W = !0)
                  ;
              } catch (c) {
                R = !0, v = c;
              } finally {
                try {
                  !W && O.return != null && O.return();
                } finally {
                  if (R)
                    throw v;
                }
              }
              return k;
            }
          }
          function u(x) {
            if (Array.isArray(x))
              return x;
          }
          function g(x, w) {
            if (!(x instanceof w))
              throw new TypeError("Cannot call a class as a function");
          }
          function P(x, w) {
            for (var O = 0; O < w.length; O++) {
              var k = w[O];
              k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(x, k.key, k);
            }
          }
          function F(x, w, O) {
            return w && P(x.prototype, w), O && P(x, O), x;
          }
          function D(x) {
            return Math.floor(Math.max(0, Math.min(1, x)) * 255).toString(16).padStart(2, "0");
          }
          var B = /* @__PURE__ */ function() {
            function x() {
              g(this, x);
            }
            return F(x, null, [{
              key: "CMYK_G",
              value: function(O) {
                var k = t(O, 4), W = k[0], R = k[1], U = k[2], v = k[3];
                return ["G", 1 - Math.min(1, 0.3 * W + 0.59 * U + 0.11 * R + v)];
              }
            }, {
              key: "G_CMYK",
              value: function(O) {
                var k = t(O, 1), W = k[0];
                return ["CMYK", 0, 0, 0, 1 - W];
              }
            }, {
              key: "G_RGB",
              value: function(O) {
                var k = t(O, 1), W = k[0];
                return ["RGB", W, W, W];
              }
            }, {
              key: "G_HTML",
              value: function(O) {
                var k = t(O, 1), W = k[0], R = D(W);
                return "#".concat(R).concat(R).concat(R);
              }
            }, {
              key: "RGB_G",
              value: function(O) {
                var k = t(O, 3), W = k[0], R = k[1], U = k[2];
                return ["G", 0.3 * W + 0.59 * R + 0.11 * U];
              }
            }, {
              key: "RGB_HTML",
              value: function(O) {
                var k = t(O, 3), W = k[0], R = k[1], U = k[2], v = D(W), c = D(R), p = D(U);
                return "#".concat(v).concat(c).concat(p);
              }
            }, {
              key: "T_HTML",
              value: function() {
                return "#00000000";
              }
            }, {
              key: "CMYK_RGB",
              value: function(O) {
                var k = t(O, 4), W = k[0], R = k[1], U = k[2], v = k[3];
                return ["RGB", 1 - Math.min(1, W + v), 1 - Math.min(1, U + v), 1 - Math.min(1, R + v)];
              }
            }, {
              key: "CMYK_HTML",
              value: function(O) {
                return this.RGB_HTML(this.CMYK_RGB(O));
              }
            }, {
              key: "RGB_CMYK",
              value: function(O) {
                var k = t(O, 3), W = k[0], R = k[1], U = k[2], v = 1 - W, c = 1 - R, p = 1 - U, b = Math.min(v, c, p);
                return ["CMYK", v, c, p, b];
              }
            }]), x;
          }();
          a.ColorConverters = B;
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.XfaLayer = void 0;
          var e = t(4), n = t(147);
          function o(k, W) {
            return g(k) || u(k, W) || F(k, W) || d();
          }
          function d() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function u(k, W) {
            var R = k == null ? null : typeof Symbol < "u" && k[Symbol.iterator] || k["@@iterator"];
            if (R != null) {
              var U = [], v = !0, c = !1, p, b;
              try {
                for (R = R.call(k); !(v = (p = R.next()).done) && (U.push(p.value), !(W && U.length === W)); v = !0)
                  ;
              } catch (m) {
                c = !0, b = m;
              } finally {
                try {
                  !v && R.return != null && R.return();
                } finally {
                  if (c)
                    throw b;
                }
              }
              return U;
            }
          }
          function g(k) {
            if (Array.isArray(k))
              return k;
          }
          function P(k, W) {
            var R = typeof Symbol < "u" && k[Symbol.iterator] || k["@@iterator"];
            if (!R) {
              if (Array.isArray(k) || (R = F(k)) || W && k && typeof k.length == "number") {
                R && (k = R);
                var U = 0, v = function() {
                };
                return { s: v, n: function() {
                  return U >= k.length ? { done: !0 } : { done: !1, value: k[U++] };
                }, e: function(y) {
                  throw y;
                }, f: v };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var c = !0, p = !1, b;
            return { s: function() {
              R = R.call(k);
            }, n: function() {
              var y = R.next();
              return c = y.done, y;
            }, e: function(y) {
              p = !0, b = y;
            }, f: function() {
              try {
                !c && R.return != null && R.return();
              } finally {
                if (p)
                  throw b;
              }
            } };
          }
          function F(k, W) {
            if (!!k) {
              if (typeof k == "string")
                return D(k, W);
              var R = Object.prototype.toString.call(k).slice(8, -1);
              if (R === "Object" && k.constructor && (R = k.constructor.name), R === "Map" || R === "Set")
                return Array.from(k);
              if (R === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))
                return D(k, W);
            }
          }
          function D(k, W) {
            (W == null || W > k.length) && (W = k.length);
            for (var R = 0, U = new Array(W); R < W; R++)
              U[R] = k[R];
            return U;
          }
          function B(k, W) {
            if (!(k instanceof W))
              throw new TypeError("Cannot call a class as a function");
          }
          function x(k, W) {
            for (var R = 0; R < W.length; R++) {
              var U = W[R];
              U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(k, U.key, U);
            }
          }
          function w(k, W, R) {
            return W && x(k.prototype, W), R && x(k, R), k;
          }
          var O = /* @__PURE__ */ function() {
            function k() {
              B(this, k);
            }
            return w(k, null, [{
              key: "setupStorage",
              value: function(R, U, v, c, p) {
                var b = c.getValue(U, {
                  value: null
                });
                switch (v.name) {
                  case "textarea":
                    if (b.value !== null && (R.textContent = b.value), p === "print")
                      break;
                    R.addEventListener("input", function(M) {
                      c.setValue(U, {
                        value: M.target.value
                      });
                    });
                    break;
                  case "input":
                    if (v.attributes.type === "radio" || v.attributes.type === "checkbox") {
                      if (b.value === v.attributes.xfaOn ? R.setAttribute("checked", !0) : b.value === v.attributes.xfaOff && R.removeAttribute("checked"), p === "print")
                        break;
                      R.addEventListener("change", function(M) {
                        c.setValue(U, {
                          value: M.target.checked ? M.target.getAttribute("xfaOn") : M.target.getAttribute("xfaOff")
                        });
                      });
                    } else {
                      if (b.value !== null && R.setAttribute("value", b.value), p === "print")
                        break;
                      R.addEventListener("input", function(M) {
                        c.setValue(U, {
                          value: M.target.value
                        });
                      });
                    }
                    break;
                  case "select":
                    if (b.value !== null) {
                      var m = P(v.children), y;
                      try {
                        for (m.s(); !(y = m.n()).done; ) {
                          var T = y.value;
                          T.attributes.value === b.value && (T.attributes.selected = !0);
                        }
                      } catch (M) {
                        m.e(M);
                      } finally {
                        m.f();
                      }
                    }
                    R.addEventListener("input", function(M) {
                      var H = M.target.options, L = H.selectedIndex === -1 ? "" : H[H.selectedIndex].value;
                      c.setValue(U, {
                        value: L
                      });
                    });
                    break;
                }
              }
            }, {
              key: "setAttributes",
              value: function(R) {
                var U = R.html, v = R.element, c = R.storage, p = c === void 0 ? null : c, b = R.intent, m = R.linkService, y = v.attributes, T = U instanceof HTMLAnchorElement;
                y.type === "radio" && (y.name = "".concat(y.name, "-").concat(b));
                for (var M = 0, H = Object.entries(y); M < H.length; M++) {
                  var L = o(H[M], 2), Y = L[0], te = L[1];
                  if (!(te == null || Y === "dataId"))
                    if (Y !== "style")
                      if (Y === "textContent")
                        U.textContent = te;
                      else if (Y === "class")
                        te.length && U.setAttribute(Y, te.join(" "));
                      else {
                        if (T && (Y === "href" || Y === "newWindow"))
                          continue;
                        U.setAttribute(Y, te);
                      }
                    else
                      Object.assign(U.style, te);
                }
                if (T) {
                  var K;
                  m.addLinkAttributes || (0, e.warn)("XfaLayer.setAttribute - missing `addLinkAttributes`-method on the `linkService`-instance."), (K = m.addLinkAttributes) === null || K === void 0 || K.call(m, U, y.href, y.newWindow);
                }
                p && y.dataId && this.setupStorage(U, y.dataId, v, p);
              }
            }, {
              key: "render",
              value: function(R) {
                var U = R.annotationStorage, v = R.linkService, c = R.xfaHtml, p = R.intent || "display", b = document.createElement(c.name);
                c.attributes && this.setAttributes({
                  html: b,
                  element: c,
                  intent: p,
                  linkService: v
                });
                var m = [[c, -1, b]], y = R.div;
                if (y.appendChild(b), R.viewport) {
                  var T = "matrix(".concat(R.viewport.transform.join(","), ")");
                  y.style.transform = T;
                }
                p !== "richText" && y.setAttribute("class", "xfaLayer xfaFont");
                for (var M = []; m.length > 0; ) {
                  var H, L = o(m[m.length - 1], 3), Y = L[0], te = L[1], K = L[2];
                  if (te + 1 === Y.children.length) {
                    m.pop();
                    continue;
                  }
                  var oe = Y.children[++m[m.length - 1][1]];
                  if (oe !== null) {
                    var q = oe.name;
                    if (q === "#text") {
                      var X = document.createTextNode(oe.value);
                      M.push(X), K.appendChild(X);
                      continue;
                    }
                    var S = void 0;
                    if (oe != null && (H = oe.attributes) !== null && H !== void 0 && H.xmlns ? S = document.createElementNS(oe.attributes.xmlns, q) : S = document.createElement(q), K.appendChild(S), oe.attributes && this.setAttributes({
                      html: S,
                      element: oe,
                      storage: U,
                      intent: p,
                      linkService: v
                    }), oe.children && oe.children.length > 0)
                      m.push([oe, -1, S]);
                    else if (oe.value) {
                      var h = document.createTextNode(oe.value);
                      n.XfaText.shouldBuildText(q) && M.push(h), S.appendChild(h);
                    }
                  }
                }
                var A = P(y.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")), C;
                try {
                  for (A.s(); !(C = A.n()).done; ) {
                    var $ = C.value;
                    $.setAttribute("readOnly", !0);
                  }
                } catch (Z) {
                  A.e(Z);
                } finally {
                  A.f();
                }
                return {
                  textDivs: M
                };
              }
            }, {
              key: "update",
              value: function(R) {
                var U = "matrix(".concat(R.viewport.transform.join(","), ")");
                R.div.style.transform = U, R.div.hidden = !1;
              }
            }]), k;
          }();
          a.XfaLayer = O;
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.renderTextLayer = b;
          var e = t(4);
          function n(m, y) {
            if (!(m instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(m, y) {
            for (var T = 0; T < y.length; T++) {
              var M = y[T];
              M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(m, M.key, M);
            }
          }
          function d(m, y, T) {
            return y && o(m.prototype, y), T && o(m, T), m;
          }
          function u(m, y) {
            var T = typeof Symbol < "u" && m[Symbol.iterator] || m["@@iterator"];
            if (!T) {
              if (Array.isArray(m) || (T = g(m)) || y && m && typeof m.length == "number") {
                T && (m = T);
                var M = 0, H = function() {
                };
                return { s: H, n: function() {
                  return M >= m.length ? { done: !0 } : { done: !1, value: m[M++] };
                }, e: function(oe) {
                  throw oe;
                }, f: H };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var L = !0, Y = !1, te;
            return { s: function() {
              T = T.call(m);
            }, n: function() {
              var oe = T.next();
              return L = oe.done, oe;
            }, e: function(oe) {
              Y = !0, te = oe;
            }, f: function() {
              try {
                !L && T.return != null && T.return();
              } finally {
                if (Y)
                  throw te;
              }
            } };
          }
          function g(m, y) {
            if (!!m) {
              if (typeof m == "string")
                return P(m, y);
              var T = Object.prototype.toString.call(m).slice(8, -1);
              if (T === "Object" && m.constructor && (T = m.constructor.name), T === "Map" || T === "Set")
                return Array.from(m);
              if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))
                return P(m, y);
            }
          }
          function P(m, y) {
            (y == null || y > m.length) && (y = m.length);
            for (var T = 0, M = new Array(y); T < y; T++)
              M[T] = m[T];
            return M;
          }
          var F = 1e5, D = 30, B = 0.8, x = /* @__PURE__ */ new Map(), w = /^\s+$/g;
          function O(m, y) {
            var T = x.get(m);
            if (T)
              return T;
            y.save(), y.font = "".concat(D, "px ").concat(m);
            var M = y.measureText(""), H = M.fontBoundingBoxAscent, L = Math.abs(M.fontBoundingBoxDescent);
            if (H) {
              y.restore();
              var Y = H / (H + L);
              return x.set(m, Y), Y;
            }
            y.strokeStyle = "red", y.clearRect(0, 0, D, D), y.strokeText("g", 0, 0);
            var te = y.getImageData(0, 0, D, D).data;
            L = 0;
            for (var K = te.length - 1 - 3; K >= 0; K -= 4)
              if (te[K] > 0) {
                L = Math.ceil(K / 4 / D);
                break;
              }
            y.clearRect(0, 0, D, D), y.strokeText("A", 0, D), te = y.getImageData(0, 0, D, D).data, H = 0;
            for (var oe = 0, q = te.length; oe < q; oe += 4)
              if (te[oe] > 0) {
                H = D - Math.floor(oe / 4 / D);
                break;
              }
            if (y.restore(), H) {
              var X = H / (H + L);
              return x.set(m, X), X;
            }
            return x.set(m, B), B;
          }
          function k(m, y, T, M) {
            var H = document.createElement("span"), L = m._enhanceTextSelection ? {
              angle: 0,
              canvasWidth: 0,
              hasText: y.str !== "",
              hasEOL: y.hasEOL,
              originalTransform: null,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              scale: 1
            } : {
              angle: 0,
              canvasWidth: 0,
              hasText: y.str !== "",
              hasEOL: y.hasEOL
            };
            m._textDivs.push(H);
            var Y = e.Util.transform(m._viewport.transform, y.transform), te = Math.atan2(Y[1], Y[0]), K = T[y.fontName];
            K.vertical && (te += Math.PI / 2);
            var oe = Math.hypot(Y[2], Y[3]), q = oe * O(K.fontFamily, M), X, S;
            te === 0 ? (X = Y[4], S = Y[5] - q) : (X = Y[4] + q * Math.sin(te), S = Y[5] - q * Math.cos(te)), H.style.left = "".concat(X, "px"), H.style.top = "".concat(S, "px"), H.style.fontSize = "".concat(oe, "px"), H.style.fontFamily = K.fontFamily, H.setAttribute("role", "presentation"), H.textContent = y.str, H.dir = y.dir, m._fontInspectorEnabled && (H.dataset.fontName = y.fontName), te !== 0 && (L.angle = te * (180 / Math.PI));
            var h = !1;
            if (y.str.length > 1 || m._enhanceTextSelection && w.test(y.str))
              h = !0;
            else if (y.str !== " " && y.transform[0] !== y.transform[3]) {
              var A = Math.abs(y.transform[0]), C = Math.abs(y.transform[3]);
              A !== C && Math.max(A, C) / Math.min(A, C) > 1.5 && (h = !0);
            }
            if (h && (K.vertical ? L.canvasWidth = y.height * m._viewport.scale : L.canvasWidth = y.width * m._viewport.scale), m._textDivProperties.set(H, L), m._textContentStream && m._layoutText(H), m._enhanceTextSelection && L.hasText) {
              var $ = 1, Z = 0;
              te !== 0 && ($ = Math.cos(te), Z = Math.sin(te));
              var z = (K.vertical ? y.height : y.width) * m._viewport.scale, he = oe, _e, Te;
              te !== 0 ? (_e = [$, Z, -Z, $, X, S], Te = e.Util.getAxialAlignedBoundingBox([0, 0, z, he], _e)) : Te = [X, S, X + z, S + he], m._bounds.push({
                left: Te[0],
                top: Te[1],
                right: Te[2],
                bottom: Te[3],
                div: H,
                size: [z, he],
                m: _e
              });
            }
          }
          function W(m) {
            if (!m._canceled) {
              var y = m._textDivs, T = m._capability, M = y.length;
              if (M > F) {
                m._renderingDone = !0, T.resolve();
                return;
              }
              if (!m._textContentStream)
                for (var H = 0; H < M; H++)
                  m._layoutText(y[H]);
              m._renderingDone = !0, T.resolve();
            }
          }
          function R(m, y, T) {
            for (var M = 0, H = 0; H < T; H++) {
              var L = m[y++];
              L > 0 && (M = M ? Math.min(L, M) : L);
            }
            return M;
          }
          function U(m) {
            for (var y = m._bounds, T = m._viewport, M = v(T.width, T.height, y), H = 0; H < M.length; H++) {
              var L = y[H].div, Y = m._textDivProperties.get(L);
              if (Y.angle === 0) {
                Y.paddingLeft = y[H].left - M[H].left, Y.paddingTop = y[H].top - M[H].top, Y.paddingRight = M[H].right - y[H].right, Y.paddingBottom = M[H].bottom - y[H].bottom, m._textDivProperties.set(L, Y);
                continue;
              }
              for (var te = M[H], K = y[H], oe = K.m, q = oe[0], X = oe[1], S = [[0, 0], [0, K.size[1]], [K.size[0], 0], K.size], h = new Float64Array(64), A = 0, C = S.length; A < C; A++) {
                var $ = e.Util.applyTransform(S[A], oe);
                h[A + 0] = q && (te.left - $[0]) / q, h[A + 4] = X && (te.top - $[1]) / X, h[A + 8] = q && (te.right - $[0]) / q, h[A + 12] = X && (te.bottom - $[1]) / X, h[A + 16] = X && (te.left - $[0]) / -X, h[A + 20] = q && (te.top - $[1]) / q, h[A + 24] = X && (te.right - $[0]) / -X, h[A + 28] = q && (te.bottom - $[1]) / q, h[A + 32] = q && (te.left - $[0]) / -q, h[A + 36] = X && (te.top - $[1]) / -X, h[A + 40] = q && (te.right - $[0]) / -q, h[A + 44] = X && (te.bottom - $[1]) / -X, h[A + 48] = X && (te.left - $[0]) / X, h[A + 52] = q && (te.top - $[1]) / -q, h[A + 56] = X && (te.right - $[0]) / X, h[A + 60] = q && (te.bottom - $[1]) / -q;
              }
              var Z = 1 + Math.min(Math.abs(q), Math.abs(X));
              Y.paddingLeft = R(h, 32, 16) / Z, Y.paddingTop = R(h, 48, 16) / Z, Y.paddingRight = R(h, 0, 16) / Z, Y.paddingBottom = R(h, 16, 16) / Z, m._textDivProperties.set(L, Y);
            }
          }
          function v(m, y, T) {
            var M = T.map(function(h, A) {
              return {
                x1: h.left,
                y1: h.top,
                x2: h.right,
                y2: h.bottom,
                index: A,
                x1New: void 0,
                x2New: void 0
              };
            });
            c(m, M);
            var H = new Array(T.length), L = u(M), Y;
            try {
              for (L.s(); !(Y = L.n()).done; ) {
                var te = Y.value, K = te.index;
                H[K] = {
                  left: te.x1New,
                  top: 0,
                  right: te.x2New,
                  bottom: 0
                };
              }
            } catch (h) {
              L.e(h);
            } finally {
              L.f();
            }
            T.map(function(h, A) {
              var C = H[A], $ = M[A];
              $.x1 = h.top, $.y1 = m - C.right, $.x2 = h.bottom, $.y2 = m - C.left, $.index = A, $.x1New = void 0, $.x2New = void 0;
            }), c(y, M);
            var oe = u(M), q;
            try {
              for (oe.s(); !(q = oe.n()).done; ) {
                var X = q.value, S = X.index;
                H[S].top = X.x1New, H[S].bottom = X.x2New;
              }
            } catch (h) {
              oe.e(h);
            } finally {
              oe.f();
            }
            return H;
          }
          function c(m, y) {
            y.sort(function(I, f) {
              return I.x1 - f.x1 || I.index - f.index;
            });
            var T = {
              x1: -1 / 0,
              y1: -1 / 0,
              x2: 0,
              y2: 1 / 0,
              index: -1,
              x1New: 0,
              x2New: 0
            }, M = [{
              start: -1 / 0,
              end: 1 / 0,
              boundary: T
            }], H = u(y), L;
            try {
              for (H.s(); !(L = H.n()).done; ) {
                for (var Y = L.value, te = 0; te < M.length && M[te].end <= Y.y1; )
                  te++;
                for (var K = M.length - 1; K >= 0 && M[K].start >= Y.y2; )
                  K--;
                var oe = void 0, q = void 0, X = void 0, S = void 0, h = -1 / 0;
                for (X = te; X <= K; X++) {
                  oe = M[X], q = oe.boundary;
                  var A = void 0;
                  q.x2 > Y.x1 ? A = q.index > Y.index ? q.x1New : Y.x1 : q.x2New === void 0 ? A = (q.x2 + Y.x1) / 2 : A = q.x2New, A > h && (h = A);
                }
                for (Y.x1New = h, X = te; X <= K; X++)
                  oe = M[X], q = oe.boundary, q.x2New === void 0 ? q.x2 > Y.x1 ? q.index > Y.index && (q.x2New = q.x2) : q.x2New = h : q.x2New > h && (q.x2New = Math.max(h, q.x2));
                var C = [], $ = null;
                for (X = te; X <= K; X++) {
                  oe = M[X], q = oe.boundary;
                  var Z = q.x2 > Y.x2 ? q : Y;
                  $ === Z ? C[C.length - 1].end = oe.end : (C.push({
                    start: oe.start,
                    end: oe.end,
                    boundary: Z
                  }), $ = Z);
                }
                for (M[te].start < Y.y1 && (C[0].start = Y.y1, C.unshift({
                  start: M[te].start,
                  end: Y.y1,
                  boundary: M[te].boundary
                })), Y.y2 < M[K].end && (C[C.length - 1].end = Y.y2, C.push({
                  start: Y.y2,
                  end: M[K].end,
                  boundary: M[K].boundary
                })), X = te; X <= K; X++)
                  if (oe = M[X], q = oe.boundary, q.x2New === void 0) {
                    var z = !1;
                    for (S = te - 1; !z && S >= 0 && M[S].start >= q.y1; S--)
                      z = M[S].boundary === q;
                    for (S = K + 1; !z && S < M.length && M[S].end <= q.y2; S++)
                      z = M[S].boundary === q;
                    for (S = 0; !z && S < C.length; S++)
                      z = C[S].boundary === q;
                    z || (q.x2New = h);
                  }
                Array.prototype.splice.apply(M, [te, K - te + 1].concat(C));
              }
            } catch (I) {
              H.e(I);
            } finally {
              H.f();
            }
            for (var he = 0, _e = M; he < _e.length; he++) {
              var Te = _e[he], j = Te.boundary;
              j.x2New === void 0 && (j.x2New = Math.max(m, j.x2));
            }
          }
          var p = /* @__PURE__ */ function() {
            function m(y) {
              var T, M = this, H = y.textContent, L = y.textContentStream, Y = y.container, te = y.viewport, K = y.textDivs, oe = y.textContentItemsStr, q = y.enhanceTextSelection;
              n(this, m), this._textContent = H, this._textContentStream = L, this._container = Y, this._document = Y.ownerDocument, this._viewport = te, this._textDivs = K || [], this._textContentItemsStr = oe || [], this._enhanceTextSelection = !!q, this._fontInspectorEnabled = !!((T = globalThis.FontInspector) !== null && T !== void 0 && T.enabled), this._reader = null, this._layoutTextLastFontSize = null, this._layoutTextLastFontFamily = null, this._layoutTextCtx = null, this._textDivProperties = /* @__PURE__ */ new WeakMap(), this._renderingDone = !1, this._canceled = !1, this._capability = (0, e.createPromiseCapability)(), this._renderTimer = null, this._bounds = [], this._capability.promise.finally(function() {
                M._enhanceTextSelection || (M._textDivProperties = null), M._layoutTextCtx && (M._layoutTextCtx.canvas.width = 0, M._layoutTextCtx.canvas.height = 0, M._layoutTextCtx = null);
              }).catch(function() {
              });
            }
            return d(m, [{
              key: "promise",
              get: function() {
                return this._capability.promise;
              }
            }, {
              key: "cancel",
              value: function() {
                this._canceled = !0, this._reader && (this._reader.cancel(new e.AbortException("TextLayer task cancelled.")).catch(function() {
                }), this._reader = null), this._renderTimer !== null && (clearTimeout(this._renderTimer), this._renderTimer = null), this._capability.reject(new Error("TextLayer task cancelled."));
              }
            }, {
              key: "_processItems",
              value: function(T, M) {
                for (var H = 0, L = T.length; H < L; H++) {
                  if (T[H].str === void 0) {
                    if (T[H].type === "beginMarkedContentProps" || T[H].type === "beginMarkedContent") {
                      var Y = this._container;
                      this._container = document.createElement("span"), this._container.classList.add("markedContent"), T[H].id !== null && this._container.setAttribute("id", "".concat(T[H].id)), Y.appendChild(this._container);
                    } else
                      T[H].type === "endMarkedContent" && (this._container = this._container.parentNode);
                    continue;
                  }
                  this._textContentItemsStr.push(T[H].str), k(this, T[H], M, this._layoutTextCtx);
                }
              }
            }, {
              key: "_layoutText",
              value: function(T) {
                var M = this._textDivProperties.get(T), H = "";
                if (M.canvasWidth !== 0 && M.hasText) {
                  var L = T.style, Y = L.fontSize, te = L.fontFamily;
                  (Y !== this._layoutTextLastFontSize || te !== this._layoutTextLastFontFamily) && (this._layoutTextCtx.font = "".concat(Y, " ").concat(te), this._layoutTextLastFontSize = Y, this._layoutTextLastFontFamily = te);
                  var K = this._layoutTextCtx.measureText(T.textContent), oe = K.width;
                  if (oe > 0) {
                    var q = M.canvasWidth / oe;
                    this._enhanceTextSelection && (M.scale = q), H = "scaleX(".concat(q, ")");
                  }
                }
                if (M.angle !== 0 && (H = "rotate(".concat(M.angle, "deg) ").concat(H)), H.length > 0 && (this._enhanceTextSelection && (M.originalTransform = H), T.style.transform = H), M.hasText && this._container.appendChild(T), M.hasEOL) {
                  var X = document.createElement("br");
                  X.setAttribute("role", "presentation"), this._container.appendChild(X);
                }
              }
            }, {
              key: "_render",
              value: function() {
                var T = this, M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, H = (0, e.createPromiseCapability)(), L = /* @__PURE__ */ Object.create(null), Y = this._document.createElement("canvas");
                if (Y.height = Y.width = D, Y.mozOpaque = !0, this._layoutTextCtx = Y.getContext("2d", {
                  alpha: !1
                }), this._textContent) {
                  var te = this._textContent.items, K = this._textContent.styles;
                  this._processItems(te, K), H.resolve();
                } else if (this._textContentStream) {
                  var oe = function q() {
                    T._reader.read().then(function(X) {
                      var S = X.value, h = X.done;
                      if (h) {
                        H.resolve();
                        return;
                      }
                      Object.assign(L, S.styles), T._processItems(S.items, L), q();
                    }, H.reject);
                  };
                  this._reader = this._textContentStream.getReader(), oe();
                } else
                  throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
                H.promise.then(function() {
                  L = null, M ? T._renderTimer = setTimeout(function() {
                    W(T), T._renderTimer = null;
                  }, M) : W(T);
                }, this._capability.reject);
              }
            }, {
              key: "expandTextDivs",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                if (!(!this._enhanceTextSelection || !this._renderingDone)) {
                  this._bounds !== null && (U(this), this._bounds = null);
                  for (var M = [], H = [], L = 0, Y = this._textDivs.length; L < Y; L++) {
                    var te = this._textDivs[L], K = this._textDivProperties.get(te);
                    !K.hasText || (T ? (M.length = 0, H.length = 0, K.originalTransform && M.push(K.originalTransform), K.paddingTop > 0 ? (H.push("".concat(K.paddingTop, "px")), M.push("translateY(".concat(-K.paddingTop, "px)"))) : H.push(0), K.paddingRight > 0 ? H.push("".concat(K.paddingRight / K.scale, "px")) : H.push(0), K.paddingBottom > 0 ? H.push("".concat(K.paddingBottom, "px")) : H.push(0), K.paddingLeft > 0 ? (H.push("".concat(K.paddingLeft / K.scale, "px")), M.push("translateX(".concat(-K.paddingLeft / K.scale, "px)"))) : H.push(0), te.style.padding = H.join(" "), M.length && (te.style.transform = M.join(" "))) : (te.style.padding = null, te.style.transform = K.originalTransform));
                  }
                }
              }
            }]), m;
          }();
          function b(m) {
            var y = new p({
              textContent: m.textContent,
              textContentStream: m.textContentStream,
              container: m.container,
              viewport: m.viewport,
              textDivs: m.textDivs,
              textContentItemsStr: m.textContentItemsStr,
              enhanceTextSelection: m.enhanceTextSelection
            });
            return y._render(m.timeout), y;
          }
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.SVGGraphics = void 0;
          var e = t(4), n = t(1), o = t(6);
          function d(q) {
            return P(q) || g(q) || O(q) || u();
          }
          function u() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function g(q) {
            if (typeof Symbol < "u" && q[Symbol.iterator] != null || q["@@iterator"] != null)
              return Array.from(q);
          }
          function P(q) {
            if (Array.isArray(q))
              return k(q);
          }
          function F(q, X) {
            return x(q) || B(q, X) || O(q, X) || D();
          }
          function D() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function B(q, X) {
            var S = q == null ? null : typeof Symbol < "u" && q[Symbol.iterator] || q["@@iterator"];
            if (S != null) {
              var h = [], A = !0, C = !1, $, Z;
              try {
                for (S = S.call(q); !(A = ($ = S.next()).done) && (h.push($.value), !(X && h.length === X)); A = !0)
                  ;
              } catch (z) {
                C = !0, Z = z;
              } finally {
                try {
                  !A && S.return != null && S.return();
                } finally {
                  if (C)
                    throw Z;
                }
              }
              return h;
            }
          }
          function x(q) {
            if (Array.isArray(q))
              return q;
          }
          function w(q, X) {
            var S = typeof Symbol < "u" && q[Symbol.iterator] || q["@@iterator"];
            if (!S) {
              if (Array.isArray(q) || (S = O(q)) || X && q && typeof q.length == "number") {
                S && (q = S);
                var h = 0, A = function() {
                };
                return { s: A, n: function() {
                  return h >= q.length ? { done: !0 } : { done: !1, value: q[h++] };
                }, e: function(he) {
                  throw he;
                }, f: A };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var C = !0, $ = !1, Z;
            return { s: function() {
              S = S.call(q);
            }, n: function() {
              var he = S.next();
              return C = he.done, he;
            }, e: function(he) {
              $ = !0, Z = he;
            }, f: function() {
              try {
                !C && S.return != null && S.return();
              } finally {
                if ($)
                  throw Z;
              }
            } };
          }
          function O(q, X) {
            if (!!q) {
              if (typeof q == "string")
                return k(q, X);
              var S = Object.prototype.toString.call(q).slice(8, -1);
              if (S === "Object" && q.constructor && (S = q.constructor.name), S === "Map" || S === "Set")
                return Array.from(q);
              if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))
                return k(q, X);
            }
          }
          function k(q, X) {
            (X == null || X > q.length) && (X = q.length);
            for (var S = 0, h = new Array(X); S < X; S++)
              h[S] = q[S];
            return h;
          }
          function W(q, X) {
            for (var S = 0; S < X.length; S++) {
              var h = X[S];
              h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(q, h.key, h);
            }
          }
          function R(q, X, S) {
            return X && W(q.prototype, X), S && W(q, S), q;
          }
          function U(q, X) {
            if (!(q instanceof X))
              throw new TypeError("Cannot call a class as a function");
          }
          var v = function q() {
            U(this, q), (0, e.unreachable)("Not implemented: SVGGraphics");
          };
          a.SVGGraphics = v;
          {
            var c = function(X) {
              var S = [], h = [], A = w(X), C;
              try {
                for (A.s(); !(C = A.n()).done; ) {
                  var $ = C.value;
                  if ($.fn === "save") {
                    S.push({
                      fnId: 92,
                      fn: "group",
                      items: []
                    }), h.push(S), S = S[S.length - 1].items;
                    continue;
                  }
                  $.fn === "restore" ? S = h.pop() : S.push($);
                }
              } catch (Z) {
                A.e(Z);
              } finally {
                A.f();
              }
              return S;
            }, p = function(X) {
              if (Number.isInteger(X))
                return X.toString();
              var S = X.toFixed(10), h = S.length - 1;
              if (S[h] !== "0")
                return S;
              do
                h--;
              while (S[h] === "0");
              return S.substring(0, S[h] === "." ? h : h + 1);
            }, b = function(X) {
              if (X[4] === 0 && X[5] === 0) {
                if (X[1] === 0 && X[2] === 0)
                  return X[0] === 1 && X[3] === 1 ? "" : "scale(".concat(p(X[0]), " ").concat(p(X[3]), ")");
                if (X[0] === X[3] && X[1] === -X[2]) {
                  var S = Math.acos(X[0]) * 180 / Math.PI;
                  return "rotate(".concat(p(S), ")");
                }
              } else if (X[0] === 1 && X[1] === 0 && X[2] === 0 && X[3] === 1)
                return "translate(".concat(p(X[4]), " ").concat(p(X[5]), ")");
              return "matrix(".concat(p(X[0]), " ").concat(p(X[1]), " ").concat(p(X[2]), " ").concat(p(X[3]), " ").concat(p(X[4]), " ") + "".concat(p(X[5]), ")");
            }, m = {
              fontStyle: "normal",
              fontWeight: "normal",
              fillColor: "#000000"
            }, y = "http://www.w3.org/XML/1998/namespace", T = "http://www.w3.org/1999/xlink", M = ["butt", "round", "square"], H = ["miter", "round", "bevel"], L = function() {
              for (var q = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), X = 12, S = new Int32Array(256), h = 0; h < 256; h++) {
                for (var A = h, C = 0; C < 8; C++)
                  A & 1 ? A = 3988292384 ^ A >> 1 & 2147483647 : A = A >> 1 & 2147483647;
                S[h] = A;
              }
              function $(j, I, f) {
                for (var l = -1, _ = I; _ < f; _++) {
                  var N = (l ^ j[_]) & 255, G = S[N];
                  l = l >>> 8 ^ G;
                }
                return l ^ -1;
              }
              function Z(j, I, f, l) {
                var _ = l, N = I.length;
                f[_] = N >> 24 & 255, f[_ + 1] = N >> 16 & 255, f[_ + 2] = N >> 8 & 255, f[_ + 3] = N & 255, _ += 4, f[_] = j.charCodeAt(0) & 255, f[_ + 1] = j.charCodeAt(1) & 255, f[_ + 2] = j.charCodeAt(2) & 255, f[_ + 3] = j.charCodeAt(3) & 255, _ += 4, f.set(I, _), _ += I.length;
                var G = $(f, l + 4, _);
                f[_] = G >> 24 & 255, f[_ + 1] = G >> 16 & 255, f[_ + 2] = G >> 8 & 255, f[_ + 3] = G & 255;
              }
              function z(j, I, f) {
                for (var l = 1, _ = 0, N = I; N < f; ++N)
                  l = (l + (j[N] & 255)) % 65521, _ = (_ + l) % 65521;
                return _ << 16 | l;
              }
              function he(j) {
                if (!o.isNodeJS)
                  return _e(j);
                try {
                  var I;
                  parseInt(process.versions.node) >= 8 ? I = j : I = Buffer.from(j);
                  var f = require$$5.deflateSync(I, {
                    level: 9
                  });
                  return f instanceof Uint8Array ? f : new Uint8Array(f);
                } catch (l) {
                  (0, e.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + l);
                }
                return _e(j);
              }
              function _e(j) {
                var I = j.length, f = 65535, l = Math.ceil(I / f), _ = new Uint8Array(2 + I + l * 5 + 4), N = 0;
                _[N++] = 120, _[N++] = 156;
                for (var G = 0; I > f; )
                  _[N++] = 0, _[N++] = 255, _[N++] = 255, _[N++] = 0, _[N++] = 0, _.set(j.subarray(G, G + f), N), N += f, G += f, I -= f;
                _[N++] = 1, _[N++] = I & 255, _[N++] = I >> 8 & 255, _[N++] = ~I & 65535 & 255, _[N++] = (~I & 65535) >> 8 & 255, _.set(j.subarray(G), N), N += j.length - G;
                var ee = z(j, 0, j.length);
                return _[N++] = ee >> 24 & 255, _[N++] = ee >> 16 & 255, _[N++] = ee >> 8 & 255, _[N++] = ee & 255, _;
              }
              function Te(j, I, f, l) {
                var _ = j.width, N = j.height, G, ee, ce, ye = j.data;
                switch (I) {
                  case e.ImageKind.GRAYSCALE_1BPP:
                    ee = 0, G = 1, ce = _ + 7 >> 3;
                    break;
                  case e.ImageKind.RGB_24BPP:
                    ee = 2, G = 8, ce = _ * 3;
                    break;
                  case e.ImageKind.RGBA_32BPP:
                    ee = 6, G = 8, ce = _ * 4;
                    break;
                  default:
                    throw new Error("invalid format");
                }
                for (var be = new Uint8Array((1 + ce) * N), me = 0, Pe = 0, Ce = 0; Ce < N; ++Ce)
                  be[me++] = 0, be.set(ye.subarray(Pe, Pe + ce), me), Pe += ce, me += ce;
                if (I === e.ImageKind.GRAYSCALE_1BPP && l) {
                  me = 0;
                  for (var xe = 0; xe < N; xe++) {
                    me++;
                    for (var Fe = 0; Fe < ce; Fe++)
                      be[me++] ^= 255;
                  }
                }
                var Me = new Uint8Array([_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255, _ & 255, N >> 24 & 255, N >> 16 & 255, N >> 8 & 255, N & 255, G, ee, 0, 0, 0]), Ue = he(be), Ve = q.length + X * 3 + Me.length + Ue.length, de = new Uint8Array(Ve), pe = 0;
                return de.set(q, pe), pe += q.length, Z("IHDR", Me, de, pe), pe += X + Me.length, Z("IDATA", Ue, de, pe), pe += X + Ue.length, Z("IEND", new Uint8Array(0), de, pe), (0, e.createObjectURL)(de, "image/png", f);
              }
              return function(I, f, l) {
                var _ = I.kind === void 0 ? e.ImageKind.GRAYSCALE_1BPP : I.kind;
                return Te(I, _, f, l);
              };
            }(), Y = /* @__PURE__ */ function() {
              function q() {
                U(this, q), this.fontSizeScale = 1, this.fontWeight = m.fontWeight, this.fontSize = 0, this.textMatrix = e.IDENTITY_MATRIX, this.fontMatrix = e.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = e.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = m.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
              }
              return R(q, [{
                key: "clone",
                value: function() {
                  return Object.create(this);
                }
              }, {
                key: "setCurrentPoint",
                value: function(S, h) {
                  this.x = S, this.y = h;
                }
              }]), q;
            }(), te = 0, K = 0, oe = 0;
            a.SVGGraphics = v = /* @__PURE__ */ function() {
              function q(X, S) {
                var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                U(this, q), this.svgFactory = new n.DOMSVGFactory(), this.current = new Y(), this.transformMatrix = e.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = X, this.objs = S, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!h, this._operatorIdMapping = [];
                for (var A in e.OPS)
                  this._operatorIdMapping[e.OPS[A]] = A;
              }
              return R(q, [{
                key: "save",
                value: function() {
                  this.transformStack.push(this.transformMatrix);
                  var S = this.current;
                  this.extraStack.push(S), this.current = S.clone();
                }
              }, {
                key: "restore",
                value: function() {
                  this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
                }
              }, {
                key: "group",
                value: function(S) {
                  this.save(), this.executeOpTree(S), this.restore();
                }
              }, {
                key: "loadDependencies",
                value: function(S) {
                  for (var h = this, A = S.fnArray, C = S.argsArray, $ = 0, Z = A.length; $ < Z; $++)
                    if (A[$] === e.OPS.dependency) {
                      var z = w(C[$]), he;
                      try {
                        var _e = function() {
                          var j = he.value, I = j.startsWith("g_") ? h.commonObjs : h.objs, f = new Promise(function(l) {
                            I.get(j, l);
                          });
                          h.current.dependencies.push(f);
                        };
                        for (z.s(); !(he = z.n()).done; )
                          _e();
                      } catch (Te) {
                        z.e(Te);
                      } finally {
                        z.f();
                      }
                    }
                  return Promise.all(this.current.dependencies);
                }
              }, {
                key: "transform",
                value: function(S, h, A, C, $, Z) {
                  var z = [S, h, A, C, $, Z];
                  this.transformMatrix = e.Util.transform(this.transformMatrix, z), this.tgrp = null;
                }
              }, {
                key: "getSVG",
                value: function(S, h) {
                  var A = this;
                  this.viewport = h;
                  var C = this._initialize(h);
                  return this.loadDependencies(S).then(function() {
                    return A.transformMatrix = e.IDENTITY_MATRIX, A.executeOpTree(A.convertOpList(S)), C;
                  });
                }
              }, {
                key: "convertOpList",
                value: function(S) {
                  for (var h = this._operatorIdMapping, A = S.argsArray, C = S.fnArray, $ = [], Z = 0, z = C.length; Z < z; Z++) {
                    var he = C[Z];
                    $.push({
                      fnId: he,
                      fn: h[he],
                      args: A[Z]
                    });
                  }
                  return c($);
                }
              }, {
                key: "executeOpTree",
                value: function(S) {
                  var h = w(S), A;
                  try {
                    for (h.s(); !(A = h.n()).done; ) {
                      var C = A.value, $ = C.fn, Z = C.fnId, z = C.args;
                      switch (Z | 0) {
                        case e.OPS.beginText:
                          this.beginText();
                          break;
                        case e.OPS.dependency:
                          break;
                        case e.OPS.setLeading:
                          this.setLeading(z);
                          break;
                        case e.OPS.setLeadingMoveText:
                          this.setLeadingMoveText(z[0], z[1]);
                          break;
                        case e.OPS.setFont:
                          this.setFont(z);
                          break;
                        case e.OPS.showText:
                          this.showText(z[0]);
                          break;
                        case e.OPS.showSpacedText:
                          this.showText(z[0]);
                          break;
                        case e.OPS.endText:
                          this.endText();
                          break;
                        case e.OPS.moveText:
                          this.moveText(z[0], z[1]);
                          break;
                        case e.OPS.setCharSpacing:
                          this.setCharSpacing(z[0]);
                          break;
                        case e.OPS.setWordSpacing:
                          this.setWordSpacing(z[0]);
                          break;
                        case e.OPS.setHScale:
                          this.setHScale(z[0]);
                          break;
                        case e.OPS.setTextMatrix:
                          this.setTextMatrix(z[0], z[1], z[2], z[3], z[4], z[5]);
                          break;
                        case e.OPS.setTextRise:
                          this.setTextRise(z[0]);
                          break;
                        case e.OPS.setTextRenderingMode:
                          this.setTextRenderingMode(z[0]);
                          break;
                        case e.OPS.setLineWidth:
                          this.setLineWidth(z[0]);
                          break;
                        case e.OPS.setLineJoin:
                          this.setLineJoin(z[0]);
                          break;
                        case e.OPS.setLineCap:
                          this.setLineCap(z[0]);
                          break;
                        case e.OPS.setMiterLimit:
                          this.setMiterLimit(z[0]);
                          break;
                        case e.OPS.setFillRGBColor:
                          this.setFillRGBColor(z[0], z[1], z[2]);
                          break;
                        case e.OPS.setStrokeRGBColor:
                          this.setStrokeRGBColor(z[0], z[1], z[2]);
                          break;
                        case e.OPS.setStrokeColorN:
                          this.setStrokeColorN(z);
                          break;
                        case e.OPS.setFillColorN:
                          this.setFillColorN(z);
                          break;
                        case e.OPS.shadingFill:
                          this.shadingFill(z[0]);
                          break;
                        case e.OPS.setDash:
                          this.setDash(z[0], z[1]);
                          break;
                        case e.OPS.setRenderingIntent:
                          this.setRenderingIntent(z[0]);
                          break;
                        case e.OPS.setFlatness:
                          this.setFlatness(z[0]);
                          break;
                        case e.OPS.setGState:
                          this.setGState(z[0]);
                          break;
                        case e.OPS.fill:
                          this.fill();
                          break;
                        case e.OPS.eoFill:
                          this.eoFill();
                          break;
                        case e.OPS.stroke:
                          this.stroke();
                          break;
                        case e.OPS.fillStroke:
                          this.fillStroke();
                          break;
                        case e.OPS.eoFillStroke:
                          this.eoFillStroke();
                          break;
                        case e.OPS.clip:
                          this.clip("nonzero");
                          break;
                        case e.OPS.eoClip:
                          this.clip("evenodd");
                          break;
                        case e.OPS.paintSolidColorImageMask:
                          this.paintSolidColorImageMask();
                          break;
                        case e.OPS.paintImageXObject:
                          this.paintImageXObject(z[0]);
                          break;
                        case e.OPS.paintInlineImageXObject:
                          this.paintInlineImageXObject(z[0]);
                          break;
                        case e.OPS.paintImageMaskXObject:
                          this.paintImageMaskXObject(z[0]);
                          break;
                        case e.OPS.paintFormXObjectBegin:
                          this.paintFormXObjectBegin(z[0], z[1]);
                          break;
                        case e.OPS.paintFormXObjectEnd:
                          this.paintFormXObjectEnd();
                          break;
                        case e.OPS.closePath:
                          this.closePath();
                          break;
                        case e.OPS.closeStroke:
                          this.closeStroke();
                          break;
                        case e.OPS.closeFillStroke:
                          this.closeFillStroke();
                          break;
                        case e.OPS.closeEOFillStroke:
                          this.closeEOFillStroke();
                          break;
                        case e.OPS.nextLine:
                          this.nextLine();
                          break;
                        case e.OPS.transform:
                          this.transform(z[0], z[1], z[2], z[3], z[4], z[5]);
                          break;
                        case e.OPS.constructPath:
                          this.constructPath(z[0], z[1]);
                          break;
                        case e.OPS.endPath:
                          this.endPath();
                          break;
                        case 92:
                          this.group(C.items);
                          break;
                        default:
                          (0, e.warn)("Unimplemented operator ".concat($));
                          break;
                      }
                    }
                  } catch (he) {
                    h.e(he);
                  } finally {
                    h.f();
                  }
                }
              }, {
                key: "setWordSpacing",
                value: function(S) {
                  this.current.wordSpacing = S;
                }
              }, {
                key: "setCharSpacing",
                value: function(S) {
                  this.current.charSpacing = S;
                }
              }, {
                key: "nextLine",
                value: function() {
                  this.moveText(0, this.current.leading);
                }
              }, {
                key: "setTextMatrix",
                value: function(S, h, A, C, $, Z) {
                  var z = this.current;
                  z.textMatrix = z.lineMatrix = [S, h, A, C, $, Z], z.textMatrixScale = Math.hypot(S, h), z.x = z.lineX = 0, z.y = z.lineY = 0, z.xcoords = [], z.ycoords = [], z.tspan = this.svgFactory.createElement("svg:tspan"), z.tspan.setAttributeNS(null, "font-family", z.fontFamily), z.tspan.setAttributeNS(null, "font-size", "".concat(p(z.fontSize), "px")), z.tspan.setAttributeNS(null, "y", p(-z.y)), z.txtElement = this.svgFactory.createElement("svg:text"), z.txtElement.appendChild(z.tspan);
                }
              }, {
                key: "beginText",
                value: function() {
                  var S = this.current;
                  S.x = S.lineX = 0, S.y = S.lineY = 0, S.textMatrix = e.IDENTITY_MATRIX, S.lineMatrix = e.IDENTITY_MATRIX, S.textMatrixScale = 1, S.tspan = this.svgFactory.createElement("svg:tspan"), S.txtElement = this.svgFactory.createElement("svg:text"), S.txtgrp = this.svgFactory.createElement("svg:g"), S.xcoords = [], S.ycoords = [];
                }
              }, {
                key: "moveText",
                value: function(S, h) {
                  var A = this.current;
                  A.x = A.lineX += S, A.y = A.lineY += h, A.xcoords = [], A.ycoords = [], A.tspan = this.svgFactory.createElement("svg:tspan"), A.tspan.setAttributeNS(null, "font-family", A.fontFamily), A.tspan.setAttributeNS(null, "font-size", "".concat(p(A.fontSize), "px")), A.tspan.setAttributeNS(null, "y", p(-A.y));
                }
              }, {
                key: "showText",
                value: function(S) {
                  var h = this.current, A = h.font, C = h.fontSize;
                  if (C !== 0) {
                    var $ = h.fontSizeScale, Z = h.charSpacing, z = h.wordSpacing, he = h.fontDirection, _e = h.textHScale * he, Te = A.vertical, j = Te ? 1 : -1, I = A.defaultVMetrics, f = C * h.fontMatrix[0], l = 0, _ = w(S), N;
                    try {
                      for (_.s(); !(N = _.n()).done; ) {
                        var G = N.value;
                        if (G === null) {
                          l += he * z;
                          continue;
                        } else if ((0, e.isNum)(G)) {
                          l += j * G * C / 1e3;
                          continue;
                        }
                        var ee = (G.isSpace ? z : 0) + Z, ce = G.fontChar, ye = void 0, be = void 0, me = G.width;
                        if (Te) {
                          var Pe = void 0, Ce = G.vmetric || I;
                          Pe = G.vmetric ? Ce[1] : me * 0.5, Pe = -Pe * f;
                          var xe = Ce[2] * f;
                          me = Ce ? -Ce[0] : me, ye = Pe / $, be = (l + xe) / $;
                        } else
                          ye = l / $, be = 0;
                        (G.isInFont || A.missingFile) && (h.xcoords.push(h.x + ye), Te && h.ycoords.push(-h.y + be), h.tspan.textContent += ce);
                        var Fe = void 0;
                        Te ? Fe = me * f - ee * he : Fe = me * f + ee * he, l += Fe;
                      }
                    } catch (de) {
                      _.e(de);
                    } finally {
                      _.f();
                    }
                    h.tspan.setAttributeNS(null, "x", h.xcoords.map(p).join(" ")), Te ? h.tspan.setAttributeNS(null, "y", h.ycoords.map(p).join(" ")) : h.tspan.setAttributeNS(null, "y", p(-h.y)), Te ? h.y -= l : h.x += l * _e, h.tspan.setAttributeNS(null, "font-family", h.fontFamily), h.tspan.setAttributeNS(null, "font-size", "".concat(p(h.fontSize), "px")), h.fontStyle !== m.fontStyle && h.tspan.setAttributeNS(null, "font-style", h.fontStyle), h.fontWeight !== m.fontWeight && h.tspan.setAttributeNS(null, "font-weight", h.fontWeight);
                    var Me = h.textRenderingMode & e.TextRenderingMode.FILL_STROKE_MASK;
                    if (Me === e.TextRenderingMode.FILL || Me === e.TextRenderingMode.FILL_STROKE ? (h.fillColor !== m.fillColor && h.tspan.setAttributeNS(null, "fill", h.fillColor), h.fillAlpha < 1 && h.tspan.setAttributeNS(null, "fill-opacity", h.fillAlpha)) : h.textRenderingMode === e.TextRenderingMode.ADD_TO_PATH ? h.tspan.setAttributeNS(null, "fill", "transparent") : h.tspan.setAttributeNS(null, "fill", "none"), Me === e.TextRenderingMode.STROKE || Me === e.TextRenderingMode.FILL_STROKE) {
                      var Ue = 1 / (h.textMatrixScale || 1);
                      this._setStrokeAttributes(h.tspan, Ue);
                    }
                    var Ve = h.textMatrix;
                    h.textRise !== 0 && (Ve = Ve.slice(), Ve[5] += h.textRise), h.txtElement.setAttributeNS(null, "transform", "".concat(b(Ve), " scale(").concat(p(_e), ", -1)")), h.txtElement.setAttributeNS(y, "xml:space", "preserve"), h.txtElement.appendChild(h.tspan), h.txtgrp.appendChild(h.txtElement), this._ensureTransformGroup().appendChild(h.txtElement);
                  }
                }
              }, {
                key: "setLeadingMoveText",
                value: function(S, h) {
                  this.setLeading(-h), this.moveText(S, h);
                }
              }, {
                key: "addFontStyle",
                value: function(S) {
                  if (!S.data)
                    throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                  this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.appendChild(this.cssStyle));
                  var h = (0, e.createObjectURL)(S.data, S.mimetype, this.forceDataSchema);
                  this.cssStyle.textContent += '@font-face { font-family: "'.concat(S.loadedName, '";') + " src: url(".concat(h, `); }
`);
                }
              }, {
                key: "setFont",
                value: function(S) {
                  var h = this.current, A = this.commonObjs.get(S[0]), C = S[1];
                  h.font = A, this.embedFonts && !A.missingFile && !this.embeddedFonts[A.loadedName] && (this.addFontStyle(A), this.embeddedFonts[A.loadedName] = A), h.fontMatrix = A.fontMatrix || e.FONT_IDENTITY_MATRIX;
                  var $ = "normal";
                  A.black ? $ = "900" : A.bold && ($ = "bold");
                  var Z = A.italic ? "italic" : "normal";
                  C < 0 ? (C = -C, h.fontDirection = -1) : h.fontDirection = 1, h.fontSize = C, h.fontFamily = A.loadedName, h.fontWeight = $, h.fontStyle = Z, h.tspan = this.svgFactory.createElement("svg:tspan"), h.tspan.setAttributeNS(null, "y", p(-h.y)), h.xcoords = [], h.ycoords = [];
                }
              }, {
                key: "endText",
                value: function() {
                  var S, h = this.current;
                  h.textRenderingMode & e.TextRenderingMode.ADD_TO_PATH_FLAG && (S = h.txtElement) !== null && S !== void 0 && S.hasChildNodes() && (h.element = h.txtElement, this.clip("nonzero"), this.endPath());
                }
              }, {
                key: "setLineWidth",
                value: function(S) {
                  S > 0 && (this.current.lineWidth = S);
                }
              }, {
                key: "setLineCap",
                value: function(S) {
                  this.current.lineCap = M[S];
                }
              }, {
                key: "setLineJoin",
                value: function(S) {
                  this.current.lineJoin = H[S];
                }
              }, {
                key: "setMiterLimit",
                value: function(S) {
                  this.current.miterLimit = S;
                }
              }, {
                key: "setStrokeAlpha",
                value: function(S) {
                  this.current.strokeAlpha = S;
                }
              }, {
                key: "setStrokeRGBColor",
                value: function(S, h, A) {
                  this.current.strokeColor = e.Util.makeHexColor(S, h, A);
                }
              }, {
                key: "setFillAlpha",
                value: function(S) {
                  this.current.fillAlpha = S;
                }
              }, {
                key: "setFillRGBColor",
                value: function(S, h, A) {
                  this.current.fillColor = e.Util.makeHexColor(S, h, A), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
                }
              }, {
                key: "setStrokeColorN",
                value: function(S) {
                  this.current.strokeColor = this._makeColorN_Pattern(S);
                }
              }, {
                key: "setFillColorN",
                value: function(S) {
                  this.current.fillColor = this._makeColorN_Pattern(S);
                }
              }, {
                key: "shadingFill",
                value: function(S) {
                  var h = this.viewport.width, A = this.viewport.height, C = e.Util.inverseTransform(this.transformMatrix), $ = e.Util.applyTransform([0, 0], C), Z = e.Util.applyTransform([0, A], C), z = e.Util.applyTransform([h, 0], C), he = e.Util.applyTransform([h, A], C), _e = Math.min($[0], Z[0], z[0], he[0]), Te = Math.min($[1], Z[1], z[1], he[1]), j = Math.max($[0], Z[0], z[0], he[0]), I = Math.max($[1], Z[1], z[1], he[1]), f = this.svgFactory.createElement("svg:rect");
                  f.setAttributeNS(null, "x", _e), f.setAttributeNS(null, "y", Te), f.setAttributeNS(null, "width", j - _e), f.setAttributeNS(null, "height", I - Te), f.setAttributeNS(null, "fill", this._makeShadingPattern(S)), this.current.fillAlpha < 1 && f.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().appendChild(f);
                }
              }, {
                key: "_makeColorN_Pattern",
                value: function(S) {
                  return S[0] === "TilingPattern" ? this._makeTilingPattern(S) : this._makeShadingPattern(S);
                }
              }, {
                key: "_makeTilingPattern",
                value: function(S) {
                  var h = S[1], A = S[2], C = S[3] || e.IDENTITY_MATRIX, $ = F(S[4], 4), Z = $[0], z = $[1], he = $[2], _e = $[3], Te = S[5], j = S[6], I = S[7], f = "shading".concat(oe++), l = e.Util.normalizeRect([].concat(d(e.Util.applyTransform([Z, z], C)), d(e.Util.applyTransform([he, _e], C)))), _ = F(l, 4), N = _[0], G = _[1], ee = _[2], ce = _[3], ye = e.Util.singularValueDecompose2dScale(C), be = F(ye, 2), me = be[0], Pe = be[1], Ce = Te * me, xe = j * Pe, Fe = this.svgFactory.createElement("svg:pattern");
                  Fe.setAttributeNS(null, "id", f), Fe.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), Fe.setAttributeNS(null, "width", Ce), Fe.setAttributeNS(null, "height", xe), Fe.setAttributeNS(null, "x", "".concat(N)), Fe.setAttributeNS(null, "y", "".concat(G));
                  var Me = this.svg, Ue = this.transformMatrix, Ve = this.current.fillColor, de = this.current.strokeColor, pe = this.svgFactory.create(ee - N, ce - G);
                  if (this.svg = pe, this.transformMatrix = C, I === 2) {
                    var V = e.Util.makeHexColor.apply(e.Util, d(h));
                    this.current.fillColor = V, this.current.strokeColor = V;
                  }
                  return this.executeOpTree(this.convertOpList(A)), this.svg = Me, this.transformMatrix = Ue, this.current.fillColor = Ve, this.current.strokeColor = de, Fe.appendChild(pe.childNodes[0]), this.defs.appendChild(Fe), "url(#".concat(f, ")");
                }
              }, {
                key: "_makeShadingPattern",
                value: function(S) {
                  switch (typeof S == "string" && (S = this.objs.get(S)), S[0]) {
                    case "RadialAxial":
                      var h = "shading".concat(oe++), A = S[3], C;
                      switch (S[1]) {
                        case "axial":
                          var $ = S[4], Z = S[5];
                          C = this.svgFactory.createElement("svg:linearGradient"), C.setAttributeNS(null, "id", h), C.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), C.setAttributeNS(null, "x1", $[0]), C.setAttributeNS(null, "y1", $[1]), C.setAttributeNS(null, "x2", Z[0]), C.setAttributeNS(null, "y2", Z[1]);
                          break;
                        case "radial":
                          var z = S[4], he = S[5], _e = S[6], Te = S[7];
                          C = this.svgFactory.createElement("svg:radialGradient"), C.setAttributeNS(null, "id", h), C.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), C.setAttributeNS(null, "cx", he[0]), C.setAttributeNS(null, "cy", he[1]), C.setAttributeNS(null, "r", Te), C.setAttributeNS(null, "fx", z[0]), C.setAttributeNS(null, "fy", z[1]), C.setAttributeNS(null, "fr", _e);
                          break;
                        default:
                          throw new Error("Unknown RadialAxial type: ".concat(S[1]));
                      }
                      var j = w(A), I;
                      try {
                        for (j.s(); !(I = j.n()).done; ) {
                          var f = I.value, l = this.svgFactory.createElement("svg:stop");
                          l.setAttributeNS(null, "offset", f[0]), l.setAttributeNS(null, "stop-color", f[1]), C.appendChild(l);
                        }
                      } catch (_) {
                        j.e(_);
                      } finally {
                        j.f();
                      }
                      return this.defs.appendChild(C), "url(#".concat(h, ")");
                    case "Mesh":
                      return (0, e.warn)("Unimplemented pattern Mesh"), null;
                    case "Dummy":
                      return "hotpink";
                    default:
                      throw new Error("Unknown IR type: ".concat(S[0]));
                  }
                }
              }, {
                key: "setDash",
                value: function(S, h) {
                  this.current.dashArray = S, this.current.dashPhase = h;
                }
              }, {
                key: "constructPath",
                value: function(S, h) {
                  var A = this.current, C = A.x, $ = A.y, Z = [], z = 0, he = w(S), _e;
                  try {
                    for (he.s(); !(_e = he.n()).done; ) {
                      var Te = _e.value;
                      switch (Te | 0) {
                        case e.OPS.rectangle:
                          C = h[z++], $ = h[z++];
                          var j = h[z++], I = h[z++], f = C + j, l = $ + I;
                          Z.push("M", p(C), p($), "L", p(f), p($), "L", p(f), p(l), "L", p(C), p(l), "Z");
                          break;
                        case e.OPS.moveTo:
                          C = h[z++], $ = h[z++], Z.push("M", p(C), p($));
                          break;
                        case e.OPS.lineTo:
                          C = h[z++], $ = h[z++], Z.push("L", p(C), p($));
                          break;
                        case e.OPS.curveTo:
                          C = h[z + 4], $ = h[z + 5], Z.push("C", p(h[z]), p(h[z + 1]), p(h[z + 2]), p(h[z + 3]), p(C), p($)), z += 6;
                          break;
                        case e.OPS.curveTo2:
                          Z.push("C", p(C), p($), p(h[z]), p(h[z + 1]), p(h[z + 2]), p(h[z + 3])), C = h[z + 2], $ = h[z + 3], z += 4;
                          break;
                        case e.OPS.curveTo3:
                          C = h[z + 2], $ = h[z + 3], Z.push("C", p(h[z]), p(h[z + 1]), p(C), p($), p(C), p($)), z += 4;
                          break;
                        case e.OPS.closePath:
                          Z.push("Z");
                          break;
                      }
                    }
                  } catch (_) {
                    he.e(_);
                  } finally {
                    he.f();
                  }
                  Z = Z.join(" "), A.path && S.length > 0 && S[0] !== e.OPS.rectangle && S[0] !== e.OPS.moveTo ? Z = A.path.getAttributeNS(null, "d") + Z : (A.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().appendChild(A.path)), A.path.setAttributeNS(null, "d", Z), A.path.setAttributeNS(null, "fill", "none"), A.element = A.path, A.setCurrentPoint(C, $);
                }
              }, {
                key: "endPath",
                value: function() {
                  var S = this.current;
                  if (S.path = null, !!this.pendingClip) {
                    if (!S.element) {
                      this.pendingClip = null;
                      return;
                    }
                    var h = "clippath".concat(te++), A = this.svgFactory.createElement("svg:clipPath");
                    A.setAttributeNS(null, "id", h), A.setAttributeNS(null, "transform", b(this.transformMatrix));
                    var C = S.element.cloneNode(!0);
                    if (this.pendingClip === "evenodd" ? C.setAttributeNS(null, "clip-rule", "evenodd") : C.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, A.appendChild(C), this.defs.appendChild(A), S.activeClipUrl) {
                      S.clipGroup = null;
                      var $ = w(this.extraStack), Z;
                      try {
                        for ($.s(); !(Z = $.n()).done; ) {
                          var z = Z.value;
                          z.clipGroup = null;
                        }
                      } catch (he) {
                        $.e(he);
                      } finally {
                        $.f();
                      }
                      A.setAttributeNS(null, "clip-path", S.activeClipUrl);
                    }
                    S.activeClipUrl = "url(#".concat(h, ")"), this.tgrp = null;
                  }
                }
              }, {
                key: "clip",
                value: function(S) {
                  this.pendingClip = S;
                }
              }, {
                key: "closePath",
                value: function() {
                  var S = this.current;
                  if (S.path) {
                    var h = "".concat(S.path.getAttributeNS(null, "d"), "Z");
                    S.path.setAttributeNS(null, "d", h);
                  }
                }
              }, {
                key: "setLeading",
                value: function(S) {
                  this.current.leading = -S;
                }
              }, {
                key: "setTextRise",
                value: function(S) {
                  this.current.textRise = S;
                }
              }, {
                key: "setTextRenderingMode",
                value: function(S) {
                  this.current.textRenderingMode = S;
                }
              }, {
                key: "setHScale",
                value: function(S) {
                  this.current.textHScale = S / 100;
                }
              }, {
                key: "setRenderingIntent",
                value: function(S) {
                }
              }, {
                key: "setFlatness",
                value: function(S) {
                }
              }, {
                key: "setGState",
                value: function(S) {
                  var h = w(S), A;
                  try {
                    for (h.s(); !(A = h.n()).done; ) {
                      var C = F(A.value, 2), $ = C[0], Z = C[1];
                      switch ($) {
                        case "LW":
                          this.setLineWidth(Z);
                          break;
                        case "LC":
                          this.setLineCap(Z);
                          break;
                        case "LJ":
                          this.setLineJoin(Z);
                          break;
                        case "ML":
                          this.setMiterLimit(Z);
                          break;
                        case "D":
                          this.setDash(Z[0], Z[1]);
                          break;
                        case "RI":
                          this.setRenderingIntent(Z);
                          break;
                        case "FL":
                          this.setFlatness(Z);
                          break;
                        case "Font":
                          this.setFont(Z);
                          break;
                        case "CA":
                          this.setStrokeAlpha(Z);
                          break;
                        case "ca":
                          this.setFillAlpha(Z);
                          break;
                        default:
                          (0, e.warn)("Unimplemented graphic state operator ".concat($));
                          break;
                      }
                    }
                  } catch (z) {
                    h.e(z);
                  } finally {
                    h.f();
                  }
                }
              }, {
                key: "fill",
                value: function() {
                  var S = this.current;
                  S.element && (S.element.setAttributeNS(null, "fill", S.fillColor), S.element.setAttributeNS(null, "fill-opacity", S.fillAlpha), this.endPath());
                }
              }, {
                key: "stroke",
                value: function() {
                  var S = this.current;
                  S.element && (this._setStrokeAttributes(S.element), S.element.setAttributeNS(null, "fill", "none"), this.endPath());
                }
              }, {
                key: "_setStrokeAttributes",
                value: function(S) {
                  var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, A = this.current, C = A.dashArray;
                  h !== 1 && C.length > 0 && (C = C.map(function($) {
                    return h * $;
                  })), S.setAttributeNS(null, "stroke", A.strokeColor), S.setAttributeNS(null, "stroke-opacity", A.strokeAlpha), S.setAttributeNS(null, "stroke-miterlimit", p(A.miterLimit)), S.setAttributeNS(null, "stroke-linecap", A.lineCap), S.setAttributeNS(null, "stroke-linejoin", A.lineJoin), S.setAttributeNS(null, "stroke-width", p(h * A.lineWidth) + "px"), S.setAttributeNS(null, "stroke-dasharray", C.map(p).join(" ")), S.setAttributeNS(null, "stroke-dashoffset", p(h * A.dashPhase) + "px");
                }
              }, {
                key: "eoFill",
                value: function() {
                  this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
                }
              }, {
                key: "fillStroke",
                value: function() {
                  this.stroke(), this.fill();
                }
              }, {
                key: "eoFillStroke",
                value: function() {
                  this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
                }
              }, {
                key: "closeStroke",
                value: function() {
                  this.closePath(), this.stroke();
                }
              }, {
                key: "closeFillStroke",
                value: function() {
                  this.closePath(), this.fillStroke();
                }
              }, {
                key: "closeEOFillStroke",
                value: function() {
                  this.closePath(), this.eoFillStroke();
                }
              }, {
                key: "paintSolidColorImageMask",
                value: function() {
                  var S = this.svgFactory.createElement("svg:rect");
                  S.setAttributeNS(null, "x", "0"), S.setAttributeNS(null, "y", "0"), S.setAttributeNS(null, "width", "1px"), S.setAttributeNS(null, "height", "1px"), S.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().appendChild(S);
                }
              }, {
                key: "paintImageXObject",
                value: function(S) {
                  var h = S.startsWith("g_") ? this.commonObjs.get(S) : this.objs.get(S);
                  if (!h) {
                    (0, e.warn)("Dependent image with object ID ".concat(S, " is not ready yet"));
                    return;
                  }
                  this.paintInlineImageXObject(h);
                }
              }, {
                key: "paintInlineImageXObject",
                value: function(S, h) {
                  var A = S.width, C = S.height, $ = L(S, this.forceDataSchema, !!h), Z = this.svgFactory.createElement("svg:rect");
                  Z.setAttributeNS(null, "x", "0"), Z.setAttributeNS(null, "y", "0"), Z.setAttributeNS(null, "width", p(A)), Z.setAttributeNS(null, "height", p(C)), this.current.element = Z, this.clip("nonzero");
                  var z = this.svgFactory.createElement("svg:image");
                  z.setAttributeNS(T, "xlink:href", $), z.setAttributeNS(null, "x", "0"), z.setAttributeNS(null, "y", p(-C)), z.setAttributeNS(null, "width", p(A) + "px"), z.setAttributeNS(null, "height", p(C) + "px"), z.setAttributeNS(null, "transform", "scale(".concat(p(1 / A), " ").concat(p(-1 / C), ")")), h ? h.appendChild(z) : this._ensureTransformGroup().appendChild(z);
                }
              }, {
                key: "paintImageMaskXObject",
                value: function(S) {
                  var h = this.current, A = S.width, C = S.height, $ = h.fillColor;
                  h.maskId = "mask".concat(K++);
                  var Z = this.svgFactory.createElement("svg:mask");
                  Z.setAttributeNS(null, "id", h.maskId);
                  var z = this.svgFactory.createElement("svg:rect");
                  z.setAttributeNS(null, "x", "0"), z.setAttributeNS(null, "y", "0"), z.setAttributeNS(null, "width", p(A)), z.setAttributeNS(null, "height", p(C)), z.setAttributeNS(null, "fill", $), z.setAttributeNS(null, "mask", "url(#".concat(h.maskId, ")")), this.defs.appendChild(Z), this._ensureTransformGroup().appendChild(z), this.paintInlineImageXObject(S, Z);
                }
              }, {
                key: "paintFormXObjectBegin",
                value: function(S, h) {
                  if (Array.isArray(S) && S.length === 6 && this.transform(S[0], S[1], S[2], S[3], S[4], S[5]), h) {
                    var A = h[2] - h[0], C = h[3] - h[1], $ = this.svgFactory.createElement("svg:rect");
                    $.setAttributeNS(null, "x", h[0]), $.setAttributeNS(null, "y", h[1]), $.setAttributeNS(null, "width", p(A)), $.setAttributeNS(null, "height", p(C)), this.current.element = $, this.clip("nonzero"), this.endPath();
                  }
                }
              }, {
                key: "paintFormXObjectEnd",
                value: function() {
                }
              }, {
                key: "_initialize",
                value: function(S) {
                  var h = this.svgFactory.create(S.width, S.height), A = this.svgFactory.createElement("svg:defs");
                  h.appendChild(A), this.defs = A;
                  var C = this.svgFactory.createElement("svg:g");
                  return C.setAttributeNS(null, "transform", b(S.transform)), h.appendChild(C), this.svg = C, h;
                }
              }, {
                key: "_ensureClipGroup",
                value: function() {
                  if (!this.current.clipGroup) {
                    var S = this.svgFactory.createElement("svg:g");
                    S.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.appendChild(S), this.current.clipGroup = S;
                  }
                  return this.current.clipGroup;
                }
              }, {
                key: "_ensureTransformGroup",
                value: function() {
                  return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", b(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)), this.tgrp;
                }
              }]), q;
            }();
          }
        },
        (i, a, t) => {
          function e(h) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(C) {
              return typeof C;
            } : e = function(C) {
              return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
            }, e(h);
          }
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.PDFNodeStream = void 0;
          var n = u(t(2)), o = t(4), d = t(154);
          function u(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function g(h, A) {
            if (typeof A != "function" && A !== null)
              throw new TypeError("Super expression must either be null or a function");
            h.prototype = Object.create(A && A.prototype, { constructor: { value: h, writable: !0, configurable: !0 } }), A && P(h, A);
          }
          function P(h, A) {
            return P = Object.setPrototypeOf || function($, Z) {
              return $.__proto__ = Z, $;
            }, P(h, A);
          }
          function F(h) {
            var A = x();
            return function() {
              var $ = w(h), Z;
              if (A) {
                var z = w(this).constructor;
                Z = Reflect.construct($, arguments, z);
              } else
                Z = $.apply(this, arguments);
              return D(this, Z);
            };
          }
          function D(h, A) {
            if (A && (e(A) === "object" || typeof A == "function"))
              return A;
            if (A !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return B(h);
          }
          function B(h) {
            if (h === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h;
          }
          function x() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }
          function w(h) {
            return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
              return C.__proto__ || Object.getPrototypeOf(C);
            }, w(h);
          }
          function O(h, A, C, $, Z, z, he) {
            try {
              var _e = h[z](he), Te = _e.value;
            } catch (j) {
              C(j);
              return;
            }
            _e.done ? A(Te) : Promise.resolve(Te).then($, Z);
          }
          function k(h) {
            return function() {
              var A = this, C = arguments;
              return new Promise(function($, Z) {
                var z = h.apply(A, C);
                function he(Te) {
                  O(z, $, Z, he, _e, "next", Te);
                }
                function _e(Te) {
                  O(z, $, Z, he, _e, "throw", Te);
                }
                he(void 0);
              });
            };
          }
          function W(h, A) {
            var C = typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
            if (!C) {
              if (Array.isArray(h) || (C = R(h)) || A && h && typeof h.length == "number") {
                C && (h = C);
                var $ = 0, Z = function() {
                };
                return { s: Z, n: function() {
                  return $ >= h.length ? { done: !0 } : { done: !1, value: h[$++] };
                }, e: function(j) {
                  throw j;
                }, f: Z };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var z = !0, he = !1, _e;
            return { s: function() {
              C = C.call(h);
            }, n: function() {
              var j = C.next();
              return z = j.done, j;
            }, e: function(j) {
              he = !0, _e = j;
            }, f: function() {
              try {
                !z && C.return != null && C.return();
              } finally {
                if (he)
                  throw _e;
              }
            } };
          }
          function R(h, A) {
            if (!!h) {
              if (typeof h == "string")
                return U(h, A);
              var C = Object.prototype.toString.call(h).slice(8, -1);
              if (C === "Object" && h.constructor && (C = h.constructor.name), C === "Map" || C === "Set")
                return Array.from(h);
              if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))
                return U(h, A);
            }
          }
          function U(h, A) {
            (A == null || A > h.length) && (A = h.length);
            for (var C = 0, $ = new Array(A); C < A; C++)
              $[C] = h[C];
            return $;
          }
          function v(h, A) {
            if (!(h instanceof A))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(h, A) {
            for (var C = 0; C < A.length; C++) {
              var $ = A[C];
              $.enumerable = $.enumerable || !1, $.configurable = !0, "value" in $ && ($.writable = !0), Object.defineProperty(h, $.key, $);
            }
          }
          function p(h, A, C) {
            return A && c(h.prototype, A), C && c(h, C), h;
          }
          var b = require$$5, m = require$$5, y = require$$5, T = require$$5, M = /^file:\/\/\/[a-zA-Z]:\//;
          function H(h) {
            var A = T.parse(h);
            return A.protocol === "file:" || A.host ? A : /^[a-z]:[/\\]/i.test(h) ? T.parse("file:///".concat(h)) : (A.host || (A.protocol = "file:"), A);
          }
          var L = /* @__PURE__ */ function() {
            function h(A) {
              v(this, h), this.source = A, this.url = H(A.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && A.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            return p(h, [{
              key: "_progressiveDataLength",
              get: function() {
                var C, $;
                return (C = ($ = this._fullRequestReader) === null || $ === void 0 ? void 0 : $._loaded) !== null && C !== void 0 ? C : 0;
              }
            }, {
              key: "getFullReader",
              value: function() {
                return (0, o.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new X(this) : new oe(this), this._fullRequestReader;
              }
            }, {
              key: "getRangeReader",
              value: function(C, $) {
                if ($ <= this._progressiveDataLength)
                  return null;
                var Z = this.isFsUrl ? new S(this, C, $) : new q(this, C, $);
                return this._rangeRequestReaders.push(Z), Z;
              }
            }, {
              key: "cancelAllRequests",
              value: function(C) {
                this._fullRequestReader && this._fullRequestReader.cancel(C);
                var $ = W(this._rangeRequestReaders.slice(0)), Z;
                try {
                  for ($.s(); !(Z = $.n()).done; ) {
                    var z = Z.value;
                    z.cancel(C);
                  }
                } catch (he) {
                  $.e(he);
                } finally {
                  $.f();
                }
              }
            }]), h;
          }();
          a.PDFNodeStream = L;
          var Y = /* @__PURE__ */ function() {
            function h(A) {
              v(this, h), this._url = A.url, this._done = !1, this._storedError = null, this.onProgress = null;
              var C = A.source;
              this._contentLength = C.length, this._loaded = 0, this._filename = null, this._disableRange = C.disableRange || !1, this._rangeChunkSize = C.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !C.disableStream, this._isRangeSupported = !C.disableRange, this._readableStream = null, this._readCapability = (0, o.createPromiseCapability)(), this._headersCapability = (0, o.createPromiseCapability)();
            }
            return p(h, [{
              key: "headersReady",
              get: function() {
                return this._headersCapability.promise;
              }
            }, {
              key: "filename",
              get: function() {
                return this._filename;
              }
            }, {
              key: "contentLength",
              get: function() {
                return this._contentLength;
              }
            }, {
              key: "isRangeSupported",
              get: function() {
                return this._isRangeSupported;
              }
            }, {
              key: "isStreamingSupported",
              get: function() {
                return this._isStreamingSupported;
              }
            }, {
              key: "read",
              value: function() {
                var A = k(/* @__PURE__ */ n.default.mark(function $() {
                  var Z, z;
                  return n.default.wrap(function(_e) {
                    for (; ; )
                      switch (_e.prev = _e.next) {
                        case 0:
                          return _e.next = 2, this._readCapability.promise;
                        case 2:
                          if (!this._done) {
                            _e.next = 4;
                            break;
                          }
                          return _e.abrupt("return", {
                            value: void 0,
                            done: !0
                          });
                        case 4:
                          if (!this._storedError) {
                            _e.next = 6;
                            break;
                          }
                          throw this._storedError;
                        case 6:
                          if (Z = this._readableStream.read(), Z !== null) {
                            _e.next = 10;
                            break;
                          }
                          return this._readCapability = (0, o.createPromiseCapability)(), _e.abrupt("return", this.read());
                        case 10:
                          return this._loaded += Z.length, this.onProgress && this.onProgress({
                            loaded: this._loaded,
                            total: this._contentLength
                          }), z = new Uint8Array(Z).buffer, _e.abrupt("return", {
                            value: z,
                            done: !1
                          });
                        case 14:
                        case "end":
                          return _e.stop();
                      }
                  }, $, this);
                }));
                function C() {
                  return A.apply(this, arguments);
                }
                return C;
              }()
            }, {
              key: "cancel",
              value: function(C) {
                if (!this._readableStream) {
                  this._error(C);
                  return;
                }
                this._readableStream.destroy(C);
              }
            }, {
              key: "_error",
              value: function(C) {
                this._storedError = C, this._readCapability.resolve();
              }
            }, {
              key: "_setReadableStream",
              value: function(C) {
                var $ = this;
                this._readableStream = C, C.on("readable", function() {
                  $._readCapability.resolve();
                }), C.on("end", function() {
                  C.destroy(), $._done = !0, $._readCapability.resolve();
                }), C.on("error", function(Z) {
                  $._error(Z);
                }), !this._isStreamingSupported && this._isRangeSupported && this._error(new o.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
              }
            }]), h;
          }(), te = /* @__PURE__ */ function() {
            function h(A) {
              v(this, h), this._url = A.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = (0, o.createPromiseCapability)();
              var C = A.source;
              this._isStreamingSupported = !C.disableStream;
            }
            return p(h, [{
              key: "isStreamingSupported",
              get: function() {
                return this._isStreamingSupported;
              }
            }, {
              key: "read",
              value: function() {
                var A = k(/* @__PURE__ */ n.default.mark(function $() {
                  var Z, z;
                  return n.default.wrap(function(_e) {
                    for (; ; )
                      switch (_e.prev = _e.next) {
                        case 0:
                          return _e.next = 2, this._readCapability.promise;
                        case 2:
                          if (!this._done) {
                            _e.next = 4;
                            break;
                          }
                          return _e.abrupt("return", {
                            value: void 0,
                            done: !0
                          });
                        case 4:
                          if (!this._storedError) {
                            _e.next = 6;
                            break;
                          }
                          throw this._storedError;
                        case 6:
                          if (Z = this._readableStream.read(), Z !== null) {
                            _e.next = 10;
                            break;
                          }
                          return this._readCapability = (0, o.createPromiseCapability)(), _e.abrupt("return", this.read());
                        case 10:
                          return this._loaded += Z.length, this.onProgress && this.onProgress({
                            loaded: this._loaded
                          }), z = new Uint8Array(Z).buffer, _e.abrupt("return", {
                            value: z,
                            done: !1
                          });
                        case 14:
                        case "end":
                          return _e.stop();
                      }
                  }, $, this);
                }));
                function C() {
                  return A.apply(this, arguments);
                }
                return C;
              }()
            }, {
              key: "cancel",
              value: function(C) {
                if (!this._readableStream) {
                  this._error(C);
                  return;
                }
                this._readableStream.destroy(C);
              }
            }, {
              key: "_error",
              value: function(C) {
                this._storedError = C, this._readCapability.resolve();
              }
            }, {
              key: "_setReadableStream",
              value: function(C) {
                var $ = this;
                this._readableStream = C, C.on("readable", function() {
                  $._readCapability.resolve();
                }), C.on("end", function() {
                  C.destroy(), $._done = !0, $._readCapability.resolve();
                }), C.on("error", function(Z) {
                  $._error(Z);
                }), this._storedError && this._readableStream.destroy(this._storedError);
              }
            }]), h;
          }();
          function K(h, A) {
            return {
              protocol: h.protocol,
              auth: h.auth,
              host: h.hostname,
              port: h.port,
              path: h.path,
              method: "GET",
              headers: A
            };
          }
          var oe = /* @__PURE__ */ function(h) {
            g(C, h);
            var A = F(C);
            function C($) {
              var Z;
              v(this, C), Z = A.call(this, $);
              var z = function(_e) {
                if (_e.statusCode === 404) {
                  var Te = new o.MissingPDFException('Missing PDF "'.concat(Z._url, '".'));
                  Z._storedError = Te, Z._headersCapability.reject(Te);
                  return;
                }
                Z._headersCapability.resolve(), Z._setReadableStream(_e);
                var j = function(N) {
                  return Z._readableStream.headers[N.toLowerCase()];
                }, I = (0, d.validateRangeRequestCapabilities)({
                  getResponseHeader: j,
                  isHttp: $.isHttp,
                  rangeChunkSize: Z._rangeChunkSize,
                  disableRange: Z._disableRange
                }), f = I.allowRangeRequests, l = I.suggestedLength;
                Z._isRangeSupported = f, Z._contentLength = l || Z._contentLength, Z._filename = (0, d.extractFilenameFromHeader)(j);
              };
              return Z._request = null, Z._url.protocol === "http:" ? Z._request = m.request(K(Z._url, $.httpHeaders), z) : Z._request = y.request(K(Z._url, $.httpHeaders), z), Z._request.on("error", function(he) {
                Z._storedError = he, Z._headersCapability.reject(he);
              }), Z._request.end(), Z;
            }
            return C;
          }(Y), q = /* @__PURE__ */ function(h) {
            g(C, h);
            var A = F(C);
            function C($, Z, z) {
              var he;
              v(this, C), he = A.call(this, $), he._httpHeaders = {};
              for (var _e in $.httpHeaders) {
                var Te = $.httpHeaders[_e];
                typeof Te > "u" || (he._httpHeaders[_e] = Te);
              }
              he._httpHeaders.Range = "bytes=".concat(Z, "-").concat(z - 1);
              var j = function(f) {
                if (f.statusCode === 404) {
                  var l = new o.MissingPDFException('Missing PDF "'.concat(he._url, '".'));
                  he._storedError = l;
                  return;
                }
                he._setReadableStream(f);
              };
              return he._request = null, he._url.protocol === "http:" ? he._request = m.request(K(he._url, he._httpHeaders), j) : he._request = y.request(K(he._url, he._httpHeaders), j), he._request.on("error", function(I) {
                he._storedError = I;
              }), he._request.end(), he;
            }
            return C;
          }(te), X = /* @__PURE__ */ function(h) {
            g(C, h);
            var A = F(C);
            function C($) {
              var Z;
              v(this, C), Z = A.call(this, $);
              var z = decodeURIComponent(Z._url.path);
              return M.test(Z._url.href) && (z = z.replace(/^\//, "")), b.lstat(z, function(he, _e) {
                if (he) {
                  he.code === "ENOENT" && (he = new o.MissingPDFException('Missing PDF "'.concat(z, '".'))), Z._storedError = he, Z._headersCapability.reject(he);
                  return;
                }
                Z._contentLength = _e.size, Z._setReadableStream(b.createReadStream(z)), Z._headersCapability.resolve();
              }), Z;
            }
            return C;
          }(Y), S = /* @__PURE__ */ function(h) {
            g(C, h);
            var A = F(C);
            function C($, Z, z) {
              var he;
              v(this, C), he = A.call(this, $);
              var _e = decodeURIComponent(he._url.path);
              return M.test(he._url.href) && (_e = _e.replace(/^\//, "")), he._setReadableStream(b.createReadStream(_e, {
                start: Z,
                end: z - 1
              })), he;
            }
            return C;
          }(te);
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.createResponseStatusError = g, a.extractFilenameFromHeader = u, a.validateRangeRequestCapabilities = d, a.validateResponseStatus = P;
          var e = t(4), n = t(155), o = t(1);
          function d(F) {
            var D = F.getResponseHeader, B = F.isHttp, x = F.rangeChunkSize, w = F.disableRange;
            (0, e.assert)(x > 0, "Range chunk size must be larger than zero");
            var O = {
              allowRangeRequests: !1,
              suggestedLength: void 0
            }, k = parseInt(D("Content-Length"), 10);
            if (!Number.isInteger(k) || (O.suggestedLength = k, k <= 2 * x) || w || !B || D("Accept-Ranges") !== "bytes")
              return O;
            var W = D("Content-Encoding") || "identity";
            return W !== "identity" || (O.allowRangeRequests = !0), O;
          }
          function u(F) {
            var D = F("Content-Disposition");
            if (D) {
              var B = (0, n.getFilenameFromContentDispositionHeader)(D);
              if (B.includes("%"))
                try {
                  B = decodeURIComponent(B);
                } catch {
                }
              if ((0, o.isPdfFile)(B))
                return B;
            }
            return null;
          }
          function g(F, D) {
            return F === 404 || F === 0 && D.startsWith("file:") ? new e.MissingPDFException('Missing PDF "' + D + '".') : new e.UnexpectedResponseException("Unexpected server response (".concat(F, ') while retrieving PDF "').concat(D, '".'), F);
          }
          function P(F) {
            return F === 200 || F === 206;
          }
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.getFilenameFromContentDispositionHeader = F;
          var e = t(4);
          function n(D, B) {
            return P(D) || g(D, B) || d(D, B) || o();
          }
          function o() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function d(D, B) {
            if (!!D) {
              if (typeof D == "string")
                return u(D, B);
              var x = Object.prototype.toString.call(D).slice(8, -1);
              if (x === "Object" && D.constructor && (x = D.constructor.name), x === "Map" || x === "Set")
                return Array.from(D);
              if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))
                return u(D, B);
            }
          }
          function u(D, B) {
            (B == null || B > D.length) && (B = D.length);
            for (var x = 0, w = new Array(B); x < B; x++)
              w[x] = D[x];
            return w;
          }
          function g(D, B) {
            var x = D == null ? null : typeof Symbol < "u" && D[Symbol.iterator] || D["@@iterator"];
            if (x != null) {
              var w = [], O = !0, k = !1, W, R;
              try {
                for (x = x.call(D); !(O = (W = x.next()).done) && (w.push(W.value), !(B && w.length === B)); O = !0)
                  ;
              } catch (U) {
                k = !0, R = U;
              } finally {
                try {
                  !O && x.return != null && x.return();
                } finally {
                  if (k)
                    throw R;
                }
              }
              return w;
            }
          }
          function P(D) {
            if (Array.isArray(D))
              return D;
          }
          function F(D) {
            var B = !0, x = W("filename\\*", "i").exec(D);
            if (x) {
              x = x[1];
              var w = c(x);
              return w = unescape(w), w = p(w), w = b(w), U(w);
            }
            if (x = v(D), x) {
              var O = b(x);
              return U(O);
            }
            if (x = W("filename", "i").exec(D), x) {
              x = x[1];
              var k = c(x);
              return k = b(k), U(k);
            }
            function W(m, y) {
              return new RegExp("(?:^|;)\\s*" + m + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', y);
            }
            function R(m, y) {
              if (m) {
                if (!/^[\x00-\xFF]+$/.test(y))
                  return y;
                try {
                  var T = new TextDecoder(m, {
                    fatal: !0
                  }), M = (0, e.stringToBytes)(y);
                  y = T.decode(M), B = !1;
                } catch {
                  if (/^utf-?8$/i.test(m))
                    try {
                      y = decodeURIComponent(escape(y)), B = !1;
                    } catch {
                    }
                }
              }
              return y;
            }
            function U(m) {
              return B && /[\x80-\xff]/.test(m) && (m = R("utf-8", m), B && (m = R("iso-8859-1", m))), m;
            }
            function v(m) {
              for (var y = [], T, M = W("filename\\*((?!0\\d)\\d+)(\\*?)", "ig"); (T = M.exec(m)) !== null; ) {
                var H = T, L = n(H, 4), Y = L[1], te = L[2], K = L[3];
                if (Y = parseInt(Y, 10), Y in y) {
                  if (Y === 0)
                    break;
                  continue;
                }
                y[Y] = [te, K];
              }
              for (var oe = [], q = 0; q < y.length && q in y; ++q) {
                var X = n(y[q], 2), S = X[0], h = X[1];
                h = c(h), S && (h = unescape(h), q === 0 && (h = p(h))), oe.push(h);
              }
              return oe.join("");
            }
            function c(m) {
              if (m.startsWith('"')) {
                for (var y = m.slice(1).split('\\"'), T = 0; T < y.length; ++T) {
                  var M = y[T].indexOf('"');
                  M !== -1 && (y[T] = y[T].slice(0, M), y.length = T + 1), y[T] = y[T].replace(/\\(.)/g, "$1");
                }
                m = y.join('"');
              }
              return m;
            }
            function p(m) {
              var y = m.indexOf("'");
              if (y === -1)
                return m;
              var T = m.slice(0, y), M = m.slice(y + 1), H = M.replace(/^[^']*'/, "");
              return R(T, H);
            }
            function b(m) {
              return !m.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(m) ? m : m.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(y, T, M, H) {
                if (M === "q" || M === "Q")
                  return H = H.replace(/_/g, " "), H = H.replace(/=([0-9a-fA-F]{2})/g, function(L, Y) {
                    return String.fromCharCode(parseInt(Y, 16));
                  }), R(T, H);
                try {
                  H = atob(H);
                } catch {
                }
                return R(T, H);
              });
            }
            return "";
          }
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.PDFNetworkStream = void 0;
          var e = d(t(2)), n = t(4), o = t(154);
          function d(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function u(p, b, m, y, T, M, H) {
            try {
              var L = p[M](H), Y = L.value;
            } catch (te) {
              m(te);
              return;
            }
            L.done ? b(Y) : Promise.resolve(Y).then(y, T);
          }
          function g(p) {
            return function() {
              var b = this, m = arguments;
              return new Promise(function(y, T) {
                var M = p.apply(b, m);
                function H(Y) {
                  u(M, y, T, H, L, "next", Y);
                }
                function L(Y) {
                  u(M, y, T, H, L, "throw", Y);
                }
                H(void 0);
              });
            };
          }
          function P(p, b) {
            var m = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
            if (!m) {
              if (Array.isArray(p) || (m = F(p)) || b && p && typeof p.length == "number") {
                m && (p = m);
                var y = 0, T = function() {
                };
                return { s: T, n: function() {
                  return y >= p.length ? { done: !0 } : { done: !1, value: p[y++] };
                }, e: function(te) {
                  throw te;
                }, f: T };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var M = !0, H = !1, L;
            return { s: function() {
              m = m.call(p);
            }, n: function() {
              var te = m.next();
              return M = te.done, te;
            }, e: function(te) {
              H = !0, L = te;
            }, f: function() {
              try {
                !M && m.return != null && m.return();
              } finally {
                if (H)
                  throw L;
              }
            } };
          }
          function F(p, b) {
            if (!!p) {
              if (typeof p == "string")
                return D(p, b);
              var m = Object.prototype.toString.call(p).slice(8, -1);
              if (m === "Object" && p.constructor && (m = p.constructor.name), m === "Map" || m === "Set")
                return Array.from(p);
              if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
                return D(p, b);
            }
          }
          function D(p, b) {
            (b == null || b > p.length) && (b = p.length);
            for (var m = 0, y = new Array(b); m < b; m++)
              y[m] = p[m];
            return y;
          }
          function B(p, b) {
            if (!(p instanceof b))
              throw new TypeError("Cannot call a class as a function");
          }
          function x(p, b) {
            for (var m = 0; m < b.length; m++) {
              var y = b[m];
              y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(p, y.key, y);
            }
          }
          function w(p, b, m) {
            return b && x(p.prototype, b), m && x(p, m), p;
          }
          var O = 200, k = 206;
          function W(p) {
            var b = p.response;
            if (typeof b != "string")
              return b;
            var m = (0, n.stringToBytes)(b);
            return m.buffer;
          }
          var R = /* @__PURE__ */ function() {
            function p(b) {
              var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              B(this, p), this.url = b, this.isHttp = /^https?:/i.test(b), this.httpHeaders = this.isHttp && m.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = m.withCredentials || !1, this.getXhr = m.getXhr || function() {
                return new XMLHttpRequest();
              }, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
            }
            return w(p, [{
              key: "requestRange",
              value: function(m, y, T) {
                var M = {
                  begin: m,
                  end: y
                };
                for (var H in T)
                  M[H] = T[H];
                return this.request(M);
              }
            }, {
              key: "requestFull",
              value: function(m) {
                return this.request(m);
              }
            }, {
              key: "request",
              value: function(m) {
                var y = this.getXhr(), T = this.currXhrId++, M = this.pendingRequests[T] = {
                  xhr: y
                };
                y.open("GET", this.url), y.withCredentials = this.withCredentials;
                for (var H in this.httpHeaders) {
                  var L = this.httpHeaders[H];
                  typeof L > "u" || y.setRequestHeader(H, L);
                }
                return this.isHttp && "begin" in m && "end" in m ? (y.setRequestHeader("Range", "bytes=".concat(m.begin, "-").concat(m.end - 1)), M.expectedStatus = k) : M.expectedStatus = O, y.responseType = "arraybuffer", m.onError && (y.onerror = function(Y) {
                  m.onError(y.status);
                }), y.onreadystatechange = this.onStateChange.bind(this, T), y.onprogress = this.onProgress.bind(this, T), M.onHeadersReceived = m.onHeadersReceived, M.onDone = m.onDone, M.onError = m.onError, M.onProgress = m.onProgress, y.send(null), T;
              }
            }, {
              key: "onProgress",
              value: function(m, y) {
                var T, M = this.pendingRequests[m];
                !M || (T = M.onProgress) === null || T === void 0 || T.call(M, y);
              }
            }, {
              key: "onStateChange",
              value: function(m, y) {
                var T = this.pendingRequests[m];
                if (!!T) {
                  var M = T.xhr;
                  if (M.readyState >= 2 && T.onHeadersReceived && (T.onHeadersReceived(), delete T.onHeadersReceived), M.readyState === 4 && m in this.pendingRequests) {
                    if (delete this.pendingRequests[m], M.status === 0 && this.isHttp) {
                      var H;
                      (H = T.onError) === null || H === void 0 || H.call(T, M.status);
                      return;
                    }
                    var L = M.status || O, Y = L === O && T.expectedStatus === k;
                    if (!Y && L !== T.expectedStatus) {
                      var te;
                      (te = T.onError) === null || te === void 0 || te.call(T, M.status);
                      return;
                    }
                    var K = W(M);
                    if (L === k) {
                      var oe = M.getResponseHeader("Content-Range"), q = /bytes (\d+)-(\d+)\/(\d+)/.exec(oe);
                      T.onDone({
                        begin: parseInt(q[1], 10),
                        chunk: K
                      });
                    } else if (K)
                      T.onDone({
                        begin: 0,
                        chunk: K
                      });
                    else {
                      var X;
                      (X = T.onError) === null || X === void 0 || X.call(T, M.status);
                    }
                  }
                }
              }
            }, {
              key: "getRequestXhr",
              value: function(m) {
                return this.pendingRequests[m].xhr;
              }
            }, {
              key: "isPendingRequest",
              value: function(m) {
                return m in this.pendingRequests;
              }
            }, {
              key: "abortRequest",
              value: function(m) {
                var y = this.pendingRequests[m].xhr;
                delete this.pendingRequests[m], y.abort();
              }
            }]), p;
          }(), U = /* @__PURE__ */ function() {
            function p(b) {
              B(this, p), this._source = b, this._manager = new R(b.url, {
                httpHeaders: b.httpHeaders,
                withCredentials: b.withCredentials
              }), this._rangeChunkSize = b.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            return w(p, [{
              key: "_onRangeRequestReaderClosed",
              value: function(m) {
                var y = this._rangeRequestReaders.indexOf(m);
                y >= 0 && this._rangeRequestReaders.splice(y, 1);
              }
            }, {
              key: "getFullReader",
              value: function() {
                return (0, n.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new v(this._manager, this._source), this._fullRequestReader;
              }
            }, {
              key: "getRangeReader",
              value: function(m, y) {
                var T = new c(this._manager, m, y);
                return T.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(T), T;
              }
            }, {
              key: "cancelAllRequests",
              value: function(m) {
                var y;
                (y = this._fullRequestReader) === null || y === void 0 || y.cancel(m);
                var T = P(this._rangeRequestReaders.slice(0)), M;
                try {
                  for (T.s(); !(M = T.n()).done; ) {
                    var H = M.value;
                    H.cancel(m);
                  }
                } catch (L) {
                  T.e(L);
                } finally {
                  T.f();
                }
              }
            }]), p;
          }();
          a.PDFNetworkStream = U;
          var v = /* @__PURE__ */ function() {
            function p(b, m) {
              B(this, p), this._manager = b;
              var y = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = m.url, this._fullRequestId = b.requestFull(y), this._headersReceivedCapability = (0, n.createPromiseCapability)(), this._disableRange = m.disableRange || !1, this._contentLength = m.length, this._rangeChunkSize = m.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
            }
            return w(p, [{
              key: "_onHeadersReceived",
              value: function() {
                var m = this._fullRequestId, y = this._manager.getRequestXhr(m), T = function(te) {
                  return y.getResponseHeader(te);
                }, M = (0, o.validateRangeRequestCapabilities)({
                  getResponseHeader: T,
                  isHttp: this._manager.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                }), H = M.allowRangeRequests, L = M.suggestedLength;
                H && (this._isRangeSupported = !0), this._contentLength = L || this._contentLength, this._filename = (0, o.extractFilenameFromHeader)(T), this._isRangeSupported && this._manager.abortRequest(m), this._headersReceivedCapability.resolve();
              }
            }, {
              key: "_onDone",
              value: function(m) {
                if (m)
                  if (this._requests.length > 0) {
                    var y = this._requests.shift();
                    y.resolve({
                      value: m.chunk,
                      done: !1
                    });
                  } else
                    this._cachedChunks.push(m.chunk);
                if (this._done = !0, !(this._cachedChunks.length > 0)) {
                  var T = P(this._requests), M;
                  try {
                    for (T.s(); !(M = T.n()).done; ) {
                      var H = M.value;
                      H.resolve({
                        value: void 0,
                        done: !0
                      });
                    }
                  } catch (L) {
                    T.e(L);
                  } finally {
                    T.f();
                  }
                  this._requests.length = 0;
                }
              }
            }, {
              key: "_onError",
              value: function(m) {
                this._storedError = (0, o.createResponseStatusError)(m, this._url), this._headersReceivedCapability.reject(this._storedError);
                var y = P(this._requests), T;
                try {
                  for (y.s(); !(T = y.n()).done; ) {
                    var M = T.value;
                    M.reject(this._storedError);
                  }
                } catch (H) {
                  y.e(H);
                } finally {
                  y.f();
                }
                this._requests.length = 0, this._cachedChunks.length = 0;
              }
            }, {
              key: "_onProgress",
              value: function(m) {
                var y;
                (y = this.onProgress) === null || y === void 0 || y.call(this, {
                  loaded: m.loaded,
                  total: m.lengthComputable ? m.total : this._contentLength
                });
              }
            }, {
              key: "filename",
              get: function() {
                return this._filename;
              }
            }, {
              key: "isRangeSupported",
              get: function() {
                return this._isRangeSupported;
              }
            }, {
              key: "isStreamingSupported",
              get: function() {
                return this._isStreamingSupported;
              }
            }, {
              key: "contentLength",
              get: function() {
                return this._contentLength;
              }
            }, {
              key: "headersReady",
              get: function() {
                return this._headersReceivedCapability.promise;
              }
            }, {
              key: "read",
              value: function() {
                var b = g(/* @__PURE__ */ e.default.mark(function y() {
                  var T, M;
                  return e.default.wrap(function(L) {
                    for (; ; )
                      switch (L.prev = L.next) {
                        case 0:
                          if (!this._storedError) {
                            L.next = 2;
                            break;
                          }
                          throw this._storedError;
                        case 2:
                          if (!(this._cachedChunks.length > 0)) {
                            L.next = 5;
                            break;
                          }
                          return T = this._cachedChunks.shift(), L.abrupt("return", {
                            value: T,
                            done: !1
                          });
                        case 5:
                          if (!this._done) {
                            L.next = 7;
                            break;
                          }
                          return L.abrupt("return", {
                            value: void 0,
                            done: !0
                          });
                        case 7:
                          return M = (0, n.createPromiseCapability)(), this._requests.push(M), L.abrupt("return", M.promise);
                        case 10:
                        case "end":
                          return L.stop();
                      }
                  }, y, this);
                }));
                function m() {
                  return b.apply(this, arguments);
                }
                return m;
              }()
            }, {
              key: "cancel",
              value: function(m) {
                this._done = !0, this._headersReceivedCapability.reject(m);
                var y = P(this._requests), T;
                try {
                  for (y.s(); !(T = y.n()).done; ) {
                    var M = T.value;
                    M.resolve({
                      value: void 0,
                      done: !0
                    });
                  }
                } catch (H) {
                  y.e(H);
                } finally {
                  y.f();
                }
                this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
              }
            }]), p;
          }(), c = /* @__PURE__ */ function() {
            function p(b, m, y) {
              B(this, p), this._manager = b;
              var T = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = b.url, this._requestId = b.requestRange(m, y, T), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
            }
            return w(p, [{
              key: "_close",
              value: function() {
                var m;
                (m = this.onClosed) === null || m === void 0 || m.call(this, this);
              }
            }, {
              key: "_onDone",
              value: function(m) {
                var y = m.chunk;
                if (this._requests.length > 0) {
                  var T = this._requests.shift();
                  T.resolve({
                    value: y,
                    done: !1
                  });
                } else
                  this._queuedChunk = y;
                this._done = !0;
                var M = P(this._requests), H;
                try {
                  for (M.s(); !(H = M.n()).done; ) {
                    var L = H.value;
                    L.resolve({
                      value: void 0,
                      done: !0
                    });
                  }
                } catch (Y) {
                  M.e(Y);
                } finally {
                  M.f();
                }
                this._requests.length = 0, this._close();
              }
            }, {
              key: "_onError",
              value: function(m) {
                this._storedError = (0, o.createResponseStatusError)(m, this._url);
                var y = P(this._requests), T;
                try {
                  for (y.s(); !(T = y.n()).done; ) {
                    var M = T.value;
                    M.reject(this._storedError);
                  }
                } catch (H) {
                  y.e(H);
                } finally {
                  y.f();
                }
                this._requests.length = 0, this._queuedChunk = null;
              }
            }, {
              key: "_onProgress",
              value: function(m) {
                if (!this.isStreamingSupported) {
                  var y;
                  (y = this.onProgress) === null || y === void 0 || y.call(this, {
                    loaded: m.loaded
                  });
                }
              }
            }, {
              key: "isStreamingSupported",
              get: function() {
                return !1;
              }
            }, {
              key: "read",
              value: function() {
                var b = g(/* @__PURE__ */ e.default.mark(function y() {
                  var T, M;
                  return e.default.wrap(function(L) {
                    for (; ; )
                      switch (L.prev = L.next) {
                        case 0:
                          if (!this._storedError) {
                            L.next = 2;
                            break;
                          }
                          throw this._storedError;
                        case 2:
                          if (this._queuedChunk === null) {
                            L.next = 6;
                            break;
                          }
                          return T = this._queuedChunk, this._queuedChunk = null, L.abrupt("return", {
                            value: T,
                            done: !1
                          });
                        case 6:
                          if (!this._done) {
                            L.next = 8;
                            break;
                          }
                          return L.abrupt("return", {
                            value: void 0,
                            done: !0
                          });
                        case 8:
                          return M = (0, n.createPromiseCapability)(), this._requests.push(M), L.abrupt("return", M.promise);
                        case 11:
                        case "end":
                          return L.stop();
                      }
                  }, y, this);
                }));
                function m() {
                  return b.apply(this, arguments);
                }
                return m;
              }()
            }, {
              key: "cancel",
              value: function(m) {
                this._done = !0;
                var y = P(this._requests), T;
                try {
                  for (y.s(); !(T = y.n()).done; ) {
                    var M = T.value;
                    M.resolve({
                      value: void 0,
                      done: !0
                    });
                  }
                } catch (H) {
                  y.e(H);
                } finally {
                  y.f();
                }
                this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
              }
            }]), p;
          }();
        },
        (i, a, t) => {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.PDFFetchStream = void 0;
          var e = d(t(2)), n = t(4), o = t(154);
          function d(v) {
            return v && v.__esModule ? v : { default: v };
          }
          function u(v, c, p, b, m, y, T) {
            try {
              var M = v[y](T), H = M.value;
            } catch (L) {
              p(L);
              return;
            }
            M.done ? c(H) : Promise.resolve(H).then(b, m);
          }
          function g(v) {
            return function() {
              var c = this, p = arguments;
              return new Promise(function(b, m) {
                var y = v.apply(c, p);
                function T(H) {
                  u(y, b, m, T, M, "next", H);
                }
                function M(H) {
                  u(y, b, m, T, M, "throw", H);
                }
                T(void 0);
              });
            };
          }
          function P(v, c) {
            var p = typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
            if (!p) {
              if (Array.isArray(v) || (p = F(v)) || c && v && typeof v.length == "number") {
                p && (v = p);
                var b = 0, m = function() {
                };
                return { s: m, n: function() {
                  return b >= v.length ? { done: !0 } : { done: !1, value: v[b++] };
                }, e: function(L) {
                  throw L;
                }, f: m };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var y = !0, T = !1, M;
            return { s: function() {
              p = p.call(v);
            }, n: function() {
              var L = p.next();
              return y = L.done, L;
            }, e: function(L) {
              T = !0, M = L;
            }, f: function() {
              try {
                !y && p.return != null && p.return();
              } finally {
                if (T)
                  throw M;
              }
            } };
          }
          function F(v, c) {
            if (!!v) {
              if (typeof v == "string")
                return D(v, c);
              var p = Object.prototype.toString.call(v).slice(8, -1);
              if (p === "Object" && v.constructor && (p = v.constructor.name), p === "Map" || p === "Set")
                return Array.from(v);
              if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
                return D(v, c);
            }
          }
          function D(v, c) {
            (c == null || c > v.length) && (c = v.length);
            for (var p = 0, b = new Array(c); p < c; p++)
              b[p] = v[p];
            return b;
          }
          function B(v, c) {
            if (!(v instanceof c))
              throw new TypeError("Cannot call a class as a function");
          }
          function x(v, c) {
            for (var p = 0; p < c.length; p++) {
              var b = c[p];
              b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(v, b.key, b);
            }
          }
          function w(v, c, p) {
            return c && x(v.prototype, c), p && x(v, p), v;
          }
          function O(v, c, p) {
            return {
              method: "GET",
              headers: v,
              signal: p == null ? void 0 : p.signal,
              mode: "cors",
              credentials: c ? "include" : "same-origin",
              redirect: "follow"
            };
          }
          function k(v) {
            var c = new Headers();
            for (var p in v) {
              var b = v[p];
              typeof b > "u" || c.append(p, b);
            }
            return c;
          }
          var W = /* @__PURE__ */ function() {
            function v(c) {
              B(this, v), this.source = c, this.isHttp = /^https?:/i.test(c.url), this.httpHeaders = this.isHttp && c.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            return w(v, [{
              key: "_progressiveDataLength",
              get: function() {
                var p, b;
                return (p = (b = this._fullRequestReader) === null || b === void 0 ? void 0 : b._loaded) !== null && p !== void 0 ? p : 0;
              }
            }, {
              key: "getFullReader",
              value: function() {
                return (0, n.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new R(this), this._fullRequestReader;
              }
            }, {
              key: "getRangeReader",
              value: function(p, b) {
                if (b <= this._progressiveDataLength)
                  return null;
                var m = new U(this, p, b);
                return this._rangeRequestReaders.push(m), m;
              }
            }, {
              key: "cancelAllRequests",
              value: function(p) {
                this._fullRequestReader && this._fullRequestReader.cancel(p);
                var b = P(this._rangeRequestReaders.slice(0)), m;
                try {
                  for (b.s(); !(m = b.n()).done; ) {
                    var y = m.value;
                    y.cancel(p);
                  }
                } catch (T) {
                  b.e(T);
                } finally {
                  b.f();
                }
              }
            }]), v;
          }();
          a.PDFFetchStream = W;
          var R = /* @__PURE__ */ function() {
            function v(c) {
              var p = this;
              B(this, v), this._stream = c, this._reader = null, this._loaded = 0, this._filename = null;
              var b = c.source;
              this._withCredentials = b.withCredentials || !1, this._contentLength = b.length, this._headersCapability = (0, n.createPromiseCapability)(), this._disableRange = b.disableRange || !1, this._rangeChunkSize = b.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), typeof AbortController < "u" && (this._abortController = new AbortController()), this._isStreamingSupported = !b.disableStream, this._isRangeSupported = !b.disableRange, this._headers = k(this._stream.httpHeaders);
              var m = b.url;
              fetch(m, O(this._headers, this._withCredentials, this._abortController)).then(function(y) {
                if (!(0, o.validateResponseStatus)(y.status))
                  throw (0, o.createResponseStatusError)(y.status, m);
                p._reader = y.body.getReader(), p._headersCapability.resolve();
                var T = function(te) {
                  return y.headers.get(te);
                }, M = (0, o.validateRangeRequestCapabilities)({
                  getResponseHeader: T,
                  isHttp: p._stream.isHttp,
                  rangeChunkSize: p._rangeChunkSize,
                  disableRange: p._disableRange
                }), H = M.allowRangeRequests, L = M.suggestedLength;
                p._isRangeSupported = H, p._contentLength = L || p._contentLength, p._filename = (0, o.extractFilenameFromHeader)(T), !p._isStreamingSupported && p._isRangeSupported && p.cancel(new n.AbortException("Streaming is disabled."));
              }).catch(this._headersCapability.reject), this.onProgress = null;
            }
            return w(v, [{
              key: "headersReady",
              get: function() {
                return this._headersCapability.promise;
              }
            }, {
              key: "filename",
              get: function() {
                return this._filename;
              }
            }, {
              key: "contentLength",
              get: function() {
                return this._contentLength;
              }
            }, {
              key: "isRangeSupported",
              get: function() {
                return this._isRangeSupported;
              }
            }, {
              key: "isStreamingSupported",
              get: function() {
                return this._isStreamingSupported;
              }
            }, {
              key: "read",
              value: function() {
                var c = g(/* @__PURE__ */ e.default.mark(function b() {
                  var m, y, T, M;
                  return e.default.wrap(function(L) {
                    for (; ; )
                      switch (L.prev = L.next) {
                        case 0:
                          return L.next = 2, this._headersCapability.promise;
                        case 2:
                          return L.next = 4, this._reader.read();
                        case 4:
                          if (m = L.sent, y = m.value, T = m.done, !T) {
                            L.next = 9;
                            break;
                          }
                          return L.abrupt("return", {
                            value: y,
                            done: T
                          });
                        case 9:
                          return this._loaded += y.byteLength, this.onProgress && this.onProgress({
                            loaded: this._loaded,
                            total: this._contentLength
                          }), M = new Uint8Array(y).buffer, L.abrupt("return", {
                            value: M,
                            done: !1
                          });
                        case 13:
                        case "end":
                          return L.stop();
                      }
                  }, b, this);
                }));
                function p() {
                  return c.apply(this, arguments);
                }
                return p;
              }()
            }, {
              key: "cancel",
              value: function(p) {
                this._reader && this._reader.cancel(p), this._abortController && this._abortController.abort();
              }
            }]), v;
          }(), U = /* @__PURE__ */ function() {
            function v(c, p, b) {
              var m = this;
              B(this, v), this._stream = c, this._reader = null, this._loaded = 0;
              var y = c.source;
              this._withCredentials = y.withCredentials || !1, this._readCapability = (0, n.createPromiseCapability)(), this._isStreamingSupported = !y.disableStream, typeof AbortController < "u" && (this._abortController = new AbortController()), this._headers = k(this._stream.httpHeaders), this._headers.append("Range", "bytes=".concat(p, "-").concat(b - 1));
              var T = y.url;
              fetch(T, O(this._headers, this._withCredentials, this._abortController)).then(function(M) {
                if (!(0, o.validateResponseStatus)(M.status))
                  throw (0, o.createResponseStatusError)(M.status, T);
                m._readCapability.resolve(), m._reader = M.body.getReader();
              }).catch(this._readCapability.reject), this.onProgress = null;
            }
            return w(v, [{
              key: "isStreamingSupported",
              get: function() {
                return this._isStreamingSupported;
              }
            }, {
              key: "read",
              value: function() {
                var c = g(/* @__PURE__ */ e.default.mark(function b() {
                  var m, y, T, M;
                  return e.default.wrap(function(L) {
                    for (; ; )
                      switch (L.prev = L.next) {
                        case 0:
                          return L.next = 2, this._readCapability.promise;
                        case 2:
                          return L.next = 4, this._reader.read();
                        case 4:
                          if (m = L.sent, y = m.value, T = m.done, !T) {
                            L.next = 9;
                            break;
                          }
                          return L.abrupt("return", {
                            value: y,
                            done: T
                          });
                        case 9:
                          return this._loaded += y.byteLength, this.onProgress && this.onProgress({
                            loaded: this._loaded
                          }), M = new Uint8Array(y).buffer, L.abrupt("return", {
                            value: M,
                            done: !1
                          });
                        case 13:
                        case "end":
                          return L.stop();
                      }
                  }, b, this);
                }));
                function p() {
                  return c.apply(this, arguments);
                }
                return p;
              }()
            }, {
              key: "cancel",
              value: function(p) {
                this._reader && this._reader.cancel(p), this._abortController && this._abortController.abort();
              }
            }]), v;
          }();
        }
      ], __webpack_module_cache__ = {};
      function __w_pdfjs_require__(i) {
        var a = __webpack_module_cache__[i];
        if (a !== void 0)
          return a.exports;
        var t = __webpack_module_cache__[i] = {
          id: i,
          loaded: !1,
          exports: {}
        };
        return __webpack_modules__[i].call(t.exports, t, t.exports, __w_pdfjs_require__), t.loaded = !0, t.exports;
      }
      __w_pdfjs_require__.nmd = (i) => (i.paths = [], i.children || (i.children = []), i);
      var __webpack_exports__ = {};
      return (() => {
        var i = __webpack_exports__;
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), Object.defineProperty(i, "AnnotationLayer", {
          enumerable: !0,
          get: function() {
            return n.AnnotationLayer;
          }
        }), Object.defineProperty(i, "AnnotationMode", {
          enumerable: !0,
          get: function() {
            return t.AnnotationMode;
          }
        }), Object.defineProperty(i, "CMapCompressionType", {
          enumerable: !0,
          get: function() {
            return t.CMapCompressionType;
          }
        }), Object.defineProperty(i, "GlobalWorkerOptions", {
          enumerable: !0,
          get: function() {
            return o.GlobalWorkerOptions;
          }
        }), Object.defineProperty(i, "InvalidPDFException", {
          enumerable: !0,
          get: function() {
            return t.InvalidPDFException;
          }
        }), Object.defineProperty(i, "LinkTarget", {
          enumerable: !0,
          get: function() {
            return a.LinkTarget;
          }
        }), Object.defineProperty(i, "LoopbackPort", {
          enumerable: !0,
          get: function() {
            return e.LoopbackPort;
          }
        }), Object.defineProperty(i, "MissingPDFException", {
          enumerable: !0,
          get: function() {
            return t.MissingPDFException;
          }
        }), Object.defineProperty(i, "OPS", {
          enumerable: !0,
          get: function() {
            return t.OPS;
          }
        }), Object.defineProperty(i, "PDFDataRangeTransport", {
          enumerable: !0,
          get: function() {
            return e.PDFDataRangeTransport;
          }
        }), Object.defineProperty(i, "PDFDateString", {
          enumerable: !0,
          get: function() {
            return a.PDFDateString;
          }
        }), Object.defineProperty(i, "PDFWorker", {
          enumerable: !0,
          get: function() {
            return e.PDFWorker;
          }
        }), Object.defineProperty(i, "PasswordResponses", {
          enumerable: !0,
          get: function() {
            return t.PasswordResponses;
          }
        }), Object.defineProperty(i, "PermissionFlag", {
          enumerable: !0,
          get: function() {
            return t.PermissionFlag;
          }
        }), Object.defineProperty(i, "PixelsPerInch", {
          enumerable: !0,
          get: function() {
            return a.PixelsPerInch;
          }
        }), Object.defineProperty(i, "RenderingCancelledException", {
          enumerable: !0,
          get: function() {
            return a.RenderingCancelledException;
          }
        }), Object.defineProperty(i, "SVGGraphics", {
          enumerable: !0,
          get: function() {
            return g.SVGGraphics;
          }
        }), Object.defineProperty(i, "UNSUPPORTED_FEATURES", {
          enumerable: !0,
          get: function() {
            return t.UNSUPPORTED_FEATURES;
          }
        }), Object.defineProperty(i, "UnexpectedResponseException", {
          enumerable: !0,
          get: function() {
            return t.UnexpectedResponseException;
          }
        }), Object.defineProperty(i, "Util", {
          enumerable: !0,
          get: function() {
            return t.Util;
          }
        }), Object.defineProperty(i, "VerbosityLevel", {
          enumerable: !0,
          get: function() {
            return t.VerbosityLevel;
          }
        }), Object.defineProperty(i, "XfaLayer", {
          enumerable: !0,
          get: function() {
            return P.XfaLayer;
          }
        }), Object.defineProperty(i, "addLinkAttributes", {
          enumerable: !0,
          get: function() {
            return a.addLinkAttributes;
          }
        }), Object.defineProperty(i, "build", {
          enumerable: !0,
          get: function() {
            return e.build;
          }
        }), Object.defineProperty(i, "createObjectURL", {
          enumerable: !0,
          get: function() {
            return t.createObjectURL;
          }
        }), Object.defineProperty(i, "createPromiseCapability", {
          enumerable: !0,
          get: function() {
            return t.createPromiseCapability;
          }
        }), Object.defineProperty(i, "createValidAbsoluteUrl", {
          enumerable: !0,
          get: function() {
            return t.createValidAbsoluteUrl;
          }
        }), Object.defineProperty(i, "getDocument", {
          enumerable: !0,
          get: function() {
            return e.getDocument;
          }
        }), Object.defineProperty(i, "getFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return a.getFilenameFromUrl;
          }
        }), Object.defineProperty(i, "getPdfFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return a.getPdfFilenameFromUrl;
          }
        }), Object.defineProperty(i, "getXfaPageViewport", {
          enumerable: !0,
          get: function() {
            return a.getXfaPageViewport;
          }
        }), Object.defineProperty(i, "isPdfFile", {
          enumerable: !0,
          get: function() {
            return a.isPdfFile;
          }
        }), Object.defineProperty(i, "loadScript", {
          enumerable: !0,
          get: function() {
            return a.loadScript;
          }
        }), Object.defineProperty(i, "removeNullCharacters", {
          enumerable: !0,
          get: function() {
            return t.removeNullCharacters;
          }
        }), Object.defineProperty(i, "renderTextLayer", {
          enumerable: !0,
          get: function() {
            return u.renderTextLayer;
          }
        }), Object.defineProperty(i, "shadow", {
          enumerable: !0,
          get: function() {
            return t.shadow;
          }
        }), Object.defineProperty(i, "version", {
          enumerable: !0,
          get: function() {
            return e.version;
          }
        });
        var a = __w_pdfjs_require__(1), t = __w_pdfjs_require__(4), e = __w_pdfjs_require__(136), n = __w_pdfjs_require__(148), o = __w_pdfjs_require__(142), d = __w_pdfjs_require__(6), u = __w_pdfjs_require__(151), g = __w_pdfjs_require__(152), P = __w_pdfjs_require__(150);
        if (d.isNodeJS) {
          var F = __w_pdfjs_require__(153), D = F.PDFNodeStream;
          (0, e.setPDFNetworkStreamFactory)(function(k) {
            return new D(k);
          });
        } else {
          var B = __w_pdfjs_require__(156), x = B.PDFNetworkStream, w = __w_pdfjs_require__(157), O = w.PDFFetchStream;
          (0, e.setPDFNetworkStreamFactory)(function(k) {
            return (0, a.isValidFetchUrl)(k.url) ? new O(k) : new x(k);
          });
        }
      })(), __webpack_exports__;
    })();
  });
})(pdf$2);
const pdf = /* @__PURE__ */ getDefaultExportFromCjs(pdf$2.exports), pdf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: pdf
}, [pdf$2.exports]);
function _objectWithoutPropertiesLoose(i, a) {
  if (i == null)
    return {};
  var t = {}, e = Object.keys(i), n, o;
  for (o = 0; o < e.length; o++)
    n = e[o], !(a.indexOf(n) >= 0) && (t[n] = i[n]);
  return t;
}
function _objectWithoutProperties(i, a) {
  if (i == null)
    return {};
  var t = _objectWithoutPropertiesLoose(i, a), e, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(i);
    for (n = 0; n < o.length; n++)
      e = o[n], !(a.indexOf(e) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, e) || (t[e] = i[e]));
  }
  return t;
}
function _typeof(i) {
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, _typeof(i);
}
function _classCallCheck(i, a) {
  if (!(i instanceof a))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(i, a) {
  for (var t = 0; t < a.length; t++) {
    var e = a[t];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(i, e.key, e);
  }
}
function _createClass(i, a, t) {
  return a && _defineProperties(i.prototype, a), t && _defineProperties(i, t), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
function _assertThisInitialized(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function _setPrototypeOf(i, a) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
    return e.__proto__ = n, e;
  }, _setPrototypeOf(i, a);
}
function _inherits(i, a) {
  if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(a && a.prototype, {
    constructor: {
      value: i,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(i, "prototype", {
    writable: !1
  }), a && _setPrototypeOf(i, a);
}
function _possibleConstructorReturn(i, a) {
  if (a && (_typeof(a) === "object" || typeof a == "function"))
    return a;
  if (a !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(i);
}
function _getPrototypeOf(i) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(i);
}
function _defineProperty(i, a, t) {
  return a in i ? Object.defineProperty(i, a, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[a] = t, i;
}
var propTypes = { exports: {} }, reactIs = { exports: {} }, reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min)
    return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var i = typeof Symbol == "function" && Symbol.for, a = i ? Symbol.for("react.element") : 60103, t = i ? Symbol.for("react.portal") : 60106, e = i ? Symbol.for("react.fragment") : 60107, n = i ? Symbol.for("react.strict_mode") : 60108, o = i ? Symbol.for("react.profiler") : 60114, d = i ? Symbol.for("react.provider") : 60109, u = i ? Symbol.for("react.context") : 60110, g = i ? Symbol.for("react.async_mode") : 60111, P = i ? Symbol.for("react.concurrent_mode") : 60111, F = i ? Symbol.for("react.forward_ref") : 60112, D = i ? Symbol.for("react.suspense") : 60113, B = i ? Symbol.for("react.suspense_list") : 60120, x = i ? Symbol.for("react.memo") : 60115, w = i ? Symbol.for("react.lazy") : 60116, O = i ? Symbol.for("react.block") : 60121, k = i ? Symbol.for("react.fundamental") : 60117, W = i ? Symbol.for("react.responder") : 60118, R = i ? Symbol.for("react.scope") : 60119;
  function U(c) {
    if (typeof c == "object" && c !== null) {
      var p = c.$$typeof;
      switch (p) {
        case a:
          switch (c = c.type, c) {
            case g:
            case P:
            case e:
            case o:
            case n:
            case D:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case u:
                case F:
                case w:
                case x:
                case d:
                  return c;
                default:
                  return p;
              }
          }
        case t:
          return p;
      }
    }
  }
  function v(c) {
    return U(c) === P;
  }
  return reactIs_production_min.AsyncMode = g, reactIs_production_min.ConcurrentMode = P, reactIs_production_min.ContextConsumer = u, reactIs_production_min.ContextProvider = d, reactIs_production_min.Element = a, reactIs_production_min.ForwardRef = F, reactIs_production_min.Fragment = e, reactIs_production_min.Lazy = w, reactIs_production_min.Memo = x, reactIs_production_min.Portal = t, reactIs_production_min.Profiler = o, reactIs_production_min.StrictMode = n, reactIs_production_min.Suspense = D, reactIs_production_min.isAsyncMode = function(c) {
    return v(c) || U(c) === g;
  }, reactIs_production_min.isConcurrentMode = v, reactIs_production_min.isContextConsumer = function(c) {
    return U(c) === u;
  }, reactIs_production_min.isContextProvider = function(c) {
    return U(c) === d;
  }, reactIs_production_min.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === a;
  }, reactIs_production_min.isForwardRef = function(c) {
    return U(c) === F;
  }, reactIs_production_min.isFragment = function(c) {
    return U(c) === e;
  }, reactIs_production_min.isLazy = function(c) {
    return U(c) === w;
  }, reactIs_production_min.isMemo = function(c) {
    return U(c) === x;
  }, reactIs_production_min.isPortal = function(c) {
    return U(c) === t;
  }, reactIs_production_min.isProfiler = function(c) {
    return U(c) === o;
  }, reactIs_production_min.isStrictMode = function(c) {
    return U(c) === n;
  }, reactIs_production_min.isSuspense = function(c) {
    return U(c) === D;
  }, reactIs_production_min.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === e || c === P || c === o || c === n || c === D || c === B || typeof c == "object" && c !== null && (c.$$typeof === w || c.$$typeof === x || c.$$typeof === d || c.$$typeof === u || c.$$typeof === F || c.$$typeof === k || c.$$typeof === W || c.$$typeof === R || c.$$typeof === O);
  }, reactIs_production_min.typeOf = U, reactIs_production_min;
}
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  return hasRequiredReactIs_development || (hasRequiredReactIs_development = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, a = i ? Symbol.for("react.element") : 60103, t = i ? Symbol.for("react.portal") : 60106, e = i ? Symbol.for("react.fragment") : 60107, n = i ? Symbol.for("react.strict_mode") : 60108, o = i ? Symbol.for("react.profiler") : 60114, d = i ? Symbol.for("react.provider") : 60109, u = i ? Symbol.for("react.context") : 60110, g = i ? Symbol.for("react.async_mode") : 60111, P = i ? Symbol.for("react.concurrent_mode") : 60111, F = i ? Symbol.for("react.forward_ref") : 60112, D = i ? Symbol.for("react.suspense") : 60113, B = i ? Symbol.for("react.suspense_list") : 60120, x = i ? Symbol.for("react.memo") : 60115, w = i ? Symbol.for("react.lazy") : 60116, O = i ? Symbol.for("react.block") : 60121, k = i ? Symbol.for("react.fundamental") : 60117, W = i ? Symbol.for("react.responder") : 60118, R = i ? Symbol.for("react.scope") : 60119;
    function U(f) {
      return typeof f == "string" || typeof f == "function" || f === e || f === P || f === o || f === n || f === D || f === B || typeof f == "object" && f !== null && (f.$$typeof === w || f.$$typeof === x || f.$$typeof === d || f.$$typeof === u || f.$$typeof === F || f.$$typeof === k || f.$$typeof === W || f.$$typeof === R || f.$$typeof === O);
    }
    function v(f) {
      if (typeof f == "object" && f !== null) {
        var l = f.$$typeof;
        switch (l) {
          case a:
            var _ = f.type;
            switch (_) {
              case g:
              case P:
              case e:
              case o:
              case n:
              case D:
                return _;
              default:
                var N = _ && _.$$typeof;
                switch (N) {
                  case u:
                  case F:
                  case w:
                  case x:
                  case d:
                    return N;
                  default:
                    return l;
                }
            }
          case t:
            return l;
        }
      }
    }
    var c = g, p = P, b = u, m = d, y = a, T = F, M = e, H = w, L = x, Y = t, te = o, K = n, oe = D, q = !1;
    function X(f) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(f) || v(f) === g;
    }
    function S(f) {
      return v(f) === P;
    }
    function h(f) {
      return v(f) === u;
    }
    function A(f) {
      return v(f) === d;
    }
    function C(f) {
      return typeof f == "object" && f !== null && f.$$typeof === a;
    }
    function $(f) {
      return v(f) === F;
    }
    function Z(f) {
      return v(f) === e;
    }
    function z(f) {
      return v(f) === w;
    }
    function he(f) {
      return v(f) === x;
    }
    function _e(f) {
      return v(f) === t;
    }
    function Te(f) {
      return v(f) === o;
    }
    function j(f) {
      return v(f) === n;
    }
    function I(f) {
      return v(f) === D;
    }
    reactIs_development.AsyncMode = c, reactIs_development.ConcurrentMode = p, reactIs_development.ContextConsumer = b, reactIs_development.ContextProvider = m, reactIs_development.Element = y, reactIs_development.ForwardRef = T, reactIs_development.Fragment = M, reactIs_development.Lazy = H, reactIs_development.Memo = L, reactIs_development.Portal = Y, reactIs_development.Profiler = te, reactIs_development.StrictMode = K, reactIs_development.Suspense = oe, reactIs_development.isAsyncMode = X, reactIs_development.isConcurrentMode = S, reactIs_development.isContextConsumer = h, reactIs_development.isContextProvider = A, reactIs_development.isElement = C, reactIs_development.isForwardRef = $, reactIs_development.isFragment = Z, reactIs_development.isLazy = z, reactIs_development.isMemo = he, reactIs_development.isPortal = _e, reactIs_development.isProfiler = Te, reactIs_development.isStrictMode = j, reactIs_development.isSuspense = I, reactIs_development.isValidElementType = U, reactIs_development.typeOf = v;
  }()), reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
  return hasRequiredReactIs || (hasRequiredReactIs = 1, function(i) {
    process.env.NODE_ENV === "production" ? i.exports = requireReactIs_production_min() : i.exports = requireReactIs_development();
  }(reactIs)), reactIs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign, hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign)
    return objectAssign;
  hasRequiredObjectAssign = 1;
  var i = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function e(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var d = {}, u = 0; u < 10; u++)
        d["_" + String.fromCharCode(u)] = u;
      var g = Object.getOwnPropertyNames(d).map(function(F) {
        return d[F];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(F) {
        P[F] = F;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return objectAssign = n() ? Object.assign : function(o, d) {
    for (var u, g = e(o), P, F = 1; F < arguments.length; F++) {
      u = Object(arguments[F]);
      for (var D in u)
        a.call(u, D) && (g[D] = u[D]);
      if (i) {
        P = i(u);
        for (var B = 0; B < P.length; B++)
          t.call(u, P[B]) && (g[P[B]] = u[P[B]]);
      }
    }
    return g;
  }, objectAssign;
}
var ReactPropTypesSecret_1, hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret)
    return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ReactPropTypesSecret_1 = i, ReactPropTypesSecret_1;
}
var has, hasRequiredHas;
function requireHas() {
  return hasRequiredHas || (hasRequiredHas = 1, has = Function.call.bind(Object.prototype.hasOwnProperty)), has;
}
var checkPropTypes_1, hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes)
    return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = requireReactPropTypesSecret(), t = {}, e = requireHas();
    i = function(o) {
      var d = "Warning: " + o;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function n(o, d, u, g, P) {
    if (process.env.NODE_ENV !== "production") {
      for (var F in o)
        if (e(o, F)) {
          var D;
          try {
            if (typeof o[F] != "function") {
              var B = Error((g || "React class") + ": " + u + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw B.name = "Invariant Violation", B;
            }
            D = o[F](d, F, g, u, null, a);
          } catch (w) {
            D = w;
          }
          if (D && !(D instanceof Error) && i((g || "React class") + ": type specification of " + u + " `" + F + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof D + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), D instanceof Error && !(D.message in t)) {
            t[D.message] = !0;
            var x = P ? P() : "";
            i("Failed " + u + " type: " + D.message + (x != null ? x : ""));
          }
        }
    }
  }
  return n.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, checkPropTypes_1 = n, checkPropTypes_1;
}
var factoryWithTypeCheckers, hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers)
    return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var i = requireReactIs(), a = requireObjectAssign(), t = requireReactPropTypesSecret(), e = requireHas(), n = requireCheckPropTypes(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(u) {
    var g = "Warning: " + u;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function d() {
    return null;
  }
  return factoryWithTypeCheckers = function(u, g) {
    var P = typeof Symbol == "function" && Symbol.iterator, F = "@@iterator";
    function D(S) {
      var h = S && (P && S[P] || S[F]);
      if (typeof h == "function")
        return h;
    }
    var B = "<<anonymous>>", x = {
      array: W("array"),
      bigint: W("bigint"),
      bool: W("boolean"),
      func: W("function"),
      number: W("number"),
      object: W("object"),
      string: W("string"),
      symbol: W("symbol"),
      any: R(),
      arrayOf: U,
      element: v(),
      elementType: c(),
      instanceOf: p,
      node: T(),
      objectOf: m,
      oneOf: b,
      oneOfType: y,
      shape: H,
      exact: L
    };
    function w(S, h) {
      return S === h ? S !== 0 || 1 / S === 1 / h : S !== S && h !== h;
    }
    function O(S, h) {
      this.message = S, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function k(S) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, A = 0;
      function C(Z, z, he, _e, Te, j, I) {
        if (_e = _e || B, j = j || he, I !== t) {
          if (g) {
            var f = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var l = _e + ":" + he;
            !h[l] && A < 3 && (o("You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + _e + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), h[l] = !0, A++);
          }
        }
        return z[he] == null ? Z ? z[he] === null ? new O("The " + Te + " `" + j + "` is marked as required " + ("in `" + _e + "`, but its value is `null`.")) : new O("The " + Te + " `" + j + "` is marked as required in " + ("`" + _e + "`, but its value is `undefined`.")) : null : S(z, he, _e, Te, j);
      }
      var $ = C.bind(null, !1);
      return $.isRequired = C.bind(null, !0), $;
    }
    function W(S) {
      function h(A, C, $, Z, z, he) {
        var _e = A[C], Te = K(_e);
        if (Te !== S) {
          var j = oe(_e);
          return new O("Invalid " + Z + " `" + z + "` of type " + ("`" + j + "` supplied to `" + $ + "`, expected ") + ("`" + S + "`."), { expectedType: S });
        }
        return null;
      }
      return k(h);
    }
    function R() {
      return k(d);
    }
    function U(S) {
      function h(A, C, $, Z, z) {
        if (typeof S != "function")
          return new O("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var he = A[C];
        if (!Array.isArray(he)) {
          var _e = K(he);
          return new O("Invalid " + Z + " `" + z + "` of type " + ("`" + _e + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var Te = 0; Te < he.length; Te++) {
          var j = S(he, Te, $, Z, z + "[" + Te + "]", t);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return k(h);
    }
    function v() {
      function S(h, A, C, $, Z) {
        var z = h[A];
        if (!u(z)) {
          var he = K(z);
          return new O("Invalid " + $ + " `" + Z + "` of type " + ("`" + he + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(S);
    }
    function c() {
      function S(h, A, C, $, Z) {
        var z = h[A];
        if (!i.isValidElementType(z)) {
          var he = K(z);
          return new O("Invalid " + $ + " `" + Z + "` of type " + ("`" + he + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(S);
    }
    function p(S) {
      function h(A, C, $, Z, z) {
        if (!(A[C] instanceof S)) {
          var he = S.name || B, _e = X(A[C]);
          return new O("Invalid " + Z + " `" + z + "` of type " + ("`" + _e + "` supplied to `" + $ + "`, expected ") + ("instance of `" + he + "`."));
        }
        return null;
      }
      return k(h);
    }
    function b(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : o("Invalid argument supplied to oneOf, expected an array.")), d;
      function h(A, C, $, Z, z) {
        for (var he = A[C], _e = 0; _e < S.length; _e++)
          if (w(he, S[_e]))
            return null;
        var Te = JSON.stringify(S, function(I, f) {
          var l = oe(f);
          return l === "symbol" ? String(f) : f;
        });
        return new O("Invalid " + Z + " `" + z + "` of value `" + String(he) + "` " + ("supplied to `" + $ + "`, expected one of " + Te + "."));
      }
      return k(h);
    }
    function m(S) {
      function h(A, C, $, Z, z) {
        if (typeof S != "function")
          return new O("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var he = A[C], _e = K(he);
        if (_e !== "object")
          return new O("Invalid " + Z + " `" + z + "` of type " + ("`" + _e + "` supplied to `" + $ + "`, expected an object."));
        for (var Te in he)
          if (e(he, Te)) {
            var j = S(he, Te, $, Z, z + "." + Te, t);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return k(h);
    }
    function y(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var h = 0; h < S.length; h++) {
        var A = S[h];
        if (typeof A != "function")
          return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(A) + " at index " + h + "."), d;
      }
      function C($, Z, z, he, _e) {
        for (var Te = [], j = 0; j < S.length; j++) {
          var I = S[j], f = I($, Z, z, he, _e, t);
          if (f == null)
            return null;
          f.data && e(f.data, "expectedType") && Te.push(f.data.expectedType);
        }
        var l = Te.length > 0 ? ", expected one of type [" + Te.join(", ") + "]" : "";
        return new O("Invalid " + he + " `" + _e + "` supplied to " + ("`" + z + "`" + l + "."));
      }
      return k(C);
    }
    function T() {
      function S(h, A, C, $, Z) {
        return Y(h[A]) ? null : new O("Invalid " + $ + " `" + Z + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return k(S);
    }
    function M(S, h, A, C, $) {
      return new O((S || "React class") + ": " + h + " type `" + A + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`.");
    }
    function H(S) {
      function h(A, C, $, Z, z) {
        var he = A[C], _e = K(he);
        if (_e !== "object")
          return new O("Invalid " + Z + " `" + z + "` of type `" + _e + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var Te in S) {
          var j = S[Te];
          if (typeof j != "function")
            return M($, Z, z, Te, oe(j));
          var I = j(he, Te, $, Z, z + "." + Te, t);
          if (I)
            return I;
        }
        return null;
      }
      return k(h);
    }
    function L(S) {
      function h(A, C, $, Z, z) {
        var he = A[C], _e = K(he);
        if (_e !== "object")
          return new O("Invalid " + Z + " `" + z + "` of type `" + _e + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var Te = a({}, A[C], S);
        for (var j in Te) {
          var I = S[j];
          if (e(S, j) && typeof I != "function")
            return M($, Z, z, j, oe(I));
          if (!I)
            return new O("Invalid " + Z + " `" + z + "` key `" + j + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(A[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  "));
          var f = I(he, j, $, Z, z + "." + j, t);
          if (f)
            return f;
        }
        return null;
      }
      return k(h);
    }
    function Y(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(Y);
          if (S === null || u(S))
            return !0;
          var h = D(S);
          if (h) {
            var A = h.call(S), C;
            if (h !== S.entries) {
              for (; !(C = A.next()).done; )
                if (!Y(C.value))
                  return !1;
            } else
              for (; !(C = A.next()).done; ) {
                var $ = C.value;
                if ($ && !Y($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(S, h) {
      return S === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function K(S) {
      var h = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : te(h, S) ? "symbol" : h;
    }
    function oe(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var h = K(S);
      if (h === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function q(S) {
      var h = oe(S);
      switch (h) {
        case "array":
        case "object":
          return "an " + h;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + h;
        default:
          return h;
      }
    }
    function X(S) {
      return !S.constructor || !S.constructor.name ? B : S.constructor.name;
    }
    return x.checkPropTypes = n, x.resetWarningCache = n.resetWarningCache, x.PropTypes = x, x;
  }, factoryWithTypeCheckers;
}
var factoryWithThrowingShims, hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims)
    return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var i = requireReactPropTypesSecret();
  function a() {
  }
  function t() {
  }
  return t.resetWarningCache = a, factoryWithThrowingShims = function() {
    function e(d, u, g, P, F, D) {
      if (D !== i) {
        var B = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw B.name = "Invariant Violation", B;
      }
    }
    e.isRequired = e;
    function n() {
      return e;
    }
    var o = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: n,
      element: e,
      elementType: e,
      instanceOf: n,
      node: e,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: t,
      resetWarningCache: a
    };
    return o.PropTypes = o, o;
  }, factoryWithThrowingShims;
}
if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs(), throwOnDirectAccess = !0;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else
  propTypes.exports = requireFactoryWithThrowingShims()();
var clipboardEvents = ["onCopy", "onCut", "onPaste"], compositionEvents = ["onCompositionEnd", "onCompositionStart", "onCompositionUpdate"], keyboardEvents = ["onKeyDown", "onKeyPress", "onKeyUp"], focusEvents = ["onFocus", "onBlur"], formEvents = ["onChange", "onInput", "onInvalid", "onReset", "onSubmit"], genericEvents = ["onError", "onLoad"], mouseEvents = ["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp"], pointerEvents = ["onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut"], selectionEvents = ["onSelect"], touchEvents = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], uiEvents = ["onScroll"], wheelEvents = ["onWheel"], mediaEvents = ["onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting"], imageEvents = ["onLoad", "onError"], animationEvents = ["onAnimationStart", "onAnimationEnd", "onAnimationIteration"], transitionEvents = ["onTransitionEnd"], otherEvents = ["onToggle"], allEvents = [].concat(clipboardEvents, compositionEvents, keyboardEvents, focusEvents, formEvents, genericEvents, mouseEvents, pointerEvents, selectionEvents, touchEvents, uiEvents, wheelEvents, mediaEvents, imageEvents, animationEvents, transitionEvents, otherEvents), makeEventProps = function i(a, t) {
  var e = {};
  return allEvents.forEach(function(n) {
    if (n in a) {
      if (!t) {
        e[n] = a[n];
        return;
      }
      e[n] = function(o) {
        return a[n](o, t(n));
      };
    }
  }), e;
};
function makeCancellablePromise(i) {
  var a = !1, t = new Promise(function(e, n) {
    i.then(function() {
      return !a && e.apply(void 0, arguments);
    }).catch(function(o) {
      return !a && n(o);
    });
  });
  return {
    promise: t,
    cancel: function() {
      a = !0;
    }
  };
}
function mergeClassNames() {
  return Array.prototype.slice.call(arguments).reduce(function(i, a) {
    return i.concat(a);
  }, []).filter(function(i) {
    return typeof i == "string";
  }).join(" ");
}
var isProduction$1 = process.env.NODE_ENV === "production", prefix = "Invariant failed";
function invariant(i, a) {
  if (!i) {
    if (isProduction$1)
      throw new Error(prefix);
    var t = typeof a == "function" ? a() : a, e = t ? prefix + ": " + t : prefix;
    throw new Error(e);
  }
}
var isProduction = process.env.NODE_ENV === "production";
function warning(i, a) {
  if (!isProduction) {
    if (i)
      return;
    var t = "Warning: " + a;
    typeof console < "u" && console.warn(t);
    try {
      throw Error(t);
    } catch {
    }
  }
}
const DocumentContext = /* @__PURE__ */ createContext(null);
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var i = require$$0, a = Symbol.for("react.element"), t = Symbol.for("react.fragment"), e = Object.prototype.hasOwnProperty, n = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(u, g, P) {
    var F, D = {}, B = null, x = null;
    P !== void 0 && (B = "" + P), g.key !== void 0 && (B = "" + g.key), g.ref !== void 0 && (x = g.ref);
    for (F in g)
      e.call(g, F) && !o.hasOwnProperty(F) && (D[F] = g[F]);
    if (u && u.defaultProps)
      for (F in g = u.defaultProps, g)
        D[F] === void 0 && (D[F] = g[F]);
    return { $$typeof: a, type: u, key: B, ref: x, props: D, _owner: n.current };
  }
  return reactJsxRuntime_production_min.Fragment = t, reactJsxRuntime_production_min.jsx = d, reactJsxRuntime_production_min.jsxs = d, reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var i = require$$0, a = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), u = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), w = Symbol.iterator, O = "@@iterator";
    function k(le) {
      if (le === null || typeof le != "object")
        return null;
      var Le = w && le[w] || le[O];
      return typeof Le == "function" ? Le : null;
    }
    var W = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(le) {
      {
        for (var Le = arguments.length, ze = new Array(Le > 1 ? Le - 1 : 0), Xe = 1; Xe < Le; Xe++)
          ze[Xe - 1] = arguments[Xe];
        U("error", le, ze);
      }
    }
    function U(le, Le, ze) {
      {
        var Xe = W.ReactDebugCurrentFrame, nt = Xe.getStackAddendum();
        nt !== "" && (Le += "%s", ze = ze.concat([nt]));
        var at = ze.map(function(et) {
          return String(et);
        });
        at.unshift("Warning: " + Le), Function.prototype.apply.call(console[le], console, at);
      }
    }
    var v = !1, c = !1, p = !1, b = !1, m = !1, y;
    y = Symbol.for("react.module.reference");
    function T(le) {
      return !!(typeof le == "string" || typeof le == "function" || le === e || le === o || m || le === n || le === P || le === F || b || le === x || v || c || p || typeof le == "object" && le !== null && (le.$$typeof === B || le.$$typeof === D || le.$$typeof === d || le.$$typeof === u || le.$$typeof === g || le.$$typeof === y || le.getModuleId !== void 0));
    }
    function M(le, Le, ze) {
      var Xe = le.displayName;
      if (Xe)
        return Xe;
      var nt = Le.displayName || Le.name || "";
      return nt !== "" ? ze + "(" + nt + ")" : ze;
    }
    function H(le) {
      return le.displayName || "Context";
    }
    function L(le) {
      if (le == null)
        return null;
      if (typeof le.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof le == "function")
        return le.displayName || le.name || null;
      if (typeof le == "string")
        return le;
      switch (le) {
        case e:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case P:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof le == "object")
        switch (le.$$typeof) {
          case u:
            var Le = le;
            return H(Le) + ".Consumer";
          case d:
            var ze = le;
            return H(ze._context) + ".Provider";
          case g:
            return M(le, le.render, "ForwardRef");
          case D:
            var Xe = le.displayName || null;
            return Xe !== null ? Xe : L(le.type) || "Memo";
          case B: {
            var nt = le, at = nt._payload, et = nt._init;
            try {
              return L(et(at));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, te = 0, K, oe, q, X, S, h, A;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function $() {
      {
        if (te === 0) {
          K = console.log, oe = console.info, q = console.warn, X = console.error, S = console.group, h = console.groupCollapsed, A = console.groupEnd;
          var le = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: le,
            log: le,
            warn: le,
            error: le,
            group: le,
            groupCollapsed: le,
            groupEnd: le
          });
        }
        te++;
      }
    }
    function Z() {
      {
        if (te--, te === 0) {
          var le = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, le, {
              value: K
            }),
            info: Y({}, le, {
              value: oe
            }),
            warn: Y({}, le, {
              value: q
            }),
            error: Y({}, le, {
              value: X
            }),
            group: Y({}, le, {
              value: S
            }),
            groupCollapsed: Y({}, le, {
              value: h
            }),
            groupEnd: Y({}, le, {
              value: A
            })
          });
        }
        te < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = W.ReactCurrentDispatcher, he;
    function _e(le, Le, ze) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (nt) {
            var Xe = nt.stack.trim().match(/\n( *(at )?)/);
            he = Xe && Xe[1] || "";
          }
        return `
` + he + le;
      }
    }
    var Te = !1, j;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      j = new I();
    }
    function f(le, Le) {
      if (!le || Te)
        return "";
      {
        var ze = j.get(le);
        if (ze !== void 0)
          return ze;
      }
      var Xe;
      Te = !0;
      var nt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var at;
      at = z.current, z.current = null, $();
      try {
        if (Le) {
          var et = function() {
            throw Error();
          };
          if (Object.defineProperty(et.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(et, []);
            } catch (Je) {
              Xe = Je;
            }
            Reflect.construct(le, [], et);
          } else {
            try {
              et.call();
            } catch (Je) {
              Xe = Je;
            }
            le.call(et.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            Xe = Je;
          }
          le();
        }
      } catch (Je) {
        if (Je && Xe && typeof Je.stack == "string") {
          for (var ae = Je.stack.split(`
`), Re = Xe.stack.split(`
`), ie = ae.length - 1, ge = Re.length - 1; ie >= 1 && ge >= 0 && ae[ie] !== Re[ge]; )
            ge--;
          for (; ie >= 1 && ge >= 0; ie--, ge--)
            if (ae[ie] !== Re[ge]) {
              if (ie !== 1 || ge !== 1)
                do
                  if (ie--, ge--, ge < 0 || ae[ie] !== Re[ge]) {
                    var je = `
` + ae[ie].replace(" at new ", " at ");
                    return le.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", le.displayName)), typeof le == "function" && j.set(le, je), je;
                  }
                while (ie >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        Te = !1, z.current = at, Z(), Error.prepareStackTrace = nt;
      }
      var $e = le ? le.displayName || le.name : "", Ke = $e ? _e($e) : "";
      return typeof le == "function" && j.set(le, Ke), Ke;
    }
    function l(le, Le, ze) {
      return f(le, !1);
    }
    function _(le) {
      var Le = le.prototype;
      return !!(Le && Le.isReactComponent);
    }
    function N(le, Le, ze) {
      if (le == null)
        return "";
      if (typeof le == "function")
        return f(le, _(le));
      if (typeof le == "string")
        return _e(le);
      switch (le) {
        case P:
          return _e("Suspense");
        case F:
          return _e("SuspenseList");
      }
      if (typeof le == "object")
        switch (le.$$typeof) {
          case g:
            return l(le.render);
          case D:
            return N(le.type, Le, ze);
          case B: {
            var Xe = le, nt = Xe._payload, at = Xe._init;
            try {
              return N(at(nt), Le, ze);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, ee = {}, ce = W.ReactDebugCurrentFrame;
    function ye(le) {
      if (le) {
        var Le = le._owner, ze = N(le.type, le._source, Le ? Le.type : null);
        ce.setExtraStackFrame(ze);
      } else
        ce.setExtraStackFrame(null);
    }
    function be(le, Le, ze, Xe, nt) {
      {
        var at = Function.call.bind(G);
        for (var et in le)
          if (at(le, et)) {
            var ae = void 0;
            try {
              if (typeof le[et] != "function") {
                var Re = Error((Xe || "React class") + ": " + ze + " type `" + et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof le[et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Re.name = "Invariant Violation", Re;
              }
              ae = le[et](Le, et, Xe, ze, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              ae = ie;
            }
            ae && !(ae instanceof Error) && (ye(nt), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Xe || "React class", ze, et, typeof ae), ye(null)), ae instanceof Error && !(ae.message in ee) && (ee[ae.message] = !0, ye(nt), R("Failed %s type: %s", ze, ae.message), ye(null));
          }
      }
    }
    var me = Array.isArray;
    function Pe(le) {
      return me(le);
    }
    function Ce(le) {
      {
        var Le = typeof Symbol == "function" && Symbol.toStringTag, ze = Le && le[Symbol.toStringTag] || le.constructor.name || "Object";
        return ze;
      }
    }
    function xe(le) {
      try {
        return Fe(le), !1;
      } catch {
        return !0;
      }
    }
    function Fe(le) {
      return "" + le;
    }
    function Me(le) {
      if (xe(le))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ce(le)), Fe(le);
    }
    var Ue = W.ReactCurrentOwner, Ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, pe, V;
    V = {};
    function re(le) {
      if (G.call(le, "ref")) {
        var Le = Object.getOwnPropertyDescriptor(le, "ref").get;
        if (Le && Le.isReactWarning)
          return !1;
      }
      return le.ref !== void 0;
    }
    function J(le) {
      if (G.call(le, "key")) {
        var Le = Object.getOwnPropertyDescriptor(le, "key").get;
        if (Le && Le.isReactWarning)
          return !1;
      }
      return le.key !== void 0;
    }
    function ue(le, Le) {
      if (typeof le.ref == "string" && Ue.current && Le && Ue.current.stateNode !== Le) {
        var ze = L(Ue.current.type);
        V[ze] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Ue.current.type), le.ref), V[ze] = !0);
      }
    }
    function ne(le, Le) {
      {
        var ze = function() {
          de || (de = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Le));
        };
        ze.isReactWarning = !0, Object.defineProperty(le, "key", {
          get: ze,
          configurable: !0
        });
      }
    }
    function Q(le, Le) {
      {
        var ze = function() {
          pe || (pe = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Le));
        };
        ze.isReactWarning = !0, Object.defineProperty(le, "ref", {
          get: ze,
          configurable: !0
        });
      }
    }
    var ve = function(le, Le, ze, Xe, nt, at, et) {
      var ae = {
        $$typeof: a,
        type: le,
        key: Le,
        ref: ze,
        props: et,
        _owner: at
      };
      return ae._store = {}, Object.defineProperty(ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: nt
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function fe(le, Le, ze, Xe, nt) {
      {
        var at, et = {}, ae = null, Re = null;
        ze !== void 0 && (Me(ze), ae = "" + ze), J(Le) && (Me(Le.key), ae = "" + Le.key), re(Le) && (Re = Le.ref, ue(Le, nt));
        for (at in Le)
          G.call(Le, at) && !Ve.hasOwnProperty(at) && (et[at] = Le[at]);
        if (le && le.defaultProps) {
          var ie = le.defaultProps;
          for (at in ie)
            et[at] === void 0 && (et[at] = ie[at]);
        }
        if (ae || Re) {
          var ge = typeof le == "function" ? le.displayName || le.name || "Unknown" : le;
          ae && ne(et, ge), Re && Q(et, ge);
        }
        return ve(le, ae, Re, nt, Xe, Ue.current, et);
      }
    }
    var Ae = W.ReactCurrentOwner, Ee = W.ReactDebugCurrentFrame;
    function De(le) {
      if (le) {
        var Le = le._owner, ze = N(le.type, le._source, Le ? Le.type : null);
        Ee.setExtraStackFrame(ze);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function ke(le) {
      return typeof le == "object" && le !== null && le.$$typeof === a;
    }
    function He() {
      {
        if (Ae.current) {
          var le = L(Ae.current.type);
          if (le)
            return `

Check the render method of \`` + le + "`.";
        }
        return "";
      }
    }
    function Oe(le) {
      {
        if (le !== void 0) {
          var Le = le.fileName.replace(/^.*[\\\/]/, ""), ze = le.lineNumber;
          return `

Check your code at ` + Le + ":" + ze + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function Ge(le) {
      {
        var Le = He();
        if (!Le) {
          var ze = typeof le == "string" ? le : le.displayName || le.name;
          ze && (Le = `

Check the top-level render call using <` + ze + ">.");
        }
        return Le;
      }
    }
    function Be(le, Le) {
      {
        if (!le._store || le._store.validated || le.key != null)
          return;
        le._store.validated = !0;
        var ze = Ge(Le);
        if (Ie[ze])
          return;
        Ie[ze] = !0;
        var Xe = "";
        le && le._owner && le._owner !== Ae.current && (Xe = " It was passed a child from " + L(le._owner.type) + "."), De(le), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ze, Xe), De(null);
      }
    }
    function Ye(le, Le) {
      {
        if (typeof le != "object")
          return;
        if (Pe(le))
          for (var ze = 0; ze < le.length; ze++) {
            var Xe = le[ze];
            ke(Xe) && Be(Xe, Le);
          }
        else if (ke(le))
          le._store && (le._store.validated = !0);
        else if (le) {
          var nt = k(le);
          if (typeof nt == "function" && nt !== le.entries)
            for (var at = nt.call(le), et; !(et = at.next()).done; )
              ke(et.value) && Be(et.value, Le);
        }
      }
    }
    function Ze(le) {
      {
        var Le = le.type;
        if (Le == null || typeof Le == "string")
          return;
        var ze;
        if (typeof Le == "function")
          ze = Le.propTypes;
        else if (typeof Le == "object" && (Le.$$typeof === g || Le.$$typeof === D))
          ze = Le.propTypes;
        else
          return;
        if (ze) {
          var Xe = L(Le);
          be(ze, le.props, "prop", Xe, le);
        } else if (Le.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var nt = L(Le);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", nt || "Unknown");
        }
        typeof Le.getDefaultProps == "function" && !Le.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(le) {
      {
        for (var Le = Object.keys(le.props), ze = 0; ze < Le.length; ze++) {
          var Xe = Le[ze];
          if (Xe !== "children" && Xe !== "key") {
            De(le), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Xe), De(null);
            break;
          }
        }
        le.ref !== null && (De(le), R("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    function lt(le, Le, ze, Xe, nt, at) {
      {
        var et = T(le);
        if (!et) {
          var ae = "";
          (le === void 0 || typeof le == "object" && le !== null && Object.keys(le).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Re = Oe(nt);
          Re ? ae += Re : ae += He();
          var ie;
          le === null ? ie = "null" : Pe(le) ? ie = "array" : le !== void 0 && le.$$typeof === a ? (ie = "<" + (L(le.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof le, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, ae);
        }
        var ge = fe(le, Le, ze, nt, at);
        if (ge == null)
          return ge;
        if (et) {
          var je = Le.children;
          if (je !== void 0)
            if (Xe)
              if (Pe(je)) {
                for (var $e = 0; $e < je.length; $e++)
                  Ye(je[$e], le);
                Object.freeze && Object.freeze(je);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(je, le);
        }
        return le === e ? rt(ge) : Ze(ge), ge;
      }
    }
    function ct(le, Le, ze) {
      return lt(le, Le, ze, !0);
    }
    function _t(le, Le, ze) {
      return lt(le, Le, ze, !1);
    }
    var St = _t, Pt = ct;
    reactJsxRuntime_development.Fragment = e, reactJsxRuntime_development.jsx = St, reactJsxRuntime_development.jsxs = Pt;
  }()), reactJsxRuntime_development;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = requireReactJsxRuntime_production_min() : i.exports = requireReactJsxRuntime_development();
})(jsxRuntime);
const jsx = jsxRuntime.exports.jsx, jsxs = jsxRuntime.exports.jsxs;
function Message(i) {
  var a = i.children, t = i.type;
  return /* @__PURE__ */ jsx("div", {
    className: "react-pdf__message react-pdf__message--".concat(t),
    children: a
  });
}
Message.propTypes = {
  children: propTypes.exports.node,
  type: propTypes.exports.oneOf(["error", "loading", "no-data"]).isRequired
};
var DEFAULT_LINK_REL = "noopener noreferrer nofollow", LinkService = /* @__PURE__ */ function() {
  function i() {
    _classCallCheck(this, i), this.externalLinkTarget = null, this.externalLinkRel = null;
  }
  return _createClass(i, [{
    key: "setDocument",
    value: function(t) {
      this.pdfDocument = t;
    }
  }, {
    key: "setViewer",
    value: function(t) {
      this.pdfViewer = t;
    }
  }, {
    key: "setExternalLinkRel",
    value: function(t) {
      this.externalLinkRel = t;
    }
  }, {
    key: "setExternalLinkTarget",
    value: function(t) {
      this.externalLinkTarget = t;
    }
  }, {
    key: "setHistory",
    value: function() {
    }
  }, {
    key: "pagesCount",
    get: function() {
      return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
  }, {
    key: "page",
    get: function() {
      return this.pdfViewer.currentPageNumber;
    },
    set: function(t) {
      this.pdfViewer.currentPageNumber = t;
    }
  }, {
    key: "rotation",
    get: function() {
      return 0;
    },
    set: function(t) {
    }
  }, {
    key: "goToDestination",
    value: function(t) {
      var e = this;
      new Promise(function(n) {
        typeof t == "string" ? e.pdfDocument.getDestination(t).then(n) : Array.isArray(t) ? n(t) : t.then(n);
      }).then(function(n) {
        invariant(Array.isArray(n), '"'.concat(n, '" is not a valid destination array.'));
        var o = n[0];
        new Promise(function(d) {
          o instanceof Object ? e.pdfDocument.getPageIndex(o).then(function(u) {
            d(u);
          }).catch(function() {
            invariant(!1, '"'.concat(o, '" is not a valid page reference.'));
          }) : typeof o == "number" ? d(o) : invariant(!1, '"'.concat(o, '" is not a valid destination reference.'));
        }).then(function(d) {
          var u = d + 1;
          invariant(u >= 1 && u <= e.pagesCount, '"'.concat(u, '" is not a valid page number.')), e.pdfViewer.scrollPageIntoView({
            dest: t,
            pageIndex: d,
            pageNumber: u
          });
        });
      });
    }
  }, {
    key: "navigateTo",
    value: function(t) {
      this.goToDestination(t);
    }
  }, {
    key: "goToPage",
    value: function() {
    }
  }, {
    key: "addLinkAttributes",
    value: function(t, e, n) {
      t.href = e, t.rel = this.externalLinkRel || DEFAULT_LINK_REL, t.target = n ? "_blank" : this.externalLinkTarget || "";
    }
  }, {
    key: "getDestinationHash",
    value: function() {
      return "#";
    }
  }, {
    key: "getAnchorUrl",
    value: function() {
      return "#";
    }
  }, {
    key: "setHash",
    value: function() {
    }
  }, {
    key: "executeNamedAction",
    value: function() {
    }
  }, {
    key: "cachePageRef",
    value: function() {
    }
  }, {
    key: "isPageVisible",
    value: function() {
      return !0;
    }
  }, {
    key: "isPageCached",
    value: function() {
      return !0;
    }
  }]), i;
}(), PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
function _arrayWithHoles(i) {
  if (Array.isArray(i))
    return i;
}
function _iterableToArrayLimit(i, a) {
  var t = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (t != null) {
    var e = [], n = !0, o = !1, d, u;
    try {
      for (t = t.call(i); !(n = (d = t.next()).done) && (e.push(d.value), !(a && e.length === a)); n = !0)
        ;
    } catch (g) {
      o = !0, u = g;
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (o)
          throw u;
      }
    }
    return e;
  }
}
function _arrayLikeToArray(i, a) {
  (a == null || a > i.length) && (a = i.length);
  for (var t = 0, e = new Array(a); t < a; t++)
    e[t] = i[t];
  return e;
}
function _unsupportedIterableToArray(i, a) {
  if (!!i) {
    if (typeof i == "string")
      return _arrayLikeToArray(i, a);
    var t = Object.prototype.toString.call(i).slice(8, -1);
    if (t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set")
      return Array.from(i);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray(i, a);
  }
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _slicedToArray(i, a) {
  return _arrayWithHoles(i) || _iterableToArrayLimit(i, a) || _unsupportedIterableToArray(i, a) || _nonIterableRest();
}
var isBrowser = typeof window < "u", isLocalFileSystem = isBrowser && window.location.protocol === "file:";
function isDefined(i) {
  return typeof i < "u";
}
function isProvided(i) {
  return isDefined(i) && i !== null;
}
function isString(i) {
  return typeof i == "string";
}
function isArrayBuffer(i) {
  return i instanceof ArrayBuffer;
}
function isBlob(i) {
  return invariant(isBrowser, "isBlob can only be used in a browser environment"), i instanceof Blob;
}
function isFile$1(i) {
  return invariant(isBrowser, "isFile can only be used in a browser environment"), i instanceof File;
}
function isDataURI(i) {
  return isString(i) && /^data:/.test(i);
}
function dataURItoByteString(i) {
  invariant(isDataURI(i), "Invalid data URI.");
  var a = i.split(","), t = _slicedToArray(a, 2), e = t[0], n = t[1], o = e.split(";");
  return o.indexOf("base64") !== -1 ? atob(n) : unescape(n);
}
function getPixelRatio() {
  return isBrowser && window.devicePixelRatio || 1;
}
var allowFileAccessFromFilesTip = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function displayCORSWarning() {
  warning(!isLocalFileSystem, "Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ".concat(allowFileAccessFromFilesTip));
}
function displayWorkerWarning() {
  warning(!isLocalFileSystem, "Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ".concat(allowFileAccessFromFilesTip));
}
function cancelRunningTask(i) {
  i && i.cancel && i.cancel();
}
function makePageCallback(i, a) {
  return Object.defineProperty(i, "width", {
    get: function() {
      return this.view[2] * a;
    },
    configurable: !0
  }), Object.defineProperty(i, "height", {
    get: function() {
      return this.view[3] * a;
    },
    configurable: !0
  }), Object.defineProperty(i, "originalWidth", {
    get: function() {
      return this.view[2];
    },
    configurable: !0
  }), Object.defineProperty(i, "originalHeight", {
    get: function() {
      return this.view[3];
    },
    configurable: !0
  }), i;
}
function isCancelException(i) {
  return i.name === "RenderingCancelledException";
}
function loadFromFile(i) {
  return new Promise(function(a, t) {
    var e = new FileReader();
    return e.onload = function() {
      return a(new Uint8Array(e.result));
    }, e.onerror = function(n) {
      switch (n.target.error.code) {
        case n.target.error.NOT_FOUND_ERR:
          return t(new Error("Error while reading a file: File not found."));
        case n.target.error.NOT_READABLE_ERR:
          return t(new Error("Error while reading a file: File not readable."));
        case n.target.error.SECURITY_ERR:
          return t(new Error("Error while reading a file: Security error."));
        case n.target.error.ABORT_ERR:
          return t(new Error("Error while reading a file: Aborted."));
        default:
          return t(new Error("Error while reading a file."));
      }
    }, e.readAsArrayBuffer(i), null;
  });
}
function _arrayWithoutHoles(i) {
  if (Array.isArray(i))
    return _arrayLikeToArray(i);
}
function _iterableToArray(i) {
  if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
    return Array.from(i);
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _toConsumableArray(i) {
  return _arrayWithoutHoles(i) || _iterableToArray(i) || _unsupportedIterableToArray(i) || _nonIterableSpread();
}
var eventProps = function() {
  var i = {};
  return [].concat(_toConsumableArray(mouseEvents), _toConsumableArray(touchEvents), _toConsumableArray(keyboardEvents)).forEach(function(a) {
    i[a] = propTypes.exports.func;
  }), i;
}(), fileTypes = [propTypes.exports.string, propTypes.exports.instanceOf(ArrayBuffer), propTypes.exports.shape({
  data: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string]),
  httpHeaders: propTypes.exports.object,
  range: propTypes.exports.object,
  url: propTypes.exports.string,
  withCredentials: propTypes.exports.bool
})];
typeof File < "u" && fileTypes.push(propTypes.exports.instanceOf(File));
typeof Blob < "u" && fileTypes.push(propTypes.exports.instanceOf(Blob));
var isClassName = propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.arrayOf(propTypes.exports.string)]), isFile = propTypes.exports.oneOfType(fileTypes), isLinkService = propTypes.exports.instanceOf(LinkService);
propTypes.exports.oneOf(["_self", "_blank", "_parent", "_top"]);
var isPage = propTypes.exports.shape({
  _transport: propTypes.exports.shape({
    fontLoader: propTypes.exports.object.isRequired
  }).isRequired,
  commonObjs: propTypes.exports.shape({
    _objs: propTypes.exports.object.isRequired
  }).isRequired,
  getAnnotations: propTypes.exports.func.isRequired,
  getTextContent: propTypes.exports.func.isRequired,
  getViewport: propTypes.exports.func.isRequired,
  render: propTypes.exports.func.isRequired
}), isPageIndex = function i(a, t, e) {
  var n = a[t], o = a.pageNumber, d = a.pdf;
  if (!isDefined(d))
    return null;
  if (isDefined(n)) {
    if (typeof n != "number")
      return new Error("`".concat(t, "` of type `").concat(_typeof(n), "` supplied to `").concat(e, "`, expected `number`."));
    if (n < 0)
      return new Error("Expected `".concat(t, "` to be greater or equal to 0."));
    var u = d.numPages;
    if (n + 1 > u)
      return new Error("Expected `".concat(t, "` to be less or equal to ").concat(u - 1, "."));
  } else if (!isDefined(o))
    return new Error("`".concat(t, "` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(e, "`."));
  return null;
}, isPageNumber = function i(a, t, e) {
  var n = a[t], o = a.pageIndex, d = a.pdf;
  if (!isDefined(d))
    return null;
  if (isDefined(n)) {
    if (typeof n != "number")
      return new Error("`".concat(t, "` of type `").concat(_typeof(n), "` supplied to `").concat(e, "`, expected `number`."));
    if (n < 1)
      return new Error("Expected `".concat(t, "` to be greater or equal to 1."));
    var u = d.numPages;
    if (n > u)
      return new Error("Expected `".concat(t, "` to be less or equal to ").concat(u, "."));
  } else if (!isDefined(o))
    return new Error("`".concat(t, "` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(e, "`."));
  return null;
}, isPdf = propTypes.exports.oneOfType([propTypes.exports.shape({
  getDestination: propTypes.exports.func.isRequired,
  getOutline: propTypes.exports.func.isRequired,
  getPage: propTypes.exports.func.isRequired,
  numPages: propTypes.exports.number.isRequired
}), propTypes.exports.bool]), isRef = propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.shape({
  current: propTypes.exports.any
})]), isRenderMode = propTypes.exports.oneOf(["canvas", "none", "svg"]), isRotate = propTypes.exports.oneOf([0, 90, 180, 270]), _excluded = ["url"];
function ownKeys$2(i, a) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(i);
    a && (e = e.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
function _objectSpread$2(i) {
  for (var a = 1; a < arguments.length; a++) {
    var t = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ownKeys$2(Object(t), !0).forEach(function(e) {
      _defineProperty(i, e, t[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(t, e));
    });
  }
  return i;
}
function _createSuper$6(i) {
  var a = _isNativeReflectConstruct$6();
  return function() {
    var e = _getPrototypeOf(i), n;
    if (a) {
      var o = _getPrototypeOf(this).constructor;
      n = Reflect.construct(e, arguments, o);
    } else
      n = e.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _isNativeReflectConstruct$6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var PDFDataRangeTransport = pdf$2.exports.PDFDataRangeTransport, Document = /* @__PURE__ */ function(i) {
  _inherits(t, i);
  var a = _createSuper$6(t);
  function t() {
    var e;
    _classCallCheck(this, t);
    for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++)
      o[d] = arguments[d];
    return e = a.call.apply(a, [this].concat(o)), _defineProperty(_assertThisInitialized(e), "state", {
      pdf: null
    }), _defineProperty(_assertThisInitialized(e), "viewer", {
      scrollPageIntoView: function(g) {
        var P = g.dest, F = g.pageIndex, D = g.pageNumber, B = e.props.onItemClick;
        if (B) {
          B({
            dest: P,
            pageIndex: F,
            pageNumber: D
          });
          return;
        }
        var x = e.pages[F];
        if (x) {
          x.scrollIntoView();
          return;
        }
        warning(!1, "An internal link leading to page ".concat(D, " was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."));
      }
    }), _defineProperty(_assertThisInitialized(e), "linkService", new LinkService()), _defineProperty(_assertThisInitialized(e), "loadDocument", function() {
      cancelRunningTask(e.runningTask), e.loadingTask && e.loadingTask.destroy();
      var u = makeCancellablePromise(e.findDocumentSource());
      e.runningTask = u, u.promise.then(function(g) {
        if (e.onSourceSuccess(), !!g) {
          e.setState(function(w) {
            return w.pdf ? {
              pdf: null
            } : null;
          });
          var P = e.props, F = P.options, D = P.onLoadProgress, B = P.onPassword;
          e.loadingTask = pdf$2.exports.getDocument(_objectSpread$2(_objectSpread$2({}, g), F)), e.loadingTask.onPassword = B, D && (e.loadingTask.onProgress = D);
          var x = makeCancellablePromise(e.loadingTask.promise);
          e.runningTask = x, x.promise.then(function(w) {
            e.setState(function(O) {
              return O.pdf && O.pdf.fingerprint === w.fingerprint ? null : {
                pdf: w
              };
            }, e.onLoadSuccess);
          }).catch(function(w) {
            e.onLoadError(w);
          });
        }
      }).catch(function(g) {
        e.onSourceError(g);
      });
    }), _defineProperty(_assertThisInitialized(e), "setupLinkService", function() {
      var u = e.props, g = u.externalLinkRel, P = u.externalLinkTarget;
      e.linkService.setViewer(e.viewer), e.linkService.setExternalLinkRel(g), e.linkService.setExternalLinkTarget(P);
    }), _defineProperty(_assertThisInitialized(e), "onSourceSuccess", function() {
      var u = e.props.onSourceSuccess;
      u && u();
    }), _defineProperty(_assertThisInitialized(e), "onSourceError", function(u) {
      warning(u);
      var g = e.props.onSourceError;
      g && g(u);
    }), _defineProperty(_assertThisInitialized(e), "onLoadSuccess", function() {
      var u = e.props.onLoadSuccess, g = e.state.pdf;
      u && u(g), e.pages = new Array(g.numPages), e.linkService.setDocument(g);
    }), _defineProperty(_assertThisInitialized(e), "onLoadError", function(u) {
      e.setState({
        pdf: !1
      }), warning(u);
      var g = e.props.onLoadError;
      g && g(u);
    }), _defineProperty(_assertThisInitialized(e), "findDocumentSource", function() {
      return new Promise(function(u) {
        var g = e.props.file;
        if (g || u(null), typeof g == "string") {
          if (isDataURI(g)) {
            var P = dataURItoByteString(g);
            u({
              data: P
            });
          }
          displayCORSWarning(), u({
            url: g
          });
        }
        if (g instanceof PDFDataRangeTransport && u({
          range: g
        }), isArrayBuffer(g) && u({
          data: g
        }), isBrowser && (isBlob(g) || isFile$1(g))) {
          loadFromFile(g).then(function(x) {
            u({
              data: x
            });
          });
          return;
        }
        if (invariant(_typeof(g) === "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), invariant(g.url || g.data || g.range, "Invalid parameter object: need either .data, .range or .url"), typeof g.url == "string") {
          if (isDataURI(g.url)) {
            var F = g.url, D = _objectWithoutProperties(g, _excluded), B = dataURItoByteString(F);
            u(_objectSpread$2({
              data: B
            }, D));
          }
          displayCORSWarning();
        }
        u(g);
      });
    }), _defineProperty(_assertThisInitialized(e), "registerPage", function(u, g) {
      e.pages[u] = g;
    }), _defineProperty(_assertThisInitialized(e), "unregisterPage", function(u) {
      delete e.pages[u];
    }), e;
  }
  return _createClass(t, [{
    key: "componentDidMount",
    value: function() {
      this.loadDocument(), this.setupLinkService();
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var o = this.props.file;
      o !== n.file && this.loadDocument();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      cancelRunningTask(this.runningTask), this.loadingTask && this.loadingTask.destroy();
    }
  }, {
    key: "childContext",
    get: function() {
      var n = this.linkService, o = this.registerPage, d = this.unregisterPage, u = this.props, g = u.imageResourcesPath, P = u.renderMode, F = u.rotate, D = this.state.pdf;
      return {
        imageResourcesPath: g,
        linkService: n,
        pdf: D,
        registerPage: o,
        renderMode: P,
        rotate: F,
        unregisterPage: d
      };
    }
  }, {
    key: "eventProps",
    get: function() {
      var n = this;
      return makeEventProps(this.props, function() {
        return n.state.pdf;
      });
    }
  }, {
    key: "renderChildren",
    value: function() {
      var n = this.props.children;
      return /* @__PURE__ */ jsx(DocumentContext.Provider, {
        value: this.childContext,
        children: n
      });
    }
  }, {
    key: "renderContent",
    value: function() {
      var n = this.props.file, o = this.state.pdf;
      if (!n) {
        var d = this.props.noData;
        return /* @__PURE__ */ jsx(Message, {
          type: "no-data",
          children: typeof d == "function" ? d() : d
        });
      }
      if (o === null) {
        var u = this.props.loading;
        return /* @__PURE__ */ jsx(Message, {
          type: "loading",
          children: typeof u == "function" ? u() : u
        });
      }
      if (o === !1) {
        var g = this.props.error;
        return /* @__PURE__ */ jsx(Message, {
          type: "error",
          children: typeof g == "function" ? g() : g
        });
      }
      return this.renderChildren();
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, o = n.className, d = n.inputRef;
      return /* @__PURE__ */ jsx("div", {
        className: mergeClassNames("react-pdf__Document", o),
        ref: d,
        ...this.eventProps,
        children: this.renderContent()
      });
    }
  }]), t;
}(PureComponent);
Document.defaultProps = {
  error: "Failed to load PDF file.",
  loading: "Loading PDF\u2026",
  noData: "No PDF file specified.",
  onPassword: function i(a, t) {
    switch (t) {
      case PasswordResponses.NEED_PASSWORD: {
        var e = prompt("Enter the password to open this PDF file.");
        a(e);
        break;
      }
      case PasswordResponses.INCORRECT_PASSWORD: {
        var n = prompt("Invalid password. Please try again.");
        a(n);
        break;
      }
    }
  }
};
var isFunctionOrNode$1 = propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.node]);
Document.propTypes = _objectSpread$2(_objectSpread$2({}, eventProps), {}, {
  children: propTypes.exports.node,
  className: isClassName,
  error: isFunctionOrNode$1,
  externalLinkRel: propTypes.exports.string,
  externalLinkTarget: propTypes.exports.string,
  file: isFile,
  imageResourcesPath: propTypes.exports.string,
  inputRef: isRef,
  loading: isFunctionOrNode$1,
  noData: isFunctionOrNode$1,
  onItemClick: propTypes.exports.func,
  onLoadError: propTypes.exports.func,
  onLoadProgress: propTypes.exports.func,
  onLoadSuccess: propTypes.exports.func,
  onPassword: propTypes.exports.func,
  onSourceError: propTypes.exports.func,
  onSourceSuccess: propTypes.exports.func,
  rotate: propTypes.exports.number
});
var isDestination = propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.arrayOf(propTypes.exports.any)]);
propTypes.exports.shape({
  dest: isDestination,
  items: propTypes.exports.arrayOf(propTypes.exports.shape({
    dest: isDestination,
    title: propTypes.exports.string
  })),
  title: propTypes.exports.string
}).isRequired, propTypes.exports.func, isPdf.isRequired;
function ownKeys$1(i, a) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(i);
    a && (e = e.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
function _objectSpread$1(i) {
  for (var a = 1; a < arguments.length; a++) {
    var t = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ownKeys$1(Object(t), !0).forEach(function(e) {
      _defineProperty(i, e, t[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(t, e));
    });
  }
  return i;
}
_objectSpread$1({
  className: isClassName,
  inputRef: isRef,
  onItemClick: propTypes.exports.func,
  onLoadError: propTypes.exports.func,
  onLoadSuccess: propTypes.exports.func,
  pdf: isPdf
}, eventProps);
function mergeRefs() {
  for (var i = arguments.length, a = new Array(i), t = 0; t < i; t++)
    a[t] = arguments[t];
  var e = a.filter(Boolean);
  return e.length <= 1 ? e[0] : function(o) {
    e.forEach(function(d) {
      typeof d == "function" ? d(o) : d.current = o;
    });
  };
}
const PageContext = /* @__PURE__ */ createContext(null);
function _createSuper$5(i) {
  var a = _isNativeReflectConstruct$5();
  return function() {
    var e = _getPrototypeOf(i), n;
    if (a) {
      var o = _getPrototypeOf(this).constructor;
      n = Reflect.construct(e, arguments, o);
    } else
      n = e.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _isNativeReflectConstruct$5() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var ANNOTATION_MODE = pdf$2.exports.AnnotationMode, PageCanvasInternal = /* @__PURE__ */ function(i) {
  _inherits(t, i);
  var a = _createSuper$5(t);
  function t() {
    var e;
    _classCallCheck(this, t);
    for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++)
      o[d] = arguments[d];
    return e = a.call.apply(a, [this].concat(o)), _defineProperty(_assertThisInitialized(e), "canvasElement", /* @__PURE__ */ createRef()), _defineProperty(_assertThisInitialized(e), "onRenderSuccess", function() {
      e.renderer = null;
      var u = e.props, g = u.onRenderSuccess, P = u.page, F = u.scale;
      g && g(makePageCallback(P, F));
    }), _defineProperty(_assertThisInitialized(e), "onRenderError", function(u) {
      if (!isCancelException(u)) {
        warning(u);
        var g = e.props.onRenderError;
        g && g(u);
      }
    }), _defineProperty(_assertThisInitialized(e), "drawPageOnCanvas", function() {
      var u = e.canvasElement.current;
      if (!u)
        return null;
      var g = _assertThisInitialized(e), P = g.renderViewport, F = g.viewport, D = e.props, B = D.canvasBackground, x = D.page, w = D.renderForms;
      u.width = P.width, u.height = P.height, u.style.width = "".concat(Math.floor(F.width), "px"), u.style.height = "".concat(Math.floor(F.height), "px");
      var O = {
        annotationMode: w ? ANNOTATION_MODE.ENABLE_FORMS : ANNOTATION_MODE.ENABLE,
        get canvasContext() {
          return u.getContext("2d");
        },
        viewport: P
      };
      return B && (O.background = B), e.cancelRenderingTask(), e.renderer = x.render(O), e.renderer.promise.then(e.onRenderSuccess).catch(e.onRenderError);
    }), e;
  }
  return _createClass(t, [{
    key: "componentDidMount",
    value: function() {
      this.drawPageOnCanvas();
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var o = this.props, d = o.canvasBackground, u = o.page, g = o.renderForms;
      (d !== n.canvasBackground || g !== n.renderForms) && (u.cleanup(), this.drawPageOnCanvas());
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRenderingTask();
      var n = this.canvasElement.current;
      n && (n.width = 0, n.height = 0);
    }
  }, {
    key: "cancelRenderingTask",
    value: function() {
      this.renderer && (this.renderer.cancel(), this.renderer = null);
    }
  }, {
    key: "renderViewport",
    get: function() {
      var n = this.props, o = n.page, d = n.rotate, u = n.scale, g = getPixelRatio();
      return o.getViewport({
        scale: u * g,
        rotation: d
      });
    }
  }, {
    key: "viewport",
    get: function() {
      var n = this.props, o = n.page, d = n.rotate, u = n.scale;
      return o.getViewport({
        scale: u,
        rotation: d
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props.canvasRef;
      return /* @__PURE__ */ jsx("canvas", {
        className: "react-pdf__Page__canvas",
        dir: "ltr",
        ref: mergeRefs(n, this.canvasElement),
        style: {
          display: "block",
          userSelect: "none"
        }
      });
    }
  }]), t;
}(PureComponent);
PageCanvasInternal.propTypes = {
  canvasBackground: propTypes.exports.string,
  canvasRef: isRef,
  onRenderError: propTypes.exports.func,
  onRenderSuccess: propTypes.exports.func,
  page: isPage.isRequired,
  renderForms: propTypes.exports.bool,
  rotate: isRotate,
  scale: propTypes.exports.number.isRequired
};
function PageCanvas(i) {
  return /* @__PURE__ */ jsx(PageContext.Consumer, {
    children: function(a) {
      return /* @__PURE__ */ jsx(PageCanvasInternal, {
        ...a,
        ...i
      });
    }
  });
}
function _createSuper$4(i) {
  var a = _isNativeReflectConstruct$4();
  return function() {
    var e = _getPrototypeOf(i), n;
    if (a) {
      var o = _getPrototypeOf(this).constructor;
      n = Reflect.construct(e, arguments, o);
    } else
      n = e.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _isNativeReflectConstruct$4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var PageSVGInternal = /* @__PURE__ */ function(i) {
  _inherits(t, i);
  var a = _createSuper$4(t);
  function t() {
    var e;
    _classCallCheck(this, t);
    for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++)
      o[d] = arguments[d];
    return e = a.call.apply(a, [this].concat(o)), _defineProperty(_assertThisInitialized(e), "state", {
      svg: null
    }), _defineProperty(_assertThisInitialized(e), "onRenderSuccess", function() {
      e.renderer = null;
      var u = e.props, g = u.onRenderSuccess, P = u.page, F = u.scale;
      g && g(makePageCallback(P, F));
    }), _defineProperty(_assertThisInitialized(e), "onRenderError", function(u) {
      if (!isCancelException(u)) {
        warning(u);
        var g = e.props.onRenderError;
        g && g(u);
      }
    }), _defineProperty(_assertThisInitialized(e), "renderSVG", function() {
      var u = e.props.page;
      return e.renderer = u.getOperatorList(), e.renderer.then(function(g) {
        var P = new pdf$2.exports.SVGGraphics(u.commonObjs, u.objs);
        e.renderer = P.getSVG(g, e.viewport).then(function(F) {
          e.setState({
            svg: F
          }, e.onRenderSuccess);
        }).catch(e.onRenderError);
      }).catch(e.onRenderError);
    }), _defineProperty(_assertThisInitialized(e), "drawPageOnContainer", function(u) {
      var g = e.state.svg;
      if (!(!u || !g)) {
        u.firstElementChild || u.appendChild(g);
        var P = e.viewport, F = P.width, D = P.height;
        g.setAttribute("width", F), g.setAttribute("height", D);
      }
    }), e;
  }
  return _createClass(t, [{
    key: "componentDidMount",
    value: function() {
      this.renderSVG();
    }
  }, {
    key: "viewport",
    get: function() {
      var n = this.props, o = n.page, d = n.rotate, u = n.scale;
      return o.getViewport({
        scale: u,
        rotation: d
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.viewport, d = o.width, u = o.height;
      return /* @__PURE__ */ jsx("div", {
        className: "react-pdf__Page__svg",
        ref: function(P) {
          return n.drawPageOnContainer(P);
        },
        style: {
          display: "block",
          backgroundColor: "white",
          overflow: "hidden",
          width: d,
          height: u,
          userSelect: "none"
        }
      });
    }
  }]), t;
}(PureComponent);
PageSVGInternal.propTypes = {
  onRenderError: propTypes.exports.func,
  onRenderSuccess: propTypes.exports.func,
  page: isPage.isRequired,
  rotate: isRotate,
  scale: propTypes.exports.number.isRequired
};
function PageSVG(i) {
  return /* @__PURE__ */ jsx(PageContext.Consumer, {
    children: function(a) {
      return /* @__PURE__ */ jsx(PageSVGInternal, {
        ...a,
        ...i
      });
    }
  });
}
function _createSuper$3(i) {
  var a = _isNativeReflectConstruct$3();
  return function() {
    var e = _getPrototypeOf(i), n;
    if (a) {
      var o = _getPrototypeOf(this).constructor;
      n = Reflect.construct(e, arguments, o);
    } else
      n = e.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var TextLayerItemInternal = /* @__PURE__ */ function(i) {
  _inherits(t, i);
  var a = _createSuper$3(t);
  function t() {
    var e;
    _classCallCheck(this, t);
    for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++)
      o[d] = arguments[d];
    return e = a.call.apply(a, [this].concat(o)), _defineProperty(_assertThisInitialized(e), "itemElement", /* @__PURE__ */ createRef()), _defineProperty(_assertThisInitialized(e), "getElementWidth", function(u) {
      var g = _assertThisInitialized(e), P = g.sideways;
      return u.getBoundingClientRect()[P ? "height" : "width"];
    }), e;
  }
  return _createClass(t, [{
    key: "componentDidMount",
    value: function() {
      this.alignTextItem();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.alignTextItem();
    }
  }, {
    key: "unrotatedViewport",
    get: function() {
      var n = this.props, o = n.page, d = n.scale;
      return o.getViewport({
        scale: d
      });
    }
  }, {
    key: "rotate",
    get: function() {
      var n = this.props, o = n.page, d = n.rotate;
      return d - o.rotate;
    }
  }, {
    key: "sideways",
    get: function() {
      var n = this.rotate;
      return n % 180 !== 0;
    }
  }, {
    key: "defaultSideways",
    get: function() {
      var n = this.unrotatedViewport.rotation;
      return n % 180 !== 0;
    }
  }, {
    key: "fontSize",
    get: function() {
      var n = this.props.transform, o = this.defaultSideways, d = _slicedToArray(n, 2), u = d[0], g = d[1];
      return o ? g : u;
    }
  }, {
    key: "top",
    get: function() {
      var n = this.props.transform, o = this.unrotatedViewport, d = this.defaultSideways, u = _slicedToArray(n, 6), g = u[2], P = u[3], F = u[4], D = u[5], B = _slicedToArray(o.viewBox, 4), x = B[1], w = B[3];
      return d ? F + g + x : w - (D + P);
    }
  }, {
    key: "left",
    get: function() {
      var n = this.props.transform, o = this.unrotatedViewport, d = this.defaultSideways, u = _slicedToArray(n, 6), g = u[4], P = u[5], F = _slicedToArray(o.viewBox, 1), D = F[0];
      return d ? P - D : g - D;
    }
  }, {
    key: "getFontData",
    value: function(n) {
      var o = this.props.page;
      return new Promise(function(d) {
        o.commonObjs.get(n, d);
      });
    }
  }, {
    key: "alignTextItem",
    value: function() {
      var n = this, o = this.itemElement.current;
      if (!!o) {
        o.style.transform = "";
        var d = this.props, u = d.fontName, g = d.scale, P = d.width;
        o.style.fontFamily = "".concat(u, ", sans-serif"), this.getFontData(u).then(function(F) {
          var D = F ? F.fallbackName : "sans-serif";
          o.style.fontFamily = "".concat(u, ", ").concat(D);
          var B = P * g, x = n.getElementWidth(o), w = "scaleX(".concat(B / x, ")"), O = F ? F.ascent : 0;
          O && (w += " translateY(".concat((1 - O) * 100, "%)")), o.style.transform = w, o.style.WebkitTransform = w;
        });
      }
    }
  }, {
    key: "render",
    value: function() {
      var n = this.fontSize, o = this.top, d = this.left, u = this.props, g = u.customTextRenderer, P = u.scale, F = u.str;
      return /* @__PURE__ */ jsx("span", {
        ref: this.itemElement,
        style: {
          height: "1em",
          fontFamily: "sans-serif",
          fontSize: "".concat(n * P, "px"),
          position: "absolute",
          top: "".concat(o * P, "px"),
          left: "".concat(d * P, "px"),
          transformOrigin: "left bottom",
          whiteSpace: "pre",
          pointerEvents: "all"
        },
        children: g ? g(this.props) : F
      });
    }
  }]), t;
}(PureComponent);
TextLayerItemInternal.propTypes = {
  customTextRenderer: propTypes.exports.func,
  fontName: propTypes.exports.string.isRequired,
  itemIndex: propTypes.exports.number.isRequired,
  page: isPage.isRequired,
  rotate: isRotate,
  scale: propTypes.exports.number,
  str: propTypes.exports.string.isRequired,
  transform: propTypes.exports.arrayOf(propTypes.exports.number).isRequired,
  width: propTypes.exports.number.isRequired
};
function TextLayerItem(i) {
  return /* @__PURE__ */ jsx(PageContext.Consumer, {
    children: function(a) {
      return /* @__PURE__ */ jsx(TextLayerItemInternal, {
        ...a,
        ...i
      });
    }
  });
}
function _createSuper$2(i) {
  var a = _isNativeReflectConstruct$2();
  return function() {
    var e = _getPrototypeOf(i), n;
    if (a) {
      var o = _getPrototypeOf(this).constructor;
      n = Reflect.construct(e, arguments, o);
    } else
      n = e.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var TextLayerInternal = /* @__PURE__ */ function(i) {
  _inherits(t, i);
  var a = _createSuper$2(t);
  function t() {
    var e;
    _classCallCheck(this, t);
    for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++)
      o[d] = arguments[d];
    return e = a.call.apply(a, [this].concat(o)), _defineProperty(_assertThisInitialized(e), "state", {
      textItems: null
    }), _defineProperty(_assertThisInitialized(e), "loadTextItems", function() {
      var u = e.props.page, g = makeCancellablePromise(u.getTextContent());
      e.runningTask = g, g.promise.then(function(P) {
        var F = P.items;
        e.setState({
          textItems: F
        }, e.onLoadSuccess);
      }).catch(function(P) {
        e.onLoadError(P);
      });
    }), _defineProperty(_assertThisInitialized(e), "onLoadSuccess", function() {
      var u = e.props.onGetTextSuccess, g = e.state.textItems;
      u && u(g);
    }), _defineProperty(_assertThisInitialized(e), "onLoadError", function(u) {
      e.setState({
        textItems: !1
      }), warning(u);
      var g = e.props.onGetTextError;
      g && g(u);
    }), e;
  }
  return _createClass(t, [{
    key: "componentDidMount",
    value: function() {
      var n = this.props.page;
      invariant(n, "Attempted to load page text content, but no page was specified."), this.loadTextItems();
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var o = this.props.page;
      n.page && o !== n.page && this.loadTextItems();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      cancelRunningTask(this.runningTask);
    }
  }, {
    key: "unrotatedViewport",
    get: function() {
      var n = this.props, o = n.page, d = n.scale;
      return o.getViewport({
        scale: d
      });
    }
  }, {
    key: "rotate",
    get: function() {
      var n = this.props, o = n.page, d = n.rotate;
      return d - o.rotate;
    }
  }, {
    key: "renderTextItems",
    value: function() {
      var n = this.state.textItems;
      return n ? n.map(function(o, d) {
        return /* @__PURE__ */ jsx(TextLayerItem, {
          itemIndex: d,
          ...o
        }, d);
      }) : null;
    }
  }, {
    key: "render",
    value: function() {
      var n = this.unrotatedViewport, o = this.rotate;
      return /* @__PURE__ */ jsx("div", {
        className: "react-pdf__Page__textContent",
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "".concat(n.width, "px"),
          height: "".concat(n.height, "px"),
          color: "transparent",
          transform: "translate(-50%, -50%) rotate(".concat(o, "deg)"),
          WebkitTransform: "translate(-50%, -50%) rotate(".concat(o, "deg)"),
          pointerEvents: "none"
        },
        children: this.renderTextItems()
      });
    }
  }]), t;
}(PureComponent);
TextLayerInternal.propTypes = {
  onGetTextError: propTypes.exports.func,
  onGetTextSuccess: propTypes.exports.func,
  page: isPage.isRequired,
  rotate: isRotate,
  scale: propTypes.exports.number
};
function TextLayer(i) {
  return /* @__PURE__ */ jsx(PageContext.Consumer, {
    children: function(a) {
      return /* @__PURE__ */ jsx(TextLayerInternal, {
        ...a,
        ...i
      });
    }
  });
}
function _createSuper$1(i) {
  var a = _isNativeReflectConstruct$1();
  return function() {
    var e = _getPrototypeOf(i), n;
    if (a) {
      var o = _getPrototypeOf(this).constructor;
      n = Reflect.construct(e, arguments, o);
    } else
      n = e.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var AnnotationLayerInternal = /* @__PURE__ */ function(i) {
  _inherits(t, i);
  var a = _createSuper$1(t);
  function t() {
    var e;
    _classCallCheck(this, t);
    for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++)
      o[d] = arguments[d];
    return e = a.call.apply(a, [this].concat(o)), _defineProperty(_assertThisInitialized(e), "state", {
      annotations: null
    }), _defineProperty(_assertThisInitialized(e), "layerElement", /* @__PURE__ */ createRef()), _defineProperty(_assertThisInitialized(e), "loadAnnotations", function() {
      var u = e.props.page, g = makeCancellablePromise(u.getAnnotations());
      e.runningTask = g, g.promise.then(function(P) {
        e.setState({
          annotations: P
        }, e.onLoadSuccess);
      }).catch(function(P) {
        e.onLoadError(P);
      });
    }), _defineProperty(_assertThisInitialized(e), "onLoadSuccess", function() {
      var u = e.props.onGetAnnotationsSuccess, g = e.state.annotations;
      u && u(g);
    }), _defineProperty(_assertThisInitialized(e), "onLoadError", function(u) {
      e.setState({
        annotations: !1
      }), warning(u);
      var g = e.props.onGetAnnotationsError;
      g && g(u);
    }), _defineProperty(_assertThisInitialized(e), "onRenderSuccess", function() {
      var u = e.props.onRenderAnnotationLayerSuccess;
      u && u();
    }), _defineProperty(_assertThisInitialized(e), "onRenderError", function(u) {
      warning(u);
      var g = e.props.onRenderAnnotationLayerError;
      g && g(u);
    }), e;
  }
  return _createClass(t, [{
    key: "componentDidMount",
    value: function() {
      var n = this.props.page;
      invariant(n, "Attempted to load page annotations, but no page was specified."), this.loadAnnotations();
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var o = this.props, d = o.page, u = o.renderForms;
      (n.page && d !== n.page || u !== n.renderForms) && this.loadAnnotations();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      cancelRunningTask(this.runningTask);
    }
  }, {
    key: "viewport",
    get: function() {
      var n = this.props, o = n.page, d = n.rotate, u = n.scale;
      return o.getViewport({
        scale: u,
        rotation: d
      });
    }
  }, {
    key: "renderAnnotationLayer",
    value: function() {
      var n = this.state.annotations;
      if (!!n) {
        var o = this.props, d = o.imageResourcesPath, u = o.linkService, g = o.page, P = o.renderForms, F = this.viewport.clone({
          dontFlip: !0
        }), D = {
          annotations: n,
          div: this.layerElement.current,
          imageResourcesPath: d,
          linkService: u,
          page: g,
          renderForms: P,
          viewport: F
        };
        this.layerElement.current.innerHTML = "";
        try {
          pdf$2.exports.AnnotationLayer.render(D), this.onRenderSuccess();
        } catch (B) {
          this.onRenderError(B);
        }
      }
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ jsx("div", {
        className: "react-pdf__Page__annotations annotationLayer",
        ref: this.layerElement,
        children: this.renderAnnotationLayer()
      });
    }
  }]), t;
}(PureComponent);
AnnotationLayerInternal.propTypes = {
  imageResourcesPath: propTypes.exports.string,
  linkService: isLinkService.isRequired,
  onGetAnnotationsError: propTypes.exports.func,
  onGetAnnotationsSuccess: propTypes.exports.func,
  onRenderAnnotationLayerError: propTypes.exports.func,
  onRenderAnnotationLayerSuccess: propTypes.exports.func,
  page: isPage,
  renderForms: propTypes.exports.bool,
  rotate: isRotate,
  scale: propTypes.exports.number
};
var AnnotationLayer = function i(a) {
  return /* @__PURE__ */ jsx(DocumentContext.Consumer, {
    children: function(t) {
      return /* @__PURE__ */ jsx(PageContext.Consumer, {
        children: function(e) {
          return /* @__PURE__ */ jsx(AnnotationLayerInternal, {
            ...t,
            ...e,
            ...a
          });
        }
      });
    }
  });
};
function ownKeys(i, a) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(i);
    a && (e = e.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
function _objectSpread(i) {
  for (var a = 1; a < arguments.length; a++) {
    var t = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ownKeys(Object(t), !0).forEach(function(e) {
      _defineProperty(i, e, t[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(t, e));
    });
  }
  return i;
}
function _createSuper(i) {
  var a = _isNativeReflectConstruct();
  return function() {
    var e = _getPrototypeOf(i), n;
    if (a) {
      var o = _getPrototypeOf(this).constructor;
      n = Reflect.construct(e, arguments, o);
    } else
      n = e.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var defaultScale = 1, PageInternal = /* @__PURE__ */ function(i) {
  _inherits(t, i);
  var a = _createSuper(t);
  function t() {
    var e;
    _classCallCheck(this, t);
    for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++)
      o[d] = arguments[d];
    return e = a.call.apply(a, [this].concat(o)), _defineProperty(_assertThisInitialized(e), "state", {
      page: null
    }), _defineProperty(_assertThisInitialized(e), "pageElement", /* @__PURE__ */ createRef()), _defineProperty(_assertThisInitialized(e), "onLoadSuccess", function() {
      var u = e.props, g = u.onLoadSuccess, P = u.registerPage, F = e.state.page;
      g && g(makePageCallback(F, e.scale)), P && P(e.pageIndex, e.pageElement.current);
    }), _defineProperty(_assertThisInitialized(e), "onLoadError", function(u) {
      e.setState({
        page: !1
      }), warning(u);
      var g = e.props.onLoadError;
      g && g(u);
    }), _defineProperty(_assertThisInitialized(e), "loadPage", function() {
      var u = e.props.pdf, g = e.getPageNumber();
      if (!!g) {
        e.setState(function(F) {
          return F.page ? {
            page: null
          } : null;
        });
        var P = makeCancellablePromise(u.getPage(g));
        e.runningTask = P, P.promise.then(function(F) {
          e.setState({
            page: F
          }, e.onLoadSuccess);
        }).catch(function(F) {
          e.onLoadError(F);
        });
      }
    }), e;
  }
  return _createClass(t, [{
    key: "componentDidMount",
    value: function() {
      var n = this.props.pdf;
      invariant(n, "Attempted to load a page, but no document was specified."), this.loadPage();
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var o = this.props.pdf;
      if (n.pdf && o !== n.pdf || this.getPageNumber() !== this.getPageNumber(n)) {
        var d = this.props.unregisterPage;
        d && d(this.getPageIndex(n)), this.loadPage();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      var n = this.props.unregisterPage;
      n && n(this.pageIndex), cancelRunningTask(this.runningTask);
    }
  }, {
    key: "childContext",
    get: function() {
      var n = this.state.page;
      if (!n)
        return {};
      var o = this.props, d = o.canvasBackground, u = o.customTextRenderer, g = o.onGetAnnotationsError, P = o.onGetAnnotationsSuccess, F = o.onGetTextError, D = o.onGetTextSuccess, B = o.onRenderAnnotationLayerError, x = o.onRenderAnnotationLayerSuccess, w = o.onRenderError, O = o.onRenderSuccess, k = o.renderForms, W = o.renderInteractiveForms;
      return {
        canvasBackground: d,
        customTextRenderer: u,
        onGetAnnotationsError: g,
        onGetAnnotationsSuccess: P,
        onGetTextError: F,
        onGetTextSuccess: D,
        onRenderAnnotationLayerError: B,
        onRenderAnnotationLayerSuccess: x,
        onRenderError: w,
        onRenderSuccess: O,
        page: n,
        renderForms: k != null ? k : W,
        rotate: this.rotate,
        scale: this.scale
      };
    }
  }, {
    key: "getPageIndex",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return isProvided(n.pageNumber) ? n.pageNumber - 1 : isProvided(n.pageIndex) ? n.pageIndex : null;
    }
  }, {
    key: "getPageNumber",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return isProvided(n.pageNumber) ? n.pageNumber : isProvided(n.pageIndex) ? n.pageIndex + 1 : null;
    }
  }, {
    key: "pageIndex",
    get: function() {
      return this.getPageIndex();
    }
  }, {
    key: "pageNumber",
    get: function() {
      return this.getPageNumber();
    }
  }, {
    key: "rotate",
    get: function() {
      var n = this.props.rotate;
      if (isProvided(n))
        return n;
      var o = this.state.page;
      return o ? o.rotate : null;
    }
  }, {
    key: "scale",
    get: function() {
      var n = this.state.page;
      if (!n)
        return null;
      var o = this.props, d = o.scale, u = o.width, g = o.height, P = this.rotate, F = 1, D = d === null ? defaultScale : d;
      if (u || g) {
        var B = n.getViewport({
          scale: 1,
          rotation: P
        });
        F = u ? u / B.width : g / B.height;
      }
      return D * F;
    }
  }, {
    key: "eventProps",
    get: function() {
      var n = this;
      return makeEventProps(this.props, function() {
        var o = n.state.page;
        return o && makePageCallback(o, n.scale);
      });
    }
  }, {
    key: "pageKey",
    get: function() {
      var n = this.state.page;
      return "".concat(n.pageIndex, "@").concat(this.scale, "/").concat(this.rotate);
    }
  }, {
    key: "pageKeyNoScale",
    get: function() {
      var n = this.state.page;
      return "".concat(n.pageIndex, "/").concat(this.rotate);
    }
  }, {
    key: "renderMainLayer",
    value: function() {
      var n = this.props, o = n.canvasRef, d = n.renderMode;
      switch (d) {
        case "none":
          return null;
        case "svg":
          return /* @__PURE__ */ jsx(PageSVG, {}, "".concat(this.pageKeyNoScale, "_svg"));
        case "canvas":
        default:
          return /* @__PURE__ */ jsx(PageCanvas, {
            canvasRef: o
          }, "".concat(this.pageKey, "_canvas"));
      }
    }
  }, {
    key: "renderTextLayer",
    value: function() {
      var n = this.props.renderTextLayer;
      return n ? /* @__PURE__ */ jsx(TextLayer, {}, "".concat(this.pageKey, "_text")) : null;
    }
  }, {
    key: "renderAnnotationLayer",
    value: function() {
      var n = this.props.renderAnnotationLayer;
      return n ? /* @__PURE__ */ jsx(AnnotationLayer, {}, "".concat(this.pageKey, "_annotations")) : null;
    }
  }, {
    key: "renderChildren",
    value: function() {
      var n = this.props.children;
      return /* @__PURE__ */ jsxs(PageContext.Provider, {
        value: this.childContext,
        children: [this.renderMainLayer(), this.renderTextLayer(), this.renderAnnotationLayer(), n]
      });
    }
  }, {
    key: "renderContent",
    value: function() {
      var n = this.pageNumber, o = this.props.pdf, d = this.state.page;
      if (!n) {
        var u = this.props.noData;
        return /* @__PURE__ */ jsx(Message, {
          type: "no-data",
          children: typeof u == "function" ? u() : u
        });
      }
      if (o === null || d === null) {
        var g = this.props.loading;
        return /* @__PURE__ */ jsx(Message, {
          type: "loading",
          children: typeof g == "function" ? g() : g
        });
      }
      if (o === !1 || d === !1) {
        var P = this.props.error;
        return /* @__PURE__ */ jsx(Message, {
          type: "error",
          children: typeof P == "function" ? P() : P
        });
      }
      return this.renderChildren();
    }
  }, {
    key: "render",
    value: function() {
      var n = this.pageNumber, o = this.props, d = o.className, u = o.inputRef;
      return /* @__PURE__ */ jsx("div", {
        className: mergeClassNames("react-pdf__Page", d),
        "data-page-number": n,
        ref: mergeRefs(u, this.pageElement),
        style: {
          position: "relative"
        },
        ...this.eventProps,
        children: this.renderContent()
      });
    }
  }]), t;
}(PureComponent);
PageInternal.defaultProps = {
  error: "Failed to load the page.",
  loading: "Loading page\u2026",
  noData: "No page specified.",
  renderAnnotationLayer: !0,
  renderForms: !1,
  renderMode: "canvas",
  renderTextLayer: !0,
  scale: defaultScale
};
var isFunctionOrNode = propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.node]);
PageInternal.propTypes = _objectSpread(_objectSpread({}, eventProps), {}, {
  canvasBackground: propTypes.exports.string,
  children: propTypes.exports.node,
  className: isClassName,
  customTextRenderer: propTypes.exports.func,
  error: isFunctionOrNode,
  height: propTypes.exports.number,
  imageResourcesPath: propTypes.exports.string,
  inputRef: isRef,
  loading: isFunctionOrNode,
  noData: isFunctionOrNode,
  onGetTextError: propTypes.exports.func,
  onGetTextSuccess: propTypes.exports.func,
  onLoadError: propTypes.exports.func,
  onLoadSuccess: propTypes.exports.func,
  onRenderError: propTypes.exports.func,
  onRenderSuccess: propTypes.exports.func,
  pageIndex: isPageIndex,
  pageNumber: isPageNumber,
  pdf: isPdf,
  registerPage: propTypes.exports.func,
  renderAnnotationLayer: propTypes.exports.bool,
  renderForms: propTypes.exports.bool,
  renderInteractiveForms: propTypes.exports.bool,
  renderMode: isRenderMode,
  renderTextLayer: propTypes.exports.bool,
  rotate: isRotate,
  scale: propTypes.exports.number,
  unregisterPage: propTypes.exports.func,
  width: propTypes.exports.number
});
function Page(i, a) {
  return /* @__PURE__ */ jsx(DocumentContext.Consumer, {
    children: function(t) {
      return /* @__PURE__ */ jsx(PageInternal, {
        ref: a,
        ...t,
        ...i
      });
    }
  });
}
const Page$1 = /* @__PURE__ */ require$$0.forwardRef(Page);
displayWorkerWarning();
pdf$2.exports.GlobalWorkerOptions.workerSrc = "pdf.worker.js";
const Viewer = ({
  file: i,
  options: a = {}
}) => {
  const [t, e] = useState(null), [n] = useState(1), o = useCallback(({
    numPages: d
  }) => {
    e(d);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Document, {
      file: i,
      options: a,
      onLoadSuccess: o,
      children: /* @__PURE__ */ jsx(Page$1, {
        pageNumber: n
      })
    }), /* @__PURE__ */ jsxs("p", {
      children: ["Page ", n, " of ", t]
    })]
  });
};
pdf$2.exports.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker", self.location).toString();
export {
  Viewer,
  pdf$1 as pdfjs
};
