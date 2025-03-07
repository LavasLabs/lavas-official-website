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
      <div className='w-[40vw] h-[40vw] absolute top-[-15vw] right-[12vw] rounded-full opacity-50 bg-gradient-to-b from-[#C31111] to-[#1A1C1F] blur-[2px] z-[10]'>
      </div>
      {/* 第一页 */}
      <section className='bg-[#0A0B11] text-[#FFFFFF] w-full h-[calc(100vh-100px)] box-border relative overflow-hidden'>
        {/* <div className='w-[367px] h-[367px] absolute top-[30%] right-[-200px] rounded-[753px] opacity-50 bg-gradient-to-b from-[#525252] to-[#1A1C1F] blur-[2px]'>
        </div> */}
        <div className='w-[25vw] h-[25vw] absolute top-[30%] right-[-14vw] rounded-full opacity-50 bg-gradient-to-b from-[#525252] to-[#1A1C1F] blur-[2px]'>
        </div>
        <div className='px-[12%] w-full box-border'>
          <div className='flex' >
            <div>
              <div className='font-sora text-[110px] font-bold uppercase inline-block bg-gradient-to-r from-[#FFFFFF] to-[#CA2A0F] bg-clip-text text-transparent whitespace-nowrap z-[102] relative'>
                Lavas Labs
              </div>
              <div>
                A corporate card designed for modern finance.
              </div>
              <div>
                Save money and time. All with one corporate card.
              </div>
              <div className='mt-[130px]'>
                <Button className='font-[700]' color="danger" variant="solid" shape="round" size='large'>
                  Start for Free
                </Button>
              </div>
            </div>
            <img className='z-[999] w-[40%] h-auto object-contain ml-[40px]' src="/images/card.png" alt="" />
          </div>
        </div>

        <div className='px-[12%] box-border w-full flex gap-[50px]'>
          <div className='w-1/4'>
            <div className='font-[700] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
              <span className='z-[999999] relative'>Save more by preventing out-of-policy spend</span>
            </div>
            <div className='text-[15px] opacity-60 mt-[8px]'>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-1/4'>
            <div className='font-[700] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
              <span className='z-[100] relative'>Be free from expense reports.</span>
            </div>
            <div className='text-[15px] opacity-60 mt-[8px]'>
              Easily submit expenses through SMS, mobile app, and integrations.
            </div>
          </div>
          <div className='w-1/4'>
            <div className='font-[700] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
              <span className='z-[100] relative'>Unlock savings in real time</span>
            </div>
            <div className='text-[15px] opacity-60 mt-[8px]'>
              Get insight into spend as it happens, with a platform that pays off immediately.
            </div>
          </div>
          <div className='w-1/4'>
            <div className='font-[700] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
              <span className='z-[100] relative'>Grow your business with the right terms</span>
            </div>
            <div className='text-[15px] opacity-60 mt-[8px]'>
              Get rewards and perks, like 5% savings. There’s no personal credit checks or personal guarantee.
            </div>
          </div>
        </div>
      </section>
      {/* 第二页 */}
      <section className='text-[#0A0B11] w-full h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center pt-[60px] relative'>
          <img className='w-[52px] h-auto object-contain absolute right-[-50px] top-[10px]' src="/images/black-red-icon.png" alt="" />
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1]'>Build control into the card, before spend even happens.</div>
          <div className='text-[20px] mt-[10px]'>Don't compromise on growth or control</div>
        </div>

        <div className='w-full flex gap-[50px] flex-nowrap mt-[150px] h-[360px] justify-center'>
          <div className='w-[calc(100%/3-100px)] h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
            <div>
              <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 top-[-100px] w-[66%] object-cover' src="/images/Marketing.png" alt="" />
            </div>
            <div className='font-[700] text-[24px]'>
              Marketing virtual cards
            </div>
            <div className='text-[16px] mt-[12px] text-[#626262]'>
              Get unlimited virtual cards for yourself or the employees, we make your money more safe.
            </div>
          </div>
          <div className='w-[calc(100%/3-100px)] h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
            <div>
              <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 top-[-100px] w-[66%]  object-cover' src="/images/Travel.png" alt="" />
            </div>
            <div className='font-[700] text-[24px]'>
              Travel and expenses virtual card
            </div>
            <div className='text-[16px] mt-[12px] text-[#626262]'>
              Create custom virtual cards and set permissions for everything from ad marketplace spend to remote work stipends, for individual teams or your whole company.
            </div>
          </div>
          <div className='w-[calc(100%/3-100px)] h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
            <div>
              <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 top-[-100px] w-[66%] object-cover' src="/images/Conference.png" alt="" />
            </div>
            <div className='font-bold font-[700] text-[24px]'>
              Conference virtual card
            </div>
            <div className='text-[16px] mt-[12px] text-[#626262]'>
              Set spend limits or cancel cards any time you want.
            </div>
          </div>
        </div>
      </section>
      {/* 第三页 */}
      <section className='bg-[#0A0B11] text-[#FFFFFF] w-full h-screen box-border relative overflow-hidden'>
        <img className='absolute top-[0px] left-[0px] w-[30%] object-cover' src="/images/third-logo.png" />
        <div className='px-[12%] w-[70%] box-border pt-[100px]'>
          <div className='text-[40px] font-[700] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[30px] top-[-20px]' src="/images/white-red-icon.png" alt="" />
            <span>More visibility, more time back</span>
          </div>
          <div className='opacity-60'>
            <div>Focus on your work, not follow ups.</div>
            <div>Let Lavas Labs send reminders for missing items or request repayments for you. Spend less time chasing down receipts and more time closing your books.</div>
          </div>
          <div className='text-[24px] mt-[60px] relative'>
            <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[6px]' src="/images/text-front-icon.png" alt="" />
            <span className='z-[999999] relative'>Simplify approvals and share accountability</span>
          </div>
          <div className='opacity-60'>
            <div>Focus on your work, not follow ups.</div>
            <div>Let Lavas Labs send reminders for missing items or request repayments for you. Spend less time chasing down receipts and more time closing your books.</div>
          </div>
          <img className='absolute bottom-[0px] left-[20%] w-[14%] object-cover z-[999]' src="/images/card-person.png" />
          <img className='absolute bottom-[0px] left-[46%] w-[16%] object-cover z-[999]' src="/images/card-media.png" />
          <img className='absolute bottom-[100px] left-[70%] w-[16%] object-cover z-[999]' src="/images/card-detail.png" />
        </div>



        <div className='w-full absolute bottom-[0px] right-[0px] h-[240px] bg-gradient-to-r from-[#0A0B11] to-[#D11616] blur-[142px] z-[1]'>
        </div>
      </section >
      {/* 第四页 */}
      <section className='text-[#0A0B11] px-[12%] py-[120px] w-full box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center pt-[60px] relative'>
          <img className='w-[52px] h-auto object-contain absolute right-[-60px] top-[10px]' src="/images/black-red-icon.png" alt="" />
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1]'>Effortless expenses for employees (and managers)</div>
          <div className='text-[20px] mt-[10px]'>Centralize your spend on one intuitive platform</div>
        </div>

        <div className='w-full mt-[50px] flex justify-center'>
          <img className='max-w-full object-cover' src="/images/Effortless.png" alt="" />
        </div>
      </section>
      {/* 第五页 */}
      <section className='text-[#0A0B11] w-full h-screen box-border relative overflow-hidden bg-[#FFF]'>
        <img className='absolute right-[0px] top-[0px] h-full object-cover w-[45%]' src="/images/card-bg-black.png" alt="" />
        <div className='px-[12%] w-full box-border'>
          <div className=' box-border pt-[100px] w-[50%] leading-[1.2]'>
            <div className='text-[40px] font-[700] relative'>
              <img className='w-[52px] h-auto object-contain absolute right-[0px] top-[-10px]' src="/images/black-red-icon.png" alt="" />
              <span>Automation, control, and
                rewards.The corporate card
                you've been looking for</span>
            </div>
            <div className='text-[20px] mt-[20px]'>
              Spend to get cashback
              Lavas Labs's corporate card puts money back in your pocket so you can invest even more in growth. Or, bring your cash back right into the platform
            </div>
          </div>

          <div className='box-border w-full flex gap-[50px] items-center mt-[100px] relative'>
            <div className='w-1/4 text-[#FFFFFF] bg-[#0A0B11] h-[200px] rounded-[12px] p-[30px] box-border flex flex-col justify-between shadow-[0px_20px_50px_0px_rgba(185,185,185,0.40)]'>
              <i className='iconfont icon-U text-[32px]'></i>
              <div className='font-[500]'>
                Statement credit
              </div>
            </div>
            <div className='w-1/4 text-[#0A0B11] bg-[#FFF] h-[200px] rounded-[12px] p-[30px] box-border flex flex-col justify-between shadow-[0px_20px_50px_0px_rgba(185,185,185,0.40)]'>
              <i className='iconfont icon-flexible text-[32px]'></i>
              <div className='font-[500]'>
                Gift cards & loyalty program points
              </div>
            </div>
            <div className='w-1/4 text-[#0A0B11] bg-[#FFF] h-[200px] rounded-[12px] p-[30px] box-border flex flex-col justify-between shadow-[0px_20px_50px_0px_rgba(185,185,185,0.40)]'>
              <i className='iconfont icon-Return text-[32px]'></i>
              <div className='font-[500]'>
                Ramp fees
              </div>
            </div>


          </div>
        </div>

      </section >
      {/* 第六页 */}
      <section className='text-[#0A0B11] px-[12%] w-full h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center w-[64%] gap-[20px] relative'>
          <img className='w-[52px] h-auto object-contain absolute right-[-62px] top-[-40px]' src="/images/black-red-icon.png" alt="" />
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1]'>Access over $350k in offers from our partners</div>
        </div>

        <div className='w-full grid grid-cols-5 place-items-center gap-y-[26px] mt-[40px]'>{
          logoUrlList.map(item => {
            return <img className='w-[80px] h-[80px] object-cover' src={item} alt="" />
          })
        }
        </div>


        <div className='w-full flex gap-[50px] mt-[20px]'>
          <div className='w-1/3'>
            <div className='text-[30px] font-[500] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
              <span className='opacity-10 relative z-[999]'>01</span>
            </div>
            <Divider className='m-[0px] mb-[20px]'></Divider>
            <div className='text-[28px] font-[500] whitespace-nowrap'>
              No personal credit checks
            </div>
            <div className='text-[16px] opacity-60 mt-[8px]'>
              No impact to your personal credit score.
              Credit limit based on financial factors such as revenue or dollars raised.
              Corporate charge card with 30-day payback.
            </div>
          </div>
          <div className='w-1/3'>
            <div className='text-[30px] font-[500] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
              <span className='opacity-10 relative z-[999]'>02</span>
            </div>
            <Divider className='m-[0px] mb-[20px]'></Divider>
            <div className='text-[30px] font-[500] whitespace-nowrap'>
              Easy, secure payment
            </div>
            <div className='text-[16px] opacity-60 mt-[8px]'>
              Unlimited physical and virtual cards.
              Runs on the Visa network.
              Apple and Google Pay compatible.
              Enhanced security with 3DS enrollment, SSO logins, and others.
            </div>
          </div>

          <div className='w-1/3'>
            <div className='text-[30px] font-[500] relative'>
              <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[10px]' src="/images/text-front-icon.png" alt="" />
              <span className='opacity-10 relative z-[999]'>03</span>
            </div>
            <Divider className='m-[0px] mb-[20px]'></Divider>
            <div className='text-[30px] font-[500] whitespace-nowrap'>
              Works wherever you go
            </div>
            <div className='text-[16px] opacity-60 mt-[8px]'>
              Acceptance in 200+ countries through the Visa global network.
              Local issuing and debiting in 33 countries.
              Reimburse in 70 countries and 40 currencies.
            </div>
          </div>



        </div>

      </section>
    </>


  );
};

export default Home;