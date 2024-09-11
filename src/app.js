import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPlay,
  faComment,
  faDesktop,
  faLink,
  faGem,
  faCode,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faComment, faDesktop, faLink, faGem, faCode, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

new Vue({
	el: '#app',
	render: h => h(App)
});