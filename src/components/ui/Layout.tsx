import Link from 'next/link';
import { Github, Search } from 'lucide-react';
import { cn } from './Base';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass h-16 flex items-center px-6 md:px-12 justify-between">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-apple-blue rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
          M
        </div>
        <span className="text-xl font-bold tracking-tight text-apple-text">MicroFlow</span>
      </Link>
      
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-apple-gray group-focus-within:text-apple-blue transition-colors" />
          <input 
            type="text" 
            placeholder="搜索动画..." 
            className="w-full h-10 bg-apple-secondary/50 rounded-full pl-10 pr-4 outline-none border border-transparent focus:border-apple-blue/30 focus:bg-white transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 hover:bg-apple-secondary rounded-full transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <div className="w-8 h-8 rounded-full bg-apple-secondary border border-[#D2D2D7]/30" />
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-white border-t border-[#D2D2D7]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-apple-blue rounded flex items-center justify-center text-white text-xs font-bold">
            M
          </div>
          <span className="font-semibold text-apple-text">MicroFlow</span>
        </div>
        
        <p className="text-apple-gray text-sm">
          © 2026 MicroFlow. Built for frontend enthusiasts.
        </p>
        
        <div className="flex gap-6 text-sm text-apple-gray">
          <a href="#" className="hover:text-apple-blue transition-colors">Documentation</a>
          <a href="#" className="hover:text-apple-blue transition-colors">GitHub</a>
          <a href="#" className="hover:text-apple-blue transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
