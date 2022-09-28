<template>
	<div class="commentList_wrap">
		<span class="comment_id">{{ comments.usernick }}</span>
		<span class="comment_content">{{ comments.comment }}</span>
		<button @click="deleteComment()">삭제</button>
	</div>
</template>

<script>
export default {
	props: {
		comments: Object,
		index: Number,
	},
	methods: {
		deleteComment() {
			this.$emit('deleteComment', this.index);
		},
	},
};
</script>

<style></style>
