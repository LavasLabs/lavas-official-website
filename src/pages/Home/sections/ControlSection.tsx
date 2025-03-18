import useGlobalStore from '../../../store/useGlobalStore';

const cardList = [
  {
    image: '/images/Marketing.png',
    title: 'Marketing virtual cards',
    desc: 'Get unlimited virtual cards for yourself or the employees, we make your money more safe.'
  },
  {
    image: '/images/Travel.png',
    title: 'Travel and expenses virtual card',
    desc: 'Create custom virtual cards and set permissions for everything from ad marketplace spend to remote work stipends, for individual teams or your whole company.'
  },
  {
    image: '/images/Conference.png',
    title: 'Conference virtual card',
    desc: 'Set spend limits or cancel cards any time you want.'
  }
];


const ControlSection = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`text-[#0A0B11] w-full min-h-screen box-border bg-[#FFF] flex justify-center items-center flex-col ${isMobile ? 'py-[100px]' : 'py-[170px]'}`}>
      <div className={`${isMobile ? 'px-[40px]' : 'px-[clamp(40px,16%,310px)]'} box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative`}>
        <div className={`${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'} font-[700] text-center max-w-[800px] leading-[1.2] relative`}>
          <img className={`${isMobile ? 'w-[30px]' : 'w-[52px]'} h-auto object-contain absolute ${isMobile ? 'right-[-8%]' : 'right-[-2%]'} top-[-40%]`} src="/images/black-red-icon.png" alt="" />
          BUILD CONTROL INTO THE CARD, BEFORE SPEND EVEN HAPPENS.
        </div>
        <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Don't compromise on growth or control</div>
      </div>

      <div className={`w-full ${isMobile ? 'px-[40px]' : 'px-[clamp(40px,16%,310px)]'} box-border ${isMobile ? 'mt-[100px]' : 'mt-[150px]'}  max-w-[1920px] mx-auto`}>
        <div className={`${isMobile ? 'flex-col' : 'flex'} gap-[clamp(20px,2vw,40px)] ${isMobile ? '' : 'justify-between'}`}>
          {cardList.map((item, index) => (
            <div key={index} className={`${isMobile ? 'w-full' : 'w-[calc((100%-80px)/3)] min-h-[365px]'} ${index !== cardList.length - 1 && isMobile ? 'mb-[80px]' : ''} rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative`}>
              <div className='absolute left-1/2 top-[-60px] transform -translate-x-1/2 w-full max-w-[264px]'>
                <img className='w-full h-auto object-contain' src={item.image} alt="" />
              </div>
              <div className='font-[700] text-[clamp(20px,2vw,24px)] mt-[10px]'>
                {item.title}
              </div>
              <div className='text-[16px] mt-[12px] text-[#626262]'>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ControlSection;