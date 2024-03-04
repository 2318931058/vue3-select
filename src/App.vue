<script setup>
import { Edit } from '@element-plus/icons-vue'
import temp from '@/components/temp.vue'
console.log(import.meta.env)
</script>

<template>
  <el-button type="primary" size="default" :icon="Edit">测试</el-button>
  <temp />
</template>
