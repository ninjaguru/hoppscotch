import{f as w,E as _,h,g as m,p as v,n as k,aj as x,d2 as f,ag as g,s as L,ai as B,X as R,ao as C,bf as D,z as S,o as u,d as A,e as i,t as F,j as r,i as j,c as U,aV as z,m as E,x as I}from"./index.4c90dc19.js";import{a as M}from"./lens-actions.bb055a36.js";import{s as V,h as $,c as H}from"./json.9d09c79b.js";import{K}from"./network.3775282a.js";import"./utils.27fa2a88.js";import"./date.e5a7b476.js";import"./check-circle.e6a1af54.js";import"./importers.77953277.js";import"./___vite-browser-external_commonjs-proxy.989b4f3a.js";import"./TaskOption.84975d3b.js";import"./Tab.vue_vue_type_script_setup_true_lang.91052857.js";import"./helpers.459d16e1.js";import"./rotate-ccw.a814f58c.js";import"./json.57efca03.js";import"./EnvInput.vue_vue_type_script_setup_true_lang.bebe7083.js";const N={class:"flex flex-col flex-1"},P={class:"sticky z-10 flex items-center justify-between flex-shrink-0 pl-4 overflow-x-auto border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},T={class:"font-semibold truncate text-secondaryLight"},J={class:"flex"},O=["src","alt"],le=w({__name:"ImageLensRenderer",props:{response:null},setup(c){const t=c,d=_(),s=h(""),b=m(()=>v(t.response,B(K("type",["fail","success"])),x(f(e=>e.headers,L(e=>e.key.toLowerCase()==="content-type"),g(f(e=>e.value,V(";"),$,H)))),k(()=>"text/plain"))),{downloadIcon:y,downloadResponse:p}=M(b.value,m(()=>t.response.body));return R(t.response,()=>{s.value="";const e=t.response.body,n=new Uint8Array(e),a=new Blob([n.buffer]),o=new FileReader;o.onload=({target:l})=>{s.value=l.result},o.readAsDataURL(a)}),C(()=>{s.value="";const e=t.response.body,n=new Uint8Array(e),a=new Blob([n.buffer]),o=new FileReader;o.onload=({target:l})=>{s.value=l.result},o.readAsDataURL(a)}),D("response.file.download",()=>p()),(e,n)=>{const a=I,o=S("tippy");return u(),A("div",N,[i("div",P,[i("label",T,F(r(d)("response.body")),1),i("div",J,[c.response.body?j((u(),U(a,{key:0,title:`${r(d)("action.download_file")} <kbd>${r(z)()}</kbd><kbd>J</kbd>`,icon:r(y),onClick:r(p)},null,8,["title","icon","onClick"])),[[o,{theme:"tooltip",allowHTML:!0}]]):E("",!0)])]),i("img",{class:"flex max-w-full border-b border-dividerLight",src:s.value,loading:"lazy",alt:s.value},null,8,O)])}}});export{le as default};
//# sourceMappingURL=ImageLensRenderer.e5762fa9.js.map
