import { Button, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';

const ExpenseSection = () => {
  const { isMobile } = useGlobalStore();
  const { t } = useTranslation('travel');
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <section className={`text-[#FFF] w-full max-w-[1920px] mx-auto ${isMobile ? 'h-auto px-[20px] my-[40px]' : 'min-h-screen px-[clamp(40px,16%,310px)] my-[170px]'}  box-border bg-[#FFF] flex items-center flex-col relative`}>
        <div className={`absolute top-[0px] left-[0px] w-full ${isMobile ? 'h-[50%]' : 'h-[70%]'} bg-[#000]`}></div>
        <div className={`w-full ${isMobile ? 'h-auto flex-col items-center gap-[40px]' : 'h-[70%] flex justify-between gap-[clamp(20px,4vw,40px)]'} py-[clamp(40px,5vh,60px)] box-border z-[2]`}>
          <div className={`${isMobile ? 'w-full text-center' : 'w-[50%] h-full'} flex flex-col justify-between`}>
            <div className={`w-full ${isMobile ? 'px-[40px] box-border' : ''}  `}>
              <div className={`${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'} font-[700] leading-[1.2] relative`}>
                <img className={`${isMobile ? 'w-[30px] right-[-20px] top-[-15px]' : 'w-[clamp(40px,3.0vw,52px)] right-[-30px] top-[-20px]'} h-auto object-contain absolute`} src="/images/white-red-icon.png" alt="" />
                {t('expense.title')}
              </div>
              <div className={`${isMobile ? 'text-[14px]' : 'text-[clamp(14px,1.1vw,18px)]'} mt-[clamp(12px,2vh,16px)] opacity-80`}>{t('expense.description')}</div>
            </div>

            <div className={`${isMobile ? 'mt-[30px] flex justify-center' : 'mt-[clamp(30px,5vh,40px)]'}`}>
              <Button 
                className='font-[700] px-[25px] py-[17px] h-[46px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-[#ff1818]' 
                color="danger" 
                variant="solid" 
                size='large'
                onClick={() => messageApi.info(t('messages.functionNotEnabled', { ns: 'components' }))}
              >
                {t('expense.learnMore')} <RightOutlined />
              </Button>
            </div>
          </div>
          <div className={`${isMobile ? 'w-full px-[20px] pt-[60px] flex justify-center items-center' : 'w-[50%] pl-[10%] pt-[2%]'} box-border`}>
            <img className={`${isMobile ? 'w-[90%]' : 'w-full max-w-[600px] mx-auto'} h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.25)] rounded-[30px]`} src="/images/travel-reports.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpenseSection;