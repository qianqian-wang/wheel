<template>
  <div>
    <button @click="toggle" :class="{ checked: value }"><span></span></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
});
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  span {
    position: absolute;
    background: white;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    border-radius: $h/2;
    transition: left 250ms;
  }
  &.checked {
    background: blue;
  }
  &.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>
