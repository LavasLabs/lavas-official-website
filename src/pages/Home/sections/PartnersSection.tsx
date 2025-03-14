import { Divider } from 'antd';

interface PartnersSectionProps {
  logoUrlList: string[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ logoUrlList }) => {
  return (
    <section className='text-[#0A0B11] px-[clamp(40px,16%,310px)] w-full min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
      <div className='w-full max-w-[1920px] mx-auto flex flex-col items-center py-[170px] box-border'>
        <div className='px-[clamp(40px,16%,310px)] box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-5%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            Access over $350k in offers from our partners
          </div>
        </div>
        <div className='w-full grid grid-cols-2 grid-cols-5 gap-[clamp(20px,3vw,40px)] mb-[clamp(40px,5vh,80px)] max-w-[1600px] mx-auto mt-[80px]'>
          {logoUrlList.map((item, index) => (
            <img key={index} className='w-[clamp(80px,8vw,120px)] h-[clamp(80px,8vw,120px)] object-contain' src={item} alt="" />
          ))}
        </div>

        <div className='w-full flex flex-wrap gap-[clamp(30px,3vw,50px)] mt-[80px]'>
          <div className='w-[calc((100%-100px)/3-50px)] last:mr-[px] mr-[clamp(30px,3vw,50px)]'>
            <div className='text-[clamp(24px,2.5vw,30px)] font-[500] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
              <span className='opacity-10 relative z-[999]'>01</span>
            </div>
            <Divider className='m-[0px] mb-[20px]'></Divider>
            <div className='text-[clamp(24px,2.5vw,28px)] font-[500] whitespace-normal'>
              No personal credit checks
            </div>
            <div className='text-[clamp(14px,1.2vw,16px)] opacity-60 mt-[8px]'>
              No impact to your personal credit score.
              Credit limit based on financial factors such as revenue or dollars raised.
              Corporate charge card with 30-day payback.
            </div>
          </div>
          <div className='w-[calc((100%-100px)/3-50px)] last:mr-[px] mr-[clamp(30px,3vw,50px)]'>
            <div className='text-[30px] font-[500] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
              <span className='opacity-10 relative z-[999]'>02</span>
            </div>
            <Divider className='m-[0px] mb-[20px]'></Divider>
            <div className='text-[clamp(24px,2.5vw,28px)] font-[500] whitespace-normal'>
              Easy, secure payment
            </div>
            <div className='text-[clamp(14px,1.2vw,16px)] opacity-60 mt-[8px]'>
              Unlimited physical and virtual cards.
              Runs on the Visa network.
              Apple and Google Pay compatible.
              Enhanced security with 3DS enrollment, SSO logins, and others.
            </div>
          </div>

          <div className='w-[calc((100%-100px)/3-50px)] last:mr-[px] mr-[clamp(30px,3vw,50px)]'>
            <div className='text-[30px] font-[500] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
              <span className='opacity-10 relative z-[999]'>03</span>
            </div>
            <Divider className='m-[0px] mb-[20px]'></Divider>
            <div className='text-[clamp(24px,2.5vw,28px)] font-[500] whitespace-normal'>
              Works wherever you go
            </div>
            <div className='text-[clamp(14px,1.2vw,16px)] opacity-60 mt-[8px]'>
              Acceptance in 200+ countries through the Visa global network.
              Local issuing and debiting in 33 countries.
              Reimburse in 70 countries and 40 currencies.
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default PartnersSection;