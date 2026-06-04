import { motion } from 'framer-motion';
import { FileJson, MessageSquare } from 'lucide-react';
import Card from '../components/common/Card';
import CodeBlock from '../components/common/CodeBlock';

const dataProtocol = JSON.stringify({
  "version": "1.0.0",
  "project": {
    "id": "string",
    "name": "string",
    "description": "string",
    "genre": "string",
    "targetPlatform": "string[]",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
  "characters": [
    {
      "id": "string",
      "name": "string",
      "role": "protagonist|antagonist|supporting",
      "description": "string",
      "appearance": {
        "age": "number",
        "gender": "string",
        "hair": "string",
        "eyes": "string",
        "clothing": "string",
        "distinctiveFeatures": "string[]"
      },
      "personality": "string",
      "background": "string",
      "referenceImages": "string[]",
      "embeddingId": "string"
    }
  ],
  "script": {
    "id": "string",
    "title": "string",
    "totalEpisodes": "number",
    "episodes": [
      {
        "episodeNumber": "number",
        "title": "string",
        "summary": "string",
        "scenes": [
          {
            "sceneId": "string",
            "sequence": "number",
            "location": "string",
            "timeOfDay": "string",
            "description": "string",
            "dialogues": [
              {
                "characterId": "string",
                "text": "string",
                "emotion": "string",
                "action": "string"
              }
            ],
            "cameraAngle": "string",
            "duration": "number",
            "visualElements": "string[]"
          }
        ]
      }
    ]
  },
  "assets": {
    "images": [
      {
        "id": "string",
        "sceneId": "string",
        "type": "keyframe|transition|background",
        "url": "string",
        "prompt": "string",
        "model": "string",
        "seed": "number",
        "status": "pending|generating|completed|failed"
      }
    ],
    "videos": [
      {
        "id": "string",
        "sceneId": "string",
        "url": "string",
        "duration": "number",
        "fps": "number",
        "resolution": "string",
        "status": "pending|generating|completed|failed"
      }
    ],
    "audios": [
      {
        "id": "string",
        "dialogueId": "string",
        "type": "voiceover|bgm|sound_effect",
        "url": "string",
        "voiceModel": "string",
        "duration": "number",
        "status": "pending|generating|completed|failed"
      }
    ]
  },
  "metadata": {
    "tags": "string[]",
    "rating": "string",
    "language": "string",
    "targetAudience": "string"
  }
}, null, 2);

const promptProtocol = JSON.stringify({
  "version": "1.0.0",
  "systemPrompt": {
    "role": "string",
    "persona": "string",
    "constraints": "string[]",
    "outputFormat": "string"
  },
  "imageGeneration": {
    "template": "string",
    "stylePresets": {
      "default": {
        "style": "string",
        "quality": "string",
        "lighting": "string",
        "camera": "string",
        "negativePrompt": "string"
      }
    },
    "characterInjection": {
      "format": "string",
      "position": "beginning|end"
    },
    "sceneEnhancement": {
      "enabled": "boolean",
      "rules": "string[]"
    }
  },
  "videoGeneration": {
    "template": "string",
    "motionParameters": {
      "motionBucket": "number",
      "fps": "number",
      "duration": "number"
    },
    "consistencySettings": {
      "characterConsistency": "number",
      "sceneConsistency": "number",
      "styleConsistency": "number"
    }
  },
  "voiceGeneration": {
    "voiceMapping": [
      {
        "characterId": "string",
        "voiceId": "string",
        "style": "string",
        "speed": "number",
        "pitch": "number"
      }
    ],
    "emotionStyles": {
      "happy": "string",
      "sad": "string",
      "angry": "string",
      "neutral": "string"
    }
  },
  "scriptGeneration": {
    "genreGuidelines": "string",
    "episodeStructure": "string",
    "characterDialogueStyle": "string",
    "sceneDescriptionStyle": "string"
  },
  "validation": {
    "requiredFields": "string[]",
    "maxLength": {
      "dialogue": "number",
      "description": "number"
    },
    "forbiddenContent": "string[]"
  }
}, null, 2);

export default function Protocol() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">核心数据协议</span>
          </h1>
          <p className="text-gray-400 text-lg">统一数据结构与Prompt规范</p>
        </motion.div>

        <Card delay={0.1} className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
              <FileJson className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">统一数据协议</h2>
              <p className="text-gray-400 text-sm">全链路数据交换标准格式</p>
            </div>
          </div>
          <CodeBlock code={dataProtocol} language="json" title="data-protocol-v1.0.0.json" />
        </Card>

        <Card delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-accent-purple" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">统一Prompt协议</h2>
              <p className="text-gray-400 text-sm">AI模型调用标准化规范</p>
            </div>
          </div>
          <CodeBlock code={promptProtocol} language="json" title="prompt-protocol-v1.0.0.json" />
        </Card>
      </div>
    </div>
  );
}
