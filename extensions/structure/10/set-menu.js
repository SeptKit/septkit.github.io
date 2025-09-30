import { ar as H, as as K, Y as B, at as S, W as g, Z as L, au as V, av as W } from "./import-wrapper-prod-zQDbCU1_.js";
async function j() {
  const r = localStorage.getItem("currentActiveFileDatabaseName");
  if (!r)
    throw new Error("no active file");
  const n = await Z(), c = await H({ files: n });
  await q(r, c);
}
async function q(r, n) {
  const c = new B(r);
  await c.open();
  const t = L(c), i = new B(n[0]);
  await i.open();
  const m = L(i);
  await R(), await D(), await J(), i.close(), c.close();
  async function R() {
    const a = (await i.table(S).where({ tagName: "Header" }).sortBy("id"))[0];
    if (!a) {
      const e = { msg: "Header element is missing in FSD" };
      throw console.error(e), new Error(JSON.stringify(e));
    }
    const l = g(a, "uuid");
    if (!l) {
      const e = { msg: "uuid is missing in Header element", header: a };
      throw console.error(e), new Error(JSON.stringify(e));
    }
    const u = g(a, "version");
    if (!u) {
      const e = { msg: "version is missing in Header element", header: a };
      throw console.error(e), new Error(JSON.stringify(e));
    }
    const o = g(a, "revision");
    if (!o) {
      const e = { msg: "revision is missing in Header element", header: a };
      throw console.error(e), new Error(JSON.stringify(e));
    }
    const p = await i.table(S).where({ tagName: "Function" }).toArray();
    for (const e of p) {
      const d = await F(i, e), y = [];
      for (const w of d)
        if (I(w, ["Substation", "VoltageLevel", "Bay"])) {
          const v = await O(c, w, "name");
          y.push(v);
        }
      m.instantiate(e);
      const s = await t.addRecord(e);
      let f = (await m.findChildRecordsByTagName(s, ["Private"])).filter((w) => g(w, "type")?.value === "eIEC61850-6-100").at(0);
      if (!f) {
        const w = {
          tagName: "Private",
          attributes: [{ name: "type", value: "eIEC61850-6-100" }],
          value: "",
          parent: null,
          namespace: null,
          children: []
        };
        f = await t.createRecord(w), await t.ensureRelationship(s, f);
      }
      const A = {
        tagName: "SclFileReference",
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        attributes: [
          { name: "fileType", value: "FSD" },
          { name: "fileUuid", value: l.value },
          { name: "version", value: u.value },
          { name: "revision", value: o.value }
        ],
        value: "",
        parent: null,
        children: []
      }, x = await t.addRecord(A);
      await t.ensureRelationship(f, x);
      const U = await m.findChildRecords(e);
      for (const w of U) {
        const v = await b(w);
        t.ensureRelationship(s, v);
      }
      const C = [s, ...y];
      for (let w = 0; w < C.length; w++) {
        const v = C[w], P = C[w + 1];
        P && await t.ensureRelationship(P, v);
      }
      const E = await t.findRootSCL(), T = C.at(-1);
      E && T && await t.ensureRelationship(E, T);
    }
  }
  async function D() {
    const a = (await i.table(S).where({ tagName: "DataTypeTemplates" }).sortBy("id"))[0];
    if (!a) {
      console.info("no data type templates, stopping");
      return;
    }
    let l = (await c.table(S).where({ tagName: "DataTypeTemplates" }).sortBy("id"))[0];
    if (!l) {
      const o = {
        tagName: "DataTypeTemplates",
        namespace: null,
        attributes: [],
        value: "",
        parent: null,
        children: []
      };
      l = await t.addRecord(o);
      const p = await t.findRootSCL();
      await t.ensureRelationship(p, l);
    }
    const u = await m.findChildRecords(a);
    if (u.length === 0) {
      console.info("DataTypeTemplates is empty, stopping.");
      return;
    }
    for (const o of u) {
      const p = g(o, "id");
      if (!p) {
        console.warn("id attribute not found, continuing", o);
        continue;
      }
      if (await t.findOneRecordByAttribute(
        o.tagName,
        p
      ))
        continue;
      const d = await b(o);
      await t.ensureRelationship(l, d);
    }
  }
  async function J() {
    const a = await i.table(S).where({ tagName: "FunctionCategory" }).toArray();
    for (const l of a) {
      const u = await F(i, l), o = [];
      for (const s of u.reverse()) {
        if (I(s, ["Substation", "VoltageLevel", "Bay"])) {
          const h = await O(c, s, "name");
          o.unshift(h);
        }
        if (I(s, ["Private"])) {
          const h = o[o.length - 1];
          if (!h) {
            const A = {
              msg: "in the case of function category instantiation private field without a parent (so beeing under SCL root) is considered an error",
              record: s,
              path: u,
              newGrandParent: h,
              newParentPath: o
            };
            throw console.error(A), new Error(JSON.stringify(A));
          }
          const f = await G(t, s, h);
          o.unshift(f);
        }
      }
      const e = [await N(l), ...o];
      for (let s = 0; s < e.length; s++) {
        const h = e[s], f = e[s + 1];
        f && await t.ensureRelationship(f, h);
      }
      const d = await t.findRootSCL(), y = e.at(-1);
      d && y && await t.ensureRelationship(d, y);
    }
  }
  async function N(a) {
    const l = g(a, "uuid");
    if (!l) {
      const e = { msg: "no uuid found in element", funcCatInFSD: a };
      throw console.error(e), new Error(JSON.stringify(e));
    }
    let u = await t.findOneRecordByAttribute(a.tagName, {
      name: "templateUuid",
      value: l.value
    });
    u || (m.instantiate(a), u = await t.addRecord(a));
    const o = await m.findChildRecordsByTagName(a, [
      "FunctionCatRef"
    ]);
    for (const e of o) {
      const d = await t.addRecord(e);
      await t.ensureRelationship(u, d);
      const y = g(d, "functionUuid");
      if (!y) continue;
      const s = await t.findOneRecordByAttribute("Function", {
        name: "templateUuid",
        value: y.value
      });
      if (!s) {
        const f = { msg: "could not found function by templateUuid", functionUuidAttr: y };
        throw console.error(f), new Error(JSON.stringify(f));
      }
      const h = g(s, "uuid");
      if (!h) {
        const f = { msg: "function does not have an uuid", funcInASD: s };
        throw console.error(f), new Error(JSON.stringify(f));
      }
      V(d, "functionUuid", h?.value), await t.updateRecord(d);
    }
    const p = await m.findChildRecordsByTagName(a, ["SubCategory"]);
    for (const e of p) {
      const d = await N(e);
      await t.ensureRelationship(u, d);
    }
    return u;
  }
  async function b(a) {
    const l = await t.addRecord(a), u = await m.findChildRecords(a);
    for (const o of u) {
      const p = await b(o);
      t.ensureRelationship(l, p);
    }
    return l;
  }
}
async function O(r, n, c) {
  const t = g(n, c);
  if (!t)
    throw console.error("could not find name of record", n), new Error("could not find name of record");
  const i = await W(r, n.tagName, t);
  return i || (await r.table(S).add(n), n);
}
async function G(r, n, c) {
  const t = g(n, "type");
  if (!t || !t.value) {
    const R = {
      msg: "type attribute is required but it is missing or empty",
      typeAttr: t,
      record: n
    };
    throw console.error(R), new Error(JSON.stringify(R));
  }
  const i = await r.db.table(S).where({ "parent.id": c.id }).filter(
    (R) => !!R.attributes?.some((D) => D.name === "type" && D.value === t.value)
  ).first();
  return i || await r.addRecord(n);
}
function I(r, n) {
  return n.includes(r.tagName);
}
async function Y(r, n) {
  return r.table(S).get(n);
}
async function F(r, n, c = []) {
  if (!n.parent)
    return [];
  const t = await Y(r, n.parent.id);
  if (!t)
    throw console.error("could not find parent for", n), new Error("could not find parent for record");
  if (!t.parent)
    return [];
  const m = await F(r, t, c);
  return [t, ...m];
}
async function Z() {
  const { promise: r, resolve: n } = Promise.withResolvers(), { open: c, onChange: t } = K({
    accept: "fsd"
  });
  return t((i) => {
    if (i?.length === 0 || i === null) {
      n([]);
      return;
    }
    n(Array.from(i));
  }), c(), r;
}
export {
  j as default,
  q as instantiateFSD
};
