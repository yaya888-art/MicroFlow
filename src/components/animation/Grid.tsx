'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import { Card, cn } from '../ui/Base';
import { AnimationData } from '@/data/animations';
import { PreviewRenderer } from './Preview';

interface AnimationCardProps {
  animation: AnimationData;
  index: number;
}

export const AnimationCard = ({ animation, index }: AnimationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={`/animation/${animation.id}`}>
        <Card className="group relative h-full flex flex-col p-0 border-none bg-apple-secondary/30 hover:bg-white transition-colors">
          {/* Preview Area */}
          <div className="aspect-[4/3] flex items-center justify-center bg-white rounded-t-apple border-b border-[#D2D2D7]/30 group-hover:shadow-inner transition-all overflow-hidden">
            <div className="scale-75 group-hover:scale-90 transition-transform duration-500 pointer-events-none">
               <PreviewRenderer id={animation.id} />
            </div>
          </div>
          
          {/* Info Area */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-apple-text group-hover:text-apple-blue transition-colors">
                {animation.name.split(' - ')[0]}
              </h3>
              <span className="text-[10px] uppercase tracking-wider font-bold bg-apple-blue/10 text-apple-blue px-2 py-0.5 rounded-full">
                {animation.category}
              </span>
            </div>
            
            <p className="text-sm text-apple-gray line-clamp-2 mb-4">
              {animation.description}
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-xs font-bold text-apple-blue opacity-0 group-hover:opacity-100 transition-opacity">
              查看详情 <ArrowRight className="w-3 h-3" />
            </div>
          </div>
          
          {/* Glass Overlay on Hover */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Card>
      </Link>
    </motion.div>
  );
};

export const AnimationGrid = ({ animations }: { animations: AnimationData[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-12 py-12">
      {animations.map((anim, i) => (
        <AnimationCard key={anim.id} animation={anim} index={i} />
      ))}
    </div>
  );
};
