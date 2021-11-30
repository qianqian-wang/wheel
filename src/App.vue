<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const asideVisible = ref(false);
    provide("asideVisible", asideVisible);
  },
};
</script>
