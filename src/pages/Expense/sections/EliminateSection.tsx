import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';
import { assetPath } from '../../../utils/assetPath';

const EliminateSection = () => {
    const { isMobile } = useGlobalStore();
    const { t } = useTranslation('expense');

    return (
        <section className={`text-[#FFF] w-full box-border bg-[#0A0B11] flex justify-center items-center flex-col ${isMobile ? 'pt-[80px]' : 'min-h-screen pt-[170px]'}`}>
            <div className={`box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative ${isMobile ? 'px-[20px]' : ''}`}>
                <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
                    <img className={`h-auto object-contain absolute ${isMobile ? 'w-[30px] right-[-2%] top-[-30%]' : 'w-[52px] right-[-20%] top-[-40%]'}`} src={assetPath('/images/white-red-icon.png')} alt="" />
                    {t('eliminate.title')}
                </div>
                <div className={`mt-[10px] text-center ${isMobile ? 'text-[14px] px-[50px] box-border' : 'text-[clamp(16px,1.5vw,20px)]'}`}>{t('eliminate.subtitle')}</div>
            </div>

            <div className={`w-full flex max-w-[1920px] mx-auto box-border relative ${isMobile ? 'mt-[20px] px-[20px] flex-col' : 'flex-1 h-full mt-[100px] px-[clamp(40px,16%,310px)]'}`}>
                <img className={`object-contain ${isMobile ? 'w-[40px] h-auto ml-[20px] mb-[20px]' : 'absolute top-[clamp(-100px,-10vh,-60px)] left-[clamp(60px,8vw,120px)] w-[clamp(50px,6vw,80px)] h-auto'}`} src={assetPath('/images/expense-arrow.png')} alt="" />
                <div className={`box-border relative ${isMobile ? 'w-full pb-[50px] flex justify-center items-center' : 'w-[35%] pt-[4%] pb-[170px] h-full'}`}>
                    <img className={`${isMobile ? 'w-[70%]' : 'w-full'}`} src={assetPath('/images/expense-t-f.png')} alt="" />
                </div>
                <img className={`${isMobile ? 'w-[90%] ml-auto' : 'w-[50%] absolute bottom-[0px] right-[0px]'}`} src={assetPath('/images/expense-meteorite.png')} alt="" />
            </div>
        </section>
    );
};

export default EliminateSection;