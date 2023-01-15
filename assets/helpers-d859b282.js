import{G as o,s as i,S as l,r as h,C as g,j as n,a as s,A as m}from"./index-34bc2f75.js";function f(e){return o({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function u(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}function x(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}const p=i(l)`
	padding: 2rem 1rem;
	display: flex;
	justify-content: space-between;
  border: 0;
	border-bottom: 5px solid${({theme:e})=>e.shadow};
  border-radius: 0;

	svg {
		font-size: 0.8rem;
		margin-right: 0.5em;
	}
`;function w(){const{darkTheme:e,dispatch:t}=h.useContext(g);return n(p,{children:[s("div",{children:"Where in the world?"}),n("div",{onClick:()=>t({type:m.TOGGLETHEME}),children:[s(u,{}),n("span",{children:[e?"Dark":"Light"," mode"]})]})]})}function T(e,t=500){let r;return(...a)=>{clearTimeout(r),r=setTimeout(()=>e(...a),t)}}function b(e){return[...e.toString()].reverse().map((a,c,d)=>(c+1)%3==0&&c+1!=d.length?","+a:a).reverse().join("")}export{x as F,w as H,b as a,f as b,T as d};
