import{u as j,h as g}from"./goober.a82ec73e.js";import"./react.7518b171.js";import{j as w}from"./@mui.089928f4.js";function O(t,e){if(t==null)return{};var i={},r=Object.keys(t),n,o;for(o=0;o<r.length;o++)n=r[o],!(e.indexOf(n)>=0)&&(i[n]=t[n]);return i}function s(t,e){return e||(e=t.slice(0)),t.raw=e,t}var _=["className","color","width","height","style","duration"],p,v,u,N=g(p||(p=s([`
  50%,
  100% {
    transform: rotate(360deg);
  }
`]))),k=g(v||(v=s([`
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`]))),B=function(e){var i=e.className,r=i===void 0?"":i,n=e.color,o=n===void 0?"#0d6efd":n,c=e.width,a=c===void 0?"2rem":c,d=e.height,l=d===void 0?"2rem":d,m=e.style,b=m===void 0?{}:m,h=e.duration,f=h===void 0?"1.4s":h,x=O(e,_),y=typeof a=="number"?a+"px":a,$=typeof l=="number"?l+"px":l;return w("div",{...Object.assign({},x,{style:b,className:j(u||(u=s([`
          position: relative;
          width: `,`;
          height: `,`;
          border: 3px solid `,`;
          overflow: hidden;
          animation: `," ",` ease infinite;

          &::before {
            content: "";
            position: absolute;
            top: -3px;
            left: -3px;
            width: calc(100% + 3px);
            height: calc(100% + 3px);
            background-color: `,`;
            opacity: 0.75;
            transform-origin: center bottom;
            transform: scaleY(1);
            animation: `," ",` linear infinite;
          }
        `])),y,$,o,N,f,o,k,f)+(" "+r)})})};export{B as F};
