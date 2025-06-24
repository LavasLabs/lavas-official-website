# 国际化功能实现

## 概述
本项目已成功实现国际化功能，支持英文(EN)和繁体中文(繁)的语言切换。

## 功能特性

### 支持的语言
- 英文 (en) - 默认语言
- 繁体中文 (zh-TW)

### 实现内容

#### 1. 配置文件
- `src/i18n/index.ts` - i18n配置文件
- `src/locales/en/common.json` - 英文语言包
- `src/locales/zh-TW/common.json` - 繁体中文语言包

#### 2. 全局状态管理
在 `src/store/useGlobalStore.ts` 中添加了语言状态管理：
- `language` - 当前语言状态
- `setLanguage(lang)` - 切换语言函数
- 语言偏好存储在localStorage中

#### 3. 组件国际化
更新了以下组件支持多语言：
- `src/components/Banner/index.tsx` - 导航栏，包括语言切换器
- `src/pages/Home/index.tsx` - 首页
- `src/pages/CorporateCard/index.tsx` - 企业卡页面

#### 4. 语言切换
在导航栏中提供语言切换功能：
- PC端：顶部导航栏右侧语言下拉菜单
- 移动端：侧边菜单中的语言选择器
- 当前语言显示：
  - 英文显示为 "EN"
  - 繁体中文显示为 "繁"

## 翻译内容

### 导航菜单
- Products / 產品
- Pricing / 定價
- Solutions / 解決方案
- Resource / 資源
- Terms & Conditions / 條款與條件

### 产品类别
- Corporate Card / 企業卡
- Travel / 商旅服務
- Expense Management / 費用管理
- Advertising / 廣告投放
- Credit Line / 信貸額度

### 资源菜单
- Blog / 博客
- Contact Sales / 聯繫銷售
- Become a Partner / 成為合作夥伴

### 用户操作
- Login / 登入
- Sign Up / 註冊
- Start for Free / 免費開始

## 使用方法

### 在组件中使用翻译
```tsx
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation('common');
  
  return <div>{t('common.startForFree')}</div>;
};
```

### 切换语言
```tsx
import useGlobalStore from '../store/useGlobalStore';

const { setLanguage } = useGlobalStore();

// 切换到英文
setLanguage('en');

// 切换到繁体中文
setLanguage('zh-TW');
```

## 扩展新语言

1. 在 `src/locales/` 目录下创建新的语言文件夹
2. 复制 `common.json` 文件并翻译内容
3. 在 `src/i18n/index.ts` 中添加新语言资源
4. 在 `src/components/Banner/index.tsx` 中添加新语言选项

## 注意事项

- 语言偏好会自动保存到浏览器的localStorage中
- 页面刷新后会保持用户选择的语言
- 默认语言为英文
- 所有翻译文本都集中在语言包文件中，便于维护和更新 