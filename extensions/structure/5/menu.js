import { p as Ta, F as Sa, G as Ca, E as xa, a7 as Aa, a2 as Pa, Y as Ct, ac as jr, ab as Me, ad as qr, ae as Oa, af as Da } from "./import-wrapper-prod-DI1KijYL.js";
function Na(x) {
  return Ta() ? (Sa(x), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Lr() {
  const x = /* @__PURE__ */ new Set(), w = (R) => {
    x.delete(R);
  };
  return {
    on: (R) => {
      x.add(R);
      const M = () => w(R);
      return Na(M), {
        off: M
      };
    },
    off: w,
    trigger: (...R) => Promise.all(Array.from(x).map((M) => M(...R))),
    clear: () => {
      x.clear();
    }
  };
}
const Ia = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ra = (x, w) => Object.prototype.hasOwnProperty.call(x, w), ka = Ia ? window.document : void 0;
function Fa(x) {
  var w;
  const A = Ct(x);
  return (w = A?.$el) != null ? w : A;
}
const Ba = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Ka(x) {
  if (!x)
    return null;
  if (x instanceof FileList)
    return x;
  const w = new DataTransfer();
  for (const A of x)
    w.items.add(A);
  return w.files;
}
function ja(x = {}) {
  const {
    document: w = ka
  } = x, A = Ca(Ka(x.initialFiles)), { on: d, trigger: D } = /* @__PURE__ */ Lr(), { on: R, trigger: M } = /* @__PURE__ */ Lr(), q = xa(() => {
    var V;
    const X = (V = Fa(x.input)) != null ? V : w ? w.createElement("input") : void 0;
    return X && (X.type = "file", X.onchange = (ae) => {
      const J = ae.target;
      A.value = J.files, D(A.value);
    }, X.oncancel = () => {
      M();
    }), X;
  }), G = () => {
    A.value = null, q.value && q.value.value && (q.value.value = "", D(null));
  }, ie = (V) => {
    const X = q.value;
    X && (X.multiple = Ct(V.multiple), X.accept = Ct(V.accept), X.webkitdirectory = Ct(V.directory), Ra(V, "capture") && (X.capture = Ct(V.capture)));
  }, pe = (V) => {
    const X = q.value;
    if (!X)
      return;
    const ae = {
      ...Ba,
      ...x,
      ...V
    };
    ie(ae), Ct(ae.reset) && G(), X.click();
  };
  return Aa(() => {
    ie(x);
  }), {
    files: Pa(A),
    open: pe,
    reset: G,
    onCancel: R,
    onChange: d
  };
}
var qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function La(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Ma(x) {
  if (Object.prototype.hasOwnProperty.call(x, "__esModule")) return x;
  var w = x.default;
  if (typeof w == "function") {
    var A = function d() {
      var D = !1;
      try {
        D = this instanceof d;
      } catch {
      }
      return D ? Reflect.construct(w, arguments, this.constructor) : w.apply(this, arguments);
    };
    A.prototype = w.prototype;
  } else A = {};
  return Object.defineProperty(A, "__esModule", { value: !0 }), Object.keys(x).forEach(function(d) {
    var D = Object.getOwnPropertyDescriptor(x, d);
    Object.defineProperty(A, d, D.get ? D : {
      enumerable: !0,
      get: function() {
        return x[d];
      }
    });
  }), A;
}
var Mr = {};
const Ua = {}, Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ua
}, Symbol.toStringTag, { value: "Module" })), Ur = /* @__PURE__ */ Ma(Va);
var Vr;
function Ga() {
  return Vr || (Vr = 1, (function(x) {
    (function(w) {
      w.parser = function(s, i) {
        return new d(s, i);
      }, w.SAXParser = d, w.SAXStream = pe, w.createStream = ie, w.MAX_BUFFER_LENGTH = 64 * 1024;
      var A = [
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
      w.EVENTS = [
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
      function d(s, i) {
        if (!(this instanceof d))
          return new d(s, i);
        var T = this;
        R(T), T.q = T.c = "", T.bufferCheckPosition = w.MAX_BUFFER_LENGTH, T.opt = i || {}, T.opt.lowercase = T.opt.lowercase || T.opt.lowercasetags, T.looseCase = T.opt.lowercase ? "toLowerCase" : "toUpperCase", T.tags = [], T.closed = T.closedRoot = T.sawRoot = !1, T.tag = T.error = null, T.strict = !!s, T.noscript = !!(s || T.opt.noscript), T.state = S.BEGIN, T.strictEntities = T.opt.strictEntities, T.ENTITIES = T.strictEntities ? Object.create(w.XML_ENTITIES) : Object.create(w.ENTITIES), T.attribList = [], T.opt.xmlns && (T.ns = Object.create(ge)), T.opt.unquotedAttributeValues === void 0 && (T.opt.unquotedAttributeValues = !s), T.trackPosition = T.opt.position !== !1, T.trackPosition && (T.position = T.line = T.column = 0), Fe(T, "onready");
      }
      Object.create || (Object.create = function(s) {
        function i() {
        }
        i.prototype = s;
        var T = new i();
        return T;
      }), Object.keys || (Object.keys = function(s) {
        var i = [];
        for (var T in s) s.hasOwnProperty(T) && i.push(T);
        return i;
      });
      function D(s) {
        for (var i = Math.max(w.MAX_BUFFER_LENGTH, 10), T = 0, _ = 0, ee = A.length; _ < ee; _++) {
          var Q = s[A[_]].length;
          if (Q > i)
            switch (A[_]) {
              case "textNode":
                we(s);
                break;
              case "cdata":
                W(s, "oncdata", s.cdata), s.cdata = "";
                break;
              case "script":
                W(s, "onscript", s.script), s.script = "";
                break;
              default:
                Ue(s, "Max buffer length exceeded: " + A[_]);
            }
          T = Math.max(T, Q);
        }
        var ue = w.MAX_BUFFER_LENGTH - T;
        s.bufferCheckPosition = ue + s.position;
      }
      function R(s) {
        for (var i = 0, T = A.length; i < T; i++)
          s[A[i]] = "";
      }
      function M(s) {
        we(s), s.cdata !== "" && (W(s, "oncdata", s.cdata), s.cdata = ""), s.script !== "" && (W(s, "onscript", s.script), s.script = "");
      }
      d.prototype = {
        end: function() {
          yt(this);
        },
        write: Xe,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          M(this);
        }
      };
      var q;
      try {
        q = Ur.Stream;
      } catch {
        q = function() {
        };
      }
      q || (q = function() {
      });
      var G = w.EVENTS.filter(function(s) {
        return s !== "error" && s !== "end";
      });
      function ie(s, i) {
        return new pe(s, i);
      }
      function pe(s, i) {
        if (!(this instanceof pe))
          return new pe(s, i);
        q.apply(this), this._parser = new d(s, i), this.writable = !0, this.readable = !0;
        var T = this;
        this._parser.onend = function() {
          T.emit("end");
        }, this._parser.onerror = function(_) {
          T.emit("error", _), T._parser.error = null;
        }, this._decoder = null, G.forEach(function(_) {
          Object.defineProperty(T, "on" + _, {
            get: function() {
              return T._parser["on" + _];
            },
            set: function(ee) {
              if (!ee)
                return T.removeAllListeners(_), T._parser["on" + _] = ee, ee;
              T.on(_, ee);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      pe.prototype = Object.create(q.prototype, {
        constructor: {
          value: pe
        }
      }), pe.prototype.write = function(s) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(s)) {
          if (!this._decoder) {
            var i = Ur.StringDecoder;
            this._decoder = new i("utf8");
          }
          s = this._decoder.write(s);
        }
        return this._parser.write(s.toString()), this.emit("data", s), !0;
      }, pe.prototype.end = function(s) {
        return s && s.length && this.write(s), this._parser.end(), !0;
      }, pe.prototype.on = function(s, i) {
        var T = this;
        return !T._parser["on" + s] && G.indexOf(s) !== -1 && (T._parser["on" + s] = function() {
          var _ = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          _.splice(0, 0, s), T.emit.apply(T, _);
        }), q.prototype.on.call(T, s, i);
      };
      var V = "[CDATA[", X = "DOCTYPE", ae = "http://www.w3.org/XML/1998/namespace", J = "http://www.w3.org/2000/xmlns/", ge = { xml: ae, xmlns: J }, $ = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, be = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Se = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, le = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function ne(s) {
        return s === " " || s === `
` || s === "\r" || s === "	";
      }
      function de(s) {
        return s === '"' || s === "'";
      }
      function Ce(s) {
        return s === ">" || ne(s);
      }
      function se(s, i) {
        return s.test(i);
      }
      function mt(s, i) {
        return !se(s, i);
      }
      var S = 0;
      w.STATE = {
        BEGIN: S++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S++,
        // leading whitespace
        TEXT: S++,
        // general stuff
        TEXT_ENTITY: S++,
        // &amp and such.
        OPEN_WAKA: S++,
        // <
        SGML_DECL: S++,
        // <!BLARG
        SGML_DECL_QUOTED: S++,
        // <!BLARG foo "bar
        DOCTYPE: S++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S++,
        // <!-
        COMMENT: S++,
        // <!--
        COMMENT_ENDING: S++,
        // <!-- blah -
        COMMENT_ENDED: S++,
        // <!-- blah --
        CDATA: S++,
        // <![CDATA[ something
        CDATA_ENDING: S++,
        // ]
        CDATA_ENDING_2: S++,
        // ]]
        PROC_INST: S++,
        // <?hi
        PROC_INST_BODY: S++,
        // <?hi there
        PROC_INST_ENDING: S++,
        // <?hi "there" ?
        OPEN_TAG: S++,
        // <strong
        OPEN_TAG_SLASH: S++,
        // <strong /
        ATTRIB: S++,
        // <a
        ATTRIB_NAME: S++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S++,
        // <a foo _
        ATTRIB_VALUE: S++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S++,
        // <foo bar=&quot
        CLOSE_TAG: S++,
        // </a
        CLOSE_TAG_SAW_WHITE: S++,
        // </a   >
        SCRIPT: S++,
        // <script> ...
        SCRIPT_ENDING: S++
        // <script> ... <
      }, w.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, w.ENTITIES = {
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
      }, Object.keys(w.ENTITIES).forEach(function(s) {
        var i = w.ENTITIES[s], T = typeof i == "number" ? String.fromCharCode(i) : i;
        w.ENTITIES[s] = T;
      });
      for (var ze in w.STATE)
        w.STATE[w.STATE[ze]] = ze;
      S = w.STATE;
      function Fe(s, i, T) {
        s[i] && s[i](T);
      }
      function W(s, i, T) {
        s.textNode && we(s), Fe(s, i, T);
      }
      function we(s) {
        s.textNode = rt(s.opt, s.textNode), s.textNode && Fe(s, "ontext", s.textNode), s.textNode = "";
      }
      function rt(s, i) {
        return s.trim && (i = i.trim()), s.normalize && (i = i.replace(/\s+/g, " ")), i;
      }
      function Ue(s, i) {
        return we(s), s.trackPosition && (i += `
Line: ` + s.line + `
Column: ` + s.column + `
Char: ` + s.c), i = new Error(i), s.error = i, Fe(s, "onerror", i), s;
      }
      function yt(s) {
        return s.sawRoot && !s.closedRoot && oe(s, "Unclosed root tag"), s.state !== S.BEGIN && s.state !== S.BEGIN_WHITESPACE && s.state !== S.TEXT && Ue(s, "Unexpected end"), we(s), s.c = "", s.closed = !0, Fe(s, "onend"), d.call(s, s.strict, s.opt), s;
      }
      function oe(s, i) {
        if (typeof s != "object" || !(s instanceof d))
          throw new Error("bad call to strictFail");
        s.strict && Ue(s, i);
      }
      function Ve(s) {
        s.strict || (s.tagName = s.tagName[s.looseCase]());
        var i = s.tags[s.tags.length - 1] || s, T = s.tag = { name: s.tagName, attributes: {} };
        s.opt.xmlns && (T.ns = i.ns), s.attribList.length = 0, W(s, "onopentagstart", T);
      }
      function je(s, i) {
        var T = s.indexOf(":"), _ = T < 0 ? ["", s] : s.split(":"), ee = _[0], Q = _[1];
        return i && s === "xmlns" && (ee = "xmlns", Q = ""), { prefix: ee, local: Q };
      }
      function Ie(s) {
        if (s.strict || (s.attribName = s.attribName[s.looseCase]()), s.attribList.indexOf(s.attribName) !== -1 || s.tag.attributes.hasOwnProperty(s.attribName)) {
          s.attribName = s.attribValue = "";
          return;
        }
        if (s.opt.xmlns) {
          var i = je(s.attribName, !0), T = i.prefix, _ = i.local;
          if (T === "xmlns")
            if (_ === "xml" && s.attribValue !== ae)
              oe(
                s,
                "xml: prefix must be bound to " + ae + `
Actual: ` + s.attribValue
              );
            else if (_ === "xmlns" && s.attribValue !== J)
              oe(
                s,
                "xmlns: prefix must be bound to " + J + `
Actual: ` + s.attribValue
              );
            else {
              var ee = s.tag, Q = s.tags[s.tags.length - 1] || s;
              ee.ns === Q.ns && (ee.ns = Object.create(Q.ns)), ee.ns[_] = s.attribValue;
            }
          s.attribList.push([s.attribName, s.attribValue]);
        } else
          s.tag.attributes[s.attribName] = s.attribValue, W(s, "onattribute", {
            name: s.attribName,
            value: s.attribValue
          });
        s.attribName = s.attribValue = "";
      }
      function Be(s, i) {
        if (s.opt.xmlns) {
          var T = s.tag, _ = je(s.tagName);
          T.prefix = _.prefix, T.local = _.local, T.uri = T.ns[_.prefix] || "", T.prefix && !T.uri && (oe(s, "Unbound namespace prefix: " + JSON.stringify(s.tagName)), T.uri = _.prefix);
          var ee = s.tags[s.tags.length - 1] || s;
          T.ns && ee.ns !== T.ns && Object.keys(T.ns).forEach(function(Pt) {
            W(s, "onopennamespace", {
              prefix: Pt,
              uri: T.ns[Pt]
            });
          });
          for (var Q = 0, ue = s.attribList.length; Q < ue; Q++) {
            var xe = s.attribList[Q], he = xe[0], He = xe[1], _e = je(he, !0), Ke = _e.prefix, gn = _e.local, vt = Ke === "" ? "" : T.ns[Ke] || "", Ne = {
              name: he,
              value: He,
              prefix: Ke,
              local: gn,
              uri: vt
            };
            Ke && Ke !== "xmlns" && !vt && (oe(s, "Unbound namespace prefix: " + JSON.stringify(Ke)), Ne.uri = Ke), s.tag.attributes[he] = Ne, W(s, "onattribute", Ne);
          }
          s.attribList.length = 0;
        }
        s.tag.isSelfClosing = !!i, s.sawRoot = !0, s.tags.push(s.tag), W(s, "onopentag", s.tag), i || (!s.noscript && s.tagName.toLowerCase() === "script" ? s.state = S.SCRIPT : s.state = S.TEXT, s.tag = null, s.tagName = ""), s.attribName = s.attribValue = "", s.attribList.length = 0;
      }
      function xt(s) {
        if (!s.tagName) {
          oe(s, "Weird empty close tag."), s.textNode += "</>", s.state = S.TEXT;
          return;
        }
        if (s.script) {
          if (s.tagName !== "script") {
            s.script += "</" + s.tagName + ">", s.tagName = "", s.state = S.SCRIPT;
            return;
          }
          W(s, "onscript", s.script), s.script = "";
        }
        var i = s.tags.length, T = s.tagName;
        s.strict || (T = T[s.looseCase]());
        for (var _ = T; i--; ) {
          var ee = s.tags[i];
          if (ee.name !== _)
            oe(s, "Unexpected close tag");
          else
            break;
        }
        if (i < 0) {
          oe(s, "Unmatched closing tag: " + s.tagName), s.textNode += "</" + s.tagName + ">", s.state = S.TEXT;
          return;
        }
        s.tagName = T;
        for (var Q = s.tags.length; Q-- > i; ) {
          var ue = s.tag = s.tags.pop();
          s.tagName = s.tag.name, W(s, "onclosetag", s.tagName);
          var xe = {};
          for (var he in ue.ns)
            xe[he] = ue.ns[he];
          var He = s.tags[s.tags.length - 1] || s;
          s.opt.xmlns && ue.ns !== He.ns && Object.keys(ue.ns).forEach(function(_e) {
            var Ke = ue.ns[_e];
            W(s, "onclosenamespace", { prefix: _e, uri: Ke });
          });
        }
        i === 0 && (s.closedRoot = !0), s.tagName = s.attribValue = s.attribName = "", s.attribList.length = 0, s.state = S.TEXT;
      }
      function Ye(s) {
        var i = s.entity, T = i.toLowerCase(), _, ee = "";
        return s.ENTITIES[i] ? s.ENTITIES[i] : s.ENTITIES[T] ? s.ENTITIES[T] : (i = T, i.charAt(0) === "#" && (i.charAt(1) === "x" ? (i = i.slice(2), _ = parseInt(i, 16), ee = _.toString(16)) : (i = i.slice(1), _ = parseInt(i, 10), ee = _.toString(10))), i = i.replace(/^0+/, ""), isNaN(_) || ee.toLowerCase() !== i ? (oe(s, "Invalid character entity"), "&" + s.entity + ";") : String.fromCodePoint(_));
      }
      function At(s, i) {
        i === "<" ? (s.state = S.OPEN_WAKA, s.startTagPosition = s.position) : ne(i) || (oe(s, "Non-whitespace before first tag."), s.textNode = i, s.state = S.TEXT);
      }
      function at(s, i) {
        var T = "";
        return i < s.length && (T = s.charAt(i)), T;
      }
      function Xe(s) {
        var i = this;
        if (this.error)
          throw this.error;
        if (i.closed)
          return Ue(
            i,
            "Cannot write after close. Assign an onready handler."
          );
        if (s === null)
          return yt(i);
        typeof s == "object" && (s = s.toString());
        for (var T = 0, _ = ""; _ = at(s, T++), i.c = _, !!_; )
          switch (i.trackPosition && (i.position++, _ === `
` ? (i.line++, i.column = 0) : i.column++), i.state) {
            case S.BEGIN:
              if (i.state = S.BEGIN_WHITESPACE, _ === "\uFEFF")
                continue;
              At(i, _);
              continue;
            case S.BEGIN_WHITESPACE:
              At(i, _);
              continue;
            case S.TEXT:
              if (i.sawRoot && !i.closedRoot) {
                for (var ee = T - 1; _ && _ !== "<" && _ !== "&"; )
                  _ = at(s, T++), _ && i.trackPosition && (i.position++, _ === `
` ? (i.line++, i.column = 0) : i.column++);
                i.textNode += s.substring(ee, T - 1);
              }
              _ === "<" && !(i.sawRoot && i.closedRoot && !i.strict) ? (i.state = S.OPEN_WAKA, i.startTagPosition = i.position) : (!ne(_) && (!i.sawRoot || i.closedRoot) && oe(i, "Text data outside of root node."), _ === "&" ? i.state = S.TEXT_ENTITY : i.textNode += _);
              continue;
            case S.SCRIPT:
              _ === "<" ? i.state = S.SCRIPT_ENDING : i.script += _;
              continue;
            case S.SCRIPT_ENDING:
              _ === "/" ? i.state = S.CLOSE_TAG : (i.script += "<" + _, i.state = S.SCRIPT);
              continue;
            case S.OPEN_WAKA:
              if (_ === "!")
                i.state = S.SGML_DECL, i.sgmlDecl = "";
              else if (!ne(_)) if (se($, _))
                i.state = S.OPEN_TAG, i.tagName = _;
              else if (_ === "/")
                i.state = S.CLOSE_TAG, i.tagName = "";
              else if (_ === "?")
                i.state = S.PROC_INST, i.procInstName = i.procInstBody = "";
              else {
                if (oe(i, "Unencoded <"), i.startTagPosition + 1 < i.position) {
                  var Q = i.position - i.startTagPosition;
                  _ = new Array(Q).join(" ") + _;
                }
                i.textNode += "<" + _, i.state = S.TEXT;
              }
              continue;
            case S.SGML_DECL:
              if (i.sgmlDecl + _ === "--") {
                i.state = S.COMMENT, i.comment = "", i.sgmlDecl = "";
                continue;
              }
              i.doctype && i.doctype !== !0 && i.sgmlDecl ? (i.state = S.DOCTYPE_DTD, i.doctype += "<!" + i.sgmlDecl + _, i.sgmlDecl = "") : (i.sgmlDecl + _).toUpperCase() === V ? (W(i, "onopencdata"), i.state = S.CDATA, i.sgmlDecl = "", i.cdata = "") : (i.sgmlDecl + _).toUpperCase() === X ? (i.state = S.DOCTYPE, (i.doctype || i.sawRoot) && oe(
                i,
                "Inappropriately located doctype declaration"
              ), i.doctype = "", i.sgmlDecl = "") : _ === ">" ? (W(i, "onsgmldeclaration", i.sgmlDecl), i.sgmlDecl = "", i.state = S.TEXT) : (de(_) && (i.state = S.SGML_DECL_QUOTED), i.sgmlDecl += _);
              continue;
            case S.SGML_DECL_QUOTED:
              _ === i.q && (i.state = S.SGML_DECL, i.q = ""), i.sgmlDecl += _;
              continue;
            case S.DOCTYPE:
              _ === ">" ? (i.state = S.TEXT, W(i, "ondoctype", i.doctype), i.doctype = !0) : (i.doctype += _, _ === "[" ? i.state = S.DOCTYPE_DTD : de(_) && (i.state = S.DOCTYPE_QUOTED, i.q = _));
              continue;
            case S.DOCTYPE_QUOTED:
              i.doctype += _, _ === i.q && (i.q = "", i.state = S.DOCTYPE);
              continue;
            case S.DOCTYPE_DTD:
              _ === "]" ? (i.doctype += _, i.state = S.DOCTYPE) : _ === "<" ? (i.state = S.OPEN_WAKA, i.startTagPosition = i.position) : de(_) ? (i.doctype += _, i.state = S.DOCTYPE_DTD_QUOTED, i.q = _) : i.doctype += _;
              continue;
            case S.DOCTYPE_DTD_QUOTED:
              i.doctype += _, _ === i.q && (i.state = S.DOCTYPE_DTD, i.q = "");
              continue;
            case S.COMMENT:
              _ === "-" ? i.state = S.COMMENT_ENDING : i.comment += _;
              continue;
            case S.COMMENT_ENDING:
              _ === "-" ? (i.state = S.COMMENT_ENDED, i.comment = rt(i.opt, i.comment), i.comment && W(i, "oncomment", i.comment), i.comment = "") : (i.comment += "-" + _, i.state = S.COMMENT);
              continue;
            case S.COMMENT_ENDED:
              _ !== ">" ? (oe(i, "Malformed comment"), i.comment += "--" + _, i.state = S.COMMENT) : i.doctype && i.doctype !== !0 ? i.state = S.DOCTYPE_DTD : i.state = S.TEXT;
              continue;
            case S.CDATA:
              _ === "]" ? i.state = S.CDATA_ENDING : i.cdata += _;
              continue;
            case S.CDATA_ENDING:
              _ === "]" ? i.state = S.CDATA_ENDING_2 : (i.cdata += "]" + _, i.state = S.CDATA);
              continue;
            case S.CDATA_ENDING_2:
              _ === ">" ? (i.cdata && W(i, "oncdata", i.cdata), W(i, "onclosecdata"), i.cdata = "", i.state = S.TEXT) : _ === "]" ? i.cdata += "]" : (i.cdata += "]]" + _, i.state = S.CDATA);
              continue;
            case S.PROC_INST:
              _ === "?" ? i.state = S.PROC_INST_ENDING : ne(_) ? i.state = S.PROC_INST_BODY : i.procInstName += _;
              continue;
            case S.PROC_INST_BODY:
              if (!i.procInstBody && ne(_))
                continue;
              _ === "?" ? i.state = S.PROC_INST_ENDING : i.procInstBody += _;
              continue;
            case S.PROC_INST_ENDING:
              _ === ">" ? (W(i, "onprocessinginstruction", {
                name: i.procInstName,
                body: i.procInstBody
              }), i.procInstName = i.procInstBody = "", i.state = S.TEXT) : (i.procInstBody += "?" + _, i.state = S.PROC_INST_BODY);
              continue;
            case S.OPEN_TAG:
              se(be, _) ? i.tagName += _ : (Ve(i), _ === ">" ? Be(i) : _ === "/" ? i.state = S.OPEN_TAG_SLASH : (ne(_) || oe(i, "Invalid character in tag name"), i.state = S.ATTRIB));
              continue;
            case S.OPEN_TAG_SLASH:
              _ === ">" ? (Be(i, !0), xt(i)) : (oe(i, "Forward-slash in opening tag not followed by >"), i.state = S.ATTRIB);
              continue;
            case S.ATTRIB:
              if (ne(_))
                continue;
              _ === ">" ? Be(i) : _ === "/" ? i.state = S.OPEN_TAG_SLASH : se($, _) ? (i.attribName = _, i.attribValue = "", i.state = S.ATTRIB_NAME) : oe(i, "Invalid attribute name");
              continue;
            case S.ATTRIB_NAME:
              _ === "=" ? i.state = S.ATTRIB_VALUE : _ === ">" ? (oe(i, "Attribute without value"), i.attribValue = i.attribName, Ie(i), Be(i)) : ne(_) ? i.state = S.ATTRIB_NAME_SAW_WHITE : se(be, _) ? i.attribName += _ : oe(i, "Invalid attribute name");
              continue;
            case S.ATTRIB_NAME_SAW_WHITE:
              if (_ === "=")
                i.state = S.ATTRIB_VALUE;
              else {
                if (ne(_))
                  continue;
                oe(i, "Attribute without value"), i.tag.attributes[i.attribName] = "", i.attribValue = "", W(i, "onattribute", {
                  name: i.attribName,
                  value: ""
                }), i.attribName = "", _ === ">" ? Be(i) : se($, _) ? (i.attribName = _, i.state = S.ATTRIB_NAME) : (oe(i, "Invalid attribute name"), i.state = S.ATTRIB);
              }
              continue;
            case S.ATTRIB_VALUE:
              if (ne(_))
                continue;
              de(_) ? (i.q = _, i.state = S.ATTRIB_VALUE_QUOTED) : (i.opt.unquotedAttributeValues || Ue(i, "Unquoted attribute value"), i.state = S.ATTRIB_VALUE_UNQUOTED, i.attribValue = _);
              continue;
            case S.ATTRIB_VALUE_QUOTED:
              if (_ !== i.q) {
                _ === "&" ? i.state = S.ATTRIB_VALUE_ENTITY_Q : i.attribValue += _;
                continue;
              }
              Ie(i), i.q = "", i.state = S.ATTRIB_VALUE_CLOSED;
              continue;
            case S.ATTRIB_VALUE_CLOSED:
              ne(_) ? i.state = S.ATTRIB : _ === ">" ? Be(i) : _ === "/" ? i.state = S.OPEN_TAG_SLASH : se($, _) ? (oe(i, "No whitespace between attributes"), i.attribName = _, i.attribValue = "", i.state = S.ATTRIB_NAME) : oe(i, "Invalid attribute name");
              continue;
            case S.ATTRIB_VALUE_UNQUOTED:
              if (!Ce(_)) {
                _ === "&" ? i.state = S.ATTRIB_VALUE_ENTITY_U : i.attribValue += _;
                continue;
              }
              Ie(i), _ === ">" ? Be(i) : i.state = S.ATTRIB;
              continue;
            case S.CLOSE_TAG:
              if (i.tagName)
                _ === ">" ? xt(i) : se(be, _) ? i.tagName += _ : i.script ? (i.script += "</" + i.tagName, i.tagName = "", i.state = S.SCRIPT) : (ne(_) || oe(i, "Invalid tagname in closing tag"), i.state = S.CLOSE_TAG_SAW_WHITE);
              else {
                if (ne(_))
                  continue;
                mt($, _) ? i.script ? (i.script += "</" + _, i.state = S.SCRIPT) : oe(i, "Invalid tagname in closing tag.") : i.tagName = _;
              }
              continue;
            case S.CLOSE_TAG_SAW_WHITE:
              if (ne(_))
                continue;
              _ === ">" ? xt(i) : oe(i, "Invalid characters in closing tag");
              continue;
            case S.TEXT_ENTITY:
            case S.ATTRIB_VALUE_ENTITY_Q:
            case S.ATTRIB_VALUE_ENTITY_U:
              var ue, xe;
              switch (i.state) {
                case S.TEXT_ENTITY:
                  ue = S.TEXT, xe = "textNode";
                  break;
                case S.ATTRIB_VALUE_ENTITY_Q:
                  ue = S.ATTRIB_VALUE_QUOTED, xe = "attribValue";
                  break;
                case S.ATTRIB_VALUE_ENTITY_U:
                  ue = S.ATTRIB_VALUE_UNQUOTED, xe = "attribValue";
                  break;
              }
              if (_ === ";") {
                var he = Ye(i);
                i.opt.unparsedEntities && !Object.values(w.XML_ENTITIES).includes(he) ? (i.entity = "", i.state = ue, i.write(he)) : (i[xe] += he, i.entity = "", i.state = ue);
              } else se(i.entity.length ? le : Se, _) ? i.entity += _ : (oe(i, "Invalid character in entity name"), i[xe] += "&" + i.entity + _, i.entity = "", i.state = ue);
              continue;
            default:
              throw new Error(i, "Unknown state: " + i.state);
          }
        return i.position >= i.bufferCheckPosition && D(i), i;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var s = String.fromCharCode, i = Math.floor, T = function() {
          var _ = 16384, ee = [], Q, ue, xe = -1, he = arguments.length;
          if (!he)
            return "";
          for (var He = ""; ++xe < he; ) {
            var _e = Number(arguments[xe]);
            if (!isFinite(_e) || // `NaN`, `+Infinity`, or `-Infinity`
            _e < 0 || // not a valid Unicode code point
            _e > 1114111 || // not a valid Unicode code point
            i(_e) !== _e)
              throw RangeError("Invalid code point: " + _e);
            _e <= 65535 ? ee.push(_e) : (_e -= 65536, Q = (_e >> 10) + 55296, ue = _e % 1024 + 56320, ee.push(Q, ue)), (xe + 1 === he || ee.length > _) && (He += s.apply(null, ee), ee.length = 0);
          }
          return He;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: T,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = T;
      })();
    })(x);
  })(Mr)), Mr;
}
var Qa = Ga();
const za = [".fsd", ".asd", ".ssd", ".scd"], Xr = [
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
], er = "++id, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName";
function Ya(x) {
  return x.reduce(
    (w, A) => (w[A] = er, w),
    {}
  );
}
var tr = { exports: {} }, Xa = tr.exports, Gr;
function Ha() {
  return Gr || (Gr = 1, (function(x, w) {
    (function(A, d) {
      x.exports = d();
    })(Xa, function() {
      var A = function(e, t) {
        return (A = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
        })(e, t);
      }, d = function() {
        return (d = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
      };
      function D(e, t, n) {
        for (var r, a = 0, o = t.length; a < o; a++) !r && a in t || ((r = r || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var R = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : qa, M = Object.keys, q = Array.isArray;
      function G(e, t) {
        return typeof t != "object" || M(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || R.Promise || (R.Promise = Promise);
      var ie = Object.getPrototypeOf, pe = {}.hasOwnProperty;
      function V(e, t) {
        return pe.call(e, t);
      }
      function X(e, t) {
        typeof t == "function" && (t = t(ie(e))), (typeof Reflect > "u" ? M : Reflect.ownKeys)(t).forEach(function(n) {
          J(e, n, t[n]);
        });
      }
      var ae = Object.defineProperty;
      function J(e, t, n, r) {
        ae(e, t, G(n && V(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function ge(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), J(e.prototype, "constructor", e), { extend: X.bind(null, e.prototype) };
        } };
      }
      var $ = Object.getOwnPropertyDescriptor, be = [].slice;
      function Se(e, t, n) {
        return be.call(e, t, n);
      }
      function le(e, t) {
        return t(e);
      }
      function ne(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function de(e) {
        R.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Ce(e, t) {
        if (typeof t == "string" && V(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, a = t.length; r < a; ++r) {
            var o = Ce(e, t[r]);
            n.push(o);
          }
          return n;
        }
        var u = t.indexOf(".");
        if (u !== -1) {
          var c = e[t.substr(0, u)];
          return c == null ? void 0 : Ce(c, t.substr(u + 1));
        }
      }
      function se(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          ne(typeof n != "string" && "length" in n);
          for (var r = 0, a = t.length; r < a; ++r) se(e, t[r], n[r]);
        } else {
          var o, u, c = t.indexOf(".");
          c !== -1 ? (o = t.substr(0, c), (u = t.substr(c + 1)) === "" ? n === void 0 ? q(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : se(c = !(c = e[o]) || !V(e, o) ? e[o] = {} : c, u, n)) : n === void 0 ? q(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function mt(e) {
        var t, n = {};
        for (t in e) V(e, t) && (n[t] = e[t]);
        return n;
      }
      var S = [].concat;
      function ze(e) {
        return S.apply([], e);
      }
      var ot = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ze([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return R[e];
      }), Fe = new Set(ot.map(function(e) {
        return R[e];
      })), W = null;
      function we(e) {
        return W = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var r = W.get(n);
          if (r) return r;
          if (q(n)) {
            r = [], W.set(n, r);
            for (var a = 0, o = n.length; a < o; ++a) r.push(t(n[a]));
          } else if (Fe.has(n.constructor)) r = n;
          else {
            var u, c = ie(n);
            for (u in r = c === Object.prototype ? {} : Object.create(c), W.set(n, r), n) V(n, u) && (r[u] = t(n[u]));
          }
          return r;
        })(e), W = null, e;
      }
      var rt = {}.toString;
      function Ue(e) {
        return rt.call(e).slice(8, -1);
      }
      var yt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", oe = typeof yt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[yt]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ve(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var je = {};
      function Ie(e) {
        var t, n, r, a;
        if (arguments.length === 1) {
          if (q(e)) return e.slice();
          if (this === je && typeof e == "string") return [e];
          if (a = oe(e)) {
            for (n = []; !(r = a.next()).done; ) n.push(r.value);
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
      var Be = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Dt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ke = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Dt), xt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ye(e, t) {
        this.name = e, this.message = t;
      }
      function At(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, a) {
          return a.indexOf(n) === r;
        }).join(`
`);
      }
      function at(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = At(e, t);
      }
      function Xe(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = At(e, this.failures);
      }
      ge(Ye).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), ge(at).from(Ye), ge(Xe).from(Ye);
      var s = ke.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), i = Ye, T = ke.reduce(function(e, t) {
        var n = t + "Error";
        function r(a, o) {
          this.name = n, a ? typeof a == "string" ? (this.message = "".concat(a).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = xt[t] || n, this.inner = null);
        }
        return ge(r).from(i), e[t] = r, e;
      }, {});
      T.Syntax = SyntaxError, T.Type = TypeError, T.Range = RangeError;
      var _ = Dt.reduce(function(e, t) {
        return e[t + "Error"] = T[t], e;
      }, {}), ee = ke.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = T[t]), e;
      }, {});
      function Q() {
      }
      function ue(e) {
        return e;
      }
      function xe(e, t) {
        return e == null || e === ue ? t : function(n) {
          return t(e(n));
        };
      }
      function he(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function He(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? he(r, this.onsuccess) : r), a && (this.onerror = this.onerror ? he(a, this.onerror) : a), o !== void 0 ? o : n;
        };
      }
      function _e(e, t) {
        return e === Q ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? he(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? he(r, this.onerror) : r);
        };
      }
      function Ke(e, t) {
        return e === Q ? t : function(n) {
          var r = e.apply(this, arguments);
          G(n, r);
          var a = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? he(a, this.onsuccess) : a), o && (this.onerror = this.onerror ? he(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : G(r, n);
        };
      }
      function gn(e, t) {
        return e === Q ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function vt(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var r = this, a = arguments.length, o = new Array(a); a--; ) o[a] = arguments[a];
            return n.then(function() {
              return t.apply(r, o);
            });
          }
          return t.apply(this, arguments);
        };
      }
      ee.ModifyError = at, ee.DexieError = Ye, ee.BulkError = Xe;
      var Ne = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Pt(e) {
        Ne = e;
      }
      var Ot = {}, or = 100, ot = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, ie(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, ie(t), e];
      })(), Dt = ot[0], ke = ot[1], ot = ot[2], ke = ke && ke.then, it = Dt && Dt.constructor, bn = !!ot, Nt = function(e, t) {
        It.push([e, t]), Gt && (queueMicrotask(Zr), Gt = !1);
      }, wn = !0, Gt = !0, st = [], Qt = [], _n = ue, We = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, U = We, It = [], ut = 0, zt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = U;
        if (typeof e != "function") {
          if (e !== Ot) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Tn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, (function n(r, a) {
          try {
            a(function(o) {
              if (r._state === null) {
                if (o === r) throw new TypeError("A promise cannot be resolved with itself.");
                var u = r._lib && gt();
                o && typeof o.then == "function" ? n(r, function(c, f) {
                  o instanceof j ? o._then(c, f) : o.then(c, f);
                }) : (r._state = !0, r._value = o, sr(r)), u && bt();
              }
            }, Tn.bind(null, r));
          } catch (o) {
            Tn(r, o);
          }
        })(this, e);
      }
      var En = { get: function() {
        var e = U, t = Wt;
        function n(r, a) {
          var o = this, u = !e.global && (e !== U || t !== Wt), c = u && !Je(), f = new j(function(h, y) {
            Sn(o, new ir(cr(r, e, u, c), cr(a, e, u, c), h, y, e));
          });
          return this._consoleTask && (f._consoleTask = this._consoleTask), f;
        }
        return n.prototype = Ot, n;
      }, set: function(e) {
        J(this, "then", e && e.prototype === Ot ? En : { get: function() {
          return e;
        }, set: En.set });
      } };
      function ir(e, t, n, r, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = a;
      }
      function Tn(e, t) {
        var n, r;
        Qt.push(t), e._state === null && (n = e._lib && gt(), t = _n(t), e._state = !1, e._value = t, r = e, st.some(function(a) {
          return a._value === r._value;
        }) || st.push(r), sr(e), n && bt());
      }
      function sr(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) Sn(e, t[n]);
        var a = e._PSD;
        --a.ref || a.finalize(), ut === 0 && (++ut, Nt(function() {
          --ut == 0 && Cn();
        }, []));
      }
      function Sn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++ut, Nt(Jr, [n, e, t]);
        } else e._listeners.push(t);
      }
      function Jr(e, t, n) {
        try {
          var r, a = t._value;
          !t._state && Qt.length && (Qt = []), r = Ne && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || Qt.indexOf(a) !== -1 || (function(o) {
            for (var u = st.length; u; ) if (st[--u]._value === o._value) return st.splice(u, 1);
          })(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --ut == 0 && Cn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Zr() {
        ct(We, function() {
          gt() && bt();
        });
      }
      function gt() {
        var e = wn;
        return Gt = wn = !1, e;
      }
      function bt() {
        var e, t, n;
        do
          for (; 0 < It.length; ) for (e = It, It = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < It.length);
        Gt = wn = !0;
      }
      function Cn() {
        var e = st;
        st = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = zt.slice(0), n = t.length; n; ) t[--n]();
      }
      function Yt(e) {
        return new j(Ot, !1, e);
      }
      function fe(e, t) {
        var n = U;
        return function() {
          var r = gt(), a = U;
          try {
            return Ze(n, !0), e.apply(this, arguments);
          } catch (o) {
            t && t(o);
          } finally {
            Ze(a, !1), r && bt();
          }
        };
      }
      X(j.prototype, { then: En, _then: function(e, t) {
        Sn(this, new ir(null, null, e, t, U));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : Yt)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : Yt)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return j.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return j.resolve(e()).then(function() {
            return Yt(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new j(function(r, a) {
          var o = setTimeout(function() {
            return a(new T.Timeout(t));
          }, e);
          n.then(r, a).finally(clearTimeout.bind(null, o));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && J(j.prototype, Symbol.toStringTag, "Dexie.Promise"), We.env = ur(), X(j, { all: function() {
        var e = Ie.apply(null, arguments).map($t);
        return new j(function(t, n) {
          e.length === 0 && t([]);
          var r = e.length;
          e.forEach(function(a, o) {
            return j.resolve(a).then(function(u) {
              e[o] = u, --r || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof j ? e : e && typeof e.then == "function" ? new j(function(t, n) {
          e.then(t, n);
        }) : new j(Ot, !0, e);
      }, reject: Yt, race: function() {
        var e = Ie.apply(null, arguments).map($t);
        return new j(function(t, n) {
          e.map(function(r) {
            return j.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return U;
      }, set: function(e) {
        return U = e;
      } }, totalEchoes: { get: function() {
        return Wt;
      } }, newPSD: $e, usePSD: ct, scheduler: { get: function() {
        return Nt;
      }, set: function(e) {
        Nt = e;
      } }, rejectionMapper: { get: function() {
        return _n;
      }, set: function(e) {
        _n = e;
      } }, follow: function(e, t) {
        return new j(function(n, r) {
          return $e(function(a, o) {
            var u = U;
            u.unhandleds = [], u.onunhandled = o, u.finalize = he(function() {
              var c, f = this;
              c = function() {
                f.unhandleds.length === 0 ? a() : o(f.unhandleds[0]);
              }, zt.push(function h() {
                c(), zt.splice(zt.indexOf(h), 1);
              }), ++ut, Nt(function() {
                --ut == 0 && Cn();
              }, []);
            }, u.finalize), e();
          }, t, n, r);
        });
      } }), it && (it.allSettled && J(j, "allSettled", function() {
        var e = Ie.apply(null, arguments).map($t);
        return new j(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(a, o) {
            return j.resolve(a).then(function(u) {
              return r[o] = { status: "fulfilled", value: u };
            }, function(u) {
              return r[o] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), it.any && typeof AggregateError < "u" && J(j, "any", function() {
        var e = Ie.apply(null, arguments).map($t);
        return new j(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, a = new Array(r);
          e.forEach(function(o, u) {
            return j.resolve(o).then(function(c) {
              return t(c);
            }, function(c) {
              a[u] = c, --r || n(new AggregateError(a));
            });
          });
        });
      }), it.withResolvers && (j.withResolvers = it.withResolvers));
      var Ee = { awaits: 0, echoes: 0, id: 0 }, ea = 0, Xt = [], Ht = 0, Wt = 0, ta = 0;
      function $e(e, t, n, r) {
        var a = U, o = Object.create(a);
        return o.parent = a, o.ref = 0, o.global = !1, o.id = ++ta, We.env, o.env = bn ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && G(o, t), ++a.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = ct(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function wt() {
        return Ee.id || (Ee.id = ++ea), ++Ee.awaits, Ee.echoes += or, Ee.id;
      }
      function Je() {
        return !!Ee.awaits && (--Ee.awaits == 0 && (Ee.id = 0), Ee.echoes = Ee.awaits * or, !0);
      }
      function $t(e) {
        return Ee.echoes && e && e.constructor === it ? (wt(), e.then(function(t) {
          return Je(), t;
        }, function(t) {
          return Je(), ye(t);
        })) : e;
      }
      function na() {
        var e = Xt[Xt.length - 1];
        Xt.pop(), Ze(e, !1);
      }
      function Ze(e, t) {
        var n, r = U;
        (t ? !Ee.echoes || Ht++ && e === U : !Ht || --Ht && e === U) || queueMicrotask(t ? (function(a) {
          ++Wt, Ee.echoes && --Ee.echoes != 0 || (Ee.echoes = Ee.awaits = Ee.id = 0), Xt.push(U), Ze(a, !0);
        }).bind(null, e) : na), e !== U && (U = e, r === We && (We.env = ur()), bn && (n = We.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(R, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function ur() {
        var e = R.Promise;
        return bn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(R, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function ct(e, t, n, r, a) {
        var o = U;
        try {
          return Ze(e, !0), t(n, r, a);
        } finally {
          Ze(o, !1);
        }
      }
      function cr(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var a = U;
          n && wt(), Ze(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ze(a, !1), r && queueMicrotask(Je);
          }
        };
      }
      function xn(e) {
        Promise === it && Ee.echoes === 0 ? Ht === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ke).indexOf("[native code]") === -1 && (wt = Je = Q);
      var ye = j.reject, lt = "￿", Ge = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", lr = "String expected.", _t = [], Jt = "__dbnames", An = "readonly", Pn = "readwrite";
      function ft(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var fr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Zt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = we(t))[e], t;
        };
      }
      function pr() {
        throw T.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Z(e, t) {
        try {
          var n = dr(e), r = dr(t);
          if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return (function(a, o) {
                for (var u = a.length, c = o.length, f = u < c ? u : c, h = 0; h < f; ++h) if (a[h] !== o[h]) return a[h] < o[h] ? -1 : 1;
                return u === c ? 0 : u < c ? -1 : 1;
              })(hr(e), hr(t));
            case "Array":
              return (function(a, o) {
                for (var u = a.length, c = o.length, f = u < c ? u : c, h = 0; h < f; ++h) {
                  var y = Z(a[h], o[h]);
                  if (y !== 0) return y;
                }
                return u === c ? 0 : u < c ? -1 : 1;
              })(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function dr(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Ue(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function hr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function en(e, t, n) {
        var r = e.schema.yProps;
        return r ? (t && 0 < n.numFailures && (t = t.filter(function(a, o) {
          return !n.failures[o];
        })), Promise.all(r.map(function(a) {
          return a = a.updatesTable, t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      var mr = (ce.prototype._trans = function(e, t, n) {
        var r = this._tx || U.trans, a = this.name, o = Ne && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(h, y, l) {
          if (!l.schema[a]) throw new T.NotFound("Table " + a + " not part of transaction");
          return t(l.idbtrans, l);
        }
        var c = gt();
        try {
          var f = r && r.db._novip === this.db._novip ? r === U.trans ? r._promise(e, u, n) : $e(function() {
            return r._promise(e, u, n);
          }, { trans: r, transless: U.transless || U }) : (function h(y, l, b, p) {
            if (y.idbdb && (y._state.openComplete || U.letThrough || y._vip)) {
              var m = y._createTransaction(l, b, y._dbSchema);
              try {
                m.create(), y._state.PR1398_maxLoop = 3;
              } catch (g) {
                return g.name === s.InvalidState && y.isOpen() && 0 < --y._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), y.close({ disableAutoOpen: !1 }), y.open().then(function() {
                  return h(y, l, b, p);
                })) : ye(g);
              }
              return m._promise(l, function(g, v) {
                return $e(function() {
                  return U.trans = m, p(g, v, m);
                });
              }).then(function(g) {
                if (l === "readwrite") try {
                  m.idbtrans.commit();
                } catch {
                }
                return l === "readonly" ? g : m._completion.then(function() {
                  return g;
                });
              });
            }
            if (y._state.openComplete) return ye(new T.DatabaseClosed(y._state.dbOpenError));
            if (!y._state.isBeingOpened) {
              if (!y._state.autoOpen) return ye(new T.DatabaseClosed());
              y.open().catch(Q);
            }
            return y._state.dbReadyPromise.then(function() {
              return h(y, l, b, p);
            });
          })(this.db, e, [this.name], u);
          return o && (f._consoleTask = o, f = f.catch(function(h) {
            return console.trace(h), ye(h);
          })), f;
        } finally {
          c && bt();
        }
      }, ce.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? ye(new T.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(a) {
            return n.hook.reading.fire(a);
          });
        }).then(t);
      }, ce.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (q(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = M(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(c) {
          if (c.compound && t.every(function(h) {
            return 0 <= c.keyPath.indexOf(h);
          })) {
            for (var f = 0; f < t.length; ++f) if (t.indexOf(c.keyPath[f]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(c, f) {
          return c.keyPath.length - f.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== lt) {
          var o = n.keyPath.slice(0, t.length);
          return this.where(o).equals(o.map(function(f) {
            return e[f];
          }));
        }
        !n && Ne && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function a(c, f) {
          return Z(c, f) === 0;
        }
        var u = t.reduce(function(l, f) {
          var h = l[0], y = l[1], l = r[f], b = e[f];
          return [h || l, h || !l ? ft(y, l && l.multi ? function(p) {
            return p = Ce(p, f), q(p) && p.some(function(m) {
              return a(b, m);
            });
          } : function(p) {
            return a(b, Ce(p, f));
          }) : y];
        }, [null, null]), o = u[0], u = u[1];
        return o ? this.where(o.name).equals(e[o.keyPath]).filter(u) : n ? this.filter(u) : this.where(t).equals("");
      }, ce.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, ce.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, ce.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, ce.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, ce.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, ce.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, ce.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ce.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, q(e) ? "[".concat(e.join("+"), "]") : e));
      }, ce.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ce.prototype.mapToClass = function(e) {
        var t, n = this.db, r = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof pr && ((function(f, h) {
          if (typeof h != "function" && h !== null) throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
          function y() {
            this.constructor = f;
          }
          A(f, h), f.prototype = h === null ? Object.create(h) : (y.prototype = h.prototype, new y());
        })(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return r;
        }, e = a);
        for (var o = /* @__PURE__ */ new Set(), u = e.prototype; u; u = ie(u)) Object.getOwnPropertyNames(u).forEach(function(f) {
          return o.add(f);
        });
        function c(f) {
          if (!f) return f;
          var h, y = Object.create(e.prototype);
          for (h in f) if (!o.has(h)) try {
            y[h] = f[h];
          } catch {
          }
          return y;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = c, this.hook("reading", c), e;
      }, ce.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          G(this, e);
        });
      }, ce.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, a = r.auto, o = r.keyPath, u = e;
        return o && a && (u = Zt(o)(e)), this._trans("readwrite", function(c) {
          return n.core.mutate({ trans: c, type: "add", keys: t != null ? [t] : null, values: [u] });
        }).then(function(c) {
          return c.numFailures ? j.reject(c.failures[0]) : c.lastResult;
        }).then(function(c) {
          if (o) try {
            se(e, o, c);
          } catch {
          }
          return c;
        });
      }, ce.prototype.update = function(e, t) {
        return typeof e != "object" || q(e) ? this.where(":id").equals(e).modify(t) : (e = Ce(e, this.schema.primKey.keyPath), e === void 0 ? ye(new T.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ce.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, a = r.auto, o = r.keyPath, u = e;
        return o && a && (u = Zt(o)(e)), this._trans("readwrite", function(c) {
          return n.core.mutate({ trans: c, type: "put", values: [u], keys: t != null ? [t] : null });
        }).then(function(c) {
          return c.numFailures ? j.reject(c.failures[0]) : c.lastResult;
        }).then(function(c) {
          if (o) try {
            se(e, o, c);
          } catch {
          }
          return c;
        });
      }, ce.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] }).then(function(r) {
            return en(t, [e], r);
          }).then(function(r) {
            return r.numFailures ? j.reject(r.failures[0]) : void 0;
          });
        });
      }, ce.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: fr }).then(function(n) {
            return en(e, null, n);
          });
        }).then(function(t) {
          return t.numFailures ? j.reject(t.failures[0]) : void 0;
        });
      }, ce.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(n) {
          return t.core.getMany({ keys: e, trans: n }).then(function(r) {
            return r.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, ce.prototype.bulkAdd = function(e, t, n) {
        var r = this, a = Array.isArray(t) ? t : void 0, o = (n = n || (a ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var h = r.schema.primKey, c = h.auto, h = h.keyPath;
          if (h && a) throw new T.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var f = e.length, h = h && c ? e.map(Zt(h)) : e;
          return r.core.mutate({ trans: u, type: "add", keys: a, values: h, wantResults: o }).then(function(m) {
            var l = m.numFailures, b = m.results, p = m.lastResult, m = m.failures;
            if (l === 0) return o ? b : p;
            throw new Xe("".concat(r.name, ".bulkAdd(): ").concat(l, " of ").concat(f, " operations failed"), m);
          });
        });
      }, ce.prototype.bulkPut = function(e, t, n) {
        var r = this, a = Array.isArray(t) ? t : void 0, o = (n = n || (a ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var h = r.schema.primKey, c = h.auto, h = h.keyPath;
          if (h && a) throw new T.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var f = e.length, h = h && c ? e.map(Zt(h)) : e;
          return r.core.mutate({ trans: u, type: "put", keys: a, values: h, wantResults: o }).then(function(m) {
            var l = m.numFailures, b = m.results, p = m.lastResult, m = m.failures;
            if (l === 0) return o ? b : p;
            throw new Xe("".concat(r.name, ".bulkPut(): ").concat(l, " of ").concat(f, " operations failed"), m);
          });
        });
      }, ce.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, r = e.map(function(u) {
          return u.key;
        }), a = e.map(function(u) {
          return u.changes;
        }), o = [];
        return this._trans("readwrite", function(u) {
          return n.getMany({ trans: u, keys: r, cache: "clone" }).then(function(c) {
            var f = [], h = [];
            e.forEach(function(l, b) {
              var p = l.key, m = l.changes, g = c[b];
              if (g) {
                for (var v = 0, E = Object.keys(m); v < E.length; v++) {
                  var C = E[v], P = m[C];
                  if (C === t.schema.primKey.keyPath) {
                    if (Z(P, p) !== 0) throw new T.Constraint("Cannot update primary key in bulkUpdate()");
                  } else se(g, C, P);
                }
                o.push(b), f.push(p), h.push(g);
              }
            });
            var y = f.length;
            return n.mutate({ trans: u, type: "put", keys: f, values: h, updates: { keys: r, changeSpecs: a } }).then(function(l) {
              var b = l.numFailures, p = l.failures;
              if (b === 0) return y;
              for (var m = 0, g = Object.keys(p); m < g.length; m++) {
                var v, E = g[m], C = o[Number(E)];
                C != null && (v = p[E], delete p[E], p[C] = v);
              }
              throw new Xe("".concat(t.name, ".bulkUpdate(): ").concat(b, " of ").concat(y, " operations failed"), p);
            });
          });
        });
      }, ce.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e }).then(function(a) {
            return en(t, e, a);
          });
        }).then(function(u) {
          var a = u.numFailures, o = u.lastResult, u = u.failures;
          if (a === 0) return o;
          throw new Xe("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(n, " operations failed"), u);
        });
      }, ce);
      function ce() {
      }
      function Rt(e) {
        function t(u, c) {
          if (c) {
            for (var f = arguments.length, h = new Array(f - 1); --f; ) h[f - 1] = arguments[f];
            return n[u].subscribe.apply(null, h), e;
          }
          if (typeof u == "string") return n[u];
        }
        var n = {};
        t.addEventType = o;
        for (var r = 1, a = arguments.length; r < a; ++r) o(arguments[r]);
        return t;
        function o(u, c, f) {
          if (typeof u != "object") {
            var h;
            c = c || gn;
            var y = { subscribers: [], fire: f = f || Q, subscribe: function(l) {
              y.subscribers.indexOf(l) === -1 && (y.subscribers.push(l), y.fire = c(y.fire, l));
            }, unsubscribe: function(l) {
              y.subscribers = y.subscribers.filter(function(b) {
                return b !== l;
              }), y.fire = y.subscribers.reduce(c, f);
            } };
            return n[u] = t[u] = y;
          }
          M(h = u).forEach(function(l) {
            var b = h[l];
            if (q(b)) o(l, h[l][0], h[l][1]);
            else {
              if (b !== "asap") throw new T.InvalidArgument("Invalid event config");
              var p = o(l, ue, function() {
                for (var m = arguments.length, g = new Array(m); m--; ) g[m] = arguments[m];
                p.subscribers.forEach(function(v) {
                  de(function() {
                    v.apply(null, g);
                  });
                });
              });
            }
          });
        }
      }
      function kt(e, t) {
        return ge(t).from({ prototype: e }), t;
      }
      function Et(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function On(e, t) {
        e.filter = ft(e.filter, t);
      }
      function Dn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return ft(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function tn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new T.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function yr(e, t, n) {
        var r = tn(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function nn(e, t, n, r) {
        var a = e.replayFilter ? ft(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, u = function(c, f, h) {
            var y, l;
            a && !a(f, h, function(b) {
              return f.stop(b);
            }, function(b) {
              return f.fail(b);
            }) || ((l = "" + (y = f.primaryKey)) == "[object ArrayBuffer]" && (l = "" + new Uint8Array(y)), V(o, l) || (o[l] = !0, t(c, f, h)));
          };
          return Promise.all([e.or._iterate(u, n), vr(yr(e, r, n), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return vr(yr(e, r, n), ft(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function vr(e, t, n, r) {
        var a = fe(r ? function(o, u, c) {
          return n(r(o), u, c);
        } : n);
        return e.then(function(o) {
          if (o) return o.start(function() {
            var u = function() {
              return o.continue();
            };
            t && !t(o, function(c) {
              return u = c;
            }, function(c) {
              o.stop(c), u = Q;
            }, function(c) {
              o.fail(c), u = Q;
            }) || a(o.value, o, function(c) {
              return u = c;
            }), u();
          });
        });
      }
      var Ft = (gr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (q(n)) return D(D([], q(e) ? e : [], !0), n).sort();
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
          if (q(r)) return q(e) ? e.filter(function(a) {
            return !r.includes(a);
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
      }, gr);
      function gr(e) {
        this["@@propmod"] = e;
      }
      var ra = (re.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ye.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, re.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, ye.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, re.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = ft(t.algorithm, e);
      }, re.prototype._iterate = function(e, t) {
        return nn(this._ctx, e, t, this._ctx.table.core);
      }, re.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && G(n, e), t._ctx = n, t;
      }, re.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, re.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return nn(t, e, n, t.table.core);
        });
      }, re.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, a = r.table.core;
          if (Et(r, !0)) return a.count({ trans: n, query: { index: tn(r, a.schema), range: r.range } }).then(function(u) {
            return Math.min(u, r.limit);
          });
          var o = 0;
          return nn(r, function() {
            return ++o, !1;
          }, n, a).then(function() {
            return o;
          });
        }).then(e);
      }, re.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), r = n[0], a = n.length - 1;
        function o(f, h) {
          return h ? o(f[n[h]], h - 1) : f[r];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function c(f, h) {
          return Z(o(f, a), o(h, a)) * u;
        }
        return this.toArray(function(f) {
          return f.sort(c);
        }).then(t);
      }, re.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx;
          if (r.dir === "next" && Et(r, !0) && 0 < r.limit) {
            var a = r.valueMapper, o = tn(r, r.table.core.schema);
            return r.table.core.query({ trans: n, limit: r.limit, values: !0, query: { index: o, range: r.range } }).then(function(c) {
              return c = c.result, a ? c.map(a) : c;
            });
          }
          var u = [];
          return nn(r, function(c) {
            return u.push(c);
          }, n, r.table.core).then(function() {
            return u;
          });
        }, e);
      }, re.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, Et(t) ? Dn(t, function() {
          var n = e;
          return function(r, a) {
            return n === 0 || (n === 1 ? --n : a(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : Dn(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, re.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Dn(this._ctx, function() {
          var t = e;
          return function(n, r, a) {
            return --t <= 0 && r(a), 0 <= t;
          };
        }, !0), this;
      }, re.prototype.until = function(e, t) {
        return On(this._ctx, function(n, r, a) {
          return !e(n.value) || (r(a), t);
        }), this;
      }, re.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, re.prototype.last = function(e) {
        return this.reverse().first(e);
      }, re.prototype.filter = function(e) {
        var t;
        return On(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = ft(t.isMatch, e), this;
      }, re.prototype.and = function(e) {
        return this.filter(e);
      }, re.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, re.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, re.prototype.desc = function() {
        return this.reverse();
      }, re.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.key, r);
        });
      }, re.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, re.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.primaryKey, r);
        });
      }, re.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, a) {
          n.push(a.key);
        }).then(function() {
          return n;
        }).then(e);
      }, re.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && Et(t, !0) && 0 < t.limit) return this._read(function(r) {
          var a = tn(t, t.table.core.schema);
          return t.table.core.query({ trans: r, values: !1, limit: t.limit, query: { index: a, range: t.range } });
        }).then(function(r) {
          return r.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, a) {
          n.push(a.primaryKey);
        }).then(function() {
          return n;
        }).then(e);
      }, re.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, re.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, re.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, re.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return On(this._ctx, function(a) {
          var r = a.primaryKey.toString(), a = V(t, r);
          return t[r] = !0, !a;
        }), this;
      }, re.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var a, o, u;
          u = typeof e == "function" ? e : (a = M(e), o = a.length, function(E) {
            for (var C = !1, P = 0; P < o; ++P) {
              var O = a[P], N = e[O], F = Ce(E, O);
              N instanceof Ft ? (se(E, O, N.execute(F)), C = !0) : F !== N && (se(E, O, N), C = !0);
            }
            return C;
          });
          var c = n.table.core, l = c.schema.primaryKey, f = l.outbound, h = l.extractKey, y = 200, l = t.db._options.modifyChunkSize;
          l && (y = typeof l == "object" ? l[c.name] || l["*"] || 200 : l);
          function b(E, O) {
            var P = O.failures, O = O.numFailures;
            m += E - O;
            for (var N = 0, F = M(P); N < F.length; N++) {
              var I = F[N];
              p.push(P[I]);
            }
          }
          var p = [], m = 0, g = [], v = e === br;
          return t.clone().primaryKeys().then(function(E) {
            function C(O) {
              var N = Math.min(y, E.length - O), F = E.slice(O, O + N);
              return (v ? Promise.resolve([]) : c.getMany({ trans: r, keys: F, cache: "immutable" })).then(function(I) {
                var k = [], K = [], B = f ? [] : null, L = v ? F : [];
                if (!v) for (var H = 0; H < N; ++H) {
                  var te = I[H], Y = { value: we(te), primKey: E[O + H] };
                  u.call(Y, Y.value, Y) !== !1 && (Y.value == null ? L.push(E[O + H]) : f || Z(h(te), h(Y.value)) === 0 ? (K.push(Y.value), f && B.push(E[O + H])) : (L.push(E[O + H]), k.push(Y.value)));
                }
                return Promise.resolve(0 < k.length && c.mutate({ trans: r, type: "add", values: k }).then(function(me) {
                  for (var z in me.failures) L.splice(parseInt(z), 1);
                  b(k.length, me);
                })).then(function() {
                  return (0 < K.length || P && typeof e == "object") && c.mutate({ trans: r, type: "put", keys: B, values: K, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < O }).then(function(me) {
                    return b(K.length, me);
                  });
                }).then(function() {
                  return (0 < L.length || P && v) && c.mutate({ trans: r, type: "delete", keys: L, criteria: P, isAdditionalChunk: 0 < O }).then(function(me) {
                    return en(n.table, L, me);
                  }).then(function(me) {
                    return b(L.length, me);
                  });
                }).then(function() {
                  return E.length > O + N && C(O + y);
                });
              });
            }
            var P = Et(n) && n.limit === 1 / 0 && (typeof e != "function" || v) && { index: n.index, range: n.range };
            return C(0).then(function() {
              if (0 < p.length) throw new at("Error modifying one or more objects", p, m, g);
              return E.length;
            });
          });
        });
      }, re.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !Et(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(br) : this._write(function(n) {
          var r = e.table.core.schema.primaryKey, a = t;
          return e.table.core.count({ trans: n, query: { index: r, range: a } }).then(function(o) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: a }).then(function(f) {
              var c = f.failures, f = f.numFailures;
              if (f) throw new at("Could not delete some values", Object.keys(c).map(function(h) {
                return c[h];
              }), o - f);
              return o - f;
            });
          });
        });
      }, re);
      function re() {
      }
      var br = function(e, t) {
        return t.value = null;
      };
      function aa(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function oa(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function Re(e, t, n) {
        return e = e instanceof _r ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function Tt(e) {
        return new e.Collection(e, function() {
          return wr("");
        }).limit(0);
      }
      function rn(e, t, n, r) {
        var a, o, u, c, f, h, y, l = n.length;
        if (!n.every(function(m) {
          return typeof m == "string";
        })) return Re(e, lr);
        function b(m) {
          a = m === "next" ? function(v) {
            return v.toUpperCase();
          } : function(v) {
            return v.toLowerCase();
          }, o = m === "next" ? function(v) {
            return v.toLowerCase();
          } : function(v) {
            return v.toUpperCase();
          }, u = m === "next" ? aa : oa;
          var g = n.map(function(v) {
            return { lower: o(v), upper: a(v) };
          }).sort(function(v, E) {
            return u(v.lower, E.lower);
          });
          c = g.map(function(v) {
            return v.upper;
          }), f = g.map(function(v) {
            return v.lower;
          }), y = (h = m) === "next" ? "" : r;
        }
        b("next"), e = new e.Collection(e, function() {
          return et(c[0], f[l - 1] + r);
        }), e._ondirectionchange = function(m) {
          b(m);
        };
        var p = 0;
        return e._addAlgorithm(function(m, g, v) {
          var E = m.key;
          if (typeof E != "string") return !1;
          var C = o(E);
          if (t(C, f, p)) return !0;
          for (var P = null, O = p; O < l; ++O) {
            var N = (function(F, I, k, K, B, L) {
              for (var H = Math.min(F.length, K.length), te = -1, Y = 0; Y < H; ++Y) {
                var me = I[Y];
                if (me !== K[Y]) return B(F[Y], k[Y]) < 0 ? F.substr(0, Y) + k[Y] + k.substr(Y + 1) : B(F[Y], K[Y]) < 0 ? F.substr(0, Y) + K[Y] + k.substr(Y + 1) : 0 <= te ? F.substr(0, te) + I[te] + k.substr(te + 1) : null;
                B(F[Y], me) < 0 && (te = Y);
              }
              return H < K.length && L === "next" ? F + k.substr(F.length) : H < F.length && L === "prev" ? F.substr(0, k.length) : te < 0 ? null : F.substr(0, te) + K[te] + k.substr(te + 1);
            })(E, C, c[O], f[O], u, h);
            N === null && P === null ? p = O + 1 : (P === null || 0 < u(P, N)) && (P = N);
          }
          return g(P !== null ? function() {
            m.continue(P + y);
          } : v), !1;
        }), e;
      }
      function et(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function wr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var _r = (Object.defineProperty(Te.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Te.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Tt(this) : new this.Collection(this, function() {
            return et(e, t, !n, !r);
          });
        } catch {
          return Re(this, Ge);
        }
      }, Te.prototype.equals = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return wr(e);
        });
      }, Te.prototype.above = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return et(e, void 0, !0);
        });
      }, Te.prototype.aboveOrEqual = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return et(e, void 0, !1);
        });
      }, Te.prototype.below = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return et(void 0, e, !1, !0);
        });
      }, Te.prototype.belowOrEqual = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return et(void 0, e);
        });
      }, Te.prototype.startsWith = function(e) {
        return typeof e != "string" ? Re(this, lr) : this.between(e, e + lt, !0, !0);
      }, Te.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : rn(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], lt);
      }, Te.prototype.equalsIgnoreCase = function(e) {
        return rn(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, Te.prototype.anyOfIgnoreCase = function() {
        var e = Ie.apply(je, arguments);
        return e.length === 0 ? Tt(this) : rn(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, Te.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ie.apply(je, arguments);
        return e.length === 0 ? Tt(this) : rn(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, lt);
      }, Te.prototype.anyOf = function() {
        var e = this, t = Ie.apply(je, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return Re(this, Ge);
        }
        if (t.length === 0) return Tt(this);
        var r = new this.Collection(this, function() {
          return et(t[0], t[t.length - 1]);
        });
        r._ondirectionchange = function(o) {
          n = o === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var a = 0;
        return r._addAlgorithm(function(o, u, c) {
          for (var f = o.key; 0 < n(f, t[a]); ) if (++a === t.length) return u(c), !1;
          return n(f, t[a]) === 0 || (u(function() {
            o.continue(t[a]);
          }), !1);
        }), r;
      }, Te.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Te.prototype.noneOf = function() {
        var e = Ie.apply(je, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Re(this, Ge);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Te.prototype.inAnyRange = function(E, t) {
        var n = this, r = this._cmp, a = this._ascending, o = this._descending, u = this._min, c = this._max;
        if (E.length === 0) return Tt(this);
        if (!E.every(function(C) {
          return C[0] !== void 0 && C[1] !== void 0 && a(C[0], C[1]) <= 0;
        })) return Re(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", T.InvalidArgument);
        var f = !t || t.includeLowers !== !1, h = t && t.includeUppers === !0, y, l = a;
        function b(C, P) {
          return l(C[0], P[0]);
        }
        try {
          (y = E.reduce(function(C, P) {
            for (var O = 0, N = C.length; O < N; ++O) {
              var F = C[O];
              if (r(P[0], F[1]) < 0 && 0 < r(P[1], F[0])) {
                F[0] = u(F[0], P[0]), F[1] = c(F[1], P[1]);
                break;
              }
            }
            return O === N && C.push(P), C;
          }, [])).sort(b);
        } catch {
          return Re(this, Ge);
        }
        var p = 0, m = h ? function(C) {
          return 0 < a(C, y[p][1]);
        } : function(C) {
          return 0 <= a(C, y[p][1]);
        }, g = f ? function(C) {
          return 0 < o(C, y[p][0]);
        } : function(C) {
          return 0 <= o(C, y[p][0]);
        }, v = m, E = new this.Collection(this, function() {
          return et(y[0][0], y[y.length - 1][1], !f, !h);
        });
        return E._ondirectionchange = function(C) {
          l = C === "next" ? (v = m, a) : (v = g, o), y.sort(b);
        }, E._addAlgorithm(function(C, P, O) {
          for (var N, F = C.key; v(F); ) if (++p === y.length) return P(O), !1;
          return !m(N = F) && !g(N) || (n._cmp(F, y[p][1]) === 0 || n._cmp(F, y[p][0]) === 0 || P(function() {
            l === a ? C.continue(y[p][0]) : C.continue(y[p][1]);
          }), !1);
        }), E;
      }, Te.prototype.startsWithAnyOf = function() {
        var e = Ie.apply(je, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? Tt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + lt];
        })) : Re(this, "startsWithAnyOf() only works with strings");
      }, Te);
      function Te() {
      }
      function qe(e) {
        return fe(function(t) {
          return Bt(t), e(t.target.error), !1;
        });
      }
      function Bt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Kt = "storagemutated", Nn = "x-storagemutated-1", tt = Rt(null, Kt), ia = (Le.prototype._lock = function() {
        return ne(!U.global), ++this._reculock, this._reculock !== 1 || U.global || (U.lockOwnerFor = this), this;
      }, Le.prototype._unlock = function() {
        if (ne(!U.global), --this._reculock == 0) for (U.global || (U.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            ct(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Le.prototype._locked = function() {
        return this._reculock && U.lockOwnerFor !== this;
      }, Le.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (ne(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new T.DatabaseClosed(r);
          case "MissingAPIError":
            throw new T.MissingAPI(r.message, r);
          default:
            throw new T.OpenFailed(r);
        }
        if (!this.active) throw new T.TransactionInactive();
        return ne(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = fe(function(a) {
          Bt(a), t._reject(e.error);
        }), e.onabort = fe(function(a) {
          Bt(a), t.active && t._reject(new T.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = fe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && tt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Le.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ye(new T.ReadOnly("Transaction is readonly"));
        if (!this.active) return ye(new T.TransactionInactive());
        if (this._locked()) return new j(function(o, u) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(o, u);
          }, U]);
        });
        if (n) return $e(function() {
          var o = new j(function(u, c) {
            r._lock();
            var f = t(u, c, r);
            f && f.then && f.then(u, c);
          });
          return o.finally(function() {
            return r._unlock();
          }), o._lib = !0, o;
        });
        var a = new j(function(o, u) {
          var c = t(o, u, r);
          c && c.then && c.then(o, u);
        });
        return a._lib = !0, a;
      }, Le.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Le.prototype.waitFor = function(e) {
        var t, n = this._root(), r = j.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return r;
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function o() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = o);
        })());
        var a = n._waitingFor;
        return new j(function(o, u) {
          r.then(function(c) {
            return n._waitingQueue.push(fe(o.bind(null, c)));
          }, function(c) {
            return n._waitingQueue.push(fe(u.bind(null, c)));
          }).finally(function() {
            n._waitingFor === a && (n._waitingFor = null);
          });
        });
      }, Le.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new T.Abort()));
      }, Le.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (V(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new T.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, Le);
      function Le() {
      }
      function In(e, t, n, r, a, o, u, c) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: a, compound: o, src: (n && !u ? "&" : "") + (r ? "*" : "") + (a ? "++" : "") + Er(t), type: c };
      }
      function Er(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Rn(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(a) {
          return [a.name, a];
        }, n.reduce(function(a, o, u) {
          return u = r(o, u), u && (a[u[0]] = u[1]), a;
        }, {})) };
        var r;
      }
      var jt = function(e) {
        try {
          return e.only([[]]), jt = function() {
            return [[]];
          }, [[]];
        } catch {
          return jt = function() {
            return lt;
          }, lt;
        }
      };
      function kn(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return Ce(n, t);
        } : function(n) {
          return Ce(n, e);
        };
        var t;
      }
      function Tr(e) {
        return [].slice.call(e);
      }
      var sa = 0;
      function qt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function ua(e, t, f) {
        function r(v) {
          if (v.type === 3) return null;
          if (v.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var p = v.lower, m = v.upper, g = v.lowerOpen, v = v.upperOpen;
          return p === void 0 ? m === void 0 ? null : t.upperBound(m, !!v) : m === void 0 ? t.lowerBound(p, !!g) : t.bound(p, m, !!g, !!v);
        }
        function a(b) {
          var p, m = b.name;
          return { name: m, schema: b, mutate: function(g) {
            var v = g.trans, E = g.type, C = g.keys, P = g.values, O = g.range;
            return new Promise(function(N, F) {
              N = fe(N);
              var I = v.objectStore(m), k = I.keyPath == null, K = E === "put" || E === "add";
              if (!K && E !== "delete" && E !== "deleteRange") throw new Error("Invalid operation type: " + E);
              var B, L = (C || P || { length: 1 }).length;
              if (C && P && C.length !== P.length) throw new Error("Given keys array must have same length as given values array.");
              if (L === 0) return N({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function H(De) {
                ++me, Bt(De);
              }
              var te = [], Y = [], me = 0;
              if (E === "deleteRange") {
                if (O.type === 4) return N({ numFailures: me, failures: Y, results: [], lastResult: void 0 });
                O.type === 3 ? te.push(B = I.clear()) : te.push(B = I.delete(r(O)));
              } else {
                var k = K ? k ? [P, C] : [P, null] : [C, null], z = k[0], Pe = k[1];
                if (K) for (var Oe = 0; Oe < L; ++Oe) te.push(B = Pe && Pe[Oe] !== void 0 ? I[E](z[Oe], Pe[Oe]) : I[E](z[Oe])), B.onerror = H;
                else for (Oe = 0; Oe < L; ++Oe) te.push(B = I[E](z[Oe])), B.onerror = H;
              }
              function yn(De) {
                De = De.target.result, te.forEach(function(ht, Jn) {
                  return ht.error != null && (Y[Jn] = ht.error);
                }), N({ numFailures: me, failures: Y, results: E === "delete" ? C : te.map(function(ht) {
                  return ht.result;
                }), lastResult: De });
              }
              B.onerror = function(De) {
                H(De), yn(De);
              }, B.onsuccess = yn;
            });
          }, getMany: function(g) {
            var v = g.trans, E = g.keys;
            return new Promise(function(C, P) {
              C = fe(C);
              for (var O, N = v.objectStore(m), F = E.length, I = new Array(F), k = 0, K = 0, B = function(te) {
                te = te.target, I[te._pos] = te.result, ++K === k && C(I);
              }, L = qe(P), H = 0; H < F; ++H) E[H] != null && ((O = N.get(E[H]))._pos = H, O.onsuccess = B, O.onerror = L, ++k);
              k === 0 && C(I);
            });
          }, get: function(g) {
            var v = g.trans, E = g.key;
            return new Promise(function(C, P) {
              C = fe(C);
              var O = v.objectStore(m).get(E);
              O.onsuccess = function(N) {
                return C(N.target.result);
              }, O.onerror = qe(P);
            });
          }, query: (p = h, function(g) {
            return new Promise(function(v, E) {
              v = fe(v);
              var C, P, O, k = g.trans, N = g.values, F = g.limit, B = g.query, I = F === 1 / 0 ? void 0 : F, K = B.index, B = B.range, k = k.objectStore(m), K = K.isPrimaryKey ? k : k.index(K.name), B = r(B);
              if (F === 0) return v({ result: [] });
              p ? ((I = N ? K.getAll(B, I) : K.getAllKeys(B, I)).onsuccess = function(L) {
                return v({ result: L.target.result });
              }, I.onerror = qe(E)) : (C = 0, P = !N && "openKeyCursor" in K ? K.openKeyCursor(B) : K.openCursor(B), O = [], P.onsuccess = function(L) {
                var H = P.result;
                return H ? (O.push(N ? H.value : H.primaryKey), ++C === F ? v({ result: O }) : void H.continue()) : v({ result: O });
              }, P.onerror = qe(E));
            });
          }), openCursor: function(g) {
            var v = g.trans, E = g.values, C = g.query, P = g.reverse, O = g.unique;
            return new Promise(function(N, F) {
              N = fe(N);
              var K = C.index, I = C.range, k = v.objectStore(m), k = K.isPrimaryKey ? k : k.index(K.name), K = P ? O ? "prevunique" : "prev" : O ? "nextunique" : "next", B = !E && "openKeyCursor" in k ? k.openKeyCursor(r(I), K) : k.openCursor(r(I), K);
              B.onerror = qe(F), B.onsuccess = fe(function(L) {
                var H, te, Y, me, z = B.result;
                z ? (z.___id = ++sa, z.done = !1, H = z.continue.bind(z), te = (te = z.continuePrimaryKey) && te.bind(z), Y = z.advance.bind(z), me = function() {
                  throw new Error("Cursor not stopped");
                }, z.trans = v, z.stop = z.continue = z.continuePrimaryKey = z.advance = function() {
                  throw new Error("Cursor not started");
                }, z.fail = fe(F), z.next = function() {
                  var Pe = this, Oe = 1;
                  return this.start(function() {
                    return Oe-- ? Pe.continue() : Pe.stop();
                  }).then(function() {
                    return Pe;
                  });
                }, z.start = function(Pe) {
                  function Oe() {
                    if (B.result) try {
                      Pe();
                    } catch (De) {
                      z.fail(De);
                    }
                    else z.done = !0, z.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, z.stop();
                  }
                  var yn = new Promise(function(De, ht) {
                    De = fe(De), B.onerror = qe(ht), z.fail = ht, z.stop = function(Jn) {
                      z.stop = z.continue = z.continuePrimaryKey = z.advance = me, De(Jn);
                    };
                  });
                  return B.onsuccess = fe(function(De) {
                    B.onsuccess = Oe, Oe();
                  }), z.continue = H, z.continuePrimaryKey = te, z.advance = Y, Oe(), yn;
                }, N(z)) : N(null);
              }, F);
            });
          }, count: function(g) {
            var v = g.query, E = g.trans, C = v.index, P = v.range;
            return new Promise(function(O, N) {
              var F = E.objectStore(m), I = C.isPrimaryKey ? F : F.index(C.name), F = r(P), I = F ? I.count(F) : I.count();
              I.onsuccess = fe(function(k) {
                return O(k.target.result);
              }), I.onerror = qe(N);
            });
          } };
        }
        var o, u, c, y = (u = f, c = Tr((o = e).objectStoreNames), { schema: { name: o.name, tables: c.map(function(b) {
          return u.objectStore(b);
        }).map(function(b) {
          var p = b.keyPath, v = b.autoIncrement, m = q(p), g = {}, v = { name: b.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: p == null, compound: m, keyPath: p, autoIncrement: v, unique: !0, extractKey: kn(p) }, indexes: Tr(b.indexNames).map(function(E) {
            return b.index(E);
          }).map(function(O) {
            var C = O.name, P = O.unique, N = O.multiEntry, O = O.keyPath, N = { name: C, compound: q(O), keyPath: O, unique: P, multiEntry: N, extractKey: kn(O) };
            return g[qt(O)] = N;
          }), getIndexByKeyPath: function(E) {
            return g[qt(E)];
          } };
          return g[":id"] = v.primaryKey, p != null && (g[qt(p)] = v.primaryKey), v;
        }) }, hasGetAll: 0 < c.length && "getAll" in u.objectStore(c[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), f = y.schema, h = y.hasGetAll, y = f.tables.map(a), l = {};
        return y.forEach(function(b) {
          return l[b.name] = b;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(b) {
          if (!l[b]) throw new Error("Table '".concat(b, "' not found"));
          return l[b];
        }, MIN_KEY: -1 / 0, MAX_KEY: jt(t), schema: f };
      }
      function ca(e, t, n, r) {
        var a = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = ua(t, a, r), e.dbcore.reduce(function(o, u) {
          return u = u.create, d(d({}, o), u(o));
        }, r)) };
      }
      function an(e, r) {
        var n = r.db, r = ca(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(a) {
          var o = a.name;
          e.core.schema.tables.some(function(u) {
            return u.name === o;
          }) && (a.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = a.core));
        });
      }
      function on(e, t, n, r) {
        n.forEach(function(a) {
          var o = r[a];
          t.forEach(function(u) {
            var c = (function f(h, y) {
              return $(h, y) || (h = ie(h)) && f(h, y);
            })(u, a);
            (!c || "value" in c && c.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? J(u, a, { get: function() {
              return this.table(a);
            }, set: function(f) {
              ae(this, a, { value: f, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[a] = new e.Table(a, o));
          });
        });
      }
      function Fn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function la(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function fa(e, t, n, r) {
        var a = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Rn("$meta", Cr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, a);
        o.create(n), o._completion.catch(r);
        var u = o._reject.bind(o), c = U.transless || U;
        $e(function() {
          return U.trans = o, U.transless = c, t !== 0 ? (an(e, n), h = t, ((f = o).storeNames.includes("$meta") ? f.table("$meta").get("version").then(function(y) {
            return y ?? h;
          }) : j.resolve(h)).then(function(y) {
            return b = y, p = o, m = n, g = [], y = (l = e)._versions, v = l._dbSchema = un(0, l.idbdb, m), (y = y.filter(function(E) {
              return E._cfg.version >= b;
            })).length !== 0 ? (y.forEach(function(E) {
              g.push(function() {
                var C = v, P = E._cfg.dbschema;
                cn(l, C, m), cn(l, P, m), v = l._dbSchema = P;
                var O = Bn(C, P);
                O.add.forEach(function(K) {
                  Kn(m, K[0], K[1].primKey, K[1].indexes);
                }), O.change.forEach(function(K) {
                  if (K.recreate) throw new T.Upgrade("Not yet support for changing primary key");
                  var B = m.objectStore(K.name);
                  K.add.forEach(function(L) {
                    return sn(B, L);
                  }), K.change.forEach(function(L) {
                    B.deleteIndex(L.name), sn(B, L);
                  }), K.del.forEach(function(L) {
                    return B.deleteIndex(L);
                  });
                });
                var N = E._cfg.contentUpgrade;
                if (N && E._cfg.version > b) {
                  an(l, m), p._memoizedTables = {};
                  var F = mt(P);
                  O.del.forEach(function(K) {
                    F[K] = C[K];
                  }), Fn(l, [l.Transaction.prototype]), on(l, [l.Transaction.prototype], M(F), F), p.schema = F;
                  var I, k = Be(N);
                  return k && wt(), O = j.follow(function() {
                    var K;
                    (I = N(p)) && k && (K = Je.bind(null, null), I.then(K, K));
                  }), I && typeof I.then == "function" ? j.resolve(I) : O.then(function() {
                    return I;
                  });
                }
              }), g.push(function(C) {
                var P, O, N = E._cfg.dbschema;
                P = N, O = C, [].slice.call(O.db.objectStoreNames).forEach(function(F) {
                  return P[F] == null && O.db.deleteObjectStore(F);
                }), Fn(l, [l.Transaction.prototype]), on(l, [l.Transaction.prototype], l._storeNames, l._dbSchema), p.schema = l._dbSchema;
              }), g.push(function(C) {
                l.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(l.idbdb.version / 10) === E._cfg.version ? (l.idbdb.deleteObjectStore("$meta"), delete l._dbSchema.$meta, l._storeNames = l._storeNames.filter(function(P) {
                  return P !== "$meta";
                })) : C.objectStore("$meta").put(E._cfg.version, "version"));
              });
            }), (function E() {
              return g.length ? j.resolve(g.shift()(p.idbtrans)).then(E) : j.resolve();
            })().then(function() {
              Sr(v, m);
            })) : j.resolve();
            var l, b, p, m, g, v;
          }).catch(u)) : (M(a).forEach(function(y) {
            Kn(n, y, a[y].primKey, a[y].indexes);
          }), an(e, n), void j.follow(function() {
            return e.on.populate.fire(o);
          }).catch(u));
          var f, h;
        });
      }
      function pa(e, t) {
        Sr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = un(0, e.idbdb, t);
        cn(e, e._dbSchema, t);
        for (var r = 0, a = Bn(n, e._dbSchema).change; r < a.length; r++) {
          var o = (function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var c = t.objectStore(u.name);
            u.add.forEach(function(f) {
              Ne && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(f.src)), sn(c, f);
            });
          })(a[r]);
          if (typeof o == "object") return o.value;
        }
      }
      function Bn(e, t) {
        var n, r = { del: [], add: [], change: [] };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
          var a = e[n], o = t[n];
          if (a) {
            var u = { name: n, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || a.primKey.auto !== o.primKey.auto) u.recreate = !0, r.change.push(u);
            else {
              var c = a.idxByName, f = o.idxByName, h = void 0;
              for (h in c) f[h] || u.del.push(h);
              for (h in f) {
                var y = c[h], l = f[h];
                y ? y.src !== l.src && u.change.push(l) : u.add.push(l);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && r.change.push(u);
            }
          } else r.add.push([n, o]);
        }
        return r;
      }
      function Kn(e, t, n, r) {
        var a = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(o) {
          return sn(a, o);
        }), a;
      }
      function Sr(e, t) {
        M(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (Ne && console.debug("Dexie: Creating missing table", n), Kn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function sn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function un(e, t, n) {
        var r = {};
        return Se(t.objectStoreNames, 0).forEach(function(a) {
          for (var o = n.objectStore(a), u = In(Er(h = o.keyPath), h || "", !0, !1, !!o.autoIncrement, h && typeof h != "string", !0), c = [], f = 0; f < o.indexNames.length; ++f) {
            var y = o.index(o.indexNames[f]), h = y.keyPath, y = In(y.name, h, !!y.unique, !!y.multiEntry, !1, h && typeof h != "string", !1);
            c.push(y);
          }
          r[a] = Rn(a, u, c);
        }), r;
      }
      function cn(e, t, n) {
        for (var r = n.db.objectStoreNames, a = 0; a < r.length; ++a) {
          var o = r[a], u = n.objectStore(o);
          e._hasGetAll = "getAll" in u;
          for (var c = 0; c < u.indexNames.length; ++c) {
            var f = u.indexNames[c], h = u.index(f).keyPath, y = typeof h == "string" ? h : "[" + Se(h).join("+") + "]";
            !t[o] || (h = t[o].idxByName[y]) && (h.name = f, delete t[o].idxByName[y], t[o].idxByName[f] = h);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && R.WorkerGlobalScope && R instanceof R.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Cr(e) {
        return e.split(",").map(function(t, n) {
          var o = t.split(":"), r = (a = o[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = o[0].trim()).replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return In(a, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), q(o), n === 0, r);
        });
      }
      var da = (St.prototype._createTableSchema = Rn, St.prototype._parseIndexSyntax = Cr, St.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        M(e).forEach(function(r) {
          if (e[r] !== null) {
            var a = n._parseIndexSyntax(e[r]), o = a.shift();
            if (!o) throw new T.Schema("Invalid schema for table " + r + ": " + e[r]);
            if (o.unique = !0, o.multi) throw new T.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(u) {
              if (u.auto) throw new T.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!u.keyPath) throw new T.Schema("Index must have a name and cannot be an empty string");
            }), a = n._createTableSchema(r, o, a), t[r] = a;
          }
        });
      }, St.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? G(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, a = {};
        return n.forEach(function(o) {
          G(r, o._cfg.storesSource), a = o._cfg.dbschema = {}, o._parseStoresSpec(r, a);
        }), t._dbSchema = a, Fn(t, [t._allTables, t, t.Transaction.prototype]), on(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], M(a), a), t._storeNames = M(a), this;
      }, St.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = vt(this._cfg.contentUpgrade || Q, e), this;
      }, St);
      function St() {
      }
      function jn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Qe(Jt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function qn(e) {
        return e && typeof e.databases == "function";
      }
      function Ln(e) {
        return $e(function() {
          return U.letThrough = !0, e();
        });
      }
      function Mn(e) {
        return !("from" in e);
      }
      var Ae = function(e, t) {
        if (!this) {
          var n = new Ae();
          return e && "d" in e && G(n, e), n;
        }
        G(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Lt(e, t, n) {
        var r = Z(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Mn(e)) return G(e, { from: t, to: n, d: 1 });
          var a = e.l, r = e.r;
          if (Z(n, e.from) < 0) return a ? Lt(a, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, Ar(e);
          if (0 < Z(t, e.to)) return r ? Lt(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, Ar(e);
          Z(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < Z(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, a && !e.l && Mt(e, a), r && n && Mt(e, r);
        }
      }
      function Mt(e, t) {
        Mn(t) || (function n(r, f) {
          var o = f.from, u = f.to, c = f.l, f = f.r;
          Lt(r, o, u), c && n(r, c), f && n(r, f);
        })(e, t);
      }
      function xr(e, t) {
        var n = ln(t), r = n.next();
        if (r.done) return !1;
        for (var a = r.value, o = ln(e), u = o.next(a.from), c = u.value; !r.done && !u.done; ) {
          if (Z(c.from, a.to) <= 0 && 0 <= Z(c.to, a.from)) return !0;
          Z(a.from, c.from) < 0 ? a = (r = n.next(c.from)).value : c = (u = o.next(a.from)).value;
        }
        return !1;
      }
      function ln(e) {
        var t = Mn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && Z(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || Z(n, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function Ar(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), a = 1 < r ? "r" : r < -1 ? "l" : "";
        a && (t = a == "r" ? "l" : "r", n = d({}, e), r = e[a], e.from = r.from, e.to = r.to, e[a] = r[a], n[a] = r[t], (e[t] = n).d = Pr(n)), e.d = Pr(e);
      }
      function Pr(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function fn(e, t) {
        return M(t).forEach(function(n) {
          e[n] ? Mt(e[n], t[n]) : e[n] = (function r(a) {
            var o, u, c = {};
            for (o in a) V(a, o) && (u = a[o], c[o] = !u || typeof u != "object" || Fe.has(u.constructor) ? u : r(u));
            return c;
          })(t[n]);
        }), e;
      }
      function Un(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && xr(t[n], e[n]);
        });
      }
      X(Ae.prototype, ((ke = { add: function(e) {
        return Mt(this, e), this;
      }, addKey: function(e) {
        return Lt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Lt(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = ln(this).next(e).value;
        return t && Z(t.from, e) <= 0 && 0 <= Z(t.to, e);
      } })[yt] = function() {
        return ln(this);
      }, ke));
      var pt = {}, Vn = {}, Gn = !1;
      function pn(e) {
        fn(Vn, e), Gn || (Gn = !0, setTimeout(function() {
          Gn = !1, Qn(Vn, !(Vn = {}));
        }, 0));
      }
      function Qn(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, a = Object.values(pt); r < a.length; r++) Or(u = a[r], e, n, t);
        else for (var o in e) {
          var u, c = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          c && (o = c[1], c = c[2], (u = pt["idb://".concat(o, "/").concat(c)]) && Or(u, e, n, t));
        }
        n.forEach(function(f) {
          return f();
        });
      }
      function Or(e, t, n, r) {
        for (var a = [], o = 0, u = Object.entries(e.queries.query); o < u.length; o++) {
          for (var c = u[o], f = c[0], h = [], y = 0, l = c[1]; y < l.length; y++) {
            var b = l[y];
            Un(t, b.obsSet) ? b.subscribers.forEach(function(v) {
              return n.add(v);
            }) : r && h.push(b);
          }
          r && a.push([f, h]);
        }
        if (r) for (var p = 0, m = a; p < m.length; p++) {
          var g = m[p], f = g[0], h = g[1];
          e.queries.query[f] = h;
        }
      }
      function ha(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? ye(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
        function u() {
          if (t.openCanceller !== r) throw new T.DatabaseClosed("db.open() was cancelled");
        }
        function c() {
          return new j(function(b, p) {
            if (u(), !n) throw new T.MissingAPI();
            var m = e.name, g = t.autoSchema || !a ? n.open(m) : n.open(m, a);
            if (!g) throw new T.MissingAPI();
            g.onerror = qe(p), g.onblocked = fe(e._fireOnBlocked), g.onupgradeneeded = fe(function(v) {
              var E;
              y = g.transaction, t.autoSchema && !e._options.allowEmptyDB ? (g.onerror = Bt, y.abort(), g.result.close(), (E = n.deleteDatabase(m)).onsuccess = E.onerror = fe(function() {
                p(new T.NoSuchDatabase("Database ".concat(m, " doesnt exist")));
              })) : (y.onerror = qe(p), v = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, l = v < 1, e.idbdb = g.result, o && pa(e, y), fa(e, v / 10, y, p));
            }, p), g.onsuccess = fe(function() {
              y = null;
              var v, E, C, P, O, N = e.idbdb = g.result, F = Se(N.objectStoreNames);
              if (0 < F.length) try {
                var I = N.transaction((P = F).length === 1 ? P[0] : P, "readonly");
                if (t.autoSchema) E = N, C = I, (v = e).verno = E.version / 10, C = v._dbSchema = un(0, E, C), v._storeNames = Se(E.objectStoreNames, 0), on(v, [v._allTables], M(C), C);
                else if (cn(e, e._dbSchema, I), ((O = Bn(un(0, (O = e).idbdb, I), O._dbSchema)).add.length || O.change.some(function(k) {
                  return k.add.length || k.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), N.close(), a = N.version + 1, o = !0, b(c());
                an(e, I);
              } catch {
              }
              _t.push(e), N.onversionchange = fe(function(k) {
                t.vcFired = !0, e.on("versionchange").fire(k);
              }), N.onclose = fe(function(k) {
                e.on("close").fire(k);
              }), l && (O = e._deps, I = m, N = O.indexedDB, O = O.IDBKeyRange, qn(N) || I === Jt || jn(N, O).put({ name: I }).catch(Q)), b();
            }, p);
          }).catch(function(b) {
            switch (b?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
                break;
              case "VersionError":
                if (0 < a) return a = 0, c();
            }
            return j.reject(b);
          });
        }
        var f, h = t.dbReadyResolve, y = null, l = !1;
        return j.race([r, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(b) {
          function p() {
            return indexedDB.databases().finally(b);
          }
          f = setInterval(p, 100), p();
        }).finally(function() {
          return clearInterval(f);
        }) : Promise.resolve()).then(c)]).then(function() {
          return u(), t.onReadyBeingFired = [], j.resolve(Ln(function() {
            return e.on.ready.fire(e.vip);
          })).then(function b() {
            if (0 < t.onReadyBeingFired.length) {
              var p = t.onReadyBeingFired.reduce(vt, Q);
              return t.onReadyBeingFired = [], j.resolve(Ln(function() {
                return p(e.vip);
              })).then(b);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(b) {
          t.dbOpenError = b;
          try {
            y && y.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), ye(b);
        }).finally(function() {
          t.openComplete = !0, h();
        }).then(function() {
          var b;
          return l && (b = {}, e.tables.forEach(function(p) {
            p.schema.indexes.forEach(function(m) {
              m.name && (b["idb://".concat(e.name, "/").concat(p.name, "/").concat(m.name)] = new Ae(-1 / 0, [[[]]]));
            }), b["idb://".concat(e.name, "/").concat(p.name, "/")] = b["idb://".concat(e.name, "/").concat(p.name, "/:dels")] = new Ae(-1 / 0, [[[]]]);
          }), tt(Kt).fire(b), Qn(b, !0)), e;
        });
      }
      function zn(e) {
        function t(o) {
          return e.next(o);
        }
        var n = a(t), r = a(function(o) {
          return e.throw(o);
        });
        function a(o) {
          return function(f) {
            var c = o(f), f = c.value;
            return c.done ? f : f && typeof f.then == "function" ? f.then(n, r) : q(f) ? Promise.all(f).then(n, r) : n(f);
          };
        }
        return a(t)();
      }
      function dn(e, t, n) {
        for (var r = q(e) ? e.slice() : [e], a = 0; a < n; ++a) r.push(t);
        return r;
      }
      var ma = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return d(d({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, a = {}, o = [];
          function u(l, b, p) {
            var m = qt(l), g = a[m] = a[m] || [], v = l == null ? 0 : typeof l == "string" ? 1 : l.length, E = 0 < b, E = d(d({}, p), { name: E ? "".concat(m, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: E, keyTail: b, keyLength: v, extractKey: kn(l), unique: !E && p.unique });
            return g.push(E), E.isPrimaryKey || o.push(E), 1 < v && u(v === 2 ? l[0] : l.slice(0, v - 1), b + 1, p), g.sort(function(C, P) {
              return C.keyTail - P.keyTail;
            }), E;
          }
          t = u(r.primaryKey.keyPath, 0, r.primaryKey), a[":id"] = [t];
          for (var c = 0, f = r.indexes; c < f.length; c++) {
            var h = f[c];
            u(h.keyPath, 0, h);
          }
          function y(l) {
            var b, p = l.query.index;
            return p.isVirtual ? d(d({}, l), { query: { index: p.lowLevelIndex, range: (b = l.query.range, p = p.keyTail, { type: b.type === 1 ? 2 : b.type, lower: dn(b.lower, b.lowerOpen ? e.MAX_KEY : e.MIN_KEY, p), lowerOpen: !0, upper: dn(b.upper, b.upperOpen ? e.MIN_KEY : e.MAX_KEY, p), upperOpen: !0 }) } }) : l;
          }
          return d(d({}, n), { schema: d(d({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(l) {
            return (l = a[qt(l)]) && l[0];
          } }), count: function(l) {
            return n.count(y(l));
          }, query: function(l) {
            return n.query(y(l));
          }, openCursor: function(l) {
            var b = l.query.index, p = b.keyTail, m = b.isVirtual, g = b.keyLength;
            return m ? n.openCursor(y(l)).then(function(E) {
              return E && v(E);
            }) : n.openCursor(l);
            function v(E) {
              return Object.create(E, { continue: { value: function(C) {
                C != null ? E.continue(dn(C, l.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : l.unique ? E.continue(E.key.slice(0, g).concat(l.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : E.continue();
              } }, continuePrimaryKey: { value: function(C, P) {
                E.continuePrimaryKey(dn(C, e.MAX_KEY, p), P);
              } }, primaryKey: { get: function() {
                return E.primaryKey;
              } }, key: { get: function() {
                var C = E.key;
                return g === 1 ? C[0] : C.slice(0, g);
              } }, value: { get: function() {
                return E.value;
              } } });
            }
          } });
        } });
      } };
      function Yn(e, t, n, r) {
        return n = n || {}, r = r || "", M(e).forEach(function(a) {
          var o, u, c;
          V(t, a) ? (o = e[a], u = t[a], typeof o == "object" && typeof u == "object" && o && u ? (c = Ue(o)) !== Ue(u) ? n[r + a] = t[a] : c === "Object" ? Yn(o, u, n, r + a + ".") : o !== u && (n[r + a] = t[a]) : o !== u && (n[r + a] = t[a])) : n[r + a] = void 0;
        }), M(t).forEach(function(a) {
          V(e, a) || (n[r + a] = t[a]);
        }), n;
      }
      function Xn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ya = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return d(d({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return d(d({}, n), { mutate: function(a) {
            var o = U.trans, u = o.table(t).hook, c = u.deleting, f = u.creating, h = u.updating;
            switch (a.type) {
              case "add":
                if (f.fire === Q) break;
                return o._promise("readwrite", function() {
                  return y(a);
                }, !0);
              case "put":
                if (f.fire === Q && h.fire === Q) break;
                return o._promise("readwrite", function() {
                  return y(a);
                }, !0);
              case "delete":
                if (c.fire === Q) break;
                return o._promise("readwrite", function() {
                  return y(a);
                }, !0);
              case "deleteRange":
                if (c.fire === Q) break;
                return o._promise("readwrite", function() {
                  return (function l(b, p, m) {
                    return n.query({ trans: b, values: !1, query: { index: r, range: p }, limit: m }).then(function(g) {
                      var v = g.result;
                      return y({ type: "delete", keys: v, trans: b }).then(function(E) {
                        return 0 < E.numFailures ? Promise.reject(E.failures[0]) : v.length < m ? { failures: [], numFailures: 0, lastResult: void 0 } : l(b, d(d({}, p), { lower: v[v.length - 1], lowerOpen: !0 }), m);
                      });
                    });
                  })(a.trans, a.range, 1e4);
                }, !0);
            }
            return n.mutate(a);
            function y(l) {
              var b, p, m, g = U.trans, v = l.keys || Xn(r, l);
              if (!v) throw new Error("Keys missing");
              return (l = l.type === "add" || l.type === "put" ? d(d({}, l), { keys: v }) : d({}, l)).type !== "delete" && (l.values = D([], l.values)), l.keys && (l.keys = D([], l.keys)), b = n, m = v, ((p = l).type === "add" ? Promise.resolve([]) : b.getMany({ trans: p.trans, keys: m, cache: "immutable" })).then(function(E) {
                var C = v.map(function(P, O) {
                  var N, F, I, k = E[O], K = { onerror: null, onsuccess: null };
                  return l.type === "delete" ? c.fire.call(K, P, k, g) : l.type === "add" || k === void 0 ? (N = f.fire.call(K, P, l.values[O], g), P == null && N != null && (l.keys[O] = P = N, r.outbound || se(l.values[O], r.keyPath, P))) : (N = Yn(k, l.values[O]), (F = h.fire.call(K, N, P, k, g)) && (I = l.values[O], Object.keys(F).forEach(function(B) {
                    V(I, B) ? I[B] = F[B] : se(I, B, F[B]);
                  }))), K;
                });
                return n.mutate(l).then(function(P) {
                  for (var O = P.failures, N = P.results, F = P.numFailures, P = P.lastResult, I = 0; I < v.length; ++I) {
                    var k = (N || v)[I], K = C[I];
                    k == null ? K.onerror && K.onerror(O[I]) : K.onsuccess && K.onsuccess(l.type === "put" && E[I] ? l.values[I] : k);
                  }
                  return { failures: O, results: N, numFailures: F, lastResult: P };
                }).catch(function(P) {
                  return C.forEach(function(O) {
                    return O.onerror && O.onerror(P);
                  }), Promise.reject(P);
                });
              });
            }
          } });
        } });
      } };
      function Dr(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], a = 0, o = 0; a < t.keys.length && o < e.length; ++a) Z(t.keys[a], e[o]) === 0 && (r.push(n ? we(t.values[a]) : t.values[a]), ++o);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var va = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return d(d({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var a = Dr(r.keys, r.trans._cache, r.cache === "clone");
            return a ? j.resolve(a) : n.getMany(r).then(function(o) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? we(o) : o }, o;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function Nr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Ir(e, t) {
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
      var ga = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new Ae(e.MIN_KEY, e.MAX_KEY);
        return d(d({}, e), { transaction: function(r, a, o) {
          if (U.subscr && a !== "readonly") throw new T.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(U.querier));
          return e.transaction(r, a, o);
        }, table: function(r) {
          var a = e.table(r), o = a.schema, u = o.primaryKey, l = o.indexes, c = u.extractKey, f = u.outbound, h = u.autoIncrement && l.filter(function(p) {
            return p.compound && p.keyPath.includes(u.keyPath);
          }), y = d(d({}, a), { mutate: function(p) {
            function m(B) {
              return B = "idb://".concat(t, "/").concat(r, "/").concat(B), P[B] || (P[B] = new Ae());
            }
            var g, v, E, C = p.trans, P = p.mutatedParts || (p.mutatedParts = {}), O = m(""), N = m(":dels"), F = p.type, K = p.type === "deleteRange" ? [p.range] : p.type === "delete" ? [p.keys] : p.values.length < 50 ? [Xn(u, p).filter(function(B) {
              return B;
            }), p.values] : [], I = K[0], k = K[1], K = p.trans._cache;
            return q(I) ? (O.addKeys(I), (K = F === "delete" || I.length === k.length ? Dr(I, K) : null) || N.addKeys(I), (K || k) && (g = m, v = K, E = k, o.indexes.forEach(function(B) {
              var L = g(B.name || "");
              function H(Y) {
                return Y != null ? B.extractKey(Y) : null;
              }
              function te(Y) {
                return B.multiEntry && q(Y) ? Y.forEach(function(me) {
                  return L.addKey(me);
                }) : L.addKey(Y);
              }
              (v || E).forEach(function(Y, Pe) {
                var z = v && H(v[Pe]), Pe = E && H(E[Pe]);
                Z(z, Pe) !== 0 && (z != null && te(z), Pe != null && te(Pe));
              });
            }))) : I ? (k = { from: (k = I.lower) !== null && k !== void 0 ? k : e.MIN_KEY, to: (k = I.upper) !== null && k !== void 0 ? k : e.MAX_KEY }, N.add(k), O.add(k)) : (O.add(n), N.add(n), o.indexes.forEach(function(B) {
              return m(B.name).add(n);
            })), a.mutate(p).then(function(B) {
              return !I || p.type !== "add" && p.type !== "put" || (O.addKeys(B.results), h && h.forEach(function(L) {
                for (var H = p.values.map(function(z) {
                  return L.extractKey(z);
                }), te = L.keyPath.findIndex(function(z) {
                  return z === u.keyPath;
                }), Y = 0, me = B.results.length; Y < me; ++Y) H[Y][te] = B.results[Y];
                m(L.name).addKeys(H);
              })), C.mutatedParts = fn(C.mutatedParts || {}, P), B;
            });
          } }), l = function(m) {
            var g = m.query, m = g.index, g = g.range;
            return [m, new Ae((m = g.lower) !== null && m !== void 0 ? m : e.MIN_KEY, (g = g.upper) !== null && g !== void 0 ? g : e.MAX_KEY)];
          }, b = { get: function(p) {
            return [u, new Ae(p.key)];
          }, getMany: function(p) {
            return [u, new Ae().addKeys(p.keys)];
          }, count: l, query: l, openCursor: l };
          return M(b).forEach(function(p) {
            y[p] = function(m) {
              var g = U.subscr, v = !!g, E = Nr(U, a) && Ir(p, m) ? m.obsSet = {} : g;
              if (v) {
                var C = function(k) {
                  return k = "idb://".concat(t, "/").concat(r, "/").concat(k), E[k] || (E[k] = new Ae());
                }, P = C(""), O = C(":dels"), g = b[p](m), v = g[0], g = g[1];
                if ((p === "query" && v.isPrimaryKey && !m.values ? O : C(v.name || "")).add(g), !v.isPrimaryKey) {
                  if (p !== "count") {
                    var N = p === "query" && f && m.values && a.query(d(d({}, m), { values: !1 }));
                    return a[p].apply(this, arguments).then(function(k) {
                      if (p === "query") {
                        if (f && m.values) return N.then(function(H) {
                          return H = H.result, P.addKeys(H), k;
                        });
                        var K = m.values ? k.result.map(c) : k.result;
                        (m.values ? P : O).addKeys(K);
                      } else if (p === "openCursor") {
                        var B = k, L = m.values;
                        return B && Object.create(B, { key: { get: function() {
                          return O.addKey(B.primaryKey), B.key;
                        } }, primaryKey: { get: function() {
                          var H = B.primaryKey;
                          return O.addKey(H), H;
                        } }, value: { get: function() {
                          return L && P.addKey(B.primaryKey), B.value;
                        } } });
                      }
                      return k;
                    });
                  }
                  O.add(n);
                }
              }
              return a[p].apply(this, arguments);
            };
          }), y;
        } });
      } };
      function Rr(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = d({}, t), q(t.keys) && (t.keys = t.keys.filter(function(a, o) {
          return !(o in n.failures);
        })), "values" in t && q(t.values) && (t.values = t.values.filter(function(a, o) {
          return !(o in n.failures);
        })), t);
      }
      function Hn(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < Z(n, r.lower) : 0 <= Z(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? Z(e, t.upper) < 0 : Z(e, t.upper) <= 0));
        var n, r;
      }
      function kr(e, t, b, r, a, o) {
        if (!b || b.length === 0) return e;
        var u = t.query.index, c = u.multiEntry, f = t.query.range, h = r.schema.primaryKey.extractKey, y = u.extractKey, l = (u.lowLevelIndex || u).extractKey, b = b.reduce(function(p, m) {
          var g = p, v = [];
          if (m.type === "add" || m.type === "put") for (var E = new Ae(), C = m.values.length - 1; 0 <= C; --C) {
            var P, O = m.values[C], N = h(O);
            E.hasKey(N) || (P = y(O), (c && q(P) ? P.some(function(B) {
              return Hn(B, f);
            }) : Hn(P, f)) && (E.addKey(N), v.push(O)));
          }
          switch (m.type) {
            case "add":
              var F = new Ae().addKeys(t.values ? p.map(function(L) {
                return h(L);
              }) : p), g = p.concat(t.values ? v.filter(function(L) {
                return L = h(L), !F.hasKey(L) && (F.addKey(L), !0);
              }) : v.map(function(L) {
                return h(L);
              }).filter(function(L) {
                return !F.hasKey(L) && (F.addKey(L), !0);
              }));
              break;
            case "put":
              var I = new Ae().addKeys(m.values.map(function(L) {
                return h(L);
              }));
              g = p.filter(function(L) {
                return !I.hasKey(t.values ? h(L) : L);
              }).concat(t.values ? v : v.map(function(L) {
                return h(L);
              }));
              break;
            case "delete":
              var k = new Ae().addKeys(m.keys);
              g = p.filter(function(L) {
                return !k.hasKey(t.values ? h(L) : L);
              });
              break;
            case "deleteRange":
              var K = m.range;
              g = p.filter(function(L) {
                return !Hn(h(L), K);
              });
          }
          return g;
        }, e);
        return b === e ? e : (b.sort(function(p, m) {
          return Z(l(p), l(m)) || Z(h(p), h(m));
        }), t.limit && t.limit < 1 / 0 && (b.length > t.limit ? b.length = t.limit : e.length === t.limit && b.length < t.limit && (a.dirty = !0)), o ? Object.freeze(b) : b);
      }
      function Fr(e, t) {
        return Z(e.lower, t.lower) === 0 && Z(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ba(e, t) {
        return (function(n, r, a, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = Z(n, r)) === 0) {
            if (a && o) return 0;
            if (a) return 1;
            if (o) return -1;
          }
          return r;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(n, r, a, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = Z(n, r)) === 0) {
            if (a && o) return 0;
            if (a) return -1;
            if (o) return 1;
          }
          return r;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function wa(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var a, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (a = e, o = t, setTimeout(function() {
            a.subscribers.size === 0 && Ve(o, a);
          }, 3e3));
        });
      }
      var _a = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return d(d({}, e), { transaction: function(n, r, a) {
          var o, u, c = e.transaction(n, r, a);
          return r === "readwrite" && (u = (o = new AbortController()).signal, a = function(f) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var h = /* @__PURE__ */ new Set(), y = 0, l = n; y < l.length; y++) {
                  var b = l[y], p = pt["idb://".concat(t, "/").concat(b)];
                  if (p) {
                    var m = e.table(b), g = p.optimisticOps.filter(function(L) {
                      return L.trans === c;
                    });
                    if (c._explicit && f && c.mutatedParts) for (var v = 0, E = Object.values(p.queries.query); v < E.length; v++) for (var C = 0, P = (F = E[v]).slice(); C < P.length; C++) Un((I = P[C]).obsSet, c.mutatedParts) && (Ve(F, I), I.subscribers.forEach(function(L) {
                      return h.add(L);
                    }));
                    else if (0 < g.length) {
                      p.optimisticOps = p.optimisticOps.filter(function(L) {
                        return L.trans !== c;
                      });
                      for (var O = 0, N = Object.values(p.queries.query); O < N.length; O++) for (var F, I, k, K = 0, B = (F = N[O]).slice(); K < B.length; K++) (I = B[K]).res != null && c.mutatedParts && (f && !I.dirty ? (k = Object.isFrozen(I.res), k = kr(I.res, I.req, g, m, I, k), I.dirty ? (Ve(F, I), I.subscribers.forEach(function(L) {
                        return h.add(L);
                      })) : k !== I.res && (I.res = k, I.promise = j.resolve({ result: k }))) : (I.dirty && Ve(F, I), I.subscribers.forEach(function(L) {
                        return h.add(L);
                      })));
                    }
                  }
                }
                h.forEach(function(L) {
                  return L();
                });
              }
            };
          }, c.addEventListener("abort", a(!1), { signal: u }), c.addEventListener("error", a(!1), { signal: u }), c.addEventListener("complete", a(!0), { signal: u })), c;
        }, table: function(n) {
          var r = e.table(n), a = r.schema.primaryKey;
          return d(d({}, r), { mutate: function(o) {
            var u = U.trans;
            if (a.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return r.mutate(o);
            var c = pt["idb://".concat(t, "/").concat(n)];
            return c ? (u = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Xn(a, o).some(function(f) {
              return f == null;
            })) ? (c.optimisticOps.push(o), o.mutatedParts && pn(o.mutatedParts), u.then(function(f) {
              0 < f.numFailures && (Ve(c.optimisticOps, o), (f = Rr(0, o, f)) && c.optimisticOps.push(f), o.mutatedParts && pn(o.mutatedParts));
            }), u.catch(function() {
              Ve(c.optimisticOps, o), o.mutatedParts && pn(o.mutatedParts);
            })) : u.then(function(f) {
              var h = Rr(0, d(d({}, o), { values: o.values.map(function(y, l) {
                var b;
                return f.failures[l] || (y = (b = a.keyPath) !== null && b !== void 0 && b.includes(".") ? we(y) : d({}, y), se(y, a.keyPath, f.results[l])), y;
              }) }), f);
              c.optimisticOps.push(h), queueMicrotask(function() {
                return o.mutatedParts && pn(o.mutatedParts);
              });
            }), u) : r.mutate(o);
          }, query: function(o) {
            if (!Nr(U, r) || !Ir("query", o)) return r.query(o);
            var u = ((h = U.trans) === null || h === void 0 ? void 0 : h.db._options.cache) === "immutable", l = U, c = l.requery, f = l.signal, h = (function(m, g, v, E) {
              var C = pt["idb://".concat(m, "/").concat(g)];
              if (!C) return [];
              if (!(g = C.queries[v])) return [null, !1, C, null];
              var P = g[(E.query ? E.query.index.name : null) || ""];
              if (!P) return [null, !1, C, null];
              switch (v) {
                case "query":
                  var O = P.find(function(N) {
                    return N.req.limit === E.limit && N.req.values === E.values && Fr(N.req.query.range, E.query.range);
                  });
                  return O ? [O, !0, C, P] : [P.find(function(N) {
                    return ("limit" in N.req ? N.req.limit : 1 / 0) >= E.limit && (!E.values || N.req.values) && ba(N.req.query.range, E.query.range);
                  }), !1, C, P];
                case "count":
                  return O = P.find(function(N) {
                    return Fr(N.req.query.range, E.query.range);
                  }), [O, !!O, C, P];
              }
            })(t, n, "query", o), y = h[0], l = h[1], b = h[2], p = h[3];
            return y && l ? y.obsSet = o.obsSet : (l = r.query(o).then(function(m) {
              var g = m.result;
              if (y && (y.res = g), u) {
                for (var v = 0, E = g.length; v < E; ++v) Object.freeze(g[v]);
                Object.freeze(g);
              } else m.result = we(g);
              return m;
            }).catch(function(m) {
              return p && y && Ve(p, y), Promise.reject(m);
            }), y = { obsSet: o.obsSet, promise: l, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, p ? p.push(y) : (p = [y], (b = b || (pt["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = p)), wa(y, p, c, f), y.promise.then(function(m) {
              return { result: kr(m.result, o, b?.optimisticOps, r, y, u) };
            });
          } });
        } });
      } };
      function hn(e, t) {
        return new Proxy(e, { get: function(n, r, a) {
          return r === "db" ? t : Reflect.get(n, r, a);
        } });
      }
      var Qe = (ve.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new T.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new T.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(la), n.stores({}), this._state.autoSchema = !1, n);
      }, ve.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || U.letThrough || this._vip) ? e() : new j(function(n, r) {
          if (t._state.openComplete) return r(new T.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new T.DatabaseClosed());
            t.open().catch(Q);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, ve.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, a = e.name;
        return a && this.unuse({ stack: t, name: a }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: a }), e.sort(function(o, u) {
          return o.level - u.level;
        }), this;
      }, ve.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(a) {
          return r ? a.create !== r : !!n && a.name !== n;
        })), this;
      }, ve.prototype.open = function() {
        var e = this;
        return ct(We, function() {
          return ha(e);
        });
      }, ve.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = _t.indexOf(this);
        if (0 <= t && _t.splice(t, 1), this.idbdb) {
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
      }, ve.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new T.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new T.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ve.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new j(function(a, o) {
          function u() {
            t.close(e);
            var c = t._deps.indexedDB.deleteDatabase(t.name);
            c.onsuccess = fe(function() {
              var f, h, y;
              f = t._deps, h = t.name, y = f.indexedDB, f = f.IDBKeyRange, qn(y) || h === Jt || jn(y, f).delete(h).catch(Q), a();
            }), c.onerror = qe(o), c.onblocked = t._fireOnBlocked;
          }
          if (n) throw new T.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(u) : u();
        });
      }, ve.prototype.backendDB = function() {
        return this.idbdb;
      }, ve.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ve.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ve.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ve.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ve.prototype, "tables", { get: function() {
        var e = this;
        return M(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), ve.prototype.transaction = function() {
        var e = (function(t, n, r) {
          var a = arguments.length;
          if (a < 2) throw new T.InvalidArgument("Too few arguments");
          for (var o = new Array(a - 1); --a; ) o[a - 1] = arguments[a];
          return r = o.pop(), [t, ze(o), r];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ve.prototype._transaction = function(e, t, n) {
        var r = this, a = U.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var o, u, c = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = t.map(function(h) {
            if (h = h instanceof r.Table ? h.name : h, typeof h != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return h;
          }), e == "r" || e === An) o = An;
          else {
            if (e != "rw" && e != Pn) throw new T.InvalidArgument("Invalid transaction mode: " + e);
            o = Pn;
          }
          if (a) {
            if (a.mode === An && o === Pn) {
              if (!c) throw new T.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && u.forEach(function(h) {
              if (a && a.storeNames.indexOf(h) === -1) {
                if (!c) throw new T.SubTransaction("Table " + h + " not included in parent transaction.");
                a = null;
              }
            }), c && a && !a.active && (a = null);
          }
        } catch (h) {
          return a ? a._promise(null, function(y, l) {
            l(h);
          }) : ye(h);
        }
        var f = (function h(y, l, b, p, m) {
          return j.resolve().then(function() {
            var g = U.transless || U, v = y._createTransaction(l, b, y._dbSchema, p);
            if (v.explicit = !0, g = { trans: v, transless: g }, p) v.idbtrans = p.idbtrans;
            else try {
              v.create(), v.idbtrans._explicit = !0, y._state.PR1398_maxLoop = 3;
            } catch (P) {
              return P.name === s.InvalidState && y.isOpen() && 0 < --y._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), y.close({ disableAutoOpen: !1 }), y.open().then(function() {
                return h(y, l, b, null, m);
              })) : ye(P);
            }
            var E, C = Be(m);
            return C && wt(), g = j.follow(function() {
              var P;
              (E = m.call(v, v)) && (C ? (P = Je.bind(null, null), E.then(P, P)) : typeof E.next == "function" && typeof E.throw == "function" && (E = zn(E)));
            }, g), (E && typeof E.then == "function" ? j.resolve(E).then(function(P) {
              return v.active ? P : ye(new T.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : g.then(function() {
              return E;
            })).then(function(P) {
              return p && v._resolve(), v._completion.then(function() {
                return P;
              });
            }).catch(function(P) {
              return v._reject(P), ye(P);
            });
          });
        }).bind(null, this, o, u, a, n);
        return a ? a._promise(o, f, "lock") : U.trans ? ct(U.transless, function() {
          return r._whenReady(f);
        }) : this._whenReady(f);
      }, ve.prototype.table = function(e) {
        if (!V(this._allTables, e)) throw new T.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ve);
      function ve(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = ve.dependencies;
        this._options = t = d({ addons: ve.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, o, u, c, f, h = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        h.dbReadyPromise = new j(function(l) {
          h.dbReadyResolve = l;
        }), h.openCanceller = new j(function(l, b) {
          h.cancelOpen = b;
        }), this._state = h, this.name = e, this.on = Rt(this, "populate", "blocked", "versionchange", "close", { ready: [vt, Q] }), this.once = function(l, b) {
          var p = function() {
            for (var m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
            n.on(l).unsubscribe(p), b.apply(n, m);
          };
          return n.on(l, p);
        }, this.on.ready.subscribe = le(this.on.ready.subscribe, function(l) {
          return function(b, p) {
            ve.vip(function() {
              var m, g = n._state;
              g.openComplete ? (g.dbOpenError || j.resolve().then(b), p && l(b)) : g.onReadyBeingFired ? (g.onReadyBeingFired.push(b), p && l(b)) : (l(b), m = n, p || l(function v() {
                m.on.ready.unsubscribe(b), m.on.ready.unsubscribe(v);
              }));
            });
          };
        }), this.Collection = (a = this, kt(ra.prototype, function(E, v) {
          this.db = a;
          var p = fr, m = null;
          if (v) try {
            p = v();
          } catch (C) {
            m = C;
          }
          var g = E._ctx, v = g.table, E = v.hook.reading.fire;
          this._ctx = { table: v, index: g.index, isPrimKey: !g.index || v.schema.primKey.keyPath && g.index === v.schema.primKey.name, range: p, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: m, or: g.or, valueMapper: E !== ue ? E : null };
        })), this.Table = (o = this, kt(mr.prototype, function(l, b, p) {
          this.db = o, this._tx = p, this.name = l, this.schema = b, this.hook = o._allTables[l] ? o._allTables[l].hook : Rt(null, { creating: [He, Q], reading: [xe, ue], updating: [Ke, Q], deleting: [_e, Q] });
        })), this.Transaction = (u = this, kt(ia.prototype, function(l, b, p, m, g) {
          var v = this;
          l !== "readonly" && b.forEach(function(E) {
            E = (E = p[E]) === null || E === void 0 ? void 0 : E.yProps, E && (b = b.concat(E.map(function(C) {
              return C.updatesTable;
            })));
          }), this.db = u, this.mode = l, this.storeNames = b, this.schema = p, this.chromeTransactionDurability = m, this.idbtrans = null, this.on = Rt(this, "complete", "error", "abort"), this.parent = g || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(E, C) {
            v._resolve = E, v._reject = C;
          }), this._completion.then(function() {
            v.active = !1, v.on.complete.fire();
          }, function(E) {
            var C = v.active;
            return v.active = !1, v.on.error.fire(E), v.parent ? v.parent._reject(E) : C && v.idbtrans && v.idbtrans.abort(), ye(E);
          });
        })), this.Version = (c = this, kt(da.prototype, function(l) {
          this.db = c, this._cfg = { version: l, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (f = this, kt(_r.prototype, function(l, b, p) {
          if (this.db = f, this._ctx = { table: l, index: b === ":id" ? null : b, or: p }, this._cmp = this._ascending = Z, this._descending = function(m, g) {
            return Z(g, m);
          }, this._max = function(m, g) {
            return 0 < Z(m, g) ? m : g;
          }, this._min = function(m, g) {
            return Z(m, g) < 0 ? m : g;
          }, this._IDBKeyRange = f._deps.IDBKeyRange, !this._IDBKeyRange) throw new T.MissingAPI();
        })), this.on("versionchange", function(l) {
          0 < l.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(l) {
          !l.newVersion || l.newVersion < l.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(l.oldVersion / 10));
        }), this._maxKey = jt(t.IDBKeyRange), this._createTransaction = function(l, b, p, m) {
          return new n.Transaction(l, b, p, n._options.chromeTransactionDurability, m);
        }, this._fireOnBlocked = function(l) {
          n.on("blocked").fire(l), _t.filter(function(b) {
            return b.name === n.name && b !== n && !b._state.vcFired;
          }).map(function(b) {
            return b.on("versionchange").fire(l);
          });
        }, this.use(va), this.use(_a), this.use(ga), this.use(ma), this.use(ya);
        var y = new Proxy(this, { get: function(l, b, p) {
          if (b === "_vip") return !0;
          if (b === "table") return function(g) {
            return hn(n.table(g), y);
          };
          var m = Reflect.get(l, b, p);
          return m instanceof mr ? hn(m, y) : b === "tables" ? m.map(function(g) {
            return hn(g, y);
          }) : b === "_createTransaction" ? function() {
            return hn(m.apply(this, arguments), y);
          } : m;
        } });
        this.vip = y, r.forEach(function(l) {
          return l(n);
        });
      }
      var mn, ke = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ea = (Wn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Wn.prototype[ke] = function() {
        return this;
      }, Wn);
      function Wn(e) {
        this._subscribe = e;
      }
      try {
        mn = { indexedDB: R.indexedDB || R.mozIndexedDB || R.webkitIndexedDB || R.msIndexedDB, IDBKeyRange: R.IDBKeyRange || R.webkitIDBKeyRange };
      } catch {
        mn = { indexedDB: null, IDBKeyRange: null };
      }
      function Br(e) {
        var t, n = !1, r = new Ea(function(a) {
          var o = Be(e), u, c = !1, f = {}, h = {}, y = { get closed() {
            return c;
          }, unsubscribe: function() {
            c || (c = !0, u && u.abort(), l && tt.storagemutated.unsubscribe(p));
          } };
          a.start && a.start(y);
          var l = !1, b = function() {
            return xn(m);
          }, p = function(g) {
            fn(f, g), Un(h, f) && b();
          }, m = function() {
            var g, v, E;
            !c && mn.indexedDB && (f = {}, g = {}, u && u.abort(), u = new AbortController(), E = (function(C) {
              var P = gt();
              try {
                o && wt();
                var O = $e(e, C);
                return O = o ? O.finally(Je) : O;
              } finally {
                P && bt();
              }
            })(v = { subscr: g, signal: u.signal, requery: b, querier: e, trans: null }), Promise.resolve(E).then(function(C) {
              n = !0, t = C, c || v.signal.aborted || (f = {}, (function(P) {
                for (var O in P) if (V(P, O)) return;
                return 1;
              })(h = g) || l || (tt(Kt, p), l = !0), xn(function() {
                return !c && a.next && a.next(C);
              }));
            }, function(C) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(C?.name) || c || xn(function() {
                c || a.error && a.error(C);
              });
            }));
          };
          return setTimeout(b, 0), y;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var dt = Qe;
      function $n(e) {
        var t = nt;
        try {
          nt = !0, tt.storagemutated.fire(e), Qn(e, !0);
        } finally {
          nt = t;
        }
      }
      X(dt, d(d({}, ee), { delete: function(e) {
        return new dt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new dt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = dt.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (qn(n) ? Promise.resolve(n.databases()).then(function(r) {
            return r.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== Jt;
            });
          }) : jn(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return ye(new T.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          G(this, e);
        };
      }, ignoreTransaction: function(e) {
        return U.trans ? ct(U.transless, e) : e();
      }, vip: Ln, async: function(e) {
        return function() {
          try {
            var t = zn(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (n) {
            return ye(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = zn(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : j.resolve(r);
        } catch (a) {
          return ye(a);
        }
      }, currentTransaction: { get: function() {
        return U.trans || null;
      } }, waitFor: function(e, t) {
        return t = j.resolve(typeof e == "function" ? dt.ignoreTransaction(e) : e).timeout(t || 6e4), U.trans ? U.trans.waitFor(t) : t;
      }, Promise: j, debug: { get: function() {
        return Ne;
      }, set: function(e) {
        Pt(e);
      } }, derive: ge, extend: G, props: X, override: le, Events: Rt, on: tt, liveQuery: Br, extendObservabilitySet: fn, getByKeyPath: Ce, setByKeyPath: se, delByKeyPath: function(e, t) {
        typeof t == "string" ? se(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          se(e, n, void 0);
        });
      }, shallowClone: mt, deepClone: we, getObjectDiff: Yn, cmp: Z, asap: de, minKey: -1 / 0, addons: [], connections: _t, errnames: s, dependencies: mn, cache: pt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), dt.maxKey = jt(dt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (tt(Kt, function(e) {
        nt || (e = new CustomEvent(Nn, { detail: e }), nt = !0, dispatchEvent(e), nt = !1);
      }), addEventListener(Nn, function(e) {
        e = e.detail, nt || $n(e);
      }));
      var Ut, nt = !1, Kr = function() {
      };
      return typeof BroadcastChannel < "u" && ((Kr = function() {
        (Ut = new BroadcastChannel(Nn)).onmessage = function(e) {
          return e.data && $n(e.data);
        };
      })(), typeof Ut.unref == "function" && Ut.unref(), tt(Kt, function(e) {
        nt || Ut.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Qe.disableBfCache && e.persisted) {
          Ne && console.debug("Dexie: handling persisted pagehide"), Ut?.close();
          for (var t = 0, n = _t; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Qe.disableBfCache && e.persisted && (Ne && console.debug("Dexie: handling persisted pageshow"), Kr(), $n({ all: new Ae(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof Ye || e instanceof TypeError || e instanceof SyntaxError || !e.name || !_[e.name] ? e : (t = new _[e.name](t || e.message, e), "stack" in e && J(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Pt(Ne), d(Qe, Object.freeze({ __proto__: null, Dexie: Qe, liveQuery: Br, Entity: pr, cmp: Z, PropModification: Ft, replacePrefix: function(e, t) {
        return new Ft({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new Ft({ add: e });
      }, remove: function(e) {
        return new Ft({ remove: e });
      }, default: Qe, RangeSet: Ae, mergeRanges: Mt, rangesOverlap: xr }), { default: Qe }), Qe;
    });
  })(tr)), tr.exports;
}
var Wa = Ha();
const nr = /* @__PURE__ */ La(Wa), Qr = Symbol.for("Dexie"), vn = globalThis[Qr] || (globalThis[Qr] = nr);
if (nr.semVer !== vn.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${nr.semVer} and ${vn.semVer}`);
const {
  liveQuery: Io,
  mergeRanges: Ro,
  rangesOverlap: ko,
  RangeSet: Fo,
  cmp: Bo,
  Entity: Ko,
  PropModification: jo,
  replacePrefix: qo,
  add: Lo,
  remove: Mo,
  DexieYProvider: Uo
} = vn;
function $a(x) {
  const w = new vn(x), A = Ya([...Xr]);
  return w.version(1).stores(A), w;
}
async function Ja(x) {
  const { databaseInstance: w, tagName: A, records: d } = x, D = w.table(A);
  await w.transaction("rw", D, () => D.bulkAdd(d));
}
async function Za(x) {
  const { databaseInstance: w, tagNames: A } = x;
  w.close();
  const d = w.verno, D = w.tables.reduce(
    (q, G) => (q[G.name] = er, q),
    {}
  ), R = A.reduce(
    (q, G) => (q[G] = er, q),
    {}
  ), M = {
    ...D,
    ...R
  };
  w.version(d + 1).stores(M), w.open();
}
const Vt = {};
function eo(x) {
  const { parent: w, child: A } = x;
  Vt[w.tagName] || (Vt[w.tagName] = []);
  const d = {
    parentId: w.id,
    childId: A.id,
    childTagName: A.tagName
  };
  Vt[w.tagName].push(d);
}
function to(x) {
  const { parentRecordsBatch: w, parentTagName: A } = x, d = [...w], D = Hr(A);
  for (const R of w) {
    const M = D.filter((q) => q.parentId === R.id).map((q) => ({
      id: q.childId,
      tagName: q.childTagName
    }));
    if (M.length > 0) {
      const q = d.findIndex(
        (G) => G.id === R.id
      );
      q >= 0 && (d[q].children || (d[q].children = []), d[q].children.push(...M), no({
        children: M,
        tagName: R.tagName
      }));
    }
  }
  return d;
}
function Hr(x) {
  return Vt[x] || [];
}
function no(x) {
  const { children: w, tagName: A } = x, d = w.map((R) => R.id), D = Hr(A);
  Vt[A] = D.filter(
    (R) => !d.includes(R.childId)
  );
}
function ro(x) {
  return "prefix" in x && "uri" in x && !!x.prefix && !!x.uri;
}
function ao(x, w) {
  return Object.keys(w).includes(x);
}
function Wr(x) {
  let w = "pending";
  const A = x.batchSize;
  let d = [], D = !1, R;
  return { push: q, next: M, close: G, status: w };
  async function M() {
    if (d.length === 0 && D)
      return w = "done", Promise.resolve({ value: [], done: !0 });
    const ie = D && d.length > 0, pe = d.length >= A;
    if (ie || pe) {
      const ae = d.splice(0, A);
      return Promise.resolve({ value: ae, done: !1 });
    }
    const { resolve: V, promise: X } = Promise.withResolvers();
    return R = V, X;
  }
  function q(ie) {
    if (d.length >= A && R) {
      const pe = d.splice(0, A);
      R({ value: pe, done: !1 }), R = void 0;
    }
    d.push(ie);
  }
  function G() {
    if (D = !0, R) {
      const ie = d.splice(0, A);
      R({ value: ie, done: !1 }), R = void 0;
    }
  }
}
function oo(x) {
  const { importContext: w, tagName: A } = x, d = {
    ...w
  };
  if (!d.queues[A]) {
    const D = Wr({
      batchSize: d.options.batchSize
    });
    d.queues[A] = D, queueMicrotask(() => {
      $r({
        tagName: A,
        importContext: d,
        isEndingQueue: !1
      }).catch((R) => {
        throw console.error(`Consumer error for ${A}:`, R), R;
      });
    });
  }
  return d;
}
function io(x) {
  const { tagName: w, importContext: A } = x, d = {
    ...A
  };
  if (!A.endingQueues[w]) {
    const D = Wr({
      batchSize: A.options.batchSize
    });
    d.endingQueues[w] = D;
  }
  return d;
}
function so(x) {
  const { importContext: w } = x;
  let A = { ...w };
  for (const D of Object.keys(A.queues))
    A.queues[D]?.close();
  const d = A.queuesObservable.subscribe(async () => {
    A = await co({
      importContext: A
    }), d();
  });
  return A;
}
function uo(x) {
  const { importContext: w } = x, A = w.endingQueues && Object.keys(w.endingQueues).length > 0;
  return Promise.all([
    new Promise((d) => {
      const D = w.queuesObservable.subscribe(() => {
        w.queuesObservable.isAllDone() && (D(), d());
      });
    }),
    A ? new Promise((d) => {
      const D = w.endingQueuesObservable.subscribe(() => {
        w.endingQueuesObservable.isAllDone() && (D(), d());
      });
    }) : Promise.resolve()
  ]);
}
async function co(x) {
  const { importContext: w } = x, A = { ...w };
  await Za({
    databaseInstance: w.databaseInstance,
    tagNames: Object.keys(w.endingQueues)
  });
  for (const d of Object.keys(A.endingQueues)) {
    if (!A.endingQueues[d]) throw new Error(`Ending queue for tagName ${d} is not defined`);
    A.endingQueues[d]?.close(), queueMicrotask(() => {
      $r({
        tagName: d,
        importContext: A,
        isEndingQueue: !0
      }).catch((D) => {
        throw console.error(`Consumer error for ${d}:`, D), D;
      });
    });
  }
  return A;
}
function zr(x) {
  const w = /* @__PURE__ */ new Set();
  function A(R) {
    return w.add(R), () => w.delete(R);
  }
  function d() {
    for (const R of w) R();
  }
  function D() {
    return Object.values(x).every((R) => R.status === "done");
  }
  return { subscribe: A, notify: d, isAllDone: D };
}
async function $r(x) {
  const { tagName: w, importContext: A, isEndingQueue: d } = x;
  let D, R;
  if (d ? (D = A.endingQueues, R = A.endingQueuesObservable) : (D = A.queues, R = A.queuesObservable), !ao(w, D) || !D[w])
    throw new Error(`Queue for tagName ${w} is not defined to be consumed`);
  for (; ; ) {
    const { value: M, done: q } = await D[w].next();
    if (q) {
      R.isAllDone() && R.notify();
      break;
    }
    if (M.length === 0) continue;
    const G = to({
      parentRecordsBatch: M,
      // within the same batch, all records have the same tagName
      parentTagName: M[0].tagName
    });
    await Ja({
      databaseInstance: A.databaseInstance,
      tagName: w,
      records: G
    });
  }
}
function lo(x) {
  const { importContext: w } = x;
  let A = {
    stack: [],
    currentParentElements: []
  }, d = {
    ...w
  };
  const D = Qa.parser(
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
  return D.onopentag = (R) => A = fo({ node: R, state: A }), D.ontext = (R) => A = po({ text: R, state: A }), D.onclosetag = () => ({ updatedState: A, updatedImportContext: d } = ho({
    state: A,
    importContext: w
  })), D.onend = () => d = mo({ importContext: d }), D.onerror = yo, { xmlParser: D, importContext: d };
}
function fo(x) {
  const { node: w, state: A } = x, d = { ...A }, D = crypto.randomUUID(), R = vo(w), M = go(w), q = bo(w.attributes), G = wo(A.currentParentElements), ie = {
    id: D,
    tagName: R,
    namespace: M,
    attributes: q,
    value: "",
    parent: G ? { id: G.id, tagName: G.tagName } : null,
    children: []
  };
  return d.stack.push(ie), d.currentParentElements = [
    ...d.currentParentElements,
    { id: D, tagName: R }
  ], d;
}
function po(x) {
  const { text: w, state: A } = x;
  return w && A.stack.length > 0 && (A.stack[A.stack.length - 1].value += w), A;
}
function ho(x) {
  const { state: w, importContext: A } = x;
  let d = { ...A }, D = [...w.stack], R = [...w.currentParentElements];
  const M = w.stack.at(-1);
  if (D = w.stack.slice(0, -1), R = w.currentParentElements.slice(0, -1), M) {
    if (D.length) {
      const q = D.length - 1;
      D = D.map(
        (G, ie) => ie === q ? {
          ...G,
          children: [
            ...G.children || [],
            { id: M.id, tagName: M.tagName }
          ]
        } : G
      );
    } else M.parent && eo({
      parent: M.parent,
      child: { id: M.id, tagName: M.tagName }
    });
    Xr.includes(M.tagName) ? (d = oo({
      tagName: M.tagName,
      importContext: d
    }), d.queues[M.tagName]?.push(M)) : (d = io({
      tagName: M.tagName,
      importContext: d
    }), d.endingQueues[M.tagName]?.push(M));
  }
  return {
    updatedState: {
      stack: D,
      currentParentElements: R
    },
    updatedImportContext: d
  };
}
function mo(x) {
  const { importContext: w } = x;
  return so({
    importContext: w
  });
}
function yo(x) {
  return new Error(`XML parsing error: ${x}`);
}
function vo(x) {
  return x.local || null;
}
function go(x) {
  return ro(x) ? {
    prefix: x.prefix,
    uri: x.uri
  } : null;
}
function bo(x) {
  return Object.values(x).map((w) => {
    const A = w.prefix && w.uri ? {
      prefix: w.prefix,
      uri: w.uri
    } : null;
    return {
      name: w.name,
      value: w.value,
      namespace: A
    };
  });
}
function wo(x) {
  return x.length === 0 ? null : x[x.length - 1];
}
const _o = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function Eo({
  files: x,
  options: w = _o
}) {
  const A = [];
  if (x.length === 0) throw new Error("No files provided for import.");
  for (const d of x) {
    if (!To(d)) {
      console.error(`Unsupported file type: ${d.name}`);
      continue;
    }
    if (d.size === 0) {
      console.warn(`File is empty: ${d.name}`);
      continue;
    }
    const D = await Co({ file: d, options: w });
    A.push(D);
  }
  return A;
}
function To(x) {
  return za.some((w) => x.name.toLowerCase().endsWith(w));
}
function So(x) {
  return x.name.replace(/\.[^.]+$/, "");
}
async function Co(x) {
  const { file: w, options: A } = x;
  try {
    const d = So(w);
    let D = {
      databaseInstance: $a(d),
      options: {
        batchSize: A.batchSize
      },
      queues: {},
      endingQueues: {},
      queuesObservable: zr({}),
      endingQueuesObservable: zr({})
    };
    return A.useBrowserApi && (D = await xo({
      file: w,
      importContext: D,
      options: {
        chunkSize: A.chunkSize
      }
    })), await uo({
      importContext: D
    }), d;
  } catch (d) {
    throw console.error(`Error importing file ${w.name}:`, d), d;
  }
}
async function xo(x) {
  const { file: w, importContext: A, options: d } = x, D = w.stream().getReader(), { xmlParser: R, importContext: M } = lo({
    importContext: A
  }), q = new TextDecoder(), G = new Uint8Array(0);
  return await rr(D, R, q, G, d), M;
}
async function rr(x, w, A, d, D) {
  const R = D.chunkSize, { done: M, value: q } = await x.read();
  if (M) {
    if (d.length > 0) {
      const ie = A.decode(d);
      w.write(ie);
    }
    w.close();
    return;
  }
  if (!q)
    return await rr(x, w, A, d, D);
  let G = new Uint8Array(d.length + q.length);
  for (G.set(d), G.set(q, d.length); G.length >= R; ) {
    const ie = G.slice(0, R);
    G = G.slice(R);
    const pe = A.decode(ie, { stream: !0 });
    w.write(pe);
  }
  return await rr(x, w, A, G, D);
}
async function Vo() {
  const x = localStorage.getItem("currentActiveFileDatabaseName");
  if (!x)
    throw new Error("no active file");
  const w = await Do(), A = await Eo({ files: w });
  await Ao(x, A);
}
async function Ao(x, w) {
  const A = new jr(x);
  await A.open();
  const d = qr(A), D = new jr(w[0]);
  await D.open();
  const R = qr(D);
  await M(), await q(), await G(), D.close(), A.close();
  async function M() {
    const V = await D.table("Header").orderBy("id").first();
    if (!V) {
      const $ = { msg: "Header element is missing in FSD" };
      throw console.error($), new Error(JSON.stringify($));
    }
    const X = Me(V, "uuid");
    if (!X) {
      const $ = { msg: "uuid is missing in Header element", header: V };
      throw console.error($), new Error(JSON.stringify($));
    }
    const ae = Me(V, "version");
    if (!ae) {
      const $ = { msg: "version is missing in Header element", header: V };
      throw console.error($), new Error(JSON.stringify($));
    }
    const J = Me(V, "revision");
    if (!J) {
      const $ = { msg: "revision is missing in Header element", header: V };
      throw console.error($), new Error(JSON.stringify($));
    }
    const ge = await D.table("Function").toArray();
    for (const $ of ge) {
      const be = await ar(D, $), Se = [];
      for (const W of be)
        if (Zn(W, ["Substation", "VoltageLevel", "Bay"])) {
          const we = await Yr(A, W, "name");
          Se.push(we);
        }
      R.instantiate($);
      const le = await d.addRecord($);
      let de = (await R.findChildRecordsByTagName(le, "Private")).filter((W) => Me(W, "type")?.value === "eIEC61850-6-100").at(0);
      if (!de) {
        const W = {
          tagName: "Private",
          attributes: [{ name: "type", value: "eIEC61850-6-100" }],
          value: null,
          parent: null,
          namespace: null,
          children: []
        };
        de = await d.addRecord(W), await d.ensureRelationship(le, de);
      }
      const Ce = {
        tagName: "SclFileReference",
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        attributes: [
          { name: "fileType", value: "FSD" },
          { name: "fileUuid", value: X.value },
          { name: "version", value: ae.value },
          { name: "revision", value: J.value }
        ],
        value: null,
        parent: null,
        children: []
      }, se = await d.addRecord(Ce);
      await d.ensureRelationship(de, se);
      const mt = await R.findChildRecords($);
      for (const W of mt) {
        const we = await pe(W);
        d.ensureRelationship(le, we);
      }
      const S = [le, ...Se];
      for (let W = 0; W < S.length; W++) {
        const we = S[W], rt = S[W + 1];
        rt && await d.ensureRelationship(rt, we);
      }
      const ze = await d.findRootSCL(), Fe = S.at(-1);
      ze && Fe && await d.ensureRelationship(ze, Fe);
    }
  }
  async function q() {
    const V = await D.table("DataTypeTemplates").orderBy("id").first();
    if (!V) {
      console.info("no data type templates, stopping");
      return;
    }
    let X = await A.table("DataTypeTemplates").orderBy("id").first();
    if (!X) {
      const J = {
        tagName: "DataTypeTemplates",
        namespace: null,
        attributes: null,
        value: null,
        parent: null,
        children: null
      };
      X = await d.addRecord(J);
      const ge = await d.findRootSCL();
      await d.ensureRelationship(ge, X);
    }
    const ae = await R.findChildRecords(V);
    if (ae.length === 0) {
      console.info("DataTypeTemplates is empty, stopping.");
      return;
    }
    for (const J of ae) {
      const ge = Me(J, "id");
      if (!ge) {
        console.warn("id attribute not found, continuing", J);
        continue;
      }
      if (await d.findOneRecordByAttribute(
        J.tagName,
        ge
      ))
        continue;
      const be = await pe(J);
      await d.ensureRelationship(X, be);
    }
  }
  async function G() {
    const V = await D.table("FunctionCategory").toArray();
    for (const X of V) {
      const ae = await ar(D, X), J = [];
      for (const le of ae.reverse()) {
        if (Zn(le, ["Substation", "VoltageLevel", "Bay"])) {
          const ne = await Yr(A, le, "name");
          J.unshift(ne);
        }
        if (Zn(le, ["Private"])) {
          const ne = J[J.length - 1];
          if (!ne) {
            const Ce = {
              msg: "in the case of function category instantiation private field without a parent (so beeing under SCL root) is considered an error",
              record: le,
              path: ae,
              newGrandParent: ne,
              newParentPath: J
            };
            throw console.error(Ce), new Error(JSON.stringify(Ce));
          }
          const de = await Po(d, le, ne);
          J.unshift(de);
        }
      }
      const $ = [await ie(X), ...J];
      for (let le = 0; le < $.length; le++) {
        const ne = $[le], de = $[le + 1];
        de && await d.ensureRelationship(de, ne);
      }
      const be = await d.findRootSCL(), Se = $.at(-1);
      be && Se && await d.ensureRelationship(be, Se);
    }
  }
  async function ie(V) {
    const X = Me(V, "uuid");
    if (!X) {
      const $ = { msg: "no uuid found in element", funcCatInFSD: V };
      throw console.error($), new Error(JSON.stringify($));
    }
    let ae = await d.findOneRecordByAttribute(V.tagName, {
      name: "templateUuid",
      value: X.value
    });
    ae || (R.instantiate(V), ae = await d.addRecord(V));
    const J = await R.findChildRecordsByTagName(V, "FunctionCatRef");
    for (const $ of J) {
      const be = await d.addRecord($);
      await d.ensureRelationship(ae, be);
      const Se = Me(be, "functionUuid");
      if (!Se) continue;
      const le = await d.findOneRecordByAttribute("Function", {
        name: "templateUuid",
        value: Se.value
      });
      if (!le) {
        const de = { msg: "could not found function by templateUuid", functionUuidAttr: Se };
        throw console.error(de), new Error(JSON.stringify(de));
      }
      const ne = Me(le, "uuid");
      if (!ne) {
        const de = { msg: "function does not have an uuid", funcInASD: le };
        throw console.error(de), new Error(JSON.stringify(de));
      }
      Oa(be, "functionUuid", ne?.value), await d.updateRecord(be);
    }
    const ge = await R.findChildRecordsByTagName(V, "SubCategory");
    for (const $ of ge) {
      const be = await ie($);
      await d.ensureRelationship(ae, be);
    }
    return ae;
  }
  async function pe(V) {
    const X = await d.addRecord(V), ae = await R.findChildRecords(V);
    for (const J of ae) {
      const ge = await pe(J);
      d.ensureRelationship(X, ge);
    }
    return X;
  }
}
async function Yr(x, w, A) {
  const d = Me(w, A);
  if (!d)
    throw console.error("could not find name of record", w), new Error("could not find name of record");
  const D = await Da(x, w.tagName, d);
  return D || (await x.table(w.tagName).add(w), w);
}
async function Po(x, w, A) {
  const d = Me(w, "type");
  if (!d || !d.value) {
    const M = {
      msg: "type attribute is required but it is missing or empty",
      typeAttr: d,
      record: w
    };
    throw console.error(M), new Error(JSON.stringify(M));
  }
  const D = await x.db.table(w.tagName).where("parent.id").equals(A.id).filter(
    (M) => !!M.attributes?.some((q) => q.name === "type" && q.value === d.value)
  ).first();
  return D || await x.addRecord(w);
}
function Zn(x, w) {
  return w.includes(x.tagName);
}
async function Oo(x, w, A) {
  return x.table(w).get(A);
}
async function ar(x, w, A = []) {
  if (!w.parent)
    return [];
  const d = await Oo(x, w.parent.tagName, w.parent.id);
  if (!d)
    throw console.error("could not find parent for", w), new Error("could not find parent for record");
  if (!d.parent)
    return [];
  const R = await ar(x, d, A);
  return [d, ...R];
}
async function Do() {
  const { promise: x, resolve: w } = Promise.withResolvers(), { open: A, onChange: d } = ja({
    accept: "fsd"
  });
  return d((D) => {
    if (D?.length === 0 || D === null) {
      w([]);
      return;
    }
    w(Array.from(D));
  }), A(), x;
}
export {
  Vo as default,
  Ao as instantiateFSD
};
