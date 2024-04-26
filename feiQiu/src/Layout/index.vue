<template>
  <div class="common-layout">
    <Header />
    <Side />
    <el-main>Main</el-main>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/Layout/header/index.vue";
import Side from "@/Layout/sidebar/index.vue";
</script>
<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
</style>
