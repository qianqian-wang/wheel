<template>
  <div>Tabs示例</div>
  <Demo :component="TabsDemo1"></Demo>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import TabsDemo1 from "./tabs/TabsDemo1.vue";
export default {
  components: { Demo },
  setup() {
    return { TabsDemo1 };
  },
};
</script>
