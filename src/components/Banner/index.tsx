import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from 'antd';

const Banner: React.FC = () => (
    <nav className="bg-black text-[#FFFFFF] py-[20px] box-border">
        <div className="container mx-auto flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center w-[160px]">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Lavas" className="w-[56px] h-[56px]" />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center justify-between">
                <div>
                    <ul className="flex items-center list-none gap-[50px]">
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
                </div>

                <div>
                    <ul className="flex items-center list-none gap-[50px]">
                        <li>
                            EN
                        </li>
                        <li>
                            <Button className='text-[#FFFFFF] hover:text-[#FFFFFF]' type="text">Text Button</Button>
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);

export default Banner;