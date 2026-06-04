import { motion } from 'framer-motion';
import {
  Flag,
  Clock,
  CheckCircle2,
  Circle,
  Code2,
  Server,
  Palette,
  Layers,
  Shield,
  Zap,
  Box,
  Cpu,
  Users,
  Calendar,
  GanttChart
} from 'lucide-react';
import Card from '../components/common/Card';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  assignee?: string;
  dueDate?: string;
  tags?: string[];
}

interface PriorityColumn {
  title: string;
  subtitle: string;
  color: string;
  colorLight: string;
  colorText: string;
  icon: typeof Flag;
  tasks: Task[];
}

const priorityData: PriorityColumn[] = [
  {
    title: '第一优先级',
    subtitle: 'P0 - 紧急重要',
    color: 'bg-accent-red',
    colorLight: 'bg-accent-red/20',
    colorText: 'text-accent-red',
    icon: Flag,
    tasks: [
      {
        id: 'p0-1',
        title: '剧本生成模块',
        description: '接入 GPT-4 API，实现剧本大纲、角色设定自动生成',
        status: 'in-progress',
        assignee: '张三',
        dueDate: '06-10',
        tags: ['核心功能', 'AI']
      },
      {
        id: 'p0-2',
        title: '角色创建系统',
        description: '角色人设管理、特征提取、参考图生成',
        status: 'todo',
        assignee: '李四',
        dueDate: '06-15',
        tags: ['核心功能', 'AI']
      },
      {
        id: 'p0-3',
        title: '分镜设计工具',
        description: '可视化分镜编辑器，支持拖拽操作',
        status: 'todo',
        assignee: '王五',
        dueDate: '06-20',
        tags: ['编辑器']
      },
      {
        id: 'p0-4',
        title: '基础绘图集成',
        description: '接入 Stable Diffusion API',
        status: 'done',
        assignee: '赵六',
        dueDate: '06-05',
        tags: ['AI', '图像']
      }
    ]
  },
  {
    title: '第二优先级',
    subtitle: 'P1 - 重要不紧急',
    color: 'bg-accent-orange',
    colorLight: 'bg-accent-orange/20',
    colorText: 'text-accent-orange',
    icon: Clock,
    tasks: [
      {
        id: 'p1-1',
        title: '工作流引擎',
        description: '可视化工作流编排，节点连接',
        status: 'todo',
        assignee: '张三',
        dueDate: '06-25',
        tags: ['核心功能']
      },
      {
        id: 'p1-2',
        title: '角色一致性',
        description: 'IP-Adapter 集成，跨图角色保持',
        status: 'todo',
        assignee: '李四',
        dueDate: '06-30',
        tags: ['AI', '图像']
      },
      {
        id: 'p1-3',
        title: '任务调度系统',
        description: '异步任务队列，状态管理',
        status: 'todo',
        assignee: '王五',
        dueDate: '07-05',
        tags: ['后端']
      }
    ]
  },
  {
    title: '第三优先级',
    subtitle: 'P2 - 未来规划',
    color: 'bg-accent-green',
    colorLight: 'bg-accent-green/20',
    colorText: 'text-accent-green',
    icon: Layers,
    tasks: [
      {
        id: 'p2-1',
        title: '多 Agent 协作',
        description: '多智能体协作系统',
        status: 'todo',
        assignee: '赵六',
        dueDate: '07-15',
        tags: ['AI', 'Agent']
      },
      {
        id: 'p2-2',
        title: '训练平台',
        description: 'LoRA 一键训练，模型管理',
        status: 'todo',
        assignee: '张三',
        dueDate: '07-20',
        tags: ['AI', '训练']
      },
      {
        id: 'p2-3',
        title: '视频生成',
        description: '帧间连贯视频生成模块',
        status: 'todo',
        assignee: '李四',
        dueDate: '07-25',
        tags: ['视频', 'AI']
      }
    ]
  }
];

