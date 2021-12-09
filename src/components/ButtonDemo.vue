<template>
  <div>Button 示例</div>
  <Demo :component="Button1Demo"></Demo>
  <Demo :component="Button2Demo"></Demo>
  <Demo :component="Button3Demo"></Demo>
  <Demo :component="Button4Demo"></Demo>
  <Demo :component="Button5Demo"></Demo>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./button/Button1Demo.vue";
import Button2Demo from "./button/Button2Demo.vue";
import Button3Demo from "./button/Button3Demo.vue";
import Button4Demo from "./button/Button4Demo.vue";
import Button5Demo from "./button/Button5Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
