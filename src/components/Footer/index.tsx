import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from 'antd';

const Footer: React.FC = () => (
  <footer className="bg-black text-[#FFFFFF] py-[20px] box-border px-[250px] z-[999999]">
    <div className="w-full container mx-auto flex w-full justify-between">
      {/* Logo */}
      <Link to="/" className="flex w-[20%] my-[1em]">
        <img src="/src/assets/logos/lavas-logo.png" alt="Lavas" className="w-auto h-[52px]" />
      </Link>

      <div className="flex gap-[120px]">

          <ul className="list-none flex flex-col gap-[20px]">
            <li>
              Products
            </li>
            <li>
              Pricing
            </li>
            <li>
              Solutions
            </li>
            <li>
              Resource
            </li>
          </ul>



          <ul className="list-none flex flex-col gap-[20px]">
            <li>
              EN
            </li>
            <li>
              support@idefpay.com
            </li>
            <li>
            defpay skype support
            </li>
          </ul>

      </div>
    </div>
    <div className="w-full container mx-auto flex w-full justify-between">
        <div>
        Copyright ©2021 DEFSOLUTION LLC. All Rights Reserved
        </div>
        <div className='flex gap-[20px]'>
          <i className='iconfont icon-facebook text-[20px]'></i>
          <i className='iconfont icon-twitter text-[20px]'></i>
          <i className='iconfont icon-instagram text-[20px]'></i>
          <i className='iconfont icon-ins text-[20px]'></i>
        </div>
    </div>
  </footer>
);

export default Footer;