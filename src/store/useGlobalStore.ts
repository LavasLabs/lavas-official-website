import { create } from 'zustand';
import i18n from '../i18n';
import { detectUserLanguage } from '../utils/languageDetector';

interface GlobalState {
  isMobile: boolean;
  isTablet: boolean;
  language: string;
  setIsMobile: (value: boolean) => void;
  setIsTablet: (value: boolean) => void;
  setLanguage: (lang: string) => void;
  initScreenSize: () => void;
  initLanguage: () => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  isMobile: false,
  isTablet: false,
  language: 'zh-TW', // 默认值，将在初始化时设置
  setIsMobile: (value) => set({ isMobile: value }),
  setIsTablet: (value) => set({ isTablet: value }),
  setLanguage: (lang) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    set({ language: lang });
  },
  initLanguage: async () => {
    try {
      const detectedLanguage = await detectUserLanguage();
      i18n.changeLanguage(detectedLanguage);
      set({ language: detectedLanguage });
    } catch (error) {
      i18n.changeLanguage('zh-TW');
      set({ language: 'zh-TW' });
    }
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