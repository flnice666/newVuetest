import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import vant from 'vant'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式

const app = createApp(App)
app.use(router);
app.use(store);
app.use(vant);
app.mount('#app');
