// 登录接口发送请求携带的数据的类型
export interface loginForm {
  username: string
  password: string
}

// 登录接口返回的数据的类型
interface dataType {
  token?: string
  message?: string
}
export interface loginResponseData {
  code: number
  data: dataType
}

// 服务器返回用户信息相关数据的类型
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
export interface userResponseData {
  code: number
  data: user
}
