import { create } from 'zustand';

interface GlobalStore {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
  initMobileListener: () => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
  isMobile: window.innerWidth <= 768,
  setIsMobile: (value) => set({ isMobile: value }),
  initMobileListener: () => {
    const handleResize = () => {
      set({ isMobile: window.innerWidth <= 768 });
    };

    // 初始化时执行一次
    handleResize();
    
    // 添加监听
    window.addEventListener('resize', handleResize);
    
    // 返回清理函数
    return () => window.removeEventListener('resize', handleResize);
  }
}));

export default useGlobalStore;