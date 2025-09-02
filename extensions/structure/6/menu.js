import { p as _a, F as Sa, G as Oa, E as xa, a7 as Aa, a2 as Pa, Y as Ot, ac as jr, ab as Me, ad as qr, ae as Ca, af as Da } from "./import-wrapper-prod-D0C8Ost-.js";
function Na(O) {
  return _a() ? (Sa(O), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Lr() {
  const O = /* @__PURE__ */ new Set(), b = (R) => {
    O.delete(R);
  };
  return {
    on: (R) => {
      O.add(R);
      const M = () => b(R);
      return Na(M), {
        off: M
      };
    },
    off: b,
    trigger: (...R) => Promise.all(Array.from(O).map((M) => M(...R))),
    clear: () => {
      O.clear();
    }
  };
}
const Ia = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ra = (O, b) => Object.prototype.hasOwnProperty.call(O, b), ka = Ia ? window.document : void 0;
function Fa(O) {
  var b;
  const A = Ot(O);
  return (b = A?.$el) != null ? b : A;
}
const Ba = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Ka(O) {
  if (!O)
    return null;
  if (O instanceof FileList)
    return O;
  const b = new DataTransfer();
  for (const A of O)
    b.items.add(A);
  return b.files;
}
function ja(O = {}) {
  const {
    document: b = ka
  } = O, A = Oa(Ka(O.initialFiles)), { on: d, trigger: D } = /* @__PURE__ */ Lr(), { on: R, trigger: M } = /* @__PURE__ */ Lr(), q = xa(() => {
    var V;
    const X = (V = Fa(O.input)) != null ? V : b ? b.createElement("input") : void 0;
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
    X && (X.multiple = Ot(V.multiple), X.accept = Ot(V.accept), X.webkitdirectory = Ot(V.directory), Ra(V, "capture") && (X.capture = Ot(V.capture)));
  }, pe = (V) => {
    const X = q.value;
    if (!X)
      return;
    const ae = {
      ...Ba,
      ...O,
      ...V
    };
    ie(ae), Ot(ae.reset) && G(), X.click();
  };
  return Aa(() => {
    ie(O);
  }), {
    files: Pa(A),
    open: pe,
    reset: G,
    onCancel: R,
    onChange: d
  };
}
var qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function La(O) {
  return O && O.__esModule && Object.prototype.hasOwnProperty.call(O, "default") ? O.default : O;
}
function Ma(O) {
  if (Object.prototype.hasOwnProperty.call(O, "__esModule")) return O;
  var b = O.default;
  if (typeof b == "function") {
    var A = function d() {
      var D = !1;
      try {
        D = this instanceof d;
      } catch {
      }
      return D ? Reflect.construct(b, arguments, this.constructor) : b.apply(this, arguments);
    };
    A.prototype = b.prototype;
  } else A = {};
  return Object.defineProperty(A, "__esModule", { value: !0 }), Object.keys(O).forEach(function(d) {
    var D = Object.getOwnPropertyDescriptor(O, d);
    Object.defineProperty(A, d, D.get ? D : {
      enumerable: !0,
      get: function() {
        return O[d];
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
  return Vr || (Vr = 1, function(O) {
    (function(b) {
      b.parser = function(s, i) {
        return new d(s, i);
      }, b.SAXParser = d, b.SAXStream = pe, b.createStream = ie, b.MAX_BUFFER_LENGTH = 64 * 1024;
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
      b.EVENTS = [
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
        var _ = this;
        R(_), _.q = _.c = "", _.bufferCheckPosition = b.MAX_BUFFER_LENGTH, _.opt = i || {}, _.opt.lowercase = _.opt.lowercase || _.opt.lowercasetags, _.looseCase = _.opt.lowercase ? "toLowerCase" : "toUpperCase", _.tags = [], _.closed = _.closedRoot = _.sawRoot = !1, _.tag = _.error = null, _.strict = !!s, _.noscript = !!(s || _.opt.noscript), _.state = S.BEGIN, _.strictEntities = _.opt.strictEntities, _.ENTITIES = _.strictEntities ? Object.create(b.XML_ENTITIES) : Object.create(b.ENTITIES), _.attribList = [], _.opt.xmlns && (_.ns = Object.create(ge)), _.opt.unquotedAttributeValues === void 0 && (_.opt.unquotedAttributeValues = !s), _.trackPosition = _.opt.position !== !1, _.trackPosition && (_.position = _.line = _.column = 0), Fe(_, "onready");
      }
      Object.create || (Object.create = function(s) {
        function i() {
        }
        i.prototype = s;
        var _ = new i();
        return _;
      }), Object.keys || (Object.keys = function(s) {
        var i = [];
        for (var _ in s) s.hasOwnProperty(_) && i.push(_);
        return i;
      });
      function D(s) {
        for (var i = Math.max(b.MAX_BUFFER_LENGTH, 10), _ = 0, E = 0, ee = A.length; E < ee; E++) {
          var Q = s[A[E]].length;
          if (Q > i)
            switch (A[E]) {
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
                Ue(s, "Max buffer length exceeded: " + A[E]);
            }
          _ = Math.max(_, Q);
        }
        var ue = b.MAX_BUFFER_LENGTH - _;
        s.bufferCheckPosition = ue + s.position;
      }
      function R(s) {
        for (var i = 0, _ = A.length; i < _; i++)
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
      var G = b.EVENTS.filter(function(s) {
        return s !== "error" && s !== "end";
      });
      function ie(s, i) {
        return new pe(s, i);
      }
      function pe(s, i) {
        if (!(this instanceof pe))
          return new pe(s, i);
        q.apply(this), this._parser = new d(s, i), this.writable = !0, this.readable = !0;
        var _ = this;
        this._parser.onend = function() {
          _.emit("end");
        }, this._parser.onerror = function(E) {
          _.emit("error", E), _._parser.error = null;
        }, this._decoder = null, G.forEach(function(E) {
          Object.defineProperty(_, "on" + E, {
            get: function() {
              return _._parser["on" + E];
            },
            set: function(ee) {
              if (!ee)
                return _.removeAllListeners(E), _._parser["on" + E] = ee, ee;
              _.on(E, ee);
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
        var _ = this;
        return !_._parser["on" + s] && G.indexOf(s) !== -1 && (_._parser["on" + s] = function() {
          var E = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          E.splice(0, 0, s), _.emit.apply(_, E);
        }), q.prototype.on.call(_, s, i);
      };
      var V = "[CDATA[", X = "DOCTYPE", ae = "http://www.w3.org/XML/1998/namespace", J = "http://www.w3.org/2000/xmlns/", ge = { xml: ae, xmlns: J }, $ = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, be = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Se = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, le = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function ne(s) {
        return s === " " || s === `
` || s === "\r" || s === "	";
      }
      function de(s) {
        return s === '"' || s === "'";
      }
      function Oe(s) {
        return s === ">" || ne(s);
      }
      function se(s, i) {
        return s.test(i);
      }
      function mt(s, i) {
        return !se(s, i);
      }
      var S = 0;
      b.STATE = {
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
      }, b.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, b.ENTITIES = {
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
      }, Object.keys(b.ENTITIES).forEach(function(s) {
        var i = b.ENTITIES[s], _ = typeof i == "number" ? String.fromCharCode(i) : i;
        b.ENTITIES[s] = _;
      });
      for (var ze in b.STATE)
        b.STATE[b.STATE[ze]] = ze;
      S = b.STATE;
      function Fe(s, i, _) {
        s[i] && s[i](_);
      }
      function W(s, i, _) {
        s.textNode && we(s), Fe(s, i, _);
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
        var i = s.tags[s.tags.length - 1] || s, _ = s.tag = { name: s.tagName, attributes: {} };
        s.opt.xmlns && (_.ns = i.ns), s.attribList.length = 0, W(s, "onopentagstart", _);
      }
      function je(s, i) {
        var _ = s.indexOf(":"), E = _ < 0 ? ["", s] : s.split(":"), ee = E[0], Q = E[1];
        return i && s === "xmlns" && (ee = "xmlns", Q = ""), { prefix: ee, local: Q };
      }
      function Ie(s) {
        if (s.strict || (s.attribName = s.attribName[s.looseCase]()), s.attribList.indexOf(s.attribName) !== -1 || s.tag.attributes.hasOwnProperty(s.attribName)) {
          s.attribName = s.attribValue = "";
          return;
        }
        if (s.opt.xmlns) {
          var i = je(s.attribName, !0), _ = i.prefix, E = i.local;
          if (_ === "xmlns")
            if (E === "xml" && s.attribValue !== ae)
              oe(
                s,
                "xml: prefix must be bound to " + ae + `
Actual: ` + s.attribValue
              );
            else if (E === "xmlns" && s.attribValue !== J)
              oe(
                s,
                "xmlns: prefix must be bound to " + J + `
Actual: ` + s.attribValue
              );
            else {
              var ee = s.tag, Q = s.tags[s.tags.length - 1] || s;
              ee.ns === Q.ns && (ee.ns = Object.create(Q.ns)), ee.ns[E] = s.attribValue;
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
          var _ = s.tag, E = je(s.tagName);
          _.prefix = E.prefix, _.local = E.local, _.uri = _.ns[E.prefix] || "", _.prefix && !_.uri && (oe(s, "Unbound namespace prefix: " + JSON.stringify(s.tagName)), _.uri = E.prefix);
          var ee = s.tags[s.tags.length - 1] || s;
          _.ns && ee.ns !== _.ns && Object.keys(_.ns).forEach(function(Ct) {
            W(s, "onopennamespace", {
              prefix: Ct,
              uri: _.ns[Ct]
            });
          });
          for (var Q = 0, ue = s.attribList.length; Q < ue; Q++) {
            var xe = s.attribList[Q], he = xe[0], He = xe[1], Ee = je(he, !0), Ke = Ee.prefix, gn = Ee.local, vt = Ke === "" ? "" : _.ns[Ke] || "", Ne = {
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
      function At(s) {
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
        var i = s.tags.length, _ = s.tagName;
        s.strict || (_ = _[s.looseCase]());
        for (var E = _; i--; ) {
          var ee = s.tags[i];
          if (ee.name !== E)
            oe(s, "Unexpected close tag");
          else
            break;
        }
        if (i < 0) {
          oe(s, "Unmatched closing tag: " + s.tagName), s.textNode += "</" + s.tagName + ">", s.state = S.TEXT;
          return;
        }
        s.tagName = _;
        for (var Q = s.tags.length; Q-- > i; ) {
          var ue = s.tag = s.tags.pop();
          s.tagName = s.tag.name, W(s, "onclosetag", s.tagName);
          var xe = {};
          for (var he in ue.ns)
            xe[he] = ue.ns[he];
          var He = s.tags[s.tags.length - 1] || s;
          s.opt.xmlns && ue.ns !== He.ns && Object.keys(ue.ns).forEach(function(Ee) {
            var Ke = ue.ns[Ee];
            W(s, "onclosenamespace", { prefix: Ee, uri: Ke });
          });
        }
        i === 0 && (s.closedRoot = !0), s.tagName = s.attribValue = s.attribName = "", s.attribList.length = 0, s.state = S.TEXT;
      }
      function Ye(s) {
        var i = s.entity, _ = i.toLowerCase(), E, ee = "";
        return s.ENTITIES[i] ? s.ENTITIES[i] : s.ENTITIES[_] ? s.ENTITIES[_] : (i = _, i.charAt(0) === "#" && (i.charAt(1) === "x" ? (i = i.slice(2), E = parseInt(i, 16), ee = E.toString(16)) : (i = i.slice(1), E = parseInt(i, 10), ee = E.toString(10))), i = i.replace(/^0+/, ""), isNaN(E) || ee.toLowerCase() !== i ? (oe(s, "Invalid character entity"), "&" + s.entity + ";") : String.fromCodePoint(E));
      }
      function Pt(s, i) {
        i === "<" ? (s.state = S.OPEN_WAKA, s.startTagPosition = s.position) : ne(i) || (oe(s, "Non-whitespace before first tag."), s.textNode = i, s.state = S.TEXT);
      }
      function at(s, i) {
        var _ = "";
        return i < s.length && (_ = s.charAt(i)), _;
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
        for (var _ = 0, E = ""; E = at(s, _++), i.c = E, !!E; )
          switch (i.trackPosition && (i.position++, E === `
` ? (i.line++, i.column = 0) : i.column++), i.state) {
            case S.BEGIN:
              if (i.state = S.BEGIN_WHITESPACE, E === "\uFEFF")
                continue;
              Pt(i, E);
              continue;
            case S.BEGIN_WHITESPACE:
              Pt(i, E);
              continue;
            case S.TEXT:
              if (i.sawRoot && !i.closedRoot) {
                for (var ee = _ - 1; E && E !== "<" && E !== "&"; )
                  E = at(s, _++), E && i.trackPosition && (i.position++, E === `
` ? (i.line++, i.column = 0) : i.column++);
                i.textNode += s.substring(ee, _ - 1);
              }
              E === "<" && !(i.sawRoot && i.closedRoot && !i.strict) ? (i.state = S.OPEN_WAKA, i.startTagPosition = i.position) : (!ne(E) && (!i.sawRoot || i.closedRoot) && oe(i, "Text data outside of root node."), E === "&" ? i.state = S.TEXT_ENTITY : i.textNode += E);
              continue;
            case S.SCRIPT:
              E === "<" ? i.state = S.SCRIPT_ENDING : i.script += E;
              continue;
            case S.SCRIPT_ENDING:
              E === "/" ? i.state = S.CLOSE_TAG : (i.script += "<" + E, i.state = S.SCRIPT);
              continue;
            case S.OPEN_WAKA:
              if (E === "!")
                i.state = S.SGML_DECL, i.sgmlDecl = "";
              else if (!ne(E)) if (se($, E))
                i.state = S.OPEN_TAG, i.tagName = E;
              else if (E === "/")
                i.state = S.CLOSE_TAG, i.tagName = "";
              else if (E === "?")
                i.state = S.PROC_INST, i.procInstName = i.procInstBody = "";
              else {
                if (oe(i, "Unencoded <"), i.startTagPosition + 1 < i.position) {
                  var Q = i.position - i.startTagPosition;
                  E = new Array(Q).join(" ") + E;
                }
                i.textNode += "<" + E, i.state = S.TEXT;
              }
              continue;
            case S.SGML_DECL:
              if (i.sgmlDecl + E === "--") {
                i.state = S.COMMENT, i.comment = "", i.sgmlDecl = "";
                continue;
              }
              i.doctype && i.doctype !== !0 && i.sgmlDecl ? (i.state = S.DOCTYPE_DTD, i.doctype += "<!" + i.sgmlDecl + E, i.sgmlDecl = "") : (i.sgmlDecl + E).toUpperCase() === V ? (W(i, "onopencdata"), i.state = S.CDATA, i.sgmlDecl = "", i.cdata = "") : (i.sgmlDecl + E).toUpperCase() === X ? (i.state = S.DOCTYPE, (i.doctype || i.sawRoot) && oe(
                i,
                "Inappropriately located doctype declaration"
              ), i.doctype = "", i.sgmlDecl = "") : E === ">" ? (W(i, "onsgmldeclaration", i.sgmlDecl), i.sgmlDecl = "", i.state = S.TEXT) : (de(E) && (i.state = S.SGML_DECL_QUOTED), i.sgmlDecl += E);
              continue;
            case S.SGML_DECL_QUOTED:
              E === i.q && (i.state = S.SGML_DECL, i.q = ""), i.sgmlDecl += E;
              continue;
            case S.DOCTYPE:
              E === ">" ? (i.state = S.TEXT, W(i, "ondoctype", i.doctype), i.doctype = !0) : (i.doctype += E, E === "[" ? i.state = S.DOCTYPE_DTD : de(E) && (i.state = S.DOCTYPE_QUOTED, i.q = E));
              continue;
            case S.DOCTYPE_QUOTED:
              i.doctype += E, E === i.q && (i.q = "", i.state = S.DOCTYPE);
              continue;
            case S.DOCTYPE_DTD:
              E === "]" ? (i.doctype += E, i.state = S.DOCTYPE) : E === "<" ? (i.state = S.OPEN_WAKA, i.startTagPosition = i.position) : de(E) ? (i.doctype += E, i.state = S.DOCTYPE_DTD_QUOTED, i.q = E) : i.doctype += E;
              continue;
            case S.DOCTYPE_DTD_QUOTED:
              i.doctype += E, E === i.q && (i.state = S.DOCTYPE_DTD, i.q = "");
              continue;
            case S.COMMENT:
              E === "-" ? i.state = S.COMMENT_ENDING : i.comment += E;
              continue;
            case S.COMMENT_ENDING:
              E === "-" ? (i.state = S.COMMENT_ENDED, i.comment = rt(i.opt, i.comment), i.comment && W(i, "oncomment", i.comment), i.comment = "") : (i.comment += "-" + E, i.state = S.COMMENT);
              continue;
            case S.COMMENT_ENDED:
              E !== ">" ? (oe(i, "Malformed comment"), i.comment += "--" + E, i.state = S.COMMENT) : i.doctype && i.doctype !== !0 ? i.state = S.DOCTYPE_DTD : i.state = S.TEXT;
              continue;
            case S.CDATA:
              E === "]" ? i.state = S.CDATA_ENDING : i.cdata += E;
              continue;
            case S.CDATA_ENDING:
              E === "]" ? i.state = S.CDATA_ENDING_2 : (i.cdata += "]" + E, i.state = S.CDATA);
              continue;
            case S.CDATA_ENDING_2:
              E === ">" ? (i.cdata && W(i, "oncdata", i.cdata), W(i, "onclosecdata"), i.cdata = "", i.state = S.TEXT) : E === "]" ? i.cdata += "]" : (i.cdata += "]]" + E, i.state = S.CDATA);
              continue;
            case S.PROC_INST:
              E === "?" ? i.state = S.PROC_INST_ENDING : ne(E) ? i.state = S.PROC_INST_BODY : i.procInstName += E;
              continue;
            case S.PROC_INST_BODY:
              if (!i.procInstBody && ne(E))
                continue;
              E === "?" ? i.state = S.PROC_INST_ENDING : i.procInstBody += E;
              continue;
            case S.PROC_INST_ENDING:
              E === ">" ? (W(i, "onprocessinginstruction", {
                name: i.procInstName,
                body: i.procInstBody
              }), i.procInstName = i.procInstBody = "", i.state = S.TEXT) : (i.procInstBody += "?" + E, i.state = S.PROC_INST_BODY);
              continue;
            case S.OPEN_TAG:
              se(be, E) ? i.tagName += E : (Ve(i), E === ">" ? Be(i) : E === "/" ? i.state = S.OPEN_TAG_SLASH : (ne(E) || oe(i, "Invalid character in tag name"), i.state = S.ATTRIB));
              continue;
            case S.OPEN_TAG_SLASH:
              E === ">" ? (Be(i, !0), At(i)) : (oe(i, "Forward-slash in opening tag not followed by >"), i.state = S.ATTRIB);
              continue;
            case S.ATTRIB:
              if (ne(E))
                continue;
              E === ">" ? Be(i) : E === "/" ? i.state = S.OPEN_TAG_SLASH : se($, E) ? (i.attribName = E, i.attribValue = "", i.state = S.ATTRIB_NAME) : oe(i, "Invalid attribute name");
              continue;
            case S.ATTRIB_NAME:
              E === "=" ? i.state = S.ATTRIB_VALUE : E === ">" ? (oe(i, "Attribute without value"), i.attribValue = i.attribName, Ie(i), Be(i)) : ne(E) ? i.state = S.ATTRIB_NAME_SAW_WHITE : se(be, E) ? i.attribName += E : oe(i, "Invalid attribute name");
              continue;
            case S.ATTRIB_NAME_SAW_WHITE:
              if (E === "=")
                i.state = S.ATTRIB_VALUE;
              else {
                if (ne(E))
                  continue;
                oe(i, "Attribute without value"), i.tag.attributes[i.attribName] = "", i.attribValue = "", W(i, "onattribute", {
                  name: i.attribName,
                  value: ""
                }), i.attribName = "", E === ">" ? Be(i) : se($, E) ? (i.attribName = E, i.state = S.ATTRIB_NAME) : (oe(i, "Invalid attribute name"), i.state = S.ATTRIB);
              }
              continue;
            case S.ATTRIB_VALUE:
              if (ne(E))
                continue;
              de(E) ? (i.q = E, i.state = S.ATTRIB_VALUE_QUOTED) : (i.opt.unquotedAttributeValues || Ue(i, "Unquoted attribute value"), i.state = S.ATTRIB_VALUE_UNQUOTED, i.attribValue = E);
              continue;
            case S.ATTRIB_VALUE_QUOTED:
              if (E !== i.q) {
                E === "&" ? i.state = S.ATTRIB_VALUE_ENTITY_Q : i.attribValue += E;
                continue;
              }
              Ie(i), i.q = "", i.state = S.ATTRIB_VALUE_CLOSED;
              continue;
            case S.ATTRIB_VALUE_CLOSED:
              ne(E) ? i.state = S.ATTRIB : E === ">" ? Be(i) : E === "/" ? i.state = S.OPEN_TAG_SLASH : se($, E) ? (oe(i, "No whitespace between attributes"), i.attribName = E, i.attribValue = "", i.state = S.ATTRIB_NAME) : oe(i, "Invalid attribute name");
              continue;
            case S.ATTRIB_VALUE_UNQUOTED:
              if (!Oe(E)) {
                E === "&" ? i.state = S.ATTRIB_VALUE_ENTITY_U : i.attribValue += E;
                continue;
              }
              Ie(i), E === ">" ? Be(i) : i.state = S.ATTRIB;
              continue;
            case S.CLOSE_TAG:
              if (i.tagName)
                E === ">" ? At(i) : se(be, E) ? i.tagName += E : i.script ? (i.script += "</" + i.tagName, i.tagName = "", i.state = S.SCRIPT) : (ne(E) || oe(i, "Invalid tagname in closing tag"), i.state = S.CLOSE_TAG_SAW_WHITE);
              else {
                if (ne(E))
                  continue;
                mt($, E) ? i.script ? (i.script += "</" + E, i.state = S.SCRIPT) : oe(i, "Invalid tagname in closing tag.") : i.tagName = E;
              }
              continue;
            case S.CLOSE_TAG_SAW_WHITE:
              if (ne(E))
                continue;
              E === ">" ? At(i) : oe(i, "Invalid characters in closing tag");
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
              if (E === ";") {
                var he = Ye(i);
                i.opt.unparsedEntities && !Object.values(b.XML_ENTITIES).includes(he) ? (i.entity = "", i.state = ue, i.write(he)) : (i[xe] += he, i.entity = "", i.state = ue);
              } else se(i.entity.length ? le : Se, E) ? i.entity += E : (oe(i, "Invalid character in entity name"), i[xe] += "&" + i.entity + E, i.entity = "", i.state = ue);
              continue;
            default:
              throw new Error(i, "Unknown state: " + i.state);
          }
        return i.position >= i.bufferCheckPosition && D(i), i;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var s = String.fromCharCode, i = Math.floor, _ = function() {
          var E = 16384, ee = [], Q, ue, xe = -1, he = arguments.length;
          if (!he)
            return "";
          for (var He = ""; ++xe < he; ) {
            var Ee = Number(arguments[xe]);
            if (!isFinite(Ee) || // `NaN`, `+Infinity`, or `-Infinity`
            Ee < 0 || // not a valid Unicode code point
            Ee > 1114111 || // not a valid Unicode code point
            i(Ee) !== Ee)
              throw RangeError("Invalid code point: " + Ee);
            Ee <= 65535 ? ee.push(Ee) : (Ee -= 65536, Q = (Ee >> 10) + 55296, ue = Ee % 1024 + 56320, ee.push(Q, ue)), (xe + 1 === he || ee.length > E) && (He += s.apply(null, ee), ee.length = 0);
          }
          return He;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: _,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = _;
      }();
    })(O);
  }(Mr)), Mr;
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
function Ya(O) {
  return O.reduce(
    (b, A) => (b[A] = er, b),
    {}
  );
}
var tr = { exports: {} }, Xa = tr.exports, Gr;
function Ha() {
  return Gr || (Gr = 1, function(O, b) {
    (function(A, d) {
      O.exports = d();
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
      function Oe(e, t) {
        if (typeof t == "string" && V(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, a = t.length; r < a; ++r) {
            var o = Oe(e, t[r]);
            n.push(o);
          }
          return n;
        }
        var u = t.indexOf(".");
        if (u !== -1) {
          var c = e[t.substr(0, u)];
          return c == null ? void 0 : Oe(c, t.substr(u + 1));
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
        return W = /* @__PURE__ */ new WeakMap(), e = function t(n) {
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
        }(e), W = null, e;
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
      }, Nt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ke = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Nt), At = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ye(e, t) {
        this.name = e, this.message = t;
      }
      function Pt(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, a) {
          return a.indexOf(n) === r;
        }).join(`
`);
      }
      function at(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = Pt(e, t);
      }
      function Xe(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = Pt(e, this.failures);
      }
      ge(Ye).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), ge(at).from(Ye), ge(Xe).from(Ye);
      var s = ke.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), i = Ye, _ = ke.reduce(function(e, t) {
        var n = t + "Error";
        function r(a, o) {
          this.name = n, a ? typeof a == "string" ? (this.message = "".concat(a).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = At[t] || n, this.inner = null);
        }
        return ge(r).from(i), e[t] = r, e;
      }, {});
      _.Syntax = SyntaxError, _.Type = TypeError, _.Range = RangeError;
      var E = Nt.reduce(function(e, t) {
        return e[t + "Error"] = _[t], e;
      }, {}), ee = ke.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = _[t]), e;
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
      function Ee(e, t) {
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
      function Ct(e) {
        Ne = e;
      }
      var Dt = {}, or = 100, ot = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, ie(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, ie(t), e];
      }(), Nt = ot[0], ke = ot[1], ot = ot[2], ke = ke && ke.then, it = Nt && Nt.constructor, bn = !!ot, It = function(e, t) {
        Rt.push([e, t]), Qt && (queueMicrotask(Zr), Qt = !1);
      }, wn = !0, Qt = !0, st = [], zt = [], En = ue, We = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, U = We, Rt = [], ut = 0, Yt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = U;
        if (typeof e != "function") {
          if (e !== Dt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && _n(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function n(r, a) {
          try {
            a(function(o) {
              if (r._state === null) {
                if (o === r) throw new TypeError("A promise cannot be resolved with itself.");
                var u = r._lib && gt();
                o && typeof o.then == "function" ? n(r, function(c, f) {
                  o instanceof j ? o._then(c, f) : o.then(c, f);
                }) : (r._state = !0, r._value = o, sr(r)), u && bt();
              }
            }, _n.bind(null, r));
          } catch (o) {
            _n(r, o);
          }
        }(this, e);
      }
      var Tn = { get: function() {
        var e = U, t = $t;
        function n(r, a) {
          var o = this, u = !e.global && (e !== U || t !== $t), c = u && !Je(), f = new j(function(h, y) {
            Sn(o, new ir(cr(r, e, u, c), cr(a, e, u, c), h, y, e));
          });
          return this._consoleTask && (f._consoleTask = this._consoleTask), f;
        }
        return n.prototype = Dt, n;
      }, set: function(e) {
        J(this, "then", e && e.prototype === Dt ? Tn : { get: function() {
          return e;
        }, set: Tn.set });
      } };
      function ir(e, t, n, r, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = a;
      }
      function _n(e, t) {
        var n, r;
        zt.push(t), e._state === null && (n = e._lib && gt(), t = En(t), e._state = !1, e._value = t, r = e, st.some(function(a) {
          return a._value === r._value;
        }) || st.push(r), sr(e), n && bt());
      }
      function sr(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) Sn(e, t[n]);
        var a = e._PSD;
        --a.ref || a.finalize(), ut === 0 && (++ut, It(function() {
          --ut == 0 && On();
        }, []));
      }
      function Sn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++ut, It(Jr, [n, e, t]);
        } else e._listeners.push(t);
      }
      function Jr(e, t, n) {
        try {
          var r, a = t._value;
          !t._state && zt.length && (zt = []), r = Ne && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || zt.indexOf(a) !== -1 || function(o) {
            for (var u = st.length; u; ) if (st[--u]._value === o._value) return st.splice(u, 1);
          }(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --ut == 0 && On(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Zr() {
        ct(We, function() {
          gt() && bt();
        });
      }
      function gt() {
        var e = wn;
        return Qt = wn = !1, e;
      }
      function bt() {
        var e, t, n;
        do
          for (; 0 < Rt.length; ) for (e = Rt, Rt = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < Rt.length);
        Qt = wn = !0;
      }
      function On() {
        var e = st;
        st = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = Yt.slice(0), n = t.length; n; ) t[--n]();
      }
      function Xt(e) {
        return new j(Dt, !1, e);
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
      X(j.prototype, { then: Tn, _then: function(e, t) {
        Sn(this, new ir(null, null, e, t, U));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : Xt)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : Xt)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return j.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return j.resolve(e()).then(function() {
            return Xt(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new j(function(r, a) {
          var o = setTimeout(function() {
            return a(new _.Timeout(t));
          }, e);
          n.then(r, a).finally(clearTimeout.bind(null, o));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && J(j.prototype, Symbol.toStringTag, "Dexie.Promise"), We.env = ur(), X(j, { all: function() {
        var e = Ie.apply(null, arguments).map(Jt);
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
        }) : new j(Dt, !0, e);
      }, reject: Xt, race: function() {
        var e = Ie.apply(null, arguments).map(Jt);
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
        return $t;
      } }, newPSD: $e, usePSD: ct, scheduler: { get: function() {
        return It;
      }, set: function(e) {
        It = e;
      } }, rejectionMapper: { get: function() {
        return En;
      }, set: function(e) {
        En = e;
      } }, follow: function(e, t) {
        return new j(function(n, r) {
          return $e(function(a, o) {
            var u = U;
            u.unhandleds = [], u.onunhandled = o, u.finalize = he(function() {
              var c, f = this;
              c = function() {
                f.unhandleds.length === 0 ? a() : o(f.unhandleds[0]);
              }, Yt.push(function h() {
                c(), Yt.splice(Yt.indexOf(h), 1);
              }), ++ut, It(function() {
                --ut == 0 && On();
              }, []);
            }, u.finalize), e();
          }, t, n, r);
        });
      } }), it && (it.allSettled && J(j, "allSettled", function() {
        var e = Ie.apply(null, arguments).map(Jt);
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
        var e = Ie.apply(null, arguments).map(Jt);
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
      var Te = { awaits: 0, echoes: 0, id: 0 }, ea = 0, Ht = [], Wt = 0, $t = 0, ta = 0;
      function $e(e, t, n, r) {
        var a = U, o = Object.create(a);
        return o.parent = a, o.ref = 0, o.global = !1, o.id = ++ta, We.env, o.env = bn ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && G(o, t), ++a.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = ct(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function wt() {
        return Te.id || (Te.id = ++ea), ++Te.awaits, Te.echoes += or, Te.id;
      }
      function Je() {
        return !!Te.awaits && (--Te.awaits == 0 && (Te.id = 0), Te.echoes = Te.awaits * or, !0);
      }
      function Jt(e) {
        return Te.echoes && e && e.constructor === it ? (wt(), e.then(function(t) {
          return Je(), t;
        }, function(t) {
          return Je(), ye(t);
        })) : e;
      }
      function na() {
        var e = Ht[Ht.length - 1];
        Ht.pop(), Ze(e, !1);
      }
      function Ze(e, t) {
        var n, r = U;
        (t ? !Te.echoes || Wt++ && e === U : !Wt || --Wt && e === U) || queueMicrotask(t ? (function(a) {
          ++$t, Te.echoes && --Te.echoes != 0 || (Te.echoes = Te.awaits = Te.id = 0), Ht.push(U), Ze(a, !0);
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
        Promise === it && Te.echoes === 0 ? Wt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ke).indexOf("[native code]") === -1 && (wt = Je = Q);
      var ye = j.reject, lt = "￿", Ge = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", lr = "String expected.", Et = [], Zt = "__dbnames", An = "readonly", Pn = "readwrite";
      function ft(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var fr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function en(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = we(t))[e], t;
        };
      }
      function pr() {
        throw _.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
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
              return function(a, o) {
                for (var u = a.length, c = o.length, f = u < c ? u : c, h = 0; h < f; ++h) if (a[h] !== o[h]) return a[h] < o[h] ? -1 : 1;
                return u === c ? 0 : u < c ? -1 : 1;
              }(hr(e), hr(t));
            case "Array":
              return function(a, o) {
                for (var u = a.length, c = o.length, f = u < c ? u : c, h = 0; h < f; ++h) {
                  var y = Z(a[h], o[h]);
                  if (y !== 0) return y;
                }
                return u === c ? 0 : u < c ? -1 : 1;
              }(e, t);
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
      function tn(e, t, n) {
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
          if (!l.schema[a]) throw new _.NotFound("Table " + a + " not part of transaction");
          return t(l.idbtrans, l);
        }
        var c = gt();
        try {
          var f = r && r.db._novip === this.db._novip ? r === U.trans ? r._promise(e, u, n) : $e(function() {
            return r._promise(e, u, n);
          }, { trans: r, transless: U.transless || U }) : function h(y, l, w, p) {
            if (y.idbdb && (y._state.openComplete || U.letThrough || y._vip)) {
              var m = y._createTransaction(l, w, y._dbSchema);
              try {
                m.create(), y._state.PR1398_maxLoop = 3;
              } catch (g) {
                return g.name === s.InvalidState && y.isOpen() && 0 < --y._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), y.close({ disableAutoOpen: !1 }), y.open().then(function() {
                  return h(y, l, w, p);
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
            if (y._state.openComplete) return ye(new _.DatabaseClosed(y._state.dbOpenError));
            if (!y._state.isBeingOpened) {
              if (!y._state.autoOpen) return ye(new _.DatabaseClosed());
              y.open().catch(Q);
            }
            return y._state.dbReadyPromise.then(function() {
              return h(y, l, w, p);
            });
          }(this.db, e, [this.name], u);
          return o && (f._consoleTask = o, f = f.catch(function(h) {
            return console.trace(h), ye(h);
          })), f;
        } finally {
          c && bt();
        }
      }, ce.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? ye(new _.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
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
          var h = l[0], y = l[1], l = r[f], w = e[f];
          return [h || l, h || !l ? ft(y, l && l.multi ? function(p) {
            return p = Oe(p, f), q(p) && p.some(function(m) {
              return a(w, m);
            });
          } : function(p) {
            return a(w, Oe(p, f));
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
        (this.schema.mappedClass = e).prototype instanceof pr && (function(f, h) {
          if (typeof h != "function" && h !== null) throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
          function y() {
            this.constructor = f;
          }
          A(f, h), f.prototype = h === null ? Object.create(h) : (y.prototype = h.prototype, new y());
        }(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
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
        return o && a && (u = en(o)(e)), this._trans("readwrite", function(c) {
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
        return typeof e != "object" || q(e) ? this.where(":id").equals(e).modify(t) : (e = Oe(e, this.schema.primKey.keyPath), e === void 0 ? ye(new _.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, ce.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, a = r.auto, o = r.keyPath, u = e;
        return o && a && (u = en(o)(e)), this._trans("readwrite", function(c) {
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
            return tn(t, [e], r);
          }).then(function(r) {
            return r.numFailures ? j.reject(r.failures[0]) : void 0;
          });
        });
      }, ce.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: fr }).then(function(n) {
            return tn(e, null, n);
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
          if (h && a) throw new _.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new _.InvalidArgument("Arguments objects and keys must have the same length");
          var f = e.length, h = h && c ? e.map(en(h)) : e;
          return r.core.mutate({ trans: u, type: "add", keys: a, values: h, wantResults: o }).then(function(m) {
            var l = m.numFailures, w = m.results, p = m.lastResult, m = m.failures;
            if (l === 0) return o ? w : p;
            throw new Xe("".concat(r.name, ".bulkAdd(): ").concat(l, " of ").concat(f, " operations failed"), m);
          });
        });
      }, ce.prototype.bulkPut = function(e, t, n) {
        var r = this, a = Array.isArray(t) ? t : void 0, o = (n = n || (a ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var h = r.schema.primKey, c = h.auto, h = h.keyPath;
          if (h && a) throw new _.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new _.InvalidArgument("Arguments objects and keys must have the same length");
          var f = e.length, h = h && c ? e.map(en(h)) : e;
          return r.core.mutate({ trans: u, type: "put", keys: a, values: h, wantResults: o }).then(function(m) {
            var l = m.numFailures, w = m.results, p = m.lastResult, m = m.failures;
            if (l === 0) return o ? w : p;
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
            e.forEach(function(l, w) {
              var p = l.key, m = l.changes, g = c[w];
              if (g) {
                for (var v = 0, T = Object.keys(m); v < T.length; v++) {
                  var x = T[v], P = m[x];
                  if (x === t.schema.primKey.keyPath) {
                    if (Z(P, p) !== 0) throw new _.Constraint("Cannot update primary key in bulkUpdate()");
                  } else se(g, x, P);
                }
                o.push(w), f.push(p), h.push(g);
              }
            });
            var y = f.length;
            return n.mutate({ trans: u, type: "put", keys: f, values: h, updates: { keys: r, changeSpecs: a } }).then(function(l) {
              var w = l.numFailures, p = l.failures;
              if (w === 0) return y;
              for (var m = 0, g = Object.keys(p); m < g.length; m++) {
                var v, T = g[m], x = o[Number(T)];
                x != null && (v = p[T], delete p[T], p[x] = v);
              }
              throw new Xe("".concat(t.name, ".bulkUpdate(): ").concat(w, " of ").concat(y, " operations failed"), p);
            });
          });
        });
      }, ce.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e }).then(function(a) {
            return tn(t, e, a);
          });
        }).then(function(u) {
          var a = u.numFailures, o = u.lastResult, u = u.failures;
          if (a === 0) return o;
          throw new Xe("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(n, " operations failed"), u);
        });
      }, ce);
      function ce() {
      }
      function kt(e) {
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
              y.subscribers = y.subscribers.filter(function(w) {
                return w !== l;
              }), y.fire = y.subscribers.reduce(c, f);
            } };
            return n[u] = t[u] = y;
          }
          M(h = u).forEach(function(l) {
            var w = h[l];
            if (q(w)) o(l, h[l][0], h[l][1]);
            else {
              if (w !== "asap") throw new _.InvalidArgument("Invalid event config");
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
      function Ft(e, t) {
        return ge(t).from({ prototype: e }), t;
      }
      function Tt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Cn(e, t) {
        e.filter = ft(e.filter, t);
      }
      function Dn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return ft(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function nn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new _.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function yr(e, t, n) {
        var r = nn(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function rn(e, t, n, r) {
        var a = e.replayFilter ? ft(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, u = function(c, f, h) {
            var y, l;
            a && !a(f, h, function(w) {
              return f.stop(w);
            }, function(w) {
              return f.fail(w);
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
      var Bt = (gr.prototype.execute = function(e) {
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
        return rn(this._ctx, e, t, this._ctx.table.core);
      }, re.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && G(n, e), t._ctx = n, t;
      }, re.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, re.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return rn(t, e, n, t.table.core);
        });
      }, re.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, a = r.table.core;
          if (Tt(r, !0)) return a.count({ trans: n, query: { index: nn(r, a.schema), range: r.range } }).then(function(u) {
            return Math.min(u, r.limit);
          });
          var o = 0;
          return rn(r, function() {
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
          if (r.dir === "next" && Tt(r, !0) && 0 < r.limit) {
            var a = r.valueMapper, o = nn(r, r.table.core.schema);
            return r.table.core.query({ trans: n, limit: r.limit, values: !0, query: { index: o, range: r.range } }).then(function(c) {
              return c = c.result, a ? c.map(a) : c;
            });
          }
          var u = [];
          return rn(r, function(c) {
            return u.push(c);
          }, n, r.table.core).then(function() {
            return u;
          });
        }, e);
      }, re.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, Tt(t) ? Dn(t, function() {
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
        return Cn(this._ctx, function(n, r, a) {
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
        return Cn(this._ctx, function(n) {
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
        if (t.dir === "next" && Tt(t, !0) && 0 < t.limit) return this._read(function(r) {
          var a = nn(t, t.table.core.schema);
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
        return Cn(this._ctx, function(a) {
          var r = a.primaryKey.toString(), a = V(t, r);
          return t[r] = !0, !a;
        }), this;
      }, re.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var a, o, u;
          u = typeof e == "function" ? e : (a = M(e), o = a.length, function(T) {
            for (var x = !1, P = 0; P < o; ++P) {
              var C = a[P], N = e[C], F = Oe(T, C);
              N instanceof Bt ? (se(T, C, N.execute(F)), x = !0) : F !== N && (se(T, C, N), x = !0);
            }
            return x;
          });
          var c = n.table.core, l = c.schema.primaryKey, f = l.outbound, h = l.extractKey, y = 200, l = t.db._options.modifyChunkSize;
          l && (y = typeof l == "object" ? l[c.name] || l["*"] || 200 : l);
          function w(T, C) {
            var P = C.failures, C = C.numFailures;
            m += T - C;
            for (var N = 0, F = M(P); N < F.length; N++) {
              var I = F[N];
              p.push(P[I]);
            }
          }
          var p = [], m = 0, g = [], v = e === br;
          return t.clone().primaryKeys().then(function(T) {
            function x(C) {
              var N = Math.min(y, T.length - C), F = T.slice(C, C + N);
              return (v ? Promise.resolve([]) : c.getMany({ trans: r, keys: F, cache: "immutable" })).then(function(I) {
                var k = [], K = [], B = f ? [] : null, L = v ? F : [];
                if (!v) for (var H = 0; H < N; ++H) {
                  var te = I[H], Y = { value: we(te), primKey: T[C + H] };
                  u.call(Y, Y.value, Y) !== !1 && (Y.value == null ? L.push(T[C + H]) : f || Z(h(te), h(Y.value)) === 0 ? (K.push(Y.value), f && B.push(T[C + H])) : (L.push(T[C + H]), k.push(Y.value)));
                }
                return Promise.resolve(0 < k.length && c.mutate({ trans: r, type: "add", values: k }).then(function(me) {
                  for (var z in me.failures) L.splice(parseInt(z), 1);
                  w(k.length, me);
                })).then(function() {
                  return (0 < K.length || P && typeof e == "object") && c.mutate({ trans: r, type: "put", keys: B, values: K, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < C }).then(function(me) {
                    return w(K.length, me);
                  });
                }).then(function() {
                  return (0 < L.length || P && v) && c.mutate({ trans: r, type: "delete", keys: L, criteria: P, isAdditionalChunk: 0 < C }).then(function(me) {
                    return tn(n.table, L, me);
                  }).then(function(me) {
                    return w(L.length, me);
                  });
                }).then(function() {
                  return T.length > C + N && x(C + y);
                });
              });
            }
            var P = Tt(n) && n.limit === 1 / 0 && (typeof e != "function" || v) && { index: n.index, range: n.range };
            return x(0).then(function() {
              if (0 < p.length) throw new at("Error modifying one or more objects", p, m, g);
              return T.length;
            });
          });
        });
      }, re.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !Tt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(br) : this._write(function(n) {
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
        return e = e instanceof Er ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function _t(e) {
        return new e.Collection(e, function() {
          return wr("");
        }).limit(0);
      }
      function an(e, t, n, r) {
        var a, o, u, c, f, h, y, l = n.length;
        if (!n.every(function(m) {
          return typeof m == "string";
        })) return Re(e, lr);
        function w(m) {
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
          }).sort(function(v, T) {
            return u(v.lower, T.lower);
          });
          c = g.map(function(v) {
            return v.upper;
          }), f = g.map(function(v) {
            return v.lower;
          }), y = (h = m) === "next" ? "" : r;
        }
        w("next"), e = new e.Collection(e, function() {
          return et(c[0], f[l - 1] + r);
        }), e._ondirectionchange = function(m) {
          w(m);
        };
        var p = 0;
        return e._addAlgorithm(function(m, g, v) {
          var T = m.key;
          if (typeof T != "string") return !1;
          var x = o(T);
          if (t(x, f, p)) return !0;
          for (var P = null, C = p; C < l; ++C) {
            var N = function(F, I, k, K, B, L) {
              for (var H = Math.min(F.length, K.length), te = -1, Y = 0; Y < H; ++Y) {
                var me = I[Y];
                if (me !== K[Y]) return B(F[Y], k[Y]) < 0 ? F.substr(0, Y) + k[Y] + k.substr(Y + 1) : B(F[Y], K[Y]) < 0 ? F.substr(0, Y) + K[Y] + k.substr(Y + 1) : 0 <= te ? F.substr(0, te) + I[te] + k.substr(te + 1) : null;
                B(F[Y], me) < 0 && (te = Y);
              }
              return H < K.length && L === "next" ? F + k.substr(F.length) : H < F.length && L === "prev" ? F.substr(0, k.length) : te < 0 ? null : F.substr(0, te) + K[te] + k.substr(te + 1);
            }(T, x, c[C], f[C], u, h);
            N === null && P === null ? p = C + 1 : (P === null || 0 < u(P, N)) && (P = N);
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
      var Er = (Object.defineProperty(_e.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), _e.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? _t(this) : new this.Collection(this, function() {
            return et(e, t, !n, !r);
          });
        } catch {
          return Re(this, Ge);
        }
      }, _e.prototype.equals = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return wr(e);
        });
      }, _e.prototype.above = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return et(e, void 0, !0);
        });
      }, _e.prototype.aboveOrEqual = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return et(e, void 0, !1);
        });
      }, _e.prototype.below = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return et(void 0, e, !1, !0);
        });
      }, _e.prototype.belowOrEqual = function(e) {
        return e == null ? Re(this, Ge) : new this.Collection(this, function() {
          return et(void 0, e);
        });
      }, _e.prototype.startsWith = function(e) {
        return typeof e != "string" ? Re(this, lr) : this.between(e, e + lt, !0, !0);
      }, _e.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : an(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], lt);
      }, _e.prototype.equalsIgnoreCase = function(e) {
        return an(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, _e.prototype.anyOfIgnoreCase = function() {
        var e = Ie.apply(je, arguments);
        return e.length === 0 ? _t(this) : an(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, _e.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ie.apply(je, arguments);
        return e.length === 0 ? _t(this) : an(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, lt);
      }, _e.prototype.anyOf = function() {
        var e = this, t = Ie.apply(je, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return Re(this, Ge);
        }
        if (t.length === 0) return _t(this);
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
      }, _e.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, _e.prototype.noneOf = function() {
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
      }, _e.prototype.inAnyRange = function(T, t) {
        var n = this, r = this._cmp, a = this._ascending, o = this._descending, u = this._min, c = this._max;
        if (T.length === 0) return _t(this);
        if (!T.every(function(x) {
          return x[0] !== void 0 && x[1] !== void 0 && a(x[0], x[1]) <= 0;
        })) return Re(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", _.InvalidArgument);
        var f = !t || t.includeLowers !== !1, h = t && t.includeUppers === !0, y, l = a;
        function w(x, P) {
          return l(x[0], P[0]);
        }
        try {
          (y = T.reduce(function(x, P) {
            for (var C = 0, N = x.length; C < N; ++C) {
              var F = x[C];
              if (r(P[0], F[1]) < 0 && 0 < r(P[1], F[0])) {
                F[0] = u(F[0], P[0]), F[1] = c(F[1], P[1]);
                break;
              }
            }
            return C === N && x.push(P), x;
          }, [])).sort(w);
        } catch {
          return Re(this, Ge);
        }
        var p = 0, m = h ? function(x) {
          return 0 < a(x, y[p][1]);
        } : function(x) {
          return 0 <= a(x, y[p][1]);
        }, g = f ? function(x) {
          return 0 < o(x, y[p][0]);
        } : function(x) {
          return 0 <= o(x, y[p][0]);
        }, v = m, T = new this.Collection(this, function() {
          return et(y[0][0], y[y.length - 1][1], !f, !h);
        });
        return T._ondirectionchange = function(x) {
          l = x === "next" ? (v = m, a) : (v = g, o), y.sort(w);
        }, T._addAlgorithm(function(x, P, C) {
          for (var N, F = x.key; v(F); ) if (++p === y.length) return P(C), !1;
          return !m(N = F) && !g(N) || (n._cmp(F, y[p][1]) === 0 || n._cmp(F, y[p][0]) === 0 || P(function() {
            l === a ? x.continue(y[p][0]) : x.continue(y[p][1]);
          }), !1);
        }), T;
      }, _e.prototype.startsWithAnyOf = function() {
        var e = Ie.apply(je, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? _t(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + lt];
        })) : Re(this, "startsWithAnyOf() only works with strings");
      }, _e);
      function _e() {
      }
      function qe(e) {
        return fe(function(t) {
          return Kt(t), e(t.target.error), !1;
        });
      }
      function Kt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var jt = "storagemutated", Nn = "x-storagemutated-1", tt = kt(null, jt), ia = (Le.prototype._lock = function() {
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
            throw new _.DatabaseClosed(r);
          case "MissingAPIError":
            throw new _.MissingAPI(r.message, r);
          default:
            throw new _.OpenFailed(r);
        }
        if (!this.active) throw new _.TransactionInactive();
        return ne(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = fe(function(a) {
          Kt(a), t._reject(e.error);
        }), e.onabort = fe(function(a) {
          Kt(a), t.active && t._reject(new _.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = fe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && tt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Le.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ye(new _.ReadOnly("Transaction is readonly"));
        if (!this.active) return ye(new _.TransactionInactive());
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
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function o() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = o);
        }());
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
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new _.Abort()));
      }, Le.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (V(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new _.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, Le);
      function Le() {
      }
      function In(e, t, n, r, a, o, u, c) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: a, compound: o, src: (n && !u ? "&" : "") + (r ? "*" : "") + (a ? "++" : "") + Tr(t), type: c };
      }
      function Tr(e) {
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
      var qt = function(e) {
        try {
          return e.only([[]]), qt = function() {
            return [[]];
          }, [[]];
        } catch {
          return qt = function() {
            return lt;
          }, lt;
        }
      };
      function kn(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return Oe(n, t);
        } : function(n) {
          return Oe(n, e);
        };
        var t;
      }
      function _r(e) {
        return [].slice.call(e);
      }
      var sa = 0;
      function Lt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function ua(e, t, f) {
        function r(v) {
          if (v.type === 3) return null;
          if (v.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var p = v.lower, m = v.upper, g = v.lowerOpen, v = v.upperOpen;
          return p === void 0 ? m === void 0 ? null : t.upperBound(m, !!v) : m === void 0 ? t.lowerBound(p, !!g) : t.bound(p, m, !!g, !!v);
        }
        function a(w) {
          var p, m = w.name;
          return { name: m, schema: w, mutate: function(g) {
            var v = g.trans, T = g.type, x = g.keys, P = g.values, C = g.range;
            return new Promise(function(N, F) {
              N = fe(N);
              var I = v.objectStore(m), k = I.keyPath == null, K = T === "put" || T === "add";
              if (!K && T !== "delete" && T !== "deleteRange") throw new Error("Invalid operation type: " + T);
              var B, L = (x || P || { length: 1 }).length;
              if (x && P && x.length !== P.length) throw new Error("Given keys array must have same length as given values array.");
              if (L === 0) return N({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function H(De) {
                ++me, Kt(De);
              }
              var te = [], Y = [], me = 0;
              if (T === "deleteRange") {
                if (C.type === 4) return N({ numFailures: me, failures: Y, results: [], lastResult: void 0 });
                C.type === 3 ? te.push(B = I.clear()) : te.push(B = I.delete(r(C)));
              } else {
                var k = K ? k ? [P, x] : [P, null] : [x, null], z = k[0], Pe = k[1];
                if (K) for (var Ce = 0; Ce < L; ++Ce) te.push(B = Pe && Pe[Ce] !== void 0 ? I[T](z[Ce], Pe[Ce]) : I[T](z[Ce])), B.onerror = H;
                else for (Ce = 0; Ce < L; ++Ce) te.push(B = I[T](z[Ce])), B.onerror = H;
              }
              function vn(De) {
                De = De.target.result, te.forEach(function(ht, Jn) {
                  return ht.error != null && (Y[Jn] = ht.error);
                }), N({ numFailures: me, failures: Y, results: T === "delete" ? x : te.map(function(ht) {
                  return ht.result;
                }), lastResult: De });
              }
              B.onerror = function(De) {
                H(De), vn(De);
              }, B.onsuccess = vn;
            });
          }, getMany: function(g) {
            var v = g.trans, T = g.keys;
            return new Promise(function(x, P) {
              x = fe(x);
              for (var C, N = v.objectStore(m), F = T.length, I = new Array(F), k = 0, K = 0, B = function(te) {
                te = te.target, I[te._pos] = te.result, ++K === k && x(I);
              }, L = qe(P), H = 0; H < F; ++H) T[H] != null && ((C = N.get(T[H]))._pos = H, C.onsuccess = B, C.onerror = L, ++k);
              k === 0 && x(I);
            });
          }, get: function(g) {
            var v = g.trans, T = g.key;
            return new Promise(function(x, P) {
              x = fe(x);
              var C = v.objectStore(m).get(T);
              C.onsuccess = function(N) {
                return x(N.target.result);
              }, C.onerror = qe(P);
            });
          }, query: (p = h, function(g) {
            return new Promise(function(v, T) {
              v = fe(v);
              var x, P, C, k = g.trans, N = g.values, F = g.limit, B = g.query, I = F === 1 / 0 ? void 0 : F, K = B.index, B = B.range, k = k.objectStore(m), K = K.isPrimaryKey ? k : k.index(K.name), B = r(B);
              if (F === 0) return v({ result: [] });
              p ? ((I = N ? K.getAll(B, I) : K.getAllKeys(B, I)).onsuccess = function(L) {
                return v({ result: L.target.result });
              }, I.onerror = qe(T)) : (x = 0, P = !N && "openKeyCursor" in K ? K.openKeyCursor(B) : K.openCursor(B), C = [], P.onsuccess = function(L) {
                var H = P.result;
                return H ? (C.push(N ? H.value : H.primaryKey), ++x === F ? v({ result: C }) : void H.continue()) : v({ result: C });
              }, P.onerror = qe(T));
            });
          }), openCursor: function(g) {
            var v = g.trans, T = g.values, x = g.query, P = g.reverse, C = g.unique;
            return new Promise(function(N, F) {
              N = fe(N);
              var K = x.index, I = x.range, k = v.objectStore(m), k = K.isPrimaryKey ? k : k.index(K.name), K = P ? C ? "prevunique" : "prev" : C ? "nextunique" : "next", B = !T && "openKeyCursor" in k ? k.openKeyCursor(r(I), K) : k.openCursor(r(I), K);
              B.onerror = qe(F), B.onsuccess = fe(function(L) {
                var H, te, Y, me, z = B.result;
                z ? (z.___id = ++sa, z.done = !1, H = z.continue.bind(z), te = (te = z.continuePrimaryKey) && te.bind(z), Y = z.advance.bind(z), me = function() {
                  throw new Error("Cursor not stopped");
                }, z.trans = v, z.stop = z.continue = z.continuePrimaryKey = z.advance = function() {
                  throw new Error("Cursor not started");
                }, z.fail = fe(F), z.next = function() {
                  var Pe = this, Ce = 1;
                  return this.start(function() {
                    return Ce-- ? Pe.continue() : Pe.stop();
                  }).then(function() {
                    return Pe;
                  });
                }, z.start = function(Pe) {
                  function Ce() {
                    if (B.result) try {
                      Pe();
                    } catch (De) {
                      z.fail(De);
                    }
                    else z.done = !0, z.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, z.stop();
                  }
                  var vn = new Promise(function(De, ht) {
                    De = fe(De), B.onerror = qe(ht), z.fail = ht, z.stop = function(Jn) {
                      z.stop = z.continue = z.continuePrimaryKey = z.advance = me, De(Jn);
                    };
                  });
                  return B.onsuccess = fe(function(De) {
                    B.onsuccess = Ce, Ce();
                  }), z.continue = H, z.continuePrimaryKey = te, z.advance = Y, Ce(), vn;
                }, N(z)) : N(null);
              }, F);
            });
          }, count: function(g) {
            var v = g.query, T = g.trans, x = v.index, P = v.range;
            return new Promise(function(C, N) {
              var F = T.objectStore(m), I = x.isPrimaryKey ? F : F.index(x.name), F = r(P), I = F ? I.count(F) : I.count();
              I.onsuccess = fe(function(k) {
                return C(k.target.result);
              }), I.onerror = qe(N);
            });
          } };
        }
        var o, u, c, y = (u = f, c = _r((o = e).objectStoreNames), { schema: { name: o.name, tables: c.map(function(w) {
          return u.objectStore(w);
        }).map(function(w) {
          var p = w.keyPath, v = w.autoIncrement, m = q(p), g = {}, v = { name: w.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: p == null, compound: m, keyPath: p, autoIncrement: v, unique: !0, extractKey: kn(p) }, indexes: _r(w.indexNames).map(function(T) {
            return w.index(T);
          }).map(function(C) {
            var x = C.name, P = C.unique, N = C.multiEntry, C = C.keyPath, N = { name: x, compound: q(C), keyPath: C, unique: P, multiEntry: N, extractKey: kn(C) };
            return g[Lt(C)] = N;
          }), getIndexByKeyPath: function(T) {
            return g[Lt(T)];
          } };
          return g[":id"] = v.primaryKey, p != null && (g[Lt(p)] = v.primaryKey), v;
        }) }, hasGetAll: 0 < c.length && "getAll" in u.objectStore(c[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), f = y.schema, h = y.hasGetAll, y = f.tables.map(a), l = {};
        return y.forEach(function(w) {
          return l[w.name] = w;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(w) {
          if (!l[w]) throw new Error("Table '".concat(w, "' not found"));
          return l[w];
        }, MIN_KEY: -1 / 0, MAX_KEY: qt(t), schema: f };
      }
      function ca(e, t, n, r) {
        var a = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = ua(t, a, r), e.dbcore.reduce(function(o, u) {
          return u = u.create, d(d({}, o), u(o));
        }, r)) };
      }
      function on(e, r) {
        var n = r.db, r = ca(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(a) {
          var o = a.name;
          e.core.schema.tables.some(function(u) {
            return u.name === o;
          }) && (a.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = a.core));
        });
      }
      function sn(e, t, n, r) {
        n.forEach(function(a) {
          var o = r[a];
          t.forEach(function(u) {
            var c = function f(h, y) {
              return $(h, y) || (h = ie(h)) && f(h, y);
            }(u, a);
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
        n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Rn("$meta", Or("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, a);
        o.create(n), o._completion.catch(r);
        var u = o._reject.bind(o), c = U.transless || U;
        $e(function() {
          return U.trans = o, U.transless = c, t !== 0 ? (on(e, n), h = t, ((f = o).storeNames.includes("$meta") ? f.table("$meta").get("version").then(function(y) {
            return y ?? h;
          }) : j.resolve(h)).then(function(y) {
            return w = y, p = o, m = n, g = [], y = (l = e)._versions, v = l._dbSchema = cn(0, l.idbdb, m), (y = y.filter(function(T) {
              return T._cfg.version >= w;
            })).length !== 0 ? (y.forEach(function(T) {
              g.push(function() {
                var x = v, P = T._cfg.dbschema;
                ln(l, x, m), ln(l, P, m), v = l._dbSchema = P;
                var C = Bn(x, P);
                C.add.forEach(function(K) {
                  Kn(m, K[0], K[1].primKey, K[1].indexes);
                }), C.change.forEach(function(K) {
                  if (K.recreate) throw new _.Upgrade("Not yet support for changing primary key");
                  var B = m.objectStore(K.name);
                  K.add.forEach(function(L) {
                    return un(B, L);
                  }), K.change.forEach(function(L) {
                    B.deleteIndex(L.name), un(B, L);
                  }), K.del.forEach(function(L) {
                    return B.deleteIndex(L);
                  });
                });
                var N = T._cfg.contentUpgrade;
                if (N && T._cfg.version > w) {
                  on(l, m), p._memoizedTables = {};
                  var F = mt(P);
                  C.del.forEach(function(K) {
                    F[K] = x[K];
                  }), Fn(l, [l.Transaction.prototype]), sn(l, [l.Transaction.prototype], M(F), F), p.schema = F;
                  var I, k = Be(N);
                  return k && wt(), C = j.follow(function() {
                    var K;
                    (I = N(p)) && k && (K = Je.bind(null, null), I.then(K, K));
                  }), I && typeof I.then == "function" ? j.resolve(I) : C.then(function() {
                    return I;
                  });
                }
              }), g.push(function(x) {
                var P, C, N = T._cfg.dbschema;
                P = N, C = x, [].slice.call(C.db.objectStoreNames).forEach(function(F) {
                  return P[F] == null && C.db.deleteObjectStore(F);
                }), Fn(l, [l.Transaction.prototype]), sn(l, [l.Transaction.prototype], l._storeNames, l._dbSchema), p.schema = l._dbSchema;
              }), g.push(function(x) {
                l.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(l.idbdb.version / 10) === T._cfg.version ? (l.idbdb.deleteObjectStore("$meta"), delete l._dbSchema.$meta, l._storeNames = l._storeNames.filter(function(P) {
                  return P !== "$meta";
                })) : x.objectStore("$meta").put(T._cfg.version, "version"));
              });
            }), function T() {
              return g.length ? j.resolve(g.shift()(p.idbtrans)).then(T) : j.resolve();
            }().then(function() {
              Sr(v, m);
            })) : j.resolve();
            var l, w, p, m, g, v;
          }).catch(u)) : (M(a).forEach(function(y) {
            Kn(n, y, a[y].primKey, a[y].indexes);
          }), on(e, n), void j.follow(function() {
            return e.on.populate.fire(o);
          }).catch(u));
          var f, h;
        });
      }
      function pa(e, t) {
        Sr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = cn(0, e.idbdb, t);
        ln(e, e._dbSchema, t);
        for (var r = 0, a = Bn(n, e._dbSchema).change; r < a.length; r++) {
          var o = function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var c = t.objectStore(u.name);
            u.add.forEach(function(f) {
              Ne && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(f.src)), un(c, f);
            });
          }(a[r]);
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
          return un(a, o);
        }), a;
      }
      function Sr(e, t) {
        M(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (Ne && console.debug("Dexie: Creating missing table", n), Kn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function un(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function cn(e, t, n) {
        var r = {};
        return Se(t.objectStoreNames, 0).forEach(function(a) {
          for (var o = n.objectStore(a), u = In(Tr(h = o.keyPath), h || "", !0, !1, !!o.autoIncrement, h && typeof h != "string", !0), c = [], f = 0; f < o.indexNames.length; ++f) {
            var y = o.index(o.indexNames[f]), h = y.keyPath, y = In(y.name, h, !!y.unique, !!y.multiEntry, !1, h && typeof h != "string", !1);
            c.push(y);
          }
          r[a] = Rn(a, u, c);
        }), r;
      }
      function ln(e, t, n) {
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
      function Or(e) {
        return e.split(",").map(function(t, n) {
          var o = t.split(":"), r = (a = o[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = o[0].trim()).replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return In(a, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), q(o), n === 0, r);
        });
      }
      var da = (St.prototype._createTableSchema = Rn, St.prototype._parseIndexSyntax = Or, St.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        M(e).forEach(function(r) {
          if (e[r] !== null) {
            var a = n._parseIndexSyntax(e[r]), o = a.shift();
            if (!o) throw new _.Schema("Invalid schema for table " + r + ": " + e[r]);
            if (o.unique = !0, o.multi) throw new _.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(u) {
              if (u.auto) throw new _.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!u.keyPath) throw new _.Schema("Index must have a name and cannot be an empty string");
            }), a = n._createTableSchema(r, o, a), t[r] = a;
          }
        });
      }, St.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? G(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, a = {};
        return n.forEach(function(o) {
          G(r, o._cfg.storesSource), a = o._cfg.dbschema = {}, o._parseStoresSpec(r, a);
        }), t._dbSchema = a, Fn(t, [t._allTables, t, t.Transaction.prototype]), sn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], M(a), a), t._storeNames = M(a), this;
      }, St.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = vt(this._cfg.contentUpgrade || Q, e), this;
      }, St);
      function St() {
      }
      function jn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Qe(Zt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
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
      function Mt(e, t, n) {
        var r = Z(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Mn(e)) return G(e, { from: t, to: n, d: 1 });
          var a = e.l, r = e.r;
          if (Z(n, e.from) < 0) return a ? Mt(a, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, Ar(e);
          if (0 < Z(t, e.to)) return r ? Mt(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, Ar(e);
          Z(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < Z(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, a && !e.l && Ut(e, a), r && n && Ut(e, r);
        }
      }
      function Ut(e, t) {
        Mn(t) || function n(r, f) {
          var o = f.from, u = f.to, c = f.l, f = f.r;
          Mt(r, o, u), c && n(r, c), f && n(r, f);
        }(e, t);
      }
      function xr(e, t) {
        var n = fn(t), r = n.next();
        if (r.done) return !1;
        for (var a = r.value, o = fn(e), u = o.next(a.from), c = u.value; !r.done && !u.done; ) {
          if (Z(c.from, a.to) <= 0 && 0 <= Z(c.to, a.from)) return !0;
          Z(a.from, c.from) < 0 ? a = (r = n.next(c.from)).value : c = (u = o.next(a.from)).value;
        }
        return !1;
      }
      function fn(e) {
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
      function pn(e, t) {
        return M(t).forEach(function(n) {
          e[n] ? Ut(e[n], t[n]) : e[n] = function r(a) {
            var o, u, c = {};
            for (o in a) V(a, o) && (u = a[o], c[o] = !u || typeof u != "object" || Fe.has(u.constructor) ? u : r(u));
            return c;
          }(t[n]);
        }), e;
      }
      function Un(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && xr(t[n], e[n]);
        });
      }
      X(Ae.prototype, ((ke = { add: function(e) {
        return Ut(this, e), this;
      }, addKey: function(e) {
        return Mt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Mt(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = fn(this).next(e).value;
        return t && Z(t.from, e) <= 0 && 0 <= Z(t.to, e);
      } })[yt] = function() {
        return fn(this);
      }, ke));
      var pt = {}, Vn = {}, Gn = !1;
      function dn(e) {
        pn(Vn, e), Gn || (Gn = !0, setTimeout(function() {
          Gn = !1, Qn(Vn, !(Vn = {}));
        }, 0));
      }
      function Qn(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, a = Object.values(pt); r < a.length; r++) Cr(u = a[r], e, n, t);
        else for (var o in e) {
          var u, c = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          c && (o = c[1], c = c[2], (u = pt["idb://".concat(o, "/").concat(c)]) && Cr(u, e, n, t));
        }
        n.forEach(function(f) {
          return f();
        });
      }
      function Cr(e, t, n, r) {
        for (var a = [], o = 0, u = Object.entries(e.queries.query); o < u.length; o++) {
          for (var c = u[o], f = c[0], h = [], y = 0, l = c[1]; y < l.length; y++) {
            var w = l[y];
            Un(t, w.obsSet) ? w.subscribers.forEach(function(v) {
              return n.add(v);
            }) : r && h.push(w);
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
          if (t.openCanceller !== r) throw new _.DatabaseClosed("db.open() was cancelled");
        }
        function c() {
          return new j(function(w, p) {
            if (u(), !n) throw new _.MissingAPI();
            var m = e.name, g = t.autoSchema || !a ? n.open(m) : n.open(m, a);
            if (!g) throw new _.MissingAPI();
            g.onerror = qe(p), g.onblocked = fe(e._fireOnBlocked), g.onupgradeneeded = fe(function(v) {
              var T;
              y = g.transaction, t.autoSchema && !e._options.allowEmptyDB ? (g.onerror = Kt, y.abort(), g.result.close(), (T = n.deleteDatabase(m)).onsuccess = T.onerror = fe(function() {
                p(new _.NoSuchDatabase("Database ".concat(m, " doesnt exist")));
              })) : (y.onerror = qe(p), v = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, l = v < 1, e.idbdb = g.result, o && pa(e, y), fa(e, v / 10, y, p));
            }, p), g.onsuccess = fe(function() {
              y = null;
              var v, T, x, P, C, N = e.idbdb = g.result, F = Se(N.objectStoreNames);
              if (0 < F.length) try {
                var I = N.transaction((P = F).length === 1 ? P[0] : P, "readonly");
                if (t.autoSchema) T = N, x = I, (v = e).verno = T.version / 10, x = v._dbSchema = cn(0, T, x), v._storeNames = Se(T.objectStoreNames, 0), sn(v, [v._allTables], M(x), x);
                else if (ln(e, e._dbSchema, I), ((C = Bn(cn(0, (C = e).idbdb, I), C._dbSchema)).add.length || C.change.some(function(k) {
                  return k.add.length || k.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), N.close(), a = N.version + 1, o = !0, w(c());
                on(e, I);
              } catch {
              }
              Et.push(e), N.onversionchange = fe(function(k) {
                t.vcFired = !0, e.on("versionchange").fire(k);
              }), N.onclose = fe(function(k) {
                e.on("close").fire(k);
              }), l && (C = e._deps, I = m, N = C.indexedDB, C = C.IDBKeyRange, qn(N) || I === Zt || jn(N, C).put({ name: I }).catch(Q)), w();
            }, p);
          }).catch(function(w) {
            switch (w?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
                break;
              case "VersionError":
                if (0 < a) return a = 0, c();
            }
            return j.reject(w);
          });
        }
        var f, h = t.dbReadyResolve, y = null, l = !1;
        return j.race([r, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(w) {
          function p() {
            return indexedDB.databases().finally(w);
          }
          f = setInterval(p, 100), p();
        }).finally(function() {
          return clearInterval(f);
        }) : Promise.resolve()).then(c)]).then(function() {
          return u(), t.onReadyBeingFired = [], j.resolve(Ln(function() {
            return e.on.ready.fire(e.vip);
          })).then(function w() {
            if (0 < t.onReadyBeingFired.length) {
              var p = t.onReadyBeingFired.reduce(vt, Q);
              return t.onReadyBeingFired = [], j.resolve(Ln(function() {
                return p(e.vip);
              })).then(w);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(w) {
          t.dbOpenError = w;
          try {
            y && y.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), ye(w);
        }).finally(function() {
          t.openComplete = !0, h();
        }).then(function() {
          var w;
          return l && (w = {}, e.tables.forEach(function(p) {
            p.schema.indexes.forEach(function(m) {
              m.name && (w["idb://".concat(e.name, "/").concat(p.name, "/").concat(m.name)] = new Ae(-1 / 0, [[[]]]));
            }), w["idb://".concat(e.name, "/").concat(p.name, "/")] = w["idb://".concat(e.name, "/").concat(p.name, "/:dels")] = new Ae(-1 / 0, [[[]]]);
          }), tt(jt).fire(w), Qn(w, !0)), e;
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
      function hn(e, t, n) {
        for (var r = q(e) ? e.slice() : [e], a = 0; a < n; ++a) r.push(t);
        return r;
      }
      var ma = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return d(d({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, a = {}, o = [];
          function u(l, w, p) {
            var m = Lt(l), g = a[m] = a[m] || [], v = l == null ? 0 : typeof l == "string" ? 1 : l.length, T = 0 < w, T = d(d({}, p), { name: T ? "".concat(m, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: T, keyTail: w, keyLength: v, extractKey: kn(l), unique: !T && p.unique });
            return g.push(T), T.isPrimaryKey || o.push(T), 1 < v && u(v === 2 ? l[0] : l.slice(0, v - 1), w + 1, p), g.sort(function(x, P) {
              return x.keyTail - P.keyTail;
            }), T;
          }
          t = u(r.primaryKey.keyPath, 0, r.primaryKey), a[":id"] = [t];
          for (var c = 0, f = r.indexes; c < f.length; c++) {
            var h = f[c];
            u(h.keyPath, 0, h);
          }
          function y(l) {
            var w, p = l.query.index;
            return p.isVirtual ? d(d({}, l), { query: { index: p.lowLevelIndex, range: (w = l.query.range, p = p.keyTail, { type: w.type === 1 ? 2 : w.type, lower: hn(w.lower, w.lowerOpen ? e.MAX_KEY : e.MIN_KEY, p), lowerOpen: !0, upper: hn(w.upper, w.upperOpen ? e.MIN_KEY : e.MAX_KEY, p), upperOpen: !0 }) } }) : l;
          }
          return d(d({}, n), { schema: d(d({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(l) {
            return (l = a[Lt(l)]) && l[0];
          } }), count: function(l) {
            return n.count(y(l));
          }, query: function(l) {
            return n.query(y(l));
          }, openCursor: function(l) {
            var w = l.query.index, p = w.keyTail, m = w.isVirtual, g = w.keyLength;
            return m ? n.openCursor(y(l)).then(function(T) {
              return T && v(T);
            }) : n.openCursor(l);
            function v(T) {
              return Object.create(T, { continue: { value: function(x) {
                x != null ? T.continue(hn(x, l.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : l.unique ? T.continue(T.key.slice(0, g).concat(l.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : T.continue();
              } }, continuePrimaryKey: { value: function(x, P) {
                T.continuePrimaryKey(hn(x, e.MAX_KEY, p), P);
              } }, primaryKey: { get: function() {
                return T.primaryKey;
              } }, key: { get: function() {
                var x = T.key;
                return g === 1 ? x[0] : x.slice(0, g);
              } }, value: { get: function() {
                return T.value;
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
                  return function l(w, p, m) {
                    return n.query({ trans: w, values: !1, query: { index: r, range: p }, limit: m }).then(function(g) {
                      var v = g.result;
                      return y({ type: "delete", keys: v, trans: w }).then(function(T) {
                        return 0 < T.numFailures ? Promise.reject(T.failures[0]) : v.length < m ? { failures: [], numFailures: 0, lastResult: void 0 } : l(w, d(d({}, p), { lower: v[v.length - 1], lowerOpen: !0 }), m);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return n.mutate(a);
            function y(l) {
              var w, p, m, g = U.trans, v = l.keys || Xn(r, l);
              if (!v) throw new Error("Keys missing");
              return (l = l.type === "add" || l.type === "put" ? d(d({}, l), { keys: v }) : d({}, l)).type !== "delete" && (l.values = D([], l.values)), l.keys && (l.keys = D([], l.keys)), w = n, m = v, ((p = l).type === "add" ? Promise.resolve([]) : w.getMany({ trans: p.trans, keys: m, cache: "immutable" })).then(function(T) {
                var x = v.map(function(P, C) {
                  var N, F, I, k = T[C], K = { onerror: null, onsuccess: null };
                  return l.type === "delete" ? c.fire.call(K, P, k, g) : l.type === "add" || k === void 0 ? (N = f.fire.call(K, P, l.values[C], g), P == null && N != null && (l.keys[C] = P = N, r.outbound || se(l.values[C], r.keyPath, P))) : (N = Yn(k, l.values[C]), (F = h.fire.call(K, N, P, k, g)) && (I = l.values[C], Object.keys(F).forEach(function(B) {
                    V(I, B) ? I[B] = F[B] : se(I, B, F[B]);
                  }))), K;
                });
                return n.mutate(l).then(function(P) {
                  for (var C = P.failures, N = P.results, F = P.numFailures, P = P.lastResult, I = 0; I < v.length; ++I) {
                    var k = (N || v)[I], K = x[I];
                    k == null ? K.onerror && K.onerror(C[I]) : K.onsuccess && K.onsuccess(l.type === "put" && T[I] ? l.values[I] : k);
                  }
                  return { failures: C, results: N, numFailures: F, lastResult: P };
                }).catch(function(P) {
                  return x.forEach(function(C) {
                    return C.onerror && C.onerror(P);
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
          if (U.subscr && a !== "readonly") throw new _.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(U.querier));
          return e.transaction(r, a, o);
        }, table: function(r) {
          var a = e.table(r), o = a.schema, u = o.primaryKey, l = o.indexes, c = u.extractKey, f = u.outbound, h = u.autoIncrement && l.filter(function(p) {
            return p.compound && p.keyPath.includes(u.keyPath);
          }), y = d(d({}, a), { mutate: function(p) {
            function m(B) {
              return B = "idb://".concat(t, "/").concat(r, "/").concat(B), P[B] || (P[B] = new Ae());
            }
            var g, v, T, x = p.trans, P = p.mutatedParts || (p.mutatedParts = {}), C = m(""), N = m(":dels"), F = p.type, K = p.type === "deleteRange" ? [p.range] : p.type === "delete" ? [p.keys] : p.values.length < 50 ? [Xn(u, p).filter(function(B) {
              return B;
            }), p.values] : [], I = K[0], k = K[1], K = p.trans._cache;
            return q(I) ? (C.addKeys(I), (K = F === "delete" || I.length === k.length ? Dr(I, K) : null) || N.addKeys(I), (K || k) && (g = m, v = K, T = k, o.indexes.forEach(function(B) {
              var L = g(B.name || "");
              function H(Y) {
                return Y != null ? B.extractKey(Y) : null;
              }
              function te(Y) {
                return B.multiEntry && q(Y) ? Y.forEach(function(me) {
                  return L.addKey(me);
                }) : L.addKey(Y);
              }
              (v || T).forEach(function(Y, Pe) {
                var z = v && H(v[Pe]), Pe = T && H(T[Pe]);
                Z(z, Pe) !== 0 && (z != null && te(z), Pe != null && te(Pe));
              });
            }))) : I ? (k = { from: (k = I.lower) !== null && k !== void 0 ? k : e.MIN_KEY, to: (k = I.upper) !== null && k !== void 0 ? k : e.MAX_KEY }, N.add(k), C.add(k)) : (C.add(n), N.add(n), o.indexes.forEach(function(B) {
              return m(B.name).add(n);
            })), a.mutate(p).then(function(B) {
              return !I || p.type !== "add" && p.type !== "put" || (C.addKeys(B.results), h && h.forEach(function(L) {
                for (var H = p.values.map(function(z) {
                  return L.extractKey(z);
                }), te = L.keyPath.findIndex(function(z) {
                  return z === u.keyPath;
                }), Y = 0, me = B.results.length; Y < me; ++Y) H[Y][te] = B.results[Y];
                m(L.name).addKeys(H);
              })), x.mutatedParts = pn(x.mutatedParts || {}, P), B;
            });
          } }), l = function(m) {
            var g = m.query, m = g.index, g = g.range;
            return [m, new Ae((m = g.lower) !== null && m !== void 0 ? m : e.MIN_KEY, (g = g.upper) !== null && g !== void 0 ? g : e.MAX_KEY)];
          }, w = { get: function(p) {
            return [u, new Ae(p.key)];
          }, getMany: function(p) {
            return [u, new Ae().addKeys(p.keys)];
          }, count: l, query: l, openCursor: l };
          return M(w).forEach(function(p) {
            y[p] = function(m) {
              var g = U.subscr, v = !!g, T = Nr(U, a) && Ir(p, m) ? m.obsSet = {} : g;
              if (v) {
                var x = function(k) {
                  return k = "idb://".concat(t, "/").concat(r, "/").concat(k), T[k] || (T[k] = new Ae());
                }, P = x(""), C = x(":dels"), g = w[p](m), v = g[0], g = g[1];
                if ((p === "query" && v.isPrimaryKey && !m.values ? C : x(v.name || "")).add(g), !v.isPrimaryKey) {
                  if (p !== "count") {
                    var N = p === "query" && f && m.values && a.query(d(d({}, m), { values: !1 }));
                    return a[p].apply(this, arguments).then(function(k) {
                      if (p === "query") {
                        if (f && m.values) return N.then(function(H) {
                          return H = H.result, P.addKeys(H), k;
                        });
                        var K = m.values ? k.result.map(c) : k.result;
                        (m.values ? P : C).addKeys(K);
                      } else if (p === "openCursor") {
                        var B = k, L = m.values;
                        return B && Object.create(B, { key: { get: function() {
                          return C.addKey(B.primaryKey), B.key;
                        } }, primaryKey: { get: function() {
                          var H = B.primaryKey;
                          return C.addKey(H), H;
                        } }, value: { get: function() {
                          return L && P.addKey(B.primaryKey), B.value;
                        } } });
                      }
                      return k;
                    });
                  }
                  C.add(n);
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
      function kr(e, t, w, r, a, o) {
        if (!w || w.length === 0) return e;
        var u = t.query.index, c = u.multiEntry, f = t.query.range, h = r.schema.primaryKey.extractKey, y = u.extractKey, l = (u.lowLevelIndex || u).extractKey, w = w.reduce(function(p, m) {
          var g = p, v = [];
          if (m.type === "add" || m.type === "put") for (var T = new Ae(), x = m.values.length - 1; 0 <= x; --x) {
            var P, C = m.values[x], N = h(C);
            T.hasKey(N) || (P = y(C), (c && q(P) ? P.some(function(B) {
              return Hn(B, f);
            }) : Hn(P, f)) && (T.addKey(N), v.push(C)));
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
        return w === e ? e : (w.sort(function(p, m) {
          return Z(l(p), l(m)) || Z(h(p), h(m));
        }), t.limit && t.limit < 1 / 0 && (w.length > t.limit ? w.length = t.limit : e.length === t.limit && w.length < t.limit && (a.dirty = !0)), o ? Object.freeze(w) : w);
      }
      function Fr(e, t) {
        return Z(e.lower, t.lower) === 0 && Z(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ba(e, t) {
        return function(n, r, a, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = Z(n, r)) === 0) {
            if (a && o) return 0;
            if (a) return 1;
            if (o) return -1;
          }
          return r;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(n, r, a, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = Z(n, r)) === 0) {
            if (a && o) return 0;
            if (a) return -1;
            if (o) return 1;
          }
          return r;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function wa(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var a, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (a = e, o = t, setTimeout(function() {
            a.subscribers.size === 0 && Ve(o, a);
          }, 3e3));
        });
      }
      var Ea = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return d(d({}, e), { transaction: function(n, r, a) {
          var o, u, c = e.transaction(n, r, a);
          return r === "readwrite" && (u = (o = new AbortController()).signal, a = function(f) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var h = /* @__PURE__ */ new Set(), y = 0, l = n; y < l.length; y++) {
                  var w = l[y], p = pt["idb://".concat(t, "/").concat(w)];
                  if (p) {
                    var m = e.table(w), g = p.optimisticOps.filter(function(L) {
                      return L.trans === c;
                    });
                    if (c._explicit && f && c.mutatedParts) for (var v = 0, T = Object.values(p.queries.query); v < T.length; v++) for (var x = 0, P = (F = T[v]).slice(); x < P.length; x++) Un((I = P[x]).obsSet, c.mutatedParts) && (Ve(F, I), I.subscribers.forEach(function(L) {
                      return h.add(L);
                    }));
                    else if (0 < g.length) {
                      p.optimisticOps = p.optimisticOps.filter(function(L) {
                        return L.trans !== c;
                      });
                      for (var C = 0, N = Object.values(p.queries.query); C < N.length; C++) for (var F, I, k, K = 0, B = (F = N[C]).slice(); K < B.length; K++) (I = B[K]).res != null && c.mutatedParts && (f && !I.dirty ? (k = Object.isFrozen(I.res), k = kr(I.res, I.req, g, m, I, k), I.dirty ? (Ve(F, I), I.subscribers.forEach(function(L) {
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
            })) ? (c.optimisticOps.push(o), o.mutatedParts && dn(o.mutatedParts), u.then(function(f) {
              0 < f.numFailures && (Ve(c.optimisticOps, o), (f = Rr(0, o, f)) && c.optimisticOps.push(f), o.mutatedParts && dn(o.mutatedParts));
            }), u.catch(function() {
              Ve(c.optimisticOps, o), o.mutatedParts && dn(o.mutatedParts);
            })) : u.then(function(f) {
              var h = Rr(0, d(d({}, o), { values: o.values.map(function(y, l) {
                var w;
                return f.failures[l] || (y = (w = a.keyPath) !== null && w !== void 0 && w.includes(".") ? we(y) : d({}, y), se(y, a.keyPath, f.results[l])), y;
              }) }), f);
              c.optimisticOps.push(h), queueMicrotask(function() {
                return o.mutatedParts && dn(o.mutatedParts);
              });
            }), u) : r.mutate(o);
          }, query: function(o) {
            if (!Nr(U, r) || !Ir("query", o)) return r.query(o);
            var u = ((h = U.trans) === null || h === void 0 ? void 0 : h.db._options.cache) === "immutable", l = U, c = l.requery, f = l.signal, h = function(m, g, v, T) {
              var x = pt["idb://".concat(m, "/").concat(g)];
              if (!x) return [];
              if (!(g = x.queries[v])) return [null, !1, x, null];
              var P = g[(T.query ? T.query.index.name : null) || ""];
              if (!P) return [null, !1, x, null];
              switch (v) {
                case "query":
                  var C = P.find(function(N) {
                    return N.req.limit === T.limit && N.req.values === T.values && Fr(N.req.query.range, T.query.range);
                  });
                  return C ? [C, !0, x, P] : [P.find(function(N) {
                    return ("limit" in N.req ? N.req.limit : 1 / 0) >= T.limit && (!T.values || N.req.values) && ba(N.req.query.range, T.query.range);
                  }), !1, x, P];
                case "count":
                  return C = P.find(function(N) {
                    return Fr(N.req.query.range, T.query.range);
                  }), [C, !!C, x, P];
              }
            }(t, n, "query", o), y = h[0], l = h[1], w = h[2], p = h[3];
            return y && l ? y.obsSet = o.obsSet : (l = r.query(o).then(function(m) {
              var g = m.result;
              if (y && (y.res = g), u) {
                for (var v = 0, T = g.length; v < T; ++v) Object.freeze(g[v]);
                Object.freeze(g);
              } else m.result = we(g);
              return m;
            }).catch(function(m) {
              return p && y && Ve(p, y), Promise.reject(m);
            }), y = { obsSet: o.obsSet, promise: l, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, p ? p.push(y) : (p = [y], (w = w || (pt["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = p)), wa(y, p, c, f), y.promise.then(function(m) {
              return { result: kr(m.result, o, w?.optimisticOps, r, y, u) };
            });
          } });
        } });
      } };
      function mn(e, t) {
        return new Proxy(e, { get: function(n, r, a) {
          return r === "db" ? t : Reflect.get(n, r, a);
        } });
      }
      var Qe = (ve.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new _.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new _.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(la), n.stores({}), this._state.autoSchema = !1, n);
      }, ve.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || U.letThrough || this._vip) ? e() : new j(function(n, r) {
          if (t._state.openComplete) return r(new _.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new _.DatabaseClosed());
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
        var e = this._state, t = Et.indexOf(this);
        if (0 <= t && Et.splice(t, 1), this.idbdb) {
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
        t ? (n.isBeingOpened && n.cancelOpen(new _.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new _.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
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
              f = t._deps, h = t.name, y = f.indexedDB, f = f.IDBKeyRange, qn(y) || h === Zt || jn(y, f).delete(h).catch(Q), a();
            }), c.onerror = qe(o), c.onblocked = t._fireOnBlocked;
          }
          if (n) throw new _.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
          if (a < 2) throw new _.InvalidArgument("Too few arguments");
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
            if (e != "rw" && e != Pn) throw new _.InvalidArgument("Invalid transaction mode: " + e);
            o = Pn;
          }
          if (a) {
            if (a.mode === An && o === Pn) {
              if (!c) throw new _.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && u.forEach(function(h) {
              if (a && a.storeNames.indexOf(h) === -1) {
                if (!c) throw new _.SubTransaction("Table " + h + " not included in parent transaction.");
                a = null;
              }
            }), c && a && !a.active && (a = null);
          }
        } catch (h) {
          return a ? a._promise(null, function(y, l) {
            l(h);
          }) : ye(h);
        }
        var f = (function h(y, l, w, p, m) {
          return j.resolve().then(function() {
            var g = U.transless || U, v = y._createTransaction(l, w, y._dbSchema, p);
            if (v.explicit = !0, g = { trans: v, transless: g }, p) v.idbtrans = p.idbtrans;
            else try {
              v.create(), v.idbtrans._explicit = !0, y._state.PR1398_maxLoop = 3;
            } catch (P) {
              return P.name === s.InvalidState && y.isOpen() && 0 < --y._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), y.close({ disableAutoOpen: !1 }), y.open().then(function() {
                return h(y, l, w, null, m);
              })) : ye(P);
            }
            var T, x = Be(m);
            return x && wt(), g = j.follow(function() {
              var P;
              (T = m.call(v, v)) && (x ? (P = Je.bind(null, null), T.then(P, P)) : typeof T.next == "function" && typeof T.throw == "function" && (T = zn(T)));
            }, g), (T && typeof T.then == "function" ? j.resolve(T).then(function(P) {
              return v.active ? P : ye(new _.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : g.then(function() {
              return T;
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
        if (!V(this._allTables, e)) throw new _.InvalidTable("Table ".concat(e, " does not exist"));
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
        }), h.openCanceller = new j(function(l, w) {
          h.cancelOpen = w;
        }), this._state = h, this.name = e, this.on = kt(this, "populate", "blocked", "versionchange", "close", { ready: [vt, Q] }), this.once = function(l, w) {
          var p = function() {
            for (var m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
            n.on(l).unsubscribe(p), w.apply(n, m);
          };
          return n.on(l, p);
        }, this.on.ready.subscribe = le(this.on.ready.subscribe, function(l) {
          return function(w, p) {
            ve.vip(function() {
              var m, g = n._state;
              g.openComplete ? (g.dbOpenError || j.resolve().then(w), p && l(w)) : g.onReadyBeingFired ? (g.onReadyBeingFired.push(w), p && l(w)) : (l(w), m = n, p || l(function v() {
                m.on.ready.unsubscribe(w), m.on.ready.unsubscribe(v);
              }));
            });
          };
        }), this.Collection = (a = this, Ft(ra.prototype, function(T, v) {
          this.db = a;
          var p = fr, m = null;
          if (v) try {
            p = v();
          } catch (x) {
            m = x;
          }
          var g = T._ctx, v = g.table, T = v.hook.reading.fire;
          this._ctx = { table: v, index: g.index, isPrimKey: !g.index || v.schema.primKey.keyPath && g.index === v.schema.primKey.name, range: p, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: m, or: g.or, valueMapper: T !== ue ? T : null };
        })), this.Table = (o = this, Ft(mr.prototype, function(l, w, p) {
          this.db = o, this._tx = p, this.name = l, this.schema = w, this.hook = o._allTables[l] ? o._allTables[l].hook : kt(null, { creating: [He, Q], reading: [xe, ue], updating: [Ke, Q], deleting: [Ee, Q] });
        })), this.Transaction = (u = this, Ft(ia.prototype, function(l, w, p, m, g) {
          var v = this;
          l !== "readonly" && w.forEach(function(T) {
            T = (T = p[T]) === null || T === void 0 ? void 0 : T.yProps, T && (w = w.concat(T.map(function(x) {
              return x.updatesTable;
            })));
          }), this.db = u, this.mode = l, this.storeNames = w, this.schema = p, this.chromeTransactionDurability = m, this.idbtrans = null, this.on = kt(this, "complete", "error", "abort"), this.parent = g || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(T, x) {
            v._resolve = T, v._reject = x;
          }), this._completion.then(function() {
            v.active = !1, v.on.complete.fire();
          }, function(T) {
            var x = v.active;
            return v.active = !1, v.on.error.fire(T), v.parent ? v.parent._reject(T) : x && v.idbtrans && v.idbtrans.abort(), ye(T);
          });
        })), this.Version = (c = this, Ft(da.prototype, function(l) {
          this.db = c, this._cfg = { version: l, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (f = this, Ft(Er.prototype, function(l, w, p) {
          if (this.db = f, this._ctx = { table: l, index: w === ":id" ? null : w, or: p }, this._cmp = this._ascending = Z, this._descending = function(m, g) {
            return Z(g, m);
          }, this._max = function(m, g) {
            return 0 < Z(m, g) ? m : g;
          }, this._min = function(m, g) {
            return Z(m, g) < 0 ? m : g;
          }, this._IDBKeyRange = f._deps.IDBKeyRange, !this._IDBKeyRange) throw new _.MissingAPI();
        })), this.on("versionchange", function(l) {
          0 < l.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(l) {
          !l.newVersion || l.newVersion < l.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(l.oldVersion / 10));
        }), this._maxKey = qt(t.IDBKeyRange), this._createTransaction = function(l, w, p, m) {
          return new n.Transaction(l, w, p, n._options.chromeTransactionDurability, m);
        }, this._fireOnBlocked = function(l) {
          n.on("blocked").fire(l), Et.filter(function(w) {
            return w.name === n.name && w !== n && !w._state.vcFired;
          }).map(function(w) {
            return w.on("versionchange").fire(l);
          });
        }, this.use(va), this.use(Ea), this.use(ga), this.use(ma), this.use(ya);
        var y = new Proxy(this, { get: function(l, w, p) {
          if (w === "_vip") return !0;
          if (w === "table") return function(g) {
            return mn(n.table(g), y);
          };
          var m = Reflect.get(l, w, p);
          return m instanceof mr ? mn(m, y) : w === "tables" ? m.map(function(g) {
            return mn(g, y);
          }) : w === "_createTransaction" ? function() {
            return mn(m.apply(this, arguments), y);
          } : m;
        } });
        this.vip = y, r.forEach(function(l) {
          return l(n);
        });
      }
      var yn, ke = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ta = (Wn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Wn.prototype[ke] = function() {
        return this;
      }, Wn);
      function Wn(e) {
        this._subscribe = e;
      }
      try {
        yn = { indexedDB: R.indexedDB || R.mozIndexedDB || R.webkitIndexedDB || R.msIndexedDB, IDBKeyRange: R.IDBKeyRange || R.webkitIDBKeyRange };
      } catch {
        yn = { indexedDB: null, IDBKeyRange: null };
      }
      function Br(e) {
        var t, n = !1, r = new Ta(function(a) {
          var o = Be(e), u, c = !1, f = {}, h = {}, y = { get closed() {
            return c;
          }, unsubscribe: function() {
            c || (c = !0, u && u.abort(), l && tt.storagemutated.unsubscribe(p));
          } };
          a.start && a.start(y);
          var l = !1, w = function() {
            return xn(m);
          }, p = function(g) {
            pn(f, g), Un(h, f) && w();
          }, m = function() {
            var g, v, T;
            !c && yn.indexedDB && (f = {}, g = {}, u && u.abort(), u = new AbortController(), T = function(x) {
              var P = gt();
              try {
                o && wt();
                var C = $e(e, x);
                return C = o ? C.finally(Je) : C;
              } finally {
                P && bt();
              }
            }(v = { subscr: g, signal: u.signal, requery: w, querier: e, trans: null }), Promise.resolve(T).then(function(x) {
              n = !0, t = x, c || v.signal.aborted || (f = {}, function(P) {
                for (var C in P) if (V(P, C)) return;
                return 1;
              }(h = g) || l || (tt(jt, p), l = !0), xn(function() {
                return !c && a.next && a.next(x);
              }));
            }, function(x) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(x?.name) || c || xn(function() {
                c || a.error && a.error(x);
              });
            }));
          };
          return setTimeout(w, 0), y;
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
              return a !== Zt;
            });
          }) : jn(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return ye(new _.MissingAPI());
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
        Ct(e);
      } }, derive: ge, extend: G, props: X, override: le, Events: kt, on: tt, liveQuery: Br, extendObservabilitySet: pn, getByKeyPath: Oe, setByKeyPath: se, delByKeyPath: function(e, t) {
        typeof t == "string" ? se(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          se(e, n, void 0);
        });
      }, shallowClone: mt, deepClone: we, getObjectDiff: Yn, cmp: Z, asap: de, minKey: -1 / 0, addons: [], connections: Et, errnames: s, dependencies: yn, cache: pt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), dt.maxKey = qt(dt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (tt(jt, function(e) {
        nt || (e = new CustomEvent(Nn, { detail: e }), nt = !0, dispatchEvent(e), nt = !1);
      }), addEventListener(Nn, function(e) {
        e = e.detail, nt || $n(e);
      }));
      var Vt, nt = !1, Kr = function() {
      };
      return typeof BroadcastChannel < "u" && ((Kr = function() {
        (Vt = new BroadcastChannel(Nn)).onmessage = function(e) {
          return e.data && $n(e.data);
        };
      })(), typeof Vt.unref == "function" && Vt.unref(), tt(jt, function(e) {
        nt || Vt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Qe.disableBfCache && e.persisted) {
          Ne && console.debug("Dexie: handling persisted pagehide"), Vt?.close();
          for (var t = 0, n = Et; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Qe.disableBfCache && e.persisted && (Ne && console.debug("Dexie: handling persisted pageshow"), Kr(), $n({ all: new Ae(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof Ye || e instanceof TypeError || e instanceof SyntaxError || !e.name || !E[e.name] ? e : (t = new E[e.name](t || e.message, e), "stack" in e && J(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Ct(Ne), d(Qe, Object.freeze({ __proto__: null, Dexie: Qe, liveQuery: Br, Entity: pr, cmp: Z, PropModification: Bt, replacePrefix: function(e, t) {
        return new Bt({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new Bt({ add: e });
      }, remove: function(e) {
        return new Bt({ remove: e });
      }, default: Qe, RangeSet: Ae, mergeRanges: Ut, rangesOverlap: xr }), { default: Qe }), Qe;
    });
  }(tr)), tr.exports;
}
var Wa = Ha();
const nr = /* @__PURE__ */ La(Wa), Qr = Symbol.for("Dexie"), xt = globalThis[Qr] || (globalThis[Qr] = nr);
if (nr.semVer !== xt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${nr.semVer} and ${xt.semVer}`);
const {
  liveQuery: Ro,
  mergeRanges: ko,
  rangesOverlap: Fo,
  RangeSet: Bo,
  cmp: Ko,
  Entity: jo,
  PropModification: qo,
  replacePrefix: Lo,
  add: Mo,
  remove: Uo,
  DexieYProvider: Vo
} = xt;
function $a(O) {
  const b = new xt(O), A = Ya([...Xr]);
  return b.version(1).stores(A), b;
}
async function Ja(O) {
  const { databaseInstance: b, tagName: A, records: d } = O, D = b.table(A);
  await b.transaction("rw", D, () => D.bulkAdd(d));
}
async function Za(O) {
  const { databaseInstance: b, tagNames: A } = O;
  b.close();
  const d = b.verno, D = b.tables.reduce(
    (q, G) => (q[G.name] = er, q),
    {}
  ), R = A.reduce(
    (q, G) => (q[G] = er, q),
    {}
  ), M = {
    ...D,
    ...R
  };
  b.version(d + 1).stores(M), b.open();
}
async function eo(O) {
  if (!(await indexedDB.databases?.() || []).some((b) => b.name === O)) return !1;
  try {
    await new xt(O).close();
  } catch (b) {
    console.warn(`Failed to close database ${O} before deletion`, b);
  }
  return await xt.delete(O), !0;
}
const Gt = {};
function to(O) {
  const { parent: b, child: A } = O;
  Gt[b.tagName] || (Gt[b.tagName] = []);
  const d = {
    parentId: b.id,
    childId: A.id,
    childTagName: A.tagName
  };
  Gt[b.tagName].push(d);
}
function no(O) {
  const { parentRecordsBatch: b, parentTagName: A } = O, d = [...b], D = Hr(A);
  for (const R of b) {
    const M = D.filter((q) => q.parentId === R.id).map((q) => ({
      id: q.childId,
      tagName: q.childTagName
    }));
    if (M.length > 0) {
      const q = d.findIndex(
        (G) => G.id === R.id
      );
      q >= 0 && (d[q].children || (d[q].children = []), d[q].children.push(...M), ro({
        children: M,
        tagName: R.tagName
      }));
    }
  }
  return d;
}
function Hr(O) {
  return Gt[O] || [];
}
function ro(O) {
  const { children: b, tagName: A } = O, d = b.map((R) => R.id), D = Hr(A);
  Gt[A] = D.filter(
    (R) => !d.includes(R.childId)
  );
}
function ao(O) {
  return "prefix" in O && "uri" in O && !!O.prefix && !!O.uri;
}
function oo(O, b) {
  return Object.keys(b).includes(O);
}
function Wr(O) {
  let b = "pending";
  const A = O.batchSize;
  let d = [], D = !1, R;
  return { push: q, next: M, close: G, status: b };
  async function M() {
    if (d.length === 0 && D)
      return b = "done", Promise.resolve({ value: [], done: !0 });
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
function io(O) {
  const { importContext: b, tagName: A } = O, d = {
    ...b
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
function so(O) {
  const { tagName: b, importContext: A } = O, d = {
    ...A
  };
  if (!A.endingQueues[b]) {
    const D = Wr({
      batchSize: A.options.batchSize
    });
    d.endingQueues[b] = D;
  }
  return d;
}
function uo(O) {
  const { importContext: b } = O;
  let A = { ...b };
  for (const D of Object.keys(A.queues))
    A.queues[D]?.close();
  const d = A.queuesObservable.subscribe(async () => {
    A = await lo({
      importContext: A
    }), d();
  });
  return A;
}
function co(O) {
  const { importContext: b } = O, A = b.endingQueues && Object.keys(b.endingQueues).length > 0;
  return Promise.all([
    new Promise((d) => {
      const D = b.queuesObservable.subscribe(() => {
        b.queuesObservable.isAllDone() && (D(), d());
      });
    }),
    A ? new Promise((d) => {
      const D = b.endingQueuesObservable.subscribe(() => {
        b.endingQueuesObservable.isAllDone() && (D(), d());
      });
    }) : Promise.resolve()
  ]);
}
async function lo(O) {
  const { importContext: b } = O, A = { ...b };
  await Za({
    databaseInstance: b.databaseInstance,
    tagNames: Object.keys(b.endingQueues)
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
function zr(O) {
  const b = /* @__PURE__ */ new Set();
  function A(R) {
    return b.add(R), () => b.delete(R);
  }
  function d() {
    for (const R of b) R();
  }
  function D() {
    return Object.values(O).every((R) => R.status === "done");
  }
  return { subscribe: A, notify: d, isAllDone: D };
}
async function $r(O) {
  const { tagName: b, importContext: A, isEndingQueue: d } = O;
  let D, R;
  if (d ? (D = A.endingQueues, R = A.endingQueuesObservable) : (D = A.queues, R = A.queuesObservable), !oo(b, D) || !D[b])
    throw new Error(`Queue for tagName ${b} is not defined to be consumed`);
  for (; ; ) {
    const { value: M, done: q } = await D[b].next();
    if (q) {
      R.isAllDone() && R.notify();
      break;
    }
    if (M.length === 0) continue;
    const G = no({
      parentRecordsBatch: M,
      // within the same batch, all records have the same tagName
      parentTagName: M[0].tagName
    });
    await Ja({
      databaseInstance: A.databaseInstance,
      tagName: b,
      records: G
    });
  }
}
function fo(O) {
  const { importContext: b } = O;
  let A = {
    stack: [],
    currentParentElements: []
  }, d = {
    ...b
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
  return D.onopentag = (R) => A = po({ node: R, state: A }), D.ontext = (R) => A = ho({ text: R, state: A }), D.onclosetag = () => ({ updatedState: A, updatedImportContext: d } = mo({
    state: A,
    importContext: b
  })), D.onend = () => d = yo({ importContext: d }), D.onerror = vo, { xmlParser: D, importContext: d };
}
function po(O) {
  const { node: b, state: A } = O, d = { ...A }, D = crypto.randomUUID(), R = go(b), M = bo(b), q = wo(b.attributes), G = Eo(A.currentParentElements), ie = {
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
function ho(O) {
  const { text: b, state: A } = O;
  return b && A.stack.length > 0 && (A.stack[A.stack.length - 1].value += b), A;
}
function mo(O) {
  const { state: b, importContext: A } = O;
  let d = { ...A }, D = [...b.stack], R = [...b.currentParentElements];
  const M = b.stack.at(-1);
  if (D = b.stack.slice(0, -1), R = b.currentParentElements.slice(0, -1), M) {
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
    } else M.parent && to({
      parent: M.parent,
      child: { id: M.id, tagName: M.tagName }
    });
    Xr.includes(M.tagName) ? (d = io({
      tagName: M.tagName,
      importContext: d
    }), d.queues[M.tagName]?.push(M)) : (d = so({
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
function yo(O) {
  const { importContext: b } = O;
  return uo({
    importContext: b
  });
}
function vo(O) {
  return new Error(`XML parsing error: ${O}`);
}
function go(O) {
  return O.local || null;
}
function bo(O) {
  return ao(O) ? {
    prefix: O.prefix,
    uri: O.uri
  } : null;
}
function wo(O) {
  return Object.values(O).map((b) => {
    const A = b.prefix && b.uri ? {
      prefix: b.prefix,
      uri: b.uri
    } : null;
    return {
      name: b.name,
      value: b.value,
      namespace: A
    };
  });
}
function Eo(O) {
  return O.length === 0 ? null : O[O.length - 1];
}
const To = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function _o({
  files: O,
  options: b = To
}) {
  const A = [];
  if (O.length === 0) throw new Error("No files provided for import.");
  for (const d of O) {
    if (!So(d)) {
      console.error(`Unsupported file type: ${d.name}`);
      continue;
    }
    if (d.size === 0) {
      console.warn(`File is empty: ${d.name}`);
      continue;
    }
    const D = await xo({ file: d, options: b });
    A.push(D);
  }
  return A;
}
function So(O) {
  return za.some((b) => O.name.toLowerCase().endsWith(b));
}
function Oo(O) {
  return O.name.replace(/\.[^.]+$/, "");
}
async function xo(O) {
  const { file: b, options: A } = O;
  try {
    const d = Oo(b);
    await eo(d);
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
    return A.useBrowserApi && (D = await Ao({
      file: b,
      importContext: D,
      options: {
        chunkSize: A.chunkSize
      }
    })), await co({
      importContext: D
    }), d;
  } catch (d) {
    throw console.error(`Error importing file ${b.name}:`, d), d;
  }
}
async function Ao(O) {
  const { file: b, importContext: A, options: d } = O, D = b.stream().getReader(), { xmlParser: R, importContext: M } = fo({
    importContext: A
  }), q = new TextDecoder(), G = new Uint8Array(0);
  return await rr(D, R, q, G, d), M;
}
async function rr(O, b, A, d, D) {
  const R = D.chunkSize, { done: M, value: q } = await O.read();
  if (M) {
    if (d.length > 0) {
      const ie = A.decode(d);
      b.write(ie);
    }
    b.close();
    return;
  }
  if (!q)
    return await rr(O, b, A, d, D);
  let G = new Uint8Array(d.length + q.length);
  for (G.set(d), G.set(q, d.length); G.length >= R; ) {
    const ie = G.slice(0, R);
    G = G.slice(R);
    const pe = A.decode(ie, { stream: !0 });
    b.write(pe);
  }
  return await rr(O, b, A, G, D);
}
async function Go() {
  const O = localStorage.getItem("currentActiveFileDatabaseName");
  if (!O)
    throw new Error("no active file");
  const b = await No(), A = await _o({ files: b });
  await Po(O, A);
}
async function Po(O, b) {
  const A = new jr(O);
  await A.open();
  const d = qr(A), D = new jr(b[0]);
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
      const Oe = {
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
      }, se = await d.addRecord(Oe);
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
            const Oe = {
              msg: "in the case of function category instantiation private field without a parent (so beeing under SCL root) is considered an error",
              record: le,
              path: ae,
              newGrandParent: ne,
              newParentPath: J
            };
            throw console.error(Oe), new Error(JSON.stringify(Oe));
          }
          const de = await Co(d, le, ne);
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
      Ca(be, "functionUuid", ne?.value), await d.updateRecord(be);
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
async function Yr(O, b, A) {
  const d = Me(b, A);
  if (!d)
    throw console.error("could not find name of record", b), new Error("could not find name of record");
  const D = await Da(O, b.tagName, d);
  return D || (await O.table(b.tagName).add(b), b);
}
async function Co(O, b, A) {
  const d = Me(b, "type");
  if (!d || !d.value) {
    const M = {
      msg: "type attribute is required but it is missing or empty",
      typeAttr: d,
      record: b
    };
    throw console.error(M), new Error(JSON.stringify(M));
  }
  const D = await O.db.table(b.tagName).where("parent.id").equals(A.id).filter(
    (M) => !!M.attributes?.some((q) => q.name === "type" && q.value === d.value)
  ).first();
  return D || await O.addRecord(b);
}
function Zn(O, b) {
  return b.includes(O.tagName);
}
async function Do(O, b, A) {
  return O.table(b).get(A);
}
async function ar(O, b, A = []) {
  if (!b.parent)
    return [];
  const d = await Do(O, b.parent.tagName, b.parent.id);
  if (!d)
    throw console.error("could not find parent for", b), new Error("could not find parent for record");
  if (!d.parent)
    return [];
  const R = await ar(O, d, A);
  return [d, ...R];
}
async function No() {
  const { promise: O, resolve: b } = Promise.withResolvers(), { open: A, onChange: d } = ja({
    accept: "fsd"
  });
  return d((D) => {
    if (D?.length === 0 || D === null) {
      b([]);
      return;
    }
    b(Array.from(D));
  }), A(), O;
}
export {
  Go as default,
  Po as instantiateFSD
};
