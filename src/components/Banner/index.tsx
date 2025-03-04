import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space, Popover } from 'antd';




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
            <Space className='cursor-pointer' onClick={() => goRouter('travel')}>
                <i className='iconfont icon-Advertising text-[24px]'></i>
                <span>Advertising</span>
            </Space>
        </div>
    )
}
);


const Banner: React.FC = () => {
    // const navigate = useNavigate();
    const location = window.location.pathname;
    const urlList = ['travel', 'services-terms'];
    const isUrl = urlList.some(u => location.includes(u));

    const goRouter = (url: string) => {
        window.location.href = url;
    }

    return (
        <nav className={`bg-[#0A0B11] ${isUrl ? 'text-[#0A0B11] bg-[#FFFFFF]' : 'text-[#FFFFFF] bg-[#0A0B11]'} py-[20px] box-border px-[12%] z-[999999] text-[14px]`}>
            <div className="container mx-auto flex items-center w-full">
                {/* Logo */}
                <div onClick={() => goRouter('/')} className="flex items-center w-[16%] cursor-pointer">
                    <img src={isUrl ? '/logos/lavas-logo-black.png' : '/logos/lavas-logo.png'} alt="Lavas" className="w-auto h-[52px]" />
                </div>


                <div className="flex items-center justify-between w-full z-[999999]">
                    <ul className="flex items-center list-none gap-[36px] whitespace-nowrap">
                        <Popover content={content}>
                            <Space>
                                Products
                                <DownOutlined />
                            </Space>
                        </Popover>


                        <li className='cursor-pointer'>
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
                            <Dropdown menu={{ items }}>
                                <Space>
                                    Resource
                                    <DownOutlined />
                                </Space>
                            </Dropdown>
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
                            <Button className={`${isUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'} border border-[#FFFFFF]`} type="text">Sign Up</Button>
                        </li>
                        <li>
                            <Button className={`${isUrl ? 'text-[#0A0B11]' : 'text-[#FFFFFF]'}`} type="text">Login</Button>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
};


export default Banner;