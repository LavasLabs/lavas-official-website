import React from 'react';
import { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import useGlobalStore from '../../store/useGlobalStore';

interface PricingModalProps {
    open: boolean;
    onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ open, onClose }) => {
    const { isMobile } = useGlobalStore();
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
            width={isMobile ? '100%' : '50%'}
            className="pricing-modal"
            closable={false}
        >
            {contextHolder}
            <div className='relative px-[20px] pt-[20px] box-border'>
                <div className='absolute right-[-10%] top-[-10%]'>
                    <img src="/images/modal-red-square.png" alt="" className={`${isMobile ? 'w-[80px] h-[80px]' : 'w-[120px] h-[120px]'}`} />
                </div>

                <div className={`font-[700] mb-4 ${isMobile ? 'text-[24px]' : 'text-[32px]'}`}>Customized billing</div>
                <p className={`mb-8 ${isMobile ? 'text-[14px]' : ''}`}>
                    Customized billing plan: suitable for merchants with large transaction volumes or special business models.
                </p>

                <div className={`grid font-[600] ${isMobile ? 'grid-cols-2 gap-[10px] text-[14px]' : 'grid-cols-4 gap-x-[20px] text-[16px]'}`}>
                    <div className='flex items-start relative'>
                        <img className={`h-auto object-contain absolute left-[-2px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src="/images/text-front-icon.png" alt="" />
                        <span className='z-[100] relative'>C+pricing</span>
                    </div>
                    <div className='flex items-start relative'>
                        <img className={`h-auto object-contain absolute left-[-2px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src="/images/text-front-icon.png" alt="" />
                        <span className='z-[100] relative'>Large transaction volume discount</span>
                    </div>
                    <div className='flex items-start relative'>
                        <img className={`h-auto object-contain absolute left-[-2px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src="/images/text-front-icon.png" alt="" />
                        <span className='z-[100] relative'>Multiple product discounts</span>
                    </div>
                    <div className='flex items-start relative'>
                        <img className={`h-auto object-contain absolute left-[-2px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src="/images/text-front-icon.png" alt="" />
                        <span className='z-[100] relative'>Specific country/region rates</span>
                    </div>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className={`${isMobile ? 'mt-[20px]' : 'mt-[40px]'}`}
                >
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-[10px]' : 'grid-cols-2 gap-[30px] gap-y-[6px]'}`}>
                        <Form.Item
                            name="firstName"
                            label="First name"
                            rules={[{ required: true, message: 'Please input your first name!' }]}
                        >
                            <Input placeholder="Enter your name" className={`rounded-lg ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            label="Last name"
                            rules={[{ required: true, message: 'Please input your last name!' }]}
                        >
                            <Input placeholder="Enter your name" className={`rounded-lg ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="Email"
                            className={isMobile ? '' : 'col-span-2'}
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input placeholder="Enter your work email" className={`rounded-lg ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                        </Form.Item>
                    </div>

                    <Form.Item className='mb-0 text-center'>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={`bg-[#000000] rounded-[24px] ${isMobile ? 'w-full h-[40px]' : 'min-w-[200px] h-[48px]'}`}
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