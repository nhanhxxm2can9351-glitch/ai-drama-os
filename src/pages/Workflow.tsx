import { motion } from 'framer-motion';
import {
  FileText,
  Film,
  Users,
  MapPin,
  Image,
  Video,
  Mic,
  Subtitles,
  CheckCircle,
  ArrowRight,
  Play,
  Layers,
  GitBranch,
  Clock,
} from 'lucide-react';
import Card from '../components/common/Card';

const workflowNodes = [
  {
    id: 'script',
    name: '剧本节点',
    nameEn: 'Script Node',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    icon: FileText,
    description: 'AI 辅助剧本创作，支持多轮对话优化',
    inputs: ['创意输入', '参考资料'],
    outputs: ['完整剧本', '角色设定', '场景描述'],
    duration: '1-3 天',
  },
  {
    id: 'storyboard',
    name: '分镜节点',
    nameEn: 'Storyboard Node',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    icon: Layers,
    description: '智能分镜拆解，镜头语言自动设计',
    inputs: ['完整剧本'],
    outputs: ['分镜脚本', '镜头列表', '时长预估'],
    duration: '1-2 天',
  },
  {
    id: 'character',
    name: '角色节点',
    nameEn: 'Character Node',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    icon: Users,
    description: '角色一致性管理，形象设计与优化',
    inputs: ['角色设定', '参考图'],
    outputs: ['角色形象', '表情库', '动作规范'],
    duration: '2-4 天',
  },
  {
    id: 'scene',
    name: '场景节点',
    nameEn: 'Scene Node',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    icon: MapPin,
    description: '场景构建与环境设计，氛围营造',
    inputs: ['场景描述', '参考图'],
    outputs: ['场景背景', '道具设计', '灯光方案'],
    duration: '2-3 天',
  },
  {
    id: 'image',
    name: '图片节点',
    nameEn: 'Image Node',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    icon: Image,
    description: 'AI 图像生成，角色场景融合渲染',
    inputs: ['分镜脚本', '角色形象', '场景背景'],
    outputs: ['关键帧图像', '角色插图', '场景图'],
    duration: '1-2 天',
  },
  {
    id: 'video',
    name: '视频节点',
    nameEn: 'Video Node',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    icon: Video,
    description: '视频生成与动效制作，镜头运动',
    inputs: ['关键帧图像', '分镜脚本', '音频参考'],
    outputs: ['原始视频片段', '转场动效', '镜头运动'],
    duration: '2-4 天',
  },
  {
    id: 'voice',
    name: '配音节点',
    nameEn: 'Voice Node',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    icon: Mic,
    description: 'AI 语音合成，情感化配音与音效',
    inputs: ['剧本台词', '角色设定', '情感标记'],
    outputs: ['角色配音', '背景音乐', '音效设计'],
    duration: '1-2 天',
  },
  {
    id: 'subtitle',
    name: '字幕节点',
    nameEn: 'Subtitle Node',
    color: 'from-fuchsia-500 to-pink-500',
    bgColor: 'bg-fuchsia-500/10',
    borderColor: 'border-fuchsia-500/30',
    icon: Subtitles,
    description: '智能字幕生成，多语言翻译与对齐',
    inputs: ['配音音频', '剧本台词', '时间轴'],
    outputs: ['字幕文件', '多语言翻译', '字幕样式'],
    duration: '4-8 小时',
  },
  {
    id: 'final',
    name: '成片',
    nameEn: 'Final Output',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    icon: CheckCircle,
    description: '视频合成与导出，质量检测',
    inputs: ['视频片段', '配音音频', '字幕文件'],
    outputs: ['最终成片', '质量报告', '元数据'],
    duration: '4-12 小时',
  },
];

const branchPoints = [
  { from: 'script', to: ['storyboard', 'character'], label: '并行分支' },
  { from: 'character', to: ['image', 'voice'], label: '形象与配音' },
  { from: 'image', to: ['video'], label: '帧到视频' },
  { from: 'video', to: ['final'], label: '视频合成' },
];

