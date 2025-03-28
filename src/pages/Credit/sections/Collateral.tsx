import { Button,message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useGlobalStore from '../../../store/useGlobalStore';

const collateralData = [
  {
    icon: '/images/credit-control1.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    percentage: 50,
    color: '#F7931A'
  },
  {
    icon: '/images/credit-control2.png',
    name: 'Ethereum',
    symbol: 'ETH',
    percentage: 50,
    color: '#627EEA'
  },
  {
    icon: '/images/credit-control3.png',
    name: 'Solana',
    symbol: 'SOL',
    percentage: 30,
    color: '#9945FF'
  },
  {
    icon: '/images/credit-control4.png',
    name: 'XRP',
    symbol: 'XRP',
    percentage: 30,
    color: '#23292F'
  },
  {
    icon: '/images/credit-control5.png',
    name: 'Volcano Token',
    symbol: 'VOLCANO',
    percentage: 13,
    color: '#0A0B11'
  }
];

const Collateral = () => {
  const { isMobile } = useGlobalStore();
  const [messageApi, contextHolder] = message.useMessage();

  const ProgressBar = ({ icon, name, symbol, percentage, color }: {
    icon: string;
    name: string;
    symbol: string;
    percentage: number;
    color: string;
  }) => (
    <div className={`flex items-center ${isMobile ? 'gap-[10px]' : 'gap-[20px]'}`}>
      <div className={`flex items-center gap-[10px] ${isMobile ? 'w-[120px]' : 'w-[200px]'}`}>
        <img src={icon} className={`${isMobile ? 'w-[32px] h-[32px]' : 'w-[40px] h-[40px]'}`} />
        <div className='flex flex-col'>
          <div className={`font-[600] ${isMobile ? 'text-[14px]' : ''}`}>{name}</div>
          <div className={`opacity-60 ${isMobile ? 'text-[12px]' : 'text-[14px]'}`}>{symbol}</div>
        </div>
      </div>
      {/* bg-[rgba(10,11,17,0.05)] */}
      <div className='flex-1 h-[8px]  rounded-[4px] relative'>
        <div className={`h-full rounded-[4px]`} style={{ width: `${percentage}%`, backgroundColor: color }}></div>
        <div className={`absolute right-0 -top-[25px] font-[600] whitespace-nowrap ${isMobile ? 'text-[12px]' : ''}`} 
          style={{ right: `${100 - percentage}%`, transform: 'translateX(50%)' }}>
          {percentage}% LTV
        </div>
      </div>
      <div className={`${isMobile ? 'w-[20px]' : 'w-[60px]'}`}></div>
    </div>
  );

  return (
    <section className={`w-full max-w-[1920px] relative mx-auto box-border bg-[#FFF] flex flex-col ${isMobile ? 'px-[20px] py-[80px] h-auto' : 'px-[clamp(40px,16%,310px)] mb-[170px] min-h-screen'}`}>
      {contextHolder}
      <div className={`w-full max-w-[1920px] mx-auto flex flex-col items-center relative box-border ${isMobile ? 'px-[20px]' : ''}`}>
        <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative flex flex-col items-center ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
          <img className={`h-auto object-contain absolute top-[-40%] ${isMobile ? 'w-[30px] right-[-8%]' : 'w-[52px] right-[-10%]'}`} src="/images/black-red-icon.png" alt="" />
          <div>See which assets you can use as collateral.</div>
          <div className={`font-[400] mt-[10px] max-w-[500px] ${isMobile ? 'text-[14px]' : 'text-[clamp(16px,1.5vw,20px)]'}`}>Choose from over 100 supported digital assets and use multiple at once, with each asset having its own loan-to-value (LTV) ratio</div>
        </div>
      </div>
      <div className={`w-full max-w-[1200px] mt-[40px] flex flex-col relative mx-auto ${isMobile ? 'px-[10px]' : ''}`}>
        <div className={`w-full flex justify-end mb-[20px] box-border ${isMobile ? 'pr-[20px]' : ''}`}>
          <Button
            className={`border-[#0A0B11] ${isMobile ? 'h-[32px]' : 'h-[40px]'}`}
            type="default"
            size={isMobile ? 'middle' : 'large'}
            onClick={() => messageApi.info('This function is not enabled. Please contact the administrator')}
          >
            See all <RightOutlined className='text-[10px]' />
          </Button>
        </div>

        {/* 背景网格 */}
        <div className={`absolute ${isMobile ? 'w-[calc(100%-180px)] right-[40px]' : 'w-[calc(100%-300px)] right-[80px]'} h-[400px] top-[90px] pointer-events-none`}>
          {/* 竖线和数值 */}
          <div className='w-full h-full flex justify-between text-[14px] text-[rgba(10,11,17,0.4)] relative'>
            <div className='absolute w-full h-full'>
              <div className='absolute left-[0px] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
              <div className='absolute left-[20%] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
              <div className='absolute left-[40%] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
              <div className='absolute left-[60%] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
              <div className='absolute left-[80%] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
              <div className='absolute right-[0px] h-full border-l border-[rgba(10,11,17,0.1)]'></div>
            </div>
            {/* 数值移到底部 */}
            <div className={`absolute w-full flex bottom-[-30px] text-[#000] ${isMobile ? 'text-[12px]' : ''}`}>
              <span className='absolute left-[0px] -translate-x-1/2'>0</span>
              <span className='absolute left-[20%] -translate-x-1/2'>20</span>
              <span className='absolute left-[40%] -translate-x-1/2'>40</span>
              <span className='absolute left-[60%] -translate-x-1/2'>60</span>
              <span className='absolute left-[80%] -translate-x-1/2'>80</span>
              <span className='absolute left-[100%] -translate-x-1/2'>100</span>
            </div>
          </div>
        </div>

        {/* 进度条列表 */}
        <div className={`mt-[40px] flex flex-col ${isMobile ? 'gap-[25px]' : 'gap-[40px]'} relative z-[1] mb-[40px]`}>
          {collateralData.map((item, index) => (
            <ProgressBar key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collateral;