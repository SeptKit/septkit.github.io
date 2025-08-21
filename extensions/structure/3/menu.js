import { p as Ci, F as ki, I as Ai, E as Di, a7 as Ri, a5 as Ii, $ as Hn } from "./runtime-core.esm-bundler-DNW37i4a.js";
function Ni(A) {
  return Ci() ? (ki(A), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function hi() {
  const A = /* @__PURE__ */ new Set(), O = (q) => {
    A.delete(q);
  };
  return {
    on: (q) => {
      A.add(q);
      const z = () => O(q);
      return Ni(z), {
        off: z
      };
    },
    off: O,
    trigger: (...q) => Promise.all(Array.from(A).map((z) => z(...q))),
    clear: () => {
      A.clear();
    }
  };
}
const Ki = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ji = (A, O) => Object.prototype.hasOwnProperty.call(A, O), Bi = Ki ? window.document : void 0;
function Fi(A) {
  var O;
  const K = Hn(A);
  return (O = K?.$el) != null ? O : K;
}
const qi = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Mi(A) {
  if (!A)
    return null;
  if (A instanceof FileList)
    return A;
  const O = new DataTransfer();
  for (const K of A)
    O.items.add(K);
  return O.files;
}
function Li(A = {}) {
  const {
    document: O = Bi
  } = A, K = Ai(Mi(A.initialFiles)), { on: x, trigger: M } = /* @__PURE__ */ hi(), { on: q, trigger: z } = /* @__PURE__ */ hi(), L = Di(() => {
    var W;
    const U = (W = Fi(A.input)) != null ? W : O ? O.createElement("input") : void 0;
    return U && (U.type = "file", U.onchange = (X) => {
      const Z = X.target;
      K.value = Z.files, M(K.value);
    }, U.oncancel = () => {
      z();
    }), U;
  }), J = () => {
    K.value = null, L.value && L.value.value && (L.value.value = "", M(null));
  }, he = (W) => {
    const U = L.value;
    U && (U.multiple = Hn(W.multiple), U.accept = Hn(W.accept), U.webkitdirectory = Hn(W.directory), ji(W, "capture") && (U.capture = Hn(W.capture)));
  }, Ee = (W) => {
    const U = L.value;
    if (!U)
      return;
    const X = {
      ...qi,
      ...A,
      ...W
    };
    he(X), Hn(X.reset) && J(), U.click();
  };
  return Ri(() => {
    he(A);
  }), {
    files: Ii(K),
    open: Ee,
    reset: J,
    onCancel: q,
    onChange: x
  };
}
var Ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vi(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
function Gi(A) {
  if (Object.prototype.hasOwnProperty.call(A, "__esModule")) return A;
  var O = A.default;
  if (typeof O == "function") {
    var K = function x() {
      var M = !1;
      try {
        M = this instanceof x;
      } catch {
      }
      return M ? Reflect.construct(O, arguments, this.constructor) : O.apply(this, arguments);
    };
    K.prototype = O.prototype;
  } else K = {};
  return Object.defineProperty(K, "__esModule", { value: !0 }), Object.keys(A).forEach(function(x) {
    var M = Object.getOwnPropertyDescriptor(A, x);
    Object.defineProperty(K, x, M.get ? M : {
      enumerable: !0,
      get: function() {
        return A[x];
      }
    });
  }), K;
}
var di = {};
const zi = {}, Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zi
}, Symbol.toStringTag, { value: "Module" })), pi = /* @__PURE__ */ Gi(Yi);
var yi;
function Qi() {
  return yi || (yi = 1, (function(A) {
    (function(O) {
      O.parser = function(b, d) {
        return new x(b, d);
      }, O.SAXParser = x, O.SAXStream = Ee, O.createStream = he, O.MAX_BUFFER_LENGTH = 64 * 1024;
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
      O.EVENTS = [
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
      function x(b, d) {
        if (!(this instanceof x))
          return new x(b, d);
        var T = this;
        q(T), T.q = T.c = "", T.bufferCheckPosition = O.MAX_BUFFER_LENGTH, T.opt = d || {}, T.opt.lowercase = T.opt.lowercase || T.opt.lowercasetags, T.looseCase = T.opt.lowercase ? "toLowerCase" : "toUpperCase", T.tags = [], T.closed = T.closedRoot = T.sawRoot = !1, T.tag = T.error = null, T.strict = !!b, T.noscript = !!(b || T.opt.noscript), T.state = R.BEGIN, T.strictEntities = T.opt.strictEntities, T.ENTITIES = T.strictEntities ? Object.create(O.XML_ENTITIES) : Object.create(O.ENTITIES), T.attribList = [], T.opt.xmlns && (T.ns = Object.create(ae)), T.opt.unquotedAttributeValues === void 0 && (T.opt.unquotedAttributeValues = !b), T.trackPosition = T.opt.position !== !1, T.trackPosition && (T.position = T.line = T.column = 0), ut(T, "onready");
      }
      Object.create || (Object.create = function(b) {
        function d() {
        }
        d.prototype = b;
        var T = new d();
        return T;
      }), Object.keys || (Object.keys = function(b) {
        var d = [];
        for (var T in b) b.hasOwnProperty(T) && d.push(T);
        return d;
      });
      function M(b) {
        for (var d = Math.max(O.MAX_BUFFER_LENGTH, 10), T = 0, k = 0, fe = K.length; k < fe; k++) {
          var Q = b[K[k]].length;
          if (Q > d)
            switch (K[k]) {
              case "textNode":
                Te(b);
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
        var be = O.MAX_BUFFER_LENGTH - T;
        b.bufferCheckPosition = be + b.position;
      }
      function q(b) {
        for (var d = 0, T = K.length; d < T; d++)
          b[K[d]] = "";
      }
      function z(b) {
        Te(b), b.cdata !== "" && (ie(b, "oncdata", b.cdata), b.cdata = ""), b.script !== "" && (ie(b, "onscript", b.script), b.script = "");
      }
      x.prototype = {
        end: function() {
          It(this);
        },
        write: We,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          z(this);
        }
      };
      var L;
      try {
        L = pi.Stream;
      } catch {
        L = function() {
        };
      }
      L || (L = function() {
      });
      var J = O.EVENTS.filter(function(b) {
        return b !== "error" && b !== "end";
      });
      function he(b, d) {
        return new Ee(b, d);
      }
      function Ee(b, d) {
        if (!(this instanceof Ee))
          return new Ee(b, d);
        L.apply(this), this._parser = new x(b, d), this.writable = !0, this.readable = !0;
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
            set: function(fe) {
              if (!fe)
                return T.removeAllListeners(k), T._parser["on" + k] = fe, fe;
              T.on(k, fe);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      Ee.prototype = Object.create(L.prototype, {
        constructor: {
          value: Ee
        }
      }), Ee.prototype.write = function(b) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(b)) {
          if (!this._decoder) {
            var d = pi.StringDecoder;
            this._decoder = new d("utf8");
          }
          b = this._decoder.write(b);
        }
        return this._parser.write(b.toString()), this.emit("data", b), !0;
      }, Ee.prototype.end = function(b) {
        return b && b.length && this.write(b), this._parser.end(), !0;
      }, Ee.prototype.on = function(b, d) {
        var T = this;
        return !T._parser["on" + b] && J.indexOf(b) !== -1 && (T._parser["on" + b] = function() {
          var k = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          k.splice(0, 0, b), T.emit.apply(T, k);
        }), L.prototype.on.call(T, b, d);
      };
      var W = "[CDATA[", U = "DOCTYPE", X = "http://www.w3.org/XML/1998/namespace", Z = "http://www.w3.org/2000/xmlns/", ae = { xml: X, xmlns: Z }, te = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ae = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Re = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, xe = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function ce(b) {
        return b === " " || b === `
` || b === "\r" || b === "	";
      }
      function Oe(b) {
        return b === '"' || b === "'";
      }
      function Pe(b) {
        return b === ">" || ce(b);
      }
      function le(b, d) {
        return b.test(d);
      }
      function Bt(b, d) {
        return !le(b, d);
      }
      var R = 0;
      O.STATE = {
        BEGIN: R++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: R++,
        // leading whitespace
        TEXT: R++,
        // general stuff
        TEXT_ENTITY: R++,
        // &amp and such.
        OPEN_WAKA: R++,
        // <
        SGML_DECL: R++,
        // <!BLARG
        SGML_DECL_QUOTED: R++,
        // <!BLARG foo "bar
        DOCTYPE: R++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: R++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: R++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: R++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: R++,
        // <!-
        COMMENT: R++,
        // <!--
        COMMENT_ENDING: R++,
        // <!-- blah -
        COMMENT_ENDED: R++,
        // <!-- blah --
        CDATA: R++,
        // <![CDATA[ something
        CDATA_ENDING: R++,
        // ]
        CDATA_ENDING_2: R++,
        // ]]
        PROC_INST: R++,
        // <?hi
        PROC_INST_BODY: R++,
        // <?hi there
        PROC_INST_ENDING: R++,
        // <?hi "there" ?
        OPEN_TAG: R++,
        // <strong
        OPEN_TAG_SLASH: R++,
        // <strong /
        ATTRIB: R++,
        // <a
        ATTRIB_NAME: R++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: R++,
        // <a foo _
        ATTRIB_VALUE: R++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: R++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: R++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: R++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: R++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: R++,
        // <foo bar=&quot
        CLOSE_TAG: R++,
        // </a
        CLOSE_TAG_SAW_WHITE: R++,
        // </a   >
        SCRIPT: R++,
        // <script> ...
        SCRIPT_ENDING: R++
        // <script> ... <
      }, O.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, O.ENTITIES = {
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
      }, Object.keys(O.ENTITIES).forEach(function(b) {
        var d = O.ENTITIES[b], T = typeof d == "number" ? String.fromCharCode(d) : d;
        O.ENTITIES[b] = T;
      });
      for (var bt in O.STATE)
        O.STATE[O.STATE[bt]] = bt;
      R = O.STATE;
      function ut(b, d, T) {
        b[d] && b[d](T);
      }
      function ie(b, d, T) {
        b.textNode && Te(b), ut(b, d, T);
      }
      function Te(b) {
        b.textNode = Ft(b.opt, b.textNode), b.textNode && ut(b, "ontext", b.textNode), b.textNode = "";
      }
      function Ft(b, d) {
        return b.trim && (d = d.trim()), b.normalize && (d = d.replace(/\s+/g, " ")), d;
      }
      function st(b, d) {
        return Te(b), b.trackPosition && (d += `
Line: ` + b.line + `
Column: ` + b.column + `
Char: ` + b.c), d = new Error(d), b.error = d, ut(b, "onerror", d), b;
      }
      function It(b) {
        return b.sawRoot && !b.closedRoot && ge(b, "Unclosed root tag"), b.state !== R.BEGIN && b.state !== R.BEGIN_WHITESPACE && b.state !== R.TEXT && st(b, "Unexpected end"), Te(b), b.c = "", b.closed = !0, ut(b, "onend"), x.call(b, b.strict, b.opt), b;
      }
      function ge(b, d) {
        if (typeof b != "object" || !(b instanceof x))
          throw new Error("bad call to strictFail");
        b.strict && st(b, d);
      }
      function qe(b) {
        b.strict || (b.tagName = b.tagName[b.looseCase]());
        var d = b.tags[b.tags.length - 1] || b, T = b.tag = { name: b.tagName, attributes: {} };
        b.opt.xmlns && (T.ns = d.ns), b.attribList.length = 0, ie(b, "onopentagstart", T);
      }
      function Me(b, d) {
        var T = b.indexOf(":"), k = T < 0 ? ["", b] : b.split(":"), fe = k[0], Q = k[1];
        return d && b === "xmlns" && (fe = "xmlns", Q = ""), { prefix: fe, local: Q };
      }
      function De(b) {
        if (b.strict || (b.attribName = b.attribName[b.looseCase]()), b.attribList.indexOf(b.attribName) !== -1 || b.tag.attributes.hasOwnProperty(b.attribName)) {
          b.attribName = b.attribValue = "";
          return;
        }
        if (b.opt.xmlns) {
          var d = Me(b.attribName, !0), T = d.prefix, k = d.local;
          if (T === "xmlns")
            if (k === "xml" && b.attribValue !== X)
              ge(
                b,
                "xml: prefix must be bound to " + X + `
Actual: ` + b.attribValue
              );
            else if (k === "xmlns" && b.attribValue !== Z)
              ge(
                b,
                "xmlns: prefix must be bound to " + Z + `
Actual: ` + b.attribValue
              );
            else {
              var fe = b.tag, Q = b.tags[b.tags.length - 1] || b;
              fe.ns === Q.ns && (fe.ns = Object.create(Q.ns)), fe.ns[k] = b.attribValue;
            }
          b.attribList.push([b.attribName, b.attribValue]);
        } else
          b.tag.attributes[b.attribName] = b.attribValue, ie(b, "onattribute", {
            name: b.attribName,
            value: b.attribValue
          });
        b.attribName = b.attribValue = "";
      }
      function Xe(b, d) {
        if (b.opt.xmlns) {
          var T = b.tag, k = Me(b.tagName);
          T.prefix = k.prefix, T.local = k.local, T.uri = T.ns[k.prefix] || "", T.prefix && !T.uri && (ge(b, "Unbound namespace prefix: " + JSON.stringify(b.tagName)), T.uri = k.prefix);
          var fe = b.tags[b.tags.length - 1] || b;
          T.ns && fe.ns !== T.ns && Object.keys(T.ns).forEach(function(dn) {
            ie(b, "onopennamespace", {
              prefix: dn,
              uri: T.ns[dn]
            });
          });
          for (var Q = 0, be = b.attribList.length; Q < be; Q++) {
            var Fe = b.attribList[Q], _e = Fe[0], Nt = Fe[1], Ie = Me(_e, !0), ct = Ie.prefix, Wn = Ie.local, Kt = ct === "" ? "" : T.ns[ct] || "", Ce = {
              name: _e,
              value: Nt,
              prefix: ct,
              local: Wn,
              uri: Kt
            };
            ct && ct !== "xmlns" && !Kt && (ge(b, "Unbound namespace prefix: " + JSON.stringify(ct)), Ce.uri = ct), b.tag.attributes[_e] = Ce, ie(b, "onattribute", Ce);
          }
          b.attribList.length = 0;
        }
        b.tag.isSelfClosing = !!d, b.sawRoot = !0, b.tags.push(b.tag), ie(b, "onopentag", b.tag), d || (!b.noscript && b.tagName.toLowerCase() === "script" ? b.state = R.SCRIPT : b.state = R.TEXT, b.tag = null, b.tagName = ""), b.attribName = b.attribValue = "", b.attribList.length = 0;
      }
      function pn(b) {
        if (!b.tagName) {
          ge(b, "Weird empty close tag."), b.textNode += "</>", b.state = R.TEXT;
          return;
        }
        if (b.script) {
          if (b.tagName !== "script") {
            b.script += "</" + b.tagName + ">", b.tagName = "", b.state = R.SCRIPT;
            return;
          }
          ie(b, "onscript", b.script), b.script = "";
        }
        var d = b.tags.length, T = b.tagName;
        b.strict || (T = T[b.looseCase]());
        for (var k = T; d--; ) {
          var fe = b.tags[d];
          if (fe.name !== k)
            ge(b, "Unexpected close tag");
          else
            break;
        }
        if (d < 0) {
          ge(b, "Unmatched closing tag: " + b.tagName), b.textNode += "</" + b.tagName + ">", b.state = R.TEXT;
          return;
        }
        b.tagName = T;
        for (var Q = b.tags.length; Q-- > d; ) {
          var be = b.tag = b.tags.pop();
          b.tagName = b.tag.name, ie(b, "onclosetag", b.tagName);
          var Fe = {};
          for (var _e in be.ns)
            Fe[_e] = be.ns[_e];
          var Nt = b.tags[b.tags.length - 1] || b;
          b.opt.xmlns && be.ns !== Nt.ns && Object.keys(be.ns).forEach(function(Ie) {
            var ct = be.ns[Ie];
            ie(b, "onclosenamespace", { prefix: Ie, uri: ct });
          });
        }
        d === 0 && (b.closedRoot = !0), b.tagName = b.attribValue = b.attribName = "", b.attribList.length = 0, b.state = R.TEXT;
      }
      function He(b) {
        var d = b.entity, T = d.toLowerCase(), k, fe = "";
        return b.ENTITIES[d] ? b.ENTITIES[d] : b.ENTITIES[T] ? b.ENTITIES[T] : (d = T, d.charAt(0) === "#" && (d.charAt(1) === "x" ? (d = d.slice(2), k = parseInt(d, 16), fe = k.toString(16)) : (d = d.slice(1), k = parseInt(d, 10), fe = k.toString(10))), d = d.replace(/^0+/, ""), isNaN(k) || fe.toLowerCase() !== d ? (ge(b, "Invalid character entity"), "&" + b.entity + ";") : String.fromCodePoint(k));
      }
      function hn(b, d) {
        d === "<" ? (b.state = R.OPEN_WAKA, b.startTagPosition = b.position) : ce(d) || (ge(b, "Non-whitespace before first tag."), b.textNode = d, b.state = R.TEXT);
      }
      function vt(b, d) {
        var T = "";
        return d < b.length && (T = b.charAt(d)), T;
      }
      function We(b) {
        var d = this;
        if (this.error)
          throw this.error;
        if (d.closed)
          return st(
            d,
            "Cannot write after close. Assign an onready handler."
          );
        if (b === null)
          return It(d);
        typeof b == "object" && (b = b.toString());
        for (var T = 0, k = ""; k = vt(b, T++), d.c = k, !!k; )
          switch (d.trackPosition && (d.position++, k === `
` ? (d.line++, d.column = 0) : d.column++), d.state) {
            case R.BEGIN:
              if (d.state = R.BEGIN_WHITESPACE, k === "\uFEFF")
                continue;
              hn(d, k);
              continue;
            case R.BEGIN_WHITESPACE:
              hn(d, k);
              continue;
            case R.TEXT:
              if (d.sawRoot && !d.closedRoot) {
                for (var fe = T - 1; k && k !== "<" && k !== "&"; )
                  k = vt(b, T++), k && d.trackPosition && (d.position++, k === `
` ? (d.line++, d.column = 0) : d.column++);
                d.textNode += b.substring(fe, T - 1);
              }
              k === "<" && !(d.sawRoot && d.closedRoot && !d.strict) ? (d.state = R.OPEN_WAKA, d.startTagPosition = d.position) : (!ce(k) && (!d.sawRoot || d.closedRoot) && ge(d, "Text data outside of root node."), k === "&" ? d.state = R.TEXT_ENTITY : d.textNode += k);
              continue;
            case R.SCRIPT:
              k === "<" ? d.state = R.SCRIPT_ENDING : d.script += k;
              continue;
            case R.SCRIPT_ENDING:
              k === "/" ? d.state = R.CLOSE_TAG : (d.script += "<" + k, d.state = R.SCRIPT);
              continue;
            case R.OPEN_WAKA:
              if (k === "!")
                d.state = R.SGML_DECL, d.sgmlDecl = "";
              else if (!ce(k)) if (le(te, k))
                d.state = R.OPEN_TAG, d.tagName = k;
              else if (k === "/")
                d.state = R.CLOSE_TAG, d.tagName = "";
              else if (k === "?")
                d.state = R.PROC_INST, d.procInstName = d.procInstBody = "";
              else {
                if (ge(d, "Unencoded <"), d.startTagPosition + 1 < d.position) {
                  var Q = d.position - d.startTagPosition;
                  k = new Array(Q).join(" ") + k;
                }
                d.textNode += "<" + k, d.state = R.TEXT;
              }
              continue;
            case R.SGML_DECL:
              if (d.sgmlDecl + k === "--") {
                d.state = R.COMMENT, d.comment = "", d.sgmlDecl = "";
                continue;
              }
              d.doctype && d.doctype !== !0 && d.sgmlDecl ? (d.state = R.DOCTYPE_DTD, d.doctype += "<!" + d.sgmlDecl + k, d.sgmlDecl = "") : (d.sgmlDecl + k).toUpperCase() === W ? (ie(d, "onopencdata"), d.state = R.CDATA, d.sgmlDecl = "", d.cdata = "") : (d.sgmlDecl + k).toUpperCase() === U ? (d.state = R.DOCTYPE, (d.doctype || d.sawRoot) && ge(
                d,
                "Inappropriately located doctype declaration"
              ), d.doctype = "", d.sgmlDecl = "") : k === ">" ? (ie(d, "onsgmldeclaration", d.sgmlDecl), d.sgmlDecl = "", d.state = R.TEXT) : (Oe(k) && (d.state = R.SGML_DECL_QUOTED), d.sgmlDecl += k);
              continue;
            case R.SGML_DECL_QUOTED:
              k === d.q && (d.state = R.SGML_DECL, d.q = ""), d.sgmlDecl += k;
              continue;
            case R.DOCTYPE:
              k === ">" ? (d.state = R.TEXT, ie(d, "ondoctype", d.doctype), d.doctype = !0) : (d.doctype += k, k === "[" ? d.state = R.DOCTYPE_DTD : Oe(k) && (d.state = R.DOCTYPE_QUOTED, d.q = k));
              continue;
            case R.DOCTYPE_QUOTED:
              d.doctype += k, k === d.q && (d.q = "", d.state = R.DOCTYPE);
              continue;
            case R.DOCTYPE_DTD:
              k === "]" ? (d.doctype += k, d.state = R.DOCTYPE) : k === "<" ? (d.state = R.OPEN_WAKA, d.startTagPosition = d.position) : Oe(k) ? (d.doctype += k, d.state = R.DOCTYPE_DTD_QUOTED, d.q = k) : d.doctype += k;
              continue;
            case R.DOCTYPE_DTD_QUOTED:
              d.doctype += k, k === d.q && (d.state = R.DOCTYPE_DTD, d.q = "");
              continue;
            case R.COMMENT:
              k === "-" ? d.state = R.COMMENT_ENDING : d.comment += k;
              continue;
            case R.COMMENT_ENDING:
              k === "-" ? (d.state = R.COMMENT_ENDED, d.comment = Ft(d.opt, d.comment), d.comment && ie(d, "oncomment", d.comment), d.comment = "") : (d.comment += "-" + k, d.state = R.COMMENT);
              continue;
            case R.COMMENT_ENDED:
              k !== ">" ? (ge(d, "Malformed comment"), d.comment += "--" + k, d.state = R.COMMENT) : d.doctype && d.doctype !== !0 ? d.state = R.DOCTYPE_DTD : d.state = R.TEXT;
              continue;
            case R.CDATA:
              k === "]" ? d.state = R.CDATA_ENDING : d.cdata += k;
              continue;
            case R.CDATA_ENDING:
              k === "]" ? d.state = R.CDATA_ENDING_2 : (d.cdata += "]" + k, d.state = R.CDATA);
              continue;
            case R.CDATA_ENDING_2:
              k === ">" ? (d.cdata && ie(d, "oncdata", d.cdata), ie(d, "onclosecdata"), d.cdata = "", d.state = R.TEXT) : k === "]" ? d.cdata += "]" : (d.cdata += "]]" + k, d.state = R.CDATA);
              continue;
            case R.PROC_INST:
              k === "?" ? d.state = R.PROC_INST_ENDING : ce(k) ? d.state = R.PROC_INST_BODY : d.procInstName += k;
              continue;
            case R.PROC_INST_BODY:
              if (!d.procInstBody && ce(k))
                continue;
              k === "?" ? d.state = R.PROC_INST_ENDING : d.procInstBody += k;
              continue;
            case R.PROC_INST_ENDING:
              k === ">" ? (ie(d, "onprocessinginstruction", {
                name: d.procInstName,
                body: d.procInstBody
              }), d.procInstName = d.procInstBody = "", d.state = R.TEXT) : (d.procInstBody += "?" + k, d.state = R.PROC_INST_BODY);
              continue;
            case R.OPEN_TAG:
              le(Ae, k) ? d.tagName += k : (qe(d), k === ">" ? Xe(d) : k === "/" ? d.state = R.OPEN_TAG_SLASH : (ce(k) || ge(d, "Invalid character in tag name"), d.state = R.ATTRIB));
              continue;
            case R.OPEN_TAG_SLASH:
              k === ">" ? (Xe(d, !0), pn(d)) : (ge(d, "Forward-slash in opening tag not followed by >"), d.state = R.ATTRIB);
              continue;
            case R.ATTRIB:
              if (ce(k))
                continue;
              k === ">" ? Xe(d) : k === "/" ? d.state = R.OPEN_TAG_SLASH : le(te, k) ? (d.attribName = k, d.attribValue = "", d.state = R.ATTRIB_NAME) : ge(d, "Invalid attribute name");
              continue;
            case R.ATTRIB_NAME:
              k === "=" ? d.state = R.ATTRIB_VALUE : k === ">" ? (ge(d, "Attribute without value"), d.attribValue = d.attribName, De(d), Xe(d)) : ce(k) ? d.state = R.ATTRIB_NAME_SAW_WHITE : le(Ae, k) ? d.attribName += k : ge(d, "Invalid attribute name");
              continue;
            case R.ATTRIB_NAME_SAW_WHITE:
              if (k === "=")
                d.state = R.ATTRIB_VALUE;
              else {
                if (ce(k))
                  continue;
                ge(d, "Attribute without value"), d.tag.attributes[d.attribName] = "", d.attribValue = "", ie(d, "onattribute", {
                  name: d.attribName,
                  value: ""
                }), d.attribName = "", k === ">" ? Xe(d) : le(te, k) ? (d.attribName = k, d.state = R.ATTRIB_NAME) : (ge(d, "Invalid attribute name"), d.state = R.ATTRIB);
              }
              continue;
            case R.ATTRIB_VALUE:
              if (ce(k))
                continue;
              Oe(k) ? (d.q = k, d.state = R.ATTRIB_VALUE_QUOTED) : (d.opt.unquotedAttributeValues || st(d, "Unquoted attribute value"), d.state = R.ATTRIB_VALUE_UNQUOTED, d.attribValue = k);
              continue;
            case R.ATTRIB_VALUE_QUOTED:
              if (k !== d.q) {
                k === "&" ? d.state = R.ATTRIB_VALUE_ENTITY_Q : d.attribValue += k;
                continue;
              }
              De(d), d.q = "", d.state = R.ATTRIB_VALUE_CLOSED;
              continue;
            case R.ATTRIB_VALUE_CLOSED:
              ce(k) ? d.state = R.ATTRIB : k === ">" ? Xe(d) : k === "/" ? d.state = R.OPEN_TAG_SLASH : le(te, k) ? (ge(d, "No whitespace between attributes"), d.attribName = k, d.attribValue = "", d.state = R.ATTRIB_NAME) : ge(d, "Invalid attribute name");
              continue;
            case R.ATTRIB_VALUE_UNQUOTED:
              if (!Pe(k)) {
                k === "&" ? d.state = R.ATTRIB_VALUE_ENTITY_U : d.attribValue += k;
                continue;
              }
              De(d), k === ">" ? Xe(d) : d.state = R.ATTRIB;
              continue;
            case R.CLOSE_TAG:
              if (d.tagName)
                k === ">" ? pn(d) : le(Ae, k) ? d.tagName += k : d.script ? (d.script += "</" + d.tagName, d.tagName = "", d.state = R.SCRIPT) : (ce(k) || ge(d, "Invalid tagname in closing tag"), d.state = R.CLOSE_TAG_SAW_WHITE);
              else {
                if (ce(k))
                  continue;
                Bt(te, k) ? d.script ? (d.script += "</" + k, d.state = R.SCRIPT) : ge(d, "Invalid tagname in closing tag.") : d.tagName = k;
              }
              continue;
            case R.CLOSE_TAG_SAW_WHITE:
              if (ce(k))
                continue;
              k === ">" ? pn(d) : ge(d, "Invalid characters in closing tag");
              continue;
            case R.TEXT_ENTITY:
            case R.ATTRIB_VALUE_ENTITY_Q:
            case R.ATTRIB_VALUE_ENTITY_U:
              var be, Fe;
              switch (d.state) {
                case R.TEXT_ENTITY:
                  be = R.TEXT, Fe = "textNode";
                  break;
                case R.ATTRIB_VALUE_ENTITY_Q:
                  be = R.ATTRIB_VALUE_QUOTED, Fe = "attribValue";
                  break;
                case R.ATTRIB_VALUE_ENTITY_U:
                  be = R.ATTRIB_VALUE_UNQUOTED, Fe = "attribValue";
                  break;
              }
              if (k === ";") {
                var _e = He(d);
                d.opt.unparsedEntities && !Object.values(O.XML_ENTITIES).includes(_e) ? (d.entity = "", d.state = be, d.write(_e)) : (d[Fe] += _e, d.entity = "", d.state = be);
              } else le(d.entity.length ? xe : Re, k) ? d.entity += k : (ge(d, "Invalid character in entity name"), d[Fe] += "&" + d.entity + k, d.entity = "", d.state = be);
              continue;
            default:
              throw new Error(d, "Unknown state: " + d.state);
          }
        return d.position >= d.bufferCheckPosition && M(d), d;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var b = String.fromCharCode, d = Math.floor, T = function() {
          var k = 16384, fe = [], Q, be, Fe = -1, _e = arguments.length;
          if (!_e)
            return "";
          for (var Nt = ""; ++Fe < _e; ) {
            var Ie = Number(arguments[Fe]);
            if (!isFinite(Ie) || // `NaN`, `+Infinity`, or `-Infinity`
            Ie < 0 || // not a valid Unicode code point
            Ie > 1114111 || // not a valid Unicode code point
            d(Ie) !== Ie)
              throw RangeError("Invalid code point: " + Ie);
            Ie <= 65535 ? fe.push(Ie) : (Ie -= 65536, Q = (Ie >> 10) + 55296, be = Ie % 1024 + 56320, fe.push(Q, be)), (Fe + 1 === _e || fe.length > k) && (Nt += b.apply(null, fe), fe.length = 0);
          }
          return Nt;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: T,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = T;
      })();
    })(A);
  })(di)), di;
}
var Xi = Qi();
const Hi = [".fsd", ".asd", ".ssd", ".scd"], xi = [
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
], ai = "++id, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName";
function Wi(A) {
  return A.reduce(
    (O, K) => (O[K] = ai, O),
    {}
  );
}
var ui = { exports: {} }, $i = ui.exports, mi;
function Ji() {
  return mi || (mi = 1, (function(A, O) {
    (function(K, x) {
      A.exports = x();
    })($i, function() {
      var K = function(e, t) {
        return (K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        })(e, t);
      }, x = function() {
        return (x = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
      };
      function M(e, t, n) {
        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ui, z = Object.keys, L = Array.isArray;
      function J(e, t) {
        return typeof t != "object" || z(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || q.Promise || (q.Promise = Promise);
      var he = Object.getPrototypeOf, Ee = {}.hasOwnProperty;
      function W(e, t) {
        return Ee.call(e, t);
      }
      function U(e, t) {
        typeof t == "function" && (t = t(he(e))), (typeof Reflect > "u" ? z : Reflect.ownKeys)(t).forEach(function(n) {
          Z(e, n, t[n]);
        });
      }
      var X = Object.defineProperty;
      function Z(e, t, n, r) {
        X(e, t, J(n && W(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function ae(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), Z(e.prototype, "constructor", e), { extend: U.bind(null, e.prototype) };
        } };
      }
      var te = Object.getOwnPropertyDescriptor, Ae = [].slice;
      function Re(e, t, n) {
        return Ae.call(e, t, n);
      }
      function xe(e, t) {
        return t(e);
      }
      function ce(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Oe(e) {
        q.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Pe(e, t) {
        if (typeof t == "string" && W(e, t)) return e[t];
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
      function le(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          ce(typeof n != "string" && "length" in n);
          for (var r = 0, i = t.length; r < i; ++r) le(e, t[r], n[r]);
        } else {
          var o, a, u = t.indexOf(".");
          u !== -1 ? (o = t.substr(0, u), (a = t.substr(u + 1)) === "" ? n === void 0 ? L(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : le(u = !(u = e[o]) || !W(e, o) ? e[o] = {} : u, a, n)) : n === void 0 ? L(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function Bt(e) {
        var t, n = {};
        for (t in e) W(e, t) && (n[t] = e[t]);
        return n;
      }
      var R = [].concat;
      function bt(e) {
        return R.apply([], e);
      }
      var $e = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(bt([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return q[e];
      }), ut = new Set($e.map(function(e) {
        return q[e];
      })), ie = null;
      function Te(e) {
        return ie = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var r = ie.get(n);
          if (r) return r;
          if (L(n)) {
            r = [], ie.set(n, r);
            for (var i = 0, o = n.length; i < o; ++i) r.push(t(n[i]));
          } else if (ut.has(n.constructor)) r = n;
          else {
            var a, u = he(n);
            for (a in r = u === Object.prototype ? {} : Object.create(u), ie.set(n, r), n) W(n, a) && (r[a] = t(n[a]));
          }
          return r;
        })(e), ie = null, e;
      }
      var Ft = {}.toString;
      function st(e) {
        return Ft.call(e).slice(8, -1);
      }
      var It = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ge = typeof It == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[It]) && t.apply(e);
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
          if (i = ge(e)) {
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
      var Xe = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, _t = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ke = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(_t), pn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function He(e, t) {
        this.name = e, this.message = t;
      }
      function hn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, i) {
          return i.indexOf(n) === r;
        }).join(`
`);
      }
      function vt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = hn(e, t);
      }
      function We(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = hn(e, this.failures);
      }
      ae(He).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), ae(vt).from(He), ae(We).from(He);
      var b = ke.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), d = He, T = ke.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, o) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = pn[t] || n, this.inner = null);
        }
        return ae(r).from(d), e[t] = r, e;
      }, {});
      T.Syntax = SyntaxError, T.Type = TypeError, T.Range = RangeError;
      var k = _t.reduce(function(e, t) {
        return e[t + "Error"] = T[t], e;
      }, {}), fe = ke.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = T[t]), e;
      }, {});
      function Q() {
      }
      function be(e) {
        return e;
      }
      function Fe(e, t) {
        return e == null || e === be ? t : function(n) {
          return t(e(n));
        };
      }
      function _e(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Nt(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? _e(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? _e(i, this.onerror) : i), o !== void 0 ? o : n;
        };
      }
      function Ie(e, t) {
        return e === Q ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? _e(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? _e(r, this.onerror) : r);
        };
      }
      function ct(e, t) {
        return e === Q ? t : function(n) {
          var r = e.apply(this, arguments);
          J(n, r);
          var i = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? _e(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? _e(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : J(r, n);
        };
      }
      function Wn(e, t) {
        return e === Q ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function Kt(e, t) {
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
      fe.ModifyError = vt, fe.DexieError = He, fe.BulkError = We;
      var Ce = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function dn(e) {
        Ce = e;
      }
      var wt = {}, $n = 100, $e = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, he(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, he(t), e];
      })(), _t = $e[0], ke = $e[1], $e = $e[2], ke = ke && ke.then, Je = _t && _t.constructor, yn = !!$e, Et = function(e, t) {
        xt.push([e, t]), qt && (queueMicrotask(Kr), qt = !1);
      }, mn = !0, qt = !0, Ze = [], Mt = [], vn = be, Le = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, F = Le, xt = [], et = 0, Lt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = F;
        if (typeof e != "function") {
          if (e !== wt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && bn(this, this._value));
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
            }, bn.bind(null, r));
          } catch (o) {
            bn(r, o);
          }
        })(this, e);
      }
      var gn = { get: function() {
        var e = F, t = zt;
        function n(r, i) {
          var o = this, a = !e.global && (e !== F || t !== zt), u = a && !Ve(), c = new j(function(f, p) {
            wn(o, new Jn(tr(r, e, a, u), tr(i, e, a, u), f, p, e));
          });
          return this._consoleTask && (c._consoleTask = this._consoleTask), c;
        }
        return n.prototype = wt, n;
      }, set: function(e) {
        Z(this, "then", e && e.prototype === wt ? gn : { get: function() {
          return e;
        }, set: gn.set });
      } };
      function Jn(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
      }
      function bn(e, t) {
        var n, r;
        Mt.push(t), e._state === null && (n = e._lib && lt(), t = vn(t), e._state = !1, e._value = t, r = e, Ze.some(function(i) {
          return i._value === r._value;
        }) || Ze.push(r), Zn(e), n && ft());
      }
      function Zn(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) wn(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), et === 0 && (++et, Et(function() {
          --et == 0 && _n();
        }, []));
      }
      function wn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++et, Et(Nr, [n, e, t]);
        } else e._listeners.push(t);
      }
      function Nr(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && Mt.length && (Mt = []), r = Ce && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), t._state || Mt.indexOf(i) !== -1 || (function(o) {
            for (var a = Ze.length; a; ) if (Ze[--a]._value === o._value) return Ze.splice(a, 1);
          })(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --et == 0 && _n(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Kr() {
        tt(Le, function() {
          lt() && ft();
        });
      }
      function lt() {
        var e = mn;
        return qt = mn = !1, e;
      }
      function ft() {
        var e, t, n;
        do
          for (; 0 < xt.length; ) for (e = xt, xt = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < xt.length);
        qt = mn = !0;
      }
      function _n() {
        var e = Ze;
        Ze = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = Lt.slice(0), n = t.length; n; ) t[--n]();
      }
      function Ut(e) {
        return new j(wt, !1, e);
      }
      function re(e, t) {
        var n = F;
        return function() {
          var r = lt(), i = F;
          try {
            return Ge(n, !0), e.apply(this, arguments);
          } catch (o) {
            t && t(o);
          } finally {
            Ge(i, !1), r && ft();
          }
        };
      }
      U(j.prototype, { then: gn, _then: function(e, t) {
        wn(this, new Jn(null, null, e, t, F));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : Ut)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : Ut)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return j.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return j.resolve(e()).then(function() {
            return Ut(t);
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
        var e = De.apply(null, arguments).map(Yt);
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
        }) : new j(wt, !0, e);
      }, reject: Ut, race: function() {
        var e = De.apply(null, arguments).map(Yt);
        return new j(function(t, n) {
          e.map(function(r) {
            return j.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return F;
      }, set: function(e) {
        return F = e;
      } }, totalEchoes: { get: function() {
        return zt;
      } }, newPSD: Ue, usePSD: tt, scheduler: { get: function() {
        return Et;
      }, set: function(e) {
        Et = e;
      } }, rejectionMapper: { get: function() {
        return vn;
      }, set: function(e) {
        vn = e;
      } }, follow: function(e, t) {
        return new j(function(n, r) {
          return Ue(function(i, o) {
            var a = F;
            a.unhandleds = [], a.onunhandled = o, a.finalize = _e(function() {
              var u, c = this;
              u = function() {
                c.unhandleds.length === 0 ? i() : o(c.unhandleds[0]);
              }, Lt.push(function f() {
                u(), Lt.splice(Lt.indexOf(f), 1);
              }), ++et, Et(function() {
                --et == 0 && _n();
              }, []);
            }, a.finalize), e();
          }, t, n, r);
        });
      } }), Je && (Je.allSettled && Z(j, "allSettled", function() {
        var e = De.apply(null, arguments).map(Yt);
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
        var e = De.apply(null, arguments).map(Yt);
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
      var de = { awaits: 0, echoes: 0, id: 0 }, jr = 0, Vt = [], Gt = 0, zt = 0, Br = 0;
      function Ue(e, t, n, r) {
        var i = F, o = Object.create(i);
        return o.parent = i, o.ref = 0, o.global = !1, o.id = ++Br, Le.env, o.env = yn ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && J(o, t), ++i.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = tt(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function ht() {
        return de.id || (de.id = ++jr), ++de.awaits, de.echoes += $n, de.id;
      }
      function Ve() {
        return !!de.awaits && (--de.awaits == 0 && (de.id = 0), de.echoes = de.awaits * $n, !0);
      }
      function Yt(e) {
        return de.echoes && e && e.constructor === Je ? (ht(), e.then(function(t) {
          return Ve(), t;
        }, function(t) {
          return Ve(), ue(t);
        })) : e;
      }
      function Fr() {
        var e = Vt[Vt.length - 1];
        Vt.pop(), Ge(e, !1);
      }
      function Ge(e, t) {
        var n, r = F;
        (t ? !de.echoes || Gt++ && e === F : !Gt || --Gt && e === F) || queueMicrotask(t ? (function(i) {
          ++zt, de.echoes && --de.echoes != 0 || (de.echoes = de.awaits = de.id = 0), Vt.push(F), Ge(i, !0);
        }).bind(null, e) : Fr), e !== F && (F = e, r === Le && (Le.env = er()), yn && (n = Le.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(q, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function er() {
        var e = q.Promise;
        return yn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(q, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function tt(e, t, n, r, i) {
        var o = F;
        try {
          return Ge(e, !0), t(n, r, i);
        } finally {
          Ge(o, !1);
        }
      }
      function tr(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var i = F;
          n && ht(), Ge(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ge(i, !1), r && queueMicrotask(Ve);
          }
        };
      }
      function En(e) {
        Promise === Je && de.echoes === 0 ? Gt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ke).indexOf("[native code]") === -1 && (ht = Ve = Q);
      var ue = j.reject, nt = "￿", je = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", nr = "String expected.", dt = [], Qt = "__dbnames", xn = "readonly", Tn = "readwrite";
      function rt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var rr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Xt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Te(t))[e], t;
        };
      }
      function ir() {
        throw T.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function H(e, t) {
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
                  var p = H(i[f], o[f]);
                  if (p !== 0) return p;
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
      function Ht(e, t, n) {
        var r = e.schema.yProps;
        return r ? (t && 0 < n.numFailures && (t = t.filter(function(i, o) {
          return !n.failures[o];
        })), Promise.all(r.map(function(i) {
          return i = i.updatesTable, t ? e.db.table(i).where("k").anyOf(t).delete() : e.db.table(i).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      var ur = (ne.prototype._trans = function(e, t, n) {
        var r = this._tx || F.trans, i = this.name, o = Ce && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function a(f, p, s) {
          if (!s.schema[i]) throw new T.NotFound("Table " + i + " not part of transaction");
          return t(s.idbtrans, s);
        }
        var u = lt();
        try {
          var c = r && r.db._novip === this.db._novip ? r === F.trans ? r._promise(e, a, n) : Ue(function() {
            return r._promise(e, a, n);
          }, { trans: r, transless: F.transless || F }) : (function f(p, s, v, l) {
            if (p.idbdb && (p._state.openComplete || F.letThrough || p._vip)) {
              var h = p._createTransaction(s, v, p._dbSchema);
              try {
                h.create(), p._state.PR1398_maxLoop = 3;
              } catch (m) {
                return m.name === b.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                  return f(p, s, v, l);
                })) : ue(m);
              }
              return h._promise(s, function(m, y) {
                return Ue(function() {
                  return F.trans = h, l(m, y, h);
                });
              }).then(function(m) {
                if (s === "readwrite") try {
                  h.idbtrans.commit();
                } catch {
                }
                return s === "readonly" ? m : h._completion.then(function() {
                  return m;
                });
              });
            }
            if (p._state.openComplete) return ue(new T.DatabaseClosed(p._state.dbOpenError));
            if (!p._state.isBeingOpened) {
              if (!p._state.autoOpen) return ue(new T.DatabaseClosed());
              p.open().catch(Q);
            }
            return p._state.dbReadyPromise.then(function() {
              return f(p, s, v, l);
            });
          })(this.db, e, [this.name], a);
          return o && (c._consoleTask = o, c = c.catch(function(f) {
            return console.trace(f), ue(f);
          })), c;
        } finally {
          u && ft();
        }
      }, ne.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? ue(new T.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(i) {
            return n.hook.reading.fire(i);
          });
        }).then(t);
      }, ne.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (L(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = z(e);
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
        !n && Ce && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function i(u, c) {
          return H(u, c) === 0;
        }
        var a = t.reduce(function(s, c) {
          var f = s[0], p = s[1], s = r[c], v = e[c];
          return [f || s, f || !s ? rt(p, s && s.multi ? function(l) {
            return l = Pe(l, c), L(l) && l.some(function(h) {
              return i(v, h);
            });
          } : function(l) {
            return i(v, Pe(l, c));
          }) : p];
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
          function p() {
            this.constructor = c;
          }
          K(c, f), c.prototype = f === null ? Object.create(f) : (p.prototype = f.prototype, new p());
        })(i, t = e), Object.defineProperty(i.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
          return r;
        }, e = i);
        for (var o = /* @__PURE__ */ new Set(), a = e.prototype; a; a = he(a)) Object.getOwnPropertyNames(a).forEach(function(c) {
          return o.add(c);
        });
        function u(c) {
          if (!c) return c;
          var f, p = Object.create(e.prototype);
          for (f in c) if (!o.has(f)) try {
            p[f] = c[f];
          } catch {
          }
          return p;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e;
      }, ne.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          J(this, e);
        });
      }, ne.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
        return o && i && (a = Xt(o)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "add", keys: t != null ? [t] : null, values: [a] });
        }).then(function(u) {
          return u.numFailures ? j.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (o) try {
            le(e, o, u);
          } catch {
          }
          return u;
        });
      }, ne.prototype.update = function(e, t) {
        return typeof e != "object" || L(e) ? this.where(":id").equals(e).modify(t) : (e = Pe(e, this.schema.primKey.keyPath), e === void 0 ? ue(new T.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ne.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
        return o && i && (a = Xt(o)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "put", values: [a], keys: t != null ? [t] : null });
        }).then(function(u) {
          return u.numFailures ? j.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (o) try {
            le(e, o, u);
          } catch {
          }
          return u;
        });
      }, ne.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] }).then(function(r) {
            return Ht(t, [e], r);
          }).then(function(r) {
            return r.numFailures ? j.reject(r.failures[0]) : void 0;
          });
        });
      }, ne.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: rr }).then(function(n) {
            return Ht(e, null, n);
          });
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
          var c = e.length, f = f && u ? e.map(Xt(f)) : e;
          return r.core.mutate({ trans: a, type: "add", keys: i, values: f, wantResults: o }).then(function(h) {
            var s = h.numFailures, v = h.results, l = h.lastResult, h = h.failures;
            if (s === 0) return o ? v : l;
            throw new We("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(c, " operations failed"), h);
          });
        });
      }, ne.prototype.bulkPut = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var f = r.schema.primKey, u = f.auto, f = f.keyPath;
          if (f && i) throw new T.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var c = e.length, f = f && u ? e.map(Xt(f)) : e;
          return r.core.mutate({ trans: a, type: "put", keys: i, values: f, wantResults: o }).then(function(h) {
            var s = h.numFailures, v = h.results, l = h.lastResult, h = h.failures;
            if (s === 0) return o ? v : l;
            throw new We("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(c, " operations failed"), h);
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
              var l = s.key, h = s.changes, m = u[v];
              if (m) {
                for (var y = 0, g = Object.keys(h); y < g.length; y++) {
                  var w = g[y], _ = h[w];
                  if (w === t.schema.primKey.keyPath) {
                    if (H(_, l) !== 0) throw new T.Constraint("Cannot update primary key in bulkUpdate()");
                  } else le(m, w, _);
                }
                o.push(v), c.push(l), f.push(m);
              }
            });
            var p = c.length;
            return n.mutate({ trans: a, type: "put", keys: c, values: f, updates: { keys: r, changeSpecs: i } }).then(function(s) {
              var v = s.numFailures, l = s.failures;
              if (v === 0) return p;
              for (var h = 0, m = Object.keys(l); h < m.length; h++) {
                var y, g = m[h], w = o[Number(g)];
                w != null && (y = l[g], delete l[g], l[w] = y);
              }
              throw new We("".concat(t.name, ".bulkUpdate(): ").concat(v, " of ").concat(p, " operations failed"), l);
            });
          });
        });
      }, ne.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e }).then(function(i) {
            return Ht(t, e, i);
          });
        }).then(function(a) {
          var i = a.numFailures, o = a.lastResult, a = a.failures;
          if (i === 0) return o;
          throw new We("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), a);
        });
      }, ne);
      function ne() {
      }
      function Tt(e) {
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
            u = u || Wn;
            var p = { subscribers: [], fire: c = c || Q, subscribe: function(s) {
              p.subscribers.indexOf(s) === -1 && (p.subscribers.push(s), p.fire = u(p.fire, s));
            }, unsubscribe: function(s) {
              p.subscribers = p.subscribers.filter(function(v) {
                return v !== s;
              }), p.fire = p.subscribers.reduce(u, c);
            } };
            return n[a] = t[a] = p;
          }
          z(f = a).forEach(function(s) {
            var v = f[s];
            if (L(v)) o(s, f[s][0], f[s][1]);
            else {
              if (v !== "asap") throw new T.InvalidArgument("Invalid event config");
              var l = o(s, be, function() {
                for (var h = arguments.length, m = new Array(h); h--; ) m[h] = arguments[h];
                l.subscribers.forEach(function(y) {
                  Oe(function() {
                    y.apply(null, m);
                  });
                });
              });
            }
          });
        }
      }
      function St(e, t) {
        return ae(t).from({ prototype: e }), t;
      }
      function pt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Sn(e, t) {
        e.filter = rt(e.filter, t);
      }
      function On(e, t, n) {
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
      function $t(e, t, n, r) {
        var i = e.replayFilter ? rt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, a = function(u, c, f) {
            var p, s;
            i && !i(c, f, function(v) {
              return c.stop(v);
            }, function(v) {
              return c.fail(v);
            }) || ((s = "" + (p = c.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(p)), W(o, s) || (o[s] = !0, t(u, c, f)));
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
      var Ot = (lr.prototype.execute = function(e) {
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
      var qr = (ee.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ue.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, ue.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = rt(t.algorithm, e);
      }, ee.prototype._iterate = function(e, t) {
        return $t(this._ctx, e, t, this._ctx.table.core);
      }, ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && J(n, e), t._ctx = n, t;
      }, ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return $t(t, e, n, t.table.core);
        });
      }, ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, i = r.table.core;
          if (pt(r, !0)) return i.count({ trans: n, query: { index: Wt(r, i.schema), range: r.range } }).then(function(a) {
            return Math.min(a, r.limit);
          });
          var o = 0;
          return $t(r, function() {
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
          return H(o(c, i), o(f, i)) * a;
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
          return $t(r, function(u) {
            return a.push(u);
          }, n, r.table.core).then(function() {
            return a;
          });
        }, e);
      }, ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, pt(t) ? On(t, function() {
          var n = e;
          return function(r, i) {
            return n === 0 || (n === 1 ? --n : i(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : On(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), On(this._ctx, function() {
          var t = e;
          return function(n, r, i) {
            return --t <= 0 && r(i), 0 <= t;
          };
        }, !0), this;
      }, ee.prototype.until = function(e, t) {
        return Sn(this._ctx, function(n, r, i) {
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
        return Sn(this._ctx, function(n) {
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
        return Sn(this._ctx, function(i) {
          var r = i.primaryKey.toString(), i = W(t, r);
          return t[r] = !0, !i;
        }), this;
      }, ee.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var i, o, a;
          a = typeof e == "function" ? e : (i = z(e), o = i.length, function(g) {
            for (var w = !1, _ = 0; _ < o; ++_) {
              var E = i[_], S = e[E], D = Pe(g, E);
              S instanceof Ot ? (le(g, E, S.execute(D)), w = !0) : D !== S && (le(g, E, S), w = !0);
            }
            return w;
          });
          var u = n.table.core, s = u.schema.primaryKey, c = s.outbound, f = s.extractKey, p = 200, s = t.db._options.modifyChunkSize;
          s && (p = typeof s == "object" ? s[u.name] || s["*"] || 200 : s);
          function v(g, E) {
            var _ = E.failures, E = E.numFailures;
            h += g - E;
            for (var S = 0, D = z(_); S < D.length; S++) {
              var P = D[S];
              l.push(_[P]);
            }
          }
          var l = [], h = 0, m = [], y = e === fr;
          return t.clone().primaryKeys().then(function(g) {
            function w(E) {
              var S = Math.min(p, g.length - E), D = g.slice(E, E + S);
              return (y ? Promise.resolve([]) : u.getMany({ trans: r, keys: D, cache: "immutable" })).then(function(P) {
                var C = [], N = [], I = c ? [] : null, B = y ? D : [];
                if (!y) for (var Y = 0; Y < S; ++Y) {
                  var $ = P[Y], G = { value: Te($), primKey: g[E + Y] };
                  a.call(G, G.value, G) !== !1 && (G.value == null ? B.push(g[E + Y]) : c || H(f($), f(G.value)) === 0 ? (N.push(G.value), c && I.push(g[E + Y])) : (B.push(g[E + Y]), C.push(G.value)));
                }
                return Promise.resolve(0 < C.length && u.mutate({ trans: r, type: "add", values: C }).then(function(oe) {
                  for (var V in oe.failures) B.splice(parseInt(V), 1);
                  v(C.length, oe);
                })).then(function() {
                  return (0 < N.length || _ && typeof e == "object") && u.mutate({ trans: r, type: "put", keys: I, values: N, criteria: _, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < E }).then(function(oe) {
                    return v(N.length, oe);
                  });
                }).then(function() {
                  return (0 < B.length || _ && y) && u.mutate({ trans: r, type: "delete", keys: B, criteria: _, isAdditionalChunk: 0 < E }).then(function(oe) {
                    return Ht(n.table, B, oe);
                  }).then(function(oe) {
                    return v(B.length, oe);
                  });
                }).then(function() {
                  return g.length > E + S && w(E + p);
                });
              });
            }
            var _ = pt(n) && n.limit === 1 / 0 && (typeof e != "function" || y) && { index: n.index, range: n.range };
            return w(0).then(function() {
              if (0 < l.length) throw new vt("Error modifying one or more objects", l, h, m);
              return g.length;
            });
          });
        });
      }, ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !pt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(fr) : this._write(function(n) {
          var r = e.table.core.schema.primaryKey, i = t;
          return e.table.core.count({ trans: n, query: { index: r, range: i } }).then(function(o) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: i }).then(function(c) {
              var u = c.failures, c = c.numFailures;
              if (c) throw new vt("Could not delete some values", Object.keys(u).map(function(f) {
                return u[f];
              }), o - c);
              return o - c;
            });
          });
        });
      }, ee);
      function ee() {
      }
      var fr = function(e, t) {
        return t.value = null;
      };
      function Mr(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Lr(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function Se(e, t, n) {
        return e = e instanceof dr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function yt(e) {
        return new e.Collection(e, function() {
          return hr("");
        }).limit(0);
      }
      function Jt(e, t, n, r) {
        var i, o, a, u, c, f, p, s = n.length;
        if (!n.every(function(h) {
          return typeof h == "string";
        })) return Se(e, nr);
        function v(h) {
          i = h === "next" ? function(y) {
            return y.toUpperCase();
          } : function(y) {
            return y.toLowerCase();
          }, o = h === "next" ? function(y) {
            return y.toLowerCase();
          } : function(y) {
            return y.toUpperCase();
          }, a = h === "next" ? Mr : Lr;
          var m = n.map(function(y) {
            return { lower: o(y), upper: i(y) };
          }).sort(function(y, g) {
            return a(y.lower, g.lower);
          });
          u = m.map(function(y) {
            return y.upper;
          }), c = m.map(function(y) {
            return y.lower;
          }), p = (f = h) === "next" ? "" : r;
        }
        v("next"), e = new e.Collection(e, function() {
          return ze(u[0], c[s - 1] + r);
        }), e._ondirectionchange = function(h) {
          v(h);
        };
        var l = 0;
        return e._addAlgorithm(function(h, m, y) {
          var g = h.key;
          if (typeof g != "string") return !1;
          var w = o(g);
          if (t(w, c, l)) return !0;
          for (var _ = null, E = l; E < s; ++E) {
            var S = (function(D, P, C, N, I, B) {
              for (var Y = Math.min(D.length, N.length), $ = -1, G = 0; G < Y; ++G) {
                var oe = P[G];
                if (oe !== N[G]) return I(D[G], C[G]) < 0 ? D.substr(0, G) + C[G] + C.substr(G + 1) : I(D[G], N[G]) < 0 ? D.substr(0, G) + N[G] + C.substr(G + 1) : 0 <= $ ? D.substr(0, $) + P[$] + C.substr($ + 1) : null;
                I(D[G], oe) < 0 && ($ = G);
              }
              return Y < N.length && B === "next" ? D + C.substr(D.length) : Y < D.length && B === "prev" ? D.substr(0, C.length) : $ < 0 ? null : D.substr(0, $) + N[$] + C.substr($ + 1);
            })(g, w, u[E], c[E], a, f);
            S === null && _ === null ? l = E + 1 : (_ === null || 0 < a(_, S)) && (_ = S);
          }
          return m(_ !== null ? function() {
            h.continue(_ + p);
          } : y), !1;
        }), e;
      }
      function ze(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function hr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var dr = (Object.defineProperty(pe.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), pe.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? yt(this) : new this.Collection(this, function() {
            return ze(e, t, !n, !r);
          });
        } catch {
          return Se(this, je);
        }
      }, pe.prototype.equals = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return hr(e);
        });
      }, pe.prototype.above = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return ze(e, void 0, !0);
        });
      }, pe.prototype.aboveOrEqual = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return ze(e, void 0, !1);
        });
      }, pe.prototype.below = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return ze(void 0, e, !1, !0);
        });
      }, pe.prototype.belowOrEqual = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return ze(void 0, e);
        });
      }, pe.prototype.startsWith = function(e) {
        return typeof e != "string" ? Se(this, nr) : this.between(e, e + nt, !0, !0);
      }, pe.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Jt(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], nt);
      }, pe.prototype.equalsIgnoreCase = function(e) {
        return Jt(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, pe.prototype.anyOfIgnoreCase = function() {
        var e = De.apply(Me, arguments);
        return e.length === 0 ? yt(this) : Jt(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, pe.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = De.apply(Me, arguments);
        return e.length === 0 ? yt(this) : Jt(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, nt);
      }, pe.prototype.anyOf = function() {
        var e = this, t = De.apply(Me, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return Se(this, je);
        }
        if (t.length === 0) return yt(this);
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
      }, pe.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, pe.prototype.noneOf = function() {
        var e = De.apply(Me, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Se(this, je);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, pe.prototype.inAnyRange = function(g, t) {
        var n = this, r = this._cmp, i = this._ascending, o = this._descending, a = this._min, u = this._max;
        if (g.length === 0) return yt(this);
        if (!g.every(function(w) {
          return w[0] !== void 0 && w[1] !== void 0 && i(w[0], w[1]) <= 0;
        })) return Se(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", T.InvalidArgument);
        var c = !t || t.includeLowers !== !1, f = t && t.includeUppers === !0, p, s = i;
        function v(w, _) {
          return s(w[0], _[0]);
        }
        try {
          (p = g.reduce(function(w, _) {
            for (var E = 0, S = w.length; E < S; ++E) {
              var D = w[E];
              if (r(_[0], D[1]) < 0 && 0 < r(_[1], D[0])) {
                D[0] = a(D[0], _[0]), D[1] = u(D[1], _[1]);
                break;
              }
            }
            return E === S && w.push(_), w;
          }, [])).sort(v);
        } catch {
          return Se(this, je);
        }
        var l = 0, h = f ? function(w) {
          return 0 < i(w, p[l][1]);
        } : function(w) {
          return 0 <= i(w, p[l][1]);
        }, m = c ? function(w) {
          return 0 < o(w, p[l][0]);
        } : function(w) {
          return 0 <= o(w, p[l][0]);
        }, y = h, g = new this.Collection(this, function() {
          return ze(p[0][0], p[p.length - 1][1], !c, !f);
        });
        return g._ondirectionchange = function(w) {
          s = w === "next" ? (y = h, i) : (y = m, o), p.sort(v);
        }, g._addAlgorithm(function(w, _, E) {
          for (var S, D = w.key; y(D); ) if (++l === p.length) return _(E), !1;
          return !h(S = D) && !m(S) || (n._cmp(D, p[l][1]) === 0 || n._cmp(D, p[l][0]) === 0 || _(function() {
            s === i ? w.continue(p[l][0]) : w.continue(p[l][1]);
          }), !1);
        }), g;
      }, pe.prototype.startsWithAnyOf = function() {
        var e = De.apply(Me, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? yt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + nt];
        })) : Se(this, "startsWithAnyOf() only works with strings");
      }, pe);
      function pe() {
      }
      function Ne(e) {
        return re(function(t) {
          return Pt(t), e(t.target.error), !1;
        });
      }
      function Pt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Ct = "storagemutated", Pn = "x-storagemutated-1", Ye = Tt(null, Ct), Ur = (Ke.prototype._lock = function() {
        return ce(!F.global), ++this._reculock, this._reculock !== 1 || F.global || (F.lockOwnerFor = this), this;
      }, Ke.prototype._unlock = function() {
        if (ce(!F.global), --this._reculock == 0) for (F.global || (F.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            tt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Ke.prototype._locked = function() {
        return this._reculock && F.lockOwnerFor !== this;
      }, Ke.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (ce(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new T.DatabaseClosed(r);
          case "MissingAPIError":
            throw new T.MissingAPI(r.message, r);
          default:
            throw new T.OpenFailed(r);
        }
        if (!this.active) throw new T.TransactionInactive();
        return ce(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = re(function(i) {
          Pt(i), t._reject(e.error);
        }), e.onabort = re(function(i) {
          Pt(i), t.active && t._reject(new T.Abort(e.error)), t.active = !1, t.on("abort").fire(i);
        }), e.oncomplete = re(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Ye.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Ke.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ue(new T.ReadOnly("Transaction is readonly"));
        if (!this.active) return ue(new T.TransactionInactive());
        if (this._locked()) return new j(function(o, a) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(o, a);
          }, F]);
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
        if (W(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new T.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, Ke);
      function Ke() {
      }
      function Cn(e, t, n, r, i, o, a, u) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: i, compound: o, src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + pr(t), type: u };
      }
      function pr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function kn(e, t, n) {
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
      function An(e) {
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
      function yr(e) {
        return [].slice.call(e);
      }
      var Vr = 0;
      function At(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Gr(e, t, c) {
        function r(y) {
          if (y.type === 3) return null;
          if (y.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var l = y.lower, h = y.upper, m = y.lowerOpen, y = y.upperOpen;
          return l === void 0 ? h === void 0 ? null : t.upperBound(h, !!y) : h === void 0 ? t.lowerBound(l, !!m) : t.bound(l, h, !!m, !!y);
        }
        function i(v) {
          var l, h = v.name;
          return { name: h, schema: v, mutate: function(m) {
            var y = m.trans, g = m.type, w = m.keys, _ = m.values, E = m.range;
            return new Promise(function(S, D) {
              S = re(S);
              var P = y.objectStore(h), C = P.keyPath == null, N = g === "put" || g === "add";
              if (!N && g !== "delete" && g !== "deleteRange") throw new Error("Invalid operation type: " + g);
              var I, B = (w || _ || { length: 1 }).length;
              if (w && _ && w.length !== _.length) throw new Error("Given keys array must have same length as given values array.");
              if (B === 0) return S({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Y(we) {
                ++oe, Pt(we);
              }
              var $ = [], G = [], oe = 0;
              if (g === "deleteRange") {
                if (E.type === 4) return S({ numFailures: oe, failures: G, results: [], lastResult: void 0 });
                E.type === 3 ? $.push(I = P.clear()) : $.push(I = P.delete(r(E)));
              } else {
                var C = N ? C ? [_, w] : [_, null] : [w, null], V = C[0], me = C[1];
                if (N) for (var ve = 0; ve < B; ++ve) $.push(I = me && me[ve] !== void 0 ? P[g](V[ve], me[ve]) : P[g](V[ve])), I.onerror = Y;
                else for (ve = 0; ve < B; ++ve) $.push(I = P[g](V[ve])), I.onerror = Y;
              }
              function fn(we) {
                we = we.target.result, $.forEach(function(at, Xn) {
                  return at.error != null && (G[Xn] = at.error);
                }), S({ numFailures: oe, failures: G, results: g === "delete" ? w : $.map(function(at) {
                  return at.result;
                }), lastResult: we });
              }
              I.onerror = function(we) {
                Y(we), fn(we);
              }, I.onsuccess = fn;
            });
          }, getMany: function(m) {
            var y = m.trans, g = m.keys;
            return new Promise(function(w, _) {
              w = re(w);
              for (var E, S = y.objectStore(h), D = g.length, P = new Array(D), C = 0, N = 0, I = function($) {
                $ = $.target, P[$._pos] = $.result, ++N === C && w(P);
              }, B = Ne(_), Y = 0; Y < D; ++Y) g[Y] != null && ((E = S.get(g[Y]))._pos = Y, E.onsuccess = I, E.onerror = B, ++C);
              C === 0 && w(P);
            });
          }, get: function(m) {
            var y = m.trans, g = m.key;
            return new Promise(function(w, _) {
              w = re(w);
              var E = y.objectStore(h).get(g);
              E.onsuccess = function(S) {
                return w(S.target.result);
              }, E.onerror = Ne(_);
            });
          }, query: (l = f, function(m) {
            return new Promise(function(y, g) {
              y = re(y);
              var w, _, E, C = m.trans, S = m.values, D = m.limit, I = m.query, P = D === 1 / 0 ? void 0 : D, N = I.index, I = I.range, C = C.objectStore(h), N = N.isPrimaryKey ? C : C.index(N.name), I = r(I);
              if (D === 0) return y({ result: [] });
              l ? ((P = S ? N.getAll(I, P) : N.getAllKeys(I, P)).onsuccess = function(B) {
                return y({ result: B.target.result });
              }, P.onerror = Ne(g)) : (w = 0, _ = !S && "openKeyCursor" in N ? N.openKeyCursor(I) : N.openCursor(I), E = [], _.onsuccess = function(B) {
                var Y = _.result;
                return Y ? (E.push(S ? Y.value : Y.primaryKey), ++w === D ? y({ result: E }) : void Y.continue()) : y({ result: E });
              }, _.onerror = Ne(g));
            });
          }), openCursor: function(m) {
            var y = m.trans, g = m.values, w = m.query, _ = m.reverse, E = m.unique;
            return new Promise(function(S, D) {
              S = re(S);
              var N = w.index, P = w.range, C = y.objectStore(h), C = N.isPrimaryKey ? C : C.index(N.name), N = _ ? E ? "prevunique" : "prev" : E ? "nextunique" : "next", I = !g && "openKeyCursor" in C ? C.openKeyCursor(r(P), N) : C.openCursor(r(P), N);
              I.onerror = Ne(D), I.onsuccess = re(function(B) {
                var Y, $, G, oe, V = I.result;
                V ? (V.___id = ++Vr, V.done = !1, Y = V.continue.bind(V), $ = ($ = V.continuePrimaryKey) && $.bind(V), G = V.advance.bind(V), oe = function() {
                  throw new Error("Cursor not stopped");
                }, V.trans = y, V.stop = V.continue = V.continuePrimaryKey = V.advance = function() {
                  throw new Error("Cursor not started");
                }, V.fail = re(D), V.next = function() {
                  var me = this, ve = 1;
                  return this.start(function() {
                    return ve-- ? me.continue() : me.stop();
                  }).then(function() {
                    return me;
                  });
                }, V.start = function(me) {
                  function ve() {
                    if (I.result) try {
                      me();
                    } catch (we) {
                      V.fail(we);
                    }
                    else V.done = !0, V.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, V.stop();
                  }
                  var fn = new Promise(function(we, at) {
                    we = re(we), I.onerror = Ne(at), V.fail = at, V.stop = function(Xn) {
                      V.stop = V.continue = V.continuePrimaryKey = V.advance = oe, we(Xn);
                    };
                  });
                  return I.onsuccess = re(function(we) {
                    I.onsuccess = ve, ve();
                  }), V.continue = Y, V.continuePrimaryKey = $, V.advance = G, ve(), fn;
                }, S(V)) : S(null);
              }, D);
            });
          }, count: function(m) {
            var y = m.query, g = m.trans, w = y.index, _ = y.range;
            return new Promise(function(E, S) {
              var D = g.objectStore(h), P = w.isPrimaryKey ? D : D.index(w.name), D = r(_), P = D ? P.count(D) : P.count();
              P.onsuccess = re(function(C) {
                return E(C.target.result);
              }), P.onerror = Ne(S);
            });
          } };
        }
        var o, a, u, p = (a = c, u = yr((o = e).objectStoreNames), { schema: { name: o.name, tables: u.map(function(v) {
          return a.objectStore(v);
        }).map(function(v) {
          var l = v.keyPath, y = v.autoIncrement, h = L(l), m = {}, y = { name: v.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: l == null, compound: h, keyPath: l, autoIncrement: y, unique: !0, extractKey: An(l) }, indexes: yr(v.indexNames).map(function(g) {
            return v.index(g);
          }).map(function(E) {
            var w = E.name, _ = E.unique, S = E.multiEntry, E = E.keyPath, S = { name: w, compound: L(E), keyPath: E, unique: _, multiEntry: S, extractKey: An(E) };
            return m[At(E)] = S;
          }), getIndexByKeyPath: function(g) {
            return m[At(g)];
          } };
          return m[":id"] = y.primaryKey, l != null && (m[At(l)] = y.primaryKey), y;
        }) }, hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), c = p.schema, f = p.hasGetAll, p = c.tables.map(i), s = {};
        return p.forEach(function(v) {
          return s[v.name] = v;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(v) {
          if (!s[v]) throw new Error("Table '".concat(v, "' not found"));
          return s[v];
        }, MIN_KEY: -1 / 0, MAX_KEY: kt(t), schema: c };
      }
      function zr(e, t, n, r) {
        var i = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = Gr(t, i, r), e.dbcore.reduce(function(o, a) {
          return a = a.create, x(x({}, o), a(o));
        }, r)) };
      }
      function Zt(e, r) {
        var n = r.db, r = zr(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var o = i.name;
          e.core.schema.tables.some(function(a) {
            return a.name === o;
          }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
        });
      }
      function en(e, t, n, r) {
        n.forEach(function(i) {
          var o = r[i];
          t.forEach(function(a) {
            var u = (function c(f, p) {
              return te(f, p) || (f = he(f)) && c(f, p);
            })(a, i);
            (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? Z(a, i, { get: function() {
              return this.table(i);
            }, set: function(c) {
              X(this, i, { value: c, writable: !0, configurable: !0, enumerable: !0 });
            } }) : a[i] = new e.Table(i, o));
          });
        });
      }
      function Dn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function Yr(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Qr(e, t, n, r) {
        var i = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = kn("$meta", vr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(n), o._completion.catch(r);
        var a = o._reject.bind(o), u = F.transless || F;
        Ue(function() {
          return F.trans = o, F.transless = u, t !== 0 ? (Zt(e, n), f = t, ((c = o).storeNames.includes("$meta") ? c.table("$meta").get("version").then(function(p) {
            return p ?? f;
          }) : j.resolve(f)).then(function(p) {
            return v = p, l = o, h = n, m = [], p = (s = e)._versions, y = s._dbSchema = nn(0, s.idbdb, h), (p = p.filter(function(g) {
              return g._cfg.version >= v;
            })).length !== 0 ? (p.forEach(function(g) {
              m.push(function() {
                var w = y, _ = g._cfg.dbschema;
                rn(s, w, h), rn(s, _, h), y = s._dbSchema = _;
                var E = Rn(w, _);
                E.add.forEach(function(N) {
                  In(h, N[0], N[1].primKey, N[1].indexes);
                }), E.change.forEach(function(N) {
                  if (N.recreate) throw new T.Upgrade("Not yet support for changing primary key");
                  var I = h.objectStore(N.name);
                  N.add.forEach(function(B) {
                    return tn(I, B);
                  }), N.change.forEach(function(B) {
                    I.deleteIndex(B.name), tn(I, B);
                  }), N.del.forEach(function(B) {
                    return I.deleteIndex(B);
                  });
                });
                var S = g._cfg.contentUpgrade;
                if (S && g._cfg.version > v) {
                  Zt(s, h), l._memoizedTables = {};
                  var D = Bt(_);
                  E.del.forEach(function(N) {
                    D[N] = w[N];
                  }), Dn(s, [s.Transaction.prototype]), en(s, [s.Transaction.prototype], z(D), D), l.schema = D;
                  var P, C = Xe(S);
                  return C && ht(), E = j.follow(function() {
                    var N;
                    (P = S(l)) && C && (N = Ve.bind(null, null), P.then(N, N));
                  }), P && typeof P.then == "function" ? j.resolve(P) : E.then(function() {
                    return P;
                  });
                }
              }), m.push(function(w) {
                var _, E, S = g._cfg.dbschema;
                _ = S, E = w, [].slice.call(E.db.objectStoreNames).forEach(function(D) {
                  return _[D] == null && E.db.deleteObjectStore(D);
                }), Dn(s, [s.Transaction.prototype]), en(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
              }), m.push(function(w) {
                s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === g._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(_) {
                  return _ !== "$meta";
                })) : w.objectStore("$meta").put(g._cfg.version, "version"));
              });
            }), (function g() {
              return m.length ? j.resolve(m.shift()(l.idbtrans)).then(g) : j.resolve();
            })().then(function() {
              mr(y, h);
            })) : j.resolve();
            var s, v, l, h, m, y;
          }).catch(a)) : (z(i).forEach(function(p) {
            In(n, p, i[p].primKey, i[p].indexes);
          }), Zt(e, n), void j.follow(function() {
            return e.on.populate.fire(o);
          }).catch(a));
          var c, f;
        });
      }
      function Xr(e, t) {
        mr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = nn(0, e.idbdb, t);
        rn(e, e._dbSchema, t);
        for (var r = 0, i = Rn(n, e._dbSchema).change; r < i.length; r++) {
          var o = (function(a) {
            if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var u = t.objectStore(a.name);
            a.add.forEach(function(c) {
              Ce && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(c.src)), tn(u, c);
            });
          })(i[r]);
          if (typeof o == "object") return o.value;
        }
      }
      function Rn(e, t) {
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
                var p = u[f], s = c[f];
                p ? p.src !== s.src && a.change.push(s) : a.add.push(s);
              }
              (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
            }
          } else r.add.push([n, o]);
        }
        return r;
      }
      function In(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(o) {
          return tn(i, o);
        }), i;
      }
      function mr(e, t) {
        z(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (Ce && console.debug("Dexie: Creating missing table", n), In(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function tn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function nn(e, t, n) {
        var r = {};
        return Re(t.objectStoreNames, 0).forEach(function(i) {
          for (var o = n.objectStore(i), a = Cn(pr(f = o.keyPath), f || "", !0, !1, !!o.autoIncrement, f && typeof f != "string", !0), u = [], c = 0; c < o.indexNames.length; ++c) {
            var p = o.index(o.indexNames[c]), f = p.keyPath, p = Cn(p.name, f, !!p.unique, !!p.multiEntry, !1, f && typeof f != "string", !1);
            u.push(p);
          }
          r[i] = kn(i, a, u);
        }), r;
      }
      function rn(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var o = r[i], a = n.objectStore(o);
          e._hasGetAll = "getAll" in a;
          for (var u = 0; u < a.indexNames.length; ++u) {
            var c = a.indexNames[u], f = a.index(c).keyPath, p = typeof f == "string" ? f : "[" + Re(f).join("+") + "]";
            !t[o] || (f = t[o].idxByName[p]) && (f.name = c, delete t[o].idxByName[p], t[o].idxByName[c] = f);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && q.WorkerGlobalScope && q instanceof q.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function vr(e) {
        return e.split(",").map(function(t, n) {
          var o = t.split(":"), r = (i = o[1]) === null || i === void 0 ? void 0 : i.trim(), i = (t = o[0].trim()).replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
          return Cn(i, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), L(o), n === 0, r);
        });
      }
      var Hr = (mt.prototype._createTableSchema = kn, mt.prototype._parseIndexSyntax = vr, mt.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        z(e).forEach(function(r) {
          if (e[r] !== null) {
            var i = n._parseIndexSyntax(e[r]), o = i.shift();
            if (!o) throw new T.Schema("Invalid schema for table " + r + ": " + e[r]);
            if (o.unique = !0, o.multi) throw new T.Schema("Primary key cannot be multiEntry*");
            i.forEach(function(a) {
              if (a.auto) throw new T.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!a.keyPath) throw new T.Schema("Index must have a name and cannot be an empty string");
            }), i = n._createTableSchema(r, o, i), t[r] = i;
          }
        });
      }, mt.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? J(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, i = {};
        return n.forEach(function(o) {
          J(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
        }), t._dbSchema = i, Dn(t, [t._allTables, t, t.Transaction.prototype]), en(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], z(i), i), t._storeNames = z(i), this;
      }, mt.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = Kt(this._cfg.contentUpgrade || Q, e), this;
      }, mt);
      function mt() {
      }
      function Nn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Be(Qt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Kn(e) {
        return e && typeof e.databases == "function";
      }
      function jn(e) {
        return Ue(function() {
          return F.letThrough = !0, e();
        });
      }
      function Bn(e) {
        return !("from" in e);
      }
      var ye = function(e, t) {
        if (!this) {
          var n = new ye();
          return e && "d" in e && J(n, e), n;
        }
        J(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Dt(e, t, n) {
        var r = H(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Bn(e)) return J(e, { from: t, to: n, d: 1 });
          var i = e.l, r = e.r;
          if (H(n, e.from) < 0) return i ? Dt(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, br(e);
          if (0 < H(t, e.to)) return r ? Dt(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, br(e);
          H(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && Rt(e, i), r && n && Rt(e, r);
        }
      }
      function Rt(e, t) {
        Bn(t) || (function n(r, c) {
          var o = c.from, a = c.to, u = c.l, c = c.r;
          Dt(r, o, a), u && n(r, u), c && n(r, c);
        })(e, t);
      }
      function gr(e, t) {
        var n = on(t), r = n.next();
        if (r.done) return !1;
        for (var i = r.value, o = on(e), a = o.next(i.from), u = a.value; !r.done && !a.done; ) {
          if (H(u.from, i.to) <= 0 && 0 <= H(u.to, i.from)) return !0;
          H(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (a = o.next(i.from)).value;
        }
        return !1;
      }
      function on(e) {
        var t = Bn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && H(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || H(n, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function br(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
        i && (t = i == "r" ? "l" : "r", n = x({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = wr(n)), e.d = wr(e);
      }
      function wr(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function an(e, t) {
        return z(t).forEach(function(n) {
          e[n] ? Rt(e[n], t[n]) : e[n] = (function r(i) {
            var o, a, u = {};
            for (o in i) W(i, o) && (a = i[o], u[o] = !a || typeof a != "object" || ut.has(a.constructor) ? a : r(a));
            return u;
          })(t[n]);
        }), e;
      }
      function Fn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && gr(t[n], e[n]);
        });
      }
      U(ye.prototype, ((ke = { add: function(e) {
        return Rt(this, e), this;
      }, addKey: function(e) {
        return Dt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Dt(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = on(this).next(e).value;
        return t && H(t.from, e) <= 0 && 0 <= H(t.to, e);
      } })[It] = function() {
        return on(this);
      }, ke));
      var it = {}, qn = {}, Mn = !1;
      function un(e) {
        an(qn, e), Mn || (Mn = !0, setTimeout(function() {
          Mn = !1, Ln(qn, !(qn = {}));
        }, 0));
      }
      function Ln(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, i = Object.values(it); r < i.length; r++) _r(a = i[r], e, n, t);
        else for (var o in e) {
          var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          u && (o = u[1], u = u[2], (a = it["idb://".concat(o, "/").concat(u)]) && _r(a, e, n, t));
        }
        n.forEach(function(c) {
          return c();
        });
      }
      function _r(e, t, n, r) {
        for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
          for (var u = a[o], c = u[0], f = [], p = 0, s = u[1]; p < s.length; p++) {
            var v = s[p];
            Fn(t, v.obsSet) ? v.subscribers.forEach(function(y) {
              return n.add(y);
            }) : r && f.push(v);
          }
          r && i.push([c, f]);
        }
        if (r) for (var l = 0, h = i; l < h.length; l++) {
          var m = h[l], c = m[0], f = m[1];
          e.queries.query[c] = f;
        }
      }
      function Wr(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? ue(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, i = Math.round(10 * e.verno), o = !1;
        function a() {
          if (t.openCanceller !== r) throw new T.DatabaseClosed("db.open() was cancelled");
        }
        function u() {
          return new j(function(v, l) {
            if (a(), !n) throw new T.MissingAPI();
            var h = e.name, m = t.autoSchema || !i ? n.open(h) : n.open(h, i);
            if (!m) throw new T.MissingAPI();
            m.onerror = Ne(l), m.onblocked = re(e._fireOnBlocked), m.onupgradeneeded = re(function(y) {
              var g;
              p = m.transaction, t.autoSchema && !e._options.allowEmptyDB ? (m.onerror = Pt, p.abort(), m.result.close(), (g = n.deleteDatabase(h)).onsuccess = g.onerror = re(function() {
                l(new T.NoSuchDatabase("Database ".concat(h, " doesnt exist")));
              })) : (p.onerror = Ne(l), y = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion, s = y < 1, e.idbdb = m.result, o && Xr(e, p), Qr(e, y / 10, p, l));
            }, l), m.onsuccess = re(function() {
              p = null;
              var y, g, w, _, E, S = e.idbdb = m.result, D = Re(S.objectStoreNames);
              if (0 < D.length) try {
                var P = S.transaction((_ = D).length === 1 ? _[0] : _, "readonly");
                if (t.autoSchema) g = S, w = P, (y = e).verno = g.version / 10, w = y._dbSchema = nn(0, g, w), y._storeNames = Re(g.objectStoreNames, 0), en(y, [y._allTables], z(w), w);
                else if (rn(e, e._dbSchema, P), ((E = Rn(nn(0, (E = e).idbdb, P), E._dbSchema)).add.length || E.change.some(function(C) {
                  return C.add.length || C.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), S.close(), i = S.version + 1, o = !0, v(u());
                Zt(e, P);
              } catch {
              }
              dt.push(e), S.onversionchange = re(function(C) {
                t.vcFired = !0, e.on("versionchange").fire(C);
              }), S.onclose = re(function(C) {
                e.on("close").fire(C);
              }), s && (E = e._deps, P = h, S = E.indexedDB, E = E.IDBKeyRange, Kn(S) || P === Qt || Nn(S, E).put({ name: P }).catch(Q)), v();
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
        var c, f = t.dbReadyResolve, p = null, s = !1;
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
              var l = t.onReadyBeingFired.reduce(Kt, Q);
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
            p && p.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), ue(v);
        }).finally(function() {
          t.openComplete = !0, f();
        }).then(function() {
          var v;
          return s && (v = {}, e.tables.forEach(function(l) {
            l.schema.indexes.forEach(function(h) {
              h.name && (v["idb://".concat(e.name, "/").concat(l.name, "/").concat(h.name)] = new ye(-1 / 0, [[[]]]));
            }), v["idb://".concat(e.name, "/").concat(l.name, "/")] = v["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new ye(-1 / 0, [[[]]]);
          }), Ye(Ct).fire(v), Ln(v, !0)), e;
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
      function sn(e, t, n) {
        for (var r = L(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r;
      }
      var $r = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return x(x({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = {}, o = [];
          function a(s, v, l) {
            var h = At(s), m = i[h] = i[h] || [], y = s == null ? 0 : typeof s == "string" ? 1 : s.length, g = 0 < v, g = x(x({}, l), { name: g ? "".concat(h, "(virtual-from:").concat(l.name, ")") : l.name, lowLevelIndex: l, isVirtual: g, keyTail: v, keyLength: y, extractKey: An(s), unique: !g && l.unique });
            return m.push(g), g.isPrimaryKey || o.push(g), 1 < y && a(y === 2 ? s[0] : s.slice(0, y - 1), v + 1, l), m.sort(function(w, _) {
              return w.keyTail - _.keyTail;
            }), g;
          }
          t = a(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [t];
          for (var u = 0, c = r.indexes; u < c.length; u++) {
            var f = c[u];
            a(f.keyPath, 0, f);
          }
          function p(s) {
            var v, l = s.query.index;
            return l.isVirtual ? x(x({}, s), { query: { index: l.lowLevelIndex, range: (v = s.query.range, l = l.keyTail, { type: v.type === 1 ? 2 : v.type, lower: sn(v.lower, v.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l), lowerOpen: !0, upper: sn(v.upper, v.upperOpen ? e.MIN_KEY : e.MAX_KEY, l), upperOpen: !0 }) } }) : s;
          }
          return x(x({}, n), { schema: x(x({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(s) {
            return (s = i[At(s)]) && s[0];
          } }), count: function(s) {
            return n.count(p(s));
          }, query: function(s) {
            return n.query(p(s));
          }, openCursor: function(s) {
            var v = s.query.index, l = v.keyTail, h = v.isVirtual, m = v.keyLength;
            return h ? n.openCursor(p(s)).then(function(g) {
              return g && y(g);
            }) : n.openCursor(s);
            function y(g) {
              return Object.create(g, { continue: { value: function(w) {
                w != null ? g.continue(sn(w, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? g.continue(g.key.slice(0, m).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : g.continue();
              } }, continuePrimaryKey: { value: function(w, _) {
                g.continuePrimaryKey(sn(w, e.MAX_KEY, l), _);
              } }, primaryKey: { get: function() {
                return g.primaryKey;
              } }, key: { get: function() {
                var w = g.key;
                return m === 1 ? w[0] : w.slice(0, m);
              } }, value: { get: function() {
                return g.value;
              } } });
            }
          } });
        } });
      } };
      function Vn(e, t, n, r) {
        return n = n || {}, r = r || "", z(e).forEach(function(i) {
          var o, a, u;
          W(t, i) ? (o = e[i], a = t[i], typeof o == "object" && typeof a == "object" && o && a ? (u = st(o)) !== st(a) ? n[r + i] = t[i] : u === "Object" ? Vn(o, a, n, r + i + ".") : o !== a && (n[r + i] = t[i]) : o !== a && (n[r + i] = t[i])) : n[r + i] = void 0;
        }), z(t).forEach(function(i) {
          W(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function Gn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Jr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return x(x({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return x(x({}, n), { mutate: function(i) {
            var o = F.trans, a = o.table(t).hook, u = a.deleting, c = a.creating, f = a.updating;
            switch (i.type) {
              case "add":
                if (c.fire === Q) break;
                return o._promise("readwrite", function() {
                  return p(i);
                }, !0);
              case "put":
                if (c.fire === Q && f.fire === Q) break;
                return o._promise("readwrite", function() {
                  return p(i);
                }, !0);
              case "delete":
                if (u.fire === Q) break;
                return o._promise("readwrite", function() {
                  return p(i);
                }, !0);
              case "deleteRange":
                if (u.fire === Q) break;
                return o._promise("readwrite", function() {
                  return (function s(v, l, h) {
                    return n.query({ trans: v, values: !1, query: { index: r, range: l }, limit: h }).then(function(m) {
                      var y = m.result;
                      return p({ type: "delete", keys: y, trans: v }).then(function(g) {
                        return 0 < g.numFailures ? Promise.reject(g.failures[0]) : y.length < h ? { failures: [], numFailures: 0, lastResult: void 0 } : s(v, x(x({}, l), { lower: y[y.length - 1], lowerOpen: !0 }), h);
                      });
                    });
                  })(i.trans, i.range, 1e4);
                }, !0);
            }
            return n.mutate(i);
            function p(s) {
              var v, l, h, m = F.trans, y = s.keys || Gn(r, s);
              if (!y) throw new Error("Keys missing");
              return (s = s.type === "add" || s.type === "put" ? x(x({}, s), { keys: y }) : x({}, s)).type !== "delete" && (s.values = M([], s.values)), s.keys && (s.keys = M([], s.keys)), v = n, h = y, ((l = s).type === "add" ? Promise.resolve([]) : v.getMany({ trans: l.trans, keys: h, cache: "immutable" })).then(function(g) {
                var w = y.map(function(_, E) {
                  var S, D, P, C = g[E], N = { onerror: null, onsuccess: null };
                  return s.type === "delete" ? u.fire.call(N, _, C, m) : s.type === "add" || C === void 0 ? (S = c.fire.call(N, _, s.values[E], m), _ == null && S != null && (s.keys[E] = _ = S, r.outbound || le(s.values[E], r.keyPath, _))) : (S = Vn(C, s.values[E]), (D = f.fire.call(N, S, _, C, m)) && (P = s.values[E], Object.keys(D).forEach(function(I) {
                    W(P, I) ? P[I] = D[I] : le(P, I, D[I]);
                  }))), N;
                });
                return n.mutate(s).then(function(_) {
                  for (var E = _.failures, S = _.results, D = _.numFailures, _ = _.lastResult, P = 0; P < y.length; ++P) {
                    var C = (S || y)[P], N = w[P];
                    C == null ? N.onerror && N.onerror(E[P]) : N.onsuccess && N.onsuccess(s.type === "put" && g[P] ? s.values[P] : C);
                  }
                  return { failures: E, results: S, numFailures: D, lastResult: _ };
                }).catch(function(_) {
                  return w.forEach(function(E) {
                    return E.onerror && E.onerror(_);
                  }), Promise.reject(_);
                });
              });
            }
          } });
        } });
      } };
      function Er(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) H(t.keys[i], e[o]) === 0 && (r.push(n ? Te(t.values[i]) : t.values[i]), ++o);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var Zr = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return x(x({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var i = Er(r.keys, r.trans._cache, r.cache === "clone");
            return i ? j.resolve(i) : n.getMany(r).then(function(o) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Te(o) : o }, o;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function xr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Tr(e, t) {
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
      var ei = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new ye(e.MIN_KEY, e.MAX_KEY);
        return x(x({}, e), { transaction: function(r, i, o) {
          if (F.subscr && i !== "readonly") throw new T.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(F.querier));
          return e.transaction(r, i, o);
        }, table: function(r) {
          var i = e.table(r), o = i.schema, a = o.primaryKey, s = o.indexes, u = a.extractKey, c = a.outbound, f = a.autoIncrement && s.filter(function(l) {
            return l.compound && l.keyPath.includes(a.keyPath);
          }), p = x(x({}, i), { mutate: function(l) {
            function h(I) {
              return I = "idb://".concat(t, "/").concat(r, "/").concat(I), _[I] || (_[I] = new ye());
            }
            var m, y, g, w = l.trans, _ = l.mutatedParts || (l.mutatedParts = {}), E = h(""), S = h(":dels"), D = l.type, N = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [Gn(a, l).filter(function(I) {
              return I;
            }), l.values] : [], P = N[0], C = N[1], N = l.trans._cache;
            return L(P) ? (E.addKeys(P), (N = D === "delete" || P.length === C.length ? Er(P, N) : null) || S.addKeys(P), (N || C) && (m = h, y = N, g = C, o.indexes.forEach(function(I) {
              var B = m(I.name || "");
              function Y(G) {
                return G != null ? I.extractKey(G) : null;
              }
              function $(G) {
                return I.multiEntry && L(G) ? G.forEach(function(oe) {
                  return B.addKey(oe);
                }) : B.addKey(G);
              }
              (y || g).forEach(function(G, me) {
                var V = y && Y(y[me]), me = g && Y(g[me]);
                H(V, me) !== 0 && (V != null && $(V), me != null && $(me));
              });
            }))) : P ? (C = { from: (C = P.lower) !== null && C !== void 0 ? C : e.MIN_KEY, to: (C = P.upper) !== null && C !== void 0 ? C : e.MAX_KEY }, S.add(C), E.add(C)) : (E.add(n), S.add(n), o.indexes.forEach(function(I) {
              return h(I.name).add(n);
            })), i.mutate(l).then(function(I) {
              return !P || l.type !== "add" && l.type !== "put" || (E.addKeys(I.results), f && f.forEach(function(B) {
                for (var Y = l.values.map(function(V) {
                  return B.extractKey(V);
                }), $ = B.keyPath.findIndex(function(V) {
                  return V === a.keyPath;
                }), G = 0, oe = I.results.length; G < oe; ++G) Y[G][$] = I.results[G];
                h(B.name).addKeys(Y);
              })), w.mutatedParts = an(w.mutatedParts || {}, _), I;
            });
          } }), s = function(h) {
            var m = h.query, h = m.index, m = m.range;
            return [h, new ye((h = m.lower) !== null && h !== void 0 ? h : e.MIN_KEY, (m = m.upper) !== null && m !== void 0 ? m : e.MAX_KEY)];
          }, v = { get: function(l) {
            return [a, new ye(l.key)];
          }, getMany: function(l) {
            return [a, new ye().addKeys(l.keys)];
          }, count: s, query: s, openCursor: s };
          return z(v).forEach(function(l) {
            p[l] = function(h) {
              var m = F.subscr, y = !!m, g = xr(F, i) && Tr(l, h) ? h.obsSet = {} : m;
              if (y) {
                var w = function(C) {
                  return C = "idb://".concat(t, "/").concat(r, "/").concat(C), g[C] || (g[C] = new ye());
                }, _ = w(""), E = w(":dels"), m = v[l](h), y = m[0], m = m[1];
                if ((l === "query" && y.isPrimaryKey && !h.values ? E : w(y.name || "")).add(m), !y.isPrimaryKey) {
                  if (l !== "count") {
                    var S = l === "query" && c && h.values && i.query(x(x({}, h), { values: !1 }));
                    return i[l].apply(this, arguments).then(function(C) {
                      if (l === "query") {
                        if (c && h.values) return S.then(function(Y) {
                          return Y = Y.result, _.addKeys(Y), C;
                        });
                        var N = h.values ? C.result.map(u) : C.result;
                        (h.values ? _ : E).addKeys(N);
                      } else if (l === "openCursor") {
                        var I = C, B = h.values;
                        return I && Object.create(I, { key: { get: function() {
                          return E.addKey(I.primaryKey), I.key;
                        } }, primaryKey: { get: function() {
                          var Y = I.primaryKey;
                          return E.addKey(Y), Y;
                        } }, value: { get: function() {
                          return B && _.addKey(I.primaryKey), I.value;
                        } } });
                      }
                      return C;
                    });
                  }
                  E.add(n);
                }
              }
              return i[l].apply(this, arguments);
            };
          }), p;
        } });
      } };
      function Sr(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = x({}, t), L(t.keys) && (t.keys = t.keys.filter(function(i, o) {
          return !(o in n.failures);
        })), "values" in t && L(t.values) && (t.values = t.values.filter(function(i, o) {
          return !(o in n.failures);
        })), t);
      }
      function zn(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < H(n, r.lower) : 0 <= H(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? H(e, t.upper) < 0 : H(e, t.upper) <= 0));
        var n, r;
      }
      function Or(e, t, v, r, i, o) {
        if (!v || v.length === 0) return e;
        var a = t.query.index, u = a.multiEntry, c = t.query.range, f = r.schema.primaryKey.extractKey, p = a.extractKey, s = (a.lowLevelIndex || a).extractKey, v = v.reduce(function(l, h) {
          var m = l, y = [];
          if (h.type === "add" || h.type === "put") for (var g = new ye(), w = h.values.length - 1; 0 <= w; --w) {
            var _, E = h.values[w], S = f(E);
            g.hasKey(S) || (_ = p(E), (u && L(_) ? _.some(function(I) {
              return zn(I, c);
            }) : zn(_, c)) && (g.addKey(S), y.push(E)));
          }
          switch (h.type) {
            case "add":
              var D = new ye().addKeys(t.values ? l.map(function(B) {
                return f(B);
              }) : l), m = l.concat(t.values ? y.filter(function(B) {
                return B = f(B), !D.hasKey(B) && (D.addKey(B), !0);
              }) : y.map(function(B) {
                return f(B);
              }).filter(function(B) {
                return !D.hasKey(B) && (D.addKey(B), !0);
              }));
              break;
            case "put":
              var P = new ye().addKeys(h.values.map(function(B) {
                return f(B);
              }));
              m = l.filter(function(B) {
                return !P.hasKey(t.values ? f(B) : B);
              }).concat(t.values ? y : y.map(function(B) {
                return f(B);
              }));
              break;
            case "delete":
              var C = new ye().addKeys(h.keys);
              m = l.filter(function(B) {
                return !C.hasKey(t.values ? f(B) : B);
              });
              break;
            case "deleteRange":
              var N = h.range;
              m = l.filter(function(B) {
                return !zn(f(B), N);
              });
          }
          return m;
        }, e);
        return v === e ? e : (v.sort(function(l, h) {
          return H(s(l), s(h)) || H(f(l), f(h));
        }), t.limit && t.limit < 1 / 0 && (v.length > t.limit ? v.length = t.limit : e.length === t.limit && v.length < t.limit && (i.dirty = !0)), o ? Object.freeze(v) : v);
      }
      function Pr(e, t) {
        return H(e.lower, t.lower) === 0 && H(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ti(e, t) {
        return (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = H(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return 1;
            if (o) return -1;
          }
          return r;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = H(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return -1;
            if (o) return 1;
          }
          return r;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function ni(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var i, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (i = e, o = t, setTimeout(function() {
            i.subscribers.size === 0 && qe(o, i);
          }, 3e3));
        });
      }
      var ri = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return x(x({}, e), { transaction: function(n, r, i) {
          var o, a, u = e.transaction(n, r, i);
          return r === "readwrite" && (a = (o = new AbortController()).signal, i = function(c) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var f = /* @__PURE__ */ new Set(), p = 0, s = n; p < s.length; p++) {
                  var v = s[p], l = it["idb://".concat(t, "/").concat(v)];
                  if (l) {
                    var h = e.table(v), m = l.optimisticOps.filter(function(B) {
                      return B.trans === u;
                    });
                    if (u._explicit && c && u.mutatedParts) for (var y = 0, g = Object.values(l.queries.query); y < g.length; y++) for (var w = 0, _ = (D = g[y]).slice(); w < _.length; w++) Fn((P = _[w]).obsSet, u.mutatedParts) && (qe(D, P), P.subscribers.forEach(function(B) {
                      return f.add(B);
                    }));
                    else if (0 < m.length) {
                      l.optimisticOps = l.optimisticOps.filter(function(B) {
                        return B.trans !== u;
                      });
                      for (var E = 0, S = Object.values(l.queries.query); E < S.length; E++) for (var D, P, C, N = 0, I = (D = S[E]).slice(); N < I.length; N++) (P = I[N]).res != null && u.mutatedParts && (c && !P.dirty ? (C = Object.isFrozen(P.res), C = Or(P.res, P.req, m, h, P, C), P.dirty ? (qe(D, P), P.subscribers.forEach(function(B) {
                        return f.add(B);
                      })) : C !== P.res && (P.res = C, P.promise = j.resolve({ result: C }))) : (P.dirty && qe(D, P), P.subscribers.forEach(function(B) {
                        return f.add(B);
                      })));
                    }
                  }
                }
                f.forEach(function(B) {
                  return B();
                });
              }
            };
          }, u.addEventListener("abort", i(!1), { signal: a }), u.addEventListener("error", i(!1), { signal: a }), u.addEventListener("complete", i(!0), { signal: a })), u;
        }, table: function(n) {
          var r = e.table(n), i = r.schema.primaryKey;
          return x(x({}, r), { mutate: function(o) {
            var a = F.trans;
            if (i.outbound || a.db._options.cache === "disabled" || a.explicit || a.idbtrans.mode !== "readwrite") return r.mutate(o);
            var u = it["idb://".concat(t, "/").concat(n)];
            return u ? (a = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Gn(i, o).some(function(c) {
              return c == null;
            })) ? (u.optimisticOps.push(o), o.mutatedParts && un(o.mutatedParts), a.then(function(c) {
              0 < c.numFailures && (qe(u.optimisticOps, o), (c = Sr(0, o, c)) && u.optimisticOps.push(c), o.mutatedParts && un(o.mutatedParts));
            }), a.catch(function() {
              qe(u.optimisticOps, o), o.mutatedParts && un(o.mutatedParts);
            })) : a.then(function(c) {
              var f = Sr(0, x(x({}, o), { values: o.values.map(function(p, s) {
                var v;
                return c.failures[s] || (p = (v = i.keyPath) !== null && v !== void 0 && v.includes(".") ? Te(p) : x({}, p), le(p, i.keyPath, c.results[s])), p;
              }) }), c);
              u.optimisticOps.push(f), queueMicrotask(function() {
                return o.mutatedParts && un(o.mutatedParts);
              });
            }), a) : r.mutate(o);
          }, query: function(o) {
            if (!xr(F, r) || !Tr("query", o)) return r.query(o);
            var a = ((f = F.trans) === null || f === void 0 ? void 0 : f.db._options.cache) === "immutable", s = F, u = s.requery, c = s.signal, f = (function(h, m, y, g) {
              var w = it["idb://".concat(h, "/").concat(m)];
              if (!w) return [];
              if (!(m = w.queries[y])) return [null, !1, w, null];
              var _ = m[(g.query ? g.query.index.name : null) || ""];
              if (!_) return [null, !1, w, null];
              switch (y) {
                case "query":
                  var E = _.find(function(S) {
                    return S.req.limit === g.limit && S.req.values === g.values && Pr(S.req.query.range, g.query.range);
                  });
                  return E ? [E, !0, w, _] : [_.find(function(S) {
                    return ("limit" in S.req ? S.req.limit : 1 / 0) >= g.limit && (!g.values || S.req.values) && ti(S.req.query.range, g.query.range);
                  }), !1, w, _];
                case "count":
                  return E = _.find(function(S) {
                    return Pr(S.req.query.range, g.query.range);
                  }), [E, !!E, w, _];
              }
            })(t, n, "query", o), p = f[0], s = f[1], v = f[2], l = f[3];
            return p && s ? p.obsSet = o.obsSet : (s = r.query(o).then(function(h) {
              var m = h.result;
              if (p && (p.res = m), a) {
                for (var y = 0, g = m.length; y < g; ++y) Object.freeze(m[y]);
                Object.freeze(m);
              } else h.result = Te(m);
              return h;
            }).catch(function(h) {
              return l && p && qe(l, p), Promise.reject(h);
            }), p = { obsSet: o.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, l ? l.push(p) : (l = [p], (v = v || (it["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = l)), ni(p, l, u, c), p.promise.then(function(h) {
              return { result: Or(h.result, o, v?.optimisticOps, r, p, a) };
            });
          } });
        } });
      } };
      function cn(e, t) {
        return new Proxy(e, { get: function(n, r, i) {
          return r === "db" ? t : Reflect.get(n, r, i);
        } });
      }
      var Be = (se.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new T.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new T.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(Yr), n.stores({}), this._state.autoSchema = !1, n);
      }, se.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || F.letThrough || this._vip) ? e() : new j(function(n, r) {
          if (t._state.openComplete) return r(new T.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new T.DatabaseClosed());
            t.open().catch(Q);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, se.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, i = e.name;
        return i && this.unuse({ stack: t, name: i }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: i }), e.sort(function(o, a) {
          return o.level - a.level;
        }), this;
      }, se.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(i) {
          return r ? i.create !== r : !!n && i.name !== n;
        })), this;
      }, se.prototype.open = function() {
        var e = this;
        return tt(Le, function() {
          return Wr(e);
        });
      }, se.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
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
      }, se.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new T.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new T.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, se.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new j(function(i, o) {
          function a() {
            t.close(e);
            var u = t._deps.indexedDB.deleteDatabase(t.name);
            u.onsuccess = re(function() {
              var c, f, p;
              c = t._deps, f = t.name, p = c.indexedDB, c = c.IDBKeyRange, Kn(p) || f === Qt || Nn(p, c).delete(f).catch(Q), i();
            }), u.onerror = Ne(o), u.onblocked = t._fireOnBlocked;
          }
          if (n) throw new T.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
        });
      }, se.prototype.backendDB = function() {
        return this.idbdb;
      }, se.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, se.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, se.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, se.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(se.prototype, "tables", { get: function() {
        var e = this;
        return z(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), se.prototype.transaction = function() {
        var e = (function(t, n, r) {
          var i = arguments.length;
          if (i < 2) throw new T.InvalidArgument("Too few arguments");
          for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
          return r = o.pop(), [t, bt(o), r];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, se.prototype._transaction = function(e, t, n) {
        var r = this, i = F.trans;
        i && i.db === this && e.indexOf("!") === -1 || (i = null);
        var o, a, u = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (a = t.map(function(f) {
            if (f = f instanceof r.Table ? f.name : f, typeof f != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return f;
          }), e == "r" || e === xn) o = xn;
          else {
            if (e != "rw" && e != Tn) throw new T.InvalidArgument("Invalid transaction mode: " + e);
            o = Tn;
          }
          if (i) {
            if (i.mode === xn && o === Tn) {
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
          return i ? i._promise(null, function(p, s) {
            s(f);
          }) : ue(f);
        }
        var c = (function f(p, s, v, l, h) {
          return j.resolve().then(function() {
            var m = F.transless || F, y = p._createTransaction(s, v, p._dbSchema, l);
            if (y.explicit = !0, m = { trans: y, transless: m }, l) y.idbtrans = l.idbtrans;
            else try {
              y.create(), y.idbtrans._explicit = !0, p._state.PR1398_maxLoop = 3;
            } catch (_) {
              return _.name === b.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                return f(p, s, v, null, h);
              })) : ue(_);
            }
            var g, w = Xe(h);
            return w && ht(), m = j.follow(function() {
              var _;
              (g = h.call(y, y)) && (w ? (_ = Ve.bind(null, null), g.then(_, _)) : typeof g.next == "function" && typeof g.throw == "function" && (g = Un(g)));
            }, m), (g && typeof g.then == "function" ? j.resolve(g).then(function(_) {
              return y.active ? _ : ue(new T.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : m.then(function() {
              return g;
            })).then(function(_) {
              return l && y._resolve(), y._completion.then(function() {
                return _;
              });
            }).catch(function(_) {
              return y._reject(_), ue(_);
            });
          });
        }).bind(null, this, o, a, i, n);
        return i ? i._promise(o, c, "lock") : F.trans ? tt(F.transless, function() {
          return r._whenReady(c);
        }) : this._whenReady(c);
      }, se.prototype.table = function(e) {
        if (!W(this._allTables, e)) throw new T.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, se);
      function se(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = se.dependencies;
        this._options = t = x({ addons: se.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var i, o, a, u, c, f = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        f.dbReadyPromise = new j(function(s) {
          f.dbReadyResolve = s;
        }), f.openCanceller = new j(function(s, v) {
          f.cancelOpen = v;
        }), this._state = f, this.name = e, this.on = Tt(this, "populate", "blocked", "versionchange", "close", { ready: [Kt, Q] }), this.once = function(s, v) {
          var l = function() {
            for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
            n.on(s).unsubscribe(l), v.apply(n, h);
          };
          return n.on(s, l);
        }, this.on.ready.subscribe = xe(this.on.ready.subscribe, function(s) {
          return function(v, l) {
            se.vip(function() {
              var h, m = n._state;
              m.openComplete ? (m.dbOpenError || j.resolve().then(v), l && s(v)) : m.onReadyBeingFired ? (m.onReadyBeingFired.push(v), l && s(v)) : (s(v), h = n, l || s(function y() {
                h.on.ready.unsubscribe(v), h.on.ready.unsubscribe(y);
              }));
            });
          };
        }), this.Collection = (i = this, St(qr.prototype, function(g, y) {
          this.db = i;
          var l = rr, h = null;
          if (y) try {
            l = y();
          } catch (w) {
            h = w;
          }
          var m = g._ctx, y = m.table, g = y.hook.reading.fire;
          this._ctx = { table: y, index: m.index, isPrimKey: !m.index || y.schema.primKey.keyPath && m.index === y.schema.primKey.name, range: l, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: h, or: m.or, valueMapper: g !== be ? g : null };
        })), this.Table = (o = this, St(ur.prototype, function(s, v, l) {
          this.db = o, this._tx = l, this.name = s, this.schema = v, this.hook = o._allTables[s] ? o._allTables[s].hook : Tt(null, { creating: [Nt, Q], reading: [Fe, be], updating: [ct, Q], deleting: [Ie, Q] });
        })), this.Transaction = (a = this, St(Ur.prototype, function(s, v, l, h, m) {
          var y = this;
          s !== "readonly" && v.forEach(function(g) {
            g = (g = l[g]) === null || g === void 0 ? void 0 : g.yProps, g && (v = v.concat(g.map(function(w) {
              return w.updatesTable;
            })));
          }), this.db = a, this.mode = s, this.storeNames = v, this.schema = l, this.chromeTransactionDurability = h, this.idbtrans = null, this.on = Tt(this, "complete", "error", "abort"), this.parent = m || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(g, w) {
            y._resolve = g, y._reject = w;
          }), this._completion.then(function() {
            y.active = !1, y.on.complete.fire();
          }, function(g) {
            var w = y.active;
            return y.active = !1, y.on.error.fire(g), y.parent ? y.parent._reject(g) : w && y.idbtrans && y.idbtrans.abort(), ue(g);
          });
        })), this.Version = (u = this, St(Hr.prototype, function(s) {
          this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (c = this, St(dr.prototype, function(s, v, l) {
          if (this.db = c, this._ctx = { table: s, index: v === ":id" ? null : v, or: l }, this._cmp = this._ascending = H, this._descending = function(h, m) {
            return H(m, h);
          }, this._max = function(h, m) {
            return 0 < H(h, m) ? h : m;
          }, this._min = function(h, m) {
            return H(h, m) < 0 ? h : m;
          }, this._IDBKeyRange = c._deps.IDBKeyRange, !this._IDBKeyRange) throw new T.MissingAPI();
        })), this.on("versionchange", function(s) {
          0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(s) {
          !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
        }), this._maxKey = kt(t.IDBKeyRange), this._createTransaction = function(s, v, l, h) {
          return new n.Transaction(s, v, l, n._options.chromeTransactionDurability, h);
        }, this._fireOnBlocked = function(s) {
          n.on("blocked").fire(s), dt.filter(function(v) {
            return v.name === n.name && v !== n && !v._state.vcFired;
          }).map(function(v) {
            return v.on("versionchange").fire(s);
          });
        }, this.use(Zr), this.use(ri), this.use(ei), this.use($r), this.use(Jr);
        var p = new Proxy(this, { get: function(s, v, l) {
          if (v === "_vip") return !0;
          if (v === "table") return function(m) {
            return cn(n.table(m), p);
          };
          var h = Reflect.get(s, v, l);
          return h instanceof ur ? cn(h, p) : v === "tables" ? h.map(function(m) {
            return cn(m, p);
          }) : v === "_createTransaction" ? function() {
            return cn(h.apply(this, arguments), p);
          } : h;
        } });
        this.vip = p, r.forEach(function(s) {
          return s(n);
        });
      }
      var ln, ke = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ii = (Yn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Yn.prototype[ke] = function() {
        return this;
      }, Yn);
      function Yn(e) {
        this._subscribe = e;
      }
      try {
        ln = { indexedDB: q.indexedDB || q.mozIndexedDB || q.webkitIndexedDB || q.msIndexedDB, IDBKeyRange: q.IDBKeyRange || q.webkitIDBKeyRange };
      } catch {
        ln = { indexedDB: null, IDBKeyRange: null };
      }
      function Cr(e) {
        var t, n = !1, r = new ii(function(i) {
          var o = Xe(e), a, u = !1, c = {}, f = {}, p = { get closed() {
            return u;
          }, unsubscribe: function() {
            u || (u = !0, a && a.abort(), s && Ye.storagemutated.unsubscribe(l));
          } };
          i.start && i.start(p);
          var s = !1, v = function() {
            return En(h);
          }, l = function(m) {
            an(c, m), Fn(f, c) && v();
          }, h = function() {
            var m, y, g;
            !u && ln.indexedDB && (c = {}, m = {}, a && a.abort(), a = new AbortController(), g = (function(w) {
              var _ = lt();
              try {
                o && ht();
                var E = Ue(e, w);
                return E = o ? E.finally(Ve) : E;
              } finally {
                _ && ft();
              }
            })(y = { subscr: m, signal: a.signal, requery: v, querier: e, trans: null }), Promise.resolve(g).then(function(w) {
              n = !0, t = w, u || y.signal.aborted || (c = {}, (function(_) {
                for (var E in _) if (W(_, E)) return;
                return 1;
              })(f = m) || s || (Ye(Ct, l), s = !0), En(function() {
                return !u && i.next && i.next(w);
              }));
            }, function(w) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(w?.name) || u || En(function() {
                u || i.error && i.error(w);
              });
            }));
          };
          return setTimeout(v, 0), p;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var ot = Be;
      function Qn(e) {
        var t = Qe;
        try {
          Qe = !0, Ye.storagemutated.fire(e), Ln(e, !0);
        } finally {
          Qe = t;
        }
      }
      U(ot, x(x({}, fe), { delete: function(e) {
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
          }) : Nn(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return ue(new T.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          J(this, e);
        };
      }, ignoreTransaction: function(e) {
        return F.trans ? tt(F.transless, e) : e();
      }, vip: jn, async: function(e) {
        return function() {
          try {
            var t = Un(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (n) {
            return ue(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = Un(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : j.resolve(r);
        } catch (i) {
          return ue(i);
        }
      }, currentTransaction: { get: function() {
        return F.trans || null;
      } }, waitFor: function(e, t) {
        return t = j.resolve(typeof e == "function" ? ot.ignoreTransaction(e) : e).timeout(t || 6e4), F.trans ? F.trans.waitFor(t) : t;
      }, Promise: j, debug: { get: function() {
        return Ce;
      }, set: function(e) {
        dn(e);
      } }, derive: ae, extend: J, props: U, override: xe, Events: Tt, on: Ye, liveQuery: Cr, extendObservabilitySet: an, getByKeyPath: Pe, setByKeyPath: le, delByKeyPath: function(e, t) {
        typeof t == "string" ? le(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          le(e, n, void 0);
        });
      }, shallowClone: Bt, deepClone: Te, getObjectDiff: Vn, cmp: H, asap: Oe, minKey: -1 / 0, addons: [], connections: dt, errnames: b, dependencies: ln, cache: it, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), ot.maxKey = kt(ot.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ye(Ct, function(e) {
        Qe || (e = new CustomEvent(Pn, { detail: e }), Qe = !0, dispatchEvent(e), Qe = !1);
      }), addEventListener(Pn, function(e) {
        e = e.detail, Qe || Qn(e);
      }));
      var gt, Qe = !1, kr = function() {
      };
      return typeof BroadcastChannel < "u" && ((kr = function() {
        (gt = new BroadcastChannel(Pn)).onmessage = function(e) {
          return e.data && Qn(e.data);
        };
      })(), typeof gt.unref == "function" && gt.unref(), Ye(Ct, function(e) {
        Qe || gt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Be.disableBfCache && e.persisted) {
          Ce && console.debug("Dexie: handling persisted pagehide"), gt?.close();
          for (var t = 0, n = dt; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Be.disableBfCache && e.persisted && (Ce && console.debug("Dexie: handling persisted pageshow"), kr(), Qn({ all: new ye(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof He || e instanceof TypeError || e instanceof SyntaxError || !e.name || !k[e.name] ? e : (t = new k[e.name](t || e.message, e), "stack" in e && Z(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, dn(Ce), x(Be, Object.freeze({ __proto__: null, Dexie: Be, liveQuery: Cr, Entity: ir, cmp: H, PropModification: Ot, replacePrefix: function(e, t) {
        return new Ot({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new Ot({ add: e });
      }, remove: function(e) {
        return new Ot({ remove: e });
      }, default: Be, RangeSet: ye, mergeRanges: Rt, rangesOverlap: gr }), { default: Be }), Be;
    });
  })(ui)), ui.exports;
}
var Zi = Ji();
const si = /* @__PURE__ */ Vi(Zi), vi = Symbol.for("Dexie"), Ir = globalThis[vi] || (globalThis[vi] = si);
if (si.semVer !== Ir.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${si.semVer} and ${Ir.semVer}`);
const {
  liveQuery: Lo,
  mergeRanges: Uo,
  rangesOverlap: Vo,
  RangeSet: Go,
  cmp: zo,
  Entity: Yo,
  PropModification: Qo,
  replacePrefix: Xo,
  add: Ho,
  remove: Wo,
  DexieYProvider: $o
} = Ir;
function eo(A) {
  const O = new Ir(A), K = Wi([...xi]);
  return O.version(1).stores(K), O;
}
async function to(A) {
  const { databaseInstance: O, tagName: K, records: x } = A, M = O.table(K);
  await O.transaction("rw", M, () => M.bulkAdd(x));
}
async function no(A) {
  const { databaseInstance: O, tagNames: K } = A;
  O.close();
  const x = O.verno, M = O.tables.reduce(
    (L, J) => (L[J.name] = ai, L),
    {}
  ), q = K.reduce(
    (L, J) => (L[J] = ai, L),
    {}
  ), z = {
    ...M,
    ...q
  };
  O.version(x + 1).stores(z), O.open();
}
const Ar = {};
function ro(A) {
  const { parent: O, child: K } = A;
  Ar[O.tagName] || (Ar[O.tagName] = []);
  const x = {
    parentId: O.id,
    childId: K.id,
    childTagName: K.tagName
  };
  Ar[O.tagName].push(x);
}
function io(A) {
  const { parentRecordsBatch: O, parentTagName: K } = A, x = [...O], M = Ti(K);
  for (const q of O) {
    const z = M.filter((L) => L.parentId === q.id).map((L) => ({
      id: L.childId,
      tagName: L.childTagName
    }));
    if (z.length > 0) {
      const L = x.findIndex(
        (J) => J.id === q.id
      );
      L >= 0 && (x[L].children || (x[L].children = []), x[L].children.push(...z), oo({
        children: z,
        tagName: q.tagName
      }));
    }
  }
  return x;
}
function Ti(A) {
  return Ar[A] || [];
}
function oo(A) {
  const { children: O, tagName: K } = A, x = O.map((q) => q.id), M = Ti(K);
  Ar[K] = M.filter(
    (q) => !x.includes(q.childId)
  );
}
function ao(A) {
  return "prefix" in A && "uri" in A && !!A.prefix && !!A.uri;
}
function uo(A, O) {
  return Object.keys(O).includes(A);
}
function Si(A) {
  let O = "pending";
  const K = A.batchSize;
  let x = [], M = !1, q;
  return { push: L, next: z, close: J, status: O };
  async function z() {
    if (x.length === 0 && M)
      return O = "done", Promise.resolve({ value: [], done: !0 });
    const he = M && x.length > 0, Ee = x.length >= K;
    if (he || Ee) {
      const X = x.splice(0, K);
      return Promise.resolve({ value: X, done: !1 });
    }
    const { resolve: W, promise: U } = Promise.withResolvers();
    return q = W, U;
  }
  function L(he) {
    if (x.length >= K && q) {
      const Ee = x.splice(0, K);
      q({ value: Ee, done: !1 }), q = void 0;
    }
    x.push(he);
  }
  function J() {
    if (M = !0, q) {
      const he = x.splice(0, K);
      q({ value: he, done: !1 }), q = void 0;
    }
  }
}
function so(A) {
  const { importContext: O, tagName: K } = A, x = {
    ...O
  };
  if (!x.queues[K]) {
    const M = Si({
      batchSize: x.options.batchSize
    });
    x.queues[K] = M, queueMicrotask(() => {
      Oi({
        tagName: K,
        importContext: x,
        isEndingQueue: !1
      }).catch((q) => {
        throw console.error(`Consumer error for ${K}:`, q), q;
      });
    });
  }
  return x;
}
function co(A) {
  const { tagName: O, importContext: K } = A, x = {
    ...K
  };
  if (!K.endingQueues[O]) {
    const M = Si({
      batchSize: K.options.batchSize
    });
    x.endingQueues[O] = M;
  }
  return x;
}
function lo(A) {
  const { importContext: O } = A;
  let K = { ...O };
  for (const M of Object.keys(K.queues))
    K.queues[M]?.close();
  const x = K.queuesObservable.subscribe(async () => {
    K = await ho({
      importContext: K
    }), x();
  });
  return K;
}
function fo(A) {
  const { importContext: O } = A, K = O.endingQueues && Object.keys(O.endingQueues).length > 0;
  return Promise.all([
    new Promise((x) => {
      const M = O.queuesObservable.subscribe(() => {
        O.queuesObservable.isAllDone() && (M(), x());
      });
    }),
    K ? new Promise((x) => {
      const M = O.endingQueuesObservable.subscribe(() => {
        O.endingQueuesObservable.isAllDone() && (M(), x());
      });
    }) : Promise.resolve()
  ]);
}
async function ho(A) {
  const { importContext: O } = A, K = { ...O };
  await no({
    databaseInstance: O.databaseInstance,
    tagNames: Object.keys(O.endingQueues)
  });
  for (const x of Object.keys(K.endingQueues)) {
    if (!K.endingQueues[x]) throw new Error(`Ending queue for tagName ${x} is not defined`);
    K.endingQueues[x]?.close(), queueMicrotask(() => {
      Oi({
        tagName: x,
        importContext: K,
        isEndingQueue: !0
      }).catch((M) => {
        throw console.error(`Consumer error for ${x}:`, M), M;
      });
    });
  }
  return K;
}
function gi(A) {
  const O = /* @__PURE__ */ new Set();
  function K(q) {
    return O.add(q), () => O.delete(q);
  }
  function x() {
    for (const q of O) q();
  }
  function M() {
    return Object.values(A).every((q) => q.status === "done");
  }
  return { subscribe: K, notify: x, isAllDone: M };
}
async function Oi(A) {
  const { tagName: O, importContext: K, isEndingQueue: x } = A;
  let M, q;
  if (x ? (M = K.endingQueues, q = K.endingQueuesObservable) : (M = K.queues, q = K.queuesObservable), !uo(O, M) || !M[O])
    throw new Error(`Queue for tagName ${O} is not defined to be consumed`);
  for (; ; ) {
    const { value: z, done: L } = await M[O].next();
    if (L) {
      q.isAllDone() && q.notify();
      break;
    }
    if (z.length === 0) continue;
    const J = io({
      parentRecordsBatch: z,
      // within the same batch, all records have the same tagName
      parentTagName: z[0].tagName
    });
    await to({
      databaseInstance: K.databaseInstance,
      tagName: O,
      records: J
    });
  }
}
function po(A) {
  const { importContext: O } = A;
  let K = {
    stack: [],
    currentParentElements: []
  }, x = {
    ...O
  };
  const M = Xi.parser(
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
  return M.onopentag = (q) => K = yo({ node: q, state: K }), M.ontext = (q) => K = mo({ text: q, state: K }), M.onclosetag = () => ({ updatedState: K, updatedImportContext: x } = vo({
    state: K,
    importContext: O
  })), M.onend = () => x = go({ importContext: x }), M.onerror = bo, { xmlParser: M, importContext: x };
}
function yo(A) {
  const { node: O, state: K } = A, x = { ...K }, M = crypto.randomUUID(), q = wo(O), z = _o(O), L = Eo(O.attributes), J = xo(K.currentParentElements), he = {
    id: M,
    tagName: q,
    namespace: z,
    attributes: L,
    value: "",
    parent: J ? { id: J.id, tagName: J.tagName } : null,
    children: []
  };
  return x.stack.push(he), x.currentParentElements = [
    ...x.currentParentElements,
    { id: M, tagName: q }
  ], x;
}
function mo(A) {
  const { text: O, state: K } = A;
  return O && K.stack.length > 0 && (K.stack[K.stack.length - 1].value += O), K;
}
function vo(A) {
  const { state: O, importContext: K } = A;
  let x = { ...K }, M = [...O.stack], q = [...O.currentParentElements];
  const z = O.stack.at(-1);
  if (M = O.stack.slice(0, -1), q = O.currentParentElements.slice(0, -1), z) {
    if (M.length) {
      const L = M.length - 1;
      M = M.map(
        (J, he) => he === L ? {
          ...J,
          children: [
            ...J.children || [],
            { id: z.id, tagName: z.tagName }
          ]
        } : J
      );
    } else z.parent && ro({
      parent: z.parent,
      child: { id: z.id, tagName: z.tagName }
    });
    xi.includes(z.tagName) ? (x = so({
      tagName: z.tagName,
      importContext: x
    }), x.queues[z.tagName]?.push(z)) : (x = co({
      tagName: z.tagName,
      importContext: x
    }), x.endingQueues[z.tagName]?.push(z));
  }
  return {
    updatedState: {
      stack: M,
      currentParentElements: q
    },
    updatedImportContext: x
  };
}
function go(A) {
  const { importContext: O } = A;
  return lo({
    importContext: O
  });
}
function bo(A) {
  return new Error(`XML parsing error: ${A}`);
}
function wo(A) {
  return A.local || null;
}
function _o(A) {
  return ao(A) ? {
    prefix: A.prefix,
    uri: A.uri
  } : null;
}
function Eo(A) {
  return Object.values(A).map((O) => {
    const K = O.prefix && O.uri ? {
      prefix: O.prefix,
      uri: O.uri
    } : null;
    return {
      name: O.name,
      value: O.value,
      namespace: K
    };
  });
}
function xo(A) {
  return A.length === 0 ? null : A[A.length - 1];
}
const To = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function So({
  files: A,
  options: O = To
}) {
  const K = [];
  if (A.length === 0) throw new Error("No files provided for import.");
  for (const x of A) {
    if (!Oo(x)) {
      console.error(`Unsupported file type: ${x.name}`);
      continue;
    }
    if (x.size === 0) {
      console.warn(`File is empty: ${x.name}`);
      continue;
    }
    const M = await Co({ file: x, options: O });
    K.push(M);
  }
  return K;
}
function Oo(A) {
  return Hi.some((O) => A.name.toLowerCase().endsWith(O));
}
function Po(A) {
  return A.name.replace(/\.[^.]+$/, "");
}
async function Co(A) {
  const { file: O, options: K } = A;
  try {
    const x = Po(O);
    let M = {
      databaseInstance: eo(x),
      options: {
        batchSize: K.batchSize
      },
      queues: {},
      endingQueues: {},
      queuesObservable: gi({}),
      endingQueuesObservable: gi({})
    };
    return K.useBrowserApi && (M = await ko({
      file: O,
      importContext: M,
      options: {
        chunkSize: K.chunkSize
      }
    })), await fo({
      importContext: M
    }), x;
  } catch (x) {
    throw console.error(`Error importing file ${O.name}:`, x), x;
  }
}
async function ko(A) {
  const { file: O, importContext: K, options: x } = A, M = O.stream().getReader(), { xmlParser: q, importContext: z } = po({
    importContext: K
  }), L = new TextDecoder(), J = new Uint8Array(0);
  return await ci(M, q, L, J, x), z;
}
async function ci(A, O, K, x, M) {
  const q = M.chunkSize, { done: z, value: L } = await A.read();
  if (z) {
    if (x.length > 0) {
      const he = K.decode(x);
      O.write(he);
    }
    O.close();
    return;
  }
  if (!L)
    return await ci(A, O, K, x, M);
  let J = new Uint8Array(x.length + L.length);
  for (J.set(x), J.set(L, x.length); J.length >= q; ) {
    const he = J.slice(0, q);
    J = J.slice(q);
    const Ee = K.decode(he, { stream: !0 });
    O.write(Ee);
  }
  return await ci(A, O, K, J, M);
}
var Ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Do(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var Rr = { exports: {} }, Ro = Rr.exports, bi;
function Io() {
  return bi || (bi = 1, (function(A, O) {
    (function(K, x) {
      A.exports = x();
    })(Ro, function() {
      var K = function(e, t) {
        return (K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        })(e, t);
      }, x = function() {
        return (x = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
      };
      function M(e, t, n) {
        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ao, z = Object.keys, L = Array.isArray;
      function J(e, t) {
        return typeof t != "object" || z(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || q.Promise || (q.Promise = Promise);
      var he = Object.getPrototypeOf, Ee = {}.hasOwnProperty;
      function W(e, t) {
        return Ee.call(e, t);
      }
      function U(e, t) {
        typeof t == "function" && (t = t(he(e))), (typeof Reflect > "u" ? z : Reflect.ownKeys)(t).forEach(function(n) {
          Z(e, n, t[n]);
        });
      }
      var X = Object.defineProperty;
      function Z(e, t, n, r) {
        X(e, t, J(n && W(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function ae(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), Z(e.prototype, "constructor", e), { extend: U.bind(null, e.prototype) };
        } };
      }
      var te = Object.getOwnPropertyDescriptor, Ae = [].slice;
      function Re(e, t, n) {
        return Ae.call(e, t, n);
      }
      function xe(e, t) {
        return t(e);
      }
      function ce(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Oe(e) {
        q.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Pe(e, t) {
        if (typeof t == "string" && W(e, t)) return e[t];
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
      function le(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          ce(typeof n != "string" && "length" in n);
          for (var r = 0, i = t.length; r < i; ++r) le(e, t[r], n[r]);
        } else {
          var o, a, u = t.indexOf(".");
          u !== -1 ? (o = t.substr(0, u), (a = t.substr(u + 1)) === "" ? n === void 0 ? L(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : le(u = !(u = e[o]) || !W(e, o) ? e[o] = {} : u, a, n)) : n === void 0 ? L(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function Bt(e) {
        var t, n = {};
        for (t in e) W(e, t) && (n[t] = e[t]);
        return n;
      }
      var R = [].concat;
      function bt(e) {
        return R.apply([], e);
      }
      var $e = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(bt([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return q[e];
      }), ut = new Set($e.map(function(e) {
        return q[e];
      })), ie = null;
      function Te(e) {
        return ie = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var r = ie.get(n);
          if (r) return r;
          if (L(n)) {
            r = [], ie.set(n, r);
            for (var i = 0, o = n.length; i < o; ++i) r.push(t(n[i]));
          } else if (ut.has(n.constructor)) r = n;
          else {
            var a, u = he(n);
            for (a in r = u === Object.prototype ? {} : Object.create(u), ie.set(n, r), n) W(n, a) && (r[a] = t(n[a]));
          }
          return r;
        })(e), ie = null, e;
      }
      var Ft = {}.toString;
      function st(e) {
        return Ft.call(e).slice(8, -1);
      }
      var It = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ge = typeof It == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[It]) && t.apply(e);
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
          if (i = ge(e)) {
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
      var Xe = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, _t = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ke = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(_t), pn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function He(e, t) {
        this.name = e, this.message = t;
      }
      function hn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, i) {
          return i.indexOf(n) === r;
        }).join(`
`);
      }
      function vt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = hn(e, t);
      }
      function We(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = hn(e, this.failures);
      }
      ae(He).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), ae(vt).from(He), ae(We).from(He);
      var b = ke.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), d = He, T = ke.reduce(function(e, t) {
        var n = t + "Error";
        function r(i, o) {
          this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = pn[t] || n, this.inner = null);
        }
        return ae(r).from(d), e[t] = r, e;
      }, {});
      T.Syntax = SyntaxError, T.Type = TypeError, T.Range = RangeError;
      var k = _t.reduce(function(e, t) {
        return e[t + "Error"] = T[t], e;
      }, {}), fe = ke.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = T[t]), e;
      }, {});
      function Q() {
      }
      function be(e) {
        return e;
      }
      function Fe(e, t) {
        return e == null || e === be ? t : function(n) {
          return t(e(n));
        };
      }
      function _e(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Nt(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? _e(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? _e(i, this.onerror) : i), o !== void 0 ? o : n;
        };
      }
      function Ie(e, t) {
        return e === Q ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? _e(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? _e(r, this.onerror) : r);
        };
      }
      function ct(e, t) {
        return e === Q ? t : function(n) {
          var r = e.apply(this, arguments);
          J(n, r);
          var i = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? _e(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? _e(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : J(r, n);
        };
      }
      function Wn(e, t) {
        return e === Q ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function Kt(e, t) {
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
      fe.ModifyError = vt, fe.DexieError = He, fe.BulkError = We;
      var Ce = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function dn(e) {
        Ce = e;
      }
      var wt = {}, $n = 100, $e = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, he(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, he(t), e];
      })(), _t = $e[0], ke = $e[1], $e = $e[2], ke = ke && ke.then, Je = _t && _t.constructor, yn = !!$e, Et = function(e, t) {
        xt.push([e, t]), qt && (queueMicrotask(Kr), qt = !1);
      }, mn = !0, qt = !0, Ze = [], Mt = [], vn = be, Le = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, F = Le, xt = [], et = 0, Lt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = F;
        if (typeof e != "function") {
          if (e !== wt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && bn(this, this._value));
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
            }, bn.bind(null, r));
          } catch (o) {
            bn(r, o);
          }
        })(this, e);
      }
      var gn = { get: function() {
        var e = F, t = zt;
        function n(r, i) {
          var o = this, a = !e.global && (e !== F || t !== zt), u = a && !Ve(), c = new j(function(f, p) {
            wn(o, new Jn(tr(r, e, a, u), tr(i, e, a, u), f, p, e));
          });
          return this._consoleTask && (c._consoleTask = this._consoleTask), c;
        }
        return n.prototype = wt, n;
      }, set: function(e) {
        Z(this, "then", e && e.prototype === wt ? gn : { get: function() {
          return e;
        }, set: gn.set });
      } };
      function Jn(e, t, n, r, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
      }
      function bn(e, t) {
        var n, r;
        Mt.push(t), e._state === null && (n = e._lib && lt(), t = vn(t), e._state = !1, e._value = t, r = e, Ze.some(function(i) {
          return i._value === r._value;
        }) || Ze.push(r), Zn(e), n && ft());
      }
      function Zn(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) wn(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), et === 0 && (++et, Et(function() {
          --et == 0 && _n();
        }, []));
      }
      function wn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++et, Et(Nr, [n, e, t]);
        } else e._listeners.push(t);
      }
      function Nr(e, t, n) {
        try {
          var r, i = t._value;
          !t._state && Mt.length && (Mt = []), r = Ce && t._consoleTask ? t._consoleTask.run(function() {
            return e(i);
          }) : e(i), t._state || Mt.indexOf(i) !== -1 || (function(o) {
            for (var a = Ze.length; a; ) if (Ze[--a]._value === o._value) return Ze.splice(a, 1);
          })(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --et == 0 && _n(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Kr() {
        tt(Le, function() {
          lt() && ft();
        });
      }
      function lt() {
        var e = mn;
        return qt = mn = !1, e;
      }
      function ft() {
        var e, t, n;
        do
          for (; 0 < xt.length; ) for (e = xt, xt = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < xt.length);
        qt = mn = !0;
      }
      function _n() {
        var e = Ze;
        Ze = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = Lt.slice(0), n = t.length; n; ) t[--n]();
      }
      function Ut(e) {
        return new j(wt, !1, e);
      }
      function re(e, t) {
        var n = F;
        return function() {
          var r = lt(), i = F;
          try {
            return Ge(n, !0), e.apply(this, arguments);
          } catch (o) {
            t && t(o);
          } finally {
            Ge(i, !1), r && ft();
          }
        };
      }
      U(j.prototype, { then: gn, _then: function(e, t) {
        wn(this, new Jn(null, null, e, t, F));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : Ut)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : Ut)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return j.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return j.resolve(e()).then(function() {
            return Ut(t);
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
        var e = De.apply(null, arguments).map(Yt);
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
        }) : new j(wt, !0, e);
      }, reject: Ut, race: function() {
        var e = De.apply(null, arguments).map(Yt);
        return new j(function(t, n) {
          e.map(function(r) {
            return j.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return F;
      }, set: function(e) {
        return F = e;
      } }, totalEchoes: { get: function() {
        return zt;
      } }, newPSD: Ue, usePSD: tt, scheduler: { get: function() {
        return Et;
      }, set: function(e) {
        Et = e;
      } }, rejectionMapper: { get: function() {
        return vn;
      }, set: function(e) {
        vn = e;
      } }, follow: function(e, t) {
        return new j(function(n, r) {
          return Ue(function(i, o) {
            var a = F;
            a.unhandleds = [], a.onunhandled = o, a.finalize = _e(function() {
              var u, c = this;
              u = function() {
                c.unhandleds.length === 0 ? i() : o(c.unhandleds[0]);
              }, Lt.push(function f() {
                u(), Lt.splice(Lt.indexOf(f), 1);
              }), ++et, Et(function() {
                --et == 0 && _n();
              }, []);
            }, a.finalize), e();
          }, t, n, r);
        });
      } }), Je && (Je.allSettled && Z(j, "allSettled", function() {
        var e = De.apply(null, arguments).map(Yt);
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
        var e = De.apply(null, arguments).map(Yt);
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
      var de = { awaits: 0, echoes: 0, id: 0 }, jr = 0, Vt = [], Gt = 0, zt = 0, Br = 0;
      function Ue(e, t, n, r) {
        var i = F, o = Object.create(i);
        return o.parent = i, o.ref = 0, o.global = !1, o.id = ++Br, Le.env, o.env = yn ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && J(o, t), ++i.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = tt(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function ht() {
        return de.id || (de.id = ++jr), ++de.awaits, de.echoes += $n, de.id;
      }
      function Ve() {
        return !!de.awaits && (--de.awaits == 0 && (de.id = 0), de.echoes = de.awaits * $n, !0);
      }
      function Yt(e) {
        return de.echoes && e && e.constructor === Je ? (ht(), e.then(function(t) {
          return Ve(), t;
        }, function(t) {
          return Ve(), ue(t);
        })) : e;
      }
      function Fr() {
        var e = Vt[Vt.length - 1];
        Vt.pop(), Ge(e, !1);
      }
      function Ge(e, t) {
        var n, r = F;
        (t ? !de.echoes || Gt++ && e === F : !Gt || --Gt && e === F) || queueMicrotask(t ? (function(i) {
          ++zt, de.echoes && --de.echoes != 0 || (de.echoes = de.awaits = de.id = 0), Vt.push(F), Ge(i, !0);
        }).bind(null, e) : Fr), e !== F && (F = e, r === Le && (Le.env = er()), yn && (n = Le.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(q, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function er() {
        var e = q.Promise;
        return yn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(q, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function tt(e, t, n, r, i) {
        var o = F;
        try {
          return Ge(e, !0), t(n, r, i);
        } finally {
          Ge(o, !1);
        }
      }
      function tr(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var i = F;
          n && ht(), Ge(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ge(i, !1), r && queueMicrotask(Ve);
          }
        };
      }
      function En(e) {
        Promise === Je && de.echoes === 0 ? Gt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ke).indexOf("[native code]") === -1 && (ht = Ve = Q);
      var ue = j.reject, nt = "￿", je = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", nr = "String expected.", dt = [], Qt = "__dbnames", xn = "readonly", Tn = "readwrite";
      function rt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var rr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Xt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Te(t))[e], t;
        };
      }
      function ir() {
        throw T.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function H(e, t) {
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
                  var p = H(i[f], o[f]);
                  if (p !== 0) return p;
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
      function Ht(e, t, n) {
        var r = e.schema.yProps;
        return r ? (t && 0 < n.numFailures && (t = t.filter(function(i, o) {
          return !n.failures[o];
        })), Promise.all(r.map(function(i) {
          return i = i.updatesTable, t ? e.db.table(i).where("k").anyOf(t).delete() : e.db.table(i).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      var ur = (ne.prototype._trans = function(e, t, n) {
        var r = this._tx || F.trans, i = this.name, o = Ce && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function a(f, p, s) {
          if (!s.schema[i]) throw new T.NotFound("Table " + i + " not part of transaction");
          return t(s.idbtrans, s);
        }
        var u = lt();
        try {
          var c = r && r.db._novip === this.db._novip ? r === F.trans ? r._promise(e, a, n) : Ue(function() {
            return r._promise(e, a, n);
          }, { trans: r, transless: F.transless || F }) : (function f(p, s, v, l) {
            if (p.idbdb && (p._state.openComplete || F.letThrough || p._vip)) {
              var h = p._createTransaction(s, v, p._dbSchema);
              try {
                h.create(), p._state.PR1398_maxLoop = 3;
              } catch (m) {
                return m.name === b.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                  return f(p, s, v, l);
                })) : ue(m);
              }
              return h._promise(s, function(m, y) {
                return Ue(function() {
                  return F.trans = h, l(m, y, h);
                });
              }).then(function(m) {
                if (s === "readwrite") try {
                  h.idbtrans.commit();
                } catch {
                }
                return s === "readonly" ? m : h._completion.then(function() {
                  return m;
                });
              });
            }
            if (p._state.openComplete) return ue(new T.DatabaseClosed(p._state.dbOpenError));
            if (!p._state.isBeingOpened) {
              if (!p._state.autoOpen) return ue(new T.DatabaseClosed());
              p.open().catch(Q);
            }
            return p._state.dbReadyPromise.then(function() {
              return f(p, s, v, l);
            });
          })(this.db, e, [this.name], a);
          return o && (c._consoleTask = o, c = c.catch(function(f) {
            return console.trace(f), ue(f);
          })), c;
        } finally {
          u && ft();
        }
      }, ne.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? ue(new T.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(i) {
            return n.hook.reading.fire(i);
          });
        }).then(t);
      }, ne.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (L(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = z(e);
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
        !n && Ce && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function i(u, c) {
          return H(u, c) === 0;
        }
        var a = t.reduce(function(s, c) {
          var f = s[0], p = s[1], s = r[c], v = e[c];
          return [f || s, f || !s ? rt(p, s && s.multi ? function(l) {
            return l = Pe(l, c), L(l) && l.some(function(h) {
              return i(v, h);
            });
          } : function(l) {
            return i(v, Pe(l, c));
          }) : p];
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
          function p() {
            this.constructor = c;
          }
          K(c, f), c.prototype = f === null ? Object.create(f) : (p.prototype = f.prototype, new p());
        })(i, t = e), Object.defineProperty(i.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
          return r;
        }, e = i);
        for (var o = /* @__PURE__ */ new Set(), a = e.prototype; a; a = he(a)) Object.getOwnPropertyNames(a).forEach(function(c) {
          return o.add(c);
        });
        function u(c) {
          if (!c) return c;
          var f, p = Object.create(e.prototype);
          for (f in c) if (!o.has(f)) try {
            p[f] = c[f];
          } catch {
          }
          return p;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e;
      }, ne.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          J(this, e);
        });
      }, ne.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
        return o && i && (a = Xt(o)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "add", keys: t != null ? [t] : null, values: [a] });
        }).then(function(u) {
          return u.numFailures ? j.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (o) try {
            le(e, o, u);
          } catch {
          }
          return u;
        });
      }, ne.prototype.update = function(e, t) {
        return typeof e != "object" || L(e) ? this.where(":id").equals(e).modify(t) : (e = Pe(e, this.schema.primKey.keyPath), e === void 0 ? ue(new T.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ne.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
        return o && i && (a = Xt(o)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "put", values: [a], keys: t != null ? [t] : null });
        }).then(function(u) {
          return u.numFailures ? j.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (o) try {
            le(e, o, u);
          } catch {
          }
          return u;
        });
      }, ne.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] }).then(function(r) {
            return Ht(t, [e], r);
          }).then(function(r) {
            return r.numFailures ? j.reject(r.failures[0]) : void 0;
          });
        });
      }, ne.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: rr }).then(function(n) {
            return Ht(e, null, n);
          });
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
          var c = e.length, f = f && u ? e.map(Xt(f)) : e;
          return r.core.mutate({ trans: a, type: "add", keys: i, values: f, wantResults: o }).then(function(h) {
            var s = h.numFailures, v = h.results, l = h.lastResult, h = h.failures;
            if (s === 0) return o ? v : l;
            throw new We("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(c, " operations failed"), h);
          });
        });
      }, ne.prototype.bulkPut = function(e, t, n) {
        var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var f = r.schema.primKey, u = f.auto, f = f.keyPath;
          if (f && i) throw new T.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var c = e.length, f = f && u ? e.map(Xt(f)) : e;
          return r.core.mutate({ trans: a, type: "put", keys: i, values: f, wantResults: o }).then(function(h) {
            var s = h.numFailures, v = h.results, l = h.lastResult, h = h.failures;
            if (s === 0) return o ? v : l;
            throw new We("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(c, " operations failed"), h);
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
              var l = s.key, h = s.changes, m = u[v];
              if (m) {
                for (var y = 0, g = Object.keys(h); y < g.length; y++) {
                  var w = g[y], _ = h[w];
                  if (w === t.schema.primKey.keyPath) {
                    if (H(_, l) !== 0) throw new T.Constraint("Cannot update primary key in bulkUpdate()");
                  } else le(m, w, _);
                }
                o.push(v), c.push(l), f.push(m);
              }
            });
            var p = c.length;
            return n.mutate({ trans: a, type: "put", keys: c, values: f, updates: { keys: r, changeSpecs: i } }).then(function(s) {
              var v = s.numFailures, l = s.failures;
              if (v === 0) return p;
              for (var h = 0, m = Object.keys(l); h < m.length; h++) {
                var y, g = m[h], w = o[Number(g)];
                w != null && (y = l[g], delete l[g], l[w] = y);
              }
              throw new We("".concat(t.name, ".bulkUpdate(): ").concat(v, " of ").concat(p, " operations failed"), l);
            });
          });
        });
      }, ne.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e }).then(function(i) {
            return Ht(t, e, i);
          });
        }).then(function(a) {
          var i = a.numFailures, o = a.lastResult, a = a.failures;
          if (i === 0) return o;
          throw new We("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), a);
        });
      }, ne);
      function ne() {
      }
      function Tt(e) {
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
            u = u || Wn;
            var p = { subscribers: [], fire: c = c || Q, subscribe: function(s) {
              p.subscribers.indexOf(s) === -1 && (p.subscribers.push(s), p.fire = u(p.fire, s));
            }, unsubscribe: function(s) {
              p.subscribers = p.subscribers.filter(function(v) {
                return v !== s;
              }), p.fire = p.subscribers.reduce(u, c);
            } };
            return n[a] = t[a] = p;
          }
          z(f = a).forEach(function(s) {
            var v = f[s];
            if (L(v)) o(s, f[s][0], f[s][1]);
            else {
              if (v !== "asap") throw new T.InvalidArgument("Invalid event config");
              var l = o(s, be, function() {
                for (var h = arguments.length, m = new Array(h); h--; ) m[h] = arguments[h];
                l.subscribers.forEach(function(y) {
                  Oe(function() {
                    y.apply(null, m);
                  });
                });
              });
            }
          });
        }
      }
      function St(e, t) {
        return ae(t).from({ prototype: e }), t;
      }
      function pt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Sn(e, t) {
        e.filter = rt(e.filter, t);
      }
      function On(e, t, n) {
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
      function $t(e, t, n, r) {
        var i = e.replayFilter ? rt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, a = function(u, c, f) {
            var p, s;
            i && !i(c, f, function(v) {
              return c.stop(v);
            }, function(v) {
              return c.fail(v);
            }) || ((s = "" + (p = c.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(p)), W(o, s) || (o[s] = !0, t(u, c, f)));
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
      var Ot = (lr.prototype.execute = function(e) {
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
      var qr = (ee.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ue.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, ue.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = rt(t.algorithm, e);
      }, ee.prototype._iterate = function(e, t) {
        return $t(this._ctx, e, t, this._ctx.table.core);
      }, ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && J(n, e), t._ctx = n, t;
      }, ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return $t(t, e, n, t.table.core);
        });
      }, ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, i = r.table.core;
          if (pt(r, !0)) return i.count({ trans: n, query: { index: Wt(r, i.schema), range: r.range } }).then(function(a) {
            return Math.min(a, r.limit);
          });
          var o = 0;
          return $t(r, function() {
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
          return H(o(c, i), o(f, i)) * a;
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
          return $t(r, function(u) {
            return a.push(u);
          }, n, r.table.core).then(function() {
            return a;
          });
        }, e);
      }, ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, pt(t) ? On(t, function() {
          var n = e;
          return function(r, i) {
            return n === 0 || (n === 1 ? --n : i(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : On(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), On(this._ctx, function() {
          var t = e;
          return function(n, r, i) {
            return --t <= 0 && r(i), 0 <= t;
          };
        }, !0), this;
      }, ee.prototype.until = function(e, t) {
        return Sn(this._ctx, function(n, r, i) {
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
        return Sn(this._ctx, function(n) {
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
        return Sn(this._ctx, function(i) {
          var r = i.primaryKey.toString(), i = W(t, r);
          return t[r] = !0, !i;
        }), this;
      }, ee.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var i, o, a;
          a = typeof e == "function" ? e : (i = z(e), o = i.length, function(g) {
            for (var w = !1, _ = 0; _ < o; ++_) {
              var E = i[_], S = e[E], D = Pe(g, E);
              S instanceof Ot ? (le(g, E, S.execute(D)), w = !0) : D !== S && (le(g, E, S), w = !0);
            }
            return w;
          });
          var u = n.table.core, s = u.schema.primaryKey, c = s.outbound, f = s.extractKey, p = 200, s = t.db._options.modifyChunkSize;
          s && (p = typeof s == "object" ? s[u.name] || s["*"] || 200 : s);
          function v(g, E) {
            var _ = E.failures, E = E.numFailures;
            h += g - E;
            for (var S = 0, D = z(_); S < D.length; S++) {
              var P = D[S];
              l.push(_[P]);
            }
          }
          var l = [], h = 0, m = [], y = e === fr;
          return t.clone().primaryKeys().then(function(g) {
            function w(E) {
              var S = Math.min(p, g.length - E), D = g.slice(E, E + S);
              return (y ? Promise.resolve([]) : u.getMany({ trans: r, keys: D, cache: "immutable" })).then(function(P) {
                var C = [], N = [], I = c ? [] : null, B = y ? D : [];
                if (!y) for (var Y = 0; Y < S; ++Y) {
                  var $ = P[Y], G = { value: Te($), primKey: g[E + Y] };
                  a.call(G, G.value, G) !== !1 && (G.value == null ? B.push(g[E + Y]) : c || H(f($), f(G.value)) === 0 ? (N.push(G.value), c && I.push(g[E + Y])) : (B.push(g[E + Y]), C.push(G.value)));
                }
                return Promise.resolve(0 < C.length && u.mutate({ trans: r, type: "add", values: C }).then(function(oe) {
                  for (var V in oe.failures) B.splice(parseInt(V), 1);
                  v(C.length, oe);
                })).then(function() {
                  return (0 < N.length || _ && typeof e == "object") && u.mutate({ trans: r, type: "put", keys: I, values: N, criteria: _, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < E }).then(function(oe) {
                    return v(N.length, oe);
                  });
                }).then(function() {
                  return (0 < B.length || _ && y) && u.mutate({ trans: r, type: "delete", keys: B, criteria: _, isAdditionalChunk: 0 < E }).then(function(oe) {
                    return Ht(n.table, B, oe);
                  }).then(function(oe) {
                    return v(B.length, oe);
                  });
                }).then(function() {
                  return g.length > E + S && w(E + p);
                });
              });
            }
            var _ = pt(n) && n.limit === 1 / 0 && (typeof e != "function" || y) && { index: n.index, range: n.range };
            return w(0).then(function() {
              if (0 < l.length) throw new vt("Error modifying one or more objects", l, h, m);
              return g.length;
            });
          });
        });
      }, ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !pt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(fr) : this._write(function(n) {
          var r = e.table.core.schema.primaryKey, i = t;
          return e.table.core.count({ trans: n, query: { index: r, range: i } }).then(function(o) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: i }).then(function(c) {
              var u = c.failures, c = c.numFailures;
              if (c) throw new vt("Could not delete some values", Object.keys(u).map(function(f) {
                return u[f];
              }), o - c);
              return o - c;
            });
          });
        });
      }, ee);
      function ee() {
      }
      var fr = function(e, t) {
        return t.value = null;
      };
      function Mr(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Lr(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function Se(e, t, n) {
        return e = e instanceof dr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function yt(e) {
        return new e.Collection(e, function() {
          return hr("");
        }).limit(0);
      }
      function Jt(e, t, n, r) {
        var i, o, a, u, c, f, p, s = n.length;
        if (!n.every(function(h) {
          return typeof h == "string";
        })) return Se(e, nr);
        function v(h) {
          i = h === "next" ? function(y) {
            return y.toUpperCase();
          } : function(y) {
            return y.toLowerCase();
          }, o = h === "next" ? function(y) {
            return y.toLowerCase();
          } : function(y) {
            return y.toUpperCase();
          }, a = h === "next" ? Mr : Lr;
          var m = n.map(function(y) {
            return { lower: o(y), upper: i(y) };
          }).sort(function(y, g) {
            return a(y.lower, g.lower);
          });
          u = m.map(function(y) {
            return y.upper;
          }), c = m.map(function(y) {
            return y.lower;
          }), p = (f = h) === "next" ? "" : r;
        }
        v("next"), e = new e.Collection(e, function() {
          return ze(u[0], c[s - 1] + r);
        }), e._ondirectionchange = function(h) {
          v(h);
        };
        var l = 0;
        return e._addAlgorithm(function(h, m, y) {
          var g = h.key;
          if (typeof g != "string") return !1;
          var w = o(g);
          if (t(w, c, l)) return !0;
          for (var _ = null, E = l; E < s; ++E) {
            var S = (function(D, P, C, N, I, B) {
              for (var Y = Math.min(D.length, N.length), $ = -1, G = 0; G < Y; ++G) {
                var oe = P[G];
                if (oe !== N[G]) return I(D[G], C[G]) < 0 ? D.substr(0, G) + C[G] + C.substr(G + 1) : I(D[G], N[G]) < 0 ? D.substr(0, G) + N[G] + C.substr(G + 1) : 0 <= $ ? D.substr(0, $) + P[$] + C.substr($ + 1) : null;
                I(D[G], oe) < 0 && ($ = G);
              }
              return Y < N.length && B === "next" ? D + C.substr(D.length) : Y < D.length && B === "prev" ? D.substr(0, C.length) : $ < 0 ? null : D.substr(0, $) + N[$] + C.substr($ + 1);
            })(g, w, u[E], c[E], a, f);
            S === null && _ === null ? l = E + 1 : (_ === null || 0 < a(_, S)) && (_ = S);
          }
          return m(_ !== null ? function() {
            h.continue(_ + p);
          } : y), !1;
        }), e;
      }
      function ze(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function hr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var dr = (Object.defineProperty(pe.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), pe.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? yt(this) : new this.Collection(this, function() {
            return ze(e, t, !n, !r);
          });
        } catch {
          return Se(this, je);
        }
      }, pe.prototype.equals = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return hr(e);
        });
      }, pe.prototype.above = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return ze(e, void 0, !0);
        });
      }, pe.prototype.aboveOrEqual = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return ze(e, void 0, !1);
        });
      }, pe.prototype.below = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return ze(void 0, e, !1, !0);
        });
      }, pe.prototype.belowOrEqual = function(e) {
        return e == null ? Se(this, je) : new this.Collection(this, function() {
          return ze(void 0, e);
        });
      }, pe.prototype.startsWith = function(e) {
        return typeof e != "string" ? Se(this, nr) : this.between(e, e + nt, !0, !0);
      }, pe.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Jt(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], nt);
      }, pe.prototype.equalsIgnoreCase = function(e) {
        return Jt(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, pe.prototype.anyOfIgnoreCase = function() {
        var e = De.apply(Me, arguments);
        return e.length === 0 ? yt(this) : Jt(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, pe.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = De.apply(Me, arguments);
        return e.length === 0 ? yt(this) : Jt(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, nt);
      }, pe.prototype.anyOf = function() {
        var e = this, t = De.apply(Me, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return Se(this, je);
        }
        if (t.length === 0) return yt(this);
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
      }, pe.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, pe.prototype.noneOf = function() {
        var e = De.apply(Me, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Se(this, je);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, pe.prototype.inAnyRange = function(g, t) {
        var n = this, r = this._cmp, i = this._ascending, o = this._descending, a = this._min, u = this._max;
        if (g.length === 0) return yt(this);
        if (!g.every(function(w) {
          return w[0] !== void 0 && w[1] !== void 0 && i(w[0], w[1]) <= 0;
        })) return Se(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", T.InvalidArgument);
        var c = !t || t.includeLowers !== !1, f = t && t.includeUppers === !0, p, s = i;
        function v(w, _) {
          return s(w[0], _[0]);
        }
        try {
          (p = g.reduce(function(w, _) {
            for (var E = 0, S = w.length; E < S; ++E) {
              var D = w[E];
              if (r(_[0], D[1]) < 0 && 0 < r(_[1], D[0])) {
                D[0] = a(D[0], _[0]), D[1] = u(D[1], _[1]);
                break;
              }
            }
            return E === S && w.push(_), w;
          }, [])).sort(v);
        } catch {
          return Se(this, je);
        }
        var l = 0, h = f ? function(w) {
          return 0 < i(w, p[l][1]);
        } : function(w) {
          return 0 <= i(w, p[l][1]);
        }, m = c ? function(w) {
          return 0 < o(w, p[l][0]);
        } : function(w) {
          return 0 <= o(w, p[l][0]);
        }, y = h, g = new this.Collection(this, function() {
          return ze(p[0][0], p[p.length - 1][1], !c, !f);
        });
        return g._ondirectionchange = function(w) {
          s = w === "next" ? (y = h, i) : (y = m, o), p.sort(v);
        }, g._addAlgorithm(function(w, _, E) {
          for (var S, D = w.key; y(D); ) if (++l === p.length) return _(E), !1;
          return !h(S = D) && !m(S) || (n._cmp(D, p[l][1]) === 0 || n._cmp(D, p[l][0]) === 0 || _(function() {
            s === i ? w.continue(p[l][0]) : w.continue(p[l][1]);
          }), !1);
        }), g;
      }, pe.prototype.startsWithAnyOf = function() {
        var e = De.apply(Me, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? yt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + nt];
        })) : Se(this, "startsWithAnyOf() only works with strings");
      }, pe);
      function pe() {
      }
      function Ne(e) {
        return re(function(t) {
          return Pt(t), e(t.target.error), !1;
        });
      }
      function Pt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Ct = "storagemutated", Pn = "x-storagemutated-1", Ye = Tt(null, Ct), Ur = (Ke.prototype._lock = function() {
        return ce(!F.global), ++this._reculock, this._reculock !== 1 || F.global || (F.lockOwnerFor = this), this;
      }, Ke.prototype._unlock = function() {
        if (ce(!F.global), --this._reculock == 0) for (F.global || (F.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            tt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Ke.prototype._locked = function() {
        return this._reculock && F.lockOwnerFor !== this;
      }, Ke.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (ce(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new T.DatabaseClosed(r);
          case "MissingAPIError":
            throw new T.MissingAPI(r.message, r);
          default:
            throw new T.OpenFailed(r);
        }
        if (!this.active) throw new T.TransactionInactive();
        return ce(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = re(function(i) {
          Pt(i), t._reject(e.error);
        }), e.onabort = re(function(i) {
          Pt(i), t.active && t._reject(new T.Abort(e.error)), t.active = !1, t.on("abort").fire(i);
        }), e.oncomplete = re(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Ye.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Ke.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ue(new T.ReadOnly("Transaction is readonly"));
        if (!this.active) return ue(new T.TransactionInactive());
        if (this._locked()) return new j(function(o, a) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(o, a);
          }, F]);
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
        if (W(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new T.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, Ke);
      function Ke() {
      }
      function Cn(e, t, n, r, i, o, a, u) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: i, compound: o, src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + pr(t), type: u };
      }
      function pr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function kn(e, t, n) {
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
      function An(e) {
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
      function yr(e) {
        return [].slice.call(e);
      }
      var Vr = 0;
      function At(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Gr(e, t, c) {
        function r(y) {
          if (y.type === 3) return null;
          if (y.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var l = y.lower, h = y.upper, m = y.lowerOpen, y = y.upperOpen;
          return l === void 0 ? h === void 0 ? null : t.upperBound(h, !!y) : h === void 0 ? t.lowerBound(l, !!m) : t.bound(l, h, !!m, !!y);
        }
        function i(v) {
          var l, h = v.name;
          return { name: h, schema: v, mutate: function(m) {
            var y = m.trans, g = m.type, w = m.keys, _ = m.values, E = m.range;
            return new Promise(function(S, D) {
              S = re(S);
              var P = y.objectStore(h), C = P.keyPath == null, N = g === "put" || g === "add";
              if (!N && g !== "delete" && g !== "deleteRange") throw new Error("Invalid operation type: " + g);
              var I, B = (w || _ || { length: 1 }).length;
              if (w && _ && w.length !== _.length) throw new Error("Given keys array must have same length as given values array.");
              if (B === 0) return S({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Y(we) {
                ++oe, Pt(we);
              }
              var $ = [], G = [], oe = 0;
              if (g === "deleteRange") {
                if (E.type === 4) return S({ numFailures: oe, failures: G, results: [], lastResult: void 0 });
                E.type === 3 ? $.push(I = P.clear()) : $.push(I = P.delete(r(E)));
              } else {
                var C = N ? C ? [_, w] : [_, null] : [w, null], V = C[0], me = C[1];
                if (N) for (var ve = 0; ve < B; ++ve) $.push(I = me && me[ve] !== void 0 ? P[g](V[ve], me[ve]) : P[g](V[ve])), I.onerror = Y;
                else for (ve = 0; ve < B; ++ve) $.push(I = P[g](V[ve])), I.onerror = Y;
              }
              function fn(we) {
                we = we.target.result, $.forEach(function(at, Xn) {
                  return at.error != null && (G[Xn] = at.error);
                }), S({ numFailures: oe, failures: G, results: g === "delete" ? w : $.map(function(at) {
                  return at.result;
                }), lastResult: we });
              }
              I.onerror = function(we) {
                Y(we), fn(we);
              }, I.onsuccess = fn;
            });
          }, getMany: function(m) {
            var y = m.trans, g = m.keys;
            return new Promise(function(w, _) {
              w = re(w);
              for (var E, S = y.objectStore(h), D = g.length, P = new Array(D), C = 0, N = 0, I = function($) {
                $ = $.target, P[$._pos] = $.result, ++N === C && w(P);
              }, B = Ne(_), Y = 0; Y < D; ++Y) g[Y] != null && ((E = S.get(g[Y]))._pos = Y, E.onsuccess = I, E.onerror = B, ++C);
              C === 0 && w(P);
            });
          }, get: function(m) {
            var y = m.trans, g = m.key;
            return new Promise(function(w, _) {
              w = re(w);
              var E = y.objectStore(h).get(g);
              E.onsuccess = function(S) {
                return w(S.target.result);
              }, E.onerror = Ne(_);
            });
          }, query: (l = f, function(m) {
            return new Promise(function(y, g) {
              y = re(y);
              var w, _, E, C = m.trans, S = m.values, D = m.limit, I = m.query, P = D === 1 / 0 ? void 0 : D, N = I.index, I = I.range, C = C.objectStore(h), N = N.isPrimaryKey ? C : C.index(N.name), I = r(I);
              if (D === 0) return y({ result: [] });
              l ? ((P = S ? N.getAll(I, P) : N.getAllKeys(I, P)).onsuccess = function(B) {
                return y({ result: B.target.result });
              }, P.onerror = Ne(g)) : (w = 0, _ = !S && "openKeyCursor" in N ? N.openKeyCursor(I) : N.openCursor(I), E = [], _.onsuccess = function(B) {
                var Y = _.result;
                return Y ? (E.push(S ? Y.value : Y.primaryKey), ++w === D ? y({ result: E }) : void Y.continue()) : y({ result: E });
              }, _.onerror = Ne(g));
            });
          }), openCursor: function(m) {
            var y = m.trans, g = m.values, w = m.query, _ = m.reverse, E = m.unique;
            return new Promise(function(S, D) {
              S = re(S);
              var N = w.index, P = w.range, C = y.objectStore(h), C = N.isPrimaryKey ? C : C.index(N.name), N = _ ? E ? "prevunique" : "prev" : E ? "nextunique" : "next", I = !g && "openKeyCursor" in C ? C.openKeyCursor(r(P), N) : C.openCursor(r(P), N);
              I.onerror = Ne(D), I.onsuccess = re(function(B) {
                var Y, $, G, oe, V = I.result;
                V ? (V.___id = ++Vr, V.done = !1, Y = V.continue.bind(V), $ = ($ = V.continuePrimaryKey) && $.bind(V), G = V.advance.bind(V), oe = function() {
                  throw new Error("Cursor not stopped");
                }, V.trans = y, V.stop = V.continue = V.continuePrimaryKey = V.advance = function() {
                  throw new Error("Cursor not started");
                }, V.fail = re(D), V.next = function() {
                  var me = this, ve = 1;
                  return this.start(function() {
                    return ve-- ? me.continue() : me.stop();
                  }).then(function() {
                    return me;
                  });
                }, V.start = function(me) {
                  function ve() {
                    if (I.result) try {
                      me();
                    } catch (we) {
                      V.fail(we);
                    }
                    else V.done = !0, V.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, V.stop();
                  }
                  var fn = new Promise(function(we, at) {
                    we = re(we), I.onerror = Ne(at), V.fail = at, V.stop = function(Xn) {
                      V.stop = V.continue = V.continuePrimaryKey = V.advance = oe, we(Xn);
                    };
                  });
                  return I.onsuccess = re(function(we) {
                    I.onsuccess = ve, ve();
                  }), V.continue = Y, V.continuePrimaryKey = $, V.advance = G, ve(), fn;
                }, S(V)) : S(null);
              }, D);
            });
          }, count: function(m) {
            var y = m.query, g = m.trans, w = y.index, _ = y.range;
            return new Promise(function(E, S) {
              var D = g.objectStore(h), P = w.isPrimaryKey ? D : D.index(w.name), D = r(_), P = D ? P.count(D) : P.count();
              P.onsuccess = re(function(C) {
                return E(C.target.result);
              }), P.onerror = Ne(S);
            });
          } };
        }
        var o, a, u, p = (a = c, u = yr((o = e).objectStoreNames), { schema: { name: o.name, tables: u.map(function(v) {
          return a.objectStore(v);
        }).map(function(v) {
          var l = v.keyPath, y = v.autoIncrement, h = L(l), m = {}, y = { name: v.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: l == null, compound: h, keyPath: l, autoIncrement: y, unique: !0, extractKey: An(l) }, indexes: yr(v.indexNames).map(function(g) {
            return v.index(g);
          }).map(function(E) {
            var w = E.name, _ = E.unique, S = E.multiEntry, E = E.keyPath, S = { name: w, compound: L(E), keyPath: E, unique: _, multiEntry: S, extractKey: An(E) };
            return m[At(E)] = S;
          }), getIndexByKeyPath: function(g) {
            return m[At(g)];
          } };
          return m[":id"] = y.primaryKey, l != null && (m[At(l)] = y.primaryKey), y;
        }) }, hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), c = p.schema, f = p.hasGetAll, p = c.tables.map(i), s = {};
        return p.forEach(function(v) {
          return s[v.name] = v;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(v) {
          if (!s[v]) throw new Error("Table '".concat(v, "' not found"));
          return s[v];
        }, MIN_KEY: -1 / 0, MAX_KEY: kt(t), schema: c };
      }
      function zr(e, t, n, r) {
        var i = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = Gr(t, i, r), e.dbcore.reduce(function(o, a) {
          return a = a.create, x(x({}, o), a(o));
        }, r)) };
      }
      function Zt(e, r) {
        var n = r.db, r = zr(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(i) {
          var o = i.name;
          e.core.schema.tables.some(function(a) {
            return a.name === o;
          }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
        });
      }
      function en(e, t, n, r) {
        n.forEach(function(i) {
          var o = r[i];
          t.forEach(function(a) {
            var u = (function c(f, p) {
              return te(f, p) || (f = he(f)) && c(f, p);
            })(a, i);
            (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? Z(a, i, { get: function() {
              return this.table(i);
            }, set: function(c) {
              X(this, i, { value: c, writable: !0, configurable: !0, enumerable: !0 });
            } }) : a[i] = new e.Table(i, o));
          });
        });
      }
      function Dn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function Yr(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Qr(e, t, n, r) {
        var i = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = kn("$meta", vr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(n), o._completion.catch(r);
        var a = o._reject.bind(o), u = F.transless || F;
        Ue(function() {
          return F.trans = o, F.transless = u, t !== 0 ? (Zt(e, n), f = t, ((c = o).storeNames.includes("$meta") ? c.table("$meta").get("version").then(function(p) {
            return p ?? f;
          }) : j.resolve(f)).then(function(p) {
            return v = p, l = o, h = n, m = [], p = (s = e)._versions, y = s._dbSchema = nn(0, s.idbdb, h), (p = p.filter(function(g) {
              return g._cfg.version >= v;
            })).length !== 0 ? (p.forEach(function(g) {
              m.push(function() {
                var w = y, _ = g._cfg.dbschema;
                rn(s, w, h), rn(s, _, h), y = s._dbSchema = _;
                var E = Rn(w, _);
                E.add.forEach(function(N) {
                  In(h, N[0], N[1].primKey, N[1].indexes);
                }), E.change.forEach(function(N) {
                  if (N.recreate) throw new T.Upgrade("Not yet support for changing primary key");
                  var I = h.objectStore(N.name);
                  N.add.forEach(function(B) {
                    return tn(I, B);
                  }), N.change.forEach(function(B) {
                    I.deleteIndex(B.name), tn(I, B);
                  }), N.del.forEach(function(B) {
                    return I.deleteIndex(B);
                  });
                });
                var S = g._cfg.contentUpgrade;
                if (S && g._cfg.version > v) {
                  Zt(s, h), l._memoizedTables = {};
                  var D = Bt(_);
                  E.del.forEach(function(N) {
                    D[N] = w[N];
                  }), Dn(s, [s.Transaction.prototype]), en(s, [s.Transaction.prototype], z(D), D), l.schema = D;
                  var P, C = Xe(S);
                  return C && ht(), E = j.follow(function() {
                    var N;
                    (P = S(l)) && C && (N = Ve.bind(null, null), P.then(N, N));
                  }), P && typeof P.then == "function" ? j.resolve(P) : E.then(function() {
                    return P;
                  });
                }
              }), m.push(function(w) {
                var _, E, S = g._cfg.dbschema;
                _ = S, E = w, [].slice.call(E.db.objectStoreNames).forEach(function(D) {
                  return _[D] == null && E.db.deleteObjectStore(D);
                }), Dn(s, [s.Transaction.prototype]), en(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
              }), m.push(function(w) {
                s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === g._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(_) {
                  return _ !== "$meta";
                })) : w.objectStore("$meta").put(g._cfg.version, "version"));
              });
            }), (function g() {
              return m.length ? j.resolve(m.shift()(l.idbtrans)).then(g) : j.resolve();
            })().then(function() {
              mr(y, h);
            })) : j.resolve();
            var s, v, l, h, m, y;
          }).catch(a)) : (z(i).forEach(function(p) {
            In(n, p, i[p].primKey, i[p].indexes);
          }), Zt(e, n), void j.follow(function() {
            return e.on.populate.fire(o);
          }).catch(a));
          var c, f;
        });
      }
      function Xr(e, t) {
        mr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = nn(0, e.idbdb, t);
        rn(e, e._dbSchema, t);
        for (var r = 0, i = Rn(n, e._dbSchema).change; r < i.length; r++) {
          var o = (function(a) {
            if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var u = t.objectStore(a.name);
            a.add.forEach(function(c) {
              Ce && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(c.src)), tn(u, c);
            });
          })(i[r]);
          if (typeof o == "object") return o.value;
        }
      }
      function Rn(e, t) {
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
                var p = u[f], s = c[f];
                p ? p.src !== s.src && a.change.push(s) : a.add.push(s);
              }
              (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
            }
          } else r.add.push([n, o]);
        }
        return r;
      }
      function In(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(o) {
          return tn(i, o);
        }), i;
      }
      function mr(e, t) {
        z(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (Ce && console.debug("Dexie: Creating missing table", n), In(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function tn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function nn(e, t, n) {
        var r = {};
        return Re(t.objectStoreNames, 0).forEach(function(i) {
          for (var o = n.objectStore(i), a = Cn(pr(f = o.keyPath), f || "", !0, !1, !!o.autoIncrement, f && typeof f != "string", !0), u = [], c = 0; c < o.indexNames.length; ++c) {
            var p = o.index(o.indexNames[c]), f = p.keyPath, p = Cn(p.name, f, !!p.unique, !!p.multiEntry, !1, f && typeof f != "string", !1);
            u.push(p);
          }
          r[i] = kn(i, a, u);
        }), r;
      }
      function rn(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
          var o = r[i], a = n.objectStore(o);
          e._hasGetAll = "getAll" in a;
          for (var u = 0; u < a.indexNames.length; ++u) {
            var c = a.indexNames[u], f = a.index(c).keyPath, p = typeof f == "string" ? f : "[" + Re(f).join("+") + "]";
            !t[o] || (f = t[o].idxByName[p]) && (f.name = c, delete t[o].idxByName[p], t[o].idxByName[c] = f);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && q.WorkerGlobalScope && q instanceof q.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function vr(e) {
        return e.split(",").map(function(t, n) {
          var o = t.split(":"), r = (i = o[1]) === null || i === void 0 ? void 0 : i.trim(), i = (t = o[0].trim()).replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
          return Cn(i, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), L(o), n === 0, r);
        });
      }
      var Hr = (mt.prototype._createTableSchema = kn, mt.prototype._parseIndexSyntax = vr, mt.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        z(e).forEach(function(r) {
          if (e[r] !== null) {
            var i = n._parseIndexSyntax(e[r]), o = i.shift();
            if (!o) throw new T.Schema("Invalid schema for table " + r + ": " + e[r]);
            if (o.unique = !0, o.multi) throw new T.Schema("Primary key cannot be multiEntry*");
            i.forEach(function(a) {
              if (a.auto) throw new T.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!a.keyPath) throw new T.Schema("Index must have a name and cannot be an empty string");
            }), i = n._createTableSchema(r, o, i), t[r] = i;
          }
        });
      }, mt.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? J(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, i = {};
        return n.forEach(function(o) {
          J(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
        }), t._dbSchema = i, Dn(t, [t._allTables, t, t.Transaction.prototype]), en(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], z(i), i), t._storeNames = z(i), this;
      }, mt.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = Kt(this._cfg.contentUpgrade || Q, e), this;
      }, mt);
      function mt() {
      }
      function Nn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Be(Qt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Kn(e) {
        return e && typeof e.databases == "function";
      }
      function jn(e) {
        return Ue(function() {
          return F.letThrough = !0, e();
        });
      }
      function Bn(e) {
        return !("from" in e);
      }
      var ye = function(e, t) {
        if (!this) {
          var n = new ye();
          return e && "d" in e && J(n, e), n;
        }
        J(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Dt(e, t, n) {
        var r = H(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Bn(e)) return J(e, { from: t, to: n, d: 1 });
          var i = e.l, r = e.r;
          if (H(n, e.from) < 0) return i ? Dt(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, br(e);
          if (0 < H(t, e.to)) return r ? Dt(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, br(e);
          H(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && Rt(e, i), r && n && Rt(e, r);
        }
      }
      function Rt(e, t) {
        Bn(t) || (function n(r, c) {
          var o = c.from, a = c.to, u = c.l, c = c.r;
          Dt(r, o, a), u && n(r, u), c && n(r, c);
        })(e, t);
      }
      function gr(e, t) {
        var n = on(t), r = n.next();
        if (r.done) return !1;
        for (var i = r.value, o = on(e), a = o.next(i.from), u = a.value; !r.done && !a.done; ) {
          if (H(u.from, i.to) <= 0 && 0 <= H(u.to, i.from)) return !0;
          H(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (a = o.next(i.from)).value;
        }
        return !1;
      }
      function on(e) {
        var t = Bn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && H(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || H(n, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function br(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
        i && (t = i == "r" ? "l" : "r", n = x({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = wr(n)), e.d = wr(e);
      }
      function wr(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function an(e, t) {
        return z(t).forEach(function(n) {
          e[n] ? Rt(e[n], t[n]) : e[n] = (function r(i) {
            var o, a, u = {};
            for (o in i) W(i, o) && (a = i[o], u[o] = !a || typeof a != "object" || ut.has(a.constructor) ? a : r(a));
            return u;
          })(t[n]);
        }), e;
      }
      function Fn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && gr(t[n], e[n]);
        });
      }
      U(ye.prototype, ((ke = { add: function(e) {
        return Rt(this, e), this;
      }, addKey: function(e) {
        return Dt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Dt(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = on(this).next(e).value;
        return t && H(t.from, e) <= 0 && 0 <= H(t.to, e);
      } })[It] = function() {
        return on(this);
      }, ke));
      var it = {}, qn = {}, Mn = !1;
      function un(e) {
        an(qn, e), Mn || (Mn = !0, setTimeout(function() {
          Mn = !1, Ln(qn, !(qn = {}));
        }, 0));
      }
      function Ln(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, i = Object.values(it); r < i.length; r++) _r(a = i[r], e, n, t);
        else for (var o in e) {
          var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          u && (o = u[1], u = u[2], (a = it["idb://".concat(o, "/").concat(u)]) && _r(a, e, n, t));
        }
        n.forEach(function(c) {
          return c();
        });
      }
      function _r(e, t, n, r) {
        for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
          for (var u = a[o], c = u[0], f = [], p = 0, s = u[1]; p < s.length; p++) {
            var v = s[p];
            Fn(t, v.obsSet) ? v.subscribers.forEach(function(y) {
              return n.add(y);
            }) : r && f.push(v);
          }
          r && i.push([c, f]);
        }
        if (r) for (var l = 0, h = i; l < h.length; l++) {
          var m = h[l], c = m[0], f = m[1];
          e.queries.query[c] = f;
        }
      }
      function Wr(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? ue(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, i = Math.round(10 * e.verno), o = !1;
        function a() {
          if (t.openCanceller !== r) throw new T.DatabaseClosed("db.open() was cancelled");
        }
        function u() {
          return new j(function(v, l) {
            if (a(), !n) throw new T.MissingAPI();
            var h = e.name, m = t.autoSchema || !i ? n.open(h) : n.open(h, i);
            if (!m) throw new T.MissingAPI();
            m.onerror = Ne(l), m.onblocked = re(e._fireOnBlocked), m.onupgradeneeded = re(function(y) {
              var g;
              p = m.transaction, t.autoSchema && !e._options.allowEmptyDB ? (m.onerror = Pt, p.abort(), m.result.close(), (g = n.deleteDatabase(h)).onsuccess = g.onerror = re(function() {
                l(new T.NoSuchDatabase("Database ".concat(h, " doesnt exist")));
              })) : (p.onerror = Ne(l), y = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion, s = y < 1, e.idbdb = m.result, o && Xr(e, p), Qr(e, y / 10, p, l));
            }, l), m.onsuccess = re(function() {
              p = null;
              var y, g, w, _, E, S = e.idbdb = m.result, D = Re(S.objectStoreNames);
              if (0 < D.length) try {
                var P = S.transaction((_ = D).length === 1 ? _[0] : _, "readonly");
                if (t.autoSchema) g = S, w = P, (y = e).verno = g.version / 10, w = y._dbSchema = nn(0, g, w), y._storeNames = Re(g.objectStoreNames, 0), en(y, [y._allTables], z(w), w);
                else if (rn(e, e._dbSchema, P), ((E = Rn(nn(0, (E = e).idbdb, P), E._dbSchema)).add.length || E.change.some(function(C) {
                  return C.add.length || C.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), S.close(), i = S.version + 1, o = !0, v(u());
                Zt(e, P);
              } catch {
              }
              dt.push(e), S.onversionchange = re(function(C) {
                t.vcFired = !0, e.on("versionchange").fire(C);
              }), S.onclose = re(function(C) {
                e.on("close").fire(C);
              }), s && (E = e._deps, P = h, S = E.indexedDB, E = E.IDBKeyRange, Kn(S) || P === Qt || Nn(S, E).put({ name: P }).catch(Q)), v();
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
        var c, f = t.dbReadyResolve, p = null, s = !1;
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
              var l = t.onReadyBeingFired.reduce(Kt, Q);
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
            p && p.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), ue(v);
        }).finally(function() {
          t.openComplete = !0, f();
        }).then(function() {
          var v;
          return s && (v = {}, e.tables.forEach(function(l) {
            l.schema.indexes.forEach(function(h) {
              h.name && (v["idb://".concat(e.name, "/").concat(l.name, "/").concat(h.name)] = new ye(-1 / 0, [[[]]]));
            }), v["idb://".concat(e.name, "/").concat(l.name, "/")] = v["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new ye(-1 / 0, [[[]]]);
          }), Ye(Ct).fire(v), Ln(v, !0)), e;
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
      function sn(e, t, n) {
        for (var r = L(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r;
      }
      var $r = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return x(x({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, i = {}, o = [];
          function a(s, v, l) {
            var h = At(s), m = i[h] = i[h] || [], y = s == null ? 0 : typeof s == "string" ? 1 : s.length, g = 0 < v, g = x(x({}, l), { name: g ? "".concat(h, "(virtual-from:").concat(l.name, ")") : l.name, lowLevelIndex: l, isVirtual: g, keyTail: v, keyLength: y, extractKey: An(s), unique: !g && l.unique });
            return m.push(g), g.isPrimaryKey || o.push(g), 1 < y && a(y === 2 ? s[0] : s.slice(0, y - 1), v + 1, l), m.sort(function(w, _) {
              return w.keyTail - _.keyTail;
            }), g;
          }
          t = a(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [t];
          for (var u = 0, c = r.indexes; u < c.length; u++) {
            var f = c[u];
            a(f.keyPath, 0, f);
          }
          function p(s) {
            var v, l = s.query.index;
            return l.isVirtual ? x(x({}, s), { query: { index: l.lowLevelIndex, range: (v = s.query.range, l = l.keyTail, { type: v.type === 1 ? 2 : v.type, lower: sn(v.lower, v.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l), lowerOpen: !0, upper: sn(v.upper, v.upperOpen ? e.MIN_KEY : e.MAX_KEY, l), upperOpen: !0 }) } }) : s;
          }
          return x(x({}, n), { schema: x(x({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(s) {
            return (s = i[At(s)]) && s[0];
          } }), count: function(s) {
            return n.count(p(s));
          }, query: function(s) {
            return n.query(p(s));
          }, openCursor: function(s) {
            var v = s.query.index, l = v.keyTail, h = v.isVirtual, m = v.keyLength;
            return h ? n.openCursor(p(s)).then(function(g) {
              return g && y(g);
            }) : n.openCursor(s);
            function y(g) {
              return Object.create(g, { continue: { value: function(w) {
                w != null ? g.continue(sn(w, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? g.continue(g.key.slice(0, m).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : g.continue();
              } }, continuePrimaryKey: { value: function(w, _) {
                g.continuePrimaryKey(sn(w, e.MAX_KEY, l), _);
              } }, primaryKey: { get: function() {
                return g.primaryKey;
              } }, key: { get: function() {
                var w = g.key;
                return m === 1 ? w[0] : w.slice(0, m);
              } }, value: { get: function() {
                return g.value;
              } } });
            }
          } });
        } });
      } };
      function Vn(e, t, n, r) {
        return n = n || {}, r = r || "", z(e).forEach(function(i) {
          var o, a, u;
          W(t, i) ? (o = e[i], a = t[i], typeof o == "object" && typeof a == "object" && o && a ? (u = st(o)) !== st(a) ? n[r + i] = t[i] : u === "Object" ? Vn(o, a, n, r + i + ".") : o !== a && (n[r + i] = t[i]) : o !== a && (n[r + i] = t[i])) : n[r + i] = void 0;
        }), z(t).forEach(function(i) {
          W(e, i) || (n[r + i] = t[i]);
        }), n;
      }
      function Gn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Jr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return x(x({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return x(x({}, n), { mutate: function(i) {
            var o = F.trans, a = o.table(t).hook, u = a.deleting, c = a.creating, f = a.updating;
            switch (i.type) {
              case "add":
                if (c.fire === Q) break;
                return o._promise("readwrite", function() {
                  return p(i);
                }, !0);
              case "put":
                if (c.fire === Q && f.fire === Q) break;
                return o._promise("readwrite", function() {
                  return p(i);
                }, !0);
              case "delete":
                if (u.fire === Q) break;
                return o._promise("readwrite", function() {
                  return p(i);
                }, !0);
              case "deleteRange":
                if (u.fire === Q) break;
                return o._promise("readwrite", function() {
                  return (function s(v, l, h) {
                    return n.query({ trans: v, values: !1, query: { index: r, range: l }, limit: h }).then(function(m) {
                      var y = m.result;
                      return p({ type: "delete", keys: y, trans: v }).then(function(g) {
                        return 0 < g.numFailures ? Promise.reject(g.failures[0]) : y.length < h ? { failures: [], numFailures: 0, lastResult: void 0 } : s(v, x(x({}, l), { lower: y[y.length - 1], lowerOpen: !0 }), h);
                      });
                    });
                  })(i.trans, i.range, 1e4);
                }, !0);
            }
            return n.mutate(i);
            function p(s) {
              var v, l, h, m = F.trans, y = s.keys || Gn(r, s);
              if (!y) throw new Error("Keys missing");
              return (s = s.type === "add" || s.type === "put" ? x(x({}, s), { keys: y }) : x({}, s)).type !== "delete" && (s.values = M([], s.values)), s.keys && (s.keys = M([], s.keys)), v = n, h = y, ((l = s).type === "add" ? Promise.resolve([]) : v.getMany({ trans: l.trans, keys: h, cache: "immutable" })).then(function(g) {
                var w = y.map(function(_, E) {
                  var S, D, P, C = g[E], N = { onerror: null, onsuccess: null };
                  return s.type === "delete" ? u.fire.call(N, _, C, m) : s.type === "add" || C === void 0 ? (S = c.fire.call(N, _, s.values[E], m), _ == null && S != null && (s.keys[E] = _ = S, r.outbound || le(s.values[E], r.keyPath, _))) : (S = Vn(C, s.values[E]), (D = f.fire.call(N, S, _, C, m)) && (P = s.values[E], Object.keys(D).forEach(function(I) {
                    W(P, I) ? P[I] = D[I] : le(P, I, D[I]);
                  }))), N;
                });
                return n.mutate(s).then(function(_) {
                  for (var E = _.failures, S = _.results, D = _.numFailures, _ = _.lastResult, P = 0; P < y.length; ++P) {
                    var C = (S || y)[P], N = w[P];
                    C == null ? N.onerror && N.onerror(E[P]) : N.onsuccess && N.onsuccess(s.type === "put" && g[P] ? s.values[P] : C);
                  }
                  return { failures: E, results: S, numFailures: D, lastResult: _ };
                }).catch(function(_) {
                  return w.forEach(function(E) {
                    return E.onerror && E.onerror(_);
                  }), Promise.reject(_);
                });
              });
            }
          } });
        } });
      } };
      function Er(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) H(t.keys[i], e[o]) === 0 && (r.push(n ? Te(t.values[i]) : t.values[i]), ++o);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var Zr = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return x(x({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var i = Er(r.keys, r.trans._cache, r.cache === "clone");
            return i ? j.resolve(i) : n.getMany(r).then(function(o) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Te(o) : o }, o;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function xr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Tr(e, t) {
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
      var ei = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new ye(e.MIN_KEY, e.MAX_KEY);
        return x(x({}, e), { transaction: function(r, i, o) {
          if (F.subscr && i !== "readonly") throw new T.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(F.querier));
          return e.transaction(r, i, o);
        }, table: function(r) {
          var i = e.table(r), o = i.schema, a = o.primaryKey, s = o.indexes, u = a.extractKey, c = a.outbound, f = a.autoIncrement && s.filter(function(l) {
            return l.compound && l.keyPath.includes(a.keyPath);
          }), p = x(x({}, i), { mutate: function(l) {
            function h(I) {
              return I = "idb://".concat(t, "/").concat(r, "/").concat(I), _[I] || (_[I] = new ye());
            }
            var m, y, g, w = l.trans, _ = l.mutatedParts || (l.mutatedParts = {}), E = h(""), S = h(":dels"), D = l.type, N = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [Gn(a, l).filter(function(I) {
              return I;
            }), l.values] : [], P = N[0], C = N[1], N = l.trans._cache;
            return L(P) ? (E.addKeys(P), (N = D === "delete" || P.length === C.length ? Er(P, N) : null) || S.addKeys(P), (N || C) && (m = h, y = N, g = C, o.indexes.forEach(function(I) {
              var B = m(I.name || "");
              function Y(G) {
                return G != null ? I.extractKey(G) : null;
              }
              function $(G) {
                return I.multiEntry && L(G) ? G.forEach(function(oe) {
                  return B.addKey(oe);
                }) : B.addKey(G);
              }
              (y || g).forEach(function(G, me) {
                var V = y && Y(y[me]), me = g && Y(g[me]);
                H(V, me) !== 0 && (V != null && $(V), me != null && $(me));
              });
            }))) : P ? (C = { from: (C = P.lower) !== null && C !== void 0 ? C : e.MIN_KEY, to: (C = P.upper) !== null && C !== void 0 ? C : e.MAX_KEY }, S.add(C), E.add(C)) : (E.add(n), S.add(n), o.indexes.forEach(function(I) {
              return h(I.name).add(n);
            })), i.mutate(l).then(function(I) {
              return !P || l.type !== "add" && l.type !== "put" || (E.addKeys(I.results), f && f.forEach(function(B) {
                for (var Y = l.values.map(function(V) {
                  return B.extractKey(V);
                }), $ = B.keyPath.findIndex(function(V) {
                  return V === a.keyPath;
                }), G = 0, oe = I.results.length; G < oe; ++G) Y[G][$] = I.results[G];
                h(B.name).addKeys(Y);
              })), w.mutatedParts = an(w.mutatedParts || {}, _), I;
            });
          } }), s = function(h) {
            var m = h.query, h = m.index, m = m.range;
            return [h, new ye((h = m.lower) !== null && h !== void 0 ? h : e.MIN_KEY, (m = m.upper) !== null && m !== void 0 ? m : e.MAX_KEY)];
          }, v = { get: function(l) {
            return [a, new ye(l.key)];
          }, getMany: function(l) {
            return [a, new ye().addKeys(l.keys)];
          }, count: s, query: s, openCursor: s };
          return z(v).forEach(function(l) {
            p[l] = function(h) {
              var m = F.subscr, y = !!m, g = xr(F, i) && Tr(l, h) ? h.obsSet = {} : m;
              if (y) {
                var w = function(C) {
                  return C = "idb://".concat(t, "/").concat(r, "/").concat(C), g[C] || (g[C] = new ye());
                }, _ = w(""), E = w(":dels"), m = v[l](h), y = m[0], m = m[1];
                if ((l === "query" && y.isPrimaryKey && !h.values ? E : w(y.name || "")).add(m), !y.isPrimaryKey) {
                  if (l !== "count") {
                    var S = l === "query" && c && h.values && i.query(x(x({}, h), { values: !1 }));
                    return i[l].apply(this, arguments).then(function(C) {
                      if (l === "query") {
                        if (c && h.values) return S.then(function(Y) {
                          return Y = Y.result, _.addKeys(Y), C;
                        });
                        var N = h.values ? C.result.map(u) : C.result;
                        (h.values ? _ : E).addKeys(N);
                      } else if (l === "openCursor") {
                        var I = C, B = h.values;
                        return I && Object.create(I, { key: { get: function() {
                          return E.addKey(I.primaryKey), I.key;
                        } }, primaryKey: { get: function() {
                          var Y = I.primaryKey;
                          return E.addKey(Y), Y;
                        } }, value: { get: function() {
                          return B && _.addKey(I.primaryKey), I.value;
                        } } });
                      }
                      return C;
                    });
                  }
                  E.add(n);
                }
              }
              return i[l].apply(this, arguments);
            };
          }), p;
        } });
      } };
      function Sr(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = x({}, t), L(t.keys) && (t.keys = t.keys.filter(function(i, o) {
          return !(o in n.failures);
        })), "values" in t && L(t.values) && (t.values = t.values.filter(function(i, o) {
          return !(o in n.failures);
        })), t);
      }
      function zn(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < H(n, r.lower) : 0 <= H(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? H(e, t.upper) < 0 : H(e, t.upper) <= 0));
        var n, r;
      }
      function Or(e, t, v, r, i, o) {
        if (!v || v.length === 0) return e;
        var a = t.query.index, u = a.multiEntry, c = t.query.range, f = r.schema.primaryKey.extractKey, p = a.extractKey, s = (a.lowLevelIndex || a).extractKey, v = v.reduce(function(l, h) {
          var m = l, y = [];
          if (h.type === "add" || h.type === "put") for (var g = new ye(), w = h.values.length - 1; 0 <= w; --w) {
            var _, E = h.values[w], S = f(E);
            g.hasKey(S) || (_ = p(E), (u && L(_) ? _.some(function(I) {
              return zn(I, c);
            }) : zn(_, c)) && (g.addKey(S), y.push(E)));
          }
          switch (h.type) {
            case "add":
              var D = new ye().addKeys(t.values ? l.map(function(B) {
                return f(B);
              }) : l), m = l.concat(t.values ? y.filter(function(B) {
                return B = f(B), !D.hasKey(B) && (D.addKey(B), !0);
              }) : y.map(function(B) {
                return f(B);
              }).filter(function(B) {
                return !D.hasKey(B) && (D.addKey(B), !0);
              }));
              break;
            case "put":
              var P = new ye().addKeys(h.values.map(function(B) {
                return f(B);
              }));
              m = l.filter(function(B) {
                return !P.hasKey(t.values ? f(B) : B);
              }).concat(t.values ? y : y.map(function(B) {
                return f(B);
              }));
              break;
            case "delete":
              var C = new ye().addKeys(h.keys);
              m = l.filter(function(B) {
                return !C.hasKey(t.values ? f(B) : B);
              });
              break;
            case "deleteRange":
              var N = h.range;
              m = l.filter(function(B) {
                return !zn(f(B), N);
              });
          }
          return m;
        }, e);
        return v === e ? e : (v.sort(function(l, h) {
          return H(s(l), s(h)) || H(f(l), f(h));
        }), t.limit && t.limit < 1 / 0 && (v.length > t.limit ? v.length = t.limit : e.length === t.limit && v.length < t.limit && (i.dirty = !0)), o ? Object.freeze(v) : v);
      }
      function Pr(e, t) {
        return H(e.lower, t.lower) === 0 && H(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ti(e, t) {
        return (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = H(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return 1;
            if (o) return -1;
          }
          return r;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(n, r, i, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = H(n, r)) === 0) {
            if (i && o) return 0;
            if (i) return -1;
            if (o) return 1;
          }
          return r;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function ni(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var i, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (i = e, o = t, setTimeout(function() {
            i.subscribers.size === 0 && qe(o, i);
          }, 3e3));
        });
      }
      var ri = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return x(x({}, e), { transaction: function(n, r, i) {
          var o, a, u = e.transaction(n, r, i);
          return r === "readwrite" && (a = (o = new AbortController()).signal, i = function(c) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var f = /* @__PURE__ */ new Set(), p = 0, s = n; p < s.length; p++) {
                  var v = s[p], l = it["idb://".concat(t, "/").concat(v)];
                  if (l) {
                    var h = e.table(v), m = l.optimisticOps.filter(function(B) {
                      return B.trans === u;
                    });
                    if (u._explicit && c && u.mutatedParts) for (var y = 0, g = Object.values(l.queries.query); y < g.length; y++) for (var w = 0, _ = (D = g[y]).slice(); w < _.length; w++) Fn((P = _[w]).obsSet, u.mutatedParts) && (qe(D, P), P.subscribers.forEach(function(B) {
                      return f.add(B);
                    }));
                    else if (0 < m.length) {
                      l.optimisticOps = l.optimisticOps.filter(function(B) {
                        return B.trans !== u;
                      });
                      for (var E = 0, S = Object.values(l.queries.query); E < S.length; E++) for (var D, P, C, N = 0, I = (D = S[E]).slice(); N < I.length; N++) (P = I[N]).res != null && u.mutatedParts && (c && !P.dirty ? (C = Object.isFrozen(P.res), C = Or(P.res, P.req, m, h, P, C), P.dirty ? (qe(D, P), P.subscribers.forEach(function(B) {
                        return f.add(B);
                      })) : C !== P.res && (P.res = C, P.promise = j.resolve({ result: C }))) : (P.dirty && qe(D, P), P.subscribers.forEach(function(B) {
                        return f.add(B);
                      })));
                    }
                  }
                }
                f.forEach(function(B) {
                  return B();
                });
              }
            };
          }, u.addEventListener("abort", i(!1), { signal: a }), u.addEventListener("error", i(!1), { signal: a }), u.addEventListener("complete", i(!0), { signal: a })), u;
        }, table: function(n) {
          var r = e.table(n), i = r.schema.primaryKey;
          return x(x({}, r), { mutate: function(o) {
            var a = F.trans;
            if (i.outbound || a.db._options.cache === "disabled" || a.explicit || a.idbtrans.mode !== "readwrite") return r.mutate(o);
            var u = it["idb://".concat(t, "/").concat(n)];
            return u ? (a = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Gn(i, o).some(function(c) {
              return c == null;
            })) ? (u.optimisticOps.push(o), o.mutatedParts && un(o.mutatedParts), a.then(function(c) {
              0 < c.numFailures && (qe(u.optimisticOps, o), (c = Sr(0, o, c)) && u.optimisticOps.push(c), o.mutatedParts && un(o.mutatedParts));
            }), a.catch(function() {
              qe(u.optimisticOps, o), o.mutatedParts && un(o.mutatedParts);
            })) : a.then(function(c) {
              var f = Sr(0, x(x({}, o), { values: o.values.map(function(p, s) {
                var v;
                return c.failures[s] ? p : (p = (v = i.keyPath) !== null && v !== void 0 && v.includes(".") ? Te(p) : x({}, p), le(p, i.keyPath, c.results[s]), p);
              }) }), c);
              u.optimisticOps.push(f), queueMicrotask(function() {
                return o.mutatedParts && un(o.mutatedParts);
              });
            }), a) : r.mutate(o);
          }, query: function(o) {
            if (!xr(F, r) || !Tr("query", o)) return r.query(o);
            var a = ((f = F.trans) === null || f === void 0 ? void 0 : f.db._options.cache) === "immutable", s = F, u = s.requery, c = s.signal, f = (function(h, m, y, g) {
              var w = it["idb://".concat(h, "/").concat(m)];
              if (!w) return [];
              if (!(m = w.queries[y])) return [null, !1, w, null];
              var _ = m[(g.query ? g.query.index.name : null) || ""];
              if (!_) return [null, !1, w, null];
              switch (y) {
                case "query":
                  var E = _.find(function(S) {
                    return S.req.limit === g.limit && S.req.values === g.values && Pr(S.req.query.range, g.query.range);
                  });
                  return E ? [E, !0, w, _] : [_.find(function(S) {
                    return ("limit" in S.req ? S.req.limit : 1 / 0) >= g.limit && (!g.values || S.req.values) && ti(S.req.query.range, g.query.range);
                  }), !1, w, _];
                case "count":
                  return E = _.find(function(S) {
                    return Pr(S.req.query.range, g.query.range);
                  }), [E, !!E, w, _];
              }
            })(t, n, "query", o), p = f[0], s = f[1], v = f[2], l = f[3];
            return p && s ? p.obsSet = o.obsSet : (s = r.query(o).then(function(h) {
              var m = h.result;
              if (p && (p.res = m), a) {
                for (var y = 0, g = m.length; y < g; ++y) Object.freeze(m[y]);
                Object.freeze(m);
              } else h.result = Te(m);
              return h;
            }).catch(function(h) {
              return l && p && qe(l, p), Promise.reject(h);
            }), p = { obsSet: o.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, l ? l.push(p) : (l = [p], (v = v || (it["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = l)), ni(p, l, u, c), p.promise.then(function(h) {
              return { result: Or(h.result, o, v?.optimisticOps, r, p, a) };
            });
          } });
        } });
      } };
      function cn(e, t) {
        return new Proxy(e, { get: function(n, r, i) {
          return r === "db" ? t : Reflect.get(n, r, i);
        } });
      }
      var Be = (se.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new T.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new T.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(Yr), n.stores({}), this._state.autoSchema = !1, n);
      }, se.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || F.letThrough || this._vip) ? e() : new j(function(n, r) {
          if (t._state.openComplete) return r(new T.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new T.DatabaseClosed());
            t.open().catch(Q);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, se.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, i = e.name;
        return i && this.unuse({ stack: t, name: i }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: i }), e.sort(function(o, a) {
          return o.level - a.level;
        }), this;
      }, se.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(i) {
          return r ? i.create !== r : !!n && i.name !== n;
        })), this;
      }, se.prototype.open = function() {
        var e = this;
        return tt(Le, function() {
          return Wr(e);
        });
      }, se.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
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
      }, se.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new T.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new T.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, se.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new j(function(i, o) {
          function a() {
            t.close(e);
            var u = t._deps.indexedDB.deleteDatabase(t.name);
            u.onsuccess = re(function() {
              var c, f, p;
              c = t._deps, f = t.name, p = c.indexedDB, c = c.IDBKeyRange, Kn(p) || f === Qt || Nn(p, c).delete(f).catch(Q), i();
            }), u.onerror = Ne(o), u.onblocked = t._fireOnBlocked;
          }
          if (n) throw new T.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
        });
      }, se.prototype.backendDB = function() {
        return this.idbdb;
      }, se.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, se.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, se.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, se.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(se.prototype, "tables", { get: function() {
        var e = this;
        return z(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), se.prototype.transaction = function() {
        var e = (function(t, n, r) {
          var i = arguments.length;
          if (i < 2) throw new T.InvalidArgument("Too few arguments");
          for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
          return r = o.pop(), [t, bt(o), r];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, se.prototype._transaction = function(e, t, n) {
        var r = this, i = F.trans;
        i && i.db === this && e.indexOf("!") === -1 || (i = null);
        var o, a, u = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (a = t.map(function(f) {
            if (f = f instanceof r.Table ? f.name : f, typeof f != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return f;
          }), e == "r" || e === xn) o = xn;
          else {
            if (e != "rw" && e != Tn) throw new T.InvalidArgument("Invalid transaction mode: " + e);
            o = Tn;
          }
          if (i) {
            if (i.mode === xn && o === Tn) {
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
          return i ? i._promise(null, function(p, s) {
            s(f);
          }) : ue(f);
        }
        var c = (function f(p, s, v, l, h) {
          return j.resolve().then(function() {
            var m = F.transless || F, y = p._createTransaction(s, v, p._dbSchema, l);
            if (y.explicit = !0, m = { trans: y, transless: m }, l) y.idbtrans = l.idbtrans;
            else try {
              y.create(), y.idbtrans._explicit = !0, p._state.PR1398_maxLoop = 3;
            } catch (_) {
              return _.name === b.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                return f(p, s, v, null, h);
              })) : ue(_);
            }
            var g, w = Xe(h);
            return w && ht(), m = j.follow(function() {
              var _;
              (g = h.call(y, y)) && (w ? (_ = Ve.bind(null, null), g.then(_, _)) : typeof g.next == "function" && typeof g.throw == "function" && (g = Un(g)));
            }, m), (g && typeof g.then == "function" ? j.resolve(g).then(function(_) {
              return y.active ? _ : ue(new T.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : m.then(function() {
              return g;
            })).then(function(_) {
              return l && y._resolve(), y._completion.then(function() {
                return _;
              });
            }).catch(function(_) {
              return y._reject(_), ue(_);
            });
          });
        }).bind(null, this, o, a, i, n);
        return i ? i._promise(o, c, "lock") : F.trans ? tt(F.transless, function() {
          return r._whenReady(c);
        }) : this._whenReady(c);
      }, se.prototype.table = function(e) {
        if (!W(this._allTables, e)) throw new T.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, se);
      function se(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = se.dependencies;
        this._options = t = x({ addons: se.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var i, o, a, u, c, f = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        f.dbReadyPromise = new j(function(s) {
          f.dbReadyResolve = s;
        }), f.openCanceller = new j(function(s, v) {
          f.cancelOpen = v;
        }), this._state = f, this.name = e, this.on = Tt(this, "populate", "blocked", "versionchange", "close", { ready: [Kt, Q] }), this.once = function(s, v) {
          var l = function() {
            for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
            n.on(s).unsubscribe(l), v.apply(n, h);
          };
          return n.on(s, l);
        }, this.on.ready.subscribe = xe(this.on.ready.subscribe, function(s) {
          return function(v, l) {
            se.vip(function() {
              var h, m = n._state;
              m.openComplete ? (m.dbOpenError || j.resolve().then(v), l && s(v)) : m.onReadyBeingFired ? (m.onReadyBeingFired.push(v), l && s(v)) : (s(v), h = n, l || s(function y() {
                h.on.ready.unsubscribe(v), h.on.ready.unsubscribe(y);
              }));
            });
          };
        }), this.Collection = (i = this, St(qr.prototype, function(g, y) {
          this.db = i;
          var l = rr, h = null;
          if (y) try {
            l = y();
          } catch (w) {
            h = w;
          }
          var m = g._ctx, y = m.table, g = y.hook.reading.fire;
          this._ctx = { table: y, index: m.index, isPrimKey: !m.index || y.schema.primKey.keyPath && m.index === y.schema.primKey.name, range: l, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: h, or: m.or, valueMapper: g !== be ? g : null };
        })), this.Table = (o = this, St(ur.prototype, function(s, v, l) {
          this.db = o, this._tx = l, this.name = s, this.schema = v, this.hook = o._allTables[s] ? o._allTables[s].hook : Tt(null, { creating: [Nt, Q], reading: [Fe, be], updating: [ct, Q], deleting: [Ie, Q] });
        })), this.Transaction = (a = this, St(Ur.prototype, function(s, v, l, h, m) {
          var y = this;
          s !== "readonly" && v.forEach(function(g) {
            g = (g = l[g]) === null || g === void 0 ? void 0 : g.yProps, g && (v = v.concat(g.map(function(w) {
              return w.updatesTable;
            })));
          }), this.db = a, this.mode = s, this.storeNames = v, this.schema = l, this.chromeTransactionDurability = h, this.idbtrans = null, this.on = Tt(this, "complete", "error", "abort"), this.parent = m || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(g, w) {
            y._resolve = g, y._reject = w;
          }), this._completion.then(function() {
            y.active = !1, y.on.complete.fire();
          }, function(g) {
            var w = y.active;
            return y.active = !1, y.on.error.fire(g), y.parent ? y.parent._reject(g) : w && y.idbtrans && y.idbtrans.abort(), ue(g);
          });
        })), this.Version = (u = this, St(Hr.prototype, function(s) {
          this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (c = this, St(dr.prototype, function(s, v, l) {
          if (this.db = c, this._ctx = { table: s, index: v === ":id" ? null : v, or: l }, this._cmp = this._ascending = H, this._descending = function(h, m) {
            return H(m, h);
          }, this._max = function(h, m) {
            return 0 < H(h, m) ? h : m;
          }, this._min = function(h, m) {
            return H(h, m) < 0 ? h : m;
          }, this._IDBKeyRange = c._deps.IDBKeyRange, !this._IDBKeyRange) throw new T.MissingAPI();
        })), this.on("versionchange", function(s) {
          0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(s) {
          !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
        }), this._maxKey = kt(t.IDBKeyRange), this._createTransaction = function(s, v, l, h) {
          return new n.Transaction(s, v, l, n._options.chromeTransactionDurability, h);
        }, this._fireOnBlocked = function(s) {
          n.on("blocked").fire(s), dt.filter(function(v) {
            return v.name === n.name && v !== n && !v._state.vcFired;
          }).map(function(v) {
            return v.on("versionchange").fire(s);
          });
        }, this.use(Zr), this.use(ri), this.use(ei), this.use($r), this.use(Jr);
        var p = new Proxy(this, { get: function(s, v, l) {
          if (v === "_vip") return !0;
          if (v === "table") return function(m) {
            return cn(n.table(m), p);
          };
          var h = Reflect.get(s, v, l);
          return h instanceof ur ? cn(h, p) : v === "tables" ? h.map(function(m) {
            return cn(m, p);
          }) : v === "_createTransaction" ? function() {
            return cn(h.apply(this, arguments), p);
          } : h;
        } });
        this.vip = p, r.forEach(function(s) {
          return s(n);
        });
      }
      var ln, ke = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ii = (Yn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Yn.prototype[ke] = function() {
        return this;
      }, Yn);
      function Yn(e) {
        this._subscribe = e;
      }
      try {
        ln = { indexedDB: q.indexedDB || q.mozIndexedDB || q.webkitIndexedDB || q.msIndexedDB, IDBKeyRange: q.IDBKeyRange || q.webkitIDBKeyRange };
      } catch {
        ln = { indexedDB: null, IDBKeyRange: null };
      }
      function Cr(e) {
        var t, n = !1, r = new ii(function(i) {
          var o = Xe(e), a, u = !1, c = {}, f = {}, p = { get closed() {
            return u;
          }, unsubscribe: function() {
            u || (u = !0, a && a.abort(), s && Ye.storagemutated.unsubscribe(l));
          } };
          i.start && i.start(p);
          var s = !1, v = function() {
            return En(h);
          }, l = function(m) {
            an(c, m), Fn(f, c) && v();
          }, h = function() {
            var m, y, g;
            !u && ln.indexedDB && (c = {}, m = {}, a && a.abort(), a = new AbortController(), g = (function(w) {
              var _ = lt();
              try {
                o && ht();
                var E = Ue(e, w);
                return E = o ? E.finally(Ve) : E;
              } finally {
                _ && ft();
              }
            })(y = { subscr: m, signal: a.signal, requery: v, querier: e, trans: null }), Promise.resolve(g).then(function(w) {
              n = !0, t = w, u || y.signal.aborted || (c = {}, (function(_) {
                for (var E in _) if (W(_, E)) return;
                return 1;
              })(f = m) || s || (Ye(Ct, l), s = !0), En(function() {
                return !u && i.next && i.next(w);
              }));
            }, function(w) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(w?.name) || u || En(function() {
                u || i.error && i.error(w);
              });
            }));
          };
          return setTimeout(v, 0), p;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var ot = Be;
      function Qn(e) {
        var t = Qe;
        try {
          Qe = !0, Ye.storagemutated.fire(e), Ln(e, !0);
        } finally {
          Qe = t;
        }
      }
      U(ot, x(x({}, fe), { delete: function(e) {
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
          }) : Nn(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return ue(new T.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          J(this, e);
        };
      }, ignoreTransaction: function(e) {
        return F.trans ? tt(F.transless, e) : e();
      }, vip: jn, async: function(e) {
        return function() {
          try {
            var t = Un(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (n) {
            return ue(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = Un(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : j.resolve(r);
        } catch (i) {
          return ue(i);
        }
      }, currentTransaction: { get: function() {
        return F.trans || null;
      } }, waitFor: function(e, t) {
        return t = j.resolve(typeof e == "function" ? ot.ignoreTransaction(e) : e).timeout(t || 6e4), F.trans ? F.trans.waitFor(t) : t;
      }, Promise: j, debug: { get: function() {
        return Ce;
      }, set: function(e) {
        dn(e);
      } }, derive: ae, extend: J, props: U, override: xe, Events: Tt, on: Ye, liveQuery: Cr, extendObservabilitySet: an, getByKeyPath: Pe, setByKeyPath: le, delByKeyPath: function(e, t) {
        typeof t == "string" ? le(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          le(e, n, void 0);
        });
      }, shallowClone: Bt, deepClone: Te, getObjectDiff: Vn, cmp: H, asap: Oe, minKey: -1 / 0, addons: [], connections: dt, errnames: b, dependencies: ln, cache: it, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), ot.maxKey = kt(ot.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ye(Ct, function(e) {
        Qe || (e = new CustomEvent(Pn, { detail: e }), Qe = !0, dispatchEvent(e), Qe = !1);
      }), addEventListener(Pn, function(e) {
        e = e.detail, Qe || Qn(e);
      }));
      var gt, Qe = !1, kr = function() {
      };
      return typeof BroadcastChannel < "u" && ((kr = function() {
        (gt = new BroadcastChannel(Pn)).onmessage = function(e) {
          return e.data && Qn(e.data);
        };
      })(), typeof gt.unref == "function" && gt.unref(), Ye(Ct, function(e) {
        Qe || gt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Be.disableBfCache && e.persisted) {
          Ce && console.debug("Dexie: handling persisted pagehide"), gt?.close();
          for (var t = 0, n = dt; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Be.disableBfCache && e.persisted && (Ce && console.debug("Dexie: handling persisted pageshow"), kr(), Qn({ all: new ye(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof He || e instanceof TypeError || e instanceof SyntaxError || !e.name || !k[e.name] ? e : (t = new k[e.name](t || e.message, e), "stack" in e && Z(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, dn(Ce), x(Be, Object.freeze({ __proto__: null, Dexie: Be, liveQuery: Cr, Entity: ir, cmp: H, PropModification: Ot, replacePrefix: function(e, t) {
        return new Ot({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new Ot({ add: e });
      }, remove: function(e) {
        return new Ot({ remove: e });
      }, default: Be, RangeSet: ye, mergeRanges: Rt, rangesOverlap: gr }), { default: Be }), Be;
    });
  })(Rr)), Rr.exports;
}
var No = Io();
const li = /* @__PURE__ */ Do(No), wi = Symbol.for("Dexie"), Dr = globalThis[wi] || (globalThis[wi] = li);
if (li.semVer !== Dr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${li.semVer} and ${Dr.semVer}`);
const {
  liveQuery: Jo,
  mergeRanges: Zo,
  rangesOverlap: ea,
  RangeSet: ta,
  cmp: na,
  Entity: ra,
  PropModification: ia,
  replacePrefix: oa,
  add: aa,
  remove: ua,
  DexieYProvider: sa
} = Dr;
function _i(A) {
  return {
    addRecord: O,
    updateRecord: K,
    findChildRecords: Ee,
    findChildRecordsByTagName: W,
    instantiate: z,
    ensureRelationship: M,
    findRootSCL: q,
    recordExists: x,
    findOneRecordByAttribute: he,
    db: A
  };
  async function O(U) {
    const X = {
      ...U,
      id: crypto.randomUUID()
    };
    try {
      const Z = await A.table(X.tagName).add(X), ae = await A.table(X.tagName).get(Z);
      if (!ae) {
        const te = { msg: "could not find added record", table: X.tagName, addedId: Z };
        throw console.error(te), new Error(JSON.stringify(te));
      }
      return ae;
    } catch (Z) {
      const ae = {
        msg: "could not add record",
        db: A.name,
        table: X.tagName,
        recordToAdd: X,
        err: Z
      };
      throw console.error(ae), new Error(JSON.stringify(ae));
    }
  }
  async function K(U) {
    try {
      if (await A.table(U.tagName).update(U.id, U) < 1) {
        const Z = { msg: "nothing has been updated", record: U };
        throw console.error(Z), new Error(JSON.stringify(Z));
      }
    } catch (X) {
      console.error(X);
    }
  }
  async function x(U) {
    return await A.table(U.tagName).where({ id: U.id }).count() > 0;
  }
  async function M(U, X) {
    const Z = U.children?.some(
      (te) => te.id === X.id && te.tagName === X.tagName
    ), ae = X.parent?.id === U.id && X.parent?.tagName === U.tagName;
    Z || (U.children || (U.children = []), U.children.push({
      id: X.id,
      tagName: X.tagName
    }), await A.table(U.tagName).update(U.id, U)), ae || (X.parent = {
      id: U.id,
      tagName: U.tagName
    }, await A.table(X.tagName).update(X.id, X));
  }
  async function q() {
    const U = await A.table("SCL").count();
    if (U === 0) throw new Error("tfindRootSCLhere is no SCL element");
    if (U > 1) throw new Error("there are multiple SCL elements; there can be only one");
    const X = await A.table("SCL").orderBy("id").first();
    if (!X) throw new Error("no root scl found");
    return X;
  }
  function z(U) {
    const X = L(U);
    if (!X)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', U), new Error('record does not have a "uuid" to move to "templateUUID"');
    U.attributes?.push({ name: "templateUuid", value: X }), J(U);
  }
  function L(U) {
    const X = U.attributes?.find((Z) => Z.name === "uuid");
    if (X)
      return X.value;
  }
  function J(U) {
    U.attributes || (U.attributes = []);
    const X = crypto.randomUUID(), Z = U.attributes.findIndex((te) => te.name === "uuid");
    Z >= 0 ? U.attributes[Z].value = X : U.attributes.push({ name: "uuid", value: X });
  }
  async function he(U, X) {
    return Pi(A, U, X);
  }
  async function Ee(U) {
    return !U.children || U.children.length === 0 ? [] : await Promise.all(
      U.children.map(async (Z) => {
        const ae = Z.tagName, te = Z.id;
        return await A.table(ae).get({ id: te });
      })
    );
  }
  async function W(U, X) {
    return !U.children || U.children.length === 0 ? [] : await Promise.all(
      U.children.filter((ae) => ae.tagName === X).map(async (ae) => {
        const te = ae.tagName, Ae = ae.id;
        return await A.table(te).get({ id: Ae });
      })
    );
  }
}
function jt(A, O) {
  return A.attributes?.find((K) => K.name === O);
}
function Ko(A, O, K) {
  A.attributes || (A.attributes = []);
  const x = A.attributes?.findIndex((q) => q.name === O);
  x >= 0 ? A.attributes[x].value = K : A.attributes.push({ name: O, value: K });
}
async function Pi(A, O, K) {
  try {
    return await A.table(O).filter(
      (M) => !!M.attributes?.some((q) => q.name === K.name && q.value === K.value)
    ).first();
  } catch (x) {
    console.error({ msg: "could not find record by attribute", tagName: O, attr: K, err: x });
  }
}
async function ca() {
  const A = localStorage.getItem("currentActiveFileDatabaseName");
  if (!A)
    throw new Error("no active file");
  const O = await qo(), K = await So({ files: O });
  await jo(A, K);
}
async function jo(A, O) {
  const K = new Dr(A);
  await K.open();
  const x = _i(K), M = new Dr(O[0]);
  await M.open();
  const q = _i(M);
  await z(), await L(), await J(), M.close(), K.close();
  async function z() {
    const W = await M.table("Header").orderBy("id").first();
    if (!W) {
      const te = { msg: "Header element is missing in FSD" };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    const U = jt(W, "uuid");
    if (!U) {
      const te = { msg: "uuid is missing in Header element", header: W };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    const X = jt(W, "version");
    if (!X) {
      const te = { msg: "version is missing in Header element", header: W };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    const Z = jt(W, "revision");
    if (!Z) {
      const te = { msg: "revision is missing in Header element", header: W };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    const ae = await M.table("Function").toArray();
    for (const te of ae) {
      const Ae = await fi(M, te), Re = [];
      for (const ie of Ae)
        if (oi(ie, ["Substation", "VoltageLevel", "Bay"])) {
          const Te = await Ei(K, ie, "name");
          Re.push(Te);
        }
      q.instantiate(te);
      const xe = await x.addRecord(te);
      let Oe = (await q.findChildRecordsByTagName(xe, "Private")).filter((ie) => jt(ie, "type")?.value === "eIEC61850-6-100").at(0);
      if (!Oe) {
        const ie = {
          tagName: "Private",
          attributes: [{ name: "type", value: "eIEC61850-6-100" }],
          value: null,
          parent: null,
          namespace: null,
          children: []
        };
        Oe = await x.addRecord(ie), await x.ensureRelationship(xe, Oe);
      }
      const Pe = {
        tagName: "SclFileReference",
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        attributes: [
          { name: "fileType", value: "FSD" },
          { name: "fileUuid", value: U.value },
          { name: "version", value: X.value },
          { name: "revision", value: Z.value }
        ],
        value: null,
        parent: null,
        children: []
      }, le = await x.addRecord(Pe);
      await x.ensureRelationship(Oe, le);
      const Bt = await q.findChildRecords(te);
      for (const ie of Bt) {
        const Te = await Ee(ie);
        x.ensureRelationship(xe, Te);
      }
      const R = [xe, ...Re];
      for (let ie = 0; ie < R.length; ie++) {
        const Te = R[ie], Ft = R[ie + 1];
        Ft && await x.ensureRelationship(Ft, Te);
      }
      const bt = await x.findRootSCL(), ut = R.at(-1);
      bt && ut && await x.ensureRelationship(bt, ut);
    }
  }
  async function L() {
    const W = await M.table("DataTypeTemplates").orderBy("id").first();
    if (!W) {
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
      U = await x.addRecord(Z);
      const ae = await x.findRootSCL();
      await x.ensureRelationship(ae, U);
    }
    const X = await q.findChildRecords(W);
    if (X.length === 0) {
      console.info("DataTypeTemplates is empty, stopping.");
      return;
    }
    for (const Z of X) {
      const ae = jt(Z, "id");
      if (!ae) {
        console.warn("id attribute not found, continuing", Z);
        continue;
      }
      if (await x.findOneRecordByAttribute(
        Z.tagName,
        ae
      ))
        continue;
      const Ae = await Ee(Z);
      await x.ensureRelationship(U, Ae);
    }
  }
  async function J() {
    const W = await M.table("FunctionCategory").toArray();
    for (const U of W) {
      const X = await fi(M, U), Z = [];
      for (const xe of X.reverse()) {
        if (oi(xe, ["Substation", "VoltageLevel", "Bay"])) {
          const ce = await Ei(K, xe, "name");
          Z.unshift(ce);
        }
        if (oi(xe, ["Private"])) {
          const ce = Z[Z.length - 1];
          if (!ce) {
            const Pe = {
              msg: "in the case of function category instantiation private field without a parent (so beeing under SCL root) is considered an error",
              record: xe,
              path: X,
              newGrandParent: ce,
              newParentPath: Z
            };
            throw console.error(Pe), new Error(JSON.stringify(Pe));
          }
          const Oe = await Bo(x, xe, ce);
          Z.unshift(Oe);
        }
      }
      const te = [await he(U), ...Z];
      for (let xe = 0; xe < te.length; xe++) {
        const ce = te[xe], Oe = te[xe + 1];
        Oe && await x.ensureRelationship(Oe, ce);
      }
      const Ae = await x.findRootSCL(), Re = te.at(-1);
      Ae && Re && await x.ensureRelationship(Ae, Re);
    }
  }
  async function he(W) {
    const U = jt(W, "uuid");
    if (!U) {
      const te = { msg: "no uuid found in element", funcCatInFSD: W };
      throw console.error(te), new Error(JSON.stringify(te));
    }
    let X = await x.findOneRecordByAttribute(W.tagName, {
      name: "templateUuid",
      value: U.value
    });
    X || (q.instantiate(W), X = await x.addRecord(W));
    const Z = await q.findChildRecordsByTagName(W, "FunctionCatRef");
    for (const te of Z) {
      const Ae = await x.addRecord(te);
      await x.ensureRelationship(X, Ae);
      const Re = jt(Ae, "functionUuid");
      if (!Re) continue;
      const xe = await x.findOneRecordByAttribute("Function", {
        name: "templateUuid",
        value: Re.value
      });
      if (!xe) {
        const Oe = { msg: "could not found function by templateUuid", functionUuidAttr: Re };
        throw console.error(Oe), new Error(JSON.stringify(Oe));
      }
      const ce = jt(xe, "uuid");
      if (!ce) {
        const Oe = { msg: "function does not have an uuid", funcInASD: xe };
        throw console.error(Oe), new Error(JSON.stringify(Oe));
      }
      Ko(Ae, "functionUuid", ce?.value), await x.updateRecord(Ae);
    }
    const ae = await q.findChildRecordsByTagName(W, "SubCategory");
    for (const te of ae) {
      const Ae = await he(te);
      await x.ensureRelationship(X, Ae);
    }
    return X;
  }
  async function Ee(W) {
    const U = await x.addRecord(W), X = await q.findChildRecords(W);
    for (const Z of X) {
      const ae = await Ee(Z);
      x.ensureRelationship(U, ae);
    }
    return U;
  }
}
async function Ei(A, O, K) {
  const x = jt(O, K);
  if (!x)
    throw console.error("could not find name of record", O), new Error("could not find name of record");
  const M = await Pi(A, O.tagName, x);
  return M || (await A.table(O.tagName).add(O), O);
}
async function Bo(A, O, K) {
  const x = jt(O, "type");
  if (!x || !x.value) {
    const z = {
      msg: "type attribute is required but it is missing or empty",
      typeAttr: x,
      record: O
    };
    throw console.error(z), new Error(JSON.stringify(z));
  }
  const M = await A.db.table(O.tagName).where("parent.id").equals(K.id).filter(
    (z) => !!z.attributes?.some((L) => L.name === "type" && L.value === x.value)
  ).first();
  return M || await A.addRecord(O);
}
function oi(A, O) {
  return O.includes(A.tagName);
}
async function Fo(A, O, K) {
  return A.table(O).get(K);
}
async function fi(A, O, K = []) {
  if (!O.parent)
    return [];
  const x = await Fo(A, O.parent.tagName, O.parent.id);
  if (!x)
    throw console.error("could not find parent for", O), new Error("could not find parent for record");
  if (!x.parent)
    return [];
  const q = await fi(A, x, K);
  return [x, ...q];
}
async function qo() {
  const { promise: A, resolve: O } = Promise.withResolvers(), { open: K, onChange: x } = Li({
    accept: "fsd"
  });
  return x((M) => {
    if (M?.length === 0 || M === null) {
      O([]);
      return;
    }
    O(Array.from(M));
  }), K(), A;
}
export {
  ca as default,
  jo as instantiateFSD
};
