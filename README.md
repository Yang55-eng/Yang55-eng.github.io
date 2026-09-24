# 杨志胜的小窝

个人静态站点，托管于 GitHub Pages。零框架纯 HTML/CSS/JS。

## 内容

- `index.html` — 主页（首屏 hero + 打字机效果）
- `home.html` — 博文列表
- `project.html` — 项目展示（含 hnau-physio-report 技能下载）
- `friends.html` — 友链
- `about.html` — 关于
- `downloads/` — 技能安装包（zip + 自包含 PowerShell 安装器）

## 本地预览

```bash
python -m http.server 8000
# 打开 http://localhost:8000
```

## 修改站点信息

编辑 `assets/main.js` 顶部 `SITE` 对象：站名、GitHub 主页链接、格言、建站日期。

## 发布到 GitHub Pages

1. 创建公开仓库（推荐命名 `<用户名>.github.io`，或任意仓库名走 `Settings → Pages`）
2. 推送本目录全部内容
3. 仓库 Settings → Pages → Source 选 `main` 分支 `/ (root)`

注意：`.nojekyll` 已包含，跳过 Jekyll 构建，保证 `install.ps1` 等文件原样可下载。
