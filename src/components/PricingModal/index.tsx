import React from 'react';
import { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';

interface PricingModalProps {
    open: boolean;
    onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const handleSubmit = (values: any) => {
        console.log('Form values:', values);
        setLoading(true);
        setTimeout(() => {
            messageApi.info('This function is not enabled. Please contact the administrator');
            setLoading(false);
            form.resetFields();
            onClose();
        }, 500);

    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            width={'50%'}
            className="pricing-modal"
            closable={false}
        >
            {contextHolder}
            <div className='relative px-[20px] pt-[20px] box-border'>
                <div className='absolute right-[-10%] top-[-10%]'>
                    <img src="/images/modal-red-square.png" alt="" className='w-[120px] h-[120px]' />
                </div>

                <div className='text-[32px] font-[700] mb-4'>Customized billing</div>
                <p className='text-gray-600 mb-8'>
                    Customized billing plan: suitable for merchants with large transaction volumes or special business models.
                </p>

                <div className='grid grid-cols-4 gap-x-[20px] font-[600] text-[16px]'>
                    <div className='flex items-start relative'>
                        <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                        <span className='z-[100] relative'>C+pricing</span>
                    </div>
                    <div className='flex items-start relative'>
                        <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                        <span className='z-[100] relative'>Large transaction volume discount</span>
                    </div>
                    <div className='flex items-start relative'>
                        <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                        <span className='z-[100] relative'>Multiple product discounts</span>
                    </div>
                    <div className='flex items-start relative'>
                        <img className='w-[16px] h-[48px] h-auto object-contain absolute left-[-2px] top-[0px]' src="/images/text-front-icon.png" alt="" />
                        <span className='z-[100] relative'>Specific country/region rates</span>
                    </div>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <div className='grid grid-cols-2 gap-[30px] gap-y-[6px]'>
                        <Form.Item
                            name="firstName"
                            label="First name"
                            rules={[{ required: true, message: 'Please input your first name!' }]}
                        >
                            <Input placeholder="Enter your name" className='h-[48px] rounded-lg' />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            label="Last name"
                            rules={[{ required: true, message: 'Please input your last name!' }]}
                        >
                            <Input placeholder="Enter your name" className='h-[48px] rounded-lg' />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="Email"
                            className='col-span-2'
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input placeholder="Enter your work email" className='h-[48px] rounded-lg' />
                        </Form.Item>
                    </div>

                    <Form.Item className='mb-0 text-center'>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className='min-w-[200px] h-[48px] rounded-[24px] bg-[#000000]'
                            loading={loading}
                        >
                            <span className='font-[700]'>Contact Sales</span>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default PricingModal;