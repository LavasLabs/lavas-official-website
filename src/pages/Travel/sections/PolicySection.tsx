const PolicySection = () => {
  return (
    <section className='text-[#0A0B11] px-[clamp(40px,16%,310px)] py-[170px] w-full max-w-[1920px] mx-auto min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
  <div className='px-[clamp(40px,16%,310px)] box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            CUSTOM TRAVEL POLICIES, BUILT RIGHT IN
          </div>
          <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Keep expenses in check as your business expands</div>
        </div>

        <div className='w-full h-auto mt-[clamp(20px,3vh,30px)]  box-border text-[#FFF]'>
          <div className='w-full min-h-[350px] px-[clamp(40px,5%,80px)] py-[clamp(20px,3vh,30px)] flex flex-wrap justify-between bg-[url("/images/travel-pricing-bg.png")] bg-cover bg-no-repeat box-border'>
            <div className='text-[clamp(36px,4vw,50px)] whitespace-nowrap mb-[20px]'>
              <img className='w-[clamp(40px,3.5vw,52px)] h-[clamp(40px,3.5vw,52px)]' src="/images/white-red-icon.png" alt="" />
              <div className='font-[700]'>Flight Policy</div>
            </div>
            <div className='flex-1 min-w-[300px] items-end flex flex-col justify-between text-[clamp(16px,1.2vw,20px)]'>
              <div className='p-[16px] mt-[clamp(40px,8vh,82px)] w-[clamp(250px,30%,303px)] box-border bg-[#16D165] rounded-[6px] flex items-center justify-center'>Travel expense control</div>
              <div className='w-full flex flex-wrap justify-end gap-[10px] text-[#0A0B11] whitespace-nowrap mt-[20px]'>
                <div className='px-[22px] py-[12px] gap-[12px] box-border rounded-[6px] flex items-center justify-center bg-[#FFF] flex-wrap'>
                  <div>Book up to</div>
                  <div className='p-[8px] flex items-center justify-center bg-[rgba(94,37,37,0.2)] rounded-[9px]'>25% above</div>
                  <div>avg.price</div>
                </div>
                <div className='p-[18px] box-border rounded-[6px] flex items-center justify-center bg-[#FFF]'>
                  <i className='iconfont icon-coupon text-[clamp(16px,1.2vw,20px)] mr-[8px]'></i>Economy only
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-[300px] px-[clamp(40px,5%,80px)] pt-[clamp(30px,4vh,6%)] flex flex-wrap items-center justify-between box-border relative'>
            <div className='w-[40%]'>
              <img className='w-[30%] h-auto object-cover absolute top-[-36%] left-[clamp(40px,5%,80px)]' src="/images/travel-view.png" />
            </div>
            <div className='w-[60%] text-[#0A0B11]'>
              <div className='text-[clamp(20px,2vw,26px)] font-[700]'>Set precise controls before takeoff</div>
              <div className='mt-[12px] opacity-60 text-[clamp(14px,1.1vw,16px)]'>Customize guardrails to prevent out-of-policy spend, from per-diems to hotel rates. Lavas Labs can also create flexible controls based on market rate</div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default PolicySection;