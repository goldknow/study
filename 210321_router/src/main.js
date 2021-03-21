import Vue from 'vue'
import router from '@/router'

// Importing the global css file
import '@/assets/styles/font.css';
import '@/assets/styles/reset.css';
import '@/assets/styles/common.css';


Vue.config.productionTip = false

const app = new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return router[this.currentRoute]
    }
  },
  render(h) {
    return h(this.ViewComponent)
  }
}).$mount('#app')


window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})