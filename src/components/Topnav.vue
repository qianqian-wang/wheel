<template>
  <div class="topnav">
    <div class="logo">logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.topnav {
  background: rgb(66, 184, 132);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  .logo {
    max-width: 6em;
  }
  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    .li {
      margin: 0 1em;
    }
  }
}
</style>
