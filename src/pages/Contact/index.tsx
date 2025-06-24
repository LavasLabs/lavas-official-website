import { useState } from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation('contact');
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: ContactFormValues) => {
        console.log(values);
        setLoading(true);
        setTimeout(() => {
            messageApi.info(t('messages.functionNotEnabled', { ns: 'components' }));
            setLoading(false);
        }, 500);
    };

    return (
        <section className={`text-[#0A0B11] w-full box-border relative overflow-hidden ${isMobile ? '' : 'min-h-screen'}`}>
            {contextHolder}
            <div className={`max-w-[1920px] mx-auto bg-[#F4F8F9] w-full box-border ${isMobile ? 'px-[20px] pb-[40px] pt-[30px] mb-[60px] flex flex-col gap-[30px]' : 'px-[clamp(40px,13%,250px)] py-[60px] mb-[170px] flex gap-[60px]'}`}>
                <div className={`flex flex-col gap-[20px] justify-between ${isMobile ? 'w-full text-center' : 'w-[40%]'}`}>
                    <div>
                        <h1 className={`font-bold mb-[20px] ${isMobile ? 'text-[32px]' : 'text-[clamp(40px,5vw,50px)]'}`}>{t('title')}</h1>
                        <p className='text-[16px] text-[#666]'>
                            {t('subtitle')}
                        </p>
                    </div>
                    {!isMobile && (
                        <div>
                            <img src="/images/black-red-icon.png" alt="Contact" className='w-[40px]' />
                            <p className='mt-[20px] text-[14px] text-[#666]'>
                                {t('description')}
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
                                label={<span>{t('form.firstName')}<span className='text-[#FF0000]'>{t('form.required')}</span></span>}
                                name="firstName"
                                className='flex-1'
                                rules={[{ required: true, message: t('form.validation.firstNameRequired') }]}
                            >
                                <Input placeholder={t('form.firstNamePlaceholder')} className={`${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                            </Form.Item>

                            <Form.Item
                                label={<span>{t('form.lastName')}<span className='text-[#FF0000]'>{t('form.required')}</span></span>}
                                name="lastName"
                                className='flex-1'
                                rules={[{ required: true, message: t('form.validation.lastNameRequired') }]}
                            >
                                <Input placeholder={t('form.lastNamePlaceholder')} className={`${isMobile ? 'h-[40px]' : 'h-[48px]'}`} />
                            </Form.Item>
                        </div>

                        <Form.Item
                            label={<span>{t('form.email')}<span className='text-[#FF0000]'>{t('form.required')}</span></span>}
                            name="email"
                            rules={[{ required: true, type: 'email', message: t('form.validation.emailRequired') }]}
                        >
                            <Input placeholder={t('form.emailPlaceholder')} className='h-[48px]' />
                        </Form.Item>

                        <Form.Item
                            label={<span>{t('form.phoneNumber')}<span className='text-[#FF0000]'>{t('form.required')}</span></span>}
                            name="phoneNumber"
                            rules={[{ required: true, message: t('form.validation.phoneRequired') }]}
                        >
                            <Input
                                addonBefore={
                                    <Select defaultValue="+852" className='w-[100px]'>
                                        <Select.Option value="+852">+852</Select.Option>
                                        <Select.Option value="+86">+86</Select.Option>
                                    </Select>
                                }
                                placeholder={t('form.phonePlaceholder')}
                                className='h-[48px]'
                            />
                        </Form.Item>

                        <Form.Item
                            label={t('form.message')}
                            name="message"
                            className='mb-[80px]'
                        >
                            <TextArea
                                placeholder={t('form.messagePlaceholder')}
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
                                {t('form.submit')}
                            </Button>
                        </Form.Item>
                    </Form>
                    {isMobile && (
                        <div className='mt-[30px]'>
                            <img src="/images/black-red-icon.png" alt="Contact" className='w-[30px]' />
                            <p className='mt-[20px] text-[14px] text-[#666]'>
                                {t('description')}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;