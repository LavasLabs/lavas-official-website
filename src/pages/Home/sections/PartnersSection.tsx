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
    <section className={`w-full min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col text-[#0A0B11] ${isMobile ? 'px-[40px]' : 'px-[clamp(40px,16%,310px)]'}`}>
      <div className={`w-full max-w-[1920px] mx-auto flex flex-col items-center box-border ${isMobile ? 'py-[40px]' : 'py-[170px]'}`}>
        <div className={`w-full max-w-[1920px] mx-auto box-border flex flex-col items-center relative ${isMobile ? 'px-[0px]' : 'px-[clamp(40px,16%,310px)]'}`}>
          <div className='relative text-center max-w-[800px] leading-[1.2] font-[700] text-[clamp(32px,3.5vw,42px)]'>
            <img className={`absolute h-auto object-contain top-[-40%] ${isMobile ? 'w-[30px] right-[-8%]' : 'w-[52px] right-[-5%]'}`} src="/images/black-red-icon.png" alt="" />
            <span className={isMobile ? 'text-[24px]' : ''}>Access over $350k in offers from our partners</span>
          </div>
        </div>
        <div className={`w-full max-w-[1600px] mx-auto grid gap-[clamp(20px,3vw,40px)] ${isMobile ? 'grid-cols-4 mt-[40px] mb-[40px]' : 'grid-cols-5 mt-[80px] mb-[clamp(40px,5vh,80px)]'}`}>
          {logoUrlList.map((item, index) => (
            <img key={index} className={`object-contain ${isMobile ? 'w-[60px] h-[60px]' : 'w-[clamp(80px,8vw,120px)] h-[clamp(80px,8vw,120px)]'}`} src={item} alt="" />
          ))}
        </div>

        <div className={`w-full gap-[clamp(30px,3vw,50px)] ${isMobile ? 'grid grid-cols-2 mt-[40px]' : 'flex flex-wrap mt-[80px]'}`}>
          {featureList.map((feature) => (
            <div key={feature.id} className={isMobile ? '' : 'w-[calc((100%-100px)/3)] last:mr-[0px]'}>
              <div className={`relative font-[500] ${isMobile ? 'text-[18px]' : 'text-[clamp(24px,2.5vw,30px)]'}`}>
                <img className={`absolute w-[16px] h-auto object-contain ${isMobile ? 'left-[-8px] top-[5px]' : 'left-[-2px] top-[10px]'}`} src="/images/text-front-icon.png" alt="" />
                <span className='relative z-[999] opacity-10'>{feature.id}</span>
              </div>
              <Divider className='m-[0px] mb-[20px]' />
              <div className={`font-[500] whitespace-normal ${isMobile ? 'text-[16px]' : 'text-[clamp(24px,2.5vw,28px)]'}`}>
                {feature.title}
              </div>
              <div className={`opacity-60 mt-[8px] ${isMobile ? 'text-[12px]' : 'text-[clamp(14px,1.2vw,16px)]'}`}>
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