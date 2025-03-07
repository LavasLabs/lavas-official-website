import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space, Popover } from 'antd';
import { useState } from 'react';
import PricingModal from '../PricingModal';




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
    // const navigate = useNavigate();
    const location = window.location.pathname;
    const whiteUrlList = ['travel', 'services-terms', 'advertising', 'blog', 'contact', 'partner'];
    const isWhiteBgUrl = whiteUrlList.some(u => location.includes(u));
    const tUrlList = ['partner'];
    const isTUrl = tUrlList.some(u => location.includes(u));
    const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

    const goRouter = (url: string) => {
        window.location.href = url;
    }

    return (
        <>
            {/* 导航栏 */}
            <nav className={`w-full absolute top-0 left-0 right-0 ${isWhiteBgUrl
                ? 'text-[#0A0B11]'
                : 'text-[#FFFFFF]'
                }  ${isTUrl ? 'bg-[#FFFFFF]/40 backdrop-blur-sm' : ''} py-[20px] box-border px-[12%] z-[100] text-[14px]`}>

                <div className="container mx-auto flex items-center w-full relative">
                    {/* Logo */}
                    <div onClick={() => goRouter('/')} className="flex items-center w-[16%] cursor-pointer relative z-[102]">
                        <img src={isWhiteBgUrl ? '/logos/lavas-logo-black.png' : '/logos/lavas-logo.png'} alt="" className="w-auto h-[52px]" />
                    </div>

                    <div className="flex items-center justify-between w-full relative z-[102]">
                        <ul className="flex items-center list-none gap-[36px] whitespace-nowrap relative">
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


                        <ul className="flex items-center list-none gap-[34px]">
                            <li>
                                <Dropdown menu={{ items }}>
                                    <Space>
                                        EN
                                        <DownOutlined />
                                    </Space>
                                </Dropdown>
                            </li>
                            <li>
                                <Button className={`${isWhiteBgUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'} border border-[#FFFFFF]`} type="text">Sign Up</Button>
                            </li>
                            <li>
                                <Button className={`${isWhiteBgUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'}`} type="text">Login</Button>
                            </li>
                        </ul>
                    </div>

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
    )
};


export default Banner;