<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { router } from "./router";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
