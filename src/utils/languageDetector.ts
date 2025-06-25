/**
 * 检测用户系统语言并返回对应的应用语言
 * 规则：
 * - 简体中文或中文 -> 繁体中文 (zh-TW)
 * - 其他语言 -> 英文 (en)
 */
export const detectUserLanguage = (): string => {
  try {
    // 如果已经有存储的语言偏好，且有效，直接返回
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && isValidLanguage(storedLanguage)) {
      return storedLanguage;
    }

    // 获取浏览器语言设置
    const browserLanguage = navigator.language || navigator.languages?.[0];
    
    // 如果无法获取浏览器语言，默认返回英文
    if (!browserLanguage) {
      return 'en';
    }

    // 检测是否为中文
    const isChineseLanguage = (lang: string): boolean => {
      try {
        const lowerLang = lang.toLowerCase();
        return (
          lowerLang.startsWith('zh') ||
          lowerLang.includes('chinese') ||
          lowerLang === 'cn'
        );
      } catch {
        return false;
      }
    };

    // 根据检测结果返回对应语言
    if (isChineseLanguage(browserLanguage)) {
      return 'zh-TW'; // 中文用户默认使用繁体中文
    } else {
      return 'en'; // 其他语言用户默认使用英文
    }
  } catch (error) {
    // 如果出错，默认返回英文
    return 'en';
  }
};

export const getLanguageDisplayName = (langCode: string): string => {
  switch (langCode) {
    case 'en':
      return 'English';
    case 'zh-TW':
      return '繁體中文';
    case 'zh-CN':
      return '简体中文';
    default:
      return 'English';
  }
};

/**
 * 检查语言代码是否有效
 */
export const isValidLanguage = (langCode: string): boolean => {
  const validLanguages = ['en', 'zh-TW', 'zh-CN'];
  return validLanguages.includes(langCode);
}; 