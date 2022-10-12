<template>
	<div>
		<div class="write_tab">
			<button @click="goWrite">글쓰러가기</button>
		</div>
		<div class="inner">
			<HomeList
				:list="list"
				:id="i"
				v-for="(list, i) in lists"
				:key="list"
			></HomeList>
			<div class="btn_wrap">
				<button v-if="btnPlus" @click="listItemPlus">더보기</button>
			</div>
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
			listItem: 8,
			btnPlus: true,
		};
	},
	methods: {
		goWrite() {
			this.$router.push('/write');
		},
		async getList() {
			const list = collection(db, 'lists');
			const q = query(list, orderBy('contentId', 'desc'), limit(this.listItem));
			const data = await getDocs(q);
			data.docs.map(doc => this.lists.push({ ...doc.data() }));
			this.plusList();
		},
		plusList() {
			if (this.listItem > this.lists.length) {
				this.btnPlus = false;
			}
		},
		listItemPlus() {
			this.lists = [];
			this.listItem = this.listItem + 8;
			this.getList();
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

<style scoped>
.btn_wrap button {
	outline: none;
	border: none;
	width: 180px;
	padding: 15px 0px;
	background: #0090ff;
	border-radius: 30px;
	font-size: 18px;
	font-weight: 600;
	color: #fff;
}

.btn_wrap button:hover {
	cursor: pointer;
}
</style>
