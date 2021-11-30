<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  position: relative;
  z-index: 10;
  background: rgb(66, 184, 132);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  .logo {
    max-width: 6em;
  }
  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    .li {
      margin: 0 1em;
    }
  }
}
</style>
