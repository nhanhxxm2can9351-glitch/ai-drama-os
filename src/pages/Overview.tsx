import { motion } from 'framer-motion';
import { Eye, Target, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';
import Card from '../components/common/Card';

const timelineStages = [
  { name: 'MVP', color: 'bg-primary-500' },
  { name: '工作流引擎', color: 'bg-accent-purple' },
  { name: '角色一致性', color: 'bg-accent-orange' },
  { name: '世界观系统', color: 'bg-accent-green' },
  { name: 'AI导演Agent', color: 'bg-accent-cyan' },
  { name: '无限画布', color: 'bg-primary-500' },
  { name: 'Agent团队', color: 'bg-accent-purple' },
  { name: '训练平台', color: 'bg-accent-orange' },
  { name: '商业化', color: 'bg-accent-green' },
  { name: '企业版', color: 'bg-accent-cyan' },
];

export default function Overview() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">项目总览</span>
          </h1>
          <p className="text-gray-400 text-lg">产品愿景与发展路线</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card delay={0.1} className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">产品愿景</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div className="text-red-400 text-sm mb-1">❌ 不要做成</div>
                  <div className="text-white font-medium">AI绘图工具</div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-500 rotate-90" />
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-green-400 text-sm mb-1">✅ 要做成</div>
                  <div className="text-white font-bold text-xl">AI短剧生产操作系统</div>
                </div>
              </div>
            </div>
          </Card>

          <Card delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-purple" />
              </div>
              <h2 className="text-2xl font-bold text-white">核心价值</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <div className="text-white font-medium">角色一致性</div>
                  <div className="text-gray-400 text-sm">解决跨集角色变脸/换人问题</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent-purple font-bold text-sm">2</span>
                </div>
                <div>
                  <div className="text-white font-medium">全链路自动化</div>
                  <div className="text-gray-400 text-sm">从创意到发布一站式完成</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent-orange font-bold text-sm">3</span>
                </div>
                <div>
                  <div className="text-white font-medium">工业化生产</div>
                  <div className="text-gray-400 text-sm">支持百万级剧集批量生产</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent-green font-bold text-sm">4</span>
                </div>
                <div>
                  <div className="text-white font-medium">效率提升100倍</div>
                  <div className="text-gray-400 text-sm">多Agent协作 + 工作流引擎</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card delay={0.3} className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent-orange/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent-orange" />
            </div>
            <h2 className="text-2xl font-bold text-white">9阶段路线图总览</h2>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-green transform -translate-y-1/2 rounded-full opacity-30" />
            
            <div className="relative flex flex-wrap justify-between items-center gap-4">
              {timelineStages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center text-white font-bold text-sm shadow-lg glow-blue mb-2`}>
                    {index + 1}
                  </div>
                  <div className="text-white text-sm font-medium text-center w-20">
                    {stage.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>

        <Card delay={0.4}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent-green/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-accent-green" />
            </div>
            <h2 className="text-2xl font-bold text-white">完整链路</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {['创意', '剧本', '角色', '分镜', '图片', '视频', '配音', '剪辑', '发布', '数据分析', '爆款优化'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex items-center gap-2"
              >
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm">
                  {item}
                </div>
                {index < 10 && <ArrowRight className="w-4 h-4 text-gray-500" />}
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
