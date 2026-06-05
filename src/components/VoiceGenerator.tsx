import { useState } from 'react';
import Card from './common/Card';

export function VoiceGenerator() {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [voices, setVoices] = useState([
    { id: 'male', name: '男性声音' },
    { id: 'female', name: '女性声音' },
    { id: 'child', name: '儿童声音' },
    { id: 'old', name: '老年声音' },
  ]);
  const [selectedVoice, setSelectedVoice] = useState('female');

  const handleGenerate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/voice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice: selectedVoice }),
      });
      const data = await response.json();
      setAudioUrl(data.audioUrl || '');
    } catch (error) {
      console.error('配音生成失败:', error);
      setAudioUrl('');
    } finally {
      setLoading(false);
    }
  };

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
            🎤 配音生成器
          </h1>
          <p className="text-gray-400 text-lg">文字转语音，生成专业配音</p>
        </div>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">选择声音</label>
            <div className="flex flex-wrap gap-2">
              {voices.map((voice) => (
                <button
                  key={voice.id}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedVoice === voice.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setSelectedVoice(voice.id)}
                >
                  {voice.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">输入文本</label>
            <textarea
              className="w-full h-40 p-4 bg-gray-900/50 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 resize-none focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
              placeholder="输入需要配音的文本...\n\n例如：\n\n「在遥远的古代，有一位勇敢的少年，他踏上了一段传奇的旅程...」"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <button
              className="flex-1 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-50"
              onClick={handleGenerate}
              disabled={loading || !text.trim()}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  生成配音中...
                </span>
              ) : (
                '🎧 生成配音'
              )}
            </button>
            <button
              className="px-6 py-3 bg-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-600 transition-all disabled:opacity-50"
              onClick={handleTextToSpeech}
              disabled={!text.trim()}
              title="使用浏览器内置语音合成"
            >
              🔊 试听
            </button>
          </div>

          {audioUrl && (
            <div className="mt-6 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">🎵 生成的配音</h3>
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
                您的浏览器不支持音频播放。
              </audio>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}