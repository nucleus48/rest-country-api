import{s as o,S as s,r as a,j as i,a as t,L as f,G as g,C as p,A as h}from"./index-34bc2f75.js";import{a as v,d as y,F as x,H as C}from"./helpers-d859b282.js";const S=o(s)`
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  
  img {
    width: 100%;
    height: clamp(150px, .1rem, 200px);
    border-bottom: 5px solid ${({theme:e})=>e.shadow};
  }

  & > div {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  }

  & > div > div:first-of-type {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  & > div > div > div {
    margin-bottom: .5em;
  }

  & > div > div > div > span {
    font-weight: 300;
  }
`;function w({data:e}){const n=a.useRef();return i(S,{onClick:()=>n.current.click(),children:[t(f,{ref:n,to:`/detail/${e.alpha3Code}`}),t("img",{src:e.flags.png,alt:"flag"}),i("div",{children:[t("div",{children:e.name}),i("div",{children:[i("div",{children:["Population: ",t("span",{children:v(e.population)})]}),i("div",{children:["Region: ",t("span",{children:e.region})]}),i("div",{children:["Capital: ",t("span",{children:e.capital})]})]})]})]})}const b=o(s)`
  font-weight: 300;
  padding: 1em 1.5em;
  width: 13rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  svg {
    font-size: 1.2rem;
  }
`,k=o(s)`
  width: inherit;
  position: absolute;
  top: calc(100%);
  left: -5px;
  padding: .5rem 0;
`,F=o.div`
  padding: .3rem 1.5em;
  background: ${({select:e,theme:n})=>e?n.shadow:"transparent"};
  text-transform: capitalize;
`;function E(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}]})(e)}function R(){const[e,n]=a.useState(!1);return i(b,{children:[t("div",{children:"Filter by Region"}),t(E,{onClick:()=>n(r=>!r)}),e&&t(k,{children:["Africa","Americas","Asia","Europe","Oceania"].map((r,l)=>t(A,{region:r},l))})]})}function A({region:e}){const{filter:n,dispatch:r}=a.useContext(p);return t(F,{onClick:()=>{let d="";n!=e&&(d=e),r({type:h.SETFILTER,payload:{filter:d}})},select:e==n,children:e})}const z=o(s)`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;

  input {
    flex: 1;
    outline: 0;
    border: 0;
    background: transparent;
  }

  input,
  input::placeholder {
    font-size: 1rem;
    font-weight: 300;
    font-family: Nunito Sans, sans-serif;
    color: ${({theme:e})=>e.input};
  }
`;function H(){const{dispatch:e,search:n}=a.useContext(p),[r,l]=a.useState(n),d="Search for a country...",u=c=>l(c.target.value),m=a.useCallback(y(c=>{e({type:h.SETSEARCH,payload:{search:c}})}),[]);return a.useEffect(()=>{m(r)},[r]),i(z,{children:[t(x,{}),t("input",{type:"text",value:r,onChange:u,placeholder:d})]})}const L=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem 1rem;
`;function M(){const{countries:e}=a.useContext(p);return i(L,{children:[t(H,{}),t(R,{}),e.map(n=>t(w,{data:n},n.id))]})}function T(){return i("div",{children:[t(C,{}),t(M,{})]})}export{T as default};
