import useGlobalStore from '../../../store/useGlobalStore';

const MarketPlayers = () => {
    const { isMobile } = useGlobalStore();

    return (
        <section className={`w-full max-w-[1920px] relative mx-auto box-border bg-[#FFF] flex flex-col ${isMobile ? 'px-[0px] py-[70px] h-auto' : 'px-[clamp(40px,16%,310px)] min-h-screen '}`}>
            <img src="/images/credit-play.png" className='w-full h-full box-border px-[clamp(40px,16%,310px)] rounded-[60px] absolute top-[0px] left-[0px] object-contain object-top rounded-[20px]' />
            <div className={`w-full max-w-[600px] mt-[10%] mx-auto text-center text-[#FFF] relative ${isMobile ? 'px-[50px]' : ''}`}>
                <img className={`h-auto object-contain absolute top-[-40%] ${isMobile ? 'w-[30px] right-[-8%]' : 'w-[52px] right-[-10%]'}`} src="/images/white-red-icon.png" alt="" />
                <div className={`font-[700] leading-[1.2] ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>Play the moves of major market players.</div>
            </div>
            <div className='flex flex-wrap mt-[80px] justify-center text-[#0A0B11] gap-[50px] z-[100] px-[100px] box-border'>
                <div className='w-[calc(100%/3-50px)] h-[240px] box-border [box-shadow:0px_10px_80px_0px_rgba(0,0,0,0.25)]  rounded-[20px] px-[20px] py-[20px] bg-[#FFF] flex flex-col justify-between'>
                    <i className='iconfont icon-Booster text-[38px]'></i>
                    <div className='font-[400] text-[14px]'>Mirror the investment strategies of large corporations with the Volcano Booster.</div>
                </div>
                <div className='w-[calc(100%/3-50px)] h-[240px] box-border [box-shadow:0px_10px_80px_0px_rgba(0,0,0,0.25)]  rounded-[20px] px-[20px] py-[20px] bg-[#FFF] flex flex-col justify-between'>
                    <i className='iconfont icon-property2 text-[38px]'></i>
                    <div className='font-[400] text-[14px]'>Use your holdings as collateral to acquire up to 3x more digital assets.</div>
                </div>
                <div className='w-[calc(100%/3-50px)] h-[240px] box-border [box-shadow:0px_10px_80px_0px_rgba(0,0,0,0.25)]  rounded-[20px] px-[20px] py-[20px] bg-[#FFF] flex flex-col justify-between'>
                    <i className='iconfont icon-limit text-[38px]'></i>
                    <div className='font-[400] text-[14px]'>Use your holdings as collateral to acquire up to 3x more digital assets.</div>
                </div>
            </div>

        </section>
    );
};

export default MarketPlayers;