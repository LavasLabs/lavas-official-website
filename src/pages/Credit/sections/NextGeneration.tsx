import { Button, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useGlobalStore from '../../../store/useGlobalStore';

const NextGeneration = () => {
    const { isMobile } = useGlobalStore();
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <section className={`text-[#FFF] w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex justify-center flex-col relative ${isMobile ? 'px-[40px] py-[60px]' : 'min-h-screen px-[clamp(40px,16%,310px)] mb-[80px] items-center'}`}>
            {contextHolder}
            <div className={`absolute left-[0px] w-full ${isMobile ? 'h-[70%]' : 'h-[70%]'} bg-[url('/images/credit-next.png')] bg-cover bg-center`}></div>
            <div className={`w-full box-border z-[2] ${isMobile ? 'flex flex-col items-center' : 'h-[70%] flex justify-between gap-[clamp(20px,4vw,40px)]'} py-[clamp(40px,5vh,60px)]`}>
                <div className={`flex flex-col justify-between ${isMobile ? 'w-full' : 'w-[50%] gap-[30px]  h-full'}`}>
                    <div>
                        <div className={`font-[700] leading-[1.2] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] ${isMobile ? 'text-[20px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
                            DRIVING THE NEXT GENERATION OF WEALTH.
                        </div>
                        <div className={`mt-[clamp(12px,2vh,16px)] [text-shadow:0px_4px_4px_rgba(0,0,0,0.35)] ${isMobile ? 'text-[12px] w-[60%]' : 'text-[clamp(14px,1.1vw,18px)]'}`}>
                            Volcano is built for pioneers ready to leverage blockchain technology for wealth generation. Create your account today and get started.
                        </div>
                    </div>

                    <div className={`flex items-center gap-[16px] ${isMobile ? 'mt-[30px]' : 'mt-[clamp(30px,5vh,40px)]'}`}>
                        <Button
                            className={`font-[700] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818] ${isMobile ? 'h-[40px] px-[20px] text-[14px]' : 'h-[46px] px-[25px] py-[17px]'}`}
                            color="danger"
                            variant="solid"
                            size='large'
                            onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                        >
                            Learn more <RightOutlined />
                        </Button>
                        <img src="/images/credit-qrcode.png" className={`${isMobile ? 'h-[40px] w-[40px]' : 'h-[46px] w-[46px]'}`} alt="QR Code" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextGeneration;