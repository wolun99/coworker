"use strict";(self["webpackChunkcowork"]=self["webpackChunkcowork"]||[]).push([[655],{8655:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var r=t(3396);const o=e=>((0,r.dD)("data-v-4e4fd728"),e=e(),(0,r.Cn)(),e),a=o((()=>(0,r._)("h2",{class:"title"},"로그인",-1))),n={class:"sign_wrap"},u=(0,r.Uk)("회원가입");function l(e,s,t,o,l,i){const d=(0,r.up)("LogIn"),c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[a,(0,r.Wm)(d),(0,r._)("div",n,[(0,r.Wm)(c,{to:"/sign"},{default:(0,r.w5)((()=>[u])),_:1})])])}var i=t(9242);const d={class:"inner"},c={class:"login_form"};function m(e,s,t,o,a,n){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",c,[(0,r._)("form",{action:"",onSubmit:s[3]||(s[3]=(0,i.iM)(((...s)=>e.submitForm&&e.submitForm(...s)),["prevent"]))},[(0,r.wy)((0,r._)("input",{type:"email",name:"email",id:"userEmail",class:"logInput",autoComplete:"off","onUpdate:modelValue":s[0]||(s[0]=e=>a.userId=e),placeholder:"이메일을 입력해주세요"},null,512),[[i.nr,a.userId]]),(0,r.wy)((0,r._)("input",{type:"password",name:"password",id:"userPassword",class:"logInput",placeholder:"비밀번호를 입력해주세요",autoComplete:"off","onUpdate:modelValue":s[1]||(s[1]=e=>a.userPassword=e)},null,512),[[i.nr,a.userPassword]]),(0,r._)("button",{onClick:s[2]||(s[2]=e=>n.Login())},"로그인")],32)])])}t(7658);var p=t(2336),h={data(){return{userId:"",userPassword:""}},methods:{async Login(){const e=(0,p.v0)();await(0,p.Fb)(e,p.aT).then((()=>(0,p.e5)(e,this.userId,this.userPassword).then((e=>{alert("로그인하셨습니다"),this.getUserName(e),this.userNameVal(e)})))).catch((e=>{const s=e.message;console.log(s),alert("정보를 확인하세요")}))},getUserName(e){this.$store.commit("getUserName",e.user)},userNameVal(e){null==e.user.displayName?this.$router.push("/mypage"):this.$router.push("/")}}},w=t(89);const g=(0,w.Z)(h,[["render",m]]);var f=g,v={components:{LogIn:f}};const _=(0,w.Z)(v,[["render",l],["__scopeId","data-v-4e4fd728"]]);var k=_}}]);
//# sourceMappingURL=655.c9114717.js.map