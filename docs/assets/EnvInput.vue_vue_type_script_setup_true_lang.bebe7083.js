import{f as C,h as y,X as g,V as M,g as D,ao as O,o as S,d as K,e as k,N,k as A,aX as H,dD as V,cb as w,b9 as P}from"./index.4c90dc19.js";import{H as j,E as c,e as x,f as J,t as L,p as R,V as X,h as _,k as z,g as F,l as E}from"./utils.27fa2a88.js";const I={class:"relative flex items-center flex-1 flex-shrink-0 py-4 overflow-auto whitespace-nowrap"},U={class:"absolute inset-0 flex flex-1"},$=["placeholder"],W=C({__name:"EnvInput",props:{modelValue:{default:""},placeholder:{default:""},styles:{default:""},envs:{default:null},focus:{type:Boolean,default:!1},selectTextOnMount:{type:Boolean},readonly:{type:Boolean,default:!1}},emits:["update:modelValue","change","paste","enter","keyup","keydown","click"],setup(d,{emit:n}){const l=d,u=y(l.modelValue),o=y(),i=y(null);g(()=>l.modelValue,t=>{var r,s;const a=t.replaceAll(`
`,""),e=(r=o.value)==null?void 0:r.state.doc.toJSON().join(o.value.state.lineBreak);(u.value!==a||t!==e)&&(u.value=a,(s=o.value)==null||s.dispatch({filter:!1,changes:{from:0,to:o.value.state.doc.length,insert:a}}))},{immediate:!0,flush:"sync"});let p=null,v=null;const b=M(H,[]),B=D(()=>l.envs?l.envs.map(t=>({key:t.key,value:t.value,sourceEnv:t.source})):b.value),T=new j(B,o),h=t=>{const a=[c.contentAttributes.of({"aria-label":l.placeholder}),c.updateListener.of(e=>{l.readonly&&(e.view.contentDOM.inputMode="none")}),x.changeFilter.of(()=>!l.readonly),J,l.readonly?c.theme({".cm-content":{caretColor:"var(--secondary-dark-color)",color:"var(--secondary-dark-color)",backgroundColor:"var(--divider-color)",opacity:.25}}):c.theme({}),L({position:"absolute"}),T,R(l.placeholder),c.domEventHandlers({paste(e){var r,s;p=e,v=(s=(r=e.clipboardData)==null?void 0:r.getData("text"))!=null?s:""},drop(e){e.preventDefault()}}),X.fromClass(class{update(e){if(!l.readonly&&e.docChanged){const r=V(u.value);u.value=e.state.doc.toJSON().join(e.state.lineBreak);const s=V(u.value).replaceAll(`
`,"");if(n("update:modelValue",s),n("change",s),!!e.transactions.find(f=>f.isUserEvent("input.paste"))&&p){const f=v;w(()=>{n("paste",{pastedValue:f,prevValue:r})})}else p=null,v=null}}}),_(),z.of([...F])];o.value=new c({parent:t,state:x.create({doc:l.modelValue,extensions:a})})},m=()=>{w(()=>{var t,a;(t=o.value)==null||t.focus(),(a=o.value)==null||a.dispatch({selection:E.create([E.range(0,l.modelValue.length)])})})};return O(()=>{i.value&&(o.value||h(i.value),l.selectTextOnMount&&m())}),g(i,()=>{var t;i.value?(o.value||h(i.value),l.selectTextOnMount&&m()):((t=o.value)==null||t.destroy(),o.value=void 0)}),(t,a)=>(S(),K("div",I,[k("div",U,[k("div",{ref_key:"editor",ref:i,placeholder:d.placeholder,class:N(["flex flex-1",d.styles]),onKeydown:[a[0]||(a[0]=A(P(e=>n("enter",e),["prevent"]),["enter"])),a[3]||(a[3]=e=>n("keydown",e))],onKeyup:a[1]||(a[1]=e=>n("keyup",e)),onClick:a[2]||(a[2]=e=>n("click",e))},null,42,$)])]))}});export{W as _};
//# sourceMappingURL=EnvInput.vue_vue_type_script_setup_true_lang.bebe7083.js.map
