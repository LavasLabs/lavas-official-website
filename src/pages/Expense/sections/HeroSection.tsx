import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';
import { assetPath } from '../../../utils/assetPath';

const HeroSection = () => {
    const { isMobile } = useGlobalStore();
    const { t } = useTranslation('expense');

    return (
        <section className={`bg-[#0A0B11] text-[#FFFFFF] w-full box-border flex items-center flex-col relative overflow-hidden ${isMobile ? 'h-auto' : 'min-h-[calc(100vh-100px)] px-[clamp(40px,13%,250px)]'}`}>
            <div className={`z-[999] h-full relative w-full flex flex-col justify-between items-center box-border flex-1 ${isMobile ? 'pt-[20px] gap-y-[30px]' : 'pt-[50px] gap-y-[50px]'}`}>
                <div className={`w-full flex flex-col justify-center items-center max-w-[1000px] ${isMobile ? 'px-[30px] box-border' : '' }`}>
                    <div className={`[-webkit-text-stroke:0.5px_#FFFFFF] font-[700] text-center leading-[1.2] ${isMobile ? 'text-[26px]' : 'text-[clamp(40px,5vw,50px)]'}`}>
                        {t('hero.title')}
                    </div>
                    <div className={`mt-[10px] max-w-[600px] text-center ${isMobile ? 'text-[14px] px-[20px] box-border' : 'text-[20px]'}`}>
                        {t('hero.subtitle')}
                    </div>
                </div>
                <Button
                    className='font-[700] text-[clamp(16px,1.2vw,18px)] h-[clamp(46px,4vw,60px)] w-[clamp(140px,12vw,200px)] px-[clamp(25px,2vw,35px)] py-[clamp(17px,1.5vw,25px)] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-none'
                    color="danger"
                    variant="solid"
                    shape="round"
                    size='large'
                    onClick={() => window.location.href = '/contact'}
                >
                    {t('hero.startForFree')}
                </Button>
                {isMobile ? (
                    <div className='w-full flex flex-col items-center mt-[10px] box-border relative pb-[300px]'>
                        <div className='w-full absolute top-[-80px] flex justify-between px-[20px]'>
                            <div className='w-[30%] flex flex-col gap-[20px]'>
                                <img className='w-full h-auto' src={assetPath('/images/expense-c-f.png')} alt="" />
                                <img className='w-full h-auto' src={assetPath('/images/expense-c-s.png')} alt="" />
                            </div>
                            <div className='w-[30%] mr-[10px]'>
                                <img className='w-full h-auto' src={assetPath('/images/expense-shape.png')} alt="" />
                            </div>
                        </div>
                        <div className='w-full'>
                            <img className='w-[80%] h-auto absolute bottom-[0px] left-[50%] -translate-x-1/2' src={assetPath('/images/expense-card.png')} alt="" />
                        </div>
                    </div>
                ) : (
                    <div className='w-full flex justify-between items-center mt-[10px] max-w-[1920px] mx-auto'>
                        <div className='flex-1 h-full relative pb-[6%] box-border'>
                            <img className='absolute w-full h-auto bottom-[clamp(200px,26vh,500px)] left-[-20%]' src={assetPath('/images/expense-c-f.png')} alt="" />
                            <img className='absolute w-full h-auto bottom-[0px]' src={assetPath('/images/expense-c-s.png')} alt="" />
                        </div>
                        <div className='w-[40%] mx-[40px] flex items-end'>
                            <img className='w-full' src={assetPath('/images/expense-card.png')} alt="" />
                        </div>
                        <div className='flex-1 h-full relative'>
                            <img className='absolute w-full h-auto bottom-[40%] left-[4%]' src={assetPath('/images/expense-shape.png')} alt="" />
                        </div>
                    </div>
                )}
            </div>

            <div className={`rounded-[971px] bg-[#D11616] absolute left-[50%] translate-x-[-50%] ${isMobile ? 'w-[100%] h-[280px] bottom-[0px] z-[1] blur-[170px]' : 'w-[50%] h-[50%] bottom-[-10%] blur-[250px]'}`}></div>
        </section>
    );
};

export default HeroSection;