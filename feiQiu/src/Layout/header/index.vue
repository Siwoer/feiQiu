<template>
  <div class="app-container">
    <div class="header-left">
      <img
        src="https://oss.ficoo.vip/admin/7B7XGM_1694677242841.gif"
        alt="logo"
      />
      <span>程程DJ管理平台</span>
    </div>
    <div class="header-right">
      <div class="left-content">
        <el-icon class="icon-full" @click="toggle"><FullScreen /></el-icon>
      </div>
      <div class="right-content">
        <el-avatar :size="30">租</el-avatar>
        <label>租户管理员 LSC</label>
        <el-icon class="icon-arrow"><ArrowDown /></el-icon>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useFullscreen } from "@vueuse/core";
const { toggle } = useFullscreen();
// 全屏的方法
</script>
<style lang="scss" scoped>
.app-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222b45;
  height: 58px;
  .header-left {
    display: flex;
    align-items: center;
    padding-left: 20px;
    img {
      width: 35px;
      height: 35px;
      margin: auto;
      margin-right: 10px;
    }
    span {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
    }
  }
  .header-right {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0px 0px 10px;
    cursor: pointer;
    label {
      margin-left: 5px;
      font-size: 12px;
      cursor: pointer;
      color: #fff;
      font-size: 12px;
    }
    .icon-full {
      color: #fff;
      margin: 0 10px;
      height: 100%;
      width: 100%;
    }
    .icon-arrow {
      color: #606266;
      height: 1em;
      width: 1em;
      line-height: 1em;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      fill: currentColor;
      margin-left: 5px;
    }
  }
  .right-content {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
  }
  .right-content:hover {
    background-color: rgba(229, 235, 232, 0.1);
  }
  .left-content {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .left-content:hover {
    background-color: rgba(229, 235, 232, 0.1);
  }
}
</style>
