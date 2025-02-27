import { useTranslation } from 'react-i18next';
import { Button, Tooltip } from 'antd';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='text-[#FFFFFF] w-full h-screen'>
        <div className='w-full'>
          <div>
            <div>
              <div className='font-sora text-[110px] font-bold uppercase inline-block bg-gradient-to-r from-[#D51029] via-[#D51029] via-[#A3001A] to-[#7E0010] bg-clip-text text-transparent'>
                Lavas Labs
              </div>
              <div>
                A corporate card designed for modern finance.
              </div>
              <div>
                Save money and time. All with one corporate card.
              </div>
              <div className='mt-[130px]'>
                <Button type="primary" shape="round" size='large'>
                  Start for  Free
                </Button>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>

        <div className='w-full flex gap-[50px] items-center mt-[100px]'>

          <div className='w-[260px]'>
            <div>
              Save more by preventing out-of-policy spend
            </div>
            <div>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-[260px]'>
            <div>
              Save more by preventing out-of-policy spend
            </div>
            <div>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-[260px]'>
            <div>
              Save more by preventing out-of-policy spend
            </div>
            <div>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-[260px]'>
            <div>
              Save more by preventing out-of-policy spend
            </div>
            <div>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>

        </div>


      </section>

      <section className='text-[#FFFFFF] w-full h-screen'>
        <div className='w-full'>
          <div>
            <div>
              <div className='font-sora text-[110px] font-bold uppercase inline-block bg-gradient-to-r from-[#D51029] via-[#D51029] via-[#A3001A] to-[#7E0010] bg-clip-text text-transparent'>
                Lavas Labs
              </div>
              <div>
                A corporate card designed for modern finance.
              </div>
              <div>
                Save money and time. All with one corporate card.
              </div>
              <div className='mt-[130px]'>
                <Button type="primary" shape="round" size='large'>
                  Start for  Free
                </Button>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>

        <div className='w-full flex gap-[50px] items-center mt-[100px]'>

          <div className='w-[260px]'>
            <div>
              Save more by preventing out-of-policy spend
            </div>
            <div>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-[260px]'>
            <div>
              Save more by preventing out-of-policy spend
            </div>
            <div>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-[260px]'>
            <div>
              Save more by preventing out-of-policy spend
            </div>
            <div>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>
          <div className='w-[260px]'>
            <div>
              Save more by preventing out-of-policy spend
            </div>
            <div>
              Preset controls on corporate cards for specific vendors and categories.
            </div>
          </div>

        </div>


      </section>
    </>


  );
};

export default Home;