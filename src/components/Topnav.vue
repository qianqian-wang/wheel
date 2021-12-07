<template>
  <div class="topNav">
    <div class="left" @click="toggleMenu">
      <svg class="icon" v-if="visible">
        <use xlink:href="#icon-ego-caidan"></use>
      </svg>
      <div class="logo">
        <svg class="icon">
          <use xlink:href="#icon-shatan_fanchuan"></use>
        </svg>
      </div>
    </div>

    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  props: {
    visible: {
      type: Boolean,
    },
  },
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
$color: #11958f;
.topNav {
  // position: relative;
  color: $color;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  .left {
    display: flex;
    align-items: center;
    .logo {
      margin-left: 6px;
      max-width: 6em;
      > svg {
        width: 32px;
        height: 32px;
      }
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
