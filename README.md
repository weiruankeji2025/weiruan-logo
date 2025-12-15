# Logo生成器 | LogoMaker

一个免费的在线Logo生成工具，无需设计经验即可创建专业品牌Logo。

## 在线演示

部署到 GitHub Pages 后即可在线使用。

## 功能特性

### 文字设置
- 自定义品牌名称和标语
- 8种精选字体（思源黑体、Poppins、Playfair Display等）
- 可调节字号（24px - 120px）
- 4种字体粗细选择

### 颜色设置
- 文字颜色选择器
- 图标颜色选择器
- 背景颜色选择器
- 5种快速配色方案

### 图标设置
- 150+ Font Awesome图标
- 图标位置：左侧/顶部/右侧/无图标
- 可调节图标大小

### 布局设置
- 元素间距调节
- 内边距调节
- 圆角调节

### 模板库
- 12种精选预设模板
- 一键应用样式
- 涵盖科技、商务、自然、创意等多种风格

### 导出功能
- PNG格式下载
- 支持1x标准分辨率
- 支持2x高清分辨率

## 技术栈

- HTML5
- CSS3（响应式设计）
- JavaScript（原生ES6+）
- Font Awesome 6（图标库）
- Google Fonts（字体库）

## 项目结构

```
weiruan-logo/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── app.js          # 主应用逻辑
│   ├── icons.js        # 图标库配置
│   └── templates.js    # 模板配置
├── LICENSE
└── README.md
```

## 本地运行

1. 克隆仓库
```bash
git clone https://github.com/weiruankeji2025/weiruan-logo.git
```

2. 进入项目目录
```bash
cd weiruan-logo
```

3. 使用任意HTTP服务器运行，例如：
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server
```

4. 在浏览器中访问 `http://localhost:8000`

## 部署到 GitHub Pages

1. 进入仓库设置 Settings > Pages
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `main` 分支，目录选择 `/ (root)`
4. 点击 Save，等待部署完成

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 截图预览

### 主页
Logo生成器提供简洁直观的用户界面，包含功能特色介绍和快速开始按钮。

### 设计工作台
左侧控制面板支持文字、颜色、图标和布局设置，右侧实时预览生成效果。

### 模板库
提供12种精选模板，涵盖科技蓝、优雅紫、自然绿、商务黑等多种风格。

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
