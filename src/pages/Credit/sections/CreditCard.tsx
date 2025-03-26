import { Button, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useGlobalStore from '../../../store/useGlobalStore';

const CreditCard = () => {
    const { isMobile } = useGlobalStore();
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <section className={`text-[#0A0B11] w-full box-border bg-[#FFF] flex justify-center items-center flex-col ${isMobile ? 'py-[80px] px-[0px] h-auto' : 'min-h-screen pb-[80px]'}`}>
            {contextHolder}
            <div className={`box-border w-full max-w-[1920px] mx-auto text-center ${isMobile ? 'px-[40px]' : ''}`}>
                <div className={`relative font-[700] max-w-[800px] mx-auto ${isMobile ? 'text-[24px] w-full' : 'text-[42px] w-[70%]'}`}>
                    <img className={`absolute h-auto ${isMobile ? 'w-[30px] right-[-8%] top-[-36%]' : 'w-[52px] right-[-10%] top-[-22%]'}`} src="/images/black-red-icon.png" alt="" />
                    MAKE THE MOST OF YOUR CREDIT LINE WITH THE NEXO CARD.
                </div>
            </div>

            <div className={`w-full flex max-w-[1920px] mx-auto box-border ${isMobile ? 'flex-col mt-[40px]' : 'h-full min-h-[600px] mt-[6%] pl-[clamp(40px,16%,310px)]'}`}>
                <div className={`relative h-full ${isMobile ? 'w-full mb-[30px] px-[20px] box-border' : 'w-[40%] flex flex-col gap-[60px]'}`}>
                    <div className='flex flex-col gap-[40px] pr-[10%] box-border'>
                        <div className='flex items-center gap-[20px]'>
                            <i className='iconfont icon-Cashback text-[38px]'></i>
                            <div className='text-[20px] font-[400]'>Get up to 2% crypto cashback on any purchase.</div>
                        </div>
                        <div className='flex items-center gap-[20px]'>
                            <i className='iconfont icon-consumption text-[38px]'></i>
                            <div className='text-[20px] font-[400]'>Spend without selling your digital assets.</div>
                        </div>
                        <div className='flex items-center gap-[20px]'>
                            <i className='iconfont icon-a-accountnumber text-[38px]'></i>
                            <div className='text-[20px] font-[400]'>The more you top up your Volcano account, the more you can borrow and spend.</div>
                        </div>
                    </div>
                    <div>
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
                <div className={`relative box-border ${isMobile ? 'w-full h-[400px] mt-[100px]' : 'w-[60%] pl-[10%] pt-[10%]'}`}>
                    <img className={`${isMobile ? 'w-full' : 'w-full absolute right-[0px] top-[0px]'}`} src="/images/credit-line.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default CreditCard;