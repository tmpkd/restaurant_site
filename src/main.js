import Vue from 'vue';
import App from './App.vue';
import VueScrollactive from 'vue-scrollactive';
import VueSilentbox from 'vue-silentbox';
import VueScrollSnap from 'vue-scroll-snap';

Vue.config.productionTip = false;

Vue.use(VueScrollactive);
Vue.use(VueSilentbox);
Vue.use(VueScrollSnap);

new Vue({
  render: h => h(App),
}).$mount('#app')
