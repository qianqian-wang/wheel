<template>
  <div>Dialog示例</div>
  <Demo :component="DialogDemo1"></Demo>
  <Demo :component="DialogDemo2"></Demo>
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
