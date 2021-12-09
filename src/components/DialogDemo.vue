<template>
  <div>Dialog示例</div>
  <Demo :component="dialogDemo1"></Demo>
  <Demo :component="dialogDemo2"></Demo>
</template>
<script lang="ts">
import dialogDemo1 from "./dialog/dialogDemo1.vue";
import dialogDemo2 from "./dialog/dialogDemo2.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { dialogDemo2, dialogDemo1 };
  },
};
</script>
