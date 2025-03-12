// import { useTranslation } from 'react-i18next';
import { Button, Divider } from 'antd';

const Home = () => {
  // const { t } = useTranslation();

  const logoUrlList = [
    '/logos/card-logo1.svg',
    '/logos/card-logo2.svg',
    '/logos/card-logo3.svg',
    '/logos/card-logo4.svg',
    '/logos/card-logo5.svg',
    '/logos/card-logo6.svg',
    '/logos/card-logo7.svg',
    '/logos/card-logo8.svg',
    '/logos/card-logo9.svg',
    '/logos/card-logo10.svg',
  ];

  return (
    <>
      <div className='w-[44vw] h-[44vw] absolute top-[-15vw] right-[12vw] rounded-full opacity-50 bg-gradient-to-b from-[#C31111] to-[#1A1C1F] blur-[2px] z-[10]'>
      </div>
      {/* 第一页 */}

      <section className='bg-[#0A0B11] text-[#FFFFFF] w-full min-h-[calc(100vh-100px)] pb-[40px] box-border relative overflow-hidden'>
        <div className='w-[25vw] h-[25vw] absolute top-[30%] right-[-14vw] rounded-full opacity-50 bg-gradient-to-b from-[#525252] to-[#1A1C1F] blur-[2px]'>
        </div>
        <div className='px-[clamp(40px,13%,250px)] w-full box-border'>
          <div className='flex  max-w-[1600px] mx-auto justify-between relative' >
            <div className='max-w-[55%] pt-[4%] box-border'>
              <div className='font-sora font-[700] text-[clamp(60px,8vw,110px)] font-bold uppercase inline-block bg-gradient-to-r from-[#FFFFFF] to-[#CA2A0F] bg-clip-text text-transparent whitespace-nowrap z-[102] relative'>
                Lavas Labs
              </div>
              <div className='text-[clamp(20px,2vw,24px)]'>
                A corporate card designed for modern finance.
              </div>
              <div className='text-[clamp(20px,2vw,24px)]'>
                Save money and time. All with one corporate card.
              </div>
              <div className='mt-[clamp(60px,10vh,130px)]'>
                <Button 
                  className='font-[700] px-[25px] py-[17px] h-[46px] w-[160px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-none' 
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
            <img className='z-[999] w-[45%] h-auto object-contain ml-[40px]' src="/images/card.png" alt="" />
            <div className='w-[clamp(30px,4vw,59px)] h-[clamp(30px,4vw,59px)] absolute top-[72%] right-[40%] rounded-full opacity-50 bg-gradient-to-t from-[#1A1C1F] to-[#525252] blur-[2px]'>
            </div>
          </div>
        </div>

        <div className='px-[clamp(40px,13%,250px)] box-border w-full mt-[2%]'>
          <div className='flex gap-[40px] flex-wrap max-w-[1600px] mx-auto'>
            <div className='w-[calc(25%-40px)]'>
              <div className='font-[700] relative'>
                <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                <span className='z-[999999] relative'>Save more by preventing out-of-policy spend</span>
              </div>
              <div className='text-[15px] opacity-60 mt-[8px]'>
                Preset controls on corporate cards for specific vendors and categories.
              </div>
            </div>
            <div className='w-[calc(25%-40px)]'>
              <div className='font-[700] relative'>
                <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                <span className='z-[100] relative'>Be free from expense reports.</span>
              </div>
              <div className='text-[15px] opacity-60 mt-[8px]'>
                Easily submit expenses through SMS, mobile app, and integrations.
              </div>
            </div>
            <div className='w-[calc(25%-40px)]'>
              <div className='font-[700] relative'>
                <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                <span className='z-[100] relative'>Unlock savings in real time</span>
              </div>
              <div className='text-[15px] opacity-60 mt-[8px]'>
                Get insight into spend as it happens, with a platform that pays off immediately.
              </div>
            </div>
            <div className='w-[calc(25%-40px)]'>
              <div className='font-[700] relative'>
                <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                <span className='z-[100] relative'>Grow your business with the right terms</span>
              </div>
              <div className='text-[15px] opacity-60 mt-[8px]'>
                Get rewards and perks, like 5% savings. There’s no personal credit checks or personal guarantee.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 第二页 */}
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
      {/* 第三页 */}
      <section className='bg-[#0A0B11] text-[#FFFFFF] w-full min-h-screen box-border relative overflow-hidden'>
        <img className='absolute top-[0px] left-[0px] w-[50%] object-cover' src="/images/third-logo.png" />
        <div className='px-[clamp(40px,16%,310px)] w-full max-w-[1920px] mx-auto box-border pt-[170px] relative z-[2]'>
          <div className='max-w-[800px]'>
            <div className='text-[clamp(32px,3.5vw,40px)] font-[700] relative'>
              <img className='w-[52px] h-auto object-contain absolute right-[10px] top-[-20px]' src="/images/white-red-icon.png" alt="" />
              <span>MORE VISIBILITY, MORE TIME BACK</span>
            </div>
            <div className='opacity-60 mt-[20px] text-[clamp(16px,1.2vw,18px)]'>
              <div>Focus on your work, not follow ups.</div>
              <div>Let Lavas Labs send reminders for missing items or request repayments for you. Spend less time chasing down receipts and more time closing your books.</div>
            </div>
            <div className='text-[clamp(20px,2vw,24px)] mt-[60px] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[6px]' src="/images/text-front-icon.png" alt="" />
              <span className='z-[999999] relative'>Simplify approvals and share accountability</span>
            </div>
            <div className='mt-[20px] text-[clamp(16px,1.2vw,18px)] relative'>
              <div className='opacity-60 '>Focus on your work, not follow ups.</div>
              <div className='opacity-60 '>Let Lavas Labs send reminders for missing items or request repayments for you. Spend less time chasing down receipts and more time closing your books.</div>
              <img className='absolute top-[220px] left-[30%] w-[clamp(50px,6vw,80px)] h-auto object-contain' src="/images/card-square.png" alt="" />
            </div>  
          </div>
        </div>

        <div className='absolute bottom-0 left-0 w-full mt-[100px] relative'>
          <div className='relative max-w-[1920px] mx-auto h-[min(800px,65vh)]'>
            <img className='absolute bottom-[0px] left-[16%] w-[clamp(200px,18vw,360px)] object-contain z-[999]' src="/images/card-person.png" />
            <img className='absolute bottom-[0px] left-[46%] w-[clamp(220px,20vw,380px)] object-contain z-[999]' src="/images/card-media.png" />
            <img className='absolute bottom-[100px] left-[70%] w-[clamp(200px,22vw,400px)] object-contain z-[999]' src="/images/card-detail.png" />
          </div>
        </div>

        <div className='w-full absolute bottom-[0px] right-[0px] h-[240px] bg-gradient-to-r from-[#0A0B11] to-[#D11616] blur-[142px] z-[1]'>
        </div>
      </section>
      {/* 第四页 */}
      <section className='text-[#0A0B11] max-w-[1920px] mx-auto px-[clamp(40px,16%,310px)] py-[170px] w-full box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='px-[clamp(40px,16%,310px)] box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-2%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            EFFORTLESS EXPENSES FOR EMPLOYEES (AND MANAGERS)
          </div>
          <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Centralize your spend on one intuitive platform</div>
        </div>

        <div className='w-full mt-[50px] flex justify-center'>
          <img className='max-w-full object-cover' src="/images/Effortless.png" alt="" />
        </div>
      </section>
      {/* 第五页 */}
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


      </section >
      {/* 第六页 */}
      <section className='text-[#0A0B11] px-[clamp(40px,16%,310px)] w-full min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='w-full max-w-[1920px] mx-auto flex flex-col items-center py-[170px] box-border'>
          <div className='px-[clamp(40px,16%,310px)] box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
            <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
              <img className='w-[52px] h-auto object-contain absolute right-[-5%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
              Access over $350k in offers from our partners
            </div>
          </div>
          <div className='w-full grid grid-cols-2 grid-cols-5 gap-[clamp(20px,3vw,40px)] mb-[clamp(40px,5vh,80px)] max-w-[1600px] mx-auto mt-[80px]'>
            {logoUrlList.map((item, index) => (
              <img key={index} className='w-[clamp(80px,8vw,120px)] h-[clamp(80px,8vw,120px)] object-contain' src={item} alt="" />
            ))}
          </div>

          <div className='w-full flex flex-wrap gap-[clamp(30px,3vw,50px)] mt-[80px]'>
            <div className='w-[calc((100%-100px)/3-50px)] last:mr-[px] mr-[clamp(30px,3vw,50px)]'>
              <div className='text-[clamp(24px,2.5vw,30px)] font-[500] relative'>
                <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
                <span className='opacity-10 relative z-[999]'>01</span>
              </div>
              <Divider className='m-[0px] mb-[20px]'></Divider>
              <div className='text-[clamp(24px,2.5vw,28px)] font-[500] whitespace-normal'>
                No personal credit checks
              </div>
              <div className='text-[clamp(14px,1.2vw,16px)] opacity-60 mt-[8px]'>
                No impact to your personal credit score.
                Credit limit based on financial factors such as revenue or dollars raised.
                Corporate charge card with 30-day payback.
              </div>
            </div>
            <div className='w-[calc((100%-100px)/3-50px)] last:mr-[px] mr-[clamp(30px,3vw,50px)]'>
              <div className='text-[30px] font-[500] relative'>
                <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
                <span className='opacity-10 relative z-[999]'>02</span>
              </div>
              <Divider className='m-[0px] mb-[20px]'></Divider>
              <div className='text-[clamp(24px,2.5vw,28px)] font-[500] whitespace-normal'>
                Easy, secure payment
              </div>
              <div className='text-[clamp(14px,1.2vw,16px)] opacity-60 mt-[8px]'>
                Unlimited physical and virtual cards.
                Runs on the Visa network.
                Apple and Google Pay compatible.
                Enhanced security with 3DS enrollment, SSO logins, and others.
              </div>
            </div>

            <div className='w-[calc((100%-100px)/3-50px)] last:mr-[px] mr-[clamp(30px,3vw,50px)]'>
              <div className='text-[30px] font-[500] relative'>
                <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
                <span className='opacity-10 relative z-[999]'>03</span>
              </div>
              <Divider className='m-[0px] mb-[20px]'></Divider>
              <div className='text-[clamp(24px,2.5vw,28px)] font-[500] whitespace-normal'>
                Works wherever you go
              </div>
              <div className='text-[clamp(14px,1.2vw,16px)] opacity-60 mt-[8px]'>
                Acceptance in 200+ countries through the Visa global network.
                Local issuing and debiting in 33 countries.
                Reimburse in 70 countries and 40 currencies.
              </div>
            </div>


          </div>
        </div>

      </section>
    </>


  );
};

export default Home;