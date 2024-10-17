# utools-bjhl
白荆回廊utools插件

基于`Vite+Vue`的`Utools`插件开发模板，让您更快的开发出一款属于自己的`Utools`插件

## ✨ 特性

- 🌈 开箱即用的`Vite+Vue3`的`Utools`插件开发模板
- ⚡ 开发环境自动注入`HMR`字段
- 🦍 自动构建`upx`包，此打的包已经无效，直接使用官方的开发工具打包即可
- 🧸 构建`utools/preload`文件，处理第三方依赖
- 🚀 构建桌面应用

## 🥩 开始使用

### 🔧 安装依赖

> 推荐使用`pnpm`包管理工具，如果您还没有安装可以执行`npm install -g pnpm`进行安装

```bash
npm install 或者 pnpm install
```

> 如果使用`pnpm`安装失败的话，直接使用`npm`进行安装吧

### 🛫 启动项目

```bash
pnpm dev
```

### 📦 打包项目

```bash
pnpm build
```

### 如何启动插件

在`utools`中，打开`utools`开发者工具，并新建一个项目

根据您的实际情况，填写插件所需信息

执行`dev`指令，生成`dist`文件夹，将文件路径选中`/dist/plugin.json`

启动插件，并触发插件第一个关键字

开始你的开发之旅吧~

## 🍭 最后