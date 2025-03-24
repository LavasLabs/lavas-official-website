import { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Space, message } from 'antd';
import useGlobalStore from '../../store/useGlobalStore';

const Partner = () => {
    const { isMobile } = useGlobalStore();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: any) => {
        console.log(values);
        setLoading(true);
        setTimeout(() => {
            messageApi.info('This function is not enabled. Please contact the administrator');
            setLoading(false);
        }, 500);
    };

    const securityCards = [
        {
            image: '/images/partner-b1.png',
            alt: 'Legitimacy',
            title: 'Legitimacy and Licensing',
            description: 'Lavas Labs credit card is a legitimate financial product operated by a licensed and regulated entity established in Hong Kong'
        },
        {
            image: '/images/partner-b2.png',
            alt: 'eKYC',
            title: 'Full eKYC execution',
            description: 'Partnered with industry leading eKYC provider Sumsub, Lavas Labs is executing full eKYC with automated ID and biometric verification to protect our users'
        },
        {
            image: '/images/partner-b3.png',
            alt: 'Security',
            title: 'Security First',
            description: 'We prioritize the security of our users assets and data. Our platform is built with industry-leading security measures and protocols'
        }
    ];


    useEffect(() => {

    }, []);

    return (
        <section className='w-full relative'>
            {contextHolder}
            <div className={`relative w-full h-auto bg-contain bg-no-repeat ${
                isMobile 
                    ? 'bg-[url("/images/partner-banner-mobile.png")] pt-[54%]' 
                    : 'bg-[url("/images/partner-banner.png")] pt-[100px]'
            }`}>
                <div className={`max-w-[1920px] mx-auto text-[#FFF] ${isMobile ? 'pt-[4%] pb-[6%] px-[30px]' : 'pt-[4%] pb-[10%] pr-[clamp(40px,13%,250px)] pl-[30%] text-right'}`}>
                    <div className={`font-bold font-roboto leading-[90%] uppercase  [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px]  ${isMobile ? 'text-[28px] text-center' : 'text-[clamp(32px,5vw,60px)] text-right'}`}>Collaborate with Lavas Labs to accelerate growth</div>
                    <div className={`text-[14px] mt-[24px] [text-shadow:0px_4px_10px_rgba(0,0,0,0.5)] [-webkit-text-stroke:0.2px]  ${isMobile ? 'hidden' : ''}`}>Join the global partner community to jointly build solutions, develop skills, and collaborate with Lavas Labs for sales</div>
                </div>

                <div className={`max-w-[1920px] mx-auto w-full flex flex-col justify-center box-border ${isMobile ? 'px-[30px] gap-y-[60px]' : 'px-[clamp(40px,16%,310px)] gap-y-[170px]'}`}>
                    <div className={`w-full mx-auto bg-[#FFF] rounded-[24px] bg-white shadow-[0px_10px_80px_0px_rgba(0,0,0,0.10)] box-border ${isMobile ? 'p-[20px]' : 'p-[40px]'}`}>
                        <h2 className={`font-bold text-center mb-4 ${isMobile ? 'text-[24px]' : 'text-[32px]'}`}>Our Partners</h2>
                        <p className={`text-center text-gray-600 ${isMobile ? 'mb-[20px] text-[14px]' : 'mb-[40px]'}`}>
                            Lavas Labs works with Tier-1 companies in the industry for our business operation and business growth.
                        </p>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-[10px]' : 'grid-cols-2 gap-x-[20px] gap-y-[12px]'}`}>
                                <Form.Item
                                    name="firstName"
                                    label={<span>First name<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                >
                                    <Input placeholder="Enter your name" className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="lastName"
                                    label={<span>Last name<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: 'Please input your last name!' }]}
                                >
                                    <Input placeholder="Enter your name" className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label={<span>Email<span className='text-red-500'>*</span></span>}
                                    rules={[
                                        { required: true, message: 'Please input your email!' },
                                        { type: 'email', message: 'Please enter a valid email!' }
                                    ]}
                                >
                                    <Input placeholder="Enter your work email" className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label={<span>Phone number<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input
                                        addonBefore={"+852"}
                                        placeholder="Enter your phone number"
                                        className={`${isMobile ? 'h-[40px]' : 'h-[48px]'}`}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="companyName"
                                    label="Company name"
                                >
                                    <Input placeholder="Enter company name" className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="companyWebsite"
                                    label="Company website"
                                >
                                    <Input placeholder="Enter company website" className={`rounded-[8px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                                </Form.Item>

                                <Form.Item
                                    name="collaborationType"
                                    label={<span>Collaboration Type<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: 'Please select collaboration type!' }]}
                                >
                                    <Select
                                        placeholder="What are you interested in?"
                                        className={`${isMobile ? 'h-[40px]' : 'h-[48px]'}`}
                                        options={[
                                            { value: 'business', label: 'Business Partnership' },
                                            { value: 'technology', label: 'Technology Partnership' },
                                            { value: 'marketing', label: 'Marketing Partnership' }
                                        ]}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="message"
                                    label="Message"
                                >
                                    <Input.TextArea
                                        placeholder="How can we help you?"
                                        className='rounded-[8px]'
                                        rows={4}
                                        maxLength={300}
                                        showCount
                                    />
                                </Form.Item>
                            </div>

                            <Form.Item className={`text-center ${isMobile ? 'mt-[20px]' : 'mt-[32px]'}`}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    className={`bg-[#000000] rounded-[24px] ${isMobile ? 'w-full h-[40px]' : 'min-w-[200px] h-[48px]'}`}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    <div className='w-full flex flex-col text-[#0A0B11]'>
                        <Space direction='vertical'>
                            <div className={`font-[700] ${isMobile ? 'text-[30px] text-center' : 'text-[clamp(32px,5vw,60px)]'}`}>Our Vision</div>
                            <div className={isMobile ? 'text-[14px] text-center' : ''}>We are dedicated to transforming the way people make payments. Through the blockchain technology and digital assets, we are building a digital asset payment infrastructure focusing on promoting greater financial inclusion and economic opportunities of cryptocurrencies.</div>
                        </Space>
                        <img
                            className={`w-full rounded-[20px] ${isMobile
                                    ? 'my-[20px] h-[200px] object-cover object-[50%_50%]'
                                    : 'my-[40px] object-contain'
                                }`}
                            src='/images/partner-vision.png'
                            alt=''
                        />

                        <div className={`w-full ${isMobile ? 'flex flex-col gap-[20px]' : 'flex justify-between'}`}>
                            <div className={isMobile ? 'w-full' : 'w-[50%]'}>
                                <div className='font-[700] relative'>
                                    <img className={`h-auto object-contain absolute left-[0px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src="/images/text-front-icon.png" alt="" />
                                    <span className={`z-[999999] relative ${isMobile ? 'text-[16px]' : 'text-[20px]'}`}>Crypto Pioneers</span>
                                </div>
                                <div className={`opacity-50 mt-[8px] ${isMobile ? 'text-[14px]' : ''}`}>
                                    Our vision is to be at the forefront of the future by pioneering cryptocurrency as a secure and seamless payment method
                                </div>
                            </div>
                            <div className={isMobile ? 'w-full' : 'w-[50%]'}>
                                <div className='font-[700] relative'>
                                    <img className={`h-auto object-contain absolute left-[0px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src="/images/text-front-icon.png" alt="" />
                                    <span className={`z-[999999] relative ${isMobile ? 'text-[16px]' : 'text-[20px]'}`}>Digital Payment Revolution</span>
                                </div>
                                <div className={`opacity-50 mt-[8px] ${isMobile ? 'text-[14px]' : ''}`}>
                                    We aim to spread the utility of cryptocurrency to everyone as we believe that the future of payment lies in digitalization, and we are proud to make this future a reality
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`max-w-[1920px] mx-auto w-full flex flex-col justify-center box-border relative ${isMobile ? 'py-[60px]' : 'py-[170px]'}`}>
                    <div className={`relative w-full box-border ${isMobile ? 'pr-[60px]' : 'pr-[clamp(40px,16%,310px)]'}`}>
                        <div className='border-t-[3px] border-[#0A0B11] w-[40%] absolute top-[30px] left-[0px] relative'>
                            <img className={`h-auto object-contain absolute right-[-2px] top-[-10px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src="/images/text-front-icon.png" alt="" />
                        </div>
                        <div className={`font-[700] ml-[32px] text-right text-[clamp(32px,4vw,50px)] ${isMobile ? 'hidden' : ''}`}>Compliance & Security</div>
                    </div>
                    <div className={`w-full box-border flex flex-col text-[#0A0B11] ${isMobile ? 'px-[0px]' : 'px-[clamp(40px,16%,310px)]'}`}>
                        <div className={`text-right font-[700] mt-[12px] ${isMobile ? 'text-[22px] mb-[30px] px-[30px] box-border w-[80%] ml-auto' : 'text-[clamp(24px,3vw,40px)] mb-[60px]'}`}>
                            We are dedicated to upholding the highest compliance standards
                        </div>

                        <div className={`w-full ${isMobile ? 'flex flex-col gap-[20px] px-[40px] box-border justify-center items-center' : 'flex gap-[30px]'}`}>
                            {securityCards.map((card, index) => (
                                <div key={index} className={`flex flex-col ${isMobile ? 'w-[80%]' : 'w-[calc(100%/3-30px)]'}`}>
                                    <img 
                                        className={`object-cover rounded-[16px] ${isMobile ? 'w-full h-[160px] mb-[16px]' : 'w-full h-[200px] mb-[24px]'}`} 
                                        src={card.image} 
                                        alt={card.alt} 
                                    />
                                    <div className={`font-[700] mb-[16px] ${isMobile ? 'text-[18px]' : 'text-[24px]'}`}>
                                        {card.title}
                                    </div>
                                    <div className={`opacity-50 ${isMobile ? 'text-[14px]' : ''}`}>
                                        {card.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;