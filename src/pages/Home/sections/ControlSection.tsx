const ControlSection = () => {
  return (
    <section className='text-[#0A0B11] w-full min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col py-[170px]'>
    <div className='px-[clamp(40px,16%,310px)] box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-2%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            BUILD CONTROL INTO THE CARD, BEFORE SPEND EVEN HAPPENS.
          </div>
          <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Don't compromise on growth or control</div>
        </div>

        <div className='w-full px-[clamp(40px,16%,310px)] box-border mt-[150px] max-w-[1920px] mx-auto'>
          <div className='flex gap-[clamp(20px,2vw,40px)] justify-between'>
            {/* 卡片1 */}
            <div className='w-[calc((100%-80px)/3)] min-h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
              <div className='absolute left-1/2 top-[-60px] transform -translate-x-1/2 w-full max-w-[264px]'>
                <img className='w-full h-auto object-contain' src="/images/Marketing.png" alt="" />
              </div>
              <div className='font-[700] text-[clamp(20px,2vw,24px)] mt-[10px]'>
                Marketing virtual cards
              </div>
              <div className='text-[16px] mt-[12px] text-[#626262]'>
                Get unlimited virtual cards for yourself or the employees, we make your money more safe.
              </div>
            </div>
            {/* 卡片2 */}
            <div className='w-[calc((100%-80px)/3)] min-h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
              <div className='absolute left-1/2 top-[-60px] transform -translate-x-1/2 w-full max-w-[264px]'>
                <img className='w-full h-auto object-contain' src="/images/Travel.png" alt="" />
              </div>
              <div className='font-[700] text-[clamp(20px,2vw,24px)] mt-[10px]'>
                Travel and expenses virtual card
              </div>
              <div className='text-[16px] mt-[12px] text-[#626262]'>
                Create custom virtual cards and set permissions for everything from ad marketplace spend to remote work stipends, for individual teams or your whole company.
              </div>
            </div>
            {/* 卡片3 */}
            <div className='w-[calc((100%-80px)/3)] min-h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
              <div className='absolute left-1/2 top-[-60px] transform -translate-x-1/2 w-full max-w-[264px]'>
                <img className='w-full h-auto object-contain' src="/images/Conference.png" alt="" />
              </div>
              <div className='font-[700] text-[clamp(20px,2vw,24px)] mt-[10px]'>
                Conference virtual card
              </div>
              <div className='text-[16px] mt-[12px] text-[#626262]'>
                Set spend limits or cancel cards any time you want.
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ControlSection;