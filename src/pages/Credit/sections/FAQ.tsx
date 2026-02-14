import { Collapse, type CollapseProps } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../../store/useGlobalStore';
import { assetPath } from '../../../utils/assetPath';

const FAQ = () => {
  const { isMobile } = useGlobalStore();
  const { t } = useTranslation('credit');

  const faqData = t('faq.questions', { returnObjects: true }) as Array<{question: string, answer: string[]}>;

  const commonCollapseProps: CollapseProps = {
    expandIcon: ({ isActive }) => (
      <RightOutlined rotate={isActive ? 90 : 0} className='text-[20px]' />
    ),
    expandIconPosition: "end",
    className: `${isMobile ? 'w-full' : 'w-[calc(50%-10px)]'} bg-transparent border-none [&_.ant-collapse-item]:border-none [&_.ant-collapse-header]:px-[40px] [&_.ant-collapse-header]:py-[30px] [&_.ant-collapse-content-box]:px-[40px] [&_.ant-collapse-content-box]:pb-[30px] [&_.ant-collapse-content-box]:pt-0`
  };

  const formatItems = (items: typeof faqData) => items.map((item, index) => ({
    key: (index + 1).toString(),
    label: (
      <div className={`${isMobile ? 'text-[18px]' : 'text-[20px]'}`}>
        {`${index + 1}. ${item.question}`}
      </div>
    ),
    children: (
      <div className='text-[16px] leading-[1.6]'>
        {item.answer.map((paragraph, pIndex) => (
          <div key={pIndex} className={pIndex !== item.answer.length - 1 ? 'mb-[20px]' : ''}>
            {paragraph}
          </div>
        ))}
      </div>
    ),
    className: '!bg-[#F7F7F7] rounded-[20px] mb-[20px] overflow-hidden'
  }));

  return (
    <section className={`w-full max-w-[1920px] mx-auto box-border bg-[#FFF] flex flex-col text-[#0A0B11] ${isMobile ? 'px-[40px] pt-[80px] mt-[40px] pb-[40px] h-auto' : 'px-[clamp(40px,16%,310px)] pb-[100px]'}`}>
      <div className="box-border w-full max-w-[1920px]">
        <div className={`relative font-[700] max-w-[800px] ${isMobile ? 'text-[24px] mb-[0px] w-fit' : 'text-[42px] w-[50%]'}`}>
          <img className={`absolute h-auto ${isMobile ? 'w-[30px] right-[20px] top-[-36%]' : 'w-[52px] right-[-10%] top-[-22%]'}`} src={assetPath('/images/black-red-icon.png')} alt="" />
          {t('faq.title')}
        </div>
        <div className={`${isMobile ? 'mt-[40px]' : 'mt-[60px]'}`}>
          <div className={`flex flex-wrap gap-[20px] ${isMobile ? 'flex-col' : ''}`}>
            {isMobile ? (
              <Collapse {...commonCollapseProps} items={formatItems(faqData)} />
            ) : (
              <>
                <Collapse {...commonCollapseProps} items={formatItems(faqData.filter((_, i) => i % 2 === 0))} />
                <Collapse {...commonCollapseProps} items={formatItems(faqData.filter((_, i) => i % 2 === 1))} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;