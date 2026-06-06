# 星捷AI Drama OS 项目开发文档

> 本文档记录了 AI 短剧生产操作系统的完整开发流程、技术架构、踩雷经验。可作为下次开发类似应用的参考模板。

---

## 📋 目录

1. [项目概述](#1-项目概述)
2. [技术栈选择](#2-技术栈选择)
3. [项目初始化](#3-项目初始化)
4. [目录结构说明](#4-目录结构说明)
5. [功能模块开发](#5-功能模块开发)
6. [API 接口开发](#6-api-接口开发)
7. [部署上线流程](#7-部署上线流程)
8. [踩雷经验总结](#8-踩雷经验总结)
9. [快速启动清单](#9-快速启动清单)

---

## 1. 项目概述

### 1.1 项目背景
开发一款 AI 短剧生产操作系统，实现从剧本生成到视频合成的全流程自动化。

### 1.2 核心功能
| 模块 | 功能描述 | 技术实现 |
|------|---------|---------|
| 剧本生成器 | AI 生成短剧剧本 | Kimi API |
| 分镜生成器 | 根据剧本生成分镜脚本 | Kimi API |
| 资产生成器 | 生成场景图、角色图 | Kimi API + 图像生成API |
| 配音生成器 | 文本转语音 | Web Speech API / 第三方API |
| 视频生成器 | 视频合成 | 预留接口 |
| 使用教程 | 功能使用指南 | 静态页面 |

### 1.3 目标用户
- 短视频创作者
- 内容制作团队
- 个人自媒体从业者

---

## 2. 技术栈选择

### 2.1 前端技术栈
```json
{
  "framework": "React 18",
  "language": "TypeScript",
  "buildTool": "Vite 6",
  "router": "react-router-dom v6",
  "styling": "Tailwind CSS 3",
  "animation": "framer-motion",
  "icons": "lucide-react",
  "http": "axios"
}
```

### 2.2 后端技术栈
```json
{
  "platform": "Vercel Serverless Functions",
  "apiService": "Kimi AI (Moonshot)",
  "language": "TypeScript"
}
```

### 2.3 部署平台
| 平台 | 用途 | 地址 |
|------|------|------|
| GitHub | 代码托管、版本控制 | github.com/nhanhxxm2can9351-glitch/ai-drama-os |
| Vercel | 前端部署、自动构建 | ai-drama-os.vercel.app |

### 2.4 技术选型依据
| 需求 | 选择 | 原因 |
|------|------|------|
| 快速原型开发 | React + Vite | 热更新快，生态丰富 |
| 类型安全 | TypeScript | 减少运行时错误 |
| 样式开发效率 | Tailwind CSS | 原子化CSS，开发效率高 |
| AI 接口 | Kimi API | 中文理解能力强，响应速度快 |
| 免费部署 | Vercel | 支持 serverless functions |

---

## 3. 项目初始化

### 3.1 环境准备

#### Windows 环境配置
```powershell
# 检查 Node.js 是否安装
node -v

# 如果未安装，下载 Node.js 安装包
# 推荐版本：v20.x LTS
# 安装路径：E:\Cache\node-v20.15.0-win-x64

# 配置环境变量
$env:PATH = "E:\Cache\node-v20.15.0-win-x64;$env:PATH"
```

#### Node.js 安装步骤
1. 访问 https://nodejs.org/ 下载 Windows Installer (.msi)
2. 自定义安装路径到 E:\Cache
3. 勾选 "Add to PATH" 选项
4. 验证安装：打开新的 PowerShell 窗口，输入 `node -v`

### 3.2 创建项目
```bash
# 使用 Vite 创建 React + TypeScript 项目
npm create vite@latest ai-drama-os -- --template react-ts

# 进入项目目录
cd ai-drama-os

# 安装依赖
npm install

# 安装额外依赖
npm install react-router-dom framer-motion lucide-react axios
npm install -D tailwindcss postcss autoprefixer

# 初始化 Tailwind CSS
npx tailwindcss init -p
```

### 3.3 配置文件说明

#### package.json 关键配置
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "deploy": "gh-pages -d dist -t true"
  }
}
```

#### tailwind.config.js 配置
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 4. 目录结构说明

```
ai-drama-os/
├── api/                          # Vercel Serverless API
│   ├── generate.ts              # 剧本生成 API
│   ├── storyboard.ts            # 分镜生成 API
│   └── assets.ts                # 资产生成 API
│
├── public/                       # 静态资源
│   └── favicon.svg             # 网站图标
│
├── src/
│   ├── api/                     # 前端 API 调用封装
│   │   └── kimi.ts            # Kimi API 封装
│   │
│   ├── assets/                  # 静态资源
│   │   └── react.svg
│   │
│   ├── components/              # 组件目录
│   │   ├── common/             # 通用组件
│   │   │   ├── Card.tsx       # 卡片组件
│   │   │   └── CodeBlock.tsx  # 代码块组件
│   │   │
│   │   ├── layout/             # 布局组件
│   │   │   └── Navbar.tsx     # 导航栏组件
│   │   │
│   │   ├── ScriptGenerator.tsx # 剧本生成器
│   │   ├── StoryboardGenerator.tsx # 分镜生成器
│   │   ├── AssetGenerator.tsx  # 资产生成器
│   │   ├── VoiceGenerator.tsx  # 配音生成器
│   │   └── VideoGenerator.tsx  # 视频生成器
│   │
│   ├── hooks/                   # React Hooks
│   │   └── useTheme.ts        # 主题切换
│   │
│   ├── lib/                     # 工具函数
│   │   └── utils.ts           # 通用工具函数
│   │
│   ├── pages/                   # 页面组件
│   │   ├── Home.tsx           # 首页（剧本生成器）
│   │   ├── Cover.tsx          # 封面设计文档
│   │   ├── Overview.tsx       # 产品总览
│   │   ├── Roadmap.tsx        # 产品路线图
│   │   ├── Protocol.tsx       # 数据协议
│   │   ├── Architecture.tsx   # 系统架构
│   │   ├── Workflow.tsx       # 工作流
│   │   ├── Agents.tsx         # Agent 团队
│   │   ├── Canvas.tsx         # 无限画布
│   │   ├── Commercial.tsx     # 商业化方案
│   │   ├── DevPlan.tsx        # 开发计划
│   │   └── Tutorial.tsx       # 使用教程
│   │
│   ├── App.tsx                 # 应用主入口
│   ├── main.tsx               # React 渲染入口
│   ├── index.css              # 全局样式
│   └── vite-env.d.ts          # Vite 类型声明
│
├── .gitignore                  # Git 忽略文件
├── index.html                  # HTML 入口
├── package.json                # 项目依赖
├── postcss.config.js          # PostCSS 配置
├── README.md                  # 项目说明
├── tailwind.config.js         # Tailwind 配置
├── tsconfig.json              # TypeScript 配置
└── vite.config.ts             # Vite 配置
```

### 4.1 核心文件说明

| 文件路径 | 作用 | 重要性 |
|---------|------|--------|
| `src/App.tsx` | 路由配置、组件注册 | ⭐⭐⭐ |
| `src/components/layout/Navbar.tsx` | 导航栏组件 | ⭐⭐⭐ |
| `src/components/ScriptGenerator.tsx` | 剧本生成核心逻辑 | ⭐⭐⭐ |
| `api/generate.ts` | 服务器端剧本生成接口 | ⭐⭐⭐ |
| `package.json` | 依赖管理、脚本命令 | ⭐⭐⭐ |
| `tailwind.config.js` | 样式主题配置 | ⭐⭐ |
| `vite.config.ts` | 构建配置 | ⭐⭐ |
| `tsconfig.json` | TypeScript 配置 | ⭐⭐ |

---

## 5. 功能模块开发

### 5.1 剧本生成器 (ScriptGenerator.tsx)

#### 功能说明
- 用户输入剧本主题或关键词
- 调用 Kimi API 生成完整剧本
- 支持生成历史记录保存
- 支持复制和导出剧本

#### 核心代码结构
```typescript
// src/components/ScriptGenerator.tsx
import { useState, useEffect } from 'react';
import { BookOpen, Copy, Check, History, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HistoryItem {
  id: string;
  topic: string;
  script: string;
  timestamp: number;
}

export default function ScriptGenerator() {
  const [topic, setTopic] = useState('');
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // 加载历史记录
  useEffect(() => {
    const saved = localStorage.getItem('script-history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  // 生成剧本
  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });
      
      const data = await response.json();
      setScript(data.script);
      
      // 保存历史
      const newItem: HistoryItem = {
        id: Date.now().toString(),
        topic,
        script: data.script,
        timestamp: Date.now(),
      };
      const updated = [newItem, ...history].slice(0, 10);
      setHistory(updated);
      localStorage.setItem('script-history', JSON.stringify(updated));
    } catch (error) {
      console.error('生成失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 复制功能
  const handleCopy = async () => {
    await navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* 组件内容... */}
    </div>
  );
}
```

#### API 接口调用
```typescript
// src/api/kimi.ts
import axios from 'axios';

const KIMI_API_URL = 'https://api.moonshot.cn/v1/chat/completions';

export async function generateScript(topic: string, apiKey: string): Promise<string> {
  const response = await axios.post(
    KIMI_API_URL,
    {
      model: 'moonshot-v1-8k',
      messages: [
        {
          role: 'system',
          content: '你是一位专业的短剧编剧，擅长创作吸引人的故事剧本。'
        },
        {
          role: 'user',
          content: `请为以下主题创作一个短剧剧本：${topic}`
        }
      ],
      temperature: 0.7,
      max_tokens: 4096,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    }
  );
  
  return response.data.choices[0].message.content;
}
```

### 5.2 分镜生成器 (StoryboardGenerator.tsx)

#### 功能说明
- 输入剧本内容
- 调用 AI 生成分镜脚本
- 支持复制和编辑

#### 核心代码结构
```typescript
// src/components/StoryboardGenerator.tsx
import { useState } from 'react';
import { Palette, Copy, Play } from 'lucide-react';

export default function StoryboardGenerator() {
  const [script, setScript] = useState('');
  const [storyboard, setStoryboard] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!script.trim()) return;
    setLoading(true);
    
    try {
      const response = await fetch('/api/storyboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ script }),
      });
      
      const data = await response.json();
      setStoryboard(data.storyboard || defaultStoryboard);
    } catch (error) {
      setStoryboard(defaultStoryboard);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      {/* 分镜生成器内容 */}
    </div>
  );
}

// 默认分镜模板
const defaultStoryboard = `
【分镜1】
场景：办公室
镜头：全景
对白：主角A走进办公室
时长：5秒

【分镜2】
场景：会议室
镜头：中景
对白：主角B介绍项目
时长：10秒
`;
```

### 5.3 导航栏组件 (Navbar.tsx)

#### 功能说明
- 顶部导航栏 + 左侧工具栏布局
- 支持侧边栏显示/隐藏
- 支持侧边栏收缩/展开
- 深色渐变主题

#### 核心代码结构
```typescript
// src/components/layout/Navbar.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronLeft, ChevronRight,
  BookOpen, Palette, Music, Video, HelpCircle,
  LayoutDashboard, Search, User, Bell, Settings,
  Sparkles, Target, Database, Cpu, GitBranch,
  Users, Grid3X3, Building2, Rocket, Zap
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
    if (sidebarHidden) {
      setSidebarCollapsed(false);
    }
  };

  return (
    <>
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700/50">
        {/* Logo、搜索、操作按钮 */}
      </nav>

      {/* 左侧工具栏 */}
      {!sidebarHidden && (
        <aside className={`fixed top-14 left-0 bottom-0 z-40 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-60'
        }`}>
          {/* 菜单项 */}
        </aside>
      )}
    </>
  );
}
```

---

## 6. API 接口开发

### 6.1 服务器端 API 结构 (Vercel)

```typescript
// api/generate.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const KIMI_API_URL = 'https://api.moonshot.cn/v1/chat/completions';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic } = req.body;
  
  if (!topic) {
    return res.status(400).json({ error: '缺少 topic 参数' });
  }

  try {
    const apiKey = process.env.KIMI_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'API Key 未配置' });
    }

    const response = await axios.post(
      KIMI_API_URL,
      {
        model: 'moonshot-v1-8k',
        messages: [
          {
            role: 'system',
            content: '你是一位专业的短剧编剧，擅长创作吸引人的故事剧本。'
          },
          {
            role: 'user',
            content: `请为以下主题创作一个短剧剧本：${topic}`
          }
        ],
        temperature: 0.7,
        max_tokens: 4096,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const script = response.data.choices[0].message.content;
    return res.status(200).json({ script });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: '剧本生成失败' });
  }
}
```

### 6.2 API 环境变量配置

在 Vercel Dashboard 中配置以下环境变量：

| 变量名 | 说明 | 示例值 |
|-------|------|--------|
| `KIMI_API_KEY` | Kimi API 密钥 | `sk-xxxxx` |

---

## 7. 部署上线流程

### 7.1 GitHub 仓库创建

1. 访问 https://github.com
2. 点击右上角 "+" → "New repository"
3. 填写仓库名称：`ai-drama-os`
4. 选择 Private（私有）或 Public（公开）
5. 点击 "Create repository"

### 7.2 本地项目关联 GitHub

```bash
# 初始化 Git 仓库（如果尚未初始化）
git init

# 添加远程仓库
git remote add origin https://github.com/你的用户名/ai-drama-os.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 推送到 GitHub
git push -u origin main
```

### 7.3 Vercel 部署

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择 `ai-drama-os` 仓库
5. 配置环境变量（KIMI_API_KEY）
6. 点击 "Deploy"

### 7.4 自动部署配置

Vercel 会自动配置：
- 每次 `git push` 触发自动构建
- 构建完成后自动部署
- 预览 URL 可用于测试

### 7.5 部署命令脚本

```json
// package.json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist -t true"
  }
}
```

---

## 8. 踩雷经验总结

### 8.1 环境配置踩雷点

#### ❌ 踩雷1：Node.js 未添加到 PATH
**问题**：安装 Node.js 后，命令行输入 `node -v` 提示命令不存在。

**原因**：安装时未勾选 "Add to PATH" 选项。

**解决方案**：
```powershell
# 手动添加环境变量
$env:PATH = "E:\Cache\node-v20.15.0-win-x64;$env:PATH"

