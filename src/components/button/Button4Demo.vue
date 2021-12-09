<demo>
常规用法:disabled
</demo>

<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接</Button>
  <Button theme="text" disabled>禁用文本</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: { Button },
};
</script>
