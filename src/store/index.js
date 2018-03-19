import Vue from "vue"
import Vuex from "vuex"
import Navbar from "./navbar"

Vue.use(Vuex);

const debug = true;

export default new Vuex.Store({
  modules: {
    Navbar
  },
  strict: debug
});
