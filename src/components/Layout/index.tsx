import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="px-[250px] bg-[#0A0B11] h-full min-h-screen">
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;