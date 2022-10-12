<template>
	<div class="inner">
		<div class="login_form">
			<form action="" @submit.prevent="submitForm">
				<input
					type="text"
					name="text"
					id="userNickname"
					class="logInput"
					autoComplete="off"
					v-model="userNick"
					placeholder="사용하실 닉네임을 입력해주세요"
				/>
				<button @click="nickNameRegi">닉네임 등록</button>
			</form>
		</div>
	</div>
</template>

<script>
import { getAuth, updateProfile } from 'firebase/auth';
export default {
	name: 'MyPage',
	data() {
		return {
			userNick: '',
		};
	},
	methods: {
		nickNameRegi() {
			const auth = getAuth();
			updateProfile(auth.currentUser, { displayName: this.userNick })
				.then(() => {
					alert('닉네임이 등록되었습니다.');
					this.getUserName(auth.currentUser);
					this.$router.push('/');
				})
				.catch(error => {
					console.log(error);
				});
		},
		getUserName(userData) {
			this.$store.commit('getUserName', userData.displayName);
		},
	},
};
</script>

<style></style>
