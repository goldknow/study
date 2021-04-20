import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import App from './App.vue'
import vueMoment from 'vue-moment'

Vue.use(VueRouter)
Vue.use(vueMoment)

// Importing the global css file
import '@/assets/styles/font.css';
import '@/assets/styles/reset.css';
import '@/assets/styles/common.css';


Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')