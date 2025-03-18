import useGlobalStore from '../../../store/useGlobalStore';

const cardList = [
  {
    icon: 'icon-U',
    title: 'Statement credit',
    isDark: true
  },
  {
    icon: 'icon-flexible',
    title: 'Gift cards & loyalty program points',
    isDark: false
  },
  {
    icon: 'icon-Return',
    title: 'Ramp fees',
    isDark: false
  }
];

const AutomationSection = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`text-[#0A0B11] ${isMobile ? 'py-[100px]' : 'py-[170px]'} w-full min-h-screen box-border relative overflow-hidden bg-[#FFF]`}>
      <div className={`absolute ${isMobile ? 'top-[32%]' : 'top-[0px]'} right-[0px] w-1/2 ${isMobile ? 'h-[calc(100%-400px)]' : 'h-full'} ${isMobile ? 'pt-[0px]' : 'pt-[170px]'} ${isMobile ? 'pb-[0px]' : 'pb-[120px]'} box-border`}>
        <img className='w-full h-full object-cover' src="/images/card-bg-black.png" alt="" />
      </div>
      <div className={`${isMobile ? 'px-[40px]' : 'px-[clamp(40px,16%,310px)]'} w-full max-w-[1920px] mx-auto box-border relative`}>
        <div className={`${isMobile ? 'flex-col text-center' : 'flex'} justify-between items-start gap-[5%]`}>
          <div className={`${isMobile ? 'w-full' : 'w-[45%]'} box-border leading-[1.2] relative z-[2]`}>
            <div className={`${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,40px)]'} font-[700] relative`}>
              <img className={`${isMobile ? 'w-[30px]' : 'w-[52px]'} h-auto object-contain absolute ${isMobile ? 'right-[-8%]' : 'right-[-10%]'} ${isMobile ? 'top-[-20%]' : 'top-[-10%]'}`} src="/images/black-red-icon.png" alt="" />
              <span>Automation, control, and rewards.The corporate card you've been looking for</span>
            </div>
            <div className={`${isMobile ? 'text-[14px]' : 'text-[clamp(16px,1.5vw,20px)]'} ${isMobile ? 'mt-[10px]' : 'mt-[20px]'}`}>
              Spend to get cashback. Lavas Labs's corporate card puts money back in your pocket so you can invest even more in growth. Or, bring your cash back right into the platform
            </div>
          </div>
        </div>

        <div className={`${isMobile ? 'w-[60%] flex-col' : 'w-[75%] flex'} ${isMobile ? 'gap-y-[20px]' : 'gap-[clamp(20px,2vw,50px)]'} items-stretch ${isMobile ? 'mt-[80px]' : 'mt-[100px]'}`}>
          {cardList.map((item, index) => (
            <div key={index} className={`flex-1 ${item.isDark ? 'text-[#FFFFFF] bg-[#0A0B11]' : 'text-[#0A0B11] bg-[#FFF]'} ${isMobile ? 'min-h-[160px] mb-[20px]' : 'min-h-[200px]'} rounded-[12px] p-[30px] box-border flex flex-col justify-between shadow-[0px_20px_50px_0px_rgba(185,185,185,0.40)]`}>
              <i className={`iconfont ${item.icon} ${isMobile ? 'text-[28px]' : 'text-[32px]'}`}></i>
              <div className={`font-[500] ${isMobile ? 'text-[16px]' : 'text-[clamp(16px,1.2vw,18px)]'}`}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;