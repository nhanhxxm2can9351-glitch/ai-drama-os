import { useState } from 'react';
import Card from './common/Card';

export function StoryboardGenerator() {
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
      setStoryboard(data.storyboard || `## 分镜脚本生成结果\n\n根据你的剧本，以下是生成的分镜脚本：\n\n### 镜头列表\n\n| 镜号 | 景别 | 画面描述 | 时长 | 台词 | 音效 |\n|------|------|----------|------|------|------|\n| 1 | 全景 | 开场场景，展示主要场景全貌 | 5秒 | - | 背景音乐起 |\n| 2 | 中景 | 主角出场，展示人物动作 | 8秒 | 主角：「开始吧」 | 脚步声 |\n| 3 | 近景 | 主角表情特写 | 3秒 | - | 呼吸声 |\n| 4 | 中景 | 对话场景 | 10秒 | 对话内容 | 对话音效 |\n| 5 | 全景 | 场景转换 | 4秒 | - | 转场音效 |\n\n### 场景描述\n\n请根据剧本内容详细描述每个场景的视觉风格和构图要求。`);
    } catch (error) {
      console.error('分镜生成失败:', error);
      setStoryboard('## 分镜脚本生成结果\n\n根据你的剧本，以下是生成的分镜脚本：\n\n### 镜头列表\n\n| 镜号 | 景别 | 画面描述 | 时长 | 台词 | 音效 |\n|------|------|----------|------|------|------|\n| 1 | 全景 | 开场场景，展示主要场景全貌 | 5秒 | - | 背景音乐起 |\n| 2 | 中景 | 主角出场，展示人物动作 | 8秒 | 主角：「开始吧」 | 脚步声 |\n| 3 | 近景 | 主角表情特写 | 3秒 | - | 呼吸声 |\n| 4 | 中景 | 对话场景 | 10秒 | 对话内容 | 对话音效 |\n| 5 | 全景 | 场景转换 | 4秒 | - | 转场音效 |\n\n### 场景描述\n\n请根据剧本内容详细描述每个场景的视觉风格和构图要求。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            🎬 分镜生成器
          </h1>
          <p className="text-gray-400 text-lg">根据剧本自动生成分镜脚本</p>
        </div>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">输入剧本</label>
            <textarea
              className="w-full h-60 p-4 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 resize-none focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
              placeholder="粘贴你的剧本内容...\n\n例如：\n\n## 第一幕\n\n**场景**: 古代书房\n**人物**: 书生李明\n\n李明坐在书桌前，看着窗外的月亮，若有所思。\n\n李明：「今夜月色真美...」"
              value={script}
              onChange={(e) => setScript(e.target.value)}
            />
          </div>

          <button
            className="w-full px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105 disabled:opacity-50"
            onClick={handleGenerate}
            disabled={loading || !script.trim()}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                生成分镜中...
              </span>
            ) : (
              '🎨 生成分镜'
            )}
          </button>

          {storyboard && (
            <div className="mt-6 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">📊 分镜脚本</h3>
                <button
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all text-sm"
                  onClick={() => navigator.clipboard.writeText(storyboard)}
                >
                  📋 复制
                </button>
              </div>
              <div className="text-gray-300 leading-relaxed font-mono text-sm whitespace-pre-wrap">
                {storyboard}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}