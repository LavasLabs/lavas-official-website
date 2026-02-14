import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';
import { assetPath } from '../../../utils/assetPath';

const Ecosystem = () => {
  const { isMobile } = useGlobalStore();
  const { t } = useTranslation('credit');

  const ecosystemData = t('ecosystem.features', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const iconMap = [
    'icon-a-Dualinvestment',
    'icon-property',
    'icon-Exchange'
  ];

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex flex-col text-[#0A0B11] ${isMobile ? 'px-[40px] py-[80px]' : 'px-[clamp(40px,16%,310px)] pb-[170px] min-h-screen'}`}>
      <div className={`box-border w-full max-w-[1920px] mx-auto text-center`}>
        <div className={`relative font-[700] max-w-[800px] mx-auto ${isMobile ? 'text-[20px] w-full' : 'text-[42px] w-[70%]'}`}>
          <img className={`absolute h-auto ${isMobile ? 'w-[24px] right-[-5%] top-[-30%]' : 'w-[52px] right-[-10%] top-[-22%]'}`} src={assetPath('/images/black-red-icon.png')} alt="" />
          {t('ecosystem.title')}
        </div>
      </div>

      <div className={`flex flex-wrap text-[#0A0B11] gap-[20px] ${isMobile ? 'mt-[40px]' : 'mt-[80px]'}`}>
        {ecosystemData.map((item, index) => (
          <div key={index} className={`box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between ${isMobile ? 'w-full h-[200px]' : 'w-[calc(100%/3-20px)] h-[300px]'}`}>
            <div>
              <i className={`iconfont ${iconMap[index]} ${isMobile ? 'text-[28px]' : 'text-[38px]'}`}></i>
              <div className={`font-[600] ${isMobile ? 'text-[16px]' : 'text-[20px]'}`}>{item.title}</div>
            </div>
            <div className={`font-[400] ${isMobile ? 'text-[14px]' : ''}`}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;