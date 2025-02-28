import { useTranslation } from 'react-i18next';
import { Button, Tooltip } from 'antd';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* 第一页 */}
      <div className='w-[653px] h-[653px] absolute top-[-240px] right-[200px] rounded-[753px] opacity-50 bg-gradient-to-b from-[#C31111] to-[#1A1C1F] blur-[2px] z-[50]'>
      </div>
      <section className='text-[#FFFFFF] w-full h-[calc(100vh-100px)] box-border relative overflow-hidden'>
        <div className='w-[367px] h-[367px] absolute top-[30%] right-[-200px] rounded-[753px] opacity-50 bg-gradient-to-b from-[#525252] to-[#1A1C1F] blur-[2px]'>
        </div>
        <div className='px-[250px] w-full box-border'>
          <div className='flex'>
            <div>
              <div className='font-sora text-[110px] font-bold uppercase inline-block bg-gradient-to-r from-[#D51029] via-[#D51029] via-[#A3001A] to-[#7E0010] bg-clip-text text-transparent whitespace-nowrap'>
                Lavas Labs
              </div>
              <div>
                A corporate card designed for modern finance.
              </div>
              <div>
                Save money and time. All with one corporate card.
              </div>
              <div className='mt-[130px]'>
                <Button className='font-bold' color="danger" variant="solid" shape="round" size='large'>
                  Start for Free
                </Button>
              </div>
            </div>
            <img className='z-[999] w-[400px] h-auto object-contain ml-[40px]' src="/src/assets/images/card.png" alt="Lavas" />
          </div>
        </div>

        <div className='px-[250px] box-border w-full flex gap-[50px] items-center'>
          <div className='w-1/4'>
            <div className='font-[700]'>
              Save more by preventing out-of-policy spend
            </div>
            <div className='text-[15px] opacity-60 mt-[8px]'>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-1/4'>
            <div className='font-[700]'>
              Save more by preventing out-of-policy spend
            </div>
            <div className='text-[15px] opacity-60 mt-[8px]'>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-1/4'>
            <div className='font-[700]'>
              Save more by preventing out-of-policy spend
            </div>
            <div className='text-[15px] opacity-60 mt-[8px]'>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-1/4'>
            <div className='font-[700]'>
              Save more by preventing out-of-policy spend
            </div>
            <div className='text-[15px] opacity-60 mt-[8px]'>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>


        </div>

        {/* 第二页 */}
      </section>
      <section className='text-[##0A0B11] w-full h-screen box-border bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center gap-[20px]'>
          <div className='text-[50px] text-center font-bold space-y-[10px] leading-[1]'>Build control into the card, before spend even happens.</div>
          <div className='text-[20px]'>Don't compromise on growth or control</div>
        </div>

        <div className='w-full flex gap-[50px] flex-nowrap mt-[150px] h-[360px] justify-center'>
          <div className='w-[420px] h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
            <div>
              <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 top-[-100px]' src="/src/assets/images/Marketing-virtual-card.png" alt="Lavas" />
            </div>
            <div className='font-bold text-[28px]'>
              Marketing virtual cards
            </div>
            <div className='text-[18px] mt-[26px]'>
              Get unlimited virtual cards for yourself or the employees, we make your money more safe.
            </div>
          </div>
          <div className='w-[420px] h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
            <div>
              <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 top-[-100px]' src="/src/assets/images/Marketing-virtual-card.png" alt="Lavas" />
            </div>
            <div className='font-bold text-[28px]'>
              Marketing virtual cards
            </div>
            <div className='text-[18px] mt-[26px]'>
              Get unlimited virtual cards for yourself or the employees, we make your money more safe.
            </div>
          </div>
          <div className='w-[420px] h-[365px] rounded-[16px] shadow-[0px_20px_50px_0px_rgba(100,74,74,0.10)] p-[30px] pt-[140px] box-border relative'>
            <div>
              <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 top-[-100px]' src="/src/assets/images/Marketing-virtual-card.png" alt="Lavas" />
            </div>
            <div className='font-bold text-[28px]'>
              Marketing virtual cards
            </div>
            <div className='text-[18px] mt-[26px]'>
              Get unlimited virtual cards for yourself or the employees, we make your money more safe.
            </div>
          </div>

        </div>





      </section>
    </>


  );
};

export default Home;