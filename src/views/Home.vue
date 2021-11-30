<template>
  <topnav />
  <div class="banner">
    <h1>Q轮子</h1>
    <h2>一个厉害的UI框架</h2>
    <p class="actions">
      <a href="https://github.com">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 62px;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: rgb(66, 184, 132);
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
