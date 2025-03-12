// import { useTranslation } from 'react-i18next';
import { Button, Divider, Space } from 'antd';

const Expense = () => {
  // const { t } = useTranslation();

  const logoUrlList = [
    '/logos/expense-logo1.svg',
    '/logos/expense-logo2.svg',
    '/logos/expense-logo3.svg',
    '/logos/expense-logo4.svg',
    '/logos/expense-logo5.svg',
    '/logos/expense-logo6.svg',
    '/logos/expense-logo7.svg',
    '/logos/expense-logo8.svg',
    '/logos/expense-logo9.svg',
    '/logos/expense-logo10.svg',
    '/logos/expense-logo11.svg',
    '/logos/expense-logo12.svg',
  ];

  return (
    <>
      {/* 第一页 */}
      <section className='bg-[#0A0B11] text-[#FFFFFF] px-[clamp(40px,13%,250px)]  w-full h-[calc(100vh-100px)] box-border flex items-center flex-col relative overflow-hidden'>
        <div className='z-[999] h-full relative w-full flex flex-col justify-between items-center pt-[60px] box-border'>
          <div className='w-full flex flex-col justify-center items-center max-w-[800px]'>
            <div className='text-[clamp(32px,3.5vw,46px)] font-[700] text-center space-y-[10px]  leading-[1]'>Expense management software designed to close your books faster</div>
            <div className='text-[20px] mt-[10px]'>Automated expense software built into your corporate card, reimbursements, and more</div>
          </div>
          <Button
            className='font-[700] px-[25px] py-[17px] h-[46px] w-[160px] !bg-[#D11616] hover:!bg-[#ff1818] hover:!border-none'
            color="danger"
            variant="solid"
            shape="round"
            size='large'
            onClick={() => window.location.href = '/contact'}
          >
            Start for Free
          </Button>
          <div className='w-full flex justify-between items-center'>
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
      {/* 第三页 */}
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
      {/* 第四页 */}
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
      {/* 第五页 */}
      <section className='text-[#0A0B11] w-full min-h-screen box-border py-[170px] bg-[#FFF] flex justify-center items-center flex-col'>

        <div className='box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            MAKE STRATEGIC DECISIONS WITH REAL-TIME EXPENSE REPORTING
          </div>
          <div className='text-[clamp(16px,1.5vw,20px)] mt-[10px] text-center'>Instantly access spend data and insight to save money for your business</div>
        </div>

        <div className='w-full max-w-[1920px] flex flex-row flex-1 h-full mt-[6%] px-[clamp(40px,16%,310px)] gap-[30px] box-border '>
          <div className='w-[calc(100%/3-14px)] p-[clamp(16px,2vw,24px)] box-border rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between'>
            <div className='flex flex-col gap-[20px] justify-between'>
              <div className='text-[clamp(20px,2.5vw,24px)]'>Get ahead of overspend</div>
              <div className='opacity-60 text-[clamp(14px,1.5vw,16px)]'>Stop making business decisions on stale data. Get real-time insights to make timely adjustments before your teams exceed their budget</div>
            </div>
            <div className='text-[clamp(20px,2.5vw,24px)] font-[700] mt-[20px]'>
              <Space className='flex-wrap'>
                <span className='text-[clamp(16px,1.8vw,18px)]'>commercial affairs</span>
                <span className='text-[clamp(12px,1.4vw,14px)] rounded-[8px] p-[8px] box-border bg-[#E6E7E7]'>
                  <span className='opacity-50 text-[#0A0B11]'>Year to date 2024</span>
                </span>
              </Space>
            </div>
            <Divider className='my-[clamp(16px,2vw,24px)]'></Divider>
            <img className='w-full' src="/images/expense-shape-t.png" alt="" />
          </div>
          <div className='w-[calc(100%/3-14px)] p-[clamp(16px,2vw,24px)] box-border rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between'>
            <div className='flex flex-col gap-[20px] justify-between'>
              <div className='text-[clamp(20px,2.5vw,24px)]'>Maximize visibility with centralized data</div>
              <div className='opacity-60 text-[clamp(14px,1.5vw,16px)]'>Lavas Labs's AI-powered assistance surfaces detailed financial answers with faster analysis across every business expense</div>
            </div>
            <Divider className='my-[clamp(16px,2vw,24px)]'></Divider>
            <img className='w-full' src="/images/expense-statistics.png" alt="" />
          </div>

          <div className='w-[calc(100%/3-14px)] p-[clamp(16px,2vw,24px)] box-border rounded-[22px] bg-[#FFF] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between'>
            <div className='flex flex-col gap-[20px] justify-between'>
              <div className='text-[clamp(20px,2.5vw,24px)]'>Uncover true costs</div>
              <div className='opacity-60 text-[clamp(14px,1.5vw,16px)]'>Lavas Labs continuously surfaces savings insights like duplicate subscriptions and unused solutions.</div>
              <Divider className='my-[clamp(16px,2vw,24px)]'></Divider>
            </div>
            <Space direction='vertical' className='w-full'>
              <img className='w-full rounded-[12px] bg-[#FFF] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.10)]' src="/images/expense-coffee.png" alt="" />
              <img className='w-full rounded-[12px] bg-[#FFF] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.10)]' src="/images/expense-perk.png" alt="" />
            </Space>
          </div>
        </div>


      </section>
      {/* 第六页 */}
      <section className='text-[#0A0B11] px-[clamp(40px,16%,310px)] w-full min-h-screen box-border  py-[170px] bg-[#FFF] flex justify-center items-center flex-col' >
        <div className='box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative'>
          <div className='text-[clamp(32px,3.5vw,42px)] font-[700] text-center max-w-[800px] leading-[1.2] relative'>
            <img className='w-[52px] h-auto object-contain absolute right-[-10%] top-[-40%]' src="/images/black-red-icon.png" alt="" />
            JOIN THE 30,000+ BUSINESSES ALREADY SIMPLIFYING THEIR FINANCES
          </div>
        </div>

        <div className='w-full max-w-[1920px] mx-auto mt-[8%] flex flex-wrap justify-between gap-y-[12px] gap-x-[15px]'>{
          logoUrlList.map((item, index) => {
            return (
              <div key={index} className='w-[calc(100%/6-13px)] aspect-square min-w-[140px] box-border bg-[#F7F7F7] rounded-[12px] flex items-center justify-center'>
                <img className='w-full h-full object-contain' src={item} alt="" />
              </div>
            )
          })
        }
        </div>
      </section >
    </>


  );
};

export default Expense;