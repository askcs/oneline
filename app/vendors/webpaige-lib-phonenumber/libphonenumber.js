
(function ()
{
  function i(a) {
    throw a;
  }
  var j = void 0,
    k = !0,
    l = null,
    m = !1,
    p = this;

  function aa(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
  }

  function q(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.La = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
  };
  var ba = Array.prototype,
    ca = ba.indexOf ? function (a, b, c) {
      return ba.indexOf.call(a, b, c)
    } : function (a, b, c) {
      c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if ("string" == typeof a) return "string" != typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
      for (; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    };

  function da(a, b) {
    ba.sort.call(a, b || ea)
  }

  function ea(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  };
  var s, fa, t, ga;

  function ha() {
    return p.navigator ? p.navigator.userAgent : l
  }
  ga = t = fa = s = m;
  var ia;
  if (ia = ha()) {
    var ja = p.navigator;
    s = 0 == ia.indexOf("Opera");
    fa = !s && -1 != ia.indexOf("MSIE");
    t = !s && -1 != ia.indexOf("WebKit");
    ga = !s && !t && "Gecko" == ja.product
  }
  var u = fa,
    ka = ga,
    la = t;

  function ma() {
    var a = p.document;
    return a ? a.documentMode : j
  }
  var na;
  a: {
    var oa = "",
      v;
    if (s && p.opera) var pa = p.opera.version,
      oa = "function" == typeof pa ? pa() : pa;
    else if (ka ? v = /rv\:([^\);]+)(\)|;)/ : u ? v = /MSIE\s+([^\);]+)(\)|;)/ : la && (v = /WebKit\/(\S+)/), v) var qa = v.exec(ha()),
      oa = qa ? qa[1] : "";
    if (u) {
      var ra = ma();
      if (ra > parseFloat(oa)) {
        na = String(ra);
        break a
      }
    }
    na = oa
  }
  var sa = {};

  function ta(a) {
    if (!sa[a]) {
      for (var b = 0, c = String(na).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || "",
          h = d[f] || "",
          n = RegExp("(\\d*)(\\D*)", "g"),
          w = RegExp("(\\d*)(\\D*)", "g");
        do {
          var r = n.exec(g) || ["", "", ""],
            z = w.exec(h) || ["", "", ""];
          if (0 == r[0].length && 0 == z[0].length) break;
          b = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == z[1].length ? 0 : parseInt(z[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) >
            (0 == z[1].length ? 0 : parseInt(z[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == z[2].length) ? -1 : (0 == r[2].length) > (0 == z[2].length) ? 1 : 0) || (r[2] < z[2] ? -1 : r[2] > z[2] ? 1 : 0)
        } while (0 == b)
      }
      sa[a] = 0 <= b
    }
  }
  var ua = p.document,
    va = !ua || !u ? j : ma() || ("CSS1Compat" == ua.compatMode ? parseInt(na, 10) : 5);
  if (ka || u) {
    var wa;
    if (wa = u) wa = u && 9 <= va;
    wa || ka && ta("1.9.1")
  }
  u && ta("9");

  function xa(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b
  }

  function ya(a, b) {
    var c;
    a: {
      for (c in a)
        if (b.call(j, a[c], c, a)) break a;
      c = j
    }
    return c && a[c]
  }

  function za(a) {
    return "string" == typeof a ? document.getElementById(a) : a
  }

  function Aa(a) {
    return (new Ba(j)).ca(a)
  }

  function Ba(a) {
    this.ga = a
  }
  Ba.prototype.ca = function (a) {
    var b = [];
    Ca(this, a, b);
    return b.join("")
  };

  function Ca(a, b, c) {
    switch (typeof b) {
      case "string":
        Da(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? b : "null");
        break;
      case "boolean":
        c.push(b);
        break;
      case "undefined":
        c.push("null");
        break;
      case "object":
        if (b == l) {
          c.push("null");
          break
        }
        if ("array" == aa(b)) {
          var d = b.length;
          c.push("[");
          for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], Ca(a, a.ga ? a.ga.call(b, String(f), e) : e, c), e = ",";
          c.push("]");
          break
        }
        c.push("{");
        d = "";
        for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d),
          Da(f, c), c.push(":"), Ca(a, a.ga ? a.ga.call(b, f, e) : e, c), d = ","));
        c.push("}");
        break;
      case "function":
        break;
      default:
        i(Error("Unknown type: " + typeof b))
    }
  }
  var Ea = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  }, Fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

  function Da(a, b) {
    b.push('"', a.replace(Fa, function (a) {
      if (a in Ea) return Ea[a];
      var b = a.charCodeAt(0),
        e = "\\u";
      16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
      return Ea[a] = e + b.toString(16)
    }), '"')
  }

  function Ga(a, b, c) {
    this.za = a;
    this.oa = b.name || l;
    this.Sa = b.$ || l;
    this.sa = b.Ra;
    this.l = {};
    for (a = 0; a < c.length; a++) b = c[a], this.l[b.j] = b
  }
  Ga.prototype.getName = function () {
    return this.oa
  };
  Ga.prototype.p = function () {
    return !this.sa ? l : this.sa.c()
  };

  function Ha(a) {
    a = xa(a.l);
    da(a, function (a, c) {
      return a.j - c.j
    });
    return a
  }

  function Ia(a, b) {
    return ya(a.l, function (a) {
      return a.getName() == b
    }) || l
  };

  function Ja(a, b, c) {
    this.Ja = a;
    this.j = b;
    this.oa = c.name;
    this.q = !! c.fa;
    this.Ta = !! c.required;
    this.n = c.a;
    this.pa = c.type;
    this.ua = m;
    switch (this.n) {
      case Ka:
      case La:
      case Ma:
      case Na:
      case Oa:
        this.ua = k
    }
    this.la = c.defaultValue
  }
  var Ka = 3,
    La = 4,
    Ma = 6,
    Na = 16,
    Oa = 18;
  Ja.prototype.p = function () {
    return this.Ja.c()
  };
  Ja.prototype.getName = function () {
    return this.oa
  };

  function x() {
    this.f = {};
    this.l = this.c().l;
    this.e = this.na = l
  }

  function Pa(a, b) {
    for (var c in a.f) {
      var d = Number(c);
      a.l[d] || b.call(a, d, a.f[c])
    }
  }
  x.prototype.c = function () {
    var a = this.constructor,
      b;
    if (!(b = a.ta)) {
      var c;
      b = a.Ga;
      var d = [],
        e;
      for (e in b) b.hasOwnProperty(e) && (0 == e ? c = b[0] : d.push(new Ja(a, e, b[e])));
      c = new Ga(a, c, d);
      b = a.ta = c
    }
    return b
  };

  function Qa(a, b) {
    b.p();
    a.c();
    return y(a, b.j)
  }

  function Ra(a, b) {
    b.p();
    a.c();
    return Sa(a, b.j)
  }
  x.prototype.get = function (a, b) {
    a.p();
    this.c();
    return A(this, a.j, b)
  };
  x.prototype.set = function (a, b) {
    a.p();
    this.c();
    B(this, a.j, b)
  };
  x.prototype.add = function (a, b) {
    a.p();
    this.c();
    var c = a.j;
    this.f[c] || (this.f[c] = []);
    this.f[c].push(b);
    this.e && delete this.e[c]
  };
  x.prototype.clear = function (a) {
    a.p();
    this.c();
    Ta(this, a.j)
  };

  function Ua(a, b) {
    for (var c = Ha(a.c()), d = 0; d < c.length; d++) {
      var e = c[d];
      if (Qa(b, e)) {
        a.e && delete a.e[e.j];
        var f = 11 == e.n || 10 == e.n;
        if (e.q) {
          var g;
          g = b;
          var h = e;
          h.p();
          g.c();
          g = C(g, h.j);
          for (h = 0; h < g.length; h++) a.add(e, f ? Va(g[h]) : g[h])
        } else g = Wa(b, e), f ? (f = Wa(a, e)) ? Ua(f, g) : a.set(e, Va(g)) : a.set(e, g)
      }
    }
  }

  function Va(a) {
    var b = new a.constructor;
    b != a && (b.f = {}, b.e && (b.e = {}), Ua(b, a));
    return b
  }

  function y(a, b) {
    return b in a.f && a.f[b] !== j && a.f[b] !== l
  }

  function Wa(a, b) {
    var c = b.j;
    if (!c in a.f) return l;
    var d = a.f[c];
    if (d == l) return l;
    if (a.na) {
      if (!(c in a.e)) {
        var e = a.na;
        if (d != l)
          if (b.q) {
            for (var f = [], g = 0; g < d.length; g++) f[g] = e.s(b, d[g]);
            d = f
          } else d = e.s(b, d);
        return a.e[c] = d
      }
      return a.e[c]
    }
    return d
  }

  function A(a, b, c) {
    b = a.l[b];
    a = Wa(a, b);
    return b.q ? a[c || 0] : a
  }

  function D(a, b, c) {
    y(a, b) ? a = A(a, b, c) : (a = a.l[b], a.la === j && (b = a.pa, a.la = b === Boolean ? m : b === Number ? 0 : b === String ? "" : new b), a = a.la);
    return a
  }

  function C(a, b) {
    return Wa(a, a.l[b]) || []
  }

  function Sa(a, b) {
    return a.l[b].q ? y(a, b) ? a.f[b].length : 0 : y(a, b) ? 1 : 0
  }

  function B(a, b, c) {
    a.f[b] = c;
    a.e && (a.e[b] = c)
  }

  function Ta(a, b) {
    delete a.f[b];
    a.e && delete a.e[b]
  }

  function E(a, b) {
    a.Ga = b;
    a.c = function () {
      return a.ta || (new a).c()
    }
  };

  function F() {}
  F.prototype.t = function (a, b) {
    return 11 == a.n || 10 == a.n ? this.ca(b) : b
  };
  F.prototype.z = function (a, b) {
    var c = new a.za;
    this.va(c, b);
    return c
  };
  F.prototype.s = function (a, b) {
    if (11 == a.n || 10 == a.n) return b instanceof x ? b : this.z(a.pa.c(), b);
    if (!a.ua) return b;
    var c = a.pa;
    if (c === String) {
      if ("number" === typeof b) return String(b)
    } else if (c === Number && "string" === typeof b && /^-?[0-9]+$/.test(b)) return Number(b);
    return b
  };

  function Xa(a) {
    this.Ha = a
  }
  q(Xa, F);
  Xa.prototype.ca = function (a) {
    for (var b = Ha(a.c()), c = {}, d = 0; d < b.length; d++) {
      var e = b[d],
        f = 1 == this.Ha ? e.getName() : e.j;
      if (Qa(a, e))
        if (e.q) {
          var g = [];
          c[f] = g;
          for (f = 0; f < Ra(a, e); f++) g.push(this.t(e, a.get(e, f)))
        } else c[f] = this.t(e, a.get(e))
    }
    Pa(a, function (a, b) {
      c[a] = b
    });
    return c
  };
  Xa.prototype.va = function (a, b) {
    var c = a.c(),
      d;
    for (d in b) {
      var e, f = b[d],
        g = !/[^0-9]/.test(d);
      if (e = g ? c.l[parseInt(d, 10)] || l : Ia(c, d))
        if (e.q)
          for (g = 0; g < f.length; g++) a.add(e, this.s(e, f[g]));
        else a.set(e, this.s(e, f));
      else g && (e = a, g = Number(d), e.f[g] = f, e.e && delete e.e[g])
    }
  };

  function G(a, b) {
    a != l && this.append.apply(this, arguments)
  }
  G.prototype.h = "";
  G.prototype.set = function (a) {
    this.h = "" + a
  };
  G.prototype.append = function (a, b, c) {
    this.h += a;
    if (b != l)
      for (var d = 1; d < arguments.length; d++) this.h += arguments[d];
    return this
  };
  G.prototype.clear = function () {
    this.h = ""
  };
  G.prototype.toString = function () {
    return this.h
  };
  /*

   Protocol Buffer 2 Copyright 2008 Google Inc.
   All other code copyright its respective owners.
   Copyright (C) 2010 The Libphonenumber Authors

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */
  function Ya() {
    x.apply(this)
  }
  q(Ya, x);

  function H() {
    x.apply(this)
  }
  q(H, x);

  function I() {
    x.apply(this)
  }
  q(I, x);
  I.prototype.wa = function () {
    return A(this, 10)
  };
  I.prototype.g = function () {
    return D(this, 10)
  };
  I.prototype.da = function (a) {
    B(this, 10, a)
  };

  function Za() {
    x.apply(this)
  }
  q(Za, x);
  E(Ya, {
    "0": {
      name: "NumberFormat",
      $: "i18n.phonenumbers.NumberFormat"
    },
    1: {
      name: "pattern",
      required: k,
      a: 9,
      type: String
    },
    2: {
      name: "format",
      required: k,
      a: 9,
      type: String
    },
    3: {
      name: "leading_digits_pattern",
      fa: k,
      a: 9,
      type: String
    },
    4: {
      name: "national_prefix_formatting_rule",
      a: 9,
      type: String
    },
    6: {
      name: "national_prefix_optional_when_formatting",
      a: 8,
      type: Boolean
    },
    5: {
      name: "domestic_carrier_code_formatting_rule",
      a: 9,
      type: String
    }
  });
  E(H, {
    "0": {
      name: "PhoneNumberDesc",
      $: "i18n.phonenumbers.PhoneNumberDesc"
    },
    2: {
      name: "national_number_pattern",
      a: 9,
      type: String
    },
    3: {
      name: "possible_number_pattern",
      a: 9,
      type: String
    },
    6: {
      name: "example_number",
      a: 9,
      type: String
    }
  });
  E(I, {
    "0": {
      name: "PhoneMetadata",
      $: "i18n.phonenumbers.PhoneMetadata"
    },
    1: {
      name: "general_desc",
      required: k,
      a: 11,
      type: H
    },
    2: {
      name: "fixed_line",
      required: k,
      a: 11,
      type: H
    },
    3: {
      name: "mobile",
      required: k,
      a: 11,
      type: H
    },
    4: {
      name: "toll_free",
      required: k,
      a: 11,
      type: H
    },
    5: {
      name: "premium_rate",
      required: k,
      a: 11,
      type: H
    },
    6: {
      name: "shared_cost",
      required: k,
      a: 11,
      type: H
    },
    7: {
      name: "personal_number",
      required: k,
      a: 11,
      type: H
    },
    8: {
      name: "voip",
      required: k,
      a: 11,
      type: H
    },
    21: {
      name: "pager",
      required: k,
      a: 11,
      type: H
    },
    25: {
      name: "uan",
      required: k,
      a: 11,
      type: H
    },
    27: {
      name: "emergency",
      required: k,
      a: 11,
      type: H
    },
    28: {
      name: "voicemail",
      required: k,
      a: 11,
      type: H
    },
    24: {
      name: "no_international_dialling",
      required: k,
      a: 11,
      type: H
    },
    9: {
      name: "id",
      required: k,
      a: 9,
      type: String
    },
    10: {
      name: "country_code",
      required: k,
      a: 5,
      type: Number
    },
    11: {
      name: "international_prefix",
      required: k,
      a: 9,
      type: String
    },
    17: {
      name: "preferred_international_prefix",
      a: 9,
      type: String
    },
    12: {
      name: "national_prefix",
      a: 9,
      type: String
    },
    13: {
      name: "preferred_extn_prefix",
      a: 9,
      type: String
    },
    15: {
      name: "national_prefix_for_parsing",
      a: 9,
      type: String
    },
    16: {
      name: "national_prefix_transform_rule",
      a: 9,
      type: String
    },
    18: {
      name: "same_mobile_and_fixed_line_pattern",
      a: 8,
      defaultValue: m,
      type: Boolean
    },
    19: {
      name: "number_format",
      fa: k,
      a: 11,
      type: Ya
    },
    20: {
      name: "intl_number_format",
      fa: k,
      a: 11,
      type: Ya
    },
    22: {
      name: "main_country_for_code",
      a: 8,
      defaultValue: m,
      type: Boolean
    },
    23: {
      name: "leading_digits",
      a: 9,
      type: String
    },
    26: {
      name: "leading_zero_possible",
      a: 8,
      defaultValue: m,
      type: Boolean
    }
  });
  E(Za, {
    "0": {
      name: "PhoneMetadataCollection",
      $: "i18n.phonenumbers.PhoneMetadataCollection"
    },
    1: {
      name: "metadata",
      fa: k,
      a: 11,
      type: I
    }
  });
  /*

   Protocol Buffer 2 Copyright 2008 Google Inc.
   All other code copyright its respective owners.
   Copyright (C) 2010 The Libphonenumber Authors

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */
  function J() {
    x.apply(this)
  }
  q(J, x);
  J.prototype.wa = function () {
    return A(this, 1)
  };
  J.prototype.g = function () {
    return D(this, 1)
  };
  J.prototype.da = function (a) {
    B(this, 1, a)
  };
  J.prototype.getExtension = function () {
    return A(this, 3)
  };
  E(J, {
    "0": {
      name: "PhoneNumber",
      $: "i18n.phonenumbers.PhoneNumber"
    },
    1: {
      name: "country_code",
      required: k,
      a: 5,
      type: Number
    },
    2: {
      name: "national_number",
      required: k,
      a: 4,
      type: Number
    },
    3: {
      name: "extension",
      a: 9,
      type: String
    },
    4: {
      name: "italian_leading_zero",
      a: 8,
      type: Boolean
    },
    5: {
      name: "raw_input",
      a: 9,
      type: String
    },
    6: {
      name: "country_code_source",
      a: 14,
      defaultValue: 1,
      type: {
        Pa: 1,
        Oa: 5,
        Na: 10,
        Ma: 20
      }
    },
    7: {
      name: "preferred_domestic_carrier_code",
      a: 9,
      type: String
    }
  });

  function $a() {}
  q($a, F);
  $a.prototype.z = function (a, b) {
    var c = new a.za;
    c.na = this;
    c.f = b;
    c.e = {};
    return c
  };
  $a.prototype.va = function () {
    i(Error("Unimplemented"))
  };

  function K() {}
  q(K, $a);
  K.prototype.Ba = m;
  K.prototype.ca = function (a) {
    for (var b = Ha(a.c()), c = [], d = this.Ba, e = 0; e < b.length; e++) {
      var f = b[e];
      if (Qa(a, f)) {
        var g = f.j,
          g = d ? g - 1 : g;
        if (f.q) {
          c[g] = [];
          for (var h = 0; h < Ra(a, f); h++) c[g][h] = this.t(f, a.get(f, h))
        } else c[g] = this.t(f, a.get(f))
      }
    }
    Pa(a, function (a, b) {
      c[d ? a - 1 : a] = b
    });
    return c
  };
  K.prototype.t = function (a, b) {
    return 8 == a.n ? b ? 1 : 0 : F.prototype.t.apply(this, arguments)
  };
  K.prototype.s = function (a, b) {
    return 8 == a.n ? 1 === b : F.prototype.s.apply(this, arguments)
  };
  K.prototype.z = function (a, b) {
    var c = b;
    if (this.Ba) {
      var c = [],
        d;
      for (d in b) c[parseInt(d, 10) + 1] = b[d]
    }
    return K.La.z.call(this, a, c)
  };
  /*

   Copyright (C) 2010 The Libphonenumber Authors

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */
  var L = {
    1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
    7: ["RU", "KZ"],
    20: ["EG"],
    27: ["ZA"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB", "GG", "IM", "JE"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO", "SJ"],
    48: ["PL"],
    49: ["DE"],
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    60: ["MY"],
    61: ["AU", "CC", "CX"],
    62: ["ID"],
    63: ["PH"],
    64: ["NZ"],
    65: ["SG"],
    66: ["TH"],
    81: ["JP"],
    82: ["KR"],
    84: ["VN"],
    86: ["CN"],
    90: ["TR"],
    91: ["IN"],
    92: ["PK"],
    93: ["AF"],
    94: ["LK"],
    95: ["MM"],
    98: ["IR"],
    211: ["SS"],
    212: ["MA", "EH"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    220: ["GM"],
    221: ["SN"],
    222: ["MR"],
    223: ["ML"],
    224: ["GN"],
    225: ["CI"],
    226: ["BF"],
    227: ["NE"],
    228: ["TG"],
    229: ["BJ"],
    230: ["MU"],
    231: ["LR"],
    232: ["SL"],
    233: ["GH"],
    234: ["NG"],
    235: ["TD"],
    236: ["CF"],
    237: ["CM"],
    238: ["CV"],
    239: ["ST"],
    240: ["GQ"],
    241: ["GA"],
    242: ["CG"],
    243: ["CD"],
    244: ["AO"],
    245: ["GW"],
    246: ["IO"],
    247: ["AC"],
    248: ["SC"],
    249: ["SD"],
    250: ["RW"],
    251: ["ET"],
    252: ["SO"],
    253: ["DJ"],
    254: ["KE"],
    255: ["TZ"],
    256: ["UG"],
    257: ["BI"],
    258: ["MZ"],
    260: ["ZM"],
    261: ["MG"],
    262: ["RE", "YT"],
    263: ["ZW"],
    264: ["NA"],
    265: ["MW"],
    266: ["LS"],
    267: ["BW"],
    268: ["SZ"],
    269: ["KM"],
    290: ["SH", "TA"],
    291: ["ER"],
    297: ["AW"],
    298: ["FO"],
    299: ["GL"],
    350: ["GI"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    354: ["IS"],
    355: ["AL"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI", "AX"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    373: ["MD"],
    374: ["AM"],
    375: ["BY"],
    376: ["AD"],
    377: ["MC"],
    378: ["SM"],
    379: ["VA"],
    380: ["UA"],
    381: ["RS"],
    382: ["ME"],
    385: ["HR"],
    386: ["SI"],
    387: ["BA"],
    389: ["MK"],
    420: ["CZ"],
    421: ["SK"],
    423: ["LI"],
    500: ["FK"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    508: ["PM"],
    509: ["HT"],
    590: ["GP", "BL", "MF"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    596: ["MQ"],
    597: ["SR"],
    598: ["UY"],
    599: ["CW", "BQ"],
    670: ["TL"],
    672: ["NF"],
    673: ["BN"],
    674: ["NR"],
    675: ["PG"],
    676: ["TO"],
    677: ["SB"],
    678: ["VU"],
    679: ["FJ"],
    680: ["PW"],
    681: ["WF"],
    682: ["CK"],
    683: ["NU"],
    685: ["WS"],
    686: ["KI"],
    687: ["NC"],
    688: ["TV"],
    689: ["PF"],
    690: ["TK"],
    691: ["FM"],
    692: ["MH"],
    800: ["001"],
    808: ["001"],
    850: ["KP"],
    852: ["HK"],
    853: ["MO"],
    855: ["KH"],
    856: ["LA"],
    870: ["001"],
    878: ["001"],
    880: ["BD"],
    881: ["001"],
    882: ["001"],
    883: ["001"],
    886: ["TW"],
    888: ["001"],
    960: ["MV"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"],
    975: ["BT"],
    976: ["MN"],
    977: ["NP"],
    979: ["001"],
    992: ["TJ"],
    993: ["TM"],
    994: ["AZ"],
    995: ["GE"],
    996: ["KG"],
    998: ["UZ"]
  }, ab = {
    AC: [, [, , "[2-467]\\d{3}", "\\d{4}"],
      [, , "(?:[267]\\d|3[0-5]|4[4-69])\\d{2}", "\\d{4}", , , "6889"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "AC", 247, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AD: [, [, , "(?:[346-9]|180)\\d{5}", "\\d{6,8}"],
      [, , "[78]\\d{5}", "\\d{6}", , , "712345"],
      [, , "[346]\\d{5}", "\\d{6}", , , "312345"],
      [, , "180[02]\\d{4}", "\\d{8}", , , "18001234"],
      [, , "9\\d{5}", "\\d{6}", , , "912345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "AD", 376, "00", , , , , , , , [
        [, "(\\d{3})(\\d{3})",
          "$1 $2", ["[346-9]"], "", "", 0
        ],
        [, "(180[02])(\\d{4})", "$1 $2", ["1"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AE: [, [, , "[2-79]\\d{7,8}|800\\d{2,9}", "\\d{5,12}"],
      [, , "[2-4679][2-8]\\d{6}", "\\d{7,8}", , , "22345678"],
      [, , "5[0256]\\d{7}", "\\d{9}", , , "501234567"],
      [, , "400\\d{6}|800\\d{2,9}", "\\d{5,12}", , , "800123456"],
      [, , "900[02]\\d{5}", "\\d{9}", , , "900234567"],
      [, , "700[05]\\d{5}", "\\d{9}", , , "700012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "AE", 971, "00", "0", , , "0", , , , [
        [, "([2-4679])(\\d{3})(\\d{4})",
          "$1 $2 $3", ["[2-4679][2-8]"], "0$1", "", 0
        ],
        [, "(5[0256])(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1", "", 0],
        [, "([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]0"], "$1", "", 0],
        [, "([68]00)(\\d{2,9})", "$1 $2", ["60|8"], "$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "600[25]\\d{5}", "\\d{9}", , , "600212345"], , , [, , "NA", "NA"]
    ],
    AF: [, [, , "[2-7]\\d{8}", "\\d{7,9}"],
      [, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", "\\d{7,9}", , , "234567890"],
      [, , "7[057-9]\\d{7}", "\\d{9}", , , "701234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"], "AF", 93, "00", "0", , , "0", , , , [
        [, "([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AG: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684601234"],
      [, , "268(?:464|7(?:2[0-9]|64|7[0-689]|8[02-68]))\\d{4}", "\\d{10}", , , "2684641234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}",
        "\\d{10}", , , "5002345678"
      ],
      [, , "26848[01]\\d{4}", "\\d{10}", , , "2684801234"], "AG", 1, "011", "1", , , "1", , , , , , [, , "26840[69]\\d{4}", "\\d{10}", , , "2684061234"], , "268", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AI: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "2644(?:6[12]|9[78])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2644612345"],
      [, , "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", "\\d{10}", , , "2642351234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "AI", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "264", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AL: [, [, , "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", "\\d{5,9}"],
      [, , "(?:2(?:[168][1-9]|[247]\\d|9[1-7])|3(?:1[1-3]|[2-6]\\d|[79][1-8]|8[1-9])|4\\d{2}|5(?:1[1-4]|[2-578]\\d|6[1-5]|9[1-7])|8(?:[19][1-5]|[2-6]\\d|[78][1-7]))\\d{5}", "\\d{5,8}", , , "22345678"],
      [, , "6[6-9]\\d{7}", "\\d{9}", , , "661234567"],
      [, , "800\\d{4}", "\\d{7}", , , "8001234"],
      [, , "900\\d{3}", "\\d{6}", , , "900123"],
      [, , "808\\d{3}", "\\d{6}", , , "808123"],
      [, , "700\\d{5}", "\\d{8}", , , "70012345"],
      [, , "NA", "NA"], "AL", 355, "00", "0", , , "0", , , , [
        [, "(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"], "0$1", "", 0],
        [, "(6[6-9])(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|8[016-9]|[79]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AM: [, [, , "[1-9]\\d{7}",
      "\\d{5,8}"
    ],
      [, , "(?:1[01]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}", "\\d{5,8}", , , "10123456"],
      [, , "(?:55|77|9[1-9])\\d{6}", "\\d{8}", , , "77123456"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "90[016]\\d{5}", "\\d{8}", , , "90012345"],
      [, , "80[1-4]\\d{5}", "\\d{8}", , , "80112345"],
      [, , "NA", "NA"],
      [, , "60[2-6]\\d{5}", "\\d{8}", , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)", "", 0],
        [, "(\\d{2})(\\d{6})", "$1 $2", ["[5-7]|9[1-9]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{5})",
          "$1 $2", ["[23]"], "(0$1)", "", 0
        ],
        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AO: [, [, , "[29]\\d{8}", "\\d{9}"],
      [, , "2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}", "\\d{9}", , , "222123456"],
      [, , "9[1-49]\\d{7}", "\\d{9}", , , "923123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "AO", 244, "00", , , , , , , , [
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AR: [, [, , "[1-368]\\d{9}|9\\d{10}", "\\d{6,11}"],
      [, , "11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}",
        "\\d{6,10}", , , "1123456789"
      ],
      [, , "675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})", "\\d{6,11}", , , "91123456789"],
      [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "60[04579]\\d{7}", "\\d{10}", , , "6001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[124-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:1[1568]|2[15]|3[145]|4[13]|5[14-8]|[069]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
      "9$1", , , [
        [, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1", "", 0],
        [, "(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], "0$1", "", 0],
        [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[234689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[014-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49])))"], "0$1", "", 0],
        [, "(9)(\\d{4})(\\d{3})(\\d{3})",
          "$2 15-$3-$4", ["93[58]", "9(?:3(?:53|8[78]))", "9(?:3(?:537|8(?:73|88)))"], "0$1", "", 0
        ],
        [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], "0$1", "", 0],
        [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[0-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49]))"], "0$1", "",
          1
        ],
        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2-$3", ["3(?:53|8[78])", "3(?:537|8(?:73|88))"], "0$1", "", 1],
        [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", "", 1],
        [, "(\\d{3})", "$1", ["1[012]|911"], "$1", "", 0]
      ],
      [
        [, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]", "[68]"], "0$1", "", 0],
        [, "(9)(11)(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["911"]],
        [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[234689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[014-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49])))"]],
        [, "(9)(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3-$4", ["93[58]", "9(?:3(?:53|8[78]))", "9(?:3(?:537|8(?:73|88)))"]],
        [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9[23]"]],
        [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1", "1"], "0$1", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[0-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49]))",
          "2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[0-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49]))"
        ], "0$1", "", 1],
        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2-$3", ["3(?:53|8[78])", "3(?:537|8(?:73|88))", "3(?:53|8[78])", "3(?:537|8(?:73|88))"], "0$1", "", 1],
        [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]", "[23]"], "0$1", "", 1]
      ],
      [, , "NA", "NA"], , , [, , "810\\d{7}", "\\d{10}", , , "8101234567"],
      [, , "810\\d{7}", "\\d{10}", , , "8101234567"], , , [, , "NA", "NA"]
    ],
    AS: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", "\\d{7}(?:\\d{3})?", , , "6846221234"],
      [, , "684(?:733|25[2468])\\d{4}", "\\d{10}", , , "6847331234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "AS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "684", [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ], , , [, , "NA", "NA"]
    ],
    AT: [, [, , "[1-9]\\d{3,12}", "\\d{3,13}"],
      [, , "1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}", "\\d{3,13}", , , "1234567890"],
      [, , "6(?:44|5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", "\\d{7,13}", , , "644123456"],
      [, , "80[02]\\d{6,10}", "\\d{9,13}", , , "800123456"],
      [, , "(?:711|9(?:0[01]|3[019]))\\d{6,10}", "\\d{9,13}", , , "900123456"],
      [, , "8(?:10|2[018])\\d{6,10}", "\\d{9,13}", , , "810123456"],
      [, , "NA", "NA"],
      [, , "780\\d{6,10}", "\\d{9,13}", , , "780123456"], "AT", 43, "00", "0", , , "0", , , , [
        [, "(1)(\\d{3,12})", "$1 $2", ["1"], "0$1", "", 0],
        [, "(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"], "0$1", "", 0],
        [, "(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"], "0$1", "", 0],
        [, "(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3,10})", "$1 $2", ["316|46|51|732|6(?:44|5[0-3579]|[6-9])|7(?:1|[28]0)|[89]"],
          "0$1", "", 0
        ],
        [, "(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-35-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}", "\\d{5,13}", , , "50123"], , , [, , "NA", "NA"]
    ],
    AU: [, [, , "[1-578]\\d{5,9}", "\\d{6,10}"],
      [, , "[237]\\d{8}|8(?:[68]\\d{3}|7[0-69]\\d{2}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}", "\\d{8,9}", , , "212345678"],
      [, , "14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-35-9]|6[6-9]|[79][07-9]|8[17-9])\\d{6}",
        "\\d{9}", , , "412345678"
      ],
      [, , "180(?:0\\d{3}|2)\\d{3}", "\\d{7,10}", , , "1800123456"],
      [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456"],
      [, , "13(?:00\\d{2})?\\d{4}", "\\d{6,10}", , , "1300123456"],
      [, , "500\\d{6}", "\\d{9}", , , "500123456"],
      [, , "550\\d{6}", "\\d{9}", , , "550123456"], "AU", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , [
        [, "([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]|14"], "0$1", "", 0],
        [, "(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1", "", 0],
        [, "(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[38]0|90)", "1(?:[38]00|90)"], "$1", "", 0],
        [, "(180)(2\\d{3})", "$1 $2", ["180", "1802"], "$1", "", 0],
        [, "(19\\d)(\\d{3})", "$1 $2", ["19[13]"], "$1", "", 0],
        [, "(19\\d{2})(\\d{4})", "$1 $2", ["19[67]"], "$1", "", 0],
        [, "(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"], "$1", "", 0]
      ], , [, , "16\\d{3,7}", "\\d{5,9}", , , "1612345"], 1, , [, , "1(?:3(?:\\d{4}|00\\d{6})|80(?:0\\d{6}|2\\d{3}))", "\\d{6,10}", , , "1300123456"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AW: [, [, , "[25-9]\\d{6}",
      "\\d{7}"
    ],
      [, , "5(?:2\\d|8[1-9])\\d{4}", "\\d{7}", , , "5212345"],
      [, , "(?:5(?:6\\d|9[2-478])|6(?:[039]0|22|4[01]|6[0-2])|7[34]\\d|9(?:6[45]|9[4-8]))\\d{4}", "\\d{7}", , , "5601234"],
      [, , "800\\d{4}", "\\d{7}", , , "8001234"],
      [, , "900\\d{4}", "\\d{7}", , , "9001234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "28\\d{5}|501\\d{4}", "\\d{7}", , , "5011234"], "AW", 297, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    AX: [, [, , "[135]\\d{5,9}|[27]\\d{4,9}|4\\d{5,10}|6\\d{7,8}|8\\d{6,9}",
      "\\d{5,12}"
    ],
      [, , "18[1-8]\\d{3,9}", "\\d{6,12}", , , "1812345678"],
      [, , "4\\d{5,10}|50\\d{4,8}", "\\d{6,11}", , , "412345678"],
      [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234567"],
      [, , "[67]00\\d{5,6}", "\\d{8,9}", , , "600123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "AX", 358, "00|99[049]", "0", , , "0", , , , , , [, , "NA", "NA"], , , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "100123"],
      [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
        "\\d{5,10}", , , "10112345"
      ], , , [, , "NA", "NA"]
    ],
    AZ: [, [, , "[1-9]\\d{8}", "\\d{7,9}"],
      [, , "(?:1[28]\\d|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])|365)\\d{6}", "\\d{7,9}", , , "123123456"],
      [, , "(?:4[04]|5[015]|60|7[07])\\d{7}", "\\d{9}", , , "401234567"],
      [, , "88\\d{7}", "\\d{9}", , , "881234567"],
      [, , "900200\\d{3}", "\\d{9}", , , "900200123"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "AZ", 994, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["(?:1[28]|2(?:[45]2|[0-36])|365)"], "(0$1)", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4", ["[4-8]"], "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BA: [, [, , "[3-9]\\d{7,8}", "\\d{6,9}"],
      [, , "(?:[35]\\d|49)\\d{6}", "\\d{6,8}", , , "30123456"],
      [, , "6(?:03|44|71|[1-356])\\d{6}", "\\d{8,9}", , , "61123456"],
      [, , "8[08]\\d{6}", "\\d{8}", , , "80123456"],
      [, , "9[0246]\\d{6}", "\\d{8}", , , "90123456"],
      [, , "8[12]\\d{6}", "\\d{8}", , , "82123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BA", 387, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{3})",
          "$1 $2-$3", ["[3-5]"], "0$1", "", 0
        ],
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1", "", 0],
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "70[23]\\d{5}", "\\d{8}", , , "70223456"], , , [, , "NA", "NA"]
    ],
    BB: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "246[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2462345678"],
      [, , "246(?:(?:2[346]|45|82)\\d|25[0-4])\\d{4}", "\\d{10}", , , "2462501234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "BB", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "246", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BD: [, [, , "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", "\\d{6,10}"],
      [, , "2(?:7(?:1[0-267]|2[0-289]|3[0-29]|[46][01]|5[1-3]|7[017]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|6[1-35]|7[1-5]|8[1-8])|9(?:0[0-2]|1[1-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[016-8]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}",
        "\\d{6,9}", , , "27111234"
      ],
      [, , "(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}", "\\d{10}", , , "1812345678"],
      [, , "80[03]\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "96(?:0[49]|1[0-4]|6[69])\\d{6}", "\\d{10}", , , "9604123456"], "BD", 880, "00[12]?", "0", , , "0", , "00", , [
        [, "(2)(\\d{7})", "$1-$2", ["2"], "0$1", "", 0],
        [, "(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"], "0$1", "", 0],
        [, "(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"],
          "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BE: [, [, , "[1-9]\\d{7,8}", "\\d{8,9}"],
      [, , "(?:1[0-69]|[49][23]|5\\d|6[013-57-9]|71|8[0-79])[1-9]\\d{5}|[23][2-8]\\d{6}", "\\d{8}", , , "12345678"],
      [, , "4(?:[679]\\d|8[03-9])\\d{6}", "\\d{9}", , , "470123456"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "(?:70[2-7]|90\\d)\\d{5}", "\\d{8}", , , "90123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BE", 32, "00", "0", , , "0", , , , [
        [, "(4[6-9]\\d)(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4", ["4[6-9]"], "0$1", "", 0
        ],
        [, "([2-49])(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|[49][23]"], "0$1", "", 0],
        [, "([15-8]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"], "0$1", "", 0],
        [, "([89]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "78\\d{6}", "\\d{8}", , , "78123456"], , , [, , "NA", "NA"]
    ],
    BF: [, [, , "[24-7]\\d{7}", "\\d{8}"],
      [, , "(?:20(?:49|5[23]|9[016-9])|40(?:4[56]|5[4-6]|7[0179])|50[34]\\d)\\d{4}", "\\d{8}", , , "20491234"],
      [, , "6(?:[0-24-6]\\d|8[0-8]|3[0-3])\\d{5}|7\\d{7}", "\\d{8}", , , "70123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BF", 226, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BG: [, [, , "[23567]\\d{5,7}|[489]\\d{6,8}", "\\d{5,9}"],
      [, , "2(?:[0-8]\\d{5,6}|9\\d{4,6})|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}", "\\d{5,8}", , , "2123456"],
      [, , "(?:8[7-9]|98)\\d{7}|4(?:3[0789]|8\\d)\\d{5}",
        "\\d{8,9}", , , "48123456"
      ],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "90\\d{6}", "\\d{8}", , , "90123456"],
      [, , "NA", "NA"],
      [, , "700\\d{5}", "\\d{5,9}", , , "70012345"],
      [, , "NA", "NA"], "BG", 359, "00", "0", , , "0", , , , [
        [, "(2)(\\d{5})", "$1 $2", ["29"], "0$1", "", 0],
        [, "(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1", "", 0],
        [, "(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{2,3})",
          "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1", "", 0
        ],
        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BH: [, [, , "[136-9]\\d{7}", "\\d{8}"],
      [, , "(?:1(?:3[13-6]|6[0156]|7\\d)\\d|6(?:1[16]\\d|6(?:0\\d|3[12]|44|88)|9(?:6[69]|9[6-9]))|7(?:7\\d{2}|178))\\d{4}", "\\d{8}", , , "17001234"],
      [, , "(?:3(?:[1-4679]\\d|5[0135]|8[348])\\d|6(?:1[16]\\d|3(?:00|33|6[16])|500|6(?:[069]\\d|3[03-9]|44|88)|9(?:6[69]|9[6-9]))|77\\d{2})\\d{4}",
        "\\d{8}", , , "36001234"
      ],
      [, , "80\\d{6}", "\\d{8}", , , "80123456"],
      [, , "(?:87|9[014578])\\d{6}", "\\d{8}", , , "90123456"],
      [, , "84\\d{6}", "\\d{8}", , , "84123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BH", 973, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BI: [, [, , "[27]\\d{7}", "\\d{8}"],
      [, , "22(?:2[0-7]|[3-5]0)\\d{4}", "\\d{8}", , , "22201234"],
      [, , "(?:29|7[14-9])\\d{6}", "\\d{8}", , , "79561234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      "BI", 257, "00", , , , , , , , [
        [, "([27]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BJ: [, [, , "[2689]\\d{7}|7\\d{3}", "\\d{4,8}"],
      [, , "2(?:02|1[037]|2[45]|3[68])\\d{5}", "\\d{8}", , , "20211234"],
      [, , "(?:6[46-8]|9[03-9])\\d{6}", "\\d{8}", , , "90011234"],
      [, , "7[3-5]\\d{2}", "\\d{4}", , , "7312"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "857[58]\\d{4}", "\\d{8}", , , "85751234"], "BJ", 229, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "",
          "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "81\\d{6}", "\\d{8}", , , "81123456"], , , [, , "NA", "NA"]
    ],
    BL: [, [, , "[56]\\d{8}", "\\d{9}"],
      [, , "590(?:2[7-9]|5[12]|87)\\d{4}", "\\d{9}", , , "590271234"],
      [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BL", 590, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BM: [, [, , "[4589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}",
        "\\d{7}(?:\\d{3})?", , , "4412345678"
      ],
      [, , "441(?:[37]\\d|5[0-39])\\d{5}", "\\d{10}", , , "4413701234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "BM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "441", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BN: [, [, , "[2-578]\\d{6}", "\\d{7}"],
      [, , "[2-5]\\d{6}", "\\d{7}", , , "2345678"],
      [, , "[78]\\d{6}", "\\d{7}", , , "7123456"],
      [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BN", 673, "00", , , , , , , , [
        [, "([2-578]\\d{2})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BO: [, [, , "[23467]\\d{7}", "\\d{7,8}"],
      [, , "(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}", "\\d{7,8}", , , "22123456"],
      [, , "[67]\\d{7}", "\\d{8}", , ,
        "71234567"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BO", 591, "00(1\\d)?", "0", , , "0(1\\d)?", , , , [
        [, "([234])(\\d{7})", "$1 $2", ["[234]"], "", "0$CC $1", 0],
        [, "([67]\\d{7})", "$1", ["[67]"], "", "0$CC $1", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BQ: [, [, , "[347]\\d{6}", "\\d{7}"],
      [, , "(?:318[023]|416[0239]|7(?:1[578]|50)\\d)\\d{3}", "\\d{7}", , , "7151234"],
      [, , "(?:318[1456]|416[15-8]|7(?:0[01]|[89]\\d)\\d)\\d{3}|", "\\d{7}", , , "3181234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BQ", 599, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BR: [, [, , "[1-46-9]\\d{7,10}|5\\d{8,9}", "\\d{8,11}"],
      [, , "1[1-9][2-5]\\d{7}|(?:[4689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", "\\d{8,11}", , , "1123456789"],
      [, , "1(?:1(?:5[347]|[6-9]\\d)|[2-9][6-9]\\d)\\d{6}|(?:2[12478]|3[1-578]|[4689][1-9]|5[13-5]|7[13-579])[6-9]\\d{7}|(?:1(?:19\\d|[2-9]9[6-9])|2[12478]9[6-9])\\d{7}", "\\d{10,11}", , , "1161234567"],
      [, , "800\\d{6,7}", "\\d{8,11}", , , "800123456"],
      [, , "[359]00\\d{6,7}", "\\d{8,11}", , , "300123456"],
      [, , "[34]00\\d{5}", "\\d{8}", , , "40041234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BR", 55, "00(?:1[45]|2[135]|[34]1|43)", "0", , , "0(?:(1[245]|2[135]|[34]1)(\\d{10,11}))?", "$2", , , [
        [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9](?:[1-9]|0[1-9])"], "$1", "", 0],
        [, "(\\d{5})(\\d{4})", "$1-$2", ["9(?:[1-9]|0[1-9])"], "$1", "", 0],
        [, "(\\d{3,5})", "$1", ["1[125689]"], "$1", "", 0],
        [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:1[1-9]|2[12478])9"], "($1)", "0 $CC ($1)", 0],
        [, "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)", 0
        ],
        [, "([34]00\\d)(\\d{4})", "$1-$2", ["[34]00"], "", "", 0],
        [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1", "", 0]
      ],
      [
        [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:1[1-9]|2[12478])9", "(?:1[1-9]|2[12478])9"], "($1)", "0 $CC ($1)", 0],
        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]", "[1-9][1-9]"], "($1)", "0 $CC ($1)", 0],
        [, "([34]00\\d)(\\d{4})", "$1-$2", ["[34]00", "[34]00"], "", "", 0],
        [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00", "[3589]00"],
          "0$1", "", 0
        ]
      ],
      [, , "NA", "NA"], , , [, , "[34]00\\d{5}", "\\d{8}", , , "40041234"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BS: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:12|7[67]|8[78]|9[89])|702)\\d{4}", "\\d{7}(?:\\d{3})?", , , "2423456789"],
      [, , "242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|727)\\d{4}", "\\d{10}", , , "2423591234"],
      [, , "242300\\d{4}|8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "BS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "242", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BT: [, [, , "[1-8]\\d{6,7}", "\\d{6,8}"],
      [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", "\\d{6,7}", , , "2345678"],
      [, , "[17]7\\d{6}", "\\d{8}", , , "17123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BT", 975, "00", , , , , , , , [
        [, "([17]7)(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4", ["1|77"], "", "", 0
        ],
        [, "([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BW: [, [, , "[2-79]\\d{6,7}", "\\d{7,8}"],
      [, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0235-9]|55|6\\d|7[01]|9[0-57])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", "\\d{7}", , , "2401234"],
      [, , "7(?:[1-35]\\d{6}|[46][0-7]\\d{5}|7[0146]\\d{5})", "\\d{8}", , , "71123456"],
      [, , "NA", "NA"],
      [, , "90\\d{5}", "\\d{7}", , , "9012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "79[12][01]\\d{4}", "\\d{8}", , , "79101234"], "BW", 267, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"], "", "", 0],
        [, "(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "", "", 0],
        [, "(90)(\\d{5})", "$1 $2", ["9"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BY: [, [, , "[1-4]\\d{8}|[89]\\d{9,10}", "\\d{7,11}"],
      [, , "(?:1(?:5(?:1[1-5]|2\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:2\\d|3[02-79]|4[024-7]|5[0-7])))\\d{5}",
        "\\d{7,9}", , , "152450911"
      ],
      [, , "(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}", "\\d{9}", , , "294911911"],
      [, , "8(?:0[13]|20\\d)\\d{7}", "\\d{10,11}", , , "8011234567"],
      [, , "(?:810|902)\\d{7}", "\\d{10}", , , "9021234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BY", 375, "810", "8", , , "8?0?", , "8~10", , [
        [, "([1-4]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-4]"], "8 0$1", "", 0],
        [, "([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1", "", 0],
        [, "(8\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "8(?:[01]|20)\\d{8}|902\\d{7}",
        "\\d{10,11}", , , "82012345678"
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    BZ: [, [, , "[2-8]\\d{6}|0\\d{10}", "\\d{7}(?:\\d{4})?"],
      [, , "[234578][02]\\d{5}", "\\d{7}", , , "2221234"],
      [, , "6[0-367]\\d{5}", "\\d{7}", , , "6221234"],
      [, , "0800\\d{7}", "\\d{11}", , , "08001234123"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "BZ", 501, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"], "", "", 0],
        [, "(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    CA: [, [, , "[2-9]\\d{9}|3\\d{6}",
      "\\d{7}(?:\\d{3})?"
    ],
      [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|79|8[17])|6(?:0[04]|13|39|47)|7(?:0[59]|78|80)|8(?:[06]7|19|73)|90[25])[2-9]\\d{6}|310\\d{4}", "\\d{7}(?:\\d{3})?", , , "2042345678"],
      [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|79|8[17])|6(?:0[04]|13|39|47)|7(?:0[59]|78|80)|8(?:[06]7|19|73)|90[25])[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2042345678"],
      [, , "8(?:00|66|77|88)[2-9]\\d{6}|310\\d{4}", "\\d{7}(?:\\d{3})?", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "CA", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CC: [, [, , "[1458]\\d{5,9}", "\\d{6,10}"],
      [, , "89162\\d{4}", "\\d{8,9}", , , "891621234"],
      [, , "4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-37-9]|6[6-9]|7[07-9]|8[7-9])\\d{6}", "\\d{9}", , , "412345678"],
      [, , "1(?:80(?:0\\d{2})?|3(?:00\\d{2})?)\\d{4}", "\\d{6,10}", , , "1800123456"],
      [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456"],
      [, , "NA", "NA"],
      [, , "500\\d{6}", "\\d{9}", , , "500123456"],
      [, , "550\\d{6}", "\\d{9}", , , "550123456"], "CC", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CD: [, [, , "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", "\\d{7,9}"],
      [, , "1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}", "\\d{7,9}", , , "1234567"],
      [, , "8(?:[0-2459]\\d{2}|8)\\d{5}|9[7-9]\\d{7}", "\\d{7,9}", , , "991234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ], "CD", 243, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"], "0$1", "", 0],
        [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"], "0$1", "", 0],
        [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1", "", 0],
        [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CF: [, [, , "[278]\\d{7}", "\\d{8}"],
      [, , "2[12]\\d{6}", "\\d{8}", , , "21612345"],
      [, , "7[0257]\\d{6}", "\\d{8}", , , "70012345"],
      [, , "NA", "NA"],
      [, , "8776\\d{4}", "\\d{8}", , , "87761234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CF", 236, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CG: [, [, , "[028]\\d{8}", "\\d{9}"],
      [, , "222[1-589]\\d{5}", "\\d{9}", , , "222123456"],
      [, , "0[14-6]\\d{7}", "\\d{9}", , , "061234567"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CG", 242, "00", , , , , , , , [
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"], "", "", 0],
        [, "(\\d)(\\d{4})(\\d{4})",
          "$1 $2 $3", ["8"], "", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    CH: [, [, , "[2-9]\\d{8}|860\\d{9}", "\\d{9}(?:\\d{3})?"],
      [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", "\\d{9}", , , "212345678"],
      [, , "7[5-9]\\d{7}", "\\d{9}", , , "781234567"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "90[016]\\d{6}", "\\d{9}", , , "900123456"],
      [, , "84[0248]\\d{6}", "\\d{9}", , , "840123456"],
      [, , "878\\d{6}", "\\d{9}", , , "878123456"],
      [, , "NA", "NA"], "CH", 41, "00", "0", , , "0", , , , [
        [, "([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4", ["[2-7]|[89]1"], "0$1", "", 0
        ],
        [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"], "0$1", "", 0]
      ], , [, , "74[0248]\\d{6}", "\\d{9}", , , "740123456"], , , [, , "NA", "NA"],
      [, , "5[18]\\d{7}", "\\d{9}", , , "581234567"], , , [, , "860\\d{9}", "\\d{12}", , , "860123456789"]
    ],
    CI: [, [, , "[02-6]\\d{7}", "\\d{8}"],
      [, , "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", "\\d{8}", , , "21234567"],
      [, , "(?:0[1-9]|4[0-24-9]|5[05-9]|6[015679])\\d{6}",
        "\\d{8}", , , "01234567"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CI", 225, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    CK: [, [, , "[2-57]\\d{4}", "\\d{5}"],
      [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", "\\d{5}", , , "21234"],
      [, , "(?:5[0-68]|7\\d)\\d{3}", "\\d{5}", , , "71234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CK", 682, "00", , , , , , , , [
        [, "(\\d{2})(\\d{3})", "$1 $2", , "",
          "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CL: [, [, , "(?:[2-9]|600|123)\\d{7,8}", "\\d{6,11}"],
      [, , "(?:[23]2|41|58)\\d{7}|(?:3[3-5]|4[235]|5[1-357]|6[13-57]|7[1-35])\\d{6,7}", "\\d{6,9}", , , "221234567"],
      [, , "9[5-9]\\d{7}", "\\d{8,9}", , , "961234567"],
      [, , "800\\d{6}|1230\\d{7}", "\\d{9,11}", , , "800123456"],
      [, , "NA", "NA"],
      [, , "600\\d{7,8}", "\\d{10,11}", , , "6001234567"],
      [, , "NA", "NA"],
      [, , "44\\d{7}", "\\d{9}", , , "441234567"], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "0", , , "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))", , , , [
        [, "(2)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2"], "($1)", "$CC ($1)", 0],
        [, "(\\d{2})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)", 0],
        [, "(9)([5-9]\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1", "", 0],
        [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1", "", 0],
        [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"], "$1", "", 0],
        [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"], "$1", "", 0],
        [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "$1",
          "", 0
        ],
        [, "(\\d{4,5})", "$1", ["[1-9]"], "$1", "", 0]
      ],
      [
        [, "(2)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2", "2"], "($1)", "$CC ($1)", 0],
        [, "(\\d{2})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]", "[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)", 0],
        [, "(9)([5-9]\\d{3})(\\d{4})", "$1 $2 $3", ["9", "9"], "0$1", "", 0],
        [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44", "44"], "0$1", "", 0],
        [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8", "60|8"], "$1", "", 0],
        [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60", "60"], "$1", "", 0],
        [, "(1230)(\\d{3})(\\d{4})",
          "$1 $2 $3", ["1", "1"], "$1", "", 0
        ]
      ],
      [, , "NA", "NA"], , , [, , "600\\d{7,8}", "\\d{10,11}", , , "6001234567"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CM: [, [, , "[2357-9]\\d{7}", "\\d{8}"],
      [, , "(?:22|33)\\d{6}", "\\d{8}", , , "22123456"],
      [, , "[579]\\d{7}", "\\d{8}", , , "71234567"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "88\\d{6}", "\\d{8}", , , "88012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CM", 237, "00", , , , , , , , [
        [, "([2357-9]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23579]|88"], "", "", 0],
        [, "(800)(\\d{2})(\\d{3})", "$1 $2 $3", ["80"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CN: [, [, , "1(?:00\\d{2}|\\d{6,11})|[2-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9(?:5\\d{3,4}|\\d{9})", "\\d{4,12}"],
      [, , "21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}",
        "\\d{4,12}", , , "1012345678"
      ],
      [, , "1(?:3\\d|4[57]|[58][0-35-9])\\d{8}", "\\d{11}", , , "13123456789"],
      [, , "(?:10)?800\\d{7}", "\\d{10,12}", , , "8001234567"],
      [, , "16[08]\\d{5}", "\\d{8}", , , "16812345"],
      [, , "400\\d{7}|95\\d{3,4}", "\\d{5,10}", , , "4001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CN", 86, "(1[1279]\\d{3})?00", "0", , , "(1[1279]\\d{3})|0", , "00", , [
        [, "(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]"], "0$1", "$CC $1", 1],
        [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"], "", "", 0],
        [, "(\\d{5,6})", "$1", ["100|95"], "", "", 0],
        [, "(\\d{2})(\\d{5,6})",
          "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|95)", "(?:10|2\\d)(?:100|95)"], "0$1", "$CC $1", 0
        ],
        [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d{2}[19]", "[3-9]\\d{2}(?:10|95)"], "0$1", "$CC $1", 0],
        [, "(\\d{3,4})(\\d{4})", "$1 $2", ["[2-9]"], "", "", 0],
        [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
        [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98)"],
          "0$1", "$CC $1", 1
        ],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
        [, "(1[3-58]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-58]"], "", "$CC $1", 0],
        [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108",
          "1080", "10800"
        ], "", "", 0]
      ],
      [
        [, "(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]", "80[2678]"], "0$1", "$CC $1", 1],
        [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00", "[48]00"], "", "", 0],
        [, "(\\d{2})(\\d{5,6})", "$1 $2", "(?:10|2\\d)[19] (?:10|2\\d)(?:10|95) (?:10|2\\d)(?:100|95) (?:10|2\\d)[19] (?:10|2\\d)(?:10|95) (?:10|2\\d)(?:100|95)".split(" "), "0$1", "$CC $1", 0],
        [, "(\\d{3})(\\d{5,6})", "$1 $2", "[3-9] [3-9]\\d{2}[19] [3-9]\\d{2}(?:10|95) [3-9] [3-9]\\d{2}[19] [3-9]\\d{2}(?:10|95)".split(" "), "0$1", "$CC $1", 0],
        [, "(21)(\\d{4})(\\d{4,6})",
          "$1 $2 $3", ["21", "21"], "0$1", "$CC $1", 1
        ],
        [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", "10[1-9]|2[02-9] 10[1-9]|2[02-9] 10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9] 10[1-9]|2[02-9] 10[1-9]|2[02-9] 10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]".split(" "), "0$1", "$CC $1", 1],
        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98)", "3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98)"],
          "0$1", "$CC $1", 1
        ],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])", "3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
          "0$1", "$CC $1", 1
        ],
        [, "(1[3-58]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-58]", "1[3-58]"], "", "$CC $1", 0],
        [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", "108 1080 10800 108 1080 10800".split(" "), "", "", 0]
      ],
      [, , "NA", "NA"], , , [, , "100\\d{2}|(?:4|(?:10)?8)00\\d{7}|95\\d{3,4}", "\\d{5,12}", , , "4001234567"],
      [, , "100\\d{2}", "\\d{5}", , , "10000"], , , [, , "NA", "NA"]
    ],
    CO: [, [, , "(?:[13]\\d{0,3}|[24-8])\\d{7}", "\\d{7,11}"],
      [, , "[124-8][2-9]\\d{6}", "\\d{8}", , , "12345678"],
      [, , "3(?:0[0-24]|1\\d|2[01])\\d{7}", "\\d{10}", , , "3211234567"],
      [, , "1800\\d{7}",
        "\\d{11}", , , "18001234567"
      ],
      [, , "19(?:0[01]|4[78])\\d{7}", "\\d{11}", , , "19001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:44|56))?", , , , [
        [, "(\\d)(\\d{7})", "$1 $2", ["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]", "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"], "($1)", "0$CC $1", 0],
        [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "", "0$CC $1", 0],
        [, "(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1", "", 0]
      ],
      [
        [, "(\\d)(\\d{7})", "$1 $2", ["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]",
          "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]", "1(?:8[2-9]|9[0-3]|[2-7])|[24-8]", "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"
        ], "($1)", "0$CC $1", 0],
        [, "(\\d{3})(\\d{7})", "$1 $2", ["3", "3"], "", "0$CC $1", 0],
        [, "(1)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"]]
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CR: [, [, , "[24-9]\\d{7,9}", "\\d{8,10}"],
      [, , "2[24-7]\\d{6}", "\\d{8}", , , "22123456"],
      [, , "5(?:0[0-4]|7[01])\\d{5}|[67][0-2]\\d{6}|8[3-9]\\d{6}", "\\d{8}", , , "83123456"],
      [, , "800\\d{7}",
        "\\d{10}", , , "8001234567"
      ],
      [, , "90[059]\\d{7}", "\\d{10}", , , "9001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "210[0-6]\\d{4}|4(?:0(?:[04]0\\d{4}|10[0-3]\\d{3}|2900\\d{2}|3[01]\\d{4}|5\\d{5}|70[01]\\d{3}|8[0-2]\\d{4})|1[01]\\d{5}|20[0-3]\\d{4}|400\\d{4}|70[0-2]\\d{4})|5100\\d{4}", "\\d{8}", , , "40001234"], "CR", 506, "00", , , , "(19(?:0[01468]|19|20|66|77))", , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], "", "$CC $1", 0],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"], "", "$CC $1", 0]
      ], , [, , "NA", "NA"], , , [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CU: [, [, , "[2-57]\\d{5,7}", "\\d{4,8}"],
      [, , "2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}", "\\d{4,8}", , , "71234567"],
      [, , "5\\d{7}", "\\d{8}", , , "51234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CU", 53, "119", "0", , , "0", , , , [
        [, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)", "", 0],
        [, "(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)", "", 0],
        [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CV: [, [, , "[259]\\d{6}", "\\d{7}"],
      [, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", "\\d{7}", , , "2211234"],
      [, , "(?:9\\d|59)\\d{5}", "\\d{7}", , , "9911234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CV", 238, "0", , , , , , , , [
        [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CW: [, [, , "[169]\\d{6,7}", "\\d{7,8}"],
      [, , "9(?:[48]\\d{2}|50\\d|7(?:2[0-2]|[34]\\d|6[35-7]|77))\\d{4}",
        "\\d{7,8}", , , "94151234"
      ],
      [, , "9(?:5(?:[1246]\\d|3[01])|6(?:[1679]\\d|3[01]))\\d{4}", "\\d{7,8}", , , "95181234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "(?:10|69)\\d{5}", "\\d{7}", , , "1011234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "CW", 599, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"], "", "", 0],
        [, "(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "", "", 0]
      ], , [, , "955\\d{5}", "\\d{7,8}", , , "95581234"], 1, , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CX: [, [, , "[1458]\\d{5,9}", "\\d{6,10}"],
      [, , "89164\\d{4}", "\\d{8,9}", , , "891641234"],
      [, , "4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-37-9]|6[6-9]|7[07-9]|8[7-9])\\d{6}", "\\d{9}", , , "412345678"],
      [, , "1(?:80(?:0\\d{2})?|3(?:00\\d{2})?)\\d{4}", "\\d{6,10}", , , "1800123456"],
      [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456"],
      [, , "NA", "NA"],
      [, , "500\\d{6}", "\\d{9}", , , "500123456"],
      [, , "550\\d{6}", "\\d{9}", , , "550123456"], "CX", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    CY: [, [, , "[257-9]\\d{7}", "\\d{8}"],
      [, , "2[2-6]\\d{6}",
        "\\d{8}", , , "22345678"
      ],
      [, , "9[5-79]\\d{6}", "\\d{8}", , , "96123456"],
      [, , "800\\d{5}", "\\d{8}", , , "80001234"],
      [, , "90[09]\\d{5}", "\\d{8}", , , "90012345"],
      [, , "80[1-9]\\d{5}", "\\d{8}", , , "80112345"],
      [, , "700\\d{5}", "\\d{8}", , , "70012345"],
      [, , "NA", "NA"], "CY", 357, "00", , , , , , , , [
        [, "(\\d{2})(\\d{6})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "(?:50|77)\\d{6}", "\\d{8}", , , "77123456"], , , [, , "NA", "NA"]
    ],
    CZ: [, [, , "[2-8]\\d{8}|9\\d{8,11}", "\\d{9,12}"],
      [, , "2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}", "\\d{9,12}", , ,
        "212345678"
      ],
      [, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", "\\d{9,12}", , , "601123456"],
      [, , "800\\d{6}", "\\d{9,12}", , , "800123456"],
      [, , "9(?:0[05689]|76)\\d{6}", "\\d{9,12}", , , "900123456"],
      [, , "8[134]\\d{7}", "\\d{9,12}", , , "811234567"],
      [, , "70[01]\\d{6}", "\\d{9,12}", , , "700123456"],
      [, , "9[17]0\\d{6}", "\\d{9,12}", , , "910123456"], "CZ", 420, "00", , , , , , , , [
        [, "([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"], "", "", 0],
        [, "(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"], "", "", 0],
        [, "(9\\d)(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3 $4", ["9[36]"], "", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "9(?:5\\d|7[234])\\d{6}", "\\d{9,12}", , , "972123456"], , , [, , "9(?:3\\d{9}|6\\d{7,10})", "\\d{9,12}", , , "93123456789"]
    ],
    DE: [, [, , "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,7})", "\\d{2,15}"],
      [, , "[246]\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-9]\\d)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})",
        "\\d{2,15}", , , "30123456"
      ],
      [, , "1(?:5[0-2579]\\d{8}|6[023]\\d{7,8}|7(?:[0-57-9]\\d?|6\\d)\\d{7})", "\\d{10,11}", , , "15123456789"],
      [, , "800\\d{7,12}", "\\d{10,15}", , , "8001234567890"],
      [, , "900(?:[135]\\d{6}|9\\d{7})", "\\d{10,11}", , , "9001234567"],
      [, , "180\\d{5,11}", "\\d{8,14}", , , "18012345"],
      [, , "700\\d{8}", "\\d{11}", , , "70012345678"],
      [, , "NA", "NA"], "DE", 49, "00", "0", , , "0", , , , [
        [, "(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1", "", 0],
        [, "(1\\d{3})(\\d{7})", "$1 $2", ["15"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"],
          "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"], "0$1", "", 0],
        [, "(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])", "[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"],
          "0$1", "", 0
        ],
        [, "(3\\d{4})(\\d{1,10})", "$1 $2", ["3"], "0$1", "", 0],
        [, "(800)(\\d{7,12})", "$1 $2", ["800"], "0$1", "", 0],
        [, "(177)(99)(\\d{7,8})", "$1 $2 $3", ["177", "1779", "17799"], "0$1", "", 0],
        [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["(?:18|90)0", "180|900[1359]"], "0$1", "", 0],
        [, "(1\\d{2})(\\d{5,11})", "$1 $2", ["181"], "0$1", "", 0],
        [, "(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1", "", 0],
        [, "(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"], "0$1", "", 0],
        [, "(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"], "0$1", "", 0],
        [, "(700)(\\d{4})(\\d{4})",
          "$1 $2 $3", ["700"], "0$1", "", 0
        ]
      ], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", "\\d{4,14}", , , "16412345"], , , [, , "NA", "NA"],
      [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", "\\d{8,14}", , , "18500123456"], , , [, , "17799\\d{7,8}", "\\d{12,13}", , , "177991234567"]
    ],
    DJ: [, [, , "[27]\\d{7}", "\\d{8}"],
      [, , "2(?:1[2-5]|7[45])\\d{5}", "\\d{8}", , , "21360003"],
      [, , "77[6-8]\\d{5}", "\\d{8}", , , "77831001"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "DJ", 253, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "",
          0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    DK: [, [, , "[2-9]\\d{7}", "\\d{8}"],
      [, , "(?:[2-7]\\d|8[126-9]|9[126-9])\\d{6}", "\\d{8}", , , "32123456"],
      [, , "(?:[2-7]\\d|8[126-9]|9[126-9])\\d{6}", "\\d{8}", , , "20123456"],
      [, , "80\\d{6}", "\\d{8}", , , "80123456"],
      [, , "90\\d{6}", "\\d{8}", , , "90123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "DK", 45, "00", , , , , , , 1, [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    DM: [, [, , "[57-9]\\d{9}",
      "\\d{7}(?:\\d{3})?"
    ],
      [, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7674201234"],
      [, , "767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}", "\\d{10}", , , "7672251234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "DM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "767", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    DO: [, [, , "[589]\\d{9}",
      "\\d{7}(?:\\d{3})?"
    ],
      [, , "8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})", "\\d{7}(?:\\d{3})?", , , "8092345678"],
      [, , "8[024]9[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "8092345678"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}",
        "\\d{10}", , , "8002123456"
      ],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "DO", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "8[024]9", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    DZ: [, [, , "(?:[1-4]|[5-9]\\d)\\d{7}", "\\d{8,9}"],
      [, , "(?:1\\d|2[014-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}", "\\d{8,9}", , , "12345678"],
      [, , "(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|70)\\d{6}", "\\d{9}", , , "551234567"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "80[3-689]1\\d{5}", "\\d{9}", , , "808123456"],
      [, , "80[12]1\\d{5}", "\\d{9}", , , "801123456"],
      [, , "NA", "NA"],
      [, , "98[23]\\d{6}", "\\d{9}", , , "983123456"], "DZ", 213, "00", "0", , , "0", , , , [
        [, "([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1", "", 0],
        [, "([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1", "", 0],
        [, "(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    EC: [, [, , "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", "\\d{7,11}"],
      [, , "[2-7][2-7]\\d{6}", "\\d{7,8}", , , "22123456"],
      [, , "9(?:39|[4-6][89]|7[7-9]|[89]\\d)\\d{6}", "\\d{9}", , , "991234567"],
      [, , "1800\\d{6,7}", "\\d{10,11}", , , "18001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "[2-7]890\\d{4}", "\\d{8}", , , "28901234"], "EC", 593, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], "(0$1)", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1", "", 0],
        [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"], "$1", "", 0]
      ],
      [
        [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[247]|[356][2-8]"]],
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9", "9"], "0$1", "", 0],
        [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1", "1"], "$1", "", 0]
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    EE: [, [, , "1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}", "\\d{4,10}"],
      [, , "(?:3[23589]|4(?:0\\d|[3-8])|6\\d|7[1-9]|88)\\d{5}", "\\d{7,8}", , , "3212345"],
      [, , "(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}", "\\d{7,8}", , , "51234567"],
      [, , "800(?:0\\d{3}|1\\d|[2-9])\\d{3}",
        "\\d{7,10}", , , "80012345"
      ],
      [, , "900\\d{4}", "\\d{7}", , , "9001234"],
      [, , "NA", "NA"],
      [, , "70[0-2]\\d{5}", "\\d{8}", , , "70012345"],
      [, , "NA", "NA"], "EE", 372, "00", , , , , , , , [
        [, "([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"], "", "", 0],
        [, "(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"], "", "", 0],
        [, "(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"], "", "", 0],
        [, "([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"],
          "", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "1\\d{3,4}|800[2-9]\\d{3}", "\\d{4,7}", , , "8002123"],
      [, , "1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}", "\\d{4,5}", , , "12123"], , , [, , "NA", "NA"]
    ],
    EG: [, [, , "1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}", "\\d{5,10}"],
      [, , "(?:1(3[23]\\d|5[23])|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}", "\\d{5,9}", , , "234567890"],
      [, , "1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}", "\\d{10}", , , "1001234567"],
      [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "EG", 20, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[012]|[89]00"], "0$1", "", 0],
        [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1(?:3|5[23])|[4-6]|[89][2-9]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    EH: [, [, , "[5689]\\d{8}",
      "\\d{9}"
    ],
      [, , "528[89]\\d{5}", "\\d{9}", , , "528812345"],
      [, , "6(?:0[0-8]|[124-7]\\d|3[03-8]|8[01]|99)\\d{6}", "\\d{9}", , , "650123456"],
      [, , "80\\d{7}", "\\d{9}", , , "801234567"],
      [, , "89\\d{7}", "\\d{9}", , , "891234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "EH", 212, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , "528[89]", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    ER: [, [, , "[178]\\d{6}", "\\d{6,7}"],
      [, , "1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}", "\\d{6,7}", , , "8370362"],
      [, , "17[1-3]\\d{4}|7\\d{6}", "\\d{7}", , , "7123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "ER", 291, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    ES: [, [, , "[5-9]\\d{8}", "\\d{9}"],
      [, , "8(?:[13]0|[28][0-8]|[47][1-9]|5[01346-9]|6[0457-9])\\d{6}|9(?:[1238][0-8]\\d{6}|4[1-9]\\d{6}|5\\d{7}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})", "\\d{9}", , , "810123456"],
      [, , "(?:6\\d{6}|7[1-4]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}", "\\d{9}", , , "612345678"],
      [, , "[89]00\\d{6}", "\\d{9}", , , "800123456"],
      [, , "80[367]\\d{6}", "\\d{9}", , , "803123456"],
      [, , "90[12]\\d{6}", "\\d{9}", , , "901123456"],
      [, , "70\\d{7}", "\\d{9}", , , "701234567"],
      [, , "NA", "NA"], "ES", 34, "00", , , , , , , , [
        [, "([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "51\\d{7}", "\\d{9}", , , "511234567"], , , [, , "NA", "NA"]
    ],
    ET: [, [, , "[1-59]\\d{8}", "\\d{7,9}"],
      [, , "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[57]|44|5[0-4])|6(?:18|2[69]|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
        "\\d{7,9}", , , "111112345"
      ],
      [, , "9(?:[1-3]\\d|5[89])\\d{6}", "\\d{9}", , , "911234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "ET", 251, "00", "0", , , "0", , , , [
        [, "([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    FI: [, [, , "1\\d{4,11}|[2-9]\\d{4,10}", "\\d{5,12}"],
      [, , "1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", "\\d{5,12}", , , "1312345678"],
      [, , "4\\d{5,10}|50\\d{4,8}",
        "\\d{6,11}", , , "412345678"
      ],
      [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234567"],
      [, , "[67]00\\d{5,6}", "\\d{8,9}", , , "600123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "FI", 358, "00|99[049]", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]00|[6-8]0)"], "0$1", "", 0],
        [, "(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1", "", 0],
        [, "(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"], "0$1", "", 0]
      ], , [, , "NA", "NA"], 1, , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
        "\\d{5,10}", , , "100123"
      ],
      [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "10112345"], , , [, , "NA", "NA"]
    ],
    FJ: [, [, , "[36-9]\\d{6}|0\\d{10}", "\\d{7}(?:\\d{4})?"],
      [, , "(?:3[0-5]|6[25-7]|8[58])\\d{5}", "\\d{7}", , , "3212345"],
      [, , "(?:7[0-467]|8[3467]|9\\d)\\d{5}", "\\d{7}", , , "7012345"],
      [, , "0800\\d{7}", "\\d{11}", , , "08001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "FJ", 679, "0(?:0|52)", , , , , , "00", , [
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[36-9]"], "", "", 0],
        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    FK: [, [, , "[2-7]\\d{4}", "\\d{5}"],
      [, , "[2-47]\\d{4}", "\\d{5}", , , "31234"],
      [, , "[56]\\d{4}", "\\d{5}", , , "51234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "FK", 500, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    FM: [, [, , "[39]\\d{6}", "\\d{7}"],
      [, , "3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}", "\\d{7}", , , "3201234"],
      [, , "3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}", "\\d{7}", , , "3501234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "FM", 691, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    FO: [, [, , "[2-9]\\d{5}", "\\d{6}"],
      [, , "(?:20|[3-4]\\d|8[19])\\d{4}", "\\d{6}", , , "201234"],
      [, , "(?:2[1-9]|5\\d|7[1-79])\\d{4}", "\\d{6}", , , "211234"],
      [, , "80[257-9]\\d{3}", "\\d{6}", , , "802123"],
      [, , "90(?:[1345][15-7]|2[125-7]|99)\\d{2}", "\\d{6}", , , "901123"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "(?:6[0-36]|88)\\d{4}", "\\d{6}", , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [
        [, "(\\d{6})", "$1", , "", "$CC $1", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    FR: [, [, , "[1-9]\\d{8}", "\\d{9}"],
      [, , "[1-5]\\d{8}", "\\d{9}", , , "123456789"],
      [, , "6\\d{8}|7[5-9]\\d{7}", "\\d{9}", , , "612345678"],
      [, , "80\\d{7}", "\\d{9}", , , "801234567"],
      [, , "89[1-37-9]\\d{6}", "\\d{9}", , , "891123456"],
      [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", "\\d{9}", , , "810123456"],
      [, , "NA",
        "NA"
      ],
      [, , "9\\d{8}", "\\d{9}", , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [
        [, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1", "", 0],
        [, "(1\\d{2})(\\d{3})", "$1 $2", ["11"], "$1", "", 0],
        [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1", "", 0]
      ],
      [
        [, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]", "[1-79]"], "0$1", "", 0],
        [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8", "8"], "0 $1", "", 0]
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GA: [, [, , "0\\d{7}", "\\d{8}"],
      [, , "01\\d{6}", "\\d{8}", , , "01441234"],
      [, , "0[2-7]\\d{6}", "\\d{8}", , , "06031234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "GA", 241, "00", , , , , , , , [
        [, "(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    GB: [, [, , "\\d{7,10}", "\\d{4,10}"],
      [, , "2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[012789]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|[28][02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1235-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3}",
        "\\d{4,10}", , , "1212345678"
      ],
      [, , "7(?:[1-4]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[04-9]\\d|1[02-9]|2[0-35-9]|3[0-689]))\\d{6}", "\\d{10}", , , "7400123456"],
      [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}", "\\d{7}(?:\\d{2,3})?", , , "8001234567"],
      [, , "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", "\\d{10}", , , "9012345678"],
      [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", "\\d{7}(?:\\d{3})?", , , "8431234567"],
      [, , "70\\d{8}", "\\d{10}", , , "7012345678"],
      [, , "56\\d{8}",
        "\\d{10}", , , "5612345678"
      ], "GB", 44, "00", "0", " x", , "0", , , , [
        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7(?:0|6[013-9])", "2|5[56]|7(?:0|6(?:[013-9]|2[0-35-9]))"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:1|\\d1)|3|9[018]"], "0$1", "", 0],
        [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:387|5(?:24|39)|697|768|946)", "1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"], "0$1", "", 0],
        [, "(1\\d{3})(\\d{5,6})", "$1 $2", ["1"], "0$1", "", 0],
        [, "(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-5789]|62)",
          "7(?:[1-5789]|624)"
        ], "0$1", "", 0],
        [, "(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1", "", 0],
        [, "(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1", "", 0],
        [, "(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"], "0$1", "", 0],
        [, "(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "", 0],
        [, "([58]00)(\\d{6})", "$1 $2", ["[58]00"], "0$1", "", 0]
      ], , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], 1, , [, , "NA", "NA"],
      [, , "(?:3[0347]|55)\\d{8}",
        "\\d{10}", , , "5512345678"
      ], , , [, , "NA", "NA"]
    ],
    GD: [, [, , "[4589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|938)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4732691234"],
      [, , "473(?:4(?:0[3-79]|1[04-9]|20|58)|53[3-8])\\d{4}", "\\d{10}", , , "4734031234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"],
      "GD", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "473", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GE: [, [, , "[34578]\\d{8}", "\\d{6,9}"],
      [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", "\\d{6,9}", , , "322123456"],
      [, , "5(?:14|5[01578]|68|7[0147-9]|9[0-35-9])\\d{6}", "\\d{9}", , , "555123456"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "706\\d{6}", "\\d{9}", , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4", ["[348]"], "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "706\\d{6}", "\\d{9}", , , "706123456"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GF: [, [, , "[56]\\d{8}", "\\d{9}"],
      [, , "594(?:10|2[012457-9]|3[0-57-9]|4[3-9]|5[7-9]|6[0-3]|9[014])\\d{4}", "\\d{9}", , , "594101234"],
      [, , "694(?:[04][0-7]|1[0-5]|3[018]|[29]\\d)\\d{4}", "\\d{9}", , , "694201234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "GF", 594, "00", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GG: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"],
      [, , "1481\\d{6}", "\\d{6,10}", , , "1481456789"],
      [, , "7(?:781|839|911)\\d{6}", "\\d{10}", , , "7781123456"],
      [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}", "\\d{7}(?:\\d{2,3})?", , , "8001234567"],
      [, , "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", "\\d{10}", , , "9012345678"],
      [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",
        "\\d{7}(?:\\d{3})?", , , "8431234567"
      ],
      [, , "70\\d{8}", "\\d{10}", , , "7012345678"],
      [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "GG", 44, "00", "0", " x", , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], , , [, , "NA", "NA"],
      [, , "(?:3[0347]|55)\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]
    ],
    GH: [, [, , "[235]\\d{8}|8\\d{7}", "\\d{7,9}"],
      [, , "3(?:0[237]\\d|[167](?:2[0-6]|7\\d)|2(?:2[0-5]|7\\d)|3(?:2[0-3]|7\\d)|4(?:2[013-9]|3[01]|7\\d)|5(?:2[0-7]|7\\d)|8(?:2[0-2]|7\\d)|9(?:20|7\\d))\\d{5}",
        "\\d{7,9}", , , "302345678"
      ],
      [, , "(?:2[034678]|5[047])\\d{7}", "\\d{9}", , , "231234567"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "GH", 233, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GI: [, [, , "[2568]\\d{7}", "\\d{8}"],
      [, , "2(?:00\\d|1(?:6[24-7]|9\\d)|2(?:00|2[2457]))\\d{4}", "\\d{8}", , , "20012345"],
      [, , "(?:5[46-8]|62)\\d{6}", "\\d{8}", , , "57123456"],
      [, , "80\\d{6}", "\\d{8}", , , "80123456"],
      [, , "8[1-689]\\d{6}", "\\d{8}", , , "88123456"],
      [, , "87\\d{6}", "\\d{8}", , , "87123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "GI", 350, "00", , , , , , , , [
        [, "(\\d{3})(\\d{5})", "$1 $2", ["2"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GL: [, [, , "[1-689]\\d{5}", "\\d{6}"],
      [, , "(?:19|3[1-6]|6[14689]|8[14-79]|9\\d)\\d{4}", "\\d{6}", , , "321000"],
      [, , "[245][2-9]\\d{4}", "\\d{6}", , , "221234"],
      [, , "80\\d{4}", "\\d{6}", , , "801234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "3[89]\\d{4}", "\\d{6}", , , "381234"], "GL", 299, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GM: [, [, , "[2-9]\\d{6}", "\\d{7}"],
      [, , "(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", "\\d{7}", , , "5661234"],
      [, , "(?:2[0-6]|[3679]\\d)\\d{5}", "\\d{7}", , , "3012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ], "GM", 220, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GN: [, [, , "[367]\\d{7,8}", "\\d{8,9}"],
      [, , "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", "\\d{8}", , , "30241234"],
      [, , "6(?:[03]1|2[128]|5[57]|6[2469])\\d{6}", "\\d{9}", , , "601123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "722\\d{6}", "\\d{9}", , , "722123456"], "GN", 224, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"], "", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GP: [, [, , "[56]\\d{8}", "\\d{9}"],
      [, , "590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}", "\\d{9}", , , "590201234"],
      [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "GP", 590, "00", "0", , , "0", , , , [
        [, "([56]90)(\\d{2})(\\d{4})", "$1 $2-$3", , "0$1", "", 0]
      ], , [, , "NA", "NA"], 1, , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GQ: [, [, , "[23589]\\d{8}", "\\d{9}"],
      [, , "3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}", "\\d{9}", , , "333091234"],
      [, , "(?:222|551)\\d{6}", "\\d{9}", , , "222123456"],
      [, , "80\\d[1-9]\\d{5}", "\\d{9}", , , "800123456"],
      [, , "90\\d[1-9]\\d{5}", "\\d{9}", , , "900123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "GQ", 240, "00", , , , , , , , [
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"], "", "", 0],
        [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GR: [, [, , "[26-9]\\d{9}", "\\d{10}"],
      [, , "2(?:1\\d{2}|2(?:3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[289][1-9])|3(?:1\\d|2[1-57]|3[1-4]|[45][1-3]|7[1-7]|8[1-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[239][1-4]|4[124]|5[1-6])|6(?:1\\d|3[124]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[134]|9[15-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-7]))\\d{6}", "\\d{10}", , , "2123456789"],
      [, , "69\\d{8}", "\\d{10}", , , "6912345678"],
      [, , "800\\d{7}",
        "\\d{10}", , , "8001234567"
      ],
      [, , "90[19]\\d{7}", "\\d{10}", , , "9091234567"],
      [, , "8(?:0[16]|12|25)\\d{7}", "\\d{10}", , , "8011234567"],
      [, , "70\\d{8}", "\\d{10}", , , "7012345678"],
      [, , "NA", "NA"], "GR", 30, "00", , , , , , , , [
        [, "([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"], "", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"], "", "", 0],
        [, "(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GT: [, [, , "[2-7]\\d{7}|1[89]\\d{9}", "\\d{8}(?:\\d{3})?"],
      [, , "[267][2-9]\\d{6}", "\\d{8}", , , "22456789"],
      [, , "[345]\\d{7}", "\\d{8}", , , "51234567"],
      [, , "18[01]\\d{8}", "\\d{11}", , , "18001112222"],
      [, , "19\\d{9}", "\\d{11}", , , "19001112222"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "GT", 502, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"], "", "", 0],
        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GU: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}",
        "\\d{7}(?:\\d{3})?", , , "6713001234"
      ],
      [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6713001234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "GU", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "671", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GW: [, [, , "[3-79]\\d{6}", "\\d{7}"],
      [, , "3(?:2[0125]|3[1245]|4[12]|5[1-4]|70|9[1-467])\\d{4}", "\\d{7}", , , "3201234"],
      [, , "(?:[5-7]\\d|9[012])\\d{5}", "\\d{7}", , , "5012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "40\\d{5}", "\\d{7}", , , "4012345"], "GW", 245, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    GY: [, [, , "[2-4679]\\d{6}", "\\d{7}"],
      [, , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",
        "\\d{7}", , , "2201234"
      ],
      [, , "6\\d{6}", "\\d{7}", , , "6091234"],
      [, , "(?:289|862)\\d{4}", "\\d{7}", , , "2891234"],
      [, , "9008\\d{3}", "\\d{7}", , , "9008123"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "GY", 592, "001", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    HK: [, [, , "[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}", "\\d{5,11}"],
      [, , "(?:[23]\\d|5[78])\\d{6}", "\\d{8}", , , "21234567"],
      [, , "(?:5[1-69]\\d|6\\d{2}|9(?:0[1-9]|[1-8]\\d))\\d{5}", "\\d{8}", , , "51234567"],
      [, , "800\\d{6}",
        "\\d{9}", , , "800123456"
      ],
      [, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", "\\d{5,11}", , , "90012345678"],
      [, , "NA", "NA"],
      [, , "8[1-3]\\d{6}", "\\d{8}", , , "81123456"],
      [, , "NA", "NA"], "HK", 852, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", ["[235-7]|[89](?:0[1-9]|[1-9])"], "", "", 0],
        [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"], "", "", 0],
        [, "(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"], "", "", 0],
        [, "(900)(\\d{2,5})", "$1 $2", ["900"], "", "", 0]
      ], , [, , "7\\d{7}", "\\d{8}", , , "71234567"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    HN: [, [, , "[237-9]\\d{7}", "\\d{8}"],
      [, , "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[056]|5[57]|7[01389]|8[0146-9]|9[012])|4(?:2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:4[3-5]|5\\d|6[56]|74)|6(?:4[0-378]|[56]\\d|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[34])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}", "\\d{8}", , , "22123456"],
      [, , "[37-9]\\d{7}", "\\d{8}", , , "91234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "HN", 504, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1-$2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    HR: [, [, , "[1-7]\\d{5,8}|[89]\\d{6,11}", "\\d{6,12}"],
      [, , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6}", "\\d{6,8}", , , "12345678"],
      [, , "9[1257-9]\\d{6,10}", "\\d{8,12}", , , "912345678"],
      [, , "80[01]\\d{4,7}", "\\d{7,10}", , , "8001234567"],
      [, , "6(?:[09]\\d{7}|[145]\\d{4,7})", "\\d{6,9}", , , "611234"],
      [, , "NA", "NA"],
      [, , "7[45]\\d{4,7}", "\\d{6,9}", , , "741234567"],
      [, , "NA", "NA"], "HR", 385, "00", "0", , , "0", , , , [
        [, "(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1", "", 0],
        [, "(6[09])(\\d{4})(\\d{3})",
          "$1 $2 $3", ["6[09]"], "0$1", "", 0
        ],
        [, "(62)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["62"], "0$1", "", 0],
        [, "([2-5]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-5]"], "0$1", "", 0],
        [, "(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1", "", 0],
        [, "(9\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1", "", 0],
        [, "(9\\d)(\\d{3,4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"], "0$1", "", 0],
        [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[145]|7"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3,4})(\\d{3})", "$1 $2 $3", ["6[145]|7"], "0$1", "", 0],
        [, "(80[01])(\\d{2})(\\d{2,3})",
          "$1 $2 $3", ["8"], "0$1", "", 0
        ],
        [, "(80[01])(\\d{3,4})(\\d{3})", "$1 $2 $3", ["8"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "62\\d{6,7}", "\\d{8,9}", , , "62123456"], , , [, , "NA", "NA"]
    ],
    HT: [, [, , "[2-489]\\d{7}", "\\d{8}"],
      [, , "2(?:[24]\\d|5[1-5]|94)\\d{5}", "\\d{8}", , , "22453300"],
      [, , "(?:3[1-9]|4\\d)\\d{6}", "\\d{8}", , , "34101234"],
      [, , "8\\d{7}", "\\d{8}", , , "80012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "98[89]\\d{5}", "\\d{8}", , , "98901234"], "HT", 509, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    HU: [, [, , "[1-9]\\d{7,8}", "\\d{6,9}"],
      [, , "(?:1\\d|2(?:1\\d|[2-9])|3[2-7]|4[24-9]|5[2-79]|6[23689]|7(?:1\\d|[2-9])|8[2-57-9]|9[2-69])\\d{6}", "\\d{6,9}", , , "12345678"],
      [, , "(?:[27]0|3[01])\\d{7}", "\\d{9}", , , "201234567"],
      [, , "80\\d{6}", "\\d{8}", , , "80123456"],
      [, , "9[01]\\d{6}", "\\d{8}", , , "90123456"],
      [, , "40\\d{6}", "\\d{8}", , , "40123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "HU", 36, "00", "06", , , "06", , , , [
        [, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)",
          "", 0
        ],
        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    ID: [, [, , "[1-9]\\d{6,10}", "\\d{5,11}"],
      [, , "2(?:1(?:[0-8]\\d{6,7}|9\\d{6})|[24]\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|2[1-578]|3[1-68]|4[1-3]|5[1-8]|6[1-3568]|7[0-46]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[1246-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-469]|4[1-6])|7(?:1[1-46-9]|2[14-9]|[36]\\d|4[1-8]|5[1-9]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",
        "\\d{5,10}", , , "612345678"
      ],
      [, , "(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359]|9\\d)|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,9}", "\\d{9,11}", , , "812345678"],
      [, , "177\\d{6,8}|800\\d{5,7}", "\\d{8,11}", , , "8001234567"],
      [, , "809\\d{7}", "\\d{10}", , , "8091234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "ID", 62, "0(?:0[1789]|10(?:00|1[67]))", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{7,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)", "", 0],
        [, "(\\d{3})(\\d{5,7})", "$1 $2", ["[4579]|2[035-9]|[36][02-9]"], "(0$1)", "", 0],
        [, "(8\\d{2})(\\d{3,4})(\\d{3,4})", "$1-$2-$3", ["8[1-35-9]"], "0$1", "", 0],
        [, "(177)(\\d{6,8})", "$1 $2", ["1"], "0$1", "", 0],
        [, "(800)(\\d{5,7})", "$1 $2", ["800"], "0$1", "", 0],
        [, "(809)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["809"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    IE: [, [, , "[124-9]\\d{6,9}", "\\d{5,10}"],
      [, , "1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})", "\\d{5,10}", , , "2212345"],
      [, , "8(?:22\\d{6}|[35-9]\\d{7})", "\\d{9}", , , "850123456"],
      [, , "1800\\d{6}", "\\d{10}", , , "1800123456"],
      [, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", "\\d{10}", , , "1520123456"],
      [, , "18[59]0\\d{6}", "\\d{10}", , , "1850123456"],
      [, , "700\\d{6}", "\\d{9}", , , "700123456"],
      [, , "76\\d{7}", "\\d{9}", , , "761234567"], "IE", 353, "00", "0", , , "0", , , , [
        [, "(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)", "", 0],
        [, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)", "", 0],
        [, "(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"], "(0$1)", "", 0],
        [, "(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"], "(0$1)", "", 0],
        [, "(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"], "(0$1)", "", 0],
        [, "([78]\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1", "", 0],
        [, "(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1", "", 0],
        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:8[059]|5)", "1(?:8[059]0|5)"], "$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "18[59]0\\d{6}", "\\d{10}", , , "1850123456"],
      [, , "818\\d{6}", "\\d{9}", , , "818123456"], , , [, , "8[35-9]\\d{8}", "\\d{10}", , , "8501234567"]
    ],
    IL: [, [, , "[17]\\d{6,9}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}", "\\d{4,10}"],
      [, , "[2-489]\\d{7}", "\\d{7,8}", , , "21234567"],
      [, , "5(?:[02347-9]\\d{2}|5(?:2[23]|3[34]|4[45]|5[5689]|6[67]|7[78]|8[89])|6[2-9]\\d)\\d{5}", "\\d{9}", , , "501234567"],
      [, , "1(?:80[019]\\d{3}|255)\\d{3}", "\\d{7,10}", , , "1800123456"],
      [, , "1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}", "\\d{8,10}", , , "1919123456"],
      [, , "1700\\d{6}", "\\d{10}", , , "1700123456"],
      [, , "NA", "NA"],
      [, , "7(?:2[23]\\d|3[237]\\d|47\\d|6(?:5\\d|8[08])|7\\d{2}|8(?:33|55|77|81))\\d{5}", "\\d{9}", , , "771234567"], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [
        [, "([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"],
          "0$1", "", 0
        ],
        [, "([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "", 0],
        [, "(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"], "$1", "", 0],
        [, "(1255)(\\d{3})", "$1-$2", ["125"], "$1", "", 0],
        [, "(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120"], "$1", "", 0],
        [, "(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121"], "$1", "", 0],
        [, "(1599)(\\d{6})", "$1-$2", ["15"], "$1", "", 0],
        [, "(\\d{4})", "*$1", ["[2-689]"], "$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "1700\\d{6}|[2-689]\\d{3}", "\\d{4,10}", , , "1700123456"],
      [, , "[2-689]\\d{3}|1599\\d{6}", "\\d{4}(?:\\d{6})?", , , "1599123456"], , , [, , "NA", "NA"]
    ],
    IM: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"],
      [, , "1624\\d{6}", "\\d{6,10}", , , "1624456789"],
      [, , "7[569]24\\d{6}", "\\d{10}", , , "7924123456"],
      [, , "808162\\d{4}", "\\d{10}", , , "8081624567"],
      [, , "(?:872299|90[0167]624)\\d{4}", "\\d{10}", , , "9016247890"],
      [, , "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}", "\\d{10}", , , "8456247890"],
      [, , "70\\d{8}", "\\d{10}", , , "7012345678"],
      [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "IM", 44, "00", "0", " x", , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}",
        "\\d{10}", , , "5512345678"
      ], , , [, , "NA", "NA"]
    ],
    IN: [, [, , "1\\d{7,12}|[2-9]\\d{9,10}", "\\d{6,13}"],
      [, , "(?:11|2[02]|33|4[04]|79)[2-7]\\d{7}|80[2-467]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[126-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:[136][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-467])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-58]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}",
        "\\d{6,10}", , , "1123456789"
      ],
      [, , "(?:7(?:2(?:0[04-9]|5[09]|7[5-8]|9[389])|3(?:0[1-9]|[58]\\d|7[3679]|9[689])|4(?:0[1-9]|1[15-9]|[29][89]|39|8[389])|5(?:0\\d|[47]9|[25]0|6[6-9]|[89][7-9])|6(?:0[027]|12|20|3[19]|5[45]|6[5-9]|7[679]|9[1-46-9])|7(?:0[2-9]|[1-79]\\d|8[1-9])|8(?:[0-7]\\d|9[013-9]))|8(?:0(?:[01589]\\d|6[67])|1(?:[02-589]\\d|1[0135-9]|7[0-79])|2(?:[236-9]\\d|5[1-9])|3(?:[0357-9]\\d|4[1-9])|[45]\\d{2}|6[02457-9]\\d|7[1-69]\\d|8(?:[0-26-9]\\d|44|5[2-9])|9(?:[035-9]\\d|2[2-9]|4[0-8]))|9\\d{3})\\d{6}",
        "\\d{10}", , , "9123456789"
      ],
      [, , "1(?:600\\d{6}|80(?:0\\d{4,8}|3\\d{9}))", "\\d{8,13}", , , "1800123456"],
      [, , "186[12]\\d{9}", "\\d{13}", , , "1861123456789"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "IN", 91, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{2})(\\d{6})", "$1 $2 $3", ["7(?:2[0579]|3[057-9]|4[0-389]|5[024-9]|6[0-35-9]|7|8[0-79])|8(?:0[015689]|1[0-57-9]|2[2356-9]|3[0-57-9]|[45]|6[0245789]|7[1-69]|8[0124-9]|9[02-9])|9", "7(?:2(?:0[04-9]|5[09]|7[5-8]|9[389])|3(?:0[1-9]|[58]|7[3679]|9[689])|4(?:0[1-9]|1[15-9]|[29][89]|39|8[389])|5(?:0|[47]9|[25]0|6[6-9]|[89][7-9])|6(?:0[027]|12|20|3[19]|5[45]|6[5-9]|7[679]|9[1-46-9])|7(?:0[2-9]|[1-79]|8[1-9])|8(?:[0-7]|9[013-9]))|8(?:0(?:[01589]|6[67])|1(?:[02-589]|1[0135-9]|7[0-79])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7[1-69]|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9"],
          "0$1", "", 1
        ],
        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79|80[2-46]"], "0$1", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[126-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:[136][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)"], "0$1", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)", "7(?:12|2[14]|3[134]|4[47]|5(?:1|5[2-6])|[67]1|88)"], "0$1", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"], "0$1", "", 1],
        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-579]|[68][1-9])|[2-8]"], "0$1", "", 1],
        [, "(1600)(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1", "", 1],
        [, "(1800)(\\d{4,5})", "$1 $2", ["180", "1800"], "$1", "", 1],
        [, "(18[06]0)(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], "$1", "", 1],
        [, "(\\d{4})(\\d{3})(\\d{4})(\\d{2})",
          "$1 $2 $3 $4", ["18[06]", "18(?:03|6[12])"], "$1", "", 1
        ]
      ], , [, , "NA", "NA"], , , [, , "1(?:600\\d{6}|8(?:0(?:0\\d{4,8}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))", "\\d{8,13}", , , "1800123456"],
      [, , "1860\\d{7}", "\\d{11}", , , "18603451234"], , , [, , "NA", "NA"]
    ],
    IO: [, [, , "3\\d{6}", "\\d{7}"],
      [, , "37\\d{5}", "\\d{7}", , , "3709100"],
      [, , "38\\d{5}", "\\d{7}", , , "3801234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "IO", 246, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ], , , [, , "NA", "NA"]
    ],
    IQ: [, [, , "[1-7]\\d{7,9}", "\\d{6,10}"],
      [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", "\\d{6,9}", , , "12345678"],
      [, , "7[3-9]\\d{8}", "\\d{10}", , , "7912345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "IQ", 964, "00", "0", , , "0", , , , [
        [, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1", "", 0],
        [, "([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1", "", 0],
        [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    IR: [, [, , "[14-8]\\d{6,9}|[23]\\d{4,9}|9(?:[1-4]\\d{8}|9\\d{2,8})", "\\d{4,10}"],
      [, , "1(?:[13-589][12]|[27][1-4])\\d{7}|2(?:1\\d{3,8}|3[12]\\d{7}|4(?:1\\d{4,7}|2\\d{7})|5(?:1\\d{3,7}|[2356]\\d{7})|6\\d{8}|7[34]\\d{7}|[89][12]\\d{7})|3(?:1(?:1\\d{4,7}|2\\d{7})|2[1-4]\\d{7}|3(?:[125]\\d{7}|4\\d{6,7})|4(?:1\\d{6,7}[24-9]\\d{7})|5(?:1\\d{4,7}|[23]\\d{7})|[6-9][12]\\d{7})|4(?:[135-9][12]\\d{7}|2[1-467]\\d{7}|4(?:1\\d{4,7}|[2-4]\\d{7}))|5(?:1(?:1\\d{4,7}|2\\d{7})|2[89]\\d{7}|3[1-5]\\d{7}|4(?:1\\d{4,7}|[2-8]\\d{7})|[5-7][12]\\d{7}|8[1245]\\d{7})|6(?:1(?:1\\d{6,7}|2\\d{7})|[347-9][12]\\d{7}|5(?:1\\d{7}|2\\d{6,7})|6[1-6]\\d{7})|7(?:[13589][12]|2[1289]|4[1-4]|6[1-6]|7[1-3])\\d{7}|8(?:[145][12]|3[124578]|6[1256]|7[1245])\\d{7}",
        "\\d{5,10}", , , "2123456789"
      ],
      [, , "9[1-3]\\d{8}", "\\d{10}", , , "9123456789"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "(?:[2-6]0\\d|993)\\d{7}", "\\d{10}", , , "9932123456"], "IR", 98, "00", "0", , , "0", , , , [
        [, "(2[15])(\\d{3,5})", "$1 $2", ["2(?:1|5[0-47-9])"], "0$1", "", 0],
        [, "(2[15])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1|5[0-47-9])"], "0$1", "", 0],
        [, "(2\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2(?:[16]|5[0-47-9])"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]|2[02-57-9]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{2,3})",
          "$1 $2 $3", ["[13-9]|2[02-57-9]"], "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{3})", "$1 $2", ["[13-9]|2[02-57-9]"], "0$1", "", 0]
      ], , [, , "943\\d{7}", "\\d{10}", , , "9432123456"], , , [, , "NA", "NA"],
      [, , "9990\\d{0,6}", "\\d{4,10}", , , "9990123456"], , , [, , "NA", "NA"]
    ],
    IS: [, [, , "[4-9]\\d{6}|38\\d{7}", "\\d{7,9}"],
      [, , "(?:4(?:[14][0-245]|2[0-7]|[37][0-8]|5[0-3568]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[013-7]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", "\\d{7}", , , "4101234"],
      [, , "38[589]\\d{6}|(?:6(?:1[0-8]|3[0-27-9]|4[0-27]|5[0-29]|[67][0-69]|9\\d)|7(?:5[057]|7\\d|8[0-3])|8(?:2[0-5]|[469]\\d|5[1-9]))\\d{4}",
        "\\d{7,9}", , , "6101234"
      ],
      [, , "800\\d{4}", "\\d{7}", , , "8001234"],
      [, , "90\\d{5}", "\\d{7}", , , "9011234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "49[0-24-79]\\d{4}", "\\d{7}", , , "4921234"], "IS", 354, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"], "", "", 0],
        [, "(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "(?:6(?:2[0-8]|49|8\\d)|8(?:2[6-9]|[38]\\d|50|7[014-9])|95[48])\\d{4}", "\\d{7}", , , "6201234"]
    ],
    IT: [, [, , "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})",
      "\\d{6,11}"
    ],
      [, , "0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", "\\d{6,11}", , , "0212345678"],
      [, , "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "\\d{9,11}", , , "3123456789"],
      [, , "80(?:0\\d{6}|3\\d{3})", "\\d{6,9}", , , "800123456"],
      [, , "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "\\d{6,10}", , , "899123456"],
      [, , "84(?:[08]\\d{6}|[17]\\d{3})", "\\d{6,9}", , , "848123456"],
      [, , "1(?:78\\d|99)\\d{6}", "\\d{9,10}", , , "1781234567"],
      [, , "55\\d{8}", "\\d{10}", , , "5512345678"], "IT", 39, "00", , , , , , , , [
        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"], "", "", 0],
        [, "(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"], "", "", 0],
        [, "(0[26])(\\d{4,6})",
          "$1 $2", ["0[26]"], "", "", 0
        ],
        [, "(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"], "", "", 0],
        [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"], "", "", 0],
        [, "(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"], "", "", 0],
        [, "(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"], "", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"], "", "", 0],
        [, "(\\d{4})(\\d{4})",
          "$1 $2", ["894", "894[5-9]"], "", "", 0
        ],
        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "848\\d{6}", "\\d{9}", , , "848123456"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    JE: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"],
      [, , "1534\\d{6}", "\\d{6,10}", , , "1534456789"],
      [, , "7(?:509|7(?:00|97)|829|937)\\d{6}", "\\d{10}", , , "7797123456"],
      [, , "80(?:07(?:35|81)|8901)\\d{4}", "\\d{10}", , , "8007354567"],
      [, , "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", "\\d{10}", , , "9018105678"],
      [, , "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}",
        "\\d{10}", , , "8447034567"
      ],
      [, , "701511\\d{4}", "\\d{10}", , , "7015115678"],
      [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "JE", 44, "00", "0", " x", , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], , , [, , "NA", "NA"],
      [, , "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]
    ],
    JM: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}",
        "\\d{7}(?:\\d{3})?", , , "8765123456"
      ],
      [, , "876(?:2[1789]\\d|[348]\\d{2}|5(?:08|27|6[0-24-9]|[3-578]\\d)|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", "\\d{10}", , , "8762101234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "JM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "876", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    JO: [, [, , "[235-9]\\d{7,8}",
      "\\d{7,9}"
    ],
      [, , "(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-9][02])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|[457][02]|60)|53(?:[013][02]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|300|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|9[09]))\\d{4}", "\\d{7,8}", , , "62001234"],
      [, , "7(?:55|7[25-9]|8[5-9]|9[05-9])\\d{6}",
        "\\d{9}", , , "790123456"
      ],
      [, , "80\\d{6}", "\\d{8}", , , "80012345"],
      [, , "900\\d{5}", "\\d{8}", , , "90012345"],
      [, , "85\\d{6}", "\\d{8}", , , "85012345"],
      [, , "70\\d{7}", "\\d{9}", , , "700123456"],
      [, , "NA", "NA"], "JO", 962, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)", "", 0],
        [, "(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{5,6})", "$1 $2", ["70|8[0158]|9"], "0$1", "", 0]
      ], , [, , "74(?:66|77)\\d{5}", "\\d{9}", , , "746612345"], , , [, , "NA", "NA"],
      [, , "8(?:10|8\\d)\\d{5}", "\\d{8}", , ,
        "88101234"
      ], , , [, , "NA", "NA"]
    ],
    JP: [, [, , "[1-9]\\d{8,9}|0(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", "\\d{7,16}"],
      [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}", "\\d{9}", , , "312345678"],
      [, , "(?:[79]0\\d|80[1-9])\\d{7}", "\\d{10}", , , "7012345678"],
      [, , "120\\d{6}|800\\d{7}|0(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})",
        "\\d{7,16}", , , "120123456"
      ],
      [, , "990\\d{6}", "\\d{9}", , , "990123456"],
      [, , "NA", "NA"],
      [, , "60\\d{7}", "\\d{9}", , , "601234567"],
      [, , "50[1-9]\\d{7}", "\\d{10}", , , "5012345678"], "JP", 81, "010", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1", "", 0],
        [, "(\\d{3})(\\d{4})", "$1-$2", ["077"], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["077"], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["088"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{3,4})",
          "$1-$2-$3", ["0(?:37|66)"], "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0(?:37|66)"], "0$1", "", 0],
        [, "(\\d{3})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0(?:37|66)"], "0$1", "", 0],
        [, "(\\d{3})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["0(?:37|66)"], "0$1", "", 0],
        [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1", "", 0],
        [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))",
          "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"
        ], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
          "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))",
          "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
          "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"
        ],
          "0$1", "", 0
        ],
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"],
          "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:9[14-79]|74|[34]7|[56]9)|82|993"], "0$1", "", 0],
        [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1", "", 0]
      ], , [, , "20\\d{8}", "\\d{10}", , , "2012345678"], , , [, , "0(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", "\\d{7,16}", , , "0777012"],
      [, , "570\\d{6}", "\\d{9}", , , "570123456"], 1, , [, , "NA", "NA"]
    ],
    KE: [, [, , "20\\d{6,7}|[4-9]\\d{6,9}", "\\d{5,10}"],
      [, , "20\\d{6,7}|4(?:[013]\\d{7}|[24-6]\\d{5,7})|5(?:[0-36-8]\\d{5,7}|[459]\\d{5})|6(?:[08]\\d{5}|[14-79]\\d{5,7}|2\\d{7})", "\\d{5,9}", , , "202012345"],
      [, , "7(?:0[0-8]|[123]\\d|5[0-6]|7[0-5]|8[5-9])\\d{6}", "\\d{9}", , , "712123456"],
      [, , "800[24-8]\\d{5,6}", "\\d{9,10}", , , "800223456"],
      [, , "900[02-578]\\d{5}", "\\d{9}", , , "900223456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "KE", 254, "000", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{4,7})", "$1 $2", ["[24-6]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{6,7})", "$1 $2", ["7"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{3,4})",
          "$1 $2 $3", ["[89]"], "0$1", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KG: [, [, , "[35-8]\\d{8,9}", "\\d{5,10}"],
      [, , "(?:3(?:1(?:2\\d|3[1-9]|47|5[02]|6[1-8])|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6[0-4])|5(?:22|3[4-7]|59|6[0-5])|6(?:22|5[35-7]|6[0-3])|7(?:22|3[468]|4[1-9]|59|6\\d|7[5-7])|9(?:22|4[1-8]|6[0-8]))|6(?:09|12|2[2-4])\\d)\\d{5}", "\\d{5,10}", , , "312123456"],
      [, , "5[124-7]\\d{7}|7(?:0[0-357-9]|7\\d)\\d{6}", "\\d{9}", , , "700123456"],
      [, , "800\\d{6,7}", "\\d{9,10}", , , "800123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "KG", 996, "00", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["31[25]|[5-7]"], "0$1", "", 0],
        [, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"], "0$1", "", 0],
        [, "(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KH: [, [, , "[1-9]\\d{7,9}", "\\d{6,10}"],
      [, , "(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|238\\d{6}", "\\d{6,9}", , , "23756789"],
      [, , "(?:1(?:[013-9]|2\\d?)|31\\d|6[016-9]|7(?:[07-9]|6\\d)|8(?:[013-79]|8\\d)|9(?:6\\d|7\\d?|[0-589]))\\d{6}",
        "\\d{8,9}", , , "91234567"
      ],
      [, , "1800(?:1\\d|2[019])\\d{4}", "\\d{10}", , , "1800123456"],
      [, , "1900(?:1\\d|2[09])\\d{4}", "\\d{10}", , , "1900123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "KH", 855, "00[14-9]", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1", "", 0],
        [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KI: [, [, , "[2-689]\\d{4}", "\\d{5}"],
      [, , "(?:[234]\\d|50|8[1-5])\\d{3}", "\\d{5}", , , "31234"],
      [, , "6\\d{4}|9(?:[0-8]\\d|9[015-8])\\d{2}", "\\d{5}", , , "61234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "KI", 686, "00", , , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KM: [, [, , "[379]\\d{6}", "\\d{7}"],
      [, , "7(?:6[0-37-9]|7[0-57-9])\\d{4}", "\\d{7}", , , "7712345"],
      [, , "3[234]\\d{5}", "\\d{7}", , , "3212345"],
      [, , "NA", "NA"],
      [, , "(?:39[01]|9[01]0)\\d{4}", "\\d{7}", , , "9001234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "KM", 269, "00", , , , , , , , [
        [, "(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3", , "", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KN: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "869(?:2(?:29|36)|302|4(?:6[5-9]|70))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8692361234"],
      [, , "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-6])\\d{4}", "\\d{10}", , , "8695561234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "KN", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "869", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KP: [, [, , "1\\d{9}|[28]\\d{7}", "\\d{6,8}|\\d{10}"],
      [, , "2\\d{7}|85\\d{6}", "\\d{6,8}", , , "21234567"],
      [, , "19[123]\\d{7}", "\\d{10}", , , "1921234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "KP", 850, "00|99", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1", "", 0],
        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}", "\\d{8}", , , "23821234"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KR: [, [, , "[1-7]\\d{3,9}|8\\d{8}", "\\d{4,10}"],
      [, , "(?:2|3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})", "\\d{4,10}", , , "22123456"],
      [, , "1[0-26-9]\\d{7,8}", "\\d{9,10}", , , "1023456789"],
      [, , "80\\d{7}", "\\d{9}", , , "801234567"],
      [, , "60[2-9]\\d{6}", "\\d{9}", , , "602345678"],
      [, , "NA", "NA"],
      [, , "50\\d{8}", "\\d{10}", , , "5012345678"],
      [, , "70\\d{8}", "\\d{10}", , , "7012345678"], "KR", 82, "00(?:[124-68]|[37]\\d{2})",
      "0", , , "0(8[1-46-8]|85\\d{2})?", , , , [
        [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["1(?:0|1[19]|[69]9|5[458])|[57]0", "1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"], "0$1", "0$CC-$1", 0],
        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1(?:[169][2-8]|[78]|5[1-4])|[68]0|[3-6][1-9][1-9]", "1(?:[169][2-8]|[78]|5(?:[1-3]|4[56]))|[68]0|[3-6][1-9][1-9]"], "0$1", "0$CC-$1", 0],
        [, "(\\d{3})(\\d)(\\d{4})", "$1-$2-$3", ["131", "1312"], "0$1", "0$CC-$1", 0],
        [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["131", "131[13-9]"], "0$1", "0$CC-$1", 0],
        [, "(\\d{3})(\\d{3})(\\d{4})",
          "$1-$2-$3", ["13[2-9]"], "0$1", "0$CC-$1", 0
        ],
        [, "(\\d{2})(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3-$4", ["30"], "0$1", "0$CC-$1", 0],
        [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1", 0],
        [, "(\\d)(\\d{3,4})", "$1-$2", ["21[0-46-9]"], "0$1", "0$CC-$1", 0],
        [, "(\\d{2})(\\d{3,4})", "$1-$2", ["[3-6][1-9]1", "[3-6][1-9]1(?:[0-46-9])"], "0$1", "0$CC-$1", 0],
        [, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[46-9]|6[04678])", "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88))"], "$1", "0$CC-$1", 0]
      ], , [, , "15\\d{7,8}", "\\d{9,10}", , , "1523456789"], , , [, , "NA", "NA"],
      [, , "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88))\\d{4}", "\\d{8}", , , "15441234"], , , [, , "NA", "NA"]
    ],
    KW: [, [, , "[12569]\\d{6,7}", "\\d{7,8}"],
      [, , "(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}", "\\d{7,8}", , , "22345678"],
      [, , "(?:5(?:1[0-35]|[05]\\d)|6(?:0[034679]|5[015-9]|6\\d|7[067]|9[0369])|9(?:0[09]|4[049]|6[069]|[79]\\d|88))\\d{5}", "\\d{8}", , , "50012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "KW", 965, "00", , , , , , , , [
        [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[1269]"], "", "", 0],
        [, "(5[015]\\d)(\\d{5})", "$1 $2", ["5"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KY: [, [, , "[3589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "3452221234"],
      [, , "345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[3-9]|3[689]))\\d{4}", "\\d{10}", , , "3453231234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
      [, , "900[2-9]\\d{6}|345976\\d{4}", "\\d{10}", , , "9002345678"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "KY", 1, "011", "1", , , "1", , , , , , [, , "345849\\d{4}", "\\d{10}", , , "3458491234"], , "345", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    KZ: [, [, , "(?:33\\d|7\\d{2}|80[09])\\d{7}", "\\d{10}"],
      [, , "33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[023]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[1-79]|4[0-35-9]|59)|4(?:2\\d|3[013-79]|4[0-8]|5[1-79])|5(?:2\\d|3[1-8]|4[1-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[237]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}",
        "\\d{10}", , , "7123456789"
      ],
      [, , "7(?:0[01257]|47|6[02-4]|7[15-8]|85)\\d{7}", "\\d{10}", , , "7710009998"],
      [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "809\\d{7}", "\\d{10}", , , "8091234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "751\\d{7}", "\\d{10}", , , "7511234567"], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , "NA", "NA"], , , [, , "751\\d{7}", "\\d{10}", , , "7511234567"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LA: [, [, , "[2-8]\\d{7,9}", "\\d{6,10}"],
      [, , "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", "\\d{6,8}", , , "21212862"],
      [, , "20(?:2[2389]|5[4-689]|7[6-8]|9[57-9])\\d{6}",
        "\\d{10}", , , "2023123456"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "LA", 856, "00", "0", , , "0", , , , [
        [, "(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"], "0$1", "", 0],
        [, "([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|[3-8]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LB: [, [, , "[13-9]\\d{6,7}", "\\d{7,8}"],
      [, , "(?:[14-6]\\d{2}|7(?:[2-579]\\d|62|8[0-7])|[89][2-9]\\d)\\d{4}", "\\d{7}", , , "1123456"],
      [, , "(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|91))\\d{5}", "\\d{7,8}", , , "71123456"],
      [, , "NA", "NA"],
      [, , "9[01]\\d{6}", "\\d{8}", , , "90123456"],
      [, , "8[01]\\d{6}", "\\d{8}", , , "80123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "LB", 961, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-6]|7(?:[2-579]|62|8[0-7])|[89][2-9]"], "0$1", "", 0],
        [, "([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89][01]|7(?:[01]|6[013-9]|8[89]|91)"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LC: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "758(?:234|4(?:30|5[0-9]|6[2-9]|8[0-2])|572|638|758)\\d{4}",
        "\\d{7}(?:\\d{3})?", , , "7582345678"
      ],
      [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-6]))\\d{4}", "\\d{10}", , , "7582845678"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "LC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "758", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LI: [, [, , "6\\d{8}|[23789]\\d{6}", "\\d{7,9}"],
      [, , "(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}",
        "\\d{7}", , , "2345678"
      ],
      [, , "6(?:51[01]|6(?:[01][0-4]|2[016-9]|88)|710)\\d{5}|7(?:36|4[25]|56|[7-9]\\d)\\d{4}", "\\d{7,9}", , , "661234567"],
      [, , "80(?:0(?:2[238]|79)|9\\d{2})\\d{2}", "\\d{7}", , , "8002222"],
      [, , "90(?:0(?:2[278]|79)|1(?:23|3[012])|6(?:4\\d|6[0126]))\\d{2}", "\\d{7}", , , "9002222"],
      [, , "NA", "NA"],
      [, , "701\\d{4}", "\\d{7}", , , "7011234"],
      [, , "NA", "NA"], "LI", 423, "00", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[23]|7[3-57-9]|87"], "", "", 0],
        [, "(6\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], "", "", 0],
        [,
          "(6[567]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["6[567]"], "", "", 0
        ],
        [, "(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"], "", "", 0],
        [, "([7-9]0\\d)(\\d{2})(\\d{2})", "$1 $2 $3", ["[7-9]0"], "", "", 0],
        [, "([89]0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]0"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "87(?:0[128]|7[0-4])\\d{3}", "\\d{7}", , , "8770123"], , , [, , "697(?:[35]6|4[25]|[7-9]\\d)\\d{4}", "\\d{9}", , , "697361234"]
    ],
    LK: [, [, , "[1-9]\\d{8}", "\\d{7,9}"],
      [, , "(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",
        "\\d{7,9}", , , "112345678"
      ],
      [, , "7[125-8]\\d{7}", "\\d{9}", , , "712345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "LK", 94, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{1})(\\d{6})", "$1 $2 $3", ["[1-689]"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LR: [, [, , "(?:[29]\\d|[4-6]|7\\d{1,2}|[38]\\d{2})\\d{6}", "\\d{7,9}"],
      [, , "2\\d{7}", "\\d{8}", , , "21234567"],
      [, , "(?:4[67]|5\\d|6[4-8]|77?\\d{2}|88\\d{2})\\d{5}",
        "\\d{7,9}", , , "4612345"
      ],
      [, , "NA", "NA"],
      [, , "90\\d{6}", "\\d{8}", , , "90123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "33200\\d{4}", "\\d{9}", , , "332001234"], "LR", 231, "00", "0", , , "0", , , , [
        [, "([279]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[279]"], "0$1", "", 0],
        [, "(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1", "", 0],
        [, "([4-6])(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LS: [, [, , "[2568]\\d{7}",
      "\\d{8}"
    ],
      [, , "2\\d{7}", "\\d{8}", , , "22123456"],
      [, , "[56]\\d{7}", "\\d{8}", , , "50123456"],
      [, , "800[256]\\d{4}", "\\d{8}", , , "80021234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "LS", 266, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LT: [, [, , "[3-9]\\d{7}", "\\d{8}"],
      [, , "(?:3[1478]|4[124-6]|52)\\d{6}", "\\d{8}", , , "31234567"],
      [, , "6\\d{7}", "\\d{8}", , , "61234567"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "9(?:0[0239]|10)\\d{5}", "\\d{8}", , , "90012345"],
      [, , "808\\d{5}", "\\d{8}", , , "80812345"],
      [, , "700\\d{5}", "\\d{8}", , , "70012345"],
      [, , "NA", "NA"], "LT", 370, "00", "8", , , "[08]", , , , [
        [, "([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"], "(8-$1)", "", 1],
        [, "([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"], "(8-$1)", "", 1],
        [, "([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", "", 1],
        [, "(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", "", 1]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "70[67]\\d{5}", "\\d{8}", , , "70712345"], , , [, , "NA",
        "NA"
      ]
    ],
    LU: [, [, , "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", "\\d{4,11}"],
      [, , "(?:2(?:2\\d{1,2}|3[2-9]|[67]\\d|4[1-8]\\d?|5[1-5]\\d?|9[0-24-9]\\d?)|3(?:[059][05-9]|[13]\\d|[26][015-9]|4[0-26-9]|7[0-389]|8[08])\\d?|4\\d{2,3}|5(?:[01458]\\d|[27][0-69]|3[0-3]|[69][0-7])\\d?|7(?:1[019]|2[05-9]|3[05]|[45][07-9]|[679][089]|8[06-9])\\d?|8(?:0[2-9]|1[0-36-9]|3[3-9]|[469]9|[58][7-9]|7[89])\\d?|9(?:0[89]|2[0-49]|37|49|5[0-27-9]|7[7-9]|9[0-478])\\d?)\\d{1,7}", "\\d{4,11}", , , "27123456"],
      [, , "6[269][18]\\d{6}",
        "\\d{9}", , , "628123456"
      ],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "90[01]\\d{5}", "\\d{8}", , , "90012345"],
      [, , "801\\d{5}", "\\d{8}", , , "80112345"],
      [, , "70\\d{6}", "\\d{8}", , , "70123456"],
      [, , "20(?:1\\d{5}|[2-689]\\d{1,7})", "\\d{4,10}", , , "20201234"], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)", , , , [
        [, "(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], "", "$CC $1", 0],
        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], "", "$CC $1", 0],
        [, "(\\d{2})(\\d{2})(\\d{3})",
          "$1 $2 $3", ["20"], "", "$CC $1", 0
        ],
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], "", "$CC $1", 0],
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], "", "$CC $1", 0],
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], "", "$CC $1", 0],
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], "", "$CC $1", 0],
        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0[01]|70"], "", "$CC $1", 0],
        [, "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3", ["6"], "", "$CC $1", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LV: [, [, , "[2689]\\d{7}", "\\d{8}"],
      [, , "6[3-8]\\d{6}", "\\d{8}", , , "63123456"],
      [, , "2\\d{7}", "\\d{8}", , , "21234567"],
      [, , "80\\d{6}", "\\d{8}", , , "80123456"],
      [, , "90\\d{6}", "\\d{8}", , , "90123456"],
      [, , "81\\d{6}", "\\d{8}", , , "81123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "LV", 371, "00", , , , , , , , [
        [, "([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    LY: [, [, , "[25679]\\d{8}",
      "\\d{7,9}"
    ],
      [, , "(?:2[1345]|5[1347]|6[123479]|71)\\d{7}", "\\d{7,9}", , , "212345678"],
      [, , "9[1-6]\\d{7}", "\\d{9}", , , "912345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "LY", 218, "00", "0", , , "0", , , , [
        [, "([25679]\\d)(\\d{7})", "$1-$2", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MA: [, [, , "[5689]\\d{8}", "\\d{9}"],
      [, , "5(?:2(?:(?:[015-7]\\d|2[2-9]|3[2-57]|4[2-8]|8[235-7])\\d|9(?:0\\d|[89]0))|3(?:(?:[0-4]\\d|[57][2-9]|6[235-8]|9[3-9])\\d|8(?:0\\d|[89]0)))\\d{4}",
        "\\d{9}", , , "520123456"
      ],
      [, , "6(?:0[0-8]|[124-7]\\d|3[013-8]|8[01]|9[89])\\d{6}", "\\d{9}", , , "650123456"],
      [, , "80\\d{7}", "\\d{9}", , , "801234567"],
      [, , "89\\d{7}", "\\d{9}", , , "891234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MA", 212, "00", "0", , , "0", , , , [
        [, "([56]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|6"], "0$1", "", 0],
        [, "([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9])|892", "5(?:2(?:[2-48]|90)|3(?:[5-79]|80))|892"], "0$1", "", 0],
        [, "(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1",
          "", 0
        ],
        [, "(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"], "0$1", "", 0]
      ], , [, , "NA", "NA"], 1, , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MC: [, [, , "[4689]\\d{7,8}", "\\d{8,9}"],
      [, , "9[2-47-9]\\d{6}", "\\d{8}", , , "99123456"],
      [, , "6\\d{8}|4\\d{7}", "\\d{8,9}", , , "612345678"],
      [, , "(?:8\\d|90)\\d{6}", "\\d{8}", , , "90123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MC", 377, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"],
          "0$1", "", 0
        ],
        [, "(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "8\\d{7}", "\\d{8}"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MD: [, [, , "[235-9]\\d{7}", "\\d{8}"],
      [, , "(?:2(?:1[0569]|2\\d|3[015-7]|4[1-46-9]|5[0-24689]|6[2-589]|7[1-37]|9[1347-9])|5(?:33|5[257]))\\d{5}", "\\d{8}", , , "22212345"],
      [, , "(?:562|6(?:50|7[1-6]|[089]\\d)|7(?:67|7[47-9]|[89]\\d))\\d{5}", "\\d{8}", , , "65012345"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "90[056]\\d{5}", "\\d{8}", , , "90012345"],
      [, , "808\\d{5}",
        "\\d{8}", , , "80812345"
      ],
      [, , "NA", "NA"],
      [, , "3[08]\\d{6}", "\\d{8}", , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1", "", 0],
        [, "([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-79]|[5-7]"], "0$1", "", 0],
        [, "([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "8(?:03|14)\\d{5}", "\\d{8}", , , "80312345"], , , [, , "NA", "NA"]
    ],
    ME: [, [, , "[2-9]\\d{7,8}", "\\d{6,9}"],
      [, , "(?:20[2-8]|3(?:0[2-7]|1[35-7]|2[3567]|3[4-7])|4(?:0[237]|1[27])|5(?:0[47]|1[27]|2[378]))\\d{5}",
        "\\d{6,8}", , , "30234567"
      ],
      [, , "6(?:32\\d|[89]\\d{2}|7(?:[0-8]\\d|9(?:[3-9]|[0-2]\\d)))\\d{4}", "\\d{8,9}", , , "67622901"],
      [, , "800[28]\\d{4}", "\\d{8}", , , "80080002"],
      [, , "(?:88\\d|9(?:4[13-8]|5[16-8]))\\d{5}", "\\d{8}", , , "94515151"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "78[1-9]\\d{5}", "\\d{8}", , , "78108780"], "ME", 382, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[3789]", "[2-57-9]|6(?:[389]|7(?:[0-8]|9[3-9]))"], "0$1", "", 0],
        [, "(67)(9)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["679", "679[0-2]"], "0$1",
          "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "77\\d{6}", "\\d{8}", , , "77273012"], , , [, , "NA", "NA"]
    ],
    MF: [, [, , "[56]\\d{8}", "\\d{9}"],
      [, , "590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}", "\\d{9}", , , "590271234"],
      [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MF", 590, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MG: [, [, , "[23]\\d{8}", "\\d{7,9}"],
      [, , "20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}",
        "\\d{7,9}", , , "202123456"
      ],
      [, , "3(?:[02-4]\\d|90)\\d{6}", "\\d{9}", , , "301234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "22\\d{7}", "\\d{9}", , , "221234567"], "MG", 261, "00", "0", , , "0", , , , [
        [, "([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MH: [, [, , "[2-6]\\d{6}", "\\d{7}"],
      [, , "(?:247|528|625)\\d{4}", "\\d{7}", , , "2471234"],
      [, , "(?:235|329|45[56]|545)\\d{4}", "\\d{7}", , , "2351234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"],
      [, , "635\\d{4}", "\\d{7}", , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [
        [, "(\\d{3})(\\d{4})", "$1-$2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MK: [, [, , "[2-578]\\d{7}", "\\d{8}"],
      [, , "(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}", "\\d{6,8}", , , "22212345"],
      [, , "7(?:[0-25-8]\\d|33)\\d{5}", "\\d{8}", , , "72345678"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "5[02-9]\\d{6}", "\\d{8}", , , "50012345"],
      [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", "\\d{8}", , , "80123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MK", 389, "00", "0", , , "0", , , , [
        [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1", "", 0],
        [, "([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1", "", 0],
        [, "([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    ML: [, [, , "[246-9]\\d{7}", "\\d{8}"],
      [, , "(?:2(?:0(?:2[0-589]|7\\d)|1(?:2[5-7]|[3-689]\\d|7[2-4689]))|44[239]\\d)\\d{4}", "\\d{8}", , , "20212345"],
      [, , "[67]\\d{7}|9[0-25-9]\\d{6}", "\\d{8}", , , "65012345"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "ML", 223, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"], "", "", 0],
        [, "(\\d{4})", "$1", ["67|74"], "", "", 0]
      ],
      [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]", "[246-9]"], "", "", 0]
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MM: [, [, , "[14578]\\d{5,7}|[26]\\d{5,8}|9(?:[258]|3\\d|4\\d{1,2}|[679]\\d?)\\d{6}",
      "\\d{5,10}"
    ],
      [, , "1(?:2\\d{1,2}|[3-5]\\d|6\\d?|[89][0-6]\\d)\\d{4}|2(?:[236-9]\\d{4}|4(?:0\\d{5}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5}))|4(?:2[245-8]|[346][2-6]|5[3-5])\\d{4}|5(?:2(?:20?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7(?:[2367]|4\\d|5\\d?|8[145]\\d)|8[245]|9[24])\\d{4}|7(?:[04][24-8]|[15][2-7]|22|3[2-4])\\d{4}|8(?:1(?:2\\d?|[3-689])|2[2-8]|3[24]|4[24-7]|5[245]|6[23])\\d{4}", "\\d{5,9}", , , "1234567"],
      [, , "17[01]\\d{4}|9(?:2[0-4]|3[136]\\d|4(?:0[0-4]\\d|[1379]\\d|[24][0-589]\\d|5\\d{2}|88)|5[0-6]|61?\\d|73\\d|8\\d|9(?:1\\d|[089]))\\d{5}",
        "\\d{7,10}", , , "92123456"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "1333\\d{4}", "\\d{8}", , , "13331234"], "MM", 95, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[45]"], "0$1", "", 0],
        [, "(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"], "0$1", "", 0],
        [, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["67|81"], "0$1", "", 0],
        [, "(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"], "0$1", "", 0],
        [, "(9)(\\d{3})(\\d{4,5})", "$1 $2 $3", ["9(?:[235-9]|4[13789])"],
          "0$1", "", 0
        ],
        [, "(9)(4\\d{4})(\\d{4})", "$1 $2 $3", ["94[0245]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MN: [, [, , "[12]\\d{7,9}|[57-9]\\d{7}", "\\d{6,10}"],
      [, , "[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}", "\\d{6,10}", , , "50123456"],
      [, , "(?:8[89]|9[013-9])\\d{6}", "\\d{8}", , , "88123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "7[05-8]\\d{6}", "\\d{8}", , , "75123456"], "MN", 976, "001", "0", , , "0", , , , [
        [, "([12]\\d)(\\d{2})(\\d{4})",
          "$1 $2 $3", ["[12]1"], "0$1", "", 0
        ],
        [, "([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1", "", 0],
        [, "([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"], "0$1", "", 0],
        [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1", "", 0],
        [, "([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MO: [, [, , "[268]\\d{7}", "\\d{8}"],
      [, , "(?:28[2-57-9]|8[2-57-9]\\d)\\d{5}", "\\d{8}", , , "28212345"],
      [, , "6[236]\\d{6}",
        "\\d{8}", , , "66123456"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MO", 853, "00", , , , , , , , [
        [, "([268]\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MP: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}", "\\d{7}(?:\\d{3})?", , , "6702345678"],
      [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}",
        "\\d{7}(?:\\d{3})?", , , "6702345678"
      ],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "MP", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "670", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MQ: [, [, , "[56]\\d{8}", "\\d{9}"],
      [, , "596(?:0[2-5]|[12]0|3[05-9]|4[024-8]|[5-7]\\d|89|9[4-8])\\d{4}", "\\d{9}", , , "596301234"],
      [, , "696(?:[0-479]\\d|5[01]|8[0-689])\\d{4}", "\\d{9}", , , "696201234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MQ", 596, "00", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MR: [, [, , "[2-48]\\d{7}", "\\d{8}"],
      [, , "25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}", "\\d{8}", , , "35123456"],
      [, , "(?:2(?:2\\d|70)|3(?:3\\d|6[1-36]|7[1-3])|4(?:4\\d|6[0457-9]|7[4-9]|8[01346-8]))\\d{5}", "\\d{8}", , , "22123456"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MR", 222, "00", , , , , , , , [
        [, "([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MS: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "664491\\d{4}", "\\d{7}(?:\\d{3})?", , , "6644912345"],
      [, , "66449[2-6]\\d{4}", "\\d{10}", , , "6644923456"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "MS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "664", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MT: [, [, , "[2357-9]\\d{7}", "\\d{8}"],
      [, , "2(?:0(?:1[0-6]|[69]\\d)|[1-357]\\d{2})\\d{4}", "\\d{8}", , , "21001234"],
      [, , "(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}", "\\d{8}", , , "96961234"],
      [, , "800[3467]\\d{4}", "\\d{8}", , , "80071234"],
      [, , "5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168])|[12]\\d0[1-5])\\d{3}", "\\d{8}", , , "50037123"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "3550\\d{4}",
        "\\d{8}", , , "35501234"
      ], "MT", 356, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "7117\\d{4}", "\\d{8}", , , "71171234"], , , [, , "NA", "NA"],
      [, , "501\\d{5}", "\\d{8}", , , "50112345"], , , [, , "NA", "NA"]
    ],
    MU: [, [, , "[2-9]\\d{6,7}", "\\d{7,8}"],
      [, , "(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}", "\\d{7,8}", , , "2012345"],
      [, , "5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[256]\\d|7[15-8])|9[0-8]\\d)\\d{4}", "\\d{8}", , , "52512345"],
      [, , "80[012]\\d{4}", "\\d{7}", , , "8001234"],
      [, , "30\\d{5}", "\\d{7}", , , "3012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "3(?:20|9\\d)\\d{4}", "\\d{7}", , , "3201234"], "MU", 230, "0(?:0|[2-7]0|33)", , , , , , "020", , [
        [, "([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"], "", "", 0],
        [, "(5\\d{3})(\\d{4})", "$1 $2", ["5"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MV: [, [, , "[3467]\\d{6}|9(?:00\\d{7}|\\d{6})", "\\d{7,10}"],
      [, , "(?:3(?:0[01]|3[0-59])|6(?:[567][02468]|8[024689]|90))\\d{4}", "\\d{7}", , , "6701234"],
      [, , "(?:46[46]|7[3-9]\\d|9[16-9]\\d)\\d{4}",
        "\\d{7}", , , "7712345"
      ],
      [, , "NA", "NA"],
      [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MV", 960, "0(?:0|19)", , , , , , "00", , [
        [, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:[1-9]|0[1-9])"], "", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["900"], "", "", 0]
      ], , [, , "781\\d{4}", "\\d{7}", , , "7812345"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MW: [, [, , "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}", "\\d{7,9}"],
      [, , "(?:1[2-9]|21\\d{2})\\d{5}", "\\d{7,9}", , , "1234567"],
      [, , "(?:111|77\\d|88\\d|99\\d)\\d{6}",
        "\\d{9}", , , "991234567"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MW", 265, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "0$1", "", 0],
        [, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1789]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MX: [, [, , "[1-9]\\d{9,10}", "\\d{7,11}"],
      [, , "(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",
        "\\d{7,10}", , , "2221234567"
      ],
      [, , "1(?:(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})", "\\d{11}", , , "12221234567"],
      [, , "800\\d{7}",
        "\\d{10}", , , "8001234567"
      ],
      [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MX", 52, "0[09]", "01", , , "0[12]|04[45](\\d{10})", "1$1", , , [
        [, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[12457-9]|5[89]|8[02-9]|9[0-35-9]"], "01 $1", "", 1],
        [, "(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", "", 1],
        [, "(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[12457-9]|5[89]|8[2-9]|9[1-35-9])"],
          "$1", "", 1
        ]
      ],
      [
        [, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81", "33|55|81"], "01 $1", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[12457-9]|5[89]|8[02-9]|9[0-35-9]", "[2467]|3[12457-9]|5[89]|8[02-9]|9[0-35-9]"], "01 $1", "", 1],
        [, "(1)([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3 $4", ["1(?:33|55|81)"]],
        [, "(1)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1(?:[2467]|3[12457-9]|5[89]|8[2-9]|9[1-35-9])"]]
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    MY: [, [, , "[13-9]\\d{7,9}", "\\d{6,10}"],
      [, , "(?:3[2-9]\\d|[4-9][2-9])\\d{6}", "\\d{6,9}", , , "323456789"],
      [, , "1(?:1[1-3]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}", "\\d{9,10}", , , "123456789"],
      [, , "1[38]00\\d{6}", "\\d{10}", , , "1300123456"],
      [, , "1600\\d{6}", "\\d{10}", , , "1600123456"],
      [, , "NA", "NA"],
      [, , "1700\\d{6}", "\\d{10}", , , "1700123456"],
      [, , "154\\d{7}", "\\d{10}", , , "1541234567"], "MY", 60, "00", "0", , , "0", , , , [
        [, "([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1", "", 0],
        [, "(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1", "", 0],
        [, "([18]\\d)(\\d{3})(\\d{3,4})",
          "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1", "", 0
        ],
        [, "(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0"], "", "", 0],
        [, "(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1", "", 0],
        [, "(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    MZ: [, [, , "[28]\\d{7,8}", "\\d{8,9}"],
      [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", "\\d{8}", , , "21123456"],
      [, , "8[246]\\d{7}", "\\d{9}", , , "821234567"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "MZ", 258, "00", , , , , , , , [
        [, "([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[246]"], "", "", 0],
        [, "(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    NA: [, [, , "[68]\\d{7,8}", "\\d{8,9}"],
      [, , "6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:2\\d|3[378])|4[01]|69|7[014])|2(?:17|25|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[29]|7[01]|81)|4(?:17|2(?:[012]|7?)|4(?:[06]|1\\d)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|69|7[01]))\\d{4}",
        "\\d{8,9}", , , "61221234"
      ],
      [, , "(?:60|8[125])\\d{7}", "\\d{9}", , , "811234567"],
      [, , "NA", "NA"],
      [, , "8701\\d{5}", "\\d{9}", , , "870123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "8(3\\d{2}|86)\\d{5}", "\\d{8,9}", , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [
        [, "(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1235]"], "0$1", "", 0],
        [, "(6\\d)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["6"], "0$1", "", 0],
        [, "(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1", "", 0],
        [, "(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, ,
        "NA", "NA"
      ], , , [, , "NA", "NA"]
    ],
    NC: [, [, , "[2-57-9]\\d{5}", "\\d{6}"],
      [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", "\\d{6}", , , "201234"],
      [, , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", "\\d{6}", , , "751234"],
      [, , "NA", "NA"],
      [, , "36\\d{4}", "\\d{6}", , , "366711"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NC", 687, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    NE: [, [, , "[0289]\\d{7}", "\\d{8}"],
      [, , "2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",
        "\\d{8}", , , "20201234"
      ],
      [, , "(?:89|9[0-46-9])\\d{6}", "\\d{8}", , , "93123456"],
      [, , "08\\d{6}", "\\d{8}", , , "08123456"],
      [, , "09\\d{6}", "\\d{8}", , , "09123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NE", 227, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[289]|09"], "", "", 0],
        [, "(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    NF: [, [, , "[13]\\d{5}", "\\d{5,6}"],
      [, , "(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}", "\\d{5,6}", , , "106609"],
      [, , "38\\d{4}", "\\d{5,6}", , , "381234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NF", 672, "00", , , , , , , , [
        [, "(\\d{2})(\\d{4})", "$1 $2", ["1"], "", "", 0],
        [, "(\\d)(\\d{5})", "$1 $2", ["3"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    NG: [, [, , "[1-69]\\d{5,8}|[78]\\d{5,13}", "\\d{5,14}"],
      [, , "[12]\\d{6,7}|9\\d{7}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}", "\\d{5,9}", , , "12345678"],
      [, , "(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70(?:[13-9]\\d|2[1-9])|8(?:0[2-9]|1\\d)\\d)\\d{6}",
        "\\d{8,10}", , , "8021234567"
      ],
      [, , "800\\d{7,11}", "\\d{10,14}", , , "80017591759"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NG", 234, "009", "0", , , "0", , , , [
        [, "([129])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[129]"], "0$1", "", 0],
        [, "([3-8]\\d)(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"], "0$1", "", 0],
        [, "([78]\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]"], "0$1", "", 0],
        [, "([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"], "0$1", "", 0],
        [, "([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"],
          "0$1", "", 0
        ],
        [, "(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "700\\d{7,11}", "\\d{10,14}", , , "7001234567"], , , [, , "NA", "NA"]
    ],
    NI: [, [, , "[1258]\\d{7}", "\\d{8}"],
      [, , "2\\d{7}", "\\d{8}", , , "21234567"],
      [, , "5500\\d{4}|8\\d{7}", "\\d{8}", , , "81234567"],
      [, , "1800\\d{4}", "\\d{8}", , , "18001234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NI", 505, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    NL: [, [, , "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", "\\d{5,10}"],
      [, , "(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}", "\\d{9}", , , "101234567"],
      [, , "6[1-58]\\d{7}", "\\d{9}", , , "612345678"],
      [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234"],
      [, , "90[069]\\d{4,7}", "\\d{7,10}", , , "9061234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "85\\d{7}", "\\d{9}", , , "851234567"], "NL", 31, "00", "0", , , "0", , , , [
        [, "([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"], "0$1", "", 0],
        [, "([1-5]\\d{2})(\\d{3})(\\d{3})",
          "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1", "", 0
        ],
        [, "(6)(\\d{8})", "$1 $2", ["6[0-57-9]"], "0$1", "", 0],
        [, "(66)(\\d{7})", "$1 $2", ["66"], "0$1", "", 0],
        [, "(14)(\\d{3,4})", "$1 $2", ["14"], "$1", "", 0],
        [, "([89]0\\d)(\\d{4,7})", "$1 $2", ["80|9"], "0$1", "", 0]
      ], , [, , "66\\d{7}", "\\d{9}", , , "662345678"], , , [, , "14\\d{3,4}", "\\d{5,6}"],
      [, , "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])", "\\d{5,6}", , , "14020"], , , [, , "NA", "NA"]
    ],
    NO: [, [, , "0\\d{4}|[2-9]\\d{7}", "\\d{5}(?:\\d{3})?"],
      [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", "\\d{8}", , , "21234567"],
      [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", "\\d{8}", , , "41234567"],
      [, , "80[01]\\d{5}", "\\d{8}", , , "80012345"],
      [, , "82[09]\\d{5}", "\\d{8}", , , "82012345"],
      [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", "\\d{8}", , , "81021234"],
      [, , "880\\d{5}", "\\d{8}", , , "88012345"],
      [, , "85[0-5]\\d{5}", "\\d{8}", , , "85012345"], "NO", 47, "00", , , , , , , , [
        [, "([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"], "", "", 0],
        [, "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4", ["[235-7]"], "", "", 0
        ]
      ], , [, , "NA", "NA"], 1, , [, , "NA", "NA"],
      [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", "\\d{5}(?:\\d{3})?", , , "01234"], 1, , [, , "81[23]\\d{5}", "\\d{8}", , , "81212345"]
    ],
    NP: [, [, , "[1-8]\\d{7}|9(?:[1-69]\\d{6}|7[2-6]\\d{5,7}|8\\d{8})", "\\d{6,10}"],
      [, , "(?:1[0124-6]|2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])\\d{6}", "\\d{6,8}", , , "14567890"],
      [, , "9(?:7[45]|8[01456])\\d{7}", "\\d{10}", , , "9841234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NP", 977, "00", "0", , , "0", , , , [
        [, "(1)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1", "", 0],
        [, "(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"], "0$1", "", 0],
        [, "(9\\d{2})(\\d{7})", "$1-$2", ["9(?:7[45]|8)"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    NR: [, [, , "[458]\\d{6}", "\\d{7}"],
      [, , "(?:444|888)\\d{4}", "\\d{7}", , , "4441234"],
      [, , "55[5-9]\\d{4}", "\\d{7}", , , "5551234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NR", 674, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})",
          "$1 $2", , "", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    NU: [, [, , "[1-5]\\d{3}", "\\d{4}"],
      [, , "[34]\\d{3}", "\\d{4}", , , "4002"],
      [, , "[125]\\d{3}", "\\d{4}", , , "1234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NU", 683, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    NZ: [, [, , "6[235-9]\\d{6}|[2-57-9]\\d{7,10}", "\\d{7,11}"],
      [, , "(?:3[2-79]|[49][2-689]|6[235-9]|7[2-5789])\\d{6}|24099\\d{3}", "\\d{7,8}", , , "32345678"],
      [, , "2(?:[028]\\d{7,8}|1(?:0\\d{5,7}|[12]\\d{5,6}|[3-9]\\d{5})|[79]\\d{7})",
        "\\d{8,10}", , , "211234567"
      ],
      [, , "508\\d{6,7}|80\\d{6,8}", "\\d{8,10}", , , "800123456"],
      [, , "90\\d{7,9}", "\\d{9,11}", , , "900123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [
        [, "([34679])(\\d{3})(\\d{4})", "$1-$2 $3", ["[3467]|9[1-9]"], "0$1", "", 0],
        [, "(24099)(\\d{3})", "$1 $2", ["240", "2409", "24099"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|86"], "0$1", "", 0],
        [, "(2\\d)(\\d{3,4})(\\d{4})",
          "$1 $2 $3", ["2[028]"], "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"], "0$1", "", 0]
      ], , [, , "[28]6\\d{6,7}", "\\d{8,9}", , , "26123456"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    OM: [, [, , "(?:2[2-6]|5|9[1-9])\\d{6}|800\\d{5,6}", "\\d{7,9}"],
      [, , "2[2-6]\\d{6}", "\\d{8}", , , "23123456"],
      [, , "9[1-9]\\d{6}", "\\d{8}", , , "92123456"],
      [, , "8007\\d{4,5}|500\\d{4}", "\\d{7,9}", , , "80071234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "OM", 968, "00", , , , , , , , [
        [, "(2\\d)(\\d{6})", "$1 $2", ["2"], "", "", 0],
        [, "(9\\d{3})(\\d{4})", "$1 $2", ["9"], "", "", 0],
        [, "([58]00)(\\d{4,6})", "$1 $2", ["[58]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PA: [, [, , "[1-9]\\d{6,7}", "\\d{7,8}"],
      [, , "(?:1(?:0[02-579]|19|2[37]|3[03]|4[479]|57|65|7[016-8]|8[58]|9[134])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:0[0-7]|1[14-7]|2[0-3]|3[03]|4[0457]|5[56]|6[068]|7[078]|80|9\\d)|4(?:3[013-59]|4\\d|7[0-689])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|[349]0|5[6-9]|7[0-24-7]|8[89])|8(?:[34]\\d|5[0-4]|8[02])|9(?:0[78]|1[0178]|2[0378]|3[379]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}",
        "\\d{7}", , , "2001234"
      ],
      [, , "(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[04-9]\\d|1[0-5]|2[0-7]|3[5-9])\\d{5}", "\\d{7,8}", , , "60012345"],
      [, , "80[09]\\d{4}", "\\d{7}", , , "8001234"],
      [, , "(?:779|8(?:2[235]|55|60|7[578]|86|95)|9(?:0[0-2]|81))\\d{4}", "\\d{7}", , , "8601234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "PA", 507, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"], "", "", 0],
        [, "(\\d{4})(\\d{4})", "$1-$2", ["6"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PE: [, [, , "[14-9]\\d{7,8}",
      "\\d{6,9}"
    ],
      [, , "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", "\\d{6,8}", , , "11234567"],
      [, , "9\\d{8}", "\\d{9}", , , "912345678"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "805\\d{5}", "\\d{8}", , , "80512345"],
      [, , "801\\d{5}", "\\d{8}", , , "80112345"],
      [, , "80[24]\\d{5}", "\\d{8}", , , "80212345"],
      [, , "NA", "NA"], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [
        [, "(1)(\\d{7})", "$1 $2", ["1"], "(0$1)", "", 0],
        [, "([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"], "(0$1)", "", 0],
        [, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)",
          "", 0
        ],
        [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PF: [, [, , "[2-79]\\d{5}|8\\d{5,7}", "\\d{6}(?:\\d{2})?"],
      [, , "(?:4(?:[02-9]\\d|1[02-9])|[5689]\\d{2})\\d{3}", "\\d{6}", , , "401234"],
      [, , "(?:[27]\\d{2}|3[0-79]\\d|411|89\\d{3})\\d{3}", "\\d{6}(?:\\d{2})?", , , "212345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "PF", 689, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["89"], "", "", 0],
        [, "(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3", , "", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "44\\d{4}", "\\d{6}", , , "441234"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PG: [, [, , "[1-9]\\d{6,7}", "\\d{7,8}"],
      [, , "(?:3[0-2]\\d|4[25]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}", "\\d{7}", , , "3123456"],
      [, , "(?:68|7(?:[0-369]\\d|75))\\d{5}", "\\d{7,8}", , , "6812345"],
      [, , "180\\d{4}", "\\d{7}", , , "1801234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "275\\d{4}", "\\d{7}", , , "2751234"], "PG", 675, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[1-689]"], "", "", 0],
        [, "(7\\d{3})(\\d{4})", "$1 $2", ["7"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PH: [, [, , "2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}", "\\d{5,13}"],
      [, , "2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})", "\\d{5,10}", , , "21234567"],
      [, , "(?:81[37]|9(?:0[5-9]|1[025-9]|2[0-35-9]|3[02-9]|4[236-9]|7[3479]|89|9[46-9]))\\d{7}", "\\d{10}", , , "9051234567"],
      [, , "1800\\d{7,9}", "\\d{11,13}", , , "180012345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "PH", 63, "00", "0", , , "0", , , , [
        [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)", "", 0],
        [, "(2)(\\d{5})", "$1 $2", ["2"], "(0$1)", "", 0],
        [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)", "", 0],
        [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)", "", 0],
        [, "([3-8]\\d)(\\d{3})(\\d{4})",
          "$1 $2 $3", ["[3-8]"], "(0$1)", "", 0
        ],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1", "", 0],
        [, "(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "", "", 0],
        [, "(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PK: [, [, , "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))", "\\d{6,12}"],
      [, , "(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}",
        "\\d{6,10}", , , "2123456789"
      ],
      [, , "3(?:0\\d|1[1-5]|2[0-5]|3[1-6]|4[1-7]|55|64)\\d{7}", "\\d{10}", , , "3012345678"],
      [, , "800\\d{5}", "\\d{8}", , , "80012345"],
      [, , "900\\d{5}", "\\d{8}", , , "90012345"],
      [, , "NA", "NA"],
      [, , "122\\d{6}", "\\d{9}", , , "122044444"],
      [, , "NA", "NA"], "PK", 92, "00", "0", , , "0", , , , [
        [, "(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"],
          "(0$1)", "", 0
        ],
        [, "(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"], "(0$1)", "", 0],
        [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)", "", 0],
        [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]"], "(0$1)", "", 0],
        [, "(3\\d{2})(\\d{7})",
          "$1 $2", ["3"], "0$1", "", 0
        ],
        [, "([15]\\d{3})(\\d{5,6})", "$1 $2", ["58[12]|1"], "(0$1)", "", 0],
        [, "(586\\d{2})(\\d{5})", "$1 $2", ["586"], "(0$1)", "", 0],
        [, "([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", "\\d{11,12}", , , "21111825888"], , , [, , "NA", "NA"]
    ],
    PL: [, [, , "[1-58]\\d{6,8}|9\\d{8}|[67]\\d{5,8}", "\\d{6,9}"],
      [, , "(?:1[2-8]|2[2-59]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-6]|8[1-7])\\d{5,7}|77\\d{4,7}|(?:89|9[145])\\d{7}", "\\d{6,9}", , , "123456789"],
      [, , "(?:5[013]|6[069]|7[2389]|88)\\d{7}", "\\d{9}", , , "512345678"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "70\\d{7}", "\\d{9}", , , "701234567"],
      [, , "801\\d{6}", "\\d{9}", , , "801234567"],
      [, , "NA", "NA"],
      [, , "39\\d{7}", "\\d{9}", , , "391234567"], "PL", 48, "00", , , , , , , , [
        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[124]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"],
          "", "", 0
        ],
        [, "(\\d{2})(\\d{4,6})", "$1 $2", ["[124]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-7]"], "", "", 0],
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|5[013]|6[0469]|7[02389]|8[08]"], "", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"], "", "", 0],
        [, "(\\d{3})(\\d{3})", "$1 $2", ["64"], "", "", 0]
      ], , [, , "642\\d{3,6}", "\\d{6,9}", , , "642123456"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PM: [, [, , "[45]\\d{5}", "\\d{6}"],
      [, , "41\\d{4}", "\\d{6}", , , "411234"],
      [, , "55\\d{4}", "\\d{6}", , , "551234"],
      [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "PM", 508, "00", "0", , , "0", , , , [
        [, "([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PR: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "(?:787|939)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "7872345678"],
      [, , "(?:787|939)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "7872345678"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}",
        "\\d{10}", , , "5002345678"
      ],
      [, , "NA", "NA"], "PR", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "787|939", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PS: [, [, , "[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})", "\\d{4,10}"],
      [, , "(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}", "\\d{7,8}", , , "22234567"],
      [, , "5[69]\\d{7}", "\\d{9}", , , "599123456"],
      [, , "1800\\d{6}", "\\d{10}", , , "1800123456"],
      [, , "1(?:4|9\\d)\\d{2}", "\\d{4,5}", , , "19123"],
      [, , "1700\\d{6}", "\\d{10}", , , "1700123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "PS", 970, "00", "0", , ,
      "0", , , , [
        [, "([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1", "", 0],
        [, "(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1", "", 0],
        [, "(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]"], "$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PT: [, [, , "[2-46-9]\\d{8}", "\\d{9}"],
      [, , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", "\\d{9}", , , "212345678"],
      [, , "9(?:[136]\\d{2}|2[0-79]\\d|480)\\d{5}", "\\d{9}", , , "912345678"],
      [, , "80[02]\\d{6}", "\\d{9}", , , "800123456"],
      [, , "76(?:0[1-57]|1[2-47]|2[237])\\d{5}", "\\d{9}", , , "760123456"],
      [, , "80(?:8\\d|9[1579])\\d{5}", "\\d{9}", , , "808123456"],
      [, , "884[128]\\d{5}", "\\d{9}", , , "884123456"],
      [, , "30\\d{7}", "\\d{9}", , , "301234567"], "PT", 351, "00", , , , , , , , [
        [, "(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"], "", "", 0],
        [, "([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "70(?:7\\d|8[17])\\d{5}", "\\d{9}", , , "707123456"], , , [, , "NA", "NA"]
    ],
    PW: [, [, , "[2-8]\\d{6}", "\\d{7}"],
      [, , "2552255|(?:277|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76))\\d{4}",
        "\\d{7}", , , "2771234"
      ],
      [, , "(?:6[234689]0|77[45789])\\d{4}", "\\d{7}", , , "6201234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "PW", 680, "01[12]", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    PY: [, [, , "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", "\\d{5,9}"],
      [, , "(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}",
        "\\d{5,9}", , , "212345678"
      ],
      [, , "9(?:6[12]|[78][1-6]|9[1-5])\\d{6}", "\\d{9}", , , "961456789"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "8700[0-4]\\d{4}", "\\d{9}", , , "870012345"], "PY", 595, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{5,7})", "$1 $2", ["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"], "($1)", "", 0],
        [, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1", "", 0],
        [, "(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8700"], "", "", 0],
        [, "(\\d{3})(\\d{4,6})", "$1 $2", ["[2-8][1-9]"], "($1)", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "[2-9]0\\d{4,7}", "\\d{6,9}", , , "201234567"], , , [, , "NA", "NA"]
    ],
    QA: [, [, , "[2-8]\\d{6,7}", "\\d{7,8}"],
      [, , "4[04]\\d{6}", "\\d{7,8}", , , "44123456"],
      [, , "[3567]\\d{7}", "\\d{7,8}", , , "33123456"],
      [, , "800\\d{4}", "\\d{7,8}", , , "8001234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "QA", 974, "00", , , , , , , , [
        [, "([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"], "", "", 0],
        [, "([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"], "", "", 0]
      ], , [, , "2(?:[12]\\d|61)\\d{4}", "\\d{7}", , , "2123456"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    RE: [, [, , "[268]\\d{8}", "\\d{9}"],
      [, , "262\\d{6}", "\\d{9}", , , "262161234"],
      [, , "6(?:9[23]|47)\\d{6}", "\\d{9}", , , "692123456"],
      [, , "80\\d{7}", "\\d{9}", , , "801234567"],
      [, , "89[1-37-9]\\d{6}", "\\d{9}", , , "891123456"],
      [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", "\\d{9}", , , "810123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "RE", 262, "00", "0", , , "0", , , , [
        [, "([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1", "", 0]
      ], , [, , "NA", "NA"], 1, "262|6[49]|8", [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ], , , [, , "NA", "NA"]
    ],
    RO: [, [, , "2\\d{5,8}|[37-9]\\d{8}", "\\d{6,9}"],
      [, , "2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3[13-6]\\d{7}", "\\d{6,9}", , , "211234567"],
      [, , "7(?:000|[1-8]\\d{2}|99\\d)\\d{5}", "\\d{9}", , , "712345678"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "90[036]\\d{6}", "\\d{9}", , , "900123456"],
      [, , "801\\d{6}", "\\d{9}", , , "801123456"],
      [, , "802\\d{6}", "\\d{9}", , , "802123456"],
      [, , "NA", "NA"], "RO", 40, "00", "0", " int ", , "0", , , , [
        [, "([237]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1", "", 0],
        [,
          "(21)(\\d{4})", "$1 $2", ["21"], "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"], "0$1", "", 0],
        [, "(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "37\\d{7}", "\\d{9}", , , "372123456"], , , [, , "NA", "NA"]
    ],
    RS: [, [, , "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", "\\d{5,12}"],
      [, , "(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}", "\\d{5,12}", , , "10234567"],
      [, , "6(?:[0-689]|7\\d)\\d{6,7}",
        "\\d{8,10}", , , "601234567"
      ],
      [, , "800\\d{3,9}", "\\d{6,12}", , , "80012345"],
      [, , "(?:90[0169]|78\\d)\\d{3,7}", "\\d{6,12}", , , "90012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "RS", 381, "00", "0", , , "0", , , , [
        [, "([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"], "0$1", "", 0],
        [, "([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"], "0$1", "", 0],
        [, "(6\\d)(\\d{6,8})", "$1 $2", ["6"], "0$1", "", 0],
        [, "([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"], "0$1", "", 0],
        [, "(7[26])(\\d{4,9})", "$1 $2", ["7[26]"],
          "0$1", "", 0
        ],
        [, "(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "7[06]\\d{4,10}", "\\d{6,12}", , , "700123456"], , , [, , "NA", "NA"]
    ],
    RU: [, [, , "[3489]\\d{9}", "\\d{10}"],
      [, , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-7]|7[1-37-9]))\\d{7}", "\\d{10}", , , "3011234567"],
      [, , "9\\d{9}", "\\d{10}", , , "9123456789"],
      [, , "80[04]\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "80[39]\\d{7}", "\\d{10}", , , "8091234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "RU", 7, "810", "8", , , "8", , "8~10", , [
        [, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[1-79]"], "$1", "", 1],
        [, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[34689]"], "8 ($1)", "", 1],
        [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", "", 1]
      ],
      [
        [, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[34689]", "[34689]"], "8 ($1)", "", 1],
        [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7", "7"], "8 ($1)", "", 1]
      ],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ], , , [, , "NA", "NA"]
    ],
    RW: [, [, , "[027-9]\\d{7,8}", "\\d{8,9}"],
      [, , "2[258]\\d{7}|06\\d{6}", "\\d{8,9}", , , "250123456"],
      [, , "7[238]\\d{7}", "\\d{9}", , , "720123456"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "900\\d{6}", "\\d{9}", , , "900123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "RW", 250, "00", "0", , , "0", , , , [
        [, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "$1", "", 0],
        [, "([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1", "", 0],
        [, "(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"], "", "", 0]
      ], , [, , "NA",
        "NA"
      ], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    SA: [, [, , "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}", "\\d{7,10}"],
      [, , "11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", "\\d{7,9}", , , "112345678"],
      [, , "(?:5[013-689]|811)\\d{7}", "\\d{9,10}", , , "512345678"],
      [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "NA", "NA"],
      [, , "92[05]\\d{6}", "\\d{9}", , , "920012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "SA", 966, "00", "0", , , "0", , , , [
        [, "([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"], "0$1", "", 0],
        [, "(1\\d)(\\d{3})(\\d{4})",
          "$1 $2 $3", ["1[1-467]"], "0$1", "", 0
        ],
        [, "(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1", "", 0],
        [, "(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1", "", 0],
        [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "$1", "", 0],
        [, "(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SB: [, [, , "[1-9]\\d{4,6}", "\\d{5,7}"],
      [, , "(?:1[4-79]|[23]\\d|4[01]|5[03]|6[0-37])\\d{3}", "\\d{5}", , , "40123"],
      [, , "48\\d{3}|7(?:[46-8]\\d|5[025-9]|90)\\d{4}|8[4-8]\\d{5}|9(?:[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}",
        "\\d{5,7}", , , "7421234"
      ],
      [, , "1[38]\\d{3}", "\\d{5}", , , "18123"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "5[12]\\d{3}", "\\d{5}", , , "51123"], "SB", 677, "0[01]", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[7-9]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SC: [, [, , "[24689]\\d{5,6}", "\\d{6,7}"],
      [, , "4[2-46]\\d{5}", "\\d{7}", , , "4217123"],
      [, , "2[5-8]\\d{5}", "\\d{7}", , , "2510123"],
      [, , "8000\\d{2}", "\\d{6}", , , "800000"],
      [, , "98\\d{4}", "\\d{6}", , , "981234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "64\\d{5}",
        "\\d{7}", , , "6412345"
      ], "SC", 248, "0[0-2]", , , , , , "00", , [
        [, "(\\d{3})(\\d{3})", "$1 $2", ["[89]"], "", "", 0],
        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SD: [, [, , "[19]\\d{8}", "\\d{9}"],
      [, , "1(?:[125]\\d|8[3567])\\d{6}", "\\d{9}", , , "121231234"],
      [, , "9[012569]\\d{7}", "\\d{9}", , , "911231234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "SD", 249, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SE: [, [, , "[1-9]\\d{5,9}", "\\d{5,10}"],
      [, , "1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:0[1-9]\\d{4,6}|[246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:0[1-9]\\d{4,6}|3\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8[1-9]\\d{5,7}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})",
        "\\d{5,9}", , , "8123456"
      ],
      [, , "7[0236]\\d{7}", "\\d{9}", , , "701234567"],
      [, , "20(?:0(?:0\\d{2}|[1-9](?:0\\d{1,4}|[1-9]\\d{4}))|1(?:0\\d{4}|[1-9]\\d{4,5})|[2-9]\\d{5})", "\\d{6,9}", , , "20123456"],
      [, , "9(?:00|39|44)(?:1(?:[0-26]\\d{5}|[3-57-9]\\d{2})|2(?:[0-2]\\d{5}|[3-9]\\d{2})|3(?:[0139]\\d{5}|[24-8]\\d{2})|4(?:[045]\\d{5}|[1-36-9]\\d{2})|5(?:5\\d{5}|[0-46-9]\\d{2})|6(?:[679]\\d{5}|[0-58]\\d{2})|7(?:[078]\\d{5}|[1-69]\\d{2})|8(?:[578]\\d{5}|[0-469]\\d{2}))", "\\d{7}(?:\\d{3})?", , , "9001234567"],
      [, , "77(?:0(?:0\\d{2}|[1-9](?:0\\d|[1-9]\\d{4}))|[1-6][1-9]\\d{5})",
        "\\d{6}(?:\\d{3})?", , , "771234567"
      ],
      [, , "75[1-8]\\d{6}", "\\d{9}", , , "751234567"],
      [, , "NA", "NA"], "SE", 46, "00", "0", , , "0", , , , [
        [, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", "", 0],
        [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], "0$1", "", 0],
        [, "([1-69]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["1[13689]|2[136]|3[1356]|4[0246]|54|6[03]|90"], "0$1", "", 0],
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"],
          "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1", "", 0],
        [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1", "", 0],
        [, "(77)(\\d{2})(\\d{2})", "$1-$2$3", ["7"], "0$1", "", 0],
        [, "(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", "", 0],
        [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], "0$1", "", 0],
        [, "(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], "0$1", "", 0]
      ],
      [
        [, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})",
          "$1 $2 $3 $4", ["8"]
        ],
        [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]],
        [, "([1-69]\\d)(\\d{3})(\\d{2})", "$1 $2 $3", ["1[13689]|2[136]|3[1356]|4[0246]|54|6[03]|90"]],
        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"]],
        [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"]],
        [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4", ["7"]
        ],
        [, "(77)(\\d{2})(\\d{2})", "$1 $2 $3", ["7"]],
        [, "(20)(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]],
        [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9[034]"]],
        [, "(9[034]\\d)(\\d{4})", "$1 $2", ["9[034]"]]
      ],
      [, , "74[02-9]\\d{6}", "\\d{9}", , , "740123456"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SG: [, [, , "[36]\\d{7}|[17-9]\\d{7,10}", "\\d{8,11}"],
      [, , "6[1-9]\\d{6}", "\\d{8}", , , "61234567"],
      [, , "(?:8[1-7]|9[0-8])\\d{6}", "\\d{8}", , , "81234567"],
      [, , "1?800\\d{7}", "\\d{10,11}", , , "18001234567"],
      [, , "1900\\d{7}", "\\d{11}", , , "19001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "3[12]\\d{6}", "\\d{8}", , , "31234567"], "SG", 65, "0[0-3]\\d", , , , , , , , [
        [, "([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"], "", "", 0],
        [, "(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]"], "", "", 0],
        [, "(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["70"], "", "", 0],
        [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "7000\\d{7}", "\\d{11}", , , "70001234567"], , , [, , "NA", "NA"]
    ],
    SH: [, [, , "[2-79]\\d{3,4}", "\\d{4,5}"],
      [, , "2(?:[0-57-9]\\d|6[4-9])\\d{2}|(?:[2-46]\\d|7[01])\\d{2}",
        "\\d{4,5}", , , "2158"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "(?:[59]\\d|7[2-9])\\d{2}", "\\d{4,5}", , , "5012"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "SH", 290, "00", , , , , , , , , , [, , "NA", "NA"], 1, , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SI: [, [, , "[1-7]\\d{6,7}|[89]\\d{4,7}", "\\d{5,8}"],
      [, , "(?:1\\d|[25][2-8]|3[4-8]|4[24-8]|7[3-8])\\d{6}", "\\d{7,8}", , , "11234567"],
      [, , "(?:[37][01]|4[019]|51|6[48])\\d{6}", "\\d{8}", , , "31234567"],
      [, , "80\\d{4,6}", "\\d{6,8}", , , "80123456"],
      [, , "90\\d{4,6}|89[1-3]\\d{2,5}", "\\d{5,8}", , , "90123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "(?:59|8[1-3])\\d{6}", "\\d{8}", , , "59012345"], "SI", 386, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|3[4-8]|4[24-8]|5[2-8]|7[3-8]"], "(0$1)", "", 0],
        [, "([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[019]|51|6"], "0$1", "", 0],
        [, "([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"], "0$1", "", 0],
        [, "([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SJ: [, [, , "0\\d{4}|[4789]\\d{7}",
      "\\d{5}(?:\\d{3})?"
    ],
      [, , "79\\d{6}", "\\d{8}", , , "79123456"],
      [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", "\\d{8}", , , "41234567"],
      [, , "80[01]\\d{5}", "\\d{8}", , , "80012345"],
      [, , "82[09]\\d{5}", "\\d{8}", , , "82012345"],
      [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", "\\d{8}", , , "81021234"],
      [, , "880\\d{5}", "\\d{8}", , , "88012345"],
      [, , "85[0-5]\\d{5}", "\\d{8}", , , "85012345"], "SJ", 47, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", "\\d{5}(?:\\d{3})?", , , "01234"], 1, , [, , "81[23]\\d{5}", "\\d{8}", , , "81212345"]
    ],
    SK: [, [, , "[2-689]\\d{8}", "\\d{9}"],
      [, , "[2-5]\\d{8}", "\\d{9}", , , "212345678"],
      [, , "9(?:0[1-8]|1[0-24-9]|4[0489])\\d{6}", "\\d{9}", , , "912123456"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "9(?:[78]\\d{7}|00\\d{6})", "\\d{9}", , , "900123456"],
      [, , "8[5-9]\\d{7}", "\\d{9}", , , "850123456"],
      [, , "NA", "NA"],
      [, , "6(?:5[0-4]|9[0-6])\\d{6}", "\\d{9}", , , "690123456"], "SK", 421, "00", "0", , , "0", , , , [
        [, "(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1", "", 0],
        [, "([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1",
          "", 0
        ],
        [, "([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "(?:8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}", "\\d{9}", , , "800123456"],
      [, , "96\\d{7}", "\\d{9}", , , "961234567"], , , [, , "NA", "NA"]
    ],
    SL: [, [, , "[2-578]\\d{7}", "\\d{6,8}"],
      [, , "[235]2[2-4][2-9]\\d{4}", "\\d{6,8}", , , "22221234"],
      [, , "(?:2[15]|3[034]|4[04]|5[05]|7[6-9]|88)\\d{6}", "\\d{6,8}", , , "25123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "SL", 232, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{6})",
          "$1 $2", , "(0$1)", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SM: [, [, , "[05-7]\\d{7,9}", "\\d{6,10}"],
      [, , "0549(?:8[0157-9]|9\\d)\\d{4}", "\\d{6,10}", , , "0549886377"],
      [, , "6[16]\\d{6}", "\\d{8}", , , "66661212"],
      [, , "NA", "NA"],
      [, , "7[178]\\d{6}", "\\d{8}", , , "71123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "5[158]\\d{6}", "\\d{8}", , , "58001110"], "SM", 378, "00", , , , "(?:0549)?([89]\\d{5})", "0549$1", , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"], "", "", 0],
        [, "(0549)(\\d{6})", "$1 $2", ["0"],
          "", "", 0
        ],
        [, "(\\d{6})", "0549 $1", ["[89]"], "", "", 0]
      ],
      [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]", "[5-7]"], "", "", 0],
        [, "(0549)(\\d{6})", "($1) $2", ["0"]],
        [, "(\\d{6})", "(0549) $1", ["[89]"]]
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    SN: [, [, , "[37]\\d{8}", "\\d{9}"],
      [, , "3(?:0(?:1[01]|80)|3(?:8[1-9]|9[2-9]))\\d{5}", "\\d{9}", , , "301012345"],
      [, , "7(?:0(?:[01279]0|3[03]|4[05]|5[06]|6[03-5]|8[029])|6(?:1[23]|2[89]|3[3489]|4[6-9]|5\\d|6[3-9]|7[45]|8[3-8])|7\\d{2}|8(?:01|1[01]))\\d{5}",
        "\\d{9}", , , "701012345"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "33301\\d{4}", "\\d{9}", , , "333011234"], "SN", 221, "00", , , , , , , , [
        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SO: [, [, , "[1-79]\\d{6,8}", "\\d{7,9}"],
      [, , "(?:[134]\\d|2[0-79]|5[57-9])\\d{5}", "\\d{7}", , , "5522010"],
      [, , "(?:15\\d|2(?:4\\d|8)|6[137-9]?\\d{2}|7\\d{2}|9(?:07|[19])\\d)\\d{5}", "\\d{7,9}", , , "907792024"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "SO", 252, "00", "0", , , "0", , , , [
        [, "(\\d)(\\d{6})", "$1 $2", ["2[0-79]|[13-5]"], "", "", 0],
        [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"], "", "", 0],
        [, "(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1378]|9"], "", "", 0],
        [, "(69\\d)(\\d{6})", "$1 $2", ["69"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SR: [, [, , "[2-8]\\d{5,6}", "\\d{6,7}"],
      [, , "(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}", "\\d{6,7}", , , "211234"],
      [, , "(?:7[1-57]|8[1-9])\\d{5}", "\\d{7}", , , "7412345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "56\\d{4}", "\\d{6}", , , "561234"], "SR", 597, "00", , , , , , , , [
        [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"], "", "", 0],
        [, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"], "", "", 0],
        [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SS: [, [, , "[19]\\d{8}", "\\d{9}"],
      [, , "18\\d{7}", "\\d{9}", , , "181234567"],
      [, , "(?:12|9[1257])\\d{7}", "\\d{9}", , , "977123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ], "SS", 211, "00", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    ST: [, [, , "[29]\\d{6}", "\\d{7}"],
      [, , "22\\d{5}", "\\d{7}", , , "2221234"],
      [, , "9[89]\\d{5}", "\\d{7}", , , "9812345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "ST", 239, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SV: [, [, , "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", "\\d{7,8}|\\d{11}"],
      [, , "2[1-6]\\d{6}", "\\d{8}", , , "21234567"],
      [, , "[67]\\d{7}", "\\d{8}", , , "70123456"],
      [, , "800\\d{4}(?:\\d{4})?", "\\d{7}(?:\\d{4})?", , , "8001234"],
      [, , "900\\d{4}(?:\\d{4})?", "\\d{7}(?:\\d{4})?", , , "9001234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "SV", 503, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"], "", "", 0],
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"], "", "", 0],
        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SX: [, [, , "[5789]\\d{9}",
      "\\d{7}(?:\\d{3})?"
    ],
      [, , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7215425678"],
      [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", "\\d{10}", , , "7215205678"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "SX", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "721", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SY: [, [, , "[1-59]\\d{7,8}", "\\d{6,9}"],
      [, , "(?:1(?:1\\d?|4\\d|[2356])|2[1-35]|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}",
        "\\d{6,9}", , , "112345678"
      ],
      [, , "9(?:22|[35][0-8]|4\\d|6[024-9]|88|9[0-489])\\d{6}", "\\d{9}", , , "944567890"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "SY", 963, "00", "0", , , "0", , , , [
        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", "", 1],
        [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", "", 1]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    SZ: [, [, , "[027]\\d{7}", "\\d{8}"],
      [, , "2(?:2(?:0[07]|[13]7|2[57])|3(?:0[34]|[1278]3|3[23]|[46][34])|(?:40[4-69]|67)|5(?:0[5-7]|1[6-9]|[23][78]|48|5[01]))\\d{4}",
        "\\d{8}", , , "22171234"
      ],
      [, , "7[6-8]\\d{6}", "\\d{8}", , , "76123456"],
      [, , "0800\\d{4}", "\\d{8}", , , "08001234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "SZ", 268, "00", , , , , , , , [
        [, "(\\d{4})(\\d{4})", "$1 $2", ["[027]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "0800\\d{4}", "\\d{8}", , , "08001234"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    TA: [, [, , "8\\d{3}", "\\d{4}"],
      [, , "8\\d{3}", "\\d{4}", , , "8999"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TA", 290, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TC: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "649(?:712|9(?:4\\d|50))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6497121234"],
      [, , "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-7])|4[34][12])\\d{4}", "\\d{10}", , , "6492311234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "64971[01]\\d{4}", "\\d{10}", , , "6497101234"], "TC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "649", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TD: [, [, , "[2679]\\d{7}", "\\d{8}"],
      [, , "22(?:[3789]0|5[0-5]|6[89])\\d{4}", "\\d{8}", , , "22501234"],
      [, , "(?:6[02368]\\d|77\\d|9(?:5[0-4]|9\\d))\\d{5}", "\\d{8}", , , "63012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TD", 235, "00|16", , , , , , "00", , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TG: [, [, , "[29]\\d{7}", "\\d{8}"],
      [, , "2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}",
        "\\d{8}", , , "22212345"
      ],
      [, , "9[0-289]\\d{6}", "\\d{8}", , , "90112345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TG", 228, "00", , , , , , , , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TH: [, [, , "[2-9]\\d{7,8}|1\\d{3}(?:\\d{6})?", "\\d{4}|\\d{8,10}"],
      [, , "(?:2[1-9]|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", "\\d{8}", , , "21234567"],
      [, , "[89]\\d{8}", "\\d{9}", , , "812345678"],
      [, , "1800\\d{6}", "\\d{10}", , , "1800123456"],
      [, , "1900\\d{6}", "\\d{10}", , , "1900123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "60\\d{7}", "\\d{9}", , , "601234567"], "TH", 66, "00", "0", , , "0", , , , [
        [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1", "", 0],
        [, "([3-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[3-9]"], "0$1", "", 0],
        [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "1\\d{3}", "\\d{4}", , , "1100"],
      [, , "1\\d{3}", "\\d{4}", , , "1100"], , , [, , "NA", "NA"]
    ],
    TJ: [, [, , "[3-59]\\d{8}", "\\d{3,9}"],
      [, , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",
        "\\d{3,9}", , , "372123456"
      ],
      [, , "(?:50[15]|9[0-35-9]\\d)\\d{6}", "\\d{9}", , , "917123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TJ", 992, "810", "8", , , "8", , "8~10", , [
        [, "([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], "(8) $1", "", 1],
        [, "([459]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[48]|5|9(?:1[59]|[0235-9])"], "(8) $1", "", 1],
        [, "(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"], "(8) $1", "", 1],
        [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"],
          "(8) $1", "", 1
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TK: [, [, , "[2-9]\\d{3}", "\\d{4}"],
      [, , "[2-4]\\d{3}", "\\d{4}", , , "3010"],
      [, , "[5-9]\\d{3}", "\\d{4}", , , "5190"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TK", 690, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TL: [, [, , "[2-489]\\d{6}|7\\d{6,7}", "\\d{7,8}"],
      [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", "\\d{7}", , , "2112345"],
      [, , "7[3-8]\\d{6}", "\\d{8}", , , "77212345"],
      [, , "80\\d{5}", "\\d{7}", , , "8012345"],
      [, , "90\\d{5}", "\\d{7}", , , "9012345"],
      [, , "NA", "NA"],
      [, , "70\\d{5}", "\\d{7}", , , "7012345"],
      [, , "NA", "NA"], "TL", 670, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]"], "", "", 0],
        [, "(\\d{4})(\\d{4})", "$1 $2", ["7"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TM: [, [, , "[1-6]\\d{7}", "\\d{8}"],
      [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", "\\d{8}", , , "12345678"],
      [, , "6[3-8]\\d{6}", "\\d{8}", , , "66123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TM", 993, "810", "8", , , "8", , "8~10", , [
        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)", "", 0],
        [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1", "", 0],
        [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"], "(8 $1)", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TN: [, [, , "[2-57-9]\\d{7}", "\\d{8}"],
      [, , "(?:3[012]|7\\d|81)\\d{6}", "\\d{8}", , , "71234567"],
      [, , "(?:[259]\\d|4[0-2])\\d{6}", "\\d{8}", , , "20123456"],
      [, , "NA", "NA"],
      [, , "8[028]\\d{6}", "\\d{8}", , , "80123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TN", 216, "00", , , , , , , , [
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TO: [, [, , "[02-8]\\d{4,6}", "\\d{5,7}"],
      [, , "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", "\\d{5}", , , "20123"],
      [, , "(?:7[578]|8[7-9])\\d{5}", "\\d{7}", , , "7715123"],
      [, , "0800\\d{3}", "\\d{7}", , , "0800222"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TO", 676, "00", , , , , , , , [
        [, "(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"], "", "", 0],
        [, "(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[7-9]"], "", "", 0],
        [, "(\\d{4})(\\d{3})", "$1 $2", ["0"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    TR: [, [, , "[2-589]\\d{9}|444\\d{4}", "\\d{7,10}"],
      [, , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", "\\d{10}", , , "2123456789"],
      [, , "5(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{7}", "\\d{10}", , , "5012345678"],
      [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TR", 90, "00", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[589]"], "0$1", "", 1],
        [, "(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"], "", "", 0]
      ], , [, , "512\\d{7}", "\\d{10}", , , "5123456789"], , , [, , "444\\d{4}", "\\d{7}", , , "4441444"],
      [, , "444\\d{4}|850\\d{7}", "\\d{7,10}", , , "4441444"], , , [, , "NA", "NA"]
    ],
    TT: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "868(?:2(?:01|2[1-5])|6(?:07|1[4-6]|2[1-9]|[3-6]\\d|7[0-79]|9[0-8])|82[12])\\d{4}", "\\d{7}(?:\\d{3})?", , , "8682211234"],
      [, , "868(?:2(?:8[59]|9\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:1[02-9]|[02-9]\\d))\\d{4}", "\\d{10}", , , "8682911234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, ,
        "NA", "NA"
      ], "TT", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "868", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TV: [, [, , "[29]\\d{4,5}", "\\d{5,6}"],
      [, , "2[02-9]\\d{3}", "\\d{5}", , , "20123"],
      [, , "90\\d{4}", "\\d{6}", , , "901234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TV", 688, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TW: [, [, , "[2-9]\\d{7,8}", "\\d{8,9}"],
      [, , "[2-8]\\d{7,8}", "\\d{8,9}", , , "21234567"],
      [, , "9\\d{8}", "\\d{9}", , , "912345678"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "900\\d{6}", "\\d{9}", , , "900123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "TW", 886, "0(?:0[25679]|19)", "0", "#", , "0", , , , [
        [, "([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[2-7]|8[1-9]"], "0$1", "", 0],
        [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["80|9"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    TZ: [, [, , "\\d{9}", "\\d{7,9}"],
      [, , "2[2-8]\\d{7}", "\\d{7,9}", , , "222345678"],
      [, , "(?:6[158]|7[1-9])\\d{7}", "\\d{9}", , , "612345678"],
      [, , "80[08]\\d{6}", "\\d{9}", , , "800123456"],
      [, , "90\\d{7}", "\\d{9}", , , "900123456"],
      [, , "8(?:40|6[01])\\d{6}", "\\d{9}", , , "840123456"],
      [, , "NA", "NA"],
      [, , "41\\d{7}", "\\d{9}", , , "412345678"], "TZ", 255, "00[056]", "0", , , "0", , , , [
        [, "([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1", "", 0],
        [, "([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1", "", 0],
        [, "([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    UA: [, [, , "[3-689]\\d{8}", "\\d{5,9}"],
      [, , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",
        "\\d{5,9}", , , "311234567"
      ],
      [, , "(?:39|50|6[36-8]|9[1-9])\\d{7}", "\\d{9}", , , "391234567"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "900\\d{6}", "\\d{9}", , , "900123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "89\\d{7}", "\\d{9}", , , "891234567"], "UA", 380, "00", "0", , , "0", , "0~0", , [
        [, "([3-689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|9[1-9]"], "0$1", "", 0],
        [, "([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90",
          "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"
        ], "0$1", "", 0],
        [, "([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])", "3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    UG: [, [, , "\\d{9}", "\\d{5,9}"],
      [, , "20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3[23]\\d|5[0-4]\\d|60\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}", "\\d{5,9}", , , "312345678"],
      [, , "7(?:0[0-7]|[15789]\\d|[23]0|[46][0-4])\\d{6}", "\\d{9}", , , "712345678"],
      [, , "800[123]\\d{5}", "\\d{9}", , , "800123456"],
      [, , "90[123]\\d{6}", "\\d{9}", , , "901123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "UG", 256, "00[057]", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{6})", "$1 $2", ["[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"],
          "0$1", "", 0
        ],
        [, "(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"], "0$1", "", 0],
        [, "(2024)(\\d{5})", "$1 $2", ["2024"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    US: [, [, , "[2-9]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "(?:2(?:0[1-35-9]|1[02-9]|2[4589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|47|5[12]|6[01]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[036]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[047]|3[1247]|4[07]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[06-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[1678]|4[0179]|5[1246]|7[0-3589]|8[0459]))[2-9]\\d{6}",
        "\\d{7}(?:\\d{3})?", , , "2015555555"
      ],
      [, , "(?:2(?:0[1-35-9]|1[02-9]|2[4589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|47|5[12]|6[01]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[036]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[047]|3[1247]|4[07]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[06-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[1678]|4[0179]|5[1246]|7[0-3589]|8[0459]))[2-9]\\d{6}",
        "\\d{7}(?:\\d{3})?", , , "2015555555"
      ],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "US", 1, "011", "1", , , "1", , , 1, [
        [, "(\\d{3})(\\d{4})", "$1-$2", , "", "", 1],
        [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", , "", "", 1]
      ],
      [
        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3"]
      ],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    UY: [, [, , "[2489]\\d{6,7}", "\\d{7,8}"],
      [, , "2\\d{7}|4[2-7]\\d{6}",
        "\\d{7,8}", , , "21231234"
      ],
      [, , "9[13-9]\\d{6}", "\\d{8}", , , "94231234"],
      [, , "80[05]\\d{4}", "\\d{7}", , , "8001234"],
      [, , "90[0-8]\\d{4}", "\\d{7}", , , "9001234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "UY", 598, "0(?:1[3-9]\\d|0)", "0", " int. ", , "0", , "00", , [
        [, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"], "", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1", "", 0],
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    UZ: [, [, , "[679]\\d{8}", "\\d{7,9}"],
      [, , "(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", "\\d{7,9}", , , "662345678"],
      [, , "6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}",
        "\\d{7,9}", , , "912345678"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "UZ", 998, "810", "8", , , "8", , "8~10", , [
        [, "([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "8 $1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    VA: [, [, , "06\\d{8}", "\\d{10}"],
      [, , "06698\\d{5}", "\\d{10}", , , "0669812345"],
      [, , "N/A", "N/A"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "VA", 379, "00", , , , , , , , [
        [, "(06)(\\d{4})(\\d{4})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    VC: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8\\d|9[01])|555|638|784)\\d{4}", "\\d{7}(?:\\d{3})?", , , "7842661234"],
      [, , "784(?:4(?:3[0-4]|5[45]|9[2-5])|5(?:2[6-9]|3[0-4]|93))\\d{4}", "\\d{10}", , , "7844301234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"],
      "VC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "784", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    VE: [, [, , "[24589]\\d{9}", "\\d{7,10}"],
      [, , "(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}", "\\d{7,10}", , , "2121234567"],
      [, , "4(?:1[24-8]|2[46])\\d{7}", "\\d{10}", , , "4121234567"],
      [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "VE", 58, "00", "0", , , "0", , , , [
        [, "(\\d{3})(\\d{7})", "$1-$2", , "0$1", "$CC $1", 0]
      ], , [, , "NA", "NA"], , , [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    VG: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})", "\\d{7}(?:\\d{3})?", , , "2842291234"],
      [, , "284(?:(?:3(?:0[0-3]|4[0-367])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})", "\\d{10}", , , "2843001234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "VG", 1,
      "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "284", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    VI: [, [, , "[3589]\\d{9}", "\\d{7}(?:\\d{3})?"],
      [, , "340(?:2(?:01|2[067]|36|44|77)|3(?:32|44)|4(?:4[38]|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:[17]\\d|27)|884|998)\\d{4}", "\\d{7}(?:\\d{3})?", , , "3406421234"],
      [, , "340(?:2(?:01|2[067]|36|44|77)|3(?:32|44)|4(?:4[38]|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:[17]\\d|27)|884|998)\\d{4}", "\\d{7}(?:\\d{3})?", , , "3406421234"],
      [, , "8(?:00|55|66|77|88)[2-9]\\d{6}",
        "\\d{10}", , , "8002345678"
      ],
      [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
      [, , "NA", "NA"],
      [, , "5(?:00|33|44)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
      [, , "NA", "NA"], "VI", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "340", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    VN: [, [, , "[17]\\d{6,9}|[2-69]\\d{7,9}|8\\d{6,8}", "\\d{7,10}"],
      [, , "(?:2(?:[025-79]|1[0189]|[348][01])|3(?:[0136-9]|[25][01])|4\\d|5(?:[01][01]|[2-9])|6(?:[0-46-8]|5[01])|7(?:[02-79]|[18][01])|8[1-9])\\d{7}", "\\d{9,10}", , , "2101234567"],
      [, , "(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}",
        "\\d{9,10}", , , "912345678"
      ],
      [, , "1800\\d{4,6}", "\\d{8,10}", , , "1800123456"],
      [, , "1900\\d{4,6}", "\\d{8,10}", , , "1900123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "VN", 84, "00", "0", , , "0", , , , [
        [, "([17]99)(\\d{4})", "$1 $2", ["[17]99"], "0$1", "", 1],
        [, "([48])(\\d{4})(\\d{4})", "$1 $2 $3", ["[48]"], "0$1", "", 1],
        [, "([235-7]\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]"], "0$1", "", 1],
        [, "(80)(\\d{5})", "$1 $2", ["80"], "0$1", "", 1],
        [, "(69\\d)(\\d{4,5})", "$1 $2", ["69"], "0$1", "", 1],
        [, "([235-7]\\d{2})(\\d{4})(\\d{3})",
          "$1 $2 $3", ["2[1348]|3[25]|5[01]|65|7[18]"], "0$1", "", 1
        ],
        [, "(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1", "", 1],
        [, "(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"], "0$1", "", 1],
        [, "(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0"], "$1", "", 1]
      ], , [, , "NA", "NA"], , , [, , "[17]99\\d{4}|69\\d{5,6}", "\\d{7,8}", , , "1992000"],
      [, , "[17]99\\d{4}|69\\d{5,6}|80\\d{5}", "\\d{7,8}", , , "1992000"], , , [, , "NA", "NA"]
    ],
    VU: [, [, , "[2-57-9]\\d{4,6}", "\\d{5,7}"],
      [, , "(?:2[2-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}",
        "\\d{5}", , , "22123"
      ],
      [, , "(?:5(?:7[2-5]|[3-69]\\d)|7[013-7]\\d)\\d{4}", "\\d{7}", , , "5912345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "VU", 678, "00", , , , , , , , [
        [, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "3[03]\\d{3}|900\\d{4}", "\\d{5,7}", , , "30123"], , , [, , "NA", "NA"]
    ],
    WF: [, [, , "[5-7]\\d{5}", "\\d{6}"],
      [, , "(?:50|68|72)\\d{4}", "\\d{6}", , , "501234"],
      [, , "(?:50|68|72)\\d{4}", "\\d{6}", , , "501234"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA",
        "NA"
      ],
      [, , "NA", "NA"], "WF", 681, "00", , , , , , , 1, [
        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    WS: [, [, , "[2-8]\\d{4,6}", "\\d{5,7}"],
      [, , "(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}", "\\d{5,7}", , , "22123"],
      [, , "(?:60|7[25-7]\\d)\\d{4}", "\\d{6,7}", , , "601234"],
      [, , "800\\d{3}", "\\d{6}", , , "800123"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "WS", 685, "0", , , , , , , , [
        [, "(8\\d{2})(\\d{3,4})", "$1 $2", ["8"], "", "", 0],
        [, "(7\\d)(\\d{5})", "$1 $2", ["7"], "",
          "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    YE: [, [, , "[1-7]\\d{6,8}", "\\d{6,9}"],
      [, , "(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", "\\d{6,8}", , , "1234567"],
      [, , "7[0137]\\d{7}", "\\d{9}", , , "712345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "YE", 967, "00", "0", , , "0", , , , [
        [, "([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1", "", 0],
        [, "(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    YT: [, [, , "[268]\\d{8}", "\\d{9}"],
      [, , "2696[0-4]\\d{4}", "\\d{9}", , , "269601234"],
      [, , "639\\d{6}", "\\d{9}", , , "639123456"],
      [, , "80\\d{7}", "\\d{9}", , , "801234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "YT", 262, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , "269|63", [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    ZA: [, [, , "[1-79]\\d{8}|8(?:[067]\\d{7}|[1-4]\\d{3,7})", "\\d{5,9}"],
      [, , "(?:1[0-8]|2[0-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", "\\d{9}", , , "101234567"],
      [, , "(?:6[0-5]|7[0-46-9])\\d{7}|8[1-4]\\d{3,7}", "\\d{5,9}", , , "711234567"],
      [, , "80\\d{7}", "\\d{9}", , , "801234567"],
      [, , "86[2-9]\\d{6}|90\\d{7}", "\\d{9}", , , "862345678"],
      [, , "860\\d{6}", "\\d{9}", , , "860123456"],
      [, , "NA", "NA"],
      [, , "87\\d{7}", "\\d{9}", , , "871234567"], "ZA", 27, "00", "0", , , "0", , , , [
        [, "(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-47]|6[1-9])"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1", "", 0],
        [, "(\\d{2})(\\d{3})(\\d{2,3})",
          "$1 $2 $3", ["8[1-4]"], "0$1", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "861\\d{6}", "\\d{9}", , , "861123456"], , , [, , "NA", "NA"]
    ],
    ZM: [, [, , "[289]\\d{8}", "\\d{9}"],
      [, , "21[1-8]\\d{6}", "\\d{9}", , , "211234567"],
      [, , "9(?:5[05]|6\\d|7[13-9])\\d{6}", "\\d{9}", , , "955123456"],
      [, , "800\\d{6}", "\\d{9}", , , "800123456"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "ZM", 260, "00", "0", , , "0", , , , [
        [, "([29]\\d)(\\d{7})", "$1 $2", ["[29]"], "0$1", "", 0],
        [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    ZW: [, [, , "2(?:[012457-9]\\d{3,8}|6\\d{3,6})|[13-79]\\d{4,8}|8[06]\\d{8}", "\\d{3,10}"],
      [, , "(?:1[3-9]|2(?:0[45]|[16]|2[28]|[49]8?|58[23]|7[246]|8[1346-9])|3(?:08?|17?|3[78]|[2456]|7[1569]|8[379])|5(?:[07-9]|1[78]|483|5(?:7?|8))|6(?:0|28|37?|[45][68][78]|98?)|848)\\d{3,6}|(?:2(?:27|5|7[135789]|8[25])|3[39]|5[1-46]|6[126-8])\\d{4,6}|2(?:(?:0|70)\\d{5,6}|2[05]\\d{7})|(?:4\\d|9[2-8])\\d{4,7}", "\\d{3,10}", , , "1312345"],
      [, , "7[1378]\\d{7}|86(?:22|44)\\d{6}", "\\d{9,10}", , , "711234567"],
      [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "86(?:1[12]|30|55|77|8[367]|99)\\d{6}", "\\d{10}", , , "8686123456"], "ZW", 263, "00", "0", , , "0", , , , [
        [, "([49])(\\d{3})(\\d{2,5})", "$1 $2 $3", ["4|9[2-9]"], "0$1", "", 0],
        [, "([179]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[19]1|7"], "0$1", "", 0],
        [, "(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"], "0$1", "", 0],
        [, "([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:[278]|0[45]|[49]8)|3(?:08|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78])"],
          "0$1", "", 0
        ],
        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:[278]|0[45]|48)|3(?:08|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78])|80"], "0$1", "", 0],
        [, "([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2(?:[1-469]|0[0-35-9]|[45][0-79])|3(?:0[0-79]|1[0-689]|[24-69]|3[0-69])|5(?:[02-46-9]|[15][0-69])|6(?:[0145]|[29][0-79]|3[0-689]|[68][0-69])"], "0$1", "", 0],
        [, "([1-356]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[3-9]|2(?:[1-469]|0[0-35-9]|[45][0-79])|3(?:0[0-79]|1[0-689]|[24-69]|3[0-69])|5(?:[02-46-9]|[15][0-69])|6(?:[0145]|[29][0-79]|3[0-689]|[68][0-69])"],
          "0$1", "", 0
        ],
        [, "([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"], "0$1", "", 0],
        [, "([25]\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:25|54)8", "258[23]|5483"], "0$1", "", 0],
        [, "(8\\d{3})(\\d{6})", "$1 $2", ["86"], "0$1", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    800: [, [, , "\\d{8}", "\\d{8}", , , "12345678"],
      [, , "NA", "NA", , , "12345678"],
      [, , "NA", "NA", , , "12345678"],
      [, , "\\d{8}", "\\d{8}", , , "12345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "001", 800, "", , , , , , , 1, [
        [, "(\\d{4})(\\d{4})",
          "$1 $2", , "", "", 0
        ]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    808: [, [, , "\\d{8}", "\\d{8}", , , "12345678"],
      [, , "NA", "NA", , , "12345678"],
      [, , "NA", "NA", , , "12345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "\\d{8}", "\\d{8}", , , "12345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "001", 808, "", , , , , , , 1, [
        [, "(\\d{4})(\\d{4})", "$1 $2", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ],
    870: [, [, , "[35-7]\\d{8}", "\\d{9}", , , "301234567"],
      [, , "NA", "NA", , , "301234567"],
      [, , "(?:[356]\\d|7[6-8])\\d{7}", "\\d{9}", , , "301234567"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "001", 870, "", , , , , , , , [
        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    878: [, [, , "1\\d{11}", "\\d{12}", , , "101234567890"],
      [, , "NA", "NA", , , "101234567890"],
      [, , "NA", "NA", , , "101234567890"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "10\\d{10}", "\\d{12}", , , "101234567890"], "001", 878, "", , , , , , , 1, [
        [, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    881: [, [, , "[67]\\d{8}", "\\d{9}", , , "612345678"],
      [, , "NA", "NA", , , "612345678"],
      [, , "[67]\\d{8}", "\\d{9}", , , "612345678"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "001", 881, "", , , , , , , , [
        [, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    882: [, [, , "[13]\\d{6,11}", "\\d{7,12}", , , "3451234567"],
      [, , "NA", "NA", , , "3451234567"],
      [, , "3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}",
        "\\d{7,10}", , , "3451234567"
      ],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|345\\d{7}", "\\d{7,12}", , , "3451234567"], "001", 882, "", , , , , , , , [
        [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"], "", "", 0],
        [, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"], "", "", 0],
        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"], "", "", 0],
        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["348"], "", "", 0],
        [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"], "", "", 0],
        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"], "", "", 0],
        [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["16"], "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "348[57]\\d{7}", "\\d{11}", , , "3451234567"]
    ],
    883: [, [, , "51\\d{7}(?:\\d{3})?", "\\d{9}(?:\\d{3})?", , , "510012345"],
      [, , "NA", "NA", , , "510012345"],
      [, , "NA", "NA", , , "510012345"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "51(?:00\\d{5}(?:\\d{3})?|10\\d{8})", "\\d{9}(?:\\d{3})?", , , "510012345"], "001", 883, "", , , , , , , 1, [
        [,
          "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "", "", 0
        ],
        [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], , , [, , "NA", "NA"]
    ],
    888: [, [, , "\\d{11}", "\\d{11}", , , "12345678901"],
      [, , "NA", "NA", , , "12345678901"],
      [, , "NA", "NA", , , "12345678901"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "001", 888, "", , , , , , , 1, [
        [, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "\\d{11}", "\\d{11}", , , "12345678901"], 1, , [, , "NA",
        "NA"
      ]
    ],
    979: [, [, , "\\d{9}", "\\d{9}", , , "123456789"],
      [, , "NA", "NA", , , "123456789"],
      [, , "NA", "NA", , , "123456789"],
      [, , "NA", "NA"],
      [, , "\\d{9}", "\\d{9}", , , "123456789"],
      [, , "NA", "NA"],
      [, , "NA", "NA"],
      [, , "NA", "NA"], "001", 979, "", , , , , , , 1, [
        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", , "", "", 0]
      ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
      [, , "NA", "NA"], 1, , [, , "NA", "NA"]
    ]
  };
  /*

   Copyright (C) 2010 The Libphonenumber Authors.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */
  function M() {
    this.Aa = {}
  }
  M.xa = function () {
    return M.ya ? M.ya : M.ya = new M
  };
  var N = {
      "0": "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "\uff10": "0",
      "\uff11": "1",
      "\uff12": "2",
      "\uff13": "3",
      "\uff14": "4",
      "\uff15": "5",
      "\uff16": "6",
      "\uff17": "7",
      "\uff18": "8",
      "\uff19": "9",
      "\u0660": "0",
      "\u0661": "1",
      "\u0662": "2",
      "\u0663": "3",
      "\u0664": "4",
      "\u0665": "5",
      "\u0666": "6",
      "\u0667": "7",
      "\u0668": "8",
      "\u0669": "9",
      "\u06f0": "0",
      "\u06f1": "1",
      "\u06f2": "2",
      "\u06f3": "3",
      "\u06f4": "4",
      "\u06f5": "5",
      "\u06f6": "6",
      "\u06f7": "7",
      "\u06f8": "8",
      "\u06f9": "9"
    }, bb = {
      "0": "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "+": "+",
      "*": "*"
    }, cb = {
      "0": "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "\uff10": "0",
      "\uff11": "1",
      "\uff12": "2",
      "\uff13": "3",
      "\uff14": "4",
      "\uff15": "5",
      "\uff16": "6",
      "\uff17": "7",
      "\uff18": "8",
      "\uff19": "9",
      "\u0660": "0",
      "\u0661": "1",
      "\u0662": "2",
      "\u0663": "3",
      "\u0664": "4",
      "\u0665": "5",
      "\u0666": "6",
      "\u0667": "7",
      "\u0668": "8",
      "\u0669": "9",
      "\u06f0": "0",
      "\u06f1": "1",
      "\u06f2": "2",
      "\u06f3": "3",
      "\u06f4": "4",
      "\u06f5": "5",
      "\u06f6": "6",
      "\u06f7": "7",
      "\u06f8": "8",
      "\u06f9": "9",
      A: "2",
      B: "2",
      C: "2",
      D: "3",
      E: "3",
      F: "3",
      G: "4",
      H: "4",
      I: "4",
      J: "5",
      K: "5",
      L: "5",
      M: "6",
      N: "6",
      O: "6",
      P: "7",
      Q: "7",
      R: "7",
      S: "7",
      T: "8",
      U: "8",
      V: "8",
      W: "9",
      X: "9",
      Y: "9",
      Z: "9"
    }, db = /[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,
    eb = RegExp("[+\uff0b]+"),
    O = RegExp("^[+\uff0b]+"),
    fb = RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),
    gb = RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),
    hb = /[\\\/] *x/,
    ib = RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),
    jb = /(?:.*?[A-Za-z]){3}.*/,
    kb = RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
      "i"),
    lb = RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
      "i"),
    mb = /(\$\d)/,
    nb = /\$NP/,
    ob = /\$FG/,
    pb = /\$CC/,
    qb = /^\(?\$1\)?$/,
    rb = {
      Qa: 0,
      Ca: 1,
      Ea: 2,
      Da: 3
    };

  function sb(a) {
    var b = a.search(gb);
    0 <= b ? (a = a.substring(b), a = a.replace(ib, ""), b = a.search(hb), 0 <= b && (a = a.substring(0, b))) : a = "";
    return a
  }

  function tb(a) {
    var b = P(jb, a.toString()) ? Q(a.toString(), cb) : Q(a.toString(), N);
    a.clear();
    a.append(b)
  }

  function Q(a, b) {
    for (var c = new G, d, e = a.length, f = 0; f < e; ++f) d = a.charAt(f), d = b[d.toUpperCase()], d != l && c.append(d);
    return c.toString()
  }

  function ub(a) {
    return a != l && isNaN(a) && a.toUpperCase() in ab
  }

  function R(a, b, c) {
    if (0 == A(b, 2) && y(b, 5)) {
      var d = D(b, 5);
      if (0 < d.length) return d
    }
    var d = b.g(),
      e = S(b);
    if (0 == c) return T(d, 0, e, "");
    if (!(d in L)) return e;
    a = U(a, d, V(d));
    b = vb(b, a, c);
    e = wb(e, a, c);
    return T(d, c, e, b)
  }

  function xb(a, b, c) {
    var d = b.g(),
      e = S(b);
    if (!(d in L)) return e;
    a = U(a, d, V(d));
    b = vb(b, a, 2);
    c = wb(e, a, 2, c);
    return T(d, 2, c, b)
  }

  function U(a, b, c) {
    return "001" == c ? W(a, "" + b) : W(a, c)
  }

  function yb(a, b, c) {
    if (!ub(c)) return R(a, b, 1);
    var d = b.g(),
      e = S(b);
    if (!(d in L)) return e;
    if (1 == d) {
      if (c != l && 0 <= ca(L[1], c.toUpperCase())) return d + " " + R(a, b, 2)
    } else if (d == Ab(a, c)) return R(a, b, 2);
    var f = W(a, c),
      g = D(f, 11);
    c = "";
    P(db, g) ? c = g : y(f, 17) && (c = D(f, 17));
    a = U(a, d, V(d));
    e = wb(e, a, 1);
    b = vb(b, a, 1);
    return 0 < c.length ? c + " " + d + " " + e + b : T(d, 1, e, b)
  }

  function Bb(a, b, c) {
    var d;
    if (d = y(b, 5)) {
      if (d = y(b, 4)) d = b.g(), d = U(a, d, V(d)), d = !(d != l && D(d, 26));
      if (!d) {
        d = b.g();
        d = U(a, d, V(d));
        if (d == l) d = m;
        else {
          var e = S(b);
          d = Cb(C(d, 19), e) != l
        }
        d = !d
      }
    }
    if (d) return D(b, 5);
    if (!y(b, 6)) return R(a, b, 2);
    switch (A(b, 6)) {
      case 1:
        a = R(a, b, 1);
        break;
      case 5:
        a = yb(a, b, c);
        break;
      case 10:
        a = R(a, b, 1).substring(1);
        break;
      default:
        d = V(b.g());
        var f;
        c = W(a, d);
        c == l ? f = l : (c = D(c, 12), f = 0 == c.length ? l : c = c.replace("~", ""));
        c = R(a, b, 2);
        if (f == l || 0 == f.length) {
          a = c;
          break
        }
        var g;
        a: {
          e = D(b, 5);
          e = Q(e, N);
          if (0 == e.lastIndexOf(f,
            0)) try {
            g = Db(a, a.parse(e.substring(f.length), d));
            break a
          } catch (h) {}
          g = m
        }
        if (g) {
          a = c;
          break
        }
        g = W(a, d);
        d = S(b);
        g = Cb(C(g, 19), d);
        if (g == l) {
          a = c;
          break
        }
        d = D(g, 4);
        e = d.indexOf("$1");
        if (0 >= e) {
          a = c;
          break
        }
        d = d.substring(0, e);
        d = Q(d, N);
        if (0 == d.length) {
          a = c;
          break
        }
        g = Va(g);
        Ta(g, 4);
        d = [g];
        g = b.g();
        c = S(b);
        g in L ? (a = U(a, g, V(g)), e = "", e = Cb(d, c), e == l ? e = c : (d = Va(e), e = D(e, 4), 0 < e.length && (f = D(a, 12), 0 < f.length ? (e = e.replace(nb, f).replace(ob, "$1"), B(d, 4, e)) : Ta(d, 4)), e = Eb(c, d, 2)), a = vb(b, a, 2), a = T(g, 2, e, a)) : a = c
    }
    b = D(b, 5);
    a != l && 0 < b.length && (g = Q(a,
      bb), c = Q(b, bb), g != c && (a = b));
    return a
  }

  function S(a) {
    var b = "" + A(a, 2);
    return y(a, 4) && A(a, 4) ? "0" + b : b
  }

  function T(a, b, c, d) {
    switch (b) {
      case 0:
        return "+" + a + c + d;
      case 1:
        return "+" + a + " " + c + d;
      case 3:
        return "tel:+" + a + "-" + c + d;
      default:
        return c + d
    }
  }

  function wb(a, b, c, d) {
    b = 0 == C(b, 20).length || 2 == c ? C(b, 19) : C(b, 20);
    b = Cb(b, a);
    return b == l ? a : Eb(a, b, c, d)
  }

  function Cb(a, b) {
    for (var c, d = a.length, e = 0; e < d; ++e) {
      c = a[e];
      var f = Sa(c, 3);
      if (0 == f || 0 == b.search(A(c, 3, f - 1)))
        if (f = RegExp(A(c, 1)), P(f, b)) return c
    }
    return l
  }

  function Eb(a, b, c, d) {
    var e = D(b, 2),
      f = RegExp(A(b, 1)),
      g = D(b, 5),
      h = "";
    2 == c && d != l && 0 < d.length && 0 < g.length ? (b = g.replace(pb, d), e = e.replace(mb, b), h = a.replace(f, e)) : (b = D(b, 4), h = 2 == c && b != l && 0 < b.length ? a.replace(f, e.replace(mb, b)) : a.replace(f, e));
    3 == c && (h = h.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"), ""), h = h.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+",
      "g"), "-"));
    return h
  }

  function vb(a, b, c) {
    return !y(a, 3) || 0 == a.getExtension().length ? "" : 3 == c ? ";ext=" + a.getExtension() : y(b, 13) ? A(b, 13) + D(a, 3) : " ext. " + D(a, 3)
  }

  function Fb(a, b) {
    var c = A(b, 1);
    return !y(c, 2) || !X(a, c) ? -1 : X(a, A(b, 5)) ? 4 : X(a, A(b, 4)) ? 3 : X(a, A(b, 6)) ? 5 : X(a, A(b, 8)) ? 6 : X(a, A(b, 7)) ? 7 : X(a, A(b, 21)) ? 8 : X(a, A(b, 25)) ? 9 : X(a, A(b, 28)) ? 10 : X(a, A(b, 2)) ? A(b, 18) || X(a, A(b, 3)) ? 2 : 0 : !A(b, 18) && X(a, A(b, 3)) ? 1 : -1
  }

  function W(a, b) {
    if (b == l) return l;
    b = b.toUpperCase();
    var c = a.Aa[b];
    if (c == l) {
      c = ab[b];
      if (c == l) return l;
      c = (new K).z(I.c(), c);
      a.Aa[b] = c
    }
    return c
  }

  function X(a, b) {
    return P(D(b, 3), a) && P(D(b, 2), a)
  }

  function Db(a, b) {
    var c = Gb(a, b);
    return Hb(a, b, c)
  }

  function Hb(a, b, c) {
    var d = b.g(),
      e = U(a, d, c);
    if (e == l || "001" != c && d != Ab(a, c)) return m;
    a = A(e, 1);
    b = S(b);
    return !y(a, 2) ? (e = b.length, 2 < e && 16 >= e) : -1 != Fb(b, e)
  }

  function Gb(a, b) {
    if (b == l) return l;
    var c = b.g(),
      c = L[c];
    if (c == l) c = l;
    else if (1 == c.length) c = c[0];
    else a: {
        for (var d = S(b), e, f = c.length, g = 0; g < f; g++) {
          e = c[g];
          var h = W(a, e);
          if (y(h, 23)) {
            if (0 == d.search(A(h, 23))) {
              c = e;
              break a
            }
          } else if (-1 != Fb(d, h)) {
            c = e;
            break a
          }
        }
        c = l
      }
    return c
  }

  function V(a) {
    a = L[a];
    return a == l ? "ZZ" : a[0]
  }

  function Ab(a, b) {
    var c = W(a, b);
    c == l && i("Invalid region code: " + b);
    return c.g()
  }

  function Ib(a, b) {
    var c = S(b),
      d = b.g();
    if (!(d in L)) return 1;
    d = U(a, d, V(d));
    d = A(d, 1);
    if (!y(d, 2)) return c = c.length, 2 > c ? 2 : 16 < c ? 3 : 0;
    d = D(d, 3);
    return P(d, c) ? 0 : 0 == c.search(d) ? 3 : 2
  }

  function Jb(a, b) {
    var c = a.toString();
    if (0 == c.length || "0" == c.charAt(0)) return 0;
    for (var d, e = c.length, f = 1; 3 >= f && f <= e; ++f)
      if (d = parseInt(c.substring(0, f), 10), d in L) return b.append(c.substring(f)), d;
    return 0
  }

  function Kb(a, b, c, d, e) {
    if (0 == a.length) return 0;
    a = new G(a);
    var f;
    b != l && (f = A(b, 11));
    f == l && (f = "NonMatch");
    var g = a.toString();
    if (0 == g.length) f = 20;
    else if (O.test(g)) g = g.replace(O, ""), a.clear(), a.append(P(jb, g) ? Q(g, cb) : Q(g, N)), f = 1;
    else {
      g = RegExp(f);
      tb(a);
      f = a.toString();
      if (0 == f.search(g)) {
        var g = f.match(g)[0].length,
          h = f.substring(g).match(fb);
        h && (h[1] != l && 0 < h[1].length) && "0" == Q(h[1], N) ? f = m : (a.clear(), a.append(f.substring(g)), f = k)
      } else f = m;
      f = f ? 5 : 20
    }
    d && B(e, 6, f);
    if (20 != f) {
      2 >= a.h.length && i("Phone number too short after IDD");
      f = Jb(a, c);
      if (0 != f) return e.da(f), f;
      i("Invalid country calling code")
    }
    if (b != l && (f = b.g(), g = "" + f, h = a.toString(), 0 == h.lastIndexOf(g, 0))) {
      var n = new G(h.substring(g.length)),
        h = A(b, 1),
        g = RegExp(D(h, 2));
      Lb(n, b, l);
      b = n.toString();
      h = D(h, 3);
      if (!P(g, a.toString()) && P(g, b) || 3 == (P(h, a.toString()) ? 0 : 0 == a.toString().search(h) ? 3 : 2)) return c.append(b), d && B(e, 6, 10), e.da(f), f
    }
    e.da(0);
    return 0
  }

  function Lb(a, b, c) {
    var d = a.toString(),
      e = d.length,
      f = A(b, 15);
    if (!(0 == e || f == l || 0 == f.length))
      if (f = RegExp("^(?:" + f + ")"), e = f.exec(d)) {
        var g = RegExp,
          h;
        h = A(b, 1);
        h = D(h, 2);
        g = g(h);
        h = e.length - 1;
        var n = A(b, 16),
          f = (b = n == l || 0 == n.length || e[h] == l || 0 == e[h].length) ? d.substring(e[0].length) : d.replace(f, n);
        if (!P(g, d) || P(g, f))(b && 0 < h && e[1] != l || !b && 1 < h) && c != l && c.append(e[1]), a.clear(), a.append(f)
      }
  }
  M.prototype.parse = function (a, b) {
    return Mb(this, a, b, m)
  };

  function Mb(a, b, c, d) {
    b == l && i("The string supplied did not seem to be a phone number");
    250 < b.length && i("The string supplied is too long to be a phone number");
    var e = new G,
      f = b.indexOf(";phone-context=");
    if (0 < f) {
      var g = f + 15;
      if ("+" == b.charAt(g)) {
        var h = b.indexOf(";", g);
        0 < h ? e.append(b.substring(g, h)) : e.append(b.substring(g))
      }
      e.append(b.substring(b.indexOf("tel:") + 4, f))
    } else e.append(sb(b));
    f = e.toString();
    g = f.indexOf(";isub=");
    0 < g && (e.clear(), e.append(f.substring(0, g)));
    (2 > e.toString().length ? 0 : P(lb, e.toString())) ||
    i("The string supplied did not seem to be a phone number");
    ub(c) || e.toString() != l && 0 < e.toString().length && O.test(e.toString()) || i("Invalid country calling code");
    f = new J;
    d && B(f, 5, b);
    a: {
      b = e.toString();
      g = b.search(kb);
      if (0 <= g && (2 > b.substring(0, g).length ? 0 : P(lb, b.substring(0, g))))
        for (var h = b.match(kb), n = h.length, w = 1; w < n; ++w)
          if (h[w] != l && 0 < h[w].length) {
            e.clear();
            e.append(b.substring(0, g));
            b = h[w];
            break a
          }
      b = ""
    }
    0 < b.length && B(f, 3, b);
    b = W(a, c);
    g = new G;
    h = 0;
    n = e.toString();
    try {
      h = Kb(n, b, g, d, f)
    } catch (r) {
      "Invalid country calling code" ==
        r && O.test(n) ? (n = n.replace(O, ""), h = Kb(n, b, g, d, f), 0 == h && i(r)) : i(r)
    }
    0 != h ? (e = V(h), e != c && (b = U(a, h, e))) : (tb(e), g.append(e.toString()), c != l ? (h = b.g(), f.da(h)) : d && Ta(f, 6));
    2 > g.h.length && i("The string supplied is too short to be a phone number");
    b != l && (a = new G, Lb(g, b, a), d && B(f, 7, a.toString()));
    d = g.toString();
    a = d.length;
    2 > a && i("The string supplied is too short to be a phone number");
    16 < a && i("The string supplied is too long to be a phone number");
    "0" == d.charAt(0) && B(f, 4, k);
    B(f, 2, parseInt(d, 10));
    return f
  }

  function P(a, b) {
    var c = "string" == typeof a ? b.match("^(?:" + a + ")$") : b.match(a);
    return c && c[0].length == b.length ? k : m
  };
  /*

   Copyright (C) 2010 The Libphonenumber Authors.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */
  function Nb(a) {
    this.ra = "\u2008";
    this.ia = RegExp(this.ra);
    this.ja = "";
    this.r = new G;
    this.ea = "";
    this.m = new G;
    this.w = new G;
    this.o = k;
    this.aa = this.u = this.ma = m;
    this.qa = M.xa();
    this.Ka = this.Ia = this.ba = 0;
    this.d = new G;
    this.ha = m;
    this.v = "";
    this.b = new G;
    this.i = [];
    this.ka = a;
    this.Fa = this.k = Ob(this, this.ka)
  }
  var Pb = new I;
  B(Pb, 11, "NA");
  var Qb = /\[([^\[\]])*\]/g,
    Rb = /\d(?=[^,}][^,}])/g,
    Sb = RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),
    Tb = /[- ]/;

  function Ob(a, b) {
    var c = !ub(b) ? 0 : Ab(a.qa, b),
      c = W(a.qa, V(c));
    return c != l ? c : Pb
  }

  function Ub(a) {
    for (var b = a.i.length, c = 0; c < b; ++c) {
      var d = a.i[c],
        e = D(d, 1);
      if (a.ea == e) return m;
      var f;
      f = a;
      var g = d,
        h = D(g, 1);
      if (-1 != h.indexOf("|")) f = m;
      else {
        h = h.replace(Qb, "\\d");
        h = h.replace(Rb, "\\d");
        f.r.clear();
        var n;
        n = f;
        var g = D(g, 2),
          w = "999999999999999".match(h)[0];
        w.length < n.b.h.length ? n = "" : (h = w.replace(RegExp(h, "g"), g), n = h = h.replace(RegExp("9", "g"), n.ra));
        0 < n.length ? (f.r.append(n), f = k) : f = m
      } if (f) return a.ea = e, a.ha = Tb.test(A(d, 4)), a.ba = 0, k
    }
    return a.o = m
  }

  function Vb(a, b) {
    for (var c = [], d = b.length - 3, e = a.i.length, f = 0; f < e; ++f) {
      var g = a.i[f];
      Sa(g, 3) > d ? (g = D(g, 3, d), 0 == b.search(g) && c.push(a.i[f])) : c.push(a.i[f])
    }
    a.i = c
  }
  Nb.prototype.clear = function () {
    this.ja = "";
    this.m.clear();
    this.w.clear();
    this.r.clear();
    this.ba = 0;
    this.ea = "";
    this.d.clear();
    this.v = "";
    this.b.clear();
    this.o = k;
    this.ma = m;
    this.Ia = this.Ka = 0;
    this.aa = this.u = m;
    this.i = [];
    this.ha = m;
    this.k != this.Fa && (this.k = Ob(this, this.ka))
  };

  function Wb(a, b) {
    a.ja = Xb(a, b);
    return a.ja
  }

  function Xb(a, b) {
    a.m.append(b);
    if (fb.test(b) || 1 == a.m.h.length && eb.test(b)) {
      var c = b,
        d;
      "+" == c ? (d = c, a.w.append(c)) : (d = N[c], a.w.append(d), a.b.append(d));
      b = d
    } else a.o = m, a.ma = k; if (!a.o) {
      if (!a.ma)
        if (Yb(a)) {
          if (Zb(a)) return $b(a)
        } else if (0 < a.v.length && (c = a.b.toString(), a.b.clear(), a.b.append(a.v), a.b.append(c), c = a.d.toString(), d = c.lastIndexOf(a.v), a.d.clear(), a.d.append(c.substring(0, d))), a.v != ac(a)) return a.d.append(" "), $b(a);
      return a.m.toString()
    }
    switch (a.w.h.length) {
      case 0:
      case 1:
      case 2:
        return a.m.toString();
      case 3:
        if (Yb(a)) a.aa = k;
        else return a.v = ac(a), bc(a);
      default:
        if (a.aa) return Zb(a) && (a.aa = m), a.d.toString() + a.b.toString();
        if (0 < a.i.length) {
          c = cc(a, b);
          d = dc(a);
          if (0 < d.length) return d;
          Vb(a, a.b.toString());
          return Ub(a) ? ec(a) : a.o ? fc(a, c) : a.m.toString()
        }
        return bc(a)
    }
  }

  function $b(a) {
    a.o = k;
    a.aa = m;
    a.i = [];
    return bc(a)
  }

  function dc(a) {
    for (var b = a.b.toString(), c = a.i.length, d = 0; d < c; ++d) {
      var e = a.i[d],
        f = D(e, 1);
      if (RegExp("^(?:" + f + ")$").test(b)) return a.ha = Tb.test(A(e, 4)), b = b.replace(RegExp(f, "g"), A(e, 2)), fc(a, b)
    }
    return ""
  }

  function fc(a, b) {
    var c = a.d.h.length;
    return a.ha && 0 < c && " " != a.d.toString().charAt(c - 1) ? a.d + " " + b : a.d + b
  }

  function bc(a) {
    var b = a.b.toString();
    if (3 <= b.length) {
      for (var b = b.substring(0, 3), c = a.u && 0 < Sa(a.k, 20) ? C(a.k, 20) : C(a.k, 19), d = c.length, e = 0; e < d; ++e) {
        var f = c[e],
          g;
        if (!(g = !y(a.k, 12)))
          if (!(g = a.u))
            if (!(g = A(f, 6))) g = D(f, 4), g = 0 == g.length || qb.test(g);
        g && (g = D(f, 2), Sb.test(g) && a.i.push(f))
      }
      Vb(a, b);
      b = dc(a);
      return 0 < b.length ? b : Ub(a) ? ec(a) : a.m.toString()
    }
    return fc(a, b)
  }

  function ec(a) {
    var b = a.b.toString(),
      c = b.length;
    if (0 < c) {
      for (var d = "", e = 0; e < c; e++) d = cc(a, b.charAt(e));
      return a.o ? fc(a, d) : a.m.toString()
    }
    return a.d.toString()
  }

  function ac(a) {
    var b = a.b.toString(),
      c = 0,
      d;
    1 != a.k.wa() ? d = m : (d = a.b.toString(), d = "1" == d.charAt(0) && "0" != d.charAt(1) && "1" != d.charAt(1));
    d ? (c = 1, a.d.append("1").append(" "), a.u = k) : y(a.k, 15) && (d = RegExp("^(?:" + A(a.k, 15) + ")"), d = b.match(d), d != l && (d[0] != l && 0 < d[0].length) && (a.u = k, c = d[0].length, a.d.append(b.substring(0, c))));
    a.b.clear();
    a.b.append(b.substring(c));
    return b.substring(0, c)
  }

  function Yb(a) {
    var b = a.w.toString(),
      c = RegExp("^(?:\\+|" + A(a.k, 11) + ")"),
      c = b.match(c);
    return c != l && c[0] != l && 0 < c[0].length ? (a.u = k, c = c[0].length, a.b.clear(), a.b.append(b.substring(c)), a.d.clear(), a.d.append(b.substring(0, c)), "+" != b.charAt(0) && a.d.append(" "), k) : m
  }

  function Zb(a) {
    if (0 == a.b.h.length) return m;
    var b = new G,
      c = Jb(a.b, b);
    if (0 == c) return m;
    a.b.clear();
    a.b.append(b.toString());
    b = V(c);
    "001" == b ? a.k = W(a.qa, "" + c) : b != a.ka && (a.k = Ob(a, b));
    a.d.append("" + c).append(" ");
    return k
  }

  function cc(a, b) {
    var c = a.r.toString();
    if (0 <= c.substring(a.ba).search(a.ia)) {
      var d = c.search(a.ia),
        c = c.replace(a.ia, b);
      a.r.clear();
      a.r.append(c);
      a.ba = d;
      return c.substring(0, a.ba + 1)
    }
    1 == a.i.length && (a.o = m);
    a.ea = "";
    return a.m.toString()
  }















  /*

   Copyright (C) 2010 The Libphonenumber Authors.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */
  function gc(xnumber, xcountry, xcarrier) {

    var a = xnumber,
      b = xcountry,
      c = xcarrier,
      d = new G;

    // console.log('GGG ->', d);

    try {
      var e = M.xa(),
        f;

      !ub(b) && (0 < a.length && "+" != a.charAt(0)) && i("Invalid country calling code");

      f = Mb(e, a, b, k);

      d.append("****Parsing Result:****\n");
      d.append(Aa((new Xa(1)).ca(f)));
      d.append("\n\n****Validation Results:****");

      var g = 0 == Ib(e, f);

      d.append("\nResult from isPossibleNumber(): ");

      d.append(g);

      if (g) {
        var h = Db(e, f);
        d.append("\nResult from isValidNumber(): ");
        d.append(h);
        h && (b && "ZZ" != b) && (d.append("\nResult from isValidNumberForRegion(): "),
          d.append(Hb(e, f, b)));
        d.append("\nPhone Number region: ");
        d.append(Gb(e, f));
        d.append("\nResult from getNumberType(): ");
        var n;
        var w = Gb(e, f),
          r = U(e, f.g(), w);
        if (r == l) n = -1;
        else {
          var z = S(f);
          n = Fb(z, r)
        }
        switch (n) {
          case 0:
            d.append("FIXED_LINE");
            break;
          case 1:
            d.append("MOBILE");
            break;
          case 2:
            d.append("FIXED_LINE_OR_MOBILE");
            break;
          case 3:
            d.append("TOLL_FREE");
            break;
          case 4:
            d.append("PREMIUM_RATE");
            break;
          case 5:
            d.append("SHARED_COST");
            break;
          case 6:
            d.append("VOIP");
            break;
          case 7:
            d.append("PERSONAL_NUMBER");
            break;
          case 8:
            d.append("PAGER");
            break;
          case 9:
            d.append("UAN");
            break;
          case -1:
            d.append("UNKNOWN")
        }
      } else {
        d.append("\nResult from isPossibleNumberWithReason(): ");
        switch (Ib(e, f)) {
          case rb.Ca:
            d.append("INVALID_COUNTRY_CODE");
            break;
          case rb.Ea:
            d.append("TOO_SHORT");
            break;
          case rb.Da:
            d.append("TOO_LONG")
        }
        d.append("\nNote: numbers that are not possible have type UNKNOWN, an unknown region, and are considered invalid.")
      }

      d.append("\n\n****Formatting Results:**** ");
      d.append("\nE164 format: ");
      d.append(h ? R(e, f, 0) : "invalid");
      d.append("\nOriginal format: ");
      d.append(Bb(e, f, b));
      d.append("\nNational format: ");
      d.append(R(e, f, 2));
      d.append("\nInternational format: ");
      d.append(h ? R(e, f, 1) : "invalid");
      d.append("\nOut-of-country format from US: ");
      d.append(h ? yb(e, f, "US") : "invalid");
      d.append("\nOut-of-country format from Switzerland: ");
      d.append(h ? yb(e, f, "CH") : "invalid");
      0 < c.length && (d.append("\nNational format with carrier code: "), d.append(xb(e, f, c)));
      d.append("\n\n****AsYouTypeFormatter Results****");
      for (var hc = new Nb(b), ic = a.length, b = 0; b < ic; ++b) {
        var zb = a.charAt(b);
        d.append("\nChar entered: ");
        d.append(zb);
        d.append(" Output: ");
        d.append(Wb(hc, zb))
      }
    } catch (jc) {
      d.append("\n" + jc)
    }

    za("output").value = d.toString();

    // console.log('MMM ->', m);

    return m
  }


  var Y = ["phoneNumberParser"],
    Z = p;

  !(Y[0] in Z) && Z.execScript && Z.execScript("var " + Y[0]);

  for (var $; Y.length && ($ = Y.shift());)!Y.length && gc !== j ? Z[$] = gc : Z = Z[$] ? Z[$] : Z[$] = {};

})();