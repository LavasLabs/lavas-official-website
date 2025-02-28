import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="bg-[#0A0B11] h-full min-h-screen relative">
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;