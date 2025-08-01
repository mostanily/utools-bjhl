# utools-bjhl
白荆回廊utools插件

白荆回廊Wiki自用，主要包含角色、烙痕、技能、茶憩等方面数据

> 项目自带抽卡统计分析功能

## ✨ 特性

- 🌈 本插件基于开箱即用的`Vite+Vue3`的`Utools`插件开发模板开发，[模板地址 utools-plugin-template](https://github.com/QC2168/utools-plugin-template)

## 🥩 开始使用

### 🔧 安装依赖

> 推荐使用`pnpm`包管理工具，如果您还没有安装可以执行`npm install -g pnpm`进行安装

```bash
npm install 或者 pnpm install
```

> 如果使用`pnpm`安装失败的话，清除缓存后直接使用`npm`进行安装吧

### 🛫 启动项目

```bash
pnpm dev
```

### 📦 打包项目

```bash
pnpm build
```

### 如何启动插件

- 在`utools`中，下载安装并打开`uTools开发者工具`插件，并新建一个项目

- 根据自己实际情况，填写插件所需信息

- 在项目根目录右键打开Windows终端，并执行`pnpm dev`命令，此命令会在当前项目根目录生成`dist`文件夹

- 命令执行完成后，再回到`uTools开发者工具`插件中，项目工程目录选择上一步生成的dist目录内的`/plugin.json`文件

- 启动插件，并触发插件第一个关键字

## 🍭 最后