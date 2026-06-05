import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronLeft, ChevronRight, BookOpen, Palette, Music, Video, HelpCircle, LayoutDashboard, Search, User, Bell, Settings, Sparkles, Target, Database, Cpu, GitBranch, Users, Grid3X3, Building2, Rocket, Zap } from 'lucide-react';
import { useState } from 'react';

const topNavItems = [
  { path: '/', label: '首页' },
  { path: '/storyboard', label: '分镜设计' },
  { path: '/assets', label: '资产生成' },
  { path: '/voice', label: '配音制作' },
  { path: '/video', label: '视频合成' },
];

const sidebarItems = [
  { 
    title: '核心功能',
    items: [
      { path: '/', label: '剧本生成', icon: BookOpen },
      { path: '/storyboard', label: '分镜设计', icon: Palette },
      { path: '/assets', label: '资产生成', icon: LayoutDashboard },
      { path: '/voice', label: '配音制作', icon: Music },
      { path: '/video', label: '视频合成', icon: Video },
    ]
  },
  {
    title: '设计文档',
    items: [
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
    ]
  },
  {
    title: '帮助中心',
    items: [
      { path: '/tutorial', label: '使用教程', icon: HelpCircle },
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <button
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              
              <Link to="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <path 
                      d="M12 24c0-6.627 5.373-12 12-12v4c-4.418 0-8 3.582-8 8s3.582 8 8 8v4c-6.627 0-12-5.373-12-12z" 
                      fill="#3B82F6" 
                    />
                    <path 
                      d="M36 24c0-6.627-5.373-12-12-12v4c4.418 0 8 3.582 8 8s-3.582 8-8 8v4c6.627 0 12-5.373 12-12z" 
                      fill="#2563EB" 
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
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {topNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${
                searchFocused ? 'border-blue-500 shadow-lg shadow-blue-500/10' : 'border-gray-200 bg-gray-50'
              }`}>
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索..."
                  className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-32"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>

              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                <Settings className="w-5 h-5" />
              </button>
              
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all">
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">免费试用</span>
              </button>
              
              <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:inline">登录</span>
              </div>
              
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <aside className={`fixed top-14 left-0 bottom-0 z-40 bg-gray-50 border-r border-gray-100 transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-60'}`}>
        <div className="flex flex-col h-full py-4">
          {sidebarItems.map((group) => (
            <div key={group.title} className="px-3 mb-4">
              <span className={`text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block px-3 transition-opacity ${sidebarCollapsed ? 'opacity-0 h-0 overflow-hidden mb-0' : 'opacity-100'}`}>
                {group.title}
              </span>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                        isActive
                          ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className={`text-sm font-medium whitespace-nowrap transition-opacity ${sidebarCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-bold text-gray-900">导航菜单</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {sidebarItems.map((group) => (
                <div key={group.title}>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                    {group.title}
                  </span>
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
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
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}