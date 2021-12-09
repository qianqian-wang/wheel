<demo>
常规用法:theme
</demo>

<template>
  <Button>普通</Button>
  <Button theme="link">链接</Button>
  <Button theme="text">文本</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Button },
};
</script>
