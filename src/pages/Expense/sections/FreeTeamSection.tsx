const FreeTeamSection = () => {
    return (
        <section className='text-[#0A0B11] w-full min-h-screen box-border py-[170px] bg-[#FFF] flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center relative'>
                <div className='w-[70%] text-[42px] font-[700] text-center space-y-[10px] leading-[1] relative'>
                    <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-22%]' src="/images/black-red-icon.png" alt="" />
                    FREE YOUR TEAM FROM MANUAL EXPENSE MANAGEMENT
                </div>
                <div className='text-[20px] mt-[10px]'>Expenses that submit themselves.</div>
            </div>

            <div className='w-full flex flex-1 h-full mt-[6%] pl-[clamp(40px,16%,310px)] box-border'>
                <div className='w-[40%] relative'>
                    <div className='font-[700] relative'>
                        <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                        <span className='z-[999999] text-[20px] relative'>The old way</span>
                    </div>
                    <img className='w-full absolute right-[0px] top-[0px]' src="/images/expense-oldway.png" alt="" />
                </div>
                <div className='w-[60%] relative pl-[10%] pt-[10%] box-border'>
                    <div className='z-[999999] font-[700] text-[#FFF] flex flex-col gap-[20px] justify-center relative'>
                        <div className='w-[30%] flex justify-center relative'>The old way</div>
                        <img className='w-[30%] rounded-[20px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.35)]' src="/images/expense-chat.png" alt="" />
                    </div>
                    <img className='w-full absolute right-[0px] top-[0px]' src="/images/expense-people.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default FreeTeamSection;