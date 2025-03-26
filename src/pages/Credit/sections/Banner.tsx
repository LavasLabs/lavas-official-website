import { Button, message } from 'antd';
import useGlobalStore from '../../../store/useGlobalStore';

const Banner = () => {
    const { isMobile } = useGlobalStore();
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <section className={`w-full max-w-[1920px] mx-auto relative overflow-hidden text-[#0A0B11] box-border ${isMobile ? 'px-[20px]  h-auto' : 'px-[clamp(40px,13%,250px)] pb-[20px] min-h-[calc(100vh-100px)]'}`}>
            {contextHolder}
            <div className='w-full rounded-[20px] h-[70vh] px-[8%] py-[6%] box-border flex mt-[clamp(40px,5vh,80px)] bg-contain bg-center bg-no-repeat relative'>
                <img src="/images/credit-banner.png" className='z-[99] w-full h-full absolute top-[0px] left-[0px] object-cover rounded-[20px]' />
                <div className='w-[50%] text-[#FFF] text-left z-[100] font-[700] relative text-[32px] leading-[90%] [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)]'>
                    Borrow funds from 2.9% annual interest without selling your digital assets.
                </div>
                <div className='w-[50%] h-full text-[#FFF] text-right z-[100] font-[700] relative flex items-end text-[50px] leading-[95%] [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)]'>
                    Accelerate your ambitions with a crypto Credit Line.
                </div>
            </div>
            <div className='w-full box-border min-h-[56vh]  flex justify-between'>
                <div className='w-[30%] box-border relative'>
                    <img src="/images/credit-phone.png" className='absolute w-[75%] left-[40%] top-[-40%] z-[999]' />
                </div>
                <div className='w-[60%] box-border py-[80px]'>
                    <div className='flex justify-between items-center mb-[16%]'>
                        <div className='text-[#0A0B11]'>
                            <div className='font-[400] text-[20px]'>Operating</div>
                            <div className='font-[700] text-[22px] mt-[10px]'>since 2018</div>
                        </div>
                        <div className='w-[1px] h-[40px] bg-[#0A0B11] opacity-30'></div>
                        <div className='text-[#0A0B11]'>
                            <div className='font-[400] text-[20px]'>Personalized</div>
                            <div className='font-[700] text-[22px] mt-[10px]'>client care 24/7</div>
                        </div>
                        <div className='w-[1px] h-[40px] bg-[#0A0B11] opacity-30'></div>
                        <div className='text-[#0A0B11]'>
                            <div className='font-[400] text-[20px]'>Assets under management</div>
                            <div className='font-[700] text-[22px] mt-[10px]'>$11+ billion</div>
                        </div>
                    </div>
                    <Button
                        className={`font-[700] h-[46px] ${isMobile ? 'px-[20px] py-[12px] w-[140px]' : 'px-[25px] py-[17px] w-[160px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818]'}`}
                        color="danger"
                        variant="solid"
                        shape="round"
                        size='large'
                        onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                    >
                        sign up
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;