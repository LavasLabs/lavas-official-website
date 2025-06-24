import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';

const VisibilitySection = () => {
  const { isMobile } = useGlobalStore();
  const { t } = useTranslation('home');

  return (
    <section className='bg-[#0A0B11] text-[#FFFFFF] w-full min-h-screen box-border relative overflow-hidden'>
      <img className={`absolute left-[0px] object-cover ${isMobile ? 'w-full top-[30%]' : 'w-[50%] top-[0px]'}`} src="/images/third-logo.png" />
      <div className={`w-full max-w-[1920px] mx-auto box-border relative z-[2] ${isMobile ? 'px-[40px] pt-[80px]' : 'px-[clamp(40px,16%,310px)] pt-[170px]'}`}>
        <div className={`${isMobile ? 'max-w-full text-center' : 'max-w-[800px]'}`}>
          <div className={`font-[700] relative inline-block ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
            <img className={`h-auto object-contain absolute top-[-30px] ${isMobile ? 'w-[30px] right-[-20px]' : 'w-[52px] right-[-80px]'}`} src="/images/white-red-icon.png" alt="" />
            <span>{t('visibility.title')}</span>
          </div>
          <div className={`opacity-60 text-[clamp(16px,1.2vw,18px)] ${isMobile ? 'mt-[10px]' : 'mt-[20px]'}`}>
            <div>{t('visibility.subtitle1')}</div>
            <div>{t('visibility.subtitle2')}</div>
          </div>
          <div className={`text-[clamp(20px,2vw,24px)] relative ${isMobile ? 'inline-block text-center mt-[40px]' : 'mt-[60px]'}`}>
            <span className='relative z-[999]'>
              <img className='w-[16px] h-auto object-contain absolute left-[-3px] top-[0px]' src="/images/text-front-icon.png" alt="" />
              <span className='relative z-[9999]'>{t('visibility.accountability')}</span>
            </span>
          </div>
          <div className={`text-[clamp(16px,1.2vw,18px)] relative ${isMobile ? 'mt-[10px]' : 'mt-[20px]'}`}>
            <div className='opacity-60'>{t('visibility.subtitle1')}</div>
            <div className='opacity-60'>{t('visibility.subtitle2')}</div>
            <img className={`absolute w-[clamp(50px,6vw,80px)] h-auto object-contain ${isMobile ? 'top-[140px] right-[0px]' : 'top-[220px] left-[30%]'}`} src="/images/card-square.png" alt="" />
          </div>
        </div>
      </div>

      <div className={`absolute bottom-[0px] left-[0px] w-full relative ${isMobile ? 'mt-[60px]' : 'mt-[100px]'}`}>
        <div className={`relative max-w-[1920px] mx-auto ${isMobile ? 'h-[80vh]' : 'h-[min(800px,65vh)]'}`}>
          <img className={`absolute object-contain z-[999] bottom-[0px] ${isMobile ? 'left-[5%] w-[55%]' : 'left-[16%] w-[clamp(200px,18vw,360px)]'}`} src="/images/card-person.png" />
          <img className={`absolute object-contain z-[999] ${isMobile ? 'left-[5%] w-[60%] top-[0px]' : 'left-[46%] w-[clamp(220px,20vw,380px)] bottom-[0px]'}`} src="/images/card-media.png" />
          <img className={`absolute object-contain z-[9999] ${isMobile ? 'bottom-[20%] !right-[10px] w-[50%]' : 'bottom-[100px] left-[70%] w-[clamp(200px,22vw,400px)]'}`} src="/images/card-detail.png" />
        </div>
      </div>

      <div className={`w-full absolute right-[0px] h-[240px] bg-gradient-to-r from-[#0A0B11] to-[#D11616] blur-[142px] z-[1] ${isMobile ? 'bottom-[60px]' : 'bottom-[0px]'}`}></div>
    </section>
  );
};

export default VisibilitySection;