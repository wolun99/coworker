<template>
	<div>
		<div class="comment_wrap">
			<form action="" @submit.prevent="submitForm">
				<input
					type="text"
					placeholder="댓글을 입력해주세요"
					v-model="comment"
				/>
				<button @click="submitComment()">등록</button>
			</form>
		</div>
		<CommentList
			:comments="comments"
			v-for="comments in userComment"
			:key="comments"
		></CommentList>
	</div>
</template>

<script>
import { db } from '@/main';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import CommentList from '@/components/CommentList.vue';
export default {
	name: 'CommentComponent',
	data() {
		return {
			comment: '',
			userComment: [],
			userid: '',
			commentCount: 0,
		};
	},
	components: {
		CommentList,
	},
	methods: {
		async submitComment() {
			this.addComment();
			const commentRef = collection(db, 'comment');
			await setDoc(doc(commentRef, `comment ${this.userid}`), {
				comment: this.userComment,
			}).then(() => {
				alert('댓글을 등록했습니다');
				this.addCommentList();
			});
			this.initForm();
		},
		initForm() {
			this.comment = '';
		},
		addComment() {
			this.userComment.push({
				usernick: this.$store.state.userName,
				comment: this.comment,
				uid: this.$store.state.userUid,
			});
		},
		getContentId() {
			this.userid = this.$route.params.id;
		},
		async addCommentList() {
			const docRef = doc(db, 'comment', `comment ${this.userid}`);
			const docSnap = await getDoc(docRef);
			this.userComment = docSnap.data().comment;
		},
	},
	mounted() {
		this.getContentId();
		this.addCommentList();
	},
};
</script>

<style></style>
