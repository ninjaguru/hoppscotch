import{l as m,O as y,U as P,a as g}from"./importers.77953277.js";import{a as l,c as v,t as M}from"./TaskOption.84975d3b.js";import{f as A,E as D,ao as F,p as r,ia as b,gX as C,o as L,d as N,aa as S,a5 as k,h$ as x,i7 as f,ek as U,ib as V,ej as B,ic as W,i1 as $,eo as j,ab as q}from"./index.4c90dc19.js";import"./json.9d09c79b.js";import"./___vite-browser-external_commonjs-proxy.989b4f3a.js";const u=e=>a=>typeof a===e,z=A({__name:"import",setup(e){const a=q(),d=S(),n=k(),c=D(),p="importer_invalid_type",_="importer_invalid_fetch",R=(t,s)=>r(j,B("importer",()=>r(P,W(o=>o.applicableTo.includes("url-import")&&o.id===s),$(()=>p))),V("content",()=>r(t,l(u("string")),v(T),f(()=>_))),x(({importer:o,content:i})=>r(i.data,l(u("string")),f(()=>m),U(h=>o.importer([h])))));F(async()=>{const{query:t}=a,s=t.url,o=t.type,i=await R(s,o)();r(i,b(E,O)),d.replace("/")});const I={[p]:"import.import_from_url_invalid_type",[_]:"import.import_from_url_invalid_fetch",[m]:"import.import_from_url_invalid_file_format",[y]:"import.import_from_url_invalid_file_format"},E=t=>{n.error(c(I[t]).toString())},O=t=>{C(t),n.success(c("import.import_from_url_success").toString())},T=t=>M(()=>g.get(t,{responseType:"text",transitional:{forcedJSONParsing:!1}}));return(t,s)=>(L(),N("div"))}});export{z as default};
//# sourceMappingURL=import.3d877eef.js.map