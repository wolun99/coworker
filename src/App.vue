<template>
	<div>
		<div class="nav_inner">
			<nav>
				<div class="main_logo_wrap">
					<router-link to="/" class="main_logo">COWORKER</router-link>
				</div>
				<div class="menu_wrap">
					<span v-if="$store.state.userName !== ''"
						>{{ $store.state.userName }}님</span
					>
					<router-link to="/">Home</router-link>
					<router-link to="/login" v-if="$store.state.userName == ''"
						>로그인</router-link
					>
					<router-link
						to="/"
						v-else-if="$store.state.userName !== null"
						@click="logOut()"
						>로그아웃</router-link
					>
				</div>
			</nav>
		</div>
		<router-view />
	</div>
</template>
<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
export default {
	methods: {
		isLogin() {
			const auth = getAuth();
			onAuthStateChanged(auth, user => {
				if (user) {
					this.$store.commit('getUserName', user);
				}
			});
		},
		logOut() {
			const auth = getAuth();
			signOut(auth)
				.then(() => {
					this.$store.commit('getUserName', '');
				})
				.catch(error => {
					// An error happened.
					console.log(error);
				});
		},
	},
	mounted() {
		this.isLogin();
	},
};
</script>
<style>
@import './assets/css/main.css';
</style>
