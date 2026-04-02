export interface AnimationData {
  id: string;
  name: string;
  category: 'button' | 'loading' | 'hover' | 'modal' | 'list' | 'empty';
  description: string;
  tags: string[];
  code: {
    react: string;
    css: string;
    js: string;
  };
}

export const animations: AnimationData[] = [
  {
    id: 'button-bounce',
    name: '按钮弹跳 - Button Bounce',
    category: 'button',
    description: '一个带有弹性反馈的按钮点击效果。',
    tags: ['click', 'feedback', 'elastic'],
    code: {
      react: `import { motion } from "framer-motion";\n\nconst BounceButton = () => (\n  <motion.button\n    whileHover={{ scale: 1.05 }}\n    whileTap={{ scale: 0.95 }}\n    transition={{ type: "spring", stiffness: 400, damping: 17 }}\n    className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium"\n  >\n    Click Me\n  </motion.button>\n);`,
      css: `.bounce-button {\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.bounce-button:hover {\n  transform: scale(1.05);\n}\n.bounce-button:active {\n  transform: scale(0.95);\n}`,
      js: `const button = document.querySelector('.bounce-button');\nbutton.addEventListener('mousedown', () => {\n  button.style.transform = 'scale(0.95)';\n});\nbutton.addEventListener('mouseup', () => {\n  button.style.transform = 'scale(1.05)';\n});`
    }
  },
  {
    id: 'spinner-rotate',
    name: '加载旋转 - Spinner',
    category: 'loading',
    description: '平滑且极简的加载旋转动画。',
    tags: ['loading', 'spinner', 'smooth'],
    code: {
      react: `import { motion } from "framer-motion";\n\nconst Spinner = () => (\n  <motion.div\n    animate={{ rotate: 360 }}\n    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}\n    className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"\n  />\n);`,
      css: `.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #3b82f6;\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: rotate 1s linear infinite;\n}\n@keyframes rotate {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}`,
      js: `// Pure CSS handles this better, no JS needed for basic rotation.`
    }
  },
  {
    id: 'pulse-glow',
    name: '脉冲发光 - Pulse Glow',
    category: 'hover',
    description: '在悬停时产生呼吸感的光晕效果。',
    tags: ['hover', 'glow', 'pulse'],
    code: {
      react: `import { motion } from "framer-motion";\n\nconst PulseGlow = () => (\n  <motion.div\n    whileHover={{\n      boxShadow: "0 0 20px rgba(0, 122, 255, 0.6)",\n      scale: 1.02\n    }}\n    className="w-32 h-32 bg-white rounded-apple border border-gray-200 flex items-center justify-center cursor-pointer"\n  >\n    Hover Me\n  </motion.div>\n);`,
      css: `.pulse-glow {\n  transition: all 0.3s ease;\n}\n.pulse-glow:hover {\n  box-shadow: 0 0 20px rgba(0, 122, 255, 0.6);\n  transform: scale(1.02);\n}`,
      js: `// Managed by CSS transition`
    }
  },
  {
    id: 'slide-in',
    name: '滑入入场 - Slide In',
    category: 'list',
    description: '元素从底部滑入并带有淡入效果。',
    tags: ['entrance', 'slide', 'fade'],
    code: {
      react: `import { motion } from "framer-motion";\n\nconst SlideIn = () => (\n  <motion.div\n    initial={{ opacity: 0, y: 20 }}\n    animate={{ opacity: 1, y: 0 }}\n    transition={{ duration: 0.5 }}\n    className="p-4 bg-gray-50 rounded-lg shadow"\n  >\n    Hello MicroFlow\n  </motion.div>\n);`,
      css: `.slide-in {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: slideIn 0.5s forwards;\n}\n@keyframes slideIn {\n  to { opacity: 1; transform: translateY(0); }\n}`,
      js: `// CSS Animation is recommended`
    }
  },
  {
    id: 'shake-error',
    name: '震动提醒 - Shake',
    category: 'button',
    description: '错误输入或非法操作时的震动反馈。',
    tags: ['error', 'feedback', 'shake'],
    code: {
      react: `import { motion } from "framer-motion";\n\nconst Shake = () => (\n  <motion.div\n    animate={{ x: [0, -10, 10, -10, 10, 0] }}\n    transition={{ duration: 0.4 }}\n    className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200"\n  >\n    Invalid Action\n  </motion.div>\n);`,
      css: `.shake {\n  animation: shake 0.4s;\n}\n@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-10px); }\n  50% { transform: translateX(10px); }\n  75% { transform: translateX(-10px); }\n}`,
      js: `const element = document.querySelector('.shake');\nfunction triggerShake() {\n  element.classList.add('animate-shake');\n  setTimeout(() => element.classList.remove('animate-shake'), 400);\n}`
    }
  },
  {
    id: 'modal-pop',
    name: '缩放弹窗 - Modal Pop',
    category: 'modal',
    description: '带有缩放效果的模态框弹出动画。',
    tags: ['modal', 'popup', 'scale'],
    code: {
      react: `import { motion, AnimatePresence } from "framer-motion";\n\nconst Modal = ({ isOpen }) => (\n  <AnimatePresence>\n    {isOpen && (\n      <motion.div\n        initial={{ opacity: 0, scale: 0.8 }}\n        animate={{ opacity: 1, scale: 1 }}\n        exit={{ opacity: 0, scale: 0.8 }}\n        className="fixed inset-0 flex items-center justify-center bg-black/50"\n      >\n        <div className="bg-white p-8 rounded-apple shadow-2xl">\n          <h2>Modal Content</h2>\n        </div>\n      </motion.div>\n    )}\n  </AnimatePresence>\n);`,
      css: `.modal-overlay {\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content {\n  transform: scale(0.8);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-overlay.open .modal-content {\n  transform: scale(1);\n}`,
      js: `const modal = document.querySelector('.modal-overlay');\nfunction openModal() {\n  modal.classList.add('open');\n}`
    }
  },
  {
    id: 'stagger-list',
    name: '列表项依次入场 - Stagger List',
    category: 'list',
    description: '列表项以错开的时间间隔依次淡入。',
    tags: ['list', 'stagger', 'delay'],
    code: {
      react: `import { motion } from "framer-motion";\n\nconst container = {\n  hidden: { opacity: 0 },\n  show: {\n    opacity: 1,\n    transition: {\n      staggerChildren: 0.1\n    }\n  }\n};\n\nconst item = {\n  hidden: { opacity: 0, x: -20 },\n  show: { opacity: 1, x: 0 }\n};\n\nconst List = () => (\n  <motion.ul variants={container} initial="hidden" animate="show">\n    {[1, 2, 3].map(i => (\n      <motion.li key={i} variants={item} className="p-2 mb-2 bg-white shadow-sm rounded">Item {i}</motion.li>\n    ))}\n  </motion.ul>\n);`,
      css: `.list-item {\n  opacity: 0;\n  transform: translateX(-20px);\n}\n.list-item:nth-child(1) { animation: slideIn 0.3s 0.1s forwards; }\n.list-item:nth-child(2) { animation: slideIn 0.3s 0.2s forwards; }\n.list-item:nth-child(3) { animation: slideIn 0.3s 0.3s forwards; }`,
      js: `// Managed by Framer Motion or nth-child CSS`
    }
  },
  {
    id: 'empty-state-float',
    name: '空状态插画动画 - Empty State',
    category: 'empty',
    description: '轻微的上下漂浮动画，适用于空状态展示。',
    tags: ['empty', 'float', 'subtle'],
    code: {
      react: `import { motion } from "framer-motion";\n\nconst EmptyState = () => (\n  <motion.div\n    animate={{ y: [0, -10, 0] }}\n    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}\n    className="flex flex-col items-center"\n  >\n    <div className="w-24 h-24 bg-gray-200 rounded-full mb-4" />\n    <p className="text-gray-400">Nothing here yet</p>\n  </motion.div>\n);`,
      css: `.float {\n  animation: float 2s ease-in-out infinite;\n}\n@keyframes float {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); }\n}`,
      js: `// Pure CSS`
    }
  },
  {
    id: 'heart-beat',
    name: '点赞心跳 - Heart Beat',
    category: 'button',
    description: '点击时产生心跳般的震动反馈。',
    tags: ['click', 'heart', 'feedback'],
    code: {
      react: `import { motion } from "framer-motion";\n\nconst HeartBeat = () => (\n  <motion.button\n    whileTap={{ scale: [1, 1.4, 1.2, 1] }}\n    transition={{ duration: 0.3 }}\n    className="text-3xl text-red-500"\n  >\n    ❤️\n  </motion.button>\n);`,
      css: `.heart-beat:active {\n  animation: heartbeat 0.3s ease-out;\n}\n@keyframes heartbeat {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.4); }\n  75% { transform: scale(1.2); }\n  100% { transform: scale(1); }\n}`,
      js: `// Managed by CSS or Framer Motion`
    }
  },
  {
    id: 'tab-switch',
    name: '标签切换 - Tab Switch',
    category: 'hover',
    description: '背景滑动的标签切换效果。',
    tags: ['tab', 'switch', 'layoutId'],
    code: {
      react: `import { motion } from "framer-motion";\nimport { useState } from "react";\n\nconst Tabs = () => {\n  const [active, setActive] = useState(0);\n  return (\n    <div className="flex bg-gray-100 p-1 rounded-full relative">\n      {[0, 1].map(i => (\n        <button\n          key={i}\n          onClick={() => setActive(i)}\n          className="px-6 py-2 relative z-10 font-medium transition-colors"\n          style={{ color: active === i ? "white" : "#666" }}\n        >\n          {active === i && (\n            <motion.div\n              layoutId="tab-bg"\n              className="absolute inset-0 bg-blue-500 rounded-full -z-10"\n            />\n          )}\n          Tab {i + 1}\n        </button>\n      ))}\n    </div>\n  );\n};`,
      css: `.tabs {\n  position: relative;\n  display: flex;\n}\n.tab-bg {\n  position: absolute;\n  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: #007AFF;\n  border-radius: 999px;\n}`,
      js: `// JS required for layout calculation`
    }
  }
];
