<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>你好</p>
    </main>
    <footer>
      <Button level="main">OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";
export default defineComponent({
  components: { Button },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
