import React, { useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space, Popover, message, Drawer } from 'antd';
import { useState } from 'react';
import PricingModal from '../PricingModal';
import useGlobalStore from '../../store/useGlobalStore';




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

const content = (() => {
    const goRouter = (url: string) => {
        window.location.href = `/${url}`;
    }

    return (
        <div className='w-[420px] flex flex-wrap gap-[15px] gap-y-[10px] '>
            <Space className='cursor-pointer' onClick={() => goRouter('')}>
                <i className='iconfont icon-a-CorporateCard text-[24px]'></i>
                <span>Corporate Card</span>
            </Space>
            <Space className='cursor-pointer' onClick={() => goRouter('travel')}>
                <i className='iconfont icon-Travel text-[24px]'></i>
                <span>Travel</span>
            </Space>
            <Space className='cursor-pointer' onClick={() => goRouter('expense')}>
                <i className='iconfont icon-money text-[24px]'></i>
                <span>Expense Management</span>
            </Space>
            <Space className='cursor-pointer' onClick={() => goRouter('advertising')}>
                <i className='iconfont icon-Advertising text-[24px]'></i>
                <span>Advertising</span>
            </Space>
        </div>
    )
}
);

const resourceContent = (() => {
    const goRouter = (url: string) => {
        window.location.href = `/${url}`;
    }

    return (
        <div className='w-[420px] flex flex-wrap gap-[20px] gap-y-[10px] '>
            <Space className='cursor-pointer' onClick={() => goRouter('blog')}>
                <i className='iconfont icon-blog text-[24px]'></i>
                <span>Blog</span>
            </Space>
            <Space className='cursor-pointer' onClick={() => goRouter('contact')}>
                <i className='iconfont icon-sales text-[24px]'></i>
                <span>Contact Sales</span>
            </Space>
            <Space className='cursor-pointer' onClick={() => goRouter('partner')}>
                <i className='iconfont icon-Partner text-[24px]'></i>
                <span>Become a Partner</span>
            </Space>
        </div>
    )
})


