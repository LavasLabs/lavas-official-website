import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useGlobalStore from '../../../store/useGlobalStore';

const FAQ = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex  flex-col text-[#0A0B11] ${isMobile ? 'px-[0px] py-[70px] h-auto' : 'px-[clamp(40px,16%,310px)] pb-[100px]'}`}>
    <div className={`box-border w-full max-w-[1920px] ${isMobile ? 'px-[40px]' : ''}`}>
      <div className={`relative font-[700] max-w-[800px] ${isMobile ? 'text-[24px] w-full' : 'text-[42px] w-[50%]'}`}>
        <img className={`absolute h-auto ${isMobile ? 'w-[30px] right-[-8%] top-[-36%]' : 'w-[52px] right-[-10%] top-[-22%]'}`} src="/images/black-red-icon.png" alt="" />
        FREQUENTLY ASKED QUESTIONS.
      </div>
      <div className='mt-[60px]'>
        <div className='flex flex-wrap gap-[20px]'>
          <Collapse
            expandIcon={({ isActive }) => (
              <RightOutlined  rotate={isActive ? 90 : 0} className='text-[20px]' />
            )}
            expandIconPosition="end"
            className='w-[calc(50%-10px)] bg-transparent border-none [&_.ant-collapse-item]:border-none [&_.ant-collapse-header]:px-[40px] [&_.ant-collapse-header]:py-[30px] [&_.ant-collapse-content-box]:px-[40px] [&_.ant-collapse-content-box]:pb-[30px] [&_.ant-collapse-content-box]:pt-0'
            items={[
              {
                key: '1',
                label: (
                  <div className='text-[20px]'>
                    1. How does the Nexo Credit Line work?
                  </div>
                ),
                children: (
                  <div className='text-[16px] leading-[1.6] opacity-80'>
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
                  </div>
                ),
                className: '!bg-[#F7F7F7] rounded-[20px] mb-[20px] overflow-hidden'
              },
              {
                key: '3',
                label: (
                  <div className='text-[20px]'>
                    3. What is the interest rate?
                  </div>
                ),
                children: '',
                className: '!bg-[#F7F7F7] rounded-[20px] mb-[20px] overflow-hidden'
              },
            ]}
          />
          <Collapse
            expandIcon={({ isActive }) => (
              <RightOutlined rotate={isActive ? 90 : 0} className='text-[20px]' />
            )}
            expandIconPosition="end"
            className='w-[calc(50%-10px)] bg-transparent border-none [&_.ant-collapse-item]:border-none [&_.ant-collapse-header]:px-[40px] [&_.ant-collapse-header]:py-[30px] [&_.ant-collapse-content-box]:px-[40px] [&_.ant-collapse-content-box]:pb-[30px] [&_.ant-collapse-content-box]:pt-0'
            items={[
              {
                key: '2',
                label: (
                  <div className='text-[20px]'>
                    2. How quickly do I get my funds?
                  </div>
                ),
                children: '',
                className: '!bg-[#F7F7F7] rounded-[20px] mb-[20px] overflow-hidden'
              },
              {
                key: '4',
                label: (
                  <div className='text-[20px]'>
                    4. What if the value of my collateral changes before I repay my Credit Line?
                  </div>
                ),
                children: '',
                className: '!bg-[#F7F7F7] rounded-[20px] mb-[20px] overflow-hidden'
              },
            ]}
          />
        </div>
      </div>
    </div>
    
  </section>
  );
};

export default FAQ;