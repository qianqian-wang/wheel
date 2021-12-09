<template>
  <div>
    <button
      @click="toggle"
      class="wheel-switch"
      :class="{ 'wheel-checked': value }"
    >
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      if (props.disabled) {
        context.emit("update:value", false);
      } else {
        context.emit("update:value", !props.value);
      }
    };
    return { toggle };
  },
});
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.wheel-switch {
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
  &.wheel-checked {
    background: #1890ff;
  }
  &.wheel-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.wheel-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
