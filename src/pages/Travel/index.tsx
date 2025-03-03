import { useTranslation } from 'react-i18next';
import { Button, Divider, Tooltip } from 'antd';

const Home = () => {
  // const { t } = useTranslation();

  const logoUrlList = [
    '/src/assets/logos/card-logo1.svg',
    '/src/assets/logos/card-logo2.svg',
    '/src/assets/logos/card-logo3.svg',
    '/src/assets/logos/card-logo4.svg',
    '/src/assets/logos/card-logo5.svg',
    '/src/assets/logos/card-logo6.svg',
    '/src/assets/logos/card-logo7.svg',
    '/src/assets/logos/card-logo8.svg',
    '/src/assets/logos/card-logo9.svg',
    '/src/assets/logos/card-logo10.svg',
  ];

  return (
    <>
      {/* 第一页 */}
      <section className='text-[#0A0B11] w-full h-[calc(100vh-100px)] box-border relative overflow-hidden bg-[#FFF]'>
        <img className='w-[600px] h-auto object-contain absolute right-[20px] bottom-[0px]' src="/src/assets/images/travel-air.png" alt="Lavas" />
        <div className='px-[250px] pt-[40px] w-full box-border'>
          <div className='flex' >
            <div>
              <div className='font-sora text-[40px] font-bold uppercase inline-block w-[600px] z-[9999999]'>
                Smarter business travel, from booking to book close
              </div>
              <div className='w-[600px] mt-[10px]'>
                Book flights and hotels at the lowest rates, automatically enforce customizable travel policies, and automate expenses throughout a trip—all from one platform.
              </div>
              <div className='mt-[130px]'>
                <Button className='font-bold' color="danger" variant="solid" shape="round" size='large'>
                  Start for Free
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 第二页 */}
      <section className='text-[#0A0B11] w-full h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center pt-[60px]'>
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1]'>Custom travel policies, built right in</div>
          <div className='text-[20px]'>Keep expenses in check as your business expands</div>
        </div>

        <div className='w-full h-[70%] mt-[30px] px-[250px] box-border text-[#FFF]'>
          <div className='w-full h-[50%] px-[80px] py-[30px] flex justify-between bg-[url("/src/assets/images/travel-pricing-bg.png")] bg-cover bg-no-repeat bg-center box-border'>
            <div className='text-[50px]'>Flight Policy</div>
            <div className='h-full flex flex-col justify-between text-[22px]'>
              <div className='p-[20px] box-border bg-[#16D165] w-[303px] rounded-[6px] flex items-center justify-center'>Travel expense control</div>
              <div className='flex items-center gap-[10px] '>
                <div className='p-[18px] box-border bg-[#16D165] w-[303px] rounded-[6px] flex items-center justify-center'>Travel expense control</div>
                <div className='p-[18px] box-border bg-[#16D165] w-[60px] rounded-[6px] flex items-center justify-center'>123</div>
              </div>
            </div>
          </div>
          <div className='w-full h-[50%] px-[80px] py-[30px] flex justify-between box-border relative'>
            <img className='absolute bottom-[0px] left-[80px] w-[280px] object-cover z-[999]' src="/src/assets/images/travel-view.png" />


            <div className='text-[#0A0B11] ml-auto w-[55%]'>
              <div className='text-[26px] font-[700]'>Set precise controls before takeoff</div>
              <div className='mt-[12px] opacity-60'>Customize guardrails to prevent out-of-policy spend, from per-diems to hotel rates. Lavas Labs can also create flexible controls based on market rate</div>
            </div>
          </div>
        </div>
      </section>
      {/* 第三页 */}
      <section className='text-[#0A0B11] w-full h-screen box-border bg-[#FFF] flex items-center flex-col relative'>
        <div className='absolute top-0 left-0 w-full h-[50%] bg-[#F3F3F3]'></div>
        <div className='w-full h-full pl-[8%] pr-[10%] box-border flex gap-[40px] justify-center items-center'>
          <div className='w-[50%] z-[999]'>
            <img className='w-full h-auto object-contain' src="/src/assets/images/travel-view-phone.png" alt="Lavas" />
          </div>
          <div className='w-[50%] z-[999]'>
            <div className='text-[26px] font-[700]'>Set precise controls before takeoff</div>
            <div className='mt-[8px] opacity-60'>Customize guardrails to prevent out-of-policy spend, from per-diems to hotel rates. Lavas Labs can also create flexible controls based on market rate</div>
            <div className='text-[26px] font-[700] mt-[20px]'>Incentivize employees to spend less</div>
            <div className='mt-[8px] opacity-60'>Opt to split savings with employees that book more cost-effective options.</div>

            <div className='w-full flex flex-col gap-[20px] mt-[100px]'>
              <img className='w-[400px] h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/src/assets/images/travel-view-phone-first.png" alt="Lavas" />
              <img className='w-[400px] h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/src/assets/images/travel-view-phone-second.png" alt="Lavas" />
            </div>

          </div>
        </div>
      </section>
      {/* 第四页 */}
      <section className='text-[#0A0B11] px-[250px] h-screen py-[120px] w-full box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center gap-[20px] '>
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1]'>Effortless business travel that’s always in policy</div>
          <div className='text-[20px]'>Designed to make saving easier.</div>
        </div>

        <div className='w-full mt-[50px] flex justify-center'>
          <img className='max-w-full object-cover' src="/src/assets/images/travel-map.png" alt="Lavas" />
        </div>
      </section>
      {/* 第五页 */}
      <section className='text-[#FFF] px-[10%] h-screen w-full box-border bg-[#FFF] flex items-center flex-col relative'>
        <div className='absolute top-0 left-0 w-full h-[70%] bg-[#000]'></div>
        <div className='flex w-full h-[70%] py-[40px] box-border z-[9999] justify-between'>
          <div className='w-[50%] h-full flex flex-col justify-between'>
            <div className='w-full'>
              <div className='text-[42px] font-[700] space-y-[10px] leading-[1]'>Effortless business travel that’s always in policy</div>
              <div className='text-[18px] mt-[16px]'>Lavas Labs collects and matches receipts across all transactions, and routes to the right budget and category. It instantly generates receipts for certain purchases, and saves recurring memos.</div>
            </div>

            <div>
              <Button className='font-bold' color="danger" variant="solid" size='large'>
                Learn more
              </Button>
            </div>

          </div>
          <div className='w-[36%]'>
            <img className='w-full h-auto object-contain shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)] rounded-[30px]' src="/src/assets/images/travel-reports.png" alt="Lavas" />
          </div>
        </div>

      </section>
      {/* 第六页 */}
      <section className='text-[##0A0B11] w-full box-border bg-[#FFF] flex items-center flex-col'>
        <div className='flex flex-col justify-center items-center gap-[20px] '>
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1]'>Effortless business travel that’s always in policy</div>
          <div className='text-[20px]'>Designed to make saving easier.</div>
        </div>
        <div className='mt-[40px] pt-[5%] pb-[10%] pl-[10%] pr-[2%] w-full h-[800px] bg-[url("/src/assets/images/travel-oversee-bg.png")] bg-cover bg-no-repeat bg-center flex box-border'>
          <div className='w-[50%] flex flex-col justify-between'>
            <img className='w-[70%] bg-[rgba(255,255,255,0.60)] shadow-[0px_40px_88px_0px_rgba(0,0,0,0.15)]  backdrop-blur-[7.5px] rounded-[20px]' src="/src/assets/images/travel-happen-th.png" alt="Lavas" />
            <img className='w-[50%] rounded-[22px]' src="/src/assets/images/travel-happen-fo.png" alt="Lavas" />
          </div>

          <div className='w-[50%] flex flex-col justify-between'>
            <img className='w-[70%] bg-[rgba(255,255,255,0.60)] ml-[20%] shadow-[0px_2px_50px_0px_rgba(0,0,0,0.10)]  backdrop-blur-[7.5px]  rounded-[20px]' src="/src/assets/images/travel-happen-fir.png" alt="Lavas" />
            <img className='w-[60%] shadow-[0px_2px_87.5px_0px_rgba(0,0,0,0.10)] rounded-[12px]' src="/src/assets/images/travel-happen-sec.png" alt="Lavas" />
          </div>
        </div>
      </section>
    </>


  );
};

export default Home;