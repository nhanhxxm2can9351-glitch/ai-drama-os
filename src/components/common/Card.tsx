import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-xl p-6 ${hover ? 'hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 cursor-default' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
