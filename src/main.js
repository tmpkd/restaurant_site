import Vue from 'vue';
import App from './App.vue';
import VueScrollactive from 'vue-scrollactive';
import VueSilentbox from 'vue-silentbox';
import VueScrollSnap from 'vue-scroll-snap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(VueScrollactive);
Vue.use(VueSilentbox);
Vue.use(VueScrollSnap);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
