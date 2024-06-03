import{u as z,r as F,l as H,b as M,o as d,y as I,i as $,d as s,h as j,G as J,t as l,f as a,w as K,e as i,v as c,c as p,m as _,j as u,a as Q}from"./index-XtAJ1EXg.js";const W={class:"container"},X={class:"order-head"},Y=s("i",{class:"bi bi-arrow-left"},null,-1),Z=s("h3",null,"Update Password",-1),ss={class:"profile-info"},es={class:"text-danger"},ts={class:"mb-2"},as=s("label",{for:"current_password"},[s("span",{class:"text-danger me-1"},"*"),u("Current Password")],-1),os={key:0,class:"text-danger"},rs={class:"mb-2"},ns=s("label",{for:"new_password"},[s("span",{class:"text-danger me-1"},"*"),u("New Password")],-1),ds={key:0,class:"text-danger"},ls={class:"mb-2"},is=s("label",{for:"confirmed_password"},[s("span",{class:"text-danger me-1"},"*"),u("Confirmed Password")],-1),cs={key:0,class:"text-danger"},ps=s("button",{class:"primary-button mt-4"},"Update Password",-1),ws={__name:"PasswordReset",setup(_s){const m=z(),e=F({id:m.user.id,current_pass:null,confirm_pass:null,new_pass:null}),{sendRequest:q,loading:us,error:t}=H(),E=async()=>{const n=await q({url:"/api/customer/update-password",method:"POST",data:e.value});n!=null&&n.data&&($toast.success("Profile Updated..."),await m.logout(),await Q().push({name:"home"}))};return(n,o)=>{const G=M("RouterLink"),O=M("Section");return d(),I(O,{class:"customer-section"},{default:$(()=>{var w,f,h,v,b,x,g,y,P,k,U,V,S,C,N,R,B,T,A,D,L;return[s("div",W,[j(J),s("div",X,[j(G,{to:"/dashboard"},{default:$(()=>[Y]),_:1}),Z]),s("div",ss,[s("p",es,l((h=(f=(w=a(t))==null?void 0:w.response)==null?void 0:f.data)==null?void 0:h.message),1),s("form",{onSubmit:K(E,["prevent"])},[s("div",ts,[as,i(s("input",{type:"password","onUpdate:modelValue":o[0]||(o[0]=r=>e.value.current_pass=r)},null,512),[[c,e.value.current_pass]]),(x=(b=(v=a(t))==null?void 0:v.response)==null?void 0:b.data)!=null&&x.errors.current_pass?(d(),p("small",os,l((P=(y=(g=a(t))==null?void 0:g.response)==null?void 0:y.data)==null?void 0:P.errors.current_pass[0]),1)):_("",!0)]),s("div",rs,[ns,i(s("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=r=>e.value.new_pass=r)},null,512),[[c,e.value.new_pass]]),(V=(U=(k=a(t))==null?void 0:k.response)==null?void 0:U.data)!=null&&V.errors.new_pass?(d(),p("small",ds,l((N=(C=(S=a(t))==null?void 0:S.response)==null?void 0:C.data)==null?void 0:N.errors.new_pass[0]),1)):_("",!0)]),s("div",ls,[is,i(s("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=r=>e.value.confirm_pass=r)},null,512),[[c,e.value.confirm_pass]]),(T=(B=(R=a(t))==null?void 0:R.response)==null?void 0:B.data)!=null&&T.errors.confirm_pass?(d(),p("small",cs,l((L=(D=(A=a(t))==null?void 0:A.response)==null?void 0:D.data)==null?void 0:L.errors.confirm_pass[0]),1)):_("",!0)]),ps],32)])])]}),_:1})}}};export{ws as default};