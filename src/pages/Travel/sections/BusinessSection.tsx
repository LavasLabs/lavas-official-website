import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';
import { assetPath } from '../../../utils/assetPath';

const BusinessSection = () => {
  const { isMobile } = useGlobalStore();
  const { t } = useTranslation('travel');

  return (
    <section className={`w-full max-w-[1920px] mx-auto  bg-[#FFF] flex justify-center items-center flex-col text-[#0A0B11] box-border ${isMobile ? 'h-auto px-[0px] pt-[40px] pb-[20px]' : 'min-h-screen px-[clamp(40px,16%,310px)] py-[170px]'}`}>
      <div className={`w-full max-w-[1920px] mx-auto flex flex-col items-center relative ${isMobile ? 'px-[40px] box-border' : ''}`}>
        <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
          <img className={`h-auto object-contain absolute top-[-40%] ${isMobile ? 'w-[30px] right-[2px]' : 'w-[52px] right-[-16%]'}`} src={assetPath('/images/black-red-icon.png')} alt="" />
          {t('business.title')}
        </div>
        <div className={`mt-[10px] text-center ${isMobile ? 'text-[14px]' : 'text-[clamp(16px,1.5vw,20px)]'}`}>
          {t('business.subtitle')}
        </div>
      </div>

      <div className={`w-full max-w-[1920px] mx-auto flex flex-col items-center relative`}>
        <img 
          className={`w-full h-auto object-contain ${isMobile ? 'max-w-full mt-[10px]' : 'max-w-[1400px]'}`} 
          src={isMobile ? assetPath("/images/travel-map-mobile.png") : assetPath("/images/travel-map.png")} 
          alt="" 
        />
      </div>
    </section>
  );
};

export default BusinessSection;