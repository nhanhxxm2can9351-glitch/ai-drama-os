import { motion } from 'framer-motion';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cover() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-transparent to-accent-purple/10" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-5 h-5 text-primary-400" />
          <span className="text-sm text-gray-300">融资级技术方案</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gradient">AI Drama OS</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
        >
          AI短剧生产操作系统
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          从创意到发布的全链路自动化平台
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">V1.0</div>
            <div className="text-sm text-gray-500">技术方案</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-purple">9</div>
            <div className="text-sm text-gray-500">核心阶段</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-orange">6</div>
            <div className="text-sm text-gray-500">Agent团队</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-green">100x</div>
            <div className="text-sm text-gray-500">效率提升</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/overview"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            开始探索
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 text-sm text-gray-500"
        >
          <p>2026年6月 · 支持百万级剧集生产</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
