<template>
  <div>
    hi|
    <router-link to="/">frank </router-link>|
    <router-link to="/xxx">frank2</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
