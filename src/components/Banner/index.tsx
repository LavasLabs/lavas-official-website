import React, { useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space, Popover, message, Drawer } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PricingModal from '../PricingModal';
import useGlobalStore from '../../store/useGlobalStore';
import './index.css';




const items: MenuProps['items'] = [
    // {
    //     key: '1',
    //     label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    //             items
    //         </a>
    //     ),
    // },
];

// 产品菜单配置
const productItems = [
    { icon: 'icon-a-CorporateCard', text: 'Corporate Card', route: '', translationKey: 'nav.corporateCard' },
    { icon: 'icon-Travel', text: 'Travel', route: 'travel', translationKey: 'nav.travel' },
    { icon: 'icon-money', text: 'Expense Management', route: 'expense', translationKey: 'nav.expense' },
    { icon: 'icon-Advertising', text: 'Advertising', route: 'advertising', translationKey: 'nav.advertising' },
    { icon: 'icon-a-CreditLine', text: 'Credit Line', route: 'credit', translationKey: 'products.creditLine' }
] as const;

// 资源菜单配置
const resourceItems = [
    { icon: 'icon-blog', text: 'Blog', route: 'blog', translationKey: 'resources.blog' },
    { icon: 'icon-sales', text: 'Contact Sales', route: 'contact', translationKey: 'resources.contactSales' },
    { icon: 'icon-Partner', text: 'Become a Partner', route: 'partner', translationKey: 'resources.becomeAPartner' }
] as const;


