import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import UserScalePage from './Hooks/UserScalePage';
import 'normalize.css/normalize.css';
import 'lib-flexible';
import App from './App.vue';
import router from './router';
// UserScalePage();
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount('#app');
