<demo>
常规用法
</demo>

<template>
  <Tabs :selected="y" @update:selected="y = $event">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const y = ref("导航1");
    return { y };
  },
};
</script>
