import { motion } from 'framer-motion';
import { Target, Zap, Code, Rocket, Users, Globe, Brain, Palette, TrendingUp } from 'lucide-react';
import Card from '../components/common/Card';

const roadmapData = [
  {
    stage: '第一阶段',
    name: 'MVP',
    icon: Rocket,
    color: 'bg-primary-500',
    colorLight: 'bg-primary-500/20',
    colorText: 'text-primary-400',
    goal: '验证核心价值，完成最小可用产品',
    features: ['剧本生成', '角色创建', '分镜设计', '基础绘图'],
    tech: ['React + TypeScript', 'Tailwind CSS', 'OpenAI API', 'Stable Diffusion']
  },
  {
    stage: '第二阶段',
    name: '工作流引擎',
    icon: Zap,
    color: 'bg-accent-purple',
    colorLight: 'bg-accent-purple/20',
    colorText: 'text-accent-purple',
    goal: '实现可编排的自动化工作流',
    features: ['可视化工作流编排', '节点状态管理', '自动重试机制', '任务调度系统'],
    tech: ['React Flow', 'Zustand 状态管理', 'Web Workers', 'IndexedDB']
  },
  {
    stage: '第三阶段',
    name: '角色一致性',
    icon: Users,
    color: 'bg-accent-orange',
    colorLight: 'bg-accent-orange/20',
    colorText: 'text-accent-orange',
    goal: '解决跨集角色变脸问题',
    features: ['角色特征提取', '一致性LoRA训练', '参考图生成', '角色库管理'],
    tech: ['IP-Adapter', 'Face Swap', 'LoRA Training', 'Face Detection']
  },
  {
    stage: '第四阶段',
    name: '世界观系统',
    icon: Globe,
    color: 'bg-accent-green',
    colorLight: 'bg-accent-green/20',
    colorText: 'text-accent-green',
    goal: '构建统一的世界观设定',
    features: ['场景设定管理', '风格统一控制', '道具资产库', '时间线系统'],
    tech: ['ControlNet', 'Style Reference', '3D辅助', '语义分割']
  },
  {
    stage: '第五阶段',
    name: 'AI导演Agent',
    icon: Brain,
    color: 'bg-accent-cyan',
    colorLight: 'bg-accent-cyan/20',
    colorText: 'text-accent-cyan',
    goal: 'AI自主决策，减少人工干预',
    features: ['自动分镜生成', '镜头语言优化', '情绪节奏控制', '质量自动评估'],
    tech: ['Multi-Agent系统', 'LangChain', 'RAG知识库', '强化学习']
  },
  {
    stage: '第六阶段',
    name: '无限画布',
    icon: Palette,
    color: 'bg-primary-500',
    colorLight: 'bg-primary-500/20',
    colorText: 'text-primary-400',
    goal: '可视化编辑，所见即所得',
    features: ['画布式编辑器', '拖拽式操作', '实时预览', '多层时间轴'],
    tech: ['Canvas API', 'WebGL', 'PixiJS', '虚拟滚动']
  },
  {
    stage: '第七阶段',
    name: 'Agent团队',
    icon: Users,
    color: 'bg-accent-purple',
    colorLight: 'bg-accent-purple/20',
    colorText: 'text-accent-purple',
    goal: '多Agent协作，流水线生产',
    features: ['角色Agent', '美术Agent', '配音Agent', '剪辑Agent'],
    tech: ['Agent Communication', 'Task Orchestration', 'Feedback Loop', 'Human-in-the-loop']
  },
  {
    stage: '第八阶段',
    name: '训练平台',
    icon: Brain,
    color: 'bg-accent-orange',
    colorLight: 'bg-accent-orange/20',
    colorText: 'text-accent-orange',
    goal: '模型自训练，持续优化效果',
    features: ['训练数据管理', '一键LoRA训练', '效果对比评测', '模型版本管理'],
    tech: ['GPU集群', 'Kubernetes', 'MLflow', '模型量化']
  },
  {
    stage: '第九阶段',
    name: '商业化',
    icon: TrendingUp,
    color: 'bg-accent-green',
    colorLight: 'bg-accent-green/20',
    colorText: 'text-accent-green',
    goal: '完善商业模式，实现盈利',
    features: ['订阅制付费', 'API开放平台', '模板市场', '数据分析面板'],
    tech: ['Stripe支付', 'Usage Metering', 'Analytics', '多租户系统']
  }
];

export default function Roadmap() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">产品路线图</span>
          </h1>
          <p className="text-gray-400 text-lg">九个阶段，打造AI短剧生产操作系统</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.name} delay={0.1 + index * 0.1} className="relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`} />
                <div className={`absolute top-4 right-4 w-24 h-24 ${item.colorLight} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.colorLight} flex items-center justify-center shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${item.colorText}`} />
                    </div>
                    <div>
                      <div className={`text-xs font-medium ${item.colorText} mb-1`}>
                        {item.stage}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">核心目标</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      {item.goal}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">关键功能</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">技术要点</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded-md ${item.colorLight} ${item.colorText} font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
