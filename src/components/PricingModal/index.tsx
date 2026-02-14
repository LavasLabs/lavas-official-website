import React from 'react';
import { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import useGlobalStore from '../../store/useGlobalStore';
import { assetPath } from '../../utils/assetPath';

interface PricingModalProps {
    open: boolean;
    onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ open, onClose }) => {
    const { isMobile } = useGlobalStore();
    const { t } = useTranslation('components');
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const features = t('pricingModal.features', { returnObjects: true }) as string[];

    const onFinish = (values: any) => {
        console.log(values);
        setLoading(true);
        setTimeout(() => {
            messageApi.info(t('messages.functionNotEnabled'));
            setLoading(false);
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
                    <img src={assetPath('/images/modal-red-square.png')} alt="" className={`${isMobile ? 'w-[80px] h-[80px]' : 'w-[120px] h-[120px]'}`} />
                </div>

                <div className={`font-[700] mb-4 ${isMobile ? 'text-[24px]' : 'text-[32px]'}`}>{t('pricingModal.title')}</div>
                <p className={`mb-8 ${isMobile ? 'text-[14px]' : ''}`}>
                    {t('pricingModal.description')}
                </p>

                <div className={`grid font-[600] ${isMobile ? 'grid-cols-2 gap-[10px] text-[14px]' : 'grid-cols-4 gap-x-[20px] text-[16px]'}`}>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-start relative'>
                            <img className={`h-auto object-contain absolute left-[-2px] top-[0px] ${isMobile ? 'w-[12px]' : 'w-[16px]'}`} src={assetPath('/images/text-front-icon.png')} alt="" />
                            <span className='z-[100] relative'>{feature}</span>
                        </div>
                    ))}
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    className={`${isMobile ? 'mt-[20px]' : 'mt-[40px]'}`}
                >
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-[10px]' : 'grid-cols-2 gap-[30px] gap-y-[6px]'}`}>
                        <Form.Item
                            name="firstName"
                            label={t('pricingModal.form.firstName')}
                            rules={[{ required: true, message: t('pricingModal.form.validation.firstNameRequired') }]}
                        >
                            <Input placeholder={t('pricingModal.form.firstNamePlaceholder')} className={`rounded-lg ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            label={t('pricingModal.form.lastName')}
                            rules={[{ required: true, message: t('pricingModal.form.validation.lastNameRequired') }]}
                        >
                            <Input placeholder={t('pricingModal.form.lastNamePlaceholder')} className={`rounded-lg ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label={t('pricingModal.form.email')}
                            className={isMobile ? '' : 'col-span-2'}
                            rules={[
                                { required: true, message: t('pricingModal.form.validation.emailRequired') },
                                { type: 'email', message: t('pricingModal.form.validation.emailFormat') }
                            ]}
                        >
                            <Input placeholder={t('pricingModal.form.emailPlaceholder')} className={`rounded-lg ${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                        </Form.Item>
                    </div>

                    <Form.Item className='mb-0 text-center'>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={`bg-[#000000] rounded-[24px] ${isMobile ? 'w-full h-[40px]' : 'min-w-[200px] h-[48px]'}`}
                            loading={loading}
                        >
                            <span className='font-[700]'>{t('pricingModal.form.contactSales')}</span>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default PricingModal;