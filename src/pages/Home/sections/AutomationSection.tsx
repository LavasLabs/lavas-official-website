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
    <section className={`text-[#0A0B11] w-full min-h-screen box-border relative overflow-hidden bg-[#FFF] ${isMobile ? 'py-[40px]' : 'py-[170px]'}`}>
      <div className={`absolute right-[0px] w-1/2 box-border ${isMobile ? 'top-[28%] h-[700px] pt-[0px] pb-[0px]' : 'top-[0px] h-full pt-[170px] pb-[120px]'}`}>
        <img className='w-full h-full object-cover' src="/images/card-bg-black.png" alt="" />
      </div>
      <div className={`w-full max-w-[1920px] mx-auto box-border relative ${isMobile ? 'px-[40px]' : 'px-[clamp(40px,16%,310px)]'}`}>
        <div className={`justify-between items-start gap-[5%] ${isMobile ? 'flex-col text-center' : 'flex'}`}>
          <div className={`box-border leading-[1.2] relative z-[2] ${isMobile ? 'w-full' : 'w-[45%]'}`}>
            <div className={`font-[700] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,40px)]'}`}>
              <img className={`h-auto object-contain absolute ${isMobile ? 'w-[30px] right-[-8%] top-[-20%]' : 'w-[52px] right-[-10%] top-[-10%]'}`} src="/images/black-red-icon.png" alt="" />
              <span>Automation, control, and rewards.The corporate card you've been looking for</span>
            </div>
            <div className={`${isMobile ? 'text-[14px] mt-[10px]' : 'text-[clamp(16px,1.5vw,20px)] mt-[20px]'}`}>
              Spend to get cashback. Lavas Labs's corporate card puts money back in your pocket so you can invest even more in growth. Or, bring your cash back right into the platform
            </div>
          </div>
        </div>

        <div className={`items-stretch ${isMobile ? 'w-[60%] flex-col gap-y-[20px] mt-[80px]' : 'w-[75%] flex gap-[clamp(20px,2vw,50px)] mt-[100px]'}`}>
          {cardList.map((item, index) => (
            <div key={index} className={`flex-1 rounded-[12px] p-[30px] box-border flex flex-col justify-between shadow-[0px_20px_50px_0px_rgba(185,185,185,0.40)] ${item.isDark ? 'text-[#FFFFFF] bg-[#0A0B11]' : 'text-[#0A0B11] bg-[#FFF]'} ${isMobile ? 'min-h-[160px] mb-[20px]' : 'min-h-[200px]'}`}>
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