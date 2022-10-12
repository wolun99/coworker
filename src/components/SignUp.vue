<template>
	<div class="inner">
		<div class="login_form">
			<form action="" @submit.prevent="submitForm">
				<input
					type="email"
					name="email"
					id="userEmail"
					class="logInput"
					v-model="userId"
					autoComplete="off"
					placeholder="이메일을 입력해주세요"
				/>
				<input
					type="password"
					name="password"
					id="userPassword"
					class="logInput"
					placeholder="비밀번호를 입력해주세요"
					autoComplete="off"
					v-model="userPassword"
				/>
				<button @click="signUp">회원가입</button>
			</form>
		</div>
	</div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export default {
	data() {
		return {
			userId: '',
			userPassword: '',
		};
	},
	methods: {
		signUp() {
			const Auth = getAuth();
			createUserWithEmailAndPassword(Auth, this.userId, this.userPassword)
				.then(() => {
					alert('회원가입 하셨습니다.');
					this.$router.push('/login');
				})
				.catch(error => {
					alert('정보를 다시 확인해주세요');
					console.log(error);
				});
		},
	},
};
</script>

<style></style>
