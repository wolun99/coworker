<template>
	<div class="detail_inner">
		<div class="title_wrap">
			<h2>{{ content.title }}</h2>
		</div>
		<div class="content_wrap">
			<p>{{ content.content }}</p>
		</div>
		<Comment></Comment>
		<div class="btn_wrap">
			<button v-if="content.uid == $store.state.userUid" @click="amend()">
				수정하기
			</button>
			<button v-if="content.uid == $store.state.userUid" @click="deleteList()">
				삭제하기
			</button>
			<button @click="goMain()">목록으로</button>
		</div>
	</div>
</template>

<script>
import { db } from '@/main';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import Comment from '@/components/Comment.vue';
export default {
	name: 'DetailComponent',
	data() {
		return {
			content: {},
			contentId: null,
		};
	},
	components: {
		Comment,
	},
	methods: {
		getContentId() {
			this.contentId = this.$route.params.id;
		},
		async getContent() {
			const docRef = doc(db, 'lists', `content ${this.contentId}`);
			const docSnap = await getDoc(docRef);
			this.content = docSnap.data();
		},
		goMain() {
			this.$router.push('/');
		},
		amend() {
			this.$router.push('/amend/' + this.contentId);
		},
		async deleteList() {
			if (confirm('삭제하시겠습니까?')) {
				await deleteDoc(doc(db, 'lists', `content ${this.contentId}`));
				this.$router.push('/');
			} else {
				alert('취소하셨습니다');
			}
		},
	},
	mounted() {
		this.getContentId();
		this.getContent();
	},
};
</script>

<style scoped>
.title_wrap {
	margin-top: 30px;
	background: #eee;
	height: 60px;
	line-height: 60px;
	padding-left: 20px;
}
.content_wrap {
	padding: 40px 20px;
	height: 500px;
	border-bottom: 1px solid #ccc;
}
button {
	display: inline-block;
	align-items: center;
	width: 150px;
	text-align: center;
	/* padding: 0 20px; */
	border: 1px solid transparent;
	border-radius: 3px;
	height: 40px;
	color: #fff;
	background: #3090d6;
	margin-top: 60px;
	font-size: 20px;
	margin-left: 5px;
}

.btn_wrap {
	text-align: right;
	margin-top: 100px;
	height: 60px;
	margin-bottom: 60px;
}
</style>
