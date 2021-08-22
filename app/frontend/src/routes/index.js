import Vue from "vue";
import Router from "vue-router";

import Accounts from '../pages/Accounts/index.vue';
import Dashboard from '../pages/Dashboard/index.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/accounts",
      name: "landis",
      component: Accounts,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
  ],
});
