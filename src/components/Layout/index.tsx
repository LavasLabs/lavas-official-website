import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="h-full min-h-screen overflow-x-hidden relative">
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;