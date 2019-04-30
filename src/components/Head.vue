<template>
  <div class="app-header">
    <h1>header</h1>
    <ul class="head-menu">
      <li v-for="(item,index) in pages" :key="index" @click="goToPath(item.path)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          name: "List",
          path: "/"
        },
        {
          name: "About",
          path: "/about"
        },
        {
          name: "Study",
          path: "/study"
        }
      ]
    };
  },
  methods: {
    goToPath(path) {
      console.log("path:", path);
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.head-menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li {
    color: #000;
    cursor: pointer;
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    &:hover {
      color: fff;
      background: #76aa3c;
    }
  }
}
</style>
