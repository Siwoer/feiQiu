<template>
  <div style="height: 100%; width: 200px">
    <el-menu
      default-active="2"
      class="el-menu"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </template>
        <el-menu-item index="1-1">
          <el-icon><Menu /></el-icon>
          <span>控制台</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><GoodsFilled /></el-icon>
          <span>商品</span>
        </template>
        <el-menu-item index="2-1">
          <el-icon><Menu /></el-icon>
          <span>商品目录</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <el-icon><Menu /></el-icon>
          <span>商品销售明细</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <el-icon><Menu /></el-icon>
          <span>商品销售统计</span>
        </el-menu-item>
        <el-menu-item index="2-4">
          <el-icon><Menu /></el-icon>
          <span>商品实时库存</span>
        </el-menu-item>
        <el-menu-item index="2-4">
          <el-icon><Menu /></el-icon>
          <span>库存变化记录</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="menu-footer" @click="handleFooter">
      <el-icon><Fold /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleFooter = () => {
  console.log(12);
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: calc(100% - 51px);
  border-bottom: 1px solid #dcdfe6;
}
.menu-footer {
  border-right: 1px solid #dcdfe6;
  height: 51px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-footer:hover {
  color: #409eff;
}
</style>
