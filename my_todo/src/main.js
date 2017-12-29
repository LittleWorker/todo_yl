// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import todo from './todo'
import VueBus from 'vue-bus'
import $ from 'jquery'
// import router from './router'

Vue.config.productionTip = false
Vue.use(VueBus);
/* eslint-disable no-new */
new Vue({
  el: '#todo',
  // router,
  template: '<todo/>',
  components: { todo }
})
