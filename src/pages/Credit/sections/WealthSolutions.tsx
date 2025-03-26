import { Button, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useGlobalStore from '../../../store/useGlobalStore';

const WealthSolutions = () => {
    const { isMobile } = useGlobalStore();
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <section className={`text-[#FFF] w-full flex justify-center items-center max-w-[1920px] mx-auto ${isMobile ? 'h-auto px-[20px] my-[40px]' : 'min-h-screen px-[clamp(40px,16%,310px)] mb-[120px]'}  box-border bg-[#FFF] flex items-center flex-col relative`}>
            {contextHolder}
            <div className={`absolute top-0 left-0 w-full ${isMobile ? 'h-[50%]' : 'h-[70%]'} bg-[url('/images/credit-client.png')] bg-cover bg-center`}></div>
            <div className={`w-full ${isMobile ? 'h-auto flex-col items-center gap-[40px]' : 'h-[70%] flex justify-between gap-[clamp(20px,4vw,40px)]'} py-[clamp(40px,5vh,60px)] box-border z-[2]`}>
                <div className={`flex flex-col justify-between ${isMobile ? 'w-full text-center px-[40px]' : 'w-[50%] h-full'}`}>
                    <div>
                        <div className={`font-[700] leading-[1.2] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
                            WEALTH SOLUTIONS FOR FAMILY OFFICES, CORPORATES, AND PRIVATE CLIENTS.
                        </div>
                        <div className={`mt-[clamp(12px,2vh,16px)] ${isMobile ? 'text-[14px]' : 'text-[clamp(14px,1.1vw,18px)]'}`}>
                            Accounts above $100,000 unlock access to a dedicated relationship manager, exclusive OTC services, custom terms, and rates.
                        </div>
                    </div>

                    <div className={`${isMobile ? 'mt-[30px] flex justify-center' : 'mt-[clamp(30px,5vh,40px)]'}`}>
                        <Button
                            className='font-[700] px-[25px] py-[17px] h-[46px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818]'
                            color="danger"
                            variant="solid"
                            size='large'
                            onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                        >
                            Learn more <RightOutlined />
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WealthSolutions;