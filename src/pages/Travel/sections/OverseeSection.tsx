import useGlobalStore from '../../../store/useGlobalStore';

const OverseeSection = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`w-full bg-[#FFF] flex items-center flex-col text-[#0A0B11] box-border ${isMobile ? 'mb-[40px] h-auto' : 'mb-[170px] min-h-screen '}`}>
      <div className={`w-full max-w-[1920px] mx-auto flex flex-col items-center relative box-border ${isMobile ? 'px-[40px]' : ''}`}>
        <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
          <img className={`h-auto object-contain absolute top-[-40%] ${isMobile ? 'w-[30px] right-[-8%]' : 'w-[52px] right-[-10%]'}`} src="/images/black-red-icon.png" alt="" />
          OVERSEE TRAVEL SPEND AS IT HAPPENS
        </div>
        <div className={`mt-[10px] text-center ${isMobile ? 'text-[14px]' : 'text-[clamp(16px,1.5vw,20px)]'}`}>Close the books without delays</div>
      </div>


      {isMobile ? (
        <div className='w-full mt-[clamp(30px,5vh,40px)] box-border'>
          <img 
            className='w-full h-auto object-contain'
            src="/images/travel-oversee.png" 
            alt="" 
          />
        </div>
      ) : (
        <div className='w-full mt-[clamp(30px,5vh,40px)] min-h-[800px] pl-[clamp(40px,16%,310px)] pr-[105px] py-[clamp(40px,8vh,80px)] flex justify-between gap-[clamp(20px,4vw,40px)] box-border bg-[url("/images/travel-oversee-bg.png")] bg-cover bg-no-repeat bg-center'>
          <div className='w-[50%] flex flex-col justify-between'>
            <img 
              className='max-w-[600px] w-[70%] bg-[rgba(255,255,255,0.60)] shadow-[0px_40px_88px_0px_rgba(0,0,0,0.15)] backdrop-blur-[7.5px] rounded-[20px]'
              src="/images/travel-happen-th.png" 
              alt="" 
            />
            <img 
              className='max-w-[400px] w-[70%] rounded-[22px]'
              src="/images/travel-happen-fo.png" 
              alt="" 
            />
          </div>

          <div className='w-[50%] flex flex-col justify-between'>
            <img 
              className='max-w-[600px] w-[70%] ml-auto bg-[rgba(255,255,255,0.60)] shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] backdrop-blur-[7.5px] rounded-[20px]'
              src="/images/travel-happen-fir.png" 
              alt="" 
            />
            <img 
              className='max-w-[500px] w-[70%] mr-[40%] shadow-[0px_2px_87.5px_0px_rgba(0,0,0,0.10)] rounded-[12px]'
              src="/images/travel-happen-sec.png" 
              alt="" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default OverseeSection;