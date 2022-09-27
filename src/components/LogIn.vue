<template>
	<div class="inner">
		<div class="login_form">
			<form action="" @submit.prevent="submitForm">
				<input
					type="email"
					name="email"
					id="userEmail"
					class="logInput"
					autoComplete="off"
					v-model="userId"
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
				<button @click="Login()">로그인</button>
			</form>
		</div>
	</div>
</template>

<script>
import {
	getAuth,
	signInWithEmailAndPassword,
	setPersistence,
	browserSessionPersistence,
} from 'firebase/auth';
export default {
	data() {
		return {
			userId: '',
			userPassword: '',
		};
	},
	methods: {
		Login() {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, this.userId, this.userPassword)
				.then(userData => {
					alert('로그인 하셨습니다');
					// this.$router.push('/');
					this.getUserName(userData);
					this.loginContinue();
					this.userNameVal(userData);
				})
				.catch(() => {
					alert('정보를 확인해주세요');
				});
		},
		getUserName(userData) {
			this.$store.commit('getUserName', userData.user);
		},
		userNameVal(userData) {
			if (userData.user.displayName == null) {
				this.$router.push('/mypage');
			} else {
				this.$router.push('/');
			}
		},
		loginContinue() {
			const auth = getAuth();
			setPersistence(auth, browserSessionPersistence)
				.then(() => {
					return signInWithEmailAndPassword(
						auth,
						this.userId,
						this.userPassword,
					);
				})
				.catch(error => {
					// Handle Errors here.
					const errorCode = error.code;
					console.log(errorCode);
					const errorMessage = error.message;
					console.log(errorMessage);
				});
		},
	},
};
</script>

<style></style>
