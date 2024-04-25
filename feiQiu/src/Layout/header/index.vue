<template>
    <div class="app-container">
        <div class="header-left">
            <img src="https://oss.ficoo.vip/admin/7B7XGM_1694677242841.gif" alt="logo">
            <span>程程DJ管理平台</span>
        </div>
        <div class="header-right">
            <el-avatar :size="30">租</el-avatar>
            <label>租户管理员 LSC</label>
            <el-icon class="icon"><ArrowDown /></el-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
</script>
<style lang="scss" scoped>
.app-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222B45;
    height: 58px;
    .header-left{
        display: flex;
        align-items: center;
        padding-left: 20px;
        img{
        width: 35px;
        height: 35px;
        margin: auto ;
        margin-right: 10px;
    }
    span{
        font-size: 20px;
        font-weight: 700;
        color: #FFFFFF;
    }
    }
    .header-right{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        label {
            margin-left: 5px;
            font-size: 12px;
            cursor: pointer;
            color: #fff;
            font-size: 12px;
        }
        .icon{
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
}
</style>