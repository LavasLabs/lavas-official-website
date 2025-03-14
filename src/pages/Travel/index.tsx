import { message } from 'antd';
import HeroSection from './sections/HeroSection';
import PolicySection from './sections/PolicySection';
import ControlSection from './sections/ControlSection';
import BusinessSection from './sections/BusinessSection';
import ExpenseSection from './sections/ExpenseSection';
import OverseeSection from './sections/OverseeSection';

const Travel = () => {
const [, contextHolder] = message.useMessage();
  
  return (
    <>
      {contextHolder}
      <HeroSection />
      <PolicySection />
      <ControlSection />
      <BusinessSection />
      <ExpenseSection />
      <OverseeSection />
    </>
  );
};

export default Travel;