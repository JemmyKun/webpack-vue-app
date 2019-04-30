import Vue from "vue";
import App from "./App.vue";
import "./app.scss";
import router from "./router/rootRouter";

new Vue({
  render: h => h(App),
  router
}).$mount("#root");
