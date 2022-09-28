import { createStore } from 'vuex';

export default createStore({
	state: {
		userName: '',
		userUid: '',
	},
	getters: {
		isLogined(state) {
			return state.userUid != '';
		},
	},
	mutations: {
		getUserName(state, payload) {
			if (payload == '') {
				state.userName = '';
				state.userUid = '';
			} else {
				state.userName = payload.displayName;
				state.userUid = payload.uid;
			}
		},
	},
	actions: {},
	modules: {},
});
