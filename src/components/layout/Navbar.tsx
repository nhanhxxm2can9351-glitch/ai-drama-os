import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Palette, Music, Video, HelpCircle, LayoutDashboard, Search, User, Sparkles, Target, Database, Cpu, GitBranch, Users, Grid3X3, Building2, Rocket } from 'lucide-react';
import { useState } from 'react';

const mainNavItems = [
  { path: '/', label: '剧本生成', icon: BookOpen },
  { path: '/storyboard', label: '分镜设计', icon: Palette },
  { path: '/assets', label: '资产生成', icon: LayoutDashboard },
  { path: '/voice', label: '配音制作', icon: Music },
  { path: '/video', label: '视频合成', icon: Video },
];

const designNavItems = [
  { path: '/cover', label: '封面', icon: Sparkles },
  { path: '/overview', label: '总览', icon: Target },
  { path: '/roadmap', label: '路线图', icon: Rocket },
  { path: '/protocol', label: '数据协议', icon: Database },
  { path: '/architecture', label: '系统架构', icon: Cpu },
  { path: '/workflow', label: '工作流', icon: GitBranch },
  { path: '/agents', label: 'Agent团队', icon: Users },
  { path: '/canvas', label: '无限画布', icon: Grid3X3 },
  { path: '/commercial', label: '商业化', icon: Building2 },
  { path: '/devplan', label: '开发计划', icon: Target },
];

const otherNavItems = [
  { path: '/tutorial', label: '使用教程', icon: HelpCircle },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <path 
                  d="M12 24c0-6.627 5.373-12 12-12v4c-4.418 0-8 3.582-8 8s3.582 8 8 8v4c-6.627 0-12-5.373-12-12z" 
                  fill="#2563EB" 
                />
                <path 
                  d="M36 24c0-6.627-5.373-12-12-12v4c4.418 0 8 3.582 8 8s-3.582 8-8 8v4c6.627 0 12-5.373 12-12z" 
                  fill="#1D4ED8" 
                />
                <path 
                  d="M20 36l8-4 8 4" 
                  stroke="#F97316" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 tracking-tight">星捷AI Drama OS</span>
              <span className="text-xs text-gray-500 -mt-1">智能短剧创作平台</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
              searchFocused ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-200 bg-gray-50'
            }`}>
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索剧本、分镜、素材..."
                className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-48"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">登录</span>
            </button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
              <span className="hidden sm:inline">免费试用</span>
              <span className="sm:hidden">试用</span>
            </button>
            
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className="hidden lg:block border-t border-gray-100">
          <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
            
            <div className="w-px h-6 bg-gray-200 mx-2 flex-shrink-0" />
            
            {otherNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    location.pathname === item.path
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden xl:block border-t border-gray-100">
          <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
            {designNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg shadow-green-500/30'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索剧本、分镜、素材..."
                  className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
                />
              </div>
              
              <div className="px-4 py-2">
                <span className="text-xs text-gray-500 font-medium">核心功能</span>
                <div className="flex flex-col gap-1 mt-2">
                  {mainNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          location.pathname === item.path
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <div className="px-4 py-2">
                <span className="text-xs text-gray-500 font-medium">设计文档</span>
                <div className="flex flex-col gap-1 mt-2">
                  {designNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          location.pathname === item.path
                            ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <div className="px-4 py-2">
                <span className="text-xs text-gray-500 font-medium">其他</span>
                {otherNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        location.pathname === item.path
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}