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
			:index="i"
			:comments="comments"
			v-for="(comments, i) in userComment"
			:key="i"
			@deleteComment="deleteComment(), (commentIndex = $event)"
		></CommentList>
	</div>
</template>

<script>
import { db } from '@/main';
import {
	collection,
	doc,
	setDoc,
	getDoc,
	updateDoc,
	deleteField,
} from 'firebase/firestore';
import CommentList from '@/components/CommentList.vue';
export default {
	name: 'CommentComponent',
	data() {
		return {
			comment: '',
			userComment: [],
			userid: '',
			commentCount: 0,
			commentIndex: null,
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
			const result = await getDoc(docRef);
			console.log(result.data().comment);
			if (result.data().comment !== undefined) {
				this.userComment = result.data().comment;
			} else {
				this.userComment = [];
			}
		},
		async deleteComment() {
			this.userComment.splice(this.commentIndex, 1);
			console.log(this.userComment);
			const listRef = doc(db, 'comment', `comment ${this.userid}`);
			await updateDoc(listRef, {
				comment: deleteField(),
			});
			this.addField();
		},
		async addField() {
			const commentRef = collection(db, 'comment');
			await setDoc(doc(commentRef, `comment ${this.userid}`), {
				comment: this.userComment,
			}).then(() => {
				this.addCommentList();
			});
		},
	},
	mounted() {
		this.getContentId();
		this.addCommentList();
	},
};
</script>

<style></style>
