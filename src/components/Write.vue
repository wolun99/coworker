<template>
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
				<button @click="submitContent()">등록하기</button>
				<button @click="cancelWrite()">취소하기</button>
			</div>
		</form>
	</div>
</template>

<script>
import { db } from '@/main';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

export default {
	name: 'WriteComponent',
	data() {
		return {
			title: '',
			content: '',
			contentId: null,
		};
	},
	methods: {
		cancelWrite() {
			this.$router.push('/');
		},
		async submitContent() {
			try {
				await addDoc(collection(db, 'lists'), {
					title: this.title,
					content: this.content,
					uid: this.$store.state.userUid,
					nickname: this.$store.state.userName,
					contentId: this.contentId,
				});
				this.updateId();
				this.$router.push('/');
			} catch (e) {
				console.error('Error adding document: ', e);
			}
		},

		async getId() {
			const docRef = doc(db, 'listId', 'listId');
			const docSnap = await getDoc(docRef);
			const idData = docSnap.data();
			this.contentId = idData.id;
		},
		async updateId() {
			const Idplus = doc(db, 'listId', 'listId');
			await updateDoc(Idplus, {
				id: this.contentId + 1,
			});
		},
	},
	mounted() {
		this.getId();
	},
};
</script>

<style scoped>
.write_wrap {
	width: 1000px;
	margin: 0 auto;
}

label {
	display: inline-block;
	width: 200px;
	text-align: center;
}

.title_wrap input {
	width: 700px;
	height: 40px;
	padding-left: 20px;
	outline: none;
	border: 1px solid #cdcdcd;
}

.content_wrap {
	margin-top: 50px;
}

.content_wrap textarea {
	width: 700px;
	outline: none;
	border: 1px solid #cdcdcd;
	resize: none;
	padding-top: 10px;
	padding-left: 20px;
}

.content_wrap label {
	position: relative;
	top: -75px;
}

.btn_wrap {
	text-align: center;
}

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

button:hover {
	cursor: pointer;
}
</style>
