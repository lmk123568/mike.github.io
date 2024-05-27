# 个人主页

本项目采用技术栈为 Vue3 + Bootstrap5 + Naive UI

## 使用指南

`git clone`本项目然后`cd`到项目目录，运行

```sh
npm i
```

开启`vite`自带服务器，预览网页

```sh
npm run dev
```

修改完毕后打包（这里打包路径改为`/docs`）

```sh
npm run build
```

## 安装

```bash
# 初始化 vue 项目
npm init vue

# 代码格式化 prettier
npm i -g prettier
prettier .

# 安装 Bootstrap5
# 然后 main.js 中导入
npm i bootstrap
npm i bootstrap-icons

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

# 安装组件
npm i -D naive-ui
```

