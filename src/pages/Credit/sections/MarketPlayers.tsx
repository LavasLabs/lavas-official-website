import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';

const MarketPlayers = () => {
    const { isMobile } = useGlobalStore();
    const { t } = useTranslation('credit');

    const cardData = t('marketPlayers.features', { returnObjects: true }) as Array<{
        description: string;
    }>;

    const iconMap = [
        'Booster',
        'property2',
        'limit'
    ];

    const Card = ({ description, index }: { description: string; index: number }) => (
      <div className={`box-border [box-shadow:0px_10px_80px_0px_rgba(0,0,0,0.25)] rounded-[20px] px-[20px] py-[20px] bg-[#FFF] flex flex-col justify-between ${
        isMobile ? 'w-full min-h-[180px]' : 'w-[calc(100%/3-50px)] min-h-[240px]'
      }`}>
        <i className={`iconfont icon-${iconMap[index]} ${isMobile ? 'text-[32px]' : 'text-[38px]'}`}></i>
        <div className={`font-[400] ${isMobile ? 'text-[14px]' : 'text-[16px]'}`}>{description}</div>
      </div>
    );

    return (
        <section className={`w-full max-w-[1920px] relative mx-auto box-border bg-[#FFF] flex flex-col ${isMobile ? 'px-[20px] py-[80px] h-auto' : 'px-[clamp(40px,16%,310px)] min-h-screen'}`}>
            <img 
              src={isMobile ? "/images/credit-play-mobile.png" : "/images/credit-play.png"}
              className={`w-full h-full box-border absolute top-[0px] left-[0px] object-contain object-top ${
                isMobile ? 'px-[0px]' : 'px-[clamp(40px,16%,310px)] rounded-[20px]'
              }`} 
            />
            <div className={`w-full max-w-[600px] box-border mx-auto text-center text-[#FFF] relative ${
              isMobile ? 'px-[20px] mt-[2%]' : 'mt-[10%]'
            }`}>
                <img 
                  className={`h-auto object-contain absolute top-[-40%] ${
                    isMobile ? 'w-[30px] right-[10px]' : 'w-[52px] right-[-10%]'
                  }`} 
                  src="/images/white-red-icon.png" 
                  alt="" 
                />
                <div className={`font-[700] leading-[1.2] ${
                  isMobile ? 'text-[22px]' : 'text-[clamp(32px,3.5vw,42px)]'
                }`}>
                  {t('marketPlayers.title')}
                </div>
            </div>
            <div className={`flex flex-wrap justify-center text-[#0A0B11] z-[100] box-border ${
              isMobile ? 'mt-[40px] px-[20px] gap-[24px]' : 'mt-[80px] px-[100px] gap-[50px]'
            }`}>
                {cardData.map((card, index) => (
                  <Card key={index} description={card.description} index={index} />
                ))}
            </div>
        </section>
    );
};

export default MarketPlayers;