import { ar as Ea, Y as Kr, W as Le, Z as jr, as as Ta, at as _a } from "./import-wrapper-prod-D1iy5_5H.js";
var Sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oa(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
function xa(C) {
  if (Object.prototype.hasOwnProperty.call(C, "__esModule")) return C;
  var S = C.default;
  if (typeof S == "function") {
    var P = function h() {
      var D = !1;
      try {
        D = this instanceof h;
      } catch {
      }
      return D ? Reflect.construct(S, arguments, this.constructor) : S.apply(this, arguments);
    };
    P.prototype = S.prototype;
  } else P = {};
  return Object.defineProperty(P, "__esModule", { value: !0 }), Object.keys(C).forEach(function(h) {
    var D = Object.getOwnPropertyDescriptor(C, h);
    Object.defineProperty(P, h, D.get ? D : {
      enumerable: !0,
      get: function() {
        return C[h];
      }
    });
  }), P;
}
var qr = {};
const Aa = {}, Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Aa
}, Symbol.toStringTag, { value: "Module" })), Mr = /* @__PURE__ */ xa(Pa);
var Lr;
function Ca() {
  return Lr || (Lr = 1, function(C) {
    (function(S) {
      S.parser = function(s, i) {
        return new h(s, i);
      }, S.SAXParser = h, S.SAXStream = me, S.createStream = oe, S.MAX_BUFFER_LENGTH = 64 * 1024;
      var P = [
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
      S.EVENTS = [
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
      function h(s, i) {
        if (!(this instanceof h))
          return new h(s, i);
        var T = this;
        F(T), T.q = T.c = "", T.bufferCheckPosition = S.MAX_BUFFER_LENGTH, T.opt = i || {}, T.opt.lowercase = T.opt.lowercase || T.opt.lowercasetags, T.looseCase = T.opt.lowercase ? "toLowerCase" : "toUpperCase", T.tags = [], T.closed = T.closedRoot = T.sawRoot = !1, T.tag = T.error = null, T.strict = !!s, T.noscript = !!(s || T.opt.noscript), T.state = _.BEGIN, T.strictEntities = T.opt.strictEntities, T.ENTITIES = T.strictEntities ? Object.create(S.XML_ENTITIES) : Object.create(S.ENTITIES), T.attribList = [], T.opt.xmlns && (T.ns = Object.create(ge)), T.opt.unquotedAttributeValues === void 0 && (T.opt.unquotedAttributeValues = !s), T.trackPosition = T.opt.position !== !1, T.trackPosition && (T.position = T.line = T.column = 0), Fe(T, "onready");
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
        for (var i = Math.max(S.MAX_BUFFER_LENGTH, 10), T = 0, w = 0, J = P.length; w < J; w++) {
          var V = s[P[w]].length;
          if (V > i)
            switch (P[w]) {
              case "textNode":
                we(s);
                break;
              case "cdata":
                H(s, "oncdata", s.cdata), s.cdata = "";
                break;
              case "script":
                H(s, "onscript", s.script), s.script = "";
                break;
              default:
                Ue(s, "Max buffer length exceeded: " + P[w]);
            }
          T = Math.max(T, V);
        }
        var ue = S.MAX_BUFFER_LENGTH - T;
        s.bufferCheckPosition = ue + s.position;
      }
      function F(s) {
        for (var i = 0, T = P.length; i < T; i++)
          s[P[i]] = "";
      }
      function L(s) {
        we(s), s.cdata !== "" && (H(s, "oncdata", s.cdata), s.cdata = ""), s.script !== "" && (H(s, "onscript", s.script), s.script = "");
      }
      h.prototype = {
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
          L(this);
        }
      };
      var M;
      try {
        M = Mr.Stream;
      } catch {
        M = function() {
        };
      }
      M || (M = function() {
      });
      var G = S.EVENTS.filter(function(s) {
        return s !== "error" && s !== "end";
      });
      function oe(s, i) {
        return new me(s, i);
      }
      function me(s, i) {
        if (!(this instanceof me))
          return new me(s, i);
        M.apply(this), this._parser = new h(s, i), this.writable = !0, this.readable = !0;
        var T = this;
        this._parser.onend = function() {
          T.emit("end");
        }, this._parser.onerror = function(w) {
          T.emit("error", w), T._parser.error = null;
        }, this._decoder = null, G.forEach(function(w) {
          Object.defineProperty(T, "on" + w, {
            get: function() {
              return T._parser["on" + w];
            },
            set: function(J) {
              if (!J)
                return T.removeAllListeners(w), T._parser["on" + w] = J, J;
              T.on(w, J);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      me.prototype = Object.create(M.prototype, {
        constructor: {
          value: me
        }
      }), me.prototype.write = function(s) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(s)) {
          if (!this._decoder) {
            var i = Mr.StringDecoder;
            this._decoder = new i("utf8");
          }
          s = this._decoder.write(s);
        }
        return this._parser.write(s.toString()), this.emit("data", s), !0;
      }, me.prototype.end = function(s) {
        return s && s.length && this.write(s), this._parser.end(), !0;
      }, me.prototype.on = function(s, i) {
        var T = this;
        return !T._parser["on" + s] && G.indexOf(s) !== -1 && (T._parser["on" + s] = function() {
          var w = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          w.splice(0, 0, s), T.emit.apply(T, w);
        }), M.prototype.on.call(T, s, i);
      };
      var Y = "[CDATA[", ae = "DOCTYPE", ie = "http://www.w3.org/XML/1998/namespace", ee = "http://www.w3.org/2000/xmlns/", ge = { xml: ie, xmlns: ee }, W = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, be = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Se = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, le = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function te(s) {
        return s === " " || s === `
` || s === "\r" || s === "	";
      }
      function pe(s) {
        return s === '"' || s === "'";
      }
      function Oe(s) {
        return s === ">" || te(s);
      }
      function se(s, i) {
        return s.test(i);
      }
      function mt(s, i) {
        return !se(s, i);
      }
      var _ = 0;
      S.STATE = {
        BEGIN: _++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: _++,
        // leading whitespace
        TEXT: _++,
        // general stuff
        TEXT_ENTITY: _++,
        // &amp and such.
        OPEN_WAKA: _++,
        // <
        SGML_DECL: _++,
        // <!BLARG
        SGML_DECL_QUOTED: _++,
        // <!BLARG foo "bar
        DOCTYPE: _++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: _++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: _++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: _++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: _++,
        // <!-
        COMMENT: _++,
        // <!--
        COMMENT_ENDING: _++,
        // <!-- blah -
        COMMENT_ENDED: _++,
        // <!-- blah --
        CDATA: _++,
        // <![CDATA[ something
        CDATA_ENDING: _++,
        // ]
        CDATA_ENDING_2: _++,
        // ]]
        PROC_INST: _++,
        // <?hi
        PROC_INST_BODY: _++,
        // <?hi there
        PROC_INST_ENDING: _++,
        // <?hi "there" ?
        OPEN_TAG: _++,
        // <strong
        OPEN_TAG_SLASH: _++,
        // <strong /
        ATTRIB: _++,
        // <a
        ATTRIB_NAME: _++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: _++,
        // <a foo _
        ATTRIB_VALUE: _++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: _++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: _++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: _++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: _++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: _++,
        // <foo bar=&quot
        CLOSE_TAG: _++,
        // </a
        CLOSE_TAG_SAW_WHITE: _++,
        // </a   >
        SCRIPT: _++,
        // <script> ...
        SCRIPT_ENDING: _++
        // <script> ... <
      }, S.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, S.ENTITIES = {
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
      }, Object.keys(S.ENTITIES).forEach(function(s) {
        var i = S.ENTITIES[s], T = typeof i == "number" ? String.fromCharCode(i) : i;
        S.ENTITIES[s] = T;
      });
      for (var ze in S.STATE)
        S.STATE[S.STATE[ze]] = ze;
      _ = S.STATE;
      function Fe(s, i, T) {
        s[i] && s[i](T);
      }
      function H(s, i, T) {
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
        return s.sawRoot && !s.closedRoot && re(s, "Unclosed root tag"), s.state !== _.BEGIN && s.state !== _.BEGIN_WHITESPACE && s.state !== _.TEXT && Ue(s, "Unexpected end"), we(s), s.c = "", s.closed = !0, Fe(s, "onend"), h.call(s, s.strict, s.opt), s;
      }
      function re(s, i) {
        if (typeof s != "object" || !(s instanceof h))
          throw new Error("bad call to strictFail");
        s.strict && Ue(s, i);
      }
      function Ve(s) {
        s.strict || (s.tagName = s.tagName[s.looseCase]());
        var i = s.tags[s.tags.length - 1] || s, T = s.tag = { name: s.tagName, attributes: {} };
        s.opt.xmlns && (T.ns = i.ns), s.attribList.length = 0, H(s, "onopentagstart", T);
      }
      function je(s, i) {
        var T = s.indexOf(":"), w = T < 0 ? ["", s] : s.split(":"), J = w[0], V = w[1];
        return i && s === "xmlns" && (J = "xmlns", V = ""), { prefix: J, local: V };
      }
      function Re(s) {
        if (s.strict || (s.attribName = s.attribName[s.looseCase]()), s.attribList.indexOf(s.attribName) !== -1 || s.tag.attributes.hasOwnProperty(s.attribName)) {
          s.attribName = s.attribValue = "";
          return;
        }
        if (s.opt.xmlns) {
          var i = je(s.attribName, !0), T = i.prefix, w = i.local;
          if (T === "xmlns")
            if (w === "xml" && s.attribValue !== ie)
              re(
                s,
                "xml: prefix must be bound to " + ie + `
Actual: ` + s.attribValue
              );
            else if (w === "xmlns" && s.attribValue !== ee)
              re(
                s,
                "xmlns: prefix must be bound to " + ee + `
Actual: ` + s.attribValue
              );
            else {
              var J = s.tag, V = s.tags[s.tags.length - 1] || s;
              J.ns === V.ns && (J.ns = Object.create(V.ns)), J.ns[w] = s.attribValue;
            }
          s.attribList.push([s.attribName, s.attribValue]);
        } else
          s.tag.attributes[s.attribName] = s.attribValue, H(s, "onattribute", {
            name: s.attribName,
            value: s.attribValue
          });
        s.attribName = s.attribValue = "";
      }
      function Be(s, i) {
        if (s.opt.xmlns) {
          var T = s.tag, w = je(s.tagName);
          T.prefix = w.prefix, T.local = w.local, T.uri = T.ns[w.prefix] || "", T.prefix && !T.uri && (re(s, "Unbound namespace prefix: " + JSON.stringify(s.tagName)), T.uri = w.prefix);
          var J = s.tags[s.tags.length - 1] || s;
          T.ns && J.ns !== T.ns && Object.keys(T.ns).forEach(function(Pt) {
            H(s, "onopennamespace", {
              prefix: Pt,
              uri: T.ns[Pt]
            });
          });
          for (var V = 0, ue = s.attribList.length; V < ue; V++) {
            var xe = s.attribList[V], de = xe[0], He = xe[1], Ee = je(de, !0), Ke = Ee.prefix, vn = Ee.local, vt = Ke === "" ? "" : T.ns[Ke] || "", Ne = {
              name: de,
              value: He,
              prefix: Ke,
              local: vn,
              uri: vt
            };
            Ke && Ke !== "xmlns" && !vt && (re(s, "Unbound namespace prefix: " + JSON.stringify(Ke)), Ne.uri = Ke), s.tag.attributes[de] = Ne, H(s, "onattribute", Ne);
          }
          s.attribList.length = 0;
        }
        s.tag.isSelfClosing = !!i, s.sawRoot = !0, s.tags.push(s.tag), H(s, "onopentag", s.tag), i || (!s.noscript && s.tagName.toLowerCase() === "script" ? s.state = _.SCRIPT : s.state = _.TEXT, s.tag = null, s.tagName = ""), s.attribName = s.attribValue = "", s.attribList.length = 0;
      }
      function xt(s) {
        if (!s.tagName) {
          re(s, "Weird empty close tag."), s.textNode += "</>", s.state = _.TEXT;
          return;
        }
        if (s.script) {
          if (s.tagName !== "script") {
            s.script += "</" + s.tagName + ">", s.tagName = "", s.state = _.SCRIPT;
            return;
          }
          H(s, "onscript", s.script), s.script = "";
        }
        var i = s.tags.length, T = s.tagName;
        s.strict || (T = T[s.looseCase]());
        for (var w = T; i--; ) {
          var J = s.tags[i];
          if (J.name !== w)
            re(s, "Unexpected close tag");
          else
            break;
        }
        if (i < 0) {
          re(s, "Unmatched closing tag: " + s.tagName), s.textNode += "</" + s.tagName + ">", s.state = _.TEXT;
          return;
        }
        s.tagName = T;
        for (var V = s.tags.length; V-- > i; ) {
          var ue = s.tag = s.tags.pop();
          s.tagName = s.tag.name, H(s, "onclosetag", s.tagName);
          var xe = {};
          for (var de in ue.ns)
            xe[de] = ue.ns[de];
          var He = s.tags[s.tags.length - 1] || s;
          s.opt.xmlns && ue.ns !== He.ns && Object.keys(ue.ns).forEach(function(Ee) {
            var Ke = ue.ns[Ee];
            H(s, "onclosenamespace", { prefix: Ee, uri: Ke });
          });
        }
        i === 0 && (s.closedRoot = !0), s.tagName = s.attribValue = s.attribName = "", s.attribList.length = 0, s.state = _.TEXT;
      }
      function Ye(s) {
        var i = s.entity, T = i.toLowerCase(), w, J = "";
        return s.ENTITIES[i] ? s.ENTITIES[i] : s.ENTITIES[T] ? s.ENTITIES[T] : (i = T, i.charAt(0) === "#" && (i.charAt(1) === "x" ? (i = i.slice(2), w = parseInt(i, 16), J = w.toString(16)) : (i = i.slice(1), w = parseInt(i, 10), J = w.toString(10))), i = i.replace(/^0+/, ""), isNaN(w) || J.toLowerCase() !== i ? (re(s, "Invalid character entity"), "&" + s.entity + ";") : String.fromCodePoint(w));
      }
      function At(s, i) {
        i === "<" ? (s.state = _.OPEN_WAKA, s.startTagPosition = s.position) : te(i) || (re(s, "Non-whitespace before first tag."), s.textNode = i, s.state = _.TEXT);
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
        for (var T = 0, w = ""; w = at(s, T++), i.c = w, !!w; )
          switch (i.trackPosition && (i.position++, w === `
` ? (i.line++, i.column = 0) : i.column++), i.state) {
            case _.BEGIN:
              if (i.state = _.BEGIN_WHITESPACE, w === "\uFEFF")
                continue;
              At(i, w);
              continue;
            case _.BEGIN_WHITESPACE:
              At(i, w);
              continue;
            case _.TEXT:
              if (i.sawRoot && !i.closedRoot) {
                for (var J = T - 1; w && w !== "<" && w !== "&"; )
                  w = at(s, T++), w && i.trackPosition && (i.position++, w === `
` ? (i.line++, i.column = 0) : i.column++);
                i.textNode += s.substring(J, T - 1);
              }
              w === "<" && !(i.sawRoot && i.closedRoot && !i.strict) ? (i.state = _.OPEN_WAKA, i.startTagPosition = i.position) : (!te(w) && (!i.sawRoot || i.closedRoot) && re(i, "Text data outside of root node."), w === "&" ? i.state = _.TEXT_ENTITY : i.textNode += w);
              continue;
            case _.SCRIPT:
              w === "<" ? i.state = _.SCRIPT_ENDING : i.script += w;
              continue;
            case _.SCRIPT_ENDING:
              w === "/" ? i.state = _.CLOSE_TAG : (i.script += "<" + w, i.state = _.SCRIPT);
              continue;
            case _.OPEN_WAKA:
              if (w === "!")
                i.state = _.SGML_DECL, i.sgmlDecl = "";
              else if (!te(w)) if (se(W, w))
                i.state = _.OPEN_TAG, i.tagName = w;
              else if (w === "/")
                i.state = _.CLOSE_TAG, i.tagName = "";
              else if (w === "?")
                i.state = _.PROC_INST, i.procInstName = i.procInstBody = "";
              else {
                if (re(i, "Unencoded <"), i.startTagPosition + 1 < i.position) {
                  var V = i.position - i.startTagPosition;
                  w = new Array(V).join(" ") + w;
                }
                i.textNode += "<" + w, i.state = _.TEXT;
              }
              continue;
            case _.SGML_DECL:
              if (i.sgmlDecl + w === "--") {
                i.state = _.COMMENT, i.comment = "", i.sgmlDecl = "";
                continue;
              }
              i.doctype && i.doctype !== !0 && i.sgmlDecl ? (i.state = _.DOCTYPE_DTD, i.doctype += "<!" + i.sgmlDecl + w, i.sgmlDecl = "") : (i.sgmlDecl + w).toUpperCase() === Y ? (H(i, "onopencdata"), i.state = _.CDATA, i.sgmlDecl = "", i.cdata = "") : (i.sgmlDecl + w).toUpperCase() === ae ? (i.state = _.DOCTYPE, (i.doctype || i.sawRoot) && re(
                i,
                "Inappropriately located doctype declaration"
              ), i.doctype = "", i.sgmlDecl = "") : w === ">" ? (H(i, "onsgmldeclaration", i.sgmlDecl), i.sgmlDecl = "", i.state = _.TEXT) : (pe(w) && (i.state = _.SGML_DECL_QUOTED), i.sgmlDecl += w);
              continue;
            case _.SGML_DECL_QUOTED:
              w === i.q && (i.state = _.SGML_DECL, i.q = ""), i.sgmlDecl += w;
              continue;
            case _.DOCTYPE:
              w === ">" ? (i.state = _.TEXT, H(i, "ondoctype", i.doctype), i.doctype = !0) : (i.doctype += w, w === "[" ? i.state = _.DOCTYPE_DTD : pe(w) && (i.state = _.DOCTYPE_QUOTED, i.q = w));
              continue;
            case _.DOCTYPE_QUOTED:
              i.doctype += w, w === i.q && (i.q = "", i.state = _.DOCTYPE);
              continue;
            case _.DOCTYPE_DTD:
              w === "]" ? (i.doctype += w, i.state = _.DOCTYPE) : w === "<" ? (i.state = _.OPEN_WAKA, i.startTagPosition = i.position) : pe(w) ? (i.doctype += w, i.state = _.DOCTYPE_DTD_QUOTED, i.q = w) : i.doctype += w;
              continue;
            case _.DOCTYPE_DTD_QUOTED:
              i.doctype += w, w === i.q && (i.state = _.DOCTYPE_DTD, i.q = "");
              continue;
            case _.COMMENT:
              w === "-" ? i.state = _.COMMENT_ENDING : i.comment += w;
              continue;
            case _.COMMENT_ENDING:
              w === "-" ? (i.state = _.COMMENT_ENDED, i.comment = rt(i.opt, i.comment), i.comment && H(i, "oncomment", i.comment), i.comment = "") : (i.comment += "-" + w, i.state = _.COMMENT);
              continue;
            case _.COMMENT_ENDED:
              w !== ">" ? (re(i, "Malformed comment"), i.comment += "--" + w, i.state = _.COMMENT) : i.doctype && i.doctype !== !0 ? i.state = _.DOCTYPE_DTD : i.state = _.TEXT;
              continue;
            case _.CDATA:
              w === "]" ? i.state = _.CDATA_ENDING : i.cdata += w;
              continue;
            case _.CDATA_ENDING:
              w === "]" ? i.state = _.CDATA_ENDING_2 : (i.cdata += "]" + w, i.state = _.CDATA);
              continue;
            case _.CDATA_ENDING_2:
              w === ">" ? (i.cdata && H(i, "oncdata", i.cdata), H(i, "onclosecdata"), i.cdata = "", i.state = _.TEXT) : w === "]" ? i.cdata += "]" : (i.cdata += "]]" + w, i.state = _.CDATA);
              continue;
            case _.PROC_INST:
              w === "?" ? i.state = _.PROC_INST_ENDING : te(w) ? i.state = _.PROC_INST_BODY : i.procInstName += w;
              continue;
            case _.PROC_INST_BODY:
              if (!i.procInstBody && te(w))
                continue;
              w === "?" ? i.state = _.PROC_INST_ENDING : i.procInstBody += w;
              continue;
            case _.PROC_INST_ENDING:
              w === ">" ? (H(i, "onprocessinginstruction", {
                name: i.procInstName,
                body: i.procInstBody
              }), i.procInstName = i.procInstBody = "", i.state = _.TEXT) : (i.procInstBody += "?" + w, i.state = _.PROC_INST_BODY);
              continue;
            case _.OPEN_TAG:
              se(be, w) ? i.tagName += w : (Ve(i), w === ">" ? Be(i) : w === "/" ? i.state = _.OPEN_TAG_SLASH : (te(w) || re(i, "Invalid character in tag name"), i.state = _.ATTRIB));
              continue;
            case _.OPEN_TAG_SLASH:
              w === ">" ? (Be(i, !0), xt(i)) : (re(i, "Forward-slash in opening tag not followed by >"), i.state = _.ATTRIB);
              continue;
            case _.ATTRIB:
              if (te(w))
                continue;
              w === ">" ? Be(i) : w === "/" ? i.state = _.OPEN_TAG_SLASH : se(W, w) ? (i.attribName = w, i.attribValue = "", i.state = _.ATTRIB_NAME) : re(i, "Invalid attribute name");
              continue;
            case _.ATTRIB_NAME:
              w === "=" ? i.state = _.ATTRIB_VALUE : w === ">" ? (re(i, "Attribute without value"), i.attribValue = i.attribName, Re(i), Be(i)) : te(w) ? i.state = _.ATTRIB_NAME_SAW_WHITE : se(be, w) ? i.attribName += w : re(i, "Invalid attribute name");
              continue;
            case _.ATTRIB_NAME_SAW_WHITE:
              if (w === "=")
                i.state = _.ATTRIB_VALUE;
              else {
                if (te(w))
                  continue;
                re(i, "Attribute without value"), i.tag.attributes[i.attribName] = "", i.attribValue = "", H(i, "onattribute", {
                  name: i.attribName,
                  value: ""
                }), i.attribName = "", w === ">" ? Be(i) : se(W, w) ? (i.attribName = w, i.state = _.ATTRIB_NAME) : (re(i, "Invalid attribute name"), i.state = _.ATTRIB);
              }
              continue;
            case _.ATTRIB_VALUE:
              if (te(w))
                continue;
              pe(w) ? (i.q = w, i.state = _.ATTRIB_VALUE_QUOTED) : (i.opt.unquotedAttributeValues || Ue(i, "Unquoted attribute value"), i.state = _.ATTRIB_VALUE_UNQUOTED, i.attribValue = w);
              continue;
            case _.ATTRIB_VALUE_QUOTED:
              if (w !== i.q) {
                w === "&" ? i.state = _.ATTRIB_VALUE_ENTITY_Q : i.attribValue += w;
                continue;
              }
              Re(i), i.q = "", i.state = _.ATTRIB_VALUE_CLOSED;
              continue;
            case _.ATTRIB_VALUE_CLOSED:
              te(w) ? i.state = _.ATTRIB : w === ">" ? Be(i) : w === "/" ? i.state = _.OPEN_TAG_SLASH : se(W, w) ? (re(i, "No whitespace between attributes"), i.attribName = w, i.attribValue = "", i.state = _.ATTRIB_NAME) : re(i, "Invalid attribute name");
              continue;
            case _.ATTRIB_VALUE_UNQUOTED:
              if (!Oe(w)) {
                w === "&" ? i.state = _.ATTRIB_VALUE_ENTITY_U : i.attribValue += w;
                continue;
              }
              Re(i), w === ">" ? Be(i) : i.state = _.ATTRIB;
              continue;
            case _.CLOSE_TAG:
              if (i.tagName)
                w === ">" ? xt(i) : se(be, w) ? i.tagName += w : i.script ? (i.script += "</" + i.tagName, i.tagName = "", i.state = _.SCRIPT) : (te(w) || re(i, "Invalid tagname in closing tag"), i.state = _.CLOSE_TAG_SAW_WHITE);
              else {
                if (te(w))
                  continue;
                mt(W, w) ? i.script ? (i.script += "</" + w, i.state = _.SCRIPT) : re(i, "Invalid tagname in closing tag.") : i.tagName = w;
              }
              continue;
            case _.CLOSE_TAG_SAW_WHITE:
              if (te(w))
                continue;
              w === ">" ? xt(i) : re(i, "Invalid characters in closing tag");
              continue;
            case _.TEXT_ENTITY:
            case _.ATTRIB_VALUE_ENTITY_Q:
            case _.ATTRIB_VALUE_ENTITY_U:
              var ue, xe;
              switch (i.state) {
                case _.TEXT_ENTITY:
                  ue = _.TEXT, xe = "textNode";
                  break;
                case _.ATTRIB_VALUE_ENTITY_Q:
                  ue = _.ATTRIB_VALUE_QUOTED, xe = "attribValue";
                  break;
                case _.ATTRIB_VALUE_ENTITY_U:
                  ue = _.ATTRIB_VALUE_UNQUOTED, xe = "attribValue";
                  break;
              }
              if (w === ";") {
                var de = Ye(i);
                i.opt.unparsedEntities && !Object.values(S.XML_ENTITIES).includes(de) ? (i.entity = "", i.state = ue, i.write(de)) : (i[xe] += de, i.entity = "", i.state = ue);
              } else se(i.entity.length ? le : Se, w) ? i.entity += w : (re(i, "Invalid character in entity name"), i[xe] += "&" + i.entity + w, i.entity = "", i.state = ue);
              continue;
            default:
              throw new Error(i, "Unknown state: " + i.state);
          }
        return i.position >= i.bufferCheckPosition && D(i), i;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var s = String.fromCharCode, i = Math.floor, T = function() {
          var w = 16384, J = [], V, ue, xe = -1, de = arguments.length;
          if (!de)
            return "";
          for (var He = ""; ++xe < de; ) {
            var Ee = Number(arguments[xe]);
            if (!isFinite(Ee) || // `NaN`, `+Infinity`, or `-Infinity`
            Ee < 0 || // not a valid Unicode code point
            Ee > 1114111 || // not a valid Unicode code point
            i(Ee) !== Ee)
              throw RangeError("Invalid code point: " + Ee);
            Ee <= 65535 ? J.push(Ee) : (Ee -= 65536, V = (Ee >> 10) + 55296, ue = Ee % 1024 + 56320, J.push(V, ue)), (xe + 1 === de || J.length > w) && (He += s.apply(null, J), J.length = 0);
          }
          return He;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: T,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = T;
      }();
    })(C);
  }(qr)), qr;
}
var Da = Ca();
const Na = [".fsd", ".asd", ".ssd", ".scd"], zr = [
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
], Zn = "++id, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName";
function Ra(C) {
  return C.reduce(
    (S, P) => (S[P] = Zn, S),
    {}
  );
}
var er = { exports: {} }, Ia = er.exports, Ur;
function ka() {
  return Ur || (Ur = 1, function(C, S) {
    (function(P, h) {
      C.exports = h();
    })(Ia, function() {
      var P = function(e, t) {
        return (P = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
        })(e, t);
      }, h = function() {
        return (h = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
      };
      function D(e, t, n) {
        for (var r, a = 0, o = t.length; a < o; a++) !r && a in t || ((r = r || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var F = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Sa, L = Object.keys, M = Array.isArray;
      function G(e, t) {
        return typeof t != "object" || L(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || F.Promise || (F.Promise = Promise);
      var oe = Object.getPrototypeOf, me = {}.hasOwnProperty;
      function Y(e, t) {
        return me.call(e, t);
      }
      function ae(e, t) {
        typeof t == "function" && (t = t(oe(e))), (typeof Reflect > "u" ? L : Reflect.ownKeys)(t).forEach(function(n) {
          ee(e, n, t[n]);
        });
      }
      var ie = Object.defineProperty;
      function ee(e, t, n, r) {
        ie(e, t, G(n && Y(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function ge(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), ee(e.prototype, "constructor", e), { extend: ae.bind(null, e.prototype) };
        } };
      }
      var W = Object.getOwnPropertyDescriptor, be = [].slice;
      function Se(e, t, n) {
        return be.call(e, t, n);
      }
      function le(e, t) {
        return t(e);
      }
      function te(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function pe(e) {
        F.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Oe(e, t) {
        if (typeof t == "string" && Y(e, t)) return e[t];
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
          te(typeof n != "string" && "length" in n);
          for (var r = 0, a = t.length; r < a; ++r) se(e, t[r], n[r]);
        } else {
          var o, u, c = t.indexOf(".");
          c !== -1 ? (o = t.substr(0, c), (u = t.substr(c + 1)) === "" ? n === void 0 ? M(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : se(c = !(c = e[o]) || !Y(e, o) ? e[o] = {} : c, u, n)) : n === void 0 ? M(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function mt(e) {
        var t, n = {};
        for (t in e) Y(e, t) && (n[t] = e[t]);
        return n;
      }
      var _ = [].concat;
      function ze(e) {
        return _.apply([], e);
      }
      var ot = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ze([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return F[e];
      }), Fe = new Set(ot.map(function(e) {
        return F[e];
      })), H = null;
      function we(e) {
        return H = /* @__PURE__ */ new WeakMap(), e = function t(n) {
          if (!n || typeof n != "object") return n;
          var r = H.get(n);
          if (r) return r;
          if (M(n)) {
            r = [], H.set(n, r);
            for (var a = 0, o = n.length; a < o; ++a) r.push(t(n[a]));
          } else if (Fe.has(n.constructor)) r = n;
          else {
            var u, c = oe(n);
            for (u in r = c === Object.prototype ? {} : Object.create(c), H.set(n, r), n) Y(n, u) && (r[u] = t(n[u]));
          }
          return r;
        }(e), H = null, e;
      }
      var rt = {}.toString;
      function Ue(e) {
        return rt.call(e).slice(8, -1);
      }
      var yt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", re = typeof yt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[yt]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ve(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var je = {};
      function Re(e) {
        var t, n, r, a;
        if (arguments.length === 1) {
          if (M(e)) return e.slice();
          if (this === je && typeof e == "string") return [e];
          if (a = re(e)) {
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
      var w = Dt.reduce(function(e, t) {
        return e[t + "Error"] = T[t], e;
      }, {}), J = ke.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = T[t]), e;
      }, {});
      function V() {
      }
      function ue(e) {
        return e;
      }
      function xe(e, t) {
        return e == null || e === ue ? t : function(n) {
          return t(e(n));
        };
      }
      function de(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function He(e, t) {
        return e === V ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? de(r, this.onsuccess) : r), a && (this.onerror = this.onerror ? de(a, this.onerror) : a), o !== void 0 ? o : n;
        };
      }
      function Ee(e, t) {
        return e === V ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? de(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? de(r, this.onerror) : r);
        };
      }
      function Ke(e, t) {
        return e === V ? t : function(n) {
          var r = e.apply(this, arguments);
          G(n, r);
          var a = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? de(a, this.onsuccess) : a), o && (this.onerror = this.onerror ? de(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : G(r, n);
        };
      }
      function vn(e, t) {
        return e === V ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function vt(e, t) {
        return e === V ? t : function() {
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
      J.ModifyError = at, J.DexieError = Ye, J.BulkError = Xe;
      var Ne = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Pt(e) {
        Ne = e;
      }
      var Ct = {}, ar = 100, ot = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, oe(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, oe(t), e];
      }(), Dt = ot[0], ke = ot[1], ot = ot[2], ke = ke && ke.then, it = Dt && Dt.constructor, gn = !!ot, Nt = function(e, t) {
        Rt.push([e, t]), Gt && (queueMicrotask($r), Gt = !1);
      }, bn = !0, Gt = !0, st = [], Qt = [], wn = ue, We = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: V, pgp: !1, env: {}, finalize: V }, U = We, Rt = [], ut = 0, zt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = U;
        if (typeof e != "function") {
          if (e !== Ct) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Tn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function n(r, a) {
          try {
            a(function(o) {
              if (r._state === null) {
                if (o === r) throw new TypeError("A promise cannot be resolved with itself.");
                var u = r._lib && gt();
                o && typeof o.then == "function" ? n(r, function(c, f) {
                  o instanceof j ? o._then(c, f) : o.then(c, f);
                }) : (r._state = !0, r._value = o, ir(r)), u && bt();
              }
            }, Tn.bind(null, r));
          } catch (o) {
            Tn(r, o);
          }
        }(this, e);
      }
      var En = { get: function() {
        var e = U, t = Wt;
        function n(r, a) {
          var o = this, u = !e.global && (e !== U || t !== Wt), c = u && !Je(), f = new j(function(d, y) {
            _n(o, new or(ur(r, e, u, c), ur(a, e, u, c), d, y, e));
          });
          return this._consoleTask && (f._consoleTask = this._consoleTask), f;
        }
        return n.prototype = Ct, n;
      }, set: function(e) {
        ee(this, "then", e && e.prototype === Ct ? En : { get: function() {
          return e;
        }, set: En.set });
      } };
      function or(e, t, n, r, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = a;
      }
      function Tn(e, t) {
        var n, r;
        Qt.push(t), e._state === null && (n = e._lib && gt(), t = wn(t), e._state = !1, e._value = t, r = e, st.some(function(a) {
          return a._value === r._value;
        }) || st.push(r), ir(e), n && bt());
      }
      function ir(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) _n(e, t[n]);
        var a = e._PSD;
        --a.ref || a.finalize(), ut === 0 && (++ut, Nt(function() {
          --ut == 0 && Sn();
        }, []));
      }
      function _n(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++ut, Nt(Wr, [n, e, t]);
        } else e._listeners.push(t);
      }
      function Wr(e, t, n) {
        try {
          var r, a = t._value;
          !t._state && Qt.length && (Qt = []), r = Ne && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || Qt.indexOf(a) !== -1 || function(o) {
            for (var u = st.length; u; ) if (st[--u]._value === o._value) return st.splice(u, 1);
          }(t), n.resolve(r);
        } catch (o) {
          n.reject(o);
        } finally {
          --ut == 0 && Sn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function $r() {
        ct(We, function() {
          gt() && bt();
        });
      }
      function gt() {
        var e = bn;
        return Gt = bn = !1, e;
      }
      function bt() {
        var e, t, n;
        do
          for (; 0 < Rt.length; ) for (e = Rt, Rt = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < Rt.length);
        Gt = bn = !0;
      }
      function Sn() {
        var e = st;
        st = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = zt.slice(0), n = t.length; n; ) t[--n]();
      }
      function Yt(e) {
        return new j(Ct, !1, e);
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
      ae(j.prototype, { then: En, _then: function(e, t) {
        _n(this, new or(null, null, e, t, U));
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
      } }), typeof Symbol < "u" && Symbol.toStringTag && ee(j.prototype, Symbol.toStringTag, "Dexie.Promise"), We.env = sr(), ae(j, { all: function() {
        var e = Re.apply(null, arguments).map($t);
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
        }) : new j(Ct, !0, e);
      }, reject: Yt, race: function() {
        var e = Re.apply(null, arguments).map($t);
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
        return wn;
      }, set: function(e) {
        wn = e;
      } }, follow: function(e, t) {
        return new j(function(n, r) {
          return $e(function(a, o) {
            var u = U;
            u.unhandleds = [], u.onunhandled = o, u.finalize = de(function() {
              var c, f = this;
              c = function() {
                f.unhandleds.length === 0 ? a() : o(f.unhandleds[0]);
              }, zt.push(function d() {
                c(), zt.splice(zt.indexOf(d), 1);
              }), ++ut, Nt(function() {
                --ut == 0 && Sn();
              }, []);
            }, u.finalize), e();
          }, t, n, r);
        });
      } }), it && (it.allSettled && ee(j, "allSettled", function() {
        var e = Re.apply(null, arguments).map($t);
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
      }), it.any && typeof AggregateError < "u" && ee(j, "any", function() {
        var e = Re.apply(null, arguments).map($t);
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
      var Te = { awaits: 0, echoes: 0, id: 0 }, Jr = 0, Xt = [], Ht = 0, Wt = 0, Zr = 0;
      function $e(e, t, n, r) {
        var a = U, o = Object.create(a);
        return o.parent = a, o.ref = 0, o.global = !1, o.id = ++Zr, We.env, o.env = gn ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && G(o, t), ++a.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = ct(o, e, n, r), o.ref === 0 && o.finalize(), r;
      }
      function wt() {
        return Te.id || (Te.id = ++Jr), ++Te.awaits, Te.echoes += ar, Te.id;
      }
      function Je() {
        return !!Te.awaits && (--Te.awaits == 0 && (Te.id = 0), Te.echoes = Te.awaits * ar, !0);
      }
      function $t(e) {
        return Te.echoes && e && e.constructor === it ? (wt(), e.then(function(t) {
          return Je(), t;
        }, function(t) {
          return Je(), ye(t);
        })) : e;
      }
      function ea() {
        var e = Xt[Xt.length - 1];
        Xt.pop(), Ze(e, !1);
      }
      function Ze(e, t) {
        var n, r = U;
        (t ? !Te.echoes || Ht++ && e === U : !Ht || --Ht && e === U) || queueMicrotask(t ? (function(a) {
          ++Wt, Te.echoes && --Te.echoes != 0 || (Te.echoes = Te.awaits = Te.id = 0), Xt.push(U), Ze(a, !0);
        }).bind(null, e) : ea), e !== U && (U = e, r === We && (We.env = sr()), gn && (n = We.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(F, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function sr() {
        var e = F.Promise;
        return gn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(F, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function ct(e, t, n, r, a) {
        var o = U;
        try {
          return Ze(e, !0), t(n, r, a);
        } finally {
          Ze(o, !1);
        }
      }
      function ur(e, t, n, r) {
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
      function On(e) {
        Promise === it && Te.echoes === 0 ? Ht === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ke).indexOf("[native code]") === -1 && (wt = Je = V);
      var ye = j.reject, lt = "￿", Ge = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", cr = "String expected.", Et = [], Jt = "__dbnames", xn = "readonly", An = "readwrite";
      function ft(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var lr = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Zt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = we(t))[e], t;
        };
      }
      function fr() {
        throw T.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function $(e, t) {
        try {
          var n = pr(e), r = pr(t);
          if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(a, o) {
                for (var u = a.length, c = o.length, f = u < c ? u : c, d = 0; d < f; ++d) if (a[d] !== o[d]) return a[d] < o[d] ? -1 : 1;
                return u === c ? 0 : u < c ? -1 : 1;
              }(dr(e), dr(t));
            case "Array":
              return function(a, o) {
                for (var u = a.length, c = o.length, f = u < c ? u : c, d = 0; d < f; ++d) {
                  var y = $(a[d], o[d]);
                  if (y !== 0) return y;
                }
                return u === c ? 0 : u < c ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function pr(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Ue(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function dr(e) {
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
      var hr = (ce.prototype._trans = function(e, t, n) {
        var r = this._tx || U.trans, a = this.name, o = Ne && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(d, y, l) {
          if (!l.schema[a]) throw new T.NotFound("Table " + a + " not part of transaction");
          return t(l.idbtrans, l);
        }
        var c = gt();
        try {
          var f = r && r.db._novip === this.db._novip ? r === U.trans ? r._promise(e, u, n) : $e(function() {
            return r._promise(e, u, n);
          }, { trans: r, transless: U.transless || U }) : function d(y, l, b, p) {
            if (y.idbdb && (y._state.openComplete || U.letThrough || y._vip)) {
              var m = y._createTransaction(l, b, y._dbSchema);
              try {
                m.create(), y._state.PR1398_maxLoop = 3;
              } catch (g) {
                return g.name === s.InvalidState && y.isOpen() && 0 < --y._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), y.close({ disableAutoOpen: !1 }), y.open().then(function() {
                  return d(y, l, b, p);
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
              y.open().catch(V);
            }
            return y._state.dbReadyPromise.then(function() {
              return d(y, l, b, p);
            });
          }(this.db, e, [this.name], u);
          return o && (f._consoleTask = o, f = f.catch(function(d) {
            return console.trace(d), ye(d);
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
        if (M(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = L(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(c) {
          if (c.compound && t.every(function(d) {
            return 0 <= c.keyPath.indexOf(d);
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
          return $(c, f) === 0;
        }
        var u = t.reduce(function(l, f) {
          var d = l[0], y = l[1], l = r[f], b = e[f];
          return [d || l, d || !l ? ft(y, l && l.multi ? function(p) {
            return p = Oe(p, f), M(p) && p.some(function(m) {
              return a(b, m);
            });
          } : function(p) {
            return a(b, Oe(p, f));
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
        return new this.db.Collection(new this.db.WhereClause(this, M(e) ? "[".concat(e.join("+"), "]") : e));
      }, ce.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ce.prototype.mapToClass = function(e) {
        var t, n = this.db, r = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof fr && (function(f, d) {
          if (typeof d != "function" && d !== null) throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
          function y() {
            this.constructor = f;
          }
          P(f, d), f.prototype = d === null ? Object.create(d) : (y.prototype = d.prototype, new y());
        }(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return r;
        }, e = a);
        for (var o = /* @__PURE__ */ new Set(), u = e.prototype; u; u = oe(u)) Object.getOwnPropertyNames(u).forEach(function(f) {
          return o.add(f);
        });
        function c(f) {
          if (!f) return f;
          var d, y = Object.create(e.prototype);
          for (d in f) if (!o.has(d)) try {
            y[d] = f[d];
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
        return typeof e != "object" || M(e) ? this.where(":id").equals(e).modify(t) : (e = Oe(e, this.schema.primKey.keyPath), e === void 0 ? ye(new T.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
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
          return e.core.mutate({ trans: t, type: "deleteRange", range: lr }).then(function(n) {
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
          var d = r.schema.primKey, c = d.auto, d = d.keyPath;
          if (d && a) throw new T.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var f = e.length, d = d && c ? e.map(Zt(d)) : e;
          return r.core.mutate({ trans: u, type: "add", keys: a, values: d, wantResults: o }).then(function(m) {
            var l = m.numFailures, b = m.results, p = m.lastResult, m = m.failures;
            if (l === 0) return o ? b : p;
            throw new Xe("".concat(r.name, ".bulkAdd(): ").concat(l, " of ").concat(f, " operations failed"), m);
          });
        });
      }, ce.prototype.bulkPut = function(e, t, n) {
        var r = this, a = Array.isArray(t) ? t : void 0, o = (n = n || (a ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var d = r.schema.primKey, c = d.auto, d = d.keyPath;
          if (d && a) throw new T.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new T.InvalidArgument("Arguments objects and keys must have the same length");
          var f = e.length, d = d && c ? e.map(Zt(d)) : e;
          return r.core.mutate({ trans: u, type: "put", keys: a, values: d, wantResults: o }).then(function(m) {
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
            var f = [], d = [];
            e.forEach(function(l, b) {
              var p = l.key, m = l.changes, g = c[b];
              if (g) {
                for (var v = 0, E = Object.keys(m); v < E.length; v++) {
                  var O = E[v], x = m[O];
                  if (O === t.schema.primKey.keyPath) {
                    if ($(x, p) !== 0) throw new T.Constraint("Cannot update primary key in bulkUpdate()");
                  } else se(g, O, x);
                }
                o.push(b), f.push(p), d.push(g);
              }
            });
            var y = f.length;
            return n.mutate({ trans: u, type: "put", keys: f, values: d, updates: { keys: r, changeSpecs: a } }).then(function(l) {
              var b = l.numFailures, p = l.failures;
              if (b === 0) return y;
              for (var m = 0, g = Object.keys(p); m < g.length; m++) {
                var v, E = g[m], O = o[Number(E)];
                O != null && (v = p[E], delete p[E], p[O] = v);
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
      function It(e) {
        function t(u, c) {
          if (c) {
            for (var f = arguments.length, d = new Array(f - 1); --f; ) d[f - 1] = arguments[f];
            return n[u].subscribe.apply(null, d), e;
          }
          if (typeof u == "string") return n[u];
        }
        var n = {};
        t.addEventType = o;
        for (var r = 1, a = arguments.length; r < a; ++r) o(arguments[r]);
        return t;
        function o(u, c, f) {
          if (typeof u != "object") {
            var d;
            c = c || vn;
            var y = { subscribers: [], fire: f = f || V, subscribe: function(l) {
              y.subscribers.indexOf(l) === -1 && (y.subscribers.push(l), y.fire = c(y.fire, l));
            }, unsubscribe: function(l) {
              y.subscribers = y.subscribers.filter(function(b) {
                return b !== l;
              }), y.fire = y.subscribers.reduce(c, f);
            } };
            return n[u] = t[u] = y;
          }
          L(d = u).forEach(function(l) {
            var b = d[l];
            if (M(b)) o(l, d[l][0], d[l][1]);
            else {
              if (b !== "asap") throw new T.InvalidArgument("Invalid event config");
              var p = o(l, ue, function() {
                for (var m = arguments.length, g = new Array(m); m--; ) g[m] = arguments[m];
                p.subscribers.forEach(function(v) {
                  pe(function() {
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
      function Tt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Pn(e, t) {
        e.filter = ft(e.filter, t);
      }
      function Cn(e, t, n) {
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
      function mr(e, t, n) {
        var r = tn(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function nn(e, t, n, r) {
        var a = e.replayFilter ? ft(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, u = function(c, f, d) {
            var y, l;
            a && !a(f, d, function(b) {
              return f.stop(b);
            }, function(b) {
              return f.fail(b);
            }) || ((l = "" + (y = f.primaryKey)) == "[object ArrayBuffer]" && (l = "" + new Uint8Array(y)), Y(o, l) || (o[l] = !0, t(c, f, d)));
          };
          return Promise.all([e.or._iterate(u, n), yr(mr(e, r, n), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return yr(mr(e, r, n), ft(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function yr(e, t, n, r) {
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
              o.stop(c), u = V;
            }, function(c) {
              o.fail(c), u = V;
            }) || a(o.value, o, function(c) {
              return u = c;
            }), u();
          });
        });
      }
      var Ft = (vr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (M(n)) return D(D([], M(e) ? e : [], !0), n).sort();
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
          if (M(r)) return M(e) ? e.filter(function(a) {
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
      }, vr);
      function vr(e) {
        this["@@propmod"] = e;
      }
      var ta = (ne.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ye.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, ne.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, ye.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, ne.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = ft(t.algorithm, e);
      }, ne.prototype._iterate = function(e, t) {
        return nn(this._ctx, e, t, this._ctx.table.core);
      }, ne.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && G(n, e), t._ctx = n, t;
      }, ne.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ne.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return nn(t, e, n, t.table.core);
        });
      }, ne.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, a = r.table.core;
          if (Tt(r, !0)) return a.count({ trans: n, query: { index: tn(r, a.schema), range: r.range } }).then(function(u) {
            return Math.min(u, r.limit);
          });
          var o = 0;
          return nn(r, function() {
            return ++o, !1;
          }, n, a).then(function() {
            return o;
          });
        }).then(e);
      }, ne.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), r = n[0], a = n.length - 1;
        function o(f, d) {
          return d ? o(f[n[d]], d - 1) : f[r];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function c(f, d) {
          return $(o(f, a), o(d, a)) * u;
        }
        return this.toArray(function(f) {
          return f.sort(c);
        }).then(t);
      }, ne.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx;
          if (r.dir === "next" && Tt(r, !0) && 0 < r.limit) {
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
      }, ne.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, Tt(t) ? Cn(t, function() {
          var n = e;
          return function(r, a) {
            return n === 0 || (n === 1 ? --n : a(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : Cn(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, ne.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Cn(this._ctx, function() {
          var t = e;
          return function(n, r, a) {
            return --t <= 0 && r(a), 0 <= t;
          };
        }, !0), this;
      }, ne.prototype.until = function(e, t) {
        return Pn(this._ctx, function(n, r, a) {
          return !e(n.value) || (r(a), t);
        }), this;
      }, ne.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, ne.prototype.last = function(e) {
        return this.reverse().first(e);
      }, ne.prototype.filter = function(e) {
        var t;
        return Pn(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = ft(t.isMatch, e), this;
      }, ne.prototype.and = function(e) {
        return this.filter(e);
      }, ne.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, ne.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ne.prototype.desc = function() {
        return this.reverse();
      }, ne.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.key, r);
        });
      }, ne.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, ne.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.primaryKey, r);
        });
      }, ne.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, a) {
          n.push(a.key);
        }).then(function() {
          return n;
        }).then(e);
      }, ne.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && Tt(t, !0) && 0 < t.limit) return this._read(function(r) {
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
      }, ne.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, ne.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, ne.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, ne.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Pn(this._ctx, function(a) {
          var r = a.primaryKey.toString(), a = Y(t, r);
          return t[r] = !0, !a;
        }), this;
      }, ne.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var a, o, u;
          u = typeof e == "function" ? e : (a = L(e), o = a.length, function(E) {
            for (var O = !1, x = 0; x < o; ++x) {
              var A = a[x], N = e[A], k = Oe(E, A);
              N instanceof Ft ? (se(E, A, N.execute(k)), O = !0) : k !== N && (se(E, A, N), O = !0);
            }
            return O;
          });
          var c = n.table.core, l = c.schema.primaryKey, f = l.outbound, d = l.extractKey, y = 200, l = t.db._options.modifyChunkSize;
          l && (y = typeof l == "object" ? l[c.name] || l["*"] || 200 : l);
          function b(E, A) {
            var x = A.failures, A = A.numFailures;
            m += E - A;
            for (var N = 0, k = L(x); N < k.length; N++) {
              var R = k[N];
              p.push(x[R]);
            }
          }
          var p = [], m = 0, g = [], v = e === gr;
          return t.clone().primaryKeys().then(function(E) {
            function O(A) {
              var N = Math.min(y, E.length - A), k = E.slice(A, A + N);
              return (v ? Promise.resolve([]) : c.getMany({ trans: r, keys: k, cache: "immutable" })).then(function(R) {
                var I = [], K = [], B = f ? [] : null, q = v ? k : [];
                if (!v) for (var X = 0; X < N; ++X) {
                  var Z = R[X], z = { value: we(Z), primKey: E[A + X] };
                  u.call(z, z.value, z) !== !1 && (z.value == null ? q.push(E[A + X]) : f || $(d(Z), d(z.value)) === 0 ? (K.push(z.value), f && B.push(E[A + X])) : (q.push(E[A + X]), I.push(z.value)));
                }
                return Promise.resolve(0 < I.length && c.mutate({ trans: r, type: "add", values: I }).then(function(he) {
                  for (var Q in he.failures) q.splice(parseInt(Q), 1);
                  b(I.length, he);
                })).then(function() {
                  return (0 < K.length || x && typeof e == "object") && c.mutate({ trans: r, type: "put", keys: B, values: K, criteria: x, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < A }).then(function(he) {
                    return b(K.length, he);
                  });
                }).then(function() {
                  return (0 < q.length || x && v) && c.mutate({ trans: r, type: "delete", keys: q, criteria: x, isAdditionalChunk: 0 < A }).then(function(he) {
                    return en(n.table, q, he);
                  }).then(function(he) {
                    return b(q.length, he);
                  });
                }).then(function() {
                  return E.length > A + N && O(A + y);
                });
              });
            }
            var x = Tt(n) && n.limit === 1 / 0 && (typeof e != "function" || v) && { index: n.index, range: n.range };
            return O(0).then(function() {
              if (0 < p.length) throw new at("Error modifying one or more objects", p, m, g);
              return E.length;
            });
          });
        });
      }, ne.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !Tt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(gr) : this._write(function(n) {
          var r = e.table.core.schema.primaryKey, a = t;
          return e.table.core.count({ trans: n, query: { index: r, range: a } }).then(function(o) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: a }).then(function(f) {
              var c = f.failures, f = f.numFailures;
              if (f) throw new at("Could not delete some values", Object.keys(c).map(function(d) {
                return c[d];
              }), o - f);
              return o - f;
            });
          });
        });
      }, ne);
      function ne() {
      }
      var gr = function(e, t) {
        return t.value = null;
      };
      function na(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function ra(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function Ie(e, t, n) {
        return e = e instanceof wr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function _t(e) {
        return new e.Collection(e, function() {
          return br("");
        }).limit(0);
      }
      function rn(e, t, n, r) {
        var a, o, u, c, f, d, y, l = n.length;
        if (!n.every(function(m) {
          return typeof m == "string";
        })) return Ie(e, cr);
        function b(m) {
          a = m === "next" ? function(v) {
            return v.toUpperCase();
          } : function(v) {
            return v.toLowerCase();
          }, o = m === "next" ? function(v) {
            return v.toLowerCase();
          } : function(v) {
            return v.toUpperCase();
          }, u = m === "next" ? na : ra;
          var g = n.map(function(v) {
            return { lower: o(v), upper: a(v) };
          }).sort(function(v, E) {
            return u(v.lower, E.lower);
          });
          c = g.map(function(v) {
            return v.upper;
          }), f = g.map(function(v) {
            return v.lower;
          }), y = (d = m) === "next" ? "" : r;
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
          var O = o(E);
          if (t(O, f, p)) return !0;
          for (var x = null, A = p; A < l; ++A) {
            var N = function(k, R, I, K, B, q) {
              for (var X = Math.min(k.length, K.length), Z = -1, z = 0; z < X; ++z) {
                var he = R[z];
                if (he !== K[z]) return B(k[z], I[z]) < 0 ? k.substr(0, z) + I[z] + I.substr(z + 1) : B(k[z], K[z]) < 0 ? k.substr(0, z) + K[z] + I.substr(z + 1) : 0 <= Z ? k.substr(0, Z) + R[Z] + I.substr(Z + 1) : null;
                B(k[z], he) < 0 && (Z = z);
              }
              return X < K.length && q === "next" ? k + I.substr(k.length) : X < k.length && q === "prev" ? k.substr(0, I.length) : Z < 0 ? null : k.substr(0, Z) + K[Z] + I.substr(Z + 1);
            }(E, O, c[A], f[A], u, d);
            N === null && x === null ? p = A + 1 : (x === null || 0 < u(x, N)) && (x = N);
          }
          return g(x !== null ? function() {
            m.continue(x + y);
          } : v), !1;
        }), e;
      }
      function et(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function br(e) {
        return { type: 1, lower: e, upper: e };
      }
      var wr = (Object.defineProperty(_e.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), _e.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? _t(this) : new this.Collection(this, function() {
            return et(e, t, !n, !r);
          });
        } catch {
          return Ie(this, Ge);
        }
      }, _e.prototype.equals = function(e) {
        return e == null ? Ie(this, Ge) : new this.Collection(this, function() {
          return br(e);
        });
      }, _e.prototype.above = function(e) {
        return e == null ? Ie(this, Ge) : new this.Collection(this, function() {
          return et(e, void 0, !0);
        });
      }, _e.prototype.aboveOrEqual = function(e) {
        return e == null ? Ie(this, Ge) : new this.Collection(this, function() {
          return et(e, void 0, !1);
        });
      }, _e.prototype.below = function(e) {
        return e == null ? Ie(this, Ge) : new this.Collection(this, function() {
          return et(void 0, e, !1, !0);
        });
      }, _e.prototype.belowOrEqual = function(e) {
        return e == null ? Ie(this, Ge) : new this.Collection(this, function() {
          return et(void 0, e);
        });
      }, _e.prototype.startsWith = function(e) {
        return typeof e != "string" ? Ie(this, cr) : this.between(e, e + lt, !0, !0);
      }, _e.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : rn(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], lt);
      }, _e.prototype.equalsIgnoreCase = function(e) {
        return rn(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, _e.prototype.anyOfIgnoreCase = function() {
        var e = Re.apply(je, arguments);
        return e.length === 0 ? _t(this) : rn(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, _e.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Re.apply(je, arguments);
        return e.length === 0 ? _t(this) : rn(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, lt);
      }, _e.prototype.anyOf = function() {
        var e = this, t = Re.apply(je, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return Ie(this, Ge);
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
        var e = Re.apply(je, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Ie(this, Ge);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, _e.prototype.inAnyRange = function(E, t) {
        var n = this, r = this._cmp, a = this._ascending, o = this._descending, u = this._min, c = this._max;
        if (E.length === 0) return _t(this);
        if (!E.every(function(O) {
          return O[0] !== void 0 && O[1] !== void 0 && a(O[0], O[1]) <= 0;
        })) return Ie(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", T.InvalidArgument);
        var f = !t || t.includeLowers !== !1, d = t && t.includeUppers === !0, y, l = a;
        function b(O, x) {
          return l(O[0], x[0]);
        }
        try {
          (y = E.reduce(function(O, x) {
            for (var A = 0, N = O.length; A < N; ++A) {
              var k = O[A];
              if (r(x[0], k[1]) < 0 && 0 < r(x[1], k[0])) {
                k[0] = u(k[0], x[0]), k[1] = c(k[1], x[1]);
                break;
              }
            }
            return A === N && O.push(x), O;
          }, [])).sort(b);
        } catch {
          return Ie(this, Ge);
        }
        var p = 0, m = d ? function(O) {
          return 0 < a(O, y[p][1]);
        } : function(O) {
          return 0 <= a(O, y[p][1]);
        }, g = f ? function(O) {
          return 0 < o(O, y[p][0]);
        } : function(O) {
          return 0 <= o(O, y[p][0]);
        }, v = m, E = new this.Collection(this, function() {
          return et(y[0][0], y[y.length - 1][1], !f, !d);
        });
        return E._ondirectionchange = function(O) {
          l = O === "next" ? (v = m, a) : (v = g, o), y.sort(b);
        }, E._addAlgorithm(function(O, x, A) {
          for (var N, k = O.key; v(k); ) if (++p === y.length) return x(A), !1;
          return !m(N = k) && !g(N) || (n._cmp(k, y[p][1]) === 0 || n._cmp(k, y[p][0]) === 0 || x(function() {
            l === a ? O.continue(y[p][0]) : O.continue(y[p][1]);
          }), !1);
        }), E;
      }, _e.prototype.startsWithAnyOf = function() {
        var e = Re.apply(je, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? _t(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + lt];
        })) : Ie(this, "startsWithAnyOf() only works with strings");
      }, _e);
      function _e() {
      }
      function qe(e) {
        return fe(function(t) {
          return Bt(t), e(t.target.error), !1;
        });
      }
      function Bt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Kt = "storagemutated", Dn = "x-storagemutated-1", tt = It(null, Kt), aa = (Me.prototype._lock = function() {
        return te(!U.global), ++this._reculock, this._reculock !== 1 || U.global || (U.lockOwnerFor = this), this;
      }, Me.prototype._unlock = function() {
        if (te(!U.global), --this._reculock == 0) for (U.global || (U.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            ct(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Me.prototype._locked = function() {
        return this._reculock && U.lockOwnerFor !== this;
      }, Me.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (te(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new T.DatabaseClosed(r);
          case "MissingAPIError":
            throw new T.MissingAPI(r.message, r);
          default:
            throw new T.OpenFailed(r);
        }
        if (!this.active) throw new T.TransactionInactive();
        return te(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = fe(function(a) {
          Bt(a), t._reject(e.error);
        }), e.onabort = fe(function(a) {
          Bt(a), t.active && t._reject(new T.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = fe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && tt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Me.prototype._promise = function(e, t, n) {
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
      }, Me.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Me.prototype.waitFor = function(e) {
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
      }, Me.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new T.Abort()));
      }, Me.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (Y(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new T.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, Me);
      function Me() {
      }
      function Nn(e, t, n, r, a, o, u, c) {
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
      function In(e) {
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
      function Tr(e) {
        return [].slice.call(e);
      }
      var oa = 0;
      function qt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function ia(e, t, f) {
        function r(v) {
          if (v.type === 3) return null;
          if (v.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var p = v.lower, m = v.upper, g = v.lowerOpen, v = v.upperOpen;
          return p === void 0 ? m === void 0 ? null : t.upperBound(m, !!v) : m === void 0 ? t.lowerBound(p, !!g) : t.bound(p, m, !!g, !!v);
        }
        function a(b) {
          var p, m = b.name;
          return { name: m, schema: b, mutate: function(g) {
            var v = g.trans, E = g.type, O = g.keys, x = g.values, A = g.range;
            return new Promise(function(N, k) {
              N = fe(N);
              var R = v.objectStore(m), I = R.keyPath == null, K = E === "put" || E === "add";
              if (!K && E !== "delete" && E !== "deleteRange") throw new Error("Invalid operation type: " + E);
              var B, q = (O || x || { length: 1 }).length;
              if (O && x && O.length !== x.length) throw new Error("Given keys array must have same length as given values array.");
              if (q === 0) return N({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function X(De) {
                ++he, Bt(De);
              }
              var Z = [], z = [], he = 0;
              if (E === "deleteRange") {
                if (A.type === 4) return N({ numFailures: he, failures: z, results: [], lastResult: void 0 });
                A.type === 3 ? Z.push(B = R.clear()) : Z.push(B = R.delete(r(A)));
              } else {
                var I = K ? I ? [x, O] : [x, null] : [O, null], Q = I[0], Pe = I[1];
                if (K) for (var Ce = 0; Ce < q; ++Ce) Z.push(B = Pe && Pe[Ce] !== void 0 ? R[E](Q[Ce], Pe[Ce]) : R[E](Q[Ce])), B.onerror = X;
                else for (Ce = 0; Ce < q; ++Ce) Z.push(B = R[E](Q[Ce])), B.onerror = X;
              }
              function yn(De) {
                De = De.target.result, Z.forEach(function(ht, $n) {
                  return ht.error != null && (z[$n] = ht.error);
                }), N({ numFailures: he, failures: z, results: E === "delete" ? O : Z.map(function(ht) {
                  return ht.result;
                }), lastResult: De });
              }
              B.onerror = function(De) {
                X(De), yn(De);
              }, B.onsuccess = yn;
            });
          }, getMany: function(g) {
            var v = g.trans, E = g.keys;
            return new Promise(function(O, x) {
              O = fe(O);
              for (var A, N = v.objectStore(m), k = E.length, R = new Array(k), I = 0, K = 0, B = function(Z) {
                Z = Z.target, R[Z._pos] = Z.result, ++K === I && O(R);
              }, q = qe(x), X = 0; X < k; ++X) E[X] != null && ((A = N.get(E[X]))._pos = X, A.onsuccess = B, A.onerror = q, ++I);
              I === 0 && O(R);
            });
          }, get: function(g) {
            var v = g.trans, E = g.key;
            return new Promise(function(O, x) {
              O = fe(O);
              var A = v.objectStore(m).get(E);
              A.onsuccess = function(N) {
                return O(N.target.result);
              }, A.onerror = qe(x);
            });
          }, query: (p = d, function(g) {
            return new Promise(function(v, E) {
              v = fe(v);
              var O, x, A, I = g.trans, N = g.values, k = g.limit, B = g.query, R = k === 1 / 0 ? void 0 : k, K = B.index, B = B.range, I = I.objectStore(m), K = K.isPrimaryKey ? I : I.index(K.name), B = r(B);
              if (k === 0) return v({ result: [] });
              p ? ((R = N ? K.getAll(B, R) : K.getAllKeys(B, R)).onsuccess = function(q) {
                return v({ result: q.target.result });
              }, R.onerror = qe(E)) : (O = 0, x = !N && "openKeyCursor" in K ? K.openKeyCursor(B) : K.openCursor(B), A = [], x.onsuccess = function(q) {
                var X = x.result;
                return X ? (A.push(N ? X.value : X.primaryKey), ++O === k ? v({ result: A }) : void X.continue()) : v({ result: A });
              }, x.onerror = qe(E));
            });
          }), openCursor: function(g) {
            var v = g.trans, E = g.values, O = g.query, x = g.reverse, A = g.unique;
            return new Promise(function(N, k) {
              N = fe(N);
              var K = O.index, R = O.range, I = v.objectStore(m), I = K.isPrimaryKey ? I : I.index(K.name), K = x ? A ? "prevunique" : "prev" : A ? "nextunique" : "next", B = !E && "openKeyCursor" in I ? I.openKeyCursor(r(R), K) : I.openCursor(r(R), K);
              B.onerror = qe(k), B.onsuccess = fe(function(q) {
                var X, Z, z, he, Q = B.result;
                Q ? (Q.___id = ++oa, Q.done = !1, X = Q.continue.bind(Q), Z = (Z = Q.continuePrimaryKey) && Z.bind(Q), z = Q.advance.bind(Q), he = function() {
                  throw new Error("Cursor not stopped");
                }, Q.trans = v, Q.stop = Q.continue = Q.continuePrimaryKey = Q.advance = function() {
                  throw new Error("Cursor not started");
                }, Q.fail = fe(k), Q.next = function() {
                  var Pe = this, Ce = 1;
                  return this.start(function() {
                    return Ce-- ? Pe.continue() : Pe.stop();
                  }).then(function() {
                    return Pe;
                  });
                }, Q.start = function(Pe) {
                  function Ce() {
                    if (B.result) try {
                      Pe();
                    } catch (De) {
                      Q.fail(De);
                    }
                    else Q.done = !0, Q.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, Q.stop();
                  }
                  var yn = new Promise(function(De, ht) {
                    De = fe(De), B.onerror = qe(ht), Q.fail = ht, Q.stop = function($n) {
                      Q.stop = Q.continue = Q.continuePrimaryKey = Q.advance = he, De($n);
                    };
                  });
                  return B.onsuccess = fe(function(De) {
                    B.onsuccess = Ce, Ce();
                  }), Q.continue = X, Q.continuePrimaryKey = Z, Q.advance = z, Ce(), yn;
                }, N(Q)) : N(null);
              }, k);
            });
          }, count: function(g) {
            var v = g.query, E = g.trans, O = v.index, x = v.range;
            return new Promise(function(A, N) {
              var k = E.objectStore(m), R = O.isPrimaryKey ? k : k.index(O.name), k = r(x), R = k ? R.count(k) : R.count();
              R.onsuccess = fe(function(I) {
                return A(I.target.result);
              }), R.onerror = qe(N);
            });
          } };
        }
        var o, u, c, y = (u = f, c = Tr((o = e).objectStoreNames), { schema: { name: o.name, tables: c.map(function(b) {
          return u.objectStore(b);
        }).map(function(b) {
          var p = b.keyPath, v = b.autoIncrement, m = M(p), g = {}, v = { name: b.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: p == null, compound: m, keyPath: p, autoIncrement: v, unique: !0, extractKey: In(p) }, indexes: Tr(b.indexNames).map(function(E) {
            return b.index(E);
          }).map(function(A) {
            var O = A.name, x = A.unique, N = A.multiEntry, A = A.keyPath, N = { name: O, compound: M(A), keyPath: A, unique: x, multiEntry: N, extractKey: In(A) };
            return g[qt(A)] = N;
          }), getIndexByKeyPath: function(E) {
            return g[qt(E)];
          } };
          return g[":id"] = v.primaryKey, p != null && (g[qt(p)] = v.primaryKey), v;
        }) }, hasGetAll: 0 < c.length && "getAll" in u.objectStore(c[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), f = y.schema, d = y.hasGetAll, y = f.tables.map(a), l = {};
        return y.forEach(function(b) {
          return l[b.name] = b;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(b) {
          if (!l[b]) throw new Error("Table '".concat(b, "' not found"));
          return l[b];
        }, MIN_KEY: -1 / 0, MAX_KEY: jt(t), schema: f };
      }
      function sa(e, t, n, r) {
        var a = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = ia(t, a, r), e.dbcore.reduce(function(o, u) {
          return u = u.create, h(h({}, o), u(o));
        }, r)) };
      }
      function an(e, r) {
        var n = r.db, r = sa(e._middlewares, n, e._deps, r);
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
            var c = function f(d, y) {
              return W(d, y) || (d = oe(d)) && f(d, y);
            }(u, a);
            (!c || "value" in c && c.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? ee(u, a, { get: function() {
              return this.table(a);
            }, set: function(f) {
              ie(this, a, { value: f, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[a] = new e.Table(a, o));
          });
        });
      }
      function kn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function ua(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ca(e, t, n, r) {
        var a = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Rn("$meta", Sr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, a);
        o.create(n), o._completion.catch(r);
        var u = o._reject.bind(o), c = U.transless || U;
        $e(function() {
          return U.trans = o, U.transless = c, t !== 0 ? (an(e, n), d = t, ((f = o).storeNames.includes("$meta") ? f.table("$meta").get("version").then(function(y) {
            return y ?? d;
          }) : j.resolve(d)).then(function(y) {
            return b = y, p = o, m = n, g = [], y = (l = e)._versions, v = l._dbSchema = un(0, l.idbdb, m), (y = y.filter(function(E) {
              return E._cfg.version >= b;
            })).length !== 0 ? (y.forEach(function(E) {
              g.push(function() {
                var O = v, x = E._cfg.dbschema;
                cn(l, O, m), cn(l, x, m), v = l._dbSchema = x;
                var A = Fn(O, x);
                A.add.forEach(function(K) {
                  Bn(m, K[0], K[1].primKey, K[1].indexes);
                }), A.change.forEach(function(K) {
                  if (K.recreate) throw new T.Upgrade("Not yet support for changing primary key");
                  var B = m.objectStore(K.name);
                  K.add.forEach(function(q) {
                    return sn(B, q);
                  }), K.change.forEach(function(q) {
                    B.deleteIndex(q.name), sn(B, q);
                  }), K.del.forEach(function(q) {
                    return B.deleteIndex(q);
                  });
                });
                var N = E._cfg.contentUpgrade;
                if (N && E._cfg.version > b) {
                  an(l, m), p._memoizedTables = {};
                  var k = mt(x);
                  A.del.forEach(function(K) {
                    k[K] = O[K];
                  }), kn(l, [l.Transaction.prototype]), on(l, [l.Transaction.prototype], L(k), k), p.schema = k;
                  var R, I = Be(N);
                  return I && wt(), A = j.follow(function() {
                    var K;
                    (R = N(p)) && I && (K = Je.bind(null, null), R.then(K, K));
                  }), R && typeof R.then == "function" ? j.resolve(R) : A.then(function() {
                    return R;
                  });
                }
              }), g.push(function(O) {
                var x, A, N = E._cfg.dbschema;
                x = N, A = O, [].slice.call(A.db.objectStoreNames).forEach(function(k) {
                  return x[k] == null && A.db.deleteObjectStore(k);
                }), kn(l, [l.Transaction.prototype]), on(l, [l.Transaction.prototype], l._storeNames, l._dbSchema), p.schema = l._dbSchema;
              }), g.push(function(O) {
                l.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(l.idbdb.version / 10) === E._cfg.version ? (l.idbdb.deleteObjectStore("$meta"), delete l._dbSchema.$meta, l._storeNames = l._storeNames.filter(function(x) {
                  return x !== "$meta";
                })) : O.objectStore("$meta").put(E._cfg.version, "version"));
              });
            }), function E() {
              return g.length ? j.resolve(g.shift()(p.idbtrans)).then(E) : j.resolve();
            }().then(function() {
              _r(v, m);
            })) : j.resolve();
            var l, b, p, m, g, v;
          }).catch(u)) : (L(a).forEach(function(y) {
            Bn(n, y, a[y].primKey, a[y].indexes);
          }), an(e, n), void j.follow(function() {
            return e.on.populate.fire(o);
          }).catch(u));
          var f, d;
        });
      }
      function la(e, t) {
        _r(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = un(0, e.idbdb, t);
        cn(e, e._dbSchema, t);
        for (var r = 0, a = Fn(n, e._dbSchema).change; r < a.length; r++) {
          var o = function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var c = t.objectStore(u.name);
            u.add.forEach(function(f) {
              Ne && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(f.src)), sn(c, f);
            });
          }(a[r]);
          if (typeof o == "object") return o.value;
        }
      }
      function Fn(e, t) {
        var n, r = { del: [], add: [], change: [] };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
          var a = e[n], o = t[n];
          if (a) {
            var u = { name: n, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || a.primKey.auto !== o.primKey.auto) u.recreate = !0, r.change.push(u);
            else {
              var c = a.idxByName, f = o.idxByName, d = void 0;
              for (d in c) f[d] || u.del.push(d);
              for (d in f) {
                var y = c[d], l = f[d];
                y ? y.src !== l.src && u.change.push(l) : u.add.push(l);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && r.change.push(u);
            }
          } else r.add.push([n, o]);
        }
        return r;
      }
      function Bn(e, t, n, r) {
        var a = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(o) {
          return sn(a, o);
        }), a;
      }
      function _r(e, t) {
        L(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (Ne && console.debug("Dexie: Creating missing table", n), Bn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function sn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function un(e, t, n) {
        var r = {};
        return Se(t.objectStoreNames, 0).forEach(function(a) {
          for (var o = n.objectStore(a), u = Nn(Er(d = o.keyPath), d || "", !0, !1, !!o.autoIncrement, d && typeof d != "string", !0), c = [], f = 0; f < o.indexNames.length; ++f) {
            var y = o.index(o.indexNames[f]), d = y.keyPath, y = Nn(y.name, d, !!y.unique, !!y.multiEntry, !1, d && typeof d != "string", !1);
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
            var f = u.indexNames[c], d = u.index(f).keyPath, y = typeof d == "string" ? d : "[" + Se(d).join("+") + "]";
            !t[o] || (d = t[o].idxByName[y]) && (d.name = f, delete t[o].idxByName[y], t[o].idxByName[f] = d);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && F.WorkerGlobalScope && F instanceof F.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Sr(e) {
        return e.split(",").map(function(t, n) {
          var o = t.split(":"), r = (a = o[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = o[0].trim()).replace(/([&*]|\+\+)/g, ""), o = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Nn(a, o || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), M(o), n === 0, r);
        });
      }
      var fa = (St.prototype._createTableSchema = Rn, St.prototype._parseIndexSyntax = Sr, St.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        L(e).forEach(function(r) {
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
        }), t._dbSchema = a, kn(t, [t._allTables, t, t.Transaction.prototype]), on(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], L(a), a), t._storeNames = L(a), this;
      }, St.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = vt(this._cfg.contentUpgrade || V, e), this;
      }, St);
      function St() {
      }
      function Kn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Qe(Jt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function jn(e) {
        return e && typeof e.databases == "function";
      }
      function qn(e) {
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
        var r = $(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (Mn(e)) return G(e, { from: t, to: n, d: 1 });
          var a = e.l, r = e.r;
          if ($(n, e.from) < 0) return a ? Mt(a, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, xr(e);
          if (0 < $(t, e.to)) return r ? Mt(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, xr(e);
          $(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < $(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, a && !e.l && Lt(e, a), r && n && Lt(e, r);
        }
      }
      function Lt(e, t) {
        Mn(t) || function n(r, f) {
          var o = f.from, u = f.to, c = f.l, f = f.r;
          Mt(r, o, u), c && n(r, c), f && n(r, f);
        }(e, t);
      }
      function Or(e, t) {
        var n = ln(t), r = n.next();
        if (r.done) return !1;
        for (var a = r.value, o = ln(e), u = o.next(a.from), c = u.value; !r.done && !u.done; ) {
          if ($(c.from, a.to) <= 0 && 0 <= $(c.to, a.from)) return !0;
          $(a.from, c.from) < 0 ? a = (r = n.next(c.from)).value : c = (u = o.next(a.from)).value;
        }
        return !1;
      }
      function ln(e) {
        var t = Mn(e) ? null : { s: 0, n: e };
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
      function xr(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), a = 1 < r ? "r" : r < -1 ? "l" : "";
        a && (t = a == "r" ? "l" : "r", n = h({}, e), r = e[a], e.from = r.from, e.to = r.to, e[a] = r[a], n[a] = r[t], (e[t] = n).d = Ar(n)), e.d = Ar(e);
      }
      function Ar(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function fn(e, t) {
        return L(t).forEach(function(n) {
          e[n] ? Lt(e[n], t[n]) : e[n] = function r(a) {
            var o, u, c = {};
            for (o in a) Y(a, o) && (u = a[o], c[o] = !u || typeof u != "object" || Fe.has(u.constructor) ? u : r(u));
            return c;
          }(t[n]);
        }), e;
      }
      function Ln(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && Or(t[n], e[n]);
        });
      }
      ae(Ae.prototype, ((ke = { add: function(e) {
        return Lt(this, e), this;
      }, addKey: function(e) {
        return Mt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Mt(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = ln(this).next(e).value;
        return t && $(t.from, e) <= 0 && 0 <= $(t.to, e);
      } })[yt] = function() {
        return ln(this);
      }, ke));
      var pt = {}, Un = {}, Vn = !1;
      function pn(e) {
        fn(Un, e), Vn || (Vn = !0, setTimeout(function() {
          Vn = !1, Gn(Un, !(Un = {}));
        }, 0));
      }
      function Gn(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, a = Object.values(pt); r < a.length; r++) Pr(u = a[r], e, n, t);
        else for (var o in e) {
          var u, c = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          c && (o = c[1], c = c[2], (u = pt["idb://".concat(o, "/").concat(c)]) && Pr(u, e, n, t));
        }
        n.forEach(function(f) {
          return f();
        });
      }
      function Pr(e, t, n, r) {
        for (var a = [], o = 0, u = Object.entries(e.queries.query); o < u.length; o++) {
          for (var c = u[o], f = c[0], d = [], y = 0, l = c[1]; y < l.length; y++) {
            var b = l[y];
            Ln(t, b.obsSet) ? b.subscribers.forEach(function(v) {
              return n.add(v);
            }) : r && d.push(b);
          }
          r && a.push([f, d]);
        }
        if (r) for (var p = 0, m = a; p < m.length; p++) {
          var g = m[p], f = g[0], d = g[1];
          e.queries.query[f] = d;
        }
      }
      function pa(e) {
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
              })) : (y.onerror = qe(p), v = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, l = v < 1, e.idbdb = g.result, o && la(e, y), ca(e, v / 10, y, p));
            }, p), g.onsuccess = fe(function() {
              y = null;
              var v, E, O, x, A, N = e.idbdb = g.result, k = Se(N.objectStoreNames);
              if (0 < k.length) try {
                var R = N.transaction((x = k).length === 1 ? x[0] : x, "readonly");
                if (t.autoSchema) E = N, O = R, (v = e).verno = E.version / 10, O = v._dbSchema = un(0, E, O), v._storeNames = Se(E.objectStoreNames, 0), on(v, [v._allTables], L(O), O);
                else if (cn(e, e._dbSchema, R), ((A = Fn(un(0, (A = e).idbdb, R), A._dbSchema)).add.length || A.change.some(function(I) {
                  return I.add.length || I.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), N.close(), a = N.version + 1, o = !0, b(c());
                an(e, R);
              } catch {
              }
              Et.push(e), N.onversionchange = fe(function(I) {
                t.vcFired = !0, e.on("versionchange").fire(I);
              }), N.onclose = fe(function(I) {
                e.on("close").fire(I);
              }), l && (A = e._deps, R = m, N = A.indexedDB, A = A.IDBKeyRange, jn(N) || R === Jt || Kn(N, A).put({ name: R }).catch(V)), b();
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
        var f, d = t.dbReadyResolve, y = null, l = !1;
        return j.race([r, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(b) {
          function p() {
            return indexedDB.databases().finally(b);
          }
          f = setInterval(p, 100), p();
        }).finally(function() {
          return clearInterval(f);
        }) : Promise.resolve()).then(c)]).then(function() {
          return u(), t.onReadyBeingFired = [], j.resolve(qn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function b() {
            if (0 < t.onReadyBeingFired.length) {
              var p = t.onReadyBeingFired.reduce(vt, V);
              return t.onReadyBeingFired = [], j.resolve(qn(function() {
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
          t.openComplete = !0, d();
        }).then(function() {
          var b;
          return l && (b = {}, e.tables.forEach(function(p) {
            p.schema.indexes.forEach(function(m) {
              m.name && (b["idb://".concat(e.name, "/").concat(p.name, "/").concat(m.name)] = new Ae(-1 / 0, [[[]]]));
            }), b["idb://".concat(e.name, "/").concat(p.name, "/")] = b["idb://".concat(e.name, "/").concat(p.name, "/:dels")] = new Ae(-1 / 0, [[[]]]);
          }), tt(Kt).fire(b), Gn(b, !0)), e;
        });
      }
      function Qn(e) {
        function t(o) {
          return e.next(o);
        }
        var n = a(t), r = a(function(o) {
          return e.throw(o);
        });
        function a(o) {
          return function(f) {
            var c = o(f), f = c.value;
            return c.done ? f : f && typeof f.then == "function" ? f.then(n, r) : M(f) ? Promise.all(f).then(n, r) : n(f);
          };
        }
        return a(t)();
      }
      function dn(e, t, n) {
        for (var r = M(e) ? e.slice() : [e], a = 0; a < n; ++a) r.push(t);
        return r;
      }
      var da = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return h(h({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, a = {}, o = [];
          function u(l, b, p) {
            var m = qt(l), g = a[m] = a[m] || [], v = l == null ? 0 : typeof l == "string" ? 1 : l.length, E = 0 < b, E = h(h({}, p), { name: E ? "".concat(m, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: E, keyTail: b, keyLength: v, extractKey: In(l), unique: !E && p.unique });
            return g.push(E), E.isPrimaryKey || o.push(E), 1 < v && u(v === 2 ? l[0] : l.slice(0, v - 1), b + 1, p), g.sort(function(O, x) {
              return O.keyTail - x.keyTail;
            }), E;
          }
          t = u(r.primaryKey.keyPath, 0, r.primaryKey), a[":id"] = [t];
          for (var c = 0, f = r.indexes; c < f.length; c++) {
            var d = f[c];
            u(d.keyPath, 0, d);
          }
          function y(l) {
            var b, p = l.query.index;
            return p.isVirtual ? h(h({}, l), { query: { index: p.lowLevelIndex, range: (b = l.query.range, p = p.keyTail, { type: b.type === 1 ? 2 : b.type, lower: dn(b.lower, b.lowerOpen ? e.MAX_KEY : e.MIN_KEY, p), lowerOpen: !0, upper: dn(b.upper, b.upperOpen ? e.MIN_KEY : e.MAX_KEY, p), upperOpen: !0 }) } }) : l;
          }
          return h(h({}, n), { schema: h(h({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(l) {
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
              return Object.create(E, { continue: { value: function(O) {
                O != null ? E.continue(dn(O, l.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : l.unique ? E.continue(E.key.slice(0, g).concat(l.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : E.continue();
              } }, continuePrimaryKey: { value: function(O, x) {
                E.continuePrimaryKey(dn(O, e.MAX_KEY, p), x);
              } }, primaryKey: { get: function() {
                return E.primaryKey;
              } }, key: { get: function() {
                var O = E.key;
                return g === 1 ? O[0] : O.slice(0, g);
              } }, value: { get: function() {
                return E.value;
              } } });
            }
          } });
        } });
      } };
      function zn(e, t, n, r) {
        return n = n || {}, r = r || "", L(e).forEach(function(a) {
          var o, u, c;
          Y(t, a) ? (o = e[a], u = t[a], typeof o == "object" && typeof u == "object" && o && u ? (c = Ue(o)) !== Ue(u) ? n[r + a] = t[a] : c === "Object" ? zn(o, u, n, r + a + ".") : o !== u && (n[r + a] = t[a]) : o !== u && (n[r + a] = t[a])) : n[r + a] = void 0;
        }), L(t).forEach(function(a) {
          Y(e, a) || (n[r + a] = t[a]);
        }), n;
      }
      function Yn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ha = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return h(h({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return h(h({}, n), { mutate: function(a) {
            var o = U.trans, u = o.table(t).hook, c = u.deleting, f = u.creating, d = u.updating;
            switch (a.type) {
              case "add":
                if (f.fire === V) break;
                return o._promise("readwrite", function() {
                  return y(a);
                }, !0);
              case "put":
                if (f.fire === V && d.fire === V) break;
                return o._promise("readwrite", function() {
                  return y(a);
                }, !0);
              case "delete":
                if (c.fire === V) break;
                return o._promise("readwrite", function() {
                  return y(a);
                }, !0);
              case "deleteRange":
                if (c.fire === V) break;
                return o._promise("readwrite", function() {
                  return function l(b, p, m) {
                    return n.query({ trans: b, values: !1, query: { index: r, range: p }, limit: m }).then(function(g) {
                      var v = g.result;
                      return y({ type: "delete", keys: v, trans: b }).then(function(E) {
                        return 0 < E.numFailures ? Promise.reject(E.failures[0]) : v.length < m ? { failures: [], numFailures: 0, lastResult: void 0 } : l(b, h(h({}, p), { lower: v[v.length - 1], lowerOpen: !0 }), m);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return n.mutate(a);
            function y(l) {
              var b, p, m, g = U.trans, v = l.keys || Yn(r, l);
              if (!v) throw new Error("Keys missing");
              return (l = l.type === "add" || l.type === "put" ? h(h({}, l), { keys: v }) : h({}, l)).type !== "delete" && (l.values = D([], l.values)), l.keys && (l.keys = D([], l.keys)), b = n, m = v, ((p = l).type === "add" ? Promise.resolve([]) : b.getMany({ trans: p.trans, keys: m, cache: "immutable" })).then(function(E) {
                var O = v.map(function(x, A) {
                  var N, k, R, I = E[A], K = { onerror: null, onsuccess: null };
                  return l.type === "delete" ? c.fire.call(K, x, I, g) : l.type === "add" || I === void 0 ? (N = f.fire.call(K, x, l.values[A], g), x == null && N != null && (l.keys[A] = x = N, r.outbound || se(l.values[A], r.keyPath, x))) : (N = zn(I, l.values[A]), (k = d.fire.call(K, N, x, I, g)) && (R = l.values[A], Object.keys(k).forEach(function(B) {
                    Y(R, B) ? R[B] = k[B] : se(R, B, k[B]);
                  }))), K;
                });
                return n.mutate(l).then(function(x) {
                  for (var A = x.failures, N = x.results, k = x.numFailures, x = x.lastResult, R = 0; R < v.length; ++R) {
                    var I = (N || v)[R], K = O[R];
                    I == null ? K.onerror && K.onerror(A[R]) : K.onsuccess && K.onsuccess(l.type === "put" && E[R] ? l.values[R] : I);
                  }
                  return { failures: A, results: N, numFailures: k, lastResult: x };
                }).catch(function(x) {
                  return O.forEach(function(A) {
                    return A.onerror && A.onerror(x);
                  }), Promise.reject(x);
                });
              });
            }
          } });
        } });
      } };
      function Cr(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], a = 0, o = 0; a < t.keys.length && o < e.length; ++a) $(t.keys[a], e[o]) === 0 && (r.push(n ? we(t.values[a]) : t.values[a]), ++o);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var ma = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return h(h({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var a = Cr(r.keys, r.trans._cache, r.cache === "clone");
            return a ? j.resolve(a) : n.getMany(r).then(function(o) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? we(o) : o }, o;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function Dr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Nr(e, t) {
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
      var ya = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new Ae(e.MIN_KEY, e.MAX_KEY);
        return h(h({}, e), { transaction: function(r, a, o) {
          if (U.subscr && a !== "readonly") throw new T.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(U.querier));
          return e.transaction(r, a, o);
        }, table: function(r) {
          var a = e.table(r), o = a.schema, u = o.primaryKey, l = o.indexes, c = u.extractKey, f = u.outbound, d = u.autoIncrement && l.filter(function(p) {
            return p.compound && p.keyPath.includes(u.keyPath);
          }), y = h(h({}, a), { mutate: function(p) {
            function m(B) {
              return B = "idb://".concat(t, "/").concat(r, "/").concat(B), x[B] || (x[B] = new Ae());
            }
            var g, v, E, O = p.trans, x = p.mutatedParts || (p.mutatedParts = {}), A = m(""), N = m(":dels"), k = p.type, K = p.type === "deleteRange" ? [p.range] : p.type === "delete" ? [p.keys] : p.values.length < 50 ? [Yn(u, p).filter(function(B) {
              return B;
            }), p.values] : [], R = K[0], I = K[1], K = p.trans._cache;
            return M(R) ? (A.addKeys(R), (K = k === "delete" || R.length === I.length ? Cr(R, K) : null) || N.addKeys(R), (K || I) && (g = m, v = K, E = I, o.indexes.forEach(function(B) {
              var q = g(B.name || "");
              function X(z) {
                return z != null ? B.extractKey(z) : null;
              }
              function Z(z) {
                return B.multiEntry && M(z) ? z.forEach(function(he) {
                  return q.addKey(he);
                }) : q.addKey(z);
              }
              (v || E).forEach(function(z, Pe) {
                var Q = v && X(v[Pe]), Pe = E && X(E[Pe]);
                $(Q, Pe) !== 0 && (Q != null && Z(Q), Pe != null && Z(Pe));
              });
            }))) : R ? (I = { from: (I = R.lower) !== null && I !== void 0 ? I : e.MIN_KEY, to: (I = R.upper) !== null && I !== void 0 ? I : e.MAX_KEY }, N.add(I), A.add(I)) : (A.add(n), N.add(n), o.indexes.forEach(function(B) {
              return m(B.name).add(n);
            })), a.mutate(p).then(function(B) {
              return !R || p.type !== "add" && p.type !== "put" || (A.addKeys(B.results), d && d.forEach(function(q) {
                for (var X = p.values.map(function(Q) {
                  return q.extractKey(Q);
                }), Z = q.keyPath.findIndex(function(Q) {
                  return Q === u.keyPath;
                }), z = 0, he = B.results.length; z < he; ++z) X[z][Z] = B.results[z];
                m(q.name).addKeys(X);
              })), O.mutatedParts = fn(O.mutatedParts || {}, x), B;
            });
          } }), l = function(m) {
            var g = m.query, m = g.index, g = g.range;
            return [m, new Ae((m = g.lower) !== null && m !== void 0 ? m : e.MIN_KEY, (g = g.upper) !== null && g !== void 0 ? g : e.MAX_KEY)];
          }, b = { get: function(p) {
            return [u, new Ae(p.key)];
          }, getMany: function(p) {
            return [u, new Ae().addKeys(p.keys)];
          }, count: l, query: l, openCursor: l };
          return L(b).forEach(function(p) {
            y[p] = function(m) {
              var g = U.subscr, v = !!g, E = Dr(U, a) && Nr(p, m) ? m.obsSet = {} : g;
              if (v) {
                var O = function(I) {
                  return I = "idb://".concat(t, "/").concat(r, "/").concat(I), E[I] || (E[I] = new Ae());
                }, x = O(""), A = O(":dels"), g = b[p](m), v = g[0], g = g[1];
                if ((p === "query" && v.isPrimaryKey && !m.values ? A : O(v.name || "")).add(g), !v.isPrimaryKey) {
                  if (p !== "count") {
                    var N = p === "query" && f && m.values && a.query(h(h({}, m), { values: !1 }));
                    return a[p].apply(this, arguments).then(function(I) {
                      if (p === "query") {
                        if (f && m.values) return N.then(function(X) {
                          return X = X.result, x.addKeys(X), I;
                        });
                        var K = m.values ? I.result.map(c) : I.result;
                        (m.values ? x : A).addKeys(K);
                      } else if (p === "openCursor") {
                        var B = I, q = m.values;
                        return B && Object.create(B, { key: { get: function() {
                          return A.addKey(B.primaryKey), B.key;
                        } }, primaryKey: { get: function() {
                          var X = B.primaryKey;
                          return A.addKey(X), X;
                        } }, value: { get: function() {
                          return q && x.addKey(B.primaryKey), B.value;
                        } } });
                      }
                      return I;
                    });
                  }
                  A.add(n);
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
        return n.numFailures === r ? null : (t = h({}, t), M(t.keys) && (t.keys = t.keys.filter(function(a, o) {
          return !(o in n.failures);
        })), "values" in t && M(t.values) && (t.values = t.values.filter(function(a, o) {
          return !(o in n.failures);
        })), t);
      }
      function Xn(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < $(n, r.lower) : 0 <= $(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? $(e, t.upper) < 0 : $(e, t.upper) <= 0));
        var n, r;
      }
      function Ir(e, t, b, r, a, o) {
        if (!b || b.length === 0) return e;
        var u = t.query.index, c = u.multiEntry, f = t.query.range, d = r.schema.primaryKey.extractKey, y = u.extractKey, l = (u.lowLevelIndex || u).extractKey, b = b.reduce(function(p, m) {
          var g = p, v = [];
          if (m.type === "add" || m.type === "put") for (var E = new Ae(), O = m.values.length - 1; 0 <= O; --O) {
            var x, A = m.values[O], N = d(A);
            E.hasKey(N) || (x = y(A), (c && M(x) ? x.some(function(B) {
              return Xn(B, f);
            }) : Xn(x, f)) && (E.addKey(N), v.push(A)));
          }
          switch (m.type) {
            case "add":
              var k = new Ae().addKeys(t.values ? p.map(function(q) {
                return d(q);
              }) : p), g = p.concat(t.values ? v.filter(function(q) {
                return q = d(q), !k.hasKey(q) && (k.addKey(q), !0);
              }) : v.map(function(q) {
                return d(q);
              }).filter(function(q) {
                return !k.hasKey(q) && (k.addKey(q), !0);
              }));
              break;
            case "put":
              var R = new Ae().addKeys(m.values.map(function(q) {
                return d(q);
              }));
              g = p.filter(function(q) {
                return !R.hasKey(t.values ? d(q) : q);
              }).concat(t.values ? v : v.map(function(q) {
                return d(q);
              }));
              break;
            case "delete":
              var I = new Ae().addKeys(m.keys);
              g = p.filter(function(q) {
                return !I.hasKey(t.values ? d(q) : q);
              });
              break;
            case "deleteRange":
              var K = m.range;
              g = p.filter(function(q) {
                return !Xn(d(q), K);
              });
          }
          return g;
        }, e);
        return b === e ? e : (b.sort(function(p, m) {
          return $(l(p), l(m)) || $(d(p), d(m));
        }), t.limit && t.limit < 1 / 0 && (b.length > t.limit ? b.length = t.limit : e.length === t.limit && b.length < t.limit && (a.dirty = !0)), o ? Object.freeze(b) : b);
      }
      function kr(e, t) {
        return $(e.lower, t.lower) === 0 && $(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function va(e, t) {
        return function(n, r, a, o) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = $(n, r)) === 0) {
            if (a && o) return 0;
            if (a) return 1;
            if (o) return -1;
          }
          return r;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(n, r, a, o) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = $(n, r)) === 0) {
            if (a && o) return 0;
            if (a) return -1;
            if (o) return 1;
          }
          return r;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function ga(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var a, o;
          e.subscribers.delete(n), e.subscribers.size === 0 && (a = e, o = t, setTimeout(function() {
            a.subscribers.size === 0 && Ve(o, a);
          }, 3e3));
        });
      }
      var ba = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return h(h({}, e), { transaction: function(n, r, a) {
          var o, u, c = e.transaction(n, r, a);
          return r === "readwrite" && (u = (o = new AbortController()).signal, a = function(f) {
            return function() {
              if (o.abort(), r === "readwrite") {
                for (var d = /* @__PURE__ */ new Set(), y = 0, l = n; y < l.length; y++) {
                  var b = l[y], p = pt["idb://".concat(t, "/").concat(b)];
                  if (p) {
                    var m = e.table(b), g = p.optimisticOps.filter(function(q) {
                      return q.trans === c;
                    });
                    if (c._explicit && f && c.mutatedParts) for (var v = 0, E = Object.values(p.queries.query); v < E.length; v++) for (var O = 0, x = (k = E[v]).slice(); O < x.length; O++) Ln((R = x[O]).obsSet, c.mutatedParts) && (Ve(k, R), R.subscribers.forEach(function(q) {
                      return d.add(q);
                    }));
                    else if (0 < g.length) {
                      p.optimisticOps = p.optimisticOps.filter(function(q) {
                        return q.trans !== c;
                      });
                      for (var A = 0, N = Object.values(p.queries.query); A < N.length; A++) for (var k, R, I, K = 0, B = (k = N[A]).slice(); K < B.length; K++) (R = B[K]).res != null && c.mutatedParts && (f && !R.dirty ? (I = Object.isFrozen(R.res), I = Ir(R.res, R.req, g, m, R, I), R.dirty ? (Ve(k, R), R.subscribers.forEach(function(q) {
                        return d.add(q);
                      })) : I !== R.res && (R.res = I, R.promise = j.resolve({ result: I }))) : (R.dirty && Ve(k, R), R.subscribers.forEach(function(q) {
                        return d.add(q);
                      })));
                    }
                  }
                }
                d.forEach(function(q) {
                  return q();
                });
              }
            };
          }, c.addEventListener("abort", a(!1), { signal: u }), c.addEventListener("error", a(!1), { signal: u }), c.addEventListener("complete", a(!0), { signal: u })), c;
        }, table: function(n) {
          var r = e.table(n), a = r.schema.primaryKey;
          return h(h({}, r), { mutate: function(o) {
            var u = U.trans;
            if (a.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return r.mutate(o);
            var c = pt["idb://".concat(t, "/").concat(n)];
            return c ? (u = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Yn(a, o).some(function(f) {
              return f == null;
            })) ? (c.optimisticOps.push(o), o.mutatedParts && pn(o.mutatedParts), u.then(function(f) {
              0 < f.numFailures && (Ve(c.optimisticOps, o), (f = Rr(0, o, f)) && c.optimisticOps.push(f), o.mutatedParts && pn(o.mutatedParts));
            }), u.catch(function() {
              Ve(c.optimisticOps, o), o.mutatedParts && pn(o.mutatedParts);
            })) : u.then(function(f) {
              var d = Rr(0, h(h({}, o), { values: o.values.map(function(y, l) {
                var b;
                return f.failures[l] || (y = (b = a.keyPath) !== null && b !== void 0 && b.includes(".") ? we(y) : h({}, y), se(y, a.keyPath, f.results[l])), y;
              }) }), f);
              c.optimisticOps.push(d), queueMicrotask(function() {
                return o.mutatedParts && pn(o.mutatedParts);
              });
            }), u) : r.mutate(o);
          }, query: function(o) {
            if (!Dr(U, r) || !Nr("query", o)) return r.query(o);
            var u = ((d = U.trans) === null || d === void 0 ? void 0 : d.db._options.cache) === "immutable", l = U, c = l.requery, f = l.signal, d = function(m, g, v, E) {
              var O = pt["idb://".concat(m, "/").concat(g)];
              if (!O) return [];
              if (!(g = O.queries[v])) return [null, !1, O, null];
              var x = g[(E.query ? E.query.index.name : null) || ""];
              if (!x) return [null, !1, O, null];
              switch (v) {
                case "query":
                  var A = x.find(function(N) {
                    return N.req.limit === E.limit && N.req.values === E.values && kr(N.req.query.range, E.query.range);
                  });
                  return A ? [A, !0, O, x] : [x.find(function(N) {
                    return ("limit" in N.req ? N.req.limit : 1 / 0) >= E.limit && (!E.values || N.req.values) && va(N.req.query.range, E.query.range);
                  }), !1, O, x];
                case "count":
                  return A = x.find(function(N) {
                    return kr(N.req.query.range, E.query.range);
                  }), [A, !!A, O, x];
              }
            }(t, n, "query", o), y = d[0], l = d[1], b = d[2], p = d[3];
            return y && l ? y.obsSet = o.obsSet : (l = r.query(o).then(function(m) {
              var g = m.result;
              if (y && (y.res = g), u) {
                for (var v = 0, E = g.length; v < E; ++v) Object.freeze(g[v]);
                Object.freeze(g);
              } else m.result = we(g);
              return m;
            }).catch(function(m) {
              return p && y && Ve(p, y), Promise.reject(m);
            }), y = { obsSet: o.obsSet, promise: l, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, p ? p.push(y) : (p = [y], (b = b || (pt["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = p)), ga(y, p, c, f), y.promise.then(function(m) {
              return { result: Ir(m.result, o, b?.optimisticOps, r, y, u) };
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
        return n || (n = new this.Version(e), t.push(n), t.sort(ua), n.stores({}), this._state.autoSchema = !1, n);
      }, ve.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || U.letThrough || this._vip) ? e() : new j(function(n, r) {
          if (t._state.openComplete) return r(new T.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new T.DatabaseClosed());
            t.open().catch(V);
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
          return pa(e);
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
              var f, d, y;
              f = t._deps, d = t.name, y = f.indexedDB, f = f.IDBKeyRange, jn(y) || d === Jt || Kn(y, f).delete(d).catch(V), a();
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
        return L(this._allTables).map(function(t) {
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
          if (u = t.map(function(d) {
            if (d = d instanceof r.Table ? d.name : d, typeof d != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return d;
          }), e == "r" || e === xn) o = xn;
          else {
            if (e != "rw" && e != An) throw new T.InvalidArgument("Invalid transaction mode: " + e);
            o = An;
          }
          if (a) {
            if (a.mode === xn && o === An) {
              if (!c) throw new T.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && u.forEach(function(d) {
              if (a && a.storeNames.indexOf(d) === -1) {
                if (!c) throw new T.SubTransaction("Table " + d + " not included in parent transaction.");
                a = null;
              }
            }), c && a && !a.active && (a = null);
          }
        } catch (d) {
          return a ? a._promise(null, function(y, l) {
            l(d);
          }) : ye(d);
        }
        var f = (function d(y, l, b, p, m) {
          return j.resolve().then(function() {
            var g = U.transless || U, v = y._createTransaction(l, b, y._dbSchema, p);
            if (v.explicit = !0, g = { trans: v, transless: g }, p) v.idbtrans = p.idbtrans;
            else try {
              v.create(), v.idbtrans._explicit = !0, y._state.PR1398_maxLoop = 3;
            } catch (x) {
              return x.name === s.InvalidState && y.isOpen() && 0 < --y._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), y.close({ disableAutoOpen: !1 }), y.open().then(function() {
                return d(y, l, b, null, m);
              })) : ye(x);
            }
            var E, O = Be(m);
            return O && wt(), g = j.follow(function() {
              var x;
              (E = m.call(v, v)) && (O ? (x = Je.bind(null, null), E.then(x, x)) : typeof E.next == "function" && typeof E.throw == "function" && (E = Qn(E)));
            }, g), (E && typeof E.then == "function" ? j.resolve(E).then(function(x) {
              return v.active ? x : ye(new T.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : g.then(function() {
              return E;
            })).then(function(x) {
              return p && v._resolve(), v._completion.then(function() {
                return x;
              });
            }).catch(function(x) {
              return v._reject(x), ye(x);
            });
          });
        }).bind(null, this, o, u, a, n);
        return a ? a._promise(o, f, "lock") : U.trans ? ct(U.transless, function() {
          return r._whenReady(f);
        }) : this._whenReady(f);
      }, ve.prototype.table = function(e) {
        if (!Y(this._allTables, e)) throw new T.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ve);
      function ve(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = ve.dependencies;
        this._options = t = h({ addons: ve.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, o, u, c, f, d = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: V, dbReadyPromise: null, cancelOpen: V, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        d.dbReadyPromise = new j(function(l) {
          d.dbReadyResolve = l;
        }), d.openCanceller = new j(function(l, b) {
          d.cancelOpen = b;
        }), this._state = d, this.name = e, this.on = It(this, "populate", "blocked", "versionchange", "close", { ready: [vt, V] }), this.once = function(l, b) {
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
        }), this.Collection = (a = this, kt(ta.prototype, function(E, v) {
          this.db = a;
          var p = lr, m = null;
          if (v) try {
            p = v();
          } catch (O) {
            m = O;
          }
          var g = E._ctx, v = g.table, E = v.hook.reading.fire;
          this._ctx = { table: v, index: g.index, isPrimKey: !g.index || v.schema.primKey.keyPath && g.index === v.schema.primKey.name, range: p, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: m, or: g.or, valueMapper: E !== ue ? E : null };
        })), this.Table = (o = this, kt(hr.prototype, function(l, b, p) {
          this.db = o, this._tx = p, this.name = l, this.schema = b, this.hook = o._allTables[l] ? o._allTables[l].hook : It(null, { creating: [He, V], reading: [xe, ue], updating: [Ke, V], deleting: [Ee, V] });
        })), this.Transaction = (u = this, kt(aa.prototype, function(l, b, p, m, g) {
          var v = this;
          l !== "readonly" && b.forEach(function(E) {
            E = (E = p[E]) === null || E === void 0 ? void 0 : E.yProps, E && (b = b.concat(E.map(function(O) {
              return O.updatesTable;
            })));
          }), this.db = u, this.mode = l, this.storeNames = b, this.schema = p, this.chromeTransactionDurability = m, this.idbtrans = null, this.on = It(this, "complete", "error", "abort"), this.parent = g || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(E, O) {
            v._resolve = E, v._reject = O;
          }), this._completion.then(function() {
            v.active = !1, v.on.complete.fire();
          }, function(E) {
            var O = v.active;
            return v.active = !1, v.on.error.fire(E), v.parent ? v.parent._reject(E) : O && v.idbtrans && v.idbtrans.abort(), ye(E);
          });
        })), this.Version = (c = this, kt(fa.prototype, function(l) {
          this.db = c, this._cfg = { version: l, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (f = this, kt(wr.prototype, function(l, b, p) {
          if (this.db = f, this._ctx = { table: l, index: b === ":id" ? null : b, or: p }, this._cmp = this._ascending = $, this._descending = function(m, g) {
            return $(g, m);
          }, this._max = function(m, g) {
            return 0 < $(m, g) ? m : g;
          }, this._min = function(m, g) {
            return $(m, g) < 0 ? m : g;
          }, this._IDBKeyRange = f._deps.IDBKeyRange, !this._IDBKeyRange) throw new T.MissingAPI();
        })), this.on("versionchange", function(l) {
          0 < l.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(l) {
          !l.newVersion || l.newVersion < l.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(l.oldVersion / 10));
        }), this._maxKey = jt(t.IDBKeyRange), this._createTransaction = function(l, b, p, m) {
          return new n.Transaction(l, b, p, n._options.chromeTransactionDurability, m);
        }, this._fireOnBlocked = function(l) {
          n.on("blocked").fire(l), Et.filter(function(b) {
            return b.name === n.name && b !== n && !b._state.vcFired;
          }).map(function(b) {
            return b.on("versionchange").fire(l);
          });
        }, this.use(ma), this.use(ba), this.use(ya), this.use(da), this.use(ha);
        var y = new Proxy(this, { get: function(l, b, p) {
          if (b === "_vip") return !0;
          if (b === "table") return function(g) {
            return hn(n.table(g), y);
          };
          var m = Reflect.get(l, b, p);
          return m instanceof hr ? hn(m, y) : b === "tables" ? m.map(function(g) {
            return hn(g, y);
          }) : b === "_createTransaction" ? function() {
            return hn(m.apply(this, arguments), y);
          } : m;
        } });
        this.vip = y, r.forEach(function(l) {
          return l(n);
        });
      }
      var mn, ke = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", wa = (Hn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Hn.prototype[ke] = function() {
        return this;
      }, Hn);
      function Hn(e) {
        this._subscribe = e;
      }
      try {
        mn = { indexedDB: F.indexedDB || F.mozIndexedDB || F.webkitIndexedDB || F.msIndexedDB, IDBKeyRange: F.IDBKeyRange || F.webkitIDBKeyRange };
      } catch {
        mn = { indexedDB: null, IDBKeyRange: null };
      }
      function Fr(e) {
        var t, n = !1, r = new wa(function(a) {
          var o = Be(e), u, c = !1, f = {}, d = {}, y = { get closed() {
            return c;
          }, unsubscribe: function() {
            c || (c = !0, u && u.abort(), l && tt.storagemutated.unsubscribe(p));
          } };
          a.start && a.start(y);
          var l = !1, b = function() {
            return On(m);
          }, p = function(g) {
            fn(f, g), Ln(d, f) && b();
          }, m = function() {
            var g, v, E;
            !c && mn.indexedDB && (f = {}, g = {}, u && u.abort(), u = new AbortController(), E = function(O) {
              var x = gt();
              try {
                o && wt();
                var A = $e(e, O);
                return A = o ? A.finally(Je) : A;
              } finally {
                x && bt();
              }
            }(v = { subscr: g, signal: u.signal, requery: b, querier: e, trans: null }), Promise.resolve(E).then(function(O) {
              n = !0, t = O, c || v.signal.aborted || (f = {}, function(x) {
                for (var A in x) if (Y(x, A)) return;
                return 1;
              }(d = g) || l || (tt(Kt, p), l = !0), On(function() {
                return !c && a.next && a.next(O);
              }));
            }, function(O) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(O?.name) || c || On(function() {
                c || a.error && a.error(O);
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
      function Wn(e) {
        var t = nt;
        try {
          nt = !0, tt.storagemutated.fire(e), Gn(e, !0);
        } finally {
          nt = t;
        }
      }
      ae(dt, h(h({}, J), { delete: function(e) {
        return new dt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new dt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = dt.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (jn(n) ? Promise.resolve(n.databases()).then(function(r) {
            return r.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== Jt;
            });
          }) : Kn(n, t).toCollection().primaryKeys()).then(e);
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
      }, vip: qn, async: function(e) {
        return function() {
          try {
            var t = Qn(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (n) {
            return ye(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = Qn(e.apply(n, t || []));
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
      } }, derive: ge, extend: G, props: ae, override: le, Events: It, on: tt, liveQuery: Fr, extendObservabilitySet: fn, getByKeyPath: Oe, setByKeyPath: se, delByKeyPath: function(e, t) {
        typeof t == "string" ? se(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          se(e, n, void 0);
        });
      }, shallowClone: mt, deepClone: we, getObjectDiff: zn, cmp: $, asap: pe, minKey: -1 / 0, addons: [], connections: Et, errnames: s, dependencies: mn, cache: pt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), dt.maxKey = jt(dt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (tt(Kt, function(e) {
        nt || (e = new CustomEvent(Dn, { detail: e }), nt = !0, dispatchEvent(e), nt = !1);
      }), addEventListener(Dn, function(e) {
        e = e.detail, nt || Wn(e);
      }));
      var Ut, nt = !1, Br = function() {
      };
      return typeof BroadcastChannel < "u" && ((Br = function() {
        (Ut = new BroadcastChannel(Dn)).onmessage = function(e) {
          return e.data && Wn(e.data);
        };
      })(), typeof Ut.unref == "function" && Ut.unref(), tt(Kt, function(e) {
        nt || Ut.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Qe.disableBfCache && e.persisted) {
          Ne && console.debug("Dexie: handling persisted pagehide"), Ut?.close();
          for (var t = 0, n = Et; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Qe.disableBfCache && e.persisted && (Ne && console.debug("Dexie: handling persisted pageshow"), Br(), Wn({ all: new Ae(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof Ye || e instanceof TypeError || e instanceof SyntaxError || !e.name || !w[e.name] ? e : (t = new w[e.name](t || e.message, e), "stack" in e && ee(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Pt(Ne), h(Qe, Object.freeze({ __proto__: null, Dexie: Qe, liveQuery: Fr, Entity: fr, cmp: $, PropModification: Ft, replacePrefix: function(e, t) {
        return new Ft({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new Ft({ add: e });
      }, remove: function(e) {
        return new Ft({ remove: e });
      }, default: Qe, RangeSet: Ae, mergeRanges: Lt, rangesOverlap: Or }), { default: Qe }), Qe;
    });
  }(er)), er.exports;
}
var Fa = ka();
const tr = /* @__PURE__ */ Oa(Fa), Vr = Symbol.for("Dexie"), Ot = globalThis[Vr] || (globalThis[Vr] = tr);
if (tr.semVer !== Ot.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${tr.semVer} and ${Ot.semVer}`);
const {
  liveQuery: go,
  mergeRanges: bo,
  rangesOverlap: wo,
  RangeSet: Eo,
  cmp: To,
  Entity: _o,
  PropModification: So,
  replacePrefix: Oo,
  add: xo,
  remove: Ao,
  DexieYProvider: Po
} = Ot;
function Ba(C) {
  const S = new Ot(C), P = Ra([...zr]);
  return S.version(1).stores(P), S;
}
async function Ka(C) {
  const { databaseInstance: S, tagName: P, records: h } = C, D = S.table(P);
  await S.transaction("rw", D, () => D.bulkAdd(h));
}
async function ja(C) {
  const { databaseInstance: S, tagNames: P } = C;
  S.close();
  const h = S.verno, D = S.tables.reduce(
    (M, G) => (M[G.name] = Zn, M),
    {}
  ), F = P.reduce(
    (M, G) => (M[G] = Zn, M),
    {}
  ), L = {
    ...D,
    ...F
  };
  S.version(h + 1).stores(L), S.open();
}
async function qa(C) {
  if (!(await indexedDB.databases?.() || []).some((S) => S.name === C)) return !1;
  try {
    await new Ot(C).close();
  } catch (S) {
    console.warn(`Failed to close database ${C} before deletion`, S);
  }
  return await Ot.delete(C), !0;
}
const Vt = {};
function Ma(C) {
  const { parent: S, child: P } = C;
  Vt[S.tagName] || (Vt[S.tagName] = []);
  const h = {
    parentId: S.id,
    childId: P.id,
    childTagName: P.tagName
  };
  Vt[S.tagName].push(h);
}
function La(C) {
  const { parentRecordsBatch: S, parentTagName: P } = C, h = [...S], D = Yr(P);
  for (const F of S) {
    const L = D.filter((M) => M.parentId === F.id).map((M) => ({
      id: M.childId,
      tagName: M.childTagName
    }));
    if (L.length > 0) {
      const M = h.findIndex(
        (G) => G.id === F.id
      );
      M >= 0 && (h[M].children || (h[M].children = []), h[M].children.push(...L), Ua({
        children: L,
        tagName: F.tagName
      }));
    }
  }
  return h;
}
function Yr(C) {
  return Vt[C] || [];
}
function Ua(C) {
  const { children: S, tagName: P } = C, h = S.map((F) => F.id), D = Yr(P);
  Vt[P] = D.filter(
    (F) => !h.includes(F.childId)
  );
}
function Va(C) {
  return "prefix" in C && "uri" in C && !!C.prefix && !!C.uri;
}
function Ga(C, S) {
  return Object.keys(S).includes(C);
}
function Xr(C) {
  let S = "pending";
  const P = C.batchSize;
  let h = [], D = !1, F;
  return { push: M, next: L, close: G, status: S };
  async function L() {
    if (h.length === 0 && D)
      return S = "done", Promise.resolve({ value: [], done: !0 });
    const oe = D && h.length > 0, me = h.length >= P;
    if (oe || me) {
      const ie = h.splice(0, P);
      return Promise.resolve({ value: ie, done: !1 });
    }
    const { resolve: Y, promise: ae } = Promise.withResolvers();
    return F = Y, ae;
  }
  function M(oe) {
    if (h.length >= P && F) {
      const me = h.splice(0, P);
      F({ value: me, done: !1 }), F = void 0;
    }
    h.push(oe);
  }
  function G() {
    if (D = !0, F) {
      const oe = h.splice(0, P);
      F({ value: oe, done: !1 }), F = void 0;
    }
  }
}
function Qa(C) {
  const { importContext: S, tagName: P } = C, h = {
    ...S
  };
  if (!h.queues[P]) {
    const D = Xr({
      batchSize: h.options.batchSize
    });
    h.queues[P] = D, queueMicrotask(() => {
      Hr({
        tagName: P,
        importContext: h,
        isEndingQueue: !1
      }).catch((F) => {
        throw console.error(`Consumer error for ${P}:`, F), F;
      });
    });
  }
  return h;
}
function za(C) {
  const { tagName: S, importContext: P } = C, h = {
    ...P
  };
  if (!P.endingQueues[S]) {
    const D = Xr({
      batchSize: P.options.batchSize
    });
    h.endingQueues[S] = D;
  }
  return h;
}
function Ya(C) {
  const { importContext: S } = C;
  let P = { ...S };
  for (const D of Object.keys(P.queues))
    P.queues[D]?.close();
  const h = P.queuesObservable.subscribe(async () => {
    P = await Ha({
      importContext: P
    }), h();
  });
  return P;
}
function Xa(C) {
  const { importContext: S } = C, P = S.endingQueues && Object.keys(S.endingQueues).length > 0;
  return Promise.all([
    new Promise((h) => {
      const D = S.queuesObservable.subscribe(() => {
        S.queuesObservable.isAllDone() && (D(), h());
      });
    }),
    P ? new Promise((h) => {
      const D = S.endingQueuesObservable.subscribe(() => {
        S.endingQueuesObservable.isAllDone() && (D(), h());
      });
    }) : Promise.resolve()
  ]);
}
async function Ha(C) {
  const { importContext: S } = C, P = { ...S };
  await ja({
    databaseInstance: S.databaseInstance,
    tagNames: Object.keys(S.endingQueues)
  });
  for (const h of Object.keys(P.endingQueues)) {
    if (!P.endingQueues[h]) throw new Error(`Ending queue for tagName ${h} is not defined`);
    P.endingQueues[h]?.close(), queueMicrotask(() => {
      Hr({
        tagName: h,
        importContext: P,
        isEndingQueue: !0
      }).catch((D) => {
        throw console.error(`Consumer error for ${h}:`, D), D;
      });
    });
  }
  return P;
}
function Gr(C) {
  const S = /* @__PURE__ */ new Set();
  function P(F) {
    return S.add(F), () => S.delete(F);
  }
  function h() {
    for (const F of S) F();
  }
  function D() {
    return Object.values(C).every((F) => F.status === "done");
  }
  return { subscribe: P, notify: h, isAllDone: D };
}
async function Hr(C) {
  const { tagName: S, importContext: P, isEndingQueue: h } = C;
  let D, F;
  if (h ? (D = P.endingQueues, F = P.endingQueuesObservable) : (D = P.queues, F = P.queuesObservable), !Ga(S, D) || !D[S])
    throw new Error(`Queue for tagName ${S} is not defined to be consumed`);
  for (; ; ) {
    const { value: L, done: M } = await D[S].next();
    if (M) {
      F.isAllDone() && F.notify();
      break;
    }
    if (L.length === 0) continue;
    const G = La({
      parentRecordsBatch: L,
      // within the same batch, all records have the same tagName
      parentTagName: L[0].tagName
    });
    await Ka({
      databaseInstance: P.databaseInstance,
      tagName: S,
      records: G
    });
  }
}
function Wa(C) {
  const { importContext: S } = C;
  let P = {
    stack: [],
    currentParentElements: []
  }, h = {
    ...S
  };
  const D = Da.parser(
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
  return D.onopentag = (F) => P = $a({ node: F, state: P }), D.ontext = (F) => P = Ja({ text: F, state: P }), D.onclosetag = () => ({ updatedState: P, updatedImportContext: h } = Za({
    state: P,
    importContext: S
  })), D.onend = () => h = eo({ importContext: h }), D.onerror = to, { xmlParser: D, importContext: h };
}
function $a(C) {
  const { node: S, state: P } = C, h = { ...P }, D = crypto.randomUUID(), F = no(S), L = ro(S), M = ao(S.attributes), G = oo(P.currentParentElements), oe = {
    id: D,
    tagName: F,
    namespace: L,
    attributes: M,
    value: "",
    parent: G ? { id: G.id, tagName: G.tagName } : null,
    children: []
  };
  return h.stack.push(oe), h.currentParentElements = [
    ...h.currentParentElements,
    { id: D, tagName: F }
  ], h;
}
function Ja(C) {
  const { text: S, state: P } = C;
  return S && P.stack.length > 0 && (P.stack[P.stack.length - 1].value += S), P;
}
function Za(C) {
  const { state: S, importContext: P } = C;
  let h = { ...P }, D = [...S.stack], F = [...S.currentParentElements];
  const L = S.stack.at(-1);
  if (D = S.stack.slice(0, -1), F = S.currentParentElements.slice(0, -1), L) {
    if (D.length) {
      const M = D.length - 1;
      D = D.map(
        (G, oe) => oe === M ? {
          ...G,
          children: [
            ...G.children || [],
            { id: L.id, tagName: L.tagName }
          ]
        } : G
      );
    } else L.parent && Ma({
      parent: L.parent,
      child: { id: L.id, tagName: L.tagName }
    });
    zr.includes(L.tagName) ? (h = Qa({
      tagName: L.tagName,
      importContext: h
    }), h.queues[L.tagName]?.push(L)) : (h = za({
      tagName: L.tagName,
      importContext: h
    }), h.endingQueues[L.tagName]?.push(L));
  }
  return {
    updatedState: {
      stack: D,
      currentParentElements: F
    },
    updatedImportContext: h
  };
}
function eo(C) {
  const { importContext: S } = C;
  return Ya({
    importContext: S
  });
}
function to(C) {
  return new Error(`XML parsing error: ${C}`);
}
function no(C) {
  return C.local || null;
}
function ro(C) {
  return Va(C) ? {
    prefix: C.prefix,
    uri: C.uri
  } : null;
}
function ao(C) {
  return Object.values(C).map((S) => {
    const P = S.prefix && S.uri ? {
      prefix: S.prefix,
      uri: S.uri
    } : null;
    return {
      name: S.name,
      value: S.value,
      namespace: P
    };
  });
}
function oo(C) {
  return C.length === 0 ? null : C[C.length - 1];
}
const io = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function so({
  files: C,
  options: S = io
}) {
  const P = [];
  if (C.length === 0) throw new Error("No files provided for import.");
  for (const h of C) {
    if (!uo(h)) {
      console.error(`Unsupported file type: ${h.name}`);
      continue;
    }
    if (h.size === 0) {
      console.warn(`File is empty: ${h.name}`);
      continue;
    }
    const D = await lo({ file: h, options: S });
    P.push(D);
  }
  return P;
}
function uo(C) {
  return Na.some((S) => C.name.toLowerCase().endsWith(S));
}
function co(C) {
  return C.name.replace(/\.[^.]+$/, "");
}
async function lo(C) {
  const { file: S, options: P } = C;
  try {
    const h = co(S);
    await qa(h);
    let D = {
      databaseInstance: Ba(h),
      options: {
        batchSize: P.batchSize
      },
      queues: {},
      endingQueues: {},
      queuesObservable: Gr({}),
      endingQueuesObservable: Gr({})
    };
    return P.useBrowserApi && (D = await fo({
      file: S,
      importContext: D,
      options: {
        chunkSize: P.chunkSize
      }
    })), await Xa({
      importContext: D
    }), h;
  } catch (h) {
    throw console.error(`Error importing file ${S.name}:`, h), h;
  }
}
async function fo(C) {
  const { file: S, importContext: P, options: h } = C, D = S.stream().getReader(), { xmlParser: F, importContext: L } = Wa({
    importContext: P
  }), M = new TextDecoder(), G = new Uint8Array(0);
  return await nr(D, F, M, G, h), L;
}
async function nr(C, S, P, h, D) {
  const F = D.chunkSize, { done: L, value: M } = await C.read();
  if (L) {
    if (h.length > 0) {
      const oe = P.decode(h);
      S.write(oe);
    }
    S.close();
    return;
  }
  if (!M)
    return await nr(C, S, P, h, D);
  let G = new Uint8Array(h.length + M.length);
  for (G.set(h), G.set(M, h.length); G.length >= F; ) {
    const oe = G.slice(0, F);
    G = G.slice(F);
    const me = P.decode(oe, { stream: !0 });
    S.write(me);
  }
  return await nr(C, S, P, G, D);
}
async function Co() {
  const C = localStorage.getItem("currentActiveFileDatabaseName");
  if (!C)
    throw new Error("no active file");
  const S = await yo(), P = await so({ files: S });
  await po(C, P);
}
async function po(C, S) {
  const P = new Kr(C);
  await P.open();
  const h = jr(P), D = new Kr(S[0]);
  await D.open();
  const F = jr(D);
  await L(), await M(), await G(), D.close(), P.close();
  async function L() {
    const Y = await D.table("Header").orderBy("id").first();
    if (!Y) {
      const W = { msg: "Header element is missing in FSD" };
      throw console.error(W), new Error(JSON.stringify(W));
    }
    const ae = Le(Y, "uuid");
    if (!ae) {
      const W = { msg: "uuid is missing in Header element", header: Y };
      throw console.error(W), new Error(JSON.stringify(W));
    }
    const ie = Le(Y, "version");
    if (!ie) {
      const W = { msg: "version is missing in Header element", header: Y };
      throw console.error(W), new Error(JSON.stringify(W));
    }
    const ee = Le(Y, "revision");
    if (!ee) {
      const W = { msg: "revision is missing in Header element", header: Y };
      throw console.error(W), new Error(JSON.stringify(W));
    }
    const ge = await D.table("Function").toArray();
    for (const W of ge) {
      const be = await rr(D, W), Se = [];
      for (const H of be)
        if (Jn(H, ["Substation", "VoltageLevel", "Bay"])) {
          const we = await Qr(P, H, "name");
          Se.push(we);
        }
      F.instantiate(W);
      const le = await h.addRecord(W);
      let pe = (await F.findChildRecordsByTagName(le, "Private")).filter((H) => Le(H, "type")?.value === "eIEC61850-6-100").at(0);
      if (!pe) {
        const H = {
          tagName: "Private",
          attributes: [{ name: "type", value: "eIEC61850-6-100" }],
          value: null,
          parent: null,
          namespace: null,
          children: []
        };
        pe = await h.addRecord(H), await h.ensureRelationship(le, pe);
      }
      const Oe = {
        tagName: "SclFileReference",
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        attributes: [
          { name: "fileType", value: "FSD" },
          { name: "fileUuid", value: ae.value },
          { name: "version", value: ie.value },
          { name: "revision", value: ee.value }
        ],
        value: null,
        parent: null,
        children: []
      }, se = await h.addRecord(Oe);
      await h.ensureRelationship(pe, se);
      const mt = await F.findChildRecords(W);
      for (const H of mt) {
        const we = await me(H);
        h.ensureRelationship(le, we);
      }
      const _ = [le, ...Se];
      for (let H = 0; H < _.length; H++) {
        const we = _[H], rt = _[H + 1];
        rt && await h.ensureRelationship(rt, we);
      }
      const ze = await h.findRootSCL(), Fe = _.at(-1);
      ze && Fe && await h.ensureRelationship(ze, Fe);
    }
  }
  async function M() {
    const Y = await D.table("DataTypeTemplates").orderBy("id").first();
    if (!Y) {
      console.info("no data type templates, stopping");
      return;
    }
    let ae = await P.table("DataTypeTemplates").orderBy("id").first();
    if (!ae) {
      const ee = {
        tagName: "DataTypeTemplates",
        namespace: null,
        attributes: null,
        value: null,
        parent: null,
        children: null
      };
      ae = await h.addRecord(ee);
      const ge = await h.findRootSCL();
      await h.ensureRelationship(ge, ae);
    }
    const ie = await F.findChildRecords(Y);
    if (ie.length === 0) {
      console.info("DataTypeTemplates is empty, stopping.");
      return;
    }
    for (const ee of ie) {
      const ge = Le(ee, "id");
      if (!ge) {
        console.warn("id attribute not found, continuing", ee);
        continue;
      }
      if (await h.findOneRecordByAttribute(
        ee.tagName,
        ge
      ))
        continue;
      const be = await me(ee);
      await h.ensureRelationship(ae, be);
    }
  }
  async function G() {
    const Y = await D.table("FunctionCategory").toArray();
    for (const ae of Y) {
      const ie = await rr(D, ae), ee = [];
      for (const le of ie.reverse()) {
        if (Jn(le, ["Substation", "VoltageLevel", "Bay"])) {
          const te = await Qr(P, le, "name");
          ee.unshift(te);
        }
        if (Jn(le, ["Private"])) {
          const te = ee[ee.length - 1];
          if (!te) {
            const Oe = {
              msg: "in the case of function category instantiation private field without a parent (so beeing under SCL root) is considered an error",
              record: le,
              path: ie,
              newGrandParent: te,
              newParentPath: ee
            };
            throw console.error(Oe), new Error(JSON.stringify(Oe));
          }
          const pe = await ho(h, le, te);
          ee.unshift(pe);
        }
      }
      const W = [await oe(ae), ...ee];
      for (let le = 0; le < W.length; le++) {
        const te = W[le], pe = W[le + 1];
        pe && await h.ensureRelationship(pe, te);
      }
      const be = await h.findRootSCL(), Se = W.at(-1);
      be && Se && await h.ensureRelationship(be, Se);
    }
  }
  async function oe(Y) {
    const ae = Le(Y, "uuid");
    if (!ae) {
      const W = { msg: "no uuid found in element", funcCatInFSD: Y };
      throw console.error(W), new Error(JSON.stringify(W));
    }
    let ie = await h.findOneRecordByAttribute(Y.tagName, {
      name: "templateUuid",
      value: ae.value
    });
    ie || (F.instantiate(Y), ie = await h.addRecord(Y));
    const ee = await F.findChildRecordsByTagName(Y, "FunctionCatRef");
    for (const W of ee) {
      const be = await h.addRecord(W);
      await h.ensureRelationship(ie, be);
      const Se = Le(be, "functionUuid");
      if (!Se) continue;
      const le = await h.findOneRecordByAttribute("Function", {
        name: "templateUuid",
        value: Se.value
      });
      if (!le) {
        const pe = { msg: "could not found function by templateUuid", functionUuidAttr: Se };
        throw console.error(pe), new Error(JSON.stringify(pe));
      }
      const te = Le(le, "uuid");
      if (!te) {
        const pe = { msg: "function does not have an uuid", funcInASD: le };
        throw console.error(pe), new Error(JSON.stringify(pe));
      }
      Ta(be, "functionUuid", te?.value), await h.updateRecord(be);
    }
    const ge = await F.findChildRecordsByTagName(Y, "SubCategory");
    for (const W of ge) {
      const be = await oe(W);
      await h.ensureRelationship(ie, be);
    }
    return ie;
  }
  async function me(Y) {
    const ae = await h.addRecord(Y), ie = await F.findChildRecords(Y);
    for (const ee of ie) {
      const ge = await me(ee);
      h.ensureRelationship(ae, ge);
    }
    return ae;
  }
}
async function Qr(C, S, P) {
  const h = Le(S, P);
  if (!h)
    throw console.error("could not find name of record", S), new Error("could not find name of record");
  const D = await _a(C, S.tagName, h);
  return D || (await C.table(S.tagName).add(S), S);
}
async function ho(C, S, P) {
  const h = Le(S, "type");
  if (!h || !h.value) {
    const L = {
      msg: "type attribute is required but it is missing or empty",
      typeAttr: h,
      record: S
    };
    throw console.error(L), new Error(JSON.stringify(L));
  }
  const D = await C.db.table(S.tagName).where("parent.id").equals(P.id).filter(
    (L) => !!L.attributes?.some((M) => M.name === "type" && M.value === h.value)
  ).first();
  return D || await C.addRecord(S);
}
function Jn(C, S) {
  return S.includes(C.tagName);
}
async function mo(C, S, P) {
  return C.table(S).get(P);
}
async function rr(C, S, P = []) {
  if (!S.parent)
    return [];
  const h = await mo(C, S.parent.tagName, S.parent.id);
  if (!h)
    throw console.error("could not find parent for", S), new Error("could not find parent for record");
  if (!h.parent)
    return [];
  const F = await rr(C, h, P);
  return [h, ...F];
}
async function yo() {
  const { promise: C, resolve: S } = Promise.withResolvers(), { open: P, onChange: h } = Ea({
    accept: "fsd"
  });
  return h((D) => {
    if (D?.length === 0 || D === null) {
      S([]);
      return;
    }
    S(Array.from(D));
  }), P(), C;
}
export {
  Co as default,
  po as instantiateFSD
};
