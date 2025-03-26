import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useGlobalStore from '../../../store/useGlobalStore';

const Collateral = () => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`w-full max-w-[1920px] relative mx-auto box-border bg-[#FFF] flex flex-col ${isMobile ? 'px-[0px] py-[70px] h-auto' : 'px-[clamp(40px,16%,310px)] mb-[170px] min-h-screen '}`}>
    <div className={`w-full max-w-[1920px] mx-auto flex flex-col items-center relative box-border ${isMobile ? 'px-[50px]' : ''}`}>
      <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative flex flex-col items-center ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
        <img className={`h-auto object-contain absolute top-[-40%] ${isMobile ? 'w-[30px] right-[-8%]' : 'w-[52px] right-[-10%]'}`} src="/images/black-red-icon.png" alt="" />
        <div>See which assets you can use as collateral.</div>
        <div className={`font-[400] mt-[10px] max-w-[600px] ${isMobile ? 'text-[14px]' : 'text-[clamp(16px,1.5vw,20px)]'}`}>Choose from over 100 supported digital assets and use multiple at once, with each asset having its own loan-to-value (LTV) ratio</div>
      </div>
    </div>
    <div className='w-full max-w-[1200px] mt-[40px] flex flex-col  relative mx-auto'>
      <div className='w-full flex justify-end mb-[20px]'>
        <Button
          className='border-[#0A0B11] h-[40px]'
          type="default"
          size='large'
        >
          See all <RightOutlined className='text-[10px]' />
        </Button>
      </div>

      {/* 背景网格 */}
      <div className='absolute w-[calc(100%-300px)] h-[400px] right-[80px] top-[90px] pointer-events-none'>
        {/* 竖线和数值 */}
        <div className='w-full h-full flex justify-between text-[14px] text-[rgba(10,11,17,0.4)] relative'>
          <div className='absolute w-full h-full'>
            <div className='absolute left-0 h-full border-l border-[rgba(10,11,17,0.1)]'></div>
            <div className='absolute left-[20%] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
            <div className='absolute left-[40%] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
            <div className='absolute left-[60%] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
            <div className='absolute left-[80%] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
            <div className='absolute right-[0px] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
          </div>
          {/* 数值移到底部 */}
          <div className='absolute w-full flex bottom-[-30px] text-[#000]'>
            <span className='absolute left-0 -translate-x-1/2'>0</span>
            <span className='absolute left-[20%] -translate-x-1/2'>20</span>
            <span className='absolute left-[40%] -translate-x-1/2'>40</span>
            <span className='absolute left-[60%] -translate-x-1/2'>60</span>
            <span className='absolute left-[80%] -translate-x-1/2'>80</span>
            <span className='absolute left-[100%] -translate-x-1/2'>100</span>
          </div>
        </div>
      </div>

      {/* 进度条列表 */}
      <div className='mt-[40px] flex flex-col gap-[40px] relative z-[1] mb-[40px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='flex items-center gap-[10px] w-[200px]'>
            <img src="/images/credit-control1.png" className='w-[40px] h-[40px]' />
            <div className='flex flex-col'>
              <div className='font-[600]'>Bitcoin</div>
              <div className='text-[14px] opacity-60'>BTC</div>
            </div>
          </div>
          <div className='flex-1 h-[8px] bg-[rgba(10,11,17,0.05)] rounded-[4px] relative'>
            <div className='w-[50%] h-full bg-[#F7931A] rounded-[4px]'></div>
            <div className='absolute right-0 -top-[25px] font-[600] whitespace-nowrap' style={{ right: '50%', transform: 'translateX(50%)' }}>50% LTV</div>
          </div>
          <div className='w-[60px]'></div>
        </div>

        <div className='flex items-center gap-[20px]'>
          <div className='flex items-center gap-[10px] w-[200px]'>
            <img src="/images/credit-control2.png" className='w-[40px] h-[40px]' />
            <div className='flex flex-col'>
              <div className='font-[600]'>Ethereum</div>
              <div className='text-[14px] opacity-60'>ETH</div>
            </div>
          </div>
          <div className='flex-1 h-[8px] bg-[rgba(10,11,17,0.05)] rounded-[4px] relative'>
            <div className='w-[50%] h-full bg-[#627EEA] rounded-[4px]'></div>
            <div className='absolute right-0 -top-[25px] font-[600] whitespace-nowrap' style={{ right: '50%', transform: 'translateX(50%)' }}>50% LTV</div>
          </div>
          <div className='w-[60px]'></div>
        </div>

        {/* Solana */}
        <div className='flex items-center gap-[20px]'>
          <div className='flex items-center gap-[10px] w-[200px]'>
            <img src="/images/credit-control3.png" className='w-[40px] h-[40px]' />
            <div className='flex flex-col'>
              <div className='font-[600]'>Solana</div>
              <div className='text-[14px] opacity-60'>SOL</div>
            </div>
          </div>
          <div className='flex-1 h-[8px] bg-[rgba(10,11,17,0.05)] rounded-[4px] relative'>
            <div className='w-[30%] h-full bg-[#9945FF] rounded-[4px]'></div>
            <div className='absolute right-0 -top-[25px] font-[600] whitespace-nowrap' style={{ right: '70%', transform: 'translateX(50%)' }}>30% LTV</div>
          </div>
          <div className='w-[60px]'></div>
        </div>

        {/* XRP */}
        <div className='flex items-center gap-[20px]'>
          <div className='flex items-center gap-[10px] w-[200px]'>
            <img src="/images/credit-control4.png" className='w-[40px] h-[40px]' />
            <div className='flex flex-col'>
              <div className='font-[600]'>XRP</div>
              <div className='text-[14px] opacity-60'>XRP</div>
            </div>
          </div>
          <div className='flex-1 h-[8px] bg-[rgba(10,11,17,0.05)] rounded-[4px] relative'>
            <div className='w-[30%] h-full bg-[#23292F] rounded-[4px]'></div>
            <div className='absolute right-0 -top-[25px] font-[600] whitespace-nowrap' style={{ right: '70%', transform: 'translateX(50%)' }}>30% LTV</div>
          </div>
          <div className='w-[60px]'></div>
        </div>

        {/* Volcano Token */}
        <div className='flex items-center gap-[20px]'>
          <div className='flex items-center gap-[10px] w-[200px]'>
            <img src="/images/credit-control5.png" className='w-[40px] h-[40px]' />
            <div className='flex flex-col'>
              <div className='font-[600]'>Volcano Token</div>
              <div className='text-[14px] opacity-60'>VOLCANO</div>
            </div>
          </div>
          <div className='flex-1 h-[8px] bg-[rgba(10,11,17,0.05)] rounded-[4px] relative'>
            <div className='w-[13%] h-full bg-[#0A0B11] rounded-[4px]'></div>
            <div className='absolute right-0 -top-[25px] font-[600] whitespace-nowrap' style={{ right: '87%', transform: 'translateX(50%)' }}>13% LTV</div>
          </div>
          <div className='w-[60px]'></div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Collateral;