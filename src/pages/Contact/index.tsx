import { useState } from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import useGlobalStore from '../../store/useGlobalStore';

const { TextArea } = Input;

interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

const Contact = () => {
    const { isMobile } = useGlobalStore();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: ContactFormValues) => {
        console.log(values);
        setLoading(true);
        setTimeout(() => {
            messageApi.info('This function is not enabled. Please contact the administrator');
            setLoading(false);
        }, 500);
    };

    return (
        <section className={`text-[#0A0B11] w-full box-border relative overflow-hidden ${isMobile ? '' : 'min-h-screen'}`}>
            {contextHolder}
            <div className={`max-w-[1920px] mx-auto bg-[#F4F8F9] w-full box-border ${isMobile ? 'px-[20px] pb-[40px] pt-[30px] mb-[60px] flex flex-col gap-[30px]' : 'px-[clamp(40px,13%,250px)] py-[60px] mb-[170px] flex gap-[60px]'}`}>
                <div className={`flex flex-col gap-[20px] justify-between ${isMobile ? 'w-full text-center' : 'w-[40%]'}`}>
                    <div>
                        <h1 className={`font-bold mb-[20px] ${isMobile ? 'text-[32px]' : 'text-[clamp(40px,5vw,50px)]'}`}>Let's Talk</h1>
                        <p className='text-[16px] text-[#666]'>
                            Schedule a time to chat with our team. We are always ready to assist you.
                        </p>
                    </div>
                    {!isMobile && (
                        <div>
                            <img src="/images/black-red-icon.png" alt="Contact" className='w-[40px]' />
                            <p className='mt-[20px] text-[14px] text-[#666]'>
                                Please provide us with some detailed information about you, and we
                                will contact you as soon as possible!
                            </p>
                        </div>
                    )}
                </div>

                <div className={isMobile ? 'w-full' : 'w-[60%]'}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        className={`w-full rounded-[20px] bg-[#FFF] ${isMobile ? 'p-[20px]' : 'p-[32px]'}`}
                    >
                        <div className='flex gap-[20px]'>
                            <Form.Item
                                label={<span>First name<span className='text-[#FF0000]'>*</span></span>}
                                name="firstName"
                                className='flex-1'
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input placeholder="Enter your name" className={`${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                            </Form.Item>

                            <Form.Item
                                label={<span>Last name<span className='text-[#FF0000]'>*</span></span>}
                                name="lastName"
                                className='flex-1'
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input placeholder="Enter your name" className={`${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                            </Form.Item>
                        </div>

                        <Form.Item
                            label={<span>Email<span className='text-[#FF0000]'>*</span></span>}
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                        >
                            <Input placeholder="Enter your work email" className='h-[48px]' />
                        </Form.Item>

                        <Form.Item
                            label={<span>Phone number<span className='text-[#FF0000]'>*</span></span>}
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input
                                addonBefore={
                                    <Select defaultValue="+852" className='w-[100px]'>
                                        <Select.Option value="+852">+852</Select.Option>
                                        <Select.Option value="+86">+86</Select.Option>
                                    </Select>
                                }
                                placeholder="Enter your phone number"
                                className='h-[48px]'
                            />
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="message"
                            className='mb-[80px]'
                        >
                            <TextArea
                                placeholder="How can we help you?"
                                rows={4}
                                maxLength={300}
                                showCount
                            />
                        </Form.Item>

                        <Form.Item className='mb-[0px] mt-[40px]'>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className={`w-full bg-[#0A0B11] text-white rounded-[24px] ${isMobile ? 'h-[40px]' : 'h-[48px]'}`}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    {isMobile && (
                        <div className='mt-[30px]'>
                            <img src="/images/black-red-icon.png" alt="Contact" className='w-[30px]' />
                            <p className='mt-[20px] text-[14px] text-[#666]'>
                                Please provide us with some detailed information about you, and we
                                will contact you as soon as possible!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;