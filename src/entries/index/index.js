import Vue from 'vue';
import App from './App.vue';
import {
  man
} from './test';

console.log(man);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');