const techStackData = {
  frontend: {
    title: '前端技术',
    icon: Palette,
    color: 'bg-primary-500',
    colorLight: 'bg-primary-500/20',
    colorText: 'text-primary-400',
    items: [
      { name: 'React 18', desc: 'UI 框架' },
      { name: 'TypeScript', desc: '类型安全' },
      { name: 'Tailwind CSS', desc: '样式方案' },
      { name: 'Framer Motion', desc: '动画库' },
      { name: 'React Router', desc: '路由管理' },
      { name: 'Zustand', desc: '状态管理' },
      { name: 'React Flow', desc: '流程图' },
      { name: 'Lucide React', desc: '图标库' }
    ]
  },
  backend: {
    title: '后端技术',
    icon: Server,
    color: 'bg-accent-purple',
    colorLight: 'bg-accent-purple/20',
    colorText: 'text-accent-purple',
    items: [
      { name: 'Node.js', desc: '运行环境' },
      { name: 'Express', desc: 'Web 框架' },
      { name: 'Python', desc: 'AI 服务' },
      { name: 'FastAPI', desc: 'API 框架' },
      { name: 'Redis', desc: '缓存/队列' },
      { name: 'PostgreSQL', desc: '关系数据库' },
      { name: 'MongoDB', desc: '文档数据库' },
      { name: 'WebSocket', desc: '实时通信' }
    ]
  },
  ai: {
    title: 'AI 技术',
    icon: Cpu,
    color: 'bg-accent-cyan',
    colorLight: 'bg-accent-cyan/20',
    colorText: 'text-accent-cyan',
    items: [
      { name: 'OpenAI GPT-4', desc: '大语言模型' },
      { name: 'Stable Diffusion', desc: '图像生成' },
      { name: 'ControlNet', desc: '姿态控制' },
      { name: 'IP-Adapter', desc: '参考图' },
      { name: 'LangChain', desc: 'LLM 框架' },
      { name: 'RAG', desc: '检索增强' },
      { name: 'LoRA', desc: '微调训练' },
      { name: 'FaceSwap', desc: '人脸替换' }
    ]
  },
  devops: {
    title: 'DevOps',
    icon: Shield,
    color: 'bg-accent-orange',
    colorLight: 'bg-accent-orange/20',
    colorText: 'text-accent-orange',
    items: [
      { name: 'Docker', desc: '容器化' },
      { name: 'Kubernetes', desc: '容器编排' },
      { name: 'GitHub Actions', desc: 'CI/CD' },
      { name: 'Vercel', desc: '前端部署' },
      { name: 'AWS', desc: '云服务' },
      { name: 'MLflow', desc: '模型管理' },
      { name: 'Prometheus', desc: '监控告警' },
      { name: 'Grafana', desc: '可视化' }
    ]
  }
};

const getStatusIcon = (status: Task['status']) => {
  switch (status) {
    case 'done':
      return <CheckCircle2 className="w-4 h-4 text-accent-green" />;
    case 'in-progress':
      return <Zap className="w-4 h-4 text-accent-yellow" />;
    default:
      return <Circle className="w-4 h-4 text-gray-500" />;
  }
};

const getStatusLabel = (status: Task['status']) => {
  switch (status) {
    case 'done':
      return '已完成';
    case 'in-progress':
      return '进行中';
    default:
      return '待开始';
  }
};

const getStatusBg = (status: Task['status']) => {
  switch (status) {
    case 'done':
      return 'bg-accent-green/10 text-accent-green';
    case 'in-progress':
      return 'bg-accent-yellow/10 text-accent-yellow';
    default:
      return 'bg-white/5 text-gray-400';
  }
};

export default function DevPlan() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">技术开发计划</span>
          </h1>
          <p className="text-gray-400 text-lg">任务看板与技术栈全景</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
              <GanttChart className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">任务看板</h2>
              <p className="text-gray-400 text-sm">按优先级划分的开发任务</p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {priorityData.map((column, columnIndex) => {
              const IconComponent = column.icon;
              return (
                <Card key={column.title} delay={0.2 + columnIndex * 0.1} className="h-fit">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${column.colorLight} flex items-center justify-center`}>
                          <IconComponent className={`w-5 h-5 ${column.colorText}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{column.title}</h3>
                          <p className={`text-sm ${column.colorText}`}>{column.subtitle}</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                        {column.tasks.length} 项
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

                  <div className="space-y-3">
                    {column.tasks.map((task, taskIndex) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + columnIndex * 0.1 + taskIndex * 0.05 }}
                        className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-white text-sm mb-1">
                            {task.title}
                          </h4>
                          {getStatusIcon(task.status)}
                        </div>
                        <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                          {task.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 flex-wrap">
                            {task.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-gray-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-xs">
                          <div className="flex items-center gap-1 text-gray-500">
                            <Users className="w-3 h-3" />
                            <span>{task.assignee}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{task.dueDate}</span>
                          </div>
                          <span className={`px-2 py-0.5 text-[10px] rounded-full ${getStatusBg(task.status)}`}>
                            {getStatusLabel(task.status)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/20 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-accent-purple" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">技术栈</h2>
              <p className="text-gray-400 text-sm">全栈技术选型全景</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(techStackData).map(([key, stack], stackIndex) => {
              const IconComponent = stack.icon;
              return (
                <Card key={key} delay={0.5 + stackIndex * 0.1} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${stack.colorLight} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${stack.colorText}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{stack.title}</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {stack.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + stackIndex * 0.1 + itemIndex * 0.03 }}
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:scale-[1.02] border border-white/5"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${stack.color}`} />
                          <span className="text-sm font-medium text-white">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-4">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card delay={0.9} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Box className="w-6 h-6 text-primary-400" />
              <h3 className="text-xl font-bold text-white">开发进度总览</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <div className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/20">
                <div className="text-3xl font-bold text-primary-400">12</div>
                <div className="text-sm text-gray-400">总任务数</div>
              </div>
              <div className="p-4 rounded-lg bg-accent-green/10 border border-accent-green/20">
                <div className="text-3xl font-bold text-accent-green">1</div>
                <div className="text-sm text-gray-400">已完成</div>
              </div>
              <div className="p-4 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20">
                <div className="text-3xl font-bold text-accent-yellow">1</div>
                <div className="text-sm text-gray-400">进行中</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-500/10 border border-gray-500/20">
                <div className="text-3xl font-bold text-gray-400">10</div>
                <div className="text-sm text-gray-400">待开始</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '16.7%' }}
                  transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-purple rounded-full"
                />
              </div>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
                <span>整体进度</span>
                <span className="font-medium text-white">16.7%</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
