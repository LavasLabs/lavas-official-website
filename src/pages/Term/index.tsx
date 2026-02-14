import { Segmented } from 'antd';
// import type { TabsProps } from 'antd';
// Tabs
import { useState } from 'react';
import TermContent from './components/TermContent';
import './index.css';
import useGlobalStore from '../../store/useGlobalStore';
import { assetPath } from '../../utils/assetPath';

const Term = () => {
    const { isMobile } = useGlobalStore();
    const [activeRegion, setActiveRegion] = useState<'0' | '1'>('0');
    const [activeType] = useState<'0' | '1' | '2' | '3' | '4' | '5' | '6'>('0');

    // setActiveType

    const segmentedOptions = [
        {
            label: (
                <div className={`box-border flex flex-wrap justify-center items-center min-h-[48px] ${isMobile ? 'px-[12px] py-[8px]' : 'px-[22px] py-[12px]'}`}>
                    <span className={`whitespace-normal flex items-center ${isMobile ? 'text-[14px] max-w-[120px] min-h-[32px]' : 'text-[clamp(14px,1.2vw,18px)] max-w-[300px] min-h-[48px]'}`}>General Terms and Conditions</span>
                    {/* <i className='iconfont icon-next ml-[4px]'></i> */}
                </div>
            ),
            value: '0',
        },
        {
            label: (
                <div className={`box-border flex flex-wrap justify-center items-center min-h-[48px] ${isMobile ? 'px-[12px] py-[8px]' : 'px-[22px] py-[12px]'}`}>
                    <span className={`whitespace-normal flex items-center ${isMobile ? 'text-[14px] max-w-[120px] min-h-[32px]' : 'text-[clamp(14px,1.2vw,18px)] max-w-[300px] min-h-[48px]'}`}>Privacy Policy</span>
                </div>
            ),
            value: '1',
        },
    ];

    // const tabItems: TabsProps['items'] = [
    //     {
    //         key: '0',
    //         label: 'Volcano Card',
    //         children: <TermContent region={activeRegion} type="0" />
    //     },
    //     {
    //         key: '1',
    //         label: 'Volcano Card2',
    //         children: <TermContent region={activeRegion} type="1" />
    //     },
    // ];

    return (
        <section className='text-[#0A0B11] w-full min-h-screen box-border bg-[#FFF] flex items-center flex-col'>
            <div
                className="relative w-full aspect-[16/9] bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${isMobile ? assetPath('/images/term-banner-mobile.png') : assetPath('/images/term-banner.png')})` }}
            >
                {/* <div className='max-w-[1920px] mx-auto mt-[clamp(10px,30%,30%)]  pr-[clamp(40px,13%,250px)] text-right text-white'>
                    <div className='text-[clamp(22px,5vw,60px)] text-[#FFF] font-bold font-roboto leading-[90%] uppercase text-right [text-shadow:0px_4px_10px_rgba(0,0,0,0.25)]'>SERVICES TERMS &</div>
                    <div className='text-[clamp(22px,5vw,60px)] text-[#FFF] font-bold font-roboto leading-[90%] uppercase text-right [text-shadow:0px_4px_10px_rgba(0,0,0,0.25)]'>CONDITIONS</div>
                </div> */}
                <div className={`w-full box-border ${isMobile ? 'mt-[calc(100%+20px)] px-[20px] pb-[60px]' : 'mt-[clamp(20px,40%,40%)] px-[clamp(40px,16%,310px)] pb-[170px]'}`}>
                    <Segmented
                        options={segmentedOptions}
                        value={activeRegion}
                        onChange={(value) => setActiveRegion(value as typeof activeRegion)}
                        block={true}
                        // className='w-full bg-[#F6F6F6] p-2 rounded-lg'
                        className='rounded-[16px]'
                    />
                    <div className={`${isMobile ? 'mt-[30px]' : 'mt-[8%]'}`}>
                        <TermContent
                            region={activeRegion}
                            type={activeType}
                            onRegionChange={setActiveRegion}
                        />
                    </div>
                    {/* <Tabs
                        items={tabItems}
                        activeKey={activeType}
                        onChange={(key) => setActiveType(key as typeof activeType)}
                        className='mt-[60px]'
                    // tabBarStyle={{
                    //     background: '#F6F6F6',
                    //     padding: '8px',
                    //     borderRadius: '8px'
                    // }}
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default Term;