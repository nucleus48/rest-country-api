import{s as d,S as s,j as n,a as i,u as c,L as m,b as h,r as o}from"./index-34bc2f75.js";import{a as p,b as g,H as v}from"./helpers-d859b282.js";const u=d.div`
  padding: 2rem 1rem;

  img {
    width: 100%;
    height: 250px;
    border: 5px solid ${({theme:e})=>e.shadow};
    border-radius: 5px;
    margin: 2rem 0 3rem 0;
  }

  & > div:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 2em;
  }

  & > div:nth-child(3),
  & > div:nth-child(4) {
    margin-bottom: 3rem;
  }

  & > div > div > span {
    font-weight: 300;
  }

  & > div > div {
    margin-bottom: .5rem;
  }
  & > div:last-of-type {
    font-size: 1.3rem;
  } 
`,f=d(s)`
	  width: 10rem;
    margin: 2rem 0 0 1rem;
    padding: .5rem 2rem;
		display: flex;
		align-items: center;
		gap: 2rem;
    text-decoration: none;
    color: ${({theme:e})=>e.text};
`,x=d.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: .5rem;
  font-size: 1rem;

  a {
    text-decoration: none;
    border-radius: 3px;
    padding: .5rem 1.2rem;
    font-weight: 300;
    font-size: .9rem;

    ${({theme:e})=>`
      color: ${e.text};
      border: 3px solid ${e.shadow};
      background: ${e.element};
    `}
  }
`;function w({data:e}){var t,a;return n(u,{children:[i("img",{src:e.flags.png,alt:"flag"}),i("div",{children:e.name}),n("div",{children:[n("div",{children:["Native Name: ",i("span",{children:e.nativeName})]}),n("div",{children:["Population: ",i("span",{children:p(e.population)})]}),n("div",{children:["Region: ",i("span",{children:e.region})]}),n("div",{children:["Capital: ",i("span",{children:e.capital})]})]}),n("div",{children:[n("div",{children:["Top Level Domain: ",i("span",{children:e.topLevelDomain})]}),n("div",{children:["Currencies: ",i("span",{children:(t=e.currencies)==null?void 0:t.map(r=>r.code)})]}),n("div",{children:["Languages: ",i("span",{children:(a=e.languages)==null?void 0:a.map(r=>r.name)})]})]}),n("div",{children:[i("div",{children:"Border Countries:"}),i(b,{borders:e.borders})]})]})}function y(){const e=c();return n(f,{onClick:()=>e(-1),children:[i(g,{}),i("span",{children:"Back"})]})}function b({borders:e}){return i(x,{children:e==null?void 0:e.map((t,a)=>i(m,{to:`/detail/${t}`,children:t},a))})}function C(){const{alpha:e}=h(),[t,a]=o.useState([]);return o.useEffect(()=>{fetch(`https://restcountries.com/v2/alpha/${e}`).then(r=>r.json()).then(r=>a([r]))},[e]),n("div",{children:[i(v,{}),i(y,{}),t.map((r,l)=>i(w,{data:r},l))]})}export{C as default};
