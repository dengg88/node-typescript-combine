# Node.js + Typescript 结合使用

### 安装Typescript

```
npm i -g typescript  //全局安装
npm i --save-dev typescript //当前文件夹安装
```

### 安装@types/node

```
npm i -g @types/node
```

## 先构建

```
npm run build 或 tsc --pretty(全局) 或 node_modules/bin/tsc --pretty
```

## 运行

```
npm run start 或  node built/main.js(全局)
```