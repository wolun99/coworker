<template>
	<div>
		<div class="write_wrap">
			<form action="" @submit.prevent="submitForm">
				<div class="title_wrap">
					<label for="title">제목</label>
					<input type="text" id="title" v-model="title" />
				</div>
				<div class="content_wrap">
					<label for="content">내용</label>
					<textarea
						name="content"
						id="content"
						cols="30"
						rows="10"
						v-model="content"
					>
					</textarea>
				</div>
				<div class="btn_wrap">
					<button @click="submitContent()">수정하기</button>
					<button @click="cancelWrite()">취소하기</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { db } from '@/main';
import { collection, setDoc, doc, getDoc } from 'firebase/firestore';
export default {
	name: 'AmendComponent',
	data() {
		return {
			formdata: {},
			contentId: null,
		};
	},
	methods: {
		cancelWrite() {
			this.$router.push('/');
		},
		async submitContent() {
			try {
				const listRef = collection(db, 'lists');
				await setDoc(doc(listRef, `content ${this.contentId}`), {
					title: this.title,
					content: this.content,
					uid: this.$store.state.userUid,
					nickname: this.$store.state.userName,
					contentId: this.contentId,
				});
				this.$router.push('/');
			} catch (e) {
				console.error('Error adding document: ', e);
			}
		},
		async amendForm() {
			const docRef = doc(db, 'cities', 'SF');
			const docSnap = await getDoc(docRef);
			this.formdata = docSnap.data();
		},
		getContentId() {
			this.contentId = this.$route.params.id;
		},
	},
	mounted() {
		this.amendForm();
		this.getContentId();
	},
};
</script>

<style scoped>
button {
	display: inline-block;
	align-items: center;
	width: 300px;
	justify-content: center;
	text-align: center;
	min-width: 110px;
	padding: 0 20px;
	border: 1px solid transparent;
	border-radius: 3px;
	height: 60px;
	color: #fff;
	background: #3090d6;
	margin-top: 60px;
	font-size: 23px;
	margin-left: 20px;
}
</style>
