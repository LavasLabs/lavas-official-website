import { create } from 'zustand';
import i18n from '../i18n';
import { detectUserLanguage } from '../utils/languageDetector';

interface GlobalState {
  isMobile: boolean;
  isTablet: boolean;
  language: string;
  isUS: boolean | null;
  setIsMobile: (value: boolean) => void;
  setIsTablet: (value: boolean) => void;
  setLanguage: (lang: string) => void;
  setIsUS: (value: boolean | null) => void;
  initScreenSize: () => void;
  initLanguage: () => void;
}

const useGlobalStore = create<GlobalState>((set, get) => ({
  isMobile: false,
  isTablet: false,
  language: 'en', // 默认值，将在初始化时设置
  isUS: null,
  setIsMobile: (value) => set({ isMobile: value }),
  setIsTablet: (value) => set({ isTablet: value }),
  setIsUS: (value) => set({ isUS: value }),
  setLanguage: (lang) => {
    // 如果是美国用户，不允许切换到繁体中文
    const { isUS } = get();
    if (isUS === true && lang === 'zh-TW') {
      return;
    }
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    set({ language: lang });
  },
  initLanguage: () => {
    try {
      const detectedLanguage = detectUserLanguage();
      // 如果检测到是美国用户，强制使用英文
      const { isUS } = get();
      const finalLanguage = isUS === true ? 'en' : detectedLanguage;
      i18n.changeLanguage(finalLanguage);
      set({ language: finalLanguage });
    } catch (error) {
      i18n.changeLanguage('en');
      set({ language: 'en' });
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