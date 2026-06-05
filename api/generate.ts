import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const KIMI_API_KEY = process.env.KIMI_API_KEY || '';
const KIMI_API_URL = 'https://api.moonshot.cn/v1/chat/completions';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: '缺少 prompt 参数' });
  }

  try {
    const response = await axios.post(
      KIMI_API_URL,
      {
        model: 'moonshot-v1-8k',
        messages: [
          {
            role: 'system',
            content: `你是一位专业的短剧编剧，擅长创作精彩的短剧剧本。
请根据用户提供的主题，生成一个完整的短剧剧本，包含：
1. 剧本标题
2. 角色介绍（姓名、性格、外貌）
3. 场景描述
4. 完整对话内容
5. 镜头提示（可选）

格式要求：
- 使用 Markdown 格式
- 分幕展示
- 对话清晰易读
- 语言简洁生动
`,
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 4096,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${KIMI_API_KEY}`,
        },
      }
    );

    const script = response.data.choices[0].message.content;
    return res.status(200).json({ script });
  } catch (error) {
    console.error('Kimi API Error:', error);
    return res.status(500).json({ error: '剧本生成失败，请重试' });
  }
}