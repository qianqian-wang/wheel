<demo>
常规用法:loading
</demo>

<template>
  <Button loading>加载中</Button>
  <Button>加载完毕</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Button },
};
</script>
