import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';

import '/node_modules/primeflex/primeflex.css';

const app = createApp(App);

app.use(PrimeVue);
app.mount('#app');
