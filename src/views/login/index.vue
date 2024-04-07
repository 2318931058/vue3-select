<template>
    <el-form class="login-container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <div class="login-box">
                    <h1>Hello</h1>
                    <h2>欢迎学习vue3</h2>
                    <el-form :model="loginForm" :rules="loginRules" ref="loginFormDOm">
                        <el-form-item prop="username">
                            <el-input :prefix-icon="User" v-model="loginForm.username" clearable
                                plackholder="请输入账号"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input :prefix-icon="Lock" v-model="loginForm.password" clearable placeholder='请输入密码'
                                show-password>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :loading="loading" class="login-btn" @click='login'>登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </el-form>
</template>

<script setup>
import { ElNotification } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue'

import useUserStore from '@/store/modules/user.ts'
let useStore = useUserStore()

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

let loading = ref(false)
const loginFormDOm = ref()
let loginForm = reactive({
    username: 'admin',
    password: '111111'
})
const validatorUsername = (rule, value, callback) => {
    if ((value.length >= 5) && (value.length < 12)) {
        callback()
    } else {
        callback(new Error('账号长度为5~12位'))
    }
}
const validatorPassword = (rule, value, callback) => {
    if ((value.length > 5) && (value.length < 12)) {
        callback()
    } else {
        callback(new Error('密码长度为5~12位'))
    }
}
let loginRules = {
    username: [
        // { required: true, message: '用户名不能为空', trigger: "blur" },
        // { required: true, min: 5, max: 10, message: '用户名长度为6~10位', trigger: "change" }
        { required: true, trigger: "change", validator: validatorUsername }
    ],
    password: [
        // { required: true, message: '密码不能为空', trigger: "blur" },
        // { required: true, min: 5, max: 10, message: '密码长度为6~10位', trigger: "change" }
        { required: true, trigger: "change", validator: validatorPassword }
    ]
}



let message
const getTime = () => {
    let hours = new Date().getHours()
    if ((hours > 0) && (hours < 9)) {
        message = '早上'
    } else if (hours < 14) {
        message = '中午'
    } else if (hours < 19) {
        message = '下午'
    } else {
        message = '晚上'
    }
}
getTime()

const login = async () => {
    await loginFormDOm.value.validate()
    loading.value = true
    try {
        await useStore.userLogin(loginForm)
        router.push('/layout')
        ElNotification({
            type: 'success',
            message: '登录成功',
            title: `HI, ${message}好`
        })
        loading.value = false
    } catch (error) {
        ElNotification({
            type: 'error',
            message: error.message
        })
        loading.value = false
    }

}
</script>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login-box {
        position: relative;
        width: 80%;
        top: 30%;
        background: url('@/assets/images/login-form.png') no-repeat;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            color: white;
            font-size: 20px;
            margin: 20px 0;
        }

        .login-btn {
            width: 100%;
        }
    }
}
</style>