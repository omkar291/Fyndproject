import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCartShopping)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)
const vueRouter= new VueRouter({
  routes:router
})


new Vue({
  router:vueRouter,
  render: h => h(App),
})
.$mount('#app')
