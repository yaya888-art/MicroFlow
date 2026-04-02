'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const PreviewRenderer = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState(0);

  switch (id) {
    case 'button-bounce':
      return (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="px-8 py-4 bg-apple-blue text-white rounded-full font-bold shadow-lg shadow-apple-blue/20"
        >
          点击体验
        </motion.button>
      );
    
    case 'spinner-rotate':
      return (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-[6px] border-apple-blue border-t-transparent rounded-full"
        />
      );

    case 'pulse-glow':
      return (
        <motion.div
          whileHover={{
            boxShadow: "0 0 30px rgba(0, 122, 255, 0.4)",
            scale: 1.05
          }}
          className="w-40 h-40 bg-white rounded-apple border border-gray-200 flex items-center justify-center cursor-pointer font-bold text-apple-gray"
        >
          悬停发光
        </motion.div>
      );

    case 'slide-in':
      return (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-8 bg-white rounded-apple shadow-xl border border-gray-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">✓</div>
          <div>
            <div className="font-bold text-apple-text">入场动画</div>
            <div className="text-sm text-apple-gray">平滑滑入效果</div>
          </div>
        </motion.div>
      );

    case 'shake-error':
      return (
        <motion.div
          animate={{ x: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
          className="p-6 bg-red-50 text-red-600 rounded-apple-sm border border-red-200 font-bold"
        >
          操作失败
        </motion.div>
      );

    case 'modal-pop':
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-apple shadow-2xl border border-gray-100 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">弹窗动画</h2>
          <p className="text-apple-gray mb-6">缩放弹出反馈</p>
          <button className="px-6 py-2 bg-apple-blue text-white rounded-full">确定</button>
        </motion.div>
      );

    case 'stagger-list':
      return (
        <motion.ul 
          initial="hidden" 
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="space-y-3 w-48"
        >
          {[1, 2, 3, 4].map(i => (
            <motion.li 
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 }
              }}
              className="p-4 bg-white shadow-sm rounded-apple-sm border border-gray-100 font-medium text-apple-text"
            >
              列表项 {i}
            </motion.li>
          ))}
        </motion.ul>
      );

    case 'empty-state-float':
      return (
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 bg-apple-secondary rounded-full mb-6 flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg rotate-12" />
          </div>
          <p className="text-apple-gray font-medium">空空如也...</p>
        </motion.div>
      );

    case 'heart-beat':
      return (
        <motion.button
          whileTap={{ scale: [1, 1.6, 1.3, 1] }}
          transition={{ duration: 0.3 }}
          className="text-7xl drop-shadow-lg"
        >
          ❤️
        </motion.button>
      );

    case 'tab-switch':
      return (
        <div className="flex bg-apple-secondary p-1.5 rounded-full relative w-64">
          {[0, 1].map(i => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-2.5 relative z-10 font-bold transition-colors duration-300 ${activeTab === i ? "text-white" : "text-apple-gray"}`}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="preview-tab-bg"
                  className="absolute inset-0 bg-apple-blue rounded-full -z-10 shadow-md shadow-apple-blue/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Tab {i + 1}
            </button>
          ))}
        </div>
      );

    default:
      return <div className="text-apple-gray font-bold uppercase tracking-widest opacity-20">Preview</div>;
  }
};