# 永久添加（需要管理员权限）
[Environment]::SetEnvironmentVariable(
    "Path",
    "E:\Cache\node-v20.15.0-win-x64;" + [Environment]::GetEnvironmentVariable("Path", "Machine"),
    "Machine"
)
```

**预防措施**：
- 安装时务必勾选 "Add to PATH"
- 安装完成后打开新的终端窗口验证

#### ❌ 踩雷2：npm 命令无法识别
**问题**：`npm -v` 提示命令不存在。

**原因**：Node.js 未正确安装或 PATH 未配置。

**解决方案**：同踩雷1。

---

### 8.2 代码开发踩雷点

#### ❌ 踩雷3：JSX 语法错误
**问题**：编译时报错 "Expected corresponding JSX closing tag"。

**原因**：
- 标签未正确闭合
- 条件渲染中使用多个同级元素未包裹

**解决方案**：
```typescript
// ❌ 错误写法
{isShow && (
  <div>内容1</div>
  <div>内容2</div>
)}

// ✅ 正确写法
{isShow && (
  <>
    <div>内容1</div>
    <div>内容2</div>
  </>
)}
```

#### ❌ 踩雷4：TypeScript 类型错误
**问题**：编译时报类型不匹配错误。

**原因**：
- 属性名称拼写错误
- 类型定义不完整

**解决方案**：
```typescript
// ❌ 错误写法
const style = { userSelect: 'none' }; // userSelect 类型不匹配

