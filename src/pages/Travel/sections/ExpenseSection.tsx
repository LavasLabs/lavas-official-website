import { Button, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const ExpenseSection = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <section className='text-[#FFF] w-full max-w-[1920px] mx-auto px-[clamp(40px,16%,310px)] my-[170px] min-h-screen box-border bg-[#FFF] flex items-center flex-col relative'>
      <div className='absolute top-0 left-0 w-full h-[70%] bg-[#000]'></div>
        <div className='flex w-full h-[70%] py-[clamp(40px,5vh,60px)] box-border z-[2] justify-between gap-[clamp(20px,4vw,40px)]'>
          <div className='w-[50%] h-full flex flex-col justify-between'>
            <div className='w-full'>
              <div className='text-[clamp(32px,3.5vw,42px)] font-[700] leading-[1.2] relative'>
                <img className='w-[clamp(40px,3.0vw,52px)] h-auto object-contain absolute right-[-30px] top-[-20px]' src="/images/white-red-icon.png" alt="" />
                Focus on your trip, not expense reports
              </div>
              <div className='text-[clamp(14px,1.1vw,18px)] mt-[clamp(12px,2vh,16px)] opacity-80'>Lavas Labs collects and matches receipts across all transactions, and routes to the right budget and category. It instantly generates receipts for certain purchases, and saves recurring memos.</div>
            </div>

            <div className='mt-[clamp(30px,5vh,40px)]'>
              <Button 
                className='font-[700] px-[25px] py-[17px] h-[46px]' 
                color="danger" 
                variant="solid" 
                size='large'
                onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
              >
                Learn more <RightOutlined />
              </Button>
            </div>
          </div>
          <div className='w-[50%] pl-[10%] box-border pt-[2%]'>
            <img className='w-full max-w-[600px] mx-auto h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.25)] rounded-[30px]' src="/images/travel-reports.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpenseSection;