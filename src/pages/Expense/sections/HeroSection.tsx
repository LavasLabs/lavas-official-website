import { Button } from 'antd';

const HeroSection = () => {
    return (
        <section className='bg-[#0A0B11] text-[#FFFFFF] px-[clamp(40px,13%,250px)] w-full min-h-[calc(100vh-100px)] box-border flex items-center flex-col relative overflow-hidden'>
            <div className='z-[999] h-full relative w-full flex flex-col justify-between items-center pt-[50px] box-border flex-1 gap-y-[50px]'>
                <div className='w-full flex flex-col justify-center items-center max-w-[1000px]'>
                    <div className='text-[clamp(32px,3.5vw,46px)] font-[700] text-center space-y-[10px]  leading-[1]'>EXPENSE MANAGEMENT SOFTWARE DESIGNED TO CLOSE YOUR BOOKS FASTER</div>
                    <div className='text-[20px] mt-[10px] max-w-[600px] text-center'>Automated expense software built into your corporate card, reimbursements, and more</div>
                </div>
                <Button
                    className='font-[700] px-[clamp(25px,2vw,35px)] py-[clamp(17px,1.5vw,25px)] h-[clamp(46px,4vw,60px)] w-[clamp(160px,12vw,200px)] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-none text-[clamp(14px,1.2vw,18px)]'
                    color="danger"
                    variant="solid"
                    shape="round"
                    size='large'
                    onClick={() => window.location.href = '/contact'}
                >
                    Start for Free
                </Button>
                <div className='w-full flex justify-between items-center mt-[10px] max-w-[1920px] mx-auto'>
                    <div className='flex-1 h-full relative pb-[6%] box-border'>
                        <img className='absolute w-full h-auto bottom-[clamp(200px,26vh,500px)] left-[-20%]' src="/images/expense-c-f.png" alt="" />
                        <img className='absolute w-full h-auto bottom-[0px]' src="/images/expense-c-s.png" alt="" />
                    </div>
                    <div className='w-[40%] mx-[40px] flex items-end'>
                        <img className='w-full' src="/images/expense-card.png" alt="" />
                    </div>
                    <div className='flex-1 h-full relative'>
                        <img className='absolute w-full h-auto bottom-[40%] left-[4%]' src="/images/expense-shape.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='w-[50%] h-[50%] rounded-[971px] bg-[#D11616] blur-[250px] absolute left-[50%] translate-x-[-50%] bottom-[-10%]'></div>
        </section>
    );
};

export default HeroSection;