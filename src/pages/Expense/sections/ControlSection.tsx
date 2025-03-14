import { Space } from 'antd';

const ControlSection = () => {
    return (
        <section className='text-[#0A0B11] w-full min-h-screen px-[clamp(40px,16%,310px)] box-border py-[170px] bg-[#FFF] flex justify-center items-center flex-col'>
            <div className='px-[clamp(40px,16%,310px)] box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
                <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
                    <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
                    CONTROL SPEND BEFORE IT HAPPENS
                </div>
                <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Give employees cards with policies built in, so you can prevent unapproved spend</div>
            </div>

            <div className='w-full flex flex-1 h-full mt-[30px] max-w-[1920px] mx-auto box-border'>
                <div className='w-[72%] h-full relative'>
                    <img className='w-full' src="/images/expense-second.png" alt="" />
                </div>
                <div className='w-[28%] relative'>
                    <div className='absolute left-[clamp(-170px,-12vw,-100px)] top-[50%] translate-y-[-50%]'>
                        <Space direction='vertical'>
                            <div className='font-[700] text-[clamp(12px,1.8vw,20px)] whitespace-nowrap'>
                                Pre-build budgets for responsible spend
                            </div>
                            <div className='opacity-60 text-[clamp(8px,1.1vw,16px)]'>
                                Allow employees to request spend from pre-set budgets. Create custom workflows to make sure that the right stakeholders are looped in to approve.
                            </div>
                        </Space>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ControlSection;