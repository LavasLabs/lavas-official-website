import useGlobalStore from '../../../store/useGlobalStore';

interface PartnersSectionProps {
  logoUrlList: string[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ logoUrlList }) => {
  const { isMobile } = useGlobalStore();

  return (
    <section className={`text-[#0A0B11] w-full box-border bg-[#FFF] flex justify-center items-center flex-col ${isMobile ? 'py-[70px] px-[0px]' : 'min-h-screen py-[170px] px-[clamp(40px,16%,310px)]'}`}>
      <div className={`box-border w-full max-w-[1920px] mx-auto flex flex-col items-center relative ${isMobile ? 'px-[40px]' : ''}`}>
        <div className={`font-[700] text-center max-w-[800px] leading-[1.2] relative ${isMobile ? 'text-[24px]' : 'text-[clamp(32px,3.5vw,42px)]'}`}>
          <img className={`h-auto object-contain absolute ${isMobile ? 'w-[30px] right-[-8%] top-[-36%]' : 'w-[52px] right-[-10%] top-[-40%]'}`} src="/images/black-red-icon.png" alt="" />
          JOIN THE 30,000+ BUSINESSES ALREADY SIMPLIFYING THEIR FINANCES
        </div>
      </div>

      <div className={`w-full max-w-[1920px] mx-auto flex flex-wrap box-border ${isMobile ? 'mt-[40px] px-[20px] gap-[10px] justify-center' : 'mt-[8%] justify-between gap-y-[12px] gap-x-[15px]'}`}>{
        logoUrlList.map((item, index) => {
          return (
            <div key={index} className={`aspect-square box-border bg-[#F7F7F7] rounded-[12px] flex items-center justify-center ${isMobile ? 'w-[calc(100%/3-7px)]' : 'w-[calc(100%/6-13px)] min-w-[140px]'}`}>
              <img className='w-full h-full object-contain' src={item} alt="" />
            </div>
          )
        })
      }
      </div>
    </section>
  );
};

export default PartnersSection;