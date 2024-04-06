# 运行项目需要在node环境中运行以下代码

    安装依赖包：pnpm i
    运行项目：pnpm dev

# 项目配置

## 创建项目

    pnpm create vite

## 项目运行后自动在浏览器打开

    // package.json
    "scripts": {
        "dev": "vite --open",
        "build": "vite build",
        "preview": "vite preview"
    },

## 配置eslint

1. 安装eslint：pnpm i eslint -D

2. 生成配置文件:.eslint.cjs：npx eslint --init

3. 安装指令：

   ```
   pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
   ```

4. 在.eslint.cjs配置文件中配置规则

   ```
   module.exports = {
       env: {
       browser: true,
       es2021: true,
       node: true,
       jest: true,
   },
   /* 指定如何解析语法 */
   parser: 'vue-eslint-parser',
   /** 优先级低于 parse 的语法解析配置 */
   parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
       parser: '@typescript-eslint/parser',
       jsxPragma: 'React',
       ecmaFeatures: {
       	jsx: true,
       },
   },
   /* 继承已有的规则 */
   extends: [
   	'eslint:recommended',
   	'plugin:vue/vue3-essential',
   	'plugin:@typescript-eslint/recommended',
   	'plugin:prettier/recommended',
   ],
   plugins: ['vue', '@typescript-eslint'],
   /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
   rules: {
       // eslint（https://eslint.bootcss.com/docs/rules/）
       'no-var': 'error', // 要求使用 let 或 const 而不是 var
       'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
       'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
       'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
       'no-unexpected-multiline': 'error', // 禁止空余的多行
       'no-useless-escape': 'off', // 禁止不必要的转义字符

       // typeScript (https://typescript-eslint.io/rules)
       '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
       '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
       '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
       '@typescript-eslint/no-non-null-assertion': 'off',
       '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
       '@typescript-eslint/semi': 'off',

       // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
       'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
       'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
       'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
       'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
       },
   }
   ```

5. 根目录下新建.eslintignore忽略文件

   ```
   dist
   node_modules
   ```

6. package.json新增两个运行脚本

   ```
   "lint": "eslint src",
   "fix": "eslint src --fix"
   ```

7. 终端运行pnpm run lint检查错误，运行pnpm run fix自动修正错误

## 配置prettier

1. 安装prettier：pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier

2. 根目录下新建.prettierrc.json添加规则

   ```
   {
       "singleQuote": true,
       "semi": false,
       "bracketSpacing": true,
       "htmlWhitespaceSensitivity": "ignore",
       "endOfLine": "auto",
       "trailingComma": "all",
       "tabWidth": 2
   }
   ```

3. 根目录下新建.prettierignore忽略文件

   ```
   /dist/*
   /html/*
   .local
   /node_modules/**
   **/*.svg
   **/*.sh
   /public/*
   ```

4. 终端运行pnpm run lint检查错误，运行pnpm run fix自动修正错误

## 配置stylelint

1. 安装stylelint和sass：

   ```
   pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
   ```

2. 根目录下新建.stylelintrc.cjs文件配置规则

   ```
   module.exports = {
       extends: [
           'stylelint-config-standard', // 配置stylelint拓展插件
           'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
           'stylelint-config-standard-scss', // 配置stylelint scss插件
           'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
           'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
           'stylelint-config-prettier', // 配置stylelint和prettier兼容
       ],
       overrides: [
           {
               files: ['**/*.(scss|css|vue|html)'],
               customSyntax: 'postcss-scss',
           },
           {
               files: ['**/*.(html|vue)'],
               customSyntax: 'postcss-html',
           },
       ],
       ignoreFiles: [
           '**/*.js',
           '**/*.jsx',
           '**/*.tsx',
           '**/*.ts',
           '**/*.json',
           '**/*.md',
           '**/*.yaml',
       ],
       /**
       * null  => 关闭该规则
       * always => 必须
       */
       rules: {
           'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
           'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
           'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
           'no-empty-source': null, // 关闭禁止空源码
           'selector-class-pattern': null, // 关闭强制选择器类名的格式
           'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
           'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
           'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
           'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
           'selector-pseudo-class-no-unknown': [
               // 不允许未知的选择器
               true,
               { ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性,修改element默认样式时使用 },
           ],
       },
   }
   ```

3. 根目录下新建.stylelintignore忽略文件

   ```
   /node_modules/*
   /dist/*
   /html/*
   /public/*
   ```

4. package.json的scripts中添加

   ```json
   "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
   "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
   "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
   ```

5. 终端中运行pnpm run format美化代码

## 配置husky

1. 安装husky：pnpm install -D husky

