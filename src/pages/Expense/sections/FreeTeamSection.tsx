import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';
import { assetPath } from '../../../utils/assetPath';

const FreeTeamSection = () => {
    const { isMobile } = useGlobalStore();
    const { t } = useTranslation('expense');

    return (
        <section className={`text-[#0A0B11] w-full box-border bg-[#FFF] flex justify-center items-center flex-col ${isMobile ? 'py-[80px] px-[0px] h-auto' : 'min-h-screen py-[170px]'}`}>
            <div className={`box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative ${isMobile ? 'px-[40px]' : ''}`}>
                <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px] w-full' : 'text-[42px] w-[70%]'}`}>
                    <img className={`h-auto object-contain absolute ${isMobile ? 'w-[30px] right-[-8%] top-[-36%]' : 'w-[52px] right-[-10%] top-[-22%]'}`} src={assetPath('/images/black-red-icon.png')} alt="" />
                    {t('freeTeam.title')}
                </div>
                <div className={`mt-[10px] text-center ${isMobile ? 'text-[14px] px-[20px] box-border' : 'text-[20px]'}`}>{t('freeTeam.subtitle')}</div>
            </div>

            <div className={`w-full flex max-w-[1920px] mx-auto box-border ${isMobile ? 'flex-col mt-[40px]' : 'flex-1 h-full mt-[6%] pl-[clamp(40px,16%,310px)]'}`}>
                <div className={`relative ${isMobile ? 'w-full mb-[30px] h-[300px] px-[20px] box-border' : 'w-[40%]'}`}>
                    {/* <div className='font-[700] relative'>
                        <img className={`h-auto object-contain absolute left-[0px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src={assetPath('/images/text-front-icon.png')} alt="" />
                        <span className={`z-[999] relative ${isMobile ? 'text-[16px] ml-[20px]' : 'text-[20px]'}`}>The old way</span>
                    </div> */}
                    <img className={`${isMobile ? 'w-full mt-[20px]' : 'w-full absolute right-[0px] top-[0px]'}`} src={assetPath('/images/expense-oldway.png')} alt="" />
                </div>
                <div className={`relative box-border ${isMobile ? 'w-full h-[400px] mt-[100px]' : 'w-[60%] pl-[10%] pt-[10%]'}`}>
                    <img className={`${isMobile ? 'w-full' : 'w-full absolute right-[0px] top-[0px]'}`} src={assetPath('/images/expense-people.png')} alt="" />
                    <div className={`z-[999999] font-[700] text-[#FFF] flex flex-col gap-[20px] justify-center relative ${isMobile ? 'absolute top-[-180px] right-[0px] flex-row items-center gap-[10px]' : ''}`}>
                        <div className={`flex justify-center relative ${isMobile ? 'text-[14px] order-1 self-start mt-[10px]' : 'w-[30%]'}`}>{t('freeTeam.lavasWayTitle')}</div>
                        <img className={`rounded-[20px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.35)] ${isMobile ? 'w-[160px] mt-[30px] order-2' : 'w-[30%]'}`} src={assetPath('/images/expense-chat.png')} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeTeamSection;