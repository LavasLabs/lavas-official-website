import HeroSection from './sections/HeroSection';
import ControlSection from './sections/ControlSection';
import VisibilitySection from './sections/VisibilitySection';
import ExpensesSection from './sections/ExpensesSection';
import AutomationSection from './sections/AutomationSection';
import PartnersSection from './sections/PartnersSection';
import useGlobalStore from '../../store/useGlobalStore';

const Home = () => {
  const { isMobile } = useGlobalStore();

  const logoUrlList = [
    '/logos/card-logo1.svg',
    '/logos/card-logo2.svg',
    '/logos/card-logo3.svg',
    '/logos/card-logo4.svg',
    '/logos/card-logo5.svg',
    '/logos/card-logo6.svg',
    '/logos/card-logo7.svg',
    '/logos/card-logo8.svg',
    '/logos/card-logo9.svg',
    '/logos/card-logo10.svg',
  ];

  return (
    <>
      <div className={`${isMobile ? 'w-[80vw] h-[80vw]' : 'w-[44vw] h-[44vw]'} absolute ${isMobile ? 'top-[-10vw] right-[-20vw]' : 'top-[-15vw] right-[12vw]'} rounded-full opacity-50 bg-gradient-to-b from-[#C31111] to-[#1A1C1F] blur-[2px] z-[10]`}></div>
      <HeroSection />
      <ControlSection />
      <VisibilitySection />
      <ExpensesSection />
      <AutomationSection />
      <PartnersSection logoUrlList={logoUrlList} />
    </>
  );
};

export default Home;