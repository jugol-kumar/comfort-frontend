import{l as g,r as v,q as y,s as k,o as e,c as o,d as s,h as u,F as _,x as h,f as q,y as w,P as $,S as P}from"./index-VXieFc6Y.js";import{_ as x}from"./Breadcrumb-QHMPd4nV.js";const B={class:"pb-8"},C={class:"container-fluid"},R={class:"row"},N={class:"col-lg-12 col-12"},S={class:"products"},b={key:0,class:"row row-cols-6 match-height"},j={key:1},F={class:"row row-cols-5 match-height"},I={key:2},U=s("h2",null,"No product found search query",-1),V=[U],O={__name:"Products",setup(A){const{loading:m,error:E,sendRequest:p}=g(),c=v(null),r=y();return k(async()=>{const d=Object.keys(r.query).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(r.query[t])}`).join("&"),a=await p({method:"get",url:`/api/product-filter?${d}`});c.value=a==null?void 0:a.data}),(d,a)=>{var t,i,l;return e(),o("section",B,[s("div",C,[u(x),s("div",R,[s("div",N,[s("div",S,[((i=(t=c.value)==null?void 0:t.data)==null?void 0:i.length)>0?(e(),o("div",b,[(e(!0),o(_,null,h((l=c.value)==null?void 0:l.data,(n,f)=>(e(),w(P,{key:`single-f-p-${f}`,info:n},null,8,["info"]))),128))])):q(m)?(e(),o("div",j,[s("div",F,[(e(),o(_,null,h(25,n=>u($,{key:`place-image-${n}`})),64))])])):(e(),o("div",I,V))])])])])])}}};export{O as default};
