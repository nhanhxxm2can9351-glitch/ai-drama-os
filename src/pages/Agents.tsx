import { motion } from 'framer-motion';
import { FileText, Film, Palette, Video, Scissors, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import Card from '../components/common/Card';

const agents = [
  {
    id: 'screenwriter',
    name: '编剧Agent',
    nameEn: 'Screenwriter Agent',
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    icon: FileText,
    description: '创意构思与剧本创作专家',
    responsibilities: [
      '创意选题与概念设计',
      '人物设定与角色塑造',
      '剧本结构与情节编排',
      '对话撰写与场景描述',
      '剧情逻辑与冲突设计',
    ],
    outputs: [
      '完整剧本文档',
      '人物设定档案',
      '分场景剧情大纲',
      '对话脚本',
    ],
  },
  {
    id: 'director',
    name: '导演Agent',
    nameEn: 'Director Agent',
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    icon: Film,
    description: '视觉呈现与镜头语言专家',
    responsibilities: [
      '分镜设计与镜头规划',
      '场景调度与构图设计',
      '表演指导与情绪把控',
      '节奏把控与叙事节奏',
      '视觉风格与艺术指导',
    ],
    outputs: [
      '分镜脚本',
      '镜头列表',
      '场景设计稿',
      '拍摄指导手册',
    ],
  },
  {
    id: 'artist',
    name: '美术Agent',
    nameEn: 'Artist Agent',
    color: 'from-orange-500 to-yellow-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    icon: Palette,
    description: '视觉艺术与风格设计专家',
    responsibilities: [
      '角色形象设计与立绘',
      '场景概念设计',
      '道具与服装设定',
      '色彩方案与视觉风格',
      'UI界面与交互设计',
    ],
    outputs: [
      '角色立绘与三视图',
      '场景概念图',
      '色彩风格指南',
      '美术资产库',
    ],
  },
  {
    id: 'video',
    name: '视频Agent',
    nameEn: 'Video Agent',
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    icon: Video,
    description: '视频生成与动画制作专家',
    responsibilities: [
      '关键帧动画生成',
      '场景渲染与合成',
      '特效制作与粒子效果',
      '转场动画设计',
      '视频质量优化',
    ],
    outputs: [
      '原始视频片段',
      '动画序列帧',
      '特效素材',
      '渲染工程文件',
    ],
  },
  {
    id: 'editor',
    name: '剪辑Agent',
    nameEn: 'Editor Agent',
    color: 'from-red-500 to-rose-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    icon: Scissors,
    description: '后期剪辑与音视频合成专家',
    responsibilities: [
      '素材整理与粗剪',
      '精剪与节奏调整',
      '音视频同步与混音',
      '字幕制作与特效添加',
      '输出格式与编码优化',
    ],
    outputs: [
      '最终成片视频',
      '剪辑工程文件',
      '字幕文件',
      '多版本导出文件',
    ],
  },
  {
    id: 'operator',
    name: '运营Agent',
    nameEn: 'Operator Agent',
    color: 'from-indigo-500 to-violet-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    icon: TrendingUp,
    description: '内容运营与数据优化专家',
    responsibilities: [
      '平台内容发布策略',
      '标题与封面优化',
      '标签与SEO优化',
      '数据分析与效果追踪',
      '用户反馈与内容迭代',
    ],
    outputs: [
      '发布计划文档',
      '数据分析报告',
      '优化建议方案',
      '运营效果总结',
    ],
  },
];

const workflowSteps = [
  { from: '编剧Agent', to: '导演Agent', desc: '剧本 → 分镜' },
  { from: '导演Agent', to: '美术Agent', desc: '分镜 → 美术' },
  { from: '美术Agent', to: '视频Agent', desc: '美术 → 视频' },
  { from: '视频Agent', to: '剪辑Agent', desc: '素材 → 剪辑' },
  { from: '剪辑Agent', to: '运营Agent', desc: '成片 → 运营' },
];

export default function Agents() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">多Agent协作团队</span>
          </h1>
          <p className="text-gray-400 text-lg">六大专业Agent角色协同工作，打造完整的视频内容生产流水线</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card delay={index * 0.1} className={`h-full ${agent.bgColor} ${agent.borderColor} border`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <agent.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
                    <p className="text-sm text-gray-500">{agent.nameEn}</p>
                    <p className="text-sm text-gray-400 mt-1">{agent.description}</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${agent.color}`}></span>
                      核心职责
                    </h4>
                    <ul className="space-y-2">
                      {agent.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${agent.color}`}></span>
                      输出内容
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.outputs.map((output, outputIndex) => (
                        <span
                          key={outputIndex}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium ${agent.bgColor} border ${agent.borderColor} text-white/90`}
                        >
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card delay={0.7} className="mb-12">
          <h3 className="text-xl font-bold text-white mb-8 text-center">协作工作流</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium whitespace-nowrap">
                  {step.from}
                </div>
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="text-xs text-gray-500 mt-1">{step.desc}</span>
                </div>
                {index === workflowSteps.length - 1 && (
                  <div className="px-4 py-2 rounded-lg bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-medium whitespace-nowrap">
                    {step.to}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Card>

        <Card delay={0.9}>
          <h3 className="text-xl font-bold text-white mb-6">团队协作优势</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: '专业分工', desc: '每个Agent专注特定领域，发挥最大效能' },
              { title: '无缝衔接', desc: '标准化输出格式，环节之间平滑过渡' },
              { title: '质量可控', desc: '多环节质检，确保最终产出质量' },
              { title: '高效迭代', desc: '并行处理能力，大幅缩短生产周期' },
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <h4 className="text-white font-semibold mb-2">{advantage.title}</h4>
                <p className="text-gray-400 text-sm">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
