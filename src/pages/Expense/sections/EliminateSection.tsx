const EliminateSection = () => {
    return (
        <section className='text-[#FFF] w-full min-h-screen box-border pt-[170px] bg-[#0A0B11] flex justify-center items-center flex-col'>
            <div className='box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
                <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
                    <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-40%]' src="/images/white-red-icon.png" alt="" />
                    Eliminate manual expense reporting
                </div>
                <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Free employees to do their job without expenses getting in their way.</div>
            </div>

            <div className='w-full flex max-w-[1920px] mx-auto flex-1 h-full mt-[100px] px-[clamp(40px,16%,310px)] box-border relative'>
                <img className='absolute top-[clamp(-100px,-10vh,-60px)] left-[clamp(60px,8vw,120px)] w-[clamp(50px,6vw,80px)] h-auto object-contain' src="/images/expense-arrow.png" alt="" />
                <div className='w-[35%] pt-[4%] pb-[170px] box-border h-full relative'>
                    <img className='w-full' src="/images/expense-t-f.png" alt="" />
                </div>
                <img className='w-[50%] absolute bottom-[0px] right-[0px]' src="/images/expense-meteorite.png" alt="" />
            </div>
        </section>
    );
};

export default EliminateSection;