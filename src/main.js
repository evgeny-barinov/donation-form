import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, CardPlugin } from 'bootstrap-vue';
import currencyToSymbol from './filters/currencyToSymbol.filter';
import moneyFormat from './filters/moneyFormat.filter';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(CardPlugin);

Vue.filter('moneyFormat', moneyFormat);
Vue.filter('currencyToSymbol', currencyToSymbol);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
