import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="">
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;