export default function Workflow() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">全链路生产工作流</span>
          </h1>
          <p className="text-gray-400 text-lg">从剧本到成片的端到端自动化生产流水线</p>
        </motion.div>

        <Card delay={0.1} className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">工作流总览</h3>
              <p className="text-gray-400 text-sm mt-1">9 个核心节点，支持并行处理与分支逻辑</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>总周期：10-20 天</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <GitBranch className="w-4 h-4" />
                <span>3 个并行分支</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto pb-8">
            <div className="flex items-center justify-between min-w-[1200px] px-4">
              {workflowNodes.map((node, index) => (
                <div key={node.id} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg mb-3`}
                    >
                      <node.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm">{node.name}</div>
                      <div className="text-gray-500 text-xs">{node.nameEn}</div>
                    </div>
                  </motion.div>

                  {index < workflowNodes.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.05 }}
                      className="mx-4"
                    >
                      <ArrowRight className="w-6 h-6 text-gray-500" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {workflowNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card
                delay={0.3 + index * 0.1}
                className={`h-full ${node.bgColor} ${node.borderColor} border`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <node.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-bold">{node.name}</h3>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{node.description}</p>

                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">输入</div>
                        <div className="flex flex-wrap gap-1">
                          {node.inputs.map((input) => (
                            <span
                              key={input}
                              className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded"
                            >
                              {input}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">输出</div>
                        <div className="flex flex-wrap gap-1">
                          {node.outputs.map((output) => (
                            <span
                              key={output}
                              className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                            >
                              {output}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-500">预计周期：{node.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card delay={1.2} className="mb-8">
          <h3 className="text-xl font-bold text-white mb-6">工作流执行顺序</h3>
          <div className="space-y-4">
            {[
              {
                phase: '第一阶段：内容创作',
                nodes: ['剧本节点', '分镜节点', '角色节点', '场景节点'],
                color: 'from-rose-500 to-amber-500',
              },
              {
                phase: '第二阶段：多媒体生成',
                nodes: ['图片节点', '视频节点', '配音节点'],
                color: 'from-cyan-500 to-violet-500',
              },
              {
                phase: '第三阶段：后期合成',
                nodes: ['字幕节点', '成片'],
                color: 'from-fuchsia-500 to-green-500',
              },
            ].map((phase, phaseIndex) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + phaseIndex * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className={`w-2 h-16 rounded-full bg-gradient-to-b ${phase.color} flex-shrink-0`}
                />
                <div className="flex-1">
                  <div className="text-white font-semibold mb-2">{phase.phase}</div>
                  <div className="flex flex-wrap items-center gap-2">
                    {phase.nodes.map((nodeName, nodeIndex) => (
                      <div key={nodeName} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300">
                          {nodeName}
                        </span>
                        {nodeIndex < phase.nodes.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card delay={1.6}>
            <h3 className="text-xl font-bold text-white mb-4">并行分支优化</h3>
            <div className="space-y-4">
              {[
                {
                  title: '角色与场景并行',
                  desc: '角色形象设计与场景构建可同时进行，节省 30% 时间',
                  icon: Users,
                },
                {
                  title: '配音与视频生成并行',
                  desc: '语音合成可在视频渲染过程中同步完成',
                  icon: Mic,
                },
                {
                  title: '字幕与后期并行',
                  desc: '字幕生成与视频剪辑可并行处理',
                  icon: Subtitles,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{item.title}</div>
                    <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card delay={1.7}>
            <h3 className="text-xl font-bold text-white mb-4">工作流特性</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: '可中断', desc: '随时暂停恢复' },
                { label: '可回滚', desc: '节点级版本管理' },
                { label: '可缓存', desc: '中间结果复用' },
                { label: '可重试', desc: '失败自动重试' },
                { label: '可监控', desc: '实时进度追踪' },
                { label: '可扩展', desc: '自定义节点插件' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.05 }}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-center"
                >
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="mt-8 text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl text-white font-semibold hover:opacity-90 transition-opacity">
            <Play className="w-5 h-5" />
            启动工作流演示
          </button>
        </motion.div>
      </div>
    </div>
  );
}
