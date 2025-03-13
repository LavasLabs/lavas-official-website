import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Popover } from 'antd';
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


const Footer: React.FC = () => {
  // const navigate = useNavigate();
  // const location = window.location.pathname;

  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);


  return (
    <footer className="bg-[#0A0B11] text-[#FFFFFF] py-[20px] box-border px-[clamp(40px,13%,250px)]">
      <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-[10px]">
        <div className="flex justify-between flex-wrap gap-[20px]">
          {/* Logo */}
          <Link to="/" className="flex">
            <img src="/logos/lavas-logo.png" alt="" className="w-auto h-[clamp(52px,4vw,64px)]" />
          </Link>

          <div className="flex gap-[clamp(40px,5vw,120px)] flex-wrap">
            <ul className="list-none flex flex-col gap-[20px] min-w-[160px] text-[clamp(14px,1.1vw,20px)]">
              <li className='cursor-pointer'>         
                <Popover content={content}>
                  <Space>
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
            <li className='cursor-pointer' onClick={() => {
              window.location.href = '/services-terms';
            }}>
              Terms & Conditions
            </li>
          </ul>



          <ul className="list-none flex flex-col gap-[20px] min-w-[200px] text-[clamp(14px,1.1vw,20px)]">
            <li>EN</li>
            <li>support@lavaslabs.com</li>
            <li>defpay skype support</li>
          </ul>
        </div>
      </div>

        <div className="flex justify-between box-border flex-wrap gap-[20px] py-[20px]">
          <div className="text-[clamp(14px,1.1vw,20px)] opacity-80">
            Copyright ©2025 Lavas Labs Limited. All Rights Reserved
          </div>
          <div className='flex gap-[20px] mr-[clamp(40px,1vw,80px)]'>
            <i className='iconfont icon-facebook text-[clamp(20px,1.4vw,24px)] cursor-pointer hover:opacity-80'></i>
            <i className='iconfont icon-twitter text-[clamp(20px,1.4vw,24px)] cursor-pointer hover:opacity-80'></i>
            <i className='iconfont icon-instagram text-[clamp(20px,1.4vw,24px)] cursor-pointer hover:opacity-80'></i>
            <i className='iconfont icon-ins text-[clamp(20px,1.4vw,24px)] cursor-pointer hover:opacity-80'></i>
          </div>
        </div>
      </div>

      <PricingModal
        open={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
      />
    </footer>

  )
};

export default Footer;