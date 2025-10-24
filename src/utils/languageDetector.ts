/**
 * 检测用户系统语言并返回对应的应用语言
 * 规则：
 * - 默认使用繁体中文 (zh-TW)
 * - 除非IP是香港且系统语言是繁体中文，才使用英文 (en)
 */
export const detectUserLanguage = async (): Promise<string> => {
  try {
    // 如果已经有存储的语言偏好，且有效，直接返回
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && isValidLanguage(storedLanguage)) {
      return storedLanguage;
    }

    // 获取浏览器语言设置
    const browserLanguage = navigator.language || navigator.languages?.[0];
    
    // 检测语言类型
    const detectLanguageType = (lang: string): string => {
      try {
        const lowerLang = lang.toLowerCase();
        
        // 繁体中文检测
        if (
          lowerLang === 'zh-tw' ||
          lowerLang === 'zh-hk' ||
          lowerLang === 'zh-mo' ||
          lowerLang.includes('traditional') ||
          lowerLang.includes('taiwan') ||
          lowerLang.includes('hong kong')
        ) {
          return 'zh-TW';
        }
        
        // 简体中文检测
        if (
          lowerLang === 'zh-cn' ||
          lowerLang === 'zh' ||
          lowerLang.includes('simplified') ||
          lowerLang.includes('china')
        ) {
          return 'zh-CN';
        }
        
        // 西班牙语检测
        if (
          lowerLang.startsWith('es') ||
          lowerLang.includes('spanish') ||
          lowerLang.includes('español')
        ) {
          return 'es';
        }
        
        // 韩语检测
        if (
          lowerLang.startsWith('ko') ||
          lowerLang.includes('korean') ||
          lowerLang.includes('한국어')
        ) {
          return 'ko';
        }
        
        // 英语检测
        if (
          lowerLang.startsWith('en') ||
          lowerLang.includes('english')
        ) {
          return 'en';
        }
        
        return 'unknown';
      } catch {
        return 'unknown';
      }
    };

    // 检测IP是否为香港
    const isHongKongIP = async (): Promise<boolean> => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
          // 如果API失败，尝试备用API
          const fallbackResponse = await fetch('https://api.country.is/');
          if (fallbackResponse.ok) {
            const data = await fallbackResponse.json();
            return data.country === 'HK';
          }
          return false;
        }
        
        const data = await response.json();
        return data.country_code === 'HK';
      } catch {
        return false;
      }
    };

    // 如果无法获取浏览器语言，默认返回繁体中文
    if (!browserLanguage) {
      return 'zh-TW';
    }

    // 检测系统语言类型
    const detectedLanguageType = detectLanguageType(browserLanguage);
    
    // 检查是否为香港IP
    const isHK = await isHongKongIP();

    // 如果是香港IP且系统语言是繁体中文，使用英文
    if (isHK && detectedLanguageType === 'zh-TW') {
      return 'en';
    }

    // 根据检测到的语言类型返回对应语言
    if (detectedLanguageType !== 'unknown') {
      return detectedLanguageType;
    }

    // 其他情况默认使用繁体中文
    return 'zh-TW';
  } catch {
    // 如果出错，默认返回繁体中文
    return 'zh-TW';
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
    case 'es':
      return 'Español';
    case 'ko':
      return '한국어';
    default:
      return 'English';
  }
};

/**
 * 检查语言代码是否有效
 */
export const isValidLanguage = (langCode: string): boolean => {
  const validLanguages = ['en', 'zh-TW', 'zh-CN', 'es', 'ko'];
  return validLanguages.includes(langCode);
}; 