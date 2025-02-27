import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/src/assets/logo.svg" alt="Lavas" className="h-8" />
            </Link>
            {/* Mobile menu button */}
            <button
              className="block md:hidden text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center justify-between flex-1 pl-8">
              <div className="flex items-center space-x-8">
                <Link to="/corporate-card" className="text-gray-700 hover:text-gray-900">企业卡</Link>
                <Link to="/travel" className="text-gray-700 hover:text-gray-900">商旅服务</Link>
                <Link to="/expense" className="text-gray-700 hover:text-gray-900">费用管理</Link>
                <Link to="/advertising" className="text-gray-700 hover:text-gray-900">广告投放</Link>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900">登录</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">注册</button>
              </div>
            </div>
          </div>
          {/* Mobile navigation */}
          {/* <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-4">
              <Link to="/corporate-card" className="text-gray-700 hover:text-gray-900">企业卡</Link>
              <Link to="/travel" className="text-gray-700 hover:text-gray-900">商旅服务</Link>
              <Link to="/expense" className="text-gray-700 hover:text-gray-900">费用管理</Link>
              <Link to="/advertising" className="text-gray-700 hover:text-gray-900">广告投放</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900">登录</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">注册</button>
              </div>
            </div>
          </div> */}
        </nav>
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <img src="/src/assets/logo.svg" alt="Lavas" className="h-8 mb-4" />
              <p className="text-gray-400">Copyright ©2021 DEFSOLUTION LLC. All Rights Reserved</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/corporate-card" className="text-gray-400 hover:text-white">企业卡</Link></li>
                <li><Link to="/travel" className="text-gray-400 hover:text-white">商旅服务</Link></li>
                <li><Link to="/expense" className="text-gray-400 hover:text-white">费用管理</Link></li>
                <li><Link to="/advertising" className="text-gray-400 hover:text-white">广告投放</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">✉</span>
                  <a href="mailto:support@idefpay.com" className="text-gray-400 hover:text-white">support@idefpay.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Ⓢ</span>
                  <span className="text-gray-400">defpay skype support</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;