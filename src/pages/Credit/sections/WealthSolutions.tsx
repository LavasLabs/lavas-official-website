import { Button, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';

const WealthSolutions = () => {
    const { isMobile } = useGlobalStore();
    const { t } = useTranslation('credit');
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <section className={`text-[#FFF] w-full flex justify-center items-center max-w-[1920px] mx-auto ${isMobile ? 'h-auto px-[20px] py-[70px]' : 'min-h-screen px-[clamp(40px,16%,310px)] mb-[120px]'} box-border bg-[#FFF] flex items-center flex-col relative`}>
            {contextHolder}
            <div className={`absolute w-full ${isMobile ? 'h-[60%]' : 'h-[70%]'} bg-[url('/images/credit-client.png')] bg-cover bg-center`}></div>
            <div className={`w-full ${isMobile ? 'h-auto flex-col items-center' : 'h-[70%] flex justify-between gap-[clamp(20px,4vw,40px)]'} py-[clamp(40px,5vh,60px)] box-border z-[2]`}>
                <div className={`flex flex-col justify-between box-border ${isMobile ? 'w-full px-[20px]' : 'w-[50%] h-full'}`}>
                    <div>
                        <div className={`font-[700] leading-[1.2] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] ${isMobile ? 'text-[24px] mb-[16px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
                            {t('wealthSolutions.title')}
                        </div>
                        <div className={`${isMobile ? 'text-[14px] leading-[1.5]' : 'text-[clamp(14px,1.1vw,18px)] mt-[clamp(12px,2vh,16px)]'}`}>
                            {t('wealthSolutions.subtitle')}
                        </div>
                    </div>

                    <div className={`${isMobile ? 'mt-[40px] flex justify-center' : 'mt-[clamp(30px,5vh,40px)]'}`}>
                        {!isMobile ? (
                                        <div className="mt-[clamp(30px,5vh,40px)]">
                                            <Button
                                                className="font-[700] px-[25px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818] h-[46px] py-[17px]"
                                                color="danger"
                                                variant="solid"
                                                size="large"
                                                onClick={() => messageApi.info(t('messages.functionNotEnabled', { ns: 'components' }))}
                                            >
                                                {t('wealthSolutions.learnMore')} <RightOutlined />
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="absolute bottom-[0px] w-full flex justify-center">
                                            <Button
                                                className="font-[700] px-[25px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818] h-[40px]"
                                                color="danger"
                                                variant="solid"
                                                size="middle"
                                                onClick={() => messageApi.info(t('messages.functionNotEnabled', { ns: 'components' }))}
                                            >
                                                {t('wealthSolutions.learnMore')} <RightOutlined />
                                            </Button>
                                        </div>
                                    )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WealthSolutions;