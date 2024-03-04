<script setup>
import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <el-button type="primary" size="default" :icon="Edit">测试</el-button>
  <SvgIcon name="lock" color="red" width="200px" height="200px" />
  <div>
    <h1>测试sass全局变量</h1>
  </div>
</template>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
