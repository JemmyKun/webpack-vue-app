import Vue from "vue";
import VueRouter from "vue-router";

import List from "pages/List.vue";
import About from "pages/About.vue";
import Study from "pages/Study.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: List
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/study",
      component: Study
    }
  ]
});
