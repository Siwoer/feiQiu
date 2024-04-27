<template>
  <div class="common-layout">
    <Header></Header>
    <div class="content-layout">
      <Aside />
      <Main />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/Layout/header/index.vue";
import Aside from "@/Layout/aside/index.vue";
import Main from "@/Layout/main/index.vue";
</script>
<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.content-layout {
  display: flex;
  height: calc(100% - 58px);
}
</style>
