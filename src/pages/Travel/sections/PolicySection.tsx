import useGlobalStore from '../../../store/useGlobalStore';
import { ArrowRightOutlined } from '@ant-design/icons';

const PolicySection = () => {
  const { isMobile,isTablet } = useGlobalStore();

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex justify-center items-center flex-col text-[#0A0B11] ${isMobile ? 'px-[0px] py-[70px] h-auto' : 'px-[clamp(40px,16%,310px)] py-[170px] min-h-screen '}`}>
      <div className={`w-full max-w-[1920px] mx-auto flex flex-col items-center relative box-border ${isMobile ? 'px-[50px]' : 'px-[clamp(40px,16%,310px)]'}`}>
        <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
          <img className={`h-auto object-contain absolute top-[-40%] ${isMobile ? 'w-[30px] right-[-8%]' : 'w-[52px] right-[-10%]'}`} src="/images/black-red-icon.png" alt="" />
          CUSTOM TRAVEL POLICIES, BUILT RIGHT IN
        </div>
        <div className={`mt-[10px] text-center ${isMobile ? 'text-[14px]' : 'text-[clamp(16px,1.5vw,20px)]'}`}>Keep expenses in check as your business expands</div>
      </div>

      <div className='w-full h-auto mt-[clamp(20px,3vh,30px)] box-border text-[#FFF]'>
        <div className={`w-full flex flex-wrap justify-between bg-[url("/images/travel-pricing-bg.png")] bg-cover bg-no-repeat box-border ${isMobile ? 'min-h-[200px] px-[40px] py-[30px]' : 'min-h-[350px] px-[clamp(40px,5%,80px)] py-[clamp(20px,3vh,30px)]'}`}>
          <div className={isMobile ? 'flex items-center justify-between w-full mb-[20px]' : ''}>
            <div className={`whitespace-nowrap ${isMobile ? 'text-[28px]' : 'text-[clamp(36px,4vw,50px)] mb-[20px]'}`}>
              <img className={`${isMobile ? 'w-[30px] h-[30px]' : 'w-[clamp(40px,3.5vw,52px)] h-[clamp(40px,3.5vw,52px)]'}`} src="/images/white-red-icon.png" alt="" />
              <div className='font-[700]'>Flight Policy</div>
            </div>
            {isMobile && (
              <div className='p-[8px] bg-[#16D165] rounded-[6px] flex items-center justify-center text-[12px] box-border'>
                <span className='mr-[2px] whitespace-nowrap'>Travel expense control</span><ArrowRightOutlined />
              </div>
            )}
          </div>
          <div className={`items-end flex flex-col justify-between ${isMobile ? 'w-full h-[18vh] text-[14px]' : 'flex-1 min-w-[300px] text-[clamp(16px,1.2vw,20px)]'}`}>
            {!isMobile && (
              <div className='p-[16px] mt-[clamp(40px,8vh,82px)] w-[clamp(250px,30%,303px)] bg-[#16D165] rounded-[6px] flex items-center justify-center cursor-pointer box-border'>
                <span className='mr-[4px]'>Travel expense control</span><ArrowRightOutlined />
              </div>
            )}
            <div className={`w-full flex flex-wrap text-[#0A0B11] whitespace-nowrap ${isMobile ? 'justify-between mt-[15px] gap-[4px]' : 'justify-end gap-[10px] mt-[20px]'}`}>
              <div className={`box-border rounded-[6px] flex items-center justify-between bg-[#FFF] whitespace-nowrap ${isMobile ? 'w-[calc(60%-2px)] px-[8px] py-[6px] text-[9px] gap-[4px]' : 'px-[22px] py-[12px] gap-[12px]'}`}>
                <div>Book up to</div>
                <div className='p-[6px] flex items-center justify-center bg-[rgba(94,37,37,0.2)] rounded-[9px] whitespace-nowrap'>25% above</div>
                <div>avg.price</div>
              </div>
              <div className={`box-border rounded-[6px] flex items-center justify-center bg-[#FFF] whitespace-nowrap ${isMobile ? 'w-[calc(40%-2px)] px-[8px] py-[6px] text-[11px]' : 'p-[18px]'}`}>
                <i className={`iconfont icon-coupon mr-[4px] ${isMobile ? 'text-[11px]' : 'text-[clamp(16px,1.2vw,20px)]'}`}></i>Economy only
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full flex flex-wrap items-center justify-between box-border relative ${isMobile ? 'h-auto py-[30px] px-[10px] gap-[10px]' : 'h-[300px] px-[clamp(40px,5%,80px)] pt-[clamp(30px,4vh,6%)]'}`}>
          <div className={`${isMobile ? 'w-[calc(60%-10px)] h-auto' : 'w-[40%]'}`}>
            <img 
              className={`object-cover h-auto absolute ${
                isMobile 
                  ? 'w-[46%] left-[30px] top-[-36%]' 
                  : isTablet 
                    ? 'w-[25%] left-[30px] top-[-20%]'
                    : 'w-[30%] left-[clamp(40px,5%,80px)] top-[-36%]'
              }`} 
              src="/images/travel-view.png" 
            />
          </div>
          <div className={`text-[#0A0B11] ${isMobile ? 'w-[40%]' : 'w-[60%]'}`}>
            <div className={`font-[700] ${isMobile ? 'text-[16px] leading-[1.2]' : 'text-[clamp(20px,2vw,26px)]'}`}>Set precise controls before takeoff</div>
            <div className={`opacity-60 ${isMobile ? 'mt-[8px] text-[11px] leading-[1.3]' : 'mt-[12px] text-[clamp(14px,1.1vw,16px)]'}`}>
              Customize guardrails to prevent out-of-policy spend, from per-diems to hotel rates. Lavas Labs can also create flexible controls based on market rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;