2. 生成husky文件夹：npx husky-init

3. 配置husky文件夹中的pre-commit文件

   ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"
   pnpm run format
   ```

4. 当我们对代码进行commit操作的时候，就会自动执行pnpm run format命令对代码进行格式化，然后再提交

## 配置commitlint

> 对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用commitlint来实现

1. 安装commitlint：pnpm add @commitlint/config-conventional @commitlint/cli -D

2. 根目录下新建commitlint.config.cjs文件

   ```
   module.exports = {
   	extends: ['@commitlint/config-conventional'],
       // 校验规则
       rules: {
       	'type-enum': [
       	2,
       	'always',
       	[
       		'feat',
               'fix',
               'docs',
               'style',
               'refactor',
               'perf',
               'test',
               'chore',
               'revert',
               'build',
            ],
       ],
           'type-case': [0],
           'type-empty': [0],
           'scope-empty': [0],
           'scope-case': [0],
           'subject-full-stop': [0, 'never'],
           'subject-case': [0, 'never'],
           'header-max-length': [0, 'always', 72],
       },
   }
   ```

3. package.json的scripts中添加

   ```json
   "commitlint": "commitlint --config commitlint.config.cjs -e -V"
   ```

4. 接下来commit信息的时候，前面就需要带着下面的subject, 如修改bug：git commit -m 'fix: 修改bug'

   ```
   'feat',                 //新特性、新功能
   'fix',                  //修改bug
   'docs',                 //文档修改
   'style',                //代码格式修改, 注意不是 css 修改
   'refactor',             //代码重构
   'perf',                 //优化相关，比如提升性能、体验
   'test',                 //测试用例修改
   'chore',                //其他修改, 比如改变构建流程、或者增加依赖库、工具等
   'revert',               //回滚到上一个版本
   'build',                //编译相关的修改，例如发布版本、对项目构建或者依赖的改动
   ```

5. 配置husky：npx husky add .husky/commit-msg

6. 在生成的commit-msg文件中添加下面的命令

   ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"
   pnpm commitlint
   ```

7. 当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m 'fix: xxx' 符合类型的才可以，**需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的**

## 统一包管理工具

