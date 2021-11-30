<template>
  <div class="topnav">
    <div class="left" @click="toggleMenu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ego-caidan"></use>
      </svg>
      <div class="logo">logo</div>
    </div>

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
  .left {
    display: flex;
    align-items: center;
    .logo {
      margin-left: 6px;
      max-width: 6em;
    }
  }
  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    .li {
      margin: 0 1em;
    }
  }
  @media (max-width: 500px) {
    .menu {
      display: none;
    }
  }
}
</style>
