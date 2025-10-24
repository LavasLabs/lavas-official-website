import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入语言资源
import enCommon from '../locales/en/common.json';
import zhCNCommon from '../locales/zh-CN/common.json';
import zhTWCommon from '../locales/zh-TW/common.json';
import esCommon from '../locales/es/common.json';
import koCommon from '../locales/ko/common.json';

import enHome from '../locales/en/home.json';
import zhTWHome from '../locales/zh-TW/home.json';
import esHome from '../locales/es/home.json';
import koHome from '../locales/ko/home.json';

import enContact from '../locales/en/contact.json';
import zhTWContact from '../locales/zh-TW/contact.json';
import esContact from '../locales/es/contact.json';
import koContact from '../locales/ko/contact.json';

import enComponents from '../locales/en/components.json';
import zhTWComponents from '../locales/zh-TW/components.json';
import esComponents from '../locales/es/components.json';
import koComponents from '../locales/ko/components.json';

import enTravel from '../locales/en/travel.json';
import zhTWTravel from '../locales/zh-TW/travel.json';
import esTravel from '../locales/es/travel.json';
import koTravel from '../locales/ko/travel.json';

import enExpense from '../locales/en/expense.json';
import zhTWExpense from '../locales/zh-TW/expense.json';
import esExpense from '../locales/es/expense.json';
import koExpense from '../locales/ko/expense.json';

import enCredit from '../locales/en/credit.json';
import zhTWCredit from '../locales/zh-TW/credit.json';
import esCredit from '../locales/es/credit.json';
import koCredit from '../locales/ko/credit.json';

import enAdvertising from '../locales/en/advertising.json';
import zhTWAdvertising from '../locales/zh-TW/advertising.json';
import esAdvertising from '../locales/es/advertising.json';
import koAdvertising from '../locales/ko/advertising.json';

import enBlog from '../locales/en/blog.json';
import zhTWBlog from '../locales/zh-TW/blog.json';
import esBlog from '../locales/es/blog.json';
import koBlog from '../locales/ko/blog.json';

import enPartner from '../locales/en/partner.json';
import zhTWPartner from '../locales/zh-TW/partner.json';
import esPartner from '../locales/es/partner.json';
import koPartner from '../locales/ko/partner.json';

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
  },
  es: {
    common: esCommon,
    home: esHome,
    contact: esContact,
    components: esComponents,
    travel: esTravel,
    expense: esExpense,
    credit: esCredit,
    advertising: esAdvertising,
    blog: esBlog,
    partner: esPartner
  },
  ko: {
    common: koCommon,
    home: koHome,
    contact: koContact,
    components: koComponents,
    travel: koTravel,
    expense: koExpense,
    credit: koCredit,
    advertising: koAdvertising,
    blog: koBlog,
    partner: koPartner
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh-TW', // 默认语言，将通过 initLanguage 设置
    fallbackLng: 'zh-TW',
    
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