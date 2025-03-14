import HeroSection from './sections/HeroSection';
import ControlSection from './sections/ControlSection';
import EliminateSection from './sections/EliminateSection';
import FreeTeamSection from './sections/FreeTeamSection';
import StrategicSection from './sections/StrategicSection';
import PartnersSection from './sections/PartnersSection';

const Expense = () => {
  const logoUrlList = [
    '/logos/expense-logo1.svg',
    '/logos/expense-logo2.svg',
    '/logos/expense-logo3.svg',
    '/logos/expense-logo4.svg',
    '/logos/expense-logo5.svg',
    '/logos/expense-logo6.svg',
    '/logos/expense-logo7.svg',
    '/logos/expense-logo8.svg',
    '/logos/expense-logo9.svg',
    '/logos/expense-logo10.svg',
    '/logos/expense-logo11.svg',
    '/logos/expense-logo12.svg',
  ];

  return (
    <>
      <HeroSection />
      <ControlSection />
      <EliminateSection />
      <FreeTeamSection />
      <StrategicSection />
      <PartnersSection logoUrlList={logoUrlList} />
    </>
  );
};

export default Expense;