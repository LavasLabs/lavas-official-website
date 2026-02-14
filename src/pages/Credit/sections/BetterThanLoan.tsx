import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';
import { assetPath } from '../../../utils/assetPath';

const BetterThanLoan = () => {
  const { isMobile } = useGlobalStore();
  const { t } = useTranslation('credit');

  const cardData = t('betterThanLoan.features', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const iconMap = [
    'property',
    'a-24time',
    'Tax-efficient',
    'currency',
    'Flexible',
    'collateral',
    'repayment'
  ];

  const Card = ({ title, description, index }: { title: string; description: string; index: number }) => (
    <div className={`box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between ${isMobile ? 'w-[calc(50%-10px)] min-h-[280px]' : 'w-[calc(100%/4-20px)] min-h-[300px]'}`}>
      <div>
        <i className={`iconfont icon-${iconMap[index]} ${isMobile ? 'text-[32px]' : 'text-[38px]'}`}></i>
        <div className={`${isMobile ? 'text-[16px]' : 'text-[20px]'} font-[600]`}>{title}</div>
      </div>
      <div className={`font-[400] ${isMobile ? 'text-[14px]' : 'text-[16px]'}`}>{description}</div>
    </div>
  );

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex flex-col text-[#0A0B11] ${isMobile ? 'px-[20px] py-[100px]' : 'px-[clamp(40px,16%,310px)] py-[170px] min-h-screen'}`}>
      <div className={`font-[700] leading-[1.2] relative ${isMobile ? 'text-[24px] mb-[40px] mx-auto text-center' : 'text-[clamp(32px,3.5vw,42px)] mb-[80px] w-fit'}`}>
        <img className={`h-auto object-contain absolute top-[-40px] ${isMobile ? 'w-[30px] right-[-20px]' : 'w-[52px] right-[-70px]'}`} src={assetPath('/images/black-red-icon.png')} alt="" />
        {t('betterThanLoan.title')}
      </div>
      <div className='flex flex-wrap text-[#0A0B11] gap-[20px]'>
        {cardData.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default BetterThanLoan;