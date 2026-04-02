'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/ui/Layout';
import { animations } from '@/data/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Copy, Check, Play, Settings2 } from 'lucide-react';
import { Button, Card, cn } from '@/components/ui/Base';
import { PreviewRenderer } from '@/components/animation/Preview';

export default function AnimationDetail() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'react' | 'css' | 'js'>('react');
  const [copied, setCopied] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);

  const animation = animations.find(a => a.id === params.id);

  useEffect(() => {
    if (!animation && params.id) {
      router.push('/');
    }
  }, [animation, params.id, router]);

  if (!animation) return null;

  const handleCopy = () => {
    const code = animation.code[activeTab];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-12">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-apple-gray hover:text-apple-text transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">返回主页</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Preview */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-apple-text mb-2">{animation.name}</h1>
                <p className="text-apple-gray">{animation.description}</p>
              </div>
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => setPreviewKey(k => k + 1)}
                className="flex items-center gap-2"
              >
                <Play className="w-4 h-4" /> 重播
              </Button>
            </div>

            <Card className="aspect-square flex items-center justify-center bg-apple-secondary/30 relative overflow-hidden group">
               <div key={previewKey} className="scale-[2]">
                  <PreviewRenderer id={animation.id} />
               </div>
               
               {/* Decorative elements */}
               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs text-apple-gray/60 font-medium">
                  <span>Interactive Area</span>
                  <div className="flex gap-2">
                    {animation.tags.map(tag => (
                      <span key={tag} className="bg-white/50 px-2 py-1 rounded-full border border-black/5">#{tag}</span>
                    ))}
                  </div>
               </div>
            </Card>

            <div className="p-6 bg-apple-secondary/30 rounded-apple border border-[#D2D2D7]/30">
              <div className="flex items-center gap-2 mb-4 text-apple-text font-bold">
                <Settings2 className="w-5 h-5" />
                <span>参数调整 (Beta)</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-apple-gray">动画时长 (ms)</span>
                    <span className="font-medium">500</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-apple-blue" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-apple-gray">弹性系数 (Stiffness)</span>
                    <span className="font-medium">400</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-apple-blue" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Code */}
          <section className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
              {(['react', 'css', 'js'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold transition-all uppercase tracking-wider",
                    activeTab === tab 
                      ? "bg-apple-text text-white shadow-lg shadow-black/10" 
                      : "text-apple-gray hover:bg-apple-secondary hover:text-apple-text"
                  )}
                >
                  {tab}
                </button>
              ))}
              
              <Button 
                onClick={handleCopy}
                className="ml-auto flex items-center gap-2 h-10 px-4"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> 已复制
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> 复制代码
                  </>
                )}
              </Button>
            </div>

            <div className="flex-1 bg-[#1E1E1E] rounded-apple p-6 overflow-auto font-mono text-sm leading-relaxed relative group">
              <pre className="text-gray-300">
                <code>{animation.code[activeTab]}</code>
              </pre>
              
              {/* Fake syntax highlighting for the demo */}
              <div className="absolute top-4 right-4 text-[10px] text-gray-600 uppercase font-bold select-none">
                {activeTab === 'react' ? 'Typescript JSX' : activeTab.toUpperCase()}
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-apple-sm flex gap-3 items-start">
               <div className="w-5 h-5 bg-apple-blue text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">i</div>
               <p className="text-xs text-blue-800 leading-relaxed">
                  提示：React 代码依赖 <strong>framer-motion</strong> 库。如果你还没有安装，请运行 <code>npm install framer-motion</code>。
               </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
