<template>
  <div class="app-container">
    <h1 class="title">{{title}}</h1>
    <Head></Head>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Head from "components/Head.vue";
import Foot from "components/Foot.vue";

export default {
  name: "appVue",
  components: { Head, Foot },
  data() {
    return {
      title: "hello world"
    };
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  color: red;
  .title {
    font-size: 20px;
  }
}
</style>
