<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav" ref="container">
      <div
        class="wheel-tabs-nav-item"
        v-for="(t, index) in title"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="wheel-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="wheel-tabs-content">
      <component
        class="wheel-tabs-content-item"
        :is="current"
        :key="current.props.title"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const divs = navItems.value;
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];
      const { width, left: left1 } = result.getBoundingClientRect();
      const { left: left2 } = container.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const left = left1 - left2;
      indicator.value.style.left = left + "px";
    };
    onMounted(() => {
      x();
    });
    onUpdated(() => {
      x();
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type != Tab) {
        throw new Error("Tabs的子标签必须是tab");
      }
    });
    const title = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    return { defaults, title, select, current, navItems, indicator, container };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.wheel-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      width: 100px;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
