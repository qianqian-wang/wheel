<template>
  <div>Button 示例</div>
  <h2>示例1:theme</h2>
  <div>
    <Button>普通</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <h2>示例2:size</h2>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通通</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">普普通通</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
  <h2>示例3:level</h2>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文本按钮</Button>
    <Button theme="text">普通文本按钮</Button>
    <Button theme="text" level="danger">危险文本按钮</Button>
  </div>

  <h2>示例4:disabled</h2>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接</Button>
    <Button theme="text" disabled>禁用文本</Button>
  </div>
  <h2>示例5:loading</h2>
  <div>
    <Button loading>加载中</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
>
