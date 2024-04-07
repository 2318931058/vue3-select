<template>
    <el-container class="page-container">
        <el-aside class="aside">
            <asideBar />
        </el-aside>
        <el-container class="content-container">
            <el-header class="content-header">
                <pageHead />
            </el-header>
            <el-main class="content-main">
                <mainContent />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
    import asideBar from '@/views/home/components/aside/index.vue'
    import pageHead from '@/views/home/components/head/index.vue'
    import mainContent from '@/views/home/components/content/index.vue'
</script>

<style scoped lang="scss">
.page-container {
    * {
        padding: 0;
        margin: 0;
    }

    .aside {
        width: 15%;
        height: 100vh;
        background-color: #00152B;
        padding: 10px 20px
    }

    .content-container {
        background-color: #fff;

        .content-header {
            width: 100%;
            height: 8%;
            background-color: #fff;
            border: 4px solid #eee;
        }

        .content-main {
            width: 100%;
            height: 92%;
            background-color: #fff;
            padding: 20px;
        }
    }
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background-color: #eee;
}

::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: grey;
    border-radius: 10px;
}
</style>