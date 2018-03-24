// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueFire from "vuefire";
import SuiVue from 'semantic-ui-vue';
import VueProgressBar from 'vue-progressbar'
import store from "./store/";
import App from "./App";
import router from "./router";
import 'semantic-ui-css/semantic.min.css';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

const options = {
  color: '#FF657C',
  thickness: '3px'
}

Vue.use(SuiVue);
Vue.use(VueProgressBar, options);
Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

Vue.use(VueAnalytics, {
  id: 'UA-116291575-1',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
});
