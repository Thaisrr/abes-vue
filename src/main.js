import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import interceptor from "@/tools/interceptor";

const app = createApp(App);
interceptor();
app.use(router);
app.use(store);
app.mount('#app');
