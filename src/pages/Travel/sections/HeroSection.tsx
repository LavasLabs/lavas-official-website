import { Button } from 'antd';

const HeroSection = () => {
  return (
    <section className='text-[#0A0B11] w-full min-h-[calc(100vh-100px)] box-border max-w-[1920px] mx-auto pl-[clamp(40px,13%,250px)] relative overflow-hidden bg-[#FFF]'>
 
 <div className='pt-[clamp(40px,5vh,80px)] box-border flex justify-between'>
          <div className='w-full max-w-[55%]'>
            <div className='font-sora font-[900] text-[clamp(28px,3.8vw,46px)] [text-shadow:0px_0px_1px_#000] leading-[1.3] font-bold uppercase'>
              Smarter business travel, from booking to book close
            </div>
            <div className='mt-[10px] max-w-[600px] text-[clamp(14px,1.1vw,16px)]'>
              Book flights and hotels at the lowest rates, automatically enforce customizable travel policies, and automate expenses throughout a trip—all from one platform.
            </div>
            <div className='mt-[clamp(60px,18vh,400px)]'>
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
          <div className='w-[100%] relative'>
            <img className='w-full h-auto object-contain absolute right-[0px] top-[85px]' src="/images/travel-air.png" alt="" />
          </div>
        </div>
    </section>
  );
};

export default HeroSection;