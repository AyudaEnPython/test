import{j as e}from"./jsx-runtime.DxitwGCr.js";import{r as d}from"./index.t7h89SRg.js";class h{constructor(s,n,a){this.id=s;for(const r in n)this[r]=n[r];this.maxIndex=a}pad(s,n=3,a="0"){return s.toString().padStart(n,a)}percentage(){return`width: ${this.rating}%;`}pageNumber(){return this.pad(this.id)}challenge(){return`Reto ${this.pad(this.id)}/${this.pad(this.maxIndex)}`}getTest(){return this.test}}function m(){const[t,s]=d.useState([]),[n,a]=d.useState(0),[r,l]=d.useState(0);d.useEffect(()=>{o()},[]);const o=()=>{fetch("https://ayudaenpython.com/challenges/data/").then(i=>{if(!i.ok)throw new Error("Error!");return i.json()}).then(i=>{const c=i.data.length,x=i.data.map(u=>new h(u.id,u.attributes,c));s(x),l(c)}).catch(i=>{throw console.error("Error:",i),i})};return{index:n,prevIndex:()=>n>=1&&a(n-1),nextIndex:()=>n<=r-2&&a(n+1),getCurrent:()=>t[n]}}function p({value:t,onDecrement:s,onIncrement:n,onChange:a}){return e.jsx("div",{className:"py-px px-px inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700","data-hs-input-number":"",children:e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx("button",{type:"button",className:"size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900  dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",tabIndex:"-1","aria-label":"Decrease","data-hs-input-number-decrement":"",onClick:s,children:e.jsx("span",{className:"material-symbols-outlined text-neutral-400",children:"chevron_left"})}),e.jsx("input",{className:"p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white",style:{MozAppearance:"textfield"},type:"number","aria-roledescription":"Number field",value:t,onChange:a}),e.jsx("button",{type:"button",className:"size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",tabIndex:"-1","aria-label":"Increase","data-hs-input-number-increment":"",onClick:n,children:e.jsx("span",{className:"material-symbols-outlined text-neutral-400",children:"chevron_forward"})})]})})}function b({hints:t}){const[s,n]=d.useState(!1),a=()=>{n(!s)};return e.jsxs("div",{className:"max-w-md p-2 mt-2 bg-neutral-900/50 rounded-lg shadow",children:[e.jsxs("button",{type:"button",className:"hs-collapse-toggle py-px px-4 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-transparent text-neutral-500 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none","aria-expanded":s,"aria-controls":"hs-hint",onClick:a,children:[`${s?"Hide":"Show"} hints`,e.jsx("svg",{className:`hs-collapse-open:rotate-180 shrink-0 size-4 text-neutral-500 ${s?"rotate-180":""}`,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m6 9 6 6 6-6"})})]}),e.jsx("div",{id:"hs-hint",className:`hs-collapse ${s?"block":"hidden"} w-full overflow-hidden transition-[height] duration-300`,"aria-labelledby":"hs-hint-collapse",children:e.jsx("div",{className:"px-2 py-px",children:e.jsx("ul",{className:"list-inside list-disc text-neutral-500",id:"e-hints",children:t.map((r,l)=>e.jsx("li",{className:"text-xs",children:r},l))})})})]})}function g({exercise:t,index:s,prevIndex:n,nextIndex:a}){if(!t)return null;const r=l=>{const o=Number(l.target.value);isNaN(o)||setIndexByNumber(o)};return e.jsx(e.Fragment,{children:e.jsxs("div",{id:"problem",className:"mb-4 max-w-md p-4 bg-neutral-800/50 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-sm font-semibold leading-6 text-blue-400",id:"e-number",children:t.challenge()}),e.jsx(p,{value:s+1,onDecrement:n,onIncrement:a,onChange:r})]}),e.jsx("h1",{className:"text-2xl text-yellow-300 font-pixel",id:"e-title",children:t.title}),e.jsxs("div",{className:"mb-2 ratings",children:[e.jsx("div",{className:"empty-stars"}),e.jsx("div",{id:"e-rating",className:"full-stars",style:{width:`${t.rating}%`}})]}),e.jsx("p",{className:"mb-2 text-sm leading-6 text-neutral-400",id:"e-body",children:t.body}),e.jsx("p",{className:"mb-2 text-sm leading-6 text-neutral-400",id:"e-prompt",children:t.prompt}),e.jsx("h2",{className:"mb-2 text-base font-pixel text-blue-400",children:"Entrada"}),e.jsx("p",{className:"mb-2 text-sm text-neutral-400",id:"e-input",children:t.input}),e.jsx("h2",{className:"mb-2 text-base font-pixel text-blue-400",children:"Salida"}),e.jsx("p",{className:"text-sm text-neutral-400",id:"e-output",children:t.output}),e.jsx(b,{hints:t.hints})]})})}function v(){const{index:t,prevIndex:s,nextIndex:n,getCurrent:a}=m(),[r,l]=d.useState(null);return d.useEffect(()=>{l(a())},[t,a]),e.jsx("div",{className:"container mx-auto",children:e.jsx(g,{exercise:r,index:t,prevIndex:s,nextIndex:n})})}export{v as default};
