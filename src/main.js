import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseconfig';
import { getFirestore } from 'firebase/firestore';

const inital = initializeApp(firebaseConfig);
inital;
export const db = getFirestore(inital);

createApp(App).use(store).use(router).mount('#app');
