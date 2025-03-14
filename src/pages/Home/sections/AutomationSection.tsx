const AutomationSection = () => {
  return (
    <section className='text-[#0A0B11] py-[170px] w-full min-h-screen box-border relative overflow-hidden bg-[#FFF]'>
      <div className='absolute top-[0px] right-[0px] w-1/2 h-full pt-[170px] pb-[120px] box-border'>
        <img className='w-full h-full object-cover' src="/images/card-bg-black.png" alt="" />
      </div>
      <div className='px-[clamp(40px,16%,310px)] w-full max-w-[1920px] mx-auto box-border relative'>
        <div className='flex justify-between items-start gap-[5%]'>
          <div className='w-[45%] box-border leading-[1.2] relative z-[2]'>
            <div className='text-[clamp(32px,3.5vw,40px)] font-[700] relative'>
              <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-10%]' src="/images/black-red-icon.png" alt="" />
              <span>Automation, control, and rewards.The corporate card you've been looking for</span>
            </div>
            <div className='text-[clamp(16px,1.5vw,20px)] mt-[20px]'>
              Spend to get cashback. Lavas Labs's corporate card puts money back in your pocket so you can invest even more in growth. Or, bring your cash back right into the platform
            </div>
          </div>

        </div>

        <div className='w-[75%] flex gap-[clamp(20px,2vw,50px)] items-stretch mt-[100px]'>
          <div className='flex-1 text-[#FFFFFF] bg-[#0A0B11] min-h-[200px] rounded-[12px] p-[30px] box-border flex flex-col justify-between shadow-[0px_20px_50px_0px_rgba(185,185,185,0.40)]'>
            <i className='iconfont icon-U text-[32px]'></i>
            <div className='font-[500] text-[clamp(16px,1.2vw,18px)]'>
              Statement credit
            </div>
          </div>
          <div className='flex-1 text-[#0A0B11] bg-[#FFF] min-h-[200px] rounded-[12px] p-[30px] box-border flex flex-col justify-between shadow-[0px_20px_50px_0px_rgba(185,185,185,0.40)]'>
            <i className='iconfont icon-flexible text-[32px]'></i>
            <div className='font-[500] text-[clamp(16px,1.2vw,18px)]'>
              Gift cards & loyalty program points
            </div>
          </div>
          <div className='flex-1 text-[#0A0B11] bg-[#FFF] min-h-[200px] rounded-[12px] p-[30px] box-border flex flex-col justify-between shadow-[0px_20px_50px_0px_rgba(185,185,185,0.40)]'>
            <i className='iconfont icon-Return text-[32px]'></i>
            <div className='font-[500] text-[clamp(16px,1.2vw,18px)]'>
              Ramp fees
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;