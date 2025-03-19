import useGlobalStore from '../../../store/useGlobalStore';

const ControlSection = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`text-[#0A0B11] w-full ${isMobile ? 'h-auto px-[20px] py-[40px]' : 'h-screen px-[clamp(40px,16%,310px)] py-[170px]'} max-w-[1920px] mx-auto box-border bg-[#FFF] flex items-center flex-col relative`}>
      <div className='absolute top-[0px] left-[0px] w-full h-[50%] bg-[#F3F3F3]'></div>
      <div className={`w-full h-full box-border ${isMobile ? 'flex-col gap-[30px]' : 'flex gap-[40px]'} flex justify-center items-center`}>
        {!isMobile && (
          <div className='w-[50%] z-[999]'>
            <img className='w-full h-auto object-contain' src="/images/travel-view-phone.png" alt="" />
          </div>
        )}
        <div className={`${isMobile ? 'w-full px-[20px]' : 'w-[50%]'} z-[999]`}>
          <div className={`${isMobile ? 'text-[20px] text-center' : 'text-[clamp(20px,2vw,26px)]'} font-[700]`}>Set precise controls before takeoff</div>
          <div className={`${isMobile ? 'text-[14px] text-center' : 'text-[clamp(14px,1.1vw,16px)]'} mt-[8px] opacity-60`}>Customize guardrails to prevent out-of-policy spend, from per-diems to hotel rates. Lavas Labs can also create flexible controls based on market rate</div>
          <div className={`${isMobile ? 'text-[20px] text-center' : 'text-[clamp(20px,2vw,26px)]'} font-[700] mt-[20px]`}>Incentivize employees to spend less</div>
          <div className={`${isMobile ? 'text-[14px] text-center' : 'text-[clamp(14px,1.1vw,16px)]'} mt-[8px] opacity-60`}>Opt to split savings with employees that book more cost-effective options.</div>

          {isMobile && (
            <div className='w-full flex flex-col gap-[20px] mt-[40px] items-center'>
              <img className='w-[80%] h-auto object-contain' src="/images/travel-view-phone.png" alt="" />
              <img className='w-[90%] h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/images/travel-view-phone-first.png" alt="" />
              <img className='w-[90%] h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/images/travel-view-phone-second.png" alt="" />
            </div>
          )}

          {!isMobile && (
            <div className='w-full flex flex-col gap-[20px] mt-[100px]'>
              <img className='w-[400px] h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/images/travel-view-phone-first.png" alt="" />
              <img className='w-[400px] h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/images/travel-view-phone-second.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ControlSection;