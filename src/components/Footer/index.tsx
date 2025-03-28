import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Popover, message } from 'antd';
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

// 产品菜单配置
const productItems = [
  { icon: 'icon-a-CorporateCard', text: 'Corporate Card', route: '' },
  { icon: 'icon-Travel', text: 'Travel', route: 'travel' },
  { icon: 'icon-money', text: 'Expense Management', route: 'expense' },
  { icon: 'icon-Advertising', text: 'Advertising', route: 'advertising' },
  { icon: 'icon-a-CreditLine', text: 'Credit Line', route: 'credit' }
] as const;

const content = (() => {
  const { isMobile } = useGlobalStore();
  const goRouter = (url: string) => {
    window.location.href = `/${url}`;
  }

  return (
    <div className={`${isMobile ? 'w-[280px]' : 'w-[420px]'} flex flex-wrap gap-[15px] gap-y-[10px]`}>
      {productItems.map(item => (
        <Space key={item.text} className='cursor-pointer' onClick={() => goRouter(item.route)}>
          <i className={`iconfont ${item.icon} text-[24px]`}></i>
          <span>{item.text}</span>
        </Space>
      ))}
    </div>
  )
});

// 资源菜单配置
const resourceItems = [
  { icon: 'icon-blog', text: 'Blog', route: 'blog' },
  { icon: 'icon-sales', text: 'Contact Sales', route: 'contact' },
  { icon: 'icon-Partner', text: 'Become a Partner', route: 'partner' }
] as const;

const resourceContent = (() => {
  const { isMobile } = useGlobalStore();
  const goRouter = (url: string) => {
    window.location.href = `/${url}`;
  }

  return (
    <div className={`${isMobile ? 'w-[280px]' : 'w-[420px]'} flex flex-wrap gap-[20px] gap-y-[10px]`}>
      {resourceItems.map(item => (
        <Space key={item.text} className='cursor-pointer' onClick={() => goRouter(item.route)}>
          <i className={`iconfont ${item.icon} text-[24px]`}></i>
          <span>{item.text}</span>
        </Space>
      ))}
    </div>
  )
});

// 图标配置
const socialIcons = [
  'icon-facebook',
  'icon-twitter',
  'icon-instagram',
  'icon-ins'
] as const;


const Footer: React.FC = () => {
  // const navigate = useNavigate();
  // const location = window.location.pathname;

  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const { isMobile } = useGlobalStore();
  const [messageApi, contextHolder] = message.useMessage();

  const renderSocialIcons = () => (
    <div className={`flex gap-[20px] ${!isMobile && 'mr-[clamp(20px,4vw,90px)]'}`}>
      {socialIcons.map(icon => (
        <i key={icon} className={`iconfont ${icon} text-[clamp(20px,1.4vw,24px)] cursor-pointer hover:opacity-80`} />
      ))}
    </div>
  );

  return (
    <footer className={`bg-[#0A0B11] text-[#FFFFFF] py-[20px] box-border ${isMobile ? 'px-[20px]' : 'px-[clamp(40px,13%,250px)]'}`}>
      {contextHolder}
      <div className={`w-full max-w-[1920px] mx-auto flex flex-col gap-[10px] ${isMobile && 'pt-[60px]'}`}>
        <div className={`flex w-full gap-[20px] ${isMobile ? 'flex-col justify-center items-center' : 'justify-between flex-wrap'}`}>
          {/* Logo */}
          <Link to="/" className="flex">
            <img src="/logos/lavas-logo.png" alt="" className="w-auto h-[clamp(52px,4vw,64px)]" />
          </Link>

          <div className={`flex  flex-wrap ${isMobile ? 'justify-center gap-y-[26px]' : 'gap-[clamp(40px,5vw,120px)]'}`}>
            <ul className={`list-none !pl-[0px] ${isMobile ? 'flex flex-row flex-wrap justify-center gap-y-[10px] w-full' : 'flex flex-col min-w-[160px]'} gap-[20px] text-[clamp(14px,1.1vw,20px)]`}>
              <li className={`cursor-pointer ${isMobile ? 'mx-[10px]' : ''}`}>
                <Popover content={content} overlayStyle={isMobile ? { width: '280px' } : undefined}
                  overlayInnerStyle={isMobile ? { padding: '12px' } : undefined}>
                  <Space>
                    Products
                    <DownOutlined />
                  </Space>
                </Popover>
              </li>
              <li className={`cursor-pointer ${isMobile ? 'mx-[10px]' : ''}`} onClick={() => setIsPricingModalOpen(true)}>
                Pricing
              </li>
              <li className={`cursor-pointer ${isMobile ? 'mx-[10px]' : ''}`}>
                <Dropdown menu={{ items }}>
                  <Space onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}>
                    Solutions
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li className={`cursor-pointer ${isMobile ? 'mx-[10px]' : ''}`}>
                <Popover content={resourceContent} overlayStyle={isMobile ? { width: '280px' } : undefined}
                  overlayInnerStyle={isMobile ? { padding: '12px' } : undefined}>
                  <Space className="relative z-[102]">
                    Resource
                    <DownOutlined />
                  </Space>
                </Popover>
              </li>
              <li className={`cursor-pointer ${isMobile ? 'mx-[10px]' : ''}`} onClick={() => {
                window.location.href = '/services-terms';
              }}>
                Terms & Conditions
              </li>
            </ul>

            <ul className={`list-none !pl-[0px] flex flex-col gap-[20px] min-w-[200px] text-[clamp(14px,1.1vw,20px)] ${isMobile ? 'text-center gap-y-[10px]' : ''} `}>
              <li className='text-[clamp(16px,1.4vw,24px)]'>Follow</li>
              <li className='flex items-center'>
                <i className='iconfont icon-email text-[clamp(20px,1.4vw,24px)] mr-[10px]'></i>
                <span>support@lavaslabs.com</span>
              </li>
              <li className='flex items-center'>
                <i className='iconfont icon-skype text-[clamp(20px,1.4vw,24px)] mr-[10px]'></i>
                <span>defpay skype support</span>
              </li>
              {isMobile && <li className='flex justify-center'>{renderSocialIcons()}</li>}
            </ul>
          </div>
        </div>

        <div className={`flex box-border flex-wrap gap-[20px] py-[20px] ${isMobile ? 'flex-col items-center text-center' : 'justify-between'}`}>
          <div className="text-[clamp(14px,1.1vw,20px)] opacity-80">
            Copyright ©2025 Lavas Labs Limited. All Rights Reserved
          </div>

          {!isMobile && renderSocialIcons()}
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