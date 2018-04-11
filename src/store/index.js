import Vue from "vue"
import Vuex from "vuex"
import Navbar from "./navbar"
import Modal from "./modal"

Vue.use(Vuex);

const debug = true;

export default new Vuex.Store({
  modules: {
    Navbar,
    Modal
  },
  strict: debug
});
