import { Collapse, type CollapseProps } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useGlobalStore from '../../../store/useGlobalStore';

const faqData = [
  {
    key: '1',
    question: 'How does the Lavas Credit Line work?',
    answer: (
      <>
        <div className='mb-[20px]'>
          Unlike traditional loans that consider your credit score, Volcano offers a crypto-backed Credit Line that uses your digital assets as collateral. Once you top up, you can immediately utilize your Credit Line. You have two options for your loan.
        </div>
        <div className='flex flex-col gap-[10px] mb-[20px]'>
          <div>• Choose from multiple currencies and receive the funds straight to your bank account.</div>
          <div>• Receive USDT or USDC to your Volcano account.</div>
        </div>
        <div>
          To start utilizing your Credit Line, follow the steps detailed in our dedicated Help Center article.
        </div>
      </>
    )
  },
  {
    key: '2',
    question: 'How quickly do I get my funds?',
    answer: (
      <>
        <p>With the Volcano crypto-backed loans you will receive your funds on the same or the next day. The processing time is as follows:</p>
        <p>Local transfers: 1 business day
          International transfer: 3 to 5 business days
          USDT and USDC: usually no longer than 30 minutes</p>
      </>
    )
  },
  {
    key: '3',
    question: 'What is the interest rate?',
    answer: (
      <>
        <p>Your interest rate depends on your Loyalty Tier, which is determined by the ratio between the value of your Volcano Tokens against the rest of your portfolio, given your account balance is above $5,000 worth of digital assets:</p>
        <p>Base: No Volcano Tokens are needed; interest on your outstanding Credit Line balance is 18.9%.
          Silver: The ratio of the Volcano Tokens in your account against the rest of your portfolio must be at least 1%; interest on your outstanding Credit Line balance is 17.9%.
          Gold: The ratio of the Volcano Tokens in your account against the rest of your portfolio must be at least 5%; interest on your outstanding Credit Line balance is 13.9% if your LTV is above 20% and 5.9% if your LTV is below or equal to 20%.
          Platinum: The ratio of the Volcano Tokens in your account against the rest of your portfolio must be at least 10%; interest on your outstanding Credit Line balance is 10.9% if your LTV is above 20% and 2.9% if your LTV is below or equal to 20%.
          If your account balance is below $5,000 worth of digital assets, your Credit Line interest rate is 18.9%.</p>
        <p>To learn more about how our Loyalty Program works, visit our Help Center.</p>
        <p>The Credit Line's loan-to-value (LTV) ratio determines the amount of crypto collateral you need in order to take out a crypto credit. For the exact LTV of each digital asset, visit our Help Center.</p>
      </>
    )
  },
  {
    key: '4',
    question: 'What if the value of my collateral changes before I repay my Credit Line?',
    answer: (
      <>
        <p>If your collateral&#39;s value increases, your Credit Line limit also goes up. You're free to borrow more or leave your current Credit Line as is. You can also use the extra value of your crypto to pay off part of your credit.</p>
        <p>If your collateralized assets decrease in value, your loan-to-value ratio (LTV) will rise. If your LTV ratio is above 70% and continues to increase further, you may receive a margin call (via email or push notification).</p>
        <p>If your LTV reaches a critical threshold, partial automatic repayments may occur to rebalance the loan-to-value ratio. To make sure you retain as much of your digital assets as possible, only the minimally required amount of crypto will be sold.</p>
        <p>To learn more about loan repayments, visit our dedicated Help Center article.</p>
      </>
    )
  }
];

const FAQ = () => {
  const { isMobile } = useGlobalStore();

  const commonCollapseProps: CollapseProps = {
    expandIcon: ({ isActive }) => (
      <RightOutlined rotate={isActive ? 90 : 0} className='text-[20px]' />
    ),
    expandIconPosition: "end",
    className: `${isMobile ? 'w-full' : 'w-[calc(50%-10px)]'} bg-transparent border-none [&_.ant-collapse-item]:border-none [&_.ant-collapse-header]:px-[40px] [&_.ant-collapse-header]:py-[30px] [&_.ant-collapse-content-box]:px-[40px] [&_.ant-collapse-content-box]:pb-[30px] [&_.ant-collapse-content-box]:pt-0`
  };

  const formatItems = (items: typeof faqData) => items.map(item => ({
    key: item.key,
    label: (
      <div className={`${isMobile ? 'text-[18px]' : 'text-[20px]'}`}>
        {`${item.key}. ${item.question}`}
      </div>
    ),
    children: (
      <div className='text-[16px] leading-[1.6]'>
        {item.answer}
      </div>
    ),
    className: '!bg-[#F7F7F7] rounded-[20px] mb-[20px] overflow-hidden'
  }));

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex flex-col text-[#0A0B11] ${isMobile ? 'px-[40px] pt-[80px] mt-[40px] pb-[40px] h-auto' : 'px-[clamp(40px,16%,310px)] pb-[100px]'}`}>
      <div className="box-border w-full max-w-[1920px]">
        <div className={`relative font-[700] max-w-[800px] ${isMobile ? 'text-[24px] mb-[0px] w-fit' : 'text-[42px] w-[50%]'}`}>
          <img className={`absolute h-auto ${isMobile ? 'w-[30px] right-[20px] top-[-36%]' : 'w-[52px] right-[-10%] top-[-22%]'}`} src="/images/black-red-icon.png" alt="" />
          FREQUENTLY ASKED QUESTIONS.
        </div>
        <div className={`${isMobile ? 'mt-[40px]' : 'mt-[60px]'}`}>
          <div className={`flex flex-wrap gap-[20px] ${isMobile ? 'flex-col' : ''}`}>
            {isMobile ? (
              <Collapse {...commonCollapseProps} items={formatItems(faqData)} />
            ) : (
              <>
                <Collapse {...commonCollapseProps} items={formatItems(faqData.filter((_, i) => i % 2 === 0))} />
                <Collapse {...commonCollapseProps} items={formatItems(faqData.filter((_, i) => i % 2 === 1))} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;