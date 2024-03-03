# 运行项目需要在node环境中运行以下代码
    安装依赖包：pnpm i
    运行项目：pnpm dev

# 项目配置
## 创建项目
    pnpm create vite

## 项目运行后自动在浏览器打开
    ```json
        // package.json
        "scripts": {
            "dev": "vite --open",
            "build": "vite build",
            "preview": "vite preview"
        },
    ```

## 配置eslint
    1. 安装eslint：pnpm i eslint -D
    2. 生成配置文件:.eslint.cjs：npx eslint --init
    3. 安装指令：
        pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
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