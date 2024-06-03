import{l as be,r as m,u as ye,s as xe,b as we,o as n,c as i,d as e,h as ve,i as ke,F as fe,x as he,f as r,t as l,m as c,w as Ae,e as p,v as _,D as Ie,G as Ce,j as Ne}from"./index-XtAJ1EXg.js";const Ve={class:"customer-section bg-white"},$e={class:"container"},Ue={class:"address"},Se={class:"order-head justify-content-between mb-4"},Be={class:"d-flex align-items-center gap-2"},De=e("i",{class:"bi bi-arrow-left"},null,-1),Fe=e("h3",null,"Address Book",-1),Me=e("div",{class:"d-flex align-items-center"},[e("i",{class:"bi bi-plus text-white"}),Ne(" Add New Address ")],-1),ze=[Me],Pe={class:"checkout__shipping-add bg-transparent p-0"},je={class:"d-flex flex-wrap created-address"},Le={for:"add-1",class:"w-100 p-5"},Re={class:"mb-2"},Te={class:"mb-2"},Ee={key:0,class:"checkout__shipping-add-wrapper"},Ze={class:"checkout__shipping-add-wrapper-new"},qe=e("i",{class:"bi bi-x-lg"},null,-1),Ge=[qe],He={class:"mb-5"},Je=e("h3",{class:"p-0 m-0"},"New Address",-1),Ke={key:0,class:"text-danger"},Oe={class:"form-floating"},Qe=e("label",{for:"floatingInput"},"Full Name",-1),We={key:0,class:"text-danger"},Xe={class:"form-floating"},Ye=e("label",{for:"floatingInput"},"Address",-1),et={key:0,class:"text-danger"},tt={class:"form-floating"},st=e("label",{for:"floatingInput"},"Email",-1),ot={key:0,class:"text-danger"},lt={class:"d-flex align-items-center gap-3"},at=e("option",{value:"null",selected:"",disabled:""},"Add New City",-1),nt=["value"],it={class:"form-floating"},rt=e("label",{for:"floatingInput"},"State",-1),dt={class:"form-floating"},ut=e("label",{for:"floatingInput"},"ZIP Code",-1),ct={key:0,class:"text-danger"},pt={class:"form-floating"},_t=e("label",{for:"floatingInput"},"Phone Number",-1),mt={key:0,class:"text-danger"},vt={class:"d-flex align-items-center justify-content-end gap-3"},ft=e("button",{class:"primary-button",type:"submit"},"Save",-1),yt={__name:"Address",setup(ht){const{loading:gt,error:a,sendRequest:h}=be(),d=m(!1);m(!1);const v=ye(),o=m({title:null,email:null,phone:null,address:null,area:null,state:null,zip_code:null}),ge=async()=>{var s;await h({method:"post",data:{user_id:(s=v==null?void 0:v.user)==null?void 0:s.id,...o.value},url:"/api/save-new-address"})!==void 0&&(await y(),d.value=!1,$toast.success("Address Added"))},g=m(null),b=m(null),y=async()=>{var f;const u=await v.getToken(),s=await h({method:"get",url:"/api/address",headers:{Authorization:`Bearer ${u}`}});g.value=(f=s==null?void 0:s.data)==null?void 0:f.addresses};return xe(async()=>{await y();const u=await h({method:"get",url:"/api/all-areas"});b.value=u==null?void 0:u.data}),(u,s)=>{var x,w,k,A,I,C,N,V,$,U,S,B,D,F,M,z,P,j,L,R,T,E,Z,q,G,H,J,K,O,Q,W,X,Y,ee,te,se,oe,le,ae,ne,ie,re,de,ue,ce,pe;const f=we("RouterLink");return n(),i("section",Ve,[e("div",$e,[ve(Ce),e("div",Ue,[e("div",Se,[e("div",Be,[ve(f,{to:"/dashboard"},{default:ke(()=>[De]),_:1}),Fe]),e("button",{class:"primary-button",onClick:s[0]||(s[0]=t=>d.value=!0)},ze)]),e("div",Pe,[e("div",je,[(n(!0),i(fe,null,he(g.value,t=>{var _e,me;return n(),i("div",{class:"col-md-6 col-12 p-3",key:`area-${t.id}`},[e("label",Le,[e("h3",null,l(t==null?void 0:t.title),1),e("div",null,[e("p",Re,l(t==null?void 0:t.address),1),e("p",null,l(t==null?void 0:t.email),1),e("p",Te,l(t==null?void 0:t.phone),1),e("p",null,"Area: "+l((_e=t==null?void 0:t.order_area)==null?void 0:_e.area_name)+" & Delivery Charge: "+l((me=t==null?void 0:t.order_area)==null?void 0:me.delivery_charge)+" $",1)])])])}),128))]),d.value?(n(),i("div",Ee,[e("div",Ze,[e("button",{class:"close",onClick:s[1]||(s[1]=t=>d.value=!d.value)},Ge),e("div",He,[Je,(k=(w=(x=r(a))==null?void 0:x.response)==null?void 0:w.data)!=null&&k.message?(n(),i("small",Ke,l((C=(I=(A=r(a))==null?void 0:A.response)==null?void 0:I.data)==null?void 0:C.message),1)):c("",!0)]),e("form",{onSubmit:Ae(ge,["prevent"])},[e("div",Oe,[p(e("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"Full Name","onUpdate:modelValue":s[2]||(s[2]=t=>o.value.title=t)},null,512),[[_,o.value.title]]),Qe,(U=($=(V=(N=r(a))==null?void 0:N.response)==null?void 0:V.data)==null?void 0:$.errors)!=null&&U.title?(n(),i("small",We,l((F=(D=(B=(S=r(a))==null?void 0:S.response)==null?void 0:B.data)==null?void 0:D.errors)==null?void 0:F.title[0]),1)):c("",!0)]),e("div",Xe,[p(e("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"Address","onUpdate:modelValue":s[3]||(s[3]=t=>o.value.address=t)},null,512),[[_,o.value.address]]),Ye,(j=(P=(z=(M=r(a))==null?void 0:M.response)==null?void 0:z.data)==null?void 0:P.errors)!=null&&j.address?(n(),i("small",et,l((E=(T=(R=(L=r(a))==null?void 0:L.response)==null?void 0:R.data)==null?void 0:T.errors)==null?void 0:E.address[0]),1)):c("",!0)]),e("div",tt,[p(e("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"email","onUpdate:modelValue":s[4]||(s[4]=t=>o.value.email=t)},null,512),[[_,o.value.email]]),st,(H=(G=(q=(Z=r(a))==null?void 0:Z.response)==null?void 0:q.data)==null?void 0:G.errors)!=null&&H.email?(n(),i("small",ot,l((Q=(O=(K=(J=r(a))==null?void 0:J.response)==null?void 0:K.data)==null?void 0:O.errors)==null?void 0:Q.email[0]),1)):c("",!0)]),e("div",lt,[p(e("select",{"onUpdate:modelValue":s[5]||(s[5]=t=>o.value.area=t),class:"form-select","aria-label":"Default select example"},[at,(n(!0),i(fe,null,he(b.value,t=>(n(),i("option",{key:`single-i-${t.id}`,value:t.id},l(t==null?void 0:t.area_name),9,nt))),128))],512),[[Ie,o.value.area]]),e("div",it,[p(e("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"State","onUpdate:modelValue":s[6]||(s[6]=t=>o.value.state=t)},null,512),[[_,o.value.state]]),rt]),e("div",dt,[p(e("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"ZIP Code","onUpdate:modelValue":s[7]||(s[7]=t=>o.value.zip_code=t)},null,512),[[_,o.value.zip_code]]),ut])]),(ee=(Y=(X=(W=r(a))==null?void 0:W.response)==null?void 0:X.data)==null?void 0:Y.errors)!=null&&ee.area?(n(),i("small",ct,l((le=(oe=(se=(te=r(a))==null?void 0:te.response)==null?void 0:se.data)==null?void 0:oe.errors)==null?void 0:le.area[0]),1)):c("",!0),e("div",null,[e("div",pt,[p(e("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"Phone Number","onUpdate:modelValue":s[8]||(s[8]=t=>o.value.phone=t)},null,512),[[_,o.value.phone]]),_t,(re=(ie=(ne=(ae=r(a))==null?void 0:ae.response)==null?void 0:ne.data)==null?void 0:ie.errors)!=null&&re.phone?(n(),i("small",mt,l((pe=(ce=(ue=(de=r(a))==null?void 0:de.response)==null?void 0:ue.data)==null?void 0:ce.errors)==null?void 0:pe.phone[0]),1)):c("",!0)])]),e("div",vt,[ft,e("button",{class:"secondary-button",onClick:s[9]||(s[9]=t=>d.value=!d.value)},"Close")])],32)])])):c("",!0)])])])])}}};export{yt as default};