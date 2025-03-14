import { Button } from 'antd';

const HeroSection = () => {
  return (
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
                  className='font-[700] px-[clamp(25px,2vw,35px)] py-[clamp(17px,1.5vw,25px)] h-[clamp(46px,4vw,60px)] w-[clamp(160px,12vw,200px)] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-none text-[clamp(14px,1.2vw,18px)]'
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
                <img className='w-[clamp(16px,1.2vw,20px)] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                <span className='z-[999999] relative text-[clamp(16px,1.2vw,20px)]'>Save more by preventing out-of-policy spend</span>
              </div>
              <div className='text-[clamp(14px,1vw,16px)] opacity-60 mt-[8px]'>
                Preset controls on corporate cards for specific vendors and categories.
              </div>
            </div>
            <div className='w-[calc(25%-40px)]'>
              <div className='font-[700] relative'>
                <img className='w-[clamp(16px,1.2vw,20px)] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                <span className='z-[100] relative text-[clamp(16px,1.2vw,20px)]'>Be free from expense reports.</span>
              </div>
              <div className='text-[clamp(14px,1vw,16px)] opacity-60 mt-[8px]'>
                Easily submit expenses through SMS, mobile app, and integrations.
              </div>
            </div>
            <div className='w-[calc(25%-40px)]'>
              <div className='font-[700] relative'>
                <img className='w-[clamp(16px,1.2vw,20px)] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                <span className='z-[100] relative text-[clamp(16px,1.2vw,20px)]'>Unlock savings in real time</span>
              </div>
              <div className='text-[clamp(14px,1vw,16px)] opacity-60 mt-[8px]'>
                Get insight into spend as it happens, with a platform that pays off immediately.
              </div>
            </div>
            <div className='w-[calc(25%-40px)]'>
              <div className='font-[700] relative'>
                <img className='w-[clamp(16px,1.2vw,20px)] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                <span className='z-[100] relative text-[clamp(16px,1.2vw,20px)]'>Grow your business with the right terms</span>
              </div>
              <div className='text-[clamp(14px,1vw,16px)] opacity-60 mt-[8px]'>
                Get rewards and perks, like 5% savings. There's no personal credit checks or personal guarantee.
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;