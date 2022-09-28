import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';

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
		meta: { login: true },
	},
	{
		path: '/mypage',
		name: 'mypage',
		component: () => import('@/views/MypageView.vue'),
		meta: { login: true },
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
		meta: { login: true },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

history.pushState(null, document.title, '#back');

router.beforeEach((to, from, next) => {
	if (to.meta.login && !store.getters.isLogined) {
		alert('로그인하셔야 합니다');
		next('/login');
		return;
	}
	next();
});

export default router;
