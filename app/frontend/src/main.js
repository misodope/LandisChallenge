import Vue from "vue";
import App from './App.vue';
import routes from "./routes";

new Vue({
  router: routes,
  el: "#app",
  render: (h) => h(App),
});
