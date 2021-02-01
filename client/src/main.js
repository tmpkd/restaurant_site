import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios';
import App from '@/App.vue';
import router from './router';
import VueScrollactive from 'vue-scrollactive';
import VueSilentbox from 'vue-silentbox';
import VueScrollSnap from 'vue-scroll-snap';
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import VueTelInput from 'vue-tel-input';
import TelInput from '@/components/tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import '@/plugins/bootstrap';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueScrollactive);
Vue.use(VueSilentbox);
Vue.use(VueScrollSnap);
Vue.use(VueFormGenerator);
Vue.use(VueTelInput);

Vue.component('field-tel-input', TelInput)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
