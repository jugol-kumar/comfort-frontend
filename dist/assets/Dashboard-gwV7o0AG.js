import{u as _,b as l,o as r,c as b,d as s,h as o,i as a,f as c,G as h}from"./index-XtAJ1EXg.js";const n={class:"dashboard customer-section"},m={class:"container"},x={class:"row flex-wrap mt-5 dashboard-items"},p={class:"col-lg-3 col-md-6 col-12"},u=s("div",{class:"dashboard-items__box-icon"},[s("i",{class:"bi bi-bag-check"})],-1),v=s("p",{class:"dashboard-items__box-text text-capitalize"},"Orders",-1),f={class:"col-lg-3 col-md-6 col-12"},g=s("div",{class:"dashboard-items__box-icon"},[s("i",{class:"bi bi-person"})],-1),k=s("p",{class:"dashboard-items__box-text text-capitalize"},"Profile",-1),w={class:"col-lg-3 col-md-6 col-12"},z=s("div",{class:"dashboard-items__box-icon"},[s("i",{class:"bi bi-shield-lock"})],-1),B=s("p",{class:"dashboard-items__box-text text-capitalize"},"Password",-1),C={class:"col-lg-3 col-md-6 col-12"},L=s("div",{class:"dashboard-items__box-icon"},[s("i",{class:"bi bi-geo-alt"})],-1),A=s("p",{class:"dashboard-items__box-text text-capitalize"},"Address",-1),N={class:"col-lg-3 col-md-6 col-12"},P=s("div",{class:"dashboard-items__box-icon"},[s("i",{class:"bi bi-heart"})],-1),R=s("p",{class:"dashboard-items__box-text text-capitalize"},"Wishlist",-1),S={class:"col-lg-3 col-md-6 col-12"},V=s("div",{class:"dashboard-items__box-icon"},[s("i",{class:"bi bi-box-arrow-right"})],-1),j=s("p",{class:"dashboard-items__box-text text-capitalize"},"Logout",-1),D=[V,j],W={__name:"Dashboard",setup(E){const e=_();return(G,i)=>{const t=l("RouterLink");return r(),b("section",n,[s("div",m,[o(h),s("div",x,[s("div",p,[o(t,{to:"/order",class:"dashboard-items__box"},{default:a(()=>[u,v]),_:1})]),s("div",f,[o(t,{to:"/customer/profile",class:"dashboard-items__box"},{default:a(()=>[g,k]),_:1})]),s("div",w,[o(t,{to:"/customer/reset-password",class:"dashboard-items__box"},{default:a(()=>[z,B]),_:1})]),s("div",C,[o(t,{to:"/customer/address",class:"dashboard-items__box"},{default:a(()=>[L,A]),_:1})]),s("div",N,[o(t,{to:"/customer/wishlist",class:"dashboard-items__box"},{default:a(()=>[P,R]),_:1})]),s("div",S,[s("a",{href:"javascript:void(0)",onClick:i[0]||(i[0]=(...d)=>c(e).logout&&c(e).logout(...d)),class:"dashboard-items__box"},D)])])])])}}};export{W as default};