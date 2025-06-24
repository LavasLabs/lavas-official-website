import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入语言资源
import enCommon from '../locales/en/common.json';
import zhCNCommon from '../locales/zh-CN/common.json';
import zhTWCommon from '../locales/zh-TW/common.json';

import enHome from '../locales/en/home.json';
import zhTWHome from '../locales/zh-TW/home.json';

import enContact from '../locales/en/contact.json';
import zhTWContact from '../locales/zh-TW/contact.json';

import enComponents from '../locales/en/components.json';
import zhTWComponents from '../locales/zh-TW/components.json';

import enTravel from '../locales/en/travel.json';
import zhTWTravel from '../locales/zh-TW/travel.json';

import enExpense from '../locales/en/expense.json';
import zhTWExpense from '../locales/zh-TW/expense.json';

import enCredit from '../locales/en/credit.json';
import zhTWCredit from '../locales/zh-TW/credit.json';

import enAdvertising from '../locales/en/advertising.json';
import zhTWAdvertising from '../locales/zh-TW/advertising.json';

import enBlog from '../locales/en/blog.json';
import zhTWBlog from '../locales/zh-TW/blog.json';

import enPartner from '../locales/en/partner.json';
import zhTWPartner from '../locales/zh-TW/partner.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    contact: enContact,
    components: enComponents,
    travel: enTravel,
    expense: enExpense,
    credit: enCredit,
    advertising: enAdvertising,
    blog: enBlog,
    partner: enPartner
  },
  'zh-CN': {
    common: zhCNCommon
  },
  'zh-TW': {
    common: zhTWCommon,
    home: zhTWHome,
    contact: zhTWContact,
    components: zhTWComponents,
    travel: zhTWTravel,
    expense: zhTWExpense,
    credit: zhTWCredit,
    advertising: zhTWAdvertising,
    blog: zhTWBlog,
    partner: zhTWPartner
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // 默认语言
    fallbackLng: 'en',
    
    ns: ['common', 'home', 'contact', 'components', 'travel', 'expense', 'credit', 'advertising', 'blog', 'partner'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  });

export default i18n; 