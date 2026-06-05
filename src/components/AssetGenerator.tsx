import { useState } from 'react';
import Card from './common/Card';

export function AssetGenerator() {
  const [description, setDescription] = useState('');
  const [assets, setAssets] = useState<{ prompt: string; imageUrl: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/assets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      });
      const data = await response.json();
      const assetPrompts = data.assets || [
        '古代宫殿场景，华丽的金色装饰，古风建筑',
        '仙侠风格人物，飘逸的白衣，手持长剑',
        '神秘的森林，雾气缭绕，奇幻风格',
        '未来城市夜景，霓虹灯闪烁，赛博朋克',
        '温馨的书房，木质家具，书香气息',
      ];
      setAssets(assetPrompts.map((prompt: string) => ({
        prompt,
        imageUrl: `https://neeko-copilot.bytedance.net/api/text2image?prompt=${encodeURIComponent(prompt)}&image_size=landscape_16_9`
      })));
    } catch (error) {
      console.error('资产生成失败:', error);
      const defaultPrompts = [
        '古代宫殿场景，华丽的金色装饰，古风建筑',
        '仙侠风格人物，飘逸的白衣，手持长剑',
        '神秘的森林，雾气缭绕，奇幻风格',
        '未来城市夜景，霓虹灯闪烁，赛博朋克',
        '温馨的书房，木质家具，书香气息',
      ];
      setAssets(defaultPrompts.map((prompt) => ({
        prompt,
        imageUrl: `https://neeko-copilot.bytedance.net/api/text2image?prompt=${encodeURIComponent(prompt)}&image_size=landscape_16_9`
      })));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
            🎨 资产生成器
          </h1>
          <p className="text-gray-400 text-lg">生成场景图、角色图等视觉资产</p>
        </div>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 mb-6">
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">描述需求</label>
            <textarea
              className="w-full h-40 p-4 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 resize-none focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all"
              placeholder="例如：古代宫廷场景，华丽的宫殿，金色装饰，古风风格..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            className="w-full px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all transform hover:scale-105 disabled:opacity-50"
            onClick={handleGenerate}
            disabled={loading || !description.trim()}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                生成资产中...
              </span>
            ) : (
              '🖼️ 生成资产图'
            )}
          </button>
        </Card>

        {assets.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assets.map((asset, index) => (
              <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <div className="aspect-video bg-gray-900 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={asset.imageUrl}
                    alt={`资产 ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-300 text-sm text-center truncate" title={asset.prompt}>
                  {asset.prompt}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}