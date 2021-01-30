import Vue from 'vue';
import App from './App.vue';
import router from './router'
import VueScrollactive from 'vue-scrollactive';
import VueSilentbox from 'vue-silentbox';
import VueScrollSnap from 'vue-scroll-snap';
import '@/plugins/bootstrap'

Vue.config.productionTip = false;

Vue.use(VueScrollactive);
Vue.use(VueSilentbox);
Vue.use(VueScrollSnap);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
