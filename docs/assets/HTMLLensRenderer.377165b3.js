import{f as H,E as I,h as w,b4 as T,bf as u,z as $,o as n,d as B,e as r,t as E,j as e,i as t,c as d,N as M,b9 as h,m,aV as f,aq as x,x as S,_ as z}from"./index.4c90dc19.js";import{u as D,a as P}from"./utils.27fa2a88.js";import{I as F,a as N}from"./index.4a35cfb4.js";import{b as V,a as j,c as O,u as W}from"./lens-actions.bb055a36.js";import"./date.e5a7b476.js";import"./Tab.vue_vue_type_script_setup_true_lang.91052857.js";import"./EnvInput.vue_vue_type_script_setup_true_lang.bebe7083.js";import"./importers.77953277.js";import"./json.9d09c79b.js";import"./___vite-browser-external_commonjs-proxy.989b4f3a.js";import"./TaskOption.84975d3b.js";import"./network.3775282a.js";import"./check-circle.e6a1af54.js";import"./helpers.459d16e1.js";import"./rotate-ccw.a814f58c.js";import"./json.57efca03.js";import"./grip-vertical.b726ae3b.js";import"./vuedraggable.umd.4d91746e.js";import"./files.169ec33a.js";import"./index.6567cf9d.js";import"./Shortcode.d8d7d3ad.js";const q={class:"flex flex-col flex-1"},A={class:"sticky z-10 flex items-center justify-between flex-shrink-0 pl-4 overflow-x-auto border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},J={class:"font-semibold truncate text-secondaryLight"},K={class:"flex"},G=H({__name:"HTMLLensRenderer",props:{response:null},setup(s){const g=s,o=I(),b=w(null),i=w(!0),{responseBodyText:l}=V(g.response),{downloadIcon:C,downloadResponse:y}=j("text/html",l),{previewFrame:L,previewEnabled:a,togglePreview:k}=O(!1,l),{copyIcon:R,copyResponse:v}=W(l);return D(b,l,T({extendedEditorConfig:{mode:"htmlmixed",readOnly:!0,lineWrapping:i},linter:null,completer:null,environmentHighlights:!0})),u("response.preview.toggle",()=>k()),u("response.file.download",()=>y()),u("response.copy",()=>v()),(Q,_)=>{const c=S,p=$("tippy");return n(),B("div",q,[r("div",A,[r("label",J,E(e(o)("response.body")),1),r("div",K,[s.response.body?t((n(),d(c,{key:0,title:e(o)("state.linewrap"),class:M({"!text-accent":i.value}),icon:e(P),onClick:_[0]||(_[0]=h(U=>i.value=!i.value,["prevent"]))},null,8,["title","class","icon"])),[[p,{theme:"tooltip"}]]):m("",!0),s.response.body?t((n(),d(c,{key:1,title:`${e(a)?e(o)("hide.preview"):e(o)("response.preview_html")} <kbd>${e(f)()}</kbd><kbd>Shift</kbd><kbd>P</kbd>`,icon:e(a)?e(N):e(F),onClick:h(e(k),["prevent"])},null,8,["title","icon","onClick"])),[[p,{theme:"tooltip",allowHTML:!0}]]):m("",!0),s.response.body?t((n(),d(c,{key:2,title:`${e(o)("action.download_file")} <kbd>${e(f)()}</kbd><kbd>J</kbd>`,icon:e(C),onClick:e(y)},null,8,["title","icon","onClick"])),[[p,{theme:"tooltip",allowHTML:!0}]]):m("",!0),s.response.body?t((n(),d(c,{key:3,title:`${e(o)("action.copy")} <kbd>${e(f)()}</kbd><kbd>.</kbd>`,icon:e(R),onClick:e(v)},null,8,["title","icon","onClick"])),[[p,{theme:"tooltip",allowHTML:!0}]]):m("",!0)])]),t(r("div",{ref_key:"htmlResponse",ref:b,class:"flex flex-col flex-1"},null,512),[[x,!e(a)]]),t(r("iframe",{ref_key:"previewFrame",ref:L,class:"covers-response",src:"about:blank",loading:"lazy",sandbox:""},null,512),[[x,e(a)]])])}}});const ve=z(G,[["__scopeId","data-v-f3c3558c"]]);export{ve as default};
//# sourceMappingURL=HTMLLensRenderer.377165b3.js.map
