<template>
    <el-col :span="24" class="asideNav">
        <h1>硅谷甄选运营平台</h1>
        <el-menu active-text-color="red" background-color="transparent" :default-active="$route.path" router>
            <el-menu-item index="/layout">
                <el-icon>
                    <House />
                </el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/echarts">
                <el-icon>
                    <Monitor />
                </el-icon>
                <span>数据大屏</span>
            </el-menu-item>
            <el-sub-menu index="/authorityManage">
                <template #title>
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>权限管理</span>
                </template>
                <el-menu-item index="/authority/user">
                    <el-icon>
                        <Avatar />
                    </el-icon>
                    <span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="/authority/role">
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span>角色管理</span>
                </el-menu-item>
                <el-menu-item index="/authority/menu">
                    <el-icon>
                        <Menu />
                    </el-icon>
                    <span>菜单管理</span>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/goods">
                <template #title>
                    <el-icon>
                        <Lock />
                    </el-icon>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="/goods/brand">
                    <template #title>
                        <el-icon>
                            <ShoppingCart />
                        </el-icon>
                        <span>品牌管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/goods/attribute">
                    <template #title>
                        <el-icon>
                            <Notebook />
                        </el-icon>
                        <span>属性管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/goods/spu">
                    <template #title>
                        <el-icon>
                            <Coin />
                        </el-icon>
                        <span>SPU管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/goods/sku">
                    <template #title>
                        <el-icon>
                            <Goods />
                        </el-icon>
                        <span>SKU管理</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-col>
</template>

<script setup>
import { House, Monitor, Lock, Avatar, UserFilled, User, Menu, ShoppingCart, Notebook, Coin, Goods } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
* {
    color: #fff
}

h1 {
    margin: 20px;
}
</style>