<template>
    <div class="common-layout">
        <Header></Header>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
    </div>
  </template>
<script lang="ts" setup>
import Header from '@/Layout/header/index.vue'
</script>
<style lang="scss" scoped>
.common-layout{
    height: 100%;
}
</style>