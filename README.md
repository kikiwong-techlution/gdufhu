# 广金逼乎
广金大学生吐槽的地方

## 环境要求

1. nodejs > v6.9
    - 推荐使用[nvm](https://github.com/coreybutler/nvm-windows)管理node版本
2. npm 随node安装

3. 小程序开发工具

4. 编辑器vscode, webstorm

## 目录结构描述
```
├── README.md                    // help
├── dist                         // 小程序预览文件夹
├── node_modules
├── server                       // 服务端
├── src                          
│   ├── component               // 组件
│   ├── custom-tab-bar          // tabBar组件
│   ├── env                     // 环境配置
│   ├── images                  // 图片
│   ├── pages                   // 页面
│   ├── app.js                  // 全局
│   ├── app.json
│   ├── app.wxss
│   └── project.config.json
└──package.json
```


## 生成新页面

```
gulp auto -s index -p mypage

复制pages/index中的文件创建名称为mypage的页面
```

## 开发流程

```
npm install

npm run dev

用小程序开发工具打开dist文件夹

用编辑器修改src内容, 自动编译到dist文件夹
```

## 测试

```
npm run test
```

## 编译流程

```
npm run build
```
