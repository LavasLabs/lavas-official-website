const Advertising = () => {


  const logoUrlList = [
    { url: '/logos/adver-logo1.svg', name: 'Facebook', desc: 'Familiar with Facebook advertising rules' },
    { url: '/logos/adver-logo2.svg', name: 'Youtube', desc: 'Familiar with YouTube advertising rules and unique operational techniques' },
    { url: '/logos/adver-logo3.svg', name: 'Twitter', desc: 'Independently operate Twitter Visa card agent' },
    { url: '/logos/adver-logo4.svg', name: 'Google', desc: 'Professional Google advertising placement method' },
  ];

  return (
    <>
      {/* 第一页 */}
      <section className='text-[#0A0B11] w-full min-h-screen box-border relative overflow-hidden bg-[#FFF]'>
        <div className='px-[clamp(40px,13%,250px)] py-[100px] w-full box-border'>
          <div className='w-[70%]'>
            <div className='font-sora-bold font-[900] font-bold text-[clamp(40px,5vw,50px)] leading-[1.2] [-webkit-text-stroke:0.5px_#0A0B11] uppercase inline-block z-[99999]'>
              Advertising placement and investment promotion
            </div>
            <div className='w-[600px] mt-[10px]'>
              Global investment agency is open, welcome to join
            </div>
          </div>
        </div>
        <img className='w-full object-contain' src="/images/adver-banner.png" alt="" />
        <div className='flex flex-col mt-[170px] justify-center items-center relative'>
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-20%] top-[-80%]' src="/images/black-red-icon.png" alt="" />
            Business Scenario
          </div>
        </div>
        <div className='w-[72%] pb-[170px] px-[clamp(40px,16%,310px)] flex flex-wrap justify-center gap-y-[12px] gap-x-[20px] mt-[6%]'>{
          logoUrlList.map(item => {
            return (
              <div className='pt-[32px] pb-[10px] px-[20px] box-border bg-[#FFF] rounded-[12px] border border-[#F5F7F9] flex justify-center shadow-[0px_10px_30px_0px_rgba(24,24,26,0.10)]'>
                <div className='w-full flex flex-col gap-y-[16px] items-center'>
                  <img className='w-[80px] h-[80px] object-cover' src={item.url} alt="" />
                  <div className='font-[700]'>{item.name}</div>
                  <div className='w-[200px] text-center opacity-50'>{item.desc}</div>
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