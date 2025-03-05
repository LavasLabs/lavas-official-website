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
        <div className='px-[12%] py-[60px] w-full box-border'>
          <div className='w-[70%]'>
            <div className='font-sora font-[700] text-[40px] uppercase inline-block z-[9999999]'>
              Advertising placement and investment promotion
            </div>
            <div className='w-[600px] mt-[10px]'>
              Global investment agency is open, welcome to join
            </div>
          </div>
        </div>
        <img className='w-full object-contain' src="/images/adver-banner.png" alt="" />

        <div className='flex flex-col mt-[6%] justify-center items-center relative'>
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-20%] top-[-80%]' src="/images/black-red-icon.png" alt="" />
            Business Scenario
          </div>
        </div>
        <div className='w-[72%] pb-[10%] px-[12%] flex flex-wrap justify-center gap-y-[12px] gap-x-[20px] mt-[40px]'>{
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