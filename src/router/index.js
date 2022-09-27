import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/LoginView.vue'),
	},
	{
		path: '/sign',
		name: 'sign',
		component: () => import('@/views/SignView.vue'),
	},
	{
		path: '/write',
		name: 'write',
		component: () => import('@/views/WriteView.vue'),
	},
	{
		path: '/mypage',
		name: 'mypage',
		component: () => import('@/views/MypageView.vue'),
	},
	{
		path: '/detail/:id',
		name: 'detail',
		component: () => import('@/views/DetailView.vue'),
	},
	{
		path: '/amend/:id',
		name: 'amend',
		component: () => import('@/views/AmendView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
