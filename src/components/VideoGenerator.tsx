import { useState } from 'react';
import Card from './common/Card';

export function VideoGenerator() {
  const [script, setScript] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!script.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ script }),
      });
      const data = await response.json();
      setVideoUrl(data.videoUrl || '');
    } catch (error) {
      console.error('视频生成失败:', error);
      setVideoUrl('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
            🎥 视频生成器
          </h1>
          <p className="text-gray-400 text-lg">根据剧本自动生成视频</p>
        </div>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">输入剧本或分镜脚本</label>
            <textarea
              className="w-full h-60 p-4 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 resize-none focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="粘贴你的剧本或分镜脚本...\n\n例如：\n\n## 第一幕\n\n**场景**: 古代书房\n**人物**: 书生李明\n\n李明坐在书桌前，看着窗外的月亮，若有所思。\n\n李明：「今夜月色真美...」"
              value={script}
              onChange={(e) => setScript(e.target.value)}
            />
          </div>

          <button
            className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all transform hover:scale-105 disabled:opacity-50"
            onClick={handleGenerate}
            disabled={loading || !script.trim()}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                生成视频中...
              </span>
            ) : (
              '🎬 生成视频'
            )}
          </button>

          {videoUrl && (
            <div className="mt-6 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">📹 生成的视频</h3>
              <video controls className="w-full rounded-lg">
                <source src={videoUrl} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}