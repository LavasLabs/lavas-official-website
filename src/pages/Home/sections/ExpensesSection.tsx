const ExpensesSection = () => {
  return (
    <section className='text-[#0A0B11] max-w-[1920px] mx-auto px-[clamp(40px,16%,310px)] py-[170px] w-full box-border bg-[#FFF] flex justify-center items-center flex-col'>
      <div className='px-[clamp(40px,16%,310px)] box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
        <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
          <img className='w-[52px] h-auto object-contain absolute right-[-2%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
          EFFORTLESS EXPENSES FOR EMPLOYEES (AND MANAGERS)
        </div>
        <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Centralize your spend on one intuitive platform</div>
      </div>

      <div className='w-full mt-[50px] flex justify-center'>
        <img className='max-w-full object-cover' src="/images/Effortless.png" alt="" />
      </div>
    </section>
  );
};

export default ExpensesSection;