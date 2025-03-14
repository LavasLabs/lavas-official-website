const OverseeSection = () => {
  return (
    <section className='text-[#0A0B11] w-full box-border bg-[#FFF] mb-[170px] flex items-center flex-col min-h-screen'>
        <div className='box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            OVERSEE TRAVEL SPEND AS IT HAPPENS
          </div>
          <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Close the books without delays</div>
        </div>
        {/* px-[clamp(40px,16%,310px)] */}
        <div className='mt-[clamp(30px,5vh,40px)] w-full min-h-[800px] bg-[url("/images/travel-oversee-bg.png")] bg-cover bg-no-repeat bg-center pl-[clamp(40px,16%,310px)] pr-[105px] py-[clamp(40px,8vh,80px)] flex justify-between  gap-[clamp(20px,4vw,40px)] box-border'>
          <div className='w-[50%] flex flex-col justify-between'>
            <img className='w-[70%] max-w-[600px] bg-[rgba(255,255,255,0.60)] shadow-[0px_40px_88px_0px_rgba(0,0,0,0.15)] backdrop-blur-[7.5px] rounded-[20px]' src="/images/travel-happen-th.png" alt="" />
            <img className='w-[70%] max-w-[400px] rounded-[22px]' src="/images/travel-happen-fo.png" alt="" />
          </div>

          <div className='w-[50%] flex flex-col justify-between'>
            <img className='w-[70%] max-w-[600px] bg-[rgba(255,255,255,0.60)] ml-auto shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] backdrop-blur-[7.5px] rounded-[20px]' src="/images/travel-happen-fir.png" alt="" />
            <img className='w-[70%] max-w-[500px] mr-[40%] shadow-[0px_2px_87.5px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/images/travel-happen-sec.png" alt="" />
          </div>
        </div>
    </section>
  );
};

export default OverseeSection;