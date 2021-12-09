<template>
  <h1>Switch 组件示例</h1>
  <Demo :component="SwitchDemo1"></Demo>
  <Demo :component="SwitchDemo2"></Demo>
</template>
<script lang="ts">
import SwitchDemo1 from "./switch/SwitchDemo1.vue";
import SwitchDemo2 from "./switch/SwitchDemo2.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { SwitchDemo1, SwitchDemo2 };
  },
};
</script>
