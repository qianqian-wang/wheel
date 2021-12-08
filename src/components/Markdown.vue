<template>
  <article class="markdown-body" v-html="md"></article>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const md = ref(null);
    import(props.path).then((result) => {
      md.value = result.default;
    });
    return { md };
  },
};
</script>
