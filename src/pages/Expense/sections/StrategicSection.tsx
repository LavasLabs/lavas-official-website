import { Space, Divider } from 'antd';
import useGlobalStore from '../../../store/useGlobalStore';

const StrategicSection = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`text-[#0A0B11] w-full box-border bg-[#FFF] flex justify-center items-center flex-col ${isMobile ? 'py-[70px]' : 'min-h-screen py-[170px]'}`}>
      <div className={`box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative ${isMobile ? 'px-[40px]' : ''}`}>
        <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
          <img className={`h-auto object-contain absolute ${isMobile ? 'w-[30px] right-[-8%] top-[-36%]' : 'w-[52px] right-[-10%] top-[-40%]'}`} src="/images/black-red-icon.png" alt="" />
          MAKE STRATEGIC DECISIONS WITH REAL-TIME EXPENSE REPORTING
        </div>
        <div className={`mt-[10px] text-center ${isMobile ? 'text-[14px] px-[20px]' : 'text-[clamp(16px,1.5vw,20px)]'}`}>Instantly access spend data and insight to save money for your business</div>
      </div>

      <div className={`w-full max-w-[1920px] box-border ${isMobile ? 'flex flex-col mt-[50px] px-[50px] gap-[40px]' : 'flex flex-row flex-1 h-full mt-[6%] px-[clamp(40px,16%,310px)] gap-[30px]'}`}>
        <div className={`box-border rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between ${isMobile ? 'w-full p-[20px]' : 'w-[calc(100%/3-14px)] p-[clamp(16px,2vw,24px)]'}`}>
          <div className='flex flex-col gap-[20px] justify-between'>
            <div className={`${isMobile ? 'text-[20px]' : 'text-[clamp(20px,2.5vw,24px)]'}`}>Get ahead of overspend</div>
            <div className={`opacity-60 ${isMobile ? 'text-[14px]' : 'text-[clamp(14px,1.5vw,16px)]'}`}>Stop making business decisions on stale data. Get real-time insights to make timely adjustments before your teams exceed their budget</div>
          </div>
          <div className={`font-[700] mt-[20px] ${isMobile ? 'text-[20px]' : 'text-[clamp(20px,2.5vw,24px)]'}`}>
            <Space className='flex-wrap'>
              <span className={`${isMobile ? 'text-[16px]' : 'text-[clamp(16px,1.8vw,18px)]'}`}>commercial affairs</span>
              <span className={`rounded-[8px] p-[8px] box-border bg-[#E6E7E7] ${isMobile ? 'text-[12px]' : 'text-[clamp(12px,1.4vw,14px)]'}`}>
                <span className='opacity-50 text-[#0A0B11]'>Year to date 2024</span>
              </span>
            </Space>
          </div>
          <Divider className={`${isMobile ? 'my-[16px]' : 'my-[clamp(16px,2vw,24px)]'}`}></Divider>
          <img className='w-full' src="/images/expense-shape-t.png" alt="" />
        </div>

        <div className={`box-border rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between ${isMobile ? 'w-full p-[20px]' : 'w-[calc(100%/3-14px)] p-[clamp(16px,2vw,24px)]'}`}>
          <div className='flex flex-col gap-[20px] justify-between'>
            <div className={`${isMobile ? 'text-[20px]' : 'text-[clamp(20px,2.5vw,24px)]'}`}>Maximize visibility with centralized data</div>
            <div className={`opacity-60 ${isMobile ? 'text-[14px]' : 'text-[clamp(14px,1.5vw,16px)]'}`}>Lavas Labs's AI-powered assistance surfaces detailed financial answers with faster analysis across every business expense</div>
          </div>
          <Divider className={`${isMobile ? 'my-[16px]' : 'my-[clamp(16px,2vw,24px)]'}`}></Divider>
          <img className='w-full' src="/images/expense-statistics.png" alt="" />
        </div>

        <div className={`box-border rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between ${isMobile ? 'w-full p-[20px]' : 'w-[calc(100%/3-14px)] p-[clamp(16px,2vw,24px)]'}`}>
          <div className='flex flex-col gap-[20px] justify-between'>
            <div className={`${isMobile ? 'text-[20px]' : 'text-[clamp(20px,2.5vw,24px)]'}`}>Uncover true costs</div>
            <div className={`opacity-60 ${isMobile ? 'text-[14px]' : 'text-[clamp(14px,1.5vw,16px)]'}`}>Lavas Labs continuously surfaces savings insights like duplicate subscriptions and unused solutions.</div>
            <Divider className={`${isMobile ? 'my-[16px]' : 'my-[clamp(16px,2vw,24px)]'}`}></Divider>
          </div>
          <Space direction='vertical' className='w-full'>
            <img className='w-full rounded-[12px] bg-[#FFF] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.10)]' src="/images/expense-coffee.png" alt="" />
            <img className='w-full rounded-[12px] bg-[#FFF] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.10)]' src="/images/expense-perk.png" alt="" />
          </Space>
        </div>
      </div>
    </section>
  );
};

export default StrategicSection;