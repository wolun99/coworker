<template>
	<div>
		<h2 class="title">로그인</h2>
		<LogIn></LogIn>
		<div class="sign_wrap">
			<router-link to="/sign">회원가입</router-link>
		</div>
	</div>
</template>

<script>
import LogIn from '@/components/LogIn.vue';
export default {
	components: {
		LogIn,
	},
};
</script>

<style scoped>
.sign_wrap {
	text-align: center;
	margin-top: 30px;
}
.sign_wrap a {
	text-decoration: none;
	color: #333;
	font-size: 16px;
	font-weight: 600;
}
.sign_wrap a:hover {
	color: #005ea2;
}
</style>
