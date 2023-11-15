import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'normalize.css/normalize.css';
import 'lib-flexible';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload';
import loadimage from './assets/img/loading.gif';
import errorimage from './assets/img/loading.gif';
import VideoPlayer from 'vue-video-player/src';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
});
app.use(VideoPlayer);
app.mount('#app');
