import useGlobalStore from '../../store/useGlobalStore';

const Advertising = () => {
  const { isMobile } = useGlobalStore();

  const logoUrlList = [
    { url: '/logos/adver-logo1.svg', name: 'Facebook', desc: 'Familiar with Facebook advertising rules' },
    { url: '/logos/adver-logo2.svg', name: 'Youtube', desc: 'Familiar with YouTube advertising rules and unique operational techniques' },
    { url: '/logos/adver-logo3.svg', name: 'Twitter', desc: 'Independently operate Twitter Visa card agent' },
    { url: '/logos/adver-logo4.svg', name: 'Google', desc: 'Professional Google advertising placement method' },
  ];

  return (
    <>
      <section className={`text-[#0A0B11] w-full box-border relative overflow-hidden bg-[#FFF] ${isMobile ? '' : 'min-h-screen'}`}>
        <div className={`w-full box-border ${isMobile ? 'px-[20px] pb-[60px] pt-[30px]' : 'px-[clamp(40px,13%,250px)] py-[100px]'}`}>
          <div className={`${isMobile ? 'w-full flex flex-col justify-center items-center text-center' : 'w-[70%]'}`}>
            <div className={`font-sora-bold font-[900] font-bold leading-[1.2]  uppercase inline-block z-[100] ${isMobile ? 'text-[30px] [-webkit-text-stroke:0.2px_#0A0B11]' : 'text-[clamp(40px,5vw,50px)] [-webkit-text-stroke:0.5px_#0A0B11]'}`}>
              Advertising placement and investment promotion
            </div>
            <div className={`mt-[10px] ${isMobile ? 'w-full' : 'w-[600px]'}`}>
              Global investment agency is open, welcome to join
            </div>
          </div>
        </div>
        <img 
              className='w-full object-contain' 
              src={isMobile ? "/images/adver-banner-mobile.png" : "/images/adver-banner.png"} 
              alt="" 
            />
        <div className={`flex flex-col justify-center items-center relative ${isMobile ? 'mt-[60px]' : 'mt-[170px]'}`}>
          <div className={`font-[700] text-center leading-[1] relative ${isMobile ? 'text-[24px]' : 'text-[42px] space-y-[10px]'}`}>
            <img className={`h-auto object-contain absolute ${isMobile ? 'w-[30px] right-[-40px] top-[-24px]' : 'w-[52px] right-[-20%] top-[-80%]'}`} src="/images/black-red-icon.png" alt="" />
            Business Scenario
          </div>
        </div>
        <div className={`w-full flex flex-wrap justify-center  box-border ${isMobile ? 'px-[20px] pb-[60px] gap-[10px] mt-[40px]' : 'w-[72%] pb-[170px] px-[clamp(40px,16%,310px)] gap-y-[12px] gap-x-[20px] mt-[6%]'}`}>{
          logoUrlList.map(item => {
            return (
              <div className={`pt-[32px] pb-[10px] px-[20px] box-border bg-[#FFF] rounded-[12px] border border-[#F5F7F9] flex justify-center shadow-[0px_10px_30px_0px_rgba(24,24,26,0.10)] ${isMobile ? 'w-[calc(50%-5px)]' : ''}`}>
                <div className='w-full flex flex-col gap-y-[16px] items-center'>
                  <img className={`object-cover ${isMobile ? 'w-[60px] h-[60px]' : 'w-[80px] h-[80px]'}`} src={item.url} alt="" />
                  <div className={`font-[700] ${isMobile ? 'text-[14px]' : ''}`}>{item.name}</div>
                  <div className={`text-center opacity-50 ${isMobile ? 'w-full text-[12px]' : 'w-[200px]'}`}>{item.desc}</div>
                </div>
              </div>
            )
          })
        }
        </div>
      </section>
    </>
  );
};

export default Advertising;