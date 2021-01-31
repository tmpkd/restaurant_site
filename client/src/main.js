import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios';
import App from '@/App.vue';
// import Orders from "@/Orders";
import router from './router'
import VueScrollactive from 'vue-scrollactive';
import VueSilentbox from 'vue-silentbox';
import VueScrollSnap from 'vue-scroll-snap';
import '@/plugins/bootstrap'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueScrollactive);
Vue.use(VueSilentbox);
Vue.use(VueScrollSnap);

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
