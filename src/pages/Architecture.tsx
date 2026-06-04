import { motion } from 'framer-motion';
import { Users, Layers, Database, Server, Cpu, ArrowDown, Zap, Shield, Settings, Code, Cloud, Lock, FileText, BarChart3, MessageSquare } from 'lucide-react';
import Card from '../components/common/Card';

const architectureLayers = [
  {
    id: 'user',
    name: '用户层',
    nameEn: 'User Layer',
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    icon: Users,
    description: '面向最终用户的交互界面',
    modules: [
      { name: 'Web控制台', icon: Monitor },
      { name: '移动端App', icon: Smartphone },
      { name: 'API网关', icon: Globe },
      { name: '第三方集成', icon: Puzzle },
    ],
  },
  {
    id: 'application',
    name: '应用层',
    nameEn: 'Application Layer',
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    icon: Layers,
    description: '业务流程编排与用例实现',
    modules: [
      { name: '创意生成', icon: Lightbulb },
      { name: '剧本创作', icon: FileText },
      { name: '角色管理', icon: Users },
      { name: '视频生产', icon: Video },
      { name: '发布分发', icon: Send },
      { name: '数据分析', icon: BarChart3 },
    ],
  },
  {
    id: 'core',
    name: '核心层',
    nameEn: 'Core Layer',
    color: 'from-orange-500 to-yellow-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    icon: Cpu,
    description: '领域模型与核心业务逻辑',
    modules: [
      { name: '工作流引擎', icon: Settings },
      { name: 'Agent协作', icon: MessageSquare },
      { name: '角色一致性', icon: Shield },
      { name: '资产管理', icon: Database },
      { name: '规则引擎', icon: Code },
    ],
  },
  {
    id: 'infrastructure',
    name: '基础设施层',
    nameEn: 'Infrastructure Layer',
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    icon: Server,
    description: '技术基础设施与外部服务',
    modules: [
      { name: 'AI模型服务', icon: Zap },
      { name: '云存储', icon: Cloud },
      { name: '消息队列', icon: MessageSquare },
      { name: '缓存服务', icon: Database },
      { name: '安全认证', icon: Lock },
      { name: '监控日志', icon: BarChart3 },
    ],
  },
];

function Monitor(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function Smartphone(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function Globe(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function Puzzle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.39 4.39a2.866 2.866 0 0 1 3.6 3.6l-1.6 1.6a2.866 2.866 0 0 1-3.6-3.6z" />
      <path d="M18.5 14.5a2.866 2.866 0 0 1 0 4.05l-.45.45a2.866 2.866 0 0 1-4.05 0" />
      <path d="M4.5 4.5a2.866 2.866 0 0 1 4.05 0l.45.45a2.866 2.866 0 0 1 0 4.05" />
      <path d="M4.39 15.39a2.866 2.866 0 0 1 3.6-3.6l1.6 1.6a2.866 2.866 0 0 1-3.6 3.6z" />
    </svg>
  );
}

function Lightbulb(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function Video(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}

function Send(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default function Architecture() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">系统模块架构</span>
          </h1>
          <p className="text-gray-400 text-lg">四层架构设计，关注点分离，高内聚低耦合</p>
        </motion.div>

        <div className="space-y-6">
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Card delay={index * 0.1} className={`${layer.bgColor} ${layer.borderColor} border`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0 lg:w-48">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <layer.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{layer.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{layer.nameEn}</p>
                    <p className="text-sm text-gray-400">{layer.description}</p>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3">
                      {layer.modules.map((module, moduleIndex) => (
                        <motion.div
                          key={module.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + moduleIndex * 0.05 }}
                          className="flex items-center gap-2 px-4 py-3 rounded-xl glass-strong hover:bg-white/10 transition-all cursor-default group"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                            <module.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white text-sm font-medium">{module.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {index < architectureLayers.length - 1 && (
                <div className="flex justify-center py-2">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <ArrowDown className="w-6 h-6 text-gray-600" />
                    <div className="text-xs text-gray-600 mt-1">依赖关系</div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <Card delay={0.7} className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6">架构设计原则</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: '单一职责', desc: '每个层只负责特定的功能领域' },
              { title: '依赖倒置', desc: '高层不依赖低层，都依赖抽象' },
              { title: '关注点分离', desc: '业务逻辑与技术实现分离' },
              { title: '可测试性', desc: '各层可独立进行单元测试' },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <h4 className="text-white font-semibold mb-2">{principle.title}</h4>
                <p className="text-gray-400 text-sm">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card delay={0.9} className="mt-8">
          <h3 className="text-xl font-bold text-white mb-6">数据流方向</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['用户请求', '应用服务', '领域逻辑', '基础设施', '数据持久化'].map((item, index, arr) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="px-4 py-2 rounded-lg bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-medium">
                  {item}
                </div>
                {index < arr.length - 1 && (
                  <ArrowDown className="w-5 h-5 text-gray-500 rotate-[-90deg]" />
                )}
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
