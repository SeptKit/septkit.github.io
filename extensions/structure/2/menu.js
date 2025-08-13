import { z as Pi, A as ki, r as Ai, B as Ci, C as Di, D as Ni, E as Hn } from "./runtime-core.esm-bundler-DWLXL9NN.js";
function Ri(C) {
  return Pi() ? (ki(C), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function fi() {
  const C = /* @__PURE__ */ new Set(), P = (q) => {
    C.delete(q);
  };
  return {
    on: (q) => {
      C.add(q);
      const V = () => P(q);
      return Ri(V), {
        off: V
      };
    },
    off: P,
    trigger: (...q) => Promise.all(Array.from(C).map((V) => V(...q))),
    clear: () => {
      C.clear();
    }
  };
}
const Ii = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ki = (C, P) => Object.prototype.hasOwnProperty.call(C, P), ji = Ii ? window.document : void 0;
function Fi(C) {
  var P;
  const K = Hn(C);
  return (P = K?.$el) != null ? P : K;
}
const Bi = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function qi(C) {
  if (!C)
    return null;
  if (C instanceof FileList)
    return C;
  const P = new DataTransfer();
  for (const K of C)
    P.items.add(K);
  return P.files;
}
function Mi(C = {}) {
  const {
    document: P = ji
  } = C, K = Ai(qi(C.initialFiles)), { on: E, trigger: M } = /* @__PURE__ */ fi(), { on: q, trigger: V } = /* @__PURE__ */ fi(), L = Ci(() => {
    var X;
    const U = (X = Fi(C.input)) != null ? X : P ? P.createElement("input") : void 0;
    return U && (U.type = "file", U.onchange = (H) => {
      const Z = H.target;
      K.value = Z.files, M(K.value);
    }, U.oncancel = () => {
      V();
    }), U;
  }), J = () => {
    K.value = null, L.value && L.value.value && (L.value.value = "", M(null));
  }, fe = (X) => {
    const U = L.value;
    U && (U.multiple = Hn(X.multiple), U.accept = Hn(X.accept), U.webkitdirectory = Hn(X.directory), Ki(X, "capture") && (U.capture = Hn(X.capture)));
  }, _e = (X) => {
    const U = L.value;
    if (!U)
      return;
    const H = {
      ...Bi,
      ...C,
      ...X
    };
    fe(H), Hn(H.reset) && J(), U.click();
  };
  return Di(() => {
    fe(C);
  }), {
    files: Ni(K),
    open: _e,
    reset: J,
    onCancel: q,
    onChange: E
  };
}
var Li = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ui(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
function Vi(C) {
  if (Object.prototype.hasOwnProperty.call(C, "__esModule")) return C;
  var P = C.default;
  if (typeof P == "function") {
    var K = function E() {
      var M = !1;
      try {
        M = this instanceof E;
      } catch {
      }
      return M ? Reflect.construct(P, arguments, this.constructor) : P.apply(this, arguments);
    };
    K.prototype = P.prototype;
  } else K = {};
  return Object.defineProperty(K, "__esModule", { value: !0 }), Object.keys(C).forEach(function(E) {
    var M = Object.getOwnPropertyDescriptor(C, E);
    Object.defineProperty(K, E, M.get ? M : {
      enumerable: !0,
      get: function() {
        return C[E];
      }
    });
  }), K;
}
var hi = {};
const Gi = {}, zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gi
}, Symbol.toStringTag, { value: "Module" })), di = /* @__PURE__ */ Vi(zi);
var pi;
function Qi() {
  return pi || (pi = 1, (function(C) {
    (function(P) {
      P.parser = function(b, p) {
        return new E(b, p);
      }, P.SAXParser = E, P.SAXStream = _e, P.createStream = fe, P.MAX_BUFFER_LENGTH = 64 * 1024;
      var K = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      P.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function E(b, p) {
        if (!(this instanceof E))
          return new E(b, p);
        var T = this;
        q(T), T.q = T.c = "", T.bufferCheckPosition = P.MAX_BUFFER_LENGTH, T.opt = p || {}, T.opt.lowercase = T.opt.lowercase || T.opt.lowercasetags, T.looseCase = T.opt.lowercase ? "toLowerCase" : "toUpperCase", T.tags = [], T.closed = T.closedRoot = T.sawRoot = !1, T.tag = T.error = null, T.strict = !!b, T.noscript = !!(b || T.opt.noscript), T.state = N.BEGIN, T.strictEntities = T.opt.strictEntities, T.ENTITIES = T.strictEntities ? Object.create(P.XML_ENTITIES) : Object.create(P.ENTITIES), T.attribList = [], T.opt.xmlns && (T.ns = Object.create(oe)), T.opt.unquotedAttributeValues === void 0 && (T.opt.unquotedAttributeValues = !b), T.trackPosition = T.opt.position !== !1, T.trackPosition && (T.position = T.line = T.column = 0), ut(T, "onready");
      }
      Object.create || (Object.create = function(b) {
        function p() {
        }
        p.prototype = b;
        var T = new p();
        return T;
      }), Object.keys || (Object.keys = function(b) {
        var p = [];
        for (var T in b) b.hasOwnProperty(T) && p.push(T);
        return p;
      });
      function M(b) {
        for (var p = Math.max(P.MAX_BUFFER_LENGTH, 10), T = 0, k = 0, le = K.length; k < le; k++) {
          var Q = b[K[k]].length;
          if (Q > p)
            switch (K[k]) {
              case "textNode":
                xe(b);
                break;
              case "cdata":
                ie(b, "oncdata", b.cdata), b.cdata = "";
                break;
              case "script":
                ie(b, "onscript", b.script), b.script = "";
                break;
              default:
                st(b, "Max buffer length exceeded: " + K[k]);
            }
          T = Math.max(T, Q);
        }
        var ge = P.MAX_BUFFER_LENGTH - T;
        b.bufferCheckPosition = ge + b.position;
      }
      function q(b) {
        for (var p = 0, T = K.length; p < T; p++)
          b[K[p]] = "";
      }
      function V(b) {
        xe(b), b.cdata !== "" && (ie(b, "oncdata", b.cdata), b.cdata = ""), b.script !== "" && (ie(b, "onscript", b.script), b.script = "");
      }
      E.prototype = {
        end: function() {
          Nt(this);
        },
        write: $e,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          V(this);
        }
      };
      var L;
      try {
        L = di.Stream;
      } catch {
        L = function() {
        };
      }
      L || (L = function() {
      });
      var J = P.EVENTS.filter(function(b) {
        return b !== "error" && b !== "end";
      });
      function fe(b, p) {
        return new _e(b, p);
      }
      function _e(b, p) {
        if (!(this instanceof _e))
          return new _e(b, p);
        L.apply(this), this._parser = new E(b, p), this.writable = !0, this.readable = !0;
        var T = this;
        this._parser.onend = function() {
          T.emit("end");
        }, this._parser.onerror = function(k) {
          T.emit("error", k), T._parser.error = null;
        }, this._decoder = null, J.forEach(function(k) {
          Object.defineProperty(T, "on" + k, {
            get: function() {
              return T._parser["on" + k];
            },
            set: function(le) {
              if (!le)
                return T.removeAllListeners(k), T._parser["on" + k] = le, le;
              T.on(k, le);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      _e.prototype = Object.create(L.prototype, {
        constructor: {
          value: _e
        }
      }), _e.prototype.write = function(b) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(b)) {
          if (!this._decoder) {
            var p = di.StringDecoder;
            this._decoder = new p("utf8");
          }
          b = this._decoder.write(b);
        }
        return this._parser.write(b.toString()), this.emit("data", b), !0;
      }, _e.prototype.end = function(b) {
        return b && b.length && this.write(b), this._parser.end(), !0;
      }, _e.prototype.on = function(b, p) {
        var T = this;
        return !T._parser["on" + b] && J.indexOf(b) !== -1 && (T._parser["on" + b] = function() {
          var k = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          k.splice(0, 0, b), T.emit.apply(T, k);
        }), L.prototype.on.call(T, b, p);
      };
      var X = "[CDATA[", U = "DOCTYPE", H = "http://www.w3.org/XML/1998/namespace", Z = "http://www.w3.org/2000/xmlns/", oe = { xml: H, xmlns: Z }, te = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ce = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Ne = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ee = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function se(b) {
        return b === " " || b === `
` || b === "\r" || b === "	";
      }
      function Oe(b) {
        return b === '"' || b === "'";
      }
      function Pe(b) {
        return b === ">" || se(b);
      }
      function ce(b, p) {
        return b.test(p);
      }
      function jt(b, p) {
        return !ce(b, p);
      }
      var N = 0;
      P.STATE = {
        BEGIN: N++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: N++,
        // leading whitespace
        TEXT: N++,
        // general stuff
        TEXT_ENTITY: N++,
        // &amp and such.
        OPEN_WAKA: N++,
        // <
        SGML_DECL: N++,
        // <!BLARG
        SGML_DECL_QUOTED: N++,
        // <!BLARG foo "bar
        DOCTYPE: N++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: N++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: N++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: N++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: N++,
        // <!-
        COMMENT: N++,
        // <!--
        COMMENT_ENDING: N++,
        // <!-- blah -
        COMMENT_ENDED: N++,
        // <!-- blah --
        CDATA: N++,
        // <![CDATA[ something
        CDATA_ENDING: N++,
        // ]
        CDATA_ENDING_2: N++,
        // ]]
        PROC_INST: N++,
        // <?hi
        PROC_INST_BODY: N++,
        // <?hi there
        PROC_INST_ENDING: N++,
        // <?hi "there" ?
        OPEN_TAG: N++,
        // <strong
        OPEN_TAG_SLASH: N++,
        // <strong /
        ATTRIB: N++,
        // <a
        ATTRIB_NAME: N++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: N++,
        // <a foo _
        ATTRIB_VALUE: N++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: N++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: N++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: N++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: N++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: N++,
        // <foo bar=&quot
        CLOSE_TAG: N++,
        // </a
        CLOSE_TAG_SAW_WHITE: N++,
        // </a   >
        SCRIPT: N++,
        // <script> ...
        SCRIPT_ENDING: N++
        // <script> ... <
      }, P.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, P.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      }, Object.keys(P.ENTITIES).forEach(function(b) {
        var p = P.ENTITIES[b], T = typeof p == "number" ? String.fromCharCode(p) : p;
        P.ENTITIES[b] = T;
      });
      for (var gt in P.STATE)
        P.STATE[P.STATE[gt]] = gt;
      N = P.STATE;
      function ut(b, p, T) {
        b[p] && b[p](T);
      }
      function ie(b, p, T) {
        b.textNode && xe(b), ut(b, p, T);
      }
      function xe(b) {
        b.textNode = Ft(b.opt, b.textNode), b.textNode && ut(b, "ontext", b.textNode), b.textNode = "";
      }
      function Ft(b, p) {
        return b.trim && (p = p.trim()), b.normalize && (p = p.replace(/\s+/g, " ")), p;
      }
      function st(b, p) {
        return xe(b), b.trackPosition && (p += `
Line: ` + b.line + `
Column: ` + b.column + `
Char: ` + b.c), p = new Error(p), b.error = p, ut(b, "onerror", p), b;
      }
      function Nt(b) {
        return b.sawRoot && !b.closedRoot && ve(b, "Unclosed root tag"), b.state !== N.BEGIN && b.state !== N.BEGIN_WHITESPACE && b.state !== N.TEXT && st(b, "Unexpected end"), xe(b), b.c = "", b.closed = !0, ut(b, "onend"), E.call(b, b.strict, b.opt), b;
      }
      function ve(b, p) {
        if (typeof b != "object" || !(b instanceof E))
          throw new Error("bad call to strictFail");
        b.strict && st(b, p);
      }
      function qe(b) {
        b.strict || (b.tagName = b.tagName[b.looseCase]());
        var p = b.tags[b.tags.length - 1] || b, T = b.tag = { name: b.tagName, attributes: {} };
        b.opt.xmlns && (T.ns = p.ns), b.attribList.length = 0, ie(b, "onopentagstart", T);
      }
      function Me(b, p) {
        var T = b.indexOf(":"), k = T < 0 ? ["", b] : b.split(":"), le = k[0], Q = k[1];
        return p && b === "xmlns" && (le = "xmlns", Q = ""), { prefix: le, local: Q };
      }
      function De(b) {
        if (b.strict || (b.attribName = b.attribName[b.looseCase]()), b.attribList.indexOf(b.attribName) !== -1 || b.tag.attributes.hasOwnProperty(b.attribName)) {
          b.attribName = b.attribValue = "";
          return;
        }
        if (b.opt.xmlns) {
          var p = Me(b.attribName, !0), T = p.prefix, k = p.local;
          if (T === "xmlns")
            if (k === "xml" && b.attribValue !== H)
              ve(
                b,
                "xml: prefix must be bound to " + H + `
Actual: ` + b.attribValue
              );
            else if (k === "xmlns" && b.attribValue !== Z)
              ve(
                b,
                "xmlns: prefix must be bound to " + Z + `
Actual: ` + b.attribValue
              );
            else {
              var le = b.tag, Q = b.tags[b.tags.length - 1] || b;
              le.ns === Q.ns && (le.ns = Object.create(Q.ns)), le.ns[k] = b.attribValue;
            }
          b.attribList.push([b.attribName, b.attribValue]);
        } else
          b.tag.attributes[b.attribName] = b.attribValue, ie(b, "onattribute", {
            name: b.attribName,
            value: b.attribValue
          });
        b.attribName = b.attribValue = "";
      }
      function We(b, p) {
        if (b.opt.xmlns) {
          var T = b.tag, k = Me(b.tagName);
          T.prefix = k.prefix, T.local = k.local, T.uri = T.ns[k.prefix] || "", T.prefix && !T.uri && (ve(b, "Unbound namespace prefix: " + JSON.stringify(b.tagName)), T.uri = k.prefix);
          var le = b.tags[b.tags.length - 1] || b;
          T.ns && le.ns !== T.ns && Object.keys(T.ns).forEach(function(hn) {
            ie(b, "onopennamespace", {
              prefix: hn,
              uri: T.ns[hn]
            });
          });
          for (var Q = 0, ge = b.attribList.length; Q < ge; Q++) {
            var Be = b.attribList[Q], we = Be[0], Rt = Be[1], Re = Me(we, !0), ct = Re.prefix, $n = Re.local, It = ct === "" ? "" : T.ns[ct] || "", ke = {
              name: we,
              value: Rt,
              prefix: ct,
              local: $n,
              uri: It
            };
            ct && ct !== "xmlns" && !It && (ve(b, "Unbound namespace prefix: " + JSON.stringify(ct)), ke.uri = ct), b.tag.attributes[we] = ke, ie(b, "onattribute", ke);
          }
          b.attribList.length = 0;
        }
        b.tag.isSelfClosing = !!p, b.sawRoot = !0, b.tags.push(b.tag), ie(b, "onopentag", b.tag), p || (!b.noscript && b.tagName.toLowerCase() === "script" ? b.state = N.SCRIPT : b.state = N.TEXT, b.tag = null, b.tagName = ""), b.attribName = b.attribValue = "", b.attribList.length = 0;
      }
      function dn(b) {
        if (!b.tagName) {
          ve(b, "Weird empty close tag."), b.textNode += "</>", b.state = N.TEXT;
          return;
        }
        if (b.script) {
          if (b.tagName !== "script") {
            b.script += "</" + b.tagName + ">", b.tagName = "", b.state = N.SCRIPT;
            return;
          }
          ie(b, "onscript", b.script), b.script = "";
        }
        var p = b.tags.length, T = b.tagName;
        b.strict || (T = T[b.looseCase]());
        for (var k = T; p--; ) {
          var le = b.tags[p];
          if (le.name !== k)
            ve(b, "Unexpected close tag");
          else
            break;
        }
        if (p < 0) {
          ve(b, "Unmatched closing tag: " + b.tagName), b.textNode += "</" + b.tagName + ">", b.state = N.TEXT;
          return;
        }
        b.tagName = T;
        for (var Q = b.tags.length; Q-- > p; ) {
          var ge = b.tag = b.tags.pop();
          b.tagName = b.tag.name, ie(b, "onclosetag", b.tagName);
          var Be = {};
          for (var we in ge.ns)
            Be[we] = ge.ns[we];
          var Rt = b.tags[b.tags.length - 1] || b;
          b.opt.xmlns && ge.ns !== Rt.ns && Object.keys(ge.ns).forEach(function(Re) {
            var ct = ge.ns[Re];
            ie(b, "onclosenamespace", { prefix: Re, uri: ct });
          });
        }
        p === 0 && (b.closedRoot = !0), b.tagName = b.attribValue = b.attribName = "", b.attribList.length = 0, b.state = N.TEXT;
      }
      function He(b) {
        var p = b.entity, T = p.toLowerCase(), k, le = "";
        return b.ENTITIES[p] ? b.ENTITIES[p] : b.ENTITIES[T] ? b.ENTITIES[T] : (p = T, p.charAt(0) === "#" && (p.charAt(1) === "x" ? (p = p.slice(2), k = parseInt(p, 16), le = k.toString(16)) : (p = p.slice(1), k = parseInt(p, 10), le = k.toString(10))), p = p.replace(/^0+/, ""), isNaN(k) || le.toLowerCase() !== p ? (ve(b, "Invalid character entity"), "&" + b.entity + ";") : String.fromCodePoint(k));
      }
      function fn(b, p) {
        p === "<" ? (b.state = N.OPEN_WAKA, b.startTagPosition = b.position) : se(p) || (ve(b, "Non-whitespace before first tag."), b.textNode = p, b.state = N.TEXT);
      }
      function yt(b, p) {
        var T = "";
        return p < b.length && (T = b.charAt(p)), T;
      }
      function $e(b) {
        var p = this;
        if (this.error)
          throw this.error;
        if (p.closed)
          return st(
            p,
            "Cannot write after close. Assign an onready handler."
          );
        if (b === null)
          return Nt(p);
        typeof b == "object" && (b = b.toString());
        for (var T = 0, k = ""; k = yt(b, T++), p.c = k, !!k; )
          switch (p.trackPosition && (p.position++, k === `
` ? (p.line++, p.column = 0) : p.column++), p.state) {
            case N.BEGIN:
              if (p.state = N.BEGIN_WHITESPACE, k === "\uFEFF")
                continue;
              fn(p, k);
              continue;
            case N.BEGIN_WHITESPACE:
              fn(p, k);
              continue;
            case N.TEXT:
              if (p.sawRoot && !p.closedRoot) {
                for (var le = T - 1; k && k !== "<" && k !== "&"; )
                  k = yt(b, T++), k && p.trackPosition && (p.position++, k === `
` ? (p.line++, p.column = 0) : p.column++);
                p.textNode += b.substring(le, T - 1);
              }
              k === "<" && !(p.sawRoot && p.closedRoot && !p.strict) ? (p.state = N.OPEN_WAKA, p.startTagPosition = p.position) : (!se(k) && (!p.sawRoot || p.closedRoot) && ve(p, "Text data outside of root node."), k === "&" ? p.state = N.TEXT_ENTITY : p.textNode += k);
              continue;
            case N.SCRIPT:
              k === "<" ? p.state = N.SCRIPT_ENDING : p.script += k;
              continue;
            case N.SCRIPT_ENDING:
              k === "/" ? p.state = N.CLOSE_TAG : (p.script += "<" + k, p.state = N.SCRIPT);
              continue;
            case N.OPEN_WAKA:
              if (k === "!")
                p.state = N.SGML_DECL, p.sgmlDecl = "";
              else if (!se(k)) if (ce(te, k))
                p.state = N.OPEN_TAG, p.tagName = k;
              else if (k === "/")
                p.state = N.CLOSE_TAG, p.tagName = "";
              else if (k === "?")
                p.state = N.PROC_INST, p.procInstName = p.procInstBody = "";
              else {
                if (ve(p, "Unencoded <"), p.startTagPosition + 1 < p.position) {
                  var Q = p.position - p.startTagPosition;
                  k = new Array(Q).join(" ") + k;
                }
                p.textNode += "<" + k, p.state = N.TEXT;
              }
              continue;
            case N.SGML_DECL:
              if (p.sgmlDecl + k === "--") {
                p.state = N.COMMENT, p.comment = "", p.sgmlDecl = "";
                continue;
              }
              p.doctype && p.doctype !== !0 && p.sgmlDecl ? (p.state = N.DOCTYPE_DTD, p.doctype += "<!" + p.sgmlDecl + k, p.sgmlDecl = "") : (p.sgmlDecl + k).toUpperCase() === X ? (ie(p, "onopencdata"), p.state = N.CDATA, p.sgmlDecl = "", p.cdata = "") : (p.sgmlDecl + k).toUpperCase() === U ? (p.state = N.DOCTYPE, (p.doctype || p.sawRoot) && ve(
                p,
                "Inappropriately located doctype declaration"
              ), p.doctype = "", p.sgmlDecl = "") : k === ">" ? (ie(p, "onsgmldeclaration", p.sgmlDecl), p.sgmlDecl = "", p.state = N.TEXT) : (Oe(k) && (p.state = N.SGML_DECL_QUOTED), p.sgmlDecl += k);
              continue;
            case N.SGML_DECL_QUOTED:
              k === p.q && (p.state = N.SGML_DECL, p.q = ""), p.sgmlDecl += k;
              continue;
            case N.DOCTYPE:
              k === ">" ? (p.state = N.TEXT, ie(p, "ondoctype", p.doctype), p.doctype = !0) : (p.doctype += k, k === "[" ? p.state = N.DOCTYPE_DTD : Oe(k) && (p.state = N.DOCTYPE_QUOTED, p.q = k));
              continue;
            case N.DOCTYPE_QUOTED:
              p.doctype += k, k === p.q && (p.q = "", p.state = N.DOCTYPE);
              continue;
            case N.DOCTYPE_DTD:
              k === "]" ? (p.doctype += k, p.state = N.DOCTYPE) : k === "<" ? (p.state = N.OPEN_WAKA, p.startTagPosition = p.position) : Oe(k) ? (p.doctype += k, p.state = N.DOCTYPE_DTD_QUOTED, p.q = k) : p.doctype += k;
              continue;
            case N.DOCTYPE_DTD_QUOTED:
              p.doctype += k, k === p.q && (p.state = N.DOCTYPE_DTD, p.q = "");
              continue;
            case N.COMMENT:
              k === "-" ? p.state = N.COMMENT_ENDING : p.comment += k;
              continue;
            case N.COMMENT_ENDING:
              k === "-" ? (p.state = N.COMMENT_ENDED, p.comment = Ft(p.opt, p.comment), p.comment && ie(p, "oncomment", p.comment), p.comment = "") : (p.comment += "-" + k, p.state = N.COMMENT);
              continue;
            case N.COMMENT_ENDED:
              k !== ">" ? (ve(p, "Malformed comment"), p.comment += "--" + k, p.state = N.COMMENT) : p.doctype && p.doctype !== !0 ? p.state = N.DOCTYPE_DTD : p.state = N.TEXT;
              continue;
            case N.CDATA:
              k === "]" ? p.state = N.CDATA_ENDING : p.cdata += k;
              continue;
            case N.CDATA_ENDING:
              k === "]" ? p.state = N.CDATA_ENDING_2 : (p.cdata += "]" + k, p.state = N.CDATA);
              continue;
            case N.CDATA_ENDING_2:
              k === ">" ? (p.cdata && ie(p, "oncdata", p.cdata), ie(p, "onclosecdata"), p.cdata = "", p.state = N.TEXT) : k === "]" ? p.cdata += "]" : (p.cdata += "]]" + k, p.state = N.CDATA);
              continue;
            case N.PROC_INST:
              k === "?" ? p.state = N.PROC_INST_ENDING : se(k) ? p.state = N.PROC_INST_BODY : p.procInstName += k;
              continue;
            case N.PROC_INST_BODY:
              if (!p.procInstBody && se(k))
                continue;
              k === "?" ? p.state = N.PROC_INST_ENDING : p.procInstBody += k;
              continue;
            case N.PROC_INST_ENDING:
              k === ">" ? (ie(p, "onprocessinginstruction", {
                name: p.procInstName,
                body: p.procInstBody
              }), p.procInstName = p.procInstBody = "", p.state = N.TEXT) : (p.procInstBody += "?" + k, p.state = N.PROC_INST_BODY);
              continue;
            case N.OPEN_TAG:
              ce(Ce, k) ? p.tagName += k : (qe(p), k === ">" ? We(p) : k === "/" ? p.state = N.OPEN_TAG_SLASH : (se(k) || ve(p, "Invalid character in tag name"), p.state = N.ATTRIB));
              continue;
            case N.OPEN_TAG_SLASH:
              k === ">" ? (We(p, !0), dn(p)) : (ve(p, "Forward-slash in opening tag not followed by >"), p.state = N.ATTRIB);
              continue;
            case N.ATTRIB:
              if (se(k))
                continue;
              k === ">" ? We(p) : k === "/" ? p.state = N.OPEN_TAG_SLASH : ce(te, k) ? (p.attribName = k, p.attribValue = "", p.state = N.ATTRIB_NAME) : ve(p, "Invalid attribute name");
              continue;
            case N.ATTRIB_NAME:
              k === "=" ? p.state = N.ATTRIB_VALUE : k === ">" ? (ve(p, "Attribute without value"), p.attribValue = p.attribName, De(p), We(p)) : se(k) ? p.state = N.ATTRIB_NAME_SAW_WHITE : ce(Ce, k) ? p.attribName += k : ve(p, "Invalid attribute name");
              continue;
            case N.ATTRIB_NAME_SAW_WHITE:
              if (k === "=")
                p.state = N.ATTRIB_VALUE;
              else {
                if (se(k))
                  continue;
                ve(p, "Attribute without value"), p.tag.attributes[p.attribName] = "", p.attribValue = "", ie(p, "onattribute", {
                  name: p.attribName,
                  value: ""
                }), p.attribName = "", k === ">" ? We(p) : ce(te, k) ? (p.attribName = k, p.state = N.ATTRIB_NAME) : (ve(p, "Invalid attribute name"), p.state = N.ATTRIB);
              }
              continue;
            case N.ATTRIB_VALUE:
              if (se(k))
                continue;
              Oe(k) ? (p.q = k, p.state = N.ATTRIB_VALUE_QUOTED) : (p.opt.unquotedAttributeValues || st(p, "Unquoted attribute value"), p.state = N.ATTRIB_VALUE_UNQUOTED, p.attribValue = k);
              continue;
            case N.ATTRIB_VALUE_QUOTED:
              if (k !== p.q) {
                k === "&" ? p.state = N.ATTRIB_VALUE_ENTITY_Q : p.attribValue += k;
                continue;
              }
              De(p), p.q = "", p.state = N.ATTRIB_VALUE_CLOSED;
              continue;
            case N.ATTRIB_VALUE_CLOSED:
              se(k) ? p.state = N.ATTRIB : k === ">" ? We(p) : k === "/" ? p.state = N.OPEN_TAG_SLASH : ce(te, k) ? (ve(p, "No whitespace between attributes"), p.attribName = k, p.attribValue = "", p.state = N.ATTRIB_NAME) : ve(p, "Invalid attribute name");
              continue;
            case N.ATTRIB_VALUE_UNQUOTED:
              if (!Pe(k)) {
                k === "&" ? p.state = N.ATTRIB_VALUE_ENTITY_U : p.attribValue += k;
                continue;
              }
              De(p), k === ">" ? We(p) : p.state = N.ATTRIB;
              continue;
            case N.CLOSE_TAG:
              if (p.tagName)
                k === ">" ? dn(p) : ce(Ce, k) ? p.tagName += k : p.script ? (p.script += "</" + p.tagName, p.tagName = "", p.state = N.SCRIPT) : (se(k) || ve(p, "Invalid tagname in closing tag"), p.state = N.CLOSE_TAG_SAW_WHITE);
              else {
                if (se(k))
                  continue;
                jt(te, k) ? p.script ? (p.script += "</" + k, p.state = N.SCRIPT) : ve(p, "Invalid tagname in closing tag.") : p.tagName = k;
              }
              continue;
            case N.CLOSE_TAG_SAW_WHITE:
              if (se(k))
                continue;
              k === ">" ? dn(p) : ve(p, "Invalid characters in closing tag");
              continue;
            case N.TEXT_ENTITY:
            case N.ATTRIB_VALUE_ENTITY_Q:
            case N.ATTRIB_VALUE_ENTITY_U:
              var ge, Be;
              switch (p.state) {
                case N.TEXT_ENTITY:
                  ge = N.TEXT, Be = "textNode";
                  break;
                case N.ATTRIB_VALUE_ENTITY_Q:
                  ge = N.ATTRIB_VALUE_QUOTED, Be = "attribValue";
                  break;
                case N.ATTRIB_VALUE_ENTITY_U:
                  ge = N.ATTRIB_VALUE_UNQUOTED, Be = "attribValue";
                  break;
              }
              if (k === ";") {
                var we = He(p);
                p.opt.unparsedEntities && !Object.values(P.XML_ENTITIES).includes(we) ? (p.entity = "", p.state = ge, p.write(we)) : (p[Be] += we, p.entity = "", p.state = ge);
              } else ce(p.entity.length ? Ee : Ne, k) ? p.entity += k : (ve(p, "Invalid character in entity name"), p[Be] += "&" + p.entity + k, p.entity = "", p.state = ge);
              continue;
            default:
              throw new Error(p, "Unknown state: " + p.state);
          }
        return p.position >= p.bufferCheckPosition && M(p), p;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var b = String.fromCharCode, p = Math.floor, T = function() {
          var k = 16384, le = [], Q, ge, Be = -1, we = arguments.length;
          if (!we)
            return "";
          for (var Rt = ""; ++Be < we; ) {
            var Re = Number(arguments[Be]);
            if (!isFinite(Re) || // `NaN`, `+Infinity`, or `-Infinity`
            Re < 0 || // not a valid Unicode code point
            Re > 1114111 || // not a valid Unicode code point
            p(Re) !== Re)
              throw RangeError("Invalid code point: " + Re);
            Re <= 65535 ? le.push(Re) : (Re -= 65536, Q = (Re >> 10) + 55296, ge = Re % 1024 + 56320, le.push(Q, ge)), (Be + 1 === we || le.length > k) && (Rt += b.apply(null, le), le.length = 0);
          }
          return Rt;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: T,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = T;
      })();
    })(C);
  })(hi)), hi;
}
var Yi = Qi();
const Wi = [".fsd", ".asd", ".ssd", ".scd"], Ei = [
  "AllocationRole",
  "AllocationRoleRef",
  "AnalogueWiringParameters",
  "AnalogueWiringParametersRef",
  "Application",
  "ApplicationSclRef",
  "BayType",
  "BehaviorDescription",
  "BehaviorDescriptionRef",
  "BehaviorReference",
  "BinaryWiringParameters",
  "BinaryWiringParametersRef",
  "CheckoutID",
  "CommunicationServiceSpecifications",
  "ControlRef",
  "ControllingLNode",
  "DAS",
  "DOS",
  "FunctionCatRef",
  "FunctionCategory",
  "FunctionCategoryRef",
  "FunctionRef",
  "FunctionRole",
  "FunctionRoleContent",
  "FunctionSclRef",
  "FunctionTemplate",
  "FunctionalSubVariant",
  "FunctionalVariant",
  "FunctionalVariantGroup",
  "FunctionalVariantRef",
  "GooseParameters",
  "GooseParametersRef",
  "InputVar",
  "InputVarRef",
  "L2CommParameters",
  "L3IPv4CommParameters",
  "L3IPv6CommParameters",
  "LNodeDataRef",
  "LNodeInputRef",
  "LNodeInputs",
  "LNodeOutputRef",
  "LNodeOutputs",
  "LNodeSpecNaming",
  "LogParameters",
  "LogParametersRef",
  "OutputVar",
  "OutputVarRef",
  "PowerSystemRelation",
  "PowerSystemRelationRef",
  "PowerSystemRelations",
  "ProcessEcho",
  "ProcessResource",
  "ProcessResourceRef",
  "ProcessResources",
  "Project",
  "ProjectProcessReference",
  "ReportParameters",
  "ReportParametersRef",
  "Resource",
  "SDS",
  "SMVParameters",
  "SMVParametersRef",
  "ServiceSpecifications",
  "SignalRole",
  "SourceRef",
  "SubCategory",
  "SubCheckoutID",
  "SubFunctionTemplate",
  "SubscriberLNode",
  "Variable",
  "VariableApplyTo",
  "VariableRef",
  "AccessControl",
  "AccessPoint",
  "Address",
  "Association",
  "Authentication",
  "BDA",
  "Bay",
  "BitRate",
  "ClientLN",
  "ClientServices",
  "CommProt",
  "Communication",
  "ConductingEquipment",
  "ConfDataSet",
  "ConfLNs",
  "ConfLdName",
  "ConfLogControl",
  "ConfReportControl",
  "ConfSG",
  "ConfSigRef",
  "ConnectedAP",
  "ConnectivityNode",
  "DA",
  "DAI",
  "DAType",
  "DO",
  "DOI",
  "DOType",
  "DataObjectDirectory",
  "DataSet",
  "DataSetDirectory",
  "DataTypeTemplates",
  "DynAssociation",
  "DynDataSet",
  "EnumType",
  "EnumVal",
  "EqFunction",
  "EqSubFunction",
  "ExtCtrl",
  "ExtRef",
  "FCDA",
  "FileHandling",
  "Function",
  "GOOSE",
  "GOOSEMcSecurity",
  "GOOSESecurity",
  "GSE",
  "GSEControl",
  "GSEDir",
  "GSESettings",
  "GSSE",
  "GeneralEquipment",
  "GetCBValues",
  "GetDataObjectDefinition",
  "GetDataSetValue",
  "GetDirectory",
  "Header",
  "History",
  "Hitem",
  "IED",
  "IEDName",
  "IEDSourceFiles",
  "Inputs",
  "IssuerName",
  "KDC",
  "LDevice",
  "LN",
  "LN0",
  "LNode",
  "LNodeType",
  "Label",
  "Labels",
  "Line",
  "Log",
  "LogControl",
  "LogSettings",
  "MaxTime",
  "McSecurity",
  "MinRequestedSCDFile",
  "MinRequestedSCDFiles",
  "MinTime",
  "MultiAPPerSubNet",
  "NeutralPoint",
  "OptFields",
  "Outputs",
  "P",
  "PhysConn",
  "PowerTransformer",
  "Private",
  "Process",
  "ProtNs",
  "Protocol",
  "ReadWrite",
  "RedProt",
  "ReportControl",
  "ReportSettings",
  "RptEnabled",
  "SCL",
  "SCSM",
  "SDI",
  "SDO",
  "SGEdit",
  "SMV",
  "SMVSecurity",
  "SMVSettings",
  "SMVsc",
  "SVMcSecurity",
  "SampledValueControl",
  "SamplesPerSec",
  "SclFileReference",
  "SecPerSamples",
  "Security",
  "Server",
  "ServerAt",
  "Services",
  "SetDataSetValue",
  "SettingControl",
  "SettingGroups",
  "SmpRate",
  "SmvOpts",
  "SourceFiles",
  "SubEquipment",
  "SubFunction",
  "SubNetwork",
  "Subject",
  "Substation",
  "SupSubscription",
  "TapChanger",
  "Terminal",
  "Text",
  "TimeSyncProt",
  "TimerActivatedControl",
  "TransformerWinding",
  "TrgOps",
  "Val",
  "ValueHandling",
  "Voltage",
  "VoltageLevel"
], oi = "++id, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName";
function Hi(C) {
  return C.reduce(
    (P, K) => (P[K] = oi, P),
    {}
  );
}
var ai = { exports: {} }, $i = ai.exports, mi;
function Xi() {
  return mi || (mi = 1, (function(C, P) {
    (function(K, E) {
      C.exports = E();
    })($i, function() {
      var K = function(e, t) {
        return (K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        })(e, t);
      }, E = function() {
        return (E = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
      };
      function M(e, t, n) {
        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Li, V = Object.keys, L = Array.isArray;
      function J(e, t) {
        return typeof t != "object" || V(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || q.Promise || (q.Promise = Promise);
      var fe = Object.getPrototypeOf, _e = {}.hasOwnProperty;
      function X(e, t) {
        return _e.call(e, t);
      }
      function U(e, t) {
        typeof t == "function" && (t = t(fe(e))), (typeof Reflect > "u" ? V : Reflect.ownKeys)(t).forEach(function(n) {
          Z(e, n, t[n]);
        });
      }
      var H = Object.defineProperty;
      function Z(e, t, n, r) {
        H(e, t, J(n && X(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function oe(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), Z(e.prototype, "constructor", e), { extend: U.bind(null, e.prototype) };
        } };
      }
      var te = Object.getOwnPropertyDescriptor, Ce = [].slice;
      function Ne(e, t, n) {
        return Ce.call(e, t, n);
      }
      function Ee(e, t) {
        return t(e);
      }
      function se(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Oe(e) {
        q.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Pe(e, t) {
        if (typeof t == "string" && X(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, i = t.length; r < i; ++r) {
            var o = Pe(e, t[r]);
            n.push(o);
          }
          return n;
        }
        var a = t.indexOf(".");
        if (a !== -1) {
          var u = e[t.substr(0, a)];
          return u == null ? void 0 : Pe(u, t.substr(a + 1));
        }
      }
      function ce(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          se(typeof n != "string" && "length" in n);
          for (var r = 0, i = t.length; r < i; ++r) ce(e, t[r], n[r]);
        } else {
          var o, a, u = t.indexOf(".");
          u !== -1 ? (o = t.substr(0, u), (a = t.substr(u + 1)) === "" ? n === void 0 ? L(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : ce(u = !(u = e[o]) || !X(e, o) ? e[o] = {} : u, a, n)) : n === void 0 ? L(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function jt(e) {
        var t, n = {};
        for (t in e) X(e, t) && (n[t] = e[t]);
        return n;
      }
      var N = [].concat;
      function gt(e) {
        return N.apply([], e);
      }
      var Xe = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(gt([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return q[e];
      }), ut = new Set(Xe.map(function(e) {
        return q[e];
      })), ie = null;
      function xe(e) {
        return ie = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var r = ie.get(n);
          if (r) return r;
          if (L(n)) {
            r = [], ie.set(n, r);
            for (var i = 0, o = n.length; i < o; ++i) r.push(t(n[i]));
          } else if (ut.has(n.constructor)) r = n;
          else {
            var a, u = fe(n);
            for (a in r = u === Object.prototype ? {} : Object.create(u), ie.set(n, r), n) X(n, a) && (r[a] = t(n[a]));
          }
          return r;
        })(e), ie = null, e;
      }
      var Ft = {}.toString;
      function st(e) {
        return Ft.call(e).slice(8, -1);
      }
      var Nt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ve = typeof Nt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Nt]) && t.apply(e);
      } : function() {
        return null;
      };
      function qe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var Me = {};
      function De(e) {
        var t, n, r, i;
        if (arguments.length === 1) {
          if (L(e)) return e.slice();
          if (this === Me && typeof e == "string") return [e];
          if (i = ve(e)) {
            for (n = []; !(r = i.next()).done; ) n.push(r.value);
            return n;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (n = new Array(t); t--; ) n[t] = e[t];
          return n;
        }
        for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
        return n;
      }
      var We = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, wt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Ae = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(wt), dn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function He(e, t) {
        this.name = e, this.message = t;
      }
      function fn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, i) {
          return i.indexOf(n) === r;
        }).join(`
`);
      }
      function yt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = fn(e, t);
      }
      function $e(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = fn(e, this.failures);
      }
      oe(He).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), oe(yt).from(He), oe($e).from(He);
      var b = Ae.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), p = He, T = Ae.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, o) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = dn[t] || n, this.inner = null);
        }
        return oe(r).from(p), e[t] = r, e;
      }, {});
      T.Syntax = SyntaxError, T.Type = TypeError, T.Range = RangeError;
      var k = wt.reduce(function(e, t) {
        return e[t + "Error"] = T[t], e;
      }, {}), le = Ae.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = T[t]), e;
      }, {});
      function Q() {
      }
      function ge(e) {
        return e;
      }
      function Be(e, t) {
        return e == null || e === ge ? t : function(n) {
          return t(e(n));
        };
      }
      function we(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Rt(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? we(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? we(i, this.onerror) : i), o !== void 0 ? o : n;
        };
      }
      function Re(e, t) {
        return e === Q ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? we(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? we(r, this.onerror) : r);
        };
      }
      function ct(e, t) {
        return e === Q ? t : function(n) {
          var r = e.apply(this, arguments);
          J(n, r);
          var i = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? we(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? we(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : J(r, n);
        };
      }
      function $n(e, t) {
        return e === Q ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function It(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var r = this, i = arguments.length, o = new Array(i); i--; ) o[i] = arguments[i];
            return n.then(function() {
              return t.apply(r, o);
            });
          }
          return t.apply(this, arguments);
        };
      }
      le.ModifyError = yt, le.DexieError = He, le.BulkError = $e;
      var ke = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function hn(e) {
        ke = e;
      }
      var bt = {}, Xn = 100, Xe = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, fe(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, fe(t), e];
      })(), wt = Xe[0], Ae = Xe[1], Xe = Xe[2], Ae = Ae && Ae.then, Je = wt && wt.constructor, pn = !!Xe, _t = function(e, t) {
        Et.push([e, t]), Bt && (queueMicrotask(Ir), Bt = !1);
      }, mn = !0, Bt = !0, Ze = [], qt = [], yn = ge, Le = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, B = Le, Et = [], et = 0, Mt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = B;
        if (typeof e != "function") {
          if (e !== bt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && gn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, (function n(r, i) {
          try {
            i(function(o) {
              if (r._state === null) {
                if (o === r) throw new TypeError("A promise cannot be resolved with itself.");
                var a = r._lib && lt();
                o && typeof o.then == "function" ? n(r, function(u, c) {
                  o instanceof j ? o._then(u, c) : o.then(u, c);
                }) : (r._state = !0, r._value = o, Zn(r)), a && ft();
              }
            }, gn.bind(null, r));
          } catch (o) {
            gn(r, o);
          }
        })(this, e);
      }
      var vn = { get: function() {
        var e = B, t = Gt;
        function n(r, i) {
          var o = this, a = !e.global && (e !== B || t !== Gt), u = a && !Ve(), c = new j(function(f, m) {
            bn(o, new Jn(tr(r, e, a, u), tr(i, e, a, u), f, m, e));
          });
          return this._consoleTask && (c._consoleTask = this._consoleTask), c;
        }
        return n.prototype = bt, n;
      }, set: function(e) {
        Z(this, "then", e && e.prototype === bt ? vn : { get: function() {
          return e;
        }, set: vn.set });
      } };
      function Jn(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
      }
      function gn(e, t) {
        var n, r;
        qt.push(t), e._state === null && (n = e._lib && lt(), t = yn(t), e._state = !1, e._value = t, r = e, Ze.some(function(i) {
          return i._value === r._value;
        }) || Ze.push(r), Zn(e), n && ft());
      }
      function Zn(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) bn(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), et === 0 && (++et, _t(function() {
          --et == 0 && wn();
        }, []));
      }
      function bn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++et, _t(Rr, [n, e, t]);
        } else e._listeners.push(t);
      }
      function Rr(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && qt.length && (qt = []), r = ke && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), t._state || qt.indexOf(i) !== -1 || (function(o) {
            for (var a = Ze.length; a; ) if (Ze[--a]._value === o._value) return Ze.splice(a, 1);
          })(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --et == 0 && wn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Ir() {
        tt(Le, function() {
          lt() && ft();
        });
      }
      function lt() {
        var e = mn;
        return Bt = mn = !1, e;
      }
      function ft() {
        var e, t, n;
        do
          for (; 0 < Et.length; ) for (e = Et, Et = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < Et.length);
        Bt = mn = !0;
      }
      function wn() {
        var e = Ze;
        Ze = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = Mt.slice(0), n = t.length; n; ) t[--n]();
      }
      function Lt(e) {
        return new j(bt, !1, e);
      }
      function re(e, t) {
        var n = B;
        return function() {
          var r = lt(), i = B;
          try {
            return Ge(n, !0), e.apply(this, arguments);
          } catch (o) {
            t && t(o);
          } finally {
            Ge(i, !1), r && ft();
          }
        };
      }
      U(j.prototype, { then: vn, _then: function(e, t) {
        bn(this, new Jn(null, null, e, t, B));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : Lt)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : Lt)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return j.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return j.resolve(e()).then(function() {
            return Lt(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new j(function(r, i) {
          var o = setTimeout(function() {
            return i(new T.Timeout(t));
          }, e);
          n.then(r, i).finally(clearTimeout.bind(null, o));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Z(j.prototype, Symbol.toStringTag, "Dexie.Promise"), Le.env = er(), U(j, { all: function() {
        var e = De.apply(null, arguments).map(zt);
        return new j(function(t, n) {
          e.length === 0 && t([]);
          var r = e.length;
          e.forEach(function(i, o) {
            return j.resolve(i).then(function(a) {
              e[o] = a, --r || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof j ? e : e && typeof e.then == "function" ? new j(function(t, n) {
          e.then(t, n);
        }) : new j(bt, !0, e);
      }, reject: Lt, race: function() {
        var e = De.apply(null, arguments).map(zt);
        return new j(function(t, n) {
          e.map(function(r) {
            return j.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return B;
      }, set: function(e) {
        return B = e;
      } }, totalEchoes: { get: function() {
        return Gt;
      } }, newPSD: Ue, usePSD: tt, scheduler: { get: function() {
        return _t;
      }, set: function(e) {
        _t = e;
      } }, rejectionMapper: { get: function() {
        return yn;
      }, set: function(e) {
        yn = e;
      } }, follow: function(e, t) {
        return new j(function(n, r) {
          return Ue(function(i, o) {
            var a = B;
            a.unhandleds = [], a.onunhandled = o, a.finalize = we(function() {
              var u, c = this;
              u = function() {
                c.unhandleds.length === 0 ? i() : o(c.unhandleds[0]);
              }, Mt.push(function f() {
                u(), Mt.splice(Mt.indexOf(f), 1);
              }), ++et, _t(function() {
                --et == 0 && wn();
              }, []);
            }, a.finalize), e();
          }, t, n, r);
        });
      } }), Je && (Je.allSettled && Z(j, "allSettled", function() {
        var e = De.apply(null, arguments).map(zt);
        return new j(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(i, o) {
            return j.resolve(i).then(function(a) {
              return r[o] = { status: "fulfilled", value: a };
            }, function(a) {
              return r[o] = { status: "rejected", reason: a };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), Je.any && typeof AggregateError < "u" && Z(j, "any", function() {
        var e = De.apply(null, arguments).map(zt);
        return new j(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, i = new Array(r);
          e.forEach(function(o, a) {
            return j.resolve(o).then(function(u) {
              return t(u);
            }, function(u) {
              i[a] = u, --r || n(new AggregateError(i));
            });
          });
        });
      }), Je.withResolvers && (j.withResolvers = Je.withResolvers));
      var he = { awaits: 0, echoes: 0, id: 0 }, Kr = 0, Ut = [], Vt = 0, Gt = 0, jr = 0;
      function Ue(e, t, n, r) {
        var i = B, o = Object.create(i);
        return o.parent = i, o.ref = 0, o.global = !1, o.id = ++jr, Le.env, o.env = pn ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && J(o, t), ++i.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = tt(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function ht() {
        return he.id || (he.id = ++Kr), ++he.awaits, he.echoes += Xn, he.id;
      }
      function Ve() {
        return !!he.awaits && (--he.awaits == 0 && (he.id = 0), he.echoes = he.awaits * Xn, !0);
      }
      function zt(e) {
        return he.echoes && e && e.constructor === Je ? (ht(), e.then(function(t) {
          return Ve(), t;
        }, function(t) {
          return Ve(), ae(t);
        })) : e;
      }
      function Fr() {
        var e = Ut[Ut.length - 1];
        Ut.pop(), Ge(e, !1);
      }
      function Ge(e, t) {
        var n, r = B;
        (t ? !he.echoes || Vt++ && e === B : !Vt || --Vt && e === B) || queueMicrotask(t ? (function(i) {
          ++Gt, he.echoes && --he.echoes != 0 || (he.echoes = he.awaits = he.id = 0), Ut.push(B), Ge(i, !0);
        }).bind(null, e) : Fr), e !== B && (B = e, r === Le && (Le.env = er()), pn && (n = Le.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(q, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function er() {
        var e = q.Promise;
        return pn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(q, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function tt(e, t, n, r, i) {
        var o = B;
        try {
          return Ge(e, !0), t(n, r, i);
        } finally {
          Ge(o, !1);
        }
      }
      function tr(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var i = B;
          n && ht(), Ge(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ge(i, !1), r && queueMicrotask(Ve);
          }
        };
      }
      function _n(e) {
        Promise === Je && he.echoes === 0 ? Vt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Ae).indexOf("[native code]") === -1 && (ht = Ve = Q);
      var ae = j.reject, nt = "￿", je = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", nr = "String expected.", dt = [], Qt = "__dbnames", En = "readonly", xn = "readwrite";
      function rt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var rr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Yt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = xe(t))[e], t;
        };
      }
      function ir() {
        throw T.Type();
      }
      function $(e, t) {
        try {
          var n = or(e), r = or(t);
          if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return (function(i, o) {
                for (var a = i.length, u = o.length, c = a < u ? a : u, f = 0; f < c; ++f) if (i[f] !== o[f]) return i[f] < o[f] ? -1 : 1;
                return a === u ? 0 : a < u ? -1 : 1;
              })(ar(e), ar(t));
            case "Array":
              return (function(i, o) {
                for (var a = i.length, u = o.length, c = a < u ? a : u, f = 0; f < c; ++f) {
                  var m = $(i[f], o[f]);
                  if (m !== 0) return m;
                }
                return a === u ? 0 : a < u ? -1 : 1;
              })(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function or(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = st(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ar(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var ur = (ne.prototype._trans = function(e, t, n) {
        var r = this._tx || B.trans, i = this.name, o = ke && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function a(f, m, s) {
          if (!s.schema[i]) throw new T.NotFound("Table " + i + " not part of transaction");
          return t(s.idbtrans, s);
        }
        var u = lt();
        try {
          var c = r && r.db._novip === this.db._novip ? r === B.trans ? r._promise(e, a, n) : Ue(function() {
            return r._promise(e, a, n);
          }, { trans: r, transless: B.transless || B }) : (function f(m, s, v, l) {
            if (m.idbdb && (m._state.openComplete || B.letThrough || m._vip)) {
              var d = m._createTransaction(s, v, m._dbSchema);
              try {
                d.create(), m._state.PR1398_maxLoop = 3;
              } catch (y) {
                return y.name === b.InvalidState && m.isOpen() && 0 < --m._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), m.close({ disableAutoOpen: !1 }), m.open().then(function() {
                  return f(m, s, v, l);
                })) : ae(y);
              }
              return d._promise(s, function(y, h) {
                return Ue(function() {
                  return B.trans = d, l(y, h, d);
                });
              }).then(function(y) {
                if (s === "readwrite") try {
                  d.idbtrans.commit();
                } catch {
                }
                return s === "readonly" ? y : d._completion.then(function() {
                  return y;
                });
              });
            }
            if (m._state.openComplete) return ae(new T.DatabaseClosed(m._state.dbOpenError));
            if (!m._state.isBeingOpened) {
              if (!m._state.autoOpen) return ae(new T.DatabaseClosed());
              m.open().catch(Q);
            }
            return m._state.dbReadyPromise.then(function() {
              return f(m, s, v, l);
            });
          })(this.db, e, [this.name], a);
          return o && (c._consoleTask = o, c = c.catch(function(f) {
            return console.trace(f), ae(f);
          })), c;
        } finally {
          u && ft();
        }
      }, ne.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? ae(new T.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(i) {
            return n.hook.reading.fire(i);
          });
        }).then(t);
      }, ne.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (L(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = V(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(u) {
          if (u.compound && t.every(function(f) {
            return 0 <= u.keyPath.indexOf(f);
          })) {
            for (var c = 0; c < t.length; ++c) if (t.indexOf(u.keyPath[c]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(u, c) {
          return u.keyPath.length - c.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== nt) {
          var o = n.keyPath.slice(0, t.length);
          return this.where(o).equals(o.map(function(c) {
            return e[c];
          }));
        }
        !n && ke && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function i(u, c) {
          return $(u, c) === 0;
        }
        var a = t.reduce(function(s, c) {
          var f = s[0], m = s[1], s = r[c], v = e[c];
          return [f || s, f || !s ? rt(m, s && s.multi ? function(l) {
            return l = Pe(l, c), L(l) && l.some(function(d) {
              return i(v, d);
            });
          } : function(l) {
            return i(v, Pe(l, c));
          }) : m];
        }, [null, null]), o = a[0], a = a[1];
        return o ? this.where(o.name).equals(e[o.keyPath]).filter(a) : n ? this.filter(a) : this.where(t).equals("");
      }, ne.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, ne.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, ne.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, ne.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, ne.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, ne.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, ne.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ne.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, L(e) ? "[".concat(e.join("+"), "]") : e));
      }, ne.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ne.prototype.mapToClass = function(e) {
        var t, n = this.db, r = this.name;
        function i() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof ir && ((function(c, f) {
          if (typeof f != "function" && f !== null) throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
          function m() {
            this.constructor = c;
          }
          K(c, f), c.prototype = f === null ? Object.create(f) : (m.prototype = f.prototype, new m());
        })(i, t = e), Object.defineProperty(i.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
          return r;
        }, e = i);
        for (var o = /* @__PURE__ */ new Set(), a = e.prototype; a; a = fe(a)) Object.getOwnPropertyNames(a).forEach(function(c) {
          return o.add(c);
        });
        function u(c) {
          if (!c) return c;
          var f, m = Object.create(e.prototype);
          for (f in c) if (!o.has(f)) try {
            m[f] = c[f];
          } catch {
          }
          return m;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e;
      }, ne.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          J(this, e);
        });
      }, ne.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
        return o && i && (a = Yt(o)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "add", keys: t != null ? [t] : null, values: [a] });
        }).then(function(u) {
          return u.numFailures ? j.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (o) try {
            ce(e, o, u);
          } catch {
          }
          return u;
        });
      }, ne.prototype.update = function(e, t) {
        return typeof e != "object" || L(e) ? this.where(":id").equals(e).modify(t) : (e = Pe(e, this.schema.primKey.keyPath), e === void 0 ? ae(new T.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ne.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
        return o && i && (a = Yt(o)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "put", values: [a], keys: t != null ? [t] : null });
        }).then(function(u) {
          return u.numFailures ? j.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (o) try {
            ce(e, o, u);
          } catch {
          }
          return u;
        });
      }, ne.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] });
        }).then(function(n) {
          return n.numFailures ? j.reject(n.failures[0]) : void 0;
        });
      }, ne.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: rr });
        }).then(function(t) {
          return t.numFailures ? j.reject(t.failures[0]) : void 0;
        });
      }, ne.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(n) {
          return t.core.getMany({ keys: e, trans: n }).then(function(r) {
            return r.map(function(i) {
              return t.hook.reading.fire(i);
            });
          });
        });
      }, ne.prototype.bulkAdd = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var f = r.schema.primKey, u = f.auto, f = f.keyPath;
          if (f && i) throw new T.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var c = e.length, f = f && u ? e.map(Yt(f)) : e;
          return r.core.mutate({ trans: a, type: "add", keys: i, values: f, wantResults: o }).then(function(d) {
            var s = d.numFailures, v = d.results, l = d.lastResult, d = d.failures;
            if (s === 0) return o ? v : l;
            throw new $e("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(c, " operations failed"), d);
          });
        });
      }, ne.prototype.bulkPut = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var f = r.schema.primKey, u = f.auto, f = f.keyPath;
          if (f && i) throw new T.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var c = e.length, f = f && u ? e.map(Yt(f)) : e;
          return r.core.mutate({ trans: a, type: "put", keys: i, values: f, wantResults: o }).then(function(d) {
            var s = d.numFailures, v = d.results, l = d.lastResult, d = d.failures;
            if (s === 0) return o ? v : l;
            throw new $e("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(c, " operations failed"), d);
          });
        });
      }, ne.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, r = e.map(function(a) {
          return a.key;
        }), i = e.map(function(a) {
          return a.changes;
        }), o = [];
        return this._trans("readwrite", function(a) {
          return n.getMany({ trans: a, keys: r, cache: "clone" }).then(function(u) {
            var c = [], f = [];
            e.forEach(function(s, v) {
              var l = s.key, d = s.changes, y = u[v];
              if (y) {
                for (var h = 0, g = Object.keys(d); h < g.length; h++) {
                  var w = g[h], _ = d[w];
                  if (w === t.schema.primKey.keyPath) {
                    if ($(_, l) !== 0) throw new T.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ce(y, w, _);
                }
                o.push(v), c.push(l), f.push(y);
              }
            });
            var m = c.length;
            return n.mutate({ trans: a, type: "put", keys: c, values: f, updates: { keys: r, changeSpecs: i } }).then(function(s) {
              var v = s.numFailures, l = s.failures;
              if (v === 0) return m;
              for (var d = 0, y = Object.keys(l); d < y.length; d++) {
                var h, g = y[d], w = o[Number(g)];
                w != null && (h = l[g], delete l[g], l[w] = h);
              }
              throw new $e("".concat(t.name, ".bulkUpdate(): ").concat(v, " of ").concat(m, " operations failed"), l);
            });
          });
        });
      }, ne.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e });
        }).then(function(a) {
          var i = a.numFailures, o = a.lastResult, a = a.failures;
          if (i === 0) return o;
          throw new $e("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), a);
        });
      }, ne);
      function ne() {
      }
      function xt(e) {
        function t(a, u) {
          if (u) {
            for (var c = arguments.length, f = new Array(c - 1); --c; ) f[c - 1] = arguments[c];
            return n[a].subscribe.apply(null, f), e;
          }
          if (typeof a == "string") return n[a];
        }
        var n = {};
        t.addEventType = o;
        for (var r = 1, i = arguments.length; r < i; ++r) o(arguments[r]);
        return t;
        function o(a, u, c) {
          if (typeof a != "object") {
            var f;
            u = u || $n;
            var m = { subscribers: [], fire: c = c || Q, subscribe: function(s) {
              m.subscribers.indexOf(s) === -1 && (m.subscribers.push(s), m.fire = u(m.fire, s));
            }, unsubscribe: function(s) {
              m.subscribers = m.subscribers.filter(function(v) {
                return v !== s;
              }), m.fire = m.subscribers.reduce(u, c);
            } };
            return n[a] = t[a] = m;
          }
          V(f = a).forEach(function(s) {
            var v = f[s];
            if (L(v)) o(s, f[s][0], f[s][1]);
            else {
              if (v !== "asap") throw new T.InvalidArgument("Invalid event config");
              var l = o(s, ge, function() {
                for (var d = arguments.length, y = new Array(d); d--; ) y[d] = arguments[d];
                l.subscribers.forEach(function(h) {
                  Oe(function() {
                    h.apply(null, y);
                  });
                });
              });
            }
          });
        }
      }
      function Tt(e, t) {
        return oe(t).from({ prototype: e }), t;
      }
      function pt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Tn(e, t) {
        e.filter = rt(e.filter, t);
      }
      function Sn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return rt(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function Wt(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new T.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function sr(e, t, n) {
        var r = Wt(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function Ht(e, t, n, r) {
        var i = e.replayFilter ? rt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, a = function(u, c, f) {
            var m, s;
            i && !i(c, f, function(v) {
              return c.stop(v);
            }, function(v) {
              return c.fail(v);
            }) || ((s = "" + (m = c.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(m)), X(o, s) || (o[s] = !0, t(u, c, f)));
          };
          return Promise.all([e.or._iterate(a, n), cr(sr(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
        }
        return cr(sr(e, r, n), rt(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
      }
      function cr(e, t, n, r) {
        var i = re(r ? function(o, a, u) {
          return n(r(o), a, u);
        } : n);
        return e.then(function(o) {
          if (o) return o.start(function() {
            var a = function() {
              return o.continue();
            };
            t && !t(o, function(u) {
              return a = u;
            }, function(u) {
              o.stop(u), a = Q;
            }, function(u) {
              o.fail(u), a = Q;
            }) || i(o.value, o, function(u) {
              return a = u;
            }), a();
          });
        });
      }
      var St = (lr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (L(n)) return M(M([], L(e) ? e : [], !0), n).sort();
          if (typeof n == "number") return (Number(e) || 0) + n;
          if (typeof n == "bigint") try {
            return BigInt(e) + n;
          } catch {
            return BigInt(0) + n;
          }
          throw new TypeError("Invalid term ".concat(n));
        }
        if (t.remove !== void 0) {
          var r = t.remove;
          if (L(r)) return L(e) ? e.filter(function(i) {
            return !r.includes(i);
          }).sort() : [];
          if (typeof r == "number") return Number(e) - r;
          if (typeof r == "bigint") try {
            return BigInt(e) - r;
          } catch {
            return BigInt(0) - r;
          }
          throw new TypeError("Invalid subtrahend ".concat(r));
        }
        return n = (n = t.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
      }, lr);
      function lr(e) {
        this["@@propmod"] = e;
      }
      var Br = (ee.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ae.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, ae.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = rt(t.algorithm, e);
      }, ee.prototype._iterate = function(e, t) {
        return Ht(this._ctx, e, t, this._ctx.table.core);
      }, ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && J(n, e), t._ctx = n, t;
      }, ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return Ht(t, e, n, t.table.core);
        });
      }, ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, i = r.table.core;
          if (pt(r, !0)) return i.count({ trans: n, query: { index: Wt(r, i.schema), range: r.range } }).then(function(a) {
            return Math.min(a, r.limit);
          });
          var o = 0;
          return Ht(r, function() {
            return ++o, !1;
          }, n, i).then(function() {
            return o;
          });
        }).then(e);
      }, ee.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
        function o(c, f) {
          return f ? o(c[n[f]], f - 1) : c[r];
        }
        var a = this._ctx.dir === "next" ? 1 : -1;
        function u(c, f) {
          return $(o(c, i), o(f, i)) * a;
        }
        return this.toArray(function(c) {
          return c.sort(u);
        }).then(t);
      }, ee.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx;
          if (r.dir === "next" && pt(r, !0) && 0 < r.limit) {
            var i = r.valueMapper, o = Wt(r, r.table.core.schema);
            return r.table.core.query({ trans: n, limit: r.limit, values: !0, query: { index: o, range: r.range } }).then(function(u) {
              return u = u.result, i ? u.map(i) : u;
            });
          }
          var a = [];
          return Ht(r, function(u) {
            return a.push(u);
          }, n, r.table.core).then(function() {
            return a;
          });
        }, e);
      }, ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, pt(t) ? Sn(t, function() {
          var n = e;
          return function(r, i) {
            return n === 0 || (n === 1 ? --n : i(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : Sn(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Sn(this._ctx, function() {
          var t = e;
          return function(n, r, i) {
            return --t <= 0 && r(i), 0 <= t;
          };
        }, !0), this;
      }, ee.prototype.until = function(e, t) {
        return Tn(this._ctx, function(n, r, i) {
          return !e(n.value) || (r(i), t);
        }), this;
      }, ee.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, ee.prototype.last = function(e) {
        return this.reverse().first(e);
      }, ee.prototype.filter = function(e) {
        var t;
        return Tn(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = rt(t.isMatch, e), this;
      }, ee.prototype.and = function(e) {
        return this.filter(e);
      }, ee.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, ee.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ee.prototype.desc = function() {
        return this.reverse();
      }, ee.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.key, r);
        });
      }, ee.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, ee.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.primaryKey, r);
        });
      }, ee.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, i) {
          n.push(i.key);
        }).then(function() {
          return n;
        }).then(e);
      }, ee.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && pt(t, !0) && 0 < t.limit) return this._read(function(r) {
          var i = Wt(t, t.table.core.schema);
          return t.table.core.query({ trans: r, values: !1, limit: t.limit, query: { index: i, range: t.range } });
        }).then(function(r) {
          return r.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, i) {
          n.push(i.primaryKey);
        }).then(function() {
          return n;
        }).then(e);
      }, ee.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, ee.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, ee.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, ee.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Tn(this._ctx, function(i) {
          var r = i.primaryKey.toString(), i = X(t, r);
          return t[r] = !0, !i;
        }), this;
      }, ee.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var i, o, a;
          a = typeof e == "function" ? e : (i = V(e), o = i.length, function(h) {
            for (var g = !1, w = 0; w < o; ++w) {
              var _ = i[w], x = e[_], S = Pe(h, _);
              x instanceof St ? (ce(h, _, x.execute(S)), g = !0) : S !== x && (ce(h, _, x), g = !0);
            }
            return g;
          });
          var u = n.table.core, s = u.schema.primaryKey, c = s.outbound, f = s.extractKey, m = 200, s = t.db._options.modifyChunkSize;
          s && (m = typeof s == "object" ? s[u.name] || s["*"] || 200 : s);
          function v(h, _) {
            var w = _.failures, _ = _.numFailures;
            d += h - _;
            for (var x = 0, S = V(w); x < S.length; x++) {
              var R = S[x];
              l.push(w[R]);
            }
          }
          var l = [], d = 0, y = [];
          return t.clone().primaryKeys().then(function(h) {
            function g(_) {
              var x = Math.min(m, h.length - _);
              return u.getMany({ trans: r, keys: h.slice(_, _ + x), cache: "immutable" }).then(function(S) {
                for (var R = [], O = [], A = c ? [] : null, I = [], D = 0; D < x; ++D) {
                  var F = S[D], z = { value: xe(F), primKey: h[_ + D] };
                  a.call(z, z.value, z) !== !1 && (z.value == null ? I.push(h[_ + D]) : c || $(f(F), f(z.value)) === 0 ? (O.push(z.value), c && A.push(h[_ + D])) : (I.push(h[_ + D]), R.push(z.value)));
                }
                return Promise.resolve(0 < R.length && u.mutate({ trans: r, type: "add", values: R }).then(function(Y) {
                  for (var W in Y.failures) I.splice(parseInt(W), 1);
                  v(R.length, Y);
                })).then(function() {
                  return (0 < O.length || w && typeof e == "object") && u.mutate({ trans: r, type: "put", keys: A, values: O, criteria: w, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < _ }).then(function(Y) {
                    return v(O.length, Y);
                  });
                }).then(function() {
                  return (0 < I.length || w && e === On) && u.mutate({ trans: r, type: "delete", keys: I, criteria: w, isAdditionalChunk: 0 < _ }).then(function(Y) {
                    return v(I.length, Y);
                  });
                }).then(function() {
                  return h.length > _ + x && g(_ + m);
                });
              });
            }
            var w = pt(n) && n.limit === 1 / 0 && (typeof e != "function" || e === On) && { index: n.index, range: n.range };
            return g(0).then(function() {
              if (0 < l.length) throw new yt("Error modifying one or more objects", l, d, y);
              return h.length;
            });
          });
        });
      }, ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return pt(e) && (e.isPrimKey || t.type === 3) ? this._write(function(n) {
          var r = e.table.core.schema.primaryKey, i = t;
          return e.table.core.count({ trans: n, query: { index: r, range: i } }).then(function(o) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: i }).then(function(a) {
              var u = a.failures;
              if (a.lastResult, a.results, a = a.numFailures, a) throw new yt("Could not delete some values", Object.keys(u).map(function(c) {
                return u[c];
              }), o - a);
              return o - a;
            });
          });
        }) : this.modify(On);
      }, ee);
      function ee() {
      }
      var On = function(e, t) {
        return t.value = null;
      };
      function qr(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Mr(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function Te(e, t, n) {
        return e = e instanceof hr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function mt(e) {
        return new e.Collection(e, function() {
          return fr("");
        }).limit(0);
      }
      function $t(e, t, n, r) {
        var i, o, a, u, c, f, m, s = n.length;
        if (!n.every(function(d) {
          return typeof d == "string";
        })) return Te(e, nr);
        function v(d) {
          i = d === "next" ? function(h) {
            return h.toUpperCase();
          } : function(h) {
            return h.toLowerCase();
          }, o = d === "next" ? function(h) {
            return h.toLowerCase();
          } : function(h) {
            return h.toUpperCase();
          }, a = d === "next" ? qr : Mr;
          var y = n.map(function(h) {
            return { lower: o(h), upper: i(h) };
          }).sort(function(h, g) {
            return a(h.lower, g.lower);
          });
          u = y.map(function(h) {
            return h.upper;
          }), c = y.map(function(h) {
            return h.lower;
          }), m = (f = d) === "next" ? "" : r;
        }
        v("next"), e = new e.Collection(e, function() {
          return ze(u[0], c[s - 1] + r);
        }), e._ondirectionchange = function(d) {
          v(d);
        };
        var l = 0;
        return e._addAlgorithm(function(d, y, h) {
          var g = d.key;
          if (typeof g != "string") return !1;
          var w = o(g);
          if (t(w, c, l)) return !0;
          for (var _ = null, x = l; x < s; ++x) {
            var S = (function(R, O, A, I, D, F) {
              for (var z = Math.min(R.length, I.length), Y = -1, W = 0; W < z; ++W) {
                var Se = O[W];
                if (Se !== I[W]) return D(R[W], A[W]) < 0 ? R.substr(0, W) + A[W] + A.substr(W + 1) : D(R[W], I[W]) < 0 ? R.substr(0, W) + I[W] + A.substr(W + 1) : 0 <= Y ? R.substr(0, Y) + O[Y] + A.substr(Y + 1) : null;
                D(R[W], Se) < 0 && (Y = W);
              }
              return z < I.length && F === "next" ? R + A.substr(R.length) : z < R.length && F === "prev" ? R.substr(0, A.length) : Y < 0 ? null : R.substr(0, Y) + I[Y] + A.substr(Y + 1);
            })(g, w, u[x], c[x], a, f);
            S === null && _ === null ? l = x + 1 : (_ === null || 0 < a(_, S)) && (_ = S);
          }
          return y(_ !== null ? function() {
            d.continue(_ + m);
          } : h), !1;
        }), e;
      }
      function ze(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function fr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var hr = (Object.defineProperty(de.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), de.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? mt(this) : new this.Collection(this, function() {
            return ze(e, t, !n, !r);
          });
        } catch {
          return Te(this, je);
        }
      }, de.prototype.equals = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return fr(e);
        });
      }, de.prototype.above = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return ze(e, void 0, !0);
        });
      }, de.prototype.aboveOrEqual = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return ze(e, void 0, !1);
        });
      }, de.prototype.below = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return ze(void 0, e, !1, !0);
        });
      }, de.prototype.belowOrEqual = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return ze(void 0, e);
        });
      }, de.prototype.startsWith = function(e) {
        return typeof e != "string" ? Te(this, nr) : this.between(e, e + nt, !0, !0);
      }, de.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : $t(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], nt);
      }, de.prototype.equalsIgnoreCase = function(e) {
        return $t(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, de.prototype.anyOfIgnoreCase = function() {
        var e = De.apply(Me, arguments);
        return e.length === 0 ? mt(this) : $t(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, de.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = De.apply(Me, arguments);
        return e.length === 0 ? mt(this) : $t(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, nt);
      }, de.prototype.anyOf = function() {
        var e = this, t = De.apply(Me, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return Te(this, je);
        }
        if (t.length === 0) return mt(this);
        var r = new this.Collection(this, function() {
          return ze(t[0], t[t.length - 1]);
        });
        r._ondirectionchange = function(o) {
          n = o === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var i = 0;
        return r._addAlgorithm(function(o, a, u) {
          for (var c = o.key; 0 < n(c, t[i]); ) if (++i === t.length) return a(u), !1;
          return n(c, t[i]) === 0 || (a(function() {
            o.continue(t[i]);
          }), !1);
        }), r;
      }, de.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, de.prototype.noneOf = function() {
        var e = De.apply(Me, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Te(this, je);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, de.prototype.inAnyRange = function(g, t) {
        var n = this, r = this._cmp, i = this._ascending, o = this._descending, a = this._min, u = this._max;
        if (g.length === 0) return mt(this);
        if (!g.every(function(w) {
          return w[0] !== void 0 && w[1] !== void 0 && i(w[0], w[1]) <= 0;
        })) return Te(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", T.InvalidArgument);
        var c = !t || t.includeLowers !== !1, f = t && t.includeUppers === !0, m, s = i;
        function v(w, _) {
          return s(w[0], _[0]);
        }
        try {
          (m = g.reduce(function(w, _) {
            for (var x = 0, S = w.length; x < S; ++x) {
              var R = w[x];
              if (r(_[0], R[1]) < 0 && 0 < r(_[1], R[0])) {
                R[0] = a(R[0], _[0]), R[1] = u(R[1], _[1]);
                break;
              }
            }
            return x === S && w.push(_), w;
          }, [])).sort(v);
        } catch {
          return Te(this, je);
        }
        var l = 0, d = f ? function(w) {
          return 0 < i(w, m[l][1]);
        } : function(w) {
          return 0 <= i(w, m[l][1]);
        }, y = c ? function(w) {
          return 0 < o(w, m[l][0]);
        } : function(w) {
          return 0 <= o(w, m[l][0]);
        }, h = d, g = new this.Collection(this, function() {
          return ze(m[0][0], m[m.length - 1][1], !c, !f);
        });
        return g._ondirectionchange = function(w) {
          s = w === "next" ? (h = d, i) : (h = y, o), m.sort(v);
        }, g._addAlgorithm(function(w, _, x) {
          for (var S, R = w.key; h(R); ) if (++l === m.length) return _(x), !1;
          return !d(S = R) && !y(S) || (n._cmp(R, m[l][1]) === 0 || n._cmp(R, m[l][0]) === 0 || _(function() {
            s === i ? w.continue(m[l][0]) : w.continue(m[l][1]);
          }), !1);
        }), g;
      }, de.prototype.startsWithAnyOf = function() {
        var e = De.apply(Me, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? mt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + nt];
        })) : Te(this, "startsWithAnyOf() only works with strings");
      }, de);
      function de() {
      }
      function Ie(e) {
        return re(function(t) {
          return Ot(t), e(t.target.error), !1;
        });
      }
      function Ot(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Pt = "storagemutated", Pn = "x-storagemutated-1", Qe = xt(null, Pt), Lr = (Ke.prototype._lock = function() {
        return se(!B.global), ++this._reculock, this._reculock !== 1 || B.global || (B.lockOwnerFor = this), this;
      }, Ke.prototype._unlock = function() {
        if (se(!B.global), --this._reculock == 0) for (B.global || (B.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            tt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Ke.prototype._locked = function() {
        return this._reculock && B.lockOwnerFor !== this;
      }, Ke.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (se(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new T.DatabaseClosed(r);
          case "MissingAPIError":
            throw new T.MissingAPI(r.message, r);
          default:
            throw new T.OpenFailed(r);
        }
        if (!this.active) throw new T.TransactionInactive();
        return se(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = re(function(i) {
          Ot(i), t._reject(e.error);
        }), e.onabort = re(function(i) {
          Ot(i), t.active && t._reject(new T.Abort(e.error)), t.active = !1, t.on("abort").fire(i);
        }), e.oncomplete = re(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Qe.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Ke.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ae(new T.ReadOnly("Transaction is readonly"));
        if (!this.active) return ae(new T.TransactionInactive());
        if (this._locked()) return new j(function(o, a) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(o, a);
          }, B]);
        });
        if (n) return Ue(function() {
          var o = new j(function(a, u) {
            r._lock();
            var c = t(a, u, r);
            c && c.then && c.then(a, u);
          });
          return o.finally(function() {
            return r._unlock();
          }), o._lib = !0, o;
        });
        var i = new j(function(o, a) {
          var u = t(o, a, r);
          u && u.then && u.then(o, a);
        });
        return i._lib = !0, i;
      }, Ke.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Ke.prototype.waitFor = function(e) {
        var t, n = this._root(), r = j.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return r;
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function o() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = o);
        })());
        var i = n._waitingFor;
        return new j(function(o, a) {
          r.then(function(u) {
            return n._waitingQueue.push(re(o.bind(null, u)));
          }, function(u) {
            return n._waitingQueue.push(re(a.bind(null, u)));
          }).finally(function() {
            n._waitingFor === i && (n._waitingFor = null);
          });
        });
      }, Ke.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new T.Abort()));
      }, Ke.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (X(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new T.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, Ke);
      function Ke() {
      }
      function kn(e, t, n, r, i, o, a) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: i, compound: o, src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + dr(t) };
      }
      function dr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function An(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(i) {
          return [i.name, i];
        }, n.reduce(function(i, o, a) {
          return a = r(o, a), a && (i[a[0]] = a[1]), i;
        }, {})) };
        var r;
      }
      var kt = function(e) {
        try {
          return e.only([[]]), kt = function() {
            return [[]];
          }, [[]];
        } catch {
          return kt = function() {
            return nt;
          }, nt;
        }
      };
      function Cn(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return Pe(n, t);
        } : function(n) {
          return Pe(n, e);
        };
        var t;
      }
      function pr(e) {
        return [].slice.call(e);
      }
      var Ur = 0;
      function At(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Vr(e, t, c) {
        function r(h) {
          if (h.type === 3) return null;
          if (h.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var l = h.lower, d = h.upper, y = h.lowerOpen, h = h.upperOpen;
          return l === void 0 ? d === void 0 ? null : t.upperBound(d, !!h) : d === void 0 ? t.lowerBound(l, !!y) : t.bound(l, d, !!y, !!h);
        }
        function i(v) {
          var l, d = v.name;
          return { name: d, schema: v, mutate: function(y) {
            var h = y.trans, g = y.type, w = y.keys, _ = y.values, x = y.range;
            return new Promise(function(S, R) {
              S = re(S);
              var O = h.objectStore(d), A = O.keyPath == null, I = g === "put" || g === "add";
              if (!I && g !== "delete" && g !== "deleteRange") throw new Error("Invalid operation type: " + g);
              var D, F = (w || _ || { length: 1 }).length;
              if (w && _ && w.length !== _.length) throw new Error("Given keys array must have same length as given values array.");
              if (F === 0) return S({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function z(be) {
                ++Se, Ot(be);
              }
              var Y = [], W = [], Se = 0;
              if (g === "deleteRange") {
                if (x.type === 4) return S({ numFailures: Se, failures: W, results: [], lastResult: void 0 });
                x.type === 3 ? Y.push(D = O.clear()) : Y.push(D = O.delete(r(x)));
              } else {
                var A = I ? A ? [_, w] : [_, null] : [w, null], G = A[0], me = A[1];
                if (I) for (var ye = 0; ye < F; ++ye) Y.push(D = me && me[ye] !== void 0 ? O[g](G[ye], me[ye]) : O[g](G[ye])), D.onerror = z;
                else for (ye = 0; ye < F; ++ye) Y.push(D = O[g](G[ye])), D.onerror = z;
              }
              function ln(be) {
                be = be.target.result, Y.forEach(function(at, Wn) {
                  return at.error != null && (W[Wn] = at.error);
                }), S({ numFailures: Se, failures: W, results: g === "delete" ? w : Y.map(function(at) {
                  return at.result;
                }), lastResult: be });
              }
              D.onerror = function(be) {
                z(be), ln(be);
              }, D.onsuccess = ln;
            });
          }, getMany: function(y) {
            var h = y.trans, g = y.keys;
            return new Promise(function(w, _) {
              w = re(w);
              for (var x, S = h.objectStore(d), R = g.length, O = new Array(R), A = 0, I = 0, D = function(Y) {
                Y = Y.target, O[Y._pos] = Y.result, ++I === A && w(O);
              }, F = Ie(_), z = 0; z < R; ++z) g[z] != null && ((x = S.get(g[z]))._pos = z, x.onsuccess = D, x.onerror = F, ++A);
              A === 0 && w(O);
            });
          }, get: function(y) {
            var h = y.trans, g = y.key;
            return new Promise(function(w, _) {
              w = re(w);
              var x = h.objectStore(d).get(g);
              x.onsuccess = function(S) {
                return w(S.target.result);
              }, x.onerror = Ie(_);
            });
          }, query: (l = f, function(y) {
            return new Promise(function(h, g) {
              h = re(h);
              var w, _, x, A = y.trans, S = y.values, R = y.limit, D = y.query, O = R === 1 / 0 ? void 0 : R, I = D.index, D = D.range, A = A.objectStore(d), I = I.isPrimaryKey ? A : A.index(I.name), D = r(D);
              if (R === 0) return h({ result: [] });
              l ? ((O = S ? I.getAll(D, O) : I.getAllKeys(D, O)).onsuccess = function(F) {
                return h({ result: F.target.result });
              }, O.onerror = Ie(g)) : (w = 0, _ = !S && "openKeyCursor" in I ? I.openKeyCursor(D) : I.openCursor(D), x = [], _.onsuccess = function(F) {
                var z = _.result;
                return z ? (x.push(S ? z.value : z.primaryKey), ++w === R ? h({ result: x }) : void z.continue()) : h({ result: x });
              }, _.onerror = Ie(g));
            });
          }), openCursor: function(y) {
            var h = y.trans, g = y.values, w = y.query, _ = y.reverse, x = y.unique;
            return new Promise(function(S, R) {
              S = re(S);
              var I = w.index, O = w.range, A = h.objectStore(d), A = I.isPrimaryKey ? A : A.index(I.name), I = _ ? x ? "prevunique" : "prev" : x ? "nextunique" : "next", D = !g && "openKeyCursor" in A ? A.openKeyCursor(r(O), I) : A.openCursor(r(O), I);
              D.onerror = Ie(R), D.onsuccess = re(function(F) {
                var z, Y, W, Se, G = D.result;
                G ? (G.___id = ++Ur, G.done = !1, z = G.continue.bind(G), Y = (Y = G.continuePrimaryKey) && Y.bind(G), W = G.advance.bind(G), Se = function() {
                  throw new Error("Cursor not stopped");
                }, G.trans = h, G.stop = G.continue = G.continuePrimaryKey = G.advance = function() {
                  throw new Error("Cursor not started");
                }, G.fail = re(R), G.next = function() {
                  var me = this, ye = 1;
                  return this.start(function() {
                    return ye-- ? me.continue() : me.stop();
                  }).then(function() {
                    return me;
                  });
                }, G.start = function(me) {
                  function ye() {
                    if (D.result) try {
                      me();
                    } catch (be) {
                      G.fail(be);
                    }
                    else G.done = !0, G.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, G.stop();
                  }
                  var ln = new Promise(function(be, at) {
                    be = re(be), D.onerror = Ie(at), G.fail = at, G.stop = function(Wn) {
                      G.stop = G.continue = G.continuePrimaryKey = G.advance = Se, be(Wn);
                    };
                  });
                  return D.onsuccess = re(function(be) {
                    D.onsuccess = ye, ye();
                  }), G.continue = z, G.continuePrimaryKey = Y, G.advance = W, ye(), ln;
                }, S(G)) : S(null);
              }, R);
            });
          }, count: function(y) {
            var h = y.query, g = y.trans, w = h.index, _ = h.range;
            return new Promise(function(x, S) {
              var R = g.objectStore(d), O = w.isPrimaryKey ? R : R.index(w.name), R = r(_), O = R ? O.count(R) : O.count();
              O.onsuccess = re(function(A) {
                return x(A.target.result);
              }), O.onerror = Ie(S);
            });
          } };
        }
        var o, a, u, m = (a = c, u = pr((o = e).objectStoreNames), { schema: { name: o.name, tables: u.map(function(v) {
          return a.objectStore(v);
        }).map(function(v) {
          var l = v.keyPath, h = v.autoIncrement, d = L(l), y = {}, h = { name: v.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: l == null, compound: d, keyPath: l, autoIncrement: h, unique: !0, extractKey: Cn(l) }, indexes: pr(v.indexNames).map(function(g) {
            return v.index(g);
          }).map(function(x) {
            var w = x.name, _ = x.unique, S = x.multiEntry, x = x.keyPath, S = { name: w, compound: L(x), keyPath: x, unique: _, multiEntry: S, extractKey: Cn(x) };
            return y[At(x)] = S;
          }), getIndexByKeyPath: function(g) {
            return y[At(g)];
          } };
          return y[":id"] = h.primaryKey, l != null && (y[At(l)] = h.primaryKey), h;
        }) }, hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), c = m.schema, f = m.hasGetAll, m = c.tables.map(i), s = {};
        return m.forEach(function(v) {
          return s[v.name] = v;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(v) {
          if (!s[v]) throw new Error("Table '".concat(v, "' not found"));
          return s[v];
        }, MIN_KEY: -1 / 0, MAX_KEY: kt(t), schema: c };
      }
      function Gr(e, t, n, r) {
        var i = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = Vr(t, i, r), e.dbcore.reduce(function(o, a) {
          return a = a.create, E(E({}, o), a(o));
        }, r)) };
      }
      function Xt(e, r) {
        var n = r.db, r = Gr(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var o = i.name;
          e.core.schema.tables.some(function(a) {
            return a.name === o;
          }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
        });
      }
      function Jt(e, t, n, r) {
        n.forEach(function(i) {
          var o = r[i];
          t.forEach(function(a) {
            var u = (function c(f, m) {
              return te(f, m) || (f = fe(f)) && c(f, m);
            })(a, i);
            (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? Z(a, i, { get: function() {
              return this.table(i);
            }, set: function(c) {
              H(this, i, { value: c, writable: !0, configurable: !0, enumerable: !0 });
            } }) : a[i] = new e.Table(i, o));
          });
        });
      }
      function Dn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function zr(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Qr(e, t, n, r) {
        var i = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = An("$meta", yr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(n), o._completion.catch(r);
        var a = o._reject.bind(o), u = B.transless || B;
        Ue(function() {
          return B.trans = o, B.transless = u, t !== 0 ? (Xt(e, n), f = t, ((c = o).storeNames.includes("$meta") ? c.table("$meta").get("version").then(function(m) {
            return m ?? f;
          }) : j.resolve(f)).then(function(m) {
            return v = m, l = o, d = n, y = [], m = (s = e)._versions, h = s._dbSchema = en(0, s.idbdb, d), (m = m.filter(function(g) {
              return g._cfg.version >= v;
            })).length !== 0 ? (m.forEach(function(g) {
              y.push(function() {
                var w = h, _ = g._cfg.dbschema;
                tn(s, w, d), tn(s, _, d), h = s._dbSchema = _;
                var x = Nn(w, _);
                x.add.forEach(function(I) {
                  Rn(d, I[0], I[1].primKey, I[1].indexes);
                }), x.change.forEach(function(I) {
                  if (I.recreate) throw new T.Upgrade("Not yet support for changing primary key");
                  var D = d.objectStore(I.name);
                  I.add.forEach(function(F) {
                    return Zt(D, F);
                  }), I.change.forEach(function(F) {
                    D.deleteIndex(F.name), Zt(D, F);
                  }), I.del.forEach(function(F) {
                    return D.deleteIndex(F);
                  });
                });
                var S = g._cfg.contentUpgrade;
                if (S && g._cfg.version > v) {
                  Xt(s, d), l._memoizedTables = {};
                  var R = jt(_);
                  x.del.forEach(function(I) {
                    R[I] = w[I];
                  }), Dn(s, [s.Transaction.prototype]), Jt(s, [s.Transaction.prototype], V(R), R), l.schema = R;
                  var O, A = We(S);
                  return A && ht(), x = j.follow(function() {
                    var I;
                    (O = S(l)) && A && (I = Ve.bind(null, null), O.then(I, I));
                  }), O && typeof O.then == "function" ? j.resolve(O) : x.then(function() {
                    return O;
                  });
                }
              }), y.push(function(w) {
                var _, x, S = g._cfg.dbschema;
                _ = S, x = w, [].slice.call(x.db.objectStoreNames).forEach(function(R) {
                  return _[R] == null && x.db.deleteObjectStore(R);
                }), Dn(s, [s.Transaction.prototype]), Jt(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
              }), y.push(function(w) {
                s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === g._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(_) {
                  return _ !== "$meta";
                })) : w.objectStore("$meta").put(g._cfg.version, "version"));
              });
            }), (function g() {
              return y.length ? j.resolve(y.shift()(l.idbtrans)).then(g) : j.resolve();
            })().then(function() {
              mr(h, d);
            })) : j.resolve();
            var s, v, l, d, y, h;
          }).catch(a)) : (V(i).forEach(function(m) {
            Rn(n, m, i[m].primKey, i[m].indexes);
          }), Xt(e, n), void j.follow(function() {
            return e.on.populate.fire(o);
          }).catch(a));
          var c, f;
        });
      }
      function Yr(e, t) {
        mr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = en(0, e.idbdb, t);
        tn(e, e._dbSchema, t);
        for (var r = 0, i = Nn(n, e._dbSchema).change; r < i.length; r++) {
          var o = (function(a) {
            if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var u = t.objectStore(a.name);
            a.add.forEach(function(c) {
              ke && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(c.src)), Zt(u, c);
            });
          })(i[r]);
          if (typeof o == "object") return o.value;
        }
      }
      function Nn(e, t) {
        var n, r = { del: [], add: [], change: [] };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
          var i = e[n], o = t[n];
          if (i) {
            var a = { name: n, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto) a.recreate = !0, r.change.push(a);
            else {
              var u = i.idxByName, c = o.idxByName, f = void 0;
              for (f in u) c[f] || a.del.push(f);
              for (f in c) {
                var m = u[f], s = c[f];
                m ? m.src !== s.src && a.change.push(s) : a.add.push(s);
              }
              (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
            }
          } else r.add.push([n, o]);
        }
        return r;
      }
      function Rn(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(o) {
          return Zt(i, o);
        }), i;
      }
      function mr(e, t) {
        V(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (ke && console.debug("Dexie: Creating missing table", n), Rn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function Zt(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function en(e, t, n) {
        var r = {};
        return Ne(t.objectStoreNames, 0).forEach(function(i) {
          for (var o = n.objectStore(i), a = kn(dr(f = o.keyPath), f || "", !0, !1, !!o.autoIncrement, f && typeof f != "string", !0), u = [], c = 0; c < o.indexNames.length; ++c) {
            var m = o.index(o.indexNames[c]), f = m.keyPath, m = kn(m.name, f, !!m.unique, !!m.multiEntry, !1, f && typeof f != "string", !1);
            u.push(m);
          }
          r[i] = An(i, a, u);
        }), r;
      }
      function tn(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var o = r[i], a = n.objectStore(o);
          e._hasGetAll = "getAll" in a;
          for (var u = 0; u < a.indexNames.length; ++u) {
            var c = a.indexNames[u], f = a.index(c).keyPath, m = typeof f == "string" ? f : "[" + Ne(f).join("+") + "]";
            !t[o] || (f = t[o].idxByName[m]) && (f.name = c, delete t[o].idxByName[m], t[o].idxByName[c] = f);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && q.WorkerGlobalScope && q instanceof q.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function yr(e) {
        return e.split(",").map(function(t, n) {
          var r = (t = t.trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
          return kn(r, i || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), L(i), n === 0);
        });
      }
      var Wr = (nn.prototype._parseStoresSpec = function(e, t) {
        V(e).forEach(function(n) {
          if (e[n] !== null) {
            var r = yr(e[n]), i = r.shift();
            if (i.unique = !0, i.multi) throw new T.Schema("Primary key cannot be multi-valued");
            r.forEach(function(o) {
              if (o.auto) throw new T.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!o.keyPath) throw new T.Schema("Index must have a name and cannot be an empty string");
            }), t[n] = An(n, i, r);
          }
        });
      }, nn.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? J(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, i = {};
        return n.forEach(function(o) {
          J(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
        }), t._dbSchema = i, Dn(t, [t._allTables, t, t.Transaction.prototype]), Jt(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], V(i), i), t._storeNames = V(i), this;
      }, nn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = It(this._cfg.contentUpgrade || Q, e), this;
      }, nn);
      function nn() {
      }
      function In(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Fe(Qt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Kn(e) {
        return e && typeof e.databases == "function";
      }
      function jn(e) {
        return Ue(function() {
          return B.letThrough = !0, e();
        });
      }
      function Fn(e) {
        return !("from" in e);
      }
      var pe = function(e, t) {
        if (!this) {
          var n = new pe();
          return e && "d" in e && J(n, e), n;
        }
        J(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Ct(e, t, n) {
        var r = $(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Fn(e)) return J(e, { from: t, to: n, d: 1 });
          var i = e.l, r = e.r;
          if ($(n, e.from) < 0) return i ? Ct(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, gr(e);
          if (0 < $(t, e.to)) return r ? Ct(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, gr(e);
          $(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < $(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && Dt(e, i), r && n && Dt(e, r);
        }
      }
      function Dt(e, t) {
        Fn(t) || (function n(r, c) {
          var o = c.from, a = c.to, u = c.l, c = c.r;
          Ct(r, o, a), u && n(r, u), c && n(r, c);
        })(e, t);
      }
      function vr(e, t) {
        var n = rn(t), r = n.next();
        if (r.done) return !1;
        for (var i = r.value, o = rn(e), a = o.next(i.from), u = a.value; !r.done && !a.done; ) {
          if ($(u.from, i.to) <= 0 && 0 <= $(u.to, i.from)) return !0;
          $(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (a = o.next(i.from)).value;
        }
        return !1;
      }
      function rn(e) {
        var t = Fn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && $(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || $(n, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function gr(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
        i && (t = i == "r" ? "l" : "r", n = E({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = br(n)), e.d = br(e);
      }
      function br(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function on(e, t) {
        return V(t).forEach(function(n) {
          e[n] ? Dt(e[n], t[n]) : e[n] = (function r(i) {
            var o, a, u = {};
            for (o in i) X(i, o) && (a = i[o], u[o] = !a || typeof a != "object" || ut.has(a.constructor) ? a : r(a));
            return u;
          })(t[n]);
        }), e;
      }
      function Bn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && vr(t[n], e[n]);
        });
      }
      U(pe.prototype, ((Ae = { add: function(e) {
        return Dt(this, e), this;
      }, addKey: function(e) {
        return Ct(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Ct(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = rn(this).next(e).value;
        return t && $(t.from, e) <= 0 && 0 <= $(t.to, e);
      } })[Nt] = function() {
        return rn(this);
      }, Ae));
      var it = {}, qn = {}, Mn = !1;
      function an(e) {
        on(qn, e), Mn || (Mn = !0, setTimeout(function() {
          Mn = !1, Ln(qn, !(qn = {}));
        }, 0));
      }
      function Ln(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, i = Object.values(it); r < i.length; r++) wr(a = i[r], e, n, t);
        else for (var o in e) {
          var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          u && (o = u[1], u = u[2], (a = it["idb://".concat(o, "/").concat(u)]) && wr(a, e, n, t));
        }
        n.forEach(function(c) {
          return c();
        });
      }
      function wr(e, t, n, r) {
        for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
          for (var u = a[o], c = u[0], f = [], m = 0, s = u[1]; m < s.length; m++) {
            var v = s[m];
            Bn(t, v.obsSet) ? v.subscribers.forEach(function(h) {
              return n.add(h);
            }) : r && f.push(v);
          }
          r && i.push([c, f]);
        }
        if (r) for (var l = 0, d = i; l < d.length; l++) {
          var y = d[l], c = y[0], f = y[1];
          e.queries.query[c] = f;
        }
      }
      function Hr(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? ae(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, i = Math.round(10 * e.verno), o = !1;
        function a() {
          if (t.openCanceller !== r) throw new T.DatabaseClosed("db.open() was cancelled");
        }
        function u() {
          return new j(function(v, l) {
            if (a(), !n) throw new T.MissingAPI();
            var d = e.name, y = t.autoSchema || !i ? n.open(d) : n.open(d, i);
            if (!y) throw new T.MissingAPI();
            y.onerror = Ie(l), y.onblocked = re(e._fireOnBlocked), y.onupgradeneeded = re(function(h) {
              var g;
              m = y.transaction, t.autoSchema && !e._options.allowEmptyDB ? (y.onerror = Ot, m.abort(), y.result.close(), (g = n.deleteDatabase(d)).onsuccess = g.onerror = re(function() {
                l(new T.NoSuchDatabase("Database ".concat(d, " doesnt exist")));
              })) : (m.onerror = Ie(l), h = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion, s = h < 1, e.idbdb = y.result, o && Yr(e, m), Qr(e, h / 10, m, l));
            }, l), y.onsuccess = re(function() {
              m = null;
              var h, g, w, _, x, S = e.idbdb = y.result, R = Ne(S.objectStoreNames);
              if (0 < R.length) try {
                var O = S.transaction((_ = R).length === 1 ? _[0] : _, "readonly");
                if (t.autoSchema) g = S, w = O, (h = e).verno = g.version / 10, w = h._dbSchema = en(0, g, w), h._storeNames = Ne(g.objectStoreNames, 0), Jt(h, [h._allTables], V(w), w);
                else if (tn(e, e._dbSchema, O), ((x = Nn(en(0, (x = e).idbdb, O), x._dbSchema)).add.length || x.change.some(function(A) {
                  return A.add.length || A.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), S.close(), i = S.version + 1, o = !0, v(u());
                Xt(e, O);
              } catch {
              }
              dt.push(e), S.onversionchange = re(function(A) {
                t.vcFired = !0, e.on("versionchange").fire(A);
              }), S.onclose = re(function(A) {
                e.on("close").fire(A);
              }), s && (x = e._deps, O = d, S = x.indexedDB, x = x.IDBKeyRange, Kn(S) || O === Qt || In(S, x).put({ name: O }).catch(Q)), v();
            }, l);
          }).catch(function(v) {
            switch (v?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), u();
                break;
              case "VersionError":
                if (0 < i) return i = 0, u();
            }
            return j.reject(v);
          });
        }
        var c, f = t.dbReadyResolve, m = null, s = !1;
        return j.race([r, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(v) {
          function l() {
            return indexedDB.databases().finally(v);
          }
          c = setInterval(l, 100), l();
        }).finally(function() {
          return clearInterval(c);
        }) : Promise.resolve()).then(u)]).then(function() {
          return a(), t.onReadyBeingFired = [], j.resolve(jn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function v() {
            if (0 < t.onReadyBeingFired.length) {
              var l = t.onReadyBeingFired.reduce(It, Q);
              return t.onReadyBeingFired = [], j.resolve(jn(function() {
                return l(e.vip);
              })).then(v);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(v) {
          t.dbOpenError = v;
          try {
            m && m.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), ae(v);
        }).finally(function() {
          t.openComplete = !0, f();
        }).then(function() {
          var v;
          return s && (v = {}, e.tables.forEach(function(l) {
            l.schema.indexes.forEach(function(d) {
              d.name && (v["idb://".concat(e.name, "/").concat(l.name, "/").concat(d.name)] = new pe(-1 / 0, [[[]]]));
            }), v["idb://".concat(e.name, "/").concat(l.name, "/")] = v["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new pe(-1 / 0, [[[]]]);
          }), Qe(Pt).fire(v), Ln(v, !0)), e;
        });
      }
      function Un(e) {
        function t(o) {
          return e.next(o);
        }
        var n = i(t), r = i(function(o) {
          return e.throw(o);
        });
        function i(o) {
          return function(c) {
            var u = o(c), c = u.value;
            return u.done ? c : c && typeof c.then == "function" ? c.then(n, r) : L(c) ? Promise.all(c).then(n, r) : n(c);
          };
        }
        return i(t)();
      }
      function un(e, t, n) {
        for (var r = L(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r;
      }
      var $r = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return E(E({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = {}, o = [];
          function a(s, v, l) {
            var d = At(s), y = i[d] = i[d] || [], h = s == null ? 0 : typeof s == "string" ? 1 : s.length, g = 0 < v, g = E(E({}, l), { name: g ? "".concat(d, "(virtual-from:").concat(l.name, ")") : l.name, lowLevelIndex: l, isVirtual: g, keyTail: v, keyLength: h, extractKey: Cn(s), unique: !g && l.unique });
            return y.push(g), g.isPrimaryKey || o.push(g), 1 < h && a(h === 2 ? s[0] : s.slice(0, h - 1), v + 1, l), y.sort(function(w, _) {
              return w.keyTail - _.keyTail;
            }), g;
          }
          t = a(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [t];
          for (var u = 0, c = r.indexes; u < c.length; u++) {
            var f = c[u];
            a(f.keyPath, 0, f);
          }
          function m(s) {
            var v, l = s.query.index;
            return l.isVirtual ? E(E({}, s), { query: { index: l.lowLevelIndex, range: (v = s.query.range, l = l.keyTail, { type: v.type === 1 ? 2 : v.type, lower: un(v.lower, v.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l), lowerOpen: !0, upper: un(v.upper, v.upperOpen ? e.MIN_KEY : e.MAX_KEY, l), upperOpen: !0 }) } }) : s;
          }
          return E(E({}, n), { schema: E(E({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(s) {
            return (s = i[At(s)]) && s[0];
          } }), count: function(s) {
            return n.count(m(s));
          }, query: function(s) {
            return n.query(m(s));
          }, openCursor: function(s) {
            var v = s.query.index, l = v.keyTail, d = v.isVirtual, y = v.keyLength;
            return d ? n.openCursor(m(s)).then(function(g) {
              return g && h(g);
            }) : n.openCursor(s);
            function h(g) {
              return Object.create(g, { continue: { value: function(w) {
                w != null ? g.continue(un(w, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? g.continue(g.key.slice(0, y).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : g.continue();
              } }, continuePrimaryKey: { value: function(w, _) {
                g.continuePrimaryKey(un(w, e.MAX_KEY, l), _);
              } }, primaryKey: { get: function() {
                return g.primaryKey;
              } }, key: { get: function() {
                var w = g.key;
                return y === 1 ? w[0] : w.slice(0, y);
              } }, value: { get: function() {
                return g.value;
              } } });
            }
          } });
        } });
      } };
      function Vn(e, t, n, r) {
        return n = n || {}, r = r || "", V(e).forEach(function(i) {
          var o, a, u;
          X(t, i) ? (o = e[i], a = t[i], typeof o == "object" && typeof a == "object" && o && a ? (u = st(o)) !== st(a) ? n[r + i] = t[i] : u === "Object" ? Vn(o, a, n, r + i + ".") : o !== a && (n[r + i] = t[i]) : o !== a && (n[r + i] = t[i])) : n[r + i] = void 0;
        }), V(t).forEach(function(i) {
          X(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function Gn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Xr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return E(E({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return E(E({}, n), { mutate: function(i) {
            var o = B.trans, a = o.table(t).hook, u = a.deleting, c = a.creating, f = a.updating;
            switch (i.type) {
              case "add":
                if (c.fire === Q) break;
                return o._promise("readwrite", function() {
                  return m(i);
                }, !0);
              case "put":
                if (c.fire === Q && f.fire === Q) break;
                return o._promise("readwrite", function() {
                  return m(i);
                }, !0);
              case "delete":
                if (u.fire === Q) break;
                return o._promise("readwrite", function() {
                  return m(i);
                }, !0);
              case "deleteRange":
                if (u.fire === Q) break;
                return o._promise("readwrite", function() {
                  return (function s(v, l, d) {
                    return n.query({ trans: v, values: !1, query: { index: r, range: l }, limit: d }).then(function(y) {
                      var h = y.result;
                      return m({ type: "delete", keys: h, trans: v }).then(function(g) {
                        return 0 < g.numFailures ? Promise.reject(g.failures[0]) : h.length < d ? { failures: [], numFailures: 0, lastResult: void 0 } : s(v, E(E({}, l), { lower: h[h.length - 1], lowerOpen: !0 }), d);
                      });
                    });
                  })(i.trans, i.range, 1e4);
                }, !0);
            }
            return n.mutate(i);
            function m(s) {
              var v, l, d, y = B.trans, h = s.keys || Gn(r, s);
              if (!h) throw new Error("Keys missing");
              return (s = s.type === "add" || s.type === "put" ? E(E({}, s), { keys: h }) : E({}, s)).type !== "delete" && (s.values = M([], s.values)), s.keys && (s.keys = M([], s.keys)), v = n, d = h, ((l = s).type === "add" ? Promise.resolve([]) : v.getMany({ trans: l.trans, keys: d, cache: "immutable" })).then(function(g) {
                var w = h.map(function(_, x) {
                  var S, R, O, A = g[x], I = { onerror: null, onsuccess: null };
                  return s.type === "delete" ? u.fire.call(I, _, A, y) : s.type === "add" || A === void 0 ? (S = c.fire.call(I, _, s.values[x], y), _ == null && S != null && (s.keys[x] = _ = S, r.outbound || ce(s.values[x], r.keyPath, _))) : (S = Vn(A, s.values[x]), (R = f.fire.call(I, S, _, A, y)) && (O = s.values[x], Object.keys(R).forEach(function(D) {
                    X(O, D) ? O[D] = R[D] : ce(O, D, R[D]);
                  }))), I;
                });
                return n.mutate(s).then(function(_) {
                  for (var x = _.failures, S = _.results, R = _.numFailures, _ = _.lastResult, O = 0; O < h.length; ++O) {
                    var A = (S || h)[O], I = w[O];
                    A == null ? I.onerror && I.onerror(x[O]) : I.onsuccess && I.onsuccess(s.type === "put" && g[O] ? s.values[O] : A);
                  }
                  return { failures: x, results: S, numFailures: R, lastResult: _ };
                }).catch(function(_) {
                  return w.forEach(function(x) {
                    return x.onerror && x.onerror(_);
                  }), Promise.reject(_);
                });
              });
            }
          } });
        } });
      } };
      function _r(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) $(t.keys[i], e[o]) === 0 && (r.push(n ? xe(t.values[i]) : t.values[i]), ++o);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var Jr = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return E(E({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var i = _r(r.keys, r.trans._cache, r.cache === "clone");
            return i ? j.resolve(i) : n.getMany(r).then(function(o) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? xe(o) : o }, o;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function Er(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function xr(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Zr = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new pe(e.MIN_KEY, e.MAX_KEY);
        return E(E({}, e), { transaction: function(r, i, o) {
          if (B.subscr && i !== "readonly") throw new T.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));
          return e.transaction(r, i, o);
        }, table: function(r) {
          var i = e.table(r), o = i.schema, a = o.primaryKey, s = o.indexes, u = a.extractKey, c = a.outbound, f = a.autoIncrement && s.filter(function(l) {
            return l.compound && l.keyPath.includes(a.keyPath);
          }), m = E(E({}, i), { mutate: function(l) {
            function d(D) {
              return D = "idb://".concat(t, "/").concat(r, "/").concat(D), _[D] || (_[D] = new pe());
            }
            var y, h, g, w = l.trans, _ = l.mutatedParts || (l.mutatedParts = {}), x = d(""), S = d(":dels"), R = l.type, I = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [Gn(a, l).filter(function(D) {
              return D;
            }), l.values] : [], O = I[0], A = I[1], I = l.trans._cache;
            return L(O) ? (x.addKeys(O), (I = R === "delete" || O.length === A.length ? _r(O, I) : null) || S.addKeys(O), (I || A) && (y = d, h = I, g = A, o.indexes.forEach(function(D) {
              var F = y(D.name || "");
              function z(W) {
                return W != null ? D.extractKey(W) : null;
              }
              function Y(W) {
                return D.multiEntry && L(W) ? W.forEach(function(Se) {
                  return F.addKey(Se);
                }) : F.addKey(W);
              }
              (h || g).forEach(function(W, me) {
                var G = h && z(h[me]), me = g && z(g[me]);
                $(G, me) !== 0 && (G != null && Y(G), me != null && Y(me));
              });
            }))) : O ? (A = { from: (A = O.lower) !== null && A !== void 0 ? A : e.MIN_KEY, to: (A = O.upper) !== null && A !== void 0 ? A : e.MAX_KEY }, S.add(A), x.add(A)) : (x.add(n), S.add(n), o.indexes.forEach(function(D) {
              return d(D.name).add(n);
            })), i.mutate(l).then(function(D) {
              return !O || l.type !== "add" && l.type !== "put" || (x.addKeys(D.results), f && f.forEach(function(F) {
                for (var z = l.values.map(function(G) {
                  return F.extractKey(G);
                }), Y = F.keyPath.findIndex(function(G) {
                  return G === a.keyPath;
                }), W = 0, Se = D.results.length; W < Se; ++W) z[W][Y] = D.results[W];
                d(F.name).addKeys(z);
              })), w.mutatedParts = on(w.mutatedParts || {}, _), D;
            });
          } }), s = function(d) {
            var y = d.query, d = y.index, y = y.range;
            return [d, new pe((d = y.lower) !== null && d !== void 0 ? d : e.MIN_KEY, (y = y.upper) !== null && y !== void 0 ? y : e.MAX_KEY)];
          }, v = { get: function(l) {
            return [a, new pe(l.key)];
          }, getMany: function(l) {
            return [a, new pe().addKeys(l.keys)];
          }, count: s, query: s, openCursor: s };
          return V(v).forEach(function(l) {
            m[l] = function(d) {
              var y = B.subscr, h = !!y, g = Er(B, i) && xr(l, d) ? d.obsSet = {} : y;
              if (h) {
                var w = function(A) {
                  return A = "idb://".concat(t, "/").concat(r, "/").concat(A), g[A] || (g[A] = new pe());
                }, _ = w(""), x = w(":dels"), y = v[l](d), h = y[0], y = y[1];
                if ((l === "query" && h.isPrimaryKey && !d.values ? x : w(h.name || "")).add(y), !h.isPrimaryKey) {
                  if (l !== "count") {
                    var S = l === "query" && c && d.values && i.query(E(E({}, d), { values: !1 }));
                    return i[l].apply(this, arguments).then(function(A) {
                      if (l === "query") {
                        if (c && d.values) return S.then(function(z) {
                          return z = z.result, _.addKeys(z), A;
                        });
                        var I = d.values ? A.result.map(u) : A.result;
                        (d.values ? _ : x).addKeys(I);
                      } else if (l === "openCursor") {
                        var D = A, F = d.values;
                        return D && Object.create(D, { key: { get: function() {
                          return x.addKey(D.primaryKey), D.key;
                        } }, primaryKey: { get: function() {
                          var z = D.primaryKey;
                          return x.addKey(z), z;
                        } }, value: { get: function() {
                          return F && _.addKey(D.primaryKey), D.value;
                        } } });
                      }
                      return A;
                    });
                  }
                  x.add(n);
                }
              }
              return i[l].apply(this, arguments);
            };
          }), m;
        } });
      } };
      function Tr(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = E({}, t), L(t.keys) && (t.keys = t.keys.filter(function(i, o) {
          return !(o in n.failures);
        })), "values" in t && L(t.values) && (t.values = t.values.filter(function(i, o) {
          return !(o in n.failures);
        })), t);
      }
      function zn(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < $(n, r.lower) : 0 <= $(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? $(e, t.upper) < 0 : $(e, t.upper) <= 0));
        var n, r;
      }
      function Sr(e, t, v, r, i, o) {
        if (!v || v.length === 0) return e;
        var a = t.query.index, u = a.multiEntry, c = t.query.range, f = r.schema.primaryKey.extractKey, m = a.extractKey, s = (a.lowLevelIndex || a).extractKey, v = v.reduce(function(l, d) {
          var y = l, h = [];
          if (d.type === "add" || d.type === "put") for (var g = new pe(), w = d.values.length - 1; 0 <= w; --w) {
            var _, x = d.values[w], S = f(x);
            g.hasKey(S) || (_ = m(x), (u && L(_) ? _.some(function(D) {
              return zn(D, c);
            }) : zn(_, c)) && (g.addKey(S), h.push(x)));
          }
          switch (d.type) {
            case "add":
              var R = new pe().addKeys(t.values ? l.map(function(F) {
                return f(F);
              }) : l), y = l.concat(t.values ? h.filter(function(F) {
                return F = f(F), !R.hasKey(F) && (R.addKey(F), !0);
              }) : h.map(function(F) {
                return f(F);
              }).filter(function(F) {
                return !R.hasKey(F) && (R.addKey(F), !0);
              }));
              break;
            case "put":
              var O = new pe().addKeys(d.values.map(function(F) {
                return f(F);
              }));
              y = l.filter(function(F) {
                return !O.hasKey(t.values ? f(F) : F);
              }).concat(t.values ? h : h.map(function(F) {
                return f(F);
              }));
              break;
            case "delete":
              var A = new pe().addKeys(d.keys);
              y = l.filter(function(F) {
                return !A.hasKey(t.values ? f(F) : F);
              });
              break;
            case "deleteRange":
              var I = d.range;
              y = l.filter(function(F) {
                return !zn(f(F), I);
              });
          }
          return y;
        }, e);
        return v === e ? e : (v.sort(function(l, d) {
          return $(s(l), s(d)) || $(f(l), f(d));
        }), t.limit && t.limit < 1 / 0 && (v.length > t.limit ? v.length = t.limit : e.length === t.limit && v.length < t.limit && (i.dirty = !0)), o ? Object.freeze(v) : v);
      }
      function Or(e, t) {
        return $(e.lower, t.lower) === 0 && $(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ei(e, t) {
        return (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = $(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return 1;
            if (o) return -1;
          }
          return r;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = $(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return -1;
            if (o) return 1;
          }
          return r;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function ti(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var i, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (i = e, o = t, setTimeout(function() {
            i.subscribers.size === 0 && qe(o, i);
          }, 3e3));
        });
      }
      var ni = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return E(E({}, e), { transaction: function(n, r, i) {
          var o, a, u = e.transaction(n, r, i);
          return r === "readwrite" && (a = (o = new AbortController()).signal, i = function(c) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var f = /* @__PURE__ */ new Set(), m = 0, s = n; m < s.length; m++) {
                  var v = s[m], l = it["idb://".concat(t, "/").concat(v)];
                  if (l) {
                    var d = e.table(v), y = l.optimisticOps.filter(function(F) {
                      return F.trans === u;
                    });
                    if (u._explicit && c && u.mutatedParts) for (var h = 0, g = Object.values(l.queries.query); h < g.length; h++) for (var w = 0, _ = (R = g[h]).slice(); w < _.length; w++) Bn((O = _[w]).obsSet, u.mutatedParts) && (qe(R, O), O.subscribers.forEach(function(F) {
                      return f.add(F);
                    }));
                    else if (0 < y.length) {
                      l.optimisticOps = l.optimisticOps.filter(function(F) {
                        return F.trans !== u;
                      });
                      for (var x = 0, S = Object.values(l.queries.query); x < S.length; x++) for (var R, O, A, I = 0, D = (R = S[x]).slice(); I < D.length; I++) (O = D[I]).res != null && u.mutatedParts && (c && !O.dirty ? (A = Object.isFrozen(O.res), A = Sr(O.res, O.req, y, d, O, A), O.dirty ? (qe(R, O), O.subscribers.forEach(function(F) {
                        return f.add(F);
                      })) : A !== O.res && (O.res = A, O.promise = j.resolve({ result: A }))) : (O.dirty && qe(R, O), O.subscribers.forEach(function(F) {
                        return f.add(F);
                      })));
                    }
                  }
                }
                f.forEach(function(F) {
                  return F();
                });
              }
            };
          }, u.addEventListener("abort", i(!1), { signal: a }), u.addEventListener("error", i(!1), { signal: a }), u.addEventListener("complete", i(!0), { signal: a })), u;
        }, table: function(n) {
          var r = e.table(n), i = r.schema.primaryKey;
          return E(E({}, r), { mutate: function(o) {
            var a = B.trans;
            if (i.outbound || a.db._options.cache === "disabled" || a.explicit || a.idbtrans.mode !== "readwrite") return r.mutate(o);
            var u = it["idb://".concat(t, "/").concat(n)];
            return u ? (a = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Gn(i, o).some(function(c) {
              return c == null;
            })) ? (u.optimisticOps.push(o), o.mutatedParts && an(o.mutatedParts), a.then(function(c) {
              0 < c.numFailures && (qe(u.optimisticOps, o), (c = Tr(0, o, c)) && u.optimisticOps.push(c), o.mutatedParts && an(o.mutatedParts));
            }), a.catch(function() {
              qe(u.optimisticOps, o), o.mutatedParts && an(o.mutatedParts);
            })) : a.then(function(c) {
              var f = Tr(0, E(E({}, o), { values: o.values.map(function(m, s) {
                var v;
                return c.failures[s] || (m = (v = i.keyPath) !== null && v !== void 0 && v.includes(".") ? xe(m) : E({}, m), ce(m, i.keyPath, c.results[s])), m;
              }) }), c);
              u.optimisticOps.push(f), queueMicrotask(function() {
                return o.mutatedParts && an(o.mutatedParts);
              });
            }), a) : r.mutate(o);
          }, query: function(o) {
            if (!Er(B, r) || !xr("query", o)) return r.query(o);
            var a = ((f = B.trans) === null || f === void 0 ? void 0 : f.db._options.cache) === "immutable", s = B, u = s.requery, c = s.signal, f = (function(d, y, h, g) {
              var w = it["idb://".concat(d, "/").concat(y)];
              if (!w) return [];
              if (!(y = w.queries[h])) return [null, !1, w, null];
              var _ = y[(g.query ? g.query.index.name : null) || ""];
              if (!_) return [null, !1, w, null];
              switch (h) {
                case "query":
                  var x = _.find(function(S) {
                    return S.req.limit === g.limit && S.req.values === g.values && Or(S.req.query.range, g.query.range);
                  });
                  return x ? [x, !0, w, _] : [_.find(function(S) {
                    return ("limit" in S.req ? S.req.limit : 1 / 0) >= g.limit && (!g.values || S.req.values) && ei(S.req.query.range, g.query.range);
                  }), !1, w, _];
                case "count":
                  return x = _.find(function(S) {
                    return Or(S.req.query.range, g.query.range);
                  }), [x, !!x, w, _];
              }
            })(t, n, "query", o), m = f[0], s = f[1], v = f[2], l = f[3];
            return m && s ? m.obsSet = o.obsSet : (s = r.query(o).then(function(d) {
              var y = d.result;
              if (m && (m.res = y), a) {
                for (var h = 0, g = y.length; h < g; ++h) Object.freeze(y[h]);
                Object.freeze(y);
              } else d.result = xe(y);
              return d;
            }).catch(function(d) {
              return l && m && qe(l, m), Promise.reject(d);
            }), m = { obsSet: o.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, l ? l.push(m) : (l = [m], (v = v || (it["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = l)), ti(m, l, u, c), m.promise.then(function(d) {
              return { result: Sr(d.result, o, v?.optimisticOps, r, m, a) };
            });
          } });
        } });
      } };
      function sn(e, t) {
        return new Proxy(e, { get: function(n, r, i) {
          return r === "db" ? t : Reflect.get(n, r, i);
        } });
      }
      var Fe = (ue.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new T.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new T.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(zr), n.stores({}), this._state.autoSchema = !1, n);
      }, ue.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || B.letThrough || this._vip) ? e() : new j(function(n, r) {
          if (t._state.openComplete) return r(new T.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new T.DatabaseClosed());
            t.open().catch(Q);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, ue.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, i = e.name;
        return i && this.unuse({ stack: t, name: i }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: i }), e.sort(function(o, a) {
          return o.level - a.level;
        }), this;
      }, ue.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(i) {
          return r ? i.create !== r : !!n && i.name !== n;
        })), this;
      }, ue.prototype.open = function() {
        var e = this;
        return tt(Le, function() {
          return Hr(e);
        });
      }, ue.prototype._close = function() {
        var e = this._state, t = dt.indexOf(this);
        if (0 <= t && dt.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new j(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new j(function(n, r) {
          e.cancelOpen = r;
        }));
      }, ue.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new T.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new T.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ue.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new j(function(i, o) {
          function a() {
            t.close(e);
            var u = t._deps.indexedDB.deleteDatabase(t.name);
            u.onsuccess = re(function() {
              var c, f, m;
              c = t._deps, f = t.name, m = c.indexedDB, c = c.IDBKeyRange, Kn(m) || f === Qt || In(m, c).delete(f).catch(Q), i();
            }), u.onerror = Ie(o), u.onblocked = t._fireOnBlocked;
          }
          if (n) throw new T.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
        });
      }, ue.prototype.backendDB = function() {
        return this.idbdb;
      }, ue.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ue.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ue.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ue.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ue.prototype, "tables", { get: function() {
        var e = this;
        return V(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), ue.prototype.transaction = function() {
        var e = (function(t, n, r) {
          var i = arguments.length;
          if (i < 2) throw new T.InvalidArgument("Too few arguments");
          for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
          return r = o.pop(), [t, gt(o), r];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ue.prototype._transaction = function(e, t, n) {
        var r = this, i = B.trans;
        i && i.db === this && e.indexOf("!") === -1 || (i = null);
        var o, a, u = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (a = t.map(function(f) {
            if (f = f instanceof r.Table ? f.name : f, typeof f != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return f;
          }), e == "r" || e === En) o = En;
          else {
            if (e != "rw" && e != xn) throw new T.InvalidArgument("Invalid transaction mode: " + e);
            o = xn;
          }
          if (i) {
            if (i.mode === En && o === xn) {
              if (!u) throw new T.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              i = null;
            }
            i && a.forEach(function(f) {
              if (i && i.storeNames.indexOf(f) === -1) {
                if (!u) throw new T.SubTransaction("Table " + f + " not included in parent transaction.");
                i = null;
              }
            }), u && i && !i.active && (i = null);
          }
        } catch (f) {
          return i ? i._promise(null, function(m, s) {
            s(f);
          }) : ae(f);
        }
        var c = (function f(m, s, v, l, d) {
          return j.resolve().then(function() {
            var y = B.transless || B, h = m._createTransaction(s, v, m._dbSchema, l);
            if (h.explicit = !0, y = { trans: h, transless: y }, l) h.idbtrans = l.idbtrans;
            else try {
              h.create(), h.idbtrans._explicit = !0, m._state.PR1398_maxLoop = 3;
            } catch (_) {
              return _.name === b.InvalidState && m.isOpen() && 0 < --m._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), m.close({ disableAutoOpen: !1 }), m.open().then(function() {
                return f(m, s, v, null, d);
              })) : ae(_);
            }
            var g, w = We(d);
            return w && ht(), y = j.follow(function() {
              var _;
              (g = d.call(h, h)) && (w ? (_ = Ve.bind(null, null), g.then(_, _)) : typeof g.next == "function" && typeof g.throw == "function" && (g = Un(g)));
            }, y), (g && typeof g.then == "function" ? j.resolve(g).then(function(_) {
              return h.active ? _ : ae(new T.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : y.then(function() {
              return g;
            })).then(function(_) {
              return l && h._resolve(), h._completion.then(function() {
                return _;
              });
            }).catch(function(_) {
              return h._reject(_), ae(_);
            });
          });
        }).bind(null, this, o, a, i, n);
        return i ? i._promise(o, c, "lock") : B.trans ? tt(B.transless, function() {
          return r._whenReady(c);
        }) : this._whenReady(c);
      }, ue.prototype.table = function(e) {
        if (!X(this._allTables, e)) throw new T.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ue);
      function ue(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = ue.dependencies;
        this._options = t = E({ addons: ue.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var i, o, a, u, c, f = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        f.dbReadyPromise = new j(function(s) {
          f.dbReadyResolve = s;
        }), f.openCanceller = new j(function(s, v) {
          f.cancelOpen = v;
        }), this._state = f, this.name = e, this.on = xt(this, "populate", "blocked", "versionchange", "close", { ready: [It, Q] }), this.on.ready.subscribe = Ee(this.on.ready.subscribe, function(s) {
          return function(v, l) {
            ue.vip(function() {
              var d, y = n._state;
              y.openComplete ? (y.dbOpenError || j.resolve().then(v), l && s(v)) : y.onReadyBeingFired ? (y.onReadyBeingFired.push(v), l && s(v)) : (s(v), d = n, l || s(function h() {
                d.on.ready.unsubscribe(v), d.on.ready.unsubscribe(h);
              }));
            });
          };
        }), this.Collection = (i = this, Tt(Br.prototype, function(g, h) {
          this.db = i;
          var l = rr, d = null;
          if (h) try {
            l = h();
          } catch (w) {
            d = w;
          }
          var y = g._ctx, h = y.table, g = h.hook.reading.fire;
          this._ctx = { table: h, index: y.index, isPrimKey: !y.index || h.schema.primKey.keyPath && y.index === h.schema.primKey.name, range: l, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: d, or: y.or, valueMapper: g !== ge ? g : null };
        })), this.Table = (o = this, Tt(ur.prototype, function(s, v, l) {
          this.db = o, this._tx = l, this.name = s, this.schema = v, this.hook = o._allTables[s] ? o._allTables[s].hook : xt(null, { creating: [Rt, Q], reading: [Be, ge], updating: [ct, Q], deleting: [Re, Q] });
        })), this.Transaction = (a = this, Tt(Lr.prototype, function(s, v, l, d, y) {
          var h = this;
          this.db = a, this.mode = s, this.storeNames = v, this.schema = l, this.chromeTransactionDurability = d, this.idbtrans = null, this.on = xt(this, "complete", "error", "abort"), this.parent = y || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(g, w) {
            h._resolve = g, h._reject = w;
          }), this._completion.then(function() {
            h.active = !1, h.on.complete.fire();
          }, function(g) {
            var w = h.active;
            return h.active = !1, h.on.error.fire(g), h.parent ? h.parent._reject(g) : w && h.idbtrans && h.idbtrans.abort(), ae(g);
          });
        })), this.Version = (u = this, Tt(Wr.prototype, function(s) {
          this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (c = this, Tt(hr.prototype, function(s, v, l) {
          if (this.db = c, this._ctx = { table: s, index: v === ":id" ? null : v, or: l }, this._cmp = this._ascending = $, this._descending = function(d, y) {
            return $(y, d);
          }, this._max = function(d, y) {
            return 0 < $(d, y) ? d : y;
          }, this._min = function(d, y) {
            return $(d, y) < 0 ? d : y;
          }, this._IDBKeyRange = c._deps.IDBKeyRange, !this._IDBKeyRange) throw new T.MissingAPI();
        })), this.on("versionchange", function(s) {
          0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(s) {
          !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
        }), this._maxKey = kt(t.IDBKeyRange), this._createTransaction = function(s, v, l, d) {
          return new n.Transaction(s, v, l, n._options.chromeTransactionDurability, d);
        }, this._fireOnBlocked = function(s) {
          n.on("blocked").fire(s), dt.filter(function(v) {
            return v.name === n.name && v !== n && !v._state.vcFired;
          }).map(function(v) {
            return v.on("versionchange").fire(s);
          });
        }, this.use(Jr), this.use(ni), this.use(Zr), this.use($r), this.use(Xr);
        var m = new Proxy(this, { get: function(s, v, l) {
          if (v === "_vip") return !0;
          if (v === "table") return function(y) {
            return sn(n.table(y), m);
          };
          var d = Reflect.get(s, v, l);
          return d instanceof ur ? sn(d, m) : v === "tables" ? d.map(function(y) {
            return sn(y, m);
          }) : v === "_createTransaction" ? function() {
            return sn(d.apply(this, arguments), m);
          } : d;
        } });
        this.vip = m, r.forEach(function(s) {
          return s(n);
        });
      }
      var cn, Ae = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ri = (Qn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Qn.prototype[Ae] = function() {
        return this;
      }, Qn);
      function Qn(e) {
        this._subscribe = e;
      }
      try {
        cn = { indexedDB: q.indexedDB || q.mozIndexedDB || q.webkitIndexedDB || q.msIndexedDB, IDBKeyRange: q.IDBKeyRange || q.webkitIDBKeyRange };
      } catch {
        cn = { indexedDB: null, IDBKeyRange: null };
      }
      function Pr(e) {
        var t, n = !1, r = new ri(function(i) {
          var o = We(e), a, u = !1, c = {}, f = {}, m = { get closed() {
            return u;
          }, unsubscribe: function() {
            u || (u = !0, a && a.abort(), s && Qe.storagemutated.unsubscribe(l));
          } };
          i.start && i.start(m);
          var s = !1, v = function() {
            return _n(d);
          }, l = function(y) {
            on(c, y), Bn(f, c) && v();
          }, d = function() {
            var y, h, g;
            !u && cn.indexedDB && (c = {}, y = {}, a && a.abort(), a = new AbortController(), g = (function(w) {
              var _ = lt();
              try {
                o && ht();
                var x = Ue(e, w);
                return x = o ? x.finally(Ve) : x;
              } finally {
                _ && ft();
              }
            })(h = { subscr: y, signal: a.signal, requery: v, querier: e, trans: null }), Promise.resolve(g).then(function(w) {
              n = !0, t = w, u || h.signal.aborted || (c = {}, (function(_) {
                for (var x in _) if (X(_, x)) return;
                return 1;
              })(f = y) || s || (Qe(Pt, l), s = !0), _n(function() {
                return !u && i.next && i.next(w);
              }));
            }, function(w) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(w?.name) || u || _n(function() {
                u || i.error && i.error(w);
              });
            }));
          };
          return setTimeout(v, 0), m;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var ot = Fe;
      function Yn(e) {
        var t = Ye;
        try {
          Ye = !0, Qe.storagemutated.fire(e), Ln(e, !0);
        } finally {
          Ye = t;
        }
      }
      U(ot, E(E({}, le), { delete: function(e) {
        return new ot(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new ot(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = ot.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (Kn(n) ? Promise.resolve(n.databases()).then(function(r) {
            return r.map(function(i) {
              return i.name;
            }).filter(function(i) {
              return i !== Qt;
            });
          }) : In(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return ae(new T.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          J(this, e);
        };
      }, ignoreTransaction: function(e) {
        return B.trans ? tt(B.transless, e) : e();
      }, vip: jn, async: function(e) {
        return function() {
          try {
            var t = Un(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (n) {
            return ae(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = Un(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : j.resolve(r);
        } catch (i) {
          return ae(i);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, t) {
        return t = j.resolve(typeof e == "function" ? ot.ignoreTransaction(e) : e).timeout(t || 6e4), B.trans ? B.trans.waitFor(t) : t;
      }, Promise: j, debug: { get: function() {
        return ke;
      }, set: function(e) {
        hn(e);
      } }, derive: oe, extend: J, props: U, override: Ee, Events: xt, on: Qe, liveQuery: Pr, extendObservabilitySet: on, getByKeyPath: Pe, setByKeyPath: ce, delByKeyPath: function(e, t) {
        typeof t == "string" ? ce(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          ce(e, n, void 0);
        });
      }, shallowClone: jt, deepClone: xe, getObjectDiff: Vn, cmp: $, asap: Oe, minKey: -1 / 0, addons: [], connections: dt, errnames: b, dependencies: cn, cache: it, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), ot.maxKey = kt(ot.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Qe(Pt, function(e) {
        Ye || (e = new CustomEvent(Pn, { detail: e }), Ye = !0, dispatchEvent(e), Ye = !1);
      }), addEventListener(Pn, function(e) {
        e = e.detail, Ye || Yn(e);
      }));
      var vt, Ye = !1, kr = function() {
      };
      return typeof BroadcastChannel < "u" && ((kr = function() {
        (vt = new BroadcastChannel(Pn)).onmessage = function(e) {
          return e.data && Yn(e.data);
        };
      })(), typeof vt.unref == "function" && vt.unref(), Qe(Pt, function(e) {
        Ye || vt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Fe.disableBfCache && e.persisted) {
          ke && console.debug("Dexie: handling persisted pagehide"), vt?.close();
          for (var t = 0, n = dt; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Fe.disableBfCache && e.persisted && (ke && console.debug("Dexie: handling persisted pageshow"), kr(), Yn({ all: new pe(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof He || e instanceof TypeError || e instanceof SyntaxError || !e.name || !k[e.name] ? e : (t = new k[e.name](t || e.message, e), "stack" in e && Z(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, hn(ke), E(Fe, Object.freeze({ __proto__: null, Dexie: Fe, liveQuery: Pr, Entity: ir, cmp: $, PropModification: St, replacePrefix: function(e, t) {
        return new St({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new St({ add: e });
      }, remove: function(e) {
        return new St({ remove: e });
      }, default: Fe, RangeSet: pe, mergeRanges: Dt, rangesOverlap: vr }), { default: Fe }), Fe;
    });
  })(ai)), ai.exports;
}
var Ji = Xi();
const ui = /* @__PURE__ */ Ui(Ji), yi = Symbol.for("Dexie"), Nr = globalThis[yi] || (globalThis[yi] = ui);
if (ui.semVer !== Nr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ui.semVer} and ${Nr.semVer}`);
const {
  liveQuery: Mo,
  mergeRanges: Lo,
  rangesOverlap: Uo,
  RangeSet: Vo,
  cmp: Go,
  Entity: zo,
  PropModification: Qo,
  replacePrefix: Yo,
  add: Wo,
  remove: Ho
} = Nr;
function Zi(C) {
  const P = new Nr(C), K = Hi([...Ei]);
  return P.version(1).stores(K), P;
}
async function eo(C) {
  const { databaseInstance: P, tagName: K, records: E } = C, M = P.table(K);
  await P.transaction("rw", M, () => M.bulkAdd(E));
}
async function to(C) {
  const { databaseInstance: P, tagNames: K } = C;
  P.close();
  const E = P.verno, M = P.tables.reduce(
    (L, J) => (L[J.name] = oi, L),
    {}
  ), q = K.reduce(
    (L, J) => (L[J] = oi, L),
    {}
  ), V = {
    ...M,
    ...q
  };
  P.version(E + 1).stores(V), P.open();
}
const Ar = {};
function no(C) {
  const { parent: P, child: K } = C;
  Ar[P.tagName] || (Ar[P.tagName] = []);
  const E = {
    parentId: P.id,
    childId: K.id,
    childTagName: K.tagName
  };
  Ar[P.tagName].push(E);
}
function ro(C) {
  const { parentRecordsBatch: P, parentTagName: K } = C, E = [...P], M = xi(K);
  for (const q of P) {
    const V = M.filter((L) => L.parentId === q.id).map((L) => ({
      id: L.childId,
      tagName: L.childTagName
    }));
    if (V.length > 0) {
      const L = E.findIndex(
        (J) => J.id === q.id
      );
      L >= 0 && (E[L].children || (E[L].children = []), E[L].children.push(...V), io({
        children: V,
        tagName: q.tagName
      }));
    }
  }
  return E;
}
function xi(C) {
  return Ar[C] || [];
}
function io(C) {
  const { children: P, tagName: K } = C, E = P.map((q) => q.id), M = xi(K);
  Ar[K] = M.filter(
    (q) => !E.includes(q.childId)
  );
}
function oo(C) {
  return "prefix" in C && "uri" in C && !!C.prefix && !!C.uri;
}
function ao(C, P) {
  return Object.keys(P).includes(C);
}
function Ti(C) {
  let P = "pending";
  const K = C.batchSize;
  let E = [], M = !1, q;
  return { push: L, next: V, close: J, status: P };
  async function V() {
    if (E.length === 0 && M)
      return P = "done", Promise.resolve({ value: [], done: !0 });
    const fe = M && E.length > 0, _e = E.length >= K;
    if (fe || _e) {
      const H = E.splice(0, K);
      return Promise.resolve({ value: H, done: !1 });
    }
    const { resolve: X, promise: U } = Promise.withResolvers();
    return q = X, U;
  }
  function L(fe) {
    if (E.length >= K && q) {
      const _e = E.splice(0, K);
      q({ value: _e, done: !1 }), q = void 0;
    }
    E.push(fe);
  }
  function J() {
    if (M = !0, q) {
      const fe = E.splice(0, K);
      q({ value: fe, done: !1 }), q = void 0;
    }
  }
}
function uo(C) {
  const { importContext: P, tagName: K } = C, E = {
    ...P
  };
  if (!E.queues[K]) {
    const M = Ti({
      batchSize: E.options.batchSize
    });
    E.queues[K] = M, queueMicrotask(() => {
      Si({
        tagName: K,
        importContext: E,
        isEndingQueue: !1
      }).catch((q) => {
        throw console.error(`Consumer error for ${K}:`, q), q;
      });
    });
  }
  return E;
}
function so(C) {
  const { tagName: P, importContext: K } = C, E = {
    ...K
  };
  if (!K.endingQueues[P]) {
    const M = Ti({
      batchSize: K.options.batchSize
    });
    E.endingQueues[P] = M;
  }
  return E;
}
function co(C) {
  const { importContext: P } = C;
  let K = { ...P };
  for (const M of Object.keys(K.queues))
    K.queues[M]?.close();
  const E = K.queuesObservable.subscribe(async () => {
    K = await fo({
      importContext: K
    }), E();
  });
  return K;
}
function lo(C) {
  const { importContext: P } = C, K = P.endingQueues && Object.keys(P.endingQueues).length > 0;
  return Promise.all([
    new Promise((E) => {
      const M = P.queuesObservable.subscribe(() => {
        P.queuesObservable.isAllDone() && (M(), E());
      });
    }),
    K ? new Promise((E) => {
      const M = P.endingQueuesObservable.subscribe(() => {
        P.endingQueuesObservable.isAllDone() && (M(), E());
      });
    }) : Promise.resolve()
  ]);
}
async function fo(C) {
  const { importContext: P } = C, K = { ...P };
  await to({
    databaseInstance: P.databaseInstance,
    tagNames: Object.keys(P.endingQueues)
  });
  for (const E of Object.keys(K.endingQueues)) {
    if (!K.endingQueues[E]) throw new Error(`Ending queue for tagName ${E} is not defined`);
    K.endingQueues[E]?.close(), queueMicrotask(() => {
      Si({
        tagName: E,
        importContext: K,
        isEndingQueue: !0
      }).catch((M) => {
        throw console.error(`Consumer error for ${E}:`, M), M;
      });
    });
  }
  return K;
}
function vi(C) {
  const P = /* @__PURE__ */ new Set();
  function K(q) {
    return P.add(q), () => P.delete(q);
  }
  function E() {
    for (const q of P) q();
  }
  function M() {
    return Object.values(C).every((q) => q.status === "done");
  }
  return { subscribe: K, notify: E, isAllDone: M };
}
async function Si(C) {
  const { tagName: P, importContext: K, isEndingQueue: E } = C;
  let M, q;
  if (E ? (M = K.endingQueues, q = K.endingQueuesObservable) : (M = K.queues, q = K.queuesObservable), !ao(P, M) || !M[P])
    throw new Error(`Queue for tagName ${P} is not defined to be consumed`);
  for (; ; ) {
    const { value: V, done: L } = await M[P].next();
    if (L) {
      q.isAllDone() && q.notify();
      break;
    }
    if (V.length === 0) continue;
    const J = ro({
      parentRecordsBatch: V,
      // within the same batch, all records have the same tagName
      parentTagName: V[0].tagName
    });
    await eo({
      databaseInstance: K.databaseInstance,
      tagName: P,
      records: J
    });
  }
}
function ho(C) {
  const { importContext: P } = C;
  let K = {
    stack: [],
    currentParentElements: []
  }, E = {
    ...P
  };
  const M = Yi.parser(
    !0,
    // strict mode
    {
      lowercase: !1,
      // Preserve case
      trim: !0,
      // Trim text nodes
      normalize: !0,
      // Normalize whitespace
      position: !1,
      // Don't track position (performance boost)
      xmlns: !0
      // Enable namespace handling
    }
  );
  return M.onopentag = (q) => K = po({ node: q, state: K }), M.ontext = (q) => K = mo({ text: q, state: K }), M.onclosetag = () => ({ updatedState: K, updatedImportContext: E } = yo({
    state: K,
    importContext: P
  })), M.onend = () => E = vo({ importContext: E }), M.onerror = go, { xmlParser: M, importContext: E };
}
function po(C) {
  const { node: P, state: K } = C, E = { ...K }, M = crypto.randomUUID(), q = bo(P), V = wo(P), L = _o(P.attributes), J = Eo(K.currentParentElements), fe = {
    id: M,
    tagName: q,
    namespace: V,
    attributes: L,
    value: "",
    parent: J ? { id: J.id, tagName: J.tagName } : null,
    children: []
  };
  return E.stack.push(fe), E.currentParentElements = [
    ...E.currentParentElements,
    { id: M, tagName: q }
  ], E;
}
function mo(C) {
  const { text: P, state: K } = C;
  return P && K.stack.length > 0 && (K.stack[K.stack.length - 1].value += P), K;
}
function yo(C) {
  const { state: P, importContext: K } = C;
  let E = { ...K }, M = [...P.stack], q = [...P.currentParentElements];
  const V = P.stack.at(-1);
  if (M = P.stack.slice(0, -1), q = P.currentParentElements.slice(0, -1), V) {
    if (M.length) {
      const L = M.length - 1;
      M = M.map(
        (J, fe) => fe === L ? {
          ...J,
          children: [
            ...J.children || [],
            { id: V.id, tagName: V.tagName }
          ]
        } : J
      );
    } else V.parent && no({
      parent: V.parent,
      child: { id: V.id, tagName: V.tagName }
    });
    Ei.includes(V.tagName) ? (E = uo({
      tagName: V.tagName,
      importContext: E
    }), E.queues[V.tagName]?.push(V)) : (E = so({
      tagName: V.tagName,
      importContext: E
    }), E.endingQueues[V.tagName]?.push(V));
  }
  return {
    updatedState: {
      stack: M,
      currentParentElements: q
    },
    updatedImportContext: E
  };
}
function vo(C) {
  const { importContext: P } = C;
  return co({
    importContext: P
  });
}
function go(C) {
  return new Error(`XML parsing error: ${C}`);
}
function bo(C) {
  return C.local || null;
}
function wo(C) {
  return oo(C) ? {
    prefix: C.prefix,
    uri: C.uri
  } : null;
}
function _o(C) {
  return Object.values(C).map((P) => {
    const K = P.prefix && P.uri ? {
      prefix: P.prefix,
      uri: P.uri
    } : null;
    return {
      name: P.name,
      value: P.value,
      namespace: K
    };
  });
}
function Eo(C) {
  return C.length === 0 ? null : C[C.length - 1];
}
const xo = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function To({
  files: C,
  options: P = xo
}) {
  const K = [];
  if (C.length === 0) throw new Error("No files provided for import.");
  for (const E of C) {
    if (!So(E)) {
      console.error(`Unsupported file type: ${E.name}`);
      continue;
    }
    if (E.size === 0) {
      console.warn(`File is empty: ${E.name}`);
      continue;
    }
    const M = await Po({ file: E, options: P });
    K.push(M);
  }
  return K;
}
function So(C) {
  return Wi.some((P) => C.name.toLowerCase().endsWith(P));
}
function Oo(C) {
  return C.name.replace(/\.[^.]+$/, "");
}
async function Po(C) {
  const { file: P, options: K } = C;
  try {
    const E = Oo(P);
    let M = {
      databaseInstance: Zi(E),
      options: {
        batchSize: K.batchSize
      },
      queues: {},
      endingQueues: {},
      queuesObservable: vi({}),
      endingQueuesObservable: vi({})
    };
    return K.useBrowserApi && (M = await ko({
      file: P,
      importContext: M,
      options: {
        chunkSize: K.chunkSize
      }
    })), await lo({
      importContext: M
    }), E;
  } catch (E) {
    throw console.error(`Error importing file ${P.name}:`, E), E;
  }
}
async function ko(C) {
  const { file: P, importContext: K, options: E } = C, M = P.stream().getReader(), { xmlParser: q, importContext: V } = ho({
    importContext: K
  }), L = new TextDecoder(), J = new Uint8Array(0);
  return await si(M, q, L, J, E), V;
}
async function si(C, P, K, E, M) {
  const q = M.chunkSize, { done: V, value: L } = await C.read();
  if (V) {
    if (E.length > 0) {
      const fe = K.decode(E);
      P.write(fe);
    }
    P.close();
    return;
  }
  if (!L)
    return await si(C, P, K, E, M);
  let J = new Uint8Array(E.length + L.length);
  for (J.set(E), J.set(L, E.length); J.length >= q; ) {
    const fe = J.slice(0, q);
    J = J.slice(q);
    const _e = K.decode(fe, { stream: !0 });
    P.write(_e);
  }
  return await si(C, P, K, J, M);
}
var Ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Co(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var Dr = { exports: {} }, Do = Dr.exports, gi;
function No() {
  return gi || (gi = 1, (function(C, P) {
    (function(K, E) {
      C.exports = E();
    })(Do, function() {
      var K = function(e, t) {
        return (K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        })(e, t);
      }, E = function() {
        return (E = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
      };
      function M(e, t, n) {
        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ao, V = Object.keys, L = Array.isArray;
      function J(e, t) {
        return typeof t != "object" || V(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || q.Promise || (q.Promise = Promise);
      var fe = Object.getPrototypeOf, _e = {}.hasOwnProperty;
      function X(e, t) {
        return _e.call(e, t);
      }
      function U(e, t) {
        typeof t == "function" && (t = t(fe(e))), (typeof Reflect > "u" ? V : Reflect.ownKeys)(t).forEach(function(n) {
          Z(e, n, t[n]);
        });
      }
      var H = Object.defineProperty;
      function Z(e, t, n, r) {
        H(e, t, J(n && X(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function oe(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), Z(e.prototype, "constructor", e), { extend: U.bind(null, e.prototype) };
        } };
      }
      var te = Object.getOwnPropertyDescriptor, Ce = [].slice;
      function Ne(e, t, n) {
        return Ce.call(e, t, n);
      }
      function Ee(e, t) {
        return t(e);
      }
      function se(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Oe(e) {
        q.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Pe(e, t) {
        if (typeof t == "string" && X(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, i = t.length; r < i; ++r) {
            var o = Pe(e, t[r]);
            n.push(o);
          }
          return n;
        }
        var a = t.indexOf(".");
        if (a !== -1) {
          var u = e[t.substr(0, a)];
          return u == null ? void 0 : Pe(u, t.substr(a + 1));
        }
      }
      function ce(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          se(typeof n != "string" && "length" in n);
          for (var r = 0, i = t.length; r < i; ++r) ce(e, t[r], n[r]);
        } else {
          var o, a, u = t.indexOf(".");
          u !== -1 ? (o = t.substr(0, u), (a = t.substr(u + 1)) === "" ? n === void 0 ? L(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : ce(u = !(u = e[o]) || !X(e, o) ? e[o] = {} : u, a, n)) : n === void 0 ? L(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function jt(e) {
        var t, n = {};
        for (t in e) X(e, t) && (n[t] = e[t]);
        return n;
      }
      var N = [].concat;
      function gt(e) {
        return N.apply([], e);
      }
      var Xe = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(gt([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return q[e];
      }), ut = new Set(Xe.map(function(e) {
        return q[e];
      })), ie = null;
      function xe(e) {
        return ie = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var r = ie.get(n);
          if (r) return r;
          if (L(n)) {
            r = [], ie.set(n, r);
            for (var i = 0, o = n.length; i < o; ++i) r.push(t(n[i]));
          } else if (ut.has(n.constructor)) r = n;
          else {
            var a, u = fe(n);
            for (a in r = u === Object.prototype ? {} : Object.create(u), ie.set(n, r), n) X(n, a) && (r[a] = t(n[a]));
          }
          return r;
        })(e), ie = null, e;
      }
      var Ft = {}.toString;
      function st(e) {
        return Ft.call(e).slice(8, -1);
      }
      var Nt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ve = typeof Nt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Nt]) && t.apply(e);
      } : function() {
        return null;
      };
      function qe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var Me = {};
      function De(e) {
        var t, n, r, i;
        if (arguments.length === 1) {
          if (L(e)) return e.slice();
          if (this === Me && typeof e == "string") return [e];
          if (i = ve(e)) {
            for (n = []; !(r = i.next()).done; ) n.push(r.value);
            return n;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (n = new Array(t); t--; ) n[t] = e[t];
          return n;
        }
        for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
        return n;
      }
      var We = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, wt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Ae = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(wt), dn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function He(e, t) {
        this.name = e, this.message = t;
      }
      function fn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, i) {
          return i.indexOf(n) === r;
        }).join(`
`);
      }
      function yt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = fn(e, t);
      }
      function $e(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = fn(e, this.failures);
      }
      oe(He).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), oe(yt).from(He), oe($e).from(He);
      var b = Ae.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), p = He, T = Ae.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, o) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = dn[t] || n, this.inner = null);
        }
        return oe(r).from(p), e[t] = r, e;
      }, {});
      T.Syntax = SyntaxError, T.Type = TypeError, T.Range = RangeError;
      var k = wt.reduce(function(e, t) {
        return e[t + "Error"] = T[t], e;
      }, {}), le = Ae.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = T[t]), e;
      }, {});
      function Q() {
      }
      function ge(e) {
        return e;
      }
      function Be(e, t) {
        return e == null || e === ge ? t : function(n) {
          return t(e(n));
        };
      }
      function we(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Rt(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? we(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? we(i, this.onerror) : i), o !== void 0 ? o : n;
        };
      }
      function Re(e, t) {
        return e === Q ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? we(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? we(r, this.onerror) : r);
        };
      }
      function ct(e, t) {
        return e === Q ? t : function(n) {
          var r = e.apply(this, arguments);
          J(n, r);
          var i = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? we(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? we(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : J(r, n);
        };
      }
      function $n(e, t) {
        return e === Q ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function It(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var r = this, i = arguments.length, o = new Array(i); i--; ) o[i] = arguments[i];
            return n.then(function() {
              return t.apply(r, o);
            });
          }
          return t.apply(this, arguments);
        };
      }
      le.ModifyError = yt, le.DexieError = He, le.BulkError = $e;
      var ke = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function hn(e) {
        ke = e;
      }
      var bt = {}, Xn = 100, Xe = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, fe(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, fe(t), e];
      })(), wt = Xe[0], Ae = Xe[1], Xe = Xe[2], Ae = Ae && Ae.then, Je = wt && wt.constructor, pn = !!Xe, _t = function(e, t) {
        Et.push([e, t]), Bt && (queueMicrotask(Ir), Bt = !1);
      }, mn = !0, Bt = !0, Ze = [], qt = [], yn = ge, Le = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, B = Le, Et = [], et = 0, Mt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = B;
        if (typeof e != "function") {
          if (e !== bt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && gn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, (function n(r, i) {
          try {
            i(function(o) {
              if (r._state === null) {
                if (o === r) throw new TypeError("A promise cannot be resolved with itself.");
                var a = r._lib && lt();
                o && typeof o.then == "function" ? n(r, function(u, c) {
                  o instanceof j ? o._then(u, c) : o.then(u, c);
                }) : (r._state = !0, r._value = o, Zn(r)), a && ft();
              }
            }, gn.bind(null, r));
          } catch (o) {
            gn(r, o);
          }
        })(this, e);
      }
      var vn = { get: function() {
        var e = B, t = Gt;
        function n(r, i) {
          var o = this, a = !e.global && (e !== B || t !== Gt), u = a && !Ve(), c = new j(function(f, m) {
            bn(o, new Jn(tr(r, e, a, u), tr(i, e, a, u), f, m, e));
          });
          return this._consoleTask && (c._consoleTask = this._consoleTask), c;
        }
        return n.prototype = bt, n;
      }, set: function(e) {
        Z(this, "then", e && e.prototype === bt ? vn : { get: function() {
          return e;
        }, set: vn.set });
      } };
      function Jn(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
      }
      function gn(e, t) {
        var n, r;
        qt.push(t), e._state === null && (n = e._lib && lt(), t = yn(t), e._state = !1, e._value = t, r = e, Ze.some(function(i) {
          return i._value === r._value;
        }) || Ze.push(r), Zn(e), n && ft());
      }
      function Zn(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) bn(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), et === 0 && (++et, _t(function() {
          --et == 0 && wn();
        }, []));
      }
      function bn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++et, _t(Rr, [n, e, t]);
        } else e._listeners.push(t);
      }
      function Rr(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && qt.length && (qt = []), r = ke && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), t._state || qt.indexOf(i) !== -1 || (function(o) {
            for (var a = Ze.length; a; ) if (Ze[--a]._value === o._value) return Ze.splice(a, 1);
          })(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --et == 0 && wn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Ir() {
        tt(Le, function() {
          lt() && ft();
        });
      }
      function lt() {
        var e = mn;
        return Bt = mn = !1, e;
      }
      function ft() {
        var e, t, n;
        do
          for (; 0 < Et.length; ) for (e = Et, Et = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < Et.length);
        Bt = mn = !0;
      }
      function wn() {
        var e = Ze;
        Ze = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = Mt.slice(0), n = t.length; n; ) t[--n]();
      }
      function Lt(e) {
        return new j(bt, !1, e);
      }
      function re(e, t) {
        var n = B;
        return function() {
          var r = lt(), i = B;
          try {
            return Ge(n, !0), e.apply(this, arguments);
          } catch (o) {
            t && t(o);
          } finally {
            Ge(i, !1), r && ft();
          }
        };
      }
      U(j.prototype, { then: vn, _then: function(e, t) {
        bn(this, new Jn(null, null, e, t, B));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : Lt)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : Lt)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return j.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return j.resolve(e()).then(function() {
            return Lt(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new j(function(r, i) {
          var o = setTimeout(function() {
            return i(new T.Timeout(t));
          }, e);
          n.then(r, i).finally(clearTimeout.bind(null, o));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Z(j.prototype, Symbol.toStringTag, "Dexie.Promise"), Le.env = er(), U(j, { all: function() {
        var e = De.apply(null, arguments).map(zt);
        return new j(function(t, n) {
          e.length === 0 && t([]);
          var r = e.length;
          e.forEach(function(i, o) {
            return j.resolve(i).then(function(a) {
              e[o] = a, --r || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof j ? e : e && typeof e.then == "function" ? new j(function(t, n) {
          e.then(t, n);
        }) : new j(bt, !0, e);
      }, reject: Lt, race: function() {
        var e = De.apply(null, arguments).map(zt);
        return new j(function(t, n) {
          e.map(function(r) {
            return j.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return B;
      }, set: function(e) {
        return B = e;
      } }, totalEchoes: { get: function() {
        return Gt;
      } }, newPSD: Ue, usePSD: tt, scheduler: { get: function() {
        return _t;
      }, set: function(e) {
        _t = e;
      } }, rejectionMapper: { get: function() {
        return yn;
      }, set: function(e) {
        yn = e;
      } }, follow: function(e, t) {
        return new j(function(n, r) {
          return Ue(function(i, o) {
            var a = B;
            a.unhandleds = [], a.onunhandled = o, a.finalize = we(function() {
              var u, c = this;
              u = function() {
                c.unhandleds.length === 0 ? i() : o(c.unhandleds[0]);
              }, Mt.push(function f() {
                u(), Mt.splice(Mt.indexOf(f), 1);
              }), ++et, _t(function() {
                --et == 0 && wn();
              }, []);
            }, a.finalize), e();
          }, t, n, r);
        });
      } }), Je && (Je.allSettled && Z(j, "allSettled", function() {
        var e = De.apply(null, arguments).map(zt);
        return new j(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(i, o) {
            return j.resolve(i).then(function(a) {
              return r[o] = { status: "fulfilled", value: a };
            }, function(a) {
              return r[o] = { status: "rejected", reason: a };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), Je.any && typeof AggregateError < "u" && Z(j, "any", function() {
        var e = De.apply(null, arguments).map(zt);
        return new j(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, i = new Array(r);
          e.forEach(function(o, a) {
            return j.resolve(o).then(function(u) {
              return t(u);
            }, function(u) {
              i[a] = u, --r || n(new AggregateError(i));
            });
          });
        });
      }), Je.withResolvers && (j.withResolvers = Je.withResolvers));
      var he = { awaits: 0, echoes: 0, id: 0 }, Kr = 0, Ut = [], Vt = 0, Gt = 0, jr = 0;
      function Ue(e, t, n, r) {
        var i = B, o = Object.create(i);
        return o.parent = i, o.ref = 0, o.global = !1, o.id = ++jr, Le.env, o.env = pn ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && J(o, t), ++i.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = tt(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function ht() {
        return he.id || (he.id = ++Kr), ++he.awaits, he.echoes += Xn, he.id;
      }
      function Ve() {
        return !!he.awaits && (--he.awaits == 0 && (he.id = 0), he.echoes = he.awaits * Xn, !0);
      }
      function zt(e) {
        return he.echoes && e && e.constructor === Je ? (ht(), e.then(function(t) {
          return Ve(), t;
        }, function(t) {
          return Ve(), ae(t);
        })) : e;
      }
      function Fr() {
        var e = Ut[Ut.length - 1];
        Ut.pop(), Ge(e, !1);
      }
      function Ge(e, t) {
        var n, r = B;
        (t ? !he.echoes || Vt++ && e === B : !Vt || --Vt && e === B) || queueMicrotask(t ? (function(i) {
          ++Gt, he.echoes && --he.echoes != 0 || (he.echoes = he.awaits = he.id = 0), Ut.push(B), Ge(i, !0);
        }).bind(null, e) : Fr), e !== B && (B = e, r === Le && (Le.env = er()), pn && (n = Le.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(q, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function er() {
        var e = q.Promise;
        return pn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(q, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function tt(e, t, n, r, i) {
        var o = B;
        try {
          return Ge(e, !0), t(n, r, i);
        } finally {
          Ge(o, !1);
        }
      }
      function tr(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var i = B;
          n && ht(), Ge(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ge(i, !1), r && queueMicrotask(Ve);
          }
        };
      }
      function _n(e) {
        Promise === Je && he.echoes === 0 ? Vt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Ae).indexOf("[native code]") === -1 && (ht = Ve = Q);
      var ae = j.reject, nt = "￿", je = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", nr = "String expected.", dt = [], Qt = "__dbnames", En = "readonly", xn = "readwrite";
      function rt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var rr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Yt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = xe(t))[e], t;
        };
      }
      function ir() {
        throw T.Type();
      }
      function $(e, t) {
        try {
          var n = or(e), r = or(t);
          if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return (function(i, o) {
                for (var a = i.length, u = o.length, c = a < u ? a : u, f = 0; f < c; ++f) if (i[f] !== o[f]) return i[f] < o[f] ? -1 : 1;
                return a === u ? 0 : a < u ? -1 : 1;
              })(ar(e), ar(t));
            case "Array":
              return (function(i, o) {
                for (var a = i.length, u = o.length, c = a < u ? a : u, f = 0; f < c; ++f) {
                  var m = $(i[f], o[f]);
                  if (m !== 0) return m;
                }
                return a === u ? 0 : a < u ? -1 : 1;
              })(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function or(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = st(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ar(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var ur = (ne.prototype._trans = function(e, t, n) {
        var r = this._tx || B.trans, i = this.name, o = ke && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function a(f, m, s) {
          if (!s.schema[i]) throw new T.NotFound("Table " + i + " not part of transaction");
          return t(s.idbtrans, s);
        }
        var u = lt();
        try {
          var c = r && r.db._novip === this.db._novip ? r === B.trans ? r._promise(e, a, n) : Ue(function() {
            return r._promise(e, a, n);
          }, { trans: r, transless: B.transless || B }) : (function f(m, s, v, l) {
            if (m.idbdb && (m._state.openComplete || B.letThrough || m._vip)) {
              var d = m._createTransaction(s, v, m._dbSchema);
              try {
                d.create(), m._state.PR1398_maxLoop = 3;
              } catch (y) {
                return y.name === b.InvalidState && m.isOpen() && 0 < --m._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), m.close({ disableAutoOpen: !1 }), m.open().then(function() {
                  return f(m, s, v, l);
                })) : ae(y);
              }
              return d._promise(s, function(y, h) {
                return Ue(function() {
                  return B.trans = d, l(y, h, d);
                });
              }).then(function(y) {
                if (s === "readwrite") try {
                  d.idbtrans.commit();
                } catch {
                }
                return s === "readonly" ? y : d._completion.then(function() {
                  return y;
                });
              });
            }
            if (m._state.openComplete) return ae(new T.DatabaseClosed(m._state.dbOpenError));
            if (!m._state.isBeingOpened) {
              if (!m._state.autoOpen) return ae(new T.DatabaseClosed());
              m.open().catch(Q);
            }
            return m._state.dbReadyPromise.then(function() {
              return f(m, s, v, l);
            });
          })(this.db, e, [this.name], a);
          return o && (c._consoleTask = o, c = c.catch(function(f) {
            return console.trace(f), ae(f);
          })), c;
        } finally {
          u && ft();
        }
      }, ne.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? ae(new T.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(i) {
            return n.hook.reading.fire(i);
          });
        }).then(t);
      }, ne.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (L(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = V(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(u) {
          if (u.compound && t.every(function(f) {
            return 0 <= u.keyPath.indexOf(f);
          })) {
            for (var c = 0; c < t.length; ++c) if (t.indexOf(u.keyPath[c]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(u, c) {
          return u.keyPath.length - c.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== nt) {
          var o = n.keyPath.slice(0, t.length);
          return this.where(o).equals(o.map(function(c) {
            return e[c];
          }));
        }
        !n && ke && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function i(u, c) {
          return $(u, c) === 0;
        }
        var a = t.reduce(function(s, c) {
          var f = s[0], m = s[1], s = r[c], v = e[c];
          return [f || s, f || !s ? rt(m, s && s.multi ? function(l) {
            return l = Pe(l, c), L(l) && l.some(function(d) {
              return i(v, d);
            });
          } : function(l) {
            return i(v, Pe(l, c));
          }) : m];
        }, [null, null]), o = a[0], a = a[1];
        return o ? this.where(o.name).equals(e[o.keyPath]).filter(a) : n ? this.filter(a) : this.where(t).equals("");
      }, ne.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, ne.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, ne.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, ne.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, ne.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, ne.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, ne.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ne.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, L(e) ? "[".concat(e.join("+"), "]") : e));
      }, ne.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ne.prototype.mapToClass = function(e) {
        var t, n = this.db, r = this.name;
        function i() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof ir && ((function(c, f) {
          if (typeof f != "function" && f !== null) throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
          function m() {
            this.constructor = c;
          }
          K(c, f), c.prototype = f === null ? Object.create(f) : (m.prototype = f.prototype, new m());
        })(i, t = e), Object.defineProperty(i.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
          return r;
        }, e = i);
        for (var o = /* @__PURE__ */ new Set(), a = e.prototype; a; a = fe(a)) Object.getOwnPropertyNames(a).forEach(function(c) {
          return o.add(c);
        });
        function u(c) {
          if (!c) return c;
          var f, m = Object.create(e.prototype);
          for (f in c) if (!o.has(f)) try {
            m[f] = c[f];
          } catch {
          }
          return m;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e;
      }, ne.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          J(this, e);
        });
      }, ne.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
        return o && i && (a = Yt(o)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "add", keys: t != null ? [t] : null, values: [a] });
        }).then(function(u) {
          return u.numFailures ? j.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (o) try {
            ce(e, o, u);
          } catch {
          }
          return u;
        });
      }, ne.prototype.update = function(e, t) {
        return typeof e != "object" || L(e) ? this.where(":id").equals(e).modify(t) : (e = Pe(e, this.schema.primKey.keyPath), e === void 0 ? ae(new T.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ne.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
        return o && i && (a = Yt(o)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "put", values: [a], keys: t != null ? [t] : null });
        }).then(function(u) {
          return u.numFailures ? j.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (o) try {
            ce(e, o, u);
          } catch {
          }
          return u;
        });
      }, ne.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] });
        }).then(function(n) {
          return n.numFailures ? j.reject(n.failures[0]) : void 0;
        });
      }, ne.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: rr });
        }).then(function(t) {
          return t.numFailures ? j.reject(t.failures[0]) : void 0;
        });
      }, ne.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(n) {
          return t.core.getMany({ keys: e, trans: n }).then(function(r) {
            return r.map(function(i) {
              return t.hook.reading.fire(i);
            });
          });
        });
      }, ne.prototype.bulkAdd = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var f = r.schema.primKey, u = f.auto, f = f.keyPath;
          if (f && i) throw new T.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var c = e.length, f = f && u ? e.map(Yt(f)) : e;
          return r.core.mutate({ trans: a, type: "add", keys: i, values: f, wantResults: o }).then(function(d) {
            var s = d.numFailures, v = d.results, l = d.lastResult, d = d.failures;
            if (s === 0) return o ? v : l;
            throw new $e("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(c, " operations failed"), d);
          });
        });
      }, ne.prototype.bulkPut = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var f = r.schema.primKey, u = f.auto, f = f.keyPath;
          if (f && i) throw new T.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var c = e.length, f = f && u ? e.map(Yt(f)) : e;
          return r.core.mutate({ trans: a, type: "put", keys: i, values: f, wantResults: o }).then(function(d) {
            var s = d.numFailures, v = d.results, l = d.lastResult, d = d.failures;
            if (s === 0) return o ? v : l;
            throw new $e("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(c, " operations failed"), d);
          });
        });
      }, ne.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, r = e.map(function(a) {
          return a.key;
        }), i = e.map(function(a) {
          return a.changes;
        }), o = [];
        return this._trans("readwrite", function(a) {
          return n.getMany({ trans: a, keys: r, cache: "clone" }).then(function(u) {
            var c = [], f = [];
            e.forEach(function(s, v) {
              var l = s.key, d = s.changes, y = u[v];
              if (y) {
                for (var h = 0, g = Object.keys(d); h < g.length; h++) {
                  var w = g[h], _ = d[w];
                  if (w === t.schema.primKey.keyPath) {
                    if ($(_, l) !== 0) throw new T.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ce(y, w, _);
                }
                o.push(v), c.push(l), f.push(y);
              }
            });
            var m = c.length;
            return n.mutate({ trans: a, type: "put", keys: c, values: f, updates: { keys: r, changeSpecs: i } }).then(function(s) {
              var v = s.numFailures, l = s.failures;
              if (v === 0) return m;
              for (var d = 0, y = Object.keys(l); d < y.length; d++) {
                var h, g = y[d], w = o[Number(g)];
                w != null && (h = l[g], delete l[g], l[w] = h);
              }
              throw new $e("".concat(t.name, ".bulkUpdate(): ").concat(v, " of ").concat(m, " operations failed"), l);
            });
          });
        });
      }, ne.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e });
        }).then(function(a) {
          var i = a.numFailures, o = a.lastResult, a = a.failures;
          if (i === 0) return o;
          throw new $e("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), a);
        });
      }, ne);
      function ne() {
      }
      function xt(e) {
        function t(a, u) {
          if (u) {
            for (var c = arguments.length, f = new Array(c - 1); --c; ) f[c - 1] = arguments[c];
            return n[a].subscribe.apply(null, f), e;
          }
          if (typeof a == "string") return n[a];
        }
        var n = {};
        t.addEventType = o;
        for (var r = 1, i = arguments.length; r < i; ++r) o(arguments[r]);
        return t;
        function o(a, u, c) {
          if (typeof a != "object") {
            var f;
            u = u || $n;
            var m = { subscribers: [], fire: c = c || Q, subscribe: function(s) {
              m.subscribers.indexOf(s) === -1 && (m.subscribers.push(s), m.fire = u(m.fire, s));
            }, unsubscribe: function(s) {
              m.subscribers = m.subscribers.filter(function(v) {
                return v !== s;
              }), m.fire = m.subscribers.reduce(u, c);
            } };
            return n[a] = t[a] = m;
          }
          V(f = a).forEach(function(s) {
            var v = f[s];
            if (L(v)) o(s, f[s][0], f[s][1]);
            else {
              if (v !== "asap") throw new T.InvalidArgument("Invalid event config");
              var l = o(s, ge, function() {
                for (var d = arguments.length, y = new Array(d); d--; ) y[d] = arguments[d];
                l.subscribers.forEach(function(h) {
                  Oe(function() {
                    h.apply(null, y);
                  });
                });
              });
            }
          });
        }
      }
      function Tt(e, t) {
        return oe(t).from({ prototype: e }), t;
      }
      function pt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Tn(e, t) {
        e.filter = rt(e.filter, t);
      }
      function Sn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return rt(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function Wt(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new T.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function sr(e, t, n) {
        var r = Wt(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function Ht(e, t, n, r) {
        var i = e.replayFilter ? rt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, a = function(u, c, f) {
            var m, s;
            i && !i(c, f, function(v) {
              return c.stop(v);
            }, function(v) {
              return c.fail(v);
            }) || ((s = "" + (m = c.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(m)), X(o, s) || (o[s] = !0, t(u, c, f)));
          };
          return Promise.all([e.or._iterate(a, n), cr(sr(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
        }
        return cr(sr(e, r, n), rt(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
      }
      function cr(e, t, n, r) {
        var i = re(r ? function(o, a, u) {
          return n(r(o), a, u);
        } : n);
        return e.then(function(o) {
          if (o) return o.start(function() {
            var a = function() {
              return o.continue();
            };
            t && !t(o, function(u) {
              return a = u;
            }, function(u) {
              o.stop(u), a = Q;
            }, function(u) {
              o.fail(u), a = Q;
            }) || i(o.value, o, function(u) {
              return a = u;
            }), a();
          });
        });
      }
      var St = (lr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (L(n)) return M(M([], L(e) ? e : [], !0), n).sort();
          if (typeof n == "number") return (Number(e) || 0) + n;
          if (typeof n == "bigint") try {
            return BigInt(e) + n;
          } catch {
            return BigInt(0) + n;
          }
          throw new TypeError("Invalid term ".concat(n));
        }
        if (t.remove !== void 0) {
          var r = t.remove;
          if (L(r)) return L(e) ? e.filter(function(i) {
            return !r.includes(i);
          }).sort() : [];
          if (typeof r == "number") return Number(e) - r;
          if (typeof r == "bigint") try {
            return BigInt(e) - r;
          } catch {
            return BigInt(0) - r;
          }
          throw new TypeError("Invalid subtrahend ".concat(r));
        }
        return n = (n = t.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
      }, lr);
      function lr(e) {
        this["@@propmod"] = e;
      }
      var Br = (ee.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ae.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, ae.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = rt(t.algorithm, e);
      }, ee.prototype._iterate = function(e, t) {
        return Ht(this._ctx, e, t, this._ctx.table.core);
      }, ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && J(n, e), t._ctx = n, t;
      }, ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return Ht(t, e, n, t.table.core);
        });
      }, ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, i = r.table.core;
          if (pt(r, !0)) return i.count({ trans: n, query: { index: Wt(r, i.schema), range: r.range } }).then(function(a) {
            return Math.min(a, r.limit);
          });
          var o = 0;
          return Ht(r, function() {
            return ++o, !1;
          }, n, i).then(function() {
            return o;
          });
        }).then(e);
      }, ee.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
        function o(c, f) {
          return f ? o(c[n[f]], f - 1) : c[r];
        }
        var a = this._ctx.dir === "next" ? 1 : -1;
        function u(c, f) {
          return $(o(c, i), o(f, i)) * a;
        }
        return this.toArray(function(c) {
          return c.sort(u);
        }).then(t);
      }, ee.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx;
          if (r.dir === "next" && pt(r, !0) && 0 < r.limit) {
            var i = r.valueMapper, o = Wt(r, r.table.core.schema);
            return r.table.core.query({ trans: n, limit: r.limit, values: !0, query: { index: o, range: r.range } }).then(function(u) {
              return u = u.result, i ? u.map(i) : u;
            });
          }
          var a = [];
          return Ht(r, function(u) {
            return a.push(u);
          }, n, r.table.core).then(function() {
            return a;
          });
        }, e);
      }, ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, pt(t) ? Sn(t, function() {
          var n = e;
          return function(r, i) {
            return n === 0 || (n === 1 ? --n : i(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : Sn(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Sn(this._ctx, function() {
          var t = e;
          return function(n, r, i) {
            return --t <= 0 && r(i), 0 <= t;
          };
        }, !0), this;
      }, ee.prototype.until = function(e, t) {
        return Tn(this._ctx, function(n, r, i) {
          return !e(n.value) || (r(i), t);
        }), this;
      }, ee.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, ee.prototype.last = function(e) {
        return this.reverse().first(e);
      }, ee.prototype.filter = function(e) {
        var t;
        return Tn(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = rt(t.isMatch, e), this;
      }, ee.prototype.and = function(e) {
        return this.filter(e);
      }, ee.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, ee.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ee.prototype.desc = function() {
        return this.reverse();
      }, ee.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.key, r);
        });
      }, ee.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, ee.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.primaryKey, r);
        });
      }, ee.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, i) {
          n.push(i.key);
        }).then(function() {
          return n;
        }).then(e);
      }, ee.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && pt(t, !0) && 0 < t.limit) return this._read(function(r) {
          var i = Wt(t, t.table.core.schema);
          return t.table.core.query({ trans: r, values: !1, limit: t.limit, query: { index: i, range: t.range } });
        }).then(function(r) {
          return r.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, i) {
          n.push(i.primaryKey);
        }).then(function() {
          return n;
        }).then(e);
      }, ee.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, ee.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, ee.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, ee.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Tn(this._ctx, function(i) {
          var r = i.primaryKey.toString(), i = X(t, r);
          return t[r] = !0, !i;
        }), this;
      }, ee.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var i, o, a;
          a = typeof e == "function" ? e : (i = V(e), o = i.length, function(h) {
            for (var g = !1, w = 0; w < o; ++w) {
              var _ = i[w], x = e[_], S = Pe(h, _);
              x instanceof St ? (ce(h, _, x.execute(S)), g = !0) : S !== x && (ce(h, _, x), g = !0);
            }
            return g;
          });
          var u = n.table.core, s = u.schema.primaryKey, c = s.outbound, f = s.extractKey, m = 200, s = t.db._options.modifyChunkSize;
          s && (m = typeof s == "object" ? s[u.name] || s["*"] || 200 : s);
          function v(h, _) {
            var w = _.failures, _ = _.numFailures;
            d += h - _;
            for (var x = 0, S = V(w); x < S.length; x++) {
              var R = S[x];
              l.push(w[R]);
            }
          }
          var l = [], d = 0, y = [];
          return t.clone().primaryKeys().then(function(h) {
            function g(_) {
              var x = Math.min(m, h.length - _);
              return u.getMany({ trans: r, keys: h.slice(_, _ + x), cache: "immutable" }).then(function(S) {
                for (var R = [], O = [], A = c ? [] : null, I = [], D = 0; D < x; ++D) {
                  var F = S[D], z = { value: xe(F), primKey: h[_ + D] };
                  a.call(z, z.value, z) !== !1 && (z.value == null ? I.push(h[_ + D]) : c || $(f(F), f(z.value)) === 0 ? (O.push(z.value), c && A.push(h[_ + D])) : (I.push(h[_ + D]), R.push(z.value)));
                }
                return Promise.resolve(0 < R.length && u.mutate({ trans: r, type: "add", values: R }).then(function(Y) {
                  for (var W in Y.failures) I.splice(parseInt(W), 1);
                  v(R.length, Y);
                })).then(function() {
                  return (0 < O.length || w && typeof e == "object") && u.mutate({ trans: r, type: "put", keys: A, values: O, criteria: w, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < _ }).then(function(Y) {
                    return v(O.length, Y);
                  });
                }).then(function() {
                  return (0 < I.length || w && e === On) && u.mutate({ trans: r, type: "delete", keys: I, criteria: w, isAdditionalChunk: 0 < _ }).then(function(Y) {
                    return v(I.length, Y);
                  });
                }).then(function() {
                  return h.length > _ + x && g(_ + m);
                });
              });
            }
            var w = pt(n) && n.limit === 1 / 0 && (typeof e != "function" || e === On) && { index: n.index, range: n.range };
            return g(0).then(function() {
              if (0 < l.length) throw new yt("Error modifying one or more objects", l, d, y);
              return h.length;
            });
          });
        });
      }, ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return pt(e) && (e.isPrimKey || t.type === 3) ? this._write(function(n) {
          var r = e.table.core.schema.primaryKey, i = t;
          return e.table.core.count({ trans: n, query: { index: r, range: i } }).then(function(o) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: i }).then(function(a) {
              var u = a.failures;
              if (a.lastResult, a.results, a = a.numFailures, a) throw new yt("Could not delete some values", Object.keys(u).map(function(c) {
                return u[c];
              }), o - a);
              return o - a;
            });
          });
        }) : this.modify(On);
      }, ee);
      function ee() {
      }
      var On = function(e, t) {
        return t.value = null;
      };
      function qr(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Mr(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function Te(e, t, n) {
        return e = e instanceof hr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function mt(e) {
        return new e.Collection(e, function() {
          return fr("");
        }).limit(0);
      }
      function $t(e, t, n, r) {
        var i, o, a, u, c, f, m, s = n.length;
        if (!n.every(function(d) {
          return typeof d == "string";
        })) return Te(e, nr);
        function v(d) {
          i = d === "next" ? function(h) {
            return h.toUpperCase();
          } : function(h) {
            return h.toLowerCase();
          }, o = d === "next" ? function(h) {
            return h.toLowerCase();
          } : function(h) {
            return h.toUpperCase();
          }, a = d === "next" ? qr : Mr;
          var y = n.map(function(h) {
            return { lower: o(h), upper: i(h) };
          }).sort(function(h, g) {
            return a(h.lower, g.lower);
          });
          u = y.map(function(h) {
            return h.upper;
          }), c = y.map(function(h) {
            return h.lower;
          }), m = (f = d) === "next" ? "" : r;
        }
        v("next"), e = new e.Collection(e, function() {
          return ze(u[0], c[s - 1] + r);
        }), e._ondirectionchange = function(d) {
          v(d);
        };
        var l = 0;
        return e._addAlgorithm(function(d, y, h) {
          var g = d.key;
          if (typeof g != "string") return !1;
          var w = o(g);
          if (t(w, c, l)) return !0;
          for (var _ = null, x = l; x < s; ++x) {
            var S = (function(R, O, A, I, D, F) {
              for (var z = Math.min(R.length, I.length), Y = -1, W = 0; W < z; ++W) {
                var Se = O[W];
                if (Se !== I[W]) return D(R[W], A[W]) < 0 ? R.substr(0, W) + A[W] + A.substr(W + 1) : D(R[W], I[W]) < 0 ? R.substr(0, W) + I[W] + A.substr(W + 1) : 0 <= Y ? R.substr(0, Y) + O[Y] + A.substr(Y + 1) : null;
                D(R[W], Se) < 0 && (Y = W);
              }
              return z < I.length && F === "next" ? R + A.substr(R.length) : z < R.length && F === "prev" ? R.substr(0, A.length) : Y < 0 ? null : R.substr(0, Y) + I[Y] + A.substr(Y + 1);
            })(g, w, u[x], c[x], a, f);
            S === null && _ === null ? l = x + 1 : (_ === null || 0 < a(_, S)) && (_ = S);
          }
          return y(_ !== null ? function() {
            d.continue(_ + m);
          } : h), !1;
        }), e;
      }
      function ze(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function fr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var hr = (Object.defineProperty(de.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), de.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? mt(this) : new this.Collection(this, function() {
            return ze(e, t, !n, !r);
          });
        } catch {
          return Te(this, je);
        }
      }, de.prototype.equals = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return fr(e);
        });
      }, de.prototype.above = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return ze(e, void 0, !0);
        });
      }, de.prototype.aboveOrEqual = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return ze(e, void 0, !1);
        });
      }, de.prototype.below = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return ze(void 0, e, !1, !0);
        });
      }, de.prototype.belowOrEqual = function(e) {
        return e == null ? Te(this, je) : new this.Collection(this, function() {
          return ze(void 0, e);
        });
      }, de.prototype.startsWith = function(e) {
        return typeof e != "string" ? Te(this, nr) : this.between(e, e + nt, !0, !0);
      }, de.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : $t(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], nt);
      }, de.prototype.equalsIgnoreCase = function(e) {
        return $t(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, de.prototype.anyOfIgnoreCase = function() {
        var e = De.apply(Me, arguments);
        return e.length === 0 ? mt(this) : $t(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, de.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = De.apply(Me, arguments);
        return e.length === 0 ? mt(this) : $t(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, nt);
      }, de.prototype.anyOf = function() {
        var e = this, t = De.apply(Me, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return Te(this, je);
        }
        if (t.length === 0) return mt(this);
        var r = new this.Collection(this, function() {
          return ze(t[0], t[t.length - 1]);
        });
        r._ondirectionchange = function(o) {
          n = o === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var i = 0;
        return r._addAlgorithm(function(o, a, u) {
          for (var c = o.key; 0 < n(c, t[i]); ) if (++i === t.length) return a(u), !1;
          return n(c, t[i]) === 0 || (a(function() {
            o.continue(t[i]);
          }), !1);
        }), r;
      }, de.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, de.prototype.noneOf = function() {
        var e = De.apply(Me, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Te(this, je);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, de.prototype.inAnyRange = function(g, t) {
        var n = this, r = this._cmp, i = this._ascending, o = this._descending, a = this._min, u = this._max;
        if (g.length === 0) return mt(this);
        if (!g.every(function(w) {
          return w[0] !== void 0 && w[1] !== void 0 && i(w[0], w[1]) <= 0;
        })) return Te(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", T.InvalidArgument);
        var c = !t || t.includeLowers !== !1, f = t && t.includeUppers === !0, m, s = i;
        function v(w, _) {
          return s(w[0], _[0]);
        }
        try {
          (m = g.reduce(function(w, _) {
            for (var x = 0, S = w.length; x < S; ++x) {
              var R = w[x];
              if (r(_[0], R[1]) < 0 && 0 < r(_[1], R[0])) {
                R[0] = a(R[0], _[0]), R[1] = u(R[1], _[1]);
                break;
              }
            }
            return x === S && w.push(_), w;
          }, [])).sort(v);
        } catch {
          return Te(this, je);
        }
        var l = 0, d = f ? function(w) {
          return 0 < i(w, m[l][1]);
        } : function(w) {
          return 0 <= i(w, m[l][1]);
        }, y = c ? function(w) {
          return 0 < o(w, m[l][0]);
        } : function(w) {
          return 0 <= o(w, m[l][0]);
        }, h = d, g = new this.Collection(this, function() {
          return ze(m[0][0], m[m.length - 1][1], !c, !f);
        });
        return g._ondirectionchange = function(w) {
          s = w === "next" ? (h = d, i) : (h = y, o), m.sort(v);
        }, g._addAlgorithm(function(w, _, x) {
          for (var S, R = w.key; h(R); ) if (++l === m.length) return _(x), !1;
          return !d(S = R) && !y(S) || (n._cmp(R, m[l][1]) === 0 || n._cmp(R, m[l][0]) === 0 || _(function() {
            s === i ? w.continue(m[l][0]) : w.continue(m[l][1]);
          }), !1);
        }), g;
      }, de.prototype.startsWithAnyOf = function() {
        var e = De.apply(Me, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? mt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + nt];
        })) : Te(this, "startsWithAnyOf() only works with strings");
      }, de);
      function de() {
      }
      function Ie(e) {
        return re(function(t) {
          return Ot(t), e(t.target.error), !1;
        });
      }
      function Ot(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Pt = "storagemutated", Pn = "x-storagemutated-1", Qe = xt(null, Pt), Lr = (Ke.prototype._lock = function() {
        return se(!B.global), ++this._reculock, this._reculock !== 1 || B.global || (B.lockOwnerFor = this), this;
      }, Ke.prototype._unlock = function() {
        if (se(!B.global), --this._reculock == 0) for (B.global || (B.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            tt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Ke.prototype._locked = function() {
        return this._reculock && B.lockOwnerFor !== this;
      }, Ke.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (se(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new T.DatabaseClosed(r);
          case "MissingAPIError":
            throw new T.MissingAPI(r.message, r);
          default:
            throw new T.OpenFailed(r);
        }
        if (!this.active) throw new T.TransactionInactive();
        return se(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = re(function(i) {
          Ot(i), t._reject(e.error);
        }), e.onabort = re(function(i) {
          Ot(i), t.active && t._reject(new T.Abort(e.error)), t.active = !1, t.on("abort").fire(i);
        }), e.oncomplete = re(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Qe.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Ke.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ae(new T.ReadOnly("Transaction is readonly"));
        if (!this.active) return ae(new T.TransactionInactive());
        if (this._locked()) return new j(function(o, a) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(o, a);
          }, B]);
        });
        if (n) return Ue(function() {
          var o = new j(function(a, u) {
            r._lock();
            var c = t(a, u, r);
            c && c.then && c.then(a, u);
          });
          return o.finally(function() {
            return r._unlock();
          }), o._lib = !0, o;
        });
        var i = new j(function(o, a) {
          var u = t(o, a, r);
          u && u.then && u.then(o, a);
        });
        return i._lib = !0, i;
      }, Ke.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Ke.prototype.waitFor = function(e) {
        var t, n = this._root(), r = j.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return r;
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function o() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = o);
        })());
        var i = n._waitingFor;
        return new j(function(o, a) {
          r.then(function(u) {
            return n._waitingQueue.push(re(o.bind(null, u)));
          }, function(u) {
            return n._waitingQueue.push(re(a.bind(null, u)));
          }).finally(function() {
            n._waitingFor === i && (n._waitingFor = null);
          });
        });
      }, Ke.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new T.Abort()));
      }, Ke.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (X(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new T.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, Ke);
      function Ke() {
      }
      function kn(e, t, n, r, i, o, a) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: i, compound: o, src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + dr(t) };
      }
      function dr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function An(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(i) {
          return [i.name, i];
        }, n.reduce(function(i, o, a) {
          return a = r(o, a), a && (i[a[0]] = a[1]), i;
        }, {})) };
        var r;
      }
      var kt = function(e) {
        try {
          return e.only([[]]), kt = function() {
            return [[]];
          }, [[]];
        } catch {
          return kt = function() {
            return nt;
          }, nt;
        }
      };
      function Cn(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return Pe(n, t);
        } : function(n) {
          return Pe(n, e);
        };
        var t;
      }
      function pr(e) {
        return [].slice.call(e);
      }
      var Ur = 0;
      function At(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Vr(e, t, c) {
        function r(h) {
          if (h.type === 3) return null;
          if (h.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var l = h.lower, d = h.upper, y = h.lowerOpen, h = h.upperOpen;
          return l === void 0 ? d === void 0 ? null : t.upperBound(d, !!h) : d === void 0 ? t.lowerBound(l, !!y) : t.bound(l, d, !!y, !!h);
        }
        function i(v) {
          var l, d = v.name;
          return { name: d, schema: v, mutate: function(y) {
            var h = y.trans, g = y.type, w = y.keys, _ = y.values, x = y.range;
            return new Promise(function(S, R) {
              S = re(S);
              var O = h.objectStore(d), A = O.keyPath == null, I = g === "put" || g === "add";
              if (!I && g !== "delete" && g !== "deleteRange") throw new Error("Invalid operation type: " + g);
              var D, F = (w || _ || { length: 1 }).length;
              if (w && _ && w.length !== _.length) throw new Error("Given keys array must have same length as given values array.");
              if (F === 0) return S({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function z(be) {
                ++Se, Ot(be);
              }
              var Y = [], W = [], Se = 0;
              if (g === "deleteRange") {
                if (x.type === 4) return S({ numFailures: Se, failures: W, results: [], lastResult: void 0 });
                x.type === 3 ? Y.push(D = O.clear()) : Y.push(D = O.delete(r(x)));
              } else {
                var A = I ? A ? [_, w] : [_, null] : [w, null], G = A[0], me = A[1];
                if (I) for (var ye = 0; ye < F; ++ye) Y.push(D = me && me[ye] !== void 0 ? O[g](G[ye], me[ye]) : O[g](G[ye])), D.onerror = z;
                else for (ye = 0; ye < F; ++ye) Y.push(D = O[g](G[ye])), D.onerror = z;
              }
              function ln(be) {
                be = be.target.result, Y.forEach(function(at, Wn) {
                  return at.error != null && (W[Wn] = at.error);
                }), S({ numFailures: Se, failures: W, results: g === "delete" ? w : Y.map(function(at) {
                  return at.result;
                }), lastResult: be });
              }
              D.onerror = function(be) {
                z(be), ln(be);
              }, D.onsuccess = ln;
            });
          }, getMany: function(y) {
            var h = y.trans, g = y.keys;
            return new Promise(function(w, _) {
              w = re(w);
              for (var x, S = h.objectStore(d), R = g.length, O = new Array(R), A = 0, I = 0, D = function(Y) {
                Y = Y.target, O[Y._pos] = Y.result, ++I === A && w(O);
              }, F = Ie(_), z = 0; z < R; ++z) g[z] != null && ((x = S.get(g[z]))._pos = z, x.onsuccess = D, x.onerror = F, ++A);
              A === 0 && w(O);
            });
          }, get: function(y) {
            var h = y.trans, g = y.key;
            return new Promise(function(w, _) {
              w = re(w);
              var x = h.objectStore(d).get(g);
              x.onsuccess = function(S) {
                return w(S.target.result);
              }, x.onerror = Ie(_);
            });
          }, query: (l = f, function(y) {
            return new Promise(function(h, g) {
              h = re(h);
              var w, _, x, A = y.trans, S = y.values, R = y.limit, D = y.query, O = R === 1 / 0 ? void 0 : R, I = D.index, D = D.range, A = A.objectStore(d), I = I.isPrimaryKey ? A : A.index(I.name), D = r(D);
              if (R === 0) return h({ result: [] });
              l ? ((O = S ? I.getAll(D, O) : I.getAllKeys(D, O)).onsuccess = function(F) {
                return h({ result: F.target.result });
              }, O.onerror = Ie(g)) : (w = 0, _ = !S && "openKeyCursor" in I ? I.openKeyCursor(D) : I.openCursor(D), x = [], _.onsuccess = function(F) {
                var z = _.result;
                return z ? (x.push(S ? z.value : z.primaryKey), ++w === R ? h({ result: x }) : void z.continue()) : h({ result: x });
              }, _.onerror = Ie(g));
            });
          }), openCursor: function(y) {
            var h = y.trans, g = y.values, w = y.query, _ = y.reverse, x = y.unique;
            return new Promise(function(S, R) {
              S = re(S);
              var I = w.index, O = w.range, A = h.objectStore(d), A = I.isPrimaryKey ? A : A.index(I.name), I = _ ? x ? "prevunique" : "prev" : x ? "nextunique" : "next", D = !g && "openKeyCursor" in A ? A.openKeyCursor(r(O), I) : A.openCursor(r(O), I);
              D.onerror = Ie(R), D.onsuccess = re(function(F) {
                var z, Y, W, Se, G = D.result;
                G ? (G.___id = ++Ur, G.done = !1, z = G.continue.bind(G), Y = (Y = G.continuePrimaryKey) && Y.bind(G), W = G.advance.bind(G), Se = function() {
                  throw new Error("Cursor not stopped");
                }, G.trans = h, G.stop = G.continue = G.continuePrimaryKey = G.advance = function() {
                  throw new Error("Cursor not started");
                }, G.fail = re(R), G.next = function() {
                  var me = this, ye = 1;
                  return this.start(function() {
                    return ye-- ? me.continue() : me.stop();
                  }).then(function() {
                    return me;
                  });
                }, G.start = function(me) {
                  function ye() {
                    if (D.result) try {
                      me();
                    } catch (be) {
                      G.fail(be);
                    }
                    else G.done = !0, G.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, G.stop();
                  }
                  var ln = new Promise(function(be, at) {
                    be = re(be), D.onerror = Ie(at), G.fail = at, G.stop = function(Wn) {
                      G.stop = G.continue = G.continuePrimaryKey = G.advance = Se, be(Wn);
                    };
                  });
                  return D.onsuccess = re(function(be) {
                    D.onsuccess = ye, ye();
                  }), G.continue = z, G.continuePrimaryKey = Y, G.advance = W, ye(), ln;
                }, S(G)) : S(null);
              }, R);
            });
          }, count: function(y) {
            var h = y.query, g = y.trans, w = h.index, _ = h.range;
            return new Promise(function(x, S) {
              var R = g.objectStore(d), O = w.isPrimaryKey ? R : R.index(w.name), R = r(_), O = R ? O.count(R) : O.count();
              O.onsuccess = re(function(A) {
                return x(A.target.result);
              }), O.onerror = Ie(S);
            });
          } };
        }
        var o, a, u, m = (a = c, u = pr((o = e).objectStoreNames), { schema: { name: o.name, tables: u.map(function(v) {
          return a.objectStore(v);
        }).map(function(v) {
          var l = v.keyPath, h = v.autoIncrement, d = L(l), y = {}, h = { name: v.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: l == null, compound: d, keyPath: l, autoIncrement: h, unique: !0, extractKey: Cn(l) }, indexes: pr(v.indexNames).map(function(g) {
            return v.index(g);
          }).map(function(x) {
            var w = x.name, _ = x.unique, S = x.multiEntry, x = x.keyPath, S = { name: w, compound: L(x), keyPath: x, unique: _, multiEntry: S, extractKey: Cn(x) };
            return y[At(x)] = S;
          }), getIndexByKeyPath: function(g) {
            return y[At(g)];
          } };
          return y[":id"] = h.primaryKey, l != null && (y[At(l)] = h.primaryKey), h;
        }) }, hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), c = m.schema, f = m.hasGetAll, m = c.tables.map(i), s = {};
        return m.forEach(function(v) {
          return s[v.name] = v;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(v) {
          if (!s[v]) throw new Error("Table '".concat(v, "' not found"));
          return s[v];
        }, MIN_KEY: -1 / 0, MAX_KEY: kt(t), schema: c };
      }
      function Gr(e, t, n, r) {
        var i = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = Vr(t, i, r), e.dbcore.reduce(function(o, a) {
          return a = a.create, E(E({}, o), a(o));
        }, r)) };
      }
      function Xt(e, r) {
        var n = r.db, r = Gr(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var o = i.name;
          e.core.schema.tables.some(function(a) {
            return a.name === o;
          }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
        });
      }
      function Jt(e, t, n, r) {
        n.forEach(function(i) {
          var o = r[i];
          t.forEach(function(a) {
            var u = (function c(f, m) {
              return te(f, m) || (f = fe(f)) && c(f, m);
            })(a, i);
            (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? Z(a, i, { get: function() {
              return this.table(i);
            }, set: function(c) {
              H(this, i, { value: c, writable: !0, configurable: !0, enumerable: !0 });
            } }) : a[i] = new e.Table(i, o));
          });
        });
      }
      function Dn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function zr(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Qr(e, t, n, r) {
        var i = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = An("$meta", yr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(n), o._completion.catch(r);
        var a = o._reject.bind(o), u = B.transless || B;
        Ue(function() {
          return B.trans = o, B.transless = u, t !== 0 ? (Xt(e, n), f = t, ((c = o).storeNames.includes("$meta") ? c.table("$meta").get("version").then(function(m) {
            return m ?? f;
          }) : j.resolve(f)).then(function(m) {
            return v = m, l = o, d = n, y = [], m = (s = e)._versions, h = s._dbSchema = en(0, s.idbdb, d), (m = m.filter(function(g) {
              return g._cfg.version >= v;
            })).length !== 0 ? (m.forEach(function(g) {
              y.push(function() {
                var w = h, _ = g._cfg.dbschema;
                tn(s, w, d), tn(s, _, d), h = s._dbSchema = _;
                var x = Nn(w, _);
                x.add.forEach(function(I) {
                  Rn(d, I[0], I[1].primKey, I[1].indexes);
                }), x.change.forEach(function(I) {
                  if (I.recreate) throw new T.Upgrade("Not yet support for changing primary key");
                  var D = d.objectStore(I.name);
                  I.add.forEach(function(F) {
                    return Zt(D, F);
                  }), I.change.forEach(function(F) {
                    D.deleteIndex(F.name), Zt(D, F);
                  }), I.del.forEach(function(F) {
                    return D.deleteIndex(F);
                  });
                });
                var S = g._cfg.contentUpgrade;
                if (S && g._cfg.version > v) {
                  Xt(s, d), l._memoizedTables = {};
                  var R = jt(_);
                  x.del.forEach(function(I) {
                    R[I] = w[I];
                  }), Dn(s, [s.Transaction.prototype]), Jt(s, [s.Transaction.prototype], V(R), R), l.schema = R;
                  var O, A = We(S);
                  return A && ht(), x = j.follow(function() {
                    var I;
                    (O = S(l)) && A && (I = Ve.bind(null, null), O.then(I, I));
                  }), O && typeof O.then == "function" ? j.resolve(O) : x.then(function() {
                    return O;
                  });
                }
              }), y.push(function(w) {
                var _, x, S = g._cfg.dbschema;
                _ = S, x = w, [].slice.call(x.db.objectStoreNames).forEach(function(R) {
                  return _[R] == null && x.db.deleteObjectStore(R);
                }), Dn(s, [s.Transaction.prototype]), Jt(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
              }), y.push(function(w) {
                s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === g._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(_) {
                  return _ !== "$meta";
                })) : w.objectStore("$meta").put(g._cfg.version, "version"));
              });
            }), (function g() {
              return y.length ? j.resolve(y.shift()(l.idbtrans)).then(g) : j.resolve();
            })().then(function() {
              mr(h, d);
            })) : j.resolve();
            var s, v, l, d, y, h;
          }).catch(a)) : (V(i).forEach(function(m) {
            Rn(n, m, i[m].primKey, i[m].indexes);
          }), Xt(e, n), void j.follow(function() {
            return e.on.populate.fire(o);
          }).catch(a));
          var c, f;
        });
      }
      function Yr(e, t) {
        mr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = en(0, e.idbdb, t);
        tn(e, e._dbSchema, t);
        for (var r = 0, i = Nn(n, e._dbSchema).change; r < i.length; r++) {
          var o = (function(a) {
            if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var u = t.objectStore(a.name);
            a.add.forEach(function(c) {
              ke && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(c.src)), Zt(u, c);
            });
          })(i[r]);
          if (typeof o == "object") return o.value;
        }
      }
      function Nn(e, t) {
        var n, r = { del: [], add: [], change: [] };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
          var i = e[n], o = t[n];
          if (i) {
            var a = { name: n, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto) a.recreate = !0, r.change.push(a);
            else {
              var u = i.idxByName, c = o.idxByName, f = void 0;
              for (f in u) c[f] || a.del.push(f);
              for (f in c) {
                var m = u[f], s = c[f];
                m ? m.src !== s.src && a.change.push(s) : a.add.push(s);
              }
              (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
            }
          } else r.add.push([n, o]);
        }
        return r;
      }
      function Rn(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(o) {
          return Zt(i, o);
        }), i;
      }
      function mr(e, t) {
        V(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (ke && console.debug("Dexie: Creating missing table", n), Rn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function Zt(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function en(e, t, n) {
        var r = {};
        return Ne(t.objectStoreNames, 0).forEach(function(i) {
          for (var o = n.objectStore(i), a = kn(dr(f = o.keyPath), f || "", !0, !1, !!o.autoIncrement, f && typeof f != "string", !0), u = [], c = 0; c < o.indexNames.length; ++c) {
            var m = o.index(o.indexNames[c]), f = m.keyPath, m = kn(m.name, f, !!m.unique, !!m.multiEntry, !1, f && typeof f != "string", !1);
            u.push(m);
          }
          r[i] = An(i, a, u);
        }), r;
      }
      function tn(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var o = r[i], a = n.objectStore(o);
          e._hasGetAll = "getAll" in a;
          for (var u = 0; u < a.indexNames.length; ++u) {
            var c = a.indexNames[u], f = a.index(c).keyPath, m = typeof f == "string" ? f : "[" + Ne(f).join("+") + "]";
            !t[o] || (f = t[o].idxByName[m]) && (f.name = c, delete t[o].idxByName[m], t[o].idxByName[c] = f);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && q.WorkerGlobalScope && q instanceof q.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function yr(e) {
        return e.split(",").map(function(t, n) {
          var r = (t = t.trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
          return kn(r, i || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), L(i), n === 0);
        });
      }
      var Wr = (nn.prototype._parseStoresSpec = function(e, t) {
        V(e).forEach(function(n) {
          if (e[n] !== null) {
            var r = yr(e[n]), i = r.shift();
            if (i.unique = !0, i.multi) throw new T.Schema("Primary key cannot be multi-valued");
            r.forEach(function(o) {
              if (o.auto) throw new T.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!o.keyPath) throw new T.Schema("Index must have a name and cannot be an empty string");
            }), t[n] = An(n, i, r);
          }
        });
      }, nn.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? J(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, i = {};
        return n.forEach(function(o) {
          J(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
        }), t._dbSchema = i, Dn(t, [t._allTables, t, t.Transaction.prototype]), Jt(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], V(i), i), t._storeNames = V(i), this;
      }, nn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = It(this._cfg.contentUpgrade || Q, e), this;
      }, nn);
      function nn() {
      }
      function In(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Fe(Qt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Kn(e) {
        return e && typeof e.databases == "function";
      }
      function jn(e) {
        return Ue(function() {
          return B.letThrough = !0, e();
        });
      }
      function Fn(e) {
        return !("from" in e);
      }
      var pe = function(e, t) {
        if (!this) {
          var n = new pe();
          return e && "d" in e && J(n, e), n;
        }
        J(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Ct(e, t, n) {
        var r = $(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Fn(e)) return J(e, { from: t, to: n, d: 1 });
          var i = e.l, r = e.r;
          if ($(n, e.from) < 0) return i ? Ct(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, gr(e);
          if (0 < $(t, e.to)) return r ? Ct(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, gr(e);
          $(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < $(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && Dt(e, i), r && n && Dt(e, r);
        }
      }
      function Dt(e, t) {
        Fn(t) || (function n(r, c) {
          var o = c.from, a = c.to, u = c.l, c = c.r;
          Ct(r, o, a), u && n(r, u), c && n(r, c);
        })(e, t);
      }
      function vr(e, t) {
        var n = rn(t), r = n.next();
        if (r.done) return !1;
        for (var i = r.value, o = rn(e), a = o.next(i.from), u = a.value; !r.done && !a.done; ) {
          if ($(u.from, i.to) <= 0 && 0 <= $(u.to, i.from)) return !0;
          $(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (a = o.next(i.from)).value;
        }
        return !1;
      }
      function rn(e) {
        var t = Fn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && $(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || $(n, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function gr(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
        i && (t = i == "r" ? "l" : "r", n = E({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = br(n)), e.d = br(e);
      }
      function br(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function on(e, t) {
        return V(t).forEach(function(n) {
          e[n] ? Dt(e[n], t[n]) : e[n] = (function r(i) {
            var o, a, u = {};
            for (o in i) X(i, o) && (a = i[o], u[o] = !a || typeof a != "object" || ut.has(a.constructor) ? a : r(a));
            return u;
          })(t[n]);
        }), e;
      }
      function Bn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && vr(t[n], e[n]);
        });
      }
      U(pe.prototype, ((Ae = { add: function(e) {
        return Dt(this, e), this;
      }, addKey: function(e) {
        return Ct(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Ct(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = rn(this).next(e).value;
        return t && $(t.from, e) <= 0 && 0 <= $(t.to, e);
      } })[Nt] = function() {
        return rn(this);
      }, Ae));
      var it = {}, qn = {}, Mn = !1;
      function an(e) {
        on(qn, e), Mn || (Mn = !0, setTimeout(function() {
          Mn = !1, Ln(qn, !(qn = {}));
        }, 0));
      }
      function Ln(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, i = Object.values(it); r < i.length; r++) wr(a = i[r], e, n, t);
        else for (var o in e) {
          var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          u && (o = u[1], u = u[2], (a = it["idb://".concat(o, "/").concat(u)]) && wr(a, e, n, t));
        }
        n.forEach(function(c) {
          return c();
        });
      }
      function wr(e, t, n, r) {
        for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
          for (var u = a[o], c = u[0], f = [], m = 0, s = u[1]; m < s.length; m++) {
            var v = s[m];
            Bn(t, v.obsSet) ? v.subscribers.forEach(function(h) {
              return n.add(h);
            }) : r && f.push(v);
          }
          r && i.push([c, f]);
        }
        if (r) for (var l = 0, d = i; l < d.length; l++) {
          var y = d[l], c = y[0], f = y[1];
          e.queries.query[c] = f;
        }
      }
      function Hr(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? ae(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, i = Math.round(10 * e.verno), o = !1;
        function a() {
          if (t.openCanceller !== r) throw new T.DatabaseClosed("db.open() was cancelled");
        }
        function u() {
          return new j(function(v, l) {
            if (a(), !n) throw new T.MissingAPI();
            var d = e.name, y = t.autoSchema || !i ? n.open(d) : n.open(d, i);
            if (!y) throw new T.MissingAPI();
            y.onerror = Ie(l), y.onblocked = re(e._fireOnBlocked), y.onupgradeneeded = re(function(h) {
              var g;
              m = y.transaction, t.autoSchema && !e._options.allowEmptyDB ? (y.onerror = Ot, m.abort(), y.result.close(), (g = n.deleteDatabase(d)).onsuccess = g.onerror = re(function() {
                l(new T.NoSuchDatabase("Database ".concat(d, " doesnt exist")));
              })) : (m.onerror = Ie(l), h = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion, s = h < 1, e.idbdb = y.result, o && Yr(e, m), Qr(e, h / 10, m, l));
            }, l), y.onsuccess = re(function() {
              m = null;
              var h, g, w, _, x, S = e.idbdb = y.result, R = Ne(S.objectStoreNames);
              if (0 < R.length) try {
                var O = S.transaction((_ = R).length === 1 ? _[0] : _, "readonly");
                if (t.autoSchema) g = S, w = O, (h = e).verno = g.version / 10, w = h._dbSchema = en(0, g, w), h._storeNames = Ne(g.objectStoreNames, 0), Jt(h, [h._allTables], V(w), w);
                else if (tn(e, e._dbSchema, O), ((x = Nn(en(0, (x = e).idbdb, O), x._dbSchema)).add.length || x.change.some(function(A) {
                  return A.add.length || A.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), S.close(), i = S.version + 1, o = !0, v(u());
                Xt(e, O);
              } catch {
              }
              dt.push(e), S.onversionchange = re(function(A) {
                t.vcFired = !0, e.on("versionchange").fire(A);
              }), S.onclose = re(function(A) {
                e.on("close").fire(A);
              }), s && (x = e._deps, O = d, S = x.indexedDB, x = x.IDBKeyRange, Kn(S) || O === Qt || In(S, x).put({ name: O }).catch(Q)), v();
            }, l);
          }).catch(function(v) {
            switch (v?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), u();
                break;
              case "VersionError":
                if (0 < i) return i = 0, u();
            }
            return j.reject(v);
          });
        }
        var c, f = t.dbReadyResolve, m = null, s = !1;
        return j.race([r, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(v) {
          function l() {
            return indexedDB.databases().finally(v);
          }
          c = setInterval(l, 100), l();
        }).finally(function() {
          return clearInterval(c);
        }) : Promise.resolve()).then(u)]).then(function() {
          return a(), t.onReadyBeingFired = [], j.resolve(jn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function v() {
            if (0 < t.onReadyBeingFired.length) {
              var l = t.onReadyBeingFired.reduce(It, Q);
              return t.onReadyBeingFired = [], j.resolve(jn(function() {
                return l(e.vip);
              })).then(v);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(v) {
          t.dbOpenError = v;
          try {
            m && m.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), ae(v);
        }).finally(function() {
          t.openComplete = !0, f();
        }).then(function() {
          var v;
          return s && (v = {}, e.tables.forEach(function(l) {
            l.schema.indexes.forEach(function(d) {
              d.name && (v["idb://".concat(e.name, "/").concat(l.name, "/").concat(d.name)] = new pe(-1 / 0, [[[]]]));
            }), v["idb://".concat(e.name, "/").concat(l.name, "/")] = v["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new pe(-1 / 0, [[[]]]);
          }), Qe(Pt).fire(v), Ln(v, !0)), e;
        });
      }
      function Un(e) {
        function t(o) {
          return e.next(o);
        }
        var n = i(t), r = i(function(o) {
          return e.throw(o);
        });
        function i(o) {
          return function(c) {
            var u = o(c), c = u.value;
            return u.done ? c : c && typeof c.then == "function" ? c.then(n, r) : L(c) ? Promise.all(c).then(n, r) : n(c);
          };
        }
        return i(t)();
      }
      function un(e, t, n) {
        for (var r = L(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r;
      }
      var $r = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return E(E({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = {}, o = [];
          function a(s, v, l) {
            var d = At(s), y = i[d] = i[d] || [], h = s == null ? 0 : typeof s == "string" ? 1 : s.length, g = 0 < v, g = E(E({}, l), { name: g ? "".concat(d, "(virtual-from:").concat(l.name, ")") : l.name, lowLevelIndex: l, isVirtual: g, keyTail: v, keyLength: h, extractKey: Cn(s), unique: !g && l.unique });
            return y.push(g), g.isPrimaryKey || o.push(g), 1 < h && a(h === 2 ? s[0] : s.slice(0, h - 1), v + 1, l), y.sort(function(w, _) {
              return w.keyTail - _.keyTail;
            }), g;
          }
          t = a(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [t];
          for (var u = 0, c = r.indexes; u < c.length; u++) {
            var f = c[u];
            a(f.keyPath, 0, f);
          }
          function m(s) {
            var v, l = s.query.index;
            return l.isVirtual ? E(E({}, s), { query: { index: l.lowLevelIndex, range: (v = s.query.range, l = l.keyTail, { type: v.type === 1 ? 2 : v.type, lower: un(v.lower, v.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l), lowerOpen: !0, upper: un(v.upper, v.upperOpen ? e.MIN_KEY : e.MAX_KEY, l), upperOpen: !0 }) } }) : s;
          }
          return E(E({}, n), { schema: E(E({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(s) {
            return (s = i[At(s)]) && s[0];
          } }), count: function(s) {
            return n.count(m(s));
          }, query: function(s) {
            return n.query(m(s));
          }, openCursor: function(s) {
            var v = s.query.index, l = v.keyTail, d = v.isVirtual, y = v.keyLength;
            return d ? n.openCursor(m(s)).then(function(g) {
              return g && h(g);
            }) : n.openCursor(s);
            function h(g) {
              return Object.create(g, { continue: { value: function(w) {
                w != null ? g.continue(un(w, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? g.continue(g.key.slice(0, y).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : g.continue();
              } }, continuePrimaryKey: { value: function(w, _) {
                g.continuePrimaryKey(un(w, e.MAX_KEY, l), _);
              } }, primaryKey: { get: function() {
                return g.primaryKey;
              } }, key: { get: function() {
                var w = g.key;
                return y === 1 ? w[0] : w.slice(0, y);
              } }, value: { get: function() {
                return g.value;
              } } });
            }
          } });
        } });
      } };
      function Vn(e, t, n, r) {
        return n = n || {}, r = r || "", V(e).forEach(function(i) {
          var o, a, u;
          X(t, i) ? (o = e[i], a = t[i], typeof o == "object" && typeof a == "object" && o && a ? (u = st(o)) !== st(a) ? n[r + i] = t[i] : u === "Object" ? Vn(o, a, n, r + i + ".") : o !== a && (n[r + i] = t[i]) : o !== a && (n[r + i] = t[i])) : n[r + i] = void 0;
        }), V(t).forEach(function(i) {
          X(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function Gn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Xr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return E(E({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return E(E({}, n), { mutate: function(i) {
            var o = B.trans, a = o.table(t).hook, u = a.deleting, c = a.creating, f = a.updating;
            switch (i.type) {
              case "add":
                if (c.fire === Q) break;
                return o._promise("readwrite", function() {
                  return m(i);
                }, !0);
              case "put":
                if (c.fire === Q && f.fire === Q) break;
                return o._promise("readwrite", function() {
                  return m(i);
                }, !0);
              case "delete":
                if (u.fire === Q) break;
                return o._promise("readwrite", function() {
                  return m(i);
                }, !0);
              case "deleteRange":
                if (u.fire === Q) break;
                return o._promise("readwrite", function() {
                  return (function s(v, l, d) {
                    return n.query({ trans: v, values: !1, query: { index: r, range: l }, limit: d }).then(function(y) {
                      var h = y.result;
                      return m({ type: "delete", keys: h, trans: v }).then(function(g) {
                        return 0 < g.numFailures ? Promise.reject(g.failures[0]) : h.length < d ? { failures: [], numFailures: 0, lastResult: void 0 } : s(v, E(E({}, l), { lower: h[h.length - 1], lowerOpen: !0 }), d);
                      });
                    });
                  })(i.trans, i.range, 1e4);
                }, !0);
            }
            return n.mutate(i);
            function m(s) {
              var v, l, d, y = B.trans, h = s.keys || Gn(r, s);
              if (!h) throw new Error("Keys missing");
              return (s = s.type === "add" || s.type === "put" ? E(E({}, s), { keys: h }) : E({}, s)).type !== "delete" && (s.values = M([], s.values)), s.keys && (s.keys = M([], s.keys)), v = n, d = h, ((l = s).type === "add" ? Promise.resolve([]) : v.getMany({ trans: l.trans, keys: d, cache: "immutable" })).then(function(g) {
                var w = h.map(function(_, x) {
                  var S, R, O, A = g[x], I = { onerror: null, onsuccess: null };
                  return s.type === "delete" ? u.fire.call(I, _, A, y) : s.type === "add" || A === void 0 ? (S = c.fire.call(I, _, s.values[x], y), _ == null && S != null && (s.keys[x] = _ = S, r.outbound || ce(s.values[x], r.keyPath, _))) : (S = Vn(A, s.values[x]), (R = f.fire.call(I, S, _, A, y)) && (O = s.values[x], Object.keys(R).forEach(function(D) {
                    X(O, D) ? O[D] = R[D] : ce(O, D, R[D]);
                  }))), I;
                });
                return n.mutate(s).then(function(_) {
                  for (var x = _.failures, S = _.results, R = _.numFailures, _ = _.lastResult, O = 0; O < h.length; ++O) {
                    var A = (S || h)[O], I = w[O];
                    A == null ? I.onerror && I.onerror(x[O]) : I.onsuccess && I.onsuccess(s.type === "put" && g[O] ? s.values[O] : A);
                  }
                  return { failures: x, results: S, numFailures: R, lastResult: _ };
                }).catch(function(_) {
                  return w.forEach(function(x) {
                    return x.onerror && x.onerror(_);
                  }), Promise.reject(_);
                });
              });
            }
          } });
        } });
      } };
      function _r(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) $(t.keys[i], e[o]) === 0 && (r.push(n ? xe(t.values[i]) : t.values[i]), ++o);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var Jr = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return E(E({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var i = _r(r.keys, r.trans._cache, r.cache === "clone");
            return i ? j.resolve(i) : n.getMany(r).then(function(o) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? xe(o) : o }, o;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function Er(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function xr(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Zr = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new pe(e.MIN_KEY, e.MAX_KEY);
        return E(E({}, e), { transaction: function(r, i, o) {
          if (B.subscr && i !== "readonly") throw new T.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));
          return e.transaction(r, i, o);
        }, table: function(r) {
          var i = e.table(r), o = i.schema, a = o.primaryKey, s = o.indexes, u = a.extractKey, c = a.outbound, f = a.autoIncrement && s.filter(function(l) {
            return l.compound && l.keyPath.includes(a.keyPath);
          }), m = E(E({}, i), { mutate: function(l) {
            function d(D) {
              return D = "idb://".concat(t, "/").concat(r, "/").concat(D), _[D] || (_[D] = new pe());
            }
            var y, h, g, w = l.trans, _ = l.mutatedParts || (l.mutatedParts = {}), x = d(""), S = d(":dels"), R = l.type, I = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [Gn(a, l).filter(function(D) {
              return D;
            }), l.values] : [], O = I[0], A = I[1], I = l.trans._cache;
            return L(O) ? (x.addKeys(O), (I = R === "delete" || O.length === A.length ? _r(O, I) : null) || S.addKeys(O), (I || A) && (y = d, h = I, g = A, o.indexes.forEach(function(D) {
              var F = y(D.name || "");
              function z(W) {
                return W != null ? D.extractKey(W) : null;
              }
              function Y(W) {
                return D.multiEntry && L(W) ? W.forEach(function(Se) {
                  return F.addKey(Se);
                }) : F.addKey(W);
              }
              (h || g).forEach(function(W, me) {
                var G = h && z(h[me]), me = g && z(g[me]);
                $(G, me) !== 0 && (G != null && Y(G), me != null && Y(me));
              });
            }))) : O ? (A = { from: (A = O.lower) !== null && A !== void 0 ? A : e.MIN_KEY, to: (A = O.upper) !== null && A !== void 0 ? A : e.MAX_KEY }, S.add(A), x.add(A)) : (x.add(n), S.add(n), o.indexes.forEach(function(D) {
              return d(D.name).add(n);
            })), i.mutate(l).then(function(D) {
              return !O || l.type !== "add" && l.type !== "put" || (x.addKeys(D.results), f && f.forEach(function(F) {
                for (var z = l.values.map(function(G) {
                  return F.extractKey(G);
                }), Y = F.keyPath.findIndex(function(G) {
                  return G === a.keyPath;
                }), W = 0, Se = D.results.length; W < Se; ++W) z[W][Y] = D.results[W];
                d(F.name).addKeys(z);
              })), w.mutatedParts = on(w.mutatedParts || {}, _), D;
            });
          } }), s = function(d) {
            var y = d.query, d = y.index, y = y.range;
            return [d, new pe((d = y.lower) !== null && d !== void 0 ? d : e.MIN_KEY, (y = y.upper) !== null && y !== void 0 ? y : e.MAX_KEY)];
          }, v = { get: function(l) {
            return [a, new pe(l.key)];
          }, getMany: function(l) {
            return [a, new pe().addKeys(l.keys)];
          }, count: s, query: s, openCursor: s };
          return V(v).forEach(function(l) {
            m[l] = function(d) {
              var y = B.subscr, h = !!y, g = Er(B, i) && xr(l, d) ? d.obsSet = {} : y;
              if (h) {
                var w = function(A) {
                  return A = "idb://".concat(t, "/").concat(r, "/").concat(A), g[A] || (g[A] = new pe());
                }, _ = w(""), x = w(":dels"), y = v[l](d), h = y[0], y = y[1];
                if ((l === "query" && h.isPrimaryKey && !d.values ? x : w(h.name || "")).add(y), !h.isPrimaryKey) {
                  if (l !== "count") {
                    var S = l === "query" && c && d.values && i.query(E(E({}, d), { values: !1 }));
                    return i[l].apply(this, arguments).then(function(A) {
                      if (l === "query") {
                        if (c && d.values) return S.then(function(z) {
                          return z = z.result, _.addKeys(z), A;
                        });
                        var I = d.values ? A.result.map(u) : A.result;
                        (d.values ? _ : x).addKeys(I);
                      } else if (l === "openCursor") {
                        var D = A, F = d.values;
                        return D && Object.create(D, { key: { get: function() {
                          return x.addKey(D.primaryKey), D.key;
                        } }, primaryKey: { get: function() {
                          var z = D.primaryKey;
                          return x.addKey(z), z;
                        } }, value: { get: function() {
                          return F && _.addKey(D.primaryKey), D.value;
                        } } });
                      }
                      return A;
                    });
                  }
                  x.add(n);
                }
              }
              return i[l].apply(this, arguments);
            };
          }), m;
        } });
      } };
      function Tr(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = E({}, t), L(t.keys) && (t.keys = t.keys.filter(function(i, o) {
          return !(o in n.failures);
        })), "values" in t && L(t.values) && (t.values = t.values.filter(function(i, o) {
          return !(o in n.failures);
        })), t);
      }
      function zn(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < $(n, r.lower) : 0 <= $(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? $(e, t.upper) < 0 : $(e, t.upper) <= 0));
        var n, r;
      }
      function Sr(e, t, v, r, i, o) {
        if (!v || v.length === 0) return e;
        var a = t.query.index, u = a.multiEntry, c = t.query.range, f = r.schema.primaryKey.extractKey, m = a.extractKey, s = (a.lowLevelIndex || a).extractKey, v = v.reduce(function(l, d) {
          var y = l, h = [];
          if (d.type === "add" || d.type === "put") for (var g = new pe(), w = d.values.length - 1; 0 <= w; --w) {
            var _, x = d.values[w], S = f(x);
            g.hasKey(S) || (_ = m(x), (u && L(_) ? _.some(function(D) {
              return zn(D, c);
            }) : zn(_, c)) && (g.addKey(S), h.push(x)));
          }
          switch (d.type) {
            case "add":
              var R = new pe().addKeys(t.values ? l.map(function(F) {
                return f(F);
              }) : l), y = l.concat(t.values ? h.filter(function(F) {
                return F = f(F), !R.hasKey(F) && (R.addKey(F), !0);
              }) : h.map(function(F) {
                return f(F);
              }).filter(function(F) {
                return !R.hasKey(F) && (R.addKey(F), !0);
              }));
              break;
            case "put":
              var O = new pe().addKeys(d.values.map(function(F) {
                return f(F);
              }));
              y = l.filter(function(F) {
                return !O.hasKey(t.values ? f(F) : F);
              }).concat(t.values ? h : h.map(function(F) {
                return f(F);
              }));
              break;
            case "delete":
              var A = new pe().addKeys(d.keys);
              y = l.filter(function(F) {
                return !A.hasKey(t.values ? f(F) : F);
              });
              break;
            case "deleteRange":
              var I = d.range;
              y = l.filter(function(F) {
                return !zn(f(F), I);
              });
          }
          return y;
        }, e);
        return v === e ? e : (v.sort(function(l, d) {
          return $(s(l), s(d)) || $(f(l), f(d));
        }), t.limit && t.limit < 1 / 0 && (v.length > t.limit ? v.length = t.limit : e.length === t.limit && v.length < t.limit && (i.dirty = !0)), o ? Object.freeze(v) : v);
      }
      function Or(e, t) {
        return $(e.lower, t.lower) === 0 && $(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ei(e, t) {
        return (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = $(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return 1;
            if (o) return -1;
          }
          return r;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = $(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return -1;
            if (o) return 1;
          }
          return r;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function ti(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var i, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (i = e, o = t, setTimeout(function() {
            i.subscribers.size === 0 && qe(o, i);
          }, 3e3));
        });
      }
      var ni = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return E(E({}, e), { transaction: function(n, r, i) {
          var o, a, u = e.transaction(n, r, i);
          return r === "readwrite" && (a = (o = new AbortController()).signal, i = function(c) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var f = /* @__PURE__ */ new Set(), m = 0, s = n; m < s.length; m++) {
                  var v = s[m], l = it["idb://".concat(t, "/").concat(v)];
                  if (l) {
                    var d = e.table(v), y = l.optimisticOps.filter(function(F) {
                      return F.trans === u;
                    });
                    if (u._explicit && c && u.mutatedParts) for (var h = 0, g = Object.values(l.queries.query); h < g.length; h++) for (var w = 0, _ = (R = g[h]).slice(); w < _.length; w++) Bn((O = _[w]).obsSet, u.mutatedParts) && (qe(R, O), O.subscribers.forEach(function(F) {
                      return f.add(F);
                    }));
                    else if (0 < y.length) {
                      l.optimisticOps = l.optimisticOps.filter(function(F) {
                        return F.trans !== u;
                      });
                      for (var x = 0, S = Object.values(l.queries.query); x < S.length; x++) for (var R, O, A, I = 0, D = (R = S[x]).slice(); I < D.length; I++) (O = D[I]).res != null && u.mutatedParts && (c && !O.dirty ? (A = Object.isFrozen(O.res), A = Sr(O.res, O.req, y, d, O, A), O.dirty ? (qe(R, O), O.subscribers.forEach(function(F) {
                        return f.add(F);
                      })) : A !== O.res && (O.res = A, O.promise = j.resolve({ result: A }))) : (O.dirty && qe(R, O), O.subscribers.forEach(function(F) {
                        return f.add(F);
                      })));
                    }
                  }
                }
                f.forEach(function(F) {
                  return F();
                });
              }
            };
          }, u.addEventListener("abort", i(!1), { signal: a }), u.addEventListener("error", i(!1), { signal: a }), u.addEventListener("complete", i(!0), { signal: a })), u;
        }, table: function(n) {
          var r = e.table(n), i = r.schema.primaryKey;
          return E(E({}, r), { mutate: function(o) {
            var a = B.trans;
            if (i.outbound || a.db._options.cache === "disabled" || a.explicit || a.idbtrans.mode !== "readwrite") return r.mutate(o);
            var u = it["idb://".concat(t, "/").concat(n)];
            return u ? (a = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Gn(i, o).some(function(c) {
              return c == null;
            })) ? (u.optimisticOps.push(o), o.mutatedParts && an(o.mutatedParts), a.then(function(c) {
              0 < c.numFailures && (qe(u.optimisticOps, o), (c = Tr(0, o, c)) && u.optimisticOps.push(c), o.mutatedParts && an(o.mutatedParts));
            }), a.catch(function() {
              qe(u.optimisticOps, o), o.mutatedParts && an(o.mutatedParts);
            })) : a.then(function(c) {
              var f = Tr(0, E(E({}, o), { values: o.values.map(function(m, s) {
                var v;
                return c.failures[s] ? m : (m = (v = i.keyPath) !== null && v !== void 0 && v.includes(".") ? xe(m) : E({}, m), ce(m, i.keyPath, c.results[s]), m);
              }) }), c);
              u.optimisticOps.push(f), queueMicrotask(function() {
                return o.mutatedParts && an(o.mutatedParts);
              });
            }), a) : r.mutate(o);
          }, query: function(o) {
            if (!Er(B, r) || !xr("query", o)) return r.query(o);
            var a = ((f = B.trans) === null || f === void 0 ? void 0 : f.db._options.cache) === "immutable", s = B, u = s.requery, c = s.signal, f = (function(d, y, h, g) {
              var w = it["idb://".concat(d, "/").concat(y)];
              if (!w) return [];
              if (!(y = w.queries[h])) return [null, !1, w, null];
              var _ = y[(g.query ? g.query.index.name : null) || ""];
              if (!_) return [null, !1, w, null];
              switch (h) {
                case "query":
                  var x = _.find(function(S) {
                    return S.req.limit === g.limit && S.req.values === g.values && Or(S.req.query.range, g.query.range);
                  });
                  return x ? [x, !0, w, _] : [_.find(function(S) {
                    return ("limit" in S.req ? S.req.limit : 1 / 0) >= g.limit && (!g.values || S.req.values) && ei(S.req.query.range, g.query.range);
                  }), !1, w, _];
                case "count":
                  return x = _.find(function(S) {
                    return Or(S.req.query.range, g.query.range);
                  }), [x, !!x, w, _];
              }
            })(t, n, "query", o), m = f[0], s = f[1], v = f[2], l = f[3];
            return m && s ? m.obsSet = o.obsSet : (s = r.query(o).then(function(d) {
              var y = d.result;
              if (m && (m.res = y), a) {
                for (var h = 0, g = y.length; h < g; ++h) Object.freeze(y[h]);
                Object.freeze(y);
              } else d.result = xe(y);
              return d;
            }).catch(function(d) {
              return l && m && qe(l, m), Promise.reject(d);
            }), m = { obsSet: o.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, l ? l.push(m) : (l = [m], (v = v || (it["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = l)), ti(m, l, u, c), m.promise.then(function(d) {
              return { result: Sr(d.result, o, v?.optimisticOps, r, m, a) };
            });
          } });
        } });
      } };
      function sn(e, t) {
        return new Proxy(e, { get: function(n, r, i) {
          return r === "db" ? t : Reflect.get(n, r, i);
        } });
      }
      var Fe = (ue.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new T.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new T.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(zr), n.stores({}), this._state.autoSchema = !1, n);
      }, ue.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || B.letThrough || this._vip) ? e() : new j(function(n, r) {
          if (t._state.openComplete) return r(new T.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new T.DatabaseClosed());
            t.open().catch(Q);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, ue.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, i = e.name;
        return i && this.unuse({ stack: t, name: i }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: i }), e.sort(function(o, a) {
          return o.level - a.level;
        }), this;
      }, ue.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(i) {
          return r ? i.create !== r : !!n && i.name !== n;
        })), this;
      }, ue.prototype.open = function() {
        var e = this;
        return tt(Le, function() {
          return Hr(e);
        });
      }, ue.prototype._close = function() {
        var e = this._state, t = dt.indexOf(this);
        if (0 <= t && dt.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new j(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new j(function(n, r) {
          e.cancelOpen = r;
        }));
      }, ue.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new T.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new T.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ue.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new j(function(i, o) {
          function a() {
            t.close(e);
            var u = t._deps.indexedDB.deleteDatabase(t.name);
            u.onsuccess = re(function() {
              var c, f, m;
              c = t._deps, f = t.name, m = c.indexedDB, c = c.IDBKeyRange, Kn(m) || f === Qt || In(m, c).delete(f).catch(Q), i();
            }), u.onerror = Ie(o), u.onblocked = t._fireOnBlocked;
          }
          if (n) throw new T.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
        });
      }, ue.prototype.backendDB = function() {
        return this.idbdb;
      }, ue.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ue.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ue.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ue.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ue.prototype, "tables", { get: function() {
        var e = this;
        return V(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), ue.prototype.transaction = function() {
        var e = (function(t, n, r) {
          var i = arguments.length;
          if (i < 2) throw new T.InvalidArgument("Too few arguments");
          for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
          return r = o.pop(), [t, gt(o), r];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ue.prototype._transaction = function(e, t, n) {
        var r = this, i = B.trans;
        i && i.db === this && e.indexOf("!") === -1 || (i = null);
        var o, a, u = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (a = t.map(function(f) {
            if (f = f instanceof r.Table ? f.name : f, typeof f != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return f;
          }), e == "r" || e === En) o = En;
          else {
            if (e != "rw" && e != xn) throw new T.InvalidArgument("Invalid transaction mode: " + e);
            o = xn;
          }
          if (i) {
            if (i.mode === En && o === xn) {
              if (!u) throw new T.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              i = null;
            }
            i && a.forEach(function(f) {
              if (i && i.storeNames.indexOf(f) === -1) {
                if (!u) throw new T.SubTransaction("Table " + f + " not included in parent transaction.");
                i = null;
              }
            }), u && i && !i.active && (i = null);
          }
        } catch (f) {
          return i ? i._promise(null, function(m, s) {
            s(f);
          }) : ae(f);
        }
        var c = (function f(m, s, v, l, d) {
          return j.resolve().then(function() {
            var y = B.transless || B, h = m._createTransaction(s, v, m._dbSchema, l);
            if (h.explicit = !0, y = { trans: h, transless: y }, l) h.idbtrans = l.idbtrans;
            else try {
              h.create(), h.idbtrans._explicit = !0, m._state.PR1398_maxLoop = 3;
            } catch (_) {
              return _.name === b.InvalidState && m.isOpen() && 0 < --m._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), m.close({ disableAutoOpen: !1 }), m.open().then(function() {
                return f(m, s, v, null, d);
              })) : ae(_);
            }
            var g, w = We(d);
            return w && ht(), y = j.follow(function() {
              var _;
              (g = d.call(h, h)) && (w ? (_ = Ve.bind(null, null), g.then(_, _)) : typeof g.next == "function" && typeof g.throw == "function" && (g = Un(g)));
            }, y), (g && typeof g.then == "function" ? j.resolve(g).then(function(_) {
              return h.active ? _ : ae(new T.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : y.then(function() {
              return g;
            })).then(function(_) {
              return l && h._resolve(), h._completion.then(function() {
                return _;
              });
            }).catch(function(_) {
              return h._reject(_), ae(_);
            });
          });
        }).bind(null, this, o, a, i, n);
        return i ? i._promise(o, c, "lock") : B.trans ? tt(B.transless, function() {
          return r._whenReady(c);
        }) : this._whenReady(c);
      }, ue.prototype.table = function(e) {
        if (!X(this._allTables, e)) throw new T.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ue);
      function ue(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = ue.dependencies;
        this._options = t = E({ addons: ue.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var i, o, a, u, c, f = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        f.dbReadyPromise = new j(function(s) {
          f.dbReadyResolve = s;
        }), f.openCanceller = new j(function(s, v) {
          f.cancelOpen = v;
        }), this._state = f, this.name = e, this.on = xt(this, "populate", "blocked", "versionchange", "close", { ready: [It, Q] }), this.on.ready.subscribe = Ee(this.on.ready.subscribe, function(s) {
          return function(v, l) {
            ue.vip(function() {
              var d, y = n._state;
              y.openComplete ? (y.dbOpenError || j.resolve().then(v), l && s(v)) : y.onReadyBeingFired ? (y.onReadyBeingFired.push(v), l && s(v)) : (s(v), d = n, l || s(function h() {
                d.on.ready.unsubscribe(v), d.on.ready.unsubscribe(h);
              }));
            });
          };
        }), this.Collection = (i = this, Tt(Br.prototype, function(g, h) {
          this.db = i;
          var l = rr, d = null;
          if (h) try {
            l = h();
          } catch (w) {
            d = w;
          }
          var y = g._ctx, h = y.table, g = h.hook.reading.fire;
          this._ctx = { table: h, index: y.index, isPrimKey: !y.index || h.schema.primKey.keyPath && y.index === h.schema.primKey.name, range: l, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: d, or: y.or, valueMapper: g !== ge ? g : null };
        })), this.Table = (o = this, Tt(ur.prototype, function(s, v, l) {
          this.db = o, this._tx = l, this.name = s, this.schema = v, this.hook = o._allTables[s] ? o._allTables[s].hook : xt(null, { creating: [Rt, Q], reading: [Be, ge], updating: [ct, Q], deleting: [Re, Q] });
        })), this.Transaction = (a = this, Tt(Lr.prototype, function(s, v, l, d, y) {
          var h = this;
          this.db = a, this.mode = s, this.storeNames = v, this.schema = l, this.chromeTransactionDurability = d, this.idbtrans = null, this.on = xt(this, "complete", "error", "abort"), this.parent = y || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(g, w) {
            h._resolve = g, h._reject = w;
          }), this._completion.then(function() {
            h.active = !1, h.on.complete.fire();
          }, function(g) {
            var w = h.active;
            return h.active = !1, h.on.error.fire(g), h.parent ? h.parent._reject(g) : w && h.idbtrans && h.idbtrans.abort(), ae(g);
          });
        })), this.Version = (u = this, Tt(Wr.prototype, function(s) {
          this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (c = this, Tt(hr.prototype, function(s, v, l) {
          if (this.db = c, this._ctx = { table: s, index: v === ":id" ? null : v, or: l }, this._cmp = this._ascending = $, this._descending = function(d, y) {
            return $(y, d);
          }, this._max = function(d, y) {
            return 0 < $(d, y) ? d : y;
          }, this._min = function(d, y) {
            return $(d, y) < 0 ? d : y;
          }, this._IDBKeyRange = c._deps.IDBKeyRange, !this._IDBKeyRange) throw new T.MissingAPI();
        })), this.on("versionchange", function(s) {
          0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(s) {
          !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
        }), this._maxKey = kt(t.IDBKeyRange), this._createTransaction = function(s, v, l, d) {
          return new n.Transaction(s, v, l, n._options.chromeTransactionDurability, d);
        }, this._fireOnBlocked = function(s) {
          n.on("blocked").fire(s), dt.filter(function(v) {
            return v.name === n.name && v !== n && !v._state.vcFired;
          }).map(function(v) {
            return v.on("versionchange").fire(s);
          });
        }, this.use(Jr), this.use(ni), this.use(Zr), this.use($r), this.use(Xr);
        var m = new Proxy(this, { get: function(s, v, l) {
          if (v === "_vip") return !0;
          if (v === "table") return function(y) {
            return sn(n.table(y), m);
          };
          var d = Reflect.get(s, v, l);
          return d instanceof ur ? sn(d, m) : v === "tables" ? d.map(function(y) {
            return sn(y, m);
          }) : v === "_createTransaction" ? function() {
            return sn(d.apply(this, arguments), m);
          } : d;
        } });
        this.vip = m, r.forEach(function(s) {
          return s(n);
        });
      }
      var cn, Ae = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ri = (Qn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Qn.prototype[Ae] = function() {
        return this;
      }, Qn);
      function Qn(e) {
        this._subscribe = e;
      }
      try {
        cn = { indexedDB: q.indexedDB || q.mozIndexedDB || q.webkitIndexedDB || q.msIndexedDB, IDBKeyRange: q.IDBKeyRange || q.webkitIDBKeyRange };
      } catch {
        cn = { indexedDB: null, IDBKeyRange: null };
      }
      function Pr(e) {
        var t, n = !1, r = new ri(function(i) {
          var o = We(e), a, u = !1, c = {}, f = {}, m = { get closed() {
            return u;
          }, unsubscribe: function() {
            u || (u = !0, a && a.abort(), s && Qe.storagemutated.unsubscribe(l));
          } };
          i.start && i.start(m);
          var s = !1, v = function() {
            return _n(d);
          }, l = function(y) {
            on(c, y), Bn(f, c) && v();
          }, d = function() {
            var y, h, g;
            !u && cn.indexedDB && (c = {}, y = {}, a && a.abort(), a = new AbortController(), g = (function(w) {
              var _ = lt();
              try {
                o && ht();
                var x = Ue(e, w);
                return x = o ? x.finally(Ve) : x;
              } finally {
                _ && ft();
              }
            })(h = { subscr: y, signal: a.signal, requery: v, querier: e, trans: null }), Promise.resolve(g).then(function(w) {
              n = !0, t = w, u || h.signal.aborted || (c = {}, (function(_) {
                for (var x in _) if (X(_, x)) return;
                return 1;
              })(f = y) || s || (Qe(Pt, l), s = !0), _n(function() {
                return !u && i.next && i.next(w);
              }));
            }, function(w) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(w?.name) || u || _n(function() {
                u || i.error && i.error(w);
              });
            }));
          };
          return setTimeout(v, 0), m;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var ot = Fe;
      function Yn(e) {
        var t = Ye;
        try {
          Ye = !0, Qe.storagemutated.fire(e), Ln(e, !0);
        } finally {
          Ye = t;
        }
      }
      U(ot, E(E({}, le), { delete: function(e) {
        return new ot(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new ot(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = ot.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (Kn(n) ? Promise.resolve(n.databases()).then(function(r) {
            return r.map(function(i) {
              return i.name;
            }).filter(function(i) {
              return i !== Qt;
            });
          }) : In(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return ae(new T.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          J(this, e);
        };
      }, ignoreTransaction: function(e) {
        return B.trans ? tt(B.transless, e) : e();
      }, vip: jn, async: function(e) {
        return function() {
          try {
            var t = Un(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (n) {
            return ae(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = Un(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : j.resolve(r);
        } catch (i) {
          return ae(i);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, t) {
        return t = j.resolve(typeof e == "function" ? ot.ignoreTransaction(e) : e).timeout(t || 6e4), B.trans ? B.trans.waitFor(t) : t;
      }, Promise: j, debug: { get: function() {
        return ke;
      }, set: function(e) {
        hn(e);
      } }, derive: oe, extend: J, props: U, override: Ee, Events: xt, on: Qe, liveQuery: Pr, extendObservabilitySet: on, getByKeyPath: Pe, setByKeyPath: ce, delByKeyPath: function(e, t) {
        typeof t == "string" ? ce(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          ce(e, n, void 0);
        });
      }, shallowClone: jt, deepClone: xe, getObjectDiff: Vn, cmp: $, asap: Oe, minKey: -1 / 0, addons: [], connections: dt, errnames: b, dependencies: cn, cache: it, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), ot.maxKey = kt(ot.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Qe(Pt, function(e) {
        Ye || (e = new CustomEvent(Pn, { detail: e }), Ye = !0, dispatchEvent(e), Ye = !1);
      }), addEventListener(Pn, function(e) {
        e = e.detail, Ye || Yn(e);
      }));
      var vt, Ye = !1, kr = function() {
      };
      return typeof BroadcastChannel < "u" && ((kr = function() {
        (vt = new BroadcastChannel(Pn)).onmessage = function(e) {
          return e.data && Yn(e.data);
        };
      })(), typeof vt.unref == "function" && vt.unref(), Qe(Pt, function(e) {
        Ye || vt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Fe.disableBfCache && e.persisted) {
          ke && console.debug("Dexie: handling persisted pagehide"), vt?.close();
          for (var t = 0, n = dt; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Fe.disableBfCache && e.persisted && (ke && console.debug("Dexie: handling persisted pageshow"), kr(), Yn({ all: new pe(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof He || e instanceof TypeError || e instanceof SyntaxError || !e.name || !k[e.name] ? e : (t = new k[e.name](t || e.message, e), "stack" in e && Z(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, hn(ke), E(Fe, Object.freeze({ __proto__: null, Dexie: Fe, liveQuery: Pr, Entity: ir, cmp: $, PropModification: St, replacePrefix: function(e, t) {
        return new St({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new St({ add: e });
      }, remove: function(e) {
        return new St({ remove: e });
      }, default: Fe, RangeSet: pe, mergeRanges: Dt, rangesOverlap: vr }), { default: Fe }), Fe;
    });
  })(Dr)), Dr.exports;
}
var Ro = No();
const ci = /* @__PURE__ */ Co(Ro), bi = Symbol.for("Dexie"), Cr = globalThis[bi] || (globalThis[bi] = ci);
if (ci.semVer !== Cr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ci.semVer} and ${Cr.semVer}`);
const {
  liveQuery: $o,
  mergeRanges: Xo,
  rangesOverlap: Jo,
  RangeSet: Zo,
  cmp: ea,
  Entity: ta,
  PropModification: na,
  replacePrefix: ra,
  add: ia,
  remove: oa
} = Cr;
function wi(C) {
  return {
    addRecord: P,
    updateRecord: K,
    findChildRecords: _e,
    findChildRecordsByTagName: X,
    instantiate: V,
    ensureRelationship: M,
    findRootSCL: q,
    recordExists: E,
    findOneRecordByAttribute: fe,
    db: C
  };
  async function P(U) {
    const H = {
      ...U,
      id: crypto.randomUUID()
    };
    try {
      const Z = await C.table(H.tagName).add(H), oe = await C.table(H.tagName).get(Z);
      if (!oe) {
        const te = { msg: "could not find added record", table: H.tagName, addedId: Z };
        throw console.error(te), new Error(JSON.stringify(te));
      }
      return oe;
    } catch (Z) {
      const oe = {
        msg: "could not add record",
        db: C.name,
        table: H.tagName,
        recordToAdd: H,
        err: Z
      };
      throw console.error(oe), new Error(JSON.stringify(oe));
    }
  }
  async function K(U) {
    try {
      if (await C.table(U.tagName).update(U.id, U) < 1) {
        const Z = { msg: "nothing has been updated", record: U };
        throw console.error(Z), new Error(JSON.stringify(Z));
      }
    } catch (H) {
      console.error(H);
    }
  }
  async function E(U) {
    return await C.table(U.tagName).where({ id: U.id }).count() > 0;
  }
  async function M(U, H) {
    const Z = U.children?.some(
      (te) => te.id === H.id && te.tagName === H.tagName
    ), oe = H.parent?.id === U.id && H.parent?.tagName === U.tagName;
    Z || (U.children || (U.children = []), U.children.push({
      id: H.id,
      tagName: H.tagName
    }), await C.table(U.tagName).update(U.id, U)), oe || (H.parent = {
      id: U.id,
      tagName: U.tagName
    }, await C.table(H.tagName).update(H.id, H));
  }
  async function q() {
    const U = await C.table("SCL").count();
    if (U === 0) throw new Error("tfindRootSCLhere is no SCL element");
    if (U > 1) throw new Error("there are multiple SCL elements; there can be only one");
    const H = await C.table("SCL").orderBy("id").first();
    if (!H) throw new Error("no root scl found");
    return H;
  }
  function V(U) {
    const H = L(U);
    if (!H)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', U), new Error('record does not have a "uuid" to move to "templateUUID"');
    U.attributes?.push({ name: "templateUuid", value: H }), J(U);
  }
  function L(U) {
    const H = U.attributes?.find((Z) => Z.name === "uuid");
    if (H)
      return H.value;
  }
  function J(U) {
    U.attributes || (U.attributes = []);
    const H = crypto.randomUUID(), Z = U.attributes.findIndex((te) => te.name === "uuid");
    Z >= 0 ? U.attributes[Z].value = H : U.attributes.push({ name: "uuid", value: H });
  }
  async function fe(U, H) {
    return Oi(C, U, H);
  }
  async function _e(U) {
    return !U.children || U.children.length === 0 ? [] : await Promise.all(
      U.children.map(async (Z) => {
        const oe = Z.tagName, te = Z.id;
        return await C.table(oe).get({ id: te });
      })
    );
  }
  async function X(U, H) {
    return !U.children || U.children.length === 0 ? [] : await Promise.all(
      U.children.filter((oe) => oe.tagName === H).map(async (oe) => {
        const te = oe.tagName, Ce = oe.id;
        return await C.table(te).get({ id: Ce });
      })
    );
  }
}
function Kt(C, P) {
  return C.attributes?.find((K) => K.name === P);
}
function Io(C, P, K) {
  C.attributes || (C.attributes = []);
  const E = C.attributes?.findIndex((q) => q.name === P);
  E >= 0 ? C.attributes[E].value = K : C.attributes.push({ name: P, value: K });
}
async function Oi(C, P, K) {
  try {
    return await C.table(P).filter(
      (M) => !!M.attributes?.some((q) => q.name === K.name && q.value === K.value)
    ).first();
  } catch (E) {
    console.error({ msg: "could not find record by attribute", tagName: P, attr: K, err: E });
  }
}
async function aa() {
  const C = localStorage.getItem("currentActiveFileDatabaseName");
  if (!C)
    throw new Error("no active file");
  const P = await Bo(), K = await To({ files: P });
  await Ko(C, K);
}
async function Ko(C, P) {
  const K = new Cr(C);
  await K.open();
  const E = wi(K), M = new Cr(P[0]);
  await M.open();
  const q = wi(M);
  await V(), await L(), await J(), M.close(), K.close();
  async function V() {
    const X = await M.table("Header").orderBy("id").first();
    if (!X) {
      const te = { msg: "Header element is missing in FSD" };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    const U = Kt(X, "uuid");
    if (!U) {
      const te = { msg: "uuid is missing in Header element", header: X };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    const H = Kt(X, "version");
    if (!H) {
      const te = { msg: "version is missing in Header element", header: X };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    const Z = Kt(X, "revision");
    if (!Z) {
      const te = { msg: "revision is missing in Header element", header: X };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    const oe = await M.table("Function").toArray();
    for (const te of oe) {
      const Ce = await li(M, te), Ne = [];
      for (const ie of Ce)
        if (ii(ie, ["Substation", "VoltageLevel", "Bay"])) {
          const xe = await _i(K, ie, "name");
          Ne.push(xe);
        }
      q.instantiate(te);
      const Ee = await E.addRecord(te);
      let Oe = (await q.findChildRecordsByTagName(Ee, "Private")).filter((ie) => Kt(ie, "type")?.value === "eIEC61850-6-100").at(0);
      if (!Oe) {
        const ie = {
          tagName: "Private",
          attributes: [{ name: "type", value: "eIEC61850-6-100" }],
          value: null,
          parent: null,
          namespace: null,
          children: []
        };
        Oe = await E.addRecord(ie), await E.ensureRelationship(Ee, Oe);
      }
      const Pe = {
        tagName: "SclFileReference",
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        attributes: [
          { name: "fileType", value: "FSD" },
          { name: "fileUuid", value: U.value },
          { name: "version", value: H.value },
          { name: "revision", value: Z.value }
        ],
        value: null,
        parent: null,
        children: []
      }, ce = await E.addRecord(Pe);
      await E.ensureRelationship(Oe, ce);
      const jt = await q.findChildRecords(te);
      for (const ie of jt) {
        const xe = await _e(ie);
        E.ensureRelationship(Ee, xe);
      }
      const N = [Ee, ...Ne];
      for (let ie = 0; ie < N.length; ie++) {
        const xe = N[ie], Ft = N[ie + 1];
        Ft && await E.ensureRelationship(Ft, xe);
      }
      const gt = await E.findRootSCL(), ut = N.at(-1);
      gt && ut && await E.ensureRelationship(gt, ut);
    }
  }
  async function L() {
    const X = await M.table("DataTypeTemplates").orderBy("id").first();
    if (!X) {
      console.info("no data type templates, stopping");
      return;
    }
    let U = await K.table("DataTypeTemplates").orderBy("id").first();
    if (!U) {
      const Z = {
        tagName: "DataTypeTemplates",
        namespace: null,
        attributes: null,
        value: null,
        parent: null,
        children: null
      };
      U = await E.addRecord(Z);
      const oe = await E.findRootSCL();
      await E.ensureRelationship(oe, U);
    }
    const H = await q.findChildRecords(X);
    if (H.length === 0) {
      console.info("DataTypeTemplates is empty, stopping.");
      return;
    }
    for (const Z of H) {
      const oe = Kt(Z, "id");
      if (!oe) {
        console.warn("id attribute not found, continuing", Z);
        continue;
      }
      if (await E.findOneRecordByAttribute(
        Z.tagName,
        oe
      ))
        continue;
      const Ce = await _e(Z);
      await E.ensureRelationship(U, Ce);
    }
  }
  async function J() {
    const X = await M.table("FunctionCategory").toArray();
    for (const U of X) {
      const H = await li(M, U), Z = [];
      for (const Ee of H.reverse()) {
        if (ii(Ee, ["Substation", "VoltageLevel", "Bay"])) {
          const se = await _i(K, Ee, "name");
          Z.unshift(se);
        }
        if (ii(Ee, ["Private"])) {
          const se = Z[Z.length - 1];
          if (!se) {
            const Pe = {
              msg: "in the case of function category instantiation private field without a parent (so beeing under SCL root) is considered an error",
              record: Ee,
              path: H,
              newGrandParent: se,
              newParentPath: Z
            };
            throw console.error(Pe), new Error(JSON.stringify(Pe));
          }
          const Oe = await jo(E, Ee, se);
          Z.unshift(Oe);
        }
      }
      const te = [await fe(U), ...Z];
      for (let Ee = 0; Ee < te.length; Ee++) {
        const se = te[Ee], Oe = te[Ee + 1];
        Oe && await E.ensureRelationship(Oe, se);
      }
      const Ce = await E.findRootSCL(), Ne = te.at(-1);
      Ce && Ne && await E.ensureRelationship(Ce, Ne);
    }
  }
  async function fe(X) {
    const U = Kt(X, "uuid");
    if (!U) {
      const te = { msg: "no uuid found in element", funcCatInFSD: X };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    let H = await E.findOneRecordByAttribute(X.tagName, {
      name: "templateUuid",
      value: U.value
    });
    H || (q.instantiate(X), H = await E.addRecord(X));
    const Z = await q.findChildRecordsByTagName(X, "FunctionCatRef");
    for (const te of Z) {
      const Ce = await E.addRecord(te);
      await E.ensureRelationship(H, Ce);
      const Ne = Kt(Ce, "functionUuid");
      if (!Ne) continue;
      const Ee = await E.findOneRecordByAttribute("Function", {
        name: "templateUuid",
        value: Ne.value
      });
      if (!Ee) {
        const Oe = { msg: "could not found function by templateUuid", functionUuidAttr: Ne };
        throw console.error(Oe), new Error(JSON.stringify(Oe));
      }
      const se = Kt(Ee, "uuid");
      if (!se) {
        const Oe = { msg: "function does not have an uuid", funcInASD: Ee };
        throw console.error(Oe), new Error(JSON.stringify(Oe));
      }
      Io(Ce, "functionUuid", se?.value), await E.updateRecord(Ce);
    }
    const oe = await q.findChildRecordsByTagName(X, "SubCategory");
    for (const te of oe) {
      const Ce = await fe(te);
      await E.ensureRelationship(H, Ce);
    }
    return H;
  }
  async function _e(X) {
    const U = await E.addRecord(X), H = await q.findChildRecords(X);
    for (const Z of H) {
      const oe = await _e(Z);
      E.ensureRelationship(U, oe);
    }
    return U;
  }
}
async function _i(C, P, K) {
  const E = Kt(P, K);
  if (!E)
    throw console.error("could not find name of record", P), new Error("could not find name of record");
  const M = await Oi(C, P.tagName, E);
  return M || (await C.table(P.tagName).add(P), P);
}
async function jo(C, P, K) {
  const E = Kt(P, "type");
  if (!E || !E.value) {
    const V = { msg: "type attribute is required but it is missing or empty", typeAttr: E, record: P };
    throw console.error(V), new Error(JSON.stringify(V));
  }
  const M = await C.db.table(P.tagName).where("parent.id").equals(K.id).filter(
    (V) => !!V.attributes?.some((L) => L.name === "type" && L.value === E.value)
  ).first();
  return M || await C.addRecord(P);
}
function ii(C, P) {
  return P.includes(C.tagName);
}
async function Fo(C, P, K) {
  return C.table(P).get(K);
}
async function li(C, P, K = []) {
  if (!P.parent)
    return [];
  const E = await Fo(C, P.parent.tagName, P.parent.id);
  if (!E)
    throw console.error("could not find parent for", P), new Error("could not find parent for record");
  if (!E.parent)
    return [];
  const q = await li(C, E, K);
  return [E, ...q];
}
async function Bo() {
  const { promise: C, resolve: P } = Promise.withResolvers(), { open: K, onChange: E } = Mi({
    accept: "fsd"
  });
  return E((M) => {
    if (M?.length === 0 || M === null) {
      P([]);
      return;
    }
    P(Array.from(M));
  }), K(), C;
}
export {
  aa as default,
  Ko as instantiateFSD
};
