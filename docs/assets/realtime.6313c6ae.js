import{_ as k,a as g}from"./Tab.vue_vue_type_script_setup_true_lang.200cfa2f.js";import{f as w,E as h,h as x,U as y,g as v,X as m,o as c,c as p,w as _,d as V,l as T,j as d,F as E,aa as I,ab as A,a as B,ac as N}from"./index.70b9351f.js";const q=w({__name:"realtime",setup(R){const e=h(),i=I(),f=A(),u=[{target:"websocket",title:e("tab.websocket")},{target:"sse",title:e("tab.sse")},{target:"socketio",title:e("tab.socketio")},{target:"mqtt",title:e("tab.mqtt")}],a=x("websocket");return y({title:v(()=>e(`tab.${a.value}`))}),m(a,s=>{i.push(`/realtime/${s}`)}),m(f,s=>{var t,n;const o=s.path;if(((t=s.name)==null?void 0:t.toString())==="realtime"){i.replace("/realtime/websocket");return}const l=o.split("realtime/")[1],r=(n=u.find(({target:b})=>b===l))==null?void 0:n.target;r&&(a.value=r)},{immediate:!0}),(s,o)=>{const l=g,r=k;return c(),p(r,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),styles:"sticky overflow-x-auto flex-shrink-0 bg-primary top-0 z-10","content-styles":"h-[calc(100%-var(--sidebar-primary-sticky-fold)-1px)] !flex"},{default:_(()=>[(c(!0),V(E,null,T(d(u),({target:t,title:n})=>(c(),p(l,{id:t,key:t,label:n},{default:_(()=>[B(d(N))]),_:2},1032,["id","label"]))),128))]),_:1},8,["modelValue"])}}});export{q as default};
//# sourceMappingURL=realtime.6313c6ae.js.map
