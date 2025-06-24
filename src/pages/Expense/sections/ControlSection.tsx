import { Space } from 'antd';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';

const ControlSection = () => {
    const { isMobile } = useGlobalStore();
    const { t } = useTranslation('expense');

    return (
        <section className={`text-[#0A0B11] w-full box-border bg-[#FFF] flex justify-center items-center flex-col ${isMobile ? 'py-[70px] px-[0px]' : 'min-h-screen px-[clamp(40px,16%,310px)] py-[170px]'}`}>
            <div className={`box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative ${isMobile ? 'px-[60px]' : 'px-[clamp(40px,16%,310px)]'}`}>
                <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
                    <img className={`h-auto object-contain absolute ${isMobile ? 'w-[30px] right-[-8%] top-[-36%]' : 'w-[52px] right-[-16%] top-[-40%]'}`} src="/images/black-red-icon.png" alt="" />
                    {t('control.title')}
                </div>
                <div className={`mt-[10px] text-center ${isMobile ? 'text-[14px] px-[20px] box-border' : 'text-[clamp(16px,1.5vw,20px)]'}`}>{t('control.subtitle')}</div>
            </div>

            <div className={`w-full flex mt-[30px] max-w-[1920px] mx-auto box-border ${isMobile ? 'flex-col' : 'flex-1 h-full'}`}>
                <div className={`relative ${isMobile ? 'w-full px-[20px] box-border' : 'w-[72%] h-full'}`}>
                    <img className='w-full' src="/images/expense-second.png" alt="" />
                </div>
                <div className={`relative ${isMobile ? 'w-full mt-[20px] px-[50px] box-border' : 'w-[28%]'}`}>
                    <div className={`${isMobile ? '' : 'absolute left-[clamp(-170px,-12vw,-100px)] top-[50%] translate-y-[-50%]'}`}>
                        <Space direction='vertical'>
                            <div className={`font-[700] ${isMobile ? 'text-[18px] text-center' : 'text-[clamp(12px,1.8vw,20px)]  whitespace-nowrap'}`}>
                                {t('control.budgetTitle')}
                            </div>
                            <div className={`opacity-60 ${isMobile ? 'text-[14px] whitespace-normal' : 'text-[clamp(8px,1.1vw,16px)]'}`}>
                                {t('control.budgetDescription')}
                            </div>
                        </Space>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ControlSection;