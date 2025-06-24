import { create } from 'zustand';
import i18n from '../i18n';

interface GlobalState {
  isMobile: boolean;
  isTablet: boolean;
  language: string;
  setIsMobile: (value: boolean) => void;
  setIsTablet: (value: boolean) => void;
  setLanguage: (lang: string) => void;
  initScreenSize: () => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  isMobile: false,
  isTablet: false,
  language: localStorage.getItem('language') || 'en',
  setIsMobile: (value) => set({ isMobile: value }),
  setIsTablet: (value) => set({ isTablet: value }),
  setLanguage: (lang) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    set({ language: lang });
  },
  initScreenSize: () => {
    const handleResize = () => {
      const width = window.innerWidth;
      set({
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024
      });
    };

    // 初始化
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }
}));

export default useGlobalStore;