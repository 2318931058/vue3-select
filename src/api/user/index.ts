// 导入axios二次封装工具
import request from '@/utils/request.js'

// 导入数据类型
import type {
  loginForm,
  loginResponseData,
  userResponseData,
} from '@/api/user/type.ts'

// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 登录
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
