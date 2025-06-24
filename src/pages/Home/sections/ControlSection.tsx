import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';

const ControlSection = () => {
  const { isMobile } = useGlobalStore();
  const { t } = useTranslation('home');

  const cardList = t('control.cards', { returnObjects: true }) as Array<{title: string, description: string}>;

  return (
    <section className={`text-[#0A0B11] w-full min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col ${isMobile ? 'py-[80px]' : 'py-[170px]'}`}>
      <div className={`box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative ${isMobile ? 'px-[40px]' : 'px-[clamp(40px,16%,310px)]'}`}>
        <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
          <img className={`h-auto object-contain absolute top-[-40%] ${isMobile ? 'w-[30px] right-[-8%]' : 'w-[52px] right-[-10%]'}`} src="/images/black-red-icon.png" alt="" />
          {t('control.title')}
        </div>
        <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>{t('control.subtitle')}</div>
      </div>

      <div className={`w-full box-border max-w-[1920px] mx-auto ${isMobile ? 'px-[40px] mt-[100px]' : 'px-[clamp(40px,16%,310px)] mt-[150px]'}`}>
        <div className={`gap-[clamp(20px,2vw,40px)] ${isMobile ? 'flex-col' : 'flex justify-between'}`}>
          {cardList.map((item, index) => (
            <div key={index} className={`rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative ${isMobile ? 'w-full' : 'w-[calc((100%-80px)/3)] min-h-[365px]'} ${index !== cardList.length - 1 && isMobile ? 'mb-[80px]' : ''}`}>
              <div className='absolute left-1/2 top-[-60px] transform -translate-x-1/2 w-full max-w-[264px]'>
                <img className='w-full h-auto object-contain' src={`/images/${index === 0 ? 'Marketing' : index === 1 ? 'Travel' : 'Conference'}.png`} alt="" />
              </div>
              <div className='font-[700] text-[clamp(20px,2vw,24px)] mt-[10px]'>
                {item.title}
              </div>
              <div className='text-[16px] mt-[12px] text-[#626262]'>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ControlSection;