<template>
  <div>
    <h1>Dialog示例</h1>
    <Demo :component="DialogDemo1"></Demo>
    <Demo :component="DialogDemo2"></Demo>
  </div>
</template>
<script lang="ts">
import DialogDemo1 from "./dialog/DialogDemo1.vue";
import DialogDemo2 from "./dialog/DialogDemo2.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { DialogDemo2, DialogDemo1 };
  },
};
</script>
