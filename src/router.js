import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Submission from "./pages/Submission";
import Login from "./pages/Login";

Vue.use(Router);

export default new Router({
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
    },
    {
      path: "/login",
      name: "Login Page",
      component: Login
    }
  ]
});
