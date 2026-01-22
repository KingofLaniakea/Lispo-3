
# 部署指南 (Deployment Guide) - GitHub Pages

## 1. 准备代码 (Prepare)
在 `E:\Company\company_gemini` 目录下，您已经拥有完整的网站代码。

## 2. GitHub 仓库设置 (Repository Setup)
1. 在 GitHub 上创建一个新的仓库（Repository），例如命名为 `my-trade-site`。
2. 在本地初始化 Git 并推送：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/您的用户名/my-trade-site.git
   git push -u origin main
   ```

## 3. 配置 GitHub Pages (Configure Pages)
### 简单方法 (Manual Build & Upload - 不推荐，建议使用 Action)

### 推荐方法 (GitHub Actions)
1. 在 GitHub 仓库页面，点击 **Settings** -> **Pages**。
2. 在 **Build and deployment** 下，选择 source 为 **GitHub Actions**。
3. GitHub 会自动建议 Vite 这里的 workflow，或者您可以手动创建 `.github/workflows/deploy.yml`。

### 替代方法 (`gh-pages` 分支)
如果您只需部署静态文件：
1. 修改 `vite.config.js`，添加 `base` 配置（使其适应子路径）：
   ```javascript
   // vite.config.js
   export default defineConfig({
     plugins: [react()],
     base: '/my-trade-site/', // 替换为您的仓库名，前后加斜杠
   })
   ```
2. 运行构建：
   ```bash
   npm run build
   ```
3. 将 `dist` 文件夹推送到 `gh-pages` 分支。可以使用 `gh-pages` npm 包：
   ```bash
   npm install gh-pages --save-dev
   ```
   在 `package.json` 添加脚本：
   `"deploy": "gh-pages -d dist"`
   然后运行：
   `npm run deploy`

## 关于数据 (About Data)
由于无法直接读取 Excel 文件（缺少 Python 库），目前使用 `src/data/products.js` 中的模拟数据。您可以：
1. 打开 `src/data/products.js`。
2. 按照现有格式手动替换为您 Excel 中的商品信息。
3. 图片建议上传到图床或放入 `public/images` 文件夹并引用路径。
