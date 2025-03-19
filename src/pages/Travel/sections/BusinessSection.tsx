import useGlobalStore from '../../../store/useGlobalStore';

const BusinessSection = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`w-full max-w-[1920px] mx-auto  bg-[#FFF] flex justify-center items-center flex-col text-[#0A0B11] box-border ${isMobile ? 'h-auto px-[20px] py-[40px]' : 'min-h-screen px-[clamp(40px,16%,310px)] py-[170px]'}`}>
      <div className='w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
        <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
          <img className={`h-auto object-contain absolute top-[-40%] ${isMobile ? 'w-[30px] right-[2px]' : 'w-[52px] right-[-10%]'}`} src="/images/black-red-icon.png" alt="" />
          EFFORTLESS BUSINESS TRAVEL THAT'S ALWAYS IN POLICY
        </div>
        <div className={`mt-[10px] text-center ${isMobile ? 'text-[14px]' : 'text-[clamp(16px,1.5vw,20px)]'}`}>
          Designed to make saving easier.
        </div>
      </div>

      <div className={`w-full flex justify-center ${isMobile ? 'mt-[30px]' : 'mt-[clamp(30px,5vh,50px)]'}`}>
        <img className={`w-full h-auto object-contain ${isMobile ? 'max-w-full' : 'max-w-[1400px]'}`} src="/images/travel-map.png" alt="" />
      </div>
    </section>
  );
};

export default BusinessSection;