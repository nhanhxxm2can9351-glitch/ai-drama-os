import { motion } from 'framer-motion';
import { Cloud, Zap, Palette, Users, Check, ArrowRight, Sparkles, Crown, Building2 } from 'lucide-react';
import Card from '../components/common/Card';

const businessModels = [
  {
    id: 'saas',
    icon: Cloud,
    title: 'AI短剧SaaS',
    color: 'primary',
    bgColor: 'bg-primary-500/20',
    iconColor: 'text-primary-400',
    description: '按订阅制提供完整的AI短剧生产平台',
    features: [
      '完整的短剧生产工作流',
      '多角色一致性保证',
      '批量剧集生成能力',
      '数据统计与分析',
      '云端存储与协作'
    ],
    target: '个人创作者、小型工作室'
  },
  {
    id: 'api',
    icon: Zap,
    title: '模型调用收费',
    color: 'purple',
    bgColor: 'bg-accent-purple/20',
    iconColor: 'text-accent-purple',
    description: '开放API接口，按调用量计费',
    features: [
      '文生图API',
      '图生视频API',
      '角色一致性API',
      '语音合成API',
      '剧本生成API'
    ],
    target: '开发者、企业集成'
  },
  {
    id: 'template',
    icon: Palette,
    title: '模板市场',
    color: 'orange',
    bgColor: 'bg-accent-orange/20',
    iconColor: 'text-accent-orange',
    description: '付费短剧模板与风格包交易平台',
    features: [
      '爆款剧本模板',
      '角色人设模板',
      '视觉风格包',
      '分镜模板',
      '创作者分成机制'
    ],
    target: '模板创作者、需求方'
  },
  {
    id: 'character',
    icon: Users,
    title: '角色市场',
    color: 'green',
    bgColor: 'bg-accent-green/20',
    iconColor: 'text-accent-green',
    description: 'AI角色IP授权与交易市场',
    features: [
      '角色形象授权',
      '独家角色购买',
      '角色定制服务',
      'IP衍生合作',
      '角色训练数据'
    ],
    target: 'IP方、品牌商、创作者'
  }
];

const pricingPlans = [
  {
    name: '免费版',
    icon: Sparkles,
    price: '¥0',
    period: '/月',
    description: '适合个人体验和小型项目',
    popular: false,
    color: 'gray',
    features: [
      { text: '每月5次短剧生成', included: true },
      { text: '基础角色库', included: true },
      { text: '标准画质输出', included: true },
      { text: '社区支持', included: true },
      { text: 'API调用（100次/月）', included: true },
      { text: '商业授权', included: false },
      { text: '批量生成', included: false },
      { text: '专属客服', included: false }
    ],
    cta: '免费开始'
  },
  {
    name: '专业版',
    icon: Crown,
    price: '¥299',
    period: '/月',
    description: '适合专业创作者和小型团队',
    popular: true,
    color: 'primary',
    features: [
      { text: '每月100次短剧生成', included: true },
      { text: '高级角色库', included: true },
      { text: '4K画质输出', included: true },
      { text: '优先技术支持', included: true },
      { text: 'API调用（10000次/月）', included: true },
      { text: '商业授权', included: true },
      { text: '批量生成（10集/次）', included: true },
      { text: '专属客服', included: false }
    ],
    cta: '立即升级'
  },
  {
    name: '企业版',
    icon: Building2,
    price: '联系我们',
    period: '',
    description: '适合大型企业和MCN机构',
    popular: false,
    color: 'purple',
    features: [
      { text: '无限短剧生成', included: true },
      { text: '定制角色训练', included: true },
      { text: '8K画质输出', included: true },
      { text: '7x24专属支持', included: true },
      { text: 'API调用（无限）', included: true },
      { text: '完整商业授权', included: true },
      { text: '批量生成（无限）', included: true },
      { text: '私有化部署', included: true }
    ],
    cta: '联系销售'
  }
];

const colorMap: Record<string, string> = {
  primary: 'from-primary-500 to-primary-600',
  purple: 'from-accent-purple to-accent-purple/80',
  orange: 'from-accent-orange to-accent-orange/80',
  green: 'from-accent-green to-accent-green/80',
  gray: 'from-gray-600 to-gray-700'
};

export default function Commercial() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">商业化模式</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            四大商业化引擎，构建可持续的AI短剧生态系统
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {businessModels.map((model, index) => (
            <Card key={model.id} delay={0.1 + index * 0.1} className="relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-40 h-40 ${model.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${model.bgColor} flex items-center justify-center`}>
                      <model.icon className={`w-7 h-7 ${model.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{model.title}</h3>
                      <p className="text-gray-400 text-sm">{model.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${model.bgColor} ${model.iconColor}`}>
                      {model.id.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {model.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${model.bgColor} flex items-center justify-center shrink-0`}>
                        <Check className={`w-3 h-3 ${model.iconColor}`} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-gray-500 text-xs">目标客户</span>
                    <p className="text-white text-sm font-medium">{model.target}</p>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group/btn">
                    了解更多
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">定价方案</h2>
          <p className="text-gray-400">选择适合您的方案，开启AI短剧创作之旅</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full text-white text-sm font-medium shadow-lg">
                    最受欢迎
                  </span>
                </div>
              )}
              
              <div className={`h-full glass rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-primary-500/50 shadow-xl shadow-primary-500/20' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[plan.color]} flex items-center justify-center`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        feature.included ? 'bg-accent-green/20' : 'bg-gray-700/50'
                      }`}>
                        {feature.included ? (
                          <Check className="w-3 h-3 text-accent-green" />
                        ) : (
                          <span className="w-3 h-0.5 bg-gray-500 rounded-full" />
                        )}
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:scale-[1.02]'
                      : plan.color === 'purple'
                      ? 'bg-gradient-to-r from-accent-purple to-accent-purple/80 text-white hover:shadow-lg hover:shadow-accent-purple/30 hover:scale-[1.02]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <Card delay={0.9} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">API 定价</h3>
          <p className="text-gray-400 mb-8">按需计费，灵活扩展，适合各类规模的业务需求</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-primary-400 text-sm font-medium mb-2">文生图 API</div>
              <div className="text-3xl font-bold text-white mb-1">¥0.05</div>
              <div className="text-gray-500 text-sm">/ 每张图片</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-accent-purple text-sm font-medium mb-2">图生视频 API</div>
              <div className="text-3xl font-bold text-white mb-1">¥2.00</div>
              <div className="text-gray-500 text-sm">/ 每秒视频</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-accent-orange text-sm font-medium mb-2">语音合成 API</div>
              <div className="text-3xl font-bold text-white mb-1">¥0.02</div>
              <div className="text-gray-500 text-sm">/ 每千字</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              批量调用享受阶梯优惠，月消费超过 ¥10,000 可享受 8 折优惠
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
