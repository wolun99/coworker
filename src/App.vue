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
					><router-link to="/" v-else-if="$store.state.userName !== null"
						>로그아웃</router-link
					>
				</div>
			</nav>
		</div>
		<router-view />
	</div>
</template>
<script>
export default {};
</script>
<style>
@import './assets/css/main.css';
</style>
