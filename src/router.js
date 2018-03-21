import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Submission from "./pages/Submission";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home Page",
      component: Home
    },
    {
      path: "/problems",
      name: "Problem Page",
      component: Problem
    },
    {
      path: "/submissions",
      name: "Submission Page",
      component: Submission
    }
  ]
});
