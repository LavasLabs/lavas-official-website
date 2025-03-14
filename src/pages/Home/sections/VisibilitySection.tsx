const VisibilitySection = () => {
  return (
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
  );
};

export default VisibilitySection;