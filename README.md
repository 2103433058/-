# AI 工具使用报告

基于 VitePress 构建的 AI 工具使用报告静态站点，部署于 GitHub Pages。

## 本地开发

```bash
npm install
npm run docs:dev     # 启动开发服务器
npm run docs:build   # 构建静态站点
npm run docs:preview # 预览构建结果
```

## 部署

推送到 GitHub main/master 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。
