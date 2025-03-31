import { Button, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useGlobalStore from '../../../store/useGlobalStore';

const cardFeatures = [
  {
    icon: 'icon-Cashback',
    text: 'Get up to 2% crypto cashback on any purchase.'
  },
  {
    icon: 'icon-consumption',
    text: 'Spend without selling your digital assets.'
  },
  {
    icon: 'icon-a-accountnumber',
    text: 'The more you top up your Volcano account, the more you can borrow and spend.'
  }
];

const CreditCard = () => {
    const { isMobile } = useGlobalStore();
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <section className={`text-[#0A0B11] w-full box-border bg-[#FFF] flex justify-center items-center flex-col ${isMobile ? 'py-[70px] mt-[50px]  h-auto' : 'min-h-screen pb-[80px]'}`}>
            {contextHolder}
            <div className={`box-border w-full max-w-[1920px] mx-auto text-center ${isMobile ? 'px-[40px]' : ''}`}>
                <div className={`relative font-[700] max-w-[800px] mx-auto ${isMobile ? 'text-[24px] w-full' : 'text-[42px] w-[70%]'}`}>
                    <img className={`absolute h-auto ${isMobile ? 'w-[30px] right-[-8%] top-[-36%]' : 'w-[52px] right-[-10%] top-[-22%]'}`} src="/images/black-red-icon.png" alt="" />
                    MAKE THE MOST OF YOUR CREDIT LINE WITH THE LAVAS CARD.
                </div>
            </div>

            <div className={`w-full flex max-w-[1920px] mx-auto box-border ${isMobile ? 'flex-col items-center' : 'h-full min-h-[600px] mt-[6%] pl-[clamp(40px,16%,310px)]'}`}>
                {/* 移动端先显示图片 */}
                {isMobile && (
                    <div className='w-full h-[300px] mt-[40px] mb-[40px] box-border'>
                        <img className='w-full h-full object-contain' src="/images/credit-line.png" alt="" />
                    </div>
                )}
                
                <div className={`relative h-full ${isMobile ? 'w-full px-[40px] box-border' : 'w-[40%] flex flex-col gap-[60px]'}`}>
                    <div className={`flex flex-col ${isMobile ? 'gap-[30px]' : 'gap-[40px]'} pr-[10%] box-border`}>
                        {cardFeatures.map((feature, index) => (
                            <div key={index} className='flex items-center gap-[20px]'>
                                <i className={`iconfont ${feature.icon} ${isMobile ? 'text-[32px]' : 'text-[38px]'}`}></i>
                                <div className={`font-[400] ${isMobile ? 'text-[16px]' : 'text-[20px]'}`}>{feature.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className={`${isMobile ? 'mt-[40px] flex justify-center' : ''}`}>
                        <Button
                            className={`font-[700] px-[25px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818] ${isMobile ? 'h-[40px]' : 'h-[46px] py-[17px]'}`}
                            color="danger"
                            variant="solid"
                            size={isMobile ? 'middle' : 'large'}
                            onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
                        >
                            Learn more <RightOutlined />
                        </Button>
                    </div>
                </div>
                
                {/* PC端显示图片 */}
                {!isMobile && (
                    <div className='relative w-[60%] pl-[10%] pt-[10%] box-border'>
                        <img className='w-full absolute right-[0px] top-[0px]' src="/images/credit-line.png" alt="" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default CreditCard;