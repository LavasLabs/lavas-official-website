import { Divider } from 'antd';
import useGlobalStore from '../../../store/useGlobalStore';

interface PartnersSectionProps {
  logoUrlList: string[];
}

const featureList = [
  {
    id: '01',
    title: 'No personal credit checks',
    description: 'No impact to your personal credit score. Credit limit based on financial factors such as revenue or dollars raised. Corporate charge card with 30-day payback.'
  },
  {
    id: '02',
    title: 'Easy, secure payment',
    description: 'Unlimited physical and virtual cards. Runs on the Visa network. Apple and Google Pay compatible. Enhanced security with 3DS enrollment, SSO logins, and others.'
  },
  {
    id: '03',
    title: 'Works wherever you go',
    description: 'Acceptance in 200+ countries through the Visa global network. Local issuing and debiting in 33 countries. Reimburse in 70 countries and 40 currencies.'
  }
];

const PartnersSection: React.FC<PartnersSectionProps> = ({ logoUrlList }) => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`text-[#0A0B11] ${isMobile ? 'px-[40px]' : 'px-[clamp(40px,16%,310px)]'} w-full min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col`}>
      <div className={`w-full max-w-[1920px] mx-auto flex flex-col items-center ${isMobile ? 'py-[100px]' : 'py-[170px]'} box-border`}>
        <div className={`${isMobile ? 'px-[0px]' : 'px-[clamp(40px,16%,310px)]'} box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative`}>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className={`${isMobile ? 'w-[30px]' : 'w-[52px]'} h-auto object-contain absolute ${isMobile ? 'right-[-8%]' : 'right-[-5%]'} top-[-40%]`} src="/images/black-red-icon.png" alt="" />
            <span className={`${isMobile ? 'text-[24px]' : ''}`}>Access over $350k in offers from our partners</span>
          </div>
        </div>
        <div className={`w-full ${isMobile ? 'grid-cols-4' : 'grid-cols-5'} grid gap-[clamp(20px,3vw,40px)] ${isMobile ? 'mb-[40px]' : 'mb-[clamp(40px,5vh,80px)]'} max-w-[1600px] mx-auto ${isMobile ? 'mt-[40px]' : 'mt-[80px]'}`}>
          {logoUrlList.map((item, index) => (
            <img key={index} className={`${isMobile ? 'w-[60px] h-[60px]' : 'w-[clamp(80px,8vw,120px)] h-[clamp(80px,8vw,120px)]'} object-contain`} src={item} alt="" />
          ))}
        </div>

        <div className={`w-full ${isMobile ? 'grid grid-cols-2' : 'flex flex-wrap'} gap-[clamp(30px,3vw,50px)] ${isMobile ? 'mt-[40px]' : 'mt-[80px]'}`}>
          {featureList.map((feature) => (
            <div key={feature.id} className={`${isMobile ? '' : 'w-[calc((100%-100px)/3)] last:mr-[0px]'}`}>
              <div className={`${isMobile ? 'text-[18px]' : 'text-[clamp(24px,2.5vw,30px)]'} font-[500] relative`}>
                <img className={`w-[16px] h-[48px] h-auto object-contain absolute ${isMobile ? 'left-[-8px] top-[5px]' : 'left-[-2px] top-[10px]'}`} src="/images/text-front-icon.png" alt="" />
                <span className='opacity-10 relative z-[999]'>{feature.id}</span>
              </div>
              <Divider className='m-[0px] mb-[20px]'></Divider>
              <div className={`${isMobile ? 'text-[16px]' : 'text-[clamp(24px,2.5vw,28px)]'} font-[500] whitespace-normal`}>
                {feature.title}
              </div>
              <div className={`${isMobile ? 'text-[12px]' : 'text-[clamp(14px,1.2vw,16px)]'} opacity-60 mt-[8px]`}>
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;