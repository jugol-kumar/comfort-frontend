import{l as O,r as V,s as A,u as B,b as N,o as d,c as n,d as o,h as l,i as w,F as R,x as F,f as j,G as z,t as e,j as i}from"./index-XtAJ1EXg.js";const C={class:"customer-section"},D={class:"container"},I={class:"order py-5"},P={class:"order-head"},S=o("i",{class:"bi bi-arrow-left"},null,-1),q=o("h3",null,"Order History",-1),E={class:"order-items row flex-column gap-5 mt-4"},G={class:"order-items__item-head border-bottom"},H={class:"text-capitalize fs-3 fw-semibold"},M=o("p",{class:"pending"},[o("i",{class:"bi bi-check2-circle"}),i(" Pending ")],-1),T={class:"order-items__item-body"},U={class:"thumbnail m-4"},J=["src"],K={class:"d-flex justify-content-between align-items-center w-100"},Q={class:"w-50"},W={class:"title"},X=o("strong",null,"Variations:",-1),Y={class:"fw-semibold fs-3"},Z={key:1},m={key:2},ts={__name:"Order",setup(ss){const{sendRequest:x,loading:$,error:os}=O(),c=V(null);return A(async()=>{var r;const{user:t}=B(),a=await x({method:"get",url:"/api/my-orders",headers:{Authorization:`Bearer ${t==null?void 0:t.token}`}});c.value=(r=a==null?void 0:a.data)==null?void 0:r.data,console.log(a)}),(t,a)=>{var _,u,h;const r=N("RouterLink");return d(),n("section",C,[o("div",D,[l(z),o("div",I,[o("div",P,[l(r,{to:"/dashboard"},{default:w(()=>[S]),_:1}),q]),o("div",E,[(u=(_=c.value)==null?void 0:_.data)!=null&&u.length?(d(!0),n(R,{key:0},F((h=c.value)==null?void 0:h.data,(s,L)=>{var p,g,v,f,b,y,k;return d(),n("div",{class:"order-items__item",key:`single-order-${L}`},[o("div",G,[o("div",null,[o("h3",H,"Order #"+e(s.id),1),o("p",null,"Order Date: "+e(s.order_date),1)]),M]),o("div",T,[o("div",U,[o("img",{src:`${t.$API_URL}/storage/uploads/${(v=(g=(p=s==null?void 0:s.orderdetails[0])==null?void 0:p.product)==null?void 0:g.images[0])==null?void 0:v.image}`,class:"rounded-md",alt:""},null,8,J)]),o("div",K,[o("div",Q,[o("h3",W,e((b=(f=s==null?void 0:s.orderdetails[0])==null?void 0:f.product)==null?void 0:b.title),1),o("p",null,"+ "+e(s!=null&&s.orderdetails?s==null?void 0:s.orderdetails.length:" ")+" item(s)",1),X,i(" "+e((k=(y=s==null?void 0:s.orderdetails[0])==null?void 0:y.stoke)==null?void 0:k.varient),1)]),o("p",Y,"$ "+e(s==null?void 0:s.grand_total),1),o("div",null,[l(r,{to:{name:"orderInvoice",params:{id:s==null?void 0:s.id}},class:"primary-button"},{default:w(()=>[i("View")]),_:2},1032,["to"])])])])])}),128)):j($)?(d(),n("h2",Z,"Loading.......")):(d(),n("h2",m,"No Orders Found..."))])])])])}}};export{ts as default};