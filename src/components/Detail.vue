<template>
	<div class="detail_inner">
		<div class="title_wrap">
			<h2>{{ content.title }}</h2>
		</div>
		<div class="content_wrap">
			<p>{{ content.content }}</p>
		</div>
		<Comment></Comment>
		<button v-if="content.uid == $store.state.userUid" @click="amend()">
			수정하기
		</button>
		<button @click="goMain()">목록으로</button>
	</div>
</template>

<script>
import { db } from '@/main';
import { doc, getDoc } from 'firebase/firestore';
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
</style>
