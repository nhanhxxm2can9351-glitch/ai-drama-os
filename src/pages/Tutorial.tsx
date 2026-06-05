import Card from '../components/common/Card';

export default function Tutorial() {
  const steps = [
    {
      title: '1. 生成剧本',
      description: '在剧本生成器中输入你的短剧主题，AI 会自动生成完整的剧本。',
      icon: '📝',
    },
    {
      title: '2. 生成分镜',
      description: '将生成的剧本粘贴到分镜生成器，AI 会为你创建详细的分镜脚本。',
      icon: '🎨',
    },
    {
      title: '3. 生成资产',
      description: '根据场景描述生成场景图、角色图等视觉资产。',
      icon: '🖼️',
    },
    {
      title: '4. 配音制作',
      description: '输入台词文本，选择声音类型，生成专业配音。',
      icon: '🎤',
    },
    {
      title: '5. 生成视频',
      description: '将所有素材整合，生成完整的短视频。',
      icon: '🎬',
    },
  ];

  const tips = [
    '输入越详细，生成的剧本越精彩',
    '可以使用历史记录快速复用之前的剧本',
    '支持多种声音类型，选择适合角色的声音',
    '生成的资产图片可以直接下载使用',
    '建议先生成分镜再生成视频，效果更好',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            📚 使用教程
          </h1>
          <p className="text-gray-400 text-lg">学会使用 AI Drama OS，轻松创作精彩短剧</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">💡 实用技巧</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg">
                <span className="text-yellow-400">✓</span>
                <p className="text-gray-300">{tip}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 mt-6">
          <h2 className="text-2xl font-bold text-white mb-6">🔗 相关链接</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://github.com/nhanhxxm2can9351-glitch/ai-drama-os" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-all">
              <div className="text-gray-400 text-sm">GitHub 仓库</div>
              <div className="text-white font-medium">查看源代码</div>
            </a>
            <a href="https://vercel.com/melys-projects/ai-drama-os" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-all">
              <div className="text-gray-400 text-sm">Vercel 部署</div>
              <div className="text-white font-medium">管理部署配置</div>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}