interface PartnersSectionProps {
  logoUrlList: string[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ logoUrlList }) => {
  return (
    <section className='text-[#0A0B11] px-[clamp(40px,16%,310px)] w-full min-h-screen box-border py-[170px] bg-[#FFF] flex justify-center items-center flex-col'>
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
    </section>
  );
};

export default PartnersSection;