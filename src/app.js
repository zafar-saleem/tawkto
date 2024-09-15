import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPlay,
  faComment,
  faDesktop,
  faLink,
  faGem,
  faCode,
  faShoppingCart,
  faCircleInfo,
  faNoteSticky,
  faPalette,
  faEnvelope,
  faVolumeUp,
  faSignal,
  faSitemap,
  faChevronRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import router from './router';

library.add(
  faPlay,
  faComment,
  faDesktop,
  faLink,
  faGem,
  faCode,
  faShoppingCart,
  faCircleInfo,
  faNoteSticky,
  faPalette,
  faEnvelope,
  faVolumeUp,
  faSignal,
  faSitemap,
  faChevronRight,
  faSearch,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
	el: '#app',
	render: h => h(App)
});
