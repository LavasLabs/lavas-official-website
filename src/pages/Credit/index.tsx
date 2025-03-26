import { message } from 'antd';
import Banner from './sections/Banner';
import BetterThanLoan from './sections/BetterThanLoan';
import MarketPlayers from './sections/MarketPlayers';
import Collateral from './sections/Collateral';
import CreditCard from './sections/CreditCard';
import WealthSolutions from './sections/WealthSolutions';
import FAQ from './sections/FAQ';
import NextGeneration from './sections/NextGeneration';
import Ecosystem from './sections/Ecosystem';
import './collapse.css';

const Credit = () => {
  const [, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Banner />
      <BetterThanLoan />
      <MarketPlayers />
      <Collateral />
      <CreditCard />
      <WealthSolutions />
      <FAQ />
      <NextGeneration />
      <Ecosystem />
    </>
  );
};

export default Credit;