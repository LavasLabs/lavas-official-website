import useGlobalStore from '../../../store/useGlobalStore';

const Ecosystem = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex  flex-col text-[#0A0B11] ${isMobile ? 'px-[0px] py-[70px] h-auto' : 'px-[clamp(40px,16%,310px)] pb-[170px] min-h-screen '}`}>
        <div className={`box-border w-full max-w-[1920px] mx-auto text-center ${isMobile ? 'px-[40px]' : ''}`}>
          <div className={`relative font-[700] max-w-[800px] mx-auto ${isMobile ? 'text-[24px] w-full' : 'text-[42px] w-[70%]'}`}>
            <img className={`absolute h-auto ${isMobile ? 'w-[30px] right-[-8%] top-[-36%]' : 'w-[52px] right-[-10%] top-[-22%]'}`} src="/images/black-red-icon.png" alt="" />
            UTILIZE THE ENTIRE VOLCANO ECOSYSTEM TO GROW YOUR WEALTH.
          </div>

        </div>
        <div className='flex flex-wrap text-[#0A0B11] gap-[20px] mt-[80px]'>
          <div className='w-[calc(100%/3-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
            <div>
              <i className='iconfont icon-a-Dualinvestment text-[38px]'></i>
              <div className='text-[20px] font-[600]'>Up to $200 million</div>
            </div>
            <div className='font-[400]'>Capitalize on uptrends anddowntrends with perpetuals.</div>
          </div>
          <div className='w-[calc(100%/3-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
            <div>
              <i className='iconfont icon-property text-[38px]'></i>
              <div className='text-[20px] font-[600]'>Up to $200 million</div>
            </div>
            <div className='font-[400]'>Earn high yields while buying lowand selling high.</div>
          </div>
          <div className='w-[calc(100%/3-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
            <div>
              <i className='iconfont icon-Exchange text-[38px]'></i>
              <div className='text-[20px] font-[600]'>Up to $200 million</div>
            </div>
            <div className='font-[400]'>Swap over 100 digital assetsseamlessly with a tap.</div>
          </div>
        </div>
      </section>
  );
};

export default Ecosystem;