1. 根目录创建scritps/preinstall.js文件

   ```javascript
   if (!/pnpm/.test(process.env.npm_execpath || '')) {
     console.warn(
       `\u001b[33mThis repository must using pnpm as the package manager ` +
         ` for scripts to work properly.\u001b[39m\n`,
     )
     process.exit(1)
   }
   ```

2. package.json的scripts中添加

   ```
   "preinstall": "node ./scripts/preinstall.js"
   ```

3. 当我们使用npm或yarn来安装包的时候，就会报错。原理是在install的时候会触发preinstall（npm提供的生命周期钩子）该文件中的代码

# 项目集成

## element-plus

1. 安装element-plus：pnpm install element-plus

2. 安装图标：pnpm install @element-plus/icons-vue

3. 自动导入须安装：pnpm install -D unplugin-vue-components unplugin-auto-import

4. 在vite.config.js文件中配置

   ```javascript
   import { defineConfig } from 'vite'
   import AutoImport from 'unplugin-auto-import/vite'
   import Components from 'unplugin-vue-components/vite'
   import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

   export default defineConfig({
     // ...
     plugins: [
       // ...
       AutoImport({
         resolvers: [ElementPlusResolver()],
       }),
       Components({
         resolvers: [ElementPlusResolver()],
       }),
     ],
   })
   ```

5. 在main.ts中设置element-plus默认支持语言英语设置为中文

   ```
   import ElementPlus from 'element-plus'
   import 'element-plus/dist/index.css'
   //@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
   import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
   app.use(ElementPlus, {
   	locale: zhCn,
   })
   ```

6. 在tsconfig.json中配置全局组件类型声明（使用ts时配置）
   ```
   "types": ["element-plus/global"],
   ```

## src别名

1. 在vite.config.js中配置

   ```javascript
   import path from 'path'
   export default defineConfig({
     plugins: [vue()],
     resolve: {
       alias: {
         '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
       },
     },
   })
   ```

2. 在tsconfig.json中配置

   ```json
   {
     "compilerOptions": {
       "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
       "paths": {
         //路径映射，相对于baseUrl
         "@/*": ["src/*"]
       }
     }
   }
   ```

## 环境变量

> 项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。不同阶段请求的状态(如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。于是环境变量配置的需求就应运而生，我们只需做简单的配置，把环境状态切换的工作交给代码
>
> 开发环境（development）：开发使用的环境，每位开发人员在自己的dev分支上干活，开发到一定程度，同事会合并代码，进行联调。
> 测试环境（testing）：测试同事干活的环境啦，一般会由测试同事自己来部署，然后在此环境进行测试
> 生产环境（production）：生产环境是指正式提供对外服务的，一般会关掉错误报告，打开错误日志。(正式提供给客户使用的环境。)

1. 根目录下新建.env.development开发环境文件

2. 根目录下新建.env.production生产环境文件

3. 根目录下新建.env.test测试环境文件

4. 示例

   ```
   // 变量必须以 VITE_ 为前缀才能暴露给外部读取
   NODE_ENV = 'production'
   VITE_APP_TITLE = '硅谷甄选运营平台'
   VITE_SERVER = 'http://xxx.com'
   ```

5. package.json的scripts中添加

   ```json
   "build:test": "vue-tsc && vite build --mode test",
   "build:pro": "vue-tsc && vite build --mode production",
   "preview": "vite preview"
   ```

6. 通过import.meta.env获取环境变量

## svg图标

1. 安装依赖：pnpm install vite-plugin-svg-icons -D

2. 在vite.config.ts文件中配置

   ```javascript
   import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
   import path from 'path'
   export default () => {
     return {
       plugins: [
         createSvgIconsPlugin({
           // Specify the icon folder to be cached
           iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
           // Specify symbolId format
           symbolId: 'icon-[dir]-[name]',
         }),
       ],
     }
   }
   ```

3. 在main.js中引入

   ```javascript
   import 'virtual:svg-icons-register'
   ```

4. 将其封装为组件

   ```vue
   <script setup lang="ts">
   defineProps({
     //xlink:href属性值的前缀
     prefix: {
       type: String,
       default: '#icon-',
     },
     //svg矢量图的名字
     name: String,
     //svg图标的颜色
     color: {
       type: String,
       default: '',
     },
     //svg宽度
     width: {
       type: String,
       default: '16px',
     },
     //svg高度
     height: {
       type: String,
       default: '16px',
     },
   })
   </script>

   <template>
     <div>
       <svg :style="{ width: width, height: height }">
         <use :xlink:href="prefix + name" :fill="color"></use>
       </svg>
     </div>
   </template>
   ```

5. 在其它组件中使用，使用时需传入特定参数

   ```vue
   <script setup lang="ts">
   import SvgIcon from '@/components/SvgIcon/index.vue'
   </script>

   <template>
     <SvgIcon name="lock" color="red" width="200px" height="200px" />
   </template>
   ```

6. 可根据需要将其注册为全局组件（全局组件较多就使用自定义插件）

## 包管理器---Sass

    1. 安装sass：npm install sass sass-loader --save-dev
    2. 在vite.config.js文件中配置全局变量文件为"./src/styles/variable.scss"
    ```
    export default defineConfig(config => {
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "./src/styles/variable.scss";',
                },
            },
        },
    })
    ```
    3. 在"src/styles/variable.scss"中书写全局变量，并在任意组件中使用

## Mock数据

具体可参考官网：https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md

1.  安装依赖包：pnpm install -D vite-plugin-mock mockjs
2.  在vite.config.js文件中添加以下配置

```
import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
export default ({ command })=> {
   return {
      plugins: [
         vue(),
         viteMockServe({
         localEnabled: command === 'serve',
         }),
      ],
   }
}
```

3.  在根目录下新建mock文件夹用于存储mock的数据

```
// mock用户信息数据
function createUserList() {
   return [
      {
         userId: 1,
         avatar:
         'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
         username: 'admin',
         password: '111111',
         desc: '平台管理员',
         roles: ['平台管理员'],
         buttons: ['cuser.detail'],
         routes: ['home'],
         token: 'Admin Token',
      },
      {
         userId: 2,
         avatar:
         'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
         username: 'system',
         password: '111111',
         desc: '系统管理员',
         roles: ['系统管理员'],
         buttons: ['cuser.detail', 'cuser.user'],
         routes: ['home'],
         token: 'System Token',
      },
   ]
}

export default [
   // 用户登录接口
   {
      url: '/api/user/login', //请求地址
      method: 'post', //请求方式
      response: ({ body }) => {
         //获取请求体携带过来的用户名与密码
         const { username, password } = body
         //调用获取用户信息函数,用于判断是否有此用户
         const checkUser = createUserList().find(
         (item) => item.username === username && item.password === password,
         )
         //没有用户返回失败信息
         if (!checkUser) {
         return { code: 201, data: { message: '账号或者密码不正确' } }
         }
         //如果有返回成功信息
         const { token } = checkUser
         return { code: 200, data: { token } }
      },
   },
   // 获取用户信息
   {
      url: '/api/user/info',
      method: 'get',
      response: (request) => {
         //获取请求头携带token
         const token = request.headers.token
         //查看用户信息是否包含有次token用户
         const checkUser = createUserList().find((item) => item.token === token)
         //没有返回失败的信息
         if (!checkUser) {
         return { code: 201, data: { message: '获取用户信息失败' } }
         }
         //如果有返回成功信息
         return { code: 200, data: { checkUser } }
      },
   },
]
```

## axios的二次封装

1. 在src目录下新建utils文件夹，在utils文件夹中新建request.js文件用于二次封装axios

```
   // 引入工具axios和element-plus
   import axios from 'axios'
   import { ElMessage } from 'element-plus'

   // 创建axios实例，可用于设置基础路径和超时时间等
   const request = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_API,
      timeout: 5000,
   })

   // 创建请求拦截器：开始进度条、请求头携带公共参数等
   request.interceptors.request.use((config) => {
      // config为配置对象，config.header为请求头，多用于给服务器端携带公共参数
      return config
   })

   // 创建响应拦截器：进度条结束、简化服务器返回的数据、处理http网络错误等
   request.interceptors.response.use(
      (response) => {
         // 成功回调：简化数据
         return response.data
      },
      (error) => {
         // 失败回调：处理http网络错误
         let message = ''
         // http状态码
         const status = error.response.status
         switch (status) {
            case 401:
            message = 'TOKEN过期'
            break
            case 403:
            message = '无权访问'
            break
            case 404:
            message = '请求地址错误'
            break
            case 500:
            message = '服务器出现问题'
            break
            default:
            message = '网络出现问题'
            break
         }
         ElMessage({
            type: 'error',
            message,
         })
         return Promise.reject(error)
      },
   )

   // 导出
   export default request
```

## API的统一管理

1.  在src文件夹下新建api文件夹，在api文件夹中新建user、product等文件夹
2.  在user、product等文件夹下新建type.ts、index.ts文件，其中前者用于书写ts类型，后者用于存放及接口
3.  示例

```
// user/type.ts
export interface loginForm {     // 登录接口发送请求携带的数据的类型
   username: string
   password: string
}

interface dataType {             // 登录接口返回的数据的类型
   token: string
}
export interface loginResponseData {
   code: number
   data: dataType
}
```

```
// user/index.ts
import request from '@/utils/request.js'     // 导入axios二次封装工具
import type { loginForm, loginResponseData, } from '@/api/user/type.ts'       // 导入数据类型
enum API { LOGIN_URL = '/user/login'}        // 统一管理接口

// 登录
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data)
```
4. 任意.vue组件中导入使用（示例）
```vue
<script setup lang='ts'>
   import { reqLogin } from '@/api/user'
   onMounted(()=>{
      reqLogin({username:'admin', password: '111111'})
   })
</script>
```

# 路由和仓库
## vue-router
1. 安装依赖包
```
pnpm i vue-router
```
2. src目录下新建router文件夹：router文件夹下新建index.js文件存放路由基本配置，routes文件存放路由路径信息
```javascript
// routes.js
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from '@/router/routes.ts'
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
```
```javascript
// index.js
export const constantRoute = [
    {
        name: 'login',
        path: '/login',
        component: () => import ('../views/login/index.vue')
    },
    {
        name: 'layout',
        path: '/',
        component: () => import('@/views/home/index.vue')
    },
    {
        name: '404',
        path: '/404',
        component: () => import ('@/views/404/index.vue')
    },
    {
        name: 'Any',
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
]
```
3. main.js中导入并使用
```javascript
// main.js
import router from '@/router/index.js'
app.use(router)
```
4. 在任意组件中使用
```vue
<template>
   <router-view />
</template>
```

## pinia
1. 安装依赖包
```
pnpm i pinia
```
2. 在src文件夹下新建store文件夹，在src/store中新建index.ts文件，创建pinia仓库
```javascript
import { createPinia } from 'pinia'
const pinia = createPinia()
export default pinia
```
3. 在main.js中引入使用
```javascript
import pinia from '@/store/index.js'
app.use(pinia)
```
4. 在store文件夹下新建modules文件夹。里面新建各种类型的仓库，如user.js等
```javascript
import { defineStore } from 'pinia'
let useUserStore = defineStore('User', {
    state: () => {
        return {
            
        }
    },
    actions: {
        
    },
    getters: {

    }
})
export default useUserStore;
```
5. 在modules文件夹下新建types文件夹，里面书写仓库中state的类型
```javascript
export interface UserState {
    token: string | null
}
```