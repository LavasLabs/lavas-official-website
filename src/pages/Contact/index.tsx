import { useState } from 'react';
import { Button, Form, Input, Select, message } from 'antd';

const { TextArea } = Input;

interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

const Contact = () => {
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
        <section className='text-[#0A0B11] w-full min-h-screen box-border relative overflow-hidden '>
            {contextHolder}
            <div className='px-[clamp(40px,13%,250px)] max-w-[1920px] mx-auto py-[60px] bg-[#F4F8F9] mb-[170px] w-full box-border flex gap-[60px]'>
                <div className='w-[40%] flex flex-col gap-[20px] justify-between'>
                    <div>
                        <h1 className='text-[clamp(40px,5vw,50px)] font-bold mb-[20px]'>Let's Talk</h1>
                        <p className='text-[16px] text-[#666]'>
                            Schedule a time to chat with our team. We are always ready to assist you.
                        </p>
                    </div>
                    <div>
                        <img src="/images/black-red-icon.png" alt="Contact" className='w-[40px]' />
                        <p className='mt-[20px] text-[14px] text-[#666]'>
                            Please provide us with some detailed information about you, and we
                            will contact you as soon as possible!
                        </p>
                    </div>
                </div>

                <div className='w-[60%]'>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        className='w-full rounded-[20px] bg-[#FFF] p-[32px]'
                    >
                        <div className='flex gap-[20px]'>
                            <Form.Item
                                label={<span>First name<span className='text-[#FF0000]'>*</span></span>}
                                name="firstName"
                                className='flex-1'
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input placeholder="Enter your name" className='h-[48px]' />
                            </Form.Item>

                            <Form.Item
                                label={<span>Last name<span className='text-[#FF0000]'>*</span></span>}
                                name="lastName"
                                className='flex-1'
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input placeholder="Enter your name" className='h-[48px]' />
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
                                className='w-full h-[48px] bg-[#0A0B11] text-white rounded-[24px]'
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Contact;