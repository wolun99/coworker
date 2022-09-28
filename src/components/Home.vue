<template>
	<div>
		<div class="write_tab">
			<button @click="goWrite()">글쓰러가기</button>
		</div>
		<div class="inner">
			<HomeList
				:list="list"
				:id="i"
				v-for="(list, i) in lists"
				:key="list"
			></HomeList>
		</div>
	</div>
</template>

<script>
import { db } from '@/main';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

import HomeList from '@/components/Homelist.vue';
export default {
	name: 'HomeComponent',
	data() {
		return {
			lists: [],
		};
	},
	methods: {
		goWrite() {
			this.$router.push('/write');
		},
		async getList() {
			const list = collection(db, 'lists');
			const q = query(list, orderBy('contentId', 'desc'), limit(8));
			const data = await getDocs(q);
			data.docs.map(doc => this.lists.push({ ...doc.data() }));
		},
	},
	components: {
		HomeList,
	},
	mounted() {
		this.getList();
	},
};
</script>

<style></style>
