<template>
  <div>Dialog示例</div>
  <h1>示例一</h1>
  <Button @click="toggle">弹框</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title> 测试</template>
    <template v-slot:content>
      <p>第一个</p>
      <p>第二个</p>
      <p>第三个</p>
    </template>
  </Dialog>

  <h1>示例二</h1>
  <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
      return true;
    };
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "内容",
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>
