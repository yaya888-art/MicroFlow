'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/ui/Layout';
import { AnimationGrid } from '@/components/animation/Grid';
import { animations } from '@/data/animations';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Base';

const categories = [
  { id: 'all', name: '全部动画' },
  { id: 'button', name: '按钮反馈' },
  { id: 'loading', name: '加载指示' },
  { id: 'hover', name: '悬停交互' },
  { id: 'modal', name: '弹窗效果' },
  { id: 'list', name: '列表入场' },
  { id: 'empty', name: '空状态' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAnimations = selectedCategory === 'all' 
    ? animations 
    : animations.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-apple-blue/10 rounded-full text-apple-blue font-bold text-sm mb-6 animate-bounce-subtle">
              <Sparkles className="w-4 h-4" />
              <span>赋能 Vibe Coding</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-apple-text mb-8 leading-[1.1]">
              让每一处交互<br />
              <span className="text-apple-blue">都有灵气</span>
            </h1>
            
            <p className="text-xl text-apple-gray max-w-2xl mx-auto mb-10 leading-relaxed">
              为开发者精心打造的微交互动画库。
              一键复制 CSS / JS / React 代码，让你的项目瞬间提升质感。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="shadow-lg shadow-apple-blue/20 flex items-center gap-2">
                立即探索 <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="ghost" className="hover:bg-apple-secondary">
                查看文档
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Category Navigation */}
        <section className="sticky top-16 z-40 glass border-y border-[#D2D2D7]/30 py-4 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id 
                    ? 'bg-apple-text text-white' 
                    : 'text-apple-gray hover:bg-apple-secondary hover:text-apple-text'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Animations Grid */}
        <section className="bg-apple-secondary/20">
          <div className="max-w-7xl mx-auto">
             {filteredAnimations.length > 0 ? (
               <AnimationGrid animations={filteredAnimations} />
             ) : (
               <div className="py-24 text-center">
                  <p className="text-apple-gray">暂无此类动画，敬请期待...</p>
               </div>
             )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
