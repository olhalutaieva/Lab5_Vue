import Vue from 'vue';
import App from './App.vue';
import router from './router'; // імпорт роутера

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, // використовуйте роутер у додатку
}).$mount('#app');