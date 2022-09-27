import { createStore } from 'vuex';

export default createStore({
	state: {
		userName: '',
		userUid: '',
	},
	getters: {},
	mutations: {
		getUserName(state, payload) {
			state.userName = payload.displayName;
			state.userUid = payload.uid;
		},
	},
	actions: {},
	modules: {},
});