const Banner: React.FC = () => {
    const { isMobile, language, setLanguage } = useGlobalStore();
    const { t } = useTranslation('common');
    const [isTablet, setIsTablet] = useState(false);
    const location = window.location.pathname;
    const whiteUrlList = ['travel', 'advertising', 'blog', 'contact', 'partner','credit'];
    const isWhiteBgUrl = whiteUrlList.some(u => location.includes(u));
    const tUrlList = ['partner', 'services-term'];
    const isTUrl = tUrlList.some(u => location.includes(u));
    const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const goRouter = (url: string) => {
        window.location.href = `/${url}`;
    }

    const content = (
        <div className={`${isMobile ? 'w-[280px]' : 'w-[420px]'} flex flex-wrap gap-[15px] gap-y-[10px]`}>
            {productItems.map(item => (
                <Space key={item.text} className='cursor-pointer' onClick={() => goRouter(item.route)}>
                    <i className={`iconfont ${item.icon} text-[24px]`}></i>
                    <span>{t(item.translationKey)}</span>
                </Space>
            ))}
        </div>
    );

    const resourceContent = (
        <div className={`${isMobile ? 'w-[280px]' : 'w-[420px]'} flex flex-wrap gap-[20px] gap-y-[10px]`}>
            {resourceItems.map(item => (
                <Space key={item.text} className='cursor-pointer' onClick={() => goRouter(item.route)}>
                    <i className={`iconfont ${item.icon} text-[24px]`}></i>
                    <span>{t(item.translationKey)}</span>
                </Space>
            ))}
        </div>
    );

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
    };

    const getCurrentLanguageLabel = () => {
        switch (language) {
            case 'en':
                return 'EN';
            case 'zh-TW':
                return '繁';
            default:
                return 'EN';
        }
    };

    const languageItems: MenuProps['items'] = [
        {
            key: 'en',
            label: 'English',
            onClick: () => handleLanguageChange('en')
        },
        {
            key: 'zh-TW',
            label: '繁體中文',
            onClick: () => handleLanguageChange('zh-TW')
        },
    ];

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'language',
            label: (
                <Dropdown menu={{ items: languageItems }} trigger={['hover']}>
                    <Space align="center">
                        {getCurrentLanguageLabel()}
                        <DownOutlined />
                    </Space>
                </Dropdown>
            ),
        },
        {
            key: 'signup',
            label: t('auth.signup'),
            onClick: () => messageApi.info(t('messages.functionNotEnabled'))
        },
        {
            key: 'login',
            label: t('auth.login'),
            onClick: () => messageApi.info(t('messages.functionNotEnabled'))
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 1200);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mobileMenu = (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-[20px] py-[20px]">
                <img
                    src='/logos/lavas-logo-black.png'
                    alt="Lavas Logo"
                    className="h-[40px] object-contain"
                />
                <i className="iconfont icon-menu text-[24px] cursor-pointer" onClick={() => setDrawerVisible(false)} />
            </div>

            <ul className="list-none flex-1 flex flex-col items-center pt-[0px] text-[20px] !pl-[0px] box-border">
                <li className="cursor-pointer w-full text-center">
                    <Popover
                        content={content}
                        placement="bottom"
                        overlayStyle={isMobile ? { width: '280px' } : undefined}
                        overlayInnerStyle={isMobile ? { padding: '12px' } : undefined}
                    >
                        <div className="flex items-center justify-center gap-1 px-[20px] py-[16px]">
                            <span>{t('menu.products')}</span>
                            <DownOutlined className="text-gray-400  ml-[8px]" />
                        </div>
                    </Popover>
                </li>
                <li className="cursor-pointer w-full text-center" onClick={() => {
                    setIsPricingModalOpen(true);
                    setDrawerVisible(false);
                }}>
                    <div className="px-[20px] py-[16px]">{t('menu.pricing')}</div>
                </li>
                <li className="cursor-pointer w-full text-center">
                    <div className="flex items-center justify-center gap-1 px-[20px] py-[16px]">
                        <span>{t('menu.solutions')}</span>
                        <DownOutlined className="text-gray-400 ml-[8px]" />
                    </div>
                </li>
                <li className="cursor-pointer w-full text-center">
                    <Popover content={resourceContent} placement="bottom"
                        overlayStyle={isMobile ? { width: '280px' } : undefined}
                        overlayInnerStyle={isMobile ? { padding: '12px' } : undefined}>
                        <div className="flex items-center justify-center gap-1 px-[20px] py-[16px]">
                            <span>{t('menu.resource')}</span>
                            <DownOutlined className="text-gray-400 ml-[8px]" />
                        </div>
                    </Popover>
                </li>
                <li className="cursor-pointer w-full text-center" onClick={() => {
                    window.location.href = '/services-terms';
                    setDrawerVisible(false);
                }}>
                    <div className="px-[20px] py-[16px]">{t('menu.termsAndConditions')}</div>
                </li>
                <li>
                    <Dropdown menu={{ items: languageItems }}>
                        <Space align="center" className="px-[20px] py-[16px] cursor-pointer">
                            {getCurrentLanguageLabel()}
                            <DownOutlined />
                        </Space>
                    </Dropdown>
                </li>
                <li className="cursor-pointer w-full text-center" onClick={() => messageApi.info(t('messages.functionNotEnabled'))}>
                    <div className="px-[20px] py-[16px]">{t('navigation.login')}</div>
                </li>
                <li className="cursor-pointer w-full text-center" onClick={() => messageApi.info(t('messages.functionNotEnabled'))}>
                    <div className="px-[20px] py-[16px]">{t('navigation.signUp')}</div>
                </li>
            </ul>
        </div>
    );

    return (
        <>
            {contextHolder}
            <nav className={`w-full absolute top-[0px] left-[0px] right-[0px] ${isWhiteBgUrl
                ? 'text-[#0A0B11]'
                : 'text-[#FFFFFF]'
                }  ${(isTUrl && !location.includes('services-term')) ? 'bg-[#FFFFFF]/40 backdrop-blur-sm' : ''} 
                py-[20px] box-border 
                ${isMobile
                    ? 'px-[20px]'
                    : 'px-[clamp(40px,13%,250px)]'
                } 
                z-[100] text-[clamp(14px,1vw,20px)]`}>

                <div className="max-w-[1920px] mx-auto flex items-center w-full relative">
                    <div onClick={() => window.location.href = '/'}
                        className={`flex items-center cursor-pointer relative z-[102] ${isMobile ? 'min-w-[80px] max-w-[120px]' : 'min-w-[120px] max-w-[180px]'
                            }`}
                    >
                        <img
                            src={isWhiteBgUrl ? '/logos/lavas-logo-black.png' : '/logos/lavas-logo.png'}
                            alt="Lavas Logo"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {isMobile ? (
                        <div className="ml-auto">
                            <i className={`iconfont icon-menu text-[24px] cursor-pointer ${isWhiteBgUrl ? 'text-[#000]' : 'text-[#FFF]'}`} onClick={() => setDrawerVisible(true)}></i>
                            <Drawer
                                title={null}
                                placement="top"
                                onClose={() => setDrawerVisible(false)}
                                open={drawerVisible}
                                height="64vh"
                                className="mobile-menu-drawer"
                                closable={false}
                                maskClosable={true}
                                rootClassName="mobile-menu-drawer"
                                style={{ borderRadius: '0 0 30px 30px' }}
                            >
                                {mobileMenu}
                            </Drawer>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between w-full relative z-[102] pl-[50px]">
                            {/* PC内容 */}
                            <div className="flex items-center justify-between w-full relative z-[102]">
                                <ul className="flex items-center list-none gap-[clamp(20px,2vw,36px)] whitespace-nowrap relative text-[clamp(14px,1vw,20px)]">
                                    <li className='cursor-pointer'>
                                        <Popover content={content}>
                                            <Space className="relative z-[102]" align="center">
                                                {t('menu.products')}
                                                <DownOutlined />
                                            </Space>
                                        </Popover>
                                    </li>

                                    <li className='cursor-pointer' onClick={() => setIsPricingModalOpen(true)}>
                                        {t('menu.pricing')}
                                    </li>
                                    <li className='cursor-pointer'>
                                        <Dropdown menu={{ items }} >
                                            <Space align="center" onClick={() => messageApi.info(t('messages.functionNotEnabled'))}>
                                                {t('menu.solutions')}
                                                <DownOutlined />
                                            </Space>
                                        </Dropdown>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <Popover content={resourceContent}>
                                            <Space className="relative z-[102]" align="center">
                                                {t('menu.resource')}
                                                <DownOutlined />
                                            </Space>
                                        </Popover>
                                    </li>
                                    <li className='cursor-pointer' onClick={() => { window.location.href = '/services-terms' }}>
                                        {t('menu.termsAndConditions')}
                                    </li>
                                </ul>


                                <ul className="flex items-center list-none gap-[34px] text-[clamp(14px,1vw,20px)] ml-[20px]">
                                    {isTablet ? (
                                        <li>
                                            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                                                <Space align="center" className={`${isWhiteBgUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'} cursor-pointer`}>
                                                    {t('menu.more')}
                                                    <DownOutlined />
                                                </Space>
                                            </Dropdown>
                                        </li>
                                    ) : (
                                        <>
                                            <li>
                                                <Dropdown menu={{ items: languageItems }}>
                                                    <Space align="center" className="cursor-pointer">
                                                        {getCurrentLanguageLabel()}
                                                        <DownOutlined />
                                                    </Space>
                                                </Dropdown>
                                            </li>
                                            <li>
                                                <Button
                                                    className={`${isWhiteBgUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'} border border-[#FFFFFF] text-[clamp(14px,1vw,20px)]`}
                                                    type="text"
                                                    onClick={() => messageApi.info(t('messages.functionNotEnabled'))}
                                                >
                                                    {t('navigation.login')}
                                                </Button>
                                            </li>
                                            <li>
                                                <Button
                                                    className={`${isWhiteBgUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'} text-[clamp(14px,1vw,20px)]`}
                                                    type="text"
                                                    onClick={() => messageApi.info(t('messages.functionNotEnabled'))}
                                                >
                                                    {t('navigation.signUp')}
                                                </Button>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}



                </div>
            </nav>

            {(!isTUrl && !(location.includes('credit') && isMobile)) && (
                <div className={`h-[100px] w-full relative ${isWhiteBgUrl
                    ? 'bg-[#FFFFFF]'
                    : 'bg-[#0A0B11]'
                    }`}>
                </div>
            )}

            <PricingModal
                open={isPricingModalOpen}
                onClose={() => setIsPricingModalOpen(false)}
            />
        </>
    );
};

export default Banner;