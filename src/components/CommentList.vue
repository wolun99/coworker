<template>
	<div class="commentList_wrap">
		<span class="comment_id">{{ comments.usernick }}</span>
		<span class="comment_content">{{ comments.comment }}</span>
	</div>
</template>

<script>
export default {
	props: {
		comments: Object,
	},
};
</script>

<style></style>
