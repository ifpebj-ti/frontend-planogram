(()=>{var e={};e.id=401,e.ids=[401],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},842:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>x,tree:()=>d});var o=r(260),s=r(8203),n=r(5155),i=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["prateleira1",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,615)),"/home/violeta/Documentos/frontend-planogram/app/prateleira1/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9611)),"/home/violeta/Documentos/frontend-planogram/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/home/violeta/Documentos/frontend-planogram/app/prateleira1/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},x=new o.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/prateleira1/page",pathname:"/prateleira1",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7820:(e,t,r)=>{Promise.resolve().then(r.bind(r,615))},7548:(e,t,r)=>{Promise.resolve().then(r.bind(r,384))},9352:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},4200:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},1159:()=>{},4303:()=>{},5613:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var o=r(5512),s=r(8009),n=r(6008),i=r(5103),a=r(4098);function l(){let[e,t]=(0,s.useState)(!1);return(0,o.jsxs)("div",{className:`sidenav ${e?"expanded":""}`,children:[(0,o.jsx)("button",{className:"toggle-button",onClick:()=>t(!e),children:(0,o.jsx)(i.default,{src:e?"/assets/images/logo.png":"/assets/images/logo2.png",alt:"Menu Toggle Icon",width:200,height:190})}),(0,o.jsxs)("div",{className:"menu-content",children:[(0,o.jsx)("div",{className:"menu-item",children:(0,o.jsxs)(n.default,{href:"/",children:[(0,o.jsx)(a.rQ8,{size:24,className:"icon"}),e&&(0,o.jsx)("span",{children:"In\xedcio"})]})}),(0,o.jsx)("div",{className:"menu-item",children:(0,o.jsxs)(n.default,{href:"/importar",children:[(0,o.jsx)(a.PiR,{size:24,className:"icon"}),e&&(0,o.jsx)("span",{children:"Importar"})]})}),(0,o.jsx)("div",{className:"menu-item",children:(0,o.jsxs)(n.default,{href:"/configuracoes",children:[(0,o.jsx)(a.Pcn,{size:24,className:"icon"}),e&&(0,o.jsx)("span",{children:"Configura\xe7\xf5es"})]})}),(0,o.jsx)("div",{className:"menu-item",children:(0,o.jsxs)(n.default,{href:"/sair",children:[(0,o.jsx)(a.axc,{size:24,className:"icon"}),e&&(0,o.jsx)("span",{children:"Sair"})]})})]})]})}r(2482)},384:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var o=r(5512);r(8009);var s=r(6095),n=r.n(s),i=r(5613);function a({textobotao:e,pressione:t,corDeFundo:r}){return(0,o.jsx)("div",{style:{width:"100px",height:"100px",background:r,boxShadow:"0px 4.8px 4.8px rgba(0, 0, 0, 0.25)",borderRadius:"6px",border:"1.2px solid rgba(0, 0, 0, 0.46)",display:"flex",alignItems:"center",justifyContent:"center",transform:"rotate(0deg)",cursor:"pointer"},onClick:t,children:(0,o.jsx)("span",{style:{fontSize:"14px",fontWeight:"bold",color:"#000",transform:"rotate(15deg)",textAlign:"center"},children:e})})}function l({title:e,value:t}){return(0,o.jsxs)("div",{style:{width:"150px",height:"100px",backgroundColor:"#FFFFFF",borderRadius:"8px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px"},children:[(0,o.jsx)("h4",{style:{fontSize:"14px",margin:"0",color:"#555"},children:e}),(0,o.jsx)("strong",{style:{fontSize:"24px",margin:"0",color:"#004080"},children:t})]})}let d=[{color:"#A8F0A4",text:"Sa\xedda de produto dentro do esperado"},{color:"#F9F571",text:"Sa\xedda de produto na m\xe9dia. Conv\xe9m rever a disposi\xe7\xe3o na prateleira"},{color:"#F58282",text:"Produtos sem sa\xedda. Reveja com urg\xeancia a disposi\xe7\xe3o na prateleira"}];function p(){return(0,o.jsxs)("div",{style:{width:"100%",backgroundColor:"#FFFFFF",borderRadius:"8px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",padding:"10px 20px"},children:[(0,o.jsx)("h4",{style:{fontSize:"16px",marginBottom:"10px",color:"#555"},children:"Legenda"}),(0,o.jsx)("ul",{style:{listStyleType:"none",padding:"0",margin:"0"},children:d.map((e,t)=>(0,o.jsxs)("li",{style:{display:"flex",alignItems:"center",marginBottom:"8px",fontSize:"14px",color:"#555"},children:[(0,o.jsx)("div",{style:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:e.color,marginRight:"10px"}}),e.text]},t))})]})}var c=r(8686);function x({label:e,onClick:t,className:r}){return(0,o.jsx)("button",{onClick:t,className:"button",children:e})}function u(){let e=e=>{alert(`Voc\xea clicou no produto: ${e}`)},t=(0,c.useRouter)(),r=()=>{t.push("/visualizar")};return(0,o.jsxs)("div",{className:"containerPratileira1",children:[(0,o.jsxs)("div",{style:{width:"600px",height:"700px",backgroundImage:"url('/estante.png')",backgroundSize:"cover",backgroundPosition:"center",position:"relative",padding:"5%"},children:[(0,o.jsxs)("div",{style:{position:"absolute",top:"60px",left:"40px",display:"flex",gap:"10px"},children:[(0,o.jsx)(a,{textobotao:"Shampoo",corDeFundo:"#A8F0A4",pressione:()=>e("Shampoo")}),(0,o.jsx)(a,{textobotao:"Condicionador",corDeFundo:"#F9F571",pressione:()=>e("Condicionador")}),(0,o.jsx)(a,{textobotao:"Chupeta",corDeFundo:"#F58282",pressione:()=>e("Chupeta")})]}),(0,o.jsxs)("div",{style:{position:"absolute",top:"180px",left:"40px",display:"flex",gap:"10px"},children:[(0,o.jsx)(a,{textobotao:"Shampoo",corDeFundo:"#A8F0A4",pressione:()=>e("Shampoo")}),(0,o.jsx)(a,{textobotao:"Condicionador",corDeFundo:"#F9F571",pressione:()=>e("Condicionador")}),(0,o.jsx)(a,{textobotao:"Chupeta",corDeFundo:"#F58282",pressione:()=>e("Chupeta")})]})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"20px",backgroundColor:"#F5F5F5",padding:"15px"},children:[(0,o.jsxs)("div",{className:"flex justify-center items-center h-screen bg-gray-100 m-8",children:[(0,o.jsx)(x,{label:"Visualizar",onClick:r}),(0,o.jsx)(x,{label:"Editar",onClick:r})]}),(0,o.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,o.jsx)(l,{title:"Total de slots",value:15}),(0,o.jsx)(l,{title:"Total de produtos",value:250})]}),(0,o.jsx)(p,{})]})]})}function m(){return(0,o.jsxs)("div",{children:[(0,o.jsxs)(n(),{children:[(0,o.jsx)("title",{children:"Prateleira 1"}),(0,o.jsx)("meta",{name:"desci\xe7\xe3o",content:"Sistema planograma"})]}),(0,o.jsx)(i.A,{}),(0,o.jsxs)("div",{className:"Prin",children:[(0,o.jsx)("h1",{children:"Vis\xe3o Geral: Prateleira 01"}),(0,o.jsx)("div",{className:"centro",children:(0,o.jsx)(u,{})})]}),(0,o.jsx)("footer",{className:"footer",children:(0,o.jsx)("p",{children:"Todos os direitos reservados"})})]})}r(2262),r(3926),r(1778)},9611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>l});var o=r(2740),s=r(7502),n=r.n(s),i=r(4311),a=r.n(i);r(8708),r(2704);let l={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,o.jsx)("html",{lang:"en",children:(0,o.jsx)("body",{className:`${n().variable} ${a().variable} antialiased`,children:e})})}},615:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});let o=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/violeta/Documentos/frontend-planogram/app/prateleira1/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/violeta/Documentos/frontend-planogram/app/prateleira1/page.tsx","default")},6055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(8077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2262:()=>{},2704:()=>{},1778:()=>{},2482:()=>{},3926:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[989,590,77,815],()=>r(842));module.exports=o})();