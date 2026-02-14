import { Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';
import { RightOutlined } from '@ant-design/icons';
import { assetPath } from '../../../utils/assetPath';

const Banner = () => {
    const { isMobile, isTablet } = useGlobalStore();
    const { t } = useTranslation('credit');
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <section className={`w-full max-w-[1920px] mx-auto relative overflow-hidden text-[#0A0B11] box-border ${isMobile ? 'h-auto' : 'px-[clamp(40px,13%,250px)] pb-[20px] min-h-[calc(100vh-100px)] pt-[clamp(40px,5vh,80px)]'}`}>
            {contextHolder}
            <div className={`w-full ${!isMobile && 'rounded-[20px]'} box-border flex pt-[clamp(40px,5vh,80px)] bg-contain bg-center bg-no-repeat relative ${isMobile ? 'h-[46vh] flex-col' : 'h-[70vh] px-[8%] py-[6%]'}`}>
                <img
                    src={isMobile ? assetPath("/images/credit-banner-mobile.png") : assetPath("/images/credit-banner.png")}
                    className={`z-[99] w-full h-full absolute top-[0px] left-[0px]  ${!isMobile ? 'rounded-[20px] object-cover' : 'object-cover'}`}
                />
                {isMobile ? (
                    <>
                        <div className={`text-[#FFF] z-[100] font-[900] box-border relative [text-shadow:0px_4px_10px_rgba(0,0,0,0.8)] w-full text-center text-[30px] leading-[120%] px-[10%] mt-[17%] ${isTablet && '!mt-[10px]'}`}>
                            {t('banner.title')}
                        </div>
                        <div className="text-[#FFF] z-[100] font-[700] box-border relative [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] w-full text-center text-[18px] leading-[120%] px-[15%] mt-[20px]">
                            {t('banner.subtitle')}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="text-[#FFF] z-[100] font-[700] box-border relative [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] w-[50%] text-left text-[clamp(24px,2.5vw,32px)] leading-[90%]">
                            {t('banner.subtitle')}
                        </div>
                        <div className="text-[#FFF] z-[100] font-[700] box-border relative [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] w-[50%] h-full text-right flex items-end text-[clamp(32px,4vw,50px)] leading-[95%]">
                            {t('banner.title')}
                        </div>
                    </>
                )}
            </div>
            <div className={`w-full box-border flex justify-between ${isMobile ? 'flex px-[20px] mt-[10px] relative ' : 'min-h-[56vh]'}`}>
                <div className={`box-border relative ${isMobile ? 'w-[45%]' : 'w-[30%]'}`}>
                    <img
                        src={assetPath('/images/credit-phone.png')}
                        className={`absolute z-[999] ${
                            isMobile 
                                ? 'w-full left-[10px] top-[-9%]' 
                                : isTablet
                                    ? 'w-[60%] left-[30%] top-[-20%]'
                                    : 'w-[75%] left-[40%] top-[-40%]'
                        }`}
                    />
                </div>
                <div className={`box-border ${isMobile ? 'w-[40%] pl-[20px] pt-[10px]' : 'w-[60%] py-[80px]'}`}>
                    <div className={`flex ${isMobile ? 'flex-col gap-[30px]' : 'justify-between items-center'} mb-[16%]`}>
                        <div className='text-[#0A0B11]'>
                            <div className='font-[400] text-[clamp(16px,1.5vw,20px)]'>{t('banner.operating')}</div>
                            <div className='font-[700] text-[clamp(18px,1.8vw,22px)] mt-[10px]'>{t('banner.since2018')}</div>
                        </div>
                        <div className={`${isMobile ? 'w-full h-[1px]' : 'w-[1px] h-[40px]'} bg-[#0A0B11] opacity-30 mx-auto`}></div>
                        <div className='text-[#0A0B11]'>
                            <div className='font-[400] text-[clamp(16px,1.5vw,20px)]'>{t('banner.personalized')}</div>
                            <div className='font-[700] text-[clamp(18px,1.8vw,22px)] mt-[10px]'>{t('banner.clientCare')}</div>
                        </div>
                        <div className={`${isMobile ? 'w-full h-[1px]' : 'w-[1px] h-[40px]'} bg-[#0A0B11] opacity-30 mx-auto`}></div>
                        <div className='text-[#0A0B11]'>
                            <div className='font-[400] text-[clamp(16px,1.5vw,20px)]'>{t('banner.assetsUnderManagement')}</div>
                            <div className='font-[700] text-[clamp(18px,1.8vw,22px)] mt-[10px]'>{t('banner.billion')}</div>
                        </div>
                    </div>
                    {!isMobile && (
                            <Button
                                className={`font-[700] px-[25px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818] ${isMobile ? 'h-[40px]' : 'h-[46px] py-[17px]'}`}
                                color="danger"
                                variant="solid"
                                size={isMobile ? 'middle' : 'large'}
                                onClick={() => messageApi.info(t('messages.functionNotEnabled', { ns: 'components' }))}
                            >
                                {t('banner.getStarted')} <RightOutlined />
                            </Button>
                        )}
                </div>
          
            </div>
            {isMobile && (
                    <div className="flex justify-center mt-[40px] mb-[20px]">
                        <Button
                            className={`font-[700] px-[25px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818] ${isMobile ? 'h-[40px]' : 'h-[46px] py-[17px]'}`}
                            color="danger"
                            variant="solid"
                            size={isMobile ? 'middle' : 'large'}
                            onClick={() => messageApi.info(t('messages.functionNotEnabled', { ns: 'components' }))}
                        >
                            {t('banner.getStarted')} <RightOutlined />
                        </Button>
                    </div>
                )}
        </section>
    );
};

export default Banner;