// ✅ 正确写法
const style: React.CSSProperties = { userSelect: 'none' };
```

#### ❌ 踩雷5：useState 初始值类型推断错误
**问题**：状态值类型不满足预期。

**解决方案**：
```typescript
// ✅ 显式声明类型
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```

---

### 8.3 样式开发踩雷点

#### ❌ 踩雷6：Tailwind CSS 响应式类不生效
**问题**：移动端样式不生效，页面显示异常。

**原因**：
- 未正确配置 `content` 路径
- 使用了未定义的类名

**解决方案**：
```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 确保路径正确
  ],
  // ...
}
```

#### ❌ 踩雷7：深色主题颜色配置
**问题**：浅色和深色主题切换时颜色不一致。

**解决方案**：
```typescript
// ❌ 不推荐
<div className="bg-gray-900 text-white">

// ✅ 推荐使用 CSS 变量
<div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
```

---

### 8.4 部署踩雷点

#### ❌ 踩雷8：GitHub Pages 部署失败
**问题**：`npm run deploy` 执行失败，gh-pages 分支未创建。

**原因**：未安装 gh-pages 依赖或分支不存在。

**解决方案**：
```bash
# 安装 gh-pages
npm install --save-dev gh-pages

# 创建 gh-pages 分支并部署
npm run deploy -- -t true
```

#### ❌ 踩雷9：Vercel 部署后 404 错误
**问题**：访问页面时提示 404。

**原因**：
- 路由配置问题
- 页面组件未创建

**解决方案**：
1. 检查 `App.tsx` 路由配置
2. 确保所有路由都有对应的页面组件
3. 配置 Vercel 路由重写（如需要）

#### ❌ 踩雷10：API 环境变量未配置
**问题**：AI 功能无法使用，提示 API Key 未配置。

**解决方案**：
1. 在 Vercel Dashboard 中进入项目
2. 点击 "Settings" → "Environment Variables"
3. 添加 `KIMI_API_KEY` 变量
4. 重新部署

---

### 8.5 网络踩雷点

#### ❌ 踩雷11：Git push 失败
**问题**：`git push` 提示 "Connection reset" 或 "SSL/TLS connection failed"。

**原因**：网络不稳定或代理问题。

**解决方案**：
```bash
# 等待后重试
Start-Sleep -Seconds 10
git push

