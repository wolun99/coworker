<template>
	<div class="list_wrap" @click="goDetail()">
		<h4>{{ list.title }}</h4>
		<span>{{ list.nickname }}</span>
	</div>
</template>

<script>
export default {
	name: 'HomeList',
	props: {
		list: Object,
	},
	methods: {
		goDetail() {
			this.$router.push('/detail/' + this.list.contentId);
		},
	},
};
</script>

<style></style>
