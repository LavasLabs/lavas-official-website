import useGlobalStore from '../../../store/useGlobalStore';

const cardData = [
  {
    icon: 'property',
    title: 'Up to $200 million',
    description: 'Access borrowing power of up to $2 million daily for individuals and up to $200 million for private clients.'
  },
  {
    icon: 'a-24time',
    title: 'Receive funds in less than 24 hours',
    description: 'Open a Credit Line with an automatic approval process — get funds within 24 hours with no credit history required.'
  },
  {
    icon: 'Tax-efficient',
    title: 'Tax-efficient borrowing',
    description: 'Hold onto your assets while accessing liquidity without triggering taxable events that come with selling.'
  },
  {
    icon: 'currency',
    title: 'Borrow stablecoins & other crypto currencies',
    description: 'Choose to receive your loan in your bank account or as stablecoins in your Volcano account.'
  },
  {
    icon: 'Flexible',
    title: 'Flexible schedule',
    description: 'Repay your Credit Line at your own pace without worrying about rigid schedules.'
  },
  {
    icon: 'collateral',
    title: 'Multi-asset collateral',
    description: 'Stay flexible and borrow as much as you need by combining multiple assets as collateral.'
  },
  {
    icon: 'repayment',
    title: 'Multiple repayment options',
    description: 'Choose to repay with fiat or crypto – including the digital assets you used as collateral for your Credit Line.'
  }
];

const BetterThanLoan = () => {
  const { isMobile } = useGlobalStore();

  const Card = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <div className={`box-border rounded-[20px] px-[20px] py-[20px] border border-[rgba(10,11,17,0.2)] flex flex-col justify-between ${isMobile ? 'w-[calc(50%-10px)] min-h-[280px]' : 'w-[calc(100%/4-20px)] min-h-[300px]'}`}>
      <div>
        <i className={`iconfont icon-${icon} ${isMobile ? 'text-[32px]' : 'text-[38px]'}`}></i>
        <div className={`${isMobile ? 'text-[16px]' : 'text-[20px]'} font-[600]`}>{title}</div>
      </div>
      <div className={`font-[400] ${isMobile ? 'text-[14px]' : 'text-[16px]'}`}>{description}</div>
    </div>
  );

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex flex-col text-[#0A0B11] ${isMobile ? 'px-[20px] py-[100px]' : 'px-[clamp(40px,16%,310px)] py-[170px] min-h-screen'}`}>
      <div className={`font-[700] leading-[1.2] relative ${isMobile ? 'text-[24px] mb-[40px] mx-auto text-center' : 'text-[clamp(32px,3.5vw,42px)] mb-[80px] w-fit'}`}>
        <img className={`h-auto object-contain absolute top-[-40px] ${isMobile ? 'w-[30px] right-[-20px]' : 'w-[52px] right-[-70px]'}`} src="/images/black-red-icon.png" alt="" />
        BETTER THAN A LOAN. 
      </div>
      <div className='flex flex-wrap text-[#0A0B11] gap-[20px]'>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default BetterThanLoan;