# 或多次重试
git push --retry
```

#### ❌ 踩雷12：npm install 超时
**问题**：依赖安装失败，超时。

**解决方案**：
```bash
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com
npm install

# 或使用 VPN
```

---

### 8.6 UI/UX 踩雷点

#### ❌ 踩雷13：导航栏布局混乱
**问题**：功能入口显示不完整。

**原因**：
- 响应式断点设置不当
- 菜单项过多未分组

**解决方案**：
```typescript
// 分组显示菜单项
const navItems = [
  { group: '核心功能', items: [...] },
  { group: '设计文档', items: [...] },
  { group: '其他', items: [...] },
];

// 使用响应式类
<div className="hidden lg:flex"> {/* 大屏显示 */}
<div className="lg:hidden"> {/* 小屏隐藏，通过菜单展开 */}>
```

#### ❌ 踩雷14：侧边栏收缩后文字不显示
**问题**：收缩后再展开，侧边栏文字消失。

**原因**：状态逻辑错误，收缩后未重置展开状态。

**解决方案**：
```typescript
// ❌ 错误逻辑
const toggleSidebar = () => {
  setSidebarHidden(!sidebarHidden);
  if (!sidebarHidden) {
    setSidebarCollapsed(true);
  }
};

// ✅ 正确逻辑
const toggleSidebar = () => {
  setSidebarHidden(!sidebarHidden);
  if (sidebarHidden) {
    setSidebarCollapsed(false);
  }
};
```

---

## 9. 快速启动清单

### 9.1 环境准备清单
- [ ] 安装 Node.js v20.x LTS
- [ ] 配置 PATH 环境变量
- [ ] 安装 Git
- [ ] 注册 GitHub 账号
- [ ] 注册 Vercel 账号（关联 GitHub）
- [ ] 申请 Kimi API Key

### 9.2 项目初始化清单
- [ ] 使用 Vite 创建项目：`npm create vite@latest my-app -- --template react-ts`
- [ ] 安装依赖：`npm install`
- [ ] 安装额外依赖：`npm install react-router-dom framer-motion lucide-react axios`
- [ ] 配置 Tailwind CSS
- [ ] 配置 TypeScript
- [ ] 创建 GitHub 仓库并关联

### 9.3 开发清单
- [ ] 配置路由（App.tsx）
- [ ] 创建导航栏组件（Navbar.tsx）
- [ ] 实现剧本生成器（ScriptGenerator.tsx）
- [ ] 实现分镜生成器（StoryboardGenerator.tsx）
- [ ] 实现资产生成器（AssetGenerator.tsx）
- [ ] 实现配音生成器（VoiceGenerator.tsx）
- [ ] 创建设计文档页面（封面、总览、路线图等）
- [ ] 创建使用教程页面（Tutorial.tsx）

### 9.4 API 开发清单
- [ ] 创建 `api/generate.ts`（剧本生成）
- [ ] 创建 `api/storyboard.ts`（分镜生成）
- [ ] 创建 `api/assets.ts`（资产生成）
- [ ] 配置环境变量（KIMI_API_KEY）

### 9.5 部署清单
- [ ] 本地测试：`npm run dev`
- [ ] 构建项目：`npm run build`
- [ ] 推送到 GitHub：`git push`
- [ ] Vercel 自动部署
- [ ] 配置自定义域名（可选）

### 9.6 测试清单
- [ ] 页面加载测试
- [ ] 路由跳转测试
- [ ] 功能入口测试
- [ ] AI 生成功能测试
- [ ] 响应式布局测试
- [ ] 移动端适配测试

---

## 附录

### A. 常用命令速查

```bash
# Node.js
node -v              # 查看版本
npm -v              # 查看 npm 版本

# 项目开发
npm install         # 安装依赖
npm run dev        # 开发服务器
npm run build      # 构建生产版本
npm run preview    # 预览生产版本
npm run lint       # 代码检查

# Git
git init           # 初始化仓库
git add .          # 添加文件
git commit -m ""  # 提交
git push           # 推送
git pull           # 拉取
git status         # 查看状态

# Vercel
vercel            # 部署到预览环境
vercel --prod     # 部署到生产环境
```

### B. 环境变量速查

| 变量名 | 说明 | 必需 |
|-------|------|------|
| `KIMI_API_KEY` | Kimi AI API 密钥 | 是 |
| `NODE_ENV` | 运行环境 | 自动 |

### C. 端口说明

| 端口 | 用途 | 说明 |
|------|------|------|
| 5173 | Vite 开发服务器 | 本地开发 |
| 3000 | Vercel Serverless | 云端函数 |
| 443 | HTTPS | 生产环境 |

---

> 文档生成时间：2026-06-06
> 最后更新时间：2026-06-06
> 版本：v1.0