const Banner: React.FC = () => {
    const { isMobile } = useGlobalStore();
    const location = window.location.pathname;
    const whiteUrlList = ['travel', 'advertising', 'blog', 'contact', 'partner'];
    const isWhiteBgUrl = whiteUrlList.some(u => location.includes(u));
    const tUrlList = ['partner', 'services-term'];
    const isTUrl = tUrlList.some(u => location.includes(u));
    const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

    useEffect(() => {

    }, []);

    const goRouter = (url: string) => {
        window.location.href = url;
    };

    const mobileMenu = (
        <ul className="space-y-[8px] list-none">
            <li className="py-[12px] hover:bg-gray-50 transition-colors cursor-pointer">
                <Popover
                    content={content}
                    placement="bottomLeft"
                    open={isMenuOpen}
                    onOpenChange={(visible) => setIsMenuOpen(visible)}
                >
                    <Space className="px-[16px] w-full flex items-center">
                        <div className="flex items-center gap-[8px]">
                            <i className="iconfont icon-apps text-lg"></i>
                            <span>Products</span>
                        </div>
                        <DownOutlined className="text-gray-400" />
                    </Space>
                </Popover>
            </li>
            <li className="py-[12px] hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => {
                    setIsPricingModalOpen(true);
                    setDrawerVisible(false);
                }}
            >
                <div className="px-[16px] flex items-center gap-[8px]">
                    <i className="iconfont icon-price text-lg"></i>
                    <span>Pricing</span>
                </div>
            </li>
            <li className="py-[12px] hover:bg-gray-50 transition-colors cursor-pointer">
                <Space className="px-[16px] w-full flex items-center">
                    <div className="flex items-center gap-[8px]">
                        <i className="iconfont icon-solution text-lg"></i>
                        <span>Solutions</span>
                    </div>
                    <DownOutlined className="text-gray-400" />
                </Space>
            </li>
            <li className="py-[12px] hover:bg-gray-50 transition-colors cursor-pointer">
                <Popover
                    content={resourceContent}
                    placement="bottomLeft"
                >
                    <Space className="px-[16px] w-full flex items-center">
                        <div className="flex items-center gap-[8px]">
                            <i className="iconfont icon-resource text-lg"></i>
                            <span>Resource</span>
                        </div>
                        <DownOutlined className="text-gray-400" />
                    </Space>
                </Popover>
            </li>
            <li className="py-[12px] hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => {
                    window.location.href = '/services-terms';
                    setDrawerVisible(false);
                }}
            >
                <div className="px-[16px] flex items-center gap-[8px]">
                    <i className="iconfont icon-terms text-lg"></i>
                    <span>Terms & Conditions</span>
                </div>
            </li>
            {/* <div className="border-t my-[8px]"></div> */}
            <li className="py-[12px] cursor-pointer">
                <Button
                    className="w-full flex items-center justify-center gap-[8px] bg-primary hover:bg-primary/90 text-white h-[40px]"
                    type="primary"
                    onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                >
                    <i className="iconfont icon-user text-lg"></i>
                    Sign Up
                </Button>
            </li>
            <li className="py-[12px] cursor-pointer">
                <Button
                    className="w-full flex items-center justify-center gap-[8px] border-primary text-primary hover:bg-primary/5 h-[40px]"
                    type="default"
                    onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                >
                    <i className="iconfont icon-login text-lg"></i>
                    Login
                </Button>
            </li>
        </ul>
    );

    return (
        <>
            {contextHolder}
            <nav className={`w-full absolute top-0 left-0 right-0 ${isWhiteBgUrl
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
                    <div onClick={() => goRouter('/')}
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
                            <i className='iconfont icon-menu text-[#FFF] text-[24px] cursor-pointer' onClick={() => setDrawerVisible(true)}></i>
                            <Drawer
                                title="Menu"
                                placement="right"
                                onClose={() => setDrawerVisible(false)}
                                open={drawerVisible}
                                width={280}
                                className="mobile-menu-drawer"
                            >
                                {mobileMenu}
                            </Drawer>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between w-full relative z-[102] pl-[40px]">
                            {/* PC内容 */}
                            <div className="flex items-center justify-between w-full relative z-[102] pl-[40px]">
                                <ul className="flex items-center list-none gap-[clamp(20px,2vw,36px)] whitespace-nowrap relative text-[clamp(14px,1vw,20px)]">
                                    <li className='cursor-pointer'>
                                        <Popover content={content}>
                                            <Space className="relative z-[102]">
                                                Products
                                                <DownOutlined />
                                            </Space>
                                        </Popover>
                                    </li>

                                    <li className='cursor-pointer' onClick={() => setIsPricingModalOpen(true)}>
                                        Pricing
                                    </li>
                                    <li className='cursor-pointer'>
                                        <Dropdown menu={{ items }}>
                                            <Space>
                                                Solutions
                                                <DownOutlined />
                                            </Space>
                                        </Dropdown>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <Popover content={resourceContent}>
                                            <Space className="relative z-[102]">
                                                Resource
                                                <DownOutlined />
                                            </Space>
                                        </Popover>
                                    </li>
                                    <li className='cursor-pointer' onClick={() => { window.location.href = '/services-terms' }}>
                                        Terms & Conditions
                                    </li>
                                </ul>


                                <ul className="flex items-center list-none gap-[34px] text-[clamp(14px,1vw,20px)]">
                                    <li>
                                        <Dropdown menu={{ items }}>
                                            <Space>
                                                EN
                                                <DownOutlined />
                                            </Space>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Button
                                            className={`${isWhiteBgUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'} border border-[#FFFFFF] text-[clamp(14px,1vw,20px)]`}
                                            type="text"
                                            onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                                        >
                                            Sign Up
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            className={`${isWhiteBgUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'} text-[clamp(14px,1vw,20px)]`}
                                            type="text"
                                            onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                                        >
                                            Login
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}



                </div>
            </nav>

            {!isTUrl && (
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