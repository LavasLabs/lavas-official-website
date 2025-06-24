import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';

const HeroSection = () => {
  const { isMobile } = useGlobalStore();
  const { t } = useTranslation('travel');

  return (
    <section className={`w-full max-w-[1920px] mx-auto relative overflow-hidden bg-[#FFF] text-[#0A0B11] box-border ${isMobile ? 'px-[20px]  h-auto' : 'pl-[clamp(40px,13%,250px)] min-h-[calc(100vh-100px)]'}`}>
      <div className={`box-border ${isMobile ? 'pt-[20px] flex-col items-center' : 'pt-[clamp(40px,5vh,80px)] flex justify-between'}`}>
        <div className={`w-full ${isMobile ? 'text-center' : 'max-w-[55%]'}`}>
          <div className={`font-sora font-[900] leading-[1.2] font-bold uppercase [-webkit-text-stroke:0.5px_#0A0B11] ${isMobile ? 'text-[28px]' : 'text-[clamp(40px,5vw,50px)]'}`}>
            {t('hero.title')}
          </div>
          <div className={`max-w-[600px] ${isMobile ? 'mt-[15px] text-[14px] mx-auto' : 'mt-[10px] text-[clamp(14px,1.1vw,16px)]'}`}>
            {t('hero.subtitle')}
          </div>
          <div className={isMobile ? 'mt-[40px]' : 'mt-[clamp(60px,18vh,400px)]'}>
            <Button
              className='font-[700] text-[clamp(16px,1.2vw,18px)] h-[clamp(46px,4vw,60px)] w-[clamp(160px,12vw,200px)] px-[clamp(25px,2vw,35px)] py-[clamp(17px,1.5vw,25px)] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-none'
              color="danger"
              variant="solid"
              shape="round"
              size='large'
              onClick={() => window.location.href = '/contact'}
            >
              {t('hero.startForFree')}
            </Button>
          </div>
        </div>
        <div className={`relative ${isMobile ? 'w-full mt-[40px]' : 'w-[100%]'}`}>
          <img className={`w-full h-auto object-contain ${isMobile ? 'relative' : 'absolute right-[0px] top-[85px]'}`} src="/images/travel-air.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;