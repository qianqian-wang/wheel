<demo>
常规用法
</demo>

<template>
  <Button @click="toggle">弹框</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title> 弹框</template>
    <template v-slot:content>
      <p>内容1</p>
      <p>内容2</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
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
    return { x, toggle, f1, f2 };
  },
};
</script>
