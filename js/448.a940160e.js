"use strict";(self["webpackChunkcowork"]=self["webpackChunkcowork"]||[]).push([[448],{448:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var o=n(3396);const s=(0,o._)("div",{class:"banner"},null,-1);function m(t,e,n,m,i,c){const d=(0,o.up)("Detail");return(0,o.wg)(),(0,o.iD)("div",null,[s,(0,o.Wm)(d)])}var i=n(7139);const c={class:"detail_inner"},d={class:"title_wrap"},r={class:"content_wrap"},a={class:"btn_wrap"};function u(t,e,n,s,m,u){const l=(0,o.up)("Comment");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",d,[(0,o._)("h2",null,(0,i.zw)(m.content.title),1)]),(0,o._)("div",r,[(0,o._)("p",null,(0,i.zw)(m.content.content),1)]),(0,o.Wm)(l),(0,o._)("div",a,[m.content.uid==t.$store.state.userUid?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:e[0]||(e[0]=t=>u.amend())}," 수정하기 ")):(0,o.kq)("",!0),m.content.uid==t.$store.state.userUid?((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:e[1]||(e[1]=t=>u.deleteList())}," 삭제하기 ")):(0,o.kq)("",!0),(0,o._)("button",{onClick:e[2]||(e[2]=t=>u.goMain())},"목록으로")])])}n(7658);var l=n(2304),h=n(6035),C=n(9242);const p={class:"comment_wrap"};function w(t,e,n,s,m,i){const c=(0,o.up)("CommentList");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",p,[(0,o._)("form",{action:"",onSubmit:e[2]||(e[2]=(0,C.iM)(((...e)=>t.submitForm&&t.submitForm(...e)),["prevent"])),onClick:e[3]||(e[3]=t=>i.logIned())},[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"댓글을 입력해주세요","onUpdate:modelValue":e[0]||(e[0]=t=>m.comment=t)},null,512),[[C.nr,m.comment]]),(0,o._)("button",{onClick:e[1]||(e[1]=t=>i.submitComment())},"등록")],32)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.userComment,((t,n)=>((0,o.wg)(),(0,o.j4)(c,{index:n,comments:t,key:n,onDeleteComment:e[4]||(e[4]=t=>(i.deleteComment(),m.commentIndex=t))},null,8,["index","comments"])))),128))])}const _={class:"commentList_wrap"},b={class:"comment_id"},g={class:"comment_content"};function v(t,e,n,s,m,c){return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("span",b,(0,i.zw)(n.comments.usernick),1),(0,o._)("span",g,(0,i.zw)(n.comments.comment),1),(0,o._)("button",{onClick:e[0]||(e[0]=t=>c.deleteComment())},"삭제")])}var k={props:{comments:Object,index:Number},methods:{deleteComment(){this.$emit("deleteComment",this.index)}}},$=n(89);const I=(0,$.Z)(k,[["render",v]]);var f=I,y={name:"CommentComponent",data(){return{comment:"",userComment:[],userid:"",commentCount:0,commentIndex:null}},components:{CommentList:f},methods:{async submitComment(){if(""==this.comment)return void alert("내용을 입력해주세요");this.addComment();const t=(0,h.hJ)(l.db,"comment");await(0,h.pl)((0,h.JU)(t,`comment ${this.userid}`),{comment:this.userComment}).then((()=>{alert("댓글을 등록했습니다"),this.addCommentList()})),this.initForm()},initForm(){this.comment=""},addComment(){this.userComment.push({usernick:this.$store.state.userName,comment:this.comment,uid:this.$store.state.userUid})},getContentId(){this.userid=this.$route.params.id},async addCommentList(){const t=(0,h.JU)(l.db,"comment",`comment ${this.userid}`),e=await(0,h.QT)(t);void 0!==e.data().comment?this.userComment=e.data().comment:this.userComment=[]},async deleteComment(){this.userComment.splice(this.commentIndex,1),console.log(this.userComment);const t=(0,h.JU)(l.db,"comment",`comment ${this.userid}`);await(0,h.r7)(t,{comment:(0,h.AK)()}),this.addField()},async addField(){const t=(0,h.hJ)(l.db,"comment");await(0,h.pl)((0,h.JU)(t,`comment ${this.userid}`),{comment:this.userComment}).then((()=>{this.addCommentList()}))},logIned(){this.$store.getters.isLogined||(alert("로그인이 필요합니다"),this.$router.push("/login"))}},mounted(){this.getContentId(),this.addCommentList()}};const D=(0,$.Z)(y,[["render",w],["__scopeId","data-v-37bd4923"]]);var L=D,U={name:"DetailComponent",data(){return{content:{},contentId:null}},components:{Comment:L},methods:{getContentId(){this.contentId=this.$route.params.id},async getContent(){const t=(0,h.JU)(l.db,"lists",`content ${this.contentId}`),e=await(0,h.QT)(t);this.content=e.data()},goMain(){this.$router.push("/")},amend(){this.$router.push("/amend/"+this.contentId)},async deleteList(){confirm("삭제하시겠습니까?")?(await(0,h.oe)((0,h.JU)(l.db,"lists",`content ${this.contentId}`)),this.$router.push("/")):alert("취소하셨습니다")}},mounted(){this.getContentId(),this.getContent()}};const x=(0,$.Z)(U,[["render",u],["__scopeId","data-v-6f2cc225"]]);var J=x,F={components:{Detail:J}};const z=(0,$.Z)(F,[["render",m]]);var Z=z}}]);
//# sourceMappingURL=448.a940160e.js.map