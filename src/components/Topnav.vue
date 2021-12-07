<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-shatan_fanchuan"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="visible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-ego-caidan"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
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
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > .li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
