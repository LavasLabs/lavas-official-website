// import { useTranslation } from 'react-i18next';
import { Button, Divider, Space } from 'antd';

const Home = () => {
  // const { t } = useTranslation();


  return (
    <>
      {/* 第一页 */}
      <section className='text-[#FFFFFF] px-[12%] w-full h-[calc(100vh-100px)] box-border flex items-center flex-col relative overflow-hidden'>
        <div className='z-[999] h-full relative w-full flex flex-col justify-between items-center pt-[60px] box-border'>
          <div className='w-full flex flex-col justify-center items-center'>
            <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1] w-[80%]'>Expense management software designed to close your books faster</div>
            <div className='text-[20px] mt-[10px]'>Automated expense software built into your corporate card, reimbursements, and more</div>
          </div>
          <Button className='font-[700]' color="danger" variant="solid" shape="round" size='large'>
            Start for Free
          </Button>
          <div className='w-full flex justify-between items-center mt-[60px]'>
            <div className='flex-1 h-full relative'>
              <img className='absolute w-full h-auto top-[-40%] left-[-20%]' src="/images/expense-c-f.png" alt="" />
              <img className='absolute w-full h-auto bottom-[8%]' src="/images/expense-c-s.png" alt="" />
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
      {/* 第二页 */}
      <section className='text-[#0A0B11] w-full min-h-screen box-border py-[80px] bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center relative'>
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-80%]' src="/images/black-red-icon.png" alt="Lavas" />
            Control spend before it happens</div>
          <div className='text-[20px] mt-[10px]'>Give employees cards with policies built in, so you can prevent unapproved spend</div>
        </div>

        <div className='w-full flex flex-1 h-full mt-[30px] px-[12%] box-border'>
          <div className='w-[72%] h-full relative'>
            <img className='w-full' src="/images/expense-second.png" alt="" />
          </div>
          <div className='w-[28%] relative'>
            <div className='absolute left-[-20px] top-[50%] translate-y-[-50%]'>
              <Space direction='vertical'>
                <div className='font-[700] text-[20px] whitespace-nowrap'>
                  Pre-build budgets for responsible spend
                </div>
                <div className='opacity-60'>
                  Allow employees to request spend from pre-set budgets. Create custom workflows to make sure that the right stakeholders are looped in to approve.
                </div>
              </Space>
            </div>
          </div>
        </div>
      </section>
      {/* 第三页 */}
      <section className='text-[#FFF] w-full h-screen box-border pt-[80px] bg-[#0A0B11] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center relative'>
          <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-22%]' src="/images/white-red-icon.png" alt="Lavas" />
          <div className='text-[42px] font-[700] text-center space-y-[10px] leading-[1]'>Eliminate manual expense reporting</div>
          <div className='text-[18px] mt-[10px] opacity-60'>Free employees to do their job without expenses getting in their way.</div>
        </div>

        <div className='w-full flex flex-1 h-full mt-[30px] px-[12%] box-border relative'>
          <div className='w-[40%] pt-[4%] box-border h-full relative'>
            <img className='w-full' src="/images/expense-t-f.png" alt="" />
          </div>
          <img className='w-[50%] absolute bottom-[0px] right-[0px]' src="/images/expense-meteorite.png" alt="" />
        </div>
      </section>
      {/* 第四页 */}
      <section className='text-[#0A0B11] w-full min-h-screen box-border py-[80px] bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center relative'>
          <div className='w-[70%] text-[42px] font-[700] text-center space-y-[10px] leading-[1] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-22%]' src="/images/black-red-icon.png" alt="Lavas" />
            Free your team from manual expense management
          </div>
          <div className='text-[20px] mt-[10px]'>Expenses that submit themselves.</div>
        </div>

        <div className='w-full flex flex-1 h-full mt-[30px] pl-[12%] box-border'>
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
              <img className='w-[30%] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' src="/images/expense-chat.png" alt="" />
            </div>
            <img className='w-full absolute right-[0px] top-[0px]' src="/images/expense-people.png" alt="" />
          </div>
        </div>
      </section>
      {/* 第五页 */}
      <section className='text-[#0A0B11] w-full h-screen box-border py-[80px] bg-[#FFF] flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center items-center relative'>
          <div className='w-[70%] text-[42px] font-[700] text-center space-y-[10px] leading-[1] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-22%]' src="/images/black-red-icon.png" alt="Lavas" />
            Make strategic decisions with real-time expense reporting
          </div>
          <div className='text-[20px] mt-[10px]'>Instantly access spend data and insight to save money for your business</div>
        </div>

        <div className='w-full flex flex-1 h-full mt-[30px] px-[12%] gap-[30px] box-border'>
          <div className='p-[24px] box-border w-[calc(100%/3-14px)] rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)]'>
            <div className='flex flex-col gap-[20px] justify-between'>
              <div className='text-[24px]'>Get ahead of overspend</div>
              <div className='opacity-60'>Stop making business decisions on stale data. Get real-time insights to make timely adjustments before your teams exceed their budget</div>
            </div>
            <div className='text-[24px] font-[700] mt-[20px]'>
              <Space>
                <span className='text-[18px]'>commercial affairs</span>
                <span className='text-[14px] rounded-[8px] p-[8px] box-border bg-[#E6E7E7]'>
                  <span className='opacity-50 text-[#0A0B11]'>Year to date 2024</span>
                </span>
              </Space>
            </div>
            <Divider></Divider>
            <img className='w-full' src="/images/expense-shape-t.png" alt="Lavas" />
          </div>
          <div className='p-[24px] box-border w-[calc(100%/3-14px)] rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)]'>
            <div className='flex flex-col gap-[20px] justify-between'>
              <div className='text-[24px]'>Maximize visibility with centralized data</div>
              <div className='opacity-60'>Lavas Labs’s AI-powered assistance surfaces detailed financial answers with faster analysis across every business expense</div>
            </div>
            <Divider></Divider>
            <img className='w-full' src="/images/expense-statistics.png" alt="Lavas" />
          </div>
          <div className='p-[24px] box-border w-[calc(100%/3-14px)] rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between'>
            <div className='flex flex-col gap-[20px] justify-between'>
              <div className='text-[24px]'>Uncover true costs</div>
              <div className='opacity-60'>Lavas Labs continuously surfaces savings insights like duplicate subscriptions and unused solutions.</div>
              <Divider></Divider>
            </div>
            <Space direction='vertical'>
              <img className='w-full rounded-[12px] bg-[#FFF] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.10)]' src="/images/expense-coffee.png" alt="Lavas" />
              <img className='w-full rounded-[12px] bg-[#FFF] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.10)]' src="/images/expense-perk.png" alt="Lavas" />
            </Space>
          </div>
        </div>
      </section>
    </>


  );
};

export default Home;