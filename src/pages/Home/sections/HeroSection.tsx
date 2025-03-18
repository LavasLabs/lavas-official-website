import { Button } from 'antd';
import useGlobalStore from '../../../store/useGlobalStore';

const features = [
  {
    title: 'Save more by preventing out-of-policy spend',
    desc: 'Preset controls on corporate cards for specific vendors and categories.'
  },
  {
    title: 'Be free from expense reports',
    desc: 'Easily submit expenses through SMS, mobile app, and integrations.'
  },
  {
    title: 'Unlock savings in real time',
    desc: 'Get insight into spend as it happens, with a platform that pays off immediately.'
  },
  {
    title: 'Grow your business with the right terms',
    desc: "Get rewards and perks, like 5% savings. There's no personal credit checks or personal guarantee."
  }
];

const HeroSection = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className='bg-[#0A0B11] text-[#FFFFFF] w-full min-h-[calc(100vh-100px)] pb-[40px] box-border relative overflow-hidden'>
      {!isMobile && (
        <div className='w-[25vw] h-[25vw] absolute top-[30%] right-[-14vw] rounded-full opacity-50 bg-gradient-to-b from-[#525252] to-[#1A1C1F] blur-[2px]'>
        </div>
      )}
      <div className={`${isMobile ? 'px-[20px]' : 'px-[clamp(40px,13%,250px)]'} w-full box-border`}>
        <div className={`flex max-w-[1600px] mx-auto ${isMobile ? 'flex-col items-center' : 'justify-between'} relative`}>
          <div className={`${isMobile ? 'max-w-full text-center  z-[1000]' : 'max-w-[55%]'} pt-[4%] box-border`}>
            <div className='font-sora font-[700] text-[clamp(40px,8vw,110px)] font-bold uppercase inline-block bg-gradient-to-r from-[#FFFFFF] to-[#CA2A0F] bg-clip-text text-transparent whitespace-nowrap z-[102] relative'>
              Lavas Labs
            </div>
            <div className='text-[clamp(16px,2vw,24px)]'>
              A corporate card designed for modern finance.
            </div>
            <div className='text-[clamp(16px,2vw,24px)]'>
              Save money and time. All with one corporate card.
            </div>
            {!isMobile && (
              <div className='mt-[clamp(40px,10vh,130px)]'>
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
            )}
          </div>

          <img className={`z-[999] ${isMobile ? 'w-[80%] mt-[40px]' : 'w-[45%] ml-[40px]'} h-auto object-contain`} src="/images/card.png" alt="" />
          {isMobile && (
            <div className='relative'>
              <Button
                className='font-[700] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-none text-[clamp(16px,1.2vw,20px)] absolute left-[-30px] top-[-30px] translate-x-[-50%] translate-y-[-50%]'
                color="danger"
                variant="solid"
                shape="round"
                size='large'
                onClick={() => window.location.href = '/contact'}
              >
                Start for Free
              </Button>
            </div>
          )}

          {!isMobile && (
            <div className='w-[clamp(30px,4vw,59px)] h-[clamp(30px,4vw,59px)] absolute top-[72%] right-[40%] rounded-full opacity-50 bg-gradient-to-t from-[#1A1C1F] to-[#525252] blur-[2px]'>
            </div>
          )}
        </div>
      </div>

      <div className={`${isMobile ? 'px-[20px]' : 'px-[clamp(40px,13%,250px)]'} box-border w-full  ${isMobile ? 'mt-[6%]' : 'mt-[2%]'}`}>
        <div className={`flex gap-[20px] flex-wrap max-w-[1600px] mx-auto ${isMobile ? 'justify-center' : ''}`}>
          {features.map((item, index) => (
            <div key={index} className={`${isMobile ? 'w-[calc(50%-10px)]' : 'w-[calc(25%-16px)]'} ${isMobile ? 'mb-[20px]' : ''}`}>
              <div className='font-[700] relative'>
                <img className='w-[clamp(16px,1.2vw,20px)] h-auto object-contain absolute left-[0px] top-[2px]' src="/images/text-front-icon.png" alt="" />
                <span className={`z-[100] relative text-[clamp(16px,1.2vw,20px)] font-[900]`}>{item.title}</span>
              </div>
              <div className={`text-[clamp(14px,1vw,16px)] opacity-60 mt-[8px]`}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;