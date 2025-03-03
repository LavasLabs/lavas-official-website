import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from 'antd';

const Banner: React.FC = () => {
    const navigate = useNavigate();

    return (
    <nav className="bg-[#0A0B11] text-[#FFFFFF] py-[20px] box-border px-[12%] z-[999999]">
        <div className="container mx-auto flex items-center w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center w-[20%]">
                <img src="/src/assets/logos/lavas-logo.png" alt="Lavas" className="w-auto h-[52px]" />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center justify-between w-full z-[999999]">
                <div>
                    <ul className="flex items-center list-none gap-[50px]">
                        <li className='cursor-pointer' onClick={() => navigate('/travel')}>
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
                            <Button className='text-[#FFFFFF] hover:text-[#FFFFFF]' type="text">Sign Up</Button>
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
};


export default Banner;