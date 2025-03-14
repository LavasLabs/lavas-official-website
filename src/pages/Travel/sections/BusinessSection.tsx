const BusinessSection = () => {
  return (
    <section className='text-[#0A0B11] w-full max-w-[1920px] mx-auto px-[clamp(40px,16%,310px)] py-[170px] min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
      <div className='box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            EFFORTLESS BUSINESS TRAVEL THAT’S ALWAYS IN POLICY
          </div>
          <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Designed to make saving easier.</div>
        </div>

        <div className='w-full mt-[clamp(30px,5vh,50px)] flex justify-center'>
          <img className='w-full max-w-[1400px] h-auto object-contain' src="/images/travel-map.png" alt="" />
        </div>
    </section>
  );
};

export default BusinessSection;