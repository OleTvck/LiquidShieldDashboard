import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import the store creater
import { createPinia } from 'pinia';

// create the store framework, the actual store is in src/store/cveStore.js
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
