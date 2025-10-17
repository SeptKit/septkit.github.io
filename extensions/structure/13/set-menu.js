import { T as H, aw as V, a3 as W, a4 as q, a6 as S, W as I, ax as z, a2 as R, ay as L, az as G, aA as K } from "./scl-7-bSjYq9.js";
async function X() {
  const o = localStorage.getItem("currentActiveFileDatabaseName");
  if (!o)
    throw new Error("no active file");
  const e = await M(), s = await H({ files: e });
  await Y(o, s);
}
async function Y(o, e) {
  const s = new W(o);
  await s.open();
  const t = z(s), c = await q(e[0]), y = c.sdk, m = y.db;
  await A(), await x(), await U(), c.sdk.close(), s.close();
  async function A() {
    const n = (await m.table(S).where({ tagName: "Header" }).sortBy("id"))[0];
    if (!n) {
      const a = { msg: "Header element is missing in FSD" };
      throw console.error(a), new Error(JSON.stringify(a));
    }
    const l = I(n, "uuid"), u = I(n, "version"), i = I(n, "revision"), p = await m.table(S).where({ tagName: "Function" }).toArray();
    for (const a of p) {
      const d = await T(m, a), g = [];
      for (const w of d)
        if (F(w, ["Substation", "VoltageLevel", "Bay"])) {
          const v = await O(s, w, "name");
          g.push(v);
        }
      c.convertToInstance(a);
      const r = await t.addRecord(a);
      let f = (await y.findChildRecordsByTagName(r, ["Private"])).filter((w) => R(w, "type")?.value === "eIEC61850-6-100").at(0);
      if (!f) {
        const w = {
          tagName: "Private",
          attributes: [{ name: "type", value: "eIEC61850-6-100" }],
          value: "",
          parent: null,
          namespace: L.default,
          children: []
        };
        f = await t.createRecord(w), await t.ensureRelationship(r, f);
      }
      const D = {
        tagName: "SclFileReference",
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        attributes: [
          { name: "fileType", value: "FSD" },
          { name: "fileUuid", value: l.value },
          { name: "version", value: u.value },
          { name: "revision", value: i.value }
        ],
        value: "",
        parent: null,
        children: []
      }, J = await t.addRecord(D);
      await t.ensureRelationship(f, J);
      const k = await y.findChildRecords(a);
      for (const w of k) {
        const v = await b(w);
        t.ensureRelationship(r, v);
      }
      const C = [r, ...g];
      for (let w = 0; w < C.length; w++) {
        const v = C[w], B = C[w + 1];
        B && await t.ensureRelationship(B, v);
      }
      const N = await t.findRootSCL(), P = C.at(-1);
      N && P && await t.ensureRelationship(N, P);
    }
  }
  async function x() {
    const n = (await m.table(S).where({ tagName: "DataTypeTemplates" }).sortBy("id"))[0];
    if (!n) {
      console.info("no data type templates, stopping");
      return;
    }
    let l = (await s.table(S).where({ tagName: "DataTypeTemplates" }).sortBy("id"))[0];
    if (!l) {
      const i = {
        tagName: "DataTypeTemplates",
        namespace: L.default,
        attributes: [],
        value: "",
        parent: null,
        children: []
      };
      l = await t.addRecord(i);
      const p = await t.findRootSCL();
      await t.ensureRelationship(p, l);
    }
    const u = await y.findChildRecords(n);
    if (u.length === 0) {
      console.info("DataTypeTemplates is empty, stopping.");
      return;
    }
    for (const i of u) {
      const p = R(i, "id");
      if (!p) {
        console.warn("id attribute not found, continuing", i);
        continue;
      }
      if (await t.findOneRecordByAttribute(
        i.tagName,
        p
      ))
        continue;
      const d = await b(i);
      await t.ensureRelationship(l, d);
    }
  }
  async function U() {
    const n = await m.table(S).where({ tagName: "FunctionCategory" }).toArray();
    for (const l of n) {
      const u = await T(m, l), i = [];
      for (const r of u.reverse()) {
        if (F(r, ["Substation", "VoltageLevel", "Bay"])) {
          const h = await O(s, r, "name");
          i.unshift(h);
        }
        if (F(r, ["Private"])) {
          const h = i[i.length - 1];
          if (!h) {
            const D = {
              msg: "in the case of function category instantiation private field without a parent (so beeing under SCL root) is considered an error",
              record: r,
              path: u,
              newGrandParent: h,
              newParentPath: i
            };
            throw console.error(D), new Error(JSON.stringify(D));
          }
          const f = await _(t, r, h);
          i.unshift(f);
        }
      }
      const a = [await E(l), ...i];
      for (let r = 0; r < a.length; r++) {
        const h = a[r], f = a[r + 1];
        f && await t.ensureRelationship(f, h);
      }
      const d = await t.findRootSCL(), g = a.at(-1);
      d && g && await t.ensureRelationship(d, g);
    }
  }
  async function E(n) {
    const l = R(n, "uuid");
    if (!l) {
      const a = { msg: "no uuid found in element", funcCatInFSD: n };
      throw console.error(a), new Error(JSON.stringify(a));
    }
    let u = await t.findOneRecordByAttribute(n.tagName, {
      name: "templateUuid",
      value: l.value
    });
    u || (c.convertToInstance(n), u = await t.addRecord(n));
    const i = await y.findChildRecordsByTagName(n, [
      "FunctionCatRef"
    ]);
    for (const a of i) {
      const d = await t.addRecord(a);
      await t.ensureRelationship(u, d);
      const g = R(d, "functionUuid");
      if (!g) continue;
      const r = await t.findOneRecordByAttribute("Function", {
        name: "templateUuid",
        value: g.value
      });
      if (!r) {
        const f = { msg: "could not found function by templateUuid", functionUuidAttr: g };
        throw console.error(f), new Error(JSON.stringify(f));
      }
      const h = R(r, "uuid");
      if (!h) {
        const f = { msg: "function does not have an uuid", funcInASD: r };
        throw console.error(f), new Error(JSON.stringify(f));
      }
      G(d, "functionUuid", h?.value), await t.updateRecord(d);
    }
    const p = await y.findChildRecordsByTagName(n, ["SubCategory"]);
    for (const a of p) {
      const d = await E(a);
      await t.ensureRelationship(u, d);
    }
    return u;
  }
  async function b(n) {
    const l = await t.addRecord(n), u = await y.findChildRecords(n);
    for (const i of u) {
      const p = await b(i);
      t.ensureRelationship(l, p);
    }
    return l;
  }
}
async function O(o, e, s) {
  const t = R(e, s);
  if (!t)
    throw console.error("could not find name of record", e), new Error("could not find name of record");
  const c = await K(o, e.tagName, t);
  return c || (await o.table(S).add(e), e);
}
async function _(o, e, s) {
  const t = R(e, "type");
  if (!t || !t.value) {
    const m = {
      msg: "type attribute is required but it is missing or empty",
      typeAttr: t,
      record: e
    };
    throw console.error(m), new Error(JSON.stringify(m));
  }
  const c = await o.db.table(S).where({ "parent.id": s.id }).filter(
    (m) => !!m.attributes?.some((A) => A.name === "type" && A.value === t.value)
  ).first();
  return c || await o.addRecord(e);
}
function F(o, e) {
  return e.includes(o.tagName);
}
async function j(o, e) {
  return o.table(S).get(e);
}
async function T(o, e, s = []) {
  if (!e.parent)
    return [];
  const t = await j(o, e.parent.id);
  if (!t)
    throw console.error("could not find parent for", e), new Error("could not find parent for record");
  if (!t.parent)
    return [];
  const y = await T(o, t, s);
  return [t, ...y];
}
async function M() {
  const { promise: o, resolve: e } = Promise.withResolvers(), { open: s, onChange: t } = V({
    accept: "fsd"
  });
  return t((c) => {
    if (c?.length === 0 || c === null) {
      e([]);
      return;
    }
    e(Array.from(c));
  }), s(), o;
}
export {
  X as default,
  Y as instantiateFSD
};
