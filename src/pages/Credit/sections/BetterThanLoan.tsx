import useGlobalStore from '../../../store/useGlobalStore';

const BetterThanLoan = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex  flex-col text-[#0A0B11] ${isMobile ? 'px-[0px] py-[70px] h-auto' : 'px-[clamp(40px,16%,310px)] py-[170px] min-h-screen '}`}>
    <div className={`font-[700] w-fit leading-[1.2] relative mb-[80px] ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
      <img className={`h-auto object-contain absolute top-[-40px] ${isMobile ? 'w-[30px] right-[-20px]' : 'w-[52px] right-[-70px]'}`} src="/images/black-red-icon.png" alt="" />
      BETTER THAN A LOAN.
    </div>
    <div className='flex flex-wrap text-[#0A0B11] gap-[20px]'>
      <div className='w-[calc(100%/4-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
        <div>
          <i className='iconfont icon-property text-[38px]'></i>
          <div className='text-[20px] font-[600]'>Up to $200 million</div>
        </div>
        <div className='font-[400]'>Access borrowing power of up to $2 million daily for individuals and up to $200 million for private clients.</div>
      </div>
      <div className='w-[calc(100%/4-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
        <div>
          <i className='iconfont icon-a-24time text-[38px]'></i>
          <div className='text-[20px] font-[600]'>Receive funds in less than 24 hours</div>
        </div>
        <div className='font-[400]'>Open a Credit Line with an automatic approval process — get funds within 24 hours with no credit history required.</div>
      </div>
      <div className='w-[calc(100%/4-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
        <div>
          <i className='iconfont icon-Tax-efficient text-[38px]'></i>
          <div className='text-[20px] font-[600]'>Tax-efficient borrowing</div>
        </div>
        <div className='font-[400]'>Hold onto your assets while accessing liquidity without triggering taxable events that come with selling.</div>
      </div>
      <div className='w-[calc(100%/4-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
        <div>
          <i className='iconfont icon-currency text-[38px]'></i>
          <div className='text-[20px] font-[600]'>Borrow stablecoins & other crypto currencies</div>
        </div>
        <div className='font-[400]'>Choose to receive your loan in your bank account or as stablecoins in your Volcano account.</div>
      </div>
      <div className='w-[calc(100%/4-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
        <div>
          <i className='iconfont icon-Flexible text-[38px]'></i>
          <div className='text-[20px] font-[600]'>Flexible schedule</div>
        </div>
        <div className='font-[400]'>Repay your Credit Line at your own pace without worrying about rigid schedules.</div>
      </div>
      <div className='w-[calc(100%/4-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
        <div>
          <i className='iconfont icon-collateral text-[38px]'></i>
          <div className='text-[20px] font-[600]'>Multi-asset collateral</div>
        </div>
        <div className='font-[400]'>Stay flexible and borrow as much as you need by combining multiple assets as collateral.</div>
      </div>
      <div className='w-[calc(100%/4-20px)] h-[300px] box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between'>
        <div>
          <i className='iconfont icon-repayment text-[38px]'></i>
          <div className='text-[20px] font-[600]'>Multiple repayment options</div>
        </div>
        <div className='font-[400]'>Choose to repay with fiat or crypto – including the digital assets you used as collateral for your Credit Line.</div>
      </div>
    </div>
  </section>
  );
};

export default BetterThanLoan;