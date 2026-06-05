import { useState } from 'react';
import Card from './common/Card';

export function ScriptGenerator() {
  const [prompt, setPrompt] = useState('');
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('请输入短剧主题');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('服务器错误');
      }

      const data = await response.json();
      setScript(data.script);
    } catch (err) {
      setError('剧本生成失败，请稍后重试');
      console.error('生成失败:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setPrompt('');
    setScript('');
    setError('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script);
      alert('已复制到剪贴板');
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            🎬 AI 短剧生成器
          </h1>
          <p className="text-gray-400 text-lg">
            输入主题，AI 帮你创作精彩短剧剧本
          </p>
        </div>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">
              短剧主题
            </label>
            <textarea
              className="w-full h-40 p-4 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 resize-none focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="例如：一个程序员穿越到古代，利用现代知识改变历史..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
              {error}
            </div>
          )}

          <div className="flex justify-center gap-4 mb-6">
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  生成中...
                </span>
              ) : (
                '✨ 生成剧本'
              )}
            </button>
            <button
              className="px-6 py-3 bg-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-600 transition-all"
              onClick={handleClear}
            >
              清除
            </button>
          </div>

          {script && (
            <div className="mt-6 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">📝 生成的剧本</h3>
                <button
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all text-sm"
                  onClick={handleCopy}
                >
                  📋 复制
                </button>
              </div>
              <div className="whitespace-pre-wrap text-gray-300 leading-relaxed font-mono text-sm">
                {script}
              </div>
            </div>
          )}
        </Card>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>💡 提示：输入越详细，生成的剧本越精彩</p>
        </div>
      </div>
    </div>
  );
}