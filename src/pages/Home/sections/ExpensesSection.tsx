import useGlobalStore from '../../../store/useGlobalStore';

const ExpensesSection = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`text-[#0A0B11] max-w-[1920px] mx-auto ${isMobile ? 'px-[40px]' : 'px-[clamp(40px,16%,310px)]'} ${isMobile ? 'py-[100px]' : 'py-[170px]'} w-full box-border bg-[#FFF] flex justify-center items-center flex-col`}>
      <div className={`${isMobile ? 'px-[0px]' : 'px-[clamp(40px,16%,310px)]'} box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative`}>
        <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
          <img className={`${isMobile ? 'w-[30px]' : 'w-[52px]'} h-auto object-contain absolute ${isMobile ? 'right-[-8%]' : 'right-[-2%]'} top-[-40%]`} src="/images/black-red-icon.png" alt="" />
          <span className={`${isMobile ? 'text-[24px]' : ''}`}>EFFORTLESS EXPENSES FOR EMPLOYEES (AND MANAGERS)</span>
        </div>
        <div className={`${isMobile ? 'text-[14px]' : 'text-[clamp(16px,1.5vw,20px)]'} ${isMobile ? 'mt-[10px]' : 'mt-[10px]'} text-center`}>Centralize your spend on one intuitive platform</div>
      </div>

      <div className={`w-full ${isMobile ? 'mt-[30px]' : 'mt-[50px]'} flex justify-center`}>
        <img className='max-w-full object-cover' src="/images/Effortless.png" alt="" />
      </div>
    </section>
  );
};

export default ExpensesSection;