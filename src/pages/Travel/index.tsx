// import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const Travel = () => {
  // const { t } = useTranslation();

  return (
    <>
      {/* 第一页 */}
      <section className='text-[#0A0B11] w-full min-h-[calc(100vh-100px)] box-border relative overflow-hidden bg-[#FFF]'>
        <img className='w-[clamp(300px,45%,800px)] h-auto object-contain absolute right-[20px] bottom-[0px]' src="/images/travel-air.png" alt="" />
        <div className='px-[clamp(40px,13%,250px)] pt-[clamp(40px,5vh,80px)] max-w-[1920px] mx-auto box-border flex'>
          <div className='w-full max-w-[800px]'>
            <div className='font-sora font-[700] text-[clamp(28px,3.5vw,40px)] font-bold uppercase'>
              Smarter business travel, from booking to book close
            </div>
            <div className='mt-[10px] max-w-[600px] text-[clamp(14px,1.1vw,16px)] opacity-80'>
              Book flights and hotels at the lowest rates, automatically enforce customizable travel policies, and automate expenses throughout a trip—all from one platform.
            </div>
            <div className='mt-[clamp(60px,13vh,130px)]'>
              <Button
                className='font-[700] px-[25px] py-[17px] h-[46px] w-[160px]'
                color="danger"
                variant="solid"
                shape="round"
                size='large'
                onClick={() => window.location.href = '/contact'}
              >
                Start for Free
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 第二页 */}
      <section className='text-[#0A0B11] px-[clamp(40px,16%,310px)] py-[170px] w-full max-w-[1920px] mx-auto min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='px-[clamp(40px,16%,310px)] box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            Custom travel policies, built right in
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
      {/* 第三页 */}
      <section className='text-[#0A0B11] w-full h-screen px-[clamp(40px,16%,310px)] py-[170px] max-w-[1920px] mx-auto box-border bg-[#FFF] flex items-center flex-col relative'>
        <div className='absolute top-[0px] left-[0px] w-full h-[50%] bg-[#F3F3F3]'></div>
        <div className='w-full h-full box-border flex gap-[40px] justify-center items-center'>
          <div className='w-[50%] z-[999]'>
            <img className='w-full h-auto object-contain' src="/images/travel-view-phone.png" alt="" />
          </div>
          <div className='w-[50%] z-[999]'>
            <div className='text-[clamp(20px,2vw,26px)] font-[700]'>Set precise controls before takeoff</div>
            <div className='text-[clamp(14px,1.1vw,16px)] mt-[8px] opacity-60'>Customize guardrails to prevent out-of-policy spend, from per-diems to hotel rates. Lavas Labs can also create flexible controls based on market rate</div>
            <div className='text-[clamp(20px,2vw,26px)] font-[700] mt-[20px]'>Incentivize employees to spend less</div>
            <div className='text-[clamp(14px,1.1vw,16px)] mt-[8px] opacity-60'>Opt to split savings with employees that book more cost-effective options.</div>

            <div className='w-full flex flex-col gap-[20px] mt-[100px]'>
              <img className='w-[400px] h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/images/travel-view-phone-first.png" alt="" />
              <img className='w-[400px] h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/images/travel-view-phone-second.png" alt="" />
            </div>

          </div>
        </div>
      </section>
      {/* 第四页 */}
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
      {/* 第五页 */}
      <section className='text-[#FFF] w-full max-w-[1920px] mx-auto px-[clamp(40px,16%,310px)] my-[170px] min-h-screen box-border bg-[#FFF] flex items-center flex-col relative'>
        <div className='absolute top-0 left-0 w-full h-[70%] bg-[#000]'></div>
        <div className='flex w-full h-[70%] py-[clamp(40px,5vh,60px)] box-border z-[2] justify-between gap-[clamp(20px,4vw,40px)]'>
          <div className='w-[50%] h-full flex flex-col justify-between'>
            <div className='w-full'>
              <div className='text-[clamp(32px,3.5vw,42px)] font-[700] leading-[1.2] relative'>
                <img className='w-[clamp(40px,3.5vw,52px)] h-auto object-contain absolute right-[0px] top-[-20px]' src="/images/white-red-icon.png" alt="" />
                Effortless business travel that's always in policy
              </div>
              <div className='text-[clamp(14px,1.1vw,18px)] mt-[clamp(12px,2vh,16px)] opacity-80'>Lavas Labs collects and matches receipts across all transactions, and routes to the right budget and category. It instantly generates receipts for certain purchases, and saves recurring memos.</div>
            </div>

            <div className='mt-[clamp(30px,5vh,40px)]'>
              <Button className='font-[700] px-[25px] py-[17px] h-[46px]' color="danger" variant="solid" size='large'>
                Learn more
              </Button>
            </div>
          </div>
          <div className='w-[50%] pl-[10%] box-border'>
            <img className='w-full max-w-[600px] mx-auto h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[30px]' src="/images/travel-reports.png" alt="" />
          </div>
        </div>
      </section>
      {/* 第六页 */}
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
    </>


  );
};

export default Travel;