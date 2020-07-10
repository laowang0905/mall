import Vue from 'vue';
import App from './App.vue';
import router from './router/index'

// 创建事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false;

new Vue({
  router,
  mode: 'history',
  render: h => h(App)
}).$mount('#app');
