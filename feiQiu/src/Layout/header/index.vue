<template>
    <div class="app-container">
        <div class="header-left">
            <img src="https://oss.ficoo.vip/admin/7B7XGM_1694677242841.gif" alt="logo">
            <span>程程DJ管理平台</span>
        </div>
        <div class="header-right">
            <el-avatar>租</el-avatar>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
</script>
<style lang="scss" scoped>
.app-container{
    display: flex;
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
    
}
</style>