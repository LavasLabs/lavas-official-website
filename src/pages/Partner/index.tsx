import { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Space, message } from 'antd';

const Partner = () => {
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

    useEffect(() => {

    }, []);

    return (
        <section className='w-full relative'>
            {contextHolder}
            <div className='relative w-full h-auto pt-[100px] bg-[url("/images/partner-banner.png")] bg-contain bg-no-repeat'>
                <div className='max-w-[1920px] mx-auto pt-[6%] pb-[10%] pr-[clamp(40px,13%,250px)] text-right text-white'>
                    <div className='text-[clamp(32px,5vw,60px)] text-[#FFF] font-bold font-roboto leading-[90%] uppercase text-right [text-shadow:0px_4px_10px_rgba(0,0,0,0.25)]'>Collaborate with Lavas</div>
                    <div className='text-[clamp(32px,5vw,60px)] text-[#FFF] font-bold font-roboto leading-[90%] uppercase text-right [text-shadow:0px_4px_10px_rgba(0,0,0,0.25)]'>Labs to accelerate growth</div>
                </div>

                <div className='max-w-[1920px] mx-auto w-full px-[clamp(40px,16%,310px)] flex flex-col justify-center box-border gap-y-[170px]'>
                    {/* 表单区域 */}
                    <div className='w-full mx-auto bg-[#FFF] rounded-[24px] bg-white shadow-[0px_10px_80px_0px_rgba(0,0,0,0.10)] p-[40px] box-border'>
                        <h2 className='text-[32px] font-bold text-center mb-4'>Our Partners</h2>
                        <p className='text-center text-gray-600 mb-[40px]'>
                            Lavas Labs works with Tier-1 companies in the industry for our business operation and business growth.
                        </p>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <div className='grid grid-cols-2 gap-x-[20px] gap-y-[12px]'>
                                <Form.Item
                                    name="firstName"
                                    label={<span>First name<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                >
                                    <Input placeholder="Enter your name" className='h-[48px] rounded-[8px]' />
                                </Form.Item>

                                <Form.Item
                                    name="lastName"
                                    label={<span>Last name<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: 'Please input your last name!' }]}
                                >
                                    <Input placeholder="Enter your name" className='h-[48px] rounded-[8px]' />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label={<span>Email<span className='text-red-500'>*</span></span>}
                                    rules={[
                                        { required: true, message: 'Please input your email!' },
                                        { type: 'email', message: 'Please enter a valid email!' }
                                    ]}
                                >
                                    <Input placeholder="Enter your work email" className='h-[48px] rounded-[8px]' />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label={<span>Phone number<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}

                                >
                                    <Input
                                        addonBefore={"+852"}
                                        placeholder="Enter your phone number"
                                        className='h-[48px]'
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="companyName"
                                    label="Company name"
                                >
                                    <Input placeholder="Enter company name" className='h-[48px] rounded-[8px]' />
                                </Form.Item>

                                <Form.Item
                                    name="companyWebsite"
                                    label="Company website"
                                >
                                    <Input placeholder="Enter company website" className='h-[48px] rounded-[8px]' />
                                </Form.Item>

                                <Form.Item
                                    name="collaborationType"
                                    label={<span>Collaboration Type<span className='text-red-500'>*</span></span>}
                                    rules={[{ required: true, message: 'Please select collaboration type!' }]}
                                >
                                    <Select
                                        placeholder="What are you interested in?"
                                        className='h-[48px]'
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

                            <Form.Item className='text-center mt-[32px]'>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    className='min-w-[200px] h-[48px] rounded-[24px] bg-[#000000]'
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>


                    <div className='w-full flex flex-col text-[#0A0B11]'>
                        <Space direction='vertical'>
                            <div className='font-[700] text-[clamp(32px,5vw,60px)]'>Our Vision</div>
                            <div>We are dedicated to transforming the way people make payments. Through the blockchain technology and digital assets, we are building a digital asset payment infrastructure focusing on promoting greater financial inclusion and economic opportunities of cryptocurrencies.</div>
                        </Space>
                        <img className='my-[40px]' src='/images/partner-vision.png' alt='' />

                        <div className='w-full flex justify-between'>
                            <div className='w-[50%]'>
                                <div className='font-[700] relative'>
                                    <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                                    <span className='z-[999999] text-[20px] relative'>Crypto Pioneers</span>
                                </div>
                                <div className='opacity-50 mt-[8px]'>
                                    Our vision is to be at the forefront of the future by pioneering cryptocurrency as a secure and seamless payment method
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <div className='font-[700] relative'>
                                    <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[0px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                                    <span className='z-[999999] text-[20px] relative'>Digital Payment Revolution</span>
                                </div>
                                <div className='opacity-50 mt-[8px]'>
                                    We aim to spread the utility of cryptocurrency to everyone as we believe that the future of payment lies in digitalization, and we are proud to make this future a reality
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <div className='max-w-[1920px] mx-auto w-full py-[170px] flex flex-col justify-center box-border relative'>
                    <div className='relative w-full pr-[clamp(40px,16%,310px)] box-border'>
                        <div className='border-t-[3px] border-[#0A0B11] w-[40%] absolute top-[30px] left-[0px] relative'>
                            <img className='w-[16px] h-[48px] h-auto object-contain absolute right-[-2px] top-[-10px]' src="/images/text-front-icon.png" alt="" />
                        </div>
                        <div className='font-[700] text-[clamp(32px,4vw,50px)] ml-[32px] text-right'>Compliance & Security</div>
                    </div>
                    <div className='w-full px-[clamp(40px,16%,310px)] box-border flex flex-col text-[#0A0B11]'>
                        <div className='text-[clamp(24px,3vw,40px)] text-right font-[700] mt-[12px] mb-[60px]'>
                            We are dedicated to upholding the highest compliance standards
                        </div>

                        <div className='w-full flex gap-[30px]'>
                            <div className='flex flex-col w-[calc(100%/3-30px)]'>
                                <img className='w-full h-[200px] object-cover rounded-[16px] mb-[24px]' src='/images/partner-b1.png' alt='Legitimacy' />
                                <div className='font-[700] text-[24px] mb-[16px]'>Legitimacy and Licensing</div>
                                <div className='opacity-50'>
                                    Lavas Labs credit card is a legitimate financial product operated by a licensed and regulated entity established in Hong Kong
                                </div>
                            </div>

                            <div className='flex flex-col w-[calc(100%/3-30px)]'>
                                <img className='w-full h-[200px] object-cover rounded-[16px] mb-[24px]' src='/images/partner-b2.png' alt='eKYC' />
                                <div className='font-[700] text-[24px] mb-[16px]'>Full eKYC execution</div>
                                <div className='opacity-50'>
                                    Partnered with industry leading eKYC provider Sumsub, Lavas Labs is executing full eKYC with automated ID and biometric verification to protect our users
                                </div>
                            </div>

                            <div className='flex flex-col w-[calc(100%/3-30px)]'>
                                <img className='w-full h-[200px] object-cover rounded-[16px] mb-[24px]' src='/images/partner-b3.png' alt='AML' />
                                <div className='font-[700] text-[24px] mb-[16px]'>AML Compliance</div>
                                <div className='opacity-50'>
                                    We run real-time blockchain transaction monitoring to comply with AML regulations
